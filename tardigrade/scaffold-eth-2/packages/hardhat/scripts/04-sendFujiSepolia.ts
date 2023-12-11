import { ethers, network } from "hardhat";

async function main() {
  if (network.name !== `fuji`) {
    console.error(`❌ Must be called from Avalanche Fuji`);
    return 1;
  }

  const tardigrade_v2Fuji = `0x4618F10d03d37abc23c3dbdADCb3d58053762c34`;
  const tardigrade_v2Sepolia = `0x68e412e68673b2AFFd5c2b6D7769EeDa5c666B3C`;
  const destinationChainSelector = 16015286601757825753n;
  const [signer] = await ethers.getSigners();

  const tardigrade_v2 = await ethers.getContractAt("Tardigrade_v2", tardigrade_v2Fuji, signer);

  const tx = await tardigrade_v2.send(tardigrade_v2Sepolia, destinationChainSelector);

  console.log(`Transaction hash: ${tx.hash}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
