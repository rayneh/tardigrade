<div align="center">
<img src="assets/tardigrade_logo.jpg" alt="logo" width="240" height="240" />
</div>

<h3 align="center">Tardigrade</h3>
  <p align="center">
    <a href="https://docs.tardigrade.surge.sh">Docs</a>
    .
    <a href="https://tardigrade.surge.sh">Slideshow</a>
    ·
    <a href="https://youtu.be/LUEmOLQZ-l8">Youtube</a>
    ·
    <a href="https://github.com/rayneh/tardigrade/blob/main/tardigrade/scaffold-eth-2/packages/hardhat/contracts/Tardigrade_v2.sol">CCIP</a>
  </p>
</div>

# Tardigrade (Dynamic NFT Evolution Project)

[Chainlink Constellation](https://chain.link/hackathon) submission: NFTs that dynamically evolve through cross-chain trading

To see where we implemented CCIP go [here](https://github.com/rayneh/tardigrade/blob/main/tardigrade/scaffold-eth-2/packages/hardhat/contracts/Tardigrade_v2.sol).

**Contributors:**

| Name                 | Discord         | GitHub                                       |
|----------------------|-----------------|----------------------------------------------|
| Frank Dierolf        | frankbevr       | [GitHub](https://github.com/FrankBevr)       |
| Christopher Glissner | _raynn          | [GitHub](https://github.com/rayneh)          |
| Maximilian Stahl     | giraeffleaeffle | [GitHub](https://github.com/giraeffleaeffle) |


## Overview

The Tradigrade project is an innovative exploration inspired by the concept of evolving creatures in classic games like 
Pokemon, where trading or transferring these creatures led to changes in their attributes. Leveraging the OpenAI SDK 
and Chainlink (CCIP), allowing dynamic NFTs to adapt their metadata according to the new environment with each transfer.

### Inspiration

The inspiration behind this project draws from the nostalgia of classic video games, particularly the idea of Pokemon 
evolving when traded using a link cable. We aimed to bring a similar dynamic and adaptive element to NFTs, creating 
a unique and evolving experience for users.

### Technologies Used

- OpenAI SDK
- Chainlink CCIP, dNFT
- Hardhat

## Useful Links

### Constellation Submission
- [Presentation](presentation.tardigrade.surge.sh)
- [Video](''VIDEO HERE')
- [DevPost](https://devpost.com/software/tardigrade)

### Docs
- [Documentation](docs.tardigrade.surge.sh)
- [Software Design](https://hackmd.io/@uv8lNHtfS3Kc0nK3GAWRnw/ByHk_aQIa)

### Contracts

- [Tardigrade_v2 Sepolia](https://sepolia.etherscan.io/address/0x68e412e68673b2AFFd5c2b6D7769EeDa5c666B3C)
- [Tardigrade_v2 Fuji](https://testnet.avascan.info/blockchain/c/address/0x4618F10d03d37abc23c3dbdADCb3d58053762c34/contract)

### CCIP Transactions

- [CCIP Message to Sepolia](https://ccip.chain.link/msg/0xe54b03abc33aeedb38c00f7995e3d070ea89ab385ff37d56f125e0bd06497683)
- [CCIP Message to Fuji](https://ccip.chain.link/msg/0x1631423db15e243d52931c95a70da9881282f0f5e362173a25324401e9cc199a)

## How it works

### Slideshow

Slide show of a full run of ten cross-chain transactions 

- [Evolutions after 10 ccip swaps slide show](tardigrade.surge.sh)

### Promps

Below you can see the prompts and Bing links created by these prompts, the level increased with each cross-chain swap 
and expressions will be added to the prompt.

**Prompt Level 0:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a regal mountain peak.
```

- [Level 1 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-65763f20ac394c9294edd7d978f8dbe8?id=Cbwg7Unr0GX7SnunmvyQYQ%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&ajaxhist=0&ajaxserp=0)

**Prompt Level 1:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a regal summit. Vibrant scene featuring the fusion mythical creature 
named god zeus in ther middle to the scenery casts a protective gaze upon a small blue dwelling beneath it.
```

- [Level 2 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-65761ded0ed94d888e0e7138a94645fe?id=jgp2ExIckirKo1GXCxgcGA%3D%3D&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

**Prompt Level 2:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a regal summit. Vibrant scene featuring the fusion mythical creature 
named god zeus in ther middle to the scenery casts a protective gaze upon a small blue dwelling beneath it, 
the god should be at the absolute peak of the summit.
```

- [Level 3 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-65761ea6bc6f42c0a0b99809358c539b?id=PjDElgvKcu2qg%2fF4anPRUg%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

**Prompt Level 3:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a regal summit. Vibrant scene featuring the fusion mythical creature 
named fuji add in the middle a merge between the gods Poseidon, zeus in ther middle to the scenery casts a protective 
gaze upon a small blue dwelling beneath it, the god should be at the absolute peak of the summit.
```

- [Level 4 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-65761f81a1f541fba25f0c0d8c12ec0f?id=PgZZIMzjKiyw9PzdEa5SwQ%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

**Prompt Level 4:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a regal summit. Vibrant scene featuring the fusion mythical creature 
named fuji add in the middle a merge between the gods Poseidon, zeus in ther middle to the scenery casts a protective 
gaze upon a small blue dwelling beneath it, the god should be at the absolute peak of the summit the range of the 
scenery should be huge, but the god mix betweeen zeus and poseidon should be good visible.
```

- [Level 5 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-6576203c7d774d81b2f461f9545a0cc3?id=vjT9N7qgjzQndYlrNxe4ZA%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

**Prompt Level 5:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. Vibrant scene featuring the fusion mythical creature named fuji add in the middle a merge between 
the gods Poseidon, zeus and hades. In the far distance on the right seems to be a lush rainforest with towering 
waterfalls and exotic birds, a landscape controlled by hades add some territory, which is themed by poseidon and the 
skies are obviously rules by zeus. but dont be confused, there should be only one creature a mix between the 3 gods.
```

- [Level 6 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-657621660a474675a2373cb7ad1b42fd?id=yRVESdk4bncl9hjjM4kTfw%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

**Prompt Level 6:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a astonioshing Slope. Vibrant scene featuring the fusion mythical 
creature named fuji add in the middle a merge between the gods Poseidon, zeus and hades in ther middle to the scenery 
casts a protective gaze upon a small blue dwelling beneath it, lush rainforest with towering waterfalls and exotic birds
, a landscape controlled by hades hich is themed by poseidon and the skies are obviously rules by zeug. But dont be 
confused, there should be only one creature a mix between the 3 gods.
```

- [Level 7 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-65762297302745e1bb6a7ac4ae22cccc?id=chksqaVn1kTS4PXQhKt56w%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

**Prompt Level 7:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a astonioshing Slope. Vibrant scene featuring the fusion mythical 
creature named fuji add in the middle a merge between the gods Poseidon, zeus and hermes and hades in ther middle to the 
scenery casts a protective gaze upon a small blue dwelling beneath it, towering waterfalls and exotic birds, a landscape
controlled by hades add some territory, which is themed by poseidon and the skies are obviously rules by zeug. But dont 
be confused, there should be only one creature a mix between the 4 gods.
```

- [Level 8 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-657623242e0146dcb06b4d3cf152404e?id=0cZpzqz5cL7Pk89Utyxk1w%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

**Prompt Level 8:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a astonioshing Cliff. Vibrant scene featuring the fusion mythical 
reature named fuji add in the middle a merge between the gods Poseidon, zeus and hermes and hades in ther middle to the 
scenery casts a protective gaze upon a small blue dwelling beneath it, add some territory, which is themed by hermes and 
the skies are obviously rules by zeus. But dont be confused, there should be only one creature a mix between the 4 gods.
```

- [Level 9 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-657623ab976347a09ab8bdf35140d80c?id=XxJ9RzkoMw%2f9ZfeTyEZ8rw%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

**Prompt Level 9:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a astonioshing Cliff. Vibrant scene featuring the fusion mythical 
creature named fuji add in the middle a merge between the gods Poseidon, zeus,hermes,hades, Athena in ther middle to the 
scenery casts a protective gaze upon a small blue dwelling beneath it, add some territory, which is themed by hermes and 
the skies are obviously rules by zeus. But dont be confused, there should be only one creature a mix between the 5 gods.
```

- [Level 10 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-657624291e0d459793524184ae628a1b?id=iQiYUW3ahiGHX3mjwSDfvA%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

**Prompt Level 10:**
```
Create a digital illustration of a fantastical, against an imaginative landscape combining natural elements and 
steampunk attributes. In the central position is a astonioshing Valley. Vibrant scene featuring the fusion mythical 
creature named fuji add in the middle a merge between the gods Poseidon, zeus,hermes,hades, Athena in ther middle to the 
scenery casts a protective gaze upon a small blue dwelling beneath it, add some territory, which is themed by hermes and 
the skies are obviously rules by zeus but dont be confused, there should be only one creature a mix between the 5 gods
```

- [Level 10 Bing link](https://www.bing.com/images/create/create-a-digital-illustration-of-a-fantastical2c-ag/1-657624859c7c43a3a3dfa9f652b37fe8?id=yiqOo%2biIB%2fGhSF4HfMAMfA%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay)

## How We Built It

The project was built by integrating the OpenAI SDK and Chainlink functionalities into the NFT smart contract. 
Each transfer triggers changes in the NFT's metadata, creating a dynamic and evolving experience for users. 
The deployment and verification scripts were developed using the Hardhat framework.

## Challenges Faced

While building the project, we encountered challenges in implementing a ManagerContract that would be deployed to every 
chain. While it seemed like a reasonable decision, it added complexity to the system. Despite our efforts, we couldn't 
fully implement this aspect due to the increased intricacies it introduced.

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

By combining nostalgic elements from classic games with cutting-edge blockchain technologies, Tardigrade (Dynamic NFT 
Evolution project) aims to provide users with a truly unique and evolving NFT experience.


