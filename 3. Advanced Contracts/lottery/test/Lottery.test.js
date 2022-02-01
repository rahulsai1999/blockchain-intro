const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const { abi, evm } = require("../compile");

let accounts;
let lottery;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  lottery = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Lottery", () => {
  it("deploys a contract", () => {
    assert.ok(lottery.options.address);
  });

  it("enters multiple players into lottery", async () => {
    await lottery.methods
      .enterLottery()
      .send({ from: accounts[0], value: web3.utils.toWei("0.1", "ether") });

    await lottery.methods
      .enterLottery()
      .send({ from: accounts[1], value: web3.utils.toWei("0.1", "ether") });

    const players = await lottery.methods
      .getPlayers()
      .call({ from: accounts[0] });

    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(2, players.length);
  });

  it("denies entry if minimum amount not met", async () => {
    try {
      await lottery.methods
        .enterLottery()
        .send({ from: accounts[0], value: 1 });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("testing restriction modifiers", async () => {
    try {
      await lottery.methods.pickWinner().send({ from: accounts[1] });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("End-to-End Testing", async () => {
    let contractBalance, beforeBalance, afterBalance;

    // enter single user to lottery
    await lottery.methods
      .enterLottery()
      .send({ from: accounts[0], value: web3.utils.toWei("2", "ether") });

    // note balance of user after sending money and before winner is picked
    beforeBalance = await web3.eth.getBalance(accounts[0]);

    // check if contract balance matches the money sent to it
    contractBalance = await web3.eth.getBalance(lottery.options.address);
    assert.equal(web3.utils.toWei("2", "ether"), contractBalance);

    // pick winner and check if balance is sent to winner
    await lottery.methods.pickWinner().send({ from: accounts[0] });
    afterBalance = await web3.eth.getBalance(accounts[0]);
    const difference = afterBalance - beforeBalance;
    assert(difference > web3.utils.toWei("1.99", "ether"));

    // check contract state reset
    const players = await lottery.methods
      .getPlayers()
      .call({ from: accounts[0] });

    assert.equal(0, players.length);

    // check contract balance again
    contractBalance = await web3.eth.getBalance(lottery.options.address);
    assert.equal(0, contractBalance);
  });
});
