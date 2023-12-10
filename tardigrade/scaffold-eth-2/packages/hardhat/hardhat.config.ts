import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

const providerApiKey = process.env.ALCHEMY_API_KEY!;
const deployerPrivateKey = process.env.DEPLOYER_PRIVATE_KEY!;
const ETHERSCAN_API_KEY_MUMBAI = process.env.ETHERSCAN_API_KEY_MUMBAI!;
const ETHERSCAN_API_KEY_SEPOLIA = process.env.ETHERSCAN_API_KEY_SEPOLIA!;
const ETHERSCAN_API_KEY_GOERLI = process.env.ETHERSCAN_API_KEY_GOERLI!;
const ETHERSCAN_API_KEY_FUJI = process.env.ETHERSCAN_API_KEY_FUJI!;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "fuji",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
      chainId: 11155111,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [deployerPrivateKey],
      chainId: 43113,
    },
    goerli: {
      url: `https://opt-goerli.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
  },
  // verify: {
  //   etherscan: {
  //     apiKey: `${ETHERSCAN_API_KEY_GOERLI}`,
  //   },
  // },
  etherscan: {
    apiKey: {
      polygonMumbai: `${ETHERSCAN_API_KEY_MUMBAI}`,
      sepolia: `${ETHERSCAN_API_KEY_SEPOLIA}`,
      optimisticGoerli: `${ETHERSCAN_API_KEY_GOERLI}`,
      fuji: `${ETHERSCAN_API_KEY_FUJI}`,
    },
    customChains: [
      {
        network: "fuji",
        chainId: 43113,
        urls: {
          apiURL: "https://api.avascan.info/v2/network/testnet/evm/43113/etherscan",
          browserURL: "https://testnet.avascan.info/blockchain/c",
        },
      },
    ],
  },
};

export default config;
