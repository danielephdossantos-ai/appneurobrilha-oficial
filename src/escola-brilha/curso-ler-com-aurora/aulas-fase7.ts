import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as sorvete } from "@/assets/neuro-treino/objetos/sorvete.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";

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
 * Curso — Fase 7 (Semana 1 no ar; Semanas 2–4 pendentes)
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
  ],
};

export function getAulaLerComAuroraFase7(slug: string): AulaEI | undefined {
  for (const u of cursoLerComAuroraFase7.unidades) {
    const found = u.aulas.find((a) => a.slug === slug);
    if (found) return found;
  }
  return undefined;
}
