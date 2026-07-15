export type LevelId = "starter" | "elementary" | "basic" | "pre-intermediate" | "intermediate";

export type Level = {
  id: LevelId;
  title: string;
  subtitle: string;
  cefr: string;
  gradient: string;
  glow: string;
};

export const LEVELS: Level[] = [
  { id: "starter",          title: "Nível 1 — Starter",          subtitle: "Primeiros passos",     cefr: "A0", gradient: "from-[#22C55E] via-[#16A34A] to-[#14532D]", glow: "rgba(34,197,94,0.55)" },
  { id: "elementary",       title: "Nível 2 — Elementary",       subtitle: "Base do idioma",       cefr: "A1", gradient: "from-[#3B82F6] via-[#1D4ED8] to-[#1E3A8A]", glow: "rgba(59,130,246,0.55)" },
  { id: "basic",            title: "Nível 3 — Basic",            subtitle: "Comunicação simples",  cefr: "A2", gradient: "from-[#A855F7] via-[#7C3AED] to-[#4C1D95]", glow: "rgba(168,85,247,0.55)" },
  { id: "pre-intermediate", title: "Nível 4 — Pre-Intermediate", subtitle: "Ganhando fluência",    cefr: "B1", gradient: "from-[#F59E0B] via-[#D97706] to-[#7C2D12]", glow: "rgba(245,158,11,0.55)" },
  { id: "intermediate",     title: "Nível 5 — Intermediate",     subtitle: "Autonomia real",       cefr: "B2", gradient: "from-[#EF4444] via-[#B91C1C] to-[#450A0A]", glow: "rgba(239,68,68,0.55)" },
];

export type Academy = {
  slug: string;
  title: string;
  subtitle: string;
  level: LevelId;
  gradient: string;
  glow: string;
  status: "aberta" | "em-breve";
  descricao: string;
};

export const ACADEMIES: Academy[] = [
  // ── Nível 1 · Starter (A0) ──────────────────────────
  { slug: "alphabet",      title: "Alphabet Academy",      subtitle: "26 letras + spelling",    level: "starter", gradient: "from-[#22C55E] via-[#16A34A] to-[#14532D]", glow: "rgba(34,197,94,0.55)", status: "em-breve",
    descricao: "Som de cada letra, spelling, pronúncia e jogos de soletração." },
  { slug: "numbers",       title: "Numbers Academy",       subtitle: "Do 1 ao 1.000.000",        level: "starter", gradient: "from-[#F59E0B] via-[#D97706] to-[#7C2D12]", glow: "rgba(245,158,11,0.55)", status: "aberta",
    descricao: "Unidades, ordinais, frações, datas, dinheiro e matemática em inglês." },
  { slug: "colors",        title: "Colors Academy",        subtitle: "Cores + tons",             level: "starter", gradient: "from-[#EC4899] via-[#DB2777] to-[#831843]", glow: "rgba(236,72,153,0.55)", status: "em-breve",
    descricao: "Primárias, secundárias, tons e como usar cores em frases reais." },
  { slug: "shapes",        title: "Shapes Academy",        subtitle: "Formas geométricas",       level: "starter", gradient: "from-[#0EA5E9] via-[#0284C7] to-[#0C4A6E]", glow: "rgba(14,165,233,0.55)", status: "em-breve",
    descricao: "Círculo, quadrado, triângulo e formas do dia a dia em inglês." },
  { slug: "pronunciation", title: "Pronunciation Academy", subtitle: "TH, R, L e mais",          level: "starter", gradient: "from-[#A855F7] via-[#7C3AED] to-[#4C1D95]", glow: "rgba(168,85,247,0.55)", status: "em-breve",
    descricao: "Sons difíceis, minimal pairs, silent letters e reconhecimento de voz." },

  // ── Nível 2 · Elementary (A1) ───────────────────────
  { slug: "vocabulary",    title: "Vocabulary Academy",    subtitle: "300+ temas",               level: "elementary", gradient: "from-[#8B5CF6] via-[#6D28D9] to-[#4C1D95]", glow: "rgba(139,92,246,0.55)", status: "em-breve",
    descricao: "Animais, comida, casa, escola, tecnologia — centenas de categorias." },
  { slug: "verbs",         title: "Verb Academy",          subtitle: "400+ verbos essenciais",   level: "elementary", gradient: "from-[#FF3D68] via-[#E11D48] to-[#7F1D1D]", glow: "rgba(255,61,104,0.65)", status: "em-breve",
    descricao: "Cada verbo com significado, pronúncia, conjugação e frases reais." },
  { slug: "grammar",       title: "Grammar Academy",       subtitle: "Toda a gramática",         level: "elementary", gradient: "from-[#3B82F6] via-[#1D4ED8] to-[#1E3A8A]", glow: "rgba(59,130,246,0.55)", status: "em-breve",
    descricao: "Verb To Be, Simple Present, Past, Future e muito mais." },
  { slug: "speaking",      title: "Speaking Academy",      subtitle: "Fale em voz alta",         level: "elementary", gradient: "from-[#F43F5E] via-[#E11D48] to-[#881337]", glow: "rgba(244,63,94,0.55)", status: "em-breve",
    descricao: "Conversação guiada com reconhecimento de voz." },
  { slug: "listening",     title: "Listening Academy",     subtitle: "Diálogos + áudios",        level: "elementary", gradient: "from-[#EC4899] via-[#DB2777] to-[#831843]", glow: "rgba(236,72,153,0.55)", status: "em-breve",
    descricao: "Diálogos, entrevistas, notícias e podcasts com áudio real." },

  // ── Nível 3 · Basic (A2) ────────────────────────────
  { slug: "reading",       title: "Reading Academy",       subtitle: "A1 → B2 graduado",         level: "basic", gradient: "from-[#0EA5E9] via-[#0284C7] to-[#0C4A6E]", glow: "rgba(14,165,233,0.55)", status: "em-breve",
    descricao: "Leitura em 5 níveis: frases, textos curtos, histórias e artigos." },
  { slug: "writing",       title: "Writing Academy",       subtitle: "Escrever em inglês",       level: "basic", gradient: "from-[#14B8A6] via-[#0D9488] to-[#134E4A]", glow: "rgba(20,184,166,0.55)", status: "em-breve",
    descricao: "Frases, parágrafos, cartas, emails, diários e artigos." },
  { slug: "conversation",  title: "Conversation Academy",  subtitle: "Diálogos reais",           level: "basic", gradient: "from-[#F97316] via-[#EA580C] to-[#7C2D12]", glow: "rgba(249,115,22,0.55)", status: "em-breve",
    descricao: "Conversação em pares: apresentar-se, pedir ajuda, negociar, discordar." },
  { slug: "daily-life",    title: "Daily Life Academy",    subtitle: "Rotina em inglês",         level: "basic", gradient: "from-[#10B981] via-[#059669] to-[#064E3B]", glow: "rgba(16,185,129,0.55)", status: "em-breve",
    descricao: "Acordar, comer, trabalhar, estudar, dormir — tudo em inglês." },
  { slug: "school-english",title: "School English",        subtitle: "Sala de aula",             level: "basic", gradient: "from-[#6366F1] via-[#4F46E5] to-[#312E81]", glow: "rgba(99,102,241,0.55)", status: "em-breve",
    descricao: "Vocabulário e frases usadas na escola e em provas." },

  // ── Nível 4 · Pre-Intermediate (B1) ─────────────────
  { slug: "travel",        title: "Travel English",        subtitle: "Aeroporto, hotel, tour",   level: "pre-intermediate", gradient: "from-[#F59E0B] via-[#D97706] to-[#7C2D12]", glow: "rgba(245,158,11,0.55)", status: "em-breve",
    descricao: "Check-in, imigração, hotel, restaurante e passeios turísticos." },
  { slug: "business",      title: "Business Basics",       subtitle: "Trabalho + reuniões",      level: "pre-intermediate", gradient: "from-[#334155] via-[#1E293B] to-[#020617]", glow: "rgba(100,116,139,0.55)", status: "em-breve",
    descricao: "Emails, reuniões, entrevistas e apresentações profissionais." },
  { slug: "idioms",        title: "Idioms Academy",        subtitle: "Expressões nativas",       level: "pre-intermediate", gradient: "from-[#DC2626] via-[#991B1B] to-[#450A0A]", glow: "rgba(220,38,38,0.55)", status: "em-breve",
    descricao: "Expressões que aparecem em séries, músicas e conversa real." },
  { slug: "phrasal-verbs", title: "Phrasal Verbs Academy", subtitle: "Get up, look for, run out",level: "pre-intermediate", gradient: "from-[#7C3AED] via-[#5B21B6] to-[#2E1065]", glow: "rgba(124,58,237,0.55)", status: "em-breve",
    descricao: "Os verbos frasais mais usados, com contexto e jogos." },
  { slug: "music",         title: "Music & Songs",         subtitle: "Aprender cantando",        level: "pre-intermediate", gradient: "from-[#EC4899] via-[#BE185D] to-[#500724]", glow: "rgba(236,72,153,0.55)", status: "em-breve",
    descricao: "Letras, refrões e vocabulário direto das músicas." },

  // ── Nível 5 · Intermediate (B2) ─────────────────────
  { slug: "science",       title: "Science English",       subtitle: "Ciência em inglês",        level: "intermediate", gradient: "from-[#0EA5E9] via-[#0369A1] to-[#082F49]", glow: "rgba(14,165,233,0.55)", status: "em-breve",
    descricao: "Biologia, química, física, astronomia e tecnologia em inglês." },
  { slug: "stories",       title: "Story Library",         subtitle: "500+ histórias",           level: "intermediate", gradient: "from-[#6366F1] via-[#4F46E5] to-[#312E81]", glow: "rgba(99,102,241,0.55)", status: "em-breve",
    descricao: "Histórias em A1, A2, B1, B2 — com áudio, vocabulário e perguntas." },
  { slug: "games",         title: "English Games",         subtitle: "Aprender jogando",         level: "intermediate", gradient: "from-[#10B981] via-[#059669] to-[#064E3B]", glow: "rgba(16,185,129,0.55)", status: "em-breve",
    descricao: "Caça-palavras, forca, memória, bingo, flashcards, escape room." },
  { slug: "exam-prep",     title: "Exam Preparation",      subtitle: "Cambridge, TOEFL, IELTS",  level: "intermediate", gradient: "from-[#B91C1C] via-[#7F1D1D] to-[#1C0505]", glow: "rgba(185,28,28,0.55)", status: "em-breve",
    descricao: "Formato oficial de provas, simulados e estratégias por seção." },
  { slug: "culture",       title: "Culture Academy",       subtitle: "Cultura + gírias",         level: "intermediate", gradient: "from-[#DC2626] via-[#991B1B] to-[#450A0A]", glow: "rgba(220,38,38,0.55)", status: "em-breve",
    descricao: "Feriados, comida, expressões, gírias e diferenças EUA/UK." },
];
