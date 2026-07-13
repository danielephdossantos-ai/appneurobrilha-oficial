import type { AulaGeoV1 } from "../../types";
import imgGuerra from "@/assets/historia-9ano/u3-segunda-guerra.jpg";
import imgHolo from "@/assets/historia-9ano/u3-holocausto-memorial.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-segunda-guerra-holocausto",
  titulo: "Segunda Guerra Mundial e Holocausto",
  iconeTrilha: "🕯️",
  bncc: ["EF09HI07", "EF09HI08", "EF09HI09"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgGuerra,
    imagemDestaqueUrl: imgHolo,
    aurora:
      "1º de setembro de 1939. Alemanha nazista invade a Polônia. Começa a maior guerra da história: 6 anos, 70 milhões de mortos, cidades destruídas por bombas, uso da bomba atômica e o HOLOCAUSTO — extermínio industrial de 6 milhões de judeus e outras minorias em campos de concentração. Nunca mais o mundo seria o mesmo.",
    falaFinal: "Nó 3: a guerra que redefiniu o conceito de humanidade.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "O que separou a 2ª Guerra de todas as guerras anteriores em ESCALA e HORROR?",
    pergunta: "Qual é o marco mais chocante da 2ª Guerra Mundial?",
    fotoUrl: imgHolo,
    opcoes: [
      { id: "hol", titulo: "HOLOCAUSTO E BOMBA ATÔMICA", subtitulo: "extermínio industrial + arma nuclear", emoji: "🕯️", cor: "from-slate-800 to-slate-950" },
      { id: "trin", titulo: "GUERRA DE TRINCHEIRAS", subtitulo: "estilo 1ª Guerra", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "hol",
    feedbackAcerto:
      "Correto. Holocausto (6 milhões de judeus + minorias) e bombas de Hiroshima/Nagasaki (agosto/1945) marcaram um limite ético que a humanidade nunca mais quer atravessar.",
    feedbackErro:
      "Trincheiras marcaram a 1ª Guerra. A 2ª foi marcada pelo Holocausto e pela bomba atômica.",
    falaFinal: "Holocausto + bomba atômica = limites que criaram os Direitos Humanos.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da 2ª Guerra.",
    instrucao: "",
    cadernos: [
      { id: "eix", capa: "Eixo × Aliados", emoji: "⚔️", cor: "from-slate-700 to-slate-900", fotoUrl: imgGuerra, conteudo: "EIXO: Alemanha nazista + Itália fascista + Japão imperial. ALIADOS: Reino Unido, EUA, URSS, França Livre, Brasil, China e outros. Os Aliados venceram em 1945.", exemplo: "Exemplo: o Brasil enviou a FEB (Força Expedicionária Brasileira) para lutar na Itália contra os fascistas em 1944-45." },
      { id: "bli", capa: "Blitzkrieg", emoji: "⚡", cor: "from-amber-700 to-slate-900", fotoUrl: imgGuerra, conteudo: "BLITZKRIEG ('guerra-relâmpago') foi a tática alemã: aviões + tanques + infantaria mecanizada atacando em velocidade máxima. Derrotou França em 6 semanas em 1940.", exemplo: "Exemplo: em 1940 Paris caiu em 40 dias — algo impensável na 1ª Guerra, quando avanços eram medidos em metros." },
      { id: "hol", capa: "Holocausto", emoji: "🕯️", cor: "from-slate-700 to-slate-900", fotoUrl: imgHolo, conteudo: "HOLOCAUSTO (ou SHOAH) foi o extermínio sistemático de cerca de 6 milhões de judeus e mais 5 milhões de ciganos, homossexuais, deficientes, poloneses e opositores, em campos de concentração e extermínio nazistas.", exemplo: "Exemplo: Auschwitz-Birkenau, na Polônia, matou mais de 1 milhão de pessoas em câmaras de gás. Hoje é um memorial contra o esquecimento." },
      { id: "atom", capa: "Bomba Atômica", emoji: "☢️", cor: "from-cyan-700 to-slate-900", fotoUrl: imgGuerra, conteudo: "BOMBA ATÔMICA foi a arma nuclear lançada pelos EUA em HIROSHIMA (6/agosto/1945) e NAGASAKI (9/agosto/1945). Cerca de 200 mil mortes imediatas, mais milhares por radiação. Japão se rendeu em setembro.", exemplo: "Exemplo: em Hiroshima, uma única bomba destruiu 90% da cidade. Foi o momento em que a humanidade percebeu que podia se autodestruir." },
    ],
    falaFinal: "Eixo × Aliados. Blitzkrieg. Holocausto. Bomba atômica. Marcos absolutos.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Infográfico dos três teatros da guerra. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgGuerra,
    pontos: [
      { id: "eur", x: 25, y: 30, emoji: "🇪🇺", cor: "from-teal-700 to-slate-900", fotoUrl: imgGuerra, titulo: "FRENTE EUROPEIA", texto: "Alemanha invade Polônia (1939), França (1940), tenta invadir URSS (1941–44). Vira quando Stalingrado resiste (1943). Berlim cai em maio/1945." },
      { id: "pac", x: 55, y: 55, emoji: "🇯🇵", cor: "from-amber-700 to-slate-900", fotoUrl: imgGuerra, titulo: "FRENTE DO PACÍFICO", texto: "Japão ataca Pearl Harbor (dez/1941) e arrasta EUA à guerra. Batalhas ilha por ilha até Hiroshima/Nagasaki em agosto/1945." },
      { id: "br", x: 80, y: 40, emoji: "🇧🇷", cor: "from-cyan-700 to-slate-900", fotoUrl: imgGuerra, titulo: "BRASIL NA GUERRA", texto: "Brasil declara guerra ao Eixo em 1942 após navios brasileiros serem afundados. A FEB luta na Itália (1944–45) e vence a Batalha de Monte Castelo." },
    ],
    falaFinal: "Três frentes. Guerra global de verdade — inclusive com Brasil.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em que ano a Alemanha invadiu a Polônia (início da guerra)?", fotoUrl: imgGuerra, cards: [{ id: "1939", emoji: "⚔️", titulo: "1939", cor: "from-teal-600 to-slate-900" }, { id: "1929", emoji: "📉", titulo: "1929", cor: "from-amber-600 to-slate-900" }, { id: "1945", emoji: "🕊️", titulo: "1945", cor: "from-slate-600 to-slate-900" }], correta: "1939", feedbackAcerto: "Correto. 1º de setembro de 1939.", feedbackErro: "É 1939. 1929 = Crise; 1945 = FIM da guerra." },
      { id: "q2", pergunta: "Onde foi lançada a primeira BOMBA ATÔMICA da história?", fotoUrl: imgGuerra, cards: [{ id: "hir", emoji: "☢️", titulo: "Hiroshima (Japão)", cor: "from-teal-600 to-slate-900" }, { id: "ber", emoji: "🇩🇪", titulo: "Berlim (Alemanha)", cor: "from-amber-600 to-slate-900" }, { id: "lon", emoji: "🇬🇧", titulo: "Londres", cor: "from-slate-600 to-slate-900" }], correta: "hir", feedbackAcerto: "Correto. Hiroshima, 6 de agosto de 1945.", feedbackErro: "É Hiroshima (Japão), depois Nagasaki." },
      { id: "q3", pergunta: "O Brasil lutou na 2ª Guerra ao lado de quem?", fotoUrl: imgGuerra, cards: [{ id: "al", emoji: "🇺🇸", titulo: "Aliados (EUA, UK, URSS)", cor: "from-teal-600 to-slate-900" }, { id: "ei", emoji: "🇩🇪", titulo: "Eixo (Alemanha, Itália, Japão)", cor: "from-amber-600 to-slate-900" }, { id: "ne", emoji: "🕊️", titulo: "Ficou neutro", cor: "from-slate-600 to-slate-900" }], correta: "al", feedbackAcerto: "Correto. FEB lutou na Itália em 1944–45.", feedbackErro: "É pelos Aliados. Brasil declarou guerra ao Eixo em 1942." },
    ],
    falaFinal: "Você já mapeia a guerra global.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Os dois blocos da 2ª Guerra.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgGuerra,
    camadas: [
      { id: "al", rotulo: "Aliados (vencedores)", emoji: "🇺🇸", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "EUA + Reino Unido + URSS + França Livre + Brasil + China. Venceram e organizaram o pós-guerra.", exemplos: [] },
      { id: "ei", rotulo: "Eixo (derrotados)", emoji: "🇩🇪", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Alemanha nazista + Itália fascista + Japão imperial. Derrotados; Alemanha e Japão foram ocupados e reconstruídos.", exemplos: [] },
    ],
    falaFinal: "Aliados vencem. Nasce a ONU (1945) e a Declaração Universal dos Direitos Humanos (1948).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos de 1939 a 1945.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos da 2ª Guerra",
    paradas: [
      { id: "pol", emoji: "⚔️", rotulo: "1. Invasão da Polônia (1939)", fotoUrl: imgGuerra, descricao: "Início da guerra na Europa." },
      { id: "pea", emoji: "🇯🇵", rotulo: "2. Pearl Harbor (1941)", fotoUrl: imgGuerra, descricao: "Japão ataca; EUA entram na guerra." },
      { id: "dday", emoji: "🌊", rotulo: "3. Dia D — Normandia (1944)", fotoUrl: imgGuerra, descricao: "Aliados desembarcam na França." },
      { id: "hir", emoji: "☢️", rotulo: "4. Hiroshima (1945)", fotoUrl: imgGuerra, descricao: "Bomba atômica; Japão se rende." },
    ],
    ordemCerta: ["pol", "pea", "dday", "hir"],
    feedbackAcerto: "Perfeito. 6 anos de guerra em 4 marcos.",
    feedbackErro: "Comece por 1939 (Polônia) e siga a cronologia.",
    falaFinal: "4 marcos. 6 anos. 70 milhões de mortos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 3 da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 3 — 2ª Guerra e Holocausto",
    paragrafos: [
      { id: "p1", texto: "Em 1º de setembro de 1939 a Alemanha nazista invadiu a Polônia. Reino Unido e França declararam guerra e começou a SEGUNDA GUERRA MUNDIAL — 6 anos, 70 milhões de mortos, cidades inteiras arrasadas por bombardeios aéreos, arma nuclear usada pela primeira vez.", chaves: ["Segunda Guerra Mundial"], definicoes: { "Segunda Guerra Mundial": "Conflito de 1939 a 1945, envolvendo Aliados (EUA, URSS, Reino Unido, Brasil, entre outros) contra o Eixo (Alemanha, Itália, Japão)." }, fotoUrl: imgGuerra },
      { id: "p2", texto: "A Alemanha usou a BLITZKRIEG — guerra-relâmpago com tanques, aviões e infantaria. Derrotou a França em 6 semanas em 1940. Só travou quando tentou invadir a URSS (1941) e enfrentou o inverno russo e a resistência em STALINGRADO (1942–43).", chaves: ["Blitzkrieg"], definicoes: { Blitzkrieg: "Tática militar alemã baseada em velocidade e uso combinado de tanques, aviões e infantaria mecanizada." }, fotoUrl: imgGuerra },
      { id: "p3", texto: "Enquanto avançava, o regime nazista organizou o HOLOCAUSTO — extermínio sistemático de cerca de 6 milhões de judeus e mais 5 milhões de ciganos, homossexuais, deficientes e opositores em campos como AUSCHWITZ. Foi o primeiro genocídio industrial da história.", chaves: ["Holocausto", "Auschwitz"], definicoes: { Holocausto: "Extermínio sistemático de judeus e outras minorias pelo regime nazista, com cerca de 11 milhões de mortos no total.", Auschwitz: "Maior campo de concentração e extermínio nazista, na Polônia; hoje é memorial contra o esquecimento." }, fotoUrl: imgHolo },
      { id: "p4", texto: "A guerra terminou em 1945: Berlim caiu em maio, e em agosto os EUA lançaram BOMBAS ATÔMICAS em Hiroshima e Nagasaki. O Japão se rendeu. Depois disso o mundo criou a ONU (1945) e a DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS (1948) — pra que 'nunca mais'.", chaves: ["Direitos Humanos"], definicoes: { "Direitos Humanos": "Direitos considerados fundamentais para toda pessoa, proclamados pela ONU em 1948 depois do Holocausto." }, fotoUrl: imgHolo },
    ],
    falaFinal: "Leitura concluída. A 2ª Guerra criou os limites éticos do mundo em que vivemos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento ao bloco certo.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "al", emoji: "🇺🇸", rotulo: "Aliados" },
      { id: "ei", emoji: "🇩🇪", rotulo: "Eixo" },
      { id: "leg", emoji: "🕯️", rotulo: "Legado ético" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "EUA", emoji: "🇺🇸", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Entram em 1941", emoji: "⚓", cor: "from-cyan-600 to-slate-900" }, contexto: "Após Pearl Harbor.", pecaCertaId: "al", feedbackAcerto: "Correto. EUA = Aliados.", feedbackErro: "É Aliados." },
      { id: "r2", municipioA: { nome: "Itália fascista", emoji: "🇮🇹", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Aliada de Hitler", emoji: "⛓️", cor: "from-amber-600 to-slate-900" }, contexto: "Mussolini.", pecaCertaId: "ei", feedbackAcerto: "Correto. Itália = Eixo.", feedbackErro: "É Eixo." },
      { id: "r3", municipioA: { nome: "Declaração dos Direitos Humanos (1948)", emoji: "🕊️", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Resposta ao Holocausto", emoji: "🕯️", cor: "from-slate-600 to-slate-900" }, contexto: "ONU, Paris.", pecaCertaId: "leg", feedbackAcerto: "Correto. É legado ético do pós-guerra.", feedbackErro: "É Legado ético." },
      { id: "r4", municipioA: { nome: "URSS", emoji: "☭", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Toma Berlim em 1945", emoji: "🏳️", cor: "from-cyan-600 to-slate-900" }, contexto: "Frente Oriental.", pecaCertaId: "al", feedbackAcerto: "Correto. URSS = Aliados na 2ª Guerra.", feedbackErro: "É Aliados." },
      { id: "r5", municipioA: { nome: "Japão imperial", emoji: "🇯🇵", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Pearl Harbor", emoji: "💥", cor: "from-amber-600 to-slate-900" }, contexto: "Ataque de 1941.", pecaCertaId: "ei", feedbackAcerto: "Correto. Japão = Eixo.", feedbackErro: "É Eixo." },
      { id: "r6", municipioA: { nome: "ONU (1945)", emoji: "🌍", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "'Nunca mais uma guerra assim'", emoji: "🕊️", cor: "from-slate-600 to-slate-900" }, contexto: "Criada em San Francisco.", pecaCertaId: "leg", feedbackAcerto: "Correto. ONU é legado direto da 2ª Guerra.", feedbackErro: "É Legado ético." },
    ],
    falaFinal: "6 rodadas. Você já separa Aliados, Eixo e o legado ético.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Vítimas do Holocausto — proporção aproximada.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgHolo,
    fatias: [
      { id: "jud", rotulo: "Judeus (~55%)", emoji: "✡️", percentual: 55, cor: "#475569", descricao: "Cerca de 6 milhões de judeus assassinados em campos de extermínio, guetos e execuções em massa.", exemplos: [] },
      { id: "out", rotulo: "Outras vítimas (~45%)", emoji: "🕯️", percentual: 45, cor: "#0f172a", descricao: "Ciganos, homossexuais, deficientes, testemunhas de Jeová, poloneses, prisioneiros soviéticos e opositores políticos — cerca de 5 milhões.", exemplos: [] },
    ],
    falaFinal: "11 milhões de pessoas assassinadas por serem quem eram. Nunca esquecer.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgHolo,
    perguntas: [
      { id: "av1", pergunta: "A 2ª Guerra Mundial começou com:", opcoes: [{ id: "a", texto: "A quebra da Bolsa de NY.", correta: false }, { id: "b", texto: "A invasão da Polônia pela Alemanha (1939).", correta: true }, { id: "c", texto: "A tomada da Bastilha.", correta: false }], feedbackAcerto: "Correto. 1º/set/1939, Polônia.", feedbackErro: "É a invasão da Polônia (1939)." },
      { id: "av2", pergunta: "O HOLOCAUSTO foi:", opcoes: [{ id: "a", texto: "Uma batalha naval do Pacífico.", correta: false }, { id: "b", texto: "O extermínio sistemático de judeus e outras minorias pelo regime nazista.", correta: true }, { id: "c", texto: "Uma bomba lançada em Nagasaki.", correta: false }], feedbackAcerto: "Correto. Cerca de 11 milhões de vítimas ao todo.", feedbackErro: "É o extermínio nazista de judeus e minorias." },
      { id: "av3", pergunta: "O Brasil, na 2ª Guerra:", opcoes: [{ id: "a", texto: "Ficou neutro o tempo todo.", correta: false }, { id: "b", texto: "Enviou a FEB para lutar ao lado dos Aliados na Itália.", correta: true }, { id: "c", texto: "Aliou-se à Alemanha nazista.", correta: false }], feedbackAcerto: "Correto. FEB lutou na Itália (1944–45) e venceu Monte Castelo.", feedbackErro: "É a FEB, ao lado dos Aliados na Itália." },
    ],
    selo: { nome: "Nó 3 da Teia", subtitulo: "2ª Guerra e Direitos Humanos", emoji: "🕯️", cor: "from-slate-500 to-slate-900", fotoUrl: imgHolo },
    falaFinal: "Nó 3 destravado. Os Direitos Humanos nasceram desse abismo pra impedir o retorno dele.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Nó 3 — 2ª Guerra e Holocausto" },
};
