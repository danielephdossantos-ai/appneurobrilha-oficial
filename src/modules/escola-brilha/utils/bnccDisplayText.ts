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

// Extracts the first meaningful pedagogical sentence, dropping PDF junk
// like "LÍNGUA PORTUGUESA – 6º E 7º ANOS (Continuação) ... HABILIDADES ...".
function stripPdfTail(text: string) {
  let t = text;
  // Cut at the first occurrence of any PDF section marker
  const cutMarkers = [
    /\bL[IÍ]NGUA PORTUGUESA\b/i,
    /\bENSINO FUNDAMENTAL\b/i,
    /\bPR[AÁ]TICAS DE LINGUAGEM\b/i,
    /\bOBJETOS DE CONHECIMENTO\b/i,
    /\bHABILIDADES\b/i,
    /\bTODOS OS CAMPOS DE ATUA[CÇ][AÃ]O\b/i,
    /\(Continua[cç][aã]o\)/i,
    /\bAn[aá]lise lingu[ií]stica\b/i,
    /\bMorfossintaxe\b/i,
    /\bLINGUAGENS\b/i,
  ];
  for (const re of cutMarkers) {
    const m = t.match(re);
    if (m && m.index !== undefined) t = t.slice(0, m.index);
  }
  return t.trim().replace(/[\s–—-]+$/g, "").trim();
}

function firstSentence(text: string) {
  const stripped = stripPdfTail(text);
  // First sentence ends at period/colon/semicolon followed by space or end
  const m = stripped.match(/^[^.;:]{3,180}([.;:]|$)/);
  const s = (m ? m[0] : stripped).replace(/[.;:]\s*$/, "").trim();
  return s;
}

export function bnccActivityName(
  text: string | null | undefined,
  fallback: string,
  maxLen = 70,
) {
  const clean = removeBnccCodes(text);
  if (!clean) return fallback;
  const sentence = firstSentence(clean);
  if (!sentence || sentence.length < 4) return fallback;
  if (sentence.length <= maxLen) return sentence;
  // Try to cut at last space before maxLen
  const cut = sentence.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 30 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

export function isSystemBnccText(text: string | null | undefined) {
  const clean = removeBnccCodes(text);
  if (!clean) return true;
  const normalized = normalizeKey(clean);
  const markerCount = SYSTEM_MARKERS.filter((marker) => normalized.includes(marker)).length;
  return markerCount >= 2 || clean.length > 180;
}

export function cleanVisibleLessonText(text: string | null | undefined, fallback: string) {
  return bnccActivityName(text, fallback, 180);
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
  const fallback = friendlySubject(opts.subject);
  return bnccActivityName(opts.title, fallback, 70);
}
