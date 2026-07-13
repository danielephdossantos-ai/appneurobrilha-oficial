import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";
import feira from "@/assets/geografia-3ano/feira-livre-bairro.jpg";
import familiaMercado from "@/assets/geografia-3ano/familia-supermercado-compras.jpg";

/**
 * Geografia · 2º Ano (v2) · Unidade 1 · Aula 02
 * "Convivência no Lugar" — EF02GE02
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-convivencia-no-lugar",
  titulo: "A Praça é de Todos",
  iconeTrilha: "🤝",
  bncc: ["EF02GE02"],
  duracaoMin: 18,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a lupa pela praça. Uma criança nova chegou e está SOZINHA. O que a gente faz?",
    mapaUrl: feira,
    aurora:
      "Oi, cartógrafo! Hoje a gente vai olhar como as pessoas CONVIVEM no lugar. Convivência é morar junto com respeito. Passa a lupa e observa!",
    falaFinal:
      "Viu? A criança nova chegou. Um convite pra brincar já muda o dia dela. Isso é CONVIVER!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite de cartógrafo: como as pessoas do bairro devem se tratar?",
    pergunta: "Como é uma boa convivência?",
    opcoes: [
      { id: "cada-um", titulo: "Cada um por si", subtitulo: "ninguém ajuda", emoji: "🙅", cor: "from-slate-500 to-slate-700" },
      { id: "respeito", titulo: "Com respeito", subtitulo: "cumprimenta, ajuda, divide", emoji: "🤝", cor: "from-emerald-400 to-teal-600" },
    ],
    respostaCerta: "respeito",
    feedbackAcerto: "Isso! Convivência boa é com RESPEITO.",
    feedbackErro: "Cada um por si é solitário. O bom é conviver com RESPEITO.",
    falaFinal: "Convivência começa com pequenos gestos: 'oi', 'obrigado', 'posso ajudar?'.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras do cartógrafo pra hoje. Toca em cada uma!",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "conviver", capa: "Conviver", emoji: "🤝", cor: "from-emerald-400 to-teal-600", conteudo: "É viver JUNTO com outras pessoas, com respeito e amizade.", exemplo: "Na escola, eu CONVIVO com meus colegas todo dia." },
      { id: "respeito", capa: "Respeito", emoji: "💛", cor: "from-amber-400 to-orange-600", conteudo: "É tratar o outro com CARINHO e sem machucar — nem com palavra nem com atitude.", exemplo: "Espero minha vez de falar = RESPEITO." },
      { id: "regra", capa: "Regra", emoji: "📏", cor: "from-sky-400 to-indigo-600", conteudo: "É um COMBINADO que todos seguem pra ficar bom pra todo mundo.", exemplo: "Faixa de pedestre = REGRA do trânsito." },
      { id: "diversidade", capa: "Diversidade", emoji: "🌈", cor: "from-fuchsia-400 to-purple-600", conteudo: "É a MISTURA de gente diferente: cor, jeito, idade, religião. Cada um é único.", exemplo: "Meu bairro tem DIVERSIDADE!" },
    ],
    falaFinal: "4 palavras guardadas. Bora usar!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Olha a PRAÇA do bairro. Toca em cada balão que eu conto o que rola lá.",
    instrucao: "Toque nos balões",
    mapaUrl: feira,
    pontos: [
      { id: "brincar", x: 30, y: 40, emoji: "🎈", cor: "from-pink-400 to-rose-600", titulo: "Crianças brincando", texto: "As crianças brincam JUNTAS mesmo sem se conhecerem. Isso é CONVIVER." },
      { id: "idosos", x: 70, y: 30, emoji: "👵", cor: "from-amber-400 to-orange-600", titulo: "Idosos conversando", texto: "Idosos sentam nos bancos pra conversar. Pra andar, eles precisam de RESPEITO — nada de correr pertinho deles." },
      { id: "cadeirante", x: 50, y: 65, emoji: "♿", cor: "from-sky-400 to-indigo-600", titulo: "Rampa para cadeirante", texto: "A praça tem RAMPA. Isso é RESPEITO à DIVERSIDADE — todo mundo pode passear." },
      { id: "lixo", x: 15, y: 70, emoji: "🗑️", cor: "from-emerald-400 to-teal-600", titulo: "Lixo no lugar certo", texto: "Jogar lixo na lixeira é uma REGRA que deixa o lugar bom pra todo mundo." },
    ],
    falaFinal: "A praça é de TODO MUNDO. Cada gesto pequeno faz diferença.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Radar do respeito ligado! 3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Uma criança nova chegou na praça e está sozinha. O que fazer?",
        cards: [
          { id: "ignorar", emoji: "🙈", titulo: "Ignorar", cor: "from-slate-400 to-slate-600" },
          { id: "convidar", emoji: "🤝", titulo: "Convidar pra brincar", cor: "from-emerald-400 to-teal-600" },
          { id: "correr", emoji: "🏃", titulo: "Correr pra longe", cor: "from-amber-400 to-orange-500" },
        ],
        correta: "convidar",
        feedbackAcerto: "Isso! Um convite muda o dia dela.",
        feedbackErro: "Ignorar é solitário. CONVIDAR é conviver.",
      },
      {
        id: "q2",
        pergunta: "Qual dessas ATITUDES mostra RESPEITO?",
        cards: [
          { id: "esperar", emoji: "🙋", titulo: "Esperar a vez de falar", cor: "from-emerald-400 to-teal-600" },
          { id: "gritar", emoji: "📢", titulo: "Gritar por cima", cor: "from-rose-400 to-red-600" },
          { id: "empurrar", emoji: "👊", titulo: "Empurrar na fila", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "esperar",
        feedbackAcerto: "Boa! ESPERAR a vez é respeito.",
        feedbackErro: "Gritar e empurrar não é respeito. Esperar a vez é.",
      },
      {
        id: "q3",
        pergunta: "Por que a praça tem RAMPA?",
        cards: [
          { id: "diverte", emoji: "🎢", titulo: "Pra divertir", cor: "from-purple-400 to-pink-500" },
          { id: "cadeirante", emoji: "♿", titulo: "Pra todos poderem passear", cor: "from-sky-400 to-indigo-600" },
          { id: "chuva", emoji: "☔", titulo: "Pra escorrer a chuva", cor: "from-cyan-400 to-blue-600" },
        ],
        correta: "cadeirante",
        feedbackAcerto: "Exato! Rampa = respeito à diversidade.",
        feedbackErro: "A rampa serve pra CADEIRANTE e carrinho — todo mundo passeia.",
      },
    ],
    falaFinal: "Radar preciso! Você entende o que é respeitar.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Vou acender 2 CAMADAS da praça: quem VIVE ali e quem TRABALHA. Liga as duas!",
    instrucao: "Toque nos interruptores",
    mapaUrl: feira,
    camadas: [
      { id: "vive", rotulo: "Quem VIVE aqui", emoji: "👨‍👩‍👧", cor: "from-emerald-500 to-teal-600", rect: { x: 10, y: 20, w: 45, h: 60 }, descricao: "Famílias que passeiam, crianças que brincam, idosos que conversam. É o lugar de convivência." },
      { id: "trabalha", rotulo: "Quem TRABALHA aqui", emoji: "🧹", cor: "from-sky-500 to-indigo-600", rect: { x: 50, y: 25, w: 45, h: 55 }, descricao: "Feirantes, jardineiro, gari, guarda da praça. Eles cuidam pra praça ficar boa pra todos." },
    ],
    falaFinal: "Todo lugar tem gente que VIVE e gente que CUIDA. Os dois merecem respeito.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos ORGANIZAR o passeio na feira do bairro? Toca na ordem certa.",
    instrucao: "Toque na ordem certa",
    pergunta: "Como fazer uma boa compra na feira?",
    paradas: [
      { id: "chega", emoji: "🚶", rotulo: "Chega e cumprimenta o feirante", descricao: "'Bom dia!' abre a conversa com RESPEITO." },
      { id: "pede", emoji: "🍎", rotulo: "Pede o que quer sem gritar", descricao: "Fala calmo: 'Meio quilo de maçã, por favor'." },
      { id: "espera", emoji: "⏱️", rotulo: "Espera sua vez na fila", descricao: "Furar a fila é DESRESPEITO com quem chegou primeiro." },
      { id: "agradece", emoji: "🙏", rotulo: "Paga e agradece", descricao: "'Obrigado!' fecha com respeito. O feirante sorri!" },
    ],
    ordemCerta: ["chega", "pede", "espera", "agradece"],
    feedbackAcerto: "Convivência 10!",
    feedbackErro: "Pensa: primeiro cumprimenta, depois pede, espera e agradece.",
    falaFinal: "Ver? 4 gestinhos e o mundo fica melhor.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez! Eu FICO CALADA. Você lê e toca nas palavras importantes.",
    tituloLivro: "📔 Diário do Cartógrafo",
    subtitulo: "Página 2 — A Praça é de Todos",
    paragrafos: [
      { id: "p1", texto: "CONVIVER é viver JUNTO com outras pessoas. No bairro, a gente convive com vizinhos, colegas e desconhecidos.", chaves: ["conviver", "vizinhos"] },
      { id: "p2", texto: "RESPEITO é tratar o outro com carinho: esperar a vez, não empurrar, não gritar.", chaves: ["respeito"] },
      { id: "p3", texto: "REGRA é um combinado que TODOS seguem: jogar lixo na lixeira, atravessar na faixa, esperar a fila.", chaves: ["regra", "faixa"] },
      { id: "p4", texto: "O bairro tem DIVERSIDADE: gente de idade, cor e jeito diferente. Cada um é único e todos merecem RESPEITO.", chaves: ["diversidade", "respeito"] },
    ],
    falaFinal: "Você leu como um cartógrafo pequeno! Guarda essas 4 palavras.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo RESPEITO EXPRESS! Cada rodada mostra uma cena — escolha o GESTO CERTO antes do tempo!",
    instrucao: "⏱️ Escolha o gesto certo!",
    duracaoSegundos: 15,
    pecas: [
      { id: "esperar", emoji: "🙋", rotulo: "Esperar" },
      { id: "convidar", emoji: "🤝", rotulo: "Convidar" },
      { id: "ajudar", emoji: "💛", rotulo: "Ajudar" },
      { id: "agradecer", emoji: "🙏", rotulo: "Agradecer" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Sala de aula", emoji: "🏫", cor: "from-sky-500 to-indigo-600" },
        municipioB: { nome: "Amigo caiu", emoji: "🤕", cor: "from-rose-400 to-red-500" },
        contexto: "Um coleguinha caiu no recreio. Você está ao lado. O que fazer?",
        pecaCertaId: "ajudar",
        feedbackAcerto: "Combo! AJUDAR é respeito.",
        feedbackErro: "Colega caído a gente AJUDA 💛.",
      },
      {
        id: "r2",
        municipioA: { nome: "Praça", emoji: "🌳", cor: "from-emerald-500 to-teal-600" },
        municipioB: { nome: "Criança nova", emoji: "🧒", cor: "from-amber-400 to-orange-500" },
        contexto: "Uma criança nova chegou na praça e está sozinha.",
        pecaCertaId: "convidar",
        feedbackAcerto: "Sim! CONVIDAR pra brincar.",
        feedbackErro: "Criança sozinha? A gente CONVIDA 🤝.",
      },
      {
        id: "r3",
        municipioA: { nome: "Padaria", emoji: "🥖", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Fila", emoji: "🧍🧍🧍", cor: "from-slate-400 to-slate-600" },
        contexto: "Tem 4 pessoas na sua frente na fila da padaria.",
        pecaCertaId: "esperar",
        feedbackAcerto: "Isso! ESPERAR a vez.",
        feedbackErro: "Furar fila é errado. A gente ESPERA 🙋.",
      },
      {
        id: "r4",
        municipioA: { nome: "Feira", emoji: "🍎", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Feirante", emoji: "👩‍🌾", cor: "from-lime-500 to-emerald-700" },
        contexto: "O feirante te entrega a sacola de maçãs. E aí?",
        pecaCertaId: "agradecer",
        feedbackAcerto: "Boa! AGRADECER.",
        feedbackErro: "Recebeu = AGRADECEU 🙏.",
      },
    ],
    falaFinal: "Respeito Express concluído! Você é cartógrafo dos bons gestos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Convivência é uma PIZZA de 2 fatias: gestos meus e regras do lugar. Toca em cada!",
    instrucao: "🍕 Toque nas fatias",
    fatias: [
      {
        id: "gestos",
        rotulo: "Meus gestos",
        emoji: "💛",
        percentual: 50,
        cor: "#f59e0b",
        descricao: "Cumprimentar, esperar a vez, agradecer, ajudar, convidar. Depende SÓ de mim.",
        exemplos: ["Oi!", "Obrigado!", "Posso ajudar?"],
      },
      {
        id: "regras",
        rotulo: "Regras do lugar",
        emoji: "📏",
        percentual: 50,
        cor: "#3b82f6",
        descricao: "Lixo na lixeira, faixa de pedestre, silêncio em hospital. Combinado que todos seguem.",
        exemplos: ["Lixo na lixeira", "Atravessar na faixa", "Fila do ônibus"],
      },
    ],
    falaFinal: "As 2 fatias JUNTAS fazem uma boa convivência no lugar!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão! 3 perguntas pra ganhar sua insígnia da Convivência.",
    instrucao: "Escolha a resposta certa",
    perguntas: [
      {
        id: "p1",
        pergunta: "O que é CONVIVER?",
        opcoes: [
          { id: "a", texto: "Brincar sozinho." },
          { id: "b", texto: "Viver junto com outras pessoas, com respeito.", correta: true },
          { id: "c", texto: "Trabalhar em silêncio." },
        ],
        feedbackAcerto: "Isso! Conviver = viver junto.",
        feedbackErro: "CONVIVER é viver JUNTO com respeito.",
      },
      {
        id: "p2",
        pergunta: "Uma REGRA do bairro é...",
        opcoes: [
          { id: "a", texto: "Jogar lixo em qualquer canto." },
          { id: "b", texto: "Atravessar fora da faixa." },
          { id: "c", texto: "Jogar lixo na lixeira e usar a faixa.", correta: true },
        ],
        feedbackAcerto: "Boa! Regra = combinado que ajuda todos.",
        feedbackErro: "Regra boa: LIXEIRA e FAIXA.",
      },
      {
        id: "p3",
        pergunta: "DIVERSIDADE quer dizer...",
        opcoes: [
          { id: "a", texto: "Todo mundo igual." },
          { id: "b", texto: "Mistura de gente diferente, e todos merecem respeito.", correta: true },
          { id: "c", texto: "Só uma cor de pele." },
        ],
        feedbackAcerto: "Perfeito! Diversidade é a mistura que enriquece.",
        feedbackErro: "Diversidade = gente DIFERENTE, todos com respeito.",
      },
    ],
    selo: {
      nome: "Guardião da Convivência",
      subtitulo: "Insígnia oficial — Aula 02",
      emoji: "🤝",
      cor: "from-teal-300 to-emerald-500",
    },
    falaFinal: "Insígnia da convivência conquistada! Próxima aula: quem TRABALHA no campo e na cidade.",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Guardião da Convivência" },
};
