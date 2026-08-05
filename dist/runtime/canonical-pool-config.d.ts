import { z } from 'zod';
export declare const xxyyCanonicalPoolConfigSchema: z.ZodObject<{
    entries: z.ZodArray<z.ZodObject<{
        chain: z.ZodString;
        pairAddress: z.ZodString;
        tokenAddress: z.ZodString;
    }, z.core.$strict>>;
}, z.core.$strict>;
export declare function createConfiguredCanonicalPoolResolver(rawConfig: string | unknown): (input: {
    chain: string;
    targetTokenAddresses: readonly string[];
}) => string | undefined;
//# sourceMappingURL=canonical-pool-config.d.ts.map