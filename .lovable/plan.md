# Nova Anamnese Científica - NeuroBrilha Kids

## Visão geral
Substituir a anamnese atual (curta, 7 seções simples) por uma triagem científica completa em **16 etapas**, com pontuação multi-perfil, classificação por níveis de risco (verde/amarelo/laranja/vermelho) e geração de relatório PDF. Sem diagnóstico — apenas triagem.

## Estrutura técnica

### 1. Schema de dados (`src/modules/anamnese/types/v2.ts`)
- Tipo `AnamneseV2` com 16 sub-objetos (identificacao, gestacao, marcos, medico, familiar, escolar, atencao, hiperatividade, comunicacao, repetitivos, sensorial, linguagem, memoria, motora, emocional, autonomia).
- Escala Likert 0-4 reutilizável nas etapas comportamentais (7, 8, 9, 10, 11, 15).
- Validação com Zod por etapa (permite salvar parcial).

### 2. Banco de dados
Nova migration:
- Tabela `anamnese_v2` (child_id, current_step, responses JSONB, scores JSONB, risk_levels JSONB, completed BOOL, created_at, updated_at).
- RLS por `auth.uid()` via `children.user_id`.
- GRANTs para `authenticated` e `service_role`.
- Manter `child_anamnesis` antiga intacta (legado).

### 3. Motor de pontuação (`src/modules/anamnese/engine/ScoringEngine.ts`)
Gera 5 perfis (0-100):
- **Cognitivo**: atenção + memória + funções executivas
- **Escolar**: leitura + escrita + matemática
- **Comportamental**: hiperatividade + impulsividade + repetitivos
- **Socioemocional**: comunicação social + emocional
- **Adaptativo**: autonomia + motor + sensorial

Classificação por área:
- Verde (0-25% indicadores), Amarelo (26-50%), Laranja (51-75%), Vermelho (76-100%).

Indicadores de atenção cruzados (ex: marcos atrasados + histórico familiar TEA → flag específica, sem diagnóstico).

### 4. UI - Wizard de 16 etapas (`src/routes/anamnese.$childId.tsx`)
Refatorar a rota existente:
- Componente `<AnamneseWizard>` com `<StepIndicator>` (barra de progresso 1/16).
- Cada etapa = componente próprio em `src/modules/anamnese/steps/` (Step01Identificacao…Step16Autonomia).
- Componentes reutilizáveis: `<LikertScale>`, `<YesNoField>`, `<NumberField>`, `<DateField>`.
- Botões: Voltar / Salvar e continuar depois / Próxima.
- Salvamento automático (debounce 1s) no `anamnese_v2`.
- Retomar de onde parou via `current_step`.
- Banner fixo no topo: aviso de "não é diagnóstico".
- Mobile-first (Tailwind, layouts em coluna única).

### 5. Tela de resultados (`src/routes/anamnese.$childId.resultado.tsx`)
- 5 cards de perfil com barra de progresso + selo de cor (verde/amarelo/laranja/vermelho).
- Gráfico radar (recharts) dos 5 perfis.
- Lista de áreas de maior atenção.
- Recomendações educacionais por área (texto pré-definido por nível).
- Orientação de busca profissional quando houver laranja/vermelho.
- Botão "Baixar relatório em PDF".

### 6. Geração de PDF (`src/lib/anamnese-pdf.ts`)
- Cliente: usar `jspdf` + `jspdf-autotable` (já cabíveis no bundle, sem servidor).
- Conteúdo: capa com dados da criança, resumo por etapa, tabela de pontuações, gráfico (canvas → imagem), recomendações, rodapé com aviso legal.
- Download direto pelo navegador.

### 7. Integração com app existente
- Atualizar `useAppState.saveAnamnesis` para gravar também em `anamnese_v2` (mantém compatibilidade).
- `AnamnesisProcessor.process()` recebe um adaptador que mapeia `AnamneseV2 → InternalProfile` (alimenta perfil pedagógico, flags e níveis).
- Botão na home da criança: "Refazer anamnese completa" leva ao novo wizard.

## Detalhes técnicos

**Stack**: TanStack Start (rotas), TanStack Query (cache), Supabase (persistência), Zod (validação), Tailwind + shadcn/ui (UI), Recharts (gráfico radar), jsPDF (relatório).

**Arquivos novos** (~20):
- `src/modules/anamnese/types/v2.ts`
- `src/modules/anamnese/engine/ScoringEngine.ts`
- `src/modules/anamnese/engine/RiskClassifier.ts`
- `src/modules/anamnese/engine/RecommendationEngine.ts`
- `src/modules/anamnese/steps/Step01..Step16.tsx`
- `src/modules/anamnese/components/AnamneseWizard.tsx`
- `src/modules/anamnese/components/LikertScale.tsx`
- `src/modules/anamnese/components/StepIndicator.tsx`
- `src/modules/anamnese/components/DisclaimerBanner.tsx`
- `src/modules/anamnese/hooks/useAnamneseV2.ts`
- `src/lib/anamnese-pdf.ts`
- `src/routes/anamnese.$childId.resultado.tsx`

**Arquivos modificados**:
- `src/routes/anamnese.$childId.tsx` (substituir conteúdo pelo wizard)
- `src/modules/neuro-treino/engine/AnamnesisProcessor.ts` (adicionar adapter v2)
- `src/core/store.ts` (suportar v2)

**Migration**: 1 nova tabela `anamnese_v2`.

**Dependências novas**: `jspdf`, `jspdf-autotable`.

## Fora de escopo (a confirmar)
- Não vou remover a anamnese antiga do banco (legado preservado).
- Não vou adicionar fluxo do profissional/terapeuta validar respostas.
- Sem envio do PDF por email (apenas download).

Posso seguir com essa implementação?
