import type { AulaV4 } from "../../types";

export const aula04_subtracaoComTroca: AulaV4 = {
  slug: "u2-04-subtracao-com-troca",
  titulo: "Subtrair com trocas em cadeia (com zeros)",
  iconeTrilha: "🔄",
  bncc: ["EF05MA07"],
  duracaoMin: 22,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Trocar entre ordens",
    historia: "{NOME}, quando não há unidades suficientes em uma ordem, trocamos 1 unidade da ordem à esquerda por 10 unidades da ordem atual. Se houver zero, continuamos as trocas até encontrar uma ordem com valor disponível.",
  },
  momento02_exploracao: {
    instrucao: "Trocas em cadeia pelo valor posicional.",
    cenas: [
      { tipo: "texto", texto: "Quando o algarismo de cima é menor, troque 1 unidade da ordem à esquerda por 10 da ordem atual.", destaque: true },
      { tipo: "texto", texto: "Se a ordem à esquerda tiver zero, continue até encontrar valor para reagrupar. Cada zero atravessado recebe 10 e cede 1, ficando com 9." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "40.000 − 12.567. Como fazer se tudo é 0?",
    pista: "Reagrupe uma dezena de milhar até chegar às unidades.",
    revelacao: "DM 4 dá 1 → vira 3. UM/C/D valem 10 e emprestam de volta virando 9. U pega +10.",
  },
  momento04_explicacao: {
    titulo: "Uma subtração com trocas passo a passo",
    etapas: [
      {
        texto: "Vamos ver 52.400 − 18.756. Trocas em cadeia.",
        exemploReal: {
          contexto: "O topo é menor várias vezes. Cada troca é um risco no algarismo original.",
          destaque: "= 33.644.",
          contaPassoAPasso: {
            operacao: "sub",
            operandos: [52400, 18756],
            resultado: 33644,
            passos: [
              { coluna: "U", fala: "0 < 6 → pede à D. D = 0 → pede à C. C = 4 → vira 3. D vira 10 → vira 9. U vira 10. 10 − 6 = 4.", digito: 4 },
              { coluna: "D", fala: "Agora D vale 9. 9 − 5 = 4.", digito: 4 },
              { coluna: "C", fala: "C vale 3. 3 < 7 → pede à UM. UM = 2 → vira 1. C vira 13. 13 − 7 = 6.", digito: 6 },
              { coluna: "UM", fala: "UM vale 1. 1 < 8 → pede à DM. DM = 5 → vira 4. UM vira 11. 11 − 8 = 3.", digito: 3 },
              { coluna: "DM", fala: "DM vale 4. 4 − 1 = 3.", digito: 3 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Subtraia com cuidado: 60.000 − 24.375.",
    resposta: "35.625",
    passos: ["Toda coluna do topo é 0 (menos DM).", "DM 6 empresta em cadeia.", "= 35.625."],
    contaPassoAPasso: {
      operacao: "sub",
      operandos: [60000, 24375],
      resultado: 35625,
      passos: [
        { coluna: "U", fala: "Empréstimo em cadeia: 10 − 5 = 5.", digito: 5 },
        { coluna: "D", fala: "9 − 7 = 2.", digito: 2 },
        { coluna: "C", fala: "9 − 3 = 6.", digito: 6 },
        { coluna: "UM", fala: "9 − 4 = 5.", digito: 5 },
        { coluna: "DM", fala: "5 − 2 = 3.", digito: 3 },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 40.100 − 15.678.",
    dica: "Vá anotando cada troca.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "sub",
      operandos: [40100, 15678],
      resultado: 24422,
      modo: "explicacao",
      passos: [
        { coluna: "U", fala: "0 < 8 → pede à D. D = 0 → pede à C. C = 1 → vira 0. D vira 9. U vira 10. 10 − 8 = 2.", digito: 2 },
        { coluna: "D", fala: "D vale 9. 9 − 7 = 2.", digito: 2 },
        { coluna: "C", fala: "C vale 0. 0 < 6 → pede à UM. UM = 0 → pede à DM. DM = 4 → vira 3. UM vira 9. C vira 10. 10 − 6 = 4.", digito: 4 },
        { coluna: "UM", fala: "UM vale 9. 9 − 5 = 4.", digito: 4 },
        { coluna: "DM", fala: "DM vale 3. 3 − 1 = 2.", digito: 2 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 30.005 − 12.348.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "17.657" }, { nome: "17.557" }, { nome: "17.757" }],
      respostaCerta: "17.657",
      feedbackAcerto: "🎯",
      feedbackErro: "30.005 − 12.348 = 17.657.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma cidade tinha 40.000 moradores; 12.786 mudaram.",
    problema: "Ficaram?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "27.214" }, { nome: "27.314" }, { nome: "26.214" }],
      respostaCerta: "27.214",
      feedbackAcerto: "🎯 27.214.",
      feedbackErro: "40.000 − 12.786 = 27.214.",
    },
  },
  momento09_revisao: {
    pontos: ["Trocas em cadeia podem atravessar zeros.", "Cada troca conserva o valor total do número.", "Anote cada reagrupamento no caderno."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "50.000 − 23.487 = ?", opcoes: ["26.513", "26.413", "27.513"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "26.513." },
      { pergunta: "80.100 − 45.678 = ?", opcoes: ["34.422", "34.322", "34.522"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "34.422." },
      { pergunta: "20.030 − 8.245 = ?", opcoes: ["11.785", "11.885", "11.685"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "11.785." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Troca em cadeia",
    materiais: ["Caderno"],
    passos: ["Invente uma subtração com zeros no meio do topo.", "Resolva marcando cada troca."],
    registro: "📸 Foto do caderno.",
  },
  recompensa: { xp: 160, moedas: 85 },
};
