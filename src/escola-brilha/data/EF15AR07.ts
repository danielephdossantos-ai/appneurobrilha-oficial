import type { Aula } from "../types";
import { url as museuImg } from "@/assets/neuro-treino/objetos/museu.png.asset.json";
import { url as galeriaImg } from "@/assets/neuro-treino/objetos/galeria.png.asset.json";
import { url as artistaImg } from "@/assets/neuro-treino/objetos/artista.png.asset.json";
import { url as artesaoImg } from "@/assets/neuro-treino/objetos/artesao.png.asset.json";
import { url as curadorImg } from "@/assets/neuro-treino/objetos/curador.png.asset.json";
import { url as quadroImg } from "@/assets/neuro-treino/objetos/quadro.png.asset.json";
import { url as esculturaImg } from "@/assets/neuro-treino/objetos/escultura.png.asset.json";
import { url as vasoCeramicaImg } from "@/assets/neuro-treino/objetos/vaso-ceramica.png.asset.json";
import { url as mascaraAfricanaImg } from "@/assets/neuro-treino/objetos/mascara-africana.png.asset.json";
import { url as mascaraIndigenaImg } from "@/assets/neuro-treino/objetos/mascara-indigena.png.asset.json";
import { url as tecidoImg } from "@/assets/neuro-treino/objetos/tecido-colorido.png.asset.json";
import { url as bonecaPanoImg } from "@/assets/neuro-treino/objetos/boneca-pano.png.asset.json";
import { url as criancasGrupoImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as meninoImg } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as paletaImg } from "@/assets/neuro-treino/objetos/paleta.png.asset.json";
import { url as pincelImg } from "@/assets/neuro-treino/objetos/pincel.png.asset.json";

/**
 * EF15AR07 — Arte · 1º Ano (adaptado, código compartilhado 1º–5º)
 * Missão: "O Mundo Da Arte — Museus, Galerias e Feirinhas".
 * Reconhecer sistemas de arte visual (museus, galerias, ateliês) e seus agentes
 * (artistas, artesãos, curadores) em diferentes espaços e tempos.
 */
const aula: Aula = {
  codigo: "EF15AR07",
  ano: "1º Ano",
  disciplina: "Arte",
  titulo: "O Mundo Da Arte",

  narrativa: {
    titulo: "Passeio Pelo Mundo Da Arte",
    contexto:
      "Brilha ganhou um passeio surpresa! Foi ao MUSEU ver quadros antigos, à GALERIA ver arte nova e à FEIRINHA ver o ARTESÃO fazer um vaso de barro na hora!",
    problema:
      "'Uau!', disse Brilha. 'Tem arte em TANTO lugar! E cada pessoa faz de um jeito!' A Ana respondeu: 'Sim! Existe um MUNDO inteiro da arte.'",
    convite: "Bora com o Brilha conhecer os LUGARES e as PESSOAS do mundo da arte?",
  },

  conhecimentosPrevios: [
    "Já reconhecer que existem obras de arte (quadros, esculturas).",
    "Ter ouvido falar em museu.",
  ],

  missao:
    "Reconhecer museus, galerias e ateliês como espaços da arte, e identificar artistas, artesãos e curadores como pessoas que fazem esse mundo funcionar.",

  objetivos: [
    "Identificar MUSEU, GALERIA e ATELIÊ como espaços de arte.",
    "Reconhecer o ARTISTA (cria obras) e o ARTESÃO (faz peças à mão).",
    "Descobrir o CURADOR (organiza exposições).",
    "Perceber que arte existe em diferentes lugares e tempos.",
  ],

  motivacao:
    "Quando você entende o MUNDO da arte, você começa a ver arte em TODO lugar — na parede, na feira, na praça!",

  explicacao:
    "🏛️ MUSEU — guarda obras antigas e importantes.\n🖼️ GALERIA — mostra obras novas pra vender e visitar.\n🎨 ATELIÊ — lugar onde o artista CRIA.\n👩‍🎨 ARTISTA — cria quadros, esculturas, ideias.\n🧵 ARTESÃO — faz peças à mão (vaso, boneca, tecido).\n👓 CURADOR — escolhe e organiza as obras da exposição.",

  explicacoesNiveis: {
    nivel1: "Arte fica em museus, galerias e ateliês.",
    nivel2: "Artista cria obras. Artesão faz peças à mão. Curador organiza.",
    nivel3: "Museu guarda o antigo; galeria mostra o novo; ateliê é onde nasce.",
    nivel4: "O mundo da arte tem MUITOS espaços e muitas pessoas trabalhando juntas.",
  },

  exemploResolvido: {
    enunciado:
      "Você quer ver um quadro MUITO antigo, de 200 anos atrás. Onde vai?",
    passos: [
      "Antigo e importante = fica guardado.",
      "Lugar que GUARDA arte antiga = museu.",
      "Galeria mostra o novo; ateliê é do artista.",
    ],
    resposta: "🏛️ MUSEU! ✅",
  },

  atividadeGuiada: {
    enunciado: "Quem FAZ um vaso de barro à mão na feirinha?",
    resposta: "🧵 O ARTESÃO!",
    explicacao: "Artesão é quem faz peças à mão: vaso, boneca, tecido, máscara.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Quem faz o vaso de barro à mão?",
      opcoes: [
        { nome: "artesao", imagemUrl: artesaoImg },
        { nome: "curador", imagemUrl: curadorImg },
        { nome: "crianca", imagemUrl: meninoImg },
      ],
      respostaCerta: "artesao",
    },
  },

  exercicios: [
    {
      enunciado: "Lugar que GUARDA obras antigas e importantes:",
      resposta: "🏛️ MUSEU.",
      dica: "Fica cheio de história.",
    },
    {
      enunciado: "Lugar onde o ARTISTA cria as obras:",
      resposta: "🎨 ATELIÊ.",
      dica: "É o cantinho de trabalho.",
    },
    {
      enunciado: "Quem ORGANIZA e escolhe as obras da exposição:",
      resposta: "👓 CURADOR.",
      dica: "É como o 'DJ' da exposição.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: descubra o mundo da arte!",
    resposta: "Museu, galeria, ateliê, artista, artesão, curador!",
    visual: {
      perguntas: [
        {
          pergunta: "Quadro de 300 anos atrás fica guardado em:",
          opcoes: ["🏛️ MUSEU", "🏪 MERCADO", "🚌 ÔNIBUS"],
          correta: 0,
          explicacao: "Museu guarda o antigo.",
          visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
        },
        {
          pergunta: "Quem PINTA o quadro é o:",
          opcoes: ["👩‍🎨 ARTISTA", "🍞 PADEIRO", "🚒 BOMBEIRO"],
          correta: 0,
          explicacao: "Artista cria a obra.",
          visual: { tipo: "itens", imagemUrl: artistaImg, quantidade: 1, rotulo: "🎨" },
        },
        {
          pergunta: "Quem faz VASO, BONECA e TECIDO à mão é o:",
          opcoes: ["🧵 ARTESÃO", "👨‍🍳 COZINHEIRO", "🧑‍🚀 ASTRONAUTA"],
          correta: 0,
          explicacao: "Artesão trabalha com as mãos.",
          visual: { tipo: "itens", imagemUrl: artesaoImg, quantidade: 1, rotulo: "🧵" },
        },
        {
          pergunta: "Quem ORGANIZA a exposição escolhendo as obras é o:",
          opcoes: ["👓 CURADOR", "🎤 CANTOR", "⚽ JOGADOR"],
          correta: 0,
          explicacao: "Curador cuida da exposição.",
          visual: { tipo: "itens", imagemUrl: curadorImg, quantidade: 1, rotulo: "👓" },
        },
        {
          pergunta: "Lugar NOVO que mostra obras pra visitar e vender:",
          opcoes: ["🖼️ GALERIA", "🏥 HOSPITAL", "🏫 ESCOLA"],
          correta: 0,
          explicacao: "Galeria mostra o novo.",
          visual: { tipo: "itens", imagemUrl: galeriaImg, quantidade: 1, rotulo: "🖼️" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🏛️ MUSEU guarda arte antiga.",
      "🖼️ GALERIA mostra arte nova.",
      "🎨 ATELIÊ é onde o artista cria.",
      "👩‍🎨 ARTISTA cria obras; 🧵 ARTESÃO faz à mão.",
      "👓 CURADOR organiza a exposição.",
    ],
    dica: "Sempre que ver arte, pergunte: QUEM fez? ONDE está?",
  },

  quiz: [
    {
      pergunta: "Lugar que guarda obras antigas:",
      opcoes: ["Museu", "Padaria", "Estádio"],
      correta: 0,
      explicacao: "Museu = antigo e importante.",
      visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
    },
    {
      pergunta: "Quem faz vaso de barro à mão é:",
      opcoes: ["Artesão", "Motorista", "Dentista"],
      correta: 0,
      explicacao: "Artesão trabalha com as mãos.",
      visual: { tipo: "itens", imagemUrl: artesaoImg, quantidade: 1, rotulo: "🧵" },
    },
    {
      pergunta: "Quem organiza a exposição é:",
      opcoes: ["Curador", "Piloto", "Palhaço"],
      correta: 0,
      explicacao: "Curador escolhe as obras.",
      visual: { tipo: "itens", imagemUrl: curadorImg, quantidade: 1, rotulo: "👓" },
    },
    {
      pergunta: "Lugar onde o artista CRIA suas obras:",
      opcoes: ["Ateliê", "Farmácia", "Zoo"],
      correta: 0,
      explicacao: "Ateliê é o espaço de criação.",
      visual: { tipo: "itens", imagemUrl: paletaImg, quantidade: 1, rotulo: "🎨" },
    },
    {
      pergunta: "Galeria é o lugar que:",
      opcoes: ["Mostra arte nova", "Faz pão", "Corta cabelo"],
      correta: 0,
      explicacao: "Galeria mostra e vende arte nova.",
      visual: { tipo: "itens", imagemUrl: galeriaImg, quantidade: 1, rotulo: "🖼️" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guia do Mundo da Arte! 🎁 Item desbloqueado: 🎟️ Ingresso do Museu. Missão em Família: peça pra alguém te levar num MUSEU, GALERIA ou FEIRINHA de artesanato. Descubra QUEM fez cada obra!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Existe museu no Brasil INTEIRO — do Pará ao Rio Grande do Sul. E o maior museu de arte do mundo, o Louvre, na França, tem mais de 400 mil obras! 🏛️",
  },

  interativas: [
    // FASE 1 — Identificar museu
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Onde Guardamos Arte Antiga?",
      instrucao: "Escolha o lugar que GUARDA obras antigas e importantes.",
      pergunta: "Qual desses é o MUSEU?",
      opcoes: [
        { nome: "MUSEU", imagemUrl: museuImg, rotulo: "🏛️ MUSEU" },
        { nome: "ARTISTA", imagemUrl: artistaImg, rotulo: "👩‍🎨 ARTISTA" },
        { nome: "QUADRO", imagemUrl: quadroImg, rotulo: "🖼️ QUADRO" },
      ],
      correta: 0,
      acerto: "🏛️ Isso! Museu guarda arte antiga.",
      erro: "Museu é o LUGAR que guarda as obras.",
    },

    // FASE 2 — Identificar artesão
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Quem Faz À Mão?",
      instrucao: "Quem faz vaso de barro, boneca de pano e tecido à mão?",
      pergunta: "Quem é o ARTESÃO?",
      opcoes: [
        { nome: "ARTESAO", imagemUrl: artesaoImg, rotulo: "🧵 ARTESÃO" },
        { nome: "CURADOR", imagemUrl: curadorImg, rotulo: "👓 CURADOR" },
        { nome: "CRIANCA", imagemUrl: meninoImg, rotulo: "🧒 CRIANÇA" },
      ],
      correta: 0,
      acerto: "🧵 Boa! Artesão faz peças à mão.",
      erro: "Artesão trabalha com as MÃOS fazendo peças.",
    },

    // FASE 3 — Arrastar: obras/pessoas/lugares → categoria
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Organize O Mundo Da Arte",
      instrucao: "Arraste cada coisa pro grupo certo.",
      pares: [
        { item: "🏛️ MUSEU", alvo: "LUGAR" },
        { item: "🖼️ GALERIA", alvo: "LUGAR" },
        { item: "🎨 ATELIÊ", alvo: "LUGAR" },
        { item: "👩‍🎨 ARTISTA", alvo: "PESSOA" },
        { item: "🧵 ARTESÃO", alvo: "PESSOA" },
        { item: "👓 CURADOR", alvo: "PESSOA" },
        { item: "🖼️ QUADRO", alvo: "OBRA" },
        { item: "🗿 ESCULTURA", alvo: "OBRA" },
        { item: "🏺 VASO", alvo: "OBRA" },
      ],
      alvosVisuais: [
        { nome: "LUGAR", cor: "#3B82F6", capacidade: 3 },
        { nome: "PESSOA", cor: "#F472B6", capacidade: 3 },
        { nome: "OBRA", cor: "#FBBF24", capacidade: 3 },
      ],
    },

    // FASE 4 — Lupa: espaços e agentes
    {
      tipo: "lupa",
      titulo: "Fase 4 · Passeio Pelo Mundo Da Arte",
      instrucao: "Toque em cada lugar e pessoa e descubra o que faz.",
      itens: [
        {
          nome: "Museu",
          imagemUrl: museuImg,
          rotulo: "🏛️ MUSEU",
          descoberta:
            "MUSEU guarda obras ANTIGAS e importantes. É como uma casa cheia de tesouros da arte.",
        },
        {
          nome: "Galeria",
          imagemUrl: galeriaImg,
          rotulo: "🖼️ GALERIA",
          descoberta:
            "GALERIA mostra obras NOVAS de artistas vivos. Dá pra visitar e até comprar!",
        },
        {
          nome: "Ateliê",
          imagemUrl: paletaImg,
          rotulo: "🎨 ATELIÊ",
          descoberta:
            "ATELIÊ é o cantinho onde o artista CRIA. Cheio de tintas, pincéis e ideias!",
        },
        {
          nome: "Artista",
          imagemUrl: artistaImg,
          rotulo: "👩‍🎨 ARTISTA",
          descoberta:
            "ARTISTA cria quadros, esculturas, colagens. Usa a imaginação pra fazer obras.",
        },
        {
          nome: "Artesão",
          imagemUrl: artesaoImg,
          rotulo: "🧵 ARTESÃO",
          descoberta:
            "ARTESÃO faz peças À MÃO: vaso de barro, boneca de pano, tecido colorido, máscara.",
        },
        {
          nome: "Curador",
          imagemUrl: curadorImg,
          rotulo: "👓 CURADOR",
          descoberta:
            "CURADOR escolhe QUAIS obras vão pra exposição e ORGANIZA tudo pra ficar bonito.",
        },
      ],
      acerto: "🔬 Descoberta feita! Você conhece o mundo da arte.",
    },

    // FASE 5 — Selecionar tudo que é ARTESANATO
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Detetive Do Artesanato",
      instrucao: "Marque TUDO que é feito À MÃO por um artesão.",
      criterio: "Artesanato 🧵",
      opcoes: [
        { nome: "Vaso de barro", imagemUrl: vasoCeramicaImg, rotulo: "🏺 VASO", correto: true },
        { nome: "Boneca de pano", imagemUrl: bonecaPanoImg, rotulo: "🧸 BONECA", correto: true },
        { nome: "Tecido colorido", imagemUrl: tecidoImg, rotulo: "🧵 TECIDO", correto: true },
        { nome: "Máscara indígena", imagemUrl: mascaraIndigenaImg, rotulo: "🎭 MÁSCARA", correto: true },
        { nome: "Máscara africana", imagemUrl: mascaraAfricanaImg, rotulo: "🎭 MÁSCARA", correto: true },
        { nome: "Museu (prédio)", imagemUrl: museuImg, rotulo: "🏛️ MUSEU", correto: false },
        { nome: "Curador (pessoa)", imagemUrl: curadorImg, rotulo: "👓 CURADOR", correto: false },
      ],
      acerto: "🕵️ Detetive do artesanato! Você reconhece peças feitas à mão.",
      erro: "Artesanato = peças feitas À MÃO, não prédios nem pessoas.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Museu guarda arte:",
        opcoes: ["Antiga e importante", "Que não presta", "Nenhuma"],
        correta: 0,
        explicacao: "Museu = antigo.",
        visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
      },
      {
        pergunta: "Quem pinta o quadro é:",
        opcoes: ["Artista", "Motorista", "Padeiro"],
        correta: 0,
        explicacao: "Artista cria.",
        visual: { tipo: "itens", imagemUrl: artistaImg, quantidade: 1, rotulo: "🎨" },
      },
      {
        pergunta: "Quem faz vaso à mão é:",
        opcoes: ["Artesão", "Cantor", "Piloto"],
        correta: 0,
        explicacao: "Artesão trabalha com as mãos.",
        visual: { tipo: "itens", imagemUrl: artesaoImg, quantidade: 1, rotulo: "🧵" },
      },
    ],
    medio: [
      {
        pergunta: "Galeria é o lugar que:",
        opcoes: ["Mostra arte nova", "Guarda comida", "Corta cabelo"],
        correta: 0,
        explicacao: "Galeria = arte nova.",
        visual: { tipo: "itens", imagemUrl: galeriaImg, quantidade: 1, rotulo: "🖼️" },
      },
      {
        pergunta: "Ateliê é o lugar onde:",
        opcoes: ["O artista cria", "Se compra pão", "Se toma remédio"],
        correta: 0,
        explicacao: "Ateliê = criação.",
        visual: { tipo: "itens", imagemUrl: paletaImg, quantidade: 1, rotulo: "🎨" },
      },
      {
        pergunta: "Curador é a pessoa que:",
        opcoes: ["Organiza a exposição", "Dirige ônibus", "Faz bolo"],
        correta: 0,
        explicacao: "Curador = organizador.",
        visual: { tipo: "itens", imagemUrl: curadorImg, quantidade: 1, rotulo: "👓" },
      },
    ],
    dificil: [
      {
        pergunta: "Uma boneca de pano feita à mão é:",
        opcoes: ["Artesanato", "Máquina", "Alimento"],
        correta: 0,
        explicacao: "Feita à mão = artesanato.",
        visual: { tipo: "itens", imagemUrl: bonecaPanoImg, quantidade: 1, rotulo: "🧸" },
      },
      {
        pergunta: "Se você quer ver obras muito antigas, você vai:",
        opcoes: ["Ao museu", "Ao mercado", "Ao estádio"],
        correta: 0,
        explicacao: "Museu guarda o antigo.",
        visual: { tipo: "itens", imagemUrl: museuImg, quantidade: 1, rotulo: "🏛️" },
      },
      {
        pergunta: "Diferença entre artista e artesão:",
        opcoes: [
          "Artista cria obras; artesão faz peças à mão",
          "São a mesma coisa",
          "Nenhum dos dois faz arte",
        ],
        correta: 0,
        explicacao: "Papéis diferentes, ambos fazem arte.",
        visual: { tipo: "itens", imagemUrl: artesaoImg, quantidade: 1, rotulo: "🧵" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica Do Mundo Da Arte",
    objetivo:
      "As coisas passam na esteira. Toque em LUGAR, PESSOA ou OBRA antes que caiam!",
    tempoSegundos: 90,
    minAcertos: 10,
    categorias: [
      { nome: "LUGAR", cor: "#3B82F6", emoji: "🏛️" },
      { nome: "PESSOA", cor: "#F472B6", emoji: "👤" },
      { nome: "OBRA", cor: "#FBBF24", emoji: "🎨" },
    ],
    objetos: [
      { nome: "Museu", imagemUrl: museuImg, categoria: "LUGAR" },
      { nome: "Galeria", imagemUrl: galeriaImg, categoria: "LUGAR" },
      { nome: "Ateliê (paleta)", imagemUrl: paletaImg, categoria: "LUGAR" },
      { nome: "Artista", imagemUrl: artistaImg, categoria: "PESSOA" },
      { nome: "Artesão", imagemUrl: artesaoImg, categoria: "PESSOA" },
      { nome: "Curador", imagemUrl: curadorImg, categoria: "PESSOA" },
      { nome: "Menino", imagemUrl: meninoImg, categoria: "PESSOA" },
      { nome: "Menina", imagemUrl: meninaImg, categoria: "PESSOA" },
      { nome: "Grupo", imagemUrl: criancasGrupoImg, categoria: "PESSOA" },
      { nome: "Quadro", imagemUrl: quadroImg, categoria: "OBRA" },
      { nome: "Escultura", imagemUrl: esculturaImg, categoria: "OBRA" },
      { nome: "Vaso", imagemUrl: vasoCeramicaImg, categoria: "OBRA" },
      { nome: "Boneca de pano", imagemUrl: bonecaPanoImg, categoria: "OBRA" },
      { nome: "Tecido", imagemUrl: tecidoImg, categoria: "OBRA" },
      { nome: "Máscara africana", imagemUrl: mascaraAfricanaImg, categoria: "OBRA" },
      { nome: "Máscara indígena", imagemUrl: mascaraIndigenaImg, categoria: "OBRA" },
      { nome: "Pincel", imagemUrl: pincelImg, categoria: "OBRA" },
    ],
  },
};

export default aula;
