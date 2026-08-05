import { evmHashSchema } from '../transaction-analysis/index.js';
import { SOLANA_MAINNET_NETWORK, findBuiltInEvmNetworkByChainId, findBuiltInEvmNetworkByExplorerHost, normalizePublicNetworkIdentifier, } from './network-profiles.js';
import { solanaSignatureSchema } from './solana-browser-contracts.js';
export class PublicTransactionReferenceError extends Error {
    code = 'invalid_reference';
    constructor() {
        super('The transaction reference or network is invalid or ambiguous.');
        this.name = 'PublicTransactionReferenceError';
    }
}
const SOLANA_EXPLORER_HOSTS = new Set(['explorer.solana.com', 'solscan.io', 'www.solscan.io']);
export function resolvePublicTransactionReference(input) {
    const explicitNetwork = input.network === undefined ? undefined : normalizeNetwork(input.network);
    return looksLikeUrl(input.reference)
        ? resolveExplorerUrl(input.reference, explicitNetwork)
        : resolveRawTransactionId(input.reference, explicitNetwork);
}
function resolveExplorerUrl(reference, explicitNetwork) {
    let url;
    try {
        url = new URL(reference);
    }
    catch {
        throw invalidReference();
    }
    if (url.protocol !== 'https:' ||
        url.username.length > 0 ||
        url.password.length > 0 ||
        url.hash.length > 0) {
        throw invalidReference();
    }
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length !== 2 || parts[0]?.toLowerCase() !== 'tx' || parts[1] === undefined) {
        throw invalidReference();
    }
    const evm = findBuiltInEvmNetworkByExplorerHost(url.hostname);
    if (evm !== undefined) {
        assertNetworkMatch(explicitNetwork, evm.canonicalNetwork);
        const transactionId = parseEvmTransactionId(parts[1]);
        return {
            chainId: evm.chainId,
            explorerUrl: `${evm.explorerBaseUrl}/tx/${transactionId}`,
            family: 'evm',
            network: evm.canonicalNetwork,
            transactionId,
        };
    }
    if (SOLANA_EXPLORER_HOSTS.has(url.hostname.toLowerCase())) {
        const cluster = url.searchParams.get('cluster')?.toLowerCase();
        if (cluster !== undefined && cluster !== 'mainnet' && cluster !== 'mainnet-beta') {
            throw invalidReference();
        }
        assertNetworkMatch(explicitNetwork, SOLANA_MAINNET_NETWORK);
        const transactionId = parseSolanaTransactionId(parts[1]);
        return {
            explorerUrl: `https://solscan.io/tx/${transactionId}`,
            family: 'solana',
            network: SOLANA_MAINNET_NETWORK,
            transactionId,
        };
    }
    throw invalidReference();
}
function resolveRawTransactionId(reference, explicitNetwork) {
    if (explicitNetwork?.startsWith('eip155:')) {
        const transactionId = parseEvmTransactionId(reference);
        const chainId = explicitNetwork.slice('eip155:'.length);
        const known = findBuiltInEvmNetworkByChainId(chainId);
        return {
            chainId,
            ...(known === undefined
                ? {}
                : { explorerUrl: `${known.explorerBaseUrl}/tx/${transactionId}` }),
            family: 'evm',
            network: explicitNetwork,
            transactionId,
        };
    }
    if (explicitNetwork === SOLANA_MAINNET_NETWORK) {
        const transactionId = parseSolanaTransactionId(reference);
        return {
            explorerUrl: `https://solscan.io/tx/${transactionId}`,
            family: 'solana',
            network: explicitNetwork,
            transactionId,
        };
    }
    throw invalidReference();
}
function normalizeNetwork(network) {
    const normalized = normalizePublicNetworkIdentifier(network);
    if (normalized === undefined)
        throw invalidReference();
    return normalized;
}
function assertNetworkMatch(explicit, resolved) {
    if (explicit !== undefined && explicit !== resolved)
        throw invalidReference();
}
function looksLikeUrl(value) {
    return /^https?:\/\//iu.test(value);
}
function parseEvmTransactionId(value) {
    const result = evmHashSchema.safeParse(value);
    if (!result.success)
        throw invalidReference();
    return result.data;
}
function parseSolanaTransactionId(value) {
    const result = solanaSignatureSchema.safeParse(value);
    if (!result.success)
        throw invalidReference();
    return result.data;
}
function invalidReference() {
    return new PublicTransactionReferenceError();
}
//# sourceMappingURL=transaction-reference.js.map