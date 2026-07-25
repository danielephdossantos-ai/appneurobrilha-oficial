import type { AulaV4 } from "../../types";

export const aula05_sequencias: AulaV4 = {
  slug: "u1-05-sequencias",
  titulo: "Sequências e regularidades",
  iconeTrilha: "🔁",
  bncc: ["EF05MA10"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O padrão do Império",
    historia:
      "{NOME}, o escriba deixou algumas contas em branco na tabela do Império. Todas seguem um PADRÃO. Descobrir o padrão é achar o SALTO entre dois termos vizinhos.",
  },
  momento02_exploracao: {
    instrucao: "Padrão = salto constante entre termos vizinhos.",
    cenas: [
      { tipo: "texto", texto: "Ache o salto: subtraia dois termos vizinhos.", destaque: true },
      { tipo: "texto", texto: "Confirme com outro par. Se der o mesmo, é o salto." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "1.500 · 3.000 · 4.500 · ? — qual o próximo?",
    pista: "3.000 − 1.500 = 1.500 (salto). Confirme: 4.500 − 3.000 = 1.500.",
    revelacao: "Próximo = 4.500 + 1.500 = 6.000. Salto de +1.500.",
  },
  momento04_explicacao: {
    titulo: "Sequências sem casas de valor — só o salto importa",
    etapas: [
      { texto: "12.000 · 22.000 · 32.000 · ? · Salto: 22.000 − 12.000 = 10.000. Próximo: 32.000 + 10.000 = 42.000." },
      { texto: "Sequência decrescente: 900 · 800 · 700 · ? · Salto: 900 − 800 = 100 (para baixo). Próximo: 700 − 100 = 600." },
      { texto: "Salto pode ser multiplicativo: 2 · 4 · 8 · 16 · ? · Cada termo é DOBRO do anterior. Próximo: 32." },
    ],
  },
  momento05_modelagem: {
    enunciado: "3.150 · 3.200 · 3.250 · 3.300 · ___",
    resposta: "3.350",
    passos: ["Salto: 3.200 − 3.150 = 50.", "Confirmando: 3.250 − 3.200 = 50. ✓", "Próximo: 3.300 + 50 = 3.350."],
  },
  momento06_praticaGuiada: {
    enunciado: "Complete: 15.000 · 20.000 · 25.000 · ___",
    dica: "Ache o salto pela diferença.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Próximo termo?",
      opcoes: [{ nome: "30.000" }, { nome: "29.000" }, { nome: "35.000" }],
      respostaCerta: "30.000",
      feedbackAcerto: "🎯 Salto de +5.000.",
      feedbackErro: "20.000 − 15.000 = 5.000 → próximo é 30.000.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "1.024 · 512 · 256 · 128 · ___",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Próximo termo?",
      opcoes: [{ nome: "64" }, { nome: "0" }, { nome: "72" }],
      respostaCerta: "64",
      feedbackAcerto: "🎯 Cada termo é METADE do anterior.",
      feedbackErro: "1.024/2=512, 512/2=256… → 128/2=64.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um piloto anota o combustível: 40 L · 32 L · 24 L · 16 L · ___",
    problema: "Quanto sobra na próxima medição?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8 L" }, { nome: "12 L" }, { nome: "0 L" }],
      respostaCerta: "8 L",
      feedbackAcerto: "🎯 Salto −8 L.",
      feedbackErro: "40 − 32 = 8, 32 − 24 = 8 → 16 − 8 = 8 L.",
    },
  },
  momento09_revisao: {
    pontos: ["Salto = diferença entre termos vizinhos.", "Confirme com outro par.", "Salto pode ser aditivo (+/−) ou multiplicativo (×/÷)."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "6.400 · 6.800 · 7.200 · ___", opcoes: ["7.600", "7.400", "8.000"], correta: 0, feedbackAcerto: "🎉 +400.", feedbackErro: "Salto +400 → 7.600." },
      { pergunta: "500 · 250 · 125 · ___", opcoes: ["62,5", "60", "0"], correta: 0, feedbackAcerto: "🎉 Metade.", feedbackErro: "Cada é metade do anterior → 62,5." },
      { pergunta: "10 · 20 · 40 · 80 · ___", opcoes: ["160", "120", "100"], correta: 0, feedbackAcerto: "🎉 ×2.", feedbackErro: "Cada é o dobro → 160." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Padrões do dia",
    materiais: ["Papel"],
    passos: ["Crie uma sequência aditiva e uma multiplicativa.", "Peça alguém pra descobrir o próximo termo."],
    registro: "📸 Foto da sequência.",
  },
  recompensa: { xp: 130, moedas: 70 },
};
