import type { Aula } from "../types";
import { url as leaoImg } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapisImg } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as lagoImg } from "@/assets/neuro-treino/objetos/lago.png.asset.json";
import { url as lataImg } from "@/assets/neuro-treino/objetos/lata.png.asset.json";
import { url as lencoImg } from "@/assets/neuro-treino/objetos/lenco.png.asset.json";
import { url as linhaImg } from "@/assets/neuro-treino/objetos/linha.png.asset.json";
import { url as tigreImg } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as maeImg } from "@/assets/neuro-treino/objetos/mae.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";

/**
 * EF01LP08 — Aula 008 · Letra L · som /l/
 * Consonante líquida lateral: som contínuo, muito sonoro.
 * A criança sente a língua encostada no céu da boca e o ar
 * saindo pelos LADOS. Base: Orton-Gillingham + NRP.
 */
const aula: Aula = {
  codigo: "EF01LP08",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "A Letra L — o Som do Lá",
  narrativa: {
    titulo: "A Letra L — o Som do Lá",
    contexto:
      "O Brilha viu uma letra elegante: L. A língua sobe até o céu da boca e canta um /lllll/ bem longo — como uma nota de música.",
    problema:
      "A letra L trouxe amigos: LEÃO, LUA, LIVRO, LÁPIS, LAGO, LATA, LENÇO, LINHA. Todos começam com /l/.",
    convite: "Bora cantar /lllllá/ e conhecer a família da letra L?",
  },
  conhecimentosPrevios: [
    "Reconhecer as 5 vogais.",
    "Isolar o primeiro som (M, S, P, T).",
    "Diferenciar sons longos de sons curtos.",
  ],
  missao: "Associar a letra L ao som /l/ e reconhecer palavras que começam com esse som.",
  objetivos: [
    "Reconhecer o som /l/ no começo das palavras.",
    "Associar a letra L ao som /l/.",
    "Perceber que /l/ é longo e cantado, como /m/ e /s/.",
    "Sentir o ar saindo pelos lados da língua.",
  ],
  motivacao:
    "LUA, LEÃO, LIVRO — palavras poderosas! O L é a letra das palavras cantadas. Aprender L abre um monte de histórias.",
  explicacao:
    "A letra L faz o som /l/.\n\n👉 Como fazer: a ponta da língua toca o céu da boca e o ar sai pelos LADOS: /lllll/.\n👉 Palavras com L: LEÃO · LUA · LIVRO · LÁPIS · LAGO · LATA · LENÇO · LINHA.\n\nL + vogal = sílaba:\nL + A = LA · L + E = LE · L + I = LI · L + O = LO · L + U = LU.\n\nComo /m/ e /s/, o /l/ pode ser ESTICADO: /lllllua/. É um som cantado.",
  explicacaoAtiva: [
    {
      texto: "A letra L canta. Toca o céu da boca e faz /llll/ bem longo.",
      exemplo: "Fale: /lllll/... LEÃO.",
      imagem: leaoImg,
      imagemAlt: "Leão — /l/",
      checagem: {
        pergunta: "Qual figura começa com /l/?",
        opcoes: ["Leão", "Pato", "Sol"],
        correta: 0,
        explicacao: "LEÃO — /l/.",
      },
    },
    {
      texto: "LUA e LIVRO também começam com /l/. Fala devagar e sente a língua no céu da boca.",
      exemplo: "/l/UA, /l/IVRO — bem esticado.",
      imagem: luaImg,
      imagemAlt: "Lua — /l/",
      checagem: {
        pergunta: "Qual figura começa com /l/?",
        opcoes: ["Mãe", "Lua", "Tigre"],
        correta: 1,
        explicacao: "LUA — /l/.",
      },
    },
    {
      texto: "Cuidado: /l/ e /t/ usam a mesma língua, mas /t/ é curto (tec) e /l/ é longo (cantado).",
      exemplo: "TIA (/t/, curto) x LIA (/l/, cantado).",
      imagem: livroImg,
      imagemAlt: "Livro — /l/",
      checagem: {
        pergunta: "Qual começa com /l/?",
        opcoes: ["Tigre", "Livro", "Sol"],
        correta: 1,
        explicacao: "LIVRO — /l/. TIGRE é /t/.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "A letra L faz /l/. Língua no céu da boca, som cantado.",
    nivel2: "LEÃO, LUA, LIVRO — todas com /l/ no começo.",
    nivel3: "L + vogal = sílaba: LA, LE, LI, LO, LU.",
    nivel4: "L é uma consoante LÍQUIDA: o ar passa pelos lados da língua sem parar.",
  },
  exemploResolvido: {
    enunciado: "Qual figura começa com L: LUA, TIGRE ou SOL?",
    passos: [
      "Fale cada palavra devagar: /l/UA, /t/IGRE, /s/OL.",
      "O som /l/ aparece no começo de LUA.",
      "L = /l/.",
    ],
    resposta: "LUA — começa com a letra L (/l/).",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que começa com L (/l/).",
    resposta: "LEÃO — começa com /l/.",
    explicacao: "Fale cada figura devagar antes de tocar.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura começa com /l/?",
      opcoes: [
        { nome: "leão", imagemUrl: leaoImg },
        { nome: "tigre", imagemUrl: tigreImg },
        { nome: "pato", imagemUrl: patoImg },
        { nome: "sol", imagemUrl: solImg },
      ],
      respostaCerta: "leão",
    },
  },
  exercicios: [
    {
      enunciado: "🔊 Qual começa com /l/: LUA, TIGRE ou PATO?",
      resposta: "LUA — /l/.",
      dica: "Canta bem longo: /lllua/.",
    },
    {
      enunciado: "🎧 LEÃO e LUA começam iguais?",
      resposta: "Sim, os dois com /l/. Aliteração.",
      dica: "Fale devagar.",
    },
    {
      enunciado: "🎵 O som /l/ é curto ou longo?",
      resposta: "Longo. Dá pra cantar /lllllll/.",
      dica: "Como /m/ e /s/, também estica.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: separar figuras de L, T e uma pegadinha.",
    resposta: "Time L: leão, lua, livro · Time T: tigre · Fora: sol.",
    visual: {
      cena: [
        { personagem: "Time L", itemImagemUrl: leaoImg, quantidade: 3, cor: "#FBBF24" },
        { personagem: "Time T", itemImagemUrl: tigreImg, quantidade: 1, cor: "#FB923C" },
        { personagem: "Fora", itemImagemUrl: solImg, quantidade: 1, cor: "#94A3B8" },
      ],
      perguntas: [
        {
          pergunta: "Qual começa com /l/?",
          opcoes: ["Lua", "Tigre", "Sol"],
          correta: 0,
          explicacao: "LUA — /l/.",
        },
        {
          pergunta: "Qual começa com /t/?",
          opcoes: ["Livro", "Tigre", "Sol"],
          correta: 1,
          explicacao: "TIGRE — /t/.",
        },
        {
          pergunta: "Qual NÃO é L nem T?",
          opcoes: ["Leão", "Tigre", "Sol"],
          correta: 2,
          explicacao: "SOL — /s/.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "A letra L faz o som /l/.",
      "É um som cantado, longo, com o ar saindo pelos lados da língua.",
      "LEÃO, LUA, LIVRO, LÁPIS, LAGO — todas com /l/.",
      "L + vogal = LA, LE, LI, LO, LU.",
    ],
    dica: "Se dá pra cantar /lllll/ bem longo, é a letra L.",
  },
  quiz: [
    {
      pergunta: "Qual figura começa com L?",
      opcoes: ["Leão", "Tigre", "Sol"],
      correta: 0,
      explicacao: "LEÃO — /l/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: leaoImg, quantidade: 1, rotulo: "leão" },
          { imagemUrl: tigreImg, quantidade: 1, rotulo: "tigre" },
          { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        ],
      },
    },
    {
      pergunta: "Qual figura começa com L?",
      opcoes: ["Bola", "Lua", "Mãe"],
      correta: 1,
      explicacao: "LUA — /l/.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
          { imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
          { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
        ],
      },
    },
    {
      pergunta: "Qual é o som da letra L?",
      opcoes: ["/t/", "/l/", "/s/"],
      correta: 1,
      explicacao: "L = /l/.",
    },
    {
      pergunta: "Como o ar sai ao falar /l/?",
      opcoes: ["Fica preso", "Pelos lados da língua", "Pelo nariz"],
      correta: 1,
      explicacao: "A língua toca no céu e o ar escapa pelos lados.",
    },
  ],
  conclusao:
    "🏅 Medalha: Cantor do Lá! Missão em Casa: encontrar 3 coisas em casa que começam com L (luz, leite, lápis, livro, lima…).",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A letra L é chamada de LÍQUIDA porque o som escorrega da boca. Por isso quando a gente canta LÁ-LÁ-LÁ parece que a voz voa.",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · L de Leão",
      instrucao: "Toque na figura que começa com /l/.",
      grupos: [
        { imagemUrl: leaoImg, quantidade: 1, rotulo: "leão" },
        { imagemUrl: tigreImg, quantidade: 1, rotulo: "tigre" },
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
      ],
      pergunta: "Qual começa com /l/?",
      opcoes: ["Tigre", "Leão", "Sol"],
      correta: 1,
      acerto: "LEÃO — /l/!",
      erro: "Canta longo: /llleão/.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Família L",
      instrucao: "Ligue cada figura à letra L.",
      pares: [
        { a: "L", b: "Leão", aImagem: estrelaImg, bImagem: leaoImg },
        { a: "L", b: "Lua", aImagem: estrelaImg, bImagem: luaImg },
        { a: "L", b: "Livro", aImagem: estrelaImg, bImagem: livroImg },
        { a: "L", b: "Lápis", aImagem: estrelaImg, bImagem: lapisImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · L ou T?",
      instrucao: "Toque só na figura que começa com /l/ (não com /t/).",
      grupos: [
        { imagemUrl: tigreImg, quantidade: 1, rotulo: "tigre" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
        { imagemUrl: patoImg, quantidade: 1, rotulo: "pato" },
      ],
      pergunta: "Qual começa com /l/?",
      opcoes: ["Tigre", "Lua", "Pato"],
      correta: 1,
      acerto: "LUA — /l/. TIGRE é /t/.",
      erro: "TIGRE é /t/ (tec). O /l/ está em LUA.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Trio L",
      instrucao: "Coloque em ordem: Leão → Lua → Livro.",
      itens: ["leão", "lua", "livro"],
      imagens: [
        { imagemUrl: leaoImg, quantidade: 1, rotulo: "1º · Leão" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "2º · Lua" },
        { imagemUrl: livroImg, quantidade: 1, rotulo: "3º · Livro" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Mais L",
      instrucao: "Qual começa com /l/?",
      grupos: [
        { imagemUrl: lapisImg, quantidade: 1, rotulo: "lápis" },
        { imagemUrl: bolaImg, quantidade: 1, rotulo: "bola" },
        { imagemUrl: maeImg, quantidade: 1, rotulo: "mãe" },
      ],
      pergunta: "Qual começa com /l/?",
      opcoes: ["Lápis", "Bola", "Mãe"],
      correta: 0,
      acerto: "LÁPIS — /l/!",
      erro: "Fale /l/ÁPIS. Cantar bem longo.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual começa com L?",
        opcoes: ["Leão", "Tigre", "Sol"],
        correta: 0,
        explicacao: "LEÃO.",
        visual: { tipo: "itens", imagemUrl: leaoImg, quantidade: 1, rotulo: "leão" },
      },
      {
        pergunta: "Qual começa com L?",
        opcoes: ["Bola", "Lua", "Sol"],
        correta: 1,
        explicacao: "LUA.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
      },
      {
        pergunta: "Qual começa com L?",
        opcoes: ["Mãe", "Pato", "Livro"],
        correta: 2,
        explicacao: "LIVRO.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "livro" },
      },
    ],
    medio: [
      {
        pergunta: "LEÃO e LUA — o que têm em comum?",
        opcoes: ["Rimam", "Começam com /l/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /l/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: leaoImg, quantidade: 1, rotulo: "LEÃO", cor: "#FBBF24" },
            { imagemUrl: luaImg, quantidade: 1, rotulo: "LUA", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Qual NÃO começa com /l/?",
        opcoes: ["Lápis", "Livro", "Tigre"],
        correta: 2,
        explicacao: "TIGRE — /t/.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: lapisImg, quantidade: 1, rotulo: "lápis" },
            { imagemUrl: livroImg, quantidade: 1, rotulo: "livro" },
            { imagemUrl: tigreImg, quantidade: 1, rotulo: "tigre" },
          ],
        },
      },
      {
        pergunta: "L + A forma:",
        opcoes: ["AL", "LA", "LO"],
        correta: 1,
        explicacao: "L + A = LA.",
      },
    ],
    dificil: [
      {
        pergunta: "Qual grupo tem SÓ /l/?",
        opcoes: [
          "leão · lua · livro",
          "leão · tigre · sol",
          "bola · pato · sol",
        ],
        correta: 0,
        explicacao: "Todas com /l/.",
      },
      {
        pergunta: "LATA e LINHA — o que compartilham?",
        opcoes: ["Rimam", "Começam com /l/", "Nada"],
        correta: 1,
        explicacao: "Aliteração de /l/.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: lataImg, quantidade: 1, rotulo: "LATA", cor: "#A78BFA" },
            { imagemUrl: linhaImg, quantidade: 1, rotulo: "LINHA", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta: "Por que /l/ é chamado de som LÍQUIDO?",
        opcoes: [
          "Porque o ar sai pelos lados da língua",
          "Porque é curto",
          "Porque parece água na boca",
        ],
        correta: 0,
        explicacao: "É lateral: o ar escorre pelos lados enquanto a ponta da língua fica fixa no céu da boca.",
        visual: { tipo: "itens", imagemUrl: lencoImg, quantidade: 1, rotulo: "lenço · /l/" },
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP09",
    titulo: "A letra F — som /f/ (flor, faca, festa)",
  },
};

export default aula;
