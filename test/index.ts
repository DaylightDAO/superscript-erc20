import { expect } from "chai";
import { ethers } from "hardhat";

describe("Contract", function() {
  it("Should give the sender the total supply of tokens", async function() {
    const Contract = await ethers.getContractFactory("TBD");
    const contract = await Contract.deploy()
    await contract.deployed()
    const [owner] = await ethers.getSigners();
    const totalSupply = (await (await contract.connect(owner)).totalSupply()).toNumber()

    expect(totalSupply).to.equal(100000)
    expect(await contract.balanceOf(owner.address)).to.equal(100000)
  })
})
