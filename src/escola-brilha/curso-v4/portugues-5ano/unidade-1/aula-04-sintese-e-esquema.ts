import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";

/**
 * Aula 4 — Síntese e Esquema
 * -------------------------------------------------------------
 * Encerramento da Unidade 1 (Leitura Investigativa). A missão final:
 * transformar um relatório extenso num esquema organizado, com
 * palavras próprias, mantendo apenas as informações essenciais e a
 * relação lógica entre elas — o "arquivo fechado" de cada caso.
 *
 * Foco pedagógico: síntese como reorganização hierárquica das ideias
 * (não cópia), produzindo um esquema (tópicos) com palavras próprias.
 *
 * BNCC: EF35LP04, EF05LP18
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-sintese-e-esquema",
  titulo: "Síntese e Esquema",
  iconeTrilha: "🗃️",
  bncc: ["EF35LP04", "EF05LP18"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "Caso 004: o arquivo final",
    historia:
      "Brilha abriu uma gaveta cheia de pastas grossas. — Todo caso da Central termina do mesmo jeito: um arquivo fechado, organizado em tópicos, para qualquer agente novo entender rápido o que aconteceu. Isso não é copiar o relatório inteiro — é fazer uma SÍNTESE, organizada num ESQUEMA com palavras próprias, separando o principal do secundário. Hoje você vai fechar seu primeiro arquivo sozinha.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe a gaveta de relatórios longos. O que Brilha precisa fazer para criar um arquivo rápido de consulta?",
    bloco: {
      titulo: "A Gaveta de Relatórios Longos",
      capaImagemUrl: livros,
      pistas: [
        { imagemUrl: papel, nome: "Um relatório de seis páginas sobre um caso" },
        { imagemUrl: mapa, nome: "Um quadro em branco esperando para ser preenchido" },
      ],
      recado: {
        rotulo: "Anotação de Brilha",
        icone: "🗃️",
        linhas: [
          "Este relatório tem seis páginas cheias de detalhes.",
          "Preciso montar um esquema com só os pontos principais.",
          "Vou usar minhas próprias palavras, organizadas em tópicos.",
        ],
        estilo: "papel",
      },
      pergunta: "O que Brilha vai fazer para transformar o relatório longo num arquivo rápido de consulta?",
      hipoteses: [
        { texto: "Organizar os pontos principais em tópicos, com palavras próprias" },
        { texto: "Copiar as seis páginas inteiras, sem cortar nada" },
        { texto: "Jogar fora o relatório e não guardar nenhuma informação" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🗃️ Isso mesmo! Uma síntese em esquema organiza os pontos principais em tópicos com palavras próprias — bem diferente de copiar tudo ou de descartar as informações.",
      feedbackErro:
        "Pense no objetivo: um arquivo rápido de consulta não pode ter seis páginas copiadas, nem pode ficar vazio. Ele precisa reunir os pontos principais em tópicos organizados.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras essenciais para fechar bem um arquivo de investigação.",
    cards: [
      {
        palavra: "síntese",
        explicacao:
          "É a versão reduzida de um texto, feita a partir da seleção e da reorganização das ideias mais importantes, com palavras próprias.",
        exemplo: "A síntese do relatório trazia só os quatro pontos mais importantes do caso.",
        imagemUrl: bussola,
      },
      {
        palavra: "esquema",
        explicacao:
          "É uma forma de organizar as ideias em tópicos, mostrando a relação entre elas (o que é ideia principal e o que é detalhe que a explica).",
        exemplo: "No esquema, o tópico principal ficava em cima e os detalhes apareciam organizados embaixo dele.",
        imagemUrl: mapa,
      },
      {
        palavra: "hierarquia de ideias",
        explicacao:
          "É a organização das informações em ordem de importância: primeiro as ideias principais, depois as secundárias que as explicam ou completam.",
        exemplo: "Ao montar o esquema, ele colocou a ideia principal em destaque e os exemplos como itens menores, abaixo dela.",
        imagemUrl: lupa,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relatório completo. Depois, você vai aprender a transformá-lo num esquema organizado.",
    leitura: {
      titulo: "Relatório de Campo: A Feira de Trocas do Bairro",
      imagemUrl: mapa,
      legendaImagem: "Praça onde acontece a feira mensal de trocas",
      destacar: ["primeiro sábado do mês", "trocar em vez de comprar", "regras simples", "resultado positivo"],
      paragrafos: [
        "No primeiro sábado do mês, moradores do bairro se reúnem na praça central para a Feira de Trocas, um evento criado há dois anos por um grupo de vizinhos que queria incentivar as pessoas a trocar em vez de comprar objetos novos.",
        "A feira segue regras simples: cada pessoa leva itens em bom estado — roupas, livros, brinquedos e utensílios — e pode trocá-los por outros itens, sem uso de dinheiro em nenhuma etapa da negociação.",
        "Organizadores explicam que, além de economizar dinheiro, a iniciativa reduz o descarte de objetos ainda úteis, o que diminui a quantidade de lixo produzida pelo bairro ao longo do ano.",
        "Depois de dois anos de funcionamento, o resultado é considerado positivo: a feira já reúne mais de 200 participantes por edição e inspirou outros bairros da cidade a criar eventos parecidos.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório sempre que precisar confirmar uma informação.",
    perguntas: [
      {
        pergunta: "Quando acontece a Feira de Trocas?",
        opcoes: ["Todo domingo", "No primeiro sábado do mês", "Uma vez por ano"],
        correta: 1,
        feedbackAcerto: "🗃️ Isso! O texto diz: 'No primeiro sábado do mês, moradores do bairro se reúnem...'.",
        feedbackErro: "A informação está bem no início do primeiro parágrafo.",
        ondeEstaNoTexto: "No primeiro sábado do mês, moradores do bairro se reúnem na praça central...",
      },
      {
        pergunta: "O que os participantes NÃO podem usar durante as trocas?",
        opcoes: ["Roupas", "Dinheiro", "Livros"],
        correta: 1,
        feedbackAcerto: "🗃️ Exato! O texto afirma: 'sem uso de dinheiro em nenhuma etapa da negociação'.",
        feedbackErro: "Releia o segundo parágrafo: a regra sobre o dinheiro aparece no final da frase.",
        ondeEstaNoTexto: "…pode trocá-los por outros itens, sem uso de dinheiro em nenhuma etapa da negociação.",
      },
      {
        pergunta: "Quantos participantes a feira reúne por edição, atualmente?",
        opcoes: ["Mais de 200", "Cerca de 20", "Exatamente 2"],
        correta: 0,
        feedbackAcerto: "🗃️ Correto! O texto informa: 'a feira já reúne mais de 200 participantes por edição'.",
        feedbackErro: "A informação está no último parágrafo, perto do fim do texto.",
        ondeEstaNoTexto: "…a feira já reúne mais de 200 participantes por edição…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense como organizar essas informações em um esquema com tópicos.",
    perguntas: [
      {
        pergunta: "Qual seria o MELHOR tópico principal para abrir um esquema sobre esse relatório?",
        opcoes: [
          "Feira de Trocas: evento mensal de trocas sem dinheiro, criado há dois anos",
          "Roupas, livros, brinquedos e utensílios em bom estado",
          "Primeiro sábado do mês, na praça central",
        ],
        correta: 0,
        feedbackAcerto:
          "🗃️ Isso mesmo! Esse tópico resume a ideia central de todo o relatório (o quê, quando e como surgiu), enquanto as outras opções são apenas detalhes que poderiam vir como subitens.",
        feedbackErro:
          "As outras opções são detalhes (itens trocados, dia e local) que deveriam aparecer como subitens, não como o tópico principal do esquema.",
      },
      {
        pergunta: "Onde, num esquema bem organizado, deveria ficar a informação 'reduz o descarte de objetos úteis'?",
        opcoes: [
          "Como tópico principal, acima de tudo",
          "Como subitem do benefício da feira, explicando uma vantagem específica",
          "Ela não deveria aparecer no esquema",
        ],
        correta: 1,
        feedbackAcerto:
          "🗃️ Exatamente! Essa informação é um DETALHE que explica um benefício da feira — deve aparecer como subitem, organizado abaixo da ideia principal sobre benefícios.",
        feedbackErro:
          "Essa informação é relevante, mas é um detalhe que explica um benefício específico. Num esquema, ela deve ficar como subitem, não como tópico principal nem ser descartada.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as etapas de como se constrói um bom esquema, da primeira à última.",
    bloco: {
      instrucao: "Da primeira etapa até a última do processo de sintetizar em esquema.",
      itens: [
        { id: "p1", texto: "Ler o texto todo e identificar as ideias principais de cada parágrafo.", imagemUrl: livro },
        { id: "p2", texto: "Separar o que é ideia principal do que é detalhe secundário.", imagemUrl: lupa },
        { id: "p3", texto: "Organizar tudo em tópicos e subitens, com palavras próprias.", imagemUrl: mapa },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🗃️ Perfeito! Você seguiu as três etapas de uma boa síntese em esquema: ler, separar e organizar.",
      feedbackErro: "Pense: primeiro se lê tudo, depois se separa principal de secundário, e só então se organiza em tópicos com suas palavras.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo relatório! Leia sozinho e pense em como organizaria essas informações num esquema.",
    leitura: {
      titulo: "Relatório: O Projeto de Hortas Escolares",
      imagemUrl: papel,
      destacar: ["oito escolas", "aulas práticas de ciências", "alimentos para a merenda"],
      paragrafos: [
        "Um projeto da secretaria de educação já implantou hortas comunitárias em oito escolas da rede municipal, com o objetivo de unir aprendizado prático e alimentação saudável.",
        "Nas hortas, os estudantes participam de aulas práticas de ciências, aprendendo sobre solo, germinação e ciclo das plantas, em vez de estudar apenas pelo livro didático.",
        "Parte da colheita é usada para preparar alimentos servidos na merenda escolar, reduzindo custos e incentivando hábitos alimentares mais saudáveis entre os alunos.",
        "A secretaria pretende expandir o projeto para mais 12 escolas até o final do próximo ano, caso os resultados de avaliação continuem positivos.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual seria o melhor tópico principal para um esquema sobre esse relatório?",
        opcoes: [
          "Aprendizado sobre solo, germinação e ciclo das plantas",
          "Projeto de hortas escolares: une aprendizado prático e alimentação saudável em oito escolas",
          "Expansão para mais 12 escolas até o próximo ano",
        ],
        correta: 1,
        feedbackAcerto:
          "🗃️ Isso! Esse tópico resume a ideia central do relatório inteiro; as outras opções são detalhes que deveriam virar subitens do esquema.",
        feedbackErro:
          "As outras opções são apenas partes específicas do projeto (o que se aprende, a expansão futura). O tópico principal precisa resumir a ideia central de todo o texto.",
        ondeEstaNoTexto: "Um projeto da secretaria de educação já implantou hortas comunitárias em oito escolas...",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "SÍNTESE é a versão reduzida de um texto, com as ideias principais reorganizadas em palavras próprias.",
      "ESQUEMA organiza as ideias em tópicos e subitens, mostrando a relação entre o principal e o secundário.",
      "O tópico principal resume a ideia central; os subitens trazem detalhes que a explicam ou complementam.",
      "Um bom esquema nunca copia frases inteiras — ele reorganiza o conteúdo com as próprias palavras do leitor.",
    ],
    miniDesafio: {
      pergunta: "Num esquema sobre 'A escola vai reformar o pátio', onde deveria ficar a frase 'as obras começam em maio e duram três meses'?",
      opcoes: [
        "Como tópico principal, no topo do esquema",
        "Como subitem, detalhando quando e por quanto tempo a reforma acontece",
        "Ela não deveria aparecer no esquema",
      ],
      correta: 1,
      feedbackAcerto: "🗃️ Isso! Essa informação é um detalhe (quando e por quanto tempo) que deve ficar como subitem da ideia principal.",
      feedbackErro: "Pense: essa frase detalha o QUANDO da reforma, então ela é um subitem — não o tópico principal, nem algo a descartar.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma síntese?",
        opcoes: [
          "Uma cópia exata do texto original, sem cortes",
          "A versão reduzida de um texto, com as ideias principais em palavras próprias",
          "Um texto novo, sem relação com o original",
        ],
        correta: 1,
        feedbackAcerto: "🗃️ Isso! Síntese é redução com reorganização e palavras próprias, não cópia nem invenção.",
        feedbackErro: "A síntese reduz o texto mantendo as ideias principais, sempre com palavras próprias — não é cópia nem invenção.",
      },
      {
        pergunta: "2/5 — Em um esquema, os SUBITENS costumam trazer...",
        opcoes: [
          "As ideias principais de cada parágrafo, sem exceção",
          "Detalhes que explicam ou completam a ideia principal",
          "Informações que não têm nenhuma relação com o texto",
        ],
        correta: 1,
        feedbackAcerto: "🗃️ Correto! Os subitens detalham e explicam a ideia principal do tópico.",
        feedbackErro: "Subitens são detalhes ligados à ideia principal — eles não substituem o tópico principal nem trazem informações soltas.",
      },
      {
        pergunta: "3/5 — No relatório da Feira de Trocas, qual seria o melhor tópico principal?",
        opcoes: [
          "Roupas, livros e brinquedos trocados na feira",
          "Feira de Trocas: evento mensal sem dinheiro, criado há dois anos",
          "A praça onde a feira acontece",
        ],
        correta: 1,
        feedbackAcerto: "🗃️ Isso! Esse tópico resume a ideia central de todo o relatório.",
        feedbackErro: "As outras opções são detalhes específicos (itens trocados, local); o tópico principal precisa resumir a ideia central do relatório inteiro.",
      },
      {
        pergunta: "4/5 — Qual é a primeira etapa para montar um bom esquema?",
        opcoes: [
          "Organizar tudo em tópicos e subitens",
          "Ler o texto todo e identificar as ideias principais de cada parte",
          "Escolher a frase mais curta do texto, ao acaso",
        ],
        correta: 1,
        feedbackAcerto: "🗃️ Isso! Sem ler tudo com atenção, fica impossível separar o principal do secundário.",
        feedbackErro: "Antes de organizar em tópicos, é preciso ler o texto inteiro e identificar as ideias principais de cada parte.",
      },
      {
        pergunta: "5/5 — No relatório das hortas escolares, qual informação seria um bom SUBITEM, e não o tópico principal?",
        opcoes: [
          "Projeto de hortas escolares une aprendizado prático e alimentação saudável",
          "Parte da colheita é usada na merenda escolar",
          "As duas frases são igualmente adequadas como tópico principal",
        ],
        correta: 1,
        feedbackAcerto: "🗃️ Isso! Você já sabe organizar ideias em tópicos e subitens — arquivo fechado com sucesso! 🌟",
        feedbackErro: "A frase sobre a merenda é um detalhe específico (um benefício do projeto), por isso deve ser subitem, não o tópico principal.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: o arquivo em família",
    materiais: ["Papel e lápis", "Uma notícia, comunicado ou capítulo de livro conhecido pela família"],
    passos: [
      "1) Escolham juntos um texto de pelo menos 3 parágrafos (notícia, comunicado, capítulo de livro).",
      "2) O agente investigador escreve um tópico principal que resuma a ideia central do texto.",
      "3) Depois, ele lista de 2 a 4 subitens com os detalhes mais importantes, usando suas próprias palavras.",
      "4) Um adulto ajuda a checar: o esquema ficou organizado, sem frases copiadas do texto original?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio o esquema criado: 'Tópico principal: ___. Subitens: ___, ___, ___.'",
  },

  recompensa: {
    xp: 150,
    moedas: 85,
    medalha: "Arquivo da Central Fechado",
  },
};
