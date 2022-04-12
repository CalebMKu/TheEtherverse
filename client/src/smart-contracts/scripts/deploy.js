const { ethers } = require("hardhat");

const main = async () => {
  const factory = await ethers.getContractFactory("SendEthereum");
  const contract = await factory.deploy();

  console.log("CONTRACT ADDRESS: ", contract.address);
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
