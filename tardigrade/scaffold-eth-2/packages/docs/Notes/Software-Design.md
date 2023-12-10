# Software Design

## Idea

`Tardigrade.com`

**Problem:**  
dynamic NFT's are not getting cross chained.

**Solution:**  
`Tardigrade.com` allows you to evolve you NFT via cross chain transfers.


## Requriments

### Functional Requriments

- The Smart Contract uses Chainlink CCIP.
- The Smart Contract has simplistic State Management.
- The Smart Contract is able to evolve
- The WebApp allows to cross chain transfer the NFT
- The WebApp display the current NFT
- The Backend generates a Picture based on NFT Attributes

### Non Functional Requriments

- The WebApp should have simplistic UI


## User Stories

### Epic 1 - Tardigare Story

- As a Tardigardian, I want to be able to see my NFT
- As a Tardigardian, I want to be able to see my NFT evolving
- As a Tardigardian, I want to be able to transfer my NFT over chains
- As a Tardigardian, I want to be able to have influence over the evloment.


## Diagramms

### Use Case

[Link - Tardigradian Story](https://www.plantuml.com/plantuml/uml/RSynheD030JGtgUOt_qK5Ba1JKwGN62pEu2bnOkCGShjGqgKL9OyJnfDlqRosEOgVp5n9fQQrAHo24I3wpW5YZfpQ3C9ZKhS5isueWCUoOkEdeecmpsQlqHIFkuf4JcvhiF_Ibw-l-svqdU2UwlRf_27KHlgHiidrTFACU8D)  
![Picture - Friend Story](https://www.plantuml.com/plantuml/png/RSynheD030JGtgUOt_qK5Ba1JKwGN62pEu2bnOkCGShjGqgKL9OyJnfDlqRosEOgVp5n9fQQrAHo24I3wpW5YZfpQ3C9ZKhS5isueWCUoOkEdeecmpsQlqHIFkuf4JcvhiF_Ibw-l-svqdU2UwlRf_27KHlgHiidrTFACU8D)

### Class Diagram

[Link - Tardigrade NFT](https://cdn-0.plantuml.com/plantuml/uml/JP11J_im3CNl_XJ-tpfLg_JdWZHnc5G1ueBGs0sXoalSBQ99AiSTXx7lJhe2wwbzptvsVbud9T71T_1F3-mP-uvS08qzQiHTL8qUhHCswcBsdNQCMnBhzcGPdn-skCJYzOFL71O0u8Aoj6GOxpVrxSt_qnd0T9JI6CePoQ4JL1K-Sc2X3giAIZBgZhpAws87PLBIBCBWTonGXbORPw-wb-YrIIekx5SuVT_UeVIiP4dfrnkNr8SCWwbdurfdBhlCQ3KNrh_EkTbyHh5fDZXN9QRKg518BKinDL-Vj83p3BkkdrwQJHoopkmJ-e_CQ1niiO1Is3W-SZ56OJeKtdqjbzSZmMpEL9h-OSt13hxx1W00)  
![Picture - MoesCoasterClass](https://cdn-0.plantuml.com/plantuml/png/JP11J_im3CNl_XJ-tpfLg_JdWZHnc5G1ueBGs0sXoalSBQ99AiSTXx7lJhe2wwbzptvsVbud9T71T_1F3-mP-uvS08qzQiHTL8qUhHCswcBsdNQCMnBhzcGPdn-skCJYzOFL71O0u8Aoj6GOxpVrxSt_qnd0T9JI6CePoQ4JL1K-Sc2X3giAIZBgZhpAws87PLBIBCBWTonGXbORPw-wb-YrIIekx5SuVT_UeVIiP4dfrnkNr8SCWwbdurfdBhlCQ3KNrh_EkTbyHh5fDZXN9QRKg518BKinDL-Vj83p3BkkdrwQJHoopkmJ-e_CQ1niiO1Is3W-SZ56OJeKtdqjbzSZmMpEL9h-OSt13hxx1W00)

### Sequence Diagramm

[Link - Sequence Diagram](https://www.plantuml.com/plantuml/uml/lLN1ajDA3BpxA_JkUJ_W0-n2rG87u03KdYTssnxMC-CQoGd-Uu9gGWgNLGaKoyqLTKlgLjkvOt5PvZ1M_yc009f6vsDLkKPIfY-CN26AbuKUiR-VfgfrulQEGP-2o_8wHSadxFivx9qtYcyIycWL7-Ql_ZpYbMkU4DkgAW_q_ukjCJMDdWMHJPnEj72huHTKrUSqJrIq_D1-8XJTL5EJOaGZ552LtqvLHTMqf9bSnXc3bYHHC1hna8uKG66X3m-VIpDJwt5mmZGpCYjy0tJfNbERm548tppBQi-QOXAI0HcqG7PqT34w2ZuAfOYNgqrFgi1NjbEoeMBpOXj5azDaE07JlKZs-rdmoo7BOqqzv0PCHDPcxuBhSJLW366AE9AVEgR6jvGwyaer5AZ1PMKz57Nb1TgwWkyMjMvTqsnmYU3ALmMKc-6GnWEiWsqG9Bl87J99ee-J-E0vK7an_-3ivtOgLDAvqmRMV3SPiLKwLHjravRHU1oWtZn36enLpJIitNvKjndG4ytYKzpz_798iYml2AuGs_8TAj3L1EDJqw-mspfwVm05KEp4yloy4CyPEngGOKHKASyMKVrNiAcMmdKkjSzDyJe1pKngrQ3ymppgnB-PnhNDTXOLU5iIkmlIsDz8ePP_BuDAq0IQkfivPqGX5YUuRIySa1SPVEolhRUns5jaq9ZIaxftXzZEOVmE)  
![Picture - SequenceDiagram](https://www.plantuml.com/plantuml/png/lLN1ajDA3BpxA_JkUJ_W0-n2rG87u03KdYTssnxMC-CQoGd-Uu9gGWgNLGaKoyqLTKlgLjkvOt5PvZ1M_yc009f6vsDLkKPIfY-CN26AbuKUiR-VfgfrulQEGP-2o_8wHSadxFivx9qtYcyIycWL7-Ql_ZpYbMkU4DkgAW_q_ukjCJMDdWMHJPnEj72huHTKrUSqJrIq_D1-8XJTL5EJOaGZ552LtqvLHTMqf9bSnXc3bYHHC1hna8uKG66X3m-VIpDJwt5mmZGpCYjy0tJfNbERm548tppBQi-QOXAI0HcqG7PqT34w2ZuAfOYNgqrFgi1NjbEoeMBpOXj5azDaE07JlKZs-rdmoo7BOqqzv0PCHDPcxuBhSJLW366AE9AVEgR6jvGwyaer5AZ1PMKz57Nb1TgwWkyMjMvTqsnmYU3ALmMKc-6GnWEiWsqG9Bl87J99ee-J-E0vK7an_-3ivtOgLDAvqmRMV3SPiLKwLHjravRHU1oWtZn36enLpJIitNvKjndG4ytYKzpz_798iYml2AuGs_8TAj3L1EDJqw-mspfwVm05KEp4yloy4CyPEngGOKHKASyMKVrNiAcMmdKkjSzDyJe1pKngrQ3ymppgnB-PnhNDTXOLU5iIkmlIsDz8ePP_BuDAq0IQkfivPqGX5YUuRIySa1SPVEolhRUns5jaq9ZIaxftXzZEOVmE)
