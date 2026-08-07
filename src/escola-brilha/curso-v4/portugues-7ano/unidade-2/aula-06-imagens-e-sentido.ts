import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 6 — Imagens e Sentido: Efeitos de Sentido de Imagens e Infográficos
 * BNCC: EF67LP08, EF07LP02
 */
export const aula06: AulaPortuguesV4 = {
  slug: "aula-06-imagens-e-sentido",
  titulo: "Imagens e Sentido",
  iconeTrilha: "🖼️",
  bncc: ["EF67LP08", "EF07LP02"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Sinal Visual Detectado",
    historia: "Analista, entramos na rede de Discursos em Rede. Aqui, imagens e infográficos carregam tanta informação quanto o texto — e às vezes até mais rápido. Uma foto escolhida com cuidado pode mudar completamente o sentido de uma notícia. Um infográfico pode simplificar (ou distorcer) dados complexos. Hoje seu radar vai aprender a ler imagens como quem lê texto.",
    imagemUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: A Imagem Também Fala.",
    bloco: {
      titulo: "Efeitos de Sentido Visual",
      capaImagemUrl: "",
      pistas: [
        { nome: "O ângulo e o enquadramento de uma foto podem reforçar uma opinião.", imagemUrl: "" },
        { nome: "Infográficos organizam dados, mas escolhas de cor e escala também comunicam intenção.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Scanner Visual",
        icone: "🖼️",
        linhas: [
          "  [ LEITURA DE IMAGEM ]        ",
          "                               ",
          "  1. ENQUADRAMENTO (O que aparece?)",
          "  2. ÂNGULO (De onde foi tirada?)",
          "  3. CORES (Transmitem alarme ou calma?)",
          "  4. LEGENDA (O que o texto diz sobre ela?)",
        ],
        estilo: "cartaz",
      },
      pergunta: "Por que uma mesma cena fotografada de ângulos diferentes pode gerar sentidos diferentes?",
      hipoteses: [
        { texto: "Porque o enquadramento destaca ou esconde elementos da cena" },
        { texto: "Porque a câmera muda a cor real dos objetos" },
        { texto: "Porque toda foto é sempre neutra e objetiva" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! O enquadramento escolhe o que o leitor vê e o que fica de fora.",
      feedbackErro: "Releia o Scanner Visual: o que muda quando o ângulo muda?",
      dica: "Pense no que fica dentro e fora do quadro.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Linguagem Visual.",
    cards: [
      { palavra: "Enquadramento", explicacao: "Escolha do que aparece dentro dos limites de uma foto ou vídeo, destacando ou ocultando elementos.", exemplo: "O enquadramento fechado na multidão dava a impressão de um evento mais cheio do que realmente estava.", imagemUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Infográfico", explicacao: "Representação visual de informações ou dados, feita para facilitar a compreensão rápida de um assunto.", exemplo: "O infográfico mostrava em barras coloridas o crescimento da população da cidade.", imagemUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Legenda", explicacao: "Texto curto que acompanha uma imagem, explicando ou direcionando sua interpretação.", exemplo: "A legenda dizia 'Manifestantes protestam pacificamente', mudando o sentido da cena tensa.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório Visual: Mesma Cena, Sentidos Diferentes",
    instrucao: "Observe como escolhas visuais mudam a interpretação de uma cena.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "FOTO A: plano fechado em um único manifestante gritando.", explicacao: "💡 Sugere tensão e conflito isolado, mesmo que o resto do evento estivesse calmo." },
          { texto: "FOTO B: plano aberto mostrando toda a praça tranquila.", explicacao: "💡 Sugere um evento pacífico e organizado, mudando totalmente a impressão do leitor." },
          { texto: "INFOGRÁFICO: barra vermelha enorme para um aumento de 2%.", explicacao: "💡 A escala exagerada faz um número pequeno parecer um problema gigante." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Poder de uma Imagem",
      imagemUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400",
      destacar: ["enquadramento", "escala", "interpretação"],
      paragrafos: [
        "Imagens não são registros neutros da realidade: cada fotografia envolve escolhas — o que entra no quadro, o ângulo, a luz, o momento exato do clique.",
        "Em notícias, o enquadramento pode reforçar uma narrativa. Uma foto de multidão fechada em poucos rostos tensos comunica algo bem diferente de uma foto aberta mostrando calma geral.",
        "Infográficos também carregam escolhas: a escala de um gráfico pode exagerar ou minimizar uma diferença real entre números, mesmo sem alterar os dados em si.",
        "Por isso, o leitor crítico observa a imagem com o mesmo cuidado que observa o texto, perguntando sempre: o que essa escolha visual está me fazendo sentir?"
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Segundo o texto, por que imagens não são registros neutros?",
        opcoes: ["Porque envolvem escolhas como enquadramento, ângulo e luz", "Porque sempre são editadas digitalmente", "Porque nunca mostram pessoas reais", "Porque são sempre em preto e branco"],
        correta: 0,
        feedbackAcerto: "Correto! Toda foto envolve decisões de quem a produziu.",
        feedbackErro: "Releia o primeiro parágrafo.",
        ondeEstaNoTexto: "cada fotografia envolve escolhas — o que entra no quadro, o ângulo, a luz",
        dica: "Pense nas decisões do fotógrafo.",
        reensino: "Revise o Laboratório Visual sobre a mesma cena.",
      },
      {
        pergunta: "Como um infográfico pode distorcer a percepção de um dado, segundo o texto?",
        opcoes: ["Usando uma escala que exagera ou minimiza a diferença", "Mudando os números reais dos dados", "Usando sempre a cor cinza", "Não usando nenhuma imagem"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A escala visual pode enganar mesmo sem mudar os números.",
        feedbackErro: "Volte ao terceiro parágrafo.",
        ondeEstaNoTexto: "a escala de um gráfico pode exagerar ou minimizar uma diferença real entre números",
        dica: "Pense no exemplo da barra vermelha do Laboratório Visual.",
        reensino: "Revise o Momento_ensinoVisual sobre escala.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console Visual",
    instrucao: "Descreva duas versões visuais de uma mesma cena, com efeitos de sentido diferentes.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Duas Fotos, Dois Sentidos",
        comando: "Descreva em palavras duas fotos imaginárias do mesmo evento (ex.: uma festa da escola): uma que passe uma boa impressão e outra que passe uma impressão ruim, usando enquadramento e ângulo diferentes.",
        modelo: [
          "Foto 1 (positiva): plano aberto mostrando alunos sorrindo e decoração colorida.",
          "Foto 2 (negativa): plano fechado em um copo derrubado no chão.",
        ],
        checklist: [
          "Descrevi o enquadramento de cada foto?",
          "Expliquei o sentido que cada uma transmite?",
          "As duas descrevem o mesmo evento?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Lendo uma Imagem Jornalística",
    bloco: {
      instrucao: "Organize o processo de leitura crítica de uma imagem em uma notícia.",
      itens: [
        { id: "1", texto: "📥 OBSERVAR O ENQUADRAMENTO: O que está dentro e fora do quadro?", imagemUrl: "" },
        { id: "2", texto: "🔍 LER A LEGENDA: O texto que acompanha a imagem direciona a interpretação?", imagemUrl: "" },
        { id: "3", texto: "⚖️ COMPARAR COM O TEXTO: A imagem reforça ou contradiz a matéria?", imagemUrl: "" },
        { id: "4", texto: "✅ CONCLUIR: Decidir se a imagem ajuda a entender ou distorce o fato.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Excelente leitura visual, Analista!",
      feedbackErro: "Observe a imagem (1), leia a legenda (2) e só depois compare com o texto (3).",
      dica: "Sempre comece pela imagem em si, antes da legenda.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Infográfico Sob Análise.",
    leitura: {
      titulo: "O Gráfico da Discórdia",
      imagemUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400",
      destacar: ["escala", "eixo", "distorção"],
      paragrafos: [
        "Um infográfico publicado em rede social mostrava uma barra gigante para o partido A e uma barra pequena para o partido B, sugerindo uma diferença enorme entre eles.",
        "Ao checar os números reais, a diferença era de apenas 3%. O eixo do gráfico havia sido cortado, começando em 40% em vez de 0%, o que exagerava visualmente a diferença.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que o infográfico dava uma impressão exagerada da diferença entre os partidos?",
        opcoes: ["Porque o eixo do gráfico foi cortado, ampliando a diferença visual", "Porque os números reais eram realmente enormes", "Porque não havia nenhum dado no gráfico", "Porque as cores eram iguais para os dois partidos"],
        correta: 0,
        feedbackAcerto: "Correto! Cortar o eixo é uma técnica clássica de distorção visual.",
        feedbackErro: "Releia o segundo parágrafo com atenção.",
        dica: "Pense em onde o eixo do gráfico começava.",
        reensino: "Revise o Laboratório Visual sobre escala exagerada.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Imagens envolvem escolhas de enquadramento, ângulo e luz que afetam o sentido.",
      "Infográficos podem distorcer percepções através da escala usada.",
      "O leitor crítico analisa imagens com o mesmo cuidado que analisa textos.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é enquadramento?",
        opcoes: ["A escolha do que aparece dentro dos limites de uma imagem", "A cor predominante de uma foto", "O tamanho do arquivo da imagem", "O nome do fotógrafo"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Releia o Dicionário do Observatório.",
        ondeEstaNoTexto: "Escolha do que aparece dentro dos limites de uma foto",
        dica: "Pense no que fica dentro e fora do quadro.",
        reensino: "Revise o Momento 03.",
      },
      {
        pergunta: "Como um infográfico pode enganar sem mudar os dados reais?",
        opcoes: ["Alterando a escala ou o eixo do gráfico", "Usando apenas números pares", "Não tendo nenhuma cor", "Sendo publicado de noite"],
        correta: 0,
        feedbackAcerto: "Correto! A escala é uma ferramenta poderosa de distorção visual.",
        feedbackErro: "Releia a Leitura Independente sobre o gráfico da discórdia.",
        ondeEstaNoTexto: "O eixo do gráfico havia sido cortado",
        dica: "Pense em onde o gráfico começa a contar.",
        reensino: "Revise o Momento 08.",
      },
      {
        pergunta: "Por que o leitor crítico deve observar imagens com atenção?",
        opcoes: ["Porque escolhas visuais podem reforçar ou distorcer um sentido", "Porque toda imagem é sempre falsa", "Porque imagens nunca têm relação com o texto", "Porque só infográficos merecem atenção"],
        correta: 0,
        feedbackAcerto: "Exato! Imagem e texto se combinam para construir sentido.",
        feedbackErro: "Releia o último parágrafo da leitura guiada.",
        ondeEstaNoTexto: "o leitor crítico observa a imagem com o mesmo cuidado que observa o texto",
        dica: "Pense na relação entre imagem e sentido.",
        reensino: "Revise o Momento 04.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Scanner Visual",
    materiais: ["Celular ou jornal com fotos/infográficos", "Caderno"],
    passos: [
      "Encontrem juntos uma foto de notícia ou um infográfico.",
      "Observem o enquadramento e, se houver, a escala usada.",
      "Discutam: essa imagem passa uma impressão exagerada ou equilibrada?",
      "Registrem a conclusão da família.",
    ],
    registro: "Escreva no caderno: 'Imagem analisada: [X] — Nossa conclusão: [Y]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
