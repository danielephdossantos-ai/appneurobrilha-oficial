---
name: Plano de reforma do Neuro Treino (pós-auditoria)
description: Contrato de 6 passos para transformar o Neuro Treino em programa terapêutico real, sem perder progresso entre sessões.
type: feature
---

# Contrato — Reforma do Neuro Treino

Ordem fixa. Cada passo é entregue e validado antes do próximo.

## ✅ #1 — Integrar Biblioteca Encantada como grupo "Comunicação (PECS/TEACCH)"
- Card destacado no topo do dashboard `/neuro-treino` linkando para `/escola-brilha/biblioteca-encantada`.
- Rotulado como "Comunicação Funcional · PECS/TEACCH/Denver · 60 aulas".
- Status: **concluído** (validado por screenshot mobile 390x1600).


## ✅ #2 — Trilha Dislexia (Orton-Gillingham)
- Implementado como programa clínico completo em `src/escola-brilha/dislexia/` (Fases 1–8, dlx-01 a dlx-80) com `PlayerDislexia.tsx`.
- Card destacado no topo do `/neuro-treino` já aponta pra `/escola-brilha/dislexia`.
- Status: **concluído**.


## ✅ #3 — Grupo Discalculia (Numicon / senso numérico)
- Card "Matemática Terapêutica · Discalculia" no topo do `/neuro-treino` apontando pra `/escola-brilha/contar-com-pip` (8 fases já vivas: subitizing, Numicon, reta numérica, +/−).
- Status: **card entregue**; expansão futura pode adicionar mecânicas específicas de discalculia dentro do próprio Neuro Treino.

## ✅ #4 — `NeuroAdaptiveCore.adjustment` ligado aos jogos
- `useNeuroAdaptive` acoplado ao `/neuro-treino/$slug`.
- `adjustment.difficultyScale` filtra `variations`; `stimuliReduction` esconde linha decorativa; `suggestBreak` dispara toast; `requestHelp` no botão "Pular".

## ✅ #5 — Métricas unificadas + gravar por habilidade
- `activity_logs` bruto + `child_skill_mastery` agregado por `skill_code=NT:<slug>` e `materia=grupo cognitivo`.
- `src/services/neuro-treino/neuroMetrics.ts` faz upsert com hits/errors/total/tempo/mastery_percentage + estado ABA.
- `src/data/neuro-treino/skill-map.ts` mapeia slug→(skill_code, materia).

## ✅ #5.5 — Correção clínica dos 3 buracos graves
- `ArticulacaoSons` agora usa `useSpeechMatcher` (Web Speech API pt-BR) com similaridade real, barra de match, e falha após 3 tentativas.
- `NomeacaoRapida` reescrita como RAN real: sequência de 12 figuras nomeadas por voz, itens/segundo medidos, fallback tátil quando sem voz.
- `TracadoLetras` valida ordem via checkpoints numerados por letra (`src/data/neuro-treino/stroke-checkpoints.ts`) com raio 18 e detecção de erro de ordem.
- Stub `AdaptiveEngine` (`src/modules/neuro-treino/engine/adaptive-engine.ts`) agora delega no `NeuroAdaptiveCore` real.

## ✅ #6 — Hierarquia ABA de prompting (com fading)
- 4 níveis (físico → gestual → verbal → independente) em `src/services/neuro-treino/promptingEngine.ts`.
- Sobe 1 nível a cada 3 acertos consecutivos, desce 1 a cada erro.
- Mastery: 8/10 em nível 4 em 3 sessões — chip "🎓 Habilidade dominada" aparece no cabeçalho.
- Colunas `prompt_level`, `consec_correct`, `indep_sessions` em `child_skill_mastery`; hook `useAbaPrompting` reflete estado na UI.
- Cada mecânica clínica (Articulação, Nomeação, Traçado) usa `promptLevel` para revelar/ocultar dicas.

## Regras
- Nunca dizer "pronto" sem validar visualmente (Playwright + screenshot) no passo em que houver mudança de UI.
- Cada passo tem um commit lógico próprio.
- Se um passo revelar necessidade de refatoração maior, pausar e renegociar antes de seguir.
