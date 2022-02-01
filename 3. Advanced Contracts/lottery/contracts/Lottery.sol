// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function random() private view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.timestamp,
                        block.number,
                        block.difficulty,
                        block.gaslimit,
                        block.coinbase
                    )
                )
            );
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function enterLottery() public payable {
        require(msg.value >= .01 ether);
        players.push(msg.sender);
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    function pickWinner() public restricted {
        uint256 winnerId = random() % players.length;
        address payable winner = payable(players[winnerId]);
        winner.transfer(address(this).balance);
        players = new address[](0); // reset contract state
    }
}
