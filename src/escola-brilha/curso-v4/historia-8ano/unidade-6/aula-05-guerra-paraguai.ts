import type { AulaGeoV1 } from "../../types";
import { url as imgConst } from "@/assets/historia-8ano/u6-constituicao-1824.jpg.asset.json";
import { url as imgFico } from "@/assets/historia-8ano/u6-dia-fico.jpg.asset.json";
import { url as imgPedro } from "@/assets/historia-8ano/u6-dom-pedro.jpg.asset.json";
import { url as imgFazenda } from "@/assets/historia-8ano/u6-fazenda-cafe.jpg.asset.json";
import { url as imgIpiranga } from "@/assets/historia-8ano/u6-ipiranga.jpg.asset.json";

export const aula05: AulaGeoV1 = {
  slug: "aula-05-guerra-paraguai",
  titulo: "A Guerra do Paraguai: um Conflito, Várias Histórias",
  iconeTrilha: "⚔️",
  bncc: ["EF08HI18"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgFazenda,
    imagemDestaqueUrl: imgIpiranga,
    aurora:
      "1864-1870. Brasil, Argentina e Uruguai (Tríplice Aliança) enfrentam o Paraguai, governado por Francisco Solano López, na guerra mais longa e mortal da América do Sul. Milhares de soldados brasileiros — muitos escravizados enviados no lugar de seus senhores — morrem em batalhas e de doenças. O Paraguai perde entre 300 mil e 400 mil pessoas, boa parte da população masculina adulta.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem: Guerra do Paraguai em Debate.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Historiadores brasileiros e paraguaios contam essa guerra de formas muito diferentes. Por que você acha que isso acontece?",
    pergunta: "Por que existem versões tão diferentes sobre a Guerra do Paraguai?",
    fotoUrl: imgIpiranga,
    opcoes: [
      {
        id: "vis",
        titulo: "VISÕES DIFERENTES",
        subtitulo: "cada país narra a guerra a partir dos seus próprios interesses",
        emoji: "⚔️",
        cor: "from-red-800 to-slate-950",
      },
      {
        id: "unica",
        titulo: "SÓ EXISTE UMA VERSÃO",
        subtitulo: "todos os historiadores contam a mesma história",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
          { id: "c", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "vis",
    feedbackAcerto:
      "Correto. No Brasil, por muito tempo a guerra foi contada como defesa da soberania nacional; no Paraguai, é lembrada como uma guerra de destruição e genocídio promovida por interesses britânicos e platinos. A História muda de acordo com quem narra.",
    feedbackErro:
      "Não. Existem versões diferentes: a historiografia tradicional brasileira, a visão revisionista (crítica à Tríplice Aliança) e a memória paraguaia, marcada pela destruição do país.",
    falaFinal:
      "Ideia-base: um mesmo conflito pode ser narrado de formas opostas, dependendo de quem escreve a História.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos para entender a Guerra do Paraguai e suas interpretações.",
    instrucao: "",
    cadernos: [
      {
        id: "trip",
        capa: "Tríplice Aliança",
        emoji: "🤝",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgFazenda,
        conteudo:
          "TRÍPLICE ALIANÇA (1865): tratado secreto entre Brasil, Argentina e Uruguai contra o Paraguai de Solano López. Definiu como os aliados dividiriam territórios paraguaios após a vitória — o que reforça as críticas dos historiadores revisionistas.",
        exemplo:
          "Exemplo: o tratado só foi tornado público anos depois, o que gerou desconfiança sobre os verdadeiros objetivos da guerra.",
      },
      {
        id: "hist",
        capa: "Historiografia tradicional",
        emoji: "📖",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgConst,
        conteudo:
          "HISTORIOGRAFIA TRADICIONAL: versão mais antiga, que apresentava a guerra como resposta legítima do Brasil à agressão paraguaia (invasão do Mato Grosso e do Rio Grande do Sul), destacando o heroísmo dos soldados brasileiros.",
        exemplo:
          "Exemplo: monumentos e nomes de ruas 'Duque de Caxias' celebram os generais brasileiros dessa guerra.",
      },
      {
        id: "revis",
        capa: "Historiografia revisionista",
        emoji: "🔍",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgPedro,
        conteudo:
          "HISTORIOGRAFIA REVISIONISTA: a partir da década de 1960, historiadores (como Júlio José Chiavenato) passaram a questionar a guerra, apontando interesses econômicos britânicos e platinos em destruir o Paraguai, que crescia de forma independente.",
        exemplo:
          "Exemplo: o livro 'Genocídio Americano: a Guerra do Paraguai' (1979) popularizou essa visão crítica no Brasil.",
      },
      {
        id: "mem",
        capa: "Memória paraguaia",
        emoji: "🕯️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgFico,
        conteudo:
          "MEMÓRIA PARAGUAIA: no Paraguai, a guerra é lembrada como uma tragédia nacional — entre 300 mil e 400 mil paraguaios morreram (até 60% da população), e o país perdeu território e demorou décadas para se reconstruir.",
        exemplo:
          "Exemplo: até hoje, 1º de março (morte de Solano López, em 1870) é data de memória nacional no Paraguai.",
      },
    ],
    falaFinal:
      "Tríplice Aliança + versão tradicional + versão revisionista + memória paraguaia. Uma guerra, muitas narrativas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico da Guerra do Paraguai (1864-1870). Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgIpiranga,
    pontos: [
      {
        id: "causa",
        x: 20,
        y: 20,
        emoji: "⚡",
        cor: "from-red-700 to-slate-900",
        fotoUrl: imgFazenda,
        titulo: "CAUSAS (1864)",
        texto:
          "Disputas de fronteira e influência sobre o Uruguai levam à invasão paraguaia do Mato Grosso (1864) e do Rio Grande do Sul (1865), estopim da guerra.",
      },
      {
        id: "aliada",
        x: 45,
        y: 35,
        emoji: "🤝",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgConst,
        titulo: "TRÍPLICE ALIANÇA (1865)",
        texto:
          "Brasil, Argentina e Uruguai assinam tratado secreto contra o Paraguai de Solano López, prevendo divisão de território paraguaio.",
      },
      {
        id: "soldados",
        x: 60,
        y: 55,
        emoji: "🪖",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgPedro,
        titulo: "SOLDADOS DA GUERRA",
        texto:
          "O Brasil recrutou pobres livres e escravizados (com promessa de liberdade) para o front, além da Guarda Nacional. Milhares morreram de cólera e febre amarela.",
      },
      {
        id: "fim",
        x: 30,
        y: 85,
        emoji: "🕯️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgFico,
        titulo: "FIM (1870)",
        texto:
          "Solano López morre em Cerro Corá (1º de março de 1870). O Paraguai fica devastado, com perda de território e de até 60% da população.",
      },
    ],
    falaFinal: "Da invasão de 1864 à morte de Solano López em 1870: seis anos que marcaram a América do Sul.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre a Guerra do Paraguai.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quais países formaram a Tríplice Aliança contra o Paraguai?",
        fotoUrl: imgIpiranga,
        cards: [
          { id: "a", emoji: "🤝", titulo: "Brasil, Argentina e Uruguai", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "❌", titulo: "Brasil, Chile e Bolívia", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "❌", titulo: "Brasil, Peru e Uruguai", cor: "from-slate-600 to-slate-900" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Brasil, Argentina e Uruguai formaram a Tríplice Aliança em 1865.",
        feedbackErro: "A Tríplice Aliança foi formada por Brasil, Argentina e Uruguai.",
      },
      {
        id: "q2",
        pergunta: "Quem liderava o Paraguai durante a guerra?",
        fotoUrl: imgFazenda,
        cards: [
          { id: "a", emoji: "👑", titulo: "Francisco Solano López", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "❌", titulo: "Duque de Caxias", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "❌", titulo: "D. Pedro II", cor: "from-slate-600 to-slate-900" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Francisco Solano López governava o Paraguai e morreu em 1870, em Cerro Corá.",
        feedbackErro: "É Francisco Solano López, presidente paraguaio na guerra.",
      },
      {
        id: "q3",
        pergunta: "O que a historiografia revisionista questiona sobre a guerra?",
        fotoUrl: imgPedro,
        cards: [
          { id: "a", emoji: "🔍", titulo: "Interesses britânicos e platinos na destruição do Paraguai", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "❌", titulo: "Se a guerra realmente aconteceu", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "❌", titulo: "Se o Brasil venceu a guerra", cor: "from-slate-600 to-slate-900" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Revisionistas apontam interesses econômicos na destruição do Paraguai independente.",
        feedbackErro: "A historiografia revisionista questiona os interesses britânicos e platinos por trás da guerra.",
      },
    ],
    falaFinal: "Radar afiado. Você já reconhece as diferentes versões sobre a Guerra do Paraguai.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros: quem eram os aliados e o que aconteceu com o Paraguai.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgIpiranga,
    camadas: [
      {
        id: "aliados",
        rotulo: "Tríplice Aliança",
        emoji: "🤝",
        cor: "from-emerald-700 to-slate-900",
        rect: { x: 10, y: 10, w: 80, h: 40 },
        descricao:
          "Brasil, Argentina e Uruguai uniram forças contra o Paraguai em 1865, com apoio financeiro de bancos britânicos, num tratado que já previa a partilha de território paraguaio.",
      },
      {
        id: "paraguai",
        rotulo: "Paraguai devastado",
        emoji: "🕯️",
        cor: "from-slate-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "O país perdeu entre 300 mil e 400 mil habitantes (até 60% da população), boa parte de sua população masculina adulta, além de território para o Brasil e a Argentina.",
      },
    ],
    falaFinal: "Uma aliança vitoriosa, um país devastado. As duas faces da mesma guerra.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene cronologicamente os principais eventos da Guerra do Paraguai.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia da Guerra do Paraguai",
    paradas: [
      {
        id: "e1",
        emoji: "⚡",
        rotulo: "1. Invasão paraguaia (1864-1865)",
        fotoUrl: imgFazenda,
        descricao: "Paraguai invade Mato Grosso (1864) e Rio Grande do Sul (1865).",
      },
      {
        id: "e2",
        emoji: "🤝",
        rotulo: "2. Tríplice Aliança (1865)",
        fotoUrl: imgConst,
        descricao: "Brasil, Argentina e Uruguai assinam tratado contra o Paraguai.",
      },
      {
        id: "e3",
        emoji: "🪖",
        rotulo: "3. Guerra prolongada (1866-1869)",
        fotoUrl: imgPedro,
        descricao: "Batalhas longas e doenças causam milhares de mortes dos dois lados.",
      },
      {
        id: "e4",
        emoji: "🕯️",
        rotulo: "4. Morte de Solano López (1870)",
        fotoUrl: imgFico,
        descricao: "Solano López morre em Cerro Corá e a guerra termina.",
      },
    ],
    ordemCerta: ["e1", "e2", "e3", "e4"],
    feedbackAcerto:
      "Perfeito. Invasão (1864-65), Tríplice Aliança (1865), guerra prolongada (1866-69) e morte de Solano López (1870).",
    feedbackErro: "Essa não é a próxima etapa. A guerra começou com a invasão paraguaia e terminou com a morte de Solano López em 1870.",
    falaFinal: "Seis anos de guerra, do Mato Grosso a Cerro Corá.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página do livro-atlas. Toque nos termos técnicos.",
    tituloLivro: "⚙️ As Engrenagens do Império",
    subtitulo: "Página — Guerra do Paraguai em Debate",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A GUERRA DO PARAGUAI (1864-1870) foi o maior conflito armado da história da América do Sul. Envolveu o Brasil, a Argentina e o Uruguai — reunidos na TRÍPLICE ALIANÇA — contra o Paraguai governado por Francisco Solano López.",
        chaves: ["Tríplice Aliança"],
        definicoes: {
          "Tríplice Aliança":
            "Tratado de 1865 entre Brasil, Argentina e Uruguai, unindo forças contra o Paraguai e definindo antecipadamente a divisão de territórios paraguaios.",
        },
        fotoUrl: imgIpiranga,
      },
      {
        id: "p2",
        texto:
          "Por muito tempo, a HISTORIOGRAFIA TRADICIONAL brasileira contou a guerra como uma defesa legítima da soberania nacional diante da invasão paraguaia, destacando heróis como o Duque de Caxias.",
        chaves: ["Historiografia tradicional"],
        definicoes: {
          "Historiografia tradicional":
            "Interpretação mais antiga da guerra, que valoriza o heroísmo militar brasileiro e apresenta o conflito como resposta à agressão paraguaia.",
        },
        fotoUrl: imgConst,
      },
      {
        id: "p3",
        texto:
          "A partir dos anos 1960, a HISTORIOGRAFIA REVISIONISTA passou a questionar essa versão, apontando que bancos britânicos financiaram a guerra e que havia interesse em destruir um Paraguai economicamente independente, que crescia sem depender da Inglaterra.",
        chaves: ["Historiografia revisionista"],
        definicoes: {
          "Historiografia revisionista":
            "Corrente historiográfica, a partir da década de 1960, que questiona as motivações da Tríplice Aliança e aponta interesses econômicos britânicos na guerra.",
        },
        fotoUrl: imgPedro,
      },
      {
        id: "p4",
        texto:
          "Para o Paraguai, a guerra é lembrada como tragédia: entre 300 mil e 400 mil pessoas morreram, até 60% da população, num verdadeiro GENOCÍDIO segundo muitos historiadores. O país perdeu território e demorou décadas para se reconstruir.",
        chaves: ["Genocídio"],
        definicoes: {
          Genocídio:
            "Destruição sistemática de um grupo humano; termo usado por historiadores revisionistas para descrever as consequências da guerra sobre a população paraguaia.",
        },
        fotoUrl: imgFico,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já entende por que a Guerra do Paraguai tem versões tão diferentes.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador. Associe cada dado à sua versão histórica correta.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "trad", emoji: "📖", rotulo: "Visão tradicional" },
      { id: "revis", emoji: "🔍", rotulo: "Visão revisionista" },
      { id: "mem", emoji: "🕯️", rotulo: "Memória paraguaia" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Heroísmo do Duque de Caxias", emoji: "🪖", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "Defesa da soberania brasileira", emoji: "🇧🇷", cor: "from-emerald-600 to-slate-900" },
        contexto: "Versão mais antiga sobre a guerra.",
        pecaCertaId: "trad",
        feedbackAcerto: "Correto. É a visão tradicional, que celebra os heróis militares brasileiros.",
        feedbackErro: "É a visão tradicional.",
      },
      {
        id: "r2",
        municipioA: { nome: "Bancos britânicos financiam a guerra", emoji: "💰", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Interesse em destruir Paraguai independente", emoji: "🔍", cor: "from-cyan-600 to-slate-900" },
        contexto: "Corrente crítica desde os anos 1960.",
        pecaCertaId: "revis",
        feedbackAcerto: "Correto. É a visão revisionista.",
        feedbackErro: "É a visão revisionista.",
      },
      {
        id: "r3",
        municipioA: { nome: "300 a 400 mil mortos", emoji: "⚰️", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Até 60% da população paraguaia", emoji: "🕯️", cor: "from-slate-600 to-slate-900" },
        contexto: "Como o Paraguai lembra a guerra.",
        pecaCertaId: "mem",
        feedbackAcerto: "Correto. É a memória paraguaia da tragédia.",
        feedbackErro: "É a memória paraguaia.",
      },
      {
        id: "r4",
        municipioA: { nome: "Livro 'Genocídio Americano' (1979)", emoji: "📚", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Júlio José Chiavenato", emoji: "✍️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Autor da visão crítica no Brasil.",
        pecaCertaId: "revis",
        feedbackAcerto: "Correto. É a visão revisionista, popularizada por Chiavenato.",
        feedbackErro: "É a visão revisionista.",
      },
      {
        id: "r5",
        municipioA: { nome: "Monumentos e ruas 'Duque de Caxias'", emoji: "🏛️", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "Celebração dos generais brasileiros", emoji: "🎖️", cor: "from-emerald-600 to-slate-900" },
        contexto: "Homenagens tradicionais no Brasil.",
        pecaCertaId: "trad",
        feedbackAcerto: "Correto. É a visão tradicional.",
        feedbackErro: "É a visão tradicional.",
      },
      {
        id: "r6",
        municipioA: { nome: "1º de março, data de memória", emoji: "🕯️", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Morte de Solano López (1870)", emoji: "👑", cor: "from-slate-600 to-slate-900" },
        contexto: "Data lembrada no Paraguai.",
        pecaCertaId: "mem",
        feedbackAcerto: "Correto. É a memória paraguaia.",
        feedbackErro: "É a memória paraguaia.",
      },
    ],
    falaFinal: "6 rodadas! Você já domina as versões da Guerra do Paraguai.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos mortos na Guerra do Paraguai: comparação aproximada entre as perdas paraguaias e as dos países aliados.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgFico,
    fatias: [
      {
        id: "para",
        rotulo: "Paraguai (maioria das mortes)",
        emoji: "🕯️",
        percentual: 70,
        cor: "#334155",
        descricao:
          "Entre 300 mil e 400 mil paraguaios morreram na guerra e por doenças e fome — até 60% da população, a maior tragédia demográfica da guerra.",
        exemplos: ["🕯️ Até 60% da população", "🏛️ Território perdido", "⚔️ Cerro Corá (1870)"],
      },
      {
        id: "aliados",
        rotulo: "Países aliados (Brasil, Argentina, Uruguai)",
        emoji: "🪖",
        percentual: 30,
        cor: "#047857",
        descricao:
          "O Brasil sozinho perdeu por volta de 50 mil soldados, muitos por doenças como cólera e febre amarela, além dos gastos financeiros altíssimos da guerra.",
        exemplos: ["🪖 ~50 mil soldados brasileiros", "🦠 Cólera e febre amarela", "💰 Dívida de guerra"],
      },
    ],
    falaFinal: "A guerra deixou marcas profundas e desiguais nos dois lados do conflito.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear a Engrenagem da Guerra do Paraguai.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgIpiranga,
    perguntas: [
      {
        id: "av1",
        pergunta: "Quais países formaram a Tríplice Aliança contra o Paraguai (1865)?",
        opcoes: [
          { id: "a", texto: "Brasil, Argentina e Uruguai.", correta: true },
          { id: "b", texto: "Brasil, Chile e Peru.", correta: false },
          { id: "c", texto: "Brasil, Bolívia e Colômbia.", correta: false },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. A Tríplice Aliança uniu Brasil, Argentina e Uruguai contra o Paraguai.",
        feedbackErro: "É Brasil, Argentina e Uruguai.",
      },
      {
        id: "av2",
        pergunta: "O que a historiografia revisionista questiona sobre a guerra?",
        opcoes: [
          { id: "a", texto: "Os interesses britânicos e platinos por trás do conflito.", correta: true },
          { id: "b", texto: "Se a guerra terminou em 1870.", correta: false },
          { id: "c", texto: "Se D. Pedro II existiu.", correta: false },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Revisionistas apontam interesses econômicos na destruição do Paraguai.",
        feedbackErro: "A revisionista questiona os interesses econômicos britânicos e platinos.",
      },
      {
        id: "av3",
        pergunta: "Qual foi o impacto demográfico da guerra sobre o Paraguai?",
        opcoes: [
          { id: "a", texto: "Perda de até 60% da população, incluindo a maior parte dos homens adultos.", correta: true },
          { id: "b", texto: "A população paraguaia cresceu durante a guerra.", correta: false },
          { id: "c", texto: "Não houve impacto significativo.", correta: false },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. O Paraguai perdeu até 60% de sua população, um dos maiores desastres demográficos da história.",
        feedbackErro: "O Paraguai perdeu até 60% de sua população durante a guerra.",
      },
    ],
    selo: {
      nome: "Guerra do Paraguai em Debate",
      subtitulo: "Engrenagem das Versões Históricas",
      emoji: "⚔️",
      cor: "from-red-600 to-slate-900",
      fotoUrl: imgIpiranga,
    },
    falaFinal:
      "Engrenagem destravada. Você já entende por que a mesma guerra tem histórias tão diferentes.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Guerra do Paraguai em Debate" },
};
