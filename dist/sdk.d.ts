import { type DiagnoseXxyyTransactionInput, type DiagnoseXxyyTransactionOutput } from './runtime/contracts.js';
import { type GetTransactionInput, type GetTransactionOutput } from './runtime/public-transaction-contracts.js';
export interface InspectPublicTransactionOptions {
    egoBrowserExecutable?: string;
    env?: NodeJS.ProcessEnv;
    signal?: AbortSignal;
    taskName?: string;
}
export interface DiagnoseXxyyTransactionOptions extends InspectPublicTransactionOptions {
    artifactDirectory?: string;
    canonicalPoolConfig?: string | unknown;
    captureScreenshot?: boolean;
    chromeExecutable?: string;
    maxSmallPoolLiquidityUsd?: string;
    maxSmallPoolRelativeLiquidityPpm?: number;
    profileDirectory?: string;
}
export type XxyyAgentDiagnosisResult = DiagnoseXxyyTransactionOutput & {
    screenshotFilePath?: string;
};
export declare function inspectPublicTransaction(input: GetTransactionInput, options?: InspectPublicTransactionOptions): Promise<GetTransactionOutput>;
export declare function diagnoseXxyyTransaction(input: DiagnoseXxyyTransactionInput, options?: DiagnoseXxyyTransactionOptions): Promise<XxyyAgentDiagnosisResult>;
//# sourceMappingURL=sdk.d.ts.map