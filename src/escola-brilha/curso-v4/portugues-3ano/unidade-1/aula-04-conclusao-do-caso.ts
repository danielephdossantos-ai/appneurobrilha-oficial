import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as museu } from "@/assets/neuro-treino/objetos/museu.png.asset.json";
import { url as diamante } from "@/assets/neuro-treino/objetos/diamante.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 4 — Conclusão do Caso
 * -------------------------------------------------------------
 * Fechamento da Unidade 1: um caso maior, mais longo, que exige
 * juntar TODAS as ferramentas aprendidas — localizar informação
 * explícita, encontrar a ideia principal, inferir o não dito e
 * usar o contexto para palavras difíceis — para resolver um
 * mistério completo no Museu da cidade.
 *
 * BNCC: EF35LP03, EF35LP04, EF35LP05, EF03LP26
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-conclusao-do-caso",
  titulo: "Conclusão do Caso",
  iconeTrilha: "🏆",
  bncc: ["EF35LP04", "EF35LP03", "EF35LP05", "EF03LP26"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O Caso do Museu",
    historia:
      "Chegou a hora do grande teste! O clube foi chamado para investigar um sumiço estranho no Museu da cidade: uma joia antiga desapareceu da vitrine. Aurora entregou a Brilha um relatório completo. — Agora você vai usar TUDO que aprendeu: achar informações, encontrar a ideia principal, inferir pistas escondidas e entender palavras difíceis pelo contexto. Vamos resolver esse caso juntos?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Antes de ler o relatório completo do museu, observe o cartaz de aviso encontrado na porta.",
    bloco: {
      titulo: "O Aviso da Vitrine Vazia",
      capaImagemUrl: museu,
      pistas: [
        { imagemUrl: diamante, nome: "A joia desaparecida" },
        { imagemUrl: relogio, nome: "Um relógio quebrado" },
      ],
      recado: {
        rotulo: "Aviso afixado na vitrine",
        icone: "🚨",
        linhas: [
          "VITRINE FECHADA PARA INVESTIGAÇÃO.",
          "O relógio da sala parou às 22h.",
          "A janela do fundo estava aberta pela manhã.",
        ],
        estilo: "cartaz",
      },
      pergunta: "Sobre o que essa investigação provavelmente vai tratar?",
      hipoteses: [
        { texto: "Sobre quem entrou pelo museu de noite e levou a joia." },
        { texto: "Sobre o conserto do relógio quebrado." },
        { texto: "Sobre a limpeza da janela do museu." },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🏆 Isso! O relógio parado e a janela aberta são pistas de horário e entrada — apontam para um sumiço à noite.",
      feedbackErro:
        "Junte as pistas: relógio parado à noite + janela aberta de manhã. Isso sugere que alguém entrou durante a madrugada e levou a joia.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras que vão aparecer no relatório final do caso.",
    cards: [
      {
        palavra: "vestígio",
        explicacao:
          "É um sinal ou marca deixada por alguém ou algo, que ajuda a reconstruir o que aconteceu.",
        exemplo: "As pegadas de lama eram um vestígio de que alguém tinha passado por ali.",
        imagemUrl: lupa,
      },
      {
        palavra: "cúmplice",
        explicacao:
          "É a pessoa que ajuda alguém a fazer algo errado, mesmo sem fazer a ação principal.",
        exemplo: "O vigia que deixou a porta aberta de propósito foi considerado cúmplice do sumiço.",
        imagemUrl: bussola,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Este é o relatório completo do caso. Leia com toda a atenção de detetive: você vai precisar de CADA pista.",
    leitura: {
      titulo: "O Mistério da Joia da Vitrine",
      imagemUrl: diamante,
      legendaImagem: "A vitrine vazia do museu",
      destacar: ["vestígio", "cúmplice", "sem fazer barulho"],
      paragrafos: [
        "Na noite de sexta-feira, o Museu da cidade guardava sua peça mais preciosa: um diamante antigo, trazido de um navio naufragado há duzentos anos.",
        "Na manhã seguinte, o vigia Sr. Osvaldo encontrou a vitrine vazia. O relógio da sala tinha parado exatamente às 22h — provavelmente derrubado durante a confusão. A janela dos fundos estava aberta, embora sempre fosse trancada à noite.",
        "No parapeito da janela, havia um vestígio importante: um pedacinho de tecido azul, preso em uma farpa de madeira. Ninguém no museu usava uniforme azul, exceto os funcionários da limpeza, que só trabalhavam de dia.",
        "Aurora reuniu as pistas: o horário do relógio, a janela destrancada e o tecido azul. Ela concluiu que alguém tinha entrado durante a noite, sem fazer barulho, e havia um possível cúmplice entre os próprios funcionários — alguém que soubesse o horário exato em que o vigia fazia a ronda.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório sempre que precisar confirmar uma resposta.",
    perguntas: [
      {
        pergunta: "De onde veio o diamante guardado no museu?",
        opcoes: ["De uma mina de ouro", "De um navio naufragado", "De uma coleção particular"],
        correta: 1,
        feedbackAcerto: "🏆 Isso! 'trazido de um navio naufragado há duzentos anos'.",
        feedbackErro: "A resposta está no primeiro parágrafo, na última parte da frase.",
        ondeEstaNoTexto: "um diamante antigo, trazido de um navio naufragado há duzentos anos",
      },
      {
        pergunta: "A que horas o relógio da sala parou?",
        opcoes: ["21h", "22h", "23h"],
        correta: 1,
        feedbackAcerto: "🏆 Boa! 'O relógio da sala tinha parado exatamente às 22h'.",
        feedbackErro: "Está no início do segundo parágrafo.",
        ondeEstaNoTexto: "O relógio da sala tinha parado exatamente às 22h…",
      },
      {
        pergunta: "O que foi encontrado preso em uma farpa de madeira na janela?",
        opcoes: ["Um pedaço de papel", "Um pedacinho de tecido azul", "Uma chave"],
        correta: 1,
        feedbackAcerto: "🏆 Isso! 'um pedacinho de tecido azul, preso em uma farpa de madeira'.",
        feedbackErro: "Releia o início do terceiro parágrafo.",
        ondeEstaNoTexto: "havia um vestígio importante: um pedacinho de tecido azul…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora, junte a IDEIA PRINCIPAL com a INFERÊNCIA para resolver o caso.",
    perguntas: [
      {
        pergunta: "Qual frase resume a IDEIA PRINCIPAL de todo o relatório?",
        opcoes: [
          "O museu tem um relógio na parede.",
          "As pistas do museu indicam que alguém entrou de noite e levou o diamante, talvez com ajuda de dentro.",
          "O Sr. Osvaldo trabalha como vigia.",
        ],
        correta: 1,
        feedbackAcerto:
          "🏆 Isso! Essa frase junta as pistas principais do relatório inteiro — o resto são detalhes que sustentam essa conclusão.",
        feedbackErro:
          "Pense no relatório inteiro: qual frase, sozinha, contaria toda a investigação? O vigia e o relógio são detalhes que apoiam essa ideia maior.",
      },
      {
        pergunta: "Pelas pistas (tecido azul + uniforme só dos funcionários da limpeza), o que Aurora infere?",
        opcoes: [
          "Que pode haver um cúmplice entre os funcionários",
          "Que o diamante nunca existiu",
          "Que o vigia estava dormindo o tempo todo",
        ],
        correta: 0,
        feedbackAcerto:
          "🏆 Exatamente! O texto não afirma quem é, mas as pistas do uniforme azul sugerem envolvimento de alguém de dentro — uma inferência bem embasada.",
        feedbackErro:
          "Junte as pistas: só os funcionários da limpeza usam azul. Isso não PROVA quem é, mas permite INFERIR que pode haver alguém de dentro envolvido.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize a ordem dos acontecimentos do caso do museu.",
    bloco: {
      instrucao: "Do começo ao fim da investigação.",
      itens: [
        { id: "p1", texto: "Na sexta à noite, o diamante estava seguro na vitrine.", imagemUrl: diamante },
        { id: "p2", texto: "Na manhã seguinte, o Sr. Osvaldo encontra a vitrine vazia e a janela aberta.", imagemUrl: museu },
        { id: "p3", texto: "Aurora junta as pistas (relógio, janela, tecido) e conclui o que aconteceu.", imagemUrl: bussola },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🏆 Perfeito! Você reconstruiu o caso na ordem certa — como um verdadeiro detetive.",
      feedbackErro: "Pense na linha do tempo: primeiro o diamante estava seguro, depois foi notado o sumiço, e só então vieram as conclusões.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Último desafio da unidade! Leia sozinho e resolva o caso final.",
    leitura: {
      titulo: "A Solução do Caso",
      imagemUrl: professora,
      destacar: ["confessou", "não resistiu", "devolveu"],
      paragrafos: [
        "Depois de investigar o tecido azul, Aurora descobriu que apenas UM funcionário da limpeza tinha trabalhado até tarde naquela sexta — um rapaz novo, chamado Caio.",
        "Ao ser questionado, Caio confessou: ele tinha visto o diamante brilhando e não resistiu à tentação de tocá-lo, mas acabou derrubando o relógio sem querer e fugindo com a peça pela janela.",
        "Arrependido, Caio devolveu o diamante no dia seguinte. O museu decidiu dar a ele uma segunda chance, com a condição de que ajudasse a cuidar da segurança das vitrines dali em diante.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem era o funcionário que tinha trabalhado até tarde na sexta?",
        opcoes: ["O Sr. Osvaldo", "Um rapaz novo chamado Caio", "Aurora"],
        correta: 1,
        feedbackAcerto: "🏆 Isso! 'um rapaz novo, chamado Caio'.",
        feedbackErro: "A resposta está no fim do primeiro parágrafo.",
        ondeEstaNoTexto: "um rapaz novo, chamado Caio",
      },
      {
        pergunta: "Qual é a IDEIA PRINCIPAL desse trecho final da história?",
        opcoes: [
          "Caio confessou ter levado o diamante e depois o devolveu, arrependido.",
          "O museu tem várias vitrines.",
          "Aurora gosta de investigar tecidos.",
        ],
        correta: 0,
        feedbackAcerto: "🏆 Isso mesmo! Essa frase resume o desfecho de todo o caso.",
        feedbackErro: "Pense no que resume TODO o parágrafo final: a confissão, o arrependimento e a devolução do diamante.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Localizar informação explícita: a resposta está escrita, só precisamos voltar ao texto.",
      "Ideia principal: a frase que resume o assunto central, deixando os detalhes de lado.",
      "Inferência: concluir o que o texto não diz com todas as letras, juntando pistas.",
      "Contexto: usar as palavras ao redor para descobrir o significado de termos difíceis.",
      "Um bom detetive da palavra usa TODAS essas ferramentas juntas para resolver um caso completo.",
    ],
    miniDesafio: {
      pergunta: "Qual é a MELHOR estratégia quando um texto é longo e complicado, cheio de pistas e palavras difíceis?",
      opcoes: [
        "Ler rápido e adivinhar tudo de cabeça",
        "Localizar informações, achar a ideia principal, inferir e usar o contexto — tudo junto",
        "Ler só o título e parar"
      ],
      correta: 1,
      feedbackAcerto: "🏆 Isso! Um detetive completo usa TODAS as ferramentas juntas.",
      feedbackErro: "A melhor estratégia é combinar TODAS as ferramentas que aprendemos na unidade — nenhuma sozinha resolve um caso completo.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual pista fez Aurora suspeitar de um funcionário da limpeza?",
        opcoes: ["O tecido azul preso na farpa da janela", "O tamanho do museu", "A cor da vitrine"],
        correta: 0,
        feedbackAcerto: "🏆 Isso! O tecido azul era do uniforme dos funcionários da limpeza.",
        feedbackErro: "A pista era o pedacinho de tecido azul, ligado ao uniforme da limpeza.",
      },
      {
        pergunta: "2/5 — Qual é a ideia principal do relatório inicial do museu?",
        opcoes: [
          "As pistas indicam que alguém entrou de noite e levou o diamante",
          "O relógio da sala é antigo",
          "O museu foi pintado recentemente",
        ],
        correta: 0,
        feedbackAcerto: "🏆 Correto!",
        feedbackErro: "A ideia central junta as pistas para explicar o sumiço do diamante durante a noite.",
      },
      {
        pergunta: "3/5 — O que significa a palavra 'vestígio', usada no relatório?",
        opcoes: ["Um sinal ou marca que ajuda a reconstruir o que aconteceu", "Um tipo de joia", "Um horário exato"],
        correta: 0,
        feedbackAcerto: "🏆 Isso!",
        feedbackErro: "Vestígio é um sinal deixado por alguém, que ajuda a entender o que aconteceu — como o pedaço de tecido.",
      },
      {
        pergunta: "4/5 — Por que dizemos que Aurora 'inferiu' um possível cúmplice, e não que ela 'provou'?",
        opcoes: [
          "Porque o texto não afirma isso com todas as letras, é uma conclusão baseada em pistas",
          "Porque ela adivinhou sem nenhuma pista",
          "Porque não havia pistas nenhuma"
        ],
        correta: 0,
        feedbackAcerto: "🏆 Exatamente! Inferir é diferente de ter certeza absoluta — é uma conclusão bem fundamentada em pistas.",
        feedbackErro: "Inferir é concluir com base em pistas, mesmo sem o texto afirmar isso diretamente — por isso não é uma 'prova', é uma dedução.",
      },
      {
        pergunta: "5/5 — Quem confessou ter levado o diamante?",
        opcoes: ["Caio, um funcionário novo da limpeza", "O Sr. Osvaldo, o vigia", "Aurora"],
        correta: 0,
        feedbackAcerto: "🏆 Isso! Caso resolvido — você agora é um Detetive Iniciante da Palavra! 🌟",
        feedbackErro: "O texto diz claramente: 'ele tinha visto o diamante... e acabou fugindo com a peça' — o funcionário era Caio.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: monte seu próprio caso",
    materiais: ["Papel", "Lápis", "Objetos da casa (opcional)"],
    passos: [
      "1) Junto com um adulto, invente um pequeno 'mistério' caseiro (ex.: sumiu um objeto, alguém comeu a última bolacha).",
      "2) Escrevam juntos 3 pistas escondidas em frases (sem contar quem foi de forma direta).",
      "3) Outra pessoa da família lê as pistas e tenta inferir a solução, explicando o raciocínio.",
      "4) Conversem: qual pista foi mais fácil? Qual exigiu mais dedução?",
    ],
    registro: "🗣️ Registre em áudio ou por escrito: 'A solução do meu caso era ___, porque as pistas eram ___.'",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
    medalha: "Distintivo do Detetive Iniciante",
  },
};
