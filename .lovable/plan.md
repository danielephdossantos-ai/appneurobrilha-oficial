# Anamnese → Neuro Treino → Relatório + PDF

Fechar o ciclo: ao terminar a anamnese, o app já cospe um **relatório clínico-pedagógico** com o que foi diagnosticado, o que recomenda, quais categorias vão apoiar a criança e as **atividades terapêuticas** sugeridas — com botão de **exportar PDF** pra levar ao terapeuta ou à escola.

## O que o usuário pediu
- Anamnese conectada ao **Neuro Treino** (atividades terapêuticas).
- Relatório com: **dificuldades detectadas**, **o que a criança precisa**, **categorias que o app vai auxiliar**, **curso completo gerado**.
- **Exportar PDF** pra levar pro terapeuta / escola.
- App adaptativo com foco em crianças com deficiência.

## Fluxo final
```text
Mãe termina anamnese
        │
        ▼
 useAnamneseV2.finish()  ──► AnamnesisProcessor (já existe)
        │                         │ perfil interno + scores + risk
        ▼                         ▼
 Tela "Resultado da Anamnese"  (nova rota /anamnese/$childId/relatorio)
   ├─ Perfil da criança (idade, série, diagnóstico declarado)
   ├─ O que o app detectou (linguagem, atenção, sensorial, motor, socioemocional)
   ├─ O que a criança precisa (recomendações práticas)
   ├─ Categorias que o app vai auxiliar (com ícones + link direto)
   ├─ Atividades terapêuticas recomendadas (Neuro Treino)
   ├─ Curso pedagógico gerado (trilhas EI/Fund por disciplina)
   └─ [ Baixar PDF ]  [ Ver Neuro Treino ]  [ Ir pro Curso ]
```

## Entregáveis (nesta ordem, em passos pequenos pra você validar cena por cena)

### 1) Motor único de recomendação
`src/modules/relatorio-clinico/engine.ts` — recebe `InternalProfile + AnamneseV2Responses + scores + risk` e devolve:
```ts
{
  perfil: { nome, idadeMeses, serie, diagnosticoDeclarado, perfilNeuro },
  deteccoes: { area, nivel: 'ok'|'atenção'|'apoio_urgente', evidencias[] }[],
  necessidades: string[],
  categoriasApoio: { id, titulo, porQue, rota }[],
  atividadesTerapeuticas: { id, titulo, area, objetivo, duracaoMin, rota }[],
  cursoGerado: { disciplina, trilha, primeirasAulas[] }[],
  observacoesClinicas: string,
}
```
Reaproveita `AnamnesisProcessor`, `ReportGenerator`, mapeamento `diagnosticoToNeuroProfile`.

### 2) Ponte com Neuro Treino
`src/modules/relatorio-clinico/neuro-bridge.ts` — mapeia detecções pra atividades já existentes do Neuro Treino (atenção, regulação sensorial, linguagem, motor, socioemocional). Sem inventar módulos novos: só linkar.

### 3) Ponte com o curso
`src/modules/relatorio-clinico/curso-bridge.ts` — a partir da série detectada, lista as trilhas ativas (Ler com Aurora, Contar com Pip, Biblioteca Encantada, English Kids, etc.) e as 3 primeiras aulas de cada.

### 4) Tela de relatório
Rota nova: `src/routes/anamnese.$childId.relatorio.tsx` — usa design tokens do projeto (roxo/creme, sem cores hardcoded), seções colapsáveis, botão flutuante **Baixar PDF**. Redireciono `finish()` da anamnese pra cá.

### 5) Exportação PDF
Client-side com `@react-pdf/renderer` (uma dependência, sem servidor). Documento com capa (nome, idade, data), resumo executivo, detecções por área com barra visual, recomendações, atividades terapêuticas, curso, rodapé "Gerado por Neuro Brilha — documento de apoio, não substitui laudo clínico."

### 6) Entradas de acesso ao relatório
- Card "Ver Relatório" no painel dos pais quando `anamnese_completa = true`.
- Botão no fim da anamnese ("Ver relatório completo").
- Atalho no menu do responsável.

## Detalhes técnicos
- Sem edge functions novas — tudo em `createServerFn` só se precisar buscar dados; a geração do relatório é client-side a partir do que já está em `children` + `anamnese_v2`.
- PDF: `@react-pdf/renderer` (compatível com Worker/SSR pq só roda no client via `<ClientOnly>`).
- Sem hardcode de cores — usar tokens (`--primary`, `--muted`, etc.).
- Textos em PT-BR, linguagem acolhedora, evitar termos que soem como diagnóstico médico ("indícios de", "sugere apoio em", nunca "a criança tem TEA").

## Fora do escopo desta rodada
- Assinatura digital do relatório.
- Envio por e-mail direto.
- Comparativo evolutivo mês a mês (já existe parcial no `ReportGenerator`, mas fica pra depois).

## Ordem de validação (você aprova cena por cena)
1. Engine + tela de relatório com dados mockados renderizando.
2. Ligação real com anamnese da criança logada.
3. Pontes com Neuro Treino e curso.
4. Exportação PDF.
5. Entradas de acesso no painel dos pais.

Confirma esse plano ou quer ajustar alguma seção do relatório antes de eu começar?
