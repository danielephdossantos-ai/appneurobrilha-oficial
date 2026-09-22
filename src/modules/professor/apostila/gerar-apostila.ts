/**
 * Conversor de aula do app → apostila A4 para imprimir (área do professor).
 *
 * Regras:
 *  - NÃO inventa conteúdo: todo texto vem da própria aula.
 *  - NÃO usa IA: é transformação determinística (custo zero).
 *  - Imagens: apenas as que a própria aula já referencia + (opcional)
 *    imagens do Banco de Mídias ligadas ao tema, passadas por quem chama.
 */

import type { Aula } from "@/escola-brilha/types";

export type ApostilaImagem = { url: string; legenda?: string };
export type ApostilaItemVisual = ApostilaImagem | { texto: string };

export type ApostilaBloco =
  | { tipo: "texto"; titulo?: string; texto: string }
  | { tipo: "lista"; titulo?: string; itens: string[] }
  | { tipo: "passos"; titulo?: string; passos: string[] }
  | { tipo: "imagens"; titulo?: string; imagens: ApostilaImagem[] }
  | { tipo: "contagem"; titulo?: string; imagem: string; quantidade: number; rotulo?: string }
  | { tipo: "linhas"; titulo?: string; enunciado: string; linhas: number }
  | {
      tipo: "escolha-visual";
      titulo?: string;
      comando: string;
      modelo?: ApostilaImagem;
      imagens: ApostilaImagem[];
    }
  | {
      tipo: "ligar-imagens";
      titulo?: string;
      comando: string;
      esquerda: ApostilaItemVisual[];
      direita: ApostilaItemVisual[];
    }
  | {
      tipo: "tracado";
      titulo?: string;
      comando: string;
      itens: string[];
      repeticoes?: number;
      imagem?: ApostilaImagem;
      imagens?: Record<string, ApostilaImagem>;
    }
  | {
      tipo: "marcar-som";
      titulo?: string;
      comando: string;
      itens: Array<{ imagem: ApostilaImagem; opcoes: string[] }>;
    }
  | {
      tipo: "marcar-figura";
      titulo?: string;
      comando: string;
      questoes: Array<{ pergunta: string; imagens: ApostilaImagem[] }>;
    }
  | {
      tipo: "procurar-letras";
      titulo?: string;
      comando: string;
      letras: string[];
      alvos: string[];
    }
  | {
      tipo: "completar-unidade";
      titulo?: string;
      comando: string;
      itens: Array<{ imagem: ApostilaImagem; antes?: string; depois?: string; dica?: string }>;
    }
  | {
      tipo: "montar-palavra";
      titulo?: string;
      comando: string;
      itens: Array<{ imagem: ApostilaImagem; partes: string[]; espacos: number }>;
    }
  | {
      tipo: "separar-partes";
      titulo?: string;
      comando: string;
      itens: Array<{ imagem: ApostilaImagem; palavra: string; opcoes: string[] }>;
    }
  | {
      tipo: "ordenar-frase";
      titulo?: string;
      comando: string;
      itens: Array<{ imagem: ApostilaImagem; palavras: string[] }>;
    }
  | {
      tipo: "alternativas";
      titulo?: string;
      questoes: Array<{ enunciado: string; opcoes: string[] }>;
    }
  | { tipo: "aviso"; titulo?: string; texto: string };

export type ApostilaPagina = {
  /** Cabeçalho da folha A4. */
  etiqueta: "Guia do professor" | "Folha do estudante" | "Gabarito" | "Carta para a família";
  titulo: string;
  subtitulo?: string;
  blocos: ApostilaBloco[];
};

export type Apostila = {
  codigo: string;
  ano: string;
  disciplina: string;
  titulo: string;
  objetivoPrincipal: string;
  paginas: ApostilaPagina[];
  /** Palavras-chave para buscar imagens no Banco de Mídias. */
  termos: string[];
};

const PALAVRAS_IGNORADAS = new Set([
  "a","o","as","os","de","da","do","das","dos","e","em","no","na","nos","nas","um","uma","uns","umas",
  "para","por","com","que","se","ao","aos","à","às","the","of","é","ser","sua","seu","mais","como",
  "primeiro","palavra","palavras","criança","crianças","aula","brilha","som","sons","vamos","cada",
]);

function normalizar(t: string): string {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");
}

/** Termos de busca a partir do título e objetivos da aula. */
export function termosDaAula(aula: Aula): string[] {
  const base = [aula.titulo, ...(aula.objetivos ?? [])].join(" ");
  const vistos = new Set<string>();
  for (const p of normalizar(base).split(/\s+/)) {
    if (p.length < 4 || PALAVRAS_IGNORADAS.has(p)) continue;
    vistos.add(p);
    if (vistos.size >= 8) break;
  }
  return [...vistos];
}

const CHAVE_IMAGEM = /(img|imagemurl|imagem|mapafundo|thumbnail|url)$/i;

function pareceImagem(v: unknown): v is string {
  return (
    typeof v === "string" &&
    (/^https?:\/\//.test(v) || v.startsWith("/") || v.startsWith("data:image")) &&
    !/\.(mp3|wav|ogg|m4a)$/i.test(v)
  );
}

/** Coleta, sem duplicar, todas as imagens que a aula já usa. */
export function imagensDaAula(aula: Aula, limite = 12): ApostilaImagem[] {
  const urls: ApostilaImagem[] = [];
  const vistos = new Set<string>();
  const add = (url: string, legenda?: string) => {
    if (vistos.has(url) || urls.length >= limite) return;
    vistos.add(url);
    const arquivo = decodeURIComponent(url.split("/").pop() ?? "")
      .replace(/\.asset\.json$/i, "")
      .replace(/\.[a-z0-9]+$/i, "")
      .replace(/[-_]+/g, " ")
      .trim();
    urls.push({ url, legenda: arquivo || legenda });
  };
  const visitar = (no: unknown, rotulo?: string) => {
    if (!no || urls.length >= limite) return;
    if (Array.isArray(no)) {
      for (const item of no) visitar(item, rotulo);
      return;
    }
    if (typeof no !== "object") return;
    const obj = no as Record<string, unknown>;
    const legenda =
      (typeof obj["alt"] === "string" && obj["alt"]) ||
      (typeof obj["legenda"] === "string" && obj["legenda"]) ||
      (typeof obj["rotulo"] === "string" && obj["rotulo"]) ||
      (typeof obj["nome"] === "string" && obj["nome"]) ||
      rotulo ||
      undefined;
    for (const [chave, valor] of Object.entries(obj)) {
      if (CHAVE_IMAGEM.test(chave) && pareceImagem(valor)) add(valor, legenda as string | undefined);
      else visitar(valor, legenda as string | undefined);
    }
  };
  visitar(aula as unknown);
  return urls;
}

function paragrafos(texto: string): string[] {
  return (texto || "")
    .split(/\n{2,}|\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function imagemComLegenda(imagens: ApostilaImagem[], legenda: string): ApostilaImagem | undefined {
  const alvo = normalizar(legenda);
  return imagens.find((imagem) => normalizar(imagem.legenda ?? "").includes(alvo));
}

function paginasInfantisEF01LP01(imagens: ApostilaImagem[]): ApostilaPagina[] | null {
  const [gato, sol, bola, pato, sapo, casa, rato, vaca, dado] = ["gato", "sol", "bola", "pato", "sapo", "casa", "rato", "vaca", "dado"]
    .map((legenda) => imagemComLegenda(imagens, legenda));
  if (!gato || !sol || !bola || !pato || !sapo || !casa || !rato || !vaca || !dado) return null;

  return [
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 1 — Descubra o começo",
      blocos: [
        {
          tipo: "escolha-visual",
          comando: "Circule a figura que começa igual ao modelo.",
          modelo: sol,
          imagens: [sapo, gato, bola, pato],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 2 — Primeiro som da palavra",
      blocos: [
        {
          tipo: "marcar-som",
          comando: "Marque a letra que combina com o começo de cada figura.",
          itens: [
            { imagem: gato, opcoes: ["G", "S", "B"] },
            { imagem: bola, opcoes: ["P", "B", "R"] },
            { imagem: pato, opcoes: ["D", "P", "V"] },
          ],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 3 — Ligue cada figura",
      blocos: [
        {
          tipo: "ligar-imagens",
          comando: "Ligue cada letra à figura que começa com ela.",
          esquerda: [{ texto: "G" }, { texto: "S" }, { texto: "B" }, { texto: "P" }],
          direita: [pato, gato, sapo, bola],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 4 — Cubra o pontilhado",
      blocos: [
        {
          tipo: "tracado",
          comando: "Cubra os pontilhados com capricho.",
          itens: ["G", "B", "P", "S"],
          repeticoes: 5,
          imagens: { G: gato, B: bola, P: pato, S: sol },
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 5 — Marque a resposta correta",
      blocos: [
        {
          tipo: "marcar-figura",
          comando: "Marque uma resposta em cada atividade.",
          questoes: [
            { pergunta: "1. Qual figura começa com G?", imagens: [gato, sol, bola] },
            { pergunta: "2. Qual figura começa com P?", imagens: [casa, pato, rato] },
            { pergunta: "3. Qual figura começa como SAPO?", imagens: [sol, rato, dado] },
          ],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 6 — Procure as letras",
      blocos: [
        {
          tipo: "procurar-letras",
          comando: "Procure e circule as letras G, S, B e P.",
          alvos: ["G", "S", "B", "P"],
          letras: ["M", "G", "A", "S", "B", "O", "P", "L", "S", "T", "G", "B", "D", "P", "C", "A"],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 7 — Complete as palavras",
      blocos: [
        {
          tipo: "completar-unidade",
          comando: "Complete com a primeira letra.",
          itens: [
            { imagem: gato, depois: "ATO" },
            { imagem: sol, depois: "OL" },
            { imagem: bola, depois: "OLA" },
            { imagem: pato, depois: "ATO" },
          ],
        },
      ],
    },
  ];
}

type ItemConteudo = { unidade: string; figura: string };
type ConfigApostila = {
  itens: ItemConteudo[];
  distratores: string[];
  grade: string[];
  foco: "som" | "silaba" | "palavra" | "frase";
};

const CONFIGS_APOSTILA: Record<string, ConfigApostila> = {
  EF01LP02: { foco: "som", itens: [{ unidade: "S", figura: "sapo" }, { unidade: "S", figura: "sopa" }, { unidade: "P", figura: "pato" }, { unidade: "G", figura: "gato" }], distratores: ["M", "L", "B"], grade: ["S", "P", "G"] },
  EF01LP03: { foco: "som", itens: [{ unidade: "A", figura: "abelha" }, { unidade: "E", figura: "escola" }, { unidade: "I", figura: "ioio" }, { unidade: "O", figura: "ovelha" }, { unidade: "U", figura: "ursinho" }], distratores: ["M", "S", "P"], grade: ["A", "E", "I", "O", "U"] },
  EF01LP04: { foco: "som", itens: [{ unidade: "M", figura: "mae" }, { unidade: "M", figura: "maca" }, { unidade: "M", figura: "mapa" }, { unidade: "M", figura: "mochila" }], distratores: ["S", "B", "G"], grade: ["M"] },
  EF01LP05: { foco: "som", itens: [{ unidade: "S", figura: "sol" }, { unidade: "S", figura: "sapo" }, { unidade: "S", figura: "sopa" }, { unidade: "S", figura: "suco" }], distratores: ["M", "B", "P"], grade: ["S"] },
  EF01LP06: { foco: "som", itens: [{ unidade: "P", figura: "pato" }, { unidade: "P", figura: "pipa" }, { unidade: "P", figura: "pente" }, { unidade: "P", figura: "panda" }], distratores: ["S", "B", "G"], grade: ["P"] },
  EF01LP07: { foco: "som", itens: [{ unidade: "T", figura: "tigre" }, { unidade: "T", figura: "trem" }, { unidade: "T", figura: "tambor" }, { unidade: "T", figura: "telefone" }], distratores: ["P", "S", "M"], grade: ["T"] },
  EF01LP08: { foco: "som", itens: [{ unidade: "L", figura: "leao" }, { unidade: "L", figura: "lua" }, { unidade: "L", figura: "livro" }, { unidade: "L", figura: "lapis" }], distratores: ["T", "P", "S"], grade: ["L"] },
  EF01LP09: { foco: "som", itens: [{ unidade: "F", figura: "flor" }, { unidade: "F", figura: "festa" }, { unidade: "F", figura: "fogo" }, { unidade: "F", figura: "futebol" }], distratores: ["S", "P", "M"], grade: ["F"] },
  EF01LP10: { foco: "som", itens: [{ unidade: "N", figura: "navio" }, { unidade: "N", figura: "ninho" }, { unidade: "N", figura: "noite" }, { unidade: "N", figura: "nuvem" }], distratores: ["M", "P", "S"], grade: ["N"] },
  EF01LP11: { foco: "silaba", itens: [{ unidade: "MA", figura: "mapa" }, { unidade: "SA", figura: "sapo" }, { unidade: "PA", figura: "pato" }, { unidade: "TA", figura: "lata" }], distratores: ["LA", "BA", "NA"], grade: ["MA", "SA", "PA", "TA"] },
  EF01LP12: { foco: "silaba", itens: [{ unidade: "PI", figura: "pipa" }, { unidade: "PE", figura: "peixe" }, { unidade: "ME", figura: "menino" }, { unidade: "NI", figura: "ninho" }], distratores: ["PA", "SA", "BO"], grade: ["PE", "ME", "PI", "NI", "LI"] },
  EF01LP13: { foco: "silaba", itens: [{ unidade: "BO", figura: "bolo" }, { unidade: "LU", figura: "lua" }, { unidade: "SO", figura: "sopa" }, { unidade: "SU", figura: "suco" }], distratores: ["PA", "NI", "ME"], grade: ["BO", "SO", "LU", "SU"] },
  EF01LP14: { foco: "palavra", itens: [{ unidade: "PATO", figura: "pato" }, { unidade: "SAPO", figura: "sapo" }, { unidade: "MAPA", figura: "mapa" }, { unidade: "CASA", figura: "casa" }], distratores: ["RATO", "LATA", "BOLO"], grade: ["PATO", "SAPO", "MAPA"] },
  EF01LP15: { foco: "palavra", itens: [{ unidade: "BOLA", figura: "bola" }, { unidade: "BOLO", figura: "bolo" }, { unidade: "DADO", figura: "dado" }, { unidade: "PIPA", figura: "pipa" }], distratores: ["PATO", "SAPO", "LUA"], grade: ["BOLA", "BOLO", "DADO"] },
  EF01LP16: { foco: "frase", itens: [{ unidade: "O GATO DORME", figura: "gato" }, { unidade: "O PATO NADA", figura: "pato" }, { unidade: "O SAPO PULA", figura: "sapo" }], distratores: ["OGATODORME", "OPATONADA", "OSAPOPULA"], grade: ["GATO", "PATO", "SAPO"] },
  EF01LP17: { foco: "frase", itens: [{ unidade: "O GATO BEBE LEITE", figura: "gato" }, { unidade: "O PATO NADA NO LAGO", figura: "pato" }, { unidade: "O SAPO PULA ALTO", figura: "sapo" }], distratores: ["GATO", "PATO", "SAPO"], grade: ["GATO", "PATO", "SAPO", "FLOR"] },
  EF01LP18: { foco: "frase", itens: [{ unidade: "O GATO DORME.", figura: "gato" }, { unidade: "O PATO NADA.", figura: "pato" }, { unidade: "O SAPO PULA.", figura: "sapo" }], distratores: ["o gato dorme", "O PATO NADA", "osapopula"], grade: ["O", "."] },
  EF01LP19: { foco: "frase", itens: [{ unidade: "O PATO NADA.", figura: "pato" }, { unidade: "O SAPO PULA.", figura: "sapo" }, { unidade: "O GATO DORME.", figura: "gato" }], distratores: ["1 FRASE", "2 FRASES", "3 FRASES"], grade: ["PATO", "SAPO", "GATO"] },
  EF01LP20: { foco: "frase", itens: [{ unidade: "O SOL BRILHA.", figura: "sol" }, { unidade: "A NUVEM PASSA.", figura: "nuvem" }, { unidade: "A FLOR ABRE.", figura: "flor" }], distratores: ["PASSA", "BRILHA", "ABRE"], grade: ["SOL", "NUVEM", "FLOR"] },
  EF01LP21: { foco: "palavra", itens: [{ unidade: "CHUVA", figura: "chuva" }, { unidade: "CH", figura: "coracao" }, { unidade: "SOL", figura: "sol" }, { unidade: "LUA", figura: "lua" }], distratores: ["CUVA", "SUVA", "XUVA"], grade: ["CH"] },
  EF01LP22: { foco: "palavra", itens: [{ unidade: "FOLHA", figura: "arvore" }, { unidade: "LH", figura: "familia" }, { unidade: "SOL", figura: "sol" }, { unidade: "BOLA", figura: "bola" }], distratores: ["FOLA", "FOIA", "FOLIA"], grade: ["LH"] },
  EF01LP23: { foco: "palavra", itens: [{ unidade: "NINHO", figura: "ninho" }, { unidade: "GALINHA", figura: "galinha" }, { unidade: "BANHO", figura: "banho" }, { unidade: "JOANINHA", figura: "joaninha" }], distratores: ["NINO", "BAN0", "BAIO"], grade: ["NH"] },
  EF01LP24: { foco: "palavra", itens: [{ unidade: "CARRO", figura: "carro" }, { unidade: "CASA", figura: "casa" }, { unidade: "SOL", figura: "sol" }, { unidade: "RATO", figura: "rato" }], distratores: ["CARO", "CASA", "RATO"], grade: ["RR", "SS"] },
  EF01LP25: { foco: "palavra", itens: [{ unidade: "TREM", figura: "trem" }, { unidade: "FLOR", figura: "flor" }, { unidade: "BOLA", figura: "bola" }, { unidade: "SOL", figura: "sol" }], distratores: ["TEM", "FOR", "PRATO"], grade: ["BR", "PR", "TR", "CR", "FR", "GR"] },
  EF01LP26: { foco: "frase", itens: [{ unidade: "O SAPO PULA.", figura: "sapo" }, { unidade: "O GATO OLHA.", figura: "gato" }, { unidade: "O SOL BRILHA.", figura: "sol" }], distratores: ["SAPO", "GATO", "SOL"], grade: ["SAPO", "GATO", "SOL"] },
};

function imagemNomeada(imagens: ApostilaImagem[], nome: string): ApostilaImagem | undefined {
  const exata = imagens.find((imagem) => normalizar(imagem.legenda ?? "") === normalizar(nome));
  return exata ?? imagemComLegenda(imagens, nome);
}

function misturarGrade(alvos: string[], distratores: string[]): string[] {
  const base = [...alvos, ...distratores].filter(Boolean);
  const grade: string[] = [];
  for (let i = 0; i < 16; i += 1) grade.push(base[(i * 3 + Math.floor(i / 4)) % base.length] ?? "A");
  return grade;
}

function partesDaUnidade(unidade: string, foco: ConfigApostila["foco"]): string[] {
  if (foco === "frase") return unidade.replace(/[.?!]/g, "").split(/\s+/).filter(Boolean);
  if (foco === "palavra") return unidade.split("");
  if (foco === "silaba") return unidade.split("");
  return [unidade];
}

function lacunaDaUnidade(unidade: string, foco: ConfigApostila["foco"]): { antes?: string; depois?: string; dica?: string } {
  if (foco === "frase") {
    const palavras = unidade.replace(/[.?!]/g, "").split(/\s+/).filter(Boolean);
    return { antes: `${palavras.slice(0, -1).join(" ")} `, depois: unidade.endsWith(".") ? "." : "", dica: "palavra" };
  }
  if (foco === "palavra") return { antes: unidade.slice(0, 1), depois: unidade.slice(2), dica: unidade.slice(1, 2) || "" };
  if (foco === "silaba") return { depois: unidade.slice(1), dica: unidade.slice(0, 1) };
  return { depois: unidade.slice(1), dica: unidade.slice(0, 1) };
}

function paginasSom(config: ConfigApostila, escolhas: Array<ItemConteudo & { imagem: ApostilaImagem }>, alvosUnicos: string[], imagensTracado: Record<string, ApostilaImagem>): ApostilaPagina[] {
  const opcoes = (certa: string, indice: number) => [certa, config.distratores[indice % config.distratores.length] ?? "A", config.distratores[(indice + 1) % config.distratores.length] ?? "O"];
  return [
    { etiqueta: "Folha do estudante", titulo: "Atividade 1 — Descubra o começo", blocos: [{ tipo: "escolha-visual", comando: "Circule as figuras que começam como o modelo.", modelo: escolhas[0].imagem, imagens: escolhas.slice(1).map((item) => item.imagem) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 2 — Marque a letra", blocos: [{ tipo: "marcar-som", comando: "Marque a letra que combina com o começo de cada figura.", itens: escolhas.slice(0, 3).map((item, index) => ({ imagem: item.imagem, opcoes: opcoes(item.unidade, index) })) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 3 — Ligue cada figura", blocos: [{ tipo: "ligar-imagens", comando: "Ligue cada letra à figura que começa com ela.", esquerda: escolhas.map((item) => ({ texto: item.unidade })), direita: [...escolhas].reverse().map((item) => item.imagem) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 4 — Cubra o pontilhado", blocos: [{ tipo: "tracado", comando: "Cubra os pontilhados com capricho.", itens: alvosUnicos.slice(0, 4), repeticoes: 5, imagens: imagensTracado }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 5 — Complete a palavra", blocos: [{ tipo: "completar-unidade", comando: "Escreva a letra que falta no começo.", itens: escolhas.map((item) => ({ imagem: item.imagem, depois: item.figura.toUpperCase().slice(1), dica: item.unidade })) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 6 — Procure as letras", blocos: [{ tipo: "procurar-letras", comando: `Procure e circule: ${alvosUnicos.join(", ")}.`, alvos: alvosUnicos, letras: misturarGrade(alvosUnicos, config.distratores) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 7 — Monte com letras", blocos: [{ tipo: "montar-palavra", comando: "Organize as letras para formar o nome da figura.", itens: escolhas.slice(0, 4).map((item) => ({ imagem: item.imagem, partes: item.figura.toUpperCase().split("").reverse(), espacos: item.figura.length })) }] },
  ];
}

function paginasSilaba(config: ConfigApostila, escolhas: Array<ItemConteudo & { imagem: ApostilaImagem }>, alvosUnicos: string[], imagensTracado: Record<string, ApostilaImagem>): ApostilaPagina[] {
  const opcoes = (certa: string, indice: number) => [certa, config.distratores[indice % config.distratores.length] ?? "LA", config.distratores[(indice + 1) % config.distratores.length] ?? "BA"];
  return [
    { etiqueta: "Folha do estudante", titulo: "Atividade 1 — Bata palmas", blocos: [{ tipo: "separar-partes", comando: "Fale o nome da figura, bata palmas e marque quantas partes você ouviu.", itens: escolhas.slice(0, 4).map((item) => ({ imagem: item.imagem, palavra: item.figura.toUpperCase(), opcoes: ["1", "2", "3"] })) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 2 — Marque a sílaba", blocos: [{ tipo: "marcar-som", comando: "Marque a sílaba que aparece na palavra.", itens: escolhas.slice(0, 3).map((item, index) => ({ imagem: item.imagem, opcoes: opcoes(item.unidade, index) })) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 3 — Ligue palavra e figura", blocos: [{ tipo: "ligar-imagens", comando: "Ligue a palavra à figura correspondente.", esquerda: escolhas.map((item) => ({ texto: item.figura.toUpperCase() })), direita: [...escolhas].reverse().map((item) => item.imagem) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 4 — Cubra as sílabas", blocos: [{ tipo: "tracado", comando: "Cubra os pontilhados com capricho.", itens: alvosUnicos.slice(0, 4), repeticoes: 4, imagens: imagensTracado }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 5 — Complete a sílaba", blocos: [{ tipo: "completar-unidade", comando: "Escreva a parte que falta.", itens: escolhas.map((item) => ({ imagem: item.imagem, ...lacunaDaUnidade(item.unidade, "silaba") })) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 6 — Caça-sílabas", blocos: [{ tipo: "procurar-letras", comando: `Procure e circule: ${alvosUnicos.join(", ")}.`, alvos: alvosUnicos, letras: misturarGrade(alvosUnicos, config.distratores) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 7 — Monte a palavra", blocos: [{ tipo: "montar-palavra", comando: "Use as letras para montar o nome da figura.", itens: escolhas.slice(0, 4).map((item) => ({ imagem: item.imagem, partes: partesDaUnidade(item.figura.toUpperCase(), "palavra"), espacos: item.figura.length })) }] },
  ];
}

function paginasPalavra(config: ConfigApostila, escolhas: Array<ItemConteudo & { imagem: ApostilaImagem }>, alvosUnicos: string[], imagensTracado: Record<string, ApostilaImagem>): ApostilaPagina[] {
  const questoes = escolhas.slice(0, 3).map((item, index) => ({ pergunta: `${index + 1}. Marque a figura de ${item.unidade}.`, imagens: [item.imagem, ...escolhas.filter((outro) => outro.figura !== item.figura).slice(0, 2).map((outro) => outro.imagem)] }));
  return [
    { etiqueta: "Folha do estudante", titulo: "Atividade 1 — Palavra e figura", blocos: [{ tipo: "ligar-imagens", comando: "Ligue cada palavra à sua figura.", esquerda: escolhas.map((item) => ({ texto: item.unidade })), direita: [...escolhas].reverse().map((item) => item.imagem) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 2 — Marque a figura", blocos: [{ tipo: "marcar-figura", comando: "Marque uma resposta em cada atividade.", questoes }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 3 — Complete a palavra", blocos: [{ tipo: "completar-unidade", comando: "Complete a parte que falta.", itens: escolhas.map((item) => ({ imagem: item.imagem, ...lacunaDaUnidade(item.unidade, "palavra") })) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 4 — Cubra a palavra", blocos: [{ tipo: "tracado", comando: "Cubra os pontilhados e depois copie no espaço.", itens: alvosUnicos.slice(0, 4), repeticoes: 2, imagens: imagensTracado }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 5 — Caça-palavras", blocos: [{ tipo: "procurar-letras", comando: `Procure e circule: ${alvosUnicos.join(", ")}.`, alvos: alvosUnicos, letras: misturarGrade(alvosUnicos, config.distratores) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 6 — Monte a palavra", blocos: [{ tipo: "montar-palavra", comando: "Organize as letras para formar o nome da figura.", itens: escolhas.slice(0, 4).map((item) => ({ imagem: item.imagem, partes: partesDaUnidade(item.unidade, "palavra").reverse(), espacos: item.unidade.length })) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 7 — Escreva do seu jeito", blocos: [{ tipo: "linhas", enunciado: "Escolha duas figuras da folha e escreva as palavras.", linhas: 5 }] },
  ];
}

function paginasFrase(config: ConfigApostila, escolhas: Array<ItemConteudo & { imagem: ApostilaImagem }>, alvosUnicos: string[], imagensTracado: Record<string, ApostilaImagem>): ApostilaPagina[] {
  const questoes = escolhas.slice(0, 3).map((item, index) => ({ pergunta: `${index + 1}. Marque a figura da frase: ${item.unidade}`, imagens: [item.imagem, ...escolhas.filter((outro) => outro.figura !== item.figura).slice(0, 2).map((outro) => outro.imagem)] }));
  return [
    { etiqueta: "Folha do estudante", titulo: "Atividade 1 — Ordene a frase", blocos: [{ tipo: "ordenar-frase", comando: "Organize as palavras e copie a frase na linha.", itens: escolhas.slice(0, 3).map((item) => ({ imagem: item.imagem, palavras: partesDaUnidade(item.unidade, "frase").reverse() })) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 2 — Frase e figura", blocos: [{ tipo: "marcar-figura", comando: "Marque a figura que combina com cada frase.", questoes }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 3 — Complete a frase", blocos: [{ tipo: "completar-unidade", comando: "Escreva a palavra que falta.", itens: escolhas.slice(0, 3).map((item) => ({ imagem: item.imagem, ...lacunaDaUnidade(item.unidade, "frase") })) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 4 — Copie com atenção", blocos: [{ tipo: "tracado", comando: "Cubra os pontilhados e copie a frase no espaço.", itens: escolhas.slice(0, 3).map((item) => item.unidade), repeticoes: 1, imagens: imagensTracado }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 5 — Procure palavras", blocos: [{ tipo: "procurar-letras", comando: `Procure e circule: ${alvosUnicos.join(", ")}.`, alvos: alvosUnicos, letras: misturarGrade(alvosUnicos, config.distratores) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 6 — Ligue a frase", blocos: [{ tipo: "ligar-imagens", comando: "Ligue cada frase à figura correspondente.", esquerda: escolhas.map((item) => ({ texto: item.unidade })), direita: [...escolhas].reverse().map((item) => item.imagem) }] },
    { etiqueta: "Folha do estudante", titulo: "Atividade 7 — Escreva uma frase", blocos: [{ tipo: "linhas", enunciado: "Escolha uma figura e escreva uma frase curta.", linhas: 5 }] },
  ];
}

function paginasInfantisPadrao(aula: Aula, imagens: ApostilaImagem[]): ApostilaPagina[] | null {
  const config = CONFIGS_APOSTILA[aula.codigo];
  if (!config) return null;
  const itens = config.itens
    .map((item) => ({ ...item, imagem: imagemNomeada(imagens, item.figura) }))
    .filter((item): item is ItemConteudo & { imagem: ApostilaImagem } => Boolean(item.imagem));
  if (itens.length < 3) return null;

  const alvosUnicos = [...new Set(config.grade)];
  const escolhas = itens.slice(0, 4);
  const imagensTracado = Object.fromEntries(
    alvosUnicos.slice(0, 4).flatMap((alvo) => {
      const imagem = itens.find((item) => item.unidade === alvo)?.imagem;
      return imagem ? [[alvo, imagem] as const] : [];
    }),
  );

  if (config.foco === "som") return paginasSom(config, escolhas, alvosUnicos, imagensTracado);
  if (config.foco === "silaba") return paginasSilaba(config, escolhas, alvosUnicos, imagensTracado);
  if (config.foco === "palavra") return paginasPalavra(config, escolhas, alvosUnicos, imagensTracado);
  return paginasFrase(config, escolhas, alvosUnicos, imagensTracado);
}

/** Adaptações impressas — orientação docente fixa, não gerada por IA. */
const ADAPTACOES: string[] = [
  "TEA: antecipe a sequência da folha (mostre as etapas antes de começar), aceite resposta apontando e mantenha o mesmo comando em todas as questões.",
  "TDAH: divida a folha em duas partes, marque uma pausa de movimento no meio e destaque com lápis de cor a questão atual.",
  "Dislexia: leia o enunciado em voz alta, aceite resposta oral, e não conte erro de ortografia como erro de conteúdo.",
  "Deficiência intelectual: reduza para as duas primeiras questões, use os objetos reais da sala e repita a prática guiada antes de cobrar.",
  "Dificuldade motora na escrita: aceite marcar com X, colar figura ou responder falando; ofereça linhas mais largas.",
];

export function gerarApostila(aula: Aula, extras: ApostilaImagem[] = []): Apostila {
  const imagensAula = imagensDaAula(aula);
  const imagens = [...imagensAula];
  for (const e of extras) {
    if (imagens.length >= 12) break;
    if (!imagens.some((i) => i.url === e.url)) imagens.push(e);
  }

  const paginas: ApostilaPagina[] = [];

  // ---------------- Guia do professor · folha 1 ----------------
  const guia1: ApostilaBloco[] = [
    { tipo: "texto", titulo: "O que a criança vai aprender", texto: aula.missao },
    { tipo: "lista", titulo: "Objetivos da aula", itens: aula.objetivos ?? [] },
  ];
  if (aula.conhecimentosPrevios?.length)
    guia1.push({ tipo: "lista", titulo: "O que a criança já precisa saber", itens: aula.conhecimentosPrevios });
  guia1.push({
    tipo: "lista",
    titulo: "Como conduzir (30 a 40 minutos)",
    itens: [
      "1. Acolhimento e história de abertura — 5 min (leia o roteiro de fala).",
      "2. Explicação com material concreto — 8 min.",
      "3. Exemplo resolvido junto com a turma — 5 min.",
      "4. Prática guiada: a criança tenta, o professor acompanha — 7 min.",
      "5. Folha do estudante: prática independente — 10 min.",
      "6. Fechamento: retomar o resumo e entregar a carta da família — 5 min.",
    ],
  });
  if (aula.narrativa)
    guia1.push({
      tipo: "passos",
      titulo: `Roteiro de fala — ${aula.narrativa.titulo}`,
      passos: [aula.narrativa.contexto, aula.narrativa.problema, aula.narrativa.convite],
    });
  paginas.push({
    etiqueta: "Guia do professor",
    titulo: aula.titulo,
    subtitulo: "Plano de aula e roteiro de condução",
    blocos: guia1,
  });

  // ---------------- Guia do professor · folha 2 ----------------
  const guia2: ApostilaBloco[] = [
    { tipo: "passos", titulo: "Explicação passo a passo", passos: paragrafos(aula.explicacao) },
  ];
  const niveis = aula.explicacoesNiveis ?? {};
  const outrosJeitos = [niveis.nivel2, niveis.nivel3, niveis.nivel4].filter(
    (t): t is string => !!t && t.trim().length > 0,
  );
  if (outrosJeitos.length)
    guia2.push({ tipo: "lista", titulo: "Se a criança não entendeu, explique assim", itens: outrosJeitos });
  guia2.push({
    tipo: "passos",
    titulo: `Exemplo resolvido — ${aula.exemploResolvido.enunciado}`,
    passos: [...aula.exemploResolvido.passos, `Resposta: ${aula.exemploResolvido.resposta}`],
  });
  guia2.push({
    tipo: "texto",
    titulo: "Prática guiada (faça junto antes da folha)",
    texto: `${aula.atividadeGuiada.enunciado}\nResposta: ${aula.atividadeGuiada.resposta}\nComo explicar: ${aula.atividadeGuiada.explicacao}`,
  });
  guia2.push({ tipo: "lista", titulo: "Adaptações para a sala de aula", itens: ADAPTACOES });
  guia2.push({
    tipo: "aviso",
    titulo: "Feedback que ensina",
    texto:
      "Nunca responda só “certo” ou “errado”. Diga o que a criança fez e por que funciona: “Você acertou porque contou um por um e não repetiu nenhum.”",
  });
  paginas.push({
    etiqueta: "Guia do professor",
    titulo: aula.titulo,
    subtitulo: "Como ensinar, como explicar de novo e como adaptar",
    blocos: guia2,
  });

  // ---------------- Folhas do estudante ----------------
  // Todas as aulas de Português do 1º ano usam tarefas concretas, exclusivamente no papel.
  const folhasPiloto = aula.codigo === "EF01LP01"
    ? paginasInfantisEF01LP01(imagens)
    : paginasInfantisPadrao(aula, imagens);
  if (folhasPiloto) paginas.push(...folhasPiloto);

  // Compatibilidade para outras disciplinas e anos ainda não convertidos.
  if (!folhasPiloto) {
  const folha1: ApostilaBloco[] = [
    { tipo: "linhas", titulo: "Nome", enunciado: "Escreva seu nome:", linhas: 1 },
  ];
  const interativo = aula.exemploResolvido.interativo;
  if (interativo)
    folha1.push({
      tipo: "contagem",
      titulo: "Atividade 1 — observe e conte",
      imagem: interativo.imagemUrl,
      quantidade: interativo.quantidade,
      rotulo: interativo.pergunta ?? `Quantas ${interativo.nomeItemPlural ?? interativo.nomeItem + "s"} você vê?`,
    });
  if (imagens.length)
    folha1.push({
      tipo: "imagens",
      titulo: interativo ? "Atividade 2 — fale o nome de cada figura e ligue com o que o professor pedir" : "Atividade 1 — fale o nome de cada figura",
      imagens: imagens.slice(0, 8),
    });
  folha1.push({
    tipo: "linhas",
    titulo: "Atividade com a turma",
    enunciado: aula.atividadeGuiada.enunciado,
    linhas: 2,
  });
  paginas.push({
    etiqueta: "Folha do estudante",
    titulo: aula.titulo,
    subtitulo: "Observe, fale e registre",
    blocos: folha1,
  });

  // ---------------- Folha do estudante · 2 (exercícios) ----------------
  const folha2: ApostilaBloco[] = (aula.exercicios ?? []).slice(0, 6).map((ex, i) => ({
    tipo: "linhas" as const,
    titulo: `Questão ${i + 1}`,
    enunciado: ex.enunciado,
    linhas: 2,
  }));
  if (aula.quiz?.length)
    folha2.push({
      tipo: "alternativas",
      titulo: "Marque a resposta correta",
      questoes: aula.quiz.slice(0, 4).map((q) => ({ enunciado: q.pergunta, opcoes: q.opcoes })),
    });
  folha2.push({ tipo: "linhas", titulo: "Desafio", enunciado: aula.desafio.enunciado, linhas: 3 });
  paginas.push({
    etiqueta: "Folha do estudante",
    titulo: aula.titulo,
    subtitulo: "Agora é você — responda do seu jeito",
    blocos: folha2,
  });
  }

  if (!folhasPiloto) {
    // ---------------- Gabarito ----------------
    const gabarito: ApostilaBloco[] = [
      {
        tipo: "lista",
        titulo: "Respostas das questões",
        itens: (aula.exercicios ?? [])
          .slice(0, 6)
          .map((ex, i) => `Questão ${i + 1}: ${ex.resposta}${ex.dica ? ` · Dica se travar: ${ex.dica}` : ""}`),
      },
    ];
    if (aula.quiz?.length)
      gabarito.push({
        tipo: "lista",
        titulo: "Marque a resposta correta",
        itens: aula.quiz
          .slice(0, 4)
          .map(
            (q, i) =>
              `${i + 1}. ${q.pergunta} → ${q.opcoes[q.correta] ?? "-"}. Por quê: ${q.explicacao}`,
          ),
      });
    gabarito.push({ tipo: "texto", titulo: "Desafio", texto: aula.desafio.resposta });
    gabarito.push({
      tipo: "lista",
      titulo: "O que observar na criança",
      itens: [
        "Consegue fazer sozinha, com apoio ou ainda não consegue?",
        "Precisou de quantas repetições do comando?",
        "Manteve atenção até o fim da folha?",
        ...(aula.revisao?.pontos ?? []).map((p) => `Domina: ${p}`),
      ],
    });
    paginas.push({
      etiqueta: "Gabarito",
      titulo: aula.titulo,
      subtitulo: "Uso exclusivo do professor — não entregue à criança",
      blocos: gabarito,
    });

    // ---------------- Carta para a família ----------------
    paginas.push({
      etiqueta: "Carta para a família",
      titulo: "O que fizemos hoje na escola",
      subtitulo: aula.titulo,
      blocos: [
        { tipo: "texto", titulo: "Hoje a turma aprendeu", texto: aula.missao },
        { tipo: "lista", titulo: "Para lembrar em casa", itens: aula.revisao?.pontos ?? [] },
        ...(aula.revisao?.dica
          ? [{ tipo: "aviso" as const, titulo: "Dica de ouro", texto: aula.revisao.dica }]
          : []),
        { tipo: "texto", titulo: "Missão em família (10 minutos)", texto: aula.conclusao },
        {
          tipo: "linhas",
          titulo: "Recado do responsável",
          enunciado: "Como foi a missão em casa?",
          linhas: 3,
        },
      ],
    });
  }

  return {
    codigo: aula.codigo,
    ano: aula.ano,
    disciplina: aula.disciplina,
    titulo: aula.titulo,
    objetivoPrincipal: aula.missao,
    paginas,
    termos: termosDaAula(aula),
  };
}
