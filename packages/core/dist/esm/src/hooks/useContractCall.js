import { useMemo } from 'react';
import { useChainCall, useChainCalls } from './useChainCalls';
export function useContractCall(call) {
    const callData = call && call.args.every((arg) => arg !== undefined) && call.abi.encodeFunctionData(call.method, call.args);
    const result = useChainCall(call && callData && { address: call.address, data: callData });
    if (result === '0x') {
        console.warn(`Invalid contract call: address=${call && call.address} method=${call && call.method} args=${call && call.args}`);
        return undefined;
    }
    return useMemo(() => (call && result !== undefined ? call.abi.decodeFunctionResult(call.method, result) : undefined), [result]);
}
export function useContractCalls(calls) {
    const results = useChainCalls(calls.map((call) => ({
        address: call.address,
        data: call.abi.encodeFunctionData(call.method, call.args),
    })));
    return useMemo(() => results.map((result, idx) => result ? calls[idx].abi.decodeFunctionResult(calls[idx].method, result) : undefined), [results]);
}
//# sourceMappingURL=useContractCall.js.map