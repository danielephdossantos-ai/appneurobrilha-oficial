import type { AulaGeoV1 } from "../../types";
import { url as sociedade } from "@/assets/ensino-religioso-9ano/u7-sociedade-justa.jpg.asset.json";
import { url as justica } from "@/assets/ensino-religioso-9ano/u4-justica-solidariedade.jpg.asset.json";
import { url as projeto } from "@/assets/ensino-religioso-9ano/u6-projetos-vida.jpg.asset.json";

/**
 * Ensino Religioso · 9º Ano · Unidade 7 · Aula 01 — FINALE
 * "Sociedades Justas" — EF09ER07
 * Encerra o Ensino Religioso do Fundamental.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-sociedades-justas",
  titulo: "Sociedades Justas",
  iconeTrilha: "🌐",
  bncc: ["EF09ER07"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe o círculo plural.",
    mapaUrl: sociedade,
    imagemDestaqueUrl: justica,
    aurora:
      "Curador, você chegou ao FINALE. Olhe essa cena: cristã, muçulmana, judia, umbandista, ateu, hindu, budista — TODOS de mãos dadas. Isso não é utopia — é o Brasil real quando funciona. A pergunta final do Ensino Religioso é: os princípios éticos que você aprendeu em 5 anos podem CONSTRUIR sociedades mais justas juntos? A resposta é SIM — e depende de você.",
    falaFinal: "Sociedades justas se constroem. E dependem de vocês.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: uma sociedade justa é feita por UM grupo religioso OU por TODOS juntos?",
    pergunta: "Quem constrói sociedade justa?",
    opcoes: [
      { id: "um", titulo: "UM grupo dominante", subtitulo: "só a religião certa constrói", emoji: "⛪", cor: "from-red-400 to-rose-600" },
      { id: "todos", titulo: "TODOS juntos", subtitulo: "religiosos + seculares + laicos", emoji: "🌐", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "todos",
    feedbackAcerto: "Isso! Sociedades justas são plurais por natureza. Ninguém constrói sozinho — precisa TODOS: religiosos de várias tradições + humanistas seculares + Estado laico.",
    feedbackErro: "Sociedades justas se fazem JUNTOS — cristãos, muçulmanos, afro, indígenas, judeus, ateus, humanistas. Diversidade é força, não fraqueza.",
    falaFinal: "Juntos. Sempre juntos.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave do finale.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "plural", capa: "1. Pluralidade", emoji: "🌈", cor: "from-purple-500 to-fuchsia-700", conteudo: "PLURALIDADE é a existência de MUITAS visões religiosas e seculares numa mesma sociedade — todas com direito a existir, se expressar e participar da vida pública.", exemplo: "Ex.: no Brasil, cristãos, evangélicos, espíritas, umbandistas, muçulmanos, judeus, indígenas, ateus vivem no mesmo bairro.", fotoUrl: sociedade },
      { id: "convergencia", capa: "2. Convergência ética", emoji: "🤝", cor: "from-emerald-500 to-green-700", conteudo: "CONVERGÊNCIA ÉTICA é quando tradições muito diferentes concordam nos princípios que sustentam a vida coletiva: dignidade, justiça, cuidado, respeito, não-violência.", exemplo: "Ex.: 'não matar', 'ajudar o pobre', 'respeitar o outro' aparecem em quase todas as tradições religiosas e no humanismo secular.", fotoUrl: justica },
      { id: "comum", capa: "3. Bem Comum", emoji: "🌍", cor: "from-sky-500 to-blue-700", conteudo: "BEM COMUM é aquilo que serve a TODOS na sociedade — saúde pública, educação, segurança, ambiente limpo, direitos. Vem antes de interesses de grupos específicos.", exemplo: "Ex.: SUS, escolas públicas, parques, saneamento — todos são bens comuns que sustentam a vida de todo mundo.", fotoUrl: projeto },
    ],
    falaFinal: "Pluralidade + convergência + bem comum = arquitetura de sociedade justa.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 princípios éticos convergentes que constroem sociedades justas.",
    instrucao: "Toque em cada balão",
    mapaUrl: sociedade,
    pontos: [
      { id: "dig", x: 20, y: 25, emoji: "💎", cor: "from-blue-500 to-indigo-700", titulo: "1. DIGNIDADE de toda pessoa", texto: "Todas as tradições e o humanismo secular afirmam: cada pessoa tem valor inviolável. Sociedade justa protege esse valor de todos, sem exceção.", fotoUrl: sociedade },
      { id: "just", x: 70, y: 25, emoji: "⚖️", cor: "from-amber-500 to-orange-700", titulo: "2. JUSTIÇA que corrige desigualdades", texto: "Tzedaká, zakat, direitos humanos: dar a cada um o que lhe é devido — inclusive corrigir injustiças históricas (racismo, machismo, LGBTfobia).", fotoUrl: justica },
      { id: "sol", x: 20, y: 55, emoji: "🤝", cor: "from-emerald-500 to-green-700", titulo: "3. SOLIDARIEDADE com o vulnerável", texto: "Ágape, karuna, ubuntu, humanismo: cuidar de quem sofre, defender quem não pode se defender.", fotoUrl: justica },
      { id: "resp", x: 70, y: 55, emoji: "🕊️", cor: "from-purple-500 to-fuchsia-700", titulo: "4. RESPEITO ao diferente", texto: "Estado laico + diálogo inter-religioso: convivência ativa com quem pensa e crê diferente — sem tentar dominar nem apagar.", fotoUrl: sociedade },
      { id: "cuid", x: 50, y: 82, emoji: "🌱", cor: "from-teal-500 to-emerald-700", titulo: "5. CUIDADO com a Terra", texto: "Tradições indígenas, franciscana, budista, humanismo ambiental: a Terra é casa comum — sem ela, não há sociedade nenhuma.", fotoUrl: projeto },
    ],
    falaFinal: "5 princípios que TODAS as tradições podem assinar juntas.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "PLURALIDADE numa sociedade é:", fotoUrl: sociedade, cards: [
        { id: "riq", emoji: "🌈", titulo: "Riqueza — muitas visões convivendo", cor: "from-emerald-500 to-green-700" },
        { id: "prob", emoji: "⚠️", titulo: "Problema a ser eliminado", cor: "from-slate-400 to-gray-600" },
        { id: "acc", emoji: "🎲", titulo: "Acidente sem importância", cor: "from-red-500 to-rose-700" },
      ], correta: "riq", feedbackAcerto: "Isso! Pluralidade é riqueza — quando bem cuidada, sociedades ficam mais fortes.", feedbackErro: "Pluralidade é RIQUEZA — muitas visões convivendo tornam a sociedade mais forte e criativa." },
      { id: "q2", pergunta: "CONVERGÊNCIA ÉTICA significa que:", fotoUrl: justica, cards: [
        { id: "iguais", emoji: "🤝", titulo: "Tradições diferentes concordam em princípios básicos", cor: "from-sky-500 to-blue-700" },
        { id: "id", emoji: "🟰", titulo: "Todas as religiões são iguais", cor: "from-slate-400 to-gray-600" },
        { id: "uma", emoji: "1️⃣", titulo: "Só uma tem razão", cor: "from-red-500 to-rose-700" },
      ], correta: "iguais", feedbackAcerto: "Perfeito! Convergem nos princípios sem serem iguais em tudo.", feedbackErro: "Convergem em princípios básicos (dignidade, justiça, cuidado) mesmo sendo diferentes." },
      { id: "q3", pergunta: "BEM COMUM é:", fotoUrl: projeto, cards: [
        { id: "todos", emoji: "🌍", titulo: "Aquilo que serve a todos — SUS, escola, ambiente", cor: "from-sky-500 to-blue-700" },
        { id: "grupo", emoji: "👥", titulo: "Interesse de um grupo religioso só", cor: "from-slate-400 to-gray-600" },
        { id: "part", emoji: "🏢", titulo: "Bem particular de uma empresa", cor: "from-red-500 to-rose-700" },
      ], correta: "todos", feedbackAcerto: "Isso! Bem comum serve a todos — vem antes de interesses de grupos.", feedbackErro: "É AQUILO QUE SERVE A TODOS — SUS, escolas, parques, saneamento. Vem antes de grupos." },
    ],
    falaFinal: "Vocabulário do finale dominado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Sociedades justas se constroem em TODO o Brasil. Acenda 5 estados-símbolo desse projeto plural (uma síntese das 26 UFs).",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["AM", "BA", "SP", "RS", "DF"], pergunta: "5 estados que representam a diversidade brasileira em ação (indígena/afro/imigrante/imigração/laico)?" },
    falaFinal: "AM (indígena), BA (afro), SP (imigrante), RS (europeia), DF (Estado laico). Brasil inteiro cabendo em 5.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma sociedade se torna MAIS JUSTA ao longo do tempo?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Do injusto ao mais justo:",
    paradas: [
      { id: "denuncia", emoji: "📢", rotulo: "1. DENÚNCIA das injustiças", descricao: "Vozes (religiosas, seculares, movimentos) DENUNCIAM: 'há fome, racismo, machismo, exclusão'." },
      { id: "consenso", emoji: "🤝", rotulo: "2. CONSENSO ético básico", descricao: "Diferentes tradições e visões concordam: 'isso é errado, precisa mudar'." },
      { id: "mobilizacao", emoji: "✊", rotulo: "3. MOBILIZAÇÃO coletiva", descricao: "Redes se formam — pastorais, ONGs, movimentos, partidos. Pressão organizada." },
      { id: "politica", emoji: "🏛️", rotulo: "4. POLÍTICA pública nasce", descricao: "Estado responde: leis, programas, direitos garantidos — SUS, cotas, LOAS, ECA." },
      { id: "vigilancia", emoji: "👁️", rotulo: "5. VIGILÂNCIA permanente", descricao: "Sociedade civil vigia: implementação, retrocessos, novos desafios. Justiça é conquista contínua." },
    ],
    ordemCerta: ["denuncia", "consenso", "mobilizacao", "politica", "vigilancia"],
    feedbackAcerto: "Perfeito! Denúncia → consenso → mobilização → política pública → vigilância.",
    feedbackErro: "A ordem: DENÚNCIA, CONSENSO ético, MOBILIZAÇÃO, POLÍTICA pública, VIGILÂNCIA permanente.",
    falaFinal: "5 passos. É assim que sociedade evolui.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Curador — FINALE",
    subtitulo: "Página 7 — Sociedades Justas",
    paragrafos: [
      { id: "p1", texto: "Você chegou ao FINAL de 5 anos de Ensino Religioso. Aprendeu sobre sagrado, símbolos, ritos, mitos, ética, dignidade, morte, sentido, projeto de vida. Agora, a pergunta final: pra QUÊ tudo isso serve?", chaves: ["final", "pra quê serve"] },
      { id: "p2", texto: "Serve pra CONSTRUIR SOCIEDADES JUSTAS. Sociedades onde toda pessoa tem DIGNIDADE respeitada, onde há JUSTIÇA que corrige desigualdades, onde há SOLIDARIEDADE com o vulnerável, RESPEITO ao diferente e CUIDADO com a Terra.", chaves: ["cinco princípios"] },
      { id: "p3", texto: "Ninguém constrói sozinho. Precisa PLURALIDADE (muitas tradições convivendo), CONVERGÊNCIA ÉTICA (concordar no básico) e foco no BEM COMUM (o que serve a todos vem antes do interesse de grupos).", chaves: ["pluralidade", "bem comum"] },
      { id: "p4", texto: "Você, com 14 anos, já pode começar: em casa, na escola, no bairro, no seu grupo religioso ou secular. Cada gesto conta. Cada decisão molda o Brasil que virá. Boa sorte, curador — o mundo espera vocês.", chaves: ["cada gesto", "boa sorte"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo final.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo FINAL 🌐 CONVERGÊNCIA! Cada situação injusta pede um princípio. Qual dos 5 pilares aplicar?",
    instrucao: "⏱️ Qual princípio ético resolve essa injustiça?",
    duracaoSegundos: 12,
    pecas: [
      { id: "dig", emoji: "💎", rotulo: "Dignidade" },
      { id: "just", emoji: "⚖️", rotulo: "Justiça" },
      { id: "sol", emoji: "🤝", rotulo: "Solidariedade" },
      { id: "resp", emoji: "🕊️", rotulo: "Respeito ao diferente" },
      { id: "cuid", emoji: "🌱", rotulo: "Cuidado com a Terra" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Rua", emoji: "🏚️", cor: "from-slate-400 to-gray-600" }, municipioB: { nome: "Morador de rua", emoji: "😔", cor: "from-gray-400 to-slate-600" }, contexto: "Pessoa em situação de rua é tratada como se fosse invisível pelos transeuntes.", pecaCertaId: "dig", feedbackAcerto: "Isso! Dignidade — ninguém deve ser invisibilizado.", feedbackErro: "É DIGNIDADE — toda pessoa merece ser reconhecida como humana." },
      { id: "r2", municipioA: { nome: "Universidade", emoji: "🎓", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Cotas raciais", emoji: "⚖️", cor: "from-indigo-400 to-purple-600" }, contexto: "Filhos de escola pública raramente entram em universidade pública sem cotas.", pecaCertaId: "just", feedbackAcerto: "Perfeito! Justiça que corrige desigualdade histórica.", feedbackErro: "É JUSTIÇA — cotas corrigem desigualdades históricas de acesso." },
      { id: "r3", municipioA: { nome: "Enchente", emoji: "🌊", cor: "from-blue-400 to-cyan-600" }, municipioB: { nome: "Vaquinha", emoji: "🤲", cor: "from-cyan-400 to-blue-600" }, contexto: "Bairro pobre fica alagado; comunidade se organiza pra ajudar as famílias atingidas.", pecaCertaId: "sol", feedbackAcerto: "Isso! Solidariedade com vulnerável.", feedbackErro: "É SOLIDARIEDADE — cuidar de quem sofre AGORA." },
      { id: "r4", municipioA: { nome: "Terreiro", emoji: "🥁", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Culto plural", emoji: "🕊️", cor: "from-orange-400 to-amber-600" }, contexto: "Grupo evangélico e terreiro de candomblé fazem culto conjunto pela paz do bairro.", pecaCertaId: "resp", feedbackAcerto: "Perfeito! Respeito ao diferente construindo unidade.", feedbackErro: "É RESPEITO AO DIFERENTE — diálogo inter-religioso concreto." },
      { id: "r5", municipioA: { nome: "Floresta", emoji: "🌳", cor: "from-lime-400 to-emerald-600" }, municipioB: { nome: "Terras indígenas", emoji: "🏹", cor: "from-emerald-400 to-green-600" }, contexto: "Povos indígenas defendem floresta contra desmatamento que ameaça o clima global.", pecaCertaId: "cuid", feedbackAcerto: "Isso! Cuidado com a Terra — casa comum de todos.", feedbackErro: "É CUIDADO COM A TERRA — floresta é bem comum de toda humanidade." },
      { id: "r6", municipioA: { nome: "LGBT+", emoji: "🏳️‍🌈", cor: "from-pink-400 to-fuchsia-600" }, municipioB: { nome: "Acolhimento", emoji: "🤝", cor: "from-fuchsia-400 to-purple-600" }, contexto: "Jovem LGBTQIA+ expulso de casa é acolhido por igreja que garante direitos de existir.", pecaCertaId: "dig", feedbackAcerto: "Boa! Dignidade — todo ser humano tem valor inviolável.", feedbackErro: "É DIGNIDADE — todo ser humano merece proteção da própria dignidade." },
    ],
    falaFinal: "6 situações, 5 princípios éticos. Você tem as ferramentas.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza síntese: as duas grandes forças que constroem sociedade justa juntas.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "religiosa", rotulo: "TRADIÇÕES RELIGIOSAS (~65%)", emoji: "🙏", percentual: 65, cor: "#f59e0b", descricao: "Cristãs, evangélicas, católicas, espíritas, afro-brasileiras, indígenas, judaicas, muçulmanas, budistas, hindus. Trazem tzedaká, ágape, zakat, karuna, ubuntu, dharma.", exemplos: ["✝️ Ágape", "☪️ Zakat", "🥁 Ubuntu"] },
      { id: "secular", rotulo: "VISÕES SECULARES (~35%)", emoji: "🌍", percentual: 35, cor: "#0ea5e9", descricao: "Humanismo, direitos humanos, Estado laico, filosofia crítica, movimentos sociais. Trazem dignidade universal, direitos, ciência, democracia.", exemplos: ["⚖️ Direitos Humanos", "🏛️ Estado laico", "🌱 Ambientalismo"] },
    ],
    falaFinal: "Duas forças. Uma sociedade justa. Nenhuma sobra.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas FINAIS do Ensino Religioso. Conquiste a insígnia máxima: CURADOR DA VIDA EM COMUM.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Sociedades justas se constroem:", opcoes: [
        { id: "a", texto: "Por um único grupo religioso dominante", correta: false },
        { id: "b", texto: "Por TODOS juntos — tradições religiosas plurais + humanismo secular + Estado laico", correta: true },
        { id: "c", texto: "Sozinhas, sem esforço", correta: false },
      ], feedbackAcerto: "Isso! Todos juntos — pluralidade e convergência.", feedbackErro: "Por TODOS JUNTOS — pluralidade religiosa + secular + Estado laico." },
      { id: "av2", pergunta: "CONVERGÊNCIA ÉTICA significa:", opcoes: [
        { id: "a", texto: "Todas as religiões são iguais", correta: false },
        { id: "b", texto: "Tradições diferentes concordam em princípios básicos (dignidade, justiça, cuidado)", correta: true },
        { id: "c", texto: "Só uma tradição tem razão", correta: false },
      ], feedbackAcerto: "Perfeito! Convergem no essencial sem ser idênticas.", feedbackErro: "Concordam no essencial (dignidade, justiça, cuidado) mesmo sendo diferentes." },
      { id: "av3", pergunta: "Os 5 princípios de sociedade justa são:", opcoes: [
        { id: "a", texto: "Riqueza, poder, fama, status, prazer", correta: false },
        { id: "b", texto: "Dignidade, justiça, solidariedade, respeito ao diferente, cuidado com a Terra", correta: true },
        { id: "c", texto: "Só um deles importa", correta: false },
      ], feedbackAcerto: "Isso! Os 5 pilares que TODAS as tradições podem assinar.", feedbackErro: "Os 5: DIGNIDADE, JUSTIÇA, SOLIDARIEDADE, RESPEITO ao diferente, CUIDADO com a Terra." },
    ],
    selo: { nome: "Curador da Vida em Comum", subtitulo: "Insígnia Máxima do Ensino Religioso", emoji: "🌐", cor: "from-cyan-400 to-blue-600" },
    falaFinal: "Insígnia MÁXIMA conquistada! Você fecha 5 anos de Ensino Religioso pronto pra construir um Brasil justo e plural. Vai, curador — o mundo espera vocês.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Curador da Vida em Comum" },
};
