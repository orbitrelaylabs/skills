import { mkdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';

import {
  createBrowserChainAnalysisClient,
  createEgoBrowserPageEvaluator,
  EgoBrowserUnavailableError,
  resolveBrowserChromeExecutable,
  resolveEgoBrowserExecutable,
} from './runtime/browser-chain-analysis-client.js';
import { createConfiguredCanonicalPoolResolver } from './runtime/canonical-pool-config.js';
import { createChromeXxyyScreenshotProvider } from './runtime/chrome-screenshot-provider.js';
import {
  diagnoseXxyyTransactionInputSchema,
  type DiagnoseXxyyTransactionInput,
  type DiagnoseXxyyTransactionOutput,
} from './runtime/contracts.js';
import {
  getTransactionInputSchema,
  type GetTransactionInput,
  type GetTransactionOutput,
} from './runtime/public-transaction-contracts.js';
import { createXxyyTransactionDiagnosisService } from './runtime/service.js';
import { createXxyyMarketDataClient } from './xxyy-market-data/index.js';

export interface InspectPublicTransactionOptions {
  egoBrowserExecutable?: string;
  env?: NodeJS.ProcessEnv;
  signal?: AbortSignal;
  taskName?: string;
}

export interface DiagnoseXxyyTransactionOptions extends InspectPublicTransactionOptions {
  artifactDirectory?: string;
  canonicalPoolConfig?: string | unknown;
  captureScreenshot?: boolean;
  chromeExecutable?: string;
  maxSmallPoolLiquidityUsd?: string;
  maxSmallPoolRelativeLiquidityPpm?: number;
  profileDirectory?: string;
}

export type XxyyAgentDiagnosisResult = DiagnoseXxyyTransactionOutput & {
  screenshotFilePath?: string;
};

export async function inspectPublicTransaction(
  input: GetTransactionInput,
  options: InspectPublicTransactionOptions = {},
): Promise<GetTransactionOutput> {
  const parsedInput = getTransactionInputSchema.parse(input);
  const command = await requireEgoBrowser(options);
  const client = createBrowserChainAnalysisClient({
    pageEvaluator: createEgoBrowserPageEvaluator({
      command,
      taskName: options.taskName ?? 'orbitrelay-onchain-agent-kit',
    }),
  });
  try {
    return await client.getTransaction(
      parsedInput,
      options.signal === undefined ? {} : { signal: options.signal },
    );
  } finally {
    await client.close();
  }
}

export async function diagnoseXxyyTransaction(
  input: DiagnoseXxyyTransactionInput,
  options: DiagnoseXxyyTransactionOptions = {},
): Promise<XxyyAgentDiagnosisResult> {
  const parsedInput = diagnoseXxyyTransactionInputSchema.parse(input);
  const env = options.env ?? process.env;
  const command = await requireEgoBrowser(options);
  const stateDirectory = path.join(homedir(), '.xxyy');
  const artifactDirectory = path.resolve(
    options.artifactDirectory ??
      env.XXYY_SCREENSHOT_DIRECTORY?.trim() ??
      path.join(stateDirectory, 'evidence'),
  );
  const profileDirectory = path.resolve(
    options.profileDirectory ??
      env.XXYY_BROWSER_PROFILE_DIRECTORY?.trim() ??
      path.join(stateDirectory, 'browser-profile'),
  );
  const captureScreenshot = options.captureScreenshot ?? false;
  const chainAnalysis = createBrowserChainAnalysisClient({
    pageEvaluator: createEgoBrowserPageEvaluator({
      command,
      taskName: options.taskName ?? 'orbitrelay-xxyy-agent-kit',
    }),
  });

  try {
    const canonicalPoolConfig =
      options.canonicalPoolConfig ?? env.XXYY_CANONICAL_POOL_CONFIG_JSON?.trim();
    const screenshotProvider = captureScreenshot
      ? await createScreenshotProvider({
          artifactDirectory,
          profileDirectory,
          ...((options.chromeExecutable ?? env.XXYY_SCREENSHOT_CHROME_EXECUTABLE?.trim())
            ? {
                chromeExecutable:
                  options.chromeExecutable ?? env.XXYY_SCREENSHOT_CHROME_EXECUTABLE!.trim(),
              }
            : {}),
        })
      : undefined;
    const service = createXxyyTransactionDiagnosisService({
      chainAnalysis,
      marketData: createXxyyMarketDataClient(),
      poolPolicy: {
        maxSmallPoolLiquidityUsd:
          options.maxSmallPoolLiquidityUsd ??
          env.XXYY_SMALL_POOL_MAX_LIQUIDITY_USD?.trim() ??
          '10000',
        maxSmallPoolRelativeLiquidityPpm:
          options.maxSmallPoolRelativeLiquidityPpm ??
          parseRelativeLiquidityPpm(env.XXYY_SMALL_POOL_MAX_RELATIVE_LIQUIDITY_PPM),
        version: '1.0.0',
      },
      ...(canonicalPoolConfig === undefined || canonicalPoolConfig === ''
        ? {}
        : { canonicalPoolResolver: createConfiguredCanonicalPoolResolver(canonicalPoolConfig) }),
      ...(screenshotProvider === undefined ? {} : { screenshotProvider }),
    });
    const output = await service.diagnoseXxyyTransaction(
      parsedInput,
      options.signal === undefined ? {} : { signal: options.signal },
    );
    const screenshotFilePath =
      output.screenshotEvidence.status === 'ready'
        ? path.join(artifactDirectory, path.basename(output.screenshotEvidence.artifact!.url))
        : undefined;
    return {
      ...output,
      ...(screenshotFilePath === undefined ? {} : { screenshotFilePath }),
    };
  } finally {
    await chainAnalysis.close();
  }
}

async function requireEgoBrowser(options: InspectPublicTransactionOptions): Promise<string> {
  const configured = options.egoBrowserExecutable?.trim();
  if (configured !== undefined && configured.length > 0) return path.resolve(configured);
  const executable = await resolveEgoBrowserExecutable((options.env ?? process.env).PATH);
  if (executable === undefined) throw new EgoBrowserUnavailableError();
  return executable;
}

async function createScreenshotProvider(input: {
  artifactDirectory: string;
  chromeExecutable?: string;
  profileDirectory: string;
}) {
  const chromeExecutable = await resolveBrowserChromeExecutable(input.chromeExecutable);
  if (chromeExecutable === undefined) {
    throw new TypeError('Chrome or Chromium is required when captureScreenshot is enabled.');
  }
  await Promise.all([
    mkdir(input.artifactDirectory, { mode: 0o750, recursive: true }),
    mkdir(input.profileDirectory, { mode: 0o750, recursive: true }),
  ]);
  return createChromeXxyyScreenshotProvider({
    artifactDirectory: input.artifactDirectory,
    chromeExecutable,
    profileDirectory: path.join(input.profileDirectory, 'screenshots'),
  });
}

function parseRelativeLiquidityPpm(value: string | undefined): number {
  const parsed = Number(value ?? '100000');
  if (!Number.isSafeInteger(parsed) || parsed < 0 || parsed > 1_000_000) {
    throw new TypeError('XXYY_SMALL_POOL_MAX_RELATIVE_LIQUIDITY_PPM must be 0..1000000.');
  }
  return parsed;
}
