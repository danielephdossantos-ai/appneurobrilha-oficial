import type { AulaGeoV1 } from "../../types";
import { url as tordesilhas } from "@/assets/geografia-7ano/tordesilhas-1494.jpg.asset.json";
import { url as bandeirantes } from "@/assets/geografia-7ano/bandeirantes-expansao.jpg.asset.json";
import { url as tratado } from "@/assets/geografia-7ano/tratado-madri.jpg.asset.json";
import { url as brasilAtual } from "@/assets/geografia-7ano/brasil-fronteiras.jpg.asset.json";
/**
 * Geografia · 7º Ano · Unidade 1 · Aula 01
 * "Formação Territorial do Brasil" — BNCC EF07GE01, EF07GE02
 * Padrão Explorador Planetário (6ano-v2).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-formacao-territorial",
  titulo: "Formação Territorial do Brasil",
  iconeTrilha: "🗺️",
  bncc: ["EF07GE01", "EF07GE02"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: tordesilhas,
    imagemDestaqueUrl: tordesilhas,
    aurora:
      "Em 1494, Portugal e Espanha traçaram uma linha imaginária no meio do Atlântico e dividiram o mundo em duas metades — o Tratado de TORDESILHAS. O Brasil de Tordesilhas era só uma faixa litorânea estreita, da Amazônia mais ou menos até Santa Catarina. Cuiabá, Manaus, Porto Velho seriam espanholas. Mas em 250 anos os BANDEIRANTES paulistas invadiram o interior, fundaram cidades e criaram fatos consumados. Em 1750, o Tratado de MADRI legalizou tudo pelo princípio do UTI POSSIDETIS: quem ocupa, é dono. É por isso que hoje falamos português em quase toda a América do Sul portuguesa.",
    falaFinal: "O Brasil não caiu do céu. Foi construído em 500 anos de expansão e diplomacia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Chuta antes: se Tordesilhas tivesse valido até hoje, cidades como Manaus, Cuiabá e Porto Velho seriam de qual país?",
    pergunta: "Sem a expansão bandeirante, essas cidades hoje seriam:",
    opcoes: [
      { id: "esp", titulo: "Territórios ESPANHÓIS", subtitulo: "estavam a oeste da linha", emoji: "🇪🇸", cor: "from-red-800 to-slate-950" },
      { id: "por", titulo: "Continuariam PORTUGUESAS", subtitulo: "Portugal descobriu tudo", emoji: "🇵🇹", cor: "from-emerald-800 to-slate-950" },
    ],
    respostaCerta: "esp",
    feedbackAcerto:
      "Exato! A linha de Tordesilhas passava aproximadamente por Belém–Laguna. Tudo a OESTE (Amazônia, Centro-Oeste, Sul de MT) era espanhol no papel. Só a ocupação bandeirante mudou isso.",
    feedbackErro:
      "Não. Tordesilhas dividiu o continente: leste era português, OESTE era espanhol. Manaus estava a oeste da linha. Só virou brasileira depois da expansão bandeirante + Tratado de Madri (1750).",
    falaFinal: "Regra do século XVI: quem estava a oeste, era da Espanha. Bandeirantes viraram esse jogo.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras que explicam a formação do Brasil. Cada card traz explicação, exemplo real e curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "tord",
        capa: "1. Tordesilhas",
        emoji: "📜",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "TRATADO DE TORDESILHAS (1494) foi um acordo entre Portugal e Espanha, mediado pelo Papa, dividindo o mundo em duas metades por um MERIDIANO IMAGINÁRIO a 370 léguas a oeste de Cabo Verde. Tudo a leste seria português; a oeste, espanhol.",
        exemplo:
          "Curiosidade: nenhum povo indígena, africano ou asiático foi consultado. Duas monarquias ibéricas 'dividiram' o planeta inteiro entre si — e o Papa Alexandre VI, chefe da Igreja Católica, ratificou. O tratado durou 256 anos até ser substituído por Madri.",
        fotoUrl: tordesilhas,
      },
      {
        id: "band",
        capa: "2. Bandeirantes",
        emoji: "🥾",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "BANDEIRANTES eram expedicionários paulistas que, entre os séculos XVII e XVIII, adentravam o interior do continente atrás de indígenas (para escravizar), ouro e pedras preciosas. Cada expedição durava meses ou anos e ia fundando arraiais.",
        exemplo:
          "Curiosidade: Cuiabá (MT), Goiás Velho, Vila Bela, e Ouro Preto (MG) nasceram assim. Domingos Jorge Velho e Anhanguera são nomes famosos. As bandeiras não tinham objetivo político direto — mas foram elas que 'esticaram' o Brasil até o Pacífico.",
        fotoUrl: bandeirantes,
      },
      {
        id: "uti",
        capa: "3. Uti possidetis",
        emoji: "⚖️",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "UTI POSSIDETIS é um princípio jurídico latino que significa 'quem ocupa, é dono'. Foi usado no TRATADO DE MADRI (1750) para reconhecer as terras que Portugal já havia ocupado no interior — mesmo que estivessem na parte espanhola de Tordesilhas.",
        exemplo:
          "Curiosidade: o diplomata brasileiro Alexandre de Gusmão (nascido em Santos) foi o cérebro por trás desse tratado. Ele convenceu a Espanha a ceder milhões de km² em troca de território estratégico ao sul (Colônia do Sacramento, atual Uruguai).",
        fotoUrl: tratado,
      },
      {
        id: "acre",
        capa: "4. Barão do Rio Branco",
        emoji: "🎖️",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "BARÃO DO RIO BRANCO (José Maria da Silva Paranhos Júnior) foi o diplomata que, entre 1895 e 1912, fechou as fronteiras modernas do Brasil SEM guerra — só na mesa de negociações. Resolveu disputas com Argentina, Bolívia, Peru, Colômbia e Guiana Francesa.",
        exemplo:
          "Curiosidade: o Acre foi o ÚLTIMO território incorporado ao Brasil, comprado da Bolívia em 1903 (Tratado de Petrópolis) por 2 milhões de libras esterlinas + a promessa de construir a ferrovia Madeira-Mamoré. Foi a última grande peça do quebra-cabeça.",
        fotoUrl: brasilAtual,
      },
    ],
    falaFinal: "Tordesilhas, bandeirantes, uti possidetis, Rio Branco. 4 nomes = 500 anos de mapa.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Cada card é um MARCO da formação territorial do Brasil. Toque em cada um pra ver a imagem e ouvir o episódio.",
    instrucao: "Toque nos 4 cards pra ouvir cada marco",
    mapaUrl: tordesilhas,
    pontos: [
      { id: "1494", x: 20, y: 30, emoji: "📜", cor: "from-amber-800 to-orange-950",
        titulo: "1494 — Tordesilhas",
        texto:
          "Portugal e Espanha assinam o tratado. Brasil português = uma faixa litorânea estreita de Belém a Laguna. Tudo o mais é da Espanha, no papel.",
        fotoUrl: tordesilhas },
      { id: "1600", x: 55, y: 45, emoji: "🥾", cor: "from-emerald-800 to-slate-950",
        titulo: "Séc. XVII–XVIII — Bandeirantes",
        texto:
          "Expedições paulistas invadem o interior atrás de indígenas e ouro. Fundam Cuiabá, Goiás, Ouro Preto. Portugal cria fatos consumados em terras espanholas.",
        fotoUrl: bandeirantes },
      { id: "1750", x: 45, y: 60, emoji: "⚖️", cor: "from-slate-700 to-slate-950",
        titulo: "1750 — Tratado de Madri",
        texto:
          "Alexandre de Gusmão negocia. Espanha reconhece a ocupação portuguesa pelo princípio do uti possidetis. Brasil ganha o formato quase atual.",
        fotoUrl: tratado },
      { id: "1903", x: 70, y: 75, emoji: "🎖️", cor: "from-sky-800 to-slate-950",
        titulo: "1903 — Aquisição do Acre",
        texto:
          "Barão do Rio Branco compra o Acre da Bolívia por 2 milhões de libras. É a última grande peça. Brasil chega ao formato atual com 8,5 milhões de km².",
        fotoUrl: brasilAtual },
    ],
    falaFinal: "500 anos, 4 marcos. Uma faixa vira continente.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de historiador pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O Tratado de Tordesilhas (1494) foi assinado entre:",
        fotoUrl: tordesilhas,
        cards: [
          { id: "a", emoji: "🇵🇹", titulo: "Portugal e Espanha", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇫🇷", titulo: "França e Inglaterra", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🇮🇹", titulo: "Itália e Alemanha", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Portugal e Espanha, mediado pelo Papa Alexandre VI.",
        feedbackErro: "França, Inglaterra, Itália e Alemanha nem tinham entrado na disputa em 1494. Foi PORTUGAL × ESPANHA." },
      { id: "q2", pergunta: "Papel dos BANDEIRANTES na formação do Brasil:",
        fotoUrl: bandeirantes,
        cards: [
          { id: "a", emoji: "🥾", titulo: "Ocupar o interior (fatos consumados)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "⚔️", titulo: "Vencer guerras contra a Espanha", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "📜", titulo: "Escrever tratados diplomáticos", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! Ocuparam o interior, fundaram cidades — a diplomacia depois legalizou tudo.",
        feedbackErro: "Não houve guerra Brasil × Espanha. Bandeirantes OCUPAVAM; diplomatas legalizavam." },
      { id: "q3", pergunta: "O princípio UTI POSSIDETIS significa:",
        fotoUrl: tratado,
        cards: [
          { id: "a", emoji: "⚖️", titulo: "Quem ocupa, é dono", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "💰", titulo: "Quem paga mais, é dono", cor: "from-amber-800 to-slate-950" },
          { id: "c", emoji: "⚔️", titulo: "Quem vence a guerra, é dono", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! 'Quem ocupa, é dono' — princípio latino usado no Tratado de Madri.",
        feedbackErro: "Não tem a ver com dinheiro ou guerra. UTI POSSIDETIS = 'quem ocupa, é dono'." },
      { id: "q4", pergunta: "Último grande território incorporado ao Brasil:",
        fotoUrl: brasilAtual,
        cards: [
          { id: "a", emoji: "🌳", titulo: "Acre (comprado em 1903)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🏔️", titulo: "Rio Grande do Sul", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🌊", titulo: "Rio de Janeiro", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso! ACRE, comprado da Bolívia por 2 milhões de libras esterlinas.",
        feedbackErro: "RS e RJ são muito mais antigos. O ACRE (1903) foi o último — comprado da Bolívia por 2 milhões de libras." },
    ],
    falaFinal: "4 acertos = historiador em formação.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil faz fronteira com 10 países da América do Sul (todos, exceto Chile e Equador). Marque os 3 estados brasileiros que fazem fronteira com o maior número de países.",
    instrucao: "Acenda os 3 estados de tríplice fronteira",
    missao: {
      tipo: "selecionar",
      siglas: ["AM", "AC", "RR"],
      pergunta: "Quais estados fazem tríplice fronteira?",
    },
    falaFinal:
      "AM, AC, RR — fronteira com Colômbia, Peru, Bolívia, Venezuela, Guiana e Suriname. O Norte é a face internacional do Brasil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize os 5 marcos da formação territorial do Brasil em ordem cronológica.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1494", emoji: "📜", rotulo: "1. Tordesilhas (1494)",
        descricao: "Portugal e Espanha dividem o mundo por um meridiano imaginário.", fotoUrl: tordesilhas },
      { id: "1600", emoji: "🥾", rotulo: "2. Ciclo das bandeiras (séc. XVII)",
        descricao: "Bandeirantes invadem o interior. Ouro em Minas Gerais.", fotoUrl: bandeirantes },
      { id: "1750", emoji: "⚖️", rotulo: "3. Tratado de Madri (1750)",
        descricao: "Uti possidetis legaliza a ocupação portuguesa do interior.", fotoUrl: tratado },
      { id: "1822", emoji: "🇧🇷", rotulo: "4. Independência (1822)",
        descricao: "Brasil se separa de Portugal com o formato já quase atual." },
      { id: "1903", emoji: "🎖️", rotulo: "5. Aquisição do Acre (1903)",
        descricao: "Barão do Rio Branco fecha as fronteiras modernas.", fotoUrl: brasilAtual },
    ],
    ordemCerta: ["1494", "1600", "1750", "1822", "1903"],
    feedbackAcerto: "Perfeito! 500 anos numa linha só.",
    feedbackErro: "Comece por Tordesilhas (1494). Depois bandeirantes, Madri, Independência, Acre.",
    falaFinal: "5 séculos, 5 marcos. Um mapa que hoje vale 8,5 milhões de km².",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Brasil",
    subtitulo: "Capítulo 1 — Formação Territorial",
    paragrafos: [
      { id: "p1",
        texto: "O TRATADO DE TORDESILHAS (1494) dividiu o mundo entre Portugal e Espanha por um MERIDIANO imaginário. O Brasil português era só uma faixa costeira.",
        chaves: ["TRATADO DE TORDESILHAS", "MERIDIANO"],
        definicoes: {
          "TRATADO DE TORDESILHAS": "Acordo de 1494 mediado pelo Papa Alexandre VI. Dividiu o mundo em duas metades entre Portugal e Espanha.",
          "MERIDIANO": "Linha imaginária vertical (norte-sul) usada para dividir territórios. Tordesilhas usou um meridiano a 370 léguas a oeste de Cabo Verde.",
        },
        fotoUrl: tordesilhas,
      },
      { id: "p2",
        texto: "Os BANDEIRANTES paulistas invadiram o interior nos séculos XVII e XVIII atrás de INDÍGENAS para escravizar e depois OURO. Fundaram cidades em terras oficialmente espanholas.",
        chaves: ["BANDEIRANTES", "INDÍGENAS", "OURO"],
        definicoes: {
          "BANDEIRANTES": "Expedicionários paulistas dos séculos XVII-XVIII. Suas expedições duravam meses ou anos. Nomes famosos: Anhanguera, Domingos Jorge Velho.",
          "INDÍGENAS": "Povos originários que os bandeirantes capturavam para escravizar em fazendas do sul. Milhares foram vitimados.",
          "OURO": "Descoberto em Minas Gerais em 1690, atraiu milhares de colonos. Foi o principal motor da ocupação do interior.",
        },
        fotoUrl: bandeirantes,
      },
      { id: "p3",
        texto: "O TRATADO DE MADRI (1750) aplicou o princípio UTI POSSIDETIS — 'quem ocupa, é dono' — e legalizou a expansão portuguesa. Alexandre de GUSMÃO negociou pela Coroa.",
        chaves: ["TRATADO DE MADRI", "UTI POSSIDETIS", "GUSMÃO"],
        definicoes: {
          "TRATADO DE MADRI": "Acordo de 1750 que substituiu Tordesilhas. Deu a Portugal os territórios que já havia ocupado no interior.",
          "UTI POSSIDETIS": "Princípio jurídico latino: 'quem ocupa, é dono'. Sem essa regra, o Brasil seria muito menor.",
          "GUSMÃO": "Alexandre de Gusmão, diplomata brasileiro nascido em Santos. Cérebro do Tratado de Madri.",
        },
        fotoUrl: tratado,
      },
      { id: "p4",
        texto: "O BARÃO DO RIO BRANCO fechou as fronteiras modernas SEM guerra, na mesa de negociações. O ACRE (1903) foi o último território incorporado.",
        chaves: ["BARÃO DO RIO BRANCO", "ACRE"],
        definicoes: {
          "BARÃO DO RIO BRANCO": "José Maria da Silva Paranhos Júnior (1845-1912). Diplomata que definiu as fronteiras atuais do Brasil.",
          "ACRE": "Comprado da Bolívia em 1903 pelo Tratado de Petrópolis. Custou 2 milhões de libras esterlinas + a ferrovia Madeira-Mamoré.",
        },
        fotoUrl: brasilAtual,
      },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "tord", emoji: "", titulo: "Tordesilhas", cor: "from-slate-800 to-slate-900" },
      { id: "band", emoji: "", titulo: "Bandeirantes", cor: "from-slate-800 to-slate-900" },
      { id: "madri", emoji: "", titulo: "Tratado de Madri", cor: "from-slate-800 to-slate-900" },
      { id: "uti", emoji: "", titulo: "Uti possidetis", cor: "from-slate-800 to-slate-900" },
      { id: "riobr", emoji: "", titulo: "Barão do Rio Branco", cor: "from-slate-800 to-slate-900" },
      { id: "acre", emoji: "", titulo: "Aquisição do Acre", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito histórico correto.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Tratado de 1494 que dividiu o mundo entre Portugal e Espanha por um meridiano imaginário.", cards, correta: "tord",
          feedbackAcerto: "Isso. 1494 + meridiano = TORDESILHAS.", feedbackErro: "É TORDESILHAS. Assinado em 1494 e mediado pelo Papa." },
        { id: "r2", pergunta: "Expedicionários paulistas que invadiram o interior atrás de indígenas e ouro nos séculos XVII e XVIII.", cards, correta: "band",
          feedbackAcerto: "Isso. Paulistas do interior = BANDEIRANTES.", feedbackErro: "São os BANDEIRANTES. Anhanguera é um nome famoso." },
        { id: "r3", pergunta: "Acordo de 1750 que substituiu Tordesilhas e reconheceu a ocupação portuguesa do interior.", cards, correta: "madri",
          feedbackAcerto: "Isso. 1750 substituindo Tordesilhas = TRATADO DE MADRI.", feedbackErro: "É o TRATADO DE MADRI. Substituiu Tordesilhas 256 anos depois." },
        { id: "r4", pergunta: "Princípio jurídico latino que significa 'quem ocupa, é dono'.", cards, correta: "uti",
          feedbackAcerto: "Isso. 'Quem ocupa, é dono' = UTI POSSIDETIS.", feedbackErro: "É UTI POSSIDETIS. Regra usada no Tratado de Madri." },
        { id: "r5", pergunta: "Diplomata que fechou as fronteiras modernas do Brasil sem guerra, entre 1895 e 1912.", cards, correta: "riobr",
          feedbackAcerto: "Isso. Diplomata das fronteiras = BARÃO DO RIO BRANCO.", feedbackErro: "É o BARÃO DO RIO BRANCO. Fechou tudo na mesa de negociações." },
        { id: "r6", pergunta: "Último grande território incorporado ao Brasil, comprado da Bolívia por 2 milhões de libras.", cards, correta: "acre",
          feedbackAcerto: "Isso. Comprado da Bolívia em 1903 = AQUISIÇÃO DO ACRE.", feedbackErro: "É a AQUISIÇÃO DO ACRE. Tratado de Petrópolis de 1903." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Historiador cartógrafo formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da expansão territorial: Brasil de Tordesilhas × Brasil atual.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "tord", rotulo: "Brasil de Tordesilhas (~20%)", emoji: "📜", percentual: 20, cor: "#b45309",
        descricao: "A faixa litorânea original de 1494. Ia mais ou menos de Belém (PA) até Laguna (SC).",
        exemplos: ["🏖️ Litoral", "⛪ Vilas antigas", "🍬 Engenhos de açúcar"] },
      { id: "ganhou", rotulo: "Território conquistado (~80%)", emoji: "🗺️", percentual: 80, cor: "#0284c7",
        descricao: "Amazônia, Centro-Oeste, Sul de MT, Acre. Ganho por bandeirantes + diplomacia (Madri e Rio Branco).",
        exemplos: ["🌳 Amazônia", "🌾 Cerrado", "🌲 Acre"] },
    ],
    falaFinal: "80% do Brasil foi conquistado depois de Tordesilhas. Sem bandeirantes e diplomacia, ficaríamos com um quinto.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Cartógrafo do Brasil.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Tratado que dividiu o mundo entre Portugal e Espanha em 1494:",
        opcoes: [
          { id: "a", texto: "Tratado de Madri", correta: false },
          { id: "b", texto: "Tratado de Tordesilhas", correta: true },
          { id: "c", texto: "Tratado de Petrópolis", correta: false },
        ],
        feedbackAcerto: "Isso! TORDESILHAS (1494), mediado pelo Papa.",
        feedbackErro: "Madri é 1750, Petrópolis é 1903. O de 1494 é TORDESILHAS." },
      { id: "av2", pergunta: "Princípio jurídico usado no Tratado de Madri (1750):",
        opcoes: [
          { id: "a", texto: "Uti possidetis (quem ocupa, é dono)", correta: true },
          { id: "b", texto: "Meridiano imaginário", correta: false },
          { id: "c", texto: "Direito de conquista militar", correta: false },
        ],
        feedbackAcerto: "Isso! UTI POSSIDETIS — quem ocupa, é dono.",
        feedbackErro: "Meridiano foi Tordesilhas. Não houve guerra. Madri usou UTI POSSIDETIS." },
      { id: "av3", pergunta: "Último grande território adquirido pelo Brasil:",
        opcoes: [
          { id: "a", texto: "Rio Grande do Sul", correta: false },
          { id: "b", texto: "Acre (1903)", correta: true },
          { id: "c", texto: "Minas Gerais", correta: false },
        ],
        feedbackAcerto: "Isso! ACRE, comprado da Bolívia em 1903.",
        feedbackErro: "MG e RS são muito mais antigos. O ACRE (1903) foi o último — comprado da Bolívia." },
    ],
    selo: { nome: "Cartógrafo do Brasil", subtitulo: "Insígnia do Explorador do Brasil", emoji: "🗺️", cor: "from-amber-800 to-orange-950" },
    falaFinal: "Insígnia conquistada! Você entende como o mapa do Brasil foi construído.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Cartógrafo do Brasil" },
};
