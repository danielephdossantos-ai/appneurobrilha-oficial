// Pré-ensino de vocabulário — 5º pilar do NRP (Vocabulary Instruction).
// Antes de ler a história, a criança conhece 2-3 palavras "âncora" com
// imagem + definição infantil + fala do professor. Isso reduz esforço
// cognitivo durante a leitura e melhora a compreensão.
//
// Estratégia: dicionário compartilhado por palavra (chave em MAIÚSCULA
// sem acento — mesmo padrão dos assets em objetoImg). Quando a história
// não tem `vocabChave` explícito, derivamos automaticamente das palavras
// mais "gordas" do texto (>=5 letras) que existem no dicionário.

import type { HistoriaGraduada } from "./historias-graduadas";

export interface PalavraChave {
  palavra: string;      // como aparece no texto (Ex.: "borboleta")
  definicao: string;    // infantil, 1 frase curta
  imagem?: string;      // chave de objetoImg (opcional)
}

// Dicionário base — todas as chaves em UPPER sem acento
const DICIONARIO: Record<string, { def: string; img?: string }> = {
  SOL: { def: "É a estrela grande e amarela que ilumina o dia.", img: "SOL" },
  LUA: { def: "É a bola prateada que aparece no céu de noite.", img: "LUA" },
  BOLA: { def: "É um brinquedo redondo pra chutar ou jogar.", img: "BOLA" },
  GATO: { def: "É um bichinho fofinho que faz miau.", img: "GATO" },
  RATO: { def: "É um bichinho pequeno que gosta de queijo.", img: "RATO" },
  UVA: { def: "É uma fruta pequena, redondinha e docinha.", img: "UVA" },
  BANANA: { def: "É uma fruta amarela e comprida.", img: "BANANA" },
  PATO: { def: "É uma ave que nada no lago e faz quá quá.", img: "PATO" },
  PEIXE: { def: "É um bicho que vive dentro d'água.", img: "PEIXE" },
  SAPO: { def: "É um bichinho verde que pula bem alto.", img: "SAPO" },
  FLOR: { def: "É a parte colorida e cheirosa das plantas.", img: "FLOR" },
  CHUVA: { def: "É a água que cai do céu quando está nublado.", img: "CHUVA" },
  GALO: { def: "É a ave que canta bem cedinho de manhã.", img: "GALO" },
  GALINHA: { def: "É a ave que bota ovos e cuida dos pintinhos.", img: "GALINHA" },
  ABELHA: { def: "É o bichinho listrado que faz mel.", img: "ABELHA" },
  BORBOLETA: { def: "É o bichinho com asas coloridas que voa nas flores.", img: "BORBOLETA" },
  CACHORRO: { def: "É um bicho amigo do homem que faz au au.", img: "CACHORRO" },
  FADA: { def: "É um ser mágico com asinhas que aparece nos contos.", img: "FADA" },
  CASTELO: { def: "É uma casa grandona com torres, onde vive rei ou princesa.", img: "CASTELO" },
  COROA: { def: "É o enfeite dourado que reis e princesas usam na cabeça.", img: "COROA" },
  ESQUILO: { def: "É um bichinho peludo que sobe em árvores.", img: "ESQUILO" },
  ARVORE: { def: "É a planta grande com tronco, galhos e folhas.", img: "ARVORE" },
  CENOURA: { def: "É um legume laranja e comprido, gostoso e crocante.", img: "CENOURA" },
  COELHO: { def: "É um bichinho fofo com orelhas grandes que pula.", img: "COELHO" },
  RAPOSA: { def: "É um bicho esperto de rabo peludo que mora na mata.", img: "RAPOSA" },
  ELEFANTE: { def: "É um bicho enorme com tromba e orelhas grandes.", img: "ELEFANTE" },
  AGUA: { def: "É o líquido que a gente bebe e usa pra se lavar.", img: "AGUA" },
  PRINCESA: { def: "É a filha do rei ou da rainha.", img: "PRINCESA" },
  CORUJA: { def: "É a ave grande de olhos redondos que voa de noite.", img: "CORUJA" },
  LEAO: { def: "É o rei da selva, um bicho grande de juba.", img: "LEAO" },
  TARTARUGA: { def: "É um bicho lento com casco duro nas costas.", img: "TARTARUGA" },
  CAVALO: { def: "É um bicho grande e forte que corre bem rápido.", img: "CAVALO" },
  FOGUETE: { def: "É a nave que voa até o espaço.", img: "FOGUETE" },
  PLANETA: { def: "É uma bola gigante que gira lá no espaço, como a Terra.", img: "PLANETA" },
  ESTRELA: { def: "É um pontinho brilhante lá no céu de noite.", img: "ESTRELA" },
  // Palavras "gordas" que aparecem em N5-N6 sem imagem — só definição
  ARMADILHA: { def: "É uma cilada preparada pra pegar alguém." },
  CORDAS: { def: "São fios grossos e fortes, feitos pra amarrar." },
  ZOMBOU: { def: "Riu de alguém com deboche, tirou sarro." },
  DISPARADO: { def: "Muito rápido, sem parar." },
  VELOZ: { def: "Que corre bem rápido." },
  LENTA: { def: "Devagar, sem pressa." },
  DESAFIO: { def: "Uma prova difícil pra tentar vencer." },
  NECTAR: { def: "É o líquido docinho que fica dentro das flores." },
  CURIOSA: { def: "Que quer descobrir e saber de tudo." },
  ENSOLARADA: { def: "Cheia de sol, bem clarinha." },
  ARMADILHAS: { def: "São ciladas preparadas pra pegar alguém." },
  COMETAS: { def: "São bolas de gelo com rabo brilhante que passam pelo espaço." },
  PROMETEU: { def: "Deu a palavra que ia fazer uma coisa." },
  CILADA: { def: "Uma armadilha, uma pegadinha ruim." },
  CORAGEM: { def: "É não ter medo mesmo quando é difícil." },
  MADRUGADOR: { def: "Que acorda bem cedinho, antes do sol nascer." },
  DOCINHA: { def: "Bem doce, gostosinha." },
  BRINCALHAO: { def: "Que gosta muito de brincar." },
  GUARDAO: { def: "Aquele que cuida, que toma conta." },
  PULAO: { def: "Que pula muito, com força." },
};

// Normalize: MAIÚSCULA + sem acento
export function normalizarPalavra(p: string): string {
  return p
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "");
}

export function definicaoDe(palavra: string): PalavraChave | null {
  const chave = normalizarPalavra(palavra);
  const d = DICIONARIO[chave];
  if (!d) return null;
  return { palavra: palavra.toLowerCase(), definicao: d.def, imagem: d.img };
}

// Deriva o vocabulário-chave da história automaticamente.
// - Coleta palavras >=5 letras dos textos das páginas.
// - Filtra as que existem no dicionário.
// - Mantém ordem de primeira aparição, sem duplicar.
// - Limita a 3 palavras (foco > exaustividade).
export function vocabChaveAutomatico(h: HistoriaGraduada): PalavraChave[] {
  const vistas = new Set<string>();
  const out: PalavraChave[] = [];
  const textoCorrido = h.paginas.map((p) => p.texto).join(" ");
  const palavras = textoCorrido.match(/[A-Za-zÀ-ÿ]+/g) ?? [];
  for (const raw of palavras) {
    if (raw.length < 5) continue;
    const chave = normalizarPalavra(raw);
    if (vistas.has(chave)) continue;
    const entrada = DICIONARIO[chave];
    if (!entrada) continue;
    vistas.add(chave);
    out.push({ palavra: raw.toLowerCase(), definicao: entrada.def, imagem: entrada.img });
    if (out.length >= 3) break;
  }
  return out;
}

// Regra pedagógica: só pré-ensina vocabulário do nível 3 em diante.
// Em N1-N2 as palavras são todas concretas e a imagem da página já ensina.
export function precisaPreEnsinoVocab(h: HistoriaGraduada): boolean {
  return h.nivel >= 3;
}
