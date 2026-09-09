import type { Aula } from "../types";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as festaImg } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as fogoImg } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";
import { url as futebolImg } from "@/assets/neuro-treino/objetos/futebol.png.asset.json";
import { url as familiaImg } from "@/assets/neuro-treino/objetos/familia-grande.png.asset.json";
import { url as leaoImg } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as tigreImg } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP09 — Aula 009 · Letra F · som /f/
 * Fricativa labiodental surda: dente de cima toca o lábio de baixo
 * e sopra: /ffff/. Muito boa pra treinar respiração.
 * Base: Orton-Gillingham + NRP.
 */
const aula: Aula = {
  codigo: "EF01LP09",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "A Letra F — o Som do Sopro",
  narrativa: {
    titulo: "A Letra F — o Som do Sopro",
    contexto:
      "O Brilha achou uma letra sopradora: F. Ela coloca o dente de cima no lábio de baixo e sopra /ffff/ como uma bexiga soltando ar.",
    problema:
      "A letra F trouxe amigos: FLOR, FESTA, FOGO, FUTEBOL, FAMÍLIA. Todos começam com /f/.",
    convite: "Bora encostar o dente no lábio e soprar /ffffff/ até achar a família da letra F?",
  },
  conhecimentosPrevios: [
    "Reconhecer as 5 vogais.",
    "Isolar o primeiro som (M, S, P, T, L).",
    "Diferenciar sons contínuos (/s/, /m/, /l/) de sons curtos (/p/, /t/).",
  ],
  missao: "Associar a letra F ao som /f/ e reconhecer palavras que começam com esse som.",
  objetivos: [
    "Reconhecer o som /f/ no começo das palavras.",
    "Associar a letra F ao som /f/.",
    "Distinguir F de S (dois sopros diferentes).",
    "Sentir o dente de cima tocando o lábio de baixo.",
  ],
  motivacao:
    "FLOR, FESTA, FUTEBOL — a letra F traz alegria. Aprender F deixa a leitura ainda mais completa.",
  explicacao:
    "A letra F faz o som /f/.\n\n👉 Como fazer: encoste o dente de cima no lábio de baixo e sopre: /fffff/.\n👉 Palavras com F: FLOR · FESTA · FOGO · FUTEBOL · FAMÍLIA · FACA · FOCA · FADA.\n\nF + vogal = sílaba:\nF + A = FA · F + E = FE · F + I = FI · F + O = FO · F + U = FU.\n\nCuidado: /s/ é sopro entre os dentes (cobrinha). /f/ é sopro entre dente e lábio. Os dois são longos — dá pra esticar.",
  explicacaoAtiva: [
    {
      texto: "A letra F sopra. Dente em cima do lábio, ar sai devagar: /fffff/.",
      exemplo: "Fale: /f/... FLOR.",
      imagem: florImg,
      imagemAlt: "Flor — /f/",
      checagem: {
        pergunta: "Qual figura começa com /f/?",
        opcoes: ["Flor", "Sol", "Pato"],
        correta: 0,
        explicacao: "FLOR — /f/.",
      },
    },
    {
      texto: "FESTA e FOGO também começam com /f/. É família da letra F.",
      exemplo: "Fale devagar: /f/ESTA, /f/OGO.",
      imagem: festaImg,
      imagemAlt: "Festa — /f/",
      checagem: {
        pergunta: "Qual figura começa com /f/?",
        opcoes: ["Mãe", "Festa", "Tigre"],
        correta: 1,
        explicacao: "FESTA — /f/.",
      },
    },
    {
      texto: "Cuidado: /s/ = dentes juntos, sopro entre eles. /f/ = dente EM CIMA do lábio.",
      exemplo: "SOL (/s/, cobrinha) x FLOR (/f/, sopro).",
      imagem: fogoImg,
      imagemAlt: "Fogo — /f/",
      checagem: {
        pergunta: "Qual começa com /f/?",
        opcoes: ["Sol", "Fogo", "Pato"],
        correta: 1,
        explicacao: "FOGO — /f/. SOL é /s/.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "A letra F faz /f/. Dente em cima do lábio, sopro.",
    nivel2: "FLOR, FESTA, FOGO — todas com /f/ no começo.",
    nivel3: "F + vogal = sílaba: FA, FE, FI, FO, FU.",
    nivel4: "F é uma fricativa labiodental: o ar passa apertado entre o dente e o lábio.",
  },
  exemploResolvido: {
    enunciado: "Qual figura começa com F: FLOR, SOL ou PATO?",
    passos: [
      "Fale cada palavra devagar: /f/LOR, /s/OL, /p/ATO.",
      "O som /f/ aparece no começo de FLOR.",
      "F = /f/.",
    ],
    resposta: "FLOR — começa com a letra F (/f/).",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que começa com F (/f/).",
    resposta: "FLOR — começa com /f/.",
    explicacao: "Fale cada figura devagar antes de tocar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura começa com /f/?",
      opcoes: [
        { nome: "flor", imagemUrl: florImg },
        { nome: "sol", imagemUrl: solImg },
        { nome: "pato", imagemUrl: patoImg },
        { nome: "mãe", imagemUrl: maeImg },
      ],
      respostaCerta: "flor",
    },
  },
  exercicios: [
    {
      enunciado: "🔊 Qual começa com /f/: FOGO, SOL ou GATO?",
      resposta: "FOGO — /f/.",
      dica: "Dente em cima do lábio.",
    },
    {
      enunciado: "🎧 FLOR e FESTA começam iguais?",
      resposta: "Sim, os dois com /f/. Aliteração.",
      dica: "Fale devagar.",
    },
    {
      enunciado: "😮‍💨 Como a boca fica ao falar /f/?",
      resposta: "Dente de cima no lábio de baixo, soprando.",
      dica: "Coloque a mão na frente da boca e sinta o ar.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: separar figuras de F, S e uma pegadinha.",
    resposta: "Time F: flor, festa, fogo · Time S: sol · Fora: pato.",
    visual: {
      cena: [
        { personagem: "Time F", itemImagemUrl: florImg, quantidade: 3, cor: "#F472B6" },
        { personagem: "Time S", itemImagemUrl: solImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "Fora", itemImagemUrl: patoImg, quantidade: 1, cor: "#94A3B8" },
      ],
      perguntas: [
        {
          pergunta: "Qual começa com /f/?",
          opcoes: ["Flor", "Sol", "Pato"],
          correta: 0,
          explicacao: "FLOR — /f/.",
        },
        {
          pergunta: "Qual começa com /s/?",
          opcoes: ["Fogo", "Sol", "Pato"],
          correta: 1,
          explicacao: "SOL — /s/.",
        },
        {
          pergunta: "Qual NÃO é F nem S?",
          opcoes: ["Festa", "Sol", "Pato"],
          correta: 2,
          explicacao: "PATO — /p/.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "A letra F faz o som /f/.",
      "Sopro: dente de cima no lábio de baixo.",
      "FLOR, FESTA, FOGO, FUTEBOL, FAMÍLIA — todas com /f/.",
      "F + vogal = FA, FE, FI, FO, FU.",
    ],
    dica: "F sopra entre dente e lábio. S sopra entre os dentes. Boca diferente.",
  },
  quiz: [
    {
      pergunta: "Qual figura começa com F?",
      opcoes: ["Flor", "Sol", "Pato"],
      correta: 0,
      explicacao: "FLOR — /f/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: florImg, quantidade: 1, rotulo: "flor" },
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
          { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
        ],
      },
    },
    {
      pergunta: "Qual figura começa com F?",
      opcoes: ["Bola", "Fogo", "Mãe"],
      correta: 1,
      explicacao: "FOGO — /f/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          { imagemUrl: fogoImg, quantidade: 1, rotulo: "fogo" },
          { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        ],
      },
    },
    {
      pergunta: "Qual é o som da letra F?",
      opcoes: ["/s/", "/f/", "/p/"],
      correta: 1,
      explicacao: "F = /f/.",
    },
    {
      pergunta: "Como a boca fica ao falar /f/?",
      opcoes: ["Lábios fechados", "Dente em cima do lábio, sopro", "Boca em bico"],
      correta: 1,
      explicacao: "Dente de cima toca o lábio de baixo.",
    },
  ],
  conclusao:
    "🏅 Medalha: Soprador da Flor! Missão em Casa: encontrar 3 coisas em casa que começam com F (faca, fita, farinha, fósforo, foto…).",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Soprar /ffff/ bem longo ajuda até a controlar a respiração. Fonoaudiólogos usam esse som pra treinar sopro em crianças e adultos.",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · F de Flor",
      instrucao: "Toque na figura que começa com /f/.",
      grupos: [
        { imagemUrl: florImg, quantidade: 1, rotulo: "flor" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
      ],
      pergunta: "Qual começa com /f/?",
      opcoes: ["Sol", "Flor", "Pato"],
      correta: 1,
      acerto: "FLOR — /f/!",
      erro: "Soprar: /f/LOR.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Família F",
      instrucao: "Ligue cada figura à letra F.",
      pares: [
        { a: "F", b: "Flor", aImagem: estrelaImg, bImagem: florImg },
        { a: "F", b: "Festa", aImagem: estrelaImg, bImagem: festaImg },
        { a: "F", b: "Fogo", aImagem: estrelaImg, bImagem: fogoImg },
        { a: "F", b: "Futebol", aImagem: estrelaImg, bImagem: futebolImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · F ou S?",
      instrucao: "Toque só na figura que começa com /f/ (não com /s/).",
      grupos: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: fogoImg, quantidade: 1, rotulo: "fogo" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
      ],
      pergunta: "Qual começa com /f/?",
      opcoes: ["Sol", "Fogo", "Gato"],
      correta: 1,
      acerto: "FOGO — /f/. SOL é /s/.",
      erro: "SOL é cobrinha /s/. O sopro /f/ está em FOGO.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Trio F",
      instrucao: "Coloque em ordem: Flor → Festa → Fogo.",
      itens: ["flor", "festa", "fogo"],
      imagens: [
        { imagemUrl: florImg, quantidade: 1, rotulo: "1º · Flor" },
        { imagemUrl: festaImg, quantidade: 1, rotulo: "2º · Festa" },
        { imagemUrl: fogoImg, quantidade: 1, rotulo: "3º · Fogo" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Mais F",
      instrucao: "Qual começa com /f/?",
      grupos: [
        { imagemUrl: futebolImg, quantidade: 1, rotulo: "futebol" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: leaoImg, quantidade: 1, rotulo: "leão" },
      ],
      pergunta: "Qual começa com /f/?",
      opcoes: ["Futebol", "Bola", "Leão"],
      correta: 0,
      acerto: "FUTEBOL — /f/!",
      erro: "Fale /f/UTEBOL. Sopro no começo.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual começa com F?",
        opcoes: ["Flor", "Sol", "Pato"],
        correta: 0,
        explicacao: "FLOR.",
        visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "flor" },
      },
      {
        pergunta: "Qual começa com F?",
        opcoes: ["Bola", "Fogo", "Sol"],
        correta: 1,
        explicacao: "FOGO.",
        visual: { tipo: "itens", imagemUrl: fogoImg, quantidade: 1, rotulo: "fogo" },
      },
      {
        pergunta: "Qual começa com F?",
        opcoes: ["Mãe", "Tigre", "Festa"],
        correta: 2,
        explicacao: "FESTA.",
        visual: { tipo: "itens", imagemUrl: festaImg, quantidade: 1, rotulo: "festa" },
      },
    ],
    medio: [
      {
        pergunta: "FLOR e FOGO — o que têm em comum?",
        opcoes: ["Rimam", "Começam com /f/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /f/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: florImg, quantidade: 1, rotulo: "FLOR", cor: "#F472B6" },
            { imagemUrl: fogoImg, quantidade: 1, rotulo: "FOGO", cor: "#FB923C" },
          ],
        },
      },
      {
        pergunta: "Qual NÃO começa com /f/?",
        opcoes: ["Festa", "Futebol", "Tigre"],
        correta: 2,
        explicacao: "TIGRE — /t/.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: festaImg, quantidade: 1, rotulo: "festa" },
            { imagemUrl: futebolImg, quantidade: 1, rotulo: "futebol" },
            { imagemUrl: tigreImg, quantidade: 1, rotulo: "tigre" },
          ],
        },
      },
      {
        pergunta: "F + A forma:",
        opcoes: ["AF", "FA", "FI"],
        correta: 1,
        explicacao: "F + A = FA.",
      },
    ],
    dificil: [
      {
        pergunta: "Qual grupo tem SÓ /f/?",
        opcoes: [
          "flor · festa · fogo",
          "flor · sol · pato",
          "bola · gato · sol",
        ],
        correta: 0,
        explicacao: "Todas com /f/.",
      },
      {
        pergunta: "FUTEBOL e FAMÍLIA — o que compartilham?",
        opcoes: ["Rimam", "Começam com /f/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /f/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: futebolImg, quantidade: 1, rotulo: "FUTEBOL", cor: "#22C55E" },
            { imagemUrl: familiaImg, quantidade: 1, rotulo: "FAMÍLIA", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Qual a diferença entre /f/ e /s/?",
        opcoes: [
          "/f/ é dente sobre o lábio; /s/ é dentes juntos",
          "São iguais",
          "/f/ é curto",
        ],
        correta: 0,
        explicacao: "F é labiodental (dente+lábio). S é alveolar (dentes juntos).",
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP10",
    titulo: "A letra N — som /n/ (navio, ninho, noite)",
  },
};

export default aula;
