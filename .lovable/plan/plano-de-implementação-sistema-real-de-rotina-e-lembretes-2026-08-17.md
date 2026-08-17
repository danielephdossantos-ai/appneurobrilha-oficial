# Plano de Implementação: Sistema Real de Rotina e Lembretes

Este plano visa transformar a atual tela de demonstração "Rotina de Hoje" em uma funcionalidade real, integrada ao backend e com suporte a notificações PWA.

## 1. Banco de Dados (Supabase)
Criar estrutura para persistência da rotina personalizada e notificações.

- **Tabela `routine_items`**:
  - `id` (uuid)
  - `child_id` (uuid, fk children)
  - `parent_id` (uuid, fk auth.users)
  - `title` (text)
  - `description` (text, opcional)
  - `type` (enum: estudo, terapia, lazer, etc)
  - `start_time` (time)
  - `duration_minutes` (int)
  - `date` (date, opcional para itens pontuais)
  - `recurrence_days` (int[], 0-6)
  - `reminder_enabled` (boolean)
  - `reminder_minutes_before` (int)
  - `status` (enum: pendente, concluido, atrasado)
  - `source` (text: manual, minha_jornada, etc)
  - `source_id` (text, opcional para linkar com atividades)
  - `created_at`, `updated_at`

- **Tabela `push_subscriptions`** (Já existe, mas garantir suporte a múltiplos dispositivos).

## 2. Lógica de Backend (Server Functions)
- `getRoutineItems`: Busca itens para um dia específico, mesclando rotina manual e pedagógica (Minha Jornada).
- `saveRoutineItem`: Cria ou atualiza um item de rotina.
- `deleteRoutineItem`: Remove um item.
- `toggleRoutineItemStatus`: Marca como concluído/pendente.
- `scheduleNotification`: (Opcional se usarmos o Service Worker localmente ou Edge Function para push remoto).

## 3. Interface da Área dos Pais (Gestão)
- Nova seção "Gerenciar Rotina" no painel dos pais.
- Formulário de adição/edição com campos solicitados (Título, Horário, Duração, Tipo, Repetição).
- Calendário para visualização de diferentes dias.
- Configurações de Notificações (Ativar/Desativar, tipos de lembretes).

## 4. Interface da Criança (Visualização e Ação)
- Refatorar `src/routes/rotina.tsx` para carregar dados reais.
- Implementar indicadores de estado (Pendente, Concluído, Próximo, Atrasado).
- Ação ao clicar: Iniciar atividade (se pedagógica) ou abrir detalhes/conclusão.
- Sistema de "Sugestão Inteligente" real baseado em horários livres e plano pedagógico.

## 5. Notificações e PWA
- Solicitação de permissão clara e contextualizada.
- Integração com `src/lib/push-notifications.ts` e `sw.js`.
- Mecanismo de agendamento de notificações.

## Detalhes Técnicos
- **Repetição**: Armazenada como array de dias da semana (0-6).
- **Integração Pedagógica**: A rotina consultará a "Minha Jornada" para preencher lacunas ou exibir o que já está planejado.
- **Isolamento**: RLS rigoroso por `child_id` e `parent_id`.
- **Feedback**: Mascote (Mentor IA) comentando a rotina.

## Testes
- CRUD completo de rotina.
- Verificação de cronograma em diferentes dias.
- Recebimento de notificação PWA.
- Sincronização de progresso atividade <-> rotina.
