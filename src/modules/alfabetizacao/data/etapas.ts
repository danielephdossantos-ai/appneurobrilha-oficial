// Progressão pedagógica BLOQUEADA. Não permitir pular etapas.
// Cada etapa tem N rodadas; concluir 1 rodada = 1 ponto.
// Quando atinge o alvo, a próxima etapa destrava.

export type TipoAtividade =
  | "vogal-som" // ouvir vogal e escolher
  | "rima"
  | "aliteracao"
  | "som-inicial"
  | "segmentacao"
  | "fusao"
  | "frase-imagem"
  | "texto-compreensao";

export interface EtapaCurricular {
  id: string;
  ordem: number;
  titulo: string;
  descricao: string;
  emoji: string;
  cor: string; // tailwind classes
  alvo: number; // acertos necessários pra destravar a próxima
  atividades: TipoAtividade[];
}

export const ETAPAS: EtapaCurricular[] = [
  {
    id: "vogais",
    ordem: 1,
    titulo: "Vogais",
    descricao: "Ouvir e reconhecer A, E, I, O, U",
    emoji: "🅰️",
    cor: "from-pink-400 to-rose-500",
    alvo: 5,
    atividades: ["vogal-som"],
  },
  {
    id: "silabas",
    ordem: 2,
    titulo: "Sílabas simples",
    descricao: "Segmentar e juntar pedacinhos das palavras",
    emoji: "🧩",
    cor: "from-orange-400 to-amber-500",
    alvo: 6,
    atividades: ["segmentacao", "fusao"],
  },
  {
    id: "palavras",
    ordem: 3,
    titulo: "Palavras",
    descricao: "Sons iniciais, rimas e aliteração",
    emoji: "🐾",
    cor: "from-emerald-400 to-teal-500",
    alvo: 8,
    atividades: ["som-inicial", "rima", "aliteracao"],
  },
  {
    id: "frases",
    ordem: 4,
    titulo: "Frases curtas",
    descricao: "Ouvir uma frase e achar a imagem",
    emoji: "💬",
    cor: "from-sky-400 to-blue-500",
    alvo: 5,
    atividades: ["frase-imagem"],
  },
  {
    id: "textos",
    ordem: 5,
    titulo: "Textos curtos",
    descricao: "Ouvir uma história e responder",
    emoji: "📖",
    cor: "from-violet-400 to-purple-500",
    alvo: 4,
    atividades: ["texto-compreensao"],
  },
  {
    id: "compreensao",
    ordem: 6,
    titulo: "Compreensão",
    descricao: "Entender o que aconteceu na história",
    emoji: "🧠",
    cor: "from-fuchsia-400 to-pink-500",
    alvo: 4,
    atividades: ["texto-compreensao"],
  },
];

export const ETAPA_POR_ID = Object.fromEntries(ETAPAS.map((e) => [e.id, e]));
