import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 41 — Denúncia e Pesquisa: Levantar Problemas e Denunciar Desrespeito a Direitos
 * -------------------------------------------------------------
 * BNCC: EF67LP19, EF67LP20
 */
export const aula41: AulaPortuguesV4 = {
  slug: "aula-41-denuncia-e-pesquisa",
  titulo: "Denúncia e Pesquisa de Campo",
  iconeTrilha: "🔎",
  bncc: ["EF67LP19", "EF67LP20"],
  duracaoMin: 30,
  momento01_motivacao: {
    titulo: "Missão de Campo: Investigar para Transformar",
    historia: "Analista, chegou a hora de sair do laboratório e investigar o mundo real. Muitos direitos são desrespeitados diariamente, mas passam despercebidos porque ninguém pesquisa, registra e denuncia com dados concretos. Hoje você vai aprender a levantar um problema da sua comunidade com pesquisa simples e transformar essa investigação em uma denúncia bem fundamentada, capaz de gerar mudança de verdade.",
    imagemUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: Da Pesquisa à Denúncia.",
    bloco: {
      titulo: "Protocolo de Investigação Cidadã",
      capaImagemUrl: "",
      pistas: [
        { nome: "Uma denúncia eficaz precisa de fatos, não apenas de opinião.", imagemUrl: "" },
        { nome: "Pesquisar significa observar, perguntar e registrar dados antes de concluir.", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Fluxo de Investigação",
        icone: "🔎",
        linhas: [
          "  [ DA PESQUISA À DENÚNCIA ] ",
          "                             ",
          "  1. OBSERVAR O PROBLEMA    ",
          "          ↓                 ",
          "  2. COLETAR DADOS/RELATOS  ",
          "     > Fotos, entrevistas,  ",
          "       datas, números       ",
          "          ↓                 ",
          "  3. REGISTRAR POR ESCRITO  ",
          "          ↓                 ",
          "  4. DENUNCIAR AO ÓRGÃO     ",
          "     RESPONSÁVEL            "
        ],
        estilo: "cartaz",
      },
      pergunta: "Por que uma denúncia com dados concretos tem mais força do que uma reclamação vaga?",
      hipoteses: [
        { texto: "Porque dados comprovam o problema e dificultam que ele seja ignorado" },
        { texto: "Porque dados tornam o texto mais longo e complicado" },
        { texto: "Porque não é necessário provar nada, basta reclamar" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Investigação validada! Dados concretos transformam uma queixa em prova.",
      feedbackErro: "Pense em como convencer alguém de que um problema é real.",
      dica: "Quem recebe a denúncia precisa acreditar que o problema realmente existe.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário do Observatório: Ferramentas de Investigação.",
    cards: [
      { palavra: "Denúncia", explicacao: "Comunicação formal de um problema, abuso ou desrespeito a direitos a uma autoridade competente.", exemplo: "Os moradores fizeram uma denúncia sobre o descarte irregular de lixo.", imagemUrl: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80&w=200" },
      { palavra: "Evidência", explicacao: "Prova concreta que sustenta uma denúncia ou pesquisa, como foto, data ou depoimento.", exemplo: "As fotos serviram como evidência do desrespeito à acessibilidade.", imagemUrl: "" },
      { palavra: "Levantamento", explicacao: "Ato de reunir informações organizadas sobre um tema ou problema.", exemplo: "O levantamento mostrou que 40% das ruas não tinham calçada acessível.", imagemUrl: "" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Relatório de Pesquisa.",
    leitura: {
      titulo: "Relatório: Acessibilidade no Bairro",
      imagemUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
      destacar: ["levantamento", "constatou", "denúncia", "direito"],
      paragrafos: [
        "Um grupo de estudantes realizou um levantamento sobre acessibilidade nas calçadas do bairro Vila Nova, entrevistando 20 moradores com deficiência ou mobilidade reduzida.",
        "A pesquisa constatou que 15 das 20 pessoas entrevistadas relataram dificuldades diárias para se locomover devido a buracos, degraus altos e ausência de rampas.",
        "Com base nesses dados, os estudantes redigiram uma denúncia formal à prefeitura, citando o direito à acessibilidade garantido por lei, e anexaram fotos como prova.",
        "A denúncia gerou uma resposta oficial em quinze dias, com o compromisso de reforma de três ruas do bairro."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Log.",
    perguntas: [
      {
        pergunta: "Quantas pessoas relataram dificuldade de locomoção na pesquisa?",
        opcoes: ["15 de 20 entrevistados", "5 de 20 entrevistados", "Todas as 20 pessoas", "Nenhuma das entrevistadas"],
        correta: 0,
        feedbackAcerto: "Correto! O dado exato dá força à denúncia.",
        feedbackErro: "Releia o segundo parágrafo com atenção aos números.",
        ondeEstaNoTexto: "15 das 20 pessoas entrevistadas relataram dificuldades",
        dica: "Busque os números citados no texto.",
        reensino: "Dados numéricos tornam uma denúncia mais precisa e confiável.",
      },
      {
        pergunta: "O que os estudantes anexaram à denúncia como prova?",
        opcoes: ["Fotos das condições das calçadas", "Um vídeo de entretenimento", "Apenas suas opiniões pessoais", "Um desenho artístico"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Fotos são evidências concretas.",
        feedbackErro: "Releia o terceiro parágrafo do relatório.",
        ondeEstaNoTexto: "anexaram fotos como prova",
        dica: "O que comprova visualmente um problema estrutural?",
        reensino: "Evidências visuais fortalecem qualquer denúncia formal.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Evidências: Opinião vs. Fato",
    instrucao: "Veja a diferença entre uma afirmação vaga e uma afirmação comprovada por pesquisa.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Acho que ninguém consegue andar direito nessa rua.",
            explicacao: "💡 OPINIÃO VAGA: Não apresenta dados, apenas uma impressão pessoal sem comprovação.\n> Evite: 'Todo mundo reclama disso' sem nenhuma fonte."
          },
          {
            texto: "Em pesquisa com 20 moradores, 15 relataram dificuldade de locomoção.",
            explicacao: "💡 FATO COMPROVADO: Apresenta número, método e resultado concreto da investigação.\n> Ex: 'Segundo levantamento realizado em...', 'Dos entrevistados, X% afirmaram...'"
          },
          {
            texto: "As fotos anexadas mostram buracos de até 10 cm na calçada.",
            explicacao: "💡 EVIDÊNCIA VISUAL: Uma imagem datada e localizada reforça a veracidade da denúncia.\n> Ex: 'Em anexo, fotografia registrada em (data)...'"
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Console de Investigação",
    instrucao: "Planeje uma pequena pesquisa e escreva sua denúncia.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu Relatório de Denúncia",
        comando: "Escolha um problema real (na escola, bairro ou comunidade), simule uma pequena pesquisa e escreva uma denúncia formal com base nela.",
        modelo: [
          "PROBLEMA OBSERVADO: [Descreva o que você notou]",
          "DADOS/EVIDÊNCIAS: [Quantas pessoas afetadas, fotos, relatos]",
          "DIREITO DESRESPEITADO: [Qual direito não está sendo cumprido]",
          "DENÚNCIA FORMAL: [Para quem e o que você pede]"
        ],
        checklist: [
          "Descrevi o problema com clareza?",
          "Incluí ao menos um dado ou evidência concreta?",
          "Citei o direito que está sendo desrespeitado?",
          "Mantive um tom respeitoso e objetivo?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Campo: Do Problema à Denúncia",
    bloco: {
      instrucao: "Organize as etapas de uma investigação cidadã completa.",
      itens: [
        { id: "1", texto: "👀 OBSERVAR: Notar um problema que afeta a comunidade.", imagemUrl: "" },
        { id: "2", texto: "📋 PESQUISAR: Coletar relatos, fotos e dados sobre o problema.", imagemUrl: "" },
        { id: "3", texto: "📝 REDIGIR: Escrever a denúncia com fatos e o direito violado.", imagemUrl: "" },
        { id: "4", texto: "📨 ENVIAR: Encaminhar a denúncia ao órgão responsável.", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Investigação completa! Você transformou observação em ação concreta.",
      feedbackErro: "Não é possível redigir (3) sem antes pesquisar (2) o problema observado (1).",
      dica: "Toda denúncia sólida nasce de uma boa pesquisa, não de um impulso isolado.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Denúncia sobre Trabalho Infantil.",
    leitura: {
      titulo: "Denúncia ao Conselho Tutelar",
      imagemUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
      destacar: ["denúncia", "direito", "constatamos"],
      paragrafos: [
        "Prezado Conselho Tutelar, encaminhamos esta denúncia após constatarmos, em visita ao mercado local, três crianças menores de 12 anos trabalhando na venda de produtos durante o horário escolar.",
        "Esse fato desrespeita o direito à educação e à proteção contra o trabalho infantil, previstos no Estatuto da Criança e do Adolescente.",
        "Solicitamos providências urgentes para garantir que essas crianças retornem à escola em segurança."
      ],
    },
    perguntas: [
      {
        pergunta: "Qual direito está sendo desrespeitado segundo a denúncia?",
        opcoes: ["O direito à educação e proteção contra o trabalho infantil", "O direito de trabalhar em qualquer idade", "O direito à alimentação escolar", "O direito ao lazer nos fins de semana"],
        correta: 0,
        feedbackAcerto: "Correto! A denúncia cita claramente os direitos violados.",
        feedbackErro: "Releia o segundo parágrafo da denúncia.",
        dica: "Busque a expressão 'direito à' no texto.",
        reensino: "Toda denúncia deve indicar exatamente qual direito foi desrespeitado."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Uma denúncia forte se apoia em pesquisa: dados, relatos e evidências, não só em opinião.",
      "O fluxo investigativo segue: observar, pesquisar, redigir e enviar a denúncia ao órgão responsável.",
      "Toda denúncia deve indicar claramente qual direito está sendo desrespeitado."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que torna uma denúncia mais convincente?",
        opcoes: ["A presença de dados e evidências concretas", "O uso de muitos adjetivos fortes", "A ausência de qualquer explicação", "O tamanho do texto, quanto maior melhor"],
        correta: 0,
        feedbackAcerto: "Correto! Evidências concretas sustentam a denúncia.",
        feedbackErro: "Pense no exemplo da pesquisa sobre acessibilidade.",
        ondeEstaNoTexto: "Dados numéricos tornam uma denúncia mais precisa e confiável.",
        dica: "Releia o Momento 05 sobre o relatório de acessibilidade.",
        reensino: "Revise o Laboratório de Evidências sobre opinião vs. fato.",
      },
      {
        pergunta: "Qual é a primeira etapa do fluxo de investigação cidadã?",
        opcoes: ["Observar o problema", "Enviar a denúncia", "Redigir o texto final", "Coletar assinaturas"],
        correta: 0,
        feedbackAcerto: "Isso mesmo! Tudo começa pela observação atenta.",
        feedbackErro: "Pense no que precisa acontecer antes de pesquisar.",
        ondeEstaNoTexto: "1. OBSERVAR O PROBLEMA",
        dica: "Releia o briefing do Momento 02.",
        reensino: "Revise o fluxo de investigação cidadã apresentado no início da aula.",
      },
      {
        pergunta: "Por que é importante citar o direito desrespeitado em uma denúncia?",
        opcoes: ["Porque mostra a base legal e a gravidade do problema", "Porque deixa o texto mais bonito", "Porque não tem nenhuma função real", "Porque é apenas uma formalidade sem sentido"],
        correta: 0,
        feedbackAcerto: "Exato! Citar o direito reforça a legitimidade da denúncia.",
        feedbackErro: "Pense no exemplo da denúncia sobre trabalho infantil.",
        ondeEstaNoTexto: "Esse fato desrespeita o direito à educação",
        dica: "Releia o Momento 08 sobre a denúncia ao Conselho Tutelar.",
        reensino: "Revise a leitura independente sobre a denúncia de trabalho infantil.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Operação Investigação Cidadã",
    materiais: ["Caderno para anotações", "Celular ou câmera, se disponível"],
    passos: [
      "Com sua família, escolham um problema real observado no bairro (buraco, falta de sinalização, lixo acumulado, etc.).",
      "Façam um pequeno levantamento: conversem com 2 ou 3 vizinhos sobre o problema.",
      "Registrem fotos e anotações do que foi observado e relatado.",
      "Discutam para qual órgão essa investigação poderia ser encaminhada."
    ],
    registro: "Escreva no caderno: 'Missão Investigação - O problema foi [X] e os relatos coletados foram [Y]'.",
  },
  recompensa: {
    xp: 150,
    moedas: 75,
  },
};
