import type { AulaGeoV1 } from "../../types";
import { url as selo } from "@/assets/geografia-5ano/selo-eco-cidadao.jpg.asset.json";
import { url as renovavel } from "@/assets/geografia-5ano/energia-renovavel.jpg.asset.json";
import { url as litoral } from "@/assets/geografia-5ano/distribuicao-litoral.jpg.asset.json";
/**
 * Geografia · 5º Ano · Unidade 7 · Aula 01
 * "O Selo Eco-Cidadão" — Consolidação do Fundamental 1
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-eco-cidadao",
  titulo: "O Selo Eco-Cidadão",
  iconeTrilha: "🏆",
  bncc: ["EF05GE01", "EF05GE03", "EF05GE05", "EF05GE06", "EF05GE08", "EF05GE11"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Missão cumprida, Explorador!",
    mapaUrl: selo,
    imagemDestaqueUrl: selo,
    aurora:
      "Explorador, chegamos ao FIM do Ensino Fundamental 1 de Geografia! Você já entende POPULAÇÃO, CIDADES, MAPAS, ENERGIA, ÁGUA e RESÍDUOS. Agora vai receber o SELO ECO-CIDADÃO SUPREMO — símbolo de quem cuida do planeta.",
    falaFinal: "Um Eco-Cidadão pensa GLOBAL e age LOCAL. Vamos consolidar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: qual é o PAPEL de um ECO-CIDADÃO no mundo de hoje?",
    pergunta: "Ser Eco-Cidadão é...",
    opcoes: [
      {
        id: "conecta",
        titulo: "PENSAR global, AGIR local",
        subtitulo: "cuidar do planeta na sua rua",
        emoji: "🌍",
        cor: "from-emerald-400 to-green-600",
      },
      {
        id: "longe",
        titulo: "PROBLEMA é só longe",
        subtitulo: "não me diz respeito",
        emoji: "🙅",
        cor: "from-slate-400 to-gray-600",
      },
    ],
    respostaCerta: "conecta",
    feedbackAcerto:
      "Isso! Suas ações LOCAIS somam com bilhões de outras e mudam o PLANETA. Isso é ser Eco-Cidadão.",
    feedbackErro: "Problemas ambientais são de TODOS. Fechar torneira aqui = ajuda o mundo inteiro.",
    falaFinal: "Cidadão do planeta. Bora fechar a jornada.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As 4 grandes chaves que fecham o Fundamental 1.",
    instrucao: "Toque em cada caderno pra revisar",
    cadernos: [
      {
        id: "populacao",
        capa: "1. População e cidades",
        emoji: "👥",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "Aprendemos sobre CENSO, DISTRIBUIÇÃO no litoral e ÊXODO RURAL que criou as METRÓPOLES.",
        exemplo: "Ex.: SP, RJ e BH concentram mais de 50 milhões.",
        fotoUrl: litoral,
      },
      {
        id: "mapas",
        capa: "2. Mapas e regiões",
        emoji: "🗺️",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "Vimos que MAPAS TEMÁTICOS revelam DESIGUALDADE regional — cores fortes, cores claras.",
        exemplo: "Ex.: Sudeste mais rico, Norte com menos hospitais.",
      },
      {
        id: "recursos",
        capa: "3. Energia e água",
        emoji: "⚡",
        cor: "from-amber-500 to-yellow-600",
        conteudo:
          "Matriz LIMPA (hidro, solar, eólica) e cuidar da ÁGUA doce — 70% vai pra agricultura.",
        exemplo: "Ex.: Nordeste líder em eólica; Semiárido precisa cuidar mais da água.",
        fotoUrl: renovavel,
      },
      {
        id: "residuos",
        capa: "4. Lixo e consumo",
        emoji: "♻️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "LIXÃO polui, ATERRO trata. RECICLAGEM, COMPOSTAGEM e LOGÍSTICA REVERSA fazem o lixo virar recurso.",
        exemplo: "Ex.: garrafa PET vira camiseta; casca vira adubo.",
      },
    ],
    falaFinal: "6 unidades, 6 chaves, 1 Eco-Cidadão pronto.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada compromisso do Eco-Cidadão e ouça.",
    instrucao: "Toque em cada balão",
    mapaUrl: selo,
    pontos: [
      {
        id: "agua",
        x: 25,
        y: 30,
        emoji: "💧",
        cor: "from-sky-500 to-blue-700",
        titulo: "CUIDAR DA ÁGUA",
        texto:
          "Fechar torneira, banho curto, reaproveitar chuva. Cada gota conta.",
      },
      {
        id: "energia",
        x: 70,
        y: 30,
        emoji: "⚡",
        cor: "from-amber-500 to-yellow-600",
        titulo: "ECONOMIZAR ENERGIA",
        texto:
          "Apagar luz, desligar aparelhos, valorizar fontes limpas.",
      },
      {
        id: "lixo",
        x: 25,
        y: 70,
        emoji: "♻️",
        cor: "from-emerald-500 to-green-700",
        titulo: "SEPARAR O LIXO",
        texto:
          "Reciclar, compostar, entregar eletrônico em ponto de logística reversa.",
      },
      {
        id: "cidade",
        x: 70,
        y: 70,
        emoji: "🏙️",
        cor: "from-red-500 to-rose-700",
        titulo: "CUIDAR DA CIDADE",
        texto:
          "Andar de bicicleta, plantar árvores, cobrar saneamento pra todos.",
      },
    ],
    falaFinal: "4 compromissos diários = Eco-Cidadão em ação.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de revisão geral.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem faz o CENSO no Brasil?",
        cards: [
          { id: "ib", emoji: "📋", titulo: "IBGE", cor: "from-sky-500 to-blue-700" },
          { id: "tv", emoji: "📺", titulo: "TV", cor: "from-red-500 to-rose-700" },
          { id: "es", emoji: "🏫", titulo: "Escolas", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "ib",
        feedbackAcerto: "Isso! IBGE conta a população.",
        feedbackErro: "Contagem oficial = IBGE.",
      },
      {
        id: "q2",
        pergunta: "Qual fonte de energia é LIMPA?",
        cards: [
          { id: "so", emoji: "☀️", titulo: "Solar", cor: "from-amber-400 to-yellow-600" },
          { id: "ca", emoji: "⛏️", titulo: "Carvão", cor: "from-slate-500 to-gray-700" },
          { id: "pe", emoji: "🛢️", titulo: "Petróleo", cor: "from-slate-600 to-gray-800" },
        ],
        correta: "so",
        feedbackAcerto: "Perfeito! SOLAR é renovável e limpa.",
        feedbackErro: "Carvão e petróleo poluem. Limpa = SOLAR.",
      },
      {
        id: "q3",
        pergunta: "O que fazer com RESTOS DE COMIDA?",
        cards: [
          { id: "co", emoji: "🌱", titulo: "Compostagem", cor: "from-emerald-500 to-green-700" },
          { id: "ri", emoji: "🌊", titulo: "Jogar no rio", cor: "from-sky-500 to-blue-700" },
          { id: "qu", emoji: "🔥", titulo: "Queimar no quintal", cor: "from-red-500 to-rose-700" },
        ],
        correta: "co",
        feedbackAcerto: "Isso! COMPOSTAGEM vira adubo.",
        feedbackErro: "Rio e fogo poluem. Certo = COMPOSTAGEM.",
      },
    ],
    falaFinal: "Radar em alta! Você lembra tudo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "MISSÃO FINAL: acenda TODOS os 27 estados do Brasil. Você conhece o país inteiro agora, do Amapá ao Rio Grande do Sul.",
    instrucao: "Toque em TODOS os 27 estados + DF",
    missao: { tipo: "todos" },
    falaFinal: "27 estados iluminados! Você conhece o Brasil de ponta a ponta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar a JORNADA do Fundamental 1 na ordem que aprendeu.",
    instrucao: "Toque na ordem certa",
    pergunta: "Ordem das 6 grandes unidades de Geografia:",
    paradas: [
      {
        id: "populacao",
        emoji: "👥",
        rotulo: "1. População (censo, densidade)",
        descricao: "Quem somos e onde moramos.",
      },
      {
        id: "cidades",
        emoji: "🏙️",
        rotulo: "2. Cidades (urbanização, metrópoles)",
        descricao: "Como o Brasil virou urbano.",
      },
      {
        id: "mapas",
        emoji: "🗺️",
        rotulo: "3. Mapas temáticos",
        descricao: "Ler o país pelas cores e legendas.",
      },
      {
        id: "energia",
        emoji: "⚡",
        rotulo: "4. Matriz energética",
        descricao: "De onde vem a energia limpa.",
      },
      {
        id: "agua",
        emoji: "💧",
        rotulo: "5. Água e conservação",
        descricao: "Cuidar do tesouro mais valioso.",
      },
      {
        id: "residuos",
        emoji: "♻️",
        rotulo: "6. Resíduos e tecnologia",
        descricao: "Lixo com destino inteligente.",
      },
    ],
    ordemCerta: ["populacao", "cidades", "mapas", "energia", "agua", "residuos"],
    feedbackAcerto: "Jornada completa! Você viveu cada unidade.",
    feedbackErro: "Repensa a ordem das 6 unidades do 5º ano.",
    falaFinal: "6 unidades, 1 explorador transformado.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua última leitura do 5º ano. Marque as chaves.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página FINAL — Manifesto do Eco-Cidadão",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O ECO-CIDADÃO pensa GLOBAL e age LOCAL. Sabe que suas escolhas somam com bilhões de outras.",
        chaves: ["eco-cidadão", "global", "local"],
      },
      {
        id: "p2",
        texto:
          "Cuida da ÁGUA doce, respeita a MATRIZ LIMPA de energia e recusa desperdício.",
        chaves: ["água", "limpa"],
      },
      {
        id: "p3",
        texto:
          "Separa o LIXO, valoriza a RECICLAGEM e cobra ATERROS no lugar de LIXÕES.",
        chaves: ["lixo", "reciclagem", "aterros"],
      },
      {
        id: "p4",
        texto:
          "Enxerga a DESIGUALDADE nos mapas e sonha com um Brasil MAIS JUSTO — de Norte a Sul, de campo a cidade.",
        chaves: ["desigualdade", "justo"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro desafio final.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo REVISÃO SUPREMA! Cada rodada é de uma unidade. Acerte todas!",
    instrucao: "⏱️ Escolha o CONCEITO CORRETO",
    duracaoSegundos: 15,
    pecas: [
      { id: "censo", emoji: "📋", rotulo: "Censo" },
      { id: "metropole", emoji: "🌆", rotulo: "Metrópole" },
      { id: "legenda", emoji: "🔑", rotulo: "Legenda" },
      { id: "hidro", emoji: "💧", rotulo: "Hidrelétrica" },
      { id: "composta", emoji: "🌱", rotulo: "Compostagem" },
      { id: "reversa", emoji: "🔄", rotulo: "Logística reversa" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "IBGE conta", emoji: "👥", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "De 10 em 10 anos", emoji: "📅", cor: "from-amber-400 to-orange-600" },
        contexto: "Contagem oficial da população brasileira. Nome?",
        pecaCertaId: "censo",
        feedbackAcerto: "Isso! CENSO — feito pelo IBGE.",
        feedbackErro: "Contagem oficial da população = CENSO.",
      },
      {
        id: "r2",
        municipioA: { nome: "SP gigante", emoji: "🏙️", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Puxa cidades ao redor", emoji: "🌆", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Cidade GIGANTE que influencia várias outras. Nome?",
        pecaCertaId: "metropole",
        feedbackAcerto: "Perfeito! METRÓPOLE.",
        feedbackErro: "SP, RJ, BH = METRÓPOLES.",
      },
      {
        id: "r3",
        municipioA: { nome: "Chave das cores", emoji: "🌈", cor: "from-purple-400 to-fuchsia-600" },
        municipioB: { nome: "Explica o mapa", emoji: "🔑", cor: "from-amber-400 to-yellow-600" },
        contexto: "O que explica o que cada cor do mapa significa?",
        pecaCertaId: "legenda",
        feedbackAcerto: "Isso! LEGENDA — chave do mapa.",
        feedbackErro: "Chave das cores = LEGENDA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Itaipu", emoji: "🏗️", cor: "from-blue-400 to-indigo-600" },
        municipioB: { nome: "Água caindo", emoji: "💧", cor: "from-sky-400 to-blue-600" },
        contexto: "Principal fonte de energia do Brasil. Nome?",
        pecaCertaId: "hidro",
        feedbackAcerto: "Boa! HIDRELÉTRICA — Brasil líder.",
        feedbackErro: "Itaipu e água = HIDRELÉTRICA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Casca de banana", emoji: "🍌", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Vira adubo", emoji: "🌱", cor: "from-emerald-400 to-green-600" },
        contexto: "Resto de comida virando adubo natural. Nome?",
        pecaCertaId: "composta",
        feedbackAcerto: "Isso! COMPOSTAGEM.",
        feedbackErro: "Comida → adubo = COMPOSTAGEM.",
      },
      {
        id: "r6",
        municipioA: { nome: "Pilha usada", emoji: "🔋", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Ponto de coleta", emoji: "📍", cor: "from-slate-400 to-gray-600" },
        contexto: "Empresa recolhe eletrônicos velhos pra reciclar. Nome?",
        pecaCertaId: "reversa",
        feedbackAcerto: "Perfeito! LOGÍSTICA REVERSA.",
        feedbackErro: "Eletrônico devolvido pra empresa = LOGÍSTICA REVERSA.",
      },
    ],
    falaFinal: "6 acertos = Fundamental 1 fechado com chave de OURO.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do ECO-CIDADÃO: o que mais importa?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "acoes",
        rotulo: "Ações diárias (80%)",
        emoji: "🙌",
        percentual: 80,
        cor: "#10b981",
        descricao:
          "80% de ser Eco-Cidadão é ATITUDE diária: fechar torneira, separar lixo, economizar energia.",
        exemplos: ["💧 Água", "♻️ Lixo", "⚡ Energia"],
      },
      {
        id: "conhecimento",
        rotulo: "Conhecimento (20%)",
        emoji: "📚",
        percentual: 20,
        cor: "#8b5cf6",
        descricao:
          "20% é SABER o que faz — e você já sabe! Agora falta só AGIR.",
        exemplos: ["🗺️ Ler mapa", "📊 Entender", "💡 Pensar"],
      },
    ],
    falaFinal: "Saber + Agir = Eco-Cidadão SUPREMO.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "As 3 PERGUNTAS SUPREMAS pra ganhar o SELO ECO-CIDADÃO!",
    instrucao: "Responda com sabedoria de 5 anos de estudo",
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual o papel de um ECO-CIDADÃO no mundo?",
        opcoes: [
          { id: "a", texto: "Achar que problemas ambientais são só longe de casa", correta: false },
          { id: "b", texto: "Entender que ações locais impactam o planeta e agir pra proteger", correta: true },
          { id: "c", texto: "Não se preocupar com o meio ambiente", correta: false },
        ],
        feedbackAcerto:
          "🌟 SUPREMO! Ações locais somam globalmente. Você é Eco-Cidadão!",
        feedbackErro:
          "Problemas do planeta são de TODOS. Agir local muda global.",
      },
      {
        id: "av2",
        pergunta: "Qual atitude é a MAIS ECOLÓGICA?",
        opcoes: [
          { id: "a", texto: "Jogar pilha no rio", correta: false },
          { id: "b", texto: "Separar lixo, economizar água e energia", correta: true },
          { id: "c", texto: "Deixar chuveiro ligado horas", correta: false },
        ],
        feedbackAcerto: "Isso! 3 atitudes juntas = Eco-Cidadão em ação.",
        feedbackErro: "Pilha no rio e chuveiro aberto POLUEM. Separar + economizar = certo.",
      },
      {
        id: "av3",
        pergunta: "Você concluiu o Fundamental 1 de Geografia. O que ganhou?",
        opcoes: [
          { id: "a", texto: "Só um selo bonito", correta: false },
          { id: "b", texto: "Conhecimento pra mudar o Brasil e o planeta", correta: true },
          { id: "c", texto: "Nada de importante", correta: false },
        ],
        feedbackAcerto:
          "🏆 PARABÉNS! Você conquistou o SELO ECO-CIDADÃO SUPREMO. O Fundamental 1 está fechado!",
        feedbackErro: "Muito mais que selo — você virou CIDADÃO DO PLANETA.",
      },
    ],
    selo: {
      nome: "Eco-Cidadão Supremo",
      subtitulo: "Selo final do Ensino Fundamental 1",
      emoji: "🏆",
      cor: "from-green-400 via-yellow-400 to-emerald-600",
    },
    falaFinal:
      "🎉 SELO SUPREMO CONQUISTADO! Você fechou o Fundamental 1 como ECO-CIDADÃO. O planeta agradece. Próxima parada: 6º ano!",
  },

  recompensa: { xp: 800, moedas: 500, medalha: "Eco-Cidadão Supremo" },
};
