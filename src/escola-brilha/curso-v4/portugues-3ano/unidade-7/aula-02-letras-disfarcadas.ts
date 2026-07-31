import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";

/**
 * Unidade 7 · Aula 2 — O Caso das Letras Disfarçadas
 * -------------------------------------------------------------
 * Fase 5 (ortografia) do 3º ano: G/GU, R/RR e os dígrafos LH, NH,
 * CH — duas letras que fazem UM som só.
 *
 * BNCC: EF03LP01, EF03LP03
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-letras-disfarcadas",
  titulo: "O Caso das Letras Disfarçadas",
  iconeTrilha: "🕶️",
  bncc: ["EF03LP01", "EF03LP03"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Duas letras, um só som",
    historia:
      "— Detetive, chegou um caso de disfarce duplo — avisou Aurora. — Existem letras que andam SEMPRE de mãos dadas e, juntas, fazem um único som: LH, NH e CH. E existe o G, que muda de som conforme a vogal que vem depois. Hoje vamos desmascarar esses disfarces.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de abrir a pasta do caso.",
    bloco: {
      titulo: "O Caso das Letras Disfarçadas",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: chuva, nome: "CHUVA na janela" },
        { imagemUrl: gato, nome: "Um gatinho no telhado" },
      ],
      pergunta: "Qual é o mistério de hoje?",
      hipoteses: [
        { texto: "Letras que se juntam em duplas e fazem um som só.", imagemUrl: lupa },
        { texto: "Um gato que aprendeu a escrever.", imagemUrl: gato },
        { texto: "Uma tempestade que apagou o caderno.", imagemUrl: chuva },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🔍 Isso! CHUVA e GATINHO trazem duplas de letras: CH e NH.",
      feedbackErro: "Olhe as palavras das pistas: CHUVA e gatiNHo. O que elas têm em comum?",
      dica: "Repare nas letras do meio das palavras das pistas.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras técnicas do detetive das letras.",
    cards: [
      {
        palavra: "dígrafo",
        explicacao: "São duas letras juntas que produzem UM único som.",
        exemplo: "CH em CHAVE, LH em FILHO, NH em CAMINHO.",
        imagemUrl: livro,
      },
      {
        palavra: "disfarce",
        explicacao: "É quando algo aparece com outra cara para não ser reconhecido.",
        exemplo: "O G se disfarça: em GATO soa /g/, em GELO soa /j/.",
        imagemUrl: lupa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Desmascarando os disfarces",
    instrucao: "Leia a regra, veja os exemplos destacados e resolva os desafios de lacuna.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "LH, NH e CH: duas letras, um som só",
        explicacao:
          "Essas duplas nunca se separam. LH soa como em FILHO, NH como em CAMINHO e CH como em CHAVE. Ao separar em sílabas, a dupla fica inteira: FI-LHO, CA-MI-NHO, CHA-VE.",
        exemplos: [
          { palavra: "filho", destaque: "lh", motivo: "LH: um som só, nunca L + H separados." },
          { palavra: "caminho", destaque: "nh", motivo: "NH: um som só." },
          { palavra: "chave", destaque: "ch", motivo: "CH tem som de /xis/." },
        ],
        desafios: [
          {
            molde: "mo__o",
            opcoes: ["lh", "nh", "ch"],
            correta: 0,
            frase: "O molho do macarrão está pronto.",
            feedbackErro: "O som é o de FILHO: dupla LH.",
          },
          {
            molde: "__uva",
            opcoes: ["ch", "lh", "nh"],
            correta: 0,
            frase: "A chuva bateu na janela.",
            feedbackErro: "Som de /xis/ no começo: dupla CH.",
          },
          {
            molde: "ni__o",
            opcoes: ["nh", "lh", "ch"],
            correta: 0,
            frase: "O ninho do pássaro está na árvore.",
            feedbackErro: "O som é o de CAMINHO: dupla NH.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "G e GU: o G muda de som conforme a vogal",
        explicacao:
          "Antes de A, O e U o G soa forte: GATO, GOLA, GUARDA. Antes de E e I ele soa /j/: GELO, GIRAFA. Para manter o som forte antes de E e I, entra o U silencioso: GUERRA, GUITARRA — o U aparece, mas não é falado.",
        exemplos: [
          { palavra: "gato", destaque: "g", motivo: "G antes de A: som forte /g/." },
          { palavra: "gelo", destaque: "g", motivo: "G antes de E: som /j/." },
          { palavra: "guitarra", destaque: "gu", motivo: "GU antes de I: som forte, U não é falado." },
        ],
        desafios: [
          {
            molde: "__erra",
            opcoes: ["gu", "g", "j"],
            correta: 0,
            frase: "O livro contava uma história de guerra.",
            feedbackErro: "Som forte antes de E precisa do U: GU.",
          },
          {
            molde: "__irafa",
            opcoes: ["g", "gu", "j"],
            correta: 0,
            frase: "A girafa alcança as folhas altas.",
            feedbackErro: "Aqui o som é /j/ antes de I: escreve-se com G.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "R ou RR: depende do lugar na palavra",
        explicacao:
          "No começo da palavra, um R já tem som forte: RATO, RUA. Entre vogais, o som forte precisa de RR: CARRO, TERRA. Entre vogais com um R só, o som fica brando: CARA, CORO.",
        exemplos: [
          { palavra: "rato", destaque: "r", motivo: "No começo: R sozinho já é forte." },
          { palavra: "carro", destaque: "rr", motivo: "Som forte entre vogais: RR." },
          { palavra: "cara", destaque: "r", motivo: "Som brando entre vogais: um R." },
        ],
        desafios: [
          {
            molde: "te__a",
            opcoes: ["rr", "r"],
            correta: 0,
            frase: "A terra do jardim está molhada.",
            feedbackErro: "Som forte entre vogais: dobra o R.",
          },
          {
            molde: "ca__eta",
            opcoes: ["n", "rr"],
            correta: 0,
            frase: "A caneta azul é da Marina.",
            feedbackErro: "Fale a palavra: o som do meio é /n/, não R forte.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com atenção: as palavras destacadas trazem os disfarces da aula.",
    leitura: {
      titulo: "A Chave do Telhado",
      imagemUrl: chuva,
      legendaImagem: "A chuva batendo no telhado da sede do clube",
      destacar: ["chave", "telhado", "guarda-chuva"],
      paragrafos: [
        "A chuva batia forte no telhado da sede do clube. Marina procurava a chave da porta dos fundos.",
        "— Está no bolso do guarda-chuva — lembrou Brilha, sacudindo o rabo molhado.",
        "Marina achou a chave, abriu a porta e encontrou um ninho de pássaros no canto do corredor.",
        "— Vamos deixar o ninho em paz e escrever um aviso no mural — disse ela, já pegando o lápis.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "Onde estava a chave?",
        opcoes: ["No bolso do guarda-chuva", "Embaixo do tapete", "Na mochila", "No telhado"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Brilha lembrou: 'Está no bolso do guarda-chuva'.",
        feedbackErro: "A resposta está na fala de Brilha, no segundo parágrafo.",
        ondeEstaNoTexto: "— Está no bolso do guarda-chuva — lembrou Brilha",
        dica: "🔎 Procure a fala que começa com travessão.",
        reensino: "📚 Vamos rever juntos: nas perguntas de ONDE, procuramos o lugar citado no texto.",
      },
      {
        pergunta: "O que Marina encontrou no corredor?",
        opcoes: ["Uma poça d'água", "Um ninho de pássaros", "Um gato molhado", "Um bilhete"],
        correta: 1,
        feedbackAcerto: "🔍 Exato: 'encontrou um ninho de pássaros no canto do corredor'.",
        feedbackErro: "Releia o terceiro parágrafo, depois de 'abriu a porta'.",
        ondeEstaNoTexto: "encontrou um ninho de pássaros no canto do corredor.",
        dica: "🔎 O achado aparece logo depois de ela abrir a porta.",
        reensino: "📚 Vamos rever juntos: a ordem do texto ajuda — achou a chave, abriu, então encontrou.",
      },
      {
        pergunta: "Quais palavras do texto trazem dígrafos (duas letras, um som)?",
        opcoes: ["chuva e telhado", "porta e canto", "lápis e mural", "forte e paz"],
        correta: 0,
        feedbackAcerto: "🔍 Boa! CHuva (CH) e telHado (LH).",
        feedbackErro: "Procure CH, LH ou NH dentro das palavras.",
        ondeEstaNoTexto: "A chuva batia forte no telhado da sede do clube.",
        dica: "🔎 Dígrafos da aula: LH, NH, CH.",
        reensino: "📚 Vamos rever juntos: dígrafo é dupla de letras com um som só — CH, LH, NH.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Aplique as regras em palavras novas, como um detetive faria.",
    perguntas: [
      {
        pergunta: "Qual palavra está escrita CERTA?",
        opcoes: ["guerra", "gerra", "guherra", "jerra"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Som forte antes de E pede GU.",
        feedbackErro: "Para o G soar forte antes de E, entra o U silencioso: GUERRA.",
        dica: "🔎 Lembre de GUITARRA: o U não é falado, mas é escrito.",
        reensino: "📚 Vamos rever: antes de E/I, G soa /j/. Para som forte, usamos GU.",
      },
      {
        pergunta: "Por que CARRO tem dois R?",
        opcoes: [
          "Porque é uma palavra grande",
          "Porque o som forte está entre vogais",
          "Porque começa com C",
          "Porque termina com O",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato: som forte entre vogais dobra o R.",
        feedbackErro: "Compare CARA (som brando) com CARRO (som forte): entre vogais o forte dobra.",
        dica: "🔎 Fale CARA e CARRO devagar e escute o meio.",
        reensino: "📚 Vamos rever: R no começo já é forte; entre vogais, forte = RR.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para decidir entre R e RR.",
    bloco: {
      instrucao: "Do primeiro ao último passo.",
      itens: [
        { id: "p1", texto: "Falo a palavra e escuto se o som do R é forte ou brando.", imagemUrl: brilha },
        { id: "p2", texto: "Vejo se o som está no COMEÇO da palavra ou ENTRE vogais.", imagemUrl: lupa },
        { id: "p3", texto: "Escrevo: forte entre vogais = RR; começo ou brando = R.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Perfeito: escutar, localizar e escrever.",
      feedbackErro: "Primeiro escuto o som, depois vejo a posição, e só então escrevo.",
      dica: "🔎 O lápis é sempre o último passo.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e resolva.",
    leitura: {
      titulo: "O Bilhete do Vizinho",
      imagemUrl: papel,
      destacar: ["galinha", "milho", "carroça"],
      paragrafos: [
        "O vizinho deixou um bilhete no portão: 'A galinha fugiu e comeu o milho da horta. Desculpe!'",
        "Marina leu duas vezes e riu. Depois circulou três palavras do bilhete: galinha, milho e carroça.",
        "— Olha só: NH, LH e RR na mesma mensagem — comentou ela com Brilha.",
        "Escreveu a resposta com letra bonita e devolveu o bilhete no portão.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que a galinha comeu?",
        opcoes: ["O milho da horta", "A ração do gato", "As folhas da árvore", "O bolo da mesa"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Está escrito: 'comeu o milho da horta'.",
        feedbackErro: "Releia o bilhete no primeiro parágrafo.",
        ondeEstaNoTexto: "A galinha fugiu e comeu o milho da horta.",
        dica: "🔎 A resposta está dentro das aspas do bilhete.",
        reensino: "📚 Vamos rever juntos: quando o texto traz um bilhete, a resposta pode estar dentro dele.",
      },
      {
        pergunta: "Qual dupla de letras aparece em CARROÇA?",
        opcoes: ["RR", "LH", "NH", "CH"],
        correta: 0,
        feedbackAcerto: "🔍 Exato: CARROÇA tem RR (som forte entre vogais) e também Ç.",
        feedbackErro: "Olhe as letras do meio da palavra CARROÇA.",
        ondeEstaNoTexto: "galinha, milho e carroça",
        dica: "🔎 Fale a palavra devagar: o som forte no meio dobra a letra.",
        reensino: "📚 Vamos rever: som forte de R entre vogais = RR.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina da Escrita Certa",
    instrucao:
      "RASCUNHO, REVISÃO com a lista de conferência e VERSÃO FINAL. Use as duplas de letras da aula.",
    blocos: [
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "A chuva molhou o telhado do ninho.",
            palavras: ["A", "chuva", "molhou", "o", "telhado", "do", "ninho."],
            distratores: ["xuva", "telahdo"],
            dica: "CH em chuva, LH em molhou e telhado, NH em ninho.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "bilhete",
        titulo: "Bilhete para o vizinho",
        comando:
          "Escreva um bilhete curto para um vizinho, usando pelo menos três palavras com LH, NH ou CH.",
        campos: [
          { rotulo: "Para quem", placeholder: "Ex.: Para o vizinho da casa 12", minLetras: 5 },
          { rotulo: "Mensagem", placeholder: "Escreva sua mensagem aqui", minLetras: 25 },
          { rotulo: "Quem escreveu", placeholder: "Seu nome", minLetras: 2 },
        ],
        checklist: [
          "Usei ao menos três palavras com LH, NH ou CH.",
          "Comecei as frases com letra MAIÚSCULA.",
          "Coloquei ponto final em cada frase.",
          "Reli em voz alta e conferi as duplas de letras.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura de detetive: A Chave do Telhado",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "A chuva batia forte no telhado da sede do clube.",
      "Marina procurava a chave da porta dos fundos.",
      "Ela encontrou um ninho de pássaros no canto do corredor.",
    ],
    metaSegundos: 20,
  },

  momento09_revisao: {
    pontos: [
      "LH, NH e CH são dígrafos: duas letras com UM som só, que nunca se separam.",
      "G antes de A, O, U soa forte; antes de E, I soa /j/. Para som forte antes de E/I, usa-se GU.",
      "R no começo da palavra já é forte; entre vogais, som forte pede RR.",
      "Falar a palavra devagar e olhar a POSIÇÃO resolve a dúvida da letra.",
    ],
    miniDesafio: {
      pergunta: "Qual palavra está escrita corretamente?",
      opcoes: ["carroça", "caroça", "carrossa", "carhoça"],
      correta: 0,
      feedbackAcerto: "🔍 Isso! CARROÇA: RR para o som forte e Ç antes de A.",
      feedbackErro: "O som forte entre vogais pede RR, e o /s/ antes de A pede Ç: CARROÇA.",
      dica: "🔎 Junte as duas regras da aula: RR e Ç.",
      reensino: "📚 Vamos rever: som forte de R entre vogais = RR; som /s/ antes de A = Ç.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um dígrafo?",
        opcoes: [
          "Duas letras que fazem um som só",
          "Uma letra com acento",
          "Duas palavras juntas",
          "Uma letra repetida sem som",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso mesmo!",
        feedbackErro: "Dígrafo é dupla de letras com UM som: CH, LH, NH.",
        feedbackOpcoes: [
          "✅ Exato: CH, LH e NH são dígrafos.",
          "❌ Letra com acento é outra coisa (acentuação).",
          "❌ Duas palavras juntas formam uma expressão, não um dígrafo.",
          "❌ Toda letra escrita participa do som da palavra.",
        ],
        dica: "🔎 Pense em CHAVE, FILHO e CAMINHO.",
        reensino: "📚 Vamos rever: dígrafo = duas letras, um som só.",
      },
      {
        pergunta: "2/5 — Em GELO, o G soa como…",
        opcoes: ["/g/ de gato", "/j/ de janela", "/k/ de casa", "não soa"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Antes de E, o G soa /j/.",
        feedbackErro: "Antes de E e I o G soa /j/: GELO, GIRAFA.",
        feedbackOpcoes: [
          "❌ Som /g/ forte acontece antes de A, O, U.",
          "✅ Exato: antes de E e I, G soa /j/.",
          "❌ /k/ é som de C ou QU.",
          "❌ O G tem som na palavra GELO.",
        ],
        dica: "🔎 Fale GATO e GELO em seguida e compare.",
        reensino: "📚 Vamos rever: GA/GO/GU = som forte; GE/GI = som /j/.",
      },
      {
        pergunta: "3/5 — Para o G ter som FORTE antes de E ou I, usamos…",
        opcoes: ["GH", "GU", "GG", "JG"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! GUERRA, GUITARRA.",
        feedbackErro: "Entra um U silencioso: GUERRA, GUITARRA.",
        feedbackOpcoes: [
          "❌ GH não existe em português.",
          "✅ Exato: GU, com U silencioso.",
          "❌ GG não é usado em português.",
          "❌ JG não forma sílaba em português.",
        ],
        dica: "🔎 Lembre de GUITARRA: escreve U, mas não fala.",
        reensino: "📚 Vamos rever: GUE e GUI têm som forte, com U silencioso.",
      },
      {
        pergunta: "4/5 — Qual palavra precisa de RR?",
        opcoes: ["ca_a (rosto)", "te_a (chão)", "_ato (animal)", "co_o (canto de igreja)"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! TERRA tem som forte entre vogais.",
        feedbackErro: "O som forte entre vogais pede RR: TERRA.",
        feedbackOpcoes: [
          "❌ CARA tem som brando: um R.",
          "✅ Exato: TERRA — som forte entre vogais.",
          "❌ RATO está no começo: um R já é forte.",
          "❌ CORO tem som brando: um R.",
        ],
        dica: "🔎 Fale cada palavra e escute qual tem R forte no meio.",
        reensino: "📚 Vamos rever: forte entre vogais = RR; começo = R; brando = R.",
      },
      {
        pergunta: "5/5 — Ao separar FI-LHO em sílabas, o LH…",
        opcoes: [
          "fica junto, na mesma sílaba",
          "se separa: L numa sílaba, H na outra",
          "desaparece",
          "vira dois sons diferentes",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Dígrafo nunca se separa.",
        feedbackErro: "Dígrafos ficam inteiros na sílaba: FI-LHO, CA-MI-NHO.",
        feedbackOpcoes: [
          "✅ Exato: LH permanece inteiro na sílaba.",
          "❌ O H nunca fica sozinho numa sílaba.",
          "❌ As letras continuam escritas na palavra.",
          "❌ LH faz um único som, não dois.",
        ],
        dica: "🔎 Bata palmas em FI-LHO: são duas sílabas.",
        reensino: "📚 Vamos rever: dígrafo é inseparável na separação de sílabas.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça aos dígrafos em casa",
    materiais: ["Papel", "Lápis", "Um livro ou revista de casa"],
    passos: [
      "1) Escolha uma página de um livro ou revista com um adulto.",
      "2) Em 3 minutos, encontre e copie 6 palavras com LH, NH ou CH.",
      "3) Sublinhe a dupla de letras em cada palavra e leia em voz alta.",
      "4) Desafio final: escreva uma frase usando três dessas palavras.",
    ],
    registro: "📸 Tire uma foto da sua lista de palavras com as duplas sublinhadas.",
  },

  recompensa: {
    xp: 150,
    moedas: 45,
    medalha: "Óculos do Disfarce",
  },
};
