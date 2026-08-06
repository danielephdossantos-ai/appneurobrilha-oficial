import { createMiddleware } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";

export const requireSupabaseAuth = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const request = getRequest();
    const authHeader = request?.headers.get("Authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.substring(7) : null;

    if (!token) {
      throw new Error("Unauthorized: No token provided");
    }

    // Initialize a temporary client to verify the JWT
    const supabase = createClient(
      process.env.VITE_SUPABASE_URL!,
      process.env.VITE_SUPABASE_PUBLISHABLE_KEY!,
      {
        global: { headers: { Authorization: `Bearer ${token}` } },
      }
    );

    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      throw new Error("Unauthorized: Invalid token");
    }

    return next({
      context: {
        userId: user.id,
        claims: user,
        supabase, // Passing the authenticated client to the handler
      },
    });
  },
);
