export declare const xxyyMarketDataErrorCodes: readonly ["http_error", "invalid_response", "request_aborted", "request_timeout", "response_too_large", "transport_error"];
export type XxyyMarketDataErrorCode = (typeof xxyyMarketDataErrorCodes)[number];
export declare class XxyyMarketDataError extends Error {
    readonly code: XxyyMarketDataErrorCode;
    readonly retryable: boolean;
    constructor(code: XxyyMarketDataErrorCode, retryable?: boolean, options?: ErrorOptions);
}
//# sourceMappingURL=errors.d.ts.map