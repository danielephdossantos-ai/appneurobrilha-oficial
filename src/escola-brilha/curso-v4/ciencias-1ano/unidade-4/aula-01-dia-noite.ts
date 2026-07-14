import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png.asset.json";
import { url as diaImg } from "@/assets/ciencias-1ano/u4-a1/paisagem-dia.jpg.asset.json";
import { url as noiteImg } from "@/assets/ciencias-1ano/u4-a1/paisagem-noite.jpg.asset.json";
import { url as solImg } from "@/assets/ciencias-1ano/u4-a1/sol-sorrindo.jpg.asset.json";
import { url as luaImg } from "@/assets/ciencias-1ano/u4-a1/lua-estrelas.jpg.asset.json";
import { url as dormindoImg } from "@/assets/ciencias-1ano/u4-a1/crianca-dormindo.jpg.asset.json";

/**
 * Ciências · 1º Ano · U4 · A01 — Dia e Noite (EF01CI05)
 * Cristal do Dia e da Noite.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-dia-noite",
  titulo: "Dia e Noite",
  iconeTrilha: "🌗",
  bncc: ["EF01CI05"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toque na tela pra começar!",
    mapaUrl: diaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "O 4º cristal se divide em DOIS pedaços: um no CÉU DE DIA, outro no CÉU DE NOITE. Vamos descobrir a diferença!",
    falaFinal: "Cada momento tem seu brilho!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Quando a gente vê o SOL no céu?",
    pergunta: "Quando aparece o SOL?",
    fotoUrl: solImg,
    opcoes: [
      { id: "dia", titulo: "De dia", subtitulo: "com luz", emoji: "☀️", cor: "from-yellow-400 to-orange-600" },
      { id: "noite", titulo: "De noite", subtitulo: "escuro", emoji: "🌙", cor: "from-indigo-400 to-purple-700" },
      { id: "sempre", titulo: "Sempre", subtitulo: "24 horas", emoji: "🔄", cor: "from-emerald-400 to-green-700" },
    ],
    respostaCerta: "dia",
    feedbackAcerto: "Sol aparece de DIA — ele que ilumina tudo!",
    feedbackErro: "De noite é escuro. O sol brilha de DIA.",
    falaFinal: "Sol de dia, lua de noite!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As diferenças entre dia e noite.",
    instrucao: "O que muda?",
    cadernos: [
      { id: "sol", capa: "SOL", emoji: "☀️", cor: "from-yellow-400 to-orange-600", conteudo: "Aparece de dia. Ilumina e esquenta a Terra.", exemplo: "Ex.: quando o sol nasce, o dia começa.", fotoUrl: solImg },
      { id: "dia", capa: "DIA", emoji: "🌞", cor: "from-sky-400 to-blue-500", conteudo: "Céu claro, com luz do sol. Pessoas trabalham e estudam.", exemplo: "Ex.: manhã, meio-dia, tarde.", fotoUrl: diaImg },
      { id: "lua", capa: "LUA", emoji: "🌙", cor: "from-indigo-400 to-purple-700", conteudo: "Aparece à noite. Junto com as estrelas.", exemplo: "Ex.: às vezes cheia e redonda, às vezes um risquinho.", fotoUrl: luaImg },
      { id: "noite", capa: "NOITE", emoji: "🌌", cor: "from-slate-700 to-indigo-900", conteudo: "Céu escuro. Hora de dormir e o corpo descansar.", exemplo: "Ex.: depois do jantar, o corpo pede sono.", fotoUrl: noiteImg },
      { id: "dormir", capa: "DORMIR", emoji: "💤", cor: "from-purple-400 to-fuchsia-700", conteudo: "À noite, o corpo descansa e cresce.", exemplo: "Ex.: 10 horas de sono todo dia pra crianças.", fotoUrl: dormindoImg },
    ],
    falaFinal: "Sol acorda, lua faz dormir!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada elemento.",
    instrucao: "Toque nos elementos",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: diaImg,
    pontos: [
      { id: "sol", x: 25, y: 25, emoji: "☀️", cor: "from-yellow-400 to-orange-600", titulo: "Sol", texto: "Estrela gigante que ilumina e esquenta a Terra.", fotoUrl: solImg },
      { id: "dia", x: 50, y: 40, emoji: "🌞", cor: "from-sky-400 to-blue-500", titulo: "Dia", texto: "Céu claro. Pessoas estão acordadas e trabalhando.", fotoUrl: diaImg },
      { id: "lua", x: 75, y: 25, emoji: "🌙", cor: "from-indigo-400 to-purple-700", titulo: "Lua", texto: "Aparece à noite. Reflete a luz do sol.", fotoUrl: luaImg },
      { id: "noite", x: 50, y: 65, emoji: "🌌", cor: "from-slate-700 to-indigo-900", titulo: "Noite", texto: "Céu escuro. Bichos noturnos saem, gente dorme.", fotoUrl: noiteImg },
      { id: "sono", x: 50, y: 85, emoji: "💤", cor: "from-purple-400 to-fuchsia-700", titulo: "Sono", texto: "O corpo descansa e a mente organiza o que aprendeu.", fotoUrl: dormindoImg },
    ],
    falaFinal: "Cada elemento tem seu momento!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O céu fica escuro:", fotoUrl: noiteImg, cards: [{ id: "a", emoji: "🌌", titulo: "De noite", cor: "from-slate-700 to-indigo-900" }, { id: "b", emoji: "☀️", titulo: "De dia", cor: "from-yellow-400 to-orange-600" }, { id: "c", emoji: "🌈", titulo: "Sempre", cor: "from-pink-400 to-fuchsia-600" }], correta: "a", feedbackAcerto: "De NOITE! Sol vai embora.", feedbackErro: "De dia o céu é claro. De NOITE fica escuro." },
      { id: "q2", pergunta: "Quem ilumina o dia:", fotoUrl: solImg, cards: [{ id: "a", emoji: "☀️", titulo: "O Sol", cor: "from-yellow-400 to-orange-600" }, { id: "b", emoji: "🌙", titulo: "A Lua", cor: "from-indigo-400 to-purple-700" }, { id: "c", emoji: "⭐", titulo: "Estrela", cor: "from-cyan-400 to-sky-600" }], correta: "a", feedbackAcerto: "O SOL brilha e ilumina tudo!", feedbackErro: "Lua brilha de noite. De dia é o SOL." },
      { id: "q3", pergunta: "A hora de dormir é:", fotoUrl: dormindoImg, cards: [{ id: "a", emoji: "🌙", titulo: "À noite", cor: "from-indigo-400 to-purple-700" }, { id: "b", emoji: "☀️", titulo: "De manhã", cor: "from-yellow-400 to-orange-600" }, { id: "c", emoji: "🌞", titulo: "Meio-dia", cor: "from-orange-400 to-red-600" }], correta: "a", feedbackAcerto: "À NOITE o corpo descansa!", feedbackErro: "De dia a gente acorda. À NOITE dorme." },
    ],
    falaFinal: "Diferença clara!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Céu de DIA e céu de NOITE.",
    instrucao: "Toque nos interruptores",
    mapaUrl: diaImg,
    camadas: [
      { id: "dia", rotulo: "Dia", emoji: "☀️", cor: "from-yellow-400 to-orange-600", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Céu azul com sol. Tudo iluminado, gente acordada.", fotoUrl: diaImg },
      { id: "noite", rotulo: "Noite", emoji: "🌙", cor: "from-indigo-500 to-purple-800", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Céu escuro com lua e estrelas. Hora de dormir.", fotoUrl: noiteImg },
    ],
    falaFinal: "Céu muda a cor conforme o tempo!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "A ordem de um dia inteiro.",
    instrucao: "Toque na ordem certa",
    pergunta: "Do amanhecer à hora de dormir:",
    paradas: [
      { id: "manha", emoji: "🌅", rotulo: "1. Manhã", descricao: "Sol nasce, a gente acorda.", fotoUrl: solImg },
      { id: "tarde", emoji: "🌇", rotulo: "2. Tarde", descricao: "Sol começa a ficar mais baixo.", fotoUrl: diaImg },
      { id: "noite", emoji: "🌙", rotulo: "3. Noite", descricao: "Escurece, lua aparece.", fotoUrl: noiteImg },
      { id: "sono", emoji: "💤", rotulo: "4. Sono", descricao: "Corpo descansa.", fotoUrl: dormindoImg },
    ],
    ordemCerta: ["manha", "tarde", "noite", "sono"],
    feedbackAcerto: "Ciclo completo do dia!",
    feedbackErro: "Manhã, tarde, noite, sono — nessa ordem!",
    falaFinal: "Isso acontece TODO DIA!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Diário do Céu.",
    tituloLivro: "📓 Diário do Céu",
    subtitulo: "Página 4 — Dia e noite",
    paragrafos: [
      { id: "p1", texto: "De DIA o SOL brilha no céu. Ele é uma ESTRELA gigante e quente que ilumina toda a Terra. Sem o sol, seria escuro e frio.", chaves: ["sol", "estrela"], definicoes: { sol: "Estrela que ilumina e esquenta a Terra.", estrela: "Bola de fogo brilhante no céu." }, fotoUrl: solImg },
      { id: "p2", texto: "De NOITE a LUA aparece com as ESTRELAS. A lua não brilha sozinha — ela reflete a luz do sol como um espelho.", chaves: ["lua", "estrelas"], definicoes: { lua: "Bola que gira em volta da Terra.", estrelas: "Sóis muito longe da gente." }, fotoUrl: luaImg },
      { id: "p3", texto: "O CORPO precisa DORMIR à noite pra descansar e CRESCER. Crianças precisam de bastante sono todo dia.", chaves: ["dormir", "crescer"], definicoes: { dormir: "Fechar os olhos e descansar.", crescer: "Ficar maior — acontece principalmente enquanto dorme." }, fotoUrl: dormindoImg },
    ],
    falaFinal: "Ciência do céu explicada!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cada rodada mostra uma cena — DIA ou NOITE?",
    instrucao: "⏱️ Dia ou noite?",
    duracaoSegundos: 15,
    pecas: [
      { id: "dia", emoji: "☀️", rotulo: "Dia" },
      { id: "noite", emoji: "🌙", rotulo: "Noite" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Sol brilhando", emoji: "☀️", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Céu azul", emoji: "🌤️", cor: "from-sky-400 to-blue-500" }, contexto: "Sol no alto do céu, tudo iluminado.", pecaCertaId: "dia", fotoUrl: diaImg, feedbackAcerto: "DIA!", feedbackErro: "Sol brilhando = DIA." },
      { id: "r2", municipioA: { nome: "Lua e estrelas", emoji: "🌙", cor: "from-indigo-400 to-purple-700" }, municipioB: { nome: "Céu escuro", emoji: "🌌", cor: "from-slate-700 to-indigo-900" }, contexto: "Lua no céu, tudo escuro.", pecaCertaId: "noite", fotoUrl: noiteImg, feedbackAcerto: "NOITE!", feedbackErro: "Lua = NOITE." },
      { id: "r3", municipioA: { nome: "Crianças brincando", emoji: "🏃", cor: "from-emerald-400 to-green-700" }, municipioB: { nome: "Sol de praia", emoji: "🏖️", cor: "from-orange-400 to-red-600" }, contexto: "Praia cheia, criança brincando, sol quente.", pecaCertaId: "dia", fotoUrl: diaImg, feedbackAcerto: "DIA!", feedbackErro: "Praia com sol = DIA." },
      { id: "r4", municipioA: { nome: "Pijama", emoji: "🛌", cor: "from-purple-400 to-fuchsia-700" }, municipioB: { nome: "Dormindo", emoji: "💤", cor: "from-indigo-400 to-purple-700" }, contexto: "Criança de pijama dormindo na cama.", pecaCertaId: "noite", fotoUrl: dormindoImg, feedbackAcerto: "NOITE!", feedbackErro: "Sono é de NOITE." },
    ],
    falaFinal: "Você distingue tudo!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "24 horas: metade é DIA, metade é NOITE.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: diaImg,
    fatias: [
      { id: "dia", rotulo: "Dia (12h)", emoji: "☀️", percentual: 50, cor: "#facc15", descricao: "Sol brilhando, gente acordada.", exemplos: ["Manhã", "Tarde"], fotoUrl: diaImg },
      { id: "noite", rotulo: "Noite (12h)", emoji: "🌙", percentual: 50, cor: "#4f46e5", descricao: "Escuro, hora de descansar.", exemplos: ["Noite", "Madrugada"], fotoUrl: noiteImg },
    ],
    falaFinal: "12 + 12 = 24 horas!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas.",
    instrucao: "3 perguntas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "De dia aparece:", fotoUrl: solImg, opcoes: [{ id: "a", texto: "O Sol", correta: true }, { id: "b", texto: "A Lua" }], feedbackAcerto: "Isso!", feedbackErro: "É o SOL." },
      { id: "q2", pergunta: "À noite aparece:", fotoUrl: luaImg, opcoes: [{ id: "a", texto: "A Lua", correta: true }, { id: "b", texto: "O Sol" }], feedbackAcerto: "Certo!", feedbackErro: "É a LUA." },
      { id: "q3", pergunta: "A gente dorme:", fotoUrl: dormindoImg, opcoes: [{ id: "a", texto: "À noite", correta: true }, { id: "b", texto: "De manhã" }], feedbackAcerto: "PERFEITO!", feedbackErro: "Dorme à NOITE." },
    ],
    selo: { nome: "Cristal do Dia e Noite", subtitulo: "4º cristal desbloqueado!", emoji: "💎", cor: "from-yellow-400 via-orange-500 to-indigo-700" },
    falaFinal: "Cristal do Dia e da Noite recuperado!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Astrônomo Iniciante" },
};
