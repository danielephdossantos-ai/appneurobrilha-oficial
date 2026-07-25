import type { AulaV4 } from "../../types";

export const aula07_missaoFinalReino: AulaV4 = {
  slug: "u7-07-missao-final-reino",
  titulo: "Missão Final: Matemático(a) do Reino",
  iconeTrilha: "👑",
  bncc: [
    "EF04MA01",
    "EF04MA03",
    "EF04MA06",
    "EF04MA07",
    "EF04MA09",
    "EF04MA17",
    "EF04MA19",
    "EF04MA23",
    "EF04MA27",
  ],
  duracaoMin: 30,
  metodologias: ["cpa", "skemp", "vergnaud", "rme", "kamii"],

  momento01_motivacao: {
    titulo: "A grande prova do Reino",
    historia:
      "{NOME}, chegou a hora de virar Matemático(a) do REINO. Cinco áreas: números, contas, frações/decimais, medidas e geometria/dados. Vamos lá!",
  },
  momento02_exploracao: {
    instrucao: "Reveja o essencial.",
    cenas: [
      { tipo: "texto", texto: "UM · C · D · U.  Soma reagrupa. Sub troca.  Mult 2 dígitos = 2 parciais.  Div pela maior casa.", destaque: true },
      { tipo: "texto", texto: "Fração = parte/todo. 1/4 = 0,25.  1 kg=1000 g. 1 h=60 min.  Quadrado tem 4 eixos." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O que amarra tudo?",
    pista: "Uma ideia só.",
    revelacao: "Matemática é ENTENDER, não decorar. Se você sabe o PORQUÊ, encontra o COMO.",
  },
  momento04_explicacao: {
    titulo: "Estratégia final",
    etapas: [
      {
        texto: "Ler → armar/desenhar → calcular → conferir.",
        exemploReal: {
          contexto: "Sempre esse ciclo.",
          destaque: "Especialmente 'conferir'.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "6.324 + 2.789 =",
    passos: [
      "U: 4+9=13 (3, vai 1).",
      "D: 2+8+1=11 (1, vai 1).",
      "C: 3+7+1=11 (1, vai 1).",
      "UM: 6+2+1=9.",
    ],
    resposta: "9.113",
    casasValor: { numero: 9113, mostrarDecomposicao: true, extenso: "nove mil, cento e treze" },
  },
  momento06_praticaGuiada: {
    enunciado: "245 × 6 = ?",
    dica: "Multiplique U→D→C.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.470" }, { nome: "1.370" }, { nome: "1.570" }],
      respostaCerta: "1.470",
      feedbackAcerto: "🎯 1.470.",
      feedbackErro: "6×5=30, 6×4+3=27, 6×2+2=14 → 1.470.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "144 ÷ 6 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "24" }, { nome: "22" }, { nome: "26" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯 24.",
      feedbackErro: "14÷6=2(r 2), 24÷6=4 → 24.",
    },
  },
  momento08_aplicacao: {
    contexto: "Ana comprou 3 blusas de R$ 24,90 e 1 calça de R$ 45,20.",
    problema: "Total:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 119,90" }, { nome: "R$ 118,90" }, { nome: "R$ 120,00" }],
      respostaCerta: "R$ 119,90",
      feedbackAcerto: "🎯 R$ 119,90.",
      feedbackErro: "3×24,90=74,70. 74,70+45,20=119,90.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Números até 10.000: UM·C·D·U.",
      "Soma reagrupa · Sub troca.",
      "Mult 2 dígitos: 2 parciais.",
      "Div pela maior casa; resto < divisor.",
      "Fração = parte/todo; decimal usa vírgula.",
      "Medidas: base 10/100/1000 (tempo: base 60).",
      "Perímetro = soma dos lados.",
      "Ler tabela: linha × coluna.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Valor do 7 em 4.732:", opcoes: ["700", "70", "7"], correta: 0, feedbackAcerto: "🎉 700.", feedbackErro: "Centena." },
      { pergunta: "8.203 − 3.478 = ?", opcoes: ["4.725", "4.625", "4.825"], correta: 0, feedbackAcerto: "🎉 4.725.", feedbackErro: "Empréstimos: 4.725." },
      { pergunta: "23 × 15 = ?", opcoes: ["345", "335", "355"], correta: 0, feedbackAcerto: "🎉 345.", feedbackErro: "23×5=115, 23×1=23(→230). 115+230=345." },
      { pergunta: "216 ÷ 4 = ?", opcoes: ["54", "52", "56"], correta: 0, feedbackAcerto: "🎉 54.", feedbackErro: "21÷4=5(r 1), 16÷4=4 → 54." },
      { pergunta: "1/2 de 68 = ?", opcoes: ["34", "32", "36"], correta: 0, feedbackAcerto: "🎉 34.", feedbackErro: "68÷2=34." },
      { pergunta: "0,25 + 0,50 = ?", opcoes: ["0,75", "0,55", "0,275"], correta: 0, feedbackAcerto: "🎉 0,75.", feedbackErro: "Alinhe a vírgula." },
      { pergunta: "2 h 40 min + 1 h 30 min = ?", opcoes: ["4 h 10 min", "3 h 70 min", "4 h"], correta: 0, feedbackAcerto: "🎉 4 h 10 min.", feedbackErro: "40+30=70 min → 1 h 10 min." },
      { pergunta: "Retângulo 12×5. Perímetro?", opcoes: ["34", "60", "17"], correta: 0, feedbackAcerto: "🎉 34.", feedbackErro: "2×(12+5)=34." },
      { pergunta: "Quadrado tem quantos eixos de simetria?", opcoes: ["4", "2", "1"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "2 lados + 2 diagonais." },
      { pergunta: "Sair 7 num dado normal:", opcoes: ["Impossível", "Pouco provável", "Certo"], correta: 0, feedbackAcerto: "🎉 Impossível.", feedbackErro: "Dado só vai até 6." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma de Matemático do Reino",
    materiais: ["Papel", "Régua", "Balança/copo medidor"],
    passos: [
      "Faça 1 conta grande de + e −.",
      "Faça 1 multiplicação por 2 dígitos.",
      "Faça 1 divisão na chave.",
      "Meça algo (comprimento OU massa OU capacidade).",
      "Desenhe um quadrado com medidas e calcule perímetro.",
      "Registre tudo num pergaminho de matemático.",
    ],
    registro: "📸 Foto do pergaminho completo.",
  },
  recompensa: { xp: 400, moedas: 200, medalha: "Matemático(a) do Reino" },
};
