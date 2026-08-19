# Unificação Definitiva: Professor Mentor NeuroBrilha

Este plano detalha a unificação do motor de geração de aulas da **Escola Brilha** sob a arquitetura canônica do **Professor Mentor**, garantindo consistência pedagógica, reuso via cache e suporte a `lousaPassos` em todo o aplicativo.

## Mudanças

### Motor Pedagógico (`src/lib/aulas-continuas.functions.ts`)
- Refatorar `gerarAulaGemini` para atuar como um wrapper da função `chamarProfessorMentor`.
- Substituir o prompt local pelo motor centralizado.
- Integrar a persistência canônica (`persistirAulaMentor`) para salvar em `rb_aulas` e `rb_paginas_aula`.
- Manter o registro em `aulas_geradas` (tabela de cache/indexação) para compatibilidade com o seletor de aulas da Escola Brilha.

### Persistência (`src/lib/professor-mentor-persistence.server.ts`)
- Adicionar suporte opcional ao `codigoBNCC` na persistência para que aulas geradas pela Escola Brilha sejam corretamente indexadas e recuperadas.

### Visualização (`src/components/reforco-brilha/AulaViewer.tsx`)
- Garantir que a lógica de carregamento suporte IDs provenientes tanto do fluxo de Reforço quanto do fluxo BNCC.

## Detalhes Técnicos
- O `AulaViewer` já possui o sistema de retry implementado para evitar falhas de persistência assíncrona.
- A unificação remove a divergência onde a Escola Brilha ignorava a "Regra da Lousa" e o "Ensino Explícito" do Professor Mentor.
- O cache será compartilhado: se uma aula de frações for gerada no Reforço, ela poderá ser sugerida na Escola Brilha se o tópico e nível coincidirem.
