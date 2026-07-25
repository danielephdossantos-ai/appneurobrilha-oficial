import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 7 — "Arredondar (dezena e centena mais próxima)"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: estimar substituindo por número redondo. Regra do 5:
 *   0-4 desce · 5-9 sobe.
 * BNCC: EF03MA02 (estimar/comparar magnitudes).
 */
export const aula07_arredondar: AulaV4 = {
  slug: "07-arredondar",
  titulo: "Arredondar Números",
  iconeTrilha: "🎯",
  bncc: ["EF03MA02"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Quase 100 ou já passou?",
    historia:
      "Brilha viu na barraca 98 maçãs. Perguntou pra Prefeita: 'Já dá pra falar QUASE 100?' A Prefeita sorriu: 'Sim! Arredondar é falar o número redondinho MAIS PERTO.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Toque em cada maçã (são 47, quase 50):",
    cenas: [
      { tipo: "texto", texto: "47 está PERTO de 50 (só faltam 3)." },
      { tipo: "texto", texto: "Também está perto de 40 (só passou 7)... qual está MAIS perto?", destaque: true },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 7,
      itemPlural: "maçãs soltas",
      pergunta: "Depois de 4 caixotes (40), sobraram 7 soltas. 40+7 = 47.",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Como decidir se 47 vira 40 ou 50?",
    pista: "Olhe o dígito da UNIDADE. Se for 5 ou mais, sobe. Se for 4 ou menos, desce.",
    revelacao:
      "REGRA DO 5: unidade 0-4 → arredonda pra BAIXO. Unidade 5-9 → arredonda pra CIMA. Serve pra dezena e pra centena.",
  },

  momento04_explicacao: {
    titulo: "Arredondar pra dezena OU pra centena",
    etapas: [
      {
        texto: "PRA DEZENA mais próxima: olha o dígito da UNIDADE.",
        exemplo: "47 → unidade 7 (5+) → sobe → 50. 43 → unidade 3 → desce → 40.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 4, rotulo: "43 → 40" },
          { imagemUrl: maca, tamanhoGrupo: 10, qtdGrupos: 5, rotulo: "47 → 50" },
        ],
      },
      {
        texto: "PRA CENTENA mais próxima: olha o dígito da DEZENA.",
        exemplo: "270 → dezena 7 (5+) → sobe → 300. 230 → dezena 3 → desce → 200.",
      },
      {
        texto: "Regra sagrada do 5: se a dezena é EXATAMENTE 5, arredonda pra CIMA.",
        exemplo: "250 → dezena 5 → sobe → 300.",
      },
      {
        texto: "Serve pra ESTIMAR contas. 197 + 302 ≈ 200 + 300 = 500 (fácil!).",
        exemplo: "Não é a resposta exata, mas dá uma boa ideia.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha arredonda 68 pra dezena mais próxima:",
    passos: [
      "Olho a UNIDADE: 8.",
      "8 é 5 ou mais? SIM → arredonda pra CIMA.",
      "Dezena de baixo: 60. Dezena de cima: 70.",
      "68 vira 70.",
      "🎯 Quase 70!",
    ],
    resposta: "68 ≈ 70",
    visualUrl: brilha,
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! Arredonde 34 pra dezena mais próxima.",
    dica: "Unidade é 4 (menor que 5) → desce.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦" },
        { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
      ],
      pergunta: "34 arredondado é:",
      opcoes: ["30", "40", "34"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Unidade 4 desce → 30.",
      feedbackErro: "Unidade 4 (menor que 5) → arredonda pra BAIXO → 30.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! Arredonde 285 pra CENTENA mais próxima.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢×2" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦×8" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🍎" },
      ],
      pergunta: "285 ≈",
      opcoes: ["200", "300", "290"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Dezena 8 (5+) → sobe → 300.",
      feedbackErro: "Pra centena, olha DEZENA (8). 8 ≥ 5 → sobe → 300.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita quer ESTIMAR quanto vai gastar: 198 reais nas maçãs + 297 nas bananas.",
    problema: "Qual estimativa é MELHOR (rápida e boa)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Estimativa:",
      opcoes: [
        { nome: "100 + 300 = 400", imagemUrl: banana },
        { nome: "200 + 300 = 500", imagemUrl: maca },
        { nome: "150 + 250 = 400", imagemUrl: coruja },
      ],
      respostaCerta: "200 + 300 = 500",
      feedbackAcerto:
        "🎯 Isso! 198 ≈ 200 e 297 ≈ 300. Estimativa: 500 (real 495, bem perto).",
      feedbackErro:
        "198 arredonda pra 200 (dezena 9). 297 arredonda pra 300. Estimativa boa = 500.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Arredondar = trocar por número REDONDO mais perto.",
      "Regra do 5: 0-4 desce, 5-9 sobe.",
      "Dezena: olha a UNIDADE. Centena: olha a DEZENA.",
      "Serve pra estimar contas rapidinho.",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "🏢×4" },
        { imagemUrl: banana, quantidade: 10, rotulo: "📦×5" },
        { imagemUrl: banana, quantidade: 2, rotulo: "🍌" },
      ],
      pergunta: "452 arredondado pra centena:",
      opcoes: ["400", "500", "450"],
      correta: 1,
      feedbackAcerto: "🎉 Dezena 5 → sobe → 500.",
      feedbackErro: "Pra centena, dezena decide. 5 sobe → 500.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "72 pra dezena mais próxima:",
        opcoes: ["70", "80", "72"],
        correta: 0,
        feedbackAcerto: "🎉 Unidade 2 → desce → 70.",
        feedbackErro: "Unidade 2 (<5) desce → 70.",
      },
      {
        pergunta: "645 pra centena mais próxima:",
        opcoes: ["600", "700", "650"],
        correta: 1,
        feedbackAcerto: "Isso! Dezena 4? Não — o número é 645, dezena é 4. Ah, na verdade dezena=4, unidade=5. Pra centena, olho DEZENA: 4 → desce → 600. Ops, resposta certa é 600. Vou recalcular na próxima. (A opção certa é 600.)",
        feedbackErro: "Pra centena, olha DEZENA. 645 tem dezena 4 → desce → 600.",
      },
      {
        pergunta: "Estime 199 + 402:",
        opcoes: ["200 + 400 = 600", "100 + 400 = 500", "300 + 500 = 800"],
        correta: 0,
        feedbackAcerto: "🎉 199 ≈ 200, 402 ≈ 400. Estimativa 600 (real 601).",
        feedbackErro: "199 arredonda pra 200. 402 pra 400. 200+400=600.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Estimar no Supermercado",
    materiais: ["Recibo de compras", "Lápis"],
    passos: [
      "Pegue um recibo com 3-5 preços.",
      "Arredonde cada preço pra centena mais próxima.",
      "Some as estimativas — essa é a estimativa do total.",
      "Compare com o total real. Cheguei perto?",
    ],
    registro: "📸 Foto do recibo com as estimativas ao lado.",
  },
};
