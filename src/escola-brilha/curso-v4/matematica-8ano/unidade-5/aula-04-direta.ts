import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Grandezas diretamente proporcionais.
 * Regra de três com passo a passo interativo.
 * Professor mostra a "razão constante" e o cruzado como consequência.
 */
export const aula04_direta: AulaV4 = {
  slug: "u5-04-direta",
  titulo: "Grandezas diretamente proporcionais",
  iconeTrilha: "↗️",
  bncc: ["EF08MA12", "EF08MA13"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Sobe junto, desce junto",
    historia:
      "{NOME}, 1 kg de arroz custa R$ 5. 2 kg custam R$ 10. 3 kg custam R$ 15. Quando você DOBRA os kg, o preço também DOBRA. Isso é grandeza diretamente proporcional — e tem um jeito rápido de resolver.",
  },

  momento02_exploracao: {
    instrucao: "Observe a razão preço / kg em cada linha.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "kg × preço",
        passos: [
          { expr: "1 kg → R$ 5 · razão = 5/1 = 5", explica: "Preço por kg.", status: "ok", professor: "Razão é a divisão de uma grandeza pela outra." },
          { expr: "2 kg → R$ 10 · razão = 10/2 = 5", explica: "Mesma razão.", status: "ok", professor: "Dobrei kg e preço — a razão continuou 5." },
          { expr: "3 kg → R$ 15 · razão = 15/3 = 5", explica: "Sempre 5.", status: "ok", professor: "Se a razão é constante, as grandezas são diretamente proporcionais." },
          { expr: "→ diretas: razão constante", explica: "Definição.", status: "ok", professor: "Sobem juntas, descem juntas, na mesma proporção." },
        ],
        fatorada: "a/b = c/d",
        legenda: "Diretamente proporcionais = razão constante",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "E se eu não souber um dos valores? Como acho?",
    pista: "Se a razão é constante, monte uma proporção e multiplique em cruz.",
    revelacao: "Regra de três direta: a/b = c/x ⇒ a · x = b · c.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Por que multiplicar em cruz?",
      passos: [
        { expr: "a/b = c/x", explica: "Duas frações iguais.", status: "ok", professor: "'Fração igual à outra' é a definição de proporção." },
        { expr: "· bx dos dois lados", explica: "Elimina os denominadores.", status: "ok", professor: "Multiplico ambos os lados pelo mesmo — a igualdade se mantém." },
        { expr: "a·x = b·c", explica: "Sobra o cruzado.", status: "ok", professor: "É a mesma equação vista de outro jeito. Depois é só isolar o x." },
      ],
    },
  },

  momento04_explicacao: {
    titulo: "Resolvendo com regra de três direta",
    etapas: [
      {
        texto: "Caso 1 — 5 kg de arroz custam R$ 25. Quanto custam 8 kg?",
        exemploReal: {
          titulo: "🔎 Monte a tabela",
          contexto: "Grandeza direta clássica (preço × quantidade).",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "5/25 = 8/x",
            passos: [
              { expr: "5 kg → 25 R$", explica: "Linha 1.", status: "ok", professor: "Sempre coloque as duas grandezas em colunas separadas." },
              { expr: "8 kg → x R$", explica: "Linha 2 (incógnita).", status: "ok", professor: "Mantenha a MESMA ordem de grandezas nas duas linhas." },
              { expr: "5 · x = 25 · 8", explica: "Multiplica em cruz.", status: "ok", professor: "Como as grandezas são diretas, a regra é cruzada." },
              { expr: "5x = 200", explica: "Simplifica.", status: "ok", professor: "25 · 8 = 200." },
              { expr: "x = 200 ÷ 5 = 40", explica: "Isola x.", status: "ok", professor: "8 kg custam R$ 40. Confere o sentido: mais kg → mais dinheiro. ✅" },
            ],
            fatorada: "x = R$ 40",
          },
          destaque: "Sobe junto: se kg aumenta, preço aumenta.",
        },
      },
      {
        texto: "Caso 2 — Confira o SENTIDO antes de resolver.",
        exemploReal: {
          titulo: "🔎 As duas sobem juntas?",
          contexto: "Antes de fazer contas, teste com números fáceis.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Teste do dobro",
            passos: [
              { expr: "Se dobro a 1ª, a 2ª também dobra?", explica: "Pergunta chave.", status: "ok", professor: "Se SIM → direta. Regra de três cruzada." },
              { expr: "Se dobro a 1ª e a 2ª cai pela metade?", explica: "Outra situação.", status: "ok", professor: "Isso é inversa — próxima aula." },
              { expr: "Só depois resolva", explica: "Sempre teste antes.", status: "ok", professor: "Um erro comum é aplicar cruzado em inversa. O teste do dobro evita isso." },
            ],
          },
          destaque: "Direta: sobe junto, desce junto.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "3 canetas custam R$ 12. Quanto custam 7?",
    resposta: "R$ 28",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/12 = 7/x",
      passos: [
        { expr: "3 canetas → 12 R$; 7 canetas → x", explica: "Monte a tabela.", status: "ok", professor: "Direta: mais canetas, mais dinheiro." },
        { expr: "3 · x = 12 · 7", explica: "Cruzado.", status: "ok", professor: "É a proporção reescrita como equação." },
        { expr: "3x = 84", explica: "Simplifica.", status: "ok", professor: "12·7 = 84." },
        { expr: "x = 28", explica: "Divido por 3.", status: "ok", professor: "7 canetas custam R$ 28." },
      ],
    },
    passos: ["3·x = 12·7 = 84.", "x = 28."],
  },

  momento06_praticaGuiada: {
    enunciado: "5 kg = R$ 20. 8 kg =",
    dica: "5·x = 20·8.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 32" }, { nome: "R$ 25" }, { nome: "R$ 40" }],
      respostaCerta: "R$ 32",
      feedbackAcerto: "🎯 x = 160 / 5.",
      feedbackErro: "5x = 20·8 = 160. x = 32.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Uma torneira enche 6 L em 4 min. Em 10 min:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "L =",
      opcoes: [{ nome: "15 L" }, { nome: "12 L" }, { nome: "20 L" }],
      respostaCerta: "15 L",
      feedbackAcerto: "🎯 4·x = 6·10.",
      feedbackErro: "Direta: mais tempo, mais água. 4x = 60. x = 15.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um carro faz 12 km com 1 L de combustível. Vai fazer uma viagem de 90 km.",
    problema: "Quantos litros vai gastar?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "12/1 = 90/x",
      passos: [
        { expr: "12 km → 1 L; 90 km → x L", explica: "Tabela.", status: "ok", professor: "Direta: mais km, mais litros." },
        { expr: "12 · x = 1 · 90", explica: "Cruzado.", status: "ok", professor: "Proporção montada." },
        { expr: "12x = 90", explica: "Simplifica.", status: "ok", professor: "1·90 = 90." },
        { expr: "x = 90 / 12 = 7,5", explica: "Isola x.", status: "ok", professor: "Gastou 7,5 litros. Confere: 90 km ÷ 12 km/L = 7,5 L. ✅" },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "L =",
      opcoes: [{ nome: "7,5" }, { nome: "8" }, { nome: "9" }],
      respostaCerta: "7,5",
      feedbackAcerto: "🎯 12·x = 1·90.",
      feedbackErro: "Cruzado: 12x = 90. x = 7,5.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Direta = razão constante (a/b = c/d).",
      "Sobem juntas ou descem juntas na MESMA proporção.",
      "Regra de três direta: multiplica em CRUZ.",
      "Sempre teste o sentido antes: 'se dobra, dobra também?'.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1:2 e 3:x. x =", opcoes: ["6", "5", "4"], correta: 0, feedbackAcerto: "🎉 Cruzado.", feedbackErro: "1·x = 2·3." },
      { pergunta: "10 unidades em 20 min. 15 em ?", opcoes: ["30 min", "25 min", "40 min"], correta: 0, feedbackAcerto: "🎉 Direta.", feedbackErro: "10·x = 20·15." },
      { pergunta: "2 pães → R$ 5. 6 pães →", opcoes: ["R$ 15", "R$ 10", "R$ 12"], correta: 0, feedbackAcerto: "🎉 Triplo.", feedbackErro: "2·x = 5·6." },
      { pergunta: "Diretas têm razão:", opcoes: ["Constante", "Crescente", "Zero"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Definição de direta." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Receitas em escala",
    materiais: ["Uma receita da família", "Papel"],
    passos: [
      "Pegue uma receita para 4 pessoas.",
      "Recalcule os ingredientes para 6 pessoas usando regra de três direta.",
      "Anote a proporção montada para cada ingrediente.",
    ],
    registro: "📸 Foto da receita adaptada.",
  },

  recompensa: { xp: 170, moedas: 85 },
};
