import type { AulaGeoV1 } from "../../types";
import { url as imgDir } from "@/assets/historia-9ano/u6-diretas-ja.jpg.asset.json";
import { url as imgRes } from "@/assets/historia-9ano/u6-resistencia-cultural.jpg.asset.json";
import { url as imgTanqueDit } from "@/assets/historia-9ano/u6-tanque-ditadura.jpg.asset.json";
import { url as imgMpb } from "@/assets/historia-9ano/u6-mpb-resistencia.jpg.asset.json";
import { url as imgDiretas } from "@/assets/historia-9ano/u6-diretas-comicio.jpg.asset.json";
export const aula03: AulaGeoV1 = {
  slug: "aula-03-resistencias-reorganizacao",
  titulo: "Resistências e Propostas de Reorganização Democrática",
  iconeTrilha: "✊",
  bncc: ["EF09HI20"],
  duracaoMin: 30,
  estilo: "teen",


  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgRes,
    imagemDestaqueUrl: imgMpb,
    aurora:
      "Enquanto tanques ocupavam as ruas e a censura calava jornais, uma parte do Brasil não se calou. Estudantes organizaram passeatas, artistas escreveram canções em código, advogados criaram comissões de direitos humanos, a Igreja abriu suas portas a perseguidos, e políticos exilados escreveram propostas de reorganização democrática. Resistir à ditadura tomou muitas formas — nem toda luta usou armas.",
    falaFinal: "Resistência não é só combate: é também cultura, direito e organização política.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Diante da censura e da repressão, quais formas de resistência os brasileiros usaram?",
    pergunta: "Como a sociedade resistiu à ditadura, além da luta armada?",
    fotoUrl: imgMpb,
    opcoes: [
      { id: "mul", titulo: "MÚLTIPLAS FORMAS", subtitulo: "música, imprensa alternativa, Igreja, movimento estudantil", emoji: "✊", cor: "from-teal-800 to-slate-950" },
      { id: "nen", titulo: "NENHUMA RESISTÊNCIA", subtitulo: "a sociedade aceitou passivamente", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "mul",
    feedbackAcerto:
      "Correto. Música (MPB), imprensa alternativa (como o jornal Pasquim), a UNE, a Igreja progressista (Teologia da Libertação, CEBs) e até a guerrilha armada foram formas diferentes de resistir.",
    feedbackErro:
      "Não. A resistência foi ampla e diversa — cultura, imprensa, movimento estudantil, Igreja e até luta armada.",
    falaFinal: "Resistir foi plural: cada grupo usou as ferramentas que tinha.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro formas de resistência e propostas de reorganização democrática.",
    instrucao: "",
    cadernos: [
      {
        id: "une",
        capa: "Movimento Estudantil (UNE)",
        emoji: "🎓",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgRes,
        conteudo:
          "UNE (União Nacional dos Estudantes) foi decretada ilegal em 1964, mas continuou clandestina. Organizou o Congresso de Ibiúna (1968), com mais de 700 estudantes, reprimido violentamente pela polícia — um dos maiores atos de resistência estudantil do período.",
        exemplo:
          "Exemplo: a Passeata dos Cem Mil (Rio de Janeiro, junho de 1968) reuniu artistas, estudantes e a população contra a ditadura, pouco antes do AI-5.",
      },
      {
        id: "imp",
        capa: "Imprensa Alternativa",
        emoji: "📰",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgDiretas,
        conteudo:
          "IMPRENSA ALTERNATIVA eram jornais que driblavam a censura com humor e crítica indireta. O Pasquim (fundado em 1969) e Opinião (1972) publicavam charges e reportagens que os grandes jornais não ousavam.",
        exemplo:
          "Exemplo: o Pasquim chegou a vender 250 mil exemplares por edição — apesar de censura prévia e prisões de seus jornalistas.",
      },
      {
        id: "igr",
        capa: "Igreja Progressista",
        emoji: "⛪",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgMpb,
        conteudo:
          "IGREJA PROGRESSISTA: setores da Igreja Católica ligados à TEOLOGIA DA LIBERTAÇÃO criaram Comunidades Eclesiais de Base (CEBs) e denunciaram torturas. Dom Hélder Câmara e Dom Paulo Evaristo Arns foram vozes públicas contra a repressão.",
        exemplo:
          "Exemplo: em 1975, Dom Paulo Evaristo Arns organizou missa ecumênica em memória de Vladimir Herzog na Catedral da Sé, com 8 mil pessoas — desafio público à ditadura.",
      },
      {
        id: "prop",
        capa: "Propostas de Reorganização",
        emoji: "📜",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgDir,
        conteudo:
          "PROPOSTAS DE REORGANIZAÇÃO DEMOCRÁTICA vieram de políticos exilados e da oposição legal (MDB): retomada de eleições diretas, anistia ampla, nova Constituição e fim dos atos institucionais. A Frente Ampla (1966) tentou unir opositores de diferentes correntes.",
        exemplo:
          "Exemplo: o MDB (Movimento Democrático Brasileiro), único partido de oposição legal permitido, cresceu nas eleições de 1974 mesmo sob repressão — sinal de desgaste do regime.",
      },
    ],
    falaFinal: "Estudantes + Imprensa + Igreja + Propostas políticas. A resistência tinha muitas frentes.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três frentes de resistência à ditadura. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgRes,
    pontos: [
      { id: "cul", x: 24, y: 32, emoji: "🎸", cor: "from-teal-700 to-slate-900", fotoUrl: imgMpb, titulo: "RESISTÊNCIA CULTURAL", texto: "Chico Buarque, Caetano Veloso, Gilberto Gil e Elis Regina usaram metáforas para driblar a censura. Muitos foram exilados entre 1968 e 1972." },
      { id: "est", x: 54, y: 56, emoji: "🎓", cor: "from-amber-700 to-slate-900", fotoUrl: imgDir, titulo: "MOVIMENTO ESTUDANTIL", texto: "UNE clandestina, passeatas, o Congresso de Ibiúna (1968) reprimido com centenas de prisões." },
      { id: "pol", x: 80, y: 40, emoji: "📜", cor: "from-cyan-700 to-slate-900", fotoUrl: imgDiretas, titulo: "OPOSIÇÃO POLÍTICA LEGAL", texto: "O MDB, único partido de oposição tolerado, cresceu nas urnas em 1974, mostrando insatisfação crescente com a ditadura." },
    ],
    falaFinal: "Cultura + estudantes + política legal. Resistir tinha muitas frentes, dentro e fora da lei.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que era o Pasquim?", fotoUrl: imgDiretas, cards: [
        { id: "j", emoji: "📰", titulo: "Jornal de imprensa alternativa", cor: "from-teal-600 to-slate-900" },
        { id: "p", emoji: "🎖️", titulo: "Partido militar", cor: "from-amber-600 to-slate-900" },
        { id: "b", emoji: "🏦", titulo: "Banco estatal", cor: "from-slate-600 to-slate-900" },
      ], correta: "j", feedbackAcerto: "Correto. Jornal que driblava a censura com humor crítico.", feedbackErro: "É um jornal de imprensa alternativa, fundado em 1969." },
      { id: "q2", pergunta: "Qual foi o único partido de oposição legal durante boa parte da ditadura?", fotoUrl: imgDir, cards: [
        { id: "m", emoji: "📜", titulo: "MDB", cor: "from-teal-600 to-slate-900" },
        { id: "p", emoji: "🎖️", titulo: "ARENA", cor: "from-amber-600 to-slate-900" },
        { id: "u", emoji: "🎓", titulo: "UNE", cor: "from-slate-600 to-slate-900" },
      ], correta: "m", feedbackAcerto: "Correto. MDB era a oposição legal; ARENA apoiava o governo.", feedbackErro: "É o MDB. ARENA era o partido governista." },
      { id: "q3", pergunta: "O que foi o Congresso de Ibiúna (1968)?", fotoUrl: imgMpb, cards: [
        { id: "e", emoji: "🎓", titulo: "Encontro clandestino da UNE, duramente reprimido", cor: "from-teal-600 to-slate-900" },
        { id: "g", emoji: "🎖️", titulo: "Reunião de generais", cor: "from-amber-600 to-slate-900" },
        { id: "c", emoji: "⛪", titulo: "Concílio da Igreja", cor: "from-slate-600 to-slate-900" },
      ], correta: "e", feedbackAcerto: "Correto. Mais de 700 estudantes foram presos nesse congresso clandestino.", feedbackErro: "É o encontro clandestino da UNE, reprimido violentamente pela polícia." },
    ],
    falaFinal: "Você já reconhece as diferentes frentes de resistência.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Duas formas de agir contra a ditadura.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgMpb,
    camadas: [
      { id: "pac", rotulo: "Resistência pacífica e legal", emoji: "📜", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "MDB, imprensa alternativa, música, Igreja progressista, passeatas públicas — atuavam dentro (ou nas bordas) da legalidade." },
      { id: "arm", rotulo: "Luta armada", emoji: "⚔️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Pequenos grupos como a ALN e a VPR optaram pela guerrilha urbana e rural (ex.: Guerrilha do Araguaia), duramente reprimidos e praticamente destruídos até 1975." },
    ],
    falaFinal: "Resistência pacífica e luta armada coexistiram — com resultados e riscos bem diferentes.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos da resistência.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos da resistência (1966-1979)",
    paradas: [
      { id: "fa", emoji: "🤝", rotulo: "1. Frente Ampla (1966)", fotoUrl: imgDir, descricao: "Tentativa de unir oposições de diferentes correntes." },
      { id: "pa", emoji: "📢", rotulo: "2. Passeata dos Cem Mil (1968)", fotoUrl: imgMpb, descricao: "Grande ato público contra a ditadura, antes do AI-5." },
      { id: "ib", emoji: "🎓", rotulo: "3. Congresso de Ibiúna (1968)", fotoUrl: imgRes, descricao: "Encontro clandestino da UNE, duramente reprimido." },
      { id: "md", emoji: "📜", rotulo: "4. Crescimento do MDB (1974)", fotoUrl: imgDiretas, descricao: "Oposição legal cresce nas urnas, sinal de desgaste do regime." },
    ],
    ordemCerta: ["fa", "pa", "ib", "md"],
    feedbackAcerto: "Perfeito. De 1966 a 1974, a resistência se transforma e cresce.",
    feedbackErro: "Comece pela Frente Ampla (1966) e siga a cronologia.",
    falaFinal: "4 marcos que mostram a resistência crescendo mesmo sob repressão.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 6-C da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 6-C — Resistências e propostas de reorganização",
    paragrafos: [
      { id: "p1", texto: "A resistência à ditadura teve muitas formas. O MOVIMENTO ESTUDANTIL, através da UNE (ilegal desde 1964, mas atuante na clandestinidade), organizou passeatas e congressos, como o de Ibiúna (1968), duramente reprimido.", chaves: ["Movimento Estudantil"], definicoes: { "Movimento Estudantil": "Organização de estudantes, com a UNE como principal entidade, que resistiu à ditadura mesmo na ilegalidade." }, fotoUrl: imgRes },
      { id: "p2", texto: "A IMPRENSA ALTERNATIVA, como o jornal Pasquim, driblava a censura com humor e crítica indireta. Artistas da MPB — Chico Buarque, Caetano Veloso, Gilberto Gil — compunham canções em código, muitas vezes censuradas mesmo assim.", chaves: ["Imprensa Alternativa"], definicoes: { "Imprensa Alternativa": "Jornais e revistas que resistiam à censura oficial com humor, crítica indireta e reportagens investigativas." }, fotoUrl: imgMpb },
      { id: "p3", texto: "Setores da IGREJA PROGRESSISTA, ligados à Teologia da Libertação, criaram Comunidades Eclesiais de Base e denunciaram publicamente torturas — como fez Dom Paulo Evaristo Arns na missa por Vladimir Herzog (1975).", chaves: ["Igreja Progressista"], definicoes: { "Igreja Progressista": "Setores da Igreja Católica que, com base na Teologia da Libertação, denunciaram publicamente as violações da ditadura." }, fotoUrl: imgDiretas },
      { id: "p4", texto: "Na política, o MDB era o único partido de oposição legal e cresceu nas eleições de 1974. Propostas de REORGANIZAÇÃO DEMOCRÁTICA — retomada de eleições diretas, nova Constituição, anistia ampla — ganharam força ao longo dos anos 1970, preparando o caminho para as Diretas Já (1984).", chaves: ["Reorganização Democrática"], definicoes: { "Reorganização Democrática": "Conjunto de propostas políticas para retomar eleições diretas, liberdades civis e uma nova Constituição." }, fotoUrl: imgDir },
    ],
    falaFinal: "Leitura concluída. A resistência preparou, passo a passo, o caminho de volta à democracia.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento à sua frente de resistência.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "cul", emoji: "🎸", rotulo: "Cultura" },
      { id: "est", emoji: "🎓", rotulo: "Movimento estudantil" },
      { id: "pol", emoji: "📜", rotulo: "Política legal" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Chico Buarque", emoji: "🎸", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Canções em código contra a censura", emoji: "🎤", cor: "from-teal-600 to-slate-900" }, contexto: "MPB de protesto.", pecaCertaId: "cul", feedbackAcerto: "Correto. Chico Buarque = Cultura.", feedbackErro: "É Cultura." },
      { id: "r2", municipioA: { nome: "Congresso de Ibiúna", emoji: "🎓", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "700 estudantes presos (1968)", emoji: "🚔", cor: "from-amber-600 to-slate-900" }, contexto: "Encontro clandestino da UNE.", pecaCertaId: "est", feedbackAcerto: "Correto. Ibiúna = Movimento estudantil.", feedbackErro: "É Movimento estudantil." },
      { id: "r3", municipioA: { nome: "MDB", emoji: "📜", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Único partido de oposição legal", emoji: "🗳️", cor: "from-cyan-600 to-slate-900" }, contexto: "Cresce em 1974.", pecaCertaId: "pol", feedbackAcerto: "Correto. MDB = Política legal.", feedbackErro: "É Política legal." },
      { id: "r4", municipioA: { nome: "Jornal Pasquim", emoji: "📰", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Humor crítico contra a censura", emoji: "😏", cor: "from-teal-600 to-slate-900" }, contexto: "250 mil exemplares.", pecaCertaId: "cul", feedbackAcerto: "Correto. Pasquim = Cultura (imprensa alternativa).", feedbackErro: "É Cultura." },
      { id: "r5", municipioA: { nome: "Passeata dos Cem Mil", emoji: "📢", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Rio de Janeiro, junho de 1968", emoji: "🏙️", cor: "from-amber-600 to-slate-900" }, contexto: "Ato público massivo.", pecaCertaId: "est", feedbackAcerto: "Correto. Passeata = Movimento estudantil/sociedade civil.", feedbackErro: "É Movimento estudantil." },
      { id: "r6", municipioA: { nome: "Frente Ampla (1966)", emoji: "🤝", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "União de opositores de diferentes correntes", emoji: "📜", cor: "from-cyan-600 to-slate-900" }, contexto: "Proposta de reorganização.", pecaCertaId: "pol", feedbackAcerto: "Correto. Frente Ampla = Política legal.", feedbackErro: "É Política legal." },
    ],
    falaFinal: "6 rodadas. Você já organiza as frentes de resistência à ditadura.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Formas de resistência mais citadas por historiadores do período — proporção de destaque.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgRes,
    fatias: [
      { id: "cul", rotulo: "Resistência cultural (~40%)", emoji: "🎸", percentual: 40, cor: "#0f766e", descricao: "Música, teatro e imprensa alternativa foram as formas mais visíveis e duradouras de resistência.", exemplos: ["🎸 MPB", "📰 Pasquim", "🎭 Teatro"] },
      { id: "soc", rotulo: "Organização social e política (~60%)", emoji: "⛪", percentual: 60, cor: "#b45309", descricao: "UNE, sindicatos, Igreja progressista e o MDB mantiveram a organização da oposição — na clandestinidade e dentro dos limites legais permitidos.", exemplos: ["🎓 UNE", "⛪ CEBs", "📜 MDB"] },
    ],
    falaFinal: "Cultura, movimentos sociais e política legal — três frentes, um mesmo objetivo: a democracia.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgDiretas,
    perguntas: [
      { id: "av1", pergunta: "A resistência à ditadura ocorreu:", opcoes: [
        { id: "a", texto: "Só pela luta armada.", correta: false },
        { id: "b", texto: "De várias formas: cultura, imprensa, Igreja, estudantes e política legal.", correta: true },
        { id: "c", texto: "Não existiu resistência.", correta: false },
      ], feedbackAcerto: "Correto. A resistência foi plural.", feedbackErro: "Houve várias formas de resistência, não só a luta armada." },
      { id: "av2", pergunta: "O MDB era:", opcoes: [
        { id: "a", texto: "O único partido de oposição legal na maior parte da ditadura.", correta: true },
        { id: "b", texto: "O partido dos militares.", correta: false },
        { id: "c", texto: "Uma organização estudantil.", correta: false },
      ], feedbackAcerto: "Correto. ARENA era o partido governista; MDB, a oposição.", feedbackErro: "É o partido de oposição legal — ARENA era o governista." },
      { id: "av3", pergunta: "O Congresso de Ibiúna (1968) foi reprimido porque era:", opcoes: [
        { id: "a", texto: "Um encontro clandestino da UNE.", correta: true },
        { id: "b", texto: "Uma reunião de generais.", correta: false },
        { id: "c", texto: "Um congresso internacional oficial.", correta: false },
      ], feedbackAcerto: "Correto. A UNE era ilegal, e o encontro foi duramente reprimido.", feedbackErro: "Era um encontro clandestino da UNE, entidade estudantil ilegalizada." },
    ],
    selo: { nome: "EF09HI20", subtitulo: "Resistências e reorganização democrática", emoji: "✊", cor: "from-teal-500 to-slate-900", fotoUrl: imgRes },
    falaFinal: "Você já entende que a resistência foi diversa e persistente — e preparou a redemocratização.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Resistência Plural" },

};
