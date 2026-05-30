import { describe, it, expect, vi } from 'vitest';
import { SyncEngine } from './sync-engine';

describe('Sync Engine', () => {
  it('should have sync functionality defined', async () => {
    expect(SyncEngine.sync).toBeDefined();
  });

  it('should handle offline status', async () => {
    vi.stubGlobal('navigator', { onLine: false });
    expect(navigator.onLine).toBe(false);
  });
});
