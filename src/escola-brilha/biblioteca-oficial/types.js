/**
 * Biblioteca Oficial de Missões — Escola Brilha
 * ------------------------------------------------
 * Estrutura ÚNICA e OBRIGATÓRIA para toda habilidade BNCC.
 * Cada habilidade possui exatamente UMA MissaoOficial (sem duplicidades).
 *
 * Armazenamento: um arquivo por habilidade em
 *   src/escola-brilha/biblioteca-oficial/missoes/<CODIGO_BNCC>.ts
 * exportando `export default { ... } satisfies MissaoOficial`.
 *
 * O registry (./index.ts) garante:
 *   - carregamento automático (import.meta.glob)
 *   - rejeição de duplicidades (mesmo código BNCC em dois arquivos)
 *   - lookup por código e por disciplina/ano
 */
export {};
