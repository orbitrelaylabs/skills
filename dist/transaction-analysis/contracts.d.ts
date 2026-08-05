import { z } from 'zod';
export declare const TRANSACTION_ANALYSIS_SKILL: "transaction_analysis";
export declare const TRANSACTION_ANALYSIS_VERSION: "1.0.0";
export declare const ERC20_TRANSFER_TOPIC: "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
export declare const EVM_ZERO_ADDRESS: "0x0000000000000000000000000000000000000000";
export declare const EVM_UINT256_MAX: bigint;
export declare const evmChainIdSchema: z.ZodString;
export declare const evmUintSchema: z.ZodString;
export declare const evmSignedIntegerSchema: z.ZodString;
export declare const evmAddressSchema: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
export declare const evmHashSchema: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
export declare const evmBytesSchema: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
export declare const evmTransactionSnapshotSchema: z.ZodObject<{
    block: z.ZodOptional<z.ZodObject<{
        hash: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
        number: z.ZodString;
        sourceId: z.ZodString;
        timestamp: z.ZodString;
    }, z.core.$strict>>;
    chainId: z.ZodString;
    conflicts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        observations: z.ZodArray<z.ZodObject<{
            sourceId: z.ZodString;
            value: z.ZodString;
        }, z.core.$strict>>;
    }, z.core.$strict>>>;
    observedAt: z.ZodString;
    receipt: z.ZodOptional<z.ZodObject<{
        blockNumber: z.ZodString;
        contractAddress: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>;
        effectiveGasPrice: z.ZodString;
        gasUsed: z.ZodString;
        logs: z.ZodArray<z.ZodObject<{
            address: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
            data: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
            logIndex: z.ZodNumber;
            removed: z.ZodOptional<z.ZodBoolean>;
            sourceId: z.ZodString;
            topics: z.ZodArray<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
        }, z.core.$strict>>;
        sourceId: z.ZodString;
        status: z.ZodEnum<{
            success: "success";
            reverted: "reverted";
        }>;
        transactionHash: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
        transactionIndex: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    requestedTransactionHash: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    sources: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodEnum<{
            rpc: "rpc";
            indexer: "indexer";
            explorer: "explorer";
            fixture: "fixture";
        }>;
        observedAt: z.ZodString;
        payloadHash: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    transaction: z.ZodOptional<z.ZodObject<{
        blockNumber: z.ZodOptional<z.ZodString>;
        from: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
        hash: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
        input: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
        nonce: z.ZodString;
        sourceId: z.ZodString;
        to: z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
        transactionIndex: z.ZodOptional<z.ZodNumber>;
        value: z.ZodString;
    }, z.core.$strict>>;
}, z.core.$strict>;
export declare const transactionExecutionStatuses: readonly ["success", "reverted", "pending", "unknown"];
export declare const transactionTimelineKinds: readonly ["execution", "native_transfer", "token_transfer", "fee", "block_context"];
declare const assetChangeSchema: z.ZodObject<{
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
}, z.core.$strict>;
declare const tokenTransferSchema: z.ZodObject<{
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
}, z.core.$strict>;
declare const timelineItemSchema: z.ZodObject<{
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
}, z.core.$strict>;
export declare const transactionAnalysisResultSchema: z.ZodObject<{
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
export type EvmTransactionSnapshot = z.output<typeof evmTransactionSnapshotSchema>;
export type EvmSnapshotSource = EvmTransactionSnapshot['sources'][number];
export type EvmTransaction = NonNullable<EvmTransactionSnapshot['transaction']>;
export type EvmTransactionReceipt = NonNullable<EvmTransactionSnapshot['receipt']>;
export type EvmTransactionLog = EvmTransactionReceipt['logs'][number];
export type TransactionAnalysisResult = z.output<typeof transactionAnalysisResultSchema>;
export type TransactionAssetChange = z.output<typeof assetChangeSchema>;
export type TransactionTokenTransfer = z.output<typeof tokenTransferSchema>;
export type TransactionTimelineItem = z.output<typeof timelineItemSchema>;
export {};
//# sourceMappingURL=contracts.d.ts.map