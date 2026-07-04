## Problema

Nas perguntas de posição de EF01MA11 (Exemplo, Guiada, Desafio, Quiz, Níveis), o texto diz "Brilha em cima da árvore", "livro sobre a mesa", "coelho entrou na toca" — mas a tela mostra só **caixinhas coloridas separadas** com a imagem do Brilha e da árvore lado a lado, cada uma com contagem "1". A criança não vê a cena de verdade e não tem como responder olhando.

Só a Fase Interativa (`PosicaoEspacial`) já mostra a cena real (Brilha em cima, dentro, atrás…). O resto usa `grupos` / `comparar`, que são visuais de contagem — não de posição.

## O que vou fazer

**1. Extrair o motor de cena do `PosicaoEspacial` num componente compartilhado `CenaPosicao`.**
- Move `Piece` + `renderLayout` (em cima, embaixo, dentro, fora, direita, esquerda, atrás, frente, ao lado) e a variação "entre" (fila de 3) pra `src/escola-brilha/player/blocos/CenaPosicao.tsx`.
- `PosicaoEspacial.tsx` passa a importar de lá (sem mudar comportamento).

**2. Ampliar `QuizItem.visual` com dois novos tipos:**
- `{ tipo: "cena", posicao, referenciaImg, referenciaLabel, sujeitoImg, sujeitoLabel }`
- `{ tipo: "cenaEntre", fila: [{ img, label }, …] }`

**3. Renderizar as novas cenas em todos os blocos que usam `QuizItem`:**
- `Quiz.tsx` (bloco Quiz)
- `ProgressaoNiveis.tsx` (Fácil / Médio / Difícil)
- `AtividadeGuiada.tsx` (prática guiada)
- `Desafio.tsx` → `QuizSequencial` (hoje ignora `q.visual`; passa a renderizar)

**4. Reescrever as perguntas de EF01MA11 pra usar a cena real:**
- **Exemplo resolvido**: troca o `interativo` de "toque na árvore" por uma cena mostrando o Brilha em cima da árvore (sem pedir toque enganoso).
- **Atividade Guiada**: cena com o coelho DENTRO da toca.
- **Desafio (4 perguntas)**: cada uma vira `cena`/`cenaEntre` com posição correspondente.
- **Quiz (4 perguntas)**: livro EM CIMA da mesa, gato ENTRE cachorro e rato, presente FORA da caixa, estrela à ESQUERDA/DIREITA.
- **Níveis (Fácil/Médio/Difícil)**: cada pergunta com a cena que o texto descreve.

**5. Assets faltando**: usar o que já existe (`livro`, `casa` como mesa/caixa, `presente`, `gato`, `coelho`, `urso`, `raposa`, `estrela`, `arvore`, `brilha`, `bau`). Nenhuma imagem nova precisa ser gerada.

## Validação (uma cena de cada vez)

Vou seguir a regra do usuário: implementar tudo, mas ao entregar peço confirmação **bloco por bloco** (Exemplo → Guiada → Desafio → Quiz → Níveis), antes de considerar pronto. Se algo estiver estranho na cena, ajusto só aquela.

## Arquivos tocados

- `src/escola-brilha/player/blocos/CenaPosicao.tsx` (novo)
- `src/escola-brilha/player/blocos/PosicaoEspacial.tsx` (usa o novo)
- `src/escola-brilha/types.ts` (2 novos tipos em `QuizItem.visual`)
- `src/escola-brilha/player/blocos/Quiz.tsx`
- `src/escola-brilha/player/blocos/ProgressaoNiveis.tsx`
- `src/escola-brilha/player/blocos/AtividadeGuiada.tsx`
- `src/escola-brilha/player/blocos/Desafio.tsx`
- `src/escola-brilha/data/EF01MA11.ts`

## Fora do escopo

- Não vou mexer em outras aulas (EF01MA01–10) — elas usam `grupos`/`comparar` corretamente pra contagem.
- Não vou trocar o estilo visual do mascote nem gerar imagens novas.

Posso seguir?