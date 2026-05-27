import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { cognitiveMemoryService } from "../services/CognitiveMemoryService";
import { CognitiveMetrics, CognitiveProfile } from "../types";
import { useToast } from "@/hooks/use-toast";

export const useCognitiveMemory = (childId?: string) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

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
      toast({
        title: "Erro ao atualizar perfil cognitivo",
        description: "Não foi possível salvar as alterações.",
        variant: "destructive",
      });
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
