import { ethers, network } from "hardhat";

async function main() {
  if (network.name !== `sepolia`) {
    console.error(`❌ Must be called from Ethereum Sepolia`);
    return 1;
  }
  const [signer] = await ethers.getSigners();
  const tardigradeSepoliaContractAddress = "0x68e412e68673b2AFFd5c2b6D7769EeDa5c666B3C";
  const sepoliaLinkAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
  const linkAmount = ethers.utils.parseUnits("1", 18);

  async function sendLinkTokens(
    //@ts-ignore
    _tardigradeSepoliaContractAddress,
    //@ts-ignore
    _linkAmount,
  ) {
    const linkTokenContract = new ethers.Contract(
      sepoliaLinkAddress,
      ["function transfer(address _to, uint256 _value) returns (bool)"],
      signer,
    );
    const receipt = await linkTokenContract.transfer(_tardigradeSepoliaContractAddress, _linkAmount);
    console.log(`Transaction hash: ${receipt.hash}`);
  }

  await sendLinkTokens(tardigradeSepoliaContractAddress, linkAmount);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
