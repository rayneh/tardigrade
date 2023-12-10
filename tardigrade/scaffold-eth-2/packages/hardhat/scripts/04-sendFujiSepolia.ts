import { ethers, network } from "hardhat";

async function main() {
  if (network.name !== `fuji`) {
    console.error(`❌ Must be called from Avalanche Fuji`);
    return 1;
  }

  const tardigrade_v2Fuji = `0x2933B6608A4821c9E93B90Cbeaa5d19378994725`;
  const tardigrade_v2Sepolia = `0x40765d48939D2e88eD75e235A4Df4e57f228c0f0`;
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
