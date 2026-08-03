import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 6 — O Algoritmo da Notícia: Fatos em Tempo Real
 * BNCC: EF67LP08, EF67LP10
 */
export const aula06: AulaPortuguesV4 = {
  slug: "aula-06-algoritmo-da-noticia",
  titulo: "A Estrutura da Notícia",
  iconeTrilha: "📰",
  bncc: ["EF67LP08", "EF67LP10"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Transmissão de Dados: O Gênero Notícia",
    historia: "Analista, o Labirinto está em constante atualização. Para saber o que está acontecendo nas fronteiras dos sistemas, usamos o gênero NOTÍCIA. Ela é o 'log' da realidade. Uma notícia não pode ser um mistério; ela precisa entregar os dados brutos de forma rápida e eficiente. Vamos aprender a decodificar a pirâmide invertida.",
    imagemUrl: "https://images.unsplash.com/photo-1504711432869-5d39a110fdd0?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Análise de Headline: O que aconteceu?",
    bloco: {
      titulo: "Interceptação de Manchete",
      capaImagemUrl: "",
      pistas: [
        { nome: "A Manchete (Título) deve atrair a atenção e resumir o fato principal.", imagemUrl: "" },
        { nome: "O Lide (Lead) responde: Quem? O quê? Onde? Quando? Como? Por quê?", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo de Informação",
        icone: "📰",
        linhas: [
          "  [ MANCHETE ]",
          "  'ROBÔ ESCAPA DO LABIRINTO'",
          "  ",
          "  [ LIDE - PRIMEIRO PARÁGRAFO ]",
          "  Um protótipo de IA (QUEM) fugiu",
          "  (O QUÊ) ontem (QUANDO) do setor",
          "  Alfa (ONDE) após uma falha de ",
          "  sistema (POR QUÊ).",
          "  ",
          "  DICA: A notícia começa pelo ",
          "  mais importante."
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual a função do primeiro parágrafo (Lide) em uma notícia?",
      hipoteses: [
        { texto: "Responder às perguntas básicas sobre o fato" },
        { texto: "Contar uma piada para o leitor" },
        { texto: "Esconder a informação principal até o final" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Precisão absoluta! O Lide é o resumo executivo dos dados.",
      feedbackErro: "Pense no leitor que tem pouco tempo e quer saber logo o que houve.",
      dica: "É o 'quem, onde e quando'.",
    },
  },
  momento03_vocabulario: {
    cards: [
      { palavra: "Manchete", explicacao: "É o título principal da notícia, escrito com letras grandes para chamar a atenção.", exemplo: "Manchete: Vacina contra vírus digital é testada com sucesso.", imagemUrl: "" },
      { palavra: "Lide", explicacao: "Do inglês 'Lead'. É o primeiro parágrafo que concentra as informações vitais da notícia.", exemplo: "O lide respondeu que o evento aconteceu na praça central.", imagemUrl: "" },
    ],
    instrucao: "Dicionário de Ativos",
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "O Protocolo da Pirâmide Invertida",
      imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
      destacar: ["pirâmide invertida", "objetividade", "impessoalidade"],
      paragrafos: [
        "A notícia usa uma técnica chamada 'Pirâmide Invertida'. Isso significa que a informação mais importante vem no topo (no Lide) e os detalhes menos relevantes ficam para a base (o final do texto).",
        "Diferente de um conto ou romance, a notícia não guarda surpresas para o fim. O objetivo é a eficiência máxima na transmissão de dados.",
        "A objetividade e a impessoalidade são as leis aqui: o jornalista deve relatar o que aconteceu sem usar 'eu acho' ou 'eu senti'. A notícia deve ser um espelho fiel do fato."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "O que significa a técnica da 'Pirâmide Invertida'?",
        opcoes: ["O mais importante vem no começo", "O texto é escrito de baixo para cima", "As fotos são maiores que o texto"],
        correta: 0,
        feedbackAcerto: "Correto. O topo da pirâmide é o fato principal.",
        feedbackErro: "Pense onde fica a base de uma pirâmide que foi virada de cabeça para baixo.",
        ondeEstaNoTexto: "A informação mais importante vem no topo.",
        dica: "Importante = Início.",
        reensino: "A notícia prioriza a rapidez da informação relevante.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Edição",
    bloco: {
      instrucao: "Ordene as partes da notícia para que ela siga o protocolo oficial.",
      itens: [
        { id: "1", texto: "Manchete (Título de impacto).", imagemUrl: "" },
        { id: "2", texto: "Lide (O resumo: quem, onde, quando).", imagemUrl: "" },
        { id: "3", texto: "Corpo da Notícia (Detalhes secundários).", imagemUrl: "" },
        { id: "4", texto: "Fechamento (Informações adicionais).", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Pirâmide invertida construída com sucesso!",
      feedbackErro: "A Manchete sempre abre a transmissão.",
      dica: "Comece pelo título.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Descoberta Arqueológica no Setor 7",
      imagemUrl: "",
      destacar: ["cientistas", "ontem", "fragmento"],
      paragrafos: [
        "Cientistas (QUEM) encontraram (O QUÊ) ontem (QUANDO) um fragmento de código antigo (DETALHE) enterrado sob o servidor central (ONDE).",
        "A descoberta ocorreu durante uma manutenção de rotina (COMO). O fragmento parece datar de 1990.",
        "As equipes continuam escavando os dados para entender a origem do código."
      ],
    },
    perguntas: [
      {
        pergunta: "Quem encontrou o fragmento de código?",
        opcoes: ["Cientistas", "Robôs", "Turistas"],
        correta: 0,
        feedbackAcerto: "Exato. O 'QUEM' do Lide.",
        feedbackErro: "Releia a primeira frase.",
        dica: "Está no início.",
        reensino: "O Lide sempre identifica os personagens principais da ação."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "A notícia é um relato objetivo de um fato real.",
      "A estrutura segue a técnica da Pirâmide Invertida.",
      "O Lide responde às perguntas básicas: Quem? O quê? Onde? Quando? Como? Por quê?"
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual a principal característica de uma Manchete?",
        opcoes: ["Ser curta, direta e chamativa", "Ter pelo menos 5 parágrafos", "Ser escrita em segredo"],
        correta: 0,
        feedbackAcerto: "Perfeito. Ela é o 'iscas' para o leitor.",
        feedbackErro: "A manchete pode ser longa ou precisa ser rápida?",
        ondeEstaNoTexto: "A Manchete deve atrair a atenção e resumir o fato.",
        dica: "É o título.",
        reensino: "A manchete é o primeiro contato do leitor com a notícia.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Repórter por um Dia",
    materiais: ["Bloco de notas", "Caneta"],
    passos: [
      "Entreviste alguém da sua família sobre algo que aconteceu hoje (ex: uma receita nova, uma visita, uma tarefa cumprida).",
      "Anote o QUEM, O QUÊ, ONDE e QUANDO.",
      "Escreva uma pequena notícia com Manchete e Lide sobre esse evento."
    ],
    registro: "Tire uma foto da sua notícia familiar.",
  },
  recompensa: {
    xp: 350,
    moedas: 150,
  },
};
