# Plano de Melhoria Crítica: Quebra-Cabeça Real, Roteamento e Alfabetização Dinâmica

Este plano aborda a correção de mecânicas de jogo (Quebra-Cabeça Jigsaw Real), a estabilização da navegação entre módulos e a eliminação de redundâncias de conteúdo na Alfabetização, garantindo 350 aulas únicas.

## 1. Quebra-Cabeça Mágico (Jigsaw Real)
Implementar uma mecânica de recorte e encaixe real em substituição à seleção de imagens.

- **Mecânica:** Uma única imagem central dividida em grade (4 a 6 peças) com silhueta de encaixe.
- **Interação:** Drag-and-drop com "snap" (peça fixa ao chegar no local correto).
- **Dados:** Utilizar o banco `PUZZLE_BANK` com variações de dificuldade (peças).
- **Tecnologia:** `framer-motion` para arrastar e detectar colisão/encaixe.

## 2. Roteamento Direto (Correção de Navegação)
Corrigir o fluxo de cliques no Neuro-Treino para evitar telas intermediárias de configuração quando a atividade já está decidida.

- **Destino:** Garantir que `Construtor de Formas`, `Estúdio de Arte` e `Quebra-Cabeça Mágico` levem diretamente ao `Player` do jogo.
- **Contexto:** Manter a persistência do hiperfoco para que o jogo carregue com os ativos corretos imediatamente.

## 3. Alfabetização Premium (350 Aulas Únicas)
Eliminar repetições de conteúdo através de um motor de geração dinâmico.

- **Banco de Dados:** Expandir o banco de frases e histórias para Compreensão Leitora (50 variações por etapa).
- **Gerador:** Refatorar o gerador de aulas para selecionar elementos de forma aleatória sem repetição dentro do mesmo nível/etapa.
- **Diversidade:** Alternar fonemas, posições silábicas e contextos narrativos em cada uma das 7 etapas da Alfabetização.

## Detalhes Técnicos
- **Componente:** Refatoração de `QuebraCabecaMagico` em `src/routes/neuro-treino.$slug.tsx`.
- **Configuração:** Ajuste de links em `src/routes/neuro-treino.tsx` e `src/routes/brilha-kids.tsx`.
- **Conteúdo:** Atualização de `src/modules/alfabetizacao/data/etapas.ts` e expansão de constantes em `src/data/neuro-treino/variations-extended.ts`.
- **Navegação:** Ajuste no `useNavigationStore` para evitar loops de redirecionamento.
