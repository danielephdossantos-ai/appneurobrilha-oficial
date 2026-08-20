# Plano de Reformulação do Neuro-Treino

Este plano visa atender à solicitação de reformulação geral de layout, encaixe de tela e lógica de jogos em todas as modalidades do Neuro-Treino.

## Alterações de Layout Global

- **Enxugamento de Cabeçalho**:
  - Modificar `src/routes/neuro-treino.$slug.tsx` para remover elementos repetitivos e cards informativos no topo durante a execução das atividades.
  - Manter apenas o botão do microfone ("Ouvir PIP") no topo.
  - Centralizar a área útil do exercício usando Flexbox (`display: flex; align-items: center; justify-content: center; width: 100%; height: 100%`) para garantir que o jogo ocupe a tela sem rolagens.

## Lógica de Jogo e Dificuldade

- **Aleatoriedade Real**:
  - Implementar embaralhamento real das opções e sequências em:
    - `SequenciaCores` (Sequência de Cores)
    - `SequenciaPadrao` (Sequência e Padrão)
    - `MemoriaVisual` (Memória Visual)
  - Utilizar `Math.random` e garantir que sequências não se repitam.
- **Progressão de Nível**:
  - Ajustar o motor de dificuldade adaptativa para começar com sequências de 3 elementos.
  - Aumentar gradualmente o tamanho, velocidade e quantidade de elementos conforme a criança acerta.

## Reformulação de Mecânicas Específicas

- **Mosaico (Montar e Pintar)**:
  - **Etapa 1 (Montar)**: Peças começam desmontadas na parte inferior para serem arrastadas/tocadas para a posição correta.
  - **Etapa 2 (Pintar)**: Liberar paleta de cores somente após a montagem completa da figura.
  - Aumentar o tamanho da área de montagem para ocupar o centro da tela.
- **Traçado de Letras**:
  - Maximizar a área do Canvas para o traçado ocupar o máximo de espaço possível.
  - Reposicionar as paletas de cores laterais para uma linha horizontal na parte inferior.
- **Desenho (Modelo e Sua Vez)**:
  - Reduzir o card "MODELO" e posicioná-lo no canto superior direito.
  - Maximizar a área "SUA VEZ" para quase a tela inteira.
  - Liberar ferramenta de colorir após a conclusão do contorno.

## Detalhes Técnicos

- **Centralização Flexbox**: Aplicar no container principal da atividade no `MechanicRenderer`.
- **Estado do Mosaico**: Adicionar estado `phase` ('montar' | 'pintar') no componente `Mosaico`.
- **Canvas de Desenho**: Ajustar dimensões e `viewBox` para responsividade máxima.
- **Randomização**: Usar algoritmos de embaralhamento (ex: Fisher-Yates) para garantir aleatoriedade real em cada rodada.

As mudanças serão focadas nos componentes internos de `src/routes/neuro-treino.$slug.tsx`.
