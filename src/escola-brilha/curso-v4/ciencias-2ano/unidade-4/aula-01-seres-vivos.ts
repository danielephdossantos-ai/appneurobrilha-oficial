import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import jardimImg from "@/assets/ciencias-2ano/u4-a1/jardim-quintal.jpg";
import borboletaImg from "@/assets/ciencias-2ano/u4-a1/borboleta-joaninha.jpg";

/**
 * Ciências · 2º Ano · Unidade 4 · Aula 01
 * "Plantas e Animais ao meu redor" — EF02CI04 · Cristal da Vida
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-seres-vivos",
  titulo: "Plantas e Animais ao meu redor",
  iconeTrilha: "🌿",
  bncc: ["EF02CI04"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pelo quintal. Quantos SERES VIVOS diferentes você encontra?",
    mapaUrl: jardimImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Brilha, o 4º cristal está escondido num jardim vivo! Aqui moram plantas, insetos e passarinhos. Todo ser vivo tem um AMBIENTE onde se dá bem.",
    falaFinal: "Cada bichinho e cada planta escolheu esse lugar por um motivo. Vamos descobrir!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Onde uma MINHOCA prefere morar?",
    pergunta: "Qual é o lugar preferido da minhoca?",
    fotoUrl: jardimImg,
    opcoes: [
      { id: "arvore", titulo: "Copa da árvore", subtitulo: "lá em cima", emoji: "🌳", cor: "from-emerald-400 to-green-700" },
      { id: "terra", titulo: "Debaixo da terra", subtitulo: "solo úmido", emoji: "🪱", cor: "from-amber-700 to-yellow-900" },
      { id: "agua", titulo: "Dentro do lago", subtitulo: "no meio da água", emoji: "🌊", cor: "from-cyan-400 to-sky-700" },
    ],
    respostaCerta: "terra",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! Minhoca vive na TERRA úmida — respira pela pele e afofa o solo.",
    feedbackErro: "Minhoca não sobe em árvore nem nada. O lugar dela é a TERRA úmida.",
    falaFinal: "Cada ser vivo tem seu AMBIENTE — o lugar certo pra ele viver bem.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Abra os cadernos: 4 características dos seres vivos.",
    instrucao: "As 4 marcas de um ser vivo",
    cadernos: [
      { id: "nasce", capa: "NASCE", emoji: "🥚", cor: "from-pink-400 to-rose-600", conteudo: "Todo ser vivo começa pequeno: semente, ovo ou filhote.", exemplo: "Ex.: a borboleta nasce de um ovo.", fotoUrl: borboletaImg },
      { id: "cresce", capa: "CRESCE", emoji: "📏", cor: "from-emerald-400 to-green-700", conteudo: "Aumenta de tamanho ao longo do tempo.", exemplo: "Ex.: a árvore era muda; hoje é grande.", fotoUrl: jardimImg },
      { id: "come", capa: "SE ALIMENTA", emoji: "🍎", cor: "from-orange-400 to-amber-600", conteudo: "Pega energia da comida, do sol ou da água.", exemplo: "Ex.: a joaninha come pequenos insetos.", fotoUrl: borboletaImg },
      { id: "reproduz", capa: "SE REPRODUZ", emoji: "🐣", cor: "from-purple-500 to-fuchsia-700", conteudo: "Gera novos seres vivos parecidos com ele.", exemplo: "Ex.: passarinho põe ovos que viram filhotes.", fotoUrl: jardimImg },
    ],
    falaFinal: "Nasce, cresce, se alimenta e se reproduz. Isso é ser VIVO!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada morador do quintal pra descobrir onde ele vive.",
    instrucao: "Toque em cada ser vivo",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: jardimImg,
    pontos: [
      { id: "arvore", x: 40, y: 40, emoji: "🌳", cor: "from-emerald-500 to-green-700", titulo: "Árvore", texto: "PLANTA grande. Dá sombra, frutos e casa pros pássaros.", fotoUrl: jardimImg },
      { id: "borboleta", x: 70, y: 30, emoji: "🦋", cor: "from-orange-400 to-pink-600", titulo: "Borboleta", texto: "INSETO. Vive nas flores, chupa o néctar e ajuda a polinizar.", fotoUrl: borboletaImg },
      { id: "joaninha", x: 15, y: 55, emoji: "🐞", cor: "from-red-500 to-rose-700", titulo: "Joaninha", texto: "INSETO. Anda nas folhas e come outros bichinhos que atacam a planta.", fotoUrl: borboletaImg },
      { id: "passaro", x: 60, y: 55, emoji: "🐦", cor: "from-cyan-400 to-sky-700", titulo: "Passarinho", texto: "AVE. Faz ninho na árvore, come frutinhas e insetos.", fotoUrl: jardimImg },
      { id: "flor", x: 20, y: 80, emoji: "🌸", cor: "from-pink-400 to-rose-600", titulo: "Flor", texto: "PLANTA. Atrai borboletas com o cheiro e a cor.", fotoUrl: jardimImg },
    ],
    falaFinal: "Cada ser vivo tem um papel no quintal — todos se ajudam!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Radar ligado! 3 perguntas sobre seres vivos.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual destes é um SER VIVO?", fotoUrl: jardimImg, cards: [{ id: "a", emoji: "🌳", titulo: "Árvore", cor: "from-emerald-400 to-green-700" }, { id: "b", emoji: "🪨", titulo: "Pedra", cor: "from-slate-400 to-slate-700" }, { id: "c", emoji: "🥤", titulo: "Copo", cor: "from-cyan-300 to-sky-600" }], correta: "a", feedbackAcerto: "Isso! Árvore NASCE, CRESCE e se REPRODUZ. Pedra e copo não!", feedbackErro: "Pedra e copo não nascem nem crescem. Ser vivo é a ÁRVORE." },
      { id: "q2", pergunta: "Onde a borboleta procura comida?", fotoUrl: borboletaImg, cards: [{ id: "a", emoji: "🌸", titulo: "Nas flores", cor: "from-pink-400 to-rose-600" }, { id: "b", emoji: "🪨", titulo: "Nas pedras", cor: "from-slate-400 to-slate-700" }, { id: "c", emoji: "💧", titulo: "Na água salgada", cor: "from-cyan-400 to-sky-700" }], correta: "a", feedbackAcerto: "Combo! Borboleta chupa o NÉCTAR das flores.", feedbackErro: "Borboleta não come pedra nem sal. É o NÉCTAR das flores!" },
      { id: "q3", pergunta: "O passarinho constrói o NINHO onde?", fotoUrl: jardimImg, cards: [{ id: "a", emoji: "🌳", titulo: "Na árvore", cor: "from-emerald-400 to-green-700" }, { id: "b", emoji: "🌊", titulo: "No fundo do rio", cor: "from-cyan-400 to-sky-700" }, { id: "c", emoji: "🕳️", titulo: "Num buraco de minhoca", cor: "from-amber-700 to-yellow-900" }], correta: "a", feedbackAcerto: "Certeza! Ninhos ficam bem altos na ÁRVORE — longe de predadores.", feedbackErro: "Passarinho respira ar e faz ninho ALTO. Na ÁRVORE!" },
    ],
    falaFinal: "Você já reconhece um ser vivo do não-vivo!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores: um mostra as PLANTAS, outro os ANIMAIS.",
    instrucao: "Toque nos interruptores",
    mapaUrl: jardimImg,
    camadas: [
      { id: "plantas", rotulo: "Plantas", emoji: "🌿", cor: "from-emerald-500 to-green-700", rect: { x: 5, y: 30, w: 55, h: 65 }, descricao: "Árvore, flor, mato e trepadeira. Plantas ficam paradas e fazem o próprio alimento com o sol." },
      { id: "animais", rotulo: "Animais", emoji: "🦋", cor: "from-orange-500 to-pink-700", rect: { x: 60, y: 20, w: 35, h: 70 }, descricao: "Borboleta, joaninha e passarinho. Animais se movem e procuram alimento." },
    ],
    falaFinal: "Plantas + animais = um jardim vivo!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos montar a vida da BORBOLETA em ordem?",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como a borboleta cresce?",
    paradas: [
      { id: "ovo", emoji: "🥚", rotulo: "1. Ovo", descricao: "A mãe borboleta põe ovinhos numa folha.", fotoUrl: borboletaImg },
      { id: "lagarta", emoji: "🐛", rotulo: "2. Lagarta", descricao: "Do ovo sai uma lagarta que come muita folha.", fotoUrl: jardimImg },
      { id: "casulo", emoji: "🎋", rotulo: "3. Casulo", descricao: "A lagarta se enrola num casulo e transforma dentro.", fotoUrl: jardimImg },
      { id: "borboleta", emoji: "🦋", rotulo: "4. Borboleta", descricao: "Sai a borboleta adulta, com asas prontas pra voar.", fotoUrl: borboletaImg },
    ],
    ordemCerta: ["ovo", "lagarta", "casulo", "borboleta"],
    feedbackAcerto: "Vida completa! Ovo → lagarta → casulo → borboleta.",
    feedbackErro: "Antes de voar, a borboleta foi lagarta e casulo. Qual vem antes?",
    falaFinal: "Todo animal tem seu ciclo de vida. A borboleta é uma das mais mágicas!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia o Diário do Quintal.",
    tituloLivro: "📓 Diário do Quintal",
    subtitulo: "Página 4 — Seres vivos",
    paragrafos: [
      { id: "p1", texto: "SERES VIVOS nascem, crescem, se alimentam e se reproduzem. Plantas, animais e pessoas são seres vivos. Pedras e copos NÃO são.", chaves: ["seres vivos", "reproduzem"], definicoes: { "seres vivos": "Coisas que nascem, crescem, comem e geram filhos.", reproduzem: "Geram novos seres da mesma espécie." }, fotoUrl: jardimImg },
      { id: "p2", texto: "Cada ser vivo tem um AMBIENTE preferido: o peixe vive na água, a minhoca na terra, o passarinho no ar e na árvore.", chaves: ["ambiente"], definicoes: { ambiente: "Lugar onde um ser vivo consegue viver bem — água, terra, ar ou floresta." }, fotoUrl: jardimImg },
      { id: "p3", texto: "Os seres vivos se AJUDAM. A abelha leva pólen de flor em flor; o passarinho espalha sementes; a minhoca afofa a terra pra planta crescer.", chaves: ["pólen", "sementes"], definicoes: { pólen: "Pozinho amarelo da flor que faz nascer novas plantas.", sementes: "Pontinhos dentro dos frutos que viram novas plantas." }, fotoUrl: borboletaImg },
    ],
    falaFinal: "Um jardim é uma comunidade viva! Cada um faz sua parte.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado! Cada pista fala de um bichinho — escolha QUAL é!",
    instrucao: "⏱️ Leia a pista e escolha o ser vivo!",
    duracaoSegundos: 15,
    pecas: [
      { id: "borboleta", emoji: "🦋", rotulo: "Borboleta" },
      { id: "joaninha", emoji: "🐞", rotulo: "Joaninha" },
      { id: "minhoca", emoji: "🪱", rotulo: "Minhoca" },
      { id: "passaro", emoji: "🐦", rotulo: "Passarinho" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Voa e chupa néctar", emoji: "🌸", cor: "from-pink-400 to-rose-600" }, municipioB: { nome: "Asas coloridas", emoji: "🎨", cor: "from-orange-400 to-pink-600" }, contexto: "Tem asas coloridas, voa devagar e vive nas flores. Quem é?", pecaCertaId: "borboleta", fotoUrl: borboletaImg, feedbackAcerto: "Isso! É a BORBOLETA — asas grandes e coloridas.", feedbackErro: "Asas coloridas + flores = BORBOLETA." },
      { id: "r2", municipioA: { nome: "Vermelha com pintinhas", emoji: "❤️", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Come pulgão", emoji: "🍽️", cor: "from-orange-400 to-amber-600" }, contexto: "É vermelhinha com pintinhas pretas e come outros insetos. Quem é?", pecaCertaId: "joaninha", fotoUrl: borboletaImg, feedbackAcerto: "Combo! JOANINHA — vermelha e come pulgão.", feedbackErro: "Vermelha com pintinha só é a JOANINHA." },
      { id: "r3", municipioA: { nome: "Cava túnel", emoji: "🕳️", cor: "from-amber-700 to-yellow-900" }, municipioB: { nome: "Sem patas", emoji: "🧡", cor: "from-orange-500 to-red-700" }, contexto: "Não tem patas, vive na terra e afofa o solo. Quem é?", pecaCertaId: "minhoca", fotoUrl: jardimImg, feedbackAcerto: "Perfeito! MINHOCA — a jardineira invisível.", feedbackErro: "Sem patas e na terra? É a MINHOCA." },
      { id: "r4", municipioA: { nome: "Faz ninho na árvore", emoji: "🪺", cor: "from-cyan-400 to-sky-700" }, municipioB: { nome: "Canta de manhã", emoji: "🎵", cor: "from-sky-400 to-indigo-700" }, contexto: "Tem asas, canta cedo e faz ninho no alto. Quem é?", pecaCertaId: "passaro", fotoUrl: jardimImg, feedbackAcerto: "Isso! PASSARINHO — canta e faz ninho.", feedbackErro: "Canto + ninho na árvore = PASSARINHO." },
    ],
    falaFinal: "Você conhece os moradores do quintal!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Um jardim tem duas metades: coisas VIVAS e coisas NÃO-VIVAS.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: jardimImg,
    fatias: [
      { id: "vivos", rotulo: "Seres vivos", emoji: "🌿", percentual: 50, cor: "#22c55e", descricao: "Plantas e animais nascem, crescem, comem e se reproduzem.", exemplos: ["Árvore", "Borboleta", "Passarinho"], fotoUrl: borboletaImg },
      { id: "naoVivos", rotulo: "Não-vivos", emoji: "🪨", percentual: 50, cor: "#94a3b8", descricao: "Água, pedra e terra não nascem nem crescem — mas são importantes pros seres vivos.", exemplos: ["Água do lago", "Pedra", "Terra"], fotoUrl: jardimImg },
    ],
    falaFinal: "Vivos + não-vivos = um ambiente completo!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Últimas 3 perguntas pra ganhar o Cristal da Vida!",
    instrucao: "Responda 3 perguntas rápidas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Qual destes é ser vivo?", fotoUrl: jardimImg, opcoes: [{ id: "a", texto: "Árvore", correta: true }, { id: "b", texto: "Pedra" }], feedbackAcerto: "Isso!", feedbackErro: "Pedra não nasce nem cresce. Árvore SIM." },
      { id: "q2", pergunta: "Onde a minhoca vive?", fotoUrl: jardimImg, opcoes: [{ id: "a", texto: "Na terra", correta: true }, { id: "b", texto: "No topo da árvore" }], feedbackAcerto: "Certo!", feedbackErro: "Minhoca vive na TERRA úmida." },
      { id: "q3", pergunta: "Borboleta nasce de:", fotoUrl: borboletaImg, opcoes: [{ id: "a", texto: "Um ovo", correta: true }, { id: "b", texto: "Uma pedra" }], feedbackAcerto: "PERFEITO!", feedbackErro: "Pedra não gera vida. Borboleta vem do OVO." },
    ],
    selo: { nome: "Cristal da Vida", subtitulo: "4º cristal desbloqueado!", emoji: "💎", cor: "from-emerald-400 via-green-500 to-teal-600" },
    falaFinal: "Você recuperou o Cristal da Vida! O jardim está pulsando!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Amigo dos Bichos" },
};
