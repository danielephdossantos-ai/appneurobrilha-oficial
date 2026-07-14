import type { AulaGeoV1 } from "../../types";
import { url as imgCong } from "@/assets/historia-5ano/congresso-nacional.jpg.asset.json";
import { url as imgPlan } from "@/assets/historia-5ano/palacio-planalto.jpg.asset.json";
import { url as imgStf } from "@/assets/historia-5ano/stf-brasilia.jpg.asset.json";
import { url as imgInfo } from "@/assets/historia-5ano/tres-poderes-infografico.jpg.asset.json";
import { url as imgUrna } from "@/assets/historia-5ano/urna-eletronica.jpg.asset.json";
/**
 * História · 5º Ano · Unidade 3 · Aula 01
 * "As Formas de Governo e a Organização Política"
 * Restaura a Página 3: O Palácio dos Três Pilares.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-formas-governo",
  titulo: "As Formas de Governo e os Três Poderes",
  iconeTrilha: "🏛️",
  bncc: ["EF05HI03"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a LUPA sobre o Palácio do Planalto — sede do Poder Executivo do Brasil.",
    mapaUrl: imgPlan,
    imagemDestaqueUrl: imgInfo,
    aurora:
      "Pequeno Historiador, na Inglaterra existe um REI que governa a vida inteira. No Brasil, o presidente muda a cada 4 anos. Por quê? Porque temos FORMAS de governo diferentes.",
    falaFinal: "Nesta aula você acende a terceira Tocha: O Palácio dos Três Pilares.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: no Brasil, quem cria as leis, quem executa, e quem julga?",
    pergunta: "É tudo a mesma pessoa?",
    fotoUrl: imgInfo,
    opcoes: [
      { id: "sep", titulo: "São TRÊS poderes separados", subtitulo: "Executivo, Legislativo e Judiciário", emoji: "⚖️", cor: "from-emerald-600 to-teal-800", fotoUrl: imgInfo },
      { id: "um", titulo: "É tudo o Presidente", subtitulo: "ele faz, executa e julga sozinho", emoji: "👑", cor: "from-slate-500 to-slate-700", fotoUrl: imgPlan },
    ],
    respostaCerta: "sep",
    feedbackAcerto: "Correto. O filósofo Montesquieu criou a teoria da DIVISÃO DOS TRÊS PODERES pra evitar tirania. O Brasil adotou.",
    feedbackErro: "Não. Se uma pessoa fizesse tudo, seria DITADURA. Por isso existem TRÊS poderes independentes.",
    falaFinal: "Guarde: o poder é DIVIDIDO pra ninguém abusar. É como um jogo com árbitros diferentes.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas do vocabulário político.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      { id: "mon", capa: "Monarquia", emoji: "👑", cor: "from-amber-600 to-orange-800", fotoUrl: imgPlan, conteudo: "MONARQUIA é a forma de governo em que o cargo é HERDADO — passa de pai/mãe pra filho(a). O governante é chamado REI ou RAINHA e geralmente fica no poder a vida inteira.", exemplo: "Exemplo: Inglaterra, Espanha, Japão. O Brasil foi Monarquia até 1889." },
      { id: "rep", capa: "República", emoji: "🏛️", cor: "from-emerald-600 to-teal-800", fotoUrl: imgCong, conteudo: "REPÚBLICA (do latim 'res publica' = coisa pública) é a forma em que o cargo NÃO é herdado — é ESCOLHIDO pelo voto por tempo determinado. Presidente governa 4 anos e sai.", exemplo: "Exemplo: Brasil, EUA, França. O Brasil é República desde 1889." },
      { id: "dem", capa: "Democracia", emoji: "🗳️", cor: "from-sky-600 to-blue-800", fotoUrl: imgUrna, conteudo: "DEMOCRACIA é o SISTEMA POLÍTICO em que o povo escolhe os governantes pelo VOTO. Pode existir em República (Brasil) ou em Monarquia (Inglaterra tem rei mas também tem parlamento eleito).", exemplo: "Exemplo: a cada 4 anos os brasileiros votam pra Presidente, Governador e Prefeito." },
    ],
    falaFinal: "Monarquia + República + Democracia. Trio essencial pra entender política.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o INFOGRÁFICO oficial dos Três Poderes do Brasil. Toque em cada pilar.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgInfo,
    pontos: [
      { id: "ex", x: 18, y: 55, emoji: "🏛️", cor: "from-emerald-600 to-teal-800", fotoUrl: imgPlan, titulo: "1. PODER EXECUTIVO", texto: "ADMINISTRA o país e EXECUTA as leis. Cuida das obras, escolas, hospitais. Presidente (Brasil), Governadores (estados), Prefeitos (municípios)." },
      { id: "le", x: 50, y: 55, emoji: "📜", cor: "from-amber-600 to-orange-800", fotoUrl: imgCong, titulo: "2. PODER LEGISLATIVO", texto: "CRIA as LEIS. Debate e vota o que o país deve seguir. Senadores e Deputados (Congresso Nacional), Deputados Estaduais (Assembleia), Vereadores (Câmara Municipal)." },
      { id: "ju", x: 82, y: 55, emoji: "⚖️", cor: "from-sky-600 to-blue-800", fotoUrl: imgStf, titulo: "3. PODER JUDICIÁRIO", texto: "JULGA se as leis estão sendo cumpridas. Resolve conflitos. Juízes, Desembargadores, Ministros do STF (Supremo Tribunal Federal)." },
    ],
    falaFinal: "Executivo EXECUTA. Legislativo CRIA. Judiciário JULGA. Cada um fiscaliza o outro.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas pra fixar os Três Poderes.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual poder CRIA as leis do país?", fotoUrl: imgCong, cards: [{ id: "l", emoji: "📜", titulo: "Legislativo", cor: "from-amber-500 to-orange-700" }, { id: "e", emoji: "🏛️", titulo: "Executivo", cor: "from-emerald-500 to-teal-700" }, { id: "j", emoji: "⚖️", titulo: "Judiciário", cor: "from-sky-500 to-blue-700" }], correta: "l", feedbackAcerto: "Correto. Legislativo CRIA leis.", feedbackErro: "Quem CRIA leis é o LEGISLATIVO (Congresso)." },
      { id: "q2", pergunta: "Onde o Presidente da República trabalha?", fotoUrl: imgPlan, cards: [{ id: "p", emoji: "🏛️", titulo: "Palácio do Planalto", cor: "from-emerald-500 to-teal-700" }, { id: "c", emoji: "📜", titulo: "Congresso Nacional", cor: "from-amber-500 to-orange-700" }, { id: "s", emoji: "⚖️", titulo: "STF", cor: "from-sky-500 to-blue-700" }], correta: "p", feedbackAcerto: "Isso. Palácio do Planalto — sede do Executivo.", feedbackErro: "Presidente = Executivo = Palácio do Planalto." },
      { id: "q3", pergunta: "Qual a forma de governo do Brasil hoje?", fotoUrl: imgUrna, cards: [{ id: "r", emoji: "🏛️", titulo: "República", cor: "from-emerald-500 to-teal-700" }, { id: "m", emoji: "👑", titulo: "Monarquia", cor: "from-amber-500 to-orange-700" }, { id: "d", emoji: "⛔", titulo: "Ditadura", cor: "from-slate-500 to-slate-700" }], correta: "r", feedbackAcerto: "Correto. República desde 1889.", feedbackErro: "O Brasil é REPÚBLICA (cargos eleitos, não herdados)." },
    ],
    falaFinal: "Radar pousado. Você já mapeia o poder político brasileiro.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores em cima do infográfico dos Três Poderes.",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgInfo,
    camadas: [
      { id: "eleitos", rotulo: "Eleitos pelo voto", emoji: "🗳️", cor: "from-emerald-600 to-teal-800", rect: { x: 0, y: 10, w: 66, h: 80 }, descricao: "Executivo e Legislativo são ELEITOS pelo povo. Presidente, Governador, Prefeito, Senador, Deputado, Vereador — todos escolhidos nas eleições." },
      { id: "nomeados", rotulo: "Nomeados/concurso", emoji: "⚖️", cor: "from-sky-600 to-blue-800", rect: { x: 66, y: 10, w: 34, h: 80 }, descricao: "Judiciário NÃO é eleito. Juízes entram por concurso. Ministros do STF são nomeados pelo Presidente e aprovados pelo Senado." },
    ],
    falaFinal: "Dois tipos de escolha: voto direto (Executivo/Legislativo) e concurso/nomeação (Judiciário).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene o caminho de uma NOVA LEI no Brasil.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Como uma lei é criada?",
    paradas: [
      { id: "prop", emoji: "✍️", rotulo: "1. Proposta", fotoUrl: imgCong, descricao: "Um Deputado ou Senador propõe a lei." },
      { id: "debate", emoji: "🗣️", rotulo: "2. Debate e votação", fotoUrl: imgCong, descricao: "Câmara e Senado debatem e votam." },
      { id: "assina", emoji: "✒️", rotulo: "3. Presidente assina", fotoUrl: imgPlan, descricao: "Presidente sanciona (assina) a lei." },
      { id: "cumpre", emoji: "⚖️", rotulo: "4. Judiciário fiscaliza", fotoUrl: imgStf, descricao: "STF verifica se a lei respeita a Constituição." },
    ],
    ordemCerta: ["prop", "debate", "assina", "cumpre"],
    feedbackAcerto: "Perfeito. Proposta → Debate → Sanção → Fiscalização.",
    feedbackErro: "Essa não é a próxima etapa. Pense na trilha de uma lei.",
    falaFinal: "Você acabou de descrever COMO uma lei nasce no Brasil.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 3 do Memorial. Toque nas palavras destacadas.",
    tituloLivro: "📜 Memorial da Cidadania e dos Direitos",
    subtitulo: "Página 3 — O Palácio dos Três Pilares",
    paragrafos: [
      { id: "p1", texto: "O Brasil é uma REPÚBLICA PRESIDENCIALISTA DEMOCRÁTICA. Isso quer dizer três coisas: os cargos não são herdados, quem manda é o Presidente eleito, e o povo escolhe pelo voto.", chaves: ["República"], definicoes: { República: "Forma de governo em que o cargo político não é herdado, mas escolhido pelo voto por tempo determinado." }, fotoUrl: imgPlan },
      { id: "p2", texto: "Pra evitar que uma pessoa mande em tudo, o filósofo Montesquieu criou a teoria da DIVISÃO DOS TRÊS PODERES. O Brasil adotou: EXECUTIVO (executa), LEGISLATIVO (cria) e JUDICIÁRIO (julga).", chaves: ["Executivo", "Legislativo", "Judiciário"], definicoes: { Executivo: "Poder que ADMINISTRA o país e executa as leis. Presidente, Governadores, Prefeitos.", Legislativo: "Poder que CRIA as leis. Senadores, Deputados, Vereadores.", Judiciário: "Poder que JULGA se as leis estão sendo cumpridas. Juízes, Ministros do STF." }, fotoUrl: imgInfo },
      { id: "p3", texto: "A cada 4 anos, todo brasileiro com 16 anos ou mais pode VOTAR na URNA ELETRÔNICA pra escolher Executivo (Presidente/Governador/Prefeito) e Legislativo (Deputados/Vereadores). Isso é a REPÚBLICA em ação.", chaves: ["Voto"], definicoes: { Voto: "Direito e dever do cidadão de escolher seus representantes. No Brasil é obrigatório dos 18 aos 70 anos." }, fotoUrl: imgUrna },
    ],
    falaFinal: "Leitura concluída. Você já explica como o poder político do Brasil funciona.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de organização política! Cada rodada mostra uma pessoa. Em qual PODER ela trabalha?",
    instrucao: "⏱️ Toque no poder correto antes do tempo acabar",
    duracaoSegundos: 20,
    pecas: [
      { id: "e", emoji: "🏛️", rotulo: "Executivo" },
      { id: "l", emoji: "📜", rotulo: "Legislativo" },
      { id: "j", emoji: "⚖️", rotulo: "Judiciário" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Presidente da República", emoji: "🎖️", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Palácio do Planalto", emoji: "🏛️", cor: "from-emerald-500 to-teal-700" }, contexto: "Chefe do governo federal.", pecaCertaId: "e", feedbackAcerto: "Correto. Presidente = EXECUTIVO.", feedbackErro: "Presidente = EXECUTIVO (executa as leis)." },
      { id: "r2", municipioA: { nome: "Senador da República", emoji: "👔", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Congresso Nacional", emoji: "📜", cor: "from-orange-500 to-red-700" }, contexto: "Representa um estado no Senado.", pecaCertaId: "l", feedbackAcerto: "Correto. Senador = LEGISLATIVO.", feedbackErro: "Senador CRIA leis = LEGISLATIVO." },
      { id: "r3", municipioA: { nome: "Ministro do STF", emoji: "⚖️", cor: "from-sky-600 to-blue-800" }, municipioB: { nome: "Supremo Tribunal", emoji: "🏛️", cor: "from-blue-500 to-indigo-700" }, contexto: "Julga casos importantes do país.", pecaCertaId: "j", feedbackAcerto: "Correto. STF = JUDICIÁRIO.", feedbackErro: "Ministro do STF = JUDICIÁRIO (julga)." },
      { id: "r4", municipioA: { nome: "Prefeito da cidade", emoji: "🏙️", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Executa obras municipais", emoji: "🚧", cor: "from-emerald-500 to-teal-700" }, contexto: "Comanda a prefeitura.", pecaCertaId: "e", feedbackAcerto: "Correto. Prefeito = EXECUTIVO municipal.", feedbackErro: "Prefeito = EXECUTIVO (executa no município)." },
      { id: "r5", municipioA: { nome: "Vereador", emoji: "👨‍💼", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Câmara Municipal", emoji: "📜", cor: "from-orange-500 to-red-700" }, contexto: "Cria leis municipais.", pecaCertaId: "l", feedbackAcerto: "Correto. Vereador = LEGISLATIVO municipal.", feedbackErro: "Vereador CRIA leis municipais = LEGISLATIVO." },
      { id: "r6", municipioA: { nome: "Juiz de Direito", emoji: "🧑‍⚖️", cor: "from-sky-600 to-blue-800" }, municipioB: { nome: "Fórum e Tribunal", emoji: "⚖️", cor: "from-blue-500 to-indigo-700" }, contexto: "Julga processos.", pecaCertaId: "j", feedbackAcerto: "Correto. Juiz = JUDICIÁRIO.", feedbackErro: "Juiz JULGA = JUDICIÁRIO." },
    ],
    falaFinal: "6 rodadas! Você já sabe onde cada cargo trabalha.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos Três Poderes: dividida entre EXECUÇÃO (fazer) e CONTROLE (criar/julgar as leis).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgInfo,
    fatias: [
      { id: "exec", rotulo: "Executivo (~33%)", emoji: "🏛️", percentual: 33, cor: "#0f766e", descricao: "EXECUTA as leis. Presidente, Governadores, Prefeitos. Comanda ministérios, obras, escolas públicas.", exemplos: ["🎖️ Presidente", "🏙️ Prefeito"] },
      { id: "controle", rotulo: "Legislativo + Judiciário (~67%)", emoji: "⚖️", percentual: 67, cor: "#b45309", descricao: "CRIA e JULGA as leis. Legislativo (Senadores, Deputados, Vereadores) escreve as leis. Judiciário (Juízes, STF) fiscaliza se são cumpridas.", exemplos: ["📜 Congresso", "⚖️ STF"] },
    ],
    falaFinal: "Três pilares em equilíbrio. Se um cai, o país desequilibra.",
  },


  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra ganhar a Chancela dos Três Poderes.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgInfo,
    perguntas: [
      { id: "av1", pergunta: "Qual a forma de governo do Brasil, onde os cargos são eleitos por tempo determinado?", opcoes: [{ id: "a", texto: "Monarquia Hereditária.", correta: false }, { id: "b", texto: "República.", correta: true }, { id: "c", texto: "Império.", correta: false }], feedbackAcerto: "Correto! República.", feedbackErro: "É REPÚBLICA — 'coisa pública', cargo eleito." },
      { id: "av2", pergunta: "Qual poder é responsável por CRIAR as leis do país?", opcoes: [{ id: "a", texto: "Executivo.", correta: false }, { id: "b", texto: "Legislativo.", correta: true }, { id: "c", texto: "Judiciário.", correta: false }], feedbackAcerto: "Correto! Legislativo cria as leis.", feedbackErro: "É o LEGISLATIVO (Congresso Nacional)." },
      { id: "av3", pergunta: "Quem faz parte do Poder Executivo do Brasil?", opcoes: [{ id: "a", texto: "Juízes e Ministros do STF.", correta: false }, { id: "b", texto: "Presidente, Governadores e Prefeitos.", correta: true }, { id: "c", texto: "Senadores e Vereadores.", correta: false }], feedbackAcerto: "Isso! Executivo = Presidente + Governadores + Prefeitos.", feedbackErro: "Executivo = Presidente, Governadores, Prefeitos." },
    ],
    selo: { nome: "Chancela dos Três Poderes", subtitulo: "Insígnia oficial do Memorial da Cidadania", emoji: "🏛️", cor: "from-sky-400 to-blue-600", fotoUrl: imgInfo },
    falaFinal: "Página 3 restaurada. A terceira Tocha brilha: O Palácio dos Três Pilares.",
  },

  recompensa: { xp: 450, moedas: 350, medalha: "Chancela dos Três Poderes" },
};
