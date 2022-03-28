import { expect } from "chai";
const { ethers, upgrades } = require('hardhat');
import { BigNumber } from "ethers";

describe("Contract", function() {
  it("Should give the sender the total supply of tokens", async function() {
    const Contract = await ethers.getContractFactory("Scripto");
    const contract = await upgrades.deployProxy(Contract);
    await contract.deployed()
    const [owner] = await ethers.getSigners();
    const totalSupply = (await (await contract.connect(owner)).totalSupply())

    expect(totalSupply.eq("100000000000000000000000")).to.be.true
    expect(BigNumber.from(await contract.balanceOf(owner.address)).eq("100000000000000000000000")).to.be.true
  })
})
