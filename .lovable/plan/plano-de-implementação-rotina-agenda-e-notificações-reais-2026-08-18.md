# Plano de Implementação: Rotina, Agenda e Notificações Reais

O objetivo é transformar a tela de Rotina em um centro funcional de configuração e acompanhamento, com notificações reais via Web Push e integração direta com as atividades do aplicativo.

## 1. Configuração da Rotina
- Criar o componente `RoutineConfigDialog` para permitir que pais configurem a agenda diretamente na tela de Rotina.
- Parâmetros: dias da semana, horário, duração, tipo de atividade (vinculada a aulas reais), lembretes e status de ativação.
- Interface Kawaii seguindo o padrão visual do NeuroBrilha Kids.

## 2. Motor Pedagógico e Vínculo com Atividades Reais
- Mapear os tipos de atividade da rotina para rotas e funções reais do app:
  - **Estudo/Escola**: Vincula a `Escola Brilha` (bncc_code).
  - **Neuro-Treino**: Vincula a categorias específicas do `Neuro-Treino`.
  - **Escrita**: Vincula à `Rotina de Escrita`.
- Ao clicar em "Começar" na rotina, o app redirecionará para a atividade correta com contexto de retorno.

## 3. Sistema de Notificações Reais (PWA/Push)
- Implementar agendamento de notificações no banco de dados (`scheduled_notifications`).
- Criar um Edge Function / Server Route cron para disparar notificações via `web-push`.
- Garantir que ao editar um horário, a notificação antiga seja cancelada/substituída.
- Fluxo de permissão nativa: "Ativar Lembretes" solicita `Notification.requestPermission()`.

## 4. Acompanhamento e Status Real
- Sincronização automática: Quando uma aula é concluída, o sistema verifica se havia uma missão programada na rotina para aquele horário/tipo e marca como `concluido`.
- Estados visuais: Concluído (Verde), Em andamento (Amarelo), Próximo (Azul), Não iniciado (Cinza).

## Detalhes Técnicos
- **Banco de Dados**: Usar a tabela `routine_items` existente. Adicionar `metadata` JSONB para vínculos específicos (ex: `lesson_id`).
- **Push**: Utilizar o `sw-push.js` e a rota `/api/public/send-push` já existentes, expandindo para agendamentos.
- **Navegação**: Usar o `navigation-context.ts` para garantir que o usuário volte à rotina após a atividade.

## Critérios de Teste
- Configurar rotina para +2 minutos do horário atual e verificar se a notificação chega.
- Editar o horário e garantir que não receba notificações duplicadas.
- Concluir uma aula de matemática e verificar se o item da rotina correspondente foi marcado como concluído.
