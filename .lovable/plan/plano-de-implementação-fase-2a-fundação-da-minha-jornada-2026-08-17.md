# Plano de Implementação: Fase 2A — Fundação da Minha Jornada

Este plano estabelece a infraestrutura base para o orquestrador "Minha Jornada", sem alterar motores existentes ou migrar dados. O foco é criar o contrato universal, o banco de dados e o motor de orquestração.

## 1. Banco de Dados (Supabase)
Criar a tabela `jornada_unificada` para servir como o Single Source of Truth da ordem de execução das atividades.

- **Tabela:** `public.jornada_unificada`
- **Campos:** `id` (uuid), `child_id` (uuid), `source` (text), `source_id` (text), `activity_type` (text), `title` (text), `skill_id` (text), `bncc_code` (text), `priority_score` (int), `priority_reason` (text), `scheduled_date` (date), `week` (int), `sequence_order` (int), `duration` (int), `status` (text: pending, completed, skipped), `metadata` (jsonb).
- **Segurança:** RLS habilitado, permissões para `authenticated` e `service_role`.
- **Índices:** `child_id`, `scheduled_date`, `status`, `source`, `source_id`.

## 2. Tipagem e Contratos (Frontend/Backend)
Definir as interfaces que todos os motores deverão seguir ao enviar recomendações para a Minha Jornada.

- **Arquivo:** `src/modules/minha-jornada/types.ts`
- **Conteúdo:** Interface `JornadaItem` e `JornadaSource` (enum).

## 3. Orquestrador Core
Desenvolver a lógica central que recebe dados dos motores especialistas e os organiza na fila única.

- **Arquivo:** `src/lib/minha-jornada-orquestrador.ts`
- **Funções:**
    - `gerarMinhaJornada(childId)`: Ponto de entrada.
    - `adicionarItemJornada(item)`: Com lógica de deduplicação (source + source_id + child_id).
    - `validarRegraIdade(childId, source)`: Respeita a regra de Neuro-Treino (idade < 8).
    - `calcularPrioridadeFinal(itens)`: Estrutura para ordenar por data, ordem e score.

## 4. Testes de Fundação
Validar a lógica do orquestrador isoladamente.

- **Arquivo:** `src/lib/minha-jornada.test.ts`
- **Cenários:**
    - Criação de itens preservando identificadores originais.
    - Prevenção de duplicidade.
    - Bloqueio de Neuro-Treino para crianças de 8+ anos.
    - Ordenação correta por prioridade.

## Detalhes Técnicos
- Não há alteração nos arquivos `src/modules/curriculo-anual`, `src/modules/primeiros-anos` ou `src/modules/neuro-plano`.
- A navegação continuará usando o sistema de `originRoute` já implementado para retornar à Jornada após uma atividade.
- O orquestrador será agnóstico: ele apenas processa o que lhe é enviado, sem saber *como* a aula foi gerada.
