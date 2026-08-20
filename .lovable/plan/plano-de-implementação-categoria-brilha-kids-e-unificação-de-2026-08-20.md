# Plano de Implementação: Categoria "BRILHA KIDS" e Unificação de Módulos

Este plano detalha a reestruturação dos módulos de Alfabetização e Educação Infantil, movendo-os do Neuro-Treino para uma categoria unificada na Home ("Início"), mantendo a integridade pedagógica e técnica do projeto.

## Mudanças Propostas

### 1. Reestruturação do Neuro-Treino
- Remover os seguintes módulos visuais da página `neuro-treino.tsx`:
    - **Contar com Pip / Senso Numérico** (Fase 1-8).
    - **Português • Educação Infantil / Biblioteca Encantada**.
    - **Campos de Experiência • Educação Infantil** (Missões EI).
- Manter esses módulos acessíveis apenas através da nova categoria na Home.

### 2. Nova Categoria na Home ("BRILHA KIDS")
- Adicionar um novo card principal em `src/routes/index.tsx` chamado **BRILHA KIDS**.
- Este card terá um visual premium e unificado, seguindo o padrão Pixar/Kawaii do app.
- O clique neste card abrirá uma interface interna organizada.

### 3. Interface Interna "BRILHA KIDS"
- Criar um componente de "Hub" ou "Mundo" para o Brilha Kids.
- Dentro dele, listar os 3 módulos transferidos de forma organizada:
    - **Trilha da Alfabetização** (Contar com Pip + Ler com Aurora).
    - **Português EI & Biblioteca** (Biblioteca Encantada + Códice Português).
    - **Campos de Experiência** (Missões BNCC EI).
- Garantir que cada clique leve à trilha original, mantendo o contexto de navegação.

## Detalhes Técnicos

- **Navegação**: Usar `navigation-context.ts` para garantir que o botão "Voltar" dentro das aulas do Brilha Kids retorne corretamente para o Hub Brilha Kids, e deste para a Home.
- **Componentes**: Criar `src/components/brilha-kids/BrilhaKidsHub.tsx` para a interface interna, evitando poluir o `index.tsx`.
- **Estilos**: Utilizar os gradientes e sombras semânticas já definidos no `src/styles.css`.
- **Banco de Dados**: Nenhuma alteração de esquema necessária. O reuso será via rotas e IDs existentes.

## Checklist de Verificação
- [ ] Card "BRILHA KIDS" aparece na Home (Mobile e Desktop).
- [ ] Módulos foram removidos do Neuro-Treino.
- [ ] Clique no item de Alfabetização abre a trilha correta.
- [ ] Clique na Biblioteca Encantada funciona como antes.
- [ ] O visual segue o padrão Kawaii/Pixar 2D.
- [ ] A navegação de retorno funciona perfeitamente.
