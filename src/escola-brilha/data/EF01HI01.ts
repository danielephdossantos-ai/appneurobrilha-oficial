import type { Aula } from "../types";
import bebeImg from "@/assets/neuro-treino/objetos/bebe.png";
import bebeEngatinhandoImg from "@/assets/neuro-treino/objetos/bebe-engatinhando.png";
import criancaAndandoImg from "@/assets/neuro-treino/objetos/crianca-andando.png";
import meninoImg from "@/assets/neuro-treino/objetos/menino.png";
import meninaImg from "@/assets/neuro-treino/objetos/menina.png";
import idosoImg from "@/assets/neuro-treino/objetos/idoso.png";
import mamadeiraImg from "@/assets/neuro-treino/objetos/mamadeira.png";
import chocalhoImg from "@/assets/neuro-treino/objetos/chocalho.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import bonecaPanoImg from "@/assets/neuro-treino/objetos/boneca-pano.png";
import mochilaImg from "@/assets/neuro-treino/objetos/mochila.png";
import boloImg from "@/assets/neuro-treino/objetos/bolo.png";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import albumImg from "@/assets/neuro-treino/objetos/album.png";
import criancasGrupoImg from "@/assets/neuro-treino/objetos/criancas-grupo.png";
import presenteImg from "@/assets/neuro-treino/objetos/presente.png";

/**
 * EF01HI01 — História · 1º Ano
 * Missão: "O Álbum das Descobertas".
 * Identificar aspectos do seu crescimento por meio do registro das lembranças
 * particulares ou de lembranças dos membros de sua família e/ou de sua comunidade.
 */
const aula: Aula = {
  codigo: "EF01HI01",
  ano: "1º Ano",
  disciplina: "História",
  titulo: "O Álbum das Descobertas",

  narrativa: {
    titulo: "O Álbum Mágico Do Brilha",
    contexto:
      "Brilha encontrou um ÁLBUM MÁGICO com todas as páginas em BRANCO! ✨ A Coruja Sábia chegou voando e disse: 'Toda pessoa tem uma HISTÓRIA única. Hoje vamos começar registrando a SUA!'",
    problema:
      "'Nossa!', disse Brilha. 'Cada descoberta faz uma nova página aparecer!' Mas o álbum só se completa se a gente lembrar dos momentos importantes da vida.",
    convite: "Bora com o Brilha preencher o Álbum das Descobertas com a SUA história?",
  },

  conhecimentosPrevios: [
    "Reconhecer que já foi bebê e agora é criança.",
    "Saber falar sobre a família.",
  ],

  missao:
    "Reconhecer sua própria história por meio de lembranças, características pessoais e acontecimentos importantes da sua vida.",

  objetivos: [
    "Reconhecer que cada pessoa possui uma HISTÓRIA.",
    "Identificar acontecimentos importantes da própria vida.",
    "Perceber mudanças ao longo do tempo (antes e agora).",
    "Valorizar sua identidade.",
    "Desenvolver a noção de PASSADO e PRESENTE.",
  ],

  motivacao:
    "Sua história é ÚNICA — ninguém no mundo inteiro tem a mesma! Contar a sua história é como abrir um álbum mágico cheio de tesouros.",

  explicacao:
    "👶 BEBÊ — quando nascemos, precisávamos de MUITOS cuidados: colo, mamadeira, fralda.\n🧒 CRIANÇA — crescemos, aprendemos a andar, falar e brincar sozinhos.\n🎂 ANIVERSÁRIO — a cada ano ficamos MAIORES e aprendemos coisas novas.\n🏫 PRIMEIRO DIA NA ESCOLA — um momento super importante da nossa história.\n🕰️ ANTES = passado. AGORA = presente. O tempo faz a gente MUDAR e CRESCER.",

  explicacoesNiveis: {
    nivel1: "Todo mundo tem uma história.",
    nivel2: "Nasci bebê, cresci, virei criança. Isso é minha história.",
    nivel3: "Passado é o que já passou. Presente é o agora. Eu mudei com o tempo.",
    nivel4: "Lembranças, objetos e pessoas ajudam a contar quem eu sou.",
  },

  exemploResolvido: {
    enunciado:
      "Brilha era bem pequenininho e usava MAMADEIRA. Hoje ele já bebe no copo. Isso quer dizer que Brilha:",
    passos: [
      "Antes: mamadeira (fase bebê).",
      "Agora: copo (fase criança).",
      "Ele mudou com o tempo.",
    ],
    resposta: "🧒 CRESCEU e MUDOU com o tempo! ✅",
  },

  atividadeGuiada: {
    enunciado: "Qual dessas imagens mostra VOCÊ hoje (fase de criança)?",
    resposta: "🧒 A CRIANÇA!",
    explicacao:
      "Bebê é quem acabou de nascer. Idoso é quem já viveu muito. Criança é a SUA fase agora.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual dessas é a sua fase de vida AGORA?",
      opcoes: [
        { nome: "bebe", imagemUrl: bebeImg },
        { nome: "crianca", imagemUrl: meninoImg },
        { nome: "idoso", imagemUrl: idosoImg },
      ],
      respostaCerta: "crianca",
    },
  },

  exercicios: [
    {
      enunciado: "Objeto que usamos quando somos BEBÊS:",
      resposta: "🍼 MAMADEIRA.",
      dica: "Serve pra tomar leite quando ainda não sabemos usar copo.",
    },
    {
      enunciado: "Objeto que levamos pra ESCOLA todo dia:",
      resposta: "🎒 MOCHILA.",
      dica: "Carrega caderno, lápis e lanche.",
    },
    {
      enunciado: "Data que comemora o dia em que você NASCEU:",
      resposta: "🎂 ANIVERSÁRIO.",
      dica: "Tem bolo, velinha e presente!",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra os momentos da sua história!",
    resposta: "Bebê → Criança → Aniversários → Escola!",
    visual: {
      perguntas: [
        {
          pergunta: "Quem veio PRIMEIRO na sua vida?",
          opcoes: ["👶 BEBÊ", "🧒 CRIANÇA", "🧓 IDOSO"],
          correta: 0,
          explicacao: "Todo mundo começa bebê.",
          visual: { tipo: "itens", imagemUrl: bebeImg, quantidade: 1, rotulo: "👶" },
        },
        {
          pergunta: "Qual objeto é da fase BEBÊ?",
          opcoes: ["🍼 MAMADEIRA", "🎒 MOCHILA", "📱 CELULAR"],
          correta: 0,
          explicacao: "Bebê toma leite na mamadeira.",
          visual: { tipo: "itens", imagemUrl: mamadeiraImg, quantidade: 1, rotulo: "🍼" },
        },
        {
          pergunta: "O que comemoramos no ANIVERSÁRIO?",
          opcoes: ["Mais um ano de vida", "O fim do ano", "As férias"],
          correta: 0,
          explicacao: "Aniversário = mais um ano crescendo.",
          visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "🎂" },
        },
        {
          pergunta: "O que levamos no PRIMEIRO DIA de escola?",
          opcoes: ["🎒 MOCHILA", "🍼 MAMADEIRA", "🛏️ CAMA"],
          correta: 0,
          explicacao: "Mochila é o kit da escola.",
          visual: { tipo: "itens", imagemUrl: mochilaImg, quantidade: 1, rotulo: "🎒" },
        },
        {
          pergunta: "O tempo faz as pessoas:",
          opcoes: ["Crescerem e mudarem", "Ficarem sempre iguais", "Pararem de aprender"],
          correta: 0,
          explicacao: "Com o tempo a gente muda e aprende sempre.",
          visual: { tipo: "itens", imagemUrl: criancaAndandoImg, quantidade: 1, rotulo: "🧒" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "👶 Todo mundo nasceu BEBÊ e depois virou CRIANÇA.",
      "🕰️ ANTES = passado. AGORA = presente.",
      "🎂 ANIVERSÁRIO marca cada ano da nossa vida.",
      "🏫 A ESCOLA é uma parte importante da história.",
      "📖 Sua história é ÚNICA — só sua!",
    ],
    dica: "Guarde suas lembranças: são os tesouros do seu álbum!",
  },

  quiz: [
    {
      pergunta: "Todos possuem uma história?",
      opcoes: ["Sim", "Não", "Só os adultos"],
      correta: 0,
      explicacao: "Toda pessoa tem uma história única.",
      visual: { tipo: "itens", imagemUrl: albumImg, quantidade: 1, rotulo: "📖" },
    },
    {
      pergunta: "Quem veio PRIMEIRO na vida?",
      opcoes: ["O bebê", "A criança", "O adulto"],
      correta: 0,
      explicacao: "Todo mundo começa bebê.",
      visual: { tipo: "itens", imagemUrl: bebeImg, quantidade: 1, rotulo: "👶" },
    },
    {
      pergunta: "O tempo faz as pessoas:",
      opcoes: ["Crescerem e mudarem", "Ficarem sempre iguais", "Pararem de aprender"],
      correta: 0,
      explicacao: "Com o tempo a gente muda e cresce.",
      visual: { tipo: "itens", imagemUrl: criancaAndandoImg, quantidade: 1, rotulo: "🧒" },
    },
    {
      pergunta: "Uma lembrança pode ser:",
      opcoes: ["Um momento importante", "Apenas um brinquedo", "Apenas uma foto"],
      correta: 0,
      explicacao: "Qualquer momento marcante pode virar lembrança.",
      visual: { tipo: "itens", imagemUrl: albumImg, quantidade: 1, rotulo: "💖" },
    },
    {
      pergunta: "Hoje aprendemos sobre:",
      opcoes: ["Nossa própria história", "Apenas números", "Apenas animais"],
      correta: 0,
      explicacao: "A missão foi conhecer a SUA história.",
      visual: { tipo: "itens", imagemUrl: albumImg, quantidade: 1, rotulo: "📖" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião das Memórias! 🎁 Item desbloqueado: 📖 Álbum Mágico do Brilha. Você agora sabe que TEM uma história — e ela é única!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Cada pessoa tem uma história DIFERENTE. Até irmãos gêmeos vivem momentos únicos! Conhecer nossa história ajuda a entender quem somos. 💖",
  },

  interativas: [
    // FASE 1 — Quem sou eu (fase atual)
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Quem Sou Eu?",
      instrucao: "Escolha a imagem que representa a SUA fase de vida agora.",
      pergunta: "Qual dessas é você HOJE?",
      opcoes: [
        { nome: "BEBE", imagemUrl: bebeImg, rotulo: "👶 BEBÊ" },
        { nome: "CRIANCA", imagemUrl: meninoImg, rotulo: "🧒 CRIANÇA" },
        { nome: "IDOSO", imagemUrl: idosoImg, rotulo: "🧓 IDOSO" },
      ],
      correta: 1,
      acerto: "🧒 Isso! Você é uma CRIANÇA — está crescendo!",
      erro: "Você já não é mais bebê e ainda não é idoso. Você é criança!",
    },

    // FASE 2 — Antes e agora
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Antes E Agora",
      instrucao: "Antes você engatinhava. E agora, o que você faz?",
      pergunta: "O que MUDOU com o tempo?",
      opcoes: [
        { nome: "ENGATINHA", imagemUrl: bebeEngatinhandoImg, rotulo: "👶 ENGATINHA" },
        { nome: "ANDA", imagemUrl: criancaAndandoImg, rotulo: "🧒 ANDA" },
        { nome: "BEBE", imagemUrl: bebeImg, rotulo: "🍼 BEBÊ SENTADO" },
      ],
      correta: 1,
      acerto: "🧒 Boa! Você CRESCEU e aprendeu a andar!",
      erro: "Antes você engatinhava. AGORA você já ANDA — isso é crescer!",
    },

    // FASE 3 — Minha História: ordenar acontecimentos na linha do tempo
    {
      tipo: "ordenar",
      titulo: "Fase 3 · Minha História",
      instrucao: "Arraste os cartões pra ORDEM certa: o que veio primeiro, depois e agora.",
      itens: ["NASCI", "ANIVERSÁRIO", "ESCOLA"],
      imagens: [
        { imagemUrl: bebeImg, quantidade: 1, rotulo: "👶 NASCI", cor: "#F472B6" },
        { imagemUrl: boloImg, quantidade: 1, rotulo: "🎂 ANIVERSÁRIO", cor: "#FBBF24" },
        { imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫 ENTREI NA ESCOLA", cor: "#34D399" },
      ],
    },

    // FASE 4 — Caixa das lembranças (lupa)
    {
      tipo: "lupa",
      titulo: "Fase 4 · Caixa Das Lembranças",
      instrucao: "Toque em cada objeto e descubra de qual fase ele é.",
      itens: [
        {
          nome: "Mamadeira",
          imagemUrl: mamadeiraImg,
          rotulo: "🍼 MAMADEIRA",
          descoberta:
            "MAMADEIRA é da fase BEBÊ. Servia pra você tomar leite quando ainda não sabia usar copo.",
        },
        {
          nome: "Chocalho",
          imagemUrl: chocalhoImg,
          rotulo: "🔔 CHOCALHO",
          descoberta:
            "CHOCALHO é brinquedo de BEBÊ. Faz barulho quando balança e chama atenção.",
        },
        {
          nome: "Boneca de pano",
          imagemUrl: bonecaPanoImg,
          rotulo: "🧸 BONECA",
          descoberta:
            "BONECA de pano é um brinquedo que muita gente ganhou pequenininho e guarda até crescer.",
        },
        {
          nome: "Bola",
          imagemUrl: bolaImg,
          rotulo: "⚽ BOLA",
          descoberta:
            "BOLA é brinquedo pra CRIANÇA. Precisa correr, chutar e brincar com amigos.",
        },
        {
          nome: "Mochila",
          imagemUrl: mochilaImg,
          rotulo: "🎒 MOCHILA",
          descoberta:
            "MOCHILA é da fase da ESCOLA. Carrega caderno, lápis e lanche todo dia.",
        },
        {
          nome: "Bolo de aniversário",
          imagemUrl: boloImg,
          rotulo: "🎂 BOLO",
          descoberta:
            "BOLO aparece no ANIVERSÁRIO — dia especial que marca mais um ano da sua vida.",
        },
      ],
      acerto: "🔬 Descoberta feita! Cada objeto guarda uma lembrança.",
    },

    // FASE 5 — Álbum da vida: selecionar pessoas na fase CRIANÇA (identidade)
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Álbum Da Vida",
      instrucao: "Marque TODAS as pessoas que estão na fase CRIANÇA — como você é hoje.",
      criterio: "Fase criança 🧒",
      opcoes: [
        { nome: "Menino", imagemUrl: meninoImg, rotulo: "🧒 MENINO", correto: true },
        { nome: "Menina", imagemUrl: meninaImg, rotulo: "👧 MENINA", correto: true },
        { nome: "Criança andando", imagemUrl: criancaAndandoImg, rotulo: "🚶 CRIANÇA", correto: true },
        { nome: "Grupo de crianças", imagemUrl: criancasGrupoImg, rotulo: "👦 GRUPO", correto: true },
        { nome: "Bebê", imagemUrl: bebeImg, rotulo: "👶 BEBÊ", correto: false },
        { nome: "Bebê engatinhando", imagemUrl: bebeEngatinhandoImg, rotulo: "🍼 BEBÊ", correto: false },
        { nome: "Idoso", imagemUrl: idosoImg, rotulo: "🧓 IDOSO", correto: false },
      ],
      acerto: "📖 Sua página do álbum ficou pronta! Você é uma CRIANÇA.",
      erro: "Bebê e idoso são outras fases da vida — você é CRIANÇA agora.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Todo mundo tem uma história?",
        opcoes: ["Sim", "Não", "Só os adultos"],
        correta: 0,
        explicacao: "Todos têm história.",
        visual: { tipo: "itens", imagemUrl: albumImg, quantidade: 1, rotulo: "📖" },
      },
      {
        pergunta: "Quem usa MAMADEIRA?",
        opcoes: ["Bebê", "Adulto", "Idoso"],
        correta: 0,
        explicacao: "Mamadeira é da fase bebê.",
        visual: { tipo: "itens", imagemUrl: mamadeiraImg, quantidade: 1, rotulo: "🍼" },
      },
      {
        pergunta: "Você é:",
        opcoes: ["Criança", "Bebê", "Idoso"],
        correta: 0,
        explicacao: "Você é criança agora.",
        visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "🧒" },
      },
    ],
    medio: [
      {
        pergunta: "O que veio ANTES?",
        opcoes: ["Bebê engatinhando", "Criança andando", "Idoso"],
        correta: 0,
        explicacao: "Primeiro engatinha, depois anda.",
        visual: { tipo: "itens", imagemUrl: bebeEngatinhandoImg, quantidade: 1, rotulo: "👶" },
      },
      {
        pergunta: "Qual desses é da ESCOLA?",
        opcoes: ["Mochila", "Chocalho", "Mamadeira"],
        correta: 0,
        explicacao: "Mochila é da escola.",
        visual: { tipo: "itens", imagemUrl: mochilaImg, quantidade: 1, rotulo: "🎒" },
      },
      {
        pergunta: "O ANIVERSÁRIO comemora:",
        opcoes: ["Mais um ano de vida", "As férias", "O fim do dia"],
        correta: 0,
        explicacao: "Aniversário = mais um ano crescendo.",
        visual: { tipo: "itens", imagemUrl: boloImg, quantidade: 1, rotulo: "🎂" },
      },
    ],
    dificil: [
      {
        pergunta: "PASSADO significa:",
        opcoes: ["O que já aconteceu", "O que vai acontecer", "O agora"],
        correta: 0,
        explicacao: "Passado é o que já foi.",
        visual: { tipo: "itens", imagemUrl: bebeImg, quantidade: 1, rotulo: "🕰️" },
      },
      {
        pergunta: "PRESENTE significa:",
        opcoes: ["O agora", "O que já passou", "O amanhã"],
        correta: 0,
        explicacao: "Presente = agora.",
        visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "⏰" },
      },
      {
        pergunta: "Duas pessoas podem ter histórias:",
        opcoes: ["Diferentes", "Sempre iguais", "Nenhuma história"],
        correta: 0,
        explicacao: "Cada pessoa tem sua história única.",
        visual: { tipo: "itens", imagemUrl: criancasGrupoImg, quantidade: 1, rotulo: "👧" },
      },
    ],
  },

  minijogo: {
    tipo: "sequencia",
    titulo: "Linha Do Tempo Mágica",
    objetivo:
      "As cartas aparecem embaralhadas. Toque nelas na ORDEM correta — do começo da vida até agora. Cada sequência ilumina uma página do álbum!",
    tempoSegundos: 90,
    sequencias: [
      {
        titulo: "Como você cresceu",
        cards: [
          { nome: "Bebê", imagemUrl: bebeImg, rotulo: "👶 BEBÊ" },
          { nome: "Bebê engatinhando", imagemUrl: bebeEngatinhandoImg, rotulo: "🍼 ENGATINHA" },
          { nome: "Criança andando", imagemUrl: criancaAndandoImg, rotulo: "🚶 ANDA" },
          { nome: "Grupo de crianças", imagemUrl: criancasGrupoImg, rotulo: "👦 AMIGOS" },
        ],
      },
      {
        titulo: "Do bebê ao idoso",
        cards: [
          { nome: "Bebê", imagemUrl: bebeImg, rotulo: "👶 BEBÊ" },
          { nome: "Menina", imagemUrl: meninaImg, rotulo: "👧 CRIANÇA" },
          { nome: "Idoso", imagemUrl: idosoImg, rotulo: "🧓 IDOSO" },
        ],
      },
      {
        titulo: "Meu dia de escola",
        cards: [
          { nome: "Menino", imagemUrl: meninoImg, rotulo: "🧒 ACORDEI" },
          { nome: "Mochila", imagemUrl: mochilaImg, rotulo: "🎒 MOCHILA" },
          { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA" },
          { nome: "Álbum", imagemUrl: albumImg, rotulo: "📖 LEMBRANÇA" },
        ],
      },
      {
        titulo: "Meu aniversário",
        cards: [
          { nome: "Bolo de aniversário", imagemUrl: boloImg, rotulo: "🎂 BOLO" },
          { nome: "Presente", imagemUrl: presenteImg, rotulo: "🎁 PRESENTE" },
          { nome: "Grupo de crianças", imagemUrl: criancasGrupoImg, rotulo: "👦 AMIGOS" },
        ],
      },
    ],
    minSequencias: 3,
    acerto: "Álbum iluminado! Você organizou a sua história.",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Contando A Sua História",
    instrucao:
      "Converse com um familiar e descubra três coisas: quando você nasceu, um momento especial da sua infância e qual era seu brinquedo favorito de bebê. Depois registre aqui!",
    registros: [
      { label: "Uma lembrança que a família contou", tipo: "texto" },
      { label: "Qual era seu brinquedo favorito?", tipo: "texto" },
      { label: "Quem contou a história pra você?", tipo: "texto" },
    ],
    permitirFoto: true,
  },
};

export default aula;
