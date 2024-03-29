// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11; // version of solidity so that there are no breaking changes

contract Inbox {
    // storage or state variables - persisted in the blockchain
    string public message;

    // constructor
    constructor(string memory initMessage) {
        message = initMessage;
    }

    // member functions
    // important - don't return data on setter functions
    // i.e. where state variables of the contract are modified
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
