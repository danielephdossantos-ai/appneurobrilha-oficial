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
- [x] Fase 2 — consciência fonêmica (Unidade 7 "O Ouvido Mágico": som inicial, segmentar, sintetizar, trocar fonema — blocos com TTS)
- [x] Fase 3 — bloco de escrita (momento `mesc` "✍️ Você escreve": traçado de letra em canvas com medição de cobertura, ditado com sílabas móveis + TTS, escrita real de lista/bilhete/convite/cartaz guardada no aparelho — aplicado nas 4 aulas da U4)
- [x] Fase 4 — avaliações revisadas item a item: todas as 28 aulas com 4 alternativas e distratores plausíveis (erros típicos de 6 anos: letra seguinte da palavra, contar letras em vez de sílabas, aliteração no lugar de rima, frase sem ponto ou sem maiúscula, troca de gênero textual), com feedback de erro explicando o porquê
- [x] Fase 5 — revisão espaçada: bloco "🔁 Aquecimento — Você lembra?" abre toda aula de Matemática e de Língua Portuguesa (`AquecimentoRevisao.tsx` + `motor/aquecimento-revisao.ts`), com 3 itens vindos das aulas anteriores (offsets 1, 3 e 7), prioridade para itens errados (fila de reensino até 2 acertos), feedback que explica o raciocínio e TTS. Contrato do 1º ano CONCLUÍDO — outras séries de LP liberadas.
- [x] Fase 6 — ordem fonêmica primeiro: "O Ouvido Mágico" virou **Unidade 1** do curso (as demais desceram para 2–7) e o bloco `alfabetoCompleto` agora ensina **nome + SOM** de cada letra ("M é eme, mas o som é /mmm/, como em MÃO") com TTS em 3 tempos (nome 0.85 → fonema 0.6 → palavra 0.72) e badge do fonema em cada letra.

## Fase 7 — TTS obrigatório (CONCLUÍDA)
Todo bloco de Português tem áudio. `BotaoOuvirEnunciado` (inline, nunca flutuante)
foi adicionado a CardVocabulario, MontarPalavra, OrdenarSequencia, SelecionarItens
e ArrastarParaAlvo, com botão de REPETIR o enunciado.

## Fase 8 — Escrita e texto decodável (CONCLUÍDA)
- `momento_escrita` (traçado de letra + ditado com sílabas móveis, e escrita real
  na U de frases) presente nas 16 aulas das unidades: Ouvido Mágico, Alfabeto
  Mágico, Fábrica de Sílabas e Palavras Viram Frases.
- Textos de leitura reescritos em vocabulário decodável: fora palavras com
  encontros consonantais/dígrafos ainda não ensinados (dicionário, idioma,
  pelúcia, bicicleta, vermelho, alegria, brilhando, Encontrei).
- Regra permanente: em aula do 1º ano, texto de leitura só usa sílabas já
  ensinadas; palavra nova entra primeiro no card de vocabulário com áudio.

## Fases A–D — cobertura BNCC completa (CONCLUÍDAS)
- Fase A: remapeamento dos códigos (LP10/LP11 alfabeto, LP12 frase, LP14
  pontuação/entonação, LP16/LP18/LP19 poesia, LP01 lista, LP13 rimas).
- Fase B: 3 aulas novas — "Minha Escrita e a Escrita Certa" (LP03),
  "A Voz da Frase" (LP14+LP09), "Palavras Parecidas e Opostas" (LP15).
- Fase C: **Unidade 8 — Repórter Brilha** (campo investigativo):
  Curiosidade do Dia (LP22/LP24), A Entrevista do Repórter (LP23/LP22/LP09),
  O Diagrama que Explica (LP24/LP22).
- Fase D: **Unidade 9 — Combinados e Histórias**:
  Nossos Combinados da Turma (LP21/LP01), Guardando a Parlenda (LP18/LP13),
  Eu Reconto a História (LP25/LP26).
- Resultado: **26/26 habilidades EF01LP cobertas**. Curso de LP do 1º ano
  fechado — qualquer aula nova deve manter os 11 momentos + momento_escrita.
