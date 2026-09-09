import { useState, useEffect, useCallback, useMemo } from "react";
import { NeuroAnalyticsService } from "../services/NeuroAnalyticsService";
import { EvolutionData, Insight } from "../types";

// Simple in-memory cache for analytics data to avoid re-fetching on mount/unmount
const analyticsCache = new Map<
  string,
  { data: EvolutionData; insights: Insight[]; timestamp: number }
>();
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

export function useNeuroAnalytics(childId: string) {
  const [data, setData] = useState<EvolutionData | null>(null);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(
    async (force = false) => {
      if (!childId) return;

      // Check cache first
      const cached = analyticsCache.get(childId);
      if (!force && cached && Date.now() - cached.timestamp < CACHE_TTL) {
        setData(cached.data);
        setInsights(cached.insights);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const [evolutionData, autoInsights] = await Promise.all([
          NeuroAnalyticsService.getEvolutionData(childId),
          NeuroAnalyticsService.generateInsights(childId),
        ]);

        setData(evolutionData);
        setInsights(autoInsights);

        // Update cache
        analyticsCache.set(childId, {
          data: evolutionData,
          insights: autoInsights,
          timestamp: Date.now(),
        });
      } catch (error) {
        console.error("Failed to fetch analytics data", error);
      } finally {
        setLoading(false);
      }
    },
    [childId],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const logEvent = useCallback(
    async (event: any) => {
      try {
        await NeuroAnalyticsService.logEvent({ ...event, child_id: childId });
      } catch (error) {
        // Fail silently on analytics logs to not interrupt user flow
        console.warn("Analytics event failed", error);
      }
    },
    [childId],
  );

  // Memoize results to prevent downstream re-renders
  return useMemo(
    () => ({
      data,
      insights,
      loading,
      logEvent,
      refresh: () => fetchData(true),
    }),
    [data, insights, loading, logEvent, fetchData],
  );
}
