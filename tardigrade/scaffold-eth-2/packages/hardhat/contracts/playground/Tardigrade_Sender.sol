// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import { IRouterClient } from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import { LinkTokenInterface } from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";

contract TardigradeSender_Unsafe {
	address link;
	address router;
	uint256 someNumber = 0;
	bool public is_real = true;

	constructor(address _link, address _router) {
		link = _link;
		router = _router;
		LinkTokenInterface(link).approve(router, type(uint256).max);
	}

	function send(
		address receiver,
		uint256 _someNumber,
		bool _is_real,
		uint64 destinationChainSelector
	) external {
		// TODO: add only owner
		uint256 higherNimber = _someNumber + 1;

		Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
			receiver: abi.encode(receiver),
			data: abi.encode(higherNimber, _is_real),
			tokenAmounts: new Client.EVMTokenAmount[](0),
			extraArgs: "",
			feeToken: link
		});
		IRouterClient(router).ccipSend(destinationChainSelector, message);

		is_real = false;
	}
}
