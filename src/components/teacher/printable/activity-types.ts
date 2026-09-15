export type IllustrationName =
  | "casa" | "bola" | "cachorro" | "gato" | "sapo" | "abelha" | "borboleta" | "peixe" | "arvore" | "flor"
  | "banana" | "maca" | "uva" | "livro" | "lapis" | "tesoura" | "escola" | "crianca" | "mao" | "estrela" | "coracao"
  | "bebe" | "mae" | "pai" | "sol" | "pato" | "rato"
  | "circulo" | "quadrado" | "triangulo" | "numero" | "letra" | "silaba";

export type MediaItem = { illustration?: IllustrationName; srcUrl?: string; label: string };

export type PrintableActivity =
  | { kind: "guide"; objective: string; materials: string[]; preparation: string[]; steps: string[]; observe: string[] }
  | { kind: "model"; instruction: string; modelTitle: string; modelSteps: { label: string; text: string; media?: MediaItem }[] }
  | { kind: "association"; instruction: string; choices: { label: string; media: MediaItem; options: string[] }[]; response: string }
  | { kind: "cut-sort"; instruction: string; cards: { label: string; media?: MediaItem }[]; columns: string[] }
  | { kind: "complete"; instruction: string; items: { label: string; media?: MediaItem; answerWidth: "short" | "long"; mode: "write" | "circle" | "order" }[]; response: string }
  | { kind: "levels"; instruction: string; levels: { name: string; task: string; support: string; media?: MediaItem }[] }
  | { kind: "record"; rows: string[] }
  | { kind: "answer"; answerKey: string[]; likelyError: string; intervention: string; decision: string; relatedActivity?: string };
  | { kind: "source-sheet"; instruction: string; items: { label: string; media?: MediaItem; options?: string[]; responseLines?: number }[]; note?: string };

export type PrintablePage = {
  id: string;
  number: number;
  title: string;
  purpose: string;
  audience: "teacher" | "student";
  activity?: PrintableActivity;
};

export type LiteracyModule = {
  id: string;
  number: number;
  title: string;
  summary: string;
  relatedResources: RelatedResource[];
  pages: PrintablePage[];
  source?: {
    app: "Neuro-Treino" | "Escola Brilha" | "Biblioteca Encantada";
    location: string;
    route: string;
    bncc?: string;
    activityType?: string;
  };
};

export type RelatedResource = { source: "Escola Brilha" | "Neuro-Treino" | "Brilha Vida"; title: string; reason: string; route?: string };
