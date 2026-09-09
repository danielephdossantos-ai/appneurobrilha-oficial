---
name: Exceção travada — Atlas Final tem tela própria
description: Única exceção ao padrão visual único do Escola Brilha. A tela do "Atlas Final / Livro Mágico do Explorador" pode usar layout customizado (flip-book, medalhas girando, modal de diploma) fora dos blocos do PlayerPortuguesV4. Só se aplica a essa tela específica de encerramento de curso.
type: constraint
---

## Exceção aprovada pelo usuário

Rota: `/escola-brilha/atlas-final/$curso` (ex.: `/escola-brilha/atlas-final/geografia-2ano`).

Essa tela **PODE** ter:
- Livro digital com efeito flip-book (framer-motion rotateY).
- Galeria de medalhas em grid, com hover/tap girando.
- Modal de diploma com confetes (canvas-confetti).
- Áudio narrado com voz de Aurora + Brilha.
- Nome do aluno vindo de `useAppState().activeChild?.nome`.

## Regras da exceção

1. Vale **APENAS** pra tela de encerramento de curso ("Atlas Final"). Nada de arrastar esse layout pra outras telas.
2. Acesso é **bloqueado** até 100% das aulas concluídas (`localStorage eb.v4.progresso.<curso>`).
3. Todo o resto do curso (as 7 unidades × aulas) continua obrigatoriamente no `PlayerPortuguesV4` com os 11 blocos fixos.
4. Nenhuma outra "tela de gala" pode reaproveitar essa liberdade sem nova aprovação por escrito.

## Por quê
O usuário pediu "momento de gala do videogame" pra fechar o curso com chave de ouro. É a única cerimônia — não é conteúdo diário — então merece UI de recompensa. Fora dessa cerimônia, o padrão único continua travado.
