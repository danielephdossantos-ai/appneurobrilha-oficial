import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 2 — Concordância Nominal e Verbal
 * -------------------------------------------------------------
 * A Central de Investigação da Linguagem recebe um caso de "peças que
 * não se encaixam": frases em que substantivo e adjetivo, ou sujeito e
 * verbo, não combinam em gênero, número ou pessoa. O investigador
 * aprende a destravar esses casos que mais confundem no dia a dia.
 *
 * Foco pedagógico: aplicar concordância nominal (substantivo + adjetivo)
 * e concordância verbal (sujeito + verbo) em casos comuns de confusão.
 *
 * BNCC: EF05LP06, EF05LP26, EF35LP07
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-concordancia",
  titulo: "Concordância Nominal e Verbal",
  iconeTrilha: "⚖️",
  bncc: ["EF05LP06", "EF05LP26", "EF35LP07"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O Caso das Peças que Não se Encaixam",
    historia:
      "Um relatório chegou com marcações em vermelho: \"OS MENINO CHEGOU\" e \"A TURMA ESTUDIOSOS\". — Toda frase tem peças que precisam ENCAIXAR — explicou a investigadora-chefe. — O substantivo e o adjetivo combinam em gênero e número (concordância nominal). O sujeito e o verbo combinam em número e pessoa (concordância verbal). Quando essas peças não se encaixam, o texto soa estranho, mesmo que a gente entenda o sentido. Hoje você vai aprender a destravar os casos que mais confundem — inclusive os que enganam até gente grande.",
  },

  momento02_previsao: {
    instrucao: "Antes de investigar o caso completo, observe estas duas frases suspeitas.",
    bloco: {
      titulo: "O Caso das Peças que Não se Encaixam",
      recado: {
        rotulo: "Trecho do depoimento suspeito",
        icone: "🧩",
        linhas: [
          "\"Os aluno chegou atrasado.\"",
          "\"A menina, junto com os colegas, saíram cedo.\"",
        ],
        estilo: "papel",
      },
      pergunta: "O que você acha que está errado nessas frases?",
      hipoteses: [
        { texto: "As palavras não combinam em número ou pessoa entre si" },
        { texto: "As frases têm palavras muito difíceis" },
        { texto: "As frases estão em outro idioma" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "⚖️ Correto! Em 'os aluno chegou', o artigo está no plural mas o substantivo e o verbo estão no singular — as peças não se encaixam.",
      feedbackErro:
        "Repare no plural de 'os' e no singular de 'aluno' e 'chegou' — é aí que mora o problema de concordância.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas ferramentas vão te ajudar a destravar qualquer caso de concordância.",
    cards: [
      {
        palavra: "concordância nominal",
        explicacao: "É o encaixe entre substantivo, artigo e adjetivo: todos devem combinar em gênero (masculino/feminino) e número (singular/plural).",
        exemplo: "'As meninas estudiosas' (todas no feminino plural) — não 'As meninas estudioso'.",
      },
      {
        palavra: "concordância verbal",
        explicacao: "É o encaixe entre o sujeito e o verbo: o verbo deve combinar em número (singular/plural) e pessoa com o sujeito da frase.",
        exemplo: "'Os alunos chegaram' (sujeito plural, verbo plural) — não 'Os alunos chegou'.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relatório abaixo prestando atenção nas concordâncias corrigidas — todas as peças aqui se encaixam.",
    leitura: {
      titulo: "Relatório Revisado: O Caso do Depósito Trancado",
      destacar: ["Os funcionários confirmaram", "as portas estavam trancadas", "A equipe, atenta aos detalhes, percebeu"],
      paragrafos: [
        "Os funcionários confirmaram que as portas estavam trancadas desde a noite anterior. Nenhuma janela quebrada foi encontrada, e as câmeras antigas não registraram nenhum movimento suspeito.",
        "A equipe, atenta aos detalhes, percebeu uma pista importante: o cadeado enferrujado estava aberto, mas a corrente permanecia intacta sobre o chão empoeirado.",
        "Depois de horas de investigação, os detetives concluíram que a entrada havia sido feita por um túnel escondido — e não pela porta principal, como todos haviam suposto no início.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Na frase 'Os funcionários confirmaram que as portas estavam trancadas', por que o verbo 'confirmaram' está no plural?",
        opcoes: [
          "Porque o sujeito 'os funcionários' está no plural",
          "Porque o verbo sempre fica no plural",
          "Porque 'portas' está no plural",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! O verbo concorda com o sujeito da oração, que é 'os funcionários', no plural.",
        feedbackErro: "O verbo concorda com o SUJEITO da frase — pergunte 'quem confirmou?' para achar o sujeito.",
        ondeEstaNoTexto: "Os funcionários confirmaram que as portas estavam trancadas desde a noite anterior.",
      },
      {
        pergunta: "Em 'A equipe, atenta aos detalhes, percebeu', a palavra 'atenta' concorda com qual palavra?",
        opcoes: ["detalhes", "equipe", "percebeu"],
        correta: 1,
        feedbackAcerto: "⚖️ Correto! 'Atenta' é adjetivo e concorda com o substantivo 'equipe', no feminino singular.",
        feedbackErro: "O adjetivo concorda com o substantivo que ele descreve. Quem está 'atenta'? A equipe.",
        ondeEstaNoTexto: "A equipe, atenta aos detalhes, percebeu uma pista importante...",
      },
      {
        pergunta: "Por que a frase diz 'a entrada havia sido feita', e não 'feito'?",
        opcoes: [
          "Porque 'feita' concorda no feminino com 'entrada'",
          "Porque é sempre assim, sem motivo",
          "Porque 'entrada' está no plural",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Exato! 'Feita' concorda em gênero (feminino) com 'entrada' — outro caso de concordância nominal.",
        feedbackErro: "'Entrada' é uma palavra feminina; por isso o particípio precisa concordar no feminino: 'feita'.",
        ondeEstaNoTexto: "...os detetives concluíram que a entrada havia sido feita por um túnel escondido...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora treine com os casos que mais confundem: sujeito composto e expressões intercaladas.",
    perguntas: [
      {
        pergunta: "Qual frase está com a concordância verbal correta?",
        opcoes: [
          "O detetive e sua assistente investigaram o caso juntos",
          "O detetive e sua assistente investigou o caso juntos",
          "O detetive e sua assistente investigam sozinha o caso",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! Quando há dois sujeitos ligados por 'e' (sujeito composto), o verbo vai para o plural: 'investigaram'.",
        feedbackErro: "Some as duas pessoas do sujeito ('o detetive' + 'sua assistente') — juntas, elas pedem verbo no plural.",
      },
      {
        pergunta: "Qual frase está com a concordância nominal correta?",
        opcoes: [
          "As provas encontradas eram convincente",
          "As provas encontradas eram convincentes",
          "As prova encontrada era convincentes",
        ],
        correta: 1,
        feedbackAcerto: "⚖️ Correto! 'Provas', 'encontradas' e 'convincentes' concordam todos no feminino plural.",
        feedbackErro: "Todas as palavras que se referem a 'provas' precisam ficar no feminino plural: 'encontradas' e 'convincentes'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o passo a passo para checar a concordância de uma frase, como faz um bom revisor.",
    bloco: {
      instrucao: "Do sujeito ao ajuste final.",
      itens: [
        { id: "p1", texto: "Primeiro, encontro o sujeito da frase (quem pratica a ação)." },
        { id: "p2", texto: "Depois, verifico se o sujeito está no singular ou no plural." },
        { id: "p3", texto: "Em seguida, ajusto o verbo para combinar em número com o sujeito." },
        { id: "p4", texto: "Por fim, confiro se os adjetivos combinam em gênero e número com os substantivos." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "⚖️ Ótima checagem! Esse é exatamente o roteiro que um bom revisor de textos usa.",
      feedbackErro: "Pense na ordem lógica: primeiro identifique o sujeito, depois ajuste o verbo, só então confira os adjetivos.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso na mesa. Leia sozinho e observe como cada peça da frase se encaixa corretamente.",
    leitura: {
      titulo: "O Depoimento da Testemunha",
      destacar: ["Os vizinhos afirmaram", "A rua estava deserta", "as luzes permaneciam apagadas"],
      paragrafos: [
        "Os vizinhos afirmaram que nada de estranho havia acontecido naquela noite tranquila. A rua estava deserta e silenciosa, e as luzes das casas permaneciam apagadas desde as dez horas.",
        "Uma testemunha, mais atenta que as demais, contou ter visto um carro escuro parado por alguns minutos em frente ao portão. Os detalhes, embora poucos, ajudaram bastante na investigação.",
      ],
    },
    perguntas: [
      {
        pergunta: "Na frase 'Os vizinhos afirmaram que nada de estranho havia acontecido', por que 'afirmaram' está no plural?",
        opcoes: [
          "Porque concorda com o sujeito 'os vizinhos', no plural",
          "Porque todo verbo fica no plural",
          "Porque 'nada' está no plural",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! O verbo concorda com o sujeito 'os vizinhos', no plural.",
        feedbackErro: "Pergunte: quem afirmou? A resposta ('os vizinhos') é o sujeito, e ele está no plural.",
        ondeEstaNoTexto: "Os vizinhos afirmaram que nada de estranho havia acontecido naquela noite tranquila.",
      },
      {
        pergunta: "Em 'Uma testemunha, mais atenta que as demais', a palavra 'atenta' concorda com:",
        opcoes: ["demais", "testemunha", "acontecido"],
        correta: 1,
        feedbackAcerto: "⚖️ Correto! 'Atenta' descreve 'testemunha' e concorda com ela no feminino singular.",
        feedbackErro: "O adjetivo concorda com o substantivo que descreve: quem é 'atenta'? A testemunha.",
        ondeEstaNoTexto: "Uma testemunha, mais atenta que as demais, contou ter visto um carro escuro...",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "CONCORDÂNCIA NOMINAL: substantivo, artigo e adjetivo combinam em gênero e número.",
      "CONCORDÂNCIA VERBAL: o verbo combina em número e pessoa com o sujeito da frase.",
      "Sujeito composto (duas ou mais pessoas ligadas por 'e') pede verbo no plural.",
      "Expressões intercaladas (entre vírgulas) não mudam o sujeito principal da frase — o verbo continua concordando com ele.",
      "Sempre pergunte: 'quem pratica a ação?' para achar o sujeito e ajustar o verbo corretamente.",
    ],
    miniDesafio: {
      pergunta: "Qual frase está correta: 'A professora e os alunos organizou a sala' ou 'A professora e os alunos organizaram a sala'?",
      opcoes: [
        "A professora e os alunos organizou a sala",
        "A professora e os alunos organizaram a sala",
        "As duas estão corretas",
      ],
      correta: 1,
      feedbackAcerto: "⚖️ Isso! Sujeito composto ('a professora' + 'os alunos') pede verbo no plural: 'organizaram'.",
      feedbackErro: "Some as duas pessoas do sujeito: juntas, elas formam um sujeito plural, que pede verbo no plural.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é concordância verbal?",
        opcoes: [
          "O encaixe entre substantivo e adjetivo",
          "O encaixe entre o sujeito e o verbo em número e pessoa",
          "A ordem alfabética das palavras",
        ],
        correta: 1,
        feedbackAcerto: "⚖️ Isso! O verbo precisa combinar com o sujeito.",
        feedbackErro: "Concordância verbal é o encaixe entre sujeito e verbo, não entre substantivo e adjetivo.",
      },
      {
        pergunta: "2/5 — Qual frase está com a concordância correta?",
        opcoes: ["Os meninos brincou no pátio", "Os meninos brincaram no pátio", "Os menino brincaram no pátio"],
        correta: 1,
        feedbackAcerto: "⚖️ Correto! 'Os meninos' (plural) combina com 'brincaram' (plural).",
        feedbackErro: "O sujeito 'os meninos' está no plural, então o verbo também deve ir para o plural.",
      },
      {
        pergunta: "3/5 — Em 'As provas eram convincentes', a palavra 'convincentes' concorda com:",
        opcoes: ["eram", "provas", "as"],
        correta: 1,
        feedbackAcerto: "⚖️ Isso! O adjetivo concorda com o substantivo 'provas', no feminino plural.",
        feedbackErro: "O adjetivo descreve o substantivo — nesse caso, 'provas', que está no feminino plural.",
      },
      {
        pergunta: "4/5 — Qual frase tem sujeito composto e, por isso, pede verbo no plural?",
        opcoes: [
          "A detetive resolveu o caso sozinha",
          "O detetive e seu ajudante resolveram o caso",
          "O caso foi resolvido rapidamente",
        ],
        correta: 1,
        feedbackAcerto: "⚖️ Exato! 'O detetive e seu ajudante' são dois sujeitos juntos — o verbo vai para o plural.",
        feedbackErro: "Procure a frase em que duas pessoas praticam a ação juntas, ligadas por 'e'.",
      },
      {
        pergunta: "5/5 — Em 'Uma testemunha, mais atenta que as demais, contou tudo', o verbo 'contou' concorda com:",
        opcoes: ["demais", "uma testemunha", "tudo"],
        correta: 1,
        feedbackAcerto: "⚖️ Isso! Você já sabe encontrar o sujeito mesmo quando há expressões intercaladas no meio da frase. Caso resolvido! 🌟",
        feedbackErro: "A expressão entre vírgulas é só um complemento; o sujeito real da frase é 'uma testemunha'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: revisor de concordância em casa",
    materiais: ["Uma frase escrita por vocês em um papel", "Lápis vermelho"],
    passos: [
      "1) Escrevam juntos três frases sobre o dia de vocês, mas propositalmente com erro de concordância em uma delas.",
      "2) Troquem os papéis: a criança tenta encontrar a frase com erro e explicar por que está errada.",
      "3) Corrijam juntos a frase, ajustando o verbo ou o adjetivo para que tudo se encaixe.",
      "4) Repitam o jogo com frases novas, aumentando o grau de dificuldade (sujeito composto, expressões intercaladas).",
    ],
    registro: "🗣️ Registre: 'A frase errada era ___ e a correção foi ___, porque ___.'",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
