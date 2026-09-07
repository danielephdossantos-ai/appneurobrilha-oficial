# Como usar este ZIP

1. Extraia o pacote.
2. Instale Node.js compatível e execute `npm ci`.
3. Copie `.env.example` para o arquivo de ambiente da hospedagem e configure os valores sem publicar segredos.
4. Aplique as migrations de `supabase/migrations` no Supabase correto.
5. Execute `npx tsc --noEmit`, `npx vitest run` e `npm run build`.
6. Publique o resultado pelo fluxo do Lovable/Vercel/Cloudflare escolhido.

Leia `RELATORIO_AUDITORIA_FINAL_PUBLICACAO_2026-09-05.md` antes da publicação.
