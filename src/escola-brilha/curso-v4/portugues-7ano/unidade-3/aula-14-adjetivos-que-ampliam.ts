import type { AulaPortuguesV4 } from "../../types";

/** Aula 14 — Adjetivos que Ampliam o Sujeito — BNCC: EF07LP08 */
export const aula14: AulaPortuguesV4 = {
  slug: "aula-14-adjetivos-que-ampliam",
  titulo: "Adjetivos que Ampliam",
  iconeTrilha: "🔬",
  bncc: ["EF07LP08"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Ampliação de Sinal",
    historia: "Analista, um substantivo sozinho é um sinal fraco. Adjetivos e expressões que o acompanham funcionam como amplificadores: entregam mais precisão à mensagem. Hoje você vai aprender a reconhecer essas peças que ampliam o sujeito e os substantivos de uma oração.",
    imagemUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Amplificadores de Sentido.",
    bloco: {
      titulo: "Escaneamento de Adjuntos",
      capaImagemUrl: "",
      pistas: [
        { nome: "Adjetivos caracterizam o substantivo.", imagemUrl: "" },
        { nome: "Expressões inteiras também podem ampliar um substantivo.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Amplificação",
        icone: "🔬",
        linhas: [
          "  [ ADJUNTO ADNOMINAL ]     ",
          "                            ",
          "  O robô VELOZ venceu.      ",
          "  O robô DA BASE venceu.    ",
          "                            ",
          "  Ambos ampliam 'robô'.     ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que faz um adjetivo ou uma expressão adjetiva dentro da oração?",
      hipoteses: [
        { texto: "Caracteriza e amplia o sentido de um substantivo" },
        { texto: "Substitui o verbo da oração" },
        { texto: "Indica o tempo em que a ação ocorre" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Sinal amplificado! Adjetivos caracterizam substantivos.",
      feedbackErro: "Reveja o painel: 'veloz' e 'da base' caracterizam 'robô'.",
      dica: "Pense em uma palavra que descreve uma característica do substantivo.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Amplificadores.",
    cards: [
      { palavra: "Adjetivo", explicacao: "Palavra que atribui uma qualidade ou característica a um substantivo.", exemplo: "O sensor antigo parou de funcionar.", imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Locução adjetiva", explicacao: "Duas ou mais palavras que juntas exercem a função de um adjetivo.", exemplo: "O relatório de emergência foi enviado.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Adjunto adnominal", explicacao: "Termo que se liga a um substantivo para caracterizá-lo, especificá-lo ou determiná-lo.", exemplo: "A base secreta foi localizada.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Ampliando o Substantivo",
    instrucao: "Veja formas diferentes de caracterizar um mesmo substantivo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O sinal FRACO sumiu.", explicacao: "💡 ADJETIVO: uma única palavra caracteriza o substantivo.\n> Ex: 'Casa grande.' e 'Analista atenta.'" },
          { texto: "O sinal DE EMERGÊNCIA sumiu.", explicacao: "💡 LOCUÇÃO ADJETIVA: expressão com preposição que caracteriza o substantivo.\n> Ex: 'Roupa de couro.' e 'Mensagem sem sentido.'" },
          { texto: "O sinal, MUITO FRACO, sumiu.", explicacao: "💡 EXPRESSÃO AMPLIADA: advérbio + adjetivo reforçando a característica.\n> Ex: 'Prédio extremamente alto.' e 'Notícia bem triste.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "As Peças que Caracterizam",
      imagemUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400",
      destacar: ["adjetivo", "locução adjetiva", "caracteriza"],
      paragrafos: [
        "Um substantivo isolado transmite pouca informação. Dizer 'o robô' não diz quase nada sobre ele. Mas ao acrescentar um adjetivo, como em 'o robô veloz', a imagem se torna muito mais precisa.",
        "Além dos adjetivos simples, existem as locuções adjetivas: expressões formadas por preposição e substantivo que funcionam como um adjetivo. 'O robô de última geração' tem o mesmo papel de 'o robô moderno'.",
        "Essas construções são chamadas de adjuntos adnominais, pois se ligam ao nome (substantivo) para especificá-lo, qualificá-lo ou determiná-lo dentro da oração.",
        "Dominar o uso de adjetivos e locuções adjetivas é essencial para descrever com precisão pessoas, objetos e situações em qualquer texto.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que é uma locução adjetiva, segundo o texto?",
        opcoes: ["Uma expressão de preposição e substantivo que funciona como adjetivo", "Um verbo que caracteriza a ação", "Uma palavra que substitui o sujeito", "Um sinal de pontuação especial"],
        correta: 0,
        feedbackAcerto: "Correto! Locução adjetiva é uma expressão com função de adjetivo.",
        feedbackErro: "Releia o segundo parágrafo com atenção à definição.",
        ondeEstaNoTexto: "existem as locuções adjetivas: expressões formadas por preposição e substantivo...",
        dica: "É formada por mais de uma palavra, mas funciona como um adjetivo só.",
        reensino: "Locução adjetiva substitui um adjetivo simples, mantendo o mesmo papel na frase.",
      },
      {
        pergunta: "Como se chama o termo que se liga ao substantivo para especificá-lo?",
        opcoes: ["Adjunto adnominal", "Objeto direto", "Predicado verbal", "Sujeito composto"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Adjunto adnominal se liga ao nome (substantivo).",
        feedbackErro: "O termo aparece no terceiro parágrafo do texto.",
        ondeEstaNoTexto: "Essas construções são chamadas de adjuntos adnominais...",
        dica: "'Adnominal' vem de 'ad' (junto) + 'nominal' (nome).",
        reensino: "Adjunto adnominal caracteriza, qualifica ou determina um substantivo.",
      },
    ],
  },
  momento06_personagensCenario: { instrucao: "Nenhum agente detectado.", perguntas: [] },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Amplie substantivos com adjetivos e locuções adjetivas.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relatório de Caracterização",
        comando: "Descreva um objeto do Observatório usando 2 adjetivos e 1 locução adjetiva diferentes.",
        modelo: ["O painel luminoso pisca. (adjetivo)", "O painel de controle pisca. (locução adjetiva)", "O painel antigo e frágil pisca. (dois adjetivos)"],
        checklist: ["Usei ao menos 2 adjetivos?", "Usei ao menos 1 locução adjetiva?", "As características fazem sentido com o objeto escolhido?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Identificando o Adjunto",
    bloco: {
      instrucao: "Organize o processo de identificação de um adjunto adnominal.",
      itens: [
        { id: "1", texto: "📥 LEITURA: Localize o substantivo na oração.", imagemUrl: "" },
        { id: "2", texto: "🔍 BUSCA: Procure palavras ou expressões ligadas a ele.", imagemUrl: "" },
        { id: "3", texto: "🔬 TESTE: Verifique se essa palavra caracteriza ou especifica o substantivo.", imagemUrl: "" },
        { id: "4", texto: "✅ CLASSIFICAÇÃO: Se caracteriza, é adjetivo ou locução adjetiva (adjunto adnominal).", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Amplificação concluída! Você identifica adjuntos adnominais com precisão.",
      feedbackErro: "Revise a ordem: primeiro o substantivo, depois as palavras ligadas, depois o teste.",
      dica: "Você só testa a caracterização (3) depois de achar a palavra candidata (2).",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Ficha Técnica.",
    leitura: {
      titulo: "Ficha Técnica: Robô Explorador",
      imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      destacar: ["resistente", "de titânio", "silencioso"],
      paragrafos: [
        "O robô explorador possui uma estrutura resistente e uma carcaça de titânio. Seu motor silencioso permite operações noturnas sem chamar atenção.",
      ],
    },
    perguntas: [
      {
        pergunta: "Na expressão 'carcaça de titânio', o termo 'de titânio' é classificado como:",
        opcoes: ["Locução adjetiva", "Objeto direto", "Verbo transitivo", "Sujeito da oração"],
        correta: 0,
        feedbackAcerto: "Exato! 'De titânio' caracteriza a carcaça, funcionando como adjetivo.",
        feedbackErro: "Observe que a expressão tem preposição + substantivo caracterizando outro substantivo.",
        dica: "Substitua por um adjetivo simples: carcaça metálica.",
        reensino: "Locuções adjetivas equivalem a adjetivos, mas são formadas por mais de uma palavra.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Adjetivos caracterizam substantivos, atribuindo qualidades.",
      "Locuções adjetivas são expressões que funcionam como adjetivo.",
      "Ambos exercem a função de adjunto adnominal na oração.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 'A porta de vidro quebrou', o termo 'de vidro' é:",
        opcoes: ["Locução adjetiva", "Objeto indireto", "Verbo", "Predicado"],
        correta: 0,
        feedbackAcerto: "Correto! 'De vidro' caracteriza 'porta', funcionando como locução adjetiva.",
        feedbackErro: "Substitua a expressão por um adjetivo: porta vítrea.",
        ondeEstaNoTexto: "",
        dica: "É formada por preposição + substantivo.",
        reensino: "Locução adjetiva sempre pode ser trocada por um adjetivo equivalente.",
      },
      {
        pergunta: "Qual das frases apresenta um adjetivo simples caracterizando o substantivo?",
        opcoes: ["O prédio alto desabou.", "O prédio de concreto desabou.", "O prédio desabou rapidamente.", "O prédio, o mais antigo, desabou."],
        correta: 0,
        feedbackAcerto: "Isso mesmo! 'Alto' é um adjetivo de uma só palavra.",
        feedbackErro: "Procure a frase em que a característica é dada por apenas uma palavra.",
        ondeEstaNoTexto: "",
        dica: "As locuções adjetivas usam preposição; o adjetivo simples não.",
        reensino: "Adjetivo simples é uma única palavra que caracteriza o substantivo.",
      },
      {
        pergunta: "Qual é a função do adjunto adnominal na oração?",
        opcoes: ["Caracterizar, especificar ou determinar um substantivo", "Indicar o tempo da ação verbal", "Substituir o núcleo do predicado", "Ligar duas orações"],
        correta: 0,
        feedbackAcerto: "Perfeito! O adjunto adnominal está sempre ligado a um substantivo.",
        feedbackErro: "Volte ao painel de amplificação e relembre a definição.",
        ondeEstaNoTexto: "",
        dica: "Pense na palavra 'nome' dentro de 'adnominal'.",
        reensino: "Adjunto adnominal amplia o sentido de um substantivo, nunca de um verbo.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Descrição Precisa",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escolha um objeto da sua casa.",
      "Descreva-o usando 2 adjetivos e 1 locução adjetiva.",
      "Leia a descrição para a família sem dizer o nome do objeto.",
      "Registre se a família adivinhou o objeto correto.",
    ],
    registro: "Escreva: 'Missão Descrição - Objeto: [X], adivinharam: [sim/não]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
