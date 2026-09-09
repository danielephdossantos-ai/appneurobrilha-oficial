import type { AulaV4 } from "../../types";

export const aula01_ideiaDeDividir: AulaV4 = {
  slug: "u4-01-ideia-de-dividir",
  titulo: "Dividir é repartir em partes iguais",
  iconeTrilha: "➗",
  bncc: ["EF04MA07"],
  duracaoMin: 20,
  metodologias: ["cpa", "kamii", "vergnaud"],

  momento01_motivacao: {
    titulo: "Repartir por igual",
    historia:
      "{NOME}, dividir é repartir em partes iguais. 24 balas para 6 amigos → cada um leva 4. Multiplicação e divisão são irmãs: 6 × 4 = 24, então 24 ÷ 6 = 4.",
  },
  momento02_exploracao: {
    instrucao: "A tabuada resolve a divisão exata.",
    cenas: [
      { tipo: "tabuada", fator: 6, ate: 10, titulo: "Tabuada do 6" },
      { tipo: "texto", texto: "24 ÷ 6: procuro na tabuada do 6 o resultado 24. Achei em 6×4=24. Então 24÷6=4.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "E se não achar exato?",
    pista: "Fica resto.",
    revelacao: "25 ÷ 6: o mais próximo é 6×4=24. Sobra 25−24=1. Então 25÷6 = 4, resto 1.",
  },
  momento04_explicacao: {
    titulo: "Rodadas de distribuição",
    etapas: [
      {
        texto: "12 doces pra 3 crianças: dou 1 pra cada, sobra 9. Dou mais 1 pra cada, sobra 6. Continuo até zerar.",
        exemploReal: {
          contexto: "3 rodadas de 3 doces = 9. Última rodada + 1 = 12. Cada um levou 4.",
          destaque: "12 ÷ 3 = 4.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Reparta 20 balas em 4 saquinhos iguais.",
    passos: ["Tabuada do 4: 4, 8, 12, 16, 20.", "20 apareceu em 4×5.", "20 ÷ 4 = 5."],
    resposta: "5 balas por saquinho",
  },
  momento06_praticaGuiada: {
    enunciado: "18 ÷ 3 = ?",
    dica: "Tabuada do 3.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6" }, { nome: "5" }, { nome: "7" }],
      respostaCerta: "6",
      feedbackAcerto: "🎯 6 (3×6=18).",
      feedbackErro: "Procure 18 na tabuada do 3: 3×6=18.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "35 ÷ 5 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "6" }, { nome: "8" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 7 (5×7=35).",
      feedbackErro: "5×7=35.",
    },
  },
  momento08_aplicacao: {
    contexto: "48 laranjas para dividir em 8 caixas iguais.",
    problema: "Quantas laranjas por caixa?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6" }, { nome: "5" }, { nome: "8" }],
      respostaCerta: "6",
      feedbackAcerto: "🎯 6.",
      feedbackErro: "8×6=48.",
    },
  },
  momento09_revisao: {
    pontos: ["Dividir = repartir igual.", "Tabuada resolve a divisão exata."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "24 ÷ 4 = ?", opcoes: ["6", "5", "7"], correta: 0, feedbackAcerto: "🎉 6.", feedbackErro: "4×6=24." },
      { pergunta: "36 ÷ 6 = ?", opcoes: ["6", "5", "7"], correta: 0, feedbackAcerto: "🎉 6.", feedbackErro: "6×6=36." },
      { pergunta: "45 ÷ 9 = ?", opcoes: ["5", "4", "6"], correta: 0, feedbackAcerto: "🎉 5.", feedbackErro: "9×5=45." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Dividindo em casa",
    materiais: ["12 objetos pequenos"],
    passos: ["Junte 12 objetos.", "Divida em 2, depois em 3, depois em 4 grupos iguais.", "Anote quantos ficaram em cada grupo."],
    registro: "📸 Foto dos grupos.",
  },
  recompensa: { xp: 200, moedas: 100 },
};
