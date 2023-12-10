// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { IRouterClient } from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import { LinkTokenInterface } from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";
import { ChainlinkNFT } from "./ChainlinkNFT.sol";

contract SourceMinter {
	// Custom errors to provide more descriptive revert messages.
	error NotEnoughBalance(uint256 currentBalance, uint256 calculatedFees); // Used to make sure contract has enough balance to cover the fees.
	error NothingToWithdraw(); // Used when trying to withdraw Ether but there's nothing to withdraw.
	error FailedToWithdrawEth(address owner, address target, uint256 value); // Used when the withdrawal of Ether fails.

	IRouterClient public router;
	LinkTokenInterface public linkToken;
	uint64 public destinationChainSelectorSepolia;
	uint64 public destinationChainSelectorPolygon;
	address public owner;
	address public destinationMinterSepolia;
	address public destinationMinterPolygon;
	ChainlinkNFT public nft;

	// Mapping for destination minters and chain selectors
	mapping(uint64 => address) public destinationMinters;
	mapping(string => uint64) public chainSelectors;

	event MessageSent(bytes32 messageId);

	constructor(
		address routerAddress,
		address linkTokenAddress,
		address nftAddress,
		string[] memory chainNames,
		uint64[] memory chainSelectorsArray,
		address[] memory destMinterAddresses
	) {
		require(
			chainNames.length == chainSelectorsArray.length &&
				chainNames.length == destMinterAddresses.length,
			"Array lengths must match"
		);
		owner = msg.sender;
		router = IRouterClient(routerAddress);
		linkToken = LinkTokenInterface(linkTokenAddress);
		linkToken.approve(routerAddress, type(uint256).max);
		nft = ChainlinkNFT(nftAddress);

		for (uint i = 0; i < chainNames.length; i++) {
			chainSelectors[chainNames[i]] = chainSelectorsArray[i];
			destinationMinters[chainSelectorsArray[i]] = destMinterAddresses[i];
		}
	}

	// FUNCTIONS ON FUJI CHAIN

	// minting
	function mint(uint8 active, string memory counter) internal {
		nft.mint(msg.sender, active, counter);
	}

	// transferring
	function transfer(address to, uint256 tokenId) internal {
		nft.transferFrom(msg.sender, to, tokenId);
	}

	// updating metadata
	function update(
		uint256 tokenID,
		uint8 active,
		string memory counter,
		string memory image,
		string memory video
	) internal {
		nft.updateMetadata(tokenID, active, counter, image, video);
	}

	// Cross-chain function calls

	function crossChainCall(
		string memory chain,
		bytes memory data,
		uint256 gasLimit
	) internal {
		uint64 chainSelector = chainSelectors[chain];
		address destinationMinter = destinationMinters[chainSelector];

		Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
			receiver: abi.encode(destinationMinter),
			data: data,
			tokenAmounts: new Client.EVMTokenAmount[](0),
			extraArgs: Client._argsToBytes(
				Client.EVMExtraArgsV1({ gasLimit: gasLimit, strict: false })
			),
			feeToken: address(linkToken)
		});

		uint256 fees = router.getFee(chainSelector, message);
		if (fees > linkToken.balanceOf(address(this)))
			revert NotEnoughBalance(linkToken.balanceOf(address(this)), fees);

		bytes32 messageId = router.ccipSend(chainSelector, message);
		emit MessageSent(messageId);
	}

	function genericCrossChainCall(
		string memory chain,
		string memory functionSignature,
		bytes memory args,
		uint256 gasLimit
	) internal {
		bytes memory data = abi.encodePacked(
			bytes4(keccak256(bytes(functionSignature))),
			args
		);
		crossChainCall(chain, data, gasLimit);
	}

	// minting
	function crossChainMint(
		string memory chain,
		uint8 active,
		string memory counter
	) internal {
		genericCrossChainCall(
			chain,
			"mint(address,uint8,string)",
			abi.encode(msg.sender, active, counter),
			500_000
		);
	}

	// transfer
	function crossChainTransfer(
		string memory chain,
		address to,
		uint256 tokenId
	) internal {
		genericCrossChainCall(
			chain,
			"transferFrom(address,address,uint256)",
			abi.encode(msg.sender, to, tokenId),
			500_000
		);
	}

	// updating metadata
	function crossChainUpdate(
		string memory chain,
		uint256 tokenID,
		uint8 active,
		string memory counter,
		string memory image,
		string memory video
	) internal {
		genericCrossChainCall(
			chain,
			"updateMetadata(uint256,uint8,string,string,string)",
			abi.encode(tokenID, active, counter, image, video),
			500_000
		);
	}

	// Minting & Updating on all chains

	function mintAll(string[] memory chains, string memory counter) external {
		mint(1, counter);
		for (uint i = 0; i < chains.length; i++) {
			crossChainMint(chains[i], 0, counter);
		}
	}

	function updateAll(
		string[] memory chains,
		uint256 tokenID,
		string memory counter,
		string memory image,
		string memory video
	) external {
		update(tokenID, 1, counter, image, video);
		for (uint i = 0; i < chains.length; i++) {
			crossChainUpdate(chains[i], tokenID, 0, counter, image, video);
		}
	}

	function transferAll(
		string[] memory chains,
		address to,
		uint256 tokenID
	) external {
		transfer(to, tokenID);
		for (uint i = 0; i < chains.length; i++) {
			crossChainTransfer(chains[i], to, tokenID);
		}
	}

	modifier onlyOwner() {
		require(msg.sender == owner);
		_;
	}

	function linkBalance(address account) public view returns (uint256) {
		return linkToken.balanceOf(account);
	}

	function withdrawLINK(address beneficiary) public onlyOwner {
		uint256 amount = linkToken.balanceOf(address(this));
		if (amount == 0) revert NothingToWithdraw();
		linkToken.transfer(beneficiary, amount);
	}
}
