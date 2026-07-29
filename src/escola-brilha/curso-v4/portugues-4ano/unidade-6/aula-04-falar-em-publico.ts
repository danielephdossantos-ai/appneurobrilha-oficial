import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as salaAula } from "@/assets/neuro-treino/objetos/sala-aula.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import sino from "@/assets/neuro-treino/objetos/sino.png";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as quadroTriste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";

/**
 * Aula 4 — Falar em público
 * -------------------------------------------------------------
 * Os Exploradores da Redação são convidados para o Sarau da escola.
 * Aprendem a planejar uma apresentação oral: organizar o que dizer,
 * usar a voz com volume e ritmo certos, fazer pausas, olhar para
 * quem escuta, usar um apoio visual e ouvir os colegas com atenção.
 *
 * BNCC: EF15LP09 (planejamento de fala pública), EF15LP12 (escuta
 * atenta), EF35LP10 (adequação da linguagem à situação), EF04LP19.
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-falar-em-publico",
  titulo: "Falar em público",
  iconeTrilha: "🎤",
  bncc: ["EF15LP09", "EF15LP12", "EF35LP10", "EF04LP19"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O convite para o Sarau",
    historia:
      "Um bilhete chegou no acampamento: 'Vocês estão convidados para o Sarau da escola — cada explorador vai apresentar algo em voz alta para todo mundo!' Zeca ficou nervoso: — E se eu esquecer o que falar? E se ninguém me escutar? Aurora sorriu: — Falar em público é como qualquer trilha: dá pra planejar o caminho antes de andar por ele. Vamos aprender juntos?",
    imagemUrl: mural,
  },

  momento02_previsao: {
    instrucao:
      "O mural da escola mostra pistas do que vai rolar no Sarau. Antes de continuar, imagine o que a cena vai tratar.",
    bloco: {
      titulo: "O Sarau dos Exploradores",
      capaImagemUrl: mural,
      pistas: [
        { imagemUrl: criancasGrupo, nome: "Um grupo de crianças reunido" },
        { imagemUrl: professora, nome: "Uma professora atenta" },
      ],
      pergunta: "Sobre o que essa cena provavelmente vai tratar?",
      hipoteses: [
        { texto: "Um grupo de crianças se preparando para apresentar algo em voz alta.", imagemUrl: criancasGrupo },
        { texto: "Uma receita de suco de laranja.", imagemUrl: papel },
        { texto: "Um jogo de futebol no recreio.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Isso! O mural do Sarau e o grupo reunido são pistas de uma apresentação oral, não de uma receita ou de um jogo.",
      feedbackErro:
        "Releia as pistas: um mural de Sarau e um grupo reunido combinam com uma apresentação em voz alta, não com receita ou jogo.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Cinco palavras-chave para falar bem em público.",
    cards: [
      {
        palavra: "planejamento",
        explicacao: "É organizar antes o que vai falar: o começo, o meio e o fim da fala, para não se perder na hora.",
        exemplo: "Zeca escreveu num papel os três pontos que queria contar sobre a trilha.",
        imagemUrl: papel,
      },
      {
        palavra: "ritmo",
        explicacao: "É a velocidade da fala — nem rápido demais (ninguém entende), nem devagar demais (todo mundo se distrai).",
        exemplo: "Aurora falou com calma, uma palavra de cada vez, para todos entenderem.",
        imagemUrl: relogio,
      },
      {
        palavra: "pausa",
        explicacao: "É parar um instante entre as ideias — ajuda quem escuta a organizar o que já ouviu.",
        exemplo: "Mira fez uma pausa depois de contar a primeira parte da história, antes de continuar.",
        imagemUrl: sino,
      },
      {
        palavra: "contato visual",
        explicacao: "É olhar para as pessoas que estão ouvindo, e não só para o papel ou para o chão.",
        exemplo: "Zeca ergueu os olhos do papel e olhou para os colegas ao contar sua parte.",
        imagemUrl: criancasGrupo,
      },
      {
        palavra: "apoio visual",
        explicacao: "É um cartaz, desenho ou objeto que ajuda a explicar a fala e prende a atenção de quem escuta.",
        exemplo: "Aurora mostrou um mapa desenhado enquanto contava o caminho da travessia.",
        imagemUrl: livro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia em voz alta, prestando atenção em como cada explorador se preparou para falar no Sarau.",
    leitura: {
      titulo: "Ensaiando para o Sarau",
      imagemUrl: professora,
      legendaImagem: "No pátio da escola, antes da apresentação",
      destacar: ["planejou", "pausas", "olhando", "cartaz com um mapa"],
      paragrafos: [
        "No pátio da escola, os Exploradores se reuniram para ensaiar. Zeca planejou sua fala em três partes: como começou a trilha, o que encontrou no caminho e o que aprendeu.",
        "Aurora treinou fazer pausas depois de cada ideia importante, para dar tempo de todo mundo entender.",
        "Mira praticou olhando para os colegas, em vez de ficar com os olhos grudados no papel.",
        "A professora sugeriu: — Que tal um apoio visual? Zeca desenhou um cartaz com um mapa da travessia para mostrar enquanto falava.",
        "Quando chegou a vez de cada um, todos os outros exploradores escutaram em silêncio, prontos para aplaudir no final.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "Em quantas partes Zeca planejou sua fala?",
        opcoes: ["Uma", "Três", "Cinco"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Ele dividiu em: como começou, o que encontrou e o que aprendeu.",
        feedbackErro: "Releia o texto: Zeca organizou a fala em começo, meio e fim — três partes.",
        ondeEstaNoTexto: "Zeca planejou sua fala em três partes: como começou a trilha, o que encontrou no caminho e o que aprendeu.",
      },
      {
        pergunta: "O que Aurora treinou fazer entre as ideias?",
        opcoes: ["Falar bem rápido", "Fazer pausas", "Gritar mais alto"],
        correta: 1,
        feedbackAcerto: "🔍 Boa! Ela fez pausas para dar tempo de todo mundo entender.",
        feedbackErro: "Releia a fala sobre Aurora — o que ela treinou fazer depois de cada ideia?",
        ondeEstaNoTexto: "Aurora treinou fazer pausas depois de cada ideia importante.",
      },
      {
        pergunta: "Que apoio visual Zeca preparou?",
        opcoes: ["Um cartaz com um mapa da travessia", "Uma música gravada", "Um jogo de cartas"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Zeca desenhou um cartaz com um mapa para mostrar enquanto falava.",
        feedbackErro: "Releia a última fala da professora e o que Zeca fez em seguida.",
        ondeEstaNoTexto: "Zeca desenhou um cartaz com um mapa da travessia para mostrar enquanto falava.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos investigar as atitudes de cada explorador.",
    perguntas: [
      {
        pergunta: "O que Mira praticou para melhorar sua apresentação?",
        opcoes: ["Olhar para os colegas em vez de ficar só no papel", "Decorar palavras difíceis", "Falar bem baixinho"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Mira treinou o contato visual com quem estava escutando.",
        feedbackErro: "Releia o parágrafo sobre Mira — ela mudou o que fazia com os olhos.",
      },
      {
        pergunta: "Como os outros exploradores agiram enquanto um colega falava?",
        opcoes: ["Ficaram em silêncio, escutando com atenção", "Conversaram entre si", "Saíram do pátio"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Escutar com atenção também faz parte de uma boa apresentação — para quem fala e para quem ouve.",
        feedbackErro: "Releia o final do texto: o que o grupo fazia enquanto esperava a vez de cada um?",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para planejar uma boa apresentação oral.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Planejar o que vai dizer, em começo, meio e fim.", imagemUrl: papel },
        { id: "p2", texto: "Ensaiar em voz alta, cuidando do ritmo e das pausas.", imagemUrl: relogio },
        { id: "p3", texto: "Apresentar olhando para quem escuta, com apoio visual se precisar.", imagemUrl: criancasGrupo },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Isso mesmo! Primeiro planejamos, depois ensaiamos, e só então apresentamos de verdade.",
      feedbackErro: "Pense na ordem: primeiro organizar as ideias, depois treinar em voz alta, e só então apresentar para o público.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo trecho — leia sozinho e responda.",
    leitura: {
      titulo: "A vez de Zeca",
      imagemUrl: quadroAlegre,
      destacar: ["voz firme", "pausa", "cartaz", "aplaudiram"],
      paragrafos: [
        "Chegou a vez de Zeca. Ele respirou fundo, segurou o cartaz com o mapa e começou a falar com voz firme, nem rápida nem devagar demais.",
        "No meio da fala, fez uma pausa para mostrar o cartaz e apontar o caminho da trilha.",
        "Zeca olhou para os colegas, viu que todos estavam prestando atenção, e terminou contando o que tinha aprendido na travessia.",
        "Quando ele terminou, todos aplaudiram. Zeca sorriu: planejar antes tinha feito toda a diferença.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como estava a voz de Zeca ao começar a falar?",
        opcoes: ["Firme, nem rápida nem devagar demais", "Muito baixinha", "Gritando o tempo todo"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Ele falou com 'voz firme', num ritmo equilibrado.",
        feedbackErro: "Releia a primeira frase — ela descreve como era a voz de Zeca.",
        ondeEstaNoTexto: "começou a falar com voz firme, nem rápida nem devagar demais",
      },
      {
        pergunta: "Por que Zeca fez uma pausa no meio da fala?",
        opcoes: ["Para mostrar o cartaz e apontar o caminho", "Porque esqueceu tudo", "Porque estava com sono"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Ele pausou para usar o apoio visual — o cartaz com o mapa.",
        feedbackErro: "Releia o segundo parágrafo: o que ele fez durante a pausa?",
        ondeEstaNoTexto: "fez uma pausa para mostrar o cartaz e apontar o caminho da trilha",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "PLANEJAR é organizar a fala em começo, meio e fim antes de apresentar.",
      "RITMO e PAUSAS ajudam quem escuta a entender melhor cada ideia.",
      "CONTATO VISUAL é olhar para quem está ouvindo, não só para o papel.",
      "APOIO VISUAL (cartaz, desenho) ajuda a explicar e prende a atenção do público.",
      "ESCUTAR com atenção o colega que fala também é parte de uma boa apresentação.",
    ],
    miniDesafio: {
      pergunta: "Se você fala rápido demais e ninguém entende, o que deve treinar?",
      opcoes: ["O ritmo da fala", "A cor da roupa", "O tamanho da sala"],
      correta: 0,
      feedbackAcerto: "🔍 Isso! Ajustar o ritmo é o que ajuda a plateia a acompanhar a fala.",
      feedbackErro: "Pense: o problema é a velocidade da fala, então o que precisa ser ajustado é o RITMO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que significa planejar uma apresentação oral?",
        opcoes: ["Organizar o que vai dizer, do começo ao fim, antes de falar", "Decorar tudo palavra por palavra", "Falar sem pensar antes"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Planejar é pensar na ordem das ideias antes de apresentar.",
        feedbackErro: "Planejar é ORGANIZAR o que vai ser dito antes — não é decorar tudo nem falar sem pensar.",
      },
      {
        pergunta: "2/5 — Para que servem as pausas ao falar em público?",
        opcoes: ["Para dar tempo de quem escuta entender cada ideia", "Para esquecer o assunto", "Para a apresentação durar mais tempo"],
        correta: 0,
        feedbackAcerto: "🔍 Correto! As pausas ajudam a organizar as ideias na cabeça de quem ouve.",
        feedbackErro: "As pausas ajudam quem ESCUTA a acompanhar as ideias, não servem para enrolar a apresentação.",
      },
      {
        pergunta: "3/5 — O que é 'contato visual' numa apresentação?",
        opcoes: ["Olhar para quem está escutando", "Usar óculos escuros", "Fechar os olhos ao falar"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Contato visual é olhar para o público enquanto fala.",
        feedbackErro: "Contato visual é OLHAR para as pessoas que estão ouvindo, criando conexão com elas.",
      },
      {
        pergunta: "4/5 — Qual é um exemplo de apoio visual?",
        opcoes: ["Um cartaz com desenho que ajuda a explicar a fala", "Um lápis qualquer", "Um sapato novo"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Cartazes, desenhos ou objetos que ilustram a fala são apoios visuais.",
        feedbackErro: "Apoio visual é algo que AJUDA a mostrar o que está sendo dito, como um cartaz ou desenho.",
      },
      {
        pergunta: "5/5 — Por que Zeca conseguiu apresentar bem no Sarau?",
        opcoes: [
          "Porque planejou, ensaiou o ritmo e as pausas, e usou um apoio visual",
          "Porque decorou tudo na última hora",
          "Porque falou muito rápido para terminar logo",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Planejamento, ritmo, pausas e apoio visual fizeram toda a diferença. Apresentação concluída! 🌟",
        feedbackErro: "Releia a história: Zeca planejou antes, cuidou do ritmo e das pausas, e usou um cartaz como apoio visual.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: meu mini-sarau em casa",
    materiais: ["Um assunto que você goste (um livro, um passeio, um hobby)", "Papel e lápis para um cartaz simples"],
    passos: [
      "1) Planeje sua fala em três partes: começo, meio e fim.",
      "2) Ensaie em voz alta na frente de um familiar, cuidando do ritmo e fazendo pausas.",
      "3) Desenhe um cartaz simples como apoio visual para mostrar enquanto fala.",
      "4) Apresente para a família olhando para quem está escutando — e peça para eles escutarem com atenção, como bons colegas de Sarau.",
    ],
    registro: "🗣️ Registrem em áudio ou vídeo a apresentação em família.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
