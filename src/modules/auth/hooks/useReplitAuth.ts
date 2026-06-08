import { useQuery } from "@tanstack/react-query";
import { getReplitUser, type ReplitUser } from "../auth-server-fn";

export function useReplitAuth() {
  const { data, isLoading } = useQuery({
    queryKey: ["replit-auth-user"],
    queryFn: () => getReplitUser(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const user: ReplitUser | null = data?.user ?? null;

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    loginUrl: "/api/login",
    logoutUrl: "/api/logout",
  };
}
