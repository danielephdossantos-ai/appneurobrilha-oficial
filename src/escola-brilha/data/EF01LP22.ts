import type { Aula } from "../types";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as familiaImg } from "@/assets/neuro-treino/objetos/familia-mae-filho.png.asset.json";

/**
 * EF01LP22 — Aula 022 · DÍGRAFO LH
 * Reforma fônica: 2 letras, 1 som (/ʎ/).
 */
const aula: Aula = {
  codigo: "EF01LP22",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Duas letras, um som só: LH",
  narrativa: {
    titulo: "Duas letras, um som só: LH",
    contexto:
      "Depois do CH, Brilha achou outro dígrafo escondido: o LH! É o som da FOLHA, do FILHO, do MOLHO.",
    problema:
      "Se ler L e H separados, sai errado — o LH tem um som ÚNICO, molhadinho na boca.",
    convite: "Bora descobrir esse LH gostoso de falar?",
  },
  conhecimentosPrevios: [
    "Ler sílabas simples (LP11–LP13).",
    "Ler mini-textos (LP19–LP20).",
    "Conhecer dígrafo CH (LP21).",
  ],
  missao: "Reconhecer o dígrafo LH e ler palavras com LHA, LHE, LHO.",
  objetivos: [
    "Perceber que L+H = um som só.",
    "Ler LHA, LHE, LHI, LHO, LHU.",
    "Identificar palavras com LH no meio.",
    "Ler frases com palavras que têm LH.",
  ],
  motivacao: "Cada dígrafo novo abre portas de leitura — LH está em muitas palavras do dia a dia!",
  explicacao:
    "🎯 DÍGRAFO LH:\n\nL + H = som molhadinho, tipo 'lhh'.\n\nSílabas:\n· LHA (como em FOLHA, PALHA)\n· LHE (como em MULHER)\n· LHO (como em MOLHO, FILHO)\n\n⚠️ LH quase nunca aparece no COMEÇO da palavra — quase sempre no MEIO.",
  explicacaoAtiva: [
    {
      texto: "LH tem duas letras, mas UM som só — molhadinho.",
      exemplo: "FOLHA = FO + LHA.",
      imagem: arvoreImg,
      imagemAlt: "Árvore com folhas",
      checagem: {
        pergunta: "LH faz quantos sons?",
        opcoes: ["Um som", "Dois sons"],
        correta: 0,
        explicacao: "Um som só.",
      },
    },
    {
      texto: "FILHO tem LH no meio: FI-LHO.",
      exemplo: "FI + LHO = FILHO.",
      imagem: familiaImg,
      imagemAlt: "Mãe e filho",
      checagem: {
        pergunta: "Onde está o LH em FILHO?",
        opcoes: ["No começo", "No meio", "No fim"],
        correta: 1,
        explicacao: "No meio: FI-LHO.",
      },
    },
    {
      texto: "MOLHO = MO + LHO. O molho do macarrão!",
      exemplo: "MO + LHO = MOLHO.",
      imagem: florImg,
      imagemAlt: "Molho vermelho",
      checagem: {
        pergunta: "MO + LHO = ?",
        opcoes: ["MOLHO", "MOLO", "MOLIO"],
        correta: 0,
        explicacao: "MOLHO.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "LH = 2 letras, 1 som.",
    nivel2: "Sílabas: LHA, LHE, LHO.",
    nivel3: "LH aparece no MEIO da palavra.",
    nivel4: "Palavras: FOLHA, FILHO, MOLHO, MULHER, PALHA.",
  },
  exemploResolvido: {
    enunciado: "Leia: FOLHA.",
    passos: [
      "Vejo FO — leio FO.",
      "Vejo LH — 1 som só.",
      "LH + A = LHA.",
      "FO + LHA = FOLHA. ✅",
    ],
    resposta: "FOLHA.",
  },
  atividadeGuiada: {
    enunciado: "🔊 Qual palavra tem LH?",
    resposta: "FOLHA.",
    explicacao: "FOLHA tem LH no meio.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Tem LH:",
      opcoes: [
        { nome: "folha", imagemUrl: arvoreImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "casa", imagemUrl: casaImg },
      ],
      respostaCerta: "folha",
    },
  },
  exercicios: [
    { enunciado: "LH tem quantos sons?", resposta: "1 som só.", dica: "Dígrafo." },
    { enunciado: "FO + LHA =", resposta: "FOLHA.", dica: "Junte as sílabas." },
    { enunciado: "FI + LHO =", resposta: "FILHO.", dica: "Junte as sílabas." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: reconhecer LH.",
    resposta: "LH no meio das palavras.",
    visual: {
      cena: [
        { personagem: "FOLHA", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#22C55E" },
        { personagem: "FILHO", itemImagemUrl: familiaImg, quantidade: 1, cor: "#F59E0B" },
        { personagem: "SOL", itemImagemUrl: solImg, quantidade: 1, cor: "#F97316" },
      ],
      perguntas: [
        { pergunta: "LH forma quantos sons?", opcoes: ["1", "2"], correta: 0, explicacao: "1 som." },
        { pergunta: "FOLHA tem LH?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Sim, no meio." },
        { pergunta: "FI+LHO=", opcoes: ["FILHO", "FILO"], correta: 0, explicacao: "FILHO." },
        { pergunta: "LH aparece mais…", opcoes: ["No começo", "No meio"], correta: 1, explicacao: "No meio." },
        { pergunta: "Palavra SEM LH:", opcoes: ["SOL", "FOLHA"], correta: 0, explicacao: "SOL." },
      ],
    },
  },
  revisao: {
    pontos: [
      "LH = 2 letras, 1 som.",
      "LHA · LHE · LHO.",
      "Aparece no MEIO da palavra.",
      "Palavras: FOLHA, FILHO, MOLHO.",
    ],
    dica: "Se vir LH, junte num som só, molhadinho.",
  },
  quiz: [
    { pergunta: "LH = quantos sons?", opcoes: ["1", "2"], correta: 0, explicacao: "1 som." },
    { pergunta: "FO+LHA=", opcoes: ["FOLHA", "FOLA"], correta: 0, explicacao: "FOLHA." },
    { pergunta: "Onde fica LH?", opcoes: ["No meio", "No começo"], correta: 0, explicacao: "No meio." },
    { pergunta: "FI+LHO=", opcoes: ["FILHO", "FILO"], correta: 0, explicacao: "FILHO." },
    { pergunta: "Tem LH:", opcoes: ["MOLHO", "SOL"], correta: 0, explicacao: "MOLHO." },
  ],
  conclusao:
    "🏅 Medalha: MESTRE DO LH! Missão em Casa: procurar 3 palavras com LH (folha, filho, colher, molho, mulher…).",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O som LH é raro no mundo — poucas línguas têm! Português, italiano e catalão têm. Inglês não tem.",
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Tem LH?",
      instrucao: "🔊 Qual palavra tem LH?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "FOLHA", imagemUrl: arvoreImg, rotulo: "🍃 FOLHA" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "⚽ BOLA" },
      ],
      correta: 0,
      acerto: "🍃 FOLHA tem LH!",
      erro: "LH está em FO-LHA.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Som do LH",
      instrucao: "🔊 LH faz quantos sons?",
      figura: { imagemUrl: arvoreImg, rotulo: "🍃" },
      pergunta: "Escolha:",
      opcoes: ["1 SOM SÓ", "2 SONS"],
      correta: 0,
      acerto: "1 som — dígrafo!",
      erro: "Dígrafo: 2 letras, 1 som.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Sílaba com LH",
      instrucao: "🔊 FO + LHA = ?",
      figura: { imagemUrl: arvoreImg, rotulo: "🍃" },
      pergunta: "Escolha:",
      opcoes: ["FOLHA", "FOLA", "FOIA"],
      correta: 0,
      acerto: "FOLHA!",
      erro: "FO+LHA = FOLHA.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Tem LH ou não tem?",
      instrucao: "Arraste cada palavra.",
      pares: [
        { item: "FOLHA", alvo: "TEM LH" },
        { item: "FILHO", alvo: "TEM LH" },
        { item: "SOL", alvo: "NÃO TEM" },
        { item: "BOLA", alvo: "NÃO TEM" },
      ],
      alvosVisuais: [
        { nome: "TEM LH", cor: "#22C55E", capacidade: 2 },
        { nome: "NÃO TEM", cor: "#94A3B8", capacidade: 2 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Leitura",
      instrucao: "🔊 'A FOLHA CAI.' O que cai?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "FOLHA", imagemUrl: arvoreImg, rotulo: "🍃 FOLHA" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "CASA", imagemUrl: casaImg, rotulo: "🏠 CASA" },
      ],
      correta: 0,
      acerto: "🍃 A FOLHA cai!",
      erro: "Volte na frase: A FOLHA CAI.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "LH = quantos sons?", opcoes: ["1", "2"], correta: 0, explicacao: "1 som.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "LH" } },
      { pergunta: "FOLHA tem LH?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Sim.", visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🍃" } },
      { pergunta: "FO+LHA=", opcoes: ["FOLHA", "FOLA"], correta: 0, explicacao: "FOLHA.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "FOLHA" } },
    ],
    medio: [
      { pergunta: "FI+LHO=", opcoes: ["FILHO", "FILO"], correta: 0, explicacao: "FILHO.", visual: { tipo: "itens", imagemUrl: familiaImg, quantidade: 1, rotulo: "👨‍👦" } },
      { pergunta: "LH fica…", opcoes: ["No meio", "No começo"], correta: 0, explicacao: "No meio.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "📍" } },
      { pergunta: "MO+LHO=", opcoes: ["MOLHO", "MOLO"], correta: 0, explicacao: "MOLHO.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "MOLHO" } },
    ],
    dificil: [
      { pergunta: "Palavra SEM LH:", opcoes: ["SOL", "FOLHA"], correta: 0, explicacao: "SOL.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" } },
      { pergunta: "LH em MULHER está…", opcoes: ["No meio", "No começo"], correta: 0, explicacao: "MU-LHER.", visual: { tipo: "itens", imagemUrl: familiaImg, quantidade: 1, rotulo: "MULHER" } },
      { pergunta: "Ler L e H separados:", opcoes: ["Sai errado", "Sai igual"], correta: 0, explicacao: "É dígrafo.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "⚠️" } },
    ],
  },
  proximaHabilidade: { codigo: "EF01LP23", titulo: "Dígrafo NH" },
};

export default aula;
