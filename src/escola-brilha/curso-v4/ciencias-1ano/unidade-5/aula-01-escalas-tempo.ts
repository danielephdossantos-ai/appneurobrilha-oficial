import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import relogioImg from "@/assets/ciencias-1ano/u5-a1/relogio-parede.jpg";
import ampulhetaImg from "@/assets/ciencias-1ano/u5-a1/ampulheta.jpg";
import semanaImg from "@/assets/ciencias-1ano/u5-a1/calendario-semana.jpg";
import mesImg from "@/assets/ciencias-1ano/u5-a1/calendario-mes.jpg";
import aniversarioImg from "@/assets/ciencias-1ano/u5-a1/aniversario-ano.jpg";

/**
 * Ciências · 1º Ano · U5 · A01 — Escalas de Tempo (EF01CI06)
 * Cristal do Tempo.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-escalas-tempo",
  titulo: "Medindo o Tempo",
  iconeTrilha: "⏰",
  bncc: ["EF01CI06"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toque na tela pra começar!",
    mapaUrl: relogioImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "O 5º cristal está dentro de um RELÓGIO! Vamos descobrir como o tempo é medido: hora, dia, semana, mês e ano!",
    falaFinal: "Tempo passa igual pra todo mundo!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Quantos dias tem uma SEMANA?",
    pergunta: "Quantos dias tem uma semana?",
    fotoUrl: semanaImg,
    opcoes: [
      { id: "5", titulo: "5 dias", subtitulo: "só escola", emoji: "5️⃣", cor: "from-amber-400 to-orange-600" },
      { id: "7", titulo: "7 dias", subtitulo: "escola + fim de semana", emoji: "7️⃣", cor: "from-emerald-400 to-green-700" },
      { id: "30", titulo: "30 dias", subtitulo: "mês inteiro", emoji: "🔟", cor: "from-purple-400 to-fuchsia-700" },
    ],
    respostaCerta: "7",
    feedbackAcerto: "Isso! 7 dias: 5 de escola + sábado e domingo.",
    feedbackErro: "Escola tem 5 dias, mas ainda tem sábado e domingo. Total: 7.",
    falaFinal: "7 dias formam uma semana!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As escalas de tempo.",
    instrucao: "Como medimos o tempo",
    cadernos: [
      { id: "hora", capa: "HORA", emoji: "🕐", cor: "from-cyan-400 to-sky-600", conteudo: "60 minutos. O relógio marca as horas do dia.", exemplo: "Ex.: 1 hora de aula.", fotoUrl: relogioImg },
      { id: "dia", capa: "DIA", emoji: "🌞", cor: "from-yellow-400 to-orange-600", conteudo: "24 horas. Do amanhecer até o próximo amanhecer.", exemplo: "Ex.: hoje é um dia.", fotoUrl: ampulhetaImg },
      { id: "semana", capa: "SEMANA", emoji: "📅", cor: "from-emerald-400 to-green-700", conteudo: "7 dias. Domingo, segunda, terça, quarta, quinta, sexta, sábado.", exemplo: "Ex.: uma semana de aula.", fotoUrl: semanaImg },
      { id: "mes", capa: "MÊS", emoji: "🗓️", cor: "from-purple-400 to-fuchsia-700", conteudo: "Cerca de 30 dias, ou 4 semanas.", exemplo: "Ex.: janeiro, fevereiro, março…", fotoUrl: mesImg },
      { id: "ano", capa: "ANO", emoji: "🎂", cor: "from-pink-400 to-rose-600", conteudo: "12 meses. Do seu aniversário até o próximo.", exemplo: "Ex.: quando faz aniversário, ganhou 1 ano.", fotoUrl: aniversarioImg },
    ],
    falaFinal: "Hora, dia, semana, mês, ano — do menor pro maior!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada escala.",
    instrucao: "Toque nas escalas",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: relogioImg,
    pontos: [
      { id: "hora", x: 20, y: 30, emoji: "🕐", cor: "from-cyan-400 to-sky-600", titulo: "Hora", texto: "Curta! 60 minutinhos. 1 hora de desenho passa rápido.", fotoUrl: relogioImg },
      { id: "dia", x: 40, y: 30, emoji: "🌞", cor: "from-yellow-400 to-orange-600", titulo: "Dia", texto: "24 horas. Um sono e a gente já está no próximo dia.", fotoUrl: ampulhetaImg },
      { id: "semana", x: 60, y: 30, emoji: "📅", cor: "from-emerald-400 to-green-700", titulo: "Semana", texto: "7 dias. Começa domingo e acaba no sábado.", fotoUrl: semanaImg },
      { id: "mes", x: 40, y: 70, emoji: "🗓️", cor: "from-purple-400 to-fuchsia-700", titulo: "Mês", texto: "~30 dias. Tem 12 meses no ano.", fotoUrl: mesImg },
      { id: "ano", x: 60, y: 70, emoji: "🎂", cor: "from-pink-400 to-rose-600", titulo: "Ano", texto: "12 meses. A cada 1 ano você ganha mais uma velinha no bolo!", fotoUrl: aniversarioImg },
    ],
    falaFinal: "Escalas encaixadas: hora dentro de dia, dia dentro de semana…",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Quantas horas tem um dia?", fotoUrl: relogioImg, cards: [{ id: "a", emoji: "24", titulo: "24 horas", cor: "from-yellow-400 to-orange-600" }, { id: "b", emoji: "12", titulo: "12 horas", cor: "from-emerald-400 to-green-700" }, { id: "c", emoji: "60", titulo: "60 horas", cor: "from-purple-400 to-fuchsia-700" }], correta: "a", feedbackAcerto: "24 horas — dia + noite!", feedbackErro: "12 é só o dia. Com a noite = 24." },
      { id: "q2", pergunta: "Quantos meses tem um ano?", fotoUrl: aniversarioImg, cards: [{ id: "a", emoji: "12", titulo: "12 meses", cor: "from-pink-400 to-rose-600" }, { id: "b", emoji: "7", titulo: "7 meses", cor: "from-emerald-400 to-green-700" }, { id: "c", emoji: "30", titulo: "30 meses", cor: "from-purple-400 to-fuchsia-700" }], correta: "a", feedbackAcerto: "12 meses — janeiro a dezembro!", feedbackErro: "Ano tem 12 meses." },
      { id: "q3", pergunta: "Quantos dias tem uma semana?", fotoUrl: semanaImg, cards: [{ id: "a", emoji: "7", titulo: "7 dias", cor: "from-emerald-400 to-green-700" }, { id: "b", emoji: "5", titulo: "5 dias", cor: "from-amber-400 to-orange-600" }, { id: "c", emoji: "30", titulo: "30 dias", cor: "from-purple-400 to-fuchsia-700" }], correta: "a", feedbackAcerto: "7 dias — de domingo a sábado!", feedbackErro: "Escola 5 + fim de semana 2 = 7 dias." },
    ],
    falaFinal: "Você conhece as escalas!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Tempo CURTO e tempo LONGO.",
    instrucao: "Toque nos interruptores",
    mapaUrl: relogioImg,
    camadas: [
      { id: "curto", rotulo: "Curto", emoji: "🕐", cor: "from-cyan-400 to-sky-600", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Hora e dia — passam rápido.", fotoUrl: relogioImg },
      { id: "longo", rotulo: "Longo", emoji: "🎂", cor: "from-pink-400 to-rose-600", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Mês e ano — demoram a passar.", fotoUrl: aniversarioImg },
    ],
    falaFinal: "Uns rápidos, outros demorados!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize do MENOR pro MAIOR.",
    instrucao: "Toque na ordem: menor → maior",
    pergunta: "Do menor tempo pro maior:",
    paradas: [
      { id: "hora", emoji: "🕐", rotulo: "1. Hora", descricao: "60 minutinhos.", fotoUrl: relogioImg },
      { id: "dia", emoji: "🌞", rotulo: "2. Dia", descricao: "24 horas.", fotoUrl: ampulhetaImg },
      { id: "semana", emoji: "📅", rotulo: "3. Semana", descricao: "7 dias.", fotoUrl: semanaImg },
      { id: "mes", emoji: "🗓️", rotulo: "4. Mês", descricao: "~30 dias.", fotoUrl: mesImg },
      { id: "ano", emoji: "🎂", rotulo: "5. Ano", descricao: "12 meses.", fotoUrl: aniversarioImg },
    ],
    ordemCerta: ["hora", "dia", "semana", "mes", "ano"],
    feedbackAcerto: "Escalas em ordem!",
    feedbackErro: "Hora é a menor, ano é a maior!",
    falaFinal: "Cada escala encaixa dentro da próxima!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Diário do Tempo.",
    tituloLivro: "📓 Diário do Tempo",
    subtitulo: "Página 5 — Medindo o tempo",
    paragrafos: [
      { id: "p1", texto: "O RELÓGIO mede HORAS e MINUTOS. Cada dia tem 24 HORAS — 12 de dia e 12 de noite. O RELÓGIO ajuda a saber a hora de acordar, comer e dormir.", chaves: ["relógio", "horas"], definicoes: { relógio: "Aparelho que mede o tempo em horas e minutos.", horas: "Pedaços do dia. Um dia tem 24 horas." }, fotoUrl: relogioImg },
      { id: "p2", texto: "O CALENDÁRIO mostra os DIAS da SEMANA e do MÊS. Uma semana tem 7 dias. Um mês tem cerca de 30 dias. Um ANO tem 12 meses.", chaves: ["calendário", "ano"], definicoes: { calendário: "Papel que mostra os dias e meses.", ano: "12 meses. Do seu aniversário até o próximo." }, fotoUrl: mesImg },
    ],
    falaFinal: "Tempo organizado em escalas!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cada rodada dá uma DURAÇÃO — qual escala?",
    instrucao: "⏱️ Qual escala?",
    duracaoSegundos: 15,
    pecas: [
      { id: "hora", emoji: "🕐", rotulo: "Hora" },
      { id: "dia", emoji: "🌞", rotulo: "Dia" },
      { id: "semana", emoji: "📅", rotulo: "Semana" },
      { id: "mes", emoji: "🗓️", rotulo: "Mês" },
      { id: "ano", emoji: "🎂", rotulo: "Ano" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "24 horas", emoji: "🌞", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Nascer ao nascer", emoji: "🌅", cor: "from-orange-400 to-red-600" }, contexto: "24 horas. De um amanhecer ao outro. É um…", pecaCertaId: "dia", fotoUrl: ampulhetaImg, feedbackAcerto: "DIA!", feedbackErro: "24 horas = 1 DIA." },
      { id: "r2", municipioA: { nome: "7 dias", emoji: "📅", cor: "from-emerald-400 to-green-700" }, municipioB: { nome: "Dom a sáb", emoji: "🔄", cor: "from-lime-400 to-emerald-700" }, contexto: "7 dias em seguida. É uma…", pecaCertaId: "semana", fotoUrl: semanaImg, feedbackAcerto: "SEMANA!", feedbackErro: "7 dias = SEMANA." },
      { id: "r3", municipioA: { nome: "12 meses", emoji: "🎂", cor: "from-pink-400 to-rose-600" }, municipioB: { nome: "Aniversário", emoji: "🎁", cor: "from-purple-400 to-fuchsia-700" }, contexto: "12 meses inteiros. De aniversário a aniversário. É um…", pecaCertaId: "ano", fotoUrl: aniversarioImg, feedbackAcerto: "ANO!", feedbackErro: "12 meses = 1 ANO." },
    ],
    falaFinal: "Você domina as escalas!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Semana: 5 dias de escola + 2 de descanso.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: semanaImg,
    fatias: [
      { id: "escola", rotulo: "Dias de escola", emoji: "🏫", percentual: 50, cor: "#3b82f6", descricao: "Segunda a sexta — 5 dias.", exemplos: ["Segunda", "Sexta"], fotoUrl: semanaImg },
      { id: "fim", rotulo: "Fim de semana", emoji: "🎮", percentual: 50, cor: "#f59e0b", descricao: "Sábado e domingo — pra descansar e brincar.", exemplos: ["Sábado", "Domingo"], fotoUrl: aniversarioImg },
    ],
    falaFinal: "Escola + descanso — semana equilibrada!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas.",
    instrucao: "3 perguntas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Quantas horas num dia?", fotoUrl: relogioImg, opcoes: [{ id: "a", texto: "24", correta: true }, { id: "b", texto: "12" }], feedbackAcerto: "Isso!", feedbackErro: "24 horas." },
      { id: "q2", pergunta: "Dias na semana:", fotoUrl: semanaImg, opcoes: [{ id: "a", texto: "7", correta: true }, { id: "b", texto: "5" }], feedbackAcerto: "Certo!", feedbackErro: "7 dias." },
      { id: "q3", pergunta: "Meses num ano:", fotoUrl: aniversarioImg, opcoes: [{ id: "a", texto: "12", correta: true }, { id: "b", texto: "7" }], feedbackAcerto: "PERFEITO!", feedbackErro: "12 meses." },
    ],
    selo: { nome: "Cristal do Tempo", subtitulo: "5º cristal desbloqueado!", emoji: "💎", cor: "from-cyan-400 via-purple-500 to-pink-600" },
    falaFinal: "Cristal do Tempo recuperado!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Guardião do Relógio" },
};
