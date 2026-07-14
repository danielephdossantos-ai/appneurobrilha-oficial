import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";

/**
 * Unidade 4 · Aula 3 — Conhecendo Melhor os Personagens
 * BNCC: EF02LP17 · EF02LP19
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-perfil-personagens",
  titulo: "Conhecendo Melhor os Personagens",
  iconeTrilha: "🎭",
  bncc: ["EF02LP17", "EF02LP19"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Quem são eles?",
    historia:
      "Aurora vira uma página e diz: — Toda história tem PERSONAGENS. E as AÇÕES e as FALAS deles mostram como pensam e como se sentem. Um bom detetive da leitura investiga os personagens por dentro!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Leia o pedacinho da história. O que a Lia está sentindo?",
    bloco: {
      titulo: "A Lia e o presente",
      recado: {
        icone: "🎁",
        rotulo: "Pedaço da história",
        estilo: "papel",
        linhas: [
          "Lia abriu o pacote e",
          "PULOU DE ALEGRIA.",
          "Era o brinquedo que ela",
          "queria HÁ MUITO TEMPO!",
        ],
      },
      pergunta: "Como a Lia estava se sentindo?",
      hipoteses: [
        { texto: "Muito FELIZ.", imagemUrl: coracao },
        { texto: "Com MEDO.", imagemUrl: gato },
        { texto: "BRAVA com alguém.", imagemUrl: estrela },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 FELIZ! 'Pulou de alegria' e 'brinquedo que queria há muito tempo' mostram alegria.",
      feedbackErro:
        "Ela PULOU DE ALEGRIA e ganhou um brinquedo desejado. Isso é medo ou felicidade?",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de detetive.",
    cards: [
      {
        palavra: "personagem",
        explicacao:
          "É quem VIVE a história. Pode ser gente, bicho ou até um objeto que fala.",
        exemplo: "A Lia é a PERSONAGEM da história do presente.",
        imagemUrl: menina,
      },
      {
        palavra: "sentimento",
        explicacao:
          "É o que a pessoa SENTE por dentro (alegria, tristeza, raiva, medo…).",
        exemplo: "O SENTIMENTO da Lia era alegria.",
        imagemUrl: coracao,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto e observe as AÇÕES e as FALAS.",
    leitura: {
      titulo: "O Pedro e a prova",
      imagemUrl: menino,
      destacar: ["mordia", "suava", "silencioso", "nervoso"],
      paragrafos: [
        "Pedro mordia o lápis e SUAVA muito.",
        "Ficou SILENCIOSO olhando pra prova.",
        "As mãos dele TREMIAM um pouquinho.",
        "As pistas mostram: Pedro estava NERVOSO com a prova.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Investigue os personagens.",
    perguntas: [
      {
        pergunta: "Quem é o personagem principal do texto acima?",
        opcoes: ["A professora", "PEDRO", "O lápis"],
        correta: 1,
        feedbackAcerto: "🎉 Pedro! É sobre ele que a história fala.",
        feedbackErro: "O texto todo fala do PEDRO. Ele é o personagem principal.",
        ondeEstaNoTexto: "Pedro mordia o lápis...",
      },
      {
        pergunta: "Como Pedro estava se sentindo?",
        opcoes: ["Alegre", "NERVOSO", "Com sono"],
        correta: 1,
        feedbackAcerto:
          "🎉 Nervoso! Suar, morder o lápis e mãos tremendo são pistas de nervosismo.",
        feedbackErro:
          "Pistas: suava, mordia o lápis, mãos tremendo. Isso é sinal de NERVOSISMO.",
      },
      {
        pergunta: "Como a gente DESCOBRE o que o personagem sente?",
        opcoes: [
          "Olhando as AÇÕES e as FALAS dele",
          "Adivinhando",
          "Contando as palavras",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 As ações e as falas mostram como o personagem se sente.",
        feedbackErro:
          "A gente descobre pelas AÇÕES (o que faz) e FALAS (o que diz) do personagem.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Cada pista mostra um sentimento diferente.",
    perguntas: [
      {
        pergunta:
          "'Bia abraçou o cachorro chorando de saudade.' O que ela sente?",
        opcoes: ["Saudade", "Raiva", "Nojo"],
        correta: 0,
        feedbackAcerto: "🎉 SAUDADE! O texto até fala 'de saudade'.",
        feedbackErro: "O texto diz claramente: 'chorando de SAUDADE'.",
      },
      {
        pergunta:
          "'Léo cruzou os braços, franziu a testa e bateu o pé.' Léo está…",
        opcoes: ["Alegre", "BRAVO", "Com fome"],
        correta: 1,
        feedbackAcerto:
          "🎉 BRAVO! Cruzar braços, franzir testa e bater o pé são pistas de raiva.",
        feedbackErro:
          "Braços cruzados + testa franzida + bater o pé = está BRAVO.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque em ordem como o Pedro reagiu na história da prova.",
    bloco: {
      instrucao: "Do começo (recebeu a prova) até o fim.",
      itens: [
        { id: "s1", texto: "Pedro recebeu a prova.", imagemUrl: menino },
        { id: "s2", texto: "Começou a suar e a morder o lápis.", imagemUrl: brilha },
        { id: "s3", texto: "As mãos dele tremeram.", imagemUrl: estrela },
        { id: "s4", texto: "A gente descobriu que ele estava nervoso.", imagemUrl: coracao },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Isso! Cada ação foi uma pista pra descobrir o sentimento.",
      feedbackErro:
        "Primeiro RECEBEU a prova, depois SUAR e MORDER o lápis, depois MÃOS TREMENDO, e por fim DESCOBRIMOS que estava nervoso.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Você lê sozinho. Investigue a personagem.",
    leitura: {
      titulo: "A Cléo do Terceiro Andar",
      imagemUrl: menina,
      destacar: ["gargalhava", "abraçou", "pulou"],
      paragrafos: [
        "Cléo gargalhava alto no corredor.",
        "Abraçou a amiga bem forte.",
        "Depois pulou 3 vezes com o pacote na mão.",
        "Era o dia mais especial da semana.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como Cléo estava se sentindo?",
        opcoes: ["Triste", "MUITO feliz", "Com medo"],
        correta: 1,
        feedbackAcerto:
          "🎉 Muito feliz! Gargalhar, abraçar forte e pular são pistas de ALEGRIA.",
        feedbackErro:
          "Pistas: gargalhava, abraçou forte, pulou 3x. Isso é alegria!",
        ondeEstaNoTexto: "gargalhava alto... abraçou a amiga... pulou",
      },
      {
        pergunta: "Quem é a personagem principal?",
        opcoes: ["A amiga", "CLÉO", "O pacote"],
        correta: 1,
        feedbackAcerto: "🎉 Cléo!",
        feedbackErro: "O texto fala sobre a CLÉO — ela é a personagem principal.",
        ondeEstaNoTexto: "Cléo gargalhava alto",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🎭 Perfil dos Personagens",
    instrucao:
      "Arraste cada AÇÃO pro sentimento que ela mostra.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🎭 Perfil dos Personagens",
      bloco: {
        instrucao: "Cada pista revela um sentimento diferente.",
        itens: [
          {
            id: "i1",
            texto: "Pulou de alegria abraçando a mãe.",
            alvoId: "a1",
          },
          {
            id: "i2",
            texto: "Escondeu-se atrás do sofá tremendo.",
            alvoId: "a2",
          },
          {
            id: "i3",
            texto: "Chorou baixinho olhando pra foto.",
            alvoId: "a3",
          },
          {
            id: "i4",
            texto: "Cruzou os braços e bateu o pé com força.",
            alvoId: "a4",
          },
        ],
        alvos: [
          { id: "a1", nome: "😀 FELIZ", imagemUrl: coracao },
          { id: "a2", nome: "😨 COM MEDO", imagemUrl: gato },
          { id: "a3", nome: "😢 TRISTE", imagemUrl: brilha },
          { id: "a4", nome: "😠 BRAVO", imagemUrl: estrela },
        ],
        feedbackAcerto:
          "🎉 Detetive das emoções! Cada AÇÃO mostrou um sentimento.",
        feedbackErro:
          "Pense em CADA ação: pular = feliz; esconder tremendo = medo; chorar = triste; braços cruzados batendo o pé = bravo.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "As AÇÕES e as FALAS mostram como o personagem se sente.",
      "Nem sempre o texto diz 'estava feliz'. A gente DESCOBRE.",
      "Um bom detetive investiga o que o personagem FEZ e DISSE.",
    ],
    miniDesafio: {
      pergunta: "'Ivo bocejou e esfregou os olhos várias vezes.' O que ele sente?",
      opcoes: ["FOME", "SONO", "MEDO"],
      correta: 1,
      feedbackAcerto: "🎉 SONO! Bocejar + esfregar os olhos = sono.",
      feedbackErro: "Bocejar e esfregar os olhos são pistas de SONO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "1/5 — 'Bia sorriu de orelha a orelha.' Ela sente…",
        opcoes: ["Tristeza", "Alegria", "Raiva"],
        correta: 1,
        feedbackAcerto: "🎉 Alegria!",
        feedbackErro: "Sorriso 'de orelha a orelha' = ALEGRIA grande.",
      },
      {
        pergunta:
          "2/5 — 'Tico apertou o coelho contra o peito e chorou.' Ele sente…",
        opcoes: ["Carinho / saudade", "Fome", "Cansaço"],
        correta: 0,
        feedbackAcerto: "🎉 Carinho e saudade!",
        feedbackErro: "Apertar contra o peito + chorar = carinho / saudade.",
      },
      {
        pergunta:
          "3/5 — 'Léo saiu correndo, gritando pela mãe.' Ele estava…",
        opcoes: ["Calmo", "Assustado", "Dormindo"],
        correta: 1,
        feedbackAcerto: "🎉 Assustado!",
        feedbackErro: "Correr gritando pela mãe é pista de MEDO / SUSTO.",
      },
      {
        pergunta: "4/5 — Pra descobrir o que o personagem sente, a gente olha as…",
        opcoes: ["AÇÕES e FALAS dele", "letras maiúsculas", "cores da capa"],
        correta: 0,
        feedbackAcerto: "🎉 Ações e falas!",
        feedbackErro: "AÇÕES e FALAS do personagem mostram o sentimento.",
      },
      {
        pergunta:
          "5/5 — 'A cachorrinha abanava o rabo e latia baixinho quando o dono chegou.' Ela estava…",
        opcoes: ["Brava", "FELIZ com a chegada", "Com fome"],
        correta: 1,
        feedbackAcerto: "🎉 Feliz!",
        feedbackErro:
          "Abanar o rabo e latir baixinho ao ver o dono = FELIZ com a chegada.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Detetive das emoções",
    materiais: ["Um livro / historinha em casa"],
    passos: [
      "1) Leiam uma história curta.",
      "2) Escolham UM personagem.",
      "3) A criança conta: quem é, o que ele QUERIA, e como se SENTIA em cada parte.",
      "4) Peça pra criança apontar pelo menos 2 pistas (ações ou falas).",
    ],
    registro: "📸 Foto da criança apontando as pistas do sentimento no livro.",
  },

  recompensa: { xp: 140, moedas: 90 },
};

void coelho;
