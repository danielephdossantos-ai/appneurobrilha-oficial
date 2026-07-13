import type { AulaGeoV1 } from "../../types";
import imgFeudo from "@/assets/historia-7ano/u1-feudo.jpg";
import imgMedico from "@/assets/historia-7ano/u1-medico-peste.jpg";
import imgIluminura from "@/assets/historia-7ano/u1-iluminura.jpg";
import imgCamponeses from "@/assets/historia-7ano/u1-camponeses.jpg";
import imgOrdens from "@/assets/historia-7ano/u1-infografico-ordens.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-mundo-feudal-crise",
  titulo: "O Mundo Feudal e a Crise do Século XIV",
  iconeTrilha: "🏰",
  bncc: ["EF07HI01", "EF07HI02"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgFeudo,
    imagemDestaqueUrl: imgOrdens,
    aurora:
      "Muralhas, torres, fossos. Um FEUDO parecia uma fortaleza segura. Mas no século XIV três forças invisíveis atacaram juntas: FOME, GUERRA e um vírus vindo dos navios. A Peste Negra matou cerca de UM TERÇO da Europa. Nenhuma muralha segurou.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 1 da Bússola: O Selo da Ruína Feudal.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "A Peste Negra matou tanta gente que quase paralisou a economia. Mas teve um EFEITO INESPERADO: mudou a relação entre servos e senhores. Como?",
    pergunta: "Por que a falta de mão de obra enfraqueceu os senhores feudais?",
    fotoUrl: imgCamponeses,
    opcoes: [
      {
        id: "valor",
        titulo: "TRABALHO VALORIZOU",
        subtitulo: "poucos servos vivos = mais poder de barganha",
        emoji: "⚒️",
        cor: "from-teal-800 to-slate-950",
      },
      {
        id: "medo",
        titulo: "SENHORES FICARAM MAIS FORTES",
        subtitulo: "aumentaram o controle sobre os servos",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "valor",
    feedbackAcerto:
      "Correto. Com poucos servos vivos, o trabalho VALORIZOU. Sobreviventes exigiram salários, condições melhores e fizeram grandes revoltas (Jacquerie na França, revolta camponesa inglesa). O feudo entrou em colapso.",
    feedbackErro:
      "Não. Na verdade a lógica é inversa: quanto MENOS mão de obra, MAIS ela vale. Camponeses passaram a ter poder de barganha e exigiram melhores condições — enfraquecendo os senhores.",
    falaFinal:
      "Guarde: crise + escassez de trabalho = rachadura no sistema feudal.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave da sociedade feudal e da sua crise.",
    instrucao: "",
    cadernos: [
      {
        id: "feud",
        capa: "Feudalismo",
        emoji: "🏰",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgFeudo,
        conteudo:
          "FEUDALISMO foi o sistema político, econômico e social dominante na Europa medieval. Baseado na POSSE DA TERRA (feudo) e em laços pessoais de FIDELIDADE — suserania (rei/nobre superior) e vassalagem (nobre inferior).",
        exemplo:
          "Exemplo: um cavaleiro jurava lealdade militar a um conde em troca de um pedaço de terra. Se traísse, era considerado desonrado publicamente e perdia o feudo.",
      },
      {
        id: "est",
        capa: "Sociedade Estamental",
        emoji: "👥",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgOrdens,
        conteudo:
          "SOCIEDADE ESTAMENTAL era dividida em três ordens rígidas: CLERO (os que rezam), NOBREZA (os que guerreiam), SERVOS (os que trabalham). Praticamente impossível mudar de estamento — nascia-se e morria-se no mesmo grupo.",
        exemplo:
          "Exemplo: um servo não podia virar cavaleiro. Um cavaleiro não podia virar padre facilmente. Cada ordem tinha seu papel fixo, definido por Deus segundo a Igreja.",
      },
      {
        id: "peste",
        capa: "Peste Negra",
        emoji: "🦠",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgMedico,
        conteudo:
          "PESTE NEGRA (1347-1352) foi a pandemia de peste bubônica trazida por pulgas de ratos nos navios mercantes vindos da Ásia. Matou cerca de 25 milhões — 1/3 da população europeia — em cinco anos.",
        exemplo:
          "Exemplo: médicos usavam máscaras de bico de ave cheias de ervas aromáticas achando que 'ar viciado' causava a doença. Não sabiam da bactéria, mas o isolamento (quarentena) reduzia a transmissão.",
      },
      {
        id: "cent",
        capa: "Centralização Política",
        emoji: "👑",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgFeudo,
        conteudo:
          "CENTRALIZAÇÃO POLÍTICA foi o processo pelo qual os REIS ganharam força e reduziram o poder da nobreza feudal. Depois da crise, nobres empobrecidos buscaram proteção real — nascem as MONARQUIAS NACIONAIS (França, Inglaterra, Portugal, Espanha).",
        exemplo:
          "Exemplo: Portugal completou sua unificação e independência no século XII e foi o primeiro Estado nacional europeu. França e Inglaterra consolidaram-se logo depois da Guerra dos Cem Anos.",
      },
    ],
    falaFinal:
      "Feudalismo + Estamentos + Peste + Centralização. Da fortaleza à monarquia nacional.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico das três ordens feudais e sua função na sociedade medieval. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgOrdens,
    pontos: [
      {
        id: "cle",
        x: 50,
        y: 20,
        emoji: "⛪",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgIluminura,
        titulo: "CLERO (os que rezam)",
        texto:
          "Padres, monges, bispos, papa. Controlavam a vida espiritual, a educação e boa parte das terras. Cobravam DÍZIMO — 10% da produção — e ditavam a moral cristã.",
      },
      {
        id: "nob",
        x: 50,
        y: 50,
        emoji: "⚔️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgFeudo,
        titulo: "NOBREZA (os que guerreiam)",
        texto:
          "Reis, duques, condes, cavaleiros. Donos dos feudos, especialistas em guerra. Recebiam terras em troca de proteção militar. Não trabalhavam a terra: viviam do trabalho alheio.",
      },
      {
        id: "ser",
        x: 50,
        y: 80,
        emoji: "🌾",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgCamponeses,
        titulo: "SERVOS (os que trabalham)",
        texto:
          "A maioria: mais de 90% da população. Ligados à terra do senhor. Deviam CORVEIA (trabalho gratuito) e TALHA (metade da produção). Não podiam deixar o feudo sem autorização.",
      },
      {
        id: "cri",
        x: 15,
        y: 50,
        emoji: "💀",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgMedico,
        titulo: "A CRISE DO SÉC. XIV",
        texto:
          "Fome (mudanças climáticas), Guerra dos Cem Anos e Peste Bubônica atacaram JUNTAS. Cerca de 1/3 da Europa morreu. O sistema estamental começou a ruir.",
      },
    ],
    falaFinal:
      "Três ordens rígidas. E uma crise tripla que quebrou o esquema.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de investigador medieval.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Como se chamava o TRABALHO GRATUITO que o servo devia fazer nas terras do senhor?",
        fotoUrl: imgCamponeses,
        cards: [
          { id: "c", emoji: "⚒️", titulo: "Corveia", cor: "from-teal-600 to-slate-900" },
          { id: "t", emoji: "🌾", titulo: "Talha", cor: "from-amber-600 to-slate-900" },
          { id: "d", emoji: "⛪", titulo: "Dízimo", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. CORVEIA = trabalho gratuito. Talha = metade da produção. Dízimo = 10% pra Igreja.",
        feedbackErro: "É CORVEIA. Talha era a entrega da produção; Dízimo era pra Igreja.",
      },
      {
        id: "q2",
        pergunta: "Quantos por cento da população europeia a Peste Negra matou aproximadamente?",
        fotoUrl: imgMedico,
        cards: [
          { id: "u", emoji: "📊", titulo: "Cerca de 1/3", cor: "from-teal-600 to-slate-900" },
          { id: "d", emoji: "📉", titulo: "Cerca de 5%", cor: "from-amber-600 to-slate-900" },
          { id: "t", emoji: "📈", titulo: "Cerca de 90%", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "u",
        feedbackAcerto: "Correto. Cerca de 1/3 — 25 milhões de pessoas em ~5 anos.",
        feedbackErro: "Cerca de 1/3 da Europa morreu (~25 milhões) entre 1347 e 1352.",
      },
      {
        id: "q3",
        pergunta: "Qual foi a principal CONSEQUÊNCIA POLÍTICA da crise do século XIV?",
        fotoUrl: imgFeudo,
        cards: [
          {
            id: "cent",
            emoji: "👑",
            titulo: "Fortalecimento dos Reis",
            cor: "from-teal-600 to-slate-900",
          },
          {
            id: "iso",
            emoji: "🚫",
            titulo: "Isolamento total da Europa",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "vol",
            emoji: "⏪",
            titulo: "Volta ao Império Romano",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "cent",
        feedbackAcerto:
          "Correto. Nobres enfraquecidos → reis centralizam poder → nascem as MONARQUIAS NACIONAIS.",
        feedbackErro:
          "É o FORTALECIMENTO DOS REIS. Nobres empobrecidos buscaram proteção real, criando monarquias nacionais.",
      },
    ],
    falaFinal: "Radar afiado. Você já lê a crise medieval como um historiador.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre o feudo. Um destaca quem TINHA poder; outro quem sustentava tudo.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgOrdens,
    camadas: [
      {
        id: "pod",
        rotulo: "Quem tinha poder (~10%)",
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 25, y: 5, w: 50, h: 45 },
        descricao:
          "Clero e Nobreza. Isentos da maioria dos impostos. Donos das terras. Ditavam leis, cobravam tributos e comandavam militarmente.",
      },
      {
        id: "sus",
        rotulo: "Quem sustentava (~90%)",
        emoji: "⚒️",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 10, y: 55, w: 80, h: 40 },
        descricao:
          "Servos e camponeses livres. Trabalhavam de sol a sol pra sustentar o feudo, pagar dízimo, talha e corveia. Sem direitos políticos.",
      },
    ],
    falaFinal:
      "Poucos mandavam. Muitos sustentavam. Mesma lógica repetida no tempo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo da crise do século XIV.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Passos da crise feudal",
    paradas: [
      {
        id: "cli",
        emoji: "🌧️",
        rotulo: "1. Grande Fome (1315-1317)",
        fotoUrl: imgCamponeses,
        descricao: "Mudanças climáticas frias arruínam colheitas por anos.",
      },
      {
        id: "guer",
        emoji: "⚔️",
        rotulo: "2. Guerra dos Cem Anos (1337)",
        fotoUrl: imgFeudo,
        descricao: "França × Inglaterra devasta a Europa Ocidental.",
      },
      {
        id: "pes",
        emoji: "🦠",
        rotulo: "3. Peste Negra (1347-1352)",
        fotoUrl: imgMedico,
        descricao: "Pandemia mata 1/3 da população europeia.",
      },
      {
        id: "rev",
        emoji: "✊",
        rotulo: "4. Revoltas camponesas",
        fotoUrl: imgCamponeses,
        descricao: "Sobreviventes exigem melhores condições e liberdade.",
      },
    ],
    ordemCerta: ["cli", "guer", "pes", "rev"],
    feedbackAcerto:
      "Perfeito. Fome → Guerra → Peste → Revolta. A tríade da crise + resposta popular.",
    feedbackErro: "Essa não é a próxima. A fome veio antes da peste — corpo enfraquecido pega vírus mais fácil.",
    falaFinal: "Crise sistêmica: três golpes juntos derrubaram o feudalismo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Página 1 da Bússola. Toque nos termos técnicos.",
    tituloLivro: "🧭 A Bússola do Novo Mundo",
    subtitulo: "Página 1 — O Selo da Ruína Feudal",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O FEUDALISMO organizou a Europa por quase mil anos. Era um sistema baseado na POSSE DA TERRA (feudo) e em laços pessoais de fidelidade entre senhores e vassalos. A economia era agrícola e local; o comércio, limitado.",
        chaves: ["Feudalismo"],
        definicoes: {
          Feudalismo:
            "Sistema político, econômico e social dominante na Europa medieval. Terra (feudo) trocada por proteção e lealdade militar.",
        },
        fotoUrl: imgFeudo,
      },
      {
        id: "p2",
        texto:
          "A SOCIEDADE ESTAMENTAL era dividida em três ordens fixas: CLERO (os que rezam), NOBREZA (os que guerreiam) e SERVOS (os que trabalham). Cada ordem tinha função fixa, e mudar de estamento era praticamente impossível.",
        chaves: ["Sociedade Estamental"],
        definicoes: {
          "Sociedade Estamental":
            "Divisão social rígida em três ordens hereditárias, justificada como vontade divina pela Igreja.",
        },
        fotoUrl: imgOrdens,
      },
      {
        id: "p3",
        texto:
          "No século XIV, três crises atacaram juntas: a GRANDE FOME (1315-1317, por mudanças climáticas), a GUERRA DOS CEM ANOS (1337 em diante) e a PESTE NEGRA (1347-1352). Cerca de 25 milhões de europeus morreram — um terço da população.",
        chaves: ["Peste Negra"],
        definicoes: {
          "Peste Negra":
            "Pandemia de peste bubônica trazida pelas rotas comerciais asiáticas. Matou ~1/3 da Europa entre 1347 e 1352.",
        },
        fotoUrl: imgMedico,
      },
      {
        id: "p4",
        texto:
          "A crise ENFRAQUECEU os senhores feudais. Sobreviventes exigiam salários, direitos e organizaram revoltas. Nobres empobrecidos passaram a buscar proteção junto aos REIS, que centralizaram poder e formaram as primeiras MONARQUIAS NACIONAIS — Portugal, França, Inglaterra e Espanha.",
        chaves: ["Monarquias Nacionais"],
        definicoes: {
          "Monarquias Nacionais":
            "Estados centralizados sob o poder de um rei, com território, moeda e leis próprias. Base do mundo moderno.",
        },
        fotoUrl: imgFeudo,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica como o feudalismo entrou em colapso e por que os reis subiram ao topo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de historiador medieval. Classifique cada elemento em CLERO, NOBREZA ou SERVOS.",
    instrucao: "⏱️ Toque na ordem correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "cle", emoji: "⛪", rotulo: "Clero" },
      { id: "nob", emoji: "⚔️", rotulo: "Nobreza" },
      { id: "ser", emoji: "🌾", rotulo: "Servos" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Cavaleiro dono de feudo", emoji: "⚔️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Guerreiro proprietário de terra", emoji: "🛡️", cor: "from-amber-600 to-slate-900" },
        contexto: "Homem armado que jurou fidelidade ao rei em troca de terras.",
        pecaCertaId: "nob",
        feedbackAcerto: "Correto. Cavaleiro = NOBREZA.",
        feedbackErro: "Cavaleiros pertenciam à NOBREZA.",
      },
      {
        id: "r2",
        municipioA: { nome: "Camponês que paga corveia", emoji: "🌾", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Trabalhador da terra", emoji: "🛠️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Ligado ao feudo, deve trabalho gratuito.",
        pecaCertaId: "ser",
        feedbackAcerto: "Correto. Camponês com corveia = SERVOS.",
        feedbackErro: "Camponês servil pertencia aos SERVOS.",
      },
      {
        id: "r3",
        municipioA: { nome: "Monge que cobra dízimo", emoji: "⛪", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Religioso do mosteiro", emoji: "📿", cor: "from-teal-600 to-slate-900" },
        contexto: "Religioso que administra o mosteiro e recolhe 10% da produção.",
        pecaCertaId: "cle",
        feedbackAcerto: "Correto. Monge = CLERO.",
        feedbackErro: "Monges e padres eram CLERO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Duque que herdou terras do pai", emoji: "👑", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Aristocrata hereditário", emoji: "🗡️", cor: "from-amber-600 to-slate-900" },
        contexto: "Fidalgo que administra um grande território.",
        pecaCertaId: "nob",
        feedbackAcerto: "Correto. Duque = NOBREZA.",
        feedbackErro: "Duques faziam parte da NOBREZA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Bispo em catedral gótica", emoji: "⛪", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Autoridade eclesiástica", emoji: "🕊️", cor: "from-teal-600 to-slate-900" },
        contexto: "Líder religioso responsável por uma diocese.",
        pecaCertaId: "cle",
        feedbackAcerto: "Correto. Bispo = CLERO.",
        feedbackErro: "Bispo faz parte do CLERO.",
      },
      {
        id: "r6",
        municipioA: { nome: "Servo que entrega metade da colheita ao senhor", emoji: "🌾", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Camponês que paga talha", emoji: "🍞", cor: "from-cyan-600 to-slate-900" },
        contexto: "Entrega parte da produção agrícola como imposto ao feudo.",
        pecaCertaId: "ser",
        feedbackAcerto: "Correto. Talha = obrigação dos SERVOS.",
        feedbackErro: "Talha é imposto SERVIL.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já classifica a sociedade feudal como um medievalista.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da sociedade feudal: proporção entre elite (clero + nobreza) e a maioria trabalhadora.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgOrdens,
    fatias: [
      {
        id: "eli",
        rotulo: "Elite (~10%)",
        emoji: "👑",
        percentual: 10,
        cor: "#b45309",
        descricao:
          "Clero e Nobreza somados. Donos das terras, isentos da maioria dos impostos, controlavam a religião e a guerra.",
        exemplos: ["⛪ Clero", "⚔️ Nobreza", "🏰 Senhores"],
      },
      {
        id: "sus",
        rotulo: "Servos e camponeses (~90%)",
        emoji: "🌾",
        percentual: 90,
        cor: "#0f766e",
        descricao:
          "A imensa maioria. Trabalhavam de sol a sol, pagavam corveia, talha e dízimo, sem direitos políticos nem mobilidade social.",
        exemplos: ["🌾 Servos", "🐄 Camponeses", "⚒️ Artesãos"],
      },
    ],
    falaFinal:
      "Elite minúscula em cima. Maioria trabalhadora sustentando tudo embaixo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Selo da Ruína Feudal.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFeudo,
    perguntas: [
      {
        id: "av1",
        pergunta: "Quais eram as TRÊS ORDENS da sociedade feudal?",
        opcoes: [
          { id: "a", texto: "Ricos, médios e pobres.", correta: false },
          { id: "b", texto: "Clero, Nobreza e Servos.", correta: true },
          { id: "c", texto: "Patrícios, plebeus e escravos.", correta: false },
        ],
        feedbackAcerto: "Correto. CLERO (reza), NOBREZA (guerreia), SERVOS (trabalham).",
        feedbackErro: "É CLERO, NOBREZA e SERVOS. Patrícios/plebeus era Roma antiga.",
      },
      {
        id: "av2",
        pergunta: "Qual foi a principal CONSEQUÊNCIA política da crise do século XIV na Europa?",
        opcoes: [
          { id: "a", texto: "Fim do comércio com o Oriente.", correta: false },
          { id: "b", texto: "Enfraquecimento do feudalismo e fortalecimento dos Reis.", correta: true },
          { id: "c", texto: "Volta ao Império Romano.", correta: false },
        ],
        feedbackAcerto: "Correto. Nobreza empobrecida → reis centralizam poder → monarquias nacionais.",
        feedbackErro: "Foi o FORTALECIMENTO DOS REIS e o nascimento das monarquias nacionais.",
      },
      {
        id: "av3",
        pergunta: "Aproximadamente que fração da população europeia morreu na Peste Negra?",
        opcoes: [
          { id: "a", texto: "Cerca de 1/3.", correta: true },
          { id: "b", texto: "Cerca de 5%.", correta: false },
          { id: "c", texto: "Cerca de 95%.", correta: false },
        ],
        feedbackAcerto: "Correto. Cerca de 25 milhões — 1/3 da Europa em cinco anos.",
        feedbackErro: "Aproximadamente UM TERÇO da Europa (~25 milhões).",
      },
    ],
    selo: {
      nome: "Selo da Ruína Feudal",
      subtitulo: "Engrenagem 1 da Bússola",
      emoji: "🏰",
      cor: "from-teal-500 to-slate-900",
      fotoUrl: imgFeudo,
    },
    falaFinal:
      "Engrenagem 1 destravada. Você agora entende como a Idade Média entrou em crise e abriu caminho pro mundo moderno.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Selo da Ruína Feudal" },
};
