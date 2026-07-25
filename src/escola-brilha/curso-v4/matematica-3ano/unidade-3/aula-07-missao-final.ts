import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU3: AulaV4 = {
  slug: "u3-07-missao-final",
  titulo: "Fábrica dos Grupos",
  iconeTrilha: "🏆",
  bncc: ["EF03MA07", "EF03MA09"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Fábrica em ação",
    historia: "{NOME}, você foi contratado(a) na Fábrica dos Grupos. Cada linha produz caixas com quantidade fixa. Sua missão: calcular o total de produção do dia.",
  },
  momento02_exploracao: {
    instrucao: "Todas as fórmulas juntas.",
    cenas: [
      { tipo: "texto", texto: "Multiplicar = somar grupos iguais." },
      { tipo: "texto", texto: "Dobro ×2 · Metade ÷2.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como escolher a conta certa?",
    pista: "Grupos iguais → multiplicação.",
    revelacao: "Leia o enunciado com atenção: 'cada' e 'grupos de' pedem multiplicação.",
  },
  momento04_explicacao: {
    titulo: "Revisão relâmpago",
    etapas: [
      {
        texto: "Fábrica: 6 linhas produzem 8 caixas cada.",
        exemploReal: {
          contexto: "6 × 8.",
          destaque: "Total = 48 caixas.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [6, 8],
            resultado: 48,
            passos: [
              { coluna: "U", fala: "6 vezes 8 = 48. Escrevo 8 na unidade.", digito: 8 },
              { coluna: "D", fala: "Escrevo 4 na dezena.", digito: 4 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "7 linhas × 9 caixas = ?",
    passos: ["7×9 = 63.", "×9 = ×10 − 7."],
    resposta: "7 × 9 = 63",
    casasValor: { numero: 63, mostrarDecomposicao: true, extenso: "sessenta e três" },
  },
  momento06_praticaGuiada: {
    enunciado: "Dobro da produção de 25?",
    dica: "25+25.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "50" }, { nome: "45" }, { nome: "55" }],
      respostaCerta: "50",
      feedbackAcerto: "🎉 50.",
      feedbackErro: "25+25=50.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "8 × 7 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "56" }, { nome: "48" }, { nome: "64" }],
      respostaCerta: "56",
      feedbackAcerto: "🎯 56.",
      feedbackErro: "8×7=56.",
    },
  },
  momento08_aplicacao: {
    contexto: "A fábrica trabalhou 5 dias. Cada dia produziu 6 lotes.",
    problema: "Total de lotes:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "30" }, { nome: "25" }, { nome: "35" }],
      respostaCerta: "30",
      feedbackAcerto: "🎯 5 × 6 = 30.",
      feedbackErro: "5×6=30.",
    },
  },
  momento09_revisao: {
    pontos: ["Grupos iguais.", "Dobro/metade.", "Tabuadas até 10."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Metade de 80?",
      opcoes: [{ nome: "40" }, { nome: "30" }, { nome: "50" }],
      respostaCerta: "40",
      feedbackAcerto: "🎉 40.",
      feedbackErro: "40+40=80.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "6 × 7 = ?", opcoes: ["42", "36", "48"], correta: 0, feedbackAcerto: "🎉 42.", feedbackErro: "6×7=42." },
      { pergunta: "Dobro de 45?", opcoes: ["90", "80", "100"], correta: 0, feedbackAcerto: "🎉 90.", feedbackErro: "45+45=90." },
      { pergunta: "9 × 5 = ?", opcoes: ["45", "40", "50"], correta: 0, feedbackAcerto: "🎉 45.", feedbackErro: "9×5=45." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sua mini-fábrica",
    materiais: ["Objetos em grupos"],
    passos: ["Monte 4 grupos de 6 objetos.", "Calcule o total multiplicando."],
    registro: "📸 Foto da mini-fábrica.",
  },
  recompensa: { xp: 300, moedas: 150 },
};
