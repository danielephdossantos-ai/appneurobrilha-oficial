import type { AulaPortuguesV4 } from "../../types";

/** Aula 35 — Período Composto por Coordenação — EF07LP11 */
export const aula35: AulaPortuguesV4 = {
  slug: "aula-35-periodo-coordenacao",
  titulo: "Período Composto por Coordenação",
  iconeTrilha: "🔀",
  bncc: ["EF07LP11"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Circuitos em Paralelo",
    historia: "Analista, existem orações que funcionam lado a lado, com a mesma importância, como circuitos em paralelo. Quando duas ou mais orações independentes se unem, formam um período composto por coordenação. Hoje você vai aprender a montar e reconhecer essas conexões, cada uma com seu tipo de relação.",
    imagemUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Orações Independentes e Unidas.",
    bloco: {
      titulo: "Painel da Coordenação",
      capaImagemUrl: "",
      pistas: [
        { nome: "As orações coordenadas têm sentido completo sozinhas.", imagemUrl: "" },
        { nome: "Elas se unem por conjunções coordenativas ou apenas por vírgula.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Circuitos Paralelos",
        icone: "🔀",
        linhas: [
          "  [ PERÍODO COMPOSTO ]       ",
          "                             ",
          "  A luz acendeu E o robô     ",
          "  começou a andar.           ",
          "                             ",
          "  Cada oração tem sentido    ",
          "  completo por si só.        ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que caracteriza uma oração coordenada?",
      hipoteses: [
        { texto: "Ter sentido completo e independente das outras orações" },
        { texto: "Depender totalmente de outra oração para existir" },
        { texto: "Não poder ser separada da oração principal" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Orações coordenadas são independentes entre si.",
      feedbackErro: "Releia o painel: cada oração poderia ficar sozinha e ainda fazer sentido.",
      dica: "Separe as duas orações do exemplo e veja se cada uma sozinha faz sentido.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Tipos de Coordenação.",
    cards: [
      { palavra: "Oração Coordenada Aditiva", explicacao: "Soma uma ideia à outra, ligada por 'e', 'nem'.", exemplo: "A sonda pousou e enviou os dados.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Oração Coordenada Adversativa", explicacao: "Contrasta uma ideia com a outra, ligada por 'mas', 'porém'.", exemplo: "Tentamos o contato, mas ninguém respondeu.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Oração Coordenada Conclusiva", explicacao: "Indica conclusão do que foi dito antes, ligada por 'logo', 'portanto'.", exemplo: "O sinal sumiu, logo a missão foi encerrada.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Circuitos Paralelos",
    instrucao: "Observe como cada oração mantém sentido completo, mesmo unida a outra.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O robô ligou E começou a caminhar.", explicacao: "💡 ADITIVA: as duas ações somam-se, uma após a outra.\n> Ex: 'Ele estudou e passou.' e 'Choveu e a rua alagou.'" },
          { texto: "Chamamos o suporte, MAS ninguém atendeu.", explicacao: "💡 ADVERSATIVA: a segunda oração contrasta com a expectativa da primeira.\n> Ex: 'Corri, mas perdi o ônibus.' e 'É pequeno, mas é forte.'" },
          { texto: "O sinal parou, LOGO o sistema falhou.", explicacao: "💡 CONCLUSIVA: a segunda oração é uma conclusão lógica da primeira.\n> Ex: 'Estudei muito, logo fui bem.' e 'Choveu, logo o chão molhou.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Dia da Falha no Painel",
      imagemUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400",
      destacar: ["e", "mas", "logo"],
      paragrafos: [
        "O painel de controle apresentou uma falha e todos os alarmes dispararam ao mesmo tempo. A equipe correu para a sala de comando.",
        "Tentamos reiniciar o sistema, mas a energia principal já havia sido cortada. Isso complicou ainda mais a situação no Observatório.",
        "Sem energia, os sensores pararam de funcionar, logo a equipe precisou usar equipamentos manuais para continuar o monitoramento.",
        "No fim, a energia voltou e o sistema foi restaurado por completo, e todos respiraram aliviados com o fim da crise.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "O que aconteceu logo depois da falha no painel, segundo o texto?",
        opcoes: ["Todos os alarmes dispararam", "A energia voltou imediatamente", "Os sensores continuaram normais", "A missão foi cancelada"],
        correta: 0,
        feedbackAcerto: "Correto! O texto liga as duas orações com 'e'.",
        feedbackErro: "Releia o primeiro parágrafo do texto.",
        ondeEstaNoTexto: "apresentou uma falha e todos os alarmes dispararam",
        dica: "Observe a conjunção 'e' e o que ela liga.",
        reensino: "Revise o card de Oração Coordenada Aditiva.",
      },
      {
        pergunta: "Qual conjunção do texto indica uma conclusão sobre a falta de sensores?",
        opcoes: ["Logo", "E", "Mas", "Sem"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, 'logo' indica a consequência lógica.",
        feedbackErro: "Observe o início do terceiro parágrafo.",
        ondeEstaNoTexto: "Sem energia, os sensores pararam de funcionar, logo a equipe precisou",
        dica: "Busque a palavra que fecha uma linha de raciocínio.",
        reensino: "Revise o card de Oração Coordenada Conclusiva.",
      },
    ],
  },
  momento06_personagensCenario: { instrucao: "Nenhum agente detectado.", perguntas: [] },
  momento_escrita: {
    titulo: "Console de Coordenação",
    instrucao: "Construa períodos compostos por coordenação.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Duas Ideias, Um Período",
        comando: "Escreva três períodos compostos por coordenação sobre um dia de aula, usando uma conjunção aditiva, uma adversativa e uma conclusiva.",
        modelo: ["Cheguei cedo e sentei na primeira fileira.", "Estudei bastante, mas a prova foi difícil.", "Terminei a prova antes do sinal, logo saí mais cedo."],
        checklist: ["Usei uma conjunção aditiva?", "Usei uma conjunção adversativa?", "Usei uma conjunção conclusiva?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Montagem: Construindo o Período Composto.",
    bloco: {
      instrucao: "Organize o processo de criação de um período composto por coordenação.",
      itens: [
        { id: "1", texto: "1️⃣ ORAÇÃO A: escrever a primeira ideia completa ('a sonda pousou').", imagemUrl: "" },
        { id: "2", texto: "🔗 CONJUNÇÃO: escolher o conector adequado ('e', 'mas', 'logo').", imagemUrl: "" },
        { id: "3", texto: "2️⃣ ORAÇÃO B: escrever a segunda ideia, também completa ('enviou os dados').", imagemUrl: "" },
        { id: "4", texto: "✅ REVISÃO: conferir se as duas orações fazem sentido mesmo separadas.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Circuito paralelo montado! Suas orações são independentes e conectadas.",
      feedbackErro: "É preciso ter as duas orações prontas antes de revisar o sentido geral.",
      dica: "Pense em duas frases curtas e depois escolha o conector entre elas.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Diário de Bordo.",
    leitura: {
      titulo: "Diário: Terceiro Dia da Missão",
      imagemUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=400",
      destacar: ["e", "porém"],
      paragrafos: [
        "Hoje testamos os novos sensores e os resultados foram muito positivos. A equipe está animada com o progresso da missão.",
        "Porém, ainda precisamos calibrar o sistema de comunicação antes do lançamento final previsto para a próxima semana.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual conjunção do texto indica uma oposição em relação à animação da equipe?",
        opcoes: ["Porém", "E", "Hoje", "Ainda"],
        correta: 0,
        feedbackAcerto: "Correto, 'porém' contrasta com a boa notícia anterior.",
        feedbackErro: "Releia o início do segundo parágrafo.",
        dica: "Procure a conjunção parecida com 'mas'.",
        reensino: "Revise o card de Oração Coordenada Adversativa.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Orações coordenadas têm sentido completo, independente umas das outras.",
      "Elas se ligam por conjunções aditivas, adversativas, conclusivas, entre outras.",
      "O período composto por coordenação une orações de mesma importância.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que caracteriza uma oração coordenada?",
        opcoes: ["Ter sentido completo e ser independente", "Precisar sempre de outra oração para existir", "Nunca poder ser separada", "Não ter verbo"],
        correta: 0,
        feedbackAcerto: "Correto, essa é a característica central.",
        feedbackErro: "Revise o painel de circuitos paralelos.",
        ondeEstaNoTexto: "Cada oração tem sentido completo por si só.",
        dica: "Pense se cada oração faria sentido sozinha.",
        reensino: "Volte ao momento 02.",
      },
      {
        pergunta: "Em 'chamamos o suporte, mas ninguém atendeu', a relação é:",
        opcoes: ["Adversativa", "Aditiva", "Conclusiva", "Explicativa"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, há um contraste entre as duas orações.",
        feedbackErro: "Releia o card de Oração Coordenada Adversativa.",
        ondeEstaNoTexto: "Chamamos o suporte, MAS ninguém atendeu.",
        dica: "Pense se a segunda ideia contraria a expectativa da primeira.",
        reensino: "Revise o Laboratório de Circuitos Paralelos.",
      },
      {
        pergunta: "Qual conjunção costuma indicar conclusão em um período composto?",
        opcoes: ["Logo", "E", "Mas", "Nem"],
        correta: 0,
        feedbackAcerto: "Correto, 'logo' é uma conjunção conclusiva.",
        feedbackErro: "Releia o card de Oração Coordenada Conclusiva.",
        ondeEstaNoTexto: "O sinal sumiu, logo a missão foi encerrada.",
        dica: "Pense na palavra que fecha um raciocínio.",
        reensino: "Revise o momento 03 de vocabulário.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Circuito Paralelo",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Conte para um familiar dois fatos do seu dia que possam ser ligados por 'e', 'mas' ou 'logo'.",
      "Junte os dois fatos em um único período composto por coordenação.",
      "Peça para a pessoa identificar a conjunção usada.",
      "Registre a frase final no caderno.",
    ],
    registro: "Escreva no caderno: 'Missão Circuito Paralelo - meu período foi: [frase completa]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
