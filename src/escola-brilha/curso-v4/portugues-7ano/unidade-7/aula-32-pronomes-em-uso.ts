import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 32 — Pronomes em Uso: A Ponte da Coesão
 * -------------------------------------------------------------
 * BNCC: EF07LP12
 */
export const aula32: AulaPortuguesV4 = {
  slug: "aula-32-pronomes-em-uso",
  titulo: "Pronomes em Uso",
  iconeTrilha: "🔗",
  bncc: ["EF07LP12"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "As Pontes Invisíveis do Texto",
    historia: "Analista, repetir o mesmo nome a cada frase deixa qualquer relatório pesado e cansativo de ler. Por isso, o Observatório usa pronomes: palavras que substituem nomes já citados e criam pontes invisíveis entre as frases. Hoje você vai aprender a usar essas pontes para dar fluidez ao texto sem perder a clareza sobre quem ou o que está sendo mencionado.",
    imagemUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Substituição sem Perda de Sentido.",
    bloco: {
      titulo: "Pontes de Coesão",
      capaImagemUrl: "",
      pistas: [
        { nome: "Pronomes substituem substantivos já mencionados.", imagemUrl: "" },
        { nome: "Usar pronomes evita repetição e conecta as ideias do texto.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Substituição",
        icone: "🔗",
        linhas: [
          "  [ COESÃO POR PRONOME ]     ",
          "                             ",
          "  A sonda pousou. ELA enviou ",
          "  dados. SEUS sensores       ",
          "  funcionaram bem.           ",
          "                             ",
          "  ELA e SEUS retomam         ",
          "  'a sonda' sem repeti-la.   ",
        ],
        estilo: "cartaz",
      },
      pergunta: "Qual é a principal função dos pronomes em um texto?",
      hipoteses: [
        { texto: "Substituir nomes já citados e evitar repetição" },
        { texto: "Criar novos substantivos no texto" },
        { texto: "Indicar apenas o tempo dos verbos" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Pronomes retomam informações sem repetir a mesma palavra.",
      feedbackErro: "Releia o painel: observe o que 'ELA' está substituindo.",
      dica: "Pense no que aconteceria se toda frase repetisse 'a sonda'.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Tipos de Pronome.",
    cards: [
      { palavra: "Pronome Pessoal", explicacao: "Substitui o nome de quem fala, com quem se fala ou de quem se fala (eu, ele, nós).", exemplo: "A analista chegou. Ela trouxe os relatórios.", imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Pronome Possessivo", explicacao: "Indica posse em relação a alguém (meu, seu, nosso).", exemplo: "O robô perdeu seu sinal de rastreio.", imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Pronome Demonstrativo", explicacao: "Indica a posição de algo em relação ao tempo ou espaço (este, esse, aquele).", exemplo: "Aquela estrela já foi catalogada.", imagemUrl: "https://images.unsplash.com/photo-1554224155-1696413575a8?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Retomada Textual",
    instrucao: "Observe como os pronomes retomam substantivos anteriores sem repeti-los.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "O analista chegou à base. ELE trouxe os dados.", explicacao: "💡 PRONOME PESSOAL: 'ele' retoma 'o analista' sem repeti-lo.\n> Ex: 'A robô parou. Ela precisava de reparo.' e 'O sinal chegou. Ele veio de longe.'" },
          { texto: "A base é antiga. SEUS sistemas ainda funcionam.", explicacao: "💡 PRONOME POSSESSIVO: 'seus' indica que os sistemas pertencem à base.\n> Ex: 'A nave perdeu seu curso.' e 'O time trocou seus planos.'" },
          { texto: "Vimos duas estrelas. ESTA é nova; AQUELA já era conhecida.", explicacao: "💡 PRONOME DEMONSTRATIVO: 'esta' e 'aquela' organizam a posição das estrelas no texto.\n> Ex: 'Há dois caminhos: este é seguro, aquele é arriscado.'" },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "O Relatório da Analista Vitória",
      imagemUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=400",
      destacar: ["ela", "seus", "aquele"],
      paragrafos: [
        "A analista Vitória assumiu o turno noturno no Observatório. Ela revisou todos os sinais captados durante o dia e organizou seus dados em ordem de prioridade.",
        "Entre os sinais, um chamou sua atenção. Aquele sinal vinha de uma região nunca mapeada antes, e isso a deixou em alerta.",
        "Vitória então acionou o protocolo de resposta. Ela não queria perder aquela oportunidade de registrar algo inédito para o arquivo do Observatório.",
        "No fim do turno, ela escreveu um relatório completo, usando pronomes para conectar cada parágrafo sem repetir seu próprio nome a cada linha.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "No texto, a quem o pronome 'ela' se refere na maior parte das vezes?",
        opcoes: ["À analista Vitória", "Ao sinal captado", "Ao Observatório", "Ao protocolo de resposta"],
        correta: 0,
        feedbackAcerto: "Correto! 'Ela' retoma o nome 'Vitória' ao longo do texto.",
        feedbackErro: "Releia o primeiro parágrafo e observe o sujeito da ação.",
        ondeEstaNoTexto: "Ela revisou todos os sinais captados",
        dica: "Observe quem pratica as ações descritas.",
        reensino: "Revise o card de Pronome Pessoal no vocabulário.",
      },
      {
        pergunta: "O pronome 'aquele' no segundo parágrafo retoma qual palavra?",
        opcoes: ["Sinal", "Região", "Turno", "Relatório"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, 'aquele sinal' retoma o substantivo 'sinal'.",
        feedbackErro: "Observe a palavra logo depois de 'aquele' no texto.",
        ondeEstaNoTexto: "Aquele sinal vinha de uma região nunca mapeada",
        dica: "O pronome demonstrativo aparece bem próximo do substantivo que acompanha.",
        reensino: "Reveja o painel de pronomes demonstrativos.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Personagem em análise: Vitória, a Analista Noturna.",
    perguntas: [
      {
        pergunta: "Qual atitude de Vitória mostra seu cuidado profissional no texto?",
        opcoes: ["Organizar os dados por prioridade e escrever um relatório completo", "Ignorar o sinal desconhecido", "Deixar o turno sem revisar nada", "Repetir seu nome em cada frase"],
        correta: 0,
        feedbackAcerto: "Exato, essas ações mostram organização e responsabilidade.",
        feedbackErro: "Releia o primeiro e o último parágrafo.",
        ondeEstaNoTexto: "organizou seus dados em ordem de prioridade",
        dica: "Pense nas ações que exigem atenção e método.",
        reensino: "Revise a leitura guiada completa.",
      },
    ],
  },
  momento_escrita: {
    titulo: "Console de Coesão",
    instrucao: "Reescreva um trecho substituindo repetições por pronomes.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Corrija a Repetição",
        comando: "Escreva um pequeno parágrafo sobre um colega de turma, usando o nome dele apenas uma vez e substituindo as demais repetições por pronomes.",
        modelo: ["Errado: Marcos chegou. Marcos abriu o caderno. Marcos começou a escrever.", "Certo: Marcos chegou. Ele abriu o caderno. Em seguida, começou a escrever."],
        checklist: ["Usei o nome apenas na primeira vez?", "Usei ao menos dois pronomes diferentes?", "O texto ficou compreensível?"],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Substituição: Do Nome ao Pronome.",
    bloco: {
      instrucao: "Organize o processo de retomada de um substantivo por pronome, do início ao fim.",
      itens: [
        { id: "1", texto: "📛 NOMEAR: apresentar o substantivo pela primeira vez ('a analista').", imagemUrl: "" },
        { id: "2", texto: "🔁 IDENTIFICAR REPETIÇÃO: notar que o mesmo nome vai aparecer de novo.", imagemUrl: "" },
        { id: "3", texto: "🔗 SUBSTITUIR: trocar a repetição por um pronome adequado ('ela').", imagemUrl: "" },
        { id: "4", texto: "✅ CONFERIR SENTIDO: garantir que o pronome não deixou dúvida sobre a quem se refere.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Perfeito! Você domina a lógica da substituição pronominal.",
      feedbackErro: "É preciso nomear antes de poder substituir por um pronome.",
      dica: "Um pronome só faz sentido se o nome já foi apresentado antes.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Mensagem da Base 12.",
    leitura: {
      titulo: "Mensagem: Contato com a Base 12",
      imagemUrl: "https://images.unsplash.com/photo-1541873676-a18131494184?auto=format&fit=crop&q=80&w=400",
      destacar: ["eles", "nosso", "esse"],
      paragrafos: [
        "A equipe da Base 12 enviou uma mensagem urgente. Eles relataram uma falha no gerador principal.",
        "Segundo o relatório, nosso sistema de backup ainda funciona, mas esse problema precisa de reparo rápido antes que afete outras bases da rede.",
      ],
    },
    perguntas: [
      {
        pergunta: "A quem o pronome 'eles' se refere no texto?",
        opcoes: ["À equipe da Base 12", "Ao gerador principal", "Ao sistema de backup", "À rede de bases"],
        correta: 0,
        feedbackAcerto: "Correto, 'eles' retoma 'a equipe da Base 12'.",
        feedbackErro: "Releia a primeira frase da mensagem.",
        dica: "Observe quem envia a mensagem no texto.",
        reensino: "Revise o painel de retomada textual.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Pronomes substituem substantivos já mencionados no texto.",
      "Existem pronomes pessoais, possessivos e demonstrativos, cada um com uma função.",
      "O uso correto de pronomes evita repetição e garante coesão ao texto.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual é a principal função de um pronome em um texto?",
        opcoes: ["Substituir um substantivo já citado", "Criar um novo substantivo", "Indicar apenas quantidade", "Ligar duas frases sem sentido"],
        correta: 0,
        feedbackAcerto: "Isso mesmo, o pronome retoma o substantivo já citado.",
        feedbackErro: "Revise o painel de coesão por pronome.",
        ondeEstaNoTexto: "ELA e SEUS retomam 'a sonda' sem repeti-la.",
        dica: "Pense no motivo de usarmos 'ele' em vez de repetir um nome.",
        reensino: "Volte ao momento 02 e reveja o exemplo da sonda.",
      },
      {
        pergunta: "Em 'o robô perdeu seu sinal', a palavra 'seu' é um pronome:",
        opcoes: ["Possessivo", "Pessoal", "Demonstrativo", "Interrogativo"],
        correta: 0,
        feedbackAcerto: "Correto, 'seu' indica posse.",
        feedbackErro: "Releia o card de Pronome Possessivo.",
        ondeEstaNoTexto: "O robô perdeu seu sinal de rastreio.",
        dica: "Pense em quem é o 'dono' do sinal.",
        reensino: "Revise o momento 03 de vocabulário.",
      },
      {
        pergunta: "Qual pronome demonstrativo indica algo distante no tempo ou espaço?",
        opcoes: ["Aquele", "Este", "Ele", "Meu"],
        correta: 0,
        feedbackAcerto: "Exato, 'aquele' indica distância.",
        feedbackErro: "Releia o card de Pronome Demonstrativo.",
        ondeEstaNoTexto: "Aquela estrela já foi catalogada.",
        dica: "Compare 'este' (perto) com 'aquele' (longe).",
        reensino: "Revise o vocabulário do momento 03.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Sem Repetição",
    materiais: ["Caderno", "Caneta"],
    passos: [
      "Escolha uma pessoa da família e conte a ela um fato do seu dia.",
      "Ao recontar o fato para outra pessoa, use pronomes para substituir o nome da primeira pessoa.",
      "Peça para alguém da casa apontar quais pronomes você usou.",
      "Registre no caderno os pronomes usados e a quem cada um se referia.",
    ],
    registro: "Escreva no caderno: 'Missão Coesão - usei os pronomes [X] e [Y] para me referir a [pessoa]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
