import type { AulaGeoV1 } from "../../types";
import { url as imgRelogio } from "@/assets/historia-2ano/relogio-tempo.png.asset.json";
import { url as imgMuseu } from "@/assets/historia-2ano/museu-final.png.asset.json";
import { url as imgLinhaVida } from "@/assets/historia-2ano/linha-vida-crianca.png.asset.json";
import { url as imgFotoAntiga } from "@/assets/historia-2ano/foto-antiga.png.asset.json";
import { url as imgArvore } from "@/assets/historia-2ano/arvore-genealogica-diagrama.png.asset.json";
import { url as imgBairro } from "@/assets/historia-2ano/bairro-hoje.png.asset.json";
/**
 * História · 2º Ano · Unidade 7 · Aula 01
 * "Grandes Historiadores" — Revisão Final
 *
 * Missão final: usar todas as pistas coletadas para ativar o Relógio do Tempo
 * e inaugurar a exposição final do Museu Digital. Recompensa: Sétima Engrenagem
 * Mágica + título "Mestre dos Segredos do Tempo".
 */

export const aula01: AulaGeoV1 = {
  slug: "aula-01-grandes-historiadores",
  titulo: "Grandes Historiadores",
  iconeTrilha: "⏳",
  bncc: ["EF02HI01", "EF02HI11"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA no Relógio do Tempo. Descubra as SEIS engrenagens que você já colocou no lugar!",
    mapaUrl: imgRelogio,
    imagemDestaqueUrl: imgMuseu,
    aurora:
      "Pequeno Historiador, conseguimos! Seis engrenagens no lugar. O Relógio do Tempo está quase pronto pra voltar a funcionar. Falta só UMA — a Sétima Engrenagem Mágica — e ela só aparece se você provar que aprendeu a conectar TUDO.",
    falaFinal:
      "O verdadeiro poder de um historiador é entender o passado pra viver melhor o presente. Vamos ativar o Relógio!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de eu explicar, quero seu palpite. Ao olhar a linha do tempo da SUA vida — do dia que você nasceu até hoje — o que essa sequência mostra?",
    pergunta: "O que a linha do tempo da sua vida representa?",
    fotoUrl: imgLinhaVida,
    opcoes: [
      {
        id: "id",
        titulo: "A construção da sua identidade",
        subtitulo: "quem você é e como você mudou",
        emoji: "🌟",
        cor: "from-amber-400 to-orange-600",
        fotoUrl: imgLinhaVida,
      },
      {
        id: "nada",
        titulo: "Nada, só passa o tempo",
        subtitulo: "sem sentido",
        emoji: "❌",
        cor: "from-slate-400 to-slate-600",
        fotoUrl: imgRelogio,
      },
    ],
    respostaCerta: "id",
    feedbackAcerto:
      "Isso! Cada momento da sua vida é uma pista da SUA história. Você muda e aprende coisa nova todo dia.",
    feedbackErro:
      "Sua vida NÃO é vazia. Cada dia forma quem você é. Isso é IDENTIDADE.",
    falaFinal:
      "Guarda essa ideia: você também é uma linha do tempo em movimento.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três cadernos abertos com as GRANDES ideias do ano inteiro. Cada um resume uma parte da nossa jornada.",
    instrucao: "Leia os cadernos abertos",
    cadernos: [
      {
        id: "tempo",
        capa: "Tempo",
        emoji: "⏳",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgRelogio,
        conteudo:
          "Tempo é o que passa: ONTEM, HOJE, AMANHÃ. Ele pode ser medido em segundos, dias, anos, séculos.",
        exemplo: "O que você fez ontem já é passado.",
      },
      {
        id: "fontes",
        capa: "Fontes Históricas",
        emoji: "📜",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgArvore,
        conteudo:
          "Fontes históricas são as PISTAS que as pessoas do passado deixaram: objetos, textos e memórias faladas.",
        exemplo: "Foto antiga, certidão, vovó contando = fontes.",
      },
      {
        id: "muda",
        capa: "Mudança + Permanência",
        emoji: "🔄",
        cor: "from-rose-500 to-pink-700",
        fotoUrl: imgBairro,
        conteudo:
          "Algumas coisas MUDAM com o tempo (tecnologia, roupa, transporte). Outras PERMANECEM (brincadeiras, tradições, monumentos).",
        exemplo: "Vinil virou streaming, mas amarelinha ficou.",
      },
    ],
    falaFinal:
      "Tempo, Fontes e Mudança+Permanência — o kit completo do Pequeno Historiador Escola Brilha.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o museu final com as 6 salas que você já abriu. Toca em cada balão pra revisar cada sala.",
    instrucao: "Toque em cada balão pra ouvir a Aurora contar",
    mapaUrl: imgMuseu,
    pontos: [
      {
        id: "sala1",
        x: 15,
        y: 55,
        emoji: "⏳",
        cor: "from-amber-500 to-orange-700",
        fotoUrl: imgRelogio,
        titulo: "Sala 1 — O Tempo",
        texto:
          "A primeira sala do museu ensinou: o tempo caminha em ONTEM, HOJE e AMANHÃ. E dá pra desenhar essa caminhada numa LINHA DO TEMPO.",
      },
      {
        id: "sala234",
        x: 40,
        y: 60,
        emoji: "🏘️",
        cor: "from-emerald-500 to-teal-700",
        fotoUrl: imgArvore,
        titulo: "Salas 2, 3 e 4 — Família, Escola e Bairro",
        texto:
          "Depois investigamos a sua FAMÍLIA (árvore genealógica), a sua ESCOLA (como mudou) e o seu BAIRRO (como cresceu). Três círculos que formam a sua vida.",
      },
      {
        id: "sala56",
        x: 70,
        y: 45,
        emoji: "🏺",
        cor: "from-rose-500 to-red-700",
        fotoUrl: imgFotoAntiga,
        titulo: "Salas 5 e 6 — Objetos e Costumes",
        texto:
          "As últimas salas mostraram: as pessoas deixam FONTES (materiais, escritas, orais) e os COSTUMES mudam quando chega uma tecnologia nova.",
      },
    ],
    falaFinal:
      "Seis salas, seis engrenagens. Falta só a última pra o museu ficar completo!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar de revisão ligado! 3 perguntas que juntam TUDO do ano. Toca no card certo.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual dessas coisas é uma FONTE MATERIAL?",
        fotoUrl: imgFotoAntiga,
        cards: [
          { id: "b", emoji: "🧸", titulo: "Boneca antiga", cor: "from-amber-400 to-orange-600" },
          { id: "v", emoji: "🎙️", titulo: "Voz da vovó", cor: "from-rose-400 to-red-600" },
          { id: "c", emoji: "📜", titulo: "Carta escrita", cor: "from-emerald-400 to-teal-600" },
        ],
        correta: "b",
        feedbackAcerto: "Isso! Boneca é OBJETO = Fonte Material.",
        feedbackErro: "Fonte Material é OBJETO. Boneca é objeto.",
      },
      {
        id: "q2",
        pergunta: "O bairro cresceu quando…",
        fotoUrl: imgBairro,
        cards: [
          { id: "c", emoji: "🏗️", titulo: "Chegaram construções e asfalto", cor: "from-sky-400 to-indigo-600" },
          { id: "s", emoji: "🌑", titulo: "Todo mundo foi embora", cor: "from-slate-400 to-slate-600" },
        ],
        correta: "c",
        feedbackAcerto: "Combo! Novas construções mostram crescimento.",
        feedbackErro: "Se todo mundo vai embora, o bairro DIMINUI. Cresce com construção nova.",
      },
      {
        id: "q3",
        pergunta: "Uma PERMANÊNCIA na escola é…",
        fotoUrl: imgArvore,
        cards: [
          { id: "p", emoji: "👨‍🏫", titulo: "O professor ensinando", cor: "from-emerald-400 to-teal-600" },
          { id: "pa", emoji: "🚫", titulo: "A palmatória", cor: "from-rose-400 to-red-600" },
        ],
        correta: "p",
        feedbackAcerto: "Isso! Professor sempre existiu — e continua.",
        feedbackErro: "Palmatória é PROIBIDA hoje. O que permanece é o PROFESSOR.",
      },
    ],
    falaFinal:
      "Radar afinado! Você juntou o conteúdo do ano inteiro no mesmo lugar.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Vou te dar dois interruptores: um acende o PASSADO (tudo que já foi) e o outro o PRESENTE (o mundo de hoje). Vê como as duas épocas convivem!",
    instrucao: "Toque nos interruptores pra ver cada época",
    mapaUrl: imgMuseu,
    camadas: [
      {
        id: "passado",
        rotulo: "Passado (o que foi)",
        emoji: "⏳",
        cor: "from-amber-500 to-orange-700",
        rect: { x: 5, y: 20, w: 45, h: 60 },
        descricao:
          "Lampião, bonde de burro, carta demorada, vinil, escola severa, ferro a carvão. Um mundo mais lento, mais formal, mais junto.",
      },
      {
        id: "presente",
        rotulo: "Presente (o que é hoje)",
        emoji: "📱",
        cor: "from-sky-500 to-indigo-700",
        rect: { x: 55, y: 20, w: 40, h: 60 },
        descricao:
          "Poste elétrico, ônibus, celular, streaming, escola acolhedora, ferro elétrico. Mais rápido, mais leve, mais conectado.",
      },
    ],
    falaFinal:
      "Duas épocas iluminadas. O presente carrega o passado — e você é a ponte entre os dois.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Última linha do tempo! Vamos organizar as 6 salas do museu na ORDEM em que foram descobertas.",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Em que ordem as salas do museu foram abertas?",
    paradas: [
      {
        id: "tempo",
        emoji: "⏳",
        rotulo: "Sala 1 — Tempo",
        fotoUrl: imgRelogio,
        descricao: "Primeiro: entender ONTEM, HOJE, AMANHÃ e a linha do tempo.",
      },
      {
        id: "familia",
        emoji: "👨‍👩‍👧",
        rotulo: "Sala 2 — Família",
        fotoUrl: imgArvore,
        descricao: "Depois: árvore genealógica e história da família.",
      },
      {
        id: "escola",
        emoji: "🏫",
        rotulo: "Sala 3 — Escola",
        fotoUrl: imgFotoAntiga,
        descricao: "Terceira: como a escola mudou no tempo.",
      },
      {
        id: "bairro",
        emoji: "🏘️",
        rotulo: "Sala 4 — Bairro",
        fotoUrl: imgBairro,
        descricao: "Quarta: memórias e transformações do bairro.",
      },
    ],
    ordemCerta: ["tempo", "familia", "escola", "bairro"],
    feedbackAcerto:
      "Linha completa! Da sua noção de tempo, você foi ampliando pra família, escola e bairro.",
    feedbackErro: "Essa não é a próxima. Pensa: começamos do MAIS PERTO ou do MAIS LONGE de você?",
    falaFinal:
      "Museu organizado! Tempo → Família → Escola → Bairro → Objetos → Costumes. Bela viagem!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Agora é sua vez. Eu fico calada. Você lê o Diário Final com seus próprios olhos.",
    tituloLivro: "📔 Diário Final do Pequeno Historiador",
    subtitulo: "Página 7 — O que aprendemos este ano",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Nesta jornada, descobrimos que o TEMPO pode ser medido e organizado. Ontem, Hoje e Amanhã caminham em uma LINHA DO TEMPO que a gente pode desenhar.",
        chaves: ["tempo", "medido", "linha"],
        definicoes: {
          tempo: "O que passa: minutos, dias, anos, séculos.",
          medido: "Contado com números ou horas pra saber quanto durou.",
          linha: "Desenho reto que mostra o que veio antes e o que vem depois.",
        },
        fotoUrl: imgRelogio,
      },
      {
        id: "p2",
        texto:
          "Aprendemos que documentos e objetos antigos são FONTES HISTÓRICAS preciosas. Elas guardam as memórias da nossa família, da nossa escola e do nosso bairro.",
        chaves: ["documentos", "fontes", "memórias"],
        definicoes: {
          documentos: "Papéis oficiais escritos que provam algo do passado.",
          fontes: "Pistas que ajudam o historiador a descobrir a história.",
          memórias: "Tudo que a gente guarda pra não esquecer.",
        },
        fotoUrl: imgArvore,
      },
      {
        id: "p3",
        texto:
          "Compreendemos que os COSTUMES mudam com as novas tecnologias — mas as PERMANÊNCIAS (brincadeiras tradicionais, monumentos, tradições) mantêm viva a nossa cultura.",
        chaves: ["costumes", "tecnologias", "permanências"],
        definicoes: {
          costumes: "Jeitos de fazer as coisas que a maioria segue.",
          tecnologias: "Invenções novas que mudam o dia a dia.",
          permanências: "Coisas que RESISTEM ao tempo e continuam existindo.",
        },
        fotoUrl: imgBairro,
      },
      {
        id: "p4",
        texto:
          "A partir de hoje, você tem OLHOS DE HISTORIADOR. Continue observando os objetos antigos, ouvindo os idosos e respeitando a memória dos lugares por onde passar.",
        chaves: ["historiador", "idosos", "memória"],
        definicoes: {
          historiador: "Pessoa que investiga e explica o que aconteceu antes.",
          idosos: "Pessoas mais velhas, cheias de histórias e sabedoria.",
          memória: "Tudo que ficou guardado do passado.",
        },
        fotoUrl: imgMuseu,
      },
    ],
    falaFinal:
      "Leitura final concluída! Parabéns, Pequeno Historiador — você agora enxerga o mundo com olhos de pesquisador.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "A Ativação do Relógio! Cada rodada mostra uma sala. Você toca em qual TIPO de coisa ela investigou. Última missão do ano!",
    instrucao: "⏱️ Leia a sala e toque no tipo antes do tempo acabar!",
    duracaoSegundos: 15,
    pecas: [
      { id: "pessoas", emoji: "👨‍👩‍👧", rotulo: "Investigou PESSOAS" },
      { id: "lugares", emoji: "🏘️", rotulo: "Investigou LUGARES" },
      { id: "coisas", emoji: "🏺", rotulo: "Investigou COISAS" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Árvore genealógica", emoji: "🌳", cor: "from-emerald-500 to-teal-700" },
        municipioB: { nome: "Vovó, mãe e você", emoji: "👵", cor: "from-green-600 to-emerald-800" },
        contexto: "A Sala 2 investigou raízes, tronco e galhos da família. Que tipo de coisa?",
        pecaCertaId: "pessoas",
        fotoUrl: imgArvore,
        feedbackAcerto: "Combo! Sala da família investigou PESSOAS.",
        feedbackErro: "Família é gente. É PESSOAS.",
      },
      {
        id: "r2",
        municipioA: { nome: "Ruas asfaltadas do bairro", emoji: "🏙️", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Praça e coreto antigo", emoji: "⛲", cor: "from-cyan-500 to-blue-700" },
        contexto: "A Sala 4 investigou como o bairro cresceu. Que tipo de coisa?",
        pecaCertaId: "lugares",
        fotoUrl: imgBairro,
        feedbackAcerto: "Isso! Bairro é LUGAR.",
        feedbackErro: "Bairro é espaço geográfico. É LUGARES.",
      },
      {
        id: "r3",
        municipioA: { nome: "Ferro de passar a carvão", emoji: "🔥", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Máquina de escrever antiga", emoji: "⚙️", cor: "from-yellow-600 to-amber-800" },
        contexto: "A Sala 5 investigou objetos antigos do museu. Que tipo de coisa?",
        pecaCertaId: "coisas",
        fotoUrl: imgFotoAntiga,
        feedbackAcerto: "Certeza! Objetos = COISAS.",
        feedbackErro: "Ferro e máquina são objetos físicos. É COISAS.",
      },
      {
        id: "r4",
        municipioA: { nome: "Sala de aula da escola", emoji: "🏫", cor: "from-sky-500 to-indigo-700" },
        municipioB: { nome: "Pátio antigo e novo", emoji: "🌳", cor: "from-cyan-500 to-blue-700" },
        contexto: "A Sala 3 investigou como o espaço da escola mudou. Que tipo de coisa?",
        pecaCertaId: "lugares",
        fotoUrl: imgFotoAntiga,
        feedbackAcerto: "Combo! Escola é LUGAR.",
        feedbackErro: "Escola é espaço físico. É LUGARES.",
      },
    ],
    falaFinal:
      "🎉 Relógio do Tempo ATIVADO! As sete engrenagens giram em harmonia. Você conseguiu!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Vamos olhar tudo que a gente investigou este ano em duas fatias: o que MUDOU com o tempo e o que PERMANECEU pra sempre.",
    instrucao: "🍕 Toque nas fatias pra ouvir sobre cada parte",
    fotoUrl: imgMuseu,
    fatias: [
      {
        id: "mudou",
        rotulo: "O que MUDOU no tempo",
        emoji: "🔄",
        percentual: 50,
        cor: "#f59e0b",
        descricao: "Tecnologia, transporte, comunicação, roupa, escola, bairro — tudo isso se transformou com o passar dos anos.",
        exemplos: ["Lampião → poste elétrico", "Carta → mensagem", "Palmatória → carinho"],
        fotoUrl: imgBairro,
      },
      {
        id: "ficou",
        rotulo: "O que PERMANECEU no tempo",
        emoji: "💫",
        percentual: 50,
        cor: "#ec4899",
        descricao: "Família, escola, amizade, brincadeiras tradicionais, monumentos e a importância de aprender juntos.",
        exemplos: ["Família junto", "Amarelinha", "Monumento antigo"],
        fotoUrl: imgArvore,
      },
    ],
    falaFinal:
      "Duas fatias, um ano inteiro. Mudança e Permanência juntas fazem a HISTÓRIA.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "A ÚLTIMA missão do ano! 3 perguntas de certificação. Se acertar, você ganha a Sétima Engrenagem e o título de MESTRE DOS SEGREDOS DO TEMPO!",
    instrucao: "Responda 3 perguntas rápidas pra ganhar o selo final",
    fotoUrl: imgRelogio,
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual é o principal objetivo de estudar História?",
        fotoUrl: imgMuseu,
        opcoes: [
          { id: "a", texto: "Entender como as pessoas viviam antes pra saber quem somos hoje e construir um futuro melhor", correta: true },
          { id: "b", texto: "Só decorar datas e nomes antigos pra passar na prova" },
        ],
        feedbackAcerto: "Espetacular! A história nos dá superpoderes pra entender o presente e transformar o mundo.",
        feedbackErro: "História não é DECORAR. É ENTENDER quem somos hoje.",
      },
      {
        id: "q2",
        pergunta: "O que são fontes históricas?",
        fotoUrl: imgArvore,
        opcoes: [
          { id: "a", texto: "Objetos, textos e memórias que as pessoas do passado deixaram", correta: true },
          { id: "b", texto: "Só as coisas que aparecem na TV" },
        ],
        feedbackAcerto: "Isso! Materiais, escritas e orais — todas contam a história.",
        feedbackErro: "TV é do presente. Fontes históricas são PISTAS do passado.",
      },
      {
        id: "q3",
        pergunta: "Ao olhar a linha do tempo da sua vida, você vê…",
        fotoUrl: imgLinhaVida,
        opcoes: [
          { id: "a", texto: "A sua identidade — quem você é e como você foi mudando", correta: true },
          { id: "b", texto: "Nada de importante" },
        ],
        feedbackAcerto: "Combo final! Sua vida é uma história — e você é o autor dela.",
        feedbackErro: "Cada momento seu importa. A linha da sua vida MOSTRA sua identidade.",
      },
    ],
    selo: {
      nome: "🏆 Sétima Engrenagem Mágica",
      subtitulo: "MESTRE DOS SEGREDOS DO TEMPO — Grande Historiador Escola Brilha",
      emoji: "⏳",
      cor: "from-yellow-300 via-amber-400 to-orange-600",
      fotoUrl: imgRelogio,
    },
    falaFinal:
      "🎉 PARABÉNS! Relógio do Tempo COMPLETO! Museu Digital INAUGURADO! Você agora é Mestre dos Segredos do Tempo. Que ano incrível!",
  },

  recompensa: { xp: 500, moedas: 250, medalha: "Mestre dos Segredos do Tempo" },
};
