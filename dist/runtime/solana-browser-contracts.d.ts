import { z } from 'zod';
export declare const solanaAddressSchema: z.ZodString;
export declare const solanaSignatureSchema: z.ZodString;
export declare const solanaTransactionSnapshotSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type SolanaTransactionSnapshot = z.output<typeof solanaTransactionSnapshotSchema>;
//# sourceMappingURL=solana-browser-contracts.d.ts.map