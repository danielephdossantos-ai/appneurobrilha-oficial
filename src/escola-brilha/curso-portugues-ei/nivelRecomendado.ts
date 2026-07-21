/**
 * Recomenda o nível inicial do Códice de Português EI (Maternal / Pré I / Pré II)
 * a partir da anamnese (Step 6 · Escolar) e da idade.
 *
 * Regra: se a criança tem 5 anos (Pré II por idade) mas ainda não reconhece letras,
 * o app RECOMENDA começar do Maternal (3a). Cabe ao adulto aceitar ou manter no nível
 * da série matriculada.
 */

export type NivelEI = "maternal" | "pre1" | "pre2";

export interface Step6ParaEI {
  reconhece_letras?: number; // 0..4 (Likert)
  reconhece_silabas?: number;
  le_palavras?: number;
}

export interface RecomendacaoNivelEI {
  /** Nível recomendado com base na anamnese. */
  nivelRecomendado: NivelEI;
  /** Nível "por idade" (o que a criança faria se seguisse só a série). */
  nivelPorIdade: NivelEI;
  /** True quando a anamnese sugere começar antes da série da idade. */
  precisaComecarDeTras: boolean;
  motivo: string;
}

const ORDEM: NivelEI[] = ["maternal", "pre1", "pre2"];

export function nivelPorIdadeEI(idade: number | null | undefined): NivelEI {
  if (!idade || idade <= 3) return "maternal";
  if (idade === 4) return "pre1";
  return "pre2";
}

export function nivelPelaAnamneseEI(
  step6: Step6ParaEI | null | undefined,
): NivelEI {
  const s = step6 ?? {};
  const letras = s.reconhece_letras ?? 0;
  const silabas = s.reconhece_silabas ?? 0;
  const palavras = s.le_palavras ?? 0;

  if (palavras >= 2 || silabas >= 3) return "pre2";
  if (letras >= 2 || silabas >= 2) return "pre1";
  return "maternal";
}

function indice(n: NivelEI): number {
  return ORDEM.indexOf(n);
}

export function menorNivel(a: NivelEI, b: NivelEI): NivelEI {
  return indice(a) <= indice(b) ? a : b;
}

export function recomendarNivelEI(
  step6: Step6ParaEI | null | undefined,
  idade: number | null | undefined,
): RecomendacaoNivelEI {
  const nivelPorIdade = nivelPorIdadeEI(idade);
  const nivelPorAnamnese = nivelPelaAnamneseEI(step6);
  const nivelRecomendado = menorNivel(nivelPorIdade, nivelPorAnamnese);
  const precisaComecarDeTras = indice(nivelPorAnamnese) < indice(nivelPorIdade);

  let motivo: string;
  if (precisaComecarDeTras) {
    motivo =
      "Pela anamnese, sua criança ainda está construindo o reconhecimento das letras. Recomendamos começar do Maternal, mesmo que a série seja Pré II — assim ela constrói base sem pular etapa.";
  } else if (nivelRecomendado === "maternal") {
    motivo = "Começamos pelo Maternal: escuta, ritmo e primeiros sons.";
  } else if (nivelRecomendado === "pre1") {
    motivo = "A criança já reconhece letras — começamos pelo Pré I.";
  } else {
    motivo = "A criança já lê sílabas/palavras — começamos direto no Pré II.";
  }

  return { nivelRecomendado, nivelPorIdade, precisaComecarDeTras, motivo };
}

export const LABEL_NIVEL: Record<NivelEI, string> = {
  maternal: "Maternal (3 anos)",
  pre1: "Pré I (4 anos)",
  pre2: "Pré II (5 anos)",
};

export const SLUG_CURSO: Record<NivelEI, string> = {
  maternal: "portugues-ei-maternal",
  pre1: "portugues-ei-pre1",
  pre2: "portugues-ei-pre2",
};

export function niveisAPartirDe(nivel: NivelEI): NivelEI[] {
  return ORDEM.slice(indice(nivel));
}
