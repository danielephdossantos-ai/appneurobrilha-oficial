export type Academy = {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  gradient: string;
  glow: string;
  status: "aberta" | "em-breve";
  descricao: string;
};

export const ACADEMIES: Academy[] = [
  {
    slug: "verbs",
    title: "Verb Academy",
    subtitle: "400+ verbos essenciais",
    emoji: "🧠",
    gradient: "from-[#FF3D68] via-[#E11D48] to-[#7F1D1D]",
    glow: "rgba(255,61,104,0.65)",
    status: "aberta",
    descricao:
      "Cada verbo com significado, pronúncia, conjugação, frases, exemplos e jogos. Comece pelos 10 verbos mais usados do inglês.",
  },
  { slug: "grammar", title: "Grammar Academy", subtitle: "Toda a gramática", emoji: "📖", gradient: "from-[#3B82F6] via-[#1D4ED8] to-[#1E3A8A]", glow: "rgba(59,130,246,0.55)", status: "em-breve", descricao: "Verb To Be, Simple Present, Past, Future, Modal Verbs, Conditionals, Passive Voice e muito mais." },
  { slug: "alphabet", title: "Alphabet Academy", subtitle: "26 letras + spelling", emoji: "🔤", gradient: "from-[#22C55E] via-[#16A34A] to-[#14532D]", glow: "rgba(34,197,94,0.55)", status: "em-breve", descricao: "Som de cada letra, spelling, pronúncia e jogos de soletração." },
  { slug: "numbers", title: "Numbers Academy", subtitle: "Do 1 ao 1.000.000", emoji: "🔢", gradient: "from-[#F59E0B] via-[#D97706] to-[#7C2D12]", glow: "rgba(245,158,11,0.55)", status: "em-breve", descricao: "Unidades, ordinais, frações, datas, dinheiro e matemática em inglês." },
  { slug: "pronunciation", title: "Pronunciation Academy", subtitle: "TH, R, L e mais", emoji: "🔊", gradient: "from-[#A855F7] via-[#7C3AED] to-[#4C1D95]", glow: "rgba(168,85,247,0.55)", status: "em-breve", descricao: "Sons difíceis, minimal pairs, silent letters e reconhecimento de voz." },
  { slug: "reading", title: "Reading Academy", subtitle: "A1 → B2 graduado", emoji: "📚", gradient: "from-[#0EA5E9] via-[#0284C7] to-[#0C4A6E]", glow: "rgba(14,165,233,0.55)", status: "em-breve", descricao: "Leitura em 5 níveis: frases, textos curtos, histórias, contos e artigos." },
  { slug: "listening", title: "Listening Academy", subtitle: "Diálogos + áudios", emoji: "🎧", gradient: "from-[#EC4899] via-[#DB2777] to-[#831843]", glow: "rgba(236,72,153,0.55)", status: "em-breve", descricao: "Diálogos, entrevistas, notícias e podcasts com áudio real." },
  { slug: "speaking", title: "Speaking Academy", subtitle: "Fale em voz alta", emoji: "🎙️", gradient: "from-[#F43F5E] via-[#E11D48] to-[#881337]", glow: "rgba(244,63,94,0.55)", status: "em-breve", descricao: "Conversação com reconhecimento de voz: hotel, viagem, entrevista, restaurante." },
  { slug: "writing", title: "Writing Academy", subtitle: "Escrever em inglês", emoji: "✍️", gradient: "from-[#14B8A6] via-[#0D9488] to-[#134E4A]", glow: "rgba(20,184,166,0.55)", status: "em-breve", descricao: "Frases, parágrafos, cartas, emails, diários, artigos." },
  { slug: "vocabulary", title: "Vocabulary Academy", subtitle: "300+ temas", emoji: "💬", gradient: "from-[#8B5CF6] via-[#6D28D9] to-[#4C1D95]", glow: "rgba(139,92,246,0.55)", status: "em-breve", descricao: "Animais, comida, casa, escola, tecnologia, saúde, natureza — centenas de categorias." },
  { slug: "real-english", title: "Real English", subtitle: "Situações reais", emoji: "💼", gradient: "from-[#FB923C] via-[#EA580C] to-[#7C2D12]", glow: "rgba(251,146,60,0.55)", status: "em-breve", descricao: "Aeroporto, hospital, mercado, entrevista, universidade, emergência." },
  { slug: "stories", title: "Story Library", subtitle: "500+ histórias", emoji: "📖", gradient: "from-[#6366F1] via-[#4F46E5] to-[#312E81]", glow: "rgba(99,102,241,0.55)", status: "em-breve", descricao: "Histórias em A1, A2, B1, B2 — com áudio, vocabulário e perguntas." },
  { slug: "culture", title: "American Culture", subtitle: "Comidas + gírias", emoji: "🇺🇸", gradient: "from-[#DC2626] via-[#991B1B] to-[#450A0A]", glow: "rgba(220,38,38,0.55)", status: "em-breve", descricao: "Feriados, comida, expressões, gírias e diferenças com o inglês britânico." },
  { slug: "games", title: "English Games", subtitle: "Aprender jogando", emoji: "🎮", gradient: "from-[#10B981] via-[#059669] to-[#064E3B]", glow: "rgba(16,185,129,0.55)", status: "em-breve", descricao: "Caça-palavras, forca, memória, bingo, flashcards, escape room." },
];
