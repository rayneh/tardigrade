# Tardigrade (Dynamic NFT Evolution Project)

Chainlink Constellation submission: NFTs that dynamically evolve through cross-chain trading

## Overview

The Tradigrade project is an innovative exploration inspired by the concept of evolving creatures in classic games like Pokemon, where trading or transferring these creatures led to changes in their attributes. Leveraging the OpenAI SDK and Chainlink, we developed the Cross-Chain Intelligent Product (CCIP), allowing dynamic NFTs to adapt their metadata according to the new environment with each transfer or bridging.

## Inspiration

The inspiration behind this project draws from the nostalgia of classic video games, particularly the idea of Pokemon evolving when traded using a link cable. We aimed to bring a similar dynamic and adaptive element to NFTs, creating a unique and evolving experience for users.

## Technologies Used

- OpenAI SDK
- Chainlink CCIP, dNFT
- Hardhat

## How We Built It

The project was built by integrating the OpenAI SDK and Chainlink functionalities into the NFT smart contract. Each transfer or bridge operation triggers changes in the NFT's metadata, creating a dynamic and evolving experience for users. The deployment and verification scripts were developed using the Hardhat framework.

## Challenges Faced

While building the project, we encountered challenges in implementing a ManagerContract that would be deployed to every chain. While it seemed like a reasonable decision, it added complexity to the system. Despite our efforts, we couldn't fully implement this aspect due to the increased intricacies it introduced.

## Unaccomplished Goals

1. **ManagerContract Deployment:** We envisioned deploying a ManagerContract to each chain, but the complexity involved led to challenges, and this goal remains unaccomplished.

2. **Script Argument Passing:** Despite attempts, we couldn't successfully pass arguments into the `npx hardhat run` command as initially planned.

3. **Automating Contract Address Adjustments:** The addresses in certain scripts need manual adjustments, presenting a challenge in automating this process without introducing potential points of failure.

## Current Workflow

To interact with the project, users can follow the provided workflow:

```bash
npx hardhat scripts/01-deploySepolia.ts --network sepolia
npx hardhat scripts/011-verifySepolia.ts
npx hardhat scripts/02-deployFuji.ts --network fuji
npx hardhat scripts/021-verifyFuji.ts --network fuji
npx hardhat scripts/03-fundFujiWithLink --network fuji
npx hardhat scripts/04-sendFujiSepolia --network fuji
npx hardhat scripts/05-fundSepoliaWithLink --network sepolia
npx hardhat scripts/06-sendSepoliaFuji.ts --network sepolia
```

By combining nostalgic elements from classic games with cutting-edge blockchain technologies, the Dynamic NFT Evolution project aims to provide users with a truly unique and evolving NFT experience.