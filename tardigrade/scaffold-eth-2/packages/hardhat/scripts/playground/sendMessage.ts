import { ethers, network } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  if (network.name !== `fuji`) {
    console.error(`❌ Must be called from Avalanche Fuji`);
    return 1;
  }

  const deployerPrivateKey = process.env.DEPLOYER_PRIVATE_KEY!;
  const signer = new ethers.Wallet(
    deployerPrivateKey,
    new ethers.providers.JsonRpcProvider("https://api.avax-test.network/ext/bc/C/rpc"),
  );

  const ccipReceiverAddress = `0xadB27cd84feab9b7A09082A70356AABF8ca7d2Ec`;
  const destinationChainSelector = 16015286601757825753n;

  const some_number = 1;
  const is_real = true;

  const tardigradeSenderContract = await ethers.getContractAt(
    "TardigradeSender_Unsafe",
    "0x40765d48939D2e88eD75e235A4Df4e57f228c0f0",
    signer,
  );

  const tx = await tardigradeSenderContract.send(ccipReceiverAddress, some_number, is_real, destinationChainSelector);

  console.log(`Transaction hash: ${tx.hash}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
