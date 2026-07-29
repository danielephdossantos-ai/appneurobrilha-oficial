import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as borboleta } from "@/assets/neuro-treino/objetos/borboleta.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";

/**
 * Aula 3 — "Verbete e Infográfico da Abelha"
 * -------------------------------------------------------------
 * O time explora um campo de flores e encontra abelhas trabalhando.
 * A missão: organizar o que descobriram em dois gêneros que ORGANIZAM
 * informação de formas diferentes — o VERBETE (texto que define) e o
 * INFOGRÁFICO (imagem + texto curto que mostra um processo).
 *
 * Foco pedagógico:
 *  - Reconhecer a estrutura do verbete de enciclopédia: palavra +
 *    definição objetiva + características.
 *  - Reconhecer o infográfico: organiza etapas/dados combinando
 *    imagem e texto curto, numerado ou com setas.
 *
 * BNCC: EF04LP15, EF04LP17
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-verbete-infografico",
  titulo: "Verbete e Infográfico da Abelha",
  iconeTrilha: "🐝",
  bncc: ["EF04LP15", "EF04LP17"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Um campo cheio de informação para organizar",
    historia:
      "No meio do campo de girassóis, Brilha observou abelhas voando de flor em flor. — Descobrimos muita informação sobre as abelhas e a polinização! Mas informação solta não ajuda ninguém. Precisamos ORGANIZAR: um VERBETE explica o que é a abelha, com clareza e objetividade. Já um INFOGRÁFICO mostra, com imagens e setas, como funciona o processo de polinização, passo a passo.",
    imagemUrl: girassol,
  },

  momento02_previsao: {
    instrucao:
      "Observe as pistas do caderno de campo. O que elas revelam sobre os dois textos que vamos organizar?",
    bloco: {
      titulo: "Organizando a descoberta das abelhas",
      capaImagemUrl: mural,
      pistas: [
        { imagemUrl: abelha, nome: "Abelha" },
        { imagemUrl: flor, nome: "Flor" },
      ],
      recado: {
        rotulo: "Caderno de campo",
        icone: "📋",
        linhas: [
          "TEXTO 1: o que é uma abelha (definição)",
          "TEXTO 2: como a polinização acontece (etapas)",
        ],
        estilo: "papel",
      },
      pergunta: "Qual gênero organiza a informação em ETAPAS, usando imagem e texto curto lado a lado?",
      hipoteses: [
        { texto: "O infográfico.", imagemUrl: mapa },
        { texto: "Uma carta de amor.", imagemUrl: livro },
        { texto: "Uma manchete de jornal.", imagemUrl: mural },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "📋 Isso! O INFOGRÁFICO organiza etapas com imagens e texto curto — perfeito para mostrar um processo como a polinização.",
      feedbackErro:
        "Releia o caderno: um texto DEFINE (verbete), o outro mostra ETAPAS com imagens (infográfico). Pense em qual organiza um processo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Verbete e infográfico têm palavras próprias. Conheça 3 delas.",
    cards: [
      {
        palavra: "verbete",
        explicacao:
          "É o texto de um dicionário ou enciclopédia que define uma palavra: o que ela é, suas características, de forma objetiva e sem opinião.",
        exemplo: "Verbete 'abelha': inseto que vive em colmeias, produz mel e poliniza flores.",
        imagemUrl: livro,
      },
      {
        palavra: "infográfico",
        explicacao:
          "É um texto que organiza informação misturando imagens, números e frases curtas, geralmente em etapas numeradas ou ligadas por setas.",
        exemplo: "O infográfico mostrou, em 4 etapas com desenhos, como a abelha poliniza uma flor.",
        imagemUrl: mapa,
      },
      {
        palavra: "polinização",
        explicacao:
          "É o processo em que o pólen de uma flor é levado até outra, ajudando as plantas a produzir sementes e frutos. As abelhas são grandes polinizadoras.",
        exemplo: "Sem a polinização das abelhas, muitas frutas não existiriam.",
        imagemUrl: abelha,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos o verbete e o infográfico que o time organizou sobre a abelha.",
    leitura: {
      titulo: "Verbete: Abelha  •  Infográfico: Como acontece a polinização",
      imagemUrl: abelha,
      legendaImagem: "Abelha pousada em uma flor, coletando néctar",
      destacar: ["colmeias", "néctar", "pólen"],
      paragrafos: [
        "VERBETE — Abelha: inseto voador que vive em grupos organizados chamados colmeias. Alimenta-se do néctar das flores e produz mel. É um dos principais animais polinizadores do planeta.",
        "INFOGRÁFICO — Como acontece a polinização, em 4 etapas: 1) A abelha pousa em uma flor para coletar néctar. 2) O pólen da flor gruda em seu corpo peludo. 3) A abelha voa até outra flor da mesma espécie. 4) O pólen se solta na nova flor, permitindo que ela produza sementes e frutos.",
        "Enquanto o verbete DEFINE a abelha em um parágrafo direto, o infográfico ORGANIZA o processo de polinização em etapas numeradas, fáceis de seguir com os olhos.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Segundo o verbete, onde as abelhas vivem em grupo?",
        opcoes: ["Em ninhos de pássaro", "Em colmeias", "Em tocas subterrâneas"],
        correta: 1,
        feedbackAcerto: "📋 Isso! O verbete diz que elas vivem em grupos organizados chamados COLMEIAS.",
        feedbackErro: "Releia o verbete: a palavra do lugar onde elas vivem em grupo está destacada.",
        ondeEstaNoTexto: "…vive em grupos organizados chamados colmeias.",
      },
      {
        pergunta: "Qual é a etapa 1 do infográfico da polinização?",
        opcoes: [
          "A abelha voa até outra flor",
          "A abelha pousa na flor para coletar néctar",
          "A flor produz frutos",
        ],
        correta: 1,
        feedbackAcerto: "📋 Correto! A primeira etapa é a abelha pousar na flor para coletar néctar.",
        feedbackErro: "Releia a etapa numerada com o número 1 no infográfico.",
        ondeEstaNoTexto: "1) A abelha pousa em uma flor para coletar néctar.",
      },
      {
        pergunta: "Qual é a diferença entre o verbete e o infográfico, segundo o texto?",
        opcoes: [
          "O verbete define em um parágrafo; o infográfico organiza um processo em etapas",
          "Os dois são exatamente iguais",
          "O verbete só tem imagens, sem texto",
        ],
        correta: 0,
        feedbackAcerto:
          "📋 Isso! O verbete DEFINE de forma direta; o infográfico mostra ETAPAS de um processo, numeradas.",
        feedbackErro: "Releia a última frase do texto — ela compara os dois gêneros diretamente.",
        ondeEstaNoTexto: "…o verbete DEFINE a abelha… o infográfico ORGANIZA o processo… em etapas numeradas…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Verbete e infográfico não têm 'personagens' como uma história — eles organizam SERES e PROCESSOS. Vamos identificar.",
    perguntas: [
      {
        pergunta: "Qual é o 'assunto' (não personagem) que o verbete define?",
        opcoes: ["A abelha", "Uma menina exploradora", "Um dragão"],
        correta: 0,
        feedbackAcerto: "📋 Isso! O verbete define o assunto A ABELHA, com suas características reais.",
        feedbackErro: "O verbete não conta história com personagens — ele define um SER real: qual?",
      },
      {
        pergunta: "Qual processo da natureza o infográfico organiza em etapas?",
        opcoes: ["A fabricação de um carro", "A polinização das flores pelas abelhas", "A construção de uma ponte"],
        correta: 1,
        feedbackAcerto: "📋 Exato! O infográfico organiza o processo de POLINIZAÇÃO.",
        feedbackErro: "Releia o título do infográfico: qual processo da natureza está sendo explicado em etapas?",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as etapas da polinização mostradas no infográfico na ordem certa.",
    bloco: {
      instrucao: "Siga a ordem numerada do infográfico.",
      itens: [
        { id: "s1", texto: "A abelha pousa na flor para coletar néctar.", imagemUrl: flor },
        { id: "s2", texto: "O pólen gruda no corpo peludo da abelha.", imagemUrl: abelha },
        { id: "s3", texto: "A abelha voa até outra flor e o pólen se solta, gerando sementes.", imagemUrl: girassol },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "📋 Isso mesmo! Você seguiu a ordem exata das etapas do infográfico.",
      feedbackErro:
        "Pense: primeiro a abelha POUSA. Depois o PÓLEN gruda nela. Só então ela leva o pólen para outra flor.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho este verbete e infográfico sobre a borboleta e responda.",
    leitura: {
      titulo: "Verbete: Borboleta  •  Infográfico: Metamorfose, em 4 etapas",
      imagemUrl: borboleta,
      destacar: ["metamorfose", "lagarta", "casulo"],
      paragrafos: [
        "VERBETE — Borboleta: inseto com asas coloridas, que passa por grandes transformações durante a vida, chamadas de metamorfose.",
        "INFOGRÁFICO: 1) A borboleta põe um ovo em uma folha. 2) Do ovo nasce uma lagarta, que come muitas folhas. 3) A lagarta forma um casulo ao redor do corpo. 4) Dentro do casulo, ela se transforma e sai como borboleta adulta.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como se chama o processo de transformação da borboleta?",
        opcoes: ["Polinização", "Metamorfose", "Migração"],
        correta: 1,
        feedbackAcerto: "📋 Isso! O verbete chama esse processo de METAMORFOSE.",
        feedbackErro: "A palavra está destacada no próprio verbete.",
        ondeEstaNoTexto: "…passa por grandes transformações durante a vida, chamadas de metamorfose.",
      },
      {
        pergunta: "O que acontece na etapa 3 do infográfico?",
        opcoes: [
          "A lagarta forma um casulo ao redor do corpo",
          "A borboleta põe um ovo",
          "A lagarta nasce do ovo",
        ],
        correta: 0,
        feedbackAcerto: "📋 Correto! Na etapa 3, a lagarta forma o CASULO.",
        feedbackErro: "Releia a etapa numerada com o número 3.",
        ondeEstaNoTexto: "3) A lagarta forma um casulo ao redor do corpo.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "VERBETE define uma palavra ou ser de forma objetiva, em um parágrafo direto.",
      "INFOGRÁFICO organiza um processo em etapas, combinando imagem e texto curto.",
      "Os dois gêneros ORGANIZAM informação — mas de jeitos diferentes: um define, o outro mostra etapas.",
      "POLINIZAÇÃO e METAMORFOSE são exemplos de processos que ficam mais claros em infográfico.",
    ],
    miniDesafio: {
      pergunta: "O texto que organiza um processo em etapas numeradas, com imagens, se chama…",
      opcoes: ["Verbete", "Infográfico", "Manchete"],
      correta: 1,
      feedbackAcerto: "📋 Isso! É o INFOGRÁFICO — combina imagem e texto curto em etapas.",
      feedbackErro: "Verbete define uma palavra. O texto de etapas com imagem é o INFOGRÁFICO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um verbete?",
        opcoes: [
          "Um texto que define uma palavra de forma objetiva",
          "Uma carta pessoal",
          "Um anúncio publicitário",
        ],
        correta: 0,
        feedbackAcerto: "📋 Isso! Verbete DEFINE uma palavra, com clareza e objetividade.",
        feedbackErro: "Verbete não é carta nem anúncio — ele DEFINE algo, como num dicionário.",
      },
      {
        pergunta: "2/5 — O infográfico combina, principalmente,...",
        opcoes: [
          "Imagem e texto curto organizados em etapas",
          "Apenas números, sem nenhuma imagem",
          "Apenas desenhos, sem nenhum texto",
        ],
        correta: 0,
        feedbackAcerto: "📋 Correto! Infográfico une IMAGEM e TEXTO CURTO, geralmente em etapas.",
        feedbackErro: "Pense no que aparece junto no infográfico: imagens E frases curtas.",
      },
      {
        pergunta: "3/5 — O que é polinização?",
        opcoes: [
          "Quando o pólen de uma flor é levado a outra, ajudando a gerar sementes e frutos",
          "Quando a abelha dorme dentro da colmeia",
          "Quando uma flor muda de cor",
        ],
        correta: 0,
        feedbackAcerto: "📋 Isso! Polinização é o transporte do pólen entre flores, gerando sementes e frutos.",
        feedbackErro: "Releia o verbete de 'polinização' no momento 3 — o que acontece com o pólen?",
      },
      {
        pergunta: "4/5 — No infográfico da borboleta, o que vem logo depois do ovo?",
        opcoes: ["A lagarta nasce", "A borboleta já nasce adulta", "O casulo se forma primeiro"],
        correta: 0,
        feedbackAcerto: "📋 Isso mesmo, depois do ovo nasce a LAGARTA.",
        feedbackErro: "Releia a ordem das etapas: o que vem na etapa 2, logo depois do ovo?",
      },
      {
        pergunta: "5/5 — Verbete e infográfico são parecidos porque os dois...",
        opcoes: [
          "Organizam informação real, sem inventar histórias",
          "Sempre têm rima",
          "Sempre contam uma opinião pessoal",
        ],
        correta: 0,
        feedbackAcerto: "📋 Muito bem! Ambos organizam informação REAL, de jeitos diferentes.",
        feedbackErro: "Nenhum dos dois inventa história nem rima — os dois ORGANIZAM informação real.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Crie seu verbete e seu infográfico",
    materiais: ["Papel e lápis de cor (ou celular para desenhar/digitar)"],
    passos: [
      "1) Escolha um animal ou planta que você gosta.",
      "2) Escreva um VERBETE curto sobre ele: o que é, características principais, em um parágrafo direto.",
      "3) Escolha um processo desse animal ou planta (como ele nasce, cresce ou se alimenta) e organize em um INFOGRÁFICO de 3 ou 4 etapas numeradas, com desenhos simples.",
      "4) Compare: o que o verbete conta que o infográfico não conta, e vice-versa?",
    ],
    registro: "📝 O verbete e o infográfico feitos à mão (ou digitados), para trazer na próxima aula.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
