import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as estrelaBrilhante } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";

/**
 * Aula 4 — Revisão profissional
 * -------------------------------------------------------------
 * Fechamento da Unidade 5. O explorador aprende a fazer o que
 * todo escritor de verdade faz depois de terminar o rascunho:
 * revisar com um checklist — ortografia, concordância,
 * pontuação, repetição e clareza — e reescrever um trecho ruim.
 *
 * BNCC: EF35LP07, EF04LP19
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-revisao-profissional",
  titulo: "Revisão profissional",
  iconeTrilha: "🔍",
  bncc: ["EF35LP07", "EF04LP19"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Ninguém publica o primeiro rascunho",
    historia:
      "Aurora abriu o caderno de um escritor famoso, cheio de rabiscos e frases riscadas. — Olha só: NENHUM livro publicado é a primeira versão que o autor escreveu. Todo escritor revisa, corrige e reescreve várias vezes até o texto ficar bom de verdade. Hoje você vai virar um revisor profissional do próprio texto, com um checklist de verdade.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe este rascunho cheio de rabiscos. O que você acha que vai acontecer depois da revisão?",
    bloco: {
      titulo: "O Rascunho Rabiscado",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: lapis, nome: "Um lápis" },
        { imagemUrl: bussola, nome: "Um checklist" },
      ],
      pergunta: "Revisar um texto com atenção costuma deixá-lo…",
      hipoteses: [
        { texto: "Pior, porque estraga o texto original." },
        { texto: "Melhor, mais claro e sem erros." },
        { texto: "Exatamente igual, sem diferença nenhuma." },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🔍 Isso! Revisar com atenção sempre melhora o texto — corrige erros e deixa as ideias mais claras.",
      feedbackErro: "Pense em qualquer trabalho bem feito: ele sempre passa por uma checagem final antes de ficar pronto.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras essenciais para revisar como um profissional.",
    cards: [
      {
        palavra: "concordância",
        explicacao: "É quando as palavras da frase 'combinam' em número (singular/plural) e gênero (masculino/feminino).",
        exemplo: "'Os meninos brincavam' está certo. 'Os menino brincava' está errado — falta concordância.",
        imagemUrl: quadroTriste,
      },
      {
        palavra: "clareza",
        explicacao: "É quando o texto é fácil de entender, sem frases confusas ou ideias fora de ordem.",
        exemplo: "Uma frase clara diz exatamente o que o autor quer, sem deixar o leitor em dúvida.",
        imagemUrl: quadroAlegre,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "O checklist do revisor profissional",
    instrucao: "Cinco pontos que todo escritor confere antes de considerar o texto pronto.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Ortografia: as palavras estão escritas do jeito certo?",
            explicacao: "Um erro de grafia pode confundir o leitor ou mudar o sentido da palavra.",
          },
          {
            texto: "Concordância: o singular/plural e o masculino/feminino combinam entre si?",
            explicacao: "'As menina' está errado; o correto é 'as meninas'.",
          },
          {
            texto: "Pontuação: os pontos, vírgulas e maiúsculas estão nos lugares certos?",
            explicacao: "Sem pontuação, o leitor não sabe onde uma ideia termina e outra começa.",
          },
          {
            texto: "Repetição: alguma palavra aparece demais e poderia virar pronome ou sinônimo?",
            explicacao: "Repetir menos deixa o texto mais agradável de ler.",
          },
          {
            texto: "Clareza: alguém que não sabe nada do assunto entenderia essa frase?",
            explicacao: "Se a frase é confusa até para quem escreveu, precisa ser reescrita.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia como Pedro revisou seu próprio parágrafo, marcando os problemas encontrados.",
    leitura: {
      titulo: "O Antes e Depois de Pedro",
      imagemUrl: menino,
      legendaImagem: "Pedro com o checklist na mão, revisando seu texto",
      destacar: ["Antes:", "Depois:", "ortografia", "concordância", "pontuação"],
      paragrafos: [
        "Antes: 'ontem eu fui ao parque com meus amigo nois brincou de bola e depois nois brincou de bola de novo foi muito divertido'",
        "Pedro passou o checklist e encontrou vários problemas: faltava letra maiúscula no início, faltava ponto final entre as frases, 'meus amigo' estava sem concordância, e 'nois' era um erro de ortografia (o certo é 'nós'). Além disso, 'brincou de bola' se repetia sem necessidade.",
        "Depois: 'Ontem eu fui ao parque com meus amigos. Nós brincamos de bola e, depois, jogamos futebol. Foi muito divertido.'",
        "Com a revisão, o texto ficou correto, sem repetições e muito mais fácil de entender.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "Qual erro de ortografia Pedro encontrou no texto 'antes'?",
        opcoes: ["'parque'", "'nois' (o certo é 'nós')", "'divertido'"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'Nois' é um erro de ortografia — a forma certa é 'nós'.",
        feedbackErro: "Releia o parágrafo do checklist: qual palavra estava escrita errado?",
        ondeEstaNoTexto: "'nois' era um erro de ortografia (o certo é 'nós')",
      },
      {
        pergunta: "Qual era o problema de concordância no texto original?",
        opcoes: ["'meus amigo' (faltava o 's')", "'parque'", "'bola'"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! O certo é 'meus amigos', no plural, combinando com 'meus'.",
        feedbackErro: "O problema de concordância está na expressão 'meus amigo' — falta o plural.",
        ondeEstaNoTexto: "'meus amigo' estava sem concordância",
      },
      {
        pergunta: "O que aconteceu com a repetição de 'brincou de bola' na versão revisada?",
        opcoes: [
          "Continuou repetida do mesmo jeito",
          "Uma das partes virou 'jogamos futebol', variando a ideia",
          "Foi apagada sem deixar nada no lugar",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Pedro trocou a repetição por uma ideia nova (futebol), deixando o texto mais interessante.",
        feedbackErro: "Compare o 'antes' e o 'depois': o que mudou na segunda menção à brincadeira?",
        ondeEstaNoTexto: "Nós brincamos de bola e, depois, jogamos futebol.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense no PROCESSO de revisão de Pedro.",
    perguntas: [
      {
        pergunta: "Por que é importante revisar usando um checklist, e não só 'olhar' o texto rapidamente?",
        opcoes: [
          "Porque o checklist ajuda a não esquecer nenhum tipo de erro",
          "Porque checklist deixa o texto mais bonito visualmente, só isso",
          "Não faz diferença nenhuma",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O checklist garante que você confira ortografia, concordância, pontuação, repetição E clareza — um de cada vez.",
        feedbackErro: "Pense: sem um checklist, é fácil esquecer de checar um dos pontos, como a pontuação ou a concordância.",
      },
      {
        pergunta: "O texto 'depois' de Pedro está melhor porque…",
        opcoes: [
          "Ficou mais longo",
          "Está correto, sem repetições e mais fácil de entender",
          "Tem mais palavras difíceis",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Certo! Um bom texto não precisa ser longo — precisa estar correto e claro.",
        feedbackErro: "O que realmente melhorou no texto 'depois' foi a correção, a variedade e a clareza — não o tamanho.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos da revisão profissional, na ordem que Pedro seguiu.",
    bloco: {
      instrucao: "Do rascunho pronto até o texto revisado.",
      itens: [
        { id: "p1", texto: "Escrever o rascunho, sem se preocupar em revisar ainda.", imagemUrl: papel },
        { id: "p2", texto: "Passar o checklist: ortografia, concordância, pontuação, repetição e clareza.", imagemUrl: bussola },
        { id: "p3", texto: "Reescrever o parágrafo corrigido, mais claro e sem repetições.", imagemUrl: estrelaBrilhante },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Perfeito! Escrever → revisar com checklist → reescrever. Esse é o caminho do escritor profissional.",
      feedbackErro: "Pense: primeiro escreve-se livremente, depois confere com o checklist, e só então se reescreve.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso de revisão! Leia sozinho e responda.",
    leitura: {
      titulo: "O Checklist de Beatriz",
      imagemUrl: quadroAlegre,
      destacar: ["Antes:", "Depois:", "pontuação", "clareza"],
      paragrafos: [
        "Antes: 'minha irmã fez um bolo ela colocou muito chocolate o bolo ficou muito bom todo mundo comeu o bolo rapidinho'",
        "Beatriz percebeu que faltava pontuação (o texto era uma frase só, sem parar) e que a palavra 'bolo' se repetia demais, deixando o texto confuso.",
        "Depois: 'Minha irmã fez um bolo e colocou muito chocolate nele. Ficou tão gostoso que todo mundo comeu rapidinho.'",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual foi o principal problema de pontuação no texto original de Beatriz?",
        opcoes: [
          "Faltavam pontos para separar as ideias",
          "Tinha vírgula demais",
          "Não tinha nenhum problema",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O texto original era uma única frase corrida, sem pontos para separar as ideias.",
        feedbackErro: "Releia o segundo parágrafo: o que Beatriz percebeu sobre a pontuação?",
        ondeEstaNoTexto: "Beatriz percebeu que faltava pontuação (o texto era uma frase só, sem parar)",
      },
      {
        pergunta: "Como Beatriz resolveu a repetição da palavra 'bolo'?",
        opcoes: [
          "Usando o pronome 'nele' e cortando repetições desnecessárias",
          "Repetindo 'bolo' ainda mais vezes",
          "Apagando o assunto todo",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Ela usou 'nele' no lugar de repetir 'bolo', deixando o texto mais fluido.",
        feedbackErro: "Compare o 'antes' e o 'depois': o que substituiu uma das repetições de 'bolo'?",
        ondeEstaNoTexto: "colocou muito chocolate nele",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Todo escritor revisa: ortografia, concordância, pontuação, repetição e clareza.",
      "Ortografia é escrever a palavra certa; concordância é combinar singular/plural e gênero.",
      "Pontuação organiza onde uma ideia termina e outra começa.",
      "Reescrever depois de revisar é o que transforma um rascunho num texto de verdade.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'as menina brincou no parque', qual é o problema?",
      opcoes: [
        "Nenhum, está perfeita",
        "Falta concordância: o certo é 'as meninas brincaram'",
        "Falta um desenho",
      ],
      correta: 1,
      feedbackAcerto: "🔍 Isso! 'As meninas brincaram' concorda corretamente no plural.",
      feedbackErro: "Repare: 'as' e 'menina' precisam concordar em plural — o certo é 'as meninas brincaram'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quais são os cinco pontos do checklist de revisão?",
        opcoes: [
          "Ortografia, concordância, pontuação, repetição e clareza",
          "Título, capa, ilustração, cor e tamanho",
          "Nome do autor, data, assinatura, selo e carimbo",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Esses são os cinco pontos essenciais da revisão profissional.",
        feedbackErro: "O checklist tem cinco pontos: ortografia, concordância, pontuação, repetição e clareza.",
      },
      {
        pergunta: "2/5 — O que é concordância?",
        opcoes: [
          "Combinar singular/plural e masculino/feminino nas palavras da frase",
          "Escrever bonito com letra cursiva",
          "Usar palavras difíceis",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Correto! Concordância é combinar as palavras corretamente.",
        feedbackErro: "Concordância é fazer as palavras 'combinarem' em número e gênero.",
      },
      {
        pergunta: "3/5 — Por que a pontuação é importante num texto?",
        opcoes: [
          "Porque organiza onde uma ideia termina e a próxima começa",
          "Porque deixa o texto mais colorido",
          "Ela não é importante",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso mesmo! Sem pontuação, o texto vira uma frase só, confusa.",
        feedbackErro: "A pontuação separa as ideias, ajudando o leitor a entender onde cada uma começa e termina.",
      },
      {
        pergunta: "4/5 — Qual destas frases tem problema de ortografia?",
        opcoes: ["'Nós fomos ao parque.'", "'Nois foi ao parque.'", "'Eles foram ao parque.'"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'Nois' está escrito errado — o certo é 'nós'.",
        feedbackErro: "Procure a palavra escrita de forma diferente do jeito correto: 'nois' em vez de 'nós'.",
      },
      {
        pergunta: "5/5 — Qual é a última etapa depois de encontrar os erros com o checklist?",
        opcoes: [
          "Reescrever o parágrafo, corrigindo o que foi encontrado",
          "Apagar o texto inteiro e desistir",
          "Deixar os erros do jeito que estão",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Reescrever é o passo final — é aí que o texto vira uma versão de verdade, revisada e pronta. Missão cumprida, explorador! 🌟",
        feedbackErro: "Depois de encontrar os erros, o passo final é reescrever o parágrafo, corrigindo tudo.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: virando revisor profissional",
    materiais: ["Papel", "Lápis", "Um parágrafo escrito por você mesmo"],
    passos: [
      "1) Escrevam juntos um parágrafo curto sobre qualquer assunto, sem se preocupar em revisar.",
      "2) Passem o checklist completo: ortografia, concordância, pontuação, repetição e clareza.",
      "3) Marquem cada problema encontrado com um lápis colorido.",
      "4) Reescrevam o parágrafo corrigido, do jeito que ficaria pronto para ser publicado.",
    ],
    registro: "🗣️ Registrem o parágrafo 'antes' e 'depois' da revisão, mostrando a evolução.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
    medalha: "Caneta de Prata do Explorador",
  },
};
