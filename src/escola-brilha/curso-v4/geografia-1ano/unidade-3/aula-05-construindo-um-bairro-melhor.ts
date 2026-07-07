import type { AulaGeografiaV4 } from "../../types";
import bairro from "@/assets/neuro-treino/objetos/bairro.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import predio from "@/assets/neuro-treino/objetos/predio.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import praca from "@/assets/neuro-treino/objetos/praca.png";
import mercado from "@/assets/neuro-treino/objetos/mercado.png";
import padaria from "@/assets/neuro-treino/objetos/padaria.png";
import postoSaude from "@/assets/neuro-treino/objetos/posto-saude.png";
import biblioteca from "@/assets/neuro-treino/objetos/biblioteca.png";
import pontoOnibus from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import jardim from "@/assets/neuro-treino/objetos/jardim.png";
import bicicleta from "@/assets/neuro-treino/objetos/bicicleta-moderna.png";
import professora from "@/assets/neuro-treino/objetos/professora.png";
import heroi from "@/assets/neuro-treino/objetos/heroi.png";
import cozinheira from "@/assets/neuro-treino/objetos/cozinheira.png";
import funcionarioLimpeza from "@/assets/neuro-treino/objetos/funcionario-limpeza.png";
import lixeira from "@/assets/neuro-treino/objetos/lixeira.png";
import lixeiraRec from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import mapaPercurso from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";

/**
 * Aula 5 · Unidade 3 — Construindo um Bairro Melhor
 * Grande revisão + projeto Meu Bairro Ideal.
 */
export const aula05: AulaGeografiaV4 = {
  slug: "aula-05-construindo-um-bairro-melhor",
  titulo: "Construindo um Bairro Melhor",
  iconeTrilha: "🏗️",
  bncc: ["EF01GE01", "EF01GE03", "EF01GE04"],
  duracaoMin: 20,

  momento01_missao: {
    texto: "Organize o Bairro das Descobertas COMPLETO!",
    imagemUrl: bairro,
  },

  momento02_narrativa: {
    titulo: "Missão final da Unidade 3",
    historia:
      "Aurora aparece: — Brilha, você já conhece os lugares, as pessoas, o cuidado e o trânsito. Agora é hora de MONTAR um bairro do jeito que você acha melhor!",
    imagemUrl: mapaPercurso,
  },

  momento03_exploracaoVisual: {
    instrucao: "Revise TUDO que aprendeu antes do projeto final:",
    galeria: [
      { imagemUrl: casa, legenda: "🏠 Moradia — casa/prédio" },
      { imagemUrl: escola, legenda: "🏫 Estudar — escola" },
      { imagemUrl: postoSaude, legenda: "🏥 Saúde — posto de saúde" },
      { imagemUrl: mercado, legenda: "🛒 Comprar — mercado" },
      { imagemUrl: padaria, legenda: "🍞 Pão — padaria" },
      { imagemUrl: praca, legenda: "🌳 Brincar — praça" },
      { imagemUrl: biblioteca, legenda: "📚 Ler — biblioteca" },
      { imagemUrl: pontoOnibus, legenda: "🚌 Transporte — ponto de ônibus" },
      { imagemUrl: professora, legenda: "👩‍🏫 Ensinar — professora" },
      { imagemUrl: heroi, legenda: "👨‍⚕️ Curar — médico" },
      { imagemUrl: lixeiraRec, legenda: "♻️ Cuidar — reciclagem" },
      { imagemUrl: bicicleta, legenda: "🚲 Mover-se — bicicleta" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Como se organiza um bairro BOM?",
    pistas: [
      "Tem MORADIA pra todos.",
      "Tem SERVIÇOS (escola, saúde, mercado) perto de casa.",
      "Tem ESPAÇOS PÚBLICOS pra brincar.",
      "Tem TRANSPORTE pra chegar aos lugares.",
      "TODO MUNDO cuida.",
    ],
    revelacao:
      "Um bairro bom tem LUGARES pra viver, ESTUDAR, CURAR, COMPRAR, BRINCAR — e pessoas cuidando de tudo isso.",
  },

  momento05_ensinoExplicito: {
    titulo: "Os 5 elementos do bairro ideal",
    etapas: [
      { texto: "1️⃣ MORADIAS: casas e prédios pra as famílias.", imagemUrl: casa },
      { texto: "2️⃣ SERVIÇOS: escola, saúde, mercado, padaria.", imagemUrl: escola },
      { texto: "3️⃣ ESPAÇOS PÚBLICOS: praças, jardins, calçadas.", imagemUrl: jardim },
      { texto: "4️⃣ TRANSPORTES: pontos de ônibus, ciclovia.", imagemUrl: pontoOnibus },
      { texto: "5️⃣ CUIDADO: lixeiras, gari, atitude de todos.", imagemUrl: funcionarioLimpeza },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha monta o bairro dele:",
    passos: [
      "— Coloco umas CASAS aqui.",
      "— Perto delas, uma ESCOLA e uma PRAÇA.",
      "— Um POSTO DE SAÚDE em outro canto.",
      "— MERCADO e PADARIA no meio, pra ser fácil chegar.",
      "— LIXEIRAS de reciclagem espalhadas.",
      "Pronto — meu bairro tem tudo!",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Junto — Brilha vai à padaria e depois à praça.",
    dica: "Combine direções para chegar nos dois lugares.",
    orientacao: {
      instrucao: "Vá até a estrela (mercadinho do bairro).",
      personagemUrl: brilha,
      cenarioUrl: bairro,
      posicaoInicial: { linha: 2, coluna: 0 },
      alvo: { linha: 0, coluna: 2, imagemUrl: estrela, nome: "Mercadinho" },
      feedbackAcerto: "Chegou! Você já sabe se mover pelo bairro.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Complete: qual desses NÃO deve faltar num bairro?",
    quiz: {
      pergunta: "Qual desses um bairro PRECISA ter?",
      opcoes: [
        "Só casas, sem escola nem mercado",
        "Casas + escola + saúde + mercado + praça",
      ],
      correta: 1,
      feedbackAcerto: "Isso! Um bairro bom equilibra tudo.",
      feedbackErro: "Só casas não basta — precisa de escola, saúde e outros serviços.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você olha o seu bairro real.",
    problema: "Falta algum desses no seu bairro?",
    quiz: {
      pergunta: "Se seu bairro NÃO tem um serviço, o que a gente faz?",
      opcoes: [
        "Vai num bairro vizinho que tem",
        "Fica sem",
      ],
      correta: 0,
      feedbackAcerto: "Certo! Bairros se ajudam — a gente vai onde o serviço existe.",
      feedbackErro: "A gente vai num bairro perto que tenha esse serviço.",
    },
  },

  momento10_minijogo: {
    titulo: "Meu Bairro Ideal 🏘️",
    instrucao: "Arraste cada elemento pro lugar do bairro. Monte o bairro que VOCÊ acha melhor.",
    jogo: {
      tipo: "arrastarParaAlvo",
      bloco: {
        instrucao: "Cada elemento na parte certa do bairro:",
        itens: [
          { id: "casa", texto: "Casa", imagemUrl: casa, alvoId: "moradia" },
          { id: "predio", texto: "Prédio", imagemUrl: predio, alvoId: "moradia" },
          { id: "escola", texto: "Escola", imagemUrl: escola, alvoId: "servico" },
          { id: "saude", texto: "Posto de saúde", imagemUrl: postoSaude, alvoId: "servico" },
          { id: "mercado", texto: "Mercado", imagemUrl: mercado, alvoId: "servico" },
          { id: "praca", texto: "Praça", imagemUrl: praca, alvoId: "publico" },
          { id: "arvore", texto: "Árvore", imagemUrl: arvore, alvoId: "publico" },
          { id: "onibus", texto: "Ponto de ônibus", imagemUrl: pontoOnibus, alvoId: "transporte" },
          { id: "bike", texto: "Bicicleta", imagemUrl: bicicleta, alvoId: "transporte" },
          { id: "lixorec", texto: "Reciclagem", imagemUrl: lixeiraRec, alvoId: "cuidado" },
          { id: "lixo", texto: "Lixeira", imagemUrl: lixeira, alvoId: "cuidado" },
        ],
        alvos: [
          { id: "moradia", nome: "🏠 Moradias", imagemUrl: casa },
          { id: "servico", nome: "🏫 Serviços", imagemUrl: escola },
          { id: "publico", nome: "🌳 Espaços públicos", imagemUrl: praca },
          { id: "transporte", nome: "🚌 Transporte", imagemUrl: pontoOnibus },
          { id: "cuidado", nome: "♻️ Cuidado", imagemUrl: lixeiraRec },
        ],
        feedbackAcerto: "🏆 BAIRRO IDEAL CONSTRUÍDO! Você é um Guardião do Bairro!",
        feedbackErro: "Quase! Cada elemento vai na categoria certa: moradia, serviço, público, transporte ou cuidado.",
      },
    },
  },

  momento11_quiz: {
    instrucao: "Grande revisão da Unidade 3:",
    perguntas: [
      {
        pergunta: "Onde estuda-se?",
        opcoes: ["Escola", "Padaria"],
        correta: 0,
        feedbackAcerto: "Certo!",
        feedbackErro: "Estudar = escola.",
      },
      {
        pergunta: "Espaços públicos são de…",
        opcoes: ["Uma pessoa só", "Todo mundo"],
        correta: 1,
        feedbackAcerto: "Isso!",
        feedbackErro: "Público = de todos.",
      },
      {
        pergunta: "Quem cuida da rua limpa?",
        opcoes: ["Só o gari", "O gari E todos nós"],
        correta: 1,
        feedbackAcerto: "Perfeito!",
        feedbackErro: "TODOS cuidam — junto com o gari.",
      },
      {
        pergunta: "Onde eu atravesso a rua?",
        opcoes: ["Onde quiser", "Na faixa de pedestre"],
        correta: 1,
        feedbackAcerto: "Certo!",
        feedbackErro: "FAIXA — sempre.",
      },
      {
        pergunta: "Se um lugar é PERTO, dá pra ir…",
        opcoes: ["A pé", "Só de avião"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Perto = a pé ou de bike.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🚶 Passeio pelo bairro real",
    materiais: ["Um adulto", "Vontade de olhar"],
    passos: [
      "Faça um pequeno passeio pelo bairro com um adulto.",
      "Observe UM SERVIÇO público (escola, posto de saúde, etc.).",
      "Observe UM COMÉRCIO (padaria, mercado, etc.).",
      "Observe UM ESPAÇO DE LAZER (praça, parque).",
      "Converse: por que cada lugar é importante pra comunidade?",
    ],
    registro: "Faça um desenho ou tire uma foto dos 3 lugares e traga na próxima aula.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Um bairro bom TEM:",
        opcoes: ["Só moradias", "Moradias + serviços + espaços públicos + transporte + cuidado"],
        correta: 1,
        feedbackAcerto: "Perfeito! É a receita completa.",
        feedbackErro: "Bairro bom precisa dos 5 elementos: moradia, serviço, público, transporte, cuidado.",
      },
      {
        pergunta: "Qual atitude é de um GUARDIÃO do bairro?",
        opcoes: ["Sujar", "Cuidar, atravessar com segurança, respeitar profissionais"],
        correta: 1,
        feedbackAcerto: "Isso! Você virou GUARDIÃO.",
        feedbackErro: "Guardião cuida, respeita e ajuda.",
      },
    ],
  },

  momento14_continuacao: {
    texto:
      "🌟 UNIDADE 3 CONCLUÍDA! Você desbloqueou o 🗺️ Mapa Ilustrado do Bairro das Descobertas. Próxima aventura: AS PAISAGENS ao nosso redor.",
    imagemUrl: bairro,
  },

  recompensa: { xp: 200, moedas: 90, medalha: "🏅 Guardião do Bairro" },
};

void cozinheira;
