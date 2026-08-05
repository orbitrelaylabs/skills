import { xxyySandwichAssessmentInputSchema, xxyySandwichAssessmentSchema, } from './contracts.js';
export function assessXxyySandwichPattern(input) {
    const parsed = xxyySandwichAssessmentInputSchema.parse(input);
    const target = parsed.observations.find((observation) => observation.transactionId === parsed.targetTransactionId);
    if (target === undefined) {
        throw new RangeError('Target transaction is missing from the Sandwich neighborhood.');
    }
    if (parsed.coverage.sourceConflicts > 0) {
        return result('insufficient_data', ['source_conflict']);
    }
    const ordered = [...parsed.observations].sort(compareObservationOrder);
    const targetIndex = ordered.findIndex((observation) => observation.transactionId === parsed.targetTransactionId);
    const front = ordered[targetIndex - 1];
    const back = ordered[targetIndex + 1];
    if (front === undefined || back === undefined) {
        return parsed.coverage.neighborhood === 'complete'
            ? result('unlikely', ['no_bracketing_transactions'])
            : result('insufficient_data', ['no_bracketing_transactions', 'neighborhood_incomplete']);
    }
    const sameBlockOrSlot = shareBlockOrSlot(front, target, back);
    const samePool = front.poolAddress === target.poolAddress && back.poolAddress === target.poolAddress;
    const transactionOrder = front.transactionIndex !== undefined &&
        target.transactionIndex !== undefined &&
        back.transactionIndex !== undefined &&
        front.transactionIndex < target.transactionIndex &&
        target.transactionIndex < back.transactionIndex;
    const actorMatches = front.actor !== undefined && front.actor === back.actor && front.actor !== target.actor;
    const directionMatches = front.side === target.side && isOppositeSide(target.side, back.side);
    const structuralReasons = [
        ...(!sameBlockOrSlot ? ['same_block_or_slot_missing'] : []),
        ...(!samePool ? ['pool_mismatch'] : []),
        ...(!transactionOrder ? ['ordering_missing'] : []),
        ...(front.actor === target.actor ? ['actor_same_as_target'] : []),
        ...(!actorMatches && front.actor !== target.actor ? ['actor_mismatch'] : []),
        ...(!directionMatches ? ['direction_mismatch'] : []),
    ];
    const criteria = {
        actorLoop: criterion(parsed.calculation?.actorAssetLoopVerified),
        adverseVictimImpact: positiveCriterion(parsed.calculation?.victimLossRaw),
        profitableActor: positiveCriterion(parsed.calculation?.attackerProfitRaw),
        sameBlockOrSlot: booleanCriterion(sameBlockOrSlot),
        samePool: booleanCriterion(samePool),
        transactionOrder: booleanCriterion(transactionOrder),
        twoSidedDirection: booleanCriterion(directionMatches && actorMatches),
    };
    if (structuralReasons.length > 0) {
        return result(parsed.coverage.neighborhood === 'complete' ? 'unlikely' : 'insufficient_data', structuralReasons, {
            back,
            criteria,
            front,
        });
    }
    const victimLoss = parsed.calculation?.victimLossRaw;
    const attackerProfit = parsed.calculation?.attackerProfitRaw;
    if (victimLoss === undefined || attackerProfit === undefined) {
        return result('likely', ['candidate_pattern_complete', 'loss_or_profit_missing'], {
            back,
            criteria,
            front,
        });
    }
    if (victimLoss === '0') {
        return result('unlikely', ['target_not_adversely_affected'], { back, criteria, front });
    }
    if (attackerProfit === '0') {
        return result('unlikely', ['not_profitable'], { back, criteria, front });
    }
    const completeCoverage = parsed.coverage.neighborhood === 'complete' &&
        parsed.coverage.poolState === 'complete' &&
        parsed.coverage.actorAssetDeltas === 'complete';
    const actorLoopVerified = parsed.calculation?.actorAssetLoopVerified === true;
    return result(completeCoverage && actorLoopVerified ? 'confirmed' : 'likely', ['candidate_pattern_complete'], {
        back,
        criteria,
        front,
    });
}
function result(verdict, reasonCodes, candidate = {}) {
    return xxyySandwichAssessmentSchema.parse({
        ...(candidate.back === undefined ? {} : { backTransactionId: candidate.back.transactionId }),
        ...(candidate.front?.actor === undefined ? {} : { candidateActor: candidate.front.actor }),
        criteria: candidate.criteria ??
            {
                actorLoop: 'unknown',
                adverseVictimImpact: 'unknown',
                profitableActor: 'unknown',
                sameBlockOrSlot: 'unknown',
                samePool: 'unknown',
                transactionOrder: 'unknown',
                twoSidedDirection: 'unknown',
            },
        ...(candidate.front === undefined ? {} : { frontTransactionId: candidate.front.transactionId }),
        reasonCodes,
        verdict,
    });
}
function compareObservationOrder(left, right) {
    if (left.transactionIndex === undefined || right.transactionIndex === undefined) {
        return left.transactionId.localeCompare(right.transactionId);
    }
    return left.transactionIndex - right.transactionIndex;
}
function shareBlockOrSlot(front, target, back) {
    if (target.blockNumber !== undefined) {
        return front.blockNumber === target.blockNumber && back.blockNumber === target.blockNumber;
    }
    if (target.slot !== undefined) {
        return front.slot === target.slot && back.slot === target.slot;
    }
    return false;
}
function isOppositeSide(target, back) {
    return (target === 'buy' && back === 'sell') || (target === 'sell' && back === 'buy');
}
function booleanCriterion(value) {
    return value ? 'yes' : 'no';
}
function criterion(value) {
    return value === undefined ? 'unknown' : booleanCriterion(value);
}
function positiveCriterion(value) {
    return value === undefined ? 'unknown' : value === '0' ? 'no' : 'yes';
}
//# sourceMappingURL=assess-sandwich.js.map