---
name: Contrato clínico Neuro Treino (#5.5 → #6 → #3)
description: Executado sem validação intermediária; usuário confere no final.
type: feature
---

# Contrato — Neuro Treino Clínico

Ordem fixa, sem parada para validação (usuário confere no fim).

## ✅ #5.5 Correção clínica dos 3 buracos graves
1. `articulacao-sons` — usa `useSpeechMatcher` real (Web Speech pt-BR). Só marca acerto quando o transcript bate ≥ 0.6 com a palavra alvo. Fallback (sem suporte): botão de "tentar de novo" e não força acerto.
2. `nomeacao-rapida` — RAN real. 10 figuras em sequência, cronômetro por item, criança fala o nome (voz) OU toca no nome na barra fixa. Métrica é tempo médio por item + acurácia.
3. `tracado-letras` — validação por checkpoints 3×3 dentro da máscara da letra: precisa cobrir ≥ 6 células e começar no terço superior antes de terminar no inferior (top→bottom).
4. Stub `AdaptiveEngine` (`src/modules/neuro-treino/engine/adaptive-engine.ts`) reescrito para delegar ao `NeuroAdaptiveCore` real.

## ✅ #6 Hierarquia ABA de prompting (com fading)
- 4 níveis: 1=físico → 2=gestual → 3=verbal → 4=independente.
- Colunas novas em `child_skill_mastery`: `prompt_level`, `consec_correct`, `indep_sessions`.
- Regra: 3 acertos seguidos no nível atual → sobe (menos ajuda). 1 erro → desce (mais ajuda).
- Critério de mastery: 8/10 acertos no nível 4 (independente) em 3 sessões consecutivas.
- UI: chip "Ajuda: Verbal/Gestual/…" no cabeçalho; dica visual escalona conforme o nível.
- Serviço: `src/services/neuro-treino/promptingEngine.ts` (puro) + integração em `recordSkillAttempt`.

## ✅ #3 Discalculia (Matemática Terapêutica)
- Card destacado no topo do `/neuro-treino` apontando para `/escola-brilha/contar-com-pip`.
- Rotulado como "Matemática Terapêutica · Numicon / Senso Numérico · 160 missões".
- Reaproveitamento total do programa Pip (Fases 1–8, Subitizing → operações visuais).

## Regras
- Não desviar do padrão visual do módulo.
- Não quebrar tipos existentes.
- Persistência em `child_skill_mastery` continua sendo a fonte oficial.
