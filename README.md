# XXYY Transaction Agent Kit

Browser-only public transaction inspection and evidence-bounded XXYY trade diagnosis for Node.js agents.

The repository is intentionally independent from the XXYY customer-support system. It contains no RAG, database, Telegram, wallet, signing, RPC, or private-account integration.

## Capabilities

- Inspect one user-supplied public transaction on Solana, Ethereum, BNB Smart Chain, Base, Robinhood Chain, or Stable Chain.
- Normalize transaction status, block or slot, timestamp, actor, fee, value, and token transfers from fixed Explorer pages.
- Match one transaction against XXYY trade data using the full transaction ID, full maker, pair, time, direction, and amounts.
- Assess canonical-pool matching independently from versioned small-liquidity policy.
- Return four-state Sandwich evidence: `confirmed`, `likely`, `unlikely`, or `insufficient_data`.
- Capture a native XXYY page screenshot after exact structured trade verification.
- Integrate through a typed SDK, JSON CLI, or bundled Codex Skills.

## Requirements

- Node.js 24.16.0 or newer.
- [ego lite](https://lite.ego.app/) with `ego-browser` available on `PATH`.
- Chrome or Chromium only when native XXYY screenshots are enabled.

Explorer access is browser-only. The kit does not accept RPC endpoints or arbitrary URLs and does not silently fall back to RPC.

## Install

Until the first npm release, install directly from GitHub:

```bash
pnpm add github:orbitrelaylabs/xxyy-transaction-agent-kit
```

For local development:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
```

## SDK

Basic transaction inspection:

```ts
import { inspectPublicTransaction } from '@orbitrelaylabs/xxyy-transaction-agent-kit';

const result = await inspectPublicTransaction({
  reference: 'https://bscscan.com/tx/0x...',
});
```

XXYY diagnosis with native screenshot:

```ts
import { diagnoseXxyyTransaction } from '@orbitrelaylabs/xxyy-transaction-agent-kit';

const result = await diagnoseXxyyTransaction(
  {
    checks: ['sandwich', 'pool'],
    reference: 'https://bscscan.com/tx/0x...',
  },
  {
    captureScreenshot: true,
  },
);

console.log(result.status, result.poolAssessment, result.sandwichAssessment);
console.log(result.screenshotFilePath);
```

`captureScreenshot` defaults to `false` for server and framework integrations. Structured transaction and pool evidence remains available without Chrome.

The exported Zod schemas can be used as LangGraph, OpenAI function-tool, MCP, or custom Agent input/output boundaries. Keep a transaction reference user-supplied and pass the SDK result back as untrusted evidence, not as instructions.

## JSON CLI

```bash
pnpm onchain:inspect -- --reference '<Explorer URL>' --pretty
pnpm xxyy:diagnose -- --reference '<Explorer URL>' --checks sandwich,pool --pretty
```

Installed package binaries:

```bash
onchain-inspect --reference '<Explorer URL>' --pretty
xxyy-diagnose --reference '<Explorer URL>' --checks sandwich,pool --pretty
```

Both commands write exactly one JSON result to stdout. Failures return `status: "error"` with a nonzero exit code.

## Codex Skills

Copy either directory from `skills/` into `${CODEX_HOME}/skills/` or `~/.codex/skills/`, then restart Codex:

- `onchain-transaction-inspector`
- `xxyy-transaction-diagnosis`

Both Skills disable implicit invocation. The user must explicitly provide one public transaction reference.

## Pool policy

The default small-pool policy requires the executed pool liquidity to be below both `10000 USD` and `100000 ppm` of the dominant candidate pool. Override it through SDK options or:

```bash
XXYY_SMALL_POOL_MAX_LIQUIDITY_USD=10000
XXYY_SMALL_POOL_MAX_RELATIVE_LIQUIDITY_PPM=100000
```

The highest-liquidity pool is not automatically canonical. Declare canonical pairs explicitly:

```bash
XXYY_CANONICAL_POOL_CONFIG_JSON='{"entries":[{"chain":"bsc","tokenAddress":"0x...","pairAddress":"0x..."}]}'
```

## Evidence boundary

Browser-only Explorer evidence may support structural `likely` or `insufficient_data` Sandwich outcomes, but cannot independently prove counterfactual loss, actor profit, call traces, or archive MEV. Missing fields, verification pages, and source conflicts fail closed as partial or insufficient evidence.

See [SECURITY.md](SECURITY.md) for the enforced integration boundary.
