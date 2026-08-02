import type { AulaPortuguesV4 } from "../../types";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";

/**
 * Aula 3 — Pronomes que evitam repetição
 * -------------------------------------------------------------
 * Unidade 3 · A Engrenagem da Frase (5º ano)
 * Foco: usar pronomes (ele, ela, isso, que, o qual, seu, dela) para
 * substituir substantivos repetidos e deixar o texto mais fluido.
 * BNCC: EF05LP07, EF05LP04
 */
export const aula3: AulaPortuguesV4 = {
  slug: "aula-03-pronomes-que-evitam-repeticao",
  titulo: "Pronomes que evitam repetição",
  iconeTrilha: "🔁",
  bncc: ["EF05LP07", "EF05LP04"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A engrenagem que gira em círculos",
    historia:
      "Brilha leu um texto em voz alta: — 'Marina pegou o livro de Marina. Marina abriu o livro de Marina e Marina começou a ler o livro de Marina.' — Que travado, não é? A palavra MARINA e a palavra LIVRO ficam se repetindo e a engrenagem trava de tanto girar no mesmo lugar. Hoje vamos usar peças especiais, os PRONOMES, para substituir palavras repetidas e fazer o texto girar liso.",
    imagemUrl: robo,
  },

  momento02_previsao: {
    instrucao: "Observe o texto travado antes de começar.",
    bloco: {
      titulo: "O Texto que Gira em Círculos",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: menina, nome: "Uma menina chamada Marina" },
        { imagemUrl: livro, nome: "Um livro que se repete no texto" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como usar pronomes para substituir palavras repetidas no texto.", imagemUrl: robo },
        { texto: "Como escrever o nome Marina corretamente.", imagemUrl: menina },
        { texto: "Como organizar uma biblioteca.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender a usar pronomes para evitar repetição.",
      feedbackErro: "Pense no texto travado, repetindo os mesmos nomes. É sobre como resolver isso que vamos falar.",
      dica: "🔁 Pista: repare que o texto de Brilha repete 'Marina' e 'livro' o tempo todo. A aula ensina a peça que resolve isso.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as peças que substituem palavras repetidas.",
    cards: [
      {
        palavra: "pronome",
        explicacao: "Palavra que substitui um substantivo, evitando repeti-lo. Ex.: ELE, ELA, ISSO, QUE, SEU, DELA.",
        exemplo: "Marina pegou o livro. ELA o leu com atenção. (ELA substitui Marina)",
        imagemUrl: robo,
      },
      {
        palavra: "pronome pessoal",
        explicacao: "Substitui o nome de uma pessoa: EU, TU, ELE, ELA, NÓS, VÓS, ELES, ELAS.",
        exemplo: "João chegou. ELE estava atrasado.",
        imagemUrl: menino,
      },
      {
        palavra: "pronome possessivo",
        explicacao: "Indica a quem pertence algo, substituindo a expressão 'de + nome': MEU, SEU, DELE, DELA, NOSSO.",
        exemplo: "O livro DE MARINA virou 'o livro DELA' ou 'SEU livro'.",
        imagemUrl: livro,
      },
      {
        palavra: "pronome relativo",
        explicacao: "Liga duas ideias sem repetir o substantivo, geralmente com a palavra QUE.",
        exemplo: "Comprei um livro. O livro é interessante. → Comprei um livro QUE é interessante.",
        imagemUrl: caixa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo os pronomes trocarem de lugar com os nomes",
    instrucao: "Ouça o Brilha destravando cada frase repetida.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Marina pegou o livro. Ela o abriu com cuidado.", explicacao: "ELA substitui Marina; O substitui livro." },
          { texto: "Pedro emprestou seu carro ao amigo.", explicacao: "SEU substitui 'de Pedro', evitando repetir o nome." },
          { texto: "Comprei uma bicicleta que é vermelha.", explicacao: "QUE liga as duas ideias sem repetir 'bicicleta'." },
          { texto: "Ana e Beatriz saíram. Elas foram ao parque.", explicacao: "ELAS substitui Ana e Beatriz ao mesmo tempo." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha anotou no caderno da oficina como os pronomes destravam a frase.",
    leitura: {
      titulo: "O Caderno das Peças que Substituem",
      imagemUrl: pergaminho,
      legendaImagem: "Página sobre pronomes",
      destacar: ["pronome", "substituir", "repetição", "pronome relativo"],
      paragrafos: [
        "Repetir a mesma palavra várias vezes em um texto curto deixa a leitura cansativa e travada, como uma engrenagem girando sempre no mesmo lugar. Para resolver isso, a língua portuguesa tem os PRONOMES: palavras que SUBSTITUEM um substantivo já mencionado, evitando repeti-lo.",
        "Os PRONOMES PESSOAIS (EU, TU, ELE, ELA, NÓS, ELES, ELAS) substituem o nome de pessoas ou coisas: em vez de escrever 'João foi à escola. João estava atrasado', escrevemos 'João foi à escola. ELE estava atrasado'. A frase fica mais leve e ainda assim continua clara.",
        "Os PRONOMES POSSESSIVOS (MEU, TEU, SEU, NOSSO, DELE, DELA) substituem a expressão 'de + nome', mostrando a quem pertence algo: em vez de 'a mochila de Ana', dizemos 'a mochila DELA' ou 'SUA mochila'. Já os PRONOMES RELATIVOS, como QUE, ligam duas frases que falam do mesmo assunto, sem repetir o substantivo: 'Ganhei um presente. O presente era um livro' vira 'Ganhei um presente QUE era um livro'.",
        "Usar pronomes no lugar certo é uma marca de bom texto: ele fica mais fluido, mais fácil de ler e menos repetitivo. Mas é preciso cuidado — o pronome só funciona bem se ficar claro a quem ou a que ele se refere, senão o leitor se perde tentando adivinhar de quem estamos falando.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no caderno se precisar.",
    perguntas: [
      {
        pergunta: "O que os pronomes fazem, segundo o texto?",
        opcoes: [
          "Substituem um substantivo já mencionado, evitando repeti-lo",
          "Aumentam o tamanho da frase",
          "Trocam o sentido da frase por completo",
          "Servem apenas para começar frases",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Pronomes substituem substantivos, evitando repetição.",
        feedbackErro: "Releia: 'palavras que SUBSTITUEM um substantivo já mencionado, evitando repeti-lo'.",
        ondeEstaNoTexto: "palavras que SUBSTITUEM um substantivo já mencionado, evitando repeti-lo",
        dica: "🔁 Pista: volte ao texto e releia este trecho — “palavras que SUBSTITUEM um substantivo já mencionado, evitando repeti-lo”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Substituem um substantivo já mencionado, evitando repeti-lo”. Os pronomes existem justamente para isso. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que os pronomes possessivos indicam?",
        opcoes: [
          "A quem pertence algo",
          "O tempo da ação",
          "O lugar onde algo acontece",
          "A quantidade de objetos",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Pronomes possessivos mostram a quem algo pertence.",
        feedbackErro: "Releia: 'substituem a expressão de + nome, mostrando a quem pertence algo'.",
        ondeEstaNoTexto: "substituem a expressão \"de + nome\", mostrando a quem pertence algo",
        dica: "🔁 Pista: volte ao texto e releia este trecho — “substituem a expressão 'de + nome', mostrando a quem pertence algo”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A quem pertence algo”. Pronomes possessivos como SEU e DELA mostram posse. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual é o cuidado necessário ao usar pronomes, segundo o último parágrafo?",
        opcoes: [
          "Nunca usar mais de um pronome no texto",
          "Deixar claro a quem ou a que o pronome se refere",
          "Usar pronomes só no começo do texto",
          "Evitar pronomes possessivos",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! É preciso deixar claro a quem o pronome se refere.",
        feedbackErro: "Releia: 'o pronome só funciona bem se ficar claro a quem ou a que ele se refere'.",
        ondeEstaNoTexto: "o pronome só funciona bem se ficar claro a quem ou a que ele se refere",
        dica: "🔁 Pista: volte ao texto e releia este trecho — “o pronome só funciona bem se ficar claro a quem ou a que ele se refere”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Deixar claro a quem ou a que o pronome se refere”. Senão o leitor se perde. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "O que Brilha leu e o que aconteceu no texto?",
    perguntas: [
      {
        pergunta: "Qual nome se repetia sem parar no texto lido por Brilha?",
        opcoes: ["Marina", "Pedro", "Beatriz", "João"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O nome MARINA se repetia sem parar.",
        feedbackErro: "Releia a motivação: o nome repetido era Marina.",
        dica: "🔁 Pista: volte à motivação — Brilha leu um texto em que um nome de menina aparecia várias vezes seguidas.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Marina”. Era o nome que se repetia sem parar no texto travado. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Onde as regras dos pronomes foram anotadas?",
        opcoes: [
          "No caderno da oficina",
          "Numa carta perdida",
          "Numa embalagem de presente",
          "Num cartaz de rua",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ficou no Caderno das Peças que Substituem.",
        feedbackErro: "Releia o título: 'O Caderno das Peças que Substituem'.",
        dica: "🔁 Pista: releia o título da leitura guiada — ele já revela onde as regras foram anotadas.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No caderno da oficina”. O título é 'O Caderno das Peças que Substituem'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para trocar uma palavra repetida por um pronome.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Encontre a palavra que se repete no texto.", imagemUrl: caixa },
        { id: "p2", texto: "Descubra se ela é pessoa, coisa ou posse de alguém.", imagemUrl: menina },
        { id: "p3", texto: "Escolha o pronome certo (ele, ela, seu, que...).", imagemUrl: robo },
        { id: "p4", texto: "Substitua a palavra repetida pelo pronome escolhido.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho para destravar um texto repetitivo.",
      feedbackErro: "Pense: primeiro se acha a palavra repetida, depois se escolhe o pronome certo.",
      dica: "🔁 Pista: primeiro se encontra a palavra repetida, por último se faz a troca — os passos do meio decidem QUAL pronome usar.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do caderno e responda.",
    leitura: {
      titulo: "O Texto Destravado",
      imagemUrl: livro,
      destacar: ["ele", "sua", "que"],
      paragrafos: [
        "Lucas ganhou uma bicicleta nova. ELE ficou muito feliz e logo saiu para andar com SUA bicicleta pelo bairro.",
        "No caminho, Lucas encontrou um amigo QUE também tinha uma bicicleta nova. Os dois pedalaram juntos até o fim da tarde.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que a palavra ELE substitui no primeiro parágrafo?",
        opcoes: ["A bicicleta", "Lucas", "O bairro", "A tarde"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! ELE substitui Lucas, evitando repetir o nome.",
        feedbackErro: "Releia: 'Lucas ganhou uma bicicleta nova. ELE ficou muito feliz'.",
        ondeEstaNoTexto: "Lucas ganhou uma bicicleta nova. ELE ficou muito feliz",
        dica: "🔁 Pista: volte ao texto e releia este trecho — “Lucas ganhou uma bicicleta nova. ELE ficou muito feliz”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Lucas”. ELE substitui o nome do menino para não repeti-lo. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual pronome relativo liga as duas ideias no segundo parágrafo?",
        opcoes: ["QUE", "SUA", "ELE", "NÓS"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! QUE liga 'um amigo' a 'também tinha uma bicicleta nova'.",
        feedbackErro: "Releia: 'Lucas encontrou um amigo QUE também tinha uma bicicleta nova'.",
        ondeEstaNoTexto: "Lucas encontrou um amigo QUE também tinha uma bicicleta nova",
        dica: "🔁 Pista: volte ao texto e releia este trecho — “Lucas encontrou um amigo QUE também tinha uma bicicleta nova”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “QUE”. Esse pronome relativo liga as duas ideias sem repetir 'amigo'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a frase sem repetição",
    instrucao: "Ordene as palavras para formar a frase que usa o pronome corretamente.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "A Fila das Palavras Certas",
      bloco: {
        instrucao: "Coloque as palavras na ordem certa para formar a frase.",
        itens: [
          { id: "w1", texto: "Marina" },
          { id: "w2", texto: "pegou" },
          { id: "w3", texto: "o livro" },
          { id: "w4", texto: "e" },
          { id: "w5", texto: "ela" },
          { id: "w6", texto: "o leu" },
        ],
        ordemCerta: ["w1", "w2", "w3", "w4", "w5", "w6"],
        feedbackAcerto: "🎉 Isso! 'Marina pegou o livro e ela o leu' — sem repetir os nomes.",
        feedbackErro: "Pense: primeiro quem fez a ação, depois o objeto, e por fim o pronome que substitui o nome.",
        dica: "🔁 Pista: comece por quem faz a ação (Marina), depois o que ela pegou, e só no fim entra o pronome que a substitui.",
      },
    },
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Oficina de Textos sem Repetição",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escreva um mini-texto usando pronomes",
        comando:
          "Escolha uma pessoa ou um animal (pode ser você mesmo, um amigo ou seu bichinho de estimação). Escreva um pequeno texto de 3 a 4 frases contando algo que essa pessoa ou animal fez, usando pelo menos um pronome pessoal (ele/ela), um possessivo (seu/dela) e um relativo (que) para não repetir o nome o tempo todo.",
        linhas: 4,
        modelo: [
          "Meu cachorro se chama Bidu. Ele adora correr no quintal.",
          "Certo dia, Bidu encontrou uma bola que estava escondida na grama.",
          "Ele levou a bola até mim, balançando o rabo de alegria.",
          "Agora, sempre que pego a bola dele, Bidu já sabe que é hora de brincar.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Usei pelo menos um pronome pessoal (ele/ela) no lugar do nome repetido.",
          "Usei pelo menos um pronome possessivo (seu/dela) para indicar posse.",
          "Usei o pronome relativo QUE para ligar duas ideias sem repetir a palavra.",
          "Li em voz alta e verifiquei se ficou claro a quem cada pronome se refere.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (~130 ppm · 5º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: As Peças que Destravam o Texto",
    instrucao:
      "Leia o mesmo texto três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula e ponto. A meta não é correr: é ler como quem explica algo importante.",
    texto: [
      "Você já reparou como um texto fica cansativo quando repete o mesmo nome várias vezes seguidas? É como uma engrenagem que trava, girando sempre no mesmo lugar, sem avançar de verdade.",
      "Para resolver esse problema, usamos os pronomes: pequenas palavras que substituem um nome já mencionado, como ELE, ELA, SEU, DELA e QUE. Elas deixam o texto mais leve, mais fluido e muito mais agradável de ler.",
      "Mas existe um cuidado importante: o pronome só funciona bem quando fica claro a quem ele se refere. Por isso, um bom escritor sempre relê o próprio texto, imaginando se um leitor de fora entenderia cada pronome usado.",
    ],
    metaSegundos: 72,
  },

  momento09_revisao: {
    pontos: [
      "Pronomes substituem substantivos já mencionados, evitando repetição.",
      "Pronomes pessoais (ele, ela) substituem pessoas; possessivos (seu, dela) indicam posse; relativos (que) ligam ideias.",
      "O pronome só funciona bem se ficar claro a quem ele se refere.",
    ],
    miniDesafio: {
      pergunta: "Em 'Ana perdeu seu caderno', a palavra SEU substitui o quê?",
      opcoes: [
        "'de outra pessoa'",
        "'de Ana'",
        "Nada, é só um enfeite",
        "'da escola'",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! SEU substitui 'de Ana', mostrando que o caderno é dela.",
      feedbackErro: "Releia a explicação: pronomes possessivos indicam a quem pertence algo.",
      dica: "🔁 Pista: pense em quem é a dona do caderno na frase — é o mesmo nome que apareceu antes do SEU.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “'de Ana'”. SEU é um pronome possessivo e substitui 'de Ana'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Para que servem os pronomes?",
        opcoes: ["Para enfeitar o texto", "Para substituir substantivos e evitar repetição", "Para separar frases", "Para indicar cor"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Pronomes evitam repetição de substantivos.",
        feedbackErro: "Lembre: pronomes substituem palavras já ditas.",
        dica: "🔁 Pista: pense na engrenagem travada da motivação — os pronomes são a peça que resolve a repetição.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Para substituir substantivos e evitar repetição”. É essa a função dos pronomes. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — Qual pronome substitui corretamente 'João' na frase 'João chegou. ___ estava cansado'?",
        opcoes: ["Ela", "Eles", "Ele", "Nós"],
        correta: 2,
        feedbackAcerto: "🎉 Correto! ELE substitui João, pessoa do sexo masculino, singular.",
        feedbackErro: "Pense: João é uma pessoa, masculino e singular — o pronome precisa combinar.",
        dica: "🔁 Pista: João é um nome masculino e é uma só pessoa — o pronome precisa combinar em gênero e número.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Ele”. É o pronome pessoal que combina com João, masculino e singular. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — Qual frase usa corretamente um pronome possessivo?",
        opcoes: [
          "Ele foi embora que cedo.",
          "A bicicleta é dela.",
          "Nós fomos ele ontem.",
          "Ela que gosta de futebol.",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Dela' indica posse, substituindo 'de + nome de uma menina'.",
        feedbackErro: "Procure a frase em que o pronome mostra a quem pertence algo.",
        dica: "🔁 Pista: procure a frase em que a palavra destacada mostra DE QUEM é alguma coisa.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A bicicleta é dela.”. DELA é o pronome possessivo, indicando posse. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Qual palavra é um pronome relativo comum, usado para ligar ideias?",
        opcoes: ["Que", "Rápido", "Bonito", "Depois"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! QUE é o pronome relativo mais usado para ligar frases.",
        feedbackErro: "Lembre: o pronome relativo mais comum é QUE.",
        dica: "🔁 Pista: pense na frase 'Comprei um livro QUE é interessante' — qual palavra liga as duas ideias?",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Que”. É o pronome relativo mais usado para ligar duas ideias sem repetir o substantivo. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — Por que é preciso cuidado ao usar pronomes, segundo a aula?",
        opcoes: [
          "Porque pronomes são proibidos em textos formais",
          "Porque é preciso ficar claro a quem o pronome se refere",
          "Porque pronomes sempre erram a concordância",
          "Porque pronomes só existem no plural",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Aula concluída! O pronome precisa deixar claro a quem se refere.",
        feedbackErro: "Releia a conclusão: é preciso clareza sobre a quem o pronome se refere.",
        dica: "🔁 Pista: pense no que acontece quando o leitor não sabe a quem o pronome se refere — ele se perde na leitura.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque é preciso ficar claro a quem o pronome se refere”. Senão o leitor se perde. Aula concluída! 🌟 Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Destravando o texto da família",
    materiais: ["Papel e lápis"],
    passos: [
      "1) Com um adulto, escolham uma pequena história do dia a dia (ex.: 'a viagem da família' ou 'o dia de um animal de estimação').",
      "2) Escrevam primeiro a história repetindo bastante os nomes, de propósito, para ver como fica cansativo.",
      "3) Depois, reescrevam a mesma história em 2 a 4 frases, agora usando pronomes (ele, ela, seu, que) no lugar dos nomes repetidos.",
      "4) Comparem as duas versões e conversem sobre qual ficou mais fácil de ler.",
    ],
    registro: "📝 Uma foto das duas versões do texto, ou um áudio lendo a versão com pronomes.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
