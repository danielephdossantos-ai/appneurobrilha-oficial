import type { AulaGeoV1 } from "../../types";
import bancadaImg from "@/assets/ciencias-6ano/u2-a1/bancada-biologia.jpg";
import celulaImg from "@/assets/ciencias-6ano/u2-a1/celula-vegetal.jpg";
import niveisImg from "@/assets/ciencias-6ano/u2-a1/niveis-organizacao.jpg";
import sistemasImg from "@/assets/ciencias-6ano/u2-a1/sistemas-corpo.jpg";
import celulaVideo from "@/assets/ciencias-6ano/u2-a1/celula-vida.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 2 · Aula 01
 * "Fábrica Microscópica" — Célula como unidade da vida (EF06CI05).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-fabrica-microscopica",
  titulo: "Fábrica Microscópica",
  iconeTrilha: "🧫",
  recompensa: { xp: 120, moedas: 45, medalha: "Biólogo Júnior" },
  bncc: ["EF06CI05"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de biologia celular. Analise os instrumentos.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: celulaImg,
    aurora:
      "Programa 2 da Academia. Aqui a gente investiga o que TODO ser vivo tem em comum — a célula. Bactéria, planta, você: todos somos feitos das mesmas peças básicas.",
    falaFinal:
      "Sob o microscópio dessa bancada mora a menor unidade capaz de viver: a célula. Domine sua estrutura e você entende metade da biologia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Situação-problema: três amostras diferentes vão pro microscópio — uma folha de planta, uma gota de saliva humana e uma cultura de bactérias.",
    pergunta:
      "Qual sua HIPÓTESE — o que essas três amostras têm em comum?",
    fotoUrl: celulaImg,
    opcoes: [
      { id: "celulas", titulo: "Todas têm células", subtitulo: "unidade básica", emoji: "🧫", cor: "from-emerald-500 to-teal-700", fotoUrl: celulaImg },
      { id: "cor", titulo: "Todas têm cor", subtitulo: "pigmento visível", emoji: "🎨", cor: "from-rose-500 to-pink-700", fotoUrl: bancadaImg },
      { id: "nada", titulo: "Nada em comum", subtitulo: "são muito diferentes", emoji: "❌", cor: "from-slate-500 to-slate-800", fotoUrl: bancadaImg },
    ],
    respostaCerta: "celulas",
    feedbackAcerto:
      "Correto. Toda forma de vida na Terra — de bactéria a baleia — é feita de células. Isso é a Teoria Celular.",
    feedbackErro:
      "Aparentemente diferentes, mas no microscópio revelam a mesma unidade: a CÉLULA. Cor e forma variam — a estrutura básica não.",
    falaFinal:
      "Teoria Celular (1839): todo ser vivo é feito de células, e toda célula vem de outra célula. Ponto de partida da biologia moderna.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco partes essenciais que aparecem em quase toda célula. Uma vem com vídeo microscópico real.",
    instrucao: "Vocabulário celular",
    cadernos: [
      {
        id: "membrana",
        capa: "MEMBRANA",
        emoji: "🛡️",
        cor: "from-sky-500 to-cyan-700",
        conteudo:
          "Envelope fino que separa o interior da célula do meio externo. Controla o que entra e sai — é a portaria da fábrica.",
        exemplo: "Ex.: bicamada lipídica presente em TODAS as células.",
        fotoUrl: celulaImg,
      },
      {
        id: "citoplasma",
        capa: "CITOPLASMA",
        emoji: "🌊",
        cor: "from-indigo-500 to-purple-700",
        conteudo:
          "Gel aquoso dentro da célula onde as organelas ficam suspensas. Veja no vídeo o citoplasma FLUINDO em uma célula viva.",
        exemplo: "Ex.: correntes citoplasmáticas visíveis em células vegetais.",
        videoUrl: celulaVideo.url,
      },
      {
        id: "nucleo",
        capa: "NÚCLEO",
        emoji: "🧬",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "Compartimento central que guarda o DNA — o manual de instruções da célula. Presente em eucariontes (plantas, animais, fungos).",
        exemplo: "Ex.: núcleo escuro visível ao microscópio óptico.",
        fotoUrl: celulaImg,
      },
      {
        id: "organelas",
        capa: "ORGANELAS",
        emoji: "⚙️",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "Estruturas com função específica dentro da célula: mitocôndria (energia), cloroplasto (fotossíntese), ribossomo (proteínas).",
        exemplo: "Ex.: cloroplastos verdes nas células das folhas.",
        fotoUrl: niveisImg,
      },
      {
        id: "parede",
        capa: "PAREDE CELULAR",
        emoji: "🧱",
        cor: "from-rose-500 to-pink-700",
        conteudo:
          "Camada rígida EXTERNA à membrana. Só existe em plantas, fungos e bactérias — animais NÃO têm parede celular.",
        exemplo: "Ex.: parede de celulose que dá firmeza às plantas.",
        fotoUrl: celulaImg,
      },
    ],
    falaFinal:
      "Membrana, citoplasma, núcleo, organelas, parede. Combinações dessas peças dão TODOS os tipos de célula do planeta.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "A bancada de biologia celular. Toque em cada instrumento pra entender a função no estudo da célula.",
    instrucao: "Toque em cada instrumento",
    mapaUrl: bancadaImg,
    pontos: [
      { id: "microscopio", x: 40, y: 30, emoji: "🔬", cor: "from-sky-500 to-cyan-700", titulo: "Microscópio óptico", texto: "Amplia 100–1000×. Torna células visíveis. Sem ele, a Teoria Celular não teria existido.", fotoUrl: bancadaImg },
      { id: "lamina", x: 25, y: 70, emoji: "🧪", cor: "from-emerald-500 to-teal-700", titulo: "Lâminas preparadas", texto: "Fatia MUITO fina do tecido colada em vidro. Permite luz atravessar e ver estruturas celulares.", fotoUrl: bancadaImg },
      { id: "placa", x: 55, y: 75, emoji: "🧫", cor: "from-amber-500 to-orange-700", titulo: "Placa de Petri", texto: "Recipiente com meio nutritivo para CULTIVAR células e microrganismos em laboratório.", fotoUrl: bancadaImg },
      { id: "caderno", x: 80, y: 65, emoji: "📓", cor: "from-indigo-500 to-purple-700", titulo: "Caderno de observação", texto: "Desenho + descrição do que se vê ao microscópio. Registro visual é padrão em biologia.", fotoUrl: niveisImg },
    ],
    falaFinal:
      "Todo o estudo da célula começa nessa bancada. Microscópio + amostra + registro = biologia celular.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Checkpoint técnico. 3 perguntas — pense antes de tocar.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1", pergunta: "O que a Teoria Celular afirma?", fotoUrl: celulaImg,
        cards: [
          { id: "a", emoji: "🧫", titulo: "Todo ser vivo é feito de células", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌱", titulo: "Só plantas têm células", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🦠", titulo: "Bactérias não são vivas", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso. É o princípio unificador da biologia — tudo que vive é feito de células.",
        feedbackErro: "A Teoria Celular une TODOS os seres vivos: de bactéria a humano, todos são feitos de células.",
      },
      {
        id: "q2", pergunta: "Qual estrutura celular NÃO existe em células animais?", fotoUrl: celulaImg,
        cards: [
          { id: "a", emoji: "🧱", titulo: "Parede celular", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🛡️", titulo: "Membrana plasmática", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧬", titulo: "Núcleo", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Parede celular só em plantas, fungos e bactérias — animais têm apenas membrana.",
        feedbackErro: "Membrana e núcleo existem em animais. A PAREDE (rígida) é exclusiva de plantas, fungos e bactérias.",
      },
      {
        id: "q3", pergunta: "Onde fica guardado o DNA da célula eucarionte?", fotoUrl: celulaImg,
        cards: [
          { id: "a", emoji: "🧬", titulo: "No núcleo", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🛡️", titulo: "Na membrana", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧱", titulo: "Na parede celular", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "a",
        feedbackAcerto: "Perfeito. Núcleo = cofre do DNA em células eucariontes (plantas, animais, fungos).",
        feedbackErro: "DNA fica no NÚCLEO. Membrana só controla trocas; parede dá estrutura externa.",
      },
    ],
    falaFinal: "Célula = unidade estrutural + funcional da vida. Sem célula, sem vida.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "A célula tem duas zonas técnicas: ENVOLTÓRIO (membrana + parede, controlam o que entra) e MAQUINÁRIO INTERNO (núcleo + organelas, fazem o trabalho).",
    instrucao: "Toque nos interruptores",
    mapaUrl: celulaImg,
    camadas: [
      { id: "envoltorio", rotulo: "Envoltório", emoji: "🛡️", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 30 }, descricao: "Membrana + parede (se houver). Delimita, protege e filtra o que entra e sai da célula.", fotoUrl: celulaImg },
      { id: "maquinario", rotulo: "Maquinário Interno", emoji: "⚙️", cor: "from-sky-500 to-cyan-700", rect: { x: 2, y: 32, w: 96, h: 66 }, descricao: "Núcleo + organelas + citoplasma. Onde acontece energia, síntese de proteínas, respiração celular.", fotoUrl: niveisImg },
    ],
    falaFinal: "Envoltório protege, maquinário produz. Célula é uma fábrica microscópica autossuficiente.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Do menor ao maior: reconstrua os níveis de organização da vida.",
    instrucao: "Toque na ORDEM (menor → maior)",
    pergunta: "Qual a sequência de organização biológica?",
    paradas: [
      { id: "celula", emoji: "🧫", rotulo: "1. Célula", descricao: "Unidade estrutural básica.", fotoUrl: celulaImg },
      { id: "tecido", emoji: "🧵", rotulo: "2. Tecido", descricao: "Grupo de células iguais com mesma função.", fotoUrl: niveisImg },
      { id: "orgao", emoji: "❤️", rotulo: "3. Órgão", descricao: "Vários tecidos formando estrutura com função.", fotoUrl: sistemasImg },
      { id: "sistema", emoji: "🫁", rotulo: "4. Sistema", descricao: "Vários órgãos integrados: digestório, nervoso...", fotoUrl: sistemasImg },
      { id: "organismo", emoji: "🧍", rotulo: "5. Organismo", descricao: "Todos os sistemas juntos = ser vivo completo.", fotoUrl: sistemasImg },
    ],
    ordemCerta: ["celula", "tecido", "orgao", "sistema", "organismo"],
    feedbackAcerto: "Exato. É a hierarquia oficial da biologia — do microscópico ao visível.",
    feedbackErro: "Menor → Maior. Célula vem antes de tecido, tecido antes de órgão, e assim por diante.",
    falaFinal: "Cada nível emerge do anterior. Sem célula funcionando, sistema não funciona.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia o resumo do relatório do Programa 2.",
    tituloLivro: "📓 Relatório · Observação 07",
    subtitulo: "Comparação de células vegetal e animal ao microscópio",
    paragrafos: [
      {
        id: "p1",
        texto:
          "SITUAÇÃO: preparamos duas lâminas — epiderme de cebola (vegetal) e mucosa bucal (animal). AMBAS apresentaram membrana, citoplasma e núcleo. A célula vegetal exibiu ADICIONALMENTE parede celular rígida e cloroplastos.",
        chaves: ["membrana", "núcleo", "cloroplastos"],
        definicoes: {
          membrana: "Envelope que controla trocas com o exterior.",
          núcleo: "Compartimento que guarda o DNA.",
          cloroplastos: "Organelas verdes onde ocorre fotossíntese.",
        },
        fotoUrl: celulaImg,
      },
      {
        id: "p2",
        texto:
          "EVIDÊNCIA: mesmo com aparências diferentes, ambas seguem o mesmo PLANO CELULAR básico. Diferenças (parede, cloroplasto) refletem funções específicas — sustentação e fotossíntese na planta.",
        chaves: ["plano celular", "função"],
        definicoes: {
          "plano celular": "Estrutura básica comum a todas as células.",
          função: "Trabalho específico realizado pela célula.",
        },
        fotoUrl: niveisImg,
      },
      {
        id: "p3",
        texto:
          "CONCLUSÃO: os dados CONFIRMAM a Teoria Celular. Toda vida compartilha a mesma unidade estrutural. Diferenças são adaptações — não substituem o plano celular universal.",
        chaves: ["teoria celular"],
        definicoes: {
          "teoria celular": "Todo ser vivo é feito de células; toda célula vem de outra.",
        },
        fotoUrl: sistemasImg,
      },
    ],
    falaFinal: "Você acabou de ler um relatório de biologia celular. Vocabulário técnico dominado.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Cada rodada mostra uma estrutura — identifique QUAL é.",
    instrucao: "⏱️ Escolha a estrutura correta",
    duracaoSegundos: 25,
    pecas: [
      { id: "membrana", emoji: "🛡️", rotulo: "Membrana" },
      { id: "nucleo", emoji: "🧬", rotulo: "Núcleo" },
      { id: "parede", emoji: "🧱", rotulo: "Parede" },
      { id: "organela", emoji: "⚙️", rotulo: "Organela" },
      { id: "citoplasma", emoji: "🌊", rotulo: "Citoplasma" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cofre do DNA", emoji: "🧬", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Comando central", emoji: "🎯", cor: "from-sky-500 to-cyan-700" }, contexto: "Estrutura central escura que guarda o material genético da célula.", pecaCertaId: "nucleo", fotoUrl: celulaImg, feedbackAcerto: "Núcleo. Guarda o DNA — o manual da célula.", feedbackErro: "Cofre + DNA = NÚCLEO." },
      { id: "r2", municipioA: { nome: "Só em plantas/fungos", emoji: "🧱", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Estrutura rígida", emoji: "🏛️", cor: "from-rose-500 to-pink-700" }, contexto: "Camada rígida EXTERNA à membrana, presente em vegetais e ausente em animais.", pecaCertaId: "parede", fotoUrl: celulaImg, feedbackAcerto: "PAREDE celular — exclusiva de vegetais, fungos e bactérias.", feedbackErro: "Rígida + externa + só em plantas = PAREDE." },
      { id: "r3", municipioA: { nome: "Gel interno", emoji: "🌊", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Organelas flutuam nele", emoji: "⚙️", cor: "from-indigo-500 to-purple-700" }, contexto: "Meio aquoso onde as organelas ficam suspensas dentro da célula.", pecaCertaId: "citoplasma", fotoUrl: celulaImg, feedbackAcerto: "CITOPLASMA — onde toda química celular acontece.", feedbackErro: "Gel + organelas suspensas = CITOPLASMA." },
    ],
    falaFinal: "Você já identifica na hora as partes da célula. É vocabulário de biólogo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A célula tem duas grandes zonas: ENVOLTÓRIO (controla trocas) e MAQUINÁRIO (produz e comanda).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: celulaImg,
    fatias: [
      { id: "envoltorio", rotulo: "Envoltório", emoji: "🛡️", percentual: 30, cor: "#10b981", descricao: "Membrana + parede (quando há). Delimita a célula e controla entrada e saída de substâncias.", exemplos: ["Membrana plasmática", "Parede celular", "Proteínas de transporte"], fotoUrl: celulaImg },
      { id: "maquinario", rotulo: "Maquinário", emoji: "⚙️", percentual: 70, cor: "#0ea5e9", descricao: "Núcleo, organelas e citoplasma. Onde acontece toda a atividade metabólica e o comando genético.", exemplos: ["Núcleo com DNA", "Mitocôndrias", "Ribossomos"], fotoUrl: niveisImg },
    ],
    falaFinal: "Envoltório sem maquinário = saco vazio. Maquinário sem envoltório = confusão. Célula precisa das duas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão do Programa 2. 3 perguntas e sua Certificação de Biólogo Júnior é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: celulaImg,
    perguntas: [
      { id: "q1", pergunta: "O que a Teoria Celular afirma sobre a origem das células?", fotoUrl: celulaImg,
        opcoes: [
          { id: "a", texto: "Toda célula vem de outra célula pré-existente", correta: true },
          { id: "b", texto: "Células surgem espontaneamente do nada" },
        ],
        feedbackAcerto: "Correto. É o segundo pilar da Teoria Celular — descartou a geração espontânea.",
        feedbackErro: "Geração espontânea foi REFUTADA no séc. XIX. Toda célula vem de outra célula." },
      { id: "q2", pergunta: "Qual é a estrutura EXCLUSIVA de células vegetais (não existe em animais)?", fotoUrl: celulaImg,
        opcoes: [
          { id: "a", texto: "Parede celular de celulose", correta: true },
          { id: "b", texto: "Membrana plasmática" },
        ],
        feedbackAcerto: "Sim. Parede rígida de celulose é marca da célula vegetal.",
        feedbackErro: "Membrana existe em TODAS as células. Só PAREDE é exclusiva de plantas." },
      { id: "q3", pergunta: "Como células individuais se organizam em níveis superiores?", fotoUrl: niveisImg,
        opcoes: [
          { id: "a", texto: "Célula → tecido → órgão → sistema → organismo", correta: true },
          { id: "b", texto: "Organismo → sistema → célula direto" },
        ],
        feedbackAcerto: "Exato. Cada nível é feito do anterior — hierarquia biológica.",
        feedbackErro: "Ordem correta é do MENOR ao MAIOR: célula → tecido → órgão → sistema → organismo." },
    ],
    selo: { nome: "Certificação de Biólogo Júnior", subtitulo: "Academia Científica · Programa 2 concluído", emoji: "🧫", cor: "from-emerald-500 to-teal-700" },
    falaFinal: "Programa 2 concluído. Você domina biologia celular básica.",
  },
};
