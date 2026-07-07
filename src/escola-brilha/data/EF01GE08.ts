import type { Aula } from "../types";
import mapaImg from "@/assets/neuro-treino/objetos/mapa.png";
import mapaPercursoImg from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import pracaImg from "@/assets/neuro-treino/objetos/praca.png";
import parqueImg from "@/assets/neuro-treino/objetos/parque.png";
import padariaImg from "@/assets/neuro-treino/objetos/padaria.png";
import mercadoImg from "@/assets/neuro-treino/objetos/mercado.png";
import postoSaudeImg from "@/assets/neuro-treino/objetos/posto-saude.png";
import pontoOnibusImg from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import setaCimaImg from "@/assets/neuro-treino/objetos/seta-cima.png";
import setaBaixoImg from "@/assets/neuro-treino/objetos/seta-baixo.png";
import setaDireitaImg from "@/assets/neuro-treino/objetos/seta-direita.png";
import setaEsquerdaImg from "@/assets/neuro-treino/objetos/seta-esquerda.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import bussolaImg from "@/assets/neuro-treino/objetos/bussola.png";
import lapisImg from "@/assets/neuro-treino/objetos/lapis.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela-brilhante.png";

/**
 * EF01GE08 — Geografia · 1º Ano
 * Missão: "O Mapa Dos Sonhos"
 * Criar mapas mentais e desenhos com base em itinerários, contos
 * literários, histórias inventadas e brincadeiras.
 */
const aula: Aula = {
  codigo: "EF01GE08",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "O Mapa Dos Sonhos",

  narrativa: {
    titulo: "O Diário Mágico Do Brilha",
    contexto:
      "Brilha ganha um DIÁRIO MÁGICO 📓 onde tudo que ele desenha vira mapa 🗺️!",
    problema:
      "A Coruja Sábia propõe: 'Desenhe o seu CAMINHO da CASA até a ESCOLA — cada lugar que passa vira um pontinho especial!'",
    convite: "Bora inventar mapas dos nossos caminhos e das nossas histórias?",
  },

  conhecimentosPrevios: [
    "Reconhecer lugares que frequenta.",
    "Perceber ordem de acontecimentos (primeiro, depois, por fim).",
  ],

  missao:
    "Criar mapas mentais simples com base em caminhos do dia a dia e histórias inventadas.",

  objetivos: [
    "Representar caminhos com desenhos.",
    "Identificar pontos de referência em itinerários.",
    "Ordenar etapas de um trajeto.",
    "Inventar mapas a partir de histórias.",
    "Desenvolver noção de espaço e sequência.",
  ],

  motivacao: "Todo mapa começa com um LUGAR AMADO 💚 e um caminho descoberto.",

  explicacao:
    "🗺️ MAPA MENTAL: um desenho do caminho que vem da nossa CABEÇA.\n📌 PONTO: cada lugar importante (casa, escola, padaria).\n➡️ TRAJETO: a ordem em que passamos por cada ponto.\nA gente pode inventar mapas de histórias também!",

  explicacoesNiveis: {
    nivel1: "Um MAPA MENTAL é um desenho do caminho que a gente conhece.",
    nivel2: "Cada MARCA no mapa é um lugar importante.",
    nivel3: "A ordem dos lugares mostra o TRAJETO.",
    nivel4: "Podemos mapear histórias — o mapa da CAIXA DO TESOURO, por exemplo.",
  },

  exemploResolvido: {
    enunciado: "Qual o primeiro ponto do trajeto CASA → ESCOLA?",
    passos: [
      "A gente sempre começa onde MORA.",
      "O primeiro ponto é a CASA.",
      "Depois vamos andando até chegar na escola.",
    ],
    resposta: "🏠 CASA!",
  },

  atividadeGuiada: {
    enunciado: "Onde é o ÚLTIMO ponto do trajeto CASA → PADARIA → ESCOLA?",
    resposta: "🏫 ESCOLA!",
    explicacao: "O último ponto do caminho é onde a gente CHEGA.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é o PONTO FINAL?",
      opcoes: [
        { nome: "escola", imagemUrl: escolaImg },
        { nome: "casa", imagemUrl: casaImg },
        { nome: "padaria", imagemUrl: padariaImg },
      ],
      respostaCerta: "escola",
    },
  },

  exercicios: [
    { enunciado: "Como marcamos a CASA no mapa?", resposta: "🏠 Desenhando uma casinha.", dica: "Símbolo simples." },
    { enunciado: "Setas servem pra…", resposta: "➡️ Mostrar a DIREÇÃO.", dica: "Pra onde ir." },
    { enunciado: "Um mapa mental vem de onde?", resposta: "🧠 Da nossa cabeça — do que a gente conhece.", dica: "É o que a gente lembra." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: monte o TRAJETO no mapa!",
    resposta: "O trajeto é a ORDEM correta dos lugares.",
    visual: {
      perguntas: [
        {
          pergunta: "PRIMEIRO ponto do trajeto:",
          opcoes: ["Casa", "Escola", "Padaria"],
          correta: 0,
          explicacao: "Começa em casa.",
          visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
        },
        {
          pergunta: "Depois passamos pela…",
          opcoes: ["Padaria", "Praia", "Museu"],
          correta: 0,
          explicacao: "Padaria fica no caminho.",
          visual: { tipo: "itens", imagemUrl: padariaImg, quantidade: 1, rotulo: "🥖" },
        },
        {
          pergunta: "O ponto final é…",
          opcoes: ["Escola", "Casa", "Ponto de ônibus"],
          correta: 0,
          explicacao: "Chegamos na escola.",
          visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "🏫" },
        },
        {
          pergunta: "SETA no mapa serve pra…",
          opcoes: ["Direção", "Pintar", "Comer"],
          correta: 0,
          explicacao: "Mostra onde ir.",
          visual: { tipo: "itens", imagemUrl: setaDireitaImg, quantidade: 1, rotulo: "➡️" },
        },
        {
          pergunta: "Um MAPA DA HISTÓRIA pode mostrar…",
          opcoes: ["O caminho do personagem", "Só nomes", "Nada"],
          correta: 0,
          explicacao: "A trajetória da aventura.",
          visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🗺️ MAPA MENTAL — desenho do caminho conhecido.",
      "📌 PONTOS — lugares importantes.",
      "➡️ SETAS — direção do trajeto.",
      "1º, 2º, 3º — ORDEM importa.",
      "📖 Histórias também viram mapas!",
    ],
    dica: "Hoje desenhe o mapa do seu quarto — a porta, a cama e onde ficam os brinquedos.",
  },

  quiz: [
    {
      pergunta: "Um MAPA MENTAL é…",
      opcoes: ["Um desenho do que conhecemos", "Uma comida", "Uma música"],
      correta: 0,
      explicacao: "Vem da cabeça.",
      visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
    },
    {
      pergunta: "PONTOS no mapa marcam…",
      opcoes: ["Lugares importantes", "Cores", "Nada"],
      correta: 0,
      explicacao: "Cada ponto = um local.",
      visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "📌" },
    },
    {
      pergunta: "SETAS mostram…",
      opcoes: ["Direção do caminho", "Peso", "Tempo"],
      correta: 0,
      explicacao: "Pra onde seguir.",
      visual: { tipo: "itens", imagemUrl: setaDireitaImg, quantidade: 1, rotulo: "➡️" },
    },
    {
      pergunta: "Podemos mapear…",
      opcoes: ["Caminhos E histórias", "Só ruas", "Só comidas"],
      correta: 0,
      explicacao: "Mapa mental serve pra tudo.",
      visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" },
    },
    {
      pergunta: "O que vem PRIMEIRO no trajeto?",
      opcoes: ["O ponto de partida", "O último", "Nenhum"],
      correta: 0,
      explicacao: "Começamos onde estamos.",
      visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Cartógrafo do Brilha! 📓 Item desbloqueado: Diário Mágico dos Mapas.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Os primeiros mapas do mundo foram desenhados na TERRA e em pedaços de COURO 📜, muito antes de existir papel. Os navegadores antigos usavam ESTRELAS pra achar o caminho ⭐.",
  },

  interativas: [
    // APRENDENDO — lupa: elementos do mapa
    {
      tipo: "lupa",
      titulo: "Elementos Do Mapa",
      instrucao: "Toque em cada símbolo do mapa 🗺️ pra descobrir pra que serve.",
      itens: [
        {
          nome: "Ponto (casa)",
          imagemUrl: casaImg,
          rotulo: "🏠 PONTO",
          descoberta: "Cada ponto marca um LUGAR importante do trajeto.",
        },
        {
          nome: "Seta",
          imagemUrl: setaDireitaImg,
          rotulo: "➡️ SETA",
          descoberta: "As setas mostram pra ONDE ir — a direção do caminho.",
        },
        {
          nome: "Mapa",
          imagemUrl: mapaImg,
          rotulo: "🗺️ MAPA",
          descoberta: "O papel onde desenhamos os pontos e o caminho.",
        },
        {
          nome: "Bússola",
          imagemUrl: bussolaImg,
          rotulo: "🧭 BÚSSOLA",
          descoberta: "Ajuda a saber pra onde estamos indo (norte, sul, leste, oeste).",
        },
        {
          nome: "Coruja Sábia",
          imagemUrl: corujaImg,
          rotulo: "🦉 CORUJA",
          descoberta: "Todo mapa começa com CURIOSIDADE e imaginação.",
        },
      ],
    },

    // FASE 1 — escolherFigura: ponto de partida
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Onde Começamos?",
      instrucao: "Toque no PONTO DE PARTIDA do trajeto pra escola.",
      pergunta: "Onde começa o caminho?",
      opcoes: [
        { nome: "casa", imagemUrl: casaImg, rotulo: "CASA" },
        { nome: "escola", imagemUrl: escolaImg, rotulo: "ESCOLA" },
        { nome: "padaria", imagemUrl: padariaImg, rotulo: "PADARIA" },
      ],
      correta: 0,
      acerto: "🏁 Isso! Sempre começa na CASA.",
      erro: "Esse é ponto do meio ou final — procure o começo.",
    },

    // FASE 2 — ligar: elemento do mapa ↔ função
    {
      tipo: "ligar",
      titulo: "Fase 2 · Cada Símbolo Fala Uma Coisa",
      instrucao: "Ligue cada SÍMBOLO à sua FUNÇÃO no mapa.",
      pares: [
        { a: "🏠 Casa", b: "Ponto de partida", aImagem: casaImg },
        { a: "🏫 Escola", b: "Ponto de chegada", aImagem: escolaImg },
        { a: "➡️ Seta", b: "Direção", aImagem: setaDireitaImg },
        { a: "🧭 Bússola", b: "Orientação", aImagem: bussolaImg },
      ],
    },

    // FASE 3 — arrastar: montar o mapa (setas ao longo do trajeto)
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Monte O Trajeto No Mapa",
      instrucao:
        "Arraste cada LUGAR pra ordem certa do caminho: 1º, 2º, 3º e 4º passo.",
      pares: [
        { item: "Casa", alvo: "1º passo", itemImagem: casaImg },
        { item: "Padaria", alvo: "2º passo", itemImagem: padariaImg },
        { item: "Praça", alvo: "3º passo", itemImagem: pracaImg },
        { item: "Escola", alvo: "4º passo", itemImagem: escolaImg },
      ],
      alvosVisuais: [
        { nome: "1º passo", cor: "#22C55E", capacidade: 1 },
        { nome: "2º passo", cor: "#F59E0B", capacidade: 1 },
        { nome: "3º passo", cor: "#8B5CF6", capacidade: 1 },
        { nome: "4º passo", cor: "#EF4444", capacidade: 1 },
      ],
      mapaFundo: mapaPercursoImg,
    },

    // FASE 4 — selecionarMultiplos: o que colocar no mapa da escola
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · O Que Marcar No Mapa",
      instrucao: "Marque tudo que faz sentido colocar num MAPA da vila.",
      criterio: "Símbolos e pontos do mapa 🗺️",
      opcoes: [
        { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 CASA", correto: true },
        { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA", correto: true },
        { nome: "Seta", imagemUrl: setaCimaImg, rotulo: "⬆️ SETA", correto: true },
        { nome: "Ponto de ônibus", imagemUrl: pontoOnibusImg, rotulo: "🚏 PONTO", correto: true },
        { nome: "Estrela", imagemUrl: estrelaImg, rotulo: "⭐ ESTRELA (nada a ver)", correto: false },
        { nome: "Sopa", imagemUrl: lapisImg, rotulo: "✏️ LÁPIS (só desenha, não é ponto)", correto: false },
      ],
      acerto: "🎯 Ótimo! Você marcou o que realmente faz um mapa.",
      erro: "Isso não é um PONTO nem uma SETA — só símbolos do trajeto entram.",
    },

    // FASE 5 — album: mapa dos sonhos
    {
      tipo: "album",
      titulo: "Fase 5 · Meu Mapa Dos Sonhos",
      instrucao: "Desenhe seu mapa dos sonhos escolhendo os lugares e enfeites!",
      escolhas: [
        {
          label: "No meu mapa terá…",
          modo: "imagem",
          opcoes: [
            { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 CASA" },
            { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA" },
            { nome: "Parque", imagemUrl: parqueImg, rotulo: "🌳 PARQUE" },
            { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌿 PRAÇA" },
          ],
        },
        {
          label: "Enfeites que quero desenhar…",
          modo: "imagem",
          opcoes: [
            { nome: "Árvore", imagemUrl: arvoreImg, rotulo: "🌳 ÁRVORE" },
            { nome: "Flor", imagemUrl: florImg, rotulo: "🌼 FLOR" },
            { nome: "Estrela", imagemUrl: estrelaImg, rotulo: "⭐ ESTRELA" },
          ],
        },
        {
          label: "Direções que vou usar…",
          modo: "imagem",
          opcoes: [
            { nome: "Cima", imagemUrl: setaCimaImg, rotulo: "⬆️" },
            { nome: "Baixo", imagemUrl: setaBaixoImg, rotulo: "⬇️" },
            { nome: "Direita", imagemUrl: setaDireitaImg, rotulo: "➡️" },
            { nome: "Esquerda", imagemUrl: setaEsquerdaImg, rotulo: "⬅️" },
          ],
        },
      ],
      acerto: "🗺️ Mapa dos Sonhos salvo no seu Diário Mágico!",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Mapa mental é…",
        opcoes: ["Desenho do caminho", "Uma sopa", "Uma canção"],
        correta: 0,
        explicacao: "Vem da cabeça.",
        visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
      },
      {
        pergunta: "Setas mostram…",
        opcoes: ["Pra onde ir", "Que horas são", "Se tem chuva"],
        correta: 0,
        explicacao: "Direção.",
        visual: { tipo: "itens", imagemUrl: setaCimaImg, quantidade: 1, rotulo: "⬆️" },
      },
      {
        pergunta: "Ponto no mapa marca…",
        opcoes: ["Um lugar", "Um dia", "Uma cor"],
        correta: 0,
        explicacao: "Cada ponto = local.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
      },
    ],
    medio: [
      {
        pergunta: "Primeiro ponto do trajeto casa-escola é…",
        opcoes: ["Casa", "Escola", "Praça"],
        correta: 0,
        explicacao: "Começa em casa.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "🏠" },
      },
      {
        pergunta: "Bússola serve pra…",
        opcoes: ["Orientar direção", "Escrever", "Cozinhar"],
        correta: 0,
        explicacao: "Mostra o norte.",
        visual: { tipo: "itens", imagemUrl: bussolaImg, quantidade: 1, rotulo: "🧭" },
      },
      {
        pergunta: "Podemos fazer mapa de…",
        opcoes: ["História inventada", "Nada", "Cor"],
        correta: 0,
        explicacao: "Toda aventura tem trajeto.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" },
      },
    ],
    dificil: [
      {
        pergunta: "Um trajeto tem…",
        opcoes: ["Começo, meio e fim", "Só o meio", "Só o fim"],
        correta: 0,
        explicacao: "Ordem importa.",
        visual: { tipo: "itens", imagemUrl: mapaPercursoImg, quantidade: 1, rotulo: "🗺️" },
      },
      {
        pergunta: "Se troco a ORDEM do trajeto…",
        opcoes: ["O caminho muda", "Nada acontece", "Fica igual"],
        correta: 0,
        explicacao: "A sequência muda o percurso.",
        visual: { tipo: "itens", imagemUrl: setaDireitaImg, quantidade: 1, rotulo: "➡️" },
      },
      {
        pergunta: "Mapa da história ajuda a…",
        opcoes: ["Entender a jornada do personagem", "Cozinhar", "Comprar"],
        correta: 0,
        explicacao: "Mostra o percurso.",
        visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "📖" },
      },
    ],
  },

  minijogo: {
    tipo: "sequencia",
    titulo: "Linha Do Caminho",
    objetivo:
      "Toque nas cartas na ORDEM certa do trajeto ⏱️. Cada sequência completa ilumina uma página do Diário Mágico!",
    tempoSegundos: 90,
    sequencias: [
      {
        titulo: "Trajeto: CASA → ESCOLA",
        cards: [
          { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 1º" },
          { nome: "Padaria", imagemUrl: padariaImg, rotulo: "🥖 2º" },
          { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌳 3º" },
          { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 4º" },
        ],
      },
      {
        titulo: "Trajeto: CASA → MERCADO",
        cards: [
          { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 1º" },
          { nome: "Ponto ônibus", imagemUrl: pontoOnibusImg, rotulo: "🚏 2º" },
          { nome: "Mercado", imagemUrl: mercadoImg, rotulo: "🛒 3º" },
        ],
      },
      {
        titulo: "Trajeto: CASA → POSTO DE SAÚDE",
        cards: [
          { nome: "Casa", imagemUrl: casaImg, rotulo: "🏠 1º" },
          { nome: "Praça", imagemUrl: pracaImg, rotulo: "🌳 2º" },
          { nome: "Posto", imagemUrl: postoSaudeImg, rotulo: "🏥 3º" },
        ],
      },
    ],
    minSequencias: 2,
    acerto: "📓 Diário Mágico iluminado! Todos os mapas registrados!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Mapa Do Nosso Caminho",
    instrucao:
      "Com um familiar, desenhem juntos o MAPA do caminho da casa até um lugar favorito. Marquem 3 pontos de referência.",
    registros: [
      { label: "Ponto de partida", tipo: "texto" },
      { label: "1º ponto de referência", tipo: "texto" },
      { label: "2º ponto de referência", tipo: "texto" },
      { label: "Ponto de chegada", tipo: "texto" },
    ],
    permitirFoto: true,
  },

  proximaHabilidade: { codigo: "EF01GE09" },
};

export default aula;
