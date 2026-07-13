import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import corpoImg from "@/assets/ciencias-1ano/u2-a1/corpo-inteiro.jpg";
import cabecaImg from "@/assets/ciencias-1ano/u2-a1/cabeca-rosto.jpg";
import maosImg from "@/assets/ciencias-1ano/u2-a1/maos-dedos.jpg";
import pernasImg from "@/assets/ciencias-1ano/u2-a1/pernas-pes.jpg";
import bracosImg from "@/assets/ciencias-1ano/u2-a1/bracos.jpg";

/**
 * Ciências · 1º Ano · U2 · A01 — Meu Corpo (EF01CI02)
 * Cristal do Corpo.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-corpo",
  titulo: "As Partes do Meu Corpo",
  iconeTrilha: "🧍",
  bncc: ["EF01CI02"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toque na tela pra começar!",
    mapaUrl: corpoImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "O 2º cristal ficou perdido dentro de VOCÊ! Vamos conhecer as partes do corpo — cabeça, braços, mãos, pernas, pés!",
    falaFinal: "Seu corpo é uma máquina incrível!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Onde ficam os OLHOS, o NARIZ e a BOCA?",
    pergunta: "Onde ficam os olhos, nariz e boca?",
    fotoUrl: cabecaImg,
    opcoes: [
      { id: "cabeca", titulo: "Na cabeça", subtitulo: "no rosto", emoji: "😊", cor: "from-pink-400 to-rose-600" },
      { id: "mao", titulo: "Nas mãos", subtitulo: "nos dedos", emoji: "✋", cor: "from-amber-400 to-orange-600" },
      { id: "pe", titulo: "Nos pés", subtitulo: "embaixo", emoji: "🦶", cor: "from-emerald-400 to-green-700" },
    ],
    respostaCerta: "cabeca",
    feedbackAcerto: "Isso! Olhos, nariz e boca ficam no ROSTO — que fica na CABEÇA.",
    feedbackErro: "Mãos têm dedos, pés têm dedos… mas rosto só na CABEÇA.",
    falaFinal: "Cada parte tem lugar certo!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As 5 partes principais.",
    instrucao: "As partes do corpo",
    cadernos: [
      { id: "cabeca", capa: "CABEÇA", emoji: "🙂", cor: "from-pink-400 to-rose-600", conteudo: "Onde ficam olhos, ouvidos, nariz e boca. O cérebro fica dentro!", exemplo: "Ex.: você usa a cabeça pra pensar e sentir.", fotoUrl: cabecaImg },
      { id: "tronco", capa: "TRONCO", emoji: "🫁", cor: "from-orange-400 to-red-600", conteudo: "Peito e barriga. Guarda coração, pulmões e estômago.", exemplo: "Ex.: quando você respira, é o tronco que mexe.", fotoUrl: corpoImg },
      { id: "bracos", capa: "BRAÇOS", emoji: "💪", cor: "from-amber-500 to-orange-700", conteudo: "Servem pra abraçar, carregar e escrever.", exemplo: "Ex.: 2 braços, um de cada lado.", fotoUrl: bracosImg },
      { id: "maos", capa: "MÃOS", emoji: "✋", cor: "from-yellow-400 to-amber-600", conteudo: "Ficam na ponta dos braços. Cada mão tem 5 dedos.", exemplo: "Ex.: você pega tudo com as mãos.", fotoUrl: maosImg },
      { id: "pernas", capa: "PERNAS", emoji: "🦵", cor: "from-emerald-500 to-green-700", conteudo: "Servem pra andar, correr e pular. Terminam nos pés.", exemplo: "Ex.: 2 pernas, cada uma com um pé.", fotoUrl: pernasImg },
    ],
    falaFinal: "Cabeça, tronco, braços, mãos, pernas!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada parte do corpo.",
    instrucao: "Toque nas partes",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: corpoImg,
    pontos: [
      { id: "cabeca", x: 50, y: 15, emoji: "🙂", cor: "from-pink-400 to-rose-600", titulo: "Cabeça", texto: "Rosto, cérebro, olhos, orelhas. É o comando do corpo!", fotoUrl: cabecaImg },
      { id: "tronco", x: 50, y: 45, emoji: "🫁", cor: "from-orange-400 to-red-600", titulo: "Tronco", texto: "Peito e barriga. Guarda o coração e o estômago.", fotoUrl: corpoImg },
      { id: "bracos", x: 25, y: 45, emoji: "💪", cor: "from-amber-500 to-orange-700", titulo: "Braços", texto: "2 braços — pra abraçar, escrever e brincar.", fotoUrl: bracosImg },
      { id: "maos", x: 15, y: 65, emoji: "✋", cor: "from-yellow-400 to-amber-600", titulo: "Mãos", texto: "Cada mão tem 5 dedos. Servem pra pegar e sentir.", fotoUrl: maosImg },
      { id: "pernas", x: 50, y: 85, emoji: "🦵", cor: "from-emerald-500 to-green-700", titulo: "Pernas e pés", texto: "Levam você de um lugar pro outro.", fotoUrl: pernasImg },
    ],
    falaFinal: "Cada parte com um trabalho!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Você pensa com:", fotoUrl: cabecaImg, cards: [{ id: "a", emoji: "🧠", titulo: "A cabeça", cor: "from-pink-400 to-rose-600" }, { id: "b", emoji: "🦶", titulo: "O pé", cor: "from-emerald-400 to-green-700" }, { id: "c", emoji: "✋", titulo: "A mão", cor: "from-yellow-400 to-amber-600" }], correta: "a", feedbackAcerto: "CABEÇA — o cérebro fica lá!", feedbackErro: "O cérebro fica na CABEÇA." },
      { id: "q2", pergunta: "Você anda com:", fotoUrl: pernasImg, cards: [{ id: "a", emoji: "🦵", titulo: "As pernas", cor: "from-emerald-500 to-green-700" }, { id: "b", emoji: "💪", titulo: "Os braços", cor: "from-amber-500 to-orange-700" }, { id: "c", emoji: "🙂", titulo: "A cabeça", cor: "from-pink-400 to-rose-600" }], correta: "a", feedbackAcerto: "Isso! PERNAS te levam pra todo lado.", feedbackErro: "Braços abraçam. Quem anda são as PERNAS." },
      { id: "q3", pergunta: "Quantos dedos tem em uma mão?", fotoUrl: maosImg, cards: [{ id: "a", emoji: "5️⃣", titulo: "5 dedos", cor: "from-yellow-400 to-amber-600" }, { id: "b", emoji: "3️⃣", titulo: "3 dedos", cor: "from-slate-400 to-slate-700" }, { id: "c", emoji: "🔟", titulo: "10 dedos", cor: "from-purple-400 to-fuchsia-600" }], correta: "a", feedbackAcerto: "5 dedos! (2 mãos = 10 dedos)", feedbackErro: "Conta na sua mão: são 5!" },
    ],
    falaFinal: "Já é anatomista mirim!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Partes de CIMA e partes de BAIXO.",
    instrucao: "Toque nos interruptores",
    mapaUrl: corpoImg,
    camadas: [
      { id: "cima", rotulo: "De cima", emoji: "🙂", cor: "from-pink-400 to-rose-600", rect: { x: 20, y: 5, w: 60, h: 45 }, descricao: "Cabeça, braços e tronco — pra pensar, abraçar e respirar.", fotoUrl: cabecaImg },
      { id: "baixo", rotulo: "De baixo", emoji: "🦵", cor: "from-emerald-500 to-green-700", rect: { x: 25, y: 55, w: 50, h: 40 }, descricao: "Pernas e pés — pra andar, correr e pular.", fotoUrl: pernasImg },
    ],
    falaFinal: "Corpo dividido em partes que cooperam!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize o corpo de CIMA pra BAIXO.",
    instrucao: "Toque na ordem: cima → baixo",
    pergunta: "Ordem do corpo:",
    paradas: [
      { id: "cabeca", emoji: "🙂", rotulo: "1. Cabeça", descricao: "Bem no alto.", fotoUrl: cabecaImg },
      { id: "tronco", emoji: "🫁", rotulo: "2. Tronco", descricao: "No meio.", fotoUrl: corpoImg },
      { id: "pernas", emoji: "🦵", rotulo: "3. Pernas", descricao: "Descem até o chão.", fotoUrl: pernasImg },
      { id: "pes", emoji: "🦶", rotulo: "4. Pés", descricao: "Tocam o chão.", fotoUrl: pernasImg },
    ],
    ordemCerta: ["cabeca", "tronco", "pernas", "pes"],
    feedbackAcerto: "De cima pra baixo — corpo montado!",
    feedbackErro: "Cabeça em cima, pé embaixo!",
    falaFinal: "Todo corpo humano segue essa ordem!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Diário do Corpo.",
    tituloLivro: "📓 Diário do Corpo",
    subtitulo: "Página 2 — Partes do corpo",
    paragrafos: [
      { id: "p1", texto: "A CABEÇA fica em cima. Nela ficam olhos, orelhas, nariz e boca. Dentro dela está o CÉREBRO, que pensa e comanda tudo.", chaves: ["cabeça", "cérebro"], definicoes: { cabeça: "Parte de cima do corpo.", cérebro: "Órgão que fica dentro da cabeça e comanda tudo." }, fotoUrl: cabecaImg },
      { id: "p2", texto: "O TRONCO fica no meio. Guarda o CORAÇÃO e os PULMÕES. Os BRAÇOS saem dos lados do tronco e terminam nas MÃOS.", chaves: ["tronco", "coração"], definicoes: { tronco: "Peito e barriga.", coração: "Órgão que bate e joga sangue pro corpo." }, fotoUrl: corpoImg },
      { id: "p3", texto: "As PERNAS ficam embaixo. Cada perna termina em um PÉ. Andar, correr e pular só é possível por causa das pernas.", chaves: ["pernas", "pés"], definicoes: { pernas: "Partes de baixo do corpo, servem pra andar.", pés: "Ficam na ponta das pernas, tocam o chão." }, fotoUrl: pernasImg },
    ],
    falaFinal: "Corpo estudado!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cada rodada diz uma AÇÃO — qual parte do corpo?",
    instrucao: "⏱️ Qual parte?",
    duracaoSegundos: 15,
    pecas: [
      { id: "cabeca", emoji: "🙂", rotulo: "Cabeça" },
      { id: "bracos", emoji: "💪", rotulo: "Braços" },
      { id: "maos", emoji: "✋", rotulo: "Mãos" },
      { id: "pernas", emoji: "🦵", rotulo: "Pernas" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Pensar", emoji: "🧠", cor: "from-pink-400 to-rose-600" }, municipioB: { nome: "Ver", emoji: "👀", cor: "from-cyan-400 to-sky-600" }, contexto: "Pra pensar e enxergar, você usa a…", pecaCertaId: "cabeca", fotoUrl: cabecaImg, feedbackAcerto: "CABEÇA!", feedbackErro: "Cérebro e olhos ficam na CABEÇA." },
      { id: "r2", municipioA: { nome: "Andar", emoji: "🚶", cor: "from-emerald-500 to-green-700" }, municipioB: { nome: "Correr", emoji: "🏃", cor: "from-lime-400 to-emerald-700" }, contexto: "Pra andar e correr você usa as…", pecaCertaId: "pernas", fotoUrl: pernasImg, feedbackAcerto: "PERNAS!", feedbackErro: "As PERNAS te levam pra todo lado." },
      { id: "r3", municipioA: { nome: "Pegar", emoji: "🖐️", cor: "from-yellow-400 to-amber-600" }, municipioB: { nome: "Escrever", emoji: "✏️", cor: "from-amber-500 to-orange-700" }, contexto: "Pra pegar e escrever, você usa as…", pecaCertaId: "maos", fotoUrl: maosImg, feedbackAcerto: "MÃOS!", feedbackErro: "As MÃOS pegam tudo." },
    ],
    falaFinal: "Cada parte tem seu papel!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Metade do corpo é pra PENSAR e SENTIR, metade é pra MEXER.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: corpoImg,
    fatias: [
      { id: "sentir", rotulo: "Sentir/Pensar", emoji: "🧠", percentual: 50, cor: "#ec4899", descricao: "Cabeça e tronco — pensar, ver, ouvir, respirar.", exemplos: ["Cabeça", "Tronco"], fotoUrl: cabecaImg },
      { id: "mexer", rotulo: "Mexer", emoji: "💪", percentual: 50, cor: "#22c55e", descricao: "Braços, mãos, pernas e pés — pegar, andar, correr.", exemplos: ["Braços", "Pernas"], fotoUrl: pernasImg },
    ],
    falaFinal: "Pensar + mexer = corpo funcionando!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "3 perguntas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Você pensa com a:", fotoUrl: cabecaImg, opcoes: [{ id: "a", texto: "Cabeça", correta: true }, { id: "b", texto: "Perna" }], feedbackAcerto: "Isso!", feedbackErro: "É a CABEÇA." },
      { id: "q2", pergunta: "Anda com as:", fotoUrl: pernasImg, opcoes: [{ id: "a", texto: "Pernas", correta: true }, { id: "b", texto: "Mãos" }], feedbackAcerto: "Certo!", feedbackErro: "São as PERNAS." },
      { id: "q3", pergunta: "Cada mão tem quantos dedos?", fotoUrl: maosImg, opcoes: [{ id: "a", texto: "5", correta: true }, { id: "b", texto: "10" }], feedbackAcerto: "PERFEITO!", feedbackErro: "São 5 dedos por mão." },
    ],
    selo: { nome: "Cristal do Corpo", subtitulo: "2º cristal desbloqueado!", emoji: "💎", cor: "from-pink-400 via-rose-500 to-red-600" },
    falaFinal: "Cristal do Corpo recuperado!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Anatomista Iniciante" },
};
