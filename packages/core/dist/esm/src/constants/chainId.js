export var ChainId;
(function (ChainId) {
    ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Ropsten"] = 3] = "Ropsten";
    ChainId[ChainId["Rinkeby"] = 4] = "Rinkeby";
    ChainId[ChainId["Goerli"] = 5] = "Goerli";
    ChainId[ChainId["Kovan"] = 42] = "Kovan";
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["xDai"] = 100] = "xDai";
    ChainId[ChainId["Localhost"] = 1337] = "Localhost";
    ChainId[ChainId["Hardhat"] = 31337] = "Hardhat";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
})(ChainId || (ChainId = {}));
export const CHAIN_NAMES = {
    [ChainId.Mainnet]: 'Mainnet',
    [ChainId.Ropsten]: 'Ropsten',
    [ChainId.Kovan]: 'Kovan',
    [ChainId.Rinkeby]: 'Rinkeby',
    [ChainId.Goerli]: 'Goerli',
    [ChainId.BSC]: 'BSC',
    [ChainId.xDai]: 'xDai',
    [ChainId.Localhost]: 'Localhost',
    [ChainId.Hardhat]: 'Hardhat',
    [ChainId.Mumbai]: 'Mumbai'
};
export const MULTICALL_ADDRESSES = {
    [ChainId.Mainnet]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    [ChainId.Ropsten]: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
    [ChainId.Rinkeby]: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
    [ChainId.Goerli]: '0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e',
    [ChainId.Kovan]: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
    [ChainId.BSC]: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
    [ChainId.xDai]: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
    [ChainId.Mumbai]: '0x1Ea8a7b63cDE8d1309a51B9cd2b2f9390Cdb84c2',
};
export const TEST_CHAINS = [
    ChainId.Ropsten,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Goerli,
    ChainId.Localhost,
    ChainId.Hardhat,
    ChainId.Mumbai,
];
//# sourceMappingURL=chainId.js.map