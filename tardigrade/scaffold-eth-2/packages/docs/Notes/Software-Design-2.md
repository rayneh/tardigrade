# Software Design 2

> ⚠️ We changed the inital Design.
> We adjusted the document [here](https://hackmd.io/@uv8lNHtfS3Kc0nK3GAWRnw/ByHk_aQIa)
> This a is a copy.

## Idea

`tardigrade.surge.sh`

### Problem

- NFT are not crosschainable. They die.

### Solution

- Add CCIP to a digital asset (NFT)
- Use simplistic ai to show livelyness

## Requirments

### Functional Requirments

- A NFT should be transferable from Chain A to Chain B
- A NFT should be transferable from Chain B to Chain A
- A NFT should be able to evolve

### Non Function Requirments

- Keep it simple

## Story

### User Story

- As a User I want to be able to transfer my NFT
- As a User I want to be able to see my NFT evolving 
- As a User I want to decided who does the evolving

## Diagrams

### Use Case

```plantuml
left to right direction
@startuml

actor User

User -- (transfer)
User -- (see evoling)
User -- (choose)

@end
```


### ClassDiagram

```plantuml
@startuml
class Tardigrade_v2 {
  + link: address
  + router: address
  + owner: address
  .. TardiGeneration ..
  + theme_sepolia: string[]
  + theme_fuji: string[]
  + tardi_level: uint256
  + prompt_string: string[]
  + is_fuji: bool
  + is_sepolia: bool
  .. Tardigrade ..
  + tardigrade: string
  + is_real: bool
  + all_ipfs_links: string[]
  .. NodeHandling ..
  + registered_nodes: address[]
  + accepted_nodes: address[]
  + nonce: uint256
  .. Function..
  + constructor()
  + _ccipReceive()
  + send()
  + registerNode()
  + acceptNode()
  + setIpfsLink()
  + generateRandomNumber(): uint256
  + changeOwner()
}
@enduml
```

### Sequence

```plantuml
!theme plain

@startuml
!theme plain

actor User
entity WebApp
database SmartContractFuji
database SmartContractSepolia
entity Node

group "Setup"
User -> SmartContractSepolia: "mint"
User -> SmartContractFuji: "mint"
Node -> SmartContractSepolia: "register"
Node -> SmartContractFuji: "register"
User -> SmartContractSepolia: "acceptNode"
User -> SmartContractFuji: "acceptNode"
Node -> SmartContractSepolia: "listens"
Node -> SmartContractFuji: "listens"
end

group "Automised via Cronjob for MVP Purpose"
group "Send Sepoloa"
User -> SmartContractFuji: "sendToSepolia"
SmartContractFuji -> SmartContractSepolia: "recieves"
SmartContractSepolia -> SmartContractSepolia: "update data, emit event"
Node <- SmartContractSepolia: "pulls data"
Node -> Node: "generate image, push ipfs"
Node -> SmartContractSepolia: "sets tardigrade"
end

group "Send Fuji"
User -> SmartContractSepolia: "sendToFuji"
SmartContractSepolia -> SmartContractFuji: "recieves"
SmartContractFuji -> SmartContractFuji: "update data, emit event"
Node <- SmartContractFuji: "pulls data"
Node -> Node: "generate image, push ipfs"
Node -> SmartContractFuji: "sets tardigrade"
end

group "repeat.."
end

group "repeat..."
end
end

group 
WebApp -> SmartContractSepolia: "fetches alls images"
WebApp -> WebApp: "display images"
User -> WebApp: "Watch all images"
end

@enduml
```
