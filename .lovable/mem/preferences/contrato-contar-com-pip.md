---
name: Contrato Contar com Pip
description: Trilha travada de matemática inicial (3-6 anos) em 8 fases baseada na ciência do número (Dehaene, Clements & Sarama, Gelman, Griffin, Ramani & Siegler). Espelha estrutura do Ler com Aurora.
type: feature
---

# Contrato — Contar com Pip

Trilha de matemática inicial para crianças de 3 a 6 anos, baseada em evidência científica (Dehaene, Clements & Sarama, Gelman & Gallistel, Griffin/Number Worlds, Ramani & Siegler, Singapore CPA, NCTM).

Mesma arquitetura do **Ler com Aurora**: Player EI, esqueleto de 11 momentos, 20 missões por fase (4 semanas de 5 dias), diploma no fim de cada fase, medalhas semanais, anamnese decide fase inicial, hard-lock nas próximas.

## Fases (ordem travada)

1. **Subitizing (1–4)** — reconhecer quantidade sem contar. Flashcards de pontos, dedos, dados, ten-frame.
2. **Contagem 1-a-1 até 10** — 5 princípios de Gelman (correspondência, ordem estável, cardinalidade, abstração, irrelevância da ordem).
3. **Cardinalidade + numeral** — "o último número é o total"; associar quantidade ao símbolo escrito 0–10.
4. **Linha numérica mental (0–10)** — jogos de tabuleiro linear estilo Great Race (Ramani & Siegler), pulos na reta, antes/depois.
5. **Ten-frame e composição do 10** — 5+2=7, faltam 3 pra 10, pares que fazem 10.
6. **Comparação de magnitude** — mais/menos/igual, ANS (Approximate Number System).
7. **Soma e subtração visual até 10** — CPA (concreto→pictórico→abstrato), OperacaoVisual, dedos.
8. **Problemas em história (CGI)** — Cognitively Guided Instruction: juntar, separar, comparar, faltar.

## Entrega

- **5 missões por vez**, usuário valida, sigo para as próximas 5.
- Cada semana termina com **medalha**; cada fase termina com **diploma**.
- Reutilizar componentes existentes: `TapCountGroup`, `OperacaoVisual`, ten-frame novo se necessário.
- Player: `PlayerPortuguesEI` (renomear conceitualmente para "Player EI"), adicionando momentos matemáticos conforme necessário (`subitizing`, `tenFrame`, `linhaNumerica`, `numeralAssociar`, etc.).

## Integração

- **Anamnese** decide fase inicial (perguntas sobre subitizing, contagem, reconhecimento de numeral).
- **Hard-lock**: só fase atual clicável, próximas destravam ao concluir a anterior.
- **Progresso** em `aurora_progresso` (ou tabela análoga `pip_progresso`).
- **Agenda + push** integrados igual Aurora.
- **Painel dos Pais** mostra progresso; nada de diagnóstico na área da criança.

## Regras invioláveis

- Nunca pular fase sem a criança concluir a anterior (exceto por anamnese inicial).
- Nunca ensinar símbolo antes de concreto e pictórico (CPA).
- Nunca começar soma/subtração antes de cardinalidade + ten-frame dominados.
- Dedos são permitidos e incentivados (não são "muleta").
- Cada missão ~10 min, ritmo Duolingo, visual kawaii Pixar 2D.
