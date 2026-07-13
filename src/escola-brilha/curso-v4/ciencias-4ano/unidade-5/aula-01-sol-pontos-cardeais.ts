import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png";
import nascerImg from "@/assets/ciencias-4ano/u5-a1/nascer-sol.jpg";
import sombraImg from "@/assets/ciencias-4ano/u5-a1/sombra-vara.jpg";
import bussolaImg from "@/assets/ciencias-4ano/u5-a1/bussola.jpg";
import relogioImg from "@/assets/ciencias-4ano/u5-a1/relogio-solar.jpg";
import rosaImg from "@/assets/ciencias-4ano/u5-a1/rosa-ventos.jpg";
import porDoSolImg from "@/assets/ciencias-4ano/u5-a1/por-do-sol.jpg";

/**
 * Ciências · 4º Ano · Unidade 5 · Aula 01
 * "Sol, Sombras e Pontos Cardeais" — EF04CI09/10
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-sol-pontos-cardeais",
  titulo: "Sol e Pontos Cardeais",
  iconeTrilha: "☀️",
  bncc: ["EF04CI09", "EF04CI10"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pelo horizonte. Observe o nascer do sol.",
    mapaUrl: nascerImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Equipe, missão de observação astronômica. O SOL NASCE sempre no MESMO LADO — e SE PÕE do lado oposto. Antes das bússolas e GPS, isso guiava os navegadores. Vamos entender essa constância.",
    falaFinal:
      "O céu é o mapa mais antigo da humanidade. Ler o sol é ler direções.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Se você está de frente pro SOL DA MANHÃ, qual direção está?",
    pergunta: "Sol da manhã nasce no...",
    fotoUrl: nascerImg,
    opcoes: [
      { id: "leste", titulo: "LESTE", subtitulo: "sempre nasce por ali", emoji: "🌅", cor: "from-amber-500 to-orange-700" },
      { id: "oeste", titulo: "OESTE", subtitulo: "onde se põe", emoji: "🌇", cor: "from-red-500 to-purple-700" },
      { id: "norte", titulo: "NORTE", subtitulo: "onde a bússola aponta", emoji: "⬆️", cor: "from-cyan-500 to-sky-700" },
    ],
    respostaCerta: "leste",
    feedbackAcerto:
      "Correto. O sol NASCE no LESTE e se PÕE no OESTE. Todo dia, no mundo inteiro.",
    feedbackErro:
      "O sol NASCE (manhã) no LESTE. Se PÕE (tarde) no OESTE. Regra que vale em todo lugar.",
    falaFinal:
      "Leste = onde nasce. Oeste = onde se põe. Duas direções que vêm do próprio sol.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos essenciais de orientação. Estuda cada caderno.",
    instrucao: "Vocabulário técnico da orientação",
    cadernos: [
      {
        id: "leste",
        capa: "LESTE (L)",
        emoji: "🌅",
        cor: "from-amber-500 to-orange-700",
        conteudo: "Direção onde o SOL NASCE, todas as manhãs.",
        exemplo: "Ex.: 6h da manhã, olhe pro sol — você está de frente pro LESTE.",
        fotoUrl: nascerImg,
      },
      {
        id: "oeste",
        capa: "OESTE (O)",
        emoji: "🌇",
        cor: "from-red-500 to-purple-700",
        conteudo: "Direção onde o SOL SE PÕE, ao entardecer. Oposto ao leste.",
        exemplo: "Ex.: 6h da tarde, o sol está lá — é o OESTE.",
        fotoUrl: porDoSolImg,
      },
      {
        id: "norte-sul",
        capa: "NORTE / SUL",
        emoji: "🧭",
        cor: "from-cyan-500 to-sky-700",
        conteudo: "As outras duas direções. Se você abrir os braços com o leste na frente, direita = SUL, esquerda = NORTE (no hemisfério sul).",
        exemplo: "Ex.: bússola aponta sempre pro NORTE magnético.",
        fotoUrl: bussolaImg,
      },
      {
        id: "sombra",
        capa: "SOMBRA",
        emoji: "🕶️",
        cor: "from-slate-600 to-slate-900",
        conteudo: "Onde a luz do sol NÃO chega, atrás de um objeto. Muda de tamanho conforme a hora do dia.",
        exemplo: "Ex.: sombra ao meio-dia é curta; de manhã e à tarde é longa.",
        fotoUrl: sombraImg,
      },
      {
        id: "relogio-solar",
        capa: "RELÓGIO SOLAR",
        emoji: "🕰️",
        cor: "from-amber-700 to-yellow-900",
        conteudo: "Instrumento antigo que usa a SOMBRA do sol pra marcar a hora do dia.",
        exemplo: "Ex.: uma vara fincada no chão faz sombra que gira ao longo do dia.",
        fotoUrl: relogioImg,
      },
    ],
    falaFinal: "Leste, Oeste, Norte, Sul, sombra e relógio solar. Vocabulário do navegador antigo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toca em cada ponto do horizonte pra entender a orientação.",
    instrucao: "Toque em cada ponto",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: rosaImg,
    pontos: [
      {
        id: "norte", x: 50, y: 15, emoji: "⬆️", cor: "from-cyan-500 to-sky-700",
        titulo: "NORTE (N)",
        texto: "Direção pra onde a bússola aponta. No hemisfério sul, fica atrás de você quando você olha pro sol do meio-dia.",
        fotoUrl: bussolaImg,
      },
      {
        id: "leste", x: 85, y: 50, emoji: "🌅", cor: "from-amber-500 to-orange-700",
        titulo: "LESTE (L)",
        texto: "Direção onde o sol NASCE, todos os dias. Também chamada de 'oriente' (por isso países 'orientais' ficam a leste).",
        fotoUrl: nascerImg,
      },
      {
        id: "sul", x: 50, y: 85, emoji: "⬇️", cor: "from-cyan-700 to-blue-900",
        titulo: "SUL (S)",
        texto: "Oposto ao norte. No Brasil, apontar pro sul é apontar pra Antártida.",
        fotoUrl: rosaImg,
      },
      {
        id: "oeste", x: 15, y: 50, emoji: "🌇", cor: "from-red-500 to-purple-700",
        titulo: "OESTE (O)",
        texto: "Direção onde o sol SE PÕE. Também chamada de 'ocidente'. Oposto do leste.",
        fotoUrl: porDoSolImg,
      },
      {
        id: "sombra-vara", x: 50, y: 50, emoji: "🕰️", cor: "from-slate-600 to-slate-900",
        titulo: "Sombra da vara",
        texto: "Se cravar uma vara no chão ao meio-dia, a sombra aponta pro SUL (no hemisfério sul). Método sem bússola.",
        fotoUrl: sombraImg,
      },
    ],
    falaFinal: "Quatro pontos cardeais. Você orienta qualquer mapa com sol e sombra.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas técnicas de orientação.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O sol NASCE no:",
        fotoUrl: nascerImg,
        cards: [
          { id: "a", emoji: "🌅", titulo: "Leste", cor: "from-amber-500 to-orange-700" },
          { id: "b", emoji: "🌇", titulo: "Oeste", cor: "from-red-500 to-purple-700" },
          { id: "c", emoji: "⬆️", titulo: "Norte", cor: "from-cyan-500 to-sky-700" },
        ],
        correta: "a",
        feedbackAcerto: "Sim. Sol nasce no LESTE — sempre.",
        feedbackErro: "Nascer do sol = LESTE. Pôr do sol = OESTE.",
      },
      {
        id: "q2",
        pergunta: "Uma bússola aponta pra qual direção?",
        fotoUrl: bussolaImg,
        cards: [
          { id: "a", emoji: "⬆️", titulo: "Norte magnético", cor: "from-cyan-500 to-sky-700" },
          { id: "b", emoji: "☀️", titulo: "Sol", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "🌍", titulo: "Onde você está", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Bússola aponta pro NORTE magnético da Terra.",
        feedbackErro: "Bússola sempre aponta pro NORTE. Não pro sol nem pra você.",
      },
      {
        id: "q3",
        pergunta: "A sombra do meio-dia é:",
        fotoUrl: sombraImg,
        cards: [
          { id: "a", emoji: "🕐", titulo: "Curta", cor: "from-yellow-500 to-orange-700" },
          { id: "b", emoji: "🌆", titulo: "Longa", cor: "from-slate-600 to-slate-900" },
          { id: "c", emoji: "🚫", titulo: "Não tem sombra", cor: "from-red-500 to-rose-700" },
        ],
        correta: "a",
        feedbackAcerto: "Sim. Sol no alto do céu = sombra CURTA.",
        feedbackErro: "Ao meio-dia o sol está bem no alto, então a sombra é CURTA. De manhã e à tarde, longa.",
      },
    ],
    falaFinal: "Você orienta-se com o sol e a sombra.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "A orientação tem duas técnicas: TRADICIONAL (sol e estrelas) e INSTRUMENTAL (bússola e GPS). Ambas funcionam.",
    instrucao: "Toque nos interruptores",
    mapaUrl: rosaImg,
    camadas: [
      {
        id: "natural",
        rotulo: "Orientação natural",
        emoji: "☀️",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 5, y: 5, w: 90, h: 45 },
        descricao: "Usa o sol (nasce leste, põe oeste), sombra da vara ao meio-dia, e estrelas (Cruzeiro do Sul aponta pro sul).",
        fotoUrl: sombraImg,
      },
      {
        id: "instrumental",
        rotulo: "Orientação com instrumentos",
        emoji: "🧭",
        cor: "from-cyan-500 to-sky-700",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao: "Usa bússola (aponta pro norte magnético) e GPS (satélites que dizem sua posição exata).",
        fotoUrl: bussolaImg,
      },
    ],
    falaFinal: "Sem bússola, ainda dá pra se orientar. A natureza sempre teve mapas.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Rota do sol durante um dia inteiro.",
    instrucao: "Toque nas paradas na ORDEM correta",
    pergunta: "Sequência do movimento aparente do sol:",
    paradas: [
      { id: "leste", emoji: "🌅", rotulo: "1. Leste (manhã)", descricao: "Sol NASCE no horizonte leste.", fotoUrl: nascerImg },
      { id: "alto", emoji: "☀️", rotulo: "2. Alto (meio-dia)", descricao: "Sol chega no ponto mais alto do céu. Sombra CURTA.", fotoUrl: relogioImg },
      { id: "oeste", emoji: "🌇", rotulo: "3. Oeste (tarde)", descricao: "Sol desce e SE PÕE no horizonte oeste.", fotoUrl: porDoSolImg },
      { id: "noite", emoji: "🌙", rotulo: "4. Noite", descricao: "Sol some. Estrelas aparecem. Terra continua girando.", fotoUrl: rosaImg },
    ],
    ordemCerta: ["leste", "alto", "oeste", "noite"],
    feedbackAcerto: "Rota diária completa. O sol PARECE se mover, mas quem gira é a Terra.",
    feedbackErro: "Repense: manhã → meio-dia → tarde → noite. O sol vai do leste ao oeste.",
    falaFinal: "Todo dia, esse ciclo se repete. Ciência é reconhecer padrões.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua leitura. Relatório do observatório.",
    tituloLivro: "📓 Relatório · Observatório de Campo",
    subtitulo: "Investigação: sol e orientação",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O SOL nasce no LESTE e se põe no OESTE. Esse movimento APARENTE acontece porque a TERRA GIRA em torno de si mesma (rotação). Uma volta completa dura 24 HORAS — um dia.",
        chaves: ["leste", "oeste", "rotação"],
        definicoes: {
          leste: "Direção onde o sol nasce.",
          oeste: "Direção onde o sol se põe.",
          rotação: "Giro da Terra em torno do próprio eixo.",
        },
        fotoUrl: nascerImg,
      },
      {
        id: "p2",
        texto:
          "Existem 4 PONTOS CARDEAIS principais: NORTE, SUL, LESTE e OESTE. A BÚSSOLA sempre aponta pro NORTE magnético da Terra. Se você tem o leste em frente e o oeste atrás, o norte fica à esquerda e o sul à direita (hemisfério sul).",
        chaves: ["pontos cardeais", "bússola"],
        definicoes: {
          "pontos cardeais": "As 4 direções básicas: N, S, L, O.",
          bússola: "Instrumento com agulha magnética que aponta pro norte.",
        },
        fotoUrl: bussolaImg,
      },
      {
        id: "p3",
        texto:
          "A SOMBRA de um objeto muda de tamanho conforme a hora. AO MEIO-DIA o sol está bem no alto e a sombra é CURTA. DE MANHÃ e À TARDE o sol está baixo e a sombra é LONGA. RELÓGIOS SOLARES antigos usavam essa relação pra medir o tempo.",
        chaves: ["sombra", "relógios solares"],
        definicoes: {
          sombra: "Área escura atrás de um objeto que bloqueia a luz.",
          "relógios solares": "Instrumentos que usam a sombra pra marcar horas.",
        },
        fotoUrl: sombraImg,
      },
    ],
    falaFinal: "Você lê o céu como navegadores antigos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado. Classifica cada pista de orientação.",
    instrucao: "⏱️ Escolha certo",
    duracaoSegundos: 20,
    pecas: [
      { id: "leste", emoji: "🌅", rotulo: "Leste" },
      { id: "oeste", emoji: "🌇", rotulo: "Oeste" },
      { id: "norte", emoji: "🧭", rotulo: "Norte" },
      { id: "sombra", emoji: "🕶️", rotulo: "Sombra" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Sol nasce", emoji: "🌅", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "6h da manhã", emoji: "🌄", cor: "from-yellow-400 to-orange-600" },
        contexto: "São 6 da manhã e o sol começa a aparecer no horizonte. Que direção é essa?",
        pecaCertaId: "leste",
        fotoUrl: nascerImg,
        feedbackAcerto: "Sim. Nascer do sol = LESTE.",
        feedbackErro: "Sol nascendo é sempre LESTE.",
      },
      {
        id: "r2",
        municipioA: { nome: "Sol se põe", emoji: "🌇", cor: "from-red-500 to-purple-700" },
        municipioB: { nome: "18h", emoji: "🌆", cor: "from-orange-600 to-red-800" },
        contexto: "São 6 da tarde e o sol desce no horizonte. Qual direção?",
        pecaCertaId: "oeste",
        fotoUrl: porDoSolImg,
        feedbackAcerto: "Correto. Pôr do sol = OESTE.",
        feedbackErro: "Sol se pondo = OESTE. Sempre oposto ao nascer.",
      },
      {
        id: "r3",
        municipioA: { nome: "Bússola aponta", emoji: "🧭", cor: "from-cyan-500 to-sky-700" },
        municipioB: { nome: "Estrela polar", emoji: "⭐", cor: "from-slate-600 to-slate-900" },
        contexto: "Uma agulha magnética que sempre gira e aponta pra uma direção fixa.",
        pecaCertaId: "norte",
        fotoUrl: bussolaImg,
        feedbackAcerto: "Sim. Bússola aponta pro NORTE.",
        feedbackErro: "Bússola SEMPRE aponta pro NORTE magnético.",
      },
      {
        id: "r4",
        municipioA: { nome: "Vara ao meio-dia", emoji: "🕰️", cor: "from-slate-600 to-slate-900" },
        municipioB: { nome: "Marca a hora sem bússola", emoji: "☀️", cor: "from-amber-600 to-orange-800" },
        contexto: "Uma vara cravada no chão sob o sol projeta uma linha escura que gira ao longo do dia.",
        pecaCertaId: "sombra",
        fotoUrl: sombraImg,
        feedbackAcerto: "Isso. Vara + sol = SOMBRA que marca hora e direção.",
        feedbackErro: "O que a vara projeta é SOMBRA. Base do relógio solar.",
      },
    ],
    falaFinal: "Você orienta-se com pistas naturais e instrumentos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A orientação pelo sol tem dois usos principais.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: rosaImg,
    fatias: [
      {
        id: "direcao",
        rotulo: "Achar direção",
        emoji: "🧭",
        percentual: 50,
        cor: "#0891b2",
        descricao: "Sol nasce a LESTE, põe a OESTE. Isso já te dá 4 direções pra achar caminho.",
        exemplos: ["Nascer = leste", "Pôr = oeste", "Bússola = norte"],
        fotoUrl: bussolaImg,
      },
      {
        id: "hora",
        rotulo: "Medir tempo",
        emoji: "🕰️",
        percentual: 50,
        cor: "#d97706",
        descricao: "A posição do sol e o tamanho da sombra marcam a hora do dia. Base dos relógios solares.",
        exemplos: ["Meio-dia = sombra curta", "Manhã/tarde = sombra longa", "Relógio solar"],
        fotoUrl: relogioImg,
      },
    ],
    falaFinal: "O sol é o instrumento astronômico mais antigo — mede espaço e tempo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Missão final da expedição astronômica.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "O sol se põe no:",
        fotoUrl: porDoSolImg,
        opcoes: [
          { id: "a", texto: "Oeste", correta: true },
          { id: "b", texto: "Norte" },
        ],
        feedbackAcerto: "Sim. Sempre OESTE.",
        feedbackErro: "Pôr do sol = OESTE, sempre.",
      },
      {
        id: "q2",
        pergunta: "Ao meio-dia, a sombra é:",
        fotoUrl: sombraImg,
        opcoes: [
          { id: "a", texto: "Curta (sol no alto)", correta: true },
          { id: "b", texto: "Longa (sol baixo)" },
        ],
        feedbackAcerto: "Correto. Sol no alto = sombra CURTA.",
        feedbackErro: "Meio-dia = sol bem no alto = sombra CURTA.",
      },
      {
        id: "q3",
        pergunta: "Bússola aponta pra:",
        fotoUrl: bussolaImg,
        opcoes: [
          { id: "a", texto: "Norte", correta: true },
          { id: "b", texto: "Onde o sol está" },
        ],
        feedbackAcerto: "Sim. NORTE magnético.",
        feedbackErro: "Bússola SEMPRE aponta pro NORTE.",
      },
    ],
    selo: {
      nome: "Selo do Observatório",
      subtitulo: "Unidade 5 concluída · Astrônomo Iniciante",
      emoji: "🌞",
      cor: "from-amber-400 via-orange-500 to-red-700",
    },
    falaFinal: "Selo do observatório registrado. Próxima missão: estações do ano.",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Astrônomo Júnior" },
};
