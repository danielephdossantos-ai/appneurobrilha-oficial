// Ponte entre a Anamnese e o Curso pedagógico:
// A partir da série declarada na anamnese, monta a lista de trilhas
// ativas no app com rota direta.
import type { AnamneseV2Responses } from "@/modules/anamnese/v2/types";

export interface TrilhaRecomendada {
  disciplina: string;
  titulo: string;
  descricao: string;
  rota: string;
  emoji: string;
  faixa: "EI" | "Fundamental I" | "Fundamental II" | "Ensino Médio";
}

function normalizarSerie(serie: string | undefined): {
  faixa: TrilhaRecomendada["faixa"];
  serieSlug: string;
} {
  const s = (serie ?? "").toLowerCase().trim();
  if (s.includes("matern")) return { faixa: "EI", serieSlug: "maternal" };
  if (s.includes("pré 1") || s.includes("pre 1") || s.includes("pré i") || s.includes("pre i"))
    return { faixa: "EI", serieSlug: "pre1" };
  if (s.includes("pré 2") || s.includes("pre 2") || s.includes("pré ii") || s.includes("pre ii"))
    return { faixa: "EI", serieSlug: "pre2" };
  if (s.match(/\b1[ºo]?\s*ano\b/)) return { faixa: "Fundamental I", serieSlug: "1ano" };
  if (s.match(/\b2[ºo]?\s*ano\b/)) return { faixa: "Fundamental I", serieSlug: "2ano" };
  if (s.match(/\b3[ºo]?\s*ano\b/)) return { faixa: "Fundamental I", serieSlug: "3ano" };
  if (s.match(/\b4[ºo]?\s*ano\b/)) return { faixa: "Fundamental I", serieSlug: "4ano" };
  if (s.match(/\b5[ºo]?\s*ano\b/)) return { faixa: "Fundamental I", serieSlug: "5ano" };
  if (s.match(/\b6[ºo]?\s*ano\b/)) return { faixa: "Fundamental II", serieSlug: "6ano" };
  if (s.match(/\b7[ºo]?\s*ano\b/)) return { faixa: "Fundamental II", serieSlug: "7ano" };
  if (s.match(/\b8[ºo]?\s*ano\b/)) return { faixa: "Fundamental II", serieSlug: "8ano" };
  if (s.match(/\b9[ºo]?\s*ano\b/)) return { faixa: "Fundamental II", serieSlug: "9ano" };
  if (s.includes("médio") || s.includes("medio")) return { faixa: "Ensino Médio", serieSlug: "em" };
  return { faixa: "EI", serieSlug: "pre2" };
}

export function gerarCursoRecomendado(
  responses: AnamneseV2Responses,
): { faixa: TrilhaRecomendada["faixa"]; trilhas: TrilhaRecomendada[] } {
  const { faixa } = normalizarSerie(responses.step1?.serie);

  if (faixa === "EI") {
    return {
      faixa,
      trilhas: [
        {
          disciplina: "Alfabetização",
          titulo: "Ler com Aurora",
          descricao: "Trilha completa de leitura com apoio fonológico (Fases 1–8).",
          rota: "/escola-brilha/ler-com-aurora/painel",
          emoji: "📖",
          faixa,
        },
        {
          disciplina: "Português",
          titulo: "Biblioteca Encantada",
          descricao: "Curso neuroinclusivo (ABA + PECS + TEACCH) com o mascote Pip.",
          rota: "/escola-brilha/biblioteca-encantada",
          emoji: "🌈",
          faixa,
        },
        {
          disciplina: "Matemática",
          titulo: "Contar com Pip",
          descricao: "8 fases de matemática visual (Subitizing → Operações).",
          rota: "/escola-brilha/curso/contar-com-pip",
          emoji: "🔢",
          faixa,
        },
        {
          disciplina: "Inglês",
          titulo: "English Kids",
          descricao: "Baby English → I can say. Cadência 2×/semana.",
          rota: "/escola-brilha/ingles-ei",
          emoji: "🌍",
          faixa,
        },
      ],
    };
  }

  // Fundamental / EM — trilhas por disciplina apontam para o índice do curso
  const disciplinas: Array<{ disc: string; titulo: string; emoji: string }> = [
    { disc: "portugues", titulo: "Português", emoji: "📚" },
    { disc: "matematica", titulo: "Matemática", emoji: "🔢" },
    { disc: "ciencias", titulo: "Ciências", emoji: "🔬" },
    { disc: "historia", titulo: "História", emoji: "🏛️" },
    { disc: "geografia", titulo: "Geografia", emoji: "🌎" },
    { disc: "ingles", titulo: "Inglês", emoji: "🌍" },
    { disc: "arte", titulo: "Arte", emoji: "🎨" },
  ];

  const { serieSlug } = normalizarSerie(responses.step1?.serie);
  return {
    faixa,
    trilhas: disciplinas.map((d) => ({
      disciplina: d.titulo,
      titulo: `${d.titulo} — ${responses.step1?.serie ?? ""}`.trim(),
      descricao: `Trilha adaptativa alinhada à BNCC para ${responses.step1?.serie ?? "a série"}.`,
      rota: `/escola-brilha/trilha/${serieSlug}/${d.disc}`,
      emoji: d.emoji,
      faixa,
    })),
  };
}
