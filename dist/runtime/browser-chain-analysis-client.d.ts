import { type PublicTransactionClient } from './public-transaction-contracts.js';
export declare class ExplorerBrowserVerificationError extends Error {
    readonly code = "explorer_verification_required";
    constructor(host?: string, taskName?: string);
}
export declare class EgoBrowserUnavailableError extends Error {
    readonly code = "ego_browser_unavailable";
    constructor();
}
export interface CreateBrowserChainAnalysisClientOptions {
    pageEvaluator?: BrowserPageEvaluator;
    timeoutMs?: number;
}
export type BrowserPageEvaluator = (input: {
    expression?: string;
    fetchUrl?: string;
    signal?: AbortSignal;
    timeoutMs: number;
    url: string;
}) => Promise<unknown>;
/**
 * Fixed-origin, read-only Explorer evidence for every XXYY-supported chain. This deliberately
 * exposes only getTransaction; trace and MEV calls remain unavailable because browser pages are
 * partial evidence.
 */
export declare function createBrowserChainAnalysisClient(options: CreateBrowserChainAnalysisClientOptions): PublicTransactionClient;
export declare function resolveBrowserChromeExecutable(configured?: string): Promise<string | undefined>;
export declare function resolveEgoBrowserExecutable(pathValue?: string | undefined): Promise<string | undefined>;
export declare function createEgoBrowserPageEvaluator(options?: {
    command?: string;
    taskName?: string;
}): BrowserPageEvaluator;
export declare function createScanPageTransactionExpression(): string;
export declare function resolveSolanaBrowserTransactionId(reference: string, network?: string): string;
export declare function prepareBrowserProfile(profileDirectory: string): Promise<void>;
export declare function resolveExplorerChromeLaunch(chromeExecutable: string, chromeArguments: string[], options?: {
    xvfbRunExecutable?: string;
}): Promise<{
    arguments: string[];
    command: string;
}>;
//# sourceMappingURL=browser-chain-analysis-client.d.ts.map