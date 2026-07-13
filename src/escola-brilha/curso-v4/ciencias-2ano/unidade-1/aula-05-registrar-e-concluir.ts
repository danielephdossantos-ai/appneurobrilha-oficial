import type { AulaPortuguesV4 } from "../../types";
import cientista from "@/assets/neuro-treino/objetos/cientista-crianca.png";
import caderno from "@/assets/neuro-treino/objetos/caderno-cientifico.png";
import lupa from "@/assets/neuro-treino/objetos/lupa.png";
import microscopio from "@/assets/neuro-treino/objetos/microscopio.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import folha from "@/assets/neuro-treino/objetos/folha.png";
import pedra from "@/assets/neuro-treino/objetos/pedra.png";
import pena from "@/assets/neuro-treino/objetos/pena.png";
import garrafa from "@/assets/neuro-treino/objetos/garrafa.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";
import desenho from "@/assets/neuro-treino/objetos/desenho.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import tv from "@/assets/neuro-treino/objetos/tv-moderna.png";

/**
 * Ciências · 2º Ano · Unidade 1 · Aula 05
 * "Registrar e concluir: Diário do Cientista" — EF02CI01
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-registrar-e-concluir",
  titulo: "Diário do Cientista",
  iconeTrilha: "📒",
  bncc: ["EF02CI01"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Cadê o resultado, Brilha?",
    historia:
      "No dia seguinte, Aurora perguntou: 'Brilha, o que aconteceu com a folha no experimento de ontem?'. Brilha coçou a cabeça: 'Ééé… não LEMBRO direito!'. Aurora abriu um caderno lindo: 'Por isso todo cientista tem um DIÁRIO. A gente REGISTRA tudo pra nunca esquecer — e pra outras pessoas aprenderem também.'",
    imagemUrl: cientista,
  },

  momento02_previsao: {
    instrucao: "Aurora deixou uma pista final. O que essa missão vai ensinar?",
    bloco: {
      titulo: "Missão do Diário",
      capaImagemUrl: caderno,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DO DIÁRIO",
          "",
          "Aprenda a REGISTRAR",
          "e CONCLUIR descobertas.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: caderno, nome: "Diário do Cientista" },
        { imagemUrl: lapis, nome: "Lápis pra anotar" },
        { imagemUrl: desenho, nome: "Desenhos das descobertas" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre como REGISTRAR e CONCLUIR o que a gente descobriu.",
          imagemUrl: caderno,
        },
        { texto: "Sobre como jogar bola.", imagemUrl: bola },
        { texto: "Sobre bananas amarelas.", imagemUrl: banana },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Boa! Caderno + lápis + desenho = REGISTRAR as descobertas.",
      feedbackErro:
        "As pistas são um caderno, um lápis e um desenho. Isso é REGISTRAR.",
    },
  },

  momento03_vocabulario: {
    instrucao: "As duas últimas palavras do Kit do Jovem Cientista!",
    cards: [
      {
        palavra: "registrar",
        explicacao:
          "É ANOTAR ou DESENHAR no diário tudo o que a gente descobriu. Sem registro, o cientista esquece.",
        exemplo:
          "Brilha REGISTROU no diário que a moeda afundou e a madeira flutuou.",
        imagemUrl: caderno,
      },
      {
        palavra: "conclusão",
        explicacao:
          "É o FIM da investigação. A gente olha todos os resultados e escreve o que APRENDEU.",
        exemplo:
          "A CONCLUSÃO de Brilha: 'O que faz um objeto flutuar não é o tamanho, é o MATERIAL.'",
        imagemUrl: livro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com Aurora e descubra por que o diário é tão importante.",
    leitura: {
      titulo: "O poder do Diário do Cientista",
      imagemUrl: caderno,
      legendaImagem: "Um bom diário guarda desenhos, palavras e resultados.",
      destacar: ["registrar", "diário", "conclusão", "compartilhar", "descoberta"],
      paragrafos: [
        "Depois do experimento, o cientista precisa REGISTRAR tudo no DIÁRIO. Pode escrever com palavras, fazer desenhos ou colar fotos.",
        "No fim, chega a CONCLUSÃO: aquela frase que resume o que a gente aprendeu. Ex: 'Descobri que a madeira flutua, mesmo grande.'",
        "Registrar serve pra duas coisas: pra NÃO ESQUECER e pra COMPARTILHAR a DESCOBERTA com outras pessoas. É assim que a ciência cresce!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Respostas no texto — pode voltar!",
    perguntas: [
      {
        pergunta: "Depois do experimento, o cientista faz o quê?",
        opcoes: ["Dorme", "REGISTRA no diário", "Corre"],
        correta: 1,
        feedbackAcerto: "🎉 Registra!",
        feedbackErro: "1º parágrafo: 'REGISTRAR tudo no DIÁRIO'.",
        ondeEstaNoTexto: "…precisa REGISTRAR tudo no DIÁRIO.",
      },
      {
        pergunta: "O que é CONCLUSÃO?",
        opcoes: [
          "Uma pergunta nova",
          "A frase que resume o que aprendeu",
          "Um bicho",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa!",
        feedbackErro: "2º parágrafo: 'aquela frase que resume o que a gente aprendeu'.",
        ondeEstaNoTexto: "…aquela frase que resume o que a gente aprendeu.",
      },
      {
        pergunta: "Registrar serve pra quantas coisas?",
        opcoes: ["Uma", "DUAS", "Dez"],
        correta: 1,
        feedbackAcerto:
          "🎉 Duas: pra não esquecer E pra compartilhar.",
        feedbackErro: "Último parágrafo: 'serve pra DUAS coisas'.",
        ondeEstaNoTexto: "Registrar serve pra duas coisas…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Volte na historinha do começo.",
    perguntas: [
      {
        pergunta: "Por que Brilha não lembrava do resultado?",
        opcoes: [
          "Porque estava dormindo",
          "Porque NÃO REGISTROU no diário",
          "Porque não fez o experimento",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Sem registro, a gente esquece.",
        feedbackErro:
          "Volte no começo: Brilha não anotou, por isso esqueceu.",
      },
      {
        pergunta: "O que Aurora abriu pra Brilha?",
        opcoes: ["Um livro de histórias", "Um DIÁRIO", "Uma janela"],
        correta: 1,
        feedbackAcerto: "🎉 O Diário do Cientista!",
        feedbackErro: "Volte: 'Aurora abriu um caderno lindo… DIÁRIO'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Agora que você aprendeu TUDO, coloque em ordem os 5 passos do MÉTODO CIENTÍFICO.",
    bloco: {
      instrucao: "1º observar → 2º perguntar → 3º hipótese → 4º experimentar → 5º registrar.",
      itens: [
        { id: "s1", texto: "1º OBSERVAR o mundo com atenção.", imagemUrl: lupa },
        { id: "s2", texto: "2º PERGUNTAR: por quê?", imagemUrl: coruja },
        { id: "s3", texto: "3º HIPÓTESE: 'Acho que…'", imagemUrl: cientista },
        { id: "s4", texto: "4º EXPERIMENTAR pra testar.", imagemUrl: garrafa },
        { id: "s5", texto: "5º REGISTRAR e concluir no diário.", imagemUrl: caderno },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 PERFEITO! Você aprendeu o MÉTODO CIENTÍFICO completo!",
      feedbackErro:
        "Ordem: OBSERVAR → PERGUNTAR → HIPÓTESE → EXPERIMENTAR → REGISTRAR.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho a página do diário de Brilha.",
    leitura: {
      titulo: "A página do diário de Brilha",
      imagemUrl: caderno,
      destacar: ["hipótese", "experimento", "resultado", "conclusão"],
      paragrafos: [
        "DATA: 12 de março. HIPÓTESE: 'Tudo que é grande afunda'. EXPERIMENTO: coloquei 4 objetos na bacia. RESULTADO: a madeira grande FLUTUOU e a moeda pequena AFUNDOU.",
        "CONCLUSÃO: 'A minha hipótese estava ERRADA! O que decide não é o tamanho, é o MATERIAL. Descobri uma coisa nova!'",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual foi o RESULTADO no diário?",
        opcoes: [
          "Todos os objetos afundaram",
          "MADEIRA flutuou, MOEDA afundou",
          "Tudo flutuou",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Certo!",
        feedbackErro:
          "1º parágrafo: 'a madeira grande FLUTUOU e a moeda pequena AFUNDOU'.",
        ondeEstaNoTexto: "…a madeira grande FLUTUOU e a moeda pequena AFUNDOU.",
      },
      {
        pergunta: "Qual foi a CONCLUSÃO de Brilha?",
        opcoes: [
          "Que o tamanho é o que importa",
          "Que o MATERIAL é o que decide",
          "Que a bacia é pequena",
        ],
        correta: 1,
        feedbackAcerto: "🎉 O material é o que importa!",
        feedbackErro:
          "Olhe a CONCLUSÃO: 'O que decide não é o tamanho, é o MATERIAL'.",
        ondeEstaNoTexto: "…não é o tamanho, é o MATERIAL.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "📒 Monte a página do diário",
    instrucao:
      "Um bom diário tem partes CERTAS pra escrever. Marque só o que DEVE estar num diário de cientista.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "O que vai no diário?",
      bloco: {
        instrucao:
          "Toque no que faz parte de um diário científico bem feito.",
        pergunta: "O que DEVE estar no Diário do Cientista?",
        opcoes: [
          { id: "d1", texto: "A HIPÓTESE que testou", imagemUrl: cientista, correto: true },
          { id: "d2", texto: "O RESULTADO do experimento", imagemUrl: caderno, correto: true },
          { id: "d3", texto: "DESENHOS do que observou", imagemUrl: desenho, correto: true },
          { id: "d4", texto: "A CONCLUSÃO final", imagemUrl: livro, correto: true },
          { id: "d5", texto: "Fofoca sobre os amigos", imagemUrl: banana, correto: false },
          { id: "d6", texto: "Programa de TV que assistiu", imagemUrl: tv, correto: false },
        ],
        feedbackAcerto:
          "🎉 Perfeito! Hipótese, resultado, desenhos e conclusão. Sem fofoca, sem TV.",
        feedbackErro:
          "Diário CIENTÍFICO é só sobre o experimento: hipótese, resultado, desenhos e conclusão.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "REGISTRAR = anotar ou desenhar no diário.",
      "CONCLUSÃO = frase que resume o que aprendeu.",
      "Sem registro, o cientista ESQUECE.",
      "Registrar serve pra NÃO ESQUECER e pra COMPARTILHAR.",
      "Método científico completo: OBSERVAR → PERGUNTAR → HIPÓTESE → EXPERIMENTAR → REGISTRAR.",
    ],
    miniDesafio: {
      pergunta: "Se o cientista NÃO registrar, o que acontece?",
      opcoes: [
        "Ganha uma medalha",
        "ESQUECE as descobertas",
        "Fica famoso",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Sem registro, tudo se perde.",
      feedbackErro:
        "Sem diário, a gente ESQUECE e ninguém mais fica sabendo.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Onde o cientista registra tudo?",
        opcoes: ["Na parede", "No DIÁRIO", "Na areia"],
        opcoesImagens: [pedra, caderno, folha],
        correta: 1,
        feedbackAcerto: "🎉 Diário!",
        feedbackErro: "Sempre no Diário do Cientista.",
      },
      {
        pergunta: "O que é CONCLUSÃO?",
        opcoes: [
          "Uma pergunta nova",
          "A frase que resume o que APRENDEU",
          "Um teste novo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 A frase final que resume!",
        feedbackErro: "CONCLUSÃO = o que aprendeu no fim.",
      },
      {
        pergunta: "Por que registrar é importante?",
        opcoes: [
          "Pra fazer bagunça",
          "Pra NÃO ESQUECER e COMPARTILHAR",
          "Pra ninguém saber",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Não esquecer e compartilhar!",
        feedbackErro:
          "Registro serve pra guardar e pra dividir com outros.",
      },
      {
        pergunta: "Qual é o ÚLTIMO passo do método científico?",
        opcoes: ["Observar", "Registrar e concluir", "Perguntar"],
        correta: 1,
        feedbackAcerto: "🎉 Registrar!",
        feedbackErro:
          "A ordem é: observar → perguntar → hipótese → experimentar → REGISTRAR.",
      },
      {
        pergunta:
          "Brilha escreveu no diário: 'Descobri que a madeira flutua'. Isso é o quê?",
        opcoes: ["Uma pergunta", "Uma CONCLUSÃO", "Um material"],
        opcoesImagens: [coruja, livro, folha],
        correta: 1,
        feedbackAcerto: "🎉 Conclusão!",
        feedbackErro:
          "Frase que resume o que aprendeu = CONCLUSÃO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📒 Meu primeiro Diário do Cientista",
    materiais: [
      "1 caderno pequeno OU folhas grampeadas",
      "Lápis, canetinhas e giz de cera",
      "Sua última descoberta (pode ser das aulas anteriores!)",
    ],
    passos: [
      "Escolha uma descoberta legal que você fez.",
      "Na 1ª página escreva: DATA, HIPÓTESE e EXPERIMENTO.",
      "Faça um DESENHO grande do que aconteceu.",
      "Escreva o RESULTADO em uma linha.",
      "Termine com uma CONCLUSÃO: 'Eu aprendi que…'",
      "Mostre pra família e guarde bem — é o seu 1º diário de cientista!",
    ],
    registro:
      "Uma foto da 1ª página do seu Diário do Cientista completa.",
  },

  recompensa: {
    xp: 150,
    moedas: 80,
    medalha: "Mestre do Método Científico",
  },
};
