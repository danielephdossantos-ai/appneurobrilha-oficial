import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";

/**
 * EI03EO05 — Regras de convivência: respeitar combinados.
 * ⭐ Estrela: Combinado.
 */
const aula: Aula = {
  codigo: "EI03EO05",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Regras Que Ajudam",

  narrativa: {
    titulo: "Regras Que Ajudam",
    contexto:
      "Na Floresta Encantada, cada um queria brincar do seu jeito ao mesmo tempo. Virou uma bagunça! A Coruja Sábia reúne todo mundo: 'Vamos combinar algumas regrinhas?'",
    problema: "Como brincar juntos sem bagunçar tudo?",
    convite: "Bora criar regras que deixam a brincadeira mais gostosa?",
  },

  conhecimentosPrevios: ["Esperar a vez.", "Ouvir quando alguém fala.", "Guardar o brinquedo depois de usar."],

  missao: "Descobrir que REGRAS não são pra atrapalhar — são pra proteger a diversão.",

  objetivos: [
    "Reconhecer regras simples de convivência.",
    "Entender que combinado se cumpre com carinho.",
  ],

  motivacao: "Regra boa é igual abraço: cuida de todo mundo ao mesmo tempo.",

  explicacao:
    "REGRAS DA FLORESTA:\n\n• Esperar a vez.\n• Ouvir quando alguém fala.\n• Guardar o brinquedo depois.\n• Falar sem gritar.\n• Não bater — CONVERSAR.\n\nRegra combinada = ninguém sai chateado.",

  explicacaoAtiva: [
    { texto: "A bagunça começou. Toque no Brilha pra ele ver.", imagem: brilhaImg, imagemAlt: "Brilha vendo bagunça" },
    { texto: "A Coruja diz: 'Vamos combinar!'", imagem: corujaImg, imagemAlt: "Coruja reunindo" },
    { texto: "O Téo devagarzinho ajuda a guardar tudo.", imagem: teoImg, imagemAlt: "Téo guardando" },
    {
      texto: "Regra combinada + todo mundo cumpriu = floresta feliz!",
      imagem: felizImg,
      imagemAlt: "Carinha feliz",
      checagem: {
        pergunta: "Regra serve pra:",
        opcoes: ["Cuidar de todo mundo", "Só atrapalhar"],
        correta: 0,
        explicacao: "Isso! Regra cuida da diversão de todos.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Regra ajuda a brincadeira ser gostosa.",
    nivel2: "Combinado a gente cumpre com carinho.",
    nivel3: "Se todo mundo cumpre, ninguém sai machucado nem chateado.",
    nivel4: "Regras em casa e na escola são o jeito de dizer 'a gente se importa'.",
  },

  exemploResolvido: {
    enunciado: "3 amigos combinaram esperar a vez. Quantos vão brincar?",
    passos: ["1º brinca.", "2º espera e brinca depois.", "3º espera e brinca por último."],
    resposta: "Todos os 3 vão brincar — cada um na sua vez!",
    interativo: {
      tipo: "contagem",
      imagemUrl: estrelaImg,
      quantidade: 3,
      nomeItem: "amigo que cumpriu",
      nomeItemPlural: "amigos que cumpriram",
      pergunta: "Quantos amigos cumpriram a regra?",
    },
  },

  atividadeGuiada: {
    enunciado: "3 amigos guardaram o brinquedo. Quantos ajudaram?",
    resposta: "3 amigos — juntos deixaram tudo lindo.",
    explicacao: "Cada um fez sua parte. Regra cumprida!",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada amigo. Quem está no meio (2º)?",
      participantes: [
        { nome: "Brilha", imagemUrl: brilhaImg, posicao: 1 },
        { nome: "Téo", imagemUrl: teoImg, posicao: 2 },
        { nome: "Fifi", imagemUrl: fifiImg, posicao: 3 },
      ],
      respostaCerta: "Téo",
    },
  },

  exercicios: [
    { enunciado: "⭐ Alguém tá falando. O que faço?", resposta: "Ouço com carinho.", dica: "Ouvir é respeitar." },
    { enunciado: "🐰 Combinei guardar o brinquedo. Devo?", resposta: "Sim! Combinado se cumpre.", dica: "Palavra dada é palavra cumprida." },
    { enunciado: "🦉 Por que regras ajudam?", resposta: "Porque protegem a diversão de todo mundo.", dica: "Sem regra vira bagunça." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: em cada cena, qual escolha CUMPRE a regra?",
    resposta: "Esperar, ouvir, guardar.",
    visual: {
      cena: [
        { personagem: "Fila do escorrega", itemImagemUrl: brilhaImg, quantidade: 3, cor: "#FBBF24" },
        { personagem: "Coruja falando", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "Brinquedos no chão", itemImagemUrl: balaoImg, quantidade: 3, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Tem fila no escorrega. O que faço?", opcoes: ["Espero a vez", "Fujo pra frente"], correta: 0, explicacao: "Esperar a vez é regra de amizade." },
        { pergunta: "A Coruja tá explicando. Faço o quê?", opcoes: ["Ouço em silêncio", "Grito"], correta: 0, explicacao: "Ouvir mostra que respeito." },
        { pergunta: "Terminei de brincar. Faço o quê?", opcoes: ["Guardo o brinquedo", "Deixo no chão"], correta: 0, explicacao: "Guardar mantém o espaço bonito pra todos." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Regra cuida da brincadeira.",
      "Combinado se cumpre com carinho.",
      "Ouvir quem fala é respeito.",
      "Guardar o brinquedo é cuidar do lugar.",
    ],
    dica: "Combine 1 regrinha em casa hoje — e cumpra!",
  },

  quiz: [
    {
      pergunta: "Regra serve pra:",
      opcoes: ["Atrapalhar", "Cuidar de todo mundo", "Nada"],
      correta: 1,
      explicacao: "Regra é cuidado coletivo.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Cuidado" },
    },
    {
      pergunta: "Alguém falando. Melhor:",
      opcoes: ["Ouvir", "Interromper"],
      correta: 0,
      explicacao: "Ouvir é respeito.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: corujaImg, quantidade: 1, rotulo: "Fala", cor: "#A78BFA" },
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Ouve", cor: "#FBBF24" },
        ],
      },
    },
    {
      pergunta: "Quantos amigos guardaram o brinquedo?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      explicacao: "Brilha, Téo e Fifi — 3 cumpriram.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" },
          { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
          { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha: Guardião do Combinado! 5ª ESTRELA ⭐ acesa. Missão em Casa: combine 1 regrinha nova com a família (ex.: 'depois do lanche, guardo o copo').",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Toda cidade tem regras (semáforo, faixa de pedestre). Sem elas, ninguém sabia por onde ir. Regra pequena hoje = mundo bom amanhã!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Amigos na fila",
      instrucao: "Cada amigo espera a vez. Toque em cada um.",
      grupos: [
        { imagemUrl: brilhaImg, quantidade: 1, rotulo: "1º" },
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "2º" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "3º" },
      ],
      pergunta: "Quantos amigos na fila?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3 esperando com paciência!",
      erro: "Conte um a um.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Brinquedos guardados",
      instrucao: "Balões guardados no lugar. Toque em cada um.",
      grupos: [{ imagemUrl: balaoImg, quantidade: 3, rotulo: "Guardados" }],
      pergunta: "Quantos brinquedos guardados?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3 no lugar certinho!",
      erro: "Aponte cada balão.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Regra e ação",
      instrucao: "Ligue cada situação à regra que combina.",
      pares: [
        { a: "Fila do escorrega", b: "esperar a vez", aImagem: brilhaImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Coruja falando", b: "ouvir", aImagem: corujaImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Fim da brincadeira", b: "guardar", aImagem: teoImg, aQuantidade: 1, bImagem: balaoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Estrelas do combinado",
      instrucao: "Cada regra cumprida ganha 1 estrela. Toque nas estrelas.",
      grupos: [{ imagemUrl: estrelaImg, quantidade: 3, rotulo: "Estrelas" }],
      pergunta: "Quantas estrelas conquistadas?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3 estrelas — combinado cumprido!",
      erro: "Conte cada estrela.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Estrela pra cada amigo",
      instrucao: "Cada amigo que cumpriu a regra ganha 1 estrela. Toque na estrela e depois no amigo.",
      itemImagem: estrelaImg,
      alvosVisuais: [
        { nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg },
        { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg },
        { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg },
        { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg },
      ],
      pares: [
        { item: "Estrela do Brilha", alvo: "Brilha" },
        { item: "Estrela do Lupi", alvo: "Lupi" },
        { item: "Estrela da Fifi", alvo: "Fifi" },
        { item: "Estrela do Téo", alvo: "Téo" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Regra e sentimento",
      instrucao: "Como fica o coração quando a regra é cumprida?",
      pares: [
        { a: "Todos esperaram", b: "feliz", aImagem: brilhaImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Todos ouviram", b: "tranquilo", aImagem: corujaImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Todos guardaram", b: "coração cheio", aImagem: teoImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Regra ajuda ou atrapalha?",
        opcoes: ["Ajuda", "Atrapalha"],
        correta: 0,
        explicacao: "Ajuda — cuida de todo mundo.",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Cuidado" },
      },
      {
        pergunta: "Terminei de brincar. Faço:",
        opcoes: ["Guardo", "Deixo jogado"],
        correta: 0,
        explicacao: "Guardar é cuidar do lugar.",
        visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "Guardar" },
      },
    ],
    medio: [
      {
        pergunta: "Amigo falando. Faço:",
        opcoes: ["Ouço", "Grito por cima"],
        correta: 0,
        explicacao: "Ouvir é respeito.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "Ouvir" },
      },
      {
        pergunta: "Combinado é pra:",
        opcoes: ["Cumprir", "Ignorar"],
        correta: 0,
        explicacao: "Combinado cumprido = confiança.",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Combinado" },
      },
    ],
    dificil: [
      {
        pergunta: "Amigo não cumpriu. Melhor:",
        opcoes: ["Lembrar com carinho", "Brigar"],
        correta: 0,
        explicacao: "Lembrar com carinho ensina sem machucar.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Eu lembro", cor: "#FBBF24" },
            { imagemUrl: lupiImg, quantidade: 1, rotulo: "Amigo aprende", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Sem regra a brincadeira fica:",
        opcoes: ["Bagunça", "Perfeita"],
        correta: 0,
        explicacao: "Sem regra vira caos — ninguém se diverte.",
        visual: { tipo: "itens", imagemUrl: tranquiloImg, quantidade: 1, rotulo: "Com regra = calma" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EI03EO06", titulo: "Cuidar do Amigo" },
};

void piuImg;

export default aula;
