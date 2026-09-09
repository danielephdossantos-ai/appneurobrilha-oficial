import type { AulaPortuguesV4 } from "../../types";

/** Aula 22 — Narrador em 1ª e 3ª pessoa. BNCC: EF67LP28, EF67LP29 */
export const aula22: AulaPortuguesV4 = {
  slug: "aula-22-narrador-e-ponto-de-vista",
  titulo: "Narrador e Ponto de Vista",
  iconeTrilha: "👁️",
  bncc: ["EF67LP28", "EF67LP29"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Setor Literatura: Câmeras do Relato",
    historia: "Analista, todo relato tem uma 'câmera' que decide o que o leitor vê. Às vezes essa câmera está dentro da cabeça de um personagem (1ª pessoa), às vezes flutua acima da cena, vendo tudo (3ª pessoa). Hoje você vai aprender a identificar de onde vem a voz que narra e como isso muda a confiança que depositamos na história.",
    imagemUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Tipos de Narrador.",
    bloco: {
      titulo: "Quem Está Contando Isso?",
      capaImagemUrl: "",
      pistas: [
        { nome: "O narrador em 1ª pessoa usa 'eu'.", imagemUrl: "" },
        { nome: "O narrador em 3ª pessoa usa 'ele/ela'.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Vozes",
        icone: "🎙️",
        linhas: [
          "  [ TIPOS DE NARRADOR ]",
          "                        ",
          "  1ª PESSOA (personagem)",
          "  > 'Eu abri a porta...'",
          "                        ",
          "  3ª PESSOA (observador) ",
          "  > 'Ela abriu a porta...'",
        ],
        estilo: "cartaz",
      },
      pergunta: "Um narrador que diz 'eu vi tudo aquilo' está em qual pessoa?",
      hipoteses: [
        { texto: "1ª pessoa" },
        { texto: "3ª pessoa" },
        { texto: "Não é possível saber" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! O pronome 'eu' indica narrador em 1ª pessoa.",
      feedbackErro: "Releia o painel: 'eu' é a marca da 1ª pessoa.",
      dica: "Observe o pronome usado na frase.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Vozes da Narrativa.",
    cards: [
      { palavra: "Narrador", explicacao: "É a voz que conta a história, diferente do autor real do texto.", exemplo: "O narrador do conto nunca revela seu próprio nome.", imagemUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Narrador-personagem", explicacao: "Narrador em 1ª pessoa que participa da história como personagem.", exemplo: "Eu corri até a estação, mas o trem já tinha partido.", imagemUrl: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Narrador-observador", explicacao: "Narrador em 3ª pessoa que conta os fatos de fora, sem participar deles.", exemplo: "Ele correu até a estação, mas o trem já tinha partido.", imagemUrl: "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Vozes: Comparando Narradores",
    instrucao: "Compare como a mesma cena muda de acordo com o narrador.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Eu tremia quando abri a caixa misteriosa.", explicacao: "💡 1ª PESSOA: o narrador é personagem, sentimos o medo dele diretamente." },
          { texto: "Ela tremia quando abriu a caixa misteriosa.", explicacao: "💡 3ª PESSOA: o narrador observa de fora, descrevendo o que vê." },
          { texto: "Ele sabia de tudo que acontecia na cidade, até dos segredos.", explicacao: "💡 3ª PESSOA ONISCIENTE: o narrador conhece pensamentos e fatos que os personagens não veem." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Arquivo: dois relatos, duas vozes.",
    leitura: {
      titulo: "A Chave Perdida",
      imagemUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400",
      destacar: ["eu", "ela", "narrador", "ponto de vista"],
      paragrafos: [
        "Eu procurei a chave por toda a casa e não a encontrei. Meu coração batia forte, porque sem ela eu não conseguiria entrar antes que a chuva começasse.",
        "Do outro lado da rua, Sofia observava tudo. Ela viu o rapaz revirar bolsos e gavetas, sem imaginar que a chave estava caída bem ao lado do portão.",
        "Se esse relato fosse contado só pelo ponto de vista de Sofia, o leitor saberia da chave no chão antes do rapaz. Mas contado em 1ª pessoa por ele, sentimos apenas a aflição da busca.",
        "O ponto de vista escolhido pelo autor decide o que o leitor sabe e quando ele sabe — essa é a base do jogo entre narrador e leitor.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "No primeiro parágrafo, em que pessoa está o narrador?",
        opcoes: ["1ª pessoa", "3ª pessoa", "2ª pessoa", "Não há narrador"],
        correta: 0,
        feedbackAcerto: "Correto! O uso de 'eu' marca a 1ª pessoa.",
        feedbackErro: "Observe o pronome usado logo na primeira frase.",
        ondeEstaNoTexto: "Eu procurei a chave por toda a casa",
        dica: "Procure o pronome pessoal do início do texto.",
        reensino: "1ª pessoa sempre usa 'eu' e conta a partir de dentro da cena.",
      },
      {
        pergunta: "O que Sofia sabe que o narrador em 1ª pessoa não sabe?",
        opcoes: ["Que a chave está caída perto do portão", "Que vai chover", "Que o rapaz mora sozinho", "Que a casa é grande"],
        correta: 0,
        feedbackAcerto: "Isso! Sofia vê a chave no chão, informação que o narrador-personagem não tem.",
        feedbackErro: "Releia o segundo parágrafo, sobre o que Sofia observa.",
        ondeEstaNoTexto: "sem imaginar que a chave estava caída bem ao lado do portão",
        dica: "Compare o que cada personagem consegue enxergar na cena.",
        reensino: "O ponto de vista limita ou amplia o que o leitor descobre junto com o narrador.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Cena sob análise: quem narra e onde se passa a história?",
    perguntas: [
      {
        pergunta: "Quem é o narrador-personagem do texto 'A Chave Perdida'?",
        opcoes: ["O rapaz que procura a chave", "Sofia", "Um narrador onisciente", "Não é possível saber"],
        correta: 0,
        feedbackAcerto: "Correto! É o rapaz quem narra em 1ª pessoa sua própria busca.",
        feedbackErro: "Releia quem diz 'eu' no primeiro parágrafo.",
        ondeEstaNoTexto: "Eu procurei a chave por toda a casa",
        dica: "É quem usa a palavra 'eu' na narrativa.",
        reensino: "O narrador-personagem é sempre quem fala em 1ª pessoa e vive a ação.",
      },
      {
        pergunta: "Onde Sofia está posicionada enquanto observa a cena?",
        opcoes: ["Do outro lado da rua", "Dentro da casa do rapaz", "No telhado", "Na escola"],
        correta: 0,
        feedbackAcerto: "Exato, esse detalhe de cenário explica por que ela vê o que o rapaz não vê.",
        feedbackErro: "Releia o início do segundo parágrafo.",
        ondeEstaNoTexto: "Do outro lado da rua, Sofia observava tudo.",
        dica: "É a primeira informação do segundo parágrafo.",
        reensino: "O cenário de onde o narrador observa influencia o que ele pode contar.",
      },
    ],
  },
  momento_escrita: {
    titulo: "Console de Criação: Mesma Cena, Duas Vozes",
    instrucao: "Reescreva uma pequena cena mudando o ponto de vista do narrador.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Troca de Câmera",
        comando: "Escreva uma cena curta em 1ª pessoa (usando 'eu') e depois reescreva a mesma cena em 3ª pessoa (usando 'ele/ela').",
        modelo: [
          "1ª PESSOA: Eu cheguei atrasado e o professor já tinha fechado a porta.",
          "3ª PESSOA: Ele chegou atrasado e o professor já tinha fechado a porta.",
        ],
        checklist: [
          "Usei 'eu' na primeira versão?",
          "Usei 'ele' ou 'ela' na segunda versão?",
          "Mantive os mesmos fatos nas duas versões?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Passos da Análise de Narrador",
    bloco: {
      instrucao: "Organize o processo para identificar o ponto de vista de um texto.",
      itens: [
        { id: "1", texto: "🔎 Localizar os pronomes usados para contar a história.", imagemUrl: "" },
        { id: "2", texto: "🧭 Verificar se o narrador participa da ação ou apenas observa.", imagemUrl: "" },
        { id: "3", texto: "📚 Checar se o narrador sabe coisas que os personagens não sabem.", imagemUrl: "" },
        { id: "4", texto: "✅ Classificar como 1ª pessoa, 3ª observadora ou onisciente.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Ótimo! Você seguiu o processo correto de análise do narrador.",
      feedbackErro: "Primeiro observe os pronomes, depois avalie participação e conhecimento, só então classifique.",
      dica: "Classificar (passo 4) só é possível depois de observar as pistas anteriores.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: identifique o narrador.",
    leitura: {
      titulo: "O Segredo do Sótão",
      imagemUrl: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&q=80&w=400",
      destacar: ["ele", "sótão", "segredo"],
      paragrafos: [
        "Ele subiu a escada estreita do sótão sem saber que, escondida entre as caixas, havia uma carta que mudaria tudo o que pensava sobre sua família.",
        "O narrador, que conhecia cada detalhe da casa e até os pensamentos distantes de outros personagens, revelava aos poucos o mistério que envolvia aquela carta.",
      ],
    },
    perguntas: [
      {
        pergunta: "Que tipo de narrador conta essa história?",
        opcoes: ["3ª pessoa onisciente", "1ª pessoa", "2ª pessoa", "Sem narrador definido"],
        correta: 0,
        feedbackAcerto: "Correto! O narrador usa 'ele' e conhece até pensamentos distantes, típico do onisciente.",
        feedbackErro: "Observe o pronome usado e o quanto o narrador parece saber.",
        dica: "Repare que o narrador sabe mais do que o próprio personagem.",
        reensino: "Narrador onisciente é sempre em 3ª pessoa e conhece tudo sobre a história.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "O narrador em 1ª pessoa usa 'eu' e participa da história como personagem.",
      "O narrador em 3ª pessoa usa 'ele/ela' e pode ser observador ou onisciente.",
      "O ponto de vista escolhido decide o que o leitor sabe e quando sabe.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual pronome marca o narrador em 1ª pessoa?",
        opcoes: ["Eu", "Ele", "Você", "Eles"],
        correta: 0,
        feedbackAcerto: "Correto, 'eu' é a marca da 1ª pessoa.",
        feedbackErro: "Reveja o Painel de Vozes do Momento 02.",
        ondeEstaNoTexto: "1ª PESSOA (personagem) > 'Eu abri a porta...'",
        dica: "É o pronome que representa quem fala sobre si mesmo.",
        reensino: "Revise o Momento 02: narrador em 1ª pessoa usa 'eu'.",
      },
      {
        pergunta: "O que diferencia um narrador onisciente de um observador comum?",
        opcoes: ["Ele conhece pensamentos e fatos que os personagens não sabem", "Ele nunca aparece no texto", "Ele só descreve paisagens", "Ele sempre é o personagem principal"],
        correta: 0,
        feedbackAcerto: "Exato! O onisciente tem acesso a informações além do que os personagens percebem.",
        feedbackErro: "Reveja o Laboratório de Vozes sobre o narrador onisciente.",
        ondeEstaNoTexto: "sabia de tudo que acontecia na cidade, até dos segredos",
        dica: "Pense em quem 'sabe mais' do que os personagens.",
        reensino: "O onisciente é o tipo de narrador de 3ª pessoa com conhecimento total da história.",
      },
      {
        pergunta: "Por que o ponto de vista escolhido pelo autor é importante?",
        opcoes: ["Porque decide o que o leitor sabe e quando sabe", "Porque decide o título do livro", "Porque não influencia a leitura", "Porque define o tamanho das páginas"],
        correta: 0,
        feedbackAcerto: "Correto! O ponto de vista molda toda a experiência de leitura.",
        feedbackErro: "Releia o último parágrafo do texto 'A Chave Perdida'.",
        ondeEstaNoTexto: "O ponto de vista escolhido pelo autor decide o que o leitor sabe",
        dica: "Pense em como a mesma cena muda dependendo de quem narra.",
        reensino: "O ponto de vista é uma escolha estratégica do autor, não um acaso.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Câmeras da Casa",
    materiais: ["Caderno", "Um fato do dia a dia em família"],
    passos: [
      "Escolha um pequeno acontecimento do seu dia (café da manhã, brincadeira, discussão leve).",
      "Conte esse fato em 1ª pessoa, do seu ponto de vista.",
      "Peça para outra pessoa da família contar o mesmo fato, do ponto de vista dela.",
      "Registre as diferenças entre as duas versões da mesma cena.",
    ],
    registro: "Escreva: 'Missão Câmeras - Minha versão foi [X] e a versão de [pessoa] foi [Y]'.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
