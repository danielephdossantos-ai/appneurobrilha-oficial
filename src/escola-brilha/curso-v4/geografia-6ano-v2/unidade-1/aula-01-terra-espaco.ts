import type { AulaGeoV1 } from "../../types";
import terraEspaco from "@/assets/geografia-6ano/terra-espaco.jpg";
import orbitaEstacoes from "@/assets/geografia-6ano/orbita-estacoes.jpg";
import rotacaoDiaNoite from "@/assets/geografia-6ano/rotacao-dia-noite.jpg";
import rotacaoReal from "@/assets/geografia-6ano/rotacao-real.jpg";
import translacaoOrbita from "@/assets/geografia-6ano/translacao-orbita.jpg";
import eixoInclinado from "@/assets/geografia-6ano/eixo-inclinado.jpg";
import quatroEstacoes from "@/assets/geografia-6ano/quatro-estacoes.jpg";
import estacaoVerao from "@/assets/geografia-6ano/estacao-verao.jpg";
import estacaoOutono from "@/assets/geografia-6ano/estacao-outono.jpg";
import estacaoInverno from "@/assets/geografia-6ano/estacao-inverno.jpg";
import estacaoPrimavera from "@/assets/geografia-6ano/estacao-primavera.jpg";
import orbitaJun from "@/assets/geografia-6ano/orbita-jun-solsticio.jpg";
import orbitaSet from "@/assets/geografia-6ano/orbita-set-equinocio.jpg";
import orbitaDez from "@/assets/geografia-6ano/orbita-dez-solsticio.jpg";
import orbitaMar from "@/assets/geografia-6ano/orbita-mar-equinocio.jpg";

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
    aurora: "Cada infográfico mostra uma posição real da Terra na órbita. Toque em um pra ouvir o que acontece naquela data.",
    instrucao: "Toque em cada infográfico pra ouvir",
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
    aurora: "Sua vez. Leia com atenção e marque as palavras-chave em cada parágrafo.",
    tituloLivro: "📘 Manual do Explorador Planetário",
    subtitulo: "Capítulo 1 — Movimentos da Terra",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A ROTAÇÃO é o giro da Terra em torno do próprio eixo. Dura cerca de 24 horas e causa o ciclo do DIA e da NOITE. No Equador, a superfície gira a 1.670 km/h.",
        chaves: ["rotação", "24 horas", "dia", "noite", "1.670"],
        fotoUrl: rotacaoDiaNoite,
      },
      {
        id: "p2",
        texto:
          "A TRANSLAÇÃO é a volta da Terra ao redor do SOL. Dura 365 dias e 6 horas — origem do ano BISSEXTO. A Terra percorre 940 milhões de km a 107.000 km/h.",
        chaves: ["translação", "365", "sol", "bissexto", "107.000"],
        fotoUrl: translacaoOrbita,
      },
      {
        id: "p3",
        texto:
          "O EIXO da Terra está INCLINADO em 23,5°. Essa inclinação é FIXA e é a verdadeira causa das ESTAÇÕES do ano. A distância ao Sol muda muito pouco (só 3%).",
        chaves: ["eixo", "23,5", "inclinado", "estações", "3%"],
        fotoUrl: eixoInclinado,
      },
      {
        id: "p4",
        texto:
          "As estações são INVERTIDAS entre os hemisférios: quando é verão no SUL, é inverno no NORTE. Nos EQUINÓCIOS (março e setembro), dia e noite duram IGUAL no planeta inteiro.",
        chaves: ["invertidas", "verão", "inverno", "hemisférios", "equinócios"],
        fotoUrl: quatroEstacoes,
      },
    ],
    falaFinal: "Leu tudo? Boa. Agora um minijogo cronometrado.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo ASTRÔNOMO EXPRESS! Cada rodada mostra uma cena — escolha o MOVIMENTO responsável.",
    instrucao: "⏱️ Qual movimento explica isso?",
    duracaoSegundos: 15,
    pecas: [
      { id: "rotacao", emoji: "🔄", rotulo: "Rotação" },
      { id: "translacao", emoji: "🛰️", rotulo: "Translação" },
      { id: "inclinacao", emoji: "📐", rotulo: "Inclinação do eixo" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Amanhece em Tóquio", emoji: "🌅", cor: "from-amber-800 to-amber-950" },
        municipioB: { nome: "Anoitece em SP", emoji: "🌆", cor: "from-indigo-800 to-slate-950" },
        contexto: "Enquanto o Japão acorda, o Brasil dorme. Que movimento explica?",
        pecaCertaId: "rotacao",
        feedbackAcerto: "Isso! ROTAÇÃO gira a Terra em 24h — por isso existem fusos horários diferentes.",
        feedbackErro: "Diferença de horas entre países = ROTAÇÃO da Terra em 24h.",
        fotoUrl: rotacaoReal,
      },
      {
        id: "r2",
        municipioA: { nome: "Natal na praia", emoji: "🏖️", cor: "from-cyan-800 to-slate-950" },
        municipioB: { nome: "Ano Novo no calor", emoji: "🎇", cor: "from-rose-900 to-slate-950" },
        contexto: "Verão de dezembro a março no Brasil. Que movimento explica?",
        pecaCertaId: "inclinacao",
        feedbackAcerto: "Perfeito! Eixo INCLINADO faz o hemisfério sul receber luz direta em dezembro.",
        feedbackErro: "Verão no Natal = INCLINAÇÃO. O hemisfério sul está virado pro Sol.",
        fotoUrl: estacaoVerao,
      },
      {
        id: "r3",
        municipioA: { nome: "Ano bissexto 2024", emoji: "📅", cor: "from-indigo-800 to-slate-950" },
        municipioB: { nome: "29 de fevereiro", emoji: "🗓️", cor: "from-teal-800 to-slate-950" },
        contexto: "A cada 4 anos, fevereiro tem 29 dias. Por quê?",
        pecaCertaId: "translacao",
        feedbackAcerto: "Isso! TRANSLAÇÃO dura 365d + 6h. As 6h acumulam em 1 dia extra a cada 4 anos.",
        feedbackErro: "Ano bissexto = TRANSLAÇÃO. A volta ao Sol dura 365,25 dias.",
        fotoUrl: translacaoOrbita,
      },
      {
        id: "r4",
        municipioA: { nome: "Junho na Europa", emoji: "☀️", cor: "from-amber-800 to-amber-950" },
        municipioB: { nome: "Junho no Brasil", emoji: "🧥", cor: "from-slate-800 to-slate-950" },
        contexto: "No mesmo mês, Europa faz sol de verão e Brasil está no inverno. Por quê?",
        pecaCertaId: "inclinacao",
        feedbackAcerto: "Correto! Estações OPOSTAS entre hemisférios = INCLINAÇÃO do eixo.",
        feedbackErro: "Estações opostas nos dois hemisférios = INCLINAÇÃO do eixo a 23,5°.",
        fotoUrl: eixoInclinado,
      },
      {
        id: "r5",
        municipioA: { nome: "Sol nasce no leste", emoji: "🌄", cor: "from-amber-800 to-amber-950" },
        municipioB: { nome: "Sol se põe no oeste", emoji: "🌇", cor: "from-rose-900 to-slate-950" },
        contexto: "Todo dia o Sol 'nasce' no leste e 'se põe' no oeste. Que movimento?",
        pecaCertaId: "rotacao",
        feedbackAcerto: "Isso! A Terra gira de OESTE pra LESTE — por isso o Sol parece cruzar o céu.",
        feedbackErro: "Sol nascendo no leste = ROTAÇÃO da Terra (oeste → leste).",
        fotoUrl: rotacaoDiaNoite,
      },
      {
        id: "r6",
        municipioA: { nome: "Sol da meia-noite", emoji: "🌞", cor: "from-cyan-800 to-slate-950" },
        municipioB: { nome: "Noruega em junho", emoji: "🏔️", cor: "from-indigo-800 to-slate-950" },
        contexto: "Em junho, no norte da Noruega, o Sol NÃO se põe por semanas. Por quê?",
        pecaCertaId: "inclinacao",
        feedbackAcerto: "Isso! O polo Norte fica tão inclinado pro Sol que a região do Círculo Polar fica sempre iluminada.",
        feedbackErro: "Sol que não se põe nos polos = INCLINAÇÃO extrema do eixo em relação ao Sol.",
        fotoUrl: eixoInclinado,
      },
    ],
    falaFinal: "6 rodadas, 6 movimentos identificados. Astrônomo de carteirinha.",
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
