import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-7ano/centro-sul.jpg";

/**
 * Geografia · 7º Ano · Unidade 4 · Aula 01
 * Complexo Regional do Centro-Sul
 * BNCC: EF07GE08, EF07GE09
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-centro-sul",
  titulo: "Complexo Centro-Sul",
  iconeTrilha: "🏙️",
  bncc: ["EF07GE08", "EF07GE09"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "3 regiões, 60% do território e 75% do PIB do Brasil.",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora:
      "Explorador, junte Sudeste + Sul + Centro-Oeste. Você tem o CENTRO-SUL — o motor econômico do Brasil. Aqui rodam as maiores fábricas, as maiores fazendas de soja, os principais portos e 65% da população. Se o Centro-Sul fosse um país, seria uma das 10 maiores economias do mundo.",
    falaFinal: "Bora entender por que essa 'região' concentra tudo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que o Centro-Sul concentra tanta riqueza?",
    pergunta: "O que puxou o Centro-Sul pra frente?",
    opcoes: [
      { id: "clima", titulo: "O CLIMA favorável", subtitulo: "só chove e faz sol na hora certa", emoji: "☀️", cor: "from-amber-400 to-orange-600" },
      { id: "hist", titulo: "HISTÓRIA + LOGÍSTICA", subtitulo: "café → indústria + portos + rodovias", emoji: "🚢", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "hist",
    feedbackAcerto: "Isso! O café gerou capital, virou indústria, os portos escoaram, as rodovias conectaram.",
    feedbackErro: "Clima ajuda, mas é HISTÓRIA + INFRAESTRUTURA que explicam a concentração.",
    falaFinal: "Uma vantagem histórica que virou permanente.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave do Centro-Sul.",
    instrucao: "Leia cada caderno",
    cadernos: [
      { id: "complexo", capa: "1. Complexo Regional", emoji: "🗺️", cor: "from-sky-500 to-indigo-700", conteudo: "COMPLEXO REGIONAL: divisão criada por Milton Santos com base em economia e sociedade (não em bioma). São 3: Centro-Sul, Nordeste e Amazônia.", exemplo: "Ex.: MT está no Centro-Oeste, mas faz parte do 'Complexo Centro-Sul' pela lógica econômica." },
      { id: "eixo", capa: "2. Eixo Rio–São Paulo", emoji: "🛣️", cor: "from-red-500 to-rose-700", conteudo: "EIXO RIO–SÃO PAULO: a 'espinha dorsal' econômica do Brasil, ligando as duas maiores metrópoles pela BR-116 (Via Dutra).", exemplo: "Ex.: 25% do PIB brasileiro está nesse eixo de 430 km." },
      { id: "agro", capa: "3. Agronegócio", emoji: "🌾", cor: "from-emerald-500 to-teal-700", conteudo: "AGRONEGÓCIO: agricultura empresarial + tecnologia + exportação. É a força do Centro-Oeste (soja, milho, boi).", exemplo: "Ex.: MT sozinho produz 30% da soja brasileira." },
      { id: "modal", capa: "4. Modais de Transporte", emoji: "🚛", cor: "from-amber-500 to-orange-700", conteudo: "MODAIS: tipos de transporte (rodoviário, ferroviário, hidroviário, aéreo). Brasil depende demais do rodoviário — caro e lento.", exemplo: "Ex.: 65% da carga vai de caminhão, só 15% de trem." },
    ],
    falaFinal: "Complexo, eixo, agro, modais. Vocabulário do motor do Brasil.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 pontos-chave do Centro-Sul.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      { id: "sp", x: 55, y: 55, emoji: "🏙️", cor: "from-red-500 to-rose-700", titulo: "São Paulo — o coração", texto: "12mi de hab. Maior PIB da América do Sul. 4 aeroportos, 3 portos próximos, hub financeiro." },
      { id: "rj", x: 65, y: 55, emoji: "🌊", cor: "from-sky-500 to-blue-700", titulo: "Rio de Janeiro — o portal", texto: "6mi. Petróleo (bacia de Campos), turismo, Petrobras, siderurgia (CSN Volta Redonda)." },
      { id: "mg", x: 55, y: 45, emoji: "⛰️", cor: "from-amber-500 to-orange-700", titulo: "Minas — mineração e agro", texto: "21mi. Maior produtor de minério de ferro do Brasil (Vale). Café, leite, indústria." },
      { id: "sul", x: 45, y: 75, emoji: "🍇", cor: "from-emerald-500 to-teal-700", titulo: "Sul — indústria + agro tecnológico", texto: "PR, SC, RS: alto IDH, indústria diversificada, agricultura moderna (soja, arroz, aves)." },
      { id: "co", x: 40, y: 55, emoji: "🌾", cor: "from-purple-500 to-fuchsia-700", titulo: "Centro-Oeste — o novo agro", texto: "MT, MS, GO, DF: fronteira agrícola. Soja, milho, algodão, boi. Explosão nos últimos 30 anos." },
    ],
    falaFinal: "5 sub-áreas, uma máquina econômica.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de economista regional.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1", pergunta: "O Centro-Sul concentra aproximadamente quanto do PIB nacional?",
        cards: [
          { id: "a", emoji: "💰", titulo: "75%", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "📊", titulo: "50%", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🪙", titulo: "30%", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Centro-Sul = 75% do PIB brasileiro.", feedbackErro: "É 75% — três quartos de toda a economia nacional.",
      },
      {
        id: "q2", pergunta: "O maior produtor de MINÉRIO DE FERRO do Brasil é:",
        cards: [
          { id: "a", emoji: "⛰️", titulo: "Minas Gerais", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌳", titulo: "Amazonas", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🏖️", titulo: "Bahia", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Vale opera principalmente em MG (Quadrilátero Ferrífero).", feedbackErro: "É MINAS GERAIS. O nome 'Minas' vem daí.",
      },
      {
        id: "q3", pergunta: "O modal MAIS usado pra transportar carga no Brasil é:",
        cards: [
          { id: "a", emoji: "🚚", titulo: "Rodoviário (caminhão)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🚂", titulo: "Ferroviário (trem)", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🚢", titulo: "Hidroviário (barco)", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! 65% da carga vai de caminhão — caro e ineficiente.", feedbackErro: "É o RODOVIÁRIO — herança de JK. Problema logístico grave.",
      },
    ],
    falaFinal: "Radar econômico ok.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda os estados do Centro-Sul (Sudeste + Sul + Centro-Oeste).",
    instrucao: "Marque os estados do Complexo Centro-Sul",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "MG", "ES", "PR", "SC", "RS", "MT", "MS", "GO", "DF"], pergunta: "Quais estados compõem o Complexo Centro-Sul?" },
    falaFinal: "11 estados + DF = 75% do PIB brasileiro em 60% do território.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a formação do Centro-Sul como polo econômico.",
    instrucao: "Arraste na ordem cronológica",
    pergunta: "Como o Centro-Sul virou o motor do Brasil:",
    paradas: [
      { id: "e1", emoji: "☕", rotulo: "1. Ciclo do Café (1850)", descricao: "SP e MG viram polo do café — capital acumulado começa a virar fábrica." },
      { id: "e2", emoji: "🏭", rotulo: "2. Industrialização (1930)", descricao: "Vargas cria indústria pesada. SP domina a produção nacional." },
      { id: "e3", emoji: "🛣️", rotulo: "3. Rodovias e JK (1956)", descricao: "Via Dutra, BR-101, BR-116 conectam o Centro-Sul. Brasília nasce." },
      { id: "e4", emoji: "🌾", rotulo: "4. Agro no Cerrado (1980)", descricao: "Embrapa desenvolve soja tropical. Centro-Oeste vira fronteira agrícola." },
      { id: "e5", emoji: "🚢", rotulo: "5. Boom das Commodities (2000)", descricao: "China compra soja e minério em massa. Centro-Sul lucra alto." },
    ],
    ordemCerta: ["e1", "e2", "e3", "e4", "e5"],
    feedbackAcerto: "Perfeito! Do café ao commodity boom.",
    feedbackErro: "Comece pelo Café (1850) e termine no boom das commodities (2000).",
    falaFinal: "5 etapas, 150 anos de acumulação econômica.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual do Centro-Sul",
    subtitulo: "Capítulo 4 — O motor econômico do Brasil",
    paragrafos: [
      { id: "p1", texto: "O COMPLEXO CENTRO-SUL une SUDESTE, SUL e CENTRO-OESTE. Concentra 75% do PIB e 65% da população.", chaves: ["complexo centro-sul", "75%", "pib"] },
      { id: "p2", texto: "O EIXO RIO–SÃO PAULO é a espinha dorsal econômica: 25% do PIB nacional em apenas 430 km de rodovia (Via Dutra).", chaves: ["eixo rio-sp", "via dutra", "25%"] },
      { id: "p3", texto: "O AGRONEGÓCIO explodiu no CERRADO (MT, MS, GO). Soja, milho e boi transformaram o Centro-Oeste em potência.", chaves: ["agronegócio", "cerrado", "soja"] },
      { id: "p4", texto: "O grande problema logístico é a DEPENDÊNCIA do RODOVIÁRIO: 65% da carga vai de caminhão — caro, poluente e lento.", chaves: ["logística", "rodoviário", "65%"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo GEO-ECONOMISTA! Qual conceito explica cada situação?",
    instrucao: "⏱️ Escolha o conceito certo",
    duracaoSegundos: 15,
    pecas: [
      { id: "comp", emoji: "🗺️", rotulo: "Complexo Regional" },
      { id: "eixo", emoji: "🛣️", rotulo: "Eixo Rio–SP" },
      { id: "agro", emoji: "🌾", rotulo: "Agronegócio" },
      { id: "mod", emoji: "🚛", rotulo: "Modais de Transporte" },
      { id: "hub", emoji: "🏦", rotulo: "Hub Financeiro" },
      { id: "min", emoji: "⛏️", rotulo: "Mineração" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "3 regiões", emoji: "🗺️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Divisão de Milton Santos", emoji: "🎓", cor: "from-purple-400 to-fuchsia-600" }, contexto: "Divisão do Brasil por economia (não por bioma):", pecaCertaId: "comp", feedbackAcerto: "Isso! COMPLEXO REGIONAL.", feedbackErro: "Divisão econômica de Milton Santos = COMPLEXO REGIONAL." },
      { id: "r2", municipioA: { nome: "430 km", emoji: "🛣️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "25% do PIB", emoji: "💰", cor: "from-amber-400 to-orange-600" }, contexto: "'Espinha dorsal' entre as duas maiores metrópoles:", pecaCertaId: "eixo", feedbackAcerto: "Boa! EIXO RIO–SÃO PAULO.", feedbackErro: "Via Dutra, 25% PIB = EIXO RIO–SP." },
      { id: "r3", municipioA: { nome: "Soja em MT", emoji: "🌾", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Boi em GO", emoji: "🐄", cor: "from-green-400 to-emerald-600" }, contexto: "Agricultura empresarial tecnológica pra exportação:", pecaCertaId: "agro", feedbackAcerto: "Isso! AGRONEGÓCIO.", feedbackErro: "Agricultura empresarial + tech = AGRONEGÓCIO." },
      { id: "r4", municipioA: { nome: "Caminhão 65%", emoji: "🚚", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Trem 15%", emoji: "🚂", cor: "from-sky-400 to-blue-600" }, contexto: "Tipos de transporte de carga no Brasil:", pecaCertaId: "mod", feedbackAcerto: "Boa! MODAIS DE TRANSPORTE.", feedbackErro: "Rodovia/ferrovia/hidrovia = MODAIS." },
      { id: "r5", municipioA: { nome: "Faria Lima", emoji: "🏦", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Bolsa B3", emoji: "📈", cor: "from-emerald-400 to-teal-600" }, contexto: "SP concentra bancos, bolsa e mercado financeiro:", pecaCertaId: "hub", feedbackAcerto: "Isso! HUB FINANCEIRO.", feedbackErro: "Centro financeiro = HUB FINANCEIRO." },
      { id: "r6", municipioA: { nome: "Quadrilátero MG", emoji: "⛰️", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Vale opera", emoji: "⛏️", cor: "from-slate-400 to-slate-600" }, contexto: "Principal atividade extrativa do Centro-Sul:", pecaCertaId: "min", feedbackAcerto: "Isso! MINERAÇÃO (ferro em MG).", feedbackErro: "Ferro em MG = MINERAÇÃO." },
    ],
    falaFinal: "6 conceitos dominados. Economista regional aprovado!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do PIB brasileiro: quanto vem de cada região?",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "sudeste", rotulo: "Sudeste", emoji: "🏙️", percentual: 53, cor: "#dc2626", descricao: "53% do PIB. SP sozinho = 32%. Motor absoluto do Brasil.", exemplos: ["🏦 Faria Lima", "🚗 ABC (automóveis)", "⛽ Bacia de Campos"] },
      { id: "sul", rotulo: "Sul", emoji: "🍇", percentual: 17, cor: "#059669", descricao: "17% do PIB. Indústria diversificada + agricultura tecnológica.", exemplos: ["🍗 BRF/JBS", "🌾 Soja PR/RS", "👟 Franca calçados"] },
      { id: "co", rotulo: "Centro-Oeste", emoji: "🌾", percentual: 10, cor: "#7c3aed", descricao: "10% do PIB. Agronegócio + Brasília (serviços públicos).", exemplos: ["🌽 Soja MT (30%)", "🐄 Boi GO/MS", "🏛️ Brasília DF"] },
      { id: "nordeste", rotulo: "Nordeste", emoji: "☀️", percentual: 15, cor: "#f59e0b", descricao: "15% do PIB. Petróleo, turismo, agro-irrigado.", exemplos: ["⚡ Suape PE", "🌴 Turismo BA/CE", "🍇 Vale do São Francisco"] },
      { id: "norte", rotulo: "Norte", emoji: "🌳", percentual: 5, cor: "#0d9488", descricao: "5% do PIB. Zona Franca + mineração (Vale/Carajás).", exemplos: ["📱 ZFM Manaus", "⛏️ Carajás PA", "🐟 Pesca"] },
    ],
    falaFinal: "Sudeste + Sul + CO = 80% do PIB. Concentração brutal.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Economista do Centro-Sul.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "O Complexo Centro-Sul concentra aproximadamente:", opcoes: [{ id: "a", texto: "75% do PIB nacional", correta: true }, { id: "b", texto: "30% do PIB nacional", correta: false }, { id: "c", texto: "50% do PIB nacional", correta: false }], feedbackAcerto: "Isso! Concentração absurda.", feedbackErro: "É 75% — três quartos da economia." },
      { id: "av2", pergunta: "O eixo econômico mais importante do Brasil é:", opcoes: [{ id: "a", texto: "Salvador–Recife", correta: false }, { id: "b", texto: "Rio–São Paulo", correta: true }, { id: "c", texto: "Manaus–Belém", correta: false }], feedbackAcerto: "Perfeito! 25% do PIB em 430 km.", feedbackErro: "É RIO–SP — a Via Dutra." },
      { id: "av3", pergunta: "O principal modal de transporte de carga no Brasil é:", opcoes: [{ id: "a", texto: "Ferroviário", correta: false }, { id: "b", texto: "Hidroviário", correta: false }, { id: "c", texto: "Rodoviário", correta: true }], feedbackAcerto: "Isso! 65% vai de caminhão.", feedbackErro: "É o RODOVIÁRIO — o caminhão domina." },
    ],
    selo: { nome: "Economista do Centro-Sul", subtitulo: "Insígnia do Motor Nacional", emoji: "🏙️", cor: "from-red-400 to-rose-600" },
    falaFinal: "Insígnia conquistada! Você entende o motor econômico do Brasil.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Economista do Centro-Sul" },
};
