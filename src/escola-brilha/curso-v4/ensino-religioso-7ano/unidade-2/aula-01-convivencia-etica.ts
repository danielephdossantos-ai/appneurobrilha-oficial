import type { AulaGeoV1 } from "../../types";
import { url as ritos } from "@/assets/ensino-religioso-7ano/u5-ritos-coletivos.jpg.asset.json";
import { url as valores } from "@/assets/ensino-religioso-7ano/u6-valores-eticos.jpg.asset.json";
import { url as etica } from "@/assets/ensino-religioso-7ano/u1-etica-comum.jpg.asset.json";

/**
 * Ensino Religioso · 7º Ano · Unidade 2 · Aula 01
 * "Convivência e Ética" — EF07ER02
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-convivencia-etica",
  titulo: "Convivência e Ética",
  iconeTrilha: "🤝",
  bncc: ["EF07ER02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: pessoas MUITO diferentes, comendo juntas.",
    mapaUrl: ritos,
    imagemDestaqueUrl: ritos,
    aurora:
      "Investigador, essa cena é real. Um refeitório coletivo onde católicos, muçulmanos, judeus e budistas comem lado a lado. Cabelo coberto, kipá, hábito laranja, roupa comum — ninguém precisou virar igual pra sentar na mesma mesa. Só precisou concordar em UMA coisa: cuidar do outro.",
    falaFinal:
      "Hoje a gente investiga os VALORES ÉTICOS que fazem essa cena existir: compaixão, justiça, cuidado, verdade. Os pilares que TODA convivência precisa.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: pra várias tradições conviverem, o que é MAIS importante?",
    pergunta: "O que sustenta a convivência?",
    opcoes: [
      { id: "iguais", titulo: "Todos ficarem IGUAIS", subtitulo: "mesma crença, mesma prática", emoji: "👥", cor: "from-slate-400 to-gray-600" },
      { id: "valores", titulo: "Compartilhar VALORES básicos", subtitulo: "respeitar diferenças específicas", emoji: "⚖️", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "valores",
    feedbackAcerto: "Isso! Ninguém precisa virar igual — precisa compartilhar valores éticos básicos: respeito, honestidade, cuidado.",
    feedbackErro: "Ficar igual apaga as tradições. O que funciona é compartilhar VALORES BÁSICOS, mantendo cada um sua identidade.",
    falaFinal: "Convivência = valores comuns + respeito às diferenças.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "compaixao", capa: "1. Compaixão", emoji: "❤️", cor: "from-rose-500 to-red-700", conteudo: "COMPAIXÃO é sentir a dor do outro como se fosse sua e agir pra aliviá-la. Não é pena; é AÇÃO. Aparece com nomes diferentes em todas as grandes tradições.", exemplo: "Ex.: budistas chamam de 'karuna'; cristãos, de 'caridade'; muçulmanos, de 'rahma'.", fotoUrl: etica },
      { id: "justica", capa: "2. Justiça", emoji: "⚖️", cor: "from-amber-500 to-orange-700", conteudo: "JUSTIÇA é dar a cada um o que é devido — não menos por ser fraco, não mais por ser forte. Toda tradição religiosa condena roubo, exploração e violência sem motivo.", exemplo: "Ex.: os profetas de Israel defendiam a viúva e o órfão; o Alcorão manda dar zakat aos pobres.", fotoUrl: valores },
      { id: "verdade", capa: "3. Verdade", emoji: "🔦", cor: "from-sky-500 to-blue-700", conteudo: "VERDADE é falar o que se acredita ser real, mesmo quando é inconveniente. Mentir corrói a confiança, e sem confiança nenhum grupo humano funciona.", exemplo: "Ex.: 'satya' (verdade) é um dos cinco princípios centrais do hinduísmo; o Alcorão condena falso testemunho.", fotoUrl: etica },
    ],
    falaFinal: "Compaixão, justiça, verdade. Três pilares.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 tradições, 4 formas de dizer 'cuide do próximo'. Toque em cada balão.",
    instrucao: "Toque em cada balão",
    mapaUrl: valores,
    pontos: [
      { id: "crista", x: 22, y: 30, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristianismo — CARIDADE", texto: "'Amar o próximo como a si mesmo' é o segundo maior mandamento, segundo Jesus. Igrejas cristãs mantêm hospitais, escolas e obras de caridade em quase todo país.", fotoUrl: etica },
      { id: "islam", x: 70, y: 30, emoji: "☪️", cor: "from-emerald-500 to-green-700", titulo: "Islamismo — ZAKAT", texto: "'Zakat' é a doação obrigatória de 2,5% da renda pros pobres. Um dos cinco pilares do islã. Não é opcional — é dever religioso.", fotoUrl: ritos },
      { id: "budismo", x: 30, y: 72, emoji: "☸️", cor: "from-amber-500 to-orange-700", titulo: "Budismo — KARUNA", texto: "'Karuna' (compaixão) é uma das quatro atitudes centrais. O objetivo do caminho budista é aliviar o sofrimento de TODOS os seres, não só o próprio.", fotoUrl: valores },
      { id: "afro", x: 76, y: 68, emoji: "🥁", cor: "from-red-500 to-rose-700", titulo: "Tradições afro-brasileiras — AXÉ", texto: "No candomblé e na umbanda, 'axé' é energia vital que só cresce quando circula: você cuida do outro, e a força volta pra comunidade. Cuidar é sagrado.", fotoUrl: ritos },
    ],
    falaFinal: "Caridade, zakat, karuna, axé. Palavras diferentes. Mesmo princípio: cuidar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "COMPAIXÃO é diferente de PENA porque:", fotoUrl: etica, cards: [
        { id: "acao", emoji: "🤲", titulo: "Compaixão é AÇÃO pra aliviar a dor", cor: "from-emerald-500 to-green-700" },
        { id: "distancia", emoji: "😔", titulo: "Compaixão só sente à distância", cor: "from-slate-400 to-gray-600" },
        { id: "igual", emoji: "🟰", titulo: "São a mesma coisa", cor: "from-red-500 to-rose-700" },
      ], correta: "acao", feedbackAcerto: "Isso! Compaixão AGE; pena só observa.", feedbackErro: "Compaixão é ação: sente a dor E faz algo pra aliviar." },
      { id: "q2", pergunta: "ZAKAT, no islamismo, é:", fotoUrl: ritos, cards: [
        { id: "opcional", emoji: "🎁", titulo: "Doação opcional", cor: "from-slate-400 to-gray-600" },
        { id: "obrigatoria", emoji: "⚖️", titulo: "Doação obrigatória de 2,5% da renda", cor: "from-emerald-500 to-green-700" },
        { id: "festa", emoji: "🎉", titulo: "Uma festa", cor: "from-amber-500 to-orange-700" },
      ], correta: "obrigatoria", feedbackAcerto: "Perfeito! É um dos cinco pilares — não é caridade opcional.", feedbackErro: "Zakat NÃO é opcional. É doação obrigatória de 2,5% da renda — pilar do islã." },
      { id: "q3", pergunta: "AXÉ, nas tradições afro-brasileiras, cresce quando:", fotoUrl: valores, cards: [
        { id: "guardar", emoji: "🔒", titulo: "É guardado só pra si", cor: "from-slate-400 to-gray-600" },
        { id: "circular", emoji: "🔄", titulo: "Circula entre as pessoas — cuidar do outro fortalece", cor: "from-red-500 to-rose-700" },
        { id: "comprar", emoji: "💰", titulo: "É comprado no mercado", cor: "from-amber-500 to-orange-700" },
      ], correta: "circular", feedbackAcerto: "Isso! Axé cresce circulando. Cuidar do outro fortalece a comunidade inteira.", feedbackErro: "Axé só cresce CIRCULANDO. Guardar sozinho enfraquece. Cuidar = fortalecer todo mundo." },
    ],
    falaFinal: "Radar do cuidado afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda 5 estados onde igrejas, mesquitas, terreiros e centros budistas trabalham juntos em ações sociais.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "BA", "MG", "RS"], pergunta: "5 estados com forte tradição de ações sociais inter-religiosas?" },
    falaFinal: "SP, RJ, BA, MG, RS. Onde ética compartilhada vira ação concreta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como a COMPAIXÃO vira ação concreta na sociedade?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Da sensação à mudança:",
    paradas: [
      { id: "ver", emoji: "👁️", rotulo: "1. VER a dor do outro", descricao: "Perceber que alguém está sofrendo — fome, solidão, injustiça." },
      { id: "sentir", emoji: "❤️", rotulo: "2. SENTIR como sua", descricao: "Não passar reto. Deixar aquela dor te tocar." },
      { id: "decidir", emoji: "🧭", rotulo: "3. DECIDIR agir", descricao: "Escolher que aquela situação NÃO pode continuar assim." },
      { id: "agir", emoji: "🤲", rotulo: "4. AGIR concretamente", descricao: "Fazer algo real: doar, escutar, denunciar, acompanhar." },
      { id: "mudar", emoji: "🌱", rotulo: "5. MUDAR estruturas", descricao: "Trabalhar pra que outras pessoas não passem pela mesma dor." },
    ],
    ordemCerta: ["ver", "sentir", "decidir", "agir", "mudar"],
    feedbackAcerto: "Perfeito! Ver → sentir → decidir → agir → mudar. É esse ciclo que muda o mundo.",
    feedbackErro: "A ordem: VER, SENTIR, DECIDIR, AGIR, MUDAR estruturas.",
    falaFinal: "5 passos da compaixão em ação.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 2 — Convivência e Ética",
    paragrafos: [
      { id: "p1", texto: "CONVIVÊNCIA entre tradições diferentes só funciona quando existe um mínimo de valores éticos compartilhados: respeito, honestidade, cuidado com o próximo, condenação da violência sem motivo.", chaves: ["convivência", "valores compartilhados"] },
      { id: "p2", texto: "COMPAIXÃO — 'karuna' pros budistas, 'caridade' pros cristãos, 'rahma' pros muçulmanos — é sentir a dor do outro E AGIR pra aliviá-la. Aparece em todas as grandes tradições.", chaves: ["compaixão", "agir"] },
      { id: "p3", texto: "JUSTIÇA é dar a cada um o que é devido, sem favorecer o forte nem oprimir o fraco. Os profetas do judaísmo, o zakat islâmico e a caridade cristã são expressões desse princípio.", chaves: ["justiça", "devido"] },
      { id: "p4", texto: "VERDADE — 'satya' no hinduísmo — sustenta a confiança social. Sem verdade, nenhum grupo humano se organiza por muito tempo. Mentir sistematicamente destrói qualquer convivência.", chaves: ["verdade", "confiança"] },
    ],
    falaFinal: "Bora pro minijogo dos valores.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo NOMES DO CUIDADO! Cada tradição chama a compaixão de um jeito. Acerte o nome.",
    instrucao: "⏱️ Qual tradição usa esse nome?",
    duracaoSegundos: 12,
    pecas: [
      { id: "crista", emoji: "✝️", rotulo: "Cristã" },
      { id: "islamica", emoji: "☪️", rotulo: "Islâmica" },
      { id: "budista", emoji: "☸️", rotulo: "Budista" },
      { id: "hindu", emoji: "🕉️", rotulo: "Hindu" },
      { id: "afro", emoji: "🥁", rotulo: "Afro-brasileira" },
      { id: "judaica", emoji: "🕎", rotulo: "Judaica" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Caridade", emoji: "❤️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "'Amar o próximo'", emoji: "✝️", cor: "from-indigo-400 to-blue-700" }, contexto: "Amar o próximo como a si mesmo.", pecaCertaId: "crista", feedbackAcerto: "Isso! Caridade cristã.", feedbackErro: "É CRISTÃ — 'caridade', segundo mandamento." },
      { id: "r2", municipioA: { nome: "Zakat 2,5%", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Pilar obrigatório", emoji: "🤲", cor: "from-teal-400 to-emerald-600" }, contexto: "Doação obrigatória da renda pros pobres.", pecaCertaId: "islamica", feedbackAcerto: "Perfeito! Zakat islâmico.", feedbackErro: "É ISLÂMICA — 'zakat', um dos cinco pilares." },
      { id: "r3", municipioA: { nome: "Karuna", emoji: "☸️", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Aliviar sofrimento", emoji: "🧘", cor: "from-orange-400 to-amber-600" }, contexto: "Compaixão por todos os seres.", pecaCertaId: "budista", feedbackAcerto: "Isso! Karuna budista.", feedbackErro: "É BUDISTA — 'karuna', compaixão por todos os seres." },
      { id: "r4", municipioA: { nome: "Ahimsa", emoji: "🕉️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Não violência", emoji: "🕊️", cor: "from-amber-400 to-orange-600" }, contexto: "Não fazer mal a nenhum ser vivo.", pecaCertaId: "hindu", feedbackAcerto: "Perfeito! Ahimsa hindu.", feedbackErro: "É HINDU — 'ahimsa', princípio da não-violência." },
      { id: "r5", municipioA: { nome: "Axé circulante", emoji: "🥁", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Energia partilhada", emoji: "🔄", cor: "from-orange-400 to-red-600" }, contexto: "Energia vital que só cresce sendo compartilhada.", pecaCertaId: "afro", feedbackAcerto: "Isso! Axé afro-brasileiro.", feedbackErro: "É AFRO-BRASILEIRA — 'axé', energia que cresce circulando." },
      { id: "r6", municipioA: { nome: "Tzedaká", emoji: "🕎", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Justiça-caridade", emoji: "⚖️", cor: "from-yellow-400 to-amber-600" }, contexto: "Dever de dar aos necessitados — não é favor, é justiça.", pecaCertaId: "judaica", feedbackAcerto: "Boa! Tzedaká judaica.", feedbackErro: "É JUDAICA — 'tzedaká', dever de justiça-caridade." },
    ],
    falaFinal: "6 nomes do cuidado. Mesma raiz.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: os grandes valores éticos compartilhados pelas tradições.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "cuidado", rotulo: "CUIDADO com o outro (~60%)", emoji: "❤️", percentual: 60, cor: "#ef4444", descricao: "Compaixão, caridade, karuna, zakat, axé, tzedaká — cuidar de quem precisa é o valor mais universal.", exemplos: ["🤲 Doar", "🏥 Curar", "👂 Escutar"] },
      { id: "verdade-justica", rotulo: "VERDADE e JUSTIÇA (~40%)", emoji: "⚖️", percentual: 40, cor: "#f59e0b", descricao: "Não mentir, não roubar, defender os fracos, dar a cada um o que é devido — sustentam a confiança social.", exemplos: ["🔦 Verdade", "⚖️ Justiça"] },
    ],
    falaFinal: "Dois grandes pilares. Convivência inteira.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A convivência entre religiões diferentes funciona quando:", opcoes: [
        { id: "a", texto: "Todos se tornam iguais", correta: false },
        { id: "b", texto: "Compartilham valores éticos básicos e respeitam as diferenças", correta: true },
        { id: "c", texto: "Uma prova que é a certa", correta: false },
      ], feedbackAcerto: "Isso! Valores comuns + respeito às diferenças.", feedbackErro: "Não é virar igual, nem provar quem é 'a certa'. É compartilhar valores éticos básicos." },
      { id: "av2", pergunta: "ZAKAT (islamismo) é:", opcoes: [
        { id: "a", texto: "Uma festa", correta: false },
        { id: "b", texto: "Doação obrigatória de 2,5% da renda aos pobres", correta: true },
        { id: "c", texto: "Um livro", correta: false },
      ], feedbackAcerto: "Perfeito! Um dos cinco pilares do islã.", feedbackErro: "Zakat é DOAÇÃO OBRIGATÓRIA de 2,5% da renda, um pilar do islã." },
      { id: "av3", pergunta: "COMPAIXÃO se difere de pena porque:", opcoes: [
        { id: "a", texto: "É só sentir de longe", correta: false },
        { id: "b", texto: "Sente a dor E AGE pra aliviar", correta: true },
        { id: "c", texto: "É a mesma coisa", correta: false },
      ], feedbackAcerto: "Isso! Compaixão age; pena só observa.", feedbackErro: "Compaixão AGE — não é só sentir de longe." },
    ],
    selo: { nome: "Investigador da Convivência", subtitulo: "Insígnia da Ética Compartilhada", emoji: "🤝", cor: "from-emerald-400 to-green-600" },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Investigador da Convivência" },
};
