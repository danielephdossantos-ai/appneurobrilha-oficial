import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 3 — Trava-Língua
 * -------------------------------------------------------------
 * Foco: reconhecer a ALITERAÇÃO — sons repetidos no início das
 * palavras que deixam o texto "difícil de falar rápido".
 *
 * BNCC: EF01LP09 · EF01LP10 · EF12LP18
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-trava-lingua",
  titulo: "Trava-Língua",
  iconeTrilha: "😝",
  bncc: ["EF01LP09", "EF01LP10", "EF12LP18"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha tenta falar rápido e enrola a língua",
    historia:
      "Brilha quis mostrar pros amigos como fala rápido. Tentou dizer 'O SAPO não SAbe, o SAPO não SoBe' e travou tudo! — Isso é um TRAVA-LÍNGUA! — riu a coelha Nina. — Ele tem sons repetidos que deixam a língua confusa!",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Veja o título. Do que esse texto engraçado vai falar?",
    bloco: {
      titulo: "O Sapo Dentro do Saco",
      capaImagemUrl: sapo,
      pistas: [
        { imagemUrl: sapo, nome: "Um sapo" },
        { imagemUrl: caixa, nome: "Um saco" },
      ],
      pergunta: "Sobre o que esse trava-língua vai falar?",
      hipoteses: [
        { texto: "Um sapo dentro de um saco.", imagemUrl: sapo },
        { texto: "Um elefante voando.", imagemUrl: bola },
        { texto: "Uma escola no espaço.", imagemUrl: estrela },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! As imagens mostram um sapo e um saco — é sobre isso mesmo.",
      feedbackErro: "As pistas são um sapo e um saco. O texto fala dos dois juntos.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras novas antes de treinar a língua:",
    cards: [
      {
        palavra: "trava-língua",
        explicacao: "É um textinho com sons parecidos, repetidos, que fica difícil de falar rápido sem errar.",
        exemplo: "'O rato roeu a roupa do rei de Roma' é um trava-língua famoso.",
        imagemUrl: livro,
      },
      {
        palavra: "som repetido",
        explicacao: "É quando o mesmo som aparece várias vezes seguidas no texto.",
        exemplo: "Em 'sapo' e 'saco', o som 'SA' se repete.",
        imagemUrl: estrela,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler bem devagar primeiro. Depois tente ler mais rápido, sem errar!",
    leitura: {
      titulo: "O Sapo Dentro do Saco",
      imagemUrl: sapo,
      legendaImagem: "Um SAPO dentro de um SACO",
      destacar: ["SAPO", "SACO"],
      paragrafos: [
        "O SAPO dentro do SACO, o SACO com o SAPO dentro.",
        "Quem soltar o SAPO do SACO ganha um sorriso e um abraço!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Quais duas palavras têm o som 'SA' repetido no trava-língua?",
        opcoes: ["Gato e pato", "Sapo e saco", "Bola e caixa"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! SAPO e SACO começam com o mesmo som 'SA'.",
        feedbackErro: "Releia o texto: quais palavras se repetem várias vezes?",
        ondeEstaNoTexto: "O SAPO dentro do SACO, o SACO com o SAPO dentro.",
      },
      {
        pergunta: "O que ganha quem soltar o sapo do saco?",
        opcoes: ["Um doce", "Um sorriso e um abraço", "Uma medalha de ouro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Está escrito no final do texto.",
        feedbackErro: "Releia a última linha do trava-língua.",
        ondeEstaNoTexto: "ganha um sorriso e um abraço!",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos pensar no que aparece nesse trava-língua.",
    perguntas: [
      {
        pergunta: "Quais 'personagens' aparecem no trava-língua?",
        opcoes: ["O sapo e o saco", "O gato e o rato", "A menina e o livro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O sapo e o saco são os elementos da história.",
        feedbackErro: "Releia: quais duas coisas aparecem repetidas no texto?",
      },
      {
        pergunta: "Por que um trava-língua é difícil de falar rápido?",
        opcoes: ["Porque tem sons parecidos repetidos", "Porque é muito comprido", "Porque não tem sentido nenhum"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Os sons parecidos que se repetem confundem a boca.",
        feedbackErro: "Pense no som 'SA' que aparece muitas vezes seguidas — isso confunde a língua.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As linhas se misturaram. Coloque na ordem certa.",
    bloco: {
      instrucao: "Do começo ao fim.",
      itens: [
        { id: "p1", texto: "O SAPO dentro do SACO, o SACO com o SAPO dentro.", imagemUrl: sapo },
        { id: "p2", texto: "Quem soltar o SAPO do SACO ganha um sorriso e um abraço!", imagemUrl: caixa },
      ],
      ordemCerta: ["p1", "p2"],
      feedbackAcerto: "🎉 Perfeito! Você lembrou a ordem certinha.",
      feedbackErro: "A primeira frase apresenta o sapo e o saco. A segunda fala do prêmio.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho esse outro trava-língua bem conhecido.",
    leitura: {
      titulo: "O Pato e o Sapato",
      imagemUrl: pato,
      destacar: ["PATO", "PATA", "SAPATO"],
      paragrafos: [
        "O PATO usa PATA, não usa SAPATO.",
        "Se o PATO usasse SAPATO, seria o pato mais elegante do lago!",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual som se repete bastante nesse trava-língua?",
        opcoes: ["O som 'PA'", "O som 'BI'", "O som 'RO'"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! PATO, PATA e SAPATO começam ou têm o som 'PA'.",
        feedbackErro: "Preste atenção: PATO, PATA, SAPATO — qual pedacinho de som se repete?",
        ondeEstaNoTexto: "O PATO usa PATA, não usa SAPATO.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Junte os Sons Parecidos",
    instrucao: "Arraste cada palavra até o grupo que tem o mesmo som repetido.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Sons que se repetem",
      bloco: {
        instrucao: "Arraste cada palavra até o grupo do mesmo som inicial.",
        itens: [
          { id: "sapo", texto: "SAPO", imagemUrl: sapo, alvoId: "grupoSA" },
          { id: "saco", texto: "SACO", imagemUrl: caixa, alvoId: "grupoSA" },
          { id: "pato", texto: "PATO", imagemUrl: pato, alvoId: "grupoPA" },
          { id: "pata", texto: "PATA", alvoId: "grupoPA" },
        ],
        alvos: [
          { id: "grupoSA", nome: "Som SA", imagemUrl: sapo, descricao: "Palavras que começam com SA" },
          { id: "grupoPA", nome: "Som PA", imagemUrl: pato, descricao: "Palavras que começam com PA" },
        ],
        feedbackAcerto: "🎉 Isso! Você juntou as palavras que começam com o mesmo som.",
        feedbackErro: "Escute o comecinho de cada palavra: SAPO e SACO começam com SA; PATO e PATA começam com PA.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "TRAVA-LÍNGUA é um textinho com sons repetidos, difícil de falar rápido.",
      "Os sons se repetem no COMEÇO das palavras (SAPO, SACO).",
      "Quanto mais a gente treina, mais rápido consegue falar sem errar!",
    ],
    miniDesafio: {
      pergunta: "O que torna um trava-língua difícil de falar?",
      opcoes: ["Ele ter sons parecidos repetidos", "Ele ser muito curto", "Ele não ter nenhuma palavra"],
      correta: 0,
      feedbackAcerto: "🎉 Isso mesmo!",
      feedbackErro: "São os sons parecidos que se repetem que confundem a língua.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um trava-língua?",
        opcoes: ["Um texto com sons repetidos, difícil de falar rápido", "Uma receita de comida", "Um tipo de brinquedo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Trava-língua tem sons parecidos repetidos.",
      },
      {
        pergunta: "2/5 — No trava-língua do sapo, quais palavras se repetem?",
        opcoes: ["Sapo e saco", "Gato e pato", "Flor e sol"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! SAPO e SACO.",
        feedbackErro: "Releia: 'O SAPO dentro do SACO...'.",
      },
      {
        pergunta: "3/5 — Qual som se repete em PATO e PATA?",
        opcoes: ["O som PA", "O som BO", "O som TI"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O som PA se repete.",
        feedbackErro: "Ouça o comecinho das duas palavras: PA-to, PA-ta.",
      },
      {
        pergunta: "4/5 — Pra falar um trava-língua rápido sem errar, é bom...",
        opcoes: ["Treinar repetindo devagar primeiro", "Nunca praticar", "Ler só uma letra por vez"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Treinar aos poucos ajuda muito.",
        feedbackErro: "A gente treina devagar primeiro, depois vai acelerando.",
      },
      {
        pergunta: "5/5 — Trava-língua e parlenda são parecidos porque os dois...",
        opcoes: ["Usam sons e rimas da tradição oral", "São sempre tristes", "Não têm nenhuma palavra"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ambos brincam com o som das palavras.",
        feedbackErro: "Os dois são textos de tradição oral que brincam com o som das palavras.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Desafio do Trava-Língua",
    materiais: ["Nenhum material — só a voz!"],
    passos: [
      "1) Escolha um trava-língua (pode ser o do sapo ou o do pato).",
      "2) Treine devagar, três vezes.",
      "3) Depois tente falar bem rápido, três vezes seguidas, sem errar.",
      "4) Peça pra família tentar também — quem erra menos, ganha um aplauso!",
    ],
    registro: "🗣️ Grave ou fale pra alguém o trava-língua três vezes rápido, sem errar.",
  },

  recompensa: {
    xp: 120,
    moedas: 75,
  },
};
