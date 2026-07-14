import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png.asset.json";
import { url as cozinhaImg } from "@/assets/ciencias-2ano/u3-a1/cozinha-segura.jpg.asset.json";
import { url as kitImg } from "@/assets/ciencias-2ano/u3-a1/kit-socorros.jpg.asset.json";
import { url as mapaCam_u3_perigosImg } from "@/assets/ciencias-2ano/mapa-camadas/u3-perigos.jpg.asset.json";
import { url as mapaCam_u3_protecaoImg } from "@/assets/ciencias-2ano/mapa-camadas/u3-protecao.jpg.asset.json";

/**
 * Ciências · 2º Ano · Unidade 3 · Aula 01
 * "Casa Segura" — EF02CI03 · Cristal da Segurança
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-seguranca",
  titulo: "Casa Segura: cuidados no dia a dia",
  iconeTrilha: "🛡️",
  bncc: ["EF02CI03"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pela cozinha. Encontre os lugares de PERIGO.",
    mapaUrl: cozinhaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Brilha, o 3º cristal está na casa. Mas atenção: existem coisas do dia a dia que precisam de CUIDADO — faca, fogão, tomada, remédio, produto de limpeza.",
    falaFinal:
      "Ser cientista também é aprender a se PROTEGER. Vamos ver os cuidados!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Se você achar um remédio no chão, o que você faz?",
    pergunta: "Onde é o LUGAR CERTO de guardar remédio?",
    fotoUrl: cozinhaImg,
    opcoes: [
      { id: "chao", titulo: "No chão", subtitulo: "junto dos brinquedos", emoji: "🧸", cor: "from-pink-400 to-rose-600" },
      { id: "alto", titulo: "Armário alto", subtitulo: "longe das crianças", emoji: "🔒", cor: "from-emerald-400 to-green-700" },
      { id: "bolsa", titulo: "Na mochila", subtitulo: "pra levar na escola", emoji: "🎒", cor: "from-orange-400 to-amber-600" },
    ],
    respostaCerta: "alto",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! Remédio fica em armário ALTO e FECHADO, longe de crianças pequenas.",
    feedbackErro: "Remédio no chão ou na mochila é PERIGO. O lugar certo é armário alto e fechado.",
    falaFinal: "Remédio só se toma com um adulto responsável. Nunca sozinho!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Abra cada caderno pra conhecer 4 cuidados da casa.",
    instrucao: "As 4 zonas de cuidado",
    cadernos: [
      { id: "cortante", capa: "CORTANTE", emoji: "🔪", cor: "from-slate-400 to-slate-700", conteudo: "Faca, tesoura e vidro quebrado CORTAM. Só um adulto pega.", exemplo: "Ex.: pedir ajuda pra cortar a fruta.", fotoUrl: cozinhaImg },
      { id: "quente", capa: "QUENTE", emoji: "🔥", cor: "from-red-400 to-orange-700", conteudo: "Fogão, panela e água fervendo QUEIMAM. Fica longe!", exemplo: "Ex.: não brincar perto do fogão aceso.", fotoUrl: cozinhaImg },
      { id: "eletrico", capa: "ELÉTRICO", emoji: "⚡", cor: "from-yellow-400 to-amber-600", conteudo: "Tomada tem eletricidade. Nunca enfia dedo ou objeto dentro.", exemplo: "Ex.: pedir o adulto pra ligar aparelhos.", fotoUrl: cozinhaImg },
      { id: "veneno", capa: "REMÉDIO / VENENO", emoji: "💊", cor: "from-purple-500 to-fuchsia-700", conteudo: "Remédios e produtos de limpeza podem envenenar. Não são bala!", exemplo: "Ex.: nunca cheirar ou provar produto de limpeza.", fotoUrl: kitImg },
    ],
    falaFinal: "Cortante, quente, elétrico e veneno. As 4 zonas que pedem CUIDADO!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada ponto da cozinha pra ouvir o cuidado certo.",
    instrucao: "Toque em cada perigo",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: cozinhaImg,
    pontos: [
      { id: "faca", x: 30, y: 45, emoji: "🔪", cor: "from-slate-400 to-slate-700", titulo: "Faca", texto: "Objeto CORTANTE. Só o adulto usa. Nunca correr com faca na mão.", fotoUrl: cozinhaImg },
      { id: "fogao", x: 25, y: 60, emoji: "🔥", cor: "from-red-400 to-orange-600", titulo: "Fogão", texto: "Fica MUITO quente. Não brincar perto e não subir na pia ao lado.", fotoUrl: cozinhaImg },
      { id: "tomada", x: 45, y: 30, emoji: "⚡", cor: "from-yellow-400 to-amber-600", titulo: "Tomada", texto: "Tem ELETRICIDADE. Precisa de protetor infantil. Nunca enfiar dedo!", fotoUrl: cozinhaImg },
      { id: "limpeza", x: 75, y: 50, emoji: "🧴", cor: "from-purple-500 to-fuchsia-700", titulo: "Produtos de limpeza", texto: "Guardar em cima e trancado. Não são refrigerante — envenenam!", fotoUrl: cozinhaImg },
      { id: "kit", x: 78, y: 78, emoji: "🩹", cor: "from-red-500 to-rose-700", titulo: "Kit de socorros", texto: "Toda casa deve ter um: bandagem, gaze, termômetro pra cuidar de machucados.", fotoUrl: kitImg },
    ],
    falaFinal: "Cozinha é o lugar de mais cuidado da casa. Um cientista sempre olha antes de tocar!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de segurança. Presta atenção!",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1", pergunta: "Achei um remédio colorido no chão. O que faço?",
        fotoUrl: kitImg,
        cards: [
          { id: "a", emoji: "🍬", titulo: "Como se fosse bala", cor: "from-pink-400 to-rose-600" },
          { id: "b", emoji: "🙋", titulo: "Aviso um adulto", cor: "from-emerald-400 to-green-600" },
          { id: "c", emoji: "🎒", titulo: "Guardo pra depois", cor: "from-orange-400 to-amber-600" },
        ],
        correta: "b",
        feedbackAcerto: "PERFEITO! Sempre chamar um adulto — remédio NÃO é bala.",
        feedbackErro: "Remédio pode ENVENENAR. Sempre avisar um adulto!",
      },
      {
        id: "q2", pergunta: "A panela está no fogo. Posso encostar?",
        fotoUrl: cozinhaImg,
        cards: [
          { id: "a", emoji: "🔥", titulo: "Não, queima", cor: "from-red-400 to-orange-600" },
          { id: "b", emoji: "🤏", titulo: "Só de leve", cor: "from-yellow-400 to-amber-500" },
          { id: "c", emoji: "🤷", titulo: "Depende", cor: "from-slate-400 to-slate-600" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Panela no fogo QUEIMA. Fica longe.",
        feedbackErro: "Panela no fogo esquenta MUITO. Nunca encostar!",
      },
      {
        id: "q3", pergunta: "Posso enfiar um clipe na tomada?",
        fotoUrl: cozinhaImg,
        cards: [
          { id: "a", emoji: "⚡", titulo: "Não, leva choque", cor: "from-yellow-400 to-amber-600" },
          { id: "b", emoji: "🧪", titulo: "Sim, pra testar", cor: "from-purple-400 to-fuchsia-600" },
          { id: "c", emoji: "🤞", titulo: "Só se der certo", cor: "from-slate-400 to-slate-600" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Tomada = ELETRICIDADE. Nunca enfiar nada!",
        feedbackErro: "Tomada dá CHOQUE. Nunca enfiar objeto nenhum.",
      },
    ],
    falaFinal: "Você já sabe reconhecer os perigos da casa!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores: um mostra ZONAS DE CUIDADO, outro o que ajuda a PROTEGER.",
    instrucao: "Toque nos interruptores",
    mapaUrl: cozinhaImg,
    camadas: [
      { id: "perigos", rotulo: "Zonas de cuidado", emoji: "⚠️", cor: "from-red-500 to-orange-700", rect: { x: 5, y: 20, w: 60, h: 60 }, descricao: "Fogão, faca e tomada precisam de atenção redobrada.", fotoUrl: mapaCam_u3_perigosImg },
      { id: "protecao", rotulo: "Proteção", emoji: "🛡️", cor: "from-emerald-500 to-green-700", rect: { x: 65, y: 20, w: 30, h: 70 }, descricao: "Armário fechado, protetor de tomada e kit de socorros ajudam a evitar acidentes.", fotoUrl: mapaCam_u3_protecaoImg },
    ],
    falaFinal: "Toda casa tem cuidados + proteções. Juntos, evitam acidentes!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos montar o passo a passo do que fazer se um amiguinho se machucar?",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "O que fazer se alguém se machucar?",
    paradas: [
      { id: "manter", emoji: "🧘", rotulo: "1. Manter a calma", descricao: "Nada de gritar ou correr — respire fundo.", fotoUrl: brilhaImg },
      { id: "adulto", emoji: "🙋", rotulo: "2. Chamar adulto", descricao: "Avisar rapidamente um adulto responsável.", fotoUrl: cozinhaImg },
      { id: "kit", emoji: "🩹", rotulo: "3. Kit de socorros", descricao: "O adulto pega o kit com bandagem e gaze.", fotoUrl: kitImg },
      { id: "medico", emoji: "🏥", rotulo: "4. Médico se preciso", descricao: "Se for grande, adulto leva ao posto de saúde.", fotoUrl: kitImg },
    ],
    ordemCerta: ["manter", "adulto", "kit", "medico"],
    feedbackAcerto: "Perfeito! Calma → adulto → kit → médico. Nessa ordem!",
    feedbackErro: "Antes de qualquer coisa, é preciso a CALMA. O que vem depois?",
    falaFinal: "Todo cientista mantém a calma e sabe pedir ajuda!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Diário da Segurança.",
    tituloLivro: "📓 Diário da Segurança",
    subtitulo: "Página 3 — Cuidados em casa",
    paragrafos: [
      { id: "p1", texto: "Objetos CORTANTES (faca, tesoura, vidro quebrado) só são usados por adultos. Peça pra cortar a fruta pra você.", chaves: ["cortantes"], definicoes: { cortantes: "Objetos que podem cortar a pele: faca, tesoura, vidro quebrado." }, fotoUrl: cozinhaImg },
      { id: "p2", texto: "ELETRICIDADE mora nas tomadas e nos fios. Nunca enfie objeto na tomada. Se um fio estiver descascado, avise um adulto na hora.", chaves: ["eletricidade", "tomadas"], definicoes: { eletricidade: "Energia que faz aparelhos funcionarem — dá choque se tocada errado.", tomadas: "Buracos na parede por onde a eletricidade sai pros aparelhos." }, fotoUrl: cozinhaImg },
      { id: "p3", texto: "Produtos de limpeza e remédios ficam SEMPRE em armários altos e fechados. Nunca provar, cheirar ou brincar com eles.", chaves: ["remédios"], definicoes: { remédios: "Substâncias que curam com dose certa — mas envenenam em quantidade errada." }, fotoUrl: kitImg },
    ],
    falaFinal: "Leu tudo! Você já é um cientista da segurança!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado! Cada rodada mostra uma situação — escolha o CUIDADO certo!",
    instrucao: "⏱️ Leia a situação e escolha o cuidado!",
    duracaoSegundos: 15,
    pecas: [
      { id: "adulto", emoji: "🙋", rotulo: "Chamar adulto" },
      { id: "afastar", emoji: "🚫", rotulo: "Ficar longe" },
      { id: "protetor", emoji: "🔒", rotulo: "Usar proteção" },
      { id: "guardar", emoji: "📦", rotulo: "Guardar alto" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Faca na mesa", emoji: "🔪", cor: "from-slate-400 to-slate-700" }, municipioB: { nome: "Achar objeto cortante", emoji: "✂️", cor: "from-slate-500 to-slate-800" }, contexto: "Você viu uma faca em cima da mesa. O que fazer?", pecaCertaId: "adulto", fotoUrl: cozinhaImg, feedbackAcerto: "Isso! Faca é adulto. Chame alguém.", feedbackErro: "Nunca pegar faca sozinho. CHAME um adulto." },
      { id: "r2", municipioA: { nome: "Panela fervendo", emoji: "🍲", cor: "from-red-500 to-orange-700" }, municipioB: { nome: "Fogão aceso", emoji: "🔥", cor: "from-red-400 to-orange-600" }, contexto: "A panela está fervendo no fogão. O que você faz?", pecaCertaId: "afastar", fotoUrl: cozinhaImg, feedbackAcerto: "Perfeito! Fica LONGE, não brinca perto.", feedbackErro: "Queima MUITO. Fica LONGE do fogão." },
      { id: "r3", municipioA: { nome: "Tomada solta", emoji: "⚡", cor: "from-yellow-400 to-amber-600" }, municipioB: { nome: "Irmão bebê", emoji: "👶", cor: "from-pink-400 to-rose-600" }, contexto: "Seu irmãozinho engatinhando perto da tomada. O que colocar?", pecaCertaId: "protetor", fotoUrl: cozinhaImg, feedbackAcerto: "Isso! Protetor de tomada bloqueia o buraco.", feedbackErro: "Precisa de PROTETOR pra fechar a tomada." },
      { id: "r4", municipioA: { nome: "Remédio no chão", emoji: "💊", cor: "from-purple-500 to-fuchsia-700" }, municipioB: { nome: "Xarope na mesa", emoji: "🥤", cor: "from-orange-400 to-red-600" }, contexto: "Onde deve ficar o remédio pra ninguém pequeno alcançar?", pecaCertaId: "guardar", fotoUrl: kitImg, feedbackAcerto: "Combo! Armário ALTO e fechado.", feedbackErro: "Remédio NÃO fica ao alcance. Guardar em armário alto." },
    ],
    falaFinal: "Você reconhece o cuidado certo pra cada situação!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Segurança tem duas metades: EVITAR o acidente e RESPONDER se acontecer.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: cozinhaImg,
    fatias: [
      { id: "evitar", rotulo: "Evitar", emoji: "🛡️", percentual: 50, cor: "#22c55e", descricao: "Guardar bem, usar protetor, ficar longe do fogo — evita o acidente ANTES dele acontecer.", exemplos: ["Protetor de tomada", "Faca no armário", "Longe do fogão"], fotoUrl: cozinhaImg },
      { id: "responder", rotulo: "Responder", emoji: "🩹", percentual: 50, cor: "#a855f7", descricao: "Se algo acontecer: calma, adulto e kit de socorros — responder rápido evita piorar.", exemplos: ["Chamar adulto", "Usar kit", "Ir ao posto"], fotoUrl: kitImg },
    ],
    falaFinal: "Evitar + responder = casa mais segura!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Últimas 3 perguntas pra ganhar o Cristal da Segurança!",
    instrucao: "Responda 3 perguntas rápidas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Achei remédio no chão. O que faço?", fotoUrl: kitImg, opcoes: [{ id: "a", texto: "Aviso um adulto", correta: true }, { id: "b", texto: "Como como bala" }], feedbackAcerto: "Perfeito! Adulto.", feedbackErro: "Remédio NÃO é bala. AVISE o adulto." },
      { id: "q2", pergunta: "Posso encostar na panela quente?", fotoUrl: cozinhaImg, opcoes: [{ id: "a", texto: "Não, queima", correta: true }, { id: "b", texto: "Sim, rapidinho" }], feedbackAcerto: "Isso! Queima.", feedbackErro: "Sempre queima. NUNCA encostar!" },
      { id: "q3", pergunta: "Onde ficam os produtos de limpeza?", fotoUrl: cozinhaImg, opcoes: [{ id: "a", texto: "Armário alto e fechado", correta: true }, { id: "b", texto: "No chão" }], feedbackAcerto: "PERFEITO!", feedbackErro: "No chão é PERIGO. Sempre ALTO e fechado." },
    ],
    selo: { nome: "Cristal da Segurança", subtitulo: "3º cristal desbloqueado!", emoji: "💎", cor: "from-red-400 via-orange-500 to-yellow-500" },
    falaFinal: "Você recuperou o Cristal da Segurança! Sua casa está mais protegida!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Guardião da Casa" },
};
