---
name: Blocos aditivos por disciplina — permitido e preferido
description: Geografia/Ciências/Física/etc podem GANHAR novos tipos de bloco no player existente, desde que sejam aditivos e não alterem o padrão visual atual
type: preference
---

## Regra
Novos modelos de jogo/interação SÃO PERMITIDOS quando:
- São **aditivos**: entram como novo `tipo` em `MinijogoPT` ou como novo slot opcional (`momento_*?`) no `AulaPortuguesV4`.
- **Não modificam** blocos existentes, o layout do player, cores, sidebar ou fluxo dos 11 momentos.
- Ficam em `src/escola-brilha/curso-v4/player-portugues/blocos/` como um componente novo, renderizados dentro de uma `Secao` do player padrão.
- São registrados no `PlayerPortuguesV4.tsx` (import + `MOMENTOS_BASE` opcional + render dentro do `Outlet` da seção).

## Referência viva
- `LaboratorioClima.tsx` + `momento_laboratorio` (Geografia 2º · Aula 1): toggles à esquerda + SVG reativo à direita, explicação ativada por 🔊, mini-desafio ao final. Aprovado pelo usuário.

## Como propor um novo bloco
1. Descrever a mecânica em 1 frase.
2. Confirmar: cabe num bloco existente? Se sim, usar o existente. Se não, criar aditivo.
3. Nunca substituir bloco atual, nunca criar rota nova, nunca mudar cor/estrutura do player.

## Por quê
O usuário quer variedade pedagógica por disciplina (Geo tem laboratório, Ciências pode ter experimento, Física pode ter simulação de força) sem quebrar a identidade visual única do app.
