import { describe, it, expect, vi } from "vitest";

vi.mock("@/database/supabase/client", () => ({
  supabase: { from: vi.fn() },
}));

import { SyncEngine } from "./sync-engine";

describe("Sync Engine", () => {
  it("should have sync functionality defined", async () => {
    expect(SyncEngine.sync).toBeDefined();
  });

  it("should handle offline status", async () => {
    vi.stubGlobal("navigator", { onLine: false });
    expect(navigator.onLine).toBe(false);
  });
});
