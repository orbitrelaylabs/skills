import { describe, expect, it } from 'vitest';

import { normalizeBundleSource } from './normalize-bundle-source.mjs';

describe('normalizeBundleSource', () => {
  it('removes workspace-depth prefixes from generated dependency comments', () => {
    expect(
      normalizeBundleSource(
        '// ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/index.js\nconst value = true;  \n',
      ),
    ).toBe('// node_modules/.pnpm/zod@4.4.3/node_modules/zod/index.js\nconst value = true;\n');
  });
});
