import type { AulaPortuguesV4 } from "../../../curso-v4/types";
import { url as relogioMagico } from "@/assets/neuro-treino/objetos/relogio-magico.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";

export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-verbos",
  titulo: "Super Aulão: O Poder dos Verbos",
  iconeTrilha: "⚡",
  bncc: ["EF03LP07", "EF04LP05", "EF05LP05"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "As Palavras de Ação",
    historia:
      "Imagine um mundo onde ninguém se move, ninguém fala e nada acontece... Tudo parado! Sabe o que está faltando? Os VERBOS! Eles são o motor da nossa língua. Sem eles, não tem história, não tem jogo e não tem vida. Vamos aprender a dominar esse poder?",
    imagemUrl: relogioMagico,
  },

  momento02_previsao: {
    instrucao: "Observe estas três cenas e tente adivinhar qual é o motor de cada uma.",
    bloco: {
      titulo: "O Motor das Frases",
      capaImagemUrl: relogio,
      recado: {
        rotulo: "Missão Especial",
        icone: "🚀",
        estilo: "papel",
        linhas: [
          "O jogador CHUTOU a bola.",
          "A bailarina DANÇA no palco.",
          "O astronauta VIAJARÁ para Marte.",
        ],
      },
      pergunta: "O que as palavras destacadas (CHUTOU, DANÇA, VIAJARÁ) indicam?",
      hipoteses: [
        { texto: "Nomes de objetos que podemos tocar.", imagemUrl: binoculo },
        { texto: "Ações que alguém ou algo realiza.", imagemUrl: relogioMagico },
        { texto: "Cores de elementos da natureza.", imagemUrl: mapaPercurso },
      ],
      respostaCerta: 1,
      feedbackAcerto:
        "🎉 Perfeito! Essas palavras são VERBOS. Elas mostram o que está acontecendo na cena.",
      feedbackErro:
        "Olhe bem: 'Chutar', 'Dançar' e 'Viajar' são coisas que a gente FAZ. São ações!",
      dica: "🔎 Pista: Tente imitar o que essas palavras dizem. Se você consegue 'fazer' o que a palavra diz, ela provavelmente é um verbo!",
    },
  },

  momento03_vocabulario: {
    instrucao: "Para ser um mestre dos verbos, você precisa conhecer estes termos técnicos.",
    cards: [
      {
        palavra: "Infinitivo",
        explicacao: "É o nome 'natural' do verbo, como ele aparece no dicionário. Geralmente termina em AR, ER ou IR.",
        exemplo: "Correr, Estudar, Partir.",
        imagemUrl: binoculo,
      },
      {
        palavra: "Conjugação",
        explicacao: "É quando o verbo muda de forma para combinar com quem fala e com o tempo.",
        exemplo: "Eu estudo, nós estudamos, eles estudaram.",
        imagemUrl: relogio,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "A Linha do Tempo dos Verbos",
    instrucao: "O verbo é como uma bússola que aponta para o tempo certo.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "ONTEM (Passado): Eu ESTUDEI muito.",
            explicacao: "A ação já ficou para trás no tempo.",
          },
          {
            texto: "AGORA (Presente): Eu ESTUDO muito.",
            explicacao: "A ação acontece neste exato momento.",
          },
          {
            texto: "AMANHÃ (Futuro): Eu ESTUDAREI muito.",
            explicacao: "A ação ainda é um plano para depois.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Acompanhe este texto e veja como o professor usaria os verbos na lousa.",
    leitura: {
      titulo: "Um Dia de Invenções",
      imagemUrl: mapaPercurso,
      legendaImagem: "O laboratório de ideias",
      destacar: ["planejou", "monta", "testará"],
      paragrafos: [
        "Semana passada, a cientista Brilha planejou uma máquina incrível em seu caderno.",
        "Hoje, ela monta as peças com muito cuidado no laboratório da escola.",
        "Amanhã, toda a turma testará a invenção durante a feira de ciências.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Vamos testar sua visão de águia para verbos!",
    perguntas: [
      {
        pergunta: "Qual dessas palavras do texto indica algo que já aconteceu?",
        opcoes: ["Planejou", "Monta", "Testará"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Planejou' está no passado, pois aconteceu na semana passada.",
        feedbackErro: "A palavra 'planejou' termina com 'ou', indicando que a ação já foi concluída.",
        ondeEstaNoTexto: "Semana passada, a cientista Brilha planejou uma máquina incrível.",
        reensino: "📚 O passado indica ações concluídas. Ex: Comi, dormi, fiz.",
      },
      {
        pergunta: "Se Brilha estivesse montando a máquina NESTE MOMENTO, qual verbo usaríamos?",
        opcoes: ["Montou", "Monta", "Montará"],
        correta: 1,
        feedbackAcerto: "🎉 Exato! 'Monta' é o presente, o agora.",
        feedbackErro: "O presente é o que acontece agora. 'Ela monta as peças'.",
        ondeEstaNoTexto: "Hoje, ela monta as peças com muito cuidado.",
        reensino: "📚 O presente mostra o que está acontecendo agora.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as ações da cientista na ordem correta do tempo.",
    bloco: {
      instrucao: "Arraste para organizar do passado para o futuro.",
      itens: [
        { id: "p1", texto: "Planejou (Semana passada)", imagemUrl: relogio },
        { id: "p2", texto: "Monta (Hoje)", imagemUrl: binoculo },
        { id: "p3", texto: "Testará (Amanhã)", imagemUrl: relogioMagico },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Você domina o tempo! Sequência perfeita.",
      feedbackErro: "Lembre-se: Ontem -> Hoje -> Amanhã.",
    },
  },

  momento_minijogo: {
    titulo: "Desafio das Terminações",
    instrucao: "Leve os verbos para as suas caixas de tempo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Classificador Temporal",
      bloco: {
        instrucao: "Separe os verbos pelo tempo que eles indicam.",
        itens: [
          { id: "v1", texto: "Brincou", alvoId: "passado" },
          { id: "v2", texto: "Brinca", alvoId: "presente" },
          { id: "v3", texto: "Brincará", alvoId: "futuro" },
          { id: "v4", texto: "Escreveu", alvoId: "passado" },
          { id: "v5", texto: "Escreve", alvoId: "presente" },
          { id: "v6", texto: "Escreverá", alvoId: "futuro" },
        ],
        alvos: [
          { id: "passado", nome: "Passado", descricao: "Já foi" },
          { id: "presente", nome: "Presente", descricao: "É agora" },
          { id: "futuro", nome: "Futuro", descricao: "Será depois" },
        ],
        feedbackAcerto: "🎉 Você é um mestre da conjugação!",
        feedbackErro: "Observe as terminações: -ou/-eu (passado), -a/-e (presente), -rá (futuro).",
      },
    },
  },

  momento_escrita: {
    titulo: "Seu Relatório de Ações",
    instrucao: "Agora é sua vez de usar o poder dos verbos!",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Relato de Ontem",
        comando: "Escreva três frases sobre o que você fez ontem à tarde. Circule mentalmente os verbos!",
        linhas: 4,
        modelo: [
          "Ontem eu comi pipoca.",
          "Eu assisti um desenho legal.",
          "Depois eu brinquei com meu cachorro.",
        ],
        checklist: [
          "Usei verbos no passado.",
          "Comecei com letra maiúscula.",
          "Coloquei ponto final.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Verbos indicam AÇÃO, ESTADO ou fenômeno da natureza.",
      "Eles mudam de forma (conjugam) para indicar o TEMPO.",
      "Passado (já foi), Presente (agora) e Futuro (ainda virá).",
      "O Infinitivo é o nome do verbo (terminado em AR, ER, IR).",
    ],
    miniDesafio: {
      pergunta: "Qual é o infinitivo do verbo 'CANTAMOS'?",
      opcoes: ["Cantou", "Cantar", "Cantei"],
      correta: 1,
      feedbackAcerto: "🎉 Isso mesmo! O nome do verbo é CANTAR.",
      feedbackErro: "O infinitivo é a forma original do verbo, sem tempo definido.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Em 'A chuva CAI lá fora', o verbo destacado indica...",
        opcoes: ["Algo que já parou", "Algo que está acontecendo agora", "Algo que ainda vai começar"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'Cai' é presente.",
        feedbackErro: "Se fosse passado seria 'caiu'. Se fosse futuro seria 'cairá'.",
      },
      {
        pergunta: "Identifique o verbo na frase: 'O gato pulou o muro'.",
        opcoes: ["Gato", "Pulou", "Muro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Pulou' é a ação do gato.",
        feedbackErro: "Gato e muro são nomes (substantivos). Pulou é o que ele fez!",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Entrevista de Ações",
  momento11_missaoFamilia: {
    titulo: "Entrevista de Ações",
    materiais: ["Um caderno", "Lápis"],
    passos: [
      "Pergunte para alguém da sua família: 'O que você fará no próximo final de semana?'",
      "Anote os verbos que a pessoa usou (ex: viarei, descansarei, jogarei).",
      "Explique para a pessoa que esses verbos estão no FUTURO!"
    ],
    registro: "Anote no seu caderno os verbos de futuro encontrados."
  },
};
