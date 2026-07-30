import type { AulaPortuguesV4 } from "../../types";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as joaninha } from "@/assets/neuro-treino/objetos/joaninha.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";

/**
 * Unidade 8 — Aula 1: Curiosidade do Dia
 * -------------------------------------------------------------
 * Campo investigativo. A criança descobre o gênero CURIOSIDADE:
 * um texto curtinho que ensina um fato verdadeiro, com título,
 * imagem e uma informação surpreendente.
 *
 * BNCC: EF01LP22 (produzir curiosidades) · EF01LP24 (reconhecer a
 * formatação do gênero) · EF01LP01 (escrita alfabética na produção)
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-curiosidade-do-dia",
  titulo: "Curiosidade do Dia",
  iconeTrilha: "🔎",
  bncc: ["EF01LP22", "EF01LP24"],
  duracaoMin: 16,

  momento01_motivacao: {
    titulo: "Brilha virou repórter!",
    historia:
      "Brilha colocou o crachá de REPÓRTER e saiu com o caderninho na mão. Ele descobriu uma coisa que quase ninguém sabe sobre a abelha e quer contar pra turma. Um texto curtinho que ensina uma coisa verdadeira chama CURIOSIDADE. Hoje você também vira repórter!",
    imagemUrl: abelha,
  },

  momento02_previsao: {
    instrucao: "Olhe o cartão do repórter Brilha e pense.",
    bloco: {
      titulo: "Curiosidade da abelha",
      capaImagemUrl: abelha,
      recado: {
        rotulo: "Curiosidade",
        icone: "🔎",
        linhas: [
          "VOCÊ SABIA?",
          "A abelha visita muitas flores em um dia.",
          "Ela leva o pó da flor no corpinho.",
        ],
        estilo: "papel",
      },
      pergunta: "Para que serve esse texto?",
      hipoteses: [
        { texto: "Para ensinar uma coisa verdadeira.", imagemUrl: livro },
        { texto: "Para contar uma história inventada.", imagemUrl: borboleta },
        { texto: "Para convidar para uma festa.", imagemUrl: papel },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Curiosidade serve para ENSINAR uma coisa de verdade.",
      feedbackErro:
        "Repare no começo: 'VOCÊ SABIA?'. Esse texto não conta história — ele ensina um fato verdadeiro.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras de repórter.",
    cards: [
      {
        palavra: "curiosidade",
        explicacao: "Texto curtinho que ensina uma coisa verdadeira e surpreendente.",
        exemplo: "Você sabia? A joaninha tem pintinhas pretas nas asas.",
        imagemUrl: joaninha,
      },
      {
        palavra: "fato",
        explicacao: "Uma coisa que é verdade mesmo, não é inventada.",
        exemplo: "É fato: a abelha voa de flor em flor.",
        imagemUrl: abelha,
      },
      {
        palavra: "título",
        explicacao: "O nome do texto, escrito bem grande em cima.",
        exemplo: "O título é 'Curiosidade da abelha'.",
        imagemUrl: papel,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Como se monta uma curiosidade",
    instrucao: "Ouça cada parte. Toda curiosidade tem as mesmas 3 partes.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Curiosidade da abelha.", explicacao: "1ª parte: o TÍTULO, em cima e bem grande." },
          { texto: "Você sabia?", explicacao: "2ª parte: a pergunta que chama a atenção." },
          { texto: "A abelha visita muitas flores.", explicacao: "3ª parte: o FATO verdadeiro." },
          { texto: "Ela leva o pó da flor no corpo.", explicacao: "Pode ter mais um detalhe do fato." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto com o Brilha.",
    leitura: {
      titulo: "Curiosidade da abelha",
      imagemUrl: flor,
      legendaImagem: "A abelha pousa na flor",
      destacar: ["abelha", "flor", "fato"],
      paragrafos: [
        "Você sabia? A abelha pousa na flor para pegar comida.",
        "No corpo dela fica um pó da flor.",
        "Esse pó cai em outra flor. É por isso que nascem mais flores.",
        "Isso é um fato: acontece de verdade.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "A abelha pousa na flor para...",
        opcoes: ["Pegar comida", "Dormir", "Tomar banho"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ela pousa para pegar comida.",
        feedbackErro: "Está na primeira linha do texto.",
        dica: "Leia de novo só a primeira frase.",
        ondeEstaNoTexto: "A abelha pousa na flor para pegar comida.",
      },
      {
        pergunta: "O que fica no corpo da abelha?",
        opcoes: ["Água", "O pó da flor", "Areia"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Fica o pó da flor.",
        feedbackErro: "Procure a linha que fala do corpo dela.",
        dica: "Segunda linha do texto.",
        ondeEstaNoTexto: "No corpo dela fica um pó da flor.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense no formato do texto.",
    perguntas: [
      {
        pergunta: "Onde fica o título de uma curiosidade?",
        opcoes: ["Em cima, bem grande", "No meio", "Escondido no fim"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O título vem sempre em cima.",
        feedbackErro: "Olhe o cartão do Brilha: o nome do texto está lá em cima.",
        reensino: "Todo texto de curiosidade começa pelo TÍTULO, escrito em cima e em letra grande.",
      },
      {
        pergunta: "Uma curiosidade conta...",
        opcoes: ["Uma coisa inventada", "Uma coisa verdadeira", "Um pedido"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Curiosidade é fato de verdade.",
        feedbackErro: "Curiosidade não é história inventada: é fato.",
        reensino: "História = inventada. Curiosidade = verdadeira, ensina algo do mundo real.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Monte a curiosidade na ordem certa.",
    bloco: {
      instrucao: "Título → pergunta → fato.",
      itens: [
        { id: "c1", texto: "Curiosidade do girassol", imagemUrl: girassol },
        { id: "c2", texto: "Você sabia?", imagemUrl: papel },
        { id: "c3", texto: "O girassol vira o rosto para o sol.", imagemUrl: flor },
      ],
      ordemCerta: ["c1", "c2", "c3"],
      feedbackAcerto: "🎉 Perfeito! Título, pergunta e depois o fato.",
      feedbackErro: "Comece pelo nome do texto. Depois vem a pergunta e por último o fato.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "Curiosidade da joaninha",
      imagemUrl: joaninha,
      destacar: ["joaninha", "pintinhas"],
      paragrafos: [
        "Você sabia? A joaninha tem pintinhas pretas.",
        "Ela come bichinhos que estragam a folha.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como são as pintinhas da joaninha?",
        opcoes: ["Pretas", "Azuis", "Verdes"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! São pretas.",
        feedbackErro: "Releia a primeira linha.",
        ondeEstaNoTexto: "A joaninha tem pintinhas pretas.",
      },
      {
        pergunta: "Esse texto é uma...",
        opcoes: ["Curiosidade", "História de dormir", "Lista de compras"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ele ensina um fato verdadeiro.",
        feedbackErro: "Ele começa com 'Você sabia?' e ensina um fato: é curiosidade.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Escrever minha curiosidade",
    instrucao: "Trace, monte e depois escreva como um repórter.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "F", exemplo: "F de FATO", dicaTracado: "desce reto e faz dois bracinhos" },
          { letra: "V", exemplo: "V de VOCÊ SABIA", dicaTracado: "desce na diagonal e sobe" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "ABELHA", silabas: ["A", "BE", "LHA"], distratores: ["TO", "MI"], dica: "Faz mel.", imagemUrl: abelha },
          { palavra: "FLOR", silabas: ["FLOR"], distratores: ["PA", "SE"], dica: "Nasce no jardim.", imagemUrl: flor },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Minha curiosidade de repórter",
        comando: "Escreva o TÍTULO e 2 linhas de curiosidade sobre um bichinho que você conhece.",
        linhas: 3,
        modelo: ["Curiosidade do gato", "Você sabia?", "O gato enxerga bem no escuro."],
        checklist: [
          "Escrevi o título em cima?",
          "Escrevi 'Você sabia?'",
          "O que escrevi é verdade mesmo?",
        ],
      },
    ],
  },

  momento_minijogo: {
    titulo: "Caça-fatos do repórter",
    instrucao: "Marque só o que é FATO de verdade.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "É fato ou é invenção?",
      bloco: {
        instrucao: "Toque só nas frases que são verdade de verdade.",
        pergunta: "Quais frases são fatos?",
        opcoes: [
          { id: "f1", texto: "A abelha voa.", correto: true, imagemUrl: abelha },
          { id: "f2", texto: "A flor fala ao telefone.", correto: false, imagemUrl: flor },
          { id: "f3", texto: "A joaninha tem pintinhas.", correto: true, imagemUrl: joaninha },
          { id: "f4", texto: "A borboleta dirige carro.", correto: false, imagemUrl: borboleta },
        ],
        feedbackAcerto: "🎉 Isso! Repórter só escreve o que é verdade.",
        feedbackErro: "Pergunte: isso acontece de verdade no mundo? Se não, é invenção.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Curiosidade é um texto curtinho que ensina uma coisa verdadeira.",
      "Ela tem título em cima, uma pergunta e o fato.",
      "Fato é o que acontece de verdade; invenção é história.",
      "Repórter pesquisa antes de escrever.",
    ],
    miniDesafio: {
      pergunta: "O que vem primeiro na curiosidade?",
      opcoes: ["O fato", "O título", "O desenho"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Primeiro o título.",
      feedbackErro: "O nome do texto vem sempre em cima.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Curiosidade é um texto que...",
        opcoes: ["Ensina um fato verdadeiro", "Conta história inventada", "Convida para festa", "Pede um favor"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Curiosidade ensina um fato de verdade.",
      },
      {
        pergunta: "2/5 — Qual frase é um FATO?",
        opcoes: ["O sapo pilota avião", "A abelha visita flores", "A pedra canta", "O lápis corre"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Só a abelha visitando flores acontece de verdade.",
      },
      {
        pergunta: "3/5 — O título da curiosidade fica...",
        opcoes: ["No fim", "No meio", "Em cima, bem grande", "Do lado de fora"],
        correta: 2,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "O título abre o texto, lá em cima.",
      },
      {
        pergunta: "4/5 — No texto, o pó da flor cai em outra flor e por isso...",
        opcoes: ["nascem mais flores", "chove", "a abelha dorme", "a folha cai"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "No texto: 'É por isso que nascem mais flores'.",
      },
      {
        pergunta: "5/5 — Antes de escrever, o repórter precisa...",
        opcoes: ["Inventar tudo", "Descobrir o que é verdade", "Desenhar só", "Dormir"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Repórter descobre o fato antes de escrever.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Repórter em casa",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) A criança escolhe um bichinho ou uma planta da casa/rua.",
      "2) A família conta um fato verdadeiro sobre ele.",
      "3) A criança escreve o TÍTULO e o FATO no papel.",
      "4) A criança lê a curiosidade em voz alta para a família.",
    ],
    registro: "📸 Uma foto da curiosidade escrita pela criança.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "🔎 Repórter Iniciante",
  },
};
