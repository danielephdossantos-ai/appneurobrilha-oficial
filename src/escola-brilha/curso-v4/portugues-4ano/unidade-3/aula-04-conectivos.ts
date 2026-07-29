import type { AulaPortuguesV4 } from "../../types";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as tigre } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Aula 4 — Conectivos que ligam ideias
 * -------------------------------------------------------------
 * Quarta e última parada da Unidade 3 (Engrenagem da Frase). A
 * expedição descobre as pequenas palavras que ligam duas ideias e
 * mudam totalmente o sentido da frase: E, MAS, PORQUE, POR ISSO,
 * QUANDO, ENTÃO.
 *
 * Foco pedagógico:
 *  - Perceber que os conectivos criam relações de sentido (soma,
 *    oposição, causa, consequência, tempo).
 *  - Comparar a MESMA frase trocando o conectivo e ver como o
 *    significado muda.
 *  - Escolher o conectivo certo para expressar a ideia pretendida.
 *
 * BNCC: EF04LP12, EF35LP10, EF04LP01.
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-conectivos",
  titulo: "Conectivos que ligam ideias",
  iconeTrilha: "🔗",
  bncc: ["EF04LP12", "EF35LP10", "EF04LP01"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "As peças que unem a engrenagem",
    historia:
      "Brilha olhou duas frases soltas no diário: 'Choveu.' e 'A expedição continuou.' — Sozinhas, elas não se conversam. Mas se eu ligar com uma palavrinha certa, tudo muda de sentido! 'Choveu, MAS a expedição continuou' é bem diferente de 'Choveu, POR ISSO a expedição continuou'. Essas palavrinhas se chamam CONECTIVOS — e hoje vamos aprender a escolher a certa.",
    imagemUrl: bussola,
  },

  momento02_previsao: {
    instrucao:
      "A guia deixou duas versões do mesmo aviso, mudando apenas uma palavrinha. Leia com atenção antes de decidir do que ele trata.",
    bloco: {
      titulo: "O Aviso com Duas Versões",
      capaImagemUrl: mapa,
      recado: {
        rotulo: "Aviso",
        icone: "📩",
        estilo: "papel",
        linhas: [
          "Choveu muito, MAS seguimos a trilha.",
          "Choveu muito, POR ISSO seguimos a trilha coberta.",
        ],
      },
      pistas: [
        { imagemUrl: mapa, nome: "A trilha" },
        { imagemUrl: bussola, nome: "A bússola" },
      ],
      pergunta: "Sobre o que esse aviso vai tratar?",
      hipoteses: [
        { texto: "Como uma pequena palavra pode mudar o sentido de uma frase.", imagemUrl: mapa },
        { texto: "Uma receita de bolo.", imagemUrl: leao },
        { texto: "Um jogo de futebol.", imagemUrl: tigre },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Repare: 'MAS' mostra que continuaram apesar da chuva; 'POR ISSO' mostra que a chuva foi o MOTIVO de mudar de trilha. A palavrinha muda tudo!",
      feedbackErro:
        "Releia as duas frases: elas usam palavras diferentes ('mas' e 'por isso') e o sentido muda completamente.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de seguir viagem, conheça os conectivos que ligam ideias.",
    cards: [
      {
        palavra: "e",
        explicacao: "Liga duas ideias que acontecem juntas, somando informações.",
        exemplo: "'A guia pegou o mapa E a bússola.' — as duas coisas aconteceram.",
        imagemUrl: mapa,
      },
      {
        palavra: "mas",
        explicacao: "Liga duas ideias que se opõem — mostra um contraste, uma surpresa.",
        exemplo: "'Choveu, MAS a expedição continuou.' — apesar da chuva, não pararam.",
        imagemUrl: tigre,
      },
      {
        palavra: "porque",
        explicacao: "Explica a CAUSA, o motivo de algo ter acontecido.",
        exemplo: "'A expedição parou PORQUE choveu.' — a chuva é a razão de terem parado.",
        imagemUrl: bussola,
      },
      {
        palavra: "por isso",
        explicacao: "Mostra a CONSEQUÊNCIA — o que aconteceu DEPOIS, por causa de algo.",
        exemplo: "'Choveu, POR ISSO a expedição parou.' — a parada é a consequência da chuva.",
        imagemUrl: mochila,
      },
      {
        palavra: "quando",
        explicacao: "Indica TEMPO — o momento em que algo acontece.",
        exemplo: "'QUANDO a chuva parou, seguimos viagem.' — indica o momento certo.",
        imagemUrl: arvore,
      },
      {
        palavra: "então",
        explicacao: "Mostra o que aconteceu em seguida, geralmente como resultado.",
        exemplo: "'Ficou tarde, ENTÃO armamos o acampamento.' — o resultado do fato anterior.",
        imagemUrl: binoculo,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "A mesma frase, sentidos diferentes",
    instrucao: "Observe como trocar apenas o conectivo muda o significado da frase.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O menino estava cansado, MAS continuou andando.",
            explicacao: "OPOSIÇÃO: 'mas' mostra que ele andou APESAR do cansaço — uma ideia contrária à outra.",
          },
          {
            texto: "O menino estava cansado, PORQUE andou o dia todo.",
            explicacao: "CAUSA: 'porque' explica o MOTIVO do cansaço — o que causou aquele estado.",
          },
          {
            texto: "O menino estava cansado, POR ISSO parou para descansar.",
            explicacao: "CONSEQUÊNCIA: 'por isso' mostra o que aconteceu DEPOIS, como resultado do cansaço.",
          },
          {
            texto: "QUANDO o menino descansou, sentiu-se melhor.",
            explicacao: "TEMPO: 'quando' marca o momento em que a segunda ideia acontece.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o relato da travessia com os conectivos destacados. Observe como cada um liga as ideias de um jeito diferente.",
    leitura: {
      titulo: "Relato: A Trilha Debaixo de Chuva",
      imagemUrl: mapa,
      legendaImagem: "A trilha coberta pela chuva",
      destacar: ["mas", "porque", "então", "quando"],
      paragrafos: [
        "A chuva começou forte, MAS a expedição não parou de andar.",
        "A guia decidiu seguir por um atalho PORQUE a trilha principal estava alagada.",
        "QUANDO o sol voltou a aparecer, todos sorriram de alívio; ENTÃO decidiram armar o acampamento ali mesmo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no relato se precisar. Toda resposta está escrita.",
    perguntas: [
      {
        pergunta: "No trecho 'a chuva começou forte, MAS a expedição não parou', o que 'mas' indica?",
        opcoes: ["Que a chuva foi a causa de pararem", "Um contraste: apesar da chuva, continuaram", "Que a chuva aconteceu depois"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Mas' liga duas ideias opostas: chovia forte, e mesmo assim eles continuaram.",
        feedbackErro: "Releia: 'a chuva começou forte, MAS a expedição não parou' — 'mas' mostra oposição, não causa.",
        ondeEstaNoTexto: "A chuva começou forte, MAS a expedição não parou de andar.",
      },
      {
        pergunta: "Por que a guia seguiu pelo atalho, segundo o trecho com 'porque'?",
        opcoes: ["Porque a trilha principal estava alagada", "Porque estava com sono", "Porque o atalho era mais bonito"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! 'Porque' introduz a causa: a trilha principal alagada.",
        feedbackErro: "O texto diz: 'seguir por um atalho PORQUE a trilha principal estava alagada' — essa é a causa.",
        ondeEstaNoTexto: "A guia decidiu seguir por um atalho porque a trilha principal estava alagada.",
      },
      {
        pergunta: "O que a expedição fez logo depois de o sol aparecer (ligado por 'então')?",
        opcoes: ["Voltaram para casa", "Armaram o acampamento ali mesmo", "Continuaram andando sob chuva"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Então' liga o sol aparecer à consequência: armar o acampamento.",
        feedbackErro: "Releia o fim: '...ENTÃO decidiram armar o acampamento ali mesmo'.",
        ondeEstaNoTexto: "Quando o sol voltou a aparecer, todos sorriram de alívio; então decidiram armar o acampamento ali mesmo.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pense sobre o efeito de cada conectivo na história.",
    perguntas: [
      {
        pergunta: "Se trocássemos 'MAS a expedição não parou' por 'PORQUE a expedição não parou', o sentido da frase...",
        opcoes: [
          "Mudaria completamente: deixaria de ser oposição e passaria a soar como explicação de causa",
          "Continuaria exatamente igual",
          "Ficaria mais longo, mas com o mesmo sentido",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso mesmo! Trocar o conectivo muda a relação entre as ideias — de oposição para (estranha) explicação de causa.",
        feedbackErro:
          "Cada conectivo cria uma relação diferente entre as ideias: 'mas' opõe, 'porque' explica a causa. Trocar um pelo outro muda o sentido.",
      },
      {
        pergunta: "Por que é importante escolher o conectivo certo ao escrever uma frase?",
        opcoes: [
          "Porque o conectivo errado pode confundir o leitor sobre a relação entre as ideias",
          "Porque conectivos deixam o texto mais bonito, sem mudar nada",
          "Porque só existe um conectivo para cada frase",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! O conectivo é a 'engrenagem' que mostra COMO as ideias se relacionam — errar ele pode mudar todo o sentido do texto.",
        feedbackErro:
          "Conectivos mostram a relação entre ideias (causa, oposição, tempo, consequência). Escolher errado confunde o leitor.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As frases do relato se misturaram. Ordene do primeiro fato até o desfecho.",
    bloco: {
      instrucao: "Siga a ordem em que os fatos e conectivos aparecem no relato.",
      itens: [
        { id: "p1", texto: "A chuva começou forte, mas a expedição não parou.", imagemUrl: mapa },
        { id: "p2", texto: "A guia seguiu por um atalho porque a trilha estava alagada.", imagemUrl: bussola },
        { id: "p3", texto: "Quando o sol voltou, então armaram o acampamento.", imagemUrl: arvore },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Linha montada! Você seguiu a ordem certa: a chuva, o atalho e o desfecho com o sol.",
      feedbackErro: "Pense: primeiro a chuva começa, depois a guia decide o atalho, e por fim o sol aparece e armam o acampamento.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Nova leitura, sozinho agora. Depois responda.",
    leitura: {
      titulo: "O Encontro com o Rio",
      imagemUrl: mochila,
      destacar: ["quando", "por isso", "e"],
      paragrafos: [
        "QUANDO a expedição chegou ao rio, encontrou a água muito alta.",
        "A ponte estava quebrada, POR ISSO tiveram que procurar outro caminho.",
        "Encontraram uma canoa E atravessaram em segurança.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que a expedição encontrou 'quando' chegou ao rio?",
        opcoes: ["Uma canoa nova", "A água muito alta", "Uma ponte nova"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Quando' marca o momento: ao chegar, encontraram a água alta.",
        feedbackErro: "Releia: 'Quando a expedição chegou ao rio, encontrou a água muito alta.'",
        ondeEstaNoTexto: "Quando a expedição chegou ao rio, encontrou a água muito alta.",
      },
      {
        pergunta: "Por que tiveram que procurar outro caminho (ligado por 'por isso')?",
        opcoes: ["Porque a ponte estava quebrada", "Porque estava chovendo", "Porque a canoa era pequena"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! 'Por isso' liga a consequência (procurar outro caminho) à causa (ponte quebrada).",
        feedbackErro: "O texto diz: 'A ponte estava quebrada, POR ISSO tiveram que procurar outro caminho.'",
        ondeEstaNoTexto: "A ponte estava quebrada, por isso tiveram que procurar outro caminho.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Caça aos Conectivos",
    instrucao: "Arraste cada conectivo para o tipo de relação que ele expressa.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Que relação é essa?",
      bloco: {
        instrucao: "Leia cada frase e identifique a relação criada pelo conectivo destacado.",
        itens: [
          { id: "i1", texto: "Ele correu E gritou de alegria.", alvoId: "soma" },
          { id: "i2", texto: "Estava com sono, MAS terminou a tarefa.", alvoId: "oposicao" },
          { id: "i3", texto: "Faltou à aula PORQUE estava doente.", alvoId: "causa" },
          { id: "i4", texto: "Estudou muito, POR ISSO passou na prova.", alvoId: "consequencia" },
          { id: "i5", texto: "QUANDO a campainha tocou, todos saíram.", alvoId: "tempo" },
          { id: "i6", texto: "Terminou o dever, ENTÃO foi brincar.", alvoId: "consequencia" },
        ],
        alvos: [
          { id: "soma", nome: "Soma", descricao: "Junta duas ideias (e)" },
          { id: "oposicao", nome: "Oposição", descricao: "Ideias contrárias (mas)" },
          { id: "causa", nome: "Causa", descricao: "Explica o motivo (porque)" },
          { id: "consequencia", nome: "Consequência", descricao: "O que resultou (por isso, então)" },
          { id: "tempo", nome: "Tempo", descricao: "Indica o momento (quando)" },
        ],
        feedbackAcerto: "🎉 Muito bem! Você reconheceu a relação que cada conectivo cria entre as ideias.",
        feedbackErro:
          "Dica: 'e' soma, 'mas' opõe, 'porque' explica a causa, 'por isso/então' mostram consequência e 'quando' marca o tempo.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "CONECTIVOS são palavras que ligam duas ideias e mostram como elas se relacionam.",
      "E soma ideias; MAS mostra oposição/contraste; PORQUE explica a causa (o motivo).",
      "POR ISSO e ENTÃO mostram a consequência (o que aconteceu depois, como resultado).",
      "QUANDO indica o momento (tempo) em que algo acontece.",
      "Trocar o conectivo pode mudar totalmente o sentido da frase — por isso é preciso escolher com cuidado.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'Choveu, ___ a expedição continuou', qual conectivo mostra que eles continuaram APESAR da chuva?",
      opcoes: ["mas", "porque", "quando"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! 'Mas' cria a relação de oposição: apesar de chover, continuaram.",
      feedbackErro: "'Mas' é o conectivo de oposição/contraste. 'Porque' explicaria a causa; 'quando' marcaria o tempo.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que faz um conectivo em uma frase?",
        opcoes: [
          "Liga duas ideias e mostra a relação entre elas",
          "Sempre indica o final da frase",
          "Substitui o sujeito da frase",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O conectivo mostra COMO duas ideias se relacionam (soma, causa, oposição, tempo...).",
        feedbackErro: "Conectivos são palavras que ligam ideias e revelam a relação entre elas.",
      },
      {
        pergunta: "2/5 — Qual conectivo indica CAUSA (o motivo de algo)?",
        opcoes: ["mas", "porque", "e"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Porque' explica o motivo, a causa de um fato.",
        feedbackErro: "'Porque' é usado para explicar a causa. 'Mas' opõe ideias; 'e' soma.",
      },
      {
        pergunta: "3/5 — Em 'Estudou bastante, POR ISSO tirou uma boa nota', o que 'por isso' indica?",
        opcoes: ["A consequência de ter estudado", "A causa da nota boa", "O momento em que estudou"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! 'Por isso' mostra a consequência: a nota boa resultou de ter estudado.",
        feedbackErro: "'Por isso' indica consequência — o que aconteceu como resultado de algo.",
      },
      {
        pergunta: "4/5 — Qual frase usa o conectivo de TEMPO corretamente?",
        opcoes: [
          "QUANDO a chuva parou, saímos para brincar.",
          "MAS a chuva parou, saímos para brincar.",
          "PORQUE a chuva parou, saímos para brincar.",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Quando' marca o momento em que a segunda ação acontece.",
        feedbackErro: "'Quando' é o conectivo que indica tempo/momento. As outras opções indicam oposição ou causa.",
      },
      {
        pergunta: "5/5 — Trocar 'MAS' por 'PORQUE' na frase 'Estava cansado, MAS continuou andando' deixaria a frase...",
        opcoes: [
          "Com sentido diferente e confuso, pois 'porque' pede uma explicação, não uma oposição",
          "Exatamente igual em sentido",
          "Mais correta gramaticalmente",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! Cada conectivo cria uma relação própria — trocar um pelo outro muda (e pode confundir) o sentido da frase.",
        feedbackErro:
          "'Mas' indica oposição; 'porque' pede uma causa. Trocar um pelo outro deixa a frase sem sentido claro.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça-Conectivos em Família",
    materiais: ["Papel e lápis", "Um livro, revista ou bilhete de casa"],
    passos: [
      "1) Escolha um pequeno texto e procure por conectivos (e, mas, porque, por isso, quando, então).",
      "2) Para cada conectivo encontrado, escreva ao lado qual relação ele cria: soma, oposição, causa, consequência ou tempo.",
      "3) Escolha uma frase do texto e troque o conectivo por outro, criando um novo sentido (às vezes engraçado!).",
      "4) Leia as descobertas para alguém da família.",
    ],
    registro: "📝 A lista de conectivos encontrados com suas relações, mais a frase transformada com o conectivo trocado.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
