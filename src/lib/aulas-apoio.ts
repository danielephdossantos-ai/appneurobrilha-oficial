// Helpers para "Aulas de Apoio" — trilha unificada da criança na home.
// Reaproveita as trilhas geradas pela anamnese, mas parte só da série da criança.

export interface TrilhaApoio {
  id: string;
  disciplina: string;
  titulo: string;
  descricao: string;
  rota: string;
  emoji: string;
  cor: string;
}

export type Faixa = "EI" | "Fundamental I" | "Fundamental II" | "Ensino Médio";

export function normalizarSerie(serie: string | undefined): {
  faixa: Faixa;
  serieSlug: string;
} {
  const s = (serie ?? "").toLowerCase().trim();
  if (s.includes("matern")) return { faixa: "EI", serieSlug: "maternal" };
  if (s.includes("pré 1") || s.includes("pre 1") || s.includes("pré i") || s.includes("pre i"))
    return { faixa: "EI", serieSlug: "pre1" };
  if (s.includes("pré 2") || s.includes("pre 2") || s.includes("pré ii") || s.includes("pre ii"))
    return { faixa: "EI", serieSlug: "pre2" };
  const m = s.match(/\b([1-9])[ºo]?\s*ano\b/);
  if (m) {
    const n = Number(m[1]);
    const faixa: Faixa = n <= 5 ? "Fundamental I" : "Fundamental II";
    return { faixa, serieSlug: `${n}ano` };
  }
  if (s.includes("médio") || s.includes("medio")) return { faixa: "Ensino Médio", serieSlug: "em" };
  return { faixa: "EI", serieSlug: "pre2" };
}

export function trilhasParaSerie(serie: string | undefined): {
  faixa: Faixa;
  trilhas: TrilhaApoio[];
} {
  const { faixa, serieSlug } = normalizarSerie(serie);

  if (faixa === "EI") {
    return {
      faixa,
      trilhas: [
        {
          id: "aurora",
          disciplina: "Alfabetização",
          titulo: "Ler com Aurora",
          descricao: "Leitura passo a passo com apoio fonológico.",
          rota: "/neuro-treino/ler-com-aurora/painel",
          emoji: "📖",
          cor: "from-[#FF6FA8] to-[#EC4899]",
        },
        {
          id: "biblioteca",
          disciplina: "Português",
          titulo: "Biblioteca Encantada",
          descricao: "Comunicação com ABA, PECS e TEACCH.",
          rota: "/escola-brilha/biblioteca-encantada",
          emoji: "🌈",
          cor: "from-[#A855F7] to-[#6D28D9]",
        },
        {
          id: "pip",
          disciplina: "Matemática",
          titulo: "Contar com Pip",
          descricao: "8 fases de matemática visual.",
          rota: "/escola-brilha/curso/contar-com-pip",
          emoji: "🔢",
          cor: "from-[#10B981] to-[#059669]",
        },
        {
          id: "english",
          disciplina: "Inglês",
          titulo: "English Kids",
          descricao: "Inglês lúdico para os pequenos.",
          rota: "/escola-brilha/ingles-ei",
          emoji: "🌍",
          cor: "from-[#4C9EFF] to-[#1D4ED8]",
        },
      ],
    };
  }

  const disciplinas: Array<{ id: string; disc: string; titulo: string; emoji: string; cor: string }> = [
    { id: "portugues", disc: "portugues", titulo: "Português", emoji: "📚", cor: "from-[#F43F5E] to-[#9F1239]" },
    { id: "matematica", disc: "matematica", titulo: "Matemática", emoji: "🔢", cor: "from-[#10B981] to-[#059669]" },
    { id: "ciencias", disc: "ciencias", titulo: "Ciências", emoji: "🔬", cor: "from-[#8B5CF6] to-[#6D28D9]" },
    { id: "historia", disc: "historia", titulo: "História", emoji: "🏛️", cor: "from-[#F59E0B] to-[#B45309]" },
    { id: "geografia", disc: "geografia", titulo: "Geografia", emoji: "🌎", cor: "from-[#0EA5E9] to-[#1D4ED8]" },
    { id: "ingles", disc: "ingles", titulo: "Inglês", emoji: "🌍", cor: "from-[#4C9EFF] to-[#1D4ED8]" },
    { id: "arte", disc: "arte", titulo: "Arte", emoji: "🎨", cor: "from-[#EC4899] to-[#BE185D]" },
  ];

  return {
    faixa,
    trilhas: disciplinas.map((d) => ({
      id: d.id,
      disciplina: d.titulo,
      titulo: d.titulo,
      descricao: `Trilha ${d.titulo} adaptativa (BNCC) para ${serie ?? "sua série"}.`,
      rota: `/escola-brilha/trilha/${serieSlug}/${d.disc}`,
      emoji: d.emoji,
      cor: d.cor,
    })),
  };
}

export const WEEKDAY_LABELS = ["D", "S", "T", "Q", "Q", "S", "S"] as const;
export const WEEKDAY_LABELS_LONG = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
] as const;

export const DEFAULT_WEEKDAYS = [1, 2, 3, 4, 5]; // seg-sex
export const DEFAULT_TIME = "14:00";
export const AULAS_APOIO_TOPIC = "Aulas de Apoio";
export const AULAS_APOIO_CATEGORY = "aulas_apoio";
