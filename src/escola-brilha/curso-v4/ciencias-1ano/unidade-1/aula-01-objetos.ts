import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import madeiraImg from "@/assets/ciencias-1ano/u1-a1/brinquedos-madeira.jpg";
import vidroImg from "@/assets/ciencias-1ano/u1-a1/copo-vidro.jpg";
import metalImg from "@/assets/ciencias-1ano/u1-a1/panela-metal.jpg";
import tecidoImg from "@/assets/ciencias-1ano/u1-a1/roupa-tecido.jpg";
import plasticoImg from "@/assets/ciencias-1ano/u1-a1/garrafa-plastico.jpg";

/**
 * Ciências · 1º Ano · U1 · A01 — Objetos e Materiais (EF01CI01)
 * Cristal dos Materiais.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-objetos",
  titulo: "Do Que São Feitas as Coisas?",
  iconeTrilha: "🧸",
  bncc: ["EF01CI01"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toque na tela pra Brilha começar!",
    mapaUrl: madeiraImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "Brilha, o 1º cristal caiu numa caixa cheia de OBJETOS. Cada um é feito de um material diferente. Vamos descobrir!",
    falaFinal: "Tudo em volta da gente é feito de ALGUMA COISA. Vamos ver de quê!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Do que é feita uma PANELA?",
    pergunta: "Uma panela é feita de que material?",
    fotoUrl: metalImg,
    opcoes: [
      { id: "madeira", titulo: "Madeira", subtitulo: "de árvore", emoji: "🪵", cor: "from-amber-600 to-yellow-800" },
      { id: "metal", titulo: "Metal", subtitulo: "duro e brilhante", emoji: "🔩", cor: "from-slate-400 to-slate-700" },
      { id: "tecido", titulo: "Tecido", subtitulo: "mole", emoji: "🧵", cor: "from-pink-400 to-rose-600" },
    ],
    respostaCerta: "metal",
    feedbackAcerto: "Isso! Panela é de METAL — aguenta o fogo!",
    feedbackErro: "Madeira queima e tecido não segura água. Panela é de METAL.",
    falaFinal: "Cada material serve pra uma coisa!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Os 5 materiais principais.",
    instrucao: "Os materiais do nosso dia",
    cadernos: [
      { id: "madeira", capa: "MADEIRA", emoji: "🪵", cor: "from-amber-700 to-yellow-900", conteudo: "Vem das árvores. É dura mas leve.", exemplo: "Ex.: mesa, cadeira, lápis.", fotoUrl: madeiraImg },
      { id: "vidro", capa: "VIDRO", emoji: "🥃", cor: "from-cyan-300 to-sky-500", conteudo: "Transparente. Quebra se cai.", exemplo: "Ex.: copo, janela, óculos.", fotoUrl: vidroImg },
      { id: "metal", capa: "METAL", emoji: "🔩", cor: "from-slate-400 to-slate-700", conteudo: "Duro, brilhante, aguenta o fogo.", exemplo: "Ex.: panela, chave, moeda.", fotoUrl: metalImg },
      { id: "tecido", capa: "TECIDO", emoji: "🧵", cor: "from-pink-400 to-rose-600", conteudo: "Mole, quentinho, dobra fácil.", exemplo: "Ex.: camisa, cobertor, meia.", fotoUrl: tecidoImg },
      { id: "plastico", capa: "PLÁSTICO", emoji: "🧴", cor: "from-emerald-400 to-green-600", conteudo: "Leve, colorido, não quebra fácil.", exemplo: "Ex.: garrafa, brinquedo, régua.", fotoUrl: plasticoImg },
    ],
    falaFinal: "5 materiais que a gente vê todo dia!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada material pra ver um objeto.",
    instrucao: "Toque nos materiais",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: madeiraImg,
    pontos: [
      { id: "madeira", x: 20, y: 30, emoji: "🪵", cor: "from-amber-700 to-yellow-900", titulo: "Madeira", texto: "Vem da árvore. Serve pra brinquedos e móveis.", fotoUrl: madeiraImg },
      { id: "vidro", x: 40, y: 30, emoji: "🥃", cor: "from-cyan-300 to-sky-500", titulo: "Vidro", texto: "Transparente. Quebra se cai. Usado em copo e janela.", fotoUrl: vidroImg },
      { id: "metal", x: 60, y: 30, emoji: "🔩", cor: "from-slate-400 to-slate-700", titulo: "Metal", texto: "Duro e aguenta o fogo. Usado em panela e chave.", fotoUrl: metalImg },
      { id: "tecido", x: 40, y: 70, emoji: "🧵", cor: "from-pink-400 to-rose-600", titulo: "Tecido", texto: "Mole e quentinho. Vira roupa e cobertor.", fotoUrl: tecidoImg },
      { id: "plastico", x: 60, y: 70, emoji: "🧴", cor: "from-emerald-400 to-green-600", titulo: "Plástico", texto: "Leve e colorido. Vira garrafa e brinquedo.", fotoUrl: plasticoImg },
    ],
    falaFinal: "Cada material tem seu jeito!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Um copo é feito de:", fotoUrl: vidroImg, cards: [{ id: "a", emoji: "🥃", titulo: "Vidro", cor: "from-cyan-300 to-sky-500" }, { id: "b", emoji: "🪵", titulo: "Madeira", cor: "from-amber-700 to-yellow-900" }, { id: "c", emoji: "🧵", titulo: "Tecido", cor: "from-pink-400 to-rose-600" }], correta: "a", feedbackAcerto: "Copo é de VIDRO — dá pra ver a água!", feedbackErro: "Vidro é transparente. Copo é VIDRO." },
      { id: "q2", pergunta: "Uma roupa é feita de:", fotoUrl: tecidoImg, cards: [{ id: "a", emoji: "🧵", titulo: "Tecido", cor: "from-pink-400 to-rose-600" }, { id: "b", emoji: "🔩", titulo: "Metal", cor: "from-slate-400 to-slate-700" }, { id: "c", emoji: "🥃", titulo: "Vidro", cor: "from-cyan-300 to-sky-500" }], correta: "a", feedbackAcerto: "Isso! Roupa é de TECIDO — mole e quentinho.", feedbackErro: "Metal e vidro são duros. Roupa é de TECIDO." },
      { id: "q3", pergunta: "Uma garrafa de refri é feita de:", fotoUrl: plasticoImg, cards: [{ id: "a", emoji: "🧴", titulo: "Plástico", cor: "from-emerald-400 to-green-600" }, { id: "b", emoji: "🪵", titulo: "Madeira", cor: "from-amber-700 to-yellow-900" }, { id: "c", emoji: "🧵", titulo: "Tecido", cor: "from-pink-400 to-rose-600" }], correta: "a", feedbackAcerto: "PLÁSTICO — leve e não quebra fácil!", feedbackErro: "Garrafa de refri é de PLÁSTICO." },
    ],
    falaFinal: "Já reconhece os materiais!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Materiais DUROS e materiais MOLES.",
    instrucao: "Toque nos interruptores",
    mapaUrl: metalImg,
    camadas: [
      { id: "duro", rotulo: "Duros", emoji: "🔩", cor: "from-slate-400 to-slate-700", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Madeira, vidro, metal, plástico — não amassam fácil." },
      { id: "mole", rotulo: "Moles", emoji: "🧵", cor: "from-pink-400 to-rose-600", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Tecido — dobra e é gostoso de vestir." },
    ],
    falaFinal: "Duro pra sustentar, mole pra abraçar!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize do mais LEVE pro mais PESADO.",
    instrucao: "Toque na ordem: leve → pesado",
    pergunta: "Do mais leve pro mais pesado:",
    paradas: [
      { id: "tecido", emoji: "🧵", rotulo: "1. Tecido", descricao: "Bem leve — flutua no ar.", fotoUrl: tecidoImg },
      { id: "plastico", emoji: "🧴", rotulo: "2. Plástico", descricao: "Leve mas mais firme.", fotoUrl: plasticoImg },
      { id: "madeira", emoji: "🪵", rotulo: "3. Madeira", descricao: "Já pesa mais.", fotoUrl: madeiraImg },
      { id: "metal", emoji: "🔩", rotulo: "4. Metal", descricao: "O mais pesado.", fotoUrl: metalImg },
    ],
    ordemCerta: ["tecido", "plastico", "madeira", "metal"],
    feedbackAcerto: "Do mais leve pro mais pesado!",
    feedbackErro: "Pensa: qual voa? Qual afunda?",
    falaFinal: "Peso muda de material pra material!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Seu Diário do Cientista.",
    tituloLivro: "📓 Diário do Cientista",
    subtitulo: "Página 1 — Materiais",
    paragrafos: [
      { id: "p1", texto: "Tudo em volta é feito de algum MATERIAL. Madeira vem da árvore. Vidro é transparente. Metal é duro e aguenta fogo.", chaves: ["material", "vidro", "metal"], definicoes: { material: "Do que uma coisa é feita.", vidro: "Material transparente que quebra.", metal: "Material duro e brilhante." }, fotoUrl: madeiraImg },
      { id: "p2", texto: "TECIDO é MOLE e serve pra roupa. PLÁSTICO é leve, colorido e vira garrafa e brinquedo.", chaves: ["tecido", "plástico"], definicoes: { tecido: "Material mole feito de fios.", plástico: "Material leve que não quebra fácil." }, fotoUrl: plasticoImg },
    ],
    falaFinal: "Você já é um pesquisador de materiais!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cada rodada mostra um objeto — qual material?",
    instrucao: "⏱️ Qual material?",
    duracaoSegundos: 15,
    pecas: [
      { id: "madeira", emoji: "🪵", rotulo: "Madeira" },
      { id: "vidro", emoji: "🥃", rotulo: "Vidro" },
      { id: "metal", emoji: "🔩", rotulo: "Metal" },
      { id: "tecido", emoji: "🧵", rotulo: "Tecido" },
      { id: "plastico", emoji: "🧴", rotulo: "Plástico" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Transparente", emoji: "✨", cor: "from-cyan-300 to-sky-500" }, municipioB: { nome: "Quebra fácil", emoji: "💥", cor: "from-slate-400 to-slate-700" }, contexto: "É transparente e pode quebrar. Que material é?", pecaCertaId: "vidro", fotoUrl: vidroImg, feedbackAcerto: "VIDRO!", feedbackErro: "Transparente + quebra = VIDRO." },
      { id: "r2", municipioA: { nome: "Mole", emoji: "☁️", cor: "from-pink-400 to-rose-600" }, municipioB: { nome: "Quentinho", emoji: "🔥", cor: "from-orange-400 to-red-600" }, contexto: "É mole e serve pra roupa. Que material?", pecaCertaId: "tecido", fotoUrl: tecidoImg, feedbackAcerto: "TECIDO!", feedbackErro: "Roupa é de TECIDO." },
      { id: "r3", municipioA: { nome: "Duro", emoji: "💪", cor: "from-slate-400 to-slate-700" }, municipioB: { nome: "Aguenta fogo", emoji: "🔥", cor: "from-orange-400 to-red-600" }, contexto: "Duro e aguenta o fogo do fogão. Que material?", pecaCertaId: "metal", fotoUrl: metalImg, feedbackAcerto: "METAL!", feedbackErro: "Só o METAL aguenta fogo." },
    ],
    falaFinal: "Já reconhece qualquer material!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Em casa: metade são materiais NATURAIS, metade FEITOS pelo homem.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: madeiraImg,
    fatias: [
      { id: "natural", rotulo: "Naturais", emoji: "🌳", percentual: 50, cor: "#22c55e", descricao: "Madeira e tecido de algodão vêm da natureza.", exemplos: ["Madeira", "Tecido"], fotoUrl: madeiraImg },
      { id: "feito", rotulo: "Feitos", emoji: "🏭", percentual: 50, cor: "#a855f7", descricao: "Vidro, metal e plástico são fabricados em usinas.", exemplos: ["Vidro", "Metal", "Plástico"], fotoUrl: plasticoImg },
    ],
    falaFinal: "Alguns a natureza dá, outros a gente fabrica!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas pra fechar o Cristal dos Materiais.",
    instrucao: "3 perguntas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Copo é feito de:", fotoUrl: vidroImg, opcoes: [{ id: "a", texto: "Vidro", correta: true }, { id: "b", texto: "Tecido" }], feedbackAcerto: "Isso!", feedbackErro: "É VIDRO." },
      { id: "q2", pergunta: "Panela é feita de:", fotoUrl: metalImg, opcoes: [{ id: "a", texto: "Metal", correta: true }, { id: "b", texto: "Madeira" }], feedbackAcerto: "Certo!", feedbackErro: "É METAL — aguenta fogo." },
      { id: "q3", pergunta: "Roupa é feita de:", fotoUrl: tecidoImg, opcoes: [{ id: "a", texto: "Tecido", correta: true }, { id: "b", texto: "Vidro" }], feedbackAcerto: "PERFEITO!", feedbackErro: "É TECIDO." },
    ],
    selo: { nome: "Cristal dos Materiais", subtitulo: "1º cristal desbloqueado!", emoji: "💎", cor: "from-slate-400 via-cyan-500 to-emerald-600" },
    falaFinal: "Você recuperou o Cristal dos Materiais!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Explorador de Materiais" },
};
