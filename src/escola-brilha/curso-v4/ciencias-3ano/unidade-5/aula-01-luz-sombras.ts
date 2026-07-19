import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as sombraImg } from "@/assets/ciencias-3ano/u5/sombra.jpg.asset.json";
import { url as vidroImg } from "@/assets/ciencias-3ano/u5/vidro.jpg.asset.json";
import { url as transImg } from "@/assets/ciencias-3ano/u5/translucido.jpg.asset.json";
import { url as lanternaImg } from "@/assets/ciencias-3ano/u5/lanterna.jpg.asset.json";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-luz-sombras",
  titulo: "A Luz e os Objetos",
  iconeTrilha: "💡",
  bncc: ["EF03CI02"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Aponte a lanterna nos objetos. Veja o que acontece com a luz.",
    mapaUrl: lanternaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "Guardião, o app acendeu uma lanterna gigante! A mão faz sombra enorme, o copo de vidro deixa a luz passar. Por que isso?",
    falaFinal: "A luz viaja em linha reta. Alguns materiais barram, outros deixam passar. Vamos investigar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "HIPÓTESE.",
    pergunta: "O que acontece se você apontar uma lanterna para um COPO DE VIDRO?",
    fotoUrl: vidroImg,
    opcoes: [
      { id: "passa", titulo: "PASSA DIRETO", subtitulo: "sem sombra forte", emoji: "✨", cor: "from-sky-400 to-blue-600" },
      { id: "bloq", titulo: "FICA BLOQUEADA", subtitulo: "sombra escura", emoji: "🌑", cor: "from-slate-600 to-slate-900" },
      { id: "quica", titulo: "QUICA E VOLTA", subtitulo: "espelho", emoji: "🪞", cor: "from-cyan-500 to-teal-700" },
    ],
    respostaCerta: "passa",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! Vidro é TRANSPARENTE — a luz atravessa quase toda.",
    feedbackErro: "Vidro é transparente. A luz passa direto por ele.",
    falaFinal: "Objetos podem ser TRANSPARENTES, OPACOS ou TRANSLÚCIDOS. Vamos aprender os três.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três tipos de materiais em relação à luz.",
    instrucao: "Vocabulário óptico",
    cadernos: [
      { id: "opaco", capa: "OPACO", emoji: "🌑", cor: "from-slate-600 to-slate-900", conteudo: "BLOQUEIA TOTALMENTE a passagem da luz. Cria sombras nítidas atrás dele.", exemplo: "Ex.: madeira, pedra, mão, livro.", fotoUrl: sombraImg },
      { id: "trans", capa: "TRANSPARENTE", emoji: "✨", cor: "from-sky-400 to-blue-600", conteudo: "Deixa a luz passar TOTALMENTE. Você vê tudo do outro lado com clareza.", exemplo: "Ex.: vidro limpo, água limpa, ar.", fotoUrl: vidroImg },
      { id: "trlu", capa: "TRANSLÚCIDO", emoji: "🌫️", cor: "from-amber-300 to-yellow-500", conteudo: "Deixa PASSAR SÓ UM POUCO da luz. Você vê borrado.", exemplo: "Ex.: papel manteiga, vidro fosco.", fotoUrl: transImg },
    ],
    falaFinal: "Opaco, transparente, translúcido. Três comportamentos diferentes.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Como a luz forma a SOMBRA. Toque em cada elemento.",
    instrucao: "Toque nos elementos",
    mapaUrl: sombraImg,
    pontos: [
      { id: "fonte", x: 20, y: 30, emoji: "💡", cor: "from-yellow-400 to-amber-600", titulo: "Fonte de luz", texto: "Lanterna, sol ou lâmpada emite raios de luz em linha reta.", fotoUrl: lanternaImg },
      { id: "obj", x: 50, y: 50, emoji: "✋", cor: "from-slate-600 to-slate-900", titulo: "Objeto opaco", texto: "Bloqueia a luz. Aqui, uma mão.", fotoUrl: sombraImg },
      { id: "sombra", x: 80, y: 70, emoji: "🌑", cor: "from-slate-700 to-black", titulo: "Sombra", texto: "Região escura formada atrás do objeto opaco.", fotoUrl: sombraImg },
    ],
    falaFinal: "Sombra = ausência de luz. Só existe quando algo opaco atravessa o caminho dos raios.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual material NÃO deixa a luz passar?", fotoUrl: sombraImg,
        cards: [
          { id: "a", emoji: "🌑", titulo: "Opaco (madeira, pedra)", cor: "from-slate-600 to-slate-900" },
          { id: "b", emoji: "✨", titulo: "Transparente (vidro limpo)", cor: "from-sky-400 to-blue-600" },
          { id: "c", emoji: "🌫️", titulo: "Translúcido (papel manteiga)", cor: "from-amber-300 to-yellow-500" },
        ], correta: "a",
        feedbackAcerto: "Isso. OPACO bloqueia totalmente.", feedbackErro: "Opaco = bloqueia tudo. Cria sombra." },
      { id: "q2", pergunta: "Papel manteiga é?", fotoUrl: transImg,
        cards: [
          { id: "a", emoji: "✨", titulo: "Transparente — vê tudo", cor: "from-sky-400 to-blue-600" },
          { id: "b", emoji: "🌫️", titulo: "Translúcido — vê borrado", cor: "from-amber-300 to-yellow-500" },
          { id: "c", emoji: "🌑", titulo: "Opaco — não vê nada", cor: "from-slate-600 to-slate-900" },
        ], correta: "b",
        feedbackAcerto: "Sim. Passa luz mas borra a imagem.", feedbackErro: "Papel manteiga = TRANSLÚCIDO." },
      { id: "q3", pergunta: "Sombra é...", fotoUrl: sombraImg,
        cards: [
          { id: "a", emoji: "🌑", titulo: "Região escura atrás de objeto opaco", cor: "from-slate-700 to-black" },
          { id: "b", emoji: "🌈", titulo: "Cor colorida no chão", cor: "from-pink-500 to-purple-700" },
          { id: "c", emoji: "☁️", titulo: "Fumaça no ar", cor: "from-slate-400 to-slate-600" },
        ], correta: "a",
        feedbackAcerto: "Sombra = ausência de luz.", feedbackErro: "Sombra é ESCURIDÃO atrás do objeto opaco." },
    ],
    falaFinal: "Três acertos. Vamos aprofundar.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Duas grandes categorias: passa luz ou não passa.",
    instrucao: "Toque nos interruptores",
    mapaUrl: vidroImg,
    camadas: [
      { id: "passa", rotulo: "Deixa passar luz", emoji: "✨", cor: "from-sky-400 to-blue-600", rect: { x: 2, y: 30, w: 47, h: 65 }, descricao: "Transparentes e translúcidos: vidro, água, papel fino.", fotoUrl: vidroImg },
      { id: "bloq", rotulo: "Bloqueia a luz", emoji: "🌑", cor: "from-slate-600 to-slate-900", rect: { x: 50, y: 30, w: 48, h: 65 }, descricao: "Opacos: madeira, pedra, metal, pele, papelão.", fotoUrl: sombraImg },
    ],
    falaFinal: "A luz é caprichosa: passa em alguns materiais e para em outros.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como se forma uma SOMBRA? Monte o processo.",
    instrucao: "Toque nas paradas na ordem correta",
    pergunta: "Formação da sombra",
    paradas: [
      { id: "acende", emoji: "💡", rotulo: "1. Fonte de luz acende", descricao: "Lanterna ou sol emite raios.", fotoUrl: lanternaImg },
      { id: "viaja", emoji: "➡️", rotulo: "2. Luz viaja em linha reta", descricao: "Raios se propagam pelo ar.", fotoUrl: lanternaImg },
      { id: "bate", emoji: "✋", rotulo: "3. Bate no objeto opaco", descricao: "Objeto barra a luz.", fotoUrl: sombraImg },
      { id: "para", emoji: "🚫", rotulo: "4. Luz não atravessa", descricao: "Fica parada no objeto.", fotoUrl: sombraImg },
      { id: "sombra", emoji: "🌑", rotulo: "5. Sombra aparece atrás", descricao: "Região escura se forma.", fotoUrl: sombraImg },
    ],
    ordemCerta: ["acende", "viaja", "bate", "para", "sombra"],
    feedbackAcerto: "Perfeito! Assim nasce toda sombra.",
    feedbackErro: "Acende → viaja → bate → para → sombra.",
    falaFinal: "Sombra é consequência da luz. Sem luz, não existe sombra.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "🔬 Relatório da Expedição · Semana 5",
    subtitulo: "Investigação: luz e sombras",
    paragrafos: [
      { id: "p1", texto: "A LUZ viaja em linha reta muito rápido. Quando bate em algo OPACO, não consegue passar e forma uma SOMBRA — região escura atrás do objeto.",
        chaves: ["opaco", "sombra"], definicoes: { opaco: "Que bloqueia totalmente a luz.", sombra: "Área escura atrás de objeto opaco." }, fotoUrl: sombraImg },
      { id: "p2", texto: "Quando a luz bate em algo TRANSPARENTE (vidro limpo, ar), atravessa quase toda. Já em algo TRANSLÚCIDO (papel manteiga), atravessa só um pouco e a imagem fica borrada.",
        chaves: ["transparente", "translúcido"], definicoes: { transparente: "Deixa passar toda a luz.", "translúcido": "Deixa passar parte da luz." }, fotoUrl: vidroImg },
      { id: "p3", texto: "Aproximando a mão da lanterna, a SOMBRA na parede fica gigante — porque bloqueia mais luz. Afastando, a sombra fica do tamanho real.",
        chaves: [], definicoes: {}, fotoUrl: sombraImg },
    ],
    falaFinal: "Óptica de bolso!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "O Teatro de Sombras! Classifique cada material.",
    instrucao: "⏱️ Veja o material e escolha o tipo",
    duracaoSegundos: 25,
    pecas: [
      { id: "opaco", emoji: "🌑", rotulo: "Opaco" },
      { id: "trans", emoji: "✨", rotulo: "Transparente" },
      { id: "trlu", emoji: "🌫️", rotulo: "Translúcido" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Copo de vidro", emoji: "🥛", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Vê tudo do outro lado", emoji: "👁️", cor: "from-cyan-500 to-blue-700" }, contexto: "Um copo limpo na mesa. Você vê a parede atrás dele com clareza.", pecaCertaId: "trans", fotoUrl: vidroImg, feedbackAcerto: "Vidro = TRANSPARENTE.", feedbackErro: "Vê nítido = TRANSPARENTE." },
      { id: "r2", municipioA: { nome: "Livro fechado", emoji: "📕", cor: "from-slate-600 to-slate-900" }, municipioB: { nome: "Faz sombra", emoji: "🌑", cor: "from-slate-700 to-black" }, contexto: "Um livro grosso apoiado na mesa, aponta a lanterna nele.", pecaCertaId: "opaco", fotoUrl: sombraImg, feedbackAcerto: "OPACO.", feedbackErro: "Bloqueia a luz = OPACO." },
      { id: "r3", municipioA: { nome: "Papel manteiga", emoji: "📄", cor: "from-amber-300 to-yellow-500" }, municipioB: { nome: "Imagem borrada", emoji: "🌫️", cor: "from-amber-400 to-orange-500" }, contexto: "Você aponta a luz e vê uma silhueta borrada por trás.", pecaCertaId: "trlu", fotoUrl: transImg, feedbackAcerto: "TRANSLÚCIDO.", feedbackErro: "Vê borrado = TRANSLÚCIDO." },
      { id: "r4", municipioA: { nome: "Sua mão", emoji: "✋", cor: "from-slate-600 to-slate-900" }, municipioB: { nome: "Sombra na parede", emoji: "🌑", cor: "from-slate-700 to-black" }, contexto: "Coloca a mão na frente da lanterna. Sombra escura aparece atrás.", pecaCertaId: "opaco", fotoUrl: sombraImg, feedbackAcerto: "Mão é OPACA.", feedbackErro: "Pele humana = OPACA." },
      { id: "r5", municipioA: { nome: "Ar limpo", emoji: "💨", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Vê perfeitamente", emoji: "👁️", cor: "from-cyan-500 to-blue-700" }, contexto: "Você olha através do ar limpo da sala. Vê tudo nítido.", pecaCertaId: "trans", fotoUrl: vidroImg, feedbackAcerto: "Ar = TRANSPARENTE.", feedbackErro: "Ar limpo é TRANSPARENTE." },
    ],
    falaFinal: "Você dominou a óptica dos materiais!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Os três comportamentos da luz nos materiais.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: lanternaImg,
    fatias: [
      { id: "opaco", rotulo: "Opacos (bloqueiam luz)", emoji: "🌑", percentual: 60, cor: "#334155", descricao: "Maioria dos materiais. Bloqueiam a luz e formam sombras nítidas.", exemplos: ["Madeira", "Pedra", "Metal", "Pele"], fotoUrl: sombraImg },
      { id: "passa", rotulo: "Deixam luz passar (transparente/translúcido)", emoji: "✨", percentual: 40, cor: "#0ea5e9", descricao: "Transparentes (vidro, água, ar) e translúcidos (papel manteiga, vidro fosco).", exemplos: ["Vidro", "Água", "Papel manteiga"], fotoUrl: vidroImg },
    ],
    falaFinal: "Todo material se enquadra em um desses três grupos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Por que as JANELAS são de vidro transparente?", fotoUrl: vidroImg,
        opcoes: [
          { id: "a", texto: "Para deixar a luz do sol entrar e permitir enxergar fora", correta: true },
          { id: "b", texto: "Porque vidro é mais forte que madeira e barra o vento" },
        ], feedbackAcerto: "Isso! Iluminação natural.", feedbackErro: "O objetivo é deixar LUZ entrar e ver fora." },
      { id: "q2", pergunta: "A sombra é formada por qual tipo de material?", fotoUrl: sombraImg,
        opcoes: [
          { id: "a", texto: "Objetos opacos que bloqueiam a luz", correta: true },
          { id: "b", texto: "Objetos transparentes que deixam passar" },
        ], feedbackAcerto: "Correto.", feedbackErro: "Só OPACO faz sombra." },
      { id: "q3", pergunta: "Papel manteiga é um material...", fotoUrl: transImg,
        opcoes: [
          { id: "a", texto: "Translúcido — deixa passar parte da luz, imagem borrada", correta: true },
          { id: "b", texto: "Opaco — bloqueia tudo" },
        ], feedbackAcerto: "Sim.", feedbackErro: "Passa luz mas borra = TRANSLÚCIDO." },
    ],
    selo: { nome: "Cristal Prisma", subtitulo: "Guardiões da Biosfera · Missão 5 concluída", emoji: "💎", cor: "from-sky-400 via-cyan-500 to-blue-700" },
    falaFinal: "A Sala dos Espelhos brilhou de novo!",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Mestre das Sombras" },
};
