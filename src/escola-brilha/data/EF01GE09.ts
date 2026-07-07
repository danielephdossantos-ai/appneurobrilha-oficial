import type { Aula } from "../types";
import mapaImg from "@/assets/neuro-treino/objetos/mapa.png";
import mapaPercursoImg from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import escolaImg from "@/assets/neuro-treino/objetos/escola.png";
import salaAulaImg from "@/assets/neuro-treino/objetos/sala-aula.png";
import cadeiraImg from "@/assets/neuro-treino/objetos/cadeira.png";
import mochilaImg from "@/assets/neuro-treino/objetos/mochila.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import ursinhoImg from "@/assets/neuro-treino/objetos/ursinho.png";
import bauImg from "@/assets/neuro-treino/objetos/bau.png";
import caixaImg from "@/assets/neuro-treino/objetos/caixa.png";
import setaCimaImg from "@/assets/neuro-treino/objetos/seta-cima.png";
import setaBaixoImg from "@/assets/neuro-treino/objetos/seta-baixo.png";
import setaDireitaImg from "@/assets/neuro-treino/objetos/seta-direita.png";
import setaEsquerdaImg from "@/assets/neuro-treino/objetos/seta-esquerda.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import meninoImg from "@/assets/neuro-treino/objetos/menino.png";
import meninaImg from "@/assets/neuro-treino/objetos/menina.png";
import bussolaImg from "@/assets/neuro-treino/objetos/bussola.png";

/**
 * EF01GE09 — Geografia · 1º Ano
 * Missão: "Explorando Com O Corpo"
 * Elaborar mapas simples usando referenciais espaciais (frente/atrás,
 * esquerda/direita, cima/baixo, dentro/fora) e o corpo como referência.
 */
const aula: Aula = {
  codigo: "EF01GE09",
  ano: "1º Ano",
  disciplina: "Geografia",
  titulo: "Explorando Com O Corpo",

  narrativa: {
    titulo: "O Corpo É O Mapa",
    contexto:
      "Brilha descobre um SEGREDO da Coruja Sábia 🦉: 'O seu próprio corpo é a MELHOR bússola pra se localizar 🧭!'",
    problema:
      "Frente, atrás, direita, esquerda, em cima, embaixo, dentro, fora — Brilha precisa aprender a mexer o corpo pra achar todos os TESOUROS escondidos!",
    convite: "Bora explorar usando o SEU corpo como referência?",
  },

  conhecimentosPrevios: [
    "Reconhecer partes do próprio corpo.",
    "Saber diferenciar dentro/fora e em cima/embaixo.",
  ],

  missao:
    "Usar referenciais espaciais (frente/atrás, direita/esquerda, cima/baixo, dentro/fora) para localizar elementos.",

  objetivos: [
    "Reconhecer noções de espaço com o corpo.",
    "Diferenciar frente, atrás, direita e esquerda.",
    "Localizar objetos usando cima/baixo, dentro/fora.",
    "Ler mapas simples com posições.",
    "Aplicar referenciais em situações reais.",
  ],

  motivacao: "Seu CORPO é sua bússola 🧭 pra explorar o mundo!",

  explicacao:
    "🧍 FRENTE — pra onde você olha.\n🔙 ATRÁS — o que fica nas costas.\n➡️ DIREITA / ⬅️ ESQUERDA — os dois lados.\n⬆️ EM CIMA / ⬇️ EMBAIXO — acima e abaixo.\n📦 DENTRO / FORA — o que está por dentro ou fora do lugar.",

  explicacoesNiveis: {
    nivel1: "Nosso corpo é referência: frente, atrás, direita, esquerda.",
    nivel2: "Também usamos cima/baixo e dentro/fora pra localizar.",
    nivel3: "Num MAPA a gente marca esses lados pra achar o caminho.",
    nivel4: "Sem referência a gente se perde — por isso o corpo é essencial.",
  },

  exemploResolvido: {
    enunciado: "Onde está o URSINHO se ele está DENTRO do BAÚ?",
    passos: [
      "O baú é a REFERÊNCIA.",
      "Se ele está por dentro, é DENTRO.",
      "Se estivesse ao lado, era FORA.",
    ],
    resposta: "📦 DENTRO do baú!",
  },

  atividadeGuiada: {
    enunciado: "Onde está o URSINHO em relação à caixa?",
    resposta: "⬆️ EM CIMA da caixa!",
    explicacao: "Quando o objeto está ACIMA da referência, dizemos que está em CIMA.",
    visual: {
      tipo: "cena",
      pergunta: "O ursinho está…",
      posicao: "cima",
      referenciaImg: caixaImg,
      referenciaLabel: "Caixa",
      sujeitoImg: ursinhoImg,
      sujeitoLabel: "Ursinho",
      opcoes: ["Em cima da caixa", "Embaixo da caixa", "Dentro da caixa"],
      correta: 0,
    },
  },

  exercicios: [
    { enunciado: "O que fica na sua FRENTE agora?", resposta: "👀 Pra onde você olha.", dica: "Sua frente é o rosto." },
    { enunciado: "E ATRÁS?", resposta: "🔙 Suas COSTAS.", dica: "Sem olhar." },
    { enunciado: "Livro EMBAIXO da mesa está em qual posição?", resposta: "⬇️ EMBAIXO.", dica: "Abaixo da referência." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: encontre o TESOURO usando as referências!",
    resposta: "Cada posição tem um lado.",
    visual: {
      perguntas: [
        {
          pergunta: "Ursinho DENTRO do baú está…",
          opcoes: ["Dentro", "Fora", "Em cima"],
          correta: 0,
          explicacao: "Está por dentro.",
          visual: {
            tipo: "cena",
            posicao: "dentro",
            referenciaImg: bauImg,
            referenciaLabel: "Baú",
            sujeitoImg: ursinhoImg,
            sujeitoLabel: "Ursinho",
          },
        },
        {
          pergunta: "Bola EMBAIXO da árvore está…",
          opcoes: ["Embaixo", "Em cima", "Dentro"],
          correta: 0,
          explicacao: "Abaixo da árvore.",
          visual: {
            tipo: "cena",
            posicao: "baixo",
            referenciaImg: arvoreImg,
            referenciaLabel: "Árvore",
            sujeitoImg: bolaImg,
            sujeitoLabel: "Bola",
          },
        },
        {
          pergunta: "Livro EM CIMA da cadeira está…",
          opcoes: ["Em cima", "Embaixo", "Fora"],
          correta: 0,
          explicacao: "Acima do assento.",
          visual: {
            tipo: "cena",
            posicao: "cima",
            referenciaImg: cadeiraImg,
            referenciaLabel: "Cadeira",
            sujeitoImg: livroImg,
            sujeitoLabel: "Livro",
          },
        },
        {
          pergunta: "Mochila À DIREITA da menina está…",
          opcoes: ["À direita", "À esquerda", "Atrás"],
          correta: 0,
          explicacao: "Do lado direito.",
          visual: {
            tipo: "cena",
            posicao: "direita",
            referenciaImg: meninaImg,
            referenciaLabel: "Menina",
            sujeitoImg: mochilaImg,
            sujeitoLabel: "Mochila",
          },
        },
        {
          pergunta: "Bola À ESQUERDA do menino está…",
          opcoes: ["À esquerda", "À direita", "Em cima"],
          correta: 0,
          explicacao: "Do lado esquerdo.",
          visual: {
            tipo: "cena",
            posicao: "esquerda",
            referenciaImg: meninoImg,
            referenciaLabel: "Menino",
            sujeitoImg: bolaImg,
            sujeitoLabel: "Bola",
          },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🧍 FRENTE / ATRÁS — a partir do seu olhar.",
      "➡️ DIREITA / ⬅️ ESQUERDA — dos dois lados.",
      "⬆️ CIMA / ⬇️ BAIXO — acima e abaixo.",
      "📦 DENTRO / FORA — por dentro ou fora do lugar.",
      "🧭 O corpo é a nossa REFERÊNCIA.",
    ],
    dica: "Brinque de dar comandos: 'Um passo pra FRENTE, dois pra DIREITA'.",
  },

  quiz: [
    {
      pergunta: "O que está DENTRO do baú?",
      opcoes: ["O que está por dentro dele", "Do lado", "Longe"],
      correta: 0,
      explicacao: "Dentro é por dentro.",
      visual: {
        tipo: "cena",
        posicao: "dentro",
        referenciaImg: bauImg,
        sujeitoImg: ursinhoImg,
      },
    },
    {
      pergunta: "A bola EMBAIXO da árvore está…",
      opcoes: ["Embaixo", "Em cima", "Ao lado"],
      correta: 0,
      explicacao: "Abaixo da árvore.",
      visual: {
        tipo: "cena",
        posicao: "baixo",
        referenciaImg: arvoreImg,
        sujeitoImg: bolaImg,
      },
    },
    {
      pergunta: "Livro À DIREITA da mochila fica…",
      opcoes: ["À direita", "Atrás", "Em cima"],
      correta: 0,
      explicacao: "Do lado direito.",
      visual: {
        tipo: "cena",
        posicao: "direita",
        referenciaImg: mochilaImg,
        sujeitoImg: livroImg,
      },
    },
    {
      pergunta: "O nosso CORPO serve pra…",
      opcoes: ["Se orientar no espaço", "Nada", "Só comer"],
      correta: 0,
      explicacao: "Bússola natural.",
      visual: { tipo: "itens", imagemUrl: bussolaImg, quantidade: 1, rotulo: "🧭" },
    },
    {
      pergunta: "No mapa marcamos direções pra…",
      opcoes: ["Achar caminho", "Pintar", "Comer"],
      correta: 0,
      explicacao: "Ajuda a se orientar.",
      visual: { tipo: "itens", imagemUrl: mapaImg, quantidade: 1, rotulo: "🗺️" },
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Bússola Viva! 🧭 Item desbloqueado: Explorador do Espaço.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "A gente decora rapidinho o caminho de casa 🏠 porque o cérebro cria um MAPA MENTAL sem a gente perceber — usando pontos de referência do dia a dia.",
  },

  interativas: [
    // APRENDENDO — lupa: referenciais
    {
      tipo: "lupa",
      titulo: "Referenciais Espaciais",
      instrucao: "Toque em cada SETA/OBJETO pra ouvir o significado.",
      itens: [
        { nome: "Frente", imagemUrl: setaCimaImg, rotulo: "⬆️ FRENTE/CIMA", descoberta: "Pra onde você olha ou o que está acima." },
        { nome: "Atrás", imagemUrl: setaBaixoImg, rotulo: "⬇️ ATRÁS/BAIXO", descoberta: "O que fica nas costas ou abaixo." },
        { nome: "Direita", imagemUrl: setaDireitaImg, rotulo: "➡️ DIREITA", descoberta: "Um dos lados do seu corpo." },
        { nome: "Esquerda", imagemUrl: setaEsquerdaImg, rotulo: "⬅️ ESQUERDA", descoberta: "O outro lado do seu corpo." },
        { nome: "Baú", imagemUrl: bauImg, rotulo: "📦 DENTRO/FORA", descoberta: "Coisas ficam DENTRO ou FORA de um lugar." },
        { nome: "Coruja Sábia", imagemUrl: corujaImg, rotulo: "🦉 CORUJA", descoberta: "O corpo é sempre nossa REFERÊNCIA." },
      ],
    },

    // FASE 1 — posicaoEspacial: cenas variadas
    {
      tipo: "posicaoEspacial",
      titulo: "Fase 1 · Onde Está?",
      instrucao: "Observe cada cena e escolha a POSIÇÃO correta.",
      cenas: [
        {
          modo: "dupla",
          referenciaImg: caixaImg,
          referenciaLabel: "Caixa",
          sujeitoImg: ursinhoImg,
          sujeitoLabel: "Ursinho",
          posicao: "cima",
          pergunta: "O ursinho está…",
          opcoes: ["Em cima", "Embaixo", "Dentro"],
          correta: 0,
        },
        {
          modo: "dupla",
          referenciaImg: bauImg,
          referenciaLabel: "Baú",
          sujeitoImg: bolaImg,
          sujeitoLabel: "Bola",
          posicao: "dentro",
          pergunta: "A bola está…",
          opcoes: ["Dentro", "Fora", "Atrás"],
          correta: 0,
        },
        {
          modo: "dupla",
          referenciaImg: meninaImg,
          referenciaLabel: "Menina",
          sujeitoImg: mochilaImg,
          sujeitoLabel: "Mochila",
          posicao: "direita",
          pergunta: "A mochila está à…",
          opcoes: ["Direita", "Esquerda", "Frente"],
          correta: 0,
        },
      ],
    },

    // FASE 2 — ligar: seta ↔ direção
    {
      tipo: "ligar",
      titulo: "Fase 2 · Cada Seta Uma Direção",
      instrucao: "Ligue cada SETA ao nome certo.",
      pares: [
        { a: "⬆️ Seta", b: "Cima", aImagem: setaCimaImg },
        { a: "⬇️ Seta", b: "Baixo", aImagem: setaBaixoImg },
        { a: "➡️ Seta", b: "Direita", aImagem: setaDireitaImg },
        { a: "⬅️ Seta", b: "Esquerda", aImagem: setaEsquerdaImg },
      ],
    },

    // FASE 3 — arrastar: colocar objeto em posição correta
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Cada Coisa Em Seu Lugar",
      instrucao:
        "Arraste cada OBJETO pra posição certa em relação à SALA DE AULA.",
      pares: [
        { item: "Cadeira", alvo: "Dentro", itemImagem: cadeiraImg },
        { item: "Livro", alvo: "Dentro", itemImagem: livroImg },
        { item: "Mochila", alvo: "Dentro", itemImagem: mochilaImg },
        { item: "Árvore", alvo: "Fora", itemImagem: arvoreImg },
        { item: "Bola no pátio", alvo: "Fora", itemImagem: bolaImg },
      ],
      alvosVisuais: [
        { nome: "Dentro", cor: "#22C55E", imagemUrl: salaAulaImg, capacidade: 3 },
        { nome: "Fora", cor: "#F59E0B", imagemUrl: arvoreImg, capacidade: 2 },
      ],
    },

    // FASE 4 — selecionarMultiplos: coisas que dá pra colocar EM CIMA da mesa
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 4 · O Que Cabe EM CIMA Da Cadeira?",
      instrucao: "Marque os OBJETOS que caberiam EM CIMA da cadeira.",
      criterio: "Em cima da cadeira 🪑",
      opcoes: [
        { nome: "Livro", imagemUrl: livroImg, rotulo: "📖 LIVRO", correto: true },
        { nome: "Mochila", imagemUrl: mochilaImg, rotulo: "🎒 MOCHILA", correto: true },
        { nome: "Ursinho", imagemUrl: ursinhoImg, rotulo: "🧸 URSINHO", correto: true },
        { nome: "Bola pequena", imagemUrl: bolaImg, rotulo: "⚽ BOLA", correto: true },
        { nome: "Árvore inteira", imagemUrl: arvoreImg, rotulo: "🌳 ÁRVORE (não cabe!)", correto: false },
        { nome: "Escola inteira", imagemUrl: escolaImg, rotulo: "🏫 ESCOLA (impossível)", correto: false },
      ],
      acerto: "🪑 Certo! Só os objetos pequenos cabem em cima.",
      erro: "Esse não cabe em cima — é grande demais.",
    },

    // FASE 5 — album: como é meu quarto
    {
      tipo: "album",
      titulo: "Fase 5 · Meu Quarto No Mapa",
      instrucao: "Monte o MAPA do seu quarto escolhendo o que fica onde!",
      escolhas: [
        {
          label: "EM CIMA da minha mesa fica…",
          modo: "imagem",
          opcoes: [
            { nome: "Livro", imagemUrl: livroImg, rotulo: "📖" },
            { nome: "Ursinho", imagemUrl: ursinhoImg, rotulo: "🧸" },
            { nome: "Bola", imagemUrl: bolaImg, rotulo: "⚽" },
          ],
        },
        {
          label: "DENTRO da minha mochila tem…",
          modo: "imagem",
          opcoes: [
            { nome: "Livro", imagemUrl: livroImg, rotulo: "📖 LIVRO" },
            { nome: "Caixa", imagemUrl: caixaImg, rotulo: "📦 CAIXINHA" },
          ],
        },
        {
          label: "FORA de casa eu gosto de…",
          modo: "imagem",
          opcoes: [
            { nome: "Árvore", imagemUrl: arvoreImg, rotulo: "🌳 SUBIR EM ÁRVORE" },
            { nome: "Bola", imagemUrl: bolaImg, rotulo: "⚽ JOGAR BOLA" },
            { nome: "Escola", imagemUrl: escolaImg, rotulo: "🏫 IR NA ESCOLA" },
          ],
        },
      ],
      acerto: "🗺️ Mapa do quarto guardado no seu Diário!",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Onde fica sua FRENTE?",
        opcoes: ["Pra onde você olha", "Nas costas", "Embaixo"],
        correta: 0,
        explicacao: "Frente = seu olhar.",
        visual: { tipo: "itens", imagemUrl: meninaImg, quantidade: 1, rotulo: "👧" },
      },
      {
        pergunta: "DENTRO significa…",
        opcoes: ["Por dentro do lugar", "Fora", "Longe"],
        correta: 0,
        explicacao: "Interior.",
        visual: { tipo: "itens", imagemUrl: bauImg, quantidade: 1, rotulo: "📦" },
      },
      {
        pergunta: "Seta ⬆️ significa…",
        opcoes: ["Cima", "Baixo", "Esquerda"],
        correta: 0,
        explicacao: "Pra cima.",
        visual: { tipo: "itens", imagemUrl: setaCimaImg, quantidade: 1, rotulo: "⬆️" },
      },
    ],
    medio: [
      {
        pergunta: "Bola EMBAIXO da árvore está…",
        opcoes: ["Embaixo", "Em cima", "Dentro"],
        correta: 0,
        explicacao: "Abaixo.",
        visual: {
          tipo: "cena",
          posicao: "baixo",
          referenciaImg: arvoreImg,
          sujeitoImg: bolaImg,
        },
      },
      {
        pergunta: "Cadeira DENTRO da sala está…",
        opcoes: ["Dentro", "Fora", "Atrás"],
        correta: 0,
        explicacao: "Por dentro.",
        visual: {
          tipo: "cena",
          posicao: "dentro",
          referenciaImg: salaAulaImg,
          sujeitoImg: cadeiraImg,
        },
      },
      {
        pergunta: "Livro À ESQUERDA da mochila está…",
        opcoes: ["Esquerda", "Direita", "Cima"],
        correta: 0,
        explicacao: "Lado esquerdo.",
        visual: {
          tipo: "cena",
          posicao: "esquerda",
          referenciaImg: mochilaImg,
          sujeitoImg: livroImg,
        },
      },
    ],
    dificil: [
      {
        pergunta: "Se eu ando pra TRÁS, vou…",
        opcoes: ["Pra minhas costas", "Pra frente", "Pra cima"],
        correta: 0,
        explicacao: "Sentido contrário.",
        visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "🧒" },
      },
      {
        pergunta: "Se coloco o ursinho FORA do baú…",
        opcoes: ["Ele sai da referência", "Fica dentro", "Some"],
        correta: 0,
        explicacao: "Passa a estar fora.",
        visual: {
          tipo: "cena",
          posicao: "fora",
          referenciaImg: bauImg,
          sujeitoImg: ursinhoImg,
        },
      },
      {
        pergunta: "Sem REFERÊNCIA a gente…",
        opcoes: ["Fica perdido", "Anda melhor", "Corre mais"],
        correta: 0,
        explicacao: "Referência ajuda a se localizar.",
        visual: { tipo: "itens", imagemUrl: bussolaImg, quantidade: 1, rotulo: "🧭" },
      },
    ],
  },

  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça Aos Tesouros",
    objetivo:
      "Encontre os 4 TESOUROS escondidos em 90 segundos — cada um numa posição diferente do cenário! 🏴‍☠️",
    tempoSegundos: 90,
    elementos: [
      { nome: "Ursinho no baú", imagemUrl: ursinhoImg, rotulo: "🧸" },
      { nome: "Bola embaixo da árvore", imagemUrl: bolaImg, rotulo: "⚽" },
      { nome: "Livro em cima da cadeira", imagemUrl: livroImg, rotulo: "📖" },
      { nome: "Mochila dentro da sala", imagemUrl: mochilaImg, rotulo: "🎒" },
    ],
    distratores: [
      { nome: "Seta", imagemUrl: setaDireitaImg, rotulo: "➡️" },
      { nome: "Mapa", imagemUrl: mapaImg, rotulo: "🗺️" },
      { nome: "Caixa vazia", imagemUrl: caixaImg, rotulo: "📦" },
      { nome: "Menino", imagemUrl: meninoImg, rotulo: "🧒" },
    ],
    acerto: "🏆 Todos os tesouros encontrados usando as referências!",
  },

  missaoFamilia: {
    titulo: "Missão Em Família · Caça Ao Tesouro",
    instrucao:
      "Um familiar esconde um objeto e dá pistas usando FRENTE, ATRÁS, DIREITA, ESQUERDA, CIMA, BAIXO, DENTRO, FORA. Depois inverta os papéis!",
    registros: [
      { label: "Objeto escondido", tipo: "texto" },
      { label: "Onde estava (posição)", tipo: "texto" },
      { label: "Palavras de posição que vocês usaram", tipo: "texto" },
      { label: "Foi divertido? Por quê?", tipo: "texto" },
    ],
    permitirFoto: true,
  },

  proximaHabilidade: { codigo: "EF01GE10" },
};

export default aula;
