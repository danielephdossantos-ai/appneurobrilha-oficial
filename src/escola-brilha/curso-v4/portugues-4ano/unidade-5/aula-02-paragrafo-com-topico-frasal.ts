import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as quadro } from "@/assets/neuro-treino/objetos/quadro.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 2 — Parágrafo com tópico frasal
 * -------------------------------------------------------------
 * O escritor aprende a estrutura interna de um bom parágrafo:
 * a frase-chave (que anuncia a ideia), o desenvolvimento (que
 * explica ou dá exemplos) e o fecho (que arremata a ideia).
 *
 * BNCC: EF04LP19, EF35LP07
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-paragrafo-com-topico-frasal",
  titulo: "Parágrafo com tópico frasal",
  iconeTrilha: "📦",
  bncc: ["EF04LP19", "EF35LP07"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "A caixa com etiqueta",
    historia:
      "Aurora mostrou uma caixa de mudança com uma etiqueta bem grande escrita 'LIVROS'. — Assim que eu vejo a etiqueta, já sei o que tem dentro, sem precisar abrir. Um bom parágrafo funciona igual: a primeira frase é a 'etiqueta' — ela anuncia do que o parágrafo vai tratar. Hoje você vai aprender a escrever essa etiqueta, o tópico frasal.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe a caixa etiquetada. Que relação isso tem com escrever um parágrafo?",
    bloco: {
      titulo: "A Caixa Etiquetada",
      capaImagemUrl: caixa,
      pistas: [
        { imagemUrl: livro, nome: "Livros dentro da caixa" },
        { imagemUrl: papel, nome: "Uma etiqueta escrita" },
      ],
      pergunta:
        "Se a primeira frase de um parágrafo já anuncia a ideia principal, isso ajuda o leitor a…",
      hipoteses: [
        { texto: "Saber, desde o início, do que o parágrafo vai tratar." },
        { texto: "Ficar mais confuso sobre o assunto." },
        { texto: "Esquecer o que já leu antes." },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "📦 Isso! Assim como a etiqueta da caixa, a primeira frase do parágrafo avisa o conteúdo antes mesmo de ler tudo.",
      feedbackErro:
        "Pense na caixa: a etiqueta 'LIVROS' avisa o que tem dentro antes de abrir. A primeira frase do parágrafo faz o mesmo.",
      dica: "🧭 Pista de explorador: lembre o que significa “tópico frasal” — é a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras para montar um parágrafo redondo.",
    cards: [
      {
        palavra: "tópico frasal",
        explicacao:
          "É a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir.",
        exemplo:
          "'Os cães têm um olfato incrível.' — essa frase abre o parágrafo e já entrega o assunto.",
        imagemUrl: papel,
      },
      {
        palavra: "desenvolvimento",
        explicacao:
          "É a parte do parágrafo que vem depois do tópico frasal: explica, dá exemplos ou detalhes sobre a ideia anunciada.",
        exemplo:
          "Depois de dizer que os cães têm olfato incrível, o desenvolvimento explica: 'eles conseguem sentir cheiros mil vezes mais fracos do que nós'.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "As três partes de um parágrafo redondo",
    instrucao: "Veja como um bom parágrafo se monta, do início ao fim.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "Tópico frasal: a primeira frase, que anuncia a ideia principal.",
            explicacao: "É a 'etiqueta' do parágrafo.",
          },
          {
            texto: "Desenvolvimento: uma ou duas frases que explicam ou dão exemplo da ideia.",
            explicacao: "É onde o parágrafo 'entrega' o que prometeu.",
          },
          {
            texto: "Fecho: a última frase, que arremata a ideia e fecha o parágrafo.",
            explicacao: "É como amarrar o pacote antes de seguir para o próximo assunto.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia este parágrafo e repare nas três partes: tópico frasal, desenvolvimento e fecho.",
    leitura: {
      titulo: "Os Golfinhos São Espertos",
      imagemUrl: livro,
      legendaImagem: "Um golfinho saltando na água",
      destacar: ["Os golfinhos são animais muito inteligentes.", "Por isso,"],
      paragrafos: [
        "Os golfinhos são animais muito inteligentes. Eles se comunicam por meio de assobios diferentes, quase como se tivessem nomes próprios, e conseguem resolver problemas em grupo para caçar. Alguns cientistas até os comparam com chimpanzés em testes de memória. Por isso, muitos pesquisadores consideram os golfinhos entre os animais mais espertos do planeta.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "Qual é a frase que abre o parágrafo (o tópico frasal)?",
        opcoes: [
          "Alguns cientistas até os comparam com chimpanzés.",
          "Os golfinhos são animais muito inteligentes.",
          "Por isso, muitos pesquisadores consideram…",
        ],
        correta: 1,
        feedbackAcerto:
          "📦 Isso! É a primeira frase, que já anuncia a ideia principal: golfinhos são inteligentes.",
        feedbackErro: "O tópico frasal é sempre a PRIMEIRA frase do parágrafo.",
        ondeEstaNoTexto: "Os golfinhos são animais muito inteligentes.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Os golfinhos são animais muito inteligentes”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Os golfinhos são animais muito inteligentes.”. É a primeira frase, que já anuncia a ideia principal: golfinhos são inteligentes. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual exemplo aparece no desenvolvimento do parágrafo?",
        opcoes: [
          "Eles se comunicam por assobios e resolvem problemas em grupo",
          "Golfinhos vivem só em cativeiro",
          "Golfinhos são peixes",
        ],
        correta: 0,
        feedbackAcerto: "📦 Exato! São os exemplos que provam a ideia do tópico frasal.",
        feedbackErro:
          "O desenvolvimento vem no meio do parágrafo, dando exemplos da inteligência dos golfinhos.",
        ondeEstaNoTexto:
          "Eles se comunicam por meio de assobios diferentes… e conseguem resolver problemas em grupo para caçar.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Eles se comunicam por meio de assobios diferentes… e conseguem resolver problemas em grupo para caçar”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Eles se comunicam por assobios e resolvem problemas em grupo”. São os exemplos que provam a ideia do tópico frasal. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual é o fecho do parágrafo?",
        opcoes: [
          "Os golfinhos são animais muito inteligentes.",
          "Por isso, muitos pesquisadores consideram os golfinhos entre os animais mais espertos do planeta.",
          "Alguns cientistas até os comparam com chimpanzés em testes de memória.",
        ],
        correta: 1,
        feedbackAcerto: "📦 Isso! É a última frase, que arremata a ideia central.",
        feedbackErro:
          "O fecho é sempre a ÚLTIMA frase do parágrafo, muitas vezes começando com 'por isso', 'assim' ou 'portanto'.",
        ondeEstaNoTexto:
          "Por isso, muitos pesquisadores consideram os golfinhos entre os animais mais espertos do planeta.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Por isso, muitos pesquisadores consideram os golfinhos entre os animais mais espertos do planeta”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Por isso, muitos pesquisadores consideram os golfinhos entre os animais mais espertos do planeta.”. É a última frase, que arremata a ideia central. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense em COMO cada parte se relaciona com as outras.",
    perguntas: [
      {
        pergunta:
          "Por que o desenvolvimento não pode falar de outro assunto, diferente do tópico frasal?",
        opcoes: [
          "Porque o parágrafo perderia a ideia principal e confundiria o leitor",
          "Porque é proibido por lei",
          "Não tem problema nenhum falar de outro assunto",
        ],
        correta: 0,
        feedbackAcerto:
          "📦 Isso! O desenvolvimento precisa 'provar' ou explicar exatamente o que o tópico frasal anunciou.",
        feedbackErro:
          "Pense na etiqueta da caixa: se a etiqueta diz 'LIVROS' mas dentro tem roupas, o leitor fica confuso.",
        dica: "🧭 Pista de explorador: lembre o que significa “tópico frasal” — é a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque o parágrafo perderia a ideia principal e confundiria o leitor”. O desenvolvimento precisa 'provar' ou explicar exatamente o que o tópico frasal anunciou. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta:
          "Qual seria um bom tópico frasal para um parágrafo sobre 'as abelhas produzem mel'?",
        opcoes: [
          "As abelhas são insetos fascinantes que produzem um dos alimentos mais antigos do mundo.",
          "Ontem eu fui ao parque com minha família.",
          "O céu estava azul naquele dia.",
        ],
        correta: 0,
        feedbackAcerto:
          "📦 Certo! Essa frase já anuncia o assunto (abelhas e mel) e prepara o leitor para o desenvolvimento.",
        feedbackErro:
          "O tópico frasal precisa anunciar exatamente o assunto do parágrafo — nesse caso, abelhas e mel.",
        dica: "🧭 Pista de explorador: lembre o que significa “tópico frasal” — é a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “As abelhas são insetos fascinantes que produzem um dos alimentos mais antigos do mundo.”. Certo! Essa frase já anuncia o assunto (abelhas e mel) e prepara o leitor para o desenvolvimento. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as três partes de um parágrafo, na ordem em que aparecem.",
    bloco: {
      instrucao: "Tópico frasal → desenvolvimento → fecho.",
      itens: [
        { id: "p1", texto: "As formigas trabalham em grande equipe.", imagemUrl: papel },
        {
          id: "p2",
          texto:
            "Cada formiga tem uma função: algumas carregam comida, outras cuidam dos filhotes.",
          imagemUrl: quadro,
        },
        {
          id: "p3",
          texto: "Por isso, um formigueiro inteiro funciona como uma cidade organizada.",
          imagemUrl: caixa,
        },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto:
        "📦 Perfeito! Você organizou o parágrafo completo: anúncio, explicação e fecho.",
      feedbackErro:
        "Pense: primeiro anuncia a ideia, depois explica com exemplos, e por último fecha com uma conclusão.",
      dica: "🧭 Pista de explorador: lembre o que significa “tópico frasal” — é a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo parágrafo! Leia sozinho e identifique as partes.",
    leitura: {
      titulo: "A Importância de Dormir Bem",
      imagemUrl: menino,
      destacar: ["Dormir bem é essencial para o corpo e a mente.", "Portanto,"],
      paragrafos: [
        "Dormir bem é essencial para o corpo e a mente. Durante o sono, o cérebro organiza o que aprendemos durante o dia e o corpo se recupera do cansaço. Crianças que dormem pouco costumam ter mais dificuldade de concentração na escola. Portanto, uma boa noite de sono ajuda tanto no aprendizado quanto na disposição para brincar.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o tópico frasal desse parágrafo?",
        opcoes: [
          "Portanto, uma boa noite de sono ajuda…",
          "Dormir bem é essencial para o corpo e a mente.",
          "Crianças que dormem pouco costumam ter mais dificuldade…",
        ],
        correta: 1,
        feedbackAcerto: "📦 Isso! É a primeira frase, anunciando a ideia principal.",
        feedbackErro: "O tópico frasal é sempre a primeira frase do parágrafo.",
        ondeEstaNoTexto: "Dormir bem é essencial para o corpo e a mente.",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Dormir bem é essencial para o corpo e a mente”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Dormir bem é essencial para o corpo e a mente.”. É a primeira frase, anunciando a ideia principal. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual palavra sinaliza o início do fecho?",
        opcoes: ["Durante", "Portanto", "Crianças"],
        correta: 1,
        feedbackAcerto:
          "📦 Exato! 'Portanto' é uma palavra típica de conclusão, que anuncia o fecho.",
        feedbackErro: "Procure a palavra que dá ideia de conclusão, próxima ao final do parágrafo.",
        ondeEstaNoTexto: "Portanto, uma boa noite de sono ajuda tanto no aprendizado…",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Portanto, uma boa noite de sono ajuda tanto no aprendizado”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Portanto”. 'Portanto' é uma palavra típica de conclusão, que anuncia o fecho. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Todo parágrafo bem construído tem tópico frasal, desenvolvimento e fecho.",
      "O tópico frasal é a 'etiqueta' que anuncia a ideia principal.",
      "O desenvolvimento explica ou exemplifica exatamente o que o tópico frasal prometeu.",
      "O fecho arremata a ideia, muitas vezes com palavras como 'por isso', 'portanto' ou 'assim'.",
    ],
    miniDesafio: {
      pergunta: "Qual destas frases seria um bom tópico frasal para um parágrafo sobre reciclagem?",
      opcoes: [
        "Ontem choveu muito na minha cidade.",
        "Reciclar o lixo ajuda a proteger o meio ambiente.",
        "Meu cachorro gosta de brincar de bola.",
      ],
      correta: 1,
      feedbackAcerto:
        "📦 Isso! Essa frase já anuncia claramente o assunto do parágrafo: reciclagem e meio ambiente.",
      feedbackErro:
        "O tópico frasal precisa anunciar o assunto exato do parágrafo — nesse caso, reciclagem.",
      dica: "🧭 Pista de explorador: lembre o que significa “tópico frasal” — é a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir. Use essa ideia para eliminar as alternativas que não combinam.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “Reciclar o lixo ajuda a proteger o meio ambiente.”. Essa frase já anuncia claramente o assunto do parágrafo: reciclagem e meio ambiente. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o tópico frasal?",
        opcoes: [
          "A última frase do parágrafo",
          "A primeira frase, que anuncia a ideia principal",
          "Um desenho",
          "Alguns cientistas até os comparam com chimpanzés.",
        ],
        correta: 1,
        feedbackAcerto: "📦 Isso!",
        feedbackErro: "Tópico frasal é sempre a PRIMEIRA frase do parágrafo.",
        feedbackOpcoes: [
          "❌ “A última frase do parágrafo” não é a resposta. Tópico frasal é sempre a PRIMEIRA frase do parágrafo.",
          null,
          "❌ “Um desenho” não é a resposta. Tópico frasal é sempre a PRIMEIRA frase do parágrafo.",
          "❌ “Alguns cientistas até os comparam com chimpanzés.” não é a resposta. Tópico frasal é sempre a PRIMEIRA frase do parágrafo.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “tópico frasal” — é a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A primeira frase, que anuncia a ideia principal”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — Para que serve o desenvolvimento?",
        opcoes: [
          "Para explicar ou exemplificar a ideia do tópico frasal",
          "Para mudar de assunto completamente",
          "Para repetir o título",
          "Por isso, muitos pesquisadores consideram…",
        ],
        correta: 0,
        feedbackAcerto: "📦 Correto! O desenvolvimento prova ou detalha a ideia anunciada.",
        feedbackErro: "O desenvolvimento precisa ficar ligado ao que o tópico frasal anunciou.",
        feedbackOpcoes: [
          null,
          "❌ “Para mudar de assunto completamente” não é a resposta. O desenvolvimento precisa ficar ligado ao que o tópico frasal anunciou.",
          "❌ “Para repetir o título” não é a resposta. O desenvolvimento precisa ficar ligado ao que o tópico frasal anunciou.",
          "❌ “Por isso, muitos pesquisadores consideram…” não é a resposta. O desenvolvimento precisa ficar ligado ao que o tópico frasal anunciou.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “desenvolvimento” — é a parte do parágrafo que vem depois do tópico frasal: explica, dá exemplos ou detalhes sobre a ideia anunciada. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Para explicar ou exemplificar a ideia do tópico frasal”. O desenvolvimento prova ou detalha a ideia anunciada. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — Qual destas é uma palavra típica de fecho?",
        opcoes: ["Portanto", "Ontem", "Amanhã", "Golfinhos vivem só em cativeiro"],
        correta: 0,
        feedbackAcerto: "📦 Isso mesmo! 'Portanto' costuma anunciar uma conclusão.",
        feedbackErro: "Palavras como 'portanto', 'por isso' e 'assim' costumam abrir o fecho.",
        feedbackOpcoes: [
          null,
          "❌ “Ontem” não é a resposta. Palavras como 'portanto', 'por isso' e 'assim' costumam abrir o fecho.",
          "❌ “Amanhã” não é a resposta. Palavras como 'portanto', 'por isso' e 'assim' costumam abrir o fecho.",
          "❌ “Golfinhos vivem só em cativeiro” não é a resposta. Palavras como 'portanto', 'por isso' e 'assim' costumam abrir o fecho.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “tópico frasal” — é a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Portanto”. 'Portanto' costuma anunciar uma conclusão. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Por que a 'etiqueta da caixa' é uma boa comparação para o tópico frasal?",
        opcoes: [
          "Porque as duas anunciam o conteúdo antes de vermos tudo",
          "Porque não tem nenhuma relação",
          "Porque caixas e parágrafos são a mesma coisa",
          "Golfinhos são peixes",
        ],
        correta: 0,
        feedbackAcerto: "📦 Isso! Ambas avisam o conteúdo antes de a gente 'abrir' (ler tudo).",
        feedbackErro:
          "Pense: a etiqueta avisa o que tem na caixa, o tópico frasal avisa do que trata o parágrafo.",
        feedbackOpcoes: [
          null,
          "❌ “Porque não tem nenhuma relação” não é a resposta. Pense: a etiqueta avisa o que tem na caixa, o tópico frasal avisa do que trata o parágrafo.",
          "❌ “Porque caixas e parágrafos são a mesma coisa” não é a resposta. Pense: a etiqueta avisa o que tem na caixa, o tópico frasal avisa do que trata o parágrafo.",
          "❌ “Golfinhos são peixes” não é a resposta. Pense: a etiqueta avisa o que tem na caixa, o tópico frasal avisa do que trata o parágrafo.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “tópico frasal” — é a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque as duas anunciam o conteúdo antes de vermos tudo”. Ambas avisam o conteúdo antes de a gente 'abrir' (ler tudo). Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — Um parágrafo sem tópico frasal costuma ficar…",
        opcoes: [
          "Mais claro e organizado",
          "Confuso, porque o leitor não sabe logo de cara qual é a ideia principal",
          "Exatamente igual",
          "Os golfinhos são animais muito inteligentes.",
        ],
        correta: 1,
        feedbackAcerto: "📦 Exato! Você já sabe montar um parágrafo redondo. 🌟",
        feedbackErro:
          "Sem o tópico frasal, o leitor demora mais para entender qual é a ideia central do parágrafo.",
        feedbackOpcoes: [
          "❌ “Mais claro e organizado” não é a resposta. Sem o tópico frasal, o leitor demora mais para entender qual é a ideia central do parágrafo.",
          null,
          "❌ “Exatamente igual” não é a resposta. Sem o tópico frasal, o leitor demora mais para entender qual é a ideia central do parágrafo.",
          "❌ “Os golfinhos são animais muito inteligentes.” não é a resposta. Sem o tópico frasal, o leitor demora mais para entender qual é a ideia central do parágrafo.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “tópico frasal” — é a primeira frase do parágrafo — ela anuncia a ideia principal que vai ser desenvolvida a seguir. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Confuso, porque o leitor não sabe logo de cara qual é a ideia principal”. Você já sabe montar um parágrafo redondo. 🌟. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: montando um parágrafo em família",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escolham um assunto do dia a dia (um animal, uma comida, um esporte).",
      "2) Escrevam juntos um tópico frasal que anuncie a ideia principal.",
      "3) Acrescentem 1 ou 2 frases de desenvolvimento com exemplos.",
      "4) Terminem com um fecho usando 'por isso', 'portanto' ou 'assim'.",
    ],
    registro:
      "🗣️ Registrem o parágrafo completo (tópico frasal + desenvolvimento + fecho) num papel ou foto.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
