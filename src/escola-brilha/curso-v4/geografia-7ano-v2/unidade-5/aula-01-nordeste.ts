import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-7ano/nordeste.jpg";

/**
 * Geografia · 7º Ano · Unidade 5 · Aula 01
 * Nordeste e Suas 4 Sub-Regiões
 * BNCC: EF07GE08, EF07GE10
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-nordeste",
  titulo: "Nordeste e Suas Sub-Regiões",
  iconeTrilha: "☀️",
  bncc: ["EF07GE08", "EF07GE10"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Existem 4 Nordestes diferentes dentro de um só. Bora ver.",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora:
      "Explorador, quando falam 'Nordeste', muita gente pensa só em SECA e SERTÃO. Mas isso é preconceito. O Nordeste tem 9 estados, 57 milhões de habitantes e paisagens TOTALMENTE diferentes entre si: praias tropicais em Fortaleza, sertão árido no Piauí, agreste de transição em Caruaru, cana-de-açúcar em Pernambuco. São 4 sub-regiões distintas.",
    falaFinal: "Bora entender os 4 Nordestes.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Qual sub-região do Nordeste é MAIS ÚMIDA?",
    pergunta: "Onde chove mais no Nordeste?",
    opcoes: [
      { id: "sertao", titulo: "SERTÃO", subtitulo: "no interior, caatinga", emoji: "🌵", cor: "from-amber-400 to-orange-600" },
      { id: "mata", titulo: "ZONA DA MATA", subtitulo: "no litoral leste", emoji: "🌴", cor: "from-emerald-400 to-teal-600" },
    ],
    respostaCerta: "mata",
    feedbackAcerto: "Isso! Litoral leste recebe ventos úmidos do oceano — chove muito.",
    feedbackErro: "Não! Sertão é seco. A ZONA DA MATA é úmida (litoral).",
    falaFinal: "Nordeste tem clima que varia MUITO em poucos km.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As 4 sub-regiões do Nordeste.",
    instrucao: "Leia cada caderno",
    cadernos: [
      { id: "mn", capa: "1. Meio-Norte", emoji: "🌾", cor: "from-emerald-500 to-teal-700", conteudo: "MEIO-NORTE (MA e oeste do PI): transição entre Amazônia e Sertão. Cocais (babaçu, carnaúba). Clima úmido.", exemplo: "Ex.: babaçu é matéria-prima pra sabão, óleo e cosméticos." },
      { id: "sert", capa: "2. Sertão", emoji: "🌵", cor: "from-amber-500 to-orange-700", conteudo: "SERTÃO: interior seco, caatinga, chuvas escassas (500mm/ano). Cria-se gado. Sofre secas prolongadas.", exemplo: "Ex.: PI, CE, RN, PB interiores. Solo rachado, cactos, mandacaru." },
      { id: "agr", capa: "3. Agreste", emoji: "🌿", cor: "from-lime-500 to-green-700", conteudo: "AGRESTE: faixa de TRANSIÇÃO entre Zona da Mata (úmida) e Sertão (seco). Agricultura familiar, feiras.", exemplo: "Ex.: Caruaru (PE), Feira de Santana (BA). Feira e artesanato." },
      { id: "zm", capa: "4. Zona da Mata", emoji: "🌴", cor: "from-sky-500 to-blue-700", conteudo: "ZONA DA MATA: litoral leste, úmido. Onde nasceu a colonização (engenhos de cana). Hoje: turismo, cana, cidades grandes.", exemplo: "Ex.: Recife, Salvador, Maceió, João Pessoa — todas no litoral." },
    ],
    falaFinal: "Meio-Norte, Sertão, Agreste, Zona da Mata. 4 Nordestes.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Aponte cada sub-região do Nordeste. Ouça o que rola.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      { id: "mn", x: 25, y: 25, emoji: "🌾", cor: "from-emerald-500 to-teal-700", titulo: "Meio-Norte (MA + PI)", texto: "Transição Amazônia–Sertão. Cocais de babaçu e carnaúba. Chove mais que no Sertão." },
      { id: "sert", x: 40, y: 45, emoji: "🌵", cor: "from-amber-500 to-orange-700", titulo: "Sertão — o coração seco", texto: "Interior de CE, RN, PB, PE, AL, SE, BA. Caatinga, gado, seca cíclica. Cordel e xilogravura." },
      { id: "agr", x: 55, y: 55, emoji: "🌿", cor: "from-lime-500 to-green-700", titulo: "Agreste — a transição", texto: "Faixa estreita entre Sertão e Zona da Mata. Agricultura familiar, feiras livres, artesanato." },
      { id: "zm", x: 70, y: 60, emoji: "🌴", cor: "from-sky-500 to-blue-700", titulo: "Zona da Mata — o litoral", texto: "Faixa úmida do litoral. Onde nasceu o Brasil colonial. Cana, cidades grandes, turismo." },
    ],
    falaFinal: "4 balões, 4 Nordestes.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de nordestinólogo.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1", pergunta: "A sub-região MAIS SECA do Nordeste é:",
        cards: [
          { id: "a", emoji: "🌵", titulo: "Sertão", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌴", titulo: "Zona da Mata", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🌾", titulo: "Meio-Norte", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Sertão = caatinga = seca.", feedbackErro: "É o SERTÃO — bioma caatinga, 500mm de chuva por ano.",
      },
      {
        id: "q2", pergunta: "A sub-região onde NASCEU o Brasil colonial (engenhos de cana) é:",
        cards: [
          { id: "a", emoji: "🌵", titulo: "Sertão", cor: "from-amber-500 to-orange-700" },
          { id: "b", emoji: "🌴", titulo: "Zona da Mata", cor: "from-emerald-500 to-teal-700" },
          { id: "c", emoji: "🌾", titulo: "Agreste", cor: "from-sky-500 to-indigo-700" },
        ],
        correta: "b", feedbackAcerto: "Isso! Cana chegou em 1530 no litoral.", feedbackErro: "É a ZONA DA MATA — o litoral úmido dos engenhos.",
      },
      {
        id: "q3", pergunta: "O Agreste fica entre:",
        cards: [
          { id: "a", emoji: "🌵🌴", titulo: "Sertão e Zona da Mata", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌾🌵", titulo: "Meio-Norte e Sertão", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🌊🌴", titulo: "Litoral e Amazônia", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Agreste é transição.", feedbackErro: "Fica entre SERTÃO (seco) e ZONA DA MATA (úmida).",
      },
    ],
    falaFinal: "Radar nordestino ok.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda os 9 estados do Nordeste.",
    instrucao: "Marque os estados nordestinos",
    missao: { tipo: "selecionar", siglas: ["MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA"], pergunta: "Quais são os 9 estados do Nordeste?" },
    falaFinal: "9 estados, 57 milhões de habitantes, 4 sub-regiões distintas.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as sub-regiões do LITORAL pro INTERIOR (leste → oeste).",
    instrucao: "Arraste na ordem geográfica",
    pergunta: "Do oceano até o Meio-Norte, na ordem:",
    paradas: [
      { id: "e1", emoji: "🌊", rotulo: "1. Oceano Atlântico", descricao: "O ponto de partida — a costa leste do Nordeste, banhada pelo mar." },
      { id: "e2", emoji: "🌴", rotulo: "2. Zona da Mata", descricao: "Faixa úmida no litoral. Recife, Salvador, cana-de-açúcar, cidades grandes." },
      { id: "e3", emoji: "🌿", rotulo: "3. Agreste", descricao: "Faixa de transição. Feiras, artesanato, agricultura familiar." },
      { id: "e4", emoji: "🌵", rotulo: "4. Sertão", descricao: "Interior seco. Caatinga, gado, seca. Coração do Nordeste." },
      { id: "e5", emoji: "🌾", rotulo: "5. Meio-Norte", descricao: "Transição pra Amazônia. Cocais, babaçu, mais úmido que o Sertão." },
    ],
    ordemCerta: ["e1", "e2", "e3", "e4", "e5"],
    feedbackAcerto: "Perfeito! Do oceano ao Meio-Norte, em faixas paralelas.",
    feedbackErro: "Comece pelo oceano e termine no Meio-Norte (fronteira com AM).",
    falaFinal: "5 faixas paralelas do leste pro oeste. Isso é o Nordeste.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual do Nordeste",
    subtitulo: "Capítulo 5 — 4 Nordestes num só",
    paragrafos: [
      { id: "p1", texto: "O NORDESTE tem 9 ESTADOS e 57 milhões de habitantes. Divide-se em 4 SUB-REGIÕES com paisagens diferentes.", chaves: ["nordeste", "9 estados", "4 sub-regiões"] },
      { id: "p2", texto: "A ZONA DA MATA é o litoral úmido — Recife, Salvador, cana-de-açúcar, engenhos. Onde nasceu o Brasil colonial.", chaves: ["zona da mata", "litoral", "cana"] },
      { id: "p3", texto: "O SERTÃO é o interior seco, com bioma CAATINGA. Chuva escassa (500mm/ano), gado, seca cíclica. Fonte de migrações.", chaves: ["sertão", "caatinga", "seca"] },
      { id: "p4", texto: "O AGRESTE é a TRANSIÇÃO entre Sertão e Zona da Mata. O MEIO-NORTE é a transição pra AMAZÔNIA, com cocais.", chaves: ["agreste", "transição", "meio-norte", "cocais"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo NORDESTINÓLOGO EXPRESS! Qual sub-região explica cada situação?",
    instrucao: "⏱️ Escolha a sub-região certa",
    duracaoSegundos: 15,
    pecas: [
      { id: "mn", emoji: "🌾", rotulo: "Meio-Norte" },
      { id: "sert", emoji: "🌵", rotulo: "Sertão" },
      { id: "agr", emoji: "🌿", rotulo: "Agreste" },
      { id: "zm", emoji: "🌴", rotulo: "Zona da Mata" },
      { id: "poli", emoji: "🌵🌊", rotulo: "Polígono das Secas" },
      { id: "sf", emoji: "🍇", rotulo: "Vale do São Francisco" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Babaçu no MA", emoji: "🌾", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Transição Amazônia", emoji: "🌳", cor: "from-green-400 to-emerald-600" }, contexto: "Sub-região úmida com cocais no oeste do NE:", pecaCertaId: "mn", feedbackAcerto: "Isso! MEIO-NORTE.", feedbackErro: "Cocais + transição Amazônia = MEIO-NORTE." },
      { id: "r2", municipioA: { nome: "Caatinga", emoji: "🌵", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "500mm chuva/ano", emoji: "🌡️", cor: "from-red-400 to-rose-600" }, contexto: "Interior seco com bioma exclusivo do Brasil:", pecaCertaId: "sert", feedbackAcerto: "Boa! SERTÃO.", feedbackErro: "Caatinga = SERTÃO." },
      { id: "r3", municipioA: { nome: "Feira Caruaru", emoji: "🎨", cor: "from-lime-400 to-green-600" }, municipioB: { nome: "Transição de clima", emoji: "🌿", cor: "from-emerald-400 to-teal-600" }, contexto: "Faixa entre Sertão e Zona da Mata:", pecaCertaId: "agr", feedbackAcerto: "Isso! AGRESTE.", feedbackErro: "Transição = AGRESTE." },
      { id: "r4", municipioA: { nome: "Recife + Salvador", emoji: "🏙️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Engenhos de cana", emoji: "🌴", cor: "from-teal-400 to-cyan-600" }, contexto: "Litoral úmido onde nasceu o Brasil colonial:", pecaCertaId: "zm", feedbackAcerto: "Boa! ZONA DA MATA.", feedbackErro: "Litoral + cana = ZONA DA MATA." },
      { id: "r5", municipioA: { nome: "Área com seca", emoji: "☀️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Delimitação legal", emoji: "📋", cor: "from-amber-400 to-orange-600" }, contexto: "Região oficial com risco de seca, tem políticas específicas:", pecaCertaId: "poli", feedbackAcerto: "Isso! POLÍGONO DAS SECAS.", feedbackErro: "Área oficial de seca = POLÍGONO DAS SECAS." },
      { id: "r6", municipioA: { nome: "Petrolina/Juazeiro", emoji: "🍇", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Uva e manga irrigadas", emoji: "🥭", cor: "from-pink-400 to-rose-600" }, contexto: "Sertão que virou pólo de fruticultura irrigada:", pecaCertaId: "sf", feedbackAcerto: "Isso! VALE DO SÃO FRANCISCO.", feedbackErro: "Uva/manga no sertão = VALE DO SÃO FRANCISCO." },
    ],
    falaFinal: "6 conceitos dominados. Nordestinólogo aprovado!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do TERRITÓRIO nordestino: as 4 sub-regiões.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "sert", rotulo: "Sertão", emoji: "🌵", percentual: 60, cor: "#f59e0b", descricao: "60% do Nordeste. A maior sub-região. Caatinga, gado, seca cíclica.", exemplos: ["🐄 Pecuária extensiva", "🌵 Bioma caatinga", "🎵 Cordel e xilogravura"] },
      { id: "mn", rotulo: "Meio-Norte", emoji: "🌾", percentual: 20, cor: "#059669", descricao: "20% do Nordeste. Transição pra Amazônia. Mais úmido.", exemplos: ["🌴 Babaçu e carnaúba", "🐄 Bubalinos MA", "🌊 Delta do Parnaíba"] },
      { id: "agr", rotulo: "Agreste", emoji: "🌿", percentual: 12, cor: "#84cc16", descricao: "12% do Nordeste. Faixa estreita de transição. Feiras e artesanato.", exemplos: ["🎨 Caruaru (PE)", "🐔 Avicultura", "🥛 Bacia leiteira"] },
      { id: "zm", rotulo: "Zona da Mata", emoji: "🌴", percentual: 8, cor: "#0284c7", descricao: "8% do Nordeste (faixa estreita), mas concentra as CIDADES GRANDES.", exemplos: ["🏙️ Recife (1,6mi)", "🌊 Salvador (2,4mi)", "🏖️ Turismo internacional"] },
    ],
    falaFinal: "Sertão domina em área, Zona da Mata domina em população.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Cartógrafo do Nordeste.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "O Nordeste tem quantos estados?", opcoes: [{ id: "a", texto: "7 estados", correta: false }, { id: "b", texto: "9 estados", correta: true }, { id: "c", texto: "11 estados", correta: false }], feedbackAcerto: "Isso!", feedbackErro: "São 9: MA, PI, CE, RN, PB, PE, AL, SE, BA." },
      { id: "av2", pergunta: "A sub-região do bioma CAATINGA é:", opcoes: [{ id: "a", texto: "Zona da Mata", correta: false }, { id: "b", texto: "Sertão", correta: true }, { id: "c", texto: "Meio-Norte", correta: false }], feedbackAcerto: "Perfeito!", feedbackErro: "Caatinga = SERTÃO." },
      { id: "av3", pergunta: "A sub-região onde nasceu o Brasil colonial (engenhos de cana) é:", opcoes: [{ id: "a", texto: "Agreste", correta: false }, { id: "b", texto: "Meio-Norte", correta: false }, { id: "c", texto: "Zona da Mata", correta: true }], feedbackAcerto: "Isso! Litoral úmido dos engenhos.", feedbackErro: "É a ZONA DA MATA — o litoral colonial." },
    ],
    selo: { nome: "Cartógrafo do Nordeste", subtitulo: "Insígnia das 4 Sub-Regiões", emoji: "☀️", cor: "from-amber-400 to-orange-600" },
    falaFinal: "Insígnia conquistada! Você entende que existem 4 Nordestes.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cartógrafo do Nordeste" },
};
