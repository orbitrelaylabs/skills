import { z } from 'zod';
export declare const evidenceKinds: readonly ["document", "social", "transaction", "log", "trace", "metadata", "block", "calculation"];
export declare const skillResultStatuses: readonly ["success", "partial", "insufficient_data", "failed"];
export type EvidenceKind = (typeof evidenceKinds)[number];
export type SkillResultStatus = (typeof skillResultStatuses)[number];
export type JsonValue = boolean | null | number | string | JsonValue[] | {
    [key: string]: JsonValue;
};
export declare const jsonValueSchema: z.ZodType<JsonValue>;
export declare const evidenceItemSchema: z.ZodObject<{
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
    structuredData: z.ZodOptional<z.ZodType<JsonValue, unknown, z.core.$ZodTypeInternals<JsonValue, unknown>>>;
    supports: z.ZodArray<z.ZodString>;
    transactionHash: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const skillFindingSchema: z.ZodObject<{
    confidence: z.ZodNumber;
    evidenceIds: z.ZodArray<z.ZodString>;
    id: z.ZodString;
    inference: z.ZodBoolean;
    statement: z.ZodString;
}, z.core.$strict>;
export declare const skillDiagnosticSchema: z.ZodObject<{
    code: z.ZodString;
    evidenceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    retryable: z.ZodBoolean;
    stage: z.ZodString;
}, z.core.$strict>;
export declare const skillResultBaseShape: {
    readonly diagnostics: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        evidenceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        retryable: z.ZodBoolean;
        stage: z.ZodString;
    }, z.core.$strict>>;
    readonly evidence: z.ZodArray<z.ZodObject<{
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
        structuredData: z.ZodOptional<z.ZodType<JsonValue, unknown, z.core.$ZodTypeInternals<JsonValue, unknown>>>;
        supports: z.ZodArray<z.ZodString>;
        transactionHash: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    readonly findings: z.ZodArray<z.ZodObject<{
        confidence: z.ZodNumber;
        evidenceIds: z.ZodArray<z.ZodString>;
        id: z.ZodString;
        inference: z.ZodBoolean;
        statement: z.ZodString;
    }, z.core.$strict>>;
    readonly skill: z.ZodString;
    readonly status: z.ZodEnum<{
        success: "success";
        partial: "partial";
        insufficient_data: "insufficient_data";
        failed: "failed";
    }>;
    readonly summary: z.ZodString;
    readonly version: z.ZodString;
    readonly warnings: z.ZodArray<z.ZodString>;
};
export declare function createSkillResultSchema<const Extension extends z.ZodRawShape>(extension: Extension): z.ZodObject<{
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
        structuredData: z.ZodOptional<z.ZodType<JsonValue, unknown, z.core.$ZodTypeInternals<JsonValue, unknown>>>;
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
    skill: z.ZodString;
    status: z.ZodEnum<{
        success: "success";
        partial: "partial";
        insufficient_data: "insufficient_data";
        failed: "failed";
    }>;
    summary: z.ZodString;
    version: z.ZodString;
    warnings: z.ZodArray<z.ZodString>;
} & Extension extends infer T ? { -readonly [P in keyof T]: T[P]; } : never, z.core.$strict>;
export declare const skillResultSchema: z.ZodObject<{
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
        structuredData: z.ZodOptional<z.ZodType<JsonValue, unknown, z.core.$ZodTypeInternals<JsonValue, unknown>>>;
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
    skill: z.ZodString;
    status: z.ZodEnum<{
        success: "success";
        partial: "partial";
        insufficient_data: "insufficient_data";
        failed: "failed";
    }>;
    summary: z.ZodString;
    version: z.ZodString;
    warnings: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type EvidenceItem = z.output<typeof evidenceItemSchema>;
export type SkillFinding = z.output<typeof skillFindingSchema>;
export type SkillDiagnostic = z.output<typeof skillDiagnosticSchema>;
export type SkillResult = z.output<typeof skillResultSchema>;
//# sourceMappingURL=domain-contract.d.ts.map