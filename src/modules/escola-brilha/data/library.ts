import type { EtapaEscolar } from "../hooks/useAulasBncc";
import type { IllustrationName } from "@/components/Illustration";

export type StaticLesson = {
  id: string;
  type: string; // "early" | "legacy" | "activity" | "activity-c"
  serie: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  gradient: string;
  xp: number;
  bncc?: string;
  illustration?: IllustrationName;
};

export const STATIC_LESSONS: Record<EtapaEscolar, StaticLesson[]> = {
  infantil: [],
  fundamental1: [
    { id: "sinonimos", type: "activity", serie: "2º Ano", title: "Sinônimos", subtitle: "Palavras com sentido parecido", badge: "Língua Portuguesa", badgeColor: "bg-violet-100 text-violet-700", gradient: "from-violet-500 to-purple-600", xp: 120 },
    { id: "antonimos", type: "activity", serie: "2º Ano", title: "Antônimos", subtitle: "Palavras com sentido oposto", badge: "Língua Portuguesa", badgeColor: "bg-teal-100 text-teal-700", gradient: "from-teal-500 to-emerald-600", xp: 120 },
    { id: "substantivos", type: "activity", serie: "3º Ano", title: "Substantivos", subtitle: "Nomes de seres e objetos", badge: "Língua Portuguesa", badgeColor: "bg-blue-100 text-blue-700", gradient: "from-blue-500 to-indigo-600", xp: 130 },
    { id: "fracoes", type: "activity", serie: "3º Ano", title: "Frações", subtitle: "Partes de um todo", badge: "Matemática", badgeColor: "bg-amber-100 text-amber-700", gradient: "from-amber-500 to-orange-600", xp: 150 },
    { id: "multiplicacao", type: "activity", serie: "3º Ano", title: "Multiplicação", subtitle: "Tabuada e grupos iguais", badge: "Matemática", badgeColor: "bg-pink-100 text-pink-700", gradient: "from-pink-500 to-rose-600", xp: 140 },
  ],

  fundamental2: [
    { id: "oceanos", type: "activity-c", serie: "6º Ano", title: "Oceanos e Clima", subtitle: "Regulação climática", badge: "Ciências", badgeColor: "bg-blue-100 text-blue-800", gradient: "from-blue-600 to-cyan-600", xp: 230, bncc: "EF06CI04" },
    { id: "biomas", type: "activity-c", serie: "6º Ano", title: "Biomas Brasileiros", subtitle: "Os 6 grandes biomas", badge: "Geografia", badgeColor: "bg-green-100 text-green-800", gradient: "from-green-600 to-emerald-600", xp: 220, bncc: "EF06GE08" },
    { id: "celulas", type: "activity-c", serie: "7º Ano", title: "Células e Organismos", subtitle: "Unidade básica da vida", badge: "Ciências", badgeColor: "bg-violet-100 text-violet-800", gradient: "from-violet-600 to-purple-600", xp: 240, bncc: "EF07CI10" },
    { id: "equacoes", type: "activity-c", serie: "7º Ano", title: "Equações de 1º Grau", subtitle: "Álgebra", badge: "Matemática", badgeColor: "bg-amber-100 text-amber-800", gradient: "from-amber-600 to-orange-600", xp: 250, bncc: "EF07MA18" },
    { id: "revolucao", type: "activity-c", serie: "8º Ano", title: "Revolução Industrial", subtitle: "Trabalho e tecnologia", badge: "História", badgeColor: "bg-stone-100 text-stone-800", gradient: "from-stone-600 to-zinc-600", xp: 260, bncc: "EF08HI13" },
    { id: "sistema_nervoso", type: "activity-c", serie: "8º Ano", title: "Sistema Nervoso", subtitle: "Controle do corpo", badge: "Ciências", badgeColor: "bg-indigo-100 text-indigo-800", gradient: "from-indigo-600 to-blue-600", xp: 250, bncc: "EF08CI08" },
    { id: "genetica", type: "activity-c", serie: "9º Ano", title: "Genética", subtitle: "DNA e Leis de Mendel", badge: "Ciências", badgeColor: "bg-pink-100 text-pink-800", gradient: "from-pink-600 to-rose-600", xp: 280, bncc: "EF09CI08" },
    { id: "iluminismo", type: "activity-c", serie: "9º Ano", title: "Iluminismo", subtitle: "Razão e democracia", badge: "História", badgeColor: "bg-yellow-100 text-yellow-800", gradient: "from-yellow-600 to-amber-600", xp: 270, bncc: "EF09HI01" },
  ],
};

export const SERIE_ORDER: Record<EtapaEscolar, string[]> = {
  infantil: [],
  fundamental1: ["2º Ano", "3º Ano", "4º Ano", "5º Ano"],
  fundamental2: ["6º Ano", "7º Ano", "8º Ano", "9º Ano"],
};


export function subjectKey(raw: string): string {
  const s = (raw || "").toLowerCase();
  if (s.includes("portug") || s.includes("língua") || s.includes("lingua")) return "Língua Portuguesa";
  if (s.includes("alfabet")) return "Alfabetização";
  if (s.includes("leitur")) return "Leitura";
  if (s.includes("matem")) return "Matemática";
  if (s.includes("ciênc") || s.includes("cienc")) return "Ciências";
  if (s.includes("geograf")) return "Geografia";
  if (s.includes("histó") || s.includes("histo")) return "História";
  return raw || "Outros";
}

export function etapaForSerie(serie: string): EtapaEscolar {
  if (["6º Ano", "7º Ano", "8º Ano", "9º Ano"].includes(serie)) return "fundamental2";
  return "fundamental1";
}


export function findStaticById(id: string): StaticLesson | null {
  for (const list of Object.values(STATIC_LESSONS)) {
    const hit = list.find((l) => l.id === id);
    if (hit) return hit;
  }
  return null;
}
