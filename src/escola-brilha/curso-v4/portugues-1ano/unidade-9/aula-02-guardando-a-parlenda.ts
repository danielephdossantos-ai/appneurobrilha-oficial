import type { AulaPortuguesV4 } from "../../types";
import { url as pularCorda } from "@/assets/neuro-treino/objetos/pular-corda.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as avoMulher } from "@/assets/neuro-treino/objetos/avo-mulher.png.asset.json";
import { url as tambor } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";

/**
 * Unidade 9 — Aula 2: Guardando a Parlenda
 * -------------------------------------------------------------
 * A criança REGISTRA (escreve/guarda) uma parlenda ou quadrinha da
 * cultura oral, em colaboração, pensando para quem e para quê.
 *
 * BNCC: EF01LP18 (registrar cantigas, quadrinhas, parlendas)
 *       EF01LP13 (rimas) · EF01LP01 (escrita alfabética)
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-guardando-a-parlenda",
  titulo: "Guardando a Parlenda",
  iconeTrilha: "🥁",
  bncc: ["EF01LP18", "EF01LP13"],
  duracaoMin: 16,

  momento01_motivacao: {
    titulo: "A parlenda que quase se perdeu",
    historia:
      "A vovó do Brilha cantava uma parlenda quando era criança. Um dia, ela quase esqueceu! Brilha correu com o lápis e ESCREVEU a parlenda no caderno. Registrar é isso: guardar no papel o que a boca canta, para nunca mais se perder.",
    imagemUrl: avoMulher,
  },

  momento02_previsao: {
    instrucao: "Olhe a folha que Brilha escreveu.",
    bloco: {
      titulo: "Parlenda da vovó",
      capaImagemUrl: papel,
      recado: {
        rotulo: "Parlenda registrada",
        icone: "🥁",
        linhas: [
          "UM, DOIS, FEIJÃO COM ARROZ.",
          "TRÊS, QUATRO, FEIJÃO NO PRATO.",
        ],
        estilo: "papel",
      },
      pergunta: "Por que Brilha escreveu isso no papel?",
      hipoteses: [
        { texto: "Para guardar e não esquecer.", imagemUrl: papel },
        { texto: "Para pedir comida.", imagemUrl: pato },
        { texto: "Para fazer uma conta.", imagemUrl: mural },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Escrever guarda a parlenda para sempre.",
      feedbackErro:
        "A parlenda estava só na boca da vovó. No papel, ela fica guardada.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras de hoje.",
    cards: [
      {
        palavra: "parlenda",
        explicacao: "Versinho falado no ritmo, que as crianças brincam há muito tempo.",
        exemplo: "Um, dois, feijão com arroz.",
        imagemUrl: pularCorda,
      },
      {
        palavra: "registrar",
        explicacao: "Escrever ou gravar para guardar e não esquecer.",
        exemplo: "Brilha registrou a parlenda no caderno.",
        imagemUrl: papel,
      },
      {
        palavra: "verso",
        explicacao: "Cada linha da parlenda ou do poeminha.",
        exemplo: "'Um, dois, feijão com arroz' é um verso.",
        imagemUrl: tambor,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Cada verso em uma linha",
    instrucao: "Ouça: na parlenda escrita, cada verso fica em uma linha só.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Um, dois, feijão com arroz.", explicacao: "Verso 1 — termina em ARROZ." },
          { texto: "Três, quatro, feijão no prato.", explicacao: "Verso 2 — termina em PRATO." },
          { texto: "Cinco, seis, falar inglês.", explicacao: "Verso 3 — SEIS rima com INGLÊS." },
          { texto: "Sete, oito, comer biscoito.", explicacao: "Verso 4 — OITO rima com BISCOITO." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto batendo o ritmo com a mão.",
    leitura: {
      titulo: "A parlenda do sapo",
      imagemUrl: sapo,
      legendaImagem: "O sapo pula no ritmo",
      destacar: ["sapo", "pula", "verso", "rima"],
      paragrafos: [
        "O sapo pula, pula, pula.",
        "O sapo cai na lagoa.",
        "O sapo sai todo molhado.",
        "E pula de novo, animado.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte na parlenda se precisar.",
    perguntas: [
      {
        pergunta: "O que o sapo faz o tempo todo?",
        opcoes: ["Pula", "Canta", "Dorme"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ele pula.",
        feedbackErro: "Está no primeiro verso.",
        dica: "Leia a primeira linha.",
        ondeEstaNoTexto: "O sapo pula, pula, pula.",
      },
      {
        pergunta: "Onde o sapo cai?",
        opcoes: ["Na cama", "Na lagoa", "No telhado"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Na lagoa.",
        feedbackErro: "Está no segundo verso.",
        dica: "Segunda linha.",
        ondeEstaNoTexto: "O sapo cai na lagoa.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense na forma da parlenda.",
    perguntas: [
      {
        pergunta: "Na parlenda escrita, cada verso fica...",
        opcoes: ["Em uma linha", "Tudo grudado", "Só na cabeça"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Um verso por linha.",
        feedbackErro: "Olhe a folha do Brilha: cada verso tem a sua linha.",
        reensino: "Parlenda registrada = título em cima e cada verso em uma linha, para dar para cantar lendo.",
      },
      {
        pergunta: "MOLHADO rima com...",
        opcoes: ["lagoa", "animado", "sapo"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Molhado e animado terminam igual.",
        feedbackErro: "Rima é quando o fim da palavra soa igual: -ADO com -ADO.",
        reensino: "Escute o fim: molh-ADO / anim-ADO. O mesmo som no fim é rima.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a parlenda na ordem certa.",
    bloco: {
      instrucao: "Verso 1 → verso 2 → verso 3 → verso 4.",
      itens: [
        { id: "p1", texto: "Um, dois, feijão com arroz.", imagemUrl: papel },
        { id: "p2", texto: "Três, quatro, feijão no prato.", imagemUrl: pato },
        { id: "p3", texto: "Cinco, seis, falar inglês.", imagemUrl: gato },
        { id: "p4", texto: "Sete, oito, comer biscoito.", imagemUrl: lua },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Os números mostram a ordem dos versos.",
      feedbackErro: "Siga a contagem: um, dois... três, quatro... cinco, seis...",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "Quadrinha do gato",
      imagemUrl: gato,
      destacar: ["gato", "sapato"],
      paragrafos: ["O meu gato é bonito.", "Ele dorme no sapato."],
    },
    perguntas: [
      {
        pergunta: "Onde o gato dorme?",
        opcoes: ["No sapato", "Na lagoa", "No telhado"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! No sapato.",
        feedbackErro: "Releia o segundo verso.",
        ondeEstaNoTexto: "Ele dorme no sapato.",
      },
      {
        pergunta: "Quantos versos tem essa quadrinha aqui?",
        opcoes: ["Um", "Dois", "Dez"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Duas linhas, dois versos.",
        feedbackErro: "Conte as linhas: cada linha é um verso.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Registrar a minha parlenda",
    instrucao: "Trace, monte e escreva a parlenda para guardar.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "P", exemplo: "P de PARLENDA", dicaTracado: "desce reto e faz a barriguinha em cima" },
          { letra: "V", exemplo: "V de VERSO", dicaTracado: "desce na diagonal e sobe" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "SAPO", silabas: ["SA", "PO"], distratores: ["MI", "TU"], dica: "Pula na lagoa.", imagemUrl: sapo },
          { palavra: "GATO", silabas: ["GA", "TO"], distratores: ["LE", "RU"], dica: "Faz miau.", imagemUrl: gato },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Parlenda que eu guardei",
        comando: "Escreva 2 versos de uma parlenda que você sabe. Um verso em cada linha.",
        linhas: 2,
        modelo: ["Um, dois, feijão com arroz.", "Três, quatro, feijão no prato."],
        checklist: [
          "Escrevi um verso em cada linha?",
          "Li em voz alta no ritmo?",
          "As palavras do fim rimam?",
        ],
      },
    ],
  },

  momento_minijogo: {
    titulo: "Caça-rimas da parlenda",
    instrucao: "Ligue cada palavra à que rima com ela.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Quem rima com quem?",
      bloco: {
        instrucao: "Arraste a palavra para a que termina com o mesmo som.",
        itens: [
          { id: "m1", texto: "GATO", alvoId: "n1" },
          { id: "m2", texto: "ARROZ", alvoId: "n2" },
          { id: "m3", texto: "OITO", alvoId: "n3" },
        ],
        alvos: [
          { id: "n1", nome: "SAPATO", descricao: "-ATO", imagemUrl: gato },
          { id: "n2", nome: "NÓS", descricao: "-OZ / -ÓS", imagemUrl: papel },
          { id: "n3", nome: "BISCOITO", descricao: "-OITO", imagemUrl: lua },
        ],
        feedbackAcerto: "🎉 Isso! Rima é mesmo som no fim.",
        feedbackErro: "Fale a palavra devagar e escute só o finalzinho dela.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Parlenda é versinho falado no ritmo, brincado há muito tempo.",
      "Registrar é escrever para guardar e não esquecer.",
      "Cada verso fica em uma linha, com o título em cima.",
      "Muitos versos terminam com rima: mesmo som no fim.",
    ],
    miniDesafio: {
      pergunta: "Registrar a parlenda serve para...",
      opcoes: ["Esquecer", "Guardar e não perder", "Apagar"],
      correta: 1,
      feedbackAcerto: "🎉 Isso!",
      feedbackErro: "No papel, a parlenda fica guardada para sempre.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Parlenda é...",
        opcoes: ["um versinho de brincar no ritmo", "uma lista de compras", "um bilhete", "uma conta"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Parlenda é versinho falado no ritmo.",
      },
      {
        pergunta: "2/5 — Registrar uma parlenda é...",
        opcoes: ["esquecer", "escrever para guardar", "cantar bem alto", "apagar"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Registrar = guardar no papel ou no áudio.",
      },
      {
        pergunta: "3/5 — Qual palavra rima com OITO?",
        opcoes: ["arroz", "biscoito", "prato", "gato"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Escute o fim: OITO / bisc-OITO.",
      },
      {
        pergunta: "4/5 — Na parlenda escrita, cada verso fica...",
        opcoes: ["em uma linha", "tudo em uma linha só", "de cabeça para baixo", "sem ordem"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Um verso por linha, para dar para cantar lendo.",
      },
      {
        pergunta: "5/5 — Na parlenda do sapo, onde ele cai?",
        opcoes: ["na cama", "na lagoa", "no prato", "no sapato"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "No texto: 'O sapo cai na lagoa'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 A parlenda da minha família",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Pergunte a um adulto qual parlenda ou cantiga ele cantava quando era criança.",
      "2) O adulto canta devagar; a criança repete no ritmo.",
      "3) A criança escreve os versos — um em cada linha.",
      "4) A família lê o registro em voz alta, batendo palma no ritmo.",
    ],
    registro: "📸 Uma foto da parlenda da família registrada no papel.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "🥁 Guardião das Parlendas",
  },
};
