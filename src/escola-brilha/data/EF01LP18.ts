import type { Aula } from "../types";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP18 — Aula 018 · MAIÚSCULA e PONTO FINAL
 * Foco: sinais que abrem e fecham a frase.
 */
const aula: Aula = {
  codigo: "EF01LP18",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Maiúscula no Começo, Ponto no Fim",
  narrativa: {
    titulo: "Maiúscula no Começo, Ponto no Fim",
    contexto:
      "Toda frase tem dois sinais importantes: uma letra MAIÚSCULA GRANDÃO no começo e um PONTINHO (.) no fim.",
    problema:
      "Se a frase esquece a maiúscula, parece que começou pela metade. Se esquece o ponto, parece que nunca termina.",
    convite: "Bora garantir que toda frase comece e termine do jeito certo?",
  },
  conhecimentosPrevios: [
    "Ler frases de 3 a 5 palavras (LP15, LP17).",
    "Perceber espaço entre palavras (LP16).",
    "Diferenciar letras MAIÚSCULAS e minúsculas.",
  ],
  missao: "Reconhecer maiúscula no início e ponto final no fim de toda frase.",
  objetivos: [
    "Identificar a letra maiúscula que abre a frase.",
    "Identificar o ponto final (.) que fecha a frase.",
    "Corrigir frases sem maiúscula ou sem ponto.",
    "Ler frases fazendo pausa maior no ponto final.",
  ],
  motivacao:
    "Maiúscula e ponto são como o portão da casa: um abre, o outro fecha. Sem eles, a frase fica bagunçada.",
  explicacao:
    "🔹 MAIÚSCULA no começo: O · A · SAPO... a primeira letra é grandona.\n🔹 PONTO no fim: um pontinho pequenininho (.).\n\n👉 CERTO: O PATO NADA.\n👉 ERRADO: o pato nada  (sem maiúscula, sem ponto)\n👉 ERRADO: O PATO NADA  (sem ponto)\n\nQuando você lê e chega no ponto, faz uma PAUSA maior — como se respirasse fundo.",
  explicacaoAtiva: [
    {
      texto: "Olha essa frase: 'O PATO NADA.' O 'O' é MAIÚSCULO e tem PONTO no fim.",
      exemplo: "🔵 O (maiúscula) · PATO · NADA · . (ponto)",
      imagem: patoImg,
      imagemAlt: "Pato nadando",
      checagem: {
        pergunta: "Qual sinal fecha a frase?",
        opcoes: ["!", ".", "?"],
        correta: 1,
        explicacao: "O PONTO (.) fecha frases normais.",
      },
    },
    {
      texto: "Compare: 'o gato dorme' (errado) x 'O GATO DORME.' (certo).",
      exemplo: "❌ o gato dorme  |  ✅ O GATO DORME.",
      imagem: gatoImg,
      imagemAlt: "Gato dormindo",
      checagem: {
        pergunta: "Qual está TODA certa?",
        opcoes: ["o gato dorme", "O GATO DORME.", "O GATO DORME"],
        correta: 1,
        explicacao: "Maiúscula + ponto.",
      },
    },
    {
      texto: "No ponto final, faça uma PAUSA maior. Como respirar fundo.",
      exemplo: "O SAPO PULA. (pausa longa)  O RATO CORRE. (pausa longa)",
      imagem: sapoImg,
      imagemAlt: "Sapo pulando",
      checagem: {
        pergunta: "Quando devo fazer pausa MAIOR ao ler?",
        opcoes: ["No espaço", "No ponto final", "Na maiúscula"],
        correta: 1,
        explicacao: "No ponto final se respira fundo.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Maiúscula abre, ponto fecha.",
    nivel2: "Sem maiúscula ou sem ponto, a frase fica errada.",
    nivel3: "Ao ler, faça pausa maior no ponto final.",
    nivel4: "Prosódia inicial: o leitor começa a marcar unidades sintáticas com pausa.",
  },
  exemploResolvido: {
    enunciado: "Como CORRIGIR 'o sol brilha' para virar uma frase certa?",
    passos: [
      "Coloco MAIÚSCULA no O do começo → 'O sol brilha'.",
      "Coloco PONTO no fim → 'O sol brilha.'",
      "Melhor ainda em maiúsculas: 'O SOL BRILHA.'",
    ],
    resposta: "O SOL BRILHA.",
  },
  atividadeGuiada: {
    enunciado: "Escolha a frase escrita do jeito CERTO.",
    resposta: "O GATO DORME.",
    explicacao: "Maiúscula no início, ponto no fim, espaços entre palavras.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura combina com 'O GATO DORME.'?",
      opcoes: [
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "pato", imagemUrl: patoImg },
      ],
      respostaCerta: "gato",
    },
  },
  exercicios: [
    { enunciado: "🔊 Qual sinal ABRE a frase?", resposta: "Letra MAIÚSCULA.", dica: "Vem antes de tudo." },
    { enunciado: "🔊 Qual sinal FECHA a frase?", resposta: "PONTO (.).", dica: "Vem no final." },
    { enunciado: "🔊 Corrija: 'o pato nada'", resposta: "O PATO NADA.", dica: "Maiúscula + ponto." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: achar as frases CERTAS entre as opções.",
    resposta: "Toda frase precisa começar com maiúscula e terminar com ponto.",
    visual: {
      cena: [
        { personagem: "O PATO NADA.", itemImagemUrl: patoImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "O SAPO PULA.", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "O GATO DORME.", itemImagemUrl: gatoImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        { pergunta: "Qual está TODA certa?", opcoes: ["o pato nada", "O PATO NADA.", "O PATO NADA"], correta: 1, explicacao: "Maiúscula + ponto." },
        { pergunta: "O que abre a frase?", opcoes: ["Ponto", "Maiúscula", "Vírgula"], correta: 1, explicacao: "Letra maiúscula." },
        { pergunta: "O que fecha a frase?", opcoes: ["Ponto", "Maiúscula", "Espaço"], correta: 0, explicacao: "Ponto final (.)." },
      ],
    },
  },
  revisao: {
    pontos: [
      "MAIÚSCULA no começo abre a frase.",
      "PONTO (.) no fim fecha a frase.",
      "Sem esses sinais, a frase fica errada.",
      "No ponto, faça pausa MAIOR ao ler.",
    ],
    dica: "Quando escrever uma frase, confira: começa maiúscula? termina com ponto?",
  },
  quiz: [
    { pergunta: "O que abre a frase?", opcoes: ["Ponto", "Maiúscula", "Vírgula"], correta: 1, explicacao: "Letra maiúscula." },
    { pergunta: "O que fecha a frase?", opcoes: ["Espaço", "Ponto (.)", "Maiúscula"], correta: 1, explicacao: "Ponto final." },
    { pergunta: "Qual está toda certa?", opcoes: ["o gato dorme", "O GATO DORME.", "OGATODORME"], correta: 1, explicacao: "Maiúscula + ponto + espaços." },
    { pergunta: "No ponto final, o leitor:", opcoes: ["Grita", "Faz pausa maior", "Pula palavra"], correta: 1, explicacao: "Faz pausa maior." },
  ],
  conclusao:
    "🏅 Medalha: Guardião da Frase! Missão em Casa: escrever 3 frases com maiúscula e ponto e mostrar pra alguém.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "O ponto final é uma das invenções mais antigas da escrita — mais de 2 mil anos. Antes dele, ninguém sabia onde uma frase acabava.",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Achar a maiúscula",
      instrucao: "Qual está começando com MAIÚSCULA?",
      grupos: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "o pato" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "O PATO" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "opato" },
      ],
      pergunta: "Qual começa com maiúscula?",
      opcoes: ["o pato", "O PATO", "opato"],
      correta: 1,
      acerto: "O 'O' está grandão!",
      erro: "Maiúscula é a letra GRANDONA.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Achar o ponto",
      instrucao: "Qual tem PONTO no fim?",
      grupos: [
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "O GATO DORME" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "O GATO DORME." },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "O GATO DORME!" },
      ],
      pergunta: "Qual tem PONTO FINAL?",
      opcoes: ["Sem ponto", "Com ponto (.)", "Com !"],
      correta: 1,
      acerto: "Ponto (.) — fecha a frase normal!",
      erro: "Procure o pontinho (.) no fim.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Frase TODA certa",
      instrucao: "Qual está com maiúscula + espaços + ponto?",
      grupos: [
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "o sapo pula" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "O SAPO PULA." },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "OSAPOPULA" },
      ],
      pergunta: "Qual está toda certa?",
      opcoes: ["o sapo pula", "O SAPO PULA.", "OSAPOPULA"],
      correta: 1,
      acerto: "Perfeito — maiúscula + espaços + ponto!",
      erro: "Precisa de todos os 3: maiúscula, espaços, ponto.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 4 · Frase x Figura",
      instrucao: "Ligue cada frase à figura.",
      pares: [
        { a: "O PATO NADA.", b: "pato", aImagem: estrelaImg, bImagem: patoImg },
        { a: "O SAPO PULA.", b: "sapo", aImagem: estrelaImg, bImagem: sapoImg },
        { a: "O GATO DORME.", b: "gato", aImagem: estrelaImg, bImagem: gatoImg },
        { a: "O SOL BRILHA.", b: "sol", aImagem: estrelaImg, bImagem: solImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Pausa maior",
      instrucao: "Quando o leitor faz pausa MAIOR?",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "no ponto" },
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "no espaço" },
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "na maiúscula" },
      ],
      pergunta: "Pausa maior é no…",
      opcoes: ["Ponto final", "Espaço entre palavras", "Maiúscula"],
      correta: 0,
      acerto: "No ponto se respira fundo!",
      erro: "Espaço = pausinha. Ponto = pausa MAIOR.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "O que ABRE a frase?", opcoes: ["Ponto", "Maiúscula"], correta: 1, explicacao: "Maiúscula." },
      { pergunta: "O que FECHA a frase?", opcoes: ["Ponto", "Maiúscula"], correta: 0, explicacao: "Ponto." },
      { pergunta: "Qual está certa?", opcoes: ["o sol", "O SOL BRILHA."], correta: 1, explicacao: "Maiúscula + ponto." },
    ],
    medio: [
      {
        pergunta: "Qual figura combina com 'A FLOR CAIU.'?",
        opcoes: ["Flor", "Gato", "Sapo"],
        correta: 0,
        explicacao: "Flor.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: florImg, quantidade: 1, rotulo: "flor" },
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
          ],
        },
      },
      { pergunta: "'O RATO CORRE' está completo?", opcoes: ["Sim", "Falta o ponto"], correta: 1, explicacao: "Falta o ponto final." },
      { pergunta: "Pausa maior é no…", opcoes: ["Espaço", "Ponto"], correta: 1, explicacao: "Ponto." },
    ],
    dificil: [
      { pergunta: "Qual frase está TODA certa?", opcoes: ["obolarolou.", "A BOLA ROLOU.", "ABOLAROLOU"], correta: 1, explicacao: "Maiúscula + espaços + ponto." },
      {
        pergunta: "Qual figura combina com 'A CASA É AZUL.'?",
        opcoes: ["Casa", "Bola", "Flor"],
        correta: 0,
        explicacao: "Casa.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "casa" },
      },
      { pergunta: "Se falta o ponto na frase, ela:", opcoes: ["Está certa", "Está incompleta"], correta: 1, explicacao: "Frase precisa fechar." },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP19",
    titulo: "Ler duas frases seguidas (mini-texto)",
  },
};

export default aula;
