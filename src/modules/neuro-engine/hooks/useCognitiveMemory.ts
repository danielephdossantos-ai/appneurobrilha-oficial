import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { cognitiveMemoryService } from "../services/CognitiveMemoryService";
import { CognitiveMetrics, CognitiveProfile } from "../types";
import { toast } from "sonner";

export const useCognitiveMemory = (childId?: string) => {
  const queryClient = useQueryClient();


  const profileQuery = useQuery({
    queryKey: ["cognitive-profile", childId],
    queryFn: () => (childId ? cognitiveMemoryService.getProfile(childId) : null),
    enabled: !!childId,
  });

  const historyQuery = useQuery({
    queryKey: ["longitudinal-history", childId],
    queryFn: () => (childId ? cognitiveMemoryService.getLongitudinalHistory(childId) : []),
    enabled: !!childId,
  });

  const updateProfileMutation = useMutation({
    mutationFn: (updates: Partial<CognitiveProfile>) => 
      childId ? cognitiveMemoryService.updateProfile(childId, updates) : Promise.reject("No child ID"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cognitive-profile", childId] });
    },
    onError: (error) => {
      toast.error("Não foi possível salvar as alterações no perfil cognitivo.");
      console.error(error);
    }

  });

  const recordScoresMutation = useMutation({
    mutationFn: (metrics: CognitiveMetrics) => 
      childId ? cognitiveMemoryService.recordLongitudinalScores(childId, metrics) : Promise.reject("No child ID"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["longitudinal-history", childId] });
    },
    onError: (error) => {
      console.error("Error recording longitudinal scores:", error);
    }
  });

  return {
    profile: profileQuery.data,
    isLoadingProfile: profileQuery.isLoading,
    history: historyQuery.data || [],
    isLoadingHistory: historyQuery.isLoading,
    updateProfile: updateProfileMutation.mutateAsync,
    recordScores: recordScoresMutation.mutateAsync,
  };
};
