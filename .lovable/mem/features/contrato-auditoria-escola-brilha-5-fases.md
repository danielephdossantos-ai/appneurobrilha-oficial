---
name: Contrato — Auditoria Escola Brilha (5 fases)
description: Contrato das 5 fases recomendadas pela auditoria psicopedagógica do Escola Brilha. Ordem obrigatória, uma fase por turno, aprovação antes de aplicar.
type: feature
---

# Contrato — Plano de correção pós-auditoria do Escola Brilha

Origem: auditoria psicopedagógica/neuropsicopedagógica (nota média 7,0).
Ordem obrigatória. **Uma fase por turno.** Nada fora do escopo da fase.

## Fase 1 — Português 6º ao 9º ano (lacuna crítica)
- Hoje: 3–5 aulas por ano, sem códigos `EF67LP`, `EF69LP`, `EF89LP`.
- Meta: cobertura BNCC real por ano (gêneros, leitura, análise linguística, produção textual, oralidade).
- Padrão: esqueleto de 11 blocos + skin Tween/Teen do `PlayerPortuguesV4`.
- Entrega em lotes: 1 unidade por vez para validação.

## Fase 2 — Códigos BNCC em Arte e Inglês
- Aulas existem mas sem `codigo_bncc`.
- Só usar códigos que existem em `bncc_habilidades`.
- Não reescrever conteúdo: apenas mapear/etiquetar e corrigir aula que não bate com a habilidade.

## Fase 3 — Ligar o `neuro-engine` ao player
- Hoje os motores clínicos (atenção, fadiga, sensorial, recompensa) não afetam o `PlayerV4`.
- Ligar: ritmo, número de itens por tela, pausa por fadiga, reforço, redução de estímulo.
- Adicionar metadados de adaptação por aula (TEA / TDAH / Dislexia).
- Acessibilidade: fonte para dislexia + alto contraste.

## Fase 4 — Gerador de plano anual do 3º ao 9º ano
- Hoje só 3–7 anos tem gerador de 40 semanas; 3º–9º é lista fixa.
- Meta: gerar calendário anual por série/disciplina, com revisão espaçada e reposição.

## Fase 5 — Volume mínimo para sustentar ano letivo
- Disciplinas com ~7 aulas/ano (Ciências, História, Arte, Ensino Religioso) e Educação Física (0 aulas).
- Meta: volume compatível com ano letivo, respeitando as travas existentes.
- **Atenção às travas**: Ciências e Geografia estão TRAVADAS — não editar sem "destravar".

## Regras do contrato
- Uma fase por turno; não misturar fases.
- Antes de aplicar: apresentar o plano da fase e esperar aprovação.
- Respeitar todas as constraints (EI somente leitura/mat/inglês, 2º ano mat travado, Geografia e Ciências travadas).
- Nunca declarar pronto sem validar de verdade (typecheck + conferência de conteúdo).
- Ao fim de cada fase: relatório do que mudou + o que ficou pendente.
