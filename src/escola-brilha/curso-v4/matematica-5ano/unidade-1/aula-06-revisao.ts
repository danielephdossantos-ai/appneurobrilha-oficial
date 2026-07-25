import type { AulaV4 } from "../../types";

export const aula06_revisao: AulaV4 = {
  slug: "u1-06-revisao",
  titulo: "Revisão da Unidade 1",
  iconeTrilha: "📖",
  bncc: ["EF05MA01", "EF05MA02", "EF05MA10"],
  duracaoMin: 18,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Repassando o Império",
    historia: "{NOME}, hoje é dia de repassar tudo que aprendemos: ler, comparar, arredondar e achar padrões.",
  },
  momento02_exploracao: {
    instrucao: "Lembretes-chave.",
    cenas: [
      { tipo: "texto", texto: "6 casas: CM · DM · UM · C · D · U.", destaque: true },
      { tipo: "texto", texto: "Duas classes: milhares (CM/DM/UM) e unidades simples (C/D/U)." },
      { tipo: "texto", texto: "Comparar: da esquerda pra direita. Arredondar: olhe o vizinho." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual é maior: 405.100 ou 450.001?",
    pista: "CM iguais (4). DM: 0 vs 5.",
    revelacao: "5 > 0 → 450.001 é maior.",
  },
  momento04_explicacao: {
    titulo: "Uma passada rápida em cada tópico",
    etapas: [
      { texto: "Ler: 321.480 = trezentos e vinte e um mil, quatrocentos e oitenta." },
      { texto: "Comparar: 87.500 < 87.800 (D: 0 < 8 depois de olhar C? não, C = 5 vs 8 → 5 < 8)." },
      { texto: "Arredondar 43.780 pra DM: vizinho 3 (UM) < 5 → 40.000." },
      { texto: "Sequência: 250 · 500 · 750 · 1.000 → salto +250." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Escreva 'quinhentos e três mil, sete' como número.",
    resposta: "503.007",
    passos: ["Classe milhares: 503.", "Classe unidades: 007.", "Junta: 503.007."],
  },
  momento06_praticaGuiada: {
    enunciado: "Qual é MAIOR: 62.100 ou 62.010?",
    dica: "Empatam até C? Depois compare D.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "62.100" }, { nome: "62.010" }, { nome: "iguais" }],
      respostaCerta: "62.100",
      feedbackAcerto: "🎯 C: 1 > 0.",
      feedbackErro: "62.100 vence na centena.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Arredonde 27.560 para o milhar.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "28.000" }, { nome: "27.000" }, { nome: "27.500" }],
      respostaCerta: "28.000",
      feedbackAcerto: "🎯 Vizinho 5 → sobe.",
      feedbackErro: "Vizinho da UM é 5 → 28.000.",
    },
  },
  momento08_aplicacao: {
    contexto: "Sequência: 4.000 · 8.000 · 16.000 · ___",
    problema: "Próximo termo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "32.000" }, { nome: "24.000" }, { nome: "20.000" }],
      respostaCerta: "32.000",
      feedbackAcerto: "🎯 Dobro.",
      feedbackErro: "×2 sempre → 32.000.",
    },
  },
  momento09_revisao: {
    pontos: ["6 casas, 2 classes.", "Comparação sem casas de valor.", "Arredondamento pelo vizinho."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Como se escreve 'oitenta mil e cinco'?", opcoes: ["80.005", "80.050", "8.005"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "80 mil + 5 = 80.005." },
      { pergunta: "125.400 __ 125.040", opcoes: [">", "<", "="], correta: 0, feedbackAcerto: "🎉 C: 4 > 0.", feedbackErro: "Empata até UM. C decide: 4 > 0." },
      { pergunta: "Arredonde 6.482 pra centena.", opcoes: ["6.500", "6.400", "6.480"], correta: 0, feedbackAcerto: "🎉 D: 8 ≥ 5 → sobe.", feedbackErro: "Vizinho 8 → 6.500." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Mini-desafio",
    materiais: ["Caderno"],
    passos: ["Escolha 3 números de 6 algarismos.", "Ordene do menor pro maior.", "Arredonde cada um pra centena."],
    registro: "📸 Foto do caderno.",
  },
  recompensa: { xp: 120, moedas: 60 },
};
