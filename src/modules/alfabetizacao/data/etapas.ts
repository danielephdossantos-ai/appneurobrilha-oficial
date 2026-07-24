// Progressão pedagógica BLOQUEADA. Não permitir pular etapas.
// Cada etapa tem N rodadas; concluir 1 rodada = 1 ponto.
// Quando atinge o alvo, a próxima etapa destrava.

export type TipoAtividade =
  | "vogal-som"
  | "rima"
  | "aliteracao"
  | "som-inicial"
  | "som-final"
  | "som-meio"
  | "contagem-fonemas"
  | "substituicao-fonema"
  | "categorizacao-som"
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
  alvo: number;
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
    id: "fonemas",
    ordem: 4,
    titulo: "Fonemas",
    descricao: "Som do começo, do meio, do fim, contar e trocar sons",
    emoji: "🔊",
    cor: "from-cyan-400 to-sky-500",
    alvo: 10,
    atividades: [
      "som-final",
      "som-meio",
      "contagem-fonemas",
      "categorizacao-som",
      "substituicao-fonema",
    ],
  },
  {
    id: "frases",
    ordem: 5,
    titulo: "Frases curtas",
    descricao: "Ouvir uma frase e achar a imagem",
    emoji: "💬",
    cor: "from-sky-400 to-blue-500",
    alvo: 5,
    atividades: ["frase-imagem"],
  },
  {
    id: "textos",
    ordem: 6,
    titulo: "Textos curtos",
    descricao: "Ouvir uma história e responder",
    emoji: "📖",
    cor: "from-violet-400 to-purple-500",
    alvo: 4,
    atividades: ["texto-compreensao"],
  },
  {
    id: "compreensao",
    ordem: 7,
    titulo: "Compreensão",
    descricao: "Entender o que aconteceu na história",
    emoji: "🧠",
    cor: "from-fuchsia-400 to-pink-500",
    alvo: 4,
    atividades: ["texto-compreensao"],
  },
];

export const ETAPA_POR_ID = Object.fromEntries(ETAPAS.map((e) => [e.id, e]));
