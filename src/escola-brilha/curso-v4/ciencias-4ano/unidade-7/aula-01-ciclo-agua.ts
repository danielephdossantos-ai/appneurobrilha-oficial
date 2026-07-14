import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as cicloImg } from "@/assets/ciencias-4ano/u7-a1/ciclo-agua.jpg.asset.json";
import { url as evapImg } from "@/assets/ciencias-4ano/u7-a1/evaporacao.jpg.asset.json";
import { url as nuvensImg } from "@/assets/ciencias-4ano/u7-a1/nuvens.jpg.asset.json";
import { url as chuvaImg } from "@/assets/ciencias-4ano/u7-a1/chuva.jpg.asset.json";
import { url as rioImg } from "@/assets/ciencias-4ano/u7-a1/rio.jpg.asset.json";
import { url as economiaImg } from "@/assets/ciencias-4ano/u7-a1/economia-agua.jpg.asset.json";

/**
 * Ciências · 4º Ano · Unidade 7 · Aula 01
 * "Ciclo da Água e Preservação" — EF04CI05/06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-ciclo-agua-preservacao",
  titulo: "Ciclo da Água e Preservação",
  iconeTrilha: "💧",
  bncc: ["EF04CI05", "EF04CI06"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pela paisagem. Sol, oceano, nuvens, chuva e rio no mesmo quadro.",
    mapaUrl: cicloImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Equipe, missão final da expedição. A ÁGUA que você bebe HOJE é a MESMA que os dinossauros beberam há 65 milhões de anos. Nada de novo. Ela só ANDA em CICLO: mar → nuvem → chuva → rio → mar. Sempre.",
    falaFinal:
      "Se é a mesma água pra sempre, precisamos cuidar dela. Sem ciclo saudável, não tem vida.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Se você deixa uma poça d'água no sol, ela SOME. Pra onde vai a água?",
    pergunta: "A poça no sol...",
    fotoUrl: evapImg,
    opcoes: [
      { id: "some", titulo: "Some pra sempre", subtitulo: "vira nada", emoji: "🚫", cor: "from-red-500 to-rose-700" },
      { id: "vapor", titulo: "Vira VAPOR e sobe pro céu", subtitulo: "muda de estado", emoji: "💨", cor: "from-cyan-500 to-sky-700" },
      { id: "chao", titulo: "Vaza pelo chão", subtitulo: "entra na terra", emoji: "⬇️", cor: "from-amber-600 to-yellow-800" },
    ],
    respostaCerta: "vapor",
    feedbackAcerto:
      "Correto. O calor do sol EVAPORA a água — vira VAPOR invisível que sobe. Lá em cima, esse vapor CONDENSA em NUVENS. Ciclo em ação.",
    feedbackErro:
      "Não some — vira VAPOR. Água líquida + calor = gás invisível que sobe. Depois vira nuvem, depois chuva.",
    falaFinal:
      "A água muda de ESTADO (líquido, gás, sólido) mas nunca desaparece. Lei da conservação.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco etapas técnicas do ciclo. Estuda cada caderno.",
    instrucao: "Vocabulário técnico do ciclo hidrológico",
    cadernos: [
      {
        id: "evaporacao",
        capa: "EVAPORAÇÃO",
        emoji: "💨",
        cor: "from-amber-500 to-orange-700",
        conteudo: "Água LÍQUIDA vira VAPOR (gás) pelo calor do sol. Acontece em oceanos, rios, lagos e poças.",
        exemplo: "Ex.: roupa no varal seca porque a água evapora.",
        fotoUrl: evapImg,
      },
      {
        id: "condensacao",
        capa: "CONDENSAÇÃO",
        emoji: "☁️",
        cor: "from-slate-400 to-slate-700",
        conteudo: "VAPOR sobe, esfria lá em cima e vira gotinhas — forma as NUVENS.",
        exemplo: "Ex.: quando você respira num vidro frio, o vapor da boca condensa e embaça.",
        fotoUrl: nuvensImg,
      },
      {
        id: "precipitacao",
        capa: "PRECIPITAÇÃO",
        emoji: "🌧️",
        cor: "from-cyan-500 to-blue-700",
        conteudo: "Gotinhas nas nuvens ficam pesadas e CAEM: CHUVA, GRANIZO ou NEVE.",
        exemplo: "Ex.: chuva forte que você viu ontem = precipitação.",
        fotoUrl: chuvaImg,
      },
      {
        id: "escoamento",
        capa: "ESCOAMENTO",
        emoji: "🏞️",
        cor: "from-emerald-500 to-green-700",
        conteudo: "Chuva escorre pelo chão, forma RIOS que correm de volta pro mar.",
        exemplo: "Ex.: Rio Amazonas leva água da chuva da floresta pro Atlântico.",
        fotoUrl: rioImg,
      },
      {
        id: "infiltracao",
        capa: "INFILTRAÇÃO",
        emoji: "⬇️",
        cor: "from-amber-700 to-yellow-900",
        conteudo: "Parte da chuva ENTRA na terra e forma LENÇÓIS D'ÁGUA subterrâneos. É de onde vêm os poços.",
        exemplo: "Ex.: aquífero Guarani abastece milhões de pessoas no Brasil.",
        fotoUrl: cicloImg,
      },
    ],
    falaFinal: "Cinco processos, um ciclo. A água nunca para.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toca em cada etapa do ciclo pra ver a viagem da água.",
    instrucao: "Toque em cada etapa",
    mapaUrl: cicloImg,
    pontos: [
      {
        id: "sol", x: 15, y: 20, emoji: "☀️", cor: "from-amber-500 to-orange-700",
        titulo: "Sol (motor)",
        texto: "O SOL é a energia que move todo o ciclo. Sem sol, não há evaporação, e sem evaporação não há chuva.",
        fotoUrl: evapImg,
      },
      {
        id: "oceano", x: 20, y: 75, emoji: "🌊", cor: "from-cyan-500 to-blue-800",
        titulo: "Oceano (reservatório)",
        texto: "97% da água do planeta está nos OCEANOS. É de lá que a maior parte evapora.",
        fotoUrl: cicloImg,
      },
      {
        id: "nuvem", x: 55, y: 25, emoji: "☁️", cor: "from-slate-400 to-slate-700",
        titulo: "Nuvem",
        texto: "Vapor sobe, esfria, condensa em milhões de gotinhas — NUVEM. Quando pesa demais, chove.",
        fotoUrl: nuvensImg,
      },
      {
        id: "chuva", x: 80, y: 45, emoji: "🌧️", cor: "from-cyan-500 to-blue-700",
        titulo: "Chuva sobre a serra",
        texto: "CHUVA cai sobre montanhas e florestas. Alimenta rios, lagos e recarrega o solo.",
        fotoUrl: chuvaImg,
      },
      {
        id: "rio", x: 80, y: 80, emoji: "🏞️", cor: "from-emerald-500 to-green-700",
        titulo: "Rio de volta ao mar",
        texto: "Rios levam a água da chuva de volta ao oceano. Fecha o ciclo, e tudo recomeça.",
        fotoUrl: rioImg,
      },
    ],
    falaFinal: "Sol → mar → nuvem → chuva → rio → mar. Ciclo eterno.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas técnicas de hidrologia.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que faz a água líquida virar VAPOR?",
        fotoUrl: evapImg,
        cards: [
          { id: "a", emoji: "☀️", titulo: "Calor do sol", cor: "from-amber-500 to-orange-700" },
          { id: "b", emoji: "❄️", titulo: "Frio da noite", cor: "from-cyan-500 to-blue-800" },
          { id: "c", emoji: "🌬️", titulo: "Vento forte", cor: "from-slate-400 to-slate-700" },
        ],
        correta: "a",
        feedbackAcerto: "Sim. CALOR do sol → evaporação.",
        feedbackErro: "Evaporação precisa de CALOR. Sol é a fonte principal.",
      },
      {
        id: "q2",
        pergunta: "Nuvens são feitas de:",
        fotoUrl: nuvensImg,
        cards: [
          { id: "a", emoji: "💧", titulo: "Gotinhas de água condensada", cor: "from-cyan-500 to-blue-700" },
          { id: "b", emoji: "💨", titulo: "Ar puro", cor: "from-slate-400 to-slate-700" },
          { id: "c", emoji: "🔥", titulo: "Fumaça", cor: "from-red-500 to-rose-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Nuvem = milhões de GOTINHAS de água condensada.",
        feedbackErro: "Nuvem é água em GOTINHAS pequeninas — vapor que condensou. Não é ar nem fumaça.",
      },
      {
        id: "q3",
        pergunta: "Pra onde vai a água que ESCOA depois da chuva?",
        fotoUrl: rioImg,
        cards: [
          { id: "a", emoji: "🌊", titulo: "Vira rio e volta pro mar", cor: "from-cyan-500 to-blue-800" },
          { id: "b", emoji: "☁️", titulo: "Volta pra nuvem direto", cor: "from-slate-400 to-slate-700" },
          { id: "c", emoji: "🚫", titulo: "Some", cor: "from-red-500 to-rose-700" },
        ],
        correta: "a",
        feedbackAcerto: "Sim. Chuva → rio → mar. Fecha o ciclo.",
        feedbackErro: "Água escoa pra rios que levam de volta pro mar. Só depois evapora de novo.",
      },
    ],
    falaFinal: "Você entende o ciclo em profundidade.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "A água boa está em RISCO. Duas ameaças reais: DESPERDÍCIO e POLUIÇÃO. E dois cuidados que salvam.",
    instrucao: "Toque nos interruptores",
    mapaUrl: cicloImg,
    camadas: [
      {
        id: "problema",
        rotulo: "Problemas (o que ameaça)",
        emoji: "⚠️",
        cor: "from-red-500 to-rose-700",
        rect: { x: 5, y: 5, w: 90, h: 45 },
        descricao: "Desperdício (torneiras abertas, banhos longos) + poluição (lixo em rios, esgoto sem tratamento). Menos de 1% da água da Terra é doce e limpa pra beber.",
        fotoUrl: economiaImg,
      },
      {
        id: "solucao",
        rotulo: "Cuidados (o que salva)",
        emoji: "✅",
        cor: "from-emerald-500 to-green-700",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao: "Fechar torneira ao escovar, banhos curtos, não jogar lixo em rios, reutilizar água da chuva, preservar florestas (elas geram chuva).",
        fotoUrl: rioImg,
      },
    ],
    falaFinal: "Ciência não é só entender — é agir. Cada gota importa.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Segue a viagem de uma gota de água, do oceano até voltar pro oceano.",
    instrucao: "Toque nas paradas na ORDEM correta",
    pergunta: "Rota completa do ciclo:",
    paradas: [
      { id: "evap", emoji: "💨", rotulo: "1. Evaporação", descricao: "Sol aquece a água do mar. Ela vira vapor e sobe.", fotoUrl: evapImg },
      { id: "cond", emoji: "☁️", rotulo: "2. Condensação", descricao: "Vapor esfria no alto e vira gotinhas — forma a nuvem.", fotoUrl: nuvensImg },
      { id: "prec", emoji: "🌧️", rotulo: "3. Precipitação", descricao: "Nuvem fica pesada e as gotinhas caem como chuva.", fotoUrl: chuvaImg },
      { id: "esco", emoji: "🏞️", rotulo: "4. Escoamento", descricao: "Chuva vira rio e volta pro mar. Ciclo fecha e recomeça.", fotoUrl: rioImg },
    ],
    ordemCerta: ["evap", "cond", "prec", "esco"],
    feedbackAcerto: "Ciclo completo. Sol move tudo, e a água é reciclada há bilhões de anos.",
    feedbackErro: "Repense: evapora primeiro, depois condensa em nuvem, depois cai chuva, depois escoa.",
    falaFinal: "Quatro etapas, um ciclo. Sempre na mesma ordem.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua leitura final. Relatório de encerramento da expedição.",
    tituloLivro: "📓 Relatório Final · Ciclo da Água",
    subtitulo: "Investigação: água como recurso finito",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O CICLO DA ÁGUA (ou ciclo hidrológico) é o caminho que a água percorre continuamente entre o mar, o ar e a terra. Tem 4 etapas principais: EVAPORAÇÃO (água líquida vira vapor pelo calor do sol), CONDENSAÇÃO (vapor esfria e forma nuvens), PRECIPITAÇÃO (chuva, granizo ou neve) e ESCOAMENTO (água volta pelos rios até o oceano).",
        chaves: ["ciclo da água", "evaporação", "condensação", "precipitação"],
        definicoes: {
          "ciclo da água": "Trajeto contínuo da água entre mar, ar e terra.",
          evaporação: "Passagem da água do estado líquido para gasoso pelo calor.",
          condensação: "Vapor esfria e volta a formar gotinhas.",
          precipitação: "Queda de água das nuvens (chuva, granizo, neve).",
        },
        fotoUrl: cicloImg,
      },
      {
        id: "p2",
        texto:
          "A ÁGUA DOCE (a que dá pra beber) é apenas 3% de toda a água do planeta. E, dela, boa parte está congelada nos polos. Sobra MENOS DE 1% em rios, lagos e lençóis subterrâneos. É POUCA. Se poluirmos ou desperdiçarmos, faltará pra tudo — pra beber, cozinhar, plantar comida.",
        chaves: ["água doce", "1%"],
        definicoes: {
          "água doce": "Água sem sal, própria para consumo humano e agricultura.",
          "1%": "Fração da água do planeta realmente disponível para uso humano.",
        },
        fotoUrl: economiaImg,
      },
      {
        id: "p3",
        texto:
          "PRESERVAR água significa: fechar torneiras ao escovar dentes; tomar banhos mais curtos; não jogar lixo em rios; reutilizar água da chuva pra regar plantas; preservar FLORESTAS (elas evaporam água e geram chuvas — sem floresta, seca). Cada atitude conta. Ciência sem ação não muda o mundo.",
        chaves: ["preservar", "florestas"],
        definicoes: {
          preservar: "Proteger e usar com cuidado pra não acabar.",
          florestas: "Bosques que geram chuva através da transpiração das árvores.",
        },
        fotoUrl: rioImg,
      },
    ],
    falaFinal: "Você entende ciência E responsabilidade. Fim da expedição.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado. Classifica cada situação: ETAPA do ciclo ou ATITUDE de preservação?",
    instrucao: "⏱️ Classifica rápido",
    duracaoSegundos: 20,
    pecas: [
      { id: "evap", emoji: "💨", rotulo: "Evaporação" },
      { id: "cond", emoji: "☁️", rotulo: "Condensação" },
      { id: "prec", emoji: "🌧️", rotulo: "Precipitação" },
      { id: "cuidado", emoji: "✅", rotulo: "Cuidado" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Roupa secando", emoji: "👕", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Sol forte", emoji: "☀️", cor: "from-yellow-400 to-orange-600" },
        contexto: "Roupa molhada estendida no varal sob sol forte. Vai secando ao longo do dia.",
        pecaCertaId: "evap",
        fotoUrl: evapImg,
        feedbackAcerto: "Sim. Água líquida → vapor = EVAPORAÇÃO.",
        feedbackErro: "Roupa secando é EVAPORAÇÃO (líquido vira vapor pelo calor).",
      },
      {
        id: "r2",
        municipioA: { nome: "Vidro embaçado", emoji: "🪟", cor: "from-slate-400 to-slate-700" },
        municipioB: { nome: "Respiração em vidro frio", emoji: "😮‍💨", cor: "from-cyan-400 to-blue-700" },
        contexto: "Você respira num vidro gelado da geladeira. Ele fica embaçado com gotinhas.",
        pecaCertaId: "cond",
        fotoUrl: nuvensImg,
        feedbackAcerto: "Correto. Vapor + frio = CONDENSAÇÃO.",
        feedbackErro: "Vapor virando gotinhas = CONDENSAÇÃO. Mesmo processo das nuvens.",
      },
      {
        id: "r3",
        municipioA: { nome: "Chuva forte", emoji: "🌧️", cor: "from-cyan-500 to-blue-700" },
        municipioB: { nome: "Guarda-chuva aberto", emoji: "☂️", cor: "from-slate-500 to-slate-800" },
        contexto: "Nuvem escura solta chuva forte sobre a cidade.",
        pecaCertaId: "prec",
        fotoUrl: chuvaImg,
        feedbackAcerto: "Sim. Chuva = PRECIPITAÇÃO.",
        feedbackErro: "Chuva, granizo e neve são PRECIPITAÇÃO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Torneira fechada", emoji: "🚰", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Escovando os dentes", emoji: "🪥", cor: "from-cyan-500 to-teal-700" },
        contexto: "Enquanto escova os dentes, a pessoa fecha a torneira em vez de deixar correndo.",
        pecaCertaId: "cuidado",
        fotoUrl: economiaImg,
        feedbackAcerto: "Exato. Isso é CUIDADO com a água.",
        feedbackErro: "Fechar torneira = CUIDADO. Economiza litros por dia.",
      },
    ],
    falaFinal: "Você identifica ciência E atitude cidadã.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "O CICLO DA ÁGUA tem dois lados que sempre andam juntos.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: cicloImg,
    fatias: [
      {
        id: "natural",
        rotulo: "Processo natural",
        emoji: "🌍",
        percentual: 50,
        cor: "#0891b2",
        descricao: "Evaporação → condensação → precipitação → escoamento. A natureza recicla a água sozinha há bilhões de anos.",
        exemplos: ["Sol evapora", "Nuvem se forma", "Chuva cai", "Rio corre"],
        fotoUrl: cicloImg,
      },
      {
        id: "responsabilidade",
        rotulo: "Responsabilidade humana",
        emoji: "✅",
        percentual: 50,
        cor: "#16a34a",
        descricao: "Como só 1% da água é doce e disponível, cuidar dela é dever de cada pessoa. Cada gota economizada = mais vida.",
        exemplos: ["Fechar torneira", "Banhos curtos", "Não poluir rios", "Preservar florestas"],
        fotoUrl: economiaImg,
      },
    ],
    falaFinal: "Ciência e cidadania trabalham juntas. É esse o legado da expedição.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Missão final. Recebe o selo de encerramento da EXPEDIÇÃO TERRA VIVA.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "O que faz a água EVAPORAR?",
        fotoUrl: evapImg,
        opcoes: [
          { id: "a", texto: "Calor do sol", correta: true },
          { id: "b", texto: "Vento gelado" },
        ],
        feedbackAcerto: "Sim. CALOR do sol.",
        feedbackErro: "Evaporação precisa de CALOR — o sol é a fonte.",
      },
      {
        id: "q2",
        pergunta: "Quanto da água do planeta é doce e disponível?",
        fotoUrl: economiaImg,
        opcoes: [
          { id: "a", texto: "Menos de 1%", correta: true },
          { id: "b", texto: "A metade" },
        ],
        feedbackAcerto: "Correto. É POUCA água doce. Por isso preservar é urgente.",
        feedbackErro: "É MENOS DE 1%. A maior parte da água é salgada ou congelada.",
      },
      {
        id: "q3",
        pergunta: "Qual atitude PRESERVA água?",
        fotoUrl: economiaImg,
        opcoes: [
          { id: "a", texto: "Fechar a torneira ao escovar dentes", correta: true },
          { id: "b", texto: "Deixar torneira aberta o tempo todo" },
        ],
        feedbackAcerto: "Exato. Pequenas atitudes = grande economia.",
        feedbackErro: "Fechar torneira ECONOMIZA água. Deixar aberta desperdiça litros.",
      },
    ],
    selo: {
      nome: "Selo da Expedição Terra Viva",
      subtitulo: "Curso concluído · Pesquisador Científico Certificado",
      emoji: "🌍",
      cor: "from-cyan-400 via-emerald-500 to-teal-700",
    },
    falaFinal: "Você é oficialmente pesquisador da Expedição Terra Viva. Missão cumprida.",
  },

  recompensa: { xp: 200, moedas: 50, medalha: "Pesquisador Terra Viva" },
};
