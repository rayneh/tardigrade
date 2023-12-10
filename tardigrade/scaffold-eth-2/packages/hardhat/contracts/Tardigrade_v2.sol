// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import { IRouterClient } from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import { LinkTokenInterface } from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";

import { CCIPReceiver } from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";

contract Tardigrade_v2 is CCIPReceiver {
	// Link Address of deployed Chain
	address link;
	// Router Address of CCIP Router of deployed Chain
	address router;
	// The current owner of Tardigrade
	address public owner;
	// Identifier to check if its a the real Tardigrade
	bool public is_real;

	// For ai powerd tardi generation
	string[] public theme_sepolia;
	string[] public theme_fuji;
	uint256 public tardi_level;
	string[] public prompt_string;
	bool public is_fuji;
	bool public is_sepolia;

	// The current Tardigrade
	string public tardigrade;
	string[] public all_ipfs_links;

	// For register ai nodes
	address[] public registered_nodes;
	address[] public accepted_nodes;

	// For pseudeo random number
	uint256 private nonce;

	/**
	 * @dev Constructor function for the contract.
	 * @param _is_real A boolean value indicating whether the contract is real or not.
	 * @param _link The address of the Link token contract.
	 * @param _router The address of the router contract.
	 */
	constructor(
		bool _is_real,
		address _link,
		address _router,
		bool _is_sepolia,
		bool _is_fuji
	) CCIPReceiver(_router) {
		link = _link;
		router = _router;
		LinkTokenInterface(link).approve(router, type(uint256).max);
		is_real = _is_real;
		tardi_level = 0;
		theme_sepolia = [
			"Zeus",
			"Poseidon",
			"Hades",
			"Hermes",
			"Athena",
			"Apollo",
			"Artemis",
			"Ares",
			"Demeter",
			"Hephaestus"
		];
		theme_fuji = [
			"Summit",
			"Peak",
			"Range",
			"Slope",
			"Cliff",
			"Valley",
			"Ridge",
			"Plateau",
			"Glacier",
			"Altitude"
		];
		is_sepolia = _is_sepolia;
		is_fuji = _is_fuji;
	}

	/**
	 * @dev Internal function to handle receiving a Cross-Chain Interoperability Protocol (CCIP) message.
	 * @param message The CCIP message to be received, encoded as a Client.Any2EVMMessage struct.
	 */
	function _ccipReceive(
		Client.Any2EVMMessage memory message
	) internal override {
		(tardi_level, owner, is_real, prompt_string) = abi.decode(
			message.data,
			(uint256, address, bool, string[])
		);
	}

	/**
	 * @dev Sends a message to the specified receiver on the destination chain.
	 * @param receiver The address of the receiver on the destination chain.
	 * @param destinationChainSelector The selector for the destination chain.
	 */
	function send(address receiver, uint64 destinationChainSelector) external {
		require(owner != msg.sender, "You are not the owner");
		require(is_real, "This is not the real tardigrade");

		if (is_fuji) {
			uint256 pseudoNumber = generateRandomNumber();
			prompt_string.push(theme_fuji[pseudoNumber]);
			prompt_string.push(",");
			tardi_level += 1;
		}

		if (is_sepolia) {
			uint256 pseudoNumber = generateRandomNumber();
			prompt_string.push(theme_sepolia[pseudoNumber]);
			prompt_string.push(",");
			tardi_level += 1;
		}

		Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
			receiver: abi.encode(receiver),
			data: abi.encode(tardi_level, owner, is_real, prompt_string),
			tokenAmounts: new Client.EVMTokenAmount[](0),
			extraArgs: "",
			feeToken: link
		});

		IRouterClient(router).ccipSend(destinationChainSelector, message);
		is_real = false;
	}

	/*********************************
	 ******* Ai Node Handling ********
	 ********************************/

	/**
	 * Registers a new node address.
	 *
	 * This function allows the registration of a new node address to the list of registered nodes.
	 *
	 * @param nodeAddress The address of the node to be registered.
	 */
	function registerNode(address nodeAddress) public {
		registered_nodes.push(nodeAddress);
	}

	/**
	 * @dev Sets the IPFS link for the tradigrade.
	 *
	 * This function can only be called by accepted nodes of the tradigrade. The IPFS link is used to store the evolution of the tradigrade.
	 *
	 * @param newIpfsLink The new IPFS link to be set for the tradigrade.
	 *
	 * @notice This function can only be called by accepted nodes of the tradigrade. The IPFS link is updated with the new IPFS link provided.
	 * The new IPFS link is also added to the list of all IPFS links for the tradigrade.
	 */
	function setIpfsLink(string memory newIpfsLink) public {
		require(
			is_real,
			"Only for the real tradigrade can be new evolution set"
		);
		bool isAcceptedNode = false;
		for (uint i = 0; i < accepted_nodes.length; i++) {
			if (accepted_nodes[i] == msg.sender) {
				isAcceptedNode = true;
				break;
			}
		}
		require(isAcceptedNode, "Only accepted nodes can call this function");
		tardigrade = newIpfsLink;
		all_ipfs_links.push(newIpfsLink);
	}

	/*********************************
	 ************* UTILS *************
	 ********************************/

	/**
	 * @dev Generates a random number.
	 * @return A random number between 0 and 9 (inclusive).
	 */
	function generateRandomNumber() public returns (uint256) {
		nonce++;
		uint256 randomNumber = uint256(
			keccak256(abi.encodePacked(block.timestamp, msg.sender, nonce))
		) % 10;
		return randomNumber;
	}

	/**
	 * @dev Changes the owner of the tardigrade contract.
	 * @param _owner The address of the new owner.
	 */
	function changeOwner(address _owner) external {
		require(owner == msg.sender, "You are not the owner");
		require(is_real, "This is not the real tardigrade");
		owner = _owner;
	}

	/**
	 * @dev Returns the address of the owner.
	 * @return address The address of the owner.
	 */
	function getOwner() external view returns (address) {
		return owner;
	}
}
