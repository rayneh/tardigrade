import { ethers, network, run } from "hardhat";

async function main() {
  if (network.name !== `sepolia`) {
    console.error(`❌ Receiver must be deployed to Ethereum Sepolia`);
    return 1;
  }

  const sepoliaRouterAddress = `0xD0daae2231E9CB96b94C8512223533293C3693Bf`;
  const sepoliaLinkAddress = `0x779877A7B0D9E8603169DdbD7836e478b4624789`;

  await run("compile");

  const tardigradeReceiverFactory = await ethers.getContractFactory("TardigradeReceiver_Unsafe");
  const tardigradeReceiver = await tardigradeReceiverFactory.deploy(sepoliaRouterAddress, sepoliaLinkAddress);

  await tardigradeReceiver.deployed();

  console.log(`tardigradeReceiver_Unsafe deployed to ${tardigradeReceiver.address}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
