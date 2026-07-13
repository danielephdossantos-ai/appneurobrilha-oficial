import type { AulaGeoV1 } from "../../types";
import imgVersalhes from "@/assets/historia-7ano/u4-versalhes.jpg";
import imgLuis from "@/assets/historia-7ano/u4-luis-xiv.jpg";
import imgMoeda from "@/assets/historia-7ano/u4-moeda-ouro.jpg";
import imgPorto from "@/assets/historia-7ano/u4-porto-mercantil.jpg";
import imgMerc from "@/assets/historia-7ano/u4-infografico-mercantilismo.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-absolutismo-mercantilismo",
  titulo: "O Absolutismo e o Mercantilismo",
  iconeTrilha: "👑",
  bncc: ["EF07HI07", "EF07HI08"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgVersalhes,
    imagemDestaqueUrl: imgMerc,
    aurora:
      "Palácio de Versalhes: 2.300 quartos, 700 nobres vivendo dentro, tudo pago pelos impostos do povo. O rei LUÍS XIV disse: 'O ESTADO SOU EU'. Não era vaidade — era doutrina política. No Absolutismo, o rei concentra TODO o poder e a economia mercantilista alimenta a coroa.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 4 da Bússola: O Cetro de Ouro do Monarca.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "A regra de ouro do MERCANTILISMO era a BALANÇA COMERCIAL FAVORÁVEL. O que um reino mercantilista precisava fazer com exportações e importações?",
    pergunta: "Como manter uma balança comercial favorável?",
    fotoUrl: imgPorto,
    opcoes: [
      {
        id: "exp",
        titulo: "EXPORTAR MAIS, IMPORTAR MENOS",
        subtitulo: "para acumular ouro e prata no reino",
        emoji: "💰",
        cor: "from-cyan-800 to-slate-950",
      },
      {
        id: "imp",
        titulo: "IMPORTAR MAIS, EXPORTAR MENOS",
        subtitulo: "gastar todo o ouro rapidamente",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "exp",
    feedbackAcerto:
      "Correto. Vender MAIS do que comprar = mais moedas de ouro entrando do que saindo. Isso era o METALISMO na prática: encher os cofres do reino.",
    feedbackErro:
      "Não. É o oposto. O mercantilismo defende EXPORTAR muito e IMPORTAR pouco — para acumular metais preciosos e enriquecer o Estado.",
    falaFinal:
      "Guarde: exportar > importar = balança comercial favorável = reino rico.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave do Absolutismo e do Mercantilismo.",
    instrucao: "",
    cadernos: [
      {
        id: "abs",
        capa: "Absolutismo",
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgLuis,
        conteudo:
          "ABSOLUTISMO foi o sistema político da Idade Moderna onde os reis concentravam TODOS os poderes do Estado: legislar, julgar e executar. Justificado pela teoria do DIREITO DIVINO — o rei governa por vontade de Deus.",
        exemplo:
          "Exemplo: Luís XIV da França governou 72 anos (1643-1715), o reinado mais longo da Europa. Seu poder era tão total que dizia 'L'État c'est moi' — 'O Estado sou eu'.",
      },
      {
        id: "dd",
        capa: "Direito Divino",
        emoji: "🕊️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgVersalhes,
        conteudo:
          "DIREITO DIVINO DOS REIS afirma que o poder do monarca vem DIRETAMENTE de Deus. Contestar o rei seria contestar Deus — logo, pecado. Teoria defendida por pensadores como Bossuet.",
        exemplo:
          "Exemplo: essa doutrina justificava impor impostos sem consultar o povo e prender opositores sem processo. O rei estava acima das leis humanas — só respondia a Deus.",
      },
      {
        id: "mer",
        capa: "Mercantilismo",
        emoji: "💰",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgMoeda,
        conteudo:
          "MERCANTILISMO foi a política econômica do Absolutismo. Três pilares: METALISMO (acumular ouro e prata), PROTECIONISMO (impostos altos sobre estrangeiros) e PACTO COLONIAL (colônia só comercia com metrópole).",
        exemplo:
          "Exemplo: um comerciante da colônia brasileira NÃO podia vender açúcar direto para a Holanda. Era obrigado a vender para Portugal, que revendia para a Holanda com margem de lucro.",
      },
      {
        id: "pac",
        capa: "Pacto Colonial",
        emoji: "⚓",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgPorto,
        conteudo:
          "PACTO COLONIAL era o monopólio comercial: as colônias só podiam vender matérias-primas para a sua metrópole europeia, e comprar produtos manufaturados apenas dela. Garantia lucro máximo à coroa.",
        exemplo:
          "Exemplo: o Brasil só podia mandar seu açúcar para Portugal, e comprar tecidos e vinhos apenas de Portugal. Comércio direto com outro país era CONTRABANDO.",
      },
    ],
    falaFinal:
      "Absolutismo + Direito Divino + Mercantilismo + Pacto Colonial. Base do mundo moderno inicial.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico oficial do Mercantilismo. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgMerc,
    pontos: [
      {
        id: "met",
        x: 20,
        y: 35,
        emoji: "🥇",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgMoeda,
        titulo: "1. METALISMO",
        texto:
          "Acumular ouro e prata dentro do reino. Quanto mais metal precioso, mais rico o Estado. Justificava a exploração desenfreada de minas coloniais como Potosí (Bolívia) e Minas Gerais.",
      },
      {
        id: "pro",
        x: 50,
        y: 30,
        emoji: "🛡️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgPorto,
        titulo: "2. PROTECIONISMO",
        texto:
          "Impostos altos sobre produtos estrangeiros. Objetivo: proteger a produção interna e evitar que ouro saia do reino.",
      },
      {
        id: "pac",
        x: 80,
        y: 35,
        emoji: "⚓",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgPorto,
        titulo: "3. PACTO COLONIAL",
        texto:
          "Colônia só comercia com a metrópole. Matérias-primas baratas saem; produtos manufaturados caros entram. Lucro máximo pra coroa.",
      },
      {
        id: "bal",
        x: 50,
        y: 75,
        emoji: "⚖️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgMerc,
        titulo: "BALANÇA COMERCIAL FAVORÁVEL",
        texto:
          "Objetivo central: exportar MAIS do que importar. Assim, mais ouro e prata entram do que saem. Base do enriquecimento absolutista.",
      },
    ],
    falaFinal:
      "Três pilares mercantilistas + uma balança sempre no verde = reino forte.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de economista da corte.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual teoria afirmava que o poder do rei absolutista vinha DIRETAMENTE de Deus?",
        fotoUrl: imgLuis,
        cards: [
          { id: "dd", emoji: "🕊️", titulo: "Direito Divino dos Reis", cor: "from-teal-600 to-slate-900" },
          { id: "cs", emoji: "📜", titulo: "Contrato Social democrático", cor: "from-amber-600 to-slate-900" },
          { id: "gs", emoji: "🌍", titulo: "Globalização", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "dd",
        feedbackAcerto: "Correto. DIREITO DIVINO — defendido por Bossuet.",
        feedbackErro: "É o DIREITO DIVINO. Contrato Social veio depois com Rousseau.",
      },
      {
        id: "q2",
        pergunta: "O que era o METALISMO?",
        fotoUrl: imgMoeda,
        cards: [
          {
            id: "ac",
            emoji: "🥇",
            titulo: "Acumular ouro e prata no reino",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "es",
            emoji: "🎵",
            titulo: "Estilo musical medieval",
            cor: "from-teal-600 to-slate-900",
          },
          {
            id: "in",
            emoji: "⚙️",
            titulo: "Indústria automobilística",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "ac",
        feedbackAcerto: "Correto. Acumular metais preciosos — base do enriquecimento estatal.",
        feedbackErro: "É ACUMULAR OURO E PRATA. Nada a ver com música ou indústria.",
      },
      {
        id: "q3",
        pergunta: "O que era o PACTO COLONIAL?",
        fotoUrl: imgPorto,
        cards: [
          {
            id: "mon",
            emoji: "⚓",
            titulo: "Colônia só comercia com a metrópole",
            cor: "from-cyan-600 to-slate-900",
          },
          {
            id: "liv",
            emoji: "🌍",
            titulo: "Livre comércio internacional",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "tra",
            emoji: "🤝",
            titulo: "Acordo de paz entre reinos",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "mon",
        feedbackAcerto: "Correto. Monopólio comercial: colônia vinculada à metrópole.",
        feedbackErro: "É o MONOPÓLIO: colônia SÓ podia comerciar com a metrópole.",
      },
    ],
    falaFinal: "Radar afiado. Você já entende a lógica econômica absolutista.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre o reino absolutista. Um destaca quem CONCENTRAVA poder; outro quem PAGAVA a conta.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgMerc,
    camadas: [
      {
        id: "rei",
        rotulo: "Rei e corte",
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 30, y: 10, w: 40, h: 35 },
        descricao:
          "Rei, família real, altos nobres, ministros. Concentravam terras, cargos, exércitos mercenários e ouro. Viviam em palácios como Versalhes.",
      },
      {
        id: "pov",
        rotulo: "Povo e burguesia",
        emoji: "⚒️",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 10, y: 55, w: 80, h: 40 },
        descricao:
          "Camponeses, artesãos, comerciantes burgueses e pobres urbanos. Pagavam altos impostos para sustentar palácios e guerras. Sem direitos políticos.",
      },
    ],
    falaFinal:
      "Rei manda. Povo paga. Estrutura clássica do Antigo Regime.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo do Absolutismo europeu.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Consolidação do Absolutismo",
    paradas: [
      {
        id: "cris",
        emoji: "🏰",
        rotulo: "1. Crise feudal (séc. XIV)",
        fotoUrl: imgVersalhes,
        descricao: "Nobreza empobrece. Reis começam a centralizar poder.",
      },
      {
        id: "mon",
        emoji: "👑",
        rotulo: "2. Formação das Monarquias Nacionais (séc. XV)",
        fotoUrl: imgLuis,
        descricao: "Portugal, Espanha, França, Inglaterra unificam-se.",
      },
      {
        id: "mer",
        emoji: "💰",
        rotulo: "3. Adoção do Mercantilismo (séc. XVI)",
        fotoUrl: imgMoeda,
        descricao: "Economia estatal focada em acumular metais preciosos.",
      },
      {
        id: "luis",
        emoji: "🌞",
        rotulo: "4. Apogeu com Luís XIV (séc. XVII)",
        fotoUrl: imgVersalhes,
        descricao: "Versalhes vira o modelo absolutista da Europa.",
      },
    ],
    ordemCerta: ["cris", "mon", "mer", "luis"],
    feedbackAcerto:
      "Perfeito. Crise → monarquias → economia mercantilista → apogeu.",
    feedbackErro: "Essa não é a próxima. Sem crise feudal, os reis não teriam centralizado poder.",
    falaFinal: "Da fragmentação feudal ao Estado absolutista concentrado.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Página 4 da Bússola. Toque nos termos técnicos.",
    tituloLivro: "🧭 A Bússola do Novo Mundo",
    subtitulo: "Página 4 — O Cetro de Ouro do Monarca",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O ABSOLUTISMO foi o sistema político da Idade Moderna onde os reis concentravam TODOS os poderes do Estado em suas mãos. Não havia parlamento com força real, nem divisão de poderes. Justificado pela teoria do DIREITO DIVINO — o rei governa por vontade de Deus.",
        chaves: ["Absolutismo", "Direito Divino"],
        definicoes: {
          Absolutismo:
            "Sistema político em que o rei concentra todos os poderes do Estado, sem freios institucionais.",
          "Direito Divino":
            "Teoria de que o poder real vem diretamente de Deus, tornando o rei inquestionável.",
        },
        fotoUrl: imgLuis,
      },
      {
        id: "p2",
        texto:
          "O modelo absolutista mais famoso foi o de LUÍS XIV da França (1643-1715), o 'Rei Sol'. Construiu o Palácio de Versalhes para vigiar a nobreza e cunhou a frase 'L'ÉTAT C'EST MOI' (o Estado sou eu). Tinha exército permanente, burocracia centralizada e cobrava impostos pesados.",
        chaves: ["Luís XIV"],
        definicoes: {
          "Luís XIV":
            "Rei da França, 1643-1715. Reinado mais longo da história europeia. Símbolo máximo do absolutismo.",
        },
        fotoUrl: imgVersalhes,
      },
      {
        id: "p3",
        texto:
          "A economia do Absolutismo era o MERCANTILISMO, baseado em três pilares: METALISMO (acumular ouro e prata), PROTECIONISMO (cobrar impostos altos sobre importações) e PACTO COLONIAL (colônia só comercia com a metrópole). Objetivo: BALANÇA COMERCIAL FAVORÁVEL.",
        chaves: ["Mercantilismo", "Balança Comercial Favorável"],
        definicoes: {
          Mercantilismo:
            "Política econômica dos Estados absolutistas. Base: acumular metais preciosos e proteger a produção interna.",
          "Balança Comercial Favorável":
            "Situação em que um país exporta mais do que importa. Objetivo central do mercantilismo.",
        },
        fotoUrl: imgMerc,
      },
      {
        id: "p4",
        texto:
          "O PACTO COLONIAL amarrava as colônias ao monopólio da metrópole. O Brasil só podia vender açúcar, ouro e madeira para Portugal — e comprar tecidos, vinho e ferramentas apenas de lá. Comércio direto com outros países era CONTRABANDO, punido severamente.",
        chaves: ["Pacto Colonial"],
        definicoes: {
          "Pacto Colonial":
            "Monopólio comercial em que a colônia é obrigada a comerciar exclusivamente com a metrópole europeia.",
        },
        fotoUrl: imgPorto,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica como reis modernos concentraram poder e sustentaram a corte com dinheiro colonial.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de economista mercantilista. Classifique cada prática em METALISMO, PROTECIONISMO ou PACTO COLONIAL.",
    instrucao: "⏱️ Toque no pilar correto",
    duracaoSegundos: 22,
    pecas: [
      { id: "met", emoji: "🥇", rotulo: "Metalismo" },
      { id: "pro", emoji: "🛡️", rotulo: "Protecionismo" },
      { id: "pac", emoji: "⚓", rotulo: "Pacto Colonial" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Cobrar 100% de imposto sobre tecidos estrangeiros", emoji: "🛡️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Alta tarifa aduaneira", emoji: "🚫", cor: "from-teal-600 to-slate-900" },
        contexto: "Proteção da produção interna.",
        pecaCertaId: "pro",
        feedbackAcerto: "Correto. Imposto sobre importados = PROTECIONISMO.",
        feedbackErro: "É PROTECIONISMO — proteger a produção interna.",
      },
      {
        id: "r2",
        municipioA: { nome: "Acumular ouro e prata nos cofres reais", emoji: "🥇", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Estoque de metais preciosos", emoji: "💰", cor: "from-amber-600 to-slate-900" },
        contexto: "Encher o tesouro do reino.",
        pecaCertaId: "met",
        feedbackAcerto: "Correto. Ouro e prata = METALISMO.",
        feedbackErro: "Acumular metais preciosos = METALISMO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Colônia só pode vender para a metrópole", emoji: "⚓", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Monopólio comercial", emoji: "🚢", cor: "from-cyan-600 to-slate-900" },
        contexto: "Comércio exclusivo entre colônia e metrópole.",
        pecaCertaId: "pac",
        feedbackAcerto: "Correto. Monopólio = PACTO COLONIAL.",
        feedbackErro: "É o PACTO COLONIAL.",
      },
      {
        id: "r4",
        municipioA: { nome: "Explorar minas de Potosí e Ouro Preto", emoji: "⛏️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Extração colonial de metais", emoji: "🥇", cor: "from-amber-600 to-slate-900" },
        contexto: "Extração intensa de ouro e prata das Américas.",
        pecaCertaId: "met",
        feedbackAcerto: "Correto. Metais das colônias = METALISMO.",
        feedbackErro: "É METALISMO — busca de ouro nas colônias.",
      },
      {
        id: "r5",
        municipioA: { nome: "Proibir comprar produtos ingleses na França", emoji: "🚫", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Restrição a importações", emoji: "🛡️", cor: "from-teal-600 to-slate-900" },
        contexto: "Impedir concorrência estrangeira.",
        pecaCertaId: "pro",
        feedbackAcerto: "Correto. Restringir importados = PROTECIONISMO.",
        feedbackErro: "É PROTECIONISMO — barreira a produtos externos.",
      },
      {
        id: "r6",
        municipioA: { nome: "Brasil obrigado a vender açúcar só a Portugal", emoji: "🇵🇹", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Exclusividade colonial", emoji: "⛓️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Colônia vinculada à sua metrópole.",
        pecaCertaId: "pac",
        feedbackAcerto: "Correto. PACTO COLONIAL.",
        feedbackErro: "É PACTO COLONIAL.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já opera como um economista mercantilista.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza dos gastos do reino absolutista: proporção entre CORTE + EXÉRCITO e OBRAS PÚBLICAS + serviços ao povo.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgVersalhes,
    fatias: [
      {
        id: "cor",
        rotulo: "Corte, palácios e exército (~80%)",
        emoji: "👑",
        percentual: 80,
        cor: "#b45309",
        descricao:
          "Palácios como Versalhes, exército permanente, guarda real, festas da corte, pensões pra nobres. Prioridade absoluta do reino.",
        exemplos: ["🏰 Versalhes", "⚔️ Exército", "🎭 Corte"],
      },
      {
        id: "pov",
        rotulo: "Serviços ao povo (~20%)",
        emoji: "🛤️",
        percentual: 20,
        cor: "#0f766e",
        descricao:
          "Estradas, portos, hospitais, algum saneamento em grandes cidades. Muito pouco em relação aos impostos cobrados.",
        exemplos: ["🛤️ Estradas", "🚢 Portos", "🏥 Poucos hospitais"],
      },
    ],
    falaFinal:
      "Povo paga imposto. Rei constrói palácio. Desequilíbrio que preparou revoluções.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Cetro de Ouro do Monarca.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgLuis,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual teoria justificava que o poder do rei absolutista vinha de Deus?",
        opcoes: [
          { id: "a", texto: "Teoria do Direito Divino dos Reis.", correta: true },
          { id: "b", texto: "Contrato Social Democrático.", correta: false },
          { id: "c", texto: "Doutrina do Karma.", correta: false },
        ],
        feedbackAcerto: "Correto. DIREITO DIVINO — rei governa por vontade de Deus.",
        feedbackErro: "É DIREITO DIVINO. Contrato Social é o OPOSTO — vem do povo.",
      },
      {
        id: "av2",
        pergunta: "Qual era a REGRA DE OURO do Mercantilismo?",
        opcoes: [
          { id: "a", texto: "Importar mais do que exportar.", correta: false },
          { id: "b", texto: "Balança comercial favorável (exportar mais do que importar).", correta: true },
          { id: "c", texto: "Distribuir a riqueza igualmente.", correta: false },
        ],
        feedbackAcerto: "Correto. BALANÇA COMERCIAL FAVORÁVEL — mais ouro entrando do que saindo.",
        feedbackErro: "É BALANÇA COMERCIAL FAVORÁVEL — exportar mais.",
      },
      {
        id: "av3",
        pergunta: "O que era o PACTO COLONIAL?",
        opcoes: [
          { id: "a", texto: "Colônia só podia comerciar com a metrópole.", correta: true },
          { id: "b", texto: "Tratado de paz entre reinos.", correta: false },
          { id: "c", texto: "Livre comércio mundial.", correta: false },
        ],
        feedbackAcerto: "Correto. Monopólio comercial: colônia ↔ metrópole.",
        feedbackErro: "É o MONOPÓLIO COMERCIAL entre colônia e metrópole.",
      },
    ],
    selo: {
      nome: "Cetro de Ouro do Monarca",
      subtitulo: "Engrenagem 4 da Bússola",
      emoji: "👑",
      cor: "from-amber-500 to-slate-900",
      fotoUrl: imgLuis,
    },
    falaFinal:
      "Engrenagem 4 destravada. Você agora entende como reis modernos concentraram poder e economia.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Cetro de Ouro do Monarca" },
};
