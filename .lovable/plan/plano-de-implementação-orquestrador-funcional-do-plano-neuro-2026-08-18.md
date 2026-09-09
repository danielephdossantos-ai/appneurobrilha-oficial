# Plano de Implementação: Orquestrador Funcional do Plano Neuro-Treino

Transformar o "Meu Plano" em uma camada real de organização que consome, executa e registra atividades do Neuro-Treino, garantindo sessões contínuas sem interrupção.

## 1. Conexão com Atividades Reais
- O plano não gerará "aulas fictícias". Ele consultará as 37 categorias em `src/data/neuro-treino/variations.ts`.
- Cada item do plano terá referência obrigatória ao `slug` da categoria.
- O botão "Começar" no plano navegará para `/neuro-treino/$slug` injetando o contexto de sessão.

## 2. Fluxo de Sessão Contínua
- **Navegação Inteligente**: Usar `NavigationStore` (zustand) para salvar o estado da sessão (lista de slugs pendentes, índice atual).
- **Finalização de Atividade**: Alterar `src/routes/neuro-treino.$slug.tsx` para detectar se faz parte de um plano.
- **Botão Continuar**: Se houver próxima atividade no plano, exibir um modal de "Missão Cumprida!" com o botão "Próxima Atividade" que abre a próxima sem voltar ao menu.

## 3. Motor Pedagógico e Adaptativo
- **Integração useNeuroAdaptive**: O plano usará o `masteryScore` e o `performance` real da criança (Supabase) para decidir se mantém ou avança a dificuldade.
- **Deduplicação**: Lógica no orquestrador para evitar repetir o mesmo slug/atividade em janelas de 3 dias, a menos que haja necessidade pedagógica.

## 4. Área dos Pais (Rotina)
- Sincronização automática entre `neuro_plano_itens` e `routine_items`.
- Interface na área dos pais para configurar horários e dias da semana, refletindo nas notificações PWA existentes.

## Detalhes Técnicos
- **Persistence**: Atualizar `ItemNeuroSalvo` em `src/modules/neuro-plano/persist.ts` para incluir metadados da sessão ativa.
- **Frontend**: Criar componente `ActiveSessionOverlay.tsx` para gerenciar a transição entre atividades.
- **SEO/Metadata**: Garantir que as rotas de plano tenham head tags únicas.

---
**Critério de Aceite**: O teste de 15 passos descrito na solicitação deve passar integralmente no preview.
