import type { AulaHistoria } from "../types";

const aula: AulaHistoria = {
  curso: "historia-2ano",
  ano: "2º Ano",
  unidade: 1,
  aula: 1,
  titulo_unidade: "O Tempo Conta Histórias",
  slug: "aula-01-tempo-conta-historias",
  meta_narrativa: {
    item_perdido: "Engrenagem de Bronze do Relógio do Tempo",
    dialogo_aurora:
      "Olá, Pequeno Historiador! O Relógio do Tempo perdeu suas sete engrenagens mágicas e o mundo ficou um pouco confuso. Para recuperar a primeira engrenagem, precisamos desvendar os segredos do Ontem, do Hoje e do Amanhã. Pegue a sua Lupa do Historiador e vamos começar nossa investigação!",
  },
  trilha: {
    "01_missao": {
      titulo: "Missão da Unidade",
      descricao:
        "Investigar como as coisas mudam ou permanecem iguais ao longo dos dias e construir a sua primeira sala do museu: a Linha do Tempo da sua vida!",
    },
    "02_narrativa": {
      personagem: "Brilha",
      texto:
        "Eu olhei para uma foto minha de quando eu era um bebêzinho... Eu mudei muito! Minhas roupas cresceram, meus dentes mudaram. Como o tempo consegue fazer isso sem a gente ver?",
    },
    "03_observacao_fonte": {
      tipo_fonte: "Fotografia Antiga vs. Atual",
      instrucao_lupa:
        "Use a Lupa do Historiador para observar atentamente as marcas do tempo nestas duas imagens.",
      imagem_passado: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600",
      detalhe_passado:
        "Um bebê antigo usando roupas de tecidos grossos, em uma foto em tom de preto e branco.",
      imagem_presente: "https://images.unsplash.com/photo-1519689680058-324335c77ebd?w=600",
      detalhe_presente:
        "Uma criança moderna brincando com roupas coloridas e leves, em uma foto digital nítida.",
    },
    "04_investigacao": {
      pergunta_pista:
        "Olhando as duas fotos com a sua lupa, qual é a pista principal que prova que o tempo passou entre uma imagem e outra?",
      pistas_disponiveis: [
        "A mudança nas cores da foto (de preto e branco para colorido) e os estilos diferentes das roupas.",
        "O fato de o Sol brilhar do mesmo jeito no céu nas duas fotografias.",
      ],
      resposta_pista_index: 0,
    },
    "05_ensino_explicito": {
      conceito: "Ontem, Hoje e Amanhã",
      explicacao:
        "O tempo não para! Para ajudar a organizar nossa história, nós dividimos o tempo em três partes mágicas:\n\n*   **Ontem (Passado):** Tudo o que já aconteceu. Suas memórias, o dia em que você nasceu, a aula de ontem.\n*   **Hoje (Presente):** O que está acontecendo agora, neste exato momento em que você lê este texto.\n*   **Amanhã (Futuro):** O que ainda vai acontecer. Os seus planos, os seus sonhos e o dia de amanhã.",
    },
    "06_eu_faco": {
      exemplo_professor:
        "Veja como a Professora Aurora organiza o tempo dela usando um calendário na tela: 'Ontem eu li um livro antigo (passado), hoje eu estou ensinando vocês (presente) e amanhã eu vou visitar um museu real (futuro)'.",
    },
    "07_nos_fazemos": {
      atividade_guiada: "Vamos arrastar juntos os blocos para o lugar certo da Linha do Tempo?",
      associacoes: [
        { evento: "O dia do seu nascimento", tempo_correto: "Passado (Ontem)" },
        { evento: "Você jogando este jogo agora", tempo_correto: "Presente (Hoje)" },
        { evento: "Seu próximo aniversário que vai chegar", tempo_correto: "Futuro (Amanhã)" },
      ],
    },
    "08_voce_faz": {
      exercicio_autonomo:
        "Agora é sua vez, Historiador! Escreva uma atividade que você fez ONTEM e uma que você quer fazer AMANHÃ.",
    },
    "09_aplicacao_cotidiano": {
      texto_pratico:
        "Você pode usar um calendário de papel na parede do seu quarto ou o relógio da cozinha para acompanhar como a sua própria história avança a cada dia!",
    },
    "10_minijogo": {
      nome: "O Enigma do Relógio Desregulado",
      mecanica:
        "O ponteiro do relógio está girando! Clique no botão de FREAR no momento exato em que o ponteiro apontar para o conceito que representa as FOTOGRAFIAS ANTIGAS.",
      alvo_correto: "Passado",
    },
    "11_quiz": {
      pergunta:
        "Se um Pequeno Historiador encontra um diário escrito no ano de 1950, esse objeto é uma fonte que conta uma história do:",
      alternativas: [
        { texto: "Passado (Ontem)", correta: true },
        { texto: "Futuro (Amanhã)", correta: false },
      ],
      feedback_professor:
        "Incrível! Esse diário é uma máquina do tempo em formato de papel, guardando memórias do passado!",
    },
    "12_missao_familia": {
      titulo: "Investigadores de Gaveta",
      tarefa:
        "Peça para um adulto da sua família mostrar para você uma fotografia de quando ele tinha a sua idade. Comparem juntos o que mudou no cabelo, nas roupas e na cidade!",
    },
    "13_portfolio_sala_museu": {
      nome_sala: "Sala 1: A Linha do Tempo Interativa",
      item_salvo: "Card Personalizado da Minha Linha do Tempo",
    },
  },
  recompensas: {
    xp: 300,
    moedas: 150,
    item_conquistado: "Engrenagem de Bronze",
    engrenagem_indice: 1,
  },
};

export default aula;
