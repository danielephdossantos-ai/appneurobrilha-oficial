import type { Aula } from "../types";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import luaImg from "@/assets/neuro-treino/objetos/lua.png";
import diaImg from "@/assets/neuro-treino/objetos/dia.png";
import noiteImg from "@/assets/neuro-treino/objetos/noite.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import meninoAcordandoImg from "@/assets/neuro-treino/objetos/menino-acordando.png";
import banhoImg from "@/assets/neuro-treino/objetos/banho.png";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import escovarDentesImg from "@/assets/neuro-treino/objetos/escovar-dentes.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import galoImg from "@/assets/neuro-treino/objetos/galo.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";

/**
 * EF01CI06 — Ciências · 1º Ano
 * Missão do Dia: "Amigos do Sol e da Lua".
 * Selecionar exemplos de como a sucessão de dias e noites
 * orienta o cotidiano — quando acordar, comer, brincar,
 * ir pra escola e dormir.
 */
const aula: Aula = {
  codigo: "EF01CI06",
  ano: "1º Ano",
  disciplina: "Ciências",
  titulo: "Amigos do Sol e da Lua",

  narrativa: {
    titulo: "Amigos do Sol e da Lua",
    contexto:
      "Sol e Lua são melhores amigos. Quando o Sol vem trabalhar no céu, a Lua descansa. Quando a Lua acorda, o Sol vai dormir. Nunca aparecem juntos!",
    problema:
      "Um dia o Sol perguntou: 'Por que a gente reveza assim?' A Lua respondeu: 'Porque isso ajuda as pessoas a saber o que fazer em cada hora!'",
    convite:
      "Bora com o Brilha descobrir como o DIA e a NOITE organizam tudo o que a gente faz no dia a dia?",
  },

  conhecimentosPrevios: [
    "Diferenciar sol e lua.",
    "Saber que existe dia (claro) e noite (escuro).",
    "Já ter uma rotina de acordar, comer e dormir.",
  ],

  missao:
    "Levar a criança a selecionar exemplos de como a sucessão de dia e noite orienta o cotidiano — trabalho, escola, alimentação, brincadeira e sono.",

  objetivos: [
    "Reconhecer que o DIA acontece porque o Sol está no céu.",
    "Reconhecer que a NOITE acontece quando a Lua toma o lugar do Sol.",
    "Entender que dia e noite se REVEZAM (um depois do outro).",
    "Associar cada atividade do cotidiano ao período (dia ou noite).",
    "Perceber que a rotina segue a sucessão dia/noite.",
  ],

  motivacao:
    "Sol e Lua trabalham em turnos! Um cuida do céu enquanto o outro descansa — e é por isso que a gente sabe quando é hora de acordar ou dormir.",

  explicacao:
    "☀️ Quando o Sol aparece, é DIA — o céu fica claro. Hora de acordar, comer, ir pra escola, brincar.\n🌙 Quando o Sol se põe e a Lua aparece, é NOITE — o céu fica escuro. Hora de jantar, tomar banho e dormir.\n\n🔁 Dia e Noite se REVEZAM sem parar: dia → noite → dia → noite. Nunca acabam!\n\n🐓 Alguns animais são do DIA (galo, passarinho). 🦉 Outros são da NOITE (coruja, morcego). Cada um tem seu horário.",

  explicacoesNiveis: {
    nivel1:
      "Sol traz o DIA. Lua traz a NOITE.",
    nivel2:
      "Dia é claro pra trabalhar e brincar. Noite é escura pra descansar.",
    nivel3:
      "Dia e noite se revezam — um sempre vem depois do outro.",
    nivel4:
      "Nossa rotina segue a sucessão dia/noite: acordar de dia, dormir à noite.",
  },

  exemploResolvido: {
    enunciado: "O galo cantou e o sol nasceu. É hora de fazer o quê?",
    passos: [
      "Sol nasceu = começou o DIA.",
      "Galo cantou = todo mundo acordando.",
      "Se é dia, é hora de ACORDAR e começar a rotina.",
    ],
    resposta: "🌅 ACORDAR e tomar café da manhã. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque na cena que mostra o momento de DORMIR.",
    resposta: "🌙 A NOITE — quando a lua aparece, é hora de dormir.",
    explicacao:
      "À noite o céu fica escuro e o corpo pede descanso. É a hora do sono.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual cena é a hora de DORMIR?",
      opcoes: [
        { nome: "noite", imagemUrl: noiteImg },
        { nome: "dia", imagemUrl: diaImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "noite",
    },
  },

  exercicios: [
    {
      enunciado: "Quando o SOL está no céu, é dia ou noite?",
      resposta: "☀️ DIA.",
      dica: "Sol brilha = claro.",
    },
    {
      enunciado: "Quando a LUA aparece, é dia ou noite?",
      resposta: "🌙 NOITE.",
      dica: "Lua brilha = escuro.",
    },
    {
      enunciado: "Depois do dia sempre vem o quê?",
      resposta: "🌙 A NOITE.",
      dica: "Dia e noite se revezam.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: mostre que entende o revezamento do sol e da lua!",
    resposta: "Dia e noite se revezam e organizam a rotina.",
    visual: {
      perguntas: [
        {
          pergunta: "IR PRA ESCOLA é atividade de:",
          opcoes: ["☀️ DIA", "🌙 NOITE", "Nenhum"],
          correta: 0,
          explicacao: "A escola funciona durante o dia.",
          visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
        },
        {
          pergunta: "DORMIR na cama é atividade de:",
          opcoes: ["🌙 NOITE", "☀️ DIA", "Nunca"],
          correta: 0,
          explicacao: "A gente dorme à noite.",
          visual: { tipo: "itens", imagemUrl: noiteImg, quantidade: 1, rotulo: "😴" },
        },
        {
          pergunta: "O GALO canta na:",
          opcoes: ["🌅 MANHÃ do dia", "🌙 NOITE", "🎂 FESTA"],
          correta: 0,
          explicacao: "O galo canta quando o sol nasce.",
          visual: { tipo: "itens", imagemUrl: galoImg, quantidade: 1, rotulo: "🐓" },
        },
        {
          pergunta: "A CORUJA fica acordada na:",
          opcoes: ["🌙 NOITE", "☀️ TARDE", "🌅 MANHÃ"],
          correta: 0,
          explicacao: "Coruja é animal noturno.",
          visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
        },
        {
          pergunta: "Depois do DIA vem sempre a:",
          opcoes: ["NOITE", "Outra semana", "Nada"],
          correta: 0,
          explicacao: "Dia e noite se revezam.",
          visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "☀️ Sol no céu = DIA claro.",
      "🌙 Lua no céu = NOITE escura.",
      "🔁 Dia e noite se revezam sem parar.",
      "🌅 De dia: acordar, comer, escola, brincar.",
      "😴 De noite: jantar, banho, dormir.",
      "🐓 Galo é do dia; 🦉 coruja é da noite.",
    ],
    dica:
      "Antes de responder, pergunte: essa coisa acontece com SOL ou com LUA no céu?",
  },

  quiz: [
    {
      pergunta: "Quando é DIA?",
      opcoes: ["Quando o sol está no céu", "Quando a lua está no céu", "Nunca"],
      correta: 0,
      explicacao: "Sol no céu = dia.",
    },
    {
      pergunta: "Quando é NOITE?",
      opcoes: ["Quando a lua aparece e escurece", "Quando o sol nasce", "Ao meio-dia"],
      correta: 0,
      explicacao: "Lua no céu = noite.",
    },
    {
      pergunta: "Depois do dia vem sempre:",
      opcoes: ["A noite", "Outro dia igual", "O ano"],
      correta: 0,
      explicacao: "Dia e noite se revezam.",
    },
    {
      pergunta: "Qual dessas coisas fazemos de DIA?",
      opcoes: ["Ir pra escola", "Dormir a noite toda", "Nada"],
      correta: 0,
      explicacao: "A escola acontece de dia.",
    },
    {
      pergunta: "Qual desses animais fica acordado à NOITE?",
      opcoes: ["Coruja", "Galo", "Passarinho de manhã"],
      correta: 0,
      explicacao: "Coruja é animal noturno.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Amigo do Sol e da Lua! 🎁 Item desbloqueado: 🔁 Ampulheta do Brilha. Missão em Família: observem juntos o céu de dia e de noite e registrem o que viram em cada momento!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A cada 24 horas o planeta gira uma vez inteirinha — é por isso que sempre tem um lado no dia e outro na noite!",
  },

  interativas: [
    // FASE 1 — Dia ou Noite?
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Quem Está no Céu?",
      instrucao: "Toque em quem aparece de DIA.",
      pergunta: "Quem aparece de DIA?",
      opcoes: [
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "LUA", imagemUrl: luaImg, rotulo: "🌙 LUA" },
        { nome: "ESTRELA", imagemUrl: estrelaImg, rotulo: "⭐ ESTRELA" },
      ],
      correta: 0,
      acerto: "☀️ Isso! O sol é do dia.",
      erro: "Pense: qual brilha durante o dia claro?",
    },

    // FASE 2 — Compare cenas
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Qual É a NOITE?",
      instrucao: "Toque na cena de NOITE.",
      pergunta: "Qual imagem é a noite?",
      opcoes: [
        { nome: "NOITE", imagemUrl: noiteImg, rotulo: "🌙 NOITE" },
        { nome: "DIA", imagemUrl: diaImg, rotulo: "☀️ DIA" },
      ],
      correta: 0,
      acerto: "🌙 Isso! Céu escuro com lua = noite.",
      erro: "Pense: em qual imagem está escuro?",
    },

    // FASE 3 — Arrastar atividades pro período certo
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Cada Coisa no Seu Momento",
      instrucao:
        "Arraste cada atividade pro período certo: DIA ou NOITE.",
      pares: [
        { item: "🌅 ACORDAR", alvo: "DIA" },
        { item: "🏫 IR PRA ESCOLA", alvo: "DIA" },
        { item: "⚽ BRINCAR NO PARQUE", alvo: "DIA" },
        { item: "🍎 ALMOÇAR", alvo: "DIA" },
        { item: "🚿 BANHO ANTES DE DORMIR", alvo: "NOITE" },
        { item: "😴 DORMIR", alvo: "NOITE" },
        { item: "🌙 VER AS ESTRELAS", alvo: "NOITE" },
      ],
      alvosVisuais: [
        { nome: "DIA", cor: "#FBBF24", capacidade: 4 },
        { nome: "NOITE", cor: "#6366F1", capacidade: 3 },
      ],
    },

    // FASE 4 — Laboratório: por que dia e noite se revezam
    {
      tipo: "lupa",
      titulo: "Fase 4 · Laboratório do Revezamento",
      instrucao:
        "Toque em cada cena pra entender POR QUE dia e noite se revezam.",
      itens: [
        {
          nome: "Dia",
          imagemUrl: diaImg,
          rotulo: "☀️ DIA",
          descoberta:
            "Quando o Sol aparece, tudo fica claro. É a hora de acordar, se alimentar, ir pra escola e brincar.",
        },
        {
          nome: "Noite",
          imagemUrl: noiteImg,
          rotulo: "🌙 NOITE",
          descoberta:
            "Quando o Sol se põe e a Lua aparece, o céu fica escuro. O corpo pede descanso — é hora de dormir.",
        },
        {
          nome: "Galo",
          imagemUrl: galoImg,
          rotulo: "🐓 GALO",
          descoberta:
            "O galo canta bem cedinho quando o sol nasce. Ele é um animal do DIA.",
        },
        {
          nome: "Coruja",
          imagemUrl: corujaImg,
          rotulo: "🦉 CORUJA",
          descoberta:
            "A coruja fica acordada de noite e dorme de dia. Ela é um animal da NOITE.",
        },
      ],
      acerto:
        "🔬 Descoberta feita! Dia e noite se revezam e organizam a vida.",
    },

    // FASE 5 — Coisas do DIA
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Coisas do DIA",
      instrucao:
        "Marque tudo que a gente faz de DIA, com o sol no céu.",
      criterio: "O que acontece de DIA ☀️",
      opcoes: [
        { nome: "Sol", imagemUrl: solImg, rotulo: "☀️ SOL", correto: true },
        { nome: "Ir pra escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA", correto: true },
        { nome: "Brincar de bola", imagemUrl: bolaImg, rotulo: "⚽ BRINCAR", correto: true },
        { nome: "Passarinho", imagemUrl: passaroImg, rotulo: "🐦 PASSARINHO", correto: true },
        { nome: "Almoçar", imagemUrl: macaImg, rotulo: "🍎 ALMOÇO", correto: true },
        { nome: "Lua", imagemUrl: luaImg, rotulo: "🌙 LUA", correto: false },
        { nome: "Coruja", imagemUrl: corujaImg, rotulo: "🦉 CORUJA", correto: false },
        { nome: "Cena noturna", imagemUrl: noiteImg, rotulo: "🌌 NOITE", correto: false },
      ],
      acerto: "☀️ Isso! Com o sol no céu tem escola, brincadeira e almoço.",
      erro: "Pense: o SOL está brilhando quando isso acontece?",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "O SOL brilha durante o:",
        opcoes: ["Dia", "Sono", "Ano"],
        correta: 0,
        explicacao: "Sol = dia.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
      },
      {
        pergunta: "A LUA aparece na:",
        opcoes: ["Noite", "Manhã", "Tarde"],
        correta: 0,
        explicacao: "Lua = noite.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙" },
      },
      {
        pergunta: "Dormir é atividade de:",
        opcoes: ["Noite", "Dia", "Almoço"],
        correta: 0,
        explicacao: "A gente dorme à noite.",
        visual: { tipo: "itens", imagemUrl: noiteImg, quantidade: 1, rotulo: "😴" },
      },
    ],
    medio: [
      {
        pergunta: "Ir pra escola é de:",
        opcoes: ["Dia", "Noite", "Nunca"],
        correta: 0,
        explicacao: "A escola acontece de dia.",
        visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
      },
      {
        pergunta: "Depois do DIA vem a:",
        opcoes: ["Noite", "Outra semana", "Nada"],
        correta: 0,
        explicacao: "Dia e noite se revezam.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙" },
      },
      {
        pergunta: "Depois da NOITE vem o:",
        opcoes: ["Dia", "Outra noite", "Ano"],
        correta: 0,
        explicacao: "Sempre depois da noite volta o dia.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
      },
    ],
    dificil: [
      {
        pergunta: "Qual é o animal da NOITE?",
        opcoes: ["Coruja", "Galo", "Passarinho de manhã"],
        correta: 0,
        explicacao: "Coruja é noturna.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🦉" },
      },
      {
        pergunta: "Por que a gente DORME à noite?",
        opcoes: [
          "Porque o corpo pede descanso",
          "Porque tem sol",
          "Porque é sábado",
        ],
        correta: 0,
        explicacao: "À noite o corpo descansa e recupera energia.",
        visual: { tipo: "itens", imagemUrl: noiteImg, quantidade: 1, rotulo: "😴" },
      },
      {
        pergunta: "O revezamento dia/noite ajuda a:",
        opcoes: [
          "Organizar a rotina do dia",
          "Deixar tudo mais difícil",
          "Não muda nada",
        ],
        correta: 0,
        explicacao: "Dia e noite dizem quando trabalhar e quando descansar.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "🔁" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Sol e Lua na Esteira",
    objetivo:
      "As atividades passam na esteira. Toque na bandeja DIA ou NOITE antes que caiam!",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "DIA", cor: "#FBBF24", emoji: "☀️" },
      { nome: "NOITE", cor: "#6366F1", emoji: "🌙" },
    ],
    objetos: [
      { nome: "Sol", imagemUrl: solImg, categoria: "DIA" },
      { nome: "Escola", imagemUrl: escolaImg, categoria: "DIA" },
      { nome: "Acordar", imagemUrl: meninoAcordandoImg, categoria: "DIA" },
      { nome: "Brincar", imagemUrl: bolaImg, categoria: "DIA" },
      { nome: "Escovar dentes de manhã", imagemUrl: escovarDentesImg, categoria: "DIA" },
      { nome: "Almoço", imagemUrl: macaImg, categoria: "DIA" },
      { nome: "Galo", imagemUrl: galoImg, categoria: "DIA" },
      { nome: "Passarinho", imagemUrl: passaroImg, categoria: "DIA" },
      { nome: "Lua", imagemUrl: luaImg, categoria: "NOITE" },
      { nome: "Cena de noite", imagemUrl: noiteImg, categoria: "NOITE" },
      { nome: "Coruja", imagemUrl: corujaImg, categoria: "NOITE" },
      { nome: "Banho de dormir", imagemUrl: banhoImg, categoria: "NOITE" },
      { nome: "Estrela", imagemUrl: estrelaImg, categoria: "NOITE" },
      { nome: "Casa à noite", imagemUrl: casaImg, categoria: "NOITE" },
    ],
    acerto:
      "🏭 Sol e Lua bem separados! Você entende o revezamento perfeito.",
  },

  missaoFamilia: {
    titulo: "Diário do Sol e da Lua",
    instrucao:
      "Com um familiar, observem o céu DURANTE O DIA e à NOITE. Anotem o que viram (sol, nuvens, lua, estrelas) e uma atividade que fizeram em cada período. Podem tirar duas fotos: uma de dia e outra de noite!",
    permitirFoto: true,
    registros: [
      { label: "O que vi no céu de DIA?", tipo: "texto" },
      { label: "O que vi no céu à NOITE?", tipo: "texto" },
      { label: "Uma atividade que fiz em cada período", tipo: "texto" },
    ],
  },

  proximaHabilidade: {
    codigo: "EF02CI01",
  },
};

export default aula;
