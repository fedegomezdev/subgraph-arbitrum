import {
  Transfer as TransferUsdcEvent,
  USDC as UsdcContract,
} from "../generated/usdc/USDC";
import {
  Transfer as TransferWbtcEvent,
  WBTC as WbtcContract,
} from "../generated/wbtc/WBTC";
import {
  Transfer as TransferWethEvent,
  WETH as WethContract,
} from "../generated/weth/WETH";
import { Token, User, Balance } from "../generated/schema";

import { BigInt } from "@graphprotocol/graph-ts";

export function handleUsdcTransfer(event: TransferUsdcEvent): void {
  const tokenContract = UsdcContract.bind(event.address);
  let userFrom = User.load(event.params.from.toHexString());
  if (!userFrom) {
    userFrom = new User(event.params.from.toHexString());
    userFrom.save();
  }
  let userTo = User.load(event.params.to.toHexString());
  if (!userTo) {
    userTo = new User(event.params.to.toHexString());
    userTo.save();
  }
  let token = Token.load(event.address.toHexString());
  if (!token) {
    token = new Token(event.address.toHexString());
    token.name = tokenContract.name();
    token.symbol = tokenContract.symbol();
    token.totalSupply = tokenContract.totalSupply();
    token.save();
  }
  let balanceFrom = Balance.load(
    event.params.from.toHexString() + event.address.toHexString()
  );
  if (!balanceFrom) {
    balanceFrom = new Balance(
      event.params.from.toHexString() + event.address.toHexString()
    );
    balanceFrom.user = event.params.from.toHexString();
    balanceFrom.token = event.address.toHexString();
  }
  balanceFrom.balance = tokenContract.balanceOf(event.params.from);
  balanceFrom.save();

  let balanceTo = Balance.load(
    event.params.to.toHexString() + event.address.toHexString()
  );
  if (!balanceTo) {
    balanceTo = new Balance(
      event.params.to.toHexString() + event.address.toHexString()
    );
    balanceTo.user = event.params.to.toHexString();
    balanceTo.token = event.address.toHexString();
  }
  balanceTo.balance = tokenContract.balanceOf(event.params.to);
  balanceTo.save();
}

export function handleWbtcTransfer(event: TransferWbtcEvent): void {
  const tokenContract = WbtcContract.bind(event.address);
  let userFrom = User.load(event.params.from.toHexString());
  if (!userFrom) {
    userFrom = new User(event.params.from.toHexString());
    userFrom.save();
  }
  let userTo = User.load(event.params.to.toHexString());
  if (!userTo) {
    userTo = new User(event.params.to.toHexString());
    userTo.save();
  }
  let token = Token.load(event.address.toHexString());
  if (!token) {
    token = new Token(event.address.toHexString());
    token.name = tokenContract.name();
    token.symbol = tokenContract.symbol();
    token.totalSupply = tokenContract.totalSupply();
    token.save();
  }
  let balanceFrom = Balance.load(
    event.params.from.toHexString() + event.address.toHexString()
  );
  if (!balanceFrom) {
    balanceFrom = new Balance(
      event.params.from.toHexString() + event.address.toHexString()
    );
    balanceFrom.user = event.params.from.toHexString();
    balanceFrom.token = event.address.toHexString();
  }
  balanceFrom.balance = tokenContract.balanceOf(event.params.from);
  balanceFrom.save();

  let balanceTo = Balance.load(
    event.params.to.toHexString() + event.address.toHexString()
  );
  if (!balanceTo) {
    balanceTo = new Balance(
      event.params.to.toHexString() + event.address.toHexString()
    );
    balanceTo.user = event.params.to.toHexString();
    balanceTo.token = event.address.toHexString();
  }
  balanceTo.balance = tokenContract.balanceOf(event.params.to);
  balanceTo.save();
}

export function handleWethTransfer(event: TransferWethEvent): void {
  const tokenContract = WethContract.bind(event.address);
  let userFrom = User.load(event.params.from.toHexString());
  if (!userFrom) {
    userFrom = new User(event.params.from.toHexString());
    userFrom.save();
  }
  let userTo = User.load(event.params.to.toHexString());
  if (!userTo) {
    userTo = new User(event.params.to.toHexString());
    userTo.save();
  }
  let token = Token.load(event.address.toHexString());
  if (!token) {
    token = new Token(event.address.toHexString());
    token.name = tokenContract.name();
    token.symbol = tokenContract.symbol();
    token.totalSupply = tokenContract.totalSupply();
    token.save();
  }
  let balanceFrom = Balance.load(
    event.params.from.toHexString() + event.address.toHexString()
  );
  if (!balanceFrom) {
    balanceFrom = new Balance(
      event.params.from.toHexString() + event.address.toHexString()
    );
    balanceFrom.user = event.params.from.toHexString();
    balanceFrom.token = event.address.toHexString();
  }
  balanceFrom.balance = tokenContract.balanceOf(event.params.from);
  balanceFrom.save();

  let balanceTo = Balance.load(
    event.params.to.toHexString() + event.address.toHexString()
  );
  if (!balanceTo) {
    balanceTo = new Balance(
      event.params.to.toHexString() + event.address.toHexString()
    );
    balanceTo.user = event.params.to.toHexString();
    balanceTo.token = event.address.toHexString();
  }
  balanceTo.balance = tokenContract.balanceOf(event.params.to);
  balanceTo.save();
}

export function handleAllTransfers(event: TransferWethEvent): void {
  //User From
  let userFrom = User.load(event.params.from.toHexString());
  if (!userFrom) {
    userFrom = new User(event.params.from.toHexString());
    userFrom.save();
  }

  //User To
  let userTo = User.load(event.params.to.toHexString());
  if (!userTo) {
    userTo = new User(event.params.to.toHexString());
    userTo.save();
  }

  // Token
  let token = Token.load(event.address.toHexString());
  if (!token) {
    const tokenContract = WethContract.bind(event.address);
    token = new Token(event.address.toHexString());
    token.name = tokenContract.name();
    token.symbol = tokenContract.symbol();
    token.totalSupply = tokenContract.totalSupply();
    token.save();
  }

  // User Balance From
  let balanceFrom = Balance.load(
    event.params.from.toHexString() + event.address.toHexString()
  );
  if (!balanceFrom) {
    balanceFrom = new Balance(
      event.params.from.toHexString() + event.address.toHexString()
    );
    balanceFrom.user = event.params.from.toHexString();
    balanceFrom.token = event.address.toHexString();
    balanceFrom.balance = BigInt.fromI32(0); //event.params.value;
  }
  balanceFrom.balance = balanceFrom.balance.minus(event.params.value);
  balanceFrom.save();

  // User Balance To
  let balanceTo = Balance.load(
    event.params.to.toHexString() + event.address.toHexString()
  );
  if (!balanceTo) {
    balanceTo = new Balance(
      event.params.to.toHexString() + event.address.toHexString()
    );
    balanceTo.user = event.params.to.toHexString();
    balanceTo.token = event.address.toHexString();
    balanceTo.balance = BigInt.fromI32(0); //BigInt(0);
  }
  balanceTo.balance = balanceTo.balance.plus(event.params.value);
  balanceTo.save();
}
