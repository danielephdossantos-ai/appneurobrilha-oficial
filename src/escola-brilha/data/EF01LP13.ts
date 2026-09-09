import type { Aula } from "../types";
import { url as boloImg } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as sopaImg } from "@/assets/neuro-treino/objetos/sopa.png.asset.json";
import { url as sucoImg } from "@/assets/neuro-treino/objetos/suco.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as patoImg } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as sapoImg } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as ninhoImg } from "@/assets/neuro-treino/objetos/ninho.png.asset.json";

/**
 * EF01LP13 — Aula 013 · Sílabas CV com as vogais O e U
 * Foco: BO, PO, SO, LO · LU, SU, TU, NU.
 */
const aula: Aula = {
  codigo: "EF01LP13",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "Sílabas com O e U — BO, SO, LU, SU",
  narrativa: {
    titulo: "Sílabas com O e U — BO, SO, LU, SU",
    contexto:
      "As últimas vogais chegaram na oficina: O e U. Elas também querem grudar nas consoantes.",
    problema:
      "As sílabas BO, SO, LU e SU se esconderam em BOLO, SOL, LUA e SUCO.",
    convite: "Bora achar cada sílaba e ler nossa primeira palavra de verdade?",
  },
  conhecimentosPrevios: [
    "Sílabas CV com A, E, I.",
    "Sons de O e U.",
    "Bater palma para contar sílabas.",
  ],
  missao: "Formar e reconhecer sílabas CV com O e U.",
  objetivos: [
    "Juntar C + O ou C + U formando sílaba.",
    "Reconhecer BO, SO, LU, SU no começo de palavras.",
    "Ler BOLO como BO-LO em duas batidas.",
    "Diferenciar O (arredondado) de U (bico).",
  ],
  motivacao:
    "BOLO, SOPA, SOL, LUA, SUCO — palavras do dia a dia. Sem C+O e C+U a criança não consegue ler quase nenhuma frase.",
  explicacao:
    "Consoante + O ou U também vira sílaba.\n\n👉 B + O → BO (BOlo)\n👉 S + O → SO (SOpa, SOl)\n👉 L + U → LU (LUa)\n👉 S + U → SU (SUco)\n\nDica: O deixa a boca ARREDONDADA. U deixa a boca em BICO. Faça um espelho e observe.",
  explicacaoAtiva: [
    {
      texto: "B + O vira BO. Aparece em BOlo.",
      exemplo: "B + O = BO · BOlo.",
      imagem: boloImg,
      imagemAlt: "Bolo — começa com BO",
      checagem: {
        pergunta: "Qual figura começa com BO?",
        opcoes: ["Bolo", "Sol", "Pato"],
        correta: 0,
        explicacao: "BOlo — BO.",
      },
    },
    {
      texto: "L + U vira LU. Aparece em LUa.",
      exemplo: "L + U = LU · LUa.",
      imagem: luaImg,
      imagemAlt: "Lua — começa com LU",
      checagem: {
        pergunta: "Qual figura começa com LU?",
        opcoes: ["Lua", "Bolo", "Sapo"],
        correta: 0,
        explicacao: "LUa — LU.",
      },
    },
    {
      texto: "S + U vira SU (SUco). S + O vira SO (SOpa, SOl).",
      exemplo: "S + U = SU · S + O = SO.",
      imagem: sucoImg,
      imagemAlt: "Suco — começa com SU",
      checagem: {
        pergunta: "Qual figura começa com SU?",
        opcoes: ["Suco", "Sol", "Sapo"],
        correta: 0,
        explicacao: "SUco — SU.",
      },
    },
  ],
  explicacoesNiveis: {
    nivel1: "C + O = sílaba com O · C + U = sílaba com U.",
    nivel2: "BO em BOlo · SO em SOpa · LU em LUa · SU em SUco.",
    nivel3: "BOLO = BO-LO. Duas sílabas com O.",
    nivel4: "O é vogal média posterior arredondada; U é alta posterior arredondada.",
  },
  exemploResolvido: {
    enunciado: "Como fica L + U?",
    passos: [
      "Fale /lll/ com a língua no céu da boca.",
      "Fale /uuu/ fazendo bico com a boca.",
      "Cola: /llluuu/ = LU.",
    ],
    resposta: "L + U = LU (aparece em LUa).",
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que começa com LU.",
    resposta: "LUA — começa com LU.",
    explicacao: "Fale: LU-a · BO-lo · SU-co.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual começa com LU?",
      opcoes: [
        { nome: "lua", imagemUrl: luaImg },
        { nome: "bolo", imagemUrl: boloImg },
        { nome: "suco", imagemUrl: sucoImg },
      ],
      respostaCerta: "lua",
    },
  },
  exercicios: [
    { enunciado: "🔊 B + O = ?", resposta: "BO.", dica: "Boca redonda no O." },
    { enunciado: "🔊 S + U = ?", resposta: "SU.", dica: "Faça bico no U." },
    {
      enunciado: "🔊 Qual começa com SO: SOL, LUA ou BOLO?",
      resposta: "SOL — SO.",
      dica: "SOL tem 1 batida. Começa com SO.",
    },
  ],
  desafio: {
    enunciado: "Desafio Brilha: separar por vogal da sílaba.",
    resposta: "Time O: bolo, sopa, sol · Time U: lua, suco.",
    visual: {
      cena: [
        { personagem: "BO", itemImagemUrl: boloImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "SO", itemImagemUrl: sopaImg, quantidade: 1, cor: "#34D399" },
        { personagem: "LU", itemImagemUrl: luaImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "SU", itemImagemUrl: sucoImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "Qual começa com BO?",
          opcoes: ["Bolo", "Lua", "Suco"],
          correta: 0,
          explicacao: "BOlo — BO.",
        },
        {
          pergunta: "Qual começa com SU?",
          opcoes: ["Sopa", "Suco", "Sol"],
          correta: 1,
          explicacao: "SUco — SU.",
        },
        {
          pergunta: "Qual vogal aparece em LU?",
          opcoes: ["O", "U", "A"],
          correta: 1,
          explicacao: "L + U = LU.",
        },
      ],
    },
  },
  revisao: {
    pontos: [
      "C + O ou C + U = sílaba.",
      "BO (bolo) · SO (sopa) · LU (lua) · SU (suco).",
      "O = boca redonda. U = boca de bico.",
      "BOLO = BO-LO (2 batidas).",
    ],
    dica: "Se ficar em dúvida, olhe seu reflexo: O redondo, U bico.",
  },
  quiz: [
    { pergunta: "L + U = ?", opcoes: ["LO", "LU", "UL"], correta: 1, explicacao: "L+U = LU." },
    {
      pergunta: "Qual começa com BO?",
      opcoes: ["Bolo", "Sapo", "Lua"],
      correta: 0,
      explicacao: "BOlo.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
          { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
          { imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
        ],
      },
    },
    { pergunta: "Quantas sílabas tem BOLO?", opcoes: ["1", "2", "3"], correta: 1, explicacao: "BO-LO = 2." },
    { pergunta: "Qual começa com SU?", opcoes: ["Sopa", "Suco", "Sol"], correta: 1, explicacao: "SUco." },
  ],
  conclusao:
    "🏅 Medalha: Explorador de O e U! Missão em Casa: procurar em casa 2 coisas com BO e 2 com LU.",
  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "As vogais O e U são 'primas': as duas fazem sua boca ficar redonda. A diferença é o tamanho da abertura — O maior, U menor.",
  },
  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Achando BO",
      instrucao: "Toque na figura que começa com BO.",
      grupos: [
        { imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
        { imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
      ],
      pergunta: "Qual começa com BO?",
      opcoes: ["Bolo", "Lua", "Sapo"],
      correta: 0,
      acerto: "BOlo — BO!",
      erro: "Fale devagar: BO-LO.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 2 · Sílaba x Figura",
      instrucao: "Ligue cada sílaba à figura certa.",
      pares: [
        { a: "BO", b: "Bolo", aImagem: estrelaImg, bImagem: boloImg },
        { a: "SO", b: "Sopa", aImagem: estrelaImg, bImagem: sopaImg },
        { a: "LU", b: "Lua", aImagem: estrelaImg, bImagem: luaImg },
        { a: "SU", b: "Suco", aImagem: estrelaImg, bImagem: sucoImg },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 3 · O ou U?",
      instrucao: "Qual começa com sílaba com U?",
      grupos: [
        { imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
        { imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
        { imagemUrl: sopaImg, quantidade: 1, rotulo: "sopa" },
      ],
      pergunta: "Qual começa com sílaba com U?",
      opcoes: ["Lua", "Bolo", "Sopa"],
      correta: 0,
      acerto: "LUa — LU (com U)!",
      erro: "BOlo e SOpa são com O. LUa é com U.",
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Sílabas de BOLO",
      instrucao: "Coloque em ordem: BO → LO.",
      itens: ["BO", "LO"],
      imagens: [
        { imagemUrl: boloImg, quantidade: 1, rotulo: "1º · BO" },
        { imagemUrl: boloImg, quantidade: 1, rotulo: "2º · LO" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Reconhecer SO",
      instrucao: "Qual começa com SO?",
      grupos: [
        { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
        { imagemUrl: sucoImg, quantidade: 1, rotulo: "suco" },
        { imagemUrl: sapoImg, quantidade: 1, rotulo: "sapo" },
      ],
      pergunta: "Qual começa com SO?",
      opcoes: ["Sol", "Suco", "Sapo"],
      correta: 0,
      acerto: "SOl — SO!",
      erro: "SUco é SU. SApo é SA. SOl é SO.",
    },
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "B + O = ?", opcoes: ["BO", "BA", "BU"], correta: 0, explicacao: "B+O = BO." },
      { pergunta: "L + U = ?", opcoes: ["LO", "LU", "LI"], correta: 1, explicacao: "L+U = LU." },
      {
        pergunta: "Qual começa com LU?",
        opcoes: ["Lua", "Sapo", "Maçã"],
        correta: 0,
        explicacao: "LUa.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
      },
    ],
    medio: [
      {
        pergunta: "Qual começa com SO?",
        opcoes: ["Sol", "Suco", "Lua"],
        correta: 0,
        explicacao: "SOl.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: solImg, quantidade: 1, rotulo: "sol" },
            { imagemUrl: sucoImg, quantidade: 1, rotulo: "suco" },
            { imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
          ],
        },
      },
      { pergunta: "Quantas sílabas tem SUCO?", opcoes: ["1", "2", "3"], correta: 1, explicacao: "SU-CO = 2." },
      {
        pergunta: "Qual NÃO começa com sílaba com O?",
        opcoes: ["Bolo", "Sopa", "Lua"],
        correta: 2,
        explicacao: "LUa começa com U.",
      },
    ],
    dificil: [
      {
        pergunta: "Se leio B-O-L-O, formo:",
        opcoes: ["BO-LO (bolo)", "LO-BO", "BA-LA"],
        correta: 0,
        explicacao: "BO + LO = BOLO.",
        visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "bolo" },
      },
      {
        pergunta: "Qual grupo tem SÓ sílabas com U?",
        opcoes: ["LU · SU · NU", "BO · SO · LO", "MA · SA · PA"],
        correta: 0,
        explicacao: "Todas terminam em U.",
      },
      {
        pergunta: "Se junto L-U-A, o que leio?",
        opcoes: ["LUA", "ALU", "UAL"],
        correta: 0,
        explicacao: "LU + A = LUA.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "lua" },
      },
    ],
  },
  proximaHabilidade: {
    codigo: "EF01LP14",
    titulo: "Lendo minhas primeiras palavras CV+CV: PATO, SAPO, MAPA",
  },
};

export default aula;
