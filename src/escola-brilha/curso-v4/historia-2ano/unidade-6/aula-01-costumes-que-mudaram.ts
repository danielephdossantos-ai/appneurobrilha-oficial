import type { AulaGeoV1 } from "../../types";
import imgBrincadeiras from "@/assets/historia-2ano/brincadeiras-rua.png";
import imgRadio from "@/assets/historia-2ano/radio-familia-1930.png";
import imgVitrola from "@/assets/historia-2ano/vitrola-vinil.png";
import imgRoupas from "@/assets/historia-2ano/roupas-1920.png";
import imgFotoAntiga from "@/assets/historia-2ano/foto-antiga.png";

/**
 * História · 2º Ano · Unidade 6 · Aula 01
 * "Costumes que Mudaram" — EF02HI06 + EF02HI07
 *
 * Missão: comparar costumes antigos e de hoje. Sala 6 do museu.
 * Recompensa: Engrenagem de Diamante.
 */

export const aula01: AulaGeoV1 = {
  slug: "aula-01-costumes-que-mudaram",
  titulo: "Costumes que Mudaram",
  iconeTrilha: "🌎",
  bncc: ["EF02HI06", "EF02HI07"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA na foto das brincadeiras antigas. Descubra do que as crianças brincavam ANTES do videogame.",
    mapaUrl: imgBrincadeiras,
    imagemDestaqueUrl: imgRadio,
    aurora:
      "O Brilha perguntou pro vovô se ele jogava videogame quando era criança. O vovô riu e disse: 'Na minha época, a gente jogava bola de gude, rodava pião e fazia carrinho de rolimã com pedaços de tábua!' Como será que era brincar SEM tela?",
    falaFinal:
      "Roupas de sarja, sapatos de couro, brinquedos de madeira e metal. Sem plástico, sem tela. Era uma outra vida.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar, quero seu palpite. O que causou a MAIOR mudança nos costumes das pessoas do passado pro presente?",
    pergunta: "O que mudou mais os costumes ao longo do tempo?",
    fotoUrl: imgRadio,
    opcoes: [
      {
        id: "tech",
        titulo: "Novas tecnologias e materiais",
        subtitulo: "eletricidade, plástico, motor, internet",
        emoji: "⚡",
        cor: "from-sky-400 to-indigo-600",
        fotoUrl: imgVitrola,
      },
      {
        id: "clima",
        titulo: "O clima mudou de repente",
        subtitulo: "chuva e sol",
        emoji: "☀️",
        cor: "from-amber-400 to-orange-600",
        fotoUrl: imgBrincadeiras,
      },
    ],
    respostaCerta: "tech",
    feedbackAcerto:
      "Isso! A tecnologia (eletricidade, plástico, motor, internet) transformou o jeito de vestir, brincar, se locomover e conversar.",
    feedbackErro:
      "O clima varia todo dia. Quem MUDOU os costumes foi a TECNOLOGIA nova.",
    falaFinal:
      "Guarda essa ideia: tecnologia nova = costume novo. Vamos ver como isso aconteceu.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três cadernos abertos do historiador dos costumes. Cada um guarda uma palavra importante.",
    instrucao: "Leia os cadernos abertos",
    cadernos: [
      {
        id: "costume",
        capa: "Costume",
        emoji: "🎭",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgBrincadeiras,
        conteudo:
          "Costume é um jeito de fazer as coisas que a maioria das pessoas segue: como se vestir, brincar, comer, conversar.",
        exemplo: "Almoçar arroz com feijão = COSTUME brasileiro.",
      },
      {
        id: "tecnologia",
        capa: "Tecnologia",
        emoji: "⚡",
        cor: "from-sky-500 to-indigo-700",
        fotoUrl: imgVitrola,
        conteudo:
          "Tecnologia é a invenção de novas máquinas, materiais e ferramentas. Cada nova tecnologia MUDA os costumes.",
        exemplo: "Celular = TECNOLOGIA que mudou o jeito de conversar.",
      },
      {
        id: "tradicao",
        capa: "Tradição que fica",
        emoji: "💫",
        cor: "from-rose-500 to-pink-700",
        fotoUrl: imgBrincadeiras,
        conteudo:
          "Nem todo costume desaparece. Muitas brincadeiras antigas (amarelinha, pula-corda, esconde-esconde) PERMANECEM até hoje.",
        exemplo: "Pular corda no recreio = TRADIÇÃO que continua.",
      },
    ],
    falaFinal:
      "Costume, Tecnologia e Tradição — 3 palavras que explicam por que o mundo muda… e também o que fica.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Esta é a sala de uma família em 1930 ouvindo rádio junto. Toca em cada balão que eu conto.",
    instrucao: "Toque em cada balão pra ouvir a Aurora contar",
    mapaUrl: imgRadio,
    pontos: [
      {
        id: "radio",
        x: 50,
        y: 40,
        emoji: "📻",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgRadio,
        titulo: "Rádio gigante de madeira",
        texto:
          "O rádio era enorme, feito de madeira nobre. Só a família rica tinha um. Passava notícias, novelas e músicas ao vivo.",
      },
      {
        id: "junto",
        x: 25,
        y: 65,
        emoji: "👨‍👩‍👧",
        cor: "from-rose-500 to-red-700",
        fotoUrl: imgRadio,
        titulo: "Família reunida",
        texto:
          "TODO MUNDO se sentava junto na sala pra ouvir. Não tinha jeito de cada um assistir uma coisa diferente. Era um momento de encontro.",
      },
      {
        id: "so-som",
        x: 75,
        y: 25,
        emoji: "🎵",
        cor: "from-sky-500 to-indigo-700",
        fotoUrl: imgRadio,
        titulo: "Só o som, sem imagem",
        texto:
          "Não existia TV nem tela. A família imaginava tudo na cabeça só ouvindo o som. Uma novela virava um filme na imaginação de cada um.",
      },
    ],
    falaFinal:
      "Hoje cada um tem seu celular. Naquela época, a família inteira compartilhava a mesma tela de som.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar dos costumes ligado! 3 perguntas — toca no card certo.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Antigamente a família ouvia música em…",
        fotoUrl: imgVitrola,
        cards: [
          { id: "v", emoji: "💿", titulo: "Disco de vinil pesado", cor: "from-amber-400 to-orange-600" },
          { id: "s", emoji: "📱", titulo: "Streaming no celular", cor: "from-sky-400 to-indigo-600" },
          { id: "b", emoji: "🎧", titulo: "Fone Bluetooth", cor: "from-emerald-400 to-teal-600" },
        ],
        correta: "v",
        feedbackAcerto: "Isso! Disco de VINIL pesado, tocado numa vitrola.",
        feedbackErro: "Streaming é MODERNO. Antigamente era disco de vinil pesado.",
      },
      {
        id: "q2",
        pergunta: "Bola de gude, pião e carrinho de rolimã são…",
        fotoUrl: imgBrincadeiras,
        cards: [
          { id: "t", emoji: "🎯", titulo: "Brincadeiras tradicionais", cor: "from-rose-400 to-red-600" },
          { id: "d", emoji: "🎮", titulo: "Jogos digitais", cor: "from-sky-400 to-indigo-600" },
        ],
        correta: "t",
        feedbackAcerto: "Combo! Brincadeiras TRADICIONAIS, sem tela.",
        feedbackErro: "Essas brincadeiras são ANTIGAS, com brinquedos físicos. São tradicionais.",
      },
      {
        id: "q3",
        pergunta: "O que mudou completamente com a tecnologia?",
        fotoUrl: imgRadio,
        cards: [
          { id: "c", emoji: "💬", titulo: "O jeito de se comunicar", cor: "from-sky-400 to-indigo-600" },
          { id: "d", emoji: "😴", titulo: "O hábito de dormir de noite", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "c",
        feedbackAcerto: "Isso! Carta → mensagem instantânea. Comunicação virou coisa de segundos.",
        feedbackErro: "Dormir de noite todo mundo sempre fez. O que mudou foi COMUNICAÇÃO.",
      },
    ],
    falaFinal:
      "Radar afinado! Você já lê os costumes que mudaram e os que ficaram.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou te dar dois interruptores: um acende os costumes de ANTIGAMENTE e o outro os de HOJE. Compara os dois lados!",
    instrucao: "Toque nos interruptores pra ver cada época",
    mapaUrl: imgRadio,
    camadas: [
      {
        id: "antes",
        rotulo: "Costumes de antigamente",
        emoji: "📻",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 5, y: 20, w: 45, h: 60 },
        descricao:
          "Roupa formal e desconfortável, brincadeira na rua, rádio de madeira, música em vinil, carta demorando dias.",
      },
      {
        id: "hoje",
        rotulo: "Costumes de hoje",
        emoji: "📱",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 20, w: 40, h: 60 },
        descricao:
          "Roupa prática e leve, videogame, streaming no celular, mensagem instantânea, avião rápido pra viajar longe.",
      },
    ],
    falaFinal:
      "Duas épocas iluminadas. A tecnologia deixou tudo mais rápido — mas algumas brincadeiras antigas ainda continuam.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos montar a linha do tempo dos jeitos de OUVIR MÚSICA. Toca em cada parada na ordem certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como as pessoas ouviram música ao longo do tempo?",
    paradas: [
      {
        id: "radio",
        emoji: "📻",
        rotulo: "Rádio de madeira",
        fotoUrl: imgRadio,
        descricao: "Primeiro: rádio gigante de madeira, família toda junta ouvindo.",
      },
      {
        id: "vinil",
        emoji: "💿",
        rotulo: "Vitrola de vinil",
        fotoUrl: imgVitrola,
        descricao: "Depois: vitrola tocando discos pesados de vinil na sala.",
      },
      {
        id: "cd",
        emoji: "📀",
        rotulo: "CD player",
        fotoUrl: imgVitrola,
        descricao: "Chegou o CD, mais fininho, com aparelhinho portátil.",
      },
      {
        id: "stream",
        emoji: "📱",
        rotulo: "Streaming no celular",
        fotoUrl: imgVitrola,
        descricao: "Hoje: aplicativo no celular com todas as músicas do mundo.",
      },
    ],
    ordemCerta: ["radio", "vinil", "cd", "stream"],
    feedbackAcerto:
      "Linha completa! Do rádio ao streaming, a música ficou cada vez mais no bolso.",
    feedbackErro: "Essa não é a próxima. Pensa: o que veio ANTES?",
    falaFinal:
      "Rádio → vinil → CD → streaming. A tecnologia mudou o jeito de ouvir música 4 vezes!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez. Eu fico calada. Você lê o Diário dos Costumes com seus próprios olhos.",
    tituloLivro: "📔 Diário dos Costumes que Mudaram",
    subtitulo: "Página 6 — Tecnologia muda tudo… menos quase tudo",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Os costumes mudam porque a sociedade descobre novas tecnologias e materiais. Cada invento (eletricidade, plástico, motor, internet) transforma o dia a dia das pessoas.",
        chaves: ["costumes", "tecnologias", "sociedade"],
        definicoes: {
          costumes: "Jeitos comuns de fazer as coisas — vestir, comer, brincar, conversar.",
          tecnologias: "Invenções novas que ajudam a fazer as coisas de outro jeito.",
          sociedade: "Todas as pessoas de um lugar vivendo juntas.",
        },
        fotoUrl: imgVitrola,
      },
      {
        id: "p2",
        texto:
          "O jeito de se vestir era muito mais formal. Tinha muita roupa pesada, chapéu, terno. Hoje a gente usa roupa esportiva e leve, muito mais confortável.",
        chaves: ["vestir", "formal", "confortável"],
        definicoes: {
          vestir: "As roupas que a gente escolhe pra usar no dia a dia.",
          formal: "Roupa arrumada e séria, pesada, com muitos detalhes.",
          confortável: "Que dá pra correr, brincar e se mexer sem apertar.",
        },
        fotoUrl: imgRoupas,
      },
      {
        id: "p3",
        texto:
          "Os transportes evoluíram também. Antes se andava a pé, de carroça ou a cavalo. Depois vieram os bondes, ônibus, carros e aviões — carregando muita gente rápido.",
        chaves: ["transportes", "evoluíram", "aviões"],
        definicoes: {
          transportes: "Meios que a gente usa pra ir de um lugar pro outro.",
          evoluíram: "Ficaram cada vez melhores e mais rápidos ao longo do tempo.",
          aviões: "Máquinas que voam no céu levando pessoas pra muito longe.",
        },
        fotoUrl: imgRoupas,
      },
      {
        id: "p4",
        texto:
          "Mas atenção: nem tudo desapareceu! Amarelinha, pula-corda, esconde-esconde e cinco-marias continuam vivos. São TRADIÇÕES que passam de pais pra filhos.",
        chaves: ["amarelinha", "tradições", "vivos"],
        definicoes: {
          amarelinha: "Jogo de pular casinhas desenhadas no chão com giz.",
          tradições: "Costumes que passam de geração em geração e não somem.",
          vivos: "Ainda usados por gente do presente, não desapareceram.",
        },
        fotoUrl: imgBrincadeiras,
      },
    ],
    falaFinal:
      "Leitura dos costumes concluída! Tecnologia muda muita coisa — mas as brincadeiras tradicionais resistem.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Guarda-Roupas do Tempo! Cada rodada mostra um costume. Você decide se é ANTIGO ou de HOJE.",
    instrucao: "⏱️ Leia a cena e toque na época certa antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "antigo", emoji: "📻", rotulo: "Costume antigo" },
      { id: "hoje", emoji: "📱", rotulo: "Costume de hoje" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Terno de sarja com chapéu de palha", emoji: "🎩", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Sapatos sociais de couro", emoji: "👞", cor: "from-yellow-600 to-amber-800" },
        contexto: "Menino de terno marrom, chapéu de palha e sapato de couro, indo pra festa em 1920. Antigo ou hoje?",
        pecaCertaId: "antigo",
        fotoUrl: imgRoupas,
        feedbackAcerto: "Combo! Terno formal + chapéu = costume ANTIGO.",
        feedbackErro: "Chapéu de palha e terno é ANTIGO. Hoje se usa roupa mais leve.",
      },
      {
        id: "r2",
        municipioA: { nome: "Mensagem instantânea no celular", emoji: "💬", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Vídeo chamada com a família", emoji: "📱", cor: "from-cyan-500 to-blue-700" },
        contexto: "Enviar uma mensagem que chega em 1 segundo do outro lado do mundo. Antigo ou hoje?",
        pecaCertaId: "hoje",
        fotoUrl: imgVitrola,
        feedbackAcerto: "Isso! Mensagem instantânea é costume de HOJE.",
        feedbackErro: "Antigamente a carta demorava DIAS. Instantâneo é HOJE.",
      },
      {
        id: "r3",
        municipioA: { nome: "Disco de vinil na vitrola", emoji: "💿", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Rádio gigante de madeira", emoji: "📻", cor: "from-yellow-600 to-amber-800" },
        contexto: "Família inteira sentada ouvindo um disco pesado tocar na vitrola de madeira. Antigo ou hoje?",
        pecaCertaId: "antigo",
        fotoUrl: imgRadio,
        feedbackAcerto: "Certeza! Vitrola + vinil = costume ANTIGO.",
        feedbackErro: "Disco de vinil é ANTIGO. Hoje é streaming no celular.",
      },
      {
        id: "r4",
        municipioA: { nome: "Viagem de avião", emoji: "✈️", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Streaming de música", emoji: "🎧", cor: "from-cyan-500 to-blue-700" },
        contexto: "Ir de um país pro outro em algumas horas de voo. Antigo ou hoje?",
        pecaCertaId: "hoje",
        fotoUrl: imgVitrola,
        feedbackAcerto: "Combo! Avião rápido é costume de HOJE.",
        feedbackErro: "Antigamente ia de navio, demorava meses. Avião é HOJE.",
      },
    ],
    falaFinal:
      "Guarda-Roupas do Tempo aprovado! Você separa costume antigo do costume de hoje.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos olhar os costumes divididos em duas fatias: o que MUDOU com a tecnologia e o que PERMANECEU como tradição.",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada parte",
    fotoUrl: imgRadio,
    fatias: [
      {
        id: "mudou",
        rotulo: "O que MUDOU",
        emoji: "⚡",
        percentual: 50,
        cor: "#f59e0b",
        descricao: "Roupa, transporte, comunicação e diversão viraram outros com a tecnologia nova.",
        exemplos: ["Vinil → streaming", "Carta → mensagem", "Cavalo → avião"],
        fotoUrl: imgVitrola,
      },
      {
        id: "ficou",
        rotulo: "O que PERMANECEU",
        emoji: "💫",
        percentual: 50,
        cor: "#ec4899",
        descricao: "Brincadeiras tradicionais e comidas típicas continuam vivas de pais pra filhos.",
        exemplos: ["Amarelinha", "Pula-corda", "Esconde-esconde"],
        fotoUrl: imgBrincadeiras,
      },
    ],
    falaFinal:
      "Duas fatias, um mundo só. Tecnologia muda o de fora — a tradição guarda o de dentro.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra recuperar a Engrenagem de DIAMANTE! 3 perguntas e o selo é seu.",
    instrucao: "Responda 3 perguntas rápidas pra ganhar o selo",
    fotoUrl: imgRadio,
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual costume MUDOU completamente com a tecnologia?",
        fotoUrl: imgVitrola,
        opcoes: [
          { id: "a", texto: "Esperar dias por uma carta virou mensagem instantânea no celular", correta: true },
          { id: "b", texto: "Dormir à noite e ficar acordado de dia" },
        ],
        feedbackAcerto: "Isso! A comunicação virou coisa de segundos.",
        feedbackErro: "Dormir de noite todo mundo sempre fez. O que mudou foi COMUNICAÇÃO.",
      },
      {
        id: "q2",
        pergunta: "Antigamente a família ouvia música…",
        fotoUrl: imgVitrola,
        opcoes: [
          { id: "a", texto: "Em vitrola tocando discos pesados de vinil", correta: true },
          { id: "b", texto: "Num aplicativo do celular" },
        ],
        feedbackAcerto: "Combo! Vinil + vitrola era o jeito antigo.",
        feedbackErro: "Aplicativo é MODERNO. Antigamente era vinil.",
      },
      {
        id: "q3",
        pergunta: "Qual dessas brincadeiras é uma TRADIÇÃO que permanece?",
        fotoUrl: imgBrincadeiras,
        opcoes: [
          { id: "a", texto: "Amarelinha, pula-corda e esconde-esconde", correta: true },
          { id: "b", texto: "Realidade virtual em óculos 3D" },
        ],
        feedbackAcerto: "Isso! Brincadeiras tradicionais atravessam gerações.",
        feedbackErro: "Óculos 3D é super novo. Tradição é a amarelinha, pula-corda.",
      },
    ],
    selo: {
      nome: "Engrenagem de Diamante",
      subtitulo: "6 de 7 engrenagens do Relógio do Tempo recuperada",
      emoji: "⚙️",
      cor: "from-cyan-400 to-sky-600",
      fotoUrl: imgFotoAntiga,
    },
    falaFinal:
      "Sala 6 do museu aberta: Viagem nos Costumes! Falta só UMA engrenagem pro Relógio funcionar!",
  },

  recompensa: { xp: 340, moedas: 170, medalha: "Engrenagem de Diamante" },
};
