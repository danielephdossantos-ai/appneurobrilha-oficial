# Plano de Unificação — Módulo BRILHA KIDS

Este plano descreve a reestruturação dos módulos de Educação Infantil e Alfabetização para uma categoria unificada chamada **BRILHA KIDS** na tela inicial, removendo a redundância no Neuro-Treino.

## Alterações

### 1. Novo Hub Unificado (BRILHA KIDS)
- Criar a rota `src/routes/brilha-kids.tsx`.
- Interface interna com 3 módulos principais:
  - **Alfabetização**: "Contar com Pip & Aurora" (acesso a `/primeiros-anos`).
  - **Português EI & Biblioteca**: 60 aulas com foco em linguagem (acesso a `/escola-brilha/biblioteca-encantada`).
  - **Campos de Experiência**: Base Nacional BNCC EI (acesso a `/escola-brilha/portugues-ei`).
- Design Premium: Cartões com gradientes vibrantes, ícones Kawaii e feedback visual de hover.

### 2. Ajuste na Home (Página Inicial)
- Adicionar o card **BRILHA KIDS** ao array `DESTINOS_KIDS` em `src/routes/index.tsx`.
- Posicionamento de destaque como primeira categoria da grade.

### 3. Limpeza do Neuro-Treino
- Remover os links diretos para "Alfabetização", "Plano Neuro", "My First English" e "Matemática Kawaii" da página `src/routes/neuro-treino.tsx`.
- O Neuro-Treino passará a focar exclusivamente em funções executivas e reabilitação cognitiva pura.

## Detalhes Técnicos
- Uso de `framer-motion` para animações de entrada e interação.
- Manutenção do `navigation-context` para garantir que o botão "Voltar" retorne ao Hub ou à Home corretamente.
- Preservação total das regras pedagógicas e de banco de dados existentes.
- Sem alterações em esquemas de banco ou RLS.
