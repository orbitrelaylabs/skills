import type { XxyyMarketDataClient } from '../xxyy-market-data/index.js';
import { type XxyyPairCandidate } from '../xxyy-diagnosis-core/index.js';
import { type XxyyDiagnosisPoolPolicy, type XxyyScreenshotEvidenceProvider, type XxyyTransactionDiagnosisHandler } from './contracts.js';
import type { PublicTransactionClient } from './public-transaction-contracts.js';
export interface CreateXxyyTransactionDiagnosisServiceOptions {
    canonicalPoolResolver?: (input: {
        candidates: readonly XxyyPairCandidate[];
        chain: string;
        targetTokenAddresses: readonly string[];
    }) => Promise<string | undefined> | string | undefined;
    chainAnalysis: PublicTransactionClient;
    marketData: XxyyMarketDataClient;
    poolPolicy: XxyyDiagnosisPoolPolicy;
    screenshotProvider?: XxyyScreenshotEvidenceProvider;
}
export declare function createXxyyTransactionDiagnosisService(options: CreateXxyyTransactionDiagnosisServiceOptions): XxyyTransactionDiagnosisHandler;
//# sourceMappingURL=service.d.ts.map