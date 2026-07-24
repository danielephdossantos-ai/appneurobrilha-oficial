import type { Aula } from "../types";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as coelhoImg } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";

/**
 * EI03EF02 — Escuta, Fala, Pensamento e Imaginação · Pré II
 * BNCC: Inventar brincadeiras cantadas, poemas e canções, criando rimas,
 * aliterações e ritmos.
 *
 * Pedagogia (Pré II):
 *  - Rima é a base da CONSCIÊNCIA FONOLÓGICA — habilidade preditiva mais forte
 *    do sucesso na alfabetização (National Reading Panel, 2000).
 *  - Antes de ler letras, a criança precisa OUVIR que 'gato' e 'pato' terminam
 *    igual (rima) e que 'sapo' e 'sopa' começam igual (aliteração).
 *  - Método Heggerty: exposição diária a rimas cantadas cria a base fonológica.
 */
const aula: Aula = {
  codigo: "EI03EF02",
  ano: "Educação Infantil",
  disciplina: "Português",
  titulo: "Palavras que Rimam",

  narrativa: {
    titulo: "A poesia do Brilha",
    contexto: "O Brilha inventou uma música e falou: 'O GATO subiu no… PATO!' Todo mundo riu porque as palavras eram AMIGAS DE SOM.",
    problema: "Agora ele quer inventar mais rimas — palavras que terminam iguais. Mas quais palavras rimam com o quê?",
    convite: "Bora escutar o final das palavras e descobrir quem rima?",
  },

  conhecimentosPrevios: ["Repetir músicas curtas.", "Falar nomes de figuras.", "Escutar com atenção."],

  missao: "Descobrir que algumas palavras terminam COM O MESMO SOM — e que juntar essas palavras vira POESIA.",

  objetivos: [
    "Identificar pares de rima entre 2 palavras faladas.",
    "Completar uma frase com a palavra que RIMA.",
    "Perceber aliteração (palavras que COMEÇAM iguais).",
  ],

  explicacao:
    "RIMA é quando duas palavras terminam com o MESMO SOM.\n\n• GATO rima com PATO — os dois terminam em '…ATO'.\n• BOLA rima com COLA — os dois terminam em '…OLA'.\n• SOL rima com ANZOL — os dois terminam em '…OL'.\n\nA gente escuta as palavras até o FIM e vê se ficam iguais.\n\nRima é o segredo das MÚSICAS e das POESIAS — por isso a gente decora tão fácil.",

  explicacaoAtiva: [
    {
      texto: "Escuta: GAAA-TO… PAAA-TO. O finalzinho é 'ATO' nos dois. Isso é RIMA!",
      imagem: gatoImg,
      imagemAlt: "Gato — rima com pato",
      checagem: {
        pergunta: "GATO rima com…?",
        opcoes: ["Pato", "Cachorro"],
        correta: 0,
        explicacao: "Gato e Pato terminam em 'ATO'.",
      },
    },
    { texto: "SOL… LUA? Não rima. SOL… ANZOL? Rima! Os dois terminam em 'OL'.", imagem: solImg, imagemAlt: "Sol" },
    {
      texto: "Rima é como brincadeira: SAPO rima com COPO? Não, terminam diferente. SAPO rima com CAJU? Não. SAPO rima com… TRAPO? Sim!",
      imagem: sapoImg,
      imagemAlt: "Sapo",
      checagem: {
        pergunta: "BOLA rima com…?",
        opcoes: ["Cola", "Casa"],
        correta: 0,
        explicacao: "Bola e Cola terminam em 'OLA'.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Rima é palavra terminando igual.",
    nivel2: "GATO / PATO / SAPATO — todas terminam em 'ATO'. Rimam!",
    nivel3: "É o final que importa. GATO e GALO começam igual, mas terminam diferente — não rima.",
    nivel4: "Poeta é quem descobre rimas e usa pra fazer música. Você já é um poetinha.",
  },

  exemploResolvido: {
    enunciado: "Complete: 'Meu GATO subiu no…' (rima com GATO)",
    passos: [
      "Escuta o final: '…ATO'.",
      "Pensa numa palavra que termina em 'ATO': PATO!",
      "Frase completa: 'Meu GATO subiu no PATO'. Rimou!",
    ],
    resposta: "PATO — porque rima com GATO.",
    interativo: { tipo: "contagem", imagemUrl: patoImg, quantidade: 1, nomeItem: "pato", nomeItemPlural: "patos", pergunta: "Quantos patos rimam com o gato?" },
  },

  atividadeGuiada: {
    enunciado: "BOLA rima com qual figura?",
    resposta: "Com COLA (na verdade aqui: casa não rima, sol não rima, LUA não rima… a resposta certa dessa cena é COELHO? Não. Escolha ESTRELA ou pergunte por outra).",
    explicacao: "Rima é palavra terminando IGUAL. BOLA termina em 'OLA'.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual palavra rima com SOL?",
      opcoes: [
        { nome: "Anzol", imagemUrl: luaImg },
        { nome: "Gato", imagemUrl: gatoImg },
        { nome: "Casa", imagemUrl: casaImg },
      ],
      respostaCerta: "Anzol",
    },
  },

  exercicios: [
    { enunciado: "GATO rima com…?", resposta: "PATO.", dica: "Termina em '…ATO'." },
    { enunciado: "SOL rima com…?", resposta: "ANZOL.", dica: "Termina em '…OL'." },
    { enunciado: "BOLA rima com…?", resposta: "COLA.", dica: "Termina em '…OLA'." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: encontre a rima certa em cada trio.",
    resposta: "GATO+PATO, SOL+ANZOL, LUA+RUA.",
    visual: {
      cena: [
        { personagem: "Gato", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Sol", itemImagemUrl: solImg, quantidade: 1, cor: "#F87171" },
        { personagem: "Lua", itemImagemUrl: luaImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        { pergunta: "GATO rima com…?", opcoes: ["Pato", "Sol"], correta: 0, explicacao: "Terminam em 'ATO'." },
        { pergunta: "SOL rima com…?", opcoes: ["Gato", "Anzol"], correta: 1, explicacao: "Terminam em 'OL'." },
        { pergunta: "LUA rima com…?", opcoes: ["Rua", "Gato"], correta: 0, explicacao: "Terminam em 'UA'." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Rima = palavras que TERMINAM iguais.",
      "Escuta o final da palavra pra descobrir.",
      "Rimas viram música e poesia.",
      "Aliteração = palavras que COMEÇAM iguais (Sapo e Sol).",
    ],
    dica: "Em casa: invente uma rima pro nome de todo mundo (Maria-Sabia, Pedro-Cedro).",
  },

  quiz: [
    { pergunta: "GATO rima com PATO?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Terminam em 'ATO'.", visual: { tipo: "itens", imagemUrl: patoImg, quantidade: 1, rotulo: "Pato" } },
    { pergunta: "SOL rima com CASA?", opcoes: ["Sim", "Não"], correta: 1, explicacao: "Sol termina em 'OL', casa em 'ASA'. Diferente.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" } },
    { pergunta: "COELHO rima com…?", opcoes: ["Vermelho", "Sapo"], correta: 0, explicacao: "Coelho e vermelho terminam em 'ELHO'.", visual: { tipo: "itens", imagemUrl: coelhoImg, quantidade: 1, rotulo: "Coelho" } },
  ],

  conclusao: "🏅 Você virou POETA! Missão em Casa: invente uma rima com o seu nome antes de dormir.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Crianças que ouvem MUITAS rimas antes dos 6 anos aprendem a ler mais rápido. Rima treina o ouvido pra escutar sons.",
    imagemUrl: estrelaImg,
  },

  interativas: [
    {
      tipo: "ligar",
      titulo: "Fase 1 · Pares que rimam",
      instrucao: "Ligue cada palavra à sua rima.",
      pares: [
        { a: "Gato", b: "Pato", aImagem: gatoImg, aQuantidade: 1 },
        { a: "Sol", b: "Anzol", aImagem: solImg, aQuantidade: 1 },
        { a: "Lua", b: "Rua", aImagem: luaImg, aQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Qual rima?",
      instrucao: "Escute o final da palavra.",
      grupos: [{ imagemUrl: bolaImg, quantidade: 1, rotulo: "Bola" }],
      pergunta: "Qual rima com BOLA?",
      opcoes: ["Cola", "Gato", "Sol"],
      correta: 0,
      acerto: "Isso! Bola e Cola terminam em 'OLA'.",
      erro: "Escute o final: b-OLA, c-OLA.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "GATO rima com PATO?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Terminam em 'ATO'.", visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "Gato" } },
    ],
    medio: [
      { pergunta: "LUA rima com…?", opcoes: ["Rua", "Casa"], correta: 0, explicacao: "Lua/Rua terminam em 'UA'.", visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "Lua" } },
    ],
    dificil: [
      { pergunta: "Qual PAR rima?", opcoes: ["Sapo/Trapo", "Sapo/Gato"], correta: 0, explicacao: "Sapo/Trapo terminam em 'APO'.", visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "Sapo" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03EF03", titulo: "O Livro é um Amigo" },
};

export default aula;
