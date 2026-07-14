import type { Aula } from "../types";
import { url as sabonetImg } from "@/assets/neuro-treino/objetos/sabonete.png.asset.json";
import { url as shampooImg } from "@/assets/neuro-treino/objetos/shampoo.png.asset.json";
import { url as penteImg } from "@/assets/neuro-treino/objetos/pente.png.asset.json";
import { url as toalhaImg } from "@/assets/neuro-treino/objetos/toalha.png.asset.json";
import { url as lavarMaosImg } from "@/assets/neuro-treino/objetos/lavar-maos.png.asset.json";
import { url as banhoImg } from "@/assets/neuro-treino/objetos/banho.png.asset.json";
import { url as lencoImg } from "@/assets/neuro-treino/objetos/lenco.png.asset.json";
import { url as germeImg } from "@/assets/neuro-treino/objetos/germe.png.asset.json";
import { url as escovarDentesImg } from "@/assets/neuro-treino/objetos/escovar-dentes.png.asset.json";
import { url as meninoAcordandoImg } from "@/assets/neuro-treino/objetos/menino-acordando.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bauImg } from "@/assets/neuro-treino/objetos/bau.png.asset.json";

/**
 * EF01CI03 — Ciências · 1º Ano
 * Missão do Dia: "Guardiões da Higiene".
 * Discutir por que os hábitos de higiene do corpo (lavar as mãos,
 * escovar os dentes, limpar olhos/nariz/orelhas, tomar banho)
 * são necessários para a manutenção da saúde.
 */
const aula: Aula = {
  codigo: "EF01CI03",
  ano: "1º Ano",
  disciplina: "Ciências",
  titulo: "Guardiões da Higiene",

  narrativa: {
    titulo: "Guardiões da Higiene",
    contexto:
      "Brilha entrou no banheiro da Floresta Encantada e viu uns bichinhos verdes brincando nas mãos dele! São os GERMES — invisíveis do dia a dia.",
    problema:
      "Os germes gostam de sujeira. Se ninguém cuidar da higiene, eles crescem e deixam a gente doente.",
    convite:
      "Bora ser Guardião da Higiene junto com o Brilha? Aprender por que cada hábito de limpeza é um super-poder contra os germes!",
  },

  conhecimentosPrevios: [
    "Reconhecer partes do corpo (mãos, boca, cabelo).",
    "Saber a diferença entre limpo e sujo.",
    "Já ter escovado os dentes ou tomado banho.",
  ],

  missao:
    "Levar a criança a compreender por que os hábitos de higiene (lavar as mãos, escovar os dentes, tomar banho, limpar nariz/olhos/orelhas) protegem a saúde.",

  objetivos: [
    "Reconhecer os principais hábitos de higiene do corpo.",
    "Entender que germes causam doenças e a limpeza os afasta.",
    "Associar cada objeto de higiene ao seu uso correto.",
    "Perceber a importância da rotina diária de cuidado com o corpo.",
    "Adotar atitudes simples que preservam a saúde.",
  ],

  motivacao:
    "Um bom Guardião da Higiene enxerga o que ninguém vê — os germes — e usa sabonete, escova e água como escudos!",

  explicacao:
    "🧼 LAVAR AS MÃOS — tira os germes antes de comer e depois do banheiro.\n🪥 ESCOVAR OS DENTES — protege contra cárie depois das refeições e antes de dormir.\n🚿 TOMAR BANHO — limpa o suor, a poeira e refresca o corpo.\n🤧 LIMPAR O NARIZ — usar lencinho ajuda a respirar melhor.\n👂 LIMPAR OLHOS E ORELHAS — com cuidado, remove sujeira que atrapalha.\n💇 PENTEAR O CABELO — mantém arrumado e ajuda a ver a pele do couro cabeludo.\n\nHigiene é um HÁBITO — a gente repete todo dia pra não ficar doente.",

  explicacoesNiveis: {
    nivel1:
      "Higiene é CUIDAR do corpo pra ficar limpo e saudável.",
    nivel2:
      "Existem germes invisíveis que causam doenças; a limpeza os afasta.",
    nivel3:
      "Cada hábito tem uma hora certa: mãos antes de comer, dentes após comer, banho todo dia.",
    nivel4:
      "Higiene é uma rotina que protege o corpo — dentro e fora.",
  },

  exemploResolvido: {
    enunciado: "Você acabou de brincar na terra. O que fazer ANTES de comer?",
    passos: [
      "Pense: minhas mãos estão sujas? Sim.",
      "Sujeira tem germes que não podem ir pra minha boca.",
      "Então preciso LAVAR AS MÃOS com água e sabão.",
    ],
    resposta: "🧼 Lavar as mãos com água e sabão. ✅",
  },

  atividadeGuiada: {
    enunciado: "Toque no objeto usado pra LAVAR AS MÃOS.",
    resposta: "🧼 SABONETE — junto com a água, tira os germes.",
    explicacao:
      "O sabonete faz espuma que envolve os germes e a água leva tudo embora pelo ralo.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é o sabonete?",
      opcoes: [
        { nome: "sabonete", imagemUrl: sabonetImg },
        { nome: "livro", imagemUrl: livroImg },
        { nome: "bola", imagemUrl: bolaImg },
      ],
      respostaCerta: "sabonete",
    },
  },

  exercicios: [
    {
      enunciado: "O que a gente usa pra escovar os dentes?",
      resposta: "🪥 ESCOVA e pasta de dente.",
      dica: "Faz espuma e limpa dente por dente.",
    },
    {
      enunciado: "O que se usa pra tomar banho?",
      resposta: "🚿 ÁGUA, sabonete e xampu.",
      dica: "Tudo que faz espuma e enxagua com água.",
    },
    {
      enunciado: "E pra limpar o nariz quando escorre?",
      resposta: "🤧 LENÇO DE PAPEL.",
      dica: "É macio e depois vai pro lixo.",
    },
  ],

  desafio: {
    enunciado: "Desafio Brilha: mostre que já é Guardião da Higiene!",
    resposta: "Cada hábito de higiene protege uma parte do corpo.",
    visual: {
      perguntas: [
        {
          pergunta: "O que fazer ANTES de comer?",
          opcoes: ["🧼 LAVAR AS MÃOS", "🎈 BRINCAR MAIS", "😴 DORMIR"],
          correta: 0,
          explicacao: "Lavar as mãos tira os germes antes da comida entrar na boca.",
          visual: { tipo: "itens", imagemUrl: lavarMaosImg, quantidade: 1, rotulo: "🧼" },
        },
        {
          pergunta: "Depois de comer, o certo é:",
          opcoes: ["🪥 ESCOVAR OS DENTES", "🍭 COMER MAIS DOCE", "🛌 CORRER"],
          correta: 0,
          explicacao: "Escovar tira os restos de comida que viram cárie.",
          visual: { tipo: "itens", imagemUrl: escovarDentesImg, quantidade: 1, rotulo: "🪥" },
        },
        {
          pergunta: "Pra ficar limpinho todo dia:",
          opcoes: ["🚿 TOMAR BANHO", "🎨 SÓ PINTAR", "📺 SÓ VER TV"],
          correta: 0,
          explicacao: "Banho tira suor, poeira e germes do corpo inteiro.",
          visual: { tipo: "itens", imagemUrl: banhoImg, quantidade: 1, rotulo: "🚿" },
        },
        {
          pergunta: "Se o nariz escorre, o que usar?",
          opcoes: ["🤧 LENÇO DE PAPEL", "🖐️ A MÃO", "👕 A CAMISETA"],
          correta: 0,
          explicacao: "Lencinho é feito pra isso — depois vai pro lixo.",
          visual: { tipo: "itens", imagemUrl: lencoImg, quantidade: 1, rotulo: "🤧" },
        },
        {
          pergunta: "Higiene serve pra:",
          opcoes: [
            "Manter a saúde e afastar germes",
            "Deixar mais bagunçado",
            "Não serve pra nada",
          ],
          correta: 0,
          explicacao: "Higiene protege o corpo dos germes que causam doenças.",
          visual: { tipo: "itens", imagemUrl: germeImg, quantidade: 1, rotulo: "🦠" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🧼 Lavar as mãos antes de comer e depois do banheiro.",
      "🪥 Escovar os dentes após comer e antes de dormir.",
      "🚿 Tomar banho todos os dias.",
      "🤧 Usar lencinho pra limpar o nariz.",
      "👂 Limpar olhos e orelhas com cuidado.",
      "💇 Pentear o cabelo depois do banho.",
    ],
    dica:
      "Antes de responder, pense: qual parte do corpo esse objeto limpa?",
  },

  quiz: [
    {
      pergunta: "Quando devemos LAVAR AS MÃOS?",
      opcoes: [
        "Antes de comer e após o banheiro",
        "Só uma vez por semana",
        "Nunca",
      ],
      correta: 0,
      explicacao: "Antes de comer e depois de usar o banheiro é essencial.",
    },
    {
      pergunta: "O que os germes fazem?",
      opcoes: [
        "Podem causar doenças",
        "Deixam a pessoa mais forte",
        "São visíveis a olho nu",
      ],
      correta: 0,
      explicacao: "Germes são invisíveis e podem causar doenças — a limpeza os afasta.",
    },
    {
      pergunta: "Quando ESCOVAR OS DENTES?",
      opcoes: [
        "Após as refeições e antes de dormir",
        "Só quando doer",
        "Uma vez por mês",
      ],
      correta: 0,
      explicacao: "Depois de comer e antes de dormir — protege contra cárie.",
    },
    {
      pergunta: "Para limpar o NARIZ que escorre, o certo é:",
      opcoes: ["Usar lencinho de papel", "Usar a mão", "Usar a camiseta"],
      correta: 0,
      explicacao: "Lencinho é higiênico e depois vai pro lixo.",
    },
    {
      pergunta: "Higiene do corpo serve pra:",
      opcoes: [
        "Manter a saúde",
        "Deixar mais sujo",
        "Nada em especial",
      ],
      correta: 0,
      explicacao: "Higiene mantém o corpo saudável e afasta doenças.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Guardião da Higiene! 🎁 Item desbloqueado: 🧼 Kit de Limpeza do Brilha. Missão em Família: montem juntos uma rotina de higiene do dia e registrem no Diário do Cientista.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Nas mãos da gente vivem milhões de germes invisíveis! Só 20 segundos de água e sabão já tira quase todos.",
  },

  interativas: [
    // FASE 1 — Reconheça o objeto
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Reconheça o Objeto de Higiene",
      instrucao: "Toque no objeto usado pra escovar os dentes.",
      pergunta: "Qual é usado pra ESCOVAR OS DENTES?",
      opcoes: [
        { nome: "ESCOVA", imagemUrl: escovarDentesImg, rotulo: "🪥 ESCOVA" },
        { nome: "PENTE", imagemUrl: penteImg, rotulo: "💇 PENTE" },
        { nome: "TOALHA", imagemUrl: toalhaImg, rotulo: "🧻 TOALHA" },
      ],
      correta: 0,
      acerto: "🪥 Boa! A escova tira os restos de comida dos dentes.",
      erro: "Pense: qual entra na boca com pasta?",
    },

    // FASE 2 — Compare
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Compare",
      instrucao: "Depois do banho, o que a gente usa pra SECAR o corpo?",
      pergunta: "Qual seca o corpo?",
      opcoes: [
        { nome: "TOALHA", imagemUrl: toalhaImg, rotulo: "🧻 TOALHA" },
        { nome: "LIVRO", imagemUrl: livroImg, rotulo: "📚 LIVRO" },
      ],
      correta: 0,
      acerto: "🧻 Isso! A toalha absorve a água e seca a pele.",
      erro: "Pense: qual é fofinho e absorve água?",
    },

    // FASE 3 — Classifique cada objeto no hábito certo
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Cada Objeto no Seu Hábito",
      instrucao: "Arraste cada objeto pro hábito de higiene certo.",
      pares: [
        { item: "🧼 SABONETE", alvo: "LAVAR MÃOS" },
        { item: "🚿 CHUVEIRO", alvo: "BANHO" },
        { item: "🧴 SHAMPOO", alvo: "BANHO" },
        { item: "🪥 ESCOVA", alvo: "ESCOVAR DENTES" },
        { item: "💇 PENTE", alvo: "CABELO" },
        { item: "🤧 LENÇO", alvo: "NARIZ" },
      ],
      alvosVisuais: [
        { nome: "LAVAR MÃOS", cor: "#60A5FA", capacidade: 1 },
        { nome: "BANHO", cor: "#22D3EE", capacidade: 2 },
        { nome: "ESCOVAR DENTES", cor: "#F472B6", capacidade: 1 },
        { nome: "CABELO", cor: "#A78BFA", capacidade: 1 },
        { nome: "NARIZ", cor: "#FBBF24", capacidade: 1 },
      ],
    },

    // FASE 4 — Laboratório: por que cada hábito importa
    {
      tipo: "lupa",
      titulo: "Fase 4 · Laboratório dos Hábitos",
      instrucao:
        "Toque em cada hábito pra descobrir POR QUE ele é tão importante.",
      itens: [
        {
          nome: "Lavar as mãos",
          imagemUrl: lavarMaosImg,
          rotulo: "🧼 LAVAR MÃOS",
          descoberta:
            "As mãos tocam tudo — brinquedos, chão, animais. Lavar tira os germes antes deles entrarem na boca.",
        },
        {
          nome: "Escovar os dentes",
          imagemUrl: escovarDentesImg,
          rotulo: "🪥 ESCOVAR DENTES",
          descoberta:
            "Restos de comida viram cárie. A escova e a pasta protegem o sorriso.",
        },
        {
          nome: "Tomar banho",
          imagemUrl: banhoImg,
          rotulo: "🚿 BANHO",
          descoberta:
            "Durante o dia sai suor e cola poeira. O banho limpa o corpo inteiro e refresca.",
        },
        {
          nome: "Lencinho no nariz",
          imagemUrl: lencoImg,
          rotulo: "🤧 LENÇO",
          descoberta:
            "Quando o nariz escorre, o lencinho segura tudo e vai pro lixo — não passa germe pros amigos.",
        },
      ],
      acerto:
        "🔬 Laboratório completo! Você entende por que cada hábito protege.",
    },

    // FASE 5 — Mochila do Guardião
    {
      tipo: "selecionarMultiplos",
      titulo: "Fase 5 · Kit do Guardião da Higiene",
      instrucao:
        "Brilha vai levar o kit de higiene. Guarde SÓ o que serve pra CUIDAR DO CORPO.",
      criterio: "Escolha só os objetos de HIGIENE 🧼",
      opcoes: [
        { nome: "Sabonete", imagemUrl: sabonetImg, rotulo: "🧼 SABONETE", correto: true },
        { nome: "Shampoo", imagemUrl: shampooImg, rotulo: "🧴 SHAMPOO", correto: true },
        { nome: "Toalha", imagemUrl: toalhaImg, rotulo: "🧻 TOALHA", correto: true },
        { nome: "Pente", imagemUrl: penteImg, rotulo: "💇 PENTE", correto: true },
        { nome: "Lenço", imagemUrl: lencoImg, rotulo: "🤧 LENÇO", correto: true },
        { nome: "Bola", imagemUrl: bolaImg, rotulo: "⚽ BOLA", correto: false },
        { nome: "Livro", imagemUrl: livroImg, rotulo: "📚 LIVRO", correto: false },
        { nome: "Maçã", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ", correto: false },
      ],
      acerto:
        "🎒 Kit pronto! Guardião da Higiene aprovado.",
      erro: "Esse não é de higiene. Pense: serve pra CUIDAR do corpo?",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Pra que serve o SABONETE?",
        opcoes: ["🧼 Limpar as mãos e o corpo", "🍽️ Comer", "🖍️ Desenhar"],
        correta: 0,
        explicacao: "Sabonete tira sujeira e germes.",
        visual: { tipo: "itens", imagemUrl: sabonetImg, quantidade: 1, rotulo: "🧼" },
      },
      {
        pergunta: "Pra que serve a ESCOVA de dentes?",
        opcoes: ["🪥 Limpar os dentes", "🎨 Pintar", "🍎 Comer"],
        correta: 0,
        explicacao: "Escova limpa os dentes.",
        visual: { tipo: "itens", imagemUrl: escovarDentesImg, quantidade: 1, rotulo: "🪥" },
      },
      {
        pergunta: "Pra que serve a TOALHA?",
        opcoes: ["🧻 Secar o corpo", "📖 Ler", "🎈 Encher balão"],
        correta: 0,
        explicacao: "Toalha seca o corpo depois do banho.",
        visual: { tipo: "itens", imagemUrl: toalhaImg, quantidade: 1, rotulo: "🧻" },
      },
    ],
    medio: [
      {
        pergunta: "Quando LAVAR AS MÃOS?",
        opcoes: [
          "Antes de comer e após o banheiro",
          "Só no aniversário",
          "Uma vez por ano",
        ],
        correta: 0,
        explicacao: "Antes de comer e depois do banheiro é fundamental.",
        visual: { tipo: "itens", imagemUrl: lavarMaosImg, quantidade: 1, rotulo: "🧼" },
      },
      {
        pergunta: "Quantas vezes escovar os dentes por dia?",
        opcoes: ["Pelo menos 2 vezes", "Zero", "Só no domingo"],
        correta: 0,
        explicacao: "Após refeições e antes de dormir — pelo menos 2 vezes.",
        visual: { tipo: "itens", imagemUrl: escovarDentesImg, quantidade: 1, rotulo: "🪥" },
      },
      {
        pergunta: "O que são GERMES?",
        opcoes: [
          "Invisíveis que podem causar doenças",
          "Bichos grandes coloridos",
          "Um tipo de fruta",
        ],
        correta: 0,
        explicacao: "Germes são invisíveis a olho nu e podem adoecer.",
        visual: { tipo: "itens", imagemUrl: germeImg, quantidade: 1, rotulo: "🦠" },
      },
    ],
    dificil: [
      {
        pergunta: "Por que TOMAR BANHO todo dia?",
        opcoes: [
          "Pra tirar suor, poeira e germes",
          "Pra sujar mais",
          "Pra ficar cansado",
        ],
        correta: 0,
        explicacao: "Banho limpa o corpo inteiro e refresca.",
        visual: { tipo: "itens", imagemUrl: banhoImg, quantidade: 1, rotulo: "🚿" },
      },
      {
        pergunta: "Depois de assoar o nariz no lencinho, o que fazer?",
        opcoes: [
          "Jogar no lixo e lavar as mãos",
          "Guardar no bolso pra reutilizar",
          "Dar pra um amigo",
        ],
        correta: 0,
        explicacao: "Lenço usado vai pro lixo e depois lavamos as mãos.",
        visual: { tipo: "itens", imagemUrl: lencoImg, quantidade: 1, rotulo: "🤧" },
      },
      {
        pergunta: "Higiene é um hábito porque:",
        opcoes: [
          "A gente repete todo dia",
          "Só se faz uma vez na vida",
          "Não muda nada",
        ],
        correta: 0,
        explicacao: "Hábito é o que se repete todo dia pra proteger o corpo.",
        visual: { tipo: "itens", imagemUrl: meninoAcordandoImg, quantidade: 1, rotulo: "🌞" },
      },
    ],
  },

  minijogo: {
    tipo: "esteira",
    titulo: "Fábrica da Higiene",
    objetivo:
      "Os objetos passam na esteira. Toque na categoria certa (mãos, dentes, banho, nariz, cabelo) antes que ele saia da tela!",
    tempoSegundos: 90,
    minAcertos: 12,
    categorias: [
      { nome: "MÃOS", cor: "#60A5FA", emoji: "🧼" },
      { nome: "DENTES", cor: "#F472B6", emoji: "🪥" },
      { nome: "BANHO", cor: "#22D3EE", emoji: "🚿" },
      { nome: "NARIZ", cor: "#FBBF24", emoji: "🤧" },
      { nome: "CABELO", cor: "#A78BFA", emoji: "💇" },
    ],
    objetos: [
      { nome: "Sabonete", imagemUrl: sabonetImg, categoria: "MÃOS" },
      { nome: "Lavar mãos", imagemUrl: lavarMaosImg, categoria: "MÃOS" },
      { nome: "Escova de dentes", imagemUrl: escovarDentesImg, categoria: "DENTES" },
      { nome: "Escova de dentes", imagemUrl: escovarDentesImg, categoria: "DENTES" },
      { nome: "Shampoo", imagemUrl: shampooImg, categoria: "BANHO" },
      { nome: "Banho", imagemUrl: banhoImg, categoria: "BANHO" },
      { nome: "Toalha", imagemUrl: toalhaImg, categoria: "BANHO" },
      { nome: "Lenço", imagemUrl: lencoImg, categoria: "NARIZ" },
      { nome: "Lenço", imagemUrl: lencoImg, categoria: "NARIZ" },
      { nome: "Pente", imagemUrl: penteImg, categoria: "CABELO" },
      { nome: "Pente", imagemUrl: penteImg, categoria: "CABELO" },
    ],
    acerto:
      "🏭 Fábrica da Higiene arrasando! Você virou Guardião oficial.",
  },

  missaoFamilia: {
    titulo: "Rotina de Higiene em Família",
    instrucao:
      "Com um familiar, montem juntos a rotina de higiene do dia. Marquem cada hábito que fizeram: lavar as mãos, escovar os dentes, tomar banho, limpar o nariz. Podem tirar uma foto do kit de higiene de casa!",
    permitirFoto: true,
    registros: [
      { label: "Qual hábito você fez hoje?", tipo: "texto" },
      { label: "Em que hora?", tipo: "texto" },
      { label: "O que você usou?", tipo: "texto" },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01CI04",
  },
};

export default aula;
