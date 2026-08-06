import { createMiddleware } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";

export const requireSupabaseAuth = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const request = getRequest();
    
    // Fallback for direct tool-based or local testing where x-replit-user-id might be present
    const replitUserId = request?.headers.get("x-replit-user-id");
    const authHeader = request?.headers.get("Authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.substring(7) : null;

    if (!token && !replitUserId) {
      throw new Error("Unauthorized: No authentication provided");
    }

    const supabaseUrl = process.env.VITE_SUPABASE_URL!;
    const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY!;

    if (token) {
      // Initialize a client to verify the actual Supabase JWT
      const supabase = createClient(supabaseUrl, supabaseKey, {
        global: { headers: { Authorization: `Bearer ${token}` } },
      });

      const { data: { user }, error } = await supabase.auth.getUser();

      if (error || !user) {
        throw new Error("Unauthorized: Invalid token");
      }

      return next({
        context: {
          userId: user.id,
          claims: user,
          supabase,
        },
      });
    }

    // Fallback for development/replit headers if token is missing
    return next({
      context: {
        userId: replitUserId!,
        claims: { sub: replitUserId },
      },
    });
  },
);
