import { ethers } from "hardhat";

async function main() {
    // Replace 'Blocked' with the actual contract name and 'YourContractAddress' with the contract's address.
    const contract = await ethers.getContractAt("Blocked", "YourContractAddress");
  
    // Now you can interact with the contract.
    const isHacked = await contract.isHacked();
    console.log(`Is the contract hacked? ${isHacked}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  