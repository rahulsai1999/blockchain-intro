pragma solidity ^0.8.11;

contract Inbox {
    // storage or state variables - persisted in the blockchain
    string public message;

    // constructor
    constructor(string memory initMessage) public {
        message = initMessage;
    }

    // member functions
    // important - don't return data where state vairbles of the contract are changed
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
