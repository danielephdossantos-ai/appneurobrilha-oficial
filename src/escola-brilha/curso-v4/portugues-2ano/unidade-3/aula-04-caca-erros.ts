import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import gato from "@/assets/neuro-treino/objetos/gato.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";

/**
 * Unidade 3 · Aula 4 — Caça aos Erros
 * -------------------------------------------------------------
 * A criança vira DETETIVE ORTOGRÁFICO. Ajuda Aurora a revisar
 * livros comparando a escrita CERTA e a ERRADA e explicando por que.
 *
 * BNCC: EF02LP06 · EF02LP07 · EF02LP08
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-caca-erros",
  titulo: "Caça aos Erros",
  iconeTrilha: "🔍",
  bncc: ["EF02LP06", "EF02LP07", "EF02LP08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Aurora precisa revisar!",
    historia:
      "Aurora chega com uma pilha de livros. — Alguns tem palavras escritas ERRADAS! Preciso de um DETETIVE ORTOGRÁFICO pra achar os erros. Aceita a missão? A criança vira detetive por um dia.",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Duas escritas da mesma palavra. Qual está CERTA?",
    bloco: {
      titulo: "CASA ou CASZA?",
      recado: {
        icone: "🔍",
        rotulo: "Caça-erros",
        estilo: "cartaz",
        linhas: ["CASA   x   CASZA"],
      },
      pergunta: "Qual está escrita CERTA?",
      hipoteses: [
        { texto: "CASA (jeito certo).", imagemUrl: casa },
        { texto: "CASZA (jeito errado).", imagemUrl: papel },
        { texto: "As duas estão certas.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 CASA! Só 4 letras: C-A-S-A. CASZA tem uma letra a MAIS.",
      feedbackErro:
        "Fala em voz alta: CA-SA. Duas sílabas: CA e SA. A escrita certa é CASA. CASZA tem letra a mais.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras do detetive.",
    cards: [
      {
        palavra: "revisar",
        explicacao:
          "É LER de novo o que a gente escreveu procurando ERROS pra corrigir.",
        exemplo: "Depois de escrever, sempre REVISE.",
        imagemUrl: lapis,
      },
      {
        palavra: "ortografia",
        explicacao:
          "É o jeito CERTO de escrever as palavras.",
        exemplo: "CASA tem ortografia CERTA. CASZA tem ortografia ERRADA.",
        imagemUrl: papel,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia com Brilha o que faz um bom detetive de palavras.",
    leitura: {
      titulo: "O detetive ortográfico",
      imagemUrl: brilha,
      destacar: ["revisam", "letra", "sílaba"],
      paragrafos: [
        "Bons escritores sempre REVISAM o que escrevem.",
        "Pra revisar, você lê em VOZ ALTA e presta atenção em CADA letra e CADA sílaba.",
        "Se sobrar letra (CASZA) ou faltar letra (CAA), a palavra está errada.",
        "Aí é só APAGAR e escrever de novo, do jeito certo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Qual está CERTA em cada dupla?",
    perguntas: [
      {
        pergunta: "Qual está CERTA?",
        opcoes: ["BOLA", "BOLLA", "BLOA"],
        correta: 0,
        feedbackAcerto: "🎉 BOLA — BO + LA, 4 letras.",
        feedbackErro:
          "Fala: BO-LA. Duas sílabas. Só 4 letras: B-O-L-A. BOLA.",
      },
      {
        pergunta: "Qual está CERTA?",
        opcoes: ["LIVRO", "LIVERO", "LIVRRO"],
        correta: 0,
        feedbackAcerto: "🎉 LIVRO!",
        feedbackErro: "LI-VRO. Duas sílabas. 5 letras: L-I-V-R-O.",
      },
      {
        pergunta: "Qual está CERTA?",
        opcoes: ["ESCLA", "ESCOLA", "ESCUELA"],
        correta: 1,
        feedbackAcerto: "🎉 ESCOLA!",
        feedbackErro: "ES-CO-LA. Três sílabas. 6 letras: E-S-C-O-L-A.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "Nessa aula, quem age é o DETETIVE (você). Vamos treinar o que ele faz.",
    perguntas: [
      {
        pergunta: "O detetive ortográfico faz o quê primeiro?",
        opcoes: [
          "Escreve rápido sem olhar",
          "LÊ com atenção o que já foi escrito",
          "Rasga o papel",
        ],
        correta: 1,
        feedbackAcerto: "🎉 LÊ com atenção pra achar o erro.",
        feedbackErro:
          "Primeiro passo do detetive: LER de novo, devagar, olhando cada letra.",
      },
      {
        pergunta: "Se achar um erro, o detetive…",
        opcoes: [
          "Deixa como está",
          "APAGA e escreve certo",
          "Chora",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Apaga e escreve certo. Isso é REVISAR.",
        feedbackErro: "Detetive REVISA: apaga o errado e escreve certo.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque na ORDEM os passos que um bom detetive ortográfico faz.",
    bloco: {
      instrucao: "Escrever → Ler devagar → Achar erro → Corrigir.",
      itens: [
        {
          id: "p1",
          texto: "Escrever a palavra ou frase.",
          imagemUrl: lapis,
        },
        {
          id: "p2",
          texto: "Ler de novo, DEVAGAR e em voz alta.",
          imagemUrl: brilha,
        },
        {
          id: "p3",
          texto: "Achar a letra que está sobrando ou faltando.",
          imagemUrl: papel,
        },
        {
          id: "p4",
          texto: "Apagar e escrever CERTO.",
          imagemUrl: lapis,
        },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Escrever → ler → achar → corrigir.",
      feedbackErro:
        "Primeiro ESCREVE. Depois LÊ. Depois ACHA o erro. Só então CORRIGE.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia o pequeno texto e ache a palavra errada.",
    leitura: {
      titulo: "A frase do Miguel",
      imagemUrl: papel,
      destacar: ["gato", "bola"],
      paragrafos: [
        "Miguel escreveu no caderno:",
        "'Meu GAATO adora a BOLLA'.",
        "Aurora leu e riu: — Duas palavras estão ERRADAS!",
      ],
    },
    perguntas: [
      {
        pergunta: "'GAATO' — como se escreve CERTO?",
        opcoes: ["GATO", "GAATO", "GHATO"],
        correta: 0,
        feedbackAcerto: "🎉 GATO — sobrou um A.",
        feedbackErro: "GA-TO. Duas sílabas. Só um A: GATO.",
        ondeEstaNoTexto: "Meu GAATO",
      },
      {
        pergunta: "'BOLLA' — como se escreve CERTO?",
        opcoes: ["BOLA", "BOLLA", "BOULA"],
        correta: 0,
        feedbackAcerto: "🎉 BOLA — sobrou um L.",
        feedbackErro: "BO-LA. Só um L: BOLA.",
        ondeEstaNoTexto: "a BOLLA",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Detetive Ortográfico",
    instrucao:
      "Nessa mistura de palavras, marque APENAS as que estão escritas CERTAS.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "🔍 Detetive Ortográfico",
      bloco: {
        instrucao: "Cuidado: algumas palavras estão erradas! Marque só as CERTAS.",
        pergunta: "Quais palavras estão escritas do jeito CERTO?",
        opcoes: [
          { id: "o1", texto: "CASA", imagemUrl: casa, correto: true },
          { id: "o2", texto: "CASZA", imagemUrl: papel, correto: false },
          { id: "o3", texto: "BOLA", imagemUrl: bola, correto: true },
          { id: "o4", texto: "BOLLA", imagemUrl: papel, correto: false },
          { id: "o5", texto: "GATO", imagemUrl: gato, correto: true },
          { id: "o6", texto: "GAATO", imagemUrl: papel, correto: false },
          { id: "o7", texto: "LIVRO", imagemUrl: livro, correto: true },
          { id: "o8", texto: "LIVROU", imagemUrl: papel, correto: false },
          { id: "o9", texto: "ESCOLA", imagemUrl: escola, correto: true },
          { id: "o10", texto: "BANANA", imagemUrl: banana, correto: true },
        ],
        feedbackAcerto:
          "🎉 Missão detetive completa! Você achou todas as escritas corretas.",
        feedbackErro:
          "Fala CADA palavra em voz alta separando as sílabas. Se sobrar letra ou faltar letra, está errada.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "REVISAR = ler de novo procurando ERROS.",
      "Bom escritor SEMPRE revisa antes de entregar.",
      "Erros comuns: LETRA SOBRANDO (CASZA), LETRA FALTANDO (CAA), TROCADA (CAZA).",
      "Fala em VOZ ALTA e conta as sílabas pra achar o erro.",
    ],
    miniDesafio: {
      pergunta: "Qual está CERTA?",
      opcoes: ["BANANA", "BANNANA", "BANNA"],
      correta: 0,
      feedbackAcerto: "🎉 BANANA — BA-NA-NA, três sílabas, 6 letras.",
      feedbackErro: "Fala BA-NA-NA. Cada NA é 2 letras. Total 6 letras: BANANA.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual está CERTA?",
        opcoes: ["CASA", "CASZA"],
        correta: 0,
        feedbackAcerto: "🎉 CASA.",
        feedbackErro: "CA-SA = 4 letras. CASA.",
      },
      {
        pergunta: "2/5 — Qual está CERTA?",
        opcoes: ["GATO", "GAATO"],
        correta: 0,
        feedbackAcerto: "🎉 GATO.",
        feedbackErro: "GA-TO = só um A. GATO.",
      },
      {
        pergunta: "3/5 — Qual está CERTA?",
        opcoes: ["BOLLA", "BOLA"],
        correta: 1,
        feedbackAcerto: "🎉 BOLA.",
        feedbackErro: "BO-LA = 4 letras. Só um L. BOLA.",
      },
      {
        pergunta: "4/5 — O que um bom escritor faz depois de escrever?",
        opcoes: [
          "REVISA lendo de novo",
          "Rasga o papel",
          "Nada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 REVISA!",
        feedbackErro: "Sempre revisar. Ler de novo e conferir cada letra.",
      },
      {
        pergunta: "5/5 — Achou o erro. O que faz?",
        opcoes: [
          "Deixa lá",
          "APAGA e escreve certo",
          "Chama a mãe",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Apaga e escreve certo. Detetive de verdade!",
        feedbackErro: "Achou o erro? APAGA e escreve do jeito certo.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔍 Detetive na cozinha",
    materiais: ["Um alimento com embalagem", "Papel", "Lápis"],
    passos: [
      "1) A criança escolhe UM alimento da cozinha (arroz, biscoito, leite).",
      "2) Copia o nome que está escrito na embalagem no papel.",
      "3) Depois ESCREVE de novo, sem olhar, e compara letra por letra.",
      "4) Se sobrou ou faltou letra, apaga e corrige.",
      "5) Conta pra família: 'A palavra tem X sílabas e X letras'.",
    ],
    registro:
      "📸 Uma foto da embalagem ao lado da palavra escrita pela criança.",
  },

  recompensa: { xp: 120, moedas: 70 },
};

void brilha;
