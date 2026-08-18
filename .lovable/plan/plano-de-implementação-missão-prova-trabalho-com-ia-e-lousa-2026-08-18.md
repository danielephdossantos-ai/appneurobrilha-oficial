# Plano de Implementação: Missão Prova/Trabalho com IA e Lousa Interativa

Implementar a geração automática e persistente de aulas para missões de estudo (Provas e Trabalhos) utilizando o motor Gemini 1.5/3.7 Flash, integrando a "Lousa Interativa" (Chalkboard) para explicações passo a passo.

## Alterações Propostas

### 1. Novo Motor de Geração de Aulas
- Criar `src/lib/ia-missao-aula.functions.ts` para centralizar a geração de aulas via Gemini para os módulos de Missão Prova e Missão Trabalho.
- Garantir a persistência no Supabase (`rb_aulas` e `rb_paginas_aula`) para que a aula não seja perdida ao fechar a tela.
- Implementar suporte ao bloco `lousaPassos` no JSON da IA para disparar o componente `TrinomioPassoAPasso` (Lousa) no visualizador.

### 2. Integração na Missão Prova
- Atualizar `src/routes/missao-prova.tsx` para substituir o gerador efêmero (`ReforcoEngine.getLesson`) pelo novo gerador persistente.
- Integrar o componente `AulaViewer` para exibir a aula gerada.
- Adicionar estado de carregamento amigável enquanto a IA prepara a revisão.

### 3. Integração na Missão Trabalho
- Adicionar botão "Missão IA" no editor de trabalhos em `src/components/reforco-brilha/TrabalhoBrilha.tsx`.
- Permitir que a criança peça uma aula explicativa sobre o tema do trabalho que está escrevendo.

### 4. Melhorias no AulaViewer
- Adicionar suporte nativo ao bloco `lousaPassos` dentro do `AulaViewer.tsx`.
- Importar `RenderVisualMat` para renderizar os cálculos ou lógica passo a passo da IA com o visual de lousa escolar.

## Detalhes Técnicos

- **Persistência**: As aulas serão salvas com uma categoria "Pedagógico" e habilidade genérica "Missões de Estudo IA" para permitir reuso e consulta histórica.
- **Blocos de Conteúdo**: A IA poderá gerar textos, listas, destaques, perguntas de revisão e, principalmente, passos de lousa (`lousaPassos`).
- **Segurança**: Uso de `createServerFn` com validação Zod e middleware de autenticação.

## Checklist de Validação
- [ ] Criar missão de prova -> Gerar aula -> Ver lousa interativa.
- [ ] Editar trabalho -> Clicar em Missão IA -> Ver aula explicativa sobre o tema.
- [ ] Fechar aula e reabrir -> Verificar se o conteúdo persiste (não gera de novo).
- [ ] Testar em mobile (alinhamento da lousa).
