import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import estufaImg from "@/assets/ciencias-2ano/u5-a1/estufa-plantas.jpg";
import brotoImg from "@/assets/ciencias-2ano/u5-a1/broto-crescendo.jpg";
import mapaCam_u5_entraImg from "@/assets/ciencias-2ano/mapa-camadas/u5-entra.jpg";
import mapaCam_u5_produzImg from "@/assets/ciencias-2ano/mapa-camadas/u5-produz.jpg";

/**
 * Ciências · 2º Ano · Unidade 5 · Aula 01
 * "Água e Luz — o que planta precisa pra viver" — EF02CI05 · Cristal da Água e da Luz
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-agua-luz",
  titulo: "Água e Luz: o que planta precisa?",
  iconeTrilha: "💧",
  bncc: ["EF02CI05"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pela estufa. Quatro tubos, quatro condições. Qual planta vai crescer melhor?",
    mapaUrl: estufaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Brilha, o 5º cristal está numa ESTUFA MÁGICA! Aqui tem 4 tubos com plantinhas iguais, mas em condições diferentes. Vamos descobrir do que a planta REALMENTE precisa!",
    falaFinal: "Um experimento científico de verdade: mesma planta, condições diferentes.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Antes de olhar o resultado: qual desses tubos você acha que a planta vai crescer melhor?",
    pergunta: "Qual tubo faz a plantinha crescer bem?",
    fotoUrl: estufaImg,
    opcoes: [
      { id: "solAgua", titulo: "Sol + Água", subtitulo: "os dois juntos", emoji: "☀️💧", cor: "from-emerald-400 to-green-700" },
      { id: "soSol", titulo: "Só Sol", subtitulo: "sem água", emoji: "☀️🌵", cor: "from-amber-400 to-orange-600" },
      { id: "escuro", titulo: "Só Água", subtitulo: "sem luz nenhuma", emoji: "💧🌑", cor: "from-purple-700 to-slate-900" },
    ],
    respostaCerta: "solAgua",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! Planta precisa DOS DOIS: sol pra fazer alimento e água pra hidratar.",
    feedbackErro: "Sem água OU sem sol a planta murcha. Precisa dos DOIS juntos!",
    falaFinal: "Planta é um ser vivo que precisa de LUZ e ÁGUA pra sobreviver.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Abre cada caderno: as 4 coisas que planta precisa.",
    instrucao: "O que uma planta precisa?",
    cadernos: [
      { id: "agua", capa: "ÁGUA", emoji: "💧", cor: "from-cyan-400 to-sky-700", conteudo: "Sobe pela raiz e leva os nutrientes até a folha.", exemplo: "Ex.: regar a planta uma vez por dia.", fotoUrl: brotoImg },
      { id: "luz", capa: "LUZ", emoji: "☀️", cor: "from-yellow-400 to-orange-600", conteudo: "O sol é o COMBUSTÍVEL da planta — sem luz ela não faz alimento.", exemplo: "Ex.: deixar o vaso perto da janela.", fotoUrl: estufaImg },
      { id: "ar", capa: "AR", emoji: "🌬️", cor: "from-sky-300 to-cyan-500", conteudo: "As folhas RESPIRAM o ar (gás carbônico) pra fazer o alimento.", exemplo: "Ex.: nunca cobrir a planta com plástico apertado.", fotoUrl: estufaImg },
      { id: "solo", capa: "SOLO", emoji: "🟫", cor: "from-amber-700 to-yellow-900", conteudo: "É a casa da raiz — segura a planta e guarda os nutrientes.", exemplo: "Ex.: terra fofa com adubo.", fotoUrl: brotoImg },
    ],
    falaFinal: "Água, luz, ar e solo. As 4 coisas que TODA planta precisa.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada tubo pra ver o que acontece com a planta.",
    instrucao: "Toque em cada tubo",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: estufaImg,
    pontos: [
      { id: "tubo1", x: 25, y: 55, emoji: "☀️", cor: "from-emerald-500 to-green-700", titulo: "Tubo 1 — Sol + Água", texto: "A planta cresce forte e verde! Tem os DOIS ingredientes.", fotoUrl: brotoImg },
      { id: "tubo2", x: 42, y: 55, emoji: "🌑", cor: "from-purple-700 to-slate-900", titulo: "Tubo 2 — Sem luz", texto: "Fica amarelada e murcha. Sem SOL a planta não faz alimento.", fotoUrl: estufaImg },
      { id: "tubo3", x: 60, y: 55, emoji: "💦", cor: "from-cyan-400 to-sky-700", titulo: "Tubo 3 — Excesso de água", texto: "A raiz apodrece. Água demais afoga a plantinha.", fotoUrl: estufaImg },
      { id: "tubo4", x: 78, y: 55, emoji: "🌵", cor: "from-amber-500 to-orange-700", titulo: "Tubo 4 — Sem água", texto: "Fica seca e quebradiça. Sem ÁGUA a planta desidrata.", fotoUrl: estufaImg },
      { id: "lampada", x: 50, y: 12, emoji: "💡", cor: "from-yellow-400 to-orange-600", titulo: "Lâmpada de calor", texto: "Fingindo ser o sol pra todos os tubos receberem a mesma luz.", fotoUrl: estufaImg },
    ],
    falaFinal: "Água e luz na medida certa. Nem demais, nem de menos!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre a estufa.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Uma planta no escuro:", fotoUrl: estufaImg, cards: [{ id: "a", emoji: "🌱", titulo: "Cresce forte", cor: "from-emerald-400 to-green-700" }, { id: "b", emoji: "🥀", titulo: "Fica amarela e murcha", cor: "from-yellow-500 to-orange-700" }, { id: "c", emoji: "🌈", titulo: "Fica arco-íris", cor: "from-pink-400 to-purple-600" }], correta: "b", feedbackAcerto: "Isso! Sem luz, a planta AMARELECE e murcha.", feedbackErro: "Sem sol, a planta murcha e fica amarela." },
      { id: "q2", pergunta: "Regar TODO DIA um monte de água é:", fotoUrl: brotoImg, cards: [{ id: "a", emoji: "❤️", titulo: "Amor pela planta", cor: "from-pink-400 to-rose-600" }, { id: "b", emoji: "😵", titulo: "Ruim — afoga a raiz", cor: "from-cyan-400 to-sky-700" }, { id: "c", emoji: "🎯", titulo: "Sempre ideal", cor: "from-emerald-400 to-green-600" }], correta: "b", feedbackAcerto: "Certo! Água DEMAIS AFOGA a raiz. Regar com medida.", feedbackErro: "Água em excesso apodrece a raiz. Regar na medida!" },
      { id: "q3", pergunta: "De onde a planta tira a comida?", fotoUrl: estufaImg, cards: [{ id: "a", emoji: "☀️💧", titulo: "Faz sozinha com sol e água", cor: "from-emerald-400 to-green-700" }, { id: "b", emoji: "🍔", titulo: "Do supermercado", cor: "from-orange-400 to-red-600" }, { id: "c", emoji: "🐜", titulo: "Come formigas", cor: "from-red-400 to-rose-700" }], correta: "a", feedbackAcerto: "PERFEITO! Planta FABRICA a própria comida com sol, água e ar.", feedbackErro: "Planta é a única que FABRICA a própria comida — com sol e água." },
    ],
    falaFinal: "Você já sabe o segredo da vida das plantas!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores: um mostra o que ENTRA na planta, outro o que ela FAZ.",
    instrucao: "Toque nos interruptores",
    mapaUrl: estufaImg,
    camadas: [
      { id: "entra", rotulo: "Entra", emoji: "⬇️", cor: "from-cyan-500 to-sky-700", rect: { x: 5, y: 20, w: 40, h: 70 }, descricao: "ÁGUA pela raiz, LUZ pelas folhas, AR também pelas folhas.", fotoUrl: mapaCam_u5_entraImg },
      { id: "faz", rotulo: "Planta faz", emoji: "🌱", cor: "from-emerald-500 to-green-700", rect: { x: 50, y: 20, w: 45, h: 70 }, descricao: "Fabrica ALIMENTO (com sol + água) e solta oxigênio pra gente respirar.", fotoUrl: mapaCam_u5_produzImg },
    ],
    falaFinal: "Entra sol e água. Sai comida da planta + oxigênio pra gente. Que troca perfeita!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos montar o crescimento da semente em ordem?",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como a semente vira uma plantinha?",
    paradas: [
      { id: "semente", emoji: "🌰", rotulo: "1. Semente", descricao: "Fica na terra molhada, esperando.", fotoUrl: brotoImg },
      { id: "raiz", emoji: "🌾", rotulo: "2. Raiz", descricao: "Aparece uma raiz que puxa a água do solo.", fotoUrl: brotoImg },
      { id: "broto", emoji: "🌱", rotulo: "3. Broto", descricao: "Sai um broto do chão, esticando pra cima em direção ao SOL.", fotoUrl: brotoImg },
      { id: "muda", emoji: "🌿", rotulo: "4. Mudinha", descricao: "Cresce e ganha folhas — pronta pra virar planta adulta.", fotoUrl: estufaImg },
    ],
    ordemCerta: ["semente", "raiz", "broto", "muda"],
    feedbackAcerto: "Vida completa! Semente → raiz → broto → mudinha.",
    feedbackErro: "Antes de folhas, precisa da RAIZ. Qual vem antes?",
    falaFinal: "Toda planta começa pequenininha. Com água e sol, cresce forte!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Diário da Estufa.",
    tituloLivro: "📓 Diário da Estufa",
    subtitulo: "Página 5 — Água e Luz",
    paragrafos: [
      { id: "p1", texto: "Toda planta precisa de ÁGUA e LUZ. A água entra pela RAIZ e sobe até a folha. A luz do sol entra pela FOLHA e vira energia.", chaves: ["raiz", "folha"], definicoes: { raiz: "Parte da planta que fica na terra e puxa água.", folha: "Parte verde que recebe a luz do sol." }, fotoUrl: brotoImg },
      { id: "p2", texto: "Com sol + água + ar, a planta FABRICA seu próprio alimento. Nenhum bicho faz isso — só as plantas.", chaves: ["fabrica", "alimento"], definicoes: { fabrica: "Cria dentro dela mesma, sem precisar comprar.", alimento: "Comida que dá energia pro ser vivo." }, fotoUrl: estufaImg },
      { id: "p3", texto: "Se falta ÁGUA: a planta murcha. Se falta LUZ: fica amarela. Se tem ÁGUA DEMAIS: a raiz apodrece. É preciso EQUILÍBRIO.", chaves: ["equilíbrio"], definicoes: { equilíbrio: "Nem muito, nem pouco — na medida certa." }, fotoUrl: estufaImg },
    ],
    falaFinal: "Você já sabe cuidar de uma plantinha!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado! Cada rodada mostra uma planta em apuros — o que está FALTANDO?",
    instrucao: "⏱️ Leia e escolha o que a planta precisa!",
    duracaoSegundos: 15,
    pecas: [
      { id: "agua", emoji: "💧", rotulo: "Água" },
      { id: "luz", emoji: "☀️", rotulo: "Luz do sol" },
      { id: "ar", emoji: "🌬️", rotulo: "Ar" },
      { id: "solo", emoji: "🟫", rotulo: "Solo com adubo" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Folhas secas", emoji: "🥀", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Terra rachada", emoji: "🏜️", cor: "from-orange-400 to-yellow-700" }, contexto: "A planta está murcha e a terra rachada. O que falta?", pecaCertaId: "agua", fotoUrl: brotoImg, feedbackAcerto: "Isso! Falta ÁGUA. Rega ela!", feedbackErro: "Terra rachada = SEDE. Falta ÁGUA." },
      { id: "r2", municipioA: { nome: "Folhas amareladas", emoji: "💛", cor: "from-yellow-400 to-amber-600" }, municipioB: { nome: "Vaso no armário", emoji: "🚪", cor: "from-slate-500 to-slate-800" }, contexto: "A planta ficou dentro do armário fechado. As folhas ficaram amarelas. O que falta?", pecaCertaId: "luz", fotoUrl: estufaImg, feedbackAcerto: "Combo! Falta LUZ do sol.", feedbackErro: "No escuro a planta amarela. Falta LUZ!" },
      { id: "r3", municipioA: { nome: "Plástico apertado", emoji: "🛍️", cor: "from-purple-500 to-fuchsia-700" }, municipioB: { nome: "Folhas sufocadas", emoji: "😮‍💨", cor: "from-sky-400 to-cyan-700" }, contexto: "Alguém cobriu a planta com plástico apertado. O que falta pra ela respirar?", pecaCertaId: "ar", fotoUrl: estufaImg, feedbackAcerto: "Perfeito! Folhas precisam de AR pra fazer alimento.", feedbackErro: "Plástico bloqueou o AR. Precisa de ar!" },
      { id: "r4", municipioA: { nome: "Vaso vazio", emoji: "🪴", cor: "from-amber-600 to-yellow-800" }, municipioB: { nome: "Raiz sem casa", emoji: "🕳️", cor: "from-orange-500 to-amber-700" }, contexto: "Tiraram toda a terra do vaso e sobrou só a planta. O que falta?", pecaCertaId: "solo", fotoUrl: brotoImg, feedbackAcerto: "Isso! Sem SOLO, a raiz não segura nada.", feedbackErro: "A raiz precisa de terra pra segurar. Falta SOLO!" },
    ],
    falaFinal: "Você já sabe diagnosticar uma planta doente!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "O que a planta precisa se divide em duas metades: o que VEM DE CIMA e o que VEM DE BAIXO.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: estufaImg,
    fatias: [
      { id: "cima", rotulo: "De cima", emoji: "☀️", percentual: 50, cor: "#f59e0b", descricao: "Luz do sol e ar chegam pelas folhas, que ficam viradas pra cima.", exemplos: ["Sol", "Ar"], fotoUrl: estufaImg },
      { id: "baixo", rotulo: "De baixo", emoji: "💧", percentual: 50, cor: "#0ea5e9", descricao: "Água e nutrientes chegam pela raiz, que fica na terra.", exemplos: ["Água", "Solo com nutrientes"], fotoUrl: brotoImg },
    ],
    falaFinal: "De cima + de baixo = planta feliz!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas pra fechar o Cristal da Água e da Luz.",
    instrucao: "Responda 3 perguntas rápidas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Uma planta no escuro fica:", fotoUrl: estufaImg, opcoes: [{ id: "a", texto: "Amarela e murcha", correta: true }, { id: "b", texto: "Cresce super rápido" }], feedbackAcerto: "Isso!", feedbackErro: "Sem sol ela amarela." },
      { id: "q2", pergunta: "A água entra pela:", fotoUrl: brotoImg, opcoes: [{ id: "a", texto: "Raiz", correta: true }, { id: "b", texto: "Flor" }], feedbackAcerto: "Certo!", feedbackErro: "Água entra pela RAIZ." },
      { id: "q3", pergunta: "Planta faz alimento com:", fotoUrl: estufaImg, opcoes: [{ id: "a", texto: "Sol + água + ar", correta: true }, { id: "b", texto: "Ração de cachorro" }], feedbackAcerto: "PERFEITO!", feedbackErro: "Sol + água + ar. Planta é fábrica de alimento!" },
    ],
    selo: { nome: "Cristal da Água e da Luz", subtitulo: "5º cristal desbloqueado!", emoji: "💎", cor: "from-cyan-400 via-sky-500 to-blue-600" },
    falaFinal: "Você recuperou o Cristal da Água e da Luz! A estufa está pulsando de vida!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Jardineiro Cientista" },
};
