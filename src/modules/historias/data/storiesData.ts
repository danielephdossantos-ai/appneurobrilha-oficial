export type StoryData = {
  story: {
    title: string;
    description: string;
    coverImage: string;
    readingLevel: "iniciante" | "intermediario" | "avancado";
    ageMin: number;
    ageMax: number;
    theme: string;
    difficulty: number;
  };
  pages: Array<{
    pageNumber: number;
    text: string;
    imageUrl: string;
    highlightWords: string[];
  }>;
  questions: Array<{
    question: string;
    optionA: string;
    optionB: string;
    optionC: string;
    correctAnswer: "a" | "b" | "c";
    difficulty: number;
  }>;
};

function s(o: object) { return JSON.stringify(o); }

export const storiesData: StoryData[] = [
  // ─── HISTÓRIA 1: DINO APRENDE AS VOGAIS ───────────────────────────────────
  {
    story: {
      title: "Dino Aprende as Vogais",
      description: "Dino explora a floresta e descobre as cinco vogais do alfabeto com objetos incríveis!",
      coverImage: s({ bg: "forest", char: "dino", element: "vowels", label: "A • E • I • O • U", mood: "happy" }),
      readingLevel: "iniciante",
      ageMin: 4,
      ageMax: 6,
      theme: "dinossauros",
      difficulty: 1,
    },
    pages: [
      {
        pageNumber: 1,
        text: "Dino morava em uma floresta verde e linda. Um dia, ele encontrou uma árvore enorme! A árvore era tão grande que tocava as nuvens. Dino ficou muito feliz. A de ÁRVORE! A vogal A é a primeira de todas!",
        imageUrl: s({ bg: "forest", char: "dino", element: "letter", letter: "A", extra: "tree-A", label: "A de Árvore", mood: "excited" }),
        highlightWords: ["árvore", "A", "vogal", "primeira"],
      },
      {
        pageNumber: 2,
        text: "Dino continuou caminhando e encontrou um elefante cinza enorme. O elefante tinha uma tromba enorme e orelhas grandes como folhas. E de ELEFANTE! A vogal E é a segunda vogal do alfabeto. Que animal incrível!",
        imageUrl: s({ bg: "savanna", char: "dino", element: "letter", letter: "E", extra: "elephant", label: "E de Elefante", mood: "happy" }),
        highlightWords: ["elefante", "E", "vogal", "segunda"],
      },
      {
        pageNumber: 3,
        text: "Mais adiante, Dino viu um inseto colorido voando entre as flores. Era uma borboleta linda com asas coloridas! I de INSETO! A vogal I tem um som fino e agudo. Consegue fazer o som do I?",
        imageUrl: s({ bg: "meadow", char: "dino", element: "letter", letter: "I", extra: "butterfly", label: "I de Inseto", mood: "happy" }),
        highlightWords: ["inseto", "I", "borboleta", "vogal", "fino"],
      },
      {
        pageNumber: 4,
        text: "Dino encontrou um ovo enorme no chão da floresta. O ovo tinha pintinhas coloridas e parecia muito especial. O de OVO! A vogal O tem a boca bem redonda quando falamos. Faça um círculo com a boca!",
        imageUrl: s({ bg: "forest", char: "dino", element: "letter", letter: "O", extra: "egg", label: "O de Ovo", mood: "excited" }),
        highlightWords: ["ovo", "O", "vogal", "redonda"],
      },
      {
        pageNumber: 5,
        text: "Dino achou um cacho de uvas roxas e suculentas. Cada uva brilhava como uma joia! U de UVA! A vogal U é a última das cinco vogais. Dino experimentou uma uva e adorou!",
        imageUrl: s({ bg: "forest", char: "dino", element: "letter", letter: "U", extra: "grapes", label: "U de Uva", mood: "happy" }),
        highlightWords: ["uva", "U", "vogal", "última", "cinco"],
      },
      {
        pageNumber: 6,
        text: "Dino pegou um galho e escreveu na areia: A, E, I, O, U. São cinco vogais ao todo! Todas as palavras têm pelo menos uma vogal. Dino aprendeu que as vogais são muito importantes para formar palavras!",
        imageUrl: s({ bg: "prehistoric", char: "dino", element: "syllable", syllable: "A - E - I - O - U", label: "Cinco vogais do alfabeto!", mood: "excited" }),
        highlightWords: ["A", "E", "I", "O", "U", "vogais", "cinco", "palavras"],
      },
      {
        pageNumber: 7,
        text: "Parabéns, Dino! Você aprendeu todas as cinco vogais! A de Árvore, E de Elefante, I de Inseto, O de Ovo e U de Uva. Agora Dino sabe que as vogais estão em toda palavra. Que aventura incrível foi essa!",
        imageUrl: s({ bg: "meadow", char: "dino", element: "celebrate", label: "Parabéns! Você aprendeu as vogais!", mood: "happy" }),
        highlightWords: ["parabéns", "A", "E", "I", "O", "U", "vogais", "aventura"],
      },
    ],
    questions: [
      { question: "Qual vogal Dino aprendeu com a Árvore?", optionA: "A", optionB: "E", optionC: "I", correctAnswer: "a", difficulty: 1 },
      { question: "Quantas vogais existem no alfabeto?", optionA: "Quatro", optionB: "Cinco", optionC: "Seis", correctAnswer: "b", difficulty: 1 },
      { question: "Qual é a última vogal que Dino aprendeu?", optionA: "O de ovo", optionB: "I de inseto", optionC: "U de uva", correctAnswer: "c", difficulty: 1 },
    ],
  },

  // ─── HISTÓRIA 2: LUNA E O FOGUETE DAS ESTRELAS ────────────────────────────
  {
    story: {
      title: "Luna e o Foguete das Estrelas",
      description: "Luna viaja pelo sistema solar em seu foguete e descobre os planetas e o Sol!",
      coverImage: s({ bg: "space", char: "rocket", element: "planets", label: "Sistema Solar com Luna", mood: "excited" }),
      readingLevel: "intermediario",
      ageMin: 6,
      ageMax: 9,
      theme: "espaco",
      difficulty: 2,
    },
    pages: [
      {
        pageNumber: 1,
        text: "Luna era uma menina curiosa que adorava olhar para o céu. Toda noite, ela contava as estrelas pela janela. Um dia ela disse: vou visitar todas elas! O céu tinha milhares de estrelas brilhantes esperando por ela.",
        imageUrl: s({ bg: "cozy", char: "girl", element: "count", count: 5, label: "Luna sonhava com as estrelas", mood: "happy" }),
        highlightWords: ["estrelas", "céu", "contar", "curiosa", "brilhantes"],
      },
      {
        pageNumber: 2,
        text: "Um dia, Luna encontrou um foguete vermelho no jardim. Ela verificou os botões, colocou o capacete e respirou fundo. Três, dois, um... DECOLAR! O foguete subiu com um barulho enorme. Que emoção!",
        imageUrl: s({ bg: "meadow", char: "rocket", element: "equation", equation: "3 - 2 - 1!", label: "3, 2, 1... DECOLAR!", mood: "excited" }),
        highlightWords: ["foguete", "decolar", "três", "dois", "um", "capacete"],
      },
      {
        pageNumber: 3,
        text: "WOOSH! Luna estava no espaço! Ela viu a Lua bem perto, grande e cinza. A Lua fica a 384 mil quilômetros da Terra e não tem ar nem água. Astronautas já pisaram na Lua em 1969!",
        imageUrl: s({ bg: "space", char: "rocket", element: "shape", shape: "circle", label: "A Lua - 384.000 km da Terra", mood: "excited" }),
        highlightWords: ["Lua", "espaço", "quilômetros", "Terra", "astronautas"],
      },
      {
        pageNumber: 4,
        text: "Luna passou pela Lua e avistou Marte. O planeta vermelho brilhava forte! Marte é vermelho por causa da poeira de ferro em sua superfície. O planeta tem dois satélites naturais chamados Fobos e Deimos.",
        imageUrl: s({ bg: "space", char: "rocket", element: "letter", letter: "M", label: "Marte - O Planeta Vermelho", mood: "happy" }),
        highlightWords: ["Marte", "planeta", "vermelho", "ferro", "satélites"],
      },
      {
        pageNumber: 5,
        text: "Depois de Marte, Luna viu Júpiter, o maior planeta do sistema solar! Júpiter tem uma mancha vermelha enorme que é uma tempestade que dura centenas de anos. Uau, Júpiter é gigante demais!",
        imageUrl: s({ bg: "space", char: "rocket", element: "number", number: 5, label: "Júpiter - O Maior Planeta", mood: "excited" }),
        highlightWords: ["Júpiter", "maior", "planeta", "sistema solar", "tempestade"],
      },
      {
        pageNumber: 6,
        text: "Mais longe, Luna sentiu o calor do Sol. O Sol é uma estrela enorme e muito quente. Sem o Sol, não teria vida no nosso planeta. O Sol fica a 150 milhões de quilômetros da Terra!",
        imageUrl: s({ bg: "space", char: "rocket", element: "shape", shape: "circle", label: "O Sol - Nossa Estrela Especial", mood: "happy" }),
        highlightWords: ["Sol", "estrela", "calor", "vida", "quilômetros"],
      },
      {
        pageNumber: 7,
        text: "Luna decidiu voltar para casa. Ela passou pelos planetas de volta: Júpiter, Marte, Lua e finalmente viu a Terra verde e azul! A Terra tem um oceano enorme e é o único planeta com vida conhecida.",
        imageUrl: s({ bg: "space", char: "rocket", element: "shape", shape: "circle", label: "A Terra - Nosso Lar", mood: "happy" }),
        highlightWords: ["Terra", "Júpiter", "Marte", "Lua", "planetas", "oceano"],
      },
      {
        pageNumber: 8,
        text: "Luna pousou em segurança no jardim! Ela abriu um caderno e desenhou os 8 planetas em ordem: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno. Agora sei tudo sobre o sistema solar!",
        imageUrl: s({ bg: "cozy", char: "girl", element: "planets", label: "8 Planetas do Sistema Solar", mood: "excited" }),
        highlightWords: ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "oito"],
      },
    ],
    questions: [
      { question: "Como se chama a nossa estrela?", optionA: "A Lua", optionB: "O Sol", optionC: "Marte", correctAnswer: "b", difficulty: 2 },
      { question: "Qual é o maior planeta do sistema solar?", optionA: "Marte", optionB: "Terra", optionC: "Júpiter", correctAnswer: "c", difficulty: 2 },
      { question: "Quantos planetas existem no sistema solar?", optionA: "6", optionB: "8", optionC: "10", correctAnswer: "b", difficulty: 2 },
    ],
  },

  // ─── HISTÓRIA 3: O LEÃO CORAGEM ──────────────────────────────────────────
  {
    story: {
      title: "O Leão Coragem",
      description: "Léo aprende que pedir ajuda é um ato de coragem e que amigos tornam tudo possível.",
      coverImage: s({ bg: "savanna", char: "lion", element: "letter", letter: "C", label: "Coragem é pedir ajuda!", mood: "brave" }),
      readingLevel: "iniciante",
      ageMin: 4,
      ageMax: 7,
      theme: "animais",
      difficulty: 1,
    },
    pages: [
      {
        pageNumber: 1,
        text: "Léo era um leãozinho que queria muito cruzar o grande rio para visitar seus amigos. Mas quando chegou à beira do rio, o coração disparou. Léo tinha medo da água profunda e ficou parado.",
        imageUrl: s({ bg: "savanna", char: "lion", element: "number", number: 1, label: "Léo e o grande rio", mood: "thinking" }),
        highlightWords: ["medo", "coragem", "leão", "rio", "profunda"],
      },
      {
        pageNumber: 2,
        text: "Léo sentou na margem e ficou muito triste. Ele queria brincar com seus amigos do outro lado, mas o medo era maior. Uma lágrima escorreu pelo seu focinho dourado. Nunca vou conseguir! ele pensou.",
        imageUrl: s({ bg: "savanna", char: "lion", element: "number", number: 2, label: "Léo sentiu tristeza", mood: "sad" }),
        highlightWords: ["triste", "sentimento", "medo", "amigos", "lágrima"],
      },
      {
        pageNumber: 3,
        text: "A Tartaruga Tata veio caminhando devagar pela margem. Ela viu Léo triste e se aproximou gentilmente. Por que você está tão triste, Léo? perguntou Tata. Léo respirou fundo e disse: Tenho medo do rio.",
        imageUrl: s({ bg: "savanna", char: "turtle", element: "number", number: 3, label: "Tata pergunta o que aconteceu", mood: "happy" }),
        highlightWords: ["amizade", "gentil", "pedir", "ajuda", "contar", "Tata"],
      },
      {
        pageNumber: 4,
        text: "Tata sorriu com carinho. Léo, pedir ajuda não é fraqueza, é sabedoria! disse ela. Todos nós temos medos. O que importa é não enfrentar os medos sozinho. Léo escutou com muita atenção.",
        imageUrl: s({ bg: "savanna", char: "lion", element: "letter", letter: "S", label: "Sabedoria é pedir ajuda!", mood: "thinking" }),
        highlightWords: ["pedir", "ajuda", "sabedoria", "fraqueza", "coragem", "medos"],
      },
      {
        pageNumber: 5,
        text: "Juntos, Léo e Tata juntaram galhos e pedras. Pouco a pouco, construíram uma ponte sobre o rio. Era um trabalho de equipe! Léo percebia que com ajuda tudo ficava mais fácil e até divertido.",
        imageUrl: s({ bg: "savanna", char: "lion", element: "number", number: 5, label: "Trabalhando juntos em equipe", mood: "excited" }),
        highlightWords: ["juntos", "equipe", "trabalho", "construir", "cooperar", "ponte"],
      },
      {
        pageNumber: 6,
        text: "Com a ponte pronta, Léo e Tata cruzaram o rio com segurança! Do outro lado, os amigos de Léo estavam esperando com alegria! LÉOOOO! gritaram todos felizes. Léo correu e abraçou todos.",
        imageUrl: s({ bg: "meadow", char: "lion", element: "celebrate", label: "Juntos cruzaram o rio!", mood: "happy" }),
        highlightWords: ["alegria", "amigos", "segurança", "abraçar", "juntos"],
      },
      {
        pageNumber: 7,
        text: "Léo aprendeu uma lição muito importante naquele dia. Coragem não é não ter medo. Coragem é pedir ajuda quando precisamos e enfrentar nossos medos com amigos ao nosso lado!",
        imageUrl: s({ bg: "savanna", char: "lion", element: "celebrate", label: "Coragem é ter amigos ao seu lado!", mood: "happy" }),
        highlightWords: ["coragem", "aprender", "medo", "amigos", "ajuda", "lição"],
      },
    ],
    questions: [
      { question: "Por que Léo estava triste?", optionA: "Porque estava com fome", optionB: "Porque tinha medo do rio", optionC: "Porque perdeu um amigo", correctAnswer: "b", difficulty: 1 },
      { question: "O que Tata disse sobre pedir ajuda?", optionA: "Que é fraqueza", optionB: "Que é bobagem", optionC: "Que é sabedoria", correctAnswer: "c", difficulty: 1 },
      { question: "O que Léo aprendeu sobre coragem?", optionA: "Que é não ter medo", optionB: "Que é enfrentar os medos com amigos", optionC: "Que é ser forte sozinho", correctAnswer: "b", difficulty: 1 },
    ],
  },

  // ─── HISTÓRIA 4: A FAZENDA DAS SÍLABAS ───────────────────────────────────
  {
    story: {
      title: "A Fazenda das Sílabas",
      description: "Na fazenda da Dona Bela, cada animal ensina as sílabas das palavras com muita diversão!",
      coverImage: s({ bg: "farm", char: "cow", element: "syllable", syllable: "SÍ - LA - BAS", label: "Aprendendo a dividir palavras!", mood: "happy" }),
      readingLevel: "iniciante",
      ageMin: 5,
      ageMax: 7,
      theme: "fazendinha",
      difficulty: 1,
    },
    pages: [
      {
        pageNumber: 1,
        text: "Dona Bela tem uma fazenda alegre e cheia de animais. Cada animal tem um nome especial para aprender. Hoje vamos descobrir os sons das sílabas com os animais da fazenda! Vamos juntos?",
        imageUrl: s({ bg: "farm", char: "cow", element: "number", number: 1, label: "A Fazenda das Sílabas", mood: "happy" }),
        highlightWords: ["fazenda", "sílabas", "animais", "sons", "aprender"],
      },
      {
        pageNumber: 2,
        text: "A VACA muge: MU-MU! Vamos bater palmas para cada sílaba: VA - palma - CA - palma. VACA tem 2 sílabas! Quantas letras tem VACA? Conte: V-A-C-A. Tem 4 letras!",
        imageUrl: s({ bg: "farm", char: "cow", element: "syllable", syllable: "VA - CA", label: "VACA tem 2 sílabas!", mood: "happy" }),
        highlightWords: ["VACA", "VA", "CA", "sílabas", "letras", "palmas"],
      },
      {
        pageNumber: 3,
        text: "O CAVALO relincha: IIIIIH! CA-VA-LO. Bata palmas: CA - palma - VA - palma - LO - palma. CAVALO tem 3 sílabas! É mais do que a VACA. C-A-V-A-L-O tem 6 letras!",
        imageUrl: s({ bg: "farm", char: "cow", element: "syllable", syllable: "CA - VA - LO", label: "CAVALO tem 3 sílabas!", mood: "excited" }),
        highlightWords: ["CAVALO", "CA", "VA", "LO", "três", "sílabas", "letras"],
      },
      {
        pageNumber: 4,
        text: "O PATO faz quá-quá no lago! PA-TO. Palmas: PA - palma - TO - palma. PATO tem 2 sílabas, igual à VACA! P-A-T-O tem 4 letras. Quais animais têm 2 sílabas? VACA e PATO!",
        imageUrl: s({ bg: "farm", char: "cow", element: "syllable", syllable: "PA - TO", label: "PATO tem 2 sílabas!", mood: "happy" }),
        highlightWords: ["PATO", "PA", "TO", "sílabas", "iguais", "lago"],
      },
      {
        pageNumber: 5,
        text: "A GALINHA bota ovos toda manhã. GA-LI-NHA. Palmas: GA - palma - LI - palma - NHA - palma. GALINHA tem 3 sílabas, igual ao CAVALO! G-A-L-I-N-H-A tem 7 letras, a mais longa!",
        imageUrl: s({ bg: "farm", char: "cow", element: "syllable", syllable: "GA - LI - NHA", label: "GALINHA tem 3 sílabas!", mood: "excited" }),
        highlightWords: ["GALINHA", "GA", "LI", "NHA", "três", "sílabas", "letras"],
      },
      {
        pageNumber: 6,
        text: "O GATO mia: MIAU! GA-TO. Palmas: GA - palma - TO - palma. GATO tem 2 sílabas! G-A-T-O tem 4 letras. Agora você já conhece 5 animais da fazenda e suas sílabas!",
        imageUrl: s({ bg: "farm", char: "cow", element: "syllable", syllable: "GA - TO", label: "GATO tem 2 sílabas!", mood: "happy" }),
        highlightWords: ["GATO", "GA", "TO", "sílabas", "cinco", "animais"],
      },
      {
        pageNumber: 7,
        text: "Dona Bela juntou todos os animais! Animais com 2 sílabas: VACA, PATO, GATO. Animais com 3 sílabas: CAVALO e GALINHA. Batemos palmas juntos! Dividir em sílabas é divertido!",
        imageUrl: s({ bg: "farm", char: "cow", element: "number", number: 2, label: "2 ou 3 sílabas? Você decide!", mood: "happy" }),
        highlightWords: ["dois", "três", "sílabas", "VACA", "PATO", "GATO", "CAVALO", "GALINHA"],
      },
      {
        pageNumber: 8,
        text: "Parabéns! Agora você sabe dividir palavras em sílabas! Pratique com seu nome: bata palmas para cada sílaba. Tente: ÁRVORE = ÁR-VO-RE tem 3 sílabas. ESCOLA = ES-CO-LA tem 3 sílabas!",
        imageUrl: s({ bg: "farm", char: "cow", element: "celebrate", label: "Você aprendeu sílabas!", mood: "excited" }),
        highlightWords: ["parabéns", "sílabas", "nome", "praticar", "ÁRVORE", "ESCOLA"],
      },
    ],
    questions: [
      { question: "Quantas sílabas tem CAVALO?", optionA: "Dois", optionB: "Três", optionC: "Quatro", correctAnswer: "b", difficulty: 1 },
      { question: "Qual animal tem mais letras no nome?", optionA: "Pato", optionB: "Gato", optionC: "Galinha", correctAnswer: "c", difficulty: 1 },
      { question: "Quais animais têm 2 sílabas?", optionA: "Cavalo e Galinha", optionB: "Vaca e Pato", optionC: "Gato e Cavalo", correctAnswer: "b", difficulty: 2 },
    ],
  },

  // ─── HISTÓRIA 5: SUPER BETO E OS NÚMEROS ─────────────────────────────────
  {
    story: {
      title: "Super Beto e os Números",
      description: "Super Beto usa somas e subtrações para recuperar os números roubados pelo vilão Caos!",
      coverImage: s({ bg: "city", char: "hero", element: "equation", equation: "3+4=7", label: "Super Beto - Herói da Matemática!", mood: "excited" }),
      readingLevel: "intermediario",
      ageMin: 6,
      ageMax: 9,
      theme: "super-herois",
      difficulty: 2,
    },
    pages: [
      {
        pageNumber: 1,
        text: "Super Beto é um herói especial: ele protege os números da cidade! Um dia, o vilão Caos chegou querendo confundir todo mundo. Vou misturar todos os números! gritou o vilão. Não vou deixar! disse Super Beto.",
        imageUrl: s({ bg: "city", char: "hero", element: "number", number: 10, label: "Super Beto protege os números!", mood: "brave" }),
        highlightWords: ["herói", "números", "vilão", "proteger", "matemática"],
      },
      {
        pageNumber: 2,
        text: "O vilão Caos roubou 10 estrelas-número e as escondeu pela cidade! Super Beto recebeu o mapa com 10 estrelas para recuperar. Ele precisava usar matemática para encontrá-las. A missão começou!",
        imageUrl: s({ bg: "city", char: "hero", element: "count", count: 10, label: "10 estrelas para recuperar!", mood: "excited" }),
        highlightWords: ["dez", "10", "missão", "matemática", "números", "mapa"],
      },
      {
        pageNumber: 3,
        text: "Super Beto voou até o parque e encontrou 3 estrelas escondidas nas árvores! Ele tinha encontrado: 3 estrelas. A adição começa! 3 mais nada ainda é 3. Vou achar todas! prometeu Beto.",
        imageUrl: s({ bg: "city", char: "hero", element: "equation", equation: "3 + 0 = 3", label: "Primeiras 3 estrelas encontradas!", mood: "excited" }),
        highlightWords: ["três", "3", "adição", "soma", "encontrar", "parque"],
      },
      {
        pageNumber: 4,
        text: "No museu, Super Beto achou mais 4 estrelas entre os quadros! Ele já tinha 3, agora achou 4 mais. Vamos somar: 3 mais 4 é igual a 7 estrelas! Somar é juntar quantidades! explicou Beto.",
        imageUrl: s({ bg: "city", char: "hero", element: "equation", equation: "3 + 4 = 7", label: "3 + 4 = 7 estrelas!", mood: "excited" }),
        highlightWords: ["quatro", "4", "sete", "7", "somar", "juntar", "museu"],
      },
      {
        pageNumber: 5,
        text: "Mas o vilão foi esperto: escondeu 2 estrelas de volta! Beto tinha 7 e perdeu 2. Vamos subtrair: 7 menos 2 é igual a 5 estrelas. Subtrair é tirar uma quantidade! disse Super Beto.",
        imageUrl: s({ bg: "city", char: "hero", element: "equation", equation: "7 - 2 = 5", label: "7 - 2 = 5 estrelas restantes!", mood: "thinking" }),
        highlightWords: ["dois", "2", "cinco", "5", "subtrair", "tirar", "vilão"],
      },
      {
        pageNumber: 6,
        text: "Super Beto fez uma última busca e achou as 5 estrelas restantes! Somamos: 5 mais 5 é igual a 10 estrelas! Todas as 10 estrelas-número estavam salvas! O vilão Caos fugiu derrotado. A matemática venceu!",
        imageUrl: s({ bg: "city", char: "hero", element: "equation", equation: "5 + 5 = 10", label: "5 + 5 = 10! Missão cumprida!", mood: "happy" }),
        highlightWords: ["cinco", "5", "dez", "10", "matemática", "venceu", "salvas"],
      },
      {
        pageNumber: 7,
        text: "As crianças da cidade aplaudiram Super Beto! Ele ensinou: somar é reunir, subtrair é separar. Com matemática, podemos resolver qualquer problema! Todos vocês podem ser super-heróis da Matemática!",
        imageUrl: s({ bg: "city", char: "hero", element: "celebrate", label: "Todos são heróis da Matemática!", mood: "excited" }),
        highlightWords: ["somar", "subtrair", "matemática", "resolver", "heróis"],
      },
      {
        pageNumber: 8,
        text: "Super Beto deixou sua lição favorita: 3 mais 4 é igual a 7. 10 menos 3 é igual a 7. 5 mais 5 é igual a 10. Pratique suas contas todo dia e você será um campeão da matemática!",
        imageUrl: s({ bg: "city", char: "hero", element: "equation", equation: "5 + 5 = 10", label: "Pratique matemática todo dia!", mood: "happy" }),
        highlightWords: ["praticar", "contas", "matemática", "campeão", "dia"],
      },
    ],
    questions: [
      { question: "Quanto é 3 + 4?", optionA: "6", optionB: "7", optionC: "8", correctAnswer: "b", difficulty: 2 },
      { question: "Se Beto tinha 7 estrelas e perdeu 2, quantas ficaram?", optionA: "4", optionB: "6", optionC: "5", correctAnswer: "c", difficulty: 2 },
      { question: "Quanto é 5 + 5?", optionA: "9", optionB: "11", optionC: "10", correctAnswer: "c", difficulty: 2 },
    ],
  },

  // ─── HISTÓRIA 6: A PRINCESA E AS FORMAS MÁGICAS ──────────────────────────
  {
    story: {
      title: "A Princesa e as Formas Mágicas",
      description: "A Princesa Isa descobre as formas geométricas escondidas em cada canto do seu castelo!",
      coverImage: s({ bg: "castle", char: "princess", element: "shape", shape: "diamond", label: "Formas Geométricas no Castelo!", mood: "happy" }),
      readingLevel: "intermediario",
      ageMin: 5,
      ageMax: 8,
      theme: "princesas",
      difficulty: 2,
    },
    pages: [
      {
        pageNumber: 1,
        text: "A Princesa Isa mora em um castelo encantado onde tudo tem uma forma especial. As formas geométricas são como a linguagem secreta do mundo! Vou descobrir todas as formas do meu castelo! disse Isa animada.",
        imageUrl: s({ bg: "castle", char: "princess", element: "number", number: 4, label: "O Castelo das Formas Mágicas", mood: "excited" }),
        highlightWords: ["princesa", "castelo", "formas", "descobrir", "geométricas"],
      },
      {
        pageNumber: 2,
        text: "Isa olhou para a janela do castelo. Era um QUADRADO perfeito! O quadrado tem 4 lados iguais e 4 cantos. Vamos contar os lados: 1, 2, 3, 4. Todos do mesmo tamanho. Que forma incrível!",
        imageUrl: s({ bg: "castle", char: "princess", element: "shape", shape: "square", label: "QUADRADO - 4 lados iguais!", mood: "happy" }),
        highlightWords: ["quadrado", "quatro", "lados", "iguais", "cantos", "janela"],
      },
      {
        pageNumber: 3,
        text: "A roda da carruagem era um CÍRCULO. Sem lados, sem cantos! É completamente redondo. O círculo rola porque não tem quinas! descobriu Isa. Uma bola, o sol e a lua são formas de círculo.",
        imageUrl: s({ bg: "castle", char: "princess", element: "shape", shape: "circle", label: "CÍRCULO - Sem lados, redondo!", mood: "excited" }),
        highlightWords: ["círculo", "redondo", "rolar", "sem lados", "carruagem"],
      },
      {
        pageNumber: 4,
        text: "O teto do castelo tinha forma de TRIÂNGULO. Três lados e três cantos! A professora Isa explicou: tri significa três em latim! Montanhas, fatias de pizza e pirâmides do Egito são triângulos.",
        imageUrl: s({ bg: "castle", char: "princess", element: "shape", shape: "triangle", label: "TRIÂNGULO - 3 lados e 3 cantos!", mood: "happy" }),
        highlightWords: ["triângulo", "três", "lados", "cantos", "pirâmide", "teto"],
      },
      {
        pageNumber: 5,
        text: "A porta do castelo era um RETÂNGULO. Tem 4 lados, mas 2 são maiores que os outros 2! É diferente do quadrado! percebeu Isa. Portas, janelas de TV e livros são retângulos no nosso dia a dia.",
        imageUrl: s({ bg: "castle", char: "princess", element: "shape", shape: "rectangle", label: "RETÂNGULO - 4 lados desiguais!", mood: "thinking" }),
        highlightWords: ["retângulo", "quatro", "lados", "diferente", "quadrado", "porta"],
      },
      {
        pageNumber: 6,
        text: "No cofre da princesa havia um LOSANGO brilhante, o formato do diamante! Tem 4 lados iguais mas fica em pé como uma pipa! Isa colocou o losango ao lado do quadrado. Os dois têm 4 lados iguais!",
        imageUrl: s({ bg: "castle", char: "princess", element: "shape", shape: "diamond", label: "LOSANGO - Como um diamante!", mood: "excited" }),
        highlightWords: ["losango", "diamante", "quatro", "lados", "pipa", "cofre"],
      },
      {
        pageNumber: 7,
        text: "Isa saiu pelo castelo com novos olhos. Ela via formas em tudo! Quadrado na janela, círculo no sino, triângulo no chapéu, retângulo no livro. As formas estão em todo lugar! exclamou feliz. Você consegue ver formas também?",
        imageUrl: s({ bg: "castle", char: "princess", element: "celebrate", label: "Formas estão em todo lugar!", mood: "happy" }),
        highlightWords: ["formas", "quadrado", "círculo", "triângulo", "retângulo", "todo lugar"],
      },
    ],
    questions: [
      { question: "Quantos lados tem o triângulo?", optionA: "2", optionB: "4", optionC: "3", correctAnswer: "c", difficulty: 2 },
      { question: "Qual forma não tem lados nem cantos?", optionA: "Quadrado", optionB: "Círculo", optionC: "Retângulo", correctAnswer: "b", difficulty: 2 },
      { question: "Qual é a diferença entre quadrado e retângulo?", optionA: "O retângulo tem lados desiguais", optionB: "O retângulo é redondo", optionC: "São formas iguais", correctAnswer: "a", difficulty: 2 },
    ],
  },

  // ─── HISTÓRIA 7: REX CONTA ATÉ 10 ────────────────────────────────────────
  {
    story: {
      title: "Rex Conta até 10",
      description: "Rex o dinossauro laranja aprende a contar de 1 a 10 explorando a floresta pré-histórica!",
      coverImage: s({ bg: "prehistoric", char: "dino2", element: "count", count: 5, label: "Rex aprende a contar!", mood: "excited" }),
      readingLevel: "iniciante",
      ageMin: 4,
      ageMax: 6,
      theme: "dinossauros",
      difficulty: 1,
    },
    pages: [
      {
        pageNumber: 1,
        text: "Rex o dinossauro laranja acordou cedo e encontrou ovos no seu ninho. Ele queria saber quantos eram! Rex aprendeu que para saber quantos existem de algo, precisamos CONTAR. Vamos contar juntos!",
        imageUrl: s({ bg: "prehistoric", char: "dino2", element: "number", number: 1, label: "Rex aprende a contar!", mood: "excited" }),
        highlightWords: ["contar", "quantidade", "número", "dinossauro", "ninho"],
      },
      {
        pageNumber: 2,
        text: "Rex contou os ovos no ninho: um... dois... três ovos! Rex bateu a cauda de alegria. Tenho três ovos! disse Rex. O número 3 representa três coisas. Você consegue mostrar 3 dedos agora?",
        imageUrl: s({ bg: "prehistoric", char: "dino2", element: "count", count: 3, label: "1, 2, 3 ovos no ninho!", mood: "happy" }),
        highlightWords: ["um", "dois", "três", "1", "2", "3", "contar", "ovos"],
      },
      {
        pageNumber: 3,
        text: "Rex saiu para passear e encontrou 4 pedras vermelhas no caminho. Depois, encontrou 5 flores amarelas no prado. Quatro pedras e cinco flores! Rex contou todos com muito cuidado.",
        imageUrl: s({ bg: "prehistoric", char: "dino2", element: "count", count: 4, label: "4 pedras + 5 flores!", mood: "happy" }),
        highlightWords: ["quatro", "4", "cinco", "5", "pedras", "flores", "prado"],
      },
      {
        pageNumber: 4,
        text: "No céu, Rex avistou pássaros voando em grupo. Ele contou: 1, 2, 3, 4, 5, 6. Seis pássaros! No rio, nadavam 7 peixes coloridos. Seis pássaros e sete peixes! disse Rex muito animado.",
        imageUrl: s({ bg: "prehistoric", char: "dino2", element: "count", count: 6, label: "6 pássaros no céu!", mood: "excited" }),
        highlightWords: ["seis", "6", "sete", "7", "pássaros", "peixes", "rio"],
      },
      {
        pageNumber: 5,
        text: "Na floresta, Rex encontrou 8 flores azuis no chão. De repente, 9 borboletas saíram voando das flores! Oito flores e nove borboletas, que beleza! exclamou Rex maravilhado com a natureza.",
        imageUrl: s({ bg: "prehistoric", char: "dino2", element: "count", count: 8, label: "8 flores e 9 borboletas!", mood: "excited" }),
        highlightWords: ["oito", "8", "nove", "9", "flores", "borboletas", "natureza"],
      },
      {
        pageNumber: 6,
        text: "Rex chegou em um lugar especial e viu seus amigos dinossauros! Ele contou: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10! Dez dinossauros! Rex estava muito feliz de ter chegado ao número 10!",
        imageUrl: s({ bg: "prehistoric", char: "dino2", element: "count", count: 10, label: "10 dinossauros amigos!", mood: "happy" }),
        highlightWords: ["dez", "10", "dinossauros", "contar", "amigos", "especial"],
      },
      {
        pageNumber: 7,
        text: "Rex aprendeu todos os números de 1 a 10! Agora ele pode contar qualquer coisa: ovos, pedras, flores, pássaros, peixes, borboletas e amigos. Os números estão em todo lugar. Que aventura de contagem!",
        imageUrl: s({ bg: "prehistoric", char: "dino2", element: "celebrate", label: "Rex sabe contar até 10!", mood: "happy" }),
        highlightWords: ["números", "1", "10", "contar", "todo lugar", "aventura"],
      },
    ],
    questions: [
      { question: "Quantos ovos Rex tinha no ninho?", optionA: "Dois", optionB: "Três", optionC: "Quatro", correctAnswer: "b", difficulty: 1 },
      { question: "Quantos pássaros Rex viu no céu?", optionA: "5", optionB: "6", optionC: "7", correctAnswer: "b", difficulty: 1 },
      { question: "Qual número vem depois do 9?", optionA: "11", optionB: "8", optionC: "10", correctAnswer: "c", difficulty: 1 },
    ],
  },

  // ─── HISTÓRIA 8: AS CORES DA FLORESTA ────────────────────────────────────
  {
    story: {
      title: "As Cores da Floresta",
      description: "Nina a abelhinha descobre as cores primárias e aprende a misturá-las criando novas cores!",
      coverImage: s({ bg: "meadow", char: "bee", element: "color-mix", color1: "#ef4444", color2: "#3b82f6", colorResult: "#8b5cf6", label: "Descobrindo as Cores!", mood: "happy" }),
      readingLevel: "iniciante",
      ageMin: 4,
      ageMax: 6,
      theme: "natureza",
      difficulty: 1,
    },
    pages: [
      {
        pageNumber: 1,
        text: "Nina a abelhinha saía pela floresta toda manhã para colher néctar das flores. Mas hoje ela queria descobrir algo especial: de onde vêm as cores do mundo? Vou explorar as cores! disse Nina animada.",
        imageUrl: s({ bg: "meadow", char: "bee", element: "number", number: 3, label: "Nina vai descobrir as cores!", mood: "excited" }),
        highlightWords: ["cores", "floresta", "descobrir", "abelha", "néctar"],
      },
      {
        pageNumber: 2,
        text: "Nina voou até um campo de flores vermelhas. Tudo era VERMELHO! A cor vermelha é forte e cheia de energia. Vermelho é como o fogo! disse Nina. Morango, tomate e rosa vermelha. Que cor bonita!",
        imageUrl: s({ bg: "meadow", char: "bee", element: "letter", letter: "V", label: "VERMELHO - Cor da energia!", mood: "happy" }),
        highlightWords: ["vermelho", "energia", "forte", "flores", "cor", "fogo"],
      },
      {
        pageNumber: 3,
        text: "Mais adiante, Nina avistou o lago cristalino e o céu imenso. Tudo era AZUL! O azul é a cor da calma e do frescor. Azul é como a água! cantou Nina. Mar, céu e mirtilo são azuis!",
        imageUrl: s({ bg: "ocean", char: "bee", element: "letter", letter: "A", label: "AZUL - Cor da calma!", mood: "happy" }),
        highlightWords: ["azul", "calma", "água", "céu", "lago", "frescor"],
      },
      {
        pageNumber: 4,
        text: "O sol brilhava dourado e os girassóis se abriam felizes. Tudo era AMARELO! O amarelo é a cor da alegria e da luz do sol. Amarelo é como o sol! festejou Nina. Banana e limão são amarelos!",
        imageUrl: s({ bg: "meadow", char: "bee", element: "letter", letter: "A", label: "AMARELO - Cor da alegria!", mood: "excited" }),
        highlightWords: ["amarelo", "sol", "alegria", "luz", "girassol", "banana"],
      },
      {
        pageNumber: 5,
        text: "Nina misturou néctar vermelho com néctar azul. Que surpresa! O resultado foi ROXO! Vermelho mais Azul é igual a Roxo. Uva, lavanda e violeta são roxos! descobriu Nina. As cores podem se misturar!",
        imageUrl: s({ bg: "meadow", char: "bee", element: "color-mix", color1: "#ef4444", color2: "#3b82f6", colorResult: "#8b5cf6", label: "Vermelho + Azul = Roxo!", mood: "excited" }),
        highlightWords: ["roxo", "misturar", "vermelho", "azul", "descobrir", "uva"],
      },
      {
        pageNumber: 6,
        text: "Nina tentou misturar azul com amarelo. Apareceu uma cor nova: VERDE! Azul mais Amarelo é igual a Verde. As folhas das árvores são verdes! exclamou Nina. A mistura de cores cria cores novas!",
        imageUrl: s({ bg: "meadow", char: "bee", element: "color-mix", color1: "#3b82f6", color2: "#fbbf24", colorResult: "#22c55e", label: "Azul + Amarelo = Verde!", mood: "excited" }),
        highlightWords: ["verde", "azul", "amarelo", "misturar", "folhas", "árvores"],
      },
      {
        pageNumber: 7,
        text: "Por último, Nina misturou vermelho com amarelo. Surgiu a cor LARANJA! Vermelho mais Amarelo é igual a Laranja. Nina aprendeu as 3 cores primárias: Vermelho, Azul e Amarelo. Com elas fazemos todas as outras cores!",
        imageUrl: s({ bg: "meadow", char: "bee", element: "color-mix", color1: "#ef4444", color2: "#fbbf24", colorResult: "#f97316", label: "Vermelho + Amarelo = Laranja!", mood: "happy" }),
        highlightWords: ["laranja", "vermelho", "amarelo", "primárias", "misturar", "três"],
      },
    ],
    questions: [
      { question: "Quais são as três cores primárias?", optionA: "Verde, Roxo e Laranja", optionB: "Vermelho, Azul e Amarelo", optionC: "Azul, Verde e Branco", correctAnswer: "b", difficulty: 1 },
      { question: "Vermelho + Azul = qual cor?", optionA: "Verde", optionB: "Laranja", optionC: "Roxo", correctAnswer: "c", difficulty: 1 },
      { question: "O que Nina descobriu sobre as cores?", optionA: "Que não podem se misturar", optionB: "Que só existem três cores", optionC: "Que misturando cores primárias surgem cores novas", correctAnswer: "c", difficulty: 1 },
    ],
  },

  // ─── HISTÓRIA 9: KIT E A ARTE DE COMPARTILHAR ────────────────────────────
  {
    story: {
      title: "Kit e a Arte de Compartilhar",
      description: "Kit o cachorrinho aprende que compartilhar multiplica a alegria e fortalece as amizades.",
      coverImage: s({ bg: "meadow", char: "dog", element: "equation", equation: "8 ÷ 4 = 2", label: "Kit aprende a dividir!", mood: "happy" }),
      readingLevel: "iniciante",
      ageMin: 5,
      ageMax: 7,
      theme: "animais",
      difficulty: 1,
    },
    pages: [
      {
        pageNumber: 1,
        text: "Kit era um cachorrinho fofo que ganhou um presente especial: 8 biscoitos quentinhos! Kit ficou muito feliz. Ele correu para seu quarto abraçando a caixa de biscoitos. Que presente maravilhoso!",
        imageUrl: s({ bg: "cozy", char: "dog", element: "count", count: 8, label: "Kit recebeu 8 biscoitos!", mood: "happy" }),
        highlightWords: ["biscoitos", "oito", "8", "ganhou", "presente", "feliz"],
      },
      {
        pageNumber: 2,
        text: "Seus três amigos chegaram: Bola o coelho, Pingo o gato e Mel a tartaruga. Que cheiro gostoso! disseram os amigos. Mas Kit escondeu os biscoitos. São meus e não vou dividir! disse ele.",
        imageUrl: s({ bg: "cozy", char: "dog", element: "number", number: 3, label: "3 amigos chegaram visitar", mood: "sad" }),
        highlightWords: ["amigos", "três", "egoísta", "dividir", "esconder", "biscoitos"],
      },
      {
        pageNumber: 3,
        text: "Os amigos ficaram muito tristes e foram embora. Kit comeu os biscoitos sozinho, mas não sentiu alegria. Por que estou triste se tenho tudo? pensou Kit confuso. A solidão doía mais que a fome.",
        imageUrl: s({ bg: "cozy", char: "dog", element: "number", number: 3, label: "Kit ficou triste e sozinho", mood: "sad" }),
        highlightWords: ["triste", "sozinho", "alegria", "sentimento", "confuso", "solidão"],
      },
      {
        pageNumber: 4,
        text: "Kit olhou pela janela e viu seus amigos brincando sem ele, rindo mesmo sem os biscoitos. Kit sentiu uma pontada no coração. Errei! Ser egoísta não me fez feliz de verdade! percebeu Kit.",
        imageUrl: s({ bg: "meadow", char: "dog", element: "number", number: 4, label: "Kit percebeu que errou", mood: "thinking" }),
        highlightWords: ["errei", "egoísta", "feliz", "perceber", "amizade", "coração"],
      },
      {
        pageNumber: 5,
        text: "Kit correu até seus amigos e pediu desculpa com muito carinho. Me perdoem! Eu fui egoísta. Quero dividir tudo com vocês! disse Kit. Os amigos sorriram: Te perdoamos, Kit! disseram com alegria.",
        imageUrl: s({ bg: "meadow", char: "dog", element: "number", number: 5, label: "Kit pediu desculpa aos amigos", mood: "excited" }),
        highlightWords: ["desculpa", "perdoar", "dividir", "amigos", "carinho", "alegria"],
      },
      {
        pageNumber: 6,
        text: "Kit abriu a caixa e contou: tinha 8 biscoitos e 4 amigos, incluindo ele. Vamos dividir: 8 dividido por 4 é igual a 2 biscoitos para cada um! Divisão é repartir igual para todos! aprendeu Kit.",
        imageUrl: s({ bg: "meadow", char: "dog", element: "equation", equation: "8 ÷ 4 = 2", label: "8 ÷ 4 = 2 para cada um!", mood: "happy" }),
        highlightWords: ["oito", "8", "quatro", "4", "dois", "2", "divisão", "dividir", "igual"],
      },
      {
        pageNumber: 7,
        text: "Com os biscoitos divididos, os quatro amigos brincaram, riram e ficaram muito felizes! Compartilhar multiplica a alegria! descobriu Kit. Os biscoitos eram os mais gostosos do mundo porque eram partilhados com amor!",
        imageUrl: s({ bg: "meadow", char: "dog", element: "celebrate", label: "Compartilhar multiplica a alegria!", mood: "happy" }),
        highlightWords: ["compartilhar", "alegria", "amizade", "amor", "felizes", "multiplica"],
      },
    ],
    questions: [
      { question: "Quantos biscoitos Kit tinha?", optionA: "6", optionB: "10", optionC: "8", correctAnswer: "c", difficulty: 1 },
      { question: "Quanto ficou para cada amigo depois de dividir?", optionA: "2 biscoitos", optionB: "3 biscoitos", optionC: "4 biscoitos", correctAnswer: "a", difficulty: 1 },
      { question: "O que Kit aprendeu?", optionA: "Que não precisa de amigos", optionB: "Que compartilhar multiplica a alegria", optionC: "Que biscoitos são ruins", correctAnswer: "b", difficulty: 1 },
    ],
  },

  // ─── HISTÓRIA 10: GUARDIÕES DO OCEANO ────────────────────────────────────
  {
    story: {
      title: "Guardiões do Oceano",
      description: "Ana e Pedro mergulham no oceano e descobrem como proteger a vida marinha e os corais!",
      coverImage: s({ bg: "ocean", char: "turtle", element: "coral", label: "Guardiões do Oceano", mood: "brave" }),
      readingLevel: "avancado",
      ageMin: 7,
      ageMax: 10,
      theme: "natureza",
      difficulty: 3,
    },
    pages: [
      {
        pageNumber: 1,
        text: "O oceano cobre mais de 70% da Terra e é o lar de milhões de animais. Nos corais coloridos vivem peixes de todas as cores, tartarugas e estrelas-do-mar. O oceano é chamado de pulmão do planeta!",
        imageUrl: s({ bg: "ocean", char: "fish", element: "number", number: 70, label: "70% da Terra é oceano!", mood: "happy" }),
        highlightWords: ["oceano", "corais", "pulmão", "planeta", "animais", "tartarugas"],
      },
      {
        pageNumber: 2,
        text: "Os corais são como cidades subaquáticas. Cada coral é um animal minúsculo que vive em colônia. Peixes usam os corais para se esconder de predadores. Sem corais, muitos peixes perdem seu lar!",
        imageUrl: s({ bg: "ocean", char: "fish", element: "coral", label: "Corais são cidades do mar!", mood: "excited" }),
        highlightWords: ["corais", "colônia", "peixes", "predadores", "lar", "animal"],
      },
      {
        pageNumber: 3,
        text: "Mas o oceano está em perigo! Garrafas, sacolas e lixo entram no mar e machucam os animais. A poluição e as mudanças climáticas esquentam o oceano. Os corais ficam brancos e morrem quando a água esquenta demais.",
        imageUrl: s({ bg: "ocean", char: "turtle", element: "letter", letter: "P", label: "Poluição ameaça o oceano!", mood: "sad" }),
        highlightWords: ["perigo", "poluição", "lixo", "mudanças climáticas", "proteger", "corais"],
      },
      {
        pageNumber: 4,
        text: "Ana tinha 9 anos e adorava o mar. Seu irmão Pedro tinha 11 anos e era mergulhador. Vamos mergulhar para ver como está o recife! propôs Pedro. Eles colocaram as máscaras e mergulharam juntos.",
        imageUrl: s({ bg: "ocean", char: "siblings", element: "number", number: 9, label: "Ana e Pedro vão mergulhar!", mood: "excited" }),
        highlightWords: ["mergulhar", "recife", "investigar", "cuidar", "irmãos", "máscaras"],
      },
      {
        pageNumber: 5,
        text: "Dentro do mar, eles avistaram uma tartaruga-verde presa em uma rede de pesca abandonada! A tartaruga estava assustada e cansada. Precisamos libertá-la! disse Ana com o coração acelerado.",
        imageUrl: s({ bg: "ocean", char: "turtle", element: "number", number: 5, label: "Tartaruga presa precisa de ajuda!", mood: "brave" }),
        highlightWords: ["tartaruga", "presa", "libertar", "cuidar", "socorro", "rede"],
      },
      {
        pageNumber: 6,
        text: "Com muito cuidado e calma, Pedro cortou a rede com uma tesoura especial. A tartaruga ficou livre! Ela olhou para Ana e Pedro como se fosse dizer obrigada. Depois mergulhou feliz nas águas azuis.",
        imageUrl: s({ bg: "ocean", char: "turtle", element: "letter", letter: "L", label: "Tartaruga está livre!", mood: "happy" }),
        highlightWords: ["cuidado", "calma", "livre", "agradecer", "feliz", "obrigada"],
      },
      {
        pageNumber: 7,
        text: "Ana e Pedro ficaram tão inspirados que voltaram com sacos coletores. Recolheram lixo do fundo do mar: garrafas, sacolas, redes velhas. Quanto lixo havia! Cada peça retirada salva uma vida! disse Pedro.",
        imageUrl: s({ bg: "ocean", char: "girl", element: "count", count: 7, label: "Coletando lixo do mar!", mood: "brave" }),
        highlightWords: ["lixo", "coletar", "retirar", "salvar", "oceano", "garrafas"],
      },
      {
        pageNumber: 8,
        text: "De volta ao recife, eles plantaram corais novos em uma área danificada. Com cuidado, cada pedaço de coral foi fixado no fundo rochoso. Em poucos meses, o coral crescerá e trará vida de volta!",
        imageUrl: s({ bg: "ocean", char: "turtle", element: "coral", label: "Plantando corais novos!", mood: "excited" }),
        highlightWords: ["plantar", "coral", "recuperar", "crescer", "vida", "recife"],
      },
      {
        pageNumber: 9,
        text: "Semanas depois, peixes voltaram ao recife recuperado! Ana e Pedro se tornaram Guardiões do Oceano. Todos podem ser guardiões! disse Ana. Reduza o lixo, economize água e respeite a natureza. O oceano agradece!",
        imageUrl: s({ bg: "ocean", char: "fish", element: "celebrate", label: "Guardiões do Oceano para sempre!", mood: "happy" }),
        highlightWords: ["guardiões", "oceano", "natureza", "respeitar", "reduzir", "economizar"],
      },
    ],
    questions: [
      { question: "O que ameaça os corais e o oceano?", optionA: "Muita chuva", optionB: "Muito frio", optionC: "Poluição e aquecimento da água", correctAnswer: "c", difficulty: 3 },
      { question: "O que Ana e Pedro fizeram para ajudar o oceano?", optionA: "Foram pescar", optionB: "Libertaram tartaruga, coletaram lixo e plantaram corais", optionC: "Nadaram muito", correctAnswer: "b", difficulty: 3 },
      { question: "Como você pode ajudar a proteger o oceano?", optionA: "Jogando lixo no rio", optionB: "Comprando mais plástico", optionC: "Reduzindo lixo e respeitando a natureza", correctAnswer: "c", difficulty: 3 },
    ],
  },
];
