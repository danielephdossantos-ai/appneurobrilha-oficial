import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";
import feira from "@/assets/geografia-3ano/feira-livre-bairro.jpg";
import sitio from "@/assets/geografia-3ano/colheita-sitio-hortalicas.jpg";
import ordenha from "@/assets/geografia-3ano/ordenha-manha-fazenda.jpg";
import padaria from "@/assets/geografia-3ano/padaria-artesanal-paes.jpg";
import mercado from "@/assets/geografia-3ano/prateleira-leite-mercado.jpg";
import caminhao from "@/assets/geografia-3ano/caminhao-leite-estrada.jpg";

/**
 * Geografia · 2º Ano (v2) · Unidade 1 · Aula 03
 * "Trabalho no Campo e na Cidade" — EF02GE03
 */
export const aula03: AulaGeoV1 = {
  slug: "aula-03-trabalho-campo-cidade",
  titulo: "Quem Trabalha Aonde?",
  iconeTrilha: "🧑‍🌾",
  bncc: ["EF02GE03"],
  duracaoMin: 18,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa: no CAMPO tem gente trabalhando, na CIDADE também. Quem faz o quê?",
    mapaUrl: mapaMunicipio,
    aurora: "Oi, cartógrafo! Todo lugar tem gente TRABALHANDO. Hoje a gente descobre quem trabalha no CAMPO e quem trabalha na CIDADE — e como um depende do outro!",
    falaFinal: "Viu? Sem o campo não tem comida. Sem a cidade não tem mercado pra vender. Eles se AJUDAM!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: de onde vem o leite que você bebe de manhã?",
    pergunta: "De onde vem o leite?",
    opcoes: [
      { id: "mercado", titulo: "Nasce no mercado", subtitulo: "aparece na prateleira", emoji: "🏪", cor: "from-slate-400 to-slate-600" },
      { id: "vaca", titulo: "Da vaca, no campo", subtitulo: "e o caminhão traz pra cidade", emoji: "🐄", cor: "from-emerald-400 to-teal-600" },
    ],
    respostaCerta: "vaca",
    feedbackAcerto: "Isso! Leite vem da VACA, no CAMPO. Depois o caminhão traz.",
    feedbackErro: "O leite não nasce no mercado — ele SAI da VACA no campo!",
    falaFinal: "Cada comida da cidade veio de algum lugar do CAMPO primeiro.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras de hoje. Toca em cada uma!",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "trabalho", capa: "Trabalho", emoji: "🛠️", cor: "from-amber-400 to-orange-600", conteudo: "É a ATIVIDADE que a pessoa faz pra ganhar dinheiro e viver.", exemplo: "Meu pai TRABALHA de... (pergunta!)" },
      { id: "campo", capa: "Trabalho no Campo", emoji: "🌾", cor: "from-lime-500 to-emerald-700", conteudo: "É o trabalho de PLANTAR, cuidar de ANIMAIS e colher alimentos.", exemplo: "Agricultor, pescador, vaqueiro." },
      { id: "cidade", capa: "Trabalho na Cidade", emoji: "🏙️", cor: "from-sky-500 to-indigo-700", conteudo: "É o trabalho nas LOJAS, ESCOLAS, HOSPITAIS, ESCRITÓRIOS e FÁBRICAS.", exemplo: "Professor, padeiro, motorista, médico." },
      { id: "depender", capa: "Depender", emoji: "🔗", cor: "from-fuchsia-400 to-purple-600", conteudo: "É PRECISAR do outro. Cidade depende do campo pra comer. Campo depende da cidade pra vender.", exemplo: "Sem plantação, sem pão. Sem cidade, sem quem compre." },
    ],
    falaFinal: "4 palavras na mochila. Bora usar!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Olha o mapa. Toca em cada balão: um profissional do CAMPO ou da CIDADE.",
    instrucao: "Toque nos balões",
    mapaUrl: mapaMunicipio,
    pontos: [
      { id: "agricultor", x: 22, y: 30, emoji: "👩‍🌾", cor: "from-lime-400 to-emerald-600", titulo: "Agricultor", texto: "Trabalha no CAMPO plantando alface, tomate, milho. A comida da sua mesa começa aqui.", fotoUrl: sitio },
      { id: "vaqueiro", x: 40, y: 20, emoji: "🐄", cor: "from-amber-400 to-orange-600", titulo: "Vaqueiro/Leiteiro", texto: "Cuida das VACAS no campo. Tira o leite de manhã cedinho.", fotoUrl: ordenha },
      { id: "padeiro", x: 70, y: 55, emoji: "👨‍🍳", cor: "from-yellow-400 to-amber-600", titulo: "Padeiro", texto: "Na CIDADE, transforma a farinha em PÃO fresquinho, todo dia às 5 da manhã.", fotoUrl: padaria },
      { id: "feirante", x: 82, y: 40, emoji: "🧺", cor: "from-emerald-400 to-teal-600", titulo: "Feirante", texto: "Na feira do BAIRRO, vende a comida que veio do campo direto pra família.", fotoUrl: feira },
    ],
    falaFinal: "Cada profissão importa. Sem uma delas, a cadeia trava!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Radar do trabalho ligado! 3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem PLANTA alface e tomate no campo?",
        cards: [
          { id: "agricultor", emoji: "👩‍🌾", titulo: "Agricultor", cor: "from-lime-400 to-emerald-600" },
          { id: "padeiro", emoji: "👨‍🍳", titulo: "Padeiro", cor: "from-amber-400 to-orange-500" },
          { id: "medico", emoji: "🩺", titulo: "Médico", cor: "from-sky-400 to-indigo-500" },
        ],
        correta: "agricultor",
        feedbackAcerto: "Isso! AGRICULTOR planta no campo.",
        feedbackErro: "Quem planta é o AGRICULTOR (no campo).",
      },
      {
        id: "q2",
        pergunta: "Quem faz o PÃO fresco na cidade?",
        cards: [
          { id: "vaqueiro", emoji: "🐄", titulo: "Vaqueiro", cor: "from-amber-400 to-orange-600" },
          { id: "padeiro", emoji: "👨‍🍳", titulo: "Padeiro", cor: "from-yellow-400 to-amber-600" },
          { id: "pescador", emoji: "🎣", titulo: "Pescador", cor: "from-cyan-400 to-blue-600" },
        ],
        correta: "padeiro",
        feedbackAcerto: "Boa! PADEIRO faz o pão na cidade.",
        feedbackErro: "Pão fresco = PADEIRO (na cidade).",
      },
      {
        id: "q3",
        pergunta: "Se ninguém trabalhasse no CAMPO, o que faltaria na cidade?",
        cards: [
          { id: "comida", emoji: "🍎", titulo: "Comida", cor: "from-emerald-400 to-teal-600" },
          { id: "onibus", emoji: "🚌", titulo: "Ônibus", cor: "from-slate-400 to-slate-600" },
          { id: "predio", emoji: "🏢", titulo: "Prédios", cor: "from-sky-400 to-indigo-500" },
        ],
        correta: "comida",
        feedbackAcerto: "Sim! Sem campo, sem COMIDA.",
        feedbackErro: "Sem campo faltaria COMIDA na cidade.",
      },
    ],
    falaFinal: "Radar afinado! Cada profissão liga o lugar ao seu prato.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "2 camadas do TRABALHO: CAMPO e CIDADE. Liga as duas!",
    instrucao: "Toque nos interruptores",
    mapaUrl: mapaMunicipio,
    camadas: [
      { id: "campo", rotulo: "Trabalho no Campo", emoji: "🌾", cor: "from-lime-500 to-emerald-700", rect: { x: 5, y: 15, w: 45, h: 55 }, descricao: "Agricultor, vaqueiro, pescador, apicultor. Plantam, criam, colhem — a comida começa aqui." },
      { id: "cidade", rotulo: "Trabalho na Cidade", emoji: "🏙️", cor: "from-sky-500 to-indigo-600", rect: { x: 55, y: 40, w: 40, h: 45 }, descricao: "Padeiro, feirante, motorista, professor, médico. Transformam, vendem, ensinam, cuidam." },
    ],
    falaFinal: "As DUAS camadas trabalham JUNTAS — e todo mundo come, aprende e é cuidado.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Bora montar o CAMINHO DO LEITE, do campo até seu copo!",
    instrucao: "Toque na ordem certa",
    pergunta: "Como o leite chega no seu café?",
    paradas: [
      { id: "vaca", emoji: "🐄", rotulo: "Vaca no campo", descricao: "De manhã, o vaqueiro tira o leite quentinho da vaca.", fotoUrl: ordenha },
      { id: "caminhao", emoji: "🚛", rotulo: "Caminhão-leite", descricao: "O caminhão pega o leite e roda pela estrada até a cidade.", fotoUrl: caminhao },
      { id: "mercado", emoji: "🏪", rotulo: "Mercado da cidade", descricao: "O mercado coloca a caixa de leite gelada na prateleira.", fotoUrl: mercado },
      { id: "casa", emoji: "🏠", rotulo: "Sua casa", descricao: "A família compra e traz pra casa — leite no copo!" },
    ],
    ordemCerta: ["vaca", "caminhao", "mercado", "casa"],
    feedbackAcerto: "Cadeia completa! 4 profissões trabalharam pro seu leite.",
    feedbackErro: "Pensa: vaca (campo) → caminhão → mercado → casa.",
    falaFinal: "Toda comida tem uma HISTÓRIA como essa. Cada profissional entra num pedaço.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez! Eu calo. Você lê e toca nas palavras.",
    tituloLivro: "📔 Diário do Cartógrafo",
    subtitulo: "Página 3 — Trabalho no Campo e na Cidade",
    paragrafos: [
      { id: "p1", texto: "TRABALHO é o que a pessoa faz pra ganhar dinheiro e viver. Cada lugar tem seus trabalhos.", chaves: ["trabalho"] },
      { id: "p2", texto: "No CAMPO, o agricultor PLANTA, o vaqueiro cuida do gado, o pescador PESCA. Eles produzem a COMIDA.", chaves: ["campo", "agricultor", "comida"] },
      { id: "p3", texto: "Na CIDADE, o padeiro faz o PÃO, o feirante VENDE, o motorista TRANSPORTA, o professor ENSINA.", chaves: ["cidade", "padeiro", "feirante"] },
      { id: "p4", texto: "Campo e cidade DEPENDEM um do outro. Sem campo, faltaria comida. Sem cidade, o campo não teria pra quem vender.", chaves: ["dependem"] },
    ],
    falaFinal: "Você já explica sozinho a parceria entre CAMPO e CIDADE.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "PROFISSÃO EXPRESS! Onde essa pessoa trabalha: CAMPO ou CIDADE?",
    instrucao: "⏱️ Toque no lugar certo!",
    duracaoSegundos: 15,
    pecas: [
      { id: "campo", emoji: "🌾", rotulo: "Campo" },
      { id: "cidade", emoji: "🏙️", rotulo: "Cidade" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Profissão", emoji: "👩‍🌾", cor: "from-lime-500 to-emerald-700" },
        municipioB: { nome: "Agricultora", emoji: "🥕", cor: "from-orange-400 to-amber-600" },
        contexto: "Ela acorda cedo, planta cenoura, colhe alface. Onde trabalha?",
        pecaCertaId: "campo",
        feedbackAcerto: "CAMPO! Agricultor planta lá.",
        feedbackErro: "Plantar = CAMPO 🌾.",
      },
      {
        id: "r2",
        municipioA: { nome: "Profissão", emoji: "👨‍🍳", cor: "from-yellow-500 to-amber-700" },
        municipioB: { nome: "Padeiro", emoji: "🥖", cor: "from-amber-400 to-orange-500" },
        contexto: "Faz pão de madrugada, atende clientes na loja. Onde trabalha?",
        pecaCertaId: "cidade",
        feedbackAcerto: "CIDADE! Padaria é na cidade.",
        feedbackErro: "Padaria fica na CIDADE 🏙️.",
      },
      {
        id: "r3",
        municipioA: { nome: "Profissão", emoji: "🎣", cor: "from-cyan-500 to-blue-700" },
        municipioB: { nome: "Pescador", emoji: "🐟", cor: "from-teal-400 to-cyan-600" },
        contexto: "Sai de barco no rio, pesca peixes de manhã. Onde trabalha?",
        pecaCertaId: "campo",
        feedbackAcerto: "CAMPO/ZONA RURAL! Rio e mar entram aí.",
        feedbackErro: "Pescador trabalha na natureza = CAMPO 🌾.",
      },
      {
        id: "r4",
        municipioA: { nome: "Profissão", emoji: "🚌", cor: "from-slate-500 to-slate-700" },
        municipioB: { nome: "Motorista", emoji: "🛣️", cor: "from-indigo-400 to-purple-600" },
        contexto: "Dirige o ônibus urbano, leva gente pro trabalho na cidade. Onde trabalha?",
        pecaCertaId: "cidade",
        feedbackAcerto: "CIDADE! Ônibus urbano roda na cidade.",
        feedbackErro: "Ônibus urbano = CIDADE 🏙️.",
      },
    ],
    falaFinal: "Profissão Express feito! Você separa bem campo e cidade.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Trabalho no município é uma pizza de 2 fatias. Toca em cada uma!",
    instrucao: "🍕 Toque nas fatias",
    fatias: [
      {
        id: "campo",
        rotulo: "Trabalho no Campo",
        emoji: "🌾",
        percentual: 30,
        cor: "#16a34a",
        descricao: "30% das pessoas trabalham no CAMPO: plantando, criando, pescando. Produzem a comida.",
        exemplos: ["Agricultor", "Vaqueiro", "Pescador"],
      },
      {
        id: "cidade",
        rotulo: "Trabalho na Cidade",
        emoji: "🏙️",
        percentual: 70,
        cor: "#4f46e5",
        descricao: "70% trabalham na CIDADE: em lojas, escolas, hospitais, fábricas. Transformam e cuidam.",
        exemplos: ["Padeiro", "Professor", "Médico", "Motorista"],
      },
    ],
    falaFinal: "Cidade tem MAIS gente trabalhando, mas nada funcionaria sem o CAMPO!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão! 3 perguntas.",
    instrucao: "Escolha a resposta certa",
    perguntas: [
      {
        id: "p1",
        pergunta: "Quem trabalha no CAMPO?",
        opcoes: [
          { id: "a", texto: "Padeiro e feirante." },
          { id: "b", texto: "Agricultor, vaqueiro e pescador.", correta: true },
          { id: "c", texto: "Médico e professor." },
        ],
        feedbackAcerto: "Isso! Campo = agricultor, vaqueiro, pescador.",
        feedbackErro: "Trabalho do CAMPO: AGRICULTOR, VAQUEIRO, PESCADOR.",
      },
      {
        id: "p2",
        pergunta: "Sem o CAMPO, o que faltaria na cidade?",
        opcoes: [
          { id: "a", texto: "Prédios." },
          { id: "b", texto: "Comida.", correta: true },
          { id: "c", texto: "Ônibus." },
        ],
        feedbackAcerto: "Sim! Sem campo, sem COMIDA.",
        feedbackErro: "Sem campo faltaria a COMIDA na cidade.",
      },
      {
        id: "p3",
        pergunta: "Campo e cidade...",
        opcoes: [
          { id: "a", texto: "Vivem separados e não se ajudam." },
          { id: "b", texto: "Dependem um do outro pra funcionar.", correta: true },
          { id: "c", texto: "São a mesma coisa." },
        ],
        feedbackAcerto: "Exato! Um DEPENDE do outro.",
        feedbackErro: "Eles DEPENDEM um do outro (comida × mercado).",
      },
    ],
    selo: {
      nome: "Mestre das Profissões",
      subtitulo: "Insígnia oficial — Aula 03",
      emoji: "🛠️",
      cor: "from-amber-300 to-orange-500",
    },
    falaFinal: "Mais uma insígnia! Última aula: como CUIDAR do lugar onde a gente vive.",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Mestre das Profissões" },
};
