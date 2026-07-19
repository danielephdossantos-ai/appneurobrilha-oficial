import type { AulaGeoV1 } from "../../types";
import { url as projeto } from "@/assets/ensino-religioso-9ano/u6-projetos-vida.jpg.asset.json";
import { url as sentido } from "@/assets/ensino-religioso-9ano/u5-sentido-vida.jpg.asset.json";
import { url as sociedade } from "@/assets/ensino-religioso-9ano/u7-sociedade-justa.jpg.asset.json";

/**
 * Ensino Religioso · 9º Ano · Unidade 6 · Aula 01
 * "Projeto de Vida" — EF09ER06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-projeto-vida",
  titulo: "Projeto de Vida",
  iconeTrilha: "🎯",
  bncc: ["EF09ER06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe esses jovens planejando.",
    mapaUrl: projeto,
    imagemDestaqueUrl: sentido,
    aurora:
      "Curador, esses jovens têm a sua idade. Estão fazendo o que você vai fazer nos próximos anos: desenhar um PROJETO DE VIDA. E aqui vem o pulo do gato: suas CONVICÇÕES (religiosas ou seculares) NÃO ficam separadas do projeto. Elas moldam profundamente as escolhas — carreira, casamento, filhos, engajamento, causas que abraçar.",
    falaFinal: "Convicções moldam projeto. Projeto molda a vida real.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: fé e escolha de carreira estão relacionadas?",
    pergunta: "Suas crenças influenciam o que você vai fazer da vida?",
    opcoes: [
      { id: "sim", titulo: "SIM, fortemente", subtitulo: "convicções moldam prioridades e escolhas", emoji: "🎯", cor: "from-emerald-400 to-green-600" },
      { id: "nao", titulo: "NÃO, são áreas separadas", subtitulo: "fé em casa, carreira no trabalho", emoji: "🚪", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "sim",
    feedbackAcerto: "Isso! Convicções moldam PROFUNDAMENTE o projeto de vida — mesmo quando a pessoa nem percebe.",
    feedbackErro: "Convicções moldam SIM, e forte: prioridades, causas, tipo de relação, filhos, dinheiro, engajamento — tudo passa por elas.",
    falaFinal: "Não dá pra separar. Convicções moldam projeto.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "projeto", capa: "1. Projeto de Vida", emoji: "🎯", cor: "from-orange-500 to-red-700", conteudo: "PROJETO DE VIDA é o CONJUNTO INTENCIONAL de escolhas de médio e longo prazo: carreira, relações, engajamento, valores, causas. Não é sonho vago — é planejamento com direção.", exemplo: "Ex.: 'quero fazer medicina no SUS, casar, ter 2 filhos, engajar-me na Pastoral da Saúde e viver no interior'.", fotoUrl: projeto },
      { id: "prioridade", capa: "2. Prioridade", emoji: "🥇", cor: "from-amber-500 to-orange-700", conteudo: "PRIORIDADE é o que você coloca ACIMA quando tudo compete. É onde você gasta seu tempo, dinheiro e energia REAIS — não o que você diz em palavras.", exemplo: "Ex.: se você diz que família é prioridade mas gasta 12h no trabalho, sua prioridade REAL é o trabalho.", fotoUrl: sentido },
      { id: "engajamento", capa: "3. Engajamento", emoji: "✊", cor: "from-emerald-500 to-green-700", conteudo: "ENGAJAMENTO é comprometer-se ATIVAMENTE com uma causa — movimento social, ONG, comunidade religiosa, política, ambiental. Fé + convicção viram AÇÃO organizada.", exemplo: "Ex.: militar em coletivo antirracista, ser voluntário em ONG, participar de pastoral, filiar-se a partido.", fotoUrl: sociedade },
    ],
    falaFinal: "Projeto + prioridade + engajamento = arquitetura da vida.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 áreas onde convicções influenciam decisões.",
    instrucao: "Toque em cada balão",
    mapaUrl: projeto,
    pontos: [
      { id: "carreira", x: 20, y: 25, emoji: "💼", cor: "from-sky-500 to-blue-700", titulo: "CARREIRA", texto: "Quem vive por 'servir' escolhe profissões de cuidado (saúde, educação, social). Quem vive por 'acumular' escolhe outras. Convicção guia.", fotoUrl: projeto },
      { id: "relacao", x: 70, y: 25, emoji: "❤️", cor: "from-rose-500 to-pink-700", titulo: "RELAÇÕES / FAMÍLIA", texto: "Casar/não casar, ter filhos/não ter, orientação afetiva, relação com pais e irmãos — tudo passa por convicções sobre vida, corpo, amor.", fotoUrl: sentido },
      { id: "dinheiro", x: 20, y: 55, emoji: "💰", cor: "from-amber-500 to-orange-700", titulo: "DINHEIRO", texto: "Doar 10%? Investir em bolsa? Comprar casa cara? Viver simples? Cada convicção sobre o mundo material orienta escolhas diferentes.", fotoUrl: projeto },
      { id: "causa", x: 70, y: 55, emoji: "✊", cor: "from-emerald-500 to-green-700", titulo: "CAUSAS / ENGAJAMENTO", texto: "Quais causas abraçar (antirracismo, ambiente, LGBTQIA+, aborto, animais)? Convicções religiosas e seculares moldam cada posição.", fotoUrl: sociedade },
      { id: "tempo", x: 50, y: 82, emoji: "⏰", cor: "from-purple-500 to-fuchsia-700", titulo: "USO DO TEMPO", texto: "Fim de semana pra igreja/terreiro/família/estudo/festa? O uso do tempo real MOSTRA quais convicções são de verdade prioridade.", fotoUrl: sentido },
    ],
    falaFinal: "5 áreas onde a fé encontra a vida real.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "PROJETO DE VIDA se distingue de sonho vago porque:", fotoUrl: projeto, cards: [
        { id: "int", emoji: "🎯", titulo: "É planejamento intencional, com direção", cor: "from-emerald-500 to-green-700" },
        { id: "faz", emoji: "🍀", titulo: "Depende só de sorte", cor: "from-slate-400 to-gray-600" },
        { id: "cop", emoji: "📋", titulo: "É copiar o dos outros", cor: "from-red-500 to-rose-700" },
      ], correta: "int", feedbackAcerto: "Isso! Planejamento intencional — direção clara mesmo com ajustes.", feedbackErro: "É PLANEJAMENTO INTENCIONAL com direção — não sonho vago." },
      { id: "q2", pergunta: "PRIORIDADE real de uma pessoa se descobre em:", fotoUrl: sentido, cards: [
        { id: "acao", emoji: "⏰", titulo: "Como ela usa tempo, dinheiro e energia", cor: "from-amber-500 to-orange-700" },
        { id: "pal", emoji: "💬", titulo: "O que ela diz em palavras", cor: "from-slate-400 to-gray-600" },
        { id: "sonho", emoji: "💭", titulo: "Nos sonhos que ela conta", cor: "from-red-500 to-rose-700" },
      ], correta: "acao", feedbackAcerto: "Perfeito! Prioridade real está no que a pessoa FAZ, não no que fala.", feedbackErro: "Prioridade REAL se descobre na AÇÃO — tempo, dinheiro, energia que a pessoa gasta." },
      { id: "q3", pergunta: "Convicções religiosas influenciam projeto de vida:", fotoUrl: sociedade, cards: [
        { id: "sim", emoji: "🎯", titulo: "Sim, em todas as áreas — carreira, relações, causas, uso do tempo", cor: "from-emerald-500 to-green-700" },
        { id: "so-igreja", emoji: "⛪", titulo: "Só na hora do culto", cor: "from-slate-400 to-gray-600" },
        { id: "nada", emoji: "❌", titulo: "Não influenciam em nada", cor: "from-red-500 to-rose-700" },
      ], correta: "sim", feedbackAcerto: "Isso! Convicções moldam tudo — mesmo quando a pessoa nem percebe.", feedbackErro: "Convicções moldam TUDO — carreira, relações, dinheiro, causas, uso do tempo." },
    ],
    falaFinal: "Projeto de vida entendido.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, jovens de todas as tradições planejam vida. Acenda 5 estados com forte investimento em juventude (escolas técnicas, universidades, movimentos).",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "MG", "CE", "PE", "SC"], pergunta: "5 estados com muitas escolas técnicas, IF/universidades e ONGs de juventude?" },
    falaFinal: "SP, MG, CE, PE, SC — IFs, universidades federais, redes de juventude religiosa e secular. Onde o projeto começa.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como desenhar um projeto de vida (método 5 passos)?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Do vazio ao rascunho concreto:",
    paradas: [
      { id: "valores", emoji: "💎", rotulo: "1. VALORES / CONVICÇÕES", descricao: "Liste o que você mais valoriza — família, justiça, liberdade, fé, criação, saúde, aventura." },
      { id: "sonhos", emoji: "🌈", rotulo: "2. SONHOS grandes", descricao: "Sonhe grande sem editar: 'onde quero estar aos 30? Aos 40? Aos 60?'." },
      { id: "cortes", emoji: "✂️", rotulo: "3. CORTES realistas", descricao: "Confronte sonhos com valores: quais sonhos batem com seus valores? Corte os que não." },
      { id: "metas", emoji: "🎯", rotulo: "4. METAS de curto prazo", descricao: "Traduza em metas concretas de 1-2 anos: estudar X, praticar Y, entrar em Z." },
      { id: "revisao", emoji: "🔄", rotulo: "5. REVISÃO periódica", descricao: "Reveja o projeto a cada 6 meses: mudou? Está no rumo? Precisa ajustar? Projeto vivo, não pedra." },
    ],
    ordemCerta: ["valores", "sonhos", "cortes", "metas", "revisao"],
    feedbackAcerto: "Perfeito! Valores → sonhos → cortes → metas → revisão.",
    feedbackErro: "A ordem: VALORES, SONHOS grandes, CORTES realistas, METAS curto prazo, REVISÃO periódica.",
    falaFinal: "5 passos. Método pra vida inteira.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Curador",
    subtitulo: "Página 6 — Projeto de vida",
    paragrafos: [
      { id: "p1", texto: "PROJETO DE VIDA é o CONJUNTO INTENCIONAL de escolhas de médio e longo prazo. É diferente de sonho vago: tem direção, tem prioridades, tem metas concretas.", chaves: ["intencional", "direção"] },
      { id: "p2", texto: "Suas CONVICÇÕES (religiosas ou seculares) moldam profundamente esse projeto — em CARREIRA, RELAÇÕES, DINHEIRO, CAUSAS e USO DO TEMPO. Mesmo quem 'não é religioso' tem convicções que orientam.", chaves: ["convicções", "cinco áreas"] },
      { id: "p3", texto: "PRIORIDADE REAL não é o que a pessoa DIZ, é o que ela FAZ com tempo, dinheiro e energia. Se você diz que família é prioridade mas gasta 12h fora, prioridade real é outra coisa.", chaves: ["prioridade real", "faz"] },
      { id: "p4", texto: "Método simples pra desenhar: 1) VALORES 2) SONHOS grandes 3) CORTES realistas 4) METAS curtas 5) REVISÃO periódica. Projeto é vivo — revisa a cada 6 meses e ajusta com honestidade.", chaves: ["método", "vivo"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CONVICÇÃO → CARREIRA! Cada valor central sugere áreas de atuação. Qual convicção guia essa escolha?",
    instrucao: "⏱️ Qual convicção guia essa escolha profissional?",
    duracaoSegundos: 12,
    pecas: [
      { id: "cuidar", emoji: "❤️", rotulo: "'Cuidar do próximo'" },
      { id: "justica", emoji: "⚖️", rotulo: "'Fazer justiça'" },
      { id: "criar", emoji: "🎨", rotulo: "'Criar beleza'" },
      { id: "conhecer", emoji: "🔬", rotulo: "'Conhecer a verdade'" },
      { id: "ensinar", emoji: "🌱", rotulo: "'Formar pessoas'" },
      { id: "defender", emoji: "🌍", rotulo: "'Defender a Terra'" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Medicina", emoji: "🩺", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Enfermagem", emoji: "💊", cor: "from-pink-400 to-red-600" }, contexto: "Jovem escolhe medicina no SUS: 'quero atender quem mais precisa'.", pecaCertaId: "cuidar", feedbackAcerto: "Isso! Convicção de cuidar guia essa escolha.", feedbackErro: "É CUIDAR do próximo — convicção clássica das profissões de saúde." },
      { id: "r2", municipioA: { nome: "Direito", emoji: "⚖️", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Defensoria", emoji: "🏛️", cor: "from-indigo-400 to-purple-600" }, contexto: "Jovem escolhe Direito com foco em Defensoria Pública: 'quem não pode pagar merece defesa'.", pecaCertaId: "justica", feedbackAcerto: "Perfeito! Fazer justiça guia essa escolha.", feedbackErro: "É FAZER JUSTIÇA — Defensoria é vocação clara de justiça social." },
      { id: "r3", municipioA: { nome: "Arte", emoji: "🎨", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Design", emoji: "🖌️", cor: "from-yellow-400 to-orange-600" }, contexto: "Jovem escolhe Design gráfico: 'quero fazer o mundo mais bonito e comunicativo'.", pecaCertaId: "criar", feedbackAcerto: "Isso! Criar beleza guia essa escolha.", feedbackErro: "É CRIAR BELEZA — convicção estética guia carreiras criativas." },
      { id: "r4", municipioA: { nome: "Pesquisa", emoji: "🔬", cor: "from-cyan-400 to-blue-600" }, municipioB: { nome: "Astronomia", emoji: "🔭", cor: "from-blue-400 to-indigo-600" }, contexto: "Jovem escolhe Física teórica: 'quero entender como o universo funciona'.", pecaCertaId: "conhecer", feedbackAcerto: "Perfeito! Conhecer a verdade guia essa escolha.", feedbackErro: "É CONHECER A VERDADE — vocação científica clássica." },
      { id: "r5", municipioA: { nome: "Escola", emoji: "🏫", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Pedagogia", emoji: "📚", cor: "from-green-400 to-emerald-600" }, contexto: "Jovem escolhe Pedagogia: 'quero formar cidadãos críticos e felizes'.", pecaCertaId: "ensinar", feedbackAcerto: "Isso! Formar pessoas guia essa escolha.", feedbackErro: "É FORMAR PESSOAS — vocação central de todo educador." },
      { id: "r6", municipioA: { nome: "Biologia", emoji: "🌳", cor: "from-lime-400 to-emerald-600" }, municipioB: { nome: "Bioma", emoji: "🐘", cor: "from-emerald-400 to-green-600" }, contexto: "Jovem escolhe Ciências Ambientais: 'a Terra precisa de defensores agora'.", pecaCertaId: "defender", feedbackAcerto: "Boa! Defender a Terra guia essa escolha.", feedbackErro: "É DEFENDER A TERRA — convicção ecológica moldando carreira." },
    ],
    falaFinal: "6 convicções, 6 carreiras. Qual guia você?",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: o que MAIS pesa no projeto de vida dos jovens brasileiros (pesquisas com adolescentes).",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "familia", rotulo: "FAMÍLIA / RELAÇÕES (~40%)", emoji: "👨‍👩‍👧", percentual: 40, cor: "#ef4444", descricao: "Prioridade nº 1 dos jovens brasileiros: construir família, cuidar dos pais, ter filhos ou relações estáveis.", exemplos: ["❤️ Casar/união", "👶 Ter filhos", "🏠 Cuidar da família"] },
      { id: "trabalho", rotulo: "TRABALHO / CARREIRA (~35%)", emoji: "💼", percentual: 35, cor: "#0ea5e9", descricao: "Estabilidade financeira, profissão que faça sentido, empreender, crescer profissionalmente.", exemplos: ["🎓 Faculdade", "💼 Emprego bom", "🚀 Empreender"] },
      { id: "causa", rotulo: "CAUSAS / FÉ (~25%)", emoji: "✊", percentual: 25, cor: "#10b981", descricao: "Engajamento em causa social, religiosa, ambiental, política. Deixar marca no mundo além de si.", exemplos: ["🙏 Vida religiosa", "🌍 Militância", "🎨 Arte engajada"] },
    ],
    falaFinal: "3 pilares. Um projeto forte equilibra os três.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia ARQUITETO DA VIDA.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "PROJETO DE VIDA é:", opcoes: [
        { id: "a", texto: "Sonho vago sem direção", correta: false },
        { id: "b", texto: "Planejamento intencional das escolhas de médio/longo prazo", correta: true },
        { id: "c", texto: "Pedra imóvel que não pode mudar", correta: false },
      ], feedbackAcerto: "Isso! Planejamento intencional — vivo, revisável.", feedbackErro: "É PLANEJAMENTO INTENCIONAL de médio/longo prazo — direcionado mas revisável." },
      { id: "av2", pergunta: "PRIORIDADE REAL da pessoa mostra-se:", opcoes: [
        { id: "a", texto: "No que ela diz em palavras", correta: false },
        { id: "b", texto: "No que ela FAZ com tempo, dinheiro e energia", correta: true },
        { id: "c", texto: "Nos sonhos que ela conta", correta: false },
      ], feedbackAcerto: "Perfeito! Prioridade real está na ação.", feedbackErro: "Prioridade REAL se vê no que a pessoa FAZ — não no que fala." },
      { id: "av3", pergunta: "Convicções (religiosas ou seculares) influenciam projeto de vida:", opcoes: [
        { id: "a", texto: "Não — são áreas separadas", correta: false },
        { id: "b", texto: "Sim — em carreira, relações, dinheiro, causas e uso do tempo", correta: true },
        { id: "c", texto: "Só quem é religioso é influenciado", correta: false },
      ], feedbackAcerto: "Isso! Convicções moldam TODAS as áreas.", feedbackErro: "Convicções moldam TODAS as áreas — carreira, relações, dinheiro, causas, tempo." },
    ],
    selo: { nome: "Arquiteto da Vida", subtitulo: "Insígnia do Projeto Intencional", emoji: "🎯", cor: "from-orange-400 to-red-600" },
    falaFinal: "Insígnia conquistada! Sua vida pede desenho consciente.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Arquiteto da Vida" },
};
