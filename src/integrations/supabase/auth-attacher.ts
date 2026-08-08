import { supabase } from "./client";
import { type Interceptor } from "@tanstack/react-start";

export const attachSupabaseAuth: Interceptor = async ({ next }) => {
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token;
  
  return next({
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
};