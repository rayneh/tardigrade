import { ethers, network } from "hardhat";

async function main() {
  if (network.name !== `fuji`) {
    console.error(`❌ Must be called from Avalanche Fuji`);
    return 1;
  }
  const [signer] = await ethers.getSigners();
  const tardigradeFujiContractAddress = "0x2933B6608A4821c9E93B90Cbeaa5d19378994725";
  const fujiLinkAddress = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846";
  const linkAmount = ethers.utils.parseUnits("1", 18);

  async function sendLinkTokens(
    //@ts-ignore
    _tardigradeFujiContractAddress,
    //@ts-ignore
    _linkAmount,
  ) {
    const linkTokenContract = new ethers.Contract(
      fujiLinkAddress,
      ["function transfer(address _to, uint256 _value) returns (bool)"],
      signer,
    );
    const receipt = await linkTokenContract.transfer(_tardigradeFujiContractAddress, _linkAmount);
    console.log(`Transaction hash: ${receipt.hash}`);
  }

  await sendLinkTokens(tardigradeFujiContractAddress, linkAmount);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
