/**
 * Nome de aventura de cada disciplina — visível para a criança.
 * O código BNCC (`codigo_bncc`) continua sendo usado internamente
 * para admin, relatórios e roteamento; nunca aparece na UI infantil.
 */
export type TemaMissao = {
  nome: string;
  emoji: string;
};

const TEMAS: Record<string, TemaMissao> = {
  matematica: { nome: "O Mistério dos Números Perdidos", emoji: "🔢" },
  portugues: { nome: "A Biblioteca Encantada", emoji: "📚" },
  ciencias: { nome: "Pequenos Cientistas", emoji: "🔬" },
  historia: { nome: "Viajantes do Tempo", emoji: "⏳" },
  geografia: { nome: "Exploradores do Brasil", emoji: "🌎" },
  arte: { nome: "Atelier das Cores", emoji: "🎨" },
  artes: { nome: "Atelier das Cores", emoji: "🎨" },
  edfisica: { nome: "Corpo em Movimento", emoji: "🤸" },
  ingles: { nome: "Around the World", emoji: "🌐" },
  religiao: { nome: "Construindo Valores", emoji: "🤝" },
  default: { nome: "Aventura de Aprender", emoji: "✨" },
};

export function slugDisc(d: string): string {
  const s = (d || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
  if (!s) return "default";
  if (s.startsWith("mat")) return "matematica";
  if (s.startsWith("port") || s.includes("lingua portuguesa")) return "portugues";
  if (s.startsWith("cien")) return "ciencias";
  if (s.startsWith("hist")) return "historia";
  if (s.startsWith("geo")) return "geografia";
  if (s.startsWith("art")) return "arte";
  if (s.includes("fisica") || s.includes("ed.") || s.startsWith("edu")) return "edfisica";
  if (s.startsWith("ingl") || s.includes("english")) return "ingles";
  if (s.includes("religio")) return "religiao";
  return "default";
}


export function temaDaDisciplina(disciplina: string | undefined | null): TemaMissao {
  return TEMAS[slugDisc(disciplina ?? "")] ?? TEMAS.default;
}

/** Deriva a disciplina a partir do prefixo do código BNCC (fallback). */
export function disciplinaDoCodigo(codigo: string): string {
  const m = codigo.toUpperCase().match(/^EF\d{2}([A-Z]{2})/);
  if (!m) return "";
  const sigla = m[1];
  const map: Record<string, string> = {
    MA: "Matemática",
    LP: "Língua Portuguesa",
    CI: "Ciências",
    HI: "História",
    GE: "Geografia",
    AR: "Arte",
    EF: "Educação Física",
    LI: "Língua Inglesa",
    ER: "Ensino Religioso",
  };
  return map[sigla] ?? "";
}

export function temaDoCodigo(codigo: string): TemaMissao {
  return temaDaDisciplina(disciplinaDoCodigo(codigo));
}
