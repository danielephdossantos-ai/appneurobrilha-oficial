import type { AulaPortuguesV4 } from "../../types";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as carta } from "@/assets/neuro-treino/objetos/telefone-antigo.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";

/**
 * Aula 2 — Registro formal e informal
 * -------------------------------------------------------------
 * Unidade 3 · A Engrenagem da Frase (5º ano)
 * Foco: reconhecer quando usar linguagem formal (carta, e-mail à
 * escola, bilhete à diretora) e informal (conversa com amigos).
 * BNCC: EF05LP02, EF05LP04
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-registro-formal-e-informal",
  titulo: "Registro formal e informal",
  iconeTrilha: "🎩",
  bncc: ["EF05LP02", "EF05LP04"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A mesma engrenagem, dois modos diferentes",
    historia:
      "Brilha apareceu com dois aparelhos: um telefone antigo, todo elegante, e um celular cheio de figurinhas. — Repare: se eu ligo para a diretora da escola, falo de um jeito. Se eu mando mensagem para meu amigo, falo de outro jeito bem mais solto. As duas formas estão certas! O segredo é saber qual engrenagem usar em cada situação. Vamos descobrir?",
    imagemUrl: carta,
  },

  momento02_previsao: {
    instrucao: "Observe os dois aparelhos antes de começar.",
    bloco: {
      titulo: "Dois Jeitos de Falar",
      capaImagemUrl: carta,
      pistas: [
        { imagemUrl: carta, nome: "Um telefone antigo e elegante" },
        { imagemUrl: celular, nome: "Um celular cheio de figurinhas" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como escolher entre falar de modo formal ou informal, conforme a situação.", imagemUrl: carta },
        { texto: "Como consertar telefones antigos.", imagemUrl: carta },
        { texto: "Como configurar figurinhas no celular.", imagemUrl: celular },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender a escolher entre linguagem formal e informal.",
      feedbackErro: "Pense nos dois aparelhos: um mais elegante, outro mais solto. É sobre isso que vamos falar.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as duas engrenagens da fala antes de usá-las.",
    cards: [
      {
        palavra: "registro formal",
        explicacao: "Jeito de falar ou escrever mais cuidadoso, usado em situações sérias, com pessoas que não conhecemos bem ou em ambientes de trabalho e estudo.",
        exemplo: "'Prezada diretora, venho por meio deste solicitar...' é um trecho formal.",
        imagemUrl: professora,
      },
      {
        palavra: "registro informal",
        explicacao: "Jeito de falar ou escrever mais solto e descontraído, usado com amigos, família e em conversas do dia a dia.",
        exemplo: "'Oi, tudo bem? Bora jogar bola depois da aula?' é um trecho informal.",
        imagemUrl: celular,
      },
      {
        palavra: "interlocutor",
        explicacao: "É a pessoa com quem estamos conversando ou escrevendo. Escolher o registro certo depende de quem é o interlocutor.",
        exemplo: "Com a diretora, o interlocutor pede formalidade; com o amigo, pede informalidade.",
        imagemUrl: criancas,
      },
      {
        palavra: "adequação",
        explicacao: "É escolher a linguagem certa para cada situação de comunicação, sem misturar registros de forma errada.",
        exemplo: "Escrever um bilhete para a diretora do mesmo jeito que se fala com amigos é falta de adequação.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo os dois registros lado a lado",
    instrucao: "Ouça o Brilha comparando as duas formas de dizer a mesma coisa.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Bom dia, professora. Poderia me explicar essa questão, por favor?", explicacao: "Registro formal: educado, completo, usado com a professora." },
          { texto: "Oi, dá pra explicar essa aí de novo?", explicacao: "Registro informal: mais curto e solto, usado entre amigos." },
          { texto: "Prezados senhores, solicito informações sobre o evento.", explicacao: "Registro formal, típico de e-mails e cartas oficiais." },
          { texto: "E aí, galera, sabe que horas é a festa?", explicacao: "Registro informal, típico de conversas entre colegas." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha organizou no caderno da oficina as regras dos dois registros.",
    leitura: {
      titulo: "O Caderno dos Dois Jeitos de Falar",
      imagemUrl: pergaminho,
      legendaImagem: "Página sobre registro formal e informal",
      destacar: ["registro formal", "registro informal", "situação de comunicação", "interlocutor"],
      paragrafos: [
        "Toda vez que falamos ou escrevemos, escolhemos — muitas vezes sem perceber — um REGISTRO, isto é, um jeito de usar a língua. Esse jeito muda conforme a SITUAÇÃO DE COMUNICAÇÃO: quem fala, para quem fala, onde e por quê. Não existe um único jeito certo de falar português; existe o jeito adequado para cada momento.",
        "O REGISTRO FORMAL é usado em situações que pedem mais cuidado: uma carta para a diretora, um requerimento, uma entrevista de emprego, uma apresentação de trabalho na escola. Nele, evitamos gírias, usamos frases completas e um tom respeitoso, como em 'Solicito, por gentileza, uma nova data para a prova'.",
        "Já o REGISTRO INFORMAL é usado em situações mais descontraídas: uma conversa entre amigos, uma mensagem de celular para um colega, uma brincadeira em família. Nele, é comum usar gírias, abreviações e frases mais curtas, como em 'Bora marcar outro dia pra prova?'.",
        "Saber escolher entre os dois registros é uma habilidade importante: um bilhete para a diretora escrito todo em gírias pode parecer falta de respeito, e uma conversa com o melhor amigo cheia de formalidades pode soar estranha e distante. O bom comunicador é aquele que adapta a linguagem ao INTERLOCUTOR, ou seja, à pessoa com quem está falando.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no caderno se precisar.",
    perguntas: [
      {
        pergunta: "Do que depende a escolha do registro, segundo o texto?",
        opcoes: [
          "Da cor da roupa que a pessoa usa",
          "Da situação de comunicação: quem fala, para quem, onde e por quê",
          "Do tamanho da palavra",
          "Da hora do dia apenas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A escolha depende da situação de comunicação.",
        feedbackErro: "Releia: 'Esse jeito muda conforme a SITUAÇÃO DE COMUNICAÇÃO: quem fala, para quem fala, onde e por quê'.",
        ondeEstaNoTexto: "Esse jeito muda conforme a SITUAÇÃO DE COMUNICAÇÃO: quem fala, para quem fala, onde e por quê",
      },
      {
        pergunta: "Em que situações o registro formal costuma ser usado?",
        opcoes: [
          "Em brincadeiras com o melhor amigo",
          "Em cartas para a diretora, requerimentos e entrevistas",
          "Só em jogos de videogame",
          "Apenas em mensagens de celular",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O registro formal aparece em cartas, requerimentos e entrevistas.",
        feedbackErro: "Releia: 'usado em situações que pedem mais cuidado: uma carta para a diretora, um requerimento, uma entrevista de emprego'.",
        ondeEstaNoTexto: "usado em situações que pedem mais cuidado: uma carta para a diretora, um requerimento, uma entrevista de emprego",
      },
      {
        pergunta: "O que caracteriza o bom comunicador, segundo o último parágrafo?",
        opcoes: [
          "Falar sempre de modo formal",
          "Falar sempre com gírias",
          "Adaptar a linguagem ao interlocutor",
          "Nunca mudar o jeito de falar",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Exato! O bom comunicador adapta a linguagem à pessoa com quem fala.",
        feedbackErro: "Releia: 'O bom comunicador é aquele que adapta a linguagem ao INTERLOCUTOR'.",
        ondeEstaNoTexto: "O bom comunicador é aquele que adapta a linguagem ao INTERLOCUTOR",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "O que Brilha trouxe e o que representava cada objeto?",
    perguntas: [
      {
        pergunta: "Quais dois aparelhos Brilha trouxe na motivação?",
        opcoes: [
          "Um telefone antigo e um celular",
          "Uma bicicleta e um patinete",
          "Um rádio e uma televisão",
          "Um livro e uma caneta",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Foram um telefone antigo, elegante, e um celular cheio de figurinhas.",
        feedbackErro: "Releia a motivação: os dois aparelhos foram o telefone antigo e o celular.",
      },
      {
        pergunta: "Onde as regras dos dois registros foram anotadas?",
        opcoes: [
          "No caderno da oficina",
          "Numa placa de trânsito",
          "Numa embalagem de doce",
          "Num guardanapo de festa",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ficou registrado no Caderno dos Dois Jeitos de Falar.",
        feedbackErro: "Releia o título: 'O Caderno dos Dois Jeitos de Falar'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para escolher o registro certo em um texto.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Pense para quem você vai escrever ou falar (o interlocutor).", imagemUrl: criancas },
        { id: "p2", texto: "Pense em qual é a situação: é séria ou descontraída?", imagemUrl: professora },
        { id: "p3", texto: "Escolha entre registro formal ou informal.", imagemUrl: carta },
        { id: "p4", texto: "Escreva ou fale mantendo esse registro do início ao fim.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho para escolher o registro certo.",
      feedbackErro: "Pense: primeiro se pensa no interlocutor, depois na situação, depois se escolhe o registro.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do caderno e responda.",
    leitura: {
      titulo: "Dois Bilhetes na Mesma Semana",
      imagemUrl: livro,
      destacar: ["Prezada diretora", "E aí, mano"],
      paragrafos: [
        "No primeiro bilhete, escrito para a diretora, a turma começou assim: 'Prezada diretora, gostaríamos de solicitar autorização para realizar um passeio à biblioteca municipal.' Esse é um exemplo claro de registro formal, com tratamento respeitoso e frases completas.",
        "No segundo bilhete, escrito para um colega da turma, um aluno escreveu: 'E aí, mano, bora se encontrar depois da aula pra estudar?' Esse é um exemplo de registro informal, com gíria e frase mais curta, adequado para a conversa entre amigos.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que o bilhete para a diretora é considerado formal?",
        opcoes: [
          "Porque é mais curto",
          "Porque tem tratamento respeitoso e frases completas",
          "Porque usa muitas gírias",
          "Porque foi escrito a lápis",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O tratamento respeitoso e as frases completas indicam o registro formal.",
        feedbackErro: "Releia: 'Esse é um exemplo claro de registro formal, com tratamento respeitoso e frases completas.'",
        ondeEstaNoTexto: "Esse é um exemplo claro de registro formal, com tratamento respeitoso e frases completas.",
      },
      {
        pergunta: "O que torna o segundo bilhete informal?",
        opcoes: [
          "O uso de gíria e frase mais curta",
          "O uso de palavras difíceis",
          "O fato de ser mais longo que o primeiro",
          "O fato de ser dirigido à diretora",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! A gíria 'mano' e a frase curta mostram o registro informal.",
        feedbackErro: "Releia: 'Esse é um exemplo de registro informal, com gíria e frase mais curta'.",
        ondeEstaNoTexto: "Esse é um exemplo de registro informal, com gíria e frase mais curta",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Escolha o registro certo",
    instrucao: "Selecione apenas as frases escritas em registro formal.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "O Detector de Formalidade",
      bloco: {
        instrucao: "Marque somente as frases formais, adequadas para a diretora ou um documento.",
        pergunta: "Quais frases estão em registro FORMAL?",
        opcoes: [
          { id: "o1", texto: "Prezada senhora, solicito sua atenção para o assunto a seguir.", correto: true },
          { id: "o2", texto: "Oi, tudo certo? Depois a gente se fala.", correto: false },
          { id: "o3", texto: "Venho, por meio deste bilhete, agradecer sua atenção.", correto: true },
          { id: "o4", texto: "Fala, mano, cola aqui depois!", correto: false },
        ],
        feedbackAcerto: "🎉 Muito bem! Você reconheceu o tom respeitoso e as frases completas do registro formal.",
        feedbackErro: "Procure as frases com tratamento respeitoso e sem gírias — essas são as formais.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Registro formal: linguagem cuidadosa, sem gírias, usada em situações sérias (escola, documentos, entrevistas).",
      "Registro informal: linguagem solta, com gírias, usada com amigos e família.",
      "A escolha do registro depende do interlocutor e da situação de comunicação.",
    ],
    miniDesafio: {
      pergunta: "Qual frase é a mais adequada para um bilhete formal à diretora?",
      opcoes: [
        "Fala, dona diretora, beleza?",
        "Prezada diretora, venho solicitar sua orientação sobre o evento.",
        "E aí, cola comigo depois da prova?",
        "Oi, sextou! Bora comemorar?",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! A frase respeitosa e completa é a adequada para a diretora.",
      feedbackErro: "Pense em qual frase mostra respeito e cuidado — essa é a formal.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O registro formal é usado principalmente em...",
        opcoes: ["Brincadeiras com amigos", "Situações que pedem mais cuidado, como cartas e entrevistas", "Mensagens de figurinhas", "Apelidos entre colegas"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Formal é para situações mais sérias.",
        feedbackErro: "Lembre: registro formal combina com situações que pedem cuidado.",
      },
      {
        pergunta: "2/5 — O registro informal costuma aparecer em...",
        opcoes: ["Requerimentos escolares", "Conversas com amigos e familiares", "Cartas para autoridades", "Entrevistas de emprego"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Informal é o registro do dia a dia com pessoas próximas.",
        feedbackErro: "Pense em quem você trata com mais informalidade: os amigos e a família.",
      },
      {
        pergunta: "3/5 — Qual frase está em registro informal?",
        opcoes: ["Prezado senhor, aguardo retorno.", "Solicito autorização para o evento.", "E aí, beleza? Bora estudar depois?", "Venho por meio desta comunicar o ocorrido."],
        correta: 2,
        feedbackAcerto: "🎉 Isso! 'E aí, beleza?' é uma expressão informal, típica de conversa entre amigos.",
        feedbackErro: "Procure a frase mais solta, com gíria — essa é a informal.",
      },
      {
        pergunta: "4/5 — A pessoa com quem falamos ou escrevemos é chamada de...",
        opcoes: ["Interlocutor", "Substantivo", "Advérbio", "Sinônimo"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Interlocutor é quem recebe nossa fala ou escrita.",
        feedbackErro: "Releia o vocabulário: a pessoa com quem falamos é o interlocutor.",
      },
      {
        pergunta: "5/5 — Por que é importante saber escolher entre formal e informal?",
        opcoes: [
          "Porque só existe um jeito certo de falar",
          "Para adaptar a linguagem à situação e ao interlocutor",
          "Porque gírias são sempre proibidas",
          "Porque o registro formal é o único correto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Aula concluída! Saber adaptar a linguagem é essencial para se comunicar bem.",
        feedbackErro: "Releia a conclusão: o importante é adaptar a linguagem a cada situação.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Dois bilhetes, dois registros",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolham uma situação formal (ex.: um bilhete para a escola pedindo algo) e uma situação informal (ex.: um recado para um amigo).",
      "2) Escrevam um pequeno texto de 2 a 4 frases para a situação formal, com linguagem cuidadosa e sem gírias.",
      "3) Escrevam outro texto de 2 a 4 frases para a situação informal, podendo usar gírias e um tom mais solto.",
      "4) Comparem os dois textos e conversem sobre as diferenças de linguagem entre eles.",
    ],
    registro: "📝 Uma foto dos dois bilhetes escritos, ou um áudio lendo os dois em voz alta.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
