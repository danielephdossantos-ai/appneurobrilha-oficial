import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import dado from "@/assets/neuro-treino/objetos/dado.png";
import gato from "@/assets/neuro-treino/objetos/gato.png";
import abelha from "@/assets/neuro-treino/objetos/abelha.png";
import cachorro from "@/assets/neuro-treino/objetos/cachorro.png";
import elefante from "@/assets/neuro-treino/objetos/leao.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";

/**
 * Unidade 3 · Aula 2 — O Trem do Alfabeto
 * -------------------------------------------------------------
 * Os vagões do trem do alfabeto se soltaram. A criança precisa
 * colocar cada letra na ordem certa e depois ordenar palavras em
 * ordem alfabética — como num dicionário ou numa agenda.
 *
 * BNCC: EF02LP06 · EF02LP07 · EF02LP14
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-trem-alfabeto",
  titulo: "O Trem do Alfabeto",
  iconeTrilha: "🚂",
  bncc: ["EF02LP06", "EF02LP07", "EF02LP14"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O trem se desmontou!",
    historia:
      "Um trem enorme aparece na Oficina. Cada vagão tem uma LETRA. Só que os vagões se embaralharam! Aurora explica: — Sem o alfabeto na ORDEM, ninguém acha nada no dicionário nem na lista da chamada. Vamos organizar?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Aurora abriu o dicionário. Antes de continuar: pra que serve a ordem alfabética?",
    bloco: {
      titulo: "A ordem do alfabeto",
      recado: {
        icone: "🔤",
        rotulo: "Trecho do alfabeto",
        estilo: "cartaz",
        linhas: ["A  B  C  D  E  F  G"],
      },
      pergunta: "Pra que serve colocar palavras em ORDEM ALFABÉTICA?",
      hipoteses: [
        {
          texto: "Pra ACHAR palavras rápido (dicionário, agenda, lista).",
          imagemUrl: livro,
        },
        {
          texto: "Só pra deixar bonito.",
          imagemUrl: papel,
        },
        {
          texto: "Pra escrever histórias mais longas.",
          imagemUrl: livro,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Ordem alfabética ajuda a ENCONTRAR palavras rapidinho.",
      feedbackErro:
        "Se as palavras estão em ordem, você abre no meio, vê a letra e sabe pra que lado ir. Serve pra ACHAR rápido.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavrinhas importantes.",
    cards: [
      {
        palavra: "alfabeto",
        explicacao:
          "É o conjunto das 26 LETRAS numa ordem fixa: A, B, C, D…",
        exemplo: "O alfabeto começa com A e termina com Z.",
        imagemUrl: livro,
      },
      {
        palavra: "ordem alfabética",
        explicacao:
          "É colocar palavras na ordem das primeiras LETRAS: ABELHA vem antes de BOLA porque A vem antes de B.",
        exemplo: "ABELHA · BOLA · CASA — em ordem alfabética.",
        imagemUrl: papel,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "O alfabeto inteiro",
    instrucao:
      "Antes de organizar o trem, conheça as 26 LETRAS do alfabeto. Toque em cada uma pra ouvir o nome e uma palavra que começa com ela.",
    blocos: [
      {
        tipo: "alfabetoCompleto",
        exemplos: {
          A: "ABELHA", B: "BOLA", C: "CASA", D: "DADO", E: "ELEFANTE",
          F: "FLOR", G: "GATO", H: "HIENA", I: "IGREJA", J: "JACARÉ",
          L: "LIVRO", M: "MÃO", N: "NARIZ", O: "OVO", P: "PATO",
          Q: "QUEIJO", R: "RATO", S: "SOL", T: "TATU", U: "UVA",
          V: "VACA", X: "XÍCARA", Z: "ZEBRA",
        },
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia com Brilha. Preste atenção na PRIMEIRA letra de cada palavra.",
    leitura: {
      titulo: "Como funciona a ordem alfabética",
      imagemUrl: brilha,
      destacar: ["primeira", "letra", "A", "B", "C"],
      paragrafos: [
        "A ordem alfabética olha a PRIMEIRA LETRA de cada palavra.",
        "Se a primeira letra é IGUAL, a gente olha a SEGUNDA letra.",
        "Ex.: BOLA vem antes de BRAÇO porque BO vem antes de BR.",
        "Aurora usa isso pra achar livros na estante.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Pense na primeira letra.",
    perguntas: [
      {
        pergunta: "Qual dessas letras vem PRIMEIRO no alfabeto?",
        opcoes: ["M", "B", "T"],
        correta: 1,
        feedbackAcerto: "🎉 B vem antes de M e T.",
        feedbackErro: "Alfabeto: A, B, C… M vem lá pro meio. B é a segunda letra.",
      },
      {
        pergunta: "Entre CASA e ABELHA, qual vem PRIMEIRO?",
        opcoes: ["CASA (começa com C)", "ABELHA (começa com A)"],
        correta: 1,
        feedbackAcerto: "🎉 ABELHA — A vem antes de C.",
        feedbackErro: "A é a 1ª letra. C é a 3ª. Quem começa com A vem antes.",
      },
      {
        pergunta: "E entre GATO e DADO?",
        opcoes: ["GATO primeiro", "DADO primeiro"],
        correta: 1,
        feedbackAcerto: "🎉 DADO — D vem antes de G.",
        feedbackErro: "D vem antes de G no alfabeto. DADO primeiro.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos treinar com nomes de bichos.",
    perguntas: [
      {
        pergunta: "Em ordem alfabética: GATO, CACHORRO, ABELHA. Qual vem PRIMEIRO?",
        opcoes: ["GATO", "CACHORRO", "ABELHA"],
        correta: 2,
        feedbackAcerto: "🎉 ABELHA — A é a primeira letra do alfabeto.",
        feedbackErro: "Ordem: A antes de C antes de G. ABELHA vem primeiro.",
      },
      {
        pergunta: "E qual vem POR ÚLTIMO?",
        opcoes: ["GATO", "CACHORRO", "ABELHA"],
        correta: 0,
        feedbackAcerto: "🎉 GATO — G vem depois de A e C.",
        feedbackErro: "A < C < G. Quem começa com G vem por último.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque essas 4 palavras em ORDEM ALFABÉTICA (a que começa com letra menor primeiro).",
    bloco: {
      instrucao: "Ordem alfabética: ABELHA · BOLA · CASA · DADO.",
      itens: [
        { id: "s1", texto: "ABELHA", imagemUrl: abelha },
        { id: "s2", texto: "BOLA", imagemUrl: bola },
        { id: "s3", texto: "CASA", imagemUrl: casa },
        { id: "s4", texto: "DADO", imagemUrl: dado },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Perfeito! A · B · C · D.",
      feedbackErro:
        "Olha a PRIMEIRA letra: A → B → C → D. Quem começa com A vem primeiro.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "A estante da Aurora",
      imagemUrl: livro,
      destacar: ["alfabética", "primeira", "letra"],
      paragrafos: [
        "Aurora organizou os livros em ordem ALFABÉTICA:",
        "AVENTURA · BALEIA · CAVALO · DINOSSAURO · ESTRELA.",
        "Se um livro novo chegar chamado 'CACHORRO', ele fica entre BALEIA e CAVALO.",
      ],
    },
    perguntas: [
      {
        pergunta: "Se chegar um livro 'FLOR', ele vai ficar…",
        opcoes: ["No começo", "Depois de ESTRELA (no fim)", "Entre AVENTURA e BALEIA"],
        correta: 1,
        feedbackAcerto: "🎉 F vem depois de E. Fica DEPOIS de ESTRELA.",
        feedbackErro:
          "F vem DEPOIS de E no alfabeto. FLOR entra depois de ESTRELA.",
      },
      {
        pergunta: "Entre BALEIA e CAVALO, qual palavra caberia?",
        opcoes: ["ABACAXI", "BONECA", "DADO"],
        correta: 1,
        feedbackAcerto:
          "🎉 BONECA — começa com B, vem depois de BALEIA (BA < BO) e antes de CAVALO.",
        feedbackErro:
          "BALEIA (B) e CAVALO (C). Precisa de algo entre BA e C. BONECA (BO) cabe.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Trem do Alfabeto",
    instrucao:
      "Os vagões do trem se soltaram! Coloque as PRIMEIRAS letras do alfabeto na ordem certa.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "🚂 Trem do Alfabeto",
      bloco: {
        instrucao: "Ordem certa das letras: A · B · C · D · E · F.",
        itens: [
          { id: "L1", texto: "A" },
          { id: "L2", texto: "B" },
          { id: "L3", texto: "C" },
          { id: "L4", texto: "D" },
          { id: "L5", texto: "E" },
          { id: "L6", texto: "F" },
        ],
        ordemCerta: ["L1", "L2", "L3", "L4", "L5", "L6"],
        feedbackAcerto:
          "🎉 Chuuu-chuuu! Trem do alfabeto arrumado: A · B · C · D · E · F.",
        feedbackErro:
          "Comece do começo: A é a PRIMEIRA. Depois B, C, D, E, F.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "ALFABETO = as 26 letras numa ordem fixa (A até Z).",
      "ORDEM ALFABÉTICA olha a PRIMEIRA letra de cada palavra.",
      "Se a primeira letra empata, olha a SEGUNDA.",
      "Serve pra ACHAR palavras rápido no dicionário, agenda e listas.",
    ],
    miniDesafio: {
      pergunta: "Em ordem: DADO, ABELHA, GATO. Qual fica no MEIO?",
      opcoes: ["DADO", "ABELHA", "GATO"],
      correta: 0,
      feedbackAcerto: "🎉 DADO — A < D < G, então DADO fica no meio.",
      feedbackErro: "Ordem A, D, G. Quem tá no meio começa com D.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual letra vem PRIMEIRO no alfabeto?",
        opcoes: ["G", "A", "M"],
        correta: 1,
        feedbackAcerto: "🎉 A!",
        feedbackErro: "A é a PRIMEIRA letra do alfabeto.",
      },
      {
        pergunta: "2/5 — Entre BOLA e ABELHA, qual vem primeiro?",
        opcoes: ["BOLA", "ABELHA"],
        correta: 1,
        feedbackAcerto: "🎉 ABELHA (A antes de B).",
        feedbackErro: "A vem antes de B. ABELHA primeiro.",
      },
      {
        pergunta: "3/5 — CASA, DADO, ABELHA em ordem alfabética:",
        opcoes: [
          "CASA · DADO · ABELHA",
          "ABELHA · CASA · DADO",
          "DADO · CASA · ABELHA",
        ],
        correta: 1,
        feedbackAcerto: "🎉 A · C · D.",
        feedbackErro: "Olhe a primeira letra: A, C, D. Essa é a ordem.",
      },
      {
        pergunta: "4/5 — Um livro 'CACHORRO' na estante com BALEIA e CAVALO fica…",
        opcoes: [
          "Antes de BALEIA",
          "Entre BALEIA e CAVALO",
          "Depois de CAVALO",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! BA < CA < CAV.",
        feedbackErro:
          "BALEIA começa BA. CACHORRO começa CA. CAVALO começa CA-V. Ordem: BA, CA, CAV. CACHORRO fica no meio.",
      },
      {
        pergunta: "5/5 — Pra que serve ordem alfabética?",
        opcoes: [
          "Contar histórias",
          "Achar palavras rápido",
          "Fazer contas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Achar rápido!",
        feedbackErro: "Serve pra ENCONTRAR palavras rápido em listas.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🚂 Nossa lista em ordem alfabética",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) A criança escolhe 5 nomes da família (pai, mãe, primos, avós).",
      "2) Escreve cada nome numa linha.",
      "3) Depois, coloca os nomes em ORDEM ALFABÉTICA — do menor pro maior.",
      "4) Confere olhando a primeira letra de cada nome.",
      "5) Cole a lista na geladeira.",
    ],
    registro:
      "📸 Uma foto da lista organizada em ordem alfabética.",
  },

  recompensa: { xp: 120, moedas: 70 },
};

void brilha;
void gato;
void cachorro;
void elefante;
