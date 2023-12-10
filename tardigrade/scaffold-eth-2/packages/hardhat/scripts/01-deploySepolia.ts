import { ethers, network, run } from "hardhat";

async function main() {
  if (network.name !== `sepolia`) {
    console.error(`❌ Receiver must be deployed to Ethereum Sepolia`);
    return 1;
  }

  const sepoliaLinkAddress = `0x779877A7B0D9E8603169DdbD7836e478b4624789`;
  const sepoliaRouterAddress = `0xD0daae2231E9CB96b94C8512223533293C3693Bf`;

  await run("compile");

  const tardigrade_v2Factory = await ethers.getContractFactory("Tardigrade_v2");
  const tardigrade_v2 = await tardigrade_v2Factory.deploy(false, sepoliaLinkAddress, sepoliaRouterAddress, true, false);

  await tardigrade_v2.deployed();

  console.log(`Tardigrade deployed to ${tardigrade_v2.address}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
