import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as tamborImg } from "@/assets/ciencias-3ano/u6/tambor.jpg.asset.json";
import { url as violaoImg } from "@/assets/ciencias-3ano/u6/violao.jpg.asset.json";
import { url as ouvidoImg } from "@/assets/ciencias-3ano/u6/ouvido.jpg.asset.json";
import { url as telefoneImg } from "@/assets/ciencias-3ano/u6/telefone.jpg.asset.json";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-som-vibracao",
  titulo: "O Som e a Vibração",
  iconeTrilha: "🔊",
  bncc: ["EF03CI01"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Coloque a mão na garganta e fale alto. Sente a tremedeira?",
    mapaUrl: tamborImg,
    imagemDestaqueUrl: brilhaImg,
    aurora: "Guardião, quando você fala, seu pescoço treme. Quando bate no tambor, o couro treme. Isso é VIBRAÇÃO — o segredo do som.",
    falaFinal: "Todo som nasce de algo vibrando. Vamos investigar como ondas invisíveis chegam aos ouvidos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "HIPÓTESE.",
    pergunta: "Se você segurar a corda de um violão que está vibrando, o que acontece?",
    fotoUrl: violaoImg,
    opcoes: [
      { id: "para", titulo: "SOM PARA", subtitulo: "vibração acabou", emoji: "🤫", cor: "from-slate-500 to-slate-700" },
      { id: "alto", titulo: "FICA MAIS ALTO", subtitulo: "força aumenta", emoji: "📢", cor: "from-red-500 to-rose-700" },
      { id: "muda", titulo: "MUDA DE COR", subtitulo: "vira colorido", emoji: "🌈", cor: "from-pink-500 to-purple-700" },
    ],
    respostaCerta: "para",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! Sem vibração, sem som. Ele para na hora.",
    feedbackErro: "Segurar a corda PARA a vibração. E sem vibração, o som some.",
    falaFinal: "Sem vibração, nenhum som existe. É a regra número 1 da acústica.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras da física do som.",
    instrucao: "Vocabulário acústico",
    cadernos: [
      { id: "vib", capa: "VIBRAÇÃO", emoji: "〰️", cor: "from-purple-500 to-pink-700", conteudo: "Movimento RÁPIDO para frente e para trás. Origem de todos os sons.", exemplo: "Ex.: corda do violão, pele do tambor, sua garganta.", fotoUrl: violaoImg },
      { id: "onda", capa: "ONDA SONORA", emoji: "🌊", cor: "from-cyan-500 to-blue-700", conteudo: "Perturbações INVISÍVEIS que viajam pelo ar levando o som de um lugar a outro.", exemplo: "Ex.: onda de um sino chegando ao ouvido.", fotoUrl: tamborImg },
      { id: "meio", capa: "MEIO DE PROPAGAÇÃO", emoji: "💨", cor: "from-sky-400 to-blue-600", conteudo: "Material (ar, água, madeira, metal) que serve de CAMINHO para o som viajar.", exemplo: "Ex.: no espaço vazio o som NÃO viaja — não tem ar.", fotoUrl: telefoneImg },
    ],
    falaFinal: "Vibração, onda sonora, meio de propagação. Base da acústica.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Como o som viaja do tambor até o seu ouvido? Toque em cada etapa.",
    instrucao: "Toque em cada etapa",
    mapaUrl: ouvidoImg,
    pontos: [
      { id: "batida", x: 15, y: 30, emoji: "🥁", cor: "from-amber-500 to-orange-700", titulo: "Batida no tambor", texto: "A pele do tambor VIBRA rapidamente.", fotoUrl: tamborImg },
      { id: "ar", x: 45, y: 50, emoji: "〰️", cor: "from-cyan-500 to-blue-700", titulo: "Ondas no ar", texto: "A vibração empurra o ar, criando ondas invisíveis.", fotoUrl: tamborImg },
      { id: "orelha", x: 75, y: 40, emoji: "👂", cor: "from-rose-500 to-pink-700", titulo: "Chega na orelha", texto: "As ondas entram no ouvido.", fotoUrl: ouvidoImg },
      { id: "timpano", x: 85, y: 65, emoji: "🧠", cor: "from-emerald-500 to-green-700", titulo: "Tímpano vibra", texto: "Membrana fininha vibra e avisa o cérebro.", fotoUrl: ouvidoImg },
    ],
    falaFinal: "Vibração → onda → tímpano → cérebro. É esse o percurso do som.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O que dá origem a TODO som?", fotoUrl: violaoImg,
        cards: [
          { id: "a", emoji: "〰️", titulo: "Vibração de um objeto", cor: "from-purple-500 to-pink-700" },
          { id: "b", emoji: "☀️", titulo: "Luz do sol", cor: "from-yellow-500 to-amber-700" },
          { id: "c", emoji: "❄️", titulo: "Frio no ar", cor: "from-cyan-500 to-blue-700" },
        ], correta: "a",
        feedbackAcerto: "Sim! Vibração = origem do som.", feedbackErro: "Toda fonte sonora VIBRA." },
      { id: "q2", pergunta: "Como o som viaja pelo ar?", fotoUrl: tamborImg,
        cards: [
          { id: "a", emoji: "🌊", titulo: "Em ondas invisíveis", cor: "from-cyan-500 to-blue-700" },
          { id: "b", emoji: "🚗", titulo: "Em partículas coloridas", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎈", titulo: "Preso em bolinhas de ar", cor: "from-pink-500 to-purple-700" },
        ], correta: "a",
        feedbackAcerto: "Ondas sonoras.", feedbackErro: "Som viaja em ONDAS pelo ar." },
      { id: "q3", pergunta: "O som viaja no espaço vazio (sem ar)?", fotoUrl: ouvidoImg,
        cards: [
          { id: "a", emoji: "🚀", titulo: "Sim, sempre", cor: "from-yellow-500 to-amber-700" },
          { id: "b", emoji: "🚫", titulo: "Não — precisa de meio (ar, água, sólido)", cor: "from-slate-500 to-slate-700" },
          { id: "c", emoji: "🌈", titulo: "Só se for muito alto", cor: "from-pink-500 to-purple-700" },
        ], correta: "b",
        feedbackAcerto: "Correto. No vácuo o som some.", feedbackErro: "Sem meio, sem som. Espaço = silêncio." },
    ],
    falaFinal: "Fundamentos garantidos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "O som viaja por diferentes MEIOS. Uns melhor que outros.",
    instrucao: "Toque nos interruptores",
    mapaUrl: telefoneImg,
    camadas: [
      { id: "ar", rotulo: "Pelo ar (mais lento)", emoji: "💨", cor: "from-sky-400 to-blue-600", rect: { x: 2, y: 30, w: 47, h: 65 }, descricao: "Meio mais comum. Todo som que ouvimos no dia a dia.", fotoUrl: tamborImg },
      { id: "solid", rotulo: "Pelos sólidos (mais rápido)", emoji: "🪵", cor: "from-amber-700 to-stone-800", rect: { x: 50, y: 30, w: 48, h: 65 }, descricao: "Madeira, metal e barbante transmitem melhor. Por isso o telefone de copo funciona!", fotoUrl: telefoneImg },
    ],
    falaFinal: "Sólidos conduzem som melhor que o ar. Encoste o ouvido numa mesa e comprove.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Monte o caminho do som na ordem certa.",
    instrucao: "Toque nas paradas na ordem correta",
    pergunta: "Como o som chega ao seu cérebro",
    paradas: [
      { id: "fonte", emoji: "🥁", rotulo: "1. Fonte vibra", descricao: "Um instrumento é tocado.", fotoUrl: tamborImg },
      { id: "onda", emoji: "〰️", rotulo: "2. Cria onda sonora", descricao: "Vibração empurra o ar.", fotoUrl: violaoImg },
      { id: "viaja", emoji: "💨", rotulo: "3. Onda viaja pelo ar", descricao: "Se espalha em todas as direções.", fotoUrl: tamborImg },
      { id: "orelha", emoji: "👂", rotulo: "4. Chega no ouvido", descricao: "Entra pela orelha.", fotoUrl: ouvidoImg },
      { id: "cerebro", emoji: "🧠", rotulo: "5. Cérebro interpreta", descricao: "Tímpano vibra e o cérebro identifica o som.", fotoUrl: ouvidoImg },
    ],
    ordemCerta: ["fonte", "onda", "viaja", "orelha", "cerebro"],
    feedbackAcerto: "Perfeito!",
    feedbackErro: "Fonte → onda → viaja → orelha → cérebro.",
    falaFinal: "Todo som segue esse caminho — na velocidade da acústica.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "🔬 Relatório da Expedição · Semana 6",
    subtitulo: "Investigação: acústica",
    paragrafos: [
      { id: "p1", texto: "Todo SOM nasce de uma VIBRAÇÃO. Quando você bate em uma panela, fala ou toca uma corda, o objeto vibra muito rápido.",
        chaves: ["som", "vibração"], definicoes: { som: "Sensação produzida por vibrações.", "vibração": "Movimento rápido para frente e para trás." }, fotoUrl: tamborImg },
      { id: "p2", texto: "A vibração empurra o ar e cria ONDAS SONORAS INVISÍVEIS que viajam pelo ar, pela água ou por objetos sólidos até nossos ouvidos.",
        chaves: ["ondas sonoras"], definicoes: { "ondas sonoras": "Perturbações invisíveis que levam o som." }, fotoUrl: violaoImg },
      { id: "p3", texto: "Dentro do ouvido, uma membrana chamada TÍMPANO vibra e avisa o cérebro sobre o som. Sem tímpano funcionando, ficamos surdos.",
        chaves: ["tímpano"], definicoes: { "tímpano": "Membrana no ouvido que vibra com o som." }, fotoUrl: ouvidoImg },
    ],
    falaFinal: "Você virou um Maestro das Ondas!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "O Afinador de Ondas! Identifique cada conceito acústico.",
    instrucao: "⏱️ Leia a cena e escolha a peça certa",
    duracaoSegundos: 25,
    pecas: [
      { id: "vib", emoji: "〰️", rotulo: "Vibração" },
      { id: "onda", emoji: "🌊", rotulo: "Onda sonora" },
      { id: "ar", emoji: "💨", rotulo: "Ar (meio)" },
      { id: "solid", emoji: "🪵", rotulo: "Sólido (meio)" },
      { id: "tim", emoji: "🧠", rotulo: "Tímpano" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Pele do tambor treme", emoji: "🥁", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Movimento rápido", emoji: "〰️", cor: "from-purple-500 to-pink-700" }, contexto: "Você bate no tambor. A pele fica borrada de tanto tremer.", pecaCertaId: "vib", fotoUrl: tamborImg, feedbackAcerto: "VIBRAÇÃO!", feedbackErro: "Tremer rápido = VIBRAÇÃO." },
      { id: "r2", municipioA: { nome: "Se espalha pelo ambiente", emoji: "🌊", cor: "from-cyan-500 to-blue-700" }, municipioB: { nome: "Invisível", emoji: "👻", cor: "from-slate-400 to-slate-700" }, contexto: "Depois da vibração, algo invisível se espalha pelo ar até o outro canto da sala.", pecaCertaId: "onda", fotoUrl: violaoImg, feedbackAcerto: "ONDA SONORA!", feedbackErro: "Perturbação invisível no ar = ONDA SONORA." },
      { id: "r3", municipioA: { nome: "Encosta ouvido na mesa", emoji: "🪵", cor: "from-amber-700 to-stone-800" }, municipioB: { nome: "Escuta batidinha", emoji: "🔊", cor: "from-emerald-500 to-green-700" }, contexto: "Amigo bate na outra ponta da mesa. Você ouve muito bem colando o ouvido na madeira.", pecaCertaId: "solid", fotoUrl: telefoneImg, feedbackAcerto: "Sólido (madeira) conduz melhor!", feedbackErro: "Madeira é MEIO SÓLIDO." },
      { id: "r4", municipioA: { nome: "Membrana no fundo do ouvido", emoji: "🧠", cor: "from-rose-500 to-pink-700" }, municipioB: { nome: "Vibra com som", emoji: "〰️", cor: "from-emerald-500 to-green-700" }, contexto: "Estrutura fininha dentro do ouvido que vibra quando as ondas chegam e avisa o cérebro.", pecaCertaId: "tim", fotoUrl: ouvidoImg, feedbackAcerto: "TÍMPANO!", feedbackErro: "Membrana do ouvido = TÍMPANO." },
      { id: "r5", municipioA: { nome: "Amigo grita no parque", emoji: "📢", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Você ouve à distância", emoji: "👂", cor: "from-emerald-500 to-green-700" }, contexto: "Som atravessa o parque aberto até chegar em você.", pecaCertaId: "ar", fotoUrl: tamborImg, feedbackAcerto: "AR é o meio!", feedbackErro: "Som no parque viaja pelo AR." },
    ],
    falaFinal: "Acústica na ponta da língua.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Os elementos que fazem o som existir.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: ouvidoImg,
    fatias: [
      { id: "fonte", rotulo: "Fonte + Meio", emoji: "🥁", percentual: 60, cor: "#a855f7", descricao: "Objeto que vibra (fonte) e o caminho por onde as ondas viajam (ar, água, sólidos).", exemplos: ["Tambor vibrando", "Ondas no ar", "Som na madeira"], fotoUrl: tamborImg },
      { id: "receptor", rotulo: "Receptor (ouvido)", emoji: "👂", percentual: 40, cor: "#ec4899", descricao: "Onde as ondas chegam e viram som interpretado pelo cérebro.", exemplos: ["Orelha", "Tímpano"], fotoUrl: ouvidoImg },
    ],
    falaFinal: "Fonte + meio + receptor. Sem qualquer um, não há som.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Se você segura a parte que treme de um instrumento, o que acontece?", fotoUrl: violaoImg,
        opcoes: [
          { id: "a", texto: "O som para porque você interrompeu a vibração", correta: true },
          { id: "b", texto: "O som fica mais alto e muda de cor" },
        ], feedbackAcerto: "Isso! Sem vibração, sem som.", feedbackErro: "Sem vibração o som CESSA." },
      { id: "q2", pergunta: "Como o som viaja da fonte até seu ouvido?", fotoUrl: tamborImg,
        opcoes: [
          { id: "a", texto: "Em ondas sonoras invisíveis pelo ar ou sólidos", correta: true },
          { id: "b", texto: "Preso dentro de bolinhas coloridas de luz" },
        ], feedbackAcerto: "Correto.", feedbackErro: "Som viaja em ONDAS INVISÍVEIS." },
      { id: "q3", pergunta: "Onde o som NÃO viaja?", fotoUrl: ouvidoImg,
        opcoes: [
          { id: "a", texto: "No espaço vazio, sem ar (vácuo)", correta: true },
          { id: "b", texto: "Debaixo d'água, porque tem líquido" },
        ], feedbackAcerto: "Sim. Sem meio = silêncio.", feedbackErro: "Vácuo = sem meio = sem som. Na água o som viaja." },
    ],
    selo: { nome: "Diapasão Metálico", subtitulo: "Guardiões da Biosfera · Missão 6 concluída", emoji: "🎵", cor: "from-purple-400 via-pink-500 to-rose-700" },
    falaFinal: "Concha Acústica restaurada!",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Maestro das Ondas" },
};
