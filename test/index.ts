import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";

describe("Contract", function() {
  it("Should give the sender the total supply of tokens", async function() {
    const Contract = await ethers.getContractFactory("SDLT");
    const contract = await Contract.deploy()
    await contract.deployed()
    const [owner] = await ethers.getSigners();
    const totalSupply = (await (await contract.connect(owner)).totalSupply())

    expect(totalSupply.eq("100000000000000000000000")).to.be.true
    expect(BigNumber.from(await contract.balanceOf(owner.address)).eq("100000000000000000000000")).to.be.true
  })
})
