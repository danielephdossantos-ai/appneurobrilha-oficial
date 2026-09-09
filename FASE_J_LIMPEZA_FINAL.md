# Fase J — Limpeza e correções finais

Esta edição parte do ZIP Premium e fecha os bloqueadores encontrados nas Fases B–I.

## Corrigido nesta fase
- progresso local do Escola Brilha escopado por criança;
- queries de `activity_results` filtradas por `child_id`;
- bootstrap único após Anamnese para Alfabetização, Escolar e Apoio;
- histórico de ciclos Premium preservado quando um plano é regenerado;
- Central de Apoio Escolar criada com Prova, Tarefa e Trabalho; Reforço deixa a navegação principal e permanece como motor interno/compatibilidade;
- Área dos Pais simplificada e sem gráficos mockados/arrays vazios na Home;
- linguagem clínica desnecessária removida da Home dos Pais e resultado da Anamnese;
- histórico familiar deixou de aumentar diretamente o score comportamental da criança;
- push legado automático desativado; um único Service Worker canônico (`sw-push.js`);
- chave VAPID privada removida do código e exigida por variável de ambiente;
- subscription recebe `child_id`, papel do dispositivo e timezone;
- push manual filtrado por criança e direcionado para `/rotina`;
- fallback `/reforco-brilha` removido do Service Worker/Edge Function;
- ownership validado antes de usar Service Role na sincronização Premium;
- contexto de navegação expira após 6 horas para evitar retorno fantasma.

## Antes do deploy
1. Rotacionar o par VAPID antigo.
2. Configurar `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT` no servidor e `VITE_VAPID_PUBLIC_KEY` no cliente.
3. Aplicar `20260821123000_premium_plans_core.sql`.
4. Configurar cron da Edge Function `send-daily-push` (recomendado 5 min).
5. Rodar build e testes da Fase K.
