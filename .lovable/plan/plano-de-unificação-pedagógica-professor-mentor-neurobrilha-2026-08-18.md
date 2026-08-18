# Plano de Unificação Pedagógica - Professor Mentor NeuroBrilha

Este plano descreve a unificação dos motores de geração de aulas (Reforço, Prova, Trabalho e Escola Brilha) sob a implementação canônica do **Professor Mentor**, eliminando redundâncias e garantindo persistência robusta.

## 1. Unificação do Motor Canônico
- Refatorar `src/lib/aulas-continuas.functions.ts` para que `gerarAulaGemini` utilize `chamarProfessorMentor` internamente.
- Garantir que todas as chamadas sigam o fluxo: `Motor -> Provedor IA -> Validação -> Persistência (Aula + Páginas) -> Retorno ID`.

## 2. Limpeza de Código Legado
- Remover `src/lib/ia-missao-aula.functions.js` (após confirmar que não há mais referências ativas).
- Limpar imports comentados e código morto em `src/components/reforco-brilha/TrabalhoBrilha.tsx` e `src/routes/missao-prova.tsx`.

## 3. Robustez na Persistência
- Garantir que o servidor só retorne sucesso após a confirmação de que tanto o registro da aula quanto suas páginas foram salvos no Supabase.
- Atualizar `AulaViewer.tsx` para lidar com a recuperação da aula de forma síncrona com o estado da geração.

## 4. Manutenção de Invariantes
- **Não alterar**: Neuro-Treino, motores terapêuticos, jogos, Hiperfoco, ABA, regras de idade ou design.
- Manter o sistema de cache para evitar gerações redundantes.

## Detalhes Técnicos
- **Arquivos a serem modificados**:
  - `src/lib/aulas-continuas.functions.ts`
  - `src/components/reforco-brilha/TrabalhoBrilha.tsx`
  - `src/routes/missao-prova.tsx`
  - `src/components/reforco-brilha/AulaViewer.tsx`
- **Arquivos a serem removidos**:
  - `src/lib/ia-missao-aula.functions.js`
- **Tabelas utilizadas**: `rb_aulas`, `rb_paginas_aula`, `rb_aulas_geradas_ia`.
- **Provedor**: Gemini 1.5 Flash (via motor unificado).
