# NeuroBrilha Kids Audit Report

## Summary

- Build: successful
- Lint: executed; many Prettier formatting errors and code-quality warnings found
- Dependency audit: `depcheck` completed; missing runtime packages and potential unused dependencies identified
- Console / mock usage: scanned and counted
- Route audit: 31 route files in `src/routes`

## Key Findings

### Build

- `vite build --mode production` succeeded
- Deprecation warnings: `createServerFn().inputValidator()` should be updated to `createServerFn().validator()` in server function modules

### Lint

- ESLint found many Prettier formatting issues across generated/integration files and root project files
- Recommended action: run `npm run format` or fix formatting in the highlighted files

### Dependency audit

- Missing runtime dependencies added:
  - `express`
  - `passport`
  - `openid-client`
  - `memoizee`

- Candidate unused dependencies reported by `depcheck` (needs review before removal):
  - `@hookform/resolvers`
  - `@lovable.dev/cloud-auth-js`
  - `@supabase/supabase-js`
  - `@tanstack/query-sync-storage-persister`
  - `@tanstack/router-plugin`
  - `replit-auth`
  - `tailwindcss`
  - `tw-animate-css`
  - `vite-plugin-compression`
  - `zod-validation-error`

### Cleanup metrics

- `console` statements found: `85`
- `mock` references found: `55`
- Route files in `src/routes`: `31`

## Next Recommended Steps

1. Run `npm install` to install the newly added server dependencies
2. Run `npm run format` and then `npm run lint` again to reduce formatting noise
3. Review the listed `depcheck` candidate dependencies before removing them
4. Address deprecated `createServerFn().inputValidator()` usages in server function files
5. Audit `console` statements and `mock` data usage in critical production paths

## Notes

- `@shared/schema` and `@shared/models` are internal path aliases and not external npm dependencies
- Some UI and server integration files still contain Replit-specific artifacts and formatting issues
