import type { AulaPortuguesV4 } from "../../types";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as tambor } from "@/assets/neuro-treino/objetos/tambor.png.asset.json";
import { url as estrelaBrilhante } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as caixaImg } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";

/**
 * Aula 4 — Missão final: Sarau da Conquista
 * -------------------------------------------------------------
 * Unidade 6 · Vozes do Mundo (5º ano)
 * Foco: fechamento do curso — o aluno escolhe entre poema, cena
 * teatral curta ou fala expositiva, produz seu texto com todo o
 * processo de escrita (rascunho, revisão, versão final) e apresenta
 * num sarau, retomando leitura crítica, ortografia, concordância,
 * gêneros textuais, escrita autoral e oralidade das seis unidades.
 * BNCC: EF05LP26, EF05LP19
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-missao-final-sarau-da-conquista",
  titulo: "Missão final: Sarau da Conquista",
  iconeTrilha: "🌟",
  bncc: ["EF05LP26", "EF05LP19"],
  duracaoMin: 30,

  momento01_motivacao: {
    titulo: "O Grande Sarau",
    historia:
      "Brilha entrou no pátio decorado com balões e bandeirinhas, o Mural de Conquistas brilhando com tudo o que a turma já aprendeu. — Chegou o dia! Hoje é o SARAU DA CONQUISTA, a festa final da nossa jornada por Vozes do Mundo. Você vai escolher: um poema, uma cena de teatro ou uma fala para apresentar diante de todos. Vamos usar tudo o que aprendemos — para ler com atenção, escrever com capricho e falar com confiança?",
    imagemUrl: festa,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas do Sarau da Conquista antes de começar.",
    bloco: {
      titulo: "O Sarau da Conquista",
      capaImagemUrl: mural,
      pistas: [
        { imagemUrl: estrelaBrilhante, nome: "Uma estrela marcando a conquista final" },
        { imagemUrl: criancasGrupo, nome: "Uma turma reunida para celebrar" },
      ],
      pergunta: "Sobre o que essa aula final vai ensinar?",
      hipoteses: [
        { texto: "Como decorar balões para uma festa.", imagemUrl: balao },
        { texto: "Como criar um texto autoral e apresentá-lo num sarau, usando tudo o que já foi aprendido.", imagemUrl: professora },
        { texto: "Como desenhar uma estrela no papel.", imagemUrl: papel },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos criar um texto e apresentá-lo, celebrando tudo o que aprendemos.",
      feedbackErro: "Pense na turma reunida para celebrar: essa aula ensina a criar e apresentar um texto autoral no sarau final.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras do Sarau da Conquista.",
    cards: [
      {
        palavra: "sarau",
        explicacao: "Um encontro festivo em que as pessoas se reúnem para apresentar poemas, músicas, cenas de teatro ou falas.",
        exemplo: "No sarau da escola, cada aluno apresentou um poema para os colegas e as famílias.",
        imagemUrl: festa,
      },
      {
        palavra: "rascunho",
        explicacao: "A primeira versão de um texto, escrita para organizar as ideias, que ainda pode ter erros e vai ser revisada.",
        exemplo: "Pedro fez um rascunho do seu poema antes de passar a limpo.",
        imagemUrl: papel,
      },
      {
        palavra: "revisão",
        explicacao: "O momento de reler o texto com cuidado, corrigindo a ortografia, a concordância e melhorando as ideias.",
        exemplo: "Na revisão, Marina percebeu que tinha esquecido um acento e corrigiu a palavra.",
        imagemUrl: lapis,
      },
      {
        palavra: "versão final",
        explicacao: "O texto já revisado e corrigido, pronto e caprichado, para ser apresentado ou publicado.",
        exemplo: "Depois de revisar duas vezes, a turma escreveu a versão final dos poemas no mural da sala.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Ouvindo as dicas para a missão final",
    instrucao: "Ouça o Brilha destacando os passos para criar e apresentar seu texto.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Escolha um gênero: poema, cena de teatro ou fala.", explicacao: "Cada GÊNERO tem um jeito próprio de organizar as ideias." },
          { texto: "Escreva um RASCUNHO com todas as suas ideias.", explicacao: "O rascunho é o primeiro passo — não precisa estar perfeito." },
          { texto: "Faça a REVISÃO, corrigindo ortografia e concordância.", explicacao: "Revisar é reler com atenção para melhorar o texto." },
          { texto: "Treine a apresentação usando entonação e boa postura.", explicacao: "No sarau, a forma de falar é tão importante quanto o texto escrito." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou no Mural de Conquistas como preparar a missão final.",
    leitura: {
      titulo: "O Caderno do Sarau da Conquista",
      imagemUrl: livro,
      legendaImagem: "Página sobre a missão final",
      destacar: ["sarau", "rascunho", "revisão", "versão final"],
      paragrafos: [
        "Ao longo desta jornada, você aprendeu a ler com atenção, a escrever com ortografia correta, a usar bem a concordância, a reconhecer diferentes gêneros textuais e a falar em público com confiança. Agora chegou a hora de juntar tudo isso numa missão final: criar um texto autoral e apresentá-lo num SARAU, que é uma festa de apresentações.",
        "O primeiro passo é escolher o gênero que você quer criar. Pode ser um POEMA, como este exemplo: 'Minha voz é um rio,/ corre livre, sem parar,/ conta histórias, sonhos, ideias,/ que ninguém pode calar.' Repare como o poema usa rima e ritmo, retomando o que aprendemos na primeira unidade sobre poesia.",
        "Também é possível escolher uma CENA TEATRAL curta, com falas de personagens, como neste trecho: 'NARRADOR: Era uma vez uma turma cheia de ideias. — JOANA (empolgada): Eu vou escrever sobre o mar! — LUCAS (pensativo): E eu vou falar sobre as estrelas!' Perceba os nomes dos personagens antes de cada fala, do jeito que aprendemos na unidade sobre texto teatral.",
        "Depois de escolher o gênero, é preciso seguir o processo de escrita: primeiro o RASCUNHO, onde as ideias saem sem medo de errar; depois a REVISÃO, quando se relê o texto com calma, corrigindo a ortografia, a acentuação e a concordância entre as palavras; e por fim a VERSÃO FINAL, o texto já corrigido e caprichado, pronto para ser apresentado em voz alta, com boa entonação, volume e postura, exatamente como praticamos na Roda da Fala.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no caderno se precisar.",
    perguntas: [
      {
        pergunta: "O que é um sarau?",
        opcoes: [
          "Um jogo de tabuleiro",
          "Uma festa de apresentações de poemas, cenas ou falas",
          "Um tipo de prova escrita",
          "Um desenho animado",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Sarau é uma festa em que as pessoas apresentam poemas, cenas ou falas.",
        feedbackErro: "Releia: 'um encontro festivo em que as pessoas se reúnem para apresentar poemas, músicas, cenas de teatro ou falas'.",
        ondeEstaNoTexto: "criar um texto autoral e apresentá-lo num SARAU, que é uma festa de apresentações",
      },
      {
        pergunta: "Quais são os três gêneros que o aluno pode escolher para a missão final?",
        opcoes: [
          "Notícia, propaganda e receita",
          "Poema, cena teatral e fala expositiva",
          "Bilhete, carta e lista",
          "Fábula, conto e lenda",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O aluno pode escolher poema, cena teatral ou fala.",
        feedbackErro: "Releia: 'Pode ser um POEMA... também é possível escolher uma CENA TEATRAL curta'.",
        ondeEstaNoTexto: "escolher o gênero que você quer criar. Pode ser um POEMA",
      },
      {
        pergunta: "Qual é a ordem correta do processo de escrita apresentado no texto?",
        opcoes: [
          "Versão final, rascunho, revisão",
          "Revisão, versão final, rascunho",
          "Rascunho, revisão, versão final",
          "Rascunho, versão final, revisão",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Exato! Primeiro o rascunho, depois a revisão, e por fim a versão final.",
        feedbackErro: "Releia: 'primeiro o RASCUNHO... depois a REVISÃO... e por fim a VERSÃO FINAL'.",
        ondeEstaNoTexto: "primeiro o RASCUNHO, onde as ideias saem sem medo de errar; depois a REVISÃO",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Sobre o Sarau da Conquista e os exemplos do caderno.",
    perguntas: [
      {
        pergunta: "Onde acontece a missão final desta aula?",
        opcoes: ["Na Roda da Fala", "No Sarau da Conquista", "Na Praça dos Anúncios", "No Palco Encantado"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A missão final acontece no Sarau da Conquista.",
        feedbackErro: "Releia a motivação: 'Hoje é o SARAU DA CONQUISTA'.",
      },
      {
        pergunta: "No exemplo de poema do texto, com o que a voz é comparada?",
        opcoes: ["Com um pássaro", "Com um rio", "Com uma estrela", "Com um trovão"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! A voz é comparada a um rio: 'Minha voz é um rio'.",
        feedbackErro: "Releia o poema: 'Minha voz é um rio, corre livre, sem parar'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos da missão final do Sarau da Conquista.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Escolher o gênero: poema, cena teatral ou fala expositiva.", imagemUrl: mural },
        { id: "p2", texto: "Escrever o rascunho, colocando todas as ideias no papel.", imagemUrl: papel },
        { id: "p3", texto: "Revisar o texto, corrigindo ortografia e concordância.", imagemUrl: lapis },
        { id: "p4", texto: "Apresentar a versão final no sarau, com boa entonação e postura.", imagemUrl: festa },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo para preparar a missão final.",
      feedbackErro: "Pense: primeiro se escolhe o gênero, depois se escreve o rascunho, depois se revisa, e por fim se apresenta.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro trecho do caderno e responda.",
    leitura: {
      titulo: "Mais Descobertas no Sarau da Conquista",
      imagemUrl: estrela,
      destacar: ["capricho", "aplausos"],
      paragrafos: [
        "Quando um texto é escrito com CAPRICHO, isso significa que o autor cuidou de cada detalhe: escolheu bem as palavras, revisou a ortografia e organizou as ideias com clareza. Um texto caprichado fica mais fácil de entender e mais bonito de apresentar.",
        "No dia do sarau, depois de cada apresentação, é comum ouvir APLAUSOS da plateia. Os aplausos são uma forma de reconhecer o esforço de quem apresentou, e também incentivam quem ainda vai apresentar a fazer o seu melhor.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que significa escrever um texto com capricho?",
        opcoes: [
          "Escrever bem rápido, sem se preocupar com erros",
          "Cuidar de cada detalhe, escolhendo bem as palavras e revisando",
          "Escrever apenas uma frase",
          "Copiar o texto de outra pessoa",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Capricho é cuidar de cada detalhe do texto.",
        feedbackErro: "Releia: 'o autor cuidou de cada detalhe: escolheu bem as palavras, revisou a ortografia'.",
        ondeEstaNoTexto: "isso significa que o autor cuidou de cada detalhe",
      },
      {
        pergunta: "O que os aplausos representam no sarau, segundo o texto?",
        opcoes: [
          "Que a apresentação terminou muito rápido",
          "Um reconhecimento do esforço de quem apresentou",
          "Um sinal de que houve um erro",
          "Um pedido para recomeçar a apresentação",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Os aplausos reconhecem o esforço de quem apresentou.",
        feedbackErro: "Releia: 'Os aplausos são uma forma de reconhecer o esforço de quem apresentou'.",
        ondeEstaNoTexto: "Os aplausos são uma forma de reconhecer o esforço de quem apresentou",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Organize a missão final",
    instrucao: "Selecione apenas os passos que fazem parte da criação de um texto para o sarau.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "A Caixa dos Passos Certos",
      bloco: {
        instrucao: "Marque apenas os itens que fazem parte da preparação para o sarau.",
        pergunta: "O que faz parte de preparar um texto para o Sarau da Conquista?",
        opcoes: [
          { id: "o1", texto: "Escrever um rascunho com as primeiras ideias.", imagemUrl: papel, correto: true },
          { id: "o2", texto: "Revisar o texto para corrigir erros.", imagemUrl: lapis, correto: true },
          { id: "o3", texto: "Treinar a apresentação em voz alta.", imagemUrl: tambor, correto: true },
          { id: "o4", texto: "Jogar o rascunho fora sem reler.", imagemUrl: caixaImg, correto: false },
        ],
        feedbackAcerto: "🎉 Muito bem! Você reconheceu os passos certos da missão final.",
        feedbackErro: "Pense: rascunho, revisão e treino fazem parte da preparação; jogar o rascunho fora sem reler, não.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "O SARAU é uma festa de apresentações de poemas, cenas de teatro ou falas.",
      "O processo de escrita segue três etapas: RASCUNHO, REVISÃO e VERSÃO FINAL.",
      "Uma apresentação caprichada usa boa entonação, volume de voz e postura.",
    ],
    miniDesafio: {
      pergunta: "Qual é a primeira etapa do processo de escrita?",
      opcoes: [
        "A versão final",
        "O rascunho",
        "A revisão",
        "Os aplausos",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! O rascunho é a primeira etapa, onde as ideias saem sem medo de errar.",
      feedbackErro: "Releia a explicação: primeiro vem o rascunho, depois a revisão e a versão final.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um sarau?",
        opcoes: [
          "Uma festa de apresentações de textos",
          "Um tipo de prova",
          "Um jogo de tabuleiro",
          "Um desenho animado",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Sarau é uma festa de apresentações.",
        feedbackErro: "Sarau é um encontro festivo para apresentar poemas, cenas ou falas.",
      },
      {
        pergunta: "2/5 — Quais gêneros o aluno pode escolher para a missão final?",
        opcoes: [
          "Notícia, biografia e resenha",
          "Poema, cena teatral e fala expositiva",
          "Bilhete, convite e lista",
          "Fábula, lenda e conto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O aluno escolhe entre poema, cena teatral ou fala expositiva.",
        feedbackErro: "Os gêneros da missão final são poema, cena teatral e fala expositiva.",
      },
      {
        pergunta: "3/5 — Qual é a ordem certa do processo de escrita?",
        opcoes: [
          "Revisão, rascunho, versão final",
          "Rascunho, revisão, versão final",
          "Versão final, revisão, rascunho",
          "Rascunho, versão final, revisão",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Primeiro o rascunho, depois a revisão, e por fim a versão final.",
        feedbackErro: "A ordem certa é: rascunho, revisão e versão final.",
      },
      {
        pergunta: "4/5 — O que significa revisar um texto?",
        opcoes: [
          "Jogar o texto fora",
          "Reler com atenção, corrigindo ortografia e concordância",
          "Escrever o texto de novo do zero, sem reler",
          "Copiar o texto de um colega",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Revisar é reler com atenção para corrigir e melhorar o texto.",
        feedbackErro: "Revisar é reler o texto com calma, corrigindo ortografia e concordância.",
      },
      {
        pergunta: "5/5 — O que ajuda numa boa apresentação no sarau?",
        opcoes: [
          "Falar de costas para a plateia",
          "Boa entonação, volume de voz e postura",
          "Ler bem baixinho e rápido",
          "Não treinar antes de apresentar",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Sarau da Conquista celebrado! Boa entonação, volume e postura fazem uma apresentação de sucesso.",
        feedbackErro: "Uma boa apresentação usa entonação, volume de voz e postura adequados.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Crie e apresente sua obra no Sarau da Conquista",
    materiais: ["Papel e lápis (ou caderno)", "Borracha", "Um lugar tranquilo para treinar a apresentação"],
    passos: [
      "1) Com um adulto, escolha um gênero para sua produção final: um POEMA, uma CENA TEATRAL curta ou uma FALA sobre um assunto que você goste.",
      "2) Escreva o RASCUNHO, colocando todas as suas ideias no papel, sem se preocupar com erros nessa hora.",
      "3) Faça a REVISÃO: releia o rascunho com um adulto, corrigindo a ortografia, a acentuação e a concordância entre as palavras.",
      "4) Passe a limpo a VERSÃO FINAL do seu texto, com letra caprichada ou digitada.",
      "5) Treine a apresentação em voz alta, cuidando da entonação, do volume de voz e da postura, como aprendemos na Roda da Fala.",
      "6) Apresente sua obra para a família, de pé, olhando para as pessoas — este é o seu Sarau da Conquista!",
    ],
    registro: "📝 O rascunho, a versão final escrita e um vídeo ou áudio da apresentação da criança para a família.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
  },
};
