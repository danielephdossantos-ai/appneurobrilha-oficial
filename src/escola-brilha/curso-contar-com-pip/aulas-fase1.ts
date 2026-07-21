import type { CursoEI, AulaEI } from "@/escola-brilha/curso-portugues-ei/types";
import { SINAL_IGUAL } from "./_sinais";
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

import { url as pipMascot } from "@/assets/pip-girl-mascot.png.asset.json";
const mascote = pipMascot;

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




// ============================================================
// SEMANA 2 · Consolidação + subitizing conceitual
// Ver 4 como 2+2, comparar rápido, MENOS/IGUAL, cenários reais.
// Clements & Sarama: subitizing conceitual = ver o todo pelas partes.
// ============================================================

const dia06: AulaEI = {
  slug: "pip-f1-s2-d6-dominos",
  titulo: "Dia 6 · Padrão do dominó",
  icone: "🁢",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 2 começou! Hoje o Pip te mostra o truque do dominó: dois grupinhos que juntos viram um número maior.",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 2,
      itemPlural: "bolas",
      instrucaoAudio: "Olha o primeiro grupinho.",
      perguntaAudio: "Quantas bolas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "DUAS!",
      feedbackErro: "Eram DUAS. Olha de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 2,
      itemPlural: "bolas",
      instrucaoAudio: "Agora o segundo grupinho, igualzinho.",
      perguntaAudio: "E agora, quantas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "Mais DUAS!",
      feedbackErro: "Eram DUAS de novo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: bola,
      quantidade: 4,
      itemSingular: "bola",
      itemPlural: "bolas",
      instrucaoAudio:
        "Duas bolas mais duas bolas dá QUATRO! Toca em cada uma pra confirmar.",
      elogio: "Isso! DOIS e DOIS é QUATRO!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 3,
      itemPlural: "estrelas",
      instrucaoAudio: "Agora um dominó diferente: DOIS e UM.",
      perguntaAudio: "Quantas estrelas ao todo?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS! Dois de um lado, um do outro!",
      feedbackErro: "Eram TRÊS. Dois mais um dá três!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo mostra QUATRO?",
      opcoes: [
        { nome: "duas bolas", imagemUrl: bola, correta: false, quantidade: 2 },
        { nome: "quatro corações", imagemUrl: coracao, correta: true, quantidade: 4 },
        { nome: "três flores", imagemUrl: flor, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "Isso! QUATRO — dois em cima, dois embaixo!",
      feedbackErro: "QUATRO tem quatro itens. Escolhe o grupo cheio!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Dominó caseiro",
      convite:
        "Pega feijões ou botões. Faz dois grupinhos: 2 + 2. Junta e conta: QUATRO! Depois tenta 2 + 1 = TRÊS.",
      dicaAdulto:
        "Clements & Sarama: subitizing conceitual = ver o todo pelas partes. Trabalhar 2+2 e 2+1 antes da soma formal.",
    },
    {
      tipo: "celebracao",
      medalha: "Leitor de Dominó",
      mascoteUrl: mascote,
      falaFinal: "Agora você vê dois grupinhos e já sabe o total!",
    },
  ],
  baseCientifica:
    "Subitizing conceitual (Clements & Sarama): 4 como 2+2, 3 como 2+1 — base pré-aditiva.",
};

const dia07: AulaEI = {
  slug: "pip-f1-s2-d7-comparar-rapido",
  titulo: "Dia 7 · Quem tem MAIS?",
  icone: "⚖️",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje é dia de comparar! Só de olhar, sem contar: qual grupo tem MAIS?",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Dois grupos de flores.",
      perguntaAudio: "Qual grupo tem MAIS flores?",
      imagemUrl: flor,
      itemPlural: "flores",
      alvo: "mais",
      opcoes: [
        { qtd: 1, correta: false },
        { qtd: 4, correta: true },
      ],
      feedbackAcerto: "Isso! QUATRO é bem mais que UMA!",
      feedbackErro: "O grupo com 4 tem mais. Olha de novo!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Agora borboletas.",
      perguntaAudio: "Qual grupo tem MAIS borboletas?",
      imagemUrl: borboleta,
      itemPlural: "borboletas",
      alvo: "mais",
      opcoes: [
        { qtd: 3, correta: true },
        { qtd: 2, correta: false },
      ],
      feedbackAcerto: "Isso! TRÊS é mais que DUAS!",
      feedbackErro: "TRÊS é mais que DUAS. Compara de novo!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Difícil agora! Bem parecido.",
      perguntaAudio: "Qual grupo tem MAIS maçãs?",
      imagemUrl: maca,
      itemPlural: "maçãs",
      alvo: "mais",
      opcoes: [
        { qtd: 3, correta: false },
        { qtd: 4, correta: true },
      ],
      feedbackAcerto: "Boa! QUATRO é uma a mais que TRÊS!",
      feedbackErro: "QUATRO é uma a mais que TRÊS. Olha bem!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: balao,
      quantidade: 4,
      itemSingular: "balão",
      itemPlural: "balões",
      instrucaoAudio: "Confirma tocando: um, dois, três, QUATRO balões.",
      elogio: "Quatro balões!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo tem MENOS itens?",
      opcoes: [
        { nome: "uma bola", imagemUrl: bola, correta: true, quantidade: 1 },
        { nome: "três estrelas", imagemUrl: estrela, correta: false, quantidade: 3 },
        { nome: "quatro corações", imagemUrl: coracao, correta: false, quantidade: 4 },
      ],
      feedbackAcerto: "Isso! UM é o MENOS de todos!",
      feedbackErro: "MENOS é o grupo com pouquinho. Escolhe o menor!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Mais ou menos?",
      convite:
        "Pega dois potinhos. Coloca 2 em um e 4 no outro. Pergunta: qual tem MAIS? Depois inverte e pergunta qual tem MENOS.",
      dicaAdulto:
        "ANS (Approximate Number System — Feigenson & Dehaene): crianças comparam quantidade de olhada antes de saber contar. Explorar 'mais' e 'menos' fortalece essa via inata.",
    },
    {
      tipo: "celebracao",
      medalha: "Comparador Rápido",
      mascoteUrl: mascote,
      falaFinal: "Você já compara MAIS e MENOS de olhada! Isso é senso numérico!",
    },
  ],
  baseCientifica:
    "Comparação de magnitude — ANS (Feigenson, Dehaene, Spelke).",
};

const dia08: AulaEI = {
  slug: "pip-f1-s2-d8-cenarios-reais",
  titulo: "Dia 8 · Contar no mundo real",
  icone: "🌳",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje a gente subitiza coisas do dia a dia: bolas no parque, flores no jardim, joaninhas na folha!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: joaninha,
      quantidade: 3,
      itemPlural: "joaninhas",
      instrucaoAudio: "Joaninhas na folha — olha rapidinho!",
      perguntaAudio: "Quantas joaninhas?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS joaninhas!",
      feedbackErro: "Eram TRÊS. Vamos ver de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: maca,
      quantidade: 4,
      itemPlural: "maçãs",
      instrucaoAudio: "Maçãs na fruteira!",
      perguntaAudio: "Quantas maçãs?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO maçãs!",
      feedbackErro: "Eram QUATRO. Um em cada canto!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: balao,
      quantidade: 2,
      itemPlural: "balões",
      instrucaoAudio: "Balões na festa!",
      perguntaAudio: "Quantos balões?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "DOIS balões!",
      feedbackErro: "Eram DOIS. Olha de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: sol,
      quantidade: 1,
      itemPlural: "sóis",
      instrucaoAudio: "E no céu?",
      perguntaAudio: "Quantos sóis?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "UM sol só! O nosso!",
      feedbackErro: "Só tem UM sol no céu!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 3,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Bate palma em cada flor: UM! DOIS! TRÊS!",
      elogio: "Três palmas para três flores!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Onde tem QUATRO?",
      opcoes: [
        { nome: "um sol", imagemUrl: sol, correta: false, quantidade: 1 },
        { nome: "quatro joaninhas", imagemUrl: joaninha, correta: true, quantidade: 4 },
        { nome: "duas borboletas", imagemUrl: borboleta, correta: false, quantidade: 2 },
      ],
      feedbackAcerto: "Isso! QUATRO joaninhas na folha!",
      feedbackErro: "QUATRO tem quatro itens. Escolhe o grupo cheio!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Caça ao número",
      convite:
        "Anda pela casa com alguém e ache: 1 coisa (o sofá), 2 coisas iguais (2 sapatos), 3 coisas (3 pratos), 4 coisas (4 cadeiras).",
      dicaAdulto:
        "Contextualizar subitizing em objetos reais consolida a transferência (Clements & Sarama).",
    },
    {
      tipo: "celebracao",
      medalha: "Caçador de Números",
      mascoteUrl: mascote,
      falaFinal: "Você viu números no mundo todo! Matemática está em tudo!",
    },
  ],
  baseCientifica:
    "Transferência do subitizing para o mundo real — Clements & Sarama, NCTM Early Childhood.",
};

const dia09: AulaEI = {
  slug: "pip-f1-s2-d9-igual-diferente",
  titulo: "Dia 9 · IGUAL ou DIFERENTE?",
  icone: "🟰",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Hoje um jeito novo: dois grupos podem ser IGUAIS (mesma quantidade) ou DIFERENTES. Vamos ver?",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Dois grupos de estrelas.",
      perguntaAudio: "Qual grupo tem MAIS estrelas?",
      imagemUrl: estrela,
      itemPlural: "estrelas",
      alvo: "mais",
      opcoes: [
        { qtd: 2, correta: false },
        { qtd: 3, correta: true },
      ],
      feedbackAcerto: "TRÊS é mais que DUAS!",
      feedbackErro: "TRÊS é mais que DUAS!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Agora corações.",
      perguntaAudio: "Qual grupo tem MENOS corações?",
      imagemUrl: coracao,
      itemPlural: "corações",
      alvo: "menos",
      opcoes: [
        { qtd: 1, correta: true },
        { qtd: 4, correta: false },
      ],
      feedbackAcerto: "UM é MENOS que QUATRO!",
      feedbackErro: "MENOS é o grupo com pouquinho: UM.",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 3,
      itemPlural: "bolas",
      instrucaoAudio: "Olha rapidinho!",
      perguntaAudio: "Quantas bolas?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS bolas!",
      feedbackErro: "Eram TRÊS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: flor,
      quantidade: 3,
      itemPlural: "flores",
      instrucaoAudio: "E agora, flores!",
      perguntaAudio: "Quantas flores?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS flores!",
      feedbackErro: "Eram TRÊS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Se as bolas eram 3 e as flores eram 3, elas são?",
      opcoes: [
        { nome: "IGUAL", imagemUrl: estrelas, correta: true },
        { nome: "MAIS bolas", imagemUrl: bola, correta: false, quantidade: 4 },
        { nome: "MAIS flores", imagemUrl: flor, correta: false, quantidade: 4 },
      ],
      feedbackAcerto: "Isso! Mesma quantidade = IGUAL!",
      feedbackErro: "Se as duas têm 3, elas são IGUAIS!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 4,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "Confirma: um, dois, três, QUATRO joaninhas.",
      elogio: "Quatro joaninhas!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Igual ou diferente?",
      convite:
        "Pega dois pratinhos. Coloca 3 uvas em cada um. Pergunta: os pratos têm quantidades IGUAIS ou DIFERENTES? Depois muda: 2 num prato e 4 no outro.",
      dicaAdulto:
        "IGUAL/DIFERENTE prepara equivalência — base da adição/subtração (Griffin, Number Worlds).",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive do Igual",
      mascoteUrl: mascote,
      falaFinal: "Você já vê MAIS, MENOS e IGUAL! Que olho de matemático!",
    },
  ],
  baseCientifica:
    "Equivalência e comparação (Griffin, Number Worlds) — pré-requisito para operações.",
};

const dia10: AulaEI = {
  slug: "pip-f1-s2-d10-revisao-semana2",
  titulo: "Dia 10 · Olho Rápido (revisão)",
  icone: "⚡",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Fim da Semana 2! Hoje o Pip te desafia: rapidinho, sem contar, quantos são?",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 2,
      itemPlural: "estrelas",
      instrucaoAudio: "Rapidinho!",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "DUAS!",
      feedbackErro: "Eram DUAS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: coracao,
      quantidade: 4,
      itemPlural: "corações",
      instrucaoAudio: "E agora!",
      perguntaAudio: "Quantos corações?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO!",
      feedbackErro: "Eram QUATRO!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 3,
      itemPlural: "bolas",
      instrucaoAudio: "De novo!",
      perguntaAudio: "Quantas bolas?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS!",
      feedbackErro: "Eram TRÊS!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Dois grupos.",
      perguntaAudio: "Qual tem MAIS balões?",
      imagemUrl: balao,
      itemPlural: "balões",
      alvo: "mais",
      opcoes: [
        { qtd: 4, correta: true },
        { qtd: 2, correta: false },
      ],
      feedbackAcerto: "QUATRO é mais que DOIS!",
      feedbackErro: "QUATRO é mais!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Agora com maçãs.",
      perguntaAudio: "Qual tem MENOS maçãs?",
      imagemUrl: maca,
      itemPlural: "maçãs",
      alvo: "menos",
      opcoes: [
        { qtd: 1, correta: true },
        { qtd: 3, correta: false },
      ],
      feedbackAcerto: "UM é MENOS que TRÊS!",
      feedbackErro: "MENOS é o grupo pequeno!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 4,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Confirma tocando: uma, duas, três, QUATRO.",
      elogio: "Quatro flores!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo mostra o padrão do dominó DOIS e DOIS?",
      opcoes: [
        { nome: "uma bola", imagemUrl: bola, correta: false, quantidade: 1 },
        { nome: "quatro joaninhas", imagemUrl: joaninha, correta: true, quantidade: 4 },
        { nome: "três estrelas", imagemUrl: estrela, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "Isso! DOIS mais DOIS é QUATRO!",
      feedbackErro: "DOIS e DOIS forma um QUADRADO de 4!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Jogo do Dado",
      convite:
        "Pega um dado. Joga rapidinho e diz o número SEM contar os pontinhos. Depois deixa o adulto jogar e você confere.",
      dicaAdulto:
        "Jogos de dado repetidos consolidam padrões canônicos (Clements & Sarama). Meta: reconhecer 1–4 em menos de 1 segundo.",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 2 · Olho Rápido",
      mascoteUrl: mascote,
      falaFinal:
        "Fim da Semana 2! Agora seu olho é RÁPIDO! Você compara, vê padrões e sabe quantos são de olhada!",
    },
  ],
  baseCientifica:
    "Revisão semanal: subitizing rápido, comparação MAIS/MENOS/IGUAL e padrões de dominó.",
};


// ================= SEMANA 3 · Compondo e Decompondo (1–4) =================
// Foco: subitizing conceitual — 4 = 3+1 = 2+2, 3 = 2+1, velocidade e precisão.
// Base: Clements & Sarama (subitizing conceitual), Griffin (Number Worlds),
// Baroody (early composition), NCTM Early Childhood.

const dia11: AulaEI = {
  slug: "pip-f1-s3-d11-compor-3",
  titulo: "Dia 11 · Compondo o 3",
  icone: "🧩",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Semana 3 começou! Hoje o Pip te mostra como o número TRÊS pode ser feito de pedacinhos: 2 e 1, ou 1 e 2.",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 2,
      itemPlural: "estrelas",
      instrucaoAudio: "Primeiro grupinho de estrelas.",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "DUAS!",
      feedbackErro: "Eram DUAS. Olha de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 1,
      itemPlural: "estrela",
      instrucaoAudio: "E mais uma estrelinha.",
      perguntaAudio: "Quantas agora?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "UMA!",
      feedbackErro: "Era UMA só!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 3,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "DUAS mais UMA dá TRÊS. Toca em cada uma!",
      elogio: "Isso! 2 + 1 = TRÊS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: flor,
      quantidade: 3,
      itemPlural: "flores",
      instrucaoAudio: "Agora um grupinho novo, do outro jeito: UMA e depois DUAS.",
      perguntaAudio: "Quantas flores ao todo?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS! 1 + 2 também dá TRÊS!",
      feedbackErro: "TRÊS. Um mais dois é a mesma coisa que dois mais um!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo mostra TRÊS?",
      opcoes: [
        { nome: "duas bolas", imagemUrl: bola, correta: false, quantidade: 2 },
        { nome: "três corações", imagemUrl: coracao, correta: true, quantidade: 3 },
        { nome: "quatro joaninhas", imagemUrl: joaninha, correta: false, quantidade: 4 },
      ],
      feedbackAcerto: "Isso! TRÊS coraçõezinhos!",
      feedbackErro: "TRÊS tem três itens. Olha o grupinho do meio!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Fazendo 3",
      convite:
        "Pega 3 tampinhas. Separa em 2 + 1. Depois em 1 + 2. Depois em 3 + 0. Junta e sempre dá TRÊS!",
      dicaAdulto:
        "Baroody: decomposição é base pré-aditiva. Ver 3 = 2+1 = 1+2 = 3+0 prepara adição sem símbolo.",
    },
    {
      tipo: "celebracao",
      medalha: "Mestre do 3",
      mascoteUrl: mascote,
      falaFinal: "Você já sabe montar o TRÊS de vários jeitos!",
    },
  ],
  baseCientifica:
    "Composição do 3 (Baroody, Clements & Sarama) — pré-aditivo sem símbolo.",
};

const dia12: AulaEI = {
  slug: "pip-f1-s3-d12-compor-4-dobro",
  titulo: "Dia 12 · O 4 é o dobro de 2",
  icone: "✌️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Segredo do Pip: QUATRO é o DOBRO de DOIS. Dois de um lado, dois do outro — igualzinho o dominó!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: joaninha,
      quantidade: 2,
      itemPlural: "joaninhas",
      instrucaoAudio: "Duas joaninhas na folha de cima.",
      perguntaAudio: "Quantas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "DUAS!",
      feedbackErro: "Eram DUAS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: joaninha,
      quantidade: 2,
      itemPlural: "joaninhas",
      instrucaoAudio: "Mais duas na folha de baixo.",
      perguntaAudio: "E agora?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "Mais DUAS!",
      feedbackErro: "Eram DUAS de novo!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 4,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "Duas mais duas dá QUATRO. Toca em cada joaninha!",
      elogio: "2 + 2 = QUATRO! Isso é o DOBRO!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: coracao,
      quantidade: 4,
      itemPlural: "corações",
      instrucaoAudio: "Olha rapidinho — dois em cima, dois embaixo.",
      perguntaAudio: "Quantos corações?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "QUATRO! O dobro de 2!",
      feedbackErro: "QUATRO. Dois de cada lado dá quatro!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara os dois grupos de balões.",
      perguntaAudio: "Qual grupo é o DOBRO do outro?",
      imagemUrl: balao,
      itemPlural: "balões",
      alvo: "mais",
      opcoes: [
        { qtd: 2, correta: false },
        { qtd: 4, correta: true },
      ],
      feedbackAcerto: "Isso! QUATRO é o dobro de DOIS!",
      feedbackErro: "O DOBRO é quando fica duas vezes maior: 4 é o dobro de 2.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · O dobro dos dedos",
      convite:
        "Levanta 2 dedinhos numa mão. Agora mais 2 na outra. Junta: QUATRO! Isso é o DOBRO de 2.",
      dicaAdulto:
        "Doubles (2+2, 3+3) são fatos-âncora — Baroody mostra que crianças aprendem mais rápido que outras somas. Introduzir cedo, sem símbolo.",
    },
    {
      tipo: "celebracao",
      medalha: "Rei do Dobro",
      mascoteUrl: mascote,
      falaFinal: "Você descobriu o truque do DOBRO! 2 + 2 = 4!",
    },
  ],
  baseCientifica:
    "Doubles como fatos-âncora (Baroody) — 2+2 aprendido antes de 2+1 e 1+3.",
};

const dia13: AulaEI = {
  slug: "pip-f1-s3-d13-compor-4-31",
  titulo: "Dia 13 · O 4 também é 3 e 1",
  icone: "🧮",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "O QUATRO tem outro jeito: TRÊS de um lado e UM do outro. Ou UM e depois TRÊS. Bora ver?",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: flor,
      quantidade: 3,
      itemPlural: "flores",
      instrucaoAudio: "Três flores no primeiro canteiro.",
      perguntaAudio: "Quantas?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS!",
      feedbackErro: "Eram TRÊS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: flor,
      quantidade: 1,
      itemPlural: "flor",
      instrucaoAudio: "E mais UMA flor no outro canteiro.",
      perguntaAudio: "Quantas agora?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "UMA!",
      feedbackErro: "Era UMA só!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 4,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "TRÊS mais UMA dá QUATRO. Toca em cada uma!",
      elogio: "3 + 1 = QUATRO!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: maca,
      quantidade: 4,
      itemPlural: "maçãs",
      instrucaoAudio: "Agora do outro jeito: UMA maçã e depois TRÊS.",
      perguntaAudio: "Quantas maçãs ao todo?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO! 1 + 3 é igual a 3 + 1!",
      feedbackErro: "QUATRO. Um mais três dá quatro do mesmo jeito!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Onde está QUATRO?",
      opcoes: [
        { nome: "três estrelas", imagemUrl: estrela, correta: false, quantidade: 3 },
        { nome: "quatro balões", imagemUrl: balao, correta: true, quantidade: 4 },
        { nome: "duas borboletas", imagemUrl: borboleta, correta: false, quantidade: 2 },
      ],
      feedbackAcerto: "Isso! QUATRO balões!",
      feedbackErro: "QUATRO tem quatro itens. Escolhe o grupo maior!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Todos os jeitos do 4",
      convite:
        "Pega 4 tampinhas. Faz 2+2. Depois 3+1. Depois 1+3. Depois 4+0. Todos dão QUATRO!",
      dicaAdulto:
        "Part-part-whole (Resnick, Fuson): entender que o todo pode ser dividido em partes de vários modos é o pilar da adição/subtração até 10.",
    },
    {
      tipo: "celebracao",
      medalha: "Arquiteto do 4",
      mascoteUrl: mascote,
      falaFinal: "Você já monta o QUATRO de vários jeitos! Isso é super matemático!",
    },
  ],
  baseCientifica:
    "Part-part-whole (Resnick, Fuson) — decomposição do 4 em 2+2, 3+1, 1+3.",
};

const dia14: AulaEI = {
  slug: "pip-f1-s3-d14-velocidade",
  titulo: "Dia 14 · Desafio Velocidade",
  icone: "⚡",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Desafio do Pip! Hoje é velocidade: olho rápido, resposta rápida. Sem contar no dedinho!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 4,
      itemPlural: "bolas",
      instrucaoAudio: "Olha rapidinho!",
      perguntaAudio: "Quantas bolas?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO!",
      feedbackErro: "Eram QUATRO. Olha de novo!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 2,
      itemPlural: "estrelas",
      instrucaoAudio: "E agora?",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "DUAS!",
      feedbackErro: "Eram DUAS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: coracao,
      quantidade: 3,
      itemPlural: "corações",
      instrucaoAudio: "Rapidão!",
      perguntaAudio: "Quantos?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS!",
      feedbackErro: "Eram TRÊS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: borboleta,
      quantidade: 1,
      itemPlural: "borboleta",
      instrucaoAudio: "E essa aqui?",
      perguntaAudio: "Quantas borboletas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "UMA só!",
      feedbackErro: "Era UMA!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: joaninha,
      quantidade: 4,
      itemPlural: "joaninhas",
      instrucaoAudio: "Última rapidinha!",
      perguntaAudio: "Quantas joaninhas?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO! Que olho rápido!",
      feedbackErro: "QUATRO. Duas em cima, duas embaixo!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Só de olhar, sem contar.",
      perguntaAudio: "Qual grupo tem MAIS balões?",
      imagemUrl: balao,
      itemPlural: "balões",
      alvo: "mais",
      opcoes: [
        { qtd: 4, correta: true },
        { qtd: 1, correta: false },
      ],
      feedbackAcerto: "QUATRO é muito mais que UM!",
      feedbackErro: "QUATRO é mais. UM é bem pouquinho!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Cartas rápidas",
      convite:
        "Um adulto mostra a mão bem rápido com 1, 2, 3 ou 4 dedinhos e esconde. A criança fala o número sem contar. Trocam de vez!",
      dicaAdulto:
        "Prática de subitizing rápido com dedos treina reconhecimento perceptual (Butterworth 1999; Berteletti & Booth 2015).",
    },
    {
      tipo: "celebracao",
      medalha: "Flash do Pip",
      mascoteUrl: mascote,
      falaFinal: "Você é RAPIDÃO agora! Bateu o olho, acertou!",
    },
  ],
  baseCientifica:
    "Fluência em subitizing perceptual — velocidade sem perder precisão (Clements, Butterworth).",
};

const dia15: AulaEI = {
  slug: "pip-f1-s3-d15-revisao-semana3",
  titulo: "Dia 15 · Mestre do 4 (revisão)",
  icone: "🏅",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Fim da Semana 3! Hoje o Pip te testa: compor, decompor e ver rápido de 1 a 4.",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: sol,
      quantidade: 1,
      itemPlural: "sóis",
      instrucaoAudio: "Rapidinho!",
      perguntaAudio: "Quantos sóis?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "UM só!",
      feedbackErro: "Era UM!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: maca,
      quantidade: 4,
      itemPlural: "maçãs",
      instrucaoAudio: "E agora?",
      perguntaAudio: "Quantas maçãs?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO!",
      feedbackErro: "Eram QUATRO!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 3,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Confirma tocando: UM, DOIS, TRÊS.",
      elogio: "Três flores!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O 4 pode ser feito de 2 e mais quanto?",
      opcoes: [
        { nome: "mais 2", imagemUrl: coracao, correta: true, quantidade: 2 },
        { nome: "mais 4", imagemUrl: bola, correta: false, quantidade: 4 },
        { nome: "mais 1", imagemUrl: estrela, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "Isso! 2 + 2 = 4!",
      feedbackErro: "2 mais 2 dá 4! Esse é o DOBRO!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "E o 3, pode ser feito de 2 e mais quanto?",
      opcoes: [
        { nome: "mais 2", imagemUrl: coracao, correta: false, quantidade: 2 },
        { nome: "mais 1", imagemUrl: estrela, correta: true, quantidade: 1 },
        { nome: "mais 3", imagemUrl: bola, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "Isso! 2 + 1 = 3!",
      feedbackErro: "2 mais 1 dá 3!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara sem contar.",
      perguntaAudio: "Qual grupo tem MENOS estrelas?",
      imagemUrl: estrela,
      itemPlural: "estrelas",
      alvo: "menos",
      opcoes: [
        { qtd: 4, correta: false },
        { qtd: 2, correta: true },
      ],
      feedbackAcerto: "DUAS é menos que QUATRO!",
      feedbackErro: "MENOS é o grupo com pouquinho: DUAS.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Feirinha do 4",
      convite:
        "Coloca 4 objetos na mesa. Peça pra criança separar de todos os jeitos: 2+2, 3+1, 1+3, 4+0. Todos dão 4!",
      dicaAdulto:
        "Fim da Semana 3. Se a criança compõe e decompõe 3 e 4 sem contar nos dedos, está pronta pra Fase 2 (contagem 1-a-1 até 10).",
    },
    {
      tipo: "celebracao",
      medalha: "Semana 3 · Mestre do 4",
      mascoteUrl: mascote,
      falaFinal:
        "Você é MESTRE do 4! Compõe, decompõe e vê rapidinho. Vem aí a última semana antes do diploma!",
    },
  ],
  baseCientifica:
    "Revisão semanal: composição/decomposição do 3 e do 4, doubles e comparação.",
};


// ================= SEMANA 4 · Formatura em Subitizing (1–4) =================
// Foco: transferência total, avaliação lúdica, ponte para o 5 e DIPLOMA da Fase 1.
// Base: Griffin (Number Worlds — bridging to counting), Clements & Sarama
// (assessment through play), Ramani & Siegler (linear number board — preview).

const dia16: AulaEI = {
  slug: "pip-f1-s4-d16-tudo-junto",
  titulo: "Dia 16 · Tudo junto",
  icone: "🎯",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Última semana da Fase 1! Hoje o Pip mistura tudo que você aprendeu: ver, contar, comparar e compor de 1 a 4.",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: bola,
      quantidade: 3,
      itemPlural: "bolas",
      instrucaoAudio: "Olha rapidinho!",
      perguntaAudio: "Quantas bolas?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS!",
      feedbackErro: "Eram TRÊS!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Só de olhar.",
      perguntaAudio: "Qual grupo tem MAIS corações?",
      imagemUrl: coracao,
      itemPlural: "corações",
      alvo: "mais",
      opcoes: [
        { qtd: 1, correta: false },
        { qtd: 3, correta: true },
      ],
      feedbackAcerto: "TRÊS é mais que UM!",
      feedbackErro: "TRÊS é mais que UM. Olha o grupão!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: flor,
      quantidade: 4,
      itemSingular: "flor",
      itemPlural: "flores",
      instrucaoAudio: "Toca em cada flor: UM, DOIS, TRÊS, QUATRO.",
      elogio: "Quatro flores!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: joaninha,
      quantidade: 2,
      itemPlural: "joaninhas",
      instrucaoAudio: "Olhinho rápido!",
      perguntaAudio: "Quantas joaninhas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "DUAS!",
      feedbackErro: "Eram DUAS!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O 4 pode ser 2 e mais quanto?",
      opcoes: [
        { nome: "mais 1", imagemUrl: estrela, correta: false, quantidade: 1 },
        { nome: "mais 2", imagemUrl: coracao, correta: true, quantidade: 2 },
        { nome: "mais 3", imagemUrl: bola, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "2 + 2 = 4! Dobro!",
      feedbackErro: "2 mais 2 dá 4 — isso é o DOBRO!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Mesa dos números",
      convite:
        "Coloca 1, 2, 3 e 4 objetos na mesa. Um adulto aponta e pergunta 'quantos?' — a criança fala rápido, sem contar.",
      dicaAdulto:
        "Avaliação lúdica: se a criança acerta 1–4 em menos de 3 segundos, subitizing perceptual está consolidado.",
    },
    {
      tipo: "celebracao",
      medalha: "Tudo Junto",
      mascoteUrl: mascote,
      falaFinal: "Você usou tudo que aprendeu! Bora pro próximo desafio!",
    },
  ],
  baseCientifica:
    "Prática distribuída e mista — retenção e transferência (Rohrer & Taylor).",
};

const dia17: AulaEI = {
  slug: "pip-f1-s4-d17-preparando-5",
  titulo: "Dia 17 · Espiando o 5",
  icone: "🖐️",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Segredinho: depois do 4 vem o 5! O 5 é 4 mais UM. E cabe certinho numa mãozinha!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: estrela,
      quantidade: 4,
      itemPlural: "estrelas",
      instrucaoAudio: "Começa com QUATRO.",
      perguntaAudio: "Quantas estrelas?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO!",
      feedbackErro: "Eram QUATRO!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 5,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "Agora tem MAIS UMA! Toca em cada: UM, DOIS, TRÊS, QUATRO, CINCO.",
      elogio: "CINCO! 4 + 1 é CINCO!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Onde tem CINCO?",
      opcoes: [
        { nome: "quatro maçãs", imagemUrl: maca, correta: false, quantidade: 4 },
        { nome: "cinco flores", imagemUrl: flor, correta: true, quantidade: 5 },
        { nome: "três balões", imagemUrl: balao, correta: false, quantidade: 3 },
      ],
      feedbackAcerto: "Isso! CINCO flores — igual aos dedos de uma mão!",
      feedbackErro: "CINCO tem cinco itens. Escolhe o grupo maior!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara CINCO com um grupinho pequeno.",
      perguntaAudio: "Qual grupo tem MAIS bolas?",
      imagemUrl: bola,
      itemPlural: "bolas",
      alvo: "mais",
      opcoes: [
        { qtd: 5, correta: true },
        { qtd: 2, correta: false },
      ],
      feedbackAcerto: "CINCO é mais que DUAS!",
      feedbackErro: "CINCO é mais. É a mão INTEIRA!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: joaninha,
      quantidade: 5,
      itemSingular: "joaninha",
      itemPlural: "joaninhas",
      instrucaoAudio: "Confirma: UM, DOIS, TRÊS, QUATRO, CINCO joaninhas.",
      elogio: "Cinco joaninhas! Uma mãozinha cheia!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Mão inteira",
      convite:
        "Abre a mão toda: 5 dedinhos. Depois fecha 1 → 4. Fecha mais 1 → 3. Volta abrindo: 3, 4, 5. Cinco é a mão inteira!",
      dicaAdulto:
        "Cinco como âncora perceptual (five-ness): base para ten-frame e para toda a Fase 2 (contagem 1-a-1 até 10).",
    },
    {
      tipo: "celebracao",
      medalha: "Espião do 5",
      mascoteUrl: mascote,
      falaFinal: "Você já viu o 5 de longe! Vem aí a Fase 2!",
    },
  ],
  baseCientifica:
    "Preview do 5 como âncora — ponte para contagem 1-a-1 (Griffin, Fuson).",
};

const dia18: AulaEI = {
  slug: "pip-f1-s4-d18-historia-do-pip",
  titulo: "Dia 18 · A festa do Pip",
  icone: "🎉",
  bncc: ["EI03ET07"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "O Pip vai dar uma festa! Vamos ajudar? Precisa contar balões, maçãs e convidados. Cada um de olhada!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: balao,
      quantidade: 3,
      itemPlural: "balões",
      instrucaoAudio: "O Pip pendurou balões. Olha!",
      perguntaAudio: "Quantos balões?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS balões pra festa!",
      feedbackErro: "Eram TRÊS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: maca,
      quantidade: 4,
      itemPlural: "maçãs",
      instrucaoAudio: "Na fruteira, maçãs!",
      perguntaAudio: "Quantas maçãs?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO maçãs!",
      feedbackErro: "Eram QUATRO!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Chegaram convidados!",
      perguntaAudio: "Qual grupo de amigos é MAIOR?",
      imagemUrl: joaninha,
      itemPlural: "amigos",
      alvo: "mais",
      opcoes: [
        { qtd: 4, correta: true },
        { qtd: 2, correta: false },
      ],
      feedbackAcerto: "QUATRO é mais! A festa tá cheia!",
      feedbackErro: "QUATRO é mais que DOIS!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: coracao,
      quantidade: 4,
      itemSingular: "coração",
      itemPlural: "corações",
      instrucaoAudio: "O Pip deu QUATRO abraços. Toca em cada coração!",
      elogio: "Quatro abraços de amor!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O Pip tem 2 balões e ganha mais 2. Fica com quantos?",
      opcoes: [
        { nome: "3 balões", imagemUrl: balao, correta: false, quantidade: 3 },
        { nome: "4 balões", imagemUrl: balao, correta: true, quantidade: 4 },
        { nome: "1 balão", imagemUrl: balao, correta: false, quantidade: 1 },
      ],
      feedbackAcerto: "QUATRO! 2 + 2 = 4!",
      feedbackErro: "2 mais 2 dá 4! O Pip fica com 4 balões.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Festinha em casa",
      convite:
        "Faz uma festinha de faz-de-conta. Conta 3 pratos, 4 copos, 2 bichinhos convidados. Depois pergunta: onde tem mais?",
      dicaAdulto:
        "Cognitively Guided Instruction (Carpenter): problema em contexto de história ativa raciocínio matemático antes do símbolo.",
    },
    {
      tipo: "celebracao",
      medalha: "Anfitrião da Festa",
      mascoteUrl: mascote,
      falaFinal: "Você ajudou o Pip a fazer a festa perfeita!",
    },
  ],
  baseCientifica:
    "Subitizing em contexto narrativo — preview de problemas CGI (Carpenter et al.).",
};

const dia19: AulaEI = {
  slug: "pip-f1-s4-d19-desafio-final",
  titulo: "Dia 19 · Desafio do Pip",
  icone: "🏆",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Desafio final antes do diploma! O Pip vai te testar: acerta tudo e amanhã você forma!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: sol,
      quantidade: 1,
      itemPlural: "sóis",
      instrucaoAudio: "Fácil primeiro.",
      perguntaAudio: "Quantos sóis?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "UM só!",
      feedbackErro: "Era UM!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: borboleta,
      quantidade: 2,
      itemPlural: "borboletas",
      instrucaoAudio: "Rapidinho!",
      perguntaAudio: "Quantas borboletas?",
      opcoes: [1, 2, 3],
      feedbackAcerto: "DUAS!",
      feedbackErro: "Eram DUAS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: flor,
      quantidade: 3,
      itemPlural: "flores",
      instrucaoAudio: "E agora?",
      perguntaAudio: "Quantas flores?",
      opcoes: [2, 3, 4],
      feedbackAcerto: "TRÊS!",
      feedbackErro: "Eram TRÊS!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: maca,
      quantidade: 4,
      itemPlural: "maçãs",
      instrucaoAudio: "Última rapidinha!",
      perguntaAudio: "Quantas maçãs?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO!",
      feedbackErro: "Eram QUATRO!",
    },
    {
      tipo: "compararGrupos",
      instrucaoAudio: "Compara!",
      perguntaAudio: "Qual grupo tem MENOS bolas?",
      imagemUrl: bola,
      itemPlural: "bolas",
      alvo: "menos",
      opcoes: [
        { qtd: 4, correta: false },
        { qtd: 1, correta: true },
      ],
      feedbackAcerto: "UMA é MENOS de todas!",
      feedbackErro: "MENOS é o menor grupo: UMA.",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "O 3 é feito de 2 e mais quanto?",
      opcoes: [
        { nome: "mais 1", imagemUrl: estrela, correta: true, quantidade: 1 },
        { nome: "mais 3", imagemUrl: coracao, correta: false, quantidade: 3 },
        { nome: "mais 2", imagemUrl: bola, correta: false, quantidade: 2 },
      ],
      feedbackAcerto: "2 + 1 = 3!",
      feedbackErro: "2 mais 1 dá 3!",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Missão Família · Prepara pra formatura",
      convite:
        "Amanhã é o diploma da Fase 1! Conta pra alguém tudo que você aprendeu: ver rápido, comparar, compor. Ensinar é o melhor jeito de aprender!",
      dicaAdulto:
        "Peer teaching (Fiorella & Mayer): explicar em voz alta consolida o aprendizado. Aproveita pra celebrar antes do diploma.",
    },
    {
      tipo: "celebracao",
      medalha: "Pronto pra Formatura",
      mascoteUrl: mascote,
      falaFinal: "Você passou no desafio! Amanhã, DIPLOMA!",
    },
  ],
  baseCientifica:
    "Avaliação lúdica pré-diploma — checagem de fluência em subitizing 1–4.",
};

const dia20: AulaEI = {
  slug: "pip-f1-s4-d20-diploma",
  titulo: "Dia 20 · Diploma da Fase 1",
  icone: "🎓",
  bncc: ["EI03ET07", "EI03ET08"],
  duracaoMin: 10,
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: mascote,
      falaMascote:
        "Chegou o dia! Você terminou a Fase 1 do Contar com Pip! Vamos revisar tudo rapidinho e pegar o seu diploma!",
    },
    {
      tipo: "subitizingFlash",
      imagemUrl: coracao,
      quantidade: 4,
      itemPlural: "corações",
      instrucaoAudio: "Última rodada!",
      perguntaAudio: "Quantos corações?",
      opcoes: [3, 4, 5],
      feedbackAcerto: "QUATRO! Perfeito!",
      feedbackErro: "Eram QUATRO!",
    },
    {
      tipo: "contarBolas",
      imagemUrl: estrela,
      quantidade: 3,
      itemSingular: "estrela",
      itemPlural: "estrelas",
      instrucaoAudio: "Confirma: UM, DOIS, TRÊS.",
      elogio: "Três estrelas — brilhando pra você!",
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Qual grupo mostra 2 + 2?",
      opcoes: [
        { nome: "três bolas", imagemUrl: bola, correta: false, quantidade: 3 },
        { nome: "quatro joaninhas", imagemUrl: joaninha, correta: true, quantidade: 4 },
        { nome: "duas flores", imagemUrl: flor, correta: false, quantidade: 2 },
      ],
      feedbackAcerto: "Isso! 2 + 2 = 4!",
      feedbackErro: "2 mais 2 dá 4. Escolhe o grupo com 4!",
    },
    {
      tipo: "diplomaFase",
      titulo: "Subitizador(a) do Pip",
      curso: "Contar com Pip — Fase 1 · Subitizing (1–4)",
      descricao:
        "Por reconhecer 1, 2, 3 e 4 sem contar; comparar MAIS, MENOS e IGUAL; e compor 3 e 4 de vários jeitos — construindo o senso numérico, base de toda a matemática.",
      personagem: "pip",
      numeroColecao: 1,
      totalColecao: 8,
      falaFinal:
        "PARABÉNS! Você é oficialmente Subitizador do Pip! Seu diploma tá pronto — clica pra abrir!",
    },
  ],
  baseCientifica:
    "Diploma da Fase 1. Marcadores de fluência: acerto de 1–4 em <3s, comparação MAIS/MENOS/IGUAL, composição 2+1, 2+2, 3+1. Pronto para Fase 2 (contagem 1-a-1 até 10).",
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
    {
      slug: "pip-f1-s2",
      numero: 2,
      titulo: "Semana 2 · Olho Rápido",
      subtitulo: "Comparar, padrões de dominó e cenários reais",
      aulas: [dia06, dia07, dia08, dia09, dia10],
    },
    {
      slug: "pip-f1-s3",
      numero: 3,
      titulo: "Semana 3 · Mestre do 4",
      subtitulo: "Compor, decompor e ver rápido",
      aulas: [dia11, dia12, dia13, dia14, dia15],
    },
    {
      slug: "pip-f1-s4",
      numero: 4,
      titulo: "Semana 4 · Formatura em Subitizing",
      subtitulo: "Mistura, ponte pro 5 e diploma da Fase 1",
      aulas: [dia16, dia17, dia18, dia19, dia20],
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
