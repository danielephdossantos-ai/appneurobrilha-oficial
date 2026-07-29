import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as tenda } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as pegadas } from "@/assets/neuro-treino/objetos/pedra.png.asset.json";
import { url as praia } from "@/assets/neuro-treino/objetos/praia.png.asset.json";

/**
 * Aula 2 — Inferência: o que o texto não diz
 * -------------------------------------------------------------
 * Foco pedagógico: inferência (EF35LP04) — deduzir informações que
 * o texto sugere através de pistas, sem estarem escritas com todas
 * as letras. Tema de expedição: pistas deixadas na trilha.
 *
 * BNCC: EF35LP03, EF35LP04, EF35LP05
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-inferencia-o-que-o-texto-nao-diz",
  titulo: "Inferência: o que o texto não diz",
  iconeTrilha: "🔎",
  bncc: ["EF35LP04", "EF35LP03", "EF35LP05"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A trilha que fala sem falar",
    historia:
      "Brilha parou de repente na trilha e apontou para o chão. — Olhe: não vimos ninguém passar por aqui, mas essas pegadas frescas, essa fogueira ainda com fumaça e essa mochila esquecida contam uma história inteira. Um bom explorador não precisa que TUDO esteja escrito ou visível: ele junta as pistas e DEDUZ o que aconteceu. Isso se chama inferência. Vamos treinar esse olhar hoje?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Observe as pistas encontradas no acampamento abandonado. O que elas sugerem sobre o que aconteceu ali, mesmo sem ninguém contar?",
    bloco: {
      titulo: "O Acampamento Abandonado",
      capaImagemUrl: tenda,
      pistas: [
        { imagemUrl: pegadas, nome: "Pegadas apressadas na lama" },
        { imagemUrl: nuvem, nome: "Céu escuro de tempestade" },
      ],
      recado: {
        rotulo: "O que restou no acampamento",
        icone: "⛺",
        linhas: [
          "Barracas caídas e molhadas.",
          "Panela de comida ainda quente no fogo apagado.",
          "Pegadas fundas indo em direção à floresta.",
        ],
        estilo: "papel",
      },
      pergunta: "O que provavelmente aconteceu naquele acampamento?",
      hipoteses: [
        { texto: "Os exploradores fugiram às pressas de uma tempestade repentina" },
        { texto: "Os exploradores foram embora de férias planejadas" },
        { texto: "Ninguém jamais esteve naquele acampamento" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔎 Ótima dedução! Barracas caídas, comida abandonada ainda quente e pegadas apressadas indicam uma saída repentina — provavelmente por causa de uma tempestade, já que o texto nem precisou dizer isso diretamente.",
      feedbackErro:
        "Junte as pistas: comida ainda quente (saíram rápido), barracas caídas (algo forte aconteceu) e pegadas apressadas (correram). Tudo isso aponta para uma fuga repentina, não umas férias tranquilas.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras-chave para decifrar o que o texto esconde nas entrelinhas.",
    cards: [
      {
        palavra: "inferência",
        explicacao:
          "É a conclusão que tiramos juntando as pistas do texto com o que já sabemos do mundo, mesmo que essa conclusão não esteja escrita com todas as letras.",
        exemplo: "O texto não diz 'estava chovendo', mas fala em 'guarda-chuvas abertos' — por inferência, sabemos que chovia.",
        imagemUrl: lupa,
      },
      {
        palavra: "entrelinhas",
        explicacao:
          "É o que o texto sugere sem dizer diretamente — como se houvesse um segundo texto escondido entre as linhas do primeiro.",
        exemplo: "Quando um personagem 'suspira e olha pela janela por horas', está nas entrelinhas que ele sente saudade ou tristeza.",
        imagemUrl: bussola,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com atenção redobrada: nem tudo o que a história quer dizer está escrito diretamente.",
    leitura: {
      titulo: "O Silêncio da Ilha",
      imagemUrl: praia,
      legendaImagem: "A praia deserta onde a expedição desembarcou",
      destacar: ["nenhum som de pássaros", "restos de fogueira apagada há dias", "trilha coberta de folhas secas"],
      paragrafos: [
        "A equipe desembarcou na ilha ao amanhecer, esperando o barulho costumeiro de pássaros e macacos. Mas havia um silêncio estranho — nenhum som de pássaros, nem sequer o zumbido de insetos.",
        "Perto da praia, encontraram restos de uma fogueira apagada há dias, já cobertos por areia levada pelo vento. A trilha que levava ao interior da ilha estava coberta de folhas secas, sem nenhuma marca recente de passos.",
        "Helena anotou tudo no diário, intrigada. Algo tinha mudado naquela ilha, e ela ainda não sabia dizer exatamente o quê — mas as pistas já começavam a contar uma história.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "O que a equipe esperava ouvir ao desembarcar, mas não ouviu?",
        opcoes: ["O som do mar", "O barulho de pássaros e macacos", "Vozes de outros exploradores"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O texto diz que esperavam 'o barulho costumeiro de pássaros e macacos'.",
        feedbackErro: "Releia o primeiro parágrafo — o som esperado aparece logo no início.",
        ondeEstaNoTexto: "…esperando o barulho costumeiro de pássaros e macacos.",
      },
      {
        pergunta: "Há quanto tempo a fogueira encontrada estava apagada?",
        opcoes: ["Há poucos minutos", "Há dias", "Há um ano"],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O texto diz 'restos de uma fogueira apagada há dias'.",
        feedbackErro: "A resposta está no início do segundo parágrafo, logo depois de 'fogueira'.",
        ondeEstaNoTexto: "…restos de uma fogueira apagada há dias…",
      },
      {
        pergunta: "Como estava a trilha para o interior da ilha?",
        opcoes: ["Cheia de pegadas recentes", "Coberta de folhas secas, sem marcas recentes", "Recém-cortada pela equipe"],
        correta: 1,
        feedbackAcerto: "🔎 Boa! 'A trilha... estava coberta de folhas secas, sem nenhuma marca recente de passos.'",
        feedbackErro: "Releia o fim do segundo parágrafo — a descrição da trilha vem logo depois de 'interior da ilha'.",
        ondeEstaNoTexto: "A trilha que levava ao interior da ilha estava coberta de folhas secas, sem nenhuma marca recente de passos.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Hora de usar a inferência: o texto não diz tudo diretamente, mas as pistas apontam um caminho.",
    perguntas: [
      {
        pergunta: "Juntando as pistas (silêncio total, fogueira apagada há dias, trilha sem marcas recentes), o que é possível inferir?",
        opcoes: [
          "A ilha está sendo visitada por muitos turistas atualmente",
          "Ninguém, nem animal, passou por ali há um bom tempo",
          "A equipe já tinha estado nessa ilha antes",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Isso mesmo! O silêncio, a fogueira antiga e a trilha sem marcas recentes indicam que aquele lugar ficou tempo sem visitantes ou animais — o texto nunca disse isso diretamente, mas as pistas provam.",
        feedbackErro:
          "Pense: se algo ou alguém tivesse passado recentemente, haveria sons de animais e marcas na trilha. A ausência de tudo isso é a pista de que o lugar ficou tempo abandonado.",
      },
      {
        pergunta: "Por que Helena ficou 'intrigada' com o que encontrou?",
        opcoes: [
          "Porque ela já sabia exatamente o que tinha acontecido",
          "Porque as pistas mostravam uma mudança estranha, mas a explicação ainda não estava clara",
          "Porque ela não gostava de explorar ilhas",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Exatamente! O texto mostra pistas de mudança (silêncio, fogueira antiga) sem explicar o motivo — por isso Helena fica curiosa e o leitor também precisa inferir.",
        feedbackErro:
          "O texto diz que ela 'ainda não sabia dizer exatamente o quê' — ou seja, as pistas intrigam porque sugerem algo sem explicar tudo.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as descobertas da equipe na ordem em que elas apareceram no relato.",
    bloco: {
      instrucao: "Do começo ao fim da chegada à ilha.",
      itens: [
        { id: "p1", texto: "A equipe desembarca e estranha o silêncio total da ilha.", imagemUrl: praia },
        { id: "p2", texto: "Encontram uma fogueira apagada há dias, perto da praia.", imagemUrl: pegadas },
        { id: "p3", texto: "Percebem que a trilha está sem marcas recentes de passos.", imagemUrl: mapa },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔎 Perfeito! Você seguiu o rastro das pistas na ordem certa.",
      feedbackErro: "Pense como um explorador: primeiro se chega, depois se observa o entorno, e só então se examina o caminho mais adiante.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Nova pista para investigar! Leia sozinho e use a inferência para descobrir o que não está escrito.",
    leitura: {
      titulo: "A Carta Molhada",
      imagemUrl: mapa,
      destacar: ["tinta borrada", "cheiro de sal", "letra apressada"],
      paragrafos: [
        "Dentro de uma garrafa encontrada na areia, havia uma carta com a tinta borrada, quase ilegível em alguns trechos, e um forte cheiro de sal.",
        "A letra era apressada, com palavras cortadas pela metade: 'Se alguém encontrar isto... a tempestade nos pegou de surpresa... o barco...'",
        "A equipe se entreolhou em silêncio. Aquela garrafa carregava uma história que ninguém tinha contado por completo — mas as pistas já diziam muito.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que provavelmente molhou a tinta e deixou a carta borrada?",
        opcoes: ["Chuva no momento em que foi escrita", "Água do mar, já que a carta veio dentro de uma garrafa", "Café derramado"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! A carta veio numa garrafa encontrada na areia, com cheiro de sal — tudo aponta para a água do mar.",
        feedbackErro: "Pense de onde veio a carta: uma garrafa na areia, com cheiro de sal. Isso indica contato com a água do mar.",
      },
      {
        pergunta: "Pelas pistas (letra apressada, palavras cortadas, menção a tempestade), o que é razoável inferir sobre quem escreveu?",
        opcoes: [
          "Escreveu com calma, num dia tranquilo",
          "Escreveu correndo, durante ou logo depois de uma situação perigosa",
          "Escreveu só para se divertir, sem motivo sério",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Muito bem! Letra apressada, palavras cortadas e a menção à tempestade são pistas de urgência e perigo — o texto nunca disse isso com todas as letras.",
        feedbackErro:
          "Junte as pistas: pressa na escrita + palavras cortadas + menção a tempestade indicam que quem escreveu estava vivendo um momento de perigo.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "INFERIR é concluir algo que o texto não diz com todas as letras, juntando pistas + o que já sabemos.",
      "As pistas podem ser sons (ou a ausência deles), objetos, marcas, cheiros e até o jeito como algo foi escrito.",
      "Um bom explorador de textos junta VÁRIAS pistas antes de concluir — nunca decide com uma só.",
      "Mesmo inferindo, sempre voltamos ao texto para confirmar que as pistas usadas realmente estão lá.",
    ],
    miniDesafio: {
      pergunta: "Um relato diz: 'A tenda estava vazia, mas o café ainda fumegava na caneca'. O que dá para inferir?",
      opcoes: [
        "A pessoa saiu há pouco tempo, de forma repentina",
        "Ninguém jamais esteve ali",
        "A pessoa foi embora há muitos meses",
      ],
      correta: 0,
      feedbackAcerto: "🔎 Isso! Café ainda fumegando é pista de que alguém saiu há pouquíssimo tempo.",
      feedbackErro: "Pense: café fumegando esfria rápido. Isso é pista de que a pessoa esteve ali há muito pouco tempo.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que significa 'inferir' algo em um texto?",
        opcoes: [
          "Copiar exatamente o que está escrito",
          "Concluir algo que não está escrito, usando pistas do texto",
          "Ignorar as pistas e adivinhar ao acaso",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Inferir é usar pistas para concluir algo.",
        feedbackErro: "Inferir é USAR PISTAS reais do texto para chegar a uma conclusão que não está escrita diretamente.",
      },
      {
        pergunta: "2/5 — No acampamento abandonado, qual pista indicava uma saída repentina?",
        opcoes: ["A cor das barracas", "A comida ainda quente no fogo apagado", "O tamanho do acampamento"],
        correta: 1,
        feedbackAcerto: "🔎 Correto! Comida ainda quente indica que a saída foi muito recente e repentina.",
        feedbackErro: "A pista mais forte de pressa era a comida ainda quente — algo abandonado de repente.",
      },
      {
        pergunta: "3/5 — Na ilha silenciosa, o que o silêncio total sugeria?",
        opcoes: [
          "Que a ilha era muito visitada",
          "Que havia muito tempo sem animais ou pessoas por ali",
          "Que a equipe estava com sono",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Ausência de sons de animais é uma pista forte de abandono prolongado.",
        feedbackErro: "Se houvesse movimento recente de animais ou pessoas, haveria sons. O silêncio total é pista de abandono.",
      },
      {
        pergunta: "4/5 — Por que é importante voltar ao texto mesmo quando fazemos uma inferência?",
        opcoes: [
          "Para garantir que a inferência tem apoio em pistas reais do texto",
          "Porque toda pergunta tem resposta explícita",
          "Não é necessário voltar nunca",
        ],
        correta: 0,
        feedbackAcerto: "🔎 Exatamente! Toda inferência precisa se apoiar em pistas reais, não em suposições soltas.",
        feedbackErro: "Mesmo inferindo, é preciso checar se as pistas usadas realmente aparecem no texto.",
      },
      {
        pergunta: "5/5 — Na carta da garrafa, o que indicava urgência de quem escreveu?",
        opcoes: ["A letra apressada e as palavras cortadas", "O tamanho da garrafa", "A cor da tinta"],
        correta: 0,
        feedbackAcerto: "🔎 Isso! Você já lê nas entrelinhas como um verdadeiro explorador de textos! 🌟",
        feedbackErro: "A pressa aparece na letra apressada e nas palavras cortadas pela metade.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: as pistas escondidas em casa",
    materiais: ["Nenhum material especial — apenas observação"],
    passos: [
      "1) Escolham juntos um cômodo da casa (cozinha, quarto, sala).",
      "2) A criança observa 3 pistas do ambiente (uma xícara na pia, uma luz acesa, um casaco no sofá) e tenta INFERIR o que aconteceu ali recentemente.",
      "3) Um adulto confirma se a inferência estava certa e por quê.",
      "4) Repitam com outro cômodo, trocando quem observa e quem confirma.",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'Eu inferi que ___ porque as pistas eram ___.'",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
