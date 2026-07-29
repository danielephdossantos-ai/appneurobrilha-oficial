import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as lixeiraRec } from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Unidade 4 · Aula única — A Arte de Convencer
 * -------------------------------------------------------------
 * Texto de opinião / carta de reclamação: tese, argumento,
 * conectivos argumentativos e conclusão com proposta.
 *
 * BNCC: EF05LP17, EF05LP18, EF05LP19, EF05LP20, EF05LP21
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-a-arte-de-convencer",
  titulo: "A Arte de Convencer: Tese e Argumento",
  iconeTrilha: "⚖️",
  bncc: ["EF05LP17", "EF05LP18", "EF05LP19", "EF05LP20", "EF05LP21"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O mural da escola",
    historia:
      "— Pip, os alunos querem mais tempo de recreio, mas a diretoria disse que 'querer não basta'. — E está certa, Pipa! Para convencer alguém de verdade, não basta gritar mais alto: é preciso defender uma tese com argumentos. Hoje você aprende a montar um texto de opinião tão bem construído que ninguém consegue ignorar.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Duas mensagens foram coladas no mural. Qual delas tem chance real de convencer a direção?",
    bloco: {
      titulo: "O mural das ideias",
      capaImagemUrl: mural,
      pistas: [
        { imagemUrl: criancas, nome: "Os alunos que assinaram" },
        { imagemUrl: escola, nome: "A escola que receberá o pedido" },
      ],
      recado: {
        rotulo: "Mural da escola",
        icone: "📌",
        linhas: [
          "Mensagem A: 'Queremos mais recreio porque sim!'",
          "Mensagem B: 'O recreio deve ser maior porque estudos mostram que",
          "pausas melhoram a concentração nas aulas seguintes.'",
        ],
        estilo: "cartaz",
      },
      pergunta: "Por que a mensagem B é mais forte?",
      hipoteses: [
        { texto: "Porque apresenta um motivo que sustenta o pedido" },
        { texto: "Porque é maior e ocupa mais espaço no mural" },
        { texto: "Porque tem mais palavras difíceis" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "⚖️ Isso! Opinião sem argumento é só vontade. Com argumento, vira defesa.",
      feedbackErro: "Compare: uma diz 'porque sim'; a outra diz um motivo que pode ser discutido e comprovado.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três ferramentas do advogado das palavras.",
    cards: [
      {
        palavra: "tese",
        explicacao: "A opinião principal que o autor defende. É a frase que resume o ponto de vista.",
        exemplo: "'O recreio deve ser mais longo.'",
        imagemUrl: mural,
      },
      {
        palavra: "argumento",
        explicacao:
          "O motivo que sustenta a tese. Pode ser um dado, um exemplo real ou uma comparação.",
        exemplo: "'Porque pausas maiores melhoram a concentração nas aulas seguintes.'",
        imagemUrl: lapis,
      },
      {
        palavra: "conectivos argumentativos",
        explicacao:
          "Palavras que ligam as ideias e mostram a relação entre elas: porque, além disso, por isso, portanto, no entanto.",
        exemplo: "'Além disso, o pátio fica vazio nesse horário. Portanto, a mudança é viável.'",
        imagemUrl: lixeiraRec,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Lousa do professor · Tese, argumento e prova",
    instrucao:
      "O professor escreve na lousa uma opinião fraca e vai transformando em argumentação forte, passo a passo.",
    blocos: [
      {
        tipo: "licaoLousa",
        regra:
          "Tese é a sua opinião em uma frase clara. Argumento é a razão que sustenta a tese. Prova é o dado, exemplo ou fonte que sustenta o argumento.",
        comoIdentificar:
          "Depois de cada frase sua, pergunte 'por quê?'. Se você consegue responder com um motivo, escreveu tese. Se não consegue, escreveu só um desabafo.",
        passos: [
          {
            frase: "Recreio é bom.",
            destaque: ["bom"],
            analise:
              "Opinião solta: 'bom' não diz nada verificável e não mostra o que se defende. Não é tese, é impressão.",
          },
          {
            frase: "O recreio da nossa escola deveria durar 30 minutos.",
            destaque: ["deveria durar 30 minutos"],
            analise:
              "Agora sim: há posição clara e específica. Dá para concordar ou discordar — e isso é o que define uma tese.",
          },
          {
            frase: "O recreio deveria durar 30 minutos, porque o intervalo maior melhora a concentração nas aulas seguintes.",
            destaque: ["porque", "melhora a concentração"],
            analise:
              "O conectivo 'porque' abre o argumento: a razão que sustenta a tese. Sem conectivo, viram duas frases soltas; com ele, existe raciocínio.",
            nota: "Conectivos de causa: porque, já que, uma vez que, pois. De conclusão: portanto, logo, por isso.",
          },
          {
            frase: "Uma pesquisa da própria escola mostrou que, nas turmas com intervalo de 30 minutos, as notas de matemática subiram 12%. Portanto, ampliar o recreio é um investimento em aprendizagem.",
            destaque: ["12%", "Portanto"],
            analise:
              "A prova (dado numérico com origem) sustenta o argumento, e 'portanto' fecha o raciocínio retomando a tese. Esse é o parágrafo argumentativo completo: tese → argumento → prova → conclusão.",
          },
        ],
        comparacao: {
          errado: "Todo mundo sabe que recreio curto é horrível e quem discorda não entende nada.",
          certo: "O recreio curto reduz o tempo de descanso; segundo a pesquisa da escola, isso afeta a concentração nas aulas seguintes.",
          porque:
            "Atacar quem discorda não é argumento, é ofensa — e enfraquece o texto. Quem convence apresenta razão e prova, não desqualifica o outro lado.",
        },
        curiosidade:
          "Aristóteles já dizia que convencer envolve três forças: logos (razão), pathos (emoção) e ethos (credibilidade de quem fala). Texto escolar bem feito usa principalmente logos.",
        resumo: [
          "Tese: posição clara em uma frase.",
          "Argumento: o porquê.",
          "Prova: dado, exemplo ou fonte.",
          "Conectivos costuram tudo: porque, além disso, portanto.",
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia identificando a tese no início e os conectivos que abrem cada argumento.",
    leitura: {
      titulo: "Carta ao diretor: mais lixeiras de reciclagem",
      imagemUrl: lixeiraRec,
      legendaImagem: "A lixeira de reciclagem do pátio",
      destacar: ["defendemos que", "em primeiro lugar", "além disso", "portanto"],
      paragrafos: [
        "Prezado diretor, nós, alunos do 5º ano, defendemos que a escola instale lixeiras de reciclagem em todos os corredores.",
        "Em primeiro lugar, hoje existe apenas uma lixeira de reciclagem, localizada no pátio. Como muitos alunos ficam longe dela na hora do lanche, o papel acaba indo para o lixo comum.",
        "Além disso, na semana passada nossa turma contou 43 embalagens recicláveis descartadas de forma errada em apenas dois dias. Esse número mostra que o problema é real e frequente.",
        "Portanto, pedimos a instalação de quatro lixeiras nos corredores. Nossa turma se oferece para confeccionar as placas de identificação e explicar o uso correto para as turmas menores.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Toda resposta está na carta. Localize antes de decidir.",
    perguntas: [
      {
        pergunta: "Qual é a tese defendida na carta?",
        opcoes: [
          "A escola deve instalar lixeiras de reciclagem em todos os corredores",
          "O pátio deve ser reformado",
          "O lanche deve ser servido mais cedo",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ A tese aparece logo no primeiro parágrafo, como manda a boa argumentação.",
        feedbackErro: "Procure a frase que começa com 'defendemos que'.",
        ondeEstaNoTexto: "defendemos que a escola instale lixeiras de reciclagem em todos os corredores.",
      },
      {
        pergunta: "Qual argumento usa um DADO numérico?",
        opcoes: [
          "As 43 embalagens recicláveis descartadas de forma errada em dois dias",
          "O fato de o pátio ser bonito",
          "O desejo dos alunos de ajudar",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Dado contado pela própria turma: argumento forte porque é verificável.",
        feedbackErro: "Procure o parágrafo que traz um número.",
        ondeEstaNoTexto: "nossa turma contou 43 embalagens recicláveis descartadas de forma errada em apenas dois dias.",
      },
      {
        pergunta: "O que a turma oferece na conclusão?",
        opcoes: [
          "Confeccionar as placas e ensinar as turmas menores",
          "Pagar pelas lixeiras",
          "Limpar o pátio todos os dias",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Boa conclusão propõe solução — não apenas reclama.",
        feedbackErro: "Leia o último parágrafo, depois de 'Portanto'.",
        ondeEstaNoTexto: "Nossa turma se oferece para confeccionar as placas de identificação.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Reconheça a função de cada peça do texto argumentativo.",
    perguntas: [
      {
        pergunta: "O conectivo 'além disso' serve para…",
        opcoes: [
          "acrescentar mais um argumento",
          "mostrar oposição entre ideias",
          "encerrar o texto",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Ele soma forças ao argumento anterior.",
        feedbackErro: "Repare que depois dele vem mais um motivo, e não uma oposição.",
      },
      {
        pergunta: "O conectivo 'portanto' indica…",
        opcoes: ["conclusão", "acréscimo", "dúvida"],
        correta: 0,
        feedbackAcerto: "⚖️ Portanto fecha o raciocínio e apresenta o pedido.",
        feedbackErro: "Veja em que parágrafo ele aparece: o último.",
      },
      {
        pergunta: "Qual frase é um argumento, e não apenas uma opinião solta?",
        opcoes: [
          "A biblioteca deve abrir no intervalo, pois 28 alunos pediram esse horário em uma enquete.",
          "A biblioteca deve abrir no intervalo porque seria muito legal.",
          "Acho a biblioteca ótima.",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Enquete com número = evidência. Isso é argumento.",
        feedbackErro: "'Seria legal' é gosto pessoal. Procure a frase com prova.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Monte a estrutura de um texto de opinião.",
    bloco: {
      instrucao: "Arraste as partes para a ordem correta.",
      itens: [
        { id: "t1", texto: "Apresentar a tese (a opinião defendida)" },
        { id: "t2", texto: "Primeiro argumento, com explicação" },
        { id: "t3", texto: "Segundo argumento, com dado ou exemplo" },
        { id: "t4", texto: "Conclusão com proposta de solução" },
      ],
      ordemCerta: ["t1", "t2", "t3", "t4"],
      feedbackAcerto: "⚖️ Estrutura de advogado: tese, provas e proposta.",
      feedbackErro: "Quem argumenta bem diz primeiro o que defende, depois por quê.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho esta reclamação e avalie sua força.",
    leitura: {
      titulo: "Uma reclamação fraca",
      imagemUrl: escola,
      destacar: ["porque sim", "todo mundo sabe"],
      paragrafos: [
        "Prezada coordenação, a quadra deve ser liberada no intervalo porque sim. Todo mundo sabe que quadra fechada é ruim. Se não liberarem, vai ser péssimo.",
        "O texto tem uma tese clara — liberar a quadra — mas nenhum argumento verificável. 'Porque sim' e 'todo mundo sabe' não provam nada, e a ameaça no fim afasta o leitor em vez de convencê-lo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como esse texto poderia ficar mais convincente?",
        opcoes: [
          "Trocando 'porque sim' por dados, como o número de alunos sem opção de atividade no intervalo",
          "Escrevendo com letras maiores",
          "Repetindo a tese várias vezes",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Argumento com evidência vence repetição e exagero.",
        feedbackErro: "O que falta no texto não é tamanho nem repetição — é prova.",
        ondeEstaNoTexto: "'Porque sim' e 'todo mundo sabe' não provam nada.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "O Tribunal das Ideias",
    instrucao: "Selecione apenas os ARGUMENTOS válidos para defender a tese: 'a escola deve ter horta'.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "O Tribunal das Ideias",
      bloco: {
        instrucao: "Toque nas frases que servem como argumento no tribunal.",
        pergunta: "Quais frases sustentam a tese com motivo ou evidência?",
        opcoes: [
          { id: "g1", texto: "A horta permite aulas práticas de ciências no próprio pátio.", correto: true },
          { id: "g2", texto: "Porque sim, ora essa.", correto: false },
          { id: "g3", texto: "Alimentos colhidos podem reduzir o custo da merenda.", correto: true },
          { id: "g4", texto: "Horta é a coisa mais linda do mundo.", correto: false },
          { id: "g5", texto: "O canteiro dos fundos está sem uso desde 2022.", correto: true },
        ],
        feedbackAcerto: "⚖️ Causa vencida! Seus três argumentos têm motivo e evidência.",
        feedbackErro: "Pergunte de cada frase: ela dá um MOTIVO que pode ser discutido? Se for só gosto, não é argumento.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Tese é a opinião defendida; vem no começo do texto.",
      "Argumento é o motivo que sustenta a tese, com dado ou exemplo.",
      "Conectivos organizam: em primeiro lugar, além disso, no entanto, portanto.",
      "A conclusão apresenta proposta, não ameaça.",
      "'Porque sim' e 'todo mundo sabe' não são argumentos.",
    ],
    miniDesafio: {
      pergunta: "Qual conectivo você usaria para introduzir a conclusão?",
      opcoes: ["Portanto", "Além disso", "Em primeiro lugar"],
      correta: 0,
      feedbackAcerto: "⚖️ Portanto fecha o raciocínio.",
      feedbackErro: "Dois desses conectivos servem para acrescentar ideias, não para concluir.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual frase é uma TESE?",
        opcoes: [
          "A escola deve ter uma horta comunitária.",
          "As plantas precisam de água e sol.",
          "O canteiro fica nos fundos.",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Excelente! Você defende ideias com estrutura de advogado.",
        feedbackErro: "Tese é uma posição defendida, algo com que se pode concordar ou discordar.",
      },
      {
        pergunta: "Qual é o melhor argumento para essa tese?",
        opcoes: [
          "A horta permite aulas práticas de ciências e reduz o custo da merenda.",
          "Horta é bonita.",
          "Eu gosto de horta.",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Dois motivos concretos e verificáveis.",
        feedbackErro: "Gosto pessoal não convence a direção. Procure benefícios comprováveis.",
      },
      {
        pergunta: "O conectivo 'no entanto' indica…",
        opcoes: ["oposição entre ideias", "conclusão", "acréscimo"],
        correta: 0,
        feedbackAcerto: "⚖️ Ele apresenta um contraponto ao que foi dito.",
        feedbackErro: "Pense na frase: 'gosto de correr, no entanto está chovendo'.",
      },
      {
        pergunta: "Uma boa carta de reclamação deve terminar…",
        opcoes: [
          "com uma proposta de solução",
          "com uma ameaça",
          "sem conclusão",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Propor solução mostra respeito e aumenta a chance de resposta.",
        feedbackErro: "Releia o final da carta das lixeiras: o que a turma ofereceu?",
      },
      {
        pergunta: "Por que dados numéricos fortalecem um argumento?",
        opcoes: [
          "Porque podem ser verificados por qualquer pessoa",
          "Porque deixam o texto mais comprido",
          "Porque são difíceis de entender",
        ],
        correta: 0,
        feedbackAcerto: "⚖️ Evidência verificável é o coração da argumentação séria.",
        feedbackErro: "Pense no que diferencia 'muita gente reclamou' de '43 alunos reclamaram'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "O Debate do Jantar",
    materiais: ["Papel e lápis"],
    passos: [
      "Escolha um tema simples da casa (horário da TV, divisão de tarefas).",
      "Escreva sua tese em uma frase.",
      "Apresente dois argumentos à família — pelo menos um com dado ou exemplo real.",
      "Ouça o contra-argumento e escreva uma conclusão com proposta.",
    ],
    registro: "Anote a tese, os dois argumentos e a proposta final combinada.",
  },

  recompensa: {
    xp: 120,
    moedas: 40,
    medalha: "⚖️ Toga de Advogado das Palavras",
  },
};
