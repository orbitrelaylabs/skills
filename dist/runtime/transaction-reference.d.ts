import type { GetTransactionInput } from './public-transaction-contracts.js';
export declare class PublicTransactionReferenceError extends Error {
    readonly code = "invalid_reference";
    constructor();
}
export interface EvmTransactionReference {
    chainId: string;
    explorerUrl?: string;
    family: 'evm';
    network: string;
    transactionId: string;
}
export interface SolanaTransactionReference {
    explorerUrl: string;
    family: 'solana';
    network: 'solana:mainnet';
    transactionId: string;
}
export type PublicTransactionReference = EvmTransactionReference | SolanaTransactionReference;
export declare function resolvePublicTransactionReference(input: GetTransactionInput): PublicTransactionReference;
//# sourceMappingURL=transaction-reference.d.ts.map