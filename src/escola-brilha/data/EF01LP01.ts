import type { Aula } from "../types";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as setaImg } from "@/assets/neuro-treino/objetos/seta-direita.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as cachorroImg } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as estrelaImg } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as meninoAcordandoImg } from "@/assets/neuro-treino/objetos/menino-acordando.png.asset.json";
import { url as escovarImg } from "@/assets/neuro-treino/objetos/escovar-dentes.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";

/**
 * EF01LP01 — Aula 001 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * BNCC: Reconhecer que textos são lidos e escritos da esquerda para a
 * direita e de cima para baixo da página.
 *
 * Missão do Dia: "O Caminho das Letras" (Brilha + Vento Bagunceiro).
 * Padrão travado (gabarito EF01MA02): jogos visuais em toda categoria,
 * imagens do banco de mídias, nenhum texto avulso sem apoio visual.
 */
const aula: Aula = {
  codigo: "EF01LP01",
  ano: "1º Ano",
  disciplina: "Português",
  titulo: "O Caminho das Letras",

  narrativa: {
    titulo: "O Caminho das Letras",
    contexto:
      "O Brilha achou um livro mágico na floresta. Quando abriu, todas as palavras estavam voando fora do lugar! O Vento Bagunceiro passou por ali e bagunçou a direção da leitura.",
    problema:
      "Sem saber por onde começar, ninguém consegue entender a história. As palavras precisam voltar pro caminho certo.",
    convite: "Vamos ajudar o Brilha a descobrir o caminho das letras?",
  },

  conhecimentosPrevios: [
    "Segurar um livro com a capa virada pra cima.",
    "Reconhecer que letras formam palavras.",
    "Apontar imagens em uma página.",
  ],

  missao:
    "Descobrir que, em português, lemos da esquerda para a direita e de cima para baixo — e usar esse caminho pra entender histórias.",

  objetivos: [
    "Compreender o sentido da leitura na página.",
    "Identificar por onde começa a ler um texto.",
    "Acompanhar as linhas de um texto na ordem certa.",
    "Desenvolver orientação espacial pra ler e escrever.",
  ],

  motivacao:
    "Ler é como andar por um caminho. Se a gente pisa nas pedras na ordem certa, a história aparece. Bora seguir o caminho do Brilha?",

  explicacao:
    "No Brasil, todo texto tem um CAMINHO pra ser lido:\n\n➡️ DA ESQUERDA PRA DIREITA — começamos pela palavra do lado esquerdo e vamos andando pro lado direito.\n\n⬇️ DE CIMA PRA BAIXO — quando termina uma linha, descemos pra próxima linha logo abaixo.\n\nExemplo: na frase 'O gato dorme', a gente lê primeiro 'O', depois 'gato', depois 'dorme'. Nunca começamos pelo final.\n\nEm um livro, a primeira palavra fica no CANTO DE CIMA, do lado ESQUERDO. É por ali que começa qualquer história.",

  explicacoesNiveis: {
    nivel1: "A gente lê da esquerda pra direita e de cima pra baixo.",
    nivel2:
      "Na frase 'O gato dorme', 'O' vem primeiro, depois 'gato', depois 'dorme'.",
    nivel3:
      "É como um caminho: sua mão segue a seta ➡️ até o fim da linha, aí desce ⬇️ pra próxima.",
    nivel4:
      "Em livros, gibis, placas e cardápios seguimos sempre esse mesmo caminho. Por isso a gente entende as histórias.",
  },

  exemploResolvido: {
    enunciado:
      "O Brilha abriu o livro na frase 'O gato dorme'. Qual palavra a gente lê PRIMEIRO?",
    passos: [
      "Olhe pra frase: começa no lado ESQUERDO.",
      "A primeira palavra do lado esquerdo é 'O'.",
      "Depois vem 'gato' e por último 'dorme'.",
    ],
    resposta: "A ordem certa é: O → gato → dorme.",
  },

  atividadeGuiada: {
    enunciado:
      "Na frase 'O gato dorme', depois de ler 'O', qual palavra a gente lê em seguida?",
    resposta: "Gato — é a próxima palavra andando pra direita.",
    explicacao:
      "A gente sempre segue o caminho da esquerda pra direita. Depois de 'O', a próxima palavra é 'gato', e só depois 'dorme'.",
    visual: {
      tipo: "escolherImagem",
      pergunta:
        "Depois de ler 'O', qual palavra vem em seguida em 'O gato dorme'? Toque na figura certa.",
      opcoes: [
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "cachorro", imagemUrl: cachorroImg },
        { nome: "sol", imagemUrl: solImg },
      ],
      respostaCerta: "gato",
    },
  },

  exercicios: [
    {
      enunciado:
        "📖 Você abriu um livro novo. Em que canto da página a leitura começa?",
      resposta: "No canto de cima, do lado esquerdo.",
      dica: "Pense na direção da seta ➡️ e na direção pra baixo ⬇️.",
    },
    {
      enunciado:
        "🐱 Na frase 'O gato dorme', qual palavra a gente lê por ÚLTIMO?",
      resposta: "Dorme — é a palavra mais à direita.",
      dica: "Siga da esquerda pra direita até chegar no fim.",
    },
    {
      enunciado:
        "📚 Terminou de ler a primeira linha. Pra onde você vai agora?",
      resposta: "Pra próxima linha, logo abaixo.",
      dica: "Depois da direita da linha 1, desce e volta pra esquerda da linha 2.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: o menino faz três coisas de manhã — acorda, escova os dentes e vai pra escola. Toque em cada figura na ORDEM certa, seguindo o caminho da leitura (esquerda → direita).",
    resposta:
      "1º Acordou · 2º Escovou os dentes · 3º Foi pra escola. É a mesma ordem que a gente lê: da esquerda pra direita.",
    visual: {
      cena: [
        { personagem: "1º · Acordou", itemImagemUrl: meninoAcordandoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "2º · Escovou", itemImagemUrl: escovarImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "3º · Escola", itemImagemUrl: escolaImg, quantidade: 1, cor: "#F472B6" },
      ],
      perguntas: [
        {
          pergunta: "O que acontece PRIMEIRO na história do menino?",
          opcoes: ["Foi pra escola", "Escovou os dentes", "Acordou"],
          correta: 2,
          explicacao:
            "A primeira figura, do lado ESQUERDO, é o menino acordando.",
        },
        {
          pergunta: "E o que acontece por ÚLTIMO?",
          opcoes: ["Acordou", "Escovou os dentes", "Foi pra escola"],
          correta: 2,
          explicacao:
            "A última figura, do lado DIREITO, é o menino indo pra escola.",
        },
        {
          pergunta:
            "Quando a gente lê uma frase, segue essa mesma direção. Qual é o caminho certo?",
          opcoes: [
            "Da direita pra esquerda",
            "Da esquerda pra direita",
            "Do meio pro fim",
          ],
          correta: 1,
          explicacao:
            "Em português, sempre lemos da esquerda pra direita.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Todo texto em português começa no canto de cima, do lado esquerdo.",
      "A gente lê da esquerda pra direita.",
      "Quando termina uma linha, desce pra próxima linha embaixo.",
      "Seguir esse caminho ajuda a entender a história.",
    ],
    dica: "Antes de começar a ler, procure onde fica a PRIMEIRA palavra — ela está lá em cima, à esquerda.",
  },

  quiz: [
    {
      pergunta: "A leitura em português começa em qual canto da página?",
      opcoes: [
        "No canto de cima, à esquerda",
        "No canto de baixo, à direita",
        "No meio da página",
      ],
      correta: 0,
      explicacao:
        "Sempre começamos pelo canto de cima, do lado esquerdo.",
    },
    {
      pergunta: "As palavras de uma frase são lidas...",
      opcoes: [
        "Da direita pra esquerda",
        "Da esquerda pra direita",
        "De trás pra frente",
      ],
      correta: 1,
      explicacao:
        "Em português, a leitura vai sempre da esquerda pra direita.",
    },
    {
      pergunta: "Terminou de ler uma linha. O que fazemos em seguida?",
      opcoes: [
        "Voltamos pro final da página",
        "Descemos pra próxima linha",
        "Paramos de ler",
      ],
      correta: 1,
      explicacao:
        "Depois de terminar uma linha, descemos pra próxima linha embaixo.",
    },
    {
      pergunta: "Por que seguimos uma direção certa pra ler?",
      opcoes: [
        "Pra entender melhor o texto",
        "Porque as letras mudam de cor",
        "Pra terminar mais rápido",
      ],
      correta: 0,
      explicacao:
        "Seguindo o caminho certo, as palavras fazem sentido e a história aparece.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Explorador da Leitura! Agora você já conhece o caminho das letras — esquerda pra direita e cima pra baixo. Missão em Casa: pegue um livro, uma revista ou um gibi e mostre pra alguém da família onde a leitura começa e como a gente desce pra próxima linha.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Nem todos os idiomas do mundo são lidos igual! O português, o inglês e o espanhol seguem da esquerda pra direita. Já o árabe e o hebraico são lidos da direita pra esquerda. Cada idioma tem o seu próprio caminho das letras.",
  },

  interativas: [
    {
      tipo: "ordenar",
      titulo: "Fase 1 · Siga a Flecha",
      instrucao:
        "A frase é 'O gato dorme'. Coloque as palavras na ordem certa da leitura — da ESQUERDA pra DIREITA.",
      itens: ["O", "gato", "dorme"],
      imagens: [
        { imagemUrl: setaImg, quantidade: 1, rotulo: "1º · O" },
        { imagemUrl: gatoImg, quantidade: 1, rotulo: "2º · gato" },
        { imagemUrl: estrelaImg, quantidade: 1, rotulo: "3º · dorme" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Onde Começa?",
      instrucao:
        "Olhe pro livro do Brilha. Pense: por onde a gente começa a ler?",
      grupos: [{ imagemUrl: livroImg, quantidade: 1, rotulo: "Livro do Brilha" }],
      pergunta: "Em que canto do livro a leitura começa?",
      opcoes: [
        "Canto de cima, à esquerda",
        "Canto de cima, à direita",
        "Última linha, embaixo",
      ],
      correta: 0,
      acerto:
        "Isso! Toda leitura em português começa lá em cima, do lado esquerdo.",
      erro: "Pense na direção da seta ➡️ e desça ⬇️. O começo fica em cima e à esquerda.",
    },
    {
      tipo: "ligar",
      titulo: "Fase 3 · Continue a Leitura",
      instrucao:
        "Ligue cada linha da história do menino com o que acontece nela.",
      pares: [
        { a: "Linha 1 · de manhã", b: "O menino acordou", aImagem: solImg, bImagem: meninoAcordandoImg },
        { a: "Linha 2 · depois", b: "Escovou os dentes", aImagem: estrelaImg, bImagem: escovarImg },
        { a: "Linha 3 · por fim", b: "Foi pra escola", aImagem: livroImg, bImagem: escolaImg },
      ],
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize a História",
      instrucao:
        "A história do menino ficou embaralhada. Coloque as cenas na ordem certa — CIMA pra BAIXO, como a gente lê.",
      itens: ["O menino acordou", "Escovou os dentes", "Foi pra escola"],
      imagens: [
        { imagemUrl: meninoAcordandoImg, quantidade: 1, rotulo: "1ª cena" },
        { imagemUrl: escovarImg, quantidade: 1, rotulo: "2ª cena" },
        { imagemUrl: escolaImg, quantidade: 1, rotulo: "3ª cena" },
      ],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 5 · Explorando o Livro",
      instrucao:
        "O Brilha abriu o livro mágico. Cada linha tem uma frase. Onde fica a PRIMEIRA palavra de cada linha?",
      grupos: [{ imagemUrl: livroImg, quantidade: 1, rotulo: "Livro aberto" }],
      pergunta: "A primeira palavra de cada linha fica onde?",
      opcoes: [
        "Do lado direito",
        "Do lado esquerdo",
        "Bem no meio",
      ],
      correta: 1,
      acerto:
        "Muito bem! Toda linha começa do lado ESQUERDO — é ali que a gente coloca o dedo pra ler.",
      erro: "Lembre: a gente lê da esquerda pra direita. Então a primeira palavra fica à esquerda.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta:
          "Olhe pra seta ➡️. É essa a direção certa da leitura em português?",
        opcoes: ["Sim, esquerda pra direita", "Não, direita pra esquerda", "Não sei"],
        correta: 0,
        explicacao:
          "Isso mesmo — a seta pra direita mostra o caminho certo da leitura.",
        visual: {
          tipo: "itens",
          imagemUrl: setaImg,
          quantidade: 1,
          rotulo: "A direção da leitura",
        },
      },
      {
        pergunta:
          "Na frase 'O gato dorme', qual palavra a gente lê PRIMEIRO depois do 'O'?",
        opcoes: ["dorme", "gato", "cachorro"],
        correta: 1,
        explicacao:
          "Depois de 'O', vem 'gato'. A gente segue da esquerda pra direita.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "gato" },
            { imagemUrl: estrelaImg, quantidade: 1, rotulo: "dorme" },
          ],
        },
      },
      {
        pergunta:
          "Você abriu um livro. Onde fica a primeira palavra?",
        opcoes: ["Em cima, à esquerda", "Em baixo, à direita", "No meio"],
        correta: 0,
        explicacao:
          "A primeira palavra de qualquer livro fica no canto de cima, do lado esquerdo.",
        visual: {
          tipo: "itens",
          imagemUrl: livroImg,
          quantidade: 1,
          rotulo: "Livro aberto",
        },
      },
    ],
    medio: [
      {
        pergunta:
          "Depois de terminar uma linha do livro, pra onde a gente vai?",
        opcoes: [
          "Pro final da página",
          "Pra próxima linha, logo abaixo",
          "Pra capa do livro",
        ],
        correta: 1,
        explicacao:
          "Terminou a linha? Desce ⬇️ pra próxima linha e começa de novo do lado esquerdo.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: livroImg, quantidade: 1, rotulo: "Linha 1" },
            { imagemUrl: livroImg, quantidade: 1, rotulo: "Linha 2" },
          ],
        },
      },
      {
        pergunta:
          "As cenas do menino são: 1º acordou, 2º escovou, 3º escola. Qual é a ÚLTIMA?",
        opcoes: ["Acordou", "Escovou os dentes", "Foi pra escola"],
        correta: 2,
        explicacao:
          "A cena mais à direita, e mais embaixo, é a última: foi pra escola.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: meninoAcordandoImg, quantidade: 1, rotulo: "1º", cor: "#FBBF24" },
            { imagemUrl: escovarImg, quantidade: 1, rotulo: "2º", cor: "#60A5FA" },
            { imagemUrl: escolaImg, quantidade: 1, rotulo: "3º", cor: "#F472B6" },
          ],
        },
      },
      {
        pergunta:
          "Qual bicho aparece PRIMEIRO nesta linha: 🐱 gato · 🐶 cachorro?",
        opcoes: ["Cachorro", "Gato", "Os dois juntos"],
        correta: 1,
        explicacao:
          "O gato está à esquerda, então é lido primeiro.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "Esquerda", cor: "#F472B6" },
            { imagemUrl: cachorroImg, quantidade: 1, rotulo: "Direita", cor: "#60A5FA" },
          ],
        },
      },
    ],
    dificil: [
      {
        pergunta:
          "Numa página existem 3 linhas. Qual linha lemos primeiro?",
        opcoes: ["A linha de baixo", "A linha do meio", "A linha de cima"],
        correta: 2,
        explicacao:
          "A gente lê de cima pra baixo — a primeira linha é a de cima.",
        visual: {
          tipo: "grupos",
          grupos: [
            { imagemUrl: livroImg, quantidade: 1, rotulo: "Linha 1 (cima)" },
            { imagemUrl: livroImg, quantidade: 1, rotulo: "Linha 2 (meio)" },
            { imagemUrl: livroImg, quantidade: 1, rotulo: "Linha 3 (baixo)" },
          ],
        },
      },
      {
        pergunta:
          "Se a gente ler da DIREITA pra esquerda em português, o que acontece?",
        opcoes: [
          "A história continua igual",
          "A história fica sem sentido",
          "O livro vira revista",
        ],
        correta: 1,
        explicacao:
          "Lendo na direção errada, as palavras não formam mais frases que a gente entende.",
        visual: {
          tipo: "itens",
          imagemUrl: livroImg,
          quantidade: 1,
          rotulo: "Livro do Brilha",
        },
      },
      {
        pergunta:
          "A cena do menino tem 3 momentos. Qual é o do MEIO?",
        opcoes: ["Acordou", "Escovou os dentes", "Foi pra escola"],
        correta: 1,
        explicacao:
          "Entre 'acordou' e 'foi pra escola', o momento do meio é 'escovou os dentes'.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: meninoAcordandoImg, quantidade: 1, rotulo: "1º", cor: "#FBBF24" },
            { imagemUrl: escovarImg, quantidade: 1, rotulo: "Meio", cor: "#60A5FA" },
            { imagemUrl: escolaImg, quantidade: 1, rotulo: "3º", cor: "#F472B6" },
          ],
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP02",
    titulo: "Reconhecer o sistema de escrita alfabética",
  },
};

export default aula;
