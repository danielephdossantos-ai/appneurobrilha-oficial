import type { AulaPortuguesV4 } from "../../types";

/**
 * Aula 18 — Concordância: O Ajuste de Frequência
 * -------------------------------------------------------------
 * BNCC: EF07LP06, EF67LP33
 */
export const aula18: AulaPortuguesV4 = {
  slug: "aula-18-concordancia-ajuste",
  titulo: "Ajuste de Frequência",
  iconeTrilha: "📻",
  bncc: ["EF07LP06", "EF67LP33"],
  duracaoMin: 25,
  momento01_motivacao: {
    titulo: "Sintonia Fina: A Lei da Concordância",
    historia: "Analista, o sistema está apresentando ruídos. Sabe quando o hardware tenta rodar um software incompatível? Na língua, isso se chama ERRO DE CONCORDÂNCIA. Se o sujeito está no plural, o verbo não pode ficar no singular. Se o nome é masculino, o adjetivo não pode ser feminino. Hoje, vamos aprender a fazer o ajuste de frequência para que todas as peças da sua frase vibrem na mesma sintonia.",
    imagemUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=400",
  },
  momento02_previsao: {
    instrucao: "Briefing: O Pacto das Palavras.",
    bloco: {
      titulo: "Monitoramento de Acoplagem",
      capaImagemUrl: "",
      pistas: [
        { nome: "Concordância Nominal: O adjetivo e o artigo seguem o substantivo.", imagemUrl: "" },
        { nome: "Concordância Verbal: O verbo segue o sujeito (quem faz a ação).", imagemUrl: "" }
      ],
      recado: {
        rotulo: "Protocolo de Sincronia",
        icone: "📻",
        linhas: [
          "  [ MATRIZ DE AJUSTE ]      ",
          "                             ",
          "  1. NOMINAL:                ",
          "  > 'A' (Art) 'antena' (Sub) ",
          "    'nova' (Adj).            ",
          "                             ",
          "  2. VERBAL:                 ",
          "  > 'Nós' (Suj) 'lemos' (Vb).",
          "                             ",
          "  DICA: Se um muda, o outro  ",
          "  DEVE mudar também.         "
        ],
        estilo: "cartaz",
      },
      pergunta: "O que acontece se dissermos 'Os analista chegou'?",
      hipoteses: [
        { texto: "Erro de concordância: plural e singular misturados" },
        { texto: "O sistema funciona normalmente" },
        { texto: "É um novo código secreto" },
      ],
      respostaCerta: 0,
      feedbackAcerto: "Frequência ajustada. 'Os analistas chegaram' seria o correto.",
      feedbackErro: "Analise a quantidade. 'Os' indica um ou muitos?",
      dica: "Pense na harmonia entre os números.",
    },
  },
  momento03_vocabulario: {
    instrucao: "Dicionário de Sincronia: Ativos Harmônicos.",
    cards: [
      { palavra: "Flexão", explicacao: "A mudança na terminação da palavra para indicar gênero (M/F) ou número (S/P).", exemplo: "Menino (S) -> Meninos (P). Isso é flexão de número.", imagemUrl: "" },
      { palavra: "Sujeito", explicacao: "O termo da frase sobre o qual se diz algo. É quem 'manda' na forma do verbo.", exemplo: "O ANALISTA captou o sinal. ('O Analista' é o sujeito).", imagemUrl: "" },
    ],
  },
  momento04_leituraGuiada: {
    instrucao: "Análise de Sincronia de Dados.",
    leitura: {
      titulo: "A Lei da Harmonia",
      imagemUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
      destacar: ["concordância", "sujeito", "nominal", "verbal"],
      paragrafos: [
        "A concordância é a regra de ouro do português culto. Ela garante que os elementos de uma frase estejam conectados logicamente, evitando confusões de sentido.",
        "Na concordância nominal, o substantivo é o sol e as outras palavras (artigos, adjetivos, numerais) são planetas que giram em torno dele, copiando seu gênero e número.",
        "Na verbal, a relação é entre o sujeito e o verbo. Se o sujeito é composto por mais de uma pessoa, o verbo deve, obrigatoriamente, ir para o plural."
      ],
    },
  },
  momento05_compreensao: {
    instrucao: "Validação de Frequência.",
    perguntas: [
      {
        pergunta: "Por que a concordância é comparada a uma 'regra de ouro'?",
        opcoes: ["Porque garante a conexão lógica e clara entre as palavras", "Porque é feita de metal precioso", "Porque só pessoas ricas usam"],
        correta: 0,
        feedbackAcerto: "Harmonia detectada. Você entende o valor da conexão.",
        feedbackErro: "Pense no que aconteceria se as palavras não se 'entendessem'.",
        ondeEstaNoTexto: "Garante que os elementos de uma frase estejam conectados logicamente.",
        dica: "Busque a palavra 'conexão'.",
        reensino: "Sem concordância, a frase parece 'desmontada' e gera ruído na comunicação.",
      },
    ],
  },
  momento06_personagensCenario: {
    instrucao: "Nenhum agente detectado.",
    perguntas: [],
  },
  momento_ensinoVisual: {
    titulo: "Laboratório de Sincronia: Verbal e Nominal",
    instrucao: "Veja como a alteração do 'Líder' (Substantivo/Sujeito) exige o ajuste de todo o resto.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O SISTEMA está ATIVO.",
            explicacao: "💡 SINGULAR: Tudo no modo unitário.\n> Ex: 'A porta foi aberta.'"
          },
          {
            texto: "Os SISTEMAS estão ATIVOS.",
            explicacao: "💡 PLURAL: O substantivo 'Sistemas' forçou o artigo (Os), o verbo (estão) e o adjetivo (ativos) a mudarem.\n> Ex: 'As portas foram abertas.'"
          },
          {
            texto: "EU e VOCÊ acessamos o log.",
            explicacao: "💡 SUJEITO COMPOSTO: Duas pessoas (Eu + Você = Nós) exigem o verbo no plural.\n> Ex: 'Pedro e Maria saíram.'"
          }
        ]
      }
    ]
  },
  momento_escrita: {
    titulo: "Console de Ajuste",
    instrucao: "Corrija os erros de sincronia no log abaixo.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Depuração de Frase",
        comando: "Corrija a frase: 'As luz vermelha piscou durante o testes.'",
        modelo: [
          "CORREÇÃO: As luzes vermelhas piscaram durante os testes."
        ],
        checklist: [
          "O artigo 'As' combina com 'luzes'?",
          "O adjetivo 'vermelhas' combina com 'luzes'?",
          "O verbo 'piscaram' combina com o sujeito plural?"
        ],
        cicloRevisao: true
      }
    ]
  },
  momento07_sequencia: {
    instrucao: "Laboratório de Sincronia: Montagem",
    bloco: {
      instrucao: "Monte a frase correta arrastando as peças sintonizadas.",
      itens: [
        { id: "1", texto: "Muitos (Art)", imagemUrl: "" },
        { id: "2", texto: "Analistas (Sub)", imagemUrl: "" },
        { id: "3", texto: "Capazes (Adj)", imagemUrl: "" },
        { id: "4", texto: "Trabalham (Vb)", imagemUrl: "" }
      ],
      ordemCerta: ["1", "2", "3", "4"],
      feedbackAcerto: "Sintonia 100%! O sistema está operando sem ruídos.",
      feedbackErro: "Verifique se todas as peças estão no plural.",
      dica: "Todos os elementos devem concordar com 'Analistas'.",
    },
  },
  momento08_leituraIndependente: {
    instrucao: "Leitura autônoma: Relatório de Erros.",
    leitura: {
      titulo: "Manual de Suporte: Erros Comuns de Fala",
      imagemUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      destacar: ["distância", "erro", "atenção"],
      paragrafos: [
        "Muitos erros ocorrem quando o sujeito está longe do verbo. O cérebro 'esquece' do plural se houver muitas palavras no meio.",
        "Ex: 'O grupo de analistas experientes *chegou*.' (Certo: O grupo chegou). Aqui, o sujeito é 'Grupo', no singular.",
        "Portanto, identifique sempre o núcleo do sujeito para não cair na armadilha da distância."
      ],
    },
    perguntas: [
      {
        pergunta: "Por que dizemos 'O grupo chegou' e não 'O grupo chegaram'?",
        opcoes: ["Porque o núcleo (Grupo) está no singular", "Porque o grupo tem poucas pessoas", "Porque o verbo decide sozinho"],
        correta: 0,
        feedbackAcerto: "Análise avançada. Você não caiu na armadilha do plural próximo.",
        feedbackErro: "Quem é o líder da frase: 'Grupo' ou 'Analistas'?",
        dica: "O núcleo manda no verbo.",
        reensino: "Palavras coletivas (grupo, turma, time) mantêm o verbo no singular se o coletivo estiver no singular."
      }
    ],
  },
  momento09_revisao: {
    pontos: [
      "Concordância Nominal: Adjetivos e artigos seguem o substantivo.",
      "Concordância Verbal: O verbo segue o núcleo do sujeito.",
      "Núcleos coletivos (como 'Grupo') mantêm o verbo no singular."
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual frase está com a concordância CORRETA?",
        opcoes: ["Os arquivos foram salvos", "As arquivo foi salvo", "Os arquivo foram salvo"],
        correta: 0,
        feedbackAcerto: "Sincronia perfeita.",
        feedbackErro: "Verifique se plural combina com plural em todas as palavras.",
        ondeEstaNoTexto: "As outras palavras... copiam seu gênero e número.",
        dica: "Busque a harmonia total.",
        reensino: "Na concordância, o plural deve se estender a todos os termos relacionados.",
      },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Inspetor de Sincronia",
    materiais: ["Voz"],
    passos: [
      "Diga uma frase errada de propósito (ex: 'Nós vai na padaria').",
      "Peça para alguém corrigir e explicar por que estava errado.",
      "Mostre para eles o que você aprendeu sobre 'Ajuste de Frequência'."
    ],
    registro: "Anote a frase que vocês corrigiram juntos.",
  },
  recompensa: {
    xp: 250,
    moedas: 150,
  },
};
