import type { AulaGeoV1 } from "../../types";
import sertao from "@/assets/geografia-7ano/sertao-nordeste.jpg";
import litoral from "@/assets/geografia-7ano/litoral-nordeste-turismo.jpg";
import petrolina from "@/assets/geografia-7ano/petrolina-irrigacao.jpg";
import transp from "@/assets/geografia-7ano/transposicao-sao-francisco.jpg";

/**
 * Geografia · 7º Ano · Unidade 5 · Aula 01
 * "Complexo Nordeste" — BNCC EF07GE10, EF07GE11
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-complexo-nordeste",
  titulo: "Complexo Nordeste",
  iconeTrilha: "🌵",
  bncc: ["EF07GE10", "EF07GE11"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: sertao,
    imagemDestaqueUrl: sertao,
    aurora:
      "O NORDESTE é um continente dentro do Brasil. 9 estados, 57 milhões de habitantes (27% da população), 4 SUB-REGIÕES bem diferentes entre si: MEIO-NORTE (transição pra Amazônia), SERTÃO (semiárido do interior), AGRESTE (faixa intermediária) e ZONA DA MATA (litoral úmido). Cada uma com clima, economia e cultura próprias. A SECA marca o sertão há séculos. Mas graças à IRRIGAÇÃO em Petrolina e à TRANSPOSIÇÃO do São Francisco, o semiárido está virando polo agrícola exportador de frutas.",
    falaFinal: "9 estados, 4 sub-regiões, 1 identidade forte. O Nordeste é mais que sertão.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta: onde o Nordeste conseguiu virar POLO agrícola exportador de MANGA, UVA e MELÃO, mesmo no meio do semiárido?",
    pergunta: "O milagre agrícola aconteceu em:",
    opcoes: [
      { id: "petro", titulo: "PETROLINA (PE) e Juazeiro (BA)", subtitulo: "irrigação vinda do São Francisco", emoji: "🍇", cor: "from-emerald-800 to-slate-950" },
      { id: "salv", titulo: "Salvador (BA)", subtitulo: "litoral chuvoso ajuda", emoji: "🏖️", cor: "from-sky-800 to-slate-950" },
    ],
    respostaCerta: "petro",
    feedbackAcerto:
      "Exato! PETROLINA (PE) e JUAZEIRO (BA), gêmeas separadas pelo rio São Francisco. Usando IRRIGAÇÃO POR GOTEJAMENTO, transformaram o semiárido em campo de manga e uva. Brasil exporta uva de Petrolina pra Europa 6 meses do ano.",
    feedbackErro:
      "Salvador é turismo, não agricultura. O milagre é PETROLINA + JUAZEIRO: sol + rio São Francisco + irrigação = manga e uva no meio do sertão.",
    falaFinal: "Regra: água + sol + irrigação = deserto vira campo. Petrolina provou.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos do Nordeste. Cada card traz explicação, exemplo real e curiosidade.",
    instrucao: "",
    cadernos: [
      { id: "subre", capa: "1. Sub-regiões", emoji: "🗺️", cor: "from-amber-800 to-orange-950",
        conteudo: "O Nordeste tem 4 SUB-REGIÕES: MEIO-NORTE (MA, PI — transição pra Amazônia), SERTÃO (semiárido do interior), AGRESTE (faixa entre sertão e litoral) e ZONA DA MATA (litoral úmido, com cana-de-açúcar).",
        exemplo: "Curiosidade: um Nordeste tão diferente que numa mesma viagem de carro (Recife → Petrolina) você atravessa 3 sub-regiões, clima muda de úmido pra semiárido, vegetação vira caatinga, e a temperatura sobe 5°C.",
        fotoUrl: sertao },
      { id: "seca", capa: "2. Seca do sertão", emoji: "☀️", cor: "from-red-800 to-slate-950",
        conteudo: "SECA é a falta prolongada de CHUVA no semiárido nordestino. Não chove por meses. Rios secam. Reservatórios baixam. Faz parte do CLIMA — mas o problema social é milenar.",
        exemplo: "Curiosidade: 27 milhões de brasileiros vivem no POLÍGONO DAS SECAS. Ciclo de secas severas dura 1-3 anos, com intervalos de 5-10. Última grande seca (2012-2018) atingiu 3 mil cidades.",
        fotoUrl: sertao },
      { id: "trans", capa: "3. Transposição do São Francisco", emoji: "🌊", cor: "from-sky-800 to-slate-950",
        conteudo: "TRANSPOSIÇÃO DO SÃO FRANCISCO é a obra que leva água do rio São Francisco para 4 estados do sertão (PE, PB, CE, RN) através de 477 km de canais. Iniciada em 2007, concluída em 2022.",
        exemplo: "Curiosidade: custou 12 bilhões de reais. Beneficia 12 milhões de pessoas no semiárido. Levantou polêmica ambiental (afeta o rio São Francisco), mas transformou o acesso à água em cidades como Campina Grande (PB).",
        fotoUrl: transp },
      { id: "irrig", capa: "4. Agricultura irrigada", emoji: "🍇", cor: "from-emerald-800 to-slate-950",
        conteudo: "AGRICULTURA IRRIGADA usa canais, tubos ou gotejadores pra levar água até as plantações. Em regiões secas, transforma solo estéril em produtivo. Petrolina/Juazeiro são o maior polo do Brasil.",
        exemplo: "Curiosidade: 90% da UVA brasileira exportada sai de Petrolina. É a única região do mundo que consegue COLHER UVA 2 VEZES POR ANO (sol o ano todo + irrigação = 2 safras). Europa importa uva brasileira em pleno inverno.",
        fotoUrl: petrolina },
    ],
    falaFinal: "Sub-regiões, seca, transposição, irrigação. 4 palavras que explicam o Nordeste do século XXI.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Cada card é uma SUB-REGIÃO do Nordeste. Toque em cada uma pra ver a paisagem real e entender.",
    instrucao: "Toque nos 4 cards pra ouvir cada sub-região",
    mapaUrl: sertao,
    pontos: [
      { id: "meio", x: 20, y: 30, emoji: "🌳", cor: "from-emerald-800 to-slate-950",
        titulo: "MEIO-NORTE — MA e PI",
        texto: "Transição entre Amazônia e Nordeste seco. Cocais (palmeira babaçu), rios volumosos, clima úmido. Extrativismo do babaçu e do coco. São Luís é a capital regional.",
        fotoUrl: litoral },
      { id: "sert", x: 55, y: 45, emoji: "🌵", cor: "from-amber-800 to-orange-950",
        titulo: "SERTÃO — Semiárido interior",
        texto: "Caatinga, cactos, chão rachado. Chuva rara (600 mm/ano). Pecuária extensiva. Cidades como Juazeiro do Norte (CE) e Petrolina (PE). Terra do cangaço, de Guimarães Rosa e Graciliano Ramos.",
        fotoUrl: sertao },
      { id: "agr", x: 45, y: 60, emoji: "🥔", cor: "from-lime-800 to-slate-950",
        titulo: "AGRESTE — Faixa intermediária",
        texto: "Fica entre o sertão e o litoral. Clima menos seco (700-900 mm de chuva). Agricultura de subsistência: mandioca, feijão, milho. Feiras livres. Caruaru é a cidade símbolo.",
        fotoUrl: petrolina },
      { id: "zm", x: 70, y: 75, emoji: "🏖️", cor: "from-sky-800 to-slate-950",
        titulo: "ZONA DA MATA — Litoral úmido",
        texto: "Faixa costeira. Clima tropical úmido, chuvas de outono/inverno. Antiga Mata Atlântica (hoje 90% destruída). Cana-de-açúcar desde 1500. Turismo em Recife, Maceió, Salvador.",
        fotoUrl: litoral },
    ],
    falaFinal: "4 sub-regiões, 1 continente. Um Nordeste dentro do Nordeste.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de geógrafo do Nordeste.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Quantas SUB-REGIÕES o Nordeste possui?",
        fotoUrl: sertao,
        cards: [
          { id: "a", emoji: "4️⃣", titulo: "4 sub-regiões", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "2️⃣", titulo: "2 sub-regiões", cor: "from-amber-800 to-orange-950" },
          { id: "c", emoji: "9️⃣", titulo: "9 sub-regiões", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! 4 sub-regiões: Meio-Norte, Sertão, Agreste, Zona da Mata.",
        feedbackErro: "São 4: Meio-Norte, Sertão, Agreste, Zona da Mata (9 é o nº de estados)." },
      { id: "q2", pergunta: "O SERTÃO nordestino tem clima:",
        fotoUrl: sertao,
        cards: [
          { id: "a", emoji: "🌵", titulo: "Semiárido (600 mm chuva/ano)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌧️", titulo: "Equatorial (chove sempre)", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "❄️", titulo: "Subtropical (com neve)", cor: "from-slate-700 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Semiárido: menos de 800 mm de chuva por ano. Caatinga.",
        feedbackErro: "Equatorial é Amazônia. Subtropical é Sul. Sertão = SEMIÁRIDO (pouca chuva)." },
      { id: "q3", pergunta: "Cidades gêmeas que viraram polo de FRUTAS irrigadas no semiárido:",
        fotoUrl: petrolina,
        cards: [
          { id: "a", emoji: "🍇", titulo: "Petrolina (PE) e Juazeiro (BA)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌴", titulo: "Recife e João Pessoa", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🌵", titulo: "Fortaleza e Natal", cor: "from-amber-800 to-orange-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! PETROLINA + JUAZEIRO, separadas pelo rio São Francisco.",
        feedbackErro: "As outras cidades são litorâneas. O polo agrícola é PETROLINA + JUAZEIRO, no rio São Francisco." },
      { id: "q4", pergunta: "TRANSPOSIÇÃO DO SÃO FRANCISCO é:",
        fotoUrl: transp,
        cards: [
          { id: "a", emoji: "🌊", titulo: "Levar água do rio pra 4 estados secos", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🚢", titulo: "Navegar o rio até o mar", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🌉", titulo: "Ponte de 477 km sobre o rio", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Canais de 477 km levando água pra PE, PB, CE, RN.",
        feedbackErro: "Não é ponte nem navegação. É LEVAR ÁGUA por canais para 4 estados secos." },
    ],
    falaFinal: "4 acertos = geógrafo do Nordeste em formação.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "O Nordeste tem 9 estados. Marque os 4 estados MAIS AFETADOS pela TRANSPOSIÇÃO do São Francisco (recebem a água).",
    instrucao: "Acenda os 4 estados beneficiados",
    missao: {
      tipo: "selecionar",
      siglas: ["PE", "PB", "CE", "RN"],
      pergunta: "Quais estados recebem água da transposição?",
    },
    falaFinal:
      "PE, PB, CE, RN. Os 4 estados mais afetados pela seca no semiárido. Água chegou. Vida melhorou.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como a UVA de Petrolina chega na Europa? Organize a rota da fazenda no semiárido até o navio pra Europa.",
    instrucao: "Toque na ordem",
    pergunta: "Da fazenda ao supermercado europeu:",
    paradas: [
      { id: "1", emoji: "💧", rotulo: "1. Irrigação a partir do São Francisco",
        descricao: "Água do rio é bombeada pra fazenda. Gotejamento diário nas parreiras.", fotoUrl: petrolina },
      { id: "2", emoji: "🍇", rotulo: "2. Colheita da uva",
        descricao: "Uvas colhidas 2x por ano (junho e novembro). Feito à mão, muito emprego." },
      { id: "3", emoji: "❄️", rotulo: "3. Câmara fria e caixa de papelão",
        descricao: "Uvas são resfriadas em galpões refrigerados. Embaladas pra viajar." },
      { id: "4", emoji: "🚛", rotulo: "4. Caminhão refrigerado até o porto",
        descricao: "Carga vai por rodovia até o porto de Salvador ou Suape (PE)." },
      { id: "5", emoji: "🚢", rotulo: "5. Navio até a Europa",
        descricao: "12 dias de navegação. Supermercados da Alemanha e Holanda recebem uva no inverno." },
    ],
    ordemCerta: ["1", "2", "3", "4", "5"],
    feedbackAcerto: "Perfeito! Do semiárido brasileiro à mesa europeia em 3 semanas.",
    feedbackErro: "Comece pela irrigação. Depois colheita, refrigeração, transporte, navio.",
    falaFinal: "5 etapas. Um milagre agrícola no meio do sertão.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Brasil",
    subtitulo: "Capítulo 5 — Complexo Nordeste",
    paragrafos: [
      { id: "p1",
        texto: "O Nordeste tem 4 SUB-REGIÕES: MEIO-NORTE, SERTÃO, AGRESTE e ZONA DA MATA. Cada uma com clima e economia próprios.",
        chaves: ["SUB-REGIÕES", "SERTÃO", "ZONA DA MATA"],
        definicoes: {
          "SUB-REGIÕES": "Divisões internas de uma região maior. O Nordeste tem 4 pra facilitar o estudo da diversidade interna.",
          "SERTÃO": "Sub-região semiárida do interior. Caatinga, chuva rara (600 mm/ano), pecuária extensiva.",
          "ZONA DA MATA": "Faixa litorânea úmida. Clima tropical, cana-de-açúcar histórica, principais capitais.",
        },
        fotoUrl: sertao,
      },
      { id: "p2",
        texto: "A SECA marca o SEMIÁRIDO nordestino há séculos. Rios temporários secam, reservatórios baixam. Faz parte do clima local.",
        chaves: ["SECA", "SEMIÁRIDO"],
        definicoes: {
          "SECA": "Falta prolongada de chuva. Ocorre em ciclos de 1-3 anos, com intervalos de 5-10.",
          "SEMIÁRIDO": "Clima com menos de 800 mm de chuva por ano. No Brasil, cobre 1 milhão de km² do Nordeste.",
        },
        fotoUrl: sertao,
      },
      { id: "p3",
        texto: "A TRANSPOSIÇÃO DO SÃO FRANCISCO leva água do rio para 4 estados do semiárido. 477 km de CANAIS beneficiam 12 milhões de pessoas.",
        chaves: ["TRANSPOSIÇÃO DO SÃO FRANCISCO", "CANAIS"],
        definicoes: {
          "TRANSPOSIÇÃO DO SÃO FRANCISCO": "Obra pública iniciada em 2007 e concluída em 2022. Custou 12 bilhões de reais.",
          "CANAIS": "Estruturas de concreto que conduzem água ao longo de centenas de quilômetros no semiárido.",
        },
        fotoUrl: transp,
      },
      { id: "p4",
        texto: "A AGRICULTURA IRRIGADA em PETROLINA (PE) e JUAZEIRO (BA) transformou o semiárido em polo exportador de UVA e MANGA.",
        chaves: ["AGRICULTURA IRRIGADA", "PETROLINA"],
        definicoes: {
          "AGRICULTURA IRRIGADA": "Cultivo que usa canais, tubos ou gotejadores para levar água a plantas em regiões secas.",
          "PETROLINA": "Cidade de PE às margens do São Francisco. Único lugar do mundo com 2 safras de uva por ano.",
        },
        fotoUrl: petrolina,
      },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "meio", emoji: "", titulo: "Meio-Norte", cor: "from-slate-800 to-slate-900" },
      { id: "sertao", emoji: "", titulo: "Sertão", cor: "from-slate-800 to-slate-900" },
      { id: "agreste", emoji: "", titulo: "Agreste", cor: "from-slate-800 to-slate-900" },
      { id: "mata", emoji: "", titulo: "Zona da Mata", cor: "from-slate-800 to-slate-900" },
      { id: "petro", emoji: "", titulo: "Polo Petrolina/Juazeiro", cor: "from-slate-800 to-slate-900" },
      { id: "trans", emoji: "", titulo: "Transposição SF", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha a sub-região ou conceito correto.",
      instrucao: "Escolha a resposta correta",
      perguntas: [
        { id: "r1", pergunta: "Sub-região do Nordeste de transição para a Amazônia, com babaçu e clima úmido. Envolve MA e PI.", cards, correta: "meio",
          feedbackAcerto: "Isso. Transição pra Amazônia = MEIO-NORTE.", feedbackErro: "É o MEIO-NORTE. Transição com a Amazônia, MA e PI." },
        { id: "r2", pergunta: "Sub-região semiárida do interior, com caatinga, chuva rara e pecuária extensiva.", cards, correta: "sertao",
          feedbackAcerto: "Isso. Semiárido do interior = SERTÃO.", feedbackErro: "É o SERTÃO. Semiárido, caatinga, pouca chuva." },
        { id: "r3", pergunta: "Sub-região intermediária entre sertão e litoral, com agricultura de subsistência (feijão, mandioca).", cards, correta: "agreste",
          feedbackAcerto: "Isso. Faixa intermediária = AGRESTE.", feedbackErro: "É o AGRESTE. Entre sertão e litoral, agricultura de subsistência." },
        { id: "r4", pergunta: "Sub-região litorânea úmida com cana-de-açúcar histórica e as principais capitais nordestinas.", cards, correta: "mata",
          feedbackAcerto: "Isso. Litoral úmido com cana = ZONA DA MATA.", feedbackErro: "É a ZONA DA MATA. Cana-de-açúcar desde 1500, litoral chuvoso." },
        { id: "r5", pergunta: "Polo agrícola no semiárido que exporta uva e manga o ano todo graças à irrigação.", cards, correta: "petro",
          feedbackAcerto: "Isso. Frutas irrigadas no semiárido = POLO PETROLINA/JUAZEIRO.", feedbackErro: "É o POLO PETROLINA/JUAZEIRO. Cidades gêmeas no São Francisco." },
        { id: "r6", pergunta: "Obra pública de 477 km em canais que leva água a 4 estados do semiárido.", cards, correta: "trans",
          feedbackAcerto: "Isso. Canais levando água ao semiárido = TRANSPOSIÇÃO SF.", feedbackErro: "É a TRANSPOSIÇÃO DO SÃO FRANCISCO. Beneficia 12 milhões de pessoas." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Analista do Nordeste formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do TERRITÓRIO nordestino: semiárido × outras sub-regiões.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "semi", rotulo: "Semiárido (60%)", emoji: "🌵", percentual: 60, cor: "#b45309",
        descricao: "1 milhão de km² de sertão. Chuva escassa, caatinga, pecuária. Onde vivem 27 milhões.",
        exemplos: ["🌵 Sertão", "🐐 Pecuária", "💧 Transposição"] },
      { id: "outros", rotulo: "Meio-Norte + Agreste + Mata (40%)", emoji: "🌴", percentual: 40, cor: "#0284c7",
        descricao: "Sub-regiões mais úmidas. Meio-Norte na transição, Agreste na faixa intermediária, Mata no litoral.",
        exemplos: ["🌳 Meio-Norte", "🥔 Agreste", "🏖️ Litoral"] },
    ],
    falaFinal: "60% do Nordeste é semiárido. Mas o resto é úmido, verde, próspero. Um Nordeste dentro do Nordeste.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Guardião do Nordeste.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Quantas sub-regiões tem o Nordeste?",
        opcoes: [
          { id: "a", texto: "2 sub-regiões", correta: false },
          { id: "b", texto: "4 sub-regiões", correta: true },
          { id: "c", texto: "9 sub-regiões", correta: false },
        ],
        feedbackAcerto: "Isso! 4: Meio-Norte, Sertão, Agreste, Zona da Mata.",
        feedbackErro: "9 é o número de estados. Sub-regiões são 4." },
      { id: "av2", pergunta: "Polo agrícola que exporta uva e manga graças à irrigação:",
        opcoes: [
          { id: "a", texto: "Salvador", correta: false },
          { id: "b", texto: "Petrolina e Juazeiro", correta: true },
          { id: "c", texto: "Fortaleza", correta: false },
        ],
        feedbackAcerto: "Isso! PETROLINA + JUAZEIRO, no rio São Francisco.",
        feedbackErro: "Salvador é turismo. Fortaleza também. O polo é PETROLINA + JUAZEIRO." },
      { id: "av3", pergunta: "A TRANSPOSIÇÃO leva água de qual rio?",
        opcoes: [
          { id: "a", texto: "Rio Amazonas", correta: false },
          { id: "b", texto: "Rio São Francisco", correta: true },
          { id: "c", texto: "Rio Paraná", correta: false },
        ],
        feedbackAcerto: "Isso! Rio SÃO FRANCISCO, o Velho Chico.",
        feedbackErro: "Amazonas é Norte. Paraná é Sul. A transposição é do SÃO FRANCISCO." },
    ],
    selo: { nome: "Guardião do Nordeste", subtitulo: "Insígnia do Explorador do Brasil", emoji: "🌵", cor: "from-amber-800 to-orange-950" },
    falaFinal: "Insígnia conquistada! Você mapeou o Nordeste inteiro.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Guardião do Nordeste" },
};
