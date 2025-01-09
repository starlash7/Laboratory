import { ethers } from "hardhat";
import { expect } from "chai";

import { Exchange } from "../typechain-types/contracts/Exchange";
import { Token } from "../typechain-types/contracts/Token";
import { BigNumber } from "ethers";

const toWei = (value: number) => ethers.utils.parseEther(value.toString());
const toEther = (value: BigNumber) => ethers.utils.formatEther(value);
const getBalance = ethers.provider.getBalance;

describe("Exchange", () => {
  let owner: any;
  let user: any;
  let exchange: Exchange;
  let token: Token;

  beforeEach(async () => {
    //기본적으로 10,000개의 Ether를 가지고 있음.
    [owner, user] = await ethers.getSigners();
    const TokenFactory = await ethers.getContractFactory("Token");
    token = await TokenFactory.deploy("GrayToken", "GRAY", toWei(1000000));
    await token.deployed();

    const ExchangeFactory = await ethers.getContractFactory("Exchange");
    exchange = await ExchangeFactory.deploy(token.address);
    await exchange.deployed();
  });

  describe("addLiquidity", async () => {
    it("add Liquidty", async () => {
      await token.approve(exchange.address, toWei(1000));
      await exchange.addLiquidity(toWei(1000), { value: toWei(1000) });

      expect(await getBalance(exchange.address)).to.equal(toWei(1000));
      expect(await token.balanceOf(exchange.address)).to.equal(toWei(1000));
    });
  });

  describe("getOutputAmount", async () => {
    it("correct getOutputAmount", async () => {
      await token.approve(exchange.address, toWei(4000));
      await exchange.addLiquidity(toWei(4000), { value: toWei(1000) });
      // 4:1 비율
      console.log(
        toEther(
          await exchange.getOutputAmount(
            toWei(1),
            getBalance(exchange.address),
            token.balanceOf(exchange.address)
          )
        )
      );
    });
  });

  describe("ethToTokenSwap", async () => {
    it("correct ethToTokenSwap", async () => {
      await token.approve(exchange.address, toWei(4000));

      // GRAY:ETH 4:1
      await exchange.addLiquidity(toWei(4000), { value: toWei(1000) });

      // 1ETH: ?? GRAY
      await exchange
        .connect(user)
        .ethToTokenSwap(toWei(3.99), { value: toWei(1) });

      console.log(toEther(await token.balanceOf(user.address)));
    });
  });
});
