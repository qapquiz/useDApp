import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { ChainId } from '../constants';
export declare type Web3Ethers = ReturnType<typeof useWeb3React> & {
    library?: Web3Provider;
    chainId?: ChainId;
    activateBrowserWallet: () => void;
};
export declare function useEthers(): Web3Ethers;
//# sourceMappingURL=useEthers.d.ts.map