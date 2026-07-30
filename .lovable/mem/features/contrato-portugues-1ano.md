---
name: Contrato Português 1º ano — Plano de Edição
description: Contrato de 5 fases para reformar "As Chaves da Leitura" (portugues-1ano) após auditoria. Nenhuma outra série avança antes de concluir.
type: feature
---

# Contrato — Português 1º ano: Plano de Edição pós-auditoria

Curso slug: `portugues-1ano` · "As Chaves da Leitura" · 24 aulas · skin **kids**.

**Regra de ouro:** as 5 fases abaixo são executadas em ordem. Cada fase entra
em um turno próprio e só avança depois de typecheck limpo e validação da
usuária. Nenhuma outra série de Língua Portuguesa é iniciada antes da Fase 5.

## Fase 1 — Motor adaptativo real no player
- Registrar por momento: acerto/erro, tempo de resposta, nº de tentativas.
- Ligar nos motores já existentes (`useMetricasAula`, `AdaptiveMotor`,
  `useAdaptiveDifficulty`, `promptingEngine`) — não criar motor novo.
- Avaliação final exige **≥70%** para concluir a aula; abaixo disso, retomada.
- 1ª tentativa errada → **dica** (pista fonêmica/visual), nunca a resposta.
- 2ª tentativa errada → **reensino automático** (volta ao bloco de explicação
  correspondente) e depois reapresenta item equivalente.
- Feedback sempre explica o raciocínio (Professor Digital).

## Fase 2 — Unidade de consciência fonêmica (com áudio)
Nova unidade dedicada, 4 aulas, tudo com áudio e imagem (sem palavra escrita
como estímulo principal):
- Som inicial (aliteração / identificar fonema inicial).
- Segmentar palavra em fonemas.
- Sintetizar fonemas em palavra.
- Trocar/manipular fonema (pato → gato).
Áudio via TTS nativo em velocidade reduzida para clareza fonêmica.

## Fase 3 — Bloco de escrita de verdade
- **Traçado de letra** guiado (canvas com checkpoints de traço).
- **Ditado de palavra** com sílabas móveis arrastáveis.
- **Escrita funcional na U4**: lista e bilhete reais, com rascunho → revisão →
  versão final.

## Fase 4 — Qualidade das avaliações
- Toda avaliação com **4 alternativas**.
- **Distratores plausíveis**: erros típicos de 6 anos (troca surda/sonora,
  omissão de sílaba, confusão visual b/d/p/q), nunca opção absurda.
- Revisar item a item das 24 aulas.

## Fase 5 — Revisão espaçada
- Início de cada aula com **3 itens de revisão** vindos das aulas anteriores.
- Seleção por desempenho: prioriza habilidades com erro registrado.
- Reaproveitar `srs.ts` / SRS existente; não duplicar lógica.

## Status
- [x] Fase 1 — motor adaptativo (registro por momento, dica na 1ª falha, reensino na 2ª, gate de 70% na avaliação)
- [ ] Fase 2 — consciência fonêmica
- [ ] Fase 3 — bloco de escrita
- [ ] Fase 4 — distratores e 4 alternativas
- [ ] Fase 5 — revisão espaçada
