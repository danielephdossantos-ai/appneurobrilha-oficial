import type { AulaGeografiaV4 } from "../../types";
import bairro from "@/assets/neuro-treino/objetos/bairro.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import predio from "@/assets/neuro-treino/objetos/predio.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import postoSaude from "@/assets/neuro-treino/objetos/posto-saude.png";
import praca from "@/assets/neuro-treino/objetos/praca.png";
import mercado from "@/assets/neuro-treino/objetos/mercado.png";
import padaria from "@/assets/neuro-treino/objetos/padaria.png";
import biblioteca from "@/assets/neuro-treino/objetos/biblioteca.png";
import pontoOnibus from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Aula 1 · Unidade 3 — Conhecendo Meu Bairro
 * Brilha chega ao Bairro das Descobertas e descobre os lugares mais importantes.
 */
export const aula01: AulaGeografiaV4 = {
  slug: "aula-01-conhecendo-meu-bairro",
  titulo: "Conhecendo Meu Bairro",
  iconeTrilha: "🏘️",
  bncc: ["EF01GE01", "EF01GE03"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Descubra os lugares MAIS IMPORTANTES do bairro!",
    imagemUrl: bairro,
  },

  momento02_narrativa: {
    titulo: "O Bairro das Descobertas perdeu as placas!",
    historia:
      "Brilha chega no bairro e vê muitas construções — mas nenhuma placa. Aurora aparece: — Um explorador conhece os LUGARES do bairro. Vamos descobrir pra que serve cada um?",
    imagemUrl: bairro,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque em cada construção pra descobrir o nome e a função.",
    galeria: [
      { imagemUrl: casa, legenda: "🏠 Casa — onde as famílias moram" },
      { imagemUrl: predio, legenda: "🏢 Prédio — várias famílias em andares" },
      { imagemUrl: escola, legenda: "🏫 Escola — onde a gente estuda" },
      { imagemUrl: postoSaude, legenda: "🏥 Posto de saúde — onde tratam quem está doente" },
      { imagemUrl: praca, legenda: "🌳 Praça — onde a gente brinca e passeia" },
      { imagemUrl: mercado, legenda: "🛒 Mercado — onde compra comida e produtos" },
      { imagemUrl: padaria, legenda: "🍞 Padaria — onde compra pão e bolo" },
      { imagemUrl: biblioteca, legenda: "📚 Biblioteca — onde pega livros pra ler" },
      { imagemUrl: pontoOnibus, legenda: "🚌 Ponto de ônibus — onde a gente espera o ônibus" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Cada lugar tem uma função. Você consegue lembrar qual?",
    pistas: [
      "🍞 Onde compramos PÃO?",
      "🏫 Onde a gente ESTUDA?",
      "🌳 Onde a gente BRINCA ao ar livre?",
      "🏥 Onde a gente vai quando está DOENTE?",
    ],
    revelacao:
      "Um BAIRRO é formado por MUITOS lugares diferentes. Cada um cumpre uma função importante pras pessoas viverem bem juntas.",
  },

  momento05_ensinoExplicito: {
    titulo: "O que é um bairro?",
    etapas: [
      { texto: "BAIRRO é um pedaço da cidade com casas, ruas e vários lugares.", imagemUrl: bairro },
      { texto: "Alguns lugares são pra MORAR (casa, prédio).", imagemUrl: casa },
      { texto: "Outros são pra ESTUDAR (escola) ou pra se CUIDAR (posto de saúde).", imagemUrl: escola },
      { texto: "E tem os lugares pra COMPRAR (mercado, padaria) e pra BRINCAR (praça).", imagemUrl: praca },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha visita 3 lugares no bairro:",
    passos: [
      "— Fui na PADARIA e comprei um pão de queijo 🥐.",
      "— Passei na PRAÇA e brinquei no balanço 🌳.",
      "— Fui na ESCOLA aprender a ler 🏫.",
      "Cada lugar tem uma FUNÇÃO diferente.",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Junto: Brilha quer comprar leite. Aonde ele vai?",
    dica: "LEITE é comida — vende em mercado.",
    quiz: {
      pergunta: "Pra comprar LEITE, Brilha vai ao…",
      opcoes: ["Mercado 🛒", "Posto de saúde 🏥", "Praça 🌳"],
      correta: 0,
      feedbackAcerto: "Isso! MERCADO vende alimentos como leite, arroz e frutas.",
      feedbackErro: "Leite é alimento — a gente compra alimento no MERCADO.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho:",
    quiz: {
      pergunta: "Onde a gente pega LIVROS emprestados?",
      opcoes: ["Padaria 🍞", "Biblioteca 📚", "Ponto de ônibus 🚌"],
      correta: 1,
      feedbackAcerto: "Certo! BIBLIOTECA guarda livros pra gente ler.",
      feedbackErro: "Livro não se compra no ponto de ônibus 😄 — vai na BIBLIOTECA.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Seu joelho ficou doendo depois de cair.",
    problema: "Aonde a sua família te leva?",
    quiz: {
      pergunta: "Você deve ir ao…",
      opcoes: ["Mercado 🛒", "Posto de saúde 🏥", "Padaria 🍞"],
      correta: 1,
      feedbackAcerto: "Certo! No POSTO DE SAÚDE ou hospital cuidam de quem está machucado.",
      feedbackErro: "Machucado precisa de MÉDICO — que trabalha no posto de saúde ou hospital.",
    },
  },

  momento10_minijogo: {
    titulo: "Explorador do Bairro",
    instrucao: "Toque em cada lugar e ouça a função dele.",
    jogo: {
      tipo: "galeriaExploracao",
      bloco: {
        cards: [
          { imagemUrl: escola, titulo: "🏫 Escola", descricao: "Lugar onde a gente aprende a ler, escrever e brincar com amigos." },
          { imagemUrl: praca, titulo: "🌳 Praça", descricao: "Espaço público com árvores, bancos e brinquedos — pra todo mundo usar." },
          { imagemUrl: mercado, titulo: "🛒 Mercado", descricao: "Loja grande onde compramos comida e produtos de limpeza." },
          { imagemUrl: padaria, titulo: "🍞 Padaria", descricao: "Onde compramos pão fresquinho todo dia." },
          { imagemUrl: postoSaude, titulo: "🏥 Posto de saúde", descricao: "Onde médicos e enfermeiros cuidam da gente." },
          { imagemUrl: biblioteca, titulo: "📚 Biblioteca", descricao: "Onde pegamos livros emprestados." },
          { imagemUrl: pontoOnibus, titulo: "🚌 Ponto de ônibus", descricao: "Onde esperamos o ônibus pra viajar pelo bairro." },
          { imagemUrl: predio, titulo: "🏢 Prédio", descricao: "Construção alta com várias moradias em andares." },
        ],
      },
    },
  },

  momento11_quiz: {
    instrucao: "Quiz — 5 perguntas rápidas:",
    perguntas: [
      {
        pergunta: "Onde a gente ESTUDA?",
        opcoes: ["Mercado", "Escola", "Praça"],
        correta: 1,
        feedbackAcerto: "Certo! Escola = estudar.",
        feedbackErro: "Estudar é na ESCOLA.",
      },
      {
        pergunta: "Onde a gente compra PÃO?",
        opcoes: ["Padaria", "Biblioteca", "Ponto de ônibus"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Pão vem da PADARIA.",
      },
      {
        pergunta: "Onde a gente BRINCA ao ar livre?",
        opcoes: ["Prédio", "Praça", "Mercado"],
        correta: 1,
        feedbackAcerto: "Perfeito!",
        feedbackErro: "Brincar ao ar livre é na PRAÇA.",
      },
      {
        pergunta: "Onde CURA quem está doente?",
        opcoes: ["Posto de saúde", "Padaria", "Escola"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Quem está doente vai ao POSTO DE SAÚDE ou hospital.",
      },
      {
        pergunta: "Onde MUITAS famílias moram juntas em andares?",
        opcoes: ["Casa", "Prédio", "Praça"],
        correta: 1,
        feedbackAcerto: "Certo! Prédio tem vários andares.",
        feedbackErro: "Casa geralmente é uma família; PRÉDIO tem muitas em andares.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🚶 Passeio pelo bairro",
    materiais: ["Um adulto pra acompanhar"],
    passos: [
      "Durante um passeio, aponte 3 lugares importantes do bairro.",
      "Fale em voz alta a função de cada um.",
      "Escolha o seu lugar preferido e diga por quê.",
    ],
    registro: "Conte na próxima aula qual foi o lugar mais legal que você viu.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é um BAIRRO?",
        opcoes: [
          "Um pedaço da cidade com casas, ruas e vários lugares",
          "Só a minha casa",
        ],
        correta: 0,
        feedbackAcerto: "Perfeito!",
        feedbackErro: "Bairro é bem mais que a sua casa — é um pedaço inteiro da cidade.",
      },
      {
        pergunta: "Cada lugar do bairro tem uma…",
        opcoes: ["Função diferente", "Mesma função"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Cada lugar serve pra uma coisa DIFERENTE.",
      },
    ],
  },

  momento14_continuacao: {
    texto:
      "🌟 Bairro reconhecido! Próxima aventura: descobrir QUEM TRABALHA aqui.",
    imagemUrl: bairro,
  },

  recompensa: { xp: 120, moedas: 50, medalha: "🏘️ Conhecedor do Bairro" },
};
