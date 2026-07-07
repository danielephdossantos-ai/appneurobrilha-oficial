import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import estrela from "@/assets/neuro-treino/objetos/estrela.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 2 · Aula 3 — "Diferentes Jeitos de Somar"
 * A Cidade das Adições · BNCC EF02MA05.
 *
 * Foco: mostrar que existem VÁRIAS estratégias válidas pra somar
 *   ✔ contar um a um · ✔ continuar contando · ✔ desenhar
 *   ✔ usar dedos · ✔ usar objetos · ✔ reta numérica
 * Todas certas. Aluno escolhe a que preferir.
 */
export const aula03_diferentesJeitos: AulaV4 = {
  slug: "u2-03-diferentes-jeitos-somar",
  titulo: "Diferentes Jeitos de Somar",
  iconeTrilha: "🧠",
  bncc: ["EF02MA05"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Cada morador soma do seu jeito!",
    historia:
      "Na Cidade das Adições, Brilha descobriu algo curioso: cada morador soma de um jeito diferente. A Coelha usa os dedos, o Cachorro desenha, o Peixe conta os objetos, a Coruja pensa de cabeça. E Brilha perguntou: 'Qual é o jeito CERTO?' A Coruja sorriu: 'Todos! Cada um escolhe o que funciona melhor pra si.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Vamos experimentar CONTAR UM A UM. Toque em cada maçã pra somar 6 + 2:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 8,
      itemPlural: "maçãs",
      pergunta: "6 + 2 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Contar um a um funciona sempre. Mas dá pra ser mais rápido?",
    pista:
      "Dá! Você pode guardar o maior número na cabeça e continuar contando só o que falta.",
    revelacao:
      "Isso se chama CONTINUAR CONTANDO. Em 6 + 2, guarde o 6 e conte só +2: sete, oito. Mais rápido!",
  },

  momento04_explicacao: {
    titulo: "Várias estratégias, todas certas",
    etapas: [
      {
        texto:
          "Estratégia 1 — CONTAR UM A UM. Boa quando os números são pequenos.",
        exemplo: "3 + 5: 1,2,3,4,5,6,7,8. Total: 8.",
        frutasParaNumero: {
          imagemUrl: maca,
          itemPlural: "maçãs",
          grupos: [3, 5],
        },
      },
      {
        texto:
          "Estratégia 2 — CONTINUAR CONTANDO. Comece pelo maior e conte o que falta.",
        exemplo:
          "3 + 5: guarde o 5 (maior) e conte +3: seis, sete, oito. Também dá 8!",
      },
      {
        texto:
          "Estratégia 3 — DESENHAR. Faça bolinhas, palitos ou riscos e conte tudo.",
        exemplo: "7 + 1: ●●●●●●● + ● = ●●●●●●●● (8).",
      },
      {
        texto:
          "Estratégia 4 — USAR OS DEDOS. Um dedo pra cada unidade.",
        exemplo:
          "8 + 2: mostre 8 dedos e levante mais 2 (nove, dez). Fica 10.",
        contaArmada: {
          a: 8,
          b: 2,
          resultado: 10,
          itemPlural: "unidades",
        },
      },
      {
        texto:
          "Estratégia 5 — USAR OBJETOS. Junte tampinhas, feijões, brinquedos e conte.",
        exemplo:
          "6 + 2 bolas: coloque 6 bolas de um lado, 2 do outro, junte e conte tudo. Fica 8.",
        frutasParaNumero: {
          imagemUrl: bola,
          itemPlural: "bolas",
          grupos: [6, 2],
        },
      },
      {
        texto:
          "Estratégia 6 — RETA NUMÉRICA. Ande com o dedo do primeiro número até somar o segundo.",
        exemplo:
          "7 + 1: pise no 7 na reta, dê 1 pulinho pra frente → cai no 8.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha vai resolver 6 + 2 DE 3 JEITOS diferentes pra mostrar que todos funcionam:",
    passos: [
      "Jeito 1 (um a um): 1,2,3,4,5,6,7,8. Deu 8.",
      "Jeito 2 (continuar contando): 6... sete, oito. Deu 8.",
      "Jeito 3 (dedos): mostro 6 dedos e levanto mais 2: sete, oito. Deu 8!",
      "Todos os jeitos deram a MESMA resposta: 8.",
      "Escrevo: 6 + 2 = 8. Escolha o jeito que você preferir!",
    ],
    resposta: "6 + 2 = 8 (por qualquer estratégia)",
    visualUrl: maca,
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [6, 2],
      itemPlural: "maçãs",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — Resolva 3 + 5 usando a estratégia CONTINUAR CONTANDO.",
    dica: "Comece pelo MAIOR (5) e conte MAIS 3: seis, sete, oito.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: banana,
      itemPlural: "bananas",
      a: 3,
      b: 5,
      legenda: "3 + 5 = 8 (comece pelo 5)",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Sozinho(a): 7 + 1. Use qualquer estratégia que quiser.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 7, rotulo: "Grupo 1" },
        { imagemUrl: estrela, quantidade: 1, rotulo: "Grupo 2" },
      ],
      pergunta: "7 + 1 = ?",
      opcoes: ["7", "8", "9"],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 7 + 1 = 8. Somar 1 é só falar o próximo número: oito.",
      feedbackErro: "7 + 1 é o próximo do 7: oito. Fica 8.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — Você é o(a) chef! Precisa somar 8 + 2 tigelas pra festa. Qual estratégia é a MAIS RÁPIDA?",
    problema:
      "Descubra 8 + 2 (dica: 8 + 2 sempre fecha uma dezena).",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 8, rotulo: "Mesa 1" },
        { imagemUrl: bola, quantidade: 2, rotulo: "Mesa 2" },
      ],
      pergunta: "8 + 2 = ?",
      opcoes: ["9", "10", "11"],
      correta: 1,
      feedbackAcerto:
        "🎉 Uau! 8 + 2 = 10. Truque: números que fecham 10 são atalhos!",
      feedbackErro:
        "8 + 2 fecha uma dezena. Conte: nove, dez. Fica 10.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Existem VÁRIOS jeitos de somar: contar um a um, continuar contando, desenhar, usar dedos, objetos, reta numérica.",
      "TODOS são certos. O importante é chegar no mesmo resultado.",
      "🎯 Escolha SUA estratégia e resolva!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 3, rotulo: "🍎" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🍎" },
      ],
      pergunta: "Escolha sua estratégia e resolva: 3 + 5 = ?",
      opcoes: ["7", "8", "9"],
      correta: 1,
      feedbackAcerto: "🎉 Boa! 3 + 5 = 8, não importa a estratégia.",
      feedbackErro: "3 + 5: comece no 5 e conte +3 → seis, sete, oito. Fica 8.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 6 + 2 = ?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 6, rotulo: "🍎" },
          { imagemUrl: maca, quantidade: 2, rotulo: "🍎" },
        ],
        feedbackAcerto: "🎉 Isso! 6 + 2 = 8.",
        feedbackErro: "Comece no 6: sete, oito. Fica 8.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 3 + 5 = ?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 3, rotulo: "🍌" },
          { imagemUrl: banana, quantidade: 5, rotulo: "🍌" },
        ],
        feedbackAcerto: "🎉 Boa! 3 + 5 = 8.",
        feedbackErro: "Comece no 5 (maior) e conte +3: 6,7,8.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 7 + 1 = ?",
        opcoes: ["7", "8", "9"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: estrela, quantidade: 7, rotulo: "⭐" },
          { imagemUrl: estrela, quantidade: 1, rotulo: "⭐" },
        ],
        feedbackAcerto: "🎉 Isso! 7 + 1 = 8. Somar 1 é o próximo número.",
        feedbackErro: "Somar +1 é dar um passinho: 7 → 8.",
      },
      {
        pergunta: "Pergunta 4 de 5 — 8 + 2 = ?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 8, rotulo: "⚽" },
          { imagemUrl: bola, quantidade: 2, rotulo: "⚽" },
        ],
        feedbackAcerto: "🎉 Perfeito! 8 + 2 = 10. Fechou uma dezena!",
        feedbackErro: "8 + 2 fecha uma dezena inteira: 10.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Qual dessas NÃO é uma estratégia válida pra somar?",
        opcoes: [
          "Usar os dedos",
          "Desenhar bolinhas",
          "Chutar sem pensar",
        ],
        correta: 2,
        feedbackAcerto:
          "🎉 Uau! Chutar não vale. Dedos e desenhos SÃO estratégias legítimas! 🏆",
        feedbackErro:
          "Toda estratégia que faz você PENSAR vale. Chutar sem pensar não.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🧠 Meu Jeito de Somar",
    materiais: [
      "Papel e lápis",
      "Objetos pra contar",
      "Os próprios dedos!",
    ],
    passos: [
      "1) O adulto propõe 3 somas fáceis (ex.: 4+3, 6+2, 5+5).",
      "2) A criança escolhe UMA estratégia diferente pra cada: dedos, desenho, objetos, ou de cabeça.",
      "3) A criança fala em voz alta qual estratégia usou.",
      "4) O adulto conta em qual estratégia a criança se sentiu MAIS confiante.",
      "5) Escrevam no papel: 'Meu jeito preferido de somar é _____.'",
    ],
    registro:
      "📸 Foto do papel com a frase e um desenho da estratégia preferida.",
  },

  recompensa: {
    xp: 170,
    moedas: 85,
    medalha: "Estrategista da Adição",
  },
};
