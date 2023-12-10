import { ethers, network, run } from "hardhat";

async function main() {
  if (network.name !== `sepolia`) {
    console.error(`❌ Must be deployed to Fuji`);
    return 1;
  }

  // 1. Compile
  await run("compile");
  // 2. Set necessary Router address on Sepolia
  const receiverRouterAddress = `0xd0daae2231e9cb96b94c8512223533293c3693bf`;
  // 3. Get to deploy contract from ethers
  const tardigradeFactory = await ethers.getContractFactory("Tardigrade");
  // 4. Deploy contract
  const tardigrade = await tardigradeFactory.deploy(receiverRouterAddress);
  // 5. Wait till deployed
  const deployedTardigrade = await tardigrade.deployed();
  // 6. Set Receiver Link Address (Sepolia)
  const receiverLinkAddress = `0x779877A7B0D9E8603169DdbD7836e478b4624789`;
  // 7. Call function to set reciever chunk(set address, approve link)
  await deployedTardigrade.set_receiver_chunk(receiverRouterAddress, receiverLinkAddress);
  /***************************/
  /***DOESN T WORK YET********/
  /***************************/
  // 8. Set Sender Router and linkAddress (sepolia)
  const senderRouterAddress = ``;
  // 9. Set Sender Router and linkAddress (sepolia)
  const senderLinkAddress = ``;
  // 10. Call second function to set sender chunk(set address, approve link)
  await tardigrade.set_sender_chunk(senderRouterAddress, senderLinkAddress);
  // 10. log deployed Address
  console.log(`Tardigrade deployed to ${deployedTardigrade.address}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
