import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as arcoIris } from "@/assets/neuro-treino/objetos/arco-iris.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as cristalAgua } from "@/assets/neuro-treino/objetos/cristal-agua.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";

/**
 * Aula 2 — "O Fenômeno do Arco-Íris"
 * -------------------------------------------------------------
 * O time de exploradores acampa perto de uma cachoeira, onde um
 * arco-íris aparece depois da chuva. A missão: escrever um texto
 * de DIVULGAÇÃO CIENTÍFICA que explique o fenômeno com clareza
 * para qualquer leitor, usando glossário e legenda de imagem.
 *
 * Foco pedagógico:
 *  - Reconhecer a função do texto de divulgação científica: explicar
 *    um fenômeno com linguagem clara, sem inventar nem simplificar
 *    demais a informação.
 *  - Perceber o papel do GLOSSÁRIO (explica termos difíceis) e da
 *    LEGENDA (explica o que a imagem mostra).
 *
 * BNCC: EF04LP12, EF35LP15
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-divulgacao-cientifica",
  titulo: "O Fenômeno do Arco-Íris",
  iconeTrilha: "🌈",
  bncc: ["EF04LP12", "EF35LP15"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Um arco de cores no acampamento",
    historia:
      "Depois da chuva parar perto da cachoeira, um arco de cores surgiu no céu. — Uau! — disse Brilha. — Isso é um fenômeno natural: o ARCO-ÍRIS! Nosso próximo texto não é reportagem nem notícia: é DIVULGAÇÃO CIENTÍFICA. Nossa missão é explicar por que isso acontece, com clareza, para qualquer leitor entender — usando glossário e legenda.",
    imagemUrl: arcoIris,
  },

  momento02_previsao: {
    instrucao:
      "Antes de ler a explicação, observe as pistas do fenômeno. O que elas revelam sobre a causa do arco-íris?",
    bloco: {
      titulo: "O mistério do arco de cores",
      capaImagemUrl: arcoIris,
      pistas: [
        { imagemUrl: sol, nome: "Sol" },
        { imagemUrl: chuva, nome: "Gotas de chuva" },
      ],
      recado: {
        rotulo: "Caderno de campo",
        icone: "🔬",
        linhas: [
          "OBSERVAÇÃO: arco-íris aparece",
          "quando tem sol E chuva ao mesmo tempo.",
          "Por quê?",
        ],
        estilo: "papel",
      },
      pergunta: "O texto de divulgação científica vai explicar que o arco-íris aparece por causa de...",
      hipoteses: [
        { texto: "Sol e chuva juntos, com a luz atravessando as gotas de água.", imagemUrl: cristalAgua },
        { texto: "Um passe de mágica de um personagem de conto de fadas.", imagemUrl: livro },
        { texto: "Um tipo especial de pintura no céu.", imagemUrl: nuvem },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔬 Isso! As pistas mostram sol E chuva juntos — divulgação científica explica com base em fenômenos reais, não em mágica.",
      feedbackErro:
        "Releia o caderno de campo: ele junta SOL e CHUVA. A explicação científica usa esses dois elementos reais, sem mágica.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Todo texto de divulgação científica usa palavras especiais. Conheça 3 delas.",
    cards: [
      {
        palavra: "divulgação científica",
        explicacao:
          "É um texto que explica um fenômeno ou uma descoberta da ciência com linguagem clara, para que qualquer leitor entenda, sem inventar nem exagerar.",
        exemplo: "O texto de divulgação científica explicou por que o arco-íris tem sete cores.",
        imagemUrl: livro,
      },
      {
        palavra: "glossário",
        explicacao:
          "É uma pequena lista, ao final ou ao lado do texto, que explica palavras difíceis usadas nele.",
        exemplo: "No glossário, a palavra 'refração' foi explicada como 'quando a luz muda de direção ao passar de um material para outro'.",
        imagemUrl: livro,
      },
      {
        palavra: "legenda",
        explicacao:
          "É o texto curto embaixo (ou ao lado) de uma imagem, foto ou desenho, explicando o que ela mostra.",
        exemplo: "Legenda da imagem: 'A luz do sol se divide em cores ao atravessar as gotas de chuva.'",
        imagemUrl: cristalAgua,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos o texto de divulgação científica sobre o arco-íris.",
    leitura: {
      titulo: "Por que o arco-íris aparece no céu?",
      imagemUrl: cristalAgua,
      legendaImagem: "A luz do Sol atravessa uma gota de chuva e se divide em cores.",
      destacar: ["refração", "sete cores", "gotas de chuva"],
      paragrafos: [
        "O arco-íris aparece quando o Sol brilha ao mesmo tempo em que ainda há gotas de chuva no ar. A luz do Sol parece branca, mas na verdade é formada pela mistura de várias cores.",
        "Quando um raio de luz atravessa uma gota de água, ele muda de direção — esse processo se chama refração — e se separa nas cores que o compõem: vermelho, laranja, amarelo, verde, azul, anil e violeta. São sete cores no total.",
        "Por isso, para ver um arco-íris, é preciso ter Sol atrás de você e chuva (ou água em gotas, como de uma mangueira) na sua frente. Sem essa combinação exata, o fenômeno não acontece.",
        "Glossário: refração — quando a luz muda de direção ao passar de um material para outro, como do ar para a água.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Que condições precisam existir ao mesmo tempo para o arco-íris aparecer?",
        opcoes: [
          "Sol e gotas de chuva no ar",
          "Neve e vento forte",
          "Noite escura e lua cheia",
        ],
        correta: 0,
        feedbackAcerto: "🔬 Isso! É preciso SOL e GOTAS DE CHUVA no ar, ao mesmo tempo.",
        feedbackErro: "Releia o primeiro parágrafo: quais dois elementos precisam estar presentes juntos?",
        ondeEstaNoTexto: "…quando o Sol brilha ao mesmo tempo em que ainda há gotas de chuva no ar.",
      },
      {
        pergunta: "Como se chama o processo em que a luz muda de direção ao atravessar a gota?",
        opcoes: ["Reflexão", "Refração", "Rotação"],
        correta: 1,
        feedbackAcerto: "🔬 Correto! O nome do processo é REFRAÇÃO — está explicado no texto e no glossário.",
        feedbackErro: "O nome do processo está entre travessões no segundo parágrafo, e também no glossário.",
        ondeEstaNoTexto: "…ele muda de direção — esse processo se chama refração —…",
      },
      {
        pergunta: "Quantas cores formam o arco-íris, segundo o texto?",
        opcoes: ["Cinco", "Sete", "Dez"],
        correta: 1,
        feedbackAcerto: "🔬 Isso! São SETE cores: vermelho, laranja, amarelo, verde, azul, anil e violeta.",
        feedbackErro: "Conte as cores citadas no segundo parágrafo, uma por uma.",
        ondeEstaNoTexto: "…vermelho, laranja, amarelo, verde, azul, anil e violeta. São sete cores no total.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Textos de divulgação científica usam imagens explicadas por legendas. Vamos identificar essa relação.",
    perguntas: [
      {
        pergunta: "O que a LEGENDA da imagem deste texto explica?",
        opcoes: [
          "Que a luz do Sol atravessa uma gota e se divide em cores",
          "O nome do fotógrafo que tirou a foto",
          "A previsão do tempo de amanhã",
        ],
        correta: 0,
        feedbackAcerto:
          "🔬 Isso! A legenda resume, em uma frase, exatamente o que a imagem mostra: a luz se dividindo em cores.",
        feedbackErro: "Releia a legenda embaixo da imagem, logo no início do texto.",
      },
      {
        pergunta: "Para que serve o GLOSSÁRIO ao final do texto?",
        opcoes: [
          "Para explicar uma palavra difícil usada no texto (refração)",
          "Para contar uma história inventada",
          "Para dar a opinião do autor",
        ],
        correta: 0,
        feedbackAcerto: "🔬 Exato! O glossário explica a palavra 'refração', que pode ser difícil para o leitor.",
        feedbackErro: "O glossário aparece no final do texto e explica um termo técnico.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as etapas do fenômeno do arco-íris na ordem certa.",
    bloco: {
      instrucao: "Do início da chuva até o arco de cores aparecer.",
      itens: [
        { id: "s1", texto: "Chove e ainda restam gotas de água no ar.", imagemUrl: chuva },
        { id: "s2", texto: "O Sol volta a brilhar e sua luz atravessa as gotas.", imagemUrl: sol },
        { id: "s3", texto: "A luz se divide em sete cores e forma o arco-íris.", imagemUrl: arcoIris },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🔬 Isso mesmo! Primeiro a CHUVA, depois o SOL voltando, e por fim a LUZ se dividindo em cores.",
      feedbackErro:
        "Pense na ordem real: primeiro precisa ter chovido (gotas no ar), depois o sol aparece, e só então a luz se divide.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho este outro texto de divulgação científica e responda.",
    leitura: {
      titulo: "Por que ouvimos o trovão depois de ver o relâmpago?",
      imagemUrl: nuvem,
      destacar: ["velocidade da luz", "velocidade do som"],
      paragrafos: [
        "Durante uma tempestade, vemos o relâmpago antes de ouvir o trovão, mesmo que os dois aconteçam ao mesmo tempo. Isso acontece porque a luz viaja muito mais rápido do que o som.",
        "Glossário: velocidade da luz — a rapidez com que a luz se desloca, muito maior do que a velocidade do som, que é a rapidez com que o barulho se desloca pelo ar.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que vemos o relâmpago antes de ouvir o trovão?",
        opcoes: [
          "Porque a luz viaja mais rápido que o som",
          "Porque o trovão demora a começar",
          "Porque o relâmpago acontece antes",
        ],
        correta: 0,
        feedbackAcerto: "🔬 Isso! A LUZ é muito mais rápida que o SOM, por isso vemos antes de ouvir.",
        feedbackErro: "Releia a última frase do primeiro parágrafo — compare as duas velocidades.",
        ondeEstaNoTexto: "…a luz viaja muito mais rápido do que o som.",
      },
      {
        pergunta: "Para que serve o glossário deste texto?",
        opcoes: [
          "Para explicar o que são velocidade da luz e do som",
          "Para contar uma lenda popular",
          "Para dar uma receita de bolo",
        ],
        correta: 0,
        feedbackAcerto: "🔬 Correto! O glossário explica os termos técnicos usados no texto.",
        feedbackErro: "O glossário está no final e explica palavras específicas da ciência.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "DIVULGAÇÃO CIENTÍFICA explica um fenômeno real com linguagem clara.",
      "GLOSSÁRIO explica palavras difíceis usadas no texto.",
      "LEGENDA explica o que a imagem que acompanha o texto está mostrando.",
      "O arco-íris acontece pela REFRAÇÃO da luz do Sol nas gotas de chuva.",
    ],
    miniDesafio: {
      pergunta: "O texto curto que explica o que uma imagem está mostrando se chama…",
      opcoes: ["Glossário", "Legenda", "Manchete"],
      correta: 1,
      feedbackAcerto: "🔬 Isso! É a LEGENDA — explica exatamente o que a imagem mostra.",
      feedbackErro: "Glossário explica palavras. O texto embaixo da imagem é a LEGENDA.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual é a função de um texto de divulgação científica?",
        opcoes: [
          "Explicar um fenômeno real com clareza",
          "Contar uma fábula com moral",
          "Anunciar um produto para vender",
        ],
        correta: 0,
        feedbackAcerto: "🔬 Isso! Ele EXPLICA fenômenos reais de forma clara.",
        feedbackErro: "Divulgação científica não inventa história nem vende nada — ela EXPLICA um fenômeno real.",
      },
      {
        pergunta: "2/5 — O glossário serve para...",
        opcoes: [
          "Explicar palavras difíceis do texto",
          "Substituir o título",
          "Contar a opinião do leitor",
        ],
        correta: 0,
        feedbackAcerto: "🔬 Correto! Glossário é uma pequena lista de explicações de palavras.",
        feedbackErro: "Pense: o glossário é tipo um 'dicionário mini' de palavras do próprio texto.",
      },
      {
        pergunta: "3/5 — O arco-íris aparece porque a luz do Sol...",
        opcoes: [
          "Se divide em cores ao atravessar gotas de água",
          "Fica verde ao passar pela grama",
          "Desaparece completamente à noite",
        ],
        correta: 0,
        feedbackAcerto: "🔬 Isso! A luz se divide em cores (refração) ao atravessar as gotas.",
        feedbackErro: "Lembre do processo de REFRAÇÃO explicado no texto: a luz muda de direção nas gotas.",
      },
      {
        pergunta: "4/5 — Quantas cores tem o arco-íris?",
        opcoes: ["Cinco", "Sete", "Doze"],
        correta: 1,
        feedbackAcerto: "🔬 Isso mesmo, são SETE cores.",
        feedbackErro: "Releia a lista de cores do texto e conte quantas são.",
      },
      {
        pergunta: "5/5 — A legenda de uma imagem deve...",
        opcoes: [
          "Explicar exatamente o que a imagem mostra",
          "Contar uma piada sobre a imagem",
          "Ser sempre maior que o texto principal",
        ],
        correta: 0,
        feedbackAcerto: "🔬 Muito bem! A legenda esclarece o conteúdo da imagem de forma direta.",
        feedbackErro: "Legenda não é piada nem enfeite — ela EXPLICA o que a imagem mostra.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Vire um divulgador científico",
    materiais: ["Papel e lápis (ou celular para tirar uma foto)"],
    passos: [
      "1) Escolha um fenômeno natural simples que você observa em casa (por que o gelo derrete, por que a sombra muda de tamanho, por que a água ferve).",
      "2) Escreva 2 a 3 frases explicando o fenômeno com suas palavras, de forma clara.",
      "3) Escolha uma palavra difícil do seu texto e crie um mini glossário explicando ela.",
      "4) Se possível, tire ou desenhe uma imagem do fenômeno e escreva uma legenda para ela.",
    ],
    registro: "📝 O texto explicativo, o mini glossário e a legenda da imagem, para trazer na próxima aula.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
