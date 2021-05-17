import { createContext, useContext } from 'react';
import { DEFAULT_CONFIG } from '../../model/config/default';
export const ConfigContext = createContext(DEFAULT_CONFIG);
export function useConfig() {
    return useContext(ConfigContext);
}
//# sourceMappingURL=context.js.map