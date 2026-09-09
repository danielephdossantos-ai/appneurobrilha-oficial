import type { Aula } from "../types";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as luaImg } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as calendarioImg } from "@/assets/neuro-treino/objetos/calendario.png.asset.json";
import { url as relogioImg } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as diaImg } from "@/assets/neuro-treino/objetos/dia.png.asset.json";
import { url as noiteImg } from "@/assets/neuro-treino/objetos/noite.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as meninoAcordandoImg } from "@/assets/neuro-treino/objetos/menino-acordando.png.asset.json";
import { url as banhoImg } from "@/assets/neuro-treino/objetos/banho.png.asset.json";
import { url as escovarDentesImg } from "@/assets/neuro-treino/objetos/escovar-dentes.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * EF01CI05 — Ciências · 1º Ano
 * Missão do Dia: "Detetive do Tempo".
 * Identificar e nomear diferentes escalas de tempo:
 * os períodos diários (manhã, tarde, noite) e a sequência de
 * dias, semanas, meses e ano.
 */
const aula: Aula = {
  codigo: "EF01CI05",
  ano: "1º Ano",
  disciplina: "Ciências",
  titulo: "Detetive do Tempo",

  narrativa: {
    titulo: "Detetive do Tempo",
    contexto:
      "Brilha achou um relógio e um calendário na Floresta Encantada. O relógio marca as HORAS do dia. O calendário mostra os DIAS, as SEMANAS e os MESES do ano.",
    problema:
      "Mas o relógio parou! Sem o tempo, ninguém sabe quando é hora de acordar, comer, brincar ou dormir. O tempo ficou bagunçado!",
    convite:
      "Bora ser Detetive do Tempo com o Brilha? Descobrir manhã, tarde, noite, os dias da semana e organizar tudo de novo!",
  },

  conhecimentosPrevios: [
    "Reconhecer sol e lua.",
    "Perceber que existe dia e noite.",
    "Saber que se dorme à noite e acorda de manhã.",
  ],

  missao:
    "Levar a criança a identificar e nomear diferentes escalas de tempo: períodos diários (manhã, tarde, noite) e a sequência de dias, semanas, meses e ano.",

  objetivos: [
    "Reconhecer manhã, tarde e noite.",
    "Nomear os dias da semana.",
    "Perceber que 7 dias formam uma semana.",
    "Entender que existem meses e um ano com 12 meses.",
    "Usar o relógio e o calendário como instrumentos do tempo.",
  ],

  motivacao:
    "Todo dia tem uma manhã pra acordar, uma tarde pra brincar e uma noite pra descansar. O tempo é um amigo — se a gente escuta, tudo fica no lugar certo!",

  explicacao:
    "🌅 MANHÃ — o sol nasce, hora de acordar e tomar café.\n☀️ TARDE — o sol está alto, hora de brincar e almoçar.\n🌙 NOITE — a lua aparece, hora de jantar e dormir.\n\n📆 Sete dias formam uma SEMANA: domingo, segunda, terça, quarta, quinta, sexta, sábado.\n🗓️ Vários dias formam um MÊS. Doze meses formam um ANO.\n\n⏰ O RELÓGIO conta as HORAS. O CALENDÁRIO mostra os DIAS e MESES.",

  explicacoesNiveis: {
    nivel1:
      "O tempo passa: manhã, tarde e noite.",
    nivel2:
      "Dias formam semanas; semanas formam meses; meses formam o ano.",
    nivel3:
      "Relógio mostra HORAS. Calendário mostra DIAS e MESES.",
    nivel4:
      "Organizar o tempo ajuda a saber quando comer, estudar, brincar e dormir.",
  },

  exemploResolvido: {
    enunciado: "O sol acabou de nascer e o galo cantou. Que período é esse?",
    passos: [
      "Sol nascendo = começo do dia.",
      "Galo cantando = todo mundo acordando.",
      "Esse período tem nome: MANHÃ.",
    ],
    resposta: "🌅 MANHÃ — hora de acordar. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque na imagem que mostra a NOITE.",
    resposta: "🌙 A lua aparece no céu — é NOITE.",
    explicacao:
      "À noite o sol se põe e a lua e as estrelas aparecem. É a hora de dormir.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual imagem é a NOITE?",
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
      enunciado: "Quantos dias tem uma SEMANA?",
      resposta: "7 dias.",
      dica: "Conte: domingo, segunda, terça, quarta, quinta, sexta, sábado.",
    },
    {
      enunciado: "O que mostra as HORAS do dia?",
      resposta: "⏰ O RELÓGIO.",
      dica: "Tem ponteiros e números de 1 a 12.",
    },
    {
      enunciado: "O que mostra os DIAS e MESES do ano?",
      resposta: "📆 O CALENDÁRIO.",
      dica: "Tem quadradinhos com datas e nomes de meses.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: você é o Detetive do Tempo!",
    resposta: "Manhã, tarde e noite formam o dia — e o dia é medido pelo tempo.",
    visual: {
      perguntas: [
        {
          pergunta: "O SOL brilha durante o:",
          opcoes: ["☀️ DIA", "🌙 SONO", "🎂 ANIVERSÁRIO"],
          correta: 0,
          explicacao: "O sol aparece durante o dia (manhã e tarde).",
          visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
        },
        {
          pergunta: "A LUA e as ESTRELAS aparecem na:",
          opcoes: ["🌙 NOITE", "🌅 MANHÃ", "☀️ TARDE"],
          correta: 0,
          explicacao: "À noite o sol se põe e a lua aparece.",
          visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙" },
        },
        {
          pergunta: "Uma SEMANA tem quantos dias?",
          opcoes: ["7 dias", "3 dias", "20 dias"],
          correta: 0,
          explicacao: "Semana = 7 dias (dom, seg, ter, qua, qui, sex, sáb).",
          visual: { tipo: "itens", imagemUrl: calendarioImg, quantidade: 1, rotulo: "📆" },
        },
        {
          pergunta: "Um ANO tem quantos meses?",
          opcoes: ["12 meses", "2 meses", "50 meses"],
          correta: 0,
          explicacao: "Ano = 12 meses (janeiro até dezembro).",
          visual: { tipo: "itens", imagemUrl: calendarioImg, quantidade: 1, rotulo: "🗓️" },
        },
        {
          pergunta: "O que marca as HORAS?",
          opcoes: ["⏰ RELÓGIO", "🍎 MAÇÃ", "📚 LIVRO"],
          correta: 0,
          explicacao: "Relógio conta as horas do dia.",
          visual: { tipo: "itens", imagemUrl: relogioImg, quantidade: 1, rotulo: "⏰" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🌅 MANHÃ — sol nasce, hora de acordar.",
      "☀️ TARDE — sol alto, hora de brincar.",
      "🌙 NOITE — lua aparece, hora de dormir.",
      "📆 7 dias = 1 SEMANA.",
      "🗓️ 12 meses = 1 ANO.",
      "⏰ Relógio mostra horas. Calendário mostra dias e meses.",
    ],
    dica:
      "Antes de responder, pense: o SOL está no céu ou a LUA? É começo, meio ou fim do dia?",
  },

  quiz: [
    {
      pergunta: "Quando o SOL nasce, começa a:",
      opcoes: ["Manhã", "Noite", "Semana"],
      correta: 0,
      explicacao: "O sol nasce de manhã.",
    },
    {
      pergunta: "A LUA aparece no céu durante a:",
      opcoes: ["Noite", "Manhã", "Tarde"],
      correta: 0,
      explicacao: "À noite vemos a lua e as estrelas.",
    },
    {
      pergunta: "Quantos DIAS tem uma semana?",
      opcoes: ["7", "3", "12"],
      correta: 0,
      explicacao: "Semana = 7 dias.",
    },
    {
      pergunta: "Quantos MESES tem um ano?",
      opcoes: ["12", "7", "30"],
      correta: 0,
      explicacao: "Ano = 12 meses.",
    },
    {
      pergunta: "O RELÓGIO serve pra:",
      opcoes: ["Marcar as horas", "Comer", "Dormir"],
      correta: 0,
      explicacao: "O relógio mostra que hora é.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Detetive do Tempo! 🎁 Item desbloqueado: ⏰ Relógio Mágico do Brilha. Missão em Família: montem juntos uma linha do tempo do dia (manhã, tarde, noite) com o que a criança faz em cada período!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Um DIA tem 24 horas. A gente dorme mais ou menos 10 horas — dá quase metade do dia inteirinho descansando!",
  },

  interativas: [
    // FASE 1 — Dia ou Noite?
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Dia ou Noite?",
      instrucao: "Toque na imagem que mostra o DIA.",
      pergunta: "Qual é o DIA?",
      opcoes: [
        { nome: "DIA", imagemUrl: diaImg, rotulo: "☀️ DIA" },
        { nome: "NOITE", imagemUrl: noiteImg, rotulo: "🌙 NOITE" },
      ],
      correta: 0,
      acerto: "☀️ Isso! Quando o sol está no céu, é DIA.",
      erro: "Procure a imagem com SOL brilhando.",
    },

    // FASE 2 — Relógio ou Calendário?
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Instrumentos do Tempo",
      instrucao: "Qual serve pra marcar as HORAS?",
      pergunta: "Qual mostra as horas?",
      opcoes: [
        { nome: "RELÓGIO", imagemUrl: relogioImg, rotulo: "⏰ RELÓGIO" },
        { nome: "CALENDÁRIO", imagemUrl: calendarioImg, rotulo: "📆 CALENDÁRIO" },
        { nome: "LIVRO", imagemUrl: livroImg, rotulo: "📚 LIVRO" },
      ],
      correta: 0,
      acerto: "⏰ Isso! Relógio marca as horas.",
      erro: "Pense: qual tem ponteiros e números?",
    },

    // FASE 3 — Ordene as atividades do dia
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Cada Coisa no Período Certo",
      instrucao:
        "Arraste cada atividade pro período CERTO do dia.",
      pares: [
        { item: "🌅 ACORDAR", alvo: "MANHÃ" },
        { item: "🥣 CAFÉ DA MANHÃ", alvo: "MANHÃ" },
        { item: "🎨 BRINCAR", alvo: "TARDE" },
        { item: "🍽️ ALMOÇAR", alvo: "TARDE" },
        { item: "🌙 JANTAR", alvo: "NOITE" },
        { item: "😴 DORMIR", alvo: "NOITE" },
      ],
      alvosVisuais: [
        { nome: "MANHÃ", cor: "#FBBF24", capacidade: 2 },
        { nome: "TARDE", cor: "#F97316", capacidade: 2 },
        { nome: "NOITE", cor: "#6366F1", capacidade: 2 },
      ],
    },

    // FASE 4 — Laboratório do Tempo
    {
      tipo: "lupa",
      titulo: "Fase 4 · Laboratório do Tempo",
      instrucao:
        "Toque em cada elemento pra descobrir o que ele mede.",
      itens: [
        {
          nome: "Sol",
          imagemUrl: solImg,
          rotulo: "☀️ SOL",
          descoberta:
            "O sol aparece durante o DIA — manhã e tarde. Quando ele se põe, começa a noite.",
        },
        {
          nome: "Lua",
          imagemUrl: luaImg,
          rotulo: "🌙 LUA",
          descoberta:
            "A lua aparece à NOITE, junto com as estrelas. É a hora de descansar.",
        },
        {
          nome: "Relógio",
          imagemUrl: relogioImg,
          rotulo: "⏰ RELÓGIO",
          descoberta:
            "O relógio conta as HORAS do dia — 1, 2, 3... até 12. Um dia tem 24 horas.",
        },
        {
          nome: "Calendário",
          imagemUrl: calendarioImg,
          rotulo: "📆 CALENDÁRIO",
          descoberta:
            "O calendário mostra os DIAS, SEMANAS e MESES. Um ano tem 12 meses.",
        },
      ],
      acerto:
        "🔬 Laboratório completo! Agora você conhece os instrumentos do tempo.",
    },

    // FASE 5 — O que acontece de NOITE?
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Coisas da NOITE",
      instrucao:
        "Marque tudo que acontece de NOITE, quando o sol já se pôs.",
      criterio: "O que acontece à NOITE 🌙",
      opcoes: [
        { nome: "Lua no céu", imagemUrl: luaImg, rotulo: "🌙 LUA", correto: true },
        { nome: "Cena de noite", imagemUrl: noiteImg, rotulo: "🌌 CÉU ESCURO", correto: true },
        { nome: "Dormir", imagemUrl: meninoAcordandoImg, rotulo: "😴 DORMIR", correto: true },
        { nome: "Sol brilhando", imagemUrl: solImg, rotulo: "☀️ SOL", correto: false },
        { nome: "Dia claro", imagemUrl: diaImg, rotulo: "🌞 DIA", correto: false },
        { nome: "Ir pra escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA", correto: false },
        { nome: "Maçã", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ", correto: false },
      ],
      acerto: "🌙 Isso! De noite a lua brilha e a gente dorme.",
      erro: "Pense: isso acontece com sol ou com lua no céu?",
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
        pergunta: "A LUA aparece de:",
        opcoes: ["Noite", "Manhã cedo", "Tarde"],
        correta: 0,
        explicacao: "Lua = noite.",
        visual: { tipo: "itens", imagemUrl: luaImg, quantidade: 1, rotulo: "🌙" },
      },
      {
        pergunta: "O que serve pra ver as horas?",
        opcoes: ["Relógio", "Bola", "Maçã"],
        correta: 0,
        explicacao: "Relógio mostra as horas.",
        visual: { tipo: "itens", imagemUrl: relogioImg, quantidade: 1, rotulo: "⏰" },
      },
    ],
    medio: [
      {
        pergunta: "Uma SEMANA tem:",
        opcoes: ["7 dias", "3 dias", "12 dias"],
        correta: 0,
        explicacao: "7 dias = 1 semana.",
        visual: { tipo: "itens", imagemUrl: calendarioImg, quantidade: 1, rotulo: "📆" },
      },
      {
        pergunta: "Um ANO tem quantos MESES?",
        opcoes: ["12", "7", "24"],
        correta: 0,
        explicacao: "12 meses = 1 ano.",
        visual: { tipo: "itens", imagemUrl: calendarioImg, quantidade: 1, rotulo: "🗓️" },
      },
      {
        pergunta: "Depois da MANHÃ vem a:",
        opcoes: ["Tarde", "Noite", "Semana"],
        correta: 0,
        explicacao: "Manhã → tarde → noite.",
        visual: { tipo: "itens", imagemUrl: diaImg, quantidade: 1, rotulo: "☀️" },
      },
    ],
    dificil: [
      {
        pergunta: "Se hoje é SEGUNDA, amanhã será:",
        opcoes: ["Terça", "Domingo", "Sábado"],
        correta: 0,
        explicacao: "Depois de segunda vem terça.",
        visual: { tipo: "itens", imagemUrl: calendarioImg, quantidade: 1, rotulo: "📆" },
      },
      {
        pergunta: "O que a gente faz de MANHÃ?",
        opcoes: ["Acordar e tomar café", "Dormir", "Nada"],
        correta: 0,
        explicacao: "Manhã é hora de acordar.",
        visual: { tipo: "itens", imagemUrl: meninoAcordandoImg, quantidade: 1, rotulo: "🌅" },
      },
      {
        pergunta: "Um DIA tem:",
        opcoes: ["Manhã, tarde e noite", "Só manhã", "Só noite"],
        correta: 0,
        explicacao: "Um dia inteiro tem 3 períodos.",
        visual: { tipo: "itens", imagemUrl: relogioImg, quantidade: 1, rotulo: "⏰" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica do Tempo",
    objetivo:
      "As cenas passam na esteira. Toque na bandeja certa: MANHÃ, TARDE ou NOITE, antes de sair da tela!",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "MANHÃ", cor: "#FBBF24", emoji: "🌅" },
      { nome: "TARDE", cor: "#F97316", emoji: "☀️" },
      { nome: "NOITE", cor: "#6366F1", emoji: "🌙" },
    ],
    objetos: [
      { nome: "Sol nascendo", imagemUrl: diaImg, categoria: "MANHÃ" },
      { nome: "Acordar", imagemUrl: meninoAcordandoImg, categoria: "MANHÃ" },
      { nome: "Escovar dentes", imagemUrl: escovarDentesImg, categoria: "MANHÃ" },
      { nome: "Sol", imagemUrl: solImg, categoria: "TARDE" },
      { nome: "Escola", imagemUrl: escolaImg, categoria: "TARDE" },
      { nome: "Bola brincar", imagemUrl: bolaImg, categoria: "TARDE" },
      { nome: "Maçã (almoço)", imagemUrl: macaImg, categoria: "TARDE" },
      { nome: "Lua", imagemUrl: luaImg, categoria: "NOITE" },
      { nome: "Cena de noite", imagemUrl: noiteImg, categoria: "NOITE" },
      { nome: "Banho antes de dormir", imagemUrl: banhoImg, categoria: "NOITE" },
      { nome: "Lua novamente", imagemUrl: luaImg, categoria: "NOITE" },
      { nome: "Sol brilhando", imagemUrl: solImg, categoria: "TARDE" },
    ],
    acerto:
      "🏭 Fábrica do Tempo em ordem! Você é o Detetive oficial das horas.",
  },

  missaoFamilia: {
    titulo: "Linha do Tempo do Meu Dia",
    instrucao:
      "Com um familiar, desenhem OU escrevam 3 coisas que a criança faz de MANHÃ, 3 de TARDE e 3 de NOITE. Podem tirar uma foto da linha do tempo pronta!",
    permitirFoto: true,
    registros: [
      { label: "Uma coisa que faço de MANHÃ", tipo: "texto" },
      { label: "Uma coisa que faço à TARDE", tipo: "texto" },
      { label: "Uma coisa que faço à NOITE", tipo: "texto" },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01CI06",
  },
};

export default aula;
