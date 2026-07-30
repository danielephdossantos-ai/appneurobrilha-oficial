import type { AulaPortuguesV4 } from "../../types";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as ima } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";

/**
 * Unidade 7 · Aula 3 — Juntando os Sons
 * -------------------------------------------------------------
 * CONSCIÊNCIA FONÊMICA — síntese (blending).
 * A criança ouve sons soltos e junta até formar a palavra.
 * É a habilidade que mais prediz leitura no 1º ano.
 *
 * BNCC: EF01LP04 · EF01LP05 · EF01LP07
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-juntando-os-sons",
  titulo: "Juntando os Sons",
  iconeTrilha: "🧲",
  bncc: ["EF01LP04", "EF01LP05", "EF01LP07"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O ímã de sons",
    historia:
      "A Coruja Ouvidão trouxe um ímã mágico. — Se eu falar os sons bem separados, o ímã gruda todos e vira uma palavra! Escute: /s/ … /o/ … /l/ … grudou: SOL! Consegue adivinhar antes do ímã grudar?",
    imagemUrl: ima,
  },

  momento02_previsao: {
    instrucao: "A Coruja deixou uma charada sonora no quadro.",
    bloco: {
      titulo: "A Charada do Ímã",
      recado: {
        rotulo: "Sons soltos",
        icone: "🧲",
        linhas: ["/l/ … /u/ … /a/", "= ?"],
        estilo: "cartaz",
      },
      pergunta: "Que palavra aparece quando esses sons grudam?",
      hipoteses: [{ texto: "LUA" }, { texto: "SOL" }, { texto: "BOLA" }],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! /l/ /u/ /a/ = LUA.",
      feedbackErro: "Fale rápido os três sons seguidos: l-u-a… luuua!",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras do ímã mágico.",
    cards: [
      {
        palavra: "juntar sons",
        explicacao: "É falar os sons um atrás do outro, cada vez mais rápido, até virar palavra.",
        exemplo: "/p/ /a/ /t/ /o/ juntos viram PATO.",
        imagemUrl: pato,
      },
      {
        palavra: "adivinhar",
        explicacao: "É descobrir a resposta usando as pistas que você escutou.",
        exemplo: "Escutei /s/ /o/ /l/ e adivinhei: SOL!",
        imagemUrl: coruja,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Junte os sons e descubra a palavra",
    instrucao:
      "Toque em “Juntar”. Você ouve os sons soltos, um de cada vez. Tente adivinhar a palavra ANTES dela aparecer!",
    blocos: [
      {
        tipo: "sintetizarFonemas",
        itens: [
          { fonemas: ["s", "o", "l"], palavra: "SOL", imagemUrl: sol },
          { fonemas: ["l", "u", "a"], palavra: "LUA", imagemUrl: lua },
          { fonemas: ["p", "a", "t", "o"], palavra: "PATO", imagemUrl: pato },
          { fonemas: ["r", "a", "t", "o"], palavra: "RATO", imagemUrl: rato },
          { fonemas: ["b", "o", "l", "a"], palavra: "BOLA", imagemUrl: bola },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos.",
    leitura: {
      titulo: "O Ímã Mágico",
      imagemUrl: ima,
      legendaImagem: "O ímã que gruda sons",
      destacar: ["JUNTOU", "SOL", "LUA"],
      paragrafos: [
        "A Coruja falou bem devagar: /s/ … /o/ … /l/.",
        "O ímã JUNTOU os três sons e apareceu a palavra SOL!",
        "Depois ela falou /l/ … /u/ … /a/ e apareceu a LUA.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "A resposta está no texto.",
    perguntas: [
      {
        pergunta: "Qual palavra apareceu com os sons /s/ /o/ /l/?",
        opcoes: ["LUA", "SOL", "BOLA"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Está escrito: 'apareceu a palavra ___!'",
        ondeEstaNoTexto: "O ímã JUNTOU os três sons e apareceu a palavra SOL!",
      },
      {
        pergunta: "O que o ímã faz com os sons?",
        opcoes: ["Separa", "Junta", "Apaga"],
        correta: 1,
        feedbackAcerto: "🎉 Ele JUNTA os sons.",
        feedbackErro: "Leia de novo: 'O ímã ___ os três sons'.",
        ondeEstaNoTexto: "O ímã JUNTOU os três sons.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Escute com atenção.",
    perguntas: [
      {
        pergunta: "Qual palavra dá /p/ /a/ /t/ /o/ junto?",
        opcoes: ["PATO", "PRATO", "GATO"],
        correta: 0,
        feedbackAcerto: "🎉 PATO!",
        feedbackErro: "Fale rápido: p-a-t-o.",
      },
      {
        pergunta: "Qual palavra dá /r/ /a/ /t/ /o/ junto?",
        opcoes: ["PATO", "RATO", "MATO"],
        correta: 1,
        feedbackAcerto: "🎉 RATO!",
        feedbackErro: "O primeiro som é /r/, então começa com R.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem como o ímã trabalha.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "A Coruja fala os sons separados.", imagemUrl: coruja },
        { id: "p2", texto: "Os sons vão grudando, cada vez mais rápido.", imagemUrl: ima },
        { id: "p3", texto: "A palavra aparece inteira: SOL!", imagemUrl: sol },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito!",
      feedbackErro: "Primeiro os sons soltos, depois grudam, por último vira palavra.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho.",
    leitura: {
      titulo: "A Bola da Bia",
      imagemUrl: menina,
      destacar: ["BOLA", "sons"],
      paragrafos: [
        "Bia escutou: /b/ /o/ /l/ /a/.",
        "Ela juntou os sons e gritou: — É a minha BOLA!",
      ],
    },
    perguntas: [
      {
        pergunta: "Que palavra a Bia descobriu?",
        opcoes: ["BOLO", "BOLA", "BALA"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! BOLA.",
        feedbackErro: "Está escrito no fim: 'É a minha ___!'",
        ondeEstaNoTexto: "Ela juntou os sons e gritou: — É a minha BOLA!",
      },
    ],
  },

  // ------------------------------------------------------------
  // ESCRITA — traçado com o dedo + ditado com sílabas móveis
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Junte os sons e escreva",
    instrucao: "Ouça os sons soltos, junte na cabeça e escreva a palavra inteira.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "L", exemplo: "L de LUA, som /l/", dicaTracado: "desce e faz o pezinho" },
          { letra: "B", exemplo: "B de BOLA, som /b/", dicaTracado: "desce e faz duas barrigas" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "LUA", silabas: ["LU", "A"], distratores: ["MI", "PO"], dica: "/l/ /u/ /a/ = LUA." },
          { palavra: "BOLA", silabas: ["BO", "LA"], distratores: ["CA", "TE"], dica: "/b/ /o/ /l/ /a/ = BOLA." },
        ],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Juntar sons é o segredo da leitura.",
      "Fale os sons cada vez mais rápido até virar palavra.",
      "/s/ /o/ /l/ → SOL.",
    ],
    miniDesafio: {
      pergunta: "/l/ /u/ /a/ juntos formam qual palavra?",
      opcoes: ["LUA", "LULA", "LAMA"],
      correta: 0,
      feedbackAcerto: "🎉 LUA!",
      feedbackErro: "São só três sons: l… u… a.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — /s/ /o/ /l/ formam:",
        opcoes: ["SAL", "SOL", "SUL", "SÓ"],
        correta: 1,
        feedbackAcerto: "🎉 SOL!",
        feedbackErro: "O som do meio é /o/, então é S-O-L.",
        dica: "Preste atenção no som do meio: é /o/ ou /a/?",
        reensino: "/s/ + /o/ + /l/ = SOL. Se o meio fosse /a/, seria SAL.",
      },
      {
        pergunta: "2/5 — /p/ /a/ /t/ /o/ formam:",
        opcoes: ["PRATO", "PATO", "GATO", "PATA"],
        correta: 1,
        feedbackAcerto: "🎉 PATO!",
        feedbackErro: "Só tem 4 sons e o último é /o/.",
        dica: "Conte os sons: são 4. PRATO tem 5.",
        reensino: "/p/ /a/ /t/ /o/ = PATO. PATA terminaria com /a/.",
      },
      {
        pergunta: "3/5 — /b/ /o/ /l/ /a/ formam:",
        opcoes: ["BOLO", "BALA", "BOLA", "BOCA"],
        correta: 2,
        feedbackAcerto: "🎉 BOLA!",
        feedbackErro: "O terceiro som é /l/ e o último é /a/.",
        dica: "Escute o final: termina com /a/.",
        reensino: "/b/ /o/ /l/ /a/ = BOLA. BOLO terminaria com /o/.",
      },
      {
        pergunta: "4/5 — /r/ /a/ /t/ /o/ formam:",
        opcoes: ["RATO", "PATO", "MATO", "RATA"],
        correta: 0,
        feedbackAcerto: "🎉 RATO!",
        feedbackErro: "O primeiro som é /r/.",
        dica: "Escute só o começo: rrr…",
        reensino: "/r/ é o som do começo. Por isso é RATO, e não PATO nem MATO.",
      },
      {
        pergunta: "5/5 — Para juntar sons, a gente fala eles...",
        opcoes: [
          "Bem separados sempre",
          "Cada vez mais rápido até grudar",
          "De trás pra frente",
          "Só pensando",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! Ímã mágico dominado! 🧲",
        feedbackErro: "Os sons precisam grudar: fale cada vez mais rápido.",
        dica: "Como o ímã da Coruja: os sons vão se aproximando.",
        reensino: "Juntar = falar os sons seguidos, acelerando, até virar a palavra inteira.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 O ímã em casa",
    materiais: ["Um adulto para falar os sons"],
    passos: [
      "1) Peça ao adulto para escolher um objeto da casa em segredo.",
      "2) Ele fala só os sons: /c/ /o/ /p/ /o/.",
      "3) Você junta os sons e adivinha o objeto!",
      "4) Depois troquem: você fala os sons e ele adivinha.",
    ],
    registro: "📸 Uma foto dos objetos que você adivinhou.",
  },

  momento_fluencia: {
    titulo: "Juntar os sons e ler junto",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho no cronômetro e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "O SOL.",
      "O PÉ.",
      "A MÃO.",
    ],
    metaSegundos: 15,
  },

  recompensa: { xp: 120, moedas: 70 },
};
