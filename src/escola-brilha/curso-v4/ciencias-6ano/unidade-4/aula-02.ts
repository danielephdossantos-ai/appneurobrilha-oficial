import type { AulaGeoV1 } from "../../types";
import { url as bancadaImg } from "@/assets/ciencias-6ano/u4-a1/bancada-quimica.jpg.asset.json";
import { url as estadosImg } from "@/assets/ciencias-6ano/u4-a1/estados-materia.jpg.asset.json";
import { url as ferrugemImg } from "@/assets/ciencias-6ano/u4-a1/ferrugem.jpg.asset.json";
import { url as moleculasImg } from "@/assets/ciencias-6ano/u4-a1/moleculas-agua.jpg.asset.json";
import geloVideo from "@/assets/ciencias-6ano/u4-a1/gelo-derretendo.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 4 · Aula 02
 * "Separando Misturas" — Métodos de separação de misturas heterogêneas (EF06CI03).
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-separando-misturas",
  titulo: "Separando Misturas",
  iconeTrilha: "🧫",
  recompensa: { xp: 120, moedas: 45, medalha: "Separador Júnior" },
  bncc: ["EF06CI03"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de química oficial. Observe as misturas.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: estadosImg,
    aurora:
      "Programa 4. Quase nada na natureza é substância pura. Água do mar tem sal, petróleo tem várias substâncias misturadas. Hoje aprendemos como SEPARAR o que está junto — do sal de cozinha ao petróleo bruto.",
    falaFinal: "Separar misturas é uma das técnicas mais úteis da química industrial.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Situação: você tem água do mar e precisa obter sal puro, sem usar nenhum produto químico.",
    pergunta: "Qual método funciona para separar o sal da água?",
    fotoUrl: estadosImg,
    opcoes: [
      { id: "evaporacao", titulo: "Evaporar a água ao sol", subtitulo: "sal fica no fundo", emoji: "☀️", cor: "from-amber-500 to-orange-700", fotoUrl: estadosImg },
      { id: "filtro", titulo: "Passar num filtro de papel", subtitulo: "sal fica retido", emoji: "🧻", cor: "from-slate-500 to-slate-800", fotoUrl: bancadaImg },
      { id: "ima", titulo: "Usar um imã", subtitulo: "sal é atraído", emoji: "🧲", cor: "from-red-500 to-rose-700", fotoUrl: ferrugemImg },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "evaporacao",
    feedbackAcerto: "Correto. O sal está DISSOLVIDO na água (mistura homogênea) — filtro não retém partículas dissolvidas. Evaporando a água, o sal sólido fica no fundo.",
    feedbackErro: "Sal dissolvido passa por qualquer filtro de papel e não é atraído por imã (não é metal). O jeito é EVAPORAR a água — o sal fica no fundo, sólido.",
    falaFinal: "Cada método de separação combina com um tipo de mistura. Escolher o método certo depende de conhecer a mistura.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco métodos de separação. Um vem com vídeo real de mudança de estado.",
    instrucao: "Vocabulário da separação",
    cadernos: [
      { id: "filtracao", capa: "FILTRAÇÃO", emoji: "🧻", cor: "from-sky-500 to-cyan-700", conteudo: "Separa sólido de líquido usando um filtro (papel, pano ou tela) com furos pequenos. O líquido passa, o sólido fica retido.", exemplo: "Ex.: filtro de café, coador de arroz.", fotoUrl: bancadaImg },
      { id: "decantacao", capa: "DECANTAÇÃO", emoji: "🫗", cor: "from-indigo-500 to-purple-700", conteudo: "Separa sólido pesado de líquido por GRAVIDADE: o sólido deposita no fundo, e o líquido é retirado por cima com cuidado.", exemplo: "Ex.: areia que se deposita no fundo de um copo de água barrenta.", fotoUrl: estadosImg },
      { id: "evaporacao", capa: "EVAPORAÇÃO", emoji: "☀️", cor: "from-amber-500 to-orange-700", conteudo: "Separa sólido dissolvido de líquido aquecendo até o líquido virar vapor e sobrar só o sólido. Veja no vídeo a mudança de estado em ação.", exemplo: "Ex.: obter sal de cozinha a partir da água do mar.", videoUrl: geloVideo.url },
      { id: "destilacao", capa: "DESTILAÇÃO", emoji: "🌡️", cor: "from-emerald-500 to-teal-700", conteudo: "Separa líquidos ou substâncias com pontos de ebulição DIFERENTES, aquecendo, evaporando e depois condensando cada uma em temperaturas distintas.", exemplo: "Ex.: refino do petróleo em torres de destilação.", fotoUrl: bancadaImg },
      { id: "peneiracao", capa: "PENEIRAÇÃO", emoji: "🕸️", cor: "from-rose-500 to-pink-700", conteudo: "Separa sólidos de tamanhos DIFERENTES passando por uma peneira com furos calibrados. Só sólidos pequenos atravessam.", exemplo: "Ex.: separar pedrinhas de areia fina na construção civil.", fotoUrl: ferrugemImg },
    ],
    falaFinal: "Filtração, decantação, evaporação, destilação, peneiração. Cinco técnicas que resolvem quase todo problema de mistura.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Torre de destilação do petróleo, versão bancada. Toque em cada parte.",
    instrucao: "Toque em cada etapa",
    mapaUrl: bancadaImg,
    pontos: [
      { id: "petroleo", x: 20, y: 70, emoji: "🛢️", cor: "from-slate-600 to-slate-900", titulo: "Petróleo bruto", texto: "Mistura de VÁRIOS hidrocarbonetos — gasolina, querosene, diesel, asfalto — tudo junto, sem separação.", fotoUrl: bancadaImg },
      { id: "aquecimento", x: 40, y: 60, emoji: "🔥", cor: "from-red-500 to-orange-700", titulo: "Forno de aquecimento", texto: "O petróleo é aquecido a mais de 350°C até vaporizar quase por completo.", fotoUrl: bancadaImg },
      { id: "torre", x: 60, y: 45, emoji: "🏭", cor: "from-sky-500 to-cyan-700", titulo: "Torre de fracionamento", texto: "Vapores sobem e se CONDENSAM em alturas diferentes, conforme o ponto de ebulição de cada substância.", fotoUrl: bancadaImg },
      { id: "produtos", x: 80, y: 30, emoji: "⛽", cor: "from-amber-500 to-orange-700", titulo: "Frações separadas", texto: "No topo saem gases leves (GLP); no meio, gasolina e querosene; no fundo, óleo diesel e asfalto pesado.", fotoUrl: estadosImg },
    ],
    falaFinal: "A destilação do petróleo é a maior aplicação industrial da separação de misturas do mundo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre métodos de separação.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual método separa areia grossa de areia fina?", fotoUrl: bancadaImg,
        cards: [
          { id: "a", emoji: "🕸️", titulo: "Peneiração", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "☀️", titulo: "Evaporação", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌡️", titulo: "Destilação", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. Peneiração separa sólidos de TAMANHOS diferentes usando furos calibrados.",
        feedbackErro: "Evaporação e destilação são para líquidos. Sólidos de tamanhos diferentes usam PENEIRAÇÃO." },
      { id: "q2", pergunta: "Por que a destilação do petróleo funciona?", fotoUrl: bancadaImg,
        cards: [
          { id: "a", emoji: "🌡️", titulo: "Cada substância tem ponto de ebulição diferente", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎨", titulo: "Cada substância tem cor diferente", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⚖️", titulo: "Cada substância pesa igual", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Gases leves evaporam e condensam em temperaturas mais baixas; substâncias pesadas precisam de mais calor.",
        feedbackErro: "Cor e peso não separam nada na destilação. O que importa é o PONTO DE EBULIÇÃO de cada substância." },
      { id: "q3", pergunta: "Água barrenta com areia grossa no fundo: qual o primeiro passo para separar?", fotoUrl: estadosImg,
        cards: [
          { id: "a", emoji: "🫗", titulo: "Decantação — deixar a areia descer e retirar a água", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌡️", titulo: "Destilar tudo de uma vez", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧲", titulo: "Usar um imã", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Perfeito. Decantação usa a GRAVIDADE — o sólido mais pesado deposita no fundo antes de qualquer outro método.",
        feedbackErro: "Areia não é metal (sem imã) e destilar tudo é desperdício de energia. Primeiro DECANTA, depois filtra se precisar." },
    ],
    falaFinal: "Cada mistura pede um método específico — conhecer as propriedades dos componentes é o segredo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Misturas heterogêneas se dividem em dois grandes grupos de método: FÍSICOS MECÂNICOS (filtrar, decantar, peneirar) e TÉRMICOS (evaporar, destilar).",
    instrucao: "Toque nos interruptores",
    mapaUrl: bancadaImg,
    camadas: [
      { id: "mecanicos", rotulo: "Métodos Mecânicos", emoji: "🧻", cor: "from-sky-500 to-cyan-700", rect: { x: 2, y: 40, w: 50, h: 55 }, descricao: "Filtração, decantação e peneiração. Usam diferenças de TAMANHO ou PESO — sem aquecer nada.", fotoUrl: bancadaImg },
      { id: "termicos", rotulo: "Métodos Térmicos", emoji: "🌡️", cor: "from-amber-500 to-orange-700", rect: { x: 52, y: 40, w: 46, h: 55 }, descricao: "Evaporação e destilação. Usam CALOR e diferenças de ponto de ebulição.", fotoUrl: estadosImg },
    ],
    falaFinal: "Mecânico separa pelo tamanho e peso. Térmico separa pela temperatura de mudança de estado.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Sequência da destilação do petróleo em uma refinaria.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Qual a sequência de refino do petróleo?",
    paradas: [
      { id: "bruto", emoji: "🛢️", rotulo: "1. Petróleo bruto", descricao: "Mistura de várias substâncias entra na refinaria.", fotoUrl: bancadaImg },
      { id: "aquece", emoji: "🔥", rotulo: "2. Aquecimento", descricao: "Petróleo é aquecido a mais de 350°C.", fotoUrl: bancadaImg },
      { id: "vapor", emoji: "♨️", rotulo: "3. Vaporização", descricao: "Substâncias viram vapor em temperaturas diferentes.", fotoUrl: estadosImg },
      { id: "condensa", emoji: "💧", rotulo: "4. Condensação em alturas", descricao: "Cada vapor condensa numa altura da torre, conforme seu ponto de ebulição.", fotoUrl: moleculasImg },
      { id: "frações", emoji: "⛽", rotulo: "5. Frações separadas", descricao: "Gás, gasolina, querosene, diesel e asfalto saem separados.", fotoUrl: estadosImg },
    ],
    ordemCerta: ["bruto", "aquece", "vapor", "condensa", "frações"],
    feedbackAcerto: "Exato. É o processo real usado em refinarias no mundo todo.",
    feedbackErro: "Primeiro aquece, depois vaporiza, depois condensa em alturas diferentes, só então separa as frações.",
    falaFinal: "Sem destilação, não existiria gasolina separada de diesel — tudo viria misturado e inútil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Programa 4.",
    tituloLivro: "📓 Relatório · Separação 15",
    subtitulo: "Obtendo sal de cozinha da água do mar",
    paragrafos: [
      { id: "p1", texto: "MÉTODO: coletamos 500 mL de água do mar em um béquer. A água estava TURVA com pequenos grãos de areia. Primeiro deixamos a areia decantar no fundo por 10 minutos.", chaves: ["decantar", "turva"], definicoes: { decantar: "Deixar o sólido depositar no fundo por gravidade.", turva: "Líquido com partículas em suspensão, não transparente." }, fotoUrl: estadosImg },
      { id: "p2", texto: "Em seguida, filtramos a água para remover qualquer resíduo fino de areia que ainda estivesse suspenso. A água ficou completamente transparente, mas o SAL continuou dissolvido — invisível.", chaves: ["filtramos", "dissolvido"], definicoes: { filtramos: "Passamos por um filtro que retém sólidos.", dissolvido: "Misturado de forma que não se vê mais separado." }, fotoUrl: bancadaImg },
      { id: "p3", texto: "CONCLUSÃO: colocamos a água filtrada em um prato ao sol por dois dias. A água EVAPOROU completamente e restaram cristais brancos de sal de cozinha no fundo do prato. Método: decantação + filtração + evaporação.", chaves: ["evaporou", "cristais"], definicoes: { evaporou: "Virou vapor e saiu do recipiente.", cristais: "Sólidos organizados em forma geométrica regular." }, fotoUrl: moleculasImg },
    ],
    falaFinal: "Você acabou de ler um protocolo real de obtenção de sal — usado há milhares de anos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Qual método separa cada mistura?",
    instrucao: "⏱️ Escolha o método certo",
    duracaoSegundos: 25,
    pecas: [
      { id: "filtracao", emoji: "🧻", rotulo: "Filtração" },
      { id: "decantacao", emoji: "🫗", rotulo: "Decantação" },
      { id: "evaporacao", emoji: "☀️", rotulo: "Evaporação" },
      { id: "destilacao", emoji: "🌡️", rotulo: "Destilação" },
      { id: "peneiracao", emoji: "🕸️", rotulo: "Peneiração" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Água + óleo", emoji: "🫗", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Camadas separadas", emoji: "💧", cor: "from-emerald-500 to-teal-700" }, contexto: "Óleo flutua sobre a água formando duas camadas visíveis, que não se misturam.", pecaCertaId: "decantacao", fotoUrl: estadosImg, feedbackAcerto: "DECANTAÇÃO. Camadas de líquidos com densidades diferentes se separam por gravidade.", feedbackErro: "Duas camadas visíveis de líquidos = DECANTAÇÃO." },
      { id: "r2", municipioA: { nome: "Cascalho + areia fina", emoji: "🕸️", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Tamanhos diferentes", emoji: "🪨", cor: "from-red-500 to-rose-700" }, contexto: "Pedrinhas grandes precisam ser separadas da areia fina numa obra.", pecaCertaId: "peneiracao", fotoUrl: bancadaImg, feedbackAcerto: "PENEIRAÇÃO. Sólidos de tamanhos diferentes passam por furos calibrados.", feedbackErro: "Tamanhos diferentes de sólido = PENEIRAÇÃO." },
      { id: "r3", municipioA: { nome: "Petróleo bruto", emoji: "🛢️", cor: "from-slate-600 to-slate-900" }, municipioB: { nome: "Vira gasolina, diesel...", emoji: "⛽", cor: "from-amber-500 to-orange-700" }, contexto: "Mistura de líquidos com pontos de ebulição diferentes precisa ser separada em frações.", pecaCertaId: "destilacao", fotoUrl: bancadaImg, feedbackAcerto: "DESTILAÇÃO. Aquece, vaporiza e condensa cada substância em temperatura própria.", feedbackErro: "Líquidos com pontos de ebulição diferentes = DESTILAÇÃO." },
    ],
    falaFinal: "Agora você escolhe o método certo na hora — como um técnico de laboratório.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Todo método de separação se encaixa em duas famílias: MECÂNICOS (usam tamanho/peso) e TÉRMICOS (usam calor e ponto de ebulição).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: bancadaImg,
    fatias: [
      { id: "mecanicos", rotulo: "Mecânicos", emoji: "🧻", percentual: 60, cor: "#0ea5e9", descricao: "Filtração, decantação, peneiração — usam diferenças físicas de tamanho e peso, sem calor.", exemplos: ["Coar café", "Peneirar areia", "Decantar barro"], fotoUrl: estadosImg },
      { id: "termicos", rotulo: "Térmicos", emoji: "🌡️", percentual: 40, cor: "#f59e0b", descricao: "Evaporação e destilação — usam calor e ponto de ebulição diferente entre substâncias.", exemplos: ["Sal do mar", "Petróleo em refinaria", "Álcool na destilaria"], fotoUrl: bancadaImg },
    ],
    falaFinal: "Escolher o método certo depende de saber: é sólido ou líquido, e qual a diferença física entre os componentes?",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão do Programa 4. 3 perguntas e sua Certificação de Separador Júnior é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: bancadaImg,
    perguntas: [
      { id: "q1", pergunta: "Qual método é usado para obter sal de cozinha a partir da água do mar?", fotoUrl: estadosImg,
        opcoes: [
          { id: "a", texto: "Evaporação da água, deixando o sal sólido", correta: true },
          { id: "b", texto: "Filtração com papel comum" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Sal dissolvido passa pelo filtro — só a evaporação separa.",
        feedbackErro: "Sal DISSOLVIDO atravessa qualquer filtro. Só a evaporação deixa o sal sólido para trás." },
      { id: "q2", pergunta: "Por que a destilação do petróleo separa gasolina de diesel?", fotoUrl: bancadaImg,
        opcoes: [
          { id: "a", texto: "Cada substância vaporiza e condensa em uma temperatura diferente", correta: true },
          { id: "b", texto: "Porque a gasolina é mais colorida" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Sim. Ponto de ebulição diferente é o segredo da destilação fracionada.",
        feedbackErro: "Cor não importa nada. O que separa é a TEMPERATURA de ebulição de cada substância." },
      { id: "q3", pergunta: "Qual método separa pedras grandes de areia fina sem usar água?", fotoUrl: bancadaImg,
        opcoes: [
          { id: "a", texto: "Peneiração, usando furos de tamanho calibrado", correta: true },
          { id: "b", texto: "Destilação, aquecendo tudo" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Exato. Peneiração é o método correto para sólidos de tamanhos diferentes.",
        feedbackErro: "Destilação é para líquidos. Sólidos secos de tamanhos diferentes usam PENEIRAÇÃO." },
    ],
    selo: { nome: "Certificação de Separador Júnior", subtitulo: "Academia Científica · Programa 4 concluído", emoji: "🧫", cor: "from-amber-500 to-orange-700" },
    falaFinal: "Programa 4 concluído. Você domina os métodos de separação de misturas.",
  },
};
