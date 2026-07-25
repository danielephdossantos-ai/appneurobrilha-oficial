import type { AulaV4 } from "../../types";

export const aula04_multPor2Digitos: AulaV4 = {
  slug: "u3-04-mult-por-2-digitos",
  titulo: "Multiplicar por 2 algarismos",
  iconeTrilha: "🔢",
  bncc: ["EF04MA06"],
  duracaoMin: 24,
  metodologias: ["cpa", "skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Duas linhas de multiplicação",
    historia:
      "{NOME}, quando o de baixo tem 2 algarismos, faço DUAS contas: primeiro pela unidade, depois pela dezena (com 1 zero embaixo). No fim, SOMO as duas linhas.",
  },
  momento02_exploracao: {
    instrucao: "Duas parciais + soma.",
    cenas: [
      { tipo: "texto", texto: "Linha 1: multiplico pela UNIDADE do de baixo.", destaque: true },
      { tipo: "texto", texto: "Linha 2: multiplico pela DEZENA, colocando 0 na unidade." },
      { tipo: "texto", texto: "Somo as duas linhas." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que colocar um zero na segunda linha?",
    pista: "Pense em valor posicional.",
    revelacao: "A dezena vale ×10. O zero segura a casa das unidades. Sem ele, a soma sai errada.",
  },
  momento04_explicacao: {
    titulo: "Algoritmo com 2 dígitos",
    etapas: [
      {
        texto: "Vamos multiplicar 34 × 23.",
        exemploReal: {
          contexto: "Linha 1 = 34×3 = 102. Linha 2 = 34×2 = 68 (mas em dezenas → 680). Soma = 782.",
          destaque: "34 × 23 = 782.",
        },
      },
      {
        texto: "As duas parciais somadas dão o total.",
        exemploReal: {
          contexto: "Somando 102 + 680.",
          destaque: "102 + 680 = 782.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [102, 680],
            resultado: 782,
            passos: [
              { coluna: "U", fala: "2 + 0 = 2.", digito: 2 },
              { coluna: "D", fala: "0 + 8 = 8.", digito: 8 },
              { coluna: "C", fala: "1 + 6 = 7.", digito: 7 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Multiplique 45 × 32.",
    passos: [
      "Linha 1: 45×2 = 90.",
      "Linha 2: 45×3 = 135 (em dezenas → 1.350).",
      "Soma: 90 + 1.350 = 1.440.",
    ],
    resposta: "1.440",
    casasValor: { numero: 1440, mostrarDecomposicao: true, extenso: "mil, quatrocentos e quarenta" },
  },
  momento06_praticaGuiada: {
    enunciado: "23 × 14 = ?",
    dica: "Duas parciais: pela unidade e pela dezena (com 0).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "322" }, { nome: "312" }, { nome: "332" }],
      respostaCerta: "322",
      feedbackAcerto: "🎯 322.",
      feedbackErro: "23×4=92. 23×1=23 (→230). 92+230=322.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "36 × 25 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "900" }, { nome: "880" }, { nome: "920" }],
      respostaCerta: "900",
      feedbackAcerto: "🎯 900.",
      feedbackErro: "36×5=180. 36×2=72 (→720). 180+720=900.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cada caixa tem 24 laranjas.",
    problema: "15 caixas têm quantas laranjas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "360" }, { nome: "340" }, { nome: "380" }],
      respostaCerta: "360",
      feedbackAcerto: "🎯 360 laranjas.",
      feedbackErro: "24×5=120. 24×1=24 (→240). 120+240=360.",
    },
  },
  momento09_revisao: {
    pontos: ["Duas linhas.", "A 2ª linha usa 0 na unidade.", "Some as parciais."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "12 × 15 = ?", opcoes: ["180", "170", "190"], correta: 0, feedbackAcerto: "🎉 180.", feedbackErro: "12×5=60, 12×1=12(→120). 60+120=180." },
      { pergunta: "23 × 21 = ?", opcoes: ["483", "463", "503"], correta: 0, feedbackAcerto: "🎉 483.", feedbackErro: "23×1=23, 23×2=46(→460). 23+460=483." },
      { pergunta: "45 × 14 = ?", opcoes: ["630", "620", "640"], correta: 0, feedbackAcerto: "🎉 630.", feedbackErro: "45×4=180, 45×1=45(→450). 180+450=630." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Mercado do Reino",
    materiais: ["Papel"],
    passos: ["Escolha um preço até 99 reais.", "Compre 24 unidades e some.", "Arme a multiplicação em 2 linhas."],
    registro: "📸 Foto da conta armada.",
  },
  recompensa: { xp: 220, moedas: 110 },
};
