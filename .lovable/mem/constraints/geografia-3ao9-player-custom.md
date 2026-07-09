---
name: Exceção — Player customizado Geografia 3º ao 9º
description: Geografia do 3º ao 9º ano pode ter player/cenas próprias fora do PlayerPortuguesV4. Nenhuma outra disciplina.
type: constraint
---

## Exceção formal ao padrão visual único

A regra `padrao-visual-unico` continua valendo para TODAS as disciplinas
do Fund. 1 ao 9, com UMA exceção autorizada pelo usuário:

**Geografia 3º ao 9º ano** pode ter player próprio com cenas
customizadas (mesa de cartografia, mapa de camadas, pizza clicável de
população, minijogo de fronteiras, Atlas Municipal Vol. 3+, etc.).

## Escopo da exceção
- Vale só para `curso-v4/geografia-Nano/` com N ∈ {3,4,5,6,7,8,9}.
- Geografia 2º ano CONTINUA no PlayerPortuguesV4 (já entregue).
- Nenhuma outra disciplina herda a exceção.

## Como implementar
- Novo player em `src/escola-brilha/curso-v4/geografia-3ano/player/`
  (e análogos por série quando surgirem).
- Rota nova `src/routes/escola-brilha.aula-geo-v1.$curso.$aula.tsx`.
- Reusar do padrão: XP, mascotes-personagens, DiplomaBrilha,
  AlbumRecordacoes, Atlas Final, esqueleto de 11 blocos
  (Motivação → … → Avaliação) — o que muda é o FORMATO de cada bloco.

## Regra do usuário mantida
Fazer em etapas PEQUENAS, cena por cena, com aprovação explícita
antes de replicar para as próximas aulas / séries.
