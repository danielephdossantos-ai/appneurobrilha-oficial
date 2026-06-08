import { createMiddleware } from '@tanstack/react-start'

// No-op middleware: Replit Auth is handled via server-side headers,
// no bearer token attachment needed for Supabase data queries.
export const attachSupabaseAuth = createMiddleware({ type: 'function' }).client(
  async ({ next }) => {
    return next({ headers: {} })
  },
)
