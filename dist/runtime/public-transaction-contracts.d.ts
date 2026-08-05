import { z } from 'zod';
export declare const publicChainNetworkSchema: z.ZodString;
export declare const getTransactionInputSchema: z.ZodObject<{
    network: z.ZodOptional<z.ZodString>;
    reference: z.ZodString;
}, z.core.$strict>;
export declare const getTransactionOutputSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    analysis: z.ZodObject<{
        diagnostics: z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            evidenceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
            retryable: z.ZodBoolean;
            stage: z.ZodString;
        }, z.core.$strict>>;
        evidence: z.ZodArray<z.ZodObject<{
            blockNumber: z.ZodOptional<z.ZodString>;
            chainId: z.ZodOptional<z.ZodString>;
            confidence: z.ZodNumber;
            effectiveAt: z.ZodOptional<z.ZodString>;
            excerpt: z.ZodOptional<z.ZodString>;
            id: z.ZodString;
            kind: z.ZodEnum<{
                document: "document";
                social: "social";
                transaction: "transaction";
                log: "log";
                trace: "trace";
                metadata: "metadata";
                block: "block";
                calculation: "calculation";
            }>;
            observedAt: z.ZodOptional<z.ZodString>;
            payloadHash: z.ZodOptional<z.ZodString>;
            source: z.ZodString;
            sourceUrl: z.ZodOptional<z.ZodString>;
            structuredData: z.ZodOptional<z.ZodType<import("../shared/domain-contract.js").JsonValue, unknown, z.core.$ZodTypeInternals<import("../shared/domain-contract.js").JsonValue, unknown>>>;
            supports: z.ZodArray<z.ZodString>;
            transactionHash: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        findings: z.ZodArray<z.ZodObject<{
            confidence: z.ZodNumber;
            evidenceIds: z.ZodArray<z.ZodString>;
            id: z.ZodString;
            inference: z.ZodBoolean;
            statement: z.ZodString;
        }, z.core.$strict>>;
        skill: never;
        status: z.ZodEnum<{
            success: "success";
            partial: "partial";
            insufficient_data: "insufficient_data";
            failed: "failed";
        }>;
        summary: z.ZodString;
        version: never;
        warnings: z.ZodArray<z.ZodString>;
        assetChanges: z.ZodArray<z.ZodObject<{
            address: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
            asset: z.ZodDiscriminatedUnion<[z.ZodObject<{
                chainId: z.ZodString;
                kind: z.ZodLiteral<"native">;
            }, z.core.$strict>, z.ZodObject<{
                contractAddress: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
                kind: z.ZodLiteral<"erc20">;
            }, z.core.$strict>], "kind">;
            evidenceIds: z.ZodArray<z.ZodString>;
            rawDelta: z.ZodString;
        }, z.core.$strict>>;
        conflicts: z.ZodArray<z.ZodObject<{
            evidenceId: z.ZodString;
            field: z.ZodString;
            sourceIds: z.ZodArray<z.ZodString>;
        }, z.core.$strict>>;
        timeline: z.ZodArray<z.ZodObject<{
            amountRaw: z.ZodOptional<z.ZodString>;
            assetAddress: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
            evidenceIds: z.ZodArray<z.ZodString>;
            from: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
            kind: z.ZodEnum<{
                execution: "execution";
                native_transfer: "native_transfer";
                token_transfer: "token_transfer";
                fee: "fee";
                block_context: "block_context";
            }>;
            logIndex: z.ZodOptional<z.ZodNumber>;
            sequence: z.ZodNumber;
            statement: z.ZodString;
            to: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
        }, z.core.$strict>>;
        tokenTransfers: z.ZodArray<z.ZodObject<{
            amountRaw: z.ZodString;
            evidenceId: z.ZodString;
            from: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
            logIndex: z.ZodNumber;
            to: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
            tokenAddress: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
            transferType: z.ZodEnum<{
                transfer: "transfer";
                mint: "mint";
                burn: "burn";
            }>;
        }, z.core.$strict>>;
        transaction: z.ZodObject<{
            blockNumber: z.ZodOptional<z.ZodString>;
            blockTimestamp: z.ZodOptional<z.ZodString>;
            chainId: z.ZodString;
            executionStatus: z.ZodEnum<{
                success: "success";
                unknown: "unknown";
                reverted: "reverted";
                pending: "pending";
            }>;
            failureReason: z.ZodOptional<z.ZodString>;
            feeWei: z.ZodOptional<z.ZodString>;
            from: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
            hash: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
            inputKind: z.ZodEnum<{
                unknown: "unknown";
                native_transfer: "native_transfer";
                contract_call: "contract_call";
                contract_creation: "contract_creation";
            }>;
            to: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>;
            valueWei: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    chainId: z.ZodString;
    family: z.ZodLiteral<"evm">;
    diagnostics: z.ZodArray<z.ZodUnknown>;
    explorerUrl: z.ZodOptional<z.ZodString>;
    network: z.ZodString;
    status: z.ZodEnum<{
        success: "success";
        partial: "partial";
        insufficient_data: "insufficient_data";
    }>;
    summary: z.ZodString;
    transactionId: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    analysis: z.ZodOptional<z.ZodObject<{
        accountKeys: z.ZodArray<z.ZodString>;
        blockTime: z.ZodOptional<z.ZodString>;
        computeUnitsConsumed: z.ZodOptional<z.ZodString>;
        executionStatus: z.ZodEnum<{
            success: "success";
            unknown: "unknown";
            reverted: "reverted";
        }>;
        feeLamports: z.ZodOptional<z.ZodString>;
        logCount: z.ZodNumber;
        nativeBalanceChanges: z.ZodArray<z.ZodObject<{
            account: z.ZodString;
            accountIndex: z.ZodNumber;
            deltaLamports: z.ZodString;
        }, z.core.$strict>>;
        network: z.ZodLiteral<"solana:mainnet">;
        programIds: z.ZodArray<z.ZodString>;
        slot: z.ZodString;
        sources: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            kind: z.ZodLiteral<"explorer_browser">;
            observedAt: z.ZodString;
            payloadHash: z.ZodString;
            provenanceUrl: z.ZodString;
        }, z.core.$strict>>;
        tokenBalanceChanges: z.ZodArray<z.ZodObject<{
            account: z.ZodOptional<z.ZodString>;
            accountIndex: z.ZodNumber;
            decimals: z.ZodNumber;
            deltaRaw: z.ZodString;
            mint: z.ZodString;
            owner: z.ZodOptional<z.ZodString>;
            programId: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        transactionId: z.ZodString;
    }, z.core.$strict>>;
    family: z.ZodLiteral<"solana">;
    diagnostics: z.ZodArray<z.ZodUnknown>;
    explorerUrl: z.ZodOptional<z.ZodString>;
    network: z.ZodString;
    status: z.ZodEnum<{
        success: "success";
        partial: "partial";
        insufficient_data: "insufficient_data";
    }>;
    summary: z.ZodString;
    transactionId: z.ZodString;
}, z.core.$strict>], "family">;
export type GetTransactionInput = z.output<typeof getTransactionInputSchema>;
export type GetTransactionOutput = z.output<typeof getTransactionOutputSchema>;
export interface PublicTransactionClient {
    close(): Promise<void>;
    getTransaction(input: GetTransactionInput, options?: {
        signal?: AbortSignal;
    }): Promise<GetTransactionOutput>;
}
export declare function createPublicTransactionClientStub(getTransaction: PublicTransactionClient['getTransaction']): PublicTransactionClient;
//# sourceMappingURL=public-transaction-contracts.d.ts.map