---
name: Sondagem conectada à adaptação
description: A sondagem inicial define o nível de apoio (intensivo/moderado/leve) das aulas de Português e é recalibrada pela nota das avaliações.
type: feature
---

A sondagem inicial não é só sugestão de unidade: ela define o **nível de apoio** com que
a criança entra em cada aula, via `player-portugues/perfil-apoio.ts`.

- **intensivo** (< 50% na sondagem): pista aparece ANTES de responder, lida em voz alta
  (rate 0.6), 3 tentativas antes de revelar, reensino visível também no acerto.
- **moderado** (50–85%): pista na 1ª tentativa errada, 2 tentativas, fala 0.72.
- **leve** (≥ 85%): pistas só ao errar, sem leitura automática, fala 0.85.

Recalibração automática ao fechar a avaliação (m10): nota < 70% sobe um degrau de apoio;
duas notas ≥ 90% seguidas descem um degrau. Estado em `localStorage: eb.v4.apoio.<curso>`.
Refazer a sondagem apaga a recalibração e volta a valer o resultado novo.

O nível aparece no topo da aula e no cartão de sondagem da trilha.
