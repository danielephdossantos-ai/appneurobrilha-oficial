import type { AulaGeoV1 } from "../../types";
import { url as bancadaImg } from "@/assets/ciencias-6ano/u1-a1/bancada-pesquisa.jpg.asset.json";
import { url as microscopioImg } from "@/assets/ciencias-6ano/u1-a1/microscopio.jpg.asset.json";
import { url as experimentoImg } from "@/assets/ciencias-6ano/u1-a1/experimento-plantas.jpg.asset.json";
import { url as cadernoImg } from "@/assets/ciencias-6ano/u1-a1/caderno-dados.jpg.asset.json";
import { url as graficoImg } from "@/assets/ciencias-6ano/u1-a1/grafico-crescimento.jpg.asset.json";
import { url as bacteriasFrame } from "@/assets/ciencias-6ano/u1-a1/bacterias-frame.jpg.asset.json";
import { url as reacaoFrame } from "@/assets/ciencias-6ano/u1-a1/reacao-frame.jpg.asset.json";
import bacteriasVideo from "@/assets/ciencias-6ano/u1-a1/bacterias-vivas.mp4.asset.json";
import reacaoVideo from "@/assets/ciencias-6ano/u1-a1/reacao-quimica.mp4.asset.json";
import plantasVideo from "@/assets/ciencias-6ano/u1-a1/plantas-crescendo.mp4.asset.json";

/**
 * Ciências · 6º Ano · Unidade 1 · Aula 01
 * "Caderno do Pesquisador" — Método científico avançado
 * Piloto SPEB 1.0 Teen: fotografia científica real + 2 vídeos
 * (microrganismos vivos + reação química bolhando).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-caderno-do-pesquisador",
  titulo: "Caderno do Pesquisador",
  iconeTrilha: "🔬",
  recompensa: { xp: 120, moedas: 45, medalha: "Pesquisador Júnior" },
  bncc: ["EF06CI01"],
  duracaoMin: 35,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao:
      "Bancada oficial do Programa 1. Analise os instrumentos e o registro de dados.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: cadernoImg,
    aurora:
      "Bem-vindo à Academia Científica. Você não é mais aluno de fundamental — você é pesquisador em treinamento. Aqui a gente investiga com rigor: hipótese, variável controlada, dado, evidência.",
    falaFinal:
      "Nesta bancada moram os cinco pilares do Programa 1: observação, hipótese, experimento, dado e evidência. Domine isso e nenhum outro laboratório vai te intimidar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Situação-problema real. A equipe deixou 3 plantas idênticas (A, B, C) por 10 dias em condições diferentes: SOL direto, SOMBRA parcial e ESCURO total. Água e solo iguais para todas.",
    pergunta:
      "Qual sua HIPÓTESE — o grupo que vai crescer MAIS depois de 10 dias?",
    fotoUrl: experimentoImg,
    opcoes: [
      { id: "sol", titulo: "Grupo SOL", subtitulo: "luz direta", emoji: "☀️", cor: "from-amber-400 to-orange-600", fotoUrl: experimentoImg },
      { id: "sombra", titulo: "Grupo SOMBRA", subtitulo: "luz difusa", emoji: "🌤️", cor: "from-teal-400 to-emerald-600", fotoUrl: experimentoImg },
      { id: "escuro", titulo: "Grupo ESCURO", subtitulo: "sem luz", emoji: "🌑", cor: "from-slate-500 to-slate-800", fotoUrl: experimentoImg },
    ],
    respostaCerta: "sol",
    feedbackAcerto:
      "Hipótese razoável — mas note: hipótese só vira conclusão depois de coletar DADOS. Vamos aos números.",
    feedbackErro:
      "Sua hipótese é válida como palpite, mas os dados vão dizer. Fotossíntese exige luz — o grupo SOL tende a crescer mais.",
    falaFinal:
      "Toda pesquisa começa com uma hipótese. O que separa ciência de achismo é o próximo passo: testar de forma controlada.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco termos técnicos que aparecem em toda pesquisa séria. Dois deles vêm com vídeo científico real.",
    instrucao: "Vocabulário do método científico",
    cadernos: [
      {
        id: "observacao",
        capa: "OBSERVAÇÃO",
        emoji: "🔬",
        cor: "from-sky-500 to-cyan-700",
        conteudo:
          "Coleta atenta de fatos do mundo — muitas vezes com instrumentos. Este vídeo mostra bactérias VIVAS ao microscópio óptico: só se observa com o equipamento certo.",
        exemplo: "Ex.: ver que a água do lago tem microrganismos que se movem.",
        videoUrl: bacteriasVideo.url,
      },
      {
        id: "hipotese",
        capa: "HIPÓTESE",
        emoji: "💭",
        cor: "from-indigo-500 to-purple-700",
        conteudo:
          "Resposta provisória e TESTÁVEL para a pergunta de pesquisa. Precisa poder ser refutada por um experimento.",
        exemplo: "Ex.: 'Plantas expostas à luz crescem mais que plantas no escuro.' — veja o crescimento acontecendo em tempo real.",
        videoUrl: plantasVideo.url,
      },
      {
        id: "experimento",
        capa: "EXPERIMENTO",
        emoji: "🧪",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "Teste controlado onde UMA variável muda por vez. Este vídeo mostra uma reação química real: vinagre + bicarbonato liberando CO₂. Experimento clássico, resultado visível.",
        exemplo: "Ex.: reagir ácido com base e observar o gás liberado.",
        videoUrl: reacaoVideo.url,
      },
      {
        id: "dado",
        capa: "DADO",
        emoji: "📏",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "Medida registrada durante o experimento. Deve ser precisa, datada e passível de conferência por outros pesquisadores.",
        exemplo: "Ex.: 'Dia 10 · Grupo A · 8,9 cm'.",
        fotoUrl: cadernoImg,
      },
      {
        id: "evidencia",
        capa: "EVIDÊNCIA",
        emoji: "📊",
        cor: "from-rose-500 to-pink-700",
        conteudo:
          "Conjunto de dados organizado (tabela, gráfico) que SUSTENTA ou REFUTA a hipótese. Sem evidência, não é conclusão — é opinião.",
        exemplo: "Ex.: gráfico mostrando 28 cm no sol contra 4 cm no escuro.",
        fotoUrl: graficoImg,
      },
    ],
    falaFinal:
      "Observação, hipótese, experimento, dado, evidência. Esses cinco termos aparecem em TODO artigo científico. Você já domina o vocabulário.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "A bancada do Programa 1. Toque em cada instrumento para entender a função técnica dentro do método.",
    instrucao: "Toque em cada instrumento da bancada",
    mapaUrl: bancadaImg,
    pontos: [
      {
        id: "microscopio",
        x: 55, y: 30, emoji: "🔬", cor: "from-sky-500 to-cyan-700",
        titulo: "Microscópio óptico",
        texto:
          "Amplia até 1000×. Permite observar células, microrganismos e estruturas invisíveis a olho nu. Instrumento de OBSERVAÇÃO.",
        fotoUrl: microscopioImg,
      },
      {
        id: "beaker",
        x: 12, y: 45, emoji: "⚗️", cor: "from-emerald-500 to-teal-700",
        titulo: "Béquer graduado",
        texto:
          "Vidraria calibrada em mililitros. Serve para medir e conter líquidos durante EXPERIMENTOS controlados.",
        fotoUrl: bancadaImg,
      },
      {
        id: "caderno",
        x: 30, y: 85, emoji: "📓", cor: "from-amber-500 to-orange-700",
        titulo: "Caderno de bancada",
        texto:
          "Registro manual e datado dos DADOS coletados. Documento primário — é o que garante que o experimento possa ser reproduzido.",
        fotoUrl: cadernoImg,
      },
      {
        id: "epi",
        x: 78, y: 55, emoji: "🥽", cor: "from-slate-500 to-slate-800",
        titulo: "EPI (óculos + luvas)",
        texto:
          "Equipamento de Proteção Individual. Sem EPI, o experimento não começa — segurança é parte do método.",
        fotoUrl: bancadaImg,
      },
      {
        id: "plantas",
        x: 45, y: 65, emoji: "🌱", cor: "from-green-500 to-emerald-700",
        titulo: "Amostras (grupos A, B, C)",
        texto:
          "Cada grupo é uma VARIÁVEL diferente. Comparar entre grupos é o que gera EVIDÊNCIA.",
        fotoUrl: experimentoImg,
      },
    ],
    falaFinal:
      "Cada instrumento tem uma função no método. Pesquisador de verdade escolhe o equipamento certo pra cada pergunta.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Checkpoint técnico. 3 perguntas de interpretação — sem chute.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta:
          "O que caracteriza uma HIPÓTESE científica (diferente de um palpite qualquer)?",
        fotoUrl: cadernoImg,
        cards: [
          { id: "a", emoji: "💭", titulo: "Uma resposta provisória TESTÁVEL por experimento", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎲", titulo: "Um chute aleatório sobre o resultado", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "📚", titulo: "Uma frase copiada do livro", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "a",
        feedbackAcerto:
          "Isso. Hipótese científica precisa poder ser TESTADA — se não dá pra desmentir, não é hipótese, é opinião.",
        feedbackErro:
          "Chute não é hipótese. Hipótese científica precisa ser TESTÁVEL por experimento controlado.",
      },
      {
        id: "q2",
        pergunta:
          "No experimento das plantas, água e solo foram MANTIDOS IGUAIS entre os grupos. Por quê?",
        fotoUrl: experimentoImg,
        cards: [
          { id: "a", emoji: "⚖️", titulo: "Pra isolar a variável LUZ como única causa possível", cor: "from-sky-500 to-cyan-700" },
          { id: "b", emoji: "💧", titulo: "Pra economizar água", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎨", titulo: "Só pra ficar bonito", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "a",
        feedbackAcerto:
          "Exato. Se duas variáveis mudam ao mesmo tempo, você não sabe qual causou o efeito. Isso é CONTROLE de variável.",
        feedbackErro:
          "Não é estética nem economia. Controlar variáveis é o que garante que você saiba QUAL fator causou o resultado.",
      },
      {
        id: "q3",
        pergunta:
          "O gráfico mostra 28 cm no sol contra 4 cm no escuro. Como um pesquisador comunica essa conclusão?",
        fotoUrl: graficoImg,
        cards: [
          { id: "a", emoji: "😎", titulo: "'Eu sabia que ia dar isso'", cor: "from-red-500 to-rose-700" },
          { id: "b", emoji: "📊", titulo: "'Os dados EVIDENCIAM que a luz influencia o crescimento'", cor: "from-emerald-500 to-teal-700" },
          { id: "c", emoji: "🤷", titulo: "'Deu diferente, sei lá'", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "b",
        feedbackAcerto:
          "Perfeito. Comunicação científica cita a EVIDÊNCIA (os dados), não a opinião do pesquisador.",
        feedbackErro:
          "Comunicação científica é impessoal e ancorada em dados. 'Os dados evidenciam...' é o padrão de linguagem.",
      },
    ],
    falaFinal:
      "Interpretar dados e comunicar com precisão é o que diferencia um relatório científico de uma conversa de corredor.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "A bancada tem duas zonas técnicas: CONTROLE DE VARIÁVEIS (onde o experimento é planejado com rigor) e ANÁLISE DE DADOS (onde os números viram gráfico e evidência).",
    instrucao: "Toque nos interruptores",
    mapaUrl: bancadaImg,
    camadas: [
      {
        id: "controle",
        rotulo: "Controle de Variáveis",
        emoji: "⚖️",
        cor: "from-emerald-500 to-teal-700",
        rect: { x: 2, y: 30, w: 48, h: 65 },
        descricao:
          "Béqueres, EPI e amostras. Aqui o pesquisador GARANTE que só uma variável muda entre os grupos.",
        fotoUrl: experimentoImg,
      },
      {
        id: "analise",
        rotulo: "Análise de Dados",
        emoji: "📊",
        cor: "from-sky-500 to-cyan-700",
        rect: { x: 50, y: 30, w: 48, h: 65 },
        descricao:
          "Microscópio, caderno e gráficos. Aqui os dados são coletados, organizados em tabelas e transformados em evidência.",
        fotoUrl: graficoImg,
      },
    ],
    falaFinal:
      "Controle + análise = método científico funcionando. Uma zona sem a outra não gera ciência.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Reconstrua a ORDEM oficial de uma investigação científica completa.",
    instrucao: "Toque nas etapas na ORDEM correta",
    pergunta: "Qual é a sequência do método científico avançado?",
    paradas: [
      { id: "problema", emoji: "❓", rotulo: "1. Situação-problema", descricao: "Identificar um fenômeno que precisa ser explicado.", fotoUrl: bancadaImg },
      { id: "hipotese", emoji: "💭", rotulo: "2. Hipótese testável", descricao: "Formular uma resposta provisória que possa ser testada.", fotoUrl: cadernoImg },
      { id: "experimento", emoji: "🧪", rotulo: "3. Experimento controlado", descricao: "Montar teste com variável isolada e grupo controle.", fotoUrl: experimentoImg },
      { id: "dados", emoji: "📏", rotulo: "4. Coleta de dados", descricao: "Medir, registrar em tabela e datar cada observação.", fotoUrl: cadernoImg },
      { id: "grafico", emoji: "📊", rotulo: "5. Análise (gráfico)", descricao: "Transformar dados em gráfico e interpretar padrões.", fotoUrl: graficoImg },
      { id: "conclusao", emoji: "📣", rotulo: "6. Conclusão & comunicação", descricao: "Confirmar/refutar a hipótese e publicar as evidências.", fotoUrl: bancadaImg },
    ],
    ordemCerta: ["problema", "hipotese", "experimento", "dados", "grafico", "conclusao"],
    feedbackAcerto:
      "Sequência completa. Assim funciona uma pesquisa científica de verdade — do laboratório escolar ao artigo publicado.",
    feedbackErro:
      "Pense: você precisa do PROBLEMA antes da hipótese, e dos DADOS antes de fazer o gráfico.",
    falaFinal:
      "Pesquisa que não comunica os dados fica invisível pra ciência. Comunicar é parte do método — não apêndice.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Leia o resumo do relatório oficial do Programa 1 — mesmo formato de um artigo científico.",
    tituloLivro: "📓 Relatório · Experimento 18",
    subtitulo: "Efeito da luz solar no crescimento vegetal (10 dias)",
    paragrafos: [
      {
        id: "p1",
        texto:
          "SITUAÇÃO-PROBLEMA: por que plantas em locais escuros crescem menos? HIPÓTESE: a intensidade de LUZ influencia diretamente o crescimento vegetal. Para testar, isolamos a variável luz: 3 grupos (A, B, C) receberam água e solo idênticos, alterando apenas a exposição luminosa.",
        chaves: ["hipótese", "variável", "isolar"],
        definicoes: {
          hipótese: "Resposta provisória testável para a pergunta de pesquisa.",
          variável: "Fator que pode ser mudado entre grupos do experimento.",
          isolar: "Garantir que só um fator mude entre os grupos.",
        },
        fotoUrl: experimentoImg,
      },
      {
        id: "p2",
        texto:
          "MÉTODO: durante 10 dias, medimos diariamente a altura de cada planta com régua milimetrada, registrando os DADOS em tabela datada. Ao final, calculamos a MÉDIA de cada grupo e transformamos em GRÁFICO de barras para visualizar a diferença.",
        chaves: ["dados", "média", "gráfico"],
        definicoes: {
          dados: "Medidas registradas durante o experimento.",
          média: "Soma dos valores dividida pelo número de amostras.",
          gráfico: "Representação visual dos dados para facilitar análise.",
        },
        fotoUrl: cadernoImg,
      },
      {
        id: "p3",
        texto:
          "RESULTADOS: Grupo A (sol): 8,9 cm · Grupo B (sombra): 7,9 cm · Grupo C (escuro): 4,0 cm no experimento paralelo. CONCLUSÃO: os dados EVIDENCIAM que a luz influencia o crescimento — a hipótese foi CONFIRMADA. Publicamos o protocolo para que outros grupos possam REPRODUZIR e verificar.",
        chaves: ["evidência", "reproduzir"],
        definicoes: {
          evidência: "Dado registrado que sustenta a conclusão.",
          reproduzir: "Repetir o experimento seguindo o mesmo protocolo.",
        },
        fotoUrl: graficoImg,
      },
    ],
    falaFinal:
      "Você acabou de ler um resumo científico completo. É EXATAMENTE assim que trabalha um pesquisador — só que com temas maiores.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Desafio investigativo cronometrado. Cada rodada mostra uma situação real de laboratório — identifique o CONCEITO CIENTÍFICO em jogo.",
    instrucao: "⏱️ Leia a situação e escolha o conceito correto",
    duracaoSegundos: 25,
    pecas: [
      { id: "observacao", emoji: "🔬", rotulo: "Observação" },
      { id: "hipotese", emoji: "💭", rotulo: "Hipótese" },
      { id: "experimento", emoji: "🧪", rotulo: "Experimento" },
      { id: "dado", emoji: "📏", rotulo: "Dado" },
      { id: "evidencia", emoji: "📊", rotulo: "Evidência" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Microscópio 400×", emoji: "🔬", cor: "from-sky-500 to-cyan-700" },
        municipioB: { nome: "Bactérias se movendo", emoji: "🦠", cor: "from-emerald-500 to-teal-700" },
        contexto:
          "A pesquisadora olha ao microscópio e nota que existem microrganismos nadando na gota de água do lago.",
        pecaCertaId: "observacao",
        fotoUrl: bacteriasFrame,
        feedbackAcerto: "Isso. Coletar fatos do mundo com atenção = OBSERVAÇÃO.",
        feedbackErro: "Ela ainda não testou nada — só olhou com o equipamento. Isso é OBSERVAÇÃO.",
      },
      {
        id: "r2",
        municipioA: { nome: "'Acredito que...'", emoji: "💭", cor: "from-indigo-500 to-purple-700" },
        municipioB: { nome: "Palpite testável", emoji: "🎯", cor: "from-sky-500 to-cyan-700" },
        contexto:
          "Antes do experimento, o time escreve: 'Acreditamos que plantas no sol crescerão mais que plantas no escuro'.",
        pecaCertaId: "hipotese",
        fotoUrl: cadernoImg,
        feedbackAcerto: "Correto. Resposta provisória e testável = HIPÓTESE.",
        feedbackErro: "Ainda não é dado nem evidência — é uma PREVISÃO testável. HIPÓTESE.",
      },
      {
        id: "r3",
        municipioA: { nome: "Vinagre + bicarbonato", emoji: "🧪", cor: "from-emerald-500 to-teal-700" },
        municipioB: { nome: "Reação bolhando", emoji: "💨", cor: "from-amber-500 to-orange-700" },
        contexto:
          "O time mistura ácido e base num béquer, controla as quantidades e observa o gás liberado.",
        pecaCertaId: "experimento",
        fotoUrl: reacaoFrame,
        feedbackAcerto: "Sim. Teste controlado no laboratório = EXPERIMENTO.",
        feedbackErro: "Não é só observar — o time provoca a reação de forma controlada. EXPERIMENTO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Dia 5 · 4,8 cm", emoji: "📏", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Registro na tabela", emoji: "📋", cor: "from-yellow-500 to-amber-700" },
        contexto:
          "Ao medir a planta A no 5º dia com a régua, o pesquisador anota 4,8 cm no caderno de bancada.",
        pecaCertaId: "dado",
        fotoUrl: cadernoImg,
        feedbackAcerto: "Perfeito. Medida individual registrada = DADO.",
        feedbackErro: "Ainda não é o gráfico completo — é uma medida isolada. DADO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Gráfico 28 vs 4", emoji: "📊", cor: "from-rose-500 to-pink-700" },
        municipioB: { nome: "Sustenta conclusão", emoji: "🎯", cor: "from-emerald-500 to-green-700" },
        contexto:
          "O gráfico final mostra 28 cm no sol contra 4 cm no escuro. O time usa isso pra defender que a luz influencia o crescimento.",
        pecaCertaId: "evidencia",
        fotoUrl: graficoImg,
        feedbackAcerto: "Isso. Conjunto de dados que sustenta a conclusão = EVIDÊNCIA.",
        feedbackErro: "Um dado sozinho não é evidência. É o CONJUNTO organizado que sustenta a conclusão.",
      },
    ],
    falaFinal:
      "Você aplica os cinco conceitos em qualquer situação de laboratório. Nível: pesquisador júnior aprovado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "O método científico dividido em duas grandes fases: PLANEJAR (pergunta, hipótese, desenho do experimento) e EXECUTAR & ANALISAR (coleta, gráfico, conclusão).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: bancadaImg,
    fatias: [
      {
        id: "planejar",
        rotulo: "Planejar",
        emoji: "💭",
        percentual: 40,
        cor: "#6366f1",
        descricao:
          "Fase intelectual: identificar o problema, formular hipótese testável e desenhar experimento com variáveis controladas.",
        exemplos: ["Definir pergunta", "Escrever hipótese", "Isolar variável"],
        fotoUrl: cadernoImg,
      },
      {
        id: "executar",
        rotulo: "Executar & Analisar",
        emoji: "📊",
        percentual: 60,
        cor: "#0ea5e9",
        descricao:
          "Fase prática: coletar dados com precisão, montar gráfico e defender conclusão com evidências reproduzíveis.",
        exemplos: ["Coletar dados", "Fazer gráfico", "Comunicar evidência"],
        fotoUrl: graficoImg,
      },
    ],
    falaFinal:
      "Planejar sem executar = teoria vazia. Executar sem planejar = confusão. As duas fases andam juntas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Programa 1. 3 perguntas técnicas e sua Certificação de Pesquisador Júnior é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: bancadaImg,
    perguntas: [
      {
        id: "q1",
        pergunta:
          "Por que um experimento científico precisa ISOLAR uma variável por vez?",
        fotoUrl: experimentoImg,
        opcoes: [
          { id: "a", texto: "Pra saber com certeza qual fator causou o resultado", correta: true },
          { id: "b", texto: "Pra economizar material de laboratório" },
        ],
        feedbackAcerto:
          "Correto. Se duas variáveis mudam ao mesmo tempo, você não sabe qual delas causou o efeito. Isolar é o que dá VALIDADE.",
        feedbackErro:
          "Não é economia — é RIGOR. Isolar uma variável por vez é o que permite estabelecer causa.",
      },
      {
        id: "q2",
        pergunta:
          "Qual afirmação SUSTENTA uma conclusão científica?",
        fotoUrl: graficoImg,
        opcoes: [
          { id: "a", texto: "'Os dados do gráfico mostram 28 cm no sol e 4 cm no escuro'", correta: true },
          { id: "b", texto: "'Eu tenho certeza que planta cresce mais no sol'" },
        ],
        feedbackAcerto:
          "Sim. Ciência exige EVIDÊNCIA verificável — não convicção pessoal.",
        feedbackErro:
          "Certeza pessoal não é evidência. Só dado registrado e verificável conta.",
      },
      {
        id: "q3",
        pergunta:
          "Por que publicar o protocolo do experimento pra outros grupos?",
        fotoUrl: cadernoImg,
        opcoes: [
          { id: "a", texto: "Pra que outros possam REPRODUZIR e verificar", correta: true },
          { id: "b", texto: "Pra ganhar mais curtidas na internet" },
        ],
        feedbackAcerto:
          "Isso. Reprodutibilidade é o que separa ciência de anedota. Se ninguém pode conferir, não vale como ciência.",
        feedbackErro:
          "Ciência não é engajamento — é conferência. Publicar protocolo permite REPRODUZIR e VERIFICAR.",
      },
    ],
    selo: {
      nome: "Certificação de Pesquisador Júnior",
      subtitulo: "Academia Científica · Programa 1 concluído",
      emoji: "🔬",
      cor: "from-sky-500 to-cyan-700",
    },
    falaFinal:
      "Programa 1 concluído. Você domina o método científico. Os próximos 6 laboratórios vão te desafiar com conteúdo — mas o rigor você já tem.",
  },
};
