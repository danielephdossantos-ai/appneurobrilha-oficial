
# Reconstrução do Escola Brilha

Vamos apagar toda a lógica antiga da Escola Brilha e reconstruir uma arquitetura nova, simples e focada em qualidade pedagógica. Nada do resto do app é tocado (login, crianças, pais, gamificação, progresso, agenda, PEI, NeuroTreino, Reforço Brilha e as 1.451 habilidades BNCC continuam intactas).

## Princípios

1. Pedagogia primeiro, código depois. Cada aula é escrita para ensinar de verdade, não para preencher um schema.
2. Uma aula = um arquivo. Sem builders, pipelines, validators, repositories ou serviços em camadas.
3. Uma única fonte de verdade: a tabela `escola_aulas` (nova), indexada por código BNCC.
4. Visual atual do app é preservado (mesmos cards, mesma navegação, mesmo player).

## O que será excluído

Rotas / componentes / libs antigos do Escola Brilha:
- Qualquer código que ainda referencie `lesson_content`, `lesson_examples`, `lesson_drafts`, `lesson_quizzes`, `lesson_challenges`, `lesson_adaptations`, `lesson_explanations`, `lesson_reviews_full`, `lesson_assessments`, `lesson_curiosities`, `lesson_versions`, `lesson_cache`, `pedagogical_lessons_cache`.
- Antigos "LessonService", "DraftBuilder", "LessonPublisher", "PedagogicalContentValidator", "BnccLessonMapper", "LessonBlueprint", "LessonContract", "LessonContentPlayer" e o restante dessa camada.
- Edge functions de geração antigas (se sobrar alguma).
- Rotas admin de geração/importação/publicação/produção da biblioteca antiga.

Banco: as tabelas antigas de aula ficam sem uso e podem ser dropadas em uma migração de limpeza (sem tocar em `bncc_habilidades`, `aulas_bncc` e nada fora do domínio Escola Brilha).

## O que será preservado (não tocar)

- `bncc_habilidades` (1.451) e `aulas_bncc` como guia de escopo.
- Todo o resto do app: auth, `children`, `profiles`, `parent_profiles`, gamificação (`user_mascots`, coins, XP), agenda, PEI, NeuroTreino, Reforço Brilha, Missão Prova/Tarefa/Trabalho, Jornada 365.
- Visual: cards de entrada, cores, tipografia, Pip/Pipa, layout mobile.

## Nova arquitetura (mínima)

```text
src/escola-brilha/
  data/                    # aulas escritas à mão, 1 arquivo por habilidade
    EF01MA01.ts
    EF01LP01.ts
    ...
  types.ts                 # tipo Aula (13 blocos pedagógicos fixos)
  registry.ts              # mapa { codigoBncc -> Aula } gerado por import.meta.glob
  useAula.ts               # hook simples: pega aula pelo código
  player/
    AulaPlayer.tsx         # renderiza os 13 blocos, um por tela
    blocos/                # 1 componente por bloco (Objetivo, Introdução, ...)
src/routes/
  escola-brilha.tsx        # catálogo (anos → disciplinas → habilidades)
  escola-brilha.$codigo.tsx  # player da aula
```

Nova tabela (opcional, só para progresso do aluno na aula):

```text
escola_progresso
  id uuid pk
  child_id uuid fk children
  codigo_bncc text
  bloco_atual int
  concluida bool
  updated_at timestamptz
```

Com RLS + GRANT, escopo por `child_id → auth.uid()`. Nenhum conteúdo pedagógico no banco — o conteúdo vive no código (versionado, revisável, com PR).

## Estrutura fixa de cada aula (13 blocos)

Objetivo → Introdução → Explicação → Exemplo → Exemplo do cotidiano → Prática guiada → Prática independente → Curiosidade → Desafio → Resumo → Revisão → Quiz → Resultado.

O tipo `Aula` obriga esses 13 campos. Sem eles, o TypeScript recusa. Sem gerador automático, sem "genérico".

## Fluxo de trabalho pedagógico

1. Escolhemos uma habilidade BNCC (ex.: `EF01MA01`).
2. Escrevemos `EF01MA01.ts` juntos, bloco a bloco, com texto real e exemplos reais.
3. Revisamos no player (`/escola-brilha/EF01MA01`).
4. Só depois vamos para a próxima. Sem lote, sem IA gerando aula pronta.

## Detalhes técnicos

- Registry: `const modules = import.meta.glob('./data/*.ts', { eager: true })` → mapa por código.
- Catálogo: lista habilidades a partir de `bncc_habilidades` e marca quais já têm aula no registry (`disponivel: true/false`).
- Player: mesmo visual atual (Pip/Pipa, coins ao concluir bloco, TTS já existente via `useDeviceTTS`).
- Progresso: escreve em `escola_progresso` a cada bloco concluído; ao terminar o bloco 13, dispara `add_brilhocoins` existente.
- Sem cache no banco. Sem versões. Se uma aula muda, muda o arquivo.

## Entregas por etapa

1. Limpeza: remover rotas/libs/edge functions antigos e migração para dropar tabelas `lesson_*` não usadas.
2. Fundação nova: `types.ts`, `registry.ts`, `AulaPlayer.tsx`, 13 componentes de bloco, rotas `escola-brilha` e `escola-brilha.$codigo`.
3. Tabela `escola_progresso` + integração com gamificação existente.
4. Primeira aula real escrita a quatro mãos (você escolhe o código BNCC).
5. A partir daí, uma aula por vez, no seu ritmo.

## Perguntas antes de começar

1. Posso dropar de vez as tabelas antigas (`lesson_content`, `lesson_examples`, `lesson_drafts`, `lesson_quizzes`, `lesson_challenges`, `lesson_adaptations`, `lesson_explanations`, `lesson_reviews_full`, `lesson_assessments`, `lesson_curiosities`, `lesson_versions`, `lesson_cache`, `pedagogical_lessons_cache`) na etapa 1?
2. Qual habilidade BNCC quer que seja a primeira aula real (etapa 4)? Sugestão: `EF01MA01` (Matemática 1º ano) ou `EF01LP01` (Português 1º ano).
