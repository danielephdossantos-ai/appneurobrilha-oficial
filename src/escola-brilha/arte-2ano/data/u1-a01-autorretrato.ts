import type { AulaArte } from "../types";

const aula: AulaArte = {
  slug: "u1-a01-autorretrato",
  unidade: {
    numero: 1,
    titulo: "Unidade 1 — Quem Sou Eu?",
    subtitulo: "Descobrir a si mesmo através da arte.",
  },
  titulo: "Meu Primeiro Retrato de Artista",
  duracaoMin: "40 a 50 minutos",

  objetivos: [
    "Observar as características do próprio rosto.",
    "Identificar as formas básicas presentes na face.",
    "Compreender que cada pessoa possui características únicas.",
    "Produzir um autorretrato.",
    "Explicar as escolhas feitas durante sua criação.",
  ],

  materiais: {
    ferramentasApp: [
      "Canvas de desenho",
      "Paleta de cores",
      "Pincel fino",
      "Pincel grosso",
      "Borracha",
      "Desfazer / Refazer",
      "Salvar automaticamente no portfólio",
    ],
    fisicos: [
      "Folha de papel",
      "Lápis",
      "Lápis de cor",
      "Espelho pequeno",
    ],
  },

  historia: {
    cenario:
      "Brilha entra em um grande ateliê. As paredes estão cheias de quadros lindos… menos UM, no centro, que está totalmente vazio.",
    carta: [
      "Todo grande artista fez um autorretrato.",
      "Mas este quadro só pode ser preenchido pelo artista mais importante de hoje…",
      "Você.",
    ],
    pergunta:
      "Será que conseguimos mostrar quem somos através da arte?",
    botao: "🎨 Quero começar",
  },

  observacao: {
    convite:
      "Antes de desenhar, o artista OBSERVA. Olhe no espelho (ou na tela) e repare em cada parte do seu rosto:",
    partesDoRosto: [
      "Formato do rosto (redondo, oval, quadradinho?)",
      "Cabelo (liso, cacheado, curto, comprido, cor?)",
      "Sobrancelhas (finas, grossas, arqueadas?)",
      "Olhos (cor, tamanho, formato)",
      "Nariz (arrebitadinho, redondo, comprido?)",
      "Boca (fina, cheia, sorrindo?)",
      "Orelhas (grandes, pequenas, tem brinco?)",
    ],
    faladoPeloBrilha:
      "Os artistas observam antes de desenhar. Cada detalhe conta uma parte da nossa história.",
  },

  obras: {
    intro:
      "Vamos conhecer três artistas que se pintaram. Cada um mostrou a si mesmo de um jeito único.",
    referencias: [
      {
        artista: "Tarsila do Amaral (Brasil)",
        obra: "Autorretrato com vestido rosa",
        sobre:
          "Se pintou usando um vestido rosa, com o cabelo penteado e o céu azul do Brasil atrás. Elegante e serena.",
      },
      {
        artista: "Frida Kahlo (México)",
        obra: "Autorretrato com colar de espinhos",
        sobre:
          "Se pintou com flores no cabelo, sobrancelhas grossas e bichinhos ao redor — sempre do jeito dela, sem esconder nada.",
      },
      {
        artista: "Vincent van Gogh (Holanda)",
        obra: "Autorretrato com chapéu de palha",
        sobre:
          "Se pintou com cabelo laranja e pinceladas que parecem vento. Ele fez mais de 30 autorretratos na vida!",
      },
    ],
    perguntas: [
      "O que você percebe primeiro em cada obra?",
      "Essa pessoa parece alegre ou séria?",
      "Qual cor chamou mais a sua atenção?",
    ],
    faladoPeloBrilha:
      "Os artistas fazem autorretratos para mostrar quem são e como se sentem por dentro.",
  },

  passoAPasso: {
    intro:
      "Agora eu, Brilha, vou te ensinar passo a passo. Faça devagar, no seu ritmo. Cada passo pode ser repetido.",
    passos: [
      {
        titulo: "1. Desenhe um círculo ou um oval",
        descricao: "Esse é o formato do rosto. Não precisa ser perfeito!",
      },
      {
        titulo: "2. Marque onde ficam os olhos",
        descricao:
          "Uma linha no meio do rosto ajuda. Os olhos ficam nessa linha.",
      },
      {
        titulo: "3. Acrescente o nariz",
        descricao: "Entre os olhos e a boca. Uma curvinha ou duas bolinhas.",
      },
      {
        titulo: "4. Desenhe a boca",
        descricao: "Sorrindo? Séria? Do jeito que VOCÊ está hoje.",
      },
      {
        titulo: "5. Faça o cabelo",
        descricao: "Do jeitinho que ele é: liso, cacheado, curto, comprido…",
      },
      {
        titulo: "6. Acrescente detalhes",
        descricao:
          "Sardas, pintinhas, óculos, brinco, tiara — o que faz VOCÊ ser você.",
      },
    ],
  },

  producao: {
    instrucao:
      "Agora o canvas está liberado. Faça o SEU primeiro autorretrato. Sem pressa.",
    dicasDoBrilha: [
      "Observe seu cabelo.",
      "Seu sorriso é diferente de qualquer outro.",
      "Não existe desenho perfeito. Existe desenho verdadeiro.",
    ],
    legendaSalvar: "Meu Primeiro Retrato de Artista 🎨",
  },

  conversa: {
    intro: "Toda vez que um artista termina uma obra, ele conversa sobre ela. Sua vez:",
    perguntas: [
      "Qual foi a parte mais fácil de desenhar?",
      "Qual foi a parte mais difícil?",
      "O que você mais gosta no seu desenho?",
    ],
  },

  cores: {
    explicacao:
      "As cores também mostram sentimentos. Amarelo pode ser alegria. Azul pode ser calma. Vermelho pode ser força.",
    perguntaEmocao: "Como você está se sentindo hoje?",
    emocoes: [
      { nome: "Alegre", cor: "amarelo", hex: "#FCD34D" },
      { nome: "Calmo(a)", cor: "azul", hex: "#7DD3FC" },
      { nome: "Forte", cor: "vermelho", hex: "#F87171" },
      { nome: "Sonhador(a)", cor: "roxo", hex: "#C4B5FD" },
      { nome: "Cheio(a) de energia", cor: "laranja", hex: "#FDBA74" },
      { nome: "Em paz", cor: "verde", hex: "#86EFAC" },
    ],
  },

  missaoCasa: {
    convite:
      "Olhe para as pessoas da sua família. Repare bem em cada rosto. O que muda de uma pessoa para outra?",
    observarNaFamilia: [
      "Cabelo (cor, tamanho, formato)",
      "Olhos",
      "Sorriso",
      "Formato do rosto",
    ],
    entregavel:
      "Se quiser, desenhe outra pessoa da família e fotografe o desenho para adicionar ao seu portfólio.",
  },

  galeria: {
    intro:
      "Toda obra de arte tem uma ficha. A sua também. Veja como ela aparece na sua galeria:",
    exemploTitulo: "Meu Primeiro Retrato de Artista",
  },

  curiosidade: {
    fato:
      "Muitos artistas fazem vários autorretratos ao longo da vida para perceber como mudaram com o tempo. Van Gogh pintou a si mesmo mais de 30 vezes!",
    conexaoFuturo:
      "No final do 2º ano você fará um novo autorretrato — e poderá comparar sua evolução como artista.",
  },

  projeto: {
    nome: "Meu Primeiro Retrato de Artista",
    descricao:
      "O desenho criado hoje será a PRIMEIRA obra do seu Portfólio Artístico do 2º Ano. Durante o ano, novas produções serão adicionadas até formar uma coleção completa.",
  },

  avaliacao: {
    intro: "Durante a aula, o sistema observa:",
    criterios: [
      "Participação",
      "Observação dos detalhes",
      "Organização do desenho",
      "Criatividade",
      "Explicação sobre a própria obra",
      "Conclusão da atividade",
    ],
    obs: "Não existe nota pela beleza do desenho. O foco é o desenvolvimento da observação, da expressão e da criatividade.",
  },

  encerramento: {
    medalhaNome: "Meu Primeiro Retrato",
    medalhaIcone: "🎨",
    mensagem:
      "Hoje você descobriu que todo artista começa olhando para si mesmo. Seu retrato será a primeira página da sua história na Arte.",
  },
};

export default aula;
