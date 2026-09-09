import type { Aula } from "../types";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as nuvemImg } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";

/**
 * EF01LP20 — Aula 020 · MINHA PRIMEIRA LEITURA FLUENTE
 * Fecha o Lote 5. Mini-texto de 3 frases lido com fluência inicial.
 */
const aula: Aula = {
  codigo: "EF01LP20",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Minha Primeira Leitura Fluente",
  narrativa: {
    titulo: "Minha Primeira Leitura Fluente",
    contexto:
      "Brilha juntou tudo o que aprendeu: sílabas, palavras, frases. Hoje ele vai LER SOZINHO um mini-texto de 3 frases — a primeira leitura fluente da vida dele.",
    problema:
      "Ler fluente é ler seguido, sem gaguejar em cada sílaba, com pausa nos pontos e sentido nas palavras.",
    convite: "Bora fazer sua primeira leitura fluente do jeito certo?",
  },
  conhecimentosPrevios: [
    "Ler frases de 3 a 5 palavras (LP15, LP17).",
    "Perceber espaço, maiúscula e ponto (LP16, LP18).",
    "Ler mini-texto de 2 frases (LP19).",
  ],
  missao: "Ler um mini-texto de 3 frases com fluência inicial, entendendo o que leu.",
  objetivos: [
    "Ler 3 frases seguidas sem parar em cada sílaba.",
    "Fazer pausa maior em cada ponto final.",
    "Manter o sentido do mini-texto.",
    "Responder perguntas de compreensão sobre o texto.",
  ],
  motivacao:
    "Ler fluente é o começo da autonomia. Quem lê fluente aprende sozinho o resto da vida.",
  explicacao:
    "Mini-texto de hoje:\n\n👉 'O SOL BRILHA. A NUVEM PASSA. A FLOR ABRE.'\n\nComo ler fluente:\n1) Não pare em cada sílaba. Junte a palavra inteira.\n2) Pausinha entre palavras (espaço).\n3) Pausa MAIOR no ponto final.\n4) No fim, pense: o que aconteceu no texto?\n\nOutro mini-texto:\n👉 'O PATO NADA. O SAPO PULA. O GATO OLHA.'",
  explicacaoAtiva: [
    {
      texto: "Leia devagar mas seguido: 'O SOL BRILHA. A NUVEM PASSA. A FLOR ABRE.'",
      exemplo: "3 frases · 3 pontos · 3 pausas maiores.",
      imagem: solImg,
      imagemAlt: "Sol brilhando",
      checagem: {
        pergunta: "Quantas frases tem o mini-texto?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "3 frases, 3 pontos.",
      },
    },
    {
      texto: "Compreensão: o que o SOL faz no texto?",
      exemplo: "1ª frase: O SOL BRILHA. Verbo = BRILHA.",
      imagem: solImg,
      imagemAlt: "Sol",
      checagem: {
        pergunta: "O que o SOL faz no texto?",
        opcoes: ["Passa", "Brilha", "Abre"],
        correta: 1,
        explicacao: "O sol BRILHA (1ª frase).",
      },
    },
    {
      texto: "E a FLOR? Aparece em qual frase?",
      exemplo: "3ª frase: A FLOR ABRE.",
      imagem: florImg,
      imagemAlt: "Flor abrindo",
      checagem: {
        pergunta: "O que a FLOR faz no texto?",
        opcoes: ["Brilha", "Passa", "Abre"],
        correta: 2,
        explicacao: "A flor ABRE (3ª frase).",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Ler fluente = ler seguido, sem gaguejar em cada sílaba.",
    nivel2: "Pausinha no espaço, pausa MAIOR no ponto.",
    nivel3: "Depois de ler, pense: o que aconteceu no texto?",
    nivel4: "Fluência inicial + compreensão: leitor autônomo emergente.",
  },
  exemploResolvido: {
    enunciado: "Leia: 'O PATO NADA. O SAPO PULA. O GATO OLHA.' O que o GATO faz?",
    passos: [
      "Leio as 3 frases com pausa nos pontos.",
      "Procuro a frase do gato: 3ª frase.",
      "3ª frase: 'O GATO OLHA.'",
      "Resposta: o gato OLHA.",
    ],
    resposta: "OLHA.",
  },
  atividadeGuiada: {
    enunciado: "No mini-texto 'O SOL BRILHA. A NUVEM PASSA. A FLOR ABRE.', quem BRILHA?",
    resposta: "O SOL.",
    explicacao: "1ª frase: O SOL BRILHA.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Quem BRILHA?",
      opcoes: [
        { nome: "sol", imagemUrl: solImg },
        { nome: "nuvem", imagemUrl: nuvemImg },
        { nome: "flor", imagemUrl: florImg },
      ],
      respostaCerta: "sol",
    },
  },
  exercicios: [
    { enunciado: "🔊 'O SOL BRILHA. A NUVEM PASSA. A FLOR ABRE.' — quantas frases?", resposta: "3.", dica: "Conte os pontos." },
    { enunciado: "🔊 Nesse texto, quem PASSA?", resposta: "A NUVEM.", dica: "2ª frase." },
    { enunciado: "🔊 Nesse texto, quem ABRE?", resposta: "A FLOR.", dica: "3ª frase." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: ler o mini-texto e responder 3 perguntas.",
    resposta: "1ª quem brilha → SOL · 2ª quem passa → NUVEM · 3ª quem abre → FLOR.",
    visual: {
      cena: [
        { personagem: "1ª: O SOL BRILHA", itemImagemUrl: solImg, quantidade: 1, cor: "#F59E0B" },
        { personagem: "2ª: A NUVEM PASSA", itemImagemUrl: nuvemImg, quantidade: 1, cor: "#93C5FD" },
        { personagem: "3ª: A FLOR ABRE", itemImagemUrl: florImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        { pergunta: "Quem BRILHA?", opcoes: ["Sol", "Nuvem", "Flor"], correta: 0, explicacao: "1ª frase — o sol." },
        { pergunta: "Quem PASSA?", opcoes: ["Sol", "Nuvem", "Flor"], correta: 1, explicacao: "2ª frase — a nuvem." },
        { pergunta: "Quem ABRE?", opcoes: ["Sol", "Nuvem", "Flor"], correta: 2, explicacao: "3ª frase — a flor." },
      ],
    },
  },
  revisao: {
    pontos: [
      "Fluência = ler seguido, com sentido.",
      "Pausinha entre palavras, pausa MAIOR no ponto.",
      "Depois de ler, pense: o que aconteceu?",
      "Cada frase conta UMA coisa que aconteceu.",
    ],
    dica: "Se travou, respire fundo, aponte o dedo e leia palavra por palavra.",
  },
  quiz: [
    { pergunta: "'O SOL BRILHA. A NUVEM PASSA. A FLOR ABRE.' tem quantas frases?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 frases." },
    { pergunta: "Nesse texto, quem BRILHA?", opcoes: ["Sol", "Nuvem", "Flor"], correta: 0, explicacao: "O sol." },
    { pergunta: "Ler fluente é…", opcoes: ["Gaguejar em cada letra", "Ler seguido com sentido"], correta: 1, explicacao: "Ler seguido." },
    { pergunta: "Pausa maior é…", opcoes: ["Na maiúscula", "No ponto final"], correta: 1, explicacao: "No ponto." },
  ],
  conclusao:
    "🏅 Medalha: LEITOR FLUENTE INICIAL! Missão em Casa: ler um mini-texto de 3 frases pra alguém. Você já lê livros de verdade.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quando uma criança lê 3 frases seguidas com sentido, o cérebro dela cria uma nova estrada — a mesma estrada que qualquer leitor adulto usa a vida toda.",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Quantas frases?",
      instrucao: "'O SOL BRILHA. A NUVEM PASSA. A FLOR ABRE.' — quantas frases?",
      grupos: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "1ª" },
        { imagemUrl: nuvemImg, quantidade: 1, rotulo: "2ª" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "3ª" },
      ],
      pergunta: "Quantas frases?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3 frases — 3 pontos!",
      erro: "Conte os pontos: 3.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Quem faz o quê?",
      instrucao: "Ligue quem faz cada ação.",
      pares: [
        { a: "BRILHA", b: "sol", aImagem: estrelaImg, bImagem: solImg },
        { a: "PASSA", b: "nuvem", aImagem: estrelaImg, bImagem: nuvemImg },
        { a: "ABRE", b: "flor", aImagem: estrelaImg, bImagem: florImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Compreensão",
      instrucao: "No texto, quem PASSA?",
      grupos: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: nuvemImg, quantidade: 1, rotulo: "nuvem" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "flor" },
      ],
      pergunta: "Quem passa?",
      opcoes: ["Sol", "Nuvem", "Flor"],
      correta: 1,
      acerto: "A nuvem — 2ª frase!",
      erro: "Volte na 2ª frase: A NUVEM PASSA.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Monta o mini-texto",
      instrucao: "Ordene as frases: SOL → NUVEM → FLOR.",
      itens: ["O SOL BRILHA.", "A NUVEM PASSA.", "A FLOR ABRE."],
      imagens: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "1ª · SOL" },
        { imagemUrl: nuvemImg, quantidade: 1, rotulo: "2ª · NUVEM" },
        { imagemUrl: florImg, quantidade: 1, rotulo: "3ª · FLOR" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Outro mini-texto",
      instrucao: "'O PATO NADA. O SAPO PULA. O GATO OLHA.' Quem OLHA?",
      grupos: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Quem olha?",
      opcoes: ["Pato", "Sapo", "Gato"],
      correta: 2,
      acerto: "O gato olha — 3ª frase!",
      erro: "Volte na 3ª frase: O GATO OLHA.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Mini-texto tem quantas frases no mínimo?", opcoes: ["1", "2"], correta: 1, explicacao: "2 ou mais." },
      { pergunta: "Pausa maior é…", opcoes: ["No espaço", "No ponto"], correta: 1, explicacao: "No ponto." },
      { pergunta: "Ler fluente é…", opcoes: ["Gaguejar", "Ler seguido"], correta: 1, explicacao: "Ler seguido." },
    ],
    medio: [
      {
        pergunta: "Em 'O SOL BRILHA. A LUA APARECE.', quem APARECE?",
        opcoes: ["Sol", "Lua"],
        correta: 1,
        explicacao: "A lua.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
            { imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
          ],
        },
      },
      { pergunta: "Depois de ler, o leitor deve…", opcoes: ["Esquecer", "Pensar no que aconteceu"], correta: 1, explicacao: "Compreensão." },
      { pergunta: "Cada frase conta…", opcoes: ["Nada", "Uma coisa que aconteceu"], correta: 1, explicacao: "Uma ideia por frase." },
    ],
    dificil: [
      { pergunta: "'O RATO CORRE. O GATO PULA. A CASA CAI.' — 2ª frase é…", opcoes: ["O RATO CORRE", "O GATO PULA", "A CASA CAI"], correta: 1, explicacao: "2ª frase." },
      {
        pergunta: "Nesse texto, quem CAI?",
        opcoes: ["Rato", "Gato", "Casa"],
        correta: 2,
        explicacao: "A casa cai (3ª frase).",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "casa" },
      },
      { pergunta: "Quem lê fluente pode…", opcoes: ["Ler livrinhos sozinho", "Só ouvir"], correta: 0, explicacao: "Autonomia leitora." },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP21",
    titulo: "Textos com título e frases mais longas",
  },
};

export default aula;
