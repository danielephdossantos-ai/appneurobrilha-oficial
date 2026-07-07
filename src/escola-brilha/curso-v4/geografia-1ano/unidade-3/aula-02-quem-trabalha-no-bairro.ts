import type { AulaGeografiaV4 } from "../../types";
import professora from "@/assets/neuro-treino/objetos/professora.png";
import cozinheira from "@/assets/neuro-treino/objetos/cozinheira.png";
import funcionarioLimpeza from "@/assets/neuro-treino/objetos/funcionario-limpeza.png";
import bibliotecario from "@/assets/neuro-treino/objetos/bibliotecario.png";
import heroi from "@/assets/neuro-treino/objetos/heroi.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import padaria from "@/assets/neuro-treino/objetos/padaria.png";
import postoSaude from "@/assets/neuro-treino/objetos/posto-saude.png";
import biblioteca from "@/assets/neuro-treino/objetos/biblioteca.png";
import pontoOnibus from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import bairro from "@/assets/neuro-treino/objetos/bairro.png";

/**
 * Aula 2 · Unidade 3 — Quem Trabalha no Bairro?
 * A criança conhece profissões e o local onde cada uma trabalha.
 */
export const aula02: AulaGeografiaV4 = {
  slug: "aula-02-quem-trabalha-no-bairro",
  titulo: "Quem Trabalha no Bairro?",
  iconeTrilha: "👷",
  bncc: ["EF01GE03", "EF01GE04"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Descubra QUEM faz o bairro funcionar!",
    imagemUrl: heroi,
  },

  momento02_narrativa: {
    titulo: "Os moradores voltam ao trabalho",
    historia:
      "Brilha percebe que sem as pessoas trabalhando, o bairro não funciona. — Cada profissional tem um lugar e uma função. Vamos conhecer quem cuida do nosso bairro?",
    imagemUrl: bairro,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque em cada profissional pra saber o que faz e onde trabalha.",
    galeria: [
      { imagemUrl: professora, legenda: "👩‍🏫 Professora — trabalha na ESCOLA, ensina crianças" },
      { imagemUrl: heroi, legenda: "👨‍⚕️ Médico — trabalha no POSTO DE SAÚDE, cura doentes" },
      { imagemUrl: cozinheira, legenda: "👨‍🍳 Padeiro / cozinheira — trabalha na PADARIA, faz comida" },
      { imagemUrl: bibliotecario, legenda: "📚 Bibliotecário — trabalha na BIBLIOTECA, cuida dos livros" },
      { imagemUrl: funcionarioLimpeza, legenda: "🧹 Gari — trabalha na RUA, mantém tudo limpo" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Cada profissão tem seu LUGAR de trabalho. Consegue lembrar?",
    pistas: [
      "👩‍🏫 A professora dá aula na… ESCOLA.",
      "👨‍⚕️ O médico atende no… POSTO DE SAÚDE.",
      "🧹 O gari trabalha na… RUA.",
    ],
    revelacao:
      "Muitas pessoas trabalham TODO DIA pra cuidar do bairro e ajudar a comunidade. Cada uma no seu lugar.",
  },

  momento05_ensinoExplicito: {
    titulo: "Profissão + Local de trabalho",
    etapas: [
      { texto: "PROFISSÃO é o trabalho que a pessoa escolheu.", imagemUrl: heroi },
      { texto: "Cada profissão trabalha num LUGAR específico.", imagemUrl: escola },
      { texto: "Sem os profissionais, o bairro não teria pão, aula, remédio nem limpeza.", imagemUrl: funcionarioLimpeza },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha faz combinações:",
    passos: [
      "— Professora → trabalha na ESCOLA.",
      "— Padeiro → trabalha na PADARIA.",
      "— Médico → trabalha no POSTO DE SAÚDE.",
      "— Bibliotecário → trabalha na BIBLIOTECA.",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Junto: um livro caiu no chão da biblioteca. Quem vai colocar de volta?",
    dica: "Quem cuida dos LIVROS?",
    quiz: {
      pergunta: "Quem cuida da biblioteca?",
      opcoes: ["Bibliotecário 📚", "Padeiro 🍞", "Gari 🧹"],
      correta: 0,
      feedbackAcerto: "Isso! BIBLIOTECÁRIO cuida dos livros.",
      feedbackErro: "Livros são cuidados pelo BIBLIOTECÁRIO.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho:",
    quiz: {
      pergunta: "Se você está com febre, quem cuida de você no posto de saúde?",
      opcoes: ["Motorista 🚌", "Médico 👨‍⚕️", "Padeiro 🍞"],
      correta: 1,
      feedbackAcerto: "Certo! MÉDICO cuida da saúde.",
      feedbackErro: "Quem cuida de doente é o MÉDICO.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Sua família tem uma profissão.",
    problema: "Qual profissão trabalha na sua família (pai, mãe, tio, avó)?",
    quiz: {
      pergunta: "Toda profissão é importante?",
      opcoes: ["Sim — cada uma ajuda a comunidade", "Não, só algumas"],
      correta: 0,
      feedbackAcerto: "Isso! TODA profissão honesta é importante.",
      feedbackErro: "Toda profissão que ajuda os outros é importante — sem exceção.",
    },
  },

  momento10_minijogo: {
    titulo: "Quem Trabalha Aqui?",
    instrucao: "Arraste cada profissional para o LOCAL DE TRABALHO certo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      bloco: {
        instrucao: "Arraste cada profissão pro lugar certo.",
        itens: [
          { id: "prof", texto: "Professora", imagemUrl: professora, alvoId: "escola" },
          { id: "medico", texto: "Médico", imagemUrl: heroi, alvoId: "saude" },
          { id: "padeiro", texto: "Padeiro", imagemUrl: cozinheira, alvoId: "padaria" },
          { id: "biblio", texto: "Bibliotecário", imagemUrl: bibliotecario, alvoId: "biblio" },
        ],
        alvos: [
          { id: "escola", nome: "Escola 🏫", imagemUrl: escola },
          { id: "saude", nome: "Posto de saúde 🏥", imagemUrl: postoSaude },
          { id: "padaria", nome: "Padaria 🍞", imagemUrl: padaria },
          { id: "biblio", nome: "Biblioteca 📚", imagemUrl: biblioteca },
        ],
        feedbackAcerto: "Todo mundo no lugar certo! O bairro pode funcionar!",
        feedbackErro: "Pense: onde essa pessoa costuma trabalhar?",
      },
    },
  },

  momento11_quiz: {
    instrucao: "Quiz — profissões:",
    perguntas: [
      {
        pergunta: "Quem dá aula pra você?",
        opcoes: ["Professora", "Gari"],
        correta: 0,
        feedbackAcerto: "Certo!",
        feedbackErro: "Quem ensina é a PROFESSORA.",
      },
      {
        pergunta: "Quem MANTÉM A RUA LIMPA?",
        opcoes: ["Padeiro", "Gari"],
        correta: 1,
        feedbackAcerto: "Isso!",
        feedbackErro: "Quem varre e limpa a rua é o GARI.",
      },
      {
        pergunta: "Quem dirige o ÔNIBUS que passa no bairro?",
        opcoes: ["Motorista 🚌", "Médico"],
        correta: 0,
        feedbackAcerto: "Certo!",
        feedbackErro: "Ônibus é dirigido pelo MOTORISTA.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "💼 Profissões na família",
    materiais: ["Conversar com adultos da casa"],
    passos: [
      "Pergunte qual é a PROFISSÃO das pessoas da sua casa.",
      "Descubra ONDE cada uma trabalha.",
      "Escolha uma profissão que você acha interessante.",
    ],
    registro: "Conte qual profissão da sua família você gostaria de conhecer melhor.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Toda profissão ajuda…",
        opcoes: ["Só a família dela", "A comunidade inteira"],
        correta: 1,
        feedbackAcerto: "Isso!",
        feedbackErro: "Profissões ajudam a COMUNIDADE INTEIRA.",
      },
      {
        pergunta: "Padeiro trabalha na…",
        opcoes: ["Padaria", "Escola"],
        correta: 0,
        feedbackAcerto: "Certo!",
        feedbackErro: "PADEIRO = PADARIA.",
      },
    ],
  },

  momento14_continuacao: {
    texto:
      "⭐ Você conheceu os trabalhadores do bairro! Próxima: aprender a CUIDAR dos espaços de todos.",
    imagemUrl: heroi,
  },

  recompensa: { xp: 120, moedas: 50, medalha: "👷 Amigo dos Trabalhadores" },
};
