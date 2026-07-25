import type { AulaV4 } from "../../types";

/**
 * Padrão-piloto — Missão U5: Mestre das Proporcionalidades.
 * Fluxograma de decisão + combos %/juros/regra de três com passo a passo.
 */
export const aula06_missao: AulaV4 = {
  slug: "u5-06-missao",
  titulo: "Missão — Mestre das Proporcionalidades",
  iconeTrilha: "🏅",
  bncc: ["EF08MA04", "EF08MA12", "EF08MA13"],
  duracaoMin: 26,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Kit da vida real",
    historia:
      "{NOME}, tudo que aprendeu na U5 aparece no dia a dia: preços, juros, receitas, velocidade. Hoje você vira mestre em ESCOLHER a ferramenta certa para cada situação.",
  },

  momento02_exploracao: {
    instrucao: "Fluxograma de decisão para escolher a técnica.",
    cenas: [
      {
        tipo: "trinomioPassoAPasso",
        trinomio: "Que ferramenta usar?",
        passos: [
          { expr: "Tem % subindo/descendo? → Fator (1 ± i)", explica: "Aumento/desconto.", status: "ok", professor: "Palavras-chave: 'aumento', 'desconto', 'sobe X%', 'cai Y%'." },
          { expr: "Tem custo e venda? → (V − C)/C · 100", explica: "Lucro/prejuízo.", status: "ok", professor: "Comércio; base é o CUSTO." },
          { expr: "Tem tempo e taxa? → J = C · i · t", explica: "Juros simples.", status: "ok", professor: "Palavras-chave: 'ao mês/ano', 'em X períodos'." },
          { expr: "Sobem juntas? → Regra de três direta (cruzado)", explica: "Direta.", status: "ok", professor: "Preço × quantidade, distância × combustível." },
          { expr: "Sobe uma, desce outra? → Inversa (em linha)", explica: "Inversa.", status: "ok", professor: "Pessoas × tempo, velocidade × tempo." },
        ],
        fatorada: "5 ferramentas, 1 lei de decisão",
        legenda: "Sempre releia o enunciado antes de resolver",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como escolher rápido a ferramenta certa?",
    pista: "Cada palavra do enunciado dá pista. 'Desconto' → fator; 'em X meses' → juros; 'quanto custam Y…' → regra de três.",
    revelacao: "Leia devagar, sublinhe as grandezas e escolha a ferramenta com base no que APARECE.",
  },

  momento04_explicacao: {
    titulo: "Combos — ferramentas juntas",
    etapas: [
      {
        texto: "Combo 1 — Preço à prazo (fator + juros).",
        exemploReal: {
          titulo: "🔎 Duas ferramentas na mesma conta",
          contexto: "Produto de R$ 500 pago em 4 meses, com juros simples de 2% ao mês.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Combo: J = C·i·t depois M = C + J",
            passos: [
              { expr: "C = 500, i = 0,02, t = 4", explica: "Dados.", status: "ok", professor: "Sempre liste o que sabe antes de aplicar a fórmula." },
              { expr: "J = 500 · 0,02 · 4", explica: "Juros simples.", status: "ok", professor: "Fórmula dos juros: J = C·i·t." },
              { expr: "J = 40", explica: "Rendimento total.", status: "ok", professor: "500·0,02 = 10. 10·4 = 40." },
              { expr: "M = 500 + 40 = 540", explica: "Total a pagar.", status: "ok", professor: "R$ 540 no total; cada parcela sai por 540 ÷ 4 = 135." },
            ],
            fatorada: "M = R$ 540",
          },
          destaque: "Compra à prazo: sempre pague J além do C.",
        },
      },
      {
        texto: "Combo 2 — Escolher entre direta e inversa.",
        exemploReal: {
          titulo: "🔎 Teste do dobro decide",
          contexto: "Antes de resolver qualquer regra de três, teste o sentido.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Regra da escolha",
            passos: [
              { expr: "Se dobra e dobra → direta", explica: "Cruzado.", status: "ok", professor: "Preço × quantidade: mais unidades, mais reais." },
              { expr: "Se dobra e cai pela metade → inversa", explica: "Em linha.", status: "ok", professor: "Pessoas × tempo: mais mão de obra, menos horas." },
              { expr: "Se nada muda entre elas → nenhuma", explica: "Cuidado.", status: "ok", professor: "Nem toda situação é proporcional. Ex.: idade × altura." },
            ],
          },
          destaque: "Sempre teste antes de multiplicar.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Lucro de 30% sobre custo de R$ 200. Qual o preço de venda?",
    resposta: "R$ 260",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "V = 200 · 1,30",
      passos: [
        { expr: "i = 30% = 0,30", explica: "Margem em decimal.", status: "ok", professor: "÷100." },
        { expr: "f = 1 + 0,30 = 1,30", explica: "Fator de aumento.", status: "ok", professor: "Aplico sobre o custo." },
        { expr: "V = 200 · 1,30 = 260", explica: "Preço de venda.", status: "ok", professor: "Confere: 30% de 200 é 60. 200+60=260." },
      ],
    },
    passos: ["Fator 1,30.", "200 · 1,30 = R$ 260."],
  },

  momento06_praticaGuiada: {
    enunciado: "6 operários fazem em 8 dias. 4 operários fazem em:",
    dica: "Inversa. Produto = produto.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "dias =",
      opcoes: [{ nome: "12" }, { nome: "6" }, { nome: "10" }],
      respostaCerta: "12",
      feedbackAcerto: "🎯 6·8 = 4·x.",
      feedbackErro: "48/4 = 12. Menos operários, mais dias.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Preço R$ 80 com desconto de 25%. Novo preço:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 60" }, { nome: "R$ 20" }, { nome: "R$ 55" }],
      respostaCerta: "R$ 60",
      feedbackAcerto: "🎯 80 · 0,75.",
      feedbackErro: "Fator de desconto: 1 − 0,25 = 0,75.",
    },
  },

  momento08_aplicacao: {
    contexto: "Empréstimo de R$ 1500 a 3% ao mês (juros simples) por 6 meses.",
    problema: "Quanto vai devolver no total?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "M = 1500 + 1500·0,03·6",
      passos: [
        { expr: "i = 3% = 0,03", explica: "Decimal.", status: "ok", professor: "÷100." },
        { expr: "J = 1500 · 0,03 · 6", explica: "Fórmula.", status: "ok", professor: "Substitua na ordem." },
        { expr: "1500 · 0,03 = 45", explica: "Juros mensais.", status: "ok", professor: "3% de 1500." },
        { expr: "45 · 6 = 270", explica: "Juros em 6 meses.", status: "ok", professor: "Fixo por mês." },
        { expr: "M = 1500 + 270 = 1770", explica: "Montante final.", status: "ok", professor: "R$ 270 é o que a operação custa. Guarde esse número para comparar com outras ofertas." },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "M =",
      opcoes: [{ nome: "R$ 1770" }, { nome: "R$ 270" }, { nome: "R$ 1800" }],
      respostaCerta: "R$ 1770",
      feedbackAcerto: "🎯 J=270 e M=1770.",
      feedbackErro: "J = 1500·0,03·6 = 270. M = C + J.",
    },
  },

  momento09_revisao: {
    pontos: [
      "5 ferramentas: fator (aumento/desconto), lucro/prejuízo, juros simples, direta, inversa.",
      "Cada palavra do enunciado dá pista da ferramenta.",
      "Sempre teste o sentido antes de usar cruzado ou em linha.",
      "Duas ferramentas podem aparecer juntas — resolva uma de cada vez.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "R$ 50 com aumento de 10%:", opcoes: ["R$ 55", "R$ 45", "R$ 60"], correta: 0, feedbackAcerto: "🎉 × 1,10.", feedbackErro: "Fator 1,10." },
      { pergunta: "3 op → 12 dias. 4 op →", opcoes: ["9 dias", "16 dias", "12 dias"], correta: 0, feedbackAcerto: "🎉 Inversa.", feedbackErro: "3·12 = 4·x → 9." },
      { pergunta: "C=100, i=1% am, t=5 meses. J =", opcoes: ["R$ 5", "R$ 1", "R$ 50"], correta: 0, feedbackAcerto: "🎉 100·0,01·5.", feedbackErro: "J = C·i·t." },
      { pergunta: "20% de 200:", opcoes: ["40", "20", "10"], correta: 0, feedbackAcerto: "🎉 0,20·200.", feedbackErro: "0,20 · 200 = 40." },
      { pergunta: "Custo 100, venda 90:", opcoes: ["Prejuízo 10%", "Lucro 10%", "Empate"], correta: 0, feedbackAcerto: "🎉 V<C.", feedbackErro: "10/100 sobre o custo." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma — Mestre das Proporcionalidades",
    materiais: ["Papel", "Caneta colorida"],
    passos: [
      "Monte um diploma com o título 'Mestre das Proporcionalidades'.",
      "Liste 3 momentos do seu dia em que usou porcentagem, juros ou regra de três.",
      "Peça para alguém da família assinar.",
    ],
    registro: "📸 Foto do diploma preenchido.",
  },

  recompensa: { xp: 240, moedas: 120, medalha: "Mestre das Proporcionalidades" },
};
