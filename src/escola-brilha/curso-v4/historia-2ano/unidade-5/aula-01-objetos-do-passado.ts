import type { AulaGeoV1 } from "../../types";
import imgFerro from "@/assets/historia-2ano/ferro-carvao.png";
import imgMaquina from "@/assets/historia-2ano/maquina-escrever.png";
import imgCarta from "@/assets/historia-2ano/carta-antiga.png";
import imgTelefone from "@/assets/historia-2ano/telefone-disco.png";
import imgFotoAntiga from "@/assets/historia-2ano/foto-antiga.png";

/**
 * História · 2º Ano · Unidade 5 · Aula 01
 * "Descobrindo Objetos do Passado" — EF02HI04 + EF02HI05
 *
 * Missão: classificar fontes históricas e montar a Sala 5
 * do museu — Pequeno Museu Digital. Recompensa: Engrenagem de Titânio.
 */

export const aula01: AulaGeoV1 = {
  slug: "aula-01-objetos-do-passado",
  titulo: "Descobrindo Objetos do Passado",
  iconeTrilha: "🏛️",
  bncc: ["EF02HI04", "EF02HI05"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA na caixa de tesouros. Descubra os OBJETOS que a professora Aurora entregou ao Brilha.",
    mapaUrl: imgMaquina,
    imagemDestaqueUrl: imgCarta,
    aurora:
      "Pequeno Historiador, a professora Aurora entregou uma caixa trancada. Dentro havia uma carta escrita com pena, um relógio de bolso dourado e um brinquedo de madeira. Parabéns — você acabou de encontrar um tesouro cheio de FONTES HISTÓRICAS!",
    falaFinal:
      "Cada objeto conta uma história. O trabalho do historiador é olhar com atenção e descobrir o segredo de cada um.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar, quero seu palpite. Se você quer descobrir como as pessoas se comunicavam ANTES de existir celular e internet, o que você examina?",
    pergunta: "Qual fonte histórica ajuda a estudar como as pessoas se comunicavam?",
    fotoUrl: imgCarta,
    opcoes: [
      {
        id: "carta",
        titulo: "Cartas antigas escritas à mão",
        subtitulo: "enviadas pelos correios",
        emoji: "✉️",
        cor: "from-amber-400 to-orange-600",
        fotoUrl: imgCarta,
      },
      {
        id: "video",
        titulo: "Vídeo do YouTube de hoje",
        subtitulo: "gravado no celular",
        emoji: "📱",
        cor: "from-sky-400 to-indigo-600",
        fotoUrl: imgTelefone,
      },
    ],
    respostaCerta: "carta",
    feedbackAcerto:
      "Isso! Nas cartas antigas as pessoas escreviam mensagens à mão e mandavam pelo correio. Levava dias!",
    feedbackErro:
      "YouTube é MUITO recente. Pra estudar antes do celular a gente olha CARTAS antigas.",
    falaFinal:
      "Guarda essa ideia: objeto antigo é PROVA do passado. Vamos aprender as palavras do historiador de objetos.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três cadernos abertos do historiador de objetos. Cada um mostra um TIPO de fonte histórica.",
    instrucao: "Leia os cadernos abertos",
    cadernos: [
      {
        id: "material",
        capa: "Fonte Material",
        emoji: "🏺",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgFerro,
        conteudo:
          "Fontes Materiais são OBJETOS que as pessoas do passado deixaram: roupas, brinquedos, moedas, ferramentas, construções.",
        exemplo: "Ferro de passar a carvão, boneca de pano antiga.",
      },
      {
        id: "escrita",
        capa: "Fonte Escrita",
        emoji: "📜",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgCarta,
        conteudo:
          "Fontes Escritas são TEXTOS deixados pelas pessoas: cartas, diários, jornais antigos, certidões e livros.",
        exemplo: "Uma carta de 1920 com selo de correio.",
      },
      {
        id: "oral",
        capa: "Fonte Oral",
        emoji: "🎙️",
        cor: "from-rose-500 to-pink-700",
        fotoUrl: imgTelefone,
        conteudo:
          "Fontes Orais são HISTÓRIAS CONTADAS de boca em boca: memórias dos idosos, entrevistas, cantigas antigas.",
        exemplo: "Sua vovó contando como era a infância dela.",
      },
    ],
    falaFinal:
      "Material, Escrita e Oral — os 3 tipos de fonte histórica que todo pesquisador precisa conhecer.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Esta é a mesa do museu com objetos antigos. Toca em cada balão que eu conto o que é.",
    instrucao: "Toque em cada balão pra ouvir a Aurora contar",
    mapaUrl: imgMaquina,
    pontos: [
      {
        id: "teclas",
        x: 50,
        y: 65,
        emoji: "⚙️",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgMaquina,
        titulo: "Teclas redondas de metal",
        texto:
          "A máquina de escrever tinha teclas redondas de METAL. Cada tecla era um martelo que batia no papel com uma letra.",
      },
      {
        id: "fita",
        x: 80,
        y: 30,
        emoji: "🎗️",
        cor: "from-rose-500 to-red-700",
        fotoUrl: imgMaquina,
        titulo: "Fita de tinta",
        texto:
          "Não tinha cartucho. Era uma FITA DE TINTA que ia gastando com o uso. Quando acabava, trocava por outra.",
      },
      {
        id: "sem-tela",
        x: 25,
        y: 25,
        emoji: "🚫",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgMaquina,
        titulo: "Sem tela digital",
        texto:
          "Não existia tela nem tecla apagar. Se errava a letra, tinha que RECOMEÇAR a página toda no papel novo.",
      },
    ],
    falaFinal:
      "Uma máquina inteira de metal só pra escrever. Hoje a gente digita no celular numa tela!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do historiador de objetos ligado! 3 perguntas — toca no card certo.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Um diário pessoal escrito em 1920 é um exemplo de…",
        fotoUrl: imgCarta,
        cards: [
          { id: "e", emoji: "📜", titulo: "Fonte Escrita", cor: "from-emerald-400 to-teal-600" },
          { id: "m", emoji: "🏺", titulo: "Fonte Material", cor: "from-amber-400 to-orange-600" },
          { id: "o", emoji: "🎙️", titulo: "Fonte Oral", cor: "from-rose-400 to-red-600" },
        ],
        correta: "e",
        feedbackAcerto: "Isso! Diário escrito à mão = FONTE ESCRITA.",
        feedbackErro: "Diário é TEXTO escrito. Isso é Fonte Escrita.",
      },
      {
        id: "q2",
        pergunta: "Um urso de pelúcia antigo, gasto pelo uso, é…",
        fotoUrl: imgFerro,
        cards: [
          { id: "m", emoji: "🧸", titulo: "Fonte Material", cor: "from-amber-400 to-orange-600" },
          { id: "e", emoji: "📜", titulo: "Fonte Escrita", cor: "from-emerald-400 to-teal-600" },
        ],
        correta: "m",
        feedbackAcerto: "Combo! Objeto = FONTE MATERIAL.",
        feedbackErro: "Urso é OBJETO. Isso é Fonte Material.",
      },
      {
        id: "q3",
        pergunta: "Gravação da vovó contando uma história é…",
        fotoUrl: imgTelefone,
        cards: [
          { id: "o", emoji: "🎙️", titulo: "Fonte Oral", cor: "from-rose-400 to-red-600" },
          { id: "e", emoji: "📜", titulo: "Fonte Escrita", cor: "from-emerald-400 to-teal-600" },
          { id: "m", emoji: "🏺", titulo: "Fonte Material", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "o",
        feedbackAcerto: "Isso! Voz contando = FONTE ORAL.",
        feedbackErro: "Voz da vovó é história FALADA. Isso é Fonte Oral.",
      },
    ],
    falaFinal:
      "Radar afinado! Você já sabe classificar as fontes históricas.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou te dar dois interruptores: um acende o ferro de passar de ANTIGAMENTE, o outro o ferro de HOJE. Vê como um objeto evolui!",
    instrucao: "Toque nos interruptores pra ver cada época",
    mapaUrl: imgFerro,
    camadas: [
      {
        id: "antigo",
        rotulo: "Ferro a carvão (antigo)",
        emoji: "🔥",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 5, y: 20, w: 45, h: 60 },
        descricao:
          "Ferro de FERRO FUNDIDO, muito pesado. Precisava colocar carvão em BRASA dentro. Muito perigoso e demorado.",
      },
      {
        id: "novo",
        rotulo: "Ferro elétrico (hoje)",
        emoji: "⚡",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 20, w: 40, h: 60 },
        descricao:
          "Ferro leve de plástico, ligado na tomada. Esquenta em 1 minuto. Muito mais seguro e prático.",
      },
    ],
    falaFinal:
      "Mesmo objeto, duas épocas. É assim que a tecnologia transforma nossa vida.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos montar a linha do tempo dos objetos de escrever e se comunicar. Toca em cada parada na ordem certa.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como as pessoas escreveram e conversaram no tempo?",
    paradas: [
      {
        id: "carta",
        emoji: "✉️",
        rotulo: "Carta com pena",
        fotoUrl: imgCarta,
        descricao: "Antigamente: escrita à mão com caneta de pena e enviada pelo correio.",
      },
      {
        id: "maquina",
        emoji: "⚙️",
        rotulo: "Máquina de escrever",
        fotoUrl: imgMaquina,
        descricao: "Depois: máquina mecânica com teclas de metal batendo no papel.",
      },
      {
        id: "telefone",
        emoji: "📞",
        rotulo: "Telefone de disco",
        fotoUrl: imgTelefone,
        descricao: "Chegou o telefone de disco: falar com alguém longe pela primeira vez.",
      },
      {
        id: "celular",
        emoji: "📱",
        rotulo: "Celular",
        fotoUrl: imgTelefone,
        descricao: "Hoje: celular no bolso, mensagem em segundos.",
      },
    ],
    ordemCerta: ["carta", "maquina", "telefone", "celular"],
    feedbackAcerto:
      "Linha completa! Da carta ao celular, cada invenção deixou tudo mais rápido.",
    feedbackErro: "Essa não é a próxima. Pensa: o que veio ANTES?",
    falaFinal:
      "A comunicação foi mudando: carta → máquina → telefone → celular.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez. Eu fico calada. Você lê o Diário do Museu com seus próprios olhos.",
    tituloLivro: "📔 Diário do Pequeno Museu Digital",
    subtitulo: "Página 5 — As pistas que o passado deixou",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Nem tudo o que aconteceu no passado desapareceu. Muita coisa ficou! A gente descobre a história através das FONTES HISTÓRICAS — pistas que as pessoas deixaram.",
        chaves: ["fontes", "pistas", "passado"],
        definicoes: {
          fontes: "Tudo que ajuda o historiador a descobrir o que aconteceu antes.",
          pistas: "Sinais e marcas que contam alguma coisa sobre o tempo antigo.",
          passado: "O tempo que já aconteceu — ontem, semana passada, séculos atrás.",
        },
        fotoUrl: imgCarta,
      },
      {
        id: "p2",
        texto:
          "As FONTES MATERIAIS são objetos: brinquedos velhos, roupas antigas, moedas, ferramentas, prédios. Tudo o que a gente pode PEGAR NA MÃO conta uma história.",
        chaves: ["materiais", "objetos", "ferramentas"],
        definicoes: {
          materiais: "Fontes que são COISAS físicas, que dá pra pegar.",
          objetos: "Brinquedos, roupas, panelas — tudo que a gente usa no dia a dia.",
          ferramentas: "Coisas que ajudam a fazer alguma tarefa: martelo, agulha, ferro.",
        },
        fotoUrl: imgFerro,
      },
      {
        id: "p3",
        texto:
          "As FONTES ESCRITAS são textos: cartas, diários, jornais antigos, certidões. Todas as palavras registradas em papel também são pistas do tempo antigo.",
        chaves: ["escritas", "cartas", "jornais"],
        definicoes: {
          escritas: "Fontes com PALAVRAS escritas em papel ou pedra.",
          cartas: "Mensagens escritas à mão que uma pessoa manda pra outra.",
          jornais: "Papel que traz notícias do que está acontecendo no mundo.",
        },
        fotoUrl: imgMaquina,
      },
      {
        id: "p4",
        texto:
          "E tem as FONTES ORAIS: histórias que a vovó, o vovô e os mais velhos contam. Cantigas antigas, entrevistas gravadas — tudo isso é memória VIVA.",
        chaves: ["orais", "memória", "vovó"],
        definicoes: {
          orais: "Fontes FALADAS, contadas de boca em boca.",
          memória: "Tudo que a gente lembra e passa pros outros.",
          vovó: "A mãe da sua mãe ou do seu pai — pessoa cheia de histórias.",
        },
        fotoUrl: imgTelefone,
      },
    ],
    falaFinal:
      "Leitura de historiador! Você já sabe: Materiais, Escritas e Orais — os 3 tipos de fonte histórica.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Scanner Histórico! Cada rodada mostra uma fonte. Você lê e toca no TIPO CERTO antes do tempo acabar!",
    instrucao: "⏱️ Leia a fonte e toque no tipo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "material", emoji: "🏺", rotulo: "Fonte Material" },
      { id: "escrita", emoji: "📜", rotulo: "Fonte Escrita" },
      { id: "oral", emoji: "🎙️", rotulo: "Fonte Oral" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Ferro de passar a carvão", emoji: "🔥", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Objeto de metal antigo", emoji: "⚙️", cor: "from-yellow-600 to-amber-800" },
        contexto: "Um ferro pesado de ferro fundido, com carvão em brasa dentro. Que tipo de fonte?",
        pecaCertaId: "material",
        fotoUrl: imgFerro,
        feedbackAcerto: "Combo! Objeto = Fonte MATERIAL.",
        feedbackErro: "Ferro é OBJETO — Fonte Material.",
      },
      {
        id: "r2",
        municipioA: { nome: "Carta escrita à mão em 1920", emoji: "✉️", cor: "from-emerald-500 to-teal-700" },
        municipioB: { nome: "Papel com tinta e selo antigo", emoji: "📜", cor: "from-green-600 to-emerald-800" },
        contexto: "Uma carta amarelada escrita à mão com caneta de pena. Que tipo de fonte?",
        pecaCertaId: "escrita",
        fotoUrl: imgCarta,
        feedbackAcerto: "Isso! Texto escrito = Fonte ESCRITA.",
        feedbackErro: "Carta é TEXTO. É Fonte Escrita.",
      },
      {
        id: "r3",
        municipioA: { nome: "Áudio da vovó contando história", emoji: "🎙️", cor: "from-rose-500 to-red-700" },
        municipioB: { nome: "Voz gravada em memória", emoji: "🗣️", cor: "from-pink-600 to-rose-800" },
        contexto: "Uma gravação em áudio da vovó contando como era a infância dela. Que tipo de fonte?",
        pecaCertaId: "oral",
        fotoUrl: imgTelefone,
        feedbackAcerto: "Certeza! Voz gravada = Fonte ORAL.",
        feedbackErro: "Voz falada é Fonte ORAL.",
      },
      {
        id: "r4",
        municipioA: { nome: "Máquina de escrever antiga", emoji: "⚙️", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Objeto mecânico do museu", emoji: "🛠️", cor: "from-yellow-600 to-amber-800" },
        contexto: "Uma máquina de escrever de 1930, com teclas de metal e fita de tinta. Que tipo de fonte?",
        pecaCertaId: "material",
        fotoUrl: imgMaquina,
        feedbackAcerto: "Combo! Máquina = OBJETO = Fonte Material.",
        feedbackErro: "Máquina é objeto físico — Fonte Material.",
      },
    ],
    falaFinal:
      "Scanner Histórico calibrado! Você já classifica cada tipo de fonte na hora.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos olhar o museu dividido em duas fatias: fontes que a gente PEGA (materiais) e fontes que a gente LÊ ou OUVE (escritas + orais).",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada parte",
    fotoUrl: imgMaquina,
    fatias: [
      {
        id: "material",
        rotulo: "Fontes que a gente PEGA",
        emoji: "🏺",
        percentual: 50,
        cor: "#f59e0b",
        descricao: "Objetos físicos que dá pra pegar na mão: brinquedos, roupas, moedas, ferramentas, prédios.",
        exemplos: ["Ferro a carvão", "Boneca antiga", "Máquina de escrever"],
        fotoUrl: imgFerro,
      },
      {
        id: "palavra",
        rotulo: "Fontes que a gente LÊ ou OUVE",
        emoji: "📜",
        percentual: 50,
        cor: "#10b981",
        descricao: "Palavras deixadas em papel (cartas, diários, jornais) ou faladas pelos mais velhos (memórias, cantigas, entrevistas).",
        exemplos: ["Carta de 1920", "Vovó contando", "Jornal antigo"],
        fotoUrl: imgCarta,
      },
    ],
    falaFinal:
      "Três fatias, um museu só. Cada fonte revela uma parte diferente do passado.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra recuperar a Engrenagem de TITÂNIO! 3 perguntas e o selo é seu.",
    instrucao: "Responda 3 perguntas rápidas pra ganhar o selo",
    fotoUrl: imgMaquina,
    perguntas: [
      {
        id: "q1",
        pergunta: "O que são fontes históricas?",
        fotoUrl: imgCarta,
        opcoes: [
          { id: "a", texto: "Pistas, objetos, documentos e relatos deixados por pessoas do passado", correta: true },
          { id: "b", texto: "Só livros novos comprados nas livrarias" },
        ],
        feedbackAcerto: "Perfeito! Tudo que o ser humano deixa como marca no mundo é fonte histórica.",
        feedbackErro: "Livro NOVO fala do presente. Fonte histórica é pista do PASSADO.",
      },
      {
        id: "q2",
        pergunta: "Uma carta escrita à mão em 1920 é fonte…",
        fotoUrl: imgCarta,
        opcoes: [
          { id: "a", texto: "Escrita", correta: true },
          { id: "b", texto: "Oral" },
        ],
        feedbackAcerto: "Isso! Texto no papel = Fonte Escrita.",
        feedbackErro: "Carta é ESCRITA, não falada. É Fonte Escrita.",
      },
      {
        id: "q3",
        pergunta: "Sua vovó contando como era a infância dela é fonte…",
        fotoUrl: imgTelefone,
        opcoes: [
          { id: "a", texto: "Oral", correta: true },
          { id: "b", texto: "Material" },
        ],
        feedbackAcerto: "Combo! Voz falada é FONTE ORAL — memória viva.",
        feedbackErro: "A vovó tá FALANDO, não é um objeto. É Fonte Oral.",
      },
    ],
    selo: {
      nome: "Engrenagem de Titânio",
      subtitulo: "5 de 7 engrenagens do Relógio do Tempo recuperada",
      emoji: "⚙️",
      cor: "from-slate-400 to-slate-600",
      fotoUrl: imgFotoAntiga,
    },
    falaFinal:
      "Sala 5 do museu aberta: Pequeno Museu Digital! Quinta engrenagem no lugar!",
  },

  recompensa: { xp: 320, moedas: 160, medalha: "Engrenagem de Titânio" },
};
