const Web3 = require("web3");
const dotenv = require("dotenv");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const { abi, evm } = require("./compile");

dotenv.config();

const seed = process.env.SEED;
const url = process.env.ROPSTEN_URL;

const provider = new HDWalletProvider(seed, url);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();

// Deployed Contract Address: 0x0B47f3C74f523E7ae2080410E82001D8a8eF5E79
// https://ropsten.etherscan.io/address/0x0B47f3C74f523E7ae2080410E82001D8a8eF5E79

// Deployed Contract Address: 0x498a47959608D5bDd4F4A7F6F9938F64526205b0
// https://ropsten.etherscan.io/address/0x498a47959608D5bDd4F4A7F6F9938F64526205b0
