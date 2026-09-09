import type { AulaGeoV1 } from "../../types";
import { url as eternidade } from "@/assets/ensino-religioso-5ano/u3-eternidade.jpg.asset.json";
import { url as ancestrais } from "@/assets/ensino-religioso-5ano/u3-ancestrais.jpg.asset.json";
import { url as diversidade } from "@/assets/ensino-religioso-5ano/01-diversidade.jpg.asset.json";
import { url as indigena } from "@/assets/ensino-religioso-5ano/05-indigena.jpg.asset.json";
import { url as afro } from "@/assets/ensino-religioso-5ano/06-afro-brasileira.jpg.asset.json";

/**
 * Ensino Religioso · 5º Ano · Unidade 3 · Aula 01
 * "Ideias de Eternidade nas Tradições" — EF05ER03
 *
 * NÃO CONFESSIONAL. Tratamento respeitoso e sem morbidez sobre como
 * diferentes tradições pensam a continuidade da vida.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-ideias-de-eternidade",
  titulo: "O que Continua Depois?",
  iconeTrilha: "🌅",
  bncc: ["EF05ER03"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: o sol se pondo. Ele desaparece — ou só muda de lugar?",
    mapaUrl: eternidade,
    imagemDestaqueUrl: eternidade,
    aurora:
      "Explorador, olha o pôr do sol. Ele some no horizonte, mas todo mundo sabe que amanhã volta. Muita gente pergunta: e nós? O que acontece com quem a gente amou depois que se vai? Cada tradição tem sua resposta bonita pra esse mistério.",
    falaFinal:
      "Nesta aula, vamos conhecer com respeito como diferentes tradições pensam a ETERNIDADE — o que continua.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: quase todas as tradições religiosas pensam sobre o que acontece depois desta vida?",
    pergunta: "Quase todas pensam nisso?",
    opcoes: [
      { id: "sim", titulo: "SIM — quase todas", subtitulo: "cada uma do seu jeito", emoji: "🌅", cor: "from-amber-400 to-orange-600" },
      { id: "nao", titulo: "Não, poucas", subtitulo: "só duas ou três", emoji: "🚫", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "sim",
    feedbackAcerto: "Isso! É uma das perguntas mais antigas da humanidade. Todo povo tenta responder.",
    feedbackErro: "Na verdade, quase toda tradição religiosa tenta responder. É pergunta universal.",
    falaFinal: "Pergunta velha, respostas diversas. Bora ver.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras pra falar disso com cuidado.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "eternidade", capa: "1. Eternidade", emoji: "♾️", cor: "from-amber-500 to-orange-700", conteudo: "ETERNIDADE é a ideia de algo que NÃO tem fim. Cada tradição imagina isso de um jeito diferente: pode ser lugar, tempo sem fim, ciclo que se repete ou memória viva.", exemplo: "Ex.: 'a estrela continua brilhando muito depois de acender'.", fotoUrl: eternidade },
      { id: "ancestrais", capa: "2. Ancestrais", emoji: "🌳", cor: "from-emerald-500 to-green-700", conteudo: "ANCESTRAIS são as pessoas que vieram ANTES na nossa família ou povo. Muitas tradições ensinam que os ancestrais continuam presentes de alguma forma — na memória, nos gestos, na sabedoria.", exemplo: "Ex.: sua bisavó que você não conheceu, mas cuja receita continua na mesa.", fotoUrl: ancestrais },
      { id: "respeito", capa: "3. Respeito ao mistério", emoji: "🕊️", cor: "from-sky-500 to-blue-700", conteudo: "Existem coisas que ninguém pode PROVAR. Diante do mistério, cada tradição oferece uma resposta com esperança. Respeitar significa não zombar de nenhuma delas.", exemplo: "Ex.: aceitar que a vizinha acredita numa coisa e você em outra." },
    ],
    falaFinal: "Eternidade, ancestrais, respeito. Três chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 tradições, 4 ideias bonitas sobre o que CONTINUA. Toque em cada balão.",
    instrucao: "Toque em cada balão",
    mapaUrl: eternidade,
    pontos: [
      { id: "crista", x: 25, y: 30, emoji: "☁️", cor: "from-sky-500 to-blue-700", titulo: "TRADIÇÃO CRISTÃ", texto: "Muitos cristãos acreditam que existe uma VIDA ETERNA junto de Deus, um lugar de paz e encontro com quem já se foi. Chamam de céu, de reino, de casa do Pai.", fotoUrl: diversidade },
      { id: "indigena", x: 70, y: 30, emoji: "🌳", cor: "from-emerald-500 to-green-700", titulo: "TRADIÇÕES INDÍGENAS", texto: "Vários povos indígenas ensinam que os ANCESTRAIS continuam na natureza — nas árvores antigas, nos rios, no vento. Cuidar da floresta é cuidar deles.", fotoUrl: indigena },
      { id: "afro", x: 30, y: 70, emoji: "🥁", cor: "from-red-500 to-rose-700", titulo: "TRADIÇÕES AFRO-BRASILEIRAS", texto: "No candomblé e na umbanda, os ancestrais (eguns, pretos-velhos) são LEMBRADOS e cultuados com respeito. Os orixás são forças eternas que cuidam da vida.", fotoUrl: afro },
      { id: "budista", x: 75, y: 68, emoji: "☸️", cor: "from-amber-500 to-orange-700", titulo: "TRADIÇÃO BUDISTA", texto: "Muitos budistas pensam a eternidade como um CICLO: nascemos, vivemos, partimos e voltamos, até alcançar a paz completa chamada Nirvana. É outra imagem, cheia de sabedoria.", fotoUrl: ancestrais },
    ],
    falaFinal: "Quatro imagens bonitas, todas cheias de esperança e respeito ao mistério.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Nas tradições indígenas, os ancestrais continuam presentes principalmente:", fotoUrl: indigena, cards: [{ id: "nat", emoji: "🌳", titulo: "Na natureza", cor: "from-emerald-500 to-green-700" }, { id: "livro", emoji: "📖", titulo: "Só em livros", cor: "from-amber-500 to-orange-700" }, { id: "esquec", emoji: "🚪", titulo: "Esquecidos", cor: "from-slate-400 to-gray-600" }], correta: "nat", feedbackAcerto: "Isso! Nas árvores antigas, nos rios, no vento.", feedbackErro: "Nas tradições indígenas, ancestrais vivem na NATUREZA — não em livros nem esquecidos." },
      { id: "q2", pergunta: "Nas tradições budistas, a eternidade é entendida como:", fotoUrl: eternidade, cards: [{ id: "ciclo", emoji: "🔄", titulo: "Um ciclo até o Nirvana", cor: "from-amber-500 to-orange-700" }, { id: "fim", emoji: "🚫", titulo: "Fim absoluto", cor: "from-slate-400 to-gray-600" }, { id: "prova", emoji: "🔬", titulo: "Fato científico", cor: "from-sky-500 to-blue-700" }], correta: "ciclo", feedbackAcerto: "Perfeito! Um ciclo que caminha até a paz completa (Nirvana).", feedbackErro: "Para o budismo, é um CICLO até alcançar o Nirvana." },
      { id: "q3", pergunta: "Como devemos tratar quem pensa a eternidade de outro jeito?", fotoUrl: diversidade, cards: [{ id: "resp", emoji: "🤝", titulo: "Com respeito ao mistério", cor: "from-emerald-500 to-green-700" }, { id: "riso", emoji: "😂", titulo: "Rir da crença dela", cor: "from-red-500 to-rose-700" }, { id: "conv", emoji: "🔄", titulo: "Tentar convencer", cor: "from-slate-400 to-gray-600" }], correta: "resp", feedbackAcerto: "Isso! Diante do mistério, todos merecem respeito.", feedbackErro: "Nada de rir nem forçar. RESPEITO é o único jeito diante do mistério." },
    ],
    falaFinal: "Radar limpo. Você lida com o assunto com cuidado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados brasileiros onde as tradições sobre ancestrais são bem visíveis (indígenas, afros, populares).",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["AM", "PA", "MA", "BA", "MG"], pergunta: "Quais 5 estados têm forte presença de tradições ancestrais indígenas ou afro-brasileiras?" },
    falaFinal: "Amazonas e Pará (indígenas), Maranhão (Bumba, Tambor de Mina), Bahia (candomblé), Minas (congados). Ancestralidade viva.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene: como a MEMÓRIA de um ancestral se mantém viva numa família?",
    instrucao: "Toque na ordem correta",
    pergunta: "Como a memória se mantém?",
    paradas: [
      { id: "hist", emoji: "🗣️", rotulo: "1. HISTÓRIAS contadas", descricao: "Os mais velhos contam quem essa pessoa foi, o que amava, o que ensinou." },
      { id: "obj", emoji: "🎁", rotulo: "2. OBJETOS guardados", descricao: "Fotos, receitas, um instrumento, uma peça de roupa — coisas que ela usava." },
      { id: "gestos", emoji: "🤲", rotulo: "3. GESTOS repetidos", descricao: "Um jeito de rir, uma comida no domingo, um cumprimento — que a família herdou." },
      { id: "data", emoji: "📅", rotulo: "4. DATAS lembradas", descricao: "Aniversários, reuniões, momentos especiais pra homenagear." },
      { id: "viva", emoji: "🌱", rotulo: "5. MEMÓRIA VIVA", descricao: "As crianças crescem conhecendo essa pessoa mesmo sem tê-la visto." },
    ],
    ordemCerta: ["hist", "obj", "gestos", "data", "viva"],
    feedbackAcerto: "Isso! Histórias, objetos, gestos, datas — memória viva.",
    feedbackErro: "Começa com HISTÓRIAS, guarda OBJETOS, repete GESTOS, lembra DATAS, mantém MEMÓRIA VIVA.",
    falaFinal: "Ancestrais se mantêm vivos pelo cuidado de quem fica.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Explorador de Tradições",
    subtitulo: "Página 3 — Ideias de Eternidade",
    paragrafos: [
      { id: "p1", texto: "ETERNIDADE é a ideia de algo que NÃO tem fim. É uma das perguntas mais antigas da humanidade e cada tradição responde à sua maneira.", chaves: ["eternidade", "fim"] },
      { id: "p2", texto: "Cristãos falam em vida eterna com Deus. Indígenas falam em ancestrais vivendo na natureza. Afro-brasileiros cultuam eguns e orixás. Budistas falam em ciclos até o Nirvana.", chaves: ["cristãos", "indígenas", "afro", "budistas"] },
      { id: "p3", texto: "Ancestrais são as pessoas que vieram ANTES. Guardar histórias, objetos, gestos e datas mantém viva a memória de quem amamos, em qualquer tradição.", chaves: ["ancestrais", "memória"] },
      { id: "p4", texto: "Diante do mistério da eternidade, ninguém tem toda a razão. Respeitar significa não zombar de nenhuma tradição, escutar com atenção e reconhecer a sabedoria em cada uma.", chaves: ["mistério", "respeito"] },
    ],
    falaFinal: "Leu com cuidado? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo GUARDIÃO DA MEMÓRIA! Ligue cada IMAGEM da eternidade à tradição certa.",
    instrucao: "⏱️ Qual tradição usa essa imagem?",
    duracaoSegundos: 12,
    pecas: [
      { id: "crista", emoji: "☁️", rotulo: "Cristã" },
      { id: "indigena", emoji: "🪶", rotulo: "Indígena" },
      { id: "afro", emoji: "🥁", rotulo: "Afro-brasileira" },
      { id: "budista", emoji: "☸️", rotulo: "Budista" },
      { id: "judaica", emoji: "🕎", rotulo: "Judaica" },
      { id: "islamica", emoji: "🌙", rotulo: "Islâmica" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Vida eterna com Deus", emoji: "☁️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Céu, reino, casa do Pai", emoji: "🕊️", cor: "from-indigo-400 to-blue-700" }, contexto: "Encontro definitivo com o divino após esta vida.", pecaCertaId: "crista", feedbackAcerto: "Isso! Tradição cristã.", feedbackErro: "É a tradição CRISTÃ: vida eterna junto de Deus." },
      { id: "r2", municipioA: { nome: "Ancestrais na floresta", emoji: "🌳", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Sabedoria dos antigos na natureza", emoji: "🪶", cor: "from-teal-400 to-green-700" }, contexto: "Continuidade dos antepassados nos elementos naturais.", pecaCertaId: "indigena", feedbackAcerto: "Perfeito! Tradições indígenas.", feedbackErro: "É INDÍGENA: ancestrais vivem nas árvores, rios e ventos." },
      { id: "r3", municipioA: { nome: "Eguns e orixás", emoji: "🥁", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Culto aos pretos-velhos", emoji: "🕯️", cor: "from-amber-400 to-orange-600" }, contexto: "Ancestralidade viva com atabaques e respeito.", pecaCertaId: "afro", feedbackAcerto: "Isso! Tradições afro-brasileiras.", feedbackErro: "É AFRO-BRASILEIRA: eguns, orixás e pretos-velhos são honrados." },
      { id: "r4", municipioA: { nome: "Ciclo até o Nirvana", emoji: "☸️", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Retorno até a paz completa", emoji: "🌸", cor: "from-orange-400 to-red-600" }, contexto: "Sequência de vidas rumo à liberação.", pecaCertaId: "budista", feedbackAcerto: "Perfeito! Tradição budista.", feedbackErro: "É BUDISTA: ciclo de vidas até alcançar o Nirvana." },
      { id: "r5", municipioA: { nome: "Memória do povo", emoji: "🕎", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Aliança que atravessa gerações", emoji: "📜", cor: "from-indigo-400 to-blue-700" }, contexto: "Continuidade sagrada pela linhagem e pelo pacto.", pecaCertaId: "judaica", feedbackAcerto: "Isso! Tradição judaica.", feedbackErro: "É JUDAICA: memória e aliança que atravessam gerações." },
      { id: "r6", municipioA: { nome: "Jannah (jardim)", emoji: "🌙", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Encontro com Allah", emoji: "🕌", cor: "from-teal-400 to-emerald-600" }, contexto: "Lugar de paz mencionado no Alcorão.", pecaCertaId: "islamica", feedbackAcerto: "Perfeito! Tradição islâmica.", feedbackErro: "É ISLÂMICA: o jardim (Jannah) e o encontro com Allah." },
    ],
    falaFinal: "6 imagens reconhecidas com respeito.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: 2 formas gerais de imaginar a eternidade.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "linear", rotulo: "Visão LINEAR (~55%)", emoji: "➡️", percentual: 55, cor: "#3b82f6", descricao: "Uma vida, depois um destino final: cristãos, muçulmanos, judeus imaginam eternidade como continuidade única.", exemplos: ["☁️ Vida eterna", "🌙 Jannah", "🕎 Olam Habá"] },
      { id: "ciclica", rotulo: "Visão CÍCLICA (~45%)", emoji: "🔄", percentual: 45, cor: "#f59e0b", descricao: "Ciclos que se repetem: budistas, hindus, várias tradições indígenas e afro imaginam eternidade como retorno e transformação.", exemplos: ["☸️ Nirvana", "🌳 Ancestralidade viva", "🥁 Retorno dos eguns"] },
    ],
    falaFinal: "Duas grandes formas, muitas variações. Todas com sabedoria.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Quase todas as tradições religiosas pensam a eternidade?", opcoes: [{ id: "a", texto: "Sim, cada uma do seu jeito", correta: true }, { id: "b", texto: "Não, só duas ou três", correta: false }, { id: "c", texto: "Só as recentes", correta: false }], feedbackAcerto: "Isso! É pergunta universal da humanidade.", feedbackErro: "Quase todas pensam nisso — é uma das perguntas mais antigas." },
      { id: "av2", pergunta: "Ancestrais nas tradições indígenas vivem principalmente:", opcoes: [{ id: "a", texto: "Em livros escritos", correta: false }, { id: "b", texto: "Na natureza — árvores, rios, ventos", correta: true }, { id: "c", texto: "Esquecidos", correta: false }], feedbackAcerto: "Perfeito! Cuidar da floresta é cuidar deles.", feedbackErro: "Nas tradições indígenas, ancestrais vivem NA NATUREZA." },
      { id: "av3", pergunta: "A postura correta diante de diferentes ideias sobre eternidade:", opcoes: [{ id: "a", texto: "Rir das que não são a minha", correta: false }, { id: "b", texto: "Respeitar, pois é mistério que ninguém prova", correta: true }, { id: "c", texto: "Provar qual é a certa", correta: false }], feedbackAcerto: "Isso! Diante do mistério, respeito.", feedbackErro: "Ninguém prova. RESPEITO é a única resposta madura." },
    ],
    selo: { nome: "Guardião da Memória", subtitulo: "Insígnia da Eternidade", emoji: "🌅", cor: "from-amber-400 to-orange-600" },
    falaFinal: "Insígnia conquistada! Você fala do mistério com o respeito que ele merece.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guardião da Memória" },
};
