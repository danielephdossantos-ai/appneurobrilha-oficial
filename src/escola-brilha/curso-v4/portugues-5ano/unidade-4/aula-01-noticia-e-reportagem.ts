import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Notícia e Reportagem
 * -------------------------------------------------------------
 * Abertura da Unidade 4 (Arquivo dos Gêneros). A investigação: entender
 * como uma notícia é montada (a estrutura da pirâmide invertida), o que
 * é o LIDE (o parágrafo que resume o essencial) e por que checar a fonte
 * de uma informação é o primeiro passo de qualquer repórter sério.
 *
 * Foco pedagógico: reconhecer a estrutura de notícia/reportagem, o lide
 * (o quê, quem, quando, onde, como, por quê) e a importância de checar
 * a fonte de uma informação antes de acreditar nela.
 *
 * BNCC: EF35LP03, EF35LP27, EF05LP19, EF69LP03 (adaptada ao 5º ano)
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-noticia-e-reportagem",
  titulo: "Notícia e Reportagem",
  iconeTrilha: "📰",
  bncc: ["EF35LP03", "EF35LP27", "EF05LP19"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Bem-vindo ao Arquivo dos Gêneros",
    historia:
      "A Central de Investigação da Linguagem abre um novo arquivo hoje: o dos GÊNEROS TEXTUAIS. Cada texto que existe tem uma missão — informar, opinar, avaliar, divertir — e uma forma própria de ser construído. Nosso primeiro caso: a NOTÍCIA. Um bom investigador de textos sabe reconhecer, em segundos, se está diante de um fato checado ou de um boato. Hoje você vai aprender a ler como um repórter.",
  },

  momento02_previsao: {
    instrucao:
      "Antes de investigar a notícia completa, observe apenas o título e a primeira frase. O que você consegue prever sobre o fato relatado?",
    bloco: {
      titulo: "Escola municipal implanta horta comunitária e reduz desperdício de merenda",
      recado: {
        rotulo: "Manchete do jornal da cidade",
        icone: "📰",
        linhas: [
          "Escola municipal implanta horta comunitária e reduz desperdício de merenda",
          "Projeto criado por alunos do 5º ano já colhe os primeiros resultados.",
        ],
        estilo: "cartaz",
      },
      pergunta: "Só com essa manchete, o que essa notícia provavelmente vai contar?",
      hipoteses: [
        { texto: "Um fato real sobre uma horta que ajudou a reduzir desperdício em uma escola" },
        { texto: "Uma receita de como plantar hortaliças em casa" },
        { texto: "A opinião pessoal de um jornalista sobre agricultura" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "📰 Correto! Manchetes de notícia relatam FATOS: algo que aconteceu, com quem, onde e qual foi o resultado. Não é uma receita nem uma opinião — é um relato do que ocorreu.",
      feedbackErro:
        "Repare que a manchete usa verbos de fato já concluído ('implanta', 'reduz') e cita uma instituição real. Isso é característico de notícia, não de receita ou de opinião.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras-chave para decifrar qualquer notícia ou reportagem.",
    cards: [
      {
        palavra: "lide",
        explicacao:
          "É o primeiro parágrafo da notícia. Nele, o repórter já responde às perguntas essenciais: o quê, quem, quando, onde, como e por quê. Quem lê só o lide já entende o essencial do fato.",
        exemplo: "'Alunos do 5º ano da Escola Vitória (quem) criaram uma horta comunitária (o quê) no pátio da escola (onde) em março (quando) para reduzir o desperdício de merenda (por quê).'",
      },
      {
        palavra: "pirâmide invertida",
        explicacao:
          "É a forma como uma notícia é organizada: a informação mais importante vem primeiro, e os detalhes menos essenciais vêm por último. É o oposto de um conto, que guarda surpresas para o final.",
        exemplo: "Numa notícia sobre um acidente, primeiro se diz o que aconteceu e quem se feriu; só depois vêm detalhes como a cor do carro.",
      },
      {
        palavra: "fonte",
        explicacao:
          "É de onde a informação vem: uma pessoa entrevistada, um documento, um órgão oficial. Notícia confiável sempre cita a fonte, para que o leitor possa checar se a informação é verdadeira.",
        exemplo: "'Segundo a diretora da escola, Marta Ferreira, o desperdício caiu 40% depois da horta.' Aqui, a fonte é a diretora.",
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia como um investigador: procure o lide (primeiro parágrafo) e observe como as informações mais importantes vêm primeiro.",
    leitura: {
      titulo: "Escola municipal implanta horta comunitária e reduz desperdício de merenda",
      destacar: ["Escola Municipal Vitória", "reduziu em 40%", "segundo a diretora Marta Ferreira"],
      paragrafos: [
        "Alunos do 5º ano da Escola Municipal Vitória, em parceria com professores de Ciências, criaram uma horta comunitária no pátio da escola em março deste ano. O objetivo era reaproveitar restos de alimentos como adubo e ensinar sobre consumo consciente.",
        "Segundo a diretora Marta Ferreira, o desperdício de merenda escolar reduziu em 40% desde a implantação do projeto. 'Os alunos passaram a valorizar mais a comida quando entenderam de onde ela vem', afirmou a diretora em entrevista à equipe do jornal escolar.",
        "A horta produz hoje alface, tomate e temperos, usados na própria merenda. O projeto foi apresentado à Secretaria Municipal de Educação, que estuda levar a ideia para outras dez escolas da rede a partir do próximo ano.",
        "Para os estudantes envolvidos, a experiência também mudou hábitos em casa. 'Comecei a separar o lixo orgânico para fazer adubo até na cozinha da minha avó', contou o aluno Lucas Andrade, de 10 anos, um dos idealizadores da horta.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "Qual é o lide (essência) dessa notícia?",
        opcoes: [
          "Alunos do 5º ano criaram uma horta comunitária que reduziu o desperdício de merenda",
          "A avó de Lucas Andrade também faz adubo em casa",
          "A Secretaria de Educação nunca soube do projeto",
        ],
        correta: 0,
        feedbackAcerto: "📰 Isso! O primeiro parágrafo já traz o essencial: quem fez, o quê, onde e quando.",
        feedbackErro: "Releia o primeiro parágrafo: ele já responde quem fez o projeto e qual foi o resultado.",
        ondeEstaNoTexto: "Alunos do 5º ano da Escola Municipal Vitória... criaram uma horta comunitária no pátio da escola em março deste ano.",
      },
      {
        pergunta: "Quem é a fonte que confirma a redução do desperdício?",
        opcoes: ["O aluno Lucas Andrade", "A diretora Marta Ferreira", "A Secretaria Municipal de Educação"],
        correta: 1,
        feedbackAcerto: "📰 Exato! O texto diz 'segundo a diretora Marta Ferreira'.",
        feedbackErro: "Procure a expressão 'segundo a diretora...' no segundo parágrafo.",
        ondeEstaNoTexto: "Segundo a diretora Marta Ferreira, o desperdício de merenda escolar reduziu em 40%...",
      },
      {
        pergunta: "Por que citar a fonte (a diretora) é importante numa notícia?",
        opcoes: [
          "Porque deixa o texto mais longo",
          "Porque permite ao leitor checar de onde vem a informação e confiar nela",
          "Porque é uma regra sem motivo real",
        ],
        correta: 1,
        feedbackAcerto: "📰 Perfeito! Citar a fonte é o que torna uma notícia checável e confiável.",
        feedbackErro: "Pense: sem citar quem disse o quê, como o leitor saberia se a informação é verdadeira?",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora vamos investigar a ESTRUTURA da notícia, não só o conteúdo.",
    perguntas: [
      {
        pergunta: "Por que a notícia começa contando o resultado (redução do desperdício) e só depois traz detalhes como a fala do aluno Lucas?",
        opcoes: [
          "Porque o jornalista esqueceu de organizar o texto",
          "Porque a notícia segue a pirâmide invertida: o mais importante primeiro, os detalhes por último",
          "Porque notícias precisam terminar com uma entrevista, sempre",
        ],
        correta: 1,
        feedbackAcerto:
          "📰 Isso mesmo! Na pirâmide invertida, quem lê só o começo já sabe o essencial. Os detalhes (como a fala do Lucas) vêm depois, para quem quer se aprofundar.",
        feedbackErro:
          "Pense na forma de uma pirâmide de cabeça para baixo: a parte mais larga (mais importante) fica em cima, no começo do texto.",
      },
      {
        pergunta: "Se um jornal publicasse essa notícia sem citar nenhuma fonte (nem a diretora, nem o aluno), o que aconteceria?",
        opcoes: [
          "Nada mudaria, notícia não precisa de fonte",
          "O texto ficaria menos confiável, pois ninguém poderia checar se a informação é verdadeira",
          "O texto se tornaria uma reportagem automaticamente",
        ],
        correta: 1,
        feedbackAcerto:
          "📰 Exatamente! Sem fonte, qualquer afirmação vira só uma opinião não comprovada — e isso é um dos primeiros sinais de alerta contra informações falsas.",
        feedbackErro:
          "Sem citar de onde veio a informação, o leitor não tem como verificar se é verdade. Isso enfraquece a confiança no texto.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Um repórter organiza a apuração de uma notícia em etapas. Coloque a investigação na ordem correta.",
    bloco: {
      instrucao: "Do fato ao texto publicado.",
      itens: [
        { id: "p1", texto: "O fato acontece: a horta é criada e o desperdício cai." },
        { id: "p2", texto: "O repórter entrevista fontes, como a diretora e um aluno." },
        { id: "p3", texto: "O repórter escreve o lide, resumindo o essencial no primeiro parágrafo." },
        { id: "p4", texto: "A notícia é publicada, com os detalhes complementares no final." },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "📰 Perfeito! Essa é a linha de apuração de qualquer notícia: fato, entrevista, lide, texto final.",
      feedbackErro: "Pense: primeiro o fato precisa acontecer, depois o repórter ouve as fontes, só então escreve e publica.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso no arquivo! Leia sozinho e investigue a estrutura desta notícia.",
    leitura: {
      titulo: "Time de futebol de rua vence campeonato regional após três anos de treino",
      destacar: ["Grêmio Recreativo Estrela", "venceu por 3 a 1", "segundo o técnico Robson Lima"],
      paragrafos: [
        "O time de futebol de rua Grêmio Recreativo Estrela, formado por jovens de um bairro periférico da cidade, venceu por 3 a 1 o time favorito da região no último domingo, conquistando o campeonato regional sub-14.",
        "Segundo o técnico Robson Lima, a equipe treinava havia três anos em um campo de terra improvisado, sem patrocínio. 'Ganhamos com raça e treino, não com dinheiro', declarou o técnico após a partida.",
        "A prefeitura anunciou que vai doar uniformes novos para o time como incentivo. Os jogadores comemoraram o título percorrendo as ruas do bairro com a taça conquistada.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o lide dessa notícia?",
        opcoes: [
          "O time Grêmio Recreativo Estrela venceu o campeonato regional sub-14 após três anos de treino",
          "A prefeitura vai doar uniformes novos",
          "Os jogadores comemoraram nas ruas do bairro",
        ],
        correta: 0,
        feedbackAcerto: "📰 Isso! O primeiro parágrafo resume quem venceu, o quê conquistou e há quanto tempo treinava.",
        feedbackErro: "O lide está sempre no primeiro parágrafo — releia e busque quem, o quê e quando.",
        ondeEstaNoTexto: "O time de futebol de rua Grêmio Recreativo Estrela... venceu por 3 a 1... conquistando o campeonato regional sub-14.",
      },
      {
        pergunta: "Quem é a fonte citada na notícia e por que ela é importante?",
        opcoes: [
          "Nenhuma fonte é citada",
          "O técnico Robson Lima, cuja fala comprova o esforço da equipe",
          "A prefeitura, que é citada apenas como boato",
        ],
        correta: 1,
        feedbackAcerto: "📰 Exato! A fala do técnico é uma fonte direta que dá credibilidade ao relato sobre o treino.",
        feedbackErro: "Procure a expressão 'segundo o técnico...' — é ali que está a fonte.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "A NOTÍCIA relata um fato real, seguindo a estrutura da PIRÂMIDE INVERTIDA: o mais importante primeiro.",
      "O LIDE é o primeiro parágrafo e já responde: o quê, quem, quando, onde, como e por quê.",
      "Toda notícia confiável cita suas FONTES — quem disse o quê — para que o leitor possa checar a informação.",
      "REPORTAGEM é parecida com a notícia, mas costuma se aprofundar mais no assunto, trazendo mais entrevistas e contexto.",
    ],
    miniDesafio: {
      pergunta: "Uma notícia diz apenas 'Dizem que a escola vai fechar' sem citar ninguém. Isso é um sinal de:",
      opcoes: [
        "Um lide muito bem construído",
        "Falta de fonte confiável, o que exige checagem antes de acreditar",
        "Uma pirâmide invertida perfeita",
      ],
      correta: 1,
      feedbackAcerto: "📰 Isso! 'Dizem que' não é uma fonte — é exatamente o tipo de informação que um bom investigador precisa checar antes de espalhar.",
      feedbackErro: "Pense: quem é 'dizem'? Sem uma fonte identificável, a informação não pode ser confirmada.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o 'lide' de uma notícia?",
        opcoes: [
          "O último parágrafo, com detalhes curiosos",
          "O primeiro parágrafo, que resume o essencial do fato",
          "O título da notícia, sempre em letras grandes",
        ],
        correta: 1,
        feedbackAcerto: "📰 Isso! O lide abre a notícia respondendo o essencial.",
        feedbackErro: "O lide é sempre o primeiro parágrafo, não o título nem o final.",
      },
      {
        pergunta: "2/5 — O que significa 'pirâmide invertida' no jornalismo?",
        opcoes: [
          "Organizar o texto do mais importante para o menos importante",
          "Guardar a informação mais importante para o final, como um conto",
          "Escrever o texto em forma de triângulo na página",
        ],
        correta: 0,
        feedbackAcerto: "📰 Correto! O essencial vem primeiro; os detalhes, depois.",
        feedbackErro: "Pense na pirâmide de cabeça para baixo: a parte larga (importante) fica em cima.",
      },
      {
        pergunta: "3/5 — Por que uma notícia deve citar suas fontes?",
        opcoes: [
          "Para deixar o texto mais bonito",
          "Para que o leitor possa checar se a informação é confiável",
          "Não é necessário citar fontes em notícias",
        ],
        correta: 1,
        feedbackAcerto: "📰 Exatamente! A fonte é o que torna a informação verificável.",
        feedbackErro: "Sem citar a fonte, ninguém pode confirmar se a informação é verdadeira.",
      },
      {
        pergunta: "4/5 — Na notícia da horta escolar, quem foi a fonte que confirmou a redução do desperdício?",
        opcoes: ["O aluno Lucas Andrade", "A diretora Marta Ferreira", "Um jornalista anônimo"],
        correta: 1,
        feedbackAcerto: "📰 Isso! A diretora Marta Ferreira foi citada como fonte da informação sobre os 40%.",
        feedbackErro: "Releia o segundo parágrafo da notícia sobre a horta: 'segundo a diretora...'.",
      },
      {
        pergunta: "5/5 — Uma mensagem que diz 'Dizem que...' sem citar ninguém deve ser tratada como:",
        opcoes: [
          "Uma notícia totalmente confiável",
          "Uma informação que precisa ser checada antes de ser espalhada",
          "Um exemplo perfeito de lide",
        ],
        correta: 1,
        feedbackAcerto: "📰 Isso! Você já sabe identificar quando uma informação exige checagem. Primeiro caso do arquivo resolvido! 🔍",
        feedbackErro: "Sem uma fonte identificável, a informação é apenas um boato — exige investigação antes de ser repassada.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caçando o lide em casa",
    materiais: ["Um jornal, site de notícias ou aplicativo de notícias no celular", "Papel e lápis"],
    passos: [
      "1) Escolham juntos uma notícia (impressa ou digital) de até três parágrafos.",
      "2) A criança lê o primeiro parágrafo (o lide) e tenta identificar: o quê, quem, quando, onde e por quê.",
      "3) Depois, procurem juntos se a notícia cita alguma fonte (pessoa entrevistada, órgão, documento).",
      "4) Conversem: essa notícia parece confiável? Por quê?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'O lide da notícia dizia ___ e a fonte citada foi ___.'",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
