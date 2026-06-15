import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ChildProfileService } from "../services/ChildProfileService";
import type { ChildProfile } from "../types";

export function useChildProfile(userId?: string) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: userId ? ["childProfiles", userId] : ["childProfiles"],
    queryFn: () =>
      userId ? ChildProfileService.getAllByUserId(userId) : ChildProfileService.getAll(),
    enabled: true,
  });

  const createProfile = useMutation({
    mutationFn: (profile: Omit<ChildProfile, "id">) => ChildProfileService.create(profile),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userId ? ["childProfiles", userId] : ["childProfiles"],
      });
    },
  });

  const updateProfile = useMutation({
    mutationFn: ({ id, patch }: { id: string; patch: Partial<ChildProfile> }) =>
      ChildProfileService.update(id, patch),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userId ? ["childProfiles", userId] : ["childProfiles"],
      });
    },
  });

  return {
    profiles: query.data ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    createProfile: createProfile.mutate,
    updateProfile: updateProfile.mutate,
  };
}
