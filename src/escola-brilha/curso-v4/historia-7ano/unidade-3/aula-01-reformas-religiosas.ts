import type { AulaGeoV1 } from "../../types";
import { url as img95 } from "@/assets/historia-7ano/u3-95-teses.jpg.asset.json";
import { url as imgIndulgencia } from "@/assets/historia-7ano/u3-indulgencia.jpg.asset.json";
import { url as imgTrento } from "@/assets/historia-7ano/u3-concilio-trento.jpg.asset.json";
import { url as imgBiblia } from "@/assets/historia-7ano/u3-biblia-traduzida.jpg.asset.json";
import { url as imgReformas } from "@/assets/historia-7ano/u3-infografico-reformas.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-reformas-religiosas",
  titulo: "As Reformas Religiosas do Século XVI",
  iconeTrilha: "✝️",
  bncc: ["EF07HI05", "EF07HI06"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: img95,
    imagemDestaqueUrl: imgReformas,
    aurora:
      "Em 1517, um monge chamado MARTINHO LUTERO pregou 95 críticas à Igreja Católica na porta de uma igreja em Wittenberg. Uma dessas críticas era clara: a Igreja vendia INDULGÊNCIAS — perdão de pecados em troca de dinheiro. Aquele gesto rachou o cristianismo ocidental para sempre.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 3 da Bússola: O Selo das Teses Ocultas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de Lutero, a Bíblia só existia em LATIM — língua que só clero e nobres liam. Os reformadores traduziram para línguas locais. Como isso afetou o poder da Igreja?",
    pergunta: "Por que traduzir a Bíblia enfraqueceu o clero católico?",
    fotoUrl: imgBiblia,
    opcoes: [
      {
        id: "lei",
        titulo: "PESSOAS PASSARAM A LER SOZINHAS",
        subtitulo: "sem depender do padre pra interpretar",
        emoji: "📖",
        cor: "from-teal-800 to-slate-950",
      },
      {
        id: "cul",
        titulo: "NINGUÉM MUDOU NADA",
        subtitulo: "traduzir livro não muda o poder",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "lei",
    feedbackAcerto:
      "Correto. Traduzir a Bíblia para alemão, inglês, francês permitiu que qualquer pessoa alfabetizada LESSE e INTERPRETASSE. O clero perdeu o monopólio da 'palavra sagrada'.",
    feedbackErro:
      "Não. Traduzir teve enorme impacto. Antes só o padre lia latim; depois, qualquer pessoa alfabetizada podia interpretar a Bíblia sozinha. O controle religioso rachou.",
    falaFinal:
      "Guarde: acesso ao texto = redução do poder do intermediário.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave das Reformas Religiosas.",
    instrucao: "",
    cadernos: [
      {
        id: "ind",
        capa: "Indulgência",
        emoji: "💰",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgIndulgencia,
        conteudo:
          "INDULGÊNCIA era o documento vendido pela Igreja Católica prometendo perdão de pecados (e menos tempo no purgatório) em troca de dinheiro. Lutero considerou isso ABUSO — Deus não vende salvação.",
        exemplo:
          "Exemplo: a venda de indulgências na Alemanha financiou a construção da Basílica de São Pedro, em Roma. Foi o estopim direto para Lutero publicar suas 95 teses em 1517.",
      },
      {
        id: "lut",
        capa: "Luteranismo",
        emoji: "✝️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: img95,
        conteudo:
          "LUTERANISMO defende que a salvação vem SÓ pela FÉ (sola fide), SÓ pela ESCRITURA (sola scriptura) e SÓ pela GRAÇA (sola gratia) — sem intermediação obrigatória do clero e sem compra de indulgências.",
        exemplo:
          "Exemplo: Lutero traduziu a Bíblia para o alemão em 1522, permitindo que camponeses alfabetizados lessem por conta própria. Foi um choque cultural imenso.",
      },
      {
        id: "cal",
        capa: "Calvinismo",
        emoji: "⚖️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgReformas,
        conteudo:
          "CALVINISMO, criado por João Calvino em Genebra, defende a PREDESTINAÇÃO: Deus já escolheu quem se salva. Trabalho duro, poupança e sucesso material eram vistos como sinais de graça divina — o que agradou muito a burguesia.",
        exemplo:
          "Exemplo: o calvinismo se espalhou pela Suíça, Escócia, Holanda e França (huguenotes). Muitos historiadores ligam essa ética ao desenvolvimento do capitalismo moderno.",
      },
      {
        id: "con",
        capa: "Contrarreforma",
        emoji: "⛪",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgTrento,
        conteudo:
          "CONTRARREFORMA foi a reação da Igreja Católica: no CONCÍLIO DE TRENTO (1545-1563), reafirmou seus dogmas, criou a COMPANHIA DE JESUS (jesuítas) para catequizar o mundo, reativou a INQUISIÇÃO e criou o Index (lista de livros proibidos).",
        exemplo:
          "Exemplo: os jesuítas fundaram missões no Brasil (São Paulo, Piratininga) para catequizar indígenas. A Contrarreforma projetou a fé católica ao mundo colonial.",
      },
    ],
    falaFinal:
      "Indulgência + Luteranismo + Calvinismo + Contrarreforma. Séc. XVI reorganizou a fé.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico das quatro grandes reformas religiosas do século XVI. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgReformas,
    pontos: [
      {
        id: "lut",
        x: 20,
        y: 40,
        emoji: "✝️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: img95,
        titulo: "LUTERANISMO · Alemanha",
        texto:
          "Lutero, 1517. Salvação pela fé, Bíblia como única autoridade, rejeição do Papa e das indulgências. Apoiado por príncipes alemães.",
      },
      {
        id: "cal",
        x: 45,
        y: 40,
        emoji: "⚖️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgReformas,
        titulo: "CALVINISMO · Suíça",
        texto:
          "Calvino, 1536. Predestinação, valorização do trabalho e da poupança, disciplina moral rígida. Espalha-se pela Escócia, Holanda e França.",
      },
      {
        id: "ang",
        x: 70,
        y: 40,
        emoji: "👑",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgBiblia,
        titulo: "ANGLICANISMO · Inglaterra",
        texto:
          "Henrique VIII, 1534. Rompe com o Papa para poder se divorciar. Torna-se chefe supremo da Igreja da Inglaterra. Mantém liturgia parecida com a católica.",
      },
      {
        id: "con",
        x: 45,
        y: 80,
        emoji: "⛪",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgTrento,
        titulo: "CONTRARREFORMA · Igreja Católica",
        texto:
          "Concílio de Trento (1545-63), Jesuítas, Inquisição e Index. Reafirma dogmas, moderniza clero e expande catequese pra colônias.",
      },
    ],
    falaFinal:
      "Quatro caminhos, um mesmo tronco cristão rachado.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de teólogo crítico.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem publicou as 95 Teses em 1517, iniciando a Reforma Protestante?",
        fotoUrl: img95,
        cards: [
          { id: "l", emoji: "✝️", titulo: "Martinho Lutero", cor: "from-teal-600 to-slate-900" },
          { id: "c", emoji: "⚖️", titulo: "João Calvino", cor: "from-amber-600 to-slate-900" },
          { id: "h", emoji: "👑", titulo: "Henrique VIII", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "l",
        feedbackAcerto: "Correto. MARTINHO LUTERO, monge alemão, em Wittenberg.",
        feedbackErro: "É LUTERO. Calvino veio depois, e Henrique VIII rompeu por outros motivos.",
      },
      {
        id: "q2",
        pergunta: "Qual doutrina defende que Deus JÁ ESCOLHEU quem será salvo, independentemente das obras?",
        fotoUrl: imgReformas,
        cards: [
          { id: "p", emoji: "⚖️", titulo: "Predestinação (Calvinismo)", cor: "from-amber-600 to-slate-900" },
          { id: "i", emoji: "💰", titulo: "Indulgência", cor: "from-teal-600 to-slate-900" },
          { id: "e", emoji: "🕯️", titulo: "Excomunhão", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "p",
        feedbackAcerto: "Correto. PREDESTINAÇÃO é a marca do CALVINISMO.",
        feedbackErro: "É PREDESTINAÇÃO — doutrina de Calvino.",
      },
      {
        id: "q3",
        pergunta: "Qual ordem religiosa criada na Contrarreforma catequizou os povos indígenas do Brasil colonial?",
        fotoUrl: imgTrento,
        cards: [
          { id: "j", emoji: "⛪", titulo: "Companhia de Jesus (Jesuítas)", cor: "from-teal-600 to-slate-900" },
          { id: "t", emoji: "🛡️", titulo: "Cavaleiros Templários", cor: "from-amber-600 to-slate-900" },
          { id: "b", emoji: "📿", titulo: "Beneditinos", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "j",
        feedbackAcerto: "Correto. JESUÍTAS — fundaram missões e escolas no Brasil colonial.",
        feedbackErro: "É a COMPANHIA DE JESUS (Jesuítas), criada por Inácio de Loyola.",
      },
    ],
    falaFinal: "Radar afiado. Você já mapeia as fraturas do cristianismo do séc. XVI.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre a Europa religiosa após 1550. NORTE protestante × SUL católico.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgReformas,
    camadas: [
      {
        id: "prot",
        rotulo: "Europa Protestante",
        emoji: "✝️",
        cor: "from-teal-700 to-slate-900",
        rect: { x: 20, y: 10, w: 60, h: 40 },
        descricao:
          "Alemanha (norte), Escandinávia, Inglaterra, Escócia, Holanda. Luteranismo, calvinismo, anglicanismo. Bíblia em línguas locais, comércio forte.",
      },
      {
        id: "cat",
        rotulo: "Europa Católica",
        emoji: "⛪",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 20, y: 55, w: 60, h: 40 },
        descricao:
          "Itália, Espanha, Portugal, França (majoritariamente), sul da Alemanha, Áustria. Contrarreforma, jesuítas, Inquisição, colonização católica das Américas.",
      },
    ],
    falaFinal:
      "Uma rachadura religiosa que ainda ecoa na cultura europeia hoje.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo das Reformas Religiosas.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Passos das Reformas",
    paradas: [
      {
        id: "ind",
        emoji: "💰",
        rotulo: "1. Igreja vende indulgências (séc. XV-XVI)",
        fotoUrl: imgIndulgencia,
        descricao: "Financiamento da Basílica de São Pedro por venda de perdão.",
      },
      {
        id: "lut",
        emoji: "✝️",
        rotulo: "2. Lutero prega as 95 Teses (1517)",
        fotoUrl: img95,
        descricao: "Estopim da Reforma Protestante na Alemanha.",
      },
      {
        id: "cal",
        emoji: "⚖️",
        rotulo: "3. Calvino publica em Genebra (1536)",
        fotoUrl: imgReformas,
        descricao: "Nasce o calvinismo com a doutrina da predestinação.",
      },
      {
        id: "tre",
        emoji: "⛪",
        rotulo: "4. Concílio de Trento (1545-1563)",
        fotoUrl: imgTrento,
        descricao: "Contrarreforma católica: jesuítas, Inquisição, Index.",
      },
    ],
    ordemCerta: ["ind", "lut", "cal", "tre"],
    feedbackAcerto:
      "Perfeito. Abuso → protesto → nova doutrina → reação católica.",
    feedbackErro: "Essa não é a próxima. A venda de indulgências veio antes de Lutero.",
    falaFinal: "Ação e reação. Cristianismo se dividiu em quatro grandes ramos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Página 3 da Bússola. Toque nos termos técnicos.",
    tituloLivro: "🧭 A Bússola do Novo Mundo",
    subtitulo: "Página 3 — O Selo das Teses Ocultas",
    paragrafos: [
      {
        id: "p1",
        texto:
          "No início do século XVI, a Igreja Católica vendia INDULGÊNCIAS — documentos que prometiam perdão de pecados em troca de dinheiro. Isso financiava a construção de basílicas em Roma. Muitos cristãos consideravam esse comércio um ABUSO.",
        chaves: ["Indulgências"],
        definicoes: {
          Indulgências:
            "Documentos vendidos pela Igreja Católica prometendo perdão de pecados ou redução do tempo no purgatório.",
        },
        fotoUrl: imgIndulgencia,
      },
      {
        id: "p2",
        texto:
          "Em 1517, o monge alemão MARTINHO LUTERO pregou 95 TESES em Wittenberg criticando as indulgências e defendendo a salvação SOMENTE PELA FÉ. Nascia a REFORMA PROTESTANTE. Lutero traduziu a Bíblia para o alemão, e a prensa de Gutenberg espalhou suas ideias em semanas.",
        chaves: ["Reforma Protestante"],
        definicoes: {
          "Reforma Protestante":
            "Movimento do século XVI que rompeu com a Igreja Católica e criou novas igrejas cristãs — luteranismo, calvinismo, anglicanismo.",
        },
        fotoUrl: img95,
      },
      {
        id: "p3",
        texto:
          "Outros reformadores seguiram: CALVINO na Suíça defendeu a PREDESTINAÇÃO e valorizou o trabalho e a poupança (agradando a burguesia). HENRIQUE VIII na Inglaterra rompeu com o Papa em 1534 e criou o ANGLICANISMO com ele próprio como chefe supremo da Igreja.",
        chaves: ["Predestinação", "Anglicanismo"],
        definicoes: {
          Predestinação:
            "Doutrina calvinista de que Deus já escolheu quem se salva, independentemente das obras humanas.",
          Anglicanismo:
            "Igreja da Inglaterra criada por Henrique VIII em 1534 ao romper com o Papa. Mistura elementos católicos e protestantes.",
        },
        fotoUrl: imgReformas,
      },
      {
        id: "p4",
        texto:
          "A Igreja Católica reagiu com a CONTRARREFORMA. No CONCÍLIO DE TRENTO (1545-1563), reafirmou seus dogmas, criou a COMPANHIA DE JESUS (jesuítas) para catequizar o mundo e reativou a INQUISIÇÃO. O Index Librorum Prohibitorum listava livros proibidos aos católicos, incluindo obras de Galileu.",
        chaves: ["Contrarreforma"],
        definicoes: {
          Contrarreforma:
            "Reação da Igreja Católica à Reforma Protestante. Concílio de Trento, jesuítas, Inquisição e Index de livros proibidos.",
        },
        fotoUrl: imgTrento,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já entende as quatro grandes fraturas religiosas do século XVI.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de teólogo. Classifique cada característica em LUTERANISMO, CALVINISMO, ANGLICANISMO ou CONTRARREFORMA.",
    instrucao: "⏱️ Toque na corrente correta",
    duracaoSegundos: 26,
    pecas: [
      { id: "lut", emoji: "✝️", rotulo: "Luteranismo" },
      { id: "cal", emoji: "⚖️", rotulo: "Calvinismo" },
      { id: "ang", emoji: "👑", rotulo: "Anglicanismo" },
      { id: "con", emoji: "⛪", rotulo: "Contrarreforma" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Salvação apenas pela fé (sola fide)", emoji: "📖", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Fé como único caminho", emoji: "✝️", cor: "from-teal-600 to-slate-900" },
        contexto: "Doutrina central pregada em Wittenberg por um monge alemão.",
        pecaCertaId: "lut",
        feedbackAcerto: "Correto. Sola fide = LUTERANISMO.",
        feedbackErro: "Sola fide é a marca do LUTERANISMO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Doutrina da Predestinação", emoji: "⚖️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Deus já escolheu quem se salva", emoji: "🎯", cor: "from-amber-600 to-slate-900" },
        contexto: "Ensinada em Genebra por Calvino.",
        pecaCertaId: "cal",
        feedbackAcerto: "Correto. Predestinação = CALVINISMO.",
        feedbackErro: "Predestinação é CALVINISMO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Rei rompe com o Papa para se divorciar", emoji: "👑", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Chefe supremo da Igreja Nacional", emoji: "🏰", cor: "from-cyan-600 to-slate-900" },
        contexto: "Inglaterra, 1534.",
        pecaCertaId: "ang",
        feedbackAcerto: "Correto. Henrique VIII = ANGLICANISMO.",
        feedbackErro: "É ANGLICANISMO — Henrique VIII cria a Igreja da Inglaterra.",
      },
      {
        id: "r4",
        municipioA: { nome: "Criação da Companhia de Jesus", emoji: "⛪", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Jesuítas para catequese global", emoji: "🕯️", cor: "from-slate-600 to-slate-900" },
        contexto: "Ordem religiosa criada por Inácio de Loyola.",
        pecaCertaId: "con",
        feedbackAcerto: "Correto. Jesuítas = CONTRARREFORMA.",
        feedbackErro: "Jesuítas são obra da CONTRARREFORMA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Concílio de Trento (1545-1563)", emoji: "⛪", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Reafirmação dos dogmas católicos", emoji: "📜", cor: "from-slate-600 to-slate-900" },
        contexto: "Grande encontro de cardeais que definiu a resposta católica.",
        pecaCertaId: "con",
        feedbackAcerto: "Correto. Trento = CONTRARREFORMA.",
        feedbackErro: "Trento é o marco central da CONTRARREFORMA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Tradução da Bíblia para o alemão", emoji: "📖", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Escritura em língua vernácula", emoji: "🗣️", cor: "from-teal-600 to-slate-900" },
        contexto: "Feita para que camponeses alfabetizados lessem a Bíblia.",
        pecaCertaId: "lut",
        feedbackAcerto: "Correto. Bíblia em alemão = LUTERO/LUTERANISMO.",
        feedbackErro: "Foi LUTERO — LUTERANISMO.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já separa as quatro correntes religiosas do séc. XVI.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da Europa cristã depois de 1600: proporção CATÓLICOS × PROTESTANTES.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgReformas,
    fatias: [
      {
        id: "cat",
        rotulo: "Católicos (~55%)",
        emoji: "⛪",
        percentual: 55,
        cor: "#b45309",
        descricao:
          "Itália, Espanha, Portugal, França, sul da Alemanha, Áustria e as Américas coloniais católicas.",
        exemplos: ["🇪🇸 Espanha", "🇵🇹 Portugal", "🇮🇹 Itália"],
      },
      {
        id: "pro",
        rotulo: "Protestantes (~45%)",
        emoji: "✝️",
        percentual: 45,
        cor: "#0f766e",
        descricao:
          "Norte da Alemanha, Escandinávia, Inglaterra, Escócia, Holanda, e depois as colônias inglesas na América do Norte.",
        exemplos: ["🇩🇪 Alemanha norte", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", "🇳🇱 Holanda"],
      },
    ],
    falaFinal:
      "A rachadura religiosa moldou a política, a economia e a colonização das Américas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Selo das Teses Ocultas.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: img95,
    perguntas: [
      {
        id: "av1",
        pergunta: "Quem publicou as 95 Teses em 1517, iniciando a Reforma Protestante?",
        opcoes: [
          { id: "a", texto: "João Calvino.", correta: false },
          { id: "b", texto: "Martinho Lutero.", correta: true },
          { id: "c", texto: "Papa Leão X.", correta: false },
        ],
        feedbackAcerto: "Correto. MARTINHO LUTERO, monge alemão.",
        feedbackErro: "É LUTERO. Calvino veio depois.",
      },
      {
        id: "av2",
        pergunta: "Qual ordem foi criada pela Igreja Católica na Contrarreforma para catequizar as Américas?",
        opcoes: [
          { id: "a", texto: "Cavaleiros Templários.", correta: false },
          { id: "b", texto: "Companhia de Jesus (Jesuítas).", correta: true },
          { id: "c", texto: "Beneditinos.", correta: false },
        ],
        feedbackAcerto: "Correto. JESUÍTAS — fundaram escolas e missões no Brasil.",
        feedbackErro: "É a COMPANHIA DE JESUS (Jesuítas).",
      },
      {
        id: "av3",
        pergunta: "Qual doutrina calvinista defende que Deus já escolheu quem será salvo?",
        opcoes: [
          { id: "a", texto: "Indulgência.", correta: false },
          { id: "b", texto: "Predestinação.", correta: true },
          { id: "c", texto: "Excomunhão.", correta: false },
        ],
        feedbackAcerto: "Correto. PREDESTINAÇÃO — marca do calvinismo.",
        feedbackErro: "É a PREDESTINAÇÃO.",
      },
    ],
    selo: {
      nome: "Selo das Teses Ocultas",
      subtitulo: "Engrenagem 3 da Bússola",
      emoji: "✝️",
      cor: "from-teal-500 to-slate-900",
      fotoUrl: img95,
    },
    falaFinal:
      "Engrenagem 3 destravada. Você agora entende a maior rachadura religiosa da história ocidental.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Selo das Teses Ocultas" },
};
