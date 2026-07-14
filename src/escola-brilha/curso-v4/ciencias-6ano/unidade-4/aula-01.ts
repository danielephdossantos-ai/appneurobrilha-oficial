import type { AulaGeoV1 } from "../../types";
import { url as bancadaImg } from "@/assets/ciencias-6ano/u4-a1/bancada-quimica.jpg.asset.json";
import { url as estadosImg } from "@/assets/ciencias-6ano/u4-a1/estados-materia.jpg.asset.json";
import { url as ferrugemImg } from "@/assets/ciencias-6ano/u4-a1/ferrugem.jpg.asset.json";
import { url as moleculasImg } from "@/assets/ciencias-6ano/u4-a1/moleculas-agua.jpg.asset.json";
import geloVideo from "@/assets/ciencias-6ano/u4-a1/gelo-derretendo.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 4 · Aula 01
 * "Laboratório de Transformações" — Transformações físicas e químicas (EF06CI02).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-lab-transformacoes",
  titulo: "Laboratório de Transformações",
  iconeTrilha: "⚗️",
  recompensa: { xp: 120, moedas: 45, medalha: "Químico Júnior" },
  bncc: ["EF06CI02"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de química oficial. Observe os reagentes.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: estadosImg,
    aurora:
      "Programa 4. Aqui investigamos MATÉRIA — tudo que ocupa espaço e tem massa. Vamos aprender a distinguir mudanças que só disfarçam (físicas) das que criam substâncias NOVAS (químicas).",
    falaFinal: "Química começa com uma pergunta simples: o que MUDOU e o que CONTINUA igual?",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Situação: colocamos um cubo de gelo no sol e um prego de ferro na chuva por semanas.",
    pergunta: "Qual é a diferença fundamental entre essas duas transformações?",
    fotoUrl: estadosImg,
    opcoes: [
      { id: "reversivel", titulo: "Gelo dá pra reverter, ferrugem NÃO", subtitulo: "física × química", emoji: "🔄", cor: "from-emerald-500 to-teal-700", fotoUrl: estadosImg },
      { id: "iguais", titulo: "São a mesma coisa", subtitulo: "só mudam de forma", emoji: "❌", cor: "from-red-500 to-rose-700", fotoUrl: ferrugemImg },
      { id: "cor", titulo: "Só depende da cor final", subtitulo: "estética", emoji: "🎨", cor: "from-slate-500 to-slate-800", fotoUrl: ferrugemImg },
    ],
    respostaCerta: "reversivel",
    feedbackAcerto: "Correto. Gelo derretendo = transformação FÍSICA (só muda estado). Ferrugem = QUÍMICA (novo material).",
    feedbackErro: "Gelo virando água ainda é H₂O — só mudou de estado (física). Ferro + oxigênio virou ferrugem, uma substância NOVA (química).",
    falaFinal: "Físico = disfarce. Químico = nova substância. Regra básica da química.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco termos-chave da química. Um vem com vídeo real de gelo derretendo em tempo real.",
    instrucao: "Vocabulário da matéria",
    cadernos: [
      { id: "materia", capa: "MATÉRIA", emoji: "🧱", cor: "from-sky-500 to-cyan-700", conteudo: "Tudo que ocupa espaço (volume) e tem massa. Ar, água, ferro, sua mão — tudo é matéria.", exemplo: "Ex.: 1 L de água = 1 kg de matéria.", fotoUrl: bancadaImg },
      { id: "estados", capa: "ESTADOS", emoji: "❄️", cor: "from-indigo-500 to-purple-700", conteudo: "Sólido, líquido, gasoso — três formas em que a matéria pode existir. Depende da temperatura. Veja o gelo derretendo no vídeo.", exemplo: "Ex.: água = gelo (sólido) → água (líquido) → vapor (gasoso).", videoUrl: geloVideo.url },
      { id: "fisica", capa: "TRANSF. FÍSICA", emoji: "🔄", cor: "from-emerald-500 to-teal-700", conteudo: "Muda ESTADO ou FORMA, mas a substância continua a MESMA. Reversível na maioria das vezes.", exemplo: "Ex.: derreter gelo, quebrar vidro, dissolver açúcar.", fotoUrl: estadosImg },
      { id: "quimica", capa: "TRANSF. QUÍMICA", emoji: "⚗️", cor: "from-amber-500 to-orange-700", conteudo: "Cria SUBSTÂNCIAS NOVAS com propriedades diferentes das originais. Geralmente irreversível.", exemplo: "Ex.: queimar papel, cozinhar ovo, enferrujar ferro.", fotoUrl: ferrugemImg },
      { id: "molecula", capa: "MOLÉCULA", emoji: "⚛️", cor: "from-rose-500 to-pink-700", conteudo: "Menor partícula que ainda mantém as propriedades da substância. Ex.: H₂O é a molécula da água.", exemplo: "Ex.: 1 gota de água tem ~10²¹ moléculas H₂O.", fotoUrl: moleculasImg },
    ],
    falaFinal: "Matéria, estados, físico, químico, molécula. Cinco palavras que abrem a química inteira.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Bancada de química com reagentes. Toque em cada frasco.",
    instrucao: "Toque em cada reagente",
    mapaUrl: bancadaImg,
    pontos: [
      { id: "amarelo", x: 30, y: 65, emoji: "🧪", cor: "from-amber-500 to-orange-700", titulo: "Ácido diluído", texto: "Reagente ácido usado em experimentos de neutralização — reage com bases produzindo sal e água.", fotoUrl: bancadaImg },
      { id: "verde", x: 45, y: 70, emoji: "⚗️", cor: "from-emerald-500 to-teal-700", titulo: "Indicador de pH", texto: "Muda de COR conforme o meio: verde = neutro. Ferramenta clássica de análise química.", fotoUrl: bancadaImg },
      { id: "azul", x: 60, y: 72, emoji: "💧", cor: "from-sky-500 to-cyan-700", titulo: "Sulfato de cobre", texto: "Sal azul intenso. Usado em experimentos de cristalização e reações de deslocamento.", fotoUrl: bancadaImg },
      { id: "balanca", x: 10, y: 78, emoji: "⚖️", cor: "from-indigo-500 to-purple-700", titulo: "Balança de precisão", texto: "Mede massa em gramas. Fundamental para respeitar a Lei da Conservação: massa entra = massa sai.", fotoUrl: bancadaImg },
    ],
    falaFinal: "Cada reagente tem função. Química é sobre COMBINAR de forma controlada e MEDIR o resultado.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de interpretação química.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual destas é uma transformação QUÍMICA?", fotoUrl: ferrugemImg,
        cards: [
          { id: "a", emoji: "🔥", titulo: "Queimar madeira", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❄️", titulo: "Congelar água", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "✂️", titulo: "Cortar papel", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Isso. Queimar cria cinza + gases NOVOS — substâncias diferentes da madeira original.",
        feedbackErro: "Congelar e cortar são FÍSICAS. Queimar cria NOVAS substâncias — química." },
      { id: "q2", pergunta: "O que uma transformação FÍSICA sempre mantém?", fotoUrl: estadosImg,
        cards: [
          { id: "a", emoji: "🧪", titulo: "A substância original", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎨", titulo: "A cor visual", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "📏", titulo: "O tamanho exato", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Em transformação física a SUBSTÂNCIA continua a mesma — só muda estado ou forma.",
        feedbackErro: "Física pode mudar cor e tamanho (dissolver açúcar). O que fica é a SUBSTÂNCIA." },
      { id: "q3", pergunta: "Ferrugem é ferro + O₂ formando óxido de ferro. Isso prova o quê?", fotoUrl: ferrugemImg,
        cards: [
          { id: "a", emoji: "⚛️", titulo: "É química — cria substância NOVA", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔄", titulo: "É reversível facilmente", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "❄️", titulo: "É só mudança de estado", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Perfeito. Ferro + oxigênio = óxido de ferro. Substância NOVA = química.",
        feedbackErro: "Ferrugem NÃO se desfaz sozinha. É QUÍMICA porque criou nova substância." },
    ],
    falaFinal: "Distinguir físico de químico é a primeira habilidade de todo químico.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Toda transformação química tem duas fases: REAGENTES (o que entra) e PRODUTOS (o que sai). Massa se conserva.",
    instrucao: "Toque nos interruptores",
    mapaUrl: bancadaImg,
    camadas: [
      { id: "reagentes", rotulo: "Reagentes", emoji: "🧪", cor: "from-sky-500 to-cyan-700", rect: { x: 2, y: 40, w: 50, h: 55 }, descricao: "Substâncias que ENTRAM na reação. Ex.: ferro + oxigênio antes de virar ferrugem.", fotoUrl: bancadaImg },
      { id: "produtos", rotulo: "Produtos", emoji: "⚗️", cor: "from-amber-500 to-orange-700", rect: { x: 52, y: 40, w: 46, h: 55 }, descricao: "Substâncias NOVAS que SAEM da reação. Ex.: óxido de ferro (ferrugem).", fotoUrl: ferrugemImg },
    ],
    falaFinal: "Reagente → Produto. Massa total ANTES = massa total DEPOIS (Lei de Lavoisier).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Sequência das mudanças de estado da matéria.",
    instrucao: "Toque na ORDEM (sólido → gás)",
    pergunta: "Qual a sequência quando aquecemos a matéria?",
    paradas: [
      { id: "solido", emoji: "❄️", rotulo: "1. Sólido", descricao: "Partículas MUITO próximas, vibrando pouco. Forma fixa.", fotoUrl: estadosImg },
      { id: "fusao", emoji: "💧", rotulo: "2. Fusão", descricao: "Aquecimento derrete: sólido → líquido.", fotoUrl: estadosImg },
      { id: "liquido", emoji: "🌊", rotulo: "3. Líquido", descricao: "Partículas próximas mas móveis. Toma forma do recipiente.", fotoUrl: estadosImg },
      { id: "vaporizacao", emoji: "♨️", rotulo: "4. Vaporização", descricao: "Mais calor: líquido → gás.", fotoUrl: estadosImg },
      { id: "gasoso", emoji: "💨", rotulo: "5. Gasoso", descricao: "Partículas MUITO afastadas, movimento livre. Ocupa todo o espaço.", fotoUrl: moleculasImg },
    ],
    ordemCerta: ["solido", "fusao", "liquido", "vaporizacao", "gasoso"],
    feedbackAcerto: "Exato. Sequência oficial de aquecimento. Cada transição tem nome técnico.",
    feedbackErro: "Aquecendo: sólido → líquido → gás. Cada passagem tem um nome: FUSÃO e VAPORIZAÇÃO.",
    falaFinal: "Todas essas mudanças são FÍSICAS — a substância (H₂O) permanece igual.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Programa 4.",
    tituloLivro: "📓 Relatório · Reação 22",
    subtitulo: "Vinagre + bicarbonato de sódio — evidência de transformação química",
    paragrafos: [
      { id: "p1", texto: "MÉTODO: em béquer graduado, adicionamos 20 mL de vinagre (ácido acético) e 10 g de bicarbonato de sódio. Pesamos ANTES: 30,3 g. Observamos borbulhamento intenso e liberação de gás por 15 segundos.", chaves: ["reagentes", "borbulhamento"], definicoes: { reagentes: "Substâncias que entram na reação.", borbulhamento: "Evidência visual de liberação de gás." }, fotoUrl: bancadaImg },
      { id: "p2", texto: "EVIDÊNCIAS: (1) surgimento de bolhas visíveis, (2) leve resfriamento do recipiente, (3) desaparecimento parcial do sólido, (4) resultado final líquido transparente. Todas essas são pistas de transformação QUÍMICA.", chaves: ["evidências", "transformação"], definicoes: { evidências: "Sinais visuais que confirmam uma reação.", transformação: "Mudança que cria substâncias novas." }, fotoUrl: moleculasImg },
      { id: "p3", texto: "CONCLUSÃO: massa final medida = 29,1 g. Diferença de 1,2 g corresponde ao gás CO₂ que ESCAPOU. Confirmando a Lei de Lavoisier: massa total (líquido + gás) foi conservada. Reação química COMPROVADA.", chaves: ["Lavoisier", "conservação"], definicoes: { Lavoisier: "Cientista que formulou a Lei da Conservação da Massa.", conservação: "Massa total não se cria nem se destrói." }, fotoUrl: ferrugemImg },
    ],
    falaFinal: "Você acabou de ler um protocolo químico completo. Vocabulário técnico dominado.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado. Física ou química?",
    instrucao: "⏱️ Classifique a transformação",
    duracaoSegundos: 25,
    pecas: [
      { id: "fisica", emoji: "🔄", rotulo: "Física" },
      { id: "quimica", emoji: "⚗️", rotulo: "Química" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cozinhar ovo", emoji: "🍳", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Clara vira sólida", emoji: "⚗️", cor: "from-red-500 to-rose-700" }, contexto: "Clara transparente do ovo cru vira massa branca sólida no calor — irreversível.", pecaCertaId: "quimica", fotoUrl: bancadaImg, feedbackAcerto: "QUÍMICA. Proteínas mudaram de estrutura — não voltam ao estado líquido.", feedbackErro: "Cozinhar ovo é IRREVERSÍVEL — a proteína virou outra coisa. Química." },
      { id: "r2", municipioA: { nome: "Dissolver sal em água", emoji: "🧂", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Evaporar água = sal volta", emoji: "🔄", cor: "from-emerald-500 to-teal-700" }, contexto: "Sal desaparece na água, mas se você evaporar a água, o sal RETORNA intacto.", pecaCertaId: "fisica", fotoUrl: bancadaImg, feedbackAcerto: "FÍSICA. Sal continua sendo sal — só se misturou temporariamente.", feedbackErro: "Reversível + substância inalterada = FÍSICA. Sal continuou sendo sal." },
      { id: "r3", municipioA: { nome: "Ferro enferrujando", emoji: "🔩", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Ferro + O₂ = óxido", emoji: "⚗️", cor: "from-amber-500 to-orange-700" }, contexto: "Prego de ferro exposto à umidade forma camada laranja de ferrugem.", pecaCertaId: "quimica", fotoUrl: ferrugemImg, feedbackAcerto: "QUÍMICA. Ferro + oxigênio = óxido de ferro (substância nova).", feedbackErro: "Ferrugem é substância NOVA — química." },
    ],
    falaFinal: "Você já classifica reações na hora. Isso é olho de químico.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Toda transformação da matéria se enquadra em duas categorias: FÍSICA (só muda estado/forma) ou QUÍMICA (cria substância nova).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: bancadaImg,
    fatias: [
      { id: "fis", rotulo: "Física", emoji: "🔄", percentual: 50, cor: "#0ea5e9", descricao: "Muda ESTADO ou FORMA — a substância continua a mesma. Geralmente reversível.", exemplos: ["Derreter gelo", "Dissolver sal", "Cortar papel"], fotoUrl: estadosImg },
      { id: "qui", rotulo: "Química", emoji: "⚗️", percentual: 50, cor: "#f59e0b", descricao: "Cria SUBSTÂNCIA NOVA com propriedades diferentes. Geralmente irreversível.", exemplos: ["Queimar madeira", "Ferro enferrujando", "Cozinhar ovo"], fotoUrl: ferrugemImg },
    ],
    falaFinal: "Regra final: se a substância CONTINUA igual = física. Se surge substância NOVA = química.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão do Programa 4. 3 perguntas e sua Certificação de Químico Júnior é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: bancadaImg,
    perguntas: [
      { id: "q1", pergunta: "O que caracteriza uma transformação QUÍMICA?", fotoUrl: ferrugemImg,
        opcoes: [
          { id: "a", texto: "Formação de uma substância NOVA com propriedades diferentes", correta: true },
          { id: "b", texto: "Apenas mudança de temperatura" },
        ],
        feedbackAcerto: "Correto. Substância nova = química, sem exceção.",
        feedbackErro: "Temperatura sozinha não define. O que define é o surgimento de SUBSTÂNCIA NOVA." },
      { id: "q2", pergunta: "Ao passar gelo → água → vapor, o que acontece com as MOLÉCULAS de H₂O?", fotoUrl: moleculasImg,
        opcoes: [
          { id: "a", texto: "Continuam H₂O — só mudam o quanto se movem e se afastam", correta: true },
          { id: "b", texto: "Viram substâncias químicas diferentes" },
        ],
        feedbackAcerto: "Sim. Mudança de estado é FÍSICA — molécula continua a mesma.",
        feedbackErro: "H₂O continua sendo H₂O em qualquer estado. Só muda o quanto as moléculas se movem." },
      { id: "q3", pergunta: "A Lei da Conservação da Massa (Lavoisier) diz que...", fotoUrl: bancadaImg,
        opcoes: [
          { id: "a", texto: "Na natureza, nada se cria nem se destrói, tudo se transforma", correta: true },
          { id: "b", texto: "Massa sempre AUMENTA depois de uma reação" },
        ],
        feedbackAcerto: "Exato. Massa total antes = massa total depois. Princípio de 1789.",
        feedbackErro: "Massa se CONSERVA — não aumenta nem diminui. Só se redistribui em novos produtos." },
    ],
    selo: { nome: "Certificação de Químico Júnior", subtitulo: "Academia Científica · Programa 4 concluído", emoji: "⚗️", cor: "from-amber-500 to-orange-700" },
    falaFinal: "Programa 4 concluído. Você domina o vocabulário básico da química.",
  },
};
