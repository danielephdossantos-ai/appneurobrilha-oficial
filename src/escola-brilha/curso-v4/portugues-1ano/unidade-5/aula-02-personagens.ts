import type { AulaPortuguesV4 } from "../../types";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as princesa } from "@/assets/neuro-treino/objetos/princesa.png.asset.json";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";

import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
/**
 * Aula 2 — Quem é Quem na História
 * -------------------------------------------------------------
 * Segunda missão da Unidade 5 (Era Uma Vez).
 * A criança aprende a diferenciar o PERSONAGEM PRINCIPAL (quem
 * vive a história do começo ao fim) dos PERSONAGENS SECUNDÁRIOS
 * (quem ajuda ou aparece só em uma parte).
 *
 * BNCC: EF01LP26 · EF12LP19 · EF15LP02 · EF15LP03
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-personagens",
  titulo: "Quem é Quem na História",
  iconeTrilha: "🐇",
  bncc: ["EF01LP26", "EF12LP19", "EF15LP02", "EF15LP03"],
  duracaoMin: 15,

  // ============================================================
  // MODO JOGO — audio-first, imagem, toque (criança de 6 anos).
  // ============================================================
  momentosJogo: [
    {
      tipo: "boasVindas",
      mascoteUrl: esquiloBrilha,
      falaMascote:
        "Oi! Hoje vamos conhecer o Tiago e seu cachorro Bolinha. Toca pra começar a história!",
    },
    {
      tipo: "historiaIlustrada",
      titulo: "Tiago e seu Cachorro Bolinha",
      cenas: [
        { imagemUrl: menino, narracao: "Tiago adorava brincar no quintal com seu cachorro Bolinha." },
        { imagemUrl: cachorro, narracao: "A bola de Tiago caiu num buraco. Bolinha latiu perto do buraco pra avisar." },
        { imagemUrl: flor, narracao: "Tiago cavou, achou a bola e fez carinho em Bolinha, agradecido." },
      ],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Quem é o PERSONAGEM PRINCIPAL dessa história?",
      opcoes: [
        { nome: "Tiago", imagemUrl: menino, correta: true },
        { nome: "Bolinha", imagemUrl: cachorro, correta: false },
        { nome: "a princesa", imagemUrl: princesa, correta: false },
      ],
      feedbackAcerto: "Isso! O Tiago aparece do começo ao fim — ele é o principal.",
      feedbackErro: "Pensa: quem está em TODAS as partes da história? É o Tiago.",
    },
    {
      tipo: "campoSemantico",
      categoria: "AMIGOS QUE AJUDAM",
      categoriaEmoji: "🐾",
      pergunta: "Qual desses é um personagem SECUNDÁRIO, que ajuda o Tiago?",
      opcoes: [
        { nome: "Bolinha", imagemUrl: cachorro, correta: true },
        { nome: "a coroa da princesa", imagemUrl: princesa, correta: false },
        { nome: "um livro fechado", imagemUrl: livro, correta: false },
      ],
      instrucaoAudio: "Toca em quem ajuda o Tiago na história.",
      elogio: "Isso! O Bolinha ajuda o Tiago — ele é secundário.",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada figura pra ouvir quem mora nas histórias.",
      itens: [
        { nome: "menino", imagemUrl: menino },
        { nome: "cachorro", imagemUrl: cachorro },
        { nome: "gato", imagemUrl: gato },
      ],
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Bate palma junto comigo: TI-A-GO. Quantas palmas?",
      palavra: "TI-A-GO",
      silabas: 3,
      imagemUrl: menino,
      elogio: "Três palmas! Ti-a-go tem três pedacinhos.",
    },
    {
      tipo: "fazDeConta",
      imagemUrl: cachorro,
      convite: "Faz de conta que você é o Bolinha! Late bem alto pra avisar onde está a bola escondida.",
      dica: "Pode latir 'au au' bem animado!",
    },
    {
      tipo: "rodaConversa",
      imagemUrl: menino,
      pergunta: "Você tem um amigo ou bichinho que te ajuda quando você precisa? Conta pra gente!",
      exemplos: ["Meu cachorro me ajuda", "Meu irmão me ajuda", "Meu amigo da escola"],
    },
    {
      tipo: "compreensaoImagem",
      perguntaAudio: "Onde acontece essa história?",
      opcoes: [
        { nome: "no quintal de casa", imagemUrl: casa, correta: true },
        { nome: "numa floresta", imagemUrl: coelho, correta: false },
        { nome: "num castelo", imagemUrl: princesa, correta: false },
      ],
      feedbackAcerto: "Isso! Tudo acontece no quintal da casa do Tiago.",
      feedbackErro: "Lembra da primeira cena: onde Tiago brincava com Bolinha?",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Quem é quem na sua história favorita?",
      convite:
        "Assistam ou leiam uma história curta e descubram juntos: quem é o personagem principal e quem ajuda ele?",
      dicaAdulto:
        "Peça pra criança desenhar o principal maior no meio e os ajudantes menores ao redor.",
    },
    {
      tipo: "celebracao",
      medalha: "Detetive de Personagens",
      mascoteUrl: esquiloBrilha,
      falaFinal: "Muito bem! Agora você sabe descobrir quem é o personagem principal de qualquer história!",
    },
  ],


  momento01_motivacao: {
    titulo: "Brilha conhece os moradores das histórias",
    historia:
      "Brilha abriu outro livro e viu vários personagens juntos: um menino, um cachorro e um gato! — Como sei quem é o mais importante? perguntou Brilha. O livro respondeu: — É quem aparece do COMEÇO ao FIM! Os outros são personagens SECUNDÁRIOS, que ajudam na história.",
    imagemUrl: livro,
  },

  momento02_previsao: {
    instrucao: "Olhe o TÍTULO e as PISTAS. Sobre o que essa história pode falar?",
    bloco: {
      titulo: "Tiago e seu Cachorro Bolinha",
      capaImagemUrl: menino,
      pistas: [
        { imagemUrl: menino, nome: "Um menino" },
        { imagemUrl: cachorro, nome: "Um cachorro" },
      ],
      pergunta: "Antes de ler: sobre o que essa história vai falar?",
      hipoteses: [
        { texto: "Um menino e seu cachorro que brincam juntos.", imagemUrl: cachorro },
        { texto: "Uma princesa que perdeu a coroa.", imagemUrl: princesa },
        { texto: "Um livro que aprendeu a voar.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Muito bem! O título já diz: Tiago e seu cachorro Bolinha. As pistas confirmam: menino e cachorro.",
      feedbackErro:
        "Olhe o título de novo: 'Tiago e seu Cachorro Bolinha'. As pistas são um menino e um cachorro.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de ler, conheça 2 palavras importantes pra falar de personagens.",
    cards: [
      {
        palavra: "principal",
        explicacao: "É o personagem MAIS IMPORTANTE — aparece do começo ao fim da história.",
        exemplo: "Tiago é o personagem principal, porque a história é sobre ele.",
        imagemUrl: menino,
      },
      {
        palavra: "secundário",
        explicacao: "É um personagem que AJUDA na história, mas não é o mais importante.",
        exemplo: "Bolinha é um personagem secundário, que ajuda Tiago.",
        imagemUrl: cachorro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Principal ou secundário?",
    instrucao: "Veja a diferença entre o personagem principal e os secundários.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Tiago aparece em TODAS as partes da história — ele é o PRINCIPAL.", explicacao: "Quem está sempre presente é o principal." },
          { texto: "Bolinha só aparece ajudando Tiago — ele é SECUNDÁRIO.", explicacao: "Quem ajuda, mas não é o foco, é secundário." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto com Brilha — pode apertar 🔊 pra ouvir se quiser.",
    leitura: {
      titulo: "Tiago e seu Cachorro Bolinha",
      imagemUrl: cachorro,
      legendaImagem: "Tiago e Bolinha",
      destacar: ["Tiago", "Bolinha", "bola"],
      paragrafos: [
        "Tiago adorava brincar no quintal com seu cachorro Bolinha.",
        "Um dia, a bola de Tiago caiu dentro de um buraco fundo. Bolinha farejou o chão e ficou latindo perto do buraco.",
        "Tiago entendeu a dica de Bolinha, cavou um pouquinho e achou a bola. Ele agradeceu o amigo com um carinho na cabeça.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão TODAS escritas nele.",
    perguntas: [
      {
        pergunta: "Onde Tiago brincava com Bolinha?",
        opcoes: ["Na escola", "No quintal", "Na biblioteca"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Brincar no QUINTAL'.",
        feedbackErro: "A primeira frase diz onde eles brincavam.",
        ondeEstaNoTexto: "Tiago adorava brincar no quintal com seu cachorro Bolinha.",
      },
      {
        pergunta: "O que caiu dentro de um buraco?",
        opcoes: ["O sapato de Tiago", "A bola de Tiago", "O osso de Bolinha"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! A BOLA de Tiago caiu no buraco.",
        feedbackErro: "Releia o segundo parágrafo: o que caiu?",
        ondeEstaNoTexto: "…a bola de Tiago caiu dentro de um buraco fundo.",
      },
      {
        pergunta: "Como Bolinha ajudou Tiago?",
        opcoes: ["Latindo perto do buraco", "Cavando sozinho", "Chorando"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Bolinha ficou 'latindo perto do buraco' pra avisar Tiago.",
        feedbackErro: "Releia: o que Bolinha fez perto do buraco?",
        ondeEstaNoTexto: "Bolinha farejou o chão e ficou latindo perto do buraco.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora vamos separar quem é o personagem PRINCIPAL e quem é SECUNDÁRIO.",
    perguntas: [
      {
        pergunta: "Quem é o personagem PRINCIPAL dessa história?",
        opcoes: ["Bolinha", "Tiago", "A bola"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! TIAGO aparece do começo ao fim — a história é sobre ele.",
        feedbackErro: "Pense: quem aparece em TODAS as partes da história e vive o problema? É o Tiago.",
      },
      {
        pergunta: "Por que Bolinha é um personagem SECUNDÁRIO?",
        opcoes: [
          "Porque ele AJUDA Tiago, mas a história não é sobre ele",
          "Porque ele não aparece no texto",
          "Porque ele é maior que Tiago",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Bolinha ajuda a resolver o problema, mas Tiago é o foco da história.",
        feedbackErro: "Secundário é quem AJUDA, mas não é o personagem mais importante da história.",
      },
      {
        pergunta: "Onde acontece essa história?",
        opcoes: ["No quintal da casa de Tiago", "Na floresta", "Na escola"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Tudo acontece no QUINTAL.",
        feedbackErro: "A primeira frase já conta onde eles brincavam.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as páginas em ordem: começo → meio → fim.",
    bloco: {
      instrucao: "O que aconteceu primeiro? E depois? E no fim?",
      itens: [
        { id: "p1", texto: "Tiago e Bolinha brincavam no quintal.", imagemUrl: cachorro },
        { id: "p2", texto: "A bola caiu num buraco e Bolinha latiu avisando.", imagemUrl: coelho },
        { id: "p3", texto: "Tiago cavou, achou a bola e fez carinho em Bolinha.", imagemUrl: flor },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você contou a história do jeito certo.",
      feedbackErro: "Pense: primeiro eles BRINCAM. Depois a bola CAI. Só no fim Tiago ACHA a bola.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho. Depois responda as duas perguntas.",
    leitura: {
      titulo: "A princesa e o gatinho perdido",
      imagemUrl: princesa,
      destacar: ["princesa", "gatinho"],
      paragrafos: [
        "A princesa Clara ouviu um miado embaixo da cama e encontrou um gatinho assustado.",
        "Ela deu leite pro gatinho e ele ficou calmo. No fim, o gatinho virou o novo bichinho de estimação de Clara.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem é o personagem principal dessa história?",
        opcoes: ["A princesa Clara", "O gatinho", "A cama"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A história é sobre a princesa CLARA e o que ela faz.",
        feedbackErro: "Pense: de quem é a história — quem ouve o miado e ajuda?",
        ondeEstaNoTexto: "A princesa Clara ouviu um miado…",
      },
      {
        pergunta: "O que a princesa deu pro gatinho?",
        opcoes: ["Leite", "Água", "Fruta"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! Ela deu LEITE.",
        feedbackErro: "Releia a segunda frase: o que ela deu pro gatinho?",
        ondeEstaNoTexto: "Ela deu leite pro gatinho e ele ficou calmo.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "O personagem PRINCIPAL aparece do começo ao fim — a história é sobre ele.",
      "Os personagens SECUNDÁRIOS ajudam, mas não são o foco da história.",
      "Pra descobrir quem é o principal, a gente pensa: de quem é essa história?",
    ],
    miniDesafio: {
      pergunta: "Como a gente descobre quem é o personagem principal?",
      opcoes: [
        "É sempre o maior da história",
        "É quem aparece do começo ao fim e vive o problema",
        "É quem tem o nome mais bonito",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! O principal é quem está presente do começo ao fim.",
      feedbackErro: "Não é sobre tamanho nem nome — é sobre quem aparece a história inteira.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o personagem principal?",
        opcoes: [
          "Quem aparece do começo ao fim, foco da história",
          "Quem aparece só uma vez",
          "Quem é o mais engraçado",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo!",
        feedbackErro: "Principal é quem está presente a história TODA.",
      },
      {
        pergunta: "2/5 — Na história de Tiago, quem é o personagem principal?",
        opcoes: ["Bolinha", "Tiago", "A bola"],
        correta: 1,
        feedbackAcerto: "🎉 TIAGO!",
        feedbackErro: "A história é sobre Tiago e o que acontece com ele.",
      },
      {
        pergunta: "3/5 — O que Bolinha fez pra ajudar Tiago?",
        opcoes: ["Cavou sozinho", "Latiu perto do buraco", "Comeu a bola"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ele latiu avisando onde estava a bola.",
        feedbackErro: "Releia: Bolinha 'ficou latindo perto do buraco'.",
      },
      {
        pergunta: "4/5 — Quem é secundário na história do gatinho?",
        opcoes: ["A princesa Clara", "O gatinho", "Ninguém"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O GATINHO ajuda a história acontecer, mas Clara é a principal.",
        feedbackErro: "A história é sobre Clara — o gatinho é secundário.",
      },
      {
        pergunta: "5/5 — Personagens secundários servem pra…",
        opcoes: [
          "Ajudar na história do personagem principal",
          "Substituir o personagem principal",
          "Nada, eles não importam",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo! Eles ajudam! 🌟",
        feedbackErro: "Secundários AJUDAM na história, mesmo sem serem o foco principal.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Quem é quem na sua história favorita?",
    materiais: ["Um livro ou desenho animado favorito da criança"],
    passos: [
      "1) Assistam ou leiam juntos uma história curta.",
      "2) Perguntem: quem é o personagem PRINCIPAL?",
      "3) Perguntem: quais são os personagens SECUNDÁRIOS que ajudam?",
      "4) Desenhem o principal maior e os secundários menores, do lado.",
    ],
    registro: "🎨 Um desenho com o personagem principal no centro e os secundários ao redor.",
  },

  recompensa: {
    xp: 110,
    moedas: 65,
  },
};
