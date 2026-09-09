# Plano de Implementação: Novo Quebra-Cabeça Mágico Interativo

Transformação do componente `QuebraCabecaMagico` em uma experiência de jogo completa, com seleção de categorias, níveis de dificuldade ajustáveis e feedback visual/sonoro aprimorado.

## Alterações Propostas

### 1. Mecânica de Jogo (Componente Principal)
- **Tabuleiro Central**: Implementar uma área de grid fixa com a silhueta da imagem (sombra de baixa opacidade) servindo como guia.
- **Divisão Dinâmica**: Utilizar Canvas ou CSS Grid para dividir a imagem escolhida em 4, 6, 9, 12, 16, 24 ou 32 peças.
- **Drag-and-Drop Real**: Refatorar o uso de `framer-motion` para permitir arrastar peças da bandeja e soltá-las sobre o slot correto com efeito de "snap" magnético.

### 2. Seleção de Conteúdo (Carrossel Inferior)
- **Categorias**: Criar um carrossel de navegação inferior com:
  - **Mundos**: Fundos temáticos do app.
  - **Mascotes**: Personagens (Pip, Pipa, Aurora, etc.).
  - **Hiperfocos**: Imagens do banco premium baseadas no interesse da criança.
- **Interatividade**: Ao selecionar uma imagem, o jogo reinicia instantaneamente com o novo tema.

### 3. Sistema de Dificuldade
- **Controle Manual**: Adicionar seletor de peças (4 a 32) na interface superior/lateral.
- **Progressão Inteligente**: Sistema que sugere aumentar o nível após conclusões rápidas, com animação comemorativa.

### 4. Feedback e Polimento
- **Efeitos Sonoros**: Sons de "clique" ao encaixar e trilha sonora suave.
- **Celebração**: Animação de confetes (canvas-confetti) e brilhos ao completar a imagem.
- **Interface**: Design ultra-limpo, focado na área de jogo, ocultando elementos desnecessários da barra lateral.

## Detalhes Técnicos
- **Estado**: Gerenciamento de peças encaixadas e imagem atual via `useState`.
- **Renderização**: Otimização do `RenderPiece` para suportar diferentes grades de corte.
- **Responsividade**: Garantir que o tabuleiro se ajuste a diferentes tamanhos de tela (Mobile/Tablet).

---
**Deseja prosseguir com a implementação completa seguindo estas especificações?**
