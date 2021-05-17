import { NetworkConnector } from '@web3-react/network-connector';
import { useEffect } from 'react';
import { useEthers } from '../hooks';
export function ReadOnlyProviderActivator({ readOnlyChainId, readOnlyUrls }) {
    const { activate, account, chainId: connectedChainId, active, connector } = useEthers();
    useEffect(() => {
        if (!active || (connector instanceof NetworkConnector && connectedChainId !== readOnlyChainId)) {
            activate(new NetworkConnector({ defaultChainId: readOnlyChainId, urls: readOnlyUrls || [] }));
        }
    }, [readOnlyChainId, readOnlyUrls, active, account, connectedChainId, connector]);
    return null;
}
//# sourceMappingURL=ReadOnlyProviderActivator.js.map