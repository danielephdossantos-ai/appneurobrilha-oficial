import type { AulaV4 } from "../../types";

export const aula04_multPor3Digitos: AulaV4 = {
  slug: "u3-04-mult-por-3-digitos",
  titulo: "Multiplicar por 3 dígitos",
  iconeTrilha: "✖️",
  bncc: ["EF05MA07"],
  duracaoMin: 24,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Três linhas parciais",
    historia: "{NOME}, com 3 dígitos embaixo aparecem 3 LINHAS: uma pra U, uma pra D (com 1 zero) e uma pra C (com 2 zeros).",
  },
  momento02_exploracao: {
    instrucao: "Regra dos deslocamentos.",
    cenas: [
      { tipo: "texto", texto: "Linha U: sem zeros. Linha D: 1 zero. Linha C: 2 zeros.", destaque: true },
      { tipo: "texto", texto: "No fim, some as 3 linhas." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "125 × 234?",
    pista: "125 × 4, 125 × 30, 125 × 200.",
    revelacao: "500 + 3.750 + 25.000 = 29.250.",
  },
  momento04_explicacao: {
    titulo: "Algoritmo de 3 dígitos",
    etapas: [
      { texto: "Exemplo: 142 × 213." },
      { texto: "142 × 3 = 426." },
      { texto: "142 × 1 = 142 → 1.420." },
      { texto: "142 × 2 = 284 → 28.400." },
      { texto: "Some: 426 + 1.420 + 28.400 = 30.246." },
    ],
  },
  momento05_modelagem: {
    enunciado: "132 × 145.",
    resposta: "19.140",
    passos: ["132 × 5 = 660.", "132 × 4 = 528 → 5.280.", "132 × 1 = 132 → 13.200.", "660 + 5.280 + 13.200 = 19.140."],
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 108 × 235.",
    dica: "Cuidado com os deslocamentos.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "25.380" }, { nome: "25.280" }, { nome: "25.480" }],
      respostaCerta: "25.380",
      feedbackAcerto: "🎯 540 + 3.240 + 21.600 = 25.380.",
      feedbackErro: "108×5=540, 108×30=3.240, 108×200=21.600 → 25.380.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 214 × 132.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "28.248" }, { nome: "28.148" }, { nome: "28.348" }],
      respostaCerta: "28.248",
      feedbackAcerto: "🎯",
      feedbackErro: "214×2=428, 214×30=6.420, 214×100=21.400 → 28.248.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cinema com 245 poltronas em 128 sessões lotadas.",
    problema: "Total de ingressos?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "31.360" }, { nome: "31.260" }, { nome: "31.460" }],
      respostaCerta: "31.360",
      feedbackAcerto: "🎯 245 × 128 = 31.360.",
      feedbackErro: "245×8=1.960, 245×20=4.900, 245×100=24.500 → 31.360.",
    },
  },
  momento09_revisao: {
    pontos: ["3 linhas, 3 deslocamentos.", "Some tudo no fim.", "Uma casa por dígito."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "104 × 152 = ?", opcoes: ["15.808", "15.708", "15.908"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "15.808." },
      { pergunta: "215 × 134 = ?", opcoes: ["28.810", "28.710", "28.910"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "28.810." },
      { pergunta: "132 × 108 = ?", opcoes: ["14.256", "14.156", "14.356"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "14.256." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Estoque em 3 dígitos",
    materiais: ["Papel"],
    passos: ["Escolha 2 números de 3 dígitos.", "Multiplique com 3 linhas parciais."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 90 },
};
