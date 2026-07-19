import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as ovoImg } from "@/assets/ciencias-3ano/u3/ovo.jpg.asset.json";
import { url as lagartaImg } from "@/assets/ciencias-3ano/u3/lagarta.jpg.asset.json";
import { url as casuloImg } from "@/assets/ciencias-3ano/u3/casulo.jpg.asset.json";
import { url as girinoImg } from "@/assets/ciencias-3ano/u3/girino.jpg.asset.json";
import { url as galinhaImg } from "@/assets/ciencias-3ano/u3/galinha.jpg.asset.json";
import { url as borboletaImg } from "@/assets/ciencias-3ano/u2/borboleta.jpg.asset.json";
import { url as sapoImg } from "@/assets/ciencias-3ano/u2/sapo.jpg.asset.json";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-ciclo-vida",
  titulo: "Ciclo de Vida dos Animais",
  iconeTrilha: "🦋",
  bncc: ["EF03CI04"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe para o galho: ovinho, lagarta e borboleta juntos. É coincidência?",
    mapaUrl: borboletaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Guardião, o Brilha encontrou um ovinho, uma lagarta e uma borboleta no mesmo galho. Não são três bichos diferentes: são o MESMO animal em fases diferentes da vida!",
    falaFinal: "Isso se chama CICLO DE VIDA. Nossa missão é entender essa transformação incrível.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Faça sua HIPÓTESE de cientista.",
    pergunta: "O que a lagarta vira quando cresce?",
    fotoUrl: lagartaImg,
    opcoes: [
      { id: "borb", titulo: "BORBOLETA", subtitulo: "muda totalmente", emoji: "🦋", cor: "from-orange-500 to-red-700" },
      { id: "lagartona", titulo: "LAGARTA GIGANTE", subtitulo: "só cresce", emoji: "🐛", cor: "from-emerald-500 to-green-700" },
      { id: "outro", titulo: "OUTRO BICHO", subtitulo: "vira uma abelha", emoji: "🐝", cor: "from-amber-500 to-yellow-700" },
    ],
    respostaCerta: "borb",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! A lagarta se fecha num casulo e ressurge transformada em BORBOLETA.",
    feedbackErro: "A lagarta não fica lagarta pra sempre. Ela sofre METAMORFOSE e vira borboleta.",
    falaFinal: "Esse processo de MUDAR DE FORMA se chama metamorfose. Nem todo animal passa por isso.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras da biologia do desenvolvimento.",
    instrucao: "Vocabulário do Ciclo de Vida",
    cadernos: [
      { id: "ciclo", capa: "CICLO DE VIDA", emoji: "🔄", cor: "from-emerald-500 to-green-700", conteudo: "As etapas que todo ser vivo passa desde o NASCIMENTO até o fim da vida.", exemplo: "Ex.: nasce → cresce → se reproduz → envelhece.", fotoUrl: galinhaImg },
      { id: "meta", capa: "METAMORFOSE", emoji: "🦋", cor: "from-orange-500 to-red-700", conteudo: "Transformação PROFUNDA da forma do corpo de alguns animais durante o crescimento.", exemplo: "Ex.: lagarta → casulo → borboleta. Girino → sapo.", fotoUrl: casuloImg },
      { id: "repro", capa: "REPRODUÇÃO", emoji: "🥚", cor: "from-amber-500 to-yellow-700", conteudo: "Etapa em que os adultos dão origem a novos FILHOTES, garantindo que a espécie continue existindo.", exemplo: "Ex.: galinha bota ovo, gata tem filhote.", fotoUrl: ovoImg },
    ],
    falaFinal: "Ciclo, metamorfose, reprodução. Três conceitos fundamentais.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "As 4 fases da borboleta. Toque em cada uma.",
    instrucao: "Toque nas fases",
    mapaUrl: borboletaImg,
    pontos: [
      { id: "ovo", x: 15, y: 30, emoji: "🥚", cor: "from-yellow-400 to-amber-600", titulo: "1. Ovo", texto: "A borboleta fêmea põe ovinhos nas folhas.", fotoUrl: ovoImg },
      { id: "larva", x: 40, y: 60, emoji: "🐛", cor: "from-emerald-500 to-green-700", titulo: "2. Lagarta (larva)", texto: "Nasce e come muitas folhas para crescer.", fotoUrl: lagartaImg },
      { id: "cas", x: 65, y: 40, emoji: "🛡️", cor: "from-lime-500 to-green-700", titulo: "3. Casulo (pupa)", texto: "Se envolve numa crisálida e se transforma.", fotoUrl: casuloImg },
      { id: "adulto", x: 85, y: 20, emoji: "🦋", cor: "from-orange-500 to-red-700", titulo: "4. Borboleta", texto: "Sai transformada, com asas coloridas, e voa!", fotoUrl: borboletaImg },
    ],
    falaFinal: "Do ovo à borboleta: 4 fases, 4 corpos diferentes. Isso é METAMORFOSE completa.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O que é METAMORFOSE?", fotoUrl: casuloImg,
        cards: [
          { id: "a", emoji: "🦋", titulo: "Mudança profunda de forma durante o crescimento", cor: "from-emerald-500 to-green-700" },
          { id: "b", emoji: "🏃", titulo: "Aprender a correr mais rápido", cor: "from-slate-500 to-slate-700" },
          { id: "c", emoji: "🍎", titulo: "Comer mais fruta", cor: "from-red-500 to-rose-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. Metamorfose = mudar radicalmente de forma.", feedbackErro: "Metamorfose é MUDAR DE FORMA, não correr." },
      { id: "q2", pergunta: "Qual animal NÃO passa por metamorfose?", fotoUrl: galinhaImg,
        cards: [
          { id: "a", emoji: "🦋", titulo: "Borboleta", cor: "from-orange-500 to-red-700" },
          { id: "b", emoji: "🐔", titulo: "Galinha (só cresce, não muda de forma)", cor: "from-emerald-500 to-green-700" },
          { id: "c", emoji: "🐸", titulo: "Sapo", cor: "from-lime-500 to-green-700" },
        ], correta: "b",
        feedbackAcerto: "Correto. Pintinho vira galinha maior, mas mantém a mesma forma.", feedbackErro: "Pintinho só cresce. Já sapo (girino) e borboleta MUDAM DE FORMA." },
      { id: "q3", pergunta: "Qual é a fase do sapo que vive só na água?", fotoUrl: girinoImg,
        cards: [
          { id: "a", emoji: "🐸", titulo: "Sapo adulto", cor: "from-slate-500 to-slate-700" },
          { id: "b", emoji: "🐟", titulo: "Girino — respira como peixe", cor: "from-cyan-500 to-blue-700" },
          { id: "c", emoji: "🥚", titulo: "Ovo dentro da terra", cor: "from-amber-500 to-orange-700" },
        ], correta: "b",
        feedbackAcerto: "Sim! Girino tem cauda de peixinho e vive na água.", feedbackErro: "Girino é a fase aquática do sapo — respira embaixo d'água." },
    ],
    falaFinal: "Três acertos. Agora bora ver a diferença entre crescer e metamorfosear.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois jeitos de crescer no reino animal.",
    instrucao: "Toque nos interruptores",
    mapaUrl: borboletaImg,
    camadas: [
      { id: "meta", rotulo: "Com metamorfose", emoji: "🦋", cor: "from-orange-500 to-red-700", rect: { x: 2, y: 30, w: 47, h: 65 }, descricao: "Muda RADICALMENTE de forma: borboleta, sapo, mosca, joaninha.", fotoUrl: casuloImg },
      { id: "direto", rotulo: "Sem metamorfose", emoji: "🐔", cor: "from-emerald-500 to-green-700", rect: { x: 50, y: 30, w: 48, h: 65 }, descricao: "Só cresce e amadurece: galinha, cachorro, humano, gato.", fotoUrl: galinhaImg },
    ],
    falaFinal: "Nem todo bicho muda de forma. Alguns só crescem — nós humanos somos assim.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Monte o ciclo da BORBOLETA na ordem certa.",
    instrucao: "Toque nas paradas na ordem correta",
    pergunta: "Ciclo de vida da borboleta",
    paradas: [
      { id: "ovo", emoji: "🥚", rotulo: "1. Ovo na folha", descricao: "Borboleta põe ovinho.", fotoUrl: ovoImg },
      { id: "lagarta", emoji: "🐛", rotulo: "2. Lagarta come folhas", descricao: "Larva comilona cresce.", fotoUrl: lagartaImg },
      { id: "casulo", emoji: "🛡️", rotulo: "3. Casulo (crisálida)", descricao: "Se fecha e transforma.", fotoUrl: casuloImg },
      { id: "borb", emoji: "🦋", rotulo: "4. Borboleta voa", descricao: "Sai adulta, colorida.", fotoUrl: borboletaImg },
      { id: "novoovo", emoji: "🔄", rotulo: "5. Novo ciclo", descricao: "Adulta bota novos ovos. Recomeça.", fotoUrl: borboletaImg },
    ],
    ordemCerta: ["ovo", "lagarta", "casulo", "borb", "novoovo"],
    feedbackAcerto: "Ciclo perfeito! A vida se renova sem parar.",
    feedbackErro: "Repense: ovo → lagarta → casulo → borboleta → novo ovo.",
    falaFinal: "Todo ciclo termina onde começa — é um círculo eterno.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez de ler.",
    tituloLivro: "🔬 Relatório da Expedição · Semana 3",
    subtitulo: "Investigação: como os animais crescem",
    paragrafos: [
      { id: "p1", texto: "Todo ser vivo passa por um CICLO DE VIDA: nasce, cresce, pode se reproduzir e um dia morre. É o trajeto natural da vida.",
        chaves: ["ciclo de vida"], definicoes: { "ciclo de vida": "Etapas da vida de um ser vivo." }, fotoUrl: galinhaImg },
      { id: "p2", texto: "Alguns animais crescem parecidos com os pais e só aumentam de tamanho — como o cachorro e o pintinho. Outros passam por METAMORFOSE: mudam radicalmente de forma.",
        chaves: ["metamorfose"], definicoes: { metamorfose: "Transformação profunda do corpo durante o crescimento." }, fotoUrl: casuloImg },
      { id: "p3", texto: "O SAPO começa como GIRINO na água, respirando como peixe. Depois cria pernas e pulmões, perde a cauda e vira sapo adulto que vive na terra. Uma mudança impressionante!",
        chaves: ["girino"], definicoes: { girino: "Fase larval do sapo, aquática, com cauda." }, fotoUrl: girinoImg },
    ],
    falaFinal: "Um cientista de 3º ano já entende como os animais crescem!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "A Roda do Tempo Vital! Identifique cada fase.",
    instrucao: "⏱️ Leia a cena e escolha a peça certa",
    duracaoSegundos: 25,
    pecas: [
      { id: "ovo", emoji: "🥚", rotulo: "Ovo" },
      { id: "larva", emoji: "🐛", rotulo: "Larva/Girino" },
      { id: "pupa", emoji: "🛡️", rotulo: "Casulo" },
      { id: "adulto", emoji: "🦋", rotulo: "Adulto" },
      { id: "reprod", emoji: "❤️", rotulo: "Reprodução" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Preso na folha", emoji: "🥚", cor: "from-yellow-400 to-amber-600" }, municipioB: { nome: "Vai chocar", emoji: "⏳", cor: "from-slate-500 to-slate-700" }, contexto: "Uma esfera minúscula está grudada embaixo de uma folha verde.", pecaCertaId: "ovo", fotoUrl: ovoImg, feedbackAcerto: "Isso! É a fase OVO.", feedbackErro: "Primeira fase da vida = OVO." },
      { id: "r2", municipioA: { nome: "Come folha sem parar", emoji: "🐛", cor: "from-emerald-500 to-green-700" }, municipioB: { nome: "Corpo listrado", emoji: "🌿", cor: "from-lime-500 to-green-700" }, contexto: "Bichinho listrado come folhas o dia todo pra crescer.", pecaCertaId: "larva", fotoUrl: lagartaImg, feedbackAcerto: "Sim. Fase LARVA (lagarta).", feedbackErro: "Comilona depois do ovo = LARVA." },
      { id: "r3", municipioA: { nome: "Nada com cauda", emoji: "🐟", cor: "from-cyan-500 to-blue-700" }, municipioB: { nome: "Vive na água", emoji: "💧", cor: "from-sky-400 to-blue-600" }, contexto: "Um bichinho na água com cauda de peixe e sem pernas — vai virar sapo!", pecaCertaId: "larva", fotoUrl: girinoImg, feedbackAcerto: "Correto. Girino é a LARVA do sapo.", feedbackErro: "Girino = fase larval do sapo." },
      { id: "r4", municipioA: { nome: "Pendurado quieto", emoji: "🛡️", cor: "from-lime-500 to-green-700" }, municipioB: { nome: "Se transformando", emoji: "✨", cor: "from-emerald-500 to-teal-700" }, contexto: "Estrutura verde pendurada no galho, imóvel. Por dentro, uma revolução!", pecaCertaId: "pupa", fotoUrl: casuloImg, feedbackAcerto: "Exato. CASULO (pupa).", feedbackErro: "Fase imóvel de transformação = CASULO." },
      { id: "r5", municipioA: { nome: "Voa e poliniza", emoji: "🦋", cor: "from-orange-500 to-red-700" }, municipioB: { nome: "Forma final", emoji: "🌸", cor: "from-pink-500 to-rose-700" }, contexto: "Asas coloridas abertas. Sai do casulo e pousa numa flor.", pecaCertaId: "adulto", fotoUrl: borboletaImg, feedbackAcerto: "Sim. ADULTO — última fase.", feedbackErro: "Depois do casulo vem o ADULTO." },
    ],
    falaFinal: "Você domina o ciclo. Pronto pra ser Biólogo do Tempo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "As grandes fases do ciclo de vida.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: borboletaImg,
    fatias: [
      { id: "nasc", rotulo: "Nascimento", emoji: "🥚", percentual: 20, cor: "#f59e0b", descricao: "Sai do ovo ou nasce do corpo da mãe.", exemplos: ["Ovo", "Filhote"], fotoUrl: ovoImg },
      { id: "cresc", rotulo: "Crescimento", emoji: "🐛", percentual: 40, cor: "#10b981", descricao: "Come, cresce, se desenvolve. Pode metamorfosear.", exemplos: ["Lagarta", "Girino", "Pintinho"], fotoUrl: lagartaImg },
      { id: "repro", rotulo: "Reprodução", emoji: "🦋", percentual: 30, cor: "#ec4899", descricao: "Adulto encontra par e gera nova geração.", exemplos: ["Borboleta pondo ovos"], fotoUrl: borboletaImg },
      { id: "morte", rotulo: "Envelhecer", emoji: "🍂", percentual: 10, cor: "#78716c", descricao: "Fim natural do ciclo. Faz parte da vida.", exemplos: ["Sapo idoso"], fotoUrl: sapoImg },
    ],
    falaFinal: "Todo ser vivo passa por essas fases. É a lei da biosfera.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "O que significa metamorfose?", fotoUrl: casuloImg,
        opcoes: [
          { id: "a", texto: "Transformação profunda do corpo durante o crescimento", correta: true },
          { id: "b", texto: "Aprender a correr mais rápido" },
        ], feedbackAcerto: "Perfeito. Metamorfose = mudar de forma.", feedbackErro: "Metamorfose é MUDAR RADICALMENTE DE FORMA." },
      { id: "q2", pergunta: "Como a lagarta vira borboleta?", fotoUrl: borboletaImg,
        opcoes: [
          { id: "a", texto: "Passa pelo casulo e sofre metamorfose", correta: true },
          { id: "b", texto: "Cresce e ganha asas sem mudar de forma" },
        ], feedbackAcerto: "Sim. O casulo é a fase de transformação.", feedbackErro: "Precisa passar pelo CASULO." },
      { id: "q3", pergunta: "O ciclo de vida é...", fotoUrl: galinhaImg,
        opcoes: [
          { id: "a", texto: "As etapas de nascer, crescer, reproduzir e envelhecer", correta: true },
          { id: "b", texto: "Só o dia em que o animal nasce" },
        ], feedbackAcerto: "Correto. Ciclo é o trajeto completo.", feedbackErro: "Ciclo cobre TODAS as etapas da vida." },
    ],
    selo: { nome: "Ampulheta Biológica", subtitulo: "Guardiões da Biosfera · Missão 3 concluída", emoji: "⏳", cor: "from-orange-400 via-amber-500 to-yellow-700" },
    falaFinal: "Ampulheta conquistada. A Árvore dos Ciclos Eternos brilha de novo!",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Ampulheta Biológica" },
};
