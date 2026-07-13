import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import maosImg from "@/assets/ciencias-1ano/u3-a1/lavando-maos.jpg";
import dentesImg from "@/assets/ciencias-1ano/u3-a1/banho.jpg";
import banhoImg from "@/assets/ciencias-1ano/u3-a1/banho.jpg";
import cabeloImg from "@/assets/ciencias-1ano/u3-a1/penteando-cabelo.jpg";
import unhasImg from "@/assets/ciencias-1ano/u3-a1/unhas-cortadas.jpg";

/**
 * Ciências · 1º Ano · U3 · A01 — Higiene e Saúde (EF01CI03)
 * Cristal da Higiene.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-higiene",
  titulo: "Cuidando do Meu Corpo",
  iconeTrilha: "🧼",
  bncc: ["EF01CI03"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toque na tela pra começar!",
    mapaUrl: maosImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "O 3º cristal está numa PIA! Vamos aprender os cuidados que deixam nosso corpo SAUDÁVEL — sem germes, sem doenças!",
    falaFinal: "Higiene é super poder contra germes!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Depois de brincar no chão, o que a gente FAZ antes de comer?",
    pergunta: "O que fazer antes de comer?",
    fotoUrl: maosImg,
    opcoes: [
      { id: "nada", titulo: "Nada", subtitulo: "só comer", emoji: "🤷", cor: "from-slate-400 to-slate-700" },
      { id: "maos", titulo: "Lavar as mãos", subtitulo: "com sabão", emoji: "🧼", cor: "from-cyan-400 to-sky-600" },
      { id: "pente", titulo: "Pentear cabelo", subtitulo: "arrumar", emoji: "💇", cor: "from-pink-400 to-rose-600" },
    ],
    respostaCerta: "maos",
    feedbackAcerto: "Isso! LAVAR AS MÃOS tira os germes que grudam quando a gente brinca.",
    feedbackErro: "As mãos pegam sujeira e germes. Antes de comer, sempre LAVA!",
    falaFinal: "Mão limpa, comida segura!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "5 hábitos de higiene.",
    instrucao: "Cuidados essenciais",
    cadernos: [
      { id: "maos", capa: "LAVAR AS MÃOS", emoji: "🧼", cor: "from-cyan-400 to-sky-600", conteudo: "Antes de comer, depois do banheiro e depois de brincar.", exemplo: "Ex.: sabão + água por 20 segundos.", fotoUrl: maosImg },
      { id: "dentes", capa: "ESCOVAR OS DENTES", emoji: "🦷", cor: "from-purple-400 to-fuchsia-600", conteudo: "3 vezes por dia. Tira restos de comida e evita cárie.", exemplo: "Ex.: manhã, depois do almoço e antes de dormir.", fotoUrl: dentesImg },
      { id: "banho", capa: "BANHO", emoji: "🚿", cor: "from-sky-400 to-blue-600", conteudo: "Todos os dias. Tira suor, sujeira e cheiro ruim.", exemplo: "Ex.: sabonete no corpo todo.", fotoUrl: banhoImg },
      { id: "cabelo", capa: "PENTEAR", emoji: "💇", cor: "from-pink-400 to-rose-600", conteudo: "Deixa o cabelo arrumado e evita nós.", exemplo: "Ex.: usar pente ou escova.", fotoUrl: cabeloImg },
      { id: "unhas", capa: "CORTAR UNHAS", emoji: "💅", cor: "from-amber-400 to-orange-600", conteudo: "Unha grande junta sujeira. Cortar mantém as mãos limpas.", exemplo: "Ex.: 1 vez por semana, com ajuda de um adulto.", fotoUrl: unhasImg },
    ],
    falaFinal: "5 hábitos = corpo saudável!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada cuidado.",
    instrucao: "Toque nos cuidados",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: maosImg,
    pontos: [
      { id: "maos", x: 20, y: 30, emoji: "🧼", cor: "from-cyan-400 to-sky-600", titulo: "Lavar as mãos", texto: "Antes de comer e depois do banheiro. Água + sabão!", fotoUrl: maosImg },
      { id: "dentes", x: 40, y: 30, emoji: "🦷", cor: "from-purple-400 to-fuchsia-600", titulo: "Escovar os dentes", texto: "3 vezes ao dia pra evitar cárie.", fotoUrl: dentesImg },
      { id: "banho", x: 60, y: 30, emoji: "🚿", cor: "from-sky-400 to-blue-600", titulo: "Banho", texto: "Tira suor, sujeira e cheiro ruim do corpo.", fotoUrl: banhoImg },
      { id: "cabelo", x: 40, y: 70, emoji: "💇", cor: "from-pink-400 to-rose-600", titulo: "Pentear", texto: "Deixa o cabelo bonito e sem nós.", fotoUrl: cabeloImg },
      { id: "unhas", x: 60, y: 70, emoji: "💅", cor: "from-amber-400 to-orange-600", titulo: "Cortar unhas", texto: "Uma vez por semana. Evita sujeira embaixo da unha.", fotoUrl: unhasImg },
    ],
    falaFinal: "Cada cuidado protege uma parte!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Quantas vezes por dia escovar os dentes?", fotoUrl: dentesImg, cards: [{ id: "a", emoji: "3️⃣", titulo: "3 vezes", cor: "from-purple-400 to-fuchsia-600" }, { id: "b", emoji: "1️⃣", titulo: "1 vez", cor: "from-slate-400 to-slate-700" }, { id: "c", emoji: "0️⃣", titulo: "Nenhuma", cor: "from-red-400 to-rose-700" }], correta: "a", feedbackAcerto: "3 vezes: manhã, almoço e noite!", feedbackErro: "Menos que 3 vezes deixa cárie aparecer." },
      { id: "q2", pergunta: "Antes de comer, sempre:", fotoUrl: maosImg, cards: [{ id: "a", emoji: "🧼", titulo: "Lavar as mãos", cor: "from-cyan-400 to-sky-600" }, { id: "b", emoji: "🍔", titulo: "Comer direto", cor: "from-red-400 to-rose-700" }, { id: "c", emoji: "💤", titulo: "Dormir", cor: "from-indigo-400 to-purple-700" }], correta: "a", feedbackAcerto: "Isso! LAVAR AS MÃOS.", feedbackErro: "Comer com mão suja leva germes pra dentro." },
      { id: "q3", pergunta: "Quantos banhos por dia?", fotoUrl: banhoImg, cards: [{ id: "a", emoji: "1️⃣", titulo: "1 por dia", cor: "from-sky-400 to-blue-600" }, { id: "b", emoji: "0️⃣", titulo: "Nenhum", cor: "from-red-400 to-rose-700" }, { id: "c", emoji: "🔟", titulo: "10 por dia", cor: "from-purple-400 to-fuchsia-600" }], correta: "a", feedbackAcerto: "1 banho por dia — todos os dias!", feedbackErro: "O certo é 1 banho por dia." },
    ],
    falaFinal: "Já sabe se cuidar!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Cuidados de DENTRO e de FORA.",
    instrucao: "Toque nos interruptores",
    mapaUrl: maosImg,
    camadas: [
      { id: "dentro", rotulo: "Por dentro", emoji: "🦷", cor: "from-purple-400 to-fuchsia-600", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Escovar os dentes cuida da BOCA por dentro." },
      { id: "fora", rotulo: "Por fora", emoji: "🧼", cor: "from-cyan-400 to-sky-600", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Banho, mãos, cabelo e unhas cuidam do corpo por FORA." },
    ],
    falaFinal: "Dentro + fora = tudo limpo!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "A ordem certa antes de dormir.",
    instrucao: "Toque na ordem certa",
    pergunta: "Antes de dormir, na ordem:",
    paradas: [
      { id: "banho", emoji: "🚿", rotulo: "1. Banho", descricao: "Tira sujeira do dia.", fotoUrl: banhoImg },
      { id: "pijama", emoji: "👕", rotulo: "2. Pijama", descricao: "Roupa limpa pra dormir.", fotoUrl: cabeloImg },
      { id: "dentes", emoji: "🦷", rotulo: "3. Escovar dentes", descricao: "Tira restos do jantar.", fotoUrl: dentesImg },
      { id: "dormir", emoji: "💤", rotulo: "4. Dormir", descricao: "Corpo descansa.", fotoUrl: banhoImg },
    ],
    ordemCerta: ["banho", "pijama", "dentes", "dormir"],
    feedbackAcerto: "Rotina de sono perfeita!",
    feedbackErro: "Banho antes, dormir por último!",
    falaFinal: "Rotina de higiene à noite!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Diário da Higiene.",
    tituloLivro: "📓 Diário da Higiene",
    subtitulo: "Página 3 — Cuidados diários",
    paragrafos: [
      { id: "p1", texto: "LAVAR AS MÃOS com água e SABÃO é o cuidado mais importante. Faz antes de comer, depois de brincar e depois do banheiro. Tira os GERMES que a gente não vê.", chaves: ["sabão", "germes"], definicoes: { sabão: "Produto que ajuda a tirar sujeira e germes.", germes: "Bichinhos tão pequenos que ninguém vê — podem deixar doente." }, fotoUrl: maosImg },
      { id: "p2", texto: "ESCOVAR OS DENTES 3 vezes por dia evita a CÁRIE. E o BANHO todos os dias tira o suor e o cheiro que o corpo faz.", chaves: ["cárie", "suor"], definicoes: { cárie: "Buraco no dente causado por restos de comida.", suor: "Água que sai do corpo quando ele esquenta." }, fotoUrl: dentesImg },
    ],
    falaFinal: "Higiene é rotina, não é castigo!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cada rodada mostra um momento — qual cuidado?",
    instrucao: "⏱️ Qual cuidado?",
    duracaoSegundos: 15,
    pecas: [
      { id: "maos", emoji: "🧼", rotulo: "Lavar mãos" },
      { id: "dentes", emoji: "🦷", rotulo: "Escovar dentes" },
      { id: "banho", emoji: "🚿", rotulo: "Banho" },
      { id: "unhas", emoji: "💅", rotulo: "Cortar unhas" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Antes do almoço", emoji: "🍽️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Voltando do parque", emoji: "🌳", cor: "from-emerald-400 to-green-700" }, contexto: "Voltando do parque com mão suja, antes de comer, você…", pecaCertaId: "maos", fotoUrl: maosImg, feedbackAcerto: "LAVA AS MÃOS!", feedbackErro: "Sempre LAVA as mãos antes de comer." },
      { id: "r2", municipioA: { nome: "Depois do jantar", emoji: "🌙", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Antes de dormir", emoji: "💤", cor: "from-indigo-400 to-purple-700" }, contexto: "Comeu doce e vai dormir. O que fazer?", pecaCertaId: "dentes", fotoUrl: dentesImg, feedbackAcerto: "ESCOVAR OS DENTES!", feedbackErro: "Nunca dormir sem ESCOVAR os dentes." },
      { id: "r3", municipioA: { nome: "Suado", emoji: "💦", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Cheiro ruim", emoji: "😰", cor: "from-slate-400 to-slate-700" }, contexto: "Passou o dia inteiro brincando. Está suado. Precisa de…", pecaCertaId: "banho", fotoUrl: banhoImg, feedbackAcerto: "BANHO!", feedbackErro: "Suor tira só com BANHO." },
    ],
    falaFinal: "Você sabe cada cuidado!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Metade dos cuidados é TODO DIA. Metade é DE VEZ EM QUANDO.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: maosImg,
    fatias: [
      { id: "dia", rotulo: "Todo dia", emoji: "🌞", percentual: 50, cor: "#22c55e", descricao: "Banho, escovar dentes, lavar mãos.", exemplos: ["Banho", "Dentes", "Mãos"], fotoUrl: banhoImg },
      { id: "semana", rotulo: "Semana", emoji: "📅", percentual: 50, cor: "#a855f7", descricao: "Cortar unhas e lavar cabelo — não é todo dia.", exemplos: ["Unhas", "Cabelo"], fotoUrl: unhasImg },
    ],
    falaFinal: "Cada cuidado no seu tempo!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas.",
    instrucao: "3 perguntas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Antes de comer:", fotoUrl: maosImg, opcoes: [{ id: "a", texto: "Lavar as mãos", correta: true }, { id: "b", texto: "Nada" }], feedbackAcerto: "Isso!", feedbackErro: "SEMPRE lavar as mãos." },
      { id: "q2", pergunta: "Banho é:", fotoUrl: banhoImg, opcoes: [{ id: "a", texto: "Todo dia", correta: true }, { id: "b", texto: "Uma vez por mês" }], feedbackAcerto: "Certo!", feedbackErro: "1 banho por DIA." },
      { id: "q3", pergunta: "Escovar dentes:", fotoUrl: dentesImg, opcoes: [{ id: "a", texto: "3 vezes ao dia", correta: true }, { id: "b", texto: "1 vez por semana" }], feedbackAcerto: "PERFEITO!", feedbackErro: "3 vezes ao DIA." },
    ],
    selo: { nome: "Cristal da Higiene", subtitulo: "3º cristal desbloqueado!", emoji: "💎", cor: "from-cyan-400 via-sky-500 to-blue-700" },
    falaFinal: "Cristal da Higiene recuperado!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Guardião da Saúde" },
};
