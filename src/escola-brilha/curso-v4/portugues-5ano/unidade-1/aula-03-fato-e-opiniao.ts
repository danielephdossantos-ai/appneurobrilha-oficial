import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as tv } from "@/assets/neuro-treino/objetos/tv-moderna.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";

/**
 * Aula 3 — Fato e Opinião
 * -------------------------------------------------------------
 * Terceira investigação da Unidade 1 (O Detetive da Leitura).
 * O detetive precisa separar o que PODE SER PROVADO (fato) do
 * que é uma AVALIAÇÃO pessoal (opinião), especialmente em
 * notícias e comentários.
 *
 * BNCC: EF05LP17, EF05LP23
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-fato-e-opiniao",
  titulo: "Fato e Opinião",
  iconeTrilha: "⚖️",
  bncc: ["EF05LP17", "EF05LP23"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A balança da verdade",
    historia:
      "Brilha colocou uma pequena balança sobre a mesa de investigações. — Todo bom detetive sabe pesar as informações. De um lado, os FATOS: coisas que aconteceram de verdade e podem ser checadas. Do outro, as OPINIÕES: o que alguém acha, sente ou defende sobre esses fatos. Confundir os dois é um erro perigoso — pode fazer você acreditar que uma opinião é uma verdade absoluta. Hoje vamos treinar a balança da verdade.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Leia a manchete e o comentário publicados sobre o mesmo assunto. Um deles é só informação; o outro traz uma avaliação pessoal.",
    bloco: {
      titulo: "A Notícia e o Comentário",
      capaImagemUrl: tv,
      pistas: [
        { imagemUrl: celular, nome: "Uma tela de celular com uma notícia" },
        { imagemUrl: papel, nome: "Um comentário escrito por um leitor" },
      ],
      recado: {
        rotulo: "Publicado num site de notícias",
        icone: "📰",
        linhas: [
          "MANCHETE: Cidade inaugura nova ciclovia de 5 km no centro.",
          "COMENTÁRIO DE UM LEITOR: 'Que ótima notícia! Era exatamente disso que a cidade precisava.'",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual dessas duas frases é um FATO, e qual é uma OPINIÃO?",
      hipoteses: [
        { texto: "A manchete é fato (pode ser checada); o comentário é opinião (avaliação pessoal)" },
        { texto: "As duas são fatos, porque estão escritas com certeza" },
        { texto: "As duas são opiniões, porque foram publicadas num site" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "⚖️ Isso mesmo! A manchete descreve algo que pode ser verificado (a ciclovia existe, tem 5 km). Já o comentário expressa um sentimento pessoal ('ótima notícia', 'exatamente disso que precisava').",
      feedbackErro:
        "Pense: dá para checar se a ciclovia tem 5 km (isso é fato). Mas 'ótima notícia' é uma avaliação pessoal, que pode variar de pessoa para pessoa — isso é opinião.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras que ajudam o detetive a não cair em armadilhas.",
    cards: [
      {
        palavra: "fato",
        explicacao:
          "É uma informação que aconteceu de verdade e pode ser checada ou comprovada. Não depende do que a pessoa sente ou pensa sobre ela.",
        exemplo: "'A escola tem 300 alunos matriculados' é um fato: dá para contar e confirmar.",
        imagemUrl: lupa,
      },
      {
        palavra: "opinião",
        explicacao:
          "É uma avaliação, um sentimento ou um julgamento pessoal sobre algo. Pode variar de uma pessoa para outra, mesmo diante do mesmo fato.",
        exemplo: "'Essa é a melhor escola da cidade' é uma opinião: outra pessoa pode discordar.",
        imagemUrl: bussola,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com cuidado: separe mentalmente o que pode ser checado (fato) do que é uma avaliação pessoal (opinião).",
    leitura: {
      titulo: "A Reforma da Praça",
      imagemUrl: bussola,
      legendaImagem: "Nem tudo que se escreve numa notícia é 100% neutro",
      destacar: ["reformada em três meses", "recebeu novos brinquedos e bancos", "sem dúvida, a melhor praça do bairro"],
      paragrafos: [
        "A Praça das Flores foi reformada em três meses e reaberta ao público no último sábado. A prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva.",
        "Segundo a administração, mais de duas mil pessoas visitaram o local no primeiro final de semana após a reabertura.",
        "Para muitos moradores, a praça é, sem dúvida, a melhor do bairro agora, com espaço para todas as idades e muito mais verde do que antes.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Quanto tempo durou a reforma da Praça das Flores?",
        opcoes: ["Três meses", "Uma semana", "Um ano"],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! O texto informa 'reformada em três meses'.",
        feedbackErro: "Releia o primeiro parágrafo: ele cita o tempo exato da reforma.",
        ondeEstaNoTexto: "A Praça das Flores foi reformada em três meses…",
      },
      {
        pergunta: "O que a prefeitura investiu na reforma?",
        opcoes: [
          "Novos brinquedos, bancos e uma quadra poliesportiva",
          "Uma biblioteca pública",
          "Um estacionamento subterrâneo",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Exato! O texto cita brinquedos, bancos e quadra.",
        feedbackErro: "Releia o primeiro parágrafo: ele lista os itens da reforma.",
        ondeEstaNoTexto: "…a prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora o trabalho fino do detetive: separar o que é checável (fato) do que é avaliação pessoal (opinião) dentro do mesmo texto.",
    perguntas: [
      {
        pergunta: "Qual dessas frases do texto é um FATO?",
        opcoes: [
          "'A prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva.'",
          "'A praça é, sem dúvida, a melhor do bairro agora.'",
          "'Muitos moradores acham que a praça ficou linda demais.'",
        ],
        correta: 0,
        feedbackAcerto:
          "⚖️ Isso mesmo! Essa frase descreve algo que pode ser conferido de verdade (o que foi instalado na praça). As outras duas expressam avaliações pessoais.",
        feedbackErro:
          "Pense: 'a melhor do bairro' e 'linda demais' são julgamentos pessoais, que variam de pessoa para pessoa — isso é opinião, não fato.",
      },
      {
        pergunta: "Por que a frase 'a praça é, sem dúvida, a melhor do bairro agora' é uma OPINIÃO?",
        opcoes: [
          "Porque é um julgamento de valor, que outra pessoa pode discordar",
          "Porque tem números exatos que podem ser checados",
          "Porque foi dita pela prefeitura oficialmente",
        ],
        correta: 0,
        feedbackAcerto:
          "⚖️ Correto! 'A melhor' é uma avaliação — depende do gosto e do critério de quem fala, não de algo que se possa medir com exatidão.",
        feedbackErro:
          "Repare: não existe uma forma objetiva de medir 'a melhor praça'. Isso é sempre uma questão de opinião, mesmo quando parece uma afirmação forte.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as informações do texto na ordem em que aparecem, do fato inicial até a opinião final.",
    bloco: {
      instrucao: "Do começo ao fim do texto sobre a praça.",
      itens: [
        { id: "p1", texto: "A praça foi reformada em três meses e reaberta no sábado.", imagemUrl: bussola },
        { id: "p2", texto: "Mais de duas mil pessoas visitaram o local no primeiro fim de semana.", imagemUrl: biblioteca },
        { id: "p3", texto: "Para muitos moradores, é a melhor praça do bairro agora.", imagemUrl: papel },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "⚖️ Perfeito! Você seguiu a ordem certa: o fato da reforma, o número de visitantes, e a opinião dos moradores por último.",
      feedbackErro: "Pense na lógica da notícia: primeiro se conta o que aconteceu, depois um número, e por último uma opinião sobre o resultado.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e separe fatos de opiniões no texto.",
    leitura: {
      titulo: "O Novo Aplicativo da Escola",
      imagemUrl: celular,
      destacar: ["lançado nesta segunda-feira", "permite consultar notas e faltas", "é, com certeza, muito mais prático que o antigo"],
      paragrafos: [
        "A escola lançou nesta segunda-feira um novo aplicativo para pais e alunos. Pelo app, é possível consultar notas, faltas e o calendário de provas em tempo real.",
        "Segundo a coordenação, mais de 500 famílias já baixaram o aplicativo nas primeiras 24 horas.",
        "Para muitos pais, o novo sistema é, com certeza, muito mais prático que o antigo mural de avisos na entrada da escola.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quando o novo aplicativo foi lançado?",
        opcoes: ["Nesta segunda-feira", "No mês passado", "No início do ano"],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! O texto informa claramente a data de lançamento.",
        feedbackErro: "Releia o primeiro parágrafo: ele cita o dia do lançamento.",
        ondeEstaNoTexto: "A escola lançou nesta segunda-feira um novo aplicativo…",
      },
      {
        pergunta: "Qual das frases do texto é uma OPINIÃO, e não um fato?",
        opcoes: [
          "'O novo sistema é, com certeza, muito mais prático que o antigo mural.'",
          "'Mais de 500 famílias já baixaram o aplicativo nas primeiras 24 horas.'",
          "'É possível consultar notas, faltas e o calendário de provas em tempo real.'",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Exato! 'Muito mais prático' é um julgamento pessoal — outra pessoa pode achar diferente.",
        feedbackErro: "Releia: as outras duas frases trazem números e funções que podem ser conferidos. Só uma expressa uma avaliação pessoal.",
        ondeEstaNoTexto: "Para muitos pais, o novo sistema é, com certeza, muito mais prático que o antigo mural de avisos…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Balança do Detetive: Fato ou Opinião?",
    instrucao: "Arraste cada frase para o prato correto da balança: FATO ou OPINIÃO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Fato ou Opinião?",
      bloco: {
        instrucao: "Leia cada frase e decida: ela pode ser checada (fato), ou é um julgamento pessoal (opinião)?",
        itens: [
          { id: "i1", texto: "A escola tem 20 salas de aula", alvoId: "fato" },
          { id: "i2", texto: "Essa é, de longe, a escola mais bonita da cidade", alvoId: "opiniao" },
          { id: "i3", texto: "O time venceu o jogo por 3 a 1", alvoId: "fato" },
          { id: "i4", texto: "Esse foi o jogo mais emocionante do campeonato", alvoId: "opiniao" },
          { id: "i5", texto: "O livro tem 150 páginas", alvoId: "fato" },
          { id: "i6", texto: "Esse é o melhor livro que já li na vida", alvoId: "opiniao" },
        ],
        alvos: [
          { id: "fato", nome: "FATO (pode ser checado)" },
          { id: "opiniao", nome: "OPINIÃO (julgamento pessoal)" },
        ],
        feedbackAcerto: "⚖️ Isso! Você já sabe pesar as informações com precisão de detetive.",
        feedbackErro: "Pense: se dá para medir, contar ou comprovar, é FATO. Se depende do gosto ou julgamento de quem fala, é OPINIÃO.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "FATO é uma informação que aconteceu de verdade e pode ser checada, contada ou comprovada.",
      "OPINIÃO é uma avaliação pessoal, um sentimento ou julgamento — pode variar de pessoa para pessoa.",
      "Palavras como 'melhor', 'pior', 'lindo', 'incrível', 'com certeza' costumam sinalizar uma opinião.",
      "Notícias costumam misturar fatos (o que aconteceu) com opiniões (comentários de pessoas envolvidas) — o bom leitor separa os dois.",
    ],
    miniDesafio: {
      pergunta: "'O filme dura 90 minutos.' e 'O filme é chato demais.' Qual das duas é uma opinião?",
      opcoes: [
        "'O filme é chato demais', porque é um julgamento pessoal",
        "'O filme dura 90 minutos', porque tem um número",
        "As duas são fatos",
      ],
      correta: 0,
      feedbackAcerto: "⚖️ Isso! 'Chato demais' é um julgamento que varia de pessoa para pessoa — isso é opinião.",
      feedbackErro: "A duração em minutos pode ser conferida (fato). Mas 'chato demais' depende do gosto de quem assiste (opinião).",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um 'fato'?",
        opcoes: [
          "Uma informação que aconteceu de verdade e pode ser checada",
          "Um sentimento pessoal sobre algo",
          "Sempre a última frase de uma notícia",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! Fato é algo comprovável.",
        feedbackErro: "Fato não é sentimento — é algo que pode ser conferido ou comprovado.",
      },
      {
        pergunta: "2/5 — O que é uma 'opinião'?",
        opcoes: [
          "Uma avaliação ou julgamento pessoal, que pode variar de pessoa para pessoa",
          "O mesmo que um fato",
          "Uma informação sempre falsa",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Correto! Opinião é julgamento pessoal, não necessariamente falsa, mas subjetiva.",
        feedbackErro: "Opinião não é sinônimo de mentira — é uma avaliação pessoal, que pode até ser sincera, mas é subjetiva.",
      },
      {
        pergunta: "3/5 — No texto da praça, qual frase era um FATO?",
        opcoes: [
          "A prefeitura investiu em novos brinquedos, bancos e uma quadra poliesportiva",
          "A praça é, sem dúvida, a melhor do bairro",
          "A praça ficou linda demais",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! Essa informação pode ser checada; as outras são julgamentos.",
        feedbackErro: "'Melhor' e 'linda demais' são opiniões. Só a frase sobre os investimentos é checável.",
      },
      {
        pergunta: "4/5 — Qual dessas frases é uma OPINIÃO?",
        opcoes: [
          "Esse é o melhor jogador do time",
          "O jogo terminou 2 a 0",
          "O jogo começou às 16h",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Exatamente! 'O melhor jogador' é um julgamento pessoal.",
        feedbackErro: "As outras duas trazem números e horários checáveis — só uma expressa um julgamento pessoal.",
      },
      {
        pergunta: "5/5 — Por que é importante separar fato de opinião ao ler uma notícia?",
        opcoes: [
          "Para não confundir uma avaliação pessoal com uma verdade comprovada",
          "Porque opiniões não podem aparecer em notícias",
          "Porque fatos são sempre mais longos que opiniões",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Isso! Você já sabe pesar as informações como um verdadeiro detetive. Caso encerrado! 🌟",
        feedbackErro: "Notícias podem trazer opiniões de pessoas entrevistadas — o importante é o leitor saber identificar qual é qual.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: pesando fatos e opiniões em casa",
    materiais: ["Uma notícia de jornal, revista ou site", "Papel e lápis"],
    passos: [
      "1) Escolham juntos uma notícia curta em casa (impressa ou no celular).",
      "2) A criança sublinha (ou anota) uma frase que seja um FATO.",
      "3) Depois, ela encontra uma frase que seja uma OPINIÃO (de algum entrevistado ou comentarista).",
      "4) Conversem: como foi possível diferenciar as duas?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'O fato que encontrei foi ___ e a opinião foi ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "Balança de Bronze",
  },
};
