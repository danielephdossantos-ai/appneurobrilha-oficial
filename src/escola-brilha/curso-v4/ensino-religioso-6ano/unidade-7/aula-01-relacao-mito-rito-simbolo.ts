import type { AulaGeoV1 } from "../../types";
import { aula01 as base } from "../unidade-6/aula-01-mitos-ritos-textos";
import { url as usoColetivo } from "@/assets/ensino-religioso-6ano/u4-uso-coletivo.jpg.asset.json";
import { url as oralidade } from "@/assets/ensino-religioso-6ano/u2-oralidade.jpg.asset.json";
import { url as sutras } from "@/assets/ensino-religioso-6ano/u2-sutras.jpg.asset.json";
import { url as torah } from "@/assets/ensino-religioso-6ano/u1-torah.jpg.asset.json";

/** EF06ER07 — relação concreta entre mito, rito e símbolo em celebrações. */
export const aula01: AulaGeoV1 = {
  ...base,
  slug: "aula-01-relacao-mito-rito-simbolo",
  titulo: "Da Narrativa à Celebração",
  iconeTrilha: "🔗",
  bncc: ["EF06ER07"],
  duracaoMin: 24,
  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: uma história, uma ação e um objeto conectados.",
    mapaUrl: usoColetivo,
    imagemDestaqueUrl: usoColetivo,
    aurora: "Uma prática celebrativa ganha sentido quando relacionamos a narrativa lembrada (mito), as ações realizadas (rito) e os objetos ou sinais que condensam significados (símbolos). Nesta aula, vamos explicar essas relações com exemplos de diferentes tradições, sem participar dos ritos e sem comparar crenças.",
    falaFinal: "O objetivo não é apenas classificar: é explicar como cada elemento dá sentido aos outros.",
  },
  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Analise a relação antes de responder.",
    pergunta: "Em uma celebração, por que um símbolo costuma estar ligado a uma narrativa e a um rito?",
    opcoes: [
      { id: "sentido", titulo: "Porque lembra a narrativa durante a ação coletiva", subtitulo: "mito, rito e símbolo se relacionam", emoji: "🔗", cor: "from-emerald-400 to-teal-600" },
      { id: "decoracao", titulo: "Porque serve apenas de decoração", subtitulo: "não teria significado", emoji: "🎈", cor: "from-slate-400 to-gray-600" },
      { id: "isolado", titulo: "Porque funciona sempre isolado", subtitulo: "sem narrativa ou prática", emoji: "🚪", cor: "from-red-400 to-rose-600" },
      { id: "igual", titulo: "Porque todas as tradições usam os mesmos símbolos", subtitulo: "sem diferenças culturais", emoji: "🟰", cor: "from-blue-400 to-indigo-600" },
    ],
    respostaCerta: "sentido",
    feedbackAcerto: "Isso. O símbolo torna visível uma narrativa durante uma ação celebrativa.",
    feedbackErro: "Símbolo não é simples decoração: ele evoca uma narrativa e participa do rito.",
    falaFinal: "Agora vamos demonstrar essa relação em quatro contextos.",
  },
  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos para construir explicações.",
    instrucao: "Abra os cadernos",
    cadernos: [
      { id: "mito", capa: "Mito / narrativa", emoji: "📜", cor: "from-amber-500 to-orange-700", conteudo: "Narrativa religiosa que comunica origens, memórias, personagens e valores de uma tradição.", exemplo: "Na análise, pergunte: qual história é lembrada?", fotoUrl: torah },
      { id: "rito", capa: "Rito / ação", emoji: "🕯️", cor: "from-sky-500 to-blue-700", conteudo: "Sequência de ações realizada em um contexto celebrativo e reconhecida pela comunidade.", exemplo: "Pergunte: o que as pessoas fazem e em qual ordem?", fotoUrl: usoColetivo },
      { id: "simbolo", capa: "Símbolo / significado", emoji: "✨", cor: "from-purple-500 to-fuchsia-700", conteudo: "Objeto, imagem, som, alimento ou gesto que concentra significados compartilhados.", exemplo: "Pergunte: o que esse elemento faz a comunidade lembrar?", fotoUrl: sutras },
      { id: "relacao", capa: "Relação", emoji: "🔗", cor: "from-emerald-500 to-green-700", conteudo: "Explicação de como narrativa, ação e símbolo trabalham juntos numa celebração específica.", exemplo: "Estrutura: o rito realiza uma ação; o símbolo lembra um elemento do mito e reforça seu significado.", fotoUrl: oralidade },
    ],
    falaFinal: "Identificar é o começo; relacionar exige explicar as conexões.",
  },
  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Leia exemplos descritivos e identifique as três partes.",
    instrucao: "Toque em cada exemplo",
    mapaUrl: usoColetivo,
    pontos: [
      { id: "pascoa", x: 24, y: 28, emoji: "🍞", cor: "from-amber-500 to-orange-700", titulo: "Pessach judaico", texto: "A narrativa lembra a saída do Egito; o rito organiza uma refeição e perguntas; alimentos simbólicos evocam aspectos da jornada e da memória coletiva.", fotoUrl: torah },
      { id: "vesak", x: 72, y: 28, emoji: "🪷", cor: "from-sky-500 to-blue-700", titulo: "Vesak budista", texto: "Narrativas sobre a vida e o despertar de Buda são lembradas; práticas comunitárias estruturam a celebração; luzes e flores simbolizam ensinamentos como impermanência e sabedoria.", fotoUrl: sutras },
      { id: "indigena", x: 26, y: 70, emoji: "🪶", cor: "from-emerald-500 to-green-700", titulo: "Celebração indígena", texto: "Cada povo possui contextos próprios: narrativas de origem podem ser recontadas, cantos e danças formam o rito, e pinturas ou objetos ganham significados definidos pela comunidade.", fotoUrl: oralidade },
      { id: "afro", x: 74, y: 70, emoji: "🥁", cor: "from-purple-500 to-fuchsia-700", titulo: "Celebração afro-brasileira", texto: "Narrativas preservam memórias e relações com orixás ou ancestrais; cantos e movimentos compõem o rito; cores, alimentos e objetos simbolizam vínculos específicos.", fotoUrl: usoColetivo },
    ],
    falaFinal: "Os elementos mudam entre tradições; o método de análise permanece: narrativa, ação, símbolo e relação.",
  },
  cena05_compreensao: {
    tipo: "quizRadar", aurora: "Explique relações, não apenas nomes.", instrucao: "Escolha a análise correta",
    perguntas: [
      { id: "q1", pergunta: "Qual resposta realmente relaciona mito, rito e símbolo?", fotoUrl: usoColetivo, cards: [
        { id: "r", emoji: "🔗", titulo: "A ação ritual recorda a narrativa por meio do símbolo", cor: "from-emerald-500 to-green-700" },
        { id: "m", emoji: "📜", titulo: "Mito é uma narrativa", cor: "from-amber-500 to-orange-700" },
        { id: "s", emoji: "✨", titulo: "Símbolo é um objeto", cor: "from-purple-500 to-fuchsia-700" },
        { id: "i", emoji: "🚪", titulo: "Os três elementos não se conectam", cor: "from-red-500 to-rose-700" },
      ], correta: "r", feedbackAcerto: "Correto: a frase explica a conexão entre os três.", feedbackErro: "Definições isoladas não bastam; a habilidade pede RELAÇÃO." },
    ], falaFinal: "Você diferenciou classificação de explicação relacional.",
  },
  cena07_sequencia: {
    tipo: "linhaEstrada", aurora: "Monte uma análise respeitosa.", instrucao: "Ordene o raciocínio", pergunta: "Como analisar uma prática celebrativa?",
    paradas: [
      { id: "contexto", emoji: "🌍", rotulo: "1. Identificar tradição e contexto", descricao: "Não generalize uma prática para todas as comunidades." },
      { id: "mito", emoji: "📜", rotulo: "2. Localizar a narrativa", descricao: "Descubra qual memória ou história é evocada." },
      { id: "rito", emoji: "🕯️", rotulo: "3. Descrever as ações", descricao: "Observe o que ocorre e em qual sequência." },
      { id: "simbolo", emoji: "✨", rotulo: "4. Interpretar os símbolos", descricao: "Use o significado atribuído pela própria tradição." },
      { id: "relacionar", emoji: "🔗", rotulo: "5. Explicar as conexões", descricao: "Mostre como narrativa, ação e símbolo produzem sentido juntos." },
    ], ordemCerta: ["contexto","mito","rito","simbolo","relacionar"], feedbackAcerto: "Análise completa e contextualizada.", feedbackErro: "Comece pelo contexto e termine explicando as relações.", falaFinal: "Esse roteiro evita generalizações e julgamentos.",
  },
  cena08_voceLe: {
    tipo: "voceLeSozinho", aurora: "Leia e encontre as conexões.", tituloLivro: "Caderno do Decifrador", subtitulo: "EF06ER07 — mito, rito e símbolo",
    paragrafos: [
      { id: "p1", texto: "Uma PRÁTICA CELEBRATIVA acontece em contexto específico. Não se deve afirmar que todas as pessoas de uma tradição celebram do mesmo modo.", chaves: ["prática celebrativa","contexto"] },
      { id: "p2", texto: "O MITO ou narrativa fornece memórias e personagens; o RITO transforma essas referências em ações compartilhadas.", chaves: ["mito","rito"] },
      { id: "p3", texto: "O SÍMBOLO torna visível, audível ou sensível um significado ligado à narrativa durante o rito.", chaves: ["símbolo","significado"] },
      { id: "p4", texto: "RELACIONAR é explicar como os três elementos produzem sentido juntos, com base no significado atribuído pela comunidade.", chaves: ["relacionar","juntos"] },
    ], falaFinal: "Agora aplique o roteiro sem confundir tradições.",
  },
  cena11_avaliacao: {
    tipo: "seloAtlas", aurora: "Avaliação final.", instrucao: "Responda com base nas relações estudadas",
    perguntas: [
      { id: "a1", pergunta: "Em uma celebração, o símbolo se relaciona ao mito e ao rito quando:", opcoes:[{id:"a",texto:"Torna presente um significado da narrativa durante a ação ritual",correta:true},{id:"b",texto:"É usado apenas como decoração",correta:false},{id:"c",texto:"Substitui todas as narrativas",correta:false},{id:"d",texto:"Tem o mesmo sentido em qualquer cultura",correta:false}], feedbackAcerto:"Isso: o símbolo evoca um significado no contexto do rito.", feedbackErro:"A relação depende da narrativa, da ação e do contexto." },
      { id: "a2", pergunta: "Para analisar uma celebração de modo respeitoso, devemos:", opcoes:[{id:"a",texto:"Generalizar uma prática para todas as pessoas",correta:false},{id:"b",texto:"Usar o contexto e os significados da própria comunidade",correta:true},{id:"c",texto:"Escolher qual tradição é superior",correta:false},{id:"d",texto:"Participar obrigatoriamente do rito",correta:false}], feedbackAcerto:"Correto: contexto e significado comunitário.", feedbackErro:"Evite generalizações e julgamentos." },
      { id: "a3", pergunta: "Qual frase apresenta uma relação completa?", opcoes:[{id:"a",texto:"Mito é narrativa",correta:false},{id:"b",texto:"Rito é ação",correta:false},{id:"c",texto:"O rito relembra a narrativa e usa símbolos que comunicam seus significados",correta:true},{id:"d",texto:"Símbolo é objeto",correta:false}], feedbackAcerto:"Perfeito: a frase conecta os três elementos.", feedbackErro:"A habilidade exige conexão, não definições separadas." },
    ], selo:{nome:"Analista das Celebrações",subtitulo:"Habilidade EF06ER07",emoji:"🔗",cor:"from-indigo-400 to-purple-600"}, falaFinal:"Você concluiu o 6º ano relacionando mito, rito e símbolo com respeito.",
  },
  recompensa: { xp: 450, moedas: 320, medalha: "Analista das Celebrações" },
};
