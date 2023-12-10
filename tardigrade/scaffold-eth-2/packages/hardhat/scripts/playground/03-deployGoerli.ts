import { ethers, network, run } from "hardhat";

async function main() {
  if (network.name !== `goerli`) {
    console.error(`❌ Must be deployed to Sepolia`);
    return 1;
  }

  const senderRouterAddress = `<Has to be insert>`;
  const senderLinkAddress = `<Has to be insert>`;
  const receiverRouterAddress = `<Has to be insert>`;
  const receiverLinkAddress = `<Has to be insert>`;

  await run("compile");

  const tardigradeFactory = await ethers.getContractFactory("Tardigrade");
  const tardigrade = await tardigradeFactory.deploy(
    senderRouterAddress,
    senderLinkAddress,
    receiverRouterAddress,
    receiverLinkAddress,
  );

  await tardigrade.deployed();

  console.log(`Tardigrade deployed to ${tardigrade.address}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
