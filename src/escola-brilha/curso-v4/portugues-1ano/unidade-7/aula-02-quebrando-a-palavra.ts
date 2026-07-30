import type { AulaPortuguesV4 } from "../../types";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as tambor } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * Unidade 7 · Aula 2 — Quebrando a Palavra
 * -------------------------------------------------------------
 * CONSCIÊNCIA FONÊMICA — segmentação.
 * A criança escuta a palavra e a quebra em sons, batendo palma
 * para cada fonema. Estímulo sonoro primeiro, letra só como apoio.
 *
 * BNCC: EF01LP04 · EF01LP05 · EF01LP07
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-quebrando-a-palavra",
  titulo: "Quebrando a Palavra",
  iconeTrilha: "👏",
  bncc: ["EF01LP04", "EF01LP05", "EF01LP07"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O tambor da Coruja",
    historia:
      "A Coruja Ouvidão pegou um tambor. — Toda palavra pode ser quebrada em pedacinhos de som! Escute: SOL tem três sons: /s/ /o/ /l/. Uma batida para cada som! Vamos bater junto?",
    imagemUrl: tambor,
  },

  momento02_previsao: {
    instrucao: "A Coruja escreveu no quadro quantas batidas cada palavra tem.",
    bloco: {
      titulo: "O Quadro das Batidas",
      recado: {
        rotulo: "Batidas de som",
        icone: "🥁",
        linhas: ["SOL = 3 batidas", "LUA = 3 batidas", "PATO = 4 batidas"],
        estilo: "cartaz",
      },
      pergunta: "O que a Coruja está contando com o tambor?",
      hipoteses: [
        { texto: "Os sons de cada palavra." },
        { texto: "As pessoas da sala." },
        { texto: "As cores das figuras." },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Cada batida é UM som da palavra.",
      feedbackErro: "Olhe: SOL = 3. Fale devagar /s/ /o/ /l/ — são 3 sons!",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras importantes de hoje.",
    cards: [
      {
        palavra: "quebrar a palavra",
        explicacao: "É falar bem devagar, separando cada somzinho.",
        exemplo: "LUA quebrada fica: /l/ /u/ /a/.",
        imagemUrl: lua,
      },
      {
        palavra: "batida",
        explicacao: "É uma palma ou toque no tambor para cada som que a gente escuta.",
        exemplo: "SOL tem 3 batidas: /s/ /o/ /l/.",
        imagemUrl: tambor,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Quebre cada palavra em sons",
    instrucao:
      "Toque em “Quebrar”. Cada quadradinho que acender é UM som — bata uma palma junto! Depois toque em cada som sozinho para repetir com a boca.",
    blocos: [
      {
        tipo: "segmentarFonemas",
        itens: [
          { palavra: "SOL", fonemas: ["s", "o", "l"], imagemUrl: sol },
          { palavra: "LUA", fonemas: ["l", "u", "a"], imagemUrl: lua },
          { palavra: "PATO", fonemas: ["p", "a", "t", "o"], imagemUrl: pato },
          { palavra: "CASA", fonemas: ["c", "a", "s", "a"], imagemUrl: casa },
          { palavra: "BOLA", fonemas: ["b", "o", "l", "a"], imagemUrl: bola },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos.",
    leitura: {
      titulo: "O Tambor dos Sons",
      imagemUrl: tambor,
      legendaImagem: "O tambor da Coruja Ouvidão",
      destacar: ["SOL", "SONS", "BATIDAS"],
      paragrafos: [
        "A Coruja bateu o tambor três vezes: tum, tum, tum.",
        "— Isso é o SOL! Ele tem três SONS: /s/ /o/ /l/.",
        "Depois ela bateu quatro vezes: tum, tum, tum, tum. — Isso é o PATO!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "A resposta está no texto.",
    perguntas: [
      {
        pergunta: "Quantas batidas tem a palavra SOL?",
        opcoes: ["Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 Três: /s/ /o/ /l/.",
        feedbackErro: "Está escrito: 'bateu o tambor três vezes'.",
        ondeEstaNoTexto: "Ele tem três SONS: /s/ /o/ /l/.",
      },
      {
        pergunta: "Qual palavra tem quatro batidas no texto?",
        opcoes: ["SOL", "PATO", "LUA"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! PATO: /p/ /a/ /t/ /o/.",
        feedbackErro: "Leia o final: 'bateu quatro vezes… Isso é o ___!'",
        ondeEstaNoTexto: "Depois ela bateu quatro vezes… Isso é o PATO!",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pense no som, não na letra.",
    perguntas: [
      {
        pergunta: "Quem toca o tambor na história?",
        opcoes: ["A Coruja Ouvidão", "O pato", "A Mila"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Quem bateu o tambor três vezes?",
      },
      {
        pergunta: "Quantos sons tem a palavra LUA?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        feedbackAcerto: "🎉 /l/ /u/ /a/ = 3 sons.",
        feedbackErro: "Fale devagar: l… u… a. Conte nos dedos.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem como a gente quebra uma palavra.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Escutar a palavra inteira: SOL.", imagemUrl: coruja },
        { id: "p2", texto: "Falar devagar cada som: /s/ /o/ /l/.", imagemUrl: tambor },
        { id: "p3", texto: "Contar as batidas: 3 sons!", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito!",
      feedbackErro: "Primeiro escuta inteiro, depois quebra devagar, por último conta.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho.",
    leitura: {
      titulo: "O Tico e o Tambor",
      imagemUrl: menino,
      destacar: ["TICO", "sons"],
      paragrafos: [
        "Tico pegou o tambor e falou seu nome devagar: /t/ /i/ /c/ /o/.",
        "Ele bateu quatro vezes. O nome dele tem quatro sons!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos sons tem o nome TICO?",
        opcoes: ["Três", "Quatro", "Cinco"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! /t/ /i/ /c/ /o/.",
        feedbackErro: "Está no texto: 'Ele bateu ___ vezes'.",
        ondeEstaNoTexto: "Ele bateu quatro vezes. O nome dele tem quatro sons!",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Toda palavra é feita de sons colados.",
      "Falar devagar ajuda a escutar cada som separado.",
      "Uma palma para cada som: SOL = /s/ /o/ /l/ = 3 palmas.",
    ],
    miniDesafio: {
      pergunta: "Quantos sons tem a palavra BOLA?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      feedbackAcerto: "🎉 /b/ /o/ /l/ /a/ = 4 sons.",
      feedbackErro: "Fale devagar e conte: b… o… l… a.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quantos sons tem SOL?",
        opcoes: ["2", "3", "4", "5"],
        correta: 1,
        feedbackAcerto: "🎉 /s/ /o/ /l/.",
        feedbackErro: "Conte nos dedos falando devagar.",
        dica: "Fale s… o… l… e levante um dedo por som.",
        reensino: "SOL = /s/ + /o/ + /l/. São 3 sons, 3 palmas.",
      },
      {
        pergunta: "2/5 — Quantos sons tem PATO?",
        opcoes: ["3", "4", "5", "2"],
        correta: 1,
        feedbackAcerto: "🎉 /p/ /a/ /t/ /o/.",
        feedbackErro: "Fale devagar: p… a… t… o.",
        dica: "Bata uma palma para cada pedacinho de som.",
        reensino: "PATO = /p/ /a/ /t/ /o/ = 4 sons.",
      },
      {
        pergunta: "3/5 — Qual é o ÚLTIMO som de SOL?",
        opcoes: ["/s/", "/o/", "/l/", "/a/"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! Termina com /l/.",
        feedbackErro: "Fale a palavra e pare no finalzinho: so-lll.",
        dica: "O último som é o que fica no fim, quando a boca vai fechar.",
        reensino: "Em SOL, o último som é /l/: sss-óóó-lll.",
      },
      {
        pergunta: "4/5 — Qual palavra tem MAIS sons?",
        opcoes: ["LUA", "SOL", "CASA", "PÉ"],
        correta: 2,
        feedbackAcerto: "🎉 CASA tem 4: /c/ /a/ /s/ /a/.",
        feedbackErro: "Conte cada uma: LUA=3, SOL=3, CASA=4, PÉ=2.",
        dica: "Quebre todas em sons e compare os números.",
        reensino: "LUA=3, SOL=3, PÉ=2 e CASA=4. CASA é a maior em sons.",
      },
      {
        pergunta: "5/5 — Quebrar a palavra em sons é falar...",
        opcoes: ["Bem rápido", "Bem devagar, som por som", "Cantando", "Sem abrir a boca"],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! Tambor dominado! 🥁",
        feedbackErro: "Só dá pra escutar cada som falando DEVAGAR.",
        dica: "Como a Coruja faz: bem devaaagar.",
        reensino: "Para quebrar a palavra, falamos devagar, separando cada som.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Palmas na palavra",
    materiais: ["Só as suas mãos"],
    passos: [
      "1) Peça a um adulto para falar 5 palavras do dia a dia.",
      "2) Fale cada palavra devagar e bata uma palma para cada som.",
      "3) Diga quantos sons deu.",
      "4) Depois é a sua vez de falar as palavras e o adulto bater as palmas!",
    ],
    registro: "📸 Um vídeo curto ou foto batendo palmas com a família.",
  },

  recompensa: { xp: 110, moedas: 65 },
};
