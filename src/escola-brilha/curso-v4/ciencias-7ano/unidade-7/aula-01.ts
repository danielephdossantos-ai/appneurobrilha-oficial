import type { AulaGeoV1 } from "../../types";
import painelImg from "@/assets/ciencias-7ano/u7-a1/painel-congresso.jpg";
import posterImg from "@/assets/ciencias-7ano/u7-a1/poster-cientifico.jpg";
import palcoImg from "@/assets/ciencias-7ano/u7-a1/palco-apresentacao.jpg";

/**
 * Ciências · 7º Ano · Unidade 7 · Aula 01
 * "Congresso Científico" — Departamento Final de Divulgação Científica.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-congresso-cientifico",
  titulo: "Congresso Científico",
  iconeTrilha: "🎤",
  recompensa: { xp: 200, moedas: 80, medalha: "Cientista do Ano" },
  bncc: ["EF07CI07", "EF07CI08", "EF07CI09", "EF07CI10", "EF07CI01", "EF07CI13"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Congresso científico juvenil. Toque para iniciar.",
    mapaUrl: painelImg,
    imagemDestaqueUrl: palcoImg,
    aurora:
      "Departamento 7 — a MISSÃO FINAL. Você concluiu os 6 departamentos do Centro. Agora vai APRESENTAR o que aprendeu em um Congresso Científico. Ciência só existe se for COMUNICADA.",
    falaFinal:
      "Cientistas não trabalham escondidos — publicam, apresentam, discutem. Sua vez de fazer o mesmo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Um bom pôster científico deve mostrar principalmente:",
    pergunta: "Escolha a resposta correta:",
    fotoUrl: posterImg,
    opcoes: [
      { id: "cores", titulo: "Muitas cores e desenhos bonitos", subtitulo: "só visual, sem dados", emoji: "🎨", cor: "from-slate-500 to-slate-700", fotoUrl: posterImg },
      { id: "metodo", titulo: "Pergunta, método, resultado, conclusão", subtitulo: "estrutura científica clara", emoji: "📊", cor: "from-emerald-500 to-teal-700", fotoUrl: posterImg },
      { id: "texto", titulo: "Texto denso ocupando tudo", subtitulo: "quanto mais palavras, melhor", emoji: "📝", cor: "from-rose-500 to-red-700", fotoUrl: posterImg },
    ],
    respostaCerta: "metodo",
    feedbackAcerto:
      "Correto. Ciência tem ESTRUTURA: pergunta → método → dados → conclusão. Cores e imagens SERVEM ao dado, nunca substituem.",
    feedbackErro:
      "Cor e texto ajudam, mas o CORAÇÃO do pôster é a estrutura: pergunta clara, método explicado, dados apresentados, conclusão baseada em evidência.",
    falaFinal:
      "Método científico é estrutura de raciocínio — não decoração. É essa a diferença entre ciência e opinião.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco elementos que TODO trabalho científico deve conter.",
    instrucao: "Estrutura de um trabalho científico",
    cadernos: [
      { id: "pergunta", capa: "PERGUNTA", emoji: "❓", cor: "from-sky-500 to-cyan-700", conteudo: "Toda ciência começa em uma PERGUNTA testável. Boa pergunta é específica, curiosa e permite investigação.", exemplo: "Ex.: 'Plantas crescem mais com luz azul ou vermelha?' (testável) vs. 'Plantas são bonitas?' (opinião).", fotoUrl: posterImg },
      { id: "metodo", capa: "MÉTODO", emoji: "🔬", cor: "from-emerald-500 to-teal-700", conteudo: "Como você VAI investigar. Descreve materiais, passos, tempo, variáveis controladas. Outra pessoa deve conseguir REPETIR.", exemplo: "Ex.: '3 vasos idênticos, mesma água, mesmas sementes, luz azul vs. vermelha vs. controle sem luz colorida'.", fotoUrl: painelImg },
      { id: "resultado", capa: "RESULTADO", emoji: "📊", cor: "from-amber-500 to-orange-700", conteudo: "Dados coletados — números, gráficos, fotos. Sem interpretação ainda. Mostrar o que ACONTECEU, não o que você acha.", exemplo: "Ex.: 'Após 20 dias: luz azul 12 cm, luz vermelha 15 cm, controle 8 cm'.", fotoUrl: posterImg },
      { id: "conclusao", capa: "CONCLUSÃO", emoji: "💡", cor: "from-red-500 to-rose-700", conteudo: "O que os dados DIZEM sobre a pergunta. Baseada em evidência — não em desejo. Pode confirmar OU refutar a hipótese.", exemplo: "Ex.: 'Luz vermelha favoreceu o crescimento neste experimento — hipótese confirmada'.", fotoUrl: posterImg },
      { id: "comunicacao", capa: "COMUNICAÇÃO", emoji: "🎤", cor: "from-indigo-500 to-purple-700", conteudo: "Ciência escondida NÃO EXISTE. Publicar em revista, apresentar em congresso, explicar em pôster, gravar vídeo. A DIVULGAÇÃO faz parte do método.", exemplo: "Ex.: pôster no congresso, artigo em revista, vídeo no YouTube, aula na escola.", fotoUrl: palcoImg, partes: [
        { titulo: "Escolha o público", texto: "Cientistas? Crianças? Comunidade? A linguagem muda para cada um." },
        { titulo: "Escolha o formato", texto: "Pôster, palestra, artigo, vídeo, redes sociais — cada um tem regras próprias." },
        { titulo: "Seja honesto", texto: "Mostre limitações, o que deu errado, o que você não sabe. Ciência é humildade." },
        { titulo: "Convide crítica", texto: "Deixe outros questionarem. A ciência melhora sob crítica — não fugindo dela." },
      ] },
    ],
    falaFinal:
      "Pergunta, método, resultado, conclusão, comunicação. Cinco passos que definem o pensamento científico.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Anatomia de um pôster científico. Toque em cada seção.",
    instrucao: "Toque nas seções",
    mapaUrl: posterImg,
    pontos: [
      { id: "titulo", x: 50, y: 8, emoji: "📌", cor: "from-sky-500 to-cyan-700", titulo: "Título", texto: "Curto, específico, informativo. Um leitor deve saber do que se trata em 3 segundos.", fotoUrl: posterImg },
      { id: "introducao", x: 20, y: 30, emoji: "❓", cor: "from-emerald-500 to-teal-700", titulo: "Introdução", texto: "Contexto + PERGUNTA de pesquisa. Por que esse trabalho importa?", fotoUrl: posterImg },
      { id: "metodos", x: 20, y: 60, emoji: "🔬", cor: "from-amber-500 to-orange-700", titulo: "Métodos", texto: "Como você investigou. Materiais, passos, variáveis. Alguém precisa poder REPETIR.", fotoUrl: posterImg },
      { id: "resultados", x: 70, y: 45, emoji: "📊", cor: "from-red-500 to-rose-700", titulo: "Resultados", texto: "GRÁFICOS e dados. Aqui mora o coração do pôster — resultado visual claro.", fotoUrl: posterImg },
      { id: "conclusao", x: 70, y: 75, emoji: "💡", cor: "from-indigo-500 to-purple-700", titulo: "Conclusão", texto: "O que os dados RESPONDEM. Se responderam à pergunta. E que perguntas NOVAS abriram.", fotoUrl: posterImg },
    ],
    falaFinal:
      "Título → introdução → método → resultado → conclusão. Estrutura universal de todo pôster.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de revisão dos 6 departamentos.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "REVISÃO (Depto 1): Ordem correta dos níveis de organização biológica?", fotoUrl: painelImg,
        cards: [
          { id: "a", emoji: "🧬", titulo: "Célula → tecido → órgão → sistema → organismo", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔄", titulo: "Organismo → célula → tecido", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🎲", titulo: "Não existe ordem", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Do menor ao maior — cinco degraus.",
        feedbackErro: "Do MENOR ao MAIOR: célula → tecido → órgão → sistema → organismo." },
      { id: "q2", pergunta: "REVISÃO (Depto 4): O que acontece com a energia em uma cadeia alimentar?", fotoUrl: painelImg,
        cards: [
          { id: "a", emoji: "🔥", titulo: "Diminui a cada elo (regra dos 10%)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔄", titulo: "Cicla como a matéria", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "📈", titulo: "Aumenta a cada elo", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Energia FLUI e se perde como calor. Só matéria cicla.",
        feedbackErro: "Energia NÃO cicla. Só a matéria cicla. Energia se perde a cada elo." },
      { id: "q3", pergunta: "REVISÃO (Depto 5): Queimar madeira é transformação...", fotoUrl: painelImg,
        cards: [
          { id: "a", emoji: "🔥", titulo: "Química (novas substâncias: CO₂ + H₂O + cinzas)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❄️", titulo: "Física", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "❌", titulo: "Matéria some", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Combustão = química. Madeira vira substâncias novas.",
        feedbackErro: "Madeira não VOLTA a ser madeira. É QUÍMICA — irreversível." },
    ],
    falaFinal:
      "Revisão feita. Você domina os fundamentos dos 6 departamentos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Ciência tem dois lados: DESCOBERTA (laboratório, dados, experimentos) e DIVULGAÇÃO (pôster, artigo, palestra). Sem os dois, não é ciência completa.",
    instrucao: "Toque nos interruptores",
    mapaUrl: painelImg,
    camadas: [
      { id: "descoberta", rotulo: "Descoberta", emoji: "🔬", cor: "from-sky-500 to-cyan-700", rect: { x: 5, y: 5, w: 90, h: 45 }, descricao: "Fase de laboratório: perguntas, experimentos, dados. Aqui a ciência ACONTECE.", fotoUrl: posterImg },
      { id: "divulgacao", rotulo: "Divulgação", emoji: "🎤", cor: "from-amber-500 to-orange-700", rect: { x: 5, y: 50, w: 90, h: 45 }, descricao: "Fase de comunicação: publicar, apresentar, ensinar. Aqui a ciência TRANSFORMA o mundo.", fotoUrl: palcoImg },
    ],
    falaFinal:
      "Descoberta sem divulgação = ideia esquecida. Divulgação sem descoberta = opinião vazia. As duas juntas = ciência.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "O CAMINHO de uma pesquisa — do zero à publicação.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene as etapas de um projeto científico:",
    paradas: [
      { id: "pergunta", emoji: "❓", rotulo: "1. Pergunta", descricao: "O que quero descobrir?", fotoUrl: posterImg },
      { id: "hipotese", emoji: "💭", rotulo: "2. Hipótese", descricao: "Suposição inicial, testável.", fotoUrl: posterImg },
      { id: "experimento", emoji: "🧪", rotulo: "3. Experimento", descricao: "Coleta de dados.", fotoUrl: painelImg },
      { id: "conclusao", emoji: "💡", rotulo: "4. Conclusão", descricao: "Dados confirmam ou refutam a hipótese.", fotoUrl: posterImg },
      { id: "publicacao", emoji: "🎤", rotulo: "5. Publicação", descricao: "Comunicar para o mundo.", fotoUrl: palcoImg },
    ],
    ordemCerta: ["pergunta", "hipotese", "experimento", "conclusao", "publicacao"],
    feedbackAcerto:
      "Exato. Pergunta → hipótese → experimento → conclusão → publicação. Método científico completo.",
    feedbackErro:
      "Do INÍCIO ao FIM: pergunta → hipótese → experimento → conclusão → publicação.",
    falaFinal:
      "Toda descoberta seguiu esse caminho — de Newton a você.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Manifesto para novos cientistas.",
    tituloLivro: "📓 Carta ao Pesquisador Júnior",
    subtitulo: "O que você levou dos 6 departamentos",
    paragrafos: [
      { id: "p1", texto: "VOCÊ COMEÇOU pequeno — no Departamento 1, aprendendo que TODA vida se organiza em NÍVEIS: célula, tecido, órgão, sistema, organismo. E que uma célula VEGETAL e uma ANIMAL têm base comum e diferenças específicas.", chaves: ["níveis"], definicoes: { níveis: "Escalas hierárquicas de organização biológica." }, fotoUrl: painelImg },
      { id: "p2", texto: "DEPOIS EXPANDIU: no Departamento 2 leu a ÁRVORE DA VIDA — bactérias, protistas, fungos, plantas e animais, todos parentes distantes de um mesmo ancestral. No Departamento 3 investigou o corpo humano como MÁQUINA integrada de sistemas. No 4, viu como ECOSSISTEMAS conectam tudo.", chaves: ["ancestral"], definicoes: { ancestral: "Ser vivo do passado do qual outros descendem." }, fotoUrl: painelImg },
      { id: "p3", texto: "E ENTÃO SUBIU: no Departamento 5 desceu ao ÁTOMO — a menor peça da matéria — e distinguiu transformações físicas de químicas. No Departamento 6 subiu ao COSMOS — Sistema Solar, Via Láctea, galáxias. Do átomo à galáxia em uma trajetória só. Agora, no Departamento 7, você COMUNICA o que descobriu. Este é o círculo completo da ciência.", chaves: ["cosmos"], definicoes: { cosmos: "O universo como um todo organizado — do átomo à galáxia." }, fotoUrl: palcoImg },
    ],
    falaFinal:
      "Ciência é uma escada — do menor ao maior. E de volta. Você percorreu inteira.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio final. A qual DEPARTAMENTO pertence cada tema?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "vida", emoji: "🔬", rotulo: "Organização da Vida" },
      { id: "diversidade", emoji: "🌳", rotulo: "Diversidade" },
      { id: "corpo", emoji: "🫀", rotulo: "Corpo Humano" },
      { id: "ecologia", emoji: "🌿", rotulo: "Ecologia" },
      { id: "materia", emoji: "⚗️", rotulo: "Matéria" },
      { id: "universo", emoji: "🌌", rotulo: "Terra e Universo" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cloroplasto e fotossíntese", emoji: "🌱", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Organela de célula vegetal", emoji: "🔬", cor: "from-sky-500 to-cyan-700" }, contexto: "Estrutura microscópica dentro da célula.", pecaCertaId: "vida", fotoUrl: painelImg, feedbackAcerto: "ORGANIZAÇÃO DA VIDA. Tema do Departamento 1.", feedbackErro: "Organela = escala celular = Departamento 1 (Organização da Vida)." },
      { id: "r2", municipioA: { nome: "Cadeia alimentar", emoji: "🔗", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Fluxo de energia entre seres", emoji: "⚡", cor: "from-yellow-500 to-amber-700" }, contexto: "Quem come quem em um ecossistema.", pecaCertaId: "ecologia", fotoUrl: painelImg, feedbackAcerto: "ECOLOGIA. Departamento 4.", feedbackErro: "Fluxo de energia entre seres = ECOLOGIA (Depto 4)." },
      { id: "r3", municipioA: { nome: "Núcleo externo líquido", emoji: "🔥", cor: "from-orange-500 to-red-700" }, municipioB: { nome: "Ferro em movimento cria campo magnético", emoji: "🧲", cor: "from-red-500 to-rose-700" }, contexto: "Camada da Terra a ~2900 km de profundidade.", pecaCertaId: "universo", fotoUrl: painelImg, feedbackAcerto: "TERRA E UNIVERSO. Departamento 6.", feedbackErro: "Camadas da Terra = Departamento 6 (Terra e Universo)." },
      { id: "r4", municipioA: { nome: "Cogumelo (fungo)", emoji: "🍄", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Um dos 5 reinos", emoji: "🌳", cor: "from-emerald-500 to-teal-700" }, contexto: "Grupo com parede de quitina.", pecaCertaId: "diversidade", fotoUrl: painelImg, feedbackAcerto: "DIVERSIDADE. Departamento 2 — reinos da vida.", feedbackErro: "Classificar reinos = Departamento 2 (Diversidade Biológica)." },
      { id: "r5", municipioA: { nome: "Vilosidades intestinais", emoji: "🌿", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Absorção de nutrientes", emoji: "🍞", cor: "from-amber-500 to-orange-700" }, contexto: "Estrutura do intestino delgado.", pecaCertaId: "corpo", fotoUrl: painelImg, feedbackAcerto: "CORPO HUMANO. Departamento 3.", feedbackErro: "Fisiologia humana = Departamento 3 (Corpo Humano)." },
      { id: "r6", municipioA: { nome: "H₂O — molécula de água", emoji: "💧", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "2 hidrogênios + 1 oxigênio", emoji: "⚛️", cor: "from-blue-500 to-indigo-700" }, contexto: "Molécula essencial para a vida.", pecaCertaId: "materia", fotoUrl: painelImg, feedbackAcerto: "MATÉRIA. Departamento 5.", feedbackErro: "Átomos e moléculas = Departamento 5 (Matéria)." },
    ],
    falaFinal:
      "Você domina os 6 departamentos. Passou de Pesquisador Júnior a Cientista Formado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "O que você DEVE apresentar em um pôster científico — proporção ideal de espaço.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: posterImg,
    fatias: [
      { id: "dados", rotulo: "Resultados (gráficos, dados)", emoji: "📊", percentual: 50, cor: "#0ea5e9", descricao: "Metade do pôster é DADO VISUAL. Gráficos, tabelas, fotos do experimento. É o coração do trabalho.", exemplos: ["Gráfico de barras", "Foto do experimento", "Tabela de medidas"], fotoUrl: posterImg },
      { id: "metodo", rotulo: "Método", emoji: "🔬", percentual: 25, cor: "#10b981", descricao: "Como você fez. Materiais, passos, tempo. Outra pessoa deve conseguir REPETIR.", exemplos: ["Lista de materiais", "Passo a passo", "Variáveis controladas"], fotoUrl: posterImg },
      { id: "texto", rotulo: "Intro + Conclusão", emoji: "📝", percentual: 25, cor: "#f59e0b", descricao: "Contexto no início, resposta no fim. Curtos e diretos — deixe os dados falarem.", exemplos: ["Pergunta de pesquisa", "Resposta baseada em dados", "Próximos passos"], fotoUrl: posterImg },
    ],
    falaFinal:
      "Menos texto, mais dado visual. Assim se comunica ciência com eficácia.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "ÚLTIMA MISSÃO DO CENTRO. Responda 3 perguntas para receber sua Certificação Final: Cientista Formado — Centro de Pesquisas da Vida e da Terra.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: palcoImg,
    perguntas: [
      { id: "q1", pergunta: "Qual é a ordem correta do MÉTODO CIENTÍFICO?", fotoUrl: posterImg,
        opcoes: [
          { id: "a", texto: "Pergunta → hipótese → experimento → conclusão → publicação", correta: true },
          { id: "b", texto: "Publicação → conclusão → hipótese → pergunta" },
        ],
        feedbackAcerto: "Correto. Do questionamento inicial à comunicação final.",
        feedbackErro: "Ciência COMEÇA na pergunta e TERMINA na publicação. Nunca ao contrário." },
      { id: "q2", pergunta: "Um bom pôster científico deve...", fotoUrl: posterImg,
        opcoes: [
          { id: "a", texto: "Ter estrutura clara: pergunta, método, resultado, conclusão", correta: true },
          { id: "b", texto: "Ter só imagens bonitas, sem dados" },
        ],
        feedbackAcerto: "Sim. Estrutura clara comunica muito mais que decoração.",
        feedbackErro: "Sem dados nem estrutura, é cartaz — não pôster CIENTÍFICO." },
      { id: "q3", pergunta: "Por que ciência precisa ser DIVULGADA?", fotoUrl: palcoImg,
        opcoes: [
          { id: "a", texto: "Sem comunicação, descoberta não beneficia ninguém e não pode ser questionada", correta: true },
          { id: "b", texto: "Só para ganhar prêmios" },
        ],
        feedbackAcerto: "Correto. Ciência é conhecimento COMPARTILHADO — não segredo.",
        feedbackErro: "Divulgar não é vaidade. É ESSENCIAL — sem ela, ninguém pode verificar, criticar ou aplicar a descoberta." },
    ],
    falaFinal:
      "PARABÉNS. Você concluiu o Centro de Pesquisas da Vida e da Terra. Cientista Formado — 7º ano.",
  },
};
