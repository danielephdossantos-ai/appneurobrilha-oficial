import type { AulaPortuguesV4 } from "../../types";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as rato } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as vaca } from "@/assets/neuro-treino/objetos/vaca.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * Unidade 7 · Aula 4 — Trocando um Som
 * -------------------------------------------------------------
 * CONSCIÊNCIA FONÊMICA — manipulação (troca de fonema).
 * Nível mais alto da unidade: trocar um som muda a palavra inteira
 * (PATO → GATO, BOLA → BOLO). Fecha "O Ouvido Mágico".
 *
 * BNCC: EF01LP04 · EF01LP05 · EF01LP07
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-trocando-um-som",
  titulo: "Trocando um Som",
  iconeTrilha: "🔁",
  bncc: ["EF01LP04", "EF01LP05", "EF01LP07"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A varinha trocadora",
    historia:
      "A Coruja Ouvidão achou uma varinha mágica. — Se eu tirar UM som e colocar outro, a palavra vira outra coisa! Olha: PATO… tiro o /p/, ponho o /g/… virou GATO! Quer tentar?",
    imagemUrl: coruja,
  },

  momento02_previsao: {
    instrucao: "A varinha deixou uma pista no quadro.",
    bloco: {
      titulo: "A Pista da Varinha",
      recado: {
        rotulo: "Troca mágica",
        icone: "🪄",
        linhas: ["PATO", "tira /p/ põe /r/", "= ?"],
        estilo: "cartaz",
      },
      pergunta: "Em que palavra o PATO se transforma?",
      hipoteses: [{ texto: "RATO" }, { texto: "GATO" }, { texto: "PATA" }],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Trocando /p/ por /r/, PATO vira RATO.",
      feedbackErro: "O som novo é /r/. Então a palavra começa com R: R-ATO.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras da varinha.",
    cards: [
      {
        palavra: "trocar",
        explicacao: "É tirar uma coisa e colocar outra no lugar.",
        exemplo: "Troquei o som /p/ pelo som /g/: PATO virou GATO.",
        imagemUrl: gato,
      },
      {
        palavra: "transformar",
        explicacao: "É virar outra coisa.",
        exemplo: "BOLA se transformou em BOLO.",
        imagemUrl: bolo,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Troque um som e veja a mágica",
    instrucao:
      "Toque em “Trocar o som”. Escute com atenção: só UM somzinho muda, mas a palavra vira outra completamente diferente!",
    blocos: [
      {
        tipo: "trocarFonema",
        itens: [
          {
            palavra: "PATO",
            de: "p",
            para: "g",
            resultado: "GATO",
            posicao: "inicio",
            imagemUrl: pato,
            imagemResultadoUrl: gato,
          },
          {
            palavra: "PATO",
            de: "p",
            para: "r",
            resultado: "RATO",
            posicao: "inicio",
            imagemUrl: pato,
            imagemResultadoUrl: rato,
          },
          {
            palavra: "BOLA",
            de: "a",
            para: "o",
            resultado: "BOLO",
            posicao: "fim",
            imagemUrl: bola,
            imagemResultadoUrl: bolo,
          },
          {
            palavra: "VACA",
            de: "v",
            para: "f",
            resultado: "FACA",
            posicao: "inicio",
            imagemUrl: vaca,
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos.",
    leitura: {
      titulo: "A Varinha da Coruja",
      imagemUrl: coruja,
      legendaImagem: "A Coruja com a varinha trocadora",
      destacar: ["PATO", "GATO", "TROCOU"],
      paragrafos: [
        "A Coruja apontou a varinha para o PATO.",
        "Ela TROCOU o som /p/ pelo som /g/.",
        "Puf! O pato virou GATO e saiu miando pela sala.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "A resposta está no texto.",
    perguntas: [
      {
        pergunta: "Qual som a Coruja tirou?",
        opcoes: ["/g/", "/p/", "/t/"],
        correta: 1,
        feedbackAcerto: "🎉 Ela tirou o /p/.",
        feedbackErro: "Leia: 'TROCOU o som ___ pelo som /g/'.",
        ondeEstaNoTexto: "Ela TROCOU o som /p/ pelo som /g/.",
      },
      {
        pergunta: "Em que o pato se transformou?",
        opcoes: ["Rato", "Gato", "Pata"],
        correta: 1,
        feedbackAcerto: "🎉 Virou GATO!",
        feedbackErro: "Está no fim: 'O pato virou ___'.",
        ondeEstaNoTexto: "Puf! O pato virou GATO.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora é você quem usa a varinha.",
    perguntas: [
      {
        pergunta: "BOLA, trocando o último som /a/ por /o/, vira:",
        opcoes: ["BALA", "BOLO", "BOCA"],
        correta: 1,
        feedbackAcerto: "🎉 BOLO!",
        feedbackErro: "Só o finalzinho muda: bol-A vira bol-O.",
      },
      {
        pergunta: "MALA, trocando /m/ por /b/, vira:",
        opcoes: ["BALA", "SALA", "MOLA"],
        correta: 0,
        feedbackAcerto: "🎉 BALA!",
        feedbackErro: "O som novo é /b/, então começa com B.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem a mágica da troca.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Escutar a palavra: PATO.", imagemUrl: pato },
        { id: "p2", texto: "Tirar o som /p/ e pôr o som /g/.", imagemUrl: coruja },
        { id: "p3", texto: "Escutar a palavra nova: GATO!", imagemUrl: gato },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito!",
      feedbackErro: "Primeiro escuta, depois troca o som, por último escuta a nova.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho.",
    leitura: {
      titulo: "O Nuno e a Varinha",
      imagemUrl: menino,
      destacar: ["MALA", "BALA"],
      paragrafos: [
        "Nuno pegou a varinha e apontou para a MALA.",
        "Trocou o som /m/ pelo som /b/ e apareceu uma BALA doce.",
      ],
    },
    perguntas: [
      {
        pergunta: "A MALA virou o quê?",
        opcoes: ["SALA", "BALA", "MOLA"],
        correta: 1,
        feedbackAcerto: "🎉 Virou BALA!",
        feedbackErro: "Está escrito: 'apareceu uma ___ doce'.",
        ondeEstaNoTexto: "Trocou o som /m/ pelo som /b/ e apareceu uma BALA doce.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ESCRITA — traçado com o dedo + ditado com sílabas móveis
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Troque o som e escreva a nova palavra",
    instrucao: "Quando um som muda, a escrita muda também. Escreva as duas palavras.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "G", exemplo: "G de GATO, som /g/", dicaTracado: "faz a barriga e puxa o rabinho" },
          { letra: "B", exemplo: "B de BALA, som /b/", dicaTracado: "desce e faz duas barrigas" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "GATO", silabas: ["GA", "TO"], distratores: ["PA", "MI"], dica: "É o PATO com o som /g/ no começo." },
          { palavra: "BALA", silabas: ["BA", "LA"], distratores: ["MA", "SO"], dica: "É a MALA com o som /b/ no começo." },
        ],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Trocar UM som muda a palavra inteira.",
      "Pode trocar o som do começo (PATO → GATO) ou do fim (BOLA → BOLO).",
      "Escutar bem é o que ajuda a ler e a escrever certo.",
    ],
    miniDesafio: {
      pergunta: "RATO, trocando /r/ por /g/, vira:",
      opcoes: ["PATO", "GATO", "MATO"],
      correta: 1,
      feedbackAcerto: "🎉 GATO!",
      feedbackErro: "O som novo é /g/: G-ATO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — PATO trocando /p/ por /g/ vira:",
        opcoes: ["RATO", "GATO", "PATA", "MATO"],
        correta: 1,
        feedbackAcerto: "🎉 GATO!",
        feedbackErro: "O som novo é /g/, então começa com G.",
        dica: "Ponha o som novo no lugar do primeiro: g + ato.",
        reensino: "Tiramos /p/ de PATO e sobra ATO. Colocando /g/: G + ATO = GATO.",
      },
      {
        pergunta: "2/5 — BOLA trocando o último som /a/ por /o/ vira:",
        opcoes: ["BOLO", "BALA", "BOCA", "COLA"],
        correta: 0,
        feedbackAcerto: "🎉 BOLO!",
        feedbackErro: "Só o final muda: bol-A → bol-O.",
        dica: "Fale bol… e termine com o som /o/.",
        reensino: "BOL + /a/ = BOLA. BOL + /o/ = BOLO. Só o último som mudou.",
      },
      {
        pergunta: "3/5 — MALA trocando /m/ por /b/ vira:",
        opcoes: ["SALA", "MOLA", "BALA", "MALHA"],
        correta: 2,
        feedbackAcerto: "🎉 BALA!",
        feedbackErro: "O som novo é /b/: B-ALA.",
        dica: "Tire o mmm do começo e ponha o b.",
        reensino: "MALA sem o /m/ fica ALA. Com /b/: B + ALA = BALA.",
      },
      {
        pergunta: "4/5 — VACA trocando /v/ por /f/ vira:",
        opcoes: ["FACA", "VACA", "SACA", "CASA"],
        correta: 0,
        feedbackAcerto: "🎉 FACA!",
        feedbackErro: "Com o som /f/ no começo: F-ACA.",
        dica: "Fffff + aca.",
        reensino: "/v/ e /f/ são parecidos, mas /f/ não faz a garganta vibrar. VACA → FACA.",
      },
      {
        pergunta: "5/5 — Quando eu troco um som da palavra:",
        opcoes: [
          "A palavra continua igual",
          "A palavra vira outra palavra",
          "A palavra some",
          "Só a letra muda, o som não",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! Ouvido Mágico completo! 🦉🌟",
        feedbackErro: "Lembre: PATO virou GATO. A palavra ficou diferente!",
        dica: "Pense no pato que virou gato.",
        reensino: "Trocar um som transforma a palavra em outra: PATO → GATO, BOLA → BOLO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 A varinha da família",
    materiais: ["Papel e lápis (opcional)"],
    passos: [
      "1) Fale uma palavra curta para um adulto: MALA.",
      "2) Peça para ele trocar o primeiro som e falar a palavra nova.",
      "3) Anotem ou desenhem as duplas que vocês descobrirem (MALA/BALA, PATO/GATO).",
      "4) Tentem achar 3 duplas diferentes!",
    ],
    registro: "📸 Uma foto da lista ou dos desenhos das duplas de palavras.",
  },

  momento_fluencia: {
    titulo: "Pares que mudam um som",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho no cronômetro e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "MALA — BALA",
      "PATO — GATO",
      "FACA — VACA",
    ],
    metaSegundos: 20,
  },

  recompensa: { xp: 130, moedas: 80, medalha: "🦉 Ouvido Mágico" },
};
