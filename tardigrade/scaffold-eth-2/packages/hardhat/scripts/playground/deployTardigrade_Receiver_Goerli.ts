import { ethers, network, run } from "hardhat";

async function main() {
  if (network.name !== `goerli`) {
    console.error(`❌ Receiver must be deployed to Optimism Goerli`);
    return 1;
  }

  const goerliRouterAddress = `0xeb52e9ae4a9fb37172978642d4c141ef53876f26`;
  const goerliLinkAddress = `0xdc2CC710e42857672E7907CF474a69B63B93089f`;

  await run("compile");

  const tardigradeReceiverFactory = await ethers.getContractFactory("TardigradeReceiver_Unsafe");
  const tardigradeReceiver = await tardigradeReceiverFactory.deploy(goerliRouterAddress, goerliLinkAddress);

  await tardigradeReceiver.deployed();

  console.log(`tardigradeReceiver_Unsafe deployed to ${tardigradeReceiver.address}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
