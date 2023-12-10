// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

//Sender
import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import { IRouterClient } from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import { LinkTokenInterface } from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";

//Receiver
import { CCIPReceiver } from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";

contract Tardigrade is CCIPReceiver {
	/*Sender*/
	address sender_link;
	address sender_router;
	uint256 state = 0;
	bool public is_real = true;

	/*Receiver*/
	address receiver_router;
	address receiver_link;
	uint64 destinationChainSelector = 2664363617261496610;
	address public latestSender;

	/*Locker*/
	bool public is_locked = false;

	constructor(address _receiver_router) CCIPReceiver(_receiver_router) {}

	function set_sender_chunk(
		address _sender_router,
		address _sender_link
	) public isContractLocked {
		sender_link = _sender_link;
		sender_router = _sender_router;
		LinkTokenInterface(sender_link).approve(
			sender_router,
			type(uint256).max
		);
	}

	function set_receiver_chunk(
		address _receiver_router,
		address _receiver_link
	) public isContractLocked {
		receiver_router = _receiver_router;
		receiver_link = _receiver_link;
		LinkTokenInterface(receiver_link).approve(
			_receiver_router,
			type(uint256).max
		);
	}

	function send(
		address receiver,
		uint256 _state,
		bool _is_real,
		uint64 _destinationChainSelector
	) external {
		// TODO: add only owner
		uint256 increased_state = _state + 1;

		Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
			receiver: abi.encode(receiver),
			data: abi.encode(increased_state, _is_real),
			tokenAmounts: new Client.EVMTokenAmount[](0),
			extraArgs: "",
			feeToken: sender_link
		});
		IRouterClient(sender_router).ccipSend(
			_destinationChainSelector,
			message
		);

		is_real = false;
	}

	function _ccipReceive(
		Client.Any2EVMMessage memory message
	) internal override {
		latestSender = abi.decode(message.sender, (address));
		(state, is_real) = abi.decode(message.data, (uint256, bool));
	}

	/**
	 * Utility Functions
	 */

	/**
	 * @dev Declares isContractLocked Modifier
	 */
	modifier isContractLocked() {
		require(is_locked == false, "The contract is locked");
		_;
	}

	/**
	 * @dev Sets the address of the sender link.
	 * @param _sender_link The address of the sender link.
	 */
	function set_sender_link(address _sender_link) public isContractLocked {
		sender_link = _sender_link;
	}

	/**
	 * @dev Sets the address of the sender router.
	 * @param _sender_link The address of the sender router.
	 */
	function set_sender_router(address _sender_link) public isContractLocked {
		sender_link = _sender_link;
	}

	/**
	 * @dev Sets the address of the receiver router.
	 * @param _receiver_router The address of the receiver router.
	 */
	function set_receiver_router(
		address _receiver_router
	) public isContractLocked {
		receiver_router = _receiver_router;
	}

	/**
	 * @dev Sets the address of the receiver link.
	 * @param _receiver_link The address of the receiver link.
	 */
	function set_receiver_link(address _receiver_link) public isContractLocked {
		receiver_link = _receiver_link;
	}

	/**
	 * @dev Sets the destination chain selector.
	 * @param _destinationChainSelector The destination chain selector.
	 */
	function set_destinationChainSelector(
		uint64 _destinationChainSelector
	) public isContractLocked {
		destinationChainSelector = _destinationChainSelector;
	}

	/**
	 * @dev Locks the contract by setting the is_locked flag to true.
	 */
	function lock_it() public {
		is_locked = true;
	}
}
