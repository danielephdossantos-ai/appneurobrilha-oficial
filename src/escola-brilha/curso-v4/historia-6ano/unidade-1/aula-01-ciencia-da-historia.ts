import type { AulaGeoV1 } from "../../types";
import imgMesa from "@/assets/historia-6ano/mesa-arqueologo.jpg";
import imgMoeda from "@/assets/historia-6ano/moeda-julio-cesar.jpg";
import imgDiario from "@/assets/historia-6ano/diario-soldado.jpg";
import imgRupestre from "@/assets/historia-6ano/pintura-rupestre.jpg";
import imgIndig from "@/assets/historia-6ano/lider-indigena.jpg";
import imgFontes from "@/assets/historia-6ano/infografico-fontes.jpg";

/**
 * História · 6º Ano (PILOTO Teen) · Unidade 1 · Aula 01
 * "A Ciência da História e os Ofícios do Historiador"
 * Restaura o Fragmento 1 do Códice: O Selo do Cronista Crítico.
 * Skin: PlayerGeoV1 em modo "teen" — HUD acadêmico, fotografia real,
 * infográfico PT-BR. Linguagem calibrada 11 anos: crítica, investigativa.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-ciencia-da-historia",
  titulo: "A Ciência da História e o Ofício do Historiador",
  iconeTrilha: "🔍",
  bncc: ["EF06HI01", "EF06HI02"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgMesa,
    imagemDestaqueUrl: imgFontes,
    aurora:
      "Diário de trincheira de 1917. Moeda romana do século I. Foto de satélite de um sítio arqueológico. Três VESTÍGIOS de épocas totalmente diferentes numa mesma mesa. História não é decorar data — é INVESTIGAR pistas como um detetive. E o detetive precisa desconfiar da fonte antes de acreditar.",
    falaFinal:
      "Nesta aula você desbloqueia o Fragmento 1 do Códice: O Selo do Cronista Crítico.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Cenário real: dois jornais da MESMA cidade, MESMO dia, narram um mesmo protesto — um diz 'baderneiros', o outro diz 'manifestantes pacíficos'. Como um historiador chega perto da verdade?",
    pergunta: "O que um historiador faz?",
    fotoUrl: imgDiario,
    opcoes: [
      {
        id: "cruzar",
        titulo: "CRUZA as fontes",
        subtitulo: "compara múltiplos jornais, imagens, depoimentos",
        emoji: "🔀",
        cor: "from-teal-800 to-slate-950",
      },
      {
        id: "escolher",
        titulo: "ESCOLHE a que soa melhor",
        subtitulo: "confia no jornal favorito e pronto",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "cruzar",
    feedbackAcerto:
      "Correto. CRUZAMENTO DE FONTES é o método base da ciência histórica. O historiador considera QUEM escreveu, POR QUÊ escreveu e busca fontes independentes pra confirmar.",
    feedbackErro:
      "Não. Confiar numa única fonte é como acreditar em UM ÚNICO comentário de rede social. O método correto é CRUZAR fontes: comparar múltiplas versões, checar interesses de quem produziu, buscar evidência independente.",
    falaFinal:
      "Guarde: verdade histórica se constrói com CRUZAMENTO — nunca com fonte única.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave do ofício do historiador. Cada card com definição técnica, exemplo real e curiosidade crítica.",
    instrucao: "",
    cadernos: [
      {
        id: "fonte",
        capa: "Fonte Histórica",
        emoji: "📜",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgDiario,
        conteudo:
          "FONTE HISTÓRICA é todo vestígio deixado pelo passado que o historiador pode analisar. Sem fonte, não existe ciência histórica — só suposição.",
        exemplo:
          "Exemplo: diários de guerra, moedas, fotos, prédios, esqueletos, músicas, tweets. Um post do Instagram HOJE será fonte primária pro historiador de 2100.",
      },
      {
        id: "material",
        capa: "Fonte Material",
        emoji: "⚱️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgMoeda,
        conteudo:
          "FONTES MATERIAIS são objetos físicos: moedas, ferramentas, construções, ossos, cerâmica. Não mentem sobre o que são — mas exigem interpretação pra contar o CONTEXTO.",
        exemplo:
          "Exemplo: uma moeda romana com rosto de Júlio César não era só dinheiro — era PROPAGANDA POLÍTICA. Servia pra espalhar a imagem do imperador nos cantos mais remotos do império.",
      },
      {
        id: "imaterial",
        capa: "Fonte Imaterial",
        emoji: "🎙️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgIndig,
        conteudo:
          "FONTES IMATERIAIS são conhecimentos passados pela ORALIDADE, gestos, receitas, danças, tradições. Não são escritas — vivem na memória e nos corpos de comunidades.",
        exemplo:
          "Exemplo: o samba, a capoeira, os rituais indígenas, as histórias contadas por avós. A UNESCO reconhece Patrimônio Cultural Imaterial da Humanidade desde 2003.",
      },
      {
        id: "cronologia",
        capa: "Cronologia",
        emoji: "⏳",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgFontes,
        conteudo:
          "CRONOLOGIA é a organização dos eventos NO TEMPO. Diferentes culturas contam o tempo de formas diferentes — o calendário ocidental (a.C./d.C.) é UM entre vários.",
        exemplo:
          "Exemplo: pro cristianismo estamos em 2026. Pro calendário islâmico é 1447. Pro judaico, 5786. Pro chinês, 4723. Ninguém está 'errado' — são sistemas cronológicos diferentes.",
      },
    ],
    falaFinal:
      "Fonte + Material + Imaterial + Cronologia. Base do vocabulário técnico do 6º ano.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o INFOGRÁFICO oficial dos quatro tipos de fontes históricas. Toque em cada quadrante pra ver definição, exemplo e como o historiador usa.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgFontes,
    pontos: [
      {
        id: "mat",
        x: 25,
        y: 32,
        emoji: "⚱️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgMoeda,
        titulo: "1. MATERIAIS",
        texto:
          "Objetos físicos deixados pelo passado: moedas, ossos, ferramentas, ruínas. É o campo da ARQUEOLOGIA. Vantagem: não mentem sobre existirem. Limite: não falam sozinhas — precisam ser interpretadas.",
      },
      {
        id: "esc",
        x: 75,
        y: 32,
        emoji: "📜",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgDiario,
        titulo: "2. ESCRITAS",
        texto:
          "Cartas, diários, jornais, leis, livros. Trazem MUITA informação, mas carregam a VISÃO de quem escreveu. Analisar quem escreveu e por quê é essencial.",
      },
      {
        id: "ora",
        x: 25,
        y: 72,
        emoji: "🎙️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgIndig,
        titulo: "3. ORAIS",
        texto:
          "Depoimentos, entrevistas, tradições faladas, lendas. Guardam a memória de povos sem escrita e de grupos silenciados pelos documentos oficiais.",
      },
      {
        id: "av",
        x: 75,
        y: 72,
        emoji: "🎞️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgRupestre,
        titulo: "4. ÁUDIO/VISUAL",
        texto:
          "Pinturas rupestres, fotos, filmes, músicas, vídeos. Imagens contam sem palavras — e podem ser manipuladas (edição, deepfake). Exigem análise técnica.",
      },
    ],
    falaFinal:
      "Quatro tipos. O bom historiador NÃO usa um só — cruza os quatro pra chegar perto da verdade.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de investigador. Vale ler antes de tocar.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta:
          "Você achou uma moeda romana de bronze do século I com o rosto de Júlio César. Qual TIPO de fonte histórica é essa?",
        fotoUrl: imgMoeda,
        cards: [
          { id: "m", emoji: "⚱️", titulo: "Material", cor: "from-teal-600 to-slate-900" },
          { id: "o", emoji: "🎙️", titulo: "Oral", cor: "from-cyan-600 to-slate-900" },
          { id: "d", emoji: "❓", titulo: "Digital", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "m",
        feedbackAcerto:
          "Correto. Moeda é OBJETO FÍSICO = fonte MATERIAL. Além de dinheiro, era propaganda política do imperador.",
        feedbackErro:
          "Moeda é OBJETO FÍSICO — fonte MATERIAL. Oral seria depoimento falado. Digital só existe faz umas 5 décadas.",
      },
      {
        id: "q2",
        pergunta:
          "Uma anciã indígena grava um vídeo contando a história do seu povo passada de geração em geração há 400 anos. Qual TIPO de fonte é essa (na sua origem)?",
        fotoUrl: imgIndig,
        cards: [
          { id: "o", emoji: "🎙️", titulo: "Oral", cor: "from-cyan-600 to-slate-900" },
          { id: "e", emoji: "📜", titulo: "Escrita", cor: "from-amber-600 to-slate-900" },
          { id: "m", emoji: "⚱️", titulo: "Material", cor: "from-teal-600 to-slate-900" },
        ],
        correta: "o",
        feedbackAcerto:
          "Correto. A tradição vivia na ORALIDADE. O vídeo é só o registro moderno — a fonte original é ORAL.",
        feedbackErro:
          "A informação vive na FALA passada de boca em boca por gerações. É fonte ORAL. O vídeo é só um suporte técnico.",
      },
      {
        id: "q3",
        pergunta:
          "Se dois jornais descrevem o mesmo evento de formas opostas, qual é o método CORRETO do historiador?",
        fotoUrl: imgDiario,
        cards: [
          {
            id: "c",
            emoji: "🔀",
            titulo: "Cruzar as fontes",
            cor: "from-teal-600 to-slate-900",
          },
          {
            id: "u",
            emoji: "1️⃣",
            titulo: "Escolher uma só",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "i",
            emoji: "🚫",
            titulo: "Ignorar as duas",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "c",
        feedbackAcerto:
          "Correto. CRUZAMENTO DE FONTES: compara, analisa interesses, busca fontes independentes.",
        feedbackErro:
          "Escolher uma só = viés. Ignorar = perde informação. O correto é CRUZAR e comparar.",
      },
    ],
    falaFinal:
      "Radar afiado. Você já pensa como historiador crítico.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros críticos em cima do MESMO infográfico. Um destaca fontes com MUITA presença nos livros didáticos; outro destaca as HISTORICAMENTE SILENCIADAS.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFontes,
    camadas: [
      {
        id: "dom",
        rotulo: "Fontes hegemônicas",
        emoji: "📚",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 50, y: 5, w: 50, h: 45 },
        descricao:
          "ESCRITAS e OFICIAIS: leis, jornais de grande circulação, cartas de reis, atas de governo. Foram por séculos as MAIS estudadas — porque foram produzidas pelos poderosos que sabiam escrever.",
      },
      {
        id: "sil",
        rotulo: "Fontes silenciadas",
        emoji: "🔇",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 0, y: 50, w: 100, h: 50 },
        descricao:
          "ORAIS e MATERIAIS COTIDIANAS: memória indígena, tradição afro-brasileira, música popular, objetos de povos sem escrita. Ficaram DE FORA dos livros por séculos — a nova história recupera essas vozes.",
      },
    ],
    falaFinal:
      "Quem controla a fonte, conta a história. Historiador crítico ESCUTA os silêncios também.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Você achou uma moeda estranha no quintal. Ordene os PASSOS do método científico do historiador.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Método do historiador",
    paradas: [
      {
        id: "achar",
        emoji: "🔎",
        rotulo: "1. Localizar a fonte",
        fotoUrl: imgMoeda,
        descricao: "Registrar onde, quando e como o objeto foi encontrado.",
      },
      {
        id: "classificar",
        emoji: "🗂️",
        rotulo: "2. Classificar",
        fotoUrl: imgFontes,
        descricao: "Que tipo é? Material, escrita, oral, audiovisual? De que época?",
      },
      {
        id: "cruzar",
        emoji: "🔀",
        rotulo: "3. Cruzar com outras fontes",
        fotoUrl: imgDiario,
        descricao: "Comparar com outras evidências pra checar contexto e autenticidade.",
      },
      {
        id: "interpretar",
        emoji: "🧠",
        rotulo: "4. Interpretar e publicar",
        fotoUrl: imgIndig,
        descricao: "Escrever a análise, apontar limites e liberar pra crítica de outros pesquisadores.",
      },
    ],
    ordemCerta: ["achar", "classificar", "cruzar", "interpretar"],
    feedbackAcerto:
      "Perfeito. Localizar → Classificar → Cruzar → Interpretar. Método científico aplicado ao passado.",
    feedbackErro:
      "Essa não é a próxima etapa. Pense: você acha, você identifica, você compara, você conclui.",
    falaFinal:
      "Você acabou de descrever o MÉTODO CIENTÍFICO da história.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Fragmento 1 do Códice dos Impérios Perdidos. Toque nas palavras técnicas destacadas pra ver a definição.",
    tituloLivro: "📜 Códice dos Impérios Perdidos",
    subtitulo: "Fragmento 1 — O Selo do Cronista Crítico",
    paragrafos: [
      {
        id: "p1",
        texto:
          "HISTÓRIA é a ciência humana que estuda as AÇÕES das pessoas e sociedades ao longo do tempo. Ela não trabalha com achismo: usa evidências chamadas FONTES HISTÓRICAS. Sem fonte, não existe história científica — só especulação e mito.",
        chaves: ["Fontes Históricas"],
        definicoes: {
          "Fontes Históricas":
            "Todos os vestígios deixados pelo passado que o historiador analisa: objetos, documentos, imagens, depoimentos, prédios, músicas.",
        },
        fotoUrl: imgMesa,
      },
      {
        id: "p2",
        texto:
          "Existem quatro grandes tipos de fontes: MATERIAIS (moedas, ossos, ruínas), ESCRITAS (leis, cartas, jornais), ORAIS (depoimentos, tradições faladas) e ÁUDIO/VISUAIS (fotos, filmes, gravações). Cada tipo tem forças e limites.",
        chaves: ["Materiais", "Orais"],
        definicoes: {
          Materiais:
            "Objetos físicos deixados pelo passado — campo da arqueologia. Ex: moedas, ferramentas, esqueletos, construções.",
          Orais:
            "Informações passadas pela fala: depoimentos, entrevistas, tradições contadas de geração em geração. Fundamentais para povos sem escrita.",
        },
        fotoUrl: imgFontes,
      },
      {
        id: "p3",
        texto:
          "Toda fonte carrega a VISÃO de quem a produziu. Por isso o método científico exige CRUZAMENTO DE FONTES: comparar várias, verificar QUEM produziu e POR QUÊ, buscar evidência independente. Confiar em fonte única é como acreditar em fake news.",
        chaves: ["Cruzamento de Fontes"],
        definicoes: {
          "Cruzamento de Fontes":
            "Método científico de comparar múltiplas fontes independentes para verificar autenticidade e contexto de um fato histórico.",
        },
        fotoUrl: imgDiario,
      },
      {
        id: "p4",
        texto:
          "Diferentes culturas organizam o tempo de formas diferentes — o calendário cristão (a.C./d.C.) é apenas UM sistema entre vários. CRONOLOGIA é o eixo que permite o historiador entender causas e consequências ao longo dos séculos.",
        chaves: ["Cronologia"],
        definicoes: {
          Cronologia:
            "Organização dos eventos no tempo. Existem cronologias cristã, islâmica, judaica, chinesa. Nenhuma é 'a verdadeira' — são sistemas culturais diferentes.",
        },
        fotoUrl: imgFontes,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já defende, com vocabulário técnico, por que HISTÓRIA é ciência — e não fábula.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de arquivista. Cada rodada mostra um vestígio. Classifique RÁPIDO em qual tipo de fonte histórica ele é.",
    instrucao: "⏱️ Toque no tipo correto antes do tempo acabar",
    duracaoSegundos: 22,
    pecas: [
      { id: "m", emoji: "⚱️", rotulo: "Material" },
      { id: "e", emoji: "📜", rotulo: "Escrita" },
      { id: "o", emoji: "🎙️", rotulo: "Oral" },
      { id: "a", emoji: "🎞️", rotulo: "Áudio/Visual" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "Esqueleto de hominídeo em sítio arqueológico",
          emoji: "🦴",
          cor: "from-teal-700 to-slate-900",
        },
        municipioB: { nome: "Fóssil físico", emoji: "⚱️", cor: "from-teal-600 to-slate-900" },
        contexto: "Osso encontrado numa escavação de 30 mil anos.",
        pecaCertaId: "m",
        feedbackAcerto: "Correto. Osso = objeto físico = fonte MATERIAL.",
        feedbackErro: "Esqueleto é objeto físico. Fonte MATERIAL (arqueologia).",
      },
      {
        id: "r2",
        municipioA: {
          nome: "Carta de amor de uma princesa em 1800",
          emoji: "💌",
          cor: "from-amber-700 to-slate-900",
        },
        municipioB: { nome: "Documento textual", emoji: "📜", cor: "from-amber-600 to-slate-900" },
        contexto: "Manuscrito em papel arquivado em museu.",
        pecaCertaId: "e",
        feedbackAcerto: "Correto. Texto escrito à mão = fonte ESCRITA.",
        feedbackErro: "É texto no papel = fonte ESCRITA.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "Música de protesto em vinil (1970)",
          emoji: "💿",
          cor: "from-slate-700 to-slate-900",
        },
        municipioB: { nome: "Áudio gravado", emoji: "🎵", cor: "from-slate-600 to-slate-900" },
        contexto: "Faixa musical gravada em disco.",
        pecaCertaId: "a",
        feedbackAcerto: "Correto. Música gravada = fonte ÁUDIO/VISUAL.",
        feedbackErro: "Áudio gravado = fonte ÁUDIO/VISUAL.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "Lenda contada pelos anciãos de uma tribo",
          emoji: "🗣️",
          cor: "from-cyan-700 to-slate-900",
        },
        municipioB: { nome: "Tradição falada", emoji: "🎙️", cor: "from-cyan-600 to-slate-900" },
        contexto: "História passada de boca em boca há séculos.",
        pecaCertaId: "o",
        feedbackAcerto: "Correto. Tradição falada = fonte ORAL.",
        feedbackErro: "Falada, sem escrita = fonte ORAL.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "Moeda romana com rosto do imperador",
          emoji: "🪙",
          cor: "from-teal-700 to-slate-900",
        },
        municipioB: { nome: "Objeto metálico", emoji: "⚙️", cor: "from-teal-600 to-slate-900" },
        contexto: "Moeda de bronze do século I.",
        pecaCertaId: "m",
        feedbackAcerto: "Correto. Objeto físico = MATERIAL. Também era propaganda política.",
        feedbackErro: "Moeda = objeto físico = fonte MATERIAL.",
      },
      {
        id: "r6",
        municipioA: {
          nome: "Manchete de jornal de 1917 sobre a Grande Guerra",
          emoji: "📰",
          cor: "from-amber-700 to-slate-900",
        },
        municipioB: { nome: "Texto impresso", emoji: "🗞️", cor: "from-amber-600 to-slate-900" },
        contexto: "Página de jornal amarelada.",
        pecaCertaId: "e",
        feedbackAcerto: "Correto. Jornal impresso = fonte ESCRITA.",
        feedbackErro: "Jornal = texto = fonte ESCRITA (e cuidado: reflete o interesse do jornal).",
      },
    ],
    falaFinal:
      "6 rodadas! Você já classifica fontes históricas como um arquivista de museu.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da produção de fontes: proporção histórica entre fontes ESCRITAS (dominantes por séculos) e OUTRAS fontes (materiais + orais + áudio/visual) usadas por historiadores.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgFontes,
    fatias: [
      {
        id: "esc",
        rotulo: "Fontes escritas (~40%)",
        emoji: "📜",
        percentual: 40,
        cor: "#b45309",
        descricao:
          "Dominaram os estudos históricos por séculos, porque governos e igrejas produziam MUITO documento. Vantagem: informação detalhada. Limite: só quem sabia escrever aparece.",
        exemplos: ["📰 Jornais", "📜 Leis", "✉️ Cartas"],
      },
      {
        id: "outras",
        rotulo: "Outras fontes (~60%)",
        emoji: "🔀",
        percentual: 60,
        cor: "#0f766e",
        descricao:
          "MATERIAIS + ORAIS + ÁUDIO/VISUAL. Cresceram na história recente. Recuperam povos e grupos silenciados pelo texto oficial: indígenas, africanos, mulheres, trabalhadores.",
        exemplos: ["⚱️ Arqueologia", "🎙️ Memória oral", "🎞️ Fotografia"],
      },
    ],
    falaFinal:
      "A HISTÓRIA hoje é mais completa porque combina os quatro tipos de fonte.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Selo do Cronista Crítico e restaurar o Fragmento 1 do Códice.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgMesa,
    perguntas: [
      {
        id: "av1",
        pergunta:
          "Como chamamos o conjunto de vestígios do passado (textos, objetos, imagens, relatos) que os historiadores usam pra reconstruir o que aconteceu?",
        opcoes: [
          { id: "a", texto: "Fake news do passado.", correta: false },
          { id: "b", texto: "Fontes históricas.", correta: true },
          { id: "c", texto: "Suposições mitológicas.", correta: false },
        ],
        feedbackAcerto:
          "Correto. FONTES HISTÓRICAS — sem elas, não existe ciência histórica.",
        feedbackErro:
          "É FONTES HISTÓRICAS. É o material bruto da ciência histórica.",
      },
      {
        id: "av2",
        pergunta:
          "Uma moeda romana de bronze com o rosto de Júlio César é qual tipo de fonte histórica?",
        opcoes: [
          { id: "a", texto: "Fonte oral.", correta: false },
          { id: "b", texto: "Fonte material.", correta: true },
          { id: "c", texto: "Fonte digital.", correta: false },
        ],
        feedbackAcerto:
          "Correto. Objeto físico = MATERIAL. Também servia como propaganda política.",
        feedbackErro:
          "Objeto físico = fonte MATERIAL. Fonte oral seria depoimento falado.",
      },
      {
        id: "av3",
        pergunta:
          "Dois jornais da mesma época narram o mesmo evento de formas opostas. Qual método CIENTÍFICO o historiador deve aplicar?",
        opcoes: [
          { id: "a", texto: "Cruzar as duas fontes e buscar mais evidências.", correta: true },
          { id: "b", texto: "Escolher a que soa mais bonita.", correta: false },
          { id: "c", texto: "Ignorar completamente as duas.", correta: false },
        ],
        feedbackAcerto:
          "Correto. CRUZAMENTO DE FONTES é o método científico.",
        feedbackErro:
          "É CRUZAMENTO DE FONTES — comparar múltiplas, analisar interesses, buscar independência.",
      },
    ],
    selo: {
      nome: "Selo do Cronista Crítico",
      subtitulo: "Fragmento 1 do Códice dos Impérios Perdidos",
      emoji: "🔍",
      cor: "from-teal-500 to-slate-900",
      fotoUrl: imgMesa,
    },
    falaFinal:
      "Selo conquistado. Fragmento 1 restaurado. Você agora domina o MÉTODO. Nas próximas unidades, você vai APLICAR esse método pra decifrar impérios perdidos.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Selo do Cronista Crítico" },
};
