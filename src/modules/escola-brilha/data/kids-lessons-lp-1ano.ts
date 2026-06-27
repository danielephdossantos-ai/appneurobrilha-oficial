import type { KidsLesson, KidsScene, KidsMascot } from "../types/kids-lesson";

/**
 * Aulas Kids de Língua Portuguesa — 1º Ano.
 * Mesmo padrão pedagógico das aulas de Matemática:
 * intro → concept (cada letra/sílaba/exemplo) → usecase → summary → celebrate.
 * Sem múltipla escolha. Tudo visual, com fala explicando "de verdade".
 * Vários níveis progressivos por código BNCC.
 */

const mascotFor = (nivel: number): KidsMascot => (nivel % 2 ? "pip" : "pipa");

function buildLP(
  codigo: string,
  cor: KidsLesson["cor"],
  nivel: number,
  titulo: string,
  intro: string,
  blocos: { titulo: string; simbolo?: string; emoji?: string; fala: string }[],
  exemplos: { emoji: string; texto: string }[] | null,
  resumo: string[],
  falaResumo = "Mandou muito bem!",
): KidsLesson {
  const scenes: KidsScene[] = [
    { kind: "intro", mascot: mascotFor(nivel), titulo, fala: intro },
    // Contexto: por que aprender isso
    {
      kind: "concept",
      titulo: "Por que aprender?",
      emoji: "💡",
      fala: `${intro} Saber isso ajuda a ler, escrever e contar histórias do seu jeitinho.`,
    },
    // Conceitos principais (um por bloco)
    ...blocos.map((b) => ({
      kind: "concept" as const,
      titulo: b.titulo,
      simbolo: b.simbolo,
      emoji: b.emoji,
      fala: b.fala,
    })),
  ];
  // Caso de uso: SÓ mostra quando há exemplos reais de uso no dia a dia.
  // Não geramos mais cenas vazias com "✨" a partir dos blocos.
  if (exemplos && exemplos.length) {
    scenes.push({
      kind: "usecase",
      titulo: "Onde a gente vê?",
      cenas: exemplos,
      fala: "Olha onde isso aparece no dia a dia.",
    });
  }

  // Dica do mascote antes de fechar
  scenes.push({
    kind: "concept",
    titulo: "Dica do Pip",
    emoji: "🐣",
    fala: "Quando você não souber, fala em voz alta e vai com calma. A gente aprende repetindo!",
  });
  // Recapitulação visual
  scenes.push({
    kind: "concept",
    titulo: "Vamos relembrar",
    emoji: "🔁",
    fala: `Hoje a gente viu: ${blocos.map((b) => b.titulo).join(", ")}.`,
  });
  scenes.push({ kind: "summary", titulo: "Você aprendeu!", itens: resumo, fala: falaResumo });
  scenes.push({ kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" });
  return {
    codigo_bncc: codigo,
    titulo,
    disciplina: "Língua Portuguesa",
    serie: "1º Ano",
    xp: 100,
    cor,
    scenes,
  };
}

// ───────── LP02 — Letras do Alfabeto (4 níveis) ─────────
const EF01LP02_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP02", "pink", 1, "Alfabeto — A até G",
    "Vamos conhecer as primeiras letras do alfabeto.",
    [
      { titulo: "Letra A", simbolo: "A", fala: "A de abelha. Repete comigo: Á!" },
      { titulo: "Letra B", simbolo: "B", fala: "B de bola. Bê!" },
      { titulo: "Letra C", simbolo: "C", fala: "C de cachorro. Cê!" },
      { titulo: "Letra D", simbolo: "D", fala: "D de dado. Dê!" },
      { titulo: "Letra E", simbolo: "E", fala: "E de elefante. É!" },
      { titulo: "Letra F", simbolo: "F", fala: "F de foca. Éfe!" },
      { titulo: "Letra G", simbolo: "G", fala: "G de gato. Gê!" },
    ],
    [{ emoji: "🐝", texto: "A de abelha" }, { emoji: "⚽", texto: "B de bola" }, { emoji: "🐶", texto: "C de cachorro" }],
    ["A, B, C, D, E, F, G", "Cada letra tem um som", "Toda palavra começa com uma letra"]),
  buildLP("EF01LP02", "pink", 2, "Alfabeto — H até N",
    "Agora as letras do meio do alfabeto.",
    [
      { titulo: "Letra H", simbolo: "H", fala: "H de helicóptero. Agá! Ela é caladinha." },
      { titulo: "Letra I", simbolo: "I", fala: "I de igreja. Í!" },
      { titulo: "Letra J", simbolo: "J", fala: "J de jacaré. Jota!" },
      { titulo: "Letra K", simbolo: "K", fala: "K de kiwi. Cá!" },
      { titulo: "Letra L", simbolo: "L", fala: "L de lua. Éle!" },
      { titulo: "Letra M", simbolo: "M", fala: "M de mamãe. Éme!" },
      { titulo: "Letra N", simbolo: "N", fala: "N de nariz. Éne!" },
    ],
    [{ emoji: "🌙", texto: "L de lua" }, { emoji: "👩", texto: "M de mamãe" }, { emoji: "🐊", texto: "J de jacaré" }],
    ["H, I, J, K, L, M, N", "A letra H é caladinha", "Cada letra tem seu nome"]),
  buildLP("EF01LP02", "pink", 3, "Alfabeto — O até T",
    "Mais letras do alfabeto.",
    [
      { titulo: "Letra O", simbolo: "O", fala: "O de ovo. Ó!" },
      { titulo: "Letra P", simbolo: "P", fala: "P de pato. Pê!" },
      { titulo: "Letra Q", simbolo: "Q", fala: "Q de queijo. Quê!" },
      { titulo: "Letra R", simbolo: "R", fala: "R de rato. Érre!" },
      { titulo: "Letra S", simbolo: "S", fala: "S de sapo. Ésse!" },
      { titulo: "Letra T", simbolo: "T", fala: "T de tatu. Tê!" },
    ],
    [{ emoji: "🥚", texto: "O de ovo" }, { emoji: "🦆", texto: "P de pato" }, { emoji: "🐀", texto: "R de rato" }],
    ["O, P, Q, R, S, T", "Som forte e som fraco do R", "Cada letra vira palavra"]),
  buildLP("EF01LP02", "pink", 4, "Alfabeto — U até Z",
    "As últimas letras do alfabeto.",
    [
      { titulo: "Letra U", simbolo: "U", fala: "U de uva. Ú!" },
      { titulo: "Letra V", simbolo: "V", fala: "V de vaca. Vê!" },
      { titulo: "Letra W", simbolo: "W", fala: "W de Wi-Fi. Dáblio!" },
      { titulo: "Letra X", simbolo: "X", fala: "X de xícara. Xis!" },
      { titulo: "Letra Y", simbolo: "Y", fala: "Y de yoga. Ípsilon!" },
      { titulo: "Letra Z", simbolo: "Z", fala: "Z de zebra. Zê!" },
    ],
    [{ emoji: "🍇", texto: "U de uva" }, { emoji: "🐄", texto: "V de vaca" }, { emoji: "🦓", texto: "Z de zebra" }],
    ["U, V, W, X, Y, Z", "Terminamos o alfabeto!", "São 26 letras no total"]),
];

// ───────── LP14 — Vogais e Consoantes (4 níveis) ─────────
const EF01LP14_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP14", "amber", 1, "As 5 vogais",
    "Vogais são as letras que a gente canta com a boca aberta!",
    [
      { titulo: "Vogal A", simbolo: "A", fala: "Á! Abre bem a boca." },
      { titulo: "Vogal E", simbolo: "E", fala: "É! Sorriso." },
      { titulo: "Vogal I", simbolo: "I", fala: "Í! Bem fininho." },
      { titulo: "Vogal O", simbolo: "O", fala: "Ó! Boca redondinha." },
      { titulo: "Vogal U", simbolo: "U", fala: "Ú! Boca bem juntinha." },
    ],
    [{ emoji: "🐝", texto: "Abelha começa com A" }, { emoji: "🦷", texto: "Igreja com I" }, { emoji: "🥚", texto: "Ovo com O" }],
    ["A, E, I, O, U", "Toda palavra tem vogal", "Vogal canta!"]),
  buildLP("EF01LP14", "amber", 2, "Som das vogais nas palavras",
    "Cada vogal aparece nas palavras dando o som dela.",
    [
      { titulo: "A em CASA", emoji: "🏠", fala: "Cá-sa: tem dois A!" },
      { titulo: "E em DEDO", emoji: "👆", fala: "Dê-do: dois E!" },
      { titulo: "I em PIPA", emoji: "🪁", fala: "Pí-pa: o I aparece." },
      { titulo: "O em BOLO", emoji: "🎂", fala: "Bô-lo: tem dois O!" },
      { titulo: "U em URSO", emoji: "🐻", fala: "Úr-so: começa com U." },
    ],
    null,
    ["Cada vogal tem um som", "A vogal aparece dentro das palavras"]),
  buildLP("EF01LP14", "amber", 3, "Consoantes — o resto do alfabeto",
    "As outras letras se chamam consoantes. Elas precisam da vogal para soar.",
    [
      { titulo: "B precisa de vogal", simbolo: "B + A", fala: "B sozinho não fala. Com A vira BA!" },
      { titulo: "M + A = MA", simbolo: "MA", fala: "M com A vira MA. Como em MAMÃE." },
      { titulo: "P + A = PA", simbolo: "PA", fala: "P com A vira PA. Como em PAPAI." },
      { titulo: "T + I = TI", simbolo: "TI", fala: "T com I vira TI. Como em TIA." },
    ],
    [{ emoji: "👩", texto: "MAMÃE" }, { emoji: "👨", texto: "PAPAI" }, { emoji: "👵", texto: "TIA" }],
    ["Consoante precisa de vogal", "Vogal + consoante = sílaba"]),
  buildLP("EF01LP14", "amber", 4, "Vogal x Consoante — jogo dos sons",
    "Vamos diferenciar de verdade.",
    [
      { titulo: "Boca aberta = vogal", simbolo: "AEIOU", fala: "Vogal: ar sai livre." },
      { titulo: "Boca trava = consoante", simbolo: "B C D", fala: "Consoante: a língua, o lábio ou o dente travam o ar." },
      { titulo: "Palavra BOLA", emoji: "⚽", fala: "B-O-L-A: B e L são consoantes; O e A são vogais." },
      { titulo: "Palavra GATO", emoji: "🐱", fala: "G-A-T-O: G e T consoantes; A e O vogais." },
    ],
    null,
    ["Vogal: ar livre", "Consoante: ar travado", "Toda palavra mistura as duas"]),
];

// ───────── LP06 / LP50 — Sílabas (4 níveis) ─────────
function buildSilaba(codigo: string, nivel: number, titulo: string, intro: string,
  silabas: { simbolo: string; fala: string }[], palavras: { emoji: string; texto: string }[]): KidsLesson {
  return buildLP(codigo, "violet", nivel, titulo, intro,
    silabas.map((s) => ({ titulo: s.simbolo, simbolo: s.simbolo, fala: s.fala })),
    palavras,
    silabas.map((s) => s.simbolo),
  );
}

const EF01LP06_VARIANTS: KidsLesson[] = [
  buildSilaba("EF01LP06", 1, "Sílabas com A — Nível 1",
    "Sílaba é o pedacinho da palavra. Vamos começar com A.",
    [
      { simbolo: "BA", fala: "B com A. BA! Como em BANANA." },
      { simbolo: "CA", fala: "C com A. CA! Como em CASA." },
      { simbolo: "DA", fala: "D com A. DA! Como em DADO." },
      { simbolo: "FA", fala: "F com A. FA! Como em FACA." },
      { simbolo: "GA", fala: "G com A. GA! Como em GATO." },
    ],
    [{ emoji: "🍌", texto: "BA-NA-NA" }, { emoji: "🏠", texto: "CA-SA" }, { emoji: "🐱", texto: "GA-TO" }]),
  buildSilaba("EF01LP06", 2, "Sílabas com E — Nível 2",
    "Agora com a vogal E.",
    [
      { simbolo: "BE", fala: "B com E. BE! Como em BEBÊ." },
      { simbolo: "DE", fala: "D com E. DE! Como em DEDO." },
      { simbolo: "ME", fala: "M com E. ME! Como em MESA." },
      { simbolo: "PE", fala: "P com E. PE! Como em PENA." },
      { simbolo: "TE", fala: "T com E. TE! Como em TECLA." },
    ],
    [{ emoji: "👶", texto: "BE-BÊ" }, { emoji: "👆", texto: "DE-DO" }, { emoji: "🪑", texto: "ME-SA" }]),
  buildSilaba("EF01LP06", 3, "Sílabas com I, O, U — Nível 3",
    "Mais vogais juntando com consoantes.",
    [
      { simbolo: "PI", fala: "P com I. PI! Como em PIPA." },
      { simbolo: "BO", fala: "B com O. BO! Como em BOLA." },
      { simbolo: "LU", fala: "L com U. LU! Como em LUA." },
      { simbolo: "VI", fala: "V com I. VI! Como em VIDA." },
      { simbolo: "RO", fala: "R com O. RO! Como em ROSA." },
    ],
    [{ emoji: "🪁", texto: "PI-PA" }, { emoji: "⚽", texto: "BO-LA" }, { emoji: "🌙", texto: "LU-A" }]),
  buildSilaba("EF01LP06", 4, "Juntando sílabas — formar palavras",
    "Sílaba + sílaba = palavra!",
    [
      { simbolo: "BA + LA = BALA", fala: "BA-LA. Bala!" },
      { simbolo: "BO + LO = BOLO", fala: "BO-LO. Bolo!" },
      { simbolo: "GA + TO = GATO", fala: "GA-TO. Gato!" },
      { simbolo: "PA + TO = PATO", fala: "PA-TO. Pato!" },
      { simbolo: "MA + LA = MALA", fala: "MA-LA. Mala!" },
    ],
    [{ emoji: "🍬", texto: "BA-LA" }, { emoji: "🎂", texto: "BO-LO" }, { emoji: "🦆", texto: "PA-TO" }]),
];

const EF01LP50_VARIANTS: KidsLesson[] = EF01LP06_VARIANTS.map((l) => ({ ...l, codigo_bncc: "EF01LP50" }));

// ───────── LP09 — Rimas (4 níveis) ─────────
const EF01LP09_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP09", "pink", 1, "O que é rima?",
    "Rima é quando duas palavras terminam com o mesmo som.",
    [
      { titulo: "GATO rima com PATO", simbolo: "-ATO", fala: "Gato e pato terminam igualzinho: A-TO." },
      { titulo: "MÃO rima com PÃO", simbolo: "-ÃO", fala: "Mão e pão terminam com ÃO." },
      { titulo: "FLOR rima com COR", simbolo: "-OR", fala: "Flor e cor terminam com OR." },
    ],
    [{ emoji: "🐱", texto: "GATO" }, { emoji: "🦆", texto: "PATO" }, { emoji: "✋", texto: "MÃO" }, { emoji: "🍞", texto: "PÃO" }],
    ["Rima = som igual no final", "Gato-Pato", "Mão-Pão"]),
  buildLP("EF01LP09", "pink", 2, "Mais rimas com -ÃO",
    "Vamos brincar com palavras que terminam em ÃO.",
    [
      { titulo: "MÃO", emoji: "✋", fala: "Mão!" },
      { titulo: "PÃO", emoji: "🍞", fala: "Pão!" },
      { titulo: "CÃO", emoji: "🐶", fala: "Cão!" },
      { titulo: "LIMÃO", emoji: "🍋", fala: "Limão!" },
      { titulo: "BOTÃO", emoji: "🔘", fala: "Botão!" },
    ],
    null,
    ["Todas terminam em ÃO", "Rima fácil de achar"]),
  buildLP("EF01LP09", "pink", 3, "Rimas com -INHO",
    "Diminutivo também rima!",
    [
      { titulo: "GATINHO", emoji: "🐱", fala: "Ga-ti-NHO." },
      { titulo: "PEIXINHO", emoji: "🐟", fala: "Pei-xi-NHO." },
      { titulo: "PASSARINHO", emoji: "🐦", fala: "Pas-sa-ri-NHO." },
      { titulo: "CACHORRINHO", emoji: "🐶", fala: "Ca-chor-ri-NHO." },
    ],
    null,
    ["-INHO rima com -INHO", "Todos são pequeninos"]),
  buildLP("EF01LP09", "pink", 4, "Inventar rima",
    "Sua vez de pensar em rimas!",
    [
      { titulo: "Termina em -OLA?", simbolo: "-OLA", fala: "Bola, cola, sacola, escola!" },
      { titulo: "Termina em -ATA?", simbolo: "-ATA", fala: "Gata, mata, pata, lata!" },
      { titulo: "Termina em -ELO?", simbolo: "-ELO", fala: "Selo, cabelo, martelo!" },
    ],
    null,
    ["Pensar em sons iguais no final", "Rima dá ritmo às palavras"]),
];

// ───────── LP10 — Recitar Alfabeto (3 níveis) ─────────
const EF01LP10_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP10", "blue", 1, "Cantar o alfabeto — parte 1",
    "Vamos cantar de A a M.",
    [
      { titulo: "A B C D", simbolo: "ABCD", fala: "Á, Bê, Cê, Dê!" },
      { titulo: "E F G", simbolo: "EFG", fala: "É, Éfe, Gê!" },
      { titulo: "H I J", simbolo: "HIJ", fala: "Agá, Í, Jota!" },
      { titulo: "K L M", simbolo: "KLM", fala: "Cá, Éle, Éme!" },
    ],
    null,
    ["A B C D E F G H I J K L M", "Cantar ajuda a lembrar a ordem"]),
  buildLP("EF01LP10", "blue", 2, "Cantar o alfabeto — parte 2",
    "Agora de N a Z.",
    [
      { titulo: "N O P", simbolo: "NOP", fala: "Éne, Ó, Pê!" },
      { titulo: "Q R S", simbolo: "QRS", fala: "Quê, Érre, Ésse!" },
      { titulo: "T U V", simbolo: "TUV", fala: "Tê, Ú, Vê!" },
      { titulo: "W X Y Z", simbolo: "WXYZ", fala: "Dáblio, Xis, Ípsilon, Zê!" },
    ],
    null,
    ["N O P Q R S T U V W X Y Z", "Pronto, sabemos o alfabeto inteiro!"]),
  buildLP("EF01LP10", "blue", 3, "Ordem alfabética",
    "Saber a ordem ajuda a achar palavras no dicionário.",
    [
      { titulo: "Antes do B vem...", simbolo: "A", fala: "O A!" },
      { titulo: "Depois do M vem...", simbolo: "N", fala: "O N!" },
      { titulo: "Depois do Y vem...", simbolo: "Z", fala: "O Z, a última letra!" },
    ],
    null,
    ["Cada letra tem um lugar", "Saber a ordem ajuda muito"]),
];

// ───────── LP11 — Imprensa x Cursiva, Maiúscula x Minúscula (3 níveis) ─────────
const EF01LP11_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP11", "violet", 1, "Maiúscula e Minúscula",
    "Toda letra tem dois tamanhos.",
    [
      { titulo: "A grande", simbolo: "A", fala: "A maiúscula. A grandona!" },
      { titulo: "a pequenina", simbolo: "a", fala: "a minúscula. A pequenina!" },
      { titulo: "B / b", simbolo: "B b", fala: "Bê grande, bê pequenino." },
      { titulo: "M / m", simbolo: "M m", fala: "Éme grande, éme pequenino." },
    ],
    null,
    ["Maiúscula é a grande", "Minúscula é a pequena", "Mesma letra, dois tamanhos"]),
  buildLP("EF01LP11", "violet", 2, "Quando usar maiúscula?",
    "Tem hora certa pra usar a letra grande.",
    [
      { titulo: "Começo da frase", simbolo: "O", fala: "Toda frase começa com letra grande." },
      { titulo: "Nome de pessoa", simbolo: "Ana", fala: "Ana começa com A maiúsculo." },
      { titulo: "Nome de cidade", simbolo: "Rio", fala: "Rio começa com R maiúsculo." },
    ],
    null,
    ["Frase começa com maiúscula", "Nomes próprios também"]),
  buildLP("EF01LP11", "violet", 3, "Imprensa x Cursiva",
    "São dois jeitos de escrever.",
    [
      { titulo: "Imprensa (de forma)", simbolo: "BOLA", fala: "Letras separadinhas, igual livro." },
      { titulo: "Cursiva (de mão)", simbolo: "Bola", fala: "Letras emendadas, igual caderno." },
    ],
    null,
    ["Imprensa = separada", "Cursiva = emendada", "As duas são a mesma palavra"]),
];

// ───────── LP12 — Separação por espaços (3 níveis) ─────────
const EF01LP12_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP12", "amber", 1, "Cada palavra é um pedacinho",
    "Quando escrevemos, deixamos um espaço entre uma palavra e outra.",
    [
      { titulo: "Sem espaço", simbolo: "EUGOSTODEBOLA", fala: "Assim ninguém entende!" },
      { titulo: "Com espaço", simbolo: "EU GOSTO DE BOLA", fala: "Agora dá pra ler bonitinho." },
    ],
    null,
    ["Espaço separa palavras", "Sem espaço, vira tudo junto"]),
  buildLP("EF01LP12", "amber", 2, "Contar as palavras",
    "Quantas palavras tem a frase?",
    [
      { titulo: "O gato é fofo", simbolo: "4", fala: "O, gato, é, fofo: quatro palavras." },
      { titulo: "A pipa voa alto", simbolo: "4", fala: "A, pipa, voa, alto: quatro palavras." },
    ],
    null,
    ["Contar palavras é contar os espaços + 1"]),
  buildLP("EF01LP12", "amber", 3, "Escrever separando",
    "Treinando na prática.",
    [
      { titulo: "MAMÃE AMA O BEBÊ", simbolo: "4 palavras", fala: "MAMÃE / AMA / O / BEBÊ." },
      { titulo: "PIP GOSTA DE PIPA", simbolo: "4 palavras", fala: "PIP / GOSTA / DE / PIPA." },
    ],
    null,
    ["Sempre deixar espaço", "Cada palavra tem sentido próprio"]),
];

// ───────── LP13 — Comparar sílabas (3 níveis) ─────────
const EF01LP13_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP13", "pink", 1, "Sílabas iguais no começo",
    "Tem palavra que começa igual.",
    [
      { titulo: "CASA e CARRO", simbolo: "CA-", fala: "Os dois começam com CA." },
      { titulo: "BOLA e BOLO", simbolo: "BO-", fala: "Os dois começam com BO." },
      { titulo: "PIPA e PIPOCA", simbolo: "PI-", fala: "Os dois começam com PI." },
    ],
    null,
    ["Sílaba inicial igual", "Diferenciar pelo final"]),
  buildLP("EF01LP13", "pink", 2, "Sílabas iguais no final",
    "Tem palavra que termina igual.",
    [
      { titulo: "GATO e PATO", simbolo: "-TO", fala: "Os dois terminam com TO." },
      { titulo: "MALA e BALA", simbolo: "-LA", fala: "Os dois terminam com LA." },
    ],
    null,
    ["Final igual = rima", "Procurar a sílaba final"]),
  buildLP("EF01LP13", "pink", 3, "Sílaba do meio",
    "Olha o pedacinho do meio!",
    [
      { titulo: "BANANA", simbolo: "-NA-", fala: "Ba-NA-na: NA está no meio." },
      { titulo: "CAVALO", simbolo: "-VA-", fala: "Ca-VA-lo: VA está no meio." },
    ],
    null,
    ["Sílaba do meio também conta"]),
];

// ───────── LP04 — Letras x outros sinais (3 níveis) ─────────
const EF01LP04_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP04", "blue", 1, "Letra é uma coisa, número é outra",
    "Vamos diferenciar letras de números.",
    [
      { titulo: "Letras", simbolo: "A B C", fala: "Letras viram palavras." },
      { titulo: "Números", simbolo: "1 2 3", fala: "Números viram quantidades." },
    ],
    null,
    ["Letra = palavra", "Número = quantidade"]),
  buildLP("EF01LP04", "blue", 2, "Sinais que não são letras",
    "Tem sinais que aparecem na escrita mas não são letras.",
    [
      { titulo: "Ponto final", simbolo: ".", fala: "O ponto fecha a frase." },
      { titulo: "Vírgula", simbolo: ",", fala: "A vírgula é uma pausinha." },
      { titulo: "Interrogação", simbolo: "?", fala: "Mostra pergunta." },
      { titulo: "Exclamação", simbolo: "!", fala: "Mostra surpresa ou força." },
    ],
    null,
    [". , ? !", "Não são letras, são sinais"]),
  buildLP("EF01LP04", "blue", 3, "Pra que serve cada um?",
    "Cada coisa tem um lugar.",
    [
      { titulo: "Letras", simbolo: "ABC", fala: "Formam palavras: GATO." },
      { titulo: "Números", simbolo: "123", fala: "Mostram quanto: 3 gatos." },
      { titulo: "Sinais", simbolo: "!?.", fala: "Ajudam a ler a frase: O gato é fofo!" },
    ],
    null,
    ["Letras, números e sinais convivem no texto"]),
];

// ───────── LP07/LP08 — Fonemas e letras (3 níveis) ─────────
const EF01LP07_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP07", "violet", 1, "Som de cada letra",
    "Cada letra tem um som principal.",
    [
      { titulo: "B faz BÊ", simbolo: "B", fala: "B: lábios juntos, depois soltam." },
      { titulo: "M faz MMM", simbolo: "M", fala: "M: lábios juntos, ar pelo nariz." },
      { titulo: "S faz SSS", simbolo: "S", fala: "S: língua nos dentes, ar saindo." },
      { titulo: "R faz RRR", simbolo: "R", fala: "R: vibra na garganta." },
    ],
    null,
    ["Cada letra tem som próprio", "Escutar o som ajuda a escrever"]),
  buildLP("EF01LP07", "violet", 2, "Som da letra C",
    "A letra C tem dois sons!",
    [
      { titulo: "C com A/O/U: K", simbolo: "CA CO CU", fala: "CAsa, COco, CUca: som de K." },
      { titulo: "C com E/I: S", simbolo: "CE CI", fala: "CEbola, CIrco: som de S." },
    ],
    null,
    ["C antes de A, O, U: som de K", "C antes de E, I: som de S"]),
  buildLP("EF01LP07", "violet", 3, "Som da letra G",
    "A letra G também muda!",
    [
      { titulo: "G com A/O/U", simbolo: "GA GO GU", fala: "GAto, GOla, GUloso: som forte." },
      { titulo: "G com E/I", simbolo: "GE GI", fala: "GElo, GIrafa: som como J." },
    ],
    null,
    ["G antes de A, O, U: som forte", "G antes de E, I: som de J"]),
];

const EF01LP08_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP08", "amber", 1, "Som vira letra",
    "Falar primeiro, escrever depois.",
    [
      { titulo: "Falo BA, escrevo BA", simbolo: "BA", fala: "Som BA: letras B + A." },
      { titulo: "Falo MA, escrevo MA", simbolo: "MA", fala: "Som MA: letras M + A." },
    ],
    null,
    ["Cada som = letras"]),
  buildLP("EF01LP08", "amber", 2, "Sílabas mais longas",
    "Quando o som é maior, juntamos mais letras.",
    [
      { titulo: "BRA", simbolo: "BRA", fala: "B + R + A. Como em BRAço." },
      { titulo: "TRI", simbolo: "TRI", fala: "T + R + I. Como em TRIste." },
      { titulo: "FLO", simbolo: "FLO", fala: "F + L + O. Como em FLOr." },
    ],
    null,
    ["Encontros de consoantes existem", "Som ainda é uma sílaba"]),
  buildLP("EF01LP08", "amber", 3, "Escrever o que ouço",
    "Ouvir bem ajuda a escrever certo.",
    [
      { titulo: "Ouço BO-LA", simbolo: "BOLA", fala: "Duas sílabas: BO + LA." },
      { titulo: "Ouço PI-PA", simbolo: "PIPA", fala: "Duas sílabas: PI + PA." },
      { titulo: "Ouço SA-PA-TO", simbolo: "SAPATO", fala: "Três sílabas: SA + PA + TO." },
    ],
    null,
    ["Bater palma ajuda a contar sílabas"]),
];

// ───────── LP51 — Encontro Vocálico (3 níveis) ─────────
const EF01LP51_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP51", "pink", 1, "Duas vogais juntas",
    "Quando duas vogais aparecem grudadinhas, é encontro vocálico.",
    [
      { titulo: "AI", simbolo: "AI", fala: "Como em PAI, MAIS." },
      { titulo: "EI", simbolo: "EI", fala: "Como em REI, PEITO." },
      { titulo: "OI", simbolo: "OI", fala: "Como em BOI, FOI." },
    ],
    [{ emoji: "👨", texto: "PAI" }, { emoji: "👑", texto: "REI" }, { emoji: "🐮", texto: "BOI" }],
    ["Duas vogais juntinhas", "AI, EI, OI"]),
  buildLP("EF01LP51", "pink", 2, "Mais encontros",
    "Tem vários encontros vocálicos.",
    [
      { titulo: "AU", simbolo: "AU", fala: "Como em PAU, MAU." },
      { titulo: "EU", simbolo: "EU", fala: "Como em EU, CÉU." },
      { titulo: "IU", simbolo: "IU", fala: "Como em VIU, RIU." },
      { titulo: "UI", simbolo: "UI", fala: "Como em FUI." },
    ],
    null,
    ["AU, EU, IU, UI", "Duas vogais, um som só"]),
  buildLP("EF01LP51", "pink", 3, "Achar nas palavras",
    "Quais palavras têm encontro vocálico?",
    [
      { titulo: "CAIXA", emoji: "📦", fala: "CA-I-XA: tem AI!" },
      { titulo: "MOEDA", emoji: "🪙", fala: "MO-E-DA: tem OE!" },
      { titulo: "SAUDADE", emoji: "💭", fala: "SAU-DA-DE: tem AU!" },
    ],
    null,
    ["Encontro vocálico aparece em muitas palavras"]),
];

// ───────── LP52 — Substantivos (4 níveis) ─────────
const EF01LP52_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP52", "blue", 1, "Substantivo é o nome das coisas",
    "Tudo que a gente vê tem um nome. Esse nome é o substantivo.",
    [
      { titulo: "Coisa", emoji: "⚽", fala: "BOLA é o nome de uma coisa." },
      { titulo: "Pessoa", emoji: "👧", fala: "MENINA é o nome de uma pessoa." },
      { titulo: "Animal", emoji: "🐶", fala: "CACHORRO é o nome de um animal." },
      { titulo: "Lugar", emoji: "🏫", fala: "ESCOLA é o nome de um lugar." },
    ],
    null,
    ["Substantivo = nome", "De coisa, pessoa, animal ou lugar"]),
  buildLP("EF01LP52", "blue", 2, "Substantivos de pessoas",
    "Quem você conhece?",
    [
      { titulo: "MÃE", emoji: "👩", fala: "Mãe!" },
      { titulo: "PAI", emoji: "👨", fala: "Pai!" },
      { titulo: "AMIGO", emoji: "🧑", fala: "Amigo!" },
      { titulo: "PROFESSORA", emoji: "👩‍🏫", fala: "Professora!" },
    ],
    null,
    ["Todos são nomes de pessoas"]),
  buildLP("EF01LP52", "blue", 3, "Substantivos de animais",
    "Quantos animais você conhece?",
    [
      { titulo: "GATO", emoji: "🐱", fala: "Miau!" },
      { titulo: "CACHORRO", emoji: "🐶", fala: "Au au!" },
      { titulo: "PASSARINHO", emoji: "🐦", fala: "Piu piu!" },
      { titulo: "PEIXE", emoji: "🐟", fala: "Glub glub!" },
    ],
    null,
    ["Cada animal tem um nome", "Todos são substantivos"]),
  buildLP("EF01LP52", "blue", 4, "Substantivos de lugares e coisas",
    "Lugares e objetos também têm nome.",
    [
      { titulo: "CASA", emoji: "🏠", fala: "Lugar onde moramos." },
      { titulo: "ESCOLA", emoji: "🏫", fala: "Lugar de aprender." },
      { titulo: "MESA", emoji: "🪑", fala: "Coisa que usamos pra comer." },
      { titulo: "LIVRO", emoji: "📚", fala: "Coisa que lemos." },
    ],
    null,
    ["Lugares têm nome", "Coisas têm nome", "Tudo isso é substantivo"]),
];

// ───────── LP53 — Adjetivos (3 níveis) ─────────
const EF01LP53_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP53", "amber", 1, "Adjetivo diz como é",
    "Adjetivo é uma palavra que descreve como a coisa é.",
    [
      { titulo: "Gato fofo", emoji: "🐱", fala: "Fofo diz COMO o gato é." },
      { titulo: "Bola grande", emoji: "⚽", fala: "Grande diz COMO a bola é." },
      { titulo: "Sol quente", emoji: "☀️", fala: "Quente diz COMO o sol é." },
    ],
    null,
    ["Adjetivo descreve", "Fofo, grande, quente"]),
  buildLP("EF01LP53", "amber", 2, "Adjetivos opostos",
    "Pra cada adjetivo, tem o contrário.",
    [
      { titulo: "Grande × Pequeno", simbolo: "🐘 🐭", fala: "Elefante grande, ratinho pequeno." },
      { titulo: "Alto × Baixo", simbolo: "🦒 🐢", fala: "Girafa alta, tartaruga baixa." },
      { titulo: "Quente × Frio", simbolo: "☀️ ❄️", fala: "Sol quente, neve fria." },
    ],
    null,
    ["Todo adjetivo tem oposto", "Grande/Pequeno, Alto/Baixo, Quente/Frio"]),
  buildLP("EF01LP53", "amber", 3, "Descrever coisas",
    "Use adjetivos pra descrever.",
    [
      { titulo: "Pipa colorida", emoji: "🪁", fala: "Colorida diz como é a pipa." },
      { titulo: "Cachorro peludo", emoji: "🐕", fala: "Peludo diz como é o cachorro." },
      { titulo: "Bolo gostoso", emoji: "🎂", fala: "Gostoso diz como é o bolo." },
    ],
    null,
    ["Adjetivo deixa a frase mais rica"]),
];

// ───────── LP54 — Verbos (3 níveis) ─────────
const EF01LP54_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP54", "violet", 1, "Verbo é ação",
    "Verbo é uma palavra que mostra o que está acontecendo.",
    [
      { titulo: "CORRER", emoji: "🏃", fala: "Correr é uma ação." },
      { titulo: "PULAR", emoji: "🤸", fala: "Pular é uma ação." },
      { titulo: "COMER", emoji: "🍎", fala: "Comer é uma ação." },
      { titulo: "DORMIR", emoji: "😴", fala: "Dormir é uma ação." },
    ],
    null,
    ["Verbo = ação", "Correr, pular, comer, dormir"]),
  buildLP("EF01LP54", "violet", 2, "Verbos do dia a dia",
    "Tudo que a gente faz é verbo.",
    [
      { titulo: "ESTUDAR", emoji: "📚", fala: "Estudar." },
      { titulo: "BRINCAR", emoji: "🧸", fala: "Brincar." },
      { titulo: "CANTAR", emoji: "🎤", fala: "Cantar." },
      { titulo: "DANÇAR", emoji: "💃", fala: "Dançar." },
    ],
    null,
    ["Pensar em ações do dia a dia"]),
  buildLP("EF01LP54", "violet", 3, "Achar o verbo na frase",
    "Em toda frase tem um verbo.",
    [
      { titulo: "O gato PULA", simbolo: "PULA", fala: "Pula é a ação." },
      { titulo: "A pipa VOA", simbolo: "VOA", fala: "Voa é a ação." },
      { titulo: "Eu COMO bolo", simbolo: "COMO", fala: "Como é a ação." },
    ],
    null,
    ["Pergunte: o que está acontecendo?", "A resposta é o verbo"]),
];

// ───────── LP55 — Pontuação (3 níveis) ─────────
const EF01LP55_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP55", "pink", 1, "Ponto final",
    "O ponto final fecha a frase.",
    [
      { titulo: "Ponto", simbolo: ".", fala: "Esse pontinho fecha a frase." },
      { titulo: "Frase com ponto", simbolo: "Eu gosto de pipa.", fala: "Frase terminou: ponto final." },
    ],
    null,
    ["Toda frase termina com .", "Ponto final = fim da ideia"]),
  buildLP("EF01LP55", "pink", 2, "Interrogação",
    "Quando perguntamos, usamos ?",
    [
      { titulo: "?", simbolo: "?", fala: "Sinal de pergunta." },
      { titulo: "Você gosta de pipa?", simbolo: "?", fala: "Pergunta termina com ?" },
    ],
    null,
    ["Pergunta termina com ?", "Voz sobe no final"]),
  buildLP("EF01LP55", "pink", 3, "Exclamação",
    "Pra mostrar surpresa, usamos !",
    [
      { titulo: "!", simbolo: "!", fala: "Sinal de exclamação." },
      { titulo: "Que linda!", simbolo: "!", fala: "Termina com !" },
      { titulo: "Olha o gato!", simbolo: "!", fala: "Termina com !" },
    ],
    null,
    ["Exclamação mostra emoção", "Termina com !"]),
];

// ───────── LP56 — Sinônimos (3 níveis) ─────────
const EF01LP56_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP56", "blue", 1, "Palavras parecidas",
    "Sinônimos são palavras diferentes que querem dizer a mesma coisa.",
    [
      { titulo: "BONITO = LINDO", simbolo: "=", fala: "Os dois querem dizer a mesma coisa." },
      { titulo: "GRANDE = ENORME", simbolo: "=", fala: "Mesmo significado." },
      { titulo: "FELIZ = ALEGRE", simbolo: "=", fala: "Mesma ideia." },
    ],
    null,
    ["Sinônimo = mesmo sentido", "Palavras diferentes, ideia igual"]),
  buildLP("EF01LP56", "blue", 2, "Mais sinônimos",
    "Vamos aprender mais.",
    [
      { titulo: "RÁPIDO = LIGEIRO", simbolo: "=", fala: "Os dois falam de velocidade." },
      { titulo: "CASA = MORADIA", simbolo: "=", fala: "Lugar onde a gente mora." },
      { titulo: "MEDO = SUSTO", simbolo: "=", fala: "Sentimento parecido." },
    ],
    null,
    ["Quanto mais palavras, melhor a gente fala"]),
  buildLP("EF01LP56", "blue", 3, "Trocar a palavra na frase",
    "Posso trocar uma palavra pelo sinônimo.",
    [
      { titulo: "O cachorro é BONITO", simbolo: "→ LINDO", fala: "Bonito ou lindo, dá no mesmo." },
      { titulo: "Estou FELIZ", simbolo: "→ ALEGRE", fala: "Feliz ou alegre, é igual." },
    ],
    null,
    ["Sinônimos deixam o texto mais rico"]),
];

// ───────── LP57 — Antônimos (3 níveis) ─────────
const EF01LP57_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP57", "amber", 1, "Palavras opostas",
    "Antônimos são palavras com sentidos contrários.",
    [
      { titulo: "GRANDE × PEQUENO", simbolo: "↔", fala: "Um é o contrário do outro." },
      { titulo: "QUENTE × FRIO", simbolo: "↔", fala: "Opostos." },
      { titulo: "ALTO × BAIXO", simbolo: "↔", fala: "Opostos." },
    ],
    null,
    ["Antônimo = oposto", "Sentido contrário"]),
  buildLP("EF01LP57", "amber", 2, "Mais opostos",
    "Vamos aprender mais.",
    [
      { titulo: "CLARO × ESCURO", simbolo: "↔", fala: "Dia e noite." },
      { titulo: "FELIZ × TRISTE", simbolo: "↔", fala: "Sentimentos opostos." },
      { titulo: "ABRIR × FECHAR", simbolo: "↔", fala: "Ações opostas." },
    ],
    null,
    ["Tudo tem um oposto"]),
  buildLP("EF01LP57", "amber", 3, "Usando opostos na frase",
    "Antônimos ajudam a comparar.",
    [
      { titulo: "O elefante é GRANDE, o rato é PEQUENO", emoji: "🐘", fala: "Comparação com opostos." },
      { titulo: "O sol é QUENTE, o gelo é FRIO", emoji: "☀️", fala: "Comparação com opostos." },
    ],
    null,
    ["Antônimo ajuda a comparar"]),
];

// ───────── LP58 — Acentuação (2 níveis) ─────────
const EF01LP58_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP58", "violet", 1, "Os acentinhos das letras",
    "Algumas letras ganham um chapeuzinho.",
    [
      { titulo: "Acento agudo", simbolo: "´", fala: "Vai pra cima: Á, É, Í, Ó, Ú." },
      { titulo: "Acento circunflexo", simbolo: "^", fala: "Chapeuzinho: Â, Ê, Ô." },
      { titulo: "Til", simbolo: "~", fala: "Som de nariz: Ã, Õ." },
    ],
    [{ emoji: "🍎", texto: "MAÇÃ tem til" }, { emoji: "🥣", texto: "CAFÉ tem agudo" }, { emoji: "👵", texto: "VOVÔ tem chapeuzinho" }],
    ["Acento muda o som", "Agudo, circunflexo, til"]),
  buildLP("EF01LP58", "violet", 2, "Por que usar acento?",
    "Acento ajuda a falar a palavra certa.",
    [
      { titulo: "PE × PÉ", simbolo: "PÉ", fala: "Sem acento não dá pra ler. Com acento: pé!" },
      { titulo: "MAE × MÃE", simbolo: "MÃE", fala: "O til muda o som: mãe!" },
    ],
    null,
    ["Acento deixa o som correto"]),
];

// ───────── LP59 — Plural (3 níveis) ─────────
const EF01LP59_VARIANTS: KidsLesson[] = [
  buildLP("EF01LP59", "pink", 1, "Um e muitos",
    "Quando é mais de um, falamos no plural.",
    [
      { titulo: "1 GATO → 2 GATOS", emoji: "🐱", fala: "Mais de um: ganha S no final." },
      { titulo: "1 BOLA → 3 BOLAS", emoji: "⚽", fala: "Mais de uma: ganha S no final." },
      { titulo: "1 LIVRO → MUITOS LIVROS", emoji: "📚", fala: "Ganha S." },
    ],
    null,
    ["Mais de um = plural", "Geralmente a gente põe S"]),
  buildLP("EF01LP59", "pink", 2, "Plural com ES",
    "Algumas palavras terminam diferente.",
    [
      { titulo: "FLOR → FLORES", emoji: "🌸", fala: "Termina em R: ganha ES." },
      { titulo: "ANIMAL → ANIMAIS", emoji: "🐾", fala: "Termina em L: troca por IS." },
    ],
    null,
    ["Termina em R: + ES", "Termina em L: troca por IS"]),
  buildLP("EF01LP59", "pink", 3, "Plural com ÕES",
    "Palavras terminadas em ÃO mudam.",
    [
      { titulo: "MÃO → MÃOS", emoji: "✋", fala: "Algumas só ganham S." },
      { titulo: "PÃO → PÃES", emoji: "🍞", fala: "Outras viram ÃES." },
      { titulo: "BOTÃO → BOTÕES", emoji: "🔘", fala: "Outras viram ÕES." },
    ],
    null,
    ["Palavras em ÃO mudam de jeito diferente"]),
];

// ───────── Textos / Gêneros (LP01, LP03, LP05, LP15-26) ─────────
// Aulas mais simples (2 níveis) para os códigos de gênero textual.
function pairText(codigo: string, cor: KidsLesson["cor"], titulo: string, intro: string,
  blocosN1: { titulo: string; simbolo?: string; emoji?: string; fala: string }[],
  blocosN2: { titulo: string; simbolo?: string; emoji?: string; fala: string }[],
  resumo: string[]): KidsLesson[] {
  return [
    buildLP(codigo, cor, 1, `${titulo} — Nível 1`, intro, blocosN1, null, resumo),
    buildLP(codigo, cor, 2, `${titulo} — Nível 2`, intro, blocosN2, null, resumo),
  ];
}

const EF01LP01_VARIANTS = pairText("EF01LP01", "blue", "Tipos de texto",
  "Tem vários tipos de texto, cada um com seu jeito.",
  [
    { titulo: "História", emoji: "📖", fala: "Conta uma aventura." },
    { titulo: "Receita", emoji: "🍰", fala: "Ensina a fazer comida." },
    { titulo: "Bilhete", emoji: "✉️", fala: "Recado curto." },
  ],
  [
    { titulo: "Notícia", emoji: "📰", fala: "Conta o que aconteceu." },
    { titulo: "Poesia", emoji: "🎶", fala: "Tem rima e ritmo." },
    { titulo: "Lista", emoji: "📝", fala: "Lista de coisas." },
  ],
  ["Cada texto tem uma função", "História, receita, bilhete, notícia, poesia, lista"]);

const EF01LP03_VARIANTS = pairText("EF01LP03", "amber", "Escrita convencional",
  "Vamos comparar o que escrevemos com a forma certa.",
  [
    { titulo: "Letra de forma", simbolo: "BOLA", fala: "Igual no livro." },
    { titulo: "Letra de mão", simbolo: "Bola", fala: "Igual no caderno." },
  ],
  [
    { titulo: "Compare e melhore", simbolo: "→", fala: "Olhe a palavra certa e tente igual." },
  ],
  ["Comparar ajuda a melhorar", "Errar faz parte"]);

const EF01LP05_VARIANTS = pairText("EF01LP05", "violet", "Letras representam sons",
  "A escrita é o desenho dos sons que falamos.",
  [
    { titulo: "Falo CASA", simbolo: "CASA", fala: "Escrevo C-A-S-A." },
    { titulo: "Falo BOLO", simbolo: "BOLO", fala: "Escrevo B-O-L-O." },
  ],
  [
    { titulo: "Cada som tem letra", simbolo: "🔤", fala: "Letras desenham o que falamos." },
  ],
  ["Falar e escrever andam juntos"]);

const EF01LP15_VARIANTS = pairText("EF01LP15", "pink", "Palavras com significados",
  "Palavras podem ser parecidas ou diferentes.",
  [
    { titulo: "Parecidas", simbolo: "FELIZ ≈ ALEGRE", fala: "Significado parecido." },
    { titulo: "Diferentes", simbolo: "FELIZ ≠ TRISTE", fala: "Significado diferente." },
  ],
  [
    { titulo: "Agrupar palavras", emoji: "🧩", fala: "Juntar as que combinam." },
  ],
  ["Sinônimos juntam", "Antônimos separam"]);

const EF01LP16_VARIANTS = pairText("EF01LP16", "blue", "Ler quadrinhas e parlendas",
  "Quadrinhas e parlendas são textos curtinhos e divertidos.",
  [
    { titulo: "Parlenda", simbolo: "🎵", fala: "Como: Hoje é domingo, pé de cachimbo..." },
    { titulo: "Quadrinha", simbolo: "📜", fala: "Quatro versinhos que rimam." },
  ],
  [
    { titulo: "Ler junto", emoji: "👫", fala: "Ler em voz alta com o amigo é mais divertido." },
  ],
  ["Texto curto, fácil de cantar"]);

const EF01LP17_VARIANTS = pairText("EF01LP17", "amber", "Fazer listas",
  "Listas ajudam a lembrar das coisas.",
  [
    { titulo: "Lista de brinquedos", emoji: "🧸", fala: "Boneca, carrinho, bola..." },
    { titulo: "Lista de frutas", emoji: "🍎", fala: "Maçã, banana, uva..." },
  ],
  [
    { titulo: "Agenda do dia", emoji: "📅", fala: "Anotar o que vou fazer." },
  ],
  ["Lista = um item embaixo do outro"]);

const EF01LP18_VARIANTS = pairText("EF01LP18", "violet", "Registrar cantigas",
  "Vamos escrever cantigas que conhecemos.",
  [
    { titulo: "Atirei o pau no gato", emoji: "🎵", fala: "Cantar e escrever junto." },
  ],
  [
    { titulo: "Outras cantigas", emoji: "🎶", fala: "Ciranda cirandinha..." },
  ],
  ["Escrever ajuda a lembrar"]);

const EF01LP19_VARIANTS = pairText("EF01LP19", "pink", "Recitar com ritmo",
  "Recitar é falar com entonação.",
  [
    { titulo: "Voz alta", emoji: "📢", fala: "Falar pra todos ouvirem." },
    { titulo: "Ritmo", emoji: "🥁", fala: "Falar no compasso." },
  ],
  [
    { titulo: "Trava-língua", emoji: "👅", fala: "Falar rápido sem errar." },
  ],
  ["Voz, ritmo, alegria"]);

const EF01LP20_VARIANTS = pairText("EF01LP20", "blue", "Textos do dia a dia",
  "Aviso, convite, receita... cada um tem um jeito.",
  [
    { titulo: "Aviso", emoji: "⚠️", fala: "Curto e direto." },
    { titulo: "Convite", emoji: "🎉", fala: "Tem data, hora e lugar." },
  ],
  [
    { titulo: "Receita", emoji: "🍰", fala: "Ingredientes + modo de fazer." },
  ],
  ["Cada texto tem partes"]);

const EF01LP21_VARIANTS = pairText("EF01LP21", "amber", "Regras",
  "Regras ajudam a viver em grupo.",
  [
    { titulo: "Da sala", emoji: "🏫", fala: "Não correr na sala." },
    { titulo: "De casa", emoji: "🏠", fala: "Guardar os brinquedos." },
  ],
  [
    { titulo: "Do parque", emoji: "🛝", fala: "Esperar a vez no escorregador." },
  ],
  ["Regras protegem todos"]);

const EF01LP22_VARIANTS = pairText("EF01LP22", "violet", "Diagramas",
  "Diagrama é um desenho com informação.",
  [
    { titulo: "Setas", emoji: "➡️", fala: "Mostram a ordem." },
    { titulo: "Imagens", emoji: "🖼️", fala: "Mostram o que é." },
  ],
  [
    { titulo: "Ler com calma", emoji: "🧐", fala: "Olhar cada parte." },
  ],
  ["Diagrama explica com desenho"]);

const EF01LP23_VARIANTS = pairText("EF01LP23", "pink", "Entrevista",
  "Entrevista é fazer perguntas pra alguém.",
  [
    { titulo: "Pergunta", emoji: "❓", fala: "Quem? O quê? Quando?" },
    { titulo: "Resposta", emoji: "💬", fala: "A pessoa responde." },
  ],
  [
    { titulo: "Anotar", emoji: "📝", fala: "Escrever o que a pessoa disse." },
  ],
  ["Entrevistar é ouvir com atenção"]);

const EF01LP24_VARIANTS = pairText("EF01LP24", "blue", "Enunciados",
  "Enunciado é o comando da tarefa.",
  [
    { titulo: "Ler com calma", emoji: "📖", fala: "Antes de fazer, ler tudo." },
    { titulo: "Entender o pedido", emoji: "🧠", fala: "O que está pedindo?" },
  ],
  [
    { titulo: "Fazer a tarefa", emoji: "✏️", fala: "Agora sim, fazer." },
  ],
  ["Ler o enunciado é o primeiro passo"]);

const EF01LP25_VARIANTS = pairText("EF01LP25", "amber", "Recontar história",
  "Recontar é contar de novo com suas palavras.",
  [
    { titulo: "Começo", emoji: "1️⃣", fala: "Onde tudo começou." },
    { titulo: "Meio", emoji: "2️⃣", fala: "O que aconteceu." },
    { titulo: "Fim", emoji: "3️⃣", fala: "Como terminou." },
  ],
  [
    { titulo: "Seu jeito", emoji: "💬", fala: "Conte do seu jeitinho." },
  ],
  ["Toda história tem começo, meio e fim"]);

const EF01LP26_VARIANTS = pairText("EF01LP26", "violet", "Partes da história",
  "Toda história tem personagens, lugar e tempo.",
  [
    { titulo: "Personagens", emoji: "👧", fala: "Quem está na história." },
    { titulo: "Lugar", emoji: "🌳", fala: "Onde acontece." },
    { titulo: "Tempo", emoji: "🕒", fala: "Quando acontece." },
  ],
  [
    { titulo: "Enredo", emoji: "🧩", fala: "O que acontece do começo ao fim." },
  ],
  ["Personagens, lugar, tempo, enredo"]);

// ───────── Mapa final ─────────
export const KIDS_LESSON_VARIANTS_LP_1ANO: Record<string, KidsLesson[]> = {
  EF01LP01: EF01LP01_VARIANTS,
  EF01LP02: EF01LP02_VARIANTS,
  EF01LP03: EF01LP03_VARIANTS,
  EF01LP04: EF01LP04_VARIANTS,
  EF01LP05: EF01LP05_VARIANTS,
  EF01LP06: EF01LP06_VARIANTS,
  EF01LP07: EF01LP07_VARIANTS,
  EF01LP08: EF01LP08_VARIANTS,
  EF01LP09: EF01LP09_VARIANTS,
  EF01LP10: EF01LP10_VARIANTS,
  EF01LP11: EF01LP11_VARIANTS,
  EF01LP12: EF01LP12_VARIANTS,
  EF01LP13: EF01LP13_VARIANTS,
  EF01LP14: EF01LP14_VARIANTS,
  EF01LP15: EF01LP15_VARIANTS,
  EF01LP16: EF01LP16_VARIANTS,
  EF01LP17: EF01LP17_VARIANTS,
  EF01LP18: EF01LP18_VARIANTS,
  EF01LP19: EF01LP19_VARIANTS,
  EF01LP20: EF01LP20_VARIANTS,
  EF01LP21: EF01LP21_VARIANTS,
  EF01LP22: EF01LP22_VARIANTS,
  EF01LP23: EF01LP23_VARIANTS,
  EF01LP24: EF01LP24_VARIANTS,
  EF01LP25: EF01LP25_VARIANTS,
  EF01LP26: EF01LP26_VARIANTS,
  EF01LP50: EF01LP50_VARIANTS,
  EF01LP51: EF01LP51_VARIANTS,
  EF01LP52: EF01LP52_VARIANTS,
  EF01LP53: EF01LP53_VARIANTS,
  EF01LP54: EF01LP54_VARIANTS,
  EF01LP55: EF01LP55_VARIANTS,
  EF01LP56: EF01LP56_VARIANTS,
  EF01LP57: EF01LP57_VARIANTS,
  EF01LP58: EF01LP58_VARIANTS,
  EF01LP59: EF01LP59_VARIANTS,
};

export function getKidsLessonVariantsLP(codigo: string | undefined): KidsLesson[] {
  if (!codigo) return [];
  return KIDS_LESSON_VARIANTS_LP_1ANO[codigo] ?? [];
}
