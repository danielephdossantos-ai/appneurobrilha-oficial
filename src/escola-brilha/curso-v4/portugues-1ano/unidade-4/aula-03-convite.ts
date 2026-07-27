import type { AulaPortuguesV4 } from "../../types";
import { url as festa } from "@/assets/neuro-treino/objetos/festa.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as presente } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as relogio } from "@/assets/neuro-treino/objetos/relogio.png.asset.json";

/**
 * Aula 3 — Convite de Festa
 * -------------------------------------------------------------
 * A criança aprende que um CONVITE informa QUANDO, ONDE e QUEM
 * está convidando pra uma festa ou evento.
 *
 * BNCC: EF01LP16 · EF01LP17 · EF01LP20
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-convite",
  titulo: "Convite de Festa",
  iconeTrilha: "🎉",
  bncc: ["EF01LP16", "EF01LP17", "EF01LP20"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Uma festa chegando pelo correio",
    historia:
      "A caixinha de correio da casa do Brilha estava cheia! Chegou um papel colorido, cheio de balões desenhados. Era um CONVITE! Um convite avisa sobre uma festa: QUANDO ela vai ser, ONDE e QUEM está chamando a gente.",
    imagemUrl: festa,
  },

  momento02_previsao: {
    instrucao: "Olhe esse convite colorido. O que você acha que ele diz?",
    bloco: {
      titulo: "Convite de Festa",
      pistas: [
        { imagemUrl: balao, nome: "Balões" },
        { imagemUrl: bolo, nome: "Bolo" },
      ],
      recado: {
        rotulo: "Convite",
        icone: "🎉",
        linhas: ["Festa da Ana!", "Dia: Sábado", "Hora: 15h", "Local: Praça do Bosque"],
        estilo: "papel",
      },
      pergunta: "Esse convite é sobre o quê?",
      hipoteses: [
        { texto: "Uma festa de aniversário com dia, hora e local.", imagemUrl: festa },
        { texto: "Uma prova da escola.", imagemUrl: menina },
        { texto: "Uma receita de bolo.", imagemUrl: bolo },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! É um CONVITE de festa — ele diz o dia, a hora e o lugar.",
      feedbackErro:
        "Olhe de novo: tem 'Festa da Ana', 'Dia', 'Hora' e 'Local'. Isso é um CONVITE de festa.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras pra entender convites.",
    cards: [
      {
        palavra: "convite",
        explicacao: "É um texto que chama a gente pra participar de uma festa ou evento.",
        exemplo: "Recebi um convite pra festa da Ana.",
        imagemUrl: festa,
      },
      {
        palavra: "local",
        explicacao: "É o lugar onde algo vai acontecer.",
        exemplo: "O local da festa era a Praça do Bosque.",
        imagemUrl: criancasGrupo,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler o convite da festa da Ana juntos.",
    leitura: {
      titulo: "Convite de Festa",
      imagemUrl: festa,
      legendaImagem: "O convite da Ana",
      destacar: ["convite", "Sábado", "Praça do Bosque"],
      paragrafos: [
        "A Ana fez um CONVITE colorido pra sua festa de aniversário.",
        "No convite estava escrito o dia (Sábado), a hora (15h) e o local (Praça do Bosque).",
        "Todo mundo que recebeu o convite ficou sabendo quando e onde ir.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no convite se precisar. As respostas estão nele.",
    perguntas: [
      {
        pergunta: "Que dia é a festa da Ana?",
        opcoes: ["Sexta", "Sábado", "Domingo"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Dia: Sábado'.",
        feedbackErro: "Procure a linha que começa com 'Dia:' no convite.",
        ondeEstaNoTexto: "Dia: Sábado",
      },
      {
        pergunta: "Onde vai ser a festa?",
        opcoes: ["Na escola", "Na Praça do Bosque", "No mercado"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! 'Local: Praça do Bosque'.",
        feedbackErro: "Procure a linha que começa com 'Local:' no convite.",
        ondeEstaNoTexto: "Local: Praça do Bosque",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem está convidando? Onde vai ser a festa?",
    perguntas: [
      {
        pergunta: "Quem está convidando pra festa?",
        opcoes: ["O Brilha", "A Ana", "A mamãe"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O convite diz 'Festa da ANA'.",
        feedbackErro: "O título do convite tem o nome de quem está fazendo a festa.",
      },
      {
        pergunta: "Onde vai acontecer a festa?",
        opcoes: ["Na Praça do Bosque", "Na casa da Ana", "No shopping"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! No local escrito: Praça do Bosque.",
        feedbackErro: "O convite mostra o local exato: 'Local: Praça do Bosque'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem o que acontece com um convite.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "A Ana faz o convite com dia, hora e local.", imagemUrl: festa },
        { id: "p2", texto: "Os amigos recebem o convite e leem.", imagemUrl: criancasGrupo },
        { id: "p3", texto: "No dia certo, todos vão à festa.", imagemUrl: bolo },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você entendeu como funciona um convite.",
      feedbackErro: "Primeiro se FAZ o convite, depois as pessoas LEEM, e por fim todos VÃO à festa.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia esse outro convite sozinho.",
    leitura: {
      titulo: "Convite do Pedro",
      imagemUrl: presente,
      destacar: ["Domingo", "16h", "casa do Pedro"],
      paragrafos: [
        "Festa do Pedro! Dia: Domingo. Hora: 16h. Local: Casa do Pedro.",
        "Traga sua fantasia preferida!",
      ],
    },
    perguntas: [
      {
        pergunta: "A que horas começa a festa do Pedro?",
        opcoes: ["14h", "15h", "16h"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! 'Hora: 16h'.",
        feedbackErro: "Procure a linha 'Hora:' no convite.",
        ondeEstaNoTexto: "Hora: 16h.",
      },
      {
        pergunta: "O que o convite pede pra trazer?",
        opcoes: ["Um presente caro", "Uma fantasia preferida", "Um livro"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'Traga sua fantasia preferida!'",
        feedbackErro: "A última frase do convite pede algo especial.",
        ondeEstaNoTexto: "Traga sua fantasia preferida!",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Complete o Convite",
    instrucao: "Marque só as informações que não podem faltar num convite.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "O que tem num convite",
      bloco: {
        instrucao: "Toque nas informações que sempre aparecem num convite de festa.",
        pergunta: "O que um bom convite precisa ter?",
        opcoes: [
          { id: "a", texto: "Dia da festa", imagemUrl: relogio, correto: true },
          { id: "b", texto: "Local da festa", imagemUrl: festa, correto: true },
          { id: "c", texto: "Cor da nuvem", imagemUrl: balao, correto: false },
          { id: "d", texto: "Preço do ônibus", imagemUrl: presente, correto: false },
        ],
        feedbackAcerto: "🎉 Isso! Dia e local são informações essenciais do convite.",
        feedbackErro: "Pense no que a gente precisa saber pra ir na festa: quando e onde.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "CONVITE é um texto que chama a gente pra uma festa ou evento.",
      "Todo convite tem: quando (dia e hora), onde (local) e quem convida.",
      "É importante ler o convite com atenção pra não chegar no lugar ou hora errada.",
    ],
    miniDesafio: {
      pergunta: "Quais informações não podem faltar num convite?",
      opcoes: ["Cor da roupa", "Dia, hora e local", "Nome do professor"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Dia, hora e local são essenciais.",
      feedbackErro: "Um convite precisa dizer quando e onde vai ser o evento.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Pra que serve um convite?",
        opcoes: ["Pra chamar alguém pra um evento", "Pra fazer conta", "Pra desenhar"],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo!",
        feedbackErro: "Convite chama a pessoa pra participar de algo.",
      },
      {
        pergunta: "2/5 — Que dia era a festa da Ana?",
        opcoes: ["Sexta", "Sábado", "Domingo"],
        correta: 1,
        feedbackAcerto: "🎉 Sábado!",
        feedbackErro: "O convite dizia 'Dia: Sábado'.",
      },
      {
        pergunta: "3/5 — Onde era a festa da Ana?",
        opcoes: ["Na escola", "Na Praça do Bosque", "No parque de diversões"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "O convite dizia 'Local: Praça do Bosque'.",
      },
      {
        pergunta: "4/5 — A que horas começava a festa do Pedro?",
        opcoes: ["14h", "15h", "16h"],
        correta: 2,
        feedbackAcerto: "🎉 16h!",
        feedbackErro: "O convite do Pedro dizia 'Hora: 16h'.",
      },
      {
        pergunta: "5/5 — Quais informações não podem faltar num convite?",
        opcoes: ["Só o nome da festa", "Dia, hora e local", "Nenhuma"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Dia, hora e local.",
        feedbackErro: "Sem dia, hora e local, ninguém sabe quando ou onde ir.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Nosso convite em casa",
    materiais: ["Papel colorido", "Lápis de cor"],
    passos: [
      "1) Inventem juntos uma festa (de verdade ou de brincadeira).",
      "2) Façam um convite com: nome da festa, dia, hora e local.",
      "3) Decorem o convite com desenhos.",
      "4) Leiam o convite em voz alta pra alguém da família.",
    ],
    registro: "📷 Uma foto do convite decorado.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
