export const xxyyMarketDataErrorCodes = [
    'http_error',
    'invalid_response',
    'request_aborted',
    'request_timeout',
    'response_too_large',
    'transport_error',
];
export class XxyyMarketDataError extends Error {
    code;
    retryable;
    constructor(code, retryable = false, options) {
        super(`XXYY market-data request failed: ${code}.`, options);
        this.name = 'XxyyMarketDataError';
        this.code = code;
        this.retryable = retryable;
    }
}
//# sourceMappingURL=errors.js.map