# SECRETS E AMBIENTE

## Cliente/Vite
Configurar conforme o ambiente:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID` (quando exigido pela configuração)
- `VITE_VAPID_PUBLIC_KEY`

## Servidor / Vercel / runtime
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_PROJECT_ID` (quando exigido)
- `SUPABASE_SERVICE_ROLE_KEY` — servidor somente
- `VAPID_PUBLIC_KEY`
- `VAPID_PRIVATE_KEY` — servidor somente
- `VAPID_SUBJECT`

## IA
Configurar somente os provedores usados no ambiente, mantendo secrets fora do repositório:
- Gemini
- Groq
- Lovable AI Gateway, quando aplicável

Os nomes exatos das variáveis devem respeitar os nomes já usados pelo código/importação do ambiente. Não inventar chaves novas se o projeto já espera um nome específico.

## REGRA DE SEGURANÇA
- Nunca expor `SUPABASE_SERVICE_ROLE_KEY` no cliente.
- Nunca expor `VAPID_PRIVATE_KEY` no cliente.
- Rotacionar qualquer chave privada que já tenha sido usada em código legado/histórico.
- `.env` local não deve ser tratado como armazenamento seguro de secrets de produção.
