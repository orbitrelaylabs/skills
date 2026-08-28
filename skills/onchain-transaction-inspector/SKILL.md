---
name: onchain-transaction-inspector
description: Read basic facts for one user-supplied public transaction on an XXYY-supported chain from fixed Explorer pages with the bundled browser JSON CLI and host Chrome Connector. Use for transaction status, block or slot, timestamp, sender, recipient, fee, value, and token-transfer questions. The Skill does not require RPC or a public service. Do not use for call traces, wallet-wide history, balances, private transactions, MEV conclusions, signing, simulation, or execution.
---

# Onchain Transaction Inspector

## Runtime prerequisite

Require Node.js 24.16.0 or newer. The bundled script is self-contained and must run directly from the installed Skill; do not install workspace dependencies or clone the source repository.

## Browser prerequisite

All Explorer queries use the host-provided `xxyy-chrome-driver` and its Chrome Connector. The Connector may be installed in an operator-selected Chrome profile, but it must create and control its own dedicated tab; it must not navigate, reuse, or close pre-existing user tabs. If multiple Connector installations are online, the host must select one exact installation ID before invoking the Skill.

If Chrome, the driver, or the Connector is unavailable, tell the operator to complete the host's Connector setup and confirm that its Native Messaging connection is online. Product-support capabilities remain usable without the browser runtime. If an Explorer requests interactive verification, activate the Connector-owned tab for the operator, wait for confirmation, and retry. Do not bypass human verification or silently switch to an unapproved browser profile.

Supported mainnets are Solana, Ethereum, BNB Smart Chain, Base, Robinhood Chain, and Stable Chain. Accept only their built-in aliases or allowlisted Explorer transaction URLs; do not accept arbitrary chain IDs or endpoints.

Run:

```bash
node <skill-directory>/scripts/inspect.mjs --reference "<transaction-hash-or-explorer-url>"
```

Add `--network` for a bare ambiguous hash. A bare EVM hash accompanied by an unambiguous asset/network signal such as a BNB-denominated amount may be normalized by the host to BNB Smart Chain before invocation. Prefer an Explorer URL when ambiguity remains. Return normalized facts and explicitly label `partial` browser evidence as single-source. Do not infer address ownership, intent, profitability, internal calls, or MEV behavior.
