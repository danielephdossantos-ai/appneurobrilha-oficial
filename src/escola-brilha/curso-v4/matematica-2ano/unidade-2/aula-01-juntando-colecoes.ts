import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import peixe from "@/assets/neuro-treino/objetos/peixe.png";
import estrela from "@/assets/neuro-treino/objetos/estrela.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 2 · Aula 1 — "Juntando Coleções"
 * A Cidade das Adições · BNCC EF02MA05.
 *
 * Motivo → Explora (arrastar/juntar) → Descoberta (juntar = adição) →
 * Explicação → Eu faço (3+2 bananas) → Nós fazemos (peixes) →
 * Você faz (estrelas) → Aplicação (parque) → Revisão + Minijogo
 * (caminhão das frutas reutilizando minijogoColheita) → Quiz.
 */
export const aula01_juntandoColecoes: AulaV4 = {
  slug: "u2-01-juntando-colecoes",
  titulo: "Juntando Coleções",
  iconeTrilha: "🧺",
  bncc: ["EF02MA05"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Um convite da Prefeita!",
    historia:
      "Depois da Feira dos Números, Brilha recebeu um convite da Prefeita da Cidade das Adições! Todos os moradores estão preparando a Festa da Amizade. Dona Coelha pediu ajuda: 'Tenho duas cestas de maçãs, mas preciso saber quantas tenho AO TODO. Vamos JUNTAR!'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Dona Coelha tem 4 maçãs numa cesta e 3 na outra. Toque em cada maçã pra contar todas juntas:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 7,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs Dona Coelha tem ao todo?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Antes eram duas cestas. Agora contamos como se fosse UMA só. O que a gente fez?",
    pista:
      "Colocamos tudo no mesmo lugar e contamos junto.",
    revelacao:
      "Isso! JUNTAMOS. E quando juntamos duas ou mais quantidades, estamos fazendo uma ADIÇÃO. É a mágica da Cidade das Adições!",
  },

  momento04_explicacao: {
    titulo: "Juntar = Adição",
    etapas: [
      {
        texto:
          "Etapa 2 — Duas cestas viram uma. 4 maçãs + 3 maçãs = 7 maçãs.",
        exemplo: "A palavra mágica é JUNTAR.",
        frutasParaNumero: {
          imagemUrl: maca,
          itemPlural: "maçãs",
          grupos: [4, 3],
        },
      },
      {
        texto:
          "Etapa 3 — Toda vez que JUNTAMOS duas quantidades, fazemos uma ADIÇÃO. Escrevemos com o sinal '+' e '='.",
        exemplo: "4 + 3 = 7. Lê-se: 'quatro mais três é igual a sete'.",
      },
      {
        texto:
          "Etapa 4 — Não importa o objeto: frutas, peixes, estrelas... juntar é sempre a mesma ideia.",
        exemplo: "3 peixes + 2 peixes = 5 peixes.",
        frutasParaNumero: {
          imagemUrl: peixe,
          itemPlural: "peixes",
          grupos: [3, 2],
        },
      },
    ],
  },

  // Eu faço — Brilha resolve 3+2 bananas
  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha resolve 3 bananas + 2 bananas pensando em voz alta:",
    passos: [
      "Vejo dois grupos: 3 bananas e 2 bananas.",
      "Junto tudo numa cesta só.",
      "Conto: 1, 2, 3, 4, 5.",
      "Escrevo: 3 + 2 = 5.",
      "Resposta: 5 bananas!",
    ],
    resposta: "3 + 2 = 5",
    visualUrl: banana,
    colecaoVisual: {
      imagemUrl: banana,
      grupos: [3, 2],
      itemPlural: "bananas",
    },
  },

  // Nós fazemos — peixes 4 + 2
  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — Junto! O pescador trouxe 4 peixes num balde e 2 no outro. Toque nos peixes e escolha o total.",
    dica: "Junte os dois grupos e conte tudo: 1, 2, 3, 4, 5, 6.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: peixe, quantidade: 4, rotulo: "Balde 1" },
        { imagemUrl: peixe, quantidade: 2, rotulo: "Balde 2" },
      ],
      pergunta: "Quantos peixes ao todo?",
      opcoes: ["5", "6", "7"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 4 + 2 = 6 peixes. Juntamos os dois baldes.",
      feedbackErro: "Junte tudo e conte: 1,2,3,4,5,6. São 6 peixes.",
    },
  },

  // Você faz — estrelas 5 + 2
  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Sozinho(a) agora! Brilha juntou 5 estrelas de um lado e 2 do outro pra enfeitar a festa.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 5, rotulo: "Grupo 1" },
        { imagemUrl: estrela, quantidade: 2, rotulo: "Grupo 2" },
      ],
      pergunta: "Quantas estrelas ao todo?",
      opcoes: ["6", "7", "8"],
      correta: 1,
      feedbackAcerto: "🎉 Perfeito! 5 + 2 = 7 estrelas.",
      feedbackErro: "Junte os dois grupos: 5 + 2 = 7.",
    },
  },

  // Aplicação — parque 4 + 3 crianças (usa maca só como marcador contável genérico)
  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — No parque havia 4 crianças brincando. Chegaram mais 3 amigas.",
    problema:
      "Quantas crianças estão brincando no parque agora?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: estrela,
      itemPlural: "crianças",
      a: 4,
      b: 3,
      legenda: "4 crianças + 3 amigas = 7 crianças",
    },
  },

  momento09_revisao: {
    pontos: [
      "Juntar duas quantidades = fazer uma ADIÇÃO.",
      "Escrevemos com '+' e '='.",
      "Não importa o objeto — a ideia é sempre JUNTAR.",
      "🚚 Minijogo: Caminhão das Frutas!",
    ],
    miniDesafio: {
      tipo: "minijogoColheita",
      imagemUrl: maca,
      itemPlural: "maçãs",
      alvoInicial: 5,
      chegaramMais: 3,
      duracaoSeg: 90,
      feedbackAcerto:
        "🎉 O caminhão entregou 5 + 3 = 8 maçãs pra festa!",
      feedbackErro:
        "Quase! 5 no caminhão + 3 que chegaram = 8 maçãs.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 2 + 3 = ?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 2, rotulo: "Cesta 1" },
          { imagemUrl: maca, quantidade: 3, rotulo: "Cesta 2" },
        ],
        feedbackAcerto: "🎉 Isso! 2 + 3 = 5.",
        feedbackErro: "Junte tudo: 1,2,3,4,5. Resposta: 5.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 4 + 3 = ?",
        opcoes: ["6", "7", "8"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: peixe, quantidade: 4, rotulo: "Balde" },
          { imagemUrl: peixe, quantidade: 3, rotulo: "Balde" },
        ],
        feedbackAcerto: "🎉 Perfeito! 4 + 3 = 7.",
        feedbackErro: "Conte tudo junto: 4+3 = 7.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 6 + 2 = ?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: estrela, quantidade: 6, rotulo: "Céu 1" },
          { imagemUrl: estrela, quantidade: 2, rotulo: "Céu 2" },
        ],
        feedbackAcerto: "🎉 Boa! 6 + 2 = 8.",
        feedbackErro: "Comece no 6 e conte +2: sete, oito. Fica 8.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — Dona Coelha tinha 5 maçãs e ganhou mais 3. Quantas tem?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 5, rotulo: "Tinha" },
          { imagemUrl: maca, quantidade: 3, rotulo: "Ganhou" },
        ],
        feedbackAcerto: "🎉 Isso! 5 + 3 = 8 maçãs.",
        feedbackErro: "'Ganhou' é adição. 5 + 3 = 8.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Quando JUNTAMOS duas quantidades, estamos fazendo uma...",
        opcoes: ["subtração", "adição", "comparação"],
        correta: 1,
        feedbackAcerto:
          "🎉 Uau! Juntar = ADIÇÃO. Você já é morador(a) da Cidade! 🏆",
        feedbackErro: "Juntar = ADIÇÃO (com sinal '+'). Guarde isso!",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🧺 Duas Coleções em Casa",
    materiais: [
      "Objetos pra contar (feijões, tampinhas, brinquedos)",
      "2 potes ou pratos",
      "Papel e lápis",
    ],
    passos: [
      "1) O adulto separa dois grupos pequenos de objetos (ex.: 4 e 3).",
      "2) A criança conta cada grupo em voz alta.",
      "3) Juntam tudo num pote só e a criança conta o total.",
      "4) A criança escreve a adição no papel: 4 + 3 = 7.",
      "5) Repitam 3 vezes com quantidades diferentes.",
    ],
    registro:
      "📸 Foto dos dois grupos separados e do grupo juntado, com a conta escrita.",
  },

  recompensa: {
    xp: 150,
    moedas: 75,
    medalha: "Morador(a) da Cidade das Adições",
  },
};
