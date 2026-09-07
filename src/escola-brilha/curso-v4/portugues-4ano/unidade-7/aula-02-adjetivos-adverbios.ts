import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Unidade 7 · Aula 2 — A Lupa dos Detalhes
 * -------------------------------------------------------------
 * Foco: adjetivos e advérbios que expandem a frase (EF04LP05) e
 * substituição/expansão de termos para dar mais informação à
 * frase (EF04LP16).
 * BNCC: EF04LP05, EF04LP16.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-adjetivos-adverbios",
  titulo: "A Lupa dos Detalhes",
  iconeTrilha: "🔍",
  bncc: ["EF04LP07"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Uma frase pequena que virou gigante",
    historia:
      "A expedição achou uma lupa mágica na trilha. Brilha apontou para a frase 'O animal andava' e disse: — Essa frase é curtinha, quase sem cor! Vou usar a lupa para dar mais detalhes: 'O animal FEROZ andava LENTAMENTE pela floresta.' Viu como ficou mais rica? Vamos descobrir como as palavras da lupa (adjetivos e advérbios) deixam a frase cheia de detalhes?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de usar a lupa dos detalhes.",
    bloco: {
      titulo: "A Lupa dos Detalhes",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: estrela, nome: "Uma palavra que descreve" },
        { imagemUrl: bussola, nome: "Uma palavra que indica o modo" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como palavras que descrevem (adjetivos) e palavras de modo/tempo/lugar (advérbios) deixam a frase mais rica.",
          imagemUrl: estrela,
        },
        { texto: "Como contar até dez em outra língua.", imagemUrl: livro },
        { texto: "Como desenhar uma lupa de verdade.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos descobrir como adjetivos e advérbios dão mais detalhe e cor à frase.",
      feedbackErro: "Pense na lupa: ela AUMENTA os detalhes de uma frase. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: adjetivo descreve o SUBSTANTIVO (animal feroz) e advérbio descreve o VERBO (andava lentamente). Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora conhece o nome de cada peça da lupa antes de usá-la.",
    cards: [
      {
        palavra: "adjetivo",
        explicacao: "Palavra que dá uma característica ao substantivo: como ele é.",
        exemplo: "O animal FEROZ. FEROZ descreve o animal.",
        imagemUrl: estrela,
      },
      {
        palavra: "advérbio",
        explicacao: "Palavra que dá informação sobre o verbo: de que modo, quando, onde ou quanto acontece.",
        exemplo: "Andava LENTAMENTE. LENTAMENTE diz como o animal andava.",
        imagemUrl: bussola,
      },
      {
        palavra: "expansão da frase",
        explicacao: "Quando acrescentamos palavras a uma frase para deixá-la mais rica em detalhes.",
        exemplo: "O animal andava. → O animal feroz andava lentamente pela floresta escura.",
        imagemUrl: lapis,
      },
      {
        palavra: "substituição de termos",
        explicacao: "Trocar uma palavra repetida por outra parecida ou por um pronome, deixando o texto mais elegante.",
        exemplo: "O lobo é esperto. O lobo caça à noite. → O lobo é esperto. ELE caça à noite.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Detalhando a frase com a lupa",
    instrucao: "Veja a frase crescer quando acrescentamos adjetivos e advérbios.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Adjetivo descreve o substantivo; advérbio descreve o verbo",
        explicacao:
          "O adjetivo acompanha o substantivo e diz como ele é: casa GRANDE, menina CORAJOSA, rio LIMPO. O advérbio acompanha o verbo e diz de que modo, quando, onde ou quanto a ação acontece: correu RAPIDAMENTE (modo), chegou CEDO (tempo), morava PERTO (lugar), gritou MUITO (intensidade). Muitos advérbios de modo terminam em -MENTE (feliz → felizmente).",
        exemplos: [
          { palavra: "casa grande", destaque: "grande", motivo: "Adjetivo: descreve a casa." },
          { palavra: "correu rapidamente", destaque: "rapidamente", motivo: "Advérbio de modo: descreve como correu." },
          { palavra: "chegou cedo", destaque: "cedo", motivo: "Advérbio de tempo: descreve quando chegou." },
        ],
        desafios: [
          {
            molde: "o gato _ dormia",
            opcoes: ["preguiçoso", "rapidamente", "cedo"],
            correta: 0,
            frase: "O gato preguiçoso dormia o dia inteiro.",
            feedbackErro: "PREGUIÇOSO é adjetivo: descreve como é o gato (substantivo).",
          },
          {
            molde: "ela falou _",
            opcoes: ["alegre", "gentilmente", "carinhosa"],
            correta: 1,
            frase: "Ela falou gentilmente com o visitante.",
            feedbackErro: "GENTILMENTE é advérbio: descreve o modo como ela FALOU (verbo).",
          },
          {
            molde: "chegamos _",
            opcoes: ["tarde", "corajoso", "veloz"],
            correta: 0,
            frase: "Chegamos tarde na estação.",
            feedbackErro: "TARDE é advérbio de tempo: diz quando chegamos.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou a descoberta no diário de bordo da expedição.",
    leitura: {
      titulo: "O Diário da Lupa dos Detalhes",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["adjetivo", "advérbio", "expandir", "substantivo"],
      paragrafos: [
        "Uma frase pode nascer bem curtinha, como 'O animal andava'. Mas dá para EXPANDIR essa frase, acrescentando palavras que trazem mais detalhes.",
        "O ADJETIVO é a palavra que descreve o SUBSTANTIVO: como ele é, de que cor, de que jeito. Em 'o animal FEROZ', a palavra FEROZ é o adjetivo.",
        "O ADVÉRBIO é a palavra que acompanha o verbo e informa o modo, o tempo, o lugar ou a intensidade da ação. Em 'andava LENTAMENTE', a palavra LENTAMENTE é o advérbio de modo.",
        "Quando juntamos tudo, a frase cresce e ganha vida: 'O animal feroz andava lentamente pela floresta escura.' Também podemos deixar o texto mais elegante trocando palavras repetidas por outras: em vez de repetir 'o lobo', usamos ELE.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que é o adjetivo?",
        opcoes: [
          "A palavra que descreve o substantivo",
          "A palavra que substitui o verbo",
          "Um sinal de pontuação",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Adjetivo descreve o substantivo.",
        feedbackErro: "Releia: 'O ADJETIVO é a palavra que descreve o SUBSTANTIVO'.",
        ondeEstaNoTexto: "O ADJETIVO é a palavra que descreve o SUBSTANTIVO",
        dica: "🧭 Pista de explorador: volte ao texto e releia o segundo parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A palavra que descreve o substantivo”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que o advérbio informa sobre o verbo?",
        opcoes: [
          "Modo, tempo, lugar ou intensidade da ação",
          "A cor do substantivo",
          "O plural da palavra",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Advérbio informa modo, tempo, lugar ou intensidade.",
        feedbackErro: "Releia: 'O ADVÉRBIO... informa o modo, o tempo, o lugar ou a intensidade da ação.'",
        ondeEstaNoTexto: "informa o modo, o tempo, o lugar ou a intensidade da ação",
        dica: "🧭 Pista de explorador: releia o terceiro parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Modo, tempo, lugar ou intensidade da ação”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que podemos fazer para o texto ficar mais elegante e evitar repetição?",
        opcoes: [
          "Trocar palavras repetidas por outras, como pronomes",
          "Escrever tudo em letra maiúscula",
          "Repetir sempre a mesma palavra",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Substituir termos repetidos deixa o texto mais elegante.",
        feedbackErro: "Releia o final: 'podemos deixar o texto mais elegante trocando palavras repetidas por outras'.",
        ondeEstaNoTexto: "trocando palavras repetidas por outras, usamos ELE",
        dica: "🧭 Pista de explorador: releia o último parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Trocar palavras repetidas por outras, como pronomes”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a descoberta e onde ela é registrada?",
    perguntas: [
      {
        pergunta: "Onde Brilha registrou a descoberta sobre adjetivos e advérbios?",
        opcoes: ["No diário de bordo da expedição", "Numa placa da estrada", "Num bilhete perdido"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A descoberta foi registrada no diário de bordo.",
        feedbackErro: "Releia o título: 'O Diário da Lupa dos Detalhes' — é onde tudo foi anotado.",
        dica: "🧭 Pista de explorador: releia o título da leitura guiada.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No diário de bordo da expedição”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual frase Brilha usou como exemplo na motivação?",
        opcoes: [
          "O animal feroz andava lentamente pela floresta.",
          "O lobo caça à noite.",
          "A casa é grande e bonita.",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Essa foi a frase transformada pela lupa.",
        feedbackErro: "Volte à motivação: Brilha usou a lupa na frase sobre o animal na floresta.",
        dica: "🧭 Pista de explorador: releia a história da motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O animal feroz andava lentamente pela floresta.”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para expandir uma frase com a lupa dos detalhes.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Escreva a frase básica, com sujeito e verbo.", imagemUrl: livro },
        { id: "p2", texto: "Acrescente um adjetivo para descrever o substantivo.", imagemUrl: estrela },
        { id: "p3", texto: "Acrescente um advérbio para descrever o verbo.", imagemUrl: bussola },
        { id: "p4", texto: "Releia e veja se a frase ficou mais rica em detalhes.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para expandir uma frase com a lupa.",
      feedbackErro: "Pense: primeiro escrevemos a frase simples, depois acrescentamos adjetivo e advérbio, e por fim revisamos.",
      dica: "🧭 Pista de explorador: a frase básica vem sempre primeiro.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um trecho de um relato de viagem e responda.",
    leitura: {
      titulo: "O Relato da Trilha Encantada",
      imagemUrl: arvore,
      destacar: ["densa", "silenciosamente", "cautelosamente"],
      paragrafos: [
        "A expedição entrou na floresta densa e caminhou silenciosamente entre as árvores altas. Todos observavam cautelosamente cada ruído.",
        "De repente, um pássaro colorido cruzou o céu rapidamente. Brilha anotou: — DENSA descreve a floresta, é adjetivo. SILENCIOSAMENTE descreve como caminhamos, é advérbio.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual palavra descreve a floresta no texto?",
        opcoes: ["Densa", "Rapidamente", "Colorido"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! DENSA é o adjetivo que descreve a floresta.",
        feedbackErro: "Releia: 'A expedição entrou na floresta densa'.",
        ondeEstaNoTexto: "A expedição entrou na floresta densa",
        dica: "🧭 Pista de explorador: volte ao primeiro parágrafo do texto.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Densa”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Que palavra do texto diz COMO a expedição caminhou?",
        opcoes: ["Silenciosamente", "Densa", "Pássaro"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! SILENCIOSAMENTE é o advérbio de modo.",
        feedbackErro: "Releia: 'caminhou silenciosamente entre as árvores'.",
        ondeEstaNoTexto: "caminhou silenciosamente entre as árvores",
        dica: "🧭 Pista de explorador: releia o final do primeiro parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Silenciosamente”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Classifique com a lupa",
    instrucao: "Arraste cada palavra até a gaveta certa: adjetivo ou advérbio.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "As Gavetas da Lupa",
      bloco: {
        instrucao: "Pense se a palavra descreve o substantivo (adjetivo) ou o verbo (advérbio).",
        itens: [
          { id: "i1", texto: "feroz", alvoId: "adjetivo" },
          { id: "i2", texto: "corajosa", alvoId: "adjetivo" },
          { id: "i3", texto: "gigante", alvoId: "adjetivo" },
          { id: "i4", texto: "lentamente", alvoId: "adverbio" },
          { id: "i5", texto: "hoje", alvoId: "adverbio" },
          { id: "i6", texto: "aqui", alvoId: "adverbio" },
          { id: "i7", texto: "silencioso", alvoId: "adjetivo" },
          { id: "i8", texto: "rapidamente", alvoId: "adverbio" },
        ],
        alvos: [
          { id: "adjetivo", nome: "Adjetivo", imagemUrl: estrela, descricao: "Descreve o substantivo" },
          { id: "adverbio", nome: "Advérbio", imagemUrl: bussola, descricao: "Descreve o verbo" },
        ],
        feedbackAcerto: "🎉 Excelente! Você organizou as gavetas da lupa.",
        feedbackErro: "Pense: a palavra descreve uma pessoa/coisa (adjetivo) ou uma ação (advérbio)?",
        dica: "🧭 Pista de explorador: adjetivo combina com substantivo; advérbio combina com verbo.",
      },
    },
  },

  momento_escrita: {
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Texto com adjetivos e advérbios",
        comando:
          "Escreva um parágrafo descrevendo um animal da expedição, usando pelo menos 3 adjetivos (para descrever o animal) e 2 advérbios (para descrever suas ações).",
        linhas: 5,
        modelo: [
          "O tigre listrado e forte caminhava silenciosamente pela mata densa.",
          "Ele observava cautelosamente cada movimento e, de repente, corria rapidamente atrás da presa.",
          "Era um animal corajoso, sempre atento ao redor.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Usei pelo menos 3 adjetivos para descrever o animal.",
          "Usei pelo menos 2 advérbios para descrever as ações.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Evitei repetir a mesma palavra várias vezes.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: A Lupa dos Detalhes",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO. A meta não é correr: é ler como quem conta.",
    texto: [
      "A lupa mágica mostrou que uma frase simples pode crescer com poucos detalhes bem escolhidos.",
      "Um adjetivo bem colocado descreve o personagem, e um advérbio mostra exatamente como ele age.",
      "Assim, a história ganha cores, sons e movimento, e o leitor sente que está dentro dela.",
    ],
    metaSegundos: 30,
  },

  momento09_revisao: {
    pontos: [
      "Adjetivo é a palavra que descreve o substantivo (como ele é).",
      "Advérbio é a palavra que acompanha o verbo e informa modo, tempo, lugar ou intensidade.",
      "Adjetivos e advérbios expandem a frase, deixando-a mais rica em detalhes.",
      "Substituir termos repetidos por pronomes deixa o texto mais elegante.",
    ],
    miniDesafio: {
      pergunta: "Em 'o gato preguiçoso dormia', qual é o adjetivo?",
      opcoes: ["Preguiçoso", "Dormia", "Gato"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! PREGUIÇOSO descreve o gato.",
      feedbackErro: "Releia a explicação: adjetivo descreve o substantivo GATO.",
      dica: "🧭 Pista de explorador: adjetivo acompanha o substantivo.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “Preguiçoso”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o adjetivo?",
        opcoes: ["A palavra que descreve o substantivo", "A palavra que substitui o verbo", "Um sinal de pontuação", "O plural da palavra"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Adjetivo descreve o substantivo.",
        feedbackErro: "Lembre: adjetivo descreve como é o substantivo.",
        feedbackOpcoes: [
          null,
          "❌ Isso é o pronome, não o adjetivo.",
          "❌ Sinal de pontuação não descreve nada.",
          "❌ Plural é outra forma da palavra, não adjetivo.",
        ],
        dica: "🧭 Pista de explorador: adjetivo diz como é o substantivo.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “A palavra que descreve o substantivo”.",
      },
      {
        pergunta: "2/5 — O que o advérbio informa?",
        opcoes: ["Modo, tempo, lugar ou intensidade da ação", "A cor do substantivo", "O gênero da palavra", "O plural do verbo"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Advérbio acompanha o verbo.",
        feedbackErro: "Advérbio informa como, quando, onde ou quanto a ação acontece.",
        feedbackOpcoes: [
          null,
          "❌ Cor é característica do substantivo, isso é adjetivo.",
          "❌ Gênero (masculino/feminino) não é papel do advérbio.",
          "❌ Plural do verbo não é função do advérbio.",
        ],
        dica: "🧭 Pista de explorador: advérbio acompanha o verbo.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Modo, tempo, lugar ou intensidade da ação”.",
      },
      {
        pergunta: "3/5 — Em 'ela cantou alegremente', qual é o advérbio?",
        opcoes: ["Alegremente", "Ela", "Cantou", "Alegre"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! ALEGREMENTE descreve como ela cantou.",
        feedbackErro: "Advérbios de modo costumam terminar em -MENTE.",
        feedbackOpcoes: [
          null,
          "❌ ELA é o sujeito da frase, não o advérbio.",
          "❌ CANTOU é o verbo, é ele quem o advérbio descreve.",
          "❌ ALEGRE (sem -MENTE) seria adjetivo, não advérbio.",
        ],
        dica: "🧭 Pista de explorador: -MENTE costuma indicar advérbio.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Alegremente”.",
      },
      {
        pergunta: "4/5 — Em 'a floresta densa', qual é o adjetivo?",
        opcoes: ["Densa", "Floresta", "A", "Nenhuma"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! DENSA descreve a floresta.",
        feedbackErro: "Pense: qual palavra descreve como é a floresta?",
        feedbackOpcoes: [
          null,
          "❌ FLORESTA é o substantivo, é ele quem é descrito.",
          "❌ 'A' é apenas o artigo, não descreve nada.",
          "❌ Existe sim um adjetivo na frase: DENSA.",
        ],
        dica: "🧭 Pista de explorador: adjetivo acompanha o substantivo FLORESTA.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Densa”.",
      },
      {
        pergunta: "5/5 — Para que serve expandir uma frase com adjetivos e advérbios?",
        opcoes: [
          "Para dar mais detalhes e riqueza à frase",
          "Para deixar a frase mais curta",
          "Para eliminar o verbo da frase",
          "Para trocar o sujeito da frase",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! Expandir a frase traz mais detalhes.",
        feedbackErro: "Releia: adjetivos e advérbios deixam a frase mais rica em detalhes.",
        feedbackOpcoes: [
          null,
          "❌ Expandir torna a frase mais longa, não mais curta.",
          "❌ O verbo continua presente na frase expandida.",
          "❌ O sujeito não muda ao expandir a frase.",
        ],
        dica: "🧭 Pista de explorador: expandir = acrescentar detalhes.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Para dar mais detalhes e riqueza à frase”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada aos adjetivos e advérbios",
    materiais: ["Papel e lápis", "Um livro, revista ou embalagem qualquer da casa"],
    passos: [
      "1) Junto com um adulto, escolham uma frase simples de um livro ou embalagem.",
      "2) Adicionem pelo menos 2 adjetivos para descrever os substantivos da frase.",
      "3) Adicionem pelo menos 1 advérbio para descrever o verbo da frase.",
      "4) Leiam a frase original e a frase expandida em voz alta e comparem.",
    ],
    registro: "📝 Uma foto ou anotação com a frase original e a frase expandida.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
