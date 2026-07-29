---
name: Português 1º ano em modo jogo
description: Aulas de Português do 1º ano rodam audio-first (imagem+som+toque) via campo momentosJogo, não em telas de texto.
type: feature
---

Criança de 6 anos ainda não lê: aula de Português 1º ano NÃO pode ser texto + pergunta escrita.

Como funciona:
- `AulaPortuguesV4` tem o campo opcional `momentosJogo?: MomentoEI[]`.
- Quando preenchido, a rota `/escola-brilha/aula-pt-v4/$curso/$aula` renderiza o
  `PlayerPortuguesEI` (áudio + imagem + toque), ignorando os 11 momentos de texto —
  que permanecem no arquivo como plano de aula para o adulto.
- Tipos de jogo disponíveis: somDaLetra, tracadoLetra, cacaAoSom, pareamentoLetraSom,
  elkoninBoxes, familiaSilabica, juntarSilabas, leituraSilabica, letrasMoveis,
  leituraFrase, ritmoCorpo, vocabularioVisual, compreensaoImagem, missaoFamilia, celebracao.

Referência travada: Unidade 1 do curso `portugues-1ano` (aulas 01–04).
Toda aula nova de 1º ano precisa de `momentosJogo`.
