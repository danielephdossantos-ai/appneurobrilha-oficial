import type { AulaV4 } from "../../types";

export const aula04_arredondar: AulaV4 = {
  slug: "u1-04-arredondar",
  titulo: "Arredondar para 10, 100, 1.000 e 10.000",
  iconeTrilha: "🎯",
  bncc: ["EF05MA02"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Números redondos ajudam a estimar",
    historia:
      "{NOME}, o Imperador não quer o número exato — quer uma ESTIMATIVA rápida. É aí que entra ARREDONDAR: deixar o número mais 'redondo' pra facilitar a cabeça.",
  },
  momento02_exploracao: {
    instrucao: "Regra do arredondamento.",
    cenas: [
      { tipo: "texto", texto: "Olhe o algarismo LOGO À DIREITA da casa que você quer arredondar.", destaque: true },
      { tipo: "texto", texto: "0–4: mantém a casa. 5–9: soma 1 na casa. Zera tudo à direita." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Arredondar 4.372 para a centena. Olho onde?",
    pista: "Casa da centena é o 3. O 'vizinho da direita' é o 7 (dezena).",
    revelacao: "7 é ≥ 5, então a centena vira 4. Zera dezena e unidade → 4.400.",
  },
  momento04_explicacao: {
    titulo: "Arredondar sem casas de valor — é só olhar o vizinho",
    etapas: [
      {
        texto: "48.573 para a dezena de milhar: vizinho é 8 (UM). 8 ≥ 5 → DM sobe: 50.000.",
        exemploReal: {
          contexto: "Na reta, 48.573 está mais perto de 50.000 do que de 40.000:",
          visualMat: {
            tipo: "retaNumerica",
            min: 40000,
            max: 50000,
            passo: 1000,
            destacar: [
              { valor: 40000, rotulo: "40.000" },
              { valor: 45000, rotulo: "45.000 (meio)", cor: "#f59e0b" },
              { valor: 48573, rotulo: "48.573", cor: "#10b981" },
              { valor: 50000, rotulo: "50.000" },
            ],
          },
          destaque: "Passou do meio (45.000) → arredonda pra 50.000.",
        },
      },
      { texto: "48.573 para a unidade de milhar: vizinho é 5 (C). 5 ≥ 5 → UM sobe: 49.000." },
      {
        texto: "48.573 para a centena: vizinho é 7 (D). 7 ≥ 5 → C sobe: 48.600.",
        exemploReal: {
          contexto: "Reta zoom entre 48.500 e 48.600:",
          visualMat: {
            tipo: "retaNumerica",
            min: 48500,
            max: 48600,
            passo: 10,
            destacar: [
              { valor: 48500, rotulo: "48.500" },
              { valor: 48550, rotulo: "48.550", cor: "#f59e0b" },
              { valor: 48573, rotulo: "48.573", cor: "#10b981" },
              { valor: 48600, rotulo: "48.600" },
            ],
          },
          destaque: "48.573 já passou do meio → 48.600.",
        },
      },
      { texto: "48.573 para a dezena: vizinho é 3 (U). 3 < 5 → D fica: 48.570." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Arredonde 725.480 para a DEZENA DE MILHAR.",
    resposta: "730.000",
    visualMat: {
      tipo: "retaNumerica",
      min: 720000,
      max: 730000,
      passo: 1000,
      destacar: [
        { valor: 720000, rotulo: "720.000" },
        { valor: 725000, rotulo: "725.000 (meio)", cor: "#f59e0b" },
        { valor: 725480, rotulo: "725.480", cor: "#10b981" },
        { valor: 730000, rotulo: "730.000" },
      ],
    },
    passos: ["Casa DM = 2.", "Vizinho da direita (UM) = 5.", "5 ≥ 5 → DM vira 3.", "Zera C, D, U → 730.000."],
  },
  momento06_praticaGuiada: {
    enunciado: "Arredonde 6.348 para a centena.",
    dica: "Vizinho da centena é a dezena.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "6.300" }, { nome: "6.400" }, { nome: "6.350" }],
      respostaCerta: "6.300",
      feedbackAcerto: "🎯 Dezena = 4 (< 5) → mantém 3 na centena → 6.300.",
      feedbackErro: "Vizinho é 4 < 5. Centena fica → 6.300.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Arredonde 82.615 para a UNIDADE DE MILHAR.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "83.000" }, { nome: "82.000" }, { nome: "82.600" }],
      respostaCerta: "83.000",
      feedbackAcerto: "🎯 Vizinho da UM é a centena (6). 6 ≥ 5 → UM sobe: 83.000.",
      feedbackErro: "Vizinho é 6 ≥ 5 → 82 vira 83 → 83.000.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um estádio tem 47.842 torcedores.",
    problema: "'Cerca de 48 mil' — é razoável?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Sim ou não?",
      opcoes: [{ nome: "Sim" }, { nome: "Não" }, { nome: "Só se for 47 mil" }],
      respostaCerta: "Sim",
      feedbackAcerto: "🎯 Arredondando pra unidade de milhar: vizinho 8 ≥ 5 → 48.000.",
      feedbackErro: "47.842 → vizinho da UM é 8 (≥5) → arredonda pra 48.000.",
    },
  },
  momento09_revisao: {
    pontos: ["Olhe SEMPRE o vizinho da direita.", "0–4: mantém. 5–9: sobe 1.", "Zera tudo à direita da casa arredondada."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Arredonde 3.257 para a centena.", opcoes: ["3.300", "3.200", "3.250"], correta: 0, feedbackAcerto: "🎉 Dezena 5 → sobe.", feedbackErro: "Vizinho 5 → C sobe → 3.300." },
      { pergunta: "Arredonde 128.400 para DM.", opcoes: ["130.000", "128.000", "120.000"], correta: 0, feedbackAcerto: "🎉 Vizinho 8 → DM sobe.", feedbackErro: "Vizinho da DM é 8 → 130.000." },
      { pergunta: "Arredonde 5.049 para o milhar.", opcoes: ["5.000", "6.000", "5.100"], correta: 0, feedbackAcerto: "🎉 Vizinho 0 < 5 → mantém.", feedbackErro: "Vizinho da UM é 0 → mantém → 5.000." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Estimativas do supermercado",
    materiais: ["Nota fiscal"],
    passos: ["Pegue uma nota.", "Arredonde 5 valores para o real.", "Some as estimativas."],
    registro: "📸 Foto da nota com os arredondamentos.",
  },
  recompensa: { xp: 130, moedas: 70 },
};
