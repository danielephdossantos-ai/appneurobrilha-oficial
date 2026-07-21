import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as estrelas } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";

/**
 * Contar com Pip — FASE 1 · Subitizing (1–4)
 * -------------------------------------------
 * Reconhecer quantidade "de olhada", sem contar. Base:
 *  - Kaufman et al. (1949): 3 tipos de julgamento numérico (subitizing 1–4).
 *  - Clements (1999) e Clements & Sarama: subitizing perceptual e conceitual.
 *  - Dehaene "The Number Sense": senso numérico inato para pequenas quantidades.
 *
 * 20 missões · 4 semanas · 1 missão/dia (~10 min).
 * SEMANA 1 (implementada aqui):
 *  - Dia 1: 1 e 2 — introdução ao "ver de olhada"
 *  - Dia 2: 2 e 3
 *  - Dia 3: 3 e 4
 *  - Dia 4: Padrão de dado/dominó (1–4)
 *  - Dia 5: Dedinhos do Pip + medalha semanal
 */

const mascote = brilha;

const dia01: AulaEI = {
  slug: "pip-f1-s1-d1-um-e-dois",
  titulo: "Dia 1 · Vejo 1, vejo 2",
  icone: "👀",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Oi, eu sou o Pip! Hoje vamos treinar o olho de matemático: bater o olho e já saber se é UM ou se são DOIS. Bora?",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 1,
      itemPlural: "bolas",
      instrucaoAudio: "Olha rapidinho e me diz: quantas bolas você viu?",
      perguntaAudio: "Quantas bolas você viu?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "Isso! UMA bolinha só!",
      feedbackErro: "Era só UMA. Vamos ver de novo?",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 2,
      itemPlural: "estrelas",
      instrucaoAudio: "Agora estrelas. Olha rapidinho!",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "Boa! Eram DUAS estrelas!",
      feedbackErro: "Eram DUAS. Vamos olhar de novo?",
    },
    {
      tipo: "contarBolas",
      imagemUrl: coracao,
      quantidade: 2,
      itemSingular: "coração",
      itemPlural: "corações",
      instrucaoAudio: "Toca em cada coração para confirmar. UM, DOIS.",
      elogio: "Isso! Dois coraçõezinhos!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Um grupo tem UMA e outro tem DUAS.",
      perguntaAudio: "Qual grupo tem MAIS?",
      imagemUrl: joaninha,
      itemPlural: "joaninhas",
      alvo: "mais",
      opcoes: [
        { qtd: 1, correta: false },
        { qtd: 2, correta: true },
      ],
      feedbackAcerto: "Isso! DUAS é mais do que UMA!",
      feedbackErro: "Olha de novo: aqui tem uma, aqui tem duas. Duas é mais!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 2,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio:
        "Agora bate palma em cada estrela: UM! DOIS! Toca em cada uma!",
      elogio: "Duas palmas para o número DOIS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo mostra DOIS?",
      opcoes: [
        { nome: "uma bola", imagemUrl: bola, correta: false, quantidade: 1 },
        { nome: "duas estrelas", imagemUrl: estrela, correta: true, quantidade: 2 },
        { nome: "um coração", imagemUrl: coracao, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "Isso! DUAS estrelas!",
      feedbackErro: "DOIS tem dois itens. Escolhe o par!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Pega DOIS brinquedos e mostra para alguém em casa: 'olha, dois!' Depois pega UM só: 'agora um!'",
      dicaAdulto:
        "Subitizing 1–2 é a base do senso numérico. Peça para a criança dizer o total sem contar, só de olhar.",
    },
    {
      tipo: "celebracao",
      medalha: "Olho de Matemático · 1",
      mascoteUrl: mascote,
      falaFinal: "Uhu! Você já vê UM e DOIS de olhada! Que olhinho esperto!",
    },
  ],
  baseCientifica:
    "Subitizing perceptual (Kaufman 1949; Clements 1999) — base do senso numérico segundo Dehaene.",
};

const dia02: AulaEI = {
  slug: "pip-f1-s1-d2-dois-e-tres",
  titulo: "Dia 2 · Vejo 2, vejo 3",
  icone: "✨",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Voltei! Hoje o desafio é maior: bater o olho e saber se é DOIS ou TRÊS. Preparado?",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 2,
      itemPlural: "estrelas",
      instrucaoAudio: "Rapidinho: quantas estrelas?",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "Isso! DUAS!",
      feedbackErro: "Eram DUAS. Vamos ver de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: coracao,
      quantidade: 3,
      itemPlural: "corações",
      instrucaoAudio: "Agora vem mais! Olha rápido!",
      perguntaAudio: "Quantos corações?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "Boa! Eram TRÊS coraçõezinhos!",
      feedbackErro: "Eram TRÊS. Vamos olhar de novo?",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 3,
      itemPlural: "bolas",
      instrucaoAudio: "De novo com bolas — rapidinho!",
      perguntaAudio: "Quantas bolas?",
      opcoes: [1, 3, 4],
      feedbackAcerto: "Isso! TRÊS bolas!",
      feedbackErro: "Eram TRÊS. Tenta mais uma vez!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 3,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Confirma com o toque: um, dois, três flores.",
      elogio: "Três flores no jardim!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Olha os dois grupos.",
      perguntaAudio: "Qual tem MAIS borboletas?",
      imagemUrl: borboleta,
      itemPlural: "borboletas",
      alvo: "mais",
      opcoes: [
        { qtd: 2, correta: false },
        { qtd: 3, correta: true },
      ],
      feedbackAcerto: "Isso! TRÊS é mais do que DUAS!",
      feedbackErro: "TRÊS é mais que DUAS. Vê de novo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 3,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio:
        "Bate palma em cada estrela: UM! DOIS! TRÊS! Toca em cada uma!",
      elogio: "Três palmas para o número TRÊS!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Pega TRÊS coisinhas iguais (uvas, tampinhas, blocos) e mostra pra alguém: 'olha, três!'",
      dicaAdulto:
        "Alterne mostrar 2 e 3 sem contar — só de olhar. É subitizing puro.",
    },
    {
      tipo: "celebracao",
      medalha: "Olho de Matemático · 2",
      mascoteUrl: mascote,
      falaFinal: "Que olhão! Você já vê DOIS e TRÊS na hora!",
    },
  ],
  baseCientifica: "Subitizing 1–3 — janela clássica do senso numérico (Fischer, Clements).",
};

const dia03: AulaEI = {
  slug: "pip-f1-s1-d3-tres-e-quatro",
  titulo: "Dia 3 · Vejo 3, vejo 4",
  icone: "🔢",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje o Pip te desafia: TRÊS ou QUATRO? Presta atenção nos padrões!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 3,
      itemPlural: "bolas",
      instrucaoAudio: "Rapidinho: quantas bolas?",
      perguntaAudio: "Quantas bolas?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "Isso! TRÊS!",
      feedbackErro: "Eram TRÊS. Olha de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 4,
      itemPlural: "estrelas",
      instrucaoAudio: "Agora um pouquinho mais!",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "Boa! Eram QUATRO! Um em cada canto!",
      feedbackErro: "Eram QUATRO. Repara nos cantos!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: coracao,
      quantidade: 4,
      itemPlural: "corações",
      instrucaoAudio: "De novo QUATRO! Olha o formato de quadrado.",
      perguntaAudio: "Quantos?",
      opcoes: [2, 4, 3],
      feedbackAcerto: "Isso! QUATRO fecha um quadradinho!",
      feedbackErro: "QUATRO — dois em cima, dois embaixo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: maca,
      quantidade: 4,
      itemSingular: "maçã",
      itemPlural: "maçãs",
      instrucaoAudio: "Confirma tocando: um, dois, três, QUATRO maçãs.",
      elogio: "Quatro maçãs vermelhas!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Dois grupos aparecem.",
      perguntaAudio: "Qual tem MAIS balões?",
      imagemUrl: balao,
      itemPlural: "balões",
      alvo: "mais",
      opcoes: [
        { qtd: 3, correta: false },
        { qtd: 4, correta: true },
      ],
      feedbackAcerto: "Isso! QUATRO é mais que TRÊS!",
      feedbackErro: "QUATRO é mais que TRÊS. Conta de novo!",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: joaninha,
      convite:
        "Faz de conta que você é uma joaninha! Dá QUATRO pulinhos bem pequeninhos!",
      dica: "Contar pulando associa quantidade ao corpo.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Ache QUATRO coisas iguais em casa (4 colheres, 4 meias). Mostra e fala 'quatro!'",
      dicaAdulto:
        "Ajude apontando os cantos: 4 é fácil de subitizar quando forma um quadrado.",
    },
    {
      tipo: "celebracao",
      medalha: "Olho de Matemático · 3",
      mascoteUrl: mascote,
      falaFinal: "Uhu! TRÊS e QUATRO já não te enganam!",
    },
  ],
  baseCientifica:
    "Subitizing conceitual: 4 é reconhecido como padrão espacial (Clements & Sarama).",
};

const dia04: AulaEI = {
  slug: "pip-f1-s1-d4-padrao-dado",
  titulo: "Dia 4 · Padrão do dado",
  icone: "🎲",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje o Pip te ensina o truque do dado: cada quantidade tem um formato. Assim você vê rapidinho, sem contar!",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada padrão e escuta o nome.",
      itens: [
        { nome: "um no meio", imagemUrl: bola },
        { nome: "dois na diagonal", imagemUrl: estrela },
        { nome: "três na diagonal", imagemUrl: coracao },
        { nome: "quatro nos cantos", imagemUrl: joaninha },
      ],
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 1,
      itemPlural: "bolas",
      instrucaoAudio: "Bola no meio — quantas?",
      perguntaAudio: "Quantas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "Uma no meio!",
      feedbackErro: "Uma só, bem no meio!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 3,
      itemPlural: "estrelas",
      instrucaoAudio: "Três na diagonal — olha!",
      perguntaAudio: "Quantas?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "Três em linha diagonal!",
      feedbackErro: "Eram três, uma atrás da outra na diagonal!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: coracao,
      quantidade: 4,
      itemPlural: "corações",
      instrucaoAudio: "Quatro nos cantinhos — olha!",
      perguntaAudio: "Quantos?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "Quatro, um em cada canto!",
      feedbackErro: "Quatro nos cantos! Olha de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: joaninha,
      quantidade: 2,
      itemPlural: "joaninhas",
      instrucaoAudio: "E agora?",
      perguntaAudio: "Quantas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "Duas na diagonal!",
      feedbackErro: "Eram duas, uma em cada canto.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual padrão mostra QUATRO?",
      opcoes: [
        { nome: "uma bola", imagemUrl: bola, correta: false, quantidade: 1 },
        { nome: "quatro estrelas", imagemUrl: estrela, correta: true, quantidade: 4 },
        { nome: "uma flor", imagemUrl: flor, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "Isso! Quatro forma um quadradinho!",
      feedbackErro: "QUATRO tem quatro pontinhos. Escolhe o grupo cheio!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família",
      convite:
        "Pega um dado de jogo em casa (ou desenha) e joga com alguém. Sem contar, diga o número só de olhar!",
      dicaAdulto:
        "Padrões canônicos do dado aceleram o subitizing. Se não tiver dado, desenhe 1-4 pontos em folhas.",
    },
    {
      tipo: "celebracao",
      medalha: "Leitor de Dados",
      mascoteUrl: mascote,
      falaFinal: "Agora você lê o dado sem contar! Isso é ser matemático!",
    },
  ],
  baseCientifica:
    "Padrões canônicos (dado/dominó) — Clements & Sarama: âncoras visuais que aceleram o subitizing.",
};

const dia05: AulaEI = {
  slug: "pip-f1-s1-d5-dedinhos-do-pip",
  titulo: "Dia 5 · Ver 1, 2, 3 e 4 (revisão da semana)",
  icone: "🖐️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Chegou o Dia 5! Hoje a gente revisa TUDO: bater o olho e saber se é 1, 2, 3 ou 4. No fim, brinca com os dedinhos com quem está com você em casa!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 1,
      itemPlural: "bolas",
      instrucaoAudio: "Olha rapidinho: quantas bolas?",
      perguntaAudio: "Quantas bolas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "Isso! UMA bolinha só!",
      feedbackErro: "Era UMA só. Vamos ver de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: joaninha,
      quantidade: 2,
      itemPlural: "joaninhas",
      instrucaoAudio: "Agora com joaninhas!",
      perguntaAudio: "Quantas joaninhas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "Boa! DUAS joaninhas!",
      feedbackErro: "Eram DUAS. Olha de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 3,
      itemPlural: "estrelas",
      instrucaoAudio: "Rapidinho de novo!",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS estrelas! Boa!",
      feedbackErro: "Eram TRÊS. Vamos ver mais uma vez!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: coracao,
      quantidade: 4,
      itemPlural: "corações",
      instrucaoAudio: "Última rodada: olha o padrão!",
      perguntaAudio: "Quantos corações?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO! Um em cada canto!",
      feedbackErro: "Eram QUATRO — dois em cima, dois embaixo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 4,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Confirma tocando em cada flor: um, dois, três, quatro.",
      elogio: "Quatro flores no jardim!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Dois grupos aparecem.",
      perguntaAudio: "Qual tem MAIS balões?",
      imagemUrl: balao,
      itemPlural: "balões",
      alvo: "mais",
      opcoes: [
        { qtd: 2, correta: false },
        { qtd: 4, correta: true },
      ],
      feedbackAcerto: "Isso! QUATRO é mais que DOIS!",
      feedbackErro: "QUATRO é mais que DOIS. Olha os dois grupos!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: mascote,
      pergunta:
        "O Pip quer saber: quantos anos você tem? Fala em voz alta pro Pip!",
      exemplos: [
        { nome: "3 anos" },
        { nome: "4 anos" },
        { nome: "5 anos" },
      ],
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Dedinhos",
      convite:
        "Agora é hora dos dedinhos! Chama alguém em casa e brinca: a pessoa fala um número (1, 2, 3 ou 4) e você mostra na mão. Depois inverte!",
      dicaAdulto:
        "Butterworth (1999): o uso dos dedos aos 5 anos prediz o desempenho matemático aos 8. Não é 'muleta' — é o primeiro ábaco do cérebro. Mostre você primeiro cada quantidade, deixe a criança copiar, e depois alterne quem pede e quem mostra.",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 1 · Olho de Subitizar",
      mascoteUrl: mascote,
      falaFinal:
        "Fim da Semana 1! Você já vê 1, 2, 3 e 4 de olhada! Que olhão de matemático!",
    },
  ],
  baseCientifica:
    "Revisão semanal de subitizing 1–4 + finger gnosia em casa (Butterworth 1999; Noel 2005).",
};




export const cursoContarComPipFase1: CursoEI = {
  slug: "contar-com-pip-f1",
  serie: "pre2",
  serieLabel: "Contar com Pip · Fase 1",
  titulo: "Fase 1 · Subitizing (ver 1 a 4 de olhada)",
  descricao:
    "Bater o olho e já saber quantos são. Base do senso numérico segundo Dehaene.",
  corPrimaria: "#22C55E",
  corSecundaria: "#052E16",
  mascoteUrl: mascote,
  unidades: [
    {
      slug: "pip-f1-s1",
      numero: 1,
      titulo: "Semana 1 · Ver de olhada",
      subtitulo: "Olho de Subitizar",
      aulas: [dia01, dia02, dia03, dia04, dia05],
    },
  ],
};

export function getAulaContarComPipFase1(
  slug: string,
): AulaEI | undefined {
  for (const u of cursoContarComPipFase1.unidades) {
    const a = u.aulas.find((x) => x.slug === slug);
    if (a) return a;
  }
  return undefined;
}
