// Inglês 8º Ano — Unit 2 "Media and Communication 📱"
// Reported Speech (introdução) · Indirect questions
import type { LessonData } from "../../ingles-1ano/types";
import { IMG } from "../_assets";

const lesson: LessonData = {
  slug: "u8-a02-media",
  meta: {
    unitLabel: "Unit 2 · Lesson 1 — Media and Communication 📱",
    headerKicker: "SPEB 1.0 · English Academy — 8th Grade",
    coverKicker: "News · Podcasts · Blogs · Fake News",
    coverTitle: "Media and Communication 📱",
    coverSubtitle:
      "Os alunos abrem uma redação digital na Academy. Aprenda a relatar informações e a identificar notícias confiáveis.",
    storyTitle: "The Digital Newsroom",
    vocabularyTitle: "Digital Media",
    speakingTargets: [
      "She said that the news was important.",
      "He asked if I had seen the podcast.",
      "This is fake news — don't share it!",
      "That influencer said she loves reading.",
      "The blog reported that the concert was sold out.",
      "Can you tell me where the news came from?",
    ],
    listeningIntro: "Ouça um trecho de podcast da rádio da Academy.",
    listeningQuestion:
      'Ms. Anna disse: "Kenji told me that he had checked three sources before sharing the news." O que Kenji fez?',
    listeningOptions: [
      "Checou três fontes antes de compartilhar",
      "Compartilhou sem checar",
      "Escreveu três notícias",
    ],
    listeningCorrect: "Checou três fontes antes de compartilhar",
    listeningWrongHint: "'told me that he had checked' = discurso indireto: Kenji CHECOU fontes.",
    readingNarration:
      "Antes de compartilhar uma notícia, verifique: fonte confiável? Data recente? Outros veículos falam disso? Fake news se espalham rápido — pense antes de clicar em 'compartilhar'.",
    grammarNarration:
      "Discurso indireto (Reported Speech): quando você conta o que alguém disse, o verbo geralmente 'anda um passo pra trás' no tempo (say → said; is → was; have → had). Perguntas indiretas viram afirmativas: 'Where is he?' → 'She asked WHERE HE WAS.'",
    finalProjectIntro: "Vamos escrever sua reportagem. Digite seu nome:",
    finalProjectPhrase: (name: string) =>
      `MY NEWSROOM REPORT — Reporter: ${name}. Yesterday, a big story appeared on social media: a local student had organized a book donation for the community library. I interviewed three witnesses. Kenji said that he had donated ten books. Maya told me she had helped collect books door to door. The librarian said the community was very grateful. I checked three different sources to make sure the story was real. Good journalism is about facts, not clicks. That's what I have learned this week.`,
    finalProjectSectionTitle: "My Newsroom Report",
  },
  VOCAB: [
    { id: "news", en: "News 📰", pt: "Notícias", img: IMG.CITY_COVER },
    { id: "podcast", en: "Podcast 🎙️", pt: "Podcast", img: IMG.ANNA },
    { id: "blog", en: "Blog 💻", pt: "Blog", img: IMG.KENJI },
    { id: "ad", en: "Advertisement 📣", pt: "Anúncio", img: IMG.SHOPPING_MALL },
    { id: "fake", en: "Fake news 🚫", pt: "Notícia falsa", img: IMG.LUCAS },
    { id: "influencer", en: "Influencer ✨", pt: "Influenciador", img: IMG.SOPHIE },
    { id: "social", en: "Social media 📱", pt: "Redes sociais", img: IMG.MAYA },
    { id: "digital", en: "Digital communication 💬", pt: "Comunicação digital", img: IMG.FRIENDS },
  ],
  STORY: [
    { img: IMG.ANNA, en: "Ms. Anna: 'Welcome to our first digital newsroom!'", pt: "Ms. Anna: 'Bem-vindos à nossa primeira redação digital!'" },
    { img: IMG.KENJI, en: "Kenji: 'I found a great story on the school blog.'", pt: "Kenji: 'Achei uma história ótima no blog da escola.'" },
    { img: IMG.MAYA, en: "Maya: 'My friend told me it was fake news!'", pt: "Maya: 'Minha amiga me disse que era fake news!'" },
    { img: IMG.SOPHIE, en: "Sophie: 'Let's check three sources first.'", pt: "Sophie: 'Vamos checar três fontes primeiro.'" },
    { img: IMG.LUCAS, en: "Lucas: 'The influencer said she loves libraries!'", pt: "Lucas: 'A influencer disse que ama bibliotecas!'" },
    { img: IMG.ANNA, en: "Ms. Anna: 'Great teamwork — real journalism!'", pt: "Ms. Anna: 'Ótimo trabalho em equipe — jornalismo de verdade!'" },
  ],
  DIALOG: [
    { who: "Ms. Anna", img: IMG.ANNA, en: "Kenji, what did the source say?", pt: "Kenji, o que a fonte disse?" },
    { who: "Kenji", img: IMG.KENJI, en: "He said that the concert was sold out.", pt: "Ele disse que o show estava esgotado." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Did you ask when it happened?", pt: "Você perguntou quando aconteceu?" },
    { who: "Kenji", img: IMG.KENJI, en: "Yes. I asked when it had started.", pt: "Sim. Perguntei quando havia começado." },
    { who: "Ms. Anna", img: IMG.ANNA, en: "Good. Always verify before publishing.", pt: "Ótimo. Sempre verifique antes de publicar." },
    { who: "Kenji", img: IMG.KENJI, en: "I checked three sources. All confirmed.", pt: "Checei três fontes. Todas confirmaram." },
  ],
  READING: {
    title: "How to Spot Fake News",
    img: IMG.CITY_COVER,
    parts: [
      { en: "Fake news travels faster than real news online.", pt: "Fake news viaja mais rápido que notícia real online.", highlight: ["Fake news"] },
      { en: "Always check the source: is the website reliable?", pt: "Sempre cheque a fonte: o site é confiável?", highlight: ["source", "reliable"] },
      { en: "Read past the headline — clickbait exaggerates.", pt: "Leia além da manchete — clickbait exagera.", highlight: ["headline", "clickbait"] },
      { en: "Compare with other news sources you trust.", pt: "Compare com outras fontes em que você confia.", highlight: ["Compare"] },
      { en: "If you're not sure, don't share it.", pt: "Se você não tem certeza, não compartilhe.", highlight: ["don't share"] },
    ],
  },
  WRITING: [
    { prompt: "She said that she ______ tired. (be)", answer: "was", hint: "Reported speech: 'is' vira 'was'.", options: ["was", "is", "were"], explain: "No discurso indireto o verbo recua um tempo: is → was." },
    { prompt: "He told me that he ______ the news. (have seen)", answer: "had seen", hint: "Present Perfect → Past Perfect: had seen.", options: ["had seen", "has seen", "saw"] },
    { prompt: "She asked me where I ______. (live)", answer: "lived", hint: "Pergunta indireta: verbo no passado.", options: ["lived", "live", "am living"] },
    { prompt: "The reporter said that the concert ______ sold out. (be)", answer: "was", hint: "'is' → 'was' no reported speech.", options: ["was", "is", "has been"] },
    { prompt: "He asked if I ______ the podcast. (listen)", answer: "had listened", hint: "Pergunta indireta com IF; passado → had listened.", options: ["had listened", "listen", "was listening"] },
    { prompt: "That's ______ news — don't share it!", answer: "fake", hint: "Notícia falsa.", options: ["fake", "true", "real"] },
    { prompt: "Can you tell me where the news ______ from? (come)", answer: "came", hint: "Pergunta indireta: verbo no passado.", options: ["came", "comes", "come"] },
  ],
  QUIZ: [
    { q: "Reported: 'I am tired' → She said that she ___ tired.", options: [{ text: "is" }, { text: "was", correct: true, explain: "is → was no discurso indireto." }, { text: "were" }] },
    { q: "'Fake news' significa:", options: [{ text: "Notícia falsa", correct: true }, { text: "Notícia importante" }, { text: "Notícia viral" }] },
    { q: "Indirect: 'Where do you live?' → She asked me where I ___.", options: [{ text: "live" }, { text: "lived", correct: true, explain: "Perguntas indiretas mudam pra passado." }, { text: "do live" }] },
    { q: "Antes de compartilhar uma notícia você deve:", options: [{ text: "Compartilhar rápido" }, { text: "Verificar fontes", correct: true }, { text: "Confiar no título" }] },
    { q: "'Podcast' é:", options: [{ text: "Um programa de áudio digital", correct: true }, { text: "Um jornal impresso" }, { text: "Uma TV" }] },
    { q: "Reported: 'I have finished' → He said he ___ finished.", options: [{ text: "has" }, { text: "had", correct: true }, { text: "have" }] },
    { q: "Perguntas indiretas usam:", options: [{ text: "?" }, { text: "Estrutura de afirmação (sem inversão)", correct: true, explain: "'Where is he?' → 'She asked where he WAS.'" }, { text: "Verbo no futuro" }] },
    { q: "'Influencer' faz:", options: [{ text: "Conteúdo digital que influencia opiniões", correct: true }, { text: "Reportagens de guerra" }, { text: "Documentários" }] },
  ],
  REAL_LIFE: [
    { situation: "📰 Relatando uma manchete.", answer: "The news said that the show was cancelled." },
    { situation: "🎙️ Falando de um podcast.", answer: "The podcast said that reading helps your brain." },
    { situation: "🚫 Alertando sobre fake news.", answer: "That's fake news — please don't share it." },
    { situation: "❓ Pergunta indireta.", answer: "Can you tell me where you heard that news?" },
    { situation: "✨ Sobre um influencer.", answer: "The influencer said she loves helping her community." },
  ],
  GRAMMAR: {
    focus: "Reported Speech & Indirect Questions",
    why:
      "Reported speech é quando você conta o que outra pessoa disse. O verbo geralmente recua um tempo (present → past). Perguntas indiretas viram afirmativas: sem inversão, sem '?'. Verbos comuns: SAY, TELL, ASK.",
    examples: [
      { en: "Direct: 'I am tired.' → She said (that) she was tired.", pt: "Direto: 'Estou cansada.' → Ela disse que estava cansada." },
      { en: "Direct: 'I have finished.' → He said (that) he had finished.", pt: "Ele disse que tinha terminado." },
      { en: "Direct: 'Where do you live?' → She asked where I lived.", pt: "Ela perguntou onde eu morava." },
      { en: "Direct: 'Do you like it?' → He asked if I liked it.", pt: "Ele perguntou se eu gostava." },
    ],
    errors: [
      { wrong: "She said me that she was tired.", right: "She TOLD me / She SAID that she was tired.", why: "SAY não leva objeto direto de pessoa; TELL sim." },
      { wrong: "He asked where I live.", right: "He asked where I LIVED.", why: "Pergunta indireta recua o tempo verbal." },
      { wrong: "She asked me where do I live.", right: "She asked me where I LIVED.", why: "Pergunta indireta não tem inversão nem 'do'." },
      { wrong: "He told that he was tired.", right: "He SAID that he was tired. / He TOLD ME that...", why: "TELL precisa de objeto (me/us/him)." },
    ],
  },
  SONG: {
    title: "Check It Twice",
    verses: [
      { en: "Someone said the story was true,", pt: "Alguém disse que a história era verdade,", emoji: "📰" },
      { en: "But I asked who, and how they knew.", pt: "Mas eu perguntei quem e como sabiam.", emoji: "❓" },
      { en: "Check the source, check it twice,", pt: "Cheque a fonte, cheque duas vezes,", emoji: "🔍" },
      { en: "Real news is worth the price.", pt: "Notícia real vale o preço.", emoji: "🎙️" },
    ],
  },
  HUNTER: {
    intro: "Escolha o reported speech correto!",
    rounds: [
      { promptEn: "'I am tired' → She said she ___ tired.", promptPt: "'I am tired' → She said she ___ tired.", targetLabel: "was", objects: [
        { id: "a", label: "is", img: "" }, { id: "b", label: "was", isTarget: true, img: "" }, { id: "c", label: "were", img: "" },
      ]},
      { promptEn: "'I have finished' → He said he ___ finished.", promptPt: "'I have finished' → He said he ___ finished.", targetLabel: "had", objects: [
        { id: "a", label: "has", img: "" }, { id: "b", label: "had", isTarget: true, img: "" }, { id: "c", label: "have", img: "" },
      ]},
      { promptEn: "'Where do you live?' → She asked where I ___.", promptPt: "'Where do you live?' → She asked where I ___.", targetLabel: "lived", objects: [
        { id: "a", label: "live", img: "" }, { id: "b", label: "lived", isTarget: true, img: "" }, { id: "c", label: "do live", img: "" },
      ]},
      { promptEn: "'Fake news' =", promptPt: "'Fake news' =", targetLabel: "Notícia falsa", objects: [
        { id: "a", label: "Notícia falsa", isTarget: true, img: "" }, { id: "b", label: "Notícia real", img: "" }, { id: "c", label: "Fofoca", img: "" },
      ]},
      { promptEn: "'Do you like it?' → He asked ___ I liked it.", promptPt: "'Do you like it?' → He asked ___ I liked it.", targetLabel: "if", objects: [
        { id: "a", label: "that", img: "" }, { id: "b", label: "if", isTarget: true, img: "" }, { id: "c", label: "do", img: "" },
      ]},
    ],
  },
  MEMORY: {
    intro: "Palavra → tradução:",
    pairs: [
      { id: "a", en: "News 📰", pt: "Notícias", img: IMG.CITY_COVER },
      { id: "b", en: "Podcast 🎙️", pt: "Podcast", img: IMG.ANNA },
      { id: "c", en: "Fake news 🚫", pt: "Notícia falsa", img: IMG.LUCAS },
      { id: "d", en: "Influencer ✨", pt: "Influenciador", img: IMG.SOPHIE },
    ],
  },
  BOOK: {
    title: "My Newsroom Report",
    intro: "Sua primeira grande reportagem.",
    pages: [
      { en: "Page 1 — Headline: ___.", pt: "Pág. 1 — Manchete: ___.", img: IMG.CITY_COVER, badge: "📰" },
      { en: "Page 2 — Witness 1 said that ___.", pt: "Pág. 2 — Testemunha 1 disse que ___.", img: IMG.KENJI, badge: "🎙️" },
      { en: "Page 3 — I checked ___ sources.", pt: "Pág. 3 — Checei ___ fontes.", img: IMG.SOPHIE, badge: "🔍" },
      { en: "Page 4 — Conclusion: ___.", pt: "Pág. 4 — Conclusão: ___.", img: IMG.ANNA, badge: "✅" },
      { en: "The End — Facts, not clicks!", pt: "Fim — Fatos, não cliques!", img: IMG.SCHOOL, badge: "⭐" },
    ],
  },
  CULTURE: {
    title: "The Rise of Fake News 📵",
    emoji: "🚫",
    paragraphs: [
      { en: "Studies show fake news spreads six times faster than real news on social media.", pt: "Estudos mostram que fake news se espalha seis vezes mais rápido que notícia real nas redes sociais." },
      { en: "Many countries now teach 'media literacy' — how to read media critically — in school.", pt: "Muitos países hoje ensinam 'letramento midiático' — leitura crítica de mídia — na escola." },
      { pt: "Ser um bom leitor digital é uma habilidade essencial do século XXI." },
    ],
  },
};

export default lesson;
