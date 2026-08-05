import { type ChildProcess } from 'node:child_process';
import { type XxyyScreenshotEvidenceProvider } from './contracts.js';
export interface CreateChromeXxyyScreenshotProviderOptions {
    artifactDirectory: string;
    chromeExecutable: string;
    profileDirectory?: string;
    timeoutMs?: number;
}
export declare function createChromeXxyyScreenshotProvider(options: CreateChromeXxyyScreenshotProviderOptions): XxyyScreenshotEvidenceProvider;
export declare function xxyyPairUrl(chain: string, pairAddress: string): string;
export interface CdpClient {
    call(method: string, params?: Record<string, unknown>): Promise<Record<string, unknown>>;
    close(): void;
    on(method: string, listener: (params: Record<string, unknown>) => void): () => void;
}
export declare function readDebuggerUrl(process: ChildProcess, timeoutMs: number, signal: AbortSignal | undefined): Promise<URL>;
export declare function findPageDebuggerUrl(debuggerUrl: URL, timeoutMs: number, signal: AbortSignal | undefined): Promise<string>;
export declare function createCdpClient(url: string, timeoutMs: number, signal: AbortSignal | undefined): Promise<CdpClient>;
export declare function buildVerifiedRowHighlightExpression(input: {
    amountFragments: readonly string[];
    makerSuffix: string;
    side: '' | 'buy' | 'sell';
    timeFragments: readonly string[];
}): string;
export declare function buildKlineReadinessExpression(): string;
export declare function buildNativeHistoricalFilterExpression(timestamp: number, windowMs?: number): string;
export declare function delay(ms: number, signal?: AbortSignal): Promise<void>;
export declare function isRecord(value: unknown): value is Record<string, unknown>;
//# sourceMappingURL=chrome-screenshot-provider.d.ts.map