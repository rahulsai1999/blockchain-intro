# Introduction to Solidity

## Basic Solidity

### Workflow

- **Contract Definition:** write contract in solidity file (.sol)
- **Compile Solidity:** compile .sol files which outputs
  - byte code ready for deployment (code which is deployed on the contract account for a particular network)
  - application binary interface or ABI (The front-end or JavaScript will interact with the ABI which serves as a translator to read the jibberish Bytecode)

### Common Function types

- **public** : accessible to all
- **private** : only this contract can call this function
- **view or constant**: this function returns data and does not modify contracts data
- **pure**: function will not modify or read contracts data
- **payable**: calling this function for sending ether

### Solidity Gotchas

- The deployed contract usually creates getter functions for all the public variables automatically.
- For example: the `getMessage()` function in this [test contract](_contract.sol) is superflous, as the deployed contract has already got a getter function for the message variable

---

## Deployment of Contracts

- The process of deploying the contracts is similar to a normal transaction
- The sender account (from) is the deployer, and the `to` field is left blank to denote that this transaction is for a contract.
- The extra `data` field of the transaction is the compiled bytecode of the contract.
- The `value` field is the initial amount of money that we can send to a contract to play around.

## Accounts & Transactions

- Any change that has to be done on the blockchain has to be done through transactions, and we must wait for the proof of work algorithm to complete (i.e. the mining process)
- These transactions take some amount of ether (very miniscule) and also takes some time to be executed.
- There are two types of contract functions on the deployed version:
  - Calls: doesn't modify anything, free and instant
  - Transaction: modifies data, costs money and takes time (also returns the transaction hash)
- Most accounts use the BIP39 Mnemonic algorithm to store the account details in 12 words.

## Transaction Terms

- **Gas or Gas Fees** is the price paid to get your contract deployed and run on the blockchain
- **Gas Limit** is the gas amount which is at most needed to complete the function execution.
- **Gas Price** is the multiplier which is used to execute the gas transactions. This multiplied with the Gas amount gives us the amount of ether needed to execute. Basically it is the amount of wei the sender is willing to pay per unit gas to get this transaction processed.

- Total Gas fees = Gas Limit \* Gas Price (wei/gas)
- Example:
  - Gas Limit for a transaction: 14
  - Gas Price: 300
  - Total Gas: 14\*300 = 4200 Wei
