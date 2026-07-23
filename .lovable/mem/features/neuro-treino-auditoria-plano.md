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


## ⬜ #3 — Grupo Discalculia (Numicon / senso numérico)
- Novo grupo "Matemática Terapêutica".
- Reaproveitar `SubitizingFlash`, `OperacaoVisual` e reta numérica do Contar com Pip.

## ⬜ #4 — Ligar `NeuroAdaptiveCore.adjustment` aos jogos
- Componentes de jogo leem `adjustment.difficultyScale`, `adjustment.stimuliReduction`, `adjustment.maxInformationDensity`.
- Aplicar em: nº de distratores, tempo de exposição, complexidade de cena.

## ⬜ #5 — Unificar métricas + gravar por habilidade
- Escolher fonte única (`activity_logs` ou `child_skill_mastery` — decidir).
- Gravar por resposta: habilidade, tipo de erro, tentativa, tempo.
- Matar o motor órfão em `src/modules/neuro-treino/` OU alimentá-lo de verdade.

## ⬜ #6 — Hierarquia ABA de prompting (com fading)
- 4 níveis de ajuda: físico → gestual → verbal → independente.
- Sistema desce um nível a cada acerto consecutivo e sobe um nível a cada erro.
- Critério de mastery para avançar de missão: 8/10 no nível "independente" em 3 sessões.

## Regras
- Nunca dizer "pronto" sem validar visualmente (Playwright + screenshot) no passo em que houver mudança de UI.
- Cada passo tem um commit lógico próprio.
- Se um passo revelar necessidade de refatoração maior, pausar e renegociar antes de seguir.
