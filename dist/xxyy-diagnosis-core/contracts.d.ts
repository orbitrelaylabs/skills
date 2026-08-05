import { z } from 'zod';
export declare const XXYY_TRANSACTION_DIAGNOSIS_CORE_VERSION: "0.1.0";
export declare const xxyyTradeSideSchema: z.ZodEnum<{
    unknown: "unknown";
    buy: "buy";
    sell: "sell";
    swap: "swap";
}>;
export declare const xxyyTradeObservationSchema: z.ZodObject<{
    actor: z.ZodOptional<z.ZodString>;
    blockNumber: z.ZodOptional<z.ZodString>;
    inputAmountRaw: z.ZodOptional<z.ZodString>;
    inputAsset: z.ZodOptional<z.ZodString>;
    outputAmountRaw: z.ZodOptional<z.ZodString>;
    outputAsset: z.ZodOptional<z.ZodString>;
    poolAddress: z.ZodString;
    side: z.ZodEnum<{
        unknown: "unknown";
        buy: "buy";
        sell: "sell";
        swap: "swap";
    }>;
    slot: z.ZodOptional<z.ZodString>;
    transactionId: z.ZodString;
    transactionIndex: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export declare const xxyyPairCandidateSchema: z.ZodObject<{
    baseToken: z.ZodString;
    chain: z.ZodString;
    dexId: z.ZodOptional<z.ZodString>;
    liquidityUsd: z.ZodOptional<z.ZodString>;
    pairAddress: z.ZodString;
    quoteToken: z.ZodString;
}, z.core.$strict>;
export declare const xxyyPoolPolicySchema: z.ZodObject<{
    maxSmallPoolLiquidityUsd: z.ZodString;
    maxSmallPoolRelativeLiquidityPpm: z.ZodNumber;
    version: z.ZodString;
}, z.core.$strict>;
export declare const xxyyPoolAssessmentInputSchema: z.ZodObject<{
    actualPoolAddress: z.ZodString;
    candidatePools: z.ZodArray<z.ZodObject<{
        baseToken: z.ZodString;
        chain: z.ZodString;
        dexId: z.ZodOptional<z.ZodString>;
        liquidityUsd: z.ZodOptional<z.ZodString>;
        pairAddress: z.ZodString;
        quoteToken: z.ZodString;
    }, z.core.$strict>>;
    canonicalPoolAddress: z.ZodOptional<z.ZodString>;
    policy: z.ZodObject<{
        maxSmallPoolLiquidityUsd: z.ZodString;
        maxSmallPoolRelativeLiquidityPpm: z.ZodNumber;
        version: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export declare const xxyyPoolAssessmentSchema: z.ZodObject<{
    actualLiquidityUsd: z.ZodOptional<z.ZodString>;
    canonicalMatch: z.ZodEnum<{
        unknown: "unknown";
        matches: "matches";
        does_not_match: "does_not_match";
    }>;
    dominantLiquidityUsd: z.ZodOptional<z.ZodString>;
    dominantPoolAddress: z.ZodOptional<z.ZodString>;
    liquidityClass: z.ZodEnum<{
        unknown: "unknown";
        small: "small";
        normal: "normal";
    }>;
    policyVersion: z.ZodString;
    reasonCodes: z.ZodArray<z.ZodEnum<{
        actual_pool_not_in_candidates: "actual_pool_not_in_candidates";
        canonical_pool_not_declared: "canonical_pool_not_declared";
        liquidity_missing: "liquidity_missing";
        matches_canonical_pool: "matches_canonical_pool";
        non_canonical_pool: "non_canonical_pool";
        relative_and_absolute_liquidity_small: "relative_and_absolute_liquidity_small";
        sufficient_liquidity: "sufficient_liquidity";
    }>>;
    relativeLiquidityPpm: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export declare const xxyySandwichCoverageSchema: z.ZodObject<{
    actorAssetDeltas: z.ZodEnum<{
        partial: "partial";
        complete: "complete";
        missing: "missing";
    }>;
    neighborhood: z.ZodEnum<{
        partial: "partial";
        complete: "complete";
    }>;
    poolState: z.ZodEnum<{
        partial: "partial";
        complete: "complete";
        missing: "missing";
    }>;
    sourceConflicts: z.ZodNumber;
}, z.core.$strict>;
export declare const xxyySandwichCalculationSchema: z.ZodObject<{
    actorAssetLoopVerified: z.ZodOptional<z.ZodBoolean>;
    attackerProfitRaw: z.ZodOptional<z.ZodString>;
    victimLossRaw: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const xxyySandwichAssessmentInputSchema: z.ZodObject<{
    calculation: z.ZodOptional<z.ZodObject<{
        actorAssetLoopVerified: z.ZodOptional<z.ZodBoolean>;
        attackerProfitRaw: z.ZodOptional<z.ZodString>;
        victimLossRaw: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
    coverage: z.ZodObject<{
        actorAssetDeltas: z.ZodEnum<{
            partial: "partial";
            complete: "complete";
            missing: "missing";
        }>;
        neighborhood: z.ZodEnum<{
            partial: "partial";
            complete: "complete";
        }>;
        poolState: z.ZodEnum<{
            partial: "partial";
            complete: "complete";
            missing: "missing";
        }>;
        sourceConflicts: z.ZodNumber;
    }, z.core.$strict>;
    observations: z.ZodArray<z.ZodObject<{
        actor: z.ZodOptional<z.ZodString>;
        blockNumber: z.ZodOptional<z.ZodString>;
        inputAmountRaw: z.ZodOptional<z.ZodString>;
        inputAsset: z.ZodOptional<z.ZodString>;
        outputAmountRaw: z.ZodOptional<z.ZodString>;
        outputAsset: z.ZodOptional<z.ZodString>;
        poolAddress: z.ZodString;
        side: z.ZodEnum<{
            unknown: "unknown";
            buy: "buy";
            sell: "sell";
            swap: "swap";
        }>;
        slot: z.ZodOptional<z.ZodString>;
        transactionId: z.ZodString;
        transactionIndex: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    targetTransactionId: z.ZodString;
}, z.core.$strict>;
export declare const xxyySandwichAssessmentSchema: z.ZodObject<{
    attackerProfitRaw: z.ZodOptional<z.ZodString>;
    backTransactionId: z.ZodOptional<z.ZodString>;
    candidateActor: z.ZodOptional<z.ZodString>;
    counterfactualAmountOutRaw: z.ZodOptional<z.ZodString>;
    criteria: z.ZodObject<{
        actorLoop: z.ZodEnum<{
            unknown: "unknown";
            yes: "yes";
            no: "no";
        }>;
        adverseVictimImpact: z.ZodEnum<{
            unknown: "unknown";
            yes: "yes";
            no: "no";
        }>;
        profitableActor: z.ZodEnum<{
            unknown: "unknown";
            yes: "yes";
            no: "no";
        }>;
        sameBlockOrSlot: z.ZodEnum<{
            unknown: "unknown";
            yes: "yes";
            no: "no";
        }>;
        samePool: z.ZodEnum<{
            unknown: "unknown";
            yes: "yes";
            no: "no";
        }>;
        transactionOrder: z.ZodEnum<{
            unknown: "unknown";
            yes: "yes";
            no: "no";
        }>;
        twoSidedDirection: z.ZodEnum<{
            unknown: "unknown";
            yes: "yes";
            no: "no";
        }>;
    }, z.core.$strict>;
    frontTransactionId: z.ZodOptional<z.ZodString>;
    profitToken: z.ZodOptional<z.ZodString>;
    reasonCodes: z.ZodArray<z.ZodEnum<{
        source_conflict: "source_conflict";
        actor_mismatch: "actor_mismatch";
        actor_loop_contradicted: "actor_loop_contradicted";
        actor_same_as_target: "actor_same_as_target";
        candidate_pattern_complete: "candidate_pattern_complete";
        direction_mismatch: "direction_mismatch";
        loss_or_profit_missing: "loss_or_profit_missing";
        neighborhood_incomplete: "neighborhood_incomplete";
        no_bracketing_transactions: "no_bracketing_transactions";
        not_profitable: "not_profitable";
        ordering_missing: "ordering_missing";
        pool_mismatch: "pool_mismatch";
        pool_state_discontinuity: "pool_state_discontinuity";
        quote_mismatch: "quote_mismatch";
        same_block_or_slot_missing: "same_block_or_slot_missing";
        target_not_adversely_affected: "target_not_adversely_affected";
        unsupported_observation: "unsupported_observation";
    }>>;
    verdict: z.ZodEnum<{
        insufficient_data: "insufficient_data";
        confirmed: "confirmed";
        likely: "likely";
        unlikely: "unlikely";
    }>;
    victimLossPpm: z.ZodOptional<z.ZodString>;
    victimLossRaw: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type XxyyTradeObservation = z.output<typeof xxyyTradeObservationSchema>;
export type XxyyPairCandidate = z.output<typeof xxyyPairCandidateSchema>;
export type XxyyPoolAssessmentInput = z.output<typeof xxyyPoolAssessmentInputSchema>;
export type XxyyPoolAssessment = z.output<typeof xxyyPoolAssessmentSchema>;
export type XxyySandwichAssessmentInput = z.output<typeof xxyySandwichAssessmentInputSchema>;
export type XxyySandwichAssessment = z.output<typeof xxyySandwichAssessmentSchema>;
//# sourceMappingURL=contracts.d.ts.map