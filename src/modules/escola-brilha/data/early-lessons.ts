import { EarlyLesson, VowelPracticeStep } from "../types/early-lesson";

type VowelInfo = {
  letter: "A" | "E" | "I" | "O" | "U";
  color: string;
  bg: string;
  text: string;
  illustration: "pineapple" | "elephant" | "iguana" | "sheep" | "grape";
  word: string;
  word2: string;
  speech: string;
  teachId: string;
};

const VOWELS: VowelInfo[] = [
  {
    letter: "A",
    color: "text-rose-600",
    bg: "bg-rose-100",
    text: "border-rose-400",
    illustration: "pineapple",
    word: "Abacaxi",
    word2: "Abelha",
    speech: "Ááá! Ááá! Esta letra tem o som Á, como em Abacaxi e Abelha. Repita comigo: Ááá!",
    teachId: "teach-a",
  },
  {
    letter: "E",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    text: "border-emerald-400",
    illustration: "elephant",
    word: "Elefante",
    word2: "Estrela",
    speech: "Ééé! Ééé! Esta letra tem o som É, como em Elefante e Estrela. Repita comigo: Ééé!",
    teachId: "teach-e",
  },
  {
    letter: "I",
    color: "text-amber-600",
    bg: "bg-amber-100",
    text: "border-amber-400",
    illustration: "iguana",
    word: "Iguana",
    word2: "Igreja",
    speech: "Iii! Iii! Esta letra tem o som I, como em Iguana e Igreja. Repita comigo: Iii!",
    teachId: "teach-i",
  },
  {
    letter: "O",
    color: "text-blue-600",
    bg: "bg-blue-100",
    text: "border-blue-400",
    illustration: "sheep",
    word: "Ovelha",
    word2: "Ovo",
    speech: "Óóó! Óóó! Esta letra tem o som Ó, como em Ovelha e Ovo. Repita comigo: Óóó!",
    teachId: "teach-o",
  },
  {
    letter: "U",
    color: "text-violet-600",
    bg: "bg-violet-100",
    text: "border-violet-400",
    illustration: "grape",
    word: "Uva",
    word2: "Urso",
    speech: "Uuu! Uuu! Esta letra tem o som U, como em Uva e Urso. Repita comigo: Uuu!",
    teachId: "teach-u",
  },
];

const VOWEL_PROMPTS = [
  (v: VowelInfo) =>
    `Encontre a letra com som ${v.letter}${v.letter}${v.letter}! Toque na letra de ${v.word}!`,
  (v: VowelInfo) => `Qual é a letra ${v.letter}? Toque nela!`,
  (v: VowelInfo) => `${v.word} começa com qual letra? Toque na letra certa!`,
  (v: VowelInfo) =>
    `Ouça: ${v.letter}${v.letter}${v.letter}! Toque na letra que faz esse som!`,
  (v: VowelInfo) => `Vamos achar a letra ${v.letter} de ${v.word2}! Toque nela!`,
];

const buildVowelPractice = (target: VowelInfo, variation: number): VowelPracticeStep => {
  const others = VOWELS.filter((v) => v.letter !== target.letter);
  const shift = variation % others.length;
  const shifted = [...others.slice(shift), ...others.slice(0, shift)];
  const distractors = shifted.slice(0, 2);
  const pos = variation % 3;
  const opts = [...distractors];
  opts.splice(pos, 0, target);
  return {
    kind: "vowel-practice",
    id: `practice-${target.letter.toLowerCase()}-${variation + 1}`,
    target: target.letter,
    target_color: target.color,
    target_bg: target.bg,
    question_speech: VOWEL_PROMPTS[variation % VOWEL_PROMPTS.length](target),
    options: opts.map((v) => ({ letter: v.letter, color: v.color, bg: v.bg })),
  };
};

export const VOGAIS_LESSON: EarlyLesson = {
  id: "vogais",
  title: "As Vogais",
  steps: [
    {
      kind: "intro",
      id: "intro",
      illustration: "vowels-icon",
      title: "As Vogais",
      speech:
        "Olá! Vou te ensinar as vogais! As vogais são letras muito especiais. Elas são: A, E, I, O, U! Vamos aprender juntos?",
    },
    // Para cada vogal: 1 teach + 5 variações de prática.
    // Total: 1 intro + 5 teach + 25 practice = 31 atividades (mesmo padrão de Vamos Contar).
    ...VOWELS.flatMap((v) => [
      {
        kind: "vowel-teach" as const,
        id: v.teachId,
        vowel: v.letter,
        color: v.color,
        bg: v.bg,
        text: v.text,
        illustration: v.illustration,
        word: v.word,
        word2: v.word2,
        speech: v.speech,
      },
      ...Array.from({ length: 5 }, (_, i) => buildVowelPractice(v, i)),
    ]),
  ],
};

const COUNT_WORDS = [
  "Um",
  "Dois",
  "Três",
  "Quatro",
  "Cinco",
  "Seis",
  "Sete",
  "Oito",
  "Nove",
  "Dez",
];

type IllustName =
  | "apple" | "dog" | "star" | "fish" | "lollipop" | "banana"
  | "tropical-fish" | "balloon" | "pineapple" | "elephant" | "bee"
  | "bear" | "egg" | "macaw" | "ring" | "ladder" | "unicorn" | "grape";

/* Banco de cenas para contagem — reutiliza ilustrações já registradas */
const COUNT_SCENES: { illustration: IllustName; name: string; plural: string }[] = [
  { illustration: "dog", name: "cachorrinho", plural: "cachorrinhos" },
  { illustration: "star", name: "estrelinha", plural: "estrelinhas" },
  { illustration: "fish", name: "peixinho", plural: "peixinhos" },
  { illustration: "lollipop", name: "pirulito", plural: "pirulitos" },
  { illustration: "apple", name: "maçã", plural: "maçãs" },
  { illustration: "banana", name: "banana", plural: "bananas" },
  { illustration: "balloon", name: "balão", plural: "balões" },
  { illustration: "tropical-fish", name: "peixinho", plural: "peixinhos" },
  { illustration: "bee", name: "abelhinha", plural: "abelhinhas" },
  { illustration: "egg", name: "ovinho", plural: "ovinhos" },
  { illustration: "bear", name: "ursinho", plural: "ursinhos" },
  { illustration: "macaw", name: "ararinha", plural: "ararinhas" },
  { illustration: "pineapple", name: "abacaxi", plural: "abacaxis" },
  { illustration: "elephant", name: "elefantinho", plural: "elefantinhos" },
  { illustration: "ring", name: "anelzinho", plural: "anelzinhos" },
];

/* 15 quantidades variadas de 1 a 10 */
const COUNT_QUANTITIES = [3, 2, 5, 4, 6, 1, 7, 8, 5, 9, 4, 10, 6, 7, 3];

const buildCountOptions = (n: number): number[] => {
  const opts = new Set<number>([n]);
  let a = Math.max(1, n - 1);
  let b = Math.min(10, n + 1);
  if (a === n) a = Math.min(10, n + 2);
  if (b === n) b = Math.max(1, n - 2);
  opts.add(a);
  opts.add(b);
  return Array.from(opts).sort(() => Math.random() - 0.5);
};

export const CONTAGEM_LESSON: EarlyLesson = {
  id: "contagem",
  title: "Vamos Contar!",
  steps: [
    {
      kind: "intro",
      id: "intro",
      illustration: "counting-icon",
      title: "Vamos Contar!",
      speech:
        "Olá! Vamos contar juntos! Vou te mostrar várias coisinhas. Você conta e toca no número certo! Vamos lá!",
    },
    ...COUNT_QUANTITIES.flatMap((count, idx) => {
      const scene = COUNT_SCENES[idx % COUNT_SCENES.length];
      const noun = count === 1 ? scene.name : scene.plural;
      return [
        {
          kind: "count-teach" as const,
          id: `teach-${idx + 1}`,
          illustration: scene.illustration,
          count,
          speech: `Olha que legal! Vamos contar ${count === 1 ? "este" : "estes"} ${noun} juntos!`,
          count_words: COUNT_WORDS.slice(0, count),
        },
        {
          kind: "count-practice" as const,
          id: `practice-${idx + 1}`,
          illustration: scene.illustration,
          count,
          question_speech: `Quantos ${noun} você vê? Toque no número certo!`,
          options: buildCountOptions(count),
        },
      ];
    }),
  ],
};

/* Banco de cenas para subtração — 15 variações */
const SUBTRACT_SCENES: {
  illustration: IllustName;
  name: string;
  plural: string;
  total: number;
  remove: number;
  remove_action: string;
}[] = [
  { illustration: "apple", name: "maçã", plural: "maçãs", total: 4, remove: 1, remove_action: "Uma maçã caiu!" },
  { illustration: "banana", name: "banana", plural: "bananas", total: 5, remove: 2, remove_action: "Duas bananas foram comidas!" },
  { illustration: "star", name: "estrelinha", plural: "estrelinhas", total: 6, remove: 3, remove_action: "Três estrelinhas se apagaram!" },
  { illustration: "tropical-fish", name: "peixinho", plural: "peixinhos", total: 7, remove: 4, remove_action: "Quatro peixinhos nadaram para longe!" },
  { illustration: "balloon", name: "balão", plural: "balões", total: 8, remove: 5, remove_action: "Cinco balões voaram para o céu!" },
  { illustration: "dog", name: "cachorrinho", plural: "cachorrinhos", total: 3, remove: 1, remove_action: "Um cachorrinho foi passear!" },
  { illustration: "lollipop", name: "pirulito", plural: "pirulitos", total: 5, remove: 3, remove_action: "Três pirulitos foram dados aos amigos!" },
  { illustration: "fish", name: "peixinho", plural: "peixinhos", total: 6, remove: 2, remove_action: "Dois peixinhos saíram do aquário!" },
  { illustration: "bee", name: "abelhinha", plural: "abelhinhas", total: 4, remove: 2, remove_action: "Duas abelhinhas foram para o jardim!" },
  { illustration: "egg", name: "ovinho", plural: "ovinhos", total: 6, remove: 4, remove_action: "Quatro ovinhos chocaram!" },
  { illustration: "bear", name: "ursinho", plural: "ursinhos", total: 5, remove: 1, remove_action: "Um ursinho foi dormir!" },
  { illustration: "macaw", name: "ararinha", plural: "ararinhas", total: 7, remove: 3, remove_action: "Três ararinhas voaram!" },
  { illustration: "pineapple", name: "abacaxi", plural: "abacaxis", total: 4, remove: 3, remove_action: "Três abacaxis foram para a feira!" },
  { illustration: "elephant", name: "elefantinho", plural: "elefantinhos", total: 5, remove: 2, remove_action: "Dois elefantinhos foram tomar banho!" },
  { illustration: "ring", name: "anelzinho", plural: "anelzinhos", total: 6, remove: 3, remove_action: "Três anelzinhos foram guardados!" },
];

const buildSubOptions = (result: number): number[] => {
  const opts = new Set<number>([result]);
  let a = Math.max(0, result - 1);
  let b = result + 1;
  if (a === result) a = result + 2;
  if (b === result) b = Math.max(0, result - 2);
  opts.add(a);
  opts.add(b);
  return Array.from(opts).sort((x, y) => x - y);
};

export const SUBTRACAO_LESSON: EarlyLesson = {
  id: "subtracao",
  title: "Subtrair é Tirar!",
  steps: [
    {
      kind: "intro",
      id: "intro",
      illustration: "subtract-icon",
      title: "Subtrair é Tirar!",
      speech:
        "Olá! Vamos aprender subtração! Subtrair significa tirar! Quando você tira alguma coisa, a quantidade fica menor! Vamos ver como funciona!",
    },
    ...SUBTRACT_SCENES.map((scene, idx) => {
      const totalNoun = scene.total === 1 ? scene.name : scene.plural;
      const result = scene.total - scene.remove;
      const resultNoun = result === 1 ? scene.name : scene.plural;
      return {
        kind: "subtract" as const,
        id: `sub-${idx + 1}`,
        illustration: scene.illustration,
        total: scene.total,
        remove: scene.remove,
        teach_speech: `Olha! Temos ${scene.total} ${totalNoun} aqui!`,
        remove_speech: `Agora vamos tirar ${scene.remove}! ${scene.remove_action}`,
        question_speech: `Quantos ${resultNoun} sobraram? Toque no número certo!`,
        options: buildSubOptions(result),
      };
    }),
  ],
};
