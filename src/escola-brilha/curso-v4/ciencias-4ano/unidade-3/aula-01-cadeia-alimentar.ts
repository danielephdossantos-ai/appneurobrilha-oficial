import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png";
import florestaImg from "@/assets/ciencias-4ano/u3-a1/floresta.jpg";
import produtorImg from "@/assets/ciencias-4ano/u3-a1/produtor-planta.jpg";
import herbivoroImg from "@/assets/ciencias-4ano/u3-a1/herbivoro-coelho.jpg";
import carnivoroImg from "@/assets/ciencias-4ano/u3-a1/carnivoro-onca.jpg";
import decompositorImg from "@/assets/ciencias-4ano/u3-a1/decompositor-fungo.jpg";
import cadeiaImg from "@/assets/ciencias-4ano/u3-a1/cadeia-diagrama.jpg";

/**
 * Ciências · 4º Ano · Unidade 3 · Aula 01
 * "Cadeia Alimentar e Ecossistemas" — EF04CI04
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-cadeia-alimentar",
  titulo: "Cadeia Alimentar",
  iconeTrilha: "🦌",
  bncc: ["EF04CI04"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pela floresta. Encontre os moradores do ecossistema.",
    mapaUrl: florestaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Equipe, entramos em campo. Nesta floresta convivem plantas, animais e fungos. Cada um tem um PAPEL no fluxo de energia. Vamos mapear quem come quem — e por quê.",
    falaFinal:
      "Numa cadeia alimentar, a energia do SOL passa da planta pro herbívoro, pro carnívoro e pro decompositor. Se um elo quebra, o ecossistema desequilibra.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Sem o SOL, o que aconteceria com toda essa floresta?",
    pergunta: "Hipótese: sem luz solar, o que acontece com o ecossistema?",
    fotoUrl: produtorImg,
    opcoes: [
      { id: "nada", titulo: "Nada muda", subtitulo: "animais comem uns aos outros", emoji: "🤷", cor: "from-slate-500 to-slate-700" },
      { id: "colapsa", titulo: "COLAPSA tudo", subtitulo: "sem plantas, sem herbívoros, sem carnívoros", emoji: "💀", cor: "from-red-500 to-rose-700" },
      { id: "so-plantas", titulo: "Só as plantas morrem", subtitulo: "animais continuam", emoji: "🐇", cor: "from-amber-500 to-orange-700" },
    ],
    respostaCerta: "colapsa",
    feedbackAcerto:
      "Correto. Sem sol, plantas não fazem fotossíntese. Sem plantas, herbívoros morrem. Sem herbívoros, carnívoros morrem. Efeito dominó.",
    feedbackErro:
      "Pensa na sequência: sol → planta → coelho → onça. Se tirar o sol, TODA a cadeia cai. A energia entra pela planta.",
    falaFinal:
      "O SOL é a fonte primária de energia de quase todo ecossistema. As plantas são a porta de entrada dessa energia.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco termos da ecologia. Estuda cada caderno.",
    instrucao: "Vocabulário técnico de ecossistemas",
    cadernos: [
      {
        id: "ecossistema",
        capa: "ECOSSISTEMA",
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        conteudo: "Conjunto de seres vivos + ambiente físico (solo, água, ar, luz) interagindo num lugar.",
        exemplo: "Ex.: floresta amazônica, recife de coral, lago, cerrado.",
        fotoUrl: florestaImg,
      },
      {
        id: "produtor",
        capa: "PRODUTOR",
        emoji: "🌱",
        cor: "from-green-500 to-emerald-700",
        conteudo: "Ser vivo que PRODUZ seu próprio alimento usando o sol (fotossíntese). Base da cadeia.",
        exemplo: "Ex.: árvores, capim, algas.",
        fotoUrl: produtorImg,
      },
      {
        id: "herbivoro",
        capa: "HERBÍVORO",
        emoji: "🐰",
        cor: "from-amber-500 to-orange-700",
        conteudo: "Consumidor PRIMÁRIO. Come apenas plantas.",
        exemplo: "Ex.: coelho, vaca, cavalo, capivara.",
        fotoUrl: herbivoroImg,
      },
      {
        id: "carnivoro",
        capa: "CARNÍVORO",
        emoji: "🐆",
        cor: "from-red-500 to-rose-700",
        conteudo: "Consumidor SECUNDÁRIO. Come outros animais.",
        exemplo: "Ex.: onça, lobo, gavião, tubarão.",
        fotoUrl: carnivoroImg,
      },
      {
        id: "decompositor",
        capa: "DECOMPOSITOR",
        emoji: "🍄",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo: "Devolve os nutrientes ao solo. Sem eles, nada vira adubo. Fecham o ciclo.",
        exemplo: "Ex.: fungos, bactérias, minhocas.",
        fotoUrl: decompositorImg,
      },
    ],
    falaFinal: "Produtor, herbívoro, carnívoro e decompositor. Todo ecossistema roda em cima desses papéis.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toca em cada morador da floresta pra ver o papel dele no ecossistema.",
    instrucao: "Toque em cada morador",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: florestaImg,
    pontos: [
      {
        id: "sol", x: 50, y: 8, emoji: "☀️", cor: "from-yellow-400 to-orange-600",
        titulo: "SOL",
        texto: "Fonte primária de energia. Toda a comida da cadeia começa aqui, absorvida pelas plantas.",
        fotoUrl: produtorImg,
      },
      {
        id: "produtor", x: 25, y: 55, emoji: "🌱", cor: "from-green-500 to-emerald-700",
        titulo: "Produtor (planta)",
        texto: "Faz FOTOSSÍNTESE: usa luz + água + gás carbônico e produz seu próprio alimento (glicose). Libera oxigênio no ar.",
        fotoUrl: produtorImg,
      },
      {
        id: "herbivoro", x: 45, y: 75, emoji: "🐰", cor: "from-amber-500 to-orange-700",
        titulo: "Herbívoro",
        texto: "Come plantas. Obtém energia dos vegetais e transfere pra cadeia. É consumidor PRIMÁRIO.",
        fotoUrl: herbivoroImg,
      },
      {
        id: "carnivoro", x: 70, y: 60, emoji: "🐆", cor: "from-red-500 to-rose-700",
        titulo: "Carnívoro",
        texto: "Come herbívoros (e às vezes outros carnívoros). Regula a população da floresta. Consumidor SECUNDÁRIO.",
        fotoUrl: carnivoroImg,
      },
      {
        id: "decompositor", x: 85, y: 85, emoji: "🍄", cor: "from-purple-500 to-fuchsia-700",
        titulo: "Decompositor",
        texto: "Quando algo morre, fungos e bactérias decompõem e devolvem nutrientes ao solo. Fecham o ciclo pra planta usar de novo.",
        fotoUrl: decompositorImg,
      },
    ],
    falaFinal: "Sol → planta → herbívoro → carnívoro → decompositor → volta pro solo. Ciclo perfeito.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas técnicas de ecologia.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem é a base de toda cadeia alimentar terrestre?",
        fotoUrl: produtorImg,
        cards: [
          { id: "a", emoji: "🌱", titulo: "Plantas (produtores)", cor: "from-green-500 to-emerald-700" },
          { id: "b", emoji: "🐆", titulo: "Carnívoros", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🐰", titulo: "Herbívoros", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Sim. Plantas fazem fotossíntese — só elas transformam luz em comida.",
        feedbackErro: "Só as PLANTAS produzem alimento a partir da luz do sol. São a base.",
      },
      {
        id: "q2",
        pergunta: "O que acontece se os DECOMPOSITORES sumirem?",
        fotoUrl: decompositorImg,
        cards: [
          { id: "a", emoji: "💀", titulo: "Nada morre, tudo bem", cor: "from-slate-500 to-slate-700" },
          { id: "b", emoji: "🗑️", titulo: "Nutrientes ficam presos, solo empobrece", cor: "from-purple-500 to-fuchsia-700" },
          { id: "c", emoji: "🐆", titulo: "Só os carnívoros somem", cor: "from-red-500 to-rose-700" },
        ],
        correta: "b",
        feedbackAcerto: "Correto. Sem decompositor, matéria morta se acumula e o solo não recebe nutrientes.",
        feedbackErro: "Decompositor devolve nutrientes ao solo. Sem eles, planta não tem 'adubo' natural.",
      },
      {
        id: "q3",
        pergunta: "Numa cadeia sol→capim→coelho→onça, o coelho é:",
        fotoUrl: herbivoroImg,
        cards: [
          { id: "a", emoji: "🐰", titulo: "Consumidor primário (herbívoro)", cor: "from-amber-500 to-orange-700" },
          { id: "b", emoji: "🐆", titulo: "Consumidor secundário (carnívoro)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌱", titulo: "Produtor", cor: "from-green-500 to-emerald-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso. Come planta = herbívoro = consumidor PRIMÁRIO.",
        feedbackErro: "Coelho come capim (planta). Quem come planta é herbívoro — o consumidor primário.",
      },
    ],
    falaFinal: "Você identifica cada papel no ecossistema.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Um ecossistema tem duas grandes zonas: SERES VIVOS (bióticos) e AMBIENTE FÍSICO (abióticos). Ambos são essenciais.",
    instrucao: "Toque nos interruptores",
    mapaUrl: florestaImg,
    camadas: [
      {
        id: "bioticos",
        rotulo: "Bióticos (seres vivos)",
        emoji: "🌿",
        cor: "from-emerald-500 to-green-700",
        rect: { x: 5, y: 40, w: 90, h: 55 },
        descricao: "Todas as plantas, animais e fungos. Produtores, consumidores e decompositores. A vida do ecossistema.",
        fotoUrl: cadeiaImg,
      },
      {
        id: "abioticos",
        rotulo: "Abióticos (ambiente)",
        emoji: "☀️",
        cor: "from-cyan-500 to-sky-700",
        rect: { x: 5, y: 5, w: 90, h: 30 },
        descricao: "Sol, ar, água, solo e temperatura. Fatores físicos que sustentam a vida — sem eles, nada existe.",
        fotoUrl: produtorImg,
      },
    ],
    falaFinal: "Vida + ambiente = ecossistema. Se qualquer um falha, o sistema colapsa.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Monte a rota da energia — do sol até o solo.",
    instrucao: "Toque nas paradas na ORDEM correta",
    pergunta: "Ordem do fluxo de energia:",
    paradas: [
      { id: "sol", emoji: "☀️", rotulo: "1. Sol", descricao: "Fonte primária. Emite luz e calor.", fotoUrl: produtorImg },
      { id: "planta", emoji: "🌱", rotulo: "2. Planta", descricao: "Absorve luz e faz fotossíntese.", fotoUrl: produtorImg },
      { id: "herbivoro", emoji: "🐰", rotulo: "3. Herbívoro", descricao: "Come planta e obtém energia.", fotoUrl: herbivoroImg },
      { id: "carnivoro", emoji: "🐆", rotulo: "4. Carnívoro", descricao: "Come herbívoro e obtém energia.", fotoUrl: carnivoroImg },
      { id: "decompositor", emoji: "🍄", rotulo: "5. Decompositor", descricao: "Decompõe restos e devolve nutrientes ao solo.", fotoUrl: decompositorImg },
    ],
    ordemCerta: ["sol", "planta", "herbivoro", "carnivoro", "decompositor"],
    feedbackAcerto: "Fluxo completo. Energia sempre entra pelo sol e sai pelo decompositor.",
    feedbackErro: "Repense: quem come quem? A energia flui na ordem 'quem é comido' → 'quem come'.",
    falaFinal: "Toda cadeia alimentar segue esse fluxo. Ecologia é sobre entender esses caminhos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua leitura. Relatório da expedição ao ecossistema.",
    tituloLivro: "📓 Relatório da Equipe · Expedição Ecológica",
    subtitulo: "Investigação: teia da vida na floresta",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Um ECOSSISTEMA é um lugar onde SERES VIVOS interagem entre si e com o AMBIENTE FÍSICO. Fatores BIÓTICOS são as plantas, animais e fungos. Fatores ABIÓTICOS são luz do sol, água, solo, temperatura e ar.",
        chaves: ["ecossistema", "bióticos", "abióticos"],
        definicoes: {
          ecossistema: "Comunidade de seres vivos + ambiente físico interagindo.",
          bióticos: "Fatores VIVOS do ecossistema (plantas, animais, fungos).",
          abióticos: "Fatores FÍSICOS (sol, água, ar, solo, temperatura).",
        },
        fotoUrl: florestaImg,
      },
      {
        id: "p2",
        texto:
          "A CADEIA ALIMENTAR mostra o caminho da energia. PRODUTORES (plantas) usam o sol pra fabricar comida. CONSUMIDORES primários (herbívoros) comem as plantas. CONSUMIDORES secundários (carnívoros) comem os herbívoros. DECOMPOSITORES fecham o ciclo, devolvendo nutrientes ao solo.",
        chaves: ["cadeia alimentar", "produtores", "consumidores", "decompositores"],
        definicoes: {
          "cadeia alimentar": "Sequência de quem come quem, mostrando o fluxo de energia.",
          produtores: "Fazem seu próprio alimento (plantas via fotossíntese).",
          consumidores: "Precisam comer outros seres pra obter energia.",
          decompositores: "Devolvem matéria morta ao solo (fungos, bactérias).",
        },
        fotoUrl: cadeiaImg,
      },
      {
        id: "p3",
        texto:
          "Se um elo é retirado, a cadeia se DESEQUILIBRA. Sem plantas, herbívoros somem; sem herbívoros, carnívoros somem; sem decompositores, nutrientes ficam presos e o solo empobrece. Cada ser vivo é essencial pra manter o ecossistema saudável.",
        chaves: ["desequilibra"],
        definicoes: {
          desequilibra: "Perde o balanço — populações crescem ou somem descontroladamente.",
        },
        fotoUrl: decompositorImg,
      },
    ],
    falaFinal: "Ecossistema é um sistema conectado. Tocar em um elo mexe com todos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado. Classifica cada ser vivo pelo papel.",
    instrucao: "⏱️ Escolha o papel correto",
    duracaoSegundos: 20,
    pecas: [
      { id: "produtor", emoji: "🌱", rotulo: "Produtor" },
      { id: "herbivoro", emoji: "🐰", rotulo: "Herbívoro" },
      { id: "carnivoro", emoji: "🐆", rotulo: "Carnívoro" },
      { id: "decompositor", emoji: "🍄", rotulo: "Decompositor" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Capim do campo", emoji: "🌾", cor: "from-green-500 to-emerald-700" },
        municipioB: { nome: "Faz fotossíntese", emoji: "☀️", cor: "from-yellow-500 to-orange-600" },
        contexto: "Capim verde crescendo no campo, absorvendo luz do sol o dia inteiro.",
        pecaCertaId: "produtor",
        fotoUrl: produtorImg,
        feedbackAcerto: "Certo. Faz seu próprio alimento = PRODUTOR.",
        feedbackErro: "Capim é planta. Planta faz fotossíntese. Logo, PRODUTOR.",
      },
      {
        id: "r2",
        municipioA: { nome: "Vaca no pasto", emoji: "🐄", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Come só capim", emoji: "🌱", cor: "from-green-500 to-emerald-700" },
        contexto: "Vaca pastando o dia inteiro, comendo apenas capim e folhas.",
        pecaCertaId: "herbivoro",
        fotoUrl: herbivoroImg,
        feedbackAcerto: "Sim. Come planta = HERBÍVORO (consumidor primário).",
        feedbackErro: "Se só come planta, é HERBÍVORO. Consumidor primário.",
      },
      {
        id: "r3",
        municipioA: { nome: "Lobo caçando", emoji: "🐺", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Caça coelhos e cervos", emoji: "🩸", cor: "from-slate-600 to-slate-900" },
        contexto: "Lobo perseguindo um cervo no bosque. Sua dieta é feita de carne de outros animais.",
        pecaCertaId: "carnivoro",
        fotoUrl: carnivoroImg,
        feedbackAcerto: "Exato. Come outros animais = CARNÍVORO.",
        feedbackErro: "Come animais = CARNÍVORO. Consumidor secundário.",
      },
      {
        id: "r4",
        municipioA: { nome: "Cogumelo no tronco", emoji: "🍄", cor: "from-purple-500 to-fuchsia-700" },
        municipioB: { nome: "Cresce em madeira apodrecendo", emoji: "🪵", cor: "from-amber-800 to-yellow-900" },
        contexto: "Cogumelos brotando num tronco caído em decomposição na floresta.",
        pecaCertaId: "decompositor",
        fotoUrl: decompositorImg,
        feedbackAcerto: "Sim. Decompõe matéria morta = DECOMPOSITOR.",
        feedbackErro: "Fungo que vive em matéria morta é DECOMPOSITOR — devolve nutrientes ao solo.",
      },
    ],
    falaFinal: "Você classifica cada ser vivo pelo papel ecológico.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Todo ecossistema tem duas grandes engrenagens: quem produz energia e quem consome.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: florestaImg,
    fatias: [
      {
        id: "produz",
        rotulo: "Produção",
        emoji: "🌱",
        percentual: 30,
        cor: "#059669",
        descricao: "Plantas usam o sol pra criar comida. Elas são a MENOR parte em número, mas sustentam TUDO.",
        exemplos: ["Árvores", "Capim", "Algas"],
        fotoUrl: produtorImg,
      },
      {
        id: "consome",
        rotulo: "Consumo & Reciclagem",
        emoji: "🔄",
        percentual: 70,
        cor: "#ea580c",
        descricao: "Animais consomem, fungos decompõem. Tudo o que a planta produz vira alimento e depois volta ao solo.",
        exemplos: ["Herbívoros", "Carnívoros", "Decompositores"],
        fotoUrl: cadeiaImg,
      },
    ],
    falaFinal: "Poucas plantas alimentam muitos animais. Ecossistema é sobre proporção e ciclo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Missão final da expedição ecológica. 3 perguntas.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "A energia da cadeia alimentar vem primeiro:",
        fotoUrl: produtorImg,
        opcoes: [
          { id: "a", texto: "Do sol, absorvido pelas plantas", correta: true },
          { id: "b", texto: "Dos animais maiores" },
        ],
        feedbackAcerto: "Certo. Sol → plantas → resto da cadeia.",
        feedbackErro: "Toda energia começa no SOL, entra pela planta.",
      },
      {
        id: "q2",
        pergunta: "Herbívoro é o animal que:",
        fotoUrl: herbivoroImg,
        opcoes: [
          { id: "a", texto: "Só come plantas", correta: true },
          { id: "b", texto: "Só come outros animais" },
        ],
        feedbackAcerto: "Sim. HERBI = planta. Só come vegetais.",
        feedbackErro: "Herbívoro come PLANTAS. Quem come animais é carnívoro.",
      },
      {
        id: "q3",
        pergunta: "Decompositor no ecossistema serve pra:",
        fotoUrl: decompositorImg,
        opcoes: [
          { id: "a", texto: "Devolver nutrientes ao solo", correta: true },
          { id: "b", texto: "Caçar herbívoros" },
        ],
        feedbackAcerto: "Correto. Fecha o ciclo — nutrientes voltam pra planta usar.",
        feedbackErro: "Decompositor não caça. Ele DECOMPÕE matéria morta e devolve nutrientes.",
      },
    ],
    selo: {
      nome: "Selo do Ecossistema",
      subtitulo: "Unidade 3 concluída · Ecólogo Iniciante",
      emoji: "🌳",
      cor: "from-emerald-400 via-green-500 to-teal-700",
    },
    falaFinal: "Selo de ecologia registrado. Próxima expedição: o mundo microscópico.",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Ecólogo Júnior" },
};
