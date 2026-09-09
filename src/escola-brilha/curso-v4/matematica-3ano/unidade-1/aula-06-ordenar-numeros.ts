import type { AulaV4 } from "../../types";

/**
 * Aula 6 — "Ordenar Números (crescente/decrescente)"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: usar a regra CDU para colocar 3-5 números em ordem.
 * Estratégia: encontre o menor (ou maior), tire da lista, repita.
 * BNCC: EF03MA02, EF03MA03.
 */
export const aula06_ordenarNumeros: AulaV4 = {
  slug: "06-ordenar-numeros",
  titulo: "A Fila dos Números",
  iconeTrilha: "🚶",
  bncc: ["EF03MA02", "EF03MA03"],
  duracaoMin: 20,
  metodologias: ["skemp", "kamii"],

  momento01_motivacao: {
    titulo: "Uma fila bagunçada!",
    historia:
      "Chegaram 5 turmas na escola da Cidade com contagens diferentes de alunos: 245, 132, 500, 480 e 199. A diretora pediu: 'Organizem em ordem crescente, do menor pro maior.' Como fazer isso sem se perder?",
  },

  momento02_exploracao: {
    instrucao: "Pense: qual desses três é o MENOR?",
    cenas: [
      { tipo: "texto", texto: "A: 120  ·  B: 230  ·  C: 90" },
      { tipo: "texto", texto: "Dica: quem tem menos algarismos ou menor centena vem primeiro.", destaque: true },
      { tipo: "texto", texto: "Resposta: 90 (só 2 algarismos, menor que qualquer 3 algarismos)." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como ordenar VÁRIOS números sem se perder?",
    pista: "Compara 2 a 2 e vai formando a fila.",
    revelacao:
      "TRUQUE: ache o MENOR de todos e coloque na frente. Depois ache o menor dos que sobraram. Repita até acabar. É a 'fila do menor'.",
  },

  momento04_explicacao: {
    titulo: "Duas ordens: crescente ↑ e decrescente ↓",
    etapas: [
      {
        texto:
          "CRESCENTE = do menor pro maior (subindo). Usa o sinal '<' entre os números.",
        exemploReal: {
          contexto:
            "Três turmas: 132, 199, 245 alunos. Encontre a menor centena e vá subindo.",
          casasValor: {
            numero: 245,
            extenso: "duzentos e quarenta e cinco",
            mostrarDecomposicao: true,
          },
          destaque: "Ordem crescente: 132 < 199 < 245.",
        },
      },
      {
        texto:
          "DECRESCENTE = do maior pro menor (descendo). Usa o sinal '>' entre os números.",
        exemploReal: {
          contexto: "As mesmas três turmas, agora do maior pro menor.",
          casasValor: {
            numero: 132,
            extenso: "cento e trinta e dois",
            mostrarDecomposicao: true,
          },
          destaque: "Ordem decrescente: 245 > 199 > 132.",
        },
      },
      {
        texto:
          "Pra ordenar mais números, compare 2 a 2 usando a regra CDU (aula 5).",
        exemploReal: {
          contexto:
            "Ordene em crescente: 480, 245, 132, 199, 500. Ache o menor primeiro (132), depois 199, depois 245, depois 480, por último 500.",
          casasValor: {
            numero: 500,
            extenso: "quinhentos",
            mostrarDecomposicao: true,
          },
          destaque: "Crescente: 132 < 199 < 245 < 480 < 500.",
        },
      },
      {
        texto:
          "Quando as centenas empatam, use a dezena. Quando dezena empata, use a unidade.",
        exemploReal: {
          contexto:
            "Ordene 401, 410, 104. O 104 tem C=1 (vem primeiro). Entre 401 e 410, dezena decide: 0 < 1.",
          casasValor: {
            numero: 410,
            extenso: "quatrocentos e dez",
            mostrarDecomposicao: true,
          },
          destaque: "Crescente: 104 < 401 < 410.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha ordena 245, 132, 500 em ORDEM CRESCENTE:",
    passos: [
      "Compara centenas: 132 (C=1), 245 (C=2), 500 (C=5).",
      "Menor centena → 132 (vai primeiro).",
      "Depois vem 245 (C=2).",
      "Por último, 500 (C=5).",
      "Fila crescente: 132 < 245 < 500. ✅",
    ],
    resposta: "132 < 245 < 500",
    casasValor: {
      numero: 245,
      mostrarDecomposicao: true,
      extenso: "duzentos e quarenta e cinco",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! Ordene em CRESCENTE: 410, 104, 401.",
    dica: "104 tem C=1. Os outros dois têm C=4 — desempate na dezena.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Ordem crescente:",
      opcoes: [
        { nome: "104 < 401 < 410" },
        { nome: "104 < 410 < 401" },
        { nome: "401 < 104 < 410" },
      ],
      respostaCerta: "104 < 401 < 410",
      feedbackAcerto:
        "🎉 Isso! 104 tem C=1 (menor). Entre 401 e 410, D: 0 < 1 → 401 antes de 410.",
      feedbackErro:
        "104 primeiro (C=1). Entre 401 e 410, dezena: 0 < 1 → 401 vem antes.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! Ordene em DECRESCENTE: 289, 298, 209.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Ordem decrescente:",
      opcoes: [
        { nome: "298 > 289 > 209" },
        { nome: "289 > 298 > 209" },
        { nome: "209 > 289 > 298" },
      ],
      respostaCerta: "298 > 289 > 209",
      feedbackAcerto:
        "🎯 Perfeito! Centenas todas 2 (empatam). Dezenas: 9 > 8 > 0. Fica 298 > 289 > 209.",
      feedbackErro:
        "C todos = 2. Compara dezena: 9 > 8 > 0. Ordem decrescente: 298 > 289 > 209.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita entregou o pódio das vendas de 3 barracas do mercado: A=415, B=380, C=407.",
    problema: "Quem fica no 1º lugar (mais vendeu)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "1º lugar do pódio:",
      opcoes: [{ nome: "A (415)" }, { nome: "B (380)" }, { nome: "C (407)" }],
      respostaCerta: "A (415)",
      feedbackAcerto:
        "🎯 Isso! B tem C=3 (sai). Entre A (415) e C (407), dezena: 1 > 0 → A vence.",
      feedbackErro:
        "B (380) tem C=3 (menor). Entre A (415) e C (407), dezena: 1 > 0 → A é o maior.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Ordenar = colocar em fila usando a comparação CDU.",
      "CRESCENTE ↑ (menor primeiro) · DECRESCENTE ↓ (maior primeiro).",
      "Compare 2 a 2 até formar a fila inteira.",
      "Sinais: '<' na crescente, '>' na decrescente.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Ordem crescente de 540, 504, 450:",
      opcoes: [
        { nome: "450 < 504 < 540" },
        { nome: "450 < 540 < 504" },
        { nome: "504 < 450 < 540" },
      ],
      respostaCerta: "450 < 504 < 540",
      feedbackAcerto: "🎉 450 (C=4), depois 504 e 540 (C=5). Dezena: 0 < 4 → 504 < 540.",
      feedbackErro:
        "450 tem C=4 (menor). Entre 504 e 540, dezena decide: 0 < 4. Fica 450 < 504 < 540.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Ordem crescente de 210, 120, 201:",
        opcoes: ["120 < 201 < 210", "120 < 210 < 201", "201 < 120 < 210"],
        correta: 0,
        feedbackAcerto: "🎉 120 (C=1) primeiro. Entre 201 e 210, D: 0 < 1.",
        feedbackErro: "120 tem C=1 (menor). Entre 201 e 210: D=0 < D=1.",
      },
      {
        pergunta: "Decrescente de 88, 808, 88:",
        opcoes: ["808 > 88 = 88", "88 = 88 > 808", "88 > 808 > 88"],
        correta: 0,
        feedbackAcerto: "Isso! 808 é o maior. Os dois 88 empatam.",
        feedbackErro: "808 tem 3 dígitos e é o maior. Os dois 88 são iguais.",
      },
      {
        pergunta: "Qual está em ORDEM CRESCENTE correta?",
        opcoes: [
          "600 < 660 < 606",
          "600 < 606 < 660",
          "660 < 606 < 600",
        ],
        correta: 1,
        feedbackAcerto: "🎉 600 < 606 < 660. Perfeito.",
        feedbackErro:
          "600 (D=0,U=0), 606 (D=0,U=6), 660 (D=6). Fica 600 < 606 < 660.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Fila dos Papeizinhos",
    materiais: ["10 papeizinhos", "Caneta"],
    passos: [
      "Escreva 5 números entre 100 e 999 em papeizinhos.",
      "Peça a alguém pra bagunçar e você organiza em ORDEM CRESCENTE.",
      "Depois faça DECRESCENTE.",
      "Repita com outros 5 números.",
    ],
    registro: "📸 Foto da fila crescente final.",
  },

  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};
