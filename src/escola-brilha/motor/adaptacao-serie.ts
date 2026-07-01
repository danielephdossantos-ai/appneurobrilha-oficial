/**
 * Adaptação automática por série (BNCC).
 * ---------------------------------------------------------------
 * A partir APENAS do código BNCC (ou da própria aula), o Motor decide:
 *   • linguagem (simplicidade das frases)
 *   • quantidade de texto (limites em explicação/missão/conclusão)
 *   • tamanho das atividades (número máx. de itens em exercícios/quiz)
 *   • nível de dificuldade sugerido (Fácil / Médio / Difícil)
 *   • quantidade de exemplos
 *   • profundidade da explicação (quantos níveis 1-4 liberar)
 *
 * Este módulo NÃO altera as aulas no disco — retorna uma versão
 * adaptada da aula pra renderização. Nenhuma outra parte do app deve
 * duplicar essas regras: sempre passar por `adaptarAulaPorSerie`.
 */

import type { Aula } from "../types";

export type BandaEtaria = "infantil" | "fund1_baixo" | "fund1_alto" | "fund2" | "medio";

export type AdaptacaoSerie = {
  banda: BandaEtaria;
  ano: string;
  linguagem: "muito_simples" | "simples" | "padrao" | "avancada";
  maxCaracteresExplicacao: number;
  maxObjetivos: number;
  maxExercicios: number;
  maxQuiz: number;
  maxExemplos: number;
  niveisExplicacao: 1 | 2 | 3 | 4;
  usarImagens: boolean;
  leituraEmVozAlta: boolean;
  fonteMaior: boolean;
  dificuldadeSugerida: "facil" | "medio" | "dificil";
};

// -----------------------------------------------------------------
// Extração da série a partir do código BNCC.
//   EI…            → Educação Infantil
//   EF01… / EF02…  → 1º/2º Ano
//   EF03…-EF05…    → 3º-5º Ano
//   EF06…-EF09…    → 6º-9º Ano
//   EM…            → Ensino Médio
// -----------------------------------------------------------------
export function serieDoCodigo(codigo: string): { banda: BandaEtaria; ano: string } {
  const c = (codigo || "").toUpperCase();
  if (c.startsWith("EI")) return { banda: "infantil", ano: "Educação Infantil" };
  if (c.startsWith("EM")) return { banda: "medio", ano: "Ensino Médio" };
  const m = c.match(/^EF(\d{2})/);
  const n = m ? parseInt(m[1], 10) : 0;
  if (n >= 1 && n <= 2) return { banda: "fund1_baixo", ano: `${n}º Ano` };
  if (n >= 3 && n <= 5) return { banda: "fund1_alto", ano: `${n}º Ano` };
  if (n >= 6 && n <= 9) return { banda: "fund2", ano: `${n}º Ano` };
  return { banda: "fund1_baixo", ano: "1º Ano" };
}

const PERFIS: Record<BandaEtaria, Omit<AdaptacaoSerie, "banda" | "ano">> = {
  infantil: {
    linguagem: "muito_simples",
    maxCaracteresExplicacao: 320,
    maxObjetivos: 2,
    maxExercicios: 3,
    maxQuiz: 3,
    maxExemplos: 1,
    niveisExplicacao: 1,
    usarImagens: true,
    leituraEmVozAlta: true,
    fonteMaior: true,
    dificuldadeSugerida: "facil",
  },
  fund1_baixo: {
    linguagem: "muito_simples",
    maxCaracteresExplicacao: 500,
    maxObjetivos: 3,
    maxExercicios: 4,
    maxQuiz: 4,
    maxExemplos: 1,
    niveisExplicacao: 2,
    usarImagens: true,
    leituraEmVozAlta: true,
    fonteMaior: true,
    dificuldadeSugerida: "facil",
  },
  fund1_alto: {
    linguagem: "simples",
    maxCaracteresExplicacao: 900,
    maxObjetivos: 4,
    maxExercicios: 6,
    maxQuiz: 6,
    maxExemplos: 2,
    niveisExplicacao: 3,
    usarImagens: true,
    leituraEmVozAlta: true,
    fonteMaior: false,
    dificuldadeSugerida: "medio",
  },
  fund2: {
    linguagem: "padrao",
    maxCaracteresExplicacao: 1500,
    maxObjetivos: 5,
    maxExercicios: 8,
    maxQuiz: 8,
    maxExemplos: 3,
    niveisExplicacao: 4,
    usarImagens: false,
    leituraEmVozAlta: false,
    fonteMaior: false,
    dificuldadeSugerida: "medio",
  },
  medio: {
    linguagem: "avancada",
    maxCaracteresExplicacao: 2400,
    maxObjetivos: 6,
    maxExercicios: 10,
    maxQuiz: 10,
    maxExemplos: 3,
    niveisExplicacao: 4,
    usarImagens: false,
    leituraEmVozAlta: false,
    fonteMaior: false,
    dificuldadeSugerida: "dificil",
  },
};

export function adaptacaoDaSerie(codigo: string): AdaptacaoSerie {
  const { banda, ano } = serieDoCodigo(codigo);
  return { banda, ano, ...PERFIS[banda] };
}

// -----------------------------------------------------------------
// Corte inteligente de texto — respeita fim de frase quando possível.
// -----------------------------------------------------------------
function truncarTexto(t: string | undefined, max: number): string {
  if (!t) return "";
  if (t.length <= max) return t;
  const corte = t.slice(0, max);
  const ponto = Math.max(corte.lastIndexOf(". "), corte.lastIndexOf("! "), corte.lastIndexOf("? "));
  if (ponto > max * 0.6) return corte.slice(0, ponto + 1);
  return corte.trimEnd() + "…";
}

/**
 * Retorna uma versão da aula ADAPTADA à série da habilidade.
 * A aula original em disco NÃO é modificada.
 */
export function adaptarAulaPorSerie(aula: Aula, ad: AdaptacaoSerie = adaptacaoDaSerie(aula.codigo)): Aula {
  const explicacao = truncarTexto(aula.explicacao, ad.maxCaracteresExplicacao);
  const conclusao = truncarTexto(aula.conclusao, Math.round(ad.maxCaracteresExplicacao * 0.4));
  const missao = truncarTexto(aula.missao, Math.round(ad.maxCaracteresExplicacao * 0.3));

  const objetivos = (aula.objetivos ?? []).slice(0, ad.maxObjetivos);
  const exercicios = (aula.exercicios ?? []).slice(0, ad.maxExercicios);
  const quiz = (aula.quiz ?? []).slice(0, ad.maxQuiz);

  // Níveis de aprofundamento — libera de acordo com a banda.
  const niveisFonte = aula.explicacoesNiveis ?? {};
  const explicacoesNiveis: Aula["explicacoesNiveis"] = {
    nivel1: niveisFonte.nivel1 ?? explicacao,
    ...(ad.niveisExplicacao >= 2 && niveisFonte.nivel2 ? { nivel2: niveisFonte.nivel2 } : {}),
    ...(ad.niveisExplicacao >= 3 && niveisFonte.nivel3 ? { nivel3: niveisFonte.nivel3 } : {}),
    ...(ad.niveisExplicacao >= 4 && niveisFonte.nivel4 ? { nivel4: niveisFonte.nivel4 } : {}),
  };

  // Progressão por níveis: em bandas menores, cortamos os níveis mais difíceis.
  const niveis: Aula["niveis"] | undefined = aula.niveis
    ? ad.dificuldadeSugerida === "facil"
      ? { ...aula.niveis, medio: [], dificil: [] }
      : ad.dificuldadeSugerida === "medio"
        ? { ...aula.niveis, dificil: [] }
        : aula.niveis
    : undefined;

  return {
    ...aula,
    missao,
    objetivos,
    explicacao,
    explicacoesNiveis,
    exercicios,
    quiz,
    conclusao,
    niveis,
  };
}
