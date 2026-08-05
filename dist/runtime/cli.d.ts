#!/usr/bin/env node
export interface XxyyDiagnosisCliOptions {
    argv?: readonly string[];
    env?: NodeJS.ProcessEnv;
}
export declare function runXxyyTransactionDiagnosisCli(options?: XxyyDiagnosisCliOptions): Promise<Record<string, unknown>>;
export declare function main(options?: XxyyDiagnosisCliOptions): Promise<void>;
//# sourceMappingURL=cli.d.ts.map