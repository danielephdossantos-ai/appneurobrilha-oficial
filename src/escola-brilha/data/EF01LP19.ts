import type { Aula } from "../types";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as ratoImg } from "@/assets/neuro-treino/objetos/rato.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP19 — Aula 019 · DUAS FRASES SEGUIDAS (mini-texto)
 * Foco: ler 2 frases seguidas mantendo pausa e sentido.
 */
const aula: Aula = {
  codigo: "EF01LP19",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Duas Frases Seguidas",
  narrativa: {
    titulo: "Duas Frases Seguidas",
    contexto:
      "Brilha já lê UMA frase inteira. Agora ele vai treinar ler DUAS frases em seguida, respirando no ponto do meio.",
    problema:
      "Se ler as duas frases grudadas sem parar no ponto, tudo vira uma coisa só e a criança se perde.",
    convite: "Bora ler dois versinhos seguidos, respirando no ponto?",
  },
  conhecimentosPrevios: [
    "Ler uma frase inteira (LP15, LP17).",
    "Reconhecer espaço entre palavras (LP16).",
    "Reconhecer maiúscula e ponto (LP18).",
  ],
  missao: "Ler 2 frases seguidas fazendo pausa maior no ponto final da primeira.",
  objetivos: [
    "Ler duas frases seguidas em voz alta.",
    "Respirar no ponto final (pausa longa).",
    "Perceber que a próxima frase começa com maiúscula.",
    "Associar cada frase à figura correspondente.",
  ],
  motivacao:
    "Quando você lê duas frases seguidas, já está lendo um mini-texto de verdade. É o mesmo que ler um livro.",
  explicacao:
    "Um mini-texto tem 2 (ou mais) frases:\n\n👉 'O PATO NADA. O SAPO PULA.'\n👉 'O SOL BRILHA. A LUA APARECE.'\n\nComo ler:\n1) Leia a 1ª frase inteira.\n2) No PONTO, RESPIRE FUNDO (pausa maior).\n3) A 2ª frase começa com letra MAIÚSCULA.\n4) Leia a 2ª frase inteira.\n5) Ponto final = fim de tudo.",
  explicacaoAtiva: [
    {
      texto: "Leia: 'O PATO NADA. O SAPO PULA.' 2 frases seguidas.",
      exemplo: "1ª · O PATO NADA. (pausa longa)  2ª · O SAPO PULA.",
      imagem: patoImg,
      imagemAlt: "Pato e sapo",
      checagem: {
        pergunta: "Quantas FRASES tem esse mini-texto?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        explicacao: "Duas frases separadas por ponto.",
      },
    },
    {
      texto: "Onde é a PAUSA MAIOR?",
      exemplo: "O PATO NADA. ← PAUSA GRANDE ← O SAPO PULA.",
      imagem: sapoImg,
      imagemAlt: "Sapo",
      checagem: {
        pergunta: "Onde o leitor respira fundo?",
        opcoes: ["No espaço entre palavras", "No ponto final da 1ª frase", "Não respira"],
        correta: 1,
        explicacao: "No ponto final da 1ª frase.",
      },
    },
    {
      texto: "A 2ª frase começa com MAIÚSCULA nova. É como começar de novo.",
      exemplo: "O SOL BRILHA. → agora começa outra: A LUA APARECE.",
      imagem: solImg,
      imagemAlt: "Sol e lua",
      checagem: {
        pergunta: "Como começa a 2ª frase?",
        opcoes: ["Minúscula", "Maiúscula", "Com número"],
        correta: 1,
        explicacao: "Toda frase começa com maiúscula, inclusive a segunda.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "Duas frases seguidas = mini-texto.",
    nivel2: "No ponto do meio, respire fundo (pausa longa).",
    nivel3: "A 2ª frase também começa com maiúscula.",
    nivel4: "Coesão inicial: a criança encadeia frases mantendo o sentido do texto.",
  },
  exemploResolvido: {
    enunciado: "Leia: 'O GATO DORME. O RATO CORRE.' Quantas frases?",
    passos: [
      "Vejo o 1º ponto: fim da 1ª frase.",
      "Vejo a maiúscula depois: começa a 2ª.",
      "Vejo o 2º ponto: fim de tudo.",
      "Total: 2 frases.",
    ],
    resposta: "2 frases.",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que combina com a 1ª frase de 'O PATO NADA. O SAPO PULA.'",
    resposta: "PATO.",
    explicacao: "A 1ª frase é 'O PATO NADA.' — fala do pato.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é a 1ª frase?",
      opcoes: [
        { nome: "pato", imagemUrl: patoImg },
        { nome: "sapo", imagemUrl: sapoImg },
        { nome: "gato", imagemUrl: gatoImg },
      ],
      respostaCerta: "pato",
    },
  },
  exercicios: [
    { enunciado: "🔊 'O SOL BRILHA. A LUA APARECE.' tem quantas frases?", resposta: "2.", dica: "Conte os pontos." },
    { enunciado: "🔊 Onde o leitor respira fundo?", resposta: "No ponto final da 1ª frase.", dica: "Ponto = pausa longa." },
    { enunciado: "🔊 A 2ª frase começa com…", resposta: "Letra MAIÚSCULA.", dica: "Toda frase começa com maiúscula." },
  ],
  desafio: {
    enunciado: "Desafio Brilha: casar cada frase do mini-texto com sua figura.",
    resposta: "'O PATO NADA. O SAPO PULA.' → 1ª pato · 2ª sapo.",
    visual: {
      cena: [
        { personagem: "1ª frase: O PATO NADA", itemImagemUrl: patoImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "2ª frase: O SAPO PULA", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
      ],
      perguntas: [
        { pergunta: "Qual é a 1ª frase de 'O PATO NADA. O SAPO PULA.'?", opcoes: ["O PATO NADA", "O SAPO PULA"], correta: 0, explicacao: "1ª = O PATO NADA." },
        { pergunta: "Qual é a 2ª frase?", opcoes: ["O PATO NADA", "O SAPO PULA"], correta: 1, explicacao: "2ª = O SAPO PULA." },
        { pergunta: "Quantas frases tem o mini-texto?", opcoes: ["1", "2", "3"], correta: 1, explicacao: "2 frases, 2 pontos." },
      ],
    },
  },
  revisao: {
    pontos: [
      "Mini-texto = 2 (ou mais) frases seguidas.",
      "No ponto do meio, respire fundo (pausa longa).",
      "A 2ª frase também começa com maiúscula.",
      "Cada ponto marca o FIM de uma frase.",
    ],
    dica: "Ao ler, marque com o dedo cada ponto — respire nele.",
  },
  quiz: [
    { pergunta: "'O GATO DORME. O RATO CORRE.' tem quantas frases?", opcoes: ["1", "2", "3"], correta: 1, explicacao: "2 frases." },
    { pergunta: "Onde é a pausa MAIOR?", opcoes: ["No espaço", "No ponto final", "No começo"], correta: 1, explicacao: "No ponto final." },
    { pergunta: "A 2ª frase começa com…", opcoes: ["Minúscula", "Maiúscula", "Número"], correta: 1, explicacao: "Maiúscula." },
    { pergunta: "Cada ponto marca…", opcoes: ["O começo", "O fim de uma frase"], correta: 1, explicacao: "Fim da frase." },
  ],
  conclusao:
    "🏅 Medalha: Leitor de Mini-Texto! Missão em Casa: ler 2 frases seguidas de um livrinho pra alguém em casa.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Um livro inteiro é feito de várias frases seguidas — igual você acabou de ler. Cada ponto é um passinho pro fim da história.",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Quantas frases?",
      instrucao: "'O PATO NADA. O SAPO PULA.' tem quantas frases?",
      grupos: [
        { imagemUrl: patoImg, quantidade: 1, rotulo: "1ª" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "2ª" },
      ],
      pergunta: "Quantas frases?",
      opcoes: ["1", "2", "3"],
      correta: 1,
      acerto: "2 frases — 2 pontos!",
      erro: "Conte os pontos: 2.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · 1ª frase x figura",
      instrucao: "Ligue cada frase à figura certa.",
      pares: [
        { a: "O PATO NADA", b: "pato", aImagem: estrelaImg, bImagem: patoImg },
        { a: "O SAPO PULA", b: "sapo", aImagem: estrelaImg, bImagem: sapoImg },
        { a: "O SOL BRILHA", b: "sol", aImagem: estrelaImg, bImagem: solImg },
        { a: "A LUA APARECE", b: "lua", aImagem: estrelaImg, bImagem: luaImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · Onde respira?",
      instrucao: "Onde o leitor RESPIRA FUNDO ao ler 'O GATO DORME. O RATO CORRE.'?",
      grupos: [
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "espaço" },
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "ponto" },
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "maiúscula" },
      ],
      pergunta: "Pausa MAIOR:",
      opcoes: ["No espaço", "No ponto final", "Na maiúscula"],
      correta: 1,
      acerto: "No ponto se respira fundo!",
      erro: "Ponto = pausa MAIOR.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Monta o mini-texto",
      instrucao: "Ordene as frases do mini-texto 'O SOL BRILHA. A LUA APARECE.'",
      itens: ["O SOL BRILHA.", "A LUA APARECE."],
      imagens: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "1ª · SOL" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "2ª · LUA" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · 2ª frase",
      instrucao: "Qual é a 2ª frase de 'O GATO DORME. O RATO CORRE.'?",
      grupos: [
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "1ª" },
        { imagemUrl: ratoImg, quantidade: 1, rotulo: "2ª" },
      ],
      pergunta: "Qual é a 2ª frase?",
      opcoes: ["O GATO DORME.", "O RATO CORRE."],
      correta: 1,
      acerto: "A 2ª é 'O RATO CORRE.'!",
      erro: "Depois do 1º ponto, começa a 2ª.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "'O PATO NADA. O SAPO PULA.' tem quantas frases?", opcoes: ["1", "2"], correta: 1, explicacao: "2 frases." },
      { pergunta: "Pausa maior é no…", opcoes: ["Espaço", "Ponto"], correta: 1, explicacao: "Ponto." },
      { pergunta: "A 2ª frase começa com…", opcoes: ["Maiúscula", "Minúscula"], correta: 0, explicacao: "Maiúscula." },
    ],
    medio: [
      {
        pergunta: "Qual é a 1ª frase de 'O GATO DORME. A FLOR CAIU.'?",
        opcoes: ["O GATO DORME", "A FLOR CAIU"],
        correta: 0,
        explicacao: "1ª frase.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
            { imagemUrl: florImg, quantidade: 1, rotulo: "flor" },
          ],
        },
      },
      { pergunta: "Cada ponto marca o…", opcoes: ["Começo", "Fim de uma frase"], correta: 1, explicacao: "Fim." },
      { pergunta: "Um mini-texto pode ter…", opcoes: ["Só 1 frase", "2 ou mais frases"], correta: 1, explicacao: "2 ou mais frases." },
    ],
    dificil: [
      { pergunta: "'O SOL BRILHA. A LUA APARECE. A ESTRELA PISCA.' tem quantas frases?", opcoes: ["2", "3", "4"], correta: 1, explicacao: "3 pontos = 3 frases." },
      {
        pergunta: "Qual figura combina com a 2ª frase de 'O RATO CORRE. A CASA CAIU.'?",
        opcoes: ["Rato", "Casa", "Bola"],
        correta: 1,
        explicacao: "2ª fala da casa.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: ratoImg, quantidade: 1, rotulo: "rato" },
            { imagemUrl: casaImg, quantidade: 1, rotulo: "casa" },
            { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          ],
        },
      },
      { pergunta: "Se junto 3 frases seguidas, tenho…", opcoes: ["Uma frase gigante", "Um mini-texto"], correta: 1, explicacao: "Mini-texto." },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP20",
    titulo: "Minha primeira leitura fluente (mini-texto de 3 frases)",
  },
};

export default aula;
