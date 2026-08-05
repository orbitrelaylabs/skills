import { type XxyyMarketDataClient, type XxyyTradeLookupResult } from './contracts.js';
export interface CreateXxyyMarketDataClientOptions {
    fetchImpl?: typeof fetch;
    maxResponseBytes?: number;
    requestTimeoutMs?: number;
}
export declare function createXxyyMarketDataClient(options?: CreateXxyyMarketDataClientOptions): XxyyMarketDataClient;
export declare function createXxyyMarketDataClientStub(findTrade: XxyyMarketDataClient['findTrade']): XxyyMarketDataClient;
export declare function emptyXxyyTradeLookupResult(): XxyyTradeLookupResult;
//# sourceMappingURL=client.d.ts.map