import { ChainId, CHAIN_NAMES, TEST_CHAINS } from '../constants';
function etherscanNetworkPrefix(chainId) {
    switch (chainId) {
        case ChainId.Mainnet:
            return ``;
        case ChainId.Ropsten:
        case ChainId.Kovan:
        case ChainId.Rinkeby:
        case ChainId.Goerli:
            return getChainName(chainId).toLocaleLowerCase() + '.';
    }
}
export function getExplorerAddressLink(address, chainId) {
    switch (chainId) {
        case ChainId.Mainnet:
        case ChainId.Ropsten:
        case ChainId.Kovan:
        case ChainId.Rinkeby:
        case ChainId.Goerli:
            return `https://${etherscanNetworkPrefix(chainId)}etherscan.io/address/${address}`;
        case ChainId.BSC:
            return `https://bscscan.com/address/${address}`;
        case ChainId.xDai:
            return `https://blockscout.com/poa/xdai/address/${address}/transactions`;
        case ChainId.Mumbai:
            return `https://explorer-mumbai.maticvigil.com/address/${address}/transactions`;
    }
}
export function getExplorerTransactionLink(transactionHash, chainId) {
    switch (chainId) {
        case ChainId.Mainnet:
        case ChainId.Ropsten:
        case ChainId.Kovan:
        case ChainId.Rinkeby:
        case ChainId.Goerli:
            return `https://${etherscanNetworkPrefix(chainId)}etherscan.io/tx/${transactionHash}`;
        case ChainId.BSC:
            return `https://bscscan.com/tx/${transactionHash}`;
        case ChainId.xDai:
            return `https://blockscout.com/poa/xdai/tx/${transactionHash}/internal-transactions`;
        case ChainId.Mumbai:
            return `https://explorer-mumbai.maticvigil.com/tx/${transactionHash}/internal-transactions`;
    }
}
export function getChainName(chainId) {
    return CHAIN_NAMES[chainId];
}
export function isTestChain(chainId) {
    return TEST_CHAINS.includes(chainId);
}
//# sourceMappingURL=chain.js.map