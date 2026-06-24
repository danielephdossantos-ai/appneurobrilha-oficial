// Banco de palavras anotado para consciência fonológica.
// Educação Infantil + 1º ano: SEM TEXTO ESCRITO na tela, somente imagens + voz.
// Cada palavra precisa existir em OBJETO_IMG (src/data/neuro-treino/objetos.ts).

export interface Palavra {
  palavra: string; // chave em MAIÚSCULAS, casa com OBJETO_IMG
  silabas: string[]; // ex: ["BA","NA","NA"]
  inicial: string; // primeira letra fonológica ("B","C","CH","A"...)
  rima: string; // núcleo final usado p/ comparar rimas ("ATO","ASA","OL"...)
}

export const PALAVRAS: Palavra[] = [
  { palavra: "GATO", silabas: ["GA", "TO"], inicial: "G", rima: "ATO" },
  { palavra: "PATO", silabas: ["PA", "TO"], inicial: "P", rima: "ATO" },
  { palavra: "RATO", silabas: ["RA", "TO"], inicial: "R", rima: "ATO" },
  { palavra: "SAPO", silabas: ["SA", "PO"], inicial: "S", rima: "APO" },
  { palavra: "BOLA", silabas: ["BO", "LA"], inicial: "B", rima: "OLA" },
  { palavra: "LUA", silabas: ["LU", "A"], inicial: "L", rima: "UA" },
  { palavra: "UVA", silabas: ["U", "VA"], inicial: "U", rima: "UVA" },
  { palavra: "CASA", silabas: ["CA", "SA"], inicial: "C", rima: "ASA" },
  { palavra: "ASA", silabas: ["A", "SA"], inicial: "A", rima: "ASA" },
  { palavra: "BANANA", silabas: ["BA", "NA", "NA"], inicial: "B", rima: "ANA" },
  { palavra: "BORBOLETA", silabas: ["BOR", "BO", "LE", "TA"], inicial: "B", rima: "ETA" },
  { palavra: "CARRO", silabas: ["CA", "RRO"], inicial: "C", rima: "ARRO" },
  { palavra: "CACHORRO", silabas: ["CA", "CHO", "RRO"], inicial: "C", rima: "ORRO" },
  { palavra: "CABRA", silabas: ["CA", "BRA"], inicial: "C", rima: "ABRA" },
  { palavra: "COELHO", silabas: ["CO", "E", "LHO"], inicial: "C", rima: "ELHO" },
  { palavra: "CORUJA", silabas: ["CO", "RU", "JA"], inicial: "C", rima: "UJA" },
  { palavra: "PORCO", silabas: ["POR", "CO"], inicial: "P", rima: "ORCO" },
  { palavra: "PEIXE", silabas: ["PEI", "XE"], inicial: "P", rima: "EIXE" },
  { palavra: "PANDA", silabas: ["PAN", "DA"], inicial: "P", rima: "ANDA" },
  { palavra: "PRESENTE", silabas: ["PRE", "SEN", "TE"], inicial: "P", rima: "ENTE" },
  { palavra: "GALINHA", silabas: ["GA", "LI", "NHA"], inicial: "G", rima: "INHA" },
  { palavra: "GALO", silabas: ["GA", "LO"], inicial: "G", rima: "ALO" },
  { palavra: "FLOR", silabas: ["FLOR"], inicial: "F", rima: "OR" },
  { palavra: "FOGO", silabas: ["FO", "GO"], inicial: "F", rima: "OGO" },
  { palavra: "MORANGO", silabas: ["MO", "RAN", "GO"], inicial: "M", rima: "ANGO" },
  { palavra: "MACACO", silabas: ["MA", "CA", "CO"], inicial: "M", rima: "ACO" },
  { palavra: "TIGRE", silabas: ["TI", "GRE"], inicial: "T", rima: "IGRE" },
  { palavra: "TREM", silabas: ["TREM"], inicial: "T", rima: "EM" },
  { palavra: "SOL", silabas: ["SOL"], inicial: "S", rima: "OL" },
  { palavra: "VACA", silabas: ["VA", "CA"], inicial: "V", rima: "ACA" },
  { palavra: "VULCAO", silabas: ["VUL", "CÃO"], inicial: "V", rima: "ÃO" },
  { palavra: "URSO", silabas: ["UR", "SO"], inicial: "U", rima: "URSO" },
  { palavra: "ABELHA", silabas: ["A", "BE", "LHA"], inicial: "A", rima: "ELHA" },
  { palavra: "ARVORE", silabas: ["ÁR", "VO", "RE"], inicial: "A", rima: "ORE" },
  { palavra: "AVIAO", silabas: ["A", "VI", "ÃO"], inicial: "A", rima: "ÃO" },
  { palavra: "ESTRELA", silabas: ["ES", "TRE", "LA"], inicial: "E", rima: "ELA" },
  { palavra: "OVELHA", silabas: ["O", "VE", "LHA"], inicial: "O", rima: "ELHA" },
  { palavra: "RAPOSA", silabas: ["RA", "PO", "SA"], inicial: "R", rima: "OSA" },
  { palavra: "CHUVA", silabas: ["CHU", "VA"], inicial: "CH", rima: "UVA" },
  { palavra: "LEAO", silabas: ["LE", "ÃO"], inicial: "L", rima: "ÃO" },
];

export const PALAVRA_POR_NOME: Record<string, Palavra> = Object.fromEntries(
  PALAVRAS.map((p) => [p.palavra, p]),
);

export const VOGAIS = ["A", "E", "I", "O", "U"] as const;

export function comoFalar(p: Palavra): string {
  // Texto que será enviado pro TTS. Mantemos a palavra natural.
  return p.palavra.toLowerCase();
}
