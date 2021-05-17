import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import { useConfig } from '../providers/config/context';
import { InjectedConnector } from '@web3-react/injected-connector';
export function useEthers() {
    const result = useWeb3React();
    const { supportedChains } = useConfig();
    const activateBrowserWallet = useMemo(() => {
        const injected = new InjectedConnector({ supportedChainIds: supportedChains });
        return () => result.activate(injected);
    }, [supportedChains]);
    return Object.assign(Object.assign({}, result), { activateBrowserWallet });
}
//# sourceMappingURL=useEthers.js.map