import { ethers, network, run } from "hardhat";

async function main() {
  if (network.name !== `fuji`) {
    console.error(`❌ Must be deployed to Fuji`);
    return 1;
  }

  // 1. Compile
  await run("compile");
  // 2. Set necessary Router address on Fuji
  const receiverRouterAddress = `0x554472a2720E5E7D5D3C817529aBA05EEd5F82D8`;
  // 3. Get to deploy contract from ethers
  const tardigradeFactory = await ethers.getContractFactory("Tardigrade");
  // 4. Deploy contract
  const tardigrade = await tardigradeFactory.deploy(receiverRouterAddress);
  // 5. Wait till deployed
  const deployedTardigrade = await tardigrade.deployed();
  // 6. Set Receiver Link Address (Fuji)
  const receiverLinkAddress = `0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846`;
  // 7. Call function to set reciever chunk(set address, approve link)
  await deployedTardigrade.set_receiver_chunk(receiverRouterAddress, receiverLinkAddress);
  // 8. get my signer
  const [signer] = await ethers.getSigners();
  // 9. Declare sendLinkFunction
  async function sendLinkTokens(
    //@ts-ignore
    recipientAddress,
    //@ts-ignore
    amount,
  ) {
    const linkTokenContract = new ethers.Contract(
      receiverLinkAddress,
      ["function transfer(address _to, uint256 _value) returns (bool)"],
      signer,
    );
    const receipt = await linkTokenContract.transfer(recipientAddress, amount);
    console.log(`Transaction hash: ${receipt.hash}`);
  }
  // 10. Call function
  await sendLinkTokens(deployedTardigrade.address, ethers.utils.parseUnits("1", 18));
  // 11. Set fuji
  const senderRouterAddress = deployedTardigrade.address;
  // 12. Set sender Link Address fuji
  const senderLinkAddress = `0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846`;
  // 13. Set sender chunk
  await deployedTardigrade.set_sender_chunk(senderRouterAddress, senderLinkAddress);
  // 14. Set destinationChainSelector of Sepolia
  await deployedTardigrade.set_destinationChainSelector("16015286601757825753");
  // 15. send state to sepolia
  const tx = await deployedTardigrade.send(
    "0xC01f0C2749D5C20b0F7386570EdfbB2A58b3139e",
    1,
    true,
    16015286601757825753n,
    { gasLimit: 500000 },
  );
  // 16. give transaction hash
  console.log(`Transaction hash: ${tx.hash}`);
  /***************************/
  /***DOESN T WORK YET********/
  /***************************/
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
