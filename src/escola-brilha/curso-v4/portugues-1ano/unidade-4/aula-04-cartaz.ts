import type { AulaPortuguesV4 } from "../../types";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as patioEscola } from "@/assets/neuro-treino/objetos/patio-escola.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";

/**
 * Aula 4 — O Cartaz da Escola
 * -------------------------------------------------------------
 * Fecha a Unidade 4. A criança aprende que um CARTAZ usa letras
 * GRANDES e uma informação principal bem clara, pra avisar
 * muita gente ao mesmo tempo.
 *
 * BNCC: EF01LP16 · EF01LP17 · EF01LP19 · EF01LP20
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-cartaz",
  titulo: "O Cartaz da Escola",
  iconeTrilha: "📢",
  bncc: ["EF01LP16", "EF01LP17", "EF01LP19", "EF01LP20"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Um aviso gigante no corredor",
    historia:
      "Brilha chegou na escola e viu um papel enorme colado na parede, com letras BEM grandes. Era um CARTAZ! Cartazes têm letras grandes e uma informação principal, pra todo mundo ver de longe e entender rapidinho.",
    imagemUrl: patioEscola,
  },

  momento02_previsao: {
    instrucao: "Olhe esse cartaz da escola. O que você acha que ele avisa?",
    bloco: {
      titulo: "Cartaz da Escola",
      pistas: [
        { imagemUrl: escola, nome: "A escola" },
        { imagemUrl: criancasGrupo, nome: "As crianças" },
      ],
      recado: {
        rotulo: "Cartaz da entrada",
        icone: "📢",
        linhas: ["ATENÇÃO", "NÃO CORRA", "NO CORREDOR"],
        estilo: "cartaz",
      },
      pergunta: "Esse cartaz avisa sobre o quê?",
      hipoteses: [
        { texto: "Que não pode correr no corredor.", imagemUrl: patioEscola },
        { texto: "A hora do recreio.", imagemUrl: mochila },
        { texto: "Uma festa de aniversário.", imagemUrl: criancasGrupo },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! O cartaz avisa em letras grandes: NÃO CORRA NO CORREDOR.",
      feedbackErro:
        "Olhe as palavras grandes do cartaz: 'ATENÇÃO', 'NÃO CORRA', 'NO CORREDOR'. É um aviso de segurança.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras pra entender cartazes.",
    cards: [
      {
        palavra: "cartaz",
        explicacao: "É um aviso grande, com letras bem visíveis, colado num lugar onde muita gente passa.",
        exemplo: "O cartaz da escola avisava sobre a hora do recreio.",
        imagemUrl: quadroAlegre,
      },
      {
        palavra: "aviso",
        explicacao: "É uma informação importante que alguém quer que todo mundo saiba.",
        exemplo: "O aviso dizia pra não correr no corredor.",
        imagemUrl: patioEscola,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler o cartaz da escola juntos.",
    leitura: {
      titulo: "Cartaz da Escola",
      imagemUrl: patioEscola,
      legendaImagem: "O cartaz do corredor",
      destacar: ["cartaz", "letras grandes", "corredor"],
      paragrafos: [
        "A escola colou um CARTAZ na parede do corredor.",
        "As letras eram bem GRANDES, pra todo mundo ler de longe.",
        "O cartaz avisava: 'ATENÇÃO. NÃO CORRA NO CORREDOR.'",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no cartaz se precisar. As respostas estão nele.",
    perguntas: [
      {
        pergunta: "Onde o cartaz foi colado?",
        opcoes: ["Na parede do corredor", "Dentro da mochila", "No quadro de giz"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'colou um CARTAZ na parede do corredor'.",
        feedbackErro: "Procure no texto: 'na parede do...'.",
        ondeEstaNoTexto: "colou um cartaz na parede do corredor.",
      },
      {
        pergunta: "Por que as letras do cartaz são grandes?",
        opcoes: [
          "Pra todo mundo ler de longe",
          "Porque acabou a tinta",
          "Pra enfeitar a parede",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Letras grandes ajudam a ler de LONGE.",
        feedbackErro: "O texto diz: 'pra todo mundo ler de longe'.",
        ondeEstaNoTexto: "pra todo mundo ler de longe.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem colocou o cartaz? Onde ele está?",
    perguntas: [
      {
        pergunta: "Quem colou o cartaz?",
        opcoes: ["A escola", "O Brilha", "Uma criança"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'A escola colou um cartaz'.",
        feedbackErro: "A primeira frase diz quem colou o cartaz.",
      },
      {
        pergunta: "Onde essa história acontece?",
        opcoes: ["No corredor da escola", "No mercado", "Na praça"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! No CORREDOR da escola.",
        feedbackErro: "O cartaz está colado no corredor — é onde a cena acontece.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem o que acontece com o cartaz.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "A escola faz um cartaz com letras grandes.", imagemUrl: quadroAlegre },
        { id: "p2", texto: "O cartaz é colado no corredor.", imagemUrl: patioEscola },
        { id: "p3", texto: "As crianças leem e param de correr.", imagemUrl: criancasGrupo },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você entendeu como funciona um cartaz de aviso.",
      feedbackErro: "Primeiro se FAZ o cartaz, depois se COLA no lugar visível, e por fim as pessoas LEEM e obedecem.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia esse outro cartaz sozinho.",
    leitura: {
      titulo: "Cartaz da Biblioteca",
      imagemUrl: quadroAlegre,
      destacar: ["SILÊNCIO", "biblioteca"],
      paragrafos: [
        "SILÊNCIO. AQUI É BIBLIOTECA.",
        "Esse cartaz fica colado na porta da biblioteca da escola.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que o cartaz pede?",
        opcoes: ["Silêncio", "Para gritar", "Para correr"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'SILÊNCIO' em letras grandes.",
        feedbackErro: "A primeira palavra do cartaz é o pedido principal.",
        ondeEstaNoTexto: "SILÊNCIO. AQUI É BIBLIOTECA.",
      },
      {
        pergunta: "Onde esse cartaz fica colado?",
        opcoes: ["Na porta da biblioteca", "No pátio", "No portão"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! Na porta da BIBLIOTECA.",
        feedbackErro: "O texto diz: 'na porta da biblioteca da escola'.",
        ondeEstaNoTexto: "na porta da biblioteca da escola.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Você escreve o cartaz",
    instrucao:
      "Trace a letra, escreva as palavras ditadas com as sílabas e depois escreva o SEU cartaz com poucas palavras bem grandes.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "A", exemplo: "AVISO", dicaTracado: "Sobe, desce e faz o cintinho no meio." },
          { letra: "S", exemplo: "SILÊNCIO", dicaTracado: "Faz a cobrinha: uma curva pra um lado e outra pro outro." },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "AVISO", silabas: ["A", "VI", "SO"], distratores: ["SA"], dica: "A + VI + SO." },
          { palavra: "CARTAZ", silabas: ["CAR", "TAZ"], distratores: ["TA"], dica: "CAR + TAZ." },
          { palavra: "FILA", silabas: ["FI", "LA"], distratores: ["LO"], dica: "FI + LA." },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Meu cartaz da sala",
        comando: "Escreva um cartaz de aviso pra sua sala ou pra sua casa. Poucas palavras, uma em cada linha.",
        linhas: 3,
        modelo: ["ATENÇÃO", "LAVE AS MÃOS", "ANTES DO LANCHE"],
        checklist: [
          "Usei poucas palavras.",
          "Escrevi em letra MAIÚSCULA.",
          "Qualquer pessoa entende meu aviso de longe.",
        ],
      },
    ],
  },

  momento_minijogo: {
    titulo: "Cartaz ou Não?",
    instrucao: "Marque só as frases que combinam com um cartaz de aviso.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Frases de Cartaz",
      bloco: {
        instrucao: "Toque nas frases que poderiam estar num cartaz de aviso, em letras grandes.",
        pergunta: "Quais frases combinam com um cartaz?",
        opcoes: [
          { id: "a", texto: "SILÊNCIO", imagemUrl: quadroAlegre, correto: true },
          { id: "b", texto: "NÃO CORRA", imagemUrl: patioEscola, correto: true },
          { id: "c", texto: "Era uma vez...", imagemUrl: criancasGrupo, correto: false },
          { id: "d", texto: "Querido diário,", imagemUrl: mochila, correto: false },
        ],
        feedbackAcerto: "🎉 Isso! Cartazes têm avisos curtos e diretos, em letras grandes.",
        feedbackErro: "'Era uma vez' e 'Querido diário' são de histórias e diários, não de cartazes.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "CARTAZ é um aviso com letras GRANDES pra todo mundo ver de longe.",
      "O cartaz traz UMA informação principal, bem clara.",
      "Cartazes ficam em lugares onde muita gente passa.",
      "Nesta unidade aprendemos: lista, bilhete, convite e cartaz — textos do dia a dia!",
    ],
    miniDesafio: {
      pergunta: "Por que o cartaz usa letras grandes?",
      opcoes: ["Pra todo mundo ler de longe", "Porque é mais bonito", "Sem motivo especial"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Letras grandes ajudam a ler de longe.",
      feedbackErro: "O motivo é prático: letras grandes se leem de LONGE.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um cartaz?",
        opcoes: ["Um aviso com letras grandes", "Uma carta secreta", "Uma lista de compras"],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo!",
        feedbackErro: "Cartaz é um aviso com letras grandes, visível de longe.",
      },
      {
        pergunta: "2/5 — Onde a escola colou o primeiro cartaz?",
        opcoes: ["No corredor", "No pátio", "Na sala"],
        correta: 0,
        feedbackAcerto: "🎉 No corredor!",
        feedbackErro: "O texto diz: 'na parede do corredor'.",
      },
      {
        pergunta: "3/5 — O que o cartaz da biblioteca pedia?",
        opcoes: ["Silêncio", "Para gritar", "Para comer"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "O cartaz dizia 'SILÊNCIO'.",
      },
      {
        pergunta: "4/5 — Qual desses textos é do dia a dia que aprendemos nessa unidade?",
        opcoes: ["Lista de compras", "Poema de amor", "Notícia de jornal"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Lista, bilhete, convite e cartaz.",
        feedbackErro: "Nessa unidade vimos lista, bilhete, convite e cartaz.",
      },
      {
        pergunta: "5/5 — Por que as letras do cartaz são grandes?",
        opcoes: ["Pra ler de longe", "Pra gastar mais tinta", "Sem motivo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Letras grandes se leem de longe. Você é um Leitor do Mundo! 🌟",
        feedbackErro: "O motivo é: letras grandes ajudam a ler de LONGE.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Nosso cartaz em casa",
    materiais: ["Papel grande", "Canetinha ou giz de cera"],
    passos: [
      "1) Escolham juntos um aviso pra casa (ex.: 'FECHE A PORTA' ou 'LAVE AS MÃOS').",
      "2) A criança escreve com letras BEM grandes.",
      "3) Colem o cartaz num lugar visível da casa.",
      "4) Conversem: lista, bilhete, convite e cartaz — qual a diferença entre eles?",
    ],
    registro: "📷 Uma foto do cartaz colado em casa.",
  },

  recompensa: {
    xp: 150,
    moedas: 90,
    medalha: "Leitor do Mundo",
  },
};
