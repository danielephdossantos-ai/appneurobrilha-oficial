import type { AulaPortuguesV4 } from "../../types";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as calendario } from "@/assets/neuro-treino/objetos/calendario.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as trem } from "@/assets/neuro-treino/objetos/trem.png.asset.json";
import { url as ilha } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as macaco } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as passaro } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";

/**
 * Aula 2 — Tempos verbais na narrativa
 * -------------------------------------------------------------
 * Segunda parada da Unidade 3. A expedição percebe que cada relato
 * escolhe UM tempo verbal principal e mantém a coerência: se começa
 * no passado, não pode "pular" pro futuro no meio da história sem
 * motivo.
 *
 * Foco pedagógico:
 *  - Reconhecer presente, pretérito perfeito, pretérito imperfeito
 *    e futuro em frases reais.
 *  - Perceber o USO de cada tempo (o que já aconteceu, o que
 *    acontecia sempre, o que vai acontecer).
 *  - Manter o tempo verbal coerente dentro de um mesmo texto.
 *
 * BNCC: EF04LP07, EF04LP08, EF35LP12.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-tempos-verbais",
  titulo: "Tempos verbais na narrativa",
  iconeTrilha: "⏳",
  bncc: ["EF04LP07", "EF04LP08", "EF35LP12"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A máquina do tempo do relato",
    historia:
      "Brilha abriu o diário de bordo da expedição. — Todo relato viaja no tempo: ele conta o que JÁ aconteceu, o que ACONTECE sempre, ou o que VAI acontecer. Mas cuidado: se o relato começa contando o passado, ele não pode 'pular' pro futuro no meio sem avisar — senão o leitor se perde!",
    imagemUrl: calendario,
  },

  momento02_previsao: {
    instrucao:
      "No trem da expedição, alguém deixou uma página solta do diário de bordo. Leia antes de decidir do que ela trata.",
    bloco: {
      titulo: "A Página Solta do Diário",
      capaImagemUrl: trem,
      recado: {
        rotulo: "Diário de bordo",
        icone: "📔",
        estilo: "papel",
        linhas: [
          "Ontem, cruzamos a ilha dos macacos.",
          "Hoje, seguimos de trem até a ponte.",
          "Amanhã, atravessaremos o rio.",
        ],
      },
      pistas: [
        { imagemUrl: ilha, nome: "Uma ilha" },
        { imagemUrl: ponte, nome: "Uma ponte" },
      ],
      pergunta: "Sobre o que essa página do diário vai tratar?",
      hipoteses: [
        { texto: "A viagem da expedição em três dias diferentes.", imagemUrl: trem },
        { texto: "Uma partida de futebol.", imagemUrl: macaco },
        { texto: "A lista de compras do mercado.", imagemUrl: calendario },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Repare nos três tempos: 'cruzamos' (passado), 'seguimos' (presente/passado próximo) e 'atravessaremos' (futuro) — a expedição em três momentos.",
      feedbackErro:
        "Releia a página: ela fala do que aconteceu ONTEM, o que acontece HOJE e o que vai acontecer AMANHÃ.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de seguir viagem, conheça os tempos que guiam o relato.",
    cards: [
      {
        palavra: "pretérito perfeito",
        explicacao:
          "Conta algo que JÁ terminou de acontecer, uma ação completa no passado.",
        exemplo: "'A expedição cruzou o rio.' — a travessia já terminou.",
        imagemUrl: ponte,
      },
      {
        palavra: "pretérito imperfeito",
        explicacao:
          "Conta algo que acontecia REPETIDAMENTE ou continuamente no passado, sem hora certa de terminar.",
        exemplo: "'Os macacos viviam naquela ilha há anos.' — uma ação contínua, de costume.",
        imagemUrl: macaco,
      },
      {
        palavra: "futuro",
        explicacao:
          "Conta algo que AINDA vai acontecer, que ainda não ocorreu.",
        exemplo: "'Amanhã, atravessaremos o rio.' — a ação ainda não aconteceu.",
        imagemUrl: mapa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "O relato muda de tempo, mas precisa ser coerente",
    instrucao: "Observe a mesma cena contada em tempos diferentes — e um erro de coerência.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Todos os dias, o pássaro sobrevoa a ilha.",
            explicacao: "PRESENTE: uma ação que se repete, um hábito do pássaro.",
          },
          {
            texto: "Ontem, o pássaro sobrevoou a ilha.",
            explicacao: "PRETÉRITO PERFEITO: a ação já aconteceu e terminou.",
          },
          {
            texto: "❌ Ontem, o pássaro sobrevoa a ilha e amanhã sobrevoou de novo.",
            explicacao:
              "Errado! A frase mistura passado ('ontem') com presente ('sobrevoa') e depois volta pro passado ('sobrevoou') sem sentido — o tempo ficou incoerente.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o relato da travessia da ilha. Observe como o tempo verbal se mantém coerente do início ao fim.",
    leitura: {
      titulo: "Relato: A Ilha dos Macacos",
      imagemUrl: ilha,
      legendaImagem: "A ilha onde os macacos viviam",
      destacar: ["chegou", "viviam", "brincavam", "atravessará"],
      paragrafos: [
        "A expedição chegou à ilha ao amanhecer. Ali, dezenas de macacos viviam entre as árvores altas, e brincavam pulando de galho em galho.",
        "Um dos exploradores registrou no diário: os macacos daquela ilha sempre confiavam nos visitantes silenciosos.",
        "Amanhã, o grupo atravessará a ponte de corda até a próxima ilha, para continuar registrando os animais da região.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no relato se precisar. Toda resposta está escrita.",
    perguntas: [
      {
        pergunta: "Quando a expedição chegou à ilha?",
        opcoes: ["Ao anoitecer", "Ao amanhecer", "À tarde"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! 'A expedição chegou à ilha ao amanhecer' — verbo no pretérito perfeito, ação já concluída.",
        feedbackErro: "A primeira frase diz: 'A expedição chegou à ilha ao amanhecer'.",
        ondeEstaNoTexto: "A expedição chegou à ilha ao amanhecer.",
      },
      {
        pergunta: "O que os macacos faziam entre as árvores?",
        opcoes: ["Dormiam o dia todo", "Viviam e brincavam pulando de galho em galho", "Construíam casas"],
        correta: 1,
        feedbackAcerto:
          "🎉 Correto! 'Viviam' e 'brincavam' estão no pretérito imperfeito — uma ação repetida, de costume dos macacos.",
        feedbackErro: "No primeiro parágrafo: 'macacos viviam entre as árvores... e brincavam pulando'.",
        ondeEstaNoTexto: "dezenas de macacos viviam entre as árvores altas, e brincavam pulando de galho em galho.",
      },
      {
        pergunta: "O que o grupo vai fazer amanhã?",
        opcoes: [
          "Voltar para casa",
          "Atravessar a ponte de corda até a próxima ilha",
          "Dormir na ilha para sempre",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! 'Atravessará' está no futuro — a ação ainda não aconteceu.",
        feedbackErro: "No último parágrafo: 'o grupo atravessará a ponte de corda até a próxima ilha'.",
        ondeEstaNoTexto: "Amanhã, o grupo atravessará a ponte de corda até a próxima ilha.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Observe como cada verbo do relato marca um momento diferente da história.",
    perguntas: [
      {
        pergunta: "Por que o verbo 'chegou' está no pretérito perfeito?",
        opcoes: [
          "Porque a chegada já aconteceu e terminou",
          "Porque a chegada ainda vai acontecer",
          "Porque a chegada acontece todos os dias",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso mesmo! O pretérito perfeito conta ações já concluídas — a expedição já chegou.",
        feedbackErro:
          "Pretérito perfeito = ação que JÁ terminou. A chegada da expedição já aconteceu, por isso 'chegou'.",
      },
      {
        pergunta: "Por que 'viviam' e 'brincavam' estão no pretérito imperfeito, e não no perfeito?",
        opcoes: [
          "Porque descrevem um costume repetido dos macacos, sem hora de terminar",
          "Porque são verbos de ação futura",
          "Porque a frase está errada",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! O imperfeito descreve costumes e ações contínuas no passado — os macacos SEMPRE viviam e brincavam ali.",
        feedbackErro:
          "O imperfeito serve para contar algo que acontecia repetidamente, como um costume — por isso 'viviam' e 'brincavam'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As páginas do diário se misturaram. Ordene do que já aconteceu até o que ainda vai acontecer.",
    bloco: {
      instrucao: "Siga a linha do tempo: passado, depois futuro.",
      itens: [
        { id: "p1", texto: "A expedição chegou à ilha ao amanhecer.", imagemUrl: ilha },
        { id: "p2", texto: "Os macacos viviam e brincavam entre as árvores.", imagemUrl: macaco },
        { id: "p3", texto: "Amanhã, o grupo atravessará a ponte de corda.", imagemUrl: ponte },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Linha do tempo montada! Você seguiu do que já aconteceu até o que ainda vai acontecer.",
      feedbackErro:
        "Pense no tempo de cada verbo: 'chegou' e 'viviam' são passado; 'atravessará' é futuro.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Nova leitura, sozinho agora. Depois responda.",
    leitura: {
      titulo: "O Pássaro Guia",
      imagemUrl: passaro,
      destacar: ["voava", "avistou", "seguirá"],
      paragrafos: [
        "Todos os dias, um pássaro colorido voava sobre o acampamento, como se conhecesse cada trilha da região.",
        "Ontem, a expedição avistou o pássaro pousado numa árvore próxima ao rio, e decidiu segui-lo.",
        "Amanhã, o grupo seguirá o pássaro até uma nova parte da floresta, ainda não explorada.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que o pássaro fazia todos os dias?",
        opcoes: ["Dormia no ninho", "Voava sobre o acampamento", "Cantava só à noite"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Voava' está no imperfeito — um hábito repetido do pássaro.",
        feedbackErro: "A primeira frase diz: 'um pássaro colorido voava sobre o acampamento'.",
        ondeEstaNoTexto: "Todos os dias, um pássaro colorido voava sobre o acampamento.",
      },
      {
        pergunta: "O que a expedição fará amanhã?",
        opcoes: ["Vai embora da floresta", "Seguirá o pássaro até uma nova parte da floresta", "Vai construir uma ponte"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'Seguirá' está no futuro — ainda vai acontecer.",
        feedbackErro: "No último parágrafo: 'o grupo seguirá o pássaro até uma nova parte da floresta'.",
        ondeEstaNoTexto: "Amanhã, o grupo seguirá o pássaro até uma nova parte da floresta.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Linha do Tempo do Relato",
    instrucao: "Arraste cada frase para o tempo verbal certo: PASSADO, PRESENTE ou FUTURO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Passado, Presente ou Futuro?",
      bloco: {
        instrucao: "Leia cada frase e identifique quando a ação acontece.",
        itens: [
          { id: "i1", texto: "A expedição cruzou o rio.", alvoId: "passado" },
          { id: "i2", texto: "A expedição cruza o rio todos os anos.", alvoId: "presente" },
          { id: "i3", texto: "A expedição cruzará o rio amanhã.", alvoId: "futuro" },
          { id: "i4", texto: "Os macacos viviam na ilha.", alvoId: "passado" },
          { id: "i5", texto: "Os macacos vivem na ilha.", alvoId: "presente" },
          { id: "i6", texto: "Os macacos viverão em outra ilha.", alvoId: "futuro" },
        ],
        alvos: [
          { id: "passado", nome: "Passado", descricao: "Já aconteceu" },
          { id: "presente", nome: "Presente", descricao: "Acontece sempre/agora" },
          { id: "futuro", nome: "Futuro", descricao: "Ainda vai acontecer" },
        ],
        feedbackAcerto:
          "🎉 Muito bem! Você reconheceu os sinais de cada tempo verbal na terminação do verbo.",
        feedbackErro:
          "Dica: verbos terminados em -OU/-EU/-IU costumam ser passado; -RÁ/-ERÁ/-IRÁ costumam ser futuro.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PRETÉRITO PERFEITO conta uma ação que JÁ terminou (cruzou, chegou, avistou).",
      "PRETÉRITO IMPERFEITO conta um hábito ou ação repetida no passado (vivia, brincava, voava).",
      "FUTURO conta uma ação que AINDA vai acontecer (atravessará, seguirá).",
      "Um bom relato mantém o MESMO tempo verbal principal, sem misturar sem motivo.",
    ],
    miniDesafio: {
      pergunta: "Qual verbo está no pretérito imperfeito (ação repetida no passado)?",
      opcoes: ["chegou", "vivia", "atravessará"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'Vivia' descreve um costume no passado, sem hora certa de terminar.",
      feedbackErro: "Pretérito imperfeito descreve costume/repetição no passado. 'Chegou' é perfeito e 'atravessará' é futuro.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que o pretérito perfeito indica?",
        opcoes: ["Uma ação que já terminou", "Uma ação que ainda vai acontecer", "Uma ação que acontece sempre"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O pretérito perfeito conta ações já concluídas.",
        feedbackErro: "Pretérito perfeito = ação já terminada no passado.",
      },
      {
        pergunta: "2/5 — Qual frase está no futuro?",
        opcoes: ["A expedição cruzou o rio.", "A expedição cruzará o rio.", "A expedição cruza o rio."],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Cruzará' indica uma ação que ainda vai acontecer.",
        feedbackErro: "Futuro tem terminação -RÁ. 'Cruzará' é a única no futuro.",
      },
      {
        pergunta: "3/5 — Qual verbo indica um costume repetido no passado?",
        opcoes: ["viverá", "vivia", "vive"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'Vivia' é pretérito imperfeito — costume no passado.",
        feedbackErro: "O imperfeito descreve repetição no passado, como 'vivia', 'brincava', 'voava'.",
      },
      {
        pergunta: "4/5 — Qual frase está INCOERENTE (mistura tempos sem motivo)?",
        opcoes: [
          "A expedição chegou de manhã e explorou a ilha à tarde.",
          "A expedição chega ontem e explorará a ilha.",
          "Amanhã, a expedição chegará e explorará a ilha.",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! 'Chega ontem' mistura presente com uma palavra de passado ('ontem'), e depois pula pro futuro — incoerente.",
        feedbackErro:
          "Observe as pistas de tempo: 'ontem' pede passado, não presente. A frase 2 mistura tudo errado.",
      },
      {
        pergunta: "5/5 — Complete mantendo a coerência: 'Ontem, os macacos ___ na árvore.'",
        opcoes: ["brincam", "brincarão", "brincaram"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! 'Ontem' pede passado — 'brincaram' está correto e coerente.",
        feedbackErro: "A palavra 'ontem' já indica passado, então o verbo precisa concordar: brincaram.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Diário de Bordo em Família",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Escreva uma frase contando algo que você FEZ ontem (pretérito perfeito).",
      "2) Escreva uma frase contando algo que você FAZIA sempre quando era menor (pretérito imperfeito).",
      "3) Escreva uma frase contando algo que você VAI fazer amanhã (futuro).",
      "4) Leia as três frases para alguém da família e explique qual tempo verbal usou em cada uma.",
    ],
    registro: "📝 As três frases escritas, com o tempo verbal de cada uma identificado ao lado.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
