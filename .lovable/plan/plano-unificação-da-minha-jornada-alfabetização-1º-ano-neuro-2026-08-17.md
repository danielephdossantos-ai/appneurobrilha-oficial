# Plano: Unificação da "Minha Jornada" (Alfabetização + 1º Ano + Neurotreino)

Este plano unifica o **1º Ano**, o **Plano Anual de Alfabetização** e o **Plano Neuro** em uma única jornada diária estilo trilha estilo Duolingo, garantindo progressão pedagógica coesa.

## Mudanças

### Infraestrutura e Lógica de Negócio
- Criar `src/lib/jornada/motor-jornada.ts` para gerenciar a seleção de missões diárias.
- Implementar regra de idade (Neurotreino apenas para menores de 8 anos).
- Integrar com `escola_progresso` para rastrear conclusões de missões BNCC.

### Interface do Usuário (UI)
- Adicionar "Minha Jornada" à Cidade Mágica (Home).
- Criar rota `/minha-jornada` com trilha visual vertical dinâmica.
- Usar `MundoTrilha` para permitir que a criança troque o fundo da jornada.
- Implementar travas visuais (missão seguinte bloqueada até concluir a anterior).

### Persistência
- Utilizar tabelas existentes (`escola_progresso`, `children_profiles`) para evitar redundância.
- (Opcional) Criar `jornada_unificada` para sequenciamento customizado por data.

## Detalhes Técnicos
- O motor prioriza a ordem: **Neuro (Cognitivo) -> Alfabetização (Leitura/Escrita) -> Escola Brilha (Geral/Matemática)**.
- Navegação integrada: ao clicar em uma missão, o contexto de origem é salvo para retorno automático à jornada após a atividade.
- Suporte total a dispositivos móveis com empilhamento vertical e botões grandes.
