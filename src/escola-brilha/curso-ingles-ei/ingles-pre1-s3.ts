import type { AulaIng } from "./types";
import { url as buddy } from "@/assets/ingles-1ano/u1-a06/buddy.png.asset.json";
import { url as pularCorda } from "@/assets/neuro-treino/objetos/pular-corda.png.asset.json";
import { url as criancaAndando } from "@/assets/neuro-treino/objetos/crianca-andando.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as abraco } from "@/assets/neuro-treino/objetos/abraco.png.asset.json";
import { url as lavarMaos } from "@/assets/neuro-treino/objetos/lavar-maos.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as futebol } from "@/assets/neuro-treino/objetos/futebol.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * Inglês EI — Pré I · Semana 3 · "Move with me!" — TPR puro
 * Método Asher (1969): comando + corpo. A criança executa antes de falar.
 */

const aula01: AulaIng = {
  slug: "s3-a01-jump",
  titulo: "Jump, jump!",
  subtitulo: "Semana 3 · Dia 1",
  icone: "🦘",
  duracaoMin: 9,
  baseCientifica:
    "Total Physical Response (Asher 1969): o comando motor grava a palavra na memória procedural antes da fala.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, friend! Hoje a gente vai MEXER o corpo! Primeira palavrinha: "jump"! "Jump" quer dizer PULAR. Ready? "Jump, jump, jump!".',
      legenda: "Levante e pule 3 vezes com a criança.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: pularCorda,
      versos: [
        { en: "Jump, jump, jump so high!", pt: "Pula, pula, pula bem alto!", gesto: "🦘" },
        { en: "Jump, jump, touch the sky!", pt: "Pula, pula, toca no céu!", gesto: "☁️" },
        { en: "One, two, three — JUMP!", pt: "Um, dois, três — PULA!", gesto: "⬆️" },
      ],
      legenda: "Pule em cada 'jump'.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura e imita o movimento: "jump", "run", "clap".',
      itens: [
        { en: "Jump", pt: "Pular", imagemUrl: pularCorda },
        { en: "Run", pt: "Correr", imagemUrl: criancaAndando },
        { en: "Clap", pt: "Bater palma", imagemUrl: festa },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais! Faz o movimento junto: "jump!", "run!", "clap!".',
      itens: [
        { en: "Jump high", pt: "Pula alto", imagemUrl: pularCorda },
        { en: "Run fast", pt: "Corre rápido", imagemUrl: criancaAndando },
        { en: "Clap clap", pt: "Palma palma", imagemUrl: festa },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque em "jump". Onde a criança está pulando?',
      palavraAlvoEn: "Jump",
      opcoes: [
        { nome: "criança pulando corda", imagemUrl: pularCorda, correta: true },
        { nome: "criança andando", imagemUrl: criancaAndando, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Jump" — pular alto!',
      feedbackErro: 'Escuta: "jump" é pular. Ache a criança pulando.',
    },
    {
      tipo: "historiaEn",
      titulo: "Sofia and the jump game",
      cenas: [
        {
          imagemUrl: sol,
          narracao:
            'Manhã ensolarada. Sofia sai pra brincar. Teacher Buddy diz: "Ready to jump?".',
        },
        {
          imagemUrl: pularCorda,
          narracao:
            'Ela pega uma corda e pula: "One — jump! Two — jump! Three — jump!".',
        },
        {
          imagemUrl: criancasGrupo,
          narracao:
            'Depois todos os amiguinhos pulam juntos: "Jump, jump, jump!". Que festa!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta o comando: "Clap!". O que é bater palma?',
      palavraAlvoEn: "Clap",
      opcoes: [
        { nome: "festa com palmas", imagemUrl: festa, correta: true },
        { nome: "pular corda", imagemUrl: pularCorda, correta: false },
        { nome: "andar", imagemUrl: criancaAndando, correta: false },
      ],
      feedbackAcerto: 'Isso! "Clap" — bate palma!',
      feedbackErro: '"Clap" é bater palma. Bate 2 vezes agora: clap clap!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: pularCorda,
      convite:
        'Vamos! Faça o Teacher Buddy game: quando eu disser "jump" você PULA. Quando disser "clap" você bate palma. Quando disser "run" você corre no lugar. Ready?',
      dica: "Comece devagar: jump — clap — run — jump!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: criancaAndando,
      pergunta:
        'Você prefere "jump" ou "run"? Mostra pra família qual é seu movimento favorito!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "TPR at home",
      convite:
        'Missão: brinca de comando em casa. O adulto fala "jump!", "run!", "clap!" e você faz. Trocam de lugar depois!',
      dicaAdulto: "10 comandos em 3 minutos já valem. Filme uma parte e cole no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Jump Star",
      mascoteUrl: buddy,
      falaFinal:
        'Wow! Você é uma "Jump Star"! Sabe "jump", "run" e "clap"!',
    },
  ],
};

const aula02: AulaIng = {
  slug: "s3-a02-dance",
  titulo: "Let's dance!",
  subtitulo: "Semana 3 · Dia 2",
  icone: "💃",
  duracaoMin: 9,
  baseCientifica:
    "Música + movimento (Patel 2011): ritmo consolida entonação nativa e ativa memória motora.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje a gente dança! "Dance" quer dizer DANÇAR. "Let\'s dance!" — vamos dançar!',
      legenda: "Balance o corpo ao ouvir 'dance'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: festa,
      versos: [
        { en: "Dance, dance, dance with me!", pt: "Dança, dança, dança comigo!", gesto: "💃" },
        { en: "Shake, shake — one, two, three!", pt: "Sacode, sacode — um, dois, três!", gesto: "🕺" },
        { en: "Let\'s dance, yeah!", pt: "Vamos dançar, ê!", gesto: "🎶" },
      ],
      legenda: "Balance o corpo em cada verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca e imita: "dance", "shake", "spin".',
      itens: [
        { en: "Dance", pt: "Dançar", imagemUrl: festa },
        { en: "Shake", pt: "Sacudir", imagemUrl: menino },
        { en: "Spin", pt: "Rodar", imagemUrl: menina },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais! "Dance, shake, spin"!',
      itens: [
        { en: "Dance slow", pt: "Dança devagar", imagemUrl: festa },
        { en: "Dance fast", pt: "Dança rápido", imagemUrl: menino },
        { en: "Spin around", pt: "Roda em volta", imagemUrl: menina },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Toque em "dance". Onde tem gente dançando?',
      palavraAlvoEn: "Dance",
      opcoes: [
        { nome: "festa dançando", imagemUrl: festa, correta: true },
        { nome: "bola", imagemUrl: bola, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Isso! "Dance" — dançar na festa!',
      feedbackErro: '"Dance" é DANÇAR. Ache a festa!',
    },
    {
      tipo: "historiaEn",
      titulo: "The dance party",
      cenas: [
        {
          imagemUrl: menino,
          narracao:
            'Sofia liga a música. Ela sacode o corpo: "Shake, shake!".',
        },
        {
          imagemUrl: menina,
          narracao:
            'Depois roda no meio da sala: "Spin, spin, spin!". Que tontura gostosa!',
        },
        {
          imagemUrl: festa,
          narracao:
            'Todo mundo dança junto: "Dance, dance, DANCE!". Uma festa!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "spin!". Onde alguém está rodando?',
      palavraAlvoEn: "Spin",
      opcoes: [
        { nome: "menina rodando", imagemUrl: menina, correta: true },
        { nome: "festa parada", imagemUrl: festa, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Spin" — rodar em volta!',
      feedbackErro: '"Spin" é rodar. Faz agora com o corpo!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: festa,
      convite:
        'Comando do Teacher Buddy: "Dance!" você dança. "Shake!" você sacode. "Spin!" você roda. Vou falar rápido: dance — shake — spin!',
      dica: "Solte a música que tem em casa e brinca 1 minutinho.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: festa,
      pergunta:
        'Qual sua música favorita pra dançar? Você prefere "shake" ou "spin"?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Family dance!",
      convite:
        'Missão: dance uma música com a família. A cada mudança, alguém grita um comando: "Shake!", "Spin!", "Jump!". Todos obedecem!',
      dicaAdulto: "Grave 30s da dança e cole no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Dance Star",
      mascoteUrl: buddy,
      falaFinal:
        'You did it! Você é uma "Dance Star"! Sabe "dance", "shake" e "spin"!',
    },
  ],
};

const aula03: AulaIng = {
  slug: "s3-a03-touch",
  titulo: "Touch your head!",
  subtitulo: "Semana 3 · Dia 3",
  icone: "🙋",
  duracaoMin: 9,
  baseCientifica:
    "TPR + partes do corpo (Asher): 'touch your X' é o comando clássico do método. A criança aponta antes de nomear.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje vamos tocar o corpo! "Touch" quer dizer TOCAR. "Touch your head!" — toca a cabecinha!',
      legenda: "Toque a cabeça ao ouvir 'head'.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: menino,
      versos: [
        { en: "Touch your head, touch your nose!", pt: "Toca a cabeça, toca o nariz!", gesto: "🙋" },
        { en: "Touch your hands, touch your toes!", pt: "Toca as mãos, toca os pés!", gesto: "👐" },
        { en: "Touch, touch, touch!", pt: "Toca, toca, toca!", gesto: "👆" },
      ],
      legenda: "Toque cada parte ao ouvir a palavra.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura e imita: "head", "hands", "feet".',
      itens: [
        { en: "Head", pt: "Cabeça", imagemUrl: menino },
        { en: "Hands", pt: "Mãos", imagemUrl: lavarMaos },
        { en: "Feet", pt: "Pés", imagemUrl: menina },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Repete tocando o próprio corpo: "head!", "hands!", "feet!".',
      itens: [
        { en: "Touch your head", pt: "Toca a cabeça", imagemUrl: menino },
        { en: "Wave your hands", pt: "Acena com as mãos", imagemUrl: lavarMaos },
        { en: "Move your feet", pt: "Mexe os pés", imagemUrl: menina },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "hands!". Onde estão as mãos?',
      palavraAlvoEn: "Hands",
      opcoes: [
        { nome: "mãos lavando", imagemUrl: lavarMaos, correta: true },
        { nome: "cabeça", imagemUrl: menino, correta: false },
        { nome: "pés", imagemUrl: menina, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Hands" — mãos!',
      feedbackErro: '"Hands" é mãos. Aponta pras suas mãos!',
    },
    {
      tipo: "historiaEn",
      titulo: "Touch, touch, touch",
      cenas: [
        {
          imagemUrl: menino,
          narracao:
            'Teacher Buddy diz: "Touch your head!". Sofia coloca as duas mãos na cabecinha.',
        },
        {
          imagemUrl: lavarMaos,
          narracao:
            'Depois: "Wash your hands!". Sofia corre lavar as mãos com sabonete.',
        },
        {
          imagemUrl: menina,
          narracao:
            'Por último: "Stomp your feet!". Sofia bate os pés no chão: stomp-stomp-stomp!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "head!". Aponta pra cabeça na imagem.',
      palavraAlvoEn: "Head",
      opcoes: [
        { nome: "cabeça do menino", imagemUrl: menino, correta: true },
        { nome: "pés", imagemUrl: menina, correta: false },
        { nome: "coração", imagemUrl: coracao, correta: false },
      ],
      feedbackAcerto: 'Yes! "Head" — cabeça!',
      feedbackErro: '"Head" é cabeça. Toca sua cabecinha!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: menino,
      convite:
        'Simon Says! Teacher Buddy fala e você faz: "Touch your head!", "Touch your hands!", "Touch your feet!", "Touch your nose!".',
      dica: "Rápido, um comando atrás do outro.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: lavarMaos,
      pergunta:
        'Qual parte do corpo você mais gosta? "Head"? "Hands"? "Feet"? Aponta e fala!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Simon Says in English",
      convite:
        'Missão: brinca de Simon Says com a família. O adulto fala "Simon says touch your head!" e todos obedecem. Trocam de lugar!',
      dicaAdulto: "Vale filmar 30s e colar no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Body Star",
      mascoteUrl: buddy,
      falaFinal:
        'Fantastic! Você é uma "Body Star"! Sabe "head", "hands" e "feet"!',
    },
  ],
};

const aula04: AulaIng = {
  slug: "s3-a04-wave",
  titulo: "Wave and hug!",
  subtitulo: "Semana 3 · Dia 4",
  icone: "👋",
  duracaoMin: 9,
  baseCientifica:
    "Gestos sociais (Vygotsky): 'wave', 'hug' e 'high five' são ações socioafetivas — memória emocional forte.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi! Hoje aprendemos gestos de amigo. "Wave" quer dizer ACENAR. "Hug" quer dizer ABRAÇAR. Wave and hug!',
      legenda: "Acene ao ouvir 'wave' e faça abraço no ar.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: abraco,
      versos: [
        { en: "Wave your hand, say hello!", pt: "Acena com a mão, diz oi!", gesto: "👋" },
        { en: "Hug your friend, don\'t let go!", pt: "Abraça o amigo, não solta!", gesto: "🤗" },
        { en: "Wave and hug, yeah yeah!", pt: "Acena e abraça, ê ê!", gesto: "🎶" },
      ],
      legenda: "Acene + abrace o ar em cada verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Toca em cada figura e imita: "wave", "hug", "high five".',
      itens: [
        { en: "Wave", pt: "Acenar", imagemUrl: lavarMaos },
        { en: "Hug", pt: "Abraçar", imagemUrl: abraco },
        { en: "High five", pt: "Bate aqui", imagemUrl: criancasGrupo },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Uma vez mais, cheio de energia! "Wave!", "Hug!", "High five!"',
      itens: [
        { en: "Wave hello", pt: "Acena oi", imagemUrl: lavarMaos },
        { en: "Big hug", pt: "Abraço grande", imagemUrl: abraco },
        { en: "High five friend", pt: "Bate aqui amigo", imagemUrl: criancasGrupo },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "hug!". Onde tem gente abraçando?',
      palavraAlvoEn: "Hug",
      opcoes: [
        { nome: "abraço", imagemUrl: abraco, correta: true },
        { nome: "acenar", imagemUrl: lavarMaos, correta: false },
        { nome: "bola", imagemUrl: bola, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Hug" — abraço apertado!',
      feedbackErro: '"Hug" é abraço. Faz um agora no ar!',
    },
    {
      tipo: "historiaEn",
      titulo: "Wave, hug, high five",
      cenas: [
        {
          imagemUrl: lavarMaos,
          narracao:
            'Sofia chega na escola. Ela acena pra Teacher: "Wave! Hello, Teacher!".',
        },
        {
          imagemUrl: abraco,
          narracao:
            'Encontra a melhor amiga. Elas se abraçam: "Big hug! I missed you!".',
        },
        {
          imagemUrl: criancasGrupo,
          narracao:
            'No fim do dia, todos batem "high five": one, two, three, four, five — high five!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "wave!". Onde a mão está acenando?',
      palavraAlvoEn: "Wave",
      opcoes: [
        { nome: "mão acenando", imagemUrl: lavarMaos, correta: true },
        { nome: "abraço", imagemUrl: abraco, correta: false },
        { nome: "grupo de crianças", imagemUrl: criancasGrupo, correta: false },
      ],
      feedbackAcerto: 'Isso! "Wave" — acenar tchau!',
      feedbackErro: '"Wave" é acenar. Mexe a mão pro alto agora!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: abraco,
      convite:
        'Vai fazer 3 coisas: "wave" pra alguém (acena!), "hug" em alguém (abraço!), "high five" com alguém (bate!). Ready?',
      dica: "Pode ser com boneca, se estiver sozinho.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: abraco,
      pergunta:
        'Você prefere "hug" ou "high five"? Quem você mais gosta de abraçar em casa?',
    },
    {
      tipo: "missaoFamilia",
      titulo: "Wave, hug, high five day",
      convite:
        'Missão: hoje, dê "wave", "hug" e "high five" em cada pessoa da família. Fala em inglês antes de cada gesto!',
      dicaAdulto: "Fotografe o abraço final e cole no álbum.",
    },
    {
      tipo: "celebracao",
      medalha: "Friend Star",
      mascoteUrl: buddy,
      falaFinal:
        'Amazing! Você é uma "Friend Star"! Wave, hug and high five!',
    },
  ],
};

const aula05: AulaIng = {
  slug: "s3-a05-move-review",
  titulo: "Move it all!",
  subtitulo: "Semana 3 · Dia 5",
  icone: "🎉",
  duracaoMin: 10,
  baseCientifica:
    "Prática distribuída (Rohrer 2012): revisão intercalada de todas as ações da semana mistura comandos e fixa a memória procedural.",
  momentos: [
    {
      tipo: "boasVindas",
      mascoteUrl: buddy,
      falaMascote:
        'Hi, superstar! Formatura da semana do movimento! Vamos revisar TUDO: "jump", "clap", "dance", "spin", "hug", "wave"! Ready? GO!',
      legenda: "Prepare-se pra mexer o corpo várias vezes.",
    },
    {
      tipo: "musicaEn",
      imagemUrl: futebol,
      versos: [
        { en: "Jump, clap, dance, spin!", pt: "Pula, palma, dança, roda!", gesto: "🕺" },
        { en: "Wave your hands and give a hug!", pt: "Acena e dá um abraço!", gesto: "🤗" },
        { en: "Move, move, move it all!", pt: "Mexe, mexe, mexe tudo!", gesto: "🎉" },
      ],
      legenda: "Faça cada movimento no verso.",
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Revisão! Toca e imita: "jump", "dance", "wave".',
      itens: [
        { en: "Jump", pt: "Pular", imagemUrl: pularCorda },
        { en: "Dance", pt: "Dançar", imagemUrl: festa },
        { en: "Wave", pt: "Acenar", imagemUrl: lavarMaos },
      ],
    },
    {
      tipo: "vocabEn",
      instrucaoAudio: 'Mais! "Clap, hug, spin"!',
      itens: [
        { en: "Clap", pt: "Bater palma", imagemUrl: criancasGrupo },
        { en: "Hug", pt: "Abraçar", imagemUrl: abraco },
        { en: "Spin", pt: "Rodar", imagemUrl: menina },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "jump!". Aponta pra criança pulando.',
      palavraAlvoEn: "Jump",
      opcoes: [
        { nome: "pular corda", imagemUrl: pularCorda, correta: true },
        { nome: "abraço", imagemUrl: abraco, correta: false },
        { nome: "acenar", imagemUrl: lavarMaos, correta: false },
      ],
      feedbackAcerto: 'Perfect! "Jump" — pular!',
      feedbackErro: 'Escuta de novo: "jump" é pular.',
    },
    {
      tipo: "historiaEn",
      titulo: "The big party",
      cenas: [
        {
          imagemUrl: festa,
          narracao:
            'Festa na casa da Sofia! Todos os amigos chegam. Ela acena: "Wave! Welcome!".',
        },
        {
          imagemUrl: abraco,
          narracao:
            'Grande abraço em grupo: "Big hug!". Todo mundo junto.',
        },
        {
          imagemUrl: criancasGrupo,
          narracao:
            'A música toca. Todos: "Jump! Dance! Spin! Clap!". Que festa incrível!',
        },
      ],
    },
    {
      tipo: "escolhaImagem",
      instrucaoAudio: 'Escuta: "hug!". Onde tem abraço?',
      palavraAlvoEn: "Hug",
      opcoes: [
        { nome: "abraço", imagemUrl: abraco, correta: true },
        { nome: "pular corda", imagemUrl: pularCorda, correta: false },
        { nome: "sol", imagemUrl: sol, correta: false },
      ],
      feedbackAcerto: 'Isso! "Hug" — abraço apertado!',
      feedbackErro: '"Hug" é abraçar. Abraça alguém!',
    },
    {
      tipo: "fazDeConta",
      imagemUrl: festa,
      convite:
        'Formatura! Teacher Buddy vai gritar 6 comandos rápidos: "Jump — clap — dance — spin — wave — hug!". Você faz tudo!',
      dica: "Bem energético. Termine com abraço bem apertado.",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: futebol,
      pergunta:
        'Qual movimento você mais gostou essa semana? Mostra pra família em inglês!',
    },
    {
      tipo: "missaoFamilia",
      titulo: "TPR party!",
      convite:
        'Missão de formatura: faz uma mini-festa em casa com toda a família. Alguém grita os 6 comandos e todos fazem. Depois trocam.',
      dicaAdulto:
        "Grave 30s da festa e cole no álbum — formatura da Semana 3!",
    },
    {
      tipo: "celebracao",
      medalha: "Move Star — Semana 3 Pré I",
      mascoteUrl: buddy,
      falaFinal:
        'You did it! Você move o corpo em inglês! Jump, clap, dance, spin, wave, hug! Você é uma "Move Star"!',
    },
  ],
};

export const semana3Pre1: AulaIng[] = [aula01, aula02, aula03, aula04, aula05];
