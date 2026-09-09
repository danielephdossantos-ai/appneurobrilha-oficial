---
name: Imagem em TODO ponto/opção/card/parada (padrão único)
description: Em toda aula do PlayerGeoV1 (qualquer disciplina/série), cada item interativo com título/texto DEVE ter fotoUrl. Nunca deixar item sem imagem — quebra o padrão visual.
type: preference
---

## Regra TRAVADA

Em toda aula que usa `PlayerGeoV1` (Ciências, Geografia, História, etc.), TODO item interativo com título/texto precisa ter `fotoUrl`:

- `narrarMapa.pontos[]` → cada ponto com `fotoUrl`
- `cadernosCampo.cadernos[]` → cada caderno com `fotoUrl`
- `quizRadar.perguntas[].cards[]` (quando aplicável) e `perguntas[].fotoUrl` sempre
- `mapaCamadas.camadas[]` → cada camada com `fotoUrl`
- `linhaEstrada.paradas[]` → cada parada com `fotoUrl`
- `voceLeSozinho.paragrafos[]` → cada parágrafo com `fotoUrl`
- `construtorMarcos.rodadas[]` → cada rodada com `fotoUrl`
- `pizzaMunicipio.fatias[]` → cada fatia com `fotoUrl`
- `seloAtlas.perguntas[]` → cada pergunta com `fotoUrl`
- `votoExplorador` → `fotoUrl` da pergunta

## Antes de fechar qualquer aula

Fazer um `grep` no arquivo procurando itens sem `fotoUrl` e adicionar. Se faltar asset, GERAR a imagem — nunca deixar item nu.

## Por quê

Reclamação recorrente: "faz em umas e em outras não. Quero padrão SÓ pra todas as aulas". A ausência de imagem em um ponto interativo quebra a expectativa visual que o resto da aula estabelece.
