---
name: Contar tocando junto (professor fala)
description: Toda coleção visual contável até o 2º ano deve permitir toque-a-toque com narração e contador ao vivo.
type: feature
---

Até o 2º ano, SEMPRE que uma atividade mostrar uma coleção de figuras
para contar (Contar Quiz, Prática Guiada, Prática Independente,
Aplicação, Avaliação), cada figura precisa ser TOCÁVEL:

- toque em uma figura → destaca (glow amarelo) + número da posição aparece
- professor fala o número em voz alta (`speakChunked` com `native-tts`)
- contador ao vivo no topo mostra "X / Total"
- botão de voz on/off + botão reiniciar contagem
- ao contar o último item, o professor fecha: "N! Contamos N."
- opções de resposta desabilitam a contagem depois de escolhida

Componente de referência: `ContarQuiz` em
`src/escola-brilha/curso-v4/player/PlayerV4.tsx`.
Mesma lógica já vive em `TapContar` — reaproveitar padrão de `falarNumero`.

Nunca colocar coleção de figuras estáticas sem tap-count nessa faixa.
