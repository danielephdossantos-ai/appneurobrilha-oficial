import type { AulaPortuguesV4 } from "../../types";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as raposa } from "@/assets/neuro-treino/objetos/raposa.png.asset.json";
import { url as jardim } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Unidade 9 — Aula 3: Eu Reconto a História
 * -------------------------------------------------------------
 * Fecho do curso. A criança reconta uma história ouvida, tendo o
 * adulto como escriba, cuidando de personagem, enredo, tempo e espaço.
 *
 * BNCC: EF01LP25 (recontagem com o professor como escriba)
 *       EF01LP26 (identificar personagens, enredo, tempo e espaço)
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-eu-reconto-a-historia",
  titulo: "Eu Reconto a História",
  iconeTrilha: "📖",
  bncc: ["EF01LP25", "EF01LP26"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Você conta, o adulto escreve",
    historia:
      "Brilha ouviu uma história linda e quis guardar. Só que escrever tudo dava trabalho. Então ele CONTOU em voz alta e a professora foi ESCREVENDO. Isso chama escriba: você fala a história do seu jeito e alguém escreve para você. A história vira sua!",
    imagemUrl: professora,
  },

  momento02_previsao: {
    instrucao: "Olhe a ficha do reconto e pense.",
    bloco: {
      titulo: "Ficha do reconto",
      capaImagemUrl: livro,
      recado: {
        rotulo: "Para recontar bem",
        icone: "📖",
        linhas: [
          "QUEM? — os personagens",
          "ONDE? — o lugar",
          "QUANDO? — o tempo",
          "O QUE ACONTECEU? — o enredo",
        ],
        estilo: "papel",
      },
      pergunta: "Para que serve essa ficha?",
      hipoteses: [
        { texto: "Para lembrar tudo na hora de recontar.", imagemUrl: livro },
        { texto: "Para fazer o lanche.", imagemUrl: papel },
        { texto: "Para desenhar a capa.", imagemUrl: menina },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! A ficha ajuda a não esquecer nenhuma parte.",
      feedbackErro:
        "Cada linha é uma pergunta da história: quem, onde, quando e o que aconteceu.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Quatro palavras de contador de histórias.",
    cards: [
      {
        palavra: "reconto",
        explicacao: "É contar de novo, com as suas palavras, uma história que você ouviu.",
        exemplo: "Mia fez o reconto da história do coelho.",
        imagemUrl: menina,
      },
      {
        palavra: "escriba",
        explicacao: "A pessoa que escreve o que você fala.",
        exemplo: "A professora foi a escriba do reconto.",
        imagemUrl: professora,
      },
      {
        palavra: "personagem",
        explicacao: "Quem aparece na história.",
        exemplo: "O coelho e a raposa são os personagens.",
        imagemUrl: coelho,
      },
      {
        palavra: "enredo",
        explicacao: "O que aconteceu na história, do começo ao fim.",
        exemplo: "O enredo é: o coelho perdeu a cenoura e a raposa ajudou.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "As 4 perguntas do reconto",
    instrucao: "Ouça cada pergunta. Recontar é responder as quatro.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Quem é da história?", explicacao: "PERSONAGENS: o coelho e a raposa." },
          { texto: "Onde a história acontece?", explicacao: "ESPAÇO: no jardim." },
          { texto: "Quando a história acontece?", explicacao: "TEMPO: de manhã." },
          { texto: "O que aconteceu?", explicacao: "ENREDO: começo, meio e fim." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto e vá marcando as 4 partes.",
    leitura: {
      titulo: "O coelho e a cenoura perdida",
      imagemUrl: coelho,
      legendaImagem: "O coelho no jardim de manhã",
      destacar: ["coelho", "raposa", "jardim", "manhã"],
      paragrafos: [
        "De manhã, o coelho foi ao jardim buscar a cenoura dele.",
        "A cenoura não estava mais no lugar. O coelho ficou triste.",
        "A raposa viu e ajudou a procurar embaixo da folha.",
        "Acharam a cenoura! Os dois comeram juntos e viraram amigos.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Quem são os personagens?",
        opcoes: ["O coelho e a raposa", "O gato e o rato", "A vovó e o sapo"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O coelho e a raposa.",
        feedbackErro: "Personagem é quem aparece na história.",
        dica: "Procure os dois bichos do texto.",
        ondeEstaNoTexto: "A raposa viu e ajudou a procurar embaixo da folha.",
      },
      {
        pergunta: "Onde a história acontece?",
        opcoes: ["Na escola", "No jardim", "No mar"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! No jardim.",
        feedbackErro: "O lugar está na primeira linha.",
        dica: "Onde o coelho foi buscar a cenoura?",
        ondeEstaNoTexto: "o coelho foi ao jardim buscar a cenoura dele.",
      },
      {
        pergunta: "Quando a história acontece?",
        opcoes: ["De manhã", "De noite", "No inverno"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! De manhã.",
        feedbackErro: "A primeira palavra do texto conta o tempo.",
        dica: "Leia a primeira palavra do primeiro parágrafo.",
        ondeEstaNoTexto: "De manhã, o coelho foi ao jardim...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense no enredo.",
    perguntas: [
      {
        pergunta: "Qual é o PROBLEMA da história?",
        opcoes: ["O coelho perdeu a cenoura", "Choveu muito", "A raposa sumiu"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A cenoura sumiu.",
        feedbackErro: "O problema é o que deu errado no meio da história.",
        reensino: "Enredo tem: começo (o coelho vai ao jardim), problema (a cenoura sumiu) e fim (acharam juntos).",
      },
      {
        pergunta: "Como a história termina?",
        opcoes: ["Os dois brigam", "Acham a cenoura e ficam amigos", "O coelho vai embora"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Fim feliz e amizade.",
        feedbackErro: "Leia o último parágrafo do texto.",
        reensino: "O fim é a última parte: o problema se resolve.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque o reconto na ordem certa.",
    bloco: {
      instrucao: "Começo → problema → ajuda → fim.",
      itens: [
        { id: "h1", texto: "De manhã, o coelho foi ao jardim.", imagemUrl: sol },
        { id: "h2", texto: "A cenoura tinha sumido.", imagemUrl: jardim },
        { id: "h3", texto: "A raposa ajudou a procurar.", imagemUrl: raposa },
        { id: "h4", texto: "Acharam a cenoura e viraram amigos.", imagemUrl: coelho },
      ],
      ordemCerta: ["h1", "h2", "h3", "h4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o enredo completo.",
      feedbackErro: "Toda história tem começo, problema e fim. Comece pela manhã no jardim.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A noite do passarinho",
      imagemUrl: arvore,
      destacar: ["noite", "ninho", "árvore"],
      paragrafos: [
        "De noite, o passarinho voltou para a árvore.",
        "Ele dormiu quentinho no ninho.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quando essa história acontece?",
        opcoes: ["De noite", "De manhã", "Na hora do almoço"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! De noite.",
        feedbackErro: "A primeira palavra do texto diz o tempo.",
        ondeEstaNoTexto: "De noite, o passarinho voltou para a árvore.",
      },
      {
        pergunta: "Onde ele dormiu?",
        opcoes: ["No chão", "No ninho", "Na lagoa"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! No ninho.",
        feedbackErro: "Releia a última linha.",
        ondeEstaNoTexto: "Ele dormiu quentinho no ninho.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Meu reconto escrito",
    instrucao: "Trace, monte e depois dite o seu reconto.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "H", exemplo: "H de HISTÓRIA", dicaTracado: "duas linhas em pé e uma deitada no meio" },
          { letra: "E", exemplo: "E de ENREDO", dicaTracado: "desce reto e faz três bracinhos" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "COELHO", silabas: ["CO", "E", "LHO"], distratores: ["MI", "TA"], dica: "Gosta de cenoura.", imagemUrl: coelho },
          { palavra: "JARDIM", silabas: ["JAR", "DIM"], distratores: ["PU", "SE"], dica: "Lugar cheio de flores.", imagemUrl: jardim },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "bilhete",
        titulo: "Ficha do meu reconto",
        comando: "Responda as 4 perguntas da história que você ouviu. Um adulto pode ser o escriba.",
        campos: [
          { rotulo: "Quem? (personagens)", placeholder: "o coelho e a raposa", minLetras: 3 },
          { rotulo: "Onde? (lugar)", placeholder: "no jardim", minLetras: 3 },
          { rotulo: "Quando? (tempo)", placeholder: "de manhã", minLetras: 3 },
          { rotulo: "O que aconteceu?", placeholder: "a cenoura sumiu e eles acharam juntos", minLetras: 5 },
        ],
        checklist: [
          "Falei quem estava na história?",
          "Falei onde e quando aconteceu?",
          "Contei o começo, o problema e o fim?",
        ],
      },
    ],
  },

  momento_minijogo: {
    titulo: "Cada parte no seu lugar",
    instrucao: "Arraste cada pedaço da história para a parte certa.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Personagem, lugar, tempo e enredo",
      bloco: {
        instrucao: "Leia o pedaço e coloque na caixa certa.",
        itens: [
          { id: "x1", texto: "O coelho", alvoId: "b1" },
          { id: "x2", texto: "No jardim", alvoId: "b2" },
          { id: "x3", texto: "De manhã", alvoId: "b3" },
          { id: "x4", texto: "A cenoura sumiu", alvoId: "b4" },
        ],
        alvos: [
          { id: "b1", nome: "Personagem (quem?)", imagemUrl: coelho },
          { id: "b2", nome: "Lugar (onde?)", imagemUrl: jardim },
          { id: "b3", nome: "Tempo (quando?)", imagemUrl: sol },
          { id: "b4", nome: "Enredo (o que aconteceu?)", imagemUrl: livro },
        ],
        feedbackAcerto: "🎉 Isso! Você já sabe as 4 partes de uma história.",
        feedbackErro: "Pergunte: isso é gente/bicho, lugar, hora ou acontecimento?",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Reconto é contar de novo, com as suas palavras.",
      "Escriba é quem escreve o que você fala.",
      "Toda história tem personagem, lugar, tempo e enredo.",
      "O enredo tem começo, problema e fim.",
    ],
    miniDesafio: {
      pergunta: "Quem escreve no reconto com escriba?",
      opcoes: ["A criança sozinha", "O adulto escreve o que a criança fala", "Ninguém"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! A criança fala e o adulto escreve.",
      feedbackErro: "Escriba é quem escreve a fala da criança.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Reconto é...",
        opcoes: ["contar de novo com as suas palavras", "inventar uma lista", "cantar", "desenhar"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Recontar é contar de novo a história que você ouviu.",
      },
      {
        pergunta: "2/5 — Personagem é...",
        opcoes: ["o lugar", "quem aparece na história", "a hora", "o título"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Personagem responde a pergunta QUEM?",
      },
      {
        pergunta: "3/5 — Na história do coelho, o lugar é...",
        opcoes: ["a escola", "o jardim", "a praia", "o mercado"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "No texto: 'o coelho foi ao jardim'.",
      },
      {
        pergunta: "4/5 — Enredo é...",
        opcoes: ["o que aconteceu, do começo ao fim", "a cor do livro", "o nome do autor", "o desenho da capa"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Enredo é a sequência do que aconteceu.",
      },
      {
        pergunta: "5/5 — O escriba é a pessoa que...",
        opcoes: ["escreve o que a criança fala", "lê alto", "desenha", "canta"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "A criança dita e o escriba escreve.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Reconto em família",
    materiais: ["Um livro de histórias ou de imagens", "Papel", "Lápis"],
    passos: [
      "1) Um adulto lê uma história curtinha para a criança.",
      "2) A criança reconta com as próprias palavras, sem ler.",
      "3) O adulto é o ESCRIBA: escreve exatamente o que a criança falou.",
      "4) Leiam juntos o reconto e confiram: tem personagem, lugar, tempo e o que aconteceu?",
    ],
    registro: "📸 Uma foto do reconto escrito pela família.",
  },

  recompensa: {
    xp: 160,
    moedas: 95,
    medalha: "📖 Contador de Histórias",
  },
};

export const _lua = lua;
