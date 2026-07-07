import type { AulaPortuguesV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import bibliotecario from "@/assets/neuro-treino/objetos/bibliotecario.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import binoculo from "@/assets/neuro-treino/objetos/binoculo.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";

/**
 * Unidade 7 · Aula 3 — Revisando Como um Autor
 * Checklist do autor: título, maiúscula, pontuação, ordem, sentido.
 * BNCC: EF02LP07 · EF02LP08 · EF15LP07
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-revisando-como-autor",
  titulo: "Revisando Como um Autor",
  iconeTrilha: "🔍",
  bncc: ["EF02LP07", "EF02LP08", "EF15LP07"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O olho de autor",
    historia:
      "Aurora mostra um livrinho com pequenos erros. — Podemos deixá-lo AINDA MELHOR? Autor de verdade REVISA o próprio texto: procura título, letra maiúscula, ponto, ordem das ideias e palavras com sentido.",
    imagemUrl: bibliotecario,
  },

  momento02_previsao: {
    instrucao: "O que um autor faz DEPOIS de escrever?",
    bloco: {
      titulo: "O olho de autor",
      capaImagemUrl: binoculo,
      pistas: [
        { imagemUrl: binoculo, nome: "🔍 Reler" },
        { imagemUrl: lapis, nome: "✏️ Ajustar" },
        { imagemUrl: estrela, nome: "⭐ Melhorar" },
      ],
      recado: {
        icone: "✅",
        rotulo: "Checklist do autor",
        estilo: "papel",
        linhas: [
          "Tem título?",
          "Começa com MAIÚSCULA?",
          "Tem PONTO no fim?",
          "As ideias estão na ordem?",
          "As palavras fazem sentido?",
        ],
      },
      pergunta: "Depois de escrever, o autor…",
      hipoteses: [
        { texto: "RELÊ e MELHORA o próprio texto.", imagemUrl: binoculo },
        { texto: "Rasga tudo.", imagemUrl: papel },
        { texto: "Nunca mais olha.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Autor revisa!",
      feedbackErro: "Depois de escrever, o autor RELÊ e AJUSTA pra ficar melhor.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de revisão.",
    cards: [
      {
        palavra: "revisar",
        explicacao: "LER DE NOVO com atenção pra achar o que pode melhorar.",
        exemplo: "Vou REVISAR meu texto: será que tem ponto no fim?",
        imagemUrl: binoculo,
      },
      {
        palavra: "checklist",
        explicacao: "Lista de coisas pra CONFERIR uma por uma. ✅ ✅ ✅",
        exemplo: "O CHECKLIST me ajuda a não esquecer de nada.",
        imagemUrl: papel,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o texto ANTES da revisão. Ache os probleminhas!",
    leitura: {
      titulo: "❌ Antes da revisão",
      imagemUrl: papel,
      destacar: ["a", "gata", "mimi", "voou"],
      paragrafos: [
        "(sem título)",
        "a gata mimi voou",
        "ela caiu no jardim",
        "todos riram",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "O que precisa AJUSTAR nesse texto?",
    perguntas: [
      {
        pergunta: "✅ Tem TÍTULO?",
        opcoes: ["Não — falta título", "Sim, tem"],
        correta: 0,
        feedbackAcerto: "🎉 Falta título!",
        feedbackErro: "O texto começa em '(sem título)' — precisa de um nome!",
      },
      {
        pergunta: "✅ Começa com letra MAIÚSCULA?",
        opcoes: ["Não — está 'a gata'", "Sim"],
        correta: 0,
        feedbackAcerto: "🎉 Falta maiúscula!",
        feedbackErro: "Toda frase começa com LETRA MAIÚSCULA: 'A gata…'.",
      },
      {
        pergunta: "✅ Tem PONTO no fim?",
        opcoes: ["Não — falta ponto", "Sim"],
        correta: 0,
        feedbackAcerto: "🎉 Falta ponto!",
        feedbackErro: "Frase termina com PONTO (.) ou outro sinal.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora leia o texto REVISADO.",
    perguntas: [
      {
        pergunta: "✅ 'A Gata Voadora — A gata Mimi voou. Ela caiu no jardim. Todos riram.' Está melhor?",
        opcoes: ["SIM — tem título, maiúscula e ponto", "Não"],
        correta: 0,
        feedbackAcerto: "🎉 Revisado direitinho!",
        feedbackErro: "Título ✓ · Maiúscula ✓ · Ponto ✓ — o texto ficou melhor.",
      },
      {
        pergunta: "Qual é a diferença mais importante?",
        opcoes: [
          "Agora tem TÍTULO, MAIÚSCULA e PONTO",
          "Ficou mais longo só",
          "Nada mudou",
        ],
        correta: 0,
        feedbackAcerto: "🎉 3 melhorias!",
        feedbackErro: "Comparando: agora tem título, começa com maiúscula e termina com ponto.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordem do CHECKLIST do autor.",
    bloco: {
      instrucao: "Passo 1 → passo 5.",
      itens: [
        { id: "c1", texto: "📖 Tem TÍTULO?", imagemUrl: livro },
        { id: "c2", texto: "🔠 Começa com MAIÚSCULA?", imagemUrl: lapis },
        { id: "c3", texto: "✏️ Tem PONTO/? no fim?", imagemUrl: papel },
        { id: "c4", texto: "🧩 As ideias estão na ORDEM?", imagemUrl: estrela },
        { id: "c5", texto: "💡 Tudo faz SENTIDO?", imagemUrl: coracao },
      ],
      ordemCerta: ["c1", "c2", "c3", "c4", "c5"],
      feedbackAcerto: "🎉 Checklist do autor!",
      feedbackErro: "Título → maiúscula → ponto → ordem → sentido.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Revise sozinho! Leia e responda.",
    leitura: {
      titulo: "❌ o dia do sapo",
      imagemUrl: papel,
      destacar: ["o", "sapo", "pulou"],
      paragrafos: [
        "o sapo pulou no lago",
        "ele nadou muito",
        "e dormiu na folha",
      ],
    },
    perguntas: [
      {
        pergunta: "O TÍTULO está bom?",
        opcoes: [
          "Não — precisa de MAIÚSCULA no começo",
          "Sim, perfeito",
          "Não tem título",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Maiúscula!",
        feedbackErro: "O título é 'o dia do sapo' — falta MAIÚSCULA: 'O dia do sapo'.",
        ondeEstaNoTexto: "o dia do sapo",
      },
      {
        pergunta: "As FRASES estão certas?",
        opcoes: [
          "Não — falta maiúscula e ponto",
          "Sim",
          "Só falta ponto",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Precisa dos dois!",
        feedbackErro: "Faltam: começar com MAIÚSCULA e terminar com PONTO.",
      },
      {
        pergunta: "As ideias estão na ORDEM certa?",
        opcoes: [
          "Sim — pulou → nadou → dormiu",
          "Não",
          "Não sei",
        ],
        correta: 0,
        feedbackAcerto: "🎉 A ordem tá boa!",
        feedbackErro: "A sequência faz sentido: pulou → nadou → dormiu.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🔍 Revisão do Escritor",
    instrucao: "Ache o probleminha em cada frase.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🔍 Revisão do Escritor",
      bloco: {
        instrucao: "Cada frase tem UM problema. Arraste pro alvo certo.",
        itens: [
          { id: "r1", texto: "'a menina correu.'", alvoId: "maiuscula", imagemUrl: lapis },
          { id: "r2", texto: "'A menina correu'", alvoId: "ponto", imagemUrl: papel },
          { id: "r3", texto: "'A menina correu bicicleta gato'", alvoId: "sentido", imagemUrl: coracao },
          { id: "r4", texto: "'Dormiu. Comeu. Levantou.'", alvoId: "ordem", imagemUrl: estrela },
        ],
        alvos: [
          { id: "maiuscula", nome: "🔠 Falta MAIÚSCULA" },
          { id: "ponto", nome: "✏️ Falta PONTO" },
          { id: "sentido", nome: "💡 Não faz SENTIDO" },
          { id: "ordem", nome: "🧩 Está fora de ORDEM" },
        ],
        feedbackAcerto: "🎉 Olho de autor!",
        feedbackErro: "Cada frase tem um problema diferente: maiúscula, ponto, sentido ou ordem.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "🔍 Autor SEMPRE revisa.",
      "Checklist: título, maiúscula, ponto, ordem, sentido.",
      "Revisar deixa o texto MAIS BONITO pro leitor.",
    ],
    miniDesafio: {
      pergunta: "'o gato dormiu' — o que falta?",
      opcoes: ["MAIÚSCULA e PONTO", "Nada", "Título"],
      correta: 0,
      feedbackAcerto: "🎉 Maiúscula e ponto!",
      feedbackErro: "Frase precisa começar com MAIÚSCULA e terminar com PONTO: 'O gato dormiu.'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — REVISAR é…",
        opcoes: ["LER de novo pra melhorar", "Rasgar", "Esconder"],
        correta: 0,
        feedbackAcerto: "🎉 Ler pra melhorar!",
        feedbackErro: "Revisar = reler com atenção e ajustar.",
      },
      {
        pergunta: "2/5 — Toda frase começa com…",
        opcoes: ["Letra MAIÚSCULA", "Ponto", "Número"],
        correta: 0,
        feedbackAcerto: "🎉 Maiúscula!",
        feedbackErro: "Frase começa com LETRA MAIÚSCULA.",
      },
      {
        pergunta: "3/5 — Toda frase termina com…",
        opcoes: ["PONTO ou ! ou ?", "Vírgula sempre", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 . ! ?",
        feedbackErro: "Frase termina com PONTO, EXCLAMAÇÃO (!) ou PERGUNTA (?).",
      },
      {
        pergunta: "4/5 — Se as ideias estão bagunçadas…",
        opcoes: ["Ajusto a ORDEM", "Deixo assim", "Apago"],
        correta: 0,
        feedbackAcerto: "🎉 Ajusto a ordem!",
        feedbackErro: "Ideias fora de ordem → REORGANIZO.",
      },
      {
        pergunta: "5/5 — Todo livro precisa de…",
        opcoes: ["TÍTULO", "Só desenho", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 Título!",
        feedbackErro: "Todo livro precisa de TÍTULO — é o nome dele.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔍 Missão revisora",
    materiais: ["O texto da aula anterior", "Lápis"],
    passos: [
      "1) A criança lê o próprio texto em VOZ ALTA pra família.",
      "2) A família e a criança conferem juntos: título? maiúscula? ponto? ordem? sentido?",
      "3) A criança RISCA suave e reescreve o que quiser melhorar.",
    ],
    registro: "📸 Foto do texto ANTES e DEPOIS da revisão.",
  },

  recompensa: { xp: 200, moedas: 160 },
};

void brilha;
