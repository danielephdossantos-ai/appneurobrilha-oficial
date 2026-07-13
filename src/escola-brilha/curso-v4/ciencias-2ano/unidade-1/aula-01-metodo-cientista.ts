import type { AulaGeoV1 } from "../../types";
import bancadaImg from "@/assets/ciencias-2ano/u1-a1/bancada-laboratorio.jpg";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import microscopioImg from "@/assets/ciencias-2ano/u1-a1/microscopio-magico.jpg";
import bequerImg from "@/assets/ciencias-2ano/u1-a1/bequer-experimento.jpg";
import placasImg from "@/assets/ciencias-2ano/u1-a1/placas-petri.jpg";
import tubosImg from "@/assets/ciencias-2ano/u1-a1/tubos-ensaio.jpg";

/**
 * Ciências · 2º Ano · Unidade 1 · Aula 01
 * "O Método do Cientista" — EF02CI01
 *
 * Migrado do player custom "Laboratório roxo" pro padrão único
 * PlayerGeoV1 (mesmo formato de História/Geografia 2º ano).
 * Conteúdo pedagógico preservado; encaixado nas 11 cenas oficiais.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-metodo-cientista",
  titulo: "O Método do Cientista",
  iconeTrilha: "🔬",
  bncc: ["EF02CI01"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a lupa pela bancada do laboratório. Encontre os instrumentos do cientista.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Brilha, aconteceu uma coisa séria! O Laboratório Escola Brilha perdeu SETE cristais de energia. Sem eles, nenhuma experiência funciona. Hoje começa a busca pelo primeiro: o Cristal da Observação!",
    falaFinal:
      "Cada cristal é uma área da Ciência. Pra recuperar, você vai investigar como um cientista de verdade — observar, testar e registrar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de todo experimento, o cientista faz uma HIPÓTESE — um palpite do que acha que vai acontecer.",
    pergunta:
      "Se eu colocar uma plantinha em cada tubo, em qual ela vai crescer melhor?",
    fotoUrl: tubosImg,
    opcoes: [
      {
        id: "sol",
        titulo: "Com SOL",
        subtitulo: "luz o dia inteiro",
        emoji: "☀️",
        cor: "from-amber-400 to-orange-500",
      },
      {
        id: "escuro",
        titulo: "Sem LUZ",
        subtitulo: "tubo dentro de uma caixa",
        emoji: "🌑",
        cor: "from-purple-700 to-slate-900",
      },
      {
        id: "gelado",
        titulo: "No GELO",
        subtitulo: "tubo bem frio",
        emoji: "🧊",
        cor: "from-cyan-400 to-sky-600",
      },
    ],
    respostaCerta: "sol",
    feedbackAcerto:
      "HIPÓTESE CONFIRMADA! Plantas precisam de LUZ do sol pra crescer. Você pensou como cientista!",
    feedbackErro:
      "Quase! Pensa: plantas precisam de LUZ pra fazer o alimento delas. Qual tubo tem luz?",
    falaFinal:
      "Hipótese é um palpite. Um cientista não precisa acertar de primeira — precisa TESTAR!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Todo cientista tem quatro palavras mágicas. Abre cada caderno pra conhecer.",
    instrucao: "As 4 palavras do cientista",
    cadernos: [
      {
        id: "observar",
        capa: "OBSERVAR",
        emoji: "👀",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo: "Olhar com muita atenção pra descobrir detalhes.",
        exemplo: "Ex.: olhar uma folha com atenção e ver as linhas finas.",
        fotoUrl: microscopioImg,
      },
      {
        id: "hipotese",
        capa: "HIPÓTESE",
        emoji: "💭",
        cor: "from-cyan-400 to-sky-700",
        conteudo: "Um palpite: o que você acha que vai acontecer?",
        exemplo: "Ex.: 'Acho que o gelo derrete rápido no sol'.",
        fotoUrl: tubosImg,
      },
      {
        id: "experimento",
        capa: "EXPERIMENTO",
        emoji: "🧪",
        cor: "from-emerald-400 to-green-700",
        conteudo: "Fazer um teste pra ver se sua hipótese está certa.",
        exemplo: "Ex.: colocar dois gelos, um no sol e outro na sombra.",
        fotoUrl: bequerImg,
      },
      {
        id: "registrar",
        capa: "REGISTRAR",
        emoji: "📓",
        cor: "from-orange-400 to-amber-700",
        conteudo: "Anotar ou desenhar o que você descobriu.",
        exemplo: "Ex.: 'O gelo do sol derreteu em 5 minutos'.",
        fotoUrl: placasImg,
      },
    ],
    falaFinal:
      "Observar, hipótese, experimento e registrar. Essas são as ferramentas do cientista!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o Laboratório Escola Brilha. Toca em cada instrumento pra saber pra que serve.",
    instrucao: "Toque em cada ponto pra ouvir a Aurora",
    mapaUrl: bancadaImg,
    pontos: [
      {
        id: "microscopio",
        x: 20, y: 55,
        emoji: "🔬",
        cor: "from-purple-500 to-fuchsia-700",
        titulo: "Microscópio",
        texto: "Serve pra ver coisas MINÚSCULAS, invisíveis pro olho.",
        fotoUrl: microscopioImg,
      },
      {
        id: "tubos",
        x: 50, y: 65,
        emoji: "🧪",
        cor: "from-cyan-400 to-sky-700",
        titulo: "Tubos de ensaio",
        texto: "Aqui a gente mistura líquidos com segurança pra ver o que acontece.",
        fotoUrl: tubosImg,
      },
      {
        id: "bequer",
        x: 78, y: 70,
        emoji: "⚗️",
        cor: "from-emerald-400 to-green-700",
        titulo: "Béquer",
        texto: "Copo científico! Serve pra medir e misturar quantidades.",
        fotoUrl: bequerImg,
      },
      {
        id: "placas",
        x: 15, y: 25,
        emoji: "🥼",
        cor: "from-orange-400 to-amber-700",
        titulo: "Placas de Petri",
        texto: "Pratinhos onde a gente observa sementes e pequenas plantas crescerem.",
        fotoUrl: placasImg,
      },
      {
        id: "cristais",
        x: 50, y: 20,
        emoji: "💎",
        cor: "from-fuchsia-400 to-purple-700",
        titulo: "Cristais de energia",
        texto: "Cada cristal desbloqueia uma nova área da Ciência!",
      },
    ],
    falaFinal:
      "Cada instrumento tem uma função. Um cientista escolhe a ferramenta certa pra cada pergunta!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar do cientista ligado! 3 perguntas — toca no card certo.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que um cientista faz PRIMEIRO?",
        fotoUrl: microscopioImg,
        cards: [
          { id: "a", emoji: "👀", titulo: "Observa", cor: "from-purple-400 to-fuchsia-600" },
          { id: "b", emoji: "📚", titulo: "Decora", cor: "from-slate-400 to-slate-600" },
          { id: "c", emoji: "🎲", titulo: "Adivinha", cor: "from-orange-400 to-red-600" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Toda ciência começa OBSERVANDO o mundo com atenção.",
        feedbackErro: "Ciência não é decorar nem adivinhar. Começa OBSERVANDO.",
      },
      {
        id: "q2",
        pergunta: "O que é uma HIPÓTESE?",
        fotoUrl: tubosImg,
        cards: [
          { id: "a", emoji: "✅", titulo: "Resposta certa", cor: "from-emerald-400 to-green-600" },
          { id: "b", emoji: "💭", titulo: "Palpite pra testar", cor: "from-cyan-400 to-sky-600" },
          { id: "c", emoji: "🧸", titulo: "Brinquedo", cor: "from-pink-400 to-rose-600" },
        ],
        correta: "b",
        feedbackAcerto: "Certeza! HIPÓTESE é um palpite que a gente TESTA.",
        feedbackErro: "Hipótese NÃO é a resposta certa. É um palpite pra testar.",
      },
      {
        id: "q3",
        pergunta: "Se a hipótese estiver ERRADA, o que fazer?",
        fotoUrl: bequerImg,
        cards: [
          { id: "a", emoji: "😭", titulo: "Desistir", cor: "from-slate-400 to-slate-600" },
          { id: "b", emoji: "🔁", titulo: "Aprender e testar de novo", cor: "from-purple-400 to-fuchsia-600" },
          { id: "c", emoji: "🤥", titulo: "Mentir", cor: "from-red-400 to-rose-600" },
        ],
        correta: "b",
        feedbackAcerto: "PERFEITO! Cientistas erram, aprendem e testam de novo.",
        feedbackErro: "Cientista NÃO desiste nem mente. Errar é como se aprende!",
      },
    ],
    falaFinal:
      "Radar afiado! Você já sabe pensar como um cientista.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois interruptores iluminam o laboratório: um acende os INSTRUMENTOS, o outro os CRISTAIS. Liga os dois pra enxergar tudo!",
    instrucao: "Toque nos interruptores",
    mapaUrl: bancadaImg,
    camadas: [
      {
        id: "instrumentos",
        rotulo: "Instrumentos",
        emoji: "🔬",
        cor: "from-cyan-500 to-sky-700",
        rect: { x: 5, y: 45, w: 90, h: 45 },
        descricao:
          "Aqui moram as ferramentas: microscópio, tubos, béquer e placas. Servem pra INVESTIGAR.",
      },
      {
        id: "cristais",
        rotulo: "Cristais",
        emoji: "💎",
        cor: "from-fuchsia-500 to-purple-700",
        rect: { x: 20, y: 5, w: 60, h: 35 },
        descricao:
          "Aqui moram os 7 cristais de energia. Cada um destrava uma área da Ciência.",
      },
    ],
    falaFinal:
      "Instrumentos + cristais = laboratório funcionando. Agora é hora de investigar!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos montar o método do cientista na ORDEM certa? Toque em cada passo do primeiro pro último.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Qual é a ordem do método científico?",
    paradas: [
      {
        id: "observar",
        emoji: "👀",
        rotulo: "1. Observar",
        descricao: "Olhar o mundo com atenção — folha, formiga, gota d'água.",
        fotoUrl: microscopioImg,
      },
      {
        id: "hipotese",
        emoji: "💭",
        rotulo: "2. Hipótese",
        descricao: "Fazer um palpite: o que eu acho que vai acontecer?",
        fotoUrl: tubosImg,
      },
      {
        id: "experimento",
        emoji: "🧪",
        rotulo: "3. Experimento",
        descricao: "Testar a hipótese na prática, com cuidado.",
        fotoUrl: bequerImg,
      },
      {
        id: "registrar",
        emoji: "📓",
        rotulo: "4. Registrar",
        descricao: "Anotar ou desenhar o que descobriu.",
        fotoUrl: placasImg,
      },
    ],
    ordemCerta: ["observar", "hipotese", "experimento", "registrar"],
    feedbackAcerto:
      "Método completo! Do olhar ao registro, cada passo na ordem certa.",
    feedbackErro:
      "Essa não é a próxima. Pensa: o que vem ANTES e o que vem DEPOIS?",
    falaFinal:
      "Todo cientista segue esses 4 passos, do mais famoso do mundo até você!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez. Eu fico calada. Você lê o Diário do Cientista com seus próprios olhos.",
    tituloLivro: "📓 Diário do Pequeno Cientista",
    subtitulo: "Página 1 — Minha primeira investigação",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Hoje comecei a ser cientista. Descobri que existem 4 passos: OBSERVAR, criar uma HIPÓTESE, fazer um EXPERIMENTO e REGISTRAR o que aconteceu.",
        chaves: ["cientista", "observar", "hipótese", "experimento", "registrar"],
        definicoes: {
          cientista: "Pessoa que investiga o mundo com perguntas e testes.",
          observar: "Olhar com atenção pra descobrir detalhes.",
          hipótese: "Palpite do que a gente acha que vai acontecer.",
          experimento: "Teste feito pra ver se a hipótese está certa.",
          registrar: "Anotar ou desenhar o que descobriu.",
        },
        fotoUrl: microscopioImg,
      },
      {
        id: "p2",
        texto:
          "O mais legal é que o cientista não precisa acertar de primeira. Ele erra, aprende e tenta de novo. Errar faz parte da ciência!",
        chaves: ["errar", "aprender"],
        definicoes: {
          errar: "Quando o resultado é diferente do palpite. Serve pra aprender.",
          aprender: "Descobrir algo novo — inclusive depois de um erro.",
        },
        fotoUrl: tubosImg,
      },
      {
        id: "p3",
        texto:
          "Minha próxima missão é observar UMA coisa da natureza e anotar o que eu vi. Pode ser uma folha, uma nuvem ou um bichinho.",
        chaves: ["natureza", "anotar"],
        definicoes: {
          natureza: "Tudo que existe sem o ser humano ter feito: plantas, bichos, água, ar.",
          anotar: "Escrever ou desenhar pra não esquecer.",
        },
        fotoUrl: placasImg,
      },
    ],
    falaFinal:
      "Leitura de cientista! Você já sabe explicar sozinho os 4 passos da investigação.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Laboratório com relógio ligado! Cada rodada mostra uma pista. Escolhe o PASSO CIENTÍFICO certo antes do tempo acabar!",
    instrucao: "⏱️ Leia a pista e toque no passo certo!",
    duracaoSegundos: 15,
    pecas: [
      { id: "observar", emoji: "👀", rotulo: "Observar" },
      { id: "hipotese", emoji: "💭", rotulo: "Hipótese" },
      { id: "experimento", emoji: "🧪", rotulo: "Experimento" },
      { id: "registrar", emoji: "📓", rotulo: "Registrar" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Olhar a folha", emoji: "🍃", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Ver as nervuras", emoji: "🔍", cor: "from-teal-500 to-emerald-700" },
        contexto:
          "Brilha olha uma folha com atenção e vê linhas finas por dentro. Qual passo do método é esse?",
        pecaCertaId: "observar",
        fotoUrl: microscopioImg,
        feedbackAcerto: "Isso! Olhar com atenção é OBSERVAR.",
        feedbackErro: "Ainda não é testar nem anotar. É só OLHAR com atenção — OBSERVAR.",
      },
      {
        id: "r2",
        municipioA: { nome: "Palpite do gelo", emoji: "🧊", cor: "from-cyan-500 to-sky-700" },
        municipioB: { nome: "Acho que...", emoji: "💭", cor: "from-sky-500 to-indigo-700" },
        contexto:
          "Brilha diz: 'Acho que o gelo do sol derrete primeiro.' Qual passo é esse?",
        pecaCertaId: "hipotese",
        fotoUrl: tubosImg,
        feedbackAcerto: "Combo! 'Acho que...' é sempre HIPÓTESE.",
        feedbackErro: "Ainda não é teste — é só um palpite. HIPÓTESE!",
      },
      {
        id: "r3",
        municipioA: { nome: "Colocar dois gelos", emoji: "🧊", cor: "from-cyan-500 to-sky-700" },
        municipioB: { nome: "Testar sol × sombra", emoji: "☀️", cor: "from-amber-500 to-orange-700" },
        contexto:
          "Brilha põe um gelo no sol e outro na sombra pra ver qual derrete primeiro. Qual passo é esse?",
        pecaCertaId: "experimento",
        fotoUrl: bequerImg,
        feedbackAcerto: "Perfeito! Testar na prática é EXPERIMENTO.",
        feedbackErro: "Isso não é só palpite — é TESTAR na prática. EXPERIMENTO!",
      },
      {
        id: "r4",
        municipioA: { nome: "Desenhar no diário", emoji: "✏️", cor: "from-orange-500 to-amber-700" },
        municipioB: { nome: "Anotar 5 minutos", emoji: "📓", cor: "from-amber-500 to-yellow-700" },
        contexto:
          "Brilha anota: 'O gelo do sol derreteu em 5 minutos.' Qual passo é esse?",
        pecaCertaId: "registrar",
        fotoUrl: placasImg,
        feedbackAcerto: "Isso! Anotar pra não esquecer é REGISTRAR.",
        feedbackErro: "Não é observar nem testar — é ANOTAR o resultado. REGISTRAR!",
      },
    ],
    falaFinal:
      "Você já reconhece os 4 passos do método científico em qualquer situação!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos olhar o método do cientista dividido em duas metades: uma pra PENSAR e outra pra AGIR. Toca em cada fatia.",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada metade",
    fotoUrl: bancadaImg,
    fatias: [
      {
        id: "pensar",
        rotulo: "Pensar",
        emoji: "💭",
        percentual: 50,
        cor: "#a855f7",
        descricao:
          "Metade do método é PENSAR: olhar o mundo, se fazer perguntas e criar um palpite (a hipótese).",
        exemplos: ["Observar uma folha", "Perguntar: por quê?", "Criar hipótese"],
        fotoUrl: microscopioImg,
      },
      {
        id: "agir",
        rotulo: "Agir",
        emoji: "🧪",
        percentual: 50,
        cor: "#22d3ee",
        descricao:
          "A outra metade é AGIR: fazer o experimento de verdade e registrar o que aconteceu.",
        exemplos: ["Testar sol × sombra", "Medir o tempo", "Anotar no diário"],
        fotoUrl: bequerImg,
      },
    ],
    falaFinal:
      "Pensar + agir = método científico completo. Um cientista faz as duas coisas o tempo todo!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão pra recuperar o Cristal da Observação! Responde 3 perguntas e o selo é seu.",
    instrucao: "Responda 3 perguntas rápidas pra ganhar o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "O que um cientista faz PRIMEIRO?",
        fotoUrl: microscopioImg,
        opcoes: [
          { id: "a", texto: "Observa com atenção", correta: true },
          { id: "b", texto: "Adivinha e pronto" },
        ],
        feedbackAcerto: "Isso! Toda ciência começa OBSERVANDO.",
        feedbackErro: "Ciência começa OBSERVANDO — não adivinhando.",
      },
      {
        id: "q2",
        pergunta: "O que é uma HIPÓTESE?",
        fotoUrl: tubosImg,
        opcoes: [
          { id: "a", texto: "Um palpite pra testar", correta: true },
          { id: "b", texto: "A resposta certa" },
        ],
        feedbackAcerto: "Certeza! HIPÓTESE é palpite pra testar.",
        feedbackErro: "Hipótese NÃO é a resposta certa. É palpite pra testar.",
      },
      {
        id: "q3",
        pergunta: "Se sua hipótese estiver ERRADA, o que fazer?",
        fotoUrl: bequerImg,
        opcoes: [
          { id: "a", texto: "Aprender e testar outra", correta: true },
          { id: "b", texto: "Desistir de ser cientista" },
        ],
        feedbackAcerto: "PERFEITO! Errar faz parte da ciência.",
        feedbackErro: "Cientista NÃO desiste. Erra, aprende e tenta de novo.",
      },
    ],
    selo: {
      nome: "Cristal da Observação",
      subtitulo: "1º cristal do Laboratório Escola Brilha desbloqueado!",
      emoji: "💎",
      cor: "from-purple-400 via-fuchsia-500 to-purple-700",
    },
    falaFinal:
      "Você recuperou o Cristal da Observação! O Microscópio Virtual está desbloqueado pras próximas missões.",
  },

  recompensa: {
    xp: 100,
    moedas: 20,
    medalha: "Pequeno Cientista",
  },
};
