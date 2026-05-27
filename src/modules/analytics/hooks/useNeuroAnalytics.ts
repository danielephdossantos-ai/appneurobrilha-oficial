import { useState, useEffect } from 'react';
import { NeuroAnalyticsService } from '../services/NeuroAnalyticsService';
import { EvolutionData, Insight } from '../types';

export function useNeuroAnalytics(childId: string) {
  const [data, setData] = useState<EvolutionData | null>(null);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [evolutionData, autoInsights] = await Promise.all([
          NeuroAnalyticsService.getEvolutionData(childId),
          NeuroAnalyticsService.generateInsights(childId),
        ]);
        setData(evolutionData);
        setInsights(autoInsights);
      } catch (error) {
        console.error("Failed to fetch analytics data", error);
      } finally {
        setLoading(false);
      }
    }

    if (childId) fetchData();
  }, [childId]);

  const logEvent = async (event: any) => {
    await NeuroAnalyticsService.logEvent({ ...event, child_id: childId });
  };

  return { data, insights, loading, logEvent };
}
