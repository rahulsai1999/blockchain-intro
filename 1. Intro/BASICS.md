# Intro to Ethereum

## History of Blockchain

### Bitcoin

- Initially created to allow P2P payments without a financial intermediary.
- Another motive was to allow the reversal of transactions, i.e. customers charging back a purchase.

### Ethereum

- Allowed more programmatic control over transactions i.e Decentralized autonomous corporations.
- Introduced the idea of smart contracts, to send and receive currency beyond just humans.

### Basic Description to Ethereum networks

- Ethereum networks used to transfer money and store data, where each networks are former by one or more nodes running the Ethereum client.
- Each node can contain a full copy of blockchain, which is a database which stores a record of every transaction that has taken place.

### Account Terminology

| Term            | Description                                                       |
| --------------- | ----------------------------------------------------------------- |
| Account address | can be thought as similar to email id or username                 |
| Public key      | it is a part of the password (transactions are signed using this) |
| Private key     | true access to your funds (only visible to you)                   |

## Workflow of a Ethereum Transaction using Web3.js

### Steps

- Obtain the receiver address from the front-end
- Server uses the web3 library to create transaction object
- This transaction object is sent to the test network
- Server waits for transaction to be confirmed
- Backend server sent success message to browser

### Transaction Object

| Term              | Description                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| nonce             | how many times sender has sent a transaction                                                                         |
| to                | target address of the account to which the money is going to                                                         |
| value             | amount of ether to send to target address                                                                            |
| gasPrice          | amount of ether sender is willing to pay per unit                                                                    |
| startGas/gasLimit | units of gas that this transaction can consume                                                                       |
| v,r,s             | cryptographic pieces used to generate the sender's account address from the sender's private key i.e one way process |

### Why the waiting period?

- Transaction sent to a particular node, and it might have other transactions too.
- The block assembles a list of transactions and the validation logic takes time.
- The validation logic is the mining part (Hashing and adding them to the block)
