/**
 * BIBLIOTECA NACIONAL DE AULAS — ESCOLA BRILHA
 * =============================================
 *
 * Regra oficial (travada em migration + FK + trigger de contrato):
 *
 *  • Fonte única da verdade de habilidades: `public.bncc_habilidades`
 *    (1.451 códigos oficiais). Nenhuma aula pode referenciar um código
 *    que não esteja lá — FK `lessons_codigo_bncc_fkey`.
 *
 *  • Uma aula por habilidade: `public.lessons.codigo_bncc` é UNIQUE.
 *
 *  • Toda aula publicada obedece ao contrato pedagógico completo,
 *    validado pelo trigger `lessons_validate_contract`:
 *      - sequência pedagógica (missão, introdução, explicação, resumo)
 *      - objetivos (>=1)
 *      - conhecimentos prévios (>=1)
 *      - materiais (>=1)
 *      - exatamente 3 exemplos contextualizados
 *      - atividade guiada + prática + desafio + mapa mental
 *      - quiz com >=3 perguntas
 *      - erros comuns + dicas
 *      - revisão / critérios de domínio (>=1)
 *      - adaptações pedagógicas obrigatórias: TDAH · TEA · dislexia
 *
 *  • Cobertura em tempo real: view `public.vw_biblioteca_nacional`
 *    lista todas as 1.451 habilidades com status `pendente` ou
 *    `publicada`.
 *
 * Toda expansão futura de aulas do Escola Brilha DEVE ser inserção
 * em `public.lessons` — não criar novas tabelas de aula.
 */
export const BIBLIOTECA_NACIONAL = {
  tabelaAulas: "public.lessons",
  tabelaHabilidades: "public.bncc_habilidades",
  viewCobertura: "public.vw_biblioteca_nacional",
  totalHabilidades: 1451,
} as const;
