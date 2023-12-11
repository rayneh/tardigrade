<div align="center">
<img src="./packages/docs/public/taris-logo.png" alt="logo" width="120" height="120" />
</div>

<h3 align="center">Tardigrade</h3>
  <p align="center">
    <a href="https://docs.tardigrade.surge.sh">Docs</a>
    .
    <a href="https://tardigrade.surge.sh">Live</a>
    ·
    <a href="https://youtu.be/LUEmOLQZ-l8">Youtube</a>
    ·
    <a href="https://gitlab.com/constellation-hackathon-2023/frontend/scaffold-eth-2">Code</a>
  </p>
</div>

### Summary

Read the [Idea](http://presentation.tardigrade.surge.sh)

#### Repo Structure

**Its a monorepo**

`./packages/docs/` contains the documentation\
`./packages/presentation/` contains the presentation\
`./packages/react` contains Frontend Application\
`./packages/hardhat` contains SmartContracts\
`./packages/tardiAiNode` contains rough node setup, main in openai-module.

### Quickstart

```bash
cd ./packages/hardhat
npx hardhat scripts/01-deploySepolia.ts --network sepolia
npx hardhat scripts/011-verifySepolia.ts
npx hardhat scripts/02-deployFuji.ts --network fuji
npx hardhat scripts/021-verifyFuji.ts --network fuji
npx hardhat scripts/03-fundFujiWithLink --network fuji
npx hardhat scripts/04-sendFujiSepolia --network fuji
npx hardhat scripts/05-fundSepoliaWithLink --network sepolia
npx hardhat scripts/06-sendSepoliaFuji.ts --network sepolia
```

### Team

| Name          | Discord   | Telegram   | E-mail                 |
| :------------ | :-------- | :--------- | :--------------------- |
| Max           | -         | -          | `-`                    |
| Raynn         | -         | -          | `-`                    |
| Frank Dierolf | frankbevr | @frankbevr | `frank_dierolf@web.de` |
