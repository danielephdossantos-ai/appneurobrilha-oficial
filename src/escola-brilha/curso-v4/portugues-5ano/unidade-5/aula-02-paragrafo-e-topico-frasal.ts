import type { AulaPortuguesV4 } from "../../types";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as tijolo } from "@/assets/neuro-treino/objetos/tijolo.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";

/**
 * Aula 2 — Parágrafo e tópico frasal
 * -------------------------------------------------------------
 * Unidade 5 · Diário de Escritor (5º ano)
 * Foco: reconhecer que um parágrafo desenvolve UMA ideia central (o
 * tópico frasal), traz frases de apoio que explicam ou exemplificam
 * essa ideia, e às vezes um fechamento.
 * BNCC: EF05LP24, EF05LP26
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-paragrafo-e-topico-frasal",
  titulo: "Parágrafo e tópico frasal",
  iconeTrilha: "🧱",
  bncc: ["EF05LP24", "EF05LP26"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A parede de tijolos do texto",
    historia:
      "Brilha mostrou uma parede feita de tijolos bem organizados. — Cada parágrafo de um texto é como uma fileira de tijolos: eles se juntam para formar algo forte! E cada parágrafo tem um tijolo principal, chamado TÓPICO FRASAL, que carrega a ideia mais importante daquela parte. Os outros tijolos são as frases de apoio, que explicam melhor essa ideia. Vamos aprender a construir parágrafos assim?",
    imagemUrl: tijolo,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de começar.",
    bloco: {
      titulo: "A Oficina dos Parágrafos",
      capaImagemUrl: bloco,
      pistas: [
        { imagemUrl: tijolo, nome: "Tijolos empilhados" },
        { imagemUrl: papel, nome: "Um texto dividido em partes" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como construir uma casa de verdade.", imagemUrl: tijolo },
        { texto: "Como organizar as ideias dentro de um parágrafo.", imagemUrl: papel },
        { texto: "Como pintar um mural na escola.", imagemUrl: mural },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender como um parágrafo é organizado, com uma ideia principal e frases de apoio.",
      feedbackErro: "Pense nos tijolos: cada um tem uma função na parede. Assim é o parágrafo, com frases que se organizam ao redor de uma ideia central.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras da construção de parágrafos.",
    cards: [
      {
        palavra: "parágrafo",
        explicacao: "Parte de um texto que desenvolve uma única ideia principal, começando com recuo ou espaço na primeira linha.",
        exemplo: "O texto sobre reciclagem tinha quatro parágrafos, um para cada ideia.",
        imagemUrl: papel,
      },
      {
        palavra: "tópico frasal",
        explicacao: "A frase que abre o parágrafo e apresenta a ideia principal dele.",
        exemplo: "'A reciclagem ajuda o planeta de várias formas.' é o tópico frasal de um parágrafo.",
        imagemUrl: tijolo,
      },
      {
        palavra: "frases de apoio",
        explicacao: "Frases que vêm depois do tópico frasal e explicam, exemplificam ou detalham a ideia principal.",
        exemplo: "Depois do tópico frasal, vêm exemplos de como reciclar o lixo em casa.",
        imagemUrl: bloco,
      },
      {
        palavra: "fechamento",
        explicacao: "Frase final de um parágrafo que conclui ou resume a ideia apresentada.",
        exemplo: "'Por isso, reciclar é um hábito que todos deveriam ter.' é um fechamento.",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo o parágrafo por dentro",
    instrucao: "Ouça o Brilha mostrando as partes de um parágrafo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Os cachorros são animais muito leais aos seus donos.", explicacao: "Esta é o TÓPICO FRASAL: apresenta a ideia principal do parágrafo." },
          { texto: "Eles reconhecem o cheiro da família e ficam felizes quando alguém volta para casa.", explicacao: "Esta é uma FRASE DE APOIO: explica melhor a ideia principal." },
          { texto: "Além disso, muitos cães protegem seus donos em momentos de perigo.", explicacao: "Outra FRASE DE APOIO, trazendo mais um exemplo da lealdade." },
          { texto: "Por isso, o cachorro é considerado o melhor amigo do homem.", explicacao: "Este é o FECHAMENTO: conclui a ideia do parágrafo." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha explicou como um parágrafo é organizado.",
    leitura: {
      titulo: "A Fábrica de Parágrafos",
      imagemUrl: ponte,
      legendaImagem: "Página sobre parágrafo e tópico frasal",
      destacar: ["tópico frasal", "frases de apoio", "fechamento"],
      paragrafos: [
        "Um bom parágrafo geralmente começa com o TÓPICO FRASAL, a frase que apresenta a ideia principal daquele trecho do texto. É como o título de uma fileira de tijolos: tudo o que vem depois vai apoiar essa ideia.",
        "Depois do tópico frasal, vêm as FRASES DE APOIO. Elas explicam melhor a ideia principal, trazem exemplos, dados ou detalhes que ajudam o leitor a entender bem o assunto. Sem essas frases, o parágrafo ficaria muito raso, com só uma informação solta.",
        "Alguns parágrafos terminam com um FECHAMENTO: uma frase que resume ou conclui a ideia, deixando claro que aquele assunto foi encerrado antes de o texto passar para outro parágrafo, com outra ideia principal.",
        "Veja um parágrafo completo, real: 'A água é essencial para a vida. Sem ela, plantas não crescem, animais não sobrevivem e o corpo humano não funciona direito. Além disso, a água é usada para produzir energia e para a agricultura. Por isso, cuidar da água é cuidar da vida de todos.' Note: a primeira frase é o tópico frasal, as duas do meio são apoio, e a última é o fechamento.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que é o tópico frasal?",
        opcoes: [
          "A última frase do texto todo",
          "A frase que apresenta a ideia principal do parágrafo",
          "O título do livro",
          "Um sinal de pontuação",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O tópico frasal apresenta a ideia principal do parágrafo.",
        feedbackErro: "Releia: 'Um bom parágrafo geralmente começa com o TÓPICO FRASAL, a frase que apresenta a ideia principal'.",
        ondeEstaNoTexto: "Um bom parágrafo geralmente começa com o TÓPICO FRASAL, a frase que apresenta a ideia principal daquele trecho do texto",
      },
      {
        pergunta: "Para que servem as frases de apoio?",
        opcoes: [
          "Para confundir o leitor",
          "Para explicar, exemplificar ou detalhar a ideia principal",
          "Para começar um novo parágrafo",
          "Para repetir o título",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! As frases de apoio explicam e detalham a ideia principal.",
        feedbackErro: "Releia: 'Elas explicam melhor a ideia principal, trazem exemplos, dados ou detalhes'.",
        ondeEstaNoTexto: "Elas explicam melhor a ideia principal, trazem exemplos, dados ou detalhes que ajudam o leitor a entender bem o assunto",
      },
      {
        pergunta: "No parágrafo exemplo sobre a água, qual é o fechamento?",
        opcoes: [
          "'A água é essencial para a vida.'",
          "'Sem ela, plantas não crescem...'",
          "'Por isso, cuidar da água é cuidar da vida de todos.'",
          "'A água é usada para produzir energia.'",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Exato! Essa frase conclui e resume a ideia do parágrafo.",
        feedbackErro: "Releia: 'Por isso, cuidar da água é cuidar da vida de todos.' — essa é a frase final, que conclui a ideia.",
        ondeEstaNoTexto: "Por isso, cuidar da água é cuidar da vida de todos",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pense sobre os exemplos da explicação.",
    perguntas: [
      {
        pergunta: "No exemplo sobre os cachorros, qual foi o tópico frasal?",
        opcoes: [
          "'Por isso, o cachorro é considerado o melhor amigo do homem.'",
          "'Os cachorros são animais muito leais aos seus donos.'",
          "'Eles reconhecem o cheiro da família.'",
          "'Muitos cães protegem seus donos.'",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Essa é a frase que abre e apresenta a ideia principal.",
        feedbackErro: "Releia: a primeira frase, sobre a lealdade dos cachorros, é o tópico frasal.",
      },
      {
        pergunta: "No parágrafo sobre a água, para que mais a água é usada, além de manter a vida?",
        opcoes: ["Para pintar quadros", "Para produzir energia e para a agricultura", "Para construir casas", "Para fazer roupas"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O texto cita energia e agricultura.",
        feedbackErro: "Releia: 'a água é usada para produzir energia e para a agricultura'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as partes de um parágrafo bem construído.",
    bloco: {
      instrucao: "Da primeira à última parte.",
      itens: [
        { id: "p1", texto: "Tópico frasal: apresenta a ideia principal.", imagemUrl: tijolo },
        { id: "p2", texto: "Primeira frase de apoio: explica ou dá exemplo.", imagemUrl: bloco },
        { id: "p3", texto: "Segunda frase de apoio: traz mais detalhes.", imagemUrl: bloco },
        { id: "p4", texto: "Fechamento: conclui a ideia do parágrafo.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a estrutura de um parágrafo bem construído.",
      feedbackErro: "Pense: primeiro vem a ideia principal, depois as explicações, e por último a conclusão.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "Quando o parágrafo muda",
      imagemUrl: livro,
      destacar: ["novo parágrafo", "mudança de ideia"],
      paragrafos: [
        "Sempre que o texto passa para uma NOVA IDEIA diferente da anterior, é hora de começar um NOVO PARÁGRAFO. Isso ajuda o leitor a perceber que uma parte terminou e outra vai começar, deixando o texto mais organizado.",
        "Por exemplo, em uma redação sobre 'Meu animal de estimação', um parágrafo pode falar da aparência do animal, outro pode falar do seu comportamento, e outro pode falar de momentos engraçados vividos com ele. Cada MUDANÇA DE IDEIA pede um parágrafo novo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quando devemos começar um novo parágrafo?",
        opcoes: [
          "A cada 5 palavras",
          "Quando o texto passa para uma nova ideia",
          "Nunca, o texto deve ser um parágrafo só",
          "Só no final do texto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Um novo parágrafo começa quando surge uma ideia diferente.",
        feedbackErro: "Releia: 'Sempre que o texto passa para uma NOVA IDEIA diferente da anterior, é hora de começar um NOVO PARÁGRAFO.'",
        ondeEstaNoTexto: "Sempre que o texto passa para uma NOVA IDEIA diferente da anterior, é hora de começar um NOVO PARÁGRAFO",
      },
      {
        pergunta: "No exemplo sobre o animal de estimação, o que pode mudar de um parágrafo para outro?",
        opcoes: [
          "O tamanho da letra",
          "A aparência, o comportamento e momentos engraçados vividos com o animal",
          "A cor do papel",
          "O nome do animal a cada parágrafo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Cada parágrafo pode tratar de um aspecto diferente do animal.",
        feedbackErro: "Releia: 'um parágrafo pode falar da aparência... outro pode falar do seu comportamento... outro pode falar de momentos engraçados'.",
        ondeEstaNoTexto: "um parágrafo pode falar da aparência do animal, outro pode falar do seu comportamento, e outro pode falar de momentos engraçados",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte o parágrafo certo",
    instrucao: "Selecione apenas as frases que combinam com o tópico frasal dado.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "A Bancada do Escritor",
      bloco: {
        instrucao: "Tópico frasal: 'A leitura traz muitos benefícios para a vida das pessoas.' Marque as frases que servem como frases de apoio para essa ideia.",
        pergunta: "Quais frases combinam com esse tópico frasal?",
        opcoes: [
          { id: "o1", texto: "Ler amplia o vocabulário e ajuda a escrever melhor.", correto: true },
          { id: "o2", texto: "O time perdeu o jogo de futebol no domingo.", correto: false },
          { id: "o3", texto: "A leitura também estimula a imaginação e a criatividade.", correto: true },
          { id: "o4", texto: "Minha bicicleta é da cor azul.", correto: false },
          { id: "o5", texto: "Livros ajudam a entender melhor o mundo e outras culturas.", correto: true },
        ],
        feedbackAcerto: "🎉 Muito bem! Você escolheu só as frases que apoiam a ideia da leitura trazer benefícios.",
        feedbackErro: "Reveja: as frases de apoio precisam falar sobre os benefícios da leitura, sem sair do assunto.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "O PARÁGRAFO desenvolve uma única ideia principal.",
      "O TÓPICO FRASAL apresenta essa ideia; as FRASES DE APOIO explicam e detalham.",
      "O FECHAMENTO, quando existe, conclui a ideia antes de mudar de parágrafo.",
    ],
    miniDesafio: {
      pergunta: "Se um parágrafo fala sobre a importância de dormir bem, a frase 'Além disso, dormir bem melhora a concentração na escola.' é uma...",
      opcoes: ["Tópico frasal", "Frase de apoio", "Título do texto", "Palavra isolada"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Essa frase explica melhor a ideia principal, então é uma frase de apoio.",
      feedbackErro: "Releia a explicação: frases de apoio vêm depois do tópico frasal e detalham a ideia.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um parágrafo?",
        opcoes: ["Uma palavra isolada", "Parte do texto que desenvolve uma ideia principal", "O título do texto", "Um sinal de pontuação"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Parágrafo é a parte do texto que desenvolve uma ideia.",
        feedbackErro: "Parágrafo é a parte do texto dedicada a uma única ideia principal.",
      },
      {
        pergunta: "2/5 — O que apresenta a ideia principal do parágrafo?",
        opcoes: ["O fechamento", "O tópico frasal", "A última palavra", "O ponto final"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O tópico frasal apresenta a ideia principal.",
        feedbackErro: "O tópico frasal é a frase que abre o parágrafo com a ideia principal.",
      },
      {
        pergunta: "3/5 — Para que servem as frases de apoio?",
        opcoes: ["Para repetir o tópico frasal", "Para explicar e detalhar a ideia principal", "Para começar outro parágrafo", "Para enfeitar o texto"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Frases de apoio explicam e detalham a ideia principal.",
        feedbackErro: "Frases de apoio trazem exemplos e explicações da ideia do tópico frasal.",
      },
      {
        pergunta: "4/5 — Quando devemos começar um novo parágrafo?",
        opcoes: ["A cada ponto final", "Quando surge uma nova ideia no texto", "Nunca", "Somente no fim do texto"],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Um novo parágrafo surge junto com uma nova ideia.",
        feedbackErro: "Um novo parágrafo começa quando o texto passa para uma nova ideia.",
      },
      {
        pergunta: "5/5 — O que é o fechamento de um parágrafo?",
        opcoes: [
          "A primeira frase do parágrafo",
          "Uma frase que conclui ou resume a ideia do parágrafo",
          "O nome do autor",
          "Um desenho ao lado do texto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! O fechamento conclui a ideia do parágrafo.",
        feedbackErro: "O fechamento é a frase final, que resume ou conclui a ideia do parágrafo.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Construindo meu parágrafo",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Escolha um tema simples, por exemplo: 'meu lugar favorito' ou 'minha comida preferida'.",
      "2) Escreva o TÓPICO FRASAL, uma frase que apresente a ideia principal.",
      "3) Escreva duas FRASES DE APOIO que expliquem ou deem exemplos dessa ideia.",
      "4) Escreva uma frase de FECHAMENTO para concluir o parágrafo.",
      "5) Leia em voz alta para alguém da família e pergunte se entenderam a ideia principal.",
    ],
    registro: "📝 Uma foto do parágrafo completo, com as quatro partes bem identificadas.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
