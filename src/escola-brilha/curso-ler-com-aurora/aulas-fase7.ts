import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as predio } from "@/assets/neuro-treino/objetos/predio.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as fogo } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";
import { url as casaAntiga } from "@/assets/neuro-treino/objetos/casa-antiga.png.asset.json";
import { url as casaModerna } from "@/assets/neuro-treino/objetos/casa-moderna.png.asset.json";
import { url as bicicletaAntiga } from "@/assets/neuro-treino/objetos/bicicleta-antiga.png.asset.json";
import { url as bicicletaModerna } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as peixe } from "@/assets/neuro-treino/objetos/peixe.png.asset.json";


/**
 * Ler com Aurora — Fase 7: Vocabulário Ativo
 * ------------------------------------------------
 * 20 aulas · 4 semanas · 15 min/dia
 *  - Semana 1 (aqui): Sinônimos por imagem
 *  - Semana 2: Antônimos por contraste visual
 *  - Semana 3: Campos semânticos
 *  - Semana 4: Palavra na frase + Diploma "Colecionador de Palavras"
 *
 * Base: Beck & McKeown (2013) — ensino explícito de palavras Tier-2.
 * Contrato: mem://preferences/contrato-ler-com-aurora-fases-6-8
 */

const mascote = brilha;
const BASE =
  "Vocabulário ativo por ensino explícito de sinônimos (Beck & McKeown 2013). A criança escuta uma palavra-alvo, vê a imagem e escolhe outra palavra que quer dizer o mesmo — ampliando o léxico ativo, base de compreensão leitora.";

/* ============================================================
 * SEMANA 1 — Sinônimos por imagem
 * ============================================================ */

const a1: AulaEI = {
  slug: "f7-dia-01-sinonimos-casa-bonito",
  titulo: "Dia 1 · CASA = LAR · BONITO = LINDO",
  icone: "🏠",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Começa a Fase do Vocabulário! Vou te mostrar palavras que dizem a MESMA coisa. Quanto mais palavras você conhece, melhor você lê.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: casa,
      palavra: "CASA",
      sinonimo: "LAR",
      distratores: ["SAPATO", "PORTA"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que CASA?",
      elogio: "Casa e lar — dois nomes para o lugar onde a gente mora!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: flor,
      palavra: "BONITO",
      sinonimo: "LINDO",
      distratores: ["FEIO", "SUJO"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que BONITO?",
      elogio: "Bonito e lindo dizem a mesma coisa!",
    },
    {
      tipo: "celebracao",
      medalha: "Colecionador de Palavras · Dia 1",
      mascoteUrl: mascote,
      falaFinal: "Você colecionou LAR e LINDO. Amanhã: FELIZ e TRISTE ganham amigos!",
    },
  ],
};

const a2: AulaEI = {
  slug: "f7-dia-02-sinonimos-feliz-triste",
  titulo: "Dia 2 · FELIZ = ALEGRE · TRISTE = CHATEADO",
  icone: "😊",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje: palavras de sentimento. Duas por dia, sem pressa.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: menina,
      palavra: "FELIZ",
      sinonimo: "ALEGRE",
      distratores: ["CHORANDO", "COM MEDO"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que FELIZ?",
      elogio: "Feliz e alegre — a mesma cara de sorriso!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: quadroTriste,
      palavra: "TRISTE",
      sinonimo: "CHATEADO",
      distratores: ["ALEGRE", "COM FOME"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que TRISTE?",
      elogio: "Triste e chateado — os dois sentem a mesma coisa.",
    },
    {
      tipo: "celebracao",
      medalha: "Colecionador de Palavras · Dia 2",
      mascoteUrl: mascote,
      falaFinal: "Duas palavras novas na coleção. Amanhã: GRANDE e PEQUENO!",
    },
  ],
};

const a3: AulaEI = {
  slug: "f7-dia-03-sinonimos-grande-pequeno",
  titulo: "Dia 3 · GRANDE = ENORME · PEQUENO = MIÚDO",
  icone: "🦁",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje: tamanhos. Palavras diferentes para dizer a mesma coisa!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: leao,
      palavra: "GRANDE",
      sinonimo: "ENORME",
      distratores: ["PEQUENO", "MOLE"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que GRANDE?",
      elogio: "Grande e enorme — o leão é os dois!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: joaninha,
      palavra: "PEQUENO",
      sinonimo: "MIÚDO",
      distratores: ["ENORME", "PESADO"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que PEQUENO?",
      elogio: "Pequeno e miúdo — a joaninha cabe no seu dedo!",
    },
    {
      tipo: "celebracao",
      medalha: "Colecionador de Palavras · Dia 3",
      mascoteUrl: mascote,
      falaFinal: "ENORME e MIÚDO na coleção. Amanhã: velocidade!",
    },
  ],
};

const a4: AulaEI = {
  slug: "f7-dia-04-sinonimos-rapido-correr",
  titulo: "Dia 4 · RÁPIDO = VELOZ · CORRER = APRESSAR",
  icone: "🐇",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Palavras de movimento! Vamos acelerar o vocabulário.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: carro,
      palavra: "RÁPIDO",
      sinonimo: "VELOZ",
      distratores: ["LENTO", "PARADO"],
      instrucaoAudio: "Qual palavra quer dizer o mesmo que RÁPIDO?",
      elogio: "Rápido e veloz — o carro corre igual!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: coelho,
      palavra: "CORRER",
      sinonimo: "APRESSAR",
      distratores: ["DORMIR", "PARAR"],
      instrucaoAudio: "Qual palavra quer dizer quase o mesmo que CORRER?",
      elogio: "Correr e apressar — o coelho não fica parado!",
    },
    {
      tipo: "celebracao",
      medalha: "Colecionador de Palavras · Dia 4",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: revisão da semana e medalha grande!",
    },
  ],
};

const a5: AulaEI = {
  slug: "f7-dia-05-sinonimos-revisao",
  titulo: "Dia 5 · Revisão — 4 duplas de palavras",
  icone: "🏅",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Revisão da semana! Vamos misturar todas as palavras que você aprendeu. Pense bem antes de escolher.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: gato,
      palavra: "BONITO",
      sinonimo: "LINDO",
      distratores: ["FEIO", "PEQUENO"],
      instrucaoAudio: "Qual quer dizer o mesmo que BONITO?",
      elogio: "Lembrou! Bonito = lindo.",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: menino,
      palavra: "ALEGRE",
      sinonimo: "FELIZ",
      distratores: ["TRISTE", "CANSADO"],
      instrucaoAudio: "Qual quer dizer o mesmo que ALEGRE?",
      elogio: "Alegre = feliz!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: sorvete,
      palavra: "ENORME",
      sinonimo: "GRANDE",
      distratores: ["MIÚDO", "GELADO"],
      instrucaoAudio: "Qual quer dizer o mesmo que ENORME?",
      elogio: "Enorme = grande!",
    },
    {
      tipo: "sinonimoImagem",
      imagemUrl: bolo,
      palavra: "VELOZ",
      sinonimo: "RÁPIDO",
      distratores: ["LENTO", "DOCE"],
      instrucaoAudio: "Qual quer dizer o mesmo que VELOZ?",
      elogio: "Veloz = rápido!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎒 Missão em Família — Coleção de Palavras",
      convite:
        "Escolha DUAS palavras que você aprendeu esta semana e ensine para alguém da família. Peça para essa pessoa usar a palavra numa frase.",
      dicaAdulto:
        "Sinônimos aprendidos nesta semana: casa/lar, bonito/lindo, feliz/alegre, triste/chateado, grande/enorme, pequeno/miúdo, rápido/veloz, correr/apressar. Use-as em conversas do dia a dia — repetição em contexto real fixa o vocabulário melhor que qualquer exercício.",
    },
    {
      tipo: "celebracao",
      medalha: "🏅 Colecionador de Palavras · Semana 1",
      mascoteUrl: mascote,
      falaFinal:
        "Você fechou a primeira semana da Fase do Vocabulário! Semana 2: palavras que dizem o CONTRÁRIO.",
    },
  ],
};

/* ============================================================
 * SEMANA 2 — Antônimos por contraste visual
 * ============================================================ */

const BASE_ANT =
  "Antônimos por contraste visual (Beck & McKeown 2013; Nagy 1988). A criança vê a palavra-alvo com uma imagem prototípica e escolhe entre 3 imagens qual mostra o CONTRÁRIO — o contraste facilita a fixação do par lexical.";

const a6: AulaEI = {
  slug: "f7-dia-06-antonimos-grande-alto",
  titulo: "Dia 6 · GRANDE ↔ PEQUENO · ALTO ↔ BAIXO",
  icone: "🦁",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 2! Agora vamos brincar de CONTRÁRIOS. Eu mostro uma imagem, você acha a imagem do contrário.",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: leao,
      palavra: "GRANDE",
      antonimo: "PEQUENO",
      opcoes: [
        { nome: "JOANINHA", imagemUrl: joaninha, correta: true },
        { nome: "PRÉDIO", imagemUrl: predio, correta: false },
        { nome: "ÁRVORE", imagemUrl: arvore, correta: false },
      ],
      instrucaoAudio: "O leão é GRANDE. Qual imagem mostra o contrário — algo PEQUENO?",
      elogio: "A joaninha é pequenininha!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: arvore,
      palavra: "ALTO",
      antonimo: "BAIXO",
      opcoes: [
        { nome: "JOANINHA", imagemUrl: joaninha, correta: true },
        { nome: "PRÉDIO", imagemUrl: predio, correta: false },
        { nome: "LEÃO", imagemUrl: leao, correta: false },
      ],
      instrucaoAudio: "A árvore é ALTA, lá em cima. Qual bichinho é BAIXINHO, pertinho do chão?",
      elogio: "Isso! A joaninha é bem BAIXINHA — cabe no seu dedo!",
    },
    {
      tipo: "celebracao",
      medalha: "Contrários · Dia 6",
      mascoteUrl: mascote,
      falaFinal: "GRANDE↔PEQUENO e ALTO↔BAIXO na coleção. Amanhã: DIA↔NOITE!",
    },
  ],
};

const a7: AulaEI = {
  slug: "f7-dia-07-antonimos-dia-quente",
  titulo: "Dia 7 · DIA ↔ NOITE · QUENTE ↔ FRIO",
  icone: "☀️",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Hoje: o céu e a temperatura. Duas duplas de contrários!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: sol,
      palavra: "DIA",
      antonimo: "NOITE",
      opcoes: [
        { nome: "LUA", imagemUrl: lua, correta: true },
        { nome: "FLOR", imagemUrl: flor, correta: false },
        { nome: "CASA", imagemUrl: casa, correta: false },
      ],
      instrucaoAudio: "O sol aparece no DIA. Qual imagem mostra a NOITE?",
      elogio: "A lua vem à noite!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: fogo,
      palavra: "QUENTE",
      antonimo: "FRIO",
      opcoes: [
        { nome: "SORVETE", imagemUrl: sorvete, correta: true },
        { nome: "BOLO", imagemUrl: bolo, correta: false },
        { nome: "SOL", imagemUrl: sol, correta: false },
      ],
      instrucaoAudio: "O fogo é QUENTE. Qual imagem mostra algo FRIO?",
      elogio: "O sorvete é geladinho!",
    },
    {
      tipo: "celebracao",
      medalha: "Contrários · Dia 7",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: sentimentos e coisas novas e antigas!",
    },
  ],
};

const a8: AulaEI = {
  slug: "f7-dia-08-antonimos-feliz-novo",
  titulo: "Dia 8 · FELIZ ↔ TRISTE · NOVO ↔ ANTIGO",
  icone: "😊",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Sentimentos e tempo. Vamos ver o contrário de cada um.",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: quadroAlegre,
      palavra: "FELIZ",
      antonimo: "TRISTE",
      opcoes: [
        { nome: "TRISTE", imagemUrl: quadroTriste, correta: true },
        { nome: "MENINA", imagemUrl: menina, correta: false },
        { nome: "GATO", imagemUrl: gato, correta: false },
      ],
      instrucaoAudio: "Esse rosto é FELIZ. Qual imagem mostra o contrário, TRISTE?",
      elogio: "Feliz e triste — sentimentos opostos!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: bicicletaModerna,
      palavra: "NOVO",
      antonimo: "ANTIGO",
      opcoes: [
        { nome: "BICICLETA ANTIGA", imagemUrl: bicicletaAntiga, correta: true },
        { nome: "CARRO", imagemUrl: carro, correta: false },
        { nome: "CASA NOVA", imagemUrl: casaModerna, correta: false },
      ],
      instrucaoAudio: "A bicicleta moderna é NOVA. Qual imagem mostra algo ANTIGO?",
      elogio: "A bicicleta antiga é de outra época!",
    },
    {
      tipo: "celebracao",
      medalha: "Contrários · Dia 8",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: lugares e quantidades!",
    },
  ],
};

const a9: AulaEI = {
  slug: "f7-dia-09-antonimos-cidade-muitos",
  titulo: "Dia 9 · CIDADE ↔ CAMPO · MUITOS ↔ POUCOS",
  icone: "🏙️",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote: "Lugares e quantidades. Ache o contrário!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: cidade,
      palavra: "CIDADE",
      antonimo: "CAMPO",
      opcoes: [
        { nome: "CAMPO", imagemUrl: campo, correta: true },
        { nome: "PRÉDIO", imagemUrl: predio, correta: false },
        { nome: "CARRO", imagemUrl: carro, correta: false },
      ],
      instrucaoAudio: "Aqui é a CIDADE. Qual imagem mostra o contrário, o CAMPO?",
      elogio: "No campo tem árvores, no céu aberto!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: criancasGrupo,
      palavra: "MUITOS",
      antonimo: "POUCOS",
      opcoes: [
        { nome: "UMA CRIANÇA", imagemUrl: menino, correta: true },
        { nome: "CIDADE CHEIA", imagemUrl: cidade, correta: false },
        { nome: "PEIXE", imagemUrl: peixe, correta: false },
      ],
      instrucaoAudio: "No grupo tem MUITAS crianças. Qual imagem mostra POUCOS?",
      elogio: "Uma criança sozinha é pouco!",
    },
    {
      tipo: "celebracao",
      medalha: "Contrários · Dia 9",
      mascoteUrl: mascote,
      falaFinal: "Amanhã: revisão da semana e medalha grande!",
    },
  ],
};

const a10: AulaEI = {
  slug: "f7-dia-10-antonimos-revisao",
  titulo: "Dia 10 · Revisão — Contrários",
  icone: "🏅",
  bncc: ["EF01LP24"],
  duracaoMin: 15,
  baseCientifica: BASE_ANT,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Revisão dos CONTRÁRIOS! Mistura de todos os pares. Pense bem antes de escolher.",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: joaninha,
      palavra: "PEQUENO",
      antonimo: "GRANDE",
      opcoes: [
        { nome: "LEÃO", imagemUrl: leao, correta: true },
        { nome: "FLOR", imagemUrl: flor, correta: false },
        { nome: "GATO", imagemUrl: gato, correta: false },
      ],
      instrucaoAudio: "A joaninha é PEQUENA. Qual imagem mostra algo GRANDE?",
      elogio: "Lembrou! Grande é o contrário de pequeno.",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: lua,
      palavra: "NOITE",
      antonimo: "DIA",
      opcoes: [
        { nome: "SOL", imagemUrl: sol, correta: true },
        { nome: "CASA", imagemUrl: casa, correta: false },
        { nome: "FLOR", imagemUrl: flor, correta: false },
      ],
      instrucaoAudio: "A lua aparece à NOITE. Qual imagem mostra o DIA?",
      elogio: "O sol é do dia!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: quadroTriste,
      palavra: "TRISTE",
      antonimo: "FELIZ",
      opcoes: [
        { nome: "FELIZ", imagemUrl: quadroAlegre, correta: true },
        { nome: "MENINO", imagemUrl: menino, correta: false },
        { nome: "COELHO", imagemUrl: coelho, correta: false },
      ],
      instrucaoAudio: "Esse rosto é TRISTE. Qual imagem mostra FELIZ?",
      elogio: "Feliz é o contrário de triste!",
    },
    {
      tipo: "antonimoContraste",
      imagemUrl: campo,
      palavra: "CAMPO",
      antonimo: "CIDADE",
      opcoes: [
        { nome: "CIDADE", imagemUrl: cidade, correta: true },
        { nome: "ÁRVORE", imagemUrl: arvore, correta: false },
        { nome: "SORVETE", imagemUrl: sorvete, correta: false },
      ],
      instrucaoAudio: "Aqui é o CAMPO. Qual imagem mostra a CIDADE?",
      elogio: "Na cidade tem prédios!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "🎒 Missão em Família — Caça aos Contrários",
      convite:
        "Escolha 3 pares de contrários da semana e mostre para alguém da família. Peça para essa pessoa dar outros exemplos de contrários em casa (ex.: aberto/fechado, quente/frio).",
      dicaAdulto:
        "Pares desta semana: grande/pequeno, alto/baixo, dia/noite, quente/frio, feliz/triste, novo/antigo, cidade/campo, muitos/poucos. Use o dia a dia para reforçar: 'Olha, o café está QUENTE — o sorvete é FRIO'. Contraste explícito acelera a memorização (Nagy 1988).",
    },
    {
      tipo: "celebracao",
      medalha: "🏅 Colecionador de Palavras · Semana 2",
      mascoteUrl: mascote,
      falaFinal:
        "Semana 2 fechada! Você já sabe palavras iguais E palavras contrárias. Semana 3: palavras que andam juntas — campos semânticos!",
    },
  ],
};

/* ============================================================
 * Curso — Fase 7 (Semanas 1-2 no ar; Semanas 3-4 pendentes)
 * ============================================================ */

export const cursoLerComAuroraFase7: CursoEI = {
  slug: "ler-com-aurora-fase7",
  serie: "pre2",
  serieLabel: "Pré II / 1º Ano (Vocabulário)",
  titulo: "Vocabulário Ativo",
  descricao:
    "Palavras que dizem a mesma coisa, palavras contrárias e palavras que andam juntas. Quanto mais palavras, melhor a leitura.",
  corPrimaria: "#a855f7",
  corSecundaria: "#3b0764",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "f7-semana-01",
      numero: 1,
      titulo: "Semana 1 · Sinônimos por imagem",
      subtitulo: "Colecionador de Palavras",
      aulas: [a1, a2, a3, a4, a5],
    },
    {
      slug: "f7-semana-02",
      numero: 2,
      titulo: "Semana 2 · Antônimos por contraste",
      subtitulo: "Caça aos Contrários",
      aulas: [a6, a7, a8, a9, a10],
    },
  ],
};

export function getAulaLerComAuroraFase7(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase7.unidades) {
    const found = u.aulas.find((a) => a.slug === slug);
    if (found) return found;
  }
  return undefined;
}

