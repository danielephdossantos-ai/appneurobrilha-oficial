export const lovable = {
  auth: {
    signInWithOAuth: async (_provider: "google" | "apple" | "microsoft", _opts?: { redirect_uri?: string; extraParams?: Record<string, string> }) => {
      window.location.href = "/api/login";
      return { redirected: true, error: null };
    },
  },
};
