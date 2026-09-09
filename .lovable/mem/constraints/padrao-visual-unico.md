---
name: Padrão visual único do app — proibido criar novo
description: TODO conteúdo do Ensino Fundamental (1º ao 9º) usa o mesmo padrão visual de Português e Matemática 2º ano. Nunca criar UI/layout novo.
type: constraint
---

## Regra TRAVADA
Todas as aulas do Ensino Fundamental (1º ao 9º ano), de qualquer disciplina, DEVEM usar exatamente o mesmo padrão visual/estrutural das aulas de:
- **Matemática 2º ano** (`src/escola-brilha/curso-v4/matematica-2ano/`)
- **Português 2º ano** (`src/escola-brilha/curso-v4/portugues-2ano/` + player `player-portugues/`)

## O que é PROIBIDO
- Criar novo layout, rota customizada, orquestrador próprio, componentes de cena novos.
- Criar novo player (tipo `geo-2ano/index.tsx` com scenes próprias).
- Inventar barra de XP, modais de vitória, GeoScanner, laboratórios etc. FORA dos blocos já existentes.
- Rotas dedicadas por disciplina (`/escola-brilha/geo-2ano/...`) — usar `/escola-brilha/curso/$slug` e `/escola-brilha/aula-v4/...`.

## O que fazer
- Registrar o curso como `src/escola-brilha/curso-v4/<disciplina-serie>/curso.ts` seguindo o mesmo `satisfies Curso | CursoPortugues`.
- Cada aula: `unidade-N/aula-XX-....ts` retornando os blocos padronizados que o player já sabe renderizar.
- O usuário envia o prompt/roteiro — eu só ENCAIXO nos blocos existentes.
- Se um bloco visual novo for realmente necessário, PARAR e pedir aprovação antes.

## Por quê
O app tem UM padrão único de UI do Fund. 1 ao 9. Divergir quebra a experiência da criança e a coerência do produto.
