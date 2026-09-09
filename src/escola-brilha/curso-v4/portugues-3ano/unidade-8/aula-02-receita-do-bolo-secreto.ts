import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";

/**
 * Unidade 8 · Aula 2 — A Receita do Bolo Secreto
 * -------------------------------------------------------------
 * Texto INSTRUCIONAL: receita e regra de jogo. A criança lê para
 * FAZER, identifica ingredientes/modo de preparo, reconhece o verbo
 * no imperativo e produz o próprio texto instrucional.
 *
 * BNCC: EF03LP11, EF03LP14, EF03LP15, EF03LP16, EF03LP10, EF35LP10
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-receita-do-bolo-secreto",
  titulo: "A Receita do Bolo Secreto",
  iconeTrilha: "🧁",
  bncc: ["EF03LP11", "EF03LP14", "EF03LP15", "EF03LP16", "EF03LP10", "EF35LP10"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O texto que a gente lê para FAZER",
    historia:
      "Aurora colocou uma tigela na mesa do clube. — Detetive, hoje o caso é diferente: este texto não é para imaginar, é para OBEDECER. Se você trocar a ordem dos passos, o bolo desanda. Texto instrucional é assim: ele manda, e a gente faz.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Olhe as pistas da folha antes de ler.",
    bloco: {
      titulo: "A Receita do Bolo Secreto",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: papel, nome: "Uma lista com quantidades: 2 ovos, 1 copo de leite" },
        { imagemUrl: livro, nome: "Passos numerados: 1, 2, 3, 4" },
      ],
      pergunta: "Para que serve um texto assim?",
      hipoteses: [
        { texto: "Para ensinar a FAZER uma coisa, passo a passo.", imagemUrl: papel },
        { texto: "Para contar uma história de bolo.", imagemUrl: livro },
        { texto: "Para dar opinião sobre bolo.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🔍 Isso! Receita é texto instrucional: ensina a fazer.",
      feedbackErro: "Passos numerados e quantidades servem para EXECUTAR, não para narrar.",
      dica: "Números e ordem dos passos são pista de qual tipo de texto?",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras do texto instrucional.",
    cards: [
      {
        palavra: "ingredientes",
        explicacao: "A lista de tudo o que você precisa ter antes de começar.",
        exemplo: "Ingredientes: 2 ovos, 1 copo de leite, 2 copos de farinha.",
        imagemUrl: papel,
      },
      {
        palavra: "modo de preparo",
        explicacao: "Os passos, na ordem certa, de como fazer.",
        exemplo: "1) Bata os ovos. 2) Junte o leite. 3) Misture a farinha.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Como um texto instrucional é montado",
    instrucao: "Compare as frases: veja o verbo que MANDA e o que cada parte faz.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Ingredientes: 2 ovos, 1 copo de leite, 2 copos de farinha.",
            explicacao: "PARTE 1 — o que você precisa, com quantidade exata.",
          },
          {
            texto: "1) Bata os ovos na tigela.",
            explicacao: "PARTE 2 — modo de preparo. O passo é numerado e começa com verbo que manda: BATA.",
          },
          {
            texto: "2) Misture a farinha aos poucos.",
            explicacao: "A ordem importa: farinha antes de bater os ovos faria caroço.",
          },
        ],
      },
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Você bate os ovos. → Bata os ovos.",
            explicacao: "No texto instrucional o verbo vira ORDEM: bata, misture, coloque, asse.",
          },
          {
            texto: "misturar → MISTURE / desligar → DESLIGUE",
            explicacao: "Percebe o padrão? O verbo instrucional fala direto com quem lê.",
          },
          {
            texto: "aquecer → REAQUECER (re = de novo)",
            explicacao: "O pedacinho RE- na frente muda o sentido: fazer outra vez.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia como quem vai cozinhar de verdade.",
    leitura: {
      titulo: "Bolo de caneca do clube",
      imagemUrl: papel,
      legendaImagem: "A receita colada na porta do armário do clube",
      destacar: ["Ingredientes", "Misture", "Asse"],
      paragrafos: [
        "Ingredientes: 1 ovo, 3 colheres de leite, 4 colheres de farinha, 2 colheres de açúcar.",
        "1) Quebre o ovo dentro da caneca e bata com o garfo.",
        "2) Junte o leite e o açúcar. Misture bem.",
        "3) Acrescente a farinha aos poucos, sem parar de mexer.",
        "4) Asse por 3 minutos no micro-ondas, com a ajuda de um adulto.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte na receita sempre que precisar.",
    perguntas: [
      {
        pergunta: "Quantas colheres de farinha a receita pede?",
        opcoes: ["2", "3", "4", "1"],
        correta: 2,
        feedbackAcerto: "🔍 Isso: 4 colheres de farinha.",
        feedbackErro: "A quantidade está na lista de ingredientes.",
        ondeEstaNoTexto: "4 colheres de farinha",
        dica: "🔎 Procure na PRIMEIRA parte da receita.",
        reensino:
          "📚 Vamos rever juntos: quantidade fica sempre na lista de ingredientes, antes dos passos.",
      },
      {
        pergunta: "O que se faz PRIMEIRO?",
        opcoes: ["Assar", "Quebrar o ovo e bater", "Juntar a farinha", "Colocar açúcar"],
        correta: 1,
        feedbackAcerto: "🔍 Exato — é o passo 1.",
        feedbackErro: "Olhe o número do passo: o 1 vem antes de todos.",
        ondeEstaNoTexto: "1) Quebre o ovo dentro da caneca e bata com o garfo.",
        dica: "🔎 Qual passo tem o número 1?",
        reensino:
          "📚 Vamos rever juntos: no texto instrucional a ORDEM é obrigatória. O passo 1 é o primeiro.",
      },
      {
        pergunta: "Por que a farinha entra 'aos poucos'?",
        opcoes: [
          "Para não empelotar a massa",
          "Para gastar menos farinha",
          "Porque é mais bonito",
          "Para o bolo ficar salgado",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Boa! Aos poucos e mexendo, a massa fica lisa.",
        feedbackErro: "A receita diz 'sem parar de mexer' — isso é para a massa não empelotar.",
        ondeEstaNoTexto: "Acrescente a farinha aos poucos, sem parar de mexer.",
        dica: "🔎 O que acontece se jogar tudo de uma vez?",
        reensino:
          "📚 Vamos rever juntos: instruções vêm com CUIDADOS. 'Aos poucos' e 'sem parar de mexer' são cuidados.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora aplique o que descobrimos sobre o verbo que manda.",
    perguntas: [
      {
        pergunta: "Qual frase está escrita como INSTRUÇÃO?",
        opcoes: [
          "Eu misturei a farinha ontem.",
          "Misture a farinha aos poucos.",
          "A farinha é branca.",
          "Que gostoso o bolo!",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'Misture' fala direto com quem lê.",
        feedbackErro: "Instrução manda fazer agora: misture, bata, asse.",
        dica: "🔎 Qual frase dá uma ordem para você?",
        reensino:
          "📚 Vamos rever juntos: no instrucional o verbo vira ordem (misture, bata, asse), não relato.",
      },
      {
        pergunta: "Em REAQUECER, o pedaço RE- quer dizer…",
        opcoes: ["muito", "de novo", "sem", "antes"],
        correta: 1,
        feedbackAcerto: "🔍 Exato: reaquecer é aquecer OUTRA VEZ.",
        feedbackErro: "Pense em reler, refazer, rever: sempre 'de novo'.",
        dica: "🔎 Reler = ler de…?",
        reensino:
          "📚 Vamos rever juntos: RE- na frente do verbo significa repetir a ação (reler, refazer).",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque o modo de preparo na ordem certa.",
    bloco: {
      instrucao: "Do primeiro ao último passo do bolo de caneca.",
      itens: [
        { id: "p1", texto: "Quebrar o ovo e bater", imagemUrl: papel },
        { id: "p2", texto: "Juntar leite e açúcar", imagemUrl: menina },
        { id: "p3", texto: "Acrescentar a farinha mexendo", imagemUrl: livro },
        { id: "p4", texto: "Assar 3 minutos com um adulto", imagemUrl: professora },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🔍 Perfeito! Ordem certa = bolo certo.",
      feedbackErro: "Assar é sempre o último. Comece pelo ovo.",
      dica: "🔎 Siga os números da receita.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outra instrução: a regra de um jogo.",
    leitura: {
      titulo: "Regras do Caça-Palavras do Clube",
      imagemUrl: livro,
      destacar: ["Objetivo", "Vence", "Não vale"],
      paragrafos: [
        "Objetivo: achar 5 palavras escondidas antes do tempo acabar.",
        "1) Combine 2 minutos no cronômetro.",
        "2) Circule cada palavra encontrada com lápis.",
        "3) Não vale apagar nem circular palavra repetida.",
        "Vence quem circular mais palavras certas.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem vence o jogo?",
        opcoes: [
          "Quem termina primeiro",
          "Quem circula mais palavras certas",
          "Quem apaga mais rápido",
          "Quem acha 2 palavras",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Está escrito no fim das regras.",
        feedbackErro: "Procure a frase que começa com 'Vence quem'.",
        ondeEstaNoTexto: "Vence quem circular mais palavras certas.",
        dica: "🔎 Regras de jogo sempre dizem como se ganha.",
        reensino:
          "📚 Vamos rever juntos: regra de jogo tem objetivo, passos e critério de vitória.",
      },
      {
        pergunta: "O que a regra proíbe?",
        opcoes: [
          "Usar lápis",
          "Apagar e circular palavra repetida",
          "Combinar o tempo",
          "Achar 5 palavras",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato: 'Não vale apagar nem circular palavra repetida'.",
        feedbackErro: "Procure a frase com 'Não vale'.",
        ondeEstaNoTexto: "3) Não vale apagar nem circular palavra repetida.",
        dica: "🔎 Que expressão indica proibição?",
        reensino:
          "📚 Vamos rever juntos: instruções também dizem o que NÃO se pode fazer.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina: minha receita / minha regra",
    instrucao:
      "Escreva um texto instrucional de verdade: RASCUNHO, REVISÃO com a lista e VERSÃO FINAL. Alguém vai executar o que você escreveu.",
    blocos: [
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "Misture a farinha aos poucos.",
            palavras: ["Misture", "a", "farinha", "aos", "poucos."],
            distratores: ["mistura", "farrinha"],
            dica: "Verbo que manda: MISTURE. Farinha tem um R só.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Receita (ou regra de jogo) do meu jeito",
        comando:
          "Escreva a receita de algo que você sabe fazer (ou a regra de um jogo). Comece pelos ingredientes/materiais e depois numere os passos usando verbo que manda.",
        linhas: 8,
        checklist: [
          "Coloquei o título do que vou ensinar.",
          "Listei os ingredientes ou materiais com quantidade.",
          "Numerei os passos na ordem certa.",
          "Comecei cada passo com verbo que manda (bata, corte, misture).",
          "Escrevi um cuidado ou um 'não vale'.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura de detetive: passo a passo",
    instrucao:
      "Leia três vezes: entendendo, no cronômetro e em voz alta com voz de quem ensina — pausando em cada passo.",
    texto: [
      "Quebre o ovo na caneca e bata com o garfo.",
      "Junte o leite e o açúcar e misture bem.",
      "Acrescente a farinha aos poucos, sem parar de mexer.",
    ],
    metaSegundos: 20,
  },

  momento09_revisao: {
    pontos: [
      "Texto instrucional ensina a FAZER: receita, regra de jogo, manual.",
      "Ele tem duas partes: o que você precisa e os passos numerados.",
      "O verbo vira ordem: bata, misture, asse, circule.",
      "A ordem dos passos não pode mudar — e há sempre cuidados e proibições.",
    ],
    miniDesafio: {
      pergunta: "Qual dessas partes NÃO existe numa receita?",
      opcoes: ["Ingredientes", "Modo de preparo", "Título", "Opinião do autor sobre o bolo"],
      correta: 3,
      feedbackAcerto: "🔍 Isso! Receita informa e manda; não é lugar de opinião.",
      feedbackErro: "Ingredientes, passos e título existem. O que sobra?",
      dica: "🔎 Receita serve para fazer, não para comentar.",
      reensino:
        "📚 Vamos rever juntos: instrucional = título + materiais + passos. Opinião pertence a outro gênero.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Um texto instrucional serve para…",
        opcoes: ["contar uma história", "ensinar a fazer algo", "dar notícia", "vender um produto"],
        correta: 1,
        feedbackAcerto: "🔍 Isso!",
        feedbackErro: "Receita e regra de jogo ensinam a EXECUTAR.",
        feedbackOpcoes: [
          "❌ Contar história é do conto e do relato.",
          "✅ Isso! Instrucional ensina a fazer, passo a passo.",
          "❌ Dar notícia é da reportagem.",
          "❌ Vender é do anúncio.",
        ],
        dica: "🔎 Você lê para fazer ou para imaginar?",
        reensino: "📚 Vamos rever: receita, regra e manual são textos para executar.",
      },
      {
        pergunta: "2/5 — Em qual parte da receita está '2 ovos'?",
        opcoes: ["No título", "Nos ingredientes", "No modo de preparo", "Na despedida"],
        correta: 1,
        feedbackAcerto: "🔍 Exato!",
        feedbackErro: "Quantidade de material fica na lista de ingredientes.",
        feedbackOpcoes: [
          "❌ O título só diz o que vamos fazer.",
          "✅ Isso! Ingredientes trazem o que e quanto.",
          "❌ O modo de preparo traz as ações.",
          "❌ Receita não tem despedida — isso é carta.",
        ],
        dica: "🔎 Onde ficam as quantidades?",
        reensino: "📚 Vamos rever: ingredientes = o que preciso; preparo = o que faço.",
      },
      {
        pergunta: "3/5 — Qual verbo está na forma de instrução?",
        opcoes: ["misturei", "misturando", "Misture", "misturava"],
        correta: 2,
        feedbackAcerto: "🔍 Boa!",
        feedbackErro: "A instrução fala direto com quem lê: 'Misture'.",
        feedbackOpcoes: [
          "❌ 'misturei' conta o que EU já fiz.",
          "❌ 'misturando' não manda nada, só descreve.",
          "✅ Isso! 'Misture' é ordem para quem lê.",
          "❌ 'misturava' fala do passado repetido.",
        ],
        dica: "🔎 Qual dá uma ordem?",
        reensino: "📚 Vamos rever: bata, misture, asse, circule — verbos que mandam.",
      },
      {
        pergunta: "4/5 — Se você trocar a ordem dos passos, o que acontece?",
        opcoes: [
          "Nada, dá no mesmo",
          "O resultado pode dar errado",
          "O texto fica mais bonito",
          "Ganha mais pontos",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Ordem é regra no instrucional.",
        feedbackErro: "Farinha antes de bater o ovo empelota: a ordem importa.",
        feedbackOpcoes: [
          "❌ Dá diferença: cada passo prepara o próximo.",
          "✅ Isso! A ordem faz parte da instrução.",
          "❌ Beleza não é o objetivo do instrucional.",
          "❌ Pontos não têm a ver com isso.",
        ],
        dica: "🔎 Por que os passos são numerados?",
        reensino: "📚 Vamos rever: passos numerados existem porque a sequência é obrigatória.",
      },
      {
        pergunta: "5/5 — 'Reler' quer dizer…",
        opcoes: ["ler alto", "ler de novo", "não ler", "ler devagar"],
        correta: 1,
        feedbackAcerto: "🔍 Exato: RE- é 'de novo'.",
        feedbackErro: "RE- na frente significa repetir: refazer, rever, reler.",
        feedbackOpcoes: [
          "❌ Ler alto é ler em voz alta.",
          "✅ Isso! RE- indica repetição.",
          "❌ 'Não ler' seria outra coisa.",
          "❌ Devagar é a velocidade, não a repetição.",
        ],
        dica: "🔎 Refazer = fazer de…?",
        reensino: "📚 Vamos rever: RE- = de novo (reler, refazer, reaquecer).",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: cozinha do detetive",
    materiais: ["Papel", "Lápis", "Ingredientes simples de casa"],
    passos: [
      "1) Peça a um adulto uma receita bem simples da família.",
      "2) Escreva-a com ingredientes e passos numerados, do seu jeito.",
      "3) Faça a receita seguindo SÓ o que você escreveu.",
      "4) Se algum passo faltou, corrija o texto — é assim que um escritor revisa.",
    ],
    registro: "📸 Tire uma foto da receita escrita ao lado do que vocês fizeram.",
  },

  recompensa: {
    xp: 160,
    moedas: 50,
    medalha: "Chef das Instruções",
  },
};
