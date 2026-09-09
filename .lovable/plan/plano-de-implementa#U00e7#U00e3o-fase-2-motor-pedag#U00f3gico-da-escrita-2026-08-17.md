# Plano de Implementação: FASE 2 — MOTOR PEDAGÓGICO DA ESCRITA

Este plano transforma a "Rotina de Escrita" em um sistema de trilha progressiva baseado em desempenho, seguindo as 8 etapas pedagógicas definidas na auditoria.

## Alterações Técnicas

### 1. Banco de Dados e API
- Criar tabela `child_escrita_status` para persistir o nível real da criança, pontos de domínio e preferência de letra (imprensa/cursiva).
- Implementar `src/lib/motor-escrita.functions.ts` para gerenciar a lógica de progressão baseada em desempenho.

### 2. Módulo Pedagógico
- Criar `src/lib/motor-pedagogico-data.ts` com as 8 etapas (Pré-escrita até Cursiva) e seus objetivos específicos.

### 3. Interface do Usuário (`src/routes/rotina-escrita.tsx`)
- Adicionar seletor de tipo de letra (Imprensa, Cursiva, Ambas).
- Adicionar visualização da Etapa Pedagógica atual.
- Integrar a lógica de domínio no ditado e nas atividades diárias.

## Guia para o Usuário
O sistema agora trata a escrita como uma jornada de 8 etapas. A criança só avança quando demonstra domínio, e você pode escolher o tipo de letra ideal para o momento dela.

---
**Próximos Passos:**
1. Rodar migração SQL.
2. Atualizar a interface de Rotina de Escrita.
