---
name: Identidade visual obrigatória do Escola Brilha
description: Padrão visual travado do app (trilha estilo Duolingo, cards navy/amber). O que varia é o formato de ensino por ano e a identidade própria de cada matéria.
type: design
---

# Regra travada

- **Identidade visual do app = OBRIGATÓRIA e única** em todo curso novo.
  - Trilha das categorias sempre em **estilo Duolingo** (mapa linear de aulas).
  - Cartões da série no índice `escola-brilha`: fundo navy escuro (`#0d1f55` / gradientes navy), tipografia Nunito, acentos amber/laranja.
  - Nada de skin paralela (ex.: "Ateliê" com creme/ocre) competindo com a identidade do app.
- **O que MUDA por série**: o *formato de ensino* (11 momentos podem ganhar mecânicas novas, mais/menos jogos, linguagem calibrada por idade).
- **O que MUDA por matéria**: a *identidade pedagógica interna* (mascote, paleta secundária, mecânicas específicas) — mas sempre dentro do shell visual do app.

# Matérias TRAVADAS (proibido mexer no visual)

- **Geografia** (1º ao 9º) — travada.
- **História** (2º ao 9º) — travada.
- **Ciências** (1º ao 9º) — travada.

Ver também: `mem://constraints/geografia-travada.md`.

# Matérias em construção

- Inglês, Arte, e as próximas que o usuário for criando: podem ser modificadas,
  **desde que sigam esta identidade visual** e a trilha Duolingo das categorias.

# Como aplicar em curso novo

1. Card no índice `escola-brilha.index.tsx` no mesmo padrão navy/amber das outras matérias.
2. Trilha da série via `escola-brilha.trilha.$serie.$disc.tsx` (Duolingo linear).
3. Player da aula usa o shell padrão (`PlayerGeoV1` / `PlayerEnglishV1` / equivalente) — sem criar skin nova que quebre a identidade.
4. A identidade própria da matéria entra via mascote + paleta secundária + mecânicas, nunca sobrescrevendo fundo/tipografia globais.
