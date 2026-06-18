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
  infantil: [
    { id: "vogais", type: "early", serie: "Pré-Escola", title: "As Vogais", subtitle: "A E I O U", badge: "Alfabetização", badgeColor: "bg-rose-100 text-rose-700", gradient: "from-rose-400 to-pink-500", xp: 80, illustration: "vowels-icon" },
    { id: "contagem", type: "early", serie: "Pré-Escola", title: "Vamos Contar!", subtitle: "1 ao 10", badge: "Matemática", badgeColor: "bg-amber-100 text-amber-700", gradient: "from-amber-400 to-orange-500", xp: 80, illustration: "counting-icon" },
    { id: "subtracao", type: "early", serie: "Pré-Escola", title: "Subtrair é Tirar!", subtitle: "Tirar objetos", badge: "Matemática", badgeColor: "bg-rose-100 text-rose-700", gradient: "from-rose-500 to-red-600", xp: 90, illustration: "subtract-icon" },
  ],
  fundamental1: [
    { id: "portugues_1ano", type: "legacy", serie: "1º Ano", title: "Sílabas", subtitle: "Primeiras sílabas", badge: "Língua Portuguesa", badgeColor: "bg-rose-100 text-rose-700", gradient: "from-rose-400 to-pink-500", xp: 100 },
    { id: "matematica", type: "legacy", serie: "1º Ano", title: "Contas", subtitle: "Somar e subtrair", badge: "Matemática", badgeColor: "bg-sky-100 text-sky-700", gradient: "from-sky-400 to-blue-500", xp: 100 },
    { id: "ciencias_1ano", type: "legacy", serie: "1º Ano", title: "Os 5 Sentidos", subtitle: "Ver, ouvir, cheirar, provar, tocar", badge: "Ciências", badgeColor: "bg-emerald-100 text-emerald-700", gradient: "from-emerald-500 to-teal-600", xp: 100 },
    { id: "historia_1ano", type: "legacy", serie: "1º Ano", title: "Vivendo e Lembrando", subtitle: "Família e transportes", badge: "História", badgeColor: "bg-amber-100 text-amber-700", gradient: "from-stone-500 to-amber-700", xp: 100 },
    { id: "portugues_2ano", type: "legacy", serie: "2º Ano", title: "Leitura", subtitle: "Ler frases", badge: "Leitura", badgeColor: "bg-fuchsia-100 text-fuchsia-700", gradient: "from-fuchsia-400 to-violet-500", xp: 110 },
    { id: "matematica_2ano", type: "legacy", serie: "2º Ano", title: "Cálculos", subtitle: "Contas maiores", badge: "Matemática", badgeColor: "bg-orange-100 text-orange-700", gradient: "from-orange-400 to-red-500", xp: 110 },
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
  infantil: ["Pré-Escola"],
  fundamental1: ["1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano"],
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
  if (serie === "Pré-Escola") return "infantil";
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
