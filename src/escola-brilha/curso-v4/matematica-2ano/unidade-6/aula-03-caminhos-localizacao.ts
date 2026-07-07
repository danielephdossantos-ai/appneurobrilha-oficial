import type { AulaV4 } from "../../types";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import mapaPercurso from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import parque from "@/assets/neuro-treino/objetos/parque.png";
import mercado from "@/assets/neuro-treino/objetos/mercado.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 6 · Aula 3 — "Caminhos e Localização"
 * Cidade das Descobertas · Localização espacial (2º ano).
 */
export const aula03_caminhosLocalizacao: AulaV4 = {
  slug: "u6-03-caminhos-e-localizacao",
  titulo: "Caminhos e Localização",
  iconeTrilha: "🗺️",
  bncc: ["EF02MA12", "EF02MA13"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O carteiro da cidade",
    historia:
      "Brilha virou CARTEIRO da Cidade das Descobertas! A Coruja mostrou um mapa: 'Pra entregar as cartas você precisa saber o CAMINHO — em cima, embaixo, à esquerda, à direita, entre, ao lado.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Olhe o mapa: casa, escola, parque e mercado.",
    cenas: [
      { tipo: "imagem", url: mapa, alt: "Mapa da cidade", legenda: "A cidade tem 4 pontos importantes." },
      { tipo: "grupoItens", imagemUrl: casa, quantidade: 1, rotulo: "🏠 Casa" },
      { tipo: "grupoItens", imagemUrl: escola, quantidade: 1, rotulo: "🏫 Escola" },
      { tipo: "grupoItens", imagemUrl: parque, quantidade: 1, rotulo: "🌳 Parque" },
      { tipo: "grupoItens", imagemUrl: mercado, quantidade: 1, rotulo: "🛒 Mercado" },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como a gente FALA onde uma coisa está?",
    pista: "Usamos palavras como 'em cima', 'ao lado', 'entre'.",
    revelacao:
      "Isso! ⬆️ em cima ⬇️ embaixo ⬅️ esquerda ➡️ direita 📍 entre 📍 ao lado 📍 em frente 📍 atrás — são palavras que MOSTRAM lugares.",
  },

  momento04_explicacao: {
    titulo: "Palavras de lugar",
    etapas: [
      { texto: "⬆️ EM CIMA / ⬇️ EMBAIXO — quando algo está mais alto ou mais baixo." },
      { texto: "⬅️ ESQUERDA / ➡️ DIREITA — os dois lados do seu corpo." },
      { texto: "📍 ENTRE — quando algo fica no meio de dois outros.", exemplo: "A escola fica ENTRE a casa e o parque." },
      { texto: "📍 AO LADO / EM FRENTE / ATRÁS — vizinhos e opostos." },
    ],
  },

  momento05_modelagem: {
    enunciado: "EU FAÇO — Brilha entrega uma carta na ESCOLA:",
    passos: [
      "Saio da CASA.",
      "Ando pra DIREITA.",
      "Passo em FRENTE do parque.",
      "Chego na ESCOLA que fica ENTRE a casa e o mercado.",
    ],
    resposta: "Carta entregue na escola! ✉️",
    visualUrl: mapaPercurso,
  },

  momento06_praticaGuiada: {
    enunciado: "NÓS FAZEMOS — Onde está a ESCOLA no mapa?",
    dica: "A escola fica no meio da casa e do mercado…",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A escola fica…",
      opcoes: [
        { nome: "Entre a casa e o mercado", imagemUrl: escola },
        { nome: "Em cima da casa", imagemUrl: casa },
        { nome: "Atrás do parque", imagemUrl: parque },
      ],
      respostaCerta: "Entre a casa e o mercado",
      feedbackAcerto: "🎉 Isso! Escola fica ENTRE a casa e o mercado.",
      feedbackErro: "No meio de dois lugares = ENTRE. Escola fica ENTRE casa e mercado.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "VOCÊ FAZ — Pra ir da CASA até o PARQUE, você vai pra…",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Se o parque está do lado direito da casa, você vai pra…",
      opcoes: [
        { nome: "Esquerda", imagemUrl: casa },
        { nome: "Direita", imagemUrl: parque },
        { nome: "Atrás", imagemUrl: mercado },
      ],
      respostaCerta: "Direita",
      feedbackAcerto: "🎉 Boa! Vou pra DIREITA.",
      feedbackErro: "O parque está à DIREITA da casa.",
    },
  },

  momento08_aplicacao: {
    contexto: "APLICAÇÃO — O carteiro Brilha precisa entregar no MERCADO.",
    problema: "O mercado fica em frente ao parque. Onde é?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Se está EM FRENTE do parque, o mercado está…",
      opcoes: [
        { nome: "Do outro lado do parque", imagemUrl: mercado },
        { nome: "Em cima do parque", imagemUrl: parque },
        { nome: "Dentro da casa", imagemUrl: casa },
      ],
      respostaCerta: "Do outro lado do parque",
      feedbackAcerto: "🎉 Isso! EM FRENTE = do outro lado.",
      feedbackErro: "'Em frente' = do lado oposto.",
    },
  },

  momento09_revisao: {
    pontos: [
      "⬆️⬇️ em cima / embaixo — altura.",
      "⬅️➡️ esquerda / direita — lados.",
      "📍 entre — no meio de dois.",
      "📍 em frente / atrás — opostos.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "A escola fica NO MEIO da casa e do mercado. É…",
      opcoes: [
        { nome: "ENTRE", imagemUrl: escola },
        { nome: "ATRÁS", imagemUrl: casa },
        { nome: "EM CIMA", imagemUrl: parque },
      ],
      respostaCerta: "ENTRE",
      feedbackAcerto: "🎉 No meio de dois = ENTRE.",
      feedbackErro: "'No meio de dois' = ENTRE.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — Que palavra diz 'no meio de dois'?",
        opcoes: ["Atrás", "Entre", "Em cima"],
        correta: 1,
        feedbackAcerto: "🎉 ENTRE = no meio de dois.",
        feedbackErro: "ENTRE é 'no meio de dois'.",
      },
      {
        pergunta: "Pergunta 2 de 5 — O sol nasce à DIREITA. Você aponta pra…",
        opcoes: ["Esquerda", "Direita", "Atrás"],
        correta: 1,
        feedbackAcerto: "🎉 DIREITA é o outro lado da esquerda.",
        feedbackErro: "Direita é o lado da mão de escrever (pra muita gente).",
      },
      {
        pergunta: "Pergunta 3 de 5 — O contrário de EM CIMA é…",
        opcoes: ["Ao lado", "Embaixo", "Em frente"],
        correta: 1,
        feedbackAcerto: "🎉 EM CIMA × EMBAIXO.",
        feedbackErro: "O contrário de em cima é EMBAIXO.",
      },
      {
        pergunta: "Pergunta 4 de 5 — O contrário de ATRÁS é…",
        opcoes: ["Em frente", "Entre", "Ao lado"],
        correta: 0,
        feedbackAcerto: "🎉 ATRÁS × EM FRENTE.",
        feedbackErro: "O contrário de atrás é EM FRENTE.",
      },
      {
        pergunta: "Pergunta 5 de 5 — Você está NA CASA. Pra ir ao PARQUE do lado direito, vai pra…",
        opcoes: ["Esquerda", "Direita", "Atrás"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! DIREITA. 🏆",
        feedbackErro: "Se o parque está à direita, vou pra DIREITA.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🗺️ Correio em Casa",
    materiais: ["Papel", "3 pontos da casa (ex.: sofá, mesa, geladeira)"],
    passos: [
      "1) A família escolhe 3 pontos.",
      "2) Um adulto dá instruções: 'Vá em frente, vire à direita, entre o sofá e a mesa.'",
      "3) A criança segue as pistas.",
      "4) Depois a criança inventa o caminho pra família seguir.",
    ],
    registro: "📸 Foto do 'mapa' desenhado pela criança.",
  },

  recompensa: {
    xp: 200,
    moedas: 100,
    medalha: "Carteiro(a) da Cidade",
  },
};
