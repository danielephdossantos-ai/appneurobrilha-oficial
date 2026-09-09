import type { AulaV4 } from "../../types";

export const aula03_volumeSi: AulaV4 = {
  slug: "u7-03-volume-si",
  titulo: "Volume e Sistema Internacional de medidas",
  iconeTrilha: "📦",
  bncc: ["EF06MA24"],
  duracaoMin: 24,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Espaço ocupado",
    historia: "{NOME}, quanta água cabe numa caixa? Isso é VOLUME. E aprender a converter m, cm, km, L, mL é essencial.",
  },

  momento02_exploracao: {
    instrucao: "Volume do bloco: base × altura × largura.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Unidades no SI",
        cabecalhos: ["Grandeza", "Unidade base", "Múltiplos"],
        linhas: [
          { rotulo: "Compr", valores: ["Comprimento", "metro (m)", "mm, cm, dm, km"] },
          { rotulo: "Massa", valores: ["Massa", "grama (g)", "mg, kg, t"] },
          { rotulo: "Volume", valores: ["Volume", "litro (L) / m³", "mL, L, m³"] },
        ],
      },
      { tipo: "texto", texto: "1 m = 100 cm · 1 km = 1.000 m · 1 kg = 1.000 g · 1 L = 1.000 mL", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Caixa 4 × 3 × 2. Volume?",
    pista: "b·h·l.",
    revelacao: "24 unidades cúbicas.",
  },

  momento04_explicacao: {
    titulo: "Volume e conversões",
    etapas: [
      {
        texto: "Volume do bloco: V = comp × larg × alt.",
        exemploReal: {
          contexto: "Caixa 5 × 3 × 2 cm",
          visualMat: {
            tipo: "solido",
            forma: "cubo",
            legenda: "Bloco 5·3·2",
          },
          destaque: "V = 30 cm³.",
        },
      },
      {
        texto: "Conversão comprimento: cada 'degrau' multiplica ou divide por 10.",
        exemploReal: {
          contexto: "km → hm → dam → m → dm → cm → mm",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["km", "hm", "dam", "m", "dm", "cm", "mm"],
            linhas: [{ rotulo: "×10", valores: ["×10", "×10", "×10", "×10", "×10", "×10", "×10"] }],
          },
          destaque: "3 m = 300 cm = 3.000 mm.",
        },
      },
      {
        texto: "1 L = 1 dm³ = 1.000 cm³.",
        exemploReal: {
          contexto: "Garrafa de 2 L",
          destaque: "= 2.000 mL = 2.000 cm³.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Caixa 10 cm × 10 cm × 10 cm. Volume em cm³ e em L?",
    resposta: "1.000 cm³ = 1 L",
    passos: ["V = 10³ = 1.000 cm³.", "1.000 cm³ = 1 L."],
  },

  momento06_praticaGuiada: {
    enunciado: "2,5 m em cm.",
    dica: "×100.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "250 cm" }, { nome: "25 cm" }, { nome: "2500 cm" }],
      respostaCerta: "250 cm",
      feedbackAcerto: "🎯",
      feedbackErro: "1 m = 100 cm.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "1,5 kg em g.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.500 g" }, { nome: "150 g" }, { nome: "15.000 g" }],
      respostaCerta: "1.500 g",
      feedbackAcerto: "🎯 ×1.000.",
      feedbackErro: "1 kg = 1.000 g.",
    },
  },

  momento08_aplicacao: {
    contexto: "Piscina 4 m × 3 m × 1,5 m.",
    problema: "Volume em m³?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "18 m³" }, { nome: "12 m³" }, { nome: "24 m³" }],
      respostaCerta: "18 m³",
      feedbackAcerto: "🎯 4·3·1,5 = 18.",
      feedbackErro: "V = c·l·h.",
    },
  },

  momento09_revisao: {
    pontos: ["Volume = base × altura × largura.", "SI: metro, grama, litro.", "×10 ou ÷10 entre degraus."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "500 mL = quantos L?", opcoes: ["0,5", "5", "50"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷1.000." },
      { pergunta: "1 km = m?", opcoes: ["1.000", "100", "10.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "km = 1.000 m." },
      { pergunta: "Volume cubo lado 2:", opcoes: ["8", "6", "4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2³." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Volume da caixa",
    materiais: ["Trena, caixa"],
    passos: ["Meça uma caixa em casa.", "Calcule volume em cm³."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 95 },
};
