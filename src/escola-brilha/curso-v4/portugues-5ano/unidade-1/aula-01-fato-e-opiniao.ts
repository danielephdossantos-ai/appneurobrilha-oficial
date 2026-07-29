import type { AulaPortuguesV4 } from "../../types";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";

/**
 * Aula 1 — Fato e Opinião
 * -------------------------------------------------------------
 * Missão de abertura do curso "Mestres da Palavra" (5º ano).
 * O leitor crítico aprende a separar o que pode ser VERIFICADO
 * (fato) do que expressa um JULGAMENTO de quem escreve (opinião),
 * reconhecendo as marcas linguísticas de cada um.
 *
 * BNCC: EF05LP01, EF35LP04, EF05LP17, EF05LP18, EF05LP23
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-fato-e-opiniao",
  titulo: "Fato e Opinião",
  iconeTrilha: "🛰️",
  bncc: ["EF05LP17", "EF05LP18", "EF35LP04"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Missão 01 — Ligando o filtro crítico",
    historia:
      "A central acendeu em violeta. O analista VOX projetou duas frases no ar: 'A escola tem 480 alunos.' e 'A escola é a melhor da cidade.' — Parecem iguais, mas não são, disse ele. A primeira eu posso conferir na secretaria em dois minutos. A segunda depende de quem está falando. Todo dia você recebe centenas de frases assim, misturadas em notícias, vídeos e mensagens. Sua missão hoje: instalar o filtro que separa FATO de OPINIÃO — e nunca mais engolir informação sem checar.",
    imagemUrl: robo,
  },

  momento02_previsao: {
    instrucao:
      "Antes de abrir o dossiê, analise os fragmentos interceptados. O que eles sugerem sobre o texto que você vai ler?",
    bloco: {
      titulo: "Dossiê: A Praça Nova do Bairro",
      capaImagemUrl: cidade,
      pistas: [
        { imagemUrl: celular, nome: "Print de uma postagem" },
        { imagemUrl: binoculo, nome: "Relatório de observação" },
      ],
      recado: {
        rotulo: "Fragmentos interceptados",
        icone: "🛰️",
        linhas: [
          "«A praça foi inaugurada em março de 2024.»",
          "«A praça ficou linda demais, a melhor do bairro.»",
          "«Foram plantadas 32 árvores no espaço.»",
        ],
        estilo: "papel",
      },
      pergunta: "O que essas três frases têm de diferente entre si?",
      hipoteses: [
        { texto: "Duas podem ser conferidas com dados; uma expressa um julgamento pessoal" },
        { texto: "Todas as três são informações comprovadas" },
        { texto: "Todas as três são apenas impressões de quem escreveu" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🛰️ Filtro calibrado! A data e o número de árvores podem ser checados em documentos. Já 'ficou linda demais, a melhor do bairro' depende do gosto de quem escreveu — é opinião.",
      feedbackErro:
        "Teste cada frase com a pergunta-chave: 'dá para provar isso com dados?' A data e o número de árvores, sim. 'A melhor do bairro' é avaliação pessoal.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Dois conceitos formam o núcleo do protocolo do leitor crítico.",
    cards: [
      {
        palavra: "fato",
        explicacao:
          "Informação que pode ser verificada, medida ou comprovada por documentos, dados ou observação — e que continua verdadeira independentemente de quem lê.",
        exemplo: "«O Brasil tem 26 estados e um Distrito Federal.» — dá para conferir no mapa oficial.",
        imagemUrl: livro,
      },
      {
        palavra: "opinião",
        explicacao:
          "Avaliação, gosto ou julgamento de quem escreve. Não é falsa nem inútil, mas depende do ponto de vista — outra pessoa pode discordar sem estar errada.",
        exemplo: "«O Brasil tem as praias mais bonitas do mundo.» — é um juízo de valor, não um dado.",
        imagemUrl: estrela,
      },
    ],
  },

  // ✍️ LOUSA DA LÍNGUA — o professor RESOLVE na frente do aluno,
  // igual conta armada de Matemática: frase armada, pedaço por pedaço.
  momento_lousa: {
    titulo: "Lousa da Língua · o professor resolve",
    instrucao:
      "Assista o professor destrinchar a frase na lousa. Toque em cada botão e acompanhe passo a passo — depois é a sua vez.",
    blocos: [
      {
        tipo: "fraseAnatomia",
        titulo: "Frase armada · pedaço por pedaço",
        frase:
          "A escola tem 420 alunos e é, sem dúvida, a melhor escola da cidade.",
        partes: [
          {
            texto: "A escola tem 420 alunos",
            rotulo: "FATO",
            cor: "verde",
            explicacao:
              "Dá pra CONFERIR: basta olhar a lista de matrículas. Se eu contar, dá 420 ou não dá.",
          },
          {
            texto: "e é",
            rotulo: "conector",
            cor: "neutro",
            explicacao: "O 'e' cola as duas partes — e é aqui que a opinião entra escondida.",
          },
          {
            texto: "sem dúvida",
            rotulo: "MARCA DE OPINIÃO",
            cor: "amarelo",
            explicacao:
              "Expressão de certeza do autor. Serve pra você aceitar sem checar. Ligue o alerta.",
          },
          {
            texto: "a melhor escola da cidade",
            rotulo: "OPINIÃO",
            cor: "vermelho",
            explicacao:
              "'Melhor' depende do critério: melhor em quê? Nota? Quadra? Comida? Outra pessoa pode discordar sem estar errada.",
          },
        ],
        conclusao:
          "Uma frase pode ter FATO e OPINIÃO grudados. O leitor crítico separa: 420 alunos = fato conferível; melhor escola = opinião do autor.",
      },
      {
        tipo: "passoAPasso",
        titulo: "Método dos 3 testes (use sempre)",
        enunciado:
          "Frase para analisar: «O novo parque custou R$ 2 milhões e ficou horrível.»",
        passos: [
          {
            pergunta: "1) Dá pra CONFERIR em algum lugar?",
            resultado: "«custou R$ 2 milhões» → sim: nota fiscal, site da prefeitura. ✅ FATO",
            porque: "Fato tem fonte. Se existe onde checar, é fato (mesmo que esteja errado).",
          },
          {
            pergunta: "2) Tem palavra de JUÍZO DE VALOR?",
            resultado: "«horrível» → é avaliação de gosto. ❌ OPINIÃO",
            porque: "Adjetivos de gosto (horrível, incrível, lindo, melhor) denunciam opinião.",
          },
          {
            pergunta: "3) Alguém pode DISCORDAR sem mentir?",
            resultado: "«ficou horrível» → outra pessoa pode achar bonito. Confirmado: OPINIÃO.",
            porque: "Se dá pra discordar sem virar mentira, é opinião.",
          },
        ],
        resposta:
          "A frase mistura: FATO (custou R$ 2 milhões) + OPINIÃO (ficou horrível).",
      },
      {
        tipo: "duasColunas",
        titulo: "Tabela de bolso do leitor crítico",
        esquerda: {
          rotulo: "Fato",
          itens: [
            "«A prova tem 20 questões.»",
            "«O jogo terminou 3 a 1.»",
            "«A cidade tem 3 hospitais.»",
          ],
          marcas: ["números", "datas", "quantidades", "fontes", "verbos no passado"],
        },
        direita: {
          rotulo: "Opinião",
          itens: [
            "«A prova foi injusta.»",
            "«O jogo foi emocionante.»",
            "«A cidade deveria ter mais hospitais.»",
          ],
          marcas: ["melhor", "pior", "deveria", "acho que", "sem dúvida", "incrível"],
        },
        dica:
          "Truque: tente terminar a frase com «…e dá pra provar mostrando o quê?». Se você não consegue apontar a prova, é opinião.",
      },
      {
        tipo: "cacaMarcas",
        titulo: "Sua vez · caça às marcas de opinião",
        instrucao:
          "Toque nas palavras que denunciam OPINIÃO nesta manchete. Verde = acertou, vermelho = essa é fato.",
        frase:
          "A nova biblioteca abriu em março com 5 mil livros e já é o lugar mais incrível do bairro.",
        alvos: ["mais", "incrível"],
        explicacao:
          "«mais incrível» é juízo de valor. «abriu em março» e «5 mil livros» são fatos conferíveis.",
      },
      {
        tipo: "erroComum",
        titulo: "O erro que derruba todo mundo",
        errado: "«Está no jornal, então é fato.»",
        porqueErrado:
          "Jornal também publica opinião (editorial, coluna, crítica). O lugar não define — o tipo de frase define.",
        certo: "«Dá pra conferir em uma fonte? Então é fato.»",
        porqueCerto:
          "O critério é a VERIFICABILIDADE, não quem falou nem onde saiu publicado.",
      },
    ],
  },


  momento04_leituraGuiada: {
    instrucao:
      "Leia com o filtro ligado: sublinhe mentalmente tudo que pode ser conferido e desconfie de adjetivos como 'melhor', 'horrível', 'incrível'.",
    leitura: {
      titulo: "A Praça Nova: dados e impressões",
      imagemUrl: cidade,
      legendaImagem: "A praça inaugurada no bairro Aurora",
      destacar: ["março de 2024", "32 árvores", "a mais bonita da região", "deveria ficar aberta à noite"],
      paragrafos: [
        "A praça do bairro Aurora foi inaugurada em março de 2024, depois de oito meses de obras. No espaço de 1.200 metros quadrados, foram plantadas 32 árvores, instalados 14 bancos e uma quadra de areia.",
        "Para muitos moradores, ela é a mais bonita da região. A aposentada Dona Íris afirma que nunca viu um lugar tão agradável para passar a tarde, e o comerciante Sr. Bruno acha que a praça deveria ficar aberta à noite, com mais iluminação.",
        "Segundo a prefeitura, a obra custou 780 mil reais e atende cerca de 3 mil moradores. Um levantamento feito pela associação do bairro registrou 240 visitantes em um único domingo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto para confirmar cada resposta. Leitor crítico não chuta: verifica.",
    perguntas: [
      {
        pergunta: "Qual destas afirmações do texto é um FATO?",
        opcoes: [
          "A praça é a mais bonita da região",
          "Foram plantadas 32 árvores no espaço",
          "A praça deveria ficar aberta à noite",
        ],
        correta: 1,
        feedbackAcerto: "🛰️ Correto. Um número exato de árvores pode ser contado e conferido — é dado verificável.",
        feedbackErro: "Pergunte-se: qual dessas frases eu conseguiria provar contando ou consultando um documento?",
        ondeEstaNoTexto: "…foram plantadas 32 árvores, instalados 14 bancos e uma quadra de areia.",
      },
      {
        pergunta: "A frase «ela é a mais bonita da região» aparece no texto como:",
        opcoes: [
          "Um dado oficial da prefeitura",
          "A opinião de parte dos moradores",
          "Uma medição feita pela associação do bairro",
        ],
        correta: 1,
        feedbackAcerto: "🛰️ Exato. O próprio texto marca a origem: 'para muitos moradores' — é ponto de vista, não dado.",
        feedbackErro: "Repare na expressão que abre a frase no segundo parágrafo: ela indica de quem é aquela avaliação.",
        ondeEstaNoTexto: "Para muitos moradores, ela é a mais bonita da região.",
      },
      {
        pergunta: "Qual informação do texto vem acompanhada de uma FONTE que permite checagem?",
        opcoes: [
          "O custo de 780 mil reais, informado pela prefeitura",
          "O gosto de Dona Íris pela tarde na praça",
          "O desejo do Sr. Bruno de abrir a praça à noite",
        ],
        correta: 0,
        feedbackAcerto: "🛰️ Isso. 'Segundo a prefeitura' indica a fonte — e fonte citada é o que transforma um número em fato checável.",
        feedbackErro: "Procure no terceiro parágrafo a expressão que aponta quem forneceu o dado.",
        ondeEstaNoTexto: "Segundo a prefeitura, a obra custou 780 mil reais…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora identifique as MARCAS de linguagem que denunciam fato ou opinião.",
    perguntas: [
      {
        pergunta: "Quais expressões costumam sinalizar que vem uma OPINIÃO logo em seguida?",
        opcoes: [
          "«segundo o instituto», «os dados mostram», «foi registrado»",
          "«eu acho», «na minha visão», «é o melhor», «deveria»",
          "«em março de 2024», «1.200 metros quadrados», «14 bancos»",
        ],
        correta: 1,
        feedbackAcerto:
          "🛰️ Perfeito. Verbos de julgamento (achar, sentir), adjetivos avaliativos (melhor, horrível) e o verbo 'deveria' são a assinatura da opinião.",
        feedbackErro:
          "Fatos vêm com fontes e números; opiniões vêm com verbos de julgamento e adjetivos de valor. Releia as três listas.",
      },
      {
        pergunta: "Por que uma reportagem bem feita mistura fatos E opiniões de moradores?",
        opcoes: [
          "Porque opinião é sempre mais importante que dado",
          "Porque os dados mostram o que aconteceu e as opiniões mostram como as pessoas avaliam o que aconteceu",
          "Porque o autor não conseguiu checar as informações",
        ],
        correta: 1,
        feedbackAcerto:
          "🛰️ Exatamente. Nenhuma das duas é 'errada' — o erro é confundi-las. O leitor crítico lê as duas, mas sabe qual é qual.",
        feedbackErro:
          "Opinião não é defeito no texto. O problema aparece quando ela é apresentada como se fosse dado comprovado.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o protocolo de checagem na ordem em que um leitor crítico o aplica.",
    bloco: {
      instrucao: "Do primeiro ao último passo da verificação.",
      itens: [
        { id: "p1", texto: "Ler a frase e perguntar: isso pode ser provado?", imagemUrl: livro },
        { id: "p2", texto: "Procurar a fonte: quem informou esse dado?", imagemUrl: binoculo },
        { id: "p3", texto: "Marcar a frase como fato (verificável) ou opinião (julgamento).", imagemUrl: bau },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🛰️ Protocolo montado: pergunta → fonte → classificação.",
      feedbackErro: "Primeiro você questiona a frase, depois busca quem a sustenta, e só então classifica.",
    },
  },

  momento_minijogo: {
    titulo: "Central de Triagem",
    instrucao: "Arraste cada frase interceptada para o servidor correto: FATO ou OPINIÃO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Servidores da Central",
      bloco: {
        instrucao: "Teste cada frase com a pergunta-chave: «dá para comprovar isso?»",
        itens: [
          { id: "i1", texto: "A cidade tem 3 hospitais públicos.", alvoId: "fato" },
          { id: "i2", texto: "Este é o melhor hospital do país.", alvoId: "opiniao" },
          { id: "i3", texto: "O filme dura 118 minutos.", alvoId: "fato" },
          { id: "i4", texto: "O filme é chato demais.", alvoId: "opiniao" },
          { id: "i5", texto: "A água ferve a 100 °C ao nível do mar.", alvoId: "fato" },
          { id: "i6", texto: "Todo mundo deveria estudar mais.", alvoId: "opiniao" },
          { id: "i7", texto: "A pesquisa ouviu 1.200 pessoas.", alvoId: "fato" },
          { id: "i8", texto: "Acho que vai chover amanhã.", alvoId: "opiniao" },
        ],
        alvos: [
          { id: "fato", nome: "Servidor FATO", imagemUrl: livros, descricao: "Pode ser medido, contado ou conferido em uma fonte" },
          { id: "opiniao", nome: "Servidor OPINIÃO", imagemUrl: estrela, descricao: "Julgamento, gosto ou desejo de quem escreve" },
        ],
        feedbackAcerto: "🎉 Triagem 100% correta. Filtro crítico operacional!",
        feedbackErro: "Reveja: números, datas e medidas vão para FATO. Adjetivos de valor, 'acho' e 'deveria' vão para OPINIÃO.",
      },
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo dossiê. Leia sozinho, com o filtro ligado, e classifique o que encontrar.",
    leitura: {
      titulo: "Relatório: A Biblioteca da Escola",
      imagemUrl: livros,
      destacar: ["4.300 livros", "o lugar mais legal da escola", "aumentou 27%"],
      paragrafos: [
        "A biblioteca da Escola Aurora reúne 4.300 livros, distribuídos em 12 estantes, e funciona das 8h às 17h de segunda a sexta.",
        "Para a turma do 5º ano, é o lugar mais legal da escola. Muitos alunos afirmam que preferem passar o intervalo ali a jogar bola na quadra.",
        "De acordo com o registro de empréstimos, o número de livros retirados aumentou 27% no último semestre, passando de 630 para 800 exemplares.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual trecho do relatório é claramente uma OPINIÃO?",
        opcoes: [
          "A biblioteca reúne 4.300 livros",
          "É o lugar mais legal da escola",
          "Os empréstimos aumentaram 27% no semestre",
        ],
        correta: 1,
        feedbackAcerto: "🛰️ Isso. 'Mais legal' é avaliação: outro aluno pode discordar sem estar errado.",
        feedbackErro: "Duas dessas frases trazem números conferíveis no registro da escola. A terceira traz um adjetivo de valor.",
        ondeEstaNoTexto: "Para a turma do 5º ano, é o lugar mais legal da escola.",
      },
      {
        pergunta: "O que torna o aumento de 27% um FATO, e não uma impressão?",
        opcoes: [
          "Porque muita gente comenta sobre isso",
          "Porque o texto indica a fonte (registro de empréstimos) e os números exatos (de 630 para 800)",
          "Porque o número é alto",
        ],
        correta: 1,
        feedbackAcerto: "🛰️ Perfeito. Fonte + números verificáveis = fato checável.",
        feedbackErro: "Procure no terceiro parágrafo de onde veio o dado e quais números o sustentam.",
        ondeEstaNoTexto: "De acordo com o registro de empréstimos… passando de 630 para 800 exemplares.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "FATO é o que pode ser verificado: números, datas, medidas, informações com fonte citada.",
      "OPINIÃO é julgamento de quem escreve: adjetivos de valor (melhor, horrível), verbos como achar/sentir e o verbo 'deveria'.",
      "Pergunta-chave do protocolo: «dá para comprovar isso com dados ou documentos?»",
      "Opinião não é mentira — o erro é apresentá-la como se fosse dado comprovado.",
      "Expressões como «segundo a prefeitura» e «de acordo com a pesquisa» indicam a fonte e reforçam o fato.",
    ],
    miniDesafio: {
      pergunta: "«O novo ônibus elétrico circula desde maio e é o transporte mais confortável da cidade.» Nessa frase há:",
      opcoes: [
        "Só fatos",
        "Um fato (circula desde maio) e uma opinião (o mais confortável)",
        "Só opiniões",
      ],
      correta: 1,
      feedbackAcerto: "🛰️ Isso! A mesma frase pode misturar as duas coisas — por isso o filtro precisa ficar sempre ligado.",
      feedbackErro: "Divida a frase em duas partes: a data pode ser conferida; 'o mais confortável' depende de quem avalia.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que define um FATO?",
        opcoes: [
          "Ser uma frase escrita por um adulto",
          "Poder ser verificado por dados, medidas ou documentos",
          "Ser uma frase longa e difícil",
        ],
        correta: 1,
        feedbackAcerto: "🛰️ Correto. Verificabilidade é o critério.",
        feedbackErro: "Fato é aquilo que se pode comprovar, independentemente de quem lê.",
      },
      {
        pergunta: "2/5 — Qual expressão sinaliza OPINIÃO?",
        opcoes: ["«segundo o IBGE»", "«na minha visão»", "«foram registrados 240 casos»"],
        correta: 1,
        feedbackAcerto: "🛰️ Exato. 'Na minha visão' marca o ponto de vista de quem fala.",
        feedbackErro: "Fontes e números apontam fato. Expressões de ponto de vista apontam opinião.",
      },
      {
        pergunta: "3/5 — «A praça tem 14 bancos.» Essa frase é:",
        opcoes: ["Fato", "Opinião", "Nenhuma das duas"],
        correta: 0,
        feedbackAcerto: "🛰️ Isso: basta contar os bancos para conferir.",
        feedbackErro: "Se dá para contar e conferir, é fato.",
      },
      {
        pergunta: "4/5 — «Essa praça deveria abrir à noite.» Essa frase é:",
        opcoes: ["Fato comprovado", "Opinião, porque expressa um desejo de quem fala", "Um dado da prefeitura"],
        correta: 1,
        feedbackAcerto: "🛰️ Correto. 'Deveria' revela desejo, não dado.",
        feedbackErro: "O verbo 'deveria' indica o que alguém acha que seria melhor — é opinião.",
      },
      {
        pergunta: "5/5 — Por que o leitor crítico separa fato de opinião?",
        opcoes: [
          "Para descartar todas as opiniões que encontrar",
          "Para saber o que precisa de checagem e o que é ponto de vista, formando a própria conclusão",
          "Para ler mais rápido",
        ],
        correta: 1,
        feedbackAcerto: "🛰️ Missão 01 concluída. Filtro crítico instalado, Mestre da Palavra! ⭐",
        feedbackErro: "O objetivo não é eliminar opiniões, e sim reconhecê-las para decidir com consciência.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça ao fato disfarçado",
    materiais: ["Uma notícia (site, jornal ou TV)", "Papel e caneta ou o celular para anotar"],
    passos: [
      "1) Escolham juntos uma notícia curta e leiam em voz alta.",
      "2) A criança monta duas colunas: FATO e OPINIÃO — e distribui pelo menos 5 frases da notícia.",
      "3) Para cada fato, procurem a fonte citada no texto (instituto, prefeitura, pesquisa).",
      "4) Conversem: alguma opinião estava escrita como se fosse fato? Como perceberam?",
    ],
    registro: "🗣️ Registre: «Encontrei ___ fatos e ___ opiniões. A opinião mais disfarçada foi ___.»",
  },

  recompensa: {
    xp: 150,
    moedas: 85,
    medalha: "🛰️ Filtro Crítico",
  },
};
