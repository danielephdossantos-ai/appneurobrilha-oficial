import type { AulaGeografiaV4 } from "../../types";
import rua from "@/assets/neuro-treino/objetos/rua.png";
import carro from "@/assets/neuro-treino/objetos/carro.png";
import bicicleta from "@/assets/neuro-treino/objetos/bicicleta-moderna.png";
import pontoOnibus from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import criancaAndando from "@/assets/neuro-treino/objetos/crianca-andando.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import trem from "@/assets/neuro-treino/objetos/trem.png";
import postoSaude from "@/assets/neuro-treino/objetos/posto-saude.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import bairro from "@/assets/neuro-treino/objetos/bairro.png";

/**
 * Aula 4 · Unidade 3 — Como as Pessoas se Deslocam?
 * A criança conhece meios de transporte e regras básicas de trânsito.
 */
export const aula04: AulaGeografiaV4 = {
  slug: "aula-04-como-as-pessoas-se-deslocam",
  titulo: "Como as Pessoas se Deslocam?",
  iconeTrilha: "🚦",
  bncc: ["EF01GE04"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Descubra os JEITOS de andar pelo bairro com segurança!",
    imagemUrl: rua,
  },

  momento02_narrativa: {
    titulo: "Todo mundo precisa se mover",
    historia:
      "É de manhã e o bairro acordou. Todo mundo precisa ir pra algum lugar: pra escola, pro trabalho, pro mercado. — Cada pessoa vai de um jeito. Vamos ver quais são?",
    imagemUrl: bairro,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque em cada meio de transporte e conheça:",
    galeria: [
      { imagemUrl: criancaAndando, legenda: "🚶 A pé — o jeito mais simples, pra distâncias PERTO" },
      { imagemUrl: bicicleta, legenda: "🚲 Bicicleta — rápida, boa pro corpo, sem poluição" },
      { imagemUrl: carro, legenda: "🚗 Carro — pra família, distâncias médias e longas" },
      { imagemUrl: pontoOnibus, legenda: "🚌 Ônibus — leva muita gente ao mesmo tempo" },
      { imagemUrl: trem, legenda: "🚆 Trem/metrô — muitos passageiros, longas distâncias na cidade" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Que meio de transporte a gente escolhe?",
    pistas: [
      "Se é PERTO → pode ir a pé ou de bike.",
      "Se é LONGE → carro, ônibus ou trem.",
      "Se muita gente vai junto → ônibus é ótimo.",
    ],
    revelacao:
      "Existem VÁRIOS meios de transporte. A gente escolhe o mais adequado pra CADA situação — e sempre com SEGURANÇA.",
  },

  momento05_ensinoExplicito: {
    titulo: "Regras de trânsito básicas",
    etapas: [
      { texto: "🚦 SEMÁFORO: vermelho = para. Verde = anda. Amarelo = atenção.", imagemUrl: rua },
      { texto: "🚸 FAIXA DE PEDESTRE: atravessa aqui, olhando dos DOIS lados.", imagemUrl: criancaAndando },
      { texto: "🚲 CICLOVIA: pista da bicicleta — carro não passa aqui.", imagemUrl: bicicleta },
      { texto: "🚌 PONTO DE ÔNIBUS: onde a gente espera o ônibus, sem invadir a rua.", imagemUrl: pontoOnibus },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha atravessa a rua com segurança:",
    passos: [
      "— Chego perto da FAIXA de pedestre.",
      "— Olho pra ESQUERDA e pra DIREITA.",
      "— Só atravesso quando não vem carro.",
      "— Ando reto até o outro lado. ✅",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Junto: Brilha precisa ir da CASA dele até a ESCOLA, que é a 3 quarteirões.",
    dica: "3 quarteirões é PERTO. Não precisa de carro.",
    quiz: {
      pergunta: "Melhor meio pra 3 quarteirões?",
      opcoes: ["A pé ou de bike 🚶🚲", "Avião ✈️", "Trem 🚆"],
      correta: 0,
      feedbackAcerto: "Certo! Pra PERTO, melhor a pé ou de bike — faz bem e não polui.",
      feedbackErro: "Pra 3 quarteirões ninguém pega avião nem trem — melhor a pé ou de bike.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho:",
    quiz: {
      pergunta: "Você vai atravessar a rua. O semáforo está VERMELHO pros carros. O que faz?",
      opcoes: ["Atravessa correndo sem olhar", "Atravessa com calma na faixa, olhando dos dois lados"],
      correta: 1,
      feedbackAcerto: "Perfeito! Vermelho pra carros = pode atravessar — MAS sempre olhando.",
      feedbackErro: "Mesmo com semáforo vermelho pros carros, SEMPRE olhamos dos 2 lados. Segurança primeiro.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Sua família precisa ir pro trabalho e você pra escola.",
    problema: "Como vocês vão?",
    quiz: {
      pergunta: "Como cada um vai?",
      opcoes: [
        "Cada um escolhe o melhor jeito pra sua distância",
        "Todo mundo obrigado a ir do mesmo jeito",
      ],
      correta: 0,
      feedbackAcerto: "Isso! Cada distância pede um transporte diferente.",
      feedbackErro: "Cada situação pede um meio. Não tem um só certo pra tudo.",
    },
  },

  momento10_minijogo: {
    titulo: "Trânsito Seguro",
    instrucao: "Toque em cada elemento do trânsito e ouça como usar com segurança.",
    jogo: {
      tipo: "galeriaExploracao",
      bloco: {
        cards: [
          { imagemUrl: rua, titulo: "🚦 Semáforo", descricao: "Vermelho para carros = pedestre pode atravessar. Verde para carros = pedestre espera." },
          { imagemUrl: criancaAndando, titulo: "🚸 Faixa de pedestre", descricao: "Sempre atravesse na faixa — nunca no meio da rua." },
          { imagemUrl: bicicleta, titulo: "🚲 Ciclovia", descricao: "Pista só pra bicicletas. Carros não podem passar aqui." },
          { imagemUrl: pontoOnibus, titulo: "🚌 Ponto de ônibus", descricao: "Espere no ponto, atrás da faixa amarela — nunca na rua." },
          { imagemUrl: carro, titulo: "🚗 Carro", descricao: "Vai pela pista. No banco de trás, criança sempre com cinto e cadeirinha." },
          { imagemUrl: trem, titulo: "🚆 Trem/Metrô", descricao: "Só embarque quando a porta abrir. Segure na barra." },
        ],
      },
    },
  },

  momento11_quiz: {
    instrucao: "Quiz — trânsito e transportes:",
    perguntas: [
      {
        pergunta: "O que significa SEMÁFORO VERDE pra pedestres?",
        opcoes: ["Pode atravessar", "Espera"],
        correta: 0,
        feedbackAcerto: "Certo!",
        feedbackErro: "Verde pra pedestre = PODE atravessar (sempre olhando).",
      },
      {
        pergunta: "Bicicleta anda na…",
        opcoes: ["Ciclovia", "Calçada de pedestre"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Bicicleta = CICLOVIA. Pedestre = calçada.",
      },
      {
        pergunta: "Antes de atravessar, eu olho…",
        opcoes: ["Só um lado", "Os dois lados"],
        correta: 1,
        feedbackAcerto: "Sempre os DOIS lados.",
        feedbackErro: "Sempre olhe os DOIS lados antes de atravessar.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🚦 Observando o trânsito",
    materiais: ["Um adulto"],
    passos: [
      "Fique num lugar seguro perto de uma rua.",
      "Observe 5 minutos: quais meios de transporte passam?",
      "Conte quantos carros, bikes e pessoas você viu.",
    ],
    registro: "Diga o meio de transporte que passou MAIS vezes.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Pra ir num lugar PERTO, o melhor é…",
        opcoes: ["A pé ou de bike", "De avião"],
        correta: 0,
        feedbackAcerto: "Isso!",
        feedbackErro: "Pra PERTO, a pé ou bike é o mais adequado.",
      },
      {
        pergunta: "Faixa de pedestre serve pra…",
        opcoes: ["Andar de carro", "Atravessar a rua com segurança"],
        correta: 1,
        feedbackAcerto: "Certo!",
        feedbackErro: "FAIXA = lugar seguro pra ATRAVESSAR a pé.",
      },
    ],
  },

  momento14_continuacao: {
    texto: "⭐ Você aprendeu a andar seguro pelo bairro! Próxima: MONTAR o seu bairro ideal.",
    imagemUrl: rua,
  },

  recompensa: { xp: 130, moedas: 55, medalha: "🚦 Trânsito Seguro" },
};

void postoSaude; void escola;
