import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 3 — Coesão: sem repetir e sem se perder
 * -------------------------------------------------------------
 * O explorador aprende a "costurar" o texto: usar pronomes,
 * sinônimos e conectivos para amarrar as frases sem repetir
 * palavras nem perder o fio da meada em textos mais longos.
 *
 * BNCC: EF35LP08, EF35LP09
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-coesao-sem-repetir",
  titulo: "Coesão: sem repetir e sem se perder",
  iconeTrilha: "🧵",
  bncc: ["EF35LP08", "EF35LP09"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "A corda que amarra a expedição",
    historia:
      "Aurora mostrou uma corda amarrando várias caixas de equipamento numa única trilha, sem nenhuma se perder pelo caminho. — Um texto precisa de uma 'corda' assim, ligando frase com frase. Se você repete a mesma palavra o tempo todo, o texto fica cansativo. Se não amarra as ideias, o leitor se perde. Hoje você aprende a usar pronomes, sinônimos e conectivos — a corda invisível que costura um bom texto.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe esta frase repetitiva: 'O cachorro correu. O cachorro latiu. O cachorro pulou.' O que você imagina que podemos fazer para melhorar?",
    bloco: {
      titulo: "O Texto que Se Repete",
      capaImagemUrl: cachorro,
      pistas: [
        { imagemUrl: papel, nome: "Um texto escrito" },
        { imagemUrl: bussola, nome: "Uma bússola de ideias" },
      ],
      pergunta: "Trocar 'o cachorro' por 'ele' nas frases seguintes deixaria o texto…",
      hipoteses: [
        { texto: "Mais repetitivo e cansativo." },
        { texto: "Mais fluido, porque evita repetir a mesma palavra." },
        { texto: "Impossível de entender." },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🧵 Isso! Usar 'ele' no lugar de 'o cachorro' evita repetição e deixa o texto mais fluido, sem perder o sentido.",
      feedbackErro: "Pense: repetir a mesma palavra várias vezes cansa o leitor. Um pronome no lugar certo resolve isso.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três ferramentas de costura para o seu texto.",
    cards: [
      {
        palavra: "pronome",
        explicacao: "É uma palavra que substitui um nome já citado, evitando repetição. Ex.: ele, ela, isso, aquele.",
        exemplo: "'A menina correu. Ela estava atrasada.' — 'ela' substitui 'a menina'.",
        imagemUrl: menina,
      },
      {
        palavra: "sinônimo",
        explicacao: "É uma palavra diferente que tem significado parecido com outra, usada para não repetir o mesmo termo.",
        exemplo: "'O cão latiu. O animal parecia assustado.' — 'animal' é um sinônimo de 'cão' nesse contexto.",
        imagemUrl: cachorro,
      },
      {
        palavra: "conectivo",
        explicacao: "É uma palavra que liga ideias, mostrando a relação entre elas: tempo, causa, oposição, adição.",
        exemplo: "'Estudei bastante, por isso fui bem na prova.' — 'por isso' liga causa e consequência.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Três jeitos de costurar um texto",
    instrucao: "Veja como amarrar as ideias sem repetir palavras.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Troque o nome repetido por um pronome (ele, ela, isso).",
            explicacao: "Depois de citar o nome uma vez, o pronome já basta.",
          },
          {
            texto: "Troque a palavra repetida por um sinônimo (cão → animal).",
            explicacao: "Isso deixa o texto mais rico e menos cansativo.",
          },
          {
            texto: "Use conectivos para ligar as ideias (por isso, mas, então, além disso).",
            explicacao: "Os conectivos mostram COMO as ideias se relacionam, evitando frases soltas.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia e observe como o texto evita repetições usando pronomes, sinônimos e conectivos.",
    leitura: {
      titulo: "A Expedição de Marina",
      imagemUrl: livro,
      legendaImagem: "Marina consultando o mapa da trilha",
      destacar: ["Marina", "ela", "a exploradora", "Por isso"],
      paragrafos: [
        "Marina sempre sonhou em conhecer a floresta atrás de sua casa. Ela pediu ajuda ao pai para planejar a trilha e organizou tudo em um mapa simples.",
        "No dia da expedição, a exploradora acordou cedo e conferiu sua mochila duas vezes. Além disso, levou uma bússola, água e um lanche.",
        "No meio do caminho, Marina encontrou um riacho que não estava no mapa. Por isso, ela precisou pensar rápido e escolher outro caminho.",
        "No fim, chegou ao topo da trilha exatamente na hora do pôr do sol. A vista compensou cada esforço da caminhada.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "O que Marina fez para planejar a trilha?",
        opcoes: ["Pediu ajuda ao pai e fez um mapa", "Não planejou nada", "Convidou a turma inteira"],
        correta: 0,
        feedbackAcerto: "🧵 Isso! Ela pediu ajuda ao pai e organizou um mapa simples.",
        feedbackErro: "Releia o primeiro parágrafo.",
        ondeEstaNoTexto: "Ela pediu ajuda ao pai para planejar a trilha e organizou tudo em um mapa simples.",
      },
      {
        pergunta: "O que Marina encontrou no meio do caminho, que não estava no mapa?",
        opcoes: ["Um riacho", "Uma casa", "Uma estrada"],
        correta: 0,
        feedbackAcerto: "🧵 Exato! Um riacho surpresa a fez mudar de rota.",
        feedbackErro: "Está no terceiro parágrafo.",
        ondeEstaNoTexto: "Marina encontrou um riacho que não estava no mapa.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora observe como o texto evita repetir 'Marina' o tempo todo.",
    perguntas: [
      {
        pergunta: "No segundo parágrafo, a expressão 'a exploradora' substitui qual palavra?",
        opcoes: ["Pai", "Marina", "Mochila"],
        correta: 1,
        feedbackAcerto: "🧵 Isso! 'A exploradora' é um sinônimo usado no lugar de repetir 'Marina'.",
        feedbackErro: "Pense: quem é a pessoa que fez a expedição? Essa é quem 'a exploradora' substitui.",
      },
      {
        pergunta: "No terceiro parágrafo, a palavra 'ela' substitui quem?",
        opcoes: ["O riacho", "Marina", "O mapa"],
        correta: 1,
        feedbackAcerto: "🧵 Correto! 'Ela' é o pronome que evita repetir 'Marina' de novo.",
        feedbackErro: "Releia a frase: 'Por isso, ela precisou pensar rápido' — quem precisou pensar rápido?",
      },
      {
        pergunta: "Qual conectivo liga 'encontrar o riacho' com 'precisar escolher outro caminho'?",
        opcoes: ["Além disso", "Por isso", "Ontem"],
        correta: 1,
        feedbackAcerto: "🧵 Isso! 'Por isso' mostra a relação de causa e consequência entre os dois fatos.",
        feedbackErro: "Procure a palavra que liga o problema (riacho) com a solução (mudar de caminho).",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize a evolução das palavras usadas para se referir a Marina, na ordem em que aparecem no texto.",
    bloco: {
      instrucao: "Do nome próprio às substituições.",
      itens: [
        { id: "p1", texto: "'Marina' — o nome próprio é usado pela primeira vez.", imagemUrl: menina },
        { id: "p2", texto: "'Ela' e 'a exploradora' — substituem o nome para evitar repetição.", imagemUrl: bussola },
        { id: "p3", texto: "'Por isso' — conecta um fato ao seguinte, mostrando a relação entre eles.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🧵 Perfeito! Você percebeu a costura do texto: nome → substituições → conectivos.",
      feedbackErro: "Pense na ordem: primeiro apresenta o nome, depois usa substitutos, depois liga as ideias com conectivos.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo texto! Leia sozinho e observe a costura das ideias.",
    leitura: {
      titulo: "O Projeto de Ciências de Davi",
      imagemUrl: livro,
      destacar: ["Davi", "o menino", "ele", "Além disso"],
      paragrafos: [
        "Davi decidiu construir uma maquete do sistema solar para a feira de ciências. O menino pesquisou o tamanho de cada planeta antes de começar.",
        "Ele passou duas tardes pintando as bolinhas de isopor com as cores certas. Além disso, pediu ajuda da irmã para pendurar os planetas com fios.",
        "No dia da apresentação, Davi explicou cada detalhe da maquete com segurança, e os colegas ficaram impressionados com o resultado.",
      ],
    },
    perguntas: [
      {
        pergunta: "No primeiro parágrafo, 'o menino' substitui qual palavra?",
        opcoes: ["A irmã", "Davi", "O sistema solar"],
        correta: 1,
        feedbackAcerto: "🧵 Isso! 'O menino' é um sinônimo para não repetir 'Davi'.",
        feedbackErro: "Pense: quem construiu a maquete? Essa é a pessoa que 'o menino' substitui.",
        ondeEstaNoTexto: "O menino pesquisou o tamanho de cada planeta antes de começar.",
      },
      {
        pergunta: "O que o conectivo 'Além disso' está fazendo no segundo parágrafo?",
        opcoes: [
          "Mostrando uma informação a mais, somada à anterior",
          "Mostrando uma contradição",
          "Encerrando o texto",
        ],
        correta: 0,
        feedbackAcerto: "🧵 Exato! 'Além disso' soma uma nova informação à que já foi dita.",
        feedbackErro: "'Além disso' costuma introduzir mais uma informação, somando ideias.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Pronomes (ele, ela, isso) evitam repetir o mesmo nome várias vezes.",
      "Sinônimos (o menino, a exploradora) trocam a palavra repetida por outra parecida.",
      "Conectivos (por isso, além disso, mas) mostram a relação entre as ideias do texto.",
      "Um texto bem costurado é mais fácil e mais agradável de ler.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'A menina correu. A menina caiu. A menina levantou.', o que podemos fazer para melhorar?",
      opcoes: [
        "Nada, está perfeito assim",
        "Trocar 'a menina' por 'ela' nas frases seguintes",
        "Apagar a primeira frase",
      ],
      correta: 1,
      feedbackAcerto: "🧵 Isso! Substituir por 'ela' evita a repetição cansativa.",
      feedbackErro: "Lembre-se: depois de citar o nome uma vez, um pronome já resolve.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um pronome, na função de coesão?",
        opcoes: ["Uma palavra que substitui um nome já citado", "O título do texto", "Um sinal de pontuação"],
        correta: 0,
        feedbackAcerto: "🧵 Isso!",
        feedbackErro: "Pronome é a palavra (ele, ela, isso) que substitui um nome já dito antes.",
      },
      {
        pergunta: "2/5 — O que é um sinônimo?",
        opcoes: [
          "Uma palavra com significado parecido, usada para evitar repetição",
          "Uma palavra que significa o oposto",
          "Um tipo de pontuação"
        ],
        correta: 0,
        feedbackAcerto: "🧵 Correto! Sinônimo é uma palavra parecida em significado.",
        feedbackErro: "Sinônimo é uma palavra diferente, mas com sentido parecido, usada para variar o texto.",
      },
      {
        pergunta: "3/5 — Para que servem os conectivos?",
        opcoes: [
          "Para ligar ideias, mostrando a relação entre elas",
          "Para separar parágrafos",
          "Para decorar o texto",
        ],
        correta: 0,
        feedbackAcerto: "🧵 Isso mesmo! Conectivos mostram como as ideias se relacionam.",
        feedbackErro: "Conectivos (por isso, mas, além disso) ligam as ideias e mostram a relação entre elas.",
      },
      {
        pergunta: "4/5 — Um texto que repete a mesma palavra o tempo todo fica…",
        opcoes: ["Mais interessante", "Cansativo de ler", "Mais curto"],
        correta: 1,
        feedbackAcerto: "🧵 Exato! Repetição em excesso cansa o leitor.",
        feedbackErro: "Repetir demais a mesma palavra torna a leitura cansativa e menos agradável.",
      },
      {
        pergunta: "5/5 — Qual das opções melhora a frase 'O gato subiu na árvore. O gato desceu rápido.'?",
        opcoes: [
          "O gato subiu na árvore. Ele desceu rápido.",
          "O gato subiu na árvore. O gato subiu na árvore.",
          "Nenhuma mudança é necessária",
        ],
        correta: 0,
        feedbackAcerto: "🧵 Isso! Trocar por 'ele' evita a repetição e deixa o texto mais fluido. Você já costura textos como um explorador! 🌟",
        feedbackErro: "Substituir 'o gato' por 'ele' na segunda frase evita a repetição desnecessária.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça-repetições em família",
    materiais: ["Papel", "Lápis", "Um texto curto já escrito (pode ser de outra aula)"],
    passos: [
      "1) Peguem um texto curto que a criança já escreveu antes.",
      "2) Circulem juntos as palavras que se repetem demais (nomes de pessoas ou objetos).",
      "3) Reescrevam as frases repetidas usando pronomes ou sinônimos.",
      "4) Acrescentem pelo menos 1 conectivo (por isso, além disso, mas) para ligar duas ideias.",
    ],
    registro: "🗣️ Registrem o texto 'antes' e 'depois' da costura, mostrando a melhora.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
