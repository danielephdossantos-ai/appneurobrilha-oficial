import type { AulaGeoV1 } from "../../types";
import { url as instituto } from "@/assets/filosofia-9ano/u1-instituto.jpg.asset.json";
import { url as adorno } from "@/assets/filosofia-9ano/u1-adorno.jpg.asset.json";
import { url as industria } from "@/assets/filosofia-9ano/u1-industria-cultural.jpg.asset.json";
import { url as razao } from "@/assets/filosofia-9ano/u1-razao-instrumental.jpg.asset.json";

/**
 * Filosofia · 9º Ano · Unidade 1 · Aula 01
 * "A Fábrica de Sonhos e a Razão que Domina" — EF09FI01 (autoral)
 * Tema: Escola de Frankfurt — Adorno, Horkheimer, Benjamin.
 * Indústria cultural, razão instrumental, esclarecimento.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-frankfurt",
  titulo: "A Fábrica de Sonhos e a Razão que Domina",
  iconeTrilha: "🎬",
  bncc: ["EF09FI01"],
  duracaoMin: 28,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de investigar, olhe a cena.",
    mapaUrl: instituto,
    imagemDestaqueUrl: instituto,
    aurora:
      "Investigador, é 1923, Frankfurt, Alemanha. Um grupo de filósofos judeus e marxistas funda o Instituto de Pesquisa Social — um lugar pra fazer uma pergunta incômoda: por que a promessa iluminista de RAZÃO, PROGRESSO e LIBERDADE terminou em Auschwitz, bomba atômica e Hollywood? Adorno, Horkheimer, Benjamin e Marcuse viram algo que ninguém queria ver: a mesma razão que liberta pode dominar; a mesma cultura que emancipa pode virar indústria. Do Instituto sairá a Teoria Crítica — filosofia que denuncia o lado sombrio da modernidade.",
    falaFinal:
      "Nesta aula você entra em Frankfurt. Três chaves: indústria cultural, razão instrumental e esclarecimento que virou barbárie.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite antes da investigação: por que hits pop, séries da Netflix e memes virais parecem TODOS iguais?",
    pergunta: "Cultura de massa é toda parecida porque…",
    opcoes: [
      {
        id: "industria",
        titulo: "É produto INDUSTRIAL",
        subtitulo: "feito por fórmula pra vender pro maior público possível",
        emoji: "🏭",
        cor: "from-red-400 to-rose-600",
      },
      {
        id: "gosto",
        titulo: "É o que o público REALMENTE gosta",
        subtitulo: "as pessoas escolhem livremente e por acaso escolhem igual",
        emoji: "❤️",
        cor: "from-pink-400 to-fuchsia-600",
      },
    ],
    respostaCerta: "industria",
    feedbackAcerto:
      "Boa. Pra Adorno e Horkheimer, cultura pop segue fórmula de fábrica: mesmo refrão, mesmo enredo, mesma pegada. Vende porque é padronizada — não é padronizada porque vende.",
    feedbackErro:
      "Cuidado: o 'gosto do público' já foi FABRICADO. Você gosta do que te ensinaram a gostar. Frankfurt vai mostrar que existe uma FÁBRICA por trás.",
    falaFinal: "Cultura de massa = produto industrial padronizado. Não é acaso.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave pra entrar na Escola de Frankfurt.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "teoria-critica",
        capa: "1. Teoria Crítica",
        emoji: "🔍",
        cor: "from-red-500 to-rose-700",
        conteudo:
          "TEORIA CRÍTICA é o método da Escola de Frankfurt: não é só descrever o mundo — é DENUNCIAR o que está errado nele. Diferente da filosofia acadêmica neutra, a teoria crítica quer transformar a realidade. Junta filosofia, sociologia, psicanálise e economia pra entender POR QUE a sociedade moderna produz sofrimento em vez de emancipação.",
        exemplo:
          "Ex.: em vez de perguntar 'como funciona a TV?', pergunta 'a QUEM interessa que a TV funcione assim?'.",
        fotoUrl: instituto,
      },
      {
        id: "industria-cultural",
        capa: "2. Indústria Cultural",
        emoji: "🎬",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "INDÚSTRIA CULTURAL é o termo que Adorno e Horkheimer inventaram em 1947 pra descrever cinema, rádio, música pop, revistas — TODOS produzidos como sabonete: em série, por fórmula, pra lucrar. Ela promete diversão, mas entrega padronização. Você se acha original curtindo aquela série — mas milhões curtem exatamente igual, porque foi feita pra isso.",
        exemplo:
          "Ex.: 3 acordes pop, refrão de 20 segundos, videoclipe genérico. Você canta antes da 2ª vez — porque a fórmula funciona.",
        fotoUrl: industria,
      },
      {
        id: "razao-instrumental",
        capa: "3. Razão Instrumental",
        emoji: "⚙️",
        cor: "from-slate-500 to-gray-700",
        conteudo:
          "RAZÃO INSTRUMENTAL é a razão que só pergunta 'COMO fazer?' e nunca 'PRA QUÊ fazer?'. É a razão do engenheiro que projeta o forno mais eficiente — sem perguntar se o forno vai assar pão ou pessoas. Pra Frankfurt, foi essa razão que permitiu Auschwitz, Hiroshima e a devastação ambiental: técnica perfeita, ética zero.",
        exemplo:
          "Ex.: um algoritmo que otimiza engajamento sem perguntar se está viciando adolescente. Eficiência sem propósito humano.",
        fotoUrl: razao,
      },
    ],
    falaFinal: "Teoria crítica, indústria cultural, razão instrumental. As 3 alavancas de Frankfurt.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "4 momentos da Escola de Frankfurt — do sonho iluminista ao alerta atual.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: instituto,
    pontos: [
      {
        id: "1923-instituto",
        x: 24,
        y: 32,
        emoji: "🏛️",
        cor: "from-red-500 to-rose-700",
        titulo: "1923 — Frankfurt funda o Instituto",
        texto:
          "Um grupo de intelectuais judeus, marxistas e psicanalistas cria em Frankfurt um instituto pra estudar POR QUE a revolução operária que Marx previu não aconteceu na Europa Ocidental. Suspeita: a cultura de massa e o consumo estão amortecendo o pensamento crítico. Nasce a Escola de Frankfurt.",
        fotoUrl: instituto,
      },
      {
        id: "1933-exilio",
        x: 74,
        y: 30,
        emoji: "✈️",
        cor: "from-slate-500 to-gray-700",
        titulo: "1933 — o exílio",
        texto:
          "Hitler sobe ao poder. O Instituto é fechado, os pensadores são perseguidos (a maioria é judia) e fogem — Adorno e Horkheimer pra Nova York e Los Angeles. Ali, no coração de Hollywood, escrevem a obra que define a Escola: DIALÉTICA DO ESCLARECIMENTO (1947). Vendo Hollywood de perto, entendem a INDÚSTRIA CULTURAL.",
        fotoUrl: industria,
      },
      {
        id: "1947-dialetica",
        x: 28,
        y: 70,
        emoji: "📖",
        cor: "from-amber-500 to-orange-700",
        titulo: "1947 — Dialética do Esclarecimento",
        texto:
          "Tese central: o Iluminismo (esclarecimento pela razão) prometia libertar a humanidade — mas virou seu contrário. A mesma razão que descobriu a ciência descobriu o campo de concentração industrial. A mesma cultura que produz Bach produz a fábrica de sonhos de Hollywood. RAZÃO INSTRUMENTAL sem ética virou barbárie.",
        fotoUrl: razao,
      },
      {
        id: "hoje",
        x: 76,
        y: 70,
        emoji: "📱",
        cor: "from-fuchsia-500 to-purple-700",
        titulo: "Hoje — algoritmos, streaming e redes",
        texto:
          "Frankfurt está mais atual do que nunca. Netflix escolhe pra você o que assistir. Spotify decide o que você ouve. TikTok mede quanto tempo prende sua atenção. A indústria cultural do século XXI é algorítmica, personalizada — e ainda mais eficiente em padronizar. Adorno morreu em 1969, mas seu diagnóstico virou o nosso presente.",
        fotoUrl: adorno,
      },
    ],
    falaFinal:
      "1923 → exílio → Dialética → algoritmos. A crítica que atravessou o século.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas pra calibrar o radar crítico.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "A INDÚSTRIA CULTURAL, pra Frankfurt, é…",
        fotoUrl: industria,
        cards: [
          {
            id: "producao-serie",
            emoji: "🏭",
            titulo: "Cultura produzida em série, por fórmula, pra lucrar",
            cor: "from-amber-500 to-orange-700",
          },
          {
            id: "arte-erudita",
            emoji: "🎻",
            titulo: "Arte erudita das grandes universidades",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "cultura-popular",
            emoji: "🥁",
            titulo: "Cultura tradicional dos povos (folclore)",
            cor: "from-emerald-400 to-teal-600",
          },
        ],
        correta: "producao-serie",
        feedbackAcerto:
          "Isso. Indústria = SÉRIE + FÓRMULA + LUCRO. Nada a ver com folclore ou arte de conservatório.",
        feedbackErro:
          "Não é erudita nem folclórica: é a cultura FABRICADA pra massa — cinema hollywoodiano, pop, novela, feed.",
      },
      {
        id: "q2",
        pergunta: "A RAZÃO INSTRUMENTAL é aquela que…",
        fotoUrl: razao,
        cards: [
          {
            id: "como-sem-porque",
            emoji: "⚙️",
            titulo: "Pergunta 'COMO fazer?' mas nunca 'PRA QUÊ fazer?'",
            cor: "from-slate-500 to-gray-700",
          },
          {
            id: "religiosa",
            emoji: "🙏",
            titulo: "Razão que só aceita explicações religiosas",
            cor: "from-red-400 to-rose-600",
          },
          {
            id: "artistica",
            emoji: "🎨",
            titulo: "Razão que valoriza a arte acima da técnica",
            cor: "from-fuchsia-400 to-purple-600",
          },
        ],
        correta: "como-sem-porque",
        feedbackAcerto:
          "Perfeito. Técnica perfeita, ética zero — a razão que projeta o forno sem perguntar o que vai dentro.",
        feedbackErro:
          "Não é religiosa nem artística: é a razão puramente TÉCNICA que esquece do fim humano.",
      },
      {
        id: "q3",
        pergunta: "A TESE central da 'Dialética do Esclarecimento' é…",
        fotoUrl: adorno,
        cards: [
          {
            id: "razao-vira-barbarie",
            emoji: "⚠️",
            titulo: "A razão que prometia libertar acabou dominando",
            cor: "from-red-500 to-rose-700",
          },
          {
            id: "razao-salva",
            emoji: "✨",
            titulo: "Só a ciência pode salvar a humanidade",
            cor: "from-sky-400 to-blue-600",
          },
          {
            id: "voltar-fe",
            emoji: "⛪",
            titulo: "Devemos abandonar a razão e voltar à fé",
            cor: "from-slate-400 to-gray-600",
          },
        ],
        correta: "razao-vira-barbarie",
        feedbackAcerto:
          "Isso. O esclarecimento se voltou contra si mesmo — Iluminismo → Auschwitz. Não é contra a razão, é contra a razão SEM ética.",
        feedbackErro:
          "Frankfurt não abandona a razão nem endeusa a ciência: DENUNCIA a razão que virou pura técnica.",
      },
    ],
    falaFinal: "3 acertos = radar crítico calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A Teoria Crítica chegou ao Brasil através de universidades públicas. Escolha 5 estados com programas de pós-graduação em Filosofia que lêem Frankfurt.",
    instrucao: "Acenda 5 estados com centros de Teoria Crítica",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "PR"],
      pergunta:
        "Quais 5 estados abrigam programas fortes em Teoria Crítica (USP, UFRJ, UFMG, UFRGS, UFPR)?",
    },
    falaFinal:
      "USP-SP, UFRJ-RJ, UFMG-MG, UFRGS-RS e UFPR-PR. Adorno lido e discutido em cada uma.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Como o Iluminismo virou seu contrário, segundo Frankfurt. Ponha na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do sonho iluminista ao alerta crítico:",
    paradas: [
      {
        id: "iluminismo",
        emoji: "💡",
        rotulo: "1. Iluminismo promete libertar",
        descricao:
          "Séc. XVIII: razão, ciência e progresso vão libertar a humanidade da superstição e da miséria.",
      },
      {
        id: "industrializacao",
        emoji: "🏭",
        rotulo: "2. Industrialização mecaniza tudo",
        descricao:
          "Séc. XIX: fábrica, trabalho em série, produção em massa. Razão vira TÉCNICA de eficiência.",
      },
      {
        id: "cultura-massa",
        emoji: "🎬",
        rotulo: "3. Cultura vira produto de fábrica",
        descricao:
          "Séc. XX: cinema, rádio e revista produzidos como sabonete. Nasce a INDÚSTRIA CULTURAL.",
      },
      {
        id: "barbarie",
        emoji: "⚠️",
        rotulo: "4. Razão sem ética = barbárie",
        descricao:
          "Auschwitz e Hiroshima mostram: técnica perfeita a serviço da destruição. Esclarecimento vira seu contrário.",
      },
      {
        id: "critica",
        emoji: "🔍",
        rotulo: "5. Frankfurt denuncia",
        descricao:
          "A Teoria Crítica desmonta o mito do progresso e cobra: qual RAZÃO queremos? Pra QUÊ?",
      },
    ],
    ordemCerta: ["iluminismo", "industrializacao", "cultura-massa", "barbarie", "critica"],
    feedbackAcerto:
      "Exato. Iluminismo → indústria → cultura de massa → barbárie → crítica. A dialética do esclarecimento em 5 passos.",
    feedbackErro:
      "A ordem é: iluminismo, industrialização, cultura de massa, barbárie, crítica.",
    falaFinal: "5 passos. A modernidade se voltou contra si mesma.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 1 — A fábrica de sonhos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Em 1923, um grupo de filósofos, sociólogos e psicanalistas funda em Frankfurt o Instituto de Pesquisa Social. Eles querem responder a uma pergunta que assombrou o século XX: por que a promessa iluminista de razão, progresso e liberdade não trouxe emancipação, mas guerras mundiais, fascismo e alienação de massa?",
        chaves: ["Frankfurt", "Iluminismo"],
      },
      {
        id: "p2",
        texto:
          "Perseguidos pelo nazismo em 1933, Adorno e Horkheimer se exilam em Los Angeles. Vendo Hollywood de dentro, formulam o conceito de INDÚSTRIA CULTURAL: cinema, rádio, música pop e revistas produzidos em série, por fórmula, pra padronizar o gosto e amortecer a crítica. Diversão vira mercadoria; mercadoria vira controle.",
        chaves: ["indústria cultural", "Adorno"],
      },
      {
        id: "p3",
        texto:
          "Em 1947 publicam DIALÉTICA DO ESCLARECIMENTO. Tese: o Iluminismo se voltou contra si mesmo. A mesma RAZÃO INSTRUMENTAL que descobriu a penicilina descobriu o campo de concentração industrial. Técnica perfeita, ética zero — é o que Frankfurt chama de barbárie moderna.",
        chaves: ["razão instrumental", "barbárie"],
      },
      {
        id: "p4",
        texto:
          "A Escola de Frankfurt não pede pra abandonar a razão nem voltar à fé. Pede pra recuperar a razão CRÍTICA — aquela que pergunta não só 'como fazer?' mas 'pra QUEM fazer? pra QUÊ fazer?'. No século dos algoritmos, do streaming e da inteligência artificial, esse alerta ficou ainda mais urgente.",
        chaves: ["razão crítica", "algoritmo"],
      },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo RADAR CRÍTICO! Cada caso mostra uma situação atual. Qual conceito de Frankfurt ela ilustra?",
    instrucao: "⏱️ Qual conceito frankfurtiano é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "industria-cultural", emoji: "🎬", rotulo: "Indústria Cultural" },
      { id: "razao-instrumental", emoji: "⚙️", rotulo: "Razão Instrumental" },
      { id: "teoria-critica", emoji: "🔍", rotulo: "Teoria Crítica" },
      { id: "barbarie", emoji: "⚠️", rotulo: "Esclarecimento → Barbárie" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'Todos os hits pop têm 3 minutos e o mesmo refrão'",
          emoji: "🎵",
          cor: "from-amber-400 to-orange-600",
        },
        municipioB: {
          nome: "Produção em série por fórmula",
          emoji: "🏭",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "Padrão industrial na música pop.",
        pecaCertaId: "industria-cultural",
        feedbackAcerto:
          "Isso. INDÚSTRIA CULTURAL na veia — fórmula testada, entrega garantida.",
        feedbackErro:
          "É INDÚSTRIA CULTURAL: música produzida em série por fórmula pra maximizar consumo.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'O algoritmo otimiza engajamento sem perguntar se vicia'",
          emoji: "📱",
          cor: "from-slate-400 to-gray-600",
        },
        municipioB: {
          nome: "Técnica perfeita, ética zero",
          emoji: "⚙️",
          cor: "from-gray-400 to-slate-600",
        },
        contexto: "Eficiência pura sem propósito humano.",
        pecaCertaId: "razao-instrumental",
        feedbackAcerto:
          "Perfeito. RAZÃO INSTRUMENTAL — otimiza o COMO, ignora o PRA QUÊ.",
        feedbackErro:
          "É RAZÃO INSTRUMENTAL: o algoritmo é eficiente mas não pergunta o custo humano.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'Ciência criou penicilina — e a bomba atômica'",
          emoji: "☢️",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Progresso científico virou destruição",
          emoji: "💥",
          cor: "from-rose-400 to-red-600",
        },
        contexto: "A tese central da Dialética do Esclarecimento.",
        pecaCertaId: "barbarie",
        feedbackAcerto:
          "Isso. ESCLARECIMENTO → BARBÁRIE — a mesma razão libertou e destruiu.",
        feedbackErro:
          "É ESCLARECIMENTO → BARBÁRIE: a razão que curou também exterminou.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'Antes de curtir, pergunto: a QUEM interessa isso?'",
          emoji: "🔍",
          cor: "from-fuchsia-400 to-purple-600",
        },
        municipioB: {
          nome: "Método de suspeita frankfurtiano",
          emoji: "🧠",
          cor: "from-purple-400 to-fuchsia-600",
        },
        contexto: "Análise crítica de mídia no cotidiano.",
        pecaCertaId: "teoria-critica",
        feedbackAcerto:
          "Perfeito. TEORIA CRÍTICA em ação — sempre perguntar a serviço de quem.",
        feedbackErro:
          "É TEORIA CRÍTICA: método de suspeita — a serviço de QUEM funciona isso?",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'Netflix decide o que você assiste hoje'",
          emoji: "📺",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Fábrica de sonhos personalizada",
          emoji: "🎬",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "A indústria cultural do século XXI.",
        pecaCertaId: "industria-cultural",
        feedbackAcerto:
          "Isso. INDÚSTRIA CULTURAL versão streaming — mais eficiente que Hollywood 1947.",
        feedbackErro:
          "É INDÚSTRIA CULTURAL — só que agora personalizada por algoritmo.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'Auschwitz foi projetado por engenheiros competentes'",
          emoji: "🚂",
          cor: "from-slate-500 to-gray-700",
        },
        municipioB: {
          nome: "Técnica genocida sem freio ético",
          emoji: "⚠️",
          cor: "from-gray-500 to-slate-700",
        },
        contexto: "O exemplo-limite que assombra Frankfurt.",
        pecaCertaId: "barbarie",
        feedbackAcerto:
          "Perfeito. ESCLARECIMENTO → BARBÁRIE — a modernidade técnica sem ética.",
        feedbackErro:
          "É ESCLARECIMENTO → BARBÁRIE: engenharia perfeita a serviço do extermínio.",
      },
    ],
    falaFinal:
      "6 casos, 4 conceitos. Frankfurt no seu radar cotidiano.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza rápida: 2 tipos de razão — Frankfurt cobra qual delas.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "razao-instrumental",
        rotulo: "RAZÃO INSTRUMENTAL (perigosa)",
        emoji: "⚙️",
        percentual: 50,
        cor: "#64748b",
        descricao:
          "A razão que só otimiza MEIOS e nunca discute FINS. Faz o forno mais eficiente sem perguntar o que vai dentro. Cria o algoritmo mais viciante sem perguntar o custo mental. É a razão de Auschwitz, Hiroshima e do feed infinito.",
        exemplos: ["🏭 Fábrica que não pergunta pra que produz", "📱 Algoritmo que só quer engajamento", "☢️ Ciência sem controle ético"],
      },
      {
        id: "razao-critica",
        rotulo: "RAZÃO CRÍTICA (emancipadora)",
        emoji: "🔍",
        percentual: 50,
        cor: "#dc2626",
        descricao:
          "A razão que pergunta 'pra QUÊ?' e 'pra QUEM?' antes de fazer. Junta técnica com ética, eficiência com propósito humano. É a razão que Frankfurt quer recuperar do escombro do Iluminismo.",
        exemplos: ["🧠 Ciência com bioética", "📺 Consumo consciente de mídia", "⚖️ Tecnologia a serviço da vida"],
      },
    ],
    falaFinal:
      "Razão instrumental × razão crítica. Frankfurt escolhe a 2ª.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia INVESTIGADOR CRÍTICO.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "A INDÚSTRIA CULTURAL, segundo Adorno e Horkheimer, é…",
        opcoes: [
          {
            id: "a",
            texto:
              "A cultura produzida em série, por fórmula, para padronizar o gosto e maximizar lucro",
            correta: true,
          },
          { id: "b", texto: "A cultura tradicional dos povos originários", correta: false },
          { id: "c", texto: "As grandes obras clássicas de museus e conservatórios", correta: false },
        ],
        feedbackAcerto:
          "Isso. Cultura como sabonete: série, fórmula, lucro. Padroniza o gosto pra vender mais.",
        feedbackErro:
          "Não é folclore nem arte erudita: é a cultura FABRICADA em série — cinema, pop, streaming.",
      },
      {
        id: "av2",
        pergunta: "A RAZÃO INSTRUMENTAL é criticada porque…",
        opcoes: [
          { id: "a", texto: "Só pergunta COMO fazer e ignora PRA QUÊ fazer, permitindo eficiência sem ética", correta: true },
          { id: "b", texto: "É contra a ciência e o método experimental", correta: false },
          { id: "c", texto: "Defende que só a religião pode dar respostas", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. Técnica perfeita, ética zero — a razão que projeta sem perguntar o custo humano.",
        feedbackErro:
          "Frankfurt não é contra a ciência: é contra a razão que esqueceu de perguntar PRA QUÊ.",
      },
      {
        id: "av3",
        pergunta:
          "A tese 'DIALÉTICA DO ESCLARECIMENTO' afirma que…",
        opcoes: [
          {
            id: "a",
            texto:
              "O Iluminismo prometeu libertar, mas sua razão instrumental produziu novas formas de dominação",
            correta: true,
          },
          { id: "b", texto: "O Iluminismo foi um sucesso total e libertou toda a humanidade", correta: false },
          { id: "c", texto: "Devemos abandonar a razão e voltar à fé medieval", correta: false },
        ],
        feedbackAcerto:
          "Isso. Esclarecimento se voltou contra si — Iluminismo → Auschwitz. Nem elogio ingênuo, nem volta à fé.",
        feedbackErro:
          "Nem elogio ao Iluminismo nem volta à fé: DENÚNCIA de como a razão sem ética virou dominação.",
      },
    ],
    selo: {
      nome: "Investigador Crítico",
      subtitulo: "Insígnia da Escola de Frankfurt",
      emoji: "🔍",
      cor: "from-red-400 to-rose-700",
    },
    falaFinal:
      "Insígnia conquistada! Você entrou em Frankfurt e saiu com o radar crítico ligado.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Investigador Crítico" },
};
