import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 9 — Checagem de Fatos: Fake News e Verificação de Fontes
 * BNCC: EF67LP03, EF67LP20
 */
export const aula09: AulaPortuguesV4 = {
  slug: "aula-09-checagem-de-fatos",
  titulo: "Checagem de Fatos",
  iconeTrilha: "🔍",
  bncc: ["EF67LP03", "EF67LP20"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Alerta de Informação Suspeita",
    historia: "Analista, o Observatório detectou um problema grave na rede: informações falsas circulando como se fossem verdadeiras. As fake news se espalham rápido porque parecem confiáveis à primeira vista. Mas existe um método para verificar se uma informação é real antes de compartilhar. Hoje você vai aprender a checar fatos como um verdadeiro investigador da linguagem.",
    imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Nem Tudo Que Circula É Verdade.",
    bloco: {
      titulo: "Verificação de Fontes",
      capaImagemUrl: "",
      pistas: [
        { nome: "Toda informação confiável tem uma fonte identificável.", imagemUrl: "" },
        { nome: "Comparar a mesma notícia em diferentes veículos ajuda a confirmar os fatos.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Verificação",
        icone: "🔍",
        linhas: [
          "  [ CHECAGEM DE FATOS ]        ",
          "                               ",
          "  1. FONTE (Quem publicou isso?)",
          "  2. DATA (A informação é recente?)",
          "  3. COMPARAÇÃO (Outros veículos confirmam?)",
          "  4. AUTORIA (Existe um responsável identificado?)",
        ],
        estilo: "cartaz",
      },
      pergunta: "Por que é importante verificar a fonte de uma notícia antes de compartilhá-la?",
      hipoteses: [
        { texto: "Porque a fonte indica se a informação vem de um lugar confiável e responsável" },
        { texto: "Porque toda notícia sem fonte é automaticamente verdadeira" },
        { texto: "Porque a fonte só importa em notícias de esporte" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! A fonte revela quem está por trás da informação e sua responsabilidade sobre ela.",
      feedbackErro: "Releia o Painel de Verificação: o que a fonte revela sobre uma notícia?",
      dica: "Pense em quem assume a responsabilidade pelo que foi publicado.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Linguagem de Verificação.",
    cards: [
      { palavra: "Fake news", explicacao: "Notícia falsa criada para enganar, gerar cliques ou manipular a opinião das pessoas.", exemplo: "A fake news dizia que a escola seria fechada, mas isso nunca foi confirmado por nenhuma fonte oficial.", imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Fonte", explicacao: "Origem de uma informação: pessoa, instituição ou veículo que a publicou ou forneceu.", exemplo: "A reportagem citava como fonte um pesquisador da universidade.", imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Checagem", explicacao: "Processo de verificar se uma informação é verdadeira, comparando fontes e dados.", exemplo: "Antes de compartilhar, ela fez a checagem em três sites diferentes.", imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório Visual: Sinais de Alerta",
    instrucao: "Observe sinais que indicam que uma informação pode ser falsa.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "SINAL 1: 'Compartilhe antes que apaguem!'", explicacao: "💡 Frases que criam urgência tentam impedir que você verifique antes de compartilhar." },
          { texto: "SINAL 2: Nenhum nome de autor ou veículo identificado.", explicacao: "💡 Falta de autoria dificulta saber quem é responsável pela informação." },
          { texto: "SINAL 3: Só um site fala sobre o assunto.", explicacao: "💡 Fatos verdadeiros e relevantes costumam ser noticiados por mais de uma fonte confiável." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Como Nascem e se Espalham as Fake News",
      imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
      destacar: ["fonte", "urgência", "verificação"],
      paragrafos: [
        "As fake news costumam usar títulos chamativos e um tom de urgência, como 'compartilhe agora' ou 'antes que apaguem', para que as pessoas repassem a informação sem checar se ela é verdadeira.",
        "Um dos primeiros passos para verificar uma notícia é observar a fonte: quem publicou, se existe um veículo de comunicação conhecido por trás e se há um autor identificado.",
        "Também é importante comparar a informação com outras fontes confiáveis. Se apenas um site fala sobre determinado assunto e nenhum veículo sério confirma, isso é um sinal de alerta.",
        "Verificar antes de compartilhar é uma responsabilidade de quem usa as redes: espalhar uma informação falsa pode prejudicar pessoas e criar pânico desnecessário.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Que recurso as fake news costumam usar para incentivar o compartilhamento rápido?",
        opcoes: ["Um tom de urgência, como 'compartilhe antes que apaguem'", "Sempre citar três fontes diferentes", "Usar apenas números e estatísticas", "Publicar somente em jornais impressos"],
        correta: 0,
        feedbackAcerto: "Correto! A urgência impede que as pessoas parem para checar.",
        feedbackErro: "Releia o primeiro parágrafo.",
        ondeEstaNoTexto: "um tom de urgência, como 'compartilhe agora' ou 'antes que apaguem'",
        dica: "Pense em frases que pedem pressa.",
        reensino: "Revise o Laboratório Visual sobre sinais de alerta.",
      },
      {
        pergunta: "Por que comparar uma notícia com outras fontes é importante, segundo o texto?",
        opcoes: ["Porque a ausência de outras confirmações é um sinal de alerta", "Porque toda notícia repetida é automaticamente falsa", "Porque isso substitui a necessidade de verificar a fonte original", "Porque apenas jornais impressos podem ser comparados"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A falta de confirmação por outras fontes levanta suspeita.",
        feedbackErro: "Volte ao terceiro parágrafo.",
        ondeEstaNoTexto: "Se apenas um site fala sobre determinado assunto... isso é um sinal de alerta",
        dica: "Pense em quantas fontes confirmam a mesma informação.",
        reensino: "Revise a leitura guiada sobre comparação de fontes.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Verificação",
    instrucao: "Descreva o processo de checagem de uma notícia suspeita.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu Roteiro de Checagem",
        comando: "Escolha uma notícia (real ou inventada) que pareça suspeita e escreva, passo a passo, como você faria para checar se ela é verdadeira.",
        modelo: [
          "Passo 1: Verificar a fonte e o autor da notícia.",
          "Passo 2: Checar a data de publicação.",
          "Passo 3: Buscar a mesma informação em outros veículos confiáveis.",
          "Passo 4: Decidir se a notícia é confiável ou não, explicando o motivo.",
        ],
        checklist: [
          "Identifiquei a fonte da notícia?",
          "Comparei com outras fontes?",
          "Expliquei minha conclusão sobre a confiabilidade?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Checando uma Notícia",
    bloco: {
      instrucao: "Organize o processo correto de checagem de fatos.",
      itens: [
        { id: "1", texto: "🔎 IDENTIFICAR A FONTE: Quem publicou a informação?", imagemUrl: "" },
        { id: "2", texto: "📅 VERIFICAR A DATA: A notícia é atual ou antiga reaproveitada?", imagemUrl: "" },
        { id: "3", texto: "🔁 COMPARAR FONTES: Outros veículos confirmam o mesmo fato?", imagemUrl: "" },
        { id: "4", texto: "✅ DECIDIR: Compartilhar apenas se a informação for confirmada.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Checagem concluída com precisão, Analista!",
      feedbackErro: "Comece pela fonte (1), depois a data (2) e só então compare (3) antes de decidir (4).",
      dica: "Sempre comece descobrindo quem publicou a informação.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: O Boato da Escola.",
    leitura: {
      titulo: "A Mensagem Que Viralizou",
      imagemUrl: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=400",
      destacar: ["boato", "verificação", "confirmação"],
      paragrafos: [
        "Uma mensagem começou a circular no grupo da turma dizendo que as aulas seriam suspensas por uma semana. A mensagem não citava nenhuma fonte oficial e pedia para 'compartilhar com todo mundo rapidamente'.",
        "Antes de repassar, Bruno decidiu checar o site oficial da escola e perguntar diretamente a um professor. Descobriu que a informação era falsa: não havia nenhuma suspensão programada.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que Bruno fez antes de acreditar na mensagem?",
        opcoes: ["Checou o site oficial da escola e perguntou a um professor", "Compartilhou a mensagem imediatamente", "Ignorou completamente o assunto", "Criou uma nova mensagem parecida"],
        correta: 0,
        feedbackAcerto: "Correto! Bruno verificou a informação antes de espalhá-la.",
        feedbackErro: "Releia o segundo parágrafo.",
        ondeEstaNoTexto: "Bruno decidiu checar o site oficial da escola e perguntar diretamente a um professor",
        dica: "Pense na atitude de checagem de Bruno.",
        reensino: "Revise a leitura independente sobre o boato.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Fake news usam urgência e falta de fonte para se espalhar rápido.",
      "Verificar a fonte e comparar com outros veículos ajuda a confirmar fatos.",
      "Compartilhar sem checar pode espalhar informações falsas e causar dano.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual recurso as fake news costumam usar para incentivar compartilhamentos rápidos?",
        opcoes: ["Frases de urgência, como 'compartilhe antes que apaguem'", "Citação de várias fontes confiáveis", "Uso exclusivo de dados oficiais", "Publicação apenas em jornais impressos"],
        correta: 0,
        feedbackAcerto: "Correto!",
        feedbackErro: "Releia o texto sobre urgência nas fake news.",
        ondeEstaNoTexto: "um tom de urgência, como 'compartilhe agora'",
        dica: "Pense em frases que pedem pressa.",
        reensino: "Revise a leitura guiada.",
      },
      {
        pergunta: "Por que é importante identificar a fonte de uma notícia?",
        opcoes: ["Porque revela quem é responsável pela informação", "Porque toda notícia sem fonte é automaticamente verdadeira", "Porque a fonte não influencia a confiabilidade", "Porque só notícias esportivas precisam de fonte"],
        correta: 0,
        feedbackAcerto: "Isso mesmo!",
        feedbackErro: "Releia o Painel de Verificação.",
        ondeEstaNoTexto: "observar a fonte: quem publicou, se existe um veículo... e se há um autor identificado",
        dica: "Pense em quem assume responsabilidade pela informação.",
        reensino: "Revise a leitura guiada sobre fontes.",
      },
      {
        pergunta: "O que Bruno descobriu ao checar a mensagem sobre a suspensão de aulas?",
        opcoes: ["Que a informação era falsa", "Que a informação era totalmente verdadeira", "Que a escola confirmou a suspensão oficialmente", "Que ele mesmo criou o boato"],
        correta: 0,
        feedbackAcerto: "Correto! A checagem revelou que era um boato.",
        feedbackErro: "Releia a leitura independente sobre Bruno.",
        ondeEstaNoTexto: "Descobriu que a informação era falsa",
        dica: "Pense no resultado da checagem de Bruno.",
        reensino: "Revise a leitura independente sobre o boato.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Missão em Família: Detetives da Verdade",
    materiais: ["Celular ou computador com internet", "Papel e caneta"],
    passos: [
      "Escolha com a família uma notícia recente vista nas redes sociais.",
      "Verifiquem juntos a fonte e a data da publicação.",
      "Comparem a notícia com outro veículo confiável.",
      "Registrem se a notícia foi confirmada ou se havia sinais de alerta.",
    ],
    registro: "Anote a notícia escolhida e a conclusão da checagem em família.",
  },
  recompensa: { xp: 150, moedas: 75 },
};
