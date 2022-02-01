const Web3 = require("web3");
const dotenv = require("dotenv");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const { interface, bytecode } = require("./compile");

dotenv.config();

const seed = process.env.SEED;
const url = process.env.ROPSTEN_URL;

const provider = new HDWalletProvider(seed, url);

const web3 = new Web3(provider);

const deploy = async () => {
  // get list of accounts
  const accounts = await web3.eth.getAccounts();

  // use one of the accounts to deploy the contract
  const inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({
      from: accounts[0],
      gas: "1000000",
    });

  console.log(inbox.options.address);
  provider.engine.stop();
};

deploy();

// Deployed Contract Address: 0x0B47f3C74f523E7ae2080410E82001D8a8eF5E79
// https://ropsten.etherscan.io/address/0x0B47f3C74f523E7ae2080410E82001D8a8eF5E79
