import type { AulaGeoV1 } from "../../types";
import { url as imgEnchente } from "@/assets/historia-3ano/enchente-urbana.jpg.asset.json";
import { url as imgRioCanalizado } from "@/assets/historia-3ano/rio-canalizado.jpg.asset.json";
import { url as imgParque } from "@/assets/historia-3ano/parque-ecologico.jpg.asset.json";
import { url as imgColeta } from "@/assets/historia-3ano/coleta-seletiva.jpg.asset.json";
import { url as imgInfografico } from "@/assets/historia-3ano/infografico-sustentabilidade.jpg.asset.json";
import { url as imgCampo } from "@/assets/historia-3ano/campo-real.jpg.asset.json";
import { url as imgCidade } from "@/assets/historia-3ano/cidade-real.jpg.asset.json";
import { url as imgLivro } from "@/assets/historia-3ano/livro-cidades.jpg.asset.json";
/**
 * História · 3º Ano · Unidade 6 · Aula 01
 * "O Município e o Meio Ambiente"
 * Restaura a Página 6 do Grande Livro das Cidades: O Painel da Natureza Protegida.
 * Visual: fotografia real de impactos ambientais + infográfico técnico.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-municipio-e-meio-ambiente",
  titulo: "O Município e o Meio Ambiente",
  iconeTrilha: "🌱",
  bncc: ["EF03HI11", "EF03HI12"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre esta fotografia. Você está vendo o que acontece quando o município IMPERMEABILIZA (cobre de asfalto) o solo e retira toda a vegetação: um único temporal alaga ruas inteiras.",
    mapaUrl: imgEnchente,
    imagemDestaqueUrl: imgInfografico,
    aurora:
      "Pequeno Historiador, há cem anos onde hoje passa uma avenida havia um rio limpo com árvores nas margens. Hoje, a mesma rua vira RIO quando chove forte. Por quê? Como a cidade cresceu SEM destruir a natureza?",
    falaFinal:
      "A resposta se chama SUSTENTABILIDADE: crescer sem esgotar recursos, preservar áreas verdes e devolver espaço pros rios. Sem isso, o município paga em ENCHENTES e CALOR extremo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes da explicação, palpite de investigador. Por que uma cidade sem árvores e com muito asfalto sofre mais com enchente?",
    pergunta: "Qual é a causa das enchentes urbanas?",
    fotoUrl: imgRioCanalizado,
    opcoes: [
      {
        id: "impermeavel",
        titulo: "Solo impermeabilizado",
        subtitulo: "asfalto impede a chuva de entrar no chão",
        emoji: "🏗️",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgRioCanalizado,
      },
      {
        id: "azar",
        titulo: "É só azar da natureza",
        subtitulo: "não tem nada que a cidade possa fazer",
        emoji: "🎲",
        cor: "from-red-500 to-red-700",
        fotoUrl: imgEnchente,
      },
    ],
    respostaCerta: "impermeavel",
    feedbackAcerto:
      "Correto. Não é azar. Quando o solo natural é COBERTO por asfalto, a chuva não infiltra — escorre toda pra rua. Bueiros não dão conta e a cidade alaga.",
    feedbackErro:
      "A natureza não tem culpa. É a IMPERMEABILIZAÇÃO do solo (asfalto por toda parte) e a falta de árvores que causam a enchente.",
    falaFinal:
      "Guarde a regra: solo natural absorve água; asfalto rejeita. Cidade sem áreas verdes = cidade que alaga.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas essenciais quando o historiador estuda a relação da cidade com a natureza. Cada caderno já está aberto com foto real e definição.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "impacto",
        capa: "Impacto Ambiental",
        emoji: "⚠️",
        cor: "from-red-600 to-orange-800",
        fotoUrl: imgEnchente,
        conteudo:
          "IMPACTO AMBIENTAL é toda MUDANÇA na natureza causada pela ação humana. Pode ser positiva (parque novo) ou negativa (rio poluído). No município, os impactos mais comuns são: desmatamento, canalização de rios, asfalto excessivo e lixo mal descartado.",
        exemplo: "Exemplo: derrubar uma mata pra construir estacionamento é um IMPACTO AMBIENTAL negativo.",
      },
      {
        id: "sustentabilidade",
        capa: "Sustentabilidade",
        emoji: "🌱",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgParque,
        conteudo:
          "SUSTENTABILIDADE é USAR os recursos naturais HOJE sem esgotá-los pra amanhã. Uma cidade sustentável tem parques, arborização nas ruas, coleta seletiva, transporte público eficiente e áreas de preservação ao redor dos rios.",
        exemplo: "Exemplo: um PARQUE LINEAR ao longo do rio é sustentável — protege a água e serve de lazer.",
      },
      {
        id: "app",
        capa: "Área de Preservação (APP)",
        emoji: "🌳",
        cor: "from-green-600 to-emerald-800",
        fotoUrl: imgParque,
        conteudo:
          "ÁREA DE PRESERVAÇÃO PERMANENTE (APP) é uma faixa de vegetação PROTEGIDA POR LEI ao redor de rios, nascentes, encostas de morro e mangues. Ninguém pode construir ali. Serve pra proteger a água e prevenir desabamentos.",
        exemplo: "Exemplo: a MATA CILIAR (nas margens do rio) é uma APP. Protege contra erosão e enchente.",
      },
    ],
    falaFinal:
      "Impacto, Sustentabilidade e APP: o vocabulário técnico do meio ambiente urbano. Vamos usar essas três palavras o tempo inteiro.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o infográfico que compara duas escolhas do município: à ESQUERDA, o caminho do IMPACTO NEGATIVO; à DIREITA, o caminho da SUSTENTABILIDADE. Toque em cada ponto pra eu explicar.",
    instrucao: "Toque em cada ponto do infográfico pra ouvir a explicação",
    mapaUrl: imgInfografico,
    pontos: [
      {
        id: "fabrica",
        x: 20,
        y: 15,
        emoji: "🏭",
        cor: "from-red-600 to-orange-800",
        fotoUrl: imgRioCanalizado,
        titulo: "1. FÁBRICA sem filtro — impacto negativo",
        texto:
          "Chaminé lançando fumaça sem filtro no ar. Polui o ar da cidade, causa doenças respiratórias e contribui pro aquecimento. Impacto AMBIENTAL grave.",
      },
      {
        id: "arvore-seca",
        x: 20,
        y: 55,
        emoji: "🌳",
        cor: "from-red-600 to-orange-800",
        fotoUrl: imgEnchente,
        titulo: "2. Árvore seca / desmatamento",
        texto:
          "Quando a cidade derruba matas e não replanta, o solo perde vida, a temperatura sobe, e a chuva não é mais absorvida. Resultado: alagamentos e ilhas de calor.",
      },
      {
        id: "solar",
        x: 80,
        y: 15,
        emoji: "☀️",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgParque,
        titulo: "3. ENERGIA SOLAR — ação sustentável",
        texto:
          "Painéis solares em escolas e prédios públicos. Geram energia limpa do sol, reduzem a conta de luz e não poluem. Município sustentável investe nisso.",
      },
      {
        id: "reciclagem",
        x: 80,
        y: 55,
        emoji: "♻️",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgColeta,
        titulo: "4. COLETA SELETIVA — ação sustentável",
        texto:
          "Lixeiras coloridas: azul (papel), vermelha (plástico), verde (vidro), amarela (metal). Reciclagem reduz o lixo enviado a aterros e gera renda pra cooperativas.",
      },
    ],
    falaFinal:
      "Quatro pontos, dois caminhos. Toda decisão da prefeitura escolhe entre IMPACTO negativo ou SUSTENTABILIDADE. É por isso que votar em quem cuida do meio ambiente importa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Três perguntas de verificação. Cada uma testa se você classifica corretamente uma ação municipal.",
    instrucao: "Toque no card correto pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Asfaltar toda a margem de um rio, retirando as árvores, é o quê?",
        fotoUrl: imgRioCanalizado,
        cards: [
          { id: "im", emoji: "⚠️", titulo: "Impacto Negativo", cor: "from-red-600 to-orange-800" },
          { id: "su", emoji: "🌱", titulo: "Ação Sustentável", cor: "from-emerald-600 to-teal-800" },
        ],
        correta: "im",
        feedbackAcerto:
          "Correto. É IMPACTO NEGATIVO. Sem a mata ciliar, o rio sofre erosão, a água polui e as enchentes aumentam.",
        feedbackErro:
          "Retirar vegetação e asfaltar o rio é o oposto de sustentável. É IMPACTO NEGATIVO grave.",
      },
      {
        id: "q2",
        pergunta: "Criar um parque ecológico urbano com trilha de madeira e árvores nativas é o quê?",
        fotoUrl: imgParque,
        cards: [
          { id: "im", emoji: "⚠️", titulo: "Impacto Negativo", cor: "from-red-600 to-orange-800" },
          { id: "su", emoji: "🌱", titulo: "Ação Sustentável", cor: "from-emerald-600 to-teal-800" },
        ],
        correta: "su",
        feedbackAcerto:
          "Exato. Parque ecológico é AÇÃO SUSTENTÁVEL — protege o solo, absorve chuva, resfria a cidade e serve de lazer.",
        feedbackErro:
          "Parque com árvores nativas é o oposto de impacto. É AÇÃO SUSTENTÁVEL, exemplo de cidade que cresce sem destruir.",
      },
      {
        id: "q3",
        pergunta: "Instalar lixeiras coloridas e enviar o material a cooperativas de reciclagem é o quê?",
        fotoUrl: imgColeta,
        cards: [
          { id: "im", emoji: "⚠️", titulo: "Impacto Negativo", cor: "from-red-600 to-orange-800" },
          { id: "su", emoji: "🌱", titulo: "Ação Sustentável", cor: "from-emerald-600 to-teal-800" },
        ],
        correta: "su",
        feedbackAcerto:
          "Certeza. COLETA SELETIVA é ação SUSTENTÁVEL — reduz aterros, gera renda e evita entupimento de bueiros.",
        feedbackErro:
          "Reciclagem reduz lixo e gera renda. É AÇÃO SUSTENTÁVEL fundamental pra qualquer município moderno.",
      },
    ],
    falaFinal:
      "Radar afinado. Você classifica qualquer ação municipal como impacto negativo ou sustentável.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou ativar dois interruptores em cima do infográfico: um destaca as AÇÕES NEGATIVAS da cidade, outro destaca as AÇÕES SUSTENTÁVEIS. Veja como cada escolha muda o futuro do município.",
    instrucao: "Toque nos interruptores pra ver cada tipo de ação",
    mapaUrl: imgInfografico,
    camadas: [
      {
        id: "negativo",
        rotulo: "Impacto Negativo",
        emoji: "⚠️",
        cor: "from-red-600 to-orange-800",
        rect: { x: 0, y: 0, w: 50, h: 100 },
        descricao:
          "AÇÕES NEGATIVAS: chaminé sem filtro, desmatamento, lixo no rio, rio canalizado em concreto, solo cheio de rachaduras. Consequência: enchentes, doenças, calor extremo e perda de qualidade de vida.",
      },
      {
        id: "sustentavel",
        rotulo: "Sustentável",
        emoji: "🌱",
        cor: "from-emerald-600 to-teal-800",
        rect: { x: 50, y: 0, w: 50, h: 100 },
        descricao:
          "AÇÕES SUSTENTÁVEIS: energia solar, árvores plantadas, reciclagem organizada, rios preservados com mata ciliar. Consequência: cidade mais fresca, ar limpo, menos enchente e mais saúde.",
      },
    ],
    falaFinal:
      "Dois interruptores, dois futuros. A prefeitura escolhe todo dia entre um e outro — e cada morador ajuda a decidir com pequenas ações em casa.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Vamos rastrear a história ambiental de um rio urbano típico do Brasil. Organize as 4 fases, da mais antiga pra mais moderna.",
    instrucao: "Toque nas etapas na ordem certa (do início ao presente)",
    pergunta: "Como um rio urbano brasileiro mudou ao longo do tempo?",
    paradas: [
      {
        id: "natural",
        emoji: "🌊",
        rotulo: "1. Rio natural (1900)",
        fotoUrl: imgCampo,
        descricao:
          "Etapa 1: rio limpo com curvas naturais, margens cheias de árvores (mata ciliar), peixes abundantes. Moradores usam a água pra beber e lavar roupa.",
      },
      {
        id: "poluicao",
        emoji: "🏭",
        rotulo: "2. Poluição industrial (1950)",
        fotoUrl: imgRioCanalizado,
        descricao:
          "Etapa 2: fábricas se instalam nas margens sem filtro. Rio começa a ficar escuro, peixes somem, moradores param de usar a água.",
      },
      {
        id: "canalizacao",
        emoji: "🏗️",
        rotulo: "3. Canalização (1980)",
        fotoUrl: imgRioCanalizado,
        descricao:
          "Etapa 3: prefeitura decide COBRIR o rio de concreto pra dar espaço a avenidas. Sem árvores, sem margem natural. Enchentes começam a aparecer.",
      },
      {
        id: "restauracao",
        emoji: "🌳",
        rotulo: "4. Parque linear (hoje)",
        fotoUrl: imgParque,
        descricao:
          "Etapa 4: cidade percebe o erro. Cria PARQUE LINEAR ao longo do rio, replanta árvores, trata o esgoto. Enchentes diminuem, biodiversidade volta.",
      },
    ],
    ordemCerta: ["natural", "poluicao", "canalizacao", "restauracao"],
    feedbackAcerto:
      "Linha do tempo perfeita. Natural → Poluído → Canalizado → Restaurado. É o caminho de MUITOS rios brasileiros.",
    feedbackErro:
      "Essa não é a próxima fase. Pense: o que veio ANTES da fábrica? E o que só existe HOJE, com o município mais consciente?",
    falaFinal:
      "Você acabou de mapear 100 ANOS DE HISTÓRIA AMBIENTAL de um rio urbano. Mostra que erros podem ser reparados — se houver vontade política.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Silêncio agora. Leia a Página 6 do Grande Livro das Cidades com seus próprios olhos e toque nas palavras destacadas quando quiser a definição.",
    tituloLivro: "📜 O Grande Livro das Cidades",
    subtitulo: "Página 6 — O Painel da Natureza Protegida",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Toda vez que uma cidade cresce, ela ALTERA a paisagem natural. Árvores são derrubadas, rios são canalizados, o solo é coberto de asfalto. A essa mudança causada pela ação humana chamamos de IMPACTO AMBIENTAL — que pode ser positivo ou negativo.",
        chaves: ["impacto ambiental"],
        definicoes: {
          "impacto ambiental":
            "Toda mudança na natureza causada pela ação humana. Pode ser positiva (plantar árvores) ou negativa (poluir um rio).",
        },
        fotoUrl: imgEnchente,
      },
      {
        id: "p2",
        texto:
          "Quando o município retira toda a vegetação e IMPERMEABILIZA o solo com asfalto, a água da chuva não consegue mais entrar na terra. Ela escorre toda pras ruas de uma vez, entope bueiros e provoca ENCHENTES cada vez maiores.",
        chaves: ["impermeabiliza", "enchentes"],
        definicoes: {
          impermeabiliza:
            "Cobre o solo com material (asfalto, concreto) que impede a água de infiltrar. Solo impermeável piora enchentes.",
          enchentes:
            "Acúmulo de água nas ruas quando a chuva não consegue escoar. Cidades sem áreas verdes sofrem mais com enchentes.",
        },
        fotoUrl: imgRioCanalizado,
      },
      {
        id: "p3",
        texto:
          "Pra evitar esse desastre, o município precisa apostar em SUSTENTABILIDADE: criar parques, preservar as MATAS CILIARES ao redor dos rios (chamadas de APP), instalar coleta seletiva e usar energia limpa como a solar.",
        chaves: ["sustentabilidade", "matas ciliares"],
        definicoes: {
          sustentabilidade:
            "Usar os recursos naturais hoje SEM esgotá-los pras próximas gerações. Cidade sustentável cresce sem destruir.",
          "matas ciliares":
            "Faixa de vegetação nas margens dos rios. Protegem contra erosão e enchente. São Áreas de Preservação Permanente (APP).",
        },
        fotoUrl: imgParque,
      },
      {
        id: "p4",
        texto:
          "Cada morador também tem papel. Separar o LIXO em coletas seletivas, não jogar papel na rua, economizar água e denunciar desmatamento são atitudes simples que impedem que os bueiros entupam e a cidade alague.",
        chaves: ["lixo"],
        definicoes: {
          lixo:
            "Todo material descartado. Quando não é separado, contamina o solo, entope bueiros e polui rios. A coleta seletiva é a solução.",
        },
        fotoUrl: imgColeta,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com suas próprias palavras, por que a cidade precisa preservar a natureza pra sobreviver.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão do fiscal ambiental. Cada rodada mostra uma ação da prefeitura. Você tem que classificar rápido: é IMPACTO NEGATIVO, é AÇÃO SUSTENTÁVEL ou é uma ATITUDE NEUTRA?",
    instrucao: "⏱️ Leia a pista e toque na classificação correta antes do tempo acabar",
    duracaoSegundos: 20,
    pecas: [
      { id: "ne", emoji: "⚠️", rotulo: "Impacto Negativo" },
      { id: "su", emoji: "🌱", rotulo: "Sustentável" },
      { id: "nu", emoji: "🔵", rotulo: "Neutro" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Cobrir rio com concreto", emoji: "🏗️", cor: "from-red-600 to-orange-800" },
        municipioB: { nome: "Retirar toda a mata ciliar", emoji: "🌳", cor: "from-red-500 to-orange-700" },
        contexto:
          "Prefeitura canaliza rio em concreto pra abrir avenida. Retira toda árvore da margem. Como classificamos?",
        pecaCertaId: "ne",
        fotoUrl: imgRioCanalizado,
        feedbackAcerto: "Correto. Canalização e desmatamento = IMPACTO NEGATIVO. Aumenta enchentes e polui a água.",
        feedbackErro: "Cobrir rio com concreto piora tudo. É IMPACTO NEGATIVO — causa enchentes e mata biodiversidade.",
      },
      {
        id: "r2",
        municipioA: { nome: "Parque linear ao longo do rio", emoji: "🌳", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Ciclovia e árvores nativas", emoji: "🚴", cor: "from-green-500 to-emerald-700" },
        contexto:
          "Prefeitura cria parque linear com passarela de madeira, árvores nativas e ciclovia. Como classificamos?",
        pecaCertaId: "su",
        fotoUrl: imgParque,
        feedbackAcerto: "Correto. Parque linear = SUSTENTÁVEL. Protege rio, absorve chuva e serve de lazer.",
        feedbackErro: "Preservar o rio E criar espaço público é o exemplo perfeito de AÇÃO SUSTENTÁVEL.",
      },
      {
        id: "r3",
        municipioA: { nome: "Fábrica sem filtro na chaminé", emoji: "🏭", cor: "from-red-600 to-orange-800" },
        municipioB: { nome: "Fumaça preta no céu", emoji: "💨", cor: "from-slate-600 to-slate-800" },
        contexto:
          "Fábrica funciona sem sistema de filtro, lançando fumaça densa no ar da cidade. Como classificamos?",
        pecaCertaId: "ne",
        fotoUrl: imgRioCanalizado,
        feedbackAcerto: "Correto. IMPACTO NEGATIVO grave. Fumaça sem filtro causa doenças respiratórias e polui o ar.",
        feedbackErro: "Fumaça sem filtro polui e adoece a população. É IMPACTO NEGATIVO — precisa de multa e filtro obrigatório.",
      },
      {
        id: "r4",
        municipioA: { nome: "Coleta seletiva com 4 cores", emoji: "♻️", cor: "from-emerald-600 to-teal-800" },
        municipioB: { nome: "Envio a cooperativa de reciclagem", emoji: "🚛", cor: "from-green-500 to-emerald-700" },
        contexto:
          "Prefeitura instala lixeiras coloridas em cada quarteirão e paga cooperativas pra reciclar. Como classificamos?",
        pecaCertaId: "su",
        fotoUrl: imgColeta,
        feedbackAcerto: "Correto. Coleta seletiva + cooperativas = SUSTENTÁVEL. Reduz aterros e gera renda.",
        feedbackErro: "Reciclar reduz lixo e gera empregos. É AÇÃO SUSTENTÁVEL essencial pro município moderno.",
      },
    ],
    falaFinal:
      "Missão concluída. Você fiscaliza qualquer ação municipal e classifica corretamente.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos fechar a aula com duas fatias. De um lado, IMPACTOS NEGATIVOS. Do outro, AÇÕES SUSTENTÁVEIS. Toque em cada fatia pra revisar.",
    instrucao: "Toque nas fatias pra ouvir sobre cada lado",
    fotoUrl: imgInfografico,
    fatias: [
      {
        id: "negativo",
        rotulo: "Impacto Negativo",
        emoji: "⚠️",
        percentual: 50,
        cor: "#c2410c",
        descricao:
          "Escolhas que degradam o município: desmatamento, canalização de rios, chaminés sem filtro, lixo mal descartado. Consequências: enchentes, doenças, calor extremo.",
        exemplos: ["Desmatamento urbano", "Rios canalizados em concreto", "Fábrica sem filtro", "Lixo jogado no rio"],
        fotoUrl: imgEnchente,
      },
      {
        id: "sustentavel",
        rotulo: "Sustentável",
        emoji: "🌱",
        percentual: 50,
        cor: "#059669",
        descricao:
          "Escolhas que preservam o município pro futuro: parques, mata ciliar, coleta seletiva, energia solar, transporte público limpo.",
        exemplos: ["Parque linear no rio", "Coleta seletiva", "Energia solar em escolas", "Ciclovias e arborização"],
        fotoUrl: imgParque,
      },
    ],
    falaFinal:
      "Duas fatias, dois futuros. Toda decisão da prefeitura escolhe um lado. E você, com pequenas atitudes em casa, também.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa: 3 perguntas de certificação. Se acertar, você restaura a sexta página do Grande Livro das Cidades e ganha o Cristal Verde da Preservação.",
    instrucao: "Responda as 3 perguntas de certificação",
    fotoUrl: imgLivro,
    perguntas: [
      {
        id: "q1",
        pergunta: "Como chamamos a capacidade de usar os recursos da natureza HOJE sem destruí-los pras próximas gerações?",
        fotoUrl: imgParque,
        opcoes: [
          { id: "a", texto: "Sustentabilidade.", correta: true },
          { id: "b", texto: "Urbanização acelerada." },
        ],
        feedbackAcerto:
          "Certificado. Sustentabilidade garante o equilíbrio entre crescimento urbano e saúde do planeta.",
        feedbackErro:
          "Urbanização acelerada é o problema, não a solução. A resposta é SUSTENTABILIDADE.",
      },
      {
        id: "q2",
        pergunta: "Um município sofre com enchentes porque asfaltou todas as margens do rio. Que ação resolveria o problema?",
        fotoUrl: imgParque,
        opcoes: [
          { id: "a", texto: "Criar um parque linear e replantar a mata ciliar.", correta: true },
          { id: "b", texto: "Cobrir o rio com mais concreto." },
        ],
        feedbackAcerto:
          "Correto. Parque linear + mata ciliar devolvem espaço ao rio e absorvem a chuva.",
        feedbackErro:
          "Mais concreto piora tudo. A solução é DEVOLVER espaço ao rio com parque e vegetação.",
      },
      {
        id: "q3",
        pergunta: "Qual dessas atitudes de morador ajuda a manter os bueiros desentupidos e as ruas sem enchente?",
        fotoUrl: imgColeta,
        opcoes: [
          { id: "a", texto: "Separar o lixo reciclável em casa e não jogar papel na rua.", correta: true },
          { id: "b", texto: "Cortar todas as árvores da calçada." },
        ],
        feedbackAcerto:
          "Certificação concluída. Coleta seletiva e ruas limpas evitam bueiros entupidos e enchentes.",
        feedbackErro:
          "Cortar árvores piora as enchentes. A resposta certa é SEPARAR o lixo e cuidar da rua.",
      },
    ],
    selo: {
      nome: "🌱 Cristal Verde da Preservação",
      subtitulo: "Sexta página do Grande Livro das Cidades restaurada",
      emoji: "🌱",
      cor: "from-emerald-400 via-green-500 to-teal-600",
      fotoUrl: imgLivro,
    },
    falaFinal:
      "Selo conquistado. A sexta página do Grande Livro das Cidades foi restaurada. Você agora entende como cidade e natureza podem crescer juntas.",
  },

  recompensa: { xp: 200, moedas: 100, medalha: "Guardião do Ecossistema" },
};

export { imgCidade };
