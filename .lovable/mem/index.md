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
**CONTRATO Matemática 3º ano+ — atividade segue a explicação, não o contrário**: formato visual é escolhido pelo CONTEÚDO, nunca por default. Sequências/ordenar/comparar/arredondar → linha/lista dos termos. Numeração/valor posicional/soma/subtração armada → casas de valor quando fizer sentido. Multiplicação 5º–9º/EM → conta armada real com parciais e deslocamentos, NUNCA tabuada automática. Divisão 5º–9º/EM → chave tradicional. Tabuada só se o tema explícito for tabuada/fato básico. Geometria → figura com vértices/medidas/ângulos. Estatística → gráfico real. Medidas → instrumento real. Frações → figura repartida. Antes de escrever/editar `exemploReal` ou `momento05_modelagem`, checar se o visual ensina a matemática pedida. Ver [Matemática formato por conteúdo](mem://preferences/matematica-formato-por-conteudo).
**Geografia 2º Ano**: aplica Regra de Ouro de UI (nenhum texto estático >2 linhas; explicação ativada por clique + áudio + feedback animado; listas viram grids/sliders/drag/carrossel/modal). Evolução pedagógica: Comparar → Explicar → Relacionar → Interpretar → Resolver.
**Toda unidade nova**: trocar as ideias das atividades (não reciclar mecânica da unidade anterior) e revisar 1 a 1 se cada `imagemUrl` bate com o texto da opção/pista. Formato de tela NUNCA muda. Ver [Nova unidade — atividades e imagens](mem://preferences/nova-unidade-atividades-e-imagens).
**Esqueleto de 11 blocos é FIXO** (Motivação → Previsão → Vocabulário → Leitura guiada → Compreensão → Personagens & lugar → Sequência → Você lê → Minijogo → Revisão → Avaliação). O que MUDA a cada unidade é o formato/mecânica DENTRO de cada bloco, como livro didático. Antes de escrever unidade nova, listar qual formato novo cada bloco vai usar. Ver [Esqueleto fixo, formato varia](mem://preferences/esqueleto-fixo-formato-varia).
História 2º Ano: cada tema/palavra central precisa aparecer com imagem concreta + explicação direta na tela, não só texto ou palavra clicável.
**PT-BR obrigatório em imagens**: mapas, infográficos e qualquer texto embutido em imagem gerada devem estar 100% em português brasileiro — nunca inglês. Ver [Português somente](mem://constraints/portugues-somente).

## Memories
- [Sistema de Ensino Digital](mem://preferences/sistema-ensino-digital) — Framework mestre.
- [Postura de professor excelente](mem://preferences/postura-professor-excelente) — Mapa idade × série.
- [Padrão EF01MA02 travado](mem://features/padrao-ef01ma02) — Gabarito obrigatório.
- [Atividades formato jogo](mem://features/atividades-formato-jogo) — EI/1º/2º vira jogo.
- [Contagem tocando](mem://features/tap-count-group) — TapCountGroup.
- [Contas +/− animadas](mem://features/operacao-visual) — OperacaoVisual.
- [Sondagem conectada à adaptação](mem://features/sondagem-conectada-adaptacao) — Sondagem define nível de apoio das aulas e é recalibrada pela nota.
- [Formato por disciplina](mem://preferences/formato-por-disciplina) — Mecânica por disciplina.
- [Geografia 2º Ano UI interativa](mem://preferences/geo-2ano-ui-interativa) — Regra de Ouro de UI + 5 movimentos pedagógicos.
- [Blocos aditivos por disciplina](mem://preferences/blocos-aditivos) — Novos tipos de bloco/minijogo são PERMITIDOS quando aditivos ao player padrão (referência: `LaboratorioClima`).
- [Diploma padrão + coleção de mascotes](mem://preferences/diploma-padrao-e-colecao-mascotes) — DiplomaBrilha fixo (Esquilo Brilha + 1 mascote colecionável); personagens (Aurora, ...) sempre puxam do mapa PERSONAGENS.
- [Geografia 3º–9º player custom (exceção)](mem://constraints/geografia-3ao9-player-custom) — Única exceção ao padrão visual único: Geografia do 3º ao 9º pode ter cenas próprias. Fazer cena por cena com aprovação.
- [Geografia 5º Ano TRAVADA](mem://constraints/geografia-5ano-travada) — Proibido modificar `geografia-5ano/**`.
- [Geografia INTEIRA TRAVADA](mem://constraints/geografia-travada) — Toda a disciplina Geografia (Infantil ao 9º Ano, incluindo v2) está aprovada. Proibido editar sem pedido explícito com "destravar geografia".
- [História 2º Ano visual + explicação](mem://preferences/historia-2ano-visual-explicacao) — Tema central sempre com imagem concreta e explicação visível.
- [Ciências INTEIRA TRAVADA](mem://constraints/ciencias-travada) — Toda a disciplina Ciências (1º ao 9º Ano) está aprovada. Proibido editar `ciencias-*ano/**` sem pedido explícito.
- [Contrato Ler com Aurora — Fases 6/7/8 + Transversais](mem://preferences/contrato-ler-com-aurora-fases-6-8) — Escopo TRAVADO. Ordem: F6 → F7 → F8 → Diagnóstico Dia 0 → Painel Adulto. Sempre entregar em lotes de 1 semana (5 missões) para validação.
- [Contrato Educação Infantil Completa](mem://preferences/contrato-educacao-infantil-completa) — Fase 1: Matemática → Ciências → Arte → Inglês (Maternal→PréI→PréII, 20 missões cada). Fase 2: Corpo e Socioemocional reaproveitando o que já existe. Entrega: 5 missões por vez.
- [Contrato Contar com Pip](mem://preferences/contrato-contar-com-pip) — Trilha de matemática inicial (3-6a) em 8 fases (Subitizing → Contagem 1-a-1 → Cardinalidade+numeral → Linha numérica → Ten-frame → Comparação → Soma/subtração visual → Problemas em história). 20 missões/fase, entrega 5 por vez, anamnese decide fase inicial, hard-lock.
- [English Kids — cadência](mem://features/ingles-kids-cadencia) — Ano 1 (4a): 2 aulas/semana (ter/qui), 64 aulas. Ano 2 (5a): 1 aula/semana, 32 aulas. Não acelerar.
- [EI = só leitura + matemática + inglês](mem://constraints/ei-somente-leitura-mat-ingles) — Educação Infantil TRAVADA em 5 trilhas: Biblioteca Encantada, Aventura com Pip, Ler com Aurora (F1-F8), Contar com Pip, English Kids. Proibido criar Arte/Ciências/Natureza/Ed. Física para EI.
- [Neuro Treino só p/ DEFTHS](mem://constraints/neuro-treino-so-defths) — Aulas de Apoio é universal. Neuro Treino só recomendar quando anamnese indica atraso/deficiência; a partir do 2º ano sem sinais, ocultar seções terapêuticas.
- [Plano reforma Neuro Treino](mem://features/neuro-treino-auditoria-plano) — Contrato de 6 passos pós-auditoria: (1) integrar Biblioteca Encantada como PECS/TEACCH, (2) trilha Dislexia Orton-Gillingham, (3) grupo Discalculia, (4) ligar adjustment aos jogos, (5) unificar métricas, (6) prompting ABA com fading.

- [Sem releitura na Biblioteca Alfa](mem://constraints/sem-releitura-repetida) — Currículo de 4 anos (3–7a). Sem "Ler de novo" nem contador de leituras. Cada visita à biblioteca oferece história nova.
- [Escola Brilha níveis 1-4 por ano](mem://features/escola-brilha-niveis) — Cada série do Escola Brilha terá 4 níveis internos (mais conteúdo por ano). Ainda não implementado.
- [Contrato Auditoria Matemática](mem://features/contrato-auditoria-matematica) — Parte 1: melhorias no 8º U1 aulas 02–07 (um turno). Parte 2: auditoria matemática pura 3º→4º→5º→6º, uma série por turno, tabela de erros antes de corrigir.
- [Contrato Português 1º ano — Plano de Edição](mem://features/contrato-portugues-1ano) — 5 fases pós-auditoria: (1) motor adaptativo real no player com ≥70% e reensino, (2) unidade de consciência fonêmica com áudio, (3) bloco de escrita (traçado, ditado com sílabas móveis, lista/bilhete na U4), (4) 4 alternativas com distratores plausíveis, (5) revisão espaçada de 3 itens no início de cada aula.
- [Contrato Português 2º ano — Nivelamento](mem://features/contrato-portugues-2ano) — 7 fases para levar "A Biblioteca Encantada" ao padrão do 1º ano: (1) adaptativo dica/reensino + gate 70%, (2) avaliações com 4 alternativas, (3) bloco de escrita/ditado, (4) fluência por releitura, (5) fonologia avançada + palavras teimosas + ortografia do ano, (6) variedade de interação e ensino visual, (7) sondagem, práticas curriculares e BNCC EF02LP02/05.
- [Contrato Português 3º ano — Nivelamento](mem://features/contrato-portugues-3ano) — 7 fases para "O Clube dos Detetives da Palavra": (1) adaptativo dica/reensino + gate 70% ✅, (2) avaliações 4 alternativas, (3) escrita, (4) fluência 90 ppm, (5) ortografia/palavras teimosas, (6) ensino visual, (7) sondagem + BNCC.
