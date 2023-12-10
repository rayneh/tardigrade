// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract ChainlinkNFT is ERC721URIStorage {
	using Strings for uint256;

	uint256 internal tokenId;

	//Runners NFT
	string[] characters = [
		"https://ipfs.io/ipfs/QmTgqnhFBMkfT9s8PHKcdXBn1f5bG3Q5hmBaR4U6hoTvb1?filename=Chainlink_Elf.png",
		"https://ipfs.io/ipfs/QmZGQA92ri1jfzSu61JRaNQXYg1bLuM7p8YT83DzFA2KLH?filename=Chainlink_Knight.png",
		"https://ipfs.io/ipfs/QmW1toapYs7M29rzLXTENn3pbvwe8ioikX1PwzACzjfdHP?filename=Chainlink_Orc.png",
		"https://ipfs.io/ipfs/QmPMwQtFpEdKrUjpQJfoTeZS1aVSeuJT6Mof7uV29AcUpF?filename=Chainlink_Witch.png"
	];

	constructor() ERC721("Chainlink dAppCon", "CDC") {}

	function mint(address to, uint8 active, string memory counter) public {
		uint256 charId = tokenId % 4;

		string memory activeValue = active == 1 ? "true" : "false";

		string memory uri = Base64.encode(
			bytes(
				string(
					abi.encodePacked(
						'{"name": "Chainlink NFT",',
						'"description": "This is your Chainlink NFT",',
						'"image": "',
						characters[charId],
						'",',
						'"animation_url": "",',
						'"attributes": [',
						"{",
						'"trait_type": "active",',
						'"value": "',
						activeValue,
						'"',
						"}",
						",",
						"{",
						'"trait_type": "counter",',
						'"value": "',
						counter,
						'"',
						"}",
						"]}"
					)
				)
			)
		);

		// Create token URI
		string memory finalTokenURI = string(
			abi.encodePacked("data:application/json;base64,", uri)
		);
		_safeMint(to, tokenId);
		_setTokenURI(tokenId, finalTokenURI);
		unchecked {
			tokenId++;
		}
	}

	function updateMetadata(
		uint256 tokenID,
		uint8 active,
		string memory counter,
		string memory image,
		string memory animation_url
	) public {
		string memory activeValue = active == 1 ? "true" : "false";

		string memory uri = Base64.encode(
			bytes(
				string(
					abi.encodePacked(
						'{"name": "Chainlink NFT",',
						'"description": "This is your Chainlink NFT",',
						'"image": "',
						image,
						'",',
						'"animation_url": "',
						animation_url,
						'",',
						'"attributes": [',
						"{",
						'"trait_type": "active",',
						'"value": "',
						activeValue,
						'"',
						"}",
						",",
						"{",
						'"trait_type": "counter",',
						'"value": "',
						counter,
						'"',
						"}",
						"]}"
					)
				)
			)
		);

		// Create token URI
		string memory finalTokenURI = string(
			abi.encodePacked("data:application/json;base64,", uri)
		);
		_setTokenURI(tokenID, finalTokenURI);
	}
}
