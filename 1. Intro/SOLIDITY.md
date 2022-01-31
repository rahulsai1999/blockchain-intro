# Solidity programming

- written in .sol files
- strongly typed
- syntax similar to JavaScript
- smart contracts can be easily written in solidity

### Workflow

- **Contract Definition:** write contract in solidity file (.sol)
- **Compile Solidity:** compile .sol files which outputs
  - byte code ready for deployment
  - application binary interface (ABI)
- The front-end or JavaScript will interact with the ABI which serves as a translator to read the jibberish Bytecode.

### Common Function types

- **public** : accessible to all
- **private** : only this contract can call this function
- **view or constant**: this function returns data and does not modify contracts data
- **pure**: function will not modify or read contracts data
- **payable**: calling this function for sending ether

# Account Transactions

- Any change that has to be done on the blockchain has to be done through transactions.
- These transactions take some amount of ether (very miniscule)
- **Gas** is the price paid to get your contract deployed and run on the blockchain
- **Gas Limit** is the gas amount which is at most needed to complete the function execution.
- **Gas Price** is the multiplier which is used to execute the gas transactions. This multiplied with the Gas amount gives us the amount of ether needed to execute.
