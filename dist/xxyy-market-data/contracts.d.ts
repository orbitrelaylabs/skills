import { z } from 'zod';
export declare const XXYY_MARKET_DATA_ADAPTER_VERSION: "0.1.0";
export declare const XXYY_MARKET_DATA_ORIGIN: "https://www.xxyy.io";
export declare const xxyyMarketTradeSchema: z.ZodObject<{
    blockNumber: z.ZodOptional<z.ZodString>;
    logIndex: z.ZodOptional<z.ZodNumber>;
    maker: z.ZodString;
    marketCapUsd: z.ZodOptional<z.ZodString>;
    nativeAmount: z.ZodString;
    timestamp: z.ZodNumber;
    tokenAmount: z.ZodString;
    transactionId: z.ZodString;
    type: z.ZodEnum<{
        buy: "buy";
        sell: "sell";
    }>;
    usdAmount: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const xxyyContextTradeSchema: z.ZodObject<{
    blockNumber: z.ZodOptional<z.ZodString>;
    logIndex: z.ZodOptional<z.ZodNumber>;
    maker: z.ZodString;
    marketCapUsd: z.ZodOptional<z.ZodString>;
    nativeAmount: z.ZodString;
    timestamp: z.ZodNumber;
    tokenAmount: z.ZodString;
    transactionId: z.ZodString;
    type: z.ZodEnum<{
        buy: "buy";
        sell: "sell";
    }>;
    usdAmount: z.ZodOptional<z.ZodString>;
    displayIndex: z.ZodNumber;
    relation: z.ZodEnum<{
        earlier: "earlier";
        same_time: "same_time";
        later: "later";
    }>;
}, z.core.$strict>;
export declare const xxyyTradeLookupInputSchema: z.ZodObject<{
    actor: z.ZodOptional<z.ZodString>;
    chain: z.ZodString;
    targetTokenAddresses: z.ZodArray<z.ZodString>;
    timestampMs: z.ZodOptional<z.ZodNumber>;
    transactionAccountAddresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
    transactionId: z.ZodString;
}, z.core.$strict>;
export declare const xxyyMarketDiagnosticCodes: readonly ["http_error", "invalid_response", "multiple_transaction_matches", "request_aborted", "request_timeout", "response_too_large", "source_actor_conflict", "transport_error"];
export declare const xxyyMarketDiagnosticSchema: z.ZodObject<{
    code: z.ZodEnum<{
        http_error: "http_error";
        invalid_response: "invalid_response";
        multiple_transaction_matches: "multiple_transaction_matches";
        request_aborted: "request_aborted";
        request_timeout: "request_timeout";
        response_too_large: "response_too_large";
        source_actor_conflict: "source_actor_conflict";
        transport_error: "transport_error";
    }>;
    retryable: z.ZodBoolean;
    stage: z.ZodEnum<{
        pair_search: "pair_search";
        trade_search: "trade_search";
        validate_match: "validate_match";
    }>;
}, z.core.$strict>;
export declare const xxyyTradeLookupResultSchema: z.ZodObject<{
    candidatePairs: z.ZodArray<z.ZodObject<{
        baseToken: z.ZodString;
        chain: z.ZodString;
        dexId: z.ZodOptional<z.ZodString>;
        liquidityUsd: z.ZodOptional<z.ZodString>;
        pairAddress: z.ZodString;
        quoteToken: z.ZodString;
    }, z.core.$strict>>;
    contextTrades: z.ZodOptional<z.ZodArray<z.ZodObject<{
        blockNumber: z.ZodOptional<z.ZodString>;
        logIndex: z.ZodOptional<z.ZodNumber>;
        maker: z.ZodString;
        marketCapUsd: z.ZodOptional<z.ZodString>;
        nativeAmount: z.ZodString;
        timestamp: z.ZodNumber;
        tokenAmount: z.ZodString;
        transactionId: z.ZodString;
        type: z.ZodEnum<{
            buy: "buy";
            sell: "sell";
        }>;
        usdAmount: z.ZodOptional<z.ZodString>;
        displayIndex: z.ZodNumber;
        relation: z.ZodEnum<{
            earlier: "earlier";
            same_time: "same_time";
            later: "later";
        }>;
    }, z.core.$strict>>>;
    diagnostics: z.ZodArray<z.ZodObject<{
        code: z.ZodEnum<{
            http_error: "http_error";
            invalid_response: "invalid_response";
            multiple_transaction_matches: "multiple_transaction_matches";
            request_aborted: "request_aborted";
            request_timeout: "request_timeout";
            response_too_large: "response_too_large";
            source_actor_conflict: "source_actor_conflict";
            transport_error: "transport_error";
        }>;
        retryable: z.ZodBoolean;
        stage: z.ZodEnum<{
            pair_search: "pair_search";
            trade_search: "trade_search";
            validate_match: "validate_match";
        }>;
    }, z.core.$strict>>;
    matchedPair: z.ZodOptional<z.ZodObject<{
        baseToken: z.ZodString;
        chain: z.ZodString;
        dexId: z.ZodOptional<z.ZodString>;
        liquidityUsd: z.ZodOptional<z.ZodString>;
        pairAddress: z.ZodString;
        quoteToken: z.ZodString;
    }, z.core.$strict>>;
    status: z.ZodEnum<{
        exact: "exact";
        conflict: "conflict";
        not_found: "not_found";
    }>;
    trade: z.ZodOptional<z.ZodObject<{
        blockNumber: z.ZodOptional<z.ZodString>;
        logIndex: z.ZodOptional<z.ZodNumber>;
        maker: z.ZodString;
        marketCapUsd: z.ZodOptional<z.ZodString>;
        nativeAmount: z.ZodString;
        timestamp: z.ZodNumber;
        tokenAmount: z.ZodString;
        transactionId: z.ZodString;
        type: z.ZodEnum<{
            buy: "buy";
            sell: "sell";
        }>;
        usdAmount: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type XxyyMarketTrade = z.output<typeof xxyyMarketTradeSchema>;
export type XxyyContextTrade = z.output<typeof xxyyContextTradeSchema>;
export type XxyyMarketDiagnostic = z.output<typeof xxyyMarketDiagnosticSchema>;
export type XxyyTradeLookupInput = z.output<typeof xxyyTradeLookupInputSchema>;
export type XxyyTradeLookupResult = z.output<typeof xxyyTradeLookupResultSchema>;
export interface XxyyMarketDataClient {
    findTrade(input: XxyyTradeLookupInput, options?: {
        signal?: AbortSignal;
    }): Promise<XxyyTradeLookupResult>;
}
//# sourceMappingURL=contracts.d.ts.map