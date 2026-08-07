import type { AulaGeoV1 } from "../../types";
import { url as imgConst } from "@/assets/historia-8ano/u6-constituicao-1824.jpg.asset.json";
import { url as imgFico } from "@/assets/historia-8ano/u6-dia-fico.jpg.asset.json";
import { url as imgPedro } from "@/assets/historia-8ano/u6-dom-pedro.jpg.asset.json";
import { url as imgFazenda } from "@/assets/historia-8ano/u6-fazenda-cafe.jpg.asset.json";
import { url as imgIpiranga } from "@/assets/historia-8ano/u6-ipiranga.jpg.asset.json";

export const aula06: AulaGeoV1 = {
  slug: "aula-06-legado-escravidao",
  titulo: "O Legado da Escravidão nas Américas",
  iconeTrilha: "⛓️",
  bncc: ["EF08HI19"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgFazenda,
    imagemDestaqueUrl: imgPedro,
    aurora:
      "O Brasil foi o último país das Américas a abolir a escravidão, em 13 de maio de 1888, pela Lei Áurea. Foram mais de 300 anos de escravidão de africanos e seus descendentes. Mas a abolição não veio acompanhada de terra, trabalho ou educação para os libertos — e esse abandono deixou marcas que se sentem até hoje.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem: Legados da Escravidão.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "A Lei Áurea (1888) libertou os escravizados, mas não deu terra, trabalho ou educação a eles. O que você acha que aconteceu depois?",
    pergunta: "O que aconteceu com os libertos após a abolição de 1888?",
    fotoUrl: imgPedro,
    opcoes: [
      {
        id: "abandono",
        titulo: "ABANDONO SOCIAL",
        subtitulo: "sem terra, emprego ou apoio do Estado, muitos seguiram na pobreza",
        emoji: "⛓️",
        cor: "from-slate-800 to-slate-950",
      },
      {
        id: "igual",
        titulo: "IGUALDADE IMEDIATA",
        subtitulo: "todos passaram a ter as mesmas oportunidades",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "abandono",
    feedbackAcerto:
      "Correto. A Lei Áurea não trouxe reforma agrária, nem políticas de trabalho, moradia ou educação para os libertos. Muitos continuaram em condições precárias, e esse abandono ajuda a explicar desigualdades raciais que persistem no Brasil até hoje.",
    feedbackErro:
      "Não. A abolição foi apenas jurídica: sem terra, emprego ou apoio do Estado, a maioria dos libertos permaneceu em condição de extrema pobreza e exclusão social.",
    falaFinal:
      "Ideia-base: abolição sem reparação deixou heranças sociais que atravessam gerações.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave para entender o legado da escravidão.",
    instrucao: "",
    cadernos: [
      {
        id: "aurea",
        capa: "Lei Áurea",
        emoji: "📜",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgPedro,
        conteudo:
          "LEI ÁUREA (13 de maio de 1888), assinada pela Princesa Isabel, aboliu a escravidão no Brasil sem qualquer indenização, terra ou apoio aos libertos. Foi uma abolição 'sem reparação', diferente de outros países que ofereceram algum tipo de assistência.",
        exemplo:
          "Exemplo: os antigos senhores de escravos, sim, receberam apoio do Estado em alguns momentos anteriores — os libertos, não.",
      },
      {
        id: "racismo",
        capa: "Racismo estrutural",
        emoji: "🧩",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgFazenda,
        conteudo:
          "RACISMO ESTRUTURAL: forma de desigualdade que não depende apenas de atitudes individuais, mas está enraizada nas instituições (escola, mercado de trabalho, justiça) e produz resultados desiguais entre pessoas negras e brancas mesmo sem intenção declarada.",
        exemplo:
          "Exemplo: dados do IBGE mostram que pessoas negras ganham, em média, salários menores que pessoas brancas em cargos semelhantes.",
      },
      {
        id: "fontes",
        capa: "Fontes históricas",
        emoji: "📚",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgIpiranga,
        conteudo:
          "FONTES HISTÓRICAS sobre a escravidão incluem anúncios de jornal oferecendo recompensa por escravizados fugidos, registros de compra e venda, cartas de alforria e relatos de viajantes estrangeiros — todos usados por historiadores para reconstruir esse período.",
        exemplo:
          "Exemplo: anúncios de jornais do século 19 descreviam características físicas de fugitivos, revelando a desumanização da escravidão.",
      },
      {
        id: "quilombo",
        capa: "Comunidades quilombolas",
        emoji: "🌳",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgFico,
        conteudo:
          "COMUNIDADES QUILOMBOLAS são grupos descendentes de quilombos, formados por escravizados fugidos, que preservam até hoje tradições culturais, religiosas e de organização social. A Constituição de 1988 garante o direito à titulação das terras quilombolas.",
        exemplo:
          "Exemplo: o Quilombo dos Palmares (século 17), no atual Alagoas, é o mais famoso da história do Brasil, liderado por Zumbi.",
      },
    ],
    falaFinal:
      "Lei Áurea + racismo estrutural + fontes históricas + quilombos. Peças para entender o legado da escravidão.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico do legado da escravidão nas Américas. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgFazenda,
    pontos: [
      {
        id: "brasil",
        x: 25,
        y: 30,
        emoji: "⛓️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgPedro,
        titulo: "BRASIL: ÚLTIMO PAÍS A ABOLIR",
        texto:
          "O Brasil recebeu cerca de 4,8 milhões de africanos escravizados — o maior número entre todas as colônias americanas — e foi o último país do continente a abolir a escravidão, em 1888.",
      },
      {
        id: "eua",
        x: 45,
        y: 15,
        emoji: "🇺🇸",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgIpiranga,
        titulo: "EUA: SEGREGAÇÃO LEGAL",
        texto:
          "Nos Estados Unidos, a escravidão terminou em 1865, mas foi seguida pelas leis de segregação racial (Jim Crow), que duraram até os anos 1960.",
      },
      {
        id: "desigualdade",
        x: 60,
        y: 55,
        emoji: "📊",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgFazenda,
        titulo: "DESIGUALDADE ATUAL",
        texto:
          "No Brasil de hoje, pessoas negras representam a maioria da população em situação de pobreza, têm menor acesso à educação superior e são maioria entre as vítimas de violência letal.",
      },
      {
        id: "resistencia",
        x: 35,
        y: 80,
        emoji: "🌳",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgFico,
        titulo: "RESISTÊNCIA E CULTURA",
        texto:
          "Quilombos, religiões de matriz africana, capoeira e o samba são exemplos de resistência cultural que atravessaram séculos e moldam a identidade brasileira até hoje.",
      },
    ],
    falaFinal: "Do maior número de escravizados ao maior desafio de reparação: o Brasil carrega esse peso histórico.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre o legado da escravidão.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Em que ano o Brasil aboliu a escravidão, sendo o último país das Américas a fazê-lo?",
        fotoUrl: imgPedro,
        cards: [
          { id: "a", emoji: "📜", titulo: "1888", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "❌", titulo: "1822", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "❌", titulo: "1865", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. A Lei Áurea foi assinada em 13 de maio de 1888.",
        feedbackErro: "É 1888, com a assinatura da Lei Áurea pela Princesa Isabel.",
      },
      {
        id: "q2",
        pergunta: "O que faltou aos libertos após a abolição de 1888?",
        fotoUrl: imgFazenda,
        cards: [
          { id: "a", emoji: "🌾", titulo: "Terra, trabalho e educação", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "❌", titulo: "Nada, tiveram plena igualdade", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "❌", titulo: "Apenas o direito de votar", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Faltou terra, trabalho e educação — uma abolição sem reparação.",
        feedbackErro: "Faltou terra, trabalho e educação aos libertos, que ficaram à própria sorte.",
      },
      {
        id: "q3",
        pergunta: "O que caracteriza o racismo estrutural?",
        fotoUrl: imgIpiranga,
        cards: [
          { id: "a", emoji: "🧩", titulo: "Desigualdade enraizada nas instituições", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "❌", titulo: "Apenas atos individuais isolados", cor: "from-amber-600 to-slate-900" },
          { id: "c", emoji: "❌", titulo: "Um problema exclusivo do passado", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. O racismo estrutural está enraizado nas instituições e produz desigualdades persistentes.",
        feedbackErro: "É a desigualdade enraizada nas instituições, não apenas em atitudes individuais.",
      },
    ],
    falaFinal: "Radar afiado. Você já entende como a escravidão deixou marcas duradouras.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros: o abandono após a abolição e a resistência cultural negra.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFazenda,
    camadas: [
      {
        id: "abandono",
        rotulo: "Abandono pós-abolição",
        emoji: "⛓️",
        cor: "from-slate-700 to-slate-900",
        rect: { x: 10, y: 10, w: 80, h: 40 },
        descricao:
          "Sem terra, emprego formal ou escola, muitos libertos foram para as periferias das cidades ou continuaram trabalhando nas fazendas em condições precárias, muitas vezes piores que antes.",
      },
      {
        id: "resistencia",
        rotulo: "Resistência e cultura negra",
        emoji: "🌳",
        cor: "from-emerald-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "Quilombos, capoeira, samba, religiões de matriz africana (como o candomblé) e movimentos negros organizados mantiveram viva a cultura afro-brasileira e lutaram por direitos ao longo de todo o século 20.",
      },
    ],
    falaFinal: "Abandono estatal de um lado, resistência cultural do outro — dois lados do mesmo legado.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene cronologicamente os marcos do legado da escravidão.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia do Legado da Escravidão",
    paradas: [
      {
        id: "e1",
        emoji: "📜",
        rotulo: "1. Lei Áurea (1888)",
        fotoUrl: imgPedro,
        descricao: "Abolição da escravidão sem terra, trabalho ou educação para os libertos.",
      },
      {
        id: "e2",
        emoji: "🏙️",
        rotulo: "2. Migração para periferias urbanas",
        fotoUrl: imgFazenda,
        descricao: "Sem apoio do Estado, muitos ex-escravizados ocupam as margens das cidades.",
      },
      {
        id: "e3",
        emoji: "✊🏿",
        rotulo: "3. Movimentos negros organizados (séc. 20)",
        fotoUrl: imgIpiranga,
        descricao: "Frente Negra Brasileira, Movimento Negro Unificado lutam contra o racismo.",
      },
      {
        id: "e4",
        emoji: "🌳",
        rotulo: "4. Constituição de 1988 e quilombolas",
        fotoUrl: imgFico,
        descricao: "Reconhecimento constitucional do direito à terra das comunidades quilombolas.",
      },
    ],
    ordemCerta: ["e1", "e2", "e3", "e4"],
    feedbackAcerto:
      "Perfeito. Da Lei Áurea (1888) à Constituição de 1988, mais de um século de luta por reparação.",
    feedbackErro: "Essa não é a próxima etapa. Comece pela Lei Áurea, em 1888.",
    falaFinal: "Cem anos separam a abolição do reconhecimento constitucional dos quilombolas.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página do livro-atlas. Toque nos termos técnicos.",
    tituloLivro: "⚙️ As Engrenagens do Império",
    subtitulo: "Página — Legados da Escravidão",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Em 13 de maio de 1888, a Princesa Isabel assinou a LEI ÁUREA, abolindo a escravidão no Brasil sem qualquer reparação: nenhuma terra, indenização ou apoio educacional foi oferecido aos cerca de 700 mil libertos.",
        chaves: ["Lei Áurea"],
        definicoes: {
          "Lei Áurea":
            "Lei assinada em 13 de maio de 1888 que aboliu a escravidão no Brasil, sem indenização ou apoio aos libertos.",
        },
        fotoUrl: imgPedro,
      },
      {
        id: "p2",
        texto:
          "Historiadores usam diversas FONTES HISTÓRICAS para estudar esse período: anúncios de jornal com recompensa por escravizados fugidos, cartas de alforria, registros de compra e venda e relatos de viajantes estrangeiros.",
        chaves: ["Fontes históricas"],
        definicoes: {
          "Fontes históricas":
            "Documentos, objetos ou registros usados por historiadores para reconstruir e interpretar o passado.",
        },
        fotoUrl: imgIpiranga,
      },
      {
        id: "p3",
        texto:
          "A ausência de políticas públicas para os libertos ajuda a explicar o RACISMO ESTRUTURAL que persiste no Brasil: hoje, pessoas negras ainda ganham, em média, salários menores e têm menos acesso à educação superior que pessoas brancas.",
        chaves: ["Racismo estrutural"],
        definicoes: {
          "Racismo estrutural":
            "Forma de racismo enraizada nas instituições sociais, que produz desigualdades persistentes entre grupos raciais.",
        },
        fotoUrl: imgFazenda,
      },
      {
        id: "p4",
        texto:
          "Ao mesmo tempo, a resistência negra se manteve viva: as COMUNIDADES QUILOMBOLAS, formadas por descendentes de escravizados fugidos, tiveram seu direito à terra reconhecido pela Constituição de 1988, após séculos de luta.",
        chaves: ["Comunidades quilombolas"],
        definicoes: {
          "Comunidades quilombolas":
            "Grupos descendentes de quilombos que preservam tradições culturais e têm direito constitucional à titulação de suas terras.",
        },
        fotoUrl: imgFico,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já entende como o passado escravista molda o Brasil de hoje.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador. Associe cada dado ao seu conceito correto.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "aurea", emoji: "📜", rotulo: "Lei Áurea" },
      { id: "racismo", emoji: "🧩", rotulo: "Racismo estrutural" },
      { id: "quilombo", emoji: "🌳", rotulo: "Quilombolas" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "13 de maio de 1888", emoji: "📜", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Princesa Isabel assina lei", emoji: "👑", cor: "from-amber-600 to-slate-900" },
        contexto: "Abolição sem reparação.",
        pecaCertaId: "aurea",
        feedbackAcerto: "Correto. É a Lei Áurea.",
        feedbackErro: "É a Lei Áurea.",
      },
      {
        id: "r2",
        municipioA: { nome: "Desigualdade salarial persistente", emoji: "📊", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Enraizada nas instituições", emoji: "🧩", cor: "from-slate-600 to-slate-900" },
        contexto: "Desigualdade que não depende só de indivíduos.",
        pecaCertaId: "racismo",
        feedbackAcerto: "Correto. É o racismo estrutural.",
        feedbackErro: "É o racismo estrutural.",
      },
      {
        id: "r3",
        municipioA: { nome: "Descendentes de escravizados fugidos", emoji: "🌳", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "Direito à terra na Constituição de 1988", emoji: "📜", cor: "from-emerald-600 to-slate-900" },
        contexto: "Comunidades que resistiram à escravidão.",
        pecaCertaId: "quilombo",
        feedbackAcerto: "Correto. São as comunidades quilombolas.",
        feedbackErro: "São as comunidades quilombolas.",
      },
      {
        id: "r4",
        municipioA: { nome: "Nenhuma terra ou indenização aos libertos", emoji: "🚫", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "700 mil pessoas libertadas sem apoio", emoji: "⛓️", cor: "from-amber-600 to-slate-900" },
        contexto: "Consequência imediata da abolição.",
        pecaCertaId: "aurea",
        feedbackAcerto: "Correto. É a Lei Áurea sem reparação.",
        feedbackErro: "É a Lei Áurea.",
      },
      {
        id: "r5",
        municipioA: { nome: "Menor acesso à educação superior", emoji: "🎓", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Maioria negra entre vítimas de violência", emoji: "📉", cor: "from-slate-600 to-slate-900" },
        contexto: "Dados atuais de desigualdade racial no Brasil.",
        pecaCertaId: "racismo",
        feedbackAcerto: "Correto. Reflete o racismo estrutural.",
        feedbackErro: "É o racismo estrutural.",
      },
      {
        id: "r6",
        municipioA: { nome: "Quilombo dos Palmares", emoji: "🌳", cor: "from-emerald-700 to-slate-900" },
        municipioB: { nome: "Liderado por Zumbi", emoji: "✊🏿", cor: "from-emerald-600 to-slate-900" },
        contexto: "Maior quilombo da história do Brasil.",
        pecaCertaId: "quilombo",
        feedbackAcerto: "Correto. É a tradição quilombola.",
        feedbackErro: "É a tradição quilombola.",
      },
    ],
    falaFinal: "6 rodadas! Você já domina os conceitos do legado da escravidão.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos africanos escravizados nas Américas: comparação aproximada entre Brasil e o restante do continente.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgFazenda,
    fatias: [
      {
        id: "brasil",
        rotulo: "Brasil (maior receptor)",
        emoji: "⛓️",
        percentual: 40,
        cor: "#334155",
        descricao:
          "O Brasil recebeu cerca de 4,8 milhões de africanos escravizados — cerca de 40% de todos os africanos trazidos para as Américas, o maior número entre todas as colônias.",
        exemplos: ["⛓️ ~4,8 milhões de pessoas", "📜 Último país a abolir (1888)", "🌾 Fazendas de café e cana"],
      },
      {
        id: "resto",
        rotulo: "Restante das Américas",
        emoji: "🌎",
        percentual: 60,
        cor: "#047857",
        descricao:
          "O restante das Américas (Caribe, EUA, América espanhola) recebeu a maioria dos demais africanos escravizados, com sistemas de trabalho e legislações abolicionistas diferentes.",
        exemplos: ["🇺🇸 EUA: abolição em 1865", "🏝️ Caribe: plantations", "📊 Segregação legal nos EUA"],
      },
    ],
    falaFinal: "O Brasil concentrou a maior parte da escravidão nas Américas — e o maior desafio de reparação até hoje.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear a Engrenagem do Legado da Escravidão.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgPedro,
    perguntas: [
      {
        id: "av1",
        pergunta: "Por que a abolição de 1888 é chamada de 'abolição sem reparação'?",
        opcoes: [
          { id: "a", texto: "Porque não ofereceu terra, trabalho ou educação aos libertos.", correta: true },
          { id: "b", texto: "Porque deu terras a todos os ex-escravizados.", correta: false },
          { id: "c", texto: "Porque indenizou apenas os libertos.", correta: false },
        ],
        feedbackAcerto: "Correto. A Lei Áurea não trouxe nenhuma política de reparação aos libertos.",
        feedbackErro: "A abolição não ofereceu terra, trabalho ou educação aos libertos.",
      },
      {
        id: "av2",
        pergunta: "O que caracteriza o racismo estrutural no Brasil de hoje?",
        opcoes: [
          { id: "a", texto: "Desigualdades enraizadas nas instituições, como educação e mercado de trabalho.", correta: true },
          { id: "b", texto: "Um problema totalmente resolvido após 1988.", correta: false },
          { id: "c", texto: "Apenas casos isolados sem relação com o passado.", correta: false },
        ],
        feedbackAcerto: "Correto. O racismo estrutural está enraizado nas instituições e persiste até hoje.",
        feedbackErro: "São desigualdades enraizadas nas instituições sociais, herdadas do período escravista.",
      },
      {
        id: "av3",
        pergunta: "O que a Constituição de 1988 garantiu às comunidades quilombolas?",
        opcoes: [
          { id: "a", texto: "O direito à titulação de suas terras.", correta: true },
          { id: "b", texto: "A proibição de suas tradições culturais.", correta: false },
          { id: "c", texto: "A obrigação de deixar suas terras.", correta: false },
        ],
        feedbackAcerto: "Correto. A Constituição de 1988 reconheceu o direito quilombola à terra.",
        feedbackErro: "Garantiu o direito à titulação das terras quilombolas.",
      },
    ],
    selo: {
      nome: "Legados da Escravidão",
      subtitulo: "Engrenagem da Memória e Reparação",
      emoji: "⛓️",
      cor: "from-slate-600 to-slate-900",
      fotoUrl: imgPedro,
    },
    falaFinal:
      "Engrenagem destravada. Você já entende como a escravidão molda desigualdades até hoje.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Legados da Escravidão" },
};
