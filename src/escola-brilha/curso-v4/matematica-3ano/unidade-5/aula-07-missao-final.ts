import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU5: AulaV4 = {
  slug: "u5-07-missao-final",
  titulo: "Engenheiro de Medidas",
  iconeTrilha: "🏆",
  bncc: ["EF03MA17", "EF03MA19", "EF03MA20", "EF03MA22", "EF03MA24"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Missão do dia",
    historia: "{NOME}, você é o Engenheiro da Cidade. Precisa comprar tinta, medir uma parede e cronometrar a obra.",
  },
  momento02_exploracao: {
    instrucao: "Todas as unidades.",
    cenas: [
      { tipo: "texto", texto: "cm/m · g/kg · mL/L · min/h · R$." },
      { tipo: "texto", texto: "Sempre converter para a mesma unidade antes de somar.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual a maior dificuldade em medidas?",
    pista: "Trocar de unidade sem errar.",
    revelacao: "Multiplicar/dividir por 100, 1000 ou 60 muda a unidade.",
  },
  momento04_explicacao: {
    titulo: "Missão engenheiro",
    etapas: [
      {
        texto: "Parede de 4 m. Rolo pinta 2 m. Rolos necessários?",
        exemploReal: {
          contexto: "Divisão.",
          destaque: "4 ÷ 2 = 2 rolos.",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [4, 2],
            resultado: 2,
            passos: [{ coluna: "U", fala: "4 ÷ 2 = 2 rolos.", digito: 2 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "1 balde de 2 L; usei 750 mL. Sobra?",
    passos: ["2 L = 2000 mL.", "2000 − 750 = 1250.", "1 L e 250 mL."],
    resposta: "1 L e 250 mL",
    casasValor: { numero: 1250, mostrarDecomposicao: true, extenso: "mil duzentos e cinquenta" },
  },
  momento06_praticaGuiada: {
    enunciado: "3 kg de cimento = ? g",
    dica: "×1000.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3000" }, { nome: "300" }, { nome: "30000" }],
      respostaCerta: "3000",
      feedbackAcerto: "🎉 3000.",
      feedbackErro: "3×1000=3000.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Comprou tinta R$ 45 e pincel R$ 12. Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 57" }, { nome: "R$ 47" }, { nome: "R$ 67" }],
      respostaCerta: "R$ 57",
      feedbackAcerto: "🎯 45+12=57.",
      feedbackErro: "45+12=57.",
    },
  },
  momento08_aplicacao: {
    contexto: "A obra começa 8h e leva 2h30.",
    problema: "Termina às:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "10h30" }, { nome: "10h" }, { nome: "11h" }],
      respostaCerta: "10h30",
      feedbackAcerto: "🎯 8h + 2h30 = 10h30.",
      feedbackErro: "8h + 2h30 = 10h30.",
    },
  },
  momento09_revisao: {
    pontos: ["Todas as unidades da unidade.", "Converta antes de operar."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Meia hora + 45 min = ?",
      opcoes: [{ nome: "1h15" }, { nome: "1h" }, { nome: "1h30" }],
      respostaCerta: "1h15",
      feedbackAcerto: "🎉 30+45=75 min = 1h15.",
      feedbackErro: "75 min = 1h15.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2 m + 50 cm = ? cm", opcoes: ["250", "52", "2050"], correta: 0, feedbackAcerto: "🎉 250.", feedbackErro: "200+50=250." },
      { pergunta: "1 kg − 300 g = ? g", opcoes: ["700", "300", "1300"], correta: 0, feedbackAcerto: "🎉 700.", feedbackErro: "1000−300=700." },
      { pergunta: "R$ 100 − R$ 37 = ?", opcoes: ["R$ 63", "R$ 73", "R$ 53"], correta: 0, feedbackAcerto: "🎉 R$ 63.", feedbackErro: "100−37=63." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Minha obra em casa",
    materiais: ["Régua, balança, relógio, dinheiro de brinquedo"],
    passos: ["Meça uma parede.", "Pese um alimento.", "Cronometre uma atividade.", "Simule um pagamento."],
    registro: "📸 Foto da missão.",
  },
  recompensa: { xp: 300, moedas: 150 },
};
