import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 3 — Gêneros Digitais: O E-mail Técnico
 * BNCC: EF67LP01, EF67LP07
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-generos-digitais-email",
  titulo: "E-mail: A Comunicação Formal",
  iconeTrilha: "📧",
  bncc: ["EF67LP01", "EF67LP07"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Transmissão Oficial: O Protocolo E-mail",
    historia: "Analista, o Labirinto não é só troca de memes. Empresas e instituições usam o E-mail como canal de alta autoridade. Escrever 'eai blz' para um cliente é um erro de sistema fatal. O e-mail técnico tem uma etiqueta, um cabeçalho e um corpo organizado. Vamos hackear a estrutura do e-mail oficial.",
    imagemUrl: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Análise de Cabeçalho: Como identificar a fonte?",
    bloco: {
      titulo: "Interceptação de Mensagem",
      capaImagemUrl: "",
      pistas: [
        { nome: "Assunto: Deve ser claro e resumir o conteúdo.", imagemUrl: "" },
        { nome: "Destinatário: O endereço oficial de quem vai receber.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Estrutura do Protocolo",
        icone: "📧",
        linhas: [
          "  [ CABEÇALHO DO EMAIL ]",
          "  > De: analista@lab.br",
          "  > Para: diretor@lab.br",
          "  > Assunto: Relatório T1",
          "  ",
          "  [ CORPO ]",
          "  Prezado Diretor,",
          "  Segue relatório solicitado.",
          "  Atenciosamente, Analista."
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual a função do 'Assunto' no e-mail?",
      hipoteses: [
        { texto: "Resumir o tema para facilitar a busca" },
        { texto: "Ser apenas um espaço vazio" },
        { texto: "Dizer bom dia para quem recebe" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Precisão! O assunto é o 'título' que garante que o e-mail seja lido.",
      feedbackErro: "Pense na utilidade de achar a mensagem em uma caixa cheia de e-mails.",
      dica: "É o título do seu relatório.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário de Ativos",
    cards: [
      { palavra: "Assunto", explicacao: "É o título do e-mail. Deve ser direto e conter as informações principais.", exemplo: "Assunto: Solicitação de Acesso ao Lab", imagemUrl: "" },
      { palavra: "Formalidade", explicacao: "É o uso de palavras que demonstram respeito e seriedade, evitando gírias.", exemplo: "Usar 'Prezado' em vez de 'Eai'.", imagemUrl: "" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "Manual de Etiqueta Virtual",
      imagemUrl: "https://images.unsplash.com/photo-1596526132837-77085a666986?auto=format&fit=crop&q=80&w=400",
      destacar: ["formalidade", "concisão", "respeito"],
      paragrafos: [
        "O e-mail é uma ferramenta profissional essencial. Diferente de um chat de rede social, ele exige uma estrutura mínima que demonstra respeito pelo tempo do interlocutor.",
        "Um bom e-mail começa com uma saudação apropriada (como 'Prezado' ou 'Olá'), passa por uma exposição clara do que se deseja e termina com uma despedida formal.",
        "A concisão é o segredo: quanto menos palavras necessárias para expressar uma ideia clara, melhor será a recepção da sua mensagem."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Por que evitar gírias em e-mails profissionais?",
        opcoes: ["Porque demonstra falta de seriedade", "Porque é mais rápido", "Porque ninguém gosta de português"],
        correta: 0,
        feedbackAcerto: "Correto. Profissionalismo é fundamental.",
        feedbackErro: "Lembre-se que o e-mail é um canal oficial de trabalho.",
        ondeEstaNoTexto: "Diferente de um chat de rede social, ele exige uma estrutura mínima.",
        dica: "Pense no seu chefe ou cliente lendo.",
        reensino: "Gírias diminuem a formalidade exigida no ambiente de trabalho.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado nesta cena.",
    perguntas: [],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Estruturação: Montando o E-mail",
    bloco: {
      instrucao: "Ordene os blocos de um e-mail formal, do topo até o fim.",
      itens: [
        { id: "1", texto: "Saudação (Prezado...)", imagemUrl: "" },
        { id: "2", texto: "Assunto", imagemUrl: "" },
        { id: "3", texto: "Corpo do texto", imagemUrl: "" },
        { id: "4", texto: "Despedida e Nome", imagemUrl: "" }
      ],
      ordemCerta: ["2", "1", "3", "4"],
      feedbackAcerto: "Protocolo correto! O Assunto vem antes mesmo da Saudação.",
      feedbackErro: "Lembre-se que o e-mail precisa de um título (assunto) para existir no servidor.",
      dica: "O Assunto é o que aparece na notificação.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma.",
    leitura: {
      titulo: "Exemplo de E-mail de Solicitação",
      imagemUrl: "",
      destacar: ["prezado", "solicitação", "atenciosamente"],
      paragrafos: [
        "Assunto: Solicitação de Material de Laboratório.",
        "Prezado Responsável, gostaria de solicitar novos equipamentos para as aulas desta semana.",
        "Atenciosamente, Analista."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual a intenção desse e-mail?",
        opcoes: ["Solicitar materiais", "Reclamar do laboratório", "Dizer bom dia"],
        correta: 0,
        feedbackAcerto: "Exato! Solicitação clara e direta.",
        feedbackErro: "Leia o assunto e o corpo.",
        dica: "O assunto já diz tudo.",
        reensino: "A intenção de um e-mail sempre está presente no assunto."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "E-mail é um canal formal e profissional.",
      "Assunto, Saudação, Corpo e Despedida compõem o e-mail padrão.",
      "Evitar gírias é essencial para passar seriedade."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual destas saudações é a MAIS formal?",
        opcoes: ["Prezado Senhor, bom dia.", "Eai, blz?", "Fala aí, mano."],
        correta: 0,
        feedbackAcerto: "Excelente. Prezado é a saudação padrão de e-mails profissionais.",
        feedbackErro: "Lembre-se da formalidade exigida.",
        ondeEstaNoTexto: "Começa com uma saudação apropriada (como 'Prezado').",
        dica: "O mais educado ganha.",
        reensino: "Revise a etiqueta formal.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Simulação Corporativa",
    materiais: ["Smartphone"],
    passos: [
      "Escreva um e-mail de mentira para um familiar simulando um pedido de material escolar.",
      "Use as partes aprendidas: Assunto, Saudação, Corpo, Despedida.",
      "Envie (ou apenas escreva e mostre) para ver se eles entendem a formalidade."
    ],
    registro: "Mostre o e-mail escrito para alguém em casa.",
  },
  recompensa: {
    xp: 200,
    moedas: 80,
  },
};
