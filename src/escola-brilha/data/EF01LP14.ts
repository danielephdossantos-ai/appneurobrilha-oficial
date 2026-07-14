import type { Aula } from "../types";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as corujaImg } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as balaoImg } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as fogoImg } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menino-acordando.png.asset.json";

/**
 * EF01LP14 — Aula 014 · Biblioteca Pedagógica Escola Brilha
 * 1º Ano · Língua Portuguesa
 * Missão do Dia: "As Placas Mágicas da Floresta".
 */
const aula: Aula = {
  codigo: "EF01LP14",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "As Placas Mágicas da Floresta",

  narrativa: {
    titulo: "As Placas Mágicas da Floresta",
    contexto:
      "Na Floresta Encantada, cada placa termina com um sinal diferente: ponto (.), interrogação (?) ou exclamação (!).",
    problema:
      "Um duende travesso apagou os sinais das placas. Agora ninguém sabe se a frase é uma AFIRMAÇÃO, uma PERGUNTA ou uma EMOÇÃO.",
    convite:
      "Bora ajudar o Brilha a colocar cada sinal no lugar certo?",
  },

  conhecimentosPrevios: [
    "Reconhecer letras e palavras.",
    "Ler pequenas frases (EF01LP09).",
    "Perceber a entonação da voz na leitura.",
  ],

  missao:
    "Identificar outros sinais no texto além das letras — como ponto final, interrogação e exclamação — e seus efeitos na entonação.",

  objetivos: [
    "Reconhecer ponto final, interrogação e exclamação.",
    "Perceber que cada sinal muda a forma de LER.",
    "Escolher o sinal correto para cada frase.",
    "Ampliar a compreensão da leitura em voz alta.",
  ],

  motivacao:
    "O sinal no fim da frase é como a voz do escritor — ele conta como falar!",

  explicacao:
    "No fim de cada frase, aparece um sinal:\n\n. (PONTO FINAL) → frase termina, voz desce.\n   Ex.: O gato dorme.\n\n? (INTERROGAÇÃO) → é uma pergunta, voz sobe.\n   Ex.: O gato dorme?\n\n! (EXCLAMAÇÃO) → é emoção, susto ou alegria.\n   Ex.: O gato dorme!\n\nA MESMA frase muda de sentido dependendo do sinal!",

  explicacoesNiveis: {
    nivel1: ". termina, ? pergunta, ! mostra emoção.",
    nivel2:
      "O sinal ajuda a saber COMO ler a frase em voz alta.",
    nivel3:
      "Pergunta → voz sobe. Susto/alegria → voz forte. Fim normal → voz calma.",
    nivel4:
      "O mesmo texto pode causar sentimentos diferentes só por causa do sinal final.",
  },

  exemploResolvido: {
    enunciado: "Qual sinal completa: 'Você viu o gato___'?",
    passos: [
      "Leia devagar: é pergunta, afirmação ou emoção?",
      "É uma PERGUNTA — quer uma resposta.",
      "Então usamos o sinal de INTERROGAÇÃO (?).",
    ],
    resposta: "? ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual sinal usar em 'Que gato lindo___'?",
    resposta: "!",
    explicacao:
      "É uma frase de EMOÇÃO/admiração — usamos ponto de exclamação.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual sinal usar?",
      opcoes: [
        { nome: "!", imagemUrl: estrelaImg },
        { nome: ".", imagemUrl: solImg },
        { nome: "?", imagemUrl: corujaImg },
      ],
      respostaCerta: "!",
    },
  },

  exercicios: [
    {
      enunciado: "'Você gosta de ler___' — qual sinal?",
      resposta: "?",
      dica: "É uma pergunta.",
    },
    {
      enunciado: "'A bola é azul___' — qual sinal?",
      resposta: ".",
      dica: "É uma afirmação normal.",
    },
    {
      enunciado: "'Que dia lindo___' — qual sinal?",
      resposta: "!",
      dica: "É emoção/alegria.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: escolha o sinal certo para cada placa da floresta.",
    resposta:
      ". termina · ? pergunta · ! emoção.",
    visual: {
      cena: [
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "CORUJA", itemImagemUrl: corujaImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "ESTRELA", itemImagemUrl: estrelaImg, quantidade: 1, cor: "#FDE047" },
        { personagem: "BALÃO", itemImagemUrl: balaoImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "FOGO", itemImagemUrl: fogoImg, quantidade: 1, cor: "#EF4444" },
      ],
      perguntas: [
        {
          pergunta: "'O sol brilha___' — qual sinal?",
          opcoes: [".", "?", "!"],
          correta: 0,
          explicacao: "Afirmação simples → ponto final.",
        },
        {
          pergunta: "'Você viu a coruja___' — qual sinal?",
          opcoes: ["?", ".", "!"],
          correta: 0,
          explicacao: "Pergunta → interrogação.",
        },
        {
          pergunta: "'Que estrela linda___' — qual sinal?",
          opcoes: ["!", ".", "?"],
          correta: 0,
          explicacao: "Admiração → exclamação.",
        },
        {
          pergunta: "'Cuidado com o fogo___' — qual sinal?",
          opcoes: ["!", ".", "?"],
          correta: 0,
          explicacao: "Susto/alerta → exclamação.",
        },
        {
          pergunta: "Qual sinal faz a voz SUBIR na leitura?",
          opcoes: ["?", ".", "!"],
          correta: 0,
          explicacao: "Perguntas fazem a voz subir.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🟢 . (ponto final) → a frase termina, voz calma.",
      "🔵 ? (interrogação) → pergunta, voz sobe.",
      "🔴 ! (exclamação) → emoção, susto ou alegria.",
      "🎭 O sinal muda a forma de LER!",
    ],
    dica: "Leia a frase em voz alta e sinta: é pergunta, é fim ou é emoção?",
  },

  quiz: [
    {
      pergunta: "'A bola é azul___'",
      opcoes: [".", "?", "!"],
      correta: 0,
      explicacao: "Afirmação → ponto final.",
    },
    {
      pergunta: "'Você viu o gato___'",
      opcoes: ["?", ".", "!"],
      correta: 0,
      explicacao: "Pergunta → interrogação.",
    },
    {
      pergunta: "'Que dia lindo___'",
      opcoes: ["!", ".", "?"],
      correta: 0,
      explicacao: "Emoção → exclamação.",
    },
    {
      pergunta: "Qual sinal termina uma pergunta?",
      opcoes: ["?", ".", "!"],
      correta: 0,
      explicacao: "?",
    },
    {
      pergunta: "Qual sinal mostra emoção forte?",
      opcoes: ["!", ".", "?"],
      correta: 0,
      explicacao: "! — exclamação.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião das Placas! Missão em Família: peçam pra alguém ler uma frase 3 vezes — com . ? e ! — e vejam como a voz muda.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O ponto de interrogação (?) foi criado há muitos séculos, e a curvinha dele lembra uma orelha esperando resposta.",
  },

  interativas: [
    {
      tipo: "escolherEscrita",
      titulo: "Fase 1 · Frase que termina",
      instrucao: "Toque pra ouvir: 'O gato dorme___'. Qual sinal?",
      figura: { imagemUrl: gatoImg, rotulo: "🐱" },
      pergunta: "Qual sinal usar?",
      opcoes: [".", "?", "!"],
      correta: 0,
      acerto: "🎉 Afirmação → ponto final.",
      erro: "Voz calma no fim → ponto final (.).",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Frase de pergunta",
      instrucao: "Toque pra ouvir: 'Você viu a bola___'. Qual sinal?",
      figura: { imagemUrl: bolaImg, rotulo: "🏀" },
      pergunta: "Qual sinal usar?",
      opcoes: ["?", ".", "!"],
      correta: 0,
      acerto: "🎉 Pergunta → interrogação.",
      erro: "Se espera resposta, use ?.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Frase de emoção",
      instrucao: "Toque pra ouvir: 'Que dia lindo___'. Qual sinal?",
      figura: { imagemUrl: solImg, rotulo: "☀️" },
      pergunta: "Qual sinal usar?",
      opcoes: ["!", ".", "?"],
      correta: 0,
      acerto: "🎉 Emoção → exclamação!",
      erro: "Admiração, susto ou alegria → !.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 4 · Cada frase, seu sinal",
      instrucao: "Arraste cada frase pro sinal certo.",
      pares: [
        { item: "O sol brilha", alvo: "." },
        { item: "Você viu", alvo: "?" },
        { item: "Que legal", alvo: "!" },
      ],
      alvosVisuais: [
        { nome: ".", cor: "#34D399", capacidade: 1 },
        { nome: "?", cor: "#60A5FA", capacidade: 1 },
        { nome: "!", cor: "#EF4444", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Placa da Floresta",
      instrucao:
        "A Coruja pediu a placa que combina com CUIDADO! Qual figura?",
      pergunta: "Placa de ALERTA (!):",
      opcoes: [
        { nome: "FOGO", imagemUrl: fogoImg, rotulo: "🔥 CUIDADO!" },
        { nome: "GATO", imagemUrl: gatoImg, rotulo: "🐱 O gato dorme." },
        { nome: "FLOR", imagemUrl: florImg, rotulo: "🌸 A flor é linda." },
      ],
      correta: 0,
      acerto: "🔥 Isso! Alerta forte → exclamação.",
      erro: "CUIDADO é aviso/emoção forte → !.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "'A maçã é vermelha___'",
        opcoes: [".", "?", "!"],
        correta: 0,
        explicacao: "Afirmação.",
        visual: { tipo: "itens", imagemUrl: macaImg, quantidade: 1, rotulo: "🍎" },
      },
      {
        pergunta: "'Você gosta de bola___'",
        opcoes: ["?", ".", "!"],
        correta: 0,
        explicacao: "Pergunta.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "🏀" },
      },
      {
        pergunta: "'Que sol lindo___'",
        opcoes: ["!", ".", "?"],
        correta: 0,
        explicacao: "Emoção.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
      },
    ],
    medio: [
      {
        pergunta: "'Cuidado com a rua___'",
        opcoes: ["!", ".", "?"],
        correta: 0,
        explicacao: "Alerta → !.",
        visual: { tipo: "itens", imagemUrl: fogoImg, quantidade: 1, rotulo: "⚠️" },
      },
      {
        pergunta: "'Como você se chama___'",
        opcoes: ["?", ".", "!"],
        correta: 0,
        explicacao: "Pergunta → ?.",
        visual: { tipo: "itens", imagemUrl: meninaImg, quantidade: 1, rotulo: "👧" },
      },
      {
        pergunta: "'A escola é grande___'",
        opcoes: [".", "?", "!"],
        correta: 0,
        explicacao: "Afirmação → .",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" },
      },
    ],
    dificil: [
      {
        pergunta: "Qual sinal faz a voz SUBIR?",
        opcoes: ["?", ".", "!"],
        correta: 0,
        explicacao: "? faz a voz subir (pergunta).",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "?" },
      },
      {
        pergunta: "'Que balão colorido___'",
        opcoes: ["!", ".", "?"],
        correta: 0,
        explicacao: "Emoção → !.",
        visual: { tipo: "itens", imagemUrl: balaoImg, quantidade: 1, rotulo: "🎈" },
      },
      {
        pergunta: "A MESMA frase muda de sentido quando muda:",
        opcoes: [
          "O sinal final (. ? !)",
          "A cor da letra",
          "O tamanho da folha",
        ],
        correta: 0,
        explicacao: "O sinal final muda o sentido.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: ".?!" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP15",
  },
};

export default aula;
