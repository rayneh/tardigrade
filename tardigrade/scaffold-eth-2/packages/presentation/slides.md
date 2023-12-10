---
theme: apple-basic
layout: intro
---

# Tardigrade

resilent multchain dynamic NFT

<div class="absolute bottom-10">
  <span class="font-700">
    Max, Rayn and Frank
  </span>
</div>

---
layout: intro-image-right
image: 'https://gitlab.com/constellation-hackathon-2023/frontend/scaffold-eth-2/-/raw/main/packages/docs/public/taris-logo.png'
---

## Problem

- 🥹 Nfts dont survive cross chain


## Solution

- 🥳 Give them some resilence

---
layout: image-left
image: 'https://gitlab.com/constellation-hackathon-2023/frontend/scaffold-eth-2/-/raw/main/packages/docs/public/taris-logo.png'
---

<center><h1>How?</h1></center>

```plantuml
@startuml
!theme plain

actor User
entity WebApp
database SmartContractMumbai
database SmartContractGoerli
database SmartContractFuji
entity Backend

Backend -> SmartContractMumbai: listens
Backend -> SmartContractGoerli: listens
Backend -> SmartContractFuji: listens

group Mumbai
User -> WebApp : connect me
WebApp -> User : you are connected to mumbai
User -> WebApp : show me my NFT
WebApp -> SmartContractMumbai: whats users NFT
SmartContractMumbai -> WebApp: doesnt exist
WebApp -> User: not there yet, wanna mint one?
User -> WebApp: yes
WebApp -> SmartContractMumbai: mint NFT
WebApp -> SmartContractMumbai: listens
SmartContractMumbai -> SmartContractMumbai: creates Attributes
Backend -> Backend: gets Attributes
Backend -> Backend: generates Image
Backend -> SmartContractMumbai: sets new ipfs cid of image
SmartContractMumbai -> User: creates NFT for User
WebApp -> User: notify mint
WebApp -> User: shows Mumbai NFT
WebApp -> User: wanna evolve
User -> WebApp: yes
WebApp -> User: wanna transfer to Optimism Goerli
User -> WebApp: yes
WebApp -> SmartContractMumbai: transfer NFT to Goerli
SmartContractMumbai -> SmartContractGoerli: send NFT  
SmartContractGoerli -> SmartContractGoerli: recieve NFT
Backend -> Backend: gets Attributes
Backend -> Backend: generates Image
Backend -> SmartContractGoerli: sets new ipfs cid of image
WebApp -> User: Wanna see evolution, connect to Goerli
User -> WebApp: connects
end

group Goerli
WebApp -> User: you are connected to goerli
WebApp -> SmartContractGoerli: give me nft
SmartContractGoerli -> WebApp: sure, here
WebApp -> User: shows Goerli NFT
WebApp -> User: wanna evolve
User -> WebApp: yes
WebApp -> User: wanna transfer to Fuji
User -> WebApp: yes
WebApp -> SmartContractGoerli: transfer NFT to Fuji
SmartContractGoerli -> SmartContractFuji: send NFT  
SmartContractFuji -> SmartContractFuji: recieve NFT
Backend -> Backend: gets Attributes
Backend -> Backend: generates Image
Backend -> SmartContractFuji: sets new ipfs cid of image
WebApp -> User: Wanna see evolution, connect to Fuji
User -> WebApp: connects
end

group Fuji
WebApp -> User: you are connected to fuji
WebApp -> SmartContractFuji: give me nft
SmartContractFuji -> WebApp: sure, here
WebApp -> User: shows Fuji NFT
WebApp -> User: Wanna see current state
WebApp -> SmartContractFuji: give me everything
SmartContractFuji -> WebApp: sure
WebApp -> User: Here look
end
@enduml
```

<center><code>UML</code></center>

---


# Demo

[Live](https://tardigrade.surge.sh)


<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=oDVCtI6tJ6ySs1S7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---
layout: intro-image-right
image: 'https://gitlab.com/constellation-hackathon-2023/frontend/scaffold-eth-2/-/raw/main/packages/docs/public/taris-logo.png'
---

## Maximilian Stahl

- 🧗 SmartContract Engineer
- :zap: does small sized audits on Ethereum
- 🌤️wants ai chain skillies, high demand 

## Rayn Stark
- 🕸️DevOps Node Operator
- 🌤️does clustering
- 💡 want cross chain network setup skillies

## Frank Dierolf

- 🧑‍🏭 Software Engineer  
- 🐉 does holograms on chain on Polkadot
- 🛠️wants more cross chain skillies

---
layout: fact
---

# Thank you
