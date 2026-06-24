const BNCC_CODE_RE = /\b(?:EI\d{2}[A-Z]{2}\d{2}|EF\d{2}[A-Z]{2}\d{2})\b/gi;

const SYSTEM_MARKERS = [
  "bncc",
  "ensino fundamental",
  "práticas de linguagem",
  "praticas de linguagem",
  "objetos de conhecimento",
  "habilidades",
  "todos os campos de atuação",
  "todos os campos de atuacao",
  "continuação",
  "continuacao",
  "análise linguística",
  "analise linguistica",
  "morfossintaxe",
];

const SUBJECT_TITLES: Record<string, string> = {
  portugues: "Português na prática",
  matematica: "Matemática na prática",
  ciencias: "Ciências na prática",
  geografia: "Geografia na prática",
  historia: "História na prática",
  religioso: "Valores e convivência",
};

function normalizeKey(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function removeBnccCodes(text: string | null | undefined) {
  return String(text || "")
    .replace(BNCC_CODE_RE, "")
    .replace(/\bBNCC\b/gi, "")
    .replace(/[–—-]\s*(?=$)/g, "")
    .replace(/\s+[–—-]\s+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function isSystemBnccText(text: string | null | undefined) {
  const clean = removeBnccCodes(text);
  if (!clean) return true;

  const normalized = normalizeKey(clean);
  const markerCount = SYSTEM_MARKERS.filter((marker) => normalized.includes(marker)).length;
  return markerCount >= 2 || clean.length > 180;
}

export function cleanVisibleLessonText(text: string | null | undefined, fallback: string) {
  const clean = removeBnccCodes(text);
  const normalized = normalizeKey(clean);
  if (/\bBNCC\b/i.test(String(text || ""))) return fallback;
  if (normalized.includes("habilidade") && !normalized.includes("habilidades sociais")) return fallback;
  if (!clean || isSystemBnccText(clean)) return fallback;
  return clean;
}

export function friendlySubject(subject: string | null | undefined) {
  const normalized = normalizeKey(subject || "");
  if (normalized.includes("portug") || normalized.includes("lingua")) return SUBJECT_TITLES.portugues;
  if (normalized.includes("matem")) return SUBJECT_TITLES.matematica;
  if (normalized.includes("cienc")) return SUBJECT_TITLES.ciencias;
  if (normalized.includes("geograf")) return SUBJECT_TITLES.geografia;
  if (normalized.includes("histor")) return SUBJECT_TITLES.historia;
  if (normalized.includes("relig")) return SUBJECT_TITLES.religioso;
  return subject ? `${subject} na prática` : "Aula na prática";
}

export function friendlyLessonTitle(opts: {
  title?: string | null;
  subject?: string | null;
}) {
  return cleanVisibleLessonText(opts.title, friendlySubject(opts.subject));
}
