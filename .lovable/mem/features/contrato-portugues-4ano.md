---
name: Contrato Português 4º Ano — Plano de Edição
description: Auditoria do curso Português 4º ano (A Redação dos Exploradores) e as 7 fases obrigatórias para igualar o padrão do 1º, 2º e 3º ano.
type: feature
---

# Auditoria (baseline)

Curso: `src/escola-brilha/curso-v4/portugues-4ano` — 6 unidades × 4 aulas = **24 aulas**.

Diagnóstico: o curso **avalia mais do que ensina**. Estrutura de momentos incompleta
comparada ao 3º ano (que tem `momento_escrita` e `momento_fluencia`).

| Item | 4º ano | Padrão (1/2/3º) |
|---|---|---|
| `dica` (pista adaptativa) | **0** | ~15 por aula |
| `reensino` (Professor Digital explica) | **0** | ~13 por aula |
| Avaliação com 4 alternativas | **0** (todas com 3) | 4 + feedback explicativo |
| `momento_escrita` | **0/24** | 100% das aulas |
| `momento_fluencia` | **0/24** | 100% das aulas |
| `ensinoVisual` | 12/24 (U1, U4 e U6 sem nada) | 100% |
| Sondagem inicial | **não existe** (`sondagens.ts` sem `portugues-4ano`) | existe |
| Perfil de apoio ligado à sondagem | inativo (sem sondagem) | ativo |
| Rotina de escrita diária | **não existe** (`rotina-escrita-4ano.ts`) | existe |
| `praticasCurriculares` no curso.ts | **ausente** | presente |
| Cobertura BNCC | **~44%** (34/77) | 100% |

BNCC faltando: EF04LP05, 09, 10, 14, 16, 18, 20, 21, 22, 23, 25, 26, 27;
EF35LP01, 02, 11, 13, 16, 18–24, 29, 30; quase todo o EF15LP.

# Fases obrigatórias

1. ✅ **Fase 1 — Motor adaptativo (CONCLUÍDA)** — 366 `dica` + 310 `reensino` injetados nas 24 aulas; gate de ≥70% ativo.
1b. ~~Fase 1 original~~: **Fase 1 — Motor adaptativo**: injetar `dica` + `reensino` em todas as questões
   das 24 aulas; ativar o gate de ≥70% na avaliação.
2. ✅ **Fase 2 — Qualidade da avaliação (CONCLUÍDA)** — 120/120 questões com 4 alternativas + `feedbackOpcoes` explicativo por alternativa.
2b. ~~Fase 2 original~~: **Fase 2 — Qualidade da avaliação**: 4 alternativas com distratores plausíveis
   + feedback que explica o erro (120 questões).
3. **Fase 3 — Bloco de escrita**: `momento_escrita` em todas as aulas, ciclo
   Rascunho → Revisão → Versão final (foco em texto longo e coesão, idade 9 anos).
4. **Fase 4 — Fluência**: `momento_fluencia` em todas as aulas, calibrado a
   ~110 palavras/minuto (leitura expressiva, não só velocidade).
5. **Fase 5 — Ortografia/gramática em uso**: nova unidade de oficina cobrindo os
   códigos EF04LP de morfologia/ortografia faltantes.
6. **Fase 6 — Ensino visual**: `ensinoVisual` nas 12 aulas sem ele (U1, U4, U6).
7. **Fase 7 — Sondagem + BNCC 100%**: `sondagem-4ano.ts`, registro em
   `sondagens.ts`, `rotina-escrita-4ano.ts`, `praticasCurriculares` no `curso.ts`
   e novas unidades para fechar 100% dos códigos.
