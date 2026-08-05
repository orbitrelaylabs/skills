export interface BuiltInEvmNetworkProfile {
    aliases: readonly string[];
    canonicalNetwork: `eip155:${string}`;
    chainId: string;
    explorerBaseUrl: string;
    explorerHosts: readonly string[];
    name: string;
}
export declare const BUILT_IN_EVM_NETWORKS: readonly BuiltInEvmNetworkProfile[];
export declare const SOLANA_MAINNET_NETWORK = "solana:mainnet";
export declare function findBuiltInEvmNetworkByAlias(value: string): BuiltInEvmNetworkProfile | undefined;
export declare function findBuiltInEvmNetworkByChainId(chainId: string): BuiltInEvmNetworkProfile | undefined;
export declare function findBuiltInEvmNetworkByExplorerHost(host: string): BuiltInEvmNetworkProfile | undefined;
export declare function normalizePublicNetworkIdentifier(value: string): string | undefined;
//# sourceMappingURL=network-profiles.d.ts.map