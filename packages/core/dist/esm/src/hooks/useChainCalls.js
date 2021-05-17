import { useContext, useEffect } from 'react';
import { ChainStateContext } from '../providers/chainState/context';
export function useChainCalls(calls) {
    const { addCalls, removeCalls, value } = useContext(ChainStateContext);
    useEffect(() => {
        addCalls(calls);
        return () => removeCalls(calls);
    }, [JSON.stringify(calls), addCalls, removeCalls]);
    return calls.map(({ address, data }) => {
        var _a, _b;
        return (_b = (_a = value === null || value === void 0 ? void 0 : value.state) === null || _a === void 0 ? void 0 : _a[address]) === null || _b === void 0 ? void 0 : _b[data];
    });
}
export function useChainCall(call) {
    const [result] = useChainCalls(call ? [call] : []);
    return result;
}
//# sourceMappingURL=useChainCalls.js.map