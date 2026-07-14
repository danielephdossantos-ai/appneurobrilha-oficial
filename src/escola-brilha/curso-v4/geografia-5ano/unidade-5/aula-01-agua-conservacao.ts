import type { AulaGeoV1 } from "../../types";
import { url as irrigacao } from "@/assets/geografia-5ano/irrigacao-agricultura.jpg.asset.json";
import { url as consciente } from "@/assets/geografia-5ano/uso-consciente-agua.jpg.asset.json";
/**
 * Geografia · 5º Ano · Unidade 5 · Aula 01
 * "O Uso da Água e a Conservação" — EF05GE08
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-agua-conservacao",
  titulo: "O Uso da Água e a Conservação",
  iconeTrilha: "💧",
  bncc: ["EF05GE08"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: o pivô rega. Muita água.",
    mapaUrl: irrigacao,
    imagemDestaqueUrl: irrigacao,
    aurora:
      "Explorador, a água doce é o tesouro mais valioso do planeta. Mas você sabia que a MAIORIA da água não é gasta na sua casa? É na AGRICULTURA e nas FÁBRICAS. Vamos entender.",
    falaFinal: "Cuidar da água é trabalho coletivo. Toda gota conta.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: onde se USA MAIS água no Brasil?",
    pergunta: "Quem consome mais?",
    opcoes: [
      {
        id: "casa",
        titulo: "Nas CASAS",
        subtitulo: "chuveiro, cozinha, banheiro",
        emoji: "🏠",
        cor: "from-sky-400 to-blue-600",
      },
      {
        id: "agri",
        titulo: "Na AGRICULTURA",
        subtitulo: "irrigação de plantações",
        emoji: "🚜",
        cor: "from-emerald-400 to-green-600",
      },
    ],
    respostaCerta: "agri",
    feedbackAcerto:
      "Isso! Mais de 70% da água doce vai pra IRRIGAR plantações. Casa é só 10%.",
    feedbackErro: "Casa gasta pouco (10%). AGRICULTURA gasta 70% — irrigação de lavouras.",
    falaFinal: "Agricultura lidera. Mas todo mundo precisa economizar.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da água.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "doce",
        capa: "1. Água doce",
        emoji: "💧",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "ÁGUA DOCE é a que a gente pode beber. Só 3% da água do planeta é doce — e boa parte está congelada.",
        exemplo: "Ex.: rios, lagos, aquíferos subterrâneos.",
      },
      {
        id: "irrigacao",
        capa: "2. Irrigação",
        emoji: "🚜",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "IRRIGAÇÃO é regar plantações com água. Consome 70% da água doce do Brasil.",
        exemplo: "Ex.: pivô central girando sobre soja no cerrado.",
        fotoUrl: irrigacao,
      },
      {
        id: "desperdicio",
        capa: "3. Desperdício",
        emoji: "🚰",
        cor: "from-red-500 to-rose-700",
        conteudo:
          "DESPERDÍCIO é a água que a gente joga fora sem usar de verdade — banho longo, torneira aberta, cano furado.",
        exemplo: "Ex.: escovar o dente com a torneira aberta desperdiça 12 litros.",
      },
      {
        id: "consciente",
        capa: "4. Uso consciente",
        emoji: "🧠",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "USO CONSCIENTE é gastar SÓ o necessário. Fechar torneira, reaproveitar água da chuva, banhos curtos.",
        exemplo: "Ex.: fechar torneira ao ensaboar economiza 1500 litros por mês.",
        fotoUrl: consciente,
      },
    ],
    falaFinal: "Doce, irrigação, desperdício, consciente. 4 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada uso da água e ouça o quanto consome.",
    instrucao: "Toque em cada balão",
    mapaUrl: irrigacao,
    pontos: [
      {
        id: "agri",
        x: 50,
        y: 50,
        emoji: "🌾",
        cor: "from-emerald-500 to-green-700",
        titulo: "AGRICULTURA (70%)",
        texto:
          "Irrigar soja, cana, arroz e frutas gasta a maior parte da água doce do Brasil.",
      },
      {
        id: "industria",
        x: 25,
        y: 30,
        emoji: "🏭",
        cor: "from-slate-500 to-gray-700",
        titulo: "INDÚSTRIA (20%)",
        texto:
          "Fábricas usam água pra resfriar máquinas, lavar produtos e fazer bebidas.",
      },
      {
        id: "casa",
        x: 75,
        y: 40,
        emoji: "🏠",
        cor: "from-sky-500 to-blue-700",
        titulo: "CASAS (10%)",
        texto:
          "Chuveiro, torneira, vaso sanitário e cozinha. Parece muito, mas é o MENOR pedaço.",
      },
      {
        id: "chuveiro",
        x: 60,
        y: 75,
        emoji: "🚿",
        cor: "from-amber-500 to-orange-700",
        titulo: "BANHO longo?",
        texto:
          "15 minutos de banho gasta até 135 litros. Reduzir pra 5 min economiza 90 litros por dia.",
      },
    ],
    falaFinal: "Agricultura em cima, indústria no meio, casa no final. Todos precisam economizar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre água.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem GASTA MAIS água no Brasil?",
        fotoUrl: irrigacao,
        cards: [
          { id: "ag", emoji: "🚜", titulo: "Agricultura", cor: "from-emerald-500 to-green-700" },
          { id: "ca", emoji: "🏠", titulo: "Casas", cor: "from-sky-500 to-blue-700" },
          { id: "es", emoji: "🏫", titulo: "Escolas", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "ag",
        feedbackAcerto: "Isso! AGRICULTURA = 70% da água doce.",
        feedbackErro: "Casa é só 10%, escola menos ainda. AGRICULTURA lidera.",
      },
      {
        id: "q2",
        pergunta: "O que é DESPERDÍCIO de água?",
        cards: [
          { id: "ec", emoji: "🧠", titulo: "Uso planejado", cor: "from-purple-500 to-fuchsia-700" },
          { id: "des", emoji: "🚰", titulo: "Torneira aberta à toa", cor: "from-red-500 to-rose-700" },
          { id: "ch", emoji: "🌧️", titulo: "Chuva forte", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "des",
        feedbackAcerto: "Perfeito! DESPERDÍCIO = jogar fora sem usar.",
        feedbackErro: "Uso planejado é bom. Chuva é natural. DESPERDÍCIO = torneira aberta.",
      },
      {
        id: "q3",
        pergunta: "Qual atitude conserva ÁGUA em casa?",
        fotoUrl: consciente,
        cards: [
          { id: "co", emoji: "🚿", titulo: "Banho curto", cor: "from-emerald-500 to-green-700" },
          { id: "ma", emoji: "💦", titulo: "Torneira sempre aberta", cor: "from-red-500 to-rose-700" },
          { id: "la", emoji: "🚰", titulo: "Lavar calçada com mangueira", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "co",
        feedbackAcerto: "Isso! BANHO CURTO economiza dezenas de litros por dia.",
        feedbackErro: "Torneira aberta e mangueira DESPERDIÇAM. Banho curto ECONOMIZA.",
      },
    ],
    falaFinal: "Radar afiado! Você sabe cuidar da água.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Estados que mais SOFREM com seca e falta de água. Toque neles pra entender por que precisam de mais cuidado hídrico.",
    instrucao: "Acenda os estados do Semiárido brasileiro",
    missao: {
      tipo: "selecionar",
      siglas: ["PI", "CE", "RN", "PB", "PE", "BA"],
      pergunta: "Quais estados formam o Semiárido nordestino?",
    },
    falaFinal: "Semiárido = pouca chuva. Precisa mais que qualquer outro cuidar da água.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como a água chega TRATADA na sua torneira?",
    instrucao: "Toque na ordem certa",
    pergunta: "Caminho da água até sua casa:",
    paradas: [
      {
        id: "chuva",
        emoji: "🌧️",
        rotulo: "1. Chuva",
        descricao: "A água cai do céu e enche rios e represas.",
      },
      {
        id: "captacao",
        emoji: "🏞️",
        rotulo: "2. Captação no rio",
        descricao: "Empresas de saneamento coletam a água bruta.",
      },
      {
        id: "tratamento",
        emoji: "🧪",
        rotulo: "3. Tratamento",
        descricao: "Estação limpa, filtra e adiciona cloro e flúor.",
      },
      {
        id: "reservatorio",
        emoji: "🛢️",
        rotulo: "4. Reservatório",
        descricao: "Água tratada guardada em caixas d'água gigantes.",
      },
      {
        id: "torneira",
        emoji: "🚰",
        rotulo: "5. Sua torneira",
        descricao: "Chega pela rede de canos até sua casa.",
      },
    ],
    ordemCerta: ["chuva", "captacao", "tratamento", "reservatorio", "torneira"],
    feedbackAcerto: "Ciclo completo! Da chuva ao copo — muito trabalho no meio.",
    feedbackErro: "Repensa: chuva → captação → tratamento → reservatório → torneira.",
    falaFinal: "5 etapas invisíveis pra você abrir a torneira. Respeite.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as chaves.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 5 — Água",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Só 3% da ÁGUA do planeta é DOCE. E boa parte está congelada nos polos.",
        chaves: ["água", "doce"],
      },
      {
        id: "p2",
        texto:
          "A AGRICULTURA consome 70% da água doce, principalmente na IRRIGAÇÃO.",
        chaves: ["agricultura", "irrigação"],
      },
      {
        id: "p3",
        texto:
          "DESPERDÍCIO é jogar água fora sem uso — torneira aberta, banho longo, cano furado.",
        chaves: ["desperdício", "torneira"],
      },
      {
        id: "p4",
        texto:
          "USO CONSCIENTE é gastar SÓ o necessário. Banho curto, torneira fechada ao ensaboar.",
        chaves: ["consciente", "banho"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo GOTA D'OURO! Cada rodada, escolha a atitude que ECONOMIZA água.",
    instrucao: "⏱️ Qual atitude economiza?",
    duracaoSegundos: 12,
    pecas: [
      { id: "fecha-tor", emoji: "🚰", rotulo: "Fechar torneira" },
      { id: "banho-curto", emoji: "🚿", rotulo: "Banho curto" },
      { id: "vassoura", emoji: "🧹", rotulo: "Vassoura na calçada" },
      { id: "chuva", emoji: "🌧️", rotulo: "Reaproveitar chuva" },
      { id: "goteira", emoji: "🔧", rotulo: "Consertar goteira" },
      { id: "descarga", emoji: "🚽", rotulo: "Descarga eficiente" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Escovando os dentes", emoji: "🪥", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Torneira aberta", emoji: "🚰", cor: "from-red-400 to-rose-600" },
        contexto: "Escovando os dentes por 2 minutos. Melhor atitude?",
        pecaCertaId: "fecha-tor",
        feedbackAcerto: "Isso! FECHAR TORNEIRA economiza 12 litros por escovação.",
        feedbackErro: "Deixar aberta desperdiça. FECHAR TORNEIRA economiza 12L.",
      },
      {
        id: "r2",
        municipioA: { nome: "Chuveiro ligado", emoji: "🚿", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "15 minutos", emoji: "⏰", cor: "from-red-400 to-rose-600" },
        contexto: "Banho de 15 min gasta 135 litros. O que fazer?",
        pecaCertaId: "banho-curto",
        feedbackAcerto: "Perfeito! BANHO CURTO (5 min) economiza 90L por dia.",
        feedbackErro: "BANHO CURTO (5 min) reduz de 135L pra 45L.",
      },
      {
        id: "r3",
        municipioA: { nome: "Calçada suja", emoji: "🧱", cor: "from-amber-400 to-yellow-600" },
        municipioB: { nome: "Mangueira à mão", emoji: "🌊", cor: "from-sky-400 to-blue-600" },
        contexto: "Limpar a calçada. Melhor opção?",
        pecaCertaId: "vassoura",
        feedbackAcerto: "Isso! VASSOURA — mangueira desperdiça 100L em 15 min.",
        feedbackErro: "Mangueira desperdiça muito. VASSOURA resolve sem água.",
      },
      {
        id: "r4",
        municipioA: { nome: "Chove muito", emoji: "🌧️", cor: "from-sky-400 to-indigo-600" },
        municipioB: { nome: "Jardim seco", emoji: "🌱", cor: "from-amber-400 to-yellow-600" },
        contexto: "Muita chuva no telhado. O que fazer com essa água?",
        pecaCertaId: "chuva",
        feedbackAcerto: "Boa! REAPROVEITAR CHUVA pra regar jardim e lavar calçada.",
        feedbackErro: "Água da chuva é grátis. REAPROVEITAR economiza água tratada.",
      },
      {
        id: "r5",
        municipioA: { nome: "Torneira pingando", emoji: "💧", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Cano da pia", emoji: "🚿", cor: "from-slate-400 to-gray-600" },
        contexto: "Torneira pinga sem parar. O que fazer?",
        pecaCertaId: "goteira",
        feedbackAcerto: "Isso! CONSERTAR GOTEIRA — 1 gota/segundo = 30L por dia!",
        feedbackErro: "Ignorar desperdiça 30L/dia. CONSERTAR GOTEIRA resolve.",
      },
      {
        id: "r6",
        municipioA: { nome: "Vaso sanitário", emoji: "🚽", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Descarga velha", emoji: "🔄", cor: "from-slate-400 to-gray-600" },
        contexto: "Descarga antiga gasta 15L por vez. Solução?",
        pecaCertaId: "descarga",
        feedbackAcerto: "Perfeito! DESCARGA EFICIENTE (dual flush) usa 3-6L.",
        feedbackErro: "Descarga velha desperdiça. Trocar por EFICIENTE economiza.",
      },
    ],
    falaFinal: "6 atitudes conscientes! Você virou guardião da água.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do CONSUMO de água no Brasil.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "agri",
        rotulo: "Agricultura (70%)",
        emoji: "🌾",
        percentual: 70,
        cor: "#10b981",
        descricao:
          "A maior parte da água doce vai pra IRRIGAR plantações. Reduzir aqui salva rios inteiros.",
        exemplos: ["🚜 Pivô central", "💧 Gotejamento", "🌱 Soja/arroz/cana"],
      },
      {
        id: "outros",
        rotulo: "Indústria + Casa (30%)",
        emoji: "🏭",
        percentual: 30,
        cor: "#0ea5e9",
        descricao:
          "Fábricas usam 20%, casas usam 10%. Mesmo pequeno, todo mundo precisa economizar.",
        exemplos: ["🏭 Indústria", "🏠 Casa", "🏢 Comércio"],
      },
    ],
    falaFinal: "70% no campo, 30% no resto. Cuidar da água = trabalho coletivo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas pra ganhar a insígnia Guardião dos Recursos Hídricos.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "Como conservar água doce no dia a dia?",
        opcoes: [
          { id: "a", texto: "Deixar torneiras abertas pra água circular", correta: false },
          { id: "b", texto: "Evitar desperdício e cobrar indústria/fazenda", correta: true },
          { id: "c", texto: "Não escovar os dentes", correta: false },
        ],
        feedbackAcerto: "Isso! Evitar desperdício em casa + cobrar quem gasta muito.",
        feedbackErro: "Torneira aberta desperdiça. O certo é EVITAR DESPERDÍCIO.",
      },
      {
        id: "av2",
        pergunta: "Quem GASTA MAIS água no Brasil?",
        opcoes: [
          { id: "a", texto: "Agricultura (70%)", correta: true },
          { id: "b", texto: "Casas (70%)", correta: false },
          { id: "c", texto: "Escolas (70%)", correta: false },
        ],
        feedbackAcerto: "Perfeito! AGRICULTURA gasta 70% da água doce.",
        feedbackErro: "Casa é 10%, escola menos. AGRICULTURA = 70%.",
      },
      {
        id: "av3",
        pergunta: "Qual é USO CONSCIENTE de água?",
        opcoes: [
          { id: "a", texto: "Banho de 30 minutos", correta: false },
          { id: "b", texto: "Fechar torneira ao ensaboar", correta: true },
          { id: "c", texto: "Lavar calçada com mangueira", correta: false },
        ],
        feedbackAcerto: "Isso! Fechar torneira = uso consciente e economia.",
        feedbackErro: "Banho longo e mangueira desperdiçam. Consciente = FECHAR TORNEIRA.",
      },
    ],
    selo: {
      nome: "Guardião dos Recursos Hídricos",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "💧",
      cor: "from-blue-400 to-cyan-600",
    },
    falaFinal: "Insígnia conquistada! Cada gota agradece.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guardião dos Recursos Hídricos" },
};
