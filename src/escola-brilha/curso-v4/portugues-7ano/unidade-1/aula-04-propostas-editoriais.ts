import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 4 — Propostas Editoriais: Sensacionalismo x Jornalismo Investigativo
 * -------------------------------------------------------------
 * BNCC: EF07LP01, EF67LP03
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-propostas-editoriais",
  titulo: "Propostas Editoriais",
  iconeTrilha: "🔦",
  bncc: ["EF07LP01", "EF67LP03"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Duas Luzes, Duas Intenções",
    historia: "Analista, nem todo veículo de comunicação tem o mesmo objetivo. Alguns priorizam chocar, exagerar e prender sua atenção a qualquer custo — isso é sensacionalismo. Outros investem tempo, apuração e cuidado para revelar fatos importantes, mesmo que isso demore semanas — isso é jornalismo investigativo. Hoje você vai aprender a apontar seu radar para a proposta editorial por trás de cada texto.",
    imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Duas Propostas Editoriais.",
    bloco: {
      titulo: "Sensacionalismo x Investigação",
      capaImagemUrl: "",
      pistas: [
        { nome: "O sensacionalismo usa títulos exagerados para chocar e gerar cliques.", imagemUrl: "" },
        { nome: "O jornalismo investigativo apura fatos com cuidado, mesmo que leve mais tempo.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Radar Editorial",
        icone: "🔦",
        linhas: [
          "  [ SENSACIONALISTA ]      [ INVESTIGATIVO ] ",
          "  Título chocante          Título factual    ",
          "  Poucas provas             Muitas provas     ",
          "  Foco na emoção            Foco nos fatos    ",
          "  Publicação instantânea    Apuração longa    ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é a principal característica de um texto sensacionalista?",
      hipoteses: [
        { texto: "Usar exageros e emoção para chamar atenção, com pouca apuração" },
        { texto: "Investigar profundamente por semanas antes de publicar" },
        { texto: "Ouvir sempre múltiplas fontes confiáveis" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! O sensacionalismo prioriza impacto emocional, não apuração.",
      feedbackErro: "Releia o cartaz: qual lado foca na emoção e não na prova?",
      dica: "Pense no que gera cliques rápidos.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Intenções Editoriais.",
    cards: [
      { palavra: "Sensacionalismo", explicacao: "Prática de explorar o exagero, o choque e a emoção para atrair a atenção do público, muitas vezes sem apuração sólida.", exemplo: "A manchete sensacionalista prometia uma catástrofe que nunca aconteceu.", imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Jornalismo Investigativo", explicacao: "Modalidade de jornalismo que busca revelar fatos ocultos por meio de apuração profunda e cuidadosa, geralmente ao longo de semanas ou meses.", exemplo: "A investigação jornalística revelou um esquema de corrupção após meses de apuração.", imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Manchete", explicacao: "Título principal de uma notícia, usado para chamar a atenção do leitor logo de início.", exemplo: "A manchete resumia o fato em poucas palavras impactantes.", imagemUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório Editorial: Comparando Manchetes",
    instrucao: "Veja como a mesma informação pode ganhar tons diferentes conforme a proposta editorial.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "SENSACIONALISTA: 'CAOS TOTAL! Bairro inteiro pode desaparecer, alertam moradores!'", explicacao: "💡 Uso de palavras fortes ('caos total', 'desaparecer') sem provas concretas apresentadas." },
          { texto: "INVESTIGATIVO: 'Estudo aponta risco de erosão em três ruas do bairro; prefeitura promete resposta em 30 dias.'", explicacao: "💡 Traz dado concreto (estudo), prazo e fonte oficial, sem exagero emocional." },
          { texto: "SENSACIONALISTA: 'Você não vai acreditar no que a prefeitura escondeu de você!'", explicacao: "💡 Cria suspense vago, sem citar fato ou fonte checável — típico de clickbait." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Duas Formas de Contar o Mesmo Fato",
      imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
      destacar: ["exagero", "apuração", "credibilidade"],
      paragrafos: [
        "A proposta editorial de um veículo revela sua prioridade: informar com precisão ou prender a atenção do público a qualquer custo. O sensacionalismo escolhe o segundo caminho, usando exagero e apelo emocional.",
        "Textos sensacionalistas costumam ter títulos chocantes, mas pouca ou nenhuma apuração por trás. Isso compromete a credibilidade da informação e pode espalhar boatos.",
        "Já o jornalismo investigativo se dedica a apurar fatos com cuidado, ouvindo diferentes fontes e checando documentos, mesmo que isso exija semanas de trabalho.",
        "Reconhecer essas duas propostas editoriais é uma habilidade essencial do leitor crítico: nem todo texto que grita mais forte está dizendo a verdade."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que caracteriza um texto sensacionalista, segundo a leitura?",
        opcoes: ["Títulos chocantes com pouca apuração", "Apuração longa e cuidadosa", "Ausência total de títulos", "Uso exclusivo de dados oficiais"],
        correta: 0,
        feedbackAcerto: "Correto! O sensacionalismo compromete a credibilidade por falta de apuração.",
        feedbackErro: "Releia o segundo parágrafo.",
        ondeEstaNoTexto: "Textos sensacionalistas costumam ter títulos chocantes, mas pouca ou nenhuma apuração.",
        dica: "Pense na relação entre título forte e apuração fraca.",
        reensino: "Reforce a diferença entre impacto emocional e apuração real.",
      },
      {
        pergunta: "O que o jornalismo investigativo prioriza?",
        opcoes: ["Apuração cuidadosa com múltiplas fontes", "Velocidade acima de tudo", "Manchetes exageradas", "Ausência de checagem"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A apuração cuidadosa é sua marca registrada.",
        feedbackErro: "Volte ao terceiro parágrafo do texto.",
        ondeEstaNoTexto: "o jornalismo investigativo se dedica a apurar fatos com cuidado, ouvindo diferentes fontes.",
        dica: "Busque a palavra 'apurar' no texto.",
        reensino: "Revise o Laboratório Editorial sobre as duas manchetes.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console Editorial",
    instrucao: "Reescreva uma manchete sensacionalista transformando-a em investigativa.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Reescrita de Manchete",
        comando: "Pegue esta manchete sensacionalista: 'ABSURDO! Escola pode fechar as portas amanhã!' e reescreva-a no estilo investigativo, com dados e fonte imaginados de forma responsável.",
        modelo: [
          "Original: 'ABSURDO! Escola pode fechar as portas amanhã!'",
          "Reescrita: 'Secretaria de Educação avalia fechamento temporário da escola após laudo estrutural; decisão sai até sexta-feira.'",
        ],
        checklist: [
          "Removi o exagero emocional?",
          "Incluí uma fonte ou dado concreto (mesmo que fictício e plausível)?",
          "O título ficou mais informativo do que chocante?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Checando a Proposta Editorial",
    bloco: {
      instrucao: "Organize o processo de análise de um texto para descobrir sua proposta editorial.",
      itens: [
        { id: "1", texto: "📥 LER O TÍTULO: Ele usa palavras exageradas ou é factual?", imagemUrl: "" },
        { id: "2", texto: "🔍 PROCURAR FONTES: O texto cita quem forneceu a informação?", imagemUrl: "" },
        { id: "3", texto: "⚖️ AVALIAR PROVAS: Há dados, documentos ou apenas opiniões soltas?", imagemUrl: "" },
        { id: "4", texto: "✅ CLASSIFICAR: Decidir se o texto é sensacionalista ou investigativo.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Ótimo! Agora você tem um método para checar propostas editoriais.",
      feedbackErro: "Sem checar as fontes (2) e provas (3), não dá pra classificar (4) com segurança.",
      dica: "Comece sempre pelo título, mas não pare nele.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Qual é a Proposta?",
    leitura: {
      titulo: "Aumento de Preços no Mercado Local",
      imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400",
      destacar: ["pesquisa", "comerciantes", "dados"],
      paragrafos: [
        "Uma pesquisa realizada com 20 comerciantes do bairro mostrou aumento médio de 12% nos preços de alimentos básicos nos últimos três meses. Especialistas apontam o custo do transporte como principal causa.",
        "Os dados foram coletados por estudantes de uma universidade local, que compararam notas fiscais de janeiro e abril.",
      ],
    },
    perguntas: [
      {
        pergunta: "Essa leitura é mais próxima de qual proposta editorial?",
        opcoes: ["Investigativa, pois usa dados e pesquisa concreta", "Sensacionalista, pois exagera os fatos", "Nenhuma das duas, pois não fala de preços", "Investigativa, mas sem nenhuma fonte"],
        correta: 0,
        feedbackAcerto: "Correto! O texto usa pesquisa e dados concretos, típico do jornalismo investigativo.",
        feedbackErro: "Observe se o texto usa dados reais ou apenas emoção.",
        dica: "Repare na palavra 'pesquisa' e nos números apresentados.",
        reensino: "Revise o Laboratório de Escaneamento para reforçar o método de checagem.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Sensacionalismo prioriza choque e emoção, com pouca apuração.",
      "Jornalismo investigativo prioriza apuração cuidadosa e múltiplas fontes.",
      "Reconhecer a proposta editorial de um texto é essencial para o leitor crítico.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que é sensacionalismo?",
        opcoes: ["Uso de exagero e emoção para chamar atenção", "Apuração cuidadosa de fatos", "Uso exclusivo de fontes oficiais", "Ausência total de título"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Releia o Dicionário do Observatório.",
        ondeEstaNoTexto: "explorar o exagero, o choque e a emoção para atrair a atenção",
        dica: "Pense em títulos chocantes sem provas.",
        reensino: "Revise o Momento 03.",
      },
      {
        pergunta: "O que diferencia o jornalismo investigativo do sensacionalismo?",
        opcoes: ["A apuração cuidadosa com múltiplas fontes", "O uso de letras maiúsculas no título", "A velocidade de publicação", "O tamanho da foto usada"],
        correta: 0,
        feedbackAcerto: "Correto! A apuração é o diferencial.",
        feedbackErro: "Releia o Laboratório Editorial.",
        ondeEstaNoTexto: "o jornalismo investigativo se dedica a apurar fatos com cuidado",
        dica: "Pense em tempo e cuidado de apuração.",
        reensino: "Revise o Momento 04.",
      },
      {
        pergunta: "Por que é importante identificar a proposta editorial de um texto?",
        opcoes: ["Porque nem todo texto que grita mais forte diz a verdade", "Porque todos os textos são sempre confiáveis", "Porque isso não afeta a leitura crítica", "Porque só jornais têm proposta editorial"],
        correta: 0,
        feedbackAcerto: "Exato! É uma habilidade essencial do leitor crítico.",
        feedbackErro: "Releia o último parágrafo da leitura guiada.",
        ondeEstaNoTexto: "nem todo texto que grita mais forte está dizendo a verdade",
        dica: "Pense na relação entre impacto e veracidade.",
        reensino: "Revise o Momento 04 sobre as duas formas de contar um fato.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Radar Editorial",
    materiais: ["Celular, jornal ou revista", "Caderno"],
    passos: [
      "Junto com sua família, encontre uma manchete que pareça exagerada.",
      "Discutam: ela cita fontes? Tem dados concretos?",
      "Tentem reescrever essa manchete de forma mais investigativa.",
      "Registrem a manchete original e a versão reescrita.",
    ],
    registro: "Escreva no caderno: 'Manchete original: [X] — Minha versão investigativa: [Y]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
