import { createMiddleware } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";

export const requireSupabaseAuth = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const request = getRequest();
    
    const replitUserId = request?.headers.get("x-replit-user-id");
    const authHeader = request?.headers.get("Authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.substring(7) : null;

    if (!token && !replitUserId) {
      throw new Error("Unauthorized: No authentication provided");
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL!;
    const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY!;

    let supabase: SupabaseClient | undefined;
    let user: User | undefined;

    if (token) {
      supabase = createClient(supabaseUrl, supabaseKey, {
        global: { headers: { Authorization: `Bearer ${token}` } },
      });

      const { data, error } = await supabase.auth.getUser();
      if (!error && data.user) {
        user = data.user;
      }
    }

    // Ensure context always has the same shape for TypeScript consistency
    const userId = user?.id ?? replitUserId!;
    return next({
      context: {
        userId,
        claims: user ?? ({ sub: replitUserId } as any),
        supabase: supabase || createClient(supabaseUrl, supabaseKey),
      },
    });
  },
);
