import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";

/**
 * Unidade 8 · Aula 3 — O Cartaz que Quer te Convencer
 * -------------------------------------------------------------
 * Textos publicitários e de campanha: anúncio, cartaz, folheto.
 * A criança identifica a INTENÇÃO de convencer, os recursos
 * persuasivos (slogan, verbo que chama, exagero) e produz um
 * cartaz de campanha para a escola.
 *
 * BNCC: EF03LP21, EF03LP23, EF35LP15, EF35LP16, EF35LP11
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-cartaz-que-convence",
  titulo: "O Cartaz que Quer te Convencer",
  iconeTrilha: "📣",
  bncc: ["EF03LP21", "EF03LP23", "EF35LP15", "EF35LP16", "EF35LP11"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O texto que tenta mexer com você",
    historia:
      "Aurora arrancou um cartaz do muro do clube. — Detetive, cuidado com este caso: existe um tipo de texto feito para te CONVENCER. Ele usa letra grande, promessa e uma frase que cola na cabeça. Detetive esperto reconhece a intenção antes de acreditar.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Antes de ler, observe o formato do cartaz.",
    bloco: {
      titulo: "O Cartaz que Quer te Convencer",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: papel, nome: "Letra ENORME com pouquíssimas palavras" },
        { imagemUrl: lapis, nome: "Uma frase curta que rima e se repete" },
      ],
      pergunta: "Qual é a intenção de um texto assim?",
      hipoteses: [
        { texto: "Convencer as pessoas a fazer ou comprar algo.", imagemUrl: papel },
        { texto: "Contar uma história longa.", imagemUrl: livro },
        { texto: "Ensinar a fazer um bolo.", imagemUrl: menina },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🔍 Isso! Cartaz e anúncio existem para persuadir.",
      feedbackErro: "Letra grande e frase curta servem para chamar atenção e convencer rápido.",
      dica: "Por que a letra é tão grande?",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras do texto que convence.",
    cards: [
      {
        palavra: "slogan",
        explicacao: "A frase curta que fica na cabeça e resume a campanha.",
        exemplo: "'Água fechada, vida guardada.'",
        imagemUrl: papel,
      },
      {
        palavra: "persuadir",
        explicacao: "Convencer alguém a pensar ou fazer algo.",
        exemplo: "O cartaz persuade a turma a jogar lixo no lixo.",
        imagemUrl: professora,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Os truques de quem quer convencer",
    instrucao: "Cada frase abaixo usa um recurso diferente. Descubra qual.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "FECHE A TORNEIRA!",
            explicacao: "VERBO QUE CHAMA + letra maiúscula: o cartaz fala direto com você e manda agir.",
          },
          {
            texto: "Água fechada, vida guardada.",
            explicacao: "SLOGAN com rima: frase curta, fácil de memorizar.",
          },
          {
            texto: "O melhor lápis do mundo!",
            explicacao: "EXAGERO: 'do mundo' é promessa grande — é opinião, não fato comprovado.",
          },
        ],
      },
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "FATO: a torneira aberta gasta 12 litros por minuto.",
            explicacao: "Dá para conferir em uma fonte: é fato.",
          },
          {
            texto: "OPINIÃO: este é o cartaz mais bonito da escola.",
            explicacao: "Depende de quem olha: é opinião, mesmo em letra grande.",
          },
          {
            texto: "Cartaz honesto usa fato E convence sem enganar.",
            explicacao: "Detetive checa: o que é dado e o que é promessa?",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o cartaz e vá reparando nos recursos.",
    leitura: {
      titulo: "Campanha do clube: água é caso sério",
      imagemUrl: papel,
      legendaImagem: "O cartaz colado no corredor da escola",
      destacar: ["FECHE", "melhor", "agora"],
      paragrafos: [
        "FECHE A TORNEIRA!",
        "Uma torneira aberta gasta 12 litros de água por minuto.",
        "Água fechada, vida guardada.",
        "Comece agora: escove os dentes com a torneira fechada. O melhor detetive é quem cuida da própria escola.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no cartaz sempre que precisar.",
    perguntas: [
      {
        pergunta: "O que o cartaz quer que você FAÇA?",
        opcoes: [
          "Comprar uma torneira",
          "Escovar os dentes com a torneira fechada",
          "Beber mais água",
          "Contar uma história",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! A ação está no último parágrafo.",
        feedbackErro: "Procure o pedido concreto: 'Comece agora: …'.",
        ondeEstaNoTexto: "escove os dentes com a torneira fechada",
        dica: "🔎 Cartaz de campanha sempre pede uma ação.",
        reensino:
          "📚 Vamos rever juntos: texto publicitário/de campanha pede uma ação clara de quem lê.",
      },
      {
        pergunta: "Qual frase do cartaz é o SLOGAN?",
        opcoes: [
          "FECHE A TORNEIRA!",
          "Água fechada, vida guardada.",
          "Uma torneira aberta gasta 12 litros por minuto.",
          "Comece agora.",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato: curta, com rima, fácil de lembrar.",
        feedbackErro: "Slogan é a frase curta que rima e resume a campanha.",
        ondeEstaNoTexto: "Água fechada, vida guardada.",
        dica: "🔎 Qual frase parece um bordão?",
        reensino:
          "📚 Vamos rever juntos: slogan = frase curta, memorável, quase sempre com ritmo ou rima.",
      },
      {
        pergunta: "Qual informação do cartaz é um FATO conferível?",
        opcoes: [
          "O melhor detetive é quem cuida da escola",
          "Água fechada, vida guardada",
          "Uma torneira aberta gasta 12 litros por minuto",
          "Comece agora",
        ],
        correta: 2,
        feedbackAcerto: "🔍 Boa! Número que pode ser medido é fato.",
        feedbackErro: "Fato pode ser medido ou conferido. 'O melhor' é opinião.",
        ondeEstaNoTexto: "Uma torneira aberta gasta 12 litros de água por minuto.",
        dica: "🔎 Qual frase traz um número que se pode medir?",
        reensino:
          "📚 Vamos rever juntos: fato se confere; opinião depende de quem fala.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora aplique: identifique o recurso usado.",
    perguntas: [
      {
        pergunta: "'O sabor mais incrível do universo!' usa qual recurso?",
        opcoes: ["Fato medido", "Exagero", "Passo numerado", "Data e local"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'Do universo' é exagero para impressionar.",
        feedbackErro: "Ninguém mediu o universo: isso é exagero publicitário.",
        dica: "🔎 Dá para provar que é o mais incrível do universo?",
        reensino:
          "📚 Vamos rever juntos: exagero é recurso de persuasão, não informação verdadeira.",
      },
      {
        pergunta: "Qual frase é um bom slogan de campanha de leitura?",
        opcoes: [
          "Eu leio às vezes quando dá tempo e não estou cansado.",
          "Quem lê, vai longe.",
          "Livro é um objeto de papel com folhas.",
          "Comprei três livros ontem à tarde.",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato: curta, ritmada e fácil de lembrar.",
        feedbackErro: "Slogan tem que ser curto e grudar na memória.",
        dica: "🔎 Qual dá para gritar num cartaz?",
        reensino:
          "📚 Vamos rever juntos: slogan curto e sonoro; frase longa não serve para cartaz.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Monte um cartaz de campanha na ordem em que o leitor enxerga.",
    bloco: {
      instrucao: "Do que aparece primeiro ao que aparece por último.",
      itens: [
        { id: "c1", texto: "Chamada em letra GRANDE", imagemUrl: papel },
        { id: "c2", texto: "O dado que prova (fato)", imagemUrl: livro },
        { id: "c3", texto: "Slogan curto com rima", imagemUrl: lapis },
        { id: "c4", texto: "A ação pedida a quem lê", imagemUrl: professora },
      ],
      ordemCerta: ["c1", "c2", "c3", "c4"],
      feedbackAcerto: "🔍 Perfeito! Chama, prova, marca e pede.",
      feedbackErro: "A letra grande vem primeiro: é ela que faz parar para ler.",
      dica: "🔎 O que você vê de longe num cartaz?",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho este anúncio e desconfie como detetive.",
    leitura: {
      titulo: "Anúncio: Lápis Estrela",
      imagemUrl: lapis,
      destacar: ["mágico", "todos", "compre"],
      paragrafos: [
        "LÁPIS ESTRELA: o lápis mágico da nota dez!",
        "Escreve mais bonito que todos os outros lápis do mundo.",
        "Compre hoje e tire dez em todas as provas.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual promessa do anúncio NÃO pode ser verdade?",
        opcoes: [
          "Que o lápis escreve",
          "Que o lápis garante nota dez em todas as provas",
          "Que o lápis se chama Estrela",
          "Que o lápis está à venda",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Nota depende de estudo, não de lápis.",
        feedbackErro: "Um lápis não pode garantir nota: essa é a promessa exagerada.",
        ondeEstaNoTexto: "Compre hoje e tire dez em todas as provas.",
        dica: "🔎 O que depende de você, e não do produto?",
        reensino:
          "📚 Vamos rever juntos: anúncio pode prometer demais. Detetive separa promessa de fato.",
      },
      {
        pergunta: "Qual é a intenção principal deste texto?",
        opcoes: ["Informar uma notícia", "Vender um produto", "Ensinar a escrever", "Contar um conto"],
        correta: 1,
        feedbackAcerto: "🔍 Exato: é publicidade.",
        feedbackErro: "Ele diz 'Compre hoje': quer vender.",
        ondeEstaNoTexto: "Compre hoje",
        dica: "🔎 Que verbo aparece no fim?",
        reensino:
          "📚 Vamos rever juntos: se o texto pede para comprar, a intenção é vender.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina: meu cartaz de campanha",
    instrucao:
      "Faça um cartaz de verdade para a sua escola ou casa: RASCUNHO, REVISÃO com a lista e VERSÃO FINAL para colar na parede.",
    blocos: [
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "Água fechada, vida guardada.",
            palavras: ["Água", "fechada,", "vida", "guardada."],
            distratores: ["Agua", "guardadá"],
            dica: "ÁGUA leva acento no A. Depois de 'fechada' vem vírgula.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "cartaz",
        titulo: "Cartaz de campanha do detetive",
        comando:
          "Escolha uma causa (economizar água, não jogar lixo no chão, ler mais) e escreva o cartaz com chamada, fato, slogan e ação pedida.",
        campos: [
          { rotulo: "Chamada em letra grande", placeholder: "FECHE A TORNEIRA!", minLetras: 6 },
          { rotulo: "Um fato que prova", placeholder: "Uma torneira aberta gasta 12 litros por minuto.", minLetras: 12 },
          { rotulo: "Meu slogan (curto e com rima)", placeholder: "Água fechada, vida guardada.", minLetras: 8 },
          { rotulo: "O que eu peço a quem ler", placeholder: "Escove os dentes com a torneira fechada.", minLetras: 10 },
        ],
        checklist: [
          "Minha chamada é curta e em letra grande.",
          "Coloquei um fato de verdade, não só opinião.",
          "Meu slogan é curto e fácil de lembrar.",
          "Pedi uma ação clara a quem lê.",
          "Não prometi nada impossível.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura de detetive: voz de campanha",
    instrucao:
      "Leia três vezes: entendendo, no cronômetro e em voz alta com voz forte de campanha — dando ênfase no slogan.",
    texto: [
      "Feche a torneira!",
      "Uma torneira aberta gasta doze litros por minuto.",
      "Água fechada, vida guardada.",
    ],
    metaSegundos: 16,
  },

  momento09_revisao: {
    pontos: [
      "Anúncio e cartaz de campanha existem para convencer.",
      "Recursos: letra grande, verbo que chama, slogan curto e exagero.",
      "Fato pode ser conferido; opinião e promessa, não.",
      "Cartaz honesto pede uma ação clara e não promete o impossível.",
    ],
    miniDesafio: {
      pergunta: "O que faz um slogan ser bom?",
      opcoes: [
        "Ser bem longo e explicado",
        "Ser curto e fácil de lembrar",
        "Ter muitos números",
        "Ter data e assinatura",
      ],
      correta: 1,
      feedbackAcerto: "🔍 Isso! Curto, sonoro, memorável.",
      feedbackErro: "Slogan longo ninguém guarda. Ele precisa ser curto.",
      dica: "🔎 Você lembra de qual tipo de frase?",
      reensino:
        "📚 Vamos rever juntos: slogan = frase curta com ritmo, para grudar na memória.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — A intenção de um anúncio é…",
        opcoes: ["ensinar a fazer", "convencer/vender", "contar um caso", "dar instruções"],
        correta: 1,
        feedbackAcerto: "🔍 Isso!",
        feedbackErro: "Anúncio quer persuadir quem lê.",
        feedbackOpcoes: [
          "❌ Ensinar a fazer é do texto instrucional.",
          "✅ Isso! Anúncio persuade e quer vender.",
          "❌ Contar caso é do relato.",
          "❌ Instruções são da receita e do manual.",
        ],
        dica: "🔎 O texto pede para você comprar ou fazer algo?",
        reensino: "📚 Vamos rever: publicidade = persuadir.",
      },
      {
        pergunta: "2/5 — Qual destas é OPINIÃO?",
        opcoes: [
          "O muro tem 3 metros.",
          "Este é o cartaz mais bonito da escola.",
          "A torneira gasta 12 litros por minuto.",
          "A campanha começou na segunda.",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Exato: 'mais bonito' depende de quem olha.",
        feedbackErro: "Medida e data são fatos. Beleza é opinião.",
        feedbackOpcoes: [
          "❌ Altura pode ser medida: fato.",
          "✅ Isso! Beleza depende de quem julga.",
          "❌ O gasto de água pode ser medido: fato.",
          "❌ A data pode ser conferida: fato.",
        ],
        dica: "🔎 Qual não pode ser medido?",
        reensino: "📚 Vamos rever: fato se mede/confere; opinião se discute.",
      },
      {
        pergunta: "3/5 — 'COMPRE AGORA!' usa qual recurso?",
        opcoes: ["fato", "verbo que chama para a ação", "rima", "data"],
        correta: 1,
        feedbackAcerto: "🔍 Boa!",
        feedbackErro: "É um verbo mandando você agir na hora.",
        feedbackOpcoes: [
          "❌ Não há dado nem número.",
          "✅ Isso! É chamado direto para a ação.",
          "❌ Não há rima nessa frase.",
          "❌ Não aparece data.",
        ],
        dica: "🔎 A frase manda ou informa?",
        reensino: "📚 Vamos rever: compre, participe, feche — verbos que chamam à ação.",
      },
      {
        pergunta: "4/5 — Um cartaz honesto de campanha deve…",
        opcoes: [
          "prometer o impossível",
          "trazer um fato e pedir uma ação possível",
          "ter muito texto pequeno",
          "esconder o assunto",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso!",
        feedbackErro: "Convencer sem enganar: fato + ação possível.",
        feedbackOpcoes: [
          "❌ Prometer o impossível é engano.",
          "✅ Isso! Convence com verdade e pedido claro.",
          "❌ Texto miúdo ninguém lê de longe.",
          "❌ Esconder o assunto derruba a campanha.",
        ],
        dica: "🔎 O que faz o leitor confiar?",
        reensino: "📚 Vamos rever: campanha boa = fato verdadeiro + ação clara.",
      },
      {
        pergunta: "5/5 — 'Quem lê, vai longe.' é um exemplo de…",
        opcoes: ["ingrediente", "slogan", "manchete de notícia", "despedida de carta"],
        correta: 1,
        feedbackAcerto: "🔍 Exato!",
        feedbackErro: "Frase curta e memorável de campanha se chama slogan.",
        feedbackOpcoes: [
          "❌ Ingrediente pertence à receita.",
          "✅ Isso! É um slogan.",
          "❌ Manchete anuncia o assunto de uma notícia.",
          "❌ Despedida fecha uma carta.",
        ],
        dica: "🔎 Curta, ritmada, de campanha: como se chama?",
        reensino: "📚 Vamos rever: slogan é a frase-marca da campanha.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: campanha na parede de casa",
    materiais: ["Folha ou cartolina", "Lápis de cor", "Fita"],
    passos: [
      "1) Escolha com a família um problema da casa (luz acesa, água, bagunça).",
      "2) Faça o cartaz com chamada, fato, slogan e ação pedida.",
      "3) Cole na parede e explique a campanha para todos.",
      "4) Depois de 3 dias, conversem: o cartaz convenceu alguém?",
    ],
    registro: "📸 Tire uma foto do seu cartaz colado na parede.",
  },

  recompensa: {
    xp: 160,
    moedas: 50,
    medalha: "Voz da Campanha",
  },
};
