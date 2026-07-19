import type { AulaArteV1 } from "../../types";
import __asset_londonTube from "@/assets/arte-7ano/u7-london-tube-map.jpg.asset.json";
const londonTube = __asset_londonTube.url;
import __asset_munichPictograms from "@/assets/arte-7ano/u7-munich-pictograms.jpg.asset.json";
const munichPictograms = __asset_munichPictograms.url;
import __asset_airportWayfinding from "@/assets/arte-7ano/u7-airport-wayfinding.jpg.asset.json";
const airportWayfinding = __asset_airportWayfinding.url;
import __asset_cityTotem from "@/assets/arte-7ano/u7-city-totem.jpg.asset.json";
const cityTotem = __asset_cityTotem.url;
import __asset_subwayPictograms from "@/assets/arte-7ano/u7-subway-pictograms.jpg.asset.json";
const subwayPictograms = __asset_subwayPictograms.url;
import __asset_streetSigns from "@/assets/arte-7ano/u7-street-signs.jpg.asset.json";
const streetSigns = __asset_streetSigns.url;
import __asset_bikeLane from "@/assets/arte-7ano/u7-bike-lane.jpg.asset.json";
const bikeLane = __asset_bikeLane.url;
import __asset_restroomPictogram from "@/assets/arte-7ano/u7-restroom-pictogram.jpg.asset.json";
const restroomPictogram = __asset_restroomPictogram.url;
import __asset_trafficGrid from "@/assets/arte-7ano/u7-traffic-pictogram-grid.jpg.asset.json";
const trafficGrid = __asset_trafficGrid.url;
import __asset_smartCityHologram from "@/assets/arte-7ano/u7-smart-city-hologram.jpg.asset.json";
const smartCityHologram = __asset_smartCityHologram.url;
import __asset_transitTypography from "@/assets/arte-7ano/u7-transit-typography.jpg.asset.json";
const transitTypography = __asset_transitTypography.url;
import __asset_metroLinesDiagram from "@/assets/arte-7ano/u7-metro-lines-diagram.jpg.asset.json";
const metroLinesDiagram = __asset_metroLinesDiagram.url;
import __asset_wayfindingKiosk from "@/assets/arte-7ano/u7-wayfinding-kiosk.jpg.asset.json";
const wayfindingKiosk = __asset_wayfindingKiosk.url;
import __asset_departureBoard from "@/assets/arte-7ano/u7-departure-board.jpg.asset.json";
const departureBoard = __asset_departureBoard.url;
import __asset_controlCenterHologram from "@/assets/arte-7ano/u7-control-center-hologram.jpg.asset.json";
const controlCenterHologram = __asset_controlCenterHologram.url;
import __asset_cidadeSuspensaFinal from "@/assets/arte-7ano/u7-cidade-suspensa-final.jpg.asset.json";
const cidadeSuspensaFinal = __asset_cidadeSuspensaFinal.url;

/**
 * Arte · 7º Ano · Unidade 7 (FINAL) · Aula 01 — "A Cidade Inteligente —
 * Sinalização, Identidade Visual e o Futuro das Metrópoles"
 * Metanarrativa: 🚀 Crônicas das Cidades Suspensas — FECHAMENTO.
 * Foco: wayfinding, pictogramas, Otl Aicher (Munique 1972), Harry Beck (metrô Londres),
 * identidade visual urbana, infográfico espacial.
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-sinalizacao",
  titulo: "A Cidade Inteligente — Sinalização, Identidade Visual e o Futuro das Metrópoles",
  iconeTrilha: "🚦",
  bncc: ["EF69AR04", "EF69AR05", "EF69AR31"],
  duracaoMin: 36,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Urbanista Visual! Chegamos ao ÚLTIMO distrito das Cidades Suspensas: o Distrito da Sinalização. Aqui, a cidade PRECISA falar com todo mundo — turista, criança, pessoa que não lê seu idioma — em UM SEGUNDO. Isso é wayfinding: a arte de guiar sem palavras. Toca em cada pista pra ativar o módulo final.",
    titulo: "🚦 O Distrito da Sinalização",
    instrucao: "Toca em cada pista pra ativar o módulo final da missão",
    itens: [
      { emoji: "🚇", rotulo: "Mapa do Metrô de Londres", descricao: "Harry Beck, em 1933, jogou fora a escala real da cidade e desenhou um DIAGRAMA — linhas retas, ângulos de 45°/90°, cores por linha. Virou o modelo de mapa de metrô do MUNDO INTEIRO.", cor: "#dc2626", fotoUrl: londonTube },
      { emoji: "🏅", rotulo: "Pictogramas de Munique 1972", descricao: "Otl Aicher criou um sistema de ícones geométricos pros Jogos Olímpicos de Munique — pessoas de qualquer país entendiam o esporte SEM LER uma palavra. Nasceu o pictograma esportivo moderno.", cor: "#0891b2", fotoUrl: munichPictograms },
      { emoji: "🛫", rotulo: "Sinalização de Aeroporto", descricao: "Preto no amarelo, setas gigantes, ícones universais: o aeroporto é o laboratório perfeito de wayfinding — bilhões de pessoas, zero tempo pra ficar perdido.", cor: "#f59e0b", fotoUrl: airportWayfinding },
      { emoji: "🌆", rotulo: "Cidade Suspensa — Vista Final", descricao: "A SUA Cidade Suspensa, quase completa, agora precisa de um sistema de sinalização pra guiar seus milhões de habitantes. Esse é o último código a decifrar.", cor: "#7c2d12", fotoUrl: cidadeSuspensaFinal },
    ],
    falaFinal: "Você vai aprender a projetar sistemas visuais que guiam MILHÕES de pessoas sem uma única palavra.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra o olho de designer de sinalização antes de puxar a régua!",
    perguntas: [
      {
        pergunta: "Um pictograma de banheiro precisa ser entendido por uma pessoa que fala QUALQUER idioma do mundo, em menos de 1 segundo. Qual estratégia visual funciona melhor?",
        fotoUrl: restroomPictogram,
        alternativas: [
          { texto: "Silhuetas simples, alto contraste e formas UNIVERSAIS (sem texto, sem detalhe cultural específico)", correta: true },
          { texto: "Um texto detalhado explicando em português o que tem na sala", correta: false },
        ],
        feedbackAcerto: "Exato! Pictograma eficiente = silhueta simples + alto contraste + zero dependência de idioma.",
        feedbackErro: "Texto em um só idioma exclui quem não lê aquela língua — o pictograma precisa ser UNIVERSAL.",
      },
      {
        pergunta: "No mapa do metrô de Londres de Harry Beck, as distâncias reais entre estações foram DEFORMADAS. Por que isso é uma boa ideia?",
        fotoUrl: londonTube,
        alternativas: [
          { texto: "Porque o cérebro só precisa saber a ORDEM e as CONEXÕES das estações, não a distância exata — clareza vence precisão geográfica", correta: true },
          { texto: "Porque mapas sempre devem ser 100% fiéis à escala real da cidade, sem exceções", correta: false },
        ],
        feedbackAcerto: "Isso! Beck entendeu que um DIAGRAMA claro (não um mapa geográfico exato) é mais útil pra quem viaja.",
        feedbackErro: "Escala real geraria um mapa emaranhado e ilegível — a genialidade de Beck foi simplificar pra ganhar clareza.",
      },
      {
        pergunta: "Otl Aicher criou pictogramas geométricos pros Jogos de Munique 1972. Qual foi o maior ganho dessa escolha?",
        fotoUrl: munichPictograms,
        alternativas: [
          { texto: "Identidade visual COESA e COMPREENSÍVEL por qualquer visitante do mundo, sem depender de tradução", correta: true },
          { texto: "Deixar os jogos mais bonitos, sem nenhuma função prática de comunicação", correta: false },
        ],
        feedbackAcerto: "Perfeito! Os pictogramas de Aicher combinaram estética E função — comunicação universal instantânea.",
        feedbackErro: "O sistema de Aicher tinha função prática MUITO forte: guiar visitantes de qualquer país sem barreira de idioma.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário técnico do designer de sinalização urbana. Toca em cada verbete!",
    cards: [
      { termo: "Wayfinding", definicao: "Sistema de sinalização e orientação espacial que ajuda pessoas a se localizarem e se deslocarem em ambientes complexos (aeroportos, hospitais, cidades).", emoji: "🧭", cor: "#0891b2", fotoUrl: cityTotem },
      { termo: "Pictograma", definicao: "Ícone simplificado que representa uma ideia, ação ou lugar SEM usar palavras — precisa ser lido em segundos por qualquer pessoa.", emoji: "🚻", cor: "#dc2626", fotoUrl: subwayPictograms },
      { termo: "Identidade Visual Urbana", definicao: "Conjunto coerente de cores, tipografia e ícones que dá uma 'personalidade visual' única a uma cidade ou sistema de transporte.", emoji: "🎨", cor: "#f59e0b", fotoUrl: metroLinesDiagram },
      { termo: "Infográfico Espacial", definicao: "Representação visual (mapa, diagrama, painel) que organiza informação complexa de espaço de forma simples e rápida de entender.", emoji: "🗺️", cor: "#7c2d12", fotoUrl: smartCityHologram },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como um bom sistema de sinalização pode salvar vidas e economizar tempo de milhões de pessoas.",
    paragrafos: [
      "Chegamos ao último distrito da nossa jornada. Uma cidade pode ter a arquitetura mais bonita do mundo, mas se ninguém souber se orientar dentro dela, ela falha. É aqui que entra o WAYFINDING: a ciência e a arte de guiar pessoas através do espaço usando sinais visuais.",
      "Em 1933, o engenheiro Harry Beck revolucionou a forma de representar o metrô de Londres. Em vez de um mapa geograficamente exato (confuso, cheio de curvas reais), ele criou um DIAGRAMA: linhas retas, ângulos de 45° e 90°, cores diferentes pra cada linha. As distâncias reais foram sacrificadas em nome da CLAREZA. Esse modelo virou padrão mundial — quase todo mapa de metrô do planeta usa a lógica de Beck até hoje.",
      "Em 1972, o designer alemão Otl Aicher enfrentou um desafio parecido nos Jogos Olímpicos de Munique: como comunicar 21 esportes diferentes pra visitantes de dezenas de países, sem depender de tradução? Sua resposta foi um sistema de PICTOGRAMAS geométricos — figuras humanas construídas com formas simples (círculos, retângulos, diagonais) representando cada esporte. Virou referência mundial de comunicação visual universal.",
      "Todo bom PICTOGRAMA segue regras: silhueta simples, alto contraste, zero dependência de idioma ou cultura específica, leitura em menos de 1 segundo. É o mesmo princípio usado em placas de banheiro, saídas de emergência, faixas de pedestre e ciclovias — o corpo reage antes mesmo da mente processar a palavra.",
      "Uma IDENTIDADE VISUAL URBANA coerente (cores, tipografia, ícones) transforma uma cidade caótica em um organismo legível. E hoje, cidades inteligentes usam INFOGRÁFICOS ESPACIAIS digitais — painéis, totens, hologramas — que atualizam em tempo real. A Cidade Suspensa, enfim, está pronta pra ganhar sua voz visual: um sistema de sinalização que qualquer cidadão, de qualquer lugar, entende na hora.",
    ],
    pigmentos: [
      { nome: "Diagrama de Beck (Londres)", hex: "#dc2626", fonte: "Clareza acima da escala real", emoji: "🚇", fotoUrl: londonTube },
      { nome: "Pictogramas de Aicher (Munique)", hex: "#0891b2", fonte: "Comunicação universal sem palavras", emoji: "🏅", fotoUrl: munichPictograms },
      { nome: "Wayfinding aeroportuário", hex: "#f59e0b", fonte: "Preto no amarelo, leitura instantânea", emoji: "🛫", fotoUrl: airportWayfinding },
      { nome: "Cidade Inteligente", hex: "#7c2d12", fonte: "Infográficos espaciais em tempo real", emoji: "🌆", fotoUrl: smartCityHologram },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica o caderno do designer de sinalização!",
    perguntas: [
      {
        pergunta: "Qual é a definição correta de WAYFINDING?",
        fotoUrl: cityTotem,
        alternativas: [
          { texto: "Sistema de sinalização e orientação que ajuda pessoas a se localizarem em espaços complexos", correta: true },
          { texto: "Técnica de pintura de murais artísticos sem função prática", correta: false },
        ],
        feedbackAcerto: "Correto! Wayfinding é orientação espacial funcional — guiar pessoas com clareza.",
        feedbackErro: "Wayfinding tem função PRÁTICA de orientação, não é decoração artística sem propósito.",
      },
      {
        pergunta: "Harry Beck ficou famoso por criar o mapa do metrô de Londres em 1933. Qual foi sua grande sacada?",
        fotoUrl: londonTube,
        alternativas: [
          { texto: "Transformar o mapa geográfico real em um DIAGRAMA simplificado, com linhas retas e cores por linha", correta: true },
          { texto: "Desenhar o mapa em escala perfeitamente real, sem nenhuma simplificação", correta: false },
        ],
        feedbackAcerto: "Isso! Ele sacrificou a fidelidade geográfica pra ganhar CLAREZA — virou padrão mundial.",
        feedbackErro: "Pelo contrário: Beck ABANDONOU a escala real pra criar um diagrama mais legível.",
      },
      {
        pergunta: "Um bom pictograma de sinalização deve, acima de tudo, ser:",
        fotoUrl: subwayPictograms,
        alternativas: [
          { texto: "Simples, de alto contraste e compreensível sem depender de idioma ou cultura", correta: true },
          { texto: "Detalhado e cheio de texto explicativo em um único idioma", correta: false },
        ],
        feedbackAcerto: "Perfeito! Simplicidade + universalidade = leitura instantânea por qualquer pessoa.",
        feedbackErro: "Texto e detalhe excessivo atrapalham a leitura rápida — pictograma é sobre SIMPLICIDADE universal.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada peça de sinalização pelo CONCEITO que ela representa!",
    animais: [
      {
        nome: "Mapa de metrô com linhas coloridas retas", emoji: "🚇", fotoUrl: metroLinesDiagram,
        corAlvo: { nome: "Diagrama de Beck", hex: "#dc2626" },
        opcoes: [
          { nome: "Diagrama de Beck", hex: "#dc2626" },
          { nome: "Pictograma Olímpico", hex: "#0891b2" },
          { nome: "Identidade Visual Urbana", hex: "#f59e0b" },
        ],
        falaAcerto: "Isso! Linhas retas e cores por trajeto = lógica do Diagrama de Harry Beck.",
      },
      {
        nome: "Ícone geométrico de atleta correndo", emoji: "🏃", fotoUrl: munichPictograms,
        corAlvo: { nome: "Pictograma Olímpico", hex: "#0891b2" },
        opcoes: [
          { nome: "Pictograma Olímpico", hex: "#0891b2" },
          { nome: "Diagrama de Beck", hex: "#dc2626" },
          { nome: "Infográfico Espacial", hex: "#7c2d12" },
        ],
        falaAcerto: "Correto! Figura geométrica universal representando esporte = estilo Otl Aicher.",
      },
      {
        nome: "Painel holográfico com dados da cidade em tempo real", emoji: "🛰️", fotoUrl: controlCenterHologram,
        corAlvo: { nome: "Infográfico Espacial", hex: "#7c2d12" },
        opcoes: [
          { nome: "Infográfico Espacial", hex: "#7c2d12" },
          { nome: "Pictograma Olímpico", hex: "#0891b2" },
          { nome: "Diagrama de Beck", hex: "#dc2626" },
        ],
        falaAcerto: "Perfeito! Painel dinâmico de dados espaciais = Infográfico Espacial em ação.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra criar o sistema de sinalização da SUA Cidade Suspensa.",
    passos: [
      { id: "p1", texto: "Defino a PALETA de cores e a tipografia sans-serif do sistema (identidade visual única)", emoji: "🎨", ordem: 1, fotoUrl: transitTypography },
      { id: "p2", texto: "Crio pictogramas simples e universais para os pontos principais (saída, transporte, emergência)", emoji: "🚻", ordem: 2, fotoUrl: trafficGrid },
      { id: "p3", texto: "Desenho um diagrama tipo Harry Beck das rotas e conexões entre distritos da cidade", emoji: "🚇", ordem: 3, fotoUrl: metroLinesDiagram },
      { id: "p4", texto: "Instalo totens e painéis de wayfinding nos pontos de decisão (cruzamentos, estações)", emoji: "🧭", ordem: 4, fotoUrl: wayfindingKiosk },
      { id: "p5", texto: "Ligo os painéis holográficos inteligentes — a cidade agora se comunica em tempo real com todos!", emoji: "🛰️", ordem: 5, fotoUrl: controlCenterHologram },
    ],
    falaAcerto: "Você acabou de criar o Sistema de Sinalização COMPLETO da SUA Cidade Suspensa!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do designer de sinalização. Toca nas palavras coloridas.",
    titulo: "Diário do Designer de Sinalização",
    trechos: [
      { texto: "Sou designer de sinalização. Minha missão é criar", palavraDestaque: "Wayfinding", corDestaque: "#0891b2" },
      { texto: "sistemas que guiam pessoas sem palavras. Uso", palavraDestaque: "Pictogramas", corDestaque: "#dc2626" },
      { texto: "universais, como fez Otl Aicher em Munique, e diagramas claros, como o de", palavraDestaque: "Harry Beck", corDestaque: "#7c2d12" },
      { texto: "no metrô de Londres. Cores e tipografia formam a", palavraDestaque: "Identidade Visual Urbana", corDestaque: "#f59e0b" },
      { texto: "da cidade, e painéis digitais viram", palavraDestaque: "Infográficos Espaciais", corDestaque: "#0f766e" },
      { texto: "em tempo real. Assim, a Cidade Suspensa fala com todo mundo." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🚦 O Diretor de Tráfego Gráfico! Toca em TODOS os elementos de sinalização antes do tempo acabar.",
    titulo: "🚦 O Diretor de Tráfego Gráfico",
    instrucao: "Toca em todos os pictogramas e sinais antes do tempo acabar pra manter a cidade em movimento!",
    tempoSeg: 35,
    itens: [
      { emoji: "🚻", rotulo: "Pictograma universal", cor: "#dc2626" },
      { emoji: "🚇", rotulo: "Diagrama de rotas", cor: "#0891b2" },
      { emoji: "🧭", rotulo: "Totem de wayfinding", cor: "#f59e0b" },
      { emoji: "🚲", rotulo: "Faixa de ciclovia", cor: "#16a34a" },
      { emoji: "🛫", rotulo: "Placa preta e amarela", cor: "#7c2d12" },
      { emoji: "🛰️", rotulo: "Painel holográfico", cor: "#0f766e" },
    ],
    falaFinal: "Tráfego gráfico organizado! O Distrito da Sinalização está 100% funcional.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha o último caderno das Cidades Suspensas. Toca em cada verbete!",
    titulo: "📓 Caderno do Designer de Sinalização",
    itens: [
      { emoji: "🧭", rotulo: "Wayfinding", descricao: "Sistema de sinalização que orienta pessoas em espaços complexos com clareza e rapidez.", cor: "#0891b2", fotoUrl: cityTotem },
      { emoji: "🚻", rotulo: "Pictograma", descricao: "Ícone simples e universal, lido em menos de 1 segundo, sem depender de idioma.", cor: "#dc2626", fotoUrl: subwayPictograms },
      { emoji: "🚇", rotulo: "Diagrama de Harry Beck", descricao: "Mapa de metrô de Londres (1933) que trocou fidelidade geográfica por clareza visual.", cor: "#7c2d12", fotoUrl: londonTube },
      { emoji: "🏅", rotulo: "Pictogramas de Otl Aicher", descricao: "Sistema de ícones geométricos criado pra Munique 1972, comunicando esportes sem palavras.", cor: "#0f766e", fotoUrl: munichPictograms },
      { emoji: "🎨", rotulo: "Identidade Visual Urbana", descricao: "Cores, tipografia e ícones coerentes que dão personalidade e legibilidade a uma cidade.", cor: "#f59e0b", fotoUrl: metroLinesDiagram },
      { emoji: "🛰️", rotulo: "Infográfico Espacial", descricao: "Painel visual (digital ou impresso) que organiza informação de espaço em tempo real.", cor: "#78716c", fotoUrl: smartCityHologram },
    ],
    falaFinal: "Distrito da Sinalização RESTAURADO — a Cidade Suspensa está COMPLETA!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Missão final da TEMPORADA INTEIRA, urbanista visual!",
    quiz: {
      pergunta: "Uma pessoa chega em um aeroporto de um país onde não fala o idioma. Em 2 segundos, ela precisa achar o banheiro, a saída e a esteira de bagagem — sem ler nenhuma palavra. Que princípio de design torna isso possível?",
      alternativas: [
        { texto: "Sistemas de wayfinding com pictogramas universais, alto contraste e identidade visual coerente — comunicação instantânea sem depender de idioma", correta: true },
        { texto: "Placas com textos longos e detalhados em um único idioma, exigindo leitura cuidadosa", correta: false },
      ],
      feedback: "Exatamente! Wayfinding bem projetado combina PICTOGRAMAS universais (herança de Otl Aicher), DIAGRAMAS claros (herança de Harry Beck) e uma IDENTIDADE VISUAL coerente (cores + tipografia) pra guiar qualquer pessoa, de qualquer lugar do mundo, em segundos. É a última camada que transforma uma cidade bonita em uma cidade FUNCIONAL — e com isso, você conclui TODA a jornada das Crônicas das Cidades Suspensas!",
    },
    missaoFamilia:
      "🏠 Missão Final em Família — Os Designers da Casa Inteligente: com um adulto, escolham 5 cômodos ou objetos da casa (geladeira, banheiro, quarto, lixo reciclável, tomada) e criem PICTOGRAMAS simples em post-its — só formas, sem palavras — pra identificar cada um. Colem os post-its e testem: alguém de fora da família entende o pictograma sem explicação? Registrem fotos de antes e depois no álbum da família.",
    recompensaTitulo:
      "🚀 As Crônicas das Cidades Suspensas Inteiramente Decifradas! A Cidade Suspensa está 100% completa — arquitetura, arte urbana e sinalização, tudo assinado por você.",
    recompensaItem: "🚀 Emblema de Ouro de Urbanista Máster + Mapa Criptográfico da Cidade Suspensa",
  },

  recompensa: { xp: 150, moedas: 80, medalha: "Emblema de Ouro de Urbanista Máster" },
};
