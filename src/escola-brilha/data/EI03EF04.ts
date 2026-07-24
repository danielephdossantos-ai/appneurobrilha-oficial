import type { Aula } from "../types";
import { url as princesaImg } from "@/assets/neuro-treino/objetos/princesa.png.asset.json";
import { url as coelhoImg } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as heroiImg } from "@/assets/neuro-treino/objetos/heroi.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * EI03EF04 — Pré II · Recontar histórias ouvidas
 * Pedagogia: estrutura narrativa (COMEÇO, MEIO, FIM), memória de trabalho,
 * competência oral (Bruner — mente narrativa; a criança organiza o mundo
 * contando histórias).
 */
const aula: Aula = {
  codigo: "EI03EF04",
  ano: "Educação Infantil",
  disciplina: "Português",
  titulo: "Contar de Novo",

  narrativa: {
    titulo: "A história que virou música",
    contexto: "A vovó contou uma história pro Brilha: 'Era uma vez um COELHO que morava numa CASA embaixo da ÁRVORE…'.",
    problema: "O Brilha adorou tanto que quer contar de novo pros amigos. Mas por onde começa?",
    convite: "Bora aprender a RECONTAR: começo, meio e fim!",
  },

  conhecimentosPrevios: ["Já ouviu histórias.", "Sabe falar frases curtas.", "Lembra de coisas do dia."],

  missao: "Aprender que toda história tem COMEÇO, MEIO e FIM — e contar de novo respeitando essa ordem.",

  objetivos: [
    "Identificar começo, meio e fim de uma história curta.",
    "Nomear os personagens principais.",
    "Recontar a história com as próprias palavras.",
  ],

  explicacao:
    "Toda história tem 3 partes:\n\n• COMEÇO — 'Era uma vez…' Apresenta o personagem e o lugar.\n• MEIO — Acontece um PROBLEMA. Alguma coisa muda.\n• FIM — O problema se resolve. 'E viveram felizes.'\n\nRecontar é lembrar dessas 3 partes NA ORDEM e falar com as SUAS palavras.\n\nNão precisa decorar tudo — só o COMEÇO, o MEIO e o FIM.",

  explicacaoAtiva: [
    { texto: "COMEÇO: Era uma vez um coelho que morava numa casinha.", imagem: coelhoImg, imagemAlt: "Coelho" },
    { texto: "MEIO: Um dia o SOL sumiu e ficou tudo escuro. O coelho ficou com medo.", imagem: solImg, imagemAlt: "Sol" },
    {
      texto: "FIM: A LUA apareceu, fez luz e o coelho ficou feliz.",
      imagem: luaImg,
      imagemAlt: "Lua",
      checagem: {
        pergunta: "Qual é o COMEÇO da história?",
        opcoes: ["Era uma vez um coelho…", "E viveram felizes."],
        correta: 0,
        explicacao: "'Era uma vez' é o começo clássico.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Toda história tem começo, meio e fim.",
    nivel2: "Começo apresenta, meio dá o problema, fim resolve.",
    nivel3: "Não precisa lembrar tudo — só as 3 partes principais.",
    nivel4: "Recontar treina a memória e ajuda quando você quer contar o SEU dia pra alguém.",
  },

  exemploResolvido: {
    enunciado: "Reconte a história do coelho em 3 frases.",
    passos: [
      "COMEÇO: Um coelho morava numa casa embaixo da árvore.",
      "MEIO: O sol sumiu e ele ficou com medo.",
      "FIM: A lua apareceu e o coelho ficou feliz.",
    ],
    resposta: "Coelho — Medo do escuro — Lua que salva.",
  },

  atividadeGuiada: {
    enunciado: "Qual imagem mostra o COMEÇO da história (o coelho na casinha)?",
    resposta: "O coelho.",
    explicacao: "Começo é onde a gente conhece o personagem.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Toque no personagem do COMEÇO.",
      opcoes: [
        { nome: "Coelho", imagemUrl: coelhoImg },
        { nome: "Lua", imagemUrl: luaImg },
        { nome: "Casa", imagemUrl: casaImg },
      ],
      respostaCerta: "Coelho",
    },
  },

  exercicios: [
    { enunciado: "Como começa quase toda história?", resposta: "Era uma vez…", dica: "Frase mágica." },
    { enunciado: "No MEIO acontece o quê?", resposta: "Um problema.", dica: "Alguma coisa muda." },
    { enunciado: "Como termina uma história feliz?", resposta: "E viveram felizes.", dica: "Fim bonito." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: monte a história certa colocando começo, meio e fim.",
    resposta: "Personagem → problema → solução.",
    visual: {
      cena: [
        { personagem: "Coelho (COMEÇO)", itemImagemUrl: coelhoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Sol some (MEIO)", itemImagemUrl: solImg, quantidade: 1, cor: "#F87171" },
        { personagem: "Lua salva (FIM)", itemImagemUrl: luaImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        { pergunta: "Quem aparece no COMEÇO?", opcoes: ["Coelho", "Lua"], correta: 0, explicacao: "Começo apresenta o coelho." },
        { pergunta: "O que acontece no MEIO?", opcoes: ["O sol some", "Todo mundo dorme"], correta: 0, explicacao: "Meio traz o problema." },
        { pergunta: "Como termina?", opcoes: ["A lua salva", "Ninguém volta"], correta: 0, explicacao: "Fim resolve com a lua." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Começo apresenta o personagem.",
      "Meio traz o problema.",
      "Fim resolve.",
      "Recontar = lembrar as 3 partes.",
    ],
    dica: "Em casa: peça pra alguém contar uma história curta. Depois reconte com suas palavras.",
  },

  quiz: [
    { pergunta: "Toda história tem quantas partes principais?", opcoes: ["3", "10"], correta: 0, explicacao: "Começo, meio e fim.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 3, rotulo: "Partes" } },
    { pergunta: "'Era uma vez' é…?", opcoes: ["Começo", "Fim"], correta: 0, explicacao: "Frase clássica de início.", visual: { tipo: "itens", imagemUrl: princesaImg, quantidade: 1, rotulo: "Era uma vez" } },
    { pergunta: "No MEIO acontece…?", opcoes: ["Um problema", "Só festa"], correta: 0, explicacao: "O meio é onde surge o desafio.", visual: { tipo: "itens", imagemUrl: heroiImg, quantidade: 1, rotulo: "Herói age" } },
  ],

  conclusao: "🏅 Você virou CONTADOR DE HISTÓRIAS! Missão em Casa: reconte uma história pra alguém antes de dormir.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Recontar história ajuda a memória a ficar forte — o cérebro treina como se fosse musculação.",
    imagemUrl: arvoreImg,
  },

  interativas: [
    {
      tipo: "ordenar",
      titulo: "Fase 1 · Coloque em ordem",
      instrucao: "Começo, meio, fim.",
      itens: ["Era uma vez um coelho", "O sol sumiu e deu medo", "A lua apareceu e ele dormiu feliz"],
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Parte certa",
      instrucao: "Ligue cada frase à parte da história.",
      pares: [
        { a: "Era uma vez…", b: "Começo" },
        { a: "Aí surgiu um problema…", b: "Meio" },
        { a: "E viveram felizes.", b: "Fim" },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "'Era uma vez' é começo?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "É o começo mais famoso.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    ],
    medio: [
      { pergunta: "No MEIO, geralmente aparece…?", opcoes: ["Um problema", "O final"], correta: 0, explicacao: "Problema no meio.", visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "Sol some" } },
    ],
    dificil: [
      { pergunta: "Recontar bem = lembrar do…?", opcoes: ["Começo, meio e fim", "Só do final"], correta: 0, explicacao: "As 3 partes juntas.", visual: { tipo: "itens", imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelho" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03EF05", titulo: "Ditar para o Professor" },
};

export default aula;
