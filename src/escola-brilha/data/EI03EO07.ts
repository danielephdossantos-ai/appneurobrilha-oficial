import type { Aula } from "../types";
import brilhaImg from "@/assets/escola-brilha/mascotes/brilha.png";
import corujaImg from "@/assets/escola-brilha/ei-mundo1/coruja.png";
import lupiImg from "@/assets/escola-brilha/ei-mundo1/lupi.png";
import fifiImg from "@/assets/escola-brilha/ei-mundo1/fifi.png";
import teoImg from "@/assets/escola-brilha/ei-mundo1/teo.png";
import piuImg from "@/assets/escola-brilha/ei-mundo1/piu.png";
import felizImg from "@/assets/brilha-vida/emocoes/feliz.png";
import tranquiloImg from "@/assets/brilha-vida/emocoes/tranquilo.png";
import coracaoImg from "@/assets/neuro-treino/objetos/coracao.png";
import estrelaImg from "@/assets/neuro-treino/objetos/estrela.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import balaoImg from "@/assets/neuro-treino/objetos/balao.png";

/**
 * EI03EO07 — Respeito e valorização das diferenças (inclusão).
 * ⭐ Estrela: Diferenças.
 */
const aula: Aula = {
  codigo: "EI03EO07",
  ano: "Educação Infantil",
  disciplina: "Campos de Experiência",
  titulo: "Cada Um É Diferente",

  narrativa: {
    titulo: "Cada Um É Diferente",
    contexto:
      "Na Floresta Encantada tem bicho grande, pequeno, rápido, devagar, colorido, listrado. E a Coruja Sábia sorri: 'Se todos fossem iguais, a floresta seria chata!'",
    problema: "Alguém disse que o Téo é 'lento demais'. Isso é ruim?",
    convite: "Bora descobrir por que ser diferente é bom?",
  },

  conhecimentosPrevios: ["Notar cor, tamanho, jeito diferente.", "Perceber que amigos têm gostos diferentes.", "Reconhecer o que é meu jeito único."],

  missao: "Descobrir que DIFERENÇA É RIQUEZA — cada amigo tem algo especial.",

  objetivos: [
    "Respeitar amigos diferentes de mim.",
    "Valorizar o que cada um traz de único.",
  ],

  motivacao: "Se todos fossem iguais, o mundo seria de uma cor só. Diferença é a mágica!",

  explicacao:
    "SOMOS TODOS DIFERENTES:\n\n• Cor, tamanho, jeito de andar, jeito de falar.\n• Um gosta disso, outro daquilo.\n• Um é rápido, outro é calmo.\n• Um enxerga bem, outro precisa de óculos.\n• Um ouve normal, outro usa aparelho.\n\nCada diferença é uma cor nova na floresta.",

  explicacaoAtiva: [
    { texto: "O Téo é a tartaruga calminha. Toque nele.", imagem: teoImg, imagemAlt: "Téo tartaruga" },
    { texto: "A Coruja Sábia diz: 'Devagar do Téo tem valor — ele repara em tudo!'", imagem: corujaImg, imagemAlt: "Coruja ensinando" },
    { texto: "O Lupi é rápido. Outro jeito, também é bom.", imagem: lupiImg, imagemAlt: "Lupi rápido" },
    {
      texto: "Juntos: rápido + calmo = amizade perfeita.",
      imagem: felizImg,
      imagemAlt: "Carinha feliz",
      checagem: {
        pergunta: "Amigo diferente de mim é:",
        opcoes: ["Enriquecimento", "Problema"],
        correta: 0,
        explicacao: "Isso! Diferença enriquece.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Todo mundo é diferente. E tá tudo bem.",
    nivel2: "Cada amigo tem uma qualidade que só ele tem.",
    nivel3: "Zombar de diferença machuca. Respeitar valoriza.",
    nivel4: "A floresta é bonita porque tem MUITAS cores.",
  },

  exemploResolvido: {
    enunciado: "5 amigos, cada um bem diferente. Quantos são?",
    passos: ["Brilha brilha.", "Lupi salta.", "Fifi corre.", "Téo pensa devagar.", "Piu voa."],
    resposta: "5 amigos, 5 jeitos — 5 cores na floresta!",
    interativo: {
      tipo: "contagem",
      imagemUrl: estrelaImg,
      quantidade: 5,
      nomeItem: "amigo diferente",
      nomeItemPlural: "amigos diferentes",
      pergunta: "Quantos amigos diferentes?",
    },
  },

  atividadeGuiada: {
    enunciado: "3 amigos bem diferentes brincam juntos. Quantos amigos?",
    resposta: "3 diferentes — e é isso que deixa bonito.",
    explicacao: "Diferentes por fora, unidos por dentro.",
    visual: {
      tipo: "podio",
      pergunta: "Toque em cada amigo. Quem está no meio (2º)?",
      participantes: [
        { nome: "Téo", imagemUrl: teoImg, posicao: 1 },
        { nome: "Lupi", imagemUrl: lupiImg, posicao: 2 },
        { nome: "Piu", imagemUrl: piuImg, posicao: 3 },
      ],
      respostaCerta: "Lupi",
    },
  },

  exercicios: [
    { enunciado: "⭐ Amigo é diferente de mim. É ruim?", resposta: "Não! Diferente é bonito.", dica: "Igualzinho seria sem graça." },
    { enunciado: "🐰 Alguém zombou de outro. Faço o quê?", resposta: "Defendo com carinho e digo que cada um é único.", dica: "Ser amigo é proteger." },
    { enunciado: "🦉 Por que a Coruja disse que diferença é riqueza?", resposta: "Porque cada um traz algo que só ele tem.", dica: "Diferença = cor da floresta." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: cada amigo tem uma qualidade. Qual é a qualidade de cada um?",
    resposta: "Téo pensa, Lupi salta, Piu voa — todos importam.",
    visual: {
      cena: [
        { personagem: "Téo pensa", itemImagemUrl: teoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "Lupi salta", itemImagemUrl: lupiImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Piu voa", itemImagemUrl: piuImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        { pergunta: "Téo é lento. Isso é:", opcoes: ["Qualidade — ele repara em tudo", "Defeito"], correta: 0, explicacao: "Devagar tem seu valor!" },
        { pergunta: "Lupi salta muito. Isso é:", opcoes: ["Qualidade dele", "Coisa ruim"], correta: 0, explicacao: "Cada um brilha do seu jeito." },
        { pergunta: "Amigos diferentes juntos ficam:", opcoes: ["Mais fortes", "Mais fracos"], correta: 0, explicacao: "Diferente + diferente = força!" },
      ],
    },
  },

  revisao: {
    pontos: [
      "Todo mundo é diferente.",
      "Diferença é riqueza, não defeito.",
      "Zombar machuca. Respeitar valoriza.",
      "Juntos, diferentes ficam mais fortes.",
    ],
    dica: "Repare em algo bonito que um amigo tem que você NÃO tem. Diga pra ele!",
  },

  quiz: [
    {
      pergunta: "Amigo diferente de mim é:",
      opcoes: ["Riqueza", "Problema"],
      correta: 0,
      explicacao: "Riqueza — enriquece a floresta.",
      visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Respeito" },
    },
    {
      pergunta: "Se todos fossem iguais:",
      opcoes: ["Mundo colorido", "Mundo sem graça"],
      correta: 1,
      explicacao: "Sem graça! Diferença deixa bonito.",
      visual: {
        tipo: "comparar",
        lados: [
          { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo calmo", cor: "#34D399" },
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi rápido", cor: "#F472B6" },
        ],
      },
    },
    {
      pergunta: "Quantos amigos diferentes na cena?",
      opcoes: ["3", "4", "5"],
      correta: 2,
      explicacao: "5 amigos, cada um único.",
      visual: {
        tipo: "grupos",
        grupos: [
          { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha", cor: "#FBBF24" },
          { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi", cor: "#F472B6" },
          { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi", cor: "#FB923C" },
          { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo", cor: "#34D399" },
          { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu", cor: "#60A5FA" },
        ],
      },
    },
  ],

  conclusao:
    "🏅 Medalha: Amigo das Diferenças! 7ª ESTRELA ⭐ acesa. Missão em Casa: descubra 1 coisa que alguém da família faz DIFERENTE de você — e ache algo bonito nisso.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Nem gêmeos idênticos têm a mesma digital nem gostam das MESMAS comidas! Cada pessoa é única de verdade.",
  },

  interativas: [
    {
      tipo: "contarQuiz",
      titulo: "Fase 1 · Amigos da floresta",
      instrucao: "Cada amigo é diferente. Toque em cada um.",
      grupos: [
        { imagemUrl: brilhaImg, quantidade: 1, rotulo: "Brilha" },
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
        { imagemUrl: fifiImg, quantidade: 1, rotulo: "Fifi" },
        { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
        { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" },
      ],
      pergunta: "Quantos jeitos diferentes de ser?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      acerto: "5 jeitos únicos! Cada um brilha à sua maneira.",
      erro: "Conte cada amigo.",
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Cores da floresta",
      instrucao: "Cada flor tem uma cor. Toque nas flores.",
      grupos: [{ imagemUrl: florImg, quantidade: 4, rotulo: "Flores" }],
      pergunta: "Quantas flores diferentes?",
      opcoes: ["3", "4", "5"],
      correta: 1,
      acerto: "4 flores — 4 cores lindas!",
      erro: "Aponte cada flor.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Cada amigo, uma qualidade",
      instrucao: "Ligue cada amigo à qualidade dele.",
      pares: [
        { a: "Téo calmo", b: "repara em tudo", aImagem: teoImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
        { a: "Lupi rápido", b: "salta alto", aImagem: lupiImg, aQuantidade: 1, bImagem: estrelaImg, bQuantidade: 1 },
        { a: "Piu voador", b: "vê de cima", aImagem: piuImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 4 · Juntos ficam fortes",
      instrucao: "Amigos diferentes se juntam. Toque em cada um.",
      grupos: [
        { imagemUrl: teoImg, quantidade: 1, rotulo: "Calmo" },
        { imagemUrl: lupiImg, quantidade: 1, rotulo: "Rápido" },
        { imagemUrl: piuImg, quantidade: 1, rotulo: "Voa" },
      ],
      pergunta: "Quantos jeitos se somam?",
      opcoes: ["2", "3", "4"],
      correta: 1,
      acerto: "3 jeitos = 1 super equipe!",
      erro: "Conte cada um.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 5 · Balão pra cada diferença",
      instrucao: "Cada amigo diferente ganha 1 balão colorido. Toque no balão e depois no amigo.",
      itemImagem: balaoImg,
      alvosVisuais: [
        { nome: "Brilha", cor: "#FBBF24", capacidade: 1, imagemUrl: brilhaImg },
        { nome: "Lupi", cor: "#F472B6", capacidade: 1, imagemUrl: lupiImg },
        { nome: "Fifi", cor: "#FB923C", capacidade: 1, imagemUrl: fifiImg },
        { nome: "Téo", cor: "#34D399", capacidade: 1, imagemUrl: teoImg },
        { nome: "Piu", cor: "#60A5FA", capacidade: 1, imagemUrl: piuImg },
      ],
      pares: [
        { item: "Balão do Brilha", alvo: "Brilha" },
        { item: "Balão do Lupi", alvo: "Lupi" },
        { item: "Balão da Fifi", alvo: "Fifi" },
        { item: "Balão do Téo", alvo: "Téo" },
        { item: "Balão do Piu", alvo: "Piu" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Minijogo · Diferença e sentimento",
      instrucao: "Como me sinto ao valorizar a diferença?",
      pares: [
        { a: "Respeito o amigo diferente", b: "coração cheio", aImagem: brilhaImg, aQuantidade: 1, bImagem: coracaoImg, bQuantidade: 1 },
        { a: "Aprendi algo novo com ele", b: "feliz", aImagem: teoImg, aQuantidade: 1, bImagem: felizImg, bQuantidade: 1 },
        { a: "Fizemos juntos", b: "tranquilo", aImagem: lupiImg, aQuantidade: 1, bImagem: tranquiloImg, bQuantidade: 1 },
      ],
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Amigo diferente é bom ou ruim?",
        opcoes: ["Bom", "Ruim"],
        correta: 0,
        explicacao: "Diferente = riqueza!",
        visual: { tipo: "itens", imagemUrl: coracaoImg, quantidade: 1, rotulo: "Respeito" },
      },
      {
        pergunta: "Se todos fossem iguais o mundo seria:",
        opcoes: ["Sem graça", "Perfeito"],
        correta: 0,
        explicacao: "Sem graça! Diferença é cor.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
            { imagemUrl: lupiImg, quantidade: 1, rotulo: "Lupi" },
            { imagemUrl: piuImg, quantidade: 1, rotulo: "Piu" },
          ],
        },
      },
    ],
    medio: [
      {
        pergunta: "Alguém zombou do meu amigo. Faço:",
        opcoes: ["Defendo com carinho", "Rio junto"],
        correta: 0,
        explicacao: "Ser amigo é proteger.",
        visual: { tipo: "itens", imagemUrl: brilhaImg, quantidade: 1, rotulo: "Defender" },
      },
      {
        pergunta: "Téo é devagar. Isso é qualidade?",
        opcoes: ["Sim, ele repara em tudo", "Não, é ruim"],
        correta: 0,
        explicacao: "Devagar tem seu valor!",
        visual: { tipo: "itens", imagemUrl: teoImg, quantidade: 1, rotulo: "Téo" },
      },
    ],
    dificil: [
      {
        pergunta: "Amigo usa cadeira de rodas. Como é ele por dentro?",
        opcoes: ["Igualzinho a mim — só se move diferente", "Diferente por dentro"],
        correta: 0,
        explicacao: "Por dentro somos todos iguais — o coração bate igual.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Meu coração", cor: "#EF4444" },
            { imagemUrl: coracaoImg, quantidade: 1, rotulo: "Coração dele", cor: "#EF4444" },
          ],
        },
      },
      {
        pergunta: "Aprendi algo com um amigo diferente. Isso é:",
        opcoes: ["Presente", "Tempo perdido"],
        correta: 0,
        explicacao: "Amigo diferente ensina coisa nova — é presente!",
        visual: { tipo: "itens", imagemUrl: estrelaImg, quantidade: 1, rotulo: "Aprender" },
      },
    ],
  },

  proximaHabilidade: { codigo: "EI03EO08", titulo: "Nome dos Sentimentos" },
};

void fifiImg;

export default aula;
