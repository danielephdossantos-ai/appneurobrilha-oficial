import type { AulaV4 } from "../../types";

/**
 * Aula 7 · U1 — "Arredondar para dezena, centena e milhar"
 * BNCC: EF04MA03.
 */
export const aula07_arredondar: AulaV4 = {
  slug: "u1-07-arredondar",
  titulo: "Arredondar (dezena · centena · milhar)",
  iconeTrilha: "🎯",
  bncc: ["EF04MA03"],
  duracaoMin: 20,
  metodologias: ["skemp", "rme"],

  momento01_motivacao: {
    titulo: "Números que dão trabalho",
    historia:
      "{NOME}, o mestre quer saber 'mais ou menos quantos habitantes' o Reino tem. Ele não quer o número exato (3.874) — quer um número REDONDO, fácil de falar. Como fazer?",
  },

  momento02_exploracao: {
    instrucao: "Arredondar é aproximar para um número REDONDO próximo.",
    cenas: [
      { tipo: "texto", texto: "Pra dezena: olho a UNIDADE. Se < 5, desce; se ≥ 5, sobe.", destaque: true },
      { tipo: "texto", texto: "Pra centena: olho a DEZENA. Regra do 5." },
      { tipo: "texto", texto: "Pra milhar: olho a CENTENA. Mesma regra." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 3.874 arredondado pro milhar vira 4.000 e não 3.000?",
    pista: "Olhe a centena. É 8. 8 ≥ 5.",
    revelacao:
      "Se a próxima casa é 5 ou mais, SUBIMOS. 3.874 → centena=8 ≥ 5 → milhar sobe: 4.000.",
  },

  momento04_explicacao: {
    titulo: "Regra dos 5",
    etapas: [
      {
        texto: "Passo 1: escolha a casa alvo (dezena, centena ou milhar).",
        exemploReal: {
          contexto: "Alvo: dezena. Número: 47.",
          casasValor: { numero: 47, extenso: "quarenta e sete", mostrarDecomposicao: true },
          destaque: "Unidade = 7 ≥ 5 → sobe: 50.",
        },
      },
      {
        texto: "Passo 2: olhe a casa IMEDIATAMENTE à direita da alvo.",
        exemploReal: {
          contexto: "Alvo: centena. Número: 342.",
          casasValor: { numero: 342, extenso: "trezentos e quarenta e dois", mostrarDecomposicao: true },
          destaque: "Dezena = 4 < 5 → desce: 300.",
        },
      },
      {
        texto: "Passo 3: se ≥ 5, sobe UMA na alvo; se < 5, mantém e zera o resto.",
        exemploReal: {
          contexto: "Alvo: milhar. Número: 6.482.",
          casasValor: { numero: 6482, extenso: "seis mil, quatrocentos e oitenta e dois", mostrarDecomposicao: true },
          destaque: "Centena = 4 < 5 → milhar mantém: 6.000.",
        },
      },
      {
        texto: "Cuidado: se a alvo é 9 e sobe, vira 10 → puxa outra casa.",
        exemploReal: {
          contexto: "996 arredondado para centena:",
          casasValor: { numero: 996, extenso: "novecentos e noventa e seis", mostrarDecomposicao: true },
          destaque: "Dezena = 9 ≥ 5 → centena sobe de 9 pra 10 → vira 1.000.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Arredonde 2.638 para o MILHAR.",
    resposta: "3.000",
    casasValor: { numero: 3000, mostrarDecomposicao: true, extenso: "três mil" },
    passos: [
      "Alvo: milhar (2).",
      "Olho centena = 6.",
      "6 ≥ 5 → milhar sobe: 2 → 3.",
      "Zero o resto: 3.000.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Arredonde 4.230 para a CENTENA.",
    dica: "Olhe a dezena.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.200" }, { nome: "4.300" }, { nome: "4.000" }],
      respostaCerta: "4.200",
      feedbackAcerto: "🎯 Dezena=3 < 5 → centena mantém 2. Zero o resto: 4.200.",
      feedbackErro: "Dezena = 3, que é < 5. Centena fica igual: 4.200.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Arredonde 5.567 para a DEZENA.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5.560" }, { nome: "5.570" }, { nome: "5.500" }],
      respostaCerta: "5.570",
      feedbackAcerto: "🎯 Unidade=7 ≥ 5 → dezena sobe de 6 pra 7. 5.570.",
      feedbackErro: "Unidade 7 é ≥ 5. Sobe a dezena: 6 → 7. 5.570.",
    },
  },

  momento08_aplicacao: {
    contexto: "O mestre relata: '2.499 pessoas na feira'. Ele quer arredondar para milhar.",
    problema: "Arredondado ao milhar mais próximo:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2.000" }, { nome: "2.500" }, { nome: "3.000" }],
      respostaCerta: "2.000",
      feedbackAcerto: "🎯 Centena = 4 < 5. Milhar mantém 2. 2.000.",
      feedbackErro: "Centena é 4. É menor que 5, então o milhar não sobe. Fica 2.000.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Escolha a casa ALVO.",
      "Olhe a casa à direita: < 5 desce, ≥ 5 sobe.",
      "Depois zere as casas à direita da alvo.",
      "9 que sobe pode 'estourar' e puxar a próxima casa.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Arredonde 348 à centena:",
        opcoes: ["300", "400", "350"],
        correta: 0,
        feedbackAcerto: "🎉 Dezena=4 < 5. Fica 300.",
        feedbackErro: "Dezena = 4, menor que 5. Não sobe: 300.",
      },
      {
        pergunta: "Arredonde 7.850 ao milhar:",
        opcoes: ["7.000", "8.000", "7.900"],
        correta: 1,
        feedbackAcerto: "🎉 Centena=8 ≥ 5. Sobe: 8.000.",
        feedbackErro: "Olhe a centena: 8. Sobe milhar: 8.000.",
      },
      {
        pergunta: "Arredonde 4.995 à centena:",
        opcoes: ["4.900", "5.000", "4.990"],
        correta: 1,
        feedbackAcerto: "🎉 Dezena=9 ≥ 5. Centena sobe de 9 pra 10 → estoura pro milhar. 5.000.",
        feedbackErro: "9 sobe: vira 10, empurra o milhar. Resultado: 5.000.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Aproximar da vida real",
    materiais: ["Encartes de mercado", "Papel"],
    passos: [
      "Ache 5 preços com centavos.",
      "Arredonde cada um para o real mais próximo (centena de centavos).",
      "Estime o total 'de cabeça' e confira depois.",
    ],
    registro: "📸 Foto do papel com preços originais e arredondados.",
  },

  recompensa: { xp: 115, moedas: 60 },
};
