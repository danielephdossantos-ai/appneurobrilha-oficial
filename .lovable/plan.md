
## Escopo do Bloco 1 (só isso será entregue agora)

Etapas da Aula 1 que entram: **1** história, **2** observação de cores, **3** cores→emoções, **4** artista/obra, **6** texturas, **11** curiosidade, **12** quiz.

Ficam para Bloco 2 (depois que você validar): **5** pintura digital, **7** drag-drop cor×emoção, **8** música+pintura, **9** missão em casa (foto), **10** atividade manual, **13** desafio final (pintura + áudio), **14** relatório.

## Arquitetura proposta

Arte 2º ano vira um **módulo próprio**, no mesmo padrão que já usamos para Inglês e Ciências específicos por ano — não força dentro do molde rígido `Aula` de 12 blocos (que não comporta pintura/áudio/drag-drop). Vantagens: liberdade pra Bloco 2, sem quebrar as aulas EF15AR já existentes (que continuam intocadas).

Estrutura de arquivos nova:

```text
src/escola-brilha/arte-2ano/
  PlayerArteV1.tsx        engine com skin Ateliê + navegação por etapas
  atelier-skin.css        variáveis, textura de papel, tipografia manuscrita
  aulas/
    u1-a01-cores-falam.ts  dados da Aula 1 (só etapas do Bloco 1)
  registry.ts             index das aulas de Arte 2º
src/routes/
  escola-brilha.arte.2ano.$aula.tsx   rota dedicada
```

Integração leve no índice existente (accordion 2º ano) apontando pra rota nova — sem mexer em disciplinas travadas.

## Identidade visual "Ateliê" (locked, aplicada em todas as etapas)

- Paleta pastel/quente: `--atelier-cream #FBF6EC`, `--atelier-terracotta #C97B5A`, `--atelier-ochre #E8B84A`, `--atelier-sage #9BB08A`, `--atelier-ink #2D2418`, `--atelier-blush #F0C4B4`.
- Fundo: textura sutil de papel artesanal (SVG procedural em CSS, sem asset externo — mais leve).
- Tipografia: manuscrita para títulos (Caveat via Google Fonts, já carregada) + sans humanista para corpo.
- Componentes com bordas irregulares (border-radius assimétrico), sombras suaves cor-de-quente, ícones desenhados como pincelada.
- Botões de navegação estilo "pincel molhado" (não os pills genéricos).

## Etapas implementadas no Bloco 1

1. **História** — Brilha e a caixa de lápis mágicos. Card grande com 5 lápis coloridos animados; cada lápis toca ao passar (TTS). CTA: ▶ Começar.
2. **Observando cores** — 4 imagens fotográficas (pôr do sol / jardim / praia / floresta). Aluno toca nas cores que vê (chips coloridos). Feedback progressivo.
3. **Cores → Emoções** — 5 cards (vermelho/amarelo/azul/verde/roxo), cada um mostra rostinho mudando de emoção ao tocar. Sem certo/errado (apreciação).
4. **Conhecendo um artista** — 1 obra adaptada (imagem já gerada), pergunta "o que você sente?" com 4 opções emoji. Depois mostra painel curto sobre o uso das cores na obra.
6. **Texturas** — 6 miniaturas fotográficas (madeira/pedra/areia/água/tecido/folhas). Aluno associa cada textura ao desenho que combina (matching simples 6 pra 6).
11. **Curiosidade** — Painel "Você sabia?" narrado, com ilustração lateral.
12. **Quiz** — 4 perguntas conforme prompt, reaproveitando componente de quiz simples (sem depender do QuizItem rígido do tipo `Aula`).

Progresso: barra no topo mostra 7 etapas do Bloco 1 (etapas 5, 7, 8, 9, 10, 13, 14 aparecem como "🔒 em breve — Bloco 2" no fim).

## Detalhes técnicos

- **Voz**: usa `sanitizeForSpeech` + `native-tts.ts` já existente (pt-BR).
- **Persistência**: `useProgresso` existente registra conclusão da aula.
- **Assets**: não gero imagens novas nesse bloco pra ir rápido — uso 4 fotos de paisagem + 6 de textura + 1 obra (10 imagens via imagegen fast, PNGs pequenas). Se você preferir eu usar só emojis/ilustrações CSS pra evitar geração de imagem, me diga antes de eu começar.
- **Rota**: `/escola-brilha/arte/2ano/u1-a01-cores-falam`.
- **Sem quebra**: nada nas aulas EF15AR* existentes muda.

## O que vou validar antes de fechar o Bloco 1

Depois de codar, rodo Playwright na rota nova, tiro screenshot de cada uma das 7 etapas em viewport mobile (390×844), abro os prints e checo: skin Ateliê aplicada, textura de papel visível, tipografia manuscrita nos títulos, nenhuma etapa quebrada, TTS iniciando. Só então te chamo pra revisar.

## Fora de escopo deste bloco

- Pintura digital (canvas HTML5, brush/pincel/borracha/carimbo, autosave)
- Gravação de áudio do aluno
- Drag-drop de emoções (etapa 7)
- Missão em casa com upload de foto pro Supabase
- Relatório com métricas
- Registrar Arte 2º ano nas outras trilhas Duolingo/atlas

Tudo isso vem no Bloco 2, depois que o Bloco 1 estiver aprovado por você.
