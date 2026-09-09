# FASE K — Validação técnica pré-ZIP final

Data: 2026-08-21
Base: NeuroBrilha_FaseJ_Intermediario_2026-08-21.zip

## Resultado executivo

A Fase K executou validações estáticas, integridade de imports locais, segurança básica de segredos, rotas declaradas, migration Premium e tentativa de instalação/build.

### APROVADO nesta fase
- nenhum erro de sintaxe TypeScript/TSX do grupo TS1xxx encontrado na varredura do diretório `src`;
- nenhum import `@/...` apontando para arquivo inexistente após as correções da Fase K;
- 87 rotas `createFileRoute()` encontradas sem duplicidade de path;
- rota nova `/apoio-escolar` existe no filesystem;
- chave VAPID privada não está mais hard-coded no código: os pontos de envio leem variáveis de ambiente;
- apenas `sw-push.js` é registrado pelo fluxo canônico de Push;
- migration Premium contém `learning_plans`, `learning_plan_items`, integração com `routine_items`, log idempotente de notificações e campos `device_role/timezone` das subscriptions;
- `.env.example` documenta o novo par VAPID sem valores secretos;
- ZIP-base da Fase J foi descompactado e lido sem erro.

## Correções adicionais feitas durante a Fase K

1. Removido `src/components/responsible/AdaptivePlan.tsx`, componente órfão que ainda importava o módulo legado `@/modules/parental/intelligence`, já aposentado na Fase J.
2. Corrigido import da aula de Português 3º ano cujo nome físico no ZIP é `aula-02-s-ss-c-#U00e7.ts`; o index apontava para um nome inexistente com `ç` literal.

## Route tree

A rota `src/routes/apoio-escolar.tsx` existe, porém o arquivo gerado `src/routeTree.gen.ts` presente no ZIP da Fase J ainda não contém `/apoio-escolar`.

Esse arquivo é gerado pelo plugin do TanStack Router durante o fluxo de desenvolvimento/build. Portanto, antes da publicação, o build deve regenerá-lo e confirmar que a rota aparece no route tree final.

## Build de produção

Foi tentado:

`npm ci --no-audit --no-fund`

e também uma tentativa com cache/prefer-offline. Ambas excederam a janela disponível do ambiente e não produziram `node_modules`.

Por isso, **não foi possível executar `npm run build` neste ambiente**.

A Fase K NÃO declara build de produção aprovado.

## Testes obrigatórios no ambiente Lovable/Git/Vercel antes de produção

1. Instalar dependências.
2. Regenerar `routeTree.gen.ts` e confirmar `/apoio-escolar`.
3. Executar `npm run build`.
4. Executar `npm run lint` e testes disponíveis.
5. Aplicar `supabase/migrations/20260821123000_premium_plans_core.sql` em staging.
6. Criar e configurar um NOVO par VAPID.
7. Configurar cron da Edge Function `send-daily-push`.
8. Testar duas crianças da mesma conta no mesmo dispositivo e confirmar que progresso não cruza entre elas.
9. Testar Anamnese -> bootstrap -> plano aplicável para criança de 4, 7 e 10 anos.
10. Testar Rotina -> Aula 1 -> Aula 2 -> conclusão -> retorno à Rotina.
11. Testar Central de Apoio: Prova, Tarefa e Trabalho.
12. Testar Push em aparelho real com PWA fechado.
13. Testar Área dos Pais trocando entre duas crianças.

## Veredito da Fase K

**VALIDAÇÃO ESTÁTICA: APROVADA COM CORREÇÕES.**

**BUILD DE PRODUÇÃO: NÃO COMPROVADO NESTE AMBIENTE.**

O código está apto a seguir para a Fase L de empacotamento final, desde que o pacote final deixe explícita a obrigação de executar o build e os testes acima antes de publicar em produção.
