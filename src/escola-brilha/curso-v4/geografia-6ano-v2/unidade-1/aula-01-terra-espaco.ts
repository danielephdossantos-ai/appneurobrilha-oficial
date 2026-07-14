import type { AulaGeoV1 } from "../../types";
import { url as terraEspaco } from "@/assets/geografia-6ano/terra-espaco.jpg.asset.json";
import { url as orbitaEstacoes } from "@/assets/geografia-6ano/orbita-estacoes.jpg.asset.json";
import { url as rotacaoDiaNoite } from "@/assets/geografia-6ano/rotacao-dia-noite.jpg.asset.json";
import { url as rotacaoReal } from "@/assets/geografia-6ano/rotacao-real.jpg.asset.json";
import { url as translacaoOrbita } from "@/assets/geografia-6ano/translacao-orbita.jpg.asset.json";
import { url as eixoInclinado } from "@/assets/geografia-6ano/eixo-inclinado.jpg.asset.json";
import { url as quatroEstacoes } from "@/assets/geografia-6ano/quatro-estacoes.jpg.asset.json";
import { url as estacaoVerao } from "@/assets/geografia-6ano/estacao-verao.jpg.asset.json";
import { url as estacaoOutono } from "@/assets/geografia-6ano/estacao-outono.jpg.asset.json";
import { url as estacaoInverno } from "@/assets/geografia-6ano/estacao-inverno.jpg.asset.json";
import { url as estacaoPrimavera } from "@/assets/geografia-6ano/estacao-primavera.jpg.asset.json";
import { url as orbitaJun } from "@/assets/geografia-6ano/orbita-jun-solsticio.jpg.asset.json";
import { url as orbitaSet } from "@/assets/geografia-6ano/orbita-set-equinocio.jpg.asset.json";
import { url as orbitaDez } from "@/assets/geografia-6ano/orbita-dez-solsticio.jpg.asset.json";
import { url as orbitaMar } from "@/assets/geografia-6ano/orbita-mar-equinocio.jpg.asset.json";
/**
 * Geografia · 6º Ano (PILOTO v2 — formato 5º Ano) · Unidade 1 · Aula 01
 * "A Terra no Espaço: Rotação, Translação e Inclinação"
 * BNCC EF06GE01
 *
 * Reformulada: imagens REAIS (NASA + infográficos), curiosidades científicas,
 * conteúdo denso ANTES de cada pergunta, mais quizzes.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-terra-espaco",
  titulo: "A Terra no Espaço",
  iconeTrilha: "🌍",
  bncc: ["EF06GE01"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: rotacaoReal,
    imagemDestaqueUrl: rotacaoReal,
    aurora:
      "Foto REAL. Metade da Terra iluminada pelo Sol, metade no escuro com as luzes das cidades acesas. Enquanto você lê isso, o planeta gira a 1.670 km/h no Equador e viaja pelo espaço a 107.000 km/h. Três movimentos silenciosos explicam TUDO: dia, noite, verão, inverno, ano bissexto, fusos horários.",
    falaFinal: "Rotação, Translação, Inclinação. Três palavras. Toda a sua vida.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de estudar, chuta: por que na Austrália é VERÃO no mês do Natal, no Brasil também é verão, mas na Rússia é inverno pesado com neve?",
    pergunta: "O que causa as estações do ano?",
    opcoes: [
      {
        id: "distancia",
        titulo: "A DISTÂNCIA da Terra ao Sol",
        subtitulo: "verão quando está perto, inverno quando afasta",
        emoji: "☀️",
        cor: "from-amber-800 to-amber-950",
      },
      {
        id: "inclinacao",
        titulo: "A INCLINAÇÃO do eixo",
        subtitulo: "o hemisfério inclinado pro Sol vira verão",
        emoji: "🌍",
        cor: "from-cyan-800 to-slate-950",
      },
    ],
    respostaCerta: "inclinacao",
    feedbackAcerto:
      "Exato! Não é a distância — a órbita é quase circular (varia só 3%). É a INCLINAÇÃO de 23,5° do eixo que faz o hemisfério inclinado receber luz mais direta.",
    feedbackErro:
      "Erro comum, mas não. Curiosidade: a Terra fica MAIS PERTO do Sol em janeiro (147 milhões de km) e MAIS LONGE em julho (152 milhões de km) — o oposto do que a intuição diz. O segredo é o EIXO INCLINADO.",
    falaFinal: "Inclinação = estações. Guarde isso. Agora vamos entender direito.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da astronomia geográfica. Cada card traz explicação, exemplo real e curiosidade científica.",
    instrucao: "",
    cadernos: [
      {
        id: "rotacao",
        capa: "1. Rotação",
        emoji: "🔄",
        cor: "from-cyan-800 to-slate-950",
        conteudo:
          "ROTAÇÃO é o giro da Terra em torno do próprio eixo. Dura 23h 56min 4s (arredondado pra 24 horas). É o que causa DIA e NOITE. A Terra gira de OESTE pra LESTE a 1.670 km/h no Equador — mais rápido que qualquer avião comercial. Por isso o Sol parece 'nascer' no leste e 'se pôr' no oeste: não é o Sol que se move, somos nós girando.",
        exemplo: "Curiosidade: se a rotação parasse de repente, tudo na superfície continuaria a 1.670 km/h por inércia — pessoas, prédios, oceanos — uma catástrofe. Já se girasse mais rápido, os dias encurtariam e a gravidade aparente diminuiria no Equador.",
        fotoUrl: rotacaoReal,
      },
      {
        id: "translacao",
        capa: "2. Translação",
        emoji: "🛰️",
        cor: "from-indigo-800 to-slate-950",
        conteudo:
          "TRANSLAÇÃO é a volta da Terra ao redor do Sol. Dura 365 dias, 5h 48min e 46s. Percorre 940 milhões de km por ano a uma velocidade média de 107.000 km/h — 30 km POR SEGUNDO. As 5h 48min extras se acumulam: a cada 4 anos vira 1 dia = ano BISSEXTO (29 de fevereiro).",
        exemplo: "Curiosidade: você já viajou 940 milhões de km pelo espaço só no último ano — sem sair da cadeira. Desde que nasceu, já deu voltas suficientes pra ir até Plutão e voltar várias vezes.",
        fotoUrl: translacaoOrbita,
      },
      {
        id: "eixo",
        capa: "3. Eixo inclinado 23,5°",
        emoji: "📐",
        cor: "from-amber-800 to-amber-950",
        conteudo:
          "O EIXO da Terra é uma linha imaginária que atravessa o planeta do polo Norte ao polo Sul. Ele está INCLINADO 23,5° em relação ao plano da órbita — como um pião torto girando. Essa inclinação é FIXA: o eixo aponta sempre pra mesma direção no espaço (a estrela Polaris no norte), independente da posição da Terra na órbita.",
        exemplo: "Curiosidade: a inclinação vem de um choque brutal — 4,5 bilhões de anos atrás, um planeta do tamanho de Marte (batizado 'Theia') colidiu com a Terra. Os destroços formaram a Lua e deixaram nosso eixo torto. Sem essa colisão, não haveria estações.",
        fotoUrl: eixoInclinado,
      },
      {
        id: "estacoes",
        capa: "4. Estações do ano",
        emoji: "🍂",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "ESTAÇÕES são o resultado combinado de translação + eixo inclinado. Quando um hemisfério fica inclinado PARA o Sol, os raios solares chegam mais DIRETOS (concentrados) e o dia dura mais horas = VERÃO. Quando fica inclinado PARA LONGE, os raios chegam OBLÍQUOS (espalhados) e o dia é curto = INVERNO. Por isso são INVERTIDAS entre norte e sul.",
        exemplo: "Curiosidade: nos polos, no verão o Sol NÃO se põe por semanas ('sol da meia-noite'). No inverno, NÃO nasce por semanas ('noite polar'). Na Noruega há cidades onde o Sol some por 2 meses seguidos.",
        fotoUrl: quatroEstacoes,
      },
    ],
    falaFinal: "Rotação, translação, eixo, estações. Tudo o mais no clima e no calendário decorre dessas 4 ideias.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Cada card abaixo é uma posição real da Terra na órbita ao longo do ano. Toque em um card pra ouvir o que acontece naquela data — solstício ou equinócio.",
    instrucao: "Toque nos 4 cards pra ouvir cada posição",
    mapaUrl: translacaoOrbita,
    pontos: [
      {
        id: "solsticio-jun",
        x: 12,
        y: 50,
        emoji: "☀️",
        cor: "from-amber-800 to-amber-950",
        titulo: "21 de Junho — Solstício de Verão (Norte)",
        texto:
          "Polo Norte inclinado 23,5° PRO Sol. Verão no hemisfério norte: EUA, Europa, Japão vivem os dias mais LONGOS do ano (em Estocolmo, o Sol fica no céu por mais de 18 horas). Aqui no Brasil? INVERNO — dias curtos, noites longas, temperaturas mais baixas no Sul.",
        fotoUrl: orbitaJun,
      },
      {
        id: "equinocio-set",
        x: 50,
        y: 88,
        emoji: "⚖️",
        cor: "from-teal-800 to-slate-950",
        titulo: "22–23 de Setembro — Equinócio",
        texto:
          "Nenhum hemisfério inclinado pro Sol. Dia e noite duram IGUAL (12h + 12h) no planeta INTEIRO — inclusive no Equador. Começa a primavera no hemisfério SUL, outono no NORTE. Curiosidade: 'equinócio' vem do latim 'aequi-nox' = noite igual.",
        fotoUrl: orbitaSet,
      },
      {
        id: "solsticio-dez",
        x: 88,
        y: 50,
        emoji: "🎄",
        cor: "from-cyan-800 to-slate-950",
        titulo: "21–22 de Dezembro — Solstício de Verão (Sul)",
        texto:
          "Polo SUL inclinado pro Sol. VERÃO no Brasil, Austrália, África do Sul, Argentina. Natal na praia. Dia mais longo do ano no hemisfério sul. Detalhe curioso: nesta data a Terra está no PERIÉLIO (mais perto do Sol, 147 milhões de km) — o oposto do que a intuição diz sobre 'perto = mais quente'.",
        fotoUrl: orbitaDez,
      },
      {
        id: "equinocio-mar",
        x: 50,
        y: 12,
        emoji: "🌸",
        cor: "from-rose-900 to-slate-950",
        titulo: "20–21 de Março — Equinócio",
        texto:
          "De novo dia = noite no planeta inteiro. Começa o outono no sul, primavera no norte. A Terra completou 3/4 da volta desde junho. É por causa desses equinócios que existem apenas 2 dias no ano em que o Sol nasce EXATAMENTE no leste em todo lugar do mundo.",
        fotoUrl: orbitaMar,
      },
    ],
    falaFinal: "4 posições na órbita = 4 estações. O responsável é a INCLINAÇÃO, não a distância.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas pra fixar o que você acabou de estudar. Sem cola.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O movimento que causa DIA e NOITE é...",
        fotoUrl: rotacaoReal,
        cards: [
          { id: "rot", emoji: "🔄", titulo: "Rotação", cor: "from-cyan-800 to-slate-950" },
          { id: "trans", emoji: "🛰️", titulo: "Translação", cor: "from-indigo-800 to-slate-950" },
          { id: "incl", emoji: "📐", titulo: "Inclinação", cor: "from-amber-800 to-amber-950" },
        ],
        correta: "rot",
        feedbackAcerto: "Isso! ROTAÇÃO = 24 horas = 1 dia = ciclo dia/noite. A foto mostra a linha do terminador entre o dia e a noite.",
        feedbackErro: "Translação dura 1 ano. Inclinação é fixa. DIA/NOITE = ROTAÇÃO (giro de 24h em torno do próprio eixo).",
      },
      {
        id: "q2",
        pergunta: "Quando é VERÃO no Brasil?",
        fotoUrl: translacaoOrbita,
        cards: [
          { id: "dez", emoji: "🎄", titulo: "Dezembro–Março", cor: "from-rose-900 to-slate-950" },
          { id: "jun", emoji: "❄️", titulo: "Junho–Setembro", cor: "from-cyan-900 to-indigo-950" },
          { id: "sem", emoji: "🌀", titulo: "Ano todo igual", cor: "from-slate-800 to-slate-950" },
        ],
        correta: "dez",
        feedbackAcerto: "Isso! No hemisfério sul, verão vai de dezembro a março — o polo sul está inclinado pro Sol. Observe na órbita a posição de dezembro.",
        feedbackErro: "Junho é verão no NORTE. No sul (Brasil), verão é DEZ–MAR. Olhe o infográfico da órbita: em dezembro o polo Sul está virado pro Sol.",
      },
      {
        id: "q3",
        pergunta: "O que causa as ESTAÇÕES do ano?",
        fotoUrl: eixoInclinado,
        cards: [
          { id: "dist", emoji: "📏", titulo: "Distância ao Sol", cor: "from-amber-800 to-amber-950" },
          { id: "eixo", emoji: "📐", titulo: "Inclinação do eixo", cor: "from-emerald-800 to-slate-950" },
          { id: "lua", emoji: "🌙", titulo: "Fases da Lua", cor: "from-slate-800 to-slate-950" },
        ],
        correta: "eixo",
        feedbackAcerto: "Perfeito! Eixo inclinado a 23,5° faz cada hemisfério receber raios diretos ou oblíquos = estações opostas.",
        feedbackErro: "Distância varia só 3% — quase nada. Lua controla marés. Estações = EIXO INCLINADO a 23,5°.",
      },
      {
        id: "q4",
        pergunta: "Por que existe ANO BISSEXTO (29 de fevereiro)?",
        fotoUrl: translacaoOrbita,
        cards: [
          { id: "correcao", emoji: "🛰️", titulo: "Translação dura 365d 6h", cor: "from-indigo-800 to-slate-950" },
          { id: "lua-bis", emoji: "🌙", titulo: "A Lua exige", cor: "from-slate-800 to-slate-950" },
          { id: "sol-quente", emoji: "☀️", titulo: "Sol esquenta mais", cor: "from-amber-800 to-amber-950" },
        ],
        correta: "correcao",
        feedbackAcerto: "Isso! A translação dura 365 dias E cerca de 6 horas. Essas 6h somam 24h a cada 4 anos = 1 dia extra pra ajustar o calendário.",
        feedbackErro: "Ano bissexto = TRANSLAÇÃO real leva 365,25 dias. As 6 horas extras somam 1 dia a cada 4 anos.",
      },
    ],
    falaFinal: "4 acertos = você entende a Terra no espaço melhor que a maioria dos adultos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "No Brasil, as estações são mais MARCADAS no SUL (RS, SC, PR) — mais distante do Equador, maior efeito da inclinação. Perto do Equador (AM, RR, PA), a luz solar quase não muda o ano todo. Marque os 3 estados onde o inverno é mais rigoroso.",
    instrucao: "Acenda os 3 estados do Sul do Brasil",
    missao: {
      tipo: "selecionar",
      siglas: ["RS", "SC", "PR"],
      pergunta: "Onde o inverno é mais FRIO no Brasil?",
    },
    falaFinal:
      "RS, SC, PR — mais afastados do Equador, mais inclinados pra longe do Sol no inverno = raios oblíquos e dias curtos = mais frio. Perto do Equador (AM, RR), a inclinação quase não muda a luz recebida = calor o ano todo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as estações do ano no hemisfério SUL (Brasil), começando pelo verão de dezembro.",
    instrucao: "Toque na ordem cronológica",
    pergunta: "Ordem das estações no hemisfério SUL:",
    paradas: [
      {
        id: "verao",
        emoji: "🏖️",
        rotulo: "1. Verão (dez–mar)",
        descricao: "Polo Sul inclinado pro Sol. Dias longos, muito calor, chuvas de verão no sudeste (monções). Solstício em 21/12.",
        fotoUrl: estacaoVerao,
      },
      {
        id: "outono",
        emoji: "🍂",
        rotulo: "2. Outono (mar–jun)",
        descricao: "Equinócio de março (dia = noite). Folhas caducas caem, temperatura cai gradualmente, ar mais seco no centro do Brasil.",
        fotoUrl: estacaoOutono,
      },
      {
        id: "inverno",
        emoji: "❄️",
        rotulo: "3. Inverno (jun–set)",
        descricao: "Polo Sul inclinado pra LONGE do Sol. Dias curtos, frio, seca no centro-oeste, geadas no sul, neve rara na serra catarinense.",
        fotoUrl: estacaoInverno,
      },
      {
        id: "primavera",
        emoji: "🌸",
        rotulo: "4. Primavera (set–dez)",
        descricao: "Equinócio de setembro. Ipês florescem, temperatura sobe, chuvas voltam. É o 'renascimento' do ciclo anual.",
        fotoUrl: estacaoPrimavera,
      },
    ],
    ordemCerta: ["verao", "outono", "inverno", "primavera"],
    feedbackAcerto: "Perfeita! Uma volta completa da Terra em torno do Sol = 4 estações = 1 ano.",
    feedbackErro: "Repense: começamos no verão (dez). Depois outono, inverno, primavera.",
    falaFinal: "365 dias, 4 estações, 1 volta completa. Isso é translação.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Os TERMOS-CHAVE ficam destacados — toque em qualquer um pra ver a definição rápida antes de continuar.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 1 — Movimentos da Terra",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A ROTAÇÃO é o giro da Terra em torno do próprio eixo. Dura cerca de 24 horas e causa o ciclo do DIA e da NOITE. No Equador, a superfície gira a 1.670 km/h.",
        chaves: ["ROTAÇÃO", "24 horas", "DIA", "NOITE", "1.670 km/h"],
        definicoes: {
          "ROTAÇÃO": "Movimento em que a Terra gira em torno do próprio eixo, como um pião. É esse giro que faz o Sol parecer 'nascer' e 'se pôr'.",
          "24 horas": "Tempo aproximado de UMA rotação completa da Terra. É por isso que o dia tem 24h e o Sol volta pra mesma posição a cada 24h.",
          "DIA": "Lado da Terra que está iluminado pelo Sol naquele momento. Como a Terra gira, esse lado muda o tempo todo.",
          "NOITE": "Lado da Terra que está na sombra, virado para longe do Sol. Rotação = revezamento contínuo entre dia e noite.",
          "1.670 km/h": "Velocidade da superfície da Terra no Equador por causa da rotação. Nos polos essa velocidade cai a quase zero.",
        },
        fotoUrl: rotacaoDiaNoite,
      },
      {
        id: "p2",
        texto:
          "A TRANSLAÇÃO é a volta da Terra ao redor do SOL. Dura 365 dias e 6 horas — origem do ano BISSEXTO. A Terra percorre 940 milhões de km a 107.000 km/h.",
        chaves: ["TRANSLAÇÃO", "365 dias", "SOL", "BISSEXTO", "107.000 km/h"],
        definicoes: {
          "TRANSLAÇÃO": "Movimento em que a Terra dá uma volta INTEIRA em torno do Sol, seguindo uma órbita elíptica.",
          "365 dias": "Tempo aproximado de UMA translação completa = 1 ano. Na verdade são 365 dias e cerca de 6 horas.",
          "SOL": "Estrela no centro do Sistema Solar. Sua gravidade prende a Terra em órbita e fornece a luz e o calor que temos.",
          "BISSEXTO": "A cada 4 anos, essas 6 horas 'sobrando' viram um dia extra (29 de fevereiro). Sem isso, o calendário desalinharia com as estações.",
          "107.000 km/h": "Velocidade média da Terra na órbita — mais de 100 vezes mais rápido do que um avião comercial.",
        },
        fotoUrl: translacaoOrbita,
      },
      {
        id: "p3",
        texto:
          "O EIXO da Terra está INCLINADO em 23,5°. Essa inclinação é FIXA e é a verdadeira causa das ESTAÇÕES do ano. A distância ao Sol muda muito pouco (só 3%).",
        chaves: ["EIXO", "INCLINADO", "23,5°", "FIXA", "ESTAÇÕES"],
        definicoes: {
          "EIXO": "Linha imaginária que atravessa o planeta de polo a polo. É em torno dele que a Terra gira (rotação).",
          "INCLINADO": "Em vez de ficar 'em pé', o eixo aponta meio de lado em relação ao plano da órbita — como um pião torto.",
          "23,5°": "Ângulo exato dessa inclinação. Se fosse 0°, não existiriam estações do ano.",
          "FIXA": "A direção da inclinação NÃO muda durante o ano. É por isso que hemisférios diferentes recebem sol direto em épocas diferentes.",
          "ESTAÇÕES": "Verão, outono, inverno e primavera. Existem por causa da inclinação — NÃO por causa da distância ao Sol.",
        },
        fotoUrl: eixoInclinado,
      },
      {
        id: "p4",
        texto:
          "As estações são INVERTIDAS entre os hemisférios: quando é verão no SUL, é inverno no NORTE. Nos EQUINÓCIOS (março e setembro), dia e noite duram IGUAL no planeta inteiro.",
        chaves: ["INVERTIDAS", "HEMISFÉRIOS", "SUL", "NORTE", "EQUINÓCIOS"],
        definicoes: {
          "INVERTIDAS": "Enquanto um hemisfério vive verão, o outro vive inverno — no MESMO dia. Isso é efeito direto da inclinação do eixo.",
          "HEMISFÉRIOS": "As duas metades da Terra separadas pela linha do Equador: hemisfério norte e hemisfério sul.",
          "SUL": "Hemisfério onde fica o Brasil. Verão aqui vai de dezembro a março; inverno de junho a setembro.",
          "NORTE": "Hemisfério onde ficam EUA, Europa, Japão. As estações são opostas às nossas.",
          "EQUINÓCIOS": "Dois dias por ano (por volta de 20/mar e 22/set) em que dia e noite duram IGUAL no planeta inteiro. Marcam início do outono/primavera.",
        },
        fotoUrl: quatroEstacoes,
      },
    ],
    falaFinal: "Leu tudo com as definições? Boa. Agora um minijogo cronometrado.",
  },

  cena09_minijogo: {
    tipo: "quizRadar",
    aurora: "Quiz rápido: pra cada situação, escolha qual movimento da Terra explica.",
    instrucao: "Escolha o movimento responsável",
    perguntas: [
      {
        id: "r1",
        pergunta: "Enquanto o Japão acorda, o Brasil dorme. Qual movimento explica a diferença de horário entre países?",
        cards: [
          { id: "rotacao", emoji: "", titulo: "Rotação", cor: "from-slate-800 to-slate-900" },
          { id: "translacao", emoji: "", titulo: "Translação", cor: "from-slate-800 to-slate-900" },
          { id: "inclinacao", emoji: "", titulo: "Inclinação do eixo", cor: "from-slate-800 to-slate-900" },
        ],
        correta: "rotacao",
        feedbackAcerto: "Isso. A ROTAÇÃO gira a Terra em 24h — por isso existem fusos horários diferentes.",
        feedbackErro: "É ROTAÇÃO. A Terra gira em 24h, então cada região vê o Sol em um horário.",
      },
      {
        id: "r2",
        pergunta: "No Brasil, o verão vai de dezembro a março. Qual movimento explica que dezembro seja verão aqui?",
        cards: [
          { id: "rotacao", emoji: "", titulo: "Rotação", cor: "from-slate-800 to-slate-900" },
          { id: "translacao", emoji: "", titulo: "Translação", cor: "from-slate-800 to-slate-900" },
          { id: "inclinacao", emoji: "", titulo: "Inclinação do eixo", cor: "from-slate-800 to-slate-900" },
        ],
        correta: "inclinacao",
        feedbackAcerto: "Correto. O eixo INCLINADO faz o hemisfério sul receber luz direta em dezembro.",
        feedbackErro: "É a INCLINAÇÃO do eixo. Em dezembro o hemisfério sul está virado pro Sol.",
      },
      {
        id: "r3",
        pergunta: "A cada 4 anos, fevereiro tem 29 dias (ano bissexto). Qual movimento explica isso?",
        cards: [
          { id: "rotacao", emoji: "", titulo: "Rotação", cor: "from-slate-800 to-slate-900" },
          { id: "translacao", emoji: "", titulo: "Translação", cor: "from-slate-800 to-slate-900" },
          { id: "inclinacao", emoji: "", titulo: "Inclinação do eixo", cor: "from-slate-800 to-slate-900" },
        ],
        correta: "translacao",
        feedbackAcerto: "Isso. A TRANSLAÇÃO dura 365 dias e 6 horas — essas 6h acumulam em 1 dia extra a cada 4 anos.",
        feedbackErro: "É TRANSLAÇÃO. A volta da Terra em torno do Sol dura 365,25 dias.",
      },
      {
        id: "r4",
        pergunta: "Em junho, a Europa está no verão e o Brasil está no inverno. Qual movimento explica estações opostas nos dois hemisférios?",
        cards: [
          { id: "rotacao", emoji: "", titulo: "Rotação", cor: "from-slate-800 to-slate-900" },
          { id: "translacao", emoji: "", titulo: "Translação", cor: "from-slate-800 to-slate-900" },
          { id: "inclinacao", emoji: "", titulo: "Inclinação do eixo", cor: "from-slate-800 to-slate-900" },
        ],
        correta: "inclinacao",
        feedbackAcerto: "Correto. Estações opostas entre hemisférios vêm da INCLINAÇÃO do eixo em 23,5°.",
        feedbackErro: "É a INCLINAÇÃO do eixo. Cada hemisfério recebe luz direta em épocas diferentes.",
      },
      {
        id: "r5",
        pergunta: "Todo dia o Sol nasce no leste e se põe no oeste. Qual movimento explica esse ciclo diário?",
        cards: [
          { id: "rotacao", emoji: "", titulo: "Rotação", cor: "from-slate-800 to-slate-900" },
          { id: "translacao", emoji: "", titulo: "Translação", cor: "from-slate-800 to-slate-900" },
          { id: "inclinacao", emoji: "", titulo: "Inclinação do eixo", cor: "from-slate-800 to-slate-900" },
        ],
        correta: "rotacao",
        feedbackAcerto: "Isso. A Terra gira de OESTE pra LESTE — por isso o Sol parece cruzar o céu todo dia.",
        feedbackErro: "É ROTAÇÃO. A Terra gira em torno do próprio eixo em 24 horas.",
      },
      {
        id: "r6",
        pergunta: "No norte da Noruega, em junho, o Sol NÃO se põe por semanas. Qual movimento explica esse fenômeno?",
        cards: [
          { id: "rotacao", emoji: "", titulo: "Rotação", cor: "from-slate-800 to-slate-900" },
          { id: "translacao", emoji: "", titulo: "Translação", cor: "from-slate-800 to-slate-900" },
          { id: "inclinacao", emoji: "", titulo: "Inclinação do eixo", cor: "from-slate-800 to-slate-900" },
        ],
        correta: "inclinacao",
        feedbackAcerto: "Isso. O polo Norte fica tão INCLINADO em direção ao Sol que o Círculo Polar fica sempre iluminado.",
        feedbackErro: "É a INCLINAÇÃO do eixo. Nos polos, em certas épocas, o Sol não se põe.",
      },
    ],
    falaFinal: "6 perguntas, 6 movimentos identificados. Fechou o quiz.",
  },


  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Painel comparativo: quanto dura e a que velocidade acontece cada movimento?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "rotacao",
        rotulo: "Rotação — 24h · 1.670 km/h",
        emoji: "🔄",
        percentual: 50,
        cor: "#0ea5e9",
        descricao:
          "A Terra gira UMA vez em torno do próprio eixo a cada 24 horas. No Equador, a superfície se desloca a 1.670 km/h. Causa dia/noite e fusos horários.",
        exemplos: ["🌅 Amanhecer", "🌆 Anoitecer", "🕐 24 fusos horários"],
      },
      {
        id: "translacao",
        rotulo: "Translação — 365d · 107.000 km/h",
        emoji: "🛰️",
        percentual: 50,
        cor: "#a855f7",
        descricao:
          "A Terra viaja 940 milhões de km em volta do Sol em 365,25 dias — a 107.000 km/h (30 km/s). Combinada com o eixo inclinado, cria as estações.",
        exemplos: ["📅 Ano bissexto", "🍂 4 estações", "🎂 Aniversário anual"],
      },
    ],
    falaFinal: "Rotação rápida = dia. Translação longa = ano. Inclinação fixa = estações. É esse trio que rege a Geografia.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "4 perguntas finais pra ganhar a insígnia Astrônomo Geográfico.",
    instrucao: "Responda as 4",
    perguntas: [
      {
        id: "av1",
        pergunta: "O movimento que dura 24 horas e causa DIA e NOITE se chama:",
        opcoes: [
          { id: "a", texto: "Translação", correta: false },
          { id: "b", texto: "Rotação", correta: true },
          { id: "c", texto: "Inclinação", correta: false },
        ],
        feedbackAcerto: "Isso! ROTAÇÃO = giro em 24h = ciclo dia/noite.",
        feedbackErro: "Translação dura 1 ano. Inclinação é fixa. 24h = ROTAÇÃO.",
      },
      {
        id: "av2",
        pergunta: "As ESTAÇÕES do ano existem porque:",
        opcoes: [
          { id: "a", texto: "A Terra fica mais perto ou mais longe do Sol", correta: false },
          { id: "b", texto: "O eixo da Terra é inclinado a 23,5°", correta: true },
          { id: "c", texto: "A Lua muda de fase", correta: false },
        ],
        feedbackAcerto: "Perfeito! INCLINAÇÃO do eixo faz cada hemisfério receber mais ou menos luz direta.",
        feedbackErro: "Distância varia só 3%. Lua = marés. Estações = INCLINAÇÃO do eixo a 23,5°.",
      },
      {
        id: "av3",
        pergunta: "Quando é VERÃO no hemisfério NORTE, no hemisfério SUL é:",
        opcoes: [
          { id: "a", texto: "Também verão", correta: false },
          { id: "b", texto: "Inverno", correta: true },
          { id: "c", texto: "Primavera", correta: false },
        ],
        feedbackAcerto: "Isso! As estações são SEMPRE opostas entre os hemisférios.",
        feedbackErro: "Estações são INVERTIDAS: verão no norte = INVERNO no sul.",
      },
      {
        id: "av4",
        pergunta: "Quanto tempo dura a TRANSLAÇÃO da Terra?",
        opcoes: [
          { id: "a", texto: "24 horas", correta: false },
          { id: "b", texto: "1 mês", correta: false },
          { id: "c", texto: "365 dias e 6 horas", correta: true },
        ],
        feedbackAcerto: "Isso! 365d + 6h — as 6h extras acumulam 1 dia a cada 4 anos = ano bissexto.",
        feedbackErro: "24h é ROTAÇÃO. Translação = 365d e 6h = 1 ano.",
      },
    ],
    selo: {
      nome: "Astrônomo Geográfico",
      subtitulo: "Insígnia do Explorador Planetário",
      emoji: "🌍",
      cor: "from-cyan-800 to-slate-950",
    },
    falaFinal: "Insígnia conquistada! Você entende a Terra no espaço.",
  },

  recompensa: { xp: 500, moedas: 350, medalha: "Astrônomo Geográfico" },
};
