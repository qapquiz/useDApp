import { jsx as _jsx } from "react/jsx-runtime";
import { DEFAULT_CONFIG } from '../../model/config/default';
import { ConfigContext } from './context';
export function ConfigProvider({ config, children }) {
    return _jsx(ConfigContext.Provider, { value: Object.assign(Object.assign({}, DEFAULT_CONFIG), config), children: children }, void 0);
}
//# sourceMappingURL=provider.js.map