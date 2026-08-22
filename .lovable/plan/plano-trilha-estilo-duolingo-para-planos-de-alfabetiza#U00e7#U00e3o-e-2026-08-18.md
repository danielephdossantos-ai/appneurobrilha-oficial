# Plano: Trilha Estilo Duolingo para Planos de Alfabetização e Neuro-Treino

Implementar uma interface de trilha linear (estilo Duolingo/Pip's Pipeline) para os planos de estudo, agrupando as aulas do dia em "ilhas" ou ícones únicos e trancando o acesso a dias futuros.

## Mudanças Técnicas

### 1. Novo Componente: `TrilhaPlanoVisual`
- Criar um componente reutilizável que renderiza uma trilha vertical/em zigue-zague.
- Agrupar itens por dia da semana.
- Estilizar o "Dia de Hoje" como um ícone grande e brilhante (iluminado).
- Estilizar "Dias Futuros" com efeito grayscale e ícone de cadeado.

### 2. Atualização em `src/routes/primeiros-anos.tsx` (Alfabetização)
- Substituir a lista de cards por dia pela nova `TrilhaPlanoVisual`.
- Garantir que apenas as aulas de `hoje` (ou dias passados não concluídos) estejam clicáveis.

### 3. Atualização em `src/routes/plano-neuro.tsx` (Neuro-Treino)
- Aplicar a mesma lógica de trilha visual.
- O botão "COMEÇAR MISSÃO DE HOJE" levará para a primeira aula não concluída da trilha de hoje.

### 4. Lógica de Trava
- Comparar o `dia_semana` do item com o `diaSemanaHoje()`.
- Se `dia > hoje`, o item é renderizado como trancado.
- Adicionar feedbacks visuais (tooltips ou toasts) ao clicar em itens trancados: "Esta aula abrirá em [Dia da Semana]!".

## Detalhes Visuais
- Usar o padrão de ilustrações 2D kawaii do projeto.
- Conexões (linhas ou caminhos) entre os dias para reforçar a progressão linear.
- Estados: Concluído (check), Atual (ativo/brilhante), Trancado (cinza/cadeado).
