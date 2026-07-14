import type { AulaGeoV1 } from "../../types";
import { url as relevo } from "@/assets/geografia-4ano/relevo-planalto-planicie.jpg.asset.json";
import { url as hidreletrica } from "@/assets/geografia-4ano/usina-hidreletrica-brasil.jpg.asset.json";
import { url as mapaEstados } from "@/assets/geografia-4ano/mapa-brasil-estados.jpg.asset.json";
import { url as norte } from "@/assets/geografia-4ano/regiao-norte-amazonia.jpg.asset.json";
import { url as sul } from "@/assets/geografia-4ano/regiao-sul-serra.jpg.asset.json";
import { url as centro } from "@/assets/geografia-4ano/regiao-centro-oeste-cerrado.jpg.asset.json";
/**
 * Geografia · 4º Ano · Unidade 3 · Aula 01
 * "Relevo e Rios do Brasil" — EF04GE04
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-relevo-e-rios",
  titulo: "Relevo e Rios: A Cara do Brasil",
  iconeTrilha: "⛰️",
  bncc: ["EF04GE04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe as formas do Brasil: partes altas, partes planas, rios pra todo lado.",
    mapaUrl: relevo,
    imagemDestaqueUrl: relevo,
    aurora:
      "Explorador, a Terra não é lisa! Tem partes altas (PLANALTOS), partes baixas (DEPRESSÕES) e partes chatas (PLANÍCIES). E entre elas correm os RIOS. Isso tudo junto é o RELEVO — o desenho da superfície.",
    falaFinal:
      "O Brasil é um país de PLANALTOS. Rio que desce planalto faz cachoeira. Cachoeira faz energia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: se um rio cai de uma altura grande, isso é bom pra quê?",
    pergunta: "Rio que faz cachoeira serve pra...",
    opcoes: [
      {
        id: "energia",
        titulo: "GERAR ENERGIA elétrica",
        subtitulo: "usinas hidrelétricas",
        emoji: "⚡",
        cor: "from-yellow-400 to-amber-600",
      },
      {
        id: "navegacao",
        titulo: "NAVEGAR com barcos grandes",
        subtitulo: "transporte de carga",
        emoji: "🚢",
        cor: "from-sky-500 to-blue-700",
      },
    ],
    respostaCerta: "energia",
    feedbackAcerto:
      "Isso! Água caindo com força gira turbina — turbina gira e vira ELETRICIDADE. É assim que a maior parte da luz do Brasil é feita.",
    feedbackErro:
      "Barco grande não sobe cachoeira. Onde tem queda d'água, o melhor é fazer HIDRELÉTRICA.",
    falaFinal: "Relevo alto + rio = energia. Guarda essa.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 formas de relevo que a gente encontra no Brasil.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      {
        id: "planalto",
        capa: "1. Planalto",
        emoji: "⛰️",
        cor: "from-orange-500 to-red-700",
        conteudo:
          "PLANALTO é uma área ALTA e mais ou menos plana no topo. Ocupa quase 60% do Brasil. Ex.: Planalto Central (onde fica Brasília).",
        exemplo: "Ex.: Chapada Diamantina (BA), Chapada dos Guimarães (MT).",
        fotoUrl: relevo,
      },
      {
        id: "planicie",
        capa: "2. Planície",
        emoji: "🌾",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "PLANÍCIE é uma área BAIXA e MUITO plana, geralmente perto de rios ou do mar. Boa pra agricultura.",
        exemplo: "Ex.: Planície Amazônica, Planície do Pantanal.",
        fotoUrl: norte,
      },
      {
        id: "depressao",
        capa: "3. Depressão",
        emoji: "🕳️",
        cor: "from-amber-600 to-orange-800",
        conteudo:
          "DEPRESSÃO é uma área REBAIXADA em relação ao que está em volta. Não é buraco — é só mais baixa que o entorno.",
        exemplo: "Ex.: Depressão Sertaneja, no interior do Nordeste.",
      },
      {
        id: "rio",
        capa: "4. Rios / Bacias",
        emoji: "🌊",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "RIO é um curso d'água que corre em direção ao mar. BACIA hidrográfica é o rio principal + todos os rios menores que desaguam nele.",
        exemplo: "Ex.: Bacia Amazônica (a maior do mundo), Bacia do São Francisco.",
        fotoUrl: hidreletrica,
      },
    ],
    falaFinal: "Planalto, planície, depressão e rios. 4 palavras que descrevem o Brasil.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Marquei 4 marcos do relevo brasileiro. Toca em cada um.",
    instrucao: "Toque em cada balão",
    mapaUrl: mapaEstados,
    pontos: [
      {
        id: "amazonas",
        x: 25,
        y: 30,
        emoji: "🌊",
        cor: "from-sky-500 to-blue-700",
        titulo: "Rio Amazonas",
        texto:
          "O MAIOR rio do mundo em volume de água. Corre pela Planície Amazônica, no Norte.",
        fotoUrl: norte,
      },
      {
        id: "saofrancisco",
        x: 65,
        y: 45,
        emoji: "💧",
        cor: "from-cyan-500 to-blue-700",
        titulo: "Rio São Francisco",
        texto:
          "Nasce em Minas Gerais e atravessa o Nordeste. Chamado de 'Velho Chico'. Vital pra irrigação no semiárido.",
      },
      {
        id: "pantanal",
        x: 45,
        y: 60,
        emoji: "🐊",
        cor: "from-emerald-500 to-green-700",
        titulo: "Pantanal",
        texto:
          "Maior planície alagada do mundo, no Centro-Oeste. Cheia de bichos: jacaré, tuiuiú, capivara, onça.",
        fotoUrl: centro,
      },
      {
        id: "serragaucha",
        x: 45,
        y: 85,
        emoji: "⛰️",
        cor: "from-purple-500 to-indigo-700",
        titulo: "Serra Gaúcha",
        texto:
          "Parte alta e fria do Sul, com vinhedos e neve raríssima no inverno.",
        fotoUrl: sul,
      },
    ],
    falaFinal: "4 marcos, 4 relevos diferentes. Brasil é gigante e variado.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas sobre relevo e rios.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Área ALTA e mais ou menos plana no topo é...",
        fotoUrl: relevo,
        cards: [
          { id: "plan", emoji: "⛰️", titulo: "Planalto", cor: "from-orange-500 to-red-700" },
          { id: "plani", emoji: "🌾", titulo: "Planície", cor: "from-emerald-500 to-green-700" },
          { id: "dep", emoji: "🕳️", titulo: "Depressão", cor: "from-amber-600 to-orange-800" },
        ],
        correta: "plan",
        feedbackAcerto: "Isso! PLANALTO = área alta e plana no topo.",
        feedbackErro: "Planície é BAIXA. Alta e plana no topo = PLANALTO.",
      },
      {
        id: "q2",
        pergunta: "Rio que cai em cachoeira serve muito bem pra...",
        fotoUrl: hidreletrica,
        cards: [
          { id: "nav", emoji: "🚢", titulo: "Navegar", cor: "from-sky-500 to-blue-700" },
          { id: "en", emoji: "⚡", titulo: "Gerar energia", cor: "from-yellow-400 to-amber-600" },
          { id: "pes", emoji: "🎣", titulo: "Só pescar", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "en",
        feedbackAcerto: "Perfeito! Queda d'água = HIDRELÉTRICA.",
        feedbackErro: "Barco não sobe cachoeira. O forte é GERAR ENERGIA.",
      },
      {
        id: "q3",
        pergunta: "Qual é o MAIOR rio em volume de água do mundo?",
        fotoUrl: norte,
        cards: [
          { id: "sf", emoji: "💧", titulo: "São Francisco", cor: "from-cyan-500 to-blue-700" },
          { id: "am", emoji: "🌊", titulo: "Amazonas", cor: "from-sky-500 to-blue-700" },
          { id: "par", emoji: "🏞️", titulo: "Paraná", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "am",
        feedbackAcerto: "Boa! O AMAZONAS é o maior do mundo em volume de água.",
        feedbackErro: "É o AMAZONAS — carrega mais água que qualquer outro rio do planeta.",
      },
    ],
    falaFinal: "Radar afiado! Relevo e rios você domina.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Vamos ver os 5 estados com MAIOR TAMANHO em área do Brasil. Toque neles e sinta o tamanhão.",
    instrucao: "Acenda os 5 maiores em área",
    missao: {
      tipo: "selecionar",
      siglas: ["AM", "PA", "MT", "MG", "BA"],
      pergunta: "Quais são os 5 MAIORES estados em área?",
    },
    falaFinal:
      "Amazonas é gigante — quase o dobro de MG. Territórios enormes, relevos diferentes.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como a chuva vira ENERGIA na sua casa? Vamos organizar.",
    instrucao: "Toque na ordem certa",
    pergunta: "Ordene o caminho da água até virar luz:",
    paradas: [
      {
        id: "chuva",
        emoji: "🌧️",
        rotulo: "1. Chuva",
        descricao: "A chuva enche os rios do planalto.",
      },
      {
        id: "rio",
        emoji: "🌊",
        rotulo: "2. Rio desce o planalto",
        descricao: "A água corre em direção ao mar, ganhando velocidade nas quedas.",
      },
      {
        id: "represa",
        emoji: "🏞️",
        rotulo: "3. Represa da hidrelétrica",
        descricao: "Uma barragem gigante segura a água e faz um lago artificial.",
      },
      {
        id: "turbina",
        emoji: "⚙️",
        rotulo: "4. Turbina gira",
        descricao: "Água solta com força faz as turbinas rodarem.",
      },
      {
        id: "casa",
        emoji: "💡",
        rotulo: "5. Luz na sua casa",
        descricao: "Fios levam a energia da usina até a sua tomada.",
      },
    ],
    ordemCerta: ["chuva", "rio", "represa", "turbina", "casa"],
    feedbackAcerto: "Perfeito! Chuva → rio → represa → turbina → luz na sua casa.",
    feedbackErro: "Repensa: começa da CHUVA e termina na TOMADA.",
    falaFinal: "É assim que a natureza acende sua lâmpada.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia sozinho e marque as chaves.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página 6 — Relevo e Rios",
    paragrafos: [
      {
        id: "p1",
        texto:
          "RELEVO é o desenho da superfície. Tem PLANALTO (alto e plano em cima), PLANÍCIE (baixo e plano) e DEPRESSÃO (rebaixado).",
        chaves: ["relevo", "planalto", "planície", "depressão"],
      },
      {
        id: "p2",
        texto:
          "O Brasil é um país de PLANALTOS. Por isso os rios descem com força e viram HIDRELÉTRICAS.",
        chaves: ["planaltos", "rios", "hidrelétricas"],
      },
      {
        id: "p3",
        texto:
          "O rio AMAZONAS é o maior do mundo em volume de água. O SÃO FRANCISCO atravessa o semiárido nordestino.",
        chaves: ["amazonas", "são francisco"],
      },
      {
        id: "p4",
        texto:
          "BACIA hidrográfica é um rio principal + todos os rios menores (afluentes) que desaguam nele.",
        chaves: ["bacia", "afluentes"],
      },
    ],
    falaFinal: "Leu tudo. Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo RELEVO RELÂMPAGO. Ache o relevo certo de cada lugar.",
    instrucao: "⏱️ Qual relevo combina?",
    duracaoSegundos: 12,
    pecas: [
      { id: "planalto", emoji: "⛰️", rotulo: "Planalto" },
      { id: "planicie", emoji: "🌾", rotulo: "Planície" },
      { id: "depressao", emoji: "🕳️", rotulo: "Depressão" },
      { id: "rio", emoji: "🌊", rotulo: "Rio grande" },
      { id: "pantanal", emoji: "🐊", rotulo: "Área alagada" },
      { id: "serra", emoji: "🏔️", rotulo: "Serra" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Chapada Diamantina", emoji: "⛰️", cor: "from-orange-500 to-red-700" },
        municipioB: { nome: "Área alta e plana no topo", emoji: "🏞️", cor: "from-amber-500 to-orange-700" },
        contexto: "Chapada com topo achatado em cima é...",
        pecaCertaId: "planalto",
        feedbackAcerto: "Isso! Chapada = PLANALTO.",
        feedbackErro: "Topo plano e alto = PLANALTO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Beira do rio Amazonas", emoji: "🌾", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Plano e baixo", emoji: "🍃", cor: "from-lime-500 to-emerald-700" },
        contexto: "Área baixa e plana às margens do rio é...",
        pecaCertaId: "planicie",
        feedbackAcerto: "Perfeito! Planície às margens do rio.",
        feedbackErro: "Baixo + plano + à beira do rio = PLANÍCIE.",
      },
      {
        id: "r3",
        municipioA: { nome: "Rio Amazonas", emoji: "🌊", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Maior volume de água", emoji: "💧", cor: "from-cyan-500 to-blue-700" },
        contexto: "Corta o Norte com água pra tudo quanto é lado:",
        pecaCertaId: "rio",
        feedbackAcerto: "Boa! É um RIO GRANDE — o Amazonas.",
        feedbackErro: "Amazonas é um RIO gigante.",
      },
      {
        id: "r4",
        municipioA: { nome: "Pantanal (MT/MS)", emoji: "🐊", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Cheio de jacarés", emoji: "🌿", cor: "from-lime-500 to-emerald-700" },
        contexto: "Área que alaga na chuva e vira paraíso dos bichos:",
        pecaCertaId: "pantanal",
        feedbackAcerto: "Combo! PANTANAL — planície alagada.",
        feedbackErro: "Pantanal é ÁREA ALAGADA gigante.",
      },
      {
        id: "r5",
        municipioA: { nome: "Serra Gaúcha (RS)", emoji: "🏔️", cor: "from-purple-500 to-indigo-700" },
        municipioB: { nome: "Vinhedos e frio", emoji: "🍇", cor: "from-fuchsia-500 to-purple-700" },
        contexto: "Área alta e recortada com vinhedos no Sul:",
        pecaCertaId: "serra",
        feedbackAcerto: "Isso! É uma SERRA — cadeia de montanhas.",
        feedbackErro: "Cadeia de morros = SERRA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Depressão Sertaneja", emoji: "🕳️", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Mais baixa que o entorno", emoji: "🏜️", cor: "from-yellow-500 to-orange-700" },
        contexto: "Área REBAIXADA em relação ao que está em volta:",
        pecaCertaId: "depressao",
        feedbackAcerto: "Perfeito! É uma DEPRESSÃO.",
        feedbackErro: "Rebaixada em relação ao entorno = DEPRESSÃO.",
      },
    ],
    falaFinal: "6 relevos identificados! Você já lê a cara do Brasil.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da MATRIZ ELÉTRICA brasileira: de onde vem nossa energia?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "hidro",
        rotulo: "Hidrelétrica (60%)",
        emoji: "⚡",
        percentual: 60,
        cor: "#0ea5e9",
        descricao:
          "A maior parte da nossa luz vem da FORÇA DA ÁGUA. Represas, turbinas, muitos rios de planalto.",
        exemplos: ["🌊 Itaipu", "💧 Belo Monte", "⚙️ Turbinas"],
      },
      {
        id: "outras",
        rotulo: "Outras fontes (40%)",
        emoji: "☀️",
        percentual: 40,
        cor: "#f59e0b",
        descricao:
          "O resto vem de vento (eólica), sol (solar), gás natural, biomassa e outras fontes.",
        exemplos: ["💨 Eólica", "☀️ Solar", "🌱 Biomassa"],
      },
    ],
    falaFinal: "Brasil é campeão em HIDRELÉTRICA. Por isso o relevo alto é riqueza.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Explorador de Montanhas.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Área ALTA e mais ou menos plana no topo se chama...",
        opcoes: [
          { id: "a", texto: "Planície", correta: false },
          { id: "b", texto: "Planalto", correta: true },
          { id: "c", texto: "Depressão", correta: false },
        ],
        feedbackAcerto: "Isso! PLANALTO = alto e plano no topo.",
        feedbackErro: "Planície é BAIXA. Alta e plana = PLANALTO.",
      },
      {
        id: "av2",
        pergunta: "Por que o Brasil tem tanta hidrelétrica?",
        opcoes: [
          { id: "a", texto: "Porque tem rios que descem de planaltos com força.", correta: true },
          { id: "b", texto: "Porque não tem sol nem vento pra outras fontes.", correta: false },
          { id: "c", texto: "Porque tem muitos vulcões.", correta: false },
        ],
        feedbackAcerto:
          "Perfeito! Rio + queda + volume de água = ENERGIA. É a nossa maior fonte.",
        feedbackErro:
          "Não é falta de sol nem vulcão. É porque rios descem de PLANALTOS com força.",
      },
      {
        id: "av3",
        pergunta: "Qual é o rio com MAIOR volume de água do mundo?",
        opcoes: [
          { id: "a", texto: "Rio São Francisco", correta: false },
          { id: "b", texto: "Rio Amazonas", correta: true },
          { id: "c", texto: "Rio Paraná", correta: false },
        ],
        feedbackAcerto: "Isso! O AMAZONAS carrega mais água que qualquer outro rio da Terra.",
        feedbackErro: "É o AMAZONAS — o maior do planeta em volume de água.",
      },
    ],
    selo: {
      nome: "Explorador de Montanhas",
      subtitulo: "Insígnia da Unidade 3 completa",
      emoji: "⛰️",
      cor: "from-orange-500 to-red-700",
    },
    falaFinal:
      "PARABÉNS, EXPLORADOR DE MONTANHAS! Planalto, planície, rio e energia — você já lê o relevo do Brasil.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Explorador de Montanhas" },
};
