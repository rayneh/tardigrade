// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { CCIPReceiver } from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import { LinkTokenInterface } from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";
import { IRouterClient } from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";

contract TardigradeReceiver_Unsafe is CCIPReceiver {
	address public latestSender;
	uint256 public someNumber;
	bool public is_real = false;

	address linkSepolia;
	address sepoliaRouter;
	uint64 destinationChainSelector = 2664363617261496610;

	constructor(
		address _sepoliaRouter,
		address _linkSepolia
	) CCIPReceiver(_sepoliaRouter) {
		sepoliaRouter = _sepoliaRouter;
		linkSepolia = _linkSepolia;
		LinkTokenInterface(_linkSepolia).approve(
			_sepoliaRouter,
			type(uint256).max
		);
	}

	function _ccipReceive(
		Client.Any2EVMMessage memory message
	) internal override {
		latestSender = abi.decode(message.sender, (address));
		(someNumber, is_real) = abi.decode(message.data, (uint256, bool));
	}

	function crossChainCall(address _receiverGoerli) external {
		address receiverGoerli = _receiverGoerli;
		uint256 higherNimber = someNumber + 1;

		Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
			receiver: abi.encode(receiverGoerli),
			data: abi.encode(higherNimber, is_real),
			tokenAmounts: new Client.EVMTokenAmount[](0),
			extraArgs: "",
			feeToken: address(linkSepolia)
		});

		IRouterClient(sepoliaRouter).ccipSend(
			destinationChainSelector,
			message
		);

		is_real = false;
	}
}
