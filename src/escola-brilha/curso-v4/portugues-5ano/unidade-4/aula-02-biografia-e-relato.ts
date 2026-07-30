import type { AulaPortuguesV4 } from "../../types";
import { url as avoHomem } from "@/assets/neuro-treino/objetos/avo-homem.png.asset.json";
import { url as album } from "@/assets/neuro-treino/objetos/album.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as heroi } from "@/assets/neuro-treino/objetos/heroi.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as familiaTradicional } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 2 — Biografia e relato
 * -------------------------------------------------------------
 * Unidade 4 · Território dos Gêneros (5º ano)
 * Foco: reconhecer a estrutura da biografia (vida de alguém, em
 * ordem cronológica, com fatos marcantes) e do relato pessoal
 * (experiência vivida, contada em primeira pessoa).
 * BNCC: EF05LP14, EF05LP26
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-biografia-e-relato",
  titulo: "Biografia e relato",
  iconeTrilha: "📖",
  bncc: ["EF05LP14", "EF05LP26"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O álbum de vidas do Território",
    historia:
      "Brilha abriu um álbum enorme, cheio de fotos antigas. — Neste cantinho do Território dos Gêneros mora o Vale das Histórias de Vida! Aqui a gente aprende a contar a trajetória de uma pessoa inteira, do nascimento até hoje, ou apenas um momento marcante que ela viveu. São dois jeitos diferentes de guardar memórias: a biografia e o relato pessoal. Vamos abrir o álbum?",
    imagemUrl: album,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas do Vale das Histórias de Vida antes de começar.",
    bloco: {
      titulo: "O Vale das Histórias de Vida",
      capaImagemUrl: album,
      pistas: [
        { imagemUrl: avoHomem, nome: "Um avô contando causos" },
        { imagemUrl: relogio, nome: "Um relógio antigo" },
      ],
      pergunta: "Sobre o que essa parte do Território dos Gêneros vai ensinar?",
      hipoteses: [
        { texto: "Como consertar relógios antigos.", imagemUrl: relogio },
        { texto: "Como contar a vida de alguém ou uma experiência vivida.", imagemUrl: avoHomem },
        { texto: "Como fazer uma receita de família.", imagemUrl: familiaTradicional },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender a contar a trajetória de uma pessoa ou um momento vivido por ela.",
      feedbackErro: "Pense no avô contando causos: ele está relembrando uma vida ou um momento vivido. É sobre isso que vamos falar.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras do Vale das Histórias de Vida.",
    cards: [
      {
        palavra: "biografia",
        explicacao: "Texto que conta a trajetória de vida de uma pessoa, geralmente em ordem cronológica, com fatos e datas importantes.",
        exemplo: "A biografia de uma cientista pode contar desde sua infância até suas descobertas.",
        imagemUrl: livro,
      },
      {
        palavra: "relato pessoal",
        explicacao: "Texto em que alguém conta, em primeira pessoa, uma experiência real que viveu.",
        exemplo: "Um relato sobre o dia em que a pessoa aprendeu a andar de bicicleta.",
        imagemUrl: avoHomem,
      },
      {
        palavra: "ordem cronológica",
        explicacao: "Organização dos fatos na ordem em que aconteceram no tempo, do mais antigo para o mais recente.",
        exemplo: "A biografia segue a ordem cronológica: nascimento, infância, conquistas.",
        imagemUrl: relogio,
      },
      {
        palavra: "fato marcante",
        explicacao: "Um acontecimento importante na vida de alguém, que merece ser lembrado e contado.",
        exemplo: "Ganhar uma medalha em uma competição pode ser um fato marcante.",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo a diferença entre biografia e relato",
    instrucao: "Ouça o Brilha comparando trechos de biografia e de relato pessoal.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Maria nasceu em 1980, em uma pequena cidade do interior.", explicacao: "Frase típica de BIOGRAFIA: fala da pessoa em 3ª pessoa e começa pelo nascimento." },
          { texto: "Eu nunca vou esquecer o dia em que subi naquela árvore pela primeira vez.", explicacao: "Frase típica de RELATO PESSOAL: usa a 1ª pessoa (eu) e conta uma experiência vivida." },
          { texto: "Aos 25 anos, ele se formou engenheiro e mudou de cidade.", explicacao: "Continua a BIOGRAFIA, avançando no tempo com fatos marcantes." },
          { texto: "Fiquei com tanto medo que quase desisti de descer, mas respirei fundo.", explicacao: "No RELATO, aparecem sentimentos e emoções de quem viveu o fato." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou no álbum como funcionam biografia e relato.",
    leitura: {
      titulo: "O Álbum do Vale das Histórias de Vida",
      imagemUrl: album,
      legendaImagem: "Página sobre biografia e relato",
      destacar: ["biografia", "relato pessoal", "terceira pessoa", "primeira pessoa"],
      paragrafos: [
        "A BIOGRAFIA conta a vida de uma pessoa, geralmente escrita por outra pessoa, em TERCEIRA PESSOA (ele, ela). Ela costuma seguir a ORDEM CRONOLÓGICA: nascimento, infância, fatos marcantes e conquistas, até chegar ao presente ou ao fim da vida da pessoa biografada.",
        "Já o RELATO PESSOAL é contado por quem viveu a experiência, em PRIMEIRA PESSOA (eu, nós). Ele não precisa contar a vida toda de alguém: pode falar de um único dia, uma viagem, um medo superado ou uma conquista pequena, mas importante para quem escreve.",
        "Veja um exemplo real de biografia curta: 'Maria da Penha nasceu em Fortaleza, em 1945. Formou-se em Farmácia e, ao longo da vida, enfrentou situações de violência doméstica que a motivaram a lutar por uma lei que protegesse as mulheres. Em 2006, entrou em vigor a Lei Maria da Penha, batizada em sua homenagem.' Note como o texto segue o tempo e usa a terceira pessoa.",
        "Agora um exemplo de relato pessoal: 'No ano passado, participei da minha primeira competição de natação. Fiquei tão nervoso na saída que quase esqueci de respirar. Quando toquei na borda da piscina e vi meu tempo no placar, entendi que o medo tinha valido a pena.' Aqui o autor fala de si mesmo e de um único momento vivido.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no álbum se precisar.",
    perguntas: [
      {
        pergunta: "Em que pessoa gramatical a biografia costuma ser escrita?",
        opcoes: ["Primeira pessoa (eu)", "Segunda pessoa (tu)", "Terceira pessoa (ele, ela)", "Não tem pessoa definida"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! A biografia é escrita em terceira pessoa, contando a vida de outra pessoa.",
        feedbackErro: "Releia: 'geralmente escrita por outra pessoa, em TERCEIRA PESSOA (ele, ela)'.",
        ondeEstaNoTexto: "geralmente escrita por outra pessoa, em TERCEIRA PESSOA (ele, ela)",
      },
      {
        pergunta: "O que o relato pessoal não precisa fazer, ao contrário da biografia?",
        opcoes: [
          "Usar a primeira pessoa",
          "Contar a vida toda de alguém",
          "Falar de sentimentos",
          "Ser um texto verdadeiro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O relato pode falar só de um momento, sem precisar contar a vida inteira.",
        feedbackErro: "Releia: 'Ele não precisa contar a vida toda de alguém: pode falar de um único dia, uma viagem...'",
        ondeEstaNoTexto: "Ele não precisa contar a vida toda de alguém: pode falar de um único dia, uma viagem, um medo superado ou uma conquista pequena",
      },
      {
        pergunta: "Em que ano entrou em vigor a Lei Maria da Penha, segundo o texto?",
        opcoes: ["1945", "1980", "2000", "2006"],
        correta: 3,
        feedbackAcerto: "🎉 Exato! O texto diz que a lei entrou em vigor em 2006.",
        feedbackErro: "Releia: 'Em 2006, entrou em vigor a Lei Maria da Penha'.",
        ondeEstaNoTexto: "Em 2006, entrou em vigor a Lei Maria da Penha, batizada em sua homenagem",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem são as pessoas das histórias lidas?",
    perguntas: [
      {
        pergunta: "Onde Maria da Penha nasceu, segundo a biografia exemplo?",
        opcoes: ["São Paulo", "Fortaleza", "Rio de Janeiro", "Salvador"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O texto diz que ela nasceu em Fortaleza.",
        feedbackErro: "Releia: 'Maria da Penha nasceu em Fortaleza, em 1945.'",
      },
      {
        pergunta: "Que competição o autor do relato pessoal disputou?",
        opcoes: ["Uma corrida", "Uma competição de natação", "Um campeonato de xadrez", "Uma prova de matemática"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Foi uma competição de natação.",
        feedbackErro: "Releia: 'participei da minha primeira competição de natação'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para escrever uma biografia.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Pesquisar dados sobre o nascimento e a infância da pessoa.", imagemUrl: papel },
        { id: "p2", texto: "Levantar os fatos marcantes da vida dela, em ordem de tempo.", imagemUrl: relogio },
        { id: "p3", texto: "Escrever o texto em terceira pessoa, contando cada fase.", imagemUrl: livro },
        { id: "p4", texto: "Terminar destacando o legado ou a importância dessa pessoa.", imagemUrl: heroi },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho para montar uma boa biografia.",
      feedbackErro: "Pense: primeiro se pesquisa a vida, depois se organiza no tempo, depois se escreve e por fim se destaca a importância da pessoa.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro trecho do álbum e responda.",
    leitura: {
      titulo: "Mais uma Página do Álbum",
      imagemUrl: familiaTradicional,
      destacar: ["autobiografia", "memórias"],
      paragrafos: [
        "Quando a própria pessoa escreve sobre a sua vida, o texto é chamado de AUTOBIOGRAFIA. Nesse caso, a pessoa fala de si mesma em primeira pessoa, mas contando sua trajetória inteira, como em uma biografia.",
        "As MEMÓRIAS também são escritas em primeira pessoa, mas costumam misturar vários relatos de momentos diferentes da vida do autor, sem seguir estritamente a ordem cronológica, unidos por lembranças que a pessoa considera importantes.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que é uma autobiografia?",
        opcoes: [
          "Um texto que fala mal de alguém",
          "Um texto em que a própria pessoa conta sua vida",
          "Um texto sobre robôs",
          "Um texto sem nenhum autor",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Na autobiografia, a própria pessoa escreve sobre sua vida.",
        feedbackErro: "Releia: 'Quando a própria pessoa escreve sobre a sua vida, o texto é chamado de AUTOBIOGRAFIA.'",
        ondeEstaNoTexto: "Quando a própria pessoa escreve sobre a sua vida, o texto é chamado de AUTOBIOGRAFIA",
      },
      {
        pergunta: "O que caracteriza as memórias, segundo o texto?",
        opcoes: [
          "Seguem sempre a ordem cronológica rígida",
          "São escritas por outra pessoa",
          "Misturam relatos de momentos diferentes, unidos por lembranças importantes",
          "Não podem ter emoções",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Exato! As memórias reúnem lembranças de momentos diferentes, sem ordem rígida.",
        feedbackErro: "Releia: 'costumam misturar vários relatos de momentos diferentes... unidos por lembranças que a pessoa considera importantes'.",
        ondeEstaNoTexto: "costumam misturar vários relatos de momentos diferentes da vida do autor, sem seguir estritamente a ordem cronológica",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Classifique: biografia ou relato?",
    instrucao: "Arraste cada trecho para o alvo certo: biografia ou relato pessoal.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "A Estante do Vale das Histórias",
      bloco: {
        instrucao: "Preste atenção na pessoa gramatical usada em cada trecho.",
        itens: [
          { id: "t1", texto: "Ele nasceu em 1970 e se tornou um grande escritor.", alvoId: "biografia" },
          { id: "t2", texto: "Eu me lembro do dia em que ganhei meu primeiro livro.", alvoId: "relato" },
          { id: "t3", texto: "Aos 30 anos, ela publicou seu primeiro romance.", alvoId: "biografia" },
          { id: "t4", texto: "Fiquei emocionada quando vi minha redação premiada no mural.", alvoId: "relato" },
        ],
        alvos: [
          { id: "biografia", nome: "Biografia", imagemUrl: livro },
          { id: "relato", nome: "Relato pessoal", imagemUrl: avoHomem },
        ],
        feedbackAcerto: "🎉 Você separou certinho os textos de biografia e de relato pessoal!",
        feedbackErro: "Preste atenção: biografia usa terceira pessoa (ele, ela); relato pessoal usa primeira pessoa (eu).",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "BIOGRAFIA conta a vida de alguém em terceira pessoa, seguindo ordem cronológica.",
      "RELATO PESSOAL conta uma experiência vivida em primeira pessoa, podendo focar em um único momento.",
      "AUTOBIOGRAFIA é quando a própria pessoa escreve sua biografia.",
    ],
    miniDesafio: {
      pergunta: "Um texto que começa com 'Eu nunca vou esquecer aquele dia...' é provavelmente um...",
      opcoes: [
        "Anúncio publicitário",
        "Relato pessoal",
        "Manual de instruções",
        "Cardápio de restaurante",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! O uso da primeira pessoa e de uma lembrança indica relato pessoal.",
      feedbackErro: "Releia a explicação: relato pessoal usa primeira pessoa e conta uma experiência vivida.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — A biografia costuma ser escrita em qual pessoa gramatical?",
        opcoes: ["Primeira pessoa", "Segunda pessoa", "Terceira pessoa", "Nenhuma pessoa"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! Biografia usa terceira pessoa.",
        feedbackErro: "Biografia é escrita sobre outra pessoa, em terceira pessoa.",
      },
      {
        pergunta: "2/5 — O relato pessoal é escrito em qual pessoa gramatical?",
        opcoes: ["Terceira pessoa", "Primeira pessoa", "Segunda pessoa", "Nenhuma"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Relato pessoal usa a primeira pessoa (eu).",
        feedbackErro: "Relato pessoal é contado por quem viveu, então usa 'eu'.",
      },
      {
        pergunta: "3/5 — O que é ordem cronológica?",
        opcoes: [
          "Organizar fatos por cor",
          "Organizar fatos do mais recente para o mais antigo",
          "Organizar fatos na ordem em que aconteceram no tempo",
          "Organizar fatos por tamanho do texto",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Isso! Ordem cronológica segue a linha do tempo, do mais antigo ao mais recente.",
        feedbackErro: "Ordem cronológica é a ordem dos fatos no tempo.",
      },
      {
        pergunta: "4/5 — Como se chama o texto em que a própria pessoa escreve sobre sua vida?",
        opcoes: ["Reportagem", "Autobiografia", "Notícia", "Manual"],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Isso se chama autobiografia.",
        feedbackErro: "Quando a própria pessoa escreve sua vida, chama-se autobiografia.",
      },
      {
        pergunta: "5/5 — Qual das opções é um exemplo de relato pessoal?",
        opcoes: [
          "'Ele nasceu em 1990, na cidade de Manaus.'",
          "'A empresa foi fundada em 1985.'",
          "'Eu me lembro do meu primeiro dia de aula.'",
          "'A prefeitura inaugurou uma escola nova.'",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Vale conquistado! Essa frase usa a primeira pessoa e conta uma lembrança pessoal.",
        feedbackErro: "Relato pessoal usa 'eu' e conta uma experiência vivida por quem escreve.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Uma página da sua própria história",
    materiais: ["Papel e lápis", "Se possível, uma foto antiga"],
    passos: [
      "1) Converse com um adulto da família sobre um momento marcante que ele viveu.",
      "2) Escolha também um momento marcante que VOCÊ viveu.",
      "3) Escreva um pequeno RELATO PESSOAL de 3 a 4 frases sobre o seu momento, usando 'eu'.",
      "4) Se quiser, cole uma foto ao lado do texto para lembrar do momento.",
    ],
    registro: "📝 Uma foto do relato escrito à mão, com ou sem a foto colada.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
