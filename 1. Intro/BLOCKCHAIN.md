# Basics of Blockchain

[Great Resource](https://andersbrownworth.com/blockchain/blockchain)

## Basic Blockchain

- Hashing is returning a fixed unique hash for any amount of data.
- Signing is important to know if the data has been changed. This is done using mining.
- Mining tries every combination of nonce to fit or sign the data into the block.

### Taxonomy of a block and a blockchain

A block consists of a

- block number
- nonce(number of transactions)
- data of the block

A block is invalid if the hash is not signed i.e does not follow a fixed pattern at start.

A blockchain consists of a chain of these aforementioned blocks, where these block contains an extra field called Previous.

This previous is the hash of the previous block on the chain.

So each time a block is changed, the block and the subsequent blocks have to be re-mined so that the chain is valid. The longer the block is backwards, the longer it takes to mine.
This is how the blockchain resists change.

### Distributed Blockchain

Q. How do you know if the block or the blockchain have been remined?
A. There are multiple peers where the blockchain has been copied, and the highest voted hash of the block remains(if there's a discrepancy). You need to just look at the top peer's last block hash to determine if the chain has been disturbed.

### Tokens and Coinbase

- Tokens are those blocks where the data part consists of transactions in the form of Amount, From, To.
- A problem arises here i.e. if the transaction initializer has that much amount in his account or not.
- This can be solved by adding a coinbase field in the block.
- Coinbase is in the format of Amount -> Username
- The subsequent blocks can use the previous hash to refer the blocks before it, thereby it knows who has what amount of money in their accounts.

### Block time

- The amount of time that it takes to hash everything from zero to the target nonce value, so that the output hash could be less than an arbitrary target value is called block time.
- This process is essentially done so that each block's nonce value is unique, by controlling a specific target value for the hash.
- This arbitrary target value is adjusted over time to keep the block time constant at 15 seconds (Etheruem target block time).
- If one peer calculates the output hash correctly, then it distributes it to various other peers to confirm the transaction.
- This process is called the proof of work. (POW algorithm)
