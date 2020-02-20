# Intro to Ethereum

## History of Blockchain

### Bitcoin
- Initially created to allow P2P payments without a financial intermediary.
- Another motive was to allow the reversal of transactions, i.e. customers charging back a purchase.

### Ethereum
- Allowed more programmatic control over transactions i.e Decentralized autonomous corporations.
- Introduced the idea of smart contracts, to send and receive currency beyond just humans.


## Basic Description to Ethereum
- Ethereum networks used to transfer money and store data, where each networks are former by one or more nodes running the Ethereum client.
- Each node can contain a full copy of blockchain, which is a database which stores a record of every transaction that has taken place.

### Metamask
- Client for testing out the etheruem network. 
```
Account address : email id or username 
public key      : also the part of password 
private key     : true access to your funds
```

## Workflow
- Front-end 
- Obtain the receiver address
- Server uses the web3 library to create transaction object
- This trans object is sent to the test network
- Server waits for transaction to be confirmed
- Backend server sent success message to browser

## Transaction Object
- nonce (how many times sender has sent a transaction)
- to (addresss of account money is going to)
- value (amount of ether to send to target address)
- gasPrice (amount of ether sender is willing to pay per unit)
- startGas/gasLimit
- v,r,s (cryptographic pieces used to generate the sender's account address from the sender's private key) i.e one way process

### Why the waiting period?

- Transaction sent to a particular node, and it might have other transactions too.
- The block assembles a list of transactions and the validation logic takes time.
- The validation logic is the mining part.

### Basic Blockchain
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
A. There are multiple peers where the blockchain has been copied, and the highest voted hash of the block remains(if there's a disrepancy). You need to just look at the top peer's last block hash to determine if the chain has been disturbed.

### Tokens and Coinbase 

- Tokens are those blocks where the data part consists of transactions in the form of Amount, From, To.
- A problem arises here i.e. if the transaction initializer has that much amount in his account or not.
- This can be solved by adding a coinbase field in the block.
- Coinbase is in the format of Amount -> Username
- The subsequent blocks can use the previous hash to refer the blocks before it, thereby it knows who has what amount of money in their accounts.

### Block time

- The amount of time that it takes to hash everything from zero to the target nonce value, so that the output hash could be less than an arbitrary target value is called block time.
- This arbitrary target value is adjusted over time to keep the block time constant at 15 seconds (Etheruem target block time)







# Smart Contracts

- an account controlled by code instead of people.

Contract account: 

- balance : amount of ether this account owns
- storage : data storage for this contract (any type of data that the application is using)
- code    : raw machine code for this contract

- **External account** like Metamask are completely different from these contract accounts as they are owned and controlled by individuals and can be used on any Ether Network.

- **Contract accounts** exist on the specific Ethereum network not controlled by anyone.


## Making contracts

- **Contract source** - code on our machine that instructs the contract how it should behave and how it should handle money, and deployed to a specific ether network.
- **Contract instance** - The actual contract instance or account on the ether network.


