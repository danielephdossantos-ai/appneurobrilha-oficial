import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import manhaImg from "@/assets/ciencias-1ano/u6-a1/rotina-manha.jpg";
import escolaImg from "@/assets/ciencias-1ano/u6-a1/escola-dia.jpg";
import fimSemanaImg from "@/assets/ciencias-1ano/u6-a1/fim-de-semana.jpg";
import estacoesImg from "@/assets/ciencias-1ano/u6-a1/estacoes-ano.jpg";
import rotinaImg from "@/assets/ciencias-1ano/u6-a1/rotina-dia.jpg";

/**
 * Ciências · 1º Ano · U6 · A01 — Ritmos do Tempo (EF01CI05/EF01CI06)
 * Cristal dos Ritmos.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-ritmos-tempo",
  titulo: "Ritmos do Dia e do Ano",
  iconeTrilha: "🔄",
  bncc: ["EF01CI05", "EF01CI06"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toque na tela pra começar!",
    mapaUrl: rotinaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "O 6º cristal — o último! — está escondido nos RITMOS que se repetem: manhã depois de noite, semana depois de semana, ESTAÇÕES depois de estações!",
    falaFinal: "A natureza tem ritmo!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que acontece TODA MANHÃ na sua rotina?",
    pergunta: "Toda manhã, você:",
    fotoUrl: manhaImg,
    opcoes: [
      { id: "dormir", titulo: "Dormir", subtitulo: "continuar", emoji: "💤", cor: "from-indigo-400 to-purple-700" },
      { id: "acordar", titulo: "Acordar", subtitulo: "e ir à escola", emoji: "☀️", cor: "from-yellow-400 to-orange-600" },
      { id: "jantar", titulo: "Jantar", subtitulo: "comer", emoji: "🍽️", cor: "from-red-400 to-rose-700" },
    ],
    respostaCerta: "acordar",
    feedbackAcerto: "Isso! Toda manhã a gente ACORDA, toma café e vai pra escola.",
    feedbackErro: "De manhã é hora de ACORDAR. Dormir é de noite!",
    falaFinal: "Rotina se repete todo dia!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Ritmos que se repetem.",
    instrucao: "Ciclos que voltam",
    cadernos: [
      { id: "rotina", capa: "ROTINA DIÁRIA", emoji: "🔄", cor: "from-cyan-400 to-sky-600", conteudo: "Acordar, comer, estudar, brincar, dormir — TODO DIA.", exemplo: "Ex.: café de manhã, escola, almoço, brincar, jantar, dormir.", fotoUrl: rotinaImg },
      { id: "escola", capa: "DIAS DE ESCOLA", emoji: "🏫", cor: "from-blue-400 to-indigo-700", conteudo: "5 dias de escola por semana — de segunda a sexta.", exemplo: "Ex.: aula de manhã ou de tarde.", fotoUrl: escolaImg },
      { id: "fim", capa: "FIM DE SEMANA", emoji: "🎮", cor: "from-emerald-400 to-green-700", conteudo: "Sábado e domingo — descansar, brincar, ficar com a família.", exemplo: "Ex.: passear, ver desenho, brincar mais.", fotoUrl: fimSemanaImg },
      { id: "estacoes", capa: "ESTAÇÕES", emoji: "🍂", cor: "from-orange-400 to-red-600", conteudo: "4 partes do ano: primavera, verão, outono, inverno.", exemplo: "Ex.: verão é quente, inverno é frio.", fotoUrl: estacoesImg },
    ],
    falaFinal: "Rotinas curtas e longas se repetem sempre!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada ritmo.",
    instrucao: "Toque nos ritmos",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: rotinaImg,
    pontos: [
      { id: "manha", x: 20, y: 30, emoji: "🌅", cor: "from-yellow-400 to-orange-600", titulo: "Manhã", texto: "Sol nasce, você acorda, toma café e vai à escola.", fotoUrl: manhaImg },
      { id: "escola", x: 40, y: 30, emoji: "🏫", cor: "from-blue-400 to-indigo-700", titulo: "Dias de escola", texto: "5 dias por semana. Rotina de aprender junto com amigos.", fotoUrl: escolaImg },
      { id: "fim", x: 60, y: 30, emoji: "🎮", cor: "from-emerald-400 to-green-700", titulo: "Fim de semana", texto: "Descansar. Sábado e domingo pra brincar e curtir a família.", fotoUrl: fimSemanaImg },
      { id: "estacoes", x: 50, y: 75, emoji: "🍂", cor: "from-orange-400 to-red-600", titulo: "Estações do ano", texto: "4 ciclos: primavera, verão, outono, inverno. Repetem todo ano.", fotoUrl: estacoesImg },
    ],
    falaFinal: "Todo ritmo se repete!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "De manhã cedo:", fotoUrl: manhaImg, cards: [{ id: "a", emoji: "☀️", titulo: "Acordar", cor: "from-yellow-400 to-orange-600" }, { id: "b", emoji: "💤", titulo: "Dormir", cor: "from-indigo-400 to-purple-700" }, { id: "c", emoji: "🌙", titulo: "Ver lua", cor: "from-slate-700 to-indigo-900" }], correta: "a", feedbackAcerto: "ACORDAR — sol nasceu!", feedbackErro: "De manhã é hora de ACORDAR." },
      { id: "q2", pergunta: "Quando a gente vai à escola?", fotoUrl: escolaImg, cards: [{ id: "a", emoji: "📅", titulo: "Seg a sex", cor: "from-blue-400 to-indigo-700" }, { id: "b", emoji: "🎮", titulo: "Sáb e dom", cor: "from-emerald-400 to-green-700" }, { id: "c", emoji: "🎉", titulo: "Só ano novo", cor: "from-pink-400 to-rose-600" }], correta: "a", feedbackAcerto: "Segunda a sexta!", feedbackErro: "Escola tem 5 dias — seg a sex." },
      { id: "q3", pergunta: "Quantas estações do ano?", fotoUrl: estacoesImg, cards: [{ id: "a", emoji: "4️⃣", titulo: "4 estações", cor: "from-orange-400 to-red-600" }, { id: "b", emoji: "7️⃣", titulo: "7 estações", cor: "from-emerald-400 to-green-700" }, { id: "c", emoji: "1️⃣", titulo: "1 estação", cor: "from-slate-400 to-slate-700" }], correta: "a", feedbackAcerto: "4: primavera, verão, outono, inverno!", feedbackErro: "São 4 estações do ano." },
    ],
    falaFinal: "Você entende os ritmos!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Ritmo do DIA e ritmo do ANO.",
    instrucao: "Toque nos interruptores",
    mapaUrl: rotinaImg,
    camadas: [
      { id: "dia", rotulo: "Ritmo do dia", emoji: "🌞", cor: "from-yellow-400 to-orange-600", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Manhã → tarde → noite → sono. Se repete TODO DIA.", fotoUrl: manhaImg },
      { id: "ano", rotulo: "Ritmo do ano", emoji: "🍂", cor: "from-orange-400 to-red-600", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Primavera → verão → outono → inverno. Se repete TODO ANO.", fotoUrl: estacoesImg },
    ],
    falaFinal: "Ciclos curtos e longos convivem!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordem das estações do ano.",
    instrucao: "Toque na ordem certa",
    pergunta: "Estações na ordem:",
    paradas: [
      { id: "primavera", emoji: "🌸", rotulo: "1. Primavera", descricao: "Flores brotam.", fotoUrl: estacoesImg },
      { id: "verao", emoji: "☀️", rotulo: "2. Verão", descricao: "Bem quente.", fotoUrl: escolaImg },
      { id: "outono", emoji: "🍂", rotulo: "3. Outono", descricao: "Folhas caem.", fotoUrl: estacoesImg },
      { id: "inverno", emoji: "❄️", rotulo: "4. Inverno", descricao: "Frio.", fotoUrl: estacoesImg },
    ],
    ordemCerta: ["primavera", "verao", "outono", "inverno"],
    feedbackAcerto: "Ciclo do ano completo!",
    feedbackErro: "Primavera → verão → outono → inverno!",
    falaFinal: "As estações sempre voltam na mesma ordem!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Diário dos Ritmos.",
    tituloLivro: "📓 Diário dos Ritmos",
    subtitulo: "Página 6 — Ciclos do tempo",
    paragrafos: [
      { id: "p1", texto: "Nossa ROTINA se REPETE todo dia: acordar, comer, escola, brincar, dormir. Isso ajuda o corpo a saber a HORA de cada coisa.", chaves: ["rotina", "repete"], definicoes: { rotina: "Coisas que a gente faz sempre na mesma ordem.", repete: "Acontece de novo, várias vezes." }, fotoUrl: rotinaImg },
      { id: "p2", texto: "A SEMANA também se repete: 5 dias de escola e 2 de descanso. E o ANO tem 4 ESTAÇÕES — primavera, verão, outono e inverno — que voltam sempre.", chaves: ["semana", "estações"], definicoes: { semana: "7 dias em seguida.", estações: "4 partes do ano com clima diferente." }, fotoUrl: estacoesImg },
    ],
    falaFinal: "Tudo na natureza tem ciclo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cada rodada mostra uma cena — qual momento?",
    instrucao: "⏱️ Que momento?",
    duracaoSegundos: 15,
    pecas: [
      { id: "manha", emoji: "🌅", rotulo: "Manhã" },
      { id: "escola", emoji: "🏫", rotulo: "Escola" },
      { id: "fim", emoji: "🎮", rotulo: "Fim de semana" },
      { id: "estacoes", emoji: "🍂", rotulo: "Estações" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Café da manhã", emoji: "☕", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Escovar dentes", emoji: "🦷", cor: "from-cyan-400 to-sky-600" }, contexto: "Sol nasceu, criança tomando café. É:", pecaCertaId: "manha", fotoUrl: manhaImg, feedbackAcerto: "MANHÃ!", feedbackErro: "Café + sol nascendo = MANHÃ." },
      { id: "r2", municipioA: { nome: "Sábado", emoji: "🎮", cor: "from-emerald-400 to-green-700" }, municipioB: { nome: "Descanso", emoji: "🛋️", cor: "from-lime-400 to-emerald-700" }, contexto: "Sem escola. Família junta descansando. É:", pecaCertaId: "fim", fotoUrl: fimSemanaImg, feedbackAcerto: "FIM DE SEMANA!", feedbackErro: "Sem escola + família = FIM DE SEMANA." },
      { id: "r3", municipioA: { nome: "Folhas caem", emoji: "🍂", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Neve/frio", emoji: "❄️", cor: "from-cyan-400 to-blue-700" }, contexto: "Ao longo do ano, o clima muda. Isso é o ciclo das:", pecaCertaId: "estacoes", fotoUrl: estacoesImg, feedbackAcerto: "ESTAÇÕES!", feedbackErro: "Frio/calor no ano = ESTAÇÕES." },
    ],
    falaFinal: "Você entende cada ritmo!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Ano tem 4 estações — metade quente, metade fria.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: estacoesImg,
    fatias: [
      { id: "quente", rotulo: "Quentes", emoji: "☀️", percentual: 50, cor: "#f59e0b", descricao: "Primavera e verão — sol, calor, flores.", exemplos: ["Primavera", "Verão"], fotoUrl: escolaImg },
      { id: "fria", rotulo: "Frias", emoji: "❄️", percentual: 50, cor: "#0ea5e9", descricao: "Outono e inverno — folhas caem, faz frio.", exemplos: ["Outono", "Inverno"], fotoUrl: estacoesImg },
    ],
    falaFinal: "Ciclo do ano em duas metades!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais — último cristal!",
    instrucao: "3 perguntas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "De manhã a gente:", fotoUrl: manhaImg, opcoes: [{ id: "a", texto: "Acorda", correta: true }, { id: "b", texto: "Dorme" }], feedbackAcerto: "Isso!", feedbackErro: "De manhã ACORDA." },
      { id: "q2", pergunta: "Fim de semana:", fotoUrl: fimSemanaImg, opcoes: [{ id: "a", texto: "Sábado e domingo", correta: true }, { id: "b", texto: "Segunda e terça" }], feedbackAcerto: "Certo!", feedbackErro: "Sábado + domingo." },
      { id: "q3", pergunta: "Quantas estações:", fotoUrl: estacoesImg, opcoes: [{ id: "a", texto: "4", correta: true }, { id: "b", texto: "7" }], feedbackAcerto: "PERFEITO!", feedbackErro: "4 estações." },
    ],
    selo: { nome: "Cristal dos Ritmos", subtitulo: "6º cristal — última missão!", emoji: "💎", cor: "from-yellow-400 via-orange-500 to-red-700" },
    falaFinal: "TODOS os cristais recuperados! Missão Cientistas cumprida!",
  },

  recompensa: { xp: 120, moedas: 30, medalha: "Mestre dos Ciclos" },
};
