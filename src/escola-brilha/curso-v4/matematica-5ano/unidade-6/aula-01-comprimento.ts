import type { AulaV4 } from "../../types";

export const aula01_comprimento: AulaV4 = {
  slug: "u6-01-comprimento",
  titulo: "Comprimento: km, m, cm, mm",
  iconeTrilha: "📏",
  bncc: ["EF05MA19"],
  duracaoMin: 22,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "A régua real",
    historia: "{NOME}, para medir comprimento usamos metro (m) e seus vizinhos: km (grande), cm e mm (pequenos).",
  },
  momento02_exploracao: {
    instrucao: "Escala de 10 em 10 (menos km/m que é 1000).",
    cenas: [
      { tipo: "texto", texto: "1 km = 1.000 m. 1 m = 100 cm. 1 cm = 10 mm.", destaque: true },
      { tipo: "texto", texto: "Pra transformar: multiplicar (menor) ou dividir (maior)." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "2,5 m em cm?",
    pista: "× 100.",
    revelacao: "250 cm.",
  },
  momento04_explicacao: {
    titulo: "Transformações",
    etapas: [
      { texto: "3 km = 3.000 m." },
      { texto: "450 cm = 4,5 m." },
      { texto: "25 mm = 2,5 cm." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Transforme 1,2 km em m.",
    resposta: "1.200 m",
    passos: ["× 1.000.", "1,2 × 1.000 = 1.200."],
  },
  momento06_praticaGuiada: {
    enunciado: "Quantos cm em 3,5 m?",
    dica: "× 100.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "350 cm" }, { nome: "3.500 cm" }, { nome: "35 cm" }],
      respostaCerta: "350 cm",
      feedbackAcerto: "🎯",
      feedbackErro: "3,5 × 100 = 350.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "600 mm em cm.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "60 cm" }, { nome: "6 cm" }, { nome: "600 cm" }],
      respostaCerta: "60 cm",
      feedbackAcerto: "🎯 ÷ 10.",
      feedbackErro: "60 cm.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um pátio tem 25 m. Corri 8 voltas.",
    problema: "Distância em km?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,2 km" }, { nome: "2 km" }, { nome: "0,02 km" }],
      respostaCerta: "0,2 km",
      feedbackAcerto: "🎯 8 × 25 = 200 m = 0,2 km.",
      feedbackErro: "200 m = 0,2 km.",
    },
  },
  momento09_revisao: {
    pontos: ["km→m: ×1000.", "m→cm: ×100.", "cm→mm: ×10.", "O inverso: dividir."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5 m = ? cm", opcoes: ["500", "50", "5000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "500." },
      { pergunta: "2 km = ? m", opcoes: ["2000", "200", "20"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2.000." },
      { pergunta: "80 mm = ? cm", opcoes: ["8", "80", "800"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "8." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Medindo em casa",
    materiais: ["Trena ou fita"],
    passos: ["Meça 3 objetos.", "Anote em cm.", "Transforme em m."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 140, moedas: 75 },
};
