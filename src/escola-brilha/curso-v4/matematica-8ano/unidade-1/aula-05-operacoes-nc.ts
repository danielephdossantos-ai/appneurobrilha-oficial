import type { AulaV4 } from "../../types";

/**
 * Aula 05 · U1 — Operar com notação científica.
 * Padrão piloto: passo a passo interativo + Professor + armadilha do ajuste da mantissa.
 */
export const aula05_operacoesNC: AulaV4 = {
  slug: "u1-05-operacoes-nc",
  titulo: "Operar com notação científica",
  iconeTrilha: "✖️",
  bncc: ["EF08MA01"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Contas que nem calculadora comum aguenta",
    historia:
      "{NOME}, quando o número é enorme ou minúsculo, usar notação científica para multiplicar/dividir é MUITO mais rápido. Truque: opera mantissa com mantissa, expoente com expoente (mesma base 10).",
  },

  momento02_exploracao: {
    instrucao: "Regra a regra.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Operações em NC",
        cabecalhos: ["Operação", "Regra da mantissa", "Regra do expoente"],
        linhas: [
          { rotulo: "×", valores: ["multiplica", "multiplica", "SOMA"] },
          { rotulo: "÷", valores: ["divide", "divide", "SUBTRAI"] },
          { rotulo: "+/−", valores: ["soma/sub após igualar expoentes", "soma/sub", "IGUALAR primeiro"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "🔑 Se a mantissa final ficar fora de [1, 10), AJUSTE: reescreva a mantissa em NC e some no expoente.",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "(2 · 10³) · (3 · 10⁴) = ?",
    pista: "Multiplique mantissas (2·3). Some expoentes (3+4). Junte.",
    revelacao: "= 6 · 10⁷.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(2 · 10³) · (3 · 10⁴)",
      passos: [
        { expr: "(2 · 10³) · (3 · 10⁴)", explica: "Multiplicação em NC.", status: "neutro", professor: "Multiplicação: reorganizo as mantissas juntas e as potências de 10 juntas." },
        { expr: "= (2 · 3) · (10³ · 10⁴)", explica: "Comutei.", status: "ok", professor: "Propriedade comutativa: posso trocar a ordem sem alterar o resultado." },
        { expr: "= 6 · 10³⁺⁴", explica: "Mesma base → soma expoentes.", status: "ok", professor: "Da aula 02: mesma base multiplicando → SOMA expoentes." },
        { expr: "= 6 · 10⁷", explica: "Mantissa 6 ok (∈ [1,10)).", status: "ok" },
      ],
      fatorada: "= 6 · 10⁷",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Multiplicação, divisão, soma e ajuste",
    etapas: [
      {
        texto: "Multiplicação: multiplique mantissas · SOME expoentes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(4 · 10³) · (2 · 10²)",
            passos: [
              { expr: "(4 · 10³) · (2 · 10²)", explica: "Reorganizo.", status: "neutro" },
              { expr: "= (4 · 2) · (10³ · 10²)", explica: "Comuto.", status: "ok" },
              { expr: "= 8 · 10³⁺²", explica: "Soma expoentes.", status: "ok" },
              { expr: "= 8 · 10⁵", explica: "Mantissa 8 ∈ [1,10) ✅.", status: "ok" },
            ],
            fatorada: "= 8 · 10⁵",
          },
          destaque: "Multiplicação: mantissas ×, expoentes +.",
        },
      },

      {
        texto: "Divisão: divida mantissas · SUBTRAIA expoentes.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(9 · 10⁸) ÷ (3 · 10²)",
            passos: [
              { expr: "(9 · 10⁸) ÷ (3 · 10²)", explica: "Divisão em NC.", status: "neutro" },
              { expr: "= (9 ÷ 3) · (10⁸ ÷ 10²)", explica: "Separo.", status: "ok" },
              { expr: "= 3 · 10⁸⁻²", explica: "Subtrai expoentes.", status: "ok", professor: "Mesma base dividindo → SUBTRAIO expoentes. 8 − 2." },
              { expr: "= 3 · 10⁶", explica: "Mantissa 3 ok.", status: "ok" },
            ],
            fatorada: "= 3 · 10⁶",
          },
          destaque: "Divisão: mantissas ÷, expoentes −.",
        },
      },

      {
        texto: "Soma/subtração: IGUALE os expoentes primeiro.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "2 · 10⁴ + 3 · 10³",
            passos: [
              { expr: "2 · 10⁴ + 3 · 10³", explica: "Expoentes diferentes.", status: "neutro", professor: "Soma/sub em NC só rola se os expoentes forem iguais. Vou converter uma parcela." },
              { expr: "3 · 10³ = 0,3 · 10⁴", explica: "Uso a menor potência.", status: "ok", professor: "Movo a vírgula 1 casa à esquerda em 3 para aumentar o expoente em 1: 3·10³ = 0,3·10⁴." },
              { expr: "= 2 · 10⁴ + 0,3 · 10⁴", explica: "Agora sim.", status: "ok" },
              { expr: "= (2 + 0,3) · 10⁴", explica: "Fatoro 10⁴.", status: "ok" },
              { expr: "= 2,3 · 10⁴", explica: "Mantissa ok.", status: "ok" },
            ],
            fatorada: "= 2,3 · 10⁴",
          },
          destaque: "Só some/subtraia com o MESMO expoente.",
        },
      },

      {
        texto: "⚠️ Armadilha: mantissa que passa de 10 precisa AJUSTE.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(5 · 10³) · (4 · 10²)",
            passos: [
              { expr: "(5 · 10³) · (4 · 10²)", explica: "Aplico a regra.", status: "neutro" },
              { expr: "= 20 · 10⁵", explica: "Mantissas: 5·4 = 20.", status: "x", professor: "Cuidado: a mantissa 20 está FORA de [1, 10). Como notação científica isso está INCORRETO, precisa ajustar." },
              { expr: "20 = 2 · 10¹", explica: "Reescrevo a mantissa.", status: "ok", professor: "Movo a vírgula 1 casa à esquerda em 20 → 2,0. Ganho +1 no expoente." },
              { expr: "= 2 · 10¹ · 10⁵ = 2 · 10⁶", explica: "Soma expoentes.", status: "ok" },
            ],
            fatorada: "= 2 · 10⁶ (correto)",
          },
          destaque: "Mantissa final SEMPRE em [1, 10).",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: (6 · 10⁵) · (2 · 10³) = ?",
    resposta: "1,2 · 10⁹",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(6 · 10⁵) · (2 · 10³)",
      passos: [
        { expr: "(6 · 10⁵) · (2 · 10³)", explica: "Multiplico.", status: "neutro" },
        { expr: "= (6·2) · 10⁵⁺³", explica: "Junto.", status: "ok" },
        { expr: "= 12 · 10⁸", explica: "Mantissa 12 → precisa ajuste.", status: "x", professor: "12 está fora de [1,10). Ajusto reescrevendo 12 = 1,2·10¹." },
        { expr: "= 1,2 · 10¹ · 10⁸ = 1,2 · 10⁹", explica: "Ajuste feito.", status: "ok" },
      ],
      fatorada: "= 1,2 · 10⁹",
      legenda: "Modelagem",
    },
    passos: ["6·2 = 12.", "5+3 = 8 → 12 · 10⁸.", "Ajuste: 1,2 · 10⁹."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: (3 · 10⁴) · (2 · 10⁵) = ?",
    dica: "Mantissas ×, expoentes +.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(3 · 10⁴) · (2 · 10⁵)",
      passos: [
        { expr: "= (3·2) · 10⁴⁺⁵", explica: "Aplico a regra.", status: "neutro" },
        { expr: "= 6 · 10⁹", explica: "Mantissa 6 ∈ [1,10) ✅.", status: "ok" },
      ],
      fatorada: "= 6 · 10⁹",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 · 10⁹" }, { nome: "6 · 10²⁰" }, { nome: "5 · 10⁹" }],
      respostaCerta: "6 · 10⁹",
      feedbackAcerto: "🎯 3·2 = 6, 4+5 = 9.",
      feedbackErro: "Multiplicação de mesma base 10 → SOMA (não multiplica) expoentes. 4+5=9. E mantissas MULTIPLICAM: 3·2=6.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (8 · 10⁶) ÷ (2 · 10²) = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(8 · 10⁶) ÷ (2 · 10²)",
      passos: [
        { expr: "= (8÷2) · 10⁶⁻²", explica: "Divisão.", status: "neutro" },
        { expr: "= 4 · 10⁴", explica: "Mantissa 4 ok.", status: "ok" },
      ],
      fatorada: "= 4 · 10⁴",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4 · 10⁴" }, { nome: "4 · 10⁸" }, { nome: "10 · 10⁴" }],
      respostaCerta: "4 · 10⁴",
      feedbackAcerto: "🎯 8÷2 = 4, 6−2 = 4.",
      feedbackErro: "Divisão em NC: mantissas dividem, expoentes SUBTRAEM. 6−2=4 (não soma). E 10 não é mantissa válida.",
    },
  },

  momento08_aplicacao: {
    contexto: "A luz percorre 3 · 10⁸ m/s. Em 60 s (1 minuto), quantos metros ela viaja?",
    problema: "Multiplique 3 · 10⁸ por 60.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3 · 10⁸ · 60",
      passos: [
        { expr: "60 = 6 · 10¹", explica: "Coloco 60 em NC também.", status: "neutro", professor: "Para operar, deixo tudo em NC. 60 = 6,0 · 10¹." },
        { expr: "(3 · 10⁸) · (6 · 10¹)", explica: "Reescrevo.", status: "ok" },
        { expr: "= (3·6) · 10⁸⁺¹ = 18 · 10⁹", explica: "Aplico as regras.", status: "ok" },
        { expr: "18 = 1,8 · 10¹", explica: "Mantissa 18 fora de [1,10) — ajusto.", status: "x", professor: "Mantissa 18 é maior que 10. Ajusto: 18 = 1,8·10¹." },
        { expr: "= 1,8 · 10¹⁰ m", explica: "Ajuste finaliza.", status: "ok" },
      ],
      fatorada: "= 1,8 · 10¹⁰ m",
      legenda: "Aplicação — velocidade da luz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1,8 · 10¹⁰ m" }, { nome: "3 · 10⁶⁰ m" }, { nome: "1,8 · 10⁹ m" }],
      respostaCerta: "1,8 · 10¹⁰ m",
      feedbackAcerto: "🎯 3·60 = 180 → 1,8 · 10² · 10⁸ = 1,8 · 10¹⁰.",
      feedbackErro: "Multiplique mantissas (não multiplique expoentes por 60!). Depois ajuste a mantissa se passar de 10.",
    },
  },

  momento09_revisao: {
    pontos: [
      "×: mantissas × / expoentes +.",
      "÷: mantissas ÷ / expoentes −.",
      "+/−: iguale expoentes primeiro.",
      "Mantissa final sempre em [1, 10). Se passar, ajuste.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(2·10³)·(4·10²) =", opcoes: ["8 · 10⁵", "8 · 10⁶", "6 · 10⁵"], correta: 0, feedbackAcerto: "🎉 2·4=8, 3+2=5.", feedbackErro: "Multiplicação: mantissas MULTIPLICAM (2·4=8, não somam) e expoentes SOMAM (3+2=5)." },
      { pergunta: "(6·10⁵)÷(3·10²) =", opcoes: ["2 · 10³", "3 · 10³", "2 · 10⁷"], correta: 0, feedbackAcerto: "🎉 6÷3, 5−2.", feedbackErro: "Divisão: mantissas DIVIDEM (6÷3=2), expoentes SUBTRAEM (5−2=3, não soma)." },
      { pergunta: "10⁻³ · 10⁵ =", opcoes: ["10²", "10⁻¹⁵", "10⁸"], correta: 0, feedbackAcerto: "🎉 −3 + 5 = 2.", feedbackErro: "Mesma base → SOMA (não multiplica) expoentes. Com sinal: −3 + 5 = 2." },
      { pergunta: "5 · 10³ + 2 · 10³ =", opcoes: ["7 · 10³", "10 · 10³", "7 · 10⁶"], correta: 0, feedbackAcerto: "🎉 Mesmo expoente → soma mantissas.", feedbackErro: "Expoentes iguais → soma SÓ as mantissas: 5+2=7. Expoente FICA IGUAL." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Contas com NC no dia",
    materiais: ["Papel"],
    passos: [
      "Escreva 2 multiplicações e 2 divisões em NC.",
      "Resolva mostrando o passo do expoente.",
      "Verifique se a mantissa final está entre 1 e 10 — se não, ajuste.",
    ],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};
