# Project Memory

## BNCC
Só criar aulas com códigos que existem em `bncc_habilidades`. Validar antes de criar arquivos em `src/escola-brilha/data/`.

## Core
Toda aula segue o Sistema de Ensino Digital: equipe pedagógica completa, progressão por idade, multimodal, Professor Digital explica no feedback, avaliação inteligente, Regra de Ouro (nada só para ocupar espaço).
Padrão visual TRAVADO: Ilustração 2D kawaii/Pixar, cores vibrantes, sombras cel-shading, fundo transparente. Proibido emoji cru, ícones genéricos, fotos, 3D realista, flat/material.
Educação Infantil e 1º Ano: imagens, nunca palavras escritas.
Ed. Infantil, 1º e 2º ano: toda categoria vira jogo visual interativo.
Contas +/− nessa faixa: animação visual via `OperacaoVisual`.
Aula EF01MA02 é gabarito TRAVADO.
**Geografia 2º Ano**: aplica Regra de Ouro de UI (nenhum texto estático >2 linhas; explicação ativada por clique + áudio + feedback animado; listas viram grids/sliders/drag/carrossel/modal). Evolução pedagógica: Comparar → Explicar → Relacionar → Interpretar → Resolver.
**Toda unidade nova**: trocar as ideias das atividades (não reciclar mecânica da unidade anterior) e revisar 1 a 1 se cada `imagemUrl` bate com o texto da opção/pista. Formato de tela NUNCA muda. Ver [Nova unidade — atividades e imagens](mem://preferences/nova-unidade-atividades-e-imagens).
**Esqueleto de 11 blocos é FIXO** (Motivação → Previsão → Vocabulário → Leitura guiada → Compreensão → Personagens & lugar → Sequência → Você lê → Minijogo → Revisão → Avaliação). O que MUDA a cada unidade é o formato/mecânica DENTRO de cada bloco, como livro didático. Antes de escrever unidade nova, listar qual formato novo cada bloco vai usar. Ver [Esqueleto fixo, formato varia](mem://preferences/esqueleto-fixo-formato-varia).
**SPEB 1.0 — Cláusula 14 (fluxo oficial de cursos novos)**: todo curso novo segue 3 fases obrigatórias com aprovação — (1) Arquitetura do Curso, (2) Mapa Mestre (35 aulas planejadas), (3) Produção U1→U7. Proibido produzir aulas isoladas. 16 momentos por aula. Ver [SPEB Cláusula 14](mem://preferences/speb-clausula-14-fluxo-producao).

## Memories
- [Sistema de Ensino Digital](mem://preferences/sistema-ensino-digital) — Framework mestre.
- [Postura de professor excelente](mem://preferences/postura-professor-excelente) — Mapa idade × série.
- [Padrão EF01MA02 travado](mem://features/padrao-ef01ma02) — Gabarito obrigatório.
- [Atividades formato jogo](mem://features/atividades-formato-jogo) — EI/1º/2º vira jogo.
- [Contagem tocando](mem://features/tap-count-group) — TapCountGroup.
- [Contas +/− animadas](mem://features/operacao-visual) — OperacaoVisual.
- [Formato por disciplina](mem://preferences/formato-por-disciplina) — Mecânica por disciplina.
- [Geografia 2º Ano UI interativa](mem://preferences/geo-2ano-ui-interativa) — Regra de Ouro de UI + 5 movimentos pedagógicos.
- [Blocos aditivos por disciplina](mem://preferences/blocos-aditivos) — Novos tipos de bloco/minijogo são PERMITIDOS quando aditivos ao player padrão (referência: `LaboratorioClima`).
- [Diploma padrão + coleção de mascotes](mem://preferences/diploma-padrao-e-colecao-mascotes) — DiplomaBrilha fixo (Esquilo Brilha + 1 mascote colecionável); personagens (Aurora, ...) sempre puxam do mapa PERSONAGENS.
- [Geografia 3º–9º player custom (exceção)](mem://constraints/geografia-3ao9-player-custom) — Única exceção ao padrão visual único: Geografia do 3º ao 9º pode ter cenas próprias. Fazer cena por cena com aprovação.
- [Geografia 5º Ano TRAVADA](mem://constraints/geografia-5ano-travada) — Proibido modificar `geografia-5ano/**`.
- [Geografia INTEIRA TRAVADA](mem://constraints/geografia-travada) — Toda a disciplina Geografia (Infantil ao 9º Ano, incluindo v2) está aprovada. Proibido editar sem pedido explícito com "destravar geografia".
