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
    .deploy({ data: evm.bytecode.object })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();
