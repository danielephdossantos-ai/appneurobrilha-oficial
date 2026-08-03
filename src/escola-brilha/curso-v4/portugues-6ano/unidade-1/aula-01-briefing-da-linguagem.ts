import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 1 — Briefing da Linguagem: O Labirinto
 * -------------------------------------------------------------
 * Introdução à Unidade 1 ("O Labirinto da Linguagem") do 6º ano.
 * A missão define o conceito de linguagem como sistema de dados
 * complexo.
 *
 * BNCC: EF67LP01, EF67LP02
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-briefing-da-linguagem",
  titulo: "Briefing da Linguagem",
  iconeTrilha: "📡",
  bncc: ["EF67LP01", "EF67LP02"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Conexão Estabelecida: O Protocodificador",
    historia: "Analista, o Labirinto da Linguagem está ativo. Esqueça o 'falar por falar'. Aqui, a língua é um sistema de alta precisão. Se você não entende as peças, você não domina a mensagem. Hoje, vamos aprender que cada texto tem uma ARQUITETURA. Você não vai apenas ler; você vai entender como cada peça foi encaixada para que a informação chegue ao destino sem erros. Preparado para o primeiro briefing?",
    imagemUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing Inicial: Como o sistema se organiza?",
    bloco: {
      titulo: "Interceptação e Análise",
      capaImagemUrl: "",
      pistas: [
        { nome: "Todo sistema de comunicação possui um objetivo central.", imagemUrl: "" },
        { nome: "A linguagem organiza informações para que elas não sejam apenas ruído.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Análise de Sistema",
        icone: "📡",
        linhas: [
          "  [ ARQUITETURA DA MENSAGEM ]",
          "                             ",
          "  1. ENTRADA (Pensamento)    ",
          "     > Ex: 'Quero pedir pizza' ",
          "          ↓                  ",
          "  2. CÓDIGO (Língua/Signo)   ",
          "     > Ex: Português (Palavras)",
          "          ↓                  ",
          "  3. MODELO (Texto/Gênero)   ",
          "     > Ex: Bilhete ou WhatsApp ",
          "          ↓                  ",
          "  4. ALVO (Receptor/Leitor)  ",
          "     > Ex: O pizzaiolo lê tudo "
        ],
        estilo: "cartaz",
      },
      pergunta: "Baseado no briefing acima, qual é a função principal deste sistema?",
      hipoteses: [
        { texto: "Organizar e transmitir informações" },
        { texto: "Gerar códigos aleatórios" },
        { texto: "Apenas decorar a tela" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Excelente, Analista. Você captou a lógica: sem organização, não há comunicação.",
      feedbackErro: "Analise o 'OBJETIVO' no briefing acima.",
      dica: "Um sistema serve para colocar ordem no caos.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário de Ativos: Termos técnicos da sua operação de analista.",
    cards: [
      { palavra: "Sistema", explicacao: "É um conjunto de peças que trabalham juntas. Na língua, as palavras são as peças e as regras são o manual de montagem.", exemplo: "A língua é um sistema que organiza o pensamento para que o outro entenda.", imagemUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Código", explicacao: "É o conjunto de sinais que usamos. Se eu falo 'Oi' e você entende, estamos usando o mesmo código: o Português.", exemplo: "O português é o código que usamos para decifrar este labirinto.", imagemUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de arquivo.",
    leitura: {
      titulo: "O Sistema em Expansão",
      imagemUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400",
      destacar: ["sistema", "código", "decodificar", "mídias"],
      paragrafos: [
        "A linguagem é um sistema vivo e dinâmico. Ela não é apenas uma lista de palavras, mas uma estrutura que permite que dois humanos compartilhem mundos inteiros usando um código comum.",
        "Ela se adapta às novas mídias: do jornal impresso ao post de rede social, do bilhete manual ao e-mail corporativo. Cada meio exige um modelo de construção específico.",
        "Decodificar esses modelos é a nossa função primordial. Entender como um texto é 'montado' nos permite não apenas ler, mas dominar a comunicação."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de dados.",
    perguntas: [
      {
        pergunta: "Qual é a função da linguagem segundo o arquivo?",
        opcoes: ["Codificar e transmitir informação", "Gerar apenas erro", "Travar o sistema"],
        correta: 0,
        feedbackAcerto: "Correto.",
        feedbackErro: "Releia o arquivo.",
        ondeEstaNoTexto: "A linguagem é um sistema vivo.",
        dica: "A linguagem organiza.",
        reensino: "Analise o objetivo principal.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado nesta cena.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Pontuação: Modelos de Fluxo",
    instrucao: "Analise como a pontuação altera o modelo da mensagem e veja os exemplos práticos abaixo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O Labirinto está ativo.",
            explicacao: "💡 MODELO A (PONTO FINAL): Usado para afirmar algo ou encerrar um dado. Ele avisa ao leitor: 'A informação acabou aqui'.\n> Ex: 'O sistema carregou.' e 'Ninguém entrou.'"
          },
          {
            texto: "Quem é o Analista?",
            explicacao: "💡 MODELO B (INTERROGAÇÃO): Usado para buscar dados ou fazer perguntas. Ele sinaliza uma dúvida que precisa de resposta.\n> Ex: 'Qual o código?' e 'Onde você está?'"
          },
          {
            texto: "Acesso negado!",
            explicacao: "💡 MODELO C (EXCLAMAÇÃO): Usado para alertas críticos, ordens ou emoção. Ele aumenta o 'volume' da mensagem.\n> Ex: 'Pare agora!' e 'Incrível!'"
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Terminal de Produção",
    instrucao: "Produza uma comunicação técnica estruturada seguindo o modelo.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relatório de Incidente",
        comando: "Escreva um log técnico informando que o sistema de segurança do labirinto foi decodificado por você.",
        modelo: [
          "LOG ID: 999",
          "STATUS: SUCESSO",
          "MENSAGEM: O labirinto foi aberto."
        ],
        checklist: [
          "Usei letra maiúscula no início?",
          "Usei um identificador (LOG ID)?",
          "A mensagem está clara e direta?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Estruturação: A Arquitetura do Sentido",
    bloco: {
      instrucao: "Organize as etapas para construir uma mensagem que realmente funcione, do pensamento à recepção.",
      itens: [
        { id: "1", texto: "🧠 INTENÇÃO: O que eu quero que o outro sinta ou faça? (Objetivo)", imagemUrl: "" },
        { id: "2", texto: "📚 ESCOLHA DO CÓDIGO: Vou usar palavras, gestos ou imagens? (Língua)", imagemUrl: "" },
        { id: "3", texto: "📑 DEFINIÇÃO DO MODELO: Qual o melhor formato? (Gênero: Notícia, Bilhete, Log?)", imagemUrl: "" },
        { id: "4", texto: "📡 TRANSMISSÃO: Enviar a mensagem para o alvo certo. (Comunicação)", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Arquitetura aprovada! Você entende que falar é planejar uma estrutura para ser compreendido.",
      feedbackErro: "A estrutura falhou. Lembre-se: primeiro a intenção, depois as ferramentas, por fim o envio.",
      dica: "Sem um objetivo claro (Intenção), o código e o modelo não fazem sentido.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: O Modelo da Notícia.",
    leitura: {
      titulo: "Notícia: Novas Tecnologias na Educação",
      imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
      destacar: ["liderança", "estudantes", "plataforma"],
      paragrafos: [
        "A nova plataforma educacional Brilha foi lançada nesta segunda-feira. O sistema promete revolucionar como adolescentes aprendem linguagens.",
        "Segundo a liderança do projeto, o foco é o ensino real através de modelos visuais e práticos, simulando situações do cotidiano como notícias e logs técnicos.",
        "Estudantes de todo o país já começaram a decodificar os primeiros módulos com sucesso."
      ],
    },
    perguntas: [
      {
        pergunta: "Este texto segue o modelo de qual gênero textual?",
        opcoes: ["Notícia", "Bilhete", "Poema"],
        correta: 0,
        feedbackAcerto: "Exato. A notícia tem um modelo específico: manchete, fatos e declarações.",
        feedbackErro: "Observe o tom informativo e a estrutura de relato de fatos.",
        dica: "Textos informativos com datas e locais geralmente são notícias.",
        reensino: "Compare a estrutura da notícia com o bilhete que vimos no laboratório."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Linguagem como sistema estruturado e não apenas ruído.",
      "Adaptação da linguagem a diferentes mídias e suportes.",
      "A importância de seguir modelos (jornal, bilhete, log) para garantir a eficácia do código."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que define a linguagem?",
        opcoes: ["Um sistema complexo de transmissão", "Apenas ruído", "Um erro"],
        correta: 0,
        feedbackAcerto: "Análise correta.",
        feedbackErro: "Releia os logs.",
        ondeEstaNoTexto: "A linguagem é um sistema vivo.",
        dica: "A linguagem é organizada.",
        reensino: "Revise os conceitos de sistema.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Codificando a Realidade",
    materiais: ["Papel", "Caneta", "Smartphone (opcional)"],
    passos: [
      "Encontre um exemplo de linguagem formal (ex: rótulo de remédio, notícia) e um informal (ex: mensagem de WhatsApp).",
      "Mostre para sua família como a estrutura muda entre eles.",
      "Crie seu próprio 'Log de Missão' descrevendo o dia de hoje usando o modelo técnico que aprendemos."
    ],
    registro: "Tire uma foto do seu Log de Missão estruturado.",
  },
  recompensa: {
    xp: 100,
    moedas: 50,
  },
};
