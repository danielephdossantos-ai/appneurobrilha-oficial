import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 18 — Pesquisa com Fontes Confiáveis
 * -------------------------------------------------------------
 * BNCC: EF67LP20, EF67LP21
 */
export const aula18: AulaPortuguesV4 = {
  slug: "aula-18-pesquisa-com-fontes",
  titulo: "Pesquisa com Fontes Confiáveis",
  iconeTrilha: "🔎",
  bncc: ["EF67LP20", "EF67LP21"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Mídias e Verdades: Missão Rastreamento",
    historia: "Analista, uma informação estranha circula pelo Observatório: dizem que a Lua está se afastando da Terra rapidamente demais. Antes de espalhar essa notícia, sua missão é rastrear a fonte original e verificar se ela é confiável. Nem tudo que parece verdade resiste a uma boa pesquisa.",
    imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Rastreamento de Fontes.",
    bloco: {
      titulo: "Diagnóstico de Confiabilidade",
      capaImagemUrl: "",
      pistas: [
        { nome: "Nem todo site que aparece na busca é confiável.", imagemUrl: "" },
        { nome: "Fontes confiáveis citam dados, autores e datas.", imagemUrl: "" },
      ],
      recado: {
        rotulo: "Painel de Verificação",
        icone: "🔎",
        linhas: [
          "  [ CHECAGEM DE FONTE ]",
          "                       ",
          "  Autor identificado?  ",
          "  Data atualizada?     ",
          "  Dados comprováveis?  ",
          "                       ",
          "  Se sim: CONFIÁVEL    ",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que caracteriza uma fonte de pesquisa confiável?",
      hipoteses: [
        { texto: "Ter autoria identificada, dados verificáveis e data atualizada" },
        { texto: "Ser o primeiro resultado de qualquer busca" },
        { texto: "Ter muitas cores e imagens chamativas" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Correto! Uma fonte confiável mostra quem escreveu, quando e com base em quê.",
      feedbackErro: "Reveja o painel de verificação: aparência não garante confiabilidade.",
      dica: "Pense no que diferencia um site sério de um boato qualquer.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Palavras da Pesquisa.",
    cards: [
      { palavra: "Fonte", explicacao: "Origem de uma informação, como um site, livro, pesquisa científica ou especialista.", exemplo: "A reportagem citou como fonte um instituto de pesquisa.", imagemUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Confiabilidade", explicacao: "Grau em que uma informação ou fonte pode ser considerada verdadeira e séria.", exemplo: "Sites de universidades costumam ter boa confiabilidade.", imagemUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Checagem de fatos", explicacao: "Processo de verificar se uma informação é verdadeira, comparando diferentes fontes.", exemplo: "Antes de compartilhar, faça a checagem de fatos da notícia.", imagemUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=200" },
    ],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sintaxe: Marcando a Origem",
    instrucao: "Observe como diferentes expressões indicam a origem de uma informação em um texto.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "SEGUNDO O INSTITUTO NACIONAL, a temperatura subiu 1°C.", explicacao: "💡 CITAÇÃO DE FONTE: indica claramente de onde vem o dado, permitindo verificação.\n> Ex: 'de acordo com', 'conforme dados de'." },
          { texto: "DIZEM POR AÍ que a temperatura mudou muito.", explicacao: "💡 FONTE VAGA: não há como verificar quem disse ou com base em quê.\n> Ex: 'ouvi dizer', 'estão falando'." },
          { texto: "A PESQUISA PUBLICADA EM 2023 confirma o aumento.", explicacao: "💡 FONTE DATADA: mostra quando o estudo foi feito, importante para avaliar atualidade.\n> Ex: 'segundo o levantamento de 2024'." },
        ],
      },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Frequência.",
    leitura: {
      titulo: "Como Rastrear a Verdade",
      imagemUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      destacar: ["autoria", "data", "comparar fontes"],
      paragrafos: [
        "Fazer uma boa pesquisa não é apenas buscar informações: é saber avaliar se essas informações merecem confiança. O primeiro passo é verificar a autoria do texto: quem escreveu e qual sua especialidade no assunto.",
        "O segundo passo é observar a data de publicação. Uma informação científica de dez anos atrás pode já ter sido atualizada ou até contestada por pesquisas mais recentes.",
        "Também é fundamental comparar fontes diferentes. Se apenas um site afirma algo e nenhuma outra fonte confirma, é sinal de alerta. Fontes confiáveis, como universidades, institutos de pesquisa e órgãos oficiais, costumam divulgar dados semelhantes sobre o mesmo assunto.",
        "Por fim, um bom pesquisador sempre registra de onde tirou cada informação, permitindo que outras pessoas verifiquem e confirmem os dados apresentados.",
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Qual é o primeiro passo indicado no texto para avaliar uma fonte?",
        opcoes: ["Verificar a autoria do texto", "Compartilhar imediatamente a informação", "Contar o número de palavras do texto", "Verificar a cor do site"],
        correta: 0,
        feedbackAcerto: "Correto! Saber quem escreveu é o primeiro passo da checagem.",
        feedbackErro: "Releia o primeiro parágrafo com atenção à ordem dos passos.",
        ondeEstaNoTexto: "O primeiro passo é verificar a autoria do texto",
        dica: "Pense em quem é responsável pela informação.",
        reensino: "Verificar a autoria ajuda a saber se quem escreveu tem conhecimento sobre o tema.",
      },
      {
        pergunta: "Por que comparar diferentes fontes é importante, segundo o texto?",
        opcoes: ["Porque uma informação isolada, sem confirmação, é um sinal de alerta", "Porque todas as fontes sempre concordam entre si", "Porque isso torna a pesquisa mais demorada sem motivo", "Porque apenas sites antigos merecem confiança"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Comparar fontes ajuda a identificar informações duvidosas.",
        feedbackErro: "O terceiro parágrafo explica o risco de confiar em uma única fonte.",
        ondeEstaNoTexto: "é sinal de alerta.",
        dica: "Pense no que acontece quando só uma fonte afirma algo.",
        reensino: "Informações confirmadas por várias fontes confiáveis são mais seguras.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_escrita: {
    titulo: "Console de Redação",
    instrucao: "Produza um pequeno relatório de pesquisa citando fontes.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relatório de Rastreamento",
        comando: "Escolha um tema simples (animais, esportes, tecnologia) e escreva um parágrafo citando pelo menos uma fonte confiável (livro, site oficial, especialista).",
        modelo: [
          "Segundo o Instituto Brasileiro de Geografia e Estatística, a população brasileira ultrapassa 200 milhões de pessoas.",
          "De acordo com pesquisadores da área de biologia, os golfinhos são animais altamente sociais.",
        ],
        checklist: [
          "Citei claramente a fonte da informação?",
          "A fonte escolhida é confiável (não é um boato)?",
          "O parágrafo tem sentido completo?",
        ],
        cicloRevisao: true,
      },
    ],
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Escaneamento: Checando uma Informação",
    bloco: {
      instrucao: "Organize o processo de verificação de uma informação encontrada na internet.",
      itens: [
        { id: "1", texto: "📄 LEITURA: Leia a informação encontrada com atenção.", imagemUrl: "" },
        { id: "2", texto: "🔍 AUTORIA: Verifique quem é o autor e qual sua especialidade.", imagemUrl: "" },
        { id: "3", texto: "📅 DATA: Confira a data de publicação.", imagemUrl: "" },
        { id: "4", texto: "🔗 COMPARAÇÃO: Compare com outras fontes confiáveis antes de acreditar.", imagemUrl: "" },
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Fonte rastreada com sucesso! Você já sabe checar informações com método.",
      feedbackErro: "Revise a ordem: primeiro leia, depois verifique autor e data, depois compare.",
      dica: "A comparação (4) só faz sentido depois de checar autoria e data.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Alerta de Boato.",
    leitura: {
      titulo: "O Boato do Setor 9",
      imagemUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=400",
      destacar: ["sem autor", "sem data", "nenhuma outra fonte confirma"],
      paragrafos: [
        "Uma mensagem circulou pelo Observatório afirmando que todos os robôs seriam desligados. O texto não tinha autor identificado nem data de publicação.",
        "Ao pesquisar, os Analistas descobriram que nenhuma outra fonte confirmava a notícia. Concluíram, então, que se tratava de um boato sem fundamento.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que os Analistas concluíram que a mensagem era um boato?",
        opcoes: ["Porque não tinha autor, data e nenhuma outra fonte confirmava", "Porque estava escrita em letras maiúsculas", "Porque falava sobre robôs", "Porque era uma mensagem muito curta"],
        correta: 0,
        feedbackAcerto: "Exato! A falta de autoria, data e confirmação são sinais de boato.",
        feedbackErro: "Releia o texto observando os motivos citados no segundo parágrafo.",
        dica: "Pense nos elementos que faltavam na mensagem.",
        reensino: "Mensagens sem autor, data ou confirmação de outras fontes são suspeitas de boato.",
      },
    ],
  },
  momento09_revisao: {
    pontos: [
      "Verificar a autoria é o primeiro passo para avaliar uma fonte.",
      "A data de publicação ajuda a saber se a informação está atualizada.",
      "Comparar diferentes fontes confiáveis evita a divulgação de boatos.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que caracteriza uma fonte de pesquisa confiável?",
        opcoes: ["Autoria identificada, dados verificáveis e data atualizada", "Ser o primeiro link de uma busca qualquer", "Ter muitas imagens e propagandas", "Ser compartilhada por muitas pessoas"],
        correta: 0,
        feedbackAcerto: "Correto! Esses três elementos ajudam a garantir a confiabilidade.",
        feedbackErro: "Pense no que diferencia um site sério de um boato.",
        ondeEstaNoTexto: "",
        dica: "Relembre o painel de checagem de fonte.",
        reensino: "Fontes confiáveis mostram autor, data e dados que podem ser verificados.",
      },
      {
        pergunta: "Por que é importante comparar diferentes fontes sobre o mesmo assunto?",
        opcoes: ["Para verificar se a informação é confirmada por mais de uma fonte confiável", "Para deixar a pesquisa mais longa sem necessidade", "Porque uma única fonte é sempre suficiente", "Para evitar citar qualquer autor"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! A comparação evita cair em boatos e informações falsas.",
        feedbackErro: "Pense no risco de confiar em uma única fonte isolada.",
        ondeEstaNoTexto: "",
        dica: "Uma informação confirmada por várias fontes é mais segura.",
        reensino: "Comparar fontes é essencial para confirmar a veracidade de uma informação.",
      },
      {
        pergunta: "Quais são sinais de que uma informação pode ser um boato?",
        opcoes: ["Falta de autor, falta de data e nenhuma outra fonte confirmando", "Ter sido publicada por uma universidade", "Ter data recente de publicação", "Citar claramente a origem dos dados"],
        correta: 0,
        feedbackAcerto: "Perfeito! Esses são justamente os sinais de alerta de um boato.",
        feedbackErro: "Volte ao texto do 'Boato do Setor 9' para relembrar os sinais.",
        ondeEstaNoTexto: "",
        dica: "Pense no que faltava na mensagem sobre os robôs.",
        reensino: "A ausência de autoria, data e confirmação são sinais claros de boato.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Rastreamento em Casa",
    materiais: ["Caderno", "Celular ou computador com supervisão de um adulto"],
    passos: [
      "Escolha, com a família, uma notícia recente que viram ou ouviram.",
      "Pesquisem juntos a fonte original dessa notícia.",
      "Verifiquem se há autor, data e outras fontes confirmando.",
      "Registrem no caderno se a notícia parece confiável ou não, e por quê.",
    ],
    registro: "Escreva: 'Missão Rastreamento em Casa - Conclusão: [confiável ou não confiável, motivo]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
