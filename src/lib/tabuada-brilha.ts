export type NivelTabuada = "facil" | "medio" | "desafio";

export const CONFIG_TABUADA: Record<NivelTabuada, { nome: string; fatores: number[]; dica: string }> = {
  facil: { nome: "Fácil", fatores: [2, 5, 10], dica: "Conte em saltos e procure o padrão." },
  medio: { nome: "Médio", fatores: [3, 4, 6], dica: "Separe em grupos menores que você já conhece." },
  desafio: { nome: "Desafio", fatores: [7, 8, 9], dica: "Use uma conta vizinha: 8 × 6 é 7 × 6 mais 6." },
};

export function criarQuestaoTabuada(nivel: NivelTabuada, rodada: number) {
  const fatores = CONFIG_TABUADA[nivel].fatores;
  const a = fatores[rodada % fatores.length];
  const b = ((rodada * 7 + fatores.length) % 10) + 1;
  return { a, b, resposta: a * b, estrategia: `${a} grupos de ${b} formam ${a * b}. Também podemos somar ${b}, ${a} vezes.` };
}
