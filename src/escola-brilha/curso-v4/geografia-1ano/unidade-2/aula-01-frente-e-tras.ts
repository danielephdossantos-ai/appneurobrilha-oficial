import type { AulaGeografiaV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import bussola from "@/assets/neuro-treino/objetos/bussola.png";
import parque from "@/assets/neuro-treino/objetos/parque.png";
import setaCima from "@/assets/neuro-treino/objetos/seta-cima.png";
import setaBaixo from "@/assets/neuro-treino/objetos/seta-baixo.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";

/**
 * Aula 1 · Unidade 2 — Frente e Atrás
 * Brilha abre a bússola mágica e aprende a olhar pra FRENTE e pra ATRÁS.
 */
export const aula01: AulaGeografiaV4 = {
  slug: "aula-01-frente-e-tras",
  titulo: "Frente e Atrás",
  iconeTrilha: "↕️",
  bncc: ["EF01GE05"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Descubra o que está na sua FRENTE e o que está ATRÁS de você!",
    imagemUrl: bussola,
  },

  momento02_narrativa: {
    titulo: "A bússola mágica do Brilha",
    historia:
      "Brilha abriu a mochila de explorador e encontrou uma BÚSSOLA que pisca. — Pra achar o caminho, você precisa saber onde é FRENTE e onde é ATRÁS. Vamos treinar?",
    imagemUrl: bussola,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque em cada carta e ouça o que significa cada palavra.",
    galeria: [
      { imagemUrl: setaCima, legenda: "FRENTE — pra onde eu olho" },
      { imagemUrl: setaBaixo, legenda: "ATRÁS — o que ficou pra trás quando ando" },
      { imagemUrl: brilha, legenda: "Brilha olhando pra frente" },
      { imagemUrl: parque, legenda: "O parque está NA FRENTE do Brilha" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Como eu sei o que está na minha FRENTE?",
    pistas: [
      "É pra onde os meus OLHOS olham.",
      "É pra onde os meus PÉS apontam quando eu ando.",
      "O que fica ATRÁS eu só vejo se eu virar a cabeça.",
    ],
    revelacao:
      "FRENTE é pra onde eu olho e ando. ATRÁS é o que fica nas minhas costas.",
  },

  momento05_ensinoExplicito: {
    titulo: "Frente e Atrás",
    etapas: [
      { texto: "FRENTE: o lado do rosto, dos olhos e do peito.", imagemUrl: setaCima },
      { texto: "ATRÁS: o lado das costas, o que eu não vejo sem virar.", imagemUrl: setaBaixo },
      { texto: "Quando eu ando, vou pra FRENTE. Quando eu recuo, vou pra ATRÁS.", imagemUrl: brilha },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha mostra: ele está no meio do parque.",
    passos: [
      "— NA MINHA FRENTE eu vejo a ÁRVORE grande.",
      "— ATRÁS de mim está a minha CASA.",
      "— Se eu andar pra frente, chego mais perto da árvore.",
      "— Se eu andar pra trás, volto pra casa.",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Junto com Brilha: ajude ele a chegar na estrela ANDANDO PRA FRENTE.",
    dica: "Toque em ⬆️ pra ir pra FRENTE. Toque em ⬇️ pra voltar ATRÁS.",
    orientacao: {
      instrucao: "Ande PRA FRENTE (⬆️) até tocar na estrela mágica!",
      personagemUrl: brilha,
      cenarioUrl: parque,
      posicaoInicial: { linha: 2, coluna: 1 },
      alvo: { linha: 0, coluna: 1, imagemUrl: estrela, nome: "Estrela" },
      feedbackAcerto: "Isso! Você andou PRA FRENTE 2 vezes e chegou na estrela.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho — leia com atenção:",
    quiz: {
      pergunta: "Brilha está andando na rua. Se ele olha e vê a padaria, a padaria está…",
      opcoes: ["Na FRENTE do Brilha", "ATRÁS do Brilha"],
      correta: 0,
      feedbackAcerto:
        "Muito bem! O que os olhos veem quando a gente anda está NA FRENTE.",
      feedbackErro:
        "Pense: se Brilha OLHA e vê a padaria, ela está no lado dos olhos — ou seja, NA FRENTE.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você está na fila da escola atrás da professora.",
    problema: "Onde está a professora em relação a você?",
    quiz: {
      pergunta: "A professora está…",
      opcoes: ["NA FRENTE de mim", "ATRÁS de mim"],
      correta: 0,
      feedbackAcerto:
        "Certo! Quando alguém está na FILA antes de você, essa pessoa está NA SUA FRENTE.",
      feedbackErro:
        "Se você está ATRÁS da professora, então ela está NA FRENTE de você.",
    },
  },

  momento10_minijogo: {
    titulo: "Onde Está?",
    instrucao: "Toque em cada cena para descobrir o que está na frente e o que está atrás.",
    jogo: {
      tipo: "galeriaExploracao",
      bloco: {
        cards: [
          { imagemUrl: casa, titulo: "A casa", descricao: "Se você sai pela porta olhando pra rua, a casa fica ATRÁS de você." },
          { imagemUrl: escola, titulo: "A escola", descricao: "Quando você anda em direção à escola, ela está NA FRENTE." },
          { imagemUrl: arvore, titulo: "A árvore", descricao: "Se você passou pela árvore, agora ela está ATRÁS." },
          { imagemUrl: estrela, titulo: "A estrela do parque", descricao: "Brilha andou pra frente e a estrela ficou na frente dele." },
        ],
      },
    },
  },

  momento11_quiz: {
    instrucao: "Vamos ver o que você aprendeu:",
    perguntas: [
      {
        pergunta: "O que está na sua FRENTE?",
        opcoes: ["O que meus olhos veem", "O que está nas minhas costas"],
        correta: 0,
        feedbackAcerto: "Isso! FRENTE = lado dos olhos.",
        feedbackErro: "FRENTE é o lado dos OLHOS — não das costas.",
      },
      {
        pergunta: "Quando eu ANDO, para onde eu vou?",
        opcoes: ["Pra frente", "Pra trás"],
        correta: 0,
        feedbackAcerto: "Correto! Andar normalmente é ir PRA FRENTE.",
        feedbackErro: "Andar pra trás é recuar — andar normal é ir PRA FRENTE.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🚶 Caça ao Frente e Atrás",
    materiais: ["Só você e um adulto"],
    passos: [
      "Fique de pé numa sala. Pergunte pra um adulto: 'O que tem na minha FRENTE?'",
      "Diga 3 coisas que você VÊ à sua frente.",
      "Depois vire de costas. Diga 2 coisas que agora estão ATRÁS de você.",
    ],
    registro: "Conte na próxima aula qual foi a coisa mais engraçada que estava atrás de você.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Brilha olha pra árvore. A árvore está…",
        opcoes: ["Na frente do Brilha", "Atrás do Brilha"],
        correta: 0,
        feedbackAcerto: "Certo! Se ele OLHA, está na frente.",
        feedbackErro: "Lembre: o que os olhos veem está na FRENTE.",
      },
      {
        pergunta: "Se eu ando pra FRENTE, o que acontece com a minha casa que ficou pra trás?",
        opcoes: ["Ela fica ATRÁS de mim", "Ela vem junto"],
        correta: 0,
        feedbackAcerto: "Isso! Quando ando pra frente, o que passei fica ATRÁS.",
        feedbackErro: "A casa não anda com você — ela fica ATRÁS quando você segue em frente.",
      },
    ],
  },

  momento14_continuacao: {
    texto:
      "⭐ Você desbloqueou a FRENTE e o ATRÁS! Na próxima aula: DIREITA e ESQUERDA.",
    imagemUrl: bussola,
  },

  recompensa: { xp: 100, moedas: 40, medalha: "🧭 Explorador da Frente" },
};
