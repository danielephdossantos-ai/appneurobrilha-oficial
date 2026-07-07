import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import festa from "@/assets/neuro-treino/objetos/festa.png";
import bolo from "@/assets/neuro-treino/objetos/bolo.png";
import calendario from "@/assets/neuro-treino/objetos/calendario.png";
import relogio from "@/assets/neuro-treino/objetos/relogio.png";
import biblioteca from "@/assets/neuro-treino/objetos/biblioteca.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import balao from "@/assets/neuro-treino/objetos/balao.png";
import criancas from "@/assets/neuro-treino/objetos/criancas-grupo.png";

/**
 * Unidade 2 · Aula 2 — Convites para a Festa dos Livros
 * -------------------------------------------------------------
 * Aurora vai fazer uma FESTA na biblioteca pra comemorar os
 * livros despertados. Ela precisa preparar os CONVITES. A criança
 * aprende as informações essenciais: quando, onde e por quê.
 *
 * BNCC: EF02LP09 · EF02LP10 · EF02LP11
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-convites-festa",
  titulo: "Convites para a Festa dos Livros",
  iconeTrilha: "🎉",
  bncc: ["EF02LP09", "EF02LP10", "EF02LP11"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Uma festa na biblioteca!",
    historia:
      "Aurora anuncia: — Vamos fazer uma FESTA DOS LIVROS! Balões, bolo, todo mundo lendo junto! Mas… as crianças da vizinhança não sabem que vai ter festa. — Precisamos escrever CONVITES, diz ela. Vamos ajudar?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Antes de ler o convite: o que ele PRECISA ter pra alguém ir na festa?",
    bloco: {
      titulo: "O primeiro convite",
      capaImagemUrl: festa,
      pistas: [
        { imagemUrl: calendario, nome: "Um calendário" },
        { imagemUrl: relogio, nome: "Um relógio" },
        { imagemUrl: biblioteca, nome: "A biblioteca" },
      ],
      pergunta: "Um convite precisa dizer principalmente…",
      hipoteses: [
        {
          texto: "Quando, onde e por que a festa vai acontecer.",
          imagemUrl: calendario,
        },
        {
          texto: "Uma história longa com personagens.",
          imagemUrl: papel,
        },
        {
          texto: "Só o nome de quem convida.",
          imagemUrl: bibliotecaria,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Convite serve pra INFORMAR quando, onde e por quê.",
      feedbackErro:
        "Sem QUANDO, ONDE e POR QUE, ninguém sabe se pode ir. É pra isso que serve o convite.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Quatro informações que todo convite tem.",
    cards: [
      {
        palavra: "data",
        explicacao: "É o DIA da festa — dia do mês.",
        exemplo: "Sábado, 15 de agosto.",
        imagemUrl: calendario,
      },
      {
        palavra: "horário",
        explicacao: "É a HORA em que a festa começa (e às vezes quando termina).",
        exemplo: "Das 15h às 18h.",
        imagemUrl: relogio,
      },
      {
        palavra: "local",
        explicacao: "É o LUGAR onde a festa vai acontecer.",
        exemplo: "Na biblioteca da Aurora.",
        imagemUrl: biblioteca,
      },
      {
        palavra: "motivo",
        explicacao:
          "É o POR QUÊ da festa — o que está sendo comemorado.",
        exemplo: "Comemorar os livros despertados.",
        imagemUrl: bolo,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o convite com atenção. Cada linha tem UMA informação importante.",
    leitura: {
      titulo: "Convite — Festa dos Livros",
      imagemUrl: festa,
      legendaImagem: "O convite oficial da Aurora",
      destacar: ["sábado", "15h", "biblioteca", "livros"],
      paragrafos: [
        "Você está convidado!",
        "🎉 Motivo: Festa dos Livros Despertados",
        "📅 Data: sábado, 20 de setembro",
        "🕒 Horário: das 15h às 18h",
        "📍 Local: Biblioteca da Aurora",
        "Traga um livro pra ler junto! — Aurora",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Cada resposta está em UMA linha do convite. Volte lá.",
    perguntas: [
      {
        pergunta: "QUANDO vai ser a festa?",
        opcoes: ["Sábado, 20 de setembro", "Domingo à noite", "Segunda de manhã"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Sábado, 20 de setembro.",
        feedbackErro:
          "Procure a linha do 📅. A DATA está lá.",
        ondeEstaNoTexto: "📅 Data: sábado, 20 de setembro",
      },
      {
        pergunta: "A que HORAS a festa começa?",
        opcoes: ["Às 10h", "Às 15h", "Às 20h"],
        correta: 1,
        feedbackAcerto: "🎉 15h!",
        feedbackErro:
          "Olhe a linha do 🕒. Fala 'das … às …'. A festa começa na primeira hora.",
        ondeEstaNoTexto: "🕒 Horário: das 15h às 18h",
      },
      {
        pergunta: "ONDE vai ser a festa?",
        opcoes: ["Na escola", "Na biblioteca da Aurora", "Na praça"],
        correta: 1,
        feedbackAcerto: "🎉 Na BIBLIOTECA da Aurora.",
        feedbackErro: "A linha do 📍 mostra o LOCAL.",
        ondeEstaNoTexto: "📍 Local: Biblioteca da Aurora",
      },
      {
        pergunta: "POR QUE tem essa festa?",
        opcoes: [
          "Aniversário da Aurora",
          "Pra comemorar os livros despertados",
          "Fim das aulas",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! É o MOTIVO da festa.",
        feedbackErro: "A linha do 🎉 mostra o MOTIVO da festa.",
        ondeEstaNoTexto: "🎉 Motivo: Festa dos Livros Despertados",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "No convite, importa QUEM convida e QUEM é convidado.",
    perguntas: [
      {
        pergunta: "Quem está CONVIDANDO?",
        opcoes: ["Brilha", "Aurora", "Os livros"],
        correta: 1,
        feedbackAcerto: "🎉 AURORA — o nome dela está no fim, assinando.",
        feedbackErro:
          "No fim do convite tem '— Aurora'. O nome depois do travessão é de quem convida.",
      },
      {
        pergunta: "O que a Aurora pediu pra levar?",
        opcoes: ["Um bolo", "Um livro", "Um brinquedo"],
        correta: 1,
        feedbackAcerto:
          "🎉 Um LIVRO! 'Traga um livro pra ler junto'.",
        feedbackErro:
          "Antes da assinatura tem um pedido: 'Traga um … pra ler junto'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as PARTES do convite em ordem, como aparecem.",
    bloco: {
      instrucao: "Convite começa com… e termina com…",
      itens: [
        { id: "p1", texto: "Motivo (por que a festa).", imagemUrl: bolo },
        { id: "p2", texto: "Data (quando).", imagemUrl: calendario },
        { id: "p3", texto: "Horário (que horas).", imagemUrl: relogio },
        { id: "p4", texto: "Local (onde).", imagemUrl: biblioteca },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Isso! Motivo → Data → Horário → Local.",
      feedbackErro:
        "No convite dessa aula: primeiro o MOTIVO, depois DATA, HORÁRIO e LOCAL.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho esse outro convite e responda.",
    leitura: {
      titulo: "Convite — Aniversário do Léo",
      imagemUrl: bolo,
      destacar: ["Léo", "domingo", "16h", "casa"],
      paragrafos: [
        "🎉 Motivo: 8 anos do Léo!",
        "📅 Data: domingo, 12 de outubro",
        "🕒 Horário: das 16h às 19h",
        "📍 Local: casa do Léo (rua das Flores, 45)",
        "Venha se divertir! — Família do Léo",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos anos o Léo vai fazer?",
        opcoes: ["6", "8", "10"],
        correta: 1,
        feedbackAcerto: "🎉 8 anos!",
        feedbackErro: "Está no MOTIVO: '… anos do Léo'.",
        ondeEstaNoTexto: "🎉 Motivo: 8 anos do Léo!",
      },
      {
        pergunta: "Que horas a festa começa?",
        opcoes: ["Às 14h", "Às 16h", "Às 19h"],
        correta: 1,
        feedbackAcerto: "🎉 16h.",
        feedbackErro:
          "Horário: 'das … às …'. A festa começa na primeira hora.",
        ondeEstaNoTexto: "🕒 Horário: das 16h às 19h",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Organizador de Festas",
    instrucao:
      "Aurora esqueceu de arrumar o convite! Coloque cada informação no CAMPO certo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🎈 Organizador de Festas",
      bloco: {
        instrucao: "Toque na informação e depois no campo onde ela pertence.",
        itens: [
          {
            id: "i1",
            texto: "Festa dos Livros",
            imagemUrl: bolo,
            alvoId: "motivo",
          },
          {
            id: "i2",
            texto: "Sábado, 20 de setembro",
            imagemUrl: calendario,
            alvoId: "data",
          },
          {
            id: "i3",
            texto: "Das 15h às 18h",
            imagemUrl: relogio,
            alvoId: "horario",
          },
          {
            id: "i4",
            texto: "Biblioteca da Aurora",
            imagemUrl: biblioteca,
            alvoId: "local",
          },
        ],
        alvos: [
          { id: "motivo", nome: "🎉 Motivo", imagemUrl: bolo, descricao: "Por quê?" },
          { id: "data", nome: "📅 Data", imagemUrl: calendario, descricao: "Quando?" },
          { id: "horario", nome: "🕒 Horário", imagemUrl: relogio, descricao: "Que horas?" },
          { id: "local", nome: "📍 Local", imagemUrl: biblioteca, descricao: "Onde?" },
        ],
        feedbackAcerto:
          "🎉 Convite pronto! Agora todo mundo sabe quando, onde e por que ir.",
        feedbackErro:
          "Cada campo tem UMA pergunta: Motivo = por quê? Data = quando? Horário = que horas? Local = onde?",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "CONVITE serve pra CHAMAR alguém pra um evento.",
      "Todo convite bom responde: POR QUÊ? · QUANDO? · QUE HORAS? · ONDE?",
      "MOTIVO = o quê comemora. DATA = dia. HORÁRIO = hora. LOCAL = lugar.",
      "Sem essas 4 informações, o convite fica INCOMPLETO — e ninguém acha a festa.",
    ],
    miniDesafio: {
      pergunta: "Se um convite não diz ONDE vai ser, o que falta?",
      opcoes: ["A data", "O local", "O motivo"],
      correta: 1,
      feedbackAcerto: "🎉 O LOCAL — sem ele, ninguém sabe pra onde ir.",
      feedbackErro:
        "'Onde' é o LOCAL. Data é 'quando', motivo é 'por quê'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Convite serve pra…",
        opcoes: [
          "Contar história de dormir",
          "Chamar alguém pra um evento",
          "Comprar coisas no mercado",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Convite CHAMA alguém pra ir num evento (festa, aniversário, encontro).",
      },
      {
        pergunta: "2/5 — 'Sábado, 20 de setembro' é a…",
        opcoes: ["Data", "Hora", "Local"],
        correta: 0,
        feedbackAcerto: "🎉 DATA (o dia).",
        feedbackErro: "Dia do mês = DATA. Que horas = HORÁRIO. Lugar = LOCAL.",
      },
      {
        pergunta: "3/5 — 'Das 15h às 18h' é o…",
        opcoes: ["Local", "Horário", "Motivo"],
        correta: 1,
        feedbackAcerto: "🎉 HORÁRIO!",
        feedbackErro: "Que HORAS = horário.",
      },
      {
        pergunta: "4/5 — 'Biblioteca da Aurora' é o…",
        opcoes: ["Local", "Motivo", "Data"],
        correta: 0,
        feedbackAcerto: "🎉 LOCAL — o LUGAR.",
        feedbackErro: "Lugar onde é a festa = LOCAL.",
      },
      {
        pergunta: "5/5 — 'Festa dos Livros' é o…",
        opcoes: ["Local", "Horário", "Motivo"],
        correta: 2,
        feedbackAcerto: "🎉 MOTIVO — o POR QUÊ da festa. 🎉",
        feedbackErro: "O QUE está sendo comemorado = MOTIVO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🎈 Convite pra alguém da família",
    materiais: ["1 folha de papel", "Lápis de cor ou canetinha"],
    passos: [
      "1) Escolham UM evento pequeno — pode ser 'jantar de sábado', 'noite do filme', 'lanche da tarde'.",
      "2) A criança escreve o CONVITE com as 4 informações: motivo, data, horário e local.",
      "3) Enfeita com desenho e balão.",
      "4) Entrega pra pessoa convidada.",
      "5) No dia combinado, cumpram o convite juntos!",
    ],
    registro:
      "📸 Uma foto do convite feito à mão e outra do evento acontecendo.",
  },

  recompensa: { xp: 110, moedas: 60 },
};

// Silencia warning caso balao/criancas não sejam usados diretamente
void balao;
void criancas;
