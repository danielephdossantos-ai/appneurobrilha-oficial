import type { AulaGeografiaV4 } from "../../types";
import praca from "@/assets/neuro-treino/objetos/praca.png";
import lixeira from "@/assets/neuro-treino/objetos/lixeira.png";
import lixeiraRec from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import jardim from "@/assets/neuro-treino/objetos/jardim.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import funcionarioLimpeza from "@/assets/neuro-treino/objetos/funcionario-limpeza.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import criancasGrupo from "@/assets/neuro-treino/objetos/criancas-grupo.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import garrafa from "@/assets/neuro-treino/objetos/garrafa.png";
import lata from "@/assets/neuro-treino/objetos/lata.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";

/**
 * Aula 3 · Unidade 3 — Cuidando dos Espaços Públicos
 * A criança aprende que a praça é de TODOS e precisa ser cuidada.
 */
export const aula03: AulaGeografiaV4 = {
  slug: "aula-03-cuidando-dos-espacos-publicos",
  titulo: "Cuidando dos Espaços Públicos",
  iconeTrilha: "♻️",
  bncc: ["EF01GE03"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Ajude Brilha a deixar a PRAÇA linda de novo!",
    imagemUrl: praca,
  },

  momento02_narrativa: {
    titulo: "A praça sofreu!",
    historia:
      "Brilha chega na praça e leva um susto: LIXO por todo lado, brinquedos quebrados, árvores tristes. — Precisamos ajudar os moradores. A praça é de TODO MUNDO.",
    imagemUrl: praca,
  },

  momento03_exploracaoVisual: {
    instrucao: "Compare os dois lados — praça SUJA × praça CUIDADA.",
    comparador: {
      instrucao: "Toque em cada lado e veja a diferença:",
      esquerda: {
        titulo: "❌ Praça descuidada",
        imagemUrl: praca,
        caracteristicas: [
          "Lixo espalhado no chão",
          "Brinquedos quebrados",
          "Árvores tristes",
          "Ninguém quer ficar",
        ],
      },
      direita: {
        titulo: "✅ Praça cuidada",
        imagemUrl: jardim,
        caracteristicas: [
          "Chão limpinho",
          "Brinquedos inteiros",
          "Árvores saudáveis",
          "Crianças brincando felizes",
        ],
      },
      desafio: {
        pergunta: "Em qual praça você preferiria brincar?",
        opcoes: ["Na suja", "Na cuidada"],
        correta: 1,
        feedbackAcerto: "Óbvio! Praça cuidada é gostosa pra todos.",
        feedbackErro: "Ninguém quer brincar num lugar sujo, né?",
      },
    },
  },

  momento04_observacao: {
    perguntaGuia: "De quem é a praça?",
    pistas: [
      "A praça não pertence a UMA pessoa só.",
      "Ela é PÚBLICA — de todo mundo do bairro.",
      "Quando alguém suja, TODOS perdem o lugar bonito.",
    ],
    revelacao:
      "ESPAÇOS PÚBLICOS pertencem a TODAS as pessoas. Cuidar é responsabilidade de cada um.",
  },

  momento05_ensinoExplicito: {
    titulo: "Como cuidar do que é de todos",
    etapas: [
      { texto: "Jogue LIXO na lixeira — nunca no chão.", imagemUrl: lixeira },
      { texto: "Separe RECICLÁVEIS na lixeira certa.", imagemUrl: lixeiraRec },
      { texto: "Não quebre BRINQUEDOS da praça — outros vão querer brincar.", imagemUrl: praca },
      { texto: "Cuide das ÁRVORES e das plantas.", imagemUrl: arvore },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha mostra atitudes CORRETAS:",
    passos: [
      "— Comeu banana? A casca vai na LIXEIRA 🍌.",
      "— Viu papel no chão? Recolho e jogo fora 📄.",
      "— Vi uma flor bonita? Deixo lá — pra todo mundo ver 🌸.",
      "— Achei o gari trabalhando? Digo obrigado 🙏.",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Junto: você acabou de tomar suco. A caixinha vazia vai onde?",
    dica: "Caixinha é RECICLÁVEL.",
    quiz: {
      pergunta: "A caixinha vazia vai…",
      opcoes: ["No chão 🚫", "Na lixeira ♻️"],
      correta: 1,
      feedbackAcerto: "Certo! Lixo vai SEMPRE na lixeira — melhor ainda se for reciclável.",
      feedbackErro: "Lixo NUNCA vai no chão — sempre na lixeira.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho:",
    quiz: {
      pergunta: "Você vê uma criança arrancando flores da praça. O que é MAIS correto?",
      opcoes: [
        "Arrancar também",
        "Deixar as flores lá — são de todos",
      ],
      correta: 1,
      feedbackAcerto: "Isso! Flores da praça são pra TODO MUNDO admirar.",
      feedbackErro: "Se arrancarmos, ninguém mais vê a flor. Ela é de todos.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você está na praça com sua família.",
    problema: "Terminou de tomar refrigerante e viu que a lixeira está a 5 passos.",
    quiz: {
      pergunta: "O que você faz?",
      opcoes: ["Deixa a lata no banco", "Anda até a lixeira e joga"],
      correta: 1,
      feedbackAcerto: "Perfeito! 5 passos é PERTO — vale a pena cuidar do bairro.",
      feedbackErro: "Se a lixeira está PERTO, vale a pena caminhar até ela.",
    },
  },

  momento10_minijogo: {
    titulo: "Missão Limpeza",
    instrucao: "Arraste cada tipo de lixo para a lixeira correta.",
    jogo: {
      tipo: "arrastarParaAlvo",
      bloco: {
        instrucao: "🍌 Orgânico = lixeira comum. 📦 Reciclável = lixeira de reciclagem.",
        itens: [
          { id: "papel", texto: "Papel", imagemUrl: papel, alvoId: "rec" },
          { id: "garrafa", texto: "Garrafa", imagemUrl: garrafa, alvoId: "rec" },
          { id: "lata", texto: "Lata", imagemUrl: lata, alvoId: "rec" },
          { id: "casca", texto: "Casca de banana", imagemUrl: banana, alvoId: "org" },
        ],
        alvos: [
          { id: "rec", texto: "Reciclagem ♻️", imagemUrl: lixeiraRec },
          { id: "org", texto: "Lixeira comum 🗑️", imagemUrl: lixeira },
        ],
        feedbackAcerto: "🎉 Praça limpa! O bairro agradece.",
        feedbackErro: "Quase! Papel/garrafa/lata = reciclagem. Casca = comum.",
      },
    },
  },

  momento11_quiz: {
    instrucao: "Quiz — cuidar do bairro:",
    perguntas: [
      {
        pergunta: "A praça é de QUEM?",
        opcoes: ["De uma pessoa só", "De todo mundo do bairro"],
        correta: 1,
        feedbackAcerto: "Certo!",
        feedbackErro: "Espaço PÚBLICO = de TODO MUNDO.",
      },
      {
        pergunta: "Lixo no chão…",
        opcoes: ["Faz mal ao bairro", "Faz bem"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Lixo no chão SUJA e ATRAI bichos ruins — faz mal.",
      },
      {
        pergunta: "Quem cuida da praça?",
        opcoes: ["Só o gari", "Todos nós — junto com o gari"],
        correta: 1,
        feedbackAcerto: "Perfeito!",
        feedbackErro: "O gari ajuda MUITO — mas TODOS temos que cuidar também.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🌳 Cuidando da minha rua",
    materiais: ["Nenhum — só olhar em volta"],
    passos: [
      "Observe a sua rua ou o seu quarteirão.",
      "Aponte uma atitude BOA que alguém fez pelo bairro.",
      "Pense em uma atitude sua que ajude a cuidar do bairro esta semana.",
    ],
    registro: "Conte qual foi a sua atitude de cuidado.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "ESPAÇO PÚBLICO significa que…",
        opcoes: ["É de todo mundo", "É de um dono só"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Público = de TODOS.",
      },
      {
        pergunta: "Onde vai a casca de banana?",
        opcoes: ["No chão", "Na lixeira"],
        correta: 1,
        feedbackAcerto: "Certo!",
        feedbackErro: "Lixo SEMPRE vai na lixeira.",
      },
    ],
  },

  momento14_continuacao: {
    texto: "⭐ Praça restaurada! Próxima aventura: como as pessoas se DESLOCAM pelo bairro.",
    imagemUrl: jardim,
  },

  recompensa: { xp: 130, moedas: 55, medalha: "♻️ Guardião da Praça" },
};

// mantém imports usados só em legendas visuais
void flor; void funcionarioLimpeza; void criancasGrupo;
