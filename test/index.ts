import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});

describe("Contract", function() {
  it("Should give the sender the total supply of tokens", async function() {
    const Contract = await ethers.getContractFactory("TBD");
    const contract = await Contract.deploy()
    await contract.deployed()
    const [owner] = await ethers.getSigners();
    const totalSupply = (await (await contract.connect(owner)).totalSupply())

    expect(totalSupply.eq("100000000000000000000000")).to.be.true
    expect(BigNumber.from(await contract.balanceOf(owner.address)).eq("100000000000000000000000")).to.be.true
  })
})
