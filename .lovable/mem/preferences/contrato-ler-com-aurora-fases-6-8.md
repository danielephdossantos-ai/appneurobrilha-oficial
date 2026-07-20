---
name: Contrato Ler com Aurora — Fases 6, 7, 8 + Transversais
description: Escopo TRAVADO das próximas 3 fases da trilha "Ler com Aurora" e dos 2 complementos transversais. Nada fora disto sem pedido explícito.
type: constraint
---

# Contrato — Expansão "Ler com Aurora"

Este é o plano FECHADO. Não adicionar, remover ou reordenar itens sem
pedido explícito do usuário. Se surgir uma ideia nova, PERGUNTAR antes.

## Estado atual (100 missões, TRAVADAS — não modificar)
- Fase 1 · Consciência Fonológica (20)
- Fase 2 · Princípio Alfabético (20)
- Fase 3 · Decodificação Silábica CV (20)
- Fase 4 · Fluência e Compreensão inicial (20)
- Fase 5 · Ortografia Inicial (20)

## O que FALTA construir (nesta ordem)

### Fase 6 — Fluência Verdadeira (20 missões · 4 semanas)
Objetivo: precisão + velocidade + prosódia.
- Semana 1: Leitura repetida (mesma frase 3× marcando progresso).
- Semana 2: Leitura eco (Aurora lê linha → criança repete).
- Semana 3: Prosódia (ponto final vs. interrogação vs. exclamação).
- Semana 4: Fluência em mini-textos + Diploma "Leitor Fluente".
Novos tipos de momento (a criar): `leituraRepetida`, `leituraEco`,
`leituraProsodia`. Adicionados a `types.ts` e ao `PlayerPortuguesEI`
apenas quando a semana correspondente for implementada.

### Fase 7 — Vocabulário Ativo (20 missões · 4 semanas)
Objetivo: ensino explícito de palavras Tier-2 (Beck/McKeown).
- Semana 1: Sinônimos por imagem.
- Semana 2: Antônimos por contraste visual.
- Semana 3: Campos semânticos (família, casa, natureza, cidade).
- Semana 4: Palavra na frase (contexto) + Diploma "Colecionador de Palavras".
Novos tipos: `sinonimoImagem`, `antonimoContraste`, `campoSemantico`,
`palavraNoContexto`.

### Fase 8 — Compreensão Estratégica (20 missões · 4 semanas)
Objetivo: estratégias explícitas (Duke & Pearson).
- Semana 1: Prever (o que vai acontecer?).
- Semana 2: Resumir (frase-chave da história).
- Semana 3: Inferir (o que o personagem sente/quer?).
- Semana 4: Conectar (comparar com a própria vida) + Diploma "Leitor Estratégico".
Novos tipos: `preverHistoria`, `resumirCena`, `inferirEmocao`,
`conexaoPessoal`.

## Complementos Transversais (só após Fase 8)

### T1 — Diagnóstico Dia 0
Uma missão inicial que mede: reconhecimento de letras, consciência
fonêmica básica, leitura de 5 palavras CV. Recomenda a fase de entrada.
Rota: `/escola-brilha/ler-com-aurora/diagnostico`.

### T2 — Painel do Adulto (pais/professores)
Uma tela por criança com: missões concluídas por fase, tempo médio,
últimas conquistas, sugestão de próxima missão. Sem gráficos pesados —
cartões grandes e legíveis. Rota: `/escola-brilha/ler-com-aurora/painel`.

## Regras invioláveis
- Cada fase = 20 missões de ~15 min, dividida em 4 semanas de 5 dias.
- Reutilizar o mesmo player (`PlayerPortuguesEI`) — nunca criar player novo.
- Toda missão termina com `celebracao` + medalha.
- Cada fase termina com Diploma próprio na última missão.
- Imagens sempre do repositório `src/assets/neuro-treino/objetos/`. Se
  faltar imagem correta, TROCAR a palavra — nunca usar imagem errada.
- Entregar SEMPRE em lotes de 1 semana (5 missões) para validação
  antes de avançar. Não anunciar fase pronta sem o usuário testar.
- Não iniciar Fase 7 sem "Fase 6 aprovada". Não iniciar Fase 8 sem
  "Fase 7 aprovada". Não iniciar T1/T2 sem Fase 8 aprovada.

## Ordem de execução
1. Fase 6 — Semana 1 → validar → Semana 2 → validar → S3 → S4.
2. Fase 7 — mesma cadência.
3. Fase 8 — mesma cadência.
4. T1 Diagnóstico.
5. T2 Painel do Adulto.
