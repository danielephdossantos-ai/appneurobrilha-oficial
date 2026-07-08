import type { AulaPortuguesV4 } from "../../types";
import telefoneAntigo from "@/assets/neuro-treino/objetos/telefone-antigo.png";
import celular from "@/assets/neuro-treino/objetos/celular.png";
import radioAntigo from "@/assets/neuro-treino/objetos/radio-antigo.png";
import tvModerna from "@/assets/neuro-treino/objetos/tv-moderna.png";
import cameraAntiga from "@/assets/neuro-treino/objetos/camera-antiga.png";
import tablet from "@/assets/neuro-treino/objetos/tablet.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import familia from "@/assets/neuro-treino/objetos/familia-tradicional.png";
import album from "@/assets/neuro-treino/objetos/album.png";

/**
 * Geografia · 2º Ano · Unidade 4 · Aula 03
 * "Comunicação de Ontem e de Hoje" — EF02GE07
 *
 * A criança compara as formas ANTIGAS e MODERNAS de se comunicar,
 * percebendo que a MENSAGEM continua a mesma — mudou a velocidade.
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-comunicacao-ontem-hoje",
  titulo: "Comunicação de Ontem e de Hoje",
  iconeTrilha: "📱",
  bncc: ["EF02GE07"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A caixa da bisavó",
    historia:
      "Brilha achou uma CAIXA da bisavó cheia de CARTAS, um TELEFONE de DISCO e um RÁDIO antigo. Aurora disse: 'Brilha, antigamente a notícia demorava DIAS! Hoje a gente conversa num piscar de olhos. Vamos EVOLUIR as tecnologias?'",
    imagemUrl: telefoneAntigo,
  },

  momento02_previsao: {
    instrucao: "Pistas da caixa da bisavó. O que a aula vai comparar?",
    bloco: {
      titulo: "Missão: Upgrade da Comunicação",
      capaImagemUrl: album,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "📻",
        estilo: "cartaz",
        linhas: [
          "MISSÃO EVOLUÇÃO",
          "",
          "Descubra como as pessoas",
          "se comunicavam ANTES",
          "e como se comunicam HOJE.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: telefoneAntigo, nome: "Telefone de disco (antes)" },
        { imagemUrl: celular, nome: "Celular (hoje)" },
        { imagemUrl: radioAntigo, nome: "Rádio antigo → TV/tablet" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Comparar a comunicação de ANTES e a de HOJE.",
          imagemUrl: telefoneAntigo,
        },
        { texto: "Fazer um bolo de aniversário.", imagemUrl: familia },
        { texto: "Aprender a plantar uma árvore.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Vamos evoluir carta → celular, rádio → TV, disco → tablet.",
      feedbackErro:
        "Olhe as pistas: telefone antigo, rádio, celular. A missão é COMPARAR ontem e hoje.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da comunicação.",
    cards: [
      {
        palavra: "comunicação",
        explicacao:
          "É quando a gente PASSA UMA MENSAGEM pra outra pessoa: falando, escrevendo, ligando, mandando áudio.",
        exemplo:
          "O celular é um meio de COMUNICAÇÃO rápido.",
        imagemUrl: celular,
      },
      {
        palavra: "mensagem",
        explicacao:
          "É o RECADO que a gente manda: 'Feliz aniversário', 'Estou chegando', 'Te amo'. Pode ser escrita, falada ou de áudio.",
        exemplo:
          "Mandei uma MENSAGEM de áudio pra vovó.",
        imagemUrl: tablet,
      },
      {
        palavra: "evolução",
        explicacao:
          "É quando algo MUDA e MELHORA com o tempo. O telefone de disco EVOLUIU e virou celular.",
        exemplo:
          "A EVOLUÇÃO da comunicação: carta → telefone → celular → internet.",
        imagemUrl: cameraAntiga,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você. Preste atenção nas MUDANÇAS.",
    leitura: {
      titulo: "Como as notícias chegavam antigamente",
      imagemUrl: album,
      legendaImagem: "Antes a notícia demorava dias; hoje, segundos.",
      destacar: [
        "carta",
        "telefone",
        "rádio",
        "televisão",
        "celular",
        "internet",
      ],
      paragrafos: [
        "ANTIGAMENTE, pra dar uma notícia distante, a pessoa escrevia uma CARTA. A carta viajava DIAS ou SEMANAS de trem, navio ou avião.",
        "Depois inventaram o TELEFONE de disco. Dava pra CONVERSAR na hora — mas só de casa, com fio na parede.",
        "O RÁDIO trouxe as notícias do mundo pro sofá; a TELEVISÃO trouxe as IMAGENS também.",
        "HOJE, com o CELULAR e a INTERNET, a gente manda mensagem, áudio, foto e vídeo em SEGUNDOS pra qualquer lugar!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "Antigamente, pra mandar notícia LONGE, escreviam...",
        opcoes: ["Um e-mail", "Uma carta", "Um vídeo"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! CARTA.",
        feedbackErro:
          "O texto diz: 'ANTIGAMENTE… a pessoa escrevia uma CARTA'.",
        ondeEstaNoTexto: "…a pessoa escrevia uma CARTA…",
      },
      {
        pergunta: "O que o RÁDIO trouxe pro sofá?",
        opcoes: [
          "As notícias do mundo",
          "Sopa quentinha",
          "Roupas novas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Boa! As NOTÍCIAS.",
        feedbackErro:
          "O texto diz: 'O RÁDIO trouxe as notícias do mundo pro sofá'.",
        ondeEstaNoTexto: "…O RÁDIO trouxe as notícias do mundo…",
      },
      {
        pergunta: "O que a TELEVISÃO trouxe A MAIS que o rádio?",
        opcoes: ["Imagens", "Cheiro", "Comida"],
        correta: 0,
        feedbackAcerto: "🎉 IMAGENS.",
        feedbackErro:
          "O texto diz: 'a TELEVISÃO trouxe as IMAGENS também'.",
        ondeEstaNoTexto: "…a TELEVISÃO trouxe as IMAGENS também…",
      },
      {
        pergunta: "Hoje, em quanto tempo a mensagem chega?",
        opcoes: ["Semanas", "Dias", "Segundos"],
        correta: 2,
        feedbackAcerto: "🎉 SEGUNDOS!",
        feedbackErro:
          "O texto diz: 'a gente manda… em SEGUNDOS pra qualquer lugar'.",
        ondeEstaNoTexto: "…em SEGUNDOS pra qualquer lugar!",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Combine: qual é o ANTIGO e qual é o MODERNO?",
    perguntas: [
      {
        pergunta: "🕰️ Antes de existir celular, a pessoa ligava com o quê?",
        opcoes: ["Tablet", "Telefone de disco", "Rádio"],
        opcoesImagens: [tablet, telefoneAntigo, radioAntigo],
        correta: 1,
        feedbackAcerto: "🎉 O TELEFONE DE DISCO.",
        feedbackErro:
          "Antes do celular, usavam o TELEFONE de DISCO, preso na parede.",
      },
      {
        pergunta: "📻 Antes da TV, como escutavam as notícias?",
        opcoes: ["Pelo rádio", "Pelo tablet", "Pelo celular"],
        opcoesImagens: [radioAntigo, tablet, celular],
        correta: 0,
        feedbackAcerto: "🎉 Pelo RÁDIO.",
        feedbackErro:
          "Antes da TV, o RÁDIO era o meio principal de notícia em casa.",
      },
      {
        pergunta: "📷 Antes da câmera do celular, tiravam foto com...",
        opcoes: ["Câmera antiga (de filme)", "Tablet", "Rádio"],
        opcoesImagens: [cameraAntiga, tablet, radioAntigo],
        correta: 0,
        feedbackAcerto: "🎉 CÂMERA ANTIGA (de filme).",
        feedbackErro:
          "As fotos vinham de CÂMERAS ANTIGAS com FILME — e demoravam pra revelar.",
      },
      {
        pergunta: "📱 Hoje, o que faz TUDO junto: liga, filma, manda áudio?",
        opcoes: ["Telefone de disco", "Celular / smartphone", "Livro"],
        opcoesImagens: [telefoneAntigo, celular, livro],
        correta: 1,
        feedbackAcerto: "🎉 O CELULAR (smartphone).",
        feedbackErro:
          "O CELULAR moderno faz TUDO: chama, filma, tira foto e manda áudio.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ORDEM a EVOLUÇÃO da comunicação (do mais antigo → mais moderno).",
    bloco: {
      instrucao: "Do mais ANTIGO → mais MODERNO.",
      itens: [
        { id: "s1", texto: "1) CARTA de papel", imagemUrl: album },
        { id: "s2", texto: "2) TELEFONE de disco", imagemUrl: telefoneAntigo },
        { id: "s3", texto: "3) RÁDIO em casa", imagemUrl: radioAntigo },
        { id: "s4", texto: "4) TELEVISÃO com imagem", imagemUrl: tvModerna },
        { id: "s5", texto: "5) CELULAR e INTERNET", imagemUrl: celular },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Evolução completa! Carta → telefone → rádio → TV → celular.",
      feedbackErro:
        "A carta veio primeiro; depois telefone, rádio, TV, e por último o celular com internet.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A vovó no vídeo",
      imagemUrl: familia,
      destacar: ["vovó", "carta", "vídeo", "chamada", "celular"],
      paragrafos: [
        "Quando a MÃE de Brilha era criança, escrevia CARTA pra vovó, que morava longe. A carta levava uns 10 DIAS pra chegar.",
        "Hoje, Brilha faz uma CHAMADA DE VÍDEO pelo CELULAR e vê a vovó SORRIR na mesma hora. A vovó adora!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos dias a CARTA demorava pra chegar na vovó?",
        opcoes: ["10 dias", "5 minutos", "1 segundo"],
        opcoesImagens: [album, celular, tablet],
        correta: 0,
        feedbackAcerto: "🎉 10 DIAS.",
        feedbackErro:
          "O texto diz: 'A carta levava uns 10 DIAS pra chegar'.",
        ondeEstaNoTexto: "…A carta levava uns 10 DIAS…",
      },
      {
        pergunta: "Hoje, como Brilha VÊ a vovó na hora?",
        opcoes: [
          "Escrevendo uma carta",
          "Chamada de vídeo pelo celular",
          "Mandando um rádio pelo correio",
        ],
        opcoesImagens: [album, celular, radioAntigo],
        correta: 1,
        feedbackAcerto: "🎉 CHAMADA DE VÍDEO pelo CELULAR.",
        feedbackErro:
          "O texto diz: 'faz uma CHAMADA DE VÍDEO pelo CELULAR'.",
        ondeEstaNoTexto:
          "…faz uma CHAMADA DE VÍDEO pelo CELULAR…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "⚡ Upgrade! Antes × Hoje",
    instrucao:
      "Cada CARTELA é uma MENSAGEM. Coloque no meio ANTIGO ou no meio MODERNO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Arrastar para o Alvo",
      bloco: {
        instrucao: "Toque na cartela e depois no meio certo (antigo/moderno).",
        alvos: [
          {
            id: "antigo",
            nome: "🕰️ ANTIGAMENTE",
            descricao: "Carta, telefone de disco, rádio, câmera de filme.",
            imagemUrl: telefoneAntigo,
          },
          {
            id: "moderno",
            nome: "📱 HOJE",
            descricao: "Celular, tablet, TV, internet.",
            imagemUrl: celular,
          },
        ],
        itens: [
          { id: "i1", texto: "Carta escrita à mão", alvoId: "antigo", imagemUrl: album },
          { id: "i2", texto: "Telefone de disco", alvoId: "antigo", imagemUrl: telefoneAntigo },
          { id: "i3", texto: "Rádio de mesa", alvoId: "antigo", imagemUrl: radioAntigo },
          { id: "i4", texto: "Câmera com filme", alvoId: "antigo", imagemUrl: cameraAntiga },
          { id: "i5", texto: "Chamada de vídeo", alvoId: "moderno", imagemUrl: celular },
          { id: "i6", texto: "Mensagem de áudio", alvoId: "moderno", imagemUrl: celular },
          { id: "i7", texto: "Vídeo no tablet", alvoId: "moderno", imagemUrl: tablet },
          { id: "i8", texto: "TV com imagem colorida", alvoId: "moderno", imagemUrl: tvModerna },
        ],
        feedbackAcerto:
          "🎉 Evolução completa! Antes demorava DIAS; hoje, SEGUNDOS.",
        feedbackErro:
          "Carta, disco, rádio e câmera de filme são ANTIGOS. Celular, tablet, chamada de vídeo e TV colorida são MODERNOS.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "COMUNICAÇÃO = passar uma MENSAGEM pra alguém.",
      "Antigamente: CARTA, telefone de DISCO, RÁDIO.",
      "Depois: TELEVISÃO trouxe IMAGEM.",
      "Hoje: CELULAR + INTERNET = mensagem em SEGUNDOS.",
      "A mensagem é a MESMA — o que mudou foi a VELOCIDADE.",
    ],
    miniDesafio: {
      pergunta: "Qual é o meio MAIS RÁPIDO de mandar 'oi' pra vovó longe?",
      opcoes: ["Carta", "Chamada pelo celular", "Rádio antigo"],
      correta: 1,
      feedbackAcerto: "🎉 CHAMADA PELO CELULAR.",
      feedbackErro:
        "O celular manda a mensagem em SEGUNDOS — a carta demoraria dias.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é COMUNICAÇÃO?",
        opcoes: [
          "Andar de carro",
          "Passar uma mensagem pra outra pessoa",
          "Cozinhar",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro:
          "COMUNICAÇÃO é passar uma MENSAGEM pra outra pessoa.",
      },
      {
        pergunta: "2/5 — Meio de comunicação ANTIGO:",
        opcoes: ["Celular", "Carta", "Tablet"],
        correta: 1,
        feedbackAcerto: "🎉 CARTA.",
        feedbackErro:
          "CARTA é antigo — celular e tablet são modernos.",
      },
      {
        pergunta: "3/5 — Meio de comunicação MODERNO:",
        opcoes: ["Chamada de vídeo", "Telefone de disco", "Carta"],
        correta: 0,
        feedbackAcerto: "🎉 CHAMADA DE VÍDEO.",
        feedbackErro:
          "Chamada de vídeo é MODERNO. Telefone de disco e carta são antigos.",
      },
      {
        pergunta: "4/5 — O que a TELEVISÃO trouxe A MAIS que o rádio?",
        opcoes: ["Cheiro", "Imagem", "Comida"],
        correta: 1,
        feedbackAcerto: "🎉 IMAGEM.",
        feedbackErro: "A TV trouxe IMAGEM junto com o som.",
      },
      {
        pergunta: "5/5 — Hoje, mensagem chega em...",
        opcoes: ["Semanas", "Dias", "Segundos"],
        correta: 2,
        feedbackAcerto: "🎉 SEGUNDOS.",
        feedbackErro: "Com celular + internet, chega em SEGUNDOS.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📸 Caça ao Antigo",
    materiais: ["Alguém da família", "Papel e lápis"],
    passos: [
      "1) Pergunte a um ADULTO: como ele/ela conversava com a família QUANDO ERA CRIANÇA?",
      "2) Descubra 1 objeto ANTIGO de comunicação (carta, telefone de disco, rádio, câmera de filme).",
      "3) Desenhe esse objeto ao lado do CELULAR moderno.",
      "4) Escreva 1 palavra pra cada: 'DEMORA' e 'RÁPIDO'.",
    ],
    registro:
      "📸 Uma foto do seu desenho: ANTIGO × MODERNO.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Mestre da Evolução",
  },
};
