import type { Aula } from "../types";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as galinhaImg } from "@/assets/neuro-treino/objetos/galinha.png.asset.json";
import { url as pintinhoImg } from "@/assets/neuro-treino/objetos/pintinho.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";

/**
 * EF01LP16 — Aula 016 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Língua Portuguesa
 * Missão do Dia: "A Roda das Parlendas".
 * BNCC: Ler e compreender quadras, quadrinhas, parlendas e trava-línguas.
 */
const aula: Aula = {
  codigo: "EF01LP16",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "A Roda das Parlendas",

  narrativa: {
    titulo: "A Roda das Parlendas",
    contexto:
      "Na Floresta Encantada, os animais formaram uma grande roda cantada. Cada bicho trouxe uma parlenda antiga que aprendeu com a vovó Coruja.",
    problema:
      "Mas o vento levou os versos e agora ninguém sabe qual parlenda combina com cada brincadeira.",
    convite:
      "Bora ajudar o Brilha a escutar cada versinho e descobrir de qual brincadeira ele é?",
  },

  conhecimentosPrevios: [
    "Escutar histórias e cantigas.",
    "Perceber palavras que rimam.",
    "Reconhecer palavras conhecidas em pequenos textos.",
  ],

  missao:
    "Ouvir, ler junto e compreender parlendas, quadrinhas e trava-línguas, percebendo o tema e a brincadeira que cada uma acompanha.",

  objetivos: [
    "Reconhecer parlendas, quadrinhas e trava-línguas.",
    "Perceber a finalidade lúdica desses textos.",
    "Identificar o tema/assunto de cada versinho.",
    "Perceber ritmo, rima e repetição.",
  ],

  motivacao:
    "Parlenda é brincadeira feita de palavras — quem canta se diverte duas vezes!",

  explicacao:
    "PARLENDA é um versinho antigo, cheio de rima e ritmo, usado em brincadeiras.\n\n🐔 'Uma, duas, angolinhas, três, quatro, caminito…' (brincar de contar)\n\n🐸 'O sapo não lava o pé, não lava porque não quer…' (roda cantada)\n\nToda parlenda tem um TEMA (do que ela fala) e serve pra uma brincadeira.",

  explicacoesNiveis: {
    nivel1: "Parlenda é um versinho pra brincar e cantar.",
    nivel2: "Ela tem RIMA (sons parecidos no fim das palavras).",
    nivel3: "Toda parlenda fala de ALGUMA COISA — é o tema.",
    nivel4: "Trava-língua é uma parlenda difícil de falar rápido.",
  },

  exemploResolvido: {
    enunciado:
      "Do que fala esta parlenda? 'O sapo não lava o pé, não lava porque não quer…'",
    passos: [
      "Escute com atenção quem aparece: o SAPO.",
      "O que ele faz? NÃO lava o pé.",
      "Tema: um sapo que não quer se lavar.",
    ],
    resposta: "Fala de um SAPO que não lava o pé. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual bichinho é o personagem da parlenda 'O sapo não lava o pé'?",
    resposta: "SAPO.",
    explicacao: "A parlenda toda fala do SAPO.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Quem é o personagem?",
      opcoes: [
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "galinha", imagemUrl: galinhaImg },
      ],
      respostaCerta: "sapo",
    },
  },

  exercicios: [
    {
      enunciado: "Complete: 'O sapo não lava o ___.'",
      resposta: "PÉ.",
      dica: "É a parte do corpo que rima com 'quer'.",
    },
    {
      enunciado: "Quem canta a parlenda da galinha do vizinho?",
      resposta: "A GALINHA (bota ovo amarelinho).",
      dica: "Bota ovinho amarelinho.",
    },
    {
      enunciado: "Trava-língua serve pra:",
      resposta: "BRINCAR falando rápido.",
      dica: "Quem consegue falar sem tropeçar?",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: escute cada versinho e diga do que a parlenda fala.",
    resposta:
      "Cada parlenda tem um tema e uma brincadeira.",
    visual: {
      cena: [
        { personagem: "SAPO", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "GALINHA", itemImagemUrl: galinhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "PINTINHO", itemImagemUrl: pintinhoImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "RATO", itemImagemUrl: ratoImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "CORUJA", itemImagemUrl: corujaImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta: "'O sapo não lava o pé…' fala de quem?",
          opcoes: ["Sapo", "Gato", "Cachorro"],
          correta: 0,
          explicacao: "Parlenda do SAPO.",
        },
        {
          pergunta: "'A galinha do vizinho bota ovo…'",
          opcoes: ["Amarelinho", "Vermelhinho", "Azulzinho"],
          correta: 0,
          explicacao: "Ovo AMARELINHO — rima com vizinho.",
        },
        {
          pergunta: "'Um, dois, feijão com arroz…' serve pra:",
          opcoes: ["Contar/brincar", "Dormir", "Cozinhar"],
          correta: 0,
          explicacao: "É pra contar e brincar em roda.",
        },
        {
          pergunta: "Trava-língua é feito pra:",
          opcoes: ["Falar rápido brincando", "Ler em silêncio", "Cantar triste"],
          correta: 0,
          explicacao: "Trava-língua = brincar de falar rápido.",
        },
        {
          pergunta: "Parlenda tem sempre:",
          opcoes: ["Rima e ritmo", "Números", "Fotos"],
          correta: 0,
          explicacao: "Rima e ritmo fazem a graça.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🎵 Parlenda = versinho pra brincar.",
      "🔁 Tem rima, ritmo e repetição.",
      "🎯 Cada parlenda tem um TEMA (do que fala).",
      "👅 Trava-língua = parlenda difícil de falar rápido.",
    ],
    dica: "Escute o final das palavras — as rimas mostram o compasso.",
  },

  quiz: [
    {
      pergunta: "Parlenda serve pra:",
      opcoes: ["Brincar e cantar", "Fazer conta", "Desenhar"],
      correta: 0,
      explicacao: "Parlenda = brincadeira com palavras.",
    },
    {
      pergunta: "'O sapo não lava o ___' — o que rima?",
      opcoes: ["PÉ", "MÃO", "OLHO"],
      correta: 0,
      explicacao: "Pé rima com quer.",
    },
    {
      pergunta: "Trava-língua é pra:",
      opcoes: ["Falar rápido", "Ler baixinho", "Dormir"],
      correta: 0,
      explicacao: "Trava-língua = falar rápido sem tropeçar.",
    },
    {
      pergunta: "Toda parlenda tem:",
      opcoes: ["Rima", "Só números", "Só letras difíceis"],
      correta: 0,
      explicacao: "Rima é a marca da parlenda.",
    },
    {
      pergunta: "A parlenda da galinha do vizinho fala de:",
      opcoes: ["Ovo amarelinho", "Bolo", "Sapato"],
      correta: 0,
      explicacao: "Ovo amarelinho.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Cantador de Parlendas! Missão em Família: escolham uma parlenda antiga da família e cantem juntos batendo palmas.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As parlendas passam de vovó pra neto há mais de 100 anos — quando você canta uma, mantém uma tradição viva!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · O sapo não lava o pé",
      instrucao: "Toque pra ouvir. Quem é o personagem da parlenda?",
      pergunta: "Personagem:",
      opcoes: [
        { nome: "SAPO", imagemUrl: sapoImg, rotulo: "🐸 SAPO" },
        { nome: "GATO", imagemUrl: gatoImg, rotulo: "🐱 GATO" },
        { nome: "RATO", imagemUrl: ratoImg, rotulo: "🐭 RATO" },
      ],
      correta: 0,
      acerto: "🐸 Isso! É o SAPO.",
      erro: "Escute de novo: 'O SAPO não lava o pé…'",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · A galinha do vizinho",
      instrucao: "Toque pra ouvir. Que ovo a galinha bota?",
      figura: { imagemUrl: galinhaImg, rotulo: "🐔" },
      pergunta: "Bota ovo…?",
      opcoes: ["AMARELINHO", "VERMELHO", "PRETO"],
      correta: 0,
      acerto: "🥚 Ovo AMARELINHO!",
      erro: "Rima com vizinho: AMARELINHO.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Um, dois, feijão com arroz",
      instrucao: "Toque pra ouvir. Essa parlenda serve pra:",
      figura: { imagemUrl: balaoImg, rotulo: "🎈" },
      pergunta: "Pra que serve?",
      opcoes: ["Contar e brincar", "Dormir", "Estudar sozinho"],
      correta: 0,
      acerto: "🎉 Isso! É pra CONTAR e brincar.",
      erro: "É uma parlenda de contar/brincar em roda.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Cada parlenda no seu tema",
      instrucao: "Arraste cada versinho pro tema certo.",
      pares: [
        { item: "O sapo não lava o pé", alvo: "BICHOS" },
        { item: "A galinha do vizinho", alvo: "BICHOS" },
        { item: "Um, dois, feijão com arroz", alvo: "CONTAR" },
      ],
      alvosVisuais: [
        { nome: "BICHOS", cor: "#34D399", capacidade: 2 },
        { nome: "CONTAR", cor: "#FBBF24", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Trava-língua da Coruja",
      instrucao: "A Coruja pediu: qual parlenda é DIFÍCIL de falar rápido (trava-língua)?",
      pergunta: "Escolha o trava-língua:",
      opcoes: [
        { nome: "RATO", imagemUrl: ratoImg, rotulo: "🐭 O rato roeu a roupa…" },
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ Boa noite" },
        { nome: "FLOR", imagemUrl: florImg, rotulo: "🌸 Dorme, dorme" },
      ],
      correta: 0,
      acerto: "🐭 'O RATO roeu a roupa do rei de Roma' — clássico!",
      erro: "Trava-língua tem sons repetidos difíceis: R, R, R…",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Parlenda é feita pra:",
        opcoes: ["Brincar", "Somar", "Correr"],
        correta: 0,
        explicacao: "Brincar com palavras.",
        visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "🎈" },
      },
      {
        pergunta: "'O sapo não lava o…'",
        opcoes: ["PÉ", "MÃO", "NARIZ"],
        correta: 0,
        explicacao: "PÉ rima com quer.",
        visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1, rotulo: "🐸" },
      },
      {
        pergunta: "A galinha do vizinho bota ovo:",
        opcoes: ["Amarelinho", "Preto", "Verde"],
        correta: 0,
        explicacao: "Amarelinho.",
        visual: { tipo: "itens", imagemUrl: galinhaImg, quantidade: 1, rotulo: "🥚" },
      },
    ],
    medio: [
      {
        pergunta: "Toda parlenda tem:",
        opcoes: ["Rima", "Fotos", "Números grandes"],
        correta: 0,
        explicacao: "Rima e ritmo.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🎵" },
      },
      {
        pergunta: "Trava-língua é pra:",
        opcoes: ["Falar rápido", "Cantar triste", "Escrever"],
        correta: 0,
        explicacao: "Falar rápido sem tropeçar.",
        visual: { tipo: "itens", imagemUrl: ratoImg, quantidade: 1, rotulo: "👅" },
      },
      {
        pergunta: "Um, dois, feijão com arroz é parlenda de:",
        opcoes: ["Contar", "Dormir", "Comer"],
        correta: 0,
        explicacao: "Contar/brincar.",
        visual: { tipo: "itens", imagemUrl: pintinhoImg, quantidade: 1, rotulo: "1·2" },
      },
    ],
    dificil: [
      {
        pergunta: "Quem passa parlendas de geração em geração?",
        opcoes: ["A família e a comunidade", "Só a escola", "Só a TV"],
        correta: 0,
        explicacao: "Vem da tradição oral.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "👵" },
      },
      {
        pergunta: "O tema de uma parlenda é:",
        opcoes: ["Do que ela fala", "A cor", "O tamanho"],
        correta: 0,
        explicacao: "Tema = assunto.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "🎯" },
      },
      {
        pergunta: "Quando canto uma parlenda antiga eu:",
        opcoes: ["Mantenho a tradição", "Invento uma nova", "Faço uma conta"],
        correta: 0,
        explicacao: "Tradição viva.",
        visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "❤️" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EF01LP17" },
};

export default aula;
