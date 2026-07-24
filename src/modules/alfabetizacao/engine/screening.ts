// Fase E — Screening inicial (10 itens de baseline).
// Roda uma vez por criança na primeira entrada da trilha. Posiciona a criança
// na etapa mais adequada em vez de sempre começar do zero.

import type { Rodada } from "./gerador";
import {
  gerarVogalSom,
  gerarSomInicial,
  gerarRima,
  gerarSegmentacao,
  gerarFusao,
  gerarSomFinal,
  gerarContagemFonemas,
  gerarFraseImagem,
} from "./gerador";
import { ETAPA_POR_ID } from "../data/etapas";

export interface ItemScreening {
  bloco: "vogais" | "silabas" | "palavras" | "fonemas" | "frases";
  rodada: Rodada;
}

// 10 itens distribuídos por bloco (bem devagar → mais exigente).
export function gerarScreening(): ItemScreening[] {
  return [
    { bloco: "vogais", rodada: gerarVogalSom(1) },
    { bloco: "vogais", rodada: gerarVogalSom(1) },
    { bloco: "silabas", rodada: gerarSegmentacao(1) },
    { bloco: "silabas", rodada: gerarFusao(1) },
    { bloco: "palavras", rodada: gerarSomInicial(2) },
    { bloco: "palavras", rodada: gerarRima(2) },
    { bloco: "fonemas", rodada: gerarSomFinal(2) },
    { bloco: "fonemas", rodada: gerarContagemFonemas(2) },
    { bloco: "frases", rodada: gerarFraseImagem(2) },
    { bloco: "frases", rodada: gerarFraseImagem(2) },
  ];
}

export interface ResultadoScreening {
  progressoInicial: Record<string, number>; // etapaId -> acertos pré-lançados
  resumo: { bloco: string; acertos: number; total: number; dominado: boolean }[];
}

// Regra: 2/2 no bloco → marca a etapa correspondente como concluída (acertos = alvo).
// 1/2 → dá 40% do alvo (meio caminho). 0/2 → 0.
export function calcularPosicaoInicial(
  itens: ItemScreening[],
  respostas: boolean[],
): ResultadoScreening {
  const blocos: Record<string, { acertos: number; total: number }> = {};
  itens.forEach((it, i) => {
    blocos[it.bloco] ??= { acertos: 0, total: 0 };
    blocos[it.bloco].total += 1;
    if (respostas[i]) blocos[it.bloco].acertos += 1;
  });

  const mapaBlocoEtapa: Record<string, string> = {
    vogais: "vogais",
    silabas: "silabas",
    palavras: "palavras",
    fonemas: "fonemas",
    frases: "frases",
  };

  const progressoInicial: Record<string, number> = {};
  const resumo: ResultadoScreening["resumo"] = [];

  for (const [bloco, res] of Object.entries(blocos)) {
    const etapaId = mapaBlocoEtapa[bloco];
    const etapa = ETAPA_POR_ID[etapaId];
    const razao = res.acertos / res.total;
    let acertos = 0;
    if (razao >= 1) acertos = etapa?.alvo ?? 0;
    else if (razao >= 0.5) acertos = Math.floor((etapa?.alvo ?? 0) * 0.4);
    if (acertos > 0) progressoInicial[etapaId] = acertos;
    resumo.push({
      bloco,
      acertos: res.acertos,
      total: res.total,
      dominado: razao >= 1,
    });
  }

  return { progressoInicial, resumo };
}

const KEY = "alfa-screening-done:";

export function screeningFeito(childId: string): boolean {
  if (typeof window === "undefined") return true;
  return localStorage.getItem(KEY + childId) === "1";
}

export function marcarScreeningFeito(childId: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY + childId, "1");
}

export function resetarScreening(childId: string) {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY + childId);
}
