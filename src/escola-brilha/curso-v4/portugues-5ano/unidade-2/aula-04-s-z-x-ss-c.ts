import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 4 — Grafias Difíceis: S, Z, X, SS, Ç
 * -------------------------------------------------------------
 * Encerramento da Unidade 2 (Laboratório da Ortografia). Investigação
 * sobre regras de grafia com S/Z/X/SS/Ç e famílias de palavras que
 * ajudam a decidir a escrita correta.
 *
 * BNCC: EF05LP01, EF35LP04, EF05LP04
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-s-z-x-ss-c",
  titulo: "Grafias Difíceis: S, Z, X, SS e Ç",
  iconeTrilha: "🧪",
  bncc: ["EF05LP01", "EF35LP04", "EF05LP04"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O Último Caso do Laboratório",
    historia:
      "A investigadora abriu a última pasta do dossiê da unidade: letras que fazem o mesmo som, mas se escrevem de jeitos diferentes — S, Z, X, SS e Ç. — Essas letras adoram se disfarçar de som parecido. Mas existe um truque poderoso: a FAMÍLIA DE PALAVRAS. Se você souber de qual palavra outra deriva, a grafia quase nunca falha. Vamos encerrar esse caso com chave de ouro?",
  },

  momento02_previsao: {
    instrucao: "Observe estas duas palavras da mesma família antes de decidir a grafia de uma terceira.",
    bloco: {
      titulo: "Uma Família sob Investigação",
      recado: {
        rotulo: "Palavras da mesma família",
        icone: "🧬",
        linhas: ["casa", "caseiro"],
        estilo: "cartaz",
      },
      pergunta: "Sabendo que 'casa' se escreve com S, como se escreve a palavra derivada 'caseiro'?",
      hipoteses: [
        { texto: "Com S, porque vem de 'casa'" },
        { texto: "Com Z, porque muda de som" },
        { texto: "Com X, porque é mais raro" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🧪 Isso mesmo! Palavras da mesma família mantêm a grafia da palavra de origem: 'casa' com S gera 'caseiro' com S. Esse é o principal truque para resolver esses casos.",
      feedbackErro:
        "Pense na família: se 'casa' tem S, a palavra derivada 'caseiro' também mantém o S — famílias de palavras quase sempre preservam a mesma letra.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Cinco fichas de regras para fechar o laboratório.",
    cards: [
      {
        palavra: "família de palavras",
        explicacao: "Grupo de palavras que compartilham a mesma origem (radical). Se uma tem S, Z, X, SS ou Ç, as derivadas geralmente mantêm a mesma letra.",
        exemplo: "análise → analisar → analisado (todas com S, porque vêm de 'análise').",
      },
      {
        palavra: "regra do Z",
        explicacao: "Usa-se Z em sufixos que formam substantivos abstratos a partir de adjetivos, como -EZA e -EZ, e em palavras derivadas de outras com Z.",
        exemplo: "belo → beleza; rico → riqueza; nervoso → nervosismo (exceção com S).",
      },
      {
        palavra: "regra do SS",
        explicacao: "Usa-se SS entre vogais quando o som é de 'S forte', muitas vezes em palavras derivadas de verbos terminados em -ceder, -ceber, -cutir, -gredir, -mitir, -primir.",
        exemplo: "ceder → cessão; conceber → concessão; discutir → discussão.",
      },
      {
        palavra: "regra do Ç",
        explicacao: "Usa-se Ç antes de A, O, U (nunca antes de E ou I) para manter o som de 'S' em famílias de palavras que trocam o C por Ç.",
        exemplo: "produzir → produção; nutrir → nutrição; deduzir → dedução.",
      },
      {
        palavra: "regra do X",
        explicacao: "Usa-se X, entre outras regras, depois de ditongos (encontro de vogais) e após a sílaba inicial 'me-', com algumas exceções conhecidas de memória.",
        exemplo: "caixa, peixe, mexer, mexicano (mas 'mecha' é exceção com CH).",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relatório final e observe como a família de uma palavra ajuda a resolver dúvidas de grafia.",
    leitura: {
      titulo: "Relatório Final: O Truque da Família de Palavras",
      destacar: ["família de palavras", "análise", "produção", "concessão"],
      paragrafos: [
        "No fechamento do caso, a equipe do laboratório concluiu: a melhor arma contra dúvidas de grafia com S, Z, X, SS e Ç é procurar a FAMÍLIA de palavras. Se alguém tem dúvida entre 'anális e' e 'análize', basta lembrar de 'analisar', 'analista' e 'analítico' — todas mantêm o S, porque pertencem à mesma família de 'análise'.",
        "O mesmo vale para palavras com Ç: quem sabe que 'reduzir' tem Z consegue entender por que 'redução' tem Ç — o som de 'S' é mantido, mas a letra muda conforme a nova palavra formada. É o mesmo caso de 'produzir' e 'produção', ou 'conduzir' e 'condução'.",
        "Já para o SS, muitas palavras vêm de verbos terminados em -CEDER, -CEBER, -CUTIR, -GREDIR, -MITIR e -PRIMIR: 'ceder' vira 'cessão', 'conceber' vira 'concessão', 'discutir' vira 'discussão'. A equipe reforçou: decorar cada família de palavras é mais eficiente do que tentar adivinhar pelo som, já que o som de todas essas letras pode ser muito parecido."
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório para confirmar cada dica.",
    perguntas: [
      {
        pergunta: "Qual é a melhor arma contra dúvidas de grafia, segundo o relatório?",
        opcoes: [
          "Procurar a família de palavras",
          "Escrever pelo som, sempre",
          "Escolher a letra mais usada em geral",
        ],
        correta: 0,
        feedbackAcerto: "🧪 Isso! O texto afirma que a família de palavras é a melhor arma contra a dúvida.",
        feedbackErro: "Releia o primeiro parágrafo: ele destaca a família de palavras como a melhor estratégia.",
        ondeEstaNoTexto: "a melhor arma contra dúvidas de grafia... é procurar a FAMÍLIA de palavras",
      },
      {
        pergunta: "Por que 'redução' se escreve com Ç, segundo o texto?",
        opcoes: [
          "Porque vem de 'reduzir', que tem Z, e a nova palavra muda a letra mantendo o som",
          "Porque toda palavra com -ção tem Ç por acaso",
          "Porque 'redução' não tem relação com 'reduzir'",
        ],
        correta: 0,
        feedbackAcerto: "🧪 Correto! O texto explica que o som de 'S' se mantém, mas a letra muda de Z para Ç.",
        feedbackErro: "Releia o segundo parágrafo: ele explica que 'reduzir' (Z) dá origem a 'redução' (Ç), mantendo o som.",
        ondeEstaNoTexto: "quem sabe que 'reduzir' tem Z consegue entender por que 'redução' tem Ç",
      },
      {
        pergunta: "Segundo o texto, quais terminações de verbo costumam gerar substantivos com SS?",
        opcoes: [
          "-CEDER, -CEBER, -CUTIR, -GREDIR, -MITIR, -PRIMIR",
          "-AR, -ER, -IR de qualquer verbo",
          "Apenas verbos terminados em -IZAR",
        ],
        correta: 0,
        feedbackAcerto: "🧪 Exato! O texto lista exatamente essas seis terminações.",
        feedbackErro: "Releia o terceiro parágrafo: ele lista as terminações -CEDER, -CEBER, -CUTIR, -GREDIR, -MITIR e -PRIMIR.",
        ondeEstaNoTexto: "muitas palavras vêm de verbos terminados em -CEDER, -CEBER, -CUTIR, -GREDIR, -MITIR e -PRIMIR",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Aplique o truque da família de palavras em novos casos.",
    perguntas: [
      {
        pergunta: "Sabendo que 'discutir' se escreve com T, como se escreve o substantivo derivado?",
        opcoes: ["discussão", "discuzão", "discuição"],
        correta: 0,
        feedbackAcerto: "🧪 Isso! 'Discutir' pertence ao grupo de verbos que geram substantivos com SS: discussão.",
        feedbackErro: "Lembre-se da lista de terminações: -CUTIR gera substantivos com SS, como em 'discussão'.",
      },
      {
        pergunta: "Sabendo que 'produzir' tem Z, como se escreve 'produção'?",
        opcoes: ["produção (com Ç)", "produzão (com Z)", "produssão (com SS)"],
        correta: 0,
        feedbackAcerto: "🧪 Correto! O verbo com Z gera o substantivo com Ç, mantendo o som de 'S'.",
        feedbackErro: "Assim como 'reduzir' vira 'redução', 'produzir' vira 'produção' — com Ç.",
      },
      {
        pergunta: "Qual é a família de palavras que ajuda a confirmar a grafia de 'analisar'?",
        opcoes: ["análise, analista, analítico", "anális, analize, analítica", "análize, analisa, analisando"],
        correta: 0,
        feedbackAcerto: "🧪 Isso! Todas essas palavras vêm da mesma origem e mantêm o S.",
        feedbackErro: "A família correta usa sempre S: análise, analista, analítico — todas derivadas da mesma raiz.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o método final de investigação ortográfica.",
    bloco: {
      instrucao: "Ordem correta do raciocínio.",
      itens: [
        { id: "p1", texto: "Ao ter dúvida na grafia, pense em uma palavra da mesma família que você já sabe escrever." },
        { id: "p2", texto: "Compare a letra usada naquela palavra conhecida (S, Z, X, SS ou Ç)." },
        { id: "p3", texto: "Verifique se existe uma regra específica de terminação (como -CEDER → SS, ou verbo com Z → substantivo com Ç)." },
        { id: "p4", texto: "Escreva a palavra nova mantendo a coerência com a família e a regra encontrada." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🧪 Perfeito! Esse é o método científico para resolver qualquer dúvida de grafia difícil.",
      feedbackErro: "Pense no roteiro: primeiro lembre da família, depois compare a letra, cheque a regra e só então escreva.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Último desafio do laboratório! Leia sozinho e aplique as regras da aula.",
    leitura: {
      titulo: "O Relatório Final da Investigadora",
      destacar: ["concessão", "análise", "produção"],
      paragrafos: [
        "Depois de meses de investigação, a equipe chegou à conclusão do caso. Foi feita uma análise cuidadosa de cada prova, e o resultado apontou para a produção em massa de bilhetes falsos na escola.",
        "A diretoria decidiu conceder uma concessão especial: quem entregasse os bilhetes voluntariamente não seria punido. Muitos alunos aproveitaram a chance para corrigir o próprio erro.",
        "No fim, a investigadora escreveu no caderno: 'Cada palavra difícil tem uma família que explica sua grafia. Basta procurar com atenção.'",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que a palavra 'análise' é escrita com S?",
        opcoes: [
          "Porque toda palavra com esse som usa S",
          "Porque pertence à família de 'analisar' e 'analista', que também usam S",
          "Porque é uma exceção sem explicação",
        ],
        correta: 1,
        feedbackAcerto: "🧪 Isso! Ela pertence à mesma família de 'analisar' e 'analista', todas com S.",
        feedbackErro: "Pense na família: 'analisar' e 'analista' também têm S, confirmando a grafia de 'análise'.",
        ondeEstaNoTexto: "Foi feita uma análise cuidadosa de cada prova",
      },
      {
        pergunta: "Por que 'concessão' é escrita com SS?",
        opcoes: [
          "Porque vem do verbo 'conceder', que termina em -CEDER",
          "Porque toda palavra com C dobra o S",
          "Porque é uma escolha aleatória",
        ],
        correta: 0,
        feedbackAcerto: "🧪 Correto! 'Conceder' termina em -CEDER, o que gera o substantivo com SS: concessão.",
        feedbackErro: "Lembre-se da regra: verbos terminados em -CEDER geram substantivos com SS, como 'conceder' → 'concessão'.",
        ondeEstaNoTexto: "A diretoria decidiu conceder uma concessão especial",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "A FAMÍLIA DE PALAVRAS é o melhor truque: palavras derivadas costumam manter a letra da palavra de origem.",
      "Sufixos -EZA e -EZ (beleza, rapidez) geralmente usam Z.",
      "Verbos terminados em -CEDER, -CEBER, -CUTIR, -GREDIR, -MITIR, -PRIMIR costumam gerar substantivos com SS.",
      "Verbos com Z (reduzir, produzir, conduzir) costumam gerar substantivos com Ç (redução, produção, condução).",
    ],
    miniDesafio: {
      pergunta: "Sabendo que 'conduzir' tem Z, como se escreve o substantivo derivado?",
      opcoes: ["condução", "conduzão", "condussão"],
      correta: 0,
      feedbackAcerto: "🧪 Isso! Assim como 'reduzir' → 'redução', 'conduzir' → 'condução', com Ç.",
      feedbackErro: "Siga o padrão: verbo com Z gera substantivo com Ç — 'conduzir' vira 'condução'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual é o melhor truque para resolver dúvidas de grafia com S/Z/X/SS/Ç?",
        opcoes: [
          "Escrever pelo som, sempre",
          "Procurar a família de palavras",
          "Escolher a letra mais bonita",
        ],
        correta: 1,
        feedbackAcerto: "🧪 Isso! A família de palavras é o principal truque da aula.",
        feedbackErro: "O melhor caminho é lembrar de palavras da mesma família que você já sabe escrever.",
      },
      {
        pergunta: "2/5 — Sabendo que 'ceder' tem SS derivado, como se escreve o substantivo?",
        opcoes: ["cessão", "cesão", "cessam"],
        correta: 0,
        feedbackAcerto: "🧪 Correto! 'Ceder' gera o substantivo 'cessão', com SS.",
        feedbackErro: "Verbos terminados em -CEDER costumam gerar substantivos com SS: 'ceder' → 'cessão'.",
      },
      {
        pergunta: "3/5 — Qual palavra pertence à mesma família de 'análise'?",
        opcoes: ["analista", "analize", "analizador"],
        correta: 0,
        feedbackAcerto: "🧪 Isso! 'Analista' mantém o S da família de 'análise'.",
        feedbackErro: "A grafia correta é 'analista', com S, mantendo a coerência com 'análise' e 'analisar'.",
      },
      {
        pergunta: "4/5 — 'Deduzir' tem Z. Como se escreve o substantivo derivado?",
        opcoes: ["dedução", "deduzão", "dedussão"],
        correta: 0,
        feedbackAcerto: "🧪 Exato! Segue o padrão verbo com Z → substantivo com Ç.",
        feedbackErro: "Siga o padrão da aula: verbos com Z geram substantivos com Ç — 'deduzir' vira 'dedução'.",
      },
      {
        pergunta: "5/5 — Qual sufixo costuma formar substantivos abstratos com Z, a partir de adjetivos?",
        opcoes: ["-EZA/-EZ", "-ÇÃO", "-SSÃO"],
        correta: 0,
        feedbackAcerto: "🧪 Parabéns, investigador! Você concluiu toda a Unidade do Laboratório da Ortografia! Os sufixos -EZA/-EZ (beleza, rapidez) usam Z. 🏆",
        feedbackErro: "Lembre-se: adjetivos como 'belo' e 'rápido' geram substantivos com Z: beleza, rapidez.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: montando famílias de palavras em casa",
    materiais: ["Papel e lápis", "Dicionário (opcional, físico ou no celular)"],
    passos: [
      "1) Escolham juntos 4 palavras com grafia difícil (S, Z, X, SS ou Ç) que apareçam em casa ou na escola.",
      "2) Para cada palavra, procurem pelo menos duas outras da mesma família (ex.: 'produzir', 'produto', 'produção').",
      "3) Verifiquem se a letra se mantém ou muda seguindo alguma regra da aula (como Z virando Ç).",
      "4) Montem um pequeno cartaz ou lista com as famílias encontradas para revisar antes da próxima aula.",
    ],
    registro: "🗣️ Registrem por escrito as 4 famílias de palavras encontradas, com pelo menos 3 palavras em cada uma.",
  },

  recompensa: {
    xp: 150,
    moedas: 90,
    medalha: "🏆 Investigador da Ortografia",
  },
};
