import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-7ano/dinamica-demografica.jpg";

/**
 * Geografia · 7º Ano · Unidade 2 · Aula 01
 * Dinâmica Demográfica do Brasil
 * BNCC: EF07GE03, EF07GE04, EF07GE05
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-dinamica-demografica",
  titulo: "Dinâmica Demográfica",
  iconeTrilha: "👥",
  bncc: ["EF07GE03", "EF07GE04", "EF07GE05"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "215 milhões de brasileiros. Onde eles estão?",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora:
      "Explorador, o Brasil tem 8,5 milhões de km² e 215 milhões de habitantes. Se dividisse tudo por igual, dariam 25 pessoas por km². Mas NÃO é assim: SP tem mais de 170 hab/km² e a Amazônia tem menos de 5. A distribuição é MUITO desigual.",
    falaFinal: "Bora entender por que o povo brasileiro vive concentrado no litoral e no Sudeste.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Hoje o Brasil cresce cada vez MENOS. Por quê?",
    pergunta: "Por que a taxa de natalidade caiu tanto?",
    opcoes: [
      { id: "guerra", titulo: "Por causa de guerras e doenças", subtitulo: "aumento da mortalidade", emoji: "⚔️", cor: "from-red-400 to-rose-600" },
      { id: "urban", titulo: "URBANIZAÇÃO + mulher no mercado", subtitulo: "menos filhos por família", emoji: "🏙️", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "urban",
    feedbackAcerto: "Isso! Mulher trabalhando, contracepção, custo alto de criar filho na cidade = menos filhos.",
    feedbackErro: "Não. O que caiu foi a NATALIDADE (número de filhos), não subiu a mortalidade.",
    falaFinal: "Brasil está envelhecendo — a pirâmide etária está mudando de forma.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da demografia brasileira.",
    instrucao: "Leia cada caderno",
    cadernos: [
      { id: "densidade", capa: "1. Densidade Demográfica", emoji: "📊", cor: "from-sky-500 to-blue-700", conteudo: "DENSIDADE DEMOGRÁFICA: número de habitantes por km². Brasil médio = 25 hab/km². SP capital = 7.400 hab/km². Amazonas = 2,7 hab/km².", exemplo: "Ex.: Bangladesh tem 1.200 hab/km² — MUITO denso." },
      { id: "piramide", capa: "2. Pirâmide Etária", emoji: "📐", cor: "from-emerald-500 to-teal-700", conteudo: "PIRÂMIDE ETÁRIA: gráfico que mostra a população por idade e sexo. Base larga = país jovem. Topo largo = país envelhecendo.", exemplo: "Ex.: Brasil de 1970 = base larga. Hoje = pirâmide 'gorda no meio'." },
      { id: "idh", capa: "3. IDH", emoji: "📈", cor: "from-amber-500 to-orange-700", conteudo: "ÍNDICE DE DESENVOLVIMENTO HUMANO: mede renda + educação + saúde (0 a 1). Brasil = 0,754 (alto, mas desigual).", exemplo: "Ex.: DF tem IDH 0,85. Alagoas tem 0,68." },
      { id: "migracao", capa: "4. Migração Interna", emoji: "🚚", cor: "from-red-500 to-rose-700", conteudo: "MIGRAÇÃO INTERNA: deslocamento dentro do próprio país. No Brasil, o clássico é NORDESTE → SUDESTE atrás de emprego.", exemplo: "Ex.: milhões de nordestinos foram pra SP nos anos 60-80." },
    ],
    falaFinal: "Densidade, pirâmide, IDH, migração. Toolkit do demógrafo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 fatos que explicam onde os brasileiros vivem.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      { id: "litoral", x: 75, y: 50, emoji: "🌊", cor: "from-sky-500 to-blue-700", titulo: "80% mora até 200 km do litoral", texto: "Herança colonial: a colonização começou no litoral e nunca se distribuiu por igual." },
      { id: "sudeste", x: 55, y: 60, emoji: "🏙️", cor: "from-red-500 to-rose-700", titulo: "Sudeste = 42% da população", texto: "SP, RJ, MG e ES concentram quase metade dos brasileiros em 10% do território." },
      { id: "amazonia", x: 30, y: 30, emoji: "🌳", cor: "from-emerald-500 to-teal-700", titulo: "Amazônia = quase vazia", texto: "45% do território, mas só 8% da população. Baixa densidade demográfica." },
      { id: "urbana", x: 50, y: 45, emoji: "🌆", cor: "from-amber-500 to-orange-700", titulo: "87% mora em CIDADES", texto: "Brasil é altamente urbanizado — só 13% ainda vive no campo." },
      { id: "envelhece", x: 60, y: 75, emoji: "👵", cor: "from-purple-500 to-fuchsia-700", titulo: "População está envelhecendo", texto: "Em 2050, teremos MAIS idosos que crianças. Pirâmide invertendo." },
    ],
    falaFinal: "5 fatos, uma foto do Brasil demográfico.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de demógrafo.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1", pergunta: "A região MAIS populosa do Brasil é:",
        cards: [
          { id: "a", emoji: "🏙️", titulo: "Sudeste", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌳", titulo: "Norte", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🌾", titulo: "Centro-Oeste", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Sudeste = 42% da população brasileira.", feedbackErro: "Sudeste concentra 42% dos brasileiros. Norte tem só 8%.",
      },
      {
        id: "q2", pergunta: "A migração clássica no Brasil foi:",
        cards: [
          { id: "a", emoji: "➡️", titulo: "Nordeste → Sudeste", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "⬅️", titulo: "Sudeste → Nordeste", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "⬆️", titulo: "Sul → Norte", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Nordestinos foram pro Sudeste atrás de emprego na indústria.", feedbackErro: "Foi Nordeste → Sudeste. Fuga da seca e do desemprego rural.",
      },
      {
        id: "q3", pergunta: "A pirâmide etária brasileira está:",
        cards: [
          { id: "a", emoji: "📐", titulo: "Envelhecendo", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "👶", titulo: "Rejuvenescendo", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "⏸️", titulo: "Parada", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Boa! Menos filhos + mais idosos = envelhecimento.", feedbackErro: "Está ENVELHECENDO: base estreita, topo largo.",
      },
    ],
    falaFinal: "Radar demográfico ok.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda os 4 estados MAIS populosos do Brasil.",
    instrucao: "Marque os estados com mais habitantes",
    missao: { tipo: "selecionar", siglas: ["SP", "MG", "RJ", "BA"], pergunta: "Quais são os 4 estados mais populosos?" },
    falaFinal: "SP (46mi), MG (21mi), RJ (17mi), BA (14mi). Juntos = 45% do Brasil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as fases da transição demográfica brasileira.",
    instrucao: "Arraste na ordem cronológica",
    pergunta: "Da alta natalidade ao envelhecimento:",
    paradas: [
      { id: "e1", emoji: "👨‍👩‍👧‍👦", rotulo: "1. Muitos filhos (1900)", descricao: "Média de 6 filhos por mulher. Mortalidade infantil alta. País rural." },
      { id: "e2", emoji: "🏥", rotulo: "2. Cai a mortalidade (1950)", descricao: "Vacinas, saneamento e antibióticos. População explode." },
      { id: "e3", emoji: "🏙️", rotulo: "3. Urbanização (1970)", descricao: "Êxodo rural. Nordestinos migram pro Sudeste. Cidades crescem." },
      { id: "e4", emoji: "💊", rotulo: "4. Cai a natalidade (1990)", descricao: "Pílula, mulher no mercado, custo de vida urbano. Menos filhos." },
      { id: "e5", emoji: "👵", rotulo: "5. Envelhecimento (2020+)", descricao: "Média de 1,6 filho por mulher. Idosos crescem mais que crianças." },
    ],
    ordemCerta: ["e1", "e2", "e3", "e4", "e5"],
    feedbackAcerto: "Perfeito! É a TRANSIÇÃO DEMOGRÁFICA — todos os países passam.",
    feedbackErro: "Começa por 'muitos filhos' e termina em 'envelhecimento'.",
    falaFinal: "Em 120 anos: de 6 filhos por mulher pra 1,6. Brasil mudou completo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual do Demógrafo",
    subtitulo: "Capítulo 2 — 215 milhões de brasileiros",
    paragrafos: [
      { id: "p1", texto: "O Brasil tem 215 MILHÕES de habitantes. 87% vivem em CIDADES e 80% até 200 km do LITORAL.", chaves: ["215 milhões", "cidades", "litoral"] },
      { id: "p2", texto: "O SUDESTE concentra 42% da população em apenas 10% do território. A AMAZÔNIA tem 45% do território e só 8% dos brasileiros.", chaves: ["sudeste", "amazônia", "42%", "8%"] },
      { id: "p3", texto: "A migração clássica foi NORDESTE → SUDESTE. Hoje, muitos nordestinos VOLTAM porque o Nordeste cresce.", chaves: ["nordeste", "sudeste", "migração"] },
      { id: "p4", texto: "A NATALIDADE caiu de 6 pra 1,6 filho por mulher. O Brasil está ENVELHECENDO — em 2050 haverá mais idosos que crianças.", chaves: ["natalidade", "envelhecendo", "idosos"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo DEMÓGRAFO EXPRESS! Qual conceito explica cada situação?",
    instrucao: "⏱️ Escolha o conceito certo",
    duracaoSegundos: 15,
    pecas: [
      { id: "dens", emoji: "📊", rotulo: "Densidade Demográfica" },
      { id: "pir", emoji: "📐", rotulo: "Pirâmide Etária" },
      { id: "idh", emoji: "📈", rotulo: "IDH" },
      { id: "mig", emoji: "🚚", rotulo: "Migração Interna" },
      { id: "urb", emoji: "🏙️", rotulo: "Urbanização" },
      { id: "env", emoji: "👵", rotulo: "Envelhecimento" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "7.400 hab/km²", emoji: "🏙️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "SP capital", emoji: "🌆", cor: "from-orange-400 to-red-600" }, contexto: "Muitos habitantes em pouco espaço. Que conceito é esse?", pecaCertaId: "dens", feedbackAcerto: "Isso! DENSIDADE DEMOGRÁFICA — hab por km².", feedbackErro: "Hab/km² = DENSIDADE DEMOGRÁFICA." },
      { id: "r2", municipioA: { nome: "Base estreita", emoji: "📐", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Topo largo", emoji: "👴", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Gráfico de idades mostrando envelhecimento:", pecaCertaId: "pir", feedbackAcerto: "Boa! PIRÂMIDE ETÁRIA.", feedbackErro: "É a PIRÂMIDE ETÁRIA — gráfico de idades." },
      { id: "r3", municipioA: { nome: "Renda + saúde", emoji: "💰", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "+ educação (0 a 1)", emoji: "📚", cor: "from-teal-400 to-cyan-600" }, contexto: "Indicador que mede desenvolvimento humano:", pecaCertaId: "idh", feedbackAcerto: "Isso! IDH — Índice de Desenvolvimento Humano.", feedbackErro: "Renda+educação+saúde = IDH." },
      { id: "r4", municipioA: { nome: "Nordeste → SP", emoji: "🚚", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Anos 1960-80", emoji: "📅", cor: "from-red-400 to-rose-600" }, contexto: "Deslocamento dentro do próprio país atrás de emprego:", pecaCertaId: "mig", feedbackAcerto: "Boa! MIGRAÇÃO INTERNA.", feedbackErro: "Deslocamento no mesmo país = MIGRAÇÃO INTERNA." },
      { id: "r5", municipioA: { nome: "87% nas cidades", emoji: "🏙️", cor: "from-sky-400 to-indigo-600" }, municipioB: { nome: "13% no campo", emoji: "🌾", cor: "from-emerald-400 to-teal-600" }, contexto: "Processo que fez o Brasil deixar de ser rural:", pecaCertaId: "urb", feedbackAcerto: "Isso! URBANIZAÇÃO.", feedbackErro: "Campo → cidade = URBANIZAÇÃO." },
      { id: "r6", municipioA: { nome: "Menos filhos", emoji: "👶", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Mais idosos", emoji: "👵", cor: "from-orange-400 to-red-600" }, contexto: "Fenômeno demográfico atual do Brasil:", pecaCertaId: "env", feedbackAcerto: "Isso! ENVELHECIMENTO POPULACIONAL.", feedbackErro: "Menos filhos + mais idosos = ENVELHECIMENTO." },
    ],
    falaFinal: "6 rodadas, 6 conceitos. Demógrafo aprovado!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da POPULAÇÃO brasileira por região.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "sudeste", rotulo: "Sudeste", emoji: "🏙️", percentual: 42, cor: "#dc2626", descricao: "42% dos brasileiros em 10% do território. SP + RJ + MG + ES.", exemplos: ["🏙️ São Paulo (46mi)", "🌊 Rio de Janeiro (17mi)", "⛰️ Minas Gerais (21mi)"] },
      { id: "nordeste", rotulo: "Nordeste", emoji: "☀️", percentual: 27, cor: "#f59e0b", descricao: "27% da população. 9 estados. Segunda região mais populosa.", exemplos: ["🌴 Bahia (14mi)", "🎭 Pernambuco (9mi)", "🌊 Ceará (9mi)"] },
      { id: "sul", rotulo: "Sul", emoji: "🌲", percentual: 14, cor: "#059669", descricao: "14% da população em 3 estados. Alto IDH e forte urbanização.", exemplos: ["🏛️ Paraná (11mi)", "🍇 Rio Grande do Sul (10mi)", "🏖️ Santa Catarina (7mi)"] },
      { id: "norte", rotulo: "Norte", emoji: "🌳", percentual: 9, cor: "#0d9488", descricao: "45% do território, mas só 9% da população. Baixa densidade.", exemplos: ["🌊 Pará (8mi)", "🌳 Amazonas (4mi)", "🌿 Rondônia (1,8mi)"] },
      { id: "co", rotulo: "Centro-Oeste", emoji: "🌾", percentual: 8, cor: "#7c3aed", descricao: "8% da população. Cresce por causa do agronegócio e de Brasília.", exemplos: ["🏛️ DF (3mi)", "🌾 Goiás (7mi)", "🐄 Mato Grosso (3,7mi)"] },
    ],
    falaFinal: "5 regiões, distribuição desigual. Sudeste concentra, Norte é vazio.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Cartógrafo Populacional.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A região MAIS populosa do Brasil é:", opcoes: [{ id: "a", texto: "Sudeste", correta: true }, { id: "b", texto: "Norte", correta: false }, { id: "c", texto: "Centro-Oeste", correta: false }], feedbackAcerto: "Isso! 42% da população.", feedbackErro: "É o SUDESTE — 42% dos brasileiros." },
      { id: "av2", pergunta: "A migração interna clássica no Brasil foi:", opcoes: [{ id: "a", texto: "Sul → Norte", correta: false }, { id: "b", texto: "Nordeste → Sudeste", correta: true }, { id: "c", texto: "Sudeste → Nordeste", correta: false }], feedbackAcerto: "Perfeito! Fuga da seca e busca de emprego.", feedbackErro: "É NORDESTE → SUDESTE." },
      { id: "av3", pergunta: "A pirâmide etária brasileira atual mostra:", opcoes: [{ id: "a", texto: "País envelhecendo", correta: true }, { id: "b", texto: "País muito jovem", correta: false }, { id: "c", texto: "Explosão de bebês", correta: false }], feedbackAcerto: "Isso! Menos filhos + mais idosos.", feedbackErro: "Está ENVELHECENDO — natalidade caiu de 6 pra 1,6." },
    ],
    selo: { nome: "Cartógrafo Populacional", subtitulo: "Insígnia do Demógrafo", emoji: "👥", cor: "from-sky-400 to-blue-600" },
    falaFinal: "Insígnia conquistada! Você entende quem é o povo brasileiro.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cartógrafo Populacional" },
};
