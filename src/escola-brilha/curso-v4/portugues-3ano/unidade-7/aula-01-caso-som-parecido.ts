import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";

/**
 * Unidade 7 · Aula 1 — O Caso do Som Parecido
 * -------------------------------------------------------------
 * Fase 5 (ortografia) do 3º ano: correspondências regulares
 * CONTEXTUAIS. O som /s/ pode ser escrito com S, SS, C, Ç ou SC;
 * o som /z/ com S ou Z. A criança aprende a decidir pela POSIÇÃO
 * na palavra, não pelo som isolado.
 *
 * BNCC: EF03LP01, EF03LP02
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-caso-som-parecido",
  titulo: "O Caso do Som Parecido",
  iconeTrilha: "🔤",
  bncc: ["EF03LP01", "EF03LP02"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Um som, muitas letras",
    historia:
      "Aurora abriu um envelope lacrado com o selo do clube. — Detetive, temos um caso difícil: o SOM /s/ está usando disfarces. Às vezes ele aparece como S, às vezes como SS, às vezes como Ç e até como C. O ouvido não resolve esse caso sozinho: só quem olha a POSIÇÃO da letra na palavra descobre o disfarce certo.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Antes de abrir o caso, observe as pistas do envelope.",
    bloco: {
      titulo: "O Caso do Som Parecido",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: lupa, nome: "Lupa sobre uma palavra" },
        { imagemUrl: lapis, nome: "Lápis com borracha gasta" },
      ],
      pergunta: "Do que esta investigação vai tratar?",
      hipoteses: [
        { texto: "De letras diferentes que fazem o MESMO som e confundem na escrita.", imagemUrl: lupa },
        { texto: "De uma palavra que ninguém consegue falar em voz alta.", imagemUrl: papel },
        { texto: "De um lápis mágico que escreve sozinho.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🔍 Isso! Letras diferentes, som igual — por isso a borracha está gasta.",
      feedbackErro:
        "O título fala de SOM PARECIDO: são letras diferentes que soam igual e por isso erramos ao escrever.",
      dica: "Repare na borracha gasta: alguém apagou muitas vezes porque errou a letra.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de detetive ortográfico antes de começar.",
    cards: [
      {
        palavra: "ortografia",
        explicacao: "É a escrita certa das palavras, do jeito combinado por todos.",
        exemplo: "A ortografia manda escrever PASSEIO com SS, e não com Ç.",
        imagemUrl: livro,
      },
      {
        palavra: "posição",
        explicacao: "É o lugar onde a letra está na palavra: no começo, no meio ou entre vogais.",
        exemplo: "Entre duas vogais, o som /s/ costuma virar SS: PÁSSARO.",
        imagemUrl: lupa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "A regra do disfarce",
    instrucao:
      "Leia a explicação, veja os exemplos com a letra destacada e depois resolva os desafios completando a lacuna.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Som /s/ entre vogais: quase sempre SS",
        explicacao:
          "Quando o som /s/ aparece ENTRE DUAS VOGAIS, ele é escrito com SS: PÁSSARO, PASSEIO, PROFESSORA. Se fosse um S só entre vogais, o som viraria /z/ — como em CASA e ROSA. Ou seja: um S entre vogais soa /z/; dois SS soam /s/.",
        exemplos: [
          { palavra: "pássaro", destaque: "ss", motivo: "Entre A e A: som /s/, então SS." },
          { palavra: "casa", destaque: "s", motivo: "Um S entre vogais soa /z/." },
          { palavra: "professora", destaque: "ss", motivo: "Entre E e O: som /s/, então SS." },
        ],
        desafios: [
          {
            molde: "pa__eio",
            opcoes: ["ss", "s", "ç"],
            correta: 0,
            frase: "O passeio do clube foi no parque.",
            feedbackErro: "Está entre vogais e soa /s/: precisa de SS.",
          },
          {
            molde: "ro__a",
            opcoes: ["ss", "s", "ç"],
            correta: 1,
            frase: "A rosa do jardim é vermelha.",
            feedbackErro: "Aqui o som é /z/ (ro-ZA): um S só entre vogais.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Ç só antes de A, O e U",
        explicacao:
          "O Ç (cê-cedilha) só aparece antes de A, O e U: CAÇA, AÇÚCAR, COraÇÃO. Antes de E e I ele nunca é usado — nesse lugar quem faz o som /s/ é o C: CEBOLA, CINEMA. Regra de detetive: Ç com A, O, U; C com E, I.",
        exemplos: [
          { palavra: "caça", destaque: "ç", motivo: "Antes de A: Ç." },
          { palavra: "coração", destaque: "ç", motivo: "Antes de Ã/O: Ç." },
          { palavra: "cebola", destaque: "c", motivo: "Antes de E: C, nunca Ç." },
        ],
        desafios: [
          {
            molde: "for__a",
            opcoes: ["ç", "ss", "c"],
            correta: 0,
            frase: "O detetive fez força para abrir a caixa.",
            feedbackErro: "Antes de A com som /s/: usamos Ç.",
          },
          {
            molde: "__idade",
            opcoes: ["ç", "c", "ss"],
            correta: 1,
            frase: "A cidade dorme cedo.",
            feedbackErro: "Antes de I nunca usamos Ç: aqui é C.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com lupa: as palavras destacadas guardam a regra da aula.",
    leitura: {
      titulo: "O Bilhete do Passeio",
      imagemUrl: papel,
      legendaImagem: "O bilhete com três erros de ortografia",
      destacar: ["passeio", "professora", "coração"],
      paragrafos: [
        "Na porta da sala apareceu um bilhete torto: 'Amanhã tem paseio no parque. Traga lanche e boa vontade.'",
        "A professora leu em voz alta e sorriu. — Falta uma letra nesse bilhete, detetives. O som /s/ está entre duas vogais, então precisa de dois S.",
        "Marina pegou o lápis e corrigiu com cuidado: PASSEIO. Depois conferiu as outras palavras e achou mais uma escorregada: 'coraçao' estava sem o til do coração.",
        "No fim, o bilhete ficou limpo e certo. — Escrever certo é respeitar quem vai ler — disse a professora.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Onde o bilhete torto apareceu?",
        opcoes: ["Na porta da sala", "Dentro da mochila", "No quadro da diretoria", "Embaixo da carteira"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! 'Na porta da sala apareceu um bilhete torto'.",
        feedbackErro: "A resposta está na primeira frase do texto.",
        ondeEstaNoTexto: "Na porta da sala apareceu um bilhete torto…",
        dica: "🔎 Releia a primeira linha: o lugar aparece antes do verbo 'apareceu'.",
        reensino:
          "📚 Vamos rever juntos: quando a pergunta é ONDE, procuramos no texto a palavra que indica lugar — aqui, 'na porta da sala'.",
      },
      {
        pergunta: "Qual erro a professora apontou no bilhete?",
        opcoes: ["Falta de ponto final", "Uma letra faltando em PASSEIO", "Letra maiúscula errada", "Palavra repetida"],
        correta: 1,
        feedbackAcerto: "🔍 Exato: 'paseio' estava com um S só — precisa de SS.",
        feedbackErro: "A professora disse: 'Falta uma letra nesse bilhete'. Qual palavra estava incompleta?",
        ondeEstaNoTexto: "O som /s/ está entre duas vogais, então precisa de dois S.",
        dica: "🔎 Procure a fala da professora — ela explica exatamente o que faltou.",
        reensino:
          "📚 Vamos rever juntos: entre duas vogais, o som /s/ pede SS. Por isso 'paseio' virou PASSEIO.",
      },
      {
        pergunta: "Por que escrever certo é importante, segundo a professora?",
        opcoes: [
          "Para ganhar nota alta",
          "Para respeitar quem vai ler",
          "Para escrever mais rápido",
          "Para usar menos borracha",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Boa! Está na última frase: 'Escrever certo é respeitar quem vai ler'.",
        feedbackErro: "A resposta está na última fala do texto.",
        ondeEstaNoTexto: "Escrever certo é respeitar quem vai ler — disse a professora.",
        dica: "🔎 Volte na última linha do texto, na fala entre travessões.",
        reensino:
          "📚 Vamos rever juntos: a ortografia existe para o leitor entender sem tropeçar — é respeito com quem lê.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense como detetive ortográfico: aplique a regra em palavras novas.",
    perguntas: [
      {
        pergunta: "Qual palavra está escrita CERTA?",
        opcoes: ["pássaro", "pásaro", "páçaro", "pázaro"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Som /s/ entre A e A: dois S.",
        feedbackErro: "Entre duas vogais com som /s/ usamos SS: PÁSSARO.",
        dica: "🔎 Fale a palavra: o som é /s/ e está entre vogais. Qual letra dobra?",
        reensino:
          "📚 Vamos rever juntos: um S entre vogais soa /z/ (casa); dois SS soam /s/ (pássaro).",
      },
      {
        pergunta: "Por que NÃO existe 'çebola'?",
        opcoes: [
          "Porque Ç nunca vem antes de E",
          "Porque Ç é letra antiga",
          "Porque cebola se escreve com SS",
          "Porque a palavra é curta",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato: Ç só antes de A, O e U. Antes de E e I quem faz /s/ é o C.",
        feedbackErro: "Lembre da regra: Ç com A, O, U. Antes de E e I, usamos C.",
        dica: "🔎 Repita a regra de bolso: Ç — A, O, U.",
        reensino:
          "📚 Vamos rever juntos: CAÇA, AÇÚCAR, COLAÇÃO usam Ç (antes de A/O/U). CEBOLA e CINEMA usam C (antes de E/I).",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Um detetive ortográfico segue passos. Coloque-os na ordem certa.",
    bloco: {
      instrucao: "Do primeiro ao último passo.",
      itens: [
        { id: "p1", texto: "Falo a palavra devagar e escuto qual é o som duvidoso.", imagemUrl: menina },
        { id: "p2", texto: "Olho a POSIÇÃO do som: está entre vogais? Vem antes de A, O, U?", imagemUrl: lupa },
        { id: "p3", texto: "Aplico a regra e escrevo a letra certa.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Perfeito: escutar, olhar a posição e só então escrever.",
      feedbackErro: "Primeiro se ESCUTA o som, depois se olha a POSIÇÃO, e só no fim se escreve.",
      dica: "🔎 O lápis é sempre o último passo do detetive.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e resolva as pistas ortográficas.",
    leitura: {
      titulo: "A Lista da Feira",
      imagemUrl: livro,
      destacar: ["açúcar", "cebola", "linguiça"],
      paragrafos: [
        "Vovó deixou uma lista na mesa: açúcar, cebola, linguiça e arroz.",
        "Marina reparou que três palavras da lista tinham o som /s/ escrito de jeitos diferentes.",
        "— Açúcar e linguiça têm Ç porque vem A e U depois. Cebola tem C porque vem E depois — explicou ela, orgulhosa.",
        "Vovó riu: — Você virou detetive das letras, minha netinha.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos itens tinha a lista da vovó?",
        opcoes: ["Três", "Quatro", "Cinco", "Dois"],
        correta: 1,
        feedbackAcerto: "🔍 Isso: açúcar, cebola, linguiça e arroz — quatro.",
        feedbackErro: "Volte na primeira frase e conte os itens separados por vírgula e 'e'.",
        ondeEstaNoTexto: "açúcar, cebola, linguiça e arroz.",
        dica: "🔎 Conte cada item da lista, um por um.",
        reensino: "📚 Vamos rever juntos: em listas, cada item aparece separado por vírgula; o último vem com 'e'.",
      },
      {
        pergunta: "Por que CEBOLA não leva Ç, segundo Marina?",
        opcoes: [
          "Porque depois vem a letra E",
          "Porque a palavra é grande",
          "Porque o som é /z/",
          "Porque começa com C",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Antes de E e I usamos C, nunca Ç.",
        feedbackErro: "Releia a fala de Marina: ela explica pela letra que vem DEPOIS.",
        ondeEstaNoTexto: "Cebola tem C porque vem E depois",
        dica: "🔎 A explicação de Marina está entre travessões.",
        reensino: "📚 Vamos rever juntos: Ç só antes de A, O, U. Antes de E/I é C.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina da Escrita Certa",
    instrucao:
      "Três passos de escritor: RASCUNHO, REVISÃO com a lista de conferência e VERSÃO FINAL. Escreva usando as palavras da regra de hoje.",
    blocos: [
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "O passeio da professora foi ótimo.",
            palavras: ["O", "passeio", "da", "professora", "foi", "ótimo."],
            distratores: ["paseio", "profesora"],
            dica: "Som /s/ entre vogais pede SS: passeio, professora.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Minha lista com o som /s/",
        comando:
          "Escreva 4 palavras que você usa no dia a dia com o som /s/ — pelo menos uma com SS e uma com Ç.",
        linhas: 4,
        checklist: [
          "Usei pelo menos uma palavra com SS entre vogais.",
          "Usei pelo menos uma palavra com Ç antes de A, O ou U.",
          "Comecei cada palavra com letra minúscula ou maiúscula de forma coerente.",
          "Reli e conferi cada letra duvidosa.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura de detetive: O Bilhete do Passeio",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "Na porta da sala apareceu um bilhete torto.",
      "A professora leu em voz alta e sorriu.",
      "O som /s/ está entre duas vogais, então precisa de dois S.",
    ],
    metaSegundos: 20,
  },

  momento09_revisao: {
    pontos: [
      "Um S entre vogais soa /z/ (CASA); dois SS soam /s/ (PÁSSARO).",
      "Ç só vem antes de A, O e U: CAÇA, AÇÚCAR, CORAÇÃO.",
      "Antes de E e I, quem faz o som /s/ é o C: CEBOLA, CIDADE.",
      "Escrever certo é respeitar quem vai ler: sempre revise as letras duvidosas.",
    ],
    miniDesafio: {
      pergunta: "Qual palavra está escrita corretamente?",
      opcoes: ["açucar demais", "assucar demais", "açúcar demais", "asúcar demais"],
      correta: 2,
      feedbackAcerto: "🔍 Isso! AÇÚCAR: Ç antes de U e acento no Ú.",
      feedbackErro: "O som /s/ vem antes de U: é Ç. E a palavra leva acento: AÇÚCAR.",
      dica: "🔎 Ç antes de A, O, U — e não esqueça o acento.",
      reensino:
        "📚 Vamos rever juntos: AÇÚCAR tem Ç porque o som /s/ vem antes de U, e leva acento na sílaba forte ÇÚ.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Entre duas vogais, o som /s/ costuma ser escrito com…",
        opcoes: ["S", "SS", "Ç", "Z"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Entre vogais, som /s/ pede SS.",
        feedbackErro: "Entre duas vogais o som /s/ dobra o S: PASSEIO.",
        feedbackOpcoes: [
          "❌ Um S só entre vogais soa /z/, como em CASA.",
          "✅ Isso! Entre vogais, som /s/ pede SS: PÁSSARO, PASSEIO.",
          "❌ Ç não aparece entre vogais dessa forma nessas palavras.",
          "❌ Z faz o som /z/, não /s/.",
        ],
        dica: "🔎 Compare CASA (som /z/) com PASSEIO (som /s/).",
        reensino: "📚 Vamos rever: um S entre vogais = /z/; dois SS = /s/.",
      },
      {
        pergunta: "2/5 — O Ç pode aparecer antes de quais vogais?",
        opcoes: ["A, O e U", "E e I", "Todas as vogais", "Somente A"],
        correta: 0,
        feedbackAcerto: "🔍 Exato: Ç com A, O e U.",
        feedbackErro: "Ç só antes de A, O e U. Antes de E e I é C.",
        feedbackOpcoes: [
          "✅ Exato: Ç com A, O e U.",
          "❌ Antes de E e I usamos C, nunca Ç.",
          "❌ Ç nunca vem antes de E e I.",
          "❌ Também vem antes de O e U: AÇÚCAR, COraÇÃO.",
        ],
        dica: "🔎 Regra de bolso: Ç — A, O, U.",
        reensino: "📚 Vamos rever: CAÇA, AÇÚCAR, CORAÇÃO. Antes de E/I é C: CEBOLA, CIDADE.",
      },
      {
        pergunta: "3/5 — Qual palavra está ERRADA?",
        opcoes: ["cidade", "cebola", "çinema", "coração"],
        correta: 2,
        feedbackAcerto: "🔍 Boa! 'çinema' não existe — é CINEMA.",
        feedbackErro: "Procure o Ç aparecendo antes de E ou I: isso é erro.",
        feedbackOpcoes: [
          "❌ CIDADE está certa: C antes de I.",
          "❌ CEBOLA está certa: C antes de E.",
          "✅ Isso! 'çinema' está errada: antes de I nunca usamos Ç. O certo é CINEMA.",
          "❌ CORAÇÃO está certa: Ç antes de Ã/O.",
        ],
        dica: "🔎 Procure a palavra em que o Ç aparece antes de E ou I.",
        reensino: "📚 Vamos rever: Ç só antes de A, O, U. Logo, 'çinema' não existe — é CINEMA.",
      },
      {
        pergunta: "4/5 — Em CASA, o S soa como…",
        opcoes: ["/s/ de sapo", "/z/ de zebra", "/x/ de xícara", "não tem som"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! S entre vogais soa /z/.",
        feedbackErro: "Fale CASA devagar: o meio soa /z/, como em zebra.",
        feedbackOpcoes: [
          "❌ Para soar /s/ entre vogais precisaria de SS.",
          "✅ Isso! Um S entre vogais soa /z/: CASA, ROSA.",
          "❌ O som /x/ é de X ou CH, como em CHUVA.",
          "❌ Toda letra da palavra tem seu som na leitura.",
        ],
        dica: "🔎 Fale CASA e ROSA devagar e escute o meio da palavra.",
        reensino: "📚 Vamos rever: S entre vogais = /z/. Se o som é /s/, dobra: PÁSSARO.",
      },
      {
        pergunta: "5/5 — Um detetive ortográfico decide a letra certa olhando…",
        opcoes: [
          "só o som da palavra",
          "o tamanho da palavra",
          "a posição do som dentro da palavra",
          "a primeira letra do alfabeto",
        ],
        correta: 2,
        feedbackAcerto: "🔍 Exato! É a POSIÇÃO do som que decide a letra.",
        feedbackErro: "O som sozinho engana; quem resolve é a posição na palavra.",
        feedbackOpcoes: [
          "❌ O som sozinho engana: /s/ pode ser S, SS, C ou Ç.",
          "❌ O tamanho não muda a regra.",
          "✅ Exato! A POSIÇÃO decide: entre vogais, antes de A/O/U, antes de E/I.",
          "❌ O alfabeto não decide a ortografia da palavra.",
        ],
        dica: "🔎 Lembre dos passos: escuto, olho a posição, escrevo.",
        reensino: "📚 Vamos rever: o ouvido levanta a dúvida; a POSIÇÃO da letra resolve o caso.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça às letras da cozinha",
    materiais: ["Embalagens da cozinha", "Papel", "Lápis"],
    passos: [
      "1) Junto com um adulto, procure 6 embalagens com palavras que tenham SS, Ç ou C com som de /s/.",
      "2) Copie cada palavra no papel e circule a letra do som /s/.",
      "3) Separe em duas colunas: 'SS entre vogais' e 'Ç antes de A, O, U'.",
      "4) Explique para o adulto por que cada palavra usa aquela letra.",
    ],
    registro: "📸 Tire uma foto da sua lista com as palavras circuladas.",
  },

  recompensa: {
    xp: 150,
    moedas: 45,
    medalha: "Lupa das Letras",
  },
};
