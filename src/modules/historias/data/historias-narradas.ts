import type { Story, StoryPage, StoryQuestion } from "../types";
import type { GeneratedLibraryStory, StoryCategory } from "../lib/story-library";

/**
 * Banco de histórias REAIS — com enredo, personagem, conflito e desfecho.
 * Cada história também tem perguntas de compreensão de verdade
 * (quem / o que / por quê / como), não só "qual palavra está destacada".
 *
 * À medida que novas histórias forem aprovadas, são adicionadas aqui.
 */

type Categoria = StoryCategory;

interface HistoriaNarrada {
  story: Story & { category: Categoria };
  pages: Array<Omit<StoryPage, "story_id">>;
  questions: Array<Omit<StoryQuestion, "story_id">>;
}

const HISTORIAS: HistoriaNarrada[] = [
  {
    story: {
      id: "alfabetizacao-piloto-rex",
      title: "Rex, o dinossauro tímido",
      description:
        "Rex é um dinossauro pequeno que tem medo de fazer amigos. Em um dia de chuva, ele descobre que ser corajoso pode ser mais fácil do que parece.",
      cover_image: null,
      reading_level: "iniciante",
      age_min: 6,
      age_max: 8,
      theme: "dinossauros",
      difficulty: 2,
      ai_generated: false,
      category: "alfabetizacao",
    },
    pages: [
      {
        id: "alfabetizacao-piloto-rex-page-1",
        page_number: 1,
        text: "Rex era um dinossauro pequeno e verde. Ele morava numa floresta cheia de outros dinossauros, mas tinha muita vergonha de chegar perto deles. Toda manhã, Rex ficava escondido atrás de uma samambaia, só olhando os amigos brincarem de longe.",
        image_url: null,
        audio_url: null,
        highlight_words: ["dinossauro", "vergonha", "escondido"],
      },
      {
        id: "alfabetizacao-piloto-rex-page-2",
        page_number: 2,
        text: "Num dia de chuva forte, Rex viu uma dinossaurinha chamada Lila escorregar na lama e machucar o joelho. Sem pensar duas vezes, Rex correu, ajudou Lila a se levantar e a levou para debaixo de uma árvore grande para se proteger.",
        image_url: null,
        audio_url: null,
        highlight_words: ["chuva", "ajudou", "árvore"],
      },
      {
        id: "alfabetizacao-piloto-rex-page-3",
        page_number: 3,
        text: "Lila sorriu e disse: 'Obrigada, Rex! Você é muito corajoso.' Rex sentiu o coração quentinho. A partir daquele dia, ele entendeu que ser amigo era só dar o primeiro passo — e nunca mais ficou escondido atrás da samambaia sozinho.",
        image_url: null,
        audio_url: null,
        highlight_words: ["corajoso", "amigo", "primeiro"],
      },
    ],
    questions: [
      {
        id: "alfabetizacao-piloto-rex-q-1",
        question: "Por que o Rex ficava escondido atrás da samambaia?",
        option_a: "Porque ele tinha vergonha dos outros dinossauros",
        option_b: "Porque ele estava com fome",
        option_c: "Porque a samambaia era a casa dele",
        correct_answer: "a",
        difficulty: 1,
      },
      {
        id: "alfabetizacao-piloto-rex-q-2",
        question: "O que aconteceu com a Lila no dia de chuva?",
        option_a: "Ela ficou perdida na floresta",
        option_b: "Ela escorregou na lama e machucou o joelho",
        option_c: "Ela achou um ovo de dinossauro",
        correct_answer: "b",
        difficulty: 2,
      },
      {
        id: "alfabetizacao-piloto-rex-q-3",
        question: "O que o Rex aprendeu no final da história?",
        option_a: "Que chuva forte é perigosa",
        option_b: "Que samambaia é o melhor esconderijo",
        option_c: "Que para ter amigos basta dar o primeiro passo",
        correct_answer: "c",
        difficulty: 2,
      },
    ],
  },
];

export function getHistoriaNarrada(storyId: string): GeneratedLibraryStory | null {
  const found = HISTORIAS.find((h) => h.story.id === storyId);
  if (!found) return null;
  const { category: _category, ...storyBase } = found.story;
  return {
    story: storyBase as Story,
    pages: found.pages.map((p) => ({ ...p, story_id: found.story.id })),
    questions: found.questions.map((q) => ({ ...q, story_id: found.story.id })),
  };
}

export function listHistoriasNarradas(): Array<Story & { category: Categoria }> {
  return HISTORIAS.map((h) => h.story);
}
