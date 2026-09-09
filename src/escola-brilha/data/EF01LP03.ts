import type { Aula } from "../types";
import { url as abelhaImg } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as arvoreImg } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as asaImg } from "@/assets/neuro-treino/objetos/asa.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as ioioImg } from "@/assets/neuro-treino/objetos/ioio.png.asset.json";
import { url as idosoImg } from "@/assets/neuro-treino/objetos/idoso.png.asset.json";
import { url as ovelhaImg } from "@/assets/neuro-treino/objetos/ovelha.png.asset.json";
import { url as ocaImg } from "@/assets/neuro-treino/objetos/oca.png.asset.json";
import { url as ursinhoImg } from "@/assets/neuro-treino/objetos/ursinho.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";

/**
 * EF01LP03 — Aula 003 · Vogais A E I O U
 * Base: Orton-Gillingham (multissensorial) + NRP (fonética sistemática).
 * As 5 vogais são o coração de toda sílaba do português.
 */
const aula: Aula = {
  codigo: "EF01LP03",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "As 5 Vogais Mágicas — A E I O U",

  narrativa: {
    titulo: "As 5 Vogais Mágicas",
    contexto:
      "O Brilha encontrou uma casa com 5 janelas. Cada janela tem uma vogal: A, E, I, O, U. Toda vez que a boca canta uma dessas, o ar sai livre, sem trancar em nenhum lugar.",
    problema:
      "Cada vogal chama figuras diferentes: A chama ABELHA, E chama ESCOLA, I chama IOIÔ, O chama OVELHA, U chama URSINHO.",
    convite: "Bora abrir cada janela e descobrir as figuras de cada vogal?",
  },

  conhecimentosPrevios: [
    "Escutar o primeiro som de uma palavra.",
    "Reconhecer aliteração e rima.",
    "Falar palavras em voz alta com atenção.",
  ],

  missao:
    "Reconhecer as 5 vogais (A E I O U) como sons e como letras, associando cada uma a figuras que começam com aquele som.",

  objetivos: [
    "Identificar auditivamente as 5 vogais.",
    "Reconhecer visualmente as letras A, E, I, O, U.",
    "Associar cada vogal a uma figura-âncora.",
    "Perceber que TODA sílaba do português tem pelo menos 1 vogal.",
  ],

  motivacao:
    "As vogais são as estrelas do português. Sem elas, nenhuma sílaba fica de pé. Aprender as 5 é ter a chave-mestra da leitura.",

  explicacao:
    "As 5 vogais e suas âncoras:\n\n👉 A — ABELHA (boca bem aberta)\n👉 E — ESCOLA (sorriso pequeno)\n👉 I — IOIÔ (sorriso esticado)\n👉 O — OVELHA (boca em O)\n👉 U — URSINHO (boquinha de bico)\n\nNa hora de falar uma vogal, o ar sai LIVRE. Não trava nos lábios, nem na língua. Por isso vogais são chamadas de sons LIVRES.",

  explicacaoAtiva: [
    {
      texto: "A vogal A abre bem a boca. ABELHA, ARVORE, ASA — todas começam com /a/.",
      exemplo: "Fale: /a/... /a/... ABELHA.",
      imagem: abelhaImg,
      imagemAlt: "Abelha — /a/",
      checagem: {
        pergunta: "Qual figura começa com /a/?",
        opcoes: ["Abelha", "Sol", "Ursinho"],
        correta: 0,
        explicacao: "ABELHA começa com /a/.",
      },
    },
    {
      texto: "A vogal E sorri um pouquinho. ESCOLA, ESTRELA — as duas começam com /e/.",
      exemplo: "Fale: /e/... ESCOLA.",
      imagem: escolaImg,
      imagemAlt: "Escola — /e/",
      checagem: {
        pergunta: "Qual figura começa com /e/?",
        opcoes: ["Gato", "Estrela", "Ovelha"],
        correta: 1,
        explicacao: "ESTRELA começa com /e/.",
      },
    },
    {
      texto: "As vogais I, O, U cada uma tem sua boca: sorriso esticado, boca redonda e bico.",
      exemplo: "IOIÔ (/i/), OVELHA (/o/), URSINHO (/u/). Sinta a boca mudando.",
      imagem: ioioImg,
      imagemAlt: "Ioiô — /i/",
      checagem: {
        pergunta: "Qual figura começa com /u/?",
        opcoes: ["Ovelha", "Ursinho", "Ioiô"],
        correta: 1,
        explicacao: "URSINHO começa com /u/.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Vogais são A, E, I, O, U. O ar sai LIVRE.",
    nivel2: "A-abelha · E-escola · I-ioiô · O-ovelha · U-ursinho.",
    nivel3: "Toda sílaba do português tem pelo menos uma vogal.",
    nivel4: "Sem vogal, nenhuma palavra fica de pé — elas são o coração da sílaba.",
  },

  exemploResolvido: {
    enunciado: "Qual vogal começa a palavra OVELHA?",
    passos: [
      "Fale devagar: /o/... VELHA.",
      "O primeiro som é /o/.",
      "A vogal /o/ é a letra O.",
    ],
    resposta: "A vogal O — porque OVELHA começa com /o/.",
  },

  atividadeGuiada: {
    enunciado: "Toque na figura que começa com a vogal A.",
    resposta: "ABELHA — começa com /a/.",
    explicacao: "Fale devagar cada figura antes de tocar. Só ABELHA começa com /a/.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura começa com /a/?",
      opcoes: [
        { nome: "abelha", imagemUrl: abelhaImg },
        { nome: "escola", imagemUrl: escolaImg },
        { nome: "ovelha", imagemUrl: ovelhaImg },
        { nome: "ursinho", imagemUrl: ursinhoImg },
      ],
      respostaCerta: "abelha",
    },
  },

  exercicios: [
    {
      enunciado: "🔊 Qual figura começa com /e/: ESTRELA, ABELHA ou URSINHO?",
      resposta: "ESTRELA — começa com /e/.",
      dica: "Fale devagar: /e/STRELA.",
    },
    {
      enunciado: "🎧 IOIÔ começa com qual vogal?",
      resposta: "Com a vogal I — /i/OIÔ.",
      dica: "Sorriso esticado = /i/.",
    },
    {
      enunciado: "🐻 URSINHO e OVELHA começam com a mesma vogal?",
      resposta: "Não. URSINHO com /u/, OVELHA com /o/.",
      dica: "Sinta a boca mudar de bico para redonda.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: encaixar cada figura na sua vogal (A, E, I, O, U).",
    resposta: "A→abelha · E→escola · I→ioiô · O→ovelha · U→ursinho.",
    visual: {
      cena: [
        { personagem: "🅰️ A", itemImagemUrl: abelhaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "🇪 E", itemImagemUrl: escolaImg, quantidade: 1, cor: "#34D399" },
        { personagem: "🇮 I", itemImagemUrl: ioioImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "🇴 O", itemImagemUrl: ovelhaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "🇺 U", itemImagemUrl: ursinhoImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        {
          pergunta: "Qual figura vai na janela A?",
          opcoes: ["Escola", "Abelha", "Ovelha"],
          correta: 1,
          explicacao: "ABELHA começa com /a/.",
        },
        {
          pergunta: "Qual figura vai na janela O?",
          opcoes: ["Ovelha", "Ursinho", "Ioiô"],
          correta: 0,
          explicacao: "OVELHA começa com /o/.",
        },
        {
          pergunta: "Qual figura vai na janela U?",
          opcoes: ["Estrela", "Abelha", "Ursinho"],
          correta: 2,
          explicacao: "URSINHO começa com /u/.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "As 5 vogais: A, E, I, O, U.",
      "Toda vogal deixa o ar sair LIVRE.",
      "Cada uma tem uma figura-âncora (A-abelha · E-escola · I-ioiô · O-ovelha · U-ursinho).",
      "Toda sílaba tem pelo menos uma vogal.",
    ],
    dica: "Se a boca abre livre e sem travar, é vogal.",
  },

  quiz: [
    {
      pergunta: "Qual figura começa com /a/?",
      opcoes: ["Abelha", "Escola", "Ursinho"],
      correta: 0,
      explicacao: "ABELHA — /a/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: abelhaImg, quantidade: 1, rotulo: "abelha" },
          { imagemUrl: escolaImg, quantidade: 1, rotulo: "escola" },
          { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "ursinho" },
        ],
      },
    },
    {
      pergunta: "Qual figura começa com /o/?",
      opcoes: ["Ioiô", "Ovelha", "Estrela"],
      correta: 1,
      explicacao: "OVELHA — /o/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: ioioImg, quantidade: 1, rotulo: "ioiô" },
          { imagemUrl: ovelhaImg, quantidade: 1, rotulo: "ovelha" },
          { imagemUrl: estrelaImg, quantidade: 1, rotulo: "estrela" },
        ],
      },
    },
    {
      pergunta: "Qual vogal falta: A, E, ?, O, U?",
      opcoes: ["I", "P", "S"],
      correta: 0,
      explicacao: "A ordem das vogais é A E I O U. Falta o I.",
    },
    {
      pergunta: "Toda sílaba do português precisa ter…",
      opcoes: ["Uma consoante", "Uma vogal", "Nada"],
      correta: 1,
      explicacao: "Vogal é obrigatória em toda sílaba do português.",
    },
  ],

  conclusao:
    "🏅 Medalha: Guardião das Vogais! Missão em Casa: caçar em revistas e livros 1 figura para cada vogal (A, E, I, O, U) e fazer um pôster juntos.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Em português a gente tem 5 vogais escritas mas mais de 10 sons de vogal quando junta com nasal (ã, õ). Por enquanto vamos só das 5 mágicas — o resto vem depois!",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · A de Abelha",
      instrucao: "Toque na figura que começa com /a/.",
      grupos: [
        { imagemUrl: abelhaImg, quantidade: 1, rotulo: "abelha" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Qual começa com /a/?",
      opcoes: ["Sol", "Abelha", "Gato"],
      correta: 1,
      acerto: "Isso! ABELHA — vogal A.",
      erro: "Fale /a/BELHA. Boca bem aberta.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Cada vogal com sua figura",
      instrucao: "Ligue cada vogal à figura que começa com ela.",
      pares: [
        { a: "A", b: "Abelha", aImagem: estrelaImg, bImagem: abelhaImg },
        { a: "E", b: "Escola", aImagem: estrelaImg, bImagem: escolaImg },
        { a: "I", b: "Ioiô", aImagem: estrelaImg, bImagem: ioioImg },
        { a: "O", b: "Ovelha", aImagem: estrelaImg, bImagem: ovelhaImg },
        { a: "U", b: "Ursinho", aImagem: estrelaImg, bImagem: ursinhoImg },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Fase 3 · A ordem das vogais",
      instrucao: "Coloque as vogais na ordem A E I O U.",
      itens: ["A · abelha", "E · escola", "I · ioiô", "O · ovelha", "U · ursinho"],
      imagens: [
        { imagemUrl: abelhaImg, quantidade: 1, rotulo: "A" },
        { imagemUrl: escolaImg, quantidade: 1, rotulo: "E" },
        { imagemUrl: ioioImg, quantidade: 1, rotulo: "I" },
        { imagemUrl: ovelhaImg, quantidade: 1, rotulo: "O" },
        { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "U" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · U de Ursinho",
      instrucao: "Toque na figura que começa com /u/.",
      grupos: [
        { imagemUrl: ovelhaImg, quantidade: 1, rotulo: "ovelha" },
        { imagemUrl: ursinhoImg, quantidade: 1, rotulo: "ursinho" },
        { imagemUrl: escolaImg, quantidade: 1, rotulo: "escola" },
      ],
      pergunta: "Qual começa com /u/?",
      opcoes: ["Ovelha", "Ursinho", "Escola"],
      correta: 1,
      acerto: "URSINHO — vogal U.",
      erro: "Boca de bico: /u/RSINHO.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Caça à vogal E",
      instrucao: "Quem começa com /e/?",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "estrela" },
        { imagemUrl: abelhaImg, quantidade: 1, rotulo: "abelha" },
        { imagemUrl: ioioImg, quantidade: 1, rotulo: "ioiô" },
      ],
      pergunta: "Qual começa com /e/?",
      opcoes: ["Abelha", "Estrela", "Ioiô"],
      correta: 1,
      acerto: "ESTRELA — vogal E.",
      erro: "Sorriso pequeno: /e/STRELA.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Vogal A começa qual figura?",
        opcoes: ["Abelha", "Sol", "Gato"],
        correta: 0,
        explicacao: "ABELHA.",
        visual: { tipo: "itens", imagemUrl: abelhaImg, quantidade: 1, rotulo: "abelha" },
      },
      {
        pergunta: "Vogal E começa qual figura?",
        opcoes: ["Escola", "Ovelha", "Ursinho"],
        correta: 0,
        explicacao: "ESCOLA.",
        visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "escola" },
      },
      {
        pergunta: "Vogal I começa qual figura?",
        opcoes: ["Abelha", "Ioiô", "Ovelha"],
        correta: 1,
        explicacao: "IOIÔ.",
        visual: { tipo: "itens", imagemUrl: ioioImg, quantidade: 1, rotulo: "ioiô" },
      },
    ],
    medio: [
      {
        pergunta: "Qual figura NÃO começa com vogal?",
        opcoes: ["Abelha", "Gato", "Ovelha"],
        correta: 1,
        explicacao: "GATO começa com /g/ (consoante).",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: abelhaImg, quantidade: 1, rotulo: "abelha" },
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
            { imagemUrl: ovelhaImg, quantidade: 1, rotulo: "ovelha" },
          ],
        },
      },
      {
        pergunta: "OCA e OVELHA começam com qual vogal?",
        opcoes: ["A", "O", "U"],
        correta: 1,
        explicacao: "As duas com /o/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: ocaImg, quantidade: 1, rotulo: "OCA", cor: "#FBBF24" },
            { imagemUrl: ovelhaImg, quantidade: 1, rotulo: "OVELHA", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "IDOSO e IOIÔ começam com qual vogal?",
        opcoes: ["I", "E", "U"],
        correta: 0,
        explicacao: "As duas com /i/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: idosoImg, quantidade: 1, rotulo: "IDOSO", cor: "#F472B6" },
            { imagemUrl: ioioImg, quantidade: 1, rotulo: "IOIÔ", cor: "#34D399" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta: "Qual figura começa com vogal DIFERENTE das outras duas?",
        opcoes: ["Abelha", "Asa", "Escola"],
        correta: 2,
        explicacao: "Abelha e Asa começam com /a/. Escola com /e/.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: abelhaImg, quantidade: 1, rotulo: "abelha" },
            { imagemUrl: asaImg, quantidade: 1, rotulo: "asa" },
            { imagemUrl: escolaImg, quantidade: 1, rotulo: "escola" },
          ],
        },
      },
      {
        pergunta: "Qual grupo tem 3 figuras com vogais DIFERENTES?",
        opcoes: [
          "Abelha-Escola-Ursinho",
          "Abelha-Asa-Arvore",
          "Ovelha-Oca-Ovelha",
        ],
        correta: 0,
        explicacao: "A · E · U — três vogais diferentes.",
      },
      {
        pergunta: "Toda sílaba do português precisa de:",
        opcoes: ["Consoante", "Vogal", "Ponto"],
        correta: 1,
        explicacao: "Vogal é o núcleo obrigatório da sílaba.",
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP04",
    titulo: "A letra M — som /m/ (mãe, mel, mão)",
  },
};

export default aula;
