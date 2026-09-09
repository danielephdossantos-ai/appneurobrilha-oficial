import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 21 — Conto Fantástico: Enredo e Clímax
 * BNCC: EF67LP28, EF67LP27
 */
export const aula21: AulaPortuguesV4 = {
  slug: "aula-21-conto-fantastico",
  titulo: "Conto Fantástico",
  iconeTrilha: "🌌",
  bncc: ["EF67LP28", "EF67LP27"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Setor Literatura: Arquivos Impossíveis",
    historia: "Analista, o Observatório abriu um novo setor: a Ala Fantástica. Aqui os arquivos não seguem as leis da física comum — portas levam a outros mundos, objetos falam, o tempo anda para trás. Seu trabalho hoje é decodificar como esses textos constroem um enredo e conduzem o leitor até o clímax, o ponto de maior tensão da história. Prepare-se: a lógica do real vai ser quebrada de propósito.",
    imagemUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: A Anatomia do Enredo.",
    bloco: {
      titulo: "O Mapa da Tensão Narrativa",
      capaImagemUrl: "",
      pistas: [
        { nome: "Toda história tem um momento de maior tensão.", imagemUrl: "" },
        { nome: "O fantástico mistura o real com o impossível.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Estrutura do Enredo",
        icone: "🌀",
        linhas: [
          "  [ CURVA NARRATIVA ]",
          "                      ",
          "  1. APRESENTAÇÃO     ",
          "     > Personagem e mundo normal",
          "          ↓           ",
          "  2. COMPLICAÇÃO      ",
          "     > Algo estranho invade a rotina",
          "          ↓           ",
          "  3. CLÍMAX           ",
          "     > O pico de tensão, a decisão crucial",
          "          ↓           ",
          "  4. DESFECHO         ",
          "     > A resolução (ou o mistério que fica)",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que é o 'clímax' de uma narrativa?",
      hipoteses: [
        { texto: "O ponto de maior tensão da história" },
        { texto: "O nome do personagem principal" },
        { texto: "O título do conto" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto. O clímax é onde a tensão da narrativa atinge o ápice.",
      feedbackErro: "Releia o cartaz: o clímax é uma etapa da curva, não um nome.",
      dica: "Pense no momento em que você prende a respiração lendo.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Termos da Narrativa.",
    cards: [
      { palavra: "Enredo", explicacao: "É a sequência de acontecimentos que formam a história, do início ao fim.", exemplo: "O enredo do conto girava em torno de um relógio que voltava o tempo.", imagemUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Clímax", explicacao: "É o momento de maior tensão e emoção da narrativa, quando o conflito chega ao limite.", exemplo: "No clímax, a personagem finalmente abre a porta proibida.", imagemUrl: "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Fantástico", explicacao: "Gênero em que elementos impossíveis ou sobrenaturais invadem um mundo aparentemente real.", exemplo: "É fantástico quando um espelho comum passa a mostrar outro tempo.", imagemUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Enredo: Marcando a Curva de Tensão",
    instrucao: "Veja como cada frase indica uma etapa da curva narrativa.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Marina vivia uma rotina comum, até encontrar a porta no fundo do quintal.", explicacao: "💡 APRESENTAÇÃO + COMPLICAÇÃO: o mundo normal é interrompido por um elemento estranho." },
          { texto: "O coração dela disparou quando a porta começou a se abrir sozinha.", explicacao: "💡 CLÍMAX: a tensão sobe ao ponto máximo, a decisão está próxima." },
          { texto: "Ela nunca mais contou a ninguém o que viu do outro lado.", explicacao: "💡 DESFECHO: a história se fecha, mas o mistério pode continuar no ar." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Arquivo: leia o conto fantástico completo.",
    leitura: {
      titulo: "O Relógio que Andava ao Contrário",
      imagemUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=400",
      destacar: ["relógio", "clímax", "impossível", "voltar"],
      paragrafos: [
        "Théo herdou de seu avô um relógio de bolso enferrujado. Achou estranho, mas o guardou na gaveta sem dar muita importância — até a noite em que o ponteiro começou a girar sozinho, na direção contrária.",
        "No dia seguinte, tudo o que ele tinha vivido na véspera se repetia, palavra por palavra, exceto por um detalhe que só ele percebia. O impossível havia se instalado em sua rotina e ninguém mais parecia notar.",
        "No sétimo dia repetido, Théo entendeu: cada vez que o relógio voltava, ele tinha uma nova chance de consertar um erro que havia cometido com o avô antes de ele morrer. No clímax da história, com o coração disparado, decidiu falar o que nunca tinha coragem de dizer.",
        "Quando finalmente disse as palavras certas, o relógio parou de girar para trás. Théo nunca soube se aquilo tinha sido mesmo real, mas guardou o relógio parado como prova de que, ao menos uma vez, o tempo lhe dera uma segunda chance.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log: compreensão do conto.",
    perguntas: [
      {
        pergunta: "Qual é o elemento fantástico que rompe a rotina de Théo?",
        opcoes: ["O relógio que anda para trás e repete os dias", "Um cachorro que fala", "Uma viagem de avião", "Um exame na escola"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, o relógio enferrujado que gira ao contrário é o gatilho do fantástico.",
        feedbackErro: "Volte ao primeiro parágrafo e observe o objeto herdado do avô.",
        ondeEstaNoTexto: "o ponteiro começou a girar sozinho, na direção contrária",
        dica: "O objeto está na primeira frase do conto.",
        reensino: "No conto fantástico, um objeto ou evento comum ganha um poder impossível — aqui é o relógio.",
      },
      {
        pergunta: "O que acontece no momento de clímax da narrativa?",
        opcoes: ["Théo decide dizer o que nunca teve coragem de falar ao avô", "Théo compra um relógio novo", "Théo perde o relógio na rua", "Théo viaja para outra cidade"],
        correta: 0,
        feedbackAcerto: "Exato: é a decisão emocional de Théo que representa o pico de tensão.",
        feedbackErro: "Procure o parágrafo que fala sobre o sétimo dia repetido.",
        ondeEstaNoTexto: "No clímax da história, com o coração disparado, decidiu falar",
        dica: "É o momento em que o texto usa a própria palavra 'clímax'.",
        reensino: "O clímax é sempre o ponto de maior tensão emocional antes da resolução.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Cena sob análise: identifique personagem e cenário do conto.",
    perguntas: [
      {
        pergunta: "Quem é o personagem principal do conto 'O Relógio que Andava ao Contrário'?",
        opcoes: ["Théo", "O avô de Théo", "Um vizinho", "Uma professora"],
        correta: 0,
        feedbackAcerto: "Correto! Théo é quem vive a repetição dos dias e toma a decisão no clímax.",
        feedbackErro: "Releia quem recebeu o relógio de herança no início do texto.",
        ondeEstaNoTexto: "Théo herdou de seu avô um relógio de bolso enferrujado.",
        dica: "É o nome citado logo na primeira frase.",
        reensino: "O protagonista é quem vive o conflito central da história do início ao fim.",
      },
      {
        pergunta: "Qual objeto funciona como cenário/gatilho do elemento fantástico na história?",
        opcoes: ["O relógio de bolso do avô", "A gaveta da cozinha", "O quintal da casa", "O relógio da escola"],
        correta: 0,
        feedbackAcerto: "Isso! O relógio de bolso é o objeto central que desencadeia o fantástico.",
        feedbackErro: "Pense no objeto herdado, guardado na gaveta, que começa a girar sozinho.",
        ondeEstaNoTexto: "Achou estranho, mas o guardou na gaveta sem dar muita importância",
        dica: "Está no título do conto.",
        reensino: "No fantástico, um objeto comum pode se tornar o centro de toda a tensão narrativa.",
      },
    ],
  },
  momento_escrita: {
    titulo: "Console de Criação: Seu Conto Fantástico",
    instrucao: "Crie o esqueleto de um mini conto fantástico com clímax bem marcado.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Arquivo Fantástico",
        comando: "Escreva um parágrafo em que um objeto comum do seu dia a dia ganha um poder impossível. Marque claramente o clímax.",
        modelo: [
          "APRESENTAÇÃO: Uma mochila comum, usada todos os dias para a escola.",
          "COMPLICAÇÃO: Um dia, ela começa a ficar mais pesada conforme o dono mente.",
          "CLÍMAX: No momento de contar uma mentira grande, a mochila trava a porta.",
        ],
        checklist: [
          "Apresentei o objeto e o mundo normal?",
          "Inseri um elemento impossível?",
          "Marquei um momento de clímax claro?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Curva Narrativa do Conto",
    bloco: {
      instrucao: "Organize as etapas do conto 'O Relógio que Andava ao Contrário' na ordem correta.",
      itens: [
        { id: "1", texto: "📦 APRESENTAÇÃO: Théo herda o relógio enferrujado do avô.", imagemUrl: "" },
        { id: "2", texto: "🌀 COMPLICAÇÃO: O relógio começa a girar ao contrário e os dias se repetem.", imagemUrl: "" },
        { id: "3", texto: "🔥 CLÍMAX: Théo decide dizer o que nunca teve coragem de falar.", imagemUrl: "" },
        { id: "4", texto: "🔚 DESFECHO: O relógio para e Théo guarda a lembrança da segunda chance.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Curva narrativa reconstruída com sucesso!",
      feedbackErro: "Repense: primeiro o normal, depois o estranho, depois a decisão, por fim a resolução.",
      dica: "O clímax sempre vem antes do desfecho, nunca depois.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: outro fragmento fantástico.",
    leitura: {
      titulo: "A Janela da Rua Errada",
      imagemUrl: "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?auto=format&fit=crop&q=80&w=400",
      destacar: ["janela", "impossível", "decisão"],
      paragrafos: [
        "Toda vez que Renan olhava pela janela do quarto, via a mesma rua de sempre. Até a noite em que, olhando de novo, viu uma rua que não existia na cidade.",
        "No auge do medo, com a mão tremendo sobre a maçaneta, ele precisou decidir: abrir a janela ou fingir que nada tinha visto.",
        "Escolheu abrir. E foi só então que entendeu que aquela rua sempre existiu — só não podia ser vista por quem tinha medo de mudar.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual trecho representa o clímax deste fragmento?",
        opcoes: ["O momento em que Renan decide abrir ou não a janela", "A descrição da rua de sempre", "O nome do personagem", "O título do texto"],
        correta: 0,
        feedbackAcerto: "Exato! É a decisão sob tensão máxima que marca o clímax.",
        feedbackErro: "Procure o parágrafo em que a mão dele treme sobre a maçaneta.",
        dica: "O clímax é sempre o momento de maior tensão, ligado a uma escolha.",
        reensino: "Releia o Laboratório de Enredo: o clímax é a etapa entre a complicação e o desfecho.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "O enredo segue uma curva: apresentação, complicação, clímax e desfecho.",
      "O clímax é o ponto de maior tensão da narrativa.",
      "No conto fantástico, um elemento impossível invade um mundo aparentemente real.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que caracteriza o gênero conto fantástico?",
        opcoes: ["A mistura de elementos reais com impossíveis", "A ausência total de personagens", "O uso exclusivo de diálogos", "A obrigatoriedade de rimas"],
        correta: 0,
        feedbackAcerto: "Correto! O fantástico rompe a lógica do real com um elemento impossível.",
        feedbackErro: "Revise o card de vocabulário sobre 'Fantástico'.",
        ondeEstaNoTexto: "Gênero em que elementos impossíveis ou sobrenaturais invadem um mundo real",
        dica: "Pense na definição do Dicionário do Observatório.",
        reensino: "Reveja o Momento 03: fantástico é a fusão entre real e impossível.",
      },
      {
        pergunta: "Em qual etapa do enredo o conflito atinge seu ponto mais alto?",
        opcoes: ["Clímax", "Apresentação", "Título", "Vocabulário"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, o clímax é o pico de tensão.",
        feedbackErro: "Reveja o cartaz da Curva de Tensão Narrativa.",
        ondeEstaNoTexto: "3. CLÍMAX > O pico de tensão, a decisão crucial",
        dica: "É a mesma palavra usada no título desta aula.",
        reensino: "O clímax vem depois da complicação e antes do desfecho.",
      },
      {
        pergunta: "No conto 'O Relógio que Andava ao Contrário', o que resolve o conflito de Théo?",
        opcoes: ["Ele diz o que nunca teve coragem de falar ao avô", "Ele joga o relógio fora", "Ele vende o relógio", "Ele esquece o relógio na gaveta"],
        correta: 0,
        feedbackAcerto: "Correto, a fala corajosa de Théo resolve o ciclo de repetição.",
        feedbackErro: "Releia o terceiro e quarto parágrafos do conto.",
        ondeEstaNoTexto: "decidiu falar o que nunca tinha coragem de dizer",
        dica: "É a ação que acontece no clímax.",
        reensino: "O desfecho normalmente resolve (ou explica) o que aconteceu no clímax.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Conto em Família",
    materiais: ["Papel ou caderno", "Um objeto qualquer da casa"],
    passos: [
      "Escolha um objeto comum da sua casa (uma colher, um espelho, um sapato).",
      "Junto com um familiar, invente um poder impossível para esse objeto.",
      "Conte a história em voz alta, destacando o momento de clímax.",
      "Registre no caderno qual foi o clímax escolhido e por quê.",
    ],
    registro: "Escreva: 'Missão Conto Fantástico - Meu objeto foi [X] e o clímax da história foi [Y]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
