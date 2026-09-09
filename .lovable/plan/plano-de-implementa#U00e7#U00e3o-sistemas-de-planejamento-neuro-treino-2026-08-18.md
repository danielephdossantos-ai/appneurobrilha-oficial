# Plano de Implementação: Sistemas de Planejamento Neuro-Treino e Alfabetização

## 1. Arquitetura de Dados (Supabase)
As tabelas existentes (`routine_items`, `neuro_plano`, `neuro_plano_itens`, `neuro_horarios`) serão reutilizadas e estendidas conforme necessário, sem duplicidade de atividades.

### Novas Estruturas / Modificações
- **Alfabetização:** Reutilizar `public.learning_trails` e `public.child_skill_mastery` para rastrear o domínio das 8 fases.
- **Rotina:** As tabelas de rotina serão configuradas para suportar os dois planos de forma isolada via coluna `source` ou similar.

## 2. Sistema 1: Plano Anual de Alfabetização (Primeiros Anos)
Transformar o `src/modules/primeiros-anos/` no motor definitivo de 40 semanas.

### Funcionalidades
- **Progressão Pedagógica:** Mapear as 8 fases (Prontidão → Escrita Inicial) vinculando aos módulos existentes (Aurora, Pip, Biblioteca, etc.).
- **Regra dos 6 anos:** Lógica no `builder.ts` para verificar `child_skill_mastery` antes de posicionar na trilha.
- **Motor de Domínio:** Integração com o histórico de desempenho para avançar ou oferecer reforço (variando atividades da mesma habilidade).

## 3. Sistema 2: Plano Neuro-Treino
Evoluir o `src/modules/neuro-plano/` para um orquestrador inteligente das 37 categorias.

### Funcionalidades
- **Orquestrador de Rotina:** Nova lógica de seleção baseada em:
  - Necessidade (Anamnese)
  - Desempenho (Mastery Score)
  - Fadiga (NeuroMetrics)
  - Tempo desde o último treino.
- **Interface Parental:** Configuração de horários, dias e lembretes (Web Push).
- **Filtro de Linguagem:** Garantir que termos clínicos (TEA, TDAH) nunca apareçam para o usuário (Mãe/Criança).

## 4. Interface e Experiência
- **Painel da Mãe:** Nova seção "MEU PLANO" em `src/routes/neuro-treino.configurar.tsx` ou rota dedicada, separando claramente Alfabetização e Neuro-Treino.
- **Visão da Criança:** Missão simplificada ("Missão de hoje").
- **Hiperfoco:** Injeção de contexto visual e narrativo nas missões selecionadas.

## 5. Notificações e Lembretes
- Integração real via `src/lib/push-notifications.ts` para PWA.
- Lembretes configuráveis por dia/horário para cada plano.

## Detalhes Técnicos
- **Motores:** Manter `NeuroAdaptiveCore` e `RewardRegulationEngine`.
- **Validação:** Testes automatizados para faixas etárias de 3 a 7 anos e cenários de dificuldade.
