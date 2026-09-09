# NeuroBrilha Premium — notas de migração

## Objetivo desta edição

Esta edição preserva o acervo existente e cria uma camada canônica para organizar os três planejamentos sem recriar a antiga "Minha Jornada":

- Alfabetização / Brilha Kids → `learning_plans.plan_type = literacy`
- Currículo Escolar → `learning_plans.plan_type = school`
- Plano Individual de Apoio → `learning_plans.plan_type = support`

A Rotina (`routine_items`) passa a ser a camada diária de execução. O árbitro Premium escolhe uma carga curta do dia a partir dos planos ativos e a Rotina abre a aula real.

## Migration obrigatória

Aplicar a migration:

`supabase/migrations/20260821123000_premium_plans_core.sql`

Ela cria/ajusta:

- `learning_plans`
- `learning_plan_items`
- vínculo Premium em `routine_items`
- conclusão por ocorrência em rotinas recorrentes
- log idempotente de notificações
- persistência canônica do Professor Mentor
- histórico de uso da Biblioteca Pedagógica Viva compatível com `public.children`
- trava de duplicidade do Plano Neuro

Não apagar tabelas legadas antes de validar a migração. O código ainda mantém fallback para crianças que possuam planos antigos.

## Fluxo Premium diário

1. Plano legado é gerado normalmente.
2. O persist espelha o conteúdo em `learning_plans` / `learning_plan_items`.
3. `buildDailyPremiumQueue()` decide a carga do dia.
4. `syncPlansToRoutine()` sincroniza a fila em `routine_items` sem apagar rotinas manuais e preservando horário/lembrete já editados pela família.
5. A criança toca em Play na Rotina.
6. O contexto guarda toda a fila restante do dia.
7. Ao concluir uma aula, o item Premium e o item legado correspondente são atualizados.
8. Se houver próxima atividade na fila, o app abre a próxima rota diretamente.
9. Ao finalizar a última atividade, retorna para a Rotina.
10. Quando todos os itens do plano terminam, `learning_plans.status` vira `completed`.

## Regra etária Neuro-Treino

Regra canônica desta edição:

- até 7 anos: Neuro-Treino pode compor o Plano Individual de Apoio;
- a partir de 8 anos: itens `source = neuro_treino` são bloqueados pelo árbitro;
- Brilha Vida pode continuar como apoio funcional, sem ser apresentado como tratamento ou plano por diagnóstico.

## Professor Mentor / IA

Motor canônico de fallback:

`Gemini → Groq → Lovable Gateway`

A aula do Reforço só é devolvida para a interface após persistência real de:

- aula canônica;
- páginas;
- cache.

Não é permitido retornar ID temporário quando o Supabase falha.

## Push

A Edge Function `send-daily-push` foi ajustada para a Rotina configurável e possui trava de duplicidade por ocorrência.

Para respeitar horários livres escolhidos pela família, ela precisa ser agendada no Supabase com frequência curta (recomendação: a cada 5 minutos). A agenda do cron deve ser configurada no ambiente Supabase de produção, pois URL/chaves de invocação não devem ser gravadas no repositório.

## Não remover ainda

Durante o primeiro deploy, NÃO remover imediatamente:

- `curriculo_anual*`
- `primeiros_anos_*`
- `neuro_plano*`
- `study_agenda`

Primeiro validar o espelhamento Premium com dados reais. Depois os consumidores antigos podem ser aposentados em uma migration posterior.

## Segurança e posicionamento

O NeuroBrilha deve continuar apresentado como plataforma de apoio educacional. Não usar os planos para diagnosticar, prescrever tratamento ou afirmar eficácia clínica. A personalização deve ser descrita por habilidade, necessidade observada, progresso e preferências da criança.
