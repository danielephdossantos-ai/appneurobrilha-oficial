import { describe, it, expect, vi, beforeEach } from "vitest";
import { NeuroAnalyticsService } from "../services/NeuroAnalyticsService";
import { AnalyticsEngine } from "../../../engines/analytics/AnalyticsEngine";

vi.mock("../../../engines/analytics/AnalyticsEngine", () => ({
  AnalyticsEngine: {
    logEvent: vi.fn(),
    getFullAnalysis: vi.fn(),
    getInsights: vi.fn(),
  },
}));

describe("NeuroAnalyticsService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call AnalyticsEngine.logEvent when logging an event", async () => {
    const mockEvent = {
      child_id: "123",
      event_type: "click" as const,
      metadata: {},
    };

    await NeuroAnalyticsService.logEvent(mockEvent);
    expect(AnalyticsEngine.logEvent).toHaveBeenCalledWith(mockEvent);
  });

  it("should fetch evolution data from AnalyticsEngine", async () => {
    const childId = "child-1";
    await NeuroAnalyticsService.getEvolutionData(childId);
    expect(AnalyticsEngine.getFullAnalysis).toHaveBeenCalledWith(childId);
  });
});
