# Contracts (Local Deployment)

## Contract Deployment

- Contract Source (.sol) goes through the solidity compiler
- Two files are generated
  - ABI file
  - Contract Bytecode (which is deployed to the network)
- Truffle is a CLI tool which will help us with the creation, testing and deployment of the contract

## Steps for Testing and Deployment

- Set up the solidity compiler to build the contracts
- Set up a custom Mocha or Jest test runner to test the code
- Set up a deploy script to compile and deploy the contract

## Compilation

- [compile.js](inbox/compile.js) handles the compilation of the contract using solc.
- The compiled contract is exported from the file, where the ABI and the bytecode can be accessed from.

## Testing

- For testing the contract, we need to create a local test network using Ganache which will deploy the bytecode of the compiled contract.
- For accessing this network from JS, we will use the Web3JS library which uses the generated ABI in order to test the contract.

- Test Process

  - Start Mocha
  - Deploy a new contract
  - Manipulate the contract
  - Make an assertion about the contract

- Ganache provides unlocked accounts on the local test network which can be used to deploy the contract and test the transactions.
- To deploy the contract, we simply need to import the compiled `interface` (ABI) and the `bytecode` from the js file.
- Web3 can be used to create a new contract or communicate with an existing contract.

---

# Contracts (Test Deployment)

## Infura API
