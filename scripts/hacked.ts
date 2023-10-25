 import { ethers } from "hardhat";
// async function main() {
//     const contractAddr = "0x788F8F317e320989364D99A7F5e9bc1fFEbfAC62";
// }
// scripts/deploy.js
async function main() {
    const contractAddress = "0x788F8F317e320989364D99A7F5e9bc1fFEbfAC62";
    const contractABI = 
        [{"inputs":[{"internalType":"address",
        "name":"addr","type":"address"},
        {"internalType":"string","name":"_name",
        "type":"string"}],"name":"addToWhitelist",
        "outputs":[],"stateMutability":"nonpayable","type":"function"},
        {"inputs":[{"internalType":"address","name":"addr",
        "type":"address"}],"name":"beOwner","outputs":[],
        "stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":
        "address","name":"addr","type":"address"}],"name":"getValidOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isHacked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"owners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownersName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"pwn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pwn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"returnOwnerName","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"returnOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],
        "stateMutability":"view","type":"function"}];
    

    const provider = new ethers.InfuraProvider("https://sepolia.infura.io/v3/9785587b4b6c46bfbe0d6158716d69ea");
    const signer = await provider.getSigner("0x77aC3a62c12333DD9604f8D5cD6E350Cd33D04b4");
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    // const result = await contract.addToWhitelist("0x77aC3a62c12333DD9604f8D5cD6E350Cd33D04b4",' BossLady'); 


  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  