import type { AulaPortuguesV4 } from "../../types";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as esquilo } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";

/**
 * Aula 5 — Minha Escrita e a Escrita Certa
 * -------------------------------------------------------------
 * A criança compara a própria escrita com a escrita convencional,
 * percebendo semelhanças e diferenças (letra que faltou, letra trocada,
 * letra a mais) — sem medo de errar: comparar é parte de aprender.
 *
 * BNCC: EF01LP03 · EF01LP02
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-minha-escrita-e-a-certa",
  titulo: "Minha Escrita e a Escrita Certa",
  iconeTrilha: "🔍",
  bncc: ["EF01LP03", "EF01LP02"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A lupa do detetive Brilha",
    historia:
      "Brilha virou detetive de palavras! Ele escreve do jeito que acha, depois compara com a escrita certa usando a lupa. Não é bronca: é descoberta. Bora usar a lupa com ele?",
    imagemUrl: esquilo,
  },

  momento02_previsao: {
    instrucao: "Olhe as duas escritas da mesma palavra.",
    bloco: {
      titulo: "SAPO ou SAPU?",
      capaImagemUrl: sapo,
      recado: {
        rotulo: "Caderno",
        icone: "🔍",
        linhas: ["Escrevi: SAPU", "Escrita certa: SAPO"],
        estilo: "papel",
      },
      pergunta: "O que mudou entre as duas escritas?",
      hipoteses: [
        { texto: "A última letra: escrevi U no lugar do O.", imagemUrl: sapo },
        { texto: "Mudou a primeira letra.", imagemUrl: bola },
        { texto: "Está tudo igual.", imagemUrl: casa },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Só a última letra ficou diferente: U no lugar do O.",
      feedbackErro: "Compare letra por letra: S-A-P-U e S-A-P-O. A diferença está no fim.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras de detetive.",
    cards: [
      {
        palavra: "comparar",
        explicacao: "Olhar duas coisas lado a lado para ver o que é igual e o que é diferente.",
        exemplo: "Comparei minha palavra com a palavra do livro.",
        imagemUrl: livro,
      },
      {
        palavra: "escrita certa",
        explicacao: "É como a palavra aparece nos livros e cartazes: a forma convencional.",
        exemplo: "A escrita certa é SAPO, com O no final.",
        imagemUrl: sapo,
      },
      {
        palavra: "conferir",
        explicacao: "Revisar o que eu escrevi para ver se falta ou sobra alguma letra.",
        exemplo: "Confiro minha lista antes de entregar.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Letra por letra, com a lupa",
    instrucao: "Ouça cada exemplo e veja onde estava a diferença.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "SAPU → SAPO.", explicacao: "Trocou a última letra: U virou O." },
          { texto: "BOA → BOLA.", explicacao: "Faltava uma letra no meio: o L." },
          { texto: "CASSA → CASA.", explicacao: "Tinha uma letra a mais: sobrou um S." },
        ],
      },
      {
        tipo: "maiusculaMinuscula",
        pares: [
          { maiuscula: "S", minuscula: "s", exemplo: "SAPO / sapo" },
          { maiuscula: "B", minuscula: "b", exemplo: "BOLA / bola" },
          { maiuscula: "C", minuscula: "c", exemplo: "CASA / casa" },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto e veja o que o detetive descobriu.",
    leitura: {
      titulo: "O caderno do Téo",
      imagemUrl: menino,
      legendaImagem: "Téo confere o que escreveu",
      destacar: ["comparou", "faltava", "certo"],
      paragrafos: [
        "Téo escreveu BOA no caderno, mas queria escrever BOLA.",
        "Ele comparou com a palavra do livro e viu: faltava a letra L.",
        "Téo arrumou e ficou certo: BOLA.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que Téo escreveu primeiro?",
        opcoes: ["BOLA", "BOA", "BOTA"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ele escreveu BOA.",
        feedbackErro: "Releia a primeira frase do texto.",
        ondeEstaNoTexto: "Téo escreveu BOA no caderno.",
      },
      {
        pergunta: "Qual letra estava faltando?",
        opcoes: ["A letra L", "A letra M", "A letra P"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Faltava o L de BOLA.",
        feedbackErro: "Está na segunda frase: 'faltava a letra L'.",
        ondeEstaNoTexto: "Ele comparou com a palavra do livro e viu: faltava a letra L.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora você é o detetive.",
    perguntas: [
      {
        pergunta: "Escrevi PATU. A escrita certa é PATO. O que aconteceu?",
        opcoes: ["Faltou uma letra", "Troquei uma letra", "Sobrou uma letra"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Troquei o O pelo U no final.",
        feedbackErro: "As duas palavras têm 4 letras: então nenhuma faltou. Uma foi TROCADA.",
      },
      {
        pergunta: "Escrevi MAA. A escrita certa é MALA. O que aconteceu?",
        opcoes: ["Faltou uma letra", "Sobrou uma letra", "Nada mudou"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Faltou o L do meio.",
        feedbackErro: "Conte as letras: MAA tem 3, MALA tem 4. Faltou uma.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque os passos do detetive na ordem certa.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "s1", texto: "Escrevo do meu jeito.", imagemUrl: lapis },
        { id: "s2", texto: "Comparo com a escrita certa.", imagemUrl: livro },
        { id: "s3", texto: "Arrumo o que estava diferente.", imagemUrl: esquilo },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 Perfeito! Escrever, comparar e arrumar.",
      feedbackErro: "Primeiro eu escrevo, depois comparo, depois arrumo.",
    },
  },

  momento_minijogo: {
    titulo: "Caça à Escrita Certa",
    instrucao: "Selecione as palavras que estão escritas do jeito certo.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Certo ou diferente?",
      bloco: {
        instrucao: "Toque só nas palavras escritas corretamente.",
        pergunta: "Quais palavras estão certas?",
        opcoes: [
          { id: "o1", texto: "SAPO", correto: true },
          { id: "o2", texto: "BOA (para dizer bola)", correto: false },
          { id: "o3", texto: "CASA", correto: true },
          { id: "o4", texto: "PATU", correto: false },
        ],
        feedbackAcerto: "🎉 Isso! SAPO e CASA estão certas. BOA e PATU precisam de conserto.",
        feedbackErro: "Leia devagar, letra por letra, e compare com a palavra do livro.",
      },
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A lista da Mia",
      imagemUrl: menina,
      destacar: ["lista", "conferiu"],
      paragrafos: ["Mia fez uma lista: BOLA, CASA, SAPU.", "Ela conferiu e arrumou: SAPO."],
    },
    perguntas: [
      {
        pergunta: "Qual palavra Mia arrumou?",
        opcoes: ["BOLA", "CASA", "SAPO"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! Ela arrumou SAPU para SAPO.",
        feedbackErro: "Releia a segunda frase.",
        ondeEstaNoTexto: "Ela conferiu e arrumou: SAPO.",
      },
      {
        pergunta: "O que Mia fez antes de arrumar?",
        opcoes: ["Conferiu", "Dormiu", "Apagou tudo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Primeiro ela conferiu.",
        feedbackErro: "No texto: 'Ela conferiu e arrumou'.",
        ondeEstaNoTexto: "Ela conferiu e arrumou: SAPO.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Escrever, comparar e arrumar",
    instrucao: "Escreva do seu jeito, depois compare com o modelo e conserte.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "L", exemplo: "L de BOLA", dicaTracado: "desce e faz o pezinho" },
          { letra: "O", exemplo: "O de SAPO", dicaTracado: "uma roda inteira" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "SAPO", silabas: ["SA", "PO"], distratores: ["PU", "MI"], dica: "Pula na lagoa.", imagemUrl: sapo },
          { palavra: "BOLA", silabas: ["BO", "LA"], distratores: ["BA", "TE"], dica: "A gente chuta.", imagemUrl: bola },
          { palavra: "CASA", silabas: ["CA", "SA"], distratores: ["SSA", "TO"], dica: "É onde a gente mora.", imagemUrl: casa },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Minha lista de detetive",
        comando: "Escreva 3 palavras do seu jeito. Depois compare com o modelo e conserte o que ficou diferente.",
        linhas: 3,
        modelo: ["SAPO", "BOLA", "CASA"],
        checklist: [
          "Li minha palavra letra por letra?",
          "Comparei com o modelo?",
          "Faltou, sobrou ou trocou alguma letra?",
        ],
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Escrever do meu jeito é o começo — depois eu confiro.",
      "Comparar é olhar letra por letra: o que é igual e o que é diferente.",
      "Os 3 tipos de diferença: letra que FALTOU, letra que SOBROU e letra TROCADA.",
      "Errar e arrumar faz parte de aprender a escrever.",
    ],
    miniDesafio: {
      pergunta: "Escrevi MAA e o certo é MALA. O que houve?",
      opcoes: ["Faltou uma letra", "Sobrou uma letra", "Troquei uma letra"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Faltou o L.",
      feedbackErro: "MAA tem menos letras que MALA: faltou uma.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual palavra está escrita do jeito certo?",
        opcoes: ["SAPU", "SAPO", "SSAPO", "SAP"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "A escrita certa é S-A-P-O.",
      },
      {
        pergunta: "2/5 — Escrevi BOA para dizer BOLA. O que aconteceu?",
        opcoes: ["Faltou o L", "Sobrou o L", "Troquei o B", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "BOLA tem o L no meio; em BOA ele faltou.",
      },
      {
        pergunta: "3/5 — Escrevi CASSA para dizer CASA. O que aconteceu?",
        opcoes: ["Faltou uma letra", "Sobrou uma letra", "Troquei o C", "Está certo"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Sobrou um S.",
        feedbackErro: "CASA tem um S só; em CASSA sobrou um.",
      },
      {
        pergunta: "4/5 — Comparar minha escrita com a certa serve para...",
        opcoes: ["Ganhar bronca", "Descobrir o que arrumar", "Apagar tudo", "Desenhar"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Serve para aprender e arrumar.",
        feedbackErro: "Comparar é ferramenta de detetive: mostra o que consertar.",
      },
      {
        pergunta: "5/5 — Qual foi a palavra que Mia arrumou na lista?",
        opcoes: ["BOLA", "CASA", "SAPO", "LUA"],
        correta: 2,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "No texto: 'Ela conferiu e arrumou: SAPO'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Detetive de palavras em casa",
    materiais: ["Papel e lápis", "Uma embalagem ou livro com palavras"],
    passos: [
      "1) A criança escreve 3 palavras do jeito que acha.",
      "2) Procurem essas palavras numa embalagem ou livro.",
      "3) Comparem letra por letra, sem bronca.",
      "4) A criança arruma o que estava diferente e lê em voz alta.",
    ],
    registro: "📸 Uma foto do papel com a escrita antes e depois de arrumar.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
