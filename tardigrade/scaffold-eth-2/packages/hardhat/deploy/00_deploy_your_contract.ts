import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { getContractAddress } from "@ethersproject/address";
/**
 * Deploys a contract named "ChainlinkNFT" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  //   console.log(hre.config);

  const contractAddress = await getcreatedContractAddress(hre);
  console.log(contractAddress);

  // deploy on fuji
  await deploy("ChainlinkNFT", {
    from: deployer,
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  //   // Get the deployed contract
  //   const chainlinkNFTContract = await hre.ethers.getContract("ChainlinkNFT", deployer);

  //   await deploy("DestinationMinter", {
  //     from: deployer,
  //     // Contract constructor arguments
  //     args: ["0x70499c328e1E2a3c41108bd3730F6670a44595D1", "0x90026509C5991BBC6451c30a8062c49110Fc3020"],
  //     log: true,
  //     // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //     // automatically mining the contract deployment transaction. There is no effect on live networks.
  //     autoMine: true,
  //   });

  //   // Get the deployed contract
  //   const destinationMinterContract = await hre.ethers.getContract("DestinationMinter", deployer);

  // await deploy("SourceMinter", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   args: [
  //     "0x554472a2720E5E7D5D3C817529aBA05EEd5F82D8",
  //     "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846",
  //     "0x07e3768DdfD90125DAE1860E5B494323444818F7",
  //     ["Sepolia", "Polygon"],
  //     ["16015286601757825753", "12532609583862916517"],
  //     ["0x9eafdD4F97d0E83aF264e24056A508D8665915e6", "0xC7Dd51d5cAAe4ca11725E32062e51Ab6998283a3"],
  //   ],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  // Get the deployed contract
  // const sourceMinterContract = await hre.ethers.getContract("SourceMinter", deployer);
};

async function getcreatedContractAddress(hre: HardhatRuntimeEnvironment) {
  const [owner] = await hre.ethers.getSigners();

  const transactionCount = await owner.getTransactionCount();

  const futureAddress = getContractAddress({
    from: owner.address,
    nonce: transactionCount,
  });

  return futureAddress;
}

export default deployContracts;
