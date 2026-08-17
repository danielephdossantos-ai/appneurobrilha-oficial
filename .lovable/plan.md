# Plano de Melhoria Completa do Neuro-Treino

Este plano visa implementar todas as fases de melhoria técnica e pedagógica do módulo Neuro-Treino, focando em equilibrar a cobertura de habilidades cognitivas, fortalecer a matemática e raciocínio lógico, e aprimorar a flexibilidade cognitiva e atenção sustentada.

## Fases de Implementação

### Fase 3B: Percepção e Discriminação Auditiva
- **Objetivo:** Ampliar a cobertura de identificação, comparação e sequência sonora.
- **Novas Atividades:**
    - `pares-sonoros`: Identificar pares de sons iguais.
    - `sequencia-auditiva`: Memorizar e reproduzir sequências de sons/onomatopeias.
    - `instrutor-auditivo`: Seguir comandos complexos ouvidos (ex: "Toque no sol e depois na lua").

### Fase 3C: Matemática e Raciocínio Lógico
- **Objetivo:** Criar base cognitiva para aprendizagem numérica (pré-requisitos).
- **Novas Atividades:**
    - `banquete-dos-dinos`: Subitização (identificar quantidade sem contar um a um).
    - `trem-numerico`: Ordenação e sucessor/antecessor.
    - `balanca-de-pesos`: Comparação de grandezas e quantidades.
    - `composicao-visual`: Decomposição de formas e pequenas somas visuais.

### Fase 3D: Flexibilidade Cognitiva
- **Objetivo:** Treinar a mudança de estratégia e adaptação a novas regras.
- **Novas Atividades:**
    - `troca-troca-regras`: O critério de seleção muda durante o jogo (ex: primeiro por cor, depois por forma).
    - `labirinto-mutante`: Caminhos que mudam conforme o sucesso da criança.

### Fase 3E: Atenção Sustentada
- **Objetivo:** Manutenção do foco em tarefas longas com distrações progressivas.
- **Novas Atividades:**
    - `vigilante-noturno`: Monitorar estímulos sutis em cenário com baixa luminosidade ou ruídos visuais.
    - `pintura-em-etapas`: Tarefa de longa duração que exige seguir passos rigorosos.

### Fase 3F: Funções Executivas (Planejamento)
- **Objetivo:** Antecipação e tomada de decisão.
- **Novas Atividades:**
    - `organizador-de-mochila`: Planejar quais itens levar baseado em uma missão.
    - `ponte-de-blocos`: Resolver problemas de espaço e equilíbrio.

### Fase 3G-3J: Ajustes de Motor e Game Design
- **Refinamento do Feedback:** Implementar a redução de estímulos/complexidade no `MechanicRenderer` baseada no `adjustment` do `useNeuroAdaptive`.
- **Melhoria Visual:** Aplicação de padrões Kawaii/Pixar consistentes em todas as novas mecânicas.

## Detalhes Técnicos

- **Banco de Dados:** Reuso total de `activity_logs` e `child_skill_mastery`.
- **Registro:** Todas as novas atividades usarão `registerPerformance` para alimentar o motor adaptativo.
- **Variações:** Criação de 30 variações por nova categoria no `variations-extended.ts`.
- **Interface:** Implementação dos novos componentes no `src/routes/neuro-treino.$slug.tsx`.
- **Regras:** Preservação estrita do bloqueio de idade (8+ anos) e sistema de hiperfoco.

## Cronograma Interno de Execução
1. Atualização dos tipos e metadados em `variations.ts`.
2. Geração das variações de dados em `variations-extended.ts`.
3. Implementação dos componentes de interface em `neuro-treino.$slug.tsx`.
4. Registro final no catálogo e auditoria de integridade.
