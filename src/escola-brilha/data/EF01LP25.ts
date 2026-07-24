import type { Aula } from "../types";
import { url as tremImg } from "@/assets/neuro-treino/objetos/trem.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * EF01LP25 — Aula 025 · ENCONTROS CONSONANTAIS BR, PR, TR, CR, FR, GR
 * Reforma fônica: duas consoantes seguidas, cada uma com seu som.
 */
const aula: Aula = {
  codigo: "EF01LP25",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Duas consoantes seguidas: BR, PR, TR, CR, FR, GR",
  narrativa: {
    titulo: "Duas consoantes seguidas",
    contexto:
      "Brilha achou palavras onde DUAS consoantes aparecem grudadas: BR de BRAÇO, PR de PRATO, TR de TREM.",
    problema:
      "É diferente de dígrafo! Aqui cada consoante GUARDA o seu som — ambas se ouvem.",
    convite: "Bora ler essas palavras juntas?",
  },
  conhecimentosPrevios: [
    "Ler sílabas CV (LP11–LP13).",
    "Dígrafos CH, LH, NH (LP21–LP23).",
    "Letras dobradas (LP24).",
  ],
  missao: "Ler palavras com encontros consonantais BR, PR, TR, CR, FR, GR.",
  objetivos: [
    "Perceber que cada consoante do encontro tem seu som.",
    "Ler BRA, PRA, TRA, CRA, FRA, GRA.",
    "Diferenciar encontro consonantal de dígrafo.",
    "Ler frases com encontros consonantais.",
  ],
  motivacao: "Com esses encontros você abre a leitura de milhares de palavras — TRABALHAR, ESTRELA, BRINCAR…",
  explicacao:
    "🎯 ENCONTRO CONSONANTAL:\n\nDuas consoantes seguidas, cada uma com SEU som.\n\n· BR (BRAÇO, BRUXA, BRINCAR)\n· PR (PRATO, PRETO, PROVA)\n· TR (TREM, TRÊS, TRAVÃO)\n· CR (CRUZ, CRIANÇA, CROSS)\n· FR (FRUTA, FRIO, FRACO)\n· GR (GRUPO, GRÃO, GRAMA)\n\n⚠️ Diferente de dígrafo (CH, LH, NH): aqui você OUVE as DUAS consoantes.",
  explicacaoAtiva: [
    {
      texto: "TREM tem TR — 2 consoantes, 2 sons.",
      exemplo: "T + R + EM = TREM.",
      imagem: tremImg,
      imagemAlt: "Trem em movimento",
      checagem: {
        pergunta: "TR faz quantos sons?",
        opcoes: ["1 som", "2 sons"],
        correta: 1,
        explicacao: "2 sons (T e R).",
      },
    },
    {
      texto: "FLOR tem FL — dá pra ouvir F e L.",
      exemplo: "F + L + OR = FLOR.",
      imagem: florImg,
      imagemAlt: "Flor",
      checagem: {
        pergunta: "FL é dígrafo ou encontro?",
        opcoes: ["Dígrafo", "Encontro"],
        correta: 1,
        explicacao: "Encontro consonantal.",
      },
    },
    {
      texto: "PRATO tem PR — junta 3 letras na sílaba: P-R-A.",
      exemplo: "PRA + TO = PRATO.",
      imagem: estrelaImg,
      imagemAlt: "Prato",
      checagem: {
        pergunta: "PRA tem quantos sons?",
        opcoes: ["2", "3"],
        correta: 1,
        explicacao: "3 sons: P, R, A.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Encontro consonantal = 2 consoantes juntas, 2 sons.",
    nivel2: "BR, PR, TR, CR, FR, GR (também BL, CL, FL, GL, PL).",
    nivel3: "Diferente de dígrafo: aqui ouve-se as duas.",
    nivel4: "Sílabas: BRA, PRE, TRO, CRU…",
  },
  exemploResolvido: {
    enunciado: "Leia: TREM.",
    passos: [
      "TR — leio T e R juntos.",
      "TR + EM = TREM.",
      "Ouço as 2 consoantes. ✅",
    ],
    resposta: "TREM.",
  },
  atividadeGuiada: {
    enunciado: "🔊 Qual palavra tem encontro consonantal?",
    resposta: "TREM (tem TR).",
    explicacao: "TR = 2 consoantes.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Tem encontro:",
      opcoes: [
        { nome: "trem", imagemUrl: tremImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "trem",
    },
  },
  exercicios: [
    { enunciado: "Encontro consonantal tem quantas consoantes juntas?", resposta: "2.", dica: "Duas." },
    { enunciado: "TR + EM =", resposta: "TREM.", dica: "Junte." },
    { enunciado: "PR + ATO =", resposta: "PRATO.", dica: "Junte." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: encontrar encontros consonantais.",
    resposta: "BR, PR, TR, CR, FR, GR.",
    visual: {
      cena: [
        { personagem: "TREM", itemImagemUrl: tremImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "FLOR", itemImagemUrl: florImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "ÁRVORE", itemImagemUrl: arvoreImg, quantidade: 1, cor: "#22C55E" },
      ],
      perguntas: [
        { pergunta: "Encontro = quantas consoantes?", opcoes: ["2", "1"], correta: 0, explicacao: "2." },
        { pergunta: "TR = quantos sons?", opcoes: ["2", "1"], correta: 0, explicacao: "2." },
        { pergunta: "FLOR tem…", opcoes: ["Encontro FL", "Dígrafo"], correta: 0, explicacao: "Encontro FL." },
        { pergunta: "PR+ATO=", opcoes: ["PRATO", "PATO"], correta: 0, explicacao: "PRATO." },
        { pergunta: "Diferente de dígrafo:", opcoes: ["Ouve as 2", "Ouve 1 só"], correta: 0, explicacao: "Ouve as duas." },
      ],
    },
  },
  revisao: {
    pontos: [
      "Encontro = 2 consoantes juntas, 2 sons.",
      "BR, PR, TR, CR, FR, GR.",
      "Diferente de dígrafo: aqui ouve as duas.",
      "Sílabas: BRA, PRE, TRO, CRU, FRI, GRA.",
    ],
    dica: "Se ouviu 2 consoantes, é encontro. Se ouviu 1 só, é dígrafo.",
  },
  quiz: [
    { pergunta: "Encontro consonantal =", opcoes: ["2 sons", "1 som"], correta: 0, explicacao: "2 sons." },
    { pergunta: "TR+EM=", opcoes: ["TREM", "TEM"], correta: 0, explicacao: "TREM." },
    { pergunta: "PR+ATO=", opcoes: ["PRATO", "PATO"], correta: 0, explicacao: "PRATO." },
    { pergunta: "Dígrafo x encontro:", opcoes: ["Dígrafo=1 som", "Iguais"], correta: 0, explicacao: "Dígrafo 1, encontro 2." },
    { pergunta: "FLOR tem…", opcoes: ["FL encontro", "FL dígrafo"], correta: 0, explicacao: "Encontro FL." },
  ],
  conclusao:
    "🏅 Medalha: CAÇADOR DE ENCONTROS! Missão em Casa: procurar 5 palavras com BR/PR/TR/CR/FR/GR.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Alguns encontros são difíceis pra crianças pequenas — por isso 'prato' pode virar 'pato'. Com treino, o cérebro aprende.",
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Encontro TR",
      instrucao: "🔊 Qual tem TR?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "TREM", imagemUrl: tremImg, rotulo: "🚂 TREM" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "CASA", imagemUrl: casaImg, rotulo: "🏠 CASA" },
      ],
      correta: 0,
      acerto: "🚂 TREM — TR!",
      erro: "TR está em TREM.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Encontro FL",
      instrucao: "🔊 FLOR tem…",
      figura: { imagemUrl: florImg, rotulo: "🌸" },
      pergunta: "Escolha:",
      opcoes: ["Encontro FL", "Dígrafo FL"],
      correta: 0,
      acerto: "Encontro — ouve F e L!",
      erro: "Ouve as 2 letras: encontro.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · PRATO",
      instrucao: "🔊 PR + ATO = ?",
      figura: { imagemUrl: estrelaImg, rotulo: "🍽️" },
      pergunta: "Escolha:",
      opcoes: ["PRATO", "PATO", "PARTO"],
      correta: 0,
      acerto: "PRATO!",
      erro: "PR+ATO = PRATO.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Dígrafo ou Encontro?",
      instrucao: "Arraste cada palavra.",
      pares: [
        { item: "CHUVA", alvo: "DÍGRAFO" },
        { item: "NINHO", alvo: "DÍGRAFO" },
        { item: "TREM", alvo: "ENCONTRO" },
        { item: "FLOR", alvo: "ENCONTRO" },
        { item: "PRATO", alvo: "ENCONTRO" },
      ],
      alvosVisuais: [
        { nome: "DÍGRAFO", cor: "#60A5FA", capacidade: 2 },
        { nome: "ENCONTRO", cor: "#F59E0B", capacidade: 3 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Leitura",
      instrucao: "🔊 'O TREM PARA.' O que para?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "TREM", imagemUrl: tremImg, rotulo: "🚂 TREM" },
        { nome: "FLOR", imagemUrl: florImg, rotulo: "🌸 FLOR" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
      ],
      correta: 0,
      acerto: "🚂 O TREM para!",
      erro: "Frase: O TREM PARA.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Encontro = quantas consoantes?", opcoes: ["2", "1"], correta: 0, explicacao: "2.", visual: { tipo: "itens", imagemUrl: tremImg, quantidade: 1, rotulo: "🚂" } },
      { pergunta: "TR+EM=", opcoes: ["TREM", "TEM"], correta: 0, explicacao: "TREM.", visual: { tipo: "itens", imagemUrl: tremImg, quantidade: 1, rotulo: "🚂" } },
      { pergunta: "PR+ATO=", opcoes: ["PRATO", "PATO"], correta: 0, explicacao: "PRATO.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "🍽️" } },
    ],
    medio: [
      { pergunta: "Dígrafo tem…", opcoes: ["1 som", "2 sons"], correta: 0, explicacao: "1 som.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "CH" } },
      { pergunta: "Encontro tem…", opcoes: ["2 sons", "1 som"], correta: 0, explicacao: "2 sons.", visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "FL" } },
      { pergunta: "FRUTA tem…", opcoes: ["Encontro FR", "Dígrafo FR"], correta: 0, explicacao: "Encontro.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "FR" } },
    ],
    dificil: [
      { pergunta: "'Pato' x 'Prato':", opcoes: ["Prato tem PR", "iguais"], correta: 0, explicacao: "PR muda a palavra.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "PR" } },
      { pergunta: "Sílaba BRA tem quantos sons?", opcoes: ["3", "2"], correta: 0, explicacao: "B, R, A.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "BRA" } },
      { pergunta: "Se ouviu 2 consoantes seguidas:", opcoes: ["Encontro", "Dígrafo"], correta: 0, explicacao: "Encontro.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "🎧" } },
    ],
  },
  proximaHabilidade: { codigo: "EF01LP26", titulo: "Texto completo com título e fluência" },
};

export default aula;
