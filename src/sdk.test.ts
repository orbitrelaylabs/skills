import { describe, expect, it } from 'vitest';

import { diagnoseXxyyTransaction, inspectPublicTransaction } from './sdk.js';

describe('public SDK', () => {
  it('validates transaction input before starting a browser', async () => {
    await expect(
      inspectPublicTransaction({ reference: '' }, { env: { PATH: '' } }),
    ).rejects.toThrow();
  });

  it('does not require Chrome when screenshot capture is disabled', async () => {
    await expect(
      diagnoseXxyyTransaction(
        { checks: ['pool'], reference: '0x123' },
        { captureScreenshot: false, env: { PATH: '' } },
      ),
    ).rejects.toThrow('ego-browser');
  });
});
