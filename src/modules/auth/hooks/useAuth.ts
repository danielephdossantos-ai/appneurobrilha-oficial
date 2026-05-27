import { useAppState } from '@/lib/store';
// ... rest will be placeholder to show transition
export const useAuth = () => {
  const { session } = useAppState();
  return {
    user: session?.user ?? null,
    isAuthenticated: !!session?.user,
    session
  };
};
