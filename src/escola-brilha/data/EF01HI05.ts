import type { Aula } from "../types";
import { url as bauImg } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as pipaImg } from "@/assets/neuro-treino/objetos/pipa.png.asset.json";
import { url as ioioImg } from "@/assets/neuro-treino/objetos/ioio.png.asset.json";
import { url as futebolImg } from "@/assets/neuro-treino/objetos/futebol.png.asset.json";
import { url as pularCordaImg } from "@/assets/neuro-treino/objetos/pular-corda.png.asset.json";
import { url as quebraCabecaImg } from "@/assets/neuro-treino/objetos/quebra-cabeca.png.asset.json";
import { url as tabletImg } from "@/assets/neuro-treino/objetos/tablet.png.asset.json";
import { url as videogameImg } from "@/assets/neuro-treino/objetos/videogame.png.asset.json";
import { url as bonecaPanoImg } from "@/assets/neuro-treino/objetos/boneca-pano.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as festaImg } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as criancasImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as meninoImg } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as patioImg } from "@/assets/neuro-treino/objetos/patio-escola.png.asset.json";
import { url as quadraImg } from "@/assets/neuro-treino/objetos/quadra-esportiva.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";

/**
 * EF01HI05 — História · 1º Ano
 * Missão: "As Brincadeiras de Ontem e de Hoje".
 * Identificar semelhanças e diferenças entre jogos e brincadeiras atuais e
 * de outras épocas e lugares.
 */
const aula: Aula = {
  codigo: "EF01HI05",
  ano: "1º Ano",
  disciplina: "História",
  titulo: "As Brincadeiras de Ontem e de Hoje",

  narrativa: {
    titulo: "O Baú Das Brincadeiras",
    contexto:
      "Brilha estava explorando o SÓTÃO da Escola das Estrelas quando encontrou um BAÚ MISTERIOSO ✨. Ao abrir, brinquedos antigos e modernos apareceram todos misturados!",
    problema:
      "A Coruja Sábia explicou: 'As brincadeiras também têm HISTÓRIA. Algumas existem há muito tempo, outras surgiram recentemente. Ajude o Brilha a organizar o baú e descobrir a história de cada brincadeira!'",
    convite: "Bora abrir o Baú das Brincadeiras com o Brilha?",
  },

  conhecimentosPrevios: [
    "Reconhecer brinquedos e jogos comuns do dia a dia.",
    "Saber que brincar é uma forma de aprender.",
  ],

  missao:
    "Reconhecer que as brincadeiras fazem parte da história das pessoas, percebendo que algumas permanecem ao longo do tempo enquanto outras mudam.",

  objetivos: [
    "Reconhecer brincadeiras de diferentes épocas.",
    "Comparar brincadeiras antigas e atuais.",
    "Compreender que brincadeiras fazem parte da cultura e da história.",
    "Valorizar o brincar em grupo.",
    "Respeitar diferentes preferências de brincadeiras.",
  ],

  motivacao:
    "Cada brincadeira conta uma história — dos avós, dos pais, dos amigos. E você já faz parte dessa história! 🎁",

  explicacao:
    "🪁 Brincadeiras TRADICIONAIS existem há muitos anos (pipa, ioiô, pular corda, boneca de pano).\n📱 Brincadeiras ATUAIS surgiram há pouco tempo (tablet, videogame, jogos digitais).\n⚽ Algumas brincadeiras ATRAVESSAM O TEMPO — como futebol e esconde-esconde.\n👨‍👩‍👧 Muitas passaram dos AVÓS pros pais e chegaram até você.\n🤝 O importante é brincar, respeitar e se divertir juntos.",

  explicacoesNiveis: {
    nivel1: "Brincar faz parte da vida das crianças.",
    nivel2: "Existem brincadeiras antigas e brincadeiras novas.",
    nivel3: "Algumas brincadeiras vieram dos avós e continuam até hoje.",
    nivel4: "Respeitar a brincadeira do outro é respeitar a história dele.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha viu uma criança PULANDO CORDA no pátio. Essa brincadeira é antiga ou nova?",
    passos: [
      "Os avós e bisavós já pulavam corda quando eram crianças.",
      "Hoje as crianças ainda pulam corda.",
      "Ela ATRAVESSOU o tempo — é tradicional.",
    ],
    resposta: "🪢 PULAR CORDA é uma brincadeira TRADICIONAL — e ainda diverte hoje!",
  },

  atividadeGuiada: {
    enunciado: "Qual dessas é uma brincadeira TRADICIONAL?",
    resposta: "🪁 A PIPA!",
    explicacao:
      "A pipa é conhecida há muito tempo. Os avós e bisavós também brincavam de soltar pipa.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é a brincadeira TRADICIONAL?",
      opcoes: [
        { nome: "pipa", imagemUrl: pipaImg },
        { nome: "tablet", imagemUrl: tabletImg },
        { nome: "videogame", imagemUrl: videogameImg },
      ],
      respostaCerta: "pipa",
    },
  },

  exercicios: [
    {
      enunciado: "O IOIÔ é uma brincadeira antiga ou nova?",
      resposta: "🪀 ANTIGA — existe há muitos anos e continua divertida.",
      dica: "Seus avós já brincavam com ele.",
    },
    {
      enunciado: "O TABLET é uma brincadeira antiga ou nova?",
      resposta: "📱 NOVA — surgiu há pouco tempo com a tecnologia.",
      dica: "Seus avós não tinham tablet quando eram crianças.",
    },
    {
      enunciado: "Brincar em GRUPO ajuda a:",
      resposta: "🤝 Fazer amigos, cooperar e aprender juntos.",
      dica: "Brincar com os outros ensina a conviver.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: identifique cada brincadeira e sua época!",
    resposta: "Cada brincadeira tem uma história — antiga ou nova.",
    visual: {
      perguntas: [
        {
          pergunta: "A PIPA é uma brincadeira:",
          opcoes: ["Tradicional", "Atual", "Nem sei"],
          correta: 0,
          explicacao: "A pipa é conhecida há muitos anos.",
          visual: { tipo: "itens", imagemUrl: pipaImg, quantidade: 1, rotulo: "🪁" },
        },
        {
          pergunta: "O VIDEOGAME é uma brincadeira:",
          opcoes: ["Atual", "Tradicional", "Nem sei"],
          correta: 0,
          explicacao: "O videogame surgiu com a tecnologia — é atual.",
          visual: { tipo: "itens", imagemUrl: videogameImg, quantidade: 1, rotulo: "🎮" },
        },
        {
          pergunta: "PULAR CORDA pode ser feito hoje?",
          opcoes: ["Sim, ainda hoje", "Só antigamente", "Nunca"],
          correta: 0,
          explicacao: "Pular corda atravessa o tempo — os avós, pais e crianças de hoje brincam.",
          visual: { tipo: "itens", imagemUrl: pularCordaImg, quantidade: 1, rotulo: "🪢" },
        },
        {
          pergunta: "A BONECA DE PANO é:",
          opcoes: ["Tradicional", "Atual", "Nenhuma"],
          correta: 0,
          explicacao: "Bonecas de pano são feitas a mão desde muito tempo.",
          visual: { tipo: "itens", imagemUrl: bonecaPanoImg, quantidade: 1, rotulo: "🧸" },
        },
        {
          pergunta: "Brincar em grupo ajuda a:",
          opcoes: ["Fazer amigos e cooperar", "Ficar sozinho", "Não fazer nada"],
          correta: 0,
          explicacao: "Brincar junto ensina cooperação e amizade.",
          visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "🧒" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🪁 Brincadeiras TRADICIONAIS existem há muitos anos.",
      "📱 Brincadeiras ATUAIS surgiram com a tecnologia.",
      "⚽ Algumas brincadeiras atravessam o tempo (futebol, pular corda).",
      "👨‍👩‍👧 Muitas passaram dos avós pra você.",
      "🤝 Respeitar a brincadeira do colega é importante.",
    ],
    dica: "Toda brincadeira conta uma história de alguém.",
  },

  quiz: [
    {
      pergunta: "As brincadeiras fazem parte da nossa história?",
      opcoes: ["Sim", "Não", "Apenas algumas"],
      correta: 0,
      explicacao: "Todas as brincadeiras contam uma história.",
      visual: { tipo: "itens", imagemUrl: bauImg, quantidade: 1, rotulo: "🎁" },
    },
    {
      pergunta: "Uma brincadeira TRADICIONAL é:",
      opcoes: ["Pular corda", "Dirigir um carro", "Trabalhar"],
      correta: 0,
      explicacao: "Pular corda é tradicional — existe há muitos anos.",
      visual: { tipo: "itens", imagemUrl: pularCordaImg, quantidade: 1, rotulo: "🪢" },
    },
    {
      pergunta: "Brincar ajuda a:",
      opcoes: ["Aprender e fazer amigos", "Apenas descansar", "Apenas correr"],
      correta: 0,
      explicacao: "Brincar é aprendizado e amizade.",
      visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "🧒" },
    },
    {
      pergunta: "Devemos respeitar as brincadeiras dos colegas?",
      opcoes: ["Sim", "Não", "Apenas às vezes"],
      correta: 0,
      explicacao: "Respeitar as escolhas do outro é essencial.",
      visual: { tipo: "itens", imagemUrl: futebolImg, quantidade: 1, rotulo: "⚽" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: [
        "As brincadeiras de ontem e de hoje",
        "Apenas esportes",
        "Apenas televisão",
      ],
      correta: 0,
      explicacao: "A missão foi conhecer as brincadeiras de diferentes épocas.",
      visual: { tipo: "itens", imagemUrl: bauImg, quantidade: 1, rotulo: "🎁" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião das Brincadeiras! 🎁 Item desbloqueado: 🎁 Baú das Brincadeiras do Brilha.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Muitas brincadeiras passaram dos avós pros pais e continuam divertindo crianças até hoje. A brincadeira é a história viajando de geração em geração. 🎁",
  },

  interativas: [
    // APRENDENDO — Passeio pelas brincadeiras (lupa)
    {
      tipo: "lupa",
      titulo: "Baú Das Brincadeiras",
      instrucao: "Toque em cada brinquedo pra descobrir sua história.",
      itens: [
        {
          nome: "Pipa",
          imagemUrl: pipaImg,
          rotulo: "🪁 SOLTAR PIPA",
          descoberta: "A pipa é uma brincadeira antiga que voa no vento. Existe há muitos anos.",
        },
        {
          nome: "Ioiô",
          imagemUrl: ioioImg,
          rotulo: "🪀 IOIÔ",
          descoberta: "O ioiô é conhecido há muito tempo e continua divertido até hoje.",
        },
        {
          nome: "Futebol",
          imagemUrl: futebolImg,
          rotulo: "⚽ FUTEBOL",
          descoberta: "O futebol é jogado no mundo inteiro há mais de 100 anos.",
        },
        {
          nome: "Pular corda",
          imagemUrl: pularCordaImg,
          rotulo: "🪢 PULAR CORDA",
          descoberta: "Pular corda é tradicional — os avós já brincavam quando eram crianças.",
        },
        {
          nome: "Quebra-cabeça",
          imagemUrl: quebraCabecaImg,
          rotulo: "🧩 QUEBRA-CABEÇA",
          descoberta: "O quebra-cabeça ajuda a pensar e existe há muito tempo.",
        },
        {
          nome: "Jogo digital",
          imagemUrl: tabletImg,
          rotulo: "📱 JOGO DIGITAL",
          descoberta: "Os jogos digitais surgiram recentemente com a tecnologia — são atuais.",
        },
      ],
    },

    // FASE 1 — Antiga ou Atual? (selecionar as que ainda podem ser feitas hoje)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 1 · Antiga Ou Atual?",
      instrucao:
        "Toque em TODAS as brincadeiras que AINDA podem ser feitas HOJE. (Dica: quase todas! 😊)",
      criterio: "Ainda pode brincar hoje ✅",
      opcoes: [
        { nome: "Pular corda", imagemUrl: pularCordaImg, rotulo: "🪢 PULAR CORDA", correto: true },
        { nome: "Pipa", imagemUrl: pipaImg, rotulo: "🪁 PIPA", correto: true },
        { nome: "Futebol", imagemUrl: futebolImg, rotulo: "⚽ FUTEBOL", correto: true },
        { nome: "Ioiô", imagemUrl: ioioImg, rotulo: "🪀 IOIÔ", correto: true },
        { nome: "Jogo digital", imagemUrl: tabletImg, rotulo: "📱 JOGO DIGITAL", correto: true },
      ],
      acerto: "🌟 Isso! Todas essas brincadeiras podem ser feitas hoje — antigas e novas!",
      erro: "Todas essas ainda podem ser brincadas hoje. Toque em todas!",
    },

    // FASE 2 — Complete a Turma (selecionar amigos pra brincar junto)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 2 · Complete A Turma",
      instrucao:
        "O menino quer jogar FUTEBOL ⚽ sozinho. Toque em TODOS os amigos que podem entrar na brincadeira!",
      criterio: "Amigo pra brincar 🤝",
      opcoes: [
        { nome: "Menina", imagemUrl: meninaImg, rotulo: "👧 AMIGA", correto: true },
        { nome: "Menino 2", imagemUrl: meninoImg, rotulo: "🧒 AMIGO", correto: true },
        { nome: "Grupo de crianças", imagemUrl: criancasImg, rotulo: "👨‍👩‍👧 TURMA", correto: true },
        { nome: "Boneca sozinha", imagemUrl: bonecaPanoImg, rotulo: "🧸 BONECA (não brinca)", correto: false },
      ],
      acerto: "🤝 Isso! Brincar em grupo é mais divertido. Todo mundo pode participar!",
      erro: "A boneca é um brinquedo — ela não joga bola. Chame os amigos!",
    },

    // FASE 3 — Organize os Brinquedos (arrastar pra 2 grupos)
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Organize Os Brinquedos",
      instrucao:
        "Arraste cada brinquedo pra caixa certa: 🎲 TRADICIONAIS ou 📱 ATUAIS.",
      pares: [
        { item: "Ioiô", alvo: "Tradicional", itemImagem: ioioImg },
        { item: "Pipa", alvo: "Tradicional", itemImagem: pipaImg },
        { item: "Corda", alvo: "Tradicional", itemImagem: pularCordaImg },
        { item: "Tablet", alvo: "Atual", itemImagem: tabletImg },
        { item: "Videogame", alvo: "Atual", itemImagem: videogameImg },
      ],
      alvosVisuais: [
        { nome: "Tradicional", cor: "#A16207", imagemUrl: bauImg, capacidade: 3 },
        { nome: "Atual", cor: "#0EA5E9", imagemUrl: tabletImg, capacidade: 2 },
      ],
    },

    // FASE 4 — Museu das Brincadeiras (lupa: origem, época, curiosidade)
    {
      tipo: "lupa",
      titulo: "Fase 4 · Museu Das Brincadeiras",
      instrucao: "Toque em cada brinquedo pra descobrir sua ORIGEM, ÉPOCA e uma CURIOSIDADE.",
      itens: [
        {
          nome: "Ioiô",
          imagemUrl: ioioImg,
          rotulo: "🪀 IOIÔ",
          descoberta:
            "Origem: muito antiga, feita de madeira. Época: usado há mais de 2000 anos! Curiosidade: sobe e desce enrolando na cordinha.",
        },
        {
          nome: "Pipa",
          imagemUrl: pipaImg,
          rotulo: "🪁 PIPA",
          descoberta:
            "Origem: veio da Ásia há muitos séculos. Época: tradicional. Curiosidade: usa o vento pra voar bem alto no céu.",
        },
        {
          nome: "Boneca de pano",
          imagemUrl: bonecaPanoImg,
          rotulo: "🧸 BONECA DE PANO",
          descoberta:
            "Origem: feita à mão em casa. Época: as bisavós já brincavam. Curiosidade: cada boneca é única e feita com carinho.",
        },
        {
          nome: "Bola",
          imagemUrl: bolaImg,
          rotulo: "⚽ BOLA",
          descoberta:
            "Origem: existe há milhares de anos! Época: atravessa o tempo. Curiosidade: cada país tem seus jogos de bola preferidos.",
        },
      ],
    },

    // FASE 5 — Festival do Brincar (álbum: brincadeira favorita + amigos + lugar)
    {
      tipo: "album",
      titulo: "Fase 5 · Festival Do Brincar",
      instrucao:
        "Monte a SUA festa do brincar! Escolha suas brincadeiras, seus amigos e o lugar. Pode marcar MAIS de UMA opção em cada pergunta!",
      escolhas: [
        {
          label: "Sua brincadeira favorita",
          modo: "imagem",
          opcoes: [
            { nome: "Pipa", imagemUrl: pipaImg, rotulo: "🪁 PIPA" },
            { nome: "Ioiô", imagemUrl: ioioImg, rotulo: "🪀 IOIÔ" },
            { nome: "Futebol", imagemUrl: futebolImg, rotulo: "⚽ FUTEBOL" },
            { nome: "Pular corda", imagemUrl: pularCordaImg, rotulo: "🪢 CORDA" },
            { nome: "Quebra-cabeça", imagemUrl: quebraCabecaImg, rotulo: "🧩 QUEBRA-CABEÇA" },
            { nome: "Jogo digital", imagemUrl: tabletImg, rotulo: "📱 JOGO" },
          ],
        },
        {
          label: "Quem vai brincar com você?",
          modo: "imagem",
          opcoes: [
            { nome: "Amiga", imagemUrl: meninaImg, rotulo: "👧 AMIGA" },
            { nome: "Amigo", imagemUrl: meninoImg, rotulo: "🧒 AMIGO" },
            { nome: "Turma toda", imagemUrl: criancasImg, rotulo: "👨‍👩‍👧 TURMA" },
          ],
        },
        {
          label: "Onde vocês vão brincar?",
          modo: "imagem",
          opcoes: [
            { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA" },
            { nome: "Pátio", imagemUrl: patioImg, rotulo: "🎨 PÁTIO" },
            { nome: "Quadra", imagemUrl: quadraImg, rotulo: "⚽ QUADRA" },
            { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 CASA" },
          ],
        },
      ],
      acerto: "🎉 Festival do Brincar montado! O Brilha guardou seu cartão da festa.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "A PIPA é uma brincadeira:",
        opcoes: ["Tradicional", "Atual", "Nem sei"],
        correta: 0,
        explicacao: "Pipa é antiga e continua até hoje.",
        visual: { tipo: "itens", imagemUrl: pipaImg, quantidade: 1, rotulo: "🪁" },
      },
      {
        pergunta: "O TABLET é uma brincadeira:",
        opcoes: ["Atual", "Tradicional", "Nem sei"],
        correta: 0,
        explicacao: "Tablet surgiu com a tecnologia — é atual.",
        visual: { tipo: "itens", imagemUrl: tabletImg, quantidade: 1, rotulo: "📱" },
      },
      {
        pergunta: "PULAR CORDA se joga:",
        opcoes: ["Ainda hoje", "Só antigamente", "Nunca"],
        correta: 0,
        explicacao: "Pular corda atravessa o tempo.",
        visual: { tipo: "itens", imagemUrl: pularCordaImg, quantidade: 1, rotulo: "🪢" },
      },
    ],
    medio: [
      {
        pergunta: "Uma brincadeira que passou dos AVÓS pra você:",
        opcoes: ["Ioiô", "Videogame", "Tablet"],
        correta: 0,
        explicacao: "Ioiô é tradicional e passou entre gerações.",
        visual: { tipo: "itens", imagemUrl: ioioImg, quantidade: 1, rotulo: "🪀" },
      },
      {
        pergunta: "Brincar em GRUPO ensina:",
        opcoes: ["Cooperar e respeitar", "Só ganhar", "Ficar quieto"],
        correta: 0,
        explicacao: "Brincar junto ensina convivência.",
        visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "🤝" },
      },
      {
        pergunta: "O que TODAS as brincadeiras têm em comum?",
        opcoes: ["Ajudam a aprender e imaginar", "São iguais", "São só antigas"],
        correta: 0,
        explicacao: "Brincar ensina, diverte e desenvolve.",
        visual: { tipo: "itens", imagemUrl: bauImg, quantidade: 1, rotulo: "🎁" },
      },
    ],
    dificil: [
      {
        pergunta: "Brincadeiras fazem parte da:",
        opcoes: ["História e cultura", "Somente tecnologia", "Nada importante"],
        correta: 0,
        explicacao: "Brincar é cultura viva.",
        visual: { tipo: "itens", imagemUrl: bauImg, quantidade: 1, rotulo: "📖" },
      },
      {
        pergunta: "Respeitar a brincadeira do colega significa:",
        opcoes: ["Aceitar o gosto dele", "Só brincar do meu jeito", "Nunca participar"],
        correta: 0,
        explicacao: "Respeitar é aceitar diferentes preferências.",
        visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "🤝" },
      },
      {
        pergunta: "Brincadeiras ATUAIS surgiram com:",
        opcoes: ["A tecnologia", "Os avós", "Os bisavós"],
        correta: 0,
        explicacao: "Tablet e videogame vieram com a tecnologia.",
        visual: { tipo: "itens", imagemUrl: videogameImg, quantidade: 1, rotulo: "🎮" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça Às Brincadeiras",
    objetivo:
      "Missão: encontre APENAS brincadeiras TRADICIONAIS! Cada acerto ilumina o Baú das Brincadeiras ✨.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Pipa", imagemUrl: pipaImg, rotulo: "🪁 PIPA" },
      { nome: "Ioiô", imagemUrl: ioioImg, rotulo: "🪀 IOIÔ" },
      { nome: "Pular corda", imagemUrl: pularCordaImg, rotulo: "🪢 CORDA" },
      { nome: "Boneca de pano", imagemUrl: bonecaPanoImg, rotulo: "🧸 BONECA" },
      { nome: "Bola", imagemUrl: bolaImg, rotulo: "⚽ BOLA" },
      { nome: "Quebra-cabeça", imagemUrl: quebraCabecaImg, rotulo: "🧩 QUEBRA-CABEÇA" },
    ],
    distratores: [
      { nome: "Tablet", imagemUrl: tabletImg, rotulo: "❌ TABLET (atual)" },
      { nome: "Videogame", imagemUrl: videogameImg, rotulo: "❌ VIDEOGAME (atual)" },
    ],
    acerto: "🏆 Baú brilhando! Você é um verdadeiro GUARDIÃO DAS BRINCADEIRAS.",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · A Brincadeira Preferida",
    instrucao:
      "Converse com um familiar sobre a brincadeira favorita da infância dele. Depois brinquem juntos e registrem aqui!",
    registros: [
      { label: "Qual era a brincadeira favorita dele/dela?", tipo: "texto" },
      { label: "Quem participou da brincadeira agora?", tipo: "texto" },
      { label: "O que foi mais divertido?", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
