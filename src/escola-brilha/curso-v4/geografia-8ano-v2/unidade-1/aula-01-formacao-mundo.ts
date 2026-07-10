import type { AulaGeoV1 } from "../../types";
import colonizacao from "@/assets/geografia-8ano/colonizacao-europeia.jpg";
import industrial from "@/assets/geografia-8ano/revolucao-industrial.jpg";
import independencias from "@/assets/geografia-8ano/independencias-latinas.jpg";
import descoloniza from "@/assets/geografia-8ano/mapa-descolonizacao.jpg";

/**
 * Geografia · 8º Ano · Unidade 1 · Aula 01
 * "Formação do Mundo Contemporâneo" — BNCC EF08GE01, EF08GE04
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-formacao-mundo",
  titulo: "Formação do Mundo Contemporâneo",
  iconeTrilha: "🌍",
  bncc: ["EF08GE01", "EF08GE04"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: colonizacao,
    imagemDestaqueUrl: colonizacao,
    aurora:
      "Em 1500, europeus com caravelas e canhões cruzaram os oceanos e transformaram o planeta em uma rede COLONIAL. Portugal, Espanha, Inglaterra, França e Holanda pilharam ouro, prata, açúcar, escravizaram milhões de africanos e impuseram suas línguas e religiões. Três séculos depois, a REVOLUÇÃO INDUSTRIAL (1760) na Inglaterra multiplicou a força europeia com máquinas a vapor. As INDEPENDÊNCIAS latinas (1810–1825) e a DESCOLONIZAÇÃO afro-asiática (1945–1975) redesenharam o mapa político. Esse é o mundo que você herdou.",
    falaFinal: "Colonização → Industrialização → Independências. Três ondas em 500 anos construíram o mundo atual.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: qual continente foi o ÚLTIMO a se libertar do colonialismo europeu em massa?",
    pergunta: "Onde a descolonização veio mais tarde?",
    opcoes: [
      { id: "amer", titulo: "América Latina", subtitulo: "início do século XIX", emoji: "🌎", cor: "from-emerald-800 to-slate-950" },
      { id: "afri", titulo: "África e Ásia", subtitulo: "meados do século XX", emoji: "🌍", cor: "from-orange-800 to-slate-950" },
    ],
    respostaCerta: "afri",
    feedbackAcerto:
      "Exato! A América Latina se libertou entre 1810 e 1825. África e Ásia só se descolonizaram em massa depois de 1945 — Argélia em 1962, Angola e Moçambique em 1975.",
    feedbackErro:
      "Não. A América se libertou primeiro (1810–1825). África e Ásia foram as últimas: a maioria só ficou independente entre 1945 e 1975, cerca de 150 anos depois.",
    falaFinal: "América = século XIX. África/Ásia = século XX. 150 anos de diferença.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da formação do mundo moderno. Explicação + exemplo real + curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "colon",
        capa: "1. Colonização",
        emoji: "🚢",
        cor: "from-amber-800 to-orange-950",
        conteudo:
          "COLONIZAÇÃO é o processo em que uma potência europeia domina um território distante, extrai riquezas, impõe sua língua, religião e escraviza povos locais ou africanos. Começou em 1492 (Colombo) e durou até o século XX em muitos lugares.",
        exemplo:
          "Curiosidade: entre 1500 e 1888, cerca de 12,5 milhões de africanos foram escravizados e enviados às Américas. Foi o maior tráfico humano forçado da história. O Brasil recebeu 40% desse total — 5 milhões de pessoas.",
        fotoUrl: colonizacao,
      },
      {
        id: "indu",
        capa: "2. Revolução Industrial",
        emoji: "⚙️",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "REVOLUÇÃO INDUSTRIAL foi a transição do trabalho manual e artesanal para a produção com MÁQUINAS A VAPOR em FÁBRICAS. Começou na Inglaterra em 1760 e mudou tudo: transporte (trens), cidades (êxodo rural) e economia (capitalismo industrial).",
        exemplo:
          "Curiosidade: em 1750, um trabalhador inglês produzia manualmente 5 peças de tecido por dia. Em 1850, uma fábrica com máquinas produzia 500 por dia por trabalhador — 100x mais. Foi essa produtividade que fez a Europa dominar o mundo.",
        fotoUrl: industrial,
      },
      {
        id: "inde",
        capa: "3. Independências",
        emoji: "🎖️",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "INDEPENDÊNCIAS LATINO-AMERICANAS foram as guerras (1810–1825) em que as colônias espanholas se libertaram. Líderes: Simón BOLÍVAR (Venezuela, Colômbia, Equador, Peru, Bolívia) e San MARTÍN (Argentina, Chile). O Brasil se separou em 1822, sem guerra.",
        exemplo:
          "Curiosidade: Bolívar queria criar uma 'Grã-Colômbia' unindo todo o norte da América do Sul. Fracassou — os países se dividiram por rivalidades regionais. Por isso a Bolívia leva o nome dele: foi uma homenagem póstuma.",
        fotoUrl: independencias,
      },
      {
        id: "desc",
        capa: "4. Descolonização",
        emoji: "🕊️",
        cor: "from-sky-800 to-slate-950",
        conteudo:
          "DESCOLONIZAÇÃO foi a onda de independências AFRO-ASIÁTICAS depois de 1945. A Europa saiu falida da Segunda Guerra Mundial e não conseguiu mais segurar suas colônias. Índia (1947), Argélia (1962), Angola e Moçambique (1975).",
        exemplo:
          "Curiosidade: o ano de 1960 é chamado de 'Ano da África' — 17 países africanos se tornaram independentes só naquele ano. Mas muitos ficaram com fronteiras artificiais criadas por europeus na Conferência de Berlim (1885), causando conflitos até hoje.",
        fotoUrl: descoloniza,
      },
    ],
    falaFinal: "Colonização, indústria, independência, descolonização. 4 palavras = 500 anos.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Cada card é uma FASE da formação do mundo moderno. Toque em cada um pra ver a imagem e ouvir o episódio.",
    instrucao: "Toque nos 4 cards pra ouvir cada fase",
    mapaUrl: descoloniza,
    pontos: [
      { id: "1500", x: 20, y: 30, emoji: "🚢", cor: "from-amber-800 to-orange-950",
        titulo: "1500 — Expansão marítima",
        texto: "Portugal e Espanha abrem as rotas oceânicas. Chegam à América e ao Índico. Começa a colonização europeia do planeta.",
        fotoUrl: colonizacao },
      { id: "1760", x: 55, y: 40, emoji: "⚙️", cor: "from-slate-700 to-slate-950",
        titulo: "1760 — Revolução Industrial",
        texto: "Máquinas a vapor na Inglaterra multiplicam a produtividade. Europa fica muito mais poderosa que o resto do mundo.",
        fotoUrl: industrial },
      { id: "1810", x: 35, y: 65, emoji: "🎖️", cor: "from-emerald-800 to-slate-950",
        titulo: "1810–1825 — Independências latinas",
        texto: "Bolívar e San Martín libertam a América Espanhola. Brasil se separa de Portugal em 1822.",
        fotoUrl: independencias },
      { id: "1960", x: 70, y: 75, emoji: "🕊️", cor: "from-sky-800 to-slate-950",
        titulo: "1945–1975 — Descolonização afro-asiática",
        texto: "Índia, Argélia, Angola, Moçambique. Europa perde suas colônias. Nasce o Terceiro Mundo.",
        fotoUrl: descoloniza },
    ],
    falaFinal: "1500, 1760, 1810, 1960. 4 datas = o mundo em que você vive.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de historiador pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Colonização europeia trouxe às Américas, principalmente:",
        fotoUrl: colonizacao,
        cards: [
          { id: "a", emoji: "🚢", titulo: "Escravidão africana + extração de ouro", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🕊️", titulo: "Democracia e igualdade", cor: "from-sky-800 to-slate-950" },
          { id: "c", emoji: "🏥", titulo: "Hospitais e universidades", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Colonização = pilhagem + escravidão. 12,5 milhões de africanos escravizados.",
        feedbackErro: "Não. Colonização trouxe pilhagem e escravidão, não democracia. Universidades vieram depois." },
      { id: "q2", pergunta: "A Revolução Industrial começou em qual país?",
        fotoUrl: industrial,
        cards: [
          { id: "a", emoji: "🇬🇧", titulo: "Inglaterra (1760)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇺🇸", titulo: "Estados Unidos (1900)", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🇨🇳", titulo: "China (1500)", cor: "from-amber-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Inglaterra, por volta de 1760. Máquina a vapor de James Watt.",
        feedbackErro: "Foi na INGLATERRA, em 1760. EUA e China industrializaram depois." },
      { id: "q3", pergunta: "Líder que libertou 5 países da América do Sul da Espanha:",
        fotoUrl: independencias,
        cards: [
          { id: "a", emoji: "🎖️", titulo: "Simón Bolívar", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "👑", titulo: "Rei Fernando VII", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🇧🇷", titulo: "Dom Pedro I", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Bolívar libertou Venezuela, Colômbia, Equador, Peru e Bolívia.",
        feedbackErro: "Bolívar foi o libertador. Fernando VII era o REI espanhol. D. Pedro I fez a independência do Brasil." },
      { id: "q4", pergunta: "1960 foi chamado 'Ano da África' porque:",
        fotoUrl: descoloniza,
        cards: [
          { id: "a", emoji: "🕊️", titulo: "17 países se tornaram independentes", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "⚽", titulo: "África venceu a Copa do Mundo", cor: "from-amber-800 to-slate-950" },
          { id: "c", emoji: "🚀", titulo: "África enviou foguete à Lua", cor: "from-sky-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 17 países africanos ficaram independentes em 1960.",
        feedbackErro: "Foi ano das 17 INDEPENDÊNCIAS africanas. Nada a ver com Copa ou foguete." },
    ],
    falaFinal: "4 acertos = historiador global.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A colonização deixou marcas no Brasil: os primeiros 3 estados a receberem capitais coloniais foram Bahia (Salvador, 1549), Rio de Janeiro (1763) e Pernambuco (Recife/Olinda). Acenda esses 3.",
    instrucao: "Acenda BA, RJ e PE",
    missao: {
      tipo: "selecionar",
      siglas: ["BA", "RJ", "PE"],
      pergunta: "Quais estados sediaram capitais coloniais do Brasil?",
    },
    falaFinal: "Salvador (1549), Rio (1763), Olinda/Recife (colônia holandesa). Três polos coloniais.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as 5 fases da formação do mundo moderno em ordem cronológica.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1492", emoji: "🚢", rotulo: "1. Descoberta da América (1492)",
        descricao: "Colombo chega ao Caribe. Começa a era colonial europeia.", fotoUrl: colonizacao },
      { id: "1760", emoji: "⚙️", rotulo: "2. Revolução Industrial (1760)",
        descricao: "Máquinas a vapor na Inglaterra. Nasce o capitalismo industrial.", fotoUrl: industrial },
      { id: "1822", emoji: "🎖️", rotulo: "3. Independências latinas (1810–1825)",
        descricao: "Bolívar, San Martín e D. Pedro I libertam a América.", fotoUrl: independencias },
      { id: "1945", emoji: "💣", rotulo: "4. Fim da 2ª Guerra Mundial (1945)",
        descricao: "Europa falida. EUA e URSS emergem como superpotências." },
      { id: "1960", emoji: "🕊️", rotulo: "5. Descolonização afro-asiática (1960)",
        descricao: "17 países africanos independentes só em 1960.", fotoUrl: descoloniza },
    ],
    ordemCerta: ["1492", "1760", "1822", "1945", "1960"],
    feedbackAcerto: "Perfeito! 500 anos de mundo moderno em ordem.",
    feedbackErro: "Comece por 1492 (descoberta). Depois indústria, independências, guerra, descolonização.",
    falaFinal: "5 datas contam a história do mundo em que vivemos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Mundo",
    subtitulo: "Capítulo 1 — Formação do Mundo Contemporâneo",
    paragrafos: [
      { id: "p1",
        texto: "A COLONIZAÇÃO europeia começou em 1492 com Colombo. Portugal, Espanha, Inglaterra e França dominaram continentes inteiros, extraíram OURO e escravizaram cerca de 12,5 milhões de africanos.",
        chaves: ["COLONIZAÇÃO", "OURO"],
        definicoes: {
          "COLONIZAÇÃO": "Domínio de um território por uma potência estrangeira que extrai riquezas e impõe sua cultura. Durou de 1492 até meados do século XX.",
          "OURO": "Metal precioso. Foi a principal riqueza extraída da América (Potosí na Bolívia; Minas Gerais no Brasil). Financiou a Europa por 300 anos.",
        },
        fotoUrl: colonizacao },
      { id: "p2",
        texto: "A REVOLUÇÃO INDUSTRIAL (1760) na Inglaterra trouxe MÁQUINAS A VAPOR e FÁBRICAS. Multiplicou por 100 a produtividade e fez a Europa dominar o resto do mundo.",
        chaves: ["REVOLUÇÃO INDUSTRIAL", "MÁQUINAS A VAPOR", "FÁBRICAS"],
        definicoes: {
          "REVOLUÇÃO INDUSTRIAL": "Transição do trabalho artesanal para produção mecanizada. Começou em 1760 na Inglaterra e mudou o mundo.",
          "MÁQUINAS A VAPOR": "Motores movidos por caldeira. Permitiram trens, navios e fábricas gigantes. Símbolo do século XIX.",
          "FÁBRICAS": "Prédios onde centenas de trabalhadores usam máquinas para produzir em massa. Substituíram o artesão do campo.",
        },
        fotoUrl: industrial },
      { id: "p3",
        texto: "As INDEPENDÊNCIAS latino-americanas (1810–1825) libertaram as colônias espanholas. BOLÍVAR liderou o norte; San Martín, o sul. O Brasil se separou de Portugal em 1822.",
        chaves: ["INDEPENDÊNCIAS", "BOLÍVAR"],
        definicoes: {
          "INDEPENDÊNCIAS": "Guerras (1810–1825) que libertaram as colônias espanholas da América. O Brasil se separou em 1822 sem guerra.",
          "BOLÍVAR": "Simón Bolívar (1783–1830), venezuelano. Libertou 5 países: Venezuela, Colômbia, Equador, Peru e Bolívia (que leva seu nome).",
        },
        fotoUrl: independencias },
      { id: "p4",
        texto: "A DESCOLONIZAÇÃO afro-asiática (1945–1975) libertou Índia, Argélia, Angola, Moçambique. Em 1960, 17 países AFRICANOS ficaram independentes só naquele ano.",
        chaves: ["DESCOLONIZAÇÃO", "AFRICANOS"],
        definicoes: {
          "DESCOLONIZAÇÃO": "Onda de independências afro-asiáticas depois de 1945. Europa saiu falida da 2ª Guerra e não segurou mais as colônias.",
          "AFRICANOS": "1960 foi chamado 'Ano da África' — 17 países independentes só naquele ano. Muitos ficaram com fronteiras artificiais.",
        },
        fotoUrl: descoloniza },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "colon", emoji: "", titulo: "Colonização", cor: "from-slate-800 to-slate-900" },
      { id: "indu", emoji: "", titulo: "Revolução Industrial", cor: "from-slate-800 to-slate-900" },
      { id: "boli", emoji: "", titulo: "Bolívar", cor: "from-slate-800 to-slate-900" },
      { id: "esca", emoji: "", titulo: "Escravidão", cor: "from-slate-800 to-slate-900" },
      { id: "desc", emoji: "", titulo: "Descolonização", cor: "from-slate-800 to-slate-900" },
      { id: "berl", emoji: "", titulo: "Conferência de Berlim", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito histórico correto.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Processo em que uma potência europeia domina, extrai riquezas e impõe cultura a um território.", cards, correta: "colon",
          feedbackAcerto: "Isso. Domínio + extração = COLONIZAÇÃO.", feedbackErro: "É COLONIZAÇÃO. Começou em 1492 e durou até o século XX." },
        { id: "r2", pergunta: "Transição de trabalho manual para produção com máquinas a vapor, iniciada em 1760 na Inglaterra.", cards, correta: "indu",
          feedbackAcerto: "Isso. 1760 + máquinas a vapor = REVOLUÇÃO INDUSTRIAL.", feedbackErro: "É a REVOLUÇÃO INDUSTRIAL. James Watt é o nome ligado à máquina a vapor." },
        { id: "r3", pergunta: "Libertador que independentizou Venezuela, Colômbia, Equador, Peru e Bolívia.", cards, correta: "boli",
          feedbackAcerto: "Isso. 5 países libertados = BOLÍVAR.", feedbackErro: "É BOLÍVAR. Um dos países (Bolívia) leva o nome dele." },
        { id: "r4", pergunta: "Tráfico forçado de 12,5 milhões de africanos para as Américas entre 1500 e 1888.", cards, correta: "esca",
          feedbackAcerto: "Isso. 12,5 milhões de pessoas = ESCRAVIDÃO.", feedbackErro: "É a ESCRAVIDÃO. Brasil recebeu 40% desse total — 5 milhões." },
        { id: "r5", pergunta: "Onda de independências afro-asiáticas depois de 1945; 17 países africanos livres só em 1960.", cards, correta: "desc",
          feedbackAcerto: "Isso. Ano da África = DESCOLONIZAÇÃO.", feedbackErro: "É a DESCOLONIZAÇÃO. Começa depois da 2ª Guerra Mundial." },
        { id: "r6", pergunta: "Reunião de 1885 em que potências europeias dividiram a África sem consultar os africanos.", cards, correta: "berl",
          feedbackAcerto: "Isso. Divisão da África em 1885 = CONFERÊNCIA DE BERLIM.", feedbackErro: "É a CONFERÊNCIA DE BERLIM (1885). Criou as fronteiras artificiais que causam conflitos até hoje." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Historiador global formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do tráfico transatlântico de escravizados (1500–1888): destino dos 12,5 milhões.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "br", rotulo: "Brasil (~40%)", emoji: "🇧🇷", percentual: 40, cor: "#0284c7",
        descricao: "5 milhões de africanos escravizados desembarcaram no Brasil — o maior destino do tráfico transatlântico.",
        exemplos: ["🍬 Engenhos de açúcar", "⛏️ Minas de ouro", "☕ Fazendas de café"] },
      { id: "outros", rotulo: "Caribe, EUA e Hispano-América (~60%)", emoji: "🌎", percentual: 60, cor: "#b45309",
        descricao: "7,5 milhões desembarcaram no Caribe, sul dos EUA (algodão) e colônias espanholas (minas de prata).",
        exemplos: ["🌴 Caribe", "🌾 Algodão nos EUA", "🥈 Potosí (Bolívia)"] },
    ],
    falaFinal: "12,5 milhões de africanos em 4 séculos. O Brasil recebeu quase metade.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Historiador Global.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Onde começou a Revolução Industrial?",
        opcoes: [
          { id: "a", texto: "França", correta: false },
          { id: "b", texto: "Inglaterra (1760)", correta: true },
          { id: "c", texto: "Estados Unidos", correta: false },
        ],
        feedbackAcerto: "Isso! INGLATERRA, por volta de 1760.",
        feedbackErro: "Foi a INGLATERRA em 1760. James Watt e a máquina a vapor." },
      { id: "av2", pergunta: "Simón Bolívar foi o libertador de:",
        opcoes: [
          { id: "a", texto: "Brasil", correta: false },
          { id: "b", texto: "5 países da América do Sul", correta: true },
          { id: "c", texto: "Estados Unidos", correta: false },
        ],
        feedbackAcerto: "Isso! Venezuela, Colômbia, Equador, Peru e Bolívia.",
        feedbackErro: "Bolívar libertou 5 países hispânicos. O Brasil foi D. Pedro I. EUA foi George Washington." },
      { id: "av3", pergunta: "O 'Ano da África' (1960) marca:",
        opcoes: [
          { id: "a", texto: "17 países africanos independentes", correta: true },
          { id: "b", texto: "Fim do apartheid", correta: false },
          { id: "c", texto: "Descoberta de petróleo", correta: false },
        ],
        feedbackAcerto: "Isso! 17 países africanos ficaram independentes em 1960.",
        feedbackErro: "1960 = 17 independências. Apartheid acabou em 1994; petróleo é outra história." },
    ],
    selo: { nome: "Historiador Global", subtitulo: "Insígnia do Explorador do Mundo", emoji: "🌍", cor: "from-violet-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende como o mundo moderno foi formado.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Historiador Global" },
};
