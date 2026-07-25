import type { AulaV4 } from "../../types";

export const aula02_comparar: AulaV4 = {
  slug: "u1-02-comparar",
  titulo: "Comparar e ordenar bilhões",
  iconeTrilha: "⚖️",
  bncc: ["EF06MA01"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Qual país arrecadou mais?",
    historia:
      "{NOME}, o Laboratório recebeu 4 relatórios. Todos com bilhões. Precisamos ORDENAR do maior pro menor — mas comparar bilhões é diferente de comparar unidades.",
  },
  momento02_exploracao: {
    instrucao: "Hipótese científica: dois números só podem ser comparados por dígitos se tiverem o MESMO tamanho.",
    cenas: [
      { tipo: "texto", texto: "Passo 1: contar quantos dígitos cada número tem.", destaque: true },
      { tipo: "texto", texto: "Passo 2: mais dígitos = maior. Se empatar, comparar dígito a dígito da esquerda pra direita." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "1.250.000 ou 999.999.999 — qual é maior?",
    pista: "Conte os dígitos primeiro.",
    revelacao: "1.250.000 tem 7 dígitos. 999.999.999 tem 9. Logo, 999.999.999 é maior. Nunca julgue pelo 'começa com 9'.",
  },
  momento04_explicacao: {
    titulo: "Comparando com o mesmo tamanho",
    etapas: [
      { texto: "2.345.000 vs 2.354.000 → mesmo tamanho. Comparar da esquerda: 2=2, 3=3, 4<5. Logo 2.354.000 é maior." },
      { texto: "Regra: no primeiro dígito diferente, o maior dígito vence." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Ordenar do menor pro maior: 1.020.000 · 999.900 · 1.020.500 · 1.002.000.",
    resposta: "999.900 < 1.002.000 < 1.020.000 < 1.020.500",
    passos: [
      "999.900 tem 6 dígitos, os outros têm 7 → 999.900 é o menor.",
      "Entre os três, todos começam com 1.0…: comparar 020, 020, 002 → 002 é o menor.",
      "Entre 1.020.000 e 1.020.500 → 000<500. 1.020.000 é o menor.",
    ],
  },
  momento06_praticaGuiada: {
    enunciado: "Qual é maior: 4.567.890 ou 4.576.890?",
    dica: "Mesma quantidade de dígitos. Compare da esquerda.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4.576.890" }, { nome: "4.567.890" }, { nome: "Iguais" }],
      respostaCerta: "4.576.890",
      feedbackAcerto: "🎯 4=4, 5=5, 7>6.",
      feedbackErro: "No 3º dígito: 7>6.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Ordene do MAIOR pro MENOR: 850.000 · 1.500.000 · 999.999 · 1.499.999.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Ordem correta:",
      opcoes: [
        { nome: "1.500.000 · 1.499.999 · 999.999 · 850.000" },
        { nome: "1.499.999 · 1.500.000 · 999.999 · 850.000" },
        { nome: "999.999 · 1.500.000 · 1.499.999 · 850.000" },
      ],
      respostaCerta: "1.500.000 · 1.499.999 · 999.999 · 850.000",
      feedbackAcerto: "🎯",
      feedbackErro: "1.500.000 e 1.499.999 têm 7 dígitos; 500>499. Os outros têm 6.",
    },
  },
  momento08_aplicacao: {
    contexto: "3 cidades: A tem 2.145.000 hab, B tem 2.145.900, C tem 2.154.000.",
    problema: "Cidade mais populosa?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "C" }, { nome: "B" }, { nome: "A" }],
      respostaCerta: "C",
      feedbackAcerto: "🎯 2.154 > 2.145.",
      feedbackErro: "No 4º dígito: 5>4.",
    },
  },
  momento09_revisao: {
    pontos: [
      "Compare pelo TAMANHO primeiro (nº de dígitos).",
      "Empatou o tamanho → compare da esquerda pra direita.",
      "No primeiro dígito diferente, o maior dígito vence.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "12.000.000 __ 9.999.999",
        opcoes: [">", "<", "="],
        correta: 0,
        feedbackAcerto: "🎉 8 dígitos > 7 dígitos.",
        feedbackErro: "Mais dígitos, maior.",
      },
      {
        pergunta: "3.456.789 __ 3.465.789",
        opcoes: ["<", ">", "="],
        correta: 0,
        feedbackAcerto: "🎉 5<6 no 3º dígito.",
        feedbackErro: "3=3, 4=4, 5<6.",
      },
      {
        pergunta: "Menor entre 1.000.000, 999.998, 1.000.001:",
        opcoes: ["999.998", "1.000.000", "1.000.001"],
        correta: 0,
        feedbackAcerto: "🎉",
        feedbackErro: "999.998 tem 6 dígitos.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Ranking dos bilhões",
    materiais: ["Papel"],
    passos: [
      "Pesquise 3 países e a população deles.",
      "Ordene do maior pro menor.",
      "Explique como você decidiu.",
    ],
    registro: "📸 Foto do ranking.",
  },
  recompensa: { xp: 150, moedas: 80 },
};
