import type { AulaPortuguesV4 } from "../../types";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 4 — Ã, ÃO, AM: os sons do nariz
 * -------------------------------------------------------------
 * Unidade 2 · Laboratório da Ortografia
 * Foco: til (~) marca som nasal; plural de palavras terminadas em
 * -ÃO pode virar -ÕES, -ÃES ou -ÃOS; e a diferença entre a terminação
 * verbal -AM (passado: eles falaram) e -ÃO (futuro: eles falarão).
 * BNCC: EF03LP01, EF03LP05, EF03LP06
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-sons-do-nariz",
  titulo: "Ã, ÃO, AM: os sons do nariz",
  iconeTrilha: "👃",
  bncc: ["EF03LP01", "EF03LP05", "EF03LP06"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O bilhete que balançou o clube",
    historia:
      "Aurora leu em voz alta um recado grudado na porta: 'Os passarinhos cantarão amanhã, mas ontem eles já cantaram.' — Espera — disse Brilha. — CANTARÃO e CANTARAM quase parecem a mesma palavra, mas uma fala de ontem e outra de amanhã! — Exato — sorriu Aurora. — Esse til pendurado no A muda tudo. Vamos investigar o som do nariz?",
    imagemUrl: coruja,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de investigar o caso do til.",
    bloco: {
      titulo: "O Caso do Til Pendurado",
      capaImagemUrl: balao,
      pistas: [
        { imagemUrl: balao, nome: "Um balão" },
        { imagemUrl: passaro, nome: "Um passarinho" },
      ],
      pergunta: "Sobre o que os detetives vão investigar?",
      hipoteses: [
        { texto: "Quando usar o til (~) e a diferença entre -AM e -ÃO no final das palavras.", imagemUrl: balao },
        { texto: "Como os passarinhos constroem ninhos.", imagemUrl: passaro },
        { texto: "Por que o vento balança os balões.", imagemUrl: balao },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! O caso é sobre o til e a diferença entre -AM e -ÃO.",
      feedbackErro: "Releia: 'esse til pendurado no A muda tudo... vamos investigar o som do nariz?'.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça duas palavras-testemunha do caso.",
    cards: [
      {
        palavra: "balão",
        explicacao: "O til (~) em cima do A avisa: esse som sai pelo nariz. No plural, BALÃO vira BALÕES.",
        exemplo: "O balão azul subiu bem alto.",
        imagemUrl: balao,
      },
      {
        palavra: "cantaram",
        explicacao: "Terminação -AM no final do verbo indica que a ação já aconteceu (passado): eles já cantaram.",
        exemplo: "Os passarinhos cantaram ontem de manhã.",
        imagemUrl: passaro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora explicou o segredo do til para o clube. Leia com atenção.",
    leitura: {
      titulo: "O Som que Sai Pelo Nariz",
      imagemUrl: balao,
      legendaImagem: "O til é como uma pequena onda sobre a letra",
      destacar: ["til", "BALÃO", "-ÕES", "-ÃES", "-ÃOS", "cantaram", "cantarão"],
      paragrafos: [
        "Aurora explicou: 'O til (~) é um sinal que fica em cima do A ou do O e avisa: esse som passa pelo nariz, é nasal. Por isso escrevemos MAÇÃ, IRMÃ e BALÃO, sempre com aquele tracinho tremido.'",
        "'Quando uma palavra termina em -ÃO e vai para o plural, pode virar de três jeitos: BALÃO → BALÕES, o mais comum; PÃO → PÃES, com E; e a mão → mãos, que só ganha um S, ficando MÃOS. Não existe uma regra única — o bom detetive vai decorando palavra por palavra.'",
        "'Agora, muito cuidado com os verbos! ELES CANTARAM, com AM, é uma coisa que JÁ aconteceu — passado. ELES CANTARÃO, com ÃO e til, é uma coisa que AINDA vai acontecer — futuro. A diferença de uma letrinha muda o tempo inteiro da frase!'",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Para que serve o til (~), segundo o texto?",
        opcoes: ["Avisa que o som é nasal, passa pelo nariz", "Deixa a palavra maior", "Indica que a palavra é um verbo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O til avisa que o som é nasal.",
        feedbackErro: "Releia: 'esse som passa pelo nariz, é nasal'.",
        ondeEstaNoTexto: "esse som passa pelo nariz, é nasal.",
      },
      {
        pergunta: "Qual é o plural de PÃO, segundo o texto?",
        opcoes: ["PÃOS", "PÃES", "PÃONS"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! PÃO no plural vira PÃES.",
        feedbackErro: "O texto diz: 'PÃO → PÃES, com E'.",
        ondeEstaNoTexto: "PÃO → PÃES, com E.",
      },
      {
        pergunta: "O que significa a frase 'ELES CANTARAM'?",
        opcoes: ["Uma coisa que já aconteceu", "Uma coisa que ainda vai acontecer", "Uma coisa que está acontecendo agora"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! CANTARAM, com AM, é passado.",
        feedbackErro: "Releia: 'ELES CANTARAM, com AM, é uma coisa que JÁ aconteceu — passado'.",
        ondeEstaNoTexto: "ELES CANTARAM, com AM, é uma coisa que JÁ aconteceu — passado.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem investiga e onde acontece a cena?",
    perguntas: [
      {
        pergunta: "Quem leu o recado grudado na porta?",
        opcoes: ["Aurora", "Brilha", "Um passarinho"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Foi Aurora quem leu o recado.",
        feedbackErro: "Releia a história: 'Aurora leu em voz alta um recado grudado na porta'.",
      },
      {
        pergunta: "O que estava escrito no recado?",
        opcoes: [
          "Que os passarinhos cantarão amanhã e já cantaram ontem",
          "Que vai chover no clube",
          "Que a ponte quebrou",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! O recado falava dos passarinhos cantando ontem e amanhã.",
        feedbackErro: "A motivação diz: 'Os passarinhos cantarão amanhã, mas ontem eles já cantaram'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As descobertas se embaralharam. Ordene a investigação.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Aurora lê o recado com CANTARÃO e CANTARAM.", imagemUrl: passaro },
        { id: "p2", texto: "Aurora explica o til, o plural de -ÃO e a diferença entre -AM e -ÃO.", imagemUrl: coruja },
        { id: "p3", texto: "O clube entende que uma letrinha muda o tempo da frase inteira.", imagemUrl: relogio },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você reconstruiu a investigação na ordem certa.",
      feedbackErro: "Pense: primeiro a PISTA (o recado), depois a EXPLICAÇÃO, e por último a CONCLUSÃO.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do caderno de Brilha.",
    leitura: {
      titulo: "Mais Palavras do Nariz",
      imagemUrl: estrela,
      destacar: ["leão", "leões", "mão", "mãos", "falarão", "falaram"],
      paragrafos: [
        "Brilha testou mais palavras: LEÃO no plural vira LEÕES, com til e ES, igual BALÃO. Já MÃO, no plural, vira apenas MÃOS, só com S no final, sem trocar o til.",
        "Brilha também percebeu: 'Amanhã eles FALARÃO' fala de algo futuro, e 'ontem eles FALARAM' fala de algo que já passou. A diferença entre -ÃO e -AM decide se a ação já aconteceu ou ainda vai acontecer.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o plural de LEÃO, segundo o texto?",
        opcoes: ["LEÕES", "LEÃOS", "LEÃES"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! LEÃO vira LEÕES, como BALÃO vira BALÕES.",
        feedbackErro: "Releia: 'LEÃO no plural vira LEÕES, com til e ES, igual BALÃO'.",
        ondeEstaNoTexto: "LEÃO no plural vira LEÕES, com til e ES, igual BALÃO.",
      },
      {
        pergunta: "'Amanhã eles FALARÃO' fala de quê?",
        opcoes: ["Algo que ainda vai acontecer (futuro)", "Algo que já aconteceu (passado)", "Algo que está acontecendo agora"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! FALARÃO, com ÃO, é futuro.",
        feedbackErro: "O texto diz: '\"Amanhã eles FALARÃO\" fala de algo futuro'.",
        ondeEstaNoTexto: "\"Amanhã eles FALARÃO\" fala de algo futuro.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Classifique os sons do nariz",
    instrucao: "Arraste cada palavra para o grupo certo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "O Cofre do Til",
      bloco: {
        instrucao: "Veja se a palavra fala do passado, do futuro ou é um plural de -ÃO.",
        itens: [
          { id: "i1", texto: "cantaram (passado)", alvoId: "am" },
          { id: "i2", texto: "cantarão (futuro)", alvoId: "ao" },
          { id: "i3", texto: "balões", alvoId: "plural" },
          { id: "i4", texto: "falaram (passado)", alvoId: "am" },
          { id: "i5", texto: "falarão (futuro)", alvoId: "ao" },
          { id: "i6", texto: "pães", alvoId: "plural" },
          { id: "i7", texto: "brincaram (passado)", alvoId: "am" },
          { id: "i8", texto: "mãos", alvoId: "plural" },
        ],
        alvos: [
          { id: "am", nome: "-AM: já aconteceu (passado)", imagemUrl: livro },
          { id: "ao", nome: "-ÃO: ainda vai acontecer (futuro)", imagemUrl: relogio },
          { id: "plural", nome: "Plural de -ÃO", imagemUrl: livros },
        ],
        feedbackAcerto: "🎉 Cofre aberto! Você domina os sons do nariz.",
        feedbackErro: "Pense de novo: -AM é passado, -ÃO é futuro, e as palavras com til viram plural de jeitos diferentes.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "REGRA: o til (~) marca som nasal, como em MAÇÃ, IRMÃ e BALÃO.",
      "REGRA: o plural de -ÃO pode ser -ÕES (balão→balões), -ÃES (pão→pães) ou -ÃOS (mão→mãos) — vai de palavra em palavra.",
      "REGRA: -AM no final do verbo é passado (cantaram); -ÃO no final do verbo é futuro (cantarão).",
    ],
    miniDesafio: {
      pergunta: "Qual a diferença entre 'eles cantaram' e 'eles cantarão'?",
      opcoes: [
        "CANTARAM é passado (já aconteceu) e CANTARÃO é futuro (vai acontecer)",
        "As duas palavras significam a mesma coisa",
        "CANTARAM é futuro e CANTARÃO é passado",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Essa é a regra-chave da aula.",
      feedbackErro: "Releia a explicação da Aurora: -AM é passado, -ÃO é futuro.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Para que serve o til (~)?",
        opcoes: ["Marcar som nasal", "Deixar a letra maiúscula", "Separar sílabas"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O til marca o som nasal.",
        feedbackErro: "Lembre: o til avisa que o som passa pelo nariz.",
      },
      {
        pergunta: "2/5 — Qual é o plural de BALÃO?",
        opcoes: ["BALÃOS", "BALÕES", "BALÃES"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! BALÃO vira BALÕES.",
        feedbackErro: "BALÃO segue o padrão mais comum: troca -ÃO por -ÕES.",
      },
      {
        pergunta: "3/5 — 'Eles cantarAM ontem' fala de quê?",
        opcoes: ["Passado", "Futuro", "Presente"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! -AM indica que já aconteceu.",
        feedbackErro: "Lembre a regra: -AM no final do verbo é passado.",
      },
      {
        pergunta: "4/5 — 'Eles cantarÃO amanhã' fala de quê?",
        opcoes: ["Passado", "Futuro", "Presente"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! -ÃO indica que ainda vai acontecer.",
        feedbackErro: "Lembre a regra: -ÃO no final do verbo é futuro.",
      },
      {
        pergunta: "5/5 — Qual é o plural de MÃO?",
        opcoes: ["MÃOS", "MÕES", "MÃES"],
        correta: 0,
        feedbackAcerto: "🎉 Caso encerrado! MÃO no plural fica MÃOS, só com S.",
        feedbackErro: "MÃO é uma exceção: no plural, só ganha S, virando MÃOS.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada aos sons do nariz",
    materiais: ["Papel e lápis", "Livros, revistas ou embalagens da casa"],
    passos: [
      "1) Com um adulto, procurem 6 palavras com til (~) ou terminadas em -ÃO/-AM.",
      "2) Separem em três colunas: 'Plural de -ÃO', 'Verbo no passado (-AM)' e 'Verbo no futuro (-ÃO)'.",
      "3) Para cada palavra, digam em voz alta se ela fala de algo que já aconteceu ou que ainda vai acontecer.",
      "4) Confiram juntos se a classificação bateu certinho.",
    ],
    registro: "📝 Uma foto da tabela com as três colunas preenchidas.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
    medalha: "Selo do Escriba Preciso",
  },
};
