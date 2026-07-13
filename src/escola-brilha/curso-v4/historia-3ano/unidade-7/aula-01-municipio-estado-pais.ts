import type { AulaGeoV1 } from "../../types";
import imgMapaBrasil from "@/assets/historia-3ano/mapa-brasil-politico.jpg";
import imgPalacio from "@/assets/historia-3ano/palacio-governador.jpg";
import imgCongresso from "@/assets/historia-3ano/congresso-brasilia.jpg";
import imgInfografico from "@/assets/historia-3ano/infografico-municipio-estado-pais.jpg";
import imgPrefeitura from "@/assets/historia-3ano/prefeitura-real.jpg";
import imgCidade from "@/assets/historia-3ano/cidade-real.jpg";
import imgLivro from "@/assets/historia-3ano/livro-cidades.jpg";

/**
 * História · 3º Ano · Unidade 7 · Aula 01 (FECHAMENTO)
 * "O Município e o Estado: Organização Territorial"
 * Restaura a Página 7 (última) do Grande Livro das Cidades: O Grande Mapa do Brasil.
 * Visual: mapa cartográfico + fotografia real de sedes de poder.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-municipio-estado-pais",
  titulo: "O Município e o Estado: Organização Territorial",
  iconeTrilha: "🗺️",
  bncc: ["EF03HI11", "EF03HI12"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre o mapa político do Brasil. Cada cor é um ESTADO diferente. E dentro de cada estado, existem CENTENAS de municípios encaixados como peças de um quebra-cabeça.",
    mapaUrl: imgMapaBrasil,
    imagemDestaqueUrl: imgInfografico,
    aurora:
      "Pequeno Historiador, o Brasil tem 5.570 municípios espalhados por 26 estados + o Distrito Federal. Nenhum vive sozinho. Como será que essas peças se encaixam? Quem manda em cada nível?",
    falaFinal:
      "A resposta se chama ORGANIZAÇÃO FEDERATIVA: Município (menor) → Estado (médio) → País (maior). Cada nível tem seu chefe, sua sede e suas próprias leis.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes da explicação, palpite de investigador. Se um problema envolve uma rodovia que atravessa 4 cidades vizinhas, quem deve resolver?",
    pergunta: "Quem cuida do que ultrapassa a cidade?",
    fotoUrl: imgPalacio,
    opcoes: [
      {
        id: "estado",
        titulo: "O governo do ESTADO",
        subtitulo: "coordena várias cidades juntas",
        emoji: "🏛️",
        cor: "from-indigo-600 to-blue-800",
        fotoUrl: imgPalacio,
      },
      {
        id: "prefeitura",
        titulo: "A prefeitura sozinha",
        subtitulo: "resolve tudo dentro de casa",
        emoji: "🏘️",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgPrefeitura,
      },
    ],
    respostaCerta: "estado",
    feedbackAcerto:
      "Correto. Quando o problema ULTRAPASSA a cidade, quem cuida é o ESTADO. É o governador quem gerencia rodovias, hospitais regionais e segurança que envolvem vários municípios juntos.",
    feedbackErro:
      "A prefeitura só cuida do que está DENTRO do município. Rodovia entre cidades é responsabilidade do ESTADO — do governador.",
    falaFinal:
      "Guarde a regra: cada nível (município, estado, país) cuida do que só ele consegue resolver. É a DIVISÃO DE PODERES.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas fundamentais quando o historiador estuda como o Brasil se organiza. Cada caderno já está aberto com foto real e definição.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "municipio",
        capa: "Município",
        emoji: "🏘️",
        cor: "from-teal-600 to-emerald-800",
        fotoUrl: imgPrefeitura,
        conteudo:
          "MUNICÍPIO é a MENOR unidade administrativa com governo próprio. Tem prefeito (poder executivo), vereadores (poder legislativo) e sede na prefeitura. O Brasil tem 5.570 municípios.",
        exemplo: "Exemplo: São Paulo (SP), Ouro Preto (MG), Manaus (AM) — cada um é um município com seu prefeito.",
      },
      {
        id: "estado",
        capa: "Estado",
        emoji: "🏛️",
        cor: "from-indigo-600 to-blue-800",
        fotoUrl: imgPalacio,
        conteudo:
          "ESTADO é o AGRUPAMENTO de municípios vizinhos que compartilham leis regionais. Cada estado é liderado por um GOVERNADOR, com sede na CAPITAL do estado. O Brasil tem 26 estados + o Distrito Federal.",
        exemplo: "Exemplo: o estado de MINAS GERAIS tem 853 municípios, e sua capital (sede do governador) é Belo Horizonte.",
      },
      {
        id: "pais",
        capa: "País (Brasil)",
        emoji: "🇧🇷",
        cor: "from-yellow-500 to-green-700",
        fotoUrl: imgCongresso,
        conteudo:
          "PAÍS é a MAIOR unidade — o Brasil inteiro. Comandado pelo PRESIDENTE DA REPÚBLICA, com sede na capital federal, BRASÍLIA. As leis do país valem em todos os 5.570 municípios e 26 estados.",
        exemplo: "Exemplo: o Presidente trabalha no Palácio do Planalto, em Brasília. Leis federais valem de Roraima ao Rio Grande do Sul.",
      },
    ],
    falaFinal:
      "Município, Estado e País: três níveis, três chefes, três sedes. Essa é a estrutura FEDERATIVA do Brasil.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o mapa político do Brasil. Toque em cada ponto pra eu explicar como funciona aquele nível da organização territorial.",
    instrucao: "Toque em cada ponto do mapa pra ouvir a explicação",
    mapaUrl: imgMapaBrasil,
    pontos: [
      {
        id: "brasilia",
        x: 52,
        y: 55,
        emoji: "⭐",
        cor: "from-yellow-500 to-green-700",
        fotoUrl: imgCongresso,
        titulo: "1. BRASÍLIA — Capital Federal (país)",
        texto:
          "Estrela no centro do mapa. Sede do governo federal. Aqui trabalham o PRESIDENTE, os deputados e os senadores. É onde nascem as leis que valem em TODO o Brasil.",
      },
      {
        id: "capital-estadual",
        x: 68,
        y: 78,
        emoji: "🏛️",
        cor: "from-indigo-600 to-blue-800",
        fotoUrl: imgPalacio,
        titulo: "2. CAPITAL ESTADUAL (estado)",
        texto:
          "Cada estado tem sua própria capital, marcada por um ponto maior no mapa. Ali fica o palácio do GOVERNADOR e a assembleia legislativa. Ex: São Paulo capital, Salvador, Curitiba.",
      },
      {
        id: "municipios",
        x: 25,
        y: 40,
        emoji: "🏘️",
        cor: "from-teal-600 to-emerald-800",
        fotoUrl: imgPrefeitura,
        titulo: "3. MUNICÍPIOS (menores unidades)",
        texto:
          "Cada pedacinho colorido dentro de um estado é um MUNICÍPIO. São 5.570 no total. Cada um tem sua prefeitura, seu prefeito e seus vereadores.",
      },
      {
        id: "limites",
        x: 30,
        y: 20,
        emoji: "📏",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgMapaBrasil,
        titulo: "4. LIMITES estaduais e municipais",
        texto:
          "As linhas grossas separam estados; as linhas finas separam municípios. Cada linha foi definida por LEI ao longo da história — e é ali que a autoridade de um chefe termina e a de outro começa.",
      },
    ],
    falaFinal:
      "Brasília, capitais estaduais, municípios e limites: quatro elementos que organizam TODO o território brasileiro. É o mapa do PODER.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Três perguntas de verificação. Cada uma testa se você associa corretamente cada nível ao seu chefe e função.",
    instrucao: "Toque no card correto pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem é o chefe do poder executivo de um MUNICÍPIO?",
        fotoUrl: imgPrefeitura,
        cards: [
          { id: "pf", emoji: "🏘️", titulo: "Prefeito", cor: "from-teal-600 to-emerald-800" },
          { id: "gv", emoji: "🏛️", titulo: "Governador", cor: "from-indigo-600 to-blue-800" },
          { id: "ps", emoji: "🇧🇷", titulo: "Presidente", cor: "from-yellow-500 to-green-700" },
        ],
        correta: "pf",
        feedbackAcerto:
          "Correto. O PREFEITO comanda o executivo municipal. Trabalha na prefeitura e cuida da cidade dele.",
        feedbackErro:
          "Governador cuida do estado; presidente cuida do país. Quem manda no município é o PREFEITO.",
      },
      {
        id: "q2",
        pergunta: "Como chamamos a cidade mais importante de um estado, onde fica o palácio do governador?",
        fotoUrl: imgPalacio,
        cards: [
          { id: "ca", emoji: "⭐", titulo: "Capital", cor: "from-indigo-600 to-blue-800" },
          { id: "in", emoji: "🏘️", titulo: "Distrito comercial", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "ca",
        feedbackAcerto:
          "Exato. CAPITAL é a sede do governo estadual. É onde o governador trabalha e as leis do estado são criadas.",
        feedbackErro:
          "Distrito comercial é sobre lojas. A cidade sede do governo do estado se chama CAPITAL.",
      },
      {
        id: "q3",
        pergunta: "Em qual cidade fica a sede do governo federal do Brasil?",
        fotoUrl: imgCongresso,
        cards: [
          { id: "br", emoji: "⭐", titulo: "Brasília", cor: "from-yellow-500 to-green-700" },
          { id: "sp", emoji: "🏙️", titulo: "São Paulo", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "br",
        feedbackAcerto:
          "Certeza. BRASÍLIA é a capital federal desde 1960. Ali ficam o Presidente, o Congresso e o Supremo Tribunal Federal.",
        feedbackErro:
          "São Paulo é a maior cidade, mas não é a capital federal. Desde 1960, a sede do governo do Brasil é BRASÍLIA.",
      },
    ],
    falaFinal:
      "Radar afinado. Você já domina: Prefeito → Município, Governador → Estado, Presidente → País.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou ativar três interruptores em cima do infográfico: um pra MUNICÍPIO, um pra ESTADO e um pra PAÍS. Veja como cada nível se encaixa dentro do outro, como bonecas russas.",
    instrucao: "Toque nos interruptores pra ver cada nível",
    mapaUrl: imgInfografico,
    camadas: [
      {
        id: "municipio",
        rotulo: "Município",
        emoji: "🏘️",
        cor: "from-teal-600 to-emerald-800",
        rect: { x: 35, y: 65, w: 30, h: 30 },
        descricao:
          "MUNICÍPIO: menor círculo, no centro. Chefe: Prefeito. Sede: Prefeitura. Cuida de escolas municipais, iluminação, coleta de lixo, asfalto, parques locais.",
      },
      {
        id: "estado",
        rotulo: "Estado",
        emoji: "🏛️",
        cor: "from-indigo-600 to-blue-800",
        rect: { x: 25, y: 30, w: 50, h: 55 },
        descricao:
          "ESTADO: círculo médio. Chefe: Governador. Sede: Capital estadual. Cuida de rodovias estaduais, hospitais regionais, segurança pública (polícia militar), escolas estaduais.",
      },
      {
        id: "pais",
        rotulo: "País",
        emoji: "🇧🇷",
        cor: "from-yellow-500 to-green-700",
        rect: { x: 0, y: 0, w: 100, h: 100 },
        descricao:
          "PAÍS: maior círculo, engloba tudo. Chefe: Presidente da República. Sede: Brasília. Cuida das leis federais, das forças armadas, da moeda (real), das relações com outros países.",
      },
    ],
    falaFinal:
      "Três camadas encaixadas: cada município mora dentro de um estado; cada estado mora dentro do Brasil. É a estrutura FEDERATIVA em ação.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos ordenar as divisões territoriais do Brasil da MENOR pra MAIOR. Comece pela sua rua e chegue até o país inteiro.",
    instrucao: "Toque nas etapas na ordem certa (da menor pra maior)",
    pergunta: "Como o território brasileiro se organiza da menor pra maior unidade?",
    paradas: [
      {
        id: "bairro",
        emoji: "🏠",
        rotulo: "1. Bairro",
        fotoUrl: imgCidade,
        descricao:
          "Etapa 1: BAIRRO é um pedaço da cidade — ruas, casas, escolas próximas. Sua casa e seu colégio estão dentro de um bairro.",
      },
      {
        id: "municipio",
        emoji: "🏘️",
        rotulo: "2. Município",
        fotoUrl: imgPrefeitura,
        descricao:
          "Etapa 2: MUNICÍPIO agrupa vários bairros dentro do mesmo governo. Tem prefeito, câmara de vereadores e prefeitura. Ex: cidade de Campinas.",
      },
      {
        id: "estado",
        emoji: "🏛️",
        rotulo: "3. Estado",
        fotoUrl: imgPalacio,
        descricao:
          "Etapa 3: ESTADO agrupa centenas de municípios vizinhos. Tem governador, assembleia legislativa e uma CAPITAL. Ex: estado de São Paulo, com 645 municípios.",
      },
      {
        id: "pais",
        emoji: "🇧🇷",
        rotulo: "4. País (Brasil)",
        fotoUrl: imgCongresso,
        descricao:
          "Etapa 4: PAÍS reúne todos os 26 estados + o Distrito Federal. É o Brasil inteiro, comandado pelo presidente e com sede em Brasília.",
      },
    ],
    ordemCerta: ["bairro", "municipio", "estado", "pais"],
    feedbackAcerto:
      "Ordem perfeita. Bairro → Município → Estado → País. Você mora em todos os quatro ao mesmo tempo, uns dentro dos outros.",
    feedbackErro:
      "Essa não é a próxima etapa. Pense: o que está DENTRO do bairro? E o que ENGLOBA vários estados?",
    falaFinal:
      "Você acabou de mapear a ESTRUTURA FEDERATIVA do Brasil. É o mapa da autoridade — do prefeito ao presidente.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Silêncio agora. Leia a Página 7 (a ÚLTIMA!) do Grande Livro das Cidades com seus próprios olhos e toque nas palavras destacadas quando quiser a definição.",
    tituloLivro: "📜 O Grande Livro das Cidades",
    subtitulo: "Página 7 — O Grande Mapa da Integração",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Nenhum município vive sozinho. Ele faz parte de uma organização maior. O Brasil se divide em três níveis principais: MUNICÍPIO (menor), ESTADO (médio) e PAÍS (maior). Cada nível tem seu próprio chefe, sua sede e suas próprias leis.",
        chaves: ["município", "estado", "país"],
        definicoes: {
          município:
            "Menor unidade administrativa com governo próprio. O Brasil tem 5.570 municípios, cada um com prefeito e vereadores.",
          estado:
            "Agrupamento de municípios vizinhos que compartilham leis regionais. O Brasil tem 26 estados + o Distrito Federal.",
          país:
            "Maior unidade — o Brasil inteiro. Comandado pelo Presidente, com sede em Brasília.",
        },
        fotoUrl: imgInfografico,
      },
      {
        id: "p2",
        texto:
          "O MUNICÍPIO é o núcleo mais próximo da sua vida: cuida das escolas municipais, do transporte urbano, da coleta de lixo, da iluminação, dos parques e da limpeza das ruas. Seu chefe é o PREFEITO, escolhido pelo voto direto dos moradores.",
        chaves: ["prefeito"],
        definicoes: {
          prefeito:
            "Chefe do poder executivo municipal, eleito pelo voto direto. Trabalha na prefeitura e cuida da cidade.",
        },
        fotoUrl: imgPrefeitura,
      },
      {
        id: "p3",
        texto:
          "O ESTADO reúne centenas de municípios sob a liderança de um GOVERNADOR. Sua sede fica na CAPITAL do estado. O governo estadual cuida de rodovias regionais, hospitais especializados, segurança pública (polícia militar) e escolas estaduais.",
        chaves: ["governador", "capital"],
        definicoes: {
          governador:
            "Chefe do poder executivo estadual, eleito pelo voto. Trabalha no palácio do governo, na capital do estado.",
          capital:
            "Cidade principal de um estado, onde fica a sede do governo estadual e a assembleia legislativa.",
        },
        fotoUrl: imgPalacio,
      },
      {
        id: "p4",
        texto:
          "Acima de tudo está o PAÍS, o Brasil inteiro, comandado pelo PRESIDENTE DA REPÚBLICA a partir de BRASÍLIA. Suas leis valem em todos os 5.570 municípios e 26 estados. Essa organização em três níveis se chama FEDERAÇÃO — e é ela que garante ordem e integração no Brasil.",
        chaves: ["presidente", "federação"],
        definicoes: {
          presidente:
            "Chefe do poder executivo do país, eleito pelo voto direto. Trabalha no Palácio do Planalto, em Brasília.",
          federação:
            "Sistema de governo em que municípios, estados e país compartilham poderes de forma organizada. É o modelo do Brasil.",
        },
        fotoUrl: imgCongresso,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com suas próprias palavras, como o Brasil se organiza do bairro ao presidente.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão do cartógrafo político. Cada rodada mostra uma responsabilidade. Você tem que classificar rápido: é do MUNICÍPIO (prefeito), do ESTADO (governador) ou do PAÍS (presidente)?",
    instrucao: "⏱️ Leia a pista e toque na classificação correta antes do tempo acabar",
    duracaoSegundos: 20,
    pecas: [
      { id: "mu", emoji: "🏘️", rotulo: "Município" },
      { id: "es", emoji: "🏛️", rotulo: "Estado" },
      { id: "pa", emoji: "🇧🇷", rotulo: "País" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Escola municipal do bairro", emoji: "🏫", cor: "from-teal-600 to-emerald-800" },
        municipioB: { nome: "Coleta de lixo diária", emoji: "🚛", cor: "from-emerald-500 to-teal-700" },
        contexto:
          "Escola primária no bairro e caminhão de lixo passando toda semana. De quem é a responsabilidade?",
        pecaCertaId: "mu",
        fotoUrl: imgPrefeitura,
        feedbackAcerto: "Correto. Escola municipal e coleta de lixo = MUNICÍPIO. O prefeito responde por essas duas.",
        feedbackErro: "Escolas municipais e coleta de lixo são responsabilidade do MUNICÍPIO — do prefeito.",
      },
      {
        id: "r2",
        municipioA: { nome: "Rodovia estadual entre 4 cidades", emoji: "🛣️", cor: "from-indigo-600 to-blue-800" },
        municipioB: { nome: "Polícia Militar", emoji: "👮", cor: "from-blue-500 to-indigo-700" },
        contexto:
          "Rodovia BR ou SP-XXX que liga cidades vizinhas + Polícia Militar patrulhando. De quem é a responsabilidade?",
        pecaCertaId: "es",
        fotoUrl: imgPalacio,
        feedbackAcerto: "Correto. Rodovia entre cidades e PM = ESTADO. O governador é o chefe.",
        feedbackErro: "Rodovias estaduais e Polícia Militar são responsabilidade do ESTADO — do governador.",
      },
      {
        id: "r3",
        municipioA: { nome: "Forças Armadas e moeda (Real)", emoji: "🪙", cor: "from-yellow-500 to-green-700" },
        municipioB: { nome: "Leis federais e passaporte", emoji: "📘", cor: "from-green-500 to-yellow-700" },
        contexto:
          "Exército, marinha, moeda oficial e passaporte pra viajar ao exterior. De quem é a responsabilidade?",
        pecaCertaId: "pa",
        fotoUrl: imgCongresso,
        feedbackAcerto: "Correto. Forças Armadas, moeda, passaporte = PAÍS. O presidente é o chefe.",
        feedbackErro: "Moeda, passaporte e exército são responsabilidade do PAÍS — do presidente, em Brasília.",
      },
      {
        id: "r4",
        municipioA: { nome: "Buraco na rua do meu bairro", emoji: "🕳️", cor: "from-teal-600 to-emerald-800" },
        municipioB: { nome: "Iluminação da praça", emoji: "💡", cor: "from-emerald-500 to-teal-700" },
        contexto:
          "Rua com buracos e praça sem iluminação. De quem cobrar?",
        pecaCertaId: "mu",
        fotoUrl: imgCidade,
        feedbackAcerto: "Correto. Ruas locais e iluminação de praça = MUNICÍPIO. Reclame na prefeitura.",
        feedbackErro: "Buraco na rua e iluminação de praça são do MUNICÍPIO — do prefeito e dos vereadores.",
      },
    ],
    falaFinal:
      "Missão concluída. Você sabe exatamente a QUEM cobrar cada tipo de serviço público.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos fechar a aula (e o CURSO INTEIRO!) com duas fatias: o poder LOCAL (município) e o poder maior (estado + país). Toque em cada uma pra revisar.",
    instrucao: "Toque nas fatias pra ouvir sobre cada esfera de poder",
    fotoUrl: imgInfografico,
    fatias: [
      {
        id: "local",
        rotulo: "Poder Local (Município)",
        emoji: "🏘️",
        percentual: 40,
        cor: "#0d9488",
        descricao:
          "Menor unidade. Chefe: Prefeito. Sede: Prefeitura. Cuida do dia a dia da cidade: escolas municipais, coleta de lixo, iluminação, parques, transporte urbano. É o poder mais próximo do morador.",
        exemplos: ["Escola municipal", "Coleta de lixo", "Iluminação de rua", "Parque público"],
        fotoUrl: imgPrefeitura,
      },
      {
        id: "amplo",
        rotulo: "Estado + País",
        emoji: "🏛️🇧🇷",
        percentual: 60,
        cor: "#4338ca",
        descricao:
          "Poder regional (Estado, governador, capital estadual) + poder nacional (País, Presidente, Brasília). Cuidam do que ultrapassa a cidade: rodovias, hospitais regionais, polícia militar, forças armadas, leis federais, moeda.",
        exemplos: ["Rodovias estaduais", "Polícia Militar", "Leis federais", "Exército e moeda (Real)"],
        fotoUrl: imgPalacio,
      },
    ],
    falaFinal:
      "Duas fatias encaixadas: o município cuida do local; estado e país cuidam do que ultrapassa fronteiras. É o BRASIL FEDERATIVO.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa do curso INTEIRO. 3 perguntas de certificação final. Se acertar, você restaura a sétima e ÚLTIMA página do Grande Livro das Cidades e ganha a CHAVE DE OURO DAS CIDADES.",
    instrucao: "Responda as 3 perguntas de certificação final",
    fotoUrl: imgLivro,
    perguntas: [
      {
        id: "q1",
        pergunta: "Como chamamos a cidade mais importante de um estado, onde fica a sede do governo estadual e o Governador trabalha?",
        fotoUrl: imgPalacio,
        opcoes: [
          { id: "a", texto: "Capital.", correta: true },
          { id: "b", texto: "Distrito comercial." },
        ],
        feedbackAcerto:
          "Certificado. A capital centraliza as decisões políticas e a administração do estado.",
        feedbackErro:
          "Distrito comercial é sobre lojas. A cidade sede do governo do estado se chama CAPITAL.",
      },
      {
        id: "q2",
        pergunta: "Um morador precisa reclamar sobre uma rodovia que liga 4 cidades vizinhas. Ele deve procurar a prefeitura ou o governo do Estado?",
        fotoUrl: imgMapaBrasil,
        opcoes: [
          { id: "a", texto: "O governo do Estado, responsável por gerenciar serviços que passam por vários municípios.", correta: true },
          { id: "b", texto: "A prefeitura, que resolve tudo dentro e fora do município." },
        ],
        feedbackAcerto:
          "Correto. Prefeitura só cuida DENTRO da cidade. Rodovia entre cidades = ESTADO.",
        feedbackErro:
          "Prefeitura só age dentro do município. Rodovia entre cidades é do ESTADO — do governador.",
      },
      {
        id: "q3",
        pergunta: "Em qual cidade fica a sede do governo federal do Brasil, onde trabalham o Presidente e o Congresso Nacional?",
        fotoUrl: imgCongresso,
        opcoes: [
          { id: "a", texto: "Brasília (Distrito Federal).", correta: true },
          { id: "b", texto: "Rio de Janeiro." },
        ],
        feedbackAcerto:
          "🏆 CURSO CONCLUÍDO! Brasília é a capital federal desde 1960 — sede do Presidente, do Congresso e do STF.",
        feedbackErro:
          "Rio de Janeiro foi capital até 1960. Desde então, a capital federal é BRASÍLIA — sede do Presidente.",
      },
    ],
    selo: {
      nome: "🔑 A Chave de Ouro das Cidades",
      subtitulo: "SÉTIMA e ÚLTIMA página restaurada — Grande Livro das Cidades COMPLETO!",
      emoji: "🔑",
      cor: "from-yellow-400 via-amber-500 to-orange-600",
      fotoUrl: imgLivro,
    },
    falaFinal:
      "🎉 CURSO CONCLUÍDO! Você restaurou as 7 páginas do Grande Livro das Cidades. Agora entende como o município se organiza, se conecta ao campo, cria patrimônio, recebe povos, cuida do meio ambiente e faz parte do Brasil inteiro. Parabéns, Pequeno Historiador!",
  },

  recompensa: { xp: 300, moedas: 200, medalha: "🔑 Guardião das Cidades" },
};
