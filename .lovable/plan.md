# Plano de Implementação: Rotina de Reforço e Relatórios Integrados

Este plano descreve as melhorias no módulo **Reforço Brilha** para garantir que a rotina de estudos seja persistida e que o progresso das aulas geradas por IA seja refletido nos relatórios pedagógicos dos pais.

## 1. Persistência da Rotina (Substituir ao trocar dificuldade)
Atualmente, as aulas são geradas, mas não há um registro explícito da "Dificuldade Atual" na agenda de estudos da criança que seja atualizado automaticamente.

- **Ação**: Ao gerar uma nova aula de reforço via IA, atualizar (ou inserir) um registro na tabela `study_agenda` marcado como tipo `reforco_ia`.
- **Lógica**: Se já existir um tópico de reforço ativo para a criança, ele será substituído pelo novo, garantindo que a "Rotina Livre" mostre sempre o foco atual.

## 2. Registro de Progresso do Reforço
As aulas de reforço IA são visualizadas no `AulaViewer.tsx`, mas a conclusão não gera um log de progresso que o sistema de relatórios consiga ler.

- **Ação**: Criar uma função para registrar a conclusão da aula de reforço na tabela `escola_progresso` (ou uma tabela similar compatível com o gerador de relatórios).
- **Mapeamento**:
    - `codigo_bncc`: Será preenchido com `REFORCO_[Dificuldade]`.
    - `nota` / `percentual`: Calculado com base na interação (simulado como 100% ao concluir todos os capítulos).
    - `tempo_estudado_segundos`: Cronometrado durante a visualização da aula.

## 3. Integração no Relatório Completo
Atualizar o coletor de dados do relatório para incluir as atividades de reforço.

- **Ação**: Modificar `src/modules/parental/relatorio-completo.ts` para buscar registros que comecem com `REFORCO_` e exibi-los em uma seção destacada ou integrá-los na contagem de "Aulas Concluídas".

## Detalhes Técnicos
- **Frontend**: Adicionar evento `onComplete` no `AulaViewer.tsx` que dispara a gravação no banco.
- **Backend/Functions**: Adicionar lógica de "Upsert Agenda" no `gerarAulaReforcoIA`.
- **Database**: Utilizar a tabela `escola_progresso` para manter compatibilidade com o dashboard atual.

---
**Confirmar edição para iniciar a implementação.**
