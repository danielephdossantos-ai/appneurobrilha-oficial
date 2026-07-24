import type { Aula } from "../types";
import { url as chuvaImg } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as coracaoImg } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * EF01LP21 — Aula 021 · DÍGRAFO CH
 * Reforma fônica: 2 letras que fazem 1 som só (/x/).
 */
const aula: Aula = {
  codigo: "EF01LP21",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Duas letras, um som só: CH",
  narrativa: {
    titulo: "Duas letras, um som só: CH",
    contexto:
      "Brilha descobriu uma coisa curiosa: às vezes DUAS letras se juntam pra fazer UM SOM só. É o caso do CH!",
    problema:
      "Se ler C e H separados, sai errado. Juntos, viram um som especial: como em CHUVA, CHAVE, CHÁ.",
    convite: "Bora aprender esse som mágico do CH?",
  },
  conhecimentosPrevios: [
    "Ler sílabas CV (LP11–LP13).",
    "Ler palavras CVCV (LP14–LP15).",
    "Ler mini-textos (LP19–LP20).",
  ],
  missao: "Reconhecer o dígrafo CH e ler palavras que começam ou têm CH.",
  objetivos: [
    "Perceber que C+H = um som só (/x/).",
    "Ler CHA, CHE, CHI, CHO, CHU.",
    "Identificar palavras com CH.",
    "Ler frase curta com palavra em CH.",
  ],
  motivacao: "CH é o primeiro dígrafo — abre a porta pra ler MUITAS palavras novas.",
  explicacao:
    "🎯 DÍGRAFO CH:\n\nC + H = /x/ (um som só, tipo 'xxx').\n\nSílabas:\n· CHA (como em CHAVE, CHÁ)\n· CHE (como em CHEIRO)\n· CHI (como em CHINELO)\n· CHO (como em CHOCOLATE)\n· CHU (como em CHUVA)\n\n⚠️ Nunca leia C e H separados — juntos formam UM som.",
  explicacaoAtiva: [
    {
      texto: "CH tem duas letras mas UM som só. Como em CHUVA.",
      exemplo: "CHUVA = CH-U-VA (CH junto = /x/).",
      imagem: chuvaImg,
      imagemAlt: "Chuva caindo",
      checagem: {
        pergunta: "CH faz quantos sons?",
        opcoes: ["Dois sons", "Um som só", "Três sons"],
        correta: 1,
        explicacao: "Um som só — /x/.",
      },
    },
    {
      texto: "CHUVA começa com CH. Repita: /xxx/-UVA.",
      exemplo: "CH + U = CHU. CHU + VA = CHUVA.",
      imagem: chuvaImg,
      imagemAlt: "Chuva",
      checagem: {
        pergunta: "Com que sílaba começa CHUVA?",
        opcoes: ["CU", "CHU", "SU"],
        correta: 1,
        explicacao: "CHU (com dígrafo CH).",
      },
    },
    {
      texto: "CHÁ também começa com CH — /x/-Á.",
      exemplo: "Uma xícara de CHÁ. CH+Á = CHÁ.",
      imagem: florImg,
      imagemAlt: "Chá quentinho",
      checagem: {
        pergunta: "Quantas letras tem CHÁ?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "3 letras (C, H, Á), mas 2 sons: /x/ e /á/.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "CH = 2 letras, 1 som só.",
    nivel2: "CH+A=CHA · CH+E=CHE · CH+I=CHI · CH+O=CHO · CH+U=CHU.",
    nivel3: "Palavras: CHUVA, CHAVE, CHÁ, CHEIRO, CHINELO.",
    nivel4: "Dígrafo = letras juntas que valem por 1 fonema.",
  },
  exemploResolvido: {
    enunciado: "Leia: CHUVA. Como se pronuncia?",
    passos: [
      "Vejo CH — não leio C, H separados.",
      "CH = som /x/.",
      "CH + U = CHU.",
      "CHU + VA = CHUVA. ✅",
    ],
    resposta: "CHUVA.",
  },
  atividadeGuiada: {
    enunciado: "🔊 Qual palavra começa com CH?",
    resposta: "CHUVA.",
    explicacao: "CH inicial: CHUVA.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Começa com CH:",
      opcoes: [
        { nome: "chuva", imagemUrl: chuvaImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "lua", imagemUrl: luaImg },
      ],
      respostaCerta: "chuva",
    },
  },
  exercicios: [
    { enunciado: "CH faz quantos sons?", resposta: "1 som só.", dica: "É um dígrafo." },
    { enunciado: "CHUVA começa com…", resposta: "CH (som /x/).", dica: "2 letras, 1 som." },
    { enunciado: "Se leio C-H separados, sai…", resposta: "ERRADO.", dica: "CH é junto." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: reconhecer o dígrafo CH.",
    resposta: "CH = 1 som.",
    visual: {
      cena: [
        { personagem: "CHUVA", itemImagemUrl: chuvaImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "CHÁ", itemImagemUrl: florImg, quantidade: 1, cor: "#34D399" },
        { personagem: "CASA", itemImagemUrl: casaImg, quantidade: 1, cor: "#F59E0B" },
      ],
      perguntas: [
        { pergunta: "CH forma…", opcoes: ["1 som", "2 sons", "3 sons"], correta: 0, explicacao: "1 som." },
        { pergunta: "CHUVA começa com…", opcoes: ["CU", "CHU", "SU"], correta: 1, explicacao: "CHU." },
        { pergunta: "CH aparece em…", opcoes: ["CHÁ", "SOL", "CASA"], correta: 0, explicacao: "CHÁ tem CH." },
        { pergunta: "CHINELO começa com…", opcoes: ["CHI", "SI", "TI"], correta: 0, explicacao: "CHI." },
        { pergunta: "Dígrafo é:", opcoes: ["Letras juntas = 1 som", "Sinal", "Número"], correta: 0, explicacao: "Letras que valem 1 som." },
      ],
    },
  },
  revisao: {
    pontos: [
      "CH = dígrafo (2 letras, 1 som).",
      "CHA · CHE · CHI · CHO · CHU.",
      "Palavras: CHUVA, CHÁ, CHAVE, CHINELO.",
      "Nunca ler C e H separados.",
    ],
    dica: "Se vir CH, junte tudo num som só: /xxx/.",
  },
  quiz: [
    { pergunta: "CH tem quantos sons?", opcoes: ["1", "2"], correta: 0, explicacao: "1 som." },
    { pergunta: "CHUVA começa com…", opcoes: ["CHU", "SU"], correta: 0, explicacao: "CHU." },
    { pergunta: "CH+A=", opcoes: ["CHA", "CA"], correta: 0, explicacao: "CHA." },
    { pergunta: "Dígrafo:", opcoes: ["2 letras 1 som", "1 letra 2 sons"], correta: 0, explicacao: "2 letras, 1 som." },
    { pergunta: "Palavra com CH:", opcoes: ["CHÁ", "SOL"], correta: 0, explicacao: "CHÁ tem CH." },
  ],
  conclusao:
    "🏅 Medalha: MESTRE DO DÍGRAFO CH! Missão em Casa: procurar 3 palavras com CH em livros/embalagens (chocolate, chá, chuveiro…).",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Antes de 1500, o CH era escrito em latim como uma só letra! Depois virou dígrafo, mas o som ficou.",
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Achar o CH",
      instrucao: "🔊 Qual começa com CH?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "CHUVA", imagemUrl: chuvaImg, rotulo: "🌧️ CHUVA" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "LUA", imagemUrl: luaImg, rotulo: "🌙 LUA" },
      ],
      correta: 0,
      acerto: "🌧️ CHUVA — começa com CH!",
      erro: "CH está em CHUVA (/xxx/-UVA).",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · CH forma…",
      instrucao: "🔊 CH forma quantos sons?",
      figura: { imagemUrl: chuvaImg, rotulo: "🌧️" },
      pergunta: "Escolha:",
      opcoes: ["1 SOM SÓ", "2 SONS", "3 SONS"],
      correta: 0,
      acerto: "1 som — dígrafo!",
      erro: "CH é dígrafo: 2 letras, 1 som.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Sílaba com CH",
      instrucao: "🔊 CH + U = ?",
      figura: { imagemUrl: chuvaImg, rotulo: "🌧️" },
      pergunta: "Escolha:",
      opcoes: ["CHU", "CU", "SU"],
      correta: 0,
      acerto: "CHU — como em CHUVA!",
      erro: "CH+U = CHU.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Tem CH ou não tem?",
      instrucao: "Arraste cada palavra pro grupo certo.",
      pares: [
        { item: "CHUVA", alvo: "TEM CH" },
        { item: "CHÁ", alvo: "TEM CH" },
        { item: "SOL", alvo: "NÃO TEM" },
        { item: "CASA", alvo: "NÃO TEM" },
      ],
      alvosVisuais: [
        { nome: "TEM CH", cor: "#60A5FA", capacidade: 2 },
        { nome: "NÃO TEM", cor: "#94A3B8", capacidade: 2 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Leitura",
      instrucao: "🔊 'A CHUVA CAI.' Quem cai?",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "CHUVA", imagemUrl: chuvaImg, rotulo: "🌧️ CHUVA" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "CORAÇÃO", imagemUrl: coracaoImg, rotulo: "💛 CORAÇÃO" },
      ],
      correta: 0,
      acerto: "🌧️ A CHUVA cai!",
      erro: "Volte na frase: A CHUVA CAI.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "CH = quantos sons?", opcoes: ["1", "2"], correta: 0, explicacao: "1 som.", visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "CH" } },
      { pergunta: "CHUVA começa com…", opcoes: ["CHU", "SU"], correta: 0, explicacao: "CHU.", visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "🌧️" } },
      { pergunta: "CH+A=", opcoes: ["CHA", "CA"], correta: 0, explicacao: "CHA.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "CHA" } },
    ],
    medio: [
      { pergunta: "CHINELO tem…", opcoes: ["CH inicial", "S inicial"], correta: 0, explicacao: "CHI-.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "CHI" } },
      { pergunta: "Dígrafo:", opcoes: ["2 letras 1 som", "1 letra 2 sons"], correta: 0, explicacao: "2 letras, 1 som.", visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "🔗" } },
      { pergunta: "'A CHUVA CAI.' Quem cai?", opcoes: ["Chuva", "Sol"], correta: 0, explicacao: "Chuva.", visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "🌧️" } },
    ],
    dificil: [
      { pergunta: "CH em CHOCOLATE está em…", opcoes: ["Começo", "Meio", "Fim"], correta: 0, explicacao: "CHO-.", visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "CHO" } },
      { pergunta: "Se ler C e H separados…", opcoes: ["Sai errado", "Sai igual"], correta: 0, explicacao: "CH é junto.", visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "⚠️" } },
      { pergunta: "Palavra sem CH:", opcoes: ["CASA", "CHUVA"], correta: 0, explicacao: "CASA não tem CH.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" } },
    ],
  },
  proximaHabilidade: { codigo: "EF01LP22", titulo: "Dígrafo LH" },
};

export default aula;
