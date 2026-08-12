# Plano: Mascotes Mentores IA e Escolha de Professor

Permitir que a criança escolha qual de seus mascotes desbloqueados será o seu "Professor Mentor IA" nas aulas, permitindo a troca livre entre os mascotes da coleção.

## Alterações

### 1. Dados e Lógica de Negócio
- **Mapeamento de Mentores**: Atualizar `src/escola-brilha/mascotes-disciplina.ts` para incluir as imagens e personalizações dos mascotes mentores IA (Professor Brilha, Pip Teen Roqueiro, Teacher Brilha).
- **Atribuição Flexível**: Modificar `src/escola-brilha/mascote-assign.ts` para permitir salvar e recuperar o mascote "Mentor IA" preferido da criança.

### 2. Componentes de Interface
- **Seletor de Professor**: Criar ou atualizar `src/routes/escola-brilha.professores.tsx` para permitir que a criança escolha o mentor IA (além dos mascotes de cada disciplina).
- **Consumo do Mentor Ativo**: Atualizar os componentes de bolha de chat IA para usarem a imagem e o nome do mascote escolhido:
    - `src/escola-brilha/professor-brilha/ProfessorBrilhaBubble.tsx`
    - `src/escola-brilha/professor-ingles/ProfessorInglesBubble.tsx`
    - `src/components/professor/PipMatBubble.tsx` (e `ProfessorPipMat.tsx`)

### 3. Integração com Coleção
- **Inventário**: Garantir que a troca de mascote no inventário (`src/components/rewards/MascotInventory.tsx`) reflita nos mentores das aulas.

## Detalhes Técnicos
- Utilizar o `localStorage` existente para persistir a escolha por `child_id`.
- Criar um mapeamento centralizado que converte o `slug` do mascote escolhido na imagem de professor correspondente.
- Manter o Pip padrão como fallback caso nenhum tenha sido escolhido.
