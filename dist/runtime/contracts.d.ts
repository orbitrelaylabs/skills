import { z } from 'zod';
import { xxyyPoolPolicySchema } from '../xxyy-diagnosis-core/index.js';
export declare const XXYY_TRANSACTION_DIAGNOSIS_RUNTIME_VERSION = "0.1.0";
export declare const DIAGNOSE_XXYY_TRANSACTION_TIMEOUT_MS = 120000;
export declare const xxyyDiagnosisCheckSchema: z.ZodEnum<{
    pool: "pool";
    sandwich: "sandwich";
}>;
export declare const diagnoseXxyyTransactionInputSchema: z.ZodObject<{
    checks: z.ZodArray<z.ZodEnum<{
        pool: "pool";
        sandwich: "sandwich";
    }>>;
    network: z.ZodOptional<z.ZodString>;
    reference: z.ZodString;
    swapIndex: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export declare const xxyyScreenshotArtifactSchema: z.ZodObject<{
    capturedAt: z.ZodString;
    maker: z.ZodString;
    mediaType: z.ZodEnum<{
        "image/png": "image/png";
        "image/jpeg": "image/jpeg";
        "image/webp": "image/webp";
    }>;
    pairAddress: z.ZodString;
    sourceUrl: z.ZodString;
    title: z.ZodString;
    transactionId: z.ZodString;
    url: z.ZodString;
}, z.core.$strict>;
export declare const xxyyScreenshotEvidenceSchema: z.ZodObject<{
    artifact: z.ZodOptional<z.ZodObject<{
        capturedAt: z.ZodString;
        maker: z.ZodString;
        mediaType: z.ZodEnum<{
            "image/png": "image/png";
            "image/jpeg": "image/jpeg";
            "image/webp": "image/webp";
        }>;
        pairAddress: z.ZodString;
        sourceUrl: z.ZodString;
        title: z.ZodString;
        transactionId: z.ZodString;
        url: z.ZodString;
    }, z.core.$strict>>;
    reason: z.ZodOptional<z.ZodEnum<{
        capture_failed: "capture_failed";
        not_configured: "not_configured";
        trade_not_exactly_matched: "trade_not_exactly_matched";
    }>>;
    status: z.ZodEnum<{
        ready: "ready";
        unavailable: "unavailable";
    }>;
}, z.core.$strict>;
export declare const xxyySurroundingTradeSchema: z.ZodObject<{
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
    chainStatus: z.ZodEnum<{
        unavailable: "unavailable";
        resolved: "resolved";
    }>;
    slot: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const diagnoseXxyyTransactionOutputSchema: z.ZodObject<{
    checks: z.ZodArray<z.ZodEnum<{
        pool: "pool";
        sandwich: "sandwich";
    }>>;
    market: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strict>>;
    poolAssessment: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strict>>;
    sandwichAssessment: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strict>>;
    screenshotEvidence: z.ZodObject<{
        artifact: z.ZodOptional<z.ZodObject<{
            capturedAt: z.ZodString;
            maker: z.ZodString;
            mediaType: z.ZodEnum<{
                "image/png": "image/png";
                "image/jpeg": "image/jpeg";
                "image/webp": "image/webp";
            }>;
            pairAddress: z.ZodString;
            sourceUrl: z.ZodString;
            title: z.ZodString;
            transactionId: z.ZodString;
            url: z.ZodString;
        }, z.core.$strict>>;
        reason: z.ZodOptional<z.ZodEnum<{
            capture_failed: "capture_failed";
            not_configured: "not_configured";
            trade_not_exactly_matched: "trade_not_exactly_matched";
        }>>;
        status: z.ZodEnum<{
            ready: "ready";
            unavailable: "unavailable";
        }>;
    }, z.core.$strict>;
    status: z.ZodEnum<{
        success: "success";
        partial: "partial";
        insufficient_data: "insufficient_data";
    }>;
    summary: z.ZodString;
    surroundingTrades: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        chainStatus: z.ZodEnum<{
            unavailable: "unavailable";
            resolved: "resolved";
        }>;
        slot: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>>;
    transaction: z.ZodDiscriminatedUnion<[z.ZodObject<{
        analysis: z.ZodObject<{
            diagnostics: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                evidenceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
                retryable: z.ZodBoolean;
                stage: z.ZodString;
            }, z.core.$strict>>;
            evidence: z.ZodArray<z.ZodObject<{
                blockNumber: z.ZodOptional<z.ZodString>;
                chainId: z.ZodOptional<z.ZodString>;
                confidence: z.ZodNumber;
                effectiveAt: z.ZodOptional<z.ZodString>;
                excerpt: z.ZodOptional<z.ZodString>;
                id: z.ZodString;
                kind: z.ZodEnum<{
                    document: "document";
                    social: "social";
                    transaction: "transaction";
                    log: "log";
                    trace: "trace";
                    metadata: "metadata";
                    block: "block";
                    calculation: "calculation";
                }>;
                observedAt: z.ZodOptional<z.ZodString>;
                payloadHash: z.ZodOptional<z.ZodString>;
                source: z.ZodString;
                sourceUrl: z.ZodOptional<z.ZodString>;
                structuredData: z.ZodOptional<z.ZodType<import("../shared/domain-contract.js").JsonValue, unknown, z.core.$ZodTypeInternals<import("../shared/domain-contract.js").JsonValue, unknown>>>;
                supports: z.ZodArray<z.ZodString>;
                transactionHash: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            findings: z.ZodArray<z.ZodObject<{
                confidence: z.ZodNumber;
                evidenceIds: z.ZodArray<z.ZodString>;
                id: z.ZodString;
                inference: z.ZodBoolean;
                statement: z.ZodString;
            }, z.core.$strict>>;
            skill: never;
            status: z.ZodEnum<{
                success: "success";
                partial: "partial";
                insufficient_data: "insufficient_data";
                failed: "failed";
            }>;
            summary: z.ZodString;
            version: never;
            warnings: z.ZodArray<z.ZodString>;
            assetChanges: z.ZodArray<z.ZodObject<{
                address: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
                asset: z.ZodDiscriminatedUnion<[z.ZodObject<{
                    chainId: z.ZodString;
                    kind: z.ZodLiteral<"native">;
                }, z.core.$strict>, z.ZodObject<{
                    contractAddress: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
                    kind: z.ZodLiteral<"erc20">;
                }, z.core.$strict>], "kind">;
                evidenceIds: z.ZodArray<z.ZodString>;
                rawDelta: z.ZodString;
            }, z.core.$strict>>;
            conflicts: z.ZodArray<z.ZodObject<{
                evidenceId: z.ZodString;
                field: z.ZodString;
                sourceIds: z.ZodArray<z.ZodString>;
            }, z.core.$strict>>;
            timeline: z.ZodArray<z.ZodObject<{
                amountRaw: z.ZodOptional<z.ZodString>;
                assetAddress: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
                evidenceIds: z.ZodArray<z.ZodString>;
                from: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
                kind: z.ZodEnum<{
                    execution: "execution";
                    native_transfer: "native_transfer";
                    token_transfer: "token_transfer";
                    fee: "fee";
                    block_context: "block_context";
                }>;
                logIndex: z.ZodOptional<z.ZodNumber>;
                sequence: z.ZodNumber;
                statement: z.ZodString;
                to: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
            }, z.core.$strict>>;
            tokenTransfers: z.ZodArray<z.ZodObject<{
                amountRaw: z.ZodString;
                evidenceId: z.ZodString;
                from: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
                logIndex: z.ZodNumber;
                to: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
                tokenAddress: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
                transferType: z.ZodEnum<{
                    transfer: "transfer";
                    mint: "mint";
                    burn: "burn";
                }>;
            }, z.core.$strict>>;
            transaction: z.ZodObject<{
                blockNumber: z.ZodOptional<z.ZodString>;
                blockTimestamp: z.ZodOptional<z.ZodString>;
                chainId: z.ZodString;
                executionStatus: z.ZodEnum<{
                    success: "success";
                    unknown: "unknown";
                    reverted: "reverted";
                    pending: "pending";
                }>;
                failureReason: z.ZodOptional<z.ZodString>;
                feeWei: z.ZodOptional<z.ZodString>;
                from: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>;
                hash: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
                inputKind: z.ZodEnum<{
                    unknown: "unknown";
                    native_transfer: "native_transfer";
                    contract_call: "contract_call";
                    contract_creation: "contract_creation";
                }>;
                to: z.ZodOptional<z.ZodNullable<z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>>>;
                valueWei: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>;
        }, z.core.$strict>;
        chainId: z.ZodString;
        family: z.ZodLiteral<"evm">;
        diagnostics: z.ZodArray<z.ZodUnknown>;
        explorerUrl: z.ZodOptional<z.ZodString>;
        network: z.ZodString;
        status: z.ZodEnum<{
            success: "success";
            partial: "partial";
            insufficient_data: "insufficient_data";
        }>;
        summary: z.ZodString;
        transactionId: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        analysis: z.ZodOptional<z.ZodObject<{
            accountKeys: z.ZodArray<z.ZodString>;
            blockTime: z.ZodOptional<z.ZodString>;
            computeUnitsConsumed: z.ZodOptional<z.ZodString>;
            executionStatus: z.ZodEnum<{
                success: "success";
                unknown: "unknown";
                reverted: "reverted";
            }>;
            feeLamports: z.ZodOptional<z.ZodString>;
            logCount: z.ZodNumber;
            nativeBalanceChanges: z.ZodArray<z.ZodObject<{
                account: z.ZodString;
                accountIndex: z.ZodNumber;
                deltaLamports: z.ZodString;
            }, z.core.$strict>>;
            network: z.ZodLiteral<"solana:mainnet">;
            programIds: z.ZodArray<z.ZodString>;
            slot: z.ZodString;
            sources: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                kind: z.ZodLiteral<"explorer_browser">;
                observedAt: z.ZodString;
                payloadHash: z.ZodString;
                provenanceUrl: z.ZodString;
            }, z.core.$strict>>;
            tokenBalanceChanges: z.ZodArray<z.ZodObject<{
                account: z.ZodOptional<z.ZodString>;
                accountIndex: z.ZodNumber;
                decimals: z.ZodNumber;
                deltaRaw: z.ZodString;
                mint: z.ZodString;
                owner: z.ZodOptional<z.ZodString>;
                programId: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
            transactionId: z.ZodString;
        }, z.core.$strict>>;
        family: z.ZodLiteral<"solana">;
        diagnostics: z.ZodArray<z.ZodUnknown>;
        explorerUrl: z.ZodOptional<z.ZodString>;
        network: z.ZodString;
        status: z.ZodEnum<{
            success: "success";
            partial: "partial";
            insufficient_data: "insufficient_data";
        }>;
        summary: z.ZodString;
        transactionId: z.ZodString;
    }, z.core.$strict>], "family">;
    warnings: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type DiagnoseXxyyTransactionInput = z.output<typeof diagnoseXxyyTransactionInputSchema>;
export type DiagnoseXxyyTransactionOutput = z.output<typeof diagnoseXxyyTransactionOutputSchema>;
export type XxyyScreenshotArtifact = z.output<typeof xxyyScreenshotArtifactSchema>;
export type XxyyScreenshotEvidence = z.output<typeof xxyyScreenshotEvidenceSchema>;
export type XxyySurroundingTrade = z.output<typeof xxyySurroundingTradeSchema>;
export interface XxyyTransactionDiagnosisHandler {
    diagnoseXxyyTransaction(input: DiagnoseXxyyTransactionInput, options?: {
        signal?: AbortSignal;
    }): Promise<DiagnoseXxyyTransactionOutput>;
}
export interface XxyyScreenshotEvidenceProvider {
    capture(input: {
        blockNumber?: string;
        chain: string;
        logIndex?: number;
        maker: string;
        nativeAmount?: string;
        pairAddress: string;
        timestamp?: number;
        tokenAmount?: string;
        transactionId: string;
        type?: 'buy' | 'sell';
        usdAmount?: string;
    }, options?: {
        signal?: AbortSignal;
    }): Promise<XxyyScreenshotArtifact>;
}
export type XxyyDiagnosisPoolPolicy = z.output<typeof xxyyPoolPolicySchema>;
//# sourceMappingURL=contracts.d.ts.map