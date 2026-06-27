// Banco de questões determinístico por (disciplina, faixa de série) — fallback
// usado quando a aula salva no banco tem desafio genérico/ausente.
//
// Não usa IA. Seleção determinística baseada no código BNCC (md5/hash simples).

type Q = {
  question: string;
  // Primeira posição é sempre a correta no banco — embaralhamos depois.
  options: [string, string, string, string];
  explanation: string;
  emoji: string;
};

type Faixa = "i" | "m" | "f" | "em";
type DiscKey =
  | "MA" | "LP" | "CI" | "GE" | "HI" | "ER" | "AR" | "EF" | "LI";

const BANK: Record<string, Q[]> = {
  "MA-i": [
    { question: "Quanto é 2 + 3?", options: ["5","4","6","23"], explanation: "2 mais 3 é 5.", emoji: "🔢" },
    { question: "Qual é o número que vem depois do 9?", options: ["10","8","11","19"], explanation: "Após 9 vem 10.", emoji: "🔢" },
    { question: "Quantos lados tem um triângulo?", options: ["3","4","5","6"], explanation: "Triângulo tem 3 lados.", emoji: "🔺" },
    { question: "Qual é o maior número?", options: ["8","5","3","2"], explanation: "8 é o maior.", emoji: "📏" },
    { question: "Quanto é 10 − 4?", options: ["6","5","7","14"], explanation: "10 − 4 = 6.", emoji: "➖" },
  ],
  "MA-m": [
    { question: "Quanto é 25 × 4?", options: ["100","90","105","85"], explanation: "25×4 = 100.", emoji: "✖️" },
    { question: "Qual é a metade de 50?", options: ["25","20","30","15"], explanation: "50 ÷ 2 = 25.", emoji: "➗" },
    { question: "Quantos minutos há em 2 horas?", options: ["120","60","100","180"], explanation: "2×60 = 120 min.", emoji: "⏰" },
    { question: "Em 348, qual é o algarismo das centenas?", options: ["3","4","8","0"], explanation: "Centena é o 3.", emoji: "🔢" },
    { question: "Qual fração é equivalente a 1/2?", options: ["2/4","1/3","3/5","2/3"], explanation: "2/4 = 1/2.", emoji: "➗" },
    { question: "Quanto é 144 ÷ 12?", options: ["12","11","14","24"], explanation: "12×12 = 144.", emoji: "➗" },
    { question: "Quantos lados tem um pentágono?", options: ["5","4","6","7"], explanation: "Penta = 5.", emoji: "⬟" },
  ],
  "MA-f": [
    { question: "Quanto é (−3) + (−5)?", options: ["−8","−2","2","8"], explanation: "Soma de dois negativos.", emoji: "➕" },
    { question: "Qual é a raiz quadrada de 81?", options: ["9","8","7","10"], explanation: "9×9 = 81.", emoji: "√" },
    { question: "Em y = 2x + 3, se x = 4, quanto vale y?", options: ["11","10","8","14"], explanation: "2·4+3 = 11.", emoji: "📈" },
    { question: "Quanto vale 2³?", options: ["8","6","9","16"], explanation: "2·2·2 = 8.", emoji: "🔢" },
    { question: "Soma dos ângulos internos de um triângulo?", options: ["180°","90°","360°","270°"], explanation: "Sempre 180°.", emoji: "📐" },
    { question: "Quanto é 15% de 200?", options: ["30","20","25","35"], explanation: "0,15·200 = 30.", emoji: "%" },
    { question: "Qual é o MMC de 4 e 6?", options: ["12","24","8","6"], explanation: "Menor múltiplo comum.", emoji: "🔢" },
  ],
  "MA-em": [
    { question: "Qual é a derivada de x²?", options: ["2x","x","x²/2","2"], explanation: "d/dx(x²) = 2x.", emoji: "📐" },
    { question: "Quanto vale log₁₀(1000)?", options: ["3","2","10","100"], explanation: "10³ = 1000.", emoji: "📊" },
  ],

  "LP-i": [
    { question: "Quantas letras tem a palavra CASA?", options: ["4","3","5","6"], explanation: "C-A-S-A = 4.", emoji: "📝" },
    { question: "Qual é a primeira letra do alfabeto?", options: ["A","B","E","Z"], explanation: "O alfabeto começa em A.", emoji: "🔤" },
    { question: "Qual palavra começa com a letra B?", options: ["BOLA","CASA","MESA","FOCA"], explanation: "BOLA começa com B.", emoji: "🔤" },
    { question: "Quantas sílabas tem BANANA?", options: ["3","2","4","5"], explanation: "BA-NA-NA = 3.", emoji: "🍌" },
    { question: "Qual palavra rima com PATO?", options: ["RATO","BOLA","CASA","SOL"], explanation: "PATO e RATO rimam.", emoji: "🎵" },
  ],
  "LP-m": [
    { question: "Qual destas é um substantivo?", options: ["cachorro","correr","azul","rapidamente"], explanation: "Substantivo nomeia seres.", emoji: "📚" },
    { question: "Qual é o plural de 'pão'?", options: ["pães","pãos","panes","pão"], explanation: "Plural irregular.", emoji: "✏️" },
    { question: "Qual frase está no passado?", options: ["Eu comi maçã.","Eu como maçã.","Eu vou comer.","Eu como sempre."], explanation: "'Comi' é passado.", emoji: "⏳" },
    { question: "Qual é sinônimo de ALEGRE?", options: ["feliz","triste","cansado","bravo"], explanation: "Alegre = feliz.", emoji: "😊" },
    { question: "Que tipo de palavra é 'rapidamente'?", options: ["advérbio","substantivo","adjetivo","verbo"], explanation: "Termina em -mente.", emoji: "📝" },
    { question: "Na frase 'O cachorro late', 'O' é…", options: ["artigo","substantivo","verbo","adjetivo"], explanation: "Artigo definido.", emoji: "📝" },
  ],
  "LP-f": [
    { question: "Qual é o sujeito de 'Os alunos estudaram'?", options: ["Os alunos","estudaram","estudo","alunos estudaram"], explanation: "Quem estudou?", emoji: "📖" },
    { question: "Que figura há em 'seus olhos são duas estrelas'?", options: ["metáfora","metonímia","ironia","hipérbole"], explanation: "Comparação implícita.", emoji: "✨" },
    { question: "Qual é a função do ponto de interrogação?", options: ["indicar pergunta","encerrar frase","listar","exclamar"], explanation: "? marca pergunta.", emoji: "❓" },
    { question: "Qual conjunção é adversativa?", options: ["mas","e","ou","então"], explanation: "Indica oposição.", emoji: "🔗" },
    { question: "Em 'O livro foi lido por Ana', a voz é…", options: ["passiva","ativa","reflexiva","direta"], explanation: "Sujeito sofre ação.", emoji: "📚" },
    { question: "Qual é um pronome pessoal?", options: ["ela","casa","correr","azul"], explanation: "'Ela' substitui o nome.", emoji: "👤" },
  ],
  "LP-em": [
    { question: "O Modernismo brasileiro começa com qual evento?", options: ["Semana de Arte Moderna de 1922","Independência","Proclamação da República","Era Vargas"], explanation: "Semana de 22.", emoji: "🎨" },
    { question: "Quem escreveu 'Vidas Secas'?", options: ["Graciliano Ramos","Machado de Assis","Jorge Amado","Clarice Lispector"], explanation: "Graciliano, 1938.", emoji: "📖" },
  ],

  "CI-i": [
    { question: "Qual destes é um ser vivo?", options: ["cachorro","pedra","cadeira","caneta"], explanation: "Nasce, cresce, morre.", emoji: "🐶" },
    { question: "De onde vem a luz do dia?", options: ["Sol","Lua","estrelas","lâmpada"], explanation: "O Sol ilumina.", emoji: "☀️" },
    { question: "Quantos sentidos temos?", options: ["5","3","4","6"], explanation: "Visão, audição, tato, olfato, paladar.", emoji: "👀" },
  ],
  "CI-m": [
    { question: "Qual é o estado da água em forma de gelo?", options: ["sólido","líquido","gasoso","plasma"], explanation: "Gelo é sólido.", emoji: "🧊" },
    { question: "Em qual planeta nós vivemos?", options: ["Terra","Marte","Júpiter","Vênus"], explanation: "Vivemos na Terra.", emoji: "🌍" },
    { question: "Plantas produzem alimento por qual processo?", options: ["fotossíntese","respiração","digestão","evaporação"], explanation: "Usa luz do Sol.", emoji: "🌱" },
    { question: "Aproximadamente quantos ossos tem um adulto?", options: ["206","100","150","300"], explanation: "Cerca de 206.", emoji: "🦴" },
  ],
  "CI-f": [
    { question: "Qual é a fórmula da água?", options: ["H₂O","CO₂","O₂","NaCl"], explanation: "2 H + 1 O.", emoji: "💧" },
    { question: "Qual organela faz respiração celular?", options: ["mitocôndria","núcleo","ribossomo","lisossomo"], explanation: "Produz ATP.", emoji: "🔬" },
    { question: "Qual é a unidade de força no SI?", options: ["Newton","Joule","Watt","Pascal"], explanation: "F = m·a.", emoji: "⚙️" },
    { question: "Qual partícula tem carga negativa?", options: ["elétron","próton","nêutron","fóton"], explanation: "Elétron é negativo.", emoji: "⚛️" },
    { question: "Qual é o pH neutro?", options: ["7","0","14","1"], explanation: "pH 7 = neutro.", emoji: "🧪" },
  ],

  "GE-i": [
    { question: "Onde o Sol nasce?", options: ["leste","oeste","norte","sul"], explanation: "Nasce a leste.", emoji: "🌅" },
    { question: "Como chamamos o lugar grande onde vivemos juntos?", options: ["cidade","planeta só","sala","rua só"], explanation: "Cidade.", emoji: "🏙️" },
  ],
  "GE-m": [
    { question: "Quantos continentes existem?", options: ["6","5","7","4"], explanation: "São 6.", emoji: "🌍" },
    { question: "Qual é a capital do Brasil?", options: ["Brasília","São Paulo","Rio de Janeiro","Salvador"], explanation: "Desde 1960.", emoji: "🏛️" },
    { question: "O que um mapa político mostra?", options: ["fronteiras de países","relevo","clima","vegetação"], explanation: "Divisões.", emoji: "🗺️" },
    { question: "Qual é o maior bioma brasileiro?", options: ["Amazônia","Cerrado","Caatinga","Pampa"], explanation: "Amazônia.", emoji: "🌳" },
  ],
  "GE-f": [
    { question: "Qual oceano banha o leste do Brasil?", options: ["Atlântico","Pacífico","Índico","Ártico"], explanation: "Atlântico.", emoji: "🌊" },
    { question: "Qual é a maior bacia hidrográfica do mundo?", options: ["Amazônica","Nilo","Mississippi","Congo"], explanation: "Amazônica.", emoji: "💦" },
    { question: "O que é êxodo rural?", options: ["saída do campo para a cidade","migração internacional","turismo","viagem de férias"], explanation: "Campo → cidade.", emoji: "🚜" },
    { question: "Linha imaginária que divide N e S?", options: ["Equador","Greenwich","Trópico de Capricórnio","Polo Norte"], explanation: "Linha do Equador.", emoji: "🌐" },
  ],

  "HI-i": [
    { question: "Quem cuida de você em casa?", options: ["família","escola","cidade","trânsito"], explanation: "A família.", emoji: "👨‍👩‍👧" },
  ],
  "HI-m": [
    { question: "Quem chegou ao Brasil em 1500?", options: ["Pedro Álvares Cabral","Cristóvão Colombo","Vasco da Gama","Tiradentes"], explanation: "Cabral, 1500.", emoji: "⛵" },
    { question: "O que é um povo indígena?", options: ["povo originário","imigrantes","colonizadores","viajantes"], explanation: "Já viviam aqui.", emoji: "🏹" },
  ],
  "HI-f": [
    { question: "Ano da Independência do Brasil?", options: ["1822","1500","1889","1808"], explanation: "1822.", emoji: "🇧🇷" },
    { question: "Quem construiu as pirâmides de Gizé?", options: ["Antigo Egito","Roma","Grécia","Maias"], explanation: "Egípcios.", emoji: "🔺" },
    { question: "A Revolução Francesa ocorreu em qual século?", options: ["XVIII","XVII","XIX","XX"], explanation: "1789.", emoji: "🗡️" },
    { question: "Primeira presidenta do Brasil?", options: ["Dilma Rousseff","Marta Suplicy","Eva Perón","Tereza Cristina"], explanation: "Dilma, 2011.", emoji: "🏛️" },
  ],

  "ER-i": [
    { question: "Como devemos tratar os colegas?", options: ["com respeito","com gritos","ignorando","empurrando"], explanation: "Com respeito.", emoji: "🤝" },
  ],
  "ER-m": [
    { question: "O que é diversidade religiosa?", options: ["existência de várias religiões","uma única religião","ausência de fé","obrigação"], explanation: "Coexistência.", emoji: "🕊️" },
  ],
  "ER-f": [
    { question: "O que é Estado laico?", options: ["separação entre Estado e religião","religião oficial","obrigatoriedade religiosa","proibição de fé"], explanation: "Estado neutro.", emoji: "⚖️" },
  ],

  "AR-i": [
    { question: "Qual destas é cor primária?", options: ["vermelho","verde","roxo","laranja"], explanation: "Vermelho, azul, amarelo.", emoji: "🎨" },
    { question: "Quantas notas musicais há na escala básica?", options: ["7","5","8","10"], explanation: "Dó a Si.", emoji: "🎵" },
  ],
  "AR-m": [
    { question: "Qual instrumento é de corda?", options: ["violão","tambor","flauta","triângulo"], explanation: "Violão tem cordas.", emoji: "🎸" },
    { question: "Quem pintou a Mona Lisa?", options: ["Leonardo da Vinci","Picasso","Van Gogh","Michelangelo"], explanation: "Da Vinci.", emoji: "🖼️" },
  ],
  "AR-f": [
    { question: "Qual movimento Picasso ajudou a criar?", options: ["Cubismo","Impressionismo","Romantismo","Realismo"], explanation: "Picasso e Braque.", emoji: "🎨" },
    { question: "Frevo, samba e forró são…", options: ["danças brasileiras","danças europeias","esportes","comidas"], explanation: "Cultura brasileira.", emoji: "💃" },
  ],

  "EF-i": [
    { question: "Antes de praticar esporte devemos…", options: ["aquecer","comer muito","dormir","ficar parado"], explanation: "Aquecer evita lesão.", emoji: "🏃" },
    { question: "Quantos jogadores tem um time de futebol em campo?", options: ["11","7","5","9"], explanation: "11 por time.", emoji: "⚽" },
  ],
  "EF-m": [
    { question: "Vôlei se joga com…", options: ["as mãos","os pés","a cabeça","raquetes"], explanation: "Mãos e braços.", emoji: "🏐" },
    { question: "Qual é uma capacidade física?", options: ["força","cor","som","cheiro"], explanation: "Força.", emoji: "💪" },
  ],
  "EF-f": [
    { question: "Quantos pontos vale uma cesta de 3 no basquete?", options: ["3","2","1","4"], explanation: "Linha de 3.", emoji: "🏀" },
    { question: "Qual esporte usa peteca e raquete?", options: ["badminton","tênis","vôlei","handebol"], explanation: "Badminton.", emoji: "🏸" },
  ],

  "LI-i": [
    { question: "Como se diz 'casa' em inglês?", options: ["house","dog","car","book"], explanation: "House = casa.", emoji: "🏠" },
  ],
  "LI-m": [
    { question: "'Apple' significa…", options: ["maçã","banana","uva","laranja"], explanation: "Apple = maçã.", emoji: "🍎" },
    { question: "Como se diz 'olá' em inglês?", options: ["hello","goodbye","please","thanks"], explanation: "Hello = olá.", emoji: "👋" },
  ],
  "LI-f": [
    { question: "Passado de 'go'?", options: ["went","goed","gone","going"], explanation: "Verbo irregular.", emoji: "📘" },
    { question: "'I ___ a student' — qual verbo?", options: ["am","is","are","be"], explanation: "1ª pessoa: am.", emoji: "🎓" },
    { question: "Como se diz 'segunda-feira' em inglês?", options: ["Monday","Sunday","Friday","Tuesday"], explanation: "Monday.", emoji: "📅" },
    { question: "Plural de 'child'?", options: ["children","childs","childes","child"], explanation: "Irregular.", emoji: "👶" },
    { question: "'She ___ to school every day' — qual verbo?", options: ["goes","go","going","gone"], explanation: "3ª pess.: goes.", emoji: "🏫" },
  ],
};

const DISC_MAP: Record<string, DiscKey> = {
  "matemática": "MA", "matematica": "MA",
  "língua portuguesa": "LP", "lingua portuguesa": "LP",
  "português": "LP", "portugues": "LP",
  "ciências": "CI", "ciencias": "CI",
  "geografia": "GE",
  "história": "HI", "historia": "HI",
  "ensino religioso": "ER",
  "arte": "AR", "artes": "AR",
  "educação física": "EF", "educacao fisica": "EF",
  "língua inglesa": "LI", "lingua inglesa": "LI",
  "inglês": "LI", "ingles": "LI",
};

function hash32(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function discKey(disciplina: string): DiscKey {
  const k = (disciplina || "").trim().toLowerCase();
  return DISC_MAP[k] ?? "LP";
}

function faixa(codigo: string | null | undefined, serie: string | null | undefined): Faixa {
  const c = (codigo || "").toUpperCase();
  if (c.startsWith("EM")) return "em";
  // EF + 2 dígitos: pode ser ano único (01..09) ou faixa (12, 35, 67, 89)
  const m = c.match(/^EF(\d)(\d)/);
  if (m) {
    const a = parseInt(m[1]!, 10);
    const b = parseInt(m[2]!, 10);
    // Se for faixa (a != 0 e b > a), usa o maior ano
    const ano = a === 0 ? b : Math.max(a, b);
    if (ano <= 2) return "i";
    if (ano <= 5) return "m";
    if (ano <= 9) return "f";
  }
  const s = (serie || "").toLowerCase();
  if (s.includes("médio") || s.includes("medio")) return "em";
  if (s.includes("1º") || s.includes("2º") || s.includes("1 ano") || s.includes("2 ano")) return "i";
  if (/[6789]º/.test(s)) return "f";
  return "m";
}

export type SynthDesafio = {
  question: string;
  options: { letter: "A" | "B" | "C" | "D"; text: string; isCorrect: boolean }[];
  explanation: string;
  emoji: string;
};

export function synthesizeDesafio(
  codigo: string,
  disciplina: string,
  serie: string,
): SynthDesafio {
  const dk = discKey(disciplina);
  const fx = faixa(codigo, serie);
  const items =
    BANK[`${dk}-${fx}`] ?? BANK[`${dk}-m`] ?? BANK[`${dk}-f`] ?? BANK["LP-m"]!;

  const h = hash32(codigo + "|q");
  const q = items[h % items.length]!;

  // Embaralhamento determinístico das alternativas
  const idx = [0, 1, 2, 3];
  let h2 = hash32(codigo + "|shuf");
  for (let i = 3; i > 0; i--) {
    const j = h2 % (i + 1);
    h2 = Math.floor(h2 / (i + 1));
    [idx[i], idx[j]] = [idx[j]!, idx[i]!];
  }
  const letters: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];
  const options = idx.map((k, pos) => ({
    letter: letters[pos]!,
    text: q.options[k as 0 | 1 | 2 | 3]!,
    isCorrect: k === 0,
  }));

  return { question: q.question, options, explanation: q.explanation, emoji: q.emoji };
}

// Detecta se o desafio salvo é o template genérico antigo
export function isGenericDesafio(desafio: any): boolean {
  if (!desafio || !desafio.options || !desafio.options.length) return true;
  const first = desafio.options[0]?.text;
  return (
    first === "Aplicar a ideia principal da aula em uma situação real." ||
    first === "Opção A"
  );
}
