import type { AulaGeoV1 } from "../../types";
import mataImg from "@/assets/ciencias-6ano/u3-a1/mata-atlantica.jpg";
import lagoImg from "@/assets/ciencias-6ano/u3-a1/ecossistema-lago.jpg";
import predadorImg from "@/assets/ciencias-6ano/u3-a1/predador-presa.jpg";
import decompImg from "@/assets/ciencias-6ano/u3-a1/decompositores.jpg";
import cacaVideo from "@/assets/ciencias-6ano/u3-a1/caca-pantanal.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 3 · Aula 01
 * "Rede da Vida" — Níveis de organização e ecossistemas (EF06CI06).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-rede-da-vida",
  titulo: "Rede da Vida",
  iconeTrilha: "🌳",
  recompensa: { xp: 120, moedas: 45, medalha: "Ecólogo Júnior" },
  bncc: ["EF06CI06"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Estação de campo aérea. Analise o ecossistema abaixo.",
    mapaUrl: mataImg,
    imagemDestaqueUrl: lagoImg,
    aurora:
      "Programa 3. Saímos do microscópio pro drone. Aqui a organização é MACRO: populações, comunidades, ecossistemas. Ninguém vive sozinho — tudo está conectado.",
    falaFinal:
      "Um ecossistema é uma REDE. Toque em qualquer nó e o resto sente. Este é o princípio da ecologia científica.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Situação: no Pantanal, se removêssemos TODOS os predadores de topo (onças, jacarés) do ecossistema...",
    pergunta: "Qual sua HIPÓTESE — o que aconteceria com o resto?",
    fotoUrl: predadorImg,
    opcoes: [
      { id: "explode", titulo: "Presas explodem", subtitulo: "capivaras dominam", emoji: "📈", cor: "from-amber-500 to-orange-700", fotoUrl: predadorImg },
      { id: "equilibra", titulo: "Nada muda", subtitulo: "sistema se equilibra sozinho", emoji: "⚖️", cor: "from-slate-500 to-slate-700", fotoUrl: mataImg },
      { id: "somem", titulo: "Todos somem juntos", subtitulo: "efeito dominó", emoji: "💀", cor: "from-red-500 to-rose-700", fotoUrl: mataImg },
    ],
    respostaCerta: "explode",
    feedbackAcerto:
      "Correto. Sem predador de topo, populações de presas EXPLODEM — comem toda a vegetação — depois COLAPSAM por falta de comida. Isso é cascata trófica.",
    feedbackErro:
      "Ecossistemas NÃO se equilibram sozinhos após perda de topo. Presas explodem primeiro, colapsam depois. Predador é regulador.",
    falaFinal: "Predador de topo = regulador do sistema. Ecossistema é interdependente.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos ecológicos. Um vem com vídeo real de caça no Pantanal.",
    instrucao: "Vocabulário ecológico",
    cadernos: [
      { id: "populacao", capa: "POPULAÇÃO", emoji: "🦜", cor: "from-sky-500 to-cyan-700", conteudo: "Conjunto de indivíduos da MESMA espécie vivendo num mesmo lugar ao mesmo tempo.", exemplo: "Ex.: 200 araras-azuis do Pantanal.", fotoUrl: mataImg },
      { id: "comunidade", capa: "COMUNIDADE", emoji: "🌿", cor: "from-emerald-500 to-teal-700", conteudo: "Conjunto de populações de espécies DIFERENTES que interagem num mesmo lugar.", exemplo: "Ex.: araras + onças + capivaras + peixes vivendo juntos.", fotoUrl: lagoImg },
      { id: "ecossistema", capa: "ECOSSISTEMA", emoji: "🌍", cor: "from-amber-500 to-orange-700", conteudo: "Comunidade + fatores físicos (água, solo, clima, luz). É o sistema INTEIRO com vida e ambiente.", exemplo: "Ex.: Pantanal inteiro = comunidade + rios + estações secas.", fotoUrl: lagoImg },
      { id: "predador", capa: "CADEIA ALIMENTAR", emoji: "🐆", cor: "from-red-500 to-rose-700", conteudo: "Sequência de QUEM COME QUEM. Veja no vídeo o predador de topo em ação — momento real de caça.", exemplo: "Ex.: capim → capivara → onça-pintada.", videoUrl: cacaVideo.url },
      { id: "decompositor", capa: "DECOMPOSITOR", emoji: "🍄", cor: "from-indigo-500 to-purple-700", conteudo: "Fungos e bactérias que quebram matéria morta e devolvem nutrientes ao solo. Fecham o ciclo.", exemplo: "Ex.: cogumelos em tronco caído reciclando carbono.", fotoUrl: decompImg },
    ],
    falaFinal: "Do indivíduo ao ecossistema: cada nível emerge do anterior. Ecologia é o estudo dessas conexões.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "O ecossistema-lago em corte. Toque em cada nível para entender.",
    instrucao: "Toque nos elementos do ecossistema",
    mapaUrl: lagoImg,
    pontos: [
      { id: "produtor", x: 25, y: 25, emoji: "🌱", cor: "from-emerald-500 to-teal-700", titulo: "Produtores", texto: "Plantas aquáticas e algas. Fazem fotossíntese — captam energia solar e viram base de toda cadeia.", fotoUrl: lagoImg },
      { id: "consumidor1", x: 55, y: 60, emoji: "🐟", cor: "from-sky-500 to-cyan-700", titulo: "Consumidores primários", texto: "Peixes herbívoros e insetos que comem plantas. Transferem energia dos produtores pra cima.", fotoUrl: lagoImg },
      { id: "consumidor2", x: 75, y: 20, emoji: "🦅", cor: "from-amber-500 to-orange-700", titulo: "Consumidores de topo", texto: "Aves aquáticas, jacarés. Regulam populações abaixo. Base pequena, topo pequeno.", fotoUrl: predadorImg },
      { id: "decomp", x: 30, y: 85, emoji: "🍄", cor: "from-indigo-500 to-purple-700", titulo: "Decompositores", texto: "Fungos e bactérias no sedimento. Reciclam matéria morta e devolvem nutrientes.", fotoUrl: decompImg },
    ],
    falaFinal: "Produtor → consumidor → decompositor. Energia entra pelo sol e circula por níveis.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de interpretação ecológica.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual a diferença entre POPULAÇÃO e COMUNIDADE?", fotoUrl: mataImg,
        cards: [
          { id: "a", emoji: "🎯", titulo: "População = 1 espécie; comunidade = várias espécies", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❌", titulo: "É a mesma coisa", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌍", titulo: "População inclui o ambiente físico", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. População = 1 espécie. Comunidade = várias populações interagindo.",
        feedbackErro: "População é UMA espécie só. Comunidade reúne VÁRIAS espécies no mesmo lugar." },
      { id: "q2", pergunta: "Qual componente fecha o CICLO de nutrientes em um ecossistema?", fotoUrl: decompImg,
        cards: [
          { id: "a", emoji: "🍄", titulo: "Decompositores", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🐆", titulo: "Predadores de topo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌱", titulo: "Produtores", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Sem decompositores, matéria morta se acumularia e nutrientes não voltariam ao solo.",
        feedbackErro: "Produtores CAPTAM energia; predadores CONTROLAM. Só decompositores RECICLAM matéria." },
      { id: "q3", pergunta: "O que acontece se um ecossistema perde um NÍVEL da cadeia alimentar?", fotoUrl: predadorImg,
        cards: [
          { id: "a", emoji: "🌊", titulo: "Efeito cascata afeta os outros níveis", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "😌", titulo: "Nada, se equilibra sozinho", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎨", titulo: "Só muda a cor da paisagem", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Perfeito. Cascata trófica: mexer num nível afeta TODOS os outros — pra cima e pra baixo.",
        feedbackErro: "Ecossistemas são REDES conectadas. Perder um nível gera cascata em todos os outros." },
    ],
    falaFinal: "Ecologia é o estudo das conexões. Nada existe isolado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "O ecossistema tem duas dimensões: BIÓTICA (seres vivos) e ABIÓTICA (fatores físicos: água, luz, temperatura).",
    instrucao: "Toque nos interruptores",
    mapaUrl: lagoImg,
    camadas: [
      { id: "biotica", rotulo: "Biótica", emoji: "🦜", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 50 }, descricao: "Tudo que é vivo: plantas, animais, fungos, bactérias. Faz parte da comunidade biológica.", fotoUrl: mataImg },
      { id: "abiotica", rotulo: "Abiótica", emoji: "💧", cor: "from-sky-500 to-cyan-700", rect: { x: 2, y: 52, w: 96, h: 46 }, descricao: "Fatores físicos e químicos: água, luz solar, solo, temperatura, ar. Vida depende deles.", fotoUrl: lagoImg },
    ],
    falaFinal: "Biótico + abiótico = ECOSSISTEMA. Um sem o outro não existe.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene a hierarquia ecológica do menor ao maior.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Qual a sequência de organização ecológica?",
    paradas: [
      { id: "individuo", emoji: "🐆", rotulo: "1. Indivíduo", descricao: "Um ser vivo isolado.", fotoUrl: predadorImg },
      { id: "populacao", emoji: "🦜", rotulo: "2. População", descricao: "Vários indivíduos da mesma espécie.", fotoUrl: mataImg },
      { id: "comunidade", emoji: "🌿", rotulo: "3. Comunidade", descricao: "Várias populações interagindo.", fotoUrl: lagoImg },
      { id: "ecossistema", emoji: "🌍", rotulo: "4. Ecossistema", descricao: "Comunidade + ambiente físico.", fotoUrl: lagoImg },
      { id: "biosfera", emoji: "🌎", rotulo: "5. Biosfera", descricao: "Todos os ecossistemas da Terra.", fotoUrl: mataImg },
    ],
    ordemCerta: ["individuo", "populacao", "comunidade", "ecossistema", "biosfera"],
    feedbackAcerto: "Exato. Hierarquia oficial da ecologia — do indivíduo ao planeta.",
    feedbackErro: "Cada nível ENGLOBA o anterior. Indivíduo → população → comunidade → ecossistema → biosfera.",
    falaFinal: "Ecologia trabalha em todos esses níveis simultaneamente. Você pode estudar 1 onça, um bando, ou o Pantanal inteiro.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório de campo do Programa 3.",
    tituloLivro: "📓 Relatório de Campo · Estação 12",
    subtitulo: "Impacto da remoção de predadores de topo (Yellowstone, EUA)",
    paragrafos: [
      { id: "p1", texto: "SITUAÇÃO: entre 1926 e 1995, lobos foram EXTINTOS do Parque Yellowstone. HIPÓTESE inicial dos gestores: sem lobos, alces (presas) viveriam melhor. RESULTADO real: alces explodiram, comeram TODAS as mudas de árvores das margens dos rios.", chaves: ["extintos", "presas"], definicoes: { extintos: "Removidos completamente de uma área.", presas: "Animais caçados por predadores." }, fotoUrl: predadorImg },
      { id: "p2", texto: "EFEITO CASCATA: sem árvores nas margens, rios erodiram, castores perderam matéria-prima e sumiram, pássaros migratórios perderam abrigo, temperatura da água subiu. UM predador ausente reorganizou o ecossistema inteiro.", chaves: ["cascata", "erosão"], definicoes: { cascata: "Efeito dominó entre níveis do ecossistema.", erosão: "Desgaste do solo pela água ou vento." }, fotoUrl: mataImg },
      { id: "p3", texto: "CONCLUSÃO: em 1995, lobos foram REINTRODUZIDOS. Em 10 anos, árvores voltaram, castores voltaram, rios se estabilizaram. EVIDÊNCIA de que predador de topo é REGULADOR — não intruso.", chaves: ["regulador"], definicoes: { regulador: "Componente que mantém o equilíbrio de um sistema." }, fotoUrl: lagoImg },
    ],
    falaFinal: "Yellowstone é o caso clássico. Ensinou o mundo que ecossistemas são REDES — não peças soltas.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Identifique o NÍVEL ecológico descrito.",
    instrucao: "⏱️ Escolha o nível correto",
    duracaoSegundos: 25,
    pecas: [
      { id: "populacao", emoji: "🦜", rotulo: "População" },
      { id: "comunidade", emoji: "🌿", rotulo: "Comunidade" },
      { id: "ecossistema", emoji: "🌍", rotulo: "Ecossistema" },
      { id: "individuo", emoji: "🐆", rotulo: "Indivíduo" },
      { id: "biosfera", emoji: "🌎", rotulo: "Biosfera" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "150 tuiuiús", emoji: "🦜", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Mesma espécie", emoji: "🎯", cor: "from-emerald-500 to-teal-700" }, contexto: "Grupo de 150 aves TUIUIÚS vivendo no Pantanal.", pecaCertaId: "populacao", fotoUrl: mataImg, feedbackAcerto: "POPULAÇÃO = mesma espécie, mesmo lugar.", feedbackErro: "Mesma espécie + mesmo lugar = POPULAÇÃO." },
      { id: "r2", municipioA: { nome: "Peixes + plantas + jacarés", emoji: "🌿", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Várias espécies", emoji: "🎨", cor: "from-amber-500 to-orange-700" }, contexto: "Peixes, plantas aquáticas e jacarés vivendo no mesmo lago.", pecaCertaId: "comunidade", fotoUrl: lagoImg, feedbackAcerto: "COMUNIDADE = várias populações no mesmo local.", feedbackErro: "Várias espécies juntas = COMUNIDADE." },
      { id: "r3", municipioA: { nome: "Lago + água + luz + peixes", emoji: "🌍", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Biótico + abiótico", emoji: "⚖️", cor: "from-sky-500 to-cyan-700" }, contexto: "Toda comunidade do lago + água + luz + temperatura + sedimento.", pecaCertaId: "ecossistema", fotoUrl: lagoImg, feedbackAcerto: "ECOSSISTEMA = comunidade + ambiente físico.", feedbackErro: "Vida + fatores físicos = ECOSSISTEMA." },
    ],
    falaFinal: "Você já classifica níveis ecológicos na hora. Vocabulário de biólogo de campo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Um ecossistema tem duas dimensões: fatores BIÓTICOS (vivos) e ABIÓTICOS (físicos).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: lagoImg,
    fatias: [
      { id: "bio", rotulo: "Biótico", emoji: "🦜", percentual: 50, cor: "#10b981", descricao: "Todos os seres vivos: plantas, animais, fungos, bactérias. Formam a comunidade biológica.", exemplos: ["Onças", "Árvores", "Bactérias do solo"], fotoUrl: mataImg },
      { id: "abio", rotulo: "Abiótico", emoji: "💧", percentual: 50, cor: "#0ea5e9", descricao: "Fatores físicos e químicos: água, luz solar, temperatura, solo, ar. Base para a vida existir.", exemplos: ["Água", "Luz solar", "Solo"], fotoUrl: lagoImg },
    ],
    falaFinal: "Biótico + abiótico juntos = ECOSSISTEMA. Sem um dos dois, não há sistema.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão do Programa 3. 3 perguntas e sua Certificação de Ecólogo Júnior é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: mataImg,
    perguntas: [
      { id: "q1", pergunta: "O que diferencia uma COMUNIDADE de uma POPULAÇÃO?", fotoUrl: mataImg,
        opcoes: [
          { id: "a", texto: "População = 1 espécie; comunidade = várias espécies interagindo", correta: true },
          { id: "b", texto: "Comunidade tem mais indivíduos que população" },
        ],
        feedbackAcerto: "Correto. Número de espécies é a chave — não o número de indivíduos.",
        feedbackErro: "Não é quantidade de indivíduos — é quantidade de ESPÉCIES." },
      { id: "q2", pergunta: "Qual o papel dos DECOMPOSITORES no ecossistema?", fotoUrl: decompImg,
        opcoes: [
          { id: "a", texto: "Reciclar matéria morta e devolver nutrientes ao solo", correta: true },
          { id: "b", texto: "Caçar animais menores para se alimentar" },
        ],
        feedbackAcerto: "Sim. Sem decompositores, nutrientes ficariam presos em matéria morta.",
        feedbackErro: "Decompositores não caçam — quebram matéria orgânica MORTA reciclando nutrientes." },
      { id: "q3", pergunta: "Por que remover um predador de topo AFETA todo o ecossistema?", fotoUrl: predadorImg,
        opcoes: [
          { id: "a", texto: "Porque gera efeito cascata em todos os níveis abaixo", correta: true },
          { id: "b", texto: "Porque só faz falta pra outros predadores" },
        ],
        feedbackAcerto: "Exato. Cascata trófica — presas explodem, vegetação some, rios erodem.",
        feedbackErro: "Efeito atinge TODOS os níveis — presas, plantas, solo, água. Isso é cascata trófica." },
    ],
    selo: { nome: "Certificação de Ecólogo Júnior", subtitulo: "Academia Científica · Programa 3 concluído", emoji: "🌳", cor: "from-emerald-600 to-green-700" },
    falaFinal: "Programa 3 concluído. Você entende como ecossistemas funcionam como redes.",
  },
};
