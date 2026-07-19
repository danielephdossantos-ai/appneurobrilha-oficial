import type { AulaGeoV1 } from "../../types";
import { url as eticaComum } from "@/assets/ensino-religioso-7ano/u1-etica-comum.jpg.asset.json";
import { url as regraOuro } from "@/assets/ensino-religioso-7ano/u1-regra-ouro.jpg.asset.json";
import { url as dialogo } from "@/assets/ensino-religioso-7ano/u7-dialogo-inter.jpg.asset.json";

/**
 * Ensino Religioso · 7º Ano · Unidade 1 · Aula 01
 * "A Regra de Ouro" — EF07ER01
 * NÃO CONFESSIONAL. Foco: princípios éticos comuns às tradições.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-principios-eticos",
  titulo: "A Regra de Ouro",
  iconeTrilha: "⚖️",
  bncc: ["EF07ER01"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: povos diferentes, mesma frase.",
    mapaUrl: eticaComum,
    imagemDestaqueUrl: regraOuro,
    aurora:
      "Investigador, olha o que a gente descobriu. Jesus disse 'faça aos outros o que quer que façam a você'. Confúcio, na China, 500 anos ANTES: 'não faça aos outros o que não quer pra si'. O rabino Hillel, no judaísmo: 'o resto é comentário'. O Alcorão: 'ninguém é fiel de verdade se não quer pro irmão o que quer pra si'.",
    falaFinal:
      "Quatro tradições. Séculos e continentes de distância. UMA mesma ideia. Isso tem nome: REGRA DE OURO. E hoje a gente investiga o porquê.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite antes de começar: por que tantas religiões chegaram, sozinhas, na MESMA regra?",
    pergunta: "Por que a mesma ideia em toda parte?",
    opcoes: [
      { id: "copiaram", titulo: "Uma COPIOU da outra", subtitulo: "só circulou pelo mundo", emoji: "📋", cor: "from-slate-400 to-gray-600" },
      { id: "convivencia", titulo: "Toda sociedade precisa disso", subtitulo: "sem ela, ninguém convive", emoji: "🤝", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "convivencia",
    feedbackAcerto: "Isso! É uma descoberta ÉTICA universal: sem essa regra, nenhum grupo humano sobrevive junto.",
    feedbackErro: "Cópia não explica: são séculos e culturas separadas. É que TODA sociedade precisa dessa regra pra funcionar.",
    falaFinal: "Regra de ouro = descoberta ética independente, em várias tradições.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "etica", capa: "1. Ética", emoji: "⚖️", cor: "from-amber-500 to-orange-700", conteudo: "ÉTICA é o estudo do que é certo e errado nas relações entre pessoas. Não depende de castigo — depende de perguntar 'o que faz bem pra todo mundo?'.", exemplo: "Ex.: devolver o troco a mais que a caixa te deu, mesmo que ela nunca fosse descobrir.", fotoUrl: eticaComum },
      { id: "principio", capa: "2. Princípio", emoji: "🧭", cor: "from-sky-500 to-blue-700", conteudo: "PRINCÍPIO é uma regra grande que orienta várias decisões pequenas. A regra de ouro é UM princípio, e dele derivam mil condutas do dia a dia.", exemplo: "Ex.: 'respeitar o outro' é princípio; 'não interromper quando alguém fala' é uma conduta que vem dele.", fotoUrl: regraOuro },
      { id: "universal", capa: "3. Universal", emoji: "🌍", cor: "from-purple-500 to-fuchsia-700", conteudo: "Um princípio é UNIVERSAL quando aparece em culturas muito diferentes, sem contato entre elas. Isso indica que resolve um problema comum a TODA humanidade.", exemplo: "Ex.: proibição de matar sem motivo aparece em quase todas as culturas humanas conhecidas.", fotoUrl: dialogo },
    ],
    falaFinal: "Ética, princípio, universal. Suas ferramentas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 versões da REGRA DE OURO em tradições diferentes. Toque em cada balão. Repare como mudam as palavras, mas a ideia é a MESMA.",
    instrucao: "Toque em cada balão",
    mapaUrl: eticaComum,
    pontos: [
      { id: "jesus", x: 22, y: 30, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristianismo — Jesus", texto: "'Tudo o que quereis que os homens vos façam, fazei-o também a eles' (Mateus 7:12). Formulação POSITIVA: faça o bem primeiro.", fotoUrl: regraOuro },
      { id: "confucio", x: 70, y: 30, emoji: "🀄", cor: "from-red-500 to-rose-700", titulo: "Confucionismo — Confúcio (China, séc. VI a.C.)", texto: "'Aquilo que não desejas para ti, não faças aos outros.' Formulação NEGATIVA: pelo menos NÃO faça mal. Cinco séculos antes de Jesus.", fotoUrl: eticaComum },
      { id: "hillel", x: 30, y: 72, emoji: "🕎", cor: "from-amber-500 to-orange-700", titulo: "Judaísmo — Rabino Hillel", texto: "'Não faça ao próximo o que odeias que te façam. Esta é toda a Torá. O resto é comentário — vá e estude.'", fotoUrl: regraOuro },
      { id: "muhammad", x: 76, y: 68, emoji: "☪️", cor: "from-emerald-500 to-green-700", titulo: "Islamismo — Profeta Muhammad", texto: "'Nenhum de vós é crente verdadeiro até desejar para o irmão o que deseja para si mesmo' (Hadith).", fotoUrl: dialogo },
    ],
    falaFinal: "Quatro povos. Quatro séculos. Uma regra. Isso é o que 'universal' significa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "A REGRA DE OURO aparece em muitas tradições porque:", fotoUrl: eticaComum, cards: [
        { id: "copia", emoji: "📋", titulo: "Todas copiaram uma da outra", cor: "from-slate-400 to-gray-600" },
        { id: "universal", emoji: "🌍", titulo: "Toda convivência humana precisa dela", cor: "from-emerald-500 to-green-700" },
        { id: "moda", emoji: "📱", titulo: "Virou moda recente", cor: "from-red-500 to-rose-700" },
      ], correta: "universal", feedbackAcerto: "Isso! É universal porque resolve um problema que TODA sociedade humana tem.", feedbackErro: "Não é cópia nem moda. É universal porque é ESSENCIAL pra qualquer grupo humano viver junto." },
      { id: "q2", pergunta: "ÉTICA é diferente de MEDO DE CASTIGO porque:", fotoUrl: regraOuro, cards: [
        { id: "medo", emoji: "😨", titulo: "Ética é medo de polícia", cor: "from-slate-400 to-gray-600" },
        { id: "reflexao", emoji: "🧭", titulo: "Ética nasce da reflexão sobre o bem comum", cor: "from-sky-500 to-blue-700" },
        { id: "lei", emoji: "⚖️", titulo: "Ética é só cumprir lei", cor: "from-amber-500 to-orange-700" },
      ], correta: "reflexao", feedbackAcerto: "Perfeito! Ética não depende de castigo — depende de escolher fazer o bem por convicção.", feedbackErro: "Ética não é medo. É reflexão livre sobre o que faz bem pra todo mundo." },
      { id: "q3", pergunta: "Confúcio ensinou a regra de ouro:", fotoUrl: dialogo, cards: [
        { id: "depois", emoji: "🆕", titulo: "Depois de Jesus", cor: "from-slate-400 to-gray-600" },
        { id: "antes", emoji: "🕰️", titulo: "Cinco séculos ANTES de Jesus", cor: "from-red-500 to-rose-700" },
        { id: "junto", emoji: "🤝", titulo: "No mesmo ano", cor: "from-sky-500 to-blue-700" },
      ], correta: "antes", feedbackAcerto: "Isso! Confúcio viveu no séc. VI a.C. — a mesma ideia chegou nele bem antes.", feedbackErro: "Confúcio veio ANTES: séc. VI a.C., cerca de 500 anos antes de Jesus." },
    ],
    falaFinal: "Radar ético afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, princípios éticos comuns aparecem em várias tradições convivendo. Acenda 5 estados de rica diversidade religiosa.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "BA", "MG", "PE"], pergunta: "5 estados onde católicos, evangélicos, umbandistas, candomblé e outras tradições convivem com a mesma ética básica?" },
    falaFinal: "SP, RJ, BA, MG, PE. Mesma regra ética, muitas tradições, uma sociedade.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um princípio ético vira REGRA numa sociedade?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Do problema à regra:",
    paradas: [
      { id: "problema", emoji: "⚡", rotulo: "1. PROBLEMA aparece", descricao: "Um conflito se repete: alguém sempre magoa alguém sem motivo." },
      { id: "reflexao", emoji: "🤔", rotulo: "2. REFLEXÃO coletiva", descricao: "A comunidade percebe que isso destrói a convivência." },
      { id: "principio", emoji: "🧭", rotulo: "3. PRINCÍPIO formulado", descricao: "Alguém formula: 'não faça aos outros o que não quer pra si'." },
      { id: "tradicao", emoji: "📚", rotulo: "4. TRADIÇÃO adota", descricao: "A frase entra em textos sagrados, ensino e educação familiar." },
      { id: "universal", emoji: "🌍", rotulo: "5. UNIVERSAL confirma", descricao: "Outras culturas, sem contato, chegam à mesma regra — sinal de que é essencial." },
    ],
    ordemCerta: ["problema", "reflexao", "principio", "tradicao", "universal"],
    feedbackAcerto: "Perfeito! Problema → reflexão → princípio → tradição → universal.",
    feedbackErro: "A ordem: PROBLEMA aparece, REFLEXÃO coletiva, PRINCÍPIO formulado, TRADIÇÃO adota, UNIVERSAL confirma.",
    falaFinal: "5 passos. É assim que a ética nasce.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 1 — A Regra de Ouro",
    paragrafos: [
      { id: "p1", texto: "ÉTICA é a reflexão sobre o que é certo e errado nas relações humanas. Diferente do MEDO do castigo, a ética nasce de escolher fazer o bem por convicção.", chaves: ["ética", "convicção"] },
      { id: "p2", texto: "A REGRA DE OURO é o princípio mais universal da ética humana: 'trate os outros como quer ser tratado'. Aparece em quase todas as grandes tradições religiosas do mundo.", chaves: ["regra de ouro", "universal"] },
      { id: "p3", texto: "Confúcio (China, séc. VI a.C.), o rabino Hillel (Judaísmo), Jesus (Cristianismo) e o Profeta Muhammad (Islamismo) formularam a MESMA regra, em séculos e continentes diferentes — sem contato entre si.", chaves: ["mesma regra", "sem contato"] },
      { id: "p4", texto: "Isso NÃO é cópia: é uma descoberta ética independente. Sinal de que essa regra é essencial pra qualquer grupo humano CONVIVER em paz.", chaves: ["descoberta", "conviver"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo ORIGEM DA REGRA! Cada frase é uma versão da regra de ouro. Qual tradição a formulou?",
    instrucao: "⏱️ Qual tradição disse essa frase?",
    duracaoSegundos: 12,
    pecas: [
      { id: "crista", emoji: "✝️", rotulo: "Cristã (Jesus)" },
      { id: "confuciana", emoji: "🀄", rotulo: "Confucionista (Confúcio)" },
      { id: "judaica", emoji: "🕎", rotulo: "Judaica (Hillel)" },
      { id: "islamica", emoji: "☪️", rotulo: "Islâmica (Muhammad)" },
      { id: "budista", emoji: "☸️", rotulo: "Budista (Buda)" },
      { id: "hindu", emoji: "🕉️", rotulo: "Hindu (Mahabharata)" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Mateus 7:12", emoji: "📖", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Formulação positiva", emoji: "✝️", cor: "from-indigo-400 to-blue-700" }, contexto: "Faça aos outros o que quer que façam a você.", pecaCertaId: "crista", feedbackAcerto: "Isso! Jesus, no Sermão da Montanha.", feedbackErro: "É a versão CRISTÃ, de Jesus." },
      { id: "r2", municipioA: { nome: "Séc. VI a.C.", emoji: "🀄", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "China antiga", emoji: "🐉", cor: "from-orange-400 to-red-600" }, contexto: "Não faça aos outros o que não quer pra si — 500 anos antes de Jesus.", pecaCertaId: "confuciana", feedbackAcerto: "Perfeito! Confúcio.", feedbackErro: "É CONFÚCIO — China, séc. VI a.C." },
      { id: "r3", municipioA: { nome: "Rabino", emoji: "🕎", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "'O resto é comentário'", emoji: "📜", cor: "from-yellow-400 to-amber-600" }, contexto: "Resumiu toda a Torá na regra de ouro negativa.", pecaCertaId: "judaica", feedbackAcerto: "Isso! Hillel, tradição judaica.", feedbackErro: "É o rabino HILLEL — tradição judaica." },
      { id: "r4", municipioA: { nome: "Hadith", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "'Desejar pro irmão'", emoji: "🤲", cor: "from-teal-400 to-emerald-600" }, contexto: "Ninguém é fiel se não quer pro irmão o que quer pra si.", pecaCertaId: "islamica", feedbackAcerto: "Perfeito! Islamismo.", feedbackErro: "É ISLÂMICA — palavra do Profeta Muhammad." },
      { id: "r5", municipioA: { nome: "Buda", emoji: "☸️", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Udanavarga 5:18", emoji: "🧘", cor: "from-orange-400 to-amber-600" }, contexto: "Não faças aos outros o que consideras ofensivo pra ti.", pecaCertaId: "budista", feedbackAcerto: "Isso! Tradição budista.", feedbackErro: "É BUDISTA — palavra atribuída ao Buda." },
      { id: "r6", municipioA: { nome: "Mahabharata", emoji: "🕉️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Épico indiano", emoji: "📜", cor: "from-amber-400 to-orange-600" }, contexto: "Este é o resumo do dever: não faça aos outros o que te causaria dor.", pecaCertaId: "hindu", feedbackAcerto: "Boa! Tradição hindu, do Mahabharata.", feedbackErro: "É HINDU — do épico Mahabharata." },
    ],
    falaFinal: "6 tradições, uma regra. Você virou Investigador da Regra de Ouro.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: as duas grandes formas da regra de ouro no mundo.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "positiva", rotulo: "POSITIVA — faça o bem (~40%)", emoji: "✅", percentual: 40, cor: "#10b981", descricao: "Cristianismo, hinduísmo: FAÇA aos outros o que quer que façam a você. Manda agir primeiro.", exemplos: ["✝️ Jesus", "🕉️ Mahabharata"] },
      { id: "negativa", rotulo: "NEGATIVA — não faça mal (~60%)", emoji: "🚫", percentual: 60, cor: "#f59e0b", descricao: "Confucionismo, judaísmo, islamismo, budismo: NÃO FAÇA aos outros o que não quer pra si. Pede o mínimo: pelo menos não magoar.", exemplos: ["🀄 Confúcio", "🕎 Hillel", "☪️ Muhammad", "☸️ Buda"] },
    ],
    falaFinal: "Duas formulações. Mesmo coração ético.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia INVESTIGADOR DA REGRA DE OURO.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A REGRA DE OURO é chamada de UNIVERSAL porque:", opcoes: [
        { id: "a", texto: "Uma tradição copiou da outra", correta: false },
        { id: "b", texto: "Aparece em culturas separadas — é essencial pra convivência humana", correta: true },
        { id: "c", texto: "Foi criada pela ONU", correta: false },
      ], feedbackAcerto: "Isso! Universal = culturas distintas chegaram sozinhas à mesma regra.", feedbackErro: "Universal significa que várias culturas chegaram nela sem se copiarem — porque é essencial pra convivência." },
      { id: "av2", pergunta: "ÉTICA é diferente de LEI porque:", opcoes: [
        { id: "a", texto: "Ética é medo de castigo", correta: false },
        { id: "b", texto: "Ética nasce de reflexão sobre o bem comum, não de castigo", correta: true },
        { id: "c", texto: "Ética não existe no dia a dia", correta: false },
      ], feedbackAcerto: "Perfeito! Ética é reflexão livre; lei é norma com castigo.", feedbackErro: "Ética não depende de polícia. É escolher o bem por convicção." },
      { id: "av3", pergunta: "Se uma tradição diferente da sua ensina a regra de ouro, o correto é:", opcoes: [
        { id: "a", texto: "Ignorar porque não é a minha", correta: false },
        { id: "b", texto: "Reconhecer que compartilhamos um princípio ético essencial", correta: true },
        { id: "c", texto: "Discutir qual é a melhor versão", correta: false },
      ], feedbackAcerto: "Isso! Compartilhar princípios éticos APROXIMA as tradições, sem apagar as diferenças.", feedbackErro: "O correto é RECONHECER o princípio comum. Isso ajuda a conviver, sem apagar as diferenças." },
    ],
    selo: { nome: "Investigador da Regra de Ouro", subtitulo: "Insígnia da Ética Universal", emoji: "⚖️", cor: "from-amber-400 to-orange-600" },
    falaFinal: "Insígnia conquistada! Você entende o princípio ético mais universal da humanidade.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Investigador da Regra de Ouro" },
};
