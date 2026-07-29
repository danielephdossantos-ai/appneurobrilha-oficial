import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";

/**
 * Aula 1 — Tema, Ideia Global e Intenção do Autor
 * -------------------------------------------------------------
 * Abertura da Unidade 1 (Leitura Investigativa) do curso "A Central
 * de Investigação da Linguagem" — 5º ano. Primeiro caso da agência:
 * descobrir sobre O QUE um texto fala (tema), o que ele quer dizer
 * no conjunto (ideia global) e POR QUE ele foi escrito (intenção).
 *
 * Foco pedagógico: compreensão global do texto e reconhecimento do
 * propósito comunicativo do autor (informar, convencer, alertar,
 * divertir), indo além da simples decifração de palavras.
 *
 * BNCC: EF35LP03, EF15LP01, EF05LP15
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-tema-e-tese",
  titulo: "Tema, Ideia Global e Intenção do Autor",
  iconeTrilha: "🕵️",
  bncc: ["EF35LP03", "EF15LP01", "EF05LP15"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "Bem-vindo à Central de Investigação da Linguagem",
    historia:
      "Brilha ajustou os óculos e abriu uma pasta sobre a mesa. — A partir de hoje você é agente desta Central. Nosso trabalho não é decorar textos: é investigá-los. Todo texto esconde três respostas que precisamos encontrar: sobre O QUE ele fala (o tema), qual é a ideia central que amarra tudo (a ideia global) e, principalmente, POR QUE alguém decidiu escrever aquilo — pra informar, convencer, divertir ou alertar? Ninguém escreve por acaso. Bora abrir o primeiro caso?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Antes de ler o documento completo do caso de hoje, observe os itens apreendidos. O que eles indicam sobre o assunto investigado?",
    bloco: {
      titulo: "Caso 001: O Relatório Anônimo",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: celular, nome: "Um celular com fotos de embalagens plásticas" },
        { imagemUrl: mapa, nome: "Um mapa de rotas marítimas marcado a caneta" },
      ],
      recado: {
        rotulo: "Trecho do relatório encontrado",
        icone: "📁",
        linhas: [
          "Pesquisadores encontraram partículas plásticas no estômago de peixes.",
          "As correntes marítimas espalham esse material por milhares de quilômetros.",
          "É urgente reduzir o consumo de plástico descartável.",
        ],
        estilo: "papel",
      },
      pergunta: "Pelas pistas, qual é a intenção mais provável de quem escreveu esse relatório?",
      hipoteses: [
        { texto: "Alertar as pessoas sobre um problema ambiental e pedir uma mudança de atitude" },
        { texto: "Contar uma história de ficção sobre peixes falantes" },
        { texto: "Vender embalagens plásticas novas" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Boa investigação! A palavra 'urgente' e o pedido para 'reduzir o consumo' mostram que o texto quer ALERTAR e convencer o leitor a agir — essa é a intenção do autor.",
      feedbackErro:
        "Releia o trecho: ele fala de um problema real (plástico em peixes) e termina pedindo uma mudança ('é urgente reduzir'). Isso é característico de um texto que quer alertar e convencer, não de uma ficção ou um anúncio.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três termos que toda agente da Central precisa dominar para abrir qualquer caso.",
    cards: [
      {
        palavra: "tema",
        explicacao:
          "É o assunto geral do texto — do que ele trata, em poucas palavras. Pode ser resumido com uma expressão curta, como 'poluição dos oceanos' ou 'amizade entre irmãos'.",
        exemplo: "O tema de uma reportagem pode ser 'aquecimento global', mesmo que ela conte vários fatos diferentes sobre isso.",
        imagemUrl: bussola,
      },
      {
        palavra: "ideia global",
        explicacao:
          "É a mensagem central que o texto constrói somando TODAS as suas partes — não é só o assunto, é o que o texto realmente quer dizer sobre esse assunto.",
        exemplo: "O tema pode ser 'o lixo no mar', mas a ideia global do texto pode ser 'precisamos agir agora para reduzir o lixo no mar'.",
        imagemUrl: lupa,
      },
      {
        palavra: "intenção do autor",
        explicacao:
          "É o objetivo de quem escreveu: informar, convencer, alertar, divertir ou emocionar o leitor. Descobrir a intenção ajuda a entender as escolhas feitas no texto.",
        exemplo: "Um texto cheio de dados e pedidos de ação normalmente tem a intenção de alertar e convencer, não de divertir.",
        imagemUrl: livro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia como uma investigadora: procure o tema, a ideia que amarra o texto inteiro e as pistas da intenção de quem escreveu.",
    leitura: {
      titulo: "Relatório de Campo: A Ilha de Plástico",
      imagemUrl: mapa,
      legendaImagem: "Mapa da rota de correntes que carregam lixo pelo oceano",
      destacar: ["Grande Mancha de Lixo do Pacífico", "precisamos repensar", "cada atitude conta"],
      paragrafos: [
        "No meio do Oceano Pacífico existe uma área conhecida como Grande Mancha de Lixo do Pacífico, formada principalmente por pedaços de plástico que as correntes marítimas arrastam e acumulam ao longo de décadas. Estudos estimam que essa área já ultrapassa o tamanho de vários países somados.",
        "Grande parte desse plástico se quebra em pedaços tão pequenos, chamados microplásticos, que acaba sendo engolido por peixes, tartarugas e aves marinhas, entrando na cadeia alimentar sem que ninguém perceba a olho nu.",
        "Cientistas de diferentes países vêm alertando que o problema não vai se resolver sozinho: ele exige mudanças na forma como produzimos, usamos e descartamos embalagens no dia a dia, além de políticas públicas mais rígidas contra o descarte irregular.",
        "Diante desse cenário, especialistas defendem que precisamos repensar hábitos simples, como o uso de sacolas e copos descartáveis, porque cada atitude conta quando multiplicada por milhões de pessoas ao redor do planeta.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório sempre que precisar confirmar uma pista.",
    perguntas: [
      {
        pergunta: "Qual é o tema central desse relatório?",
        opcoes: [
          "A vida dos peixes em aquários domésticos",
          "O acúmulo de plástico nos oceanos e seus efeitos",
          "As férias de verão na praia",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato! Todo o texto gira em torno do plástico acumulado no oceano e de suas consequências.",
        feedbackErro: "Releia o título e o primeiro parágrafo: o assunto que se repete do início ao fim é o plástico nos oceanos.",
        ondeEstaNoTexto: "No meio do Oceano Pacífico existe uma área conhecida como Grande Mancha de Lixo do Pacífico...",
      },
      {
        pergunta: "O que são os 'microplásticos' mencionados no texto?",
        opcoes: [
          "Pedaços de plástico tão pequenos que animais marinhos acabam engolindo",
          "Um tipo de peixe que vive só em águas poluídas",
          "Uma nova invenção para limpar o oceano",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O texto explica que são pedaços tão pequenos que 'acaba sendo engolido por peixes, tartarugas e aves'.",
        feedbackErro: "A explicação está no segundo parágrafo, logo depois da palavra 'microplásticos'.",
        ondeEstaNoTexto: "Grande parte desse plástico se quebra em pedaços tão pequenos, chamados microplásticos...",
      },
      {
        pergunta: "Segundo o relatório, o problema do plástico nos oceanos vai se resolver...",
        opcoes: [
          "sozinho, com o tempo",
          "somente com mudanças de hábitos e políticas públicas",
          "apenas se as pessoas pararem de ir à praia",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Correto! O texto afirma que 'ele exige mudanças na forma como produzimos, usamos e descartamos'.",
        feedbackErro: "Releia o terceiro parágrafo: os cientistas dizem claramente que o problema 'não vai se resolver sozinho'.",
        ondeEstaNoTexto: "…ele exige mudanças na forma como produzimos, usamos e descartamos embalagens no dia a dia…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora investigue a intenção por trás das escolhas do autor.",
    perguntas: [
      {
        pergunta: "Qual é a intenção principal de quem escreveu esse relatório?",
        opcoes: [
          "Divertir o leitor com uma aventura marítima",
          "Informar sobre um problema real e convencer o leitor a mudar hábitos",
          "Vender produtos de limpeza de praia",
        ],
        correta: 1,
        feedbackAcerto:
          "🔍 Isso mesmo! O texto traz dados (informar) e termina defendendo mudanças de comportamento (convencer) — essa combinação revela a intenção do autor.",
        feedbackErro:
          "Note que o texto explica um problema real com dados e, no final, defende que 'precisamos repensar hábitos'. Isso mistura informar com convencer, não divertir ou vender.",
      },
      {
        pergunta: "Por que o texto usa a expressão 'cada atitude conta quando multiplicada por milhões de pessoas'?",
        opcoes: [
          "Só para encerrar o texto com uma frase bonita, sem outro objetivo",
          "Para reforçar a ideia global de que ações individuais têm impacto coletivo e convencer o leitor a agir",
          "Para explicar como o plástico é fabricado nas indústrias",
        ],
        correta: 1,
        feedbackAcerto:
          "🔍 Exatamente! Essa frase resume a ideia global do texto: pequenas ações, somadas, fazem diferença — e reforça a intenção de convencer o leitor a mudar de comportamento.",
        feedbackErro:
          "Essa frase não é decorativa: ela reforça a mensagem central do texto (ação individual importa) e busca convencer o leitor, não apenas explicar um processo industrial.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos que uma boa investigadora segue para descobrir tema, ideia global e intenção.",
    bloco: {
      instrucao: "Da primeira etapa até a conclusão do caso.",
      itens: [
        { id: "p1", texto: "Ler o texto todo e identificar do que ele trata (o tema).", imagemUrl: lupa },
        { id: "p2", texto: "Observar o que se repete e conecta todas as partes (a ideia global).", imagemUrl: bussola },
        { id: "p3", texto: "Perguntar 'por que isso foi escrito?' e concluir a intenção do autor.", imagemUrl: papel },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Caso resolvido! Você seguiu o método certo: tema, ideia global e, por fim, intenção.",
      feedbackErro: "Pense na ordem lógica: primeiro se descobre do que o texto fala, depois o que ele defende no conjunto, e só então por que foi escrito.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso na mesa! Leia sozinho e conclua o tema, a ideia global e a intenção do autor.",
    leitura: {
      titulo: "Comunicado da Escola: Semana sem Papel",
      imagemUrl: papel,
      destacar: ["reduzir o uso de papel", "meio digital sempre que possível", "todos podem colaborar"],
      paragrafos: [
        "A partir da próxima segunda-feira, nossa escola vai promover a Semana sem Papel, um projeto que pretende reduzir o uso de papel em todas as atividades possíveis, substituindo listas, avisos e exercícios pelo meio digital sempre que possível.",
        "A iniciativa nasceu de uma proposta dos próprios estudantes do 5º ano, depois de uma pesquisa que mostrou o alto consumo de folhas impressas por turma ao longo do ano letivo.",
        "Durante a semana, professores vão usar projeções e formulários digitais em vez de cópias impressas, e alunos serão convidados a entregar trabalhos em vídeo ou áudio, quando o conteúdo permitir.",
        "A coordenação pedagógica reforça: todos podem colaborar, seja reaproveitando folhas usadas, seja sugerindo novas ideias para reduzir o desperdício na escola.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é a ideia global desse comunicado?",
        opcoes: [
          "A escola vai fechar por uma semana",
          "A escola está promovendo uma ação para reduzir o uso de papel com participação de todos",
          "Os alunos não vão mais fazer nenhum tipo de trabalho",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Cada parágrafo mostra uma face da mesma ideia: reduzir papel, com a colaboração de toda a comunidade escolar.",
        feedbackErro: "Releia o comunicado inteiro: ele fala sobre uma ação específica (reduzir papel) e convida todos a participar — essa é a ideia que amarra tudo.",
        ondeEstaNoTexto: "…um projeto que pretende reduzir o uso de papel em todas as atividades possíveis…",
      },
      {
        pergunta: "Qual é a principal intenção desse comunicado?",
        opcoes: [
          "Divertir os alunos com uma história inventada",
          "Informar sobre o projeto e mobilizar a comunidade escolar a participar",
          "Reclamar do comportamento dos alunos",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Correto! O texto informa os detalhes do projeto e termina convocando todos a colaborar — informar + mobilizar.",
        feedbackErro: "O comunicado explica o que vai acontecer (informar) e pede a participação de todos (mobilizar) — não há tom de reclamação nem de ficção.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "TEMA é o assunto geral do texto — o que ele aborda, em poucas palavras.",
      "IDEIA GLOBAL é a mensagem central que surge da soma de todas as partes do texto, não só do assunto isolado.",
      "INTENÇÃO DO AUTOR é o objetivo de quem escreveu: informar, convencer, alertar, divertir ou emocionar.",
      "Uma boa investigadora sempre confirma suas conclusões voltando ao texto em busca de pistas concretas.",
    ],
    miniDesafio: {
      pergunta: "Um texto descreve, com muitos dados, os riscos do excesso de telas para o sono e termina sugerindo horários para desligar aparelhos. Qual é a intenção do autor?",
      opcoes: [
        "Divertir o leitor com uma história de ficção",
        "Informar sobre um risco e convencer o leitor a mudar um hábito",
        "Vender aparelhos eletrônicos novos",
      ],
      correta: 1,
      feedbackAcerto: "🔍 Isso! Dados + sugestão de mudança de hábito indicam a intenção de informar e convencer.",
      feedbackErro: "Pense: o texto explica um risco real (informar) e sugere uma mudança (convencer) — isso não é ficção nem propaganda de produto.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o 'tema' de um texto?",
        opcoes: [
          "A última frase do texto",
          "O assunto geral sobre o qual o texto fala",
          "O nome do autor do texto",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! O tema é o assunto central, em poucas palavras.",
        feedbackErro: "O tema não é o autor nem a última frase — é o assunto geral do texto.",
      },
      {
        pergunta: "2/5 — A 'ideia global' de um texto é...",
        opcoes: [
          "Apenas o título do texto",
          "A mensagem central que surge da soma de todas as partes do texto",
          "Uma frase escolhida ao acaso",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Correto! A ideia global amarra todas as partes do texto numa única mensagem central.",
        feedbackErro: "A ideia global vai além do título: ela nasce da junção de todos os parágrafos do texto.",
      },
      {
        pergunta: "3/5 — No relatório sobre a Ilha de Plástico, qual era a intenção principal do autor?",
        opcoes: [
          "Informar sobre o problema e convencer o leitor a mudar hábitos",
          "Contar uma aventura de ficção sobre o mar",
          "Ensinar a pescar",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O texto informa dados reais e defende uma mudança de comportamento.",
        feedbackErro: "O texto trazia dados reais sobre o oceano e terminava pedindo mudanças — isso é informar e convencer, não ficção.",
      },
      {
        pergunta: "4/5 — Como uma investigadora confirma se descobriu a ideia global correta?",
        opcoes: [
          "Inventando uma explicação nova, sem relação com o texto",
          "Voltando ao texto para verificar se a conclusão tem apoio em pistas concretas",
          "Perguntando a opinião de quem nunca leu o texto",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exatamente! Toda conclusão de investigação precisa se apoiar em evidências do próprio texto.",
        feedbackErro: "É preciso sempre voltar ao texto e checar se a ideia encontrada realmente aparece nas pistas escritas.",
      },
      {
        pergunta: "5/5 — No comunicado 'Semana sem Papel', qual era a intenção do texto?",
        opcoes: [
          "Informar sobre o projeto e mobilizar a comunidade escolar",
          "Divertir os alunos com uma piada",
          "Anunciar o fechamento definitivo da escola",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Primeiro caso resolvido com sucesso: você já sabe investigar tema, ideia global e intenção. 🌟",
        feedbackErro: "O comunicado explicava um projeto real e convidava todos a participar — isso é informar e mobilizar.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: investigando textos em casa",
    materiais: ["Uma notícia, comunicado ou anúncio (impresso ou no celular)", "Papel e lápis"],
    passos: [
      "1) Escolham juntos um texto curto que circula em casa (notícia, comunicado da escola, anúncio, rótulo).",
      "2) O agente investigador identifica o TEMA em poucas palavras.",
      "3) Depois, ele resume a IDEIA GLOBAL em uma frase.",
      "4) Por fim, discutam: qual era a INTENÇÃO de quem escreveu aquele texto — informar, convencer, alertar, divertir?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'O tema era ___, a ideia global era ___ e a intenção do autor era ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
  },
};
