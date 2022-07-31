---
id: grant-recipients
title: Past Grant Recipients
sidebar_label: Past Grant Recipients
---

## Financial Cryptography and Data Security 2022

### Samarth Tiwari (PhD candidate at Centrum Wiskunde & Informatica)

**Link**: [arxiv.org/abs/2110.08848](https://arxiv.org/abs/2110.08848)

**Title**: HIDE & SEEK: Privacy-Preserving Rebalancing on Payment Channel Networks

**Authors**: Zeta Avarikioti, Krzysztof Pietrzak, Iosif Salem, Stefan Schmid, <u>Samarth Tiwari</u>, Michelle Yeo

**Abstract**: Payment channels effectively move the transaction load off-chain thereby successfully addressing the inherent scalability problem most cryptocurrencies face. A major drawback of payment channels is the need to "top up" funds on-chain when a channel is depleted. Rebalancing was proposed to alleviate this issue, where parties with depleting channels move their funds along a cycle to replenish their channels off-chain. Protocols for rebalancing so far either introduce local solutions or compromise privacy. In this work, we present an opt-in rebalancing protocol that is both private and globally optimal, meaning our protocol maximizes the total amount of rebalanced funds. We study rebalancing from the framework of linear programming. To obtain full privacy guarantees, we leverage multi-party computation in solving the linear program, which is executed by selected participants to maintain efficiency. Finally, we efficiently decompose the rebalancing solution into incentive-compatible cycles which conserve user balances when executed atomically.

### Shir Cohen (PhD candidate at Technion, Israel Institute of Technology)

**Link**: [arxiv.org/pdf/2110.00960.pdf](https://arxiv.org/pdf/2110.00960.pdf)

**Title**: Be Aware of Your Leaders

**Authors**: <u>Shir Cohen (Technion & Novi Research)</u>, Rati Gelashvili (Novi Research), Eleftherios Kokoris Kogias (IST Austria & Novi Research), Zekun Li (Facebook/Novi), Dahlia Malkhi (Novi Research), Alberto Sonnino (Novi Research), Alexander Spiegelman (Novi Research)

**Abstract**: Advances in blockchains have influenced the State-MachineReplication (SMR) world and many state-of-the-art blockchain-SMR solutions are based on two pillars: Chaining and Leader-rotation. A predetermined round-robin mechanism used for Leader-rotation, however, has an undesirable behavior: crashed parties become designated leaders infinitely often, slowing down overall system performance. In this paper, we provide a new Leader-Aware SMR framework that, among other desirable properties, formalizes a Leader-utilization requirement that bounds the number of rounds whose leaders are faulty in crash-only executions. We introduce Carousel, a novel, reputation-based Leader-rotation solution to achieve Leader-Aware SMR. The challenge in adaptive Leader-rotation is that it cannot rely on consensus to determine a leader, since consensus itself needs a leader. Carousel uses the available on-chain information to determine a leader locally and achieves Liveness despite this difficulty. A HotStuff implementation fitted with Carousel demonstrates drastic performance improvements: it increases throughput over 2x in faultless settings and provided a 20x throughput increase and 5x latency reduction in the presence of faults.
 
### Panagiotis Chatzigiannis (PhD candidate at George Mason University)

**Link**: [eprint.iacr.org/2021/1657.pdf](https://eprint.iacr.org/2021/1657.pdf)

**Title**: SoK: Blockchain Light Clients

**Authors**: <u>Panagiotis Chatzigiannis (George Mason University)</u>, Foteini Baldimtsi (George Mason University), Konstantinos Chalkias (Novi Financial/Facebook Research)

**Abstract**: Blockchain systems, as append-only ledgers, are typically associated with linearly growing participation costs. Therefore, for a blockchain client to interact with the system (query or submit a transaction), it can either pay these costs by downloading, storing and verifying the blockchain history, or forfeit blockchain security guarantees and place its trust on third party intermediary servers. With this problem becoming apparent from early works in the blockchain space, the concept of a light client has been proposed, where a resource-constrained client such as a browser or mobile device can participate in the system by querying and/or submitting transactions without holding the full blockchain but while still inheriting the blockchain's security guarantees. A plethora of blockchain systems with different light client frameworks and implementations have been proposed, each with different functionalities, assumptions and efficiencies. In this work we provide a systematization of such light client designs. We unify the space by providing a set of definitions on their properties in terms of provided functionality, efficiency and security, and provide future research directions based on our findings.
 
### James Hsin-yu Chiang (PhD candidate at Technial University of Denmark)

**Link**: [arxiv.org/pdf/2106.01870.pdf](https://arxiv.org/pdf/2106.01870.pdf)

**Title**: Maximizing Extractable Value from Automated Market Makers

**Authors**: Massimo Bartoletti (University of Cagliari), <u>James Hsin-yu Chiang (Technical University of Denmark)</u>, Alberto Lluch-Lafuente (Technical University of Denmark)

**Abstract**: Automated Market Makers (AMMs) are decentralized applications that allow users to exchange crypto-tokens without the need for a matching exchange order. AMMs are one of the most successful DeFi use cases: indeed, major AMM platforms process a daily volume of transactions worth USD billions. Despite their popularity, AMMs are well-known to suffer from transaction-ordering issues: adversaries can influence the ordering of user transactions, and possibly front-run them with their own, to extract value from AMMs, to the detriment of users. We devise an effective procedure to construct a strategy through which an adversary can maximize the value extracted from user transactions.
 
### Philipp Zabka (Masters candidate at University of Vienna)

**Link**: [arxiv.org/abs/2201.07746](https://arxiv.org/abs/2201.07746)

**Title**: A Centrality Analysis of the Lightning Network

**Authors**: <u>Philipp Zabka (University of Vienna, Austria)</u>, Klaus-Tycho Förster (Technical University of Dortmund, Germany), Stefan Schmid (Technical University of Berlin, Germany) (Fraunhofer SIT, Germany), Christian Decker (Blockstream, Zürich, Switzerland)

**Abstract**: Payment channel networks (PCNs) such as the Lightning Network offer an appealing solution to the scalability problem faced by many cryptocurrencies operating on a blockchain such as Bitcoin. However, PCNs also inherit the stringent dependability requirements of blockchain. In particular, in order to mitigate liquidity bottlenecks as well as on-path attacks, it is important that payment channel networks maintain a high degree of decentralization. Motivated by this requirement, we conduct an empirical centrality analysis of the popular Lightning Network, and in particular, the betweenness centrality distribution of the routing system. Based on our extensive data set (using several millions of channel update messages), we implemented a TimeMachine tool which enables us to study the network evolution over time. We find that although the network is generally fairly decentralized, a small number of nodes can attract a significant fraction of the transactions, introducing skew. Furthermore, our analysis suggests that over the last two years, the centrality has increased significantly, e.g., the inequality (measured by the Gini index) has increased by more than 10%.
 
### Xiaotong Sun (PhD candidate at University of Glasgow)

**Link**: [arxiv.org/abs/2203.16612](https://arxiv.org/abs/2203.16612)

**Title**: Decentralization illusion in DeFi: Evidence from MakerDAO

**Authors**: <u>Xiaotong Sun (University of Glasgow)</u>, Charalampos Stasinakis (University of Glasgow), Georigios Sermpinis (University of Glasgow)

**Abstract**: Decentralized Autonomous Organization (DAO) is very popular in Decentralized Finance (DeFi) applications as it provides a decentralized governance solution through blockchain. We analyze the governance characteristics in the relevant Maker protocol and its stablecoin Dai (DAI) and governance token Maker (MKR). To achieve that, we establish several measurements of centralized governance. Our empirical analysis investigates the effect of centralized governance over a series of factors related to MKR, DAI and Ethereum, such as financial, transaction, exchange, network and twitter sentiment indicators. Our results show that governance centralization influences both the Maker protocol and Ethereum blockchain. The main implication of this study is that centralized governance in MakerDAO very much exists, while DeFi investors face a trade-off between efficiency and decentralization. This further contributes to the contemporary debate on whether DeFi can be truly decentralized.
