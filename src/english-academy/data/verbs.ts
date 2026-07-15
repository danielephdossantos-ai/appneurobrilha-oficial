export type Conjugation = {
  base: string;
  thirdPerson: string; // he/she/it
  past: string;
  pastParticiple: string;
  gerund: string;
};

export type VerbExample = {
  en: string;
  pt: string;
};

export type VerbQuiz = {
  en: string; // sentence with ___
  pt: string;
  options: string[];
  answer: string; // must be inside options
  explain: string;
};

export type VerbEntry = {
  slug: string;
  base: string;
  pt: string; // meaning in Portuguese
  emoji: string;
  ipa: string;
  tipo: "regular" | "irregular";
  significado: string; // Portuguese longer meaning
  conjugation: Conjugation;
  examples: VerbExample[]; // ~5
  situations: VerbExample[]; // real-life usage ~3
  quiz: VerbQuiz[]; // 3-4
};

export const VERBS: VerbEntry[] = [
  {
    slug: "be",
    base: "be",
    pt: "ser / estar",
    emoji: "🧍",
    ipa: "/biː/",
    tipo: "irregular",
    significado: "O verbo mais importante do inglês. Significa 'ser' ou 'estar'. Usado para descrever pessoas, coisas, sentimentos e lugares.",
    conjugation: { base: "be", thirdPerson: "is", past: "was / were", pastParticiple: "been", gerund: "being" },
    examples: [
      { en: "I am happy.", pt: "Eu estou feliz." },
      { en: "She is a teacher.", pt: "Ela é professora." },
      { en: "We are at home.", pt: "Nós estamos em casa." },
      { en: "They were tired yesterday.", pt: "Eles estavam cansados ontem." },
      { en: "It has been a long day.", pt: "Foi um dia longo." },
    ],
    situations: [
      { en: "Nice to meet you. I am John.", pt: "Prazer em conhecer você. Eu sou o John." },
      { en: "Where are you from?", pt: "De onde você é?" },
      { en: "I'm hungry. Let's eat.", pt: "Estou com fome. Vamos comer." },
    ],
    quiz: [
      { en: "She ___ my best friend.", pt: "Ela ___ minha melhor amiga.", options: ["am", "is", "are"], answer: "is", explain: "Com he/she/it usamos 'is'." },
      { en: "They ___ at school now.", pt: "Eles ___ na escola agora.", options: ["is", "am", "are"], answer: "are", explain: "Com they/we/you no plural usamos 'are'." },
      { en: "I ___ a student last year.", pt: "Eu ___ estudante no ano passado.", options: ["was", "were", "am"], answer: "was", explain: "No passado, I/he/she/it usam 'was'." },
    ],
  },
  {
    slug: "have",
    base: "have",
    pt: "ter",
    emoji: "🎁",
    ipa: "/hæv/",
    tipo: "irregular",
    significado: "Significa 'ter'. Usado para posse, relações e também para formar tempos verbais como o Present Perfect.",
    conjugation: { base: "have", thirdPerson: "has", past: "had", pastParticiple: "had", gerund: "having" },
    examples: [
      { en: "I have two brothers.", pt: "Eu tenho dois irmãos." },
      { en: "She has a new car.", pt: "Ela tem um carro novo." },
      { en: "We had lunch at noon.", pt: "Nós almoçamos ao meio-dia." },
      { en: "They have finished the work.", pt: "Eles terminaram o trabalho." },
      { en: "I'm having a great time.", pt: "Eu estou me divertindo muito." },
    ],
    situations: [
      { en: "Do you have a minute?", pt: "Você tem um minuto?" },
      { en: "I have a headache.", pt: "Estou com dor de cabeça." },
      { en: "Have a nice day!", pt: "Tenha um bom dia!" },
    ],
    quiz: [
      { en: "He ___ a big house.", pt: "Ele ___ uma casa grande.", options: ["have", "has", "had"], answer: "has", explain: "He/she/it usa 'has' no presente." },
      { en: "We ___ pizza last night.", pt: "Nós ___ pizza ontem à noite.", options: ["have", "has", "had"], answer: "had", explain: "Passado de 'have' é 'had'." },
      { en: "I ___ never been to Paris.", pt: "Eu nunca ___ estado em Paris.", options: ["have", "has", "had"], answer: "have", explain: "Present Perfect com I: have + been." },
    ],
  },
  {
    slug: "do",
    base: "do",
    pt: "fazer",
    emoji: "🛠️",
    ipa: "/duː/",
    tipo: "irregular",
    significado: "Significa 'fazer' e também é usado como verbo auxiliar em perguntas e negativas.",
    conjugation: { base: "do", thirdPerson: "does", past: "did", pastParticiple: "done", gerund: "doing" },
    examples: [
      { en: "I do my homework every day.", pt: "Eu faço minha lição todo dia." },
      { en: "She does yoga in the morning.", pt: "Ela faz ioga de manhã." },
      { en: "What did you do yesterday?", pt: "O que você fez ontem?" },
      { en: "I have done my best.", pt: "Eu fiz o meu melhor." },
      { en: "They are doing a great job.", pt: "Eles estão fazendo um ótimo trabalho." },
    ],
    situations: [
      { en: "What do you do for work?", pt: "O que você faz de trabalho?" },
      { en: "How are you doing?", pt: "Como você está?" },
      { en: "Don't worry, I'll do it.", pt: "Não se preocupe, eu faço." },
    ],
    quiz: [
      { en: "___ you like coffee?", pt: "Você ___ café?", options: ["Do", "Does", "Did"], answer: "Do", explain: "Auxiliar 'Do' para perguntas com you/we/they/I." },
      { en: "She ___ her homework at night.", pt: "Ela ___ a lição à noite.", options: ["do", "does", "done"], answer: "does", explain: "3ª pessoa (she/he/it) → does." },
      { en: "What ___ you do last weekend?", pt: "O que você ___ no fim de semana passado?", options: ["do", "does", "did"], answer: "did", explain: "Passado usa o auxiliar 'did'." },
    ],
  },
  {
    slug: "go",
    base: "go",
    pt: "ir",
    emoji: "🚶",
    ipa: "/ɡoʊ/",
    tipo: "irregular",
    significado: "Significa 'ir', mover-se de um lugar para outro.",
    conjugation: { base: "go", thirdPerson: "goes", past: "went", pastParticiple: "gone", gerund: "going" },
    examples: [
      { en: "I go to school by bus.", pt: "Eu vou para a escola de ônibus." },
      { en: "She goes to the gym every day.", pt: "Ela vai à academia todo dia." },
      { en: "We went to the beach yesterday.", pt: "Fomos à praia ontem." },
      { en: "He has gone home.", pt: "Ele foi para casa." },
      { en: "I'm going to travel next week.", pt: "Vou viajar semana que vem." },
    ],
    situations: [
      { en: "Let's go!", pt: "Vamos!" },
      { en: "Where are you going?", pt: "Aonde você está indo?" },
      { en: "It's time to go.", pt: "É hora de ir." },
    ],
    quiz: [
      { en: "He ___ to work by car.", pt: "Ele ___ para o trabalho de carro.", options: ["go", "goes", "went"], answer: "goes", explain: "3ª pessoa no presente → goes." },
      { en: "We ___ to the park yesterday.", pt: "Nós ___ ao parque ontem.", options: ["go", "goes", "went"], answer: "went", explain: "Passado irregular de 'go' → 'went'." },
      { en: "I'm ___ to study tonight.", pt: "Vou estudar hoje à noite.", options: ["go", "going", "gone"], answer: "going", explain: "'be going to' para planos futuros." },
    ],
  },
  {
    slug: "make",
    base: "make",
    pt: "fazer / criar",
    emoji: "🔨",
    ipa: "/meɪk/",
    tipo: "irregular",
    significado: "Significa 'fazer' no sentido de criar, produzir ou construir algo.",
    conjugation: { base: "make", thirdPerson: "makes", past: "made", pastParticiple: "made", gerund: "making" },
    examples: [
      { en: "I make coffee every morning.", pt: "Eu faço café toda manhã." },
      { en: "She makes beautiful cakes.", pt: "Ela faz bolos lindos." },
      { en: "We made a plan.", pt: "Fizemos um plano." },
      { en: "He has made many friends.", pt: "Ele fez muitos amigos." },
      { en: "They are making dinner.", pt: "Estão fazendo o jantar." },
    ],
    situations: [
      { en: "Make yourself at home.", pt: "Sinta-se em casa." },
      { en: "Don't make noise.", pt: "Não faça barulho." },
      { en: "Let's make a decision.", pt: "Vamos tomar uma decisão." },
    ],
    quiz: [
      { en: "She ___ pizza on Fridays.", pt: "Ela ___ pizza às sextas.", options: ["make", "makes", "made"], answer: "makes", explain: "3ª pessoa → makes." },
      { en: "I ___ a mistake yesterday.", pt: "Eu ___ um erro ontem.", options: ["make", "makes", "made"], answer: "made", explain: "Passado irregular de 'make' → 'made'." },
      { en: "They are ___ a movie.", pt: "Eles estão ___ um filme.", options: ["make", "making", "made"], answer: "making", explain: "Present Continuous: be + verbo-ing." },
    ],
  },
  {
    slug: "get",
    base: "get",
    pt: "conseguir / receber / ficar",
    emoji: "📥",
    ipa: "/ɡɛt/",
    tipo: "irregular",
    significado: "Um dos verbos mais versáteis: conseguir, receber, buscar, ficar, chegar.",
    conjugation: { base: "get", thirdPerson: "gets", past: "got", pastParticiple: "gotten", gerund: "getting" },
    examples: [
      { en: "I get up at 7 AM.", pt: "Eu levanto às 7." },
      { en: "She gets good grades.", pt: "Ela tira boas notas." },
      { en: "We got a present.", pt: "Ganhamos um presente." },
      { en: "It's getting cold.", pt: "Está ficando frio." },
      { en: "I have gotten used to it.", pt: "Já me acostumei." },
    ],
    situations: [
      { en: "How do I get to the airport?", pt: "Como chego ao aeroporto?" },
      { en: "I'll get the door.", pt: "Eu atendo a porta." },
      { en: "Get well soon!", pt: "Melhoras!" },
    ],
    quiz: [
      { en: "He ___ home late.", pt: "Ele ___ em casa tarde.", options: ["get", "gets", "got"], answer: "gets", explain: "3ª pessoa presente → gets." },
      { en: "We ___ a message last night.", pt: "Nós ___ uma mensagem ontem.", options: ["get", "gets", "got"], answer: "got", explain: "Passado irregular → 'got'." },
      { en: "It's ___ dark outside.", pt: "Está ___ escuro lá fora.", options: ["get", "gets", "getting"], answer: "getting", explain: "Present Continuous: be + getting." },
    ],
  },
  {
    slug: "take",
    base: "take",
    pt: "pegar / levar",
    emoji: "✋",
    ipa: "/teɪk/",
    tipo: "irregular",
    significado: "Significa pegar, levar ou tomar algo.",
    conjugation: { base: "take", thirdPerson: "takes", past: "took", pastParticiple: "taken", gerund: "taking" },
    examples: [
      { en: "I take the bus to school.", pt: "Eu pego o ônibus para a escola." },
      { en: "She takes photos every day.", pt: "Ela tira fotos todo dia." },
      { en: "We took a walk in the park.", pt: "Demos uma caminhada no parque." },
      { en: "He has taken the exam.", pt: "Ele fez a prova." },
      { en: "They are taking a break.", pt: "Estão fazendo uma pausa." },
    ],
    situations: [
      { en: "Take your time.", pt: "Não tenha pressa." },
      { en: "Can I take a photo?", pt: "Posso tirar uma foto?" },
      { en: "Take care!", pt: "Se cuida!" },
    ],
    quiz: [
      { en: "She ___ the train every day.", pt: "Ela ___ o trem todo dia.", options: ["take", "takes", "took"], answer: "takes", explain: "3ª pessoa presente → takes." },
      { en: "I ___ a nap yesterday.", pt: "Eu ___ um cochilo ontem.", options: ["take", "takes", "took"], answer: "took", explain: "Passado irregular → 'took'." },
      { en: "They are ___ pictures now.", pt: "Estão ___ fotos agora.", options: ["take", "taking", "took"], answer: "taking", explain: "Present Continuous: be + taking." },
    ],
  },
  {
    slug: "come",
    base: "come",
    pt: "vir",
    emoji: "🏃",
    ipa: "/kʌm/",
    tipo: "irregular",
    significado: "Significa 'vir', mover-se em direção a quem fala.",
    conjugation: { base: "come", thirdPerson: "comes", past: "came", pastParticiple: "come", gerund: "coming" },
    examples: [
      { en: "I come from Brazil.", pt: "Eu venho do Brasil." },
      { en: "She comes home late.", pt: "Ela chega em casa tarde." },
      { en: "We came here last year.", pt: "Viemos para cá ano passado." },
      { en: "He has come back.", pt: "Ele voltou." },
      { en: "They are coming soon.", pt: "Eles estão chegando." },
    ],
    situations: [
      { en: "Come here, please.", pt: "Venha aqui, por favor." },
      { en: "Where do you come from?", pt: "De onde você vem?" },
      { en: "I'm coming!", pt: "Já vou!" },
    ],
    quiz: [
      { en: "He ___ to class every day.", pt: "Ele ___ para a aula todo dia.", options: ["come", "comes", "came"], answer: "comes", explain: "3ª pessoa presente → comes." },
      { en: "They ___ to my party last week.", pt: "Eles ___ à minha festa semana passada.", options: ["come", "comes", "came"], answer: "came", explain: "Passado irregular → 'came'." },
      { en: "She is ___ home now.", pt: "Ela está ___ para casa agora.", options: ["come", "comes", "coming"], answer: "coming", explain: "Present Continuous: be + coming." },
    ],
  },
  {
    slug: "see",
    base: "see",
    pt: "ver",
    emoji: "👀",
    ipa: "/siː/",
    tipo: "irregular",
    significado: "Significa 'ver', perceber com os olhos ou entender.",
    conjugation: { base: "see", thirdPerson: "sees", past: "saw", pastParticiple: "seen", gerund: "seeing" },
    examples: [
      { en: "I see the moon.", pt: "Eu vejo a lua." },
      { en: "She sees her friends on weekends.", pt: "Ela vê os amigos nos fins de semana." },
      { en: "We saw a great movie.", pt: "Vimos um ótimo filme." },
      { en: "He has seen this place before.", pt: "Ele já viu este lugar antes." },
      { en: "I'm seeing the doctor tomorrow.", pt: "Vou ao médico amanhã." },
    ],
    situations: [
      { en: "See you later!", pt: "Até mais!" },
      { en: "I see what you mean.", pt: "Entendi o que você quer dizer." },
      { en: "Can you see that?", pt: "Você consegue ver aquilo?" },
    ],
    quiz: [
      { en: "He ___ his family on Sundays.", pt: "Ele ___ a família aos domingos.", options: ["see", "sees", "saw"], answer: "sees", explain: "3ª pessoa presente → sees." },
      { en: "I ___ a beautiful sunset yesterday.", pt: "Eu ___ um pôr do sol lindo ontem.", options: ["see", "sees", "saw"], answer: "saw", explain: "Passado irregular → 'saw'." },
      { en: "Have you ___ that movie?", pt: "Você já ___ esse filme?", options: ["see", "saw", "seen"], answer: "seen", explain: "Present Perfect: have + past participle 'seen'." },
    ],
  },
  {
    slug: "know",
    base: "know",
    pt: "saber / conhecer",
    emoji: "🧠",
    ipa: "/noʊ/",
    tipo: "irregular",
    significado: "Significa 'saber' (uma informação) ou 'conhecer' (uma pessoa/lugar).",
    conjugation: { base: "know", thirdPerson: "knows", past: "knew", pastParticiple: "known", gerund: "knowing" },
    examples: [
      { en: "I know the answer.", pt: "Eu sei a resposta." },
      { en: "She knows my brother.", pt: "Ela conhece meu irmão." },
      { en: "We knew each other in school.", pt: "Nos conhecíamos na escola." },
      { en: "He has known her for years.", pt: "Ele a conhece há anos." },
      { en: "I'm knowing this city better.", pt: "Estou conhecendo melhor esta cidade." },
    ],
    situations: [
      { en: "I don't know.", pt: "Eu não sei." },
      { en: "Do you know him?", pt: "Você o conhece?" },
      { en: "You know what? Let's go!", pt: "Sabe de uma coisa? Vamos!" },
    ],
    quiz: [
      { en: "He ___ the answer.", pt: "Ele ___ a resposta.", options: ["know", "knows", "knew"], answer: "knows", explain: "3ª pessoa presente → knows." },
      { en: "I ___ her when I was a child.", pt: "Eu ___ ela quando era criança.", options: ["know", "knows", "knew"], answer: "knew", explain: "Passado irregular → 'knew'." },
      { en: "They have ___ each other since 2010.", pt: "Eles se ___ desde 2010.", options: ["know", "knew", "known"], answer: "known", explain: "Present Perfect: have + past participle 'known'." },
    ],
  },
];

export function getVerb(slug: string): VerbEntry | undefined {
  return VERBS.find((v) => v.slug === slug);
}
