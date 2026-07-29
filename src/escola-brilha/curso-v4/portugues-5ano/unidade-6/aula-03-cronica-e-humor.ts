import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 3 — Crônica e Humor
 * -------------------------------------------------------------
 * Unidade 6 (Sala de Literatura e Voz) do curso "A Central de
 * Investigação da Linguagem".
 *
 * Foco pedagógico: reconhecer a crônica como texto que flagra o
 * cotidiano com olhar particular, identificar recursos de humor e
 * ironia e perceber a diferença entre dizer e "querer dizer".
 *
 * BNCC: EF35LP20, EF15LP17, EF05LP25
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-cronica-e-humor",
  titulo: "Crônica e Humor",
  iconeTrilha: "😏",
  bncc: ["EF35LP20", "EF15LP17", "EF05LP25"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "O comum, visto com outros olhos",
    historia:
      "Uma fila de ônibus, uma discussão sobre controle remoto, o vizinho que rega a planta na hora errada: nada disso parece assunto de livro. Mas é justamente aí que mora a crônica — um texto curto que pega um pedacinho do dia a dia e o transforma em algo interessante, muitas vezes engraçado. Hoje você vai investigar como o cronista usa ironia e exagero para fazer o leitor rir (ou pensar) sobre coisas banais.",
  },

  momento02_previsao: {
    instrucao:
      "Leia o trecho abaixo e pense: o autor está falando sério ou está fazendo graça de algo?",
    bloco: {
      titulo: "Uma frase, duas leituras possíveis",
      recado: {
        rotulo: "Trecho de crônica",
        icone: "📰",
        linhas: [
          "\"Meu despertador é um profissional dedicado: toca sempre 10 minutos antes de eu decidir que hoje vou acordar cedo.\"",
        ],
        estilo: "papel",
      },
      pergunta: "O que o autor realmente quer dizer com essa frase?",
      hipoteses: [
        { texto: "Que o despertador é, de fato, muito competente e pontual" },
        { texto: "Que o despertador toca cedo demais e isso o incomoda, mas ele conta isso de um jeito engraçado" },
        { texto: "Que ele nunca usa despertador" },
      ],
      respostaCerta: 1,
      feedbackAcerto:
        "🔎 Isso! Chamar o despertador de 'profissional dedicado' é ironia: o autor finge elogiar algo que, na verdade, o incomoda — e isso cria humor.",
      feedbackErro:
        "Repare que ninguém realmente elogiaria um despertador chato dessa forma. Esse 'elogio' é irônico — o autor está reclamando de um jeito engraçado.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três ferramentas que todo cronista (e todo investigador de crônicas) usa.",
    cards: [
      {
        palavra: "crônica",
        explicacao:
          "Texto curto, geralmente em prosa, que comenta um fato do cotidiano com um olhar pessoal, muitas vezes bem-humorado ou reflexivo.",
        exemplo: "Uma crônica sobre o caos de um dia de chuva na cidade grande.",
      },
      {
        palavra: "ironia",
        explicacao:
          "Dizer o oposto do que realmente se pensa, geralmente para provocar humor ou crítica. O leitor precisa perceber que a frase não deve ser lida ao pé da letra.",
        exemplo: "'Que sorte a minha, perdi o ônibus de novo!' — dito com cara de quem não teve sorte nenhuma.",
      },
      {
        palavra: "exagero cômico (hipérbole)",
        explicacao:
          "Aumentar uma situação de propósito, além do real, para causar efeito de humor ou destacar um sentimento.",
        exemplo: "'Esperei uma eternidade na fila do banco' — ninguém espera literalmente uma eternidade, mas a frase mostra o quanto pareceu longo.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia como um investigador de humor: procure onde o texto exagera ou diz o contrário do que quer dizer.",
    leitura: {
      titulo: "A Batalha do Controle Remoto",
      destacar: ["negociação diplomática", "como se fosse a última fatia de pizza do planeta", "sorriso de quem venceu uma guerra"],
      paragrafos: [
        "Na minha casa, decidir quem escolhe o programa de televisão é uma negociação diplomática mais complicada que reunião de líderes mundiais. Meu irmão segura o controle remoto como se fosse a última fatia de pizza do planeta, e ninguém, nem debaixo de tortura, o solta com facilidade.",
        "Ontem, depois de vinte minutos de argumentos convincentes (e um pouco de suborno com biscoito), consegui a posse legítima do aparelho. Levantei o controle no ar com o sorriso de quem venceu uma guerra, enquanto meu irmão resmungava algo sobre 'injustiça histórica'.",
        "No fim, escolhi um programa que nem eu queria assistir direito. Mas não importava: o troféu, afinal, não era o programa — era a vitória.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Sobre que assunto cotidiano essa crônica fala?",
        opcoes: ["Uma discussão política séria", "Uma disputa boba pelo controle remoto da TV", "Um problema de saúde"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! A crônica narra, de forma exagerada e engraçada, a disputa pelo controle remoto entre irmãos.",
        feedbackErro: "Releia o título e o primeiro parágrafo: o assunto é bem comum e simples do dia a dia em casa.",
        ondeEstaNoTexto: "decidir quem escolhe o programa de televisão é uma negociação diplomática",
      },
      {
        pergunta: "Por que chamar a disputa de 'negociação diplomática' é engraçado?",
        opcoes: [
          "Porque realmente havia diplomatas na sala",
          "Porque compara algo simples (briga por controle remoto) a algo grande e sério (negociação entre países)",
          "Porque a frase não faz sentido nenhum",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O exagero cômico compara uma briga boba a algo enorme e sério, criando o efeito de humor.",
        feedbackErro: "Pense no tamanho da comparação: colocar uma disputa de irmãos no mesmo nível de uma negociação entre países é um exagero de propósito.",
        ondeEstaNoTexto: "negociação diplomática mais complicada que reunião de líderes mundiais",
      },
      {
        pergunta: "O que o autor quer dizer com 'o troféu, afinal, não era o programa — era a vitória'?",
        opcoes: [
          "Que ganhou um troféu de verdade",
          "Que o mais importante para ele não era assistir ao programa, mas sim vencer a disputa",
          "Que ele perdeu a discussão",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O narrador admite, com humor, que a disputa em si importava mais do que o resultado prático.",
        feedbackErro: "Releia a última frase: ele nem queria assistir ao programa escolhido — o que valia era ter vencido a disputa.",
        ondeEstaNoTexto: "o troféu, afinal, não era o programa — era a vitória",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora investigue como o humor da crônica funciona por dentro.",
    perguntas: [
      {
        pergunta: "Qual é o efeito de comparar o controle remoto a 'a última fatia de pizza do planeta'?",
        opcoes: [
          "Mostrar que o irmão realmente gostava muito de pizza",
          "Exagerar o valor que o irmão dá ao controle remoto, de forma cômica",
          "Explicar por que a família estava com fome",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Isso mesmo! O exagero cômico aumenta a importância do objeto (o controle) para provocar risada, sem que o leitor leve a comparação ao pé da letra.",
        feedbackErro:
          "Pense: ninguém trata um controle remoto como comida rara de verdade. É um exagero proposital para fazer rir.",
      },
      {
        pergunta: "O narrador diz que venceu 'com um pouco de suborno com biscoito'. Esse detalhe engraçado serve para:",
        opcoes: [
          "Mostrar que ele é uma pessoa desonesta e má",
          "Tornar a cena mais leve e cotidiana, já que o 'suborno' é só um biscoito, algo bobo e comum entre irmãos",
          "Provar que biscoitos são caros",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O humor da crônica vem justamente de tratar coisas pequenas (um biscoito) como se fossem grandes estratégias.",
        feedbackErro: "Repense o tom da crônica: tudo é contado como se fosse uma guerra importante, mas os 'recursos' usados são bem simples e engraçados.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para identificar humor e ironia num texto, do mais simples ao mais profundo.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Identificar o fato cotidiano que a crônica narra." },
        { id: "p2", texto: "Perceber onde há exagero (comparações maiores do que a realidade)." },
        { id: "p3", texto: "Checar se alguma frase diz o oposto do que realmente se pensa (ironia)." },
        { id: "p4", texto: "Concluir qual efeito de humor ou crítica o autor quis provocar no leitor." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔎 Perfeito! Essa é a rota de leitura da crônica: fato → exagero → ironia → efeito.",
      feedbackErro: "Pense em camadas: primeiro o fato real, depois os exageros, depois as ironias, e só então o efeito final.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Nova crônica! Leia sozinho e identifique onde está o humor.",
    leitura: {
      titulo: "O Mistério da Meia Perdida",
      destacar: ["desaparece sem deixar pista", "reunião de emergência", "juro solenemente"],
      paragrafos: [
        "Toda casa tem um mistério não resolvido, e na minha é a meia que desaparece sem deixar pista depois de cada lavagem. Não existe assaltante de meias, não existe buraco negro no varal — e mesmo assim, a cada semana, uma meia solitária fica órfã do seu par.",
        "Ontem convoquei uma reunião de emergência com a família para investigar o caso. Ninguém confessou nada, é claro, e minha mãe jurou solenemente que a máquina de lavar não engole meias, embora as evidências digam o contrário.",
        "No fim, guardei a meia sozinha na gaveta, na esperança de que um dia a par apareça do nada, como um antigo amigo perdido. Até lá, seguimos vivendo com pares incompletos e mistérios domésticos sem solução.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual assunto simples do cotidiano essa crônica transforma em 'mistério'?",
        opcoes: ["Um roubo de verdade na casa", "Uma meia que some depois da lavagem", "Um problema com a máquina de lavar quebrada"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O autor usa um fato bem comum — meia sumida na lavagem — e narra como se fosse um grande mistério.",
        feedbackErro: "Releia o primeiro parágrafo: o 'mistério' é bem simples e conhecido de muita gente.",
        ondeEstaNoTexto: "a meia que desaparece sem deixar pista depois de cada lavagem",
      },
      {
        pergunta: "Chamar a conversa em família de 'reunião de emergência' é um exemplo de:",
        opcoes: [
          "Discurso direto",
          "Exagero cômico, pois compara uma conversa boba a algo urgente e sério",
          "Uma metáfora sobre poesia",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O exagero transforma uma simples conversa em algo grandioso, de forma engraçada.",
        feedbackErro: "Pense no tamanho do exagero: chamar uma conversa de família de 'reunião de emergência' é bem maior do que o fato realmente é.",
        ondeEstaNoTexto: "convoquei uma reunião de emergência com a família",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "A CRÔNICA é um texto curto que comenta um fato do cotidiano com olhar pessoal, muitas vezes com humor.",
      "A IRONIA acontece quando o autor diz o oposto do que realmente pensa, para provocar humor ou crítica.",
      "O EXAGERO CÔMICO (hipérbole) aumenta uma situação de propósito para causar riso ou destacar um sentimento.",
      "Reconhecer humor e ironia exige perceber a diferença entre o que o texto diz literalmente e o que o autor realmente quer dizer.",
    ],
    miniDesafio: {
      pergunta: "'Esperei uma eternidade na fila do banco' é um exemplo de:",
      opcoes: ["Discurso indireto", "Exagero cômico (hipérbole)", "Narração em 1ª pessoa apenas"],
      correta: 1,
      feedbackAcerto: "🔎 Isso! Ninguém espera 'uma eternidade' de verdade — é um exagero para mostrar que a espera pareceu longa.",
      feedbackErro: "Pense no tamanho da palavra 'eternidade': ninguém espera tanto tempo assim de verdade — é um exagero de propósito.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que caracteriza uma crônica?",
        opcoes: [
          "É sempre um texto científico e técnico",
          "É um texto curto que comenta um fato cotidiano com olhar pessoal, muitas vezes bem-humorado",
          "É sempre escrita em versos",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! A crônica flagra o dia a dia e comenta com uma visão particular, muitas vezes engraçada.",
        feedbackErro: "A crônica é um gênero em prosa que fala do cotidiano — não é poema nem texto técnico.",
      },
      {
        pergunta: "2/5 — A ironia acontece quando:",
        opcoes: [
          "O autor diz exatamente o que pensa, sem segundas intenções",
          "O autor diz o oposto do que realmente pensa, para causar humor ou crítica",
          "O texto usa apenas discurso direto",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Correto! A ironia joga com o contraste entre o que se diz e o que se quer dizer de verdade.",
        feedbackErro: "Lembre-se: na ironia, a frase dita não deve ser lida ao pé da letra — o sentido real é o oposto.",
      },
      {
        pergunta: "3/5 — 'Meu despertador é um profissional dedicado' (referindo-se a um despertador chato) é um exemplo de:",
        opcoes: ["Ironia", "Discurso indireto", "Comparação com 'como'"],
        correta: 0,
        feedbackAcerto: "🔎 Isso! O 'elogio' é irônico: o autor está reclamando do despertador de um jeito engraçado.",
        feedbackErro: "Pense: ninguém elogiaria de verdade um despertador chato assim. É uma ironia.",
      },
      {
        pergunta: "4/5 — Qual é a função do exagero cômico numa crônica?",
        opcoes: [
          "Tornar o texto mais sério e formal",
          "Aumentar uma situação de propósito para provocar humor ou destacar um sentimento",
          "Corrigir erros de gramática do texto",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O exagero cômico serve para fazer rir ou chamar atenção para um sentimento, sem que se leve ao pé da letra.",
        feedbackErro: "O exagero não corrige nada — ele amplia a situação de propósito, para causar efeito de humor.",
      },
      {
        pergunta: "5/5 — Por que a crônica costuma falar sobre assuntos simples do dia a dia?",
        opcoes: [
          "Porque o autor não tem imaginação para outros temas",
          "Porque parte da graça está em transformar o comum em algo interessante através do olhar e do estilo do autor",
          "Porque assuntos grandes são proibidos nesse gênero",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Você concluiu a investigação sobre crônica e humor! 🌟",
        feedbackErro: "A graça da crônica está justamente em pegar algo comum e olhar para ele de um jeito único e divertido.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: virando cronista por um dia",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Escolham juntos um fato pequeno e engraçado que aconteceu em casa nesta semana.",
      "2) A criança escreve um parágrafo curto contando esse fato, usando pelo menos um exagero cômico.",
      "3) Depois, tenta incluir uma frase irônica (que diga o oposto do que realmente pensa).",
      "4) Leiam em voz alta para a família e vejam se todos percebem a ironia e o exagero.",
    ],
    registro: "🗣️ Registrem o parágrafo escrito e marquem onde está o exagero e onde está a ironia.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
  },
};
