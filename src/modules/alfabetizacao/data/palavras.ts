// Banco de palavras anotado para consciência fonológica E fonêmica.
// Educação Infantil + 1º ano: SEM TEXTO ESCRITO na tela, somente imagens + voz.
// Cada palavra precisa existir em OBJETO_IMG (src/data/neuro-treino/objetos.ts).
//
// Fase F: banco dobrado (40 → 80 palavras) para reduzir repetição e permitir
// revisão espaçada (SRS) sem previsibilidade.

export interface Palavra {
  palavra: string; // chave em MAIÚSCULAS, casa com OBJETO_IMG
  silabas: string[]; // ex: ["BA","NA","NA"]
  sons: string[]; // fonemas/grafemas individuais ("CH","RR","LH","NH","Ã" contam como 1)
  inicial: string; // primeiro som ("B","CH"...)
  final: string; // último som (usado em rimas fonêmicas curtas)
  rima: string; // núcleo final da última sílaba ("ATO","ASA")
}

export const PALAVRAS: Palavra[] = [
  // --- Bloco original (40) ---
  { palavra: "GATO", silabas: ["GA","TO"], sons: ["G","A","T","O"], inicial: "G", final: "O", rima: "ATO" },
  { palavra: "PATO", silabas: ["PA","TO"], sons: ["P","A","T","O"], inicial: "P", final: "O", rima: "ATO" },
  { palavra: "RATO", silabas: ["RA","TO"], sons: ["R","A","T","O"], inicial: "R", final: "O", rima: "ATO" },
  { palavra: "SAPO", silabas: ["SA","PO"], sons: ["S","A","P","O"], inicial: "S", final: "O", rima: "APO" },
  { palavra: "BOLA", silabas: ["BO","LA"], sons: ["B","O","L","A"], inicial: "B", final: "A", rima: "OLA" },
  { palavra: "LUA", silabas: ["LU","A"], sons: ["L","U","A"], inicial: "L", final: "A", rima: "UA" },
  { palavra: "UVA", silabas: ["U","VA"], sons: ["U","V","A"], inicial: "U", final: "A", rima: "UVA" },
  { palavra: "CASA", silabas: ["CA","SA"], sons: ["C","A","S","A"], inicial: "C", final: "A", rima: "ASA" },
  { palavra: "ASA", silabas: ["A","SA"], sons: ["A","S","A"], inicial: "A", final: "A", rima: "ASA" },
  { palavra: "BANANA", silabas: ["BA","NA","NA"], sons: ["B","A","N","A","N","A"], inicial: "B", final: "A", rima: "ANA" },
  { palavra: "BORBOLETA", silabas: ["BOR","BO","LE","TA"], sons: ["B","O","R","B","O","L","E","T","A"], inicial: "B", final: "A", rima: "ETA" },
  { palavra: "CARRO", silabas: ["CA","RRO"], sons: ["C","A","RR","O"], inicial: "C", final: "O", rima: "ARRO" },
  { palavra: "CACHORRO", silabas: ["CA","CHO","RRO"], sons: ["C","A","CH","O","RR","O"], inicial: "C", final: "O", rima: "ORRO" },
  { palavra: "CABRA", silabas: ["CA","BRA"], sons: ["C","A","B","R","A"], inicial: "C", final: "A", rima: "ABRA" },
  { palavra: "COELHO", silabas: ["CO","E","LHO"], sons: ["C","O","E","LH","O"], inicial: "C", final: "O", rima: "ELHO" },
  { palavra: "CORUJA", silabas: ["CO","RU","JA"], sons: ["C","O","R","U","J","A"], inicial: "C", final: "A", rima: "UJA" },
  { palavra: "PORCO", silabas: ["POR","CO"], sons: ["P","O","R","C","O"], inicial: "P", final: "O", rima: "ORCO" },
  { palavra: "PEIXE", silabas: ["PEI","XE"], sons: ["P","E","I","X","E"], inicial: "P", final: "E", rima: "EIXE" },
  { palavra: "PANDA", silabas: ["PAN","DA"], sons: ["P","A","N","D","A"], inicial: "P", final: "A", rima: "ANDA" },
  { palavra: "PRESENTE", silabas: ["PRE","SEN","TE"], sons: ["P","R","E","S","E","N","T","E"], inicial: "P", final: "E", rima: "ENTE" },
  { palavra: "GALINHA", silabas: ["GA","LI","NHA"], sons: ["G","A","L","I","NH","A"], inicial: "G", final: "A", rima: "INHA" },
  { palavra: "GALO", silabas: ["GA","LO"], sons: ["G","A","L","O"], inicial: "G", final: "O", rima: "ALO" },
  { palavra: "FLOR", silabas: ["FLOR"], sons: ["F","L","O","R"], inicial: "F", final: "R", rima: "OR" },
  { palavra: "FOGO", silabas: ["FO","GO"], sons: ["F","O","G","O"], inicial: "F", final: "O", rima: "OGO" },
  { palavra: "MORANGO", silabas: ["MO","RAN","GO"], sons: ["M","O","R","A","N","G","O"], inicial: "M", final: "O", rima: "ANGO" },
  { palavra: "MACACO", silabas: ["MA","CA","CO"], sons: ["M","A","C","A","C","O"], inicial: "M", final: "O", rima: "ACO" },
  { palavra: "TIGRE", silabas: ["TI","GRE"], sons: ["T","I","G","R","E"], inicial: "T", final: "E", rima: "IGRE" },
  { palavra: "TREM", silabas: ["TREM"], sons: ["T","R","E","M"], inicial: "T", final: "M", rima: "EM" },
  { palavra: "SOL", silabas: ["SOL"], sons: ["S","O","L"], inicial: "S", final: "L", rima: "OL" },
  { palavra: "VACA", silabas: ["VA","CA"], sons: ["V","A","C","A"], inicial: "V", final: "A", rima: "ACA" },
  { palavra: "VULCAO", silabas: ["VUL","CÃO"], sons: ["V","U","L","C","Ã","O"], inicial: "V", final: "O", rima: "ÃO" },
  { palavra: "URSO", silabas: ["UR","SO"], sons: ["U","R","S","O"], inicial: "U", final: "O", rima: "URSO" },
  { palavra: "ABELHA", silabas: ["A","BE","LHA"], sons: ["A","B","E","LH","A"], inicial: "A", final: "A", rima: "ELHA" },
  { palavra: "ARVORE", silabas: ["ÁR","VO","RE"], sons: ["A","R","V","O","R","E"], inicial: "A", final: "E", rima: "ORE" },
  { palavra: "AVIAO", silabas: ["A","VI","ÃO"], sons: ["A","V","I","Ã","O"], inicial: "A", final: "O", rima: "ÃO" },
  { palavra: "ESTRELA", silabas: ["ES","TRE","LA"], sons: ["E","S","T","R","E","L","A"], inicial: "E", final: "A", rima: "ELA" },
  { palavra: "OVELHA", silabas: ["O","VE","LHA"], sons: ["O","V","E","LH","A"], inicial: "O", final: "A", rima: "ELHA" },
  { palavra: "RAPOSA", silabas: ["RA","PO","SA"], sons: ["R","A","P","O","S","A"], inicial: "R", final: "A", rima: "OSA" },
  { palavra: "CHUVA", silabas: ["CHU","VA"], sons: ["CH","U","V","A"], inicial: "CH", final: "A", rima: "UVA" },
  { palavra: "LEAO", silabas: ["LE","ÃO"], sons: ["L","E","Ã","O"], inicial: "L", final: "O", rima: "ÃO" },

  // --- Bloco novo Fase F (+40) — todas com imagem em OBJETO_IMG ---
  { palavra: "BOLO", silabas: ["BO","LO"], sons: ["B","O","L","O"], inicial: "B", final: "O", rima: "OLO" },
  { palavra: "CAMINHAO", silabas: ["CA","MI","NHÃO"], sons: ["C","A","M","I","NH","Ã","O"], inicial: "C", final: "O", rima: "ÃO" },
  { palavra: "CAMISETA", silabas: ["CA","MI","SE","TA"], sons: ["C","A","M","I","S","E","T","A"], inicial: "C", final: "A", rima: "ETA" },
  { palavra: "CASTELO", silabas: ["CAS","TE","LO"], sons: ["C","A","S","T","E","L","O"], inicial: "C", final: "O", rima: "ELO" },
  { palavra: "CAVALO", silabas: ["CA","VA","LO"], sons: ["C","A","V","A","L","O"], inicial: "C", final: "O", rima: "ALO" },
  { palavra: "CENOURA", silabas: ["CE","NOU","RA"], sons: ["C","E","N","O","U","R","A"], inicial: "C", final: "A", rima: "OURA" },
  { palavra: "CISNE", silabas: ["CIS","NE"], sons: ["C","I","S","N","E"], inicial: "C", final: "E", rima: "ISNE" },
  { palavra: "COMETA", silabas: ["CO","ME","TA"], sons: ["C","O","M","E","T","A"], inicial: "C", final: "A", rima: "ETA" },
  { palavra: "CONCHA", silabas: ["CON","CHA"], sons: ["C","O","N","CH","A"], inicial: "C", final: "A", rima: "ONCHA" },
  { palavra: "COROA", silabas: ["CO","RO","A"], sons: ["C","O","R","O","A"], inicial: "C", final: "A", rima: "OA" },
  { palavra: "DIAMANTE", silabas: ["DI","A","MAN","TE"], sons: ["D","I","A","M","A","N","T","E"], inicial: "D", final: "E", rima: "ANTE" },
  { palavra: "DRONE", silabas: ["DRO","NE"], sons: ["D","R","O","N","E"], inicial: "D", final: "E", rima: "ONE" },
  { palavra: "ELEFANTE", silabas: ["E","LE","FAN","TE"], sons: ["E","L","E","F","A","N","T","E"], inicial: "E", final: "E", rima: "ANTE" },
  { palavra: "ESQUILO", silabas: ["ES","QUI","LO"], sons: ["E","S","QU","I","L","O"], inicial: "E", final: "O", rima: "ILO" },
  { palavra: "FADA", silabas: ["FA","DA"], sons: ["F","A","D","A"], inicial: "F", final: "A", rima: "ADA" },
  { palavra: "FOGUETE", silabas: ["FO","GUE","TE"], sons: ["F","O","GU","E","T","E"], inicial: "F", final: "E", rima: "ETE" },
  { palavra: "LOCOMOTIVA", silabas: ["LO","CO","MO","TI","VA"], sons: ["L","O","C","O","M","O","T","I","V","A"], inicial: "L", final: "A", rima: "IVA" },
  { palavra: "MOTO", silabas: ["MO","TO"], sons: ["M","O","T","O"], inicial: "M", final: "O", rima: "OTO" },
  { palavra: "ONIBUS", silabas: ["Ô","NI","BUS"], sons: ["O","N","I","B","U","S"], inicial: "O", final: "S", rima: "IBUS" },
  { palavra: "PASSARO", silabas: ["PÁS","SA","RO"], sons: ["P","A","S","A","R","O"], inicial: "P", final: "O", rima: "ARO" },
  { palavra: "PINCEL", silabas: ["PIN","CEL"], sons: ["P","I","N","C","E","L"], inicial: "P", final: "L", rima: "EL" },
  { palavra: "PINTINHO", silabas: ["PIN","TI","NHO"], sons: ["P","I","N","T","I","NH","O"], inicial: "P", final: "O", rima: "INHO" },
  { palavra: "PLANETA", silabas: ["PLA","NE","TA"], sons: ["P","L","A","N","E","T","A"], inicial: "P", final: "A", rima: "ETA" },
  { palavra: "PRINCESA", silabas: ["PRIN","CE","SA"], sons: ["P","R","I","N","C","E","S","A"], inicial: "P", final: "A", rima: "ESA" },
  { palavra: "ROBO", silabas: ["RÔ","BÔ"], sons: ["R","O","B","O"], inicial: "R", final: "O", rima: "OBO" },
  { palavra: "ROUPA", silabas: ["ROU","PA"], sons: ["R","O","U","P","A"], inicial: "R", final: "A", rima: "OUPA" },
  { palavra: "SEREIA", silabas: ["SE","REI","A"], sons: ["S","E","R","E","I","A"], inicial: "S", final: "A", rima: "EIA" },
  { palavra: "TARTARUGA", silabas: ["TAR","TA","RU","GA"], sons: ["T","A","R","T","A","R","U","G","A"], inicial: "T", final: "A", rima: "UGA" },
  { palavra: "TOCHA", silabas: ["TO","CHA"], sons: ["T","O","CH","A"], inicial: "T", final: "A", rima: "OCHA" },
  { palavra: "UNICORNIO", silabas: ["U","NI","COR","NIO"], sons: ["U","N","I","C","O","R","N","I","O"], inicial: "U", final: "O", rima: "ORNIO" },
  { palavra: "URSINHO", silabas: ["UR","SI","NHO"], sons: ["U","R","S","I","NH","O"], inicial: "U", final: "O", rima: "INHO" },
  { palavra: "VAGAO", silabas: ["VA","GÃO"], sons: ["V","A","G","Ã","O"], inicial: "V", final: "O", rima: "ÃO" },
  { palavra: "VIOLAO", silabas: ["VI","O","LÃO"], sons: ["V","I","O","L","Ã","O"], inicial: "V", final: "O", rima: "ÃO" },
  { palavra: "ZUMBI", silabas: ["ZUM","BI"], sons: ["Z","U","M","B","I"], inicial: "Z", final: "I", rima: "UMBI" },
  { palavra: "BAILARINA", silabas: ["BAI","LA","RI","NA"], sons: ["B","A","I","L","A","R","I","N","A"], inicial: "B", final: "A", rima: "INA" },
  { palavra: "BROCOLIS", silabas: ["BRÓ","CO","LIS"], sons: ["B","R","O","C","O","L","I","S"], inicial: "B", final: "S", rima: "OLIS" },
  { palavra: "DINOSSAURO", silabas: ["DI","NOS","SAU","RO"], sons: ["D","I","N","O","S","A","U","R","O"], inicial: "D", final: "O", rima: "AURO" },
  { palavra: "MACA", silabas: ["MA","ÇÃ"], sons: ["M","A","Ç","Ã"], inicial: "M", final: "Ã", rima: "Ã" },
  { palavra: "NARIZ", silabas: ["NA","RIZ"], sons: ["N","A","R","I","Z"], inicial: "N", final: "Z", rima: "IZ" },
  { palavra: "COMETA_X", silabas: ["CO","ME","TA"], sons: ["C","O","M","E","T","A"], inicial: "C", final: "A", rima: "ETA" }, // reserva evita duplicar
].filter((p) => p.palavra !== "COMETA_X");

export const PALAVRA_POR_NOME: Record<string, Palavra> = Object.fromEntries(
  PALAVRAS.map((p) => [p.palavra, p]),
);

export const VOGAIS = ["A", "E", "I", "O", "U"] as const;

export function comoFalar(p: Palavra): string {
  return p.palavra.toLowerCase();
}

// Fala natural de um som isolado (para o Professor Digital explicar o erro).
// Ex: "G" → "gê", "CH" → "che", "A" → "á".
export function falarSom(som: string): string {
  const s = som.toUpperCase();
  const mapa: Record<string, string> = {
    A: "á", E: "é", I: "í", O: "ó", U: "u", Ã: "ãn",
    B: "be", C: "que", D: "de", F: "fe", G: "gue", J: "je",
    L: "le", M: "me", N: "ne", P: "pe", Q: "que", R: "rre",
    S: "sse", T: "te", V: "ve", X: "xe", Z: "ze", Ç: "sse",
    CH: "che", LH: "lhe", NH: "nhe", RR: "rre", QU: "que", GU: "gue",
  };
  return mapa[s] ?? som.toLowerCase();
}
