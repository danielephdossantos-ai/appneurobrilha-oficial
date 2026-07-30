---
name: Contrato Português 2º ano — Nivelamento pós-auditoria
description: Contrato de 7 fases para nivelar "A Biblioteca Encantada" (portugues-2ano) ao padrão do 1º ano. Nenhuma outra série de Português avança antes da Fase 7.
type: feature
---

# Contrato — Português 2º ano: Nivelamento ao padrão do 1º ano

Curso slug: `portugues-2ano` · "A Biblioteca Encantada" · 30 aulas · 6 unidades ·
skin **kids/tween**. Esqueleto fixo de 11 momentos já existe e é preservado.

**Regra de ouro:** as fases abaixo são executadas em ordem, uma por turno, com
typecheck limpo e validação da usuária antes de avançar. Nenhuma outra série de
Língua Portuguesa é iniciada antes da Fase 7.

## Diagnóstico que originou o contrato
| Recurso | 1º ano | 2º ano hoje |
|---|---|---|
| Dica / reensino | 97 / 32 | 0 / 0 |
| Momento de fluência | 40 aulas | 0 |
| Momento de escrita | 29 aulas | 0 |
| Avaliações com 4 alternativas | 200/200 | 0/150 |
| Consciência fonêmica | sim | não |
| Sondagem inicial | sim | não |
| Práticas curriculares | sim | não |
| Ensino visual | 29/40 aulas | 2/30 |

## Fase 1 — Motor adaptativo nas 30 aulas ✅ CONCLUÍDA
- `dica` em todo item de quiz/minijogo (pista, nunca a resposta) — 440 itens.
- `reensino` nos blocos-chave (compreensão, leitura independente, revisão e
  avaliação) — 335 itens.
- Gate de **≥70%** na avaliação já ativo pelo player compartilhado.
- Blocos de minijogo (previsão, ordenar, arrastar, selecionar, montar palavra,
  arquiteto) agora aceitam e exibem `dica` no feedback de erro.


## Fase 2 — Avaliações com 4 alternativas
- Reescrever os 150 itens de `momento10_avaliacao` para **4 opções** com
  distratores plausíveis (erro ortográfico comum, sentido próximo, pegadinha de
  inferência).
- Feedback explicativo em cada alternativa errada.
- Eliminar todos os itens de 2 e 3 opções.

## Fase 3 — Bloco de escrita real (`momento_escrita`) ✅ CONCLUÍDA
Em todas as 30 aulas, calibrado para 7 anos (codificação, não traçado inicial):
- **Ditado de palavra e frase** com sílabas móveis (foco ortográfico da aula).
- **Escrita funcional**: bilhete, convite, lista, legenda, cartaz — rascunho →
  revisão → versão final salva.
- U5 recebe a produção mais longa (livro próprio) com checklist de revisão.
- Entregue: 30/30 aulas com `momento_escrita` (ditado de sílabas + ditado de
  frase com palavras móveis + produção real). Novos formatos: convite, legenda,
  cartaz e texto. Ciclo rascunho → revisão (checklist marcável) → versão final
  salva no aparelho, via `cicloRevisao`.

## Fase 4 — Fluência por releitura (`momento_fluencia`) ✅ CONCLUÍDA

- Entregue: `momento_fluencia` nas 30 aulas — releitura do mesmo trecho 3x
  (eco → cronômetro → repetição), texto tirado da leitura independente da
  própria aula e meta de tempo calibrada em ~60 palavras/minuto.
- Bloco de 3 etapas em todas as 30 aulas: **eco → cronometrada 1 → cronometrada
  2 com comparação**.
- Textos decodáveis próprios do 2º ano (frases e parágrafos curtos, não palavras
  isoladas).
- Registrar palavras/minuto para o relatório.

## Fase 5 — Consciência fonológica avançada e palavras teimosas
- Nova unidade curta (3–4 aulas): sílaba tônica, rimas, segmentação e
  manipulação de fonemas em palavras maiores.
- `palavraRelampago` com o corpus de alta frequência do 2º ano.
- Ortografia-alvo do ano: R/RR, S/SS, M antes de P/B, Ç, LH/NH/CH, AM/ÃO.

## Fase 6 — Variedade de interação e ensino visual
- Ensino visual (`momento_ensinoVisual`) em pelo menos 24 das 30 aulas.
- Quebrar a monotonia dos 15 "arrastarParaAlvo": distribuir `montarPalavra`,
  `ordenarSequencia`, `selecionarItens`, `fraseComPonto`, `maiusculaMinuscula`.
- Todo enunciado com `BotaoOuvirEnunciado` + fala automática.

## Fase 7 — Sondagem inicial, práticas curriculares e BNCC
- Sondagem de 8 itens falados calibrada ao 2º ano, sugerindo unidade de entrada.
- `praticasCurriculares`: escrita diária (caderno/lousa/ditado) e oralidade
  (roda de conversa, reconto, entrevista, apresentação).
- Fechar cobertura BNCC: incluir **EF02LP02** e **EF02LP05**, hoje ausentes.
- Auditoria final aula a aula antes de declarar o 2º ano pronto.
