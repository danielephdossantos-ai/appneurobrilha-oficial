---
name: Supabase → Replit PostgreSQL migration
description: How NeuroBrilha Kids was migrated from Supabase to Replit's native PostgreSQL
---

## Architecture after migration

- **Data layer**: All DB access goes through TanStack Start `createServerFn` handlers in `src/services/db/children.functions.ts` and `src/services/db/data.functions.ts`, backed by Drizzle ORM + Replit's PostgreSQL (`DATABASE_URL`).
- **Supabase shim**: `src/database/supabase/client.ts` exports a `supabase` object that mimics the Supabase JS client API (`.from().select().eq()`, `.rpc()`, `.auth.*`) but routes all calls to the server functions above. No actual Supabase connection is made.
- **Mirror**: `src/integrations/supabase/client.ts` re-exports from the shim (two import paths existed in the codebase).
- **Server admin clients**: `client.server.ts` files re-export the Drizzle `db` instance instead of a Supabase admin client.
- **Schema**: `shared/schema.ts` contains all Drizzle table definitions. Applied via `npx drizzle-kit push`.
- **AI**: `src/services/api/neurobrilha-ai.functions.ts` already existed and calls OpenAI directly via `OPENAI_API_KEY`.
- **Auth**: App already used Replit header auth (`x-replit-user-id`) — no Supabase Auth was in use. `AuthService` is a no-op stub.

## Why
**Why:** Supabase was the original backend for the Lovable-hosted version. Replit has its own managed PostgreSQL. Preserving the Supabase JS client interface (the shim) avoids rewriting every component.

## How to apply
- Never re-introduce `@supabase/supabase-js` client calls or Supabase env vars (`VITE_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`).
- To add new tables: add to `shared/schema.ts`, add server functions in `src/services/db/`, add handler in the shim's `resolveTable`/`execInsert`/etc.
- DB changes are applied with `npx drizzle-kit push`.
