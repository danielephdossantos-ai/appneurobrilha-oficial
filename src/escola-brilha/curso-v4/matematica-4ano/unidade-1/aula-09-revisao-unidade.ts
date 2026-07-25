import type { AulaV4 } from "../../types";

/**
 * Aula 9 · U1 — "Revisão da Unidade"
 * BNCC: EF04MA01, EF04MA02, EF04MA03.
 */
export const aula09_revisaoUnidade: AulaV4 = {
  slug: "u1-09-revisao-unidade",
  titulo: "Revisão: Reino dos Números",
  iconeTrilha: "📚",
  bncc: ["EF04MA01", "EF04MA02", "EF04MA03"],
  duracaoMin: 22,
  metodologias: ["skemp", "kamii"],

  momento01_motivacao: {
    titulo: "Antes da Missão Final",
    historia:
      "{NOME}, o mestre reúne tudo o que você aprendeu no Reino: valor posicional, leitura, comparação, ordem, arredondamento e sequências. Preparado(a) pra revisão relâmpago?",
  },

  momento02_exploracao: {
    instrucao: "Cinco lembretes rápidos.",
    cenas: [
      { tipo: "texto", texto: "1) Cada casa vale 10× mais que a anterior à direita.", destaque: true },
      { tipo: "texto", texto: "2) Ler começa pela esquerda; zero segura casa vazia." },
      { tipo: "texto", texto: "3) Comparar: casa por casa, da esquerda pra direita." },
      { tipo: "texto", texto: "4) Arredondar: olhe a próxima casa; ≥ 5 sobe." },
      { tipo: "texto", texto: "5) Sequência: ache o salto e some/subtraia." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual dessas ideias você mais usaria pra ver a diferença entre 3.999 e 4.001?",
    pista: "Onde nasce o próximo milhar?",
    revelacao:
      "3.999 → +1 = 4.000. Sobem TODAS as casas: 9 vira 10 em cadeia até estourar no milhar. É como arredondar 'na força'.",
  },

  momento04_explicacao: {
    titulo: "Combinando ideias",
    etapas: [
      {
        texto: "Valor posicional é a base de tudo.",
        exemploReal: {
          contexto: "6.482:",
          casasValor: { numero: 6482, extenso: "seis mil, quatrocentos e oitenta e dois", mostrarDecomposicao: true },
          destaque: "6.000 + 400 + 80 + 2.",
        },
      },
      {
        texto: "Comparar usa valor posicional casa por casa.",
        exemploReal: {
          contexto: "6.482 vs 6.428:",
          casasValor: { numero: 6482, extenso: "seis mil, quatrocentos e oitenta e dois", mostrarDecomposicao: true },
          destaque: "UM=6=6, C=4=4, D=8>2 → 6.482 é maior.",
        },
      },
      {
        texto: "Arredondar aproxima números pra facilitar a conta de cabeça.",
        exemploReal: {
          contexto: "6.482 ao milhar:",
          casasValor: { numero: 6000, extenso: "seis mil", mostrarDecomposicao: true },
          destaque: "Centena=4 < 5 → 6.000.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Decomponha 3.706, arredonde para centena e compare com 3.700.",
    resposta: "3.000 + 700 + 0 + 6 · arredonda para 3.700 · igual a 3.700.",
    casasValor: { numero: 3706, mostrarDecomposicao: true, extenso: "três mil, setecentos e seis" },
    passos: [
      "Decompor: 3.000 + 700 + 6.",
      "Arredondar à centena: unidade=6 ≥ 5 → dezena sobe. Mas dezena=0 → vira 1. Espera: olhe a dezena para arredondar à centena. Dezena=0 < 5 → centena mantém 7. Zero o resto: 3.700.",
      "Comparar: 3.700 = 3.700.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual desses é 'sete mil e oito'?",
    dica: "Cuidado com o zero.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7.008" }, { nome: "7.080" }, { nome: "7.800" }],
      respostaCerta: "7.008",
      feedbackAcerto: "🎯 8 na unidade, C e D vazias → 7.008.",
      feedbackErro: "'e oito' = 8 unidades. Sem centenas e dezenas → 7.008.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Ordem CRESCENTE de 4.008, 4.080, 4.800, 4.088.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "4.008, 4.080, 4.088, 4.800" },
        { nome: "4.800, 4.088, 4.080, 4.008" },
        { nome: "4.008, 4.088, 4.080, 4.800" },
      ],
      respostaCerta: "4.008, 4.080, 4.088, 4.800",
      feedbackAcerto: "🎯 Menor → maior.",
      feedbackErro: "Centena: 0=0=0<8. Depois dezena e unidade decidem entre os três menores.",
    },
  },

  momento08_aplicacao: {
    contexto: "O mestre pede: arredonde 5.478 para milhar e centena. Qual dos dois é MAIOR?",
    problema: "Milhar dá 5.000; centena dá 5.500. Qual é maior?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5.000" }, { nome: "5.500" }, { nome: "Iguais" }],
      respostaCerta: "5.500",
      feedbackAcerto: "🎯 Arredondamento à centena é mais preciso e maior aqui.",
      feedbackErro: "5.500 > 5.000. Comparação clara pelo milhar (=) e centena (5>0).",
    },
  },

  momento09_revisao: {
    pontos: [
      "Valor posicional: cada casa vale 10× mais que a anterior à direita.",
      "Ler/escrever: zeros seguram lugar.",
      "Comparar/ordenar: casa por casa, esquerda pra direita.",
      "Arredondar: olha a próxima casa; regra do 5.",
      "Sequências: ache o salto.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Decomponha 5.802:",
        opcoes: ["5.000 + 80 + 2", "5.000 + 800 + 2", "500 + 80 + 2"],
        correta: 1,
        feedbackAcerto: "🎉 5.000 + 800 + 0 + 2 = 5.802.",
        feedbackErro: "O 8 está na centena → 800.",
      },
      {
        pergunta: "Ordem crescente: 3.030, 3.003, 3.300.",
        opcoes: [
          "3.003, 3.030, 3.300",
          "3.300, 3.030, 3.003",
          "3.030, 3.003, 3.300",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Menor primeiro.",
        feedbackErro: "C=0=0<3. Entre 3.003 e 3.030: D=0<3 → 3.003 primeiro.",
      },
      {
        pergunta: "Arredonde 4.560 para milhar:",
        opcoes: ["4.000", "5.000", "4.500"],
        correta: 1,
        feedbackAcerto: "🎉 Centena=5 ≥ 5 → sobe. 5.000.",
        feedbackErro: "Centena=5. Regra do 5: sobe. Milhar 4 → 5. 5.000.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Placar do Reino",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Escreva 5 números aleatórios entre 1.000 e 9.999.",
      "Ordene em ordem crescente.",
      "Arredonde cada um ao milhar.",
      "Compare os arredondados: quantos ficaram iguais?",
    ],
    registro: "📸 Foto do papel.",
  },

  recompensa: { xp: 130, moedas: 65, medalha: "Estudante Aplicado(a) do Reino" },
};
