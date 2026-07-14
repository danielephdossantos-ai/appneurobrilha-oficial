import type { AulaPortuguesV4 } from "../../types";
import { url as mapaPercurso } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as ponte } from "@/assets/neuro-treino/objetos/ponte.png.asset.json";
import { url as pontoOnibus } from "@/assets/neuro-treino/objetos/ponto-onibus.png.asset.json";
import { url as navio } from "@/assets/neuro-treino/objetos/navio.png.asset.json";
import { url as bicicletaModerna } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as tvModerna } from "@/assets/neuro-treino/objetos/tv-moderna.png.asset.json";
import { url as telefoneAntigo } from "@/assets/neuro-treino/objetos/telefone-antigo.png.asset.json";
import { url as radioAntigo } from "@/assets/neuro-treino/objetos/radio-antigo.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as mercado } from "@/assets/neuro-treino/objetos/mercado.png.asset.json";
import { url as postoSaude } from "@/assets/neuro-treino/objetos/posto-saude.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 4 · Aula 04
 * "Atlas Conectado: caminhos e mensagens" — EF02GE07/EF02GE08
 *
 * Fechamento da unidade: a criança conecta rotas + segurança +
 * comunicação num único MAPA do município — o "Atlas Conectado".
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-atlas-conectado",
  titulo: "Atlas Conectado do Município",
  iconeTrilha: "🗺️",
  bncc: ["EF02GE07", "EF02GE08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O Atlas do Brilha brilhou!",
    historia:
      "O ATLAS do Brilha começou a BRILHAR! Todas as ROTAS de transporte e as ANTENAS de comunicação estão se ligando. Aurora avisou: 'Chegou a hora de MOSTRAR TUDO o que você aprendeu — caminhos e mensagens do município!'",
    imagemUrl: mapaPercurso,
  },

  momento02_previsao: {
    instrucao: "Pistas do Atlas. O que a aula vai fechar?",
    bloco: {
      titulo: "Missão: Atlas Conectado",
      capaImagemUrl: mapa,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "🌐",
        estilo: "cartaz",
        linhas: [
          "MISSÃO FINAL",
          "",
          "Junte TRANSPORTE +",
          "SEGURANÇA + COMUNICAÇÃO",
          "no seu Atlas.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: pontoOnibus, nome: "Rotas dos transportes" },
        { imagemUrl: celular, nome: "Antenas de comunicação" },
        { imagemUrl: cidade, nome: "Município funcionando" },
      ],
      pergunta: "O que esta aula final vai celebrar?",
      hipoteses: [
        {
          texto:
            "Que TRANSPORTES e COMUNICAÇÃO fazem o município FUNCIONAR.",
          imagemUrl: cidade,
        },
        { texto: "Que a gente deve morar em uma árvore.", imagemUrl: campo },
        { texto: "Que carro anda debaixo d'água.", imagemUrl: navio },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Sem transportes e sem comunicação, o município não funciona.",
      feedbackErro:
        "Olhe as pistas: ônibus, celular, cidade. A aula fala que TUDO se conecta.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras do fechamento.",
    cards: [
      {
        palavra: "conexão",
        explicacao:
          "É quando duas coisas se LIGAM. A ponte é uma CONEXÃO entre dois lados do rio. O celular tem CONEXÃO com a internet.",
        exemplo: "A PONTE faz a CONEXÃO entre a cidade e o campo.",
        imagemUrl: ponte,
      },
      {
        palavra: "atlas",
        explicacao:
          "É um LIVRO de MAPAS. O 'Meu Atlas do Município' é o mapa que Brilha vai preenchendo com o que aprende.",
        exemplo: "Guardei no ATLAS o desenho do meu bairro.",
        imagemUrl: mapa,
      },
      {
        palavra: "rede",
        explicacao:
          "É um CONJUNTO de coisas ligadas: rede de ruas, rede de escolas, rede de internet. Tudo trabalhando junto.",
        exemplo:
          "A REDE de ruas do bairro leva a gente pra todo canto.",
        imagemUrl: mapaPercurso,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora lê com você a história FINAL da unidade.",
    leitura: {
      titulo: "O município conectado",
      imagemUrl: cidade,
      legendaImagem: "Rotas + antenas = município que funciona.",
      destacar: [
        "rotas",
        "ônibus",
        "caminhão",
        "ambulância",
        "celular",
        "antenas",
        "conectado",
      ],
      paragrafos: [
        "O município tem uma REDE DE ROTAS: ônibus levam crianças pra escola, caminhões levam alimento pro mercado, ambulâncias correm pro hospital.",
        "E tem também uma REDE de COMUNICAÇÃO: celulares, rádios, TVs e antenas espalhadas pelo bairro.",
        "Quando alguém liga pedindo AMBULÂNCIA, a comunicação e o transporte trabalham JUNTOS pra salvar!",
        "Sem transporte, ninguém CHEGA. Sem comunicação, ninguém SABE. Juntos, deixam o município CONECTADO.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "O que os ÔNIBUS fazem no município?",
        opcoes: [
          "Levam crianças pra escola",
          "Ficam parados no rio",
          "Voam pelo céu",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro:
          "O texto diz: 'ônibus levam crianças pra escola'.",
        ondeEstaNoTexto: "…ônibus levam crianças pra escola…",
      },
      {
        pergunta: "Quem CORRE quando alguém está doente?",
        opcoes: ["Caminhão", "Ambulância", "Navio"],
        correta: 1,
        feedbackAcerto: "🎉 A AMBULÂNCIA.",
        feedbackErro:
          "O texto diz: 'ambulâncias correm pro hospital'.",
        ondeEstaNoTexto: "…ambulâncias correm pro hospital…",
      },
      {
        pergunta:
          "Sem COMUNICAÇÃO, o que ninguém consegue?",
        opcoes: ["Comer", "Saber (avisar)", "Dormir"],
        correta: 1,
        feedbackAcerto: "🎉 SABER/AVISAR.",
        feedbackErro:
          "O texto diz: 'Sem comunicação, ninguém SABE'.",
        ondeEstaNoTexto: "…Sem comunicação, ninguém SABE…",
      },
      {
        pergunta: "Sem TRANSPORTE, o que ninguém consegue?",
        opcoes: ["Chegar", "Falar", "Escutar rádio"],
        correta: 0,
        feedbackAcerto: "🎉 CHEGAR.",
        feedbackErro:
          "O texto diz: 'Sem transporte, ninguém CHEGA'.",
        ondeEstaNoTexto: "…Sem transporte, ninguém CHEGA…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Situações do dia a dia: transporte OU comunicação?",
    perguntas: [
      {
        pergunta: "🚨 A vovó passou mal. O que a família faz PRIMEIRO?",
        opcoes: [
          "Manda uma carta",
          "LIGA no celular chamando ajuda",
          "Espera até amanhã",
        ],
        opcoesImagens: [telefoneAntigo, celular, radioAntigo],
        correta: 1,
        feedbackAcerto:
          "🎉 LIGA no celular — comunicação chama a ambulância.",
        feedbackErro:
          "Em emergência, primeiro se COMUNICA (ligação) pra pedir a AMBULÂNCIA.",
      },
      {
        pergunta: "📢 O MUNICÍPIO quer avisar TODO MUNDO sobre uma chuva forte. Usa...",
        opcoes: ["Só um bilhete", "Rádio, TV e celular", "Só a bicicleta"],
        opcoesImagens: [mapa, tvModerna, bicicletaModerna],
        correta: 1,
        feedbackAcerto: "🎉 RÁDIO, TV e CELULAR alcançam MUITA gente.",
        feedbackErro:
          "Pra avisar TODO MUNDO ao mesmo tempo, usa MEIOS DE COMUNICAÇÃO (rádio, TV, celular).",
      },
      {
        pergunta: "🚌 Chegar na ESCOLA que fica longe é...",
        opcoes: ["Comunicação", "Transporte", "Nenhum dos dois"],
        opcoesImagens: [celular, pontoOnibus, escola],
        correta: 1,
        feedbackAcerto: "🎉 TRANSPORTE.",
        feedbackErro:
          "CHEGAR num lugar é TRANSPORTE (ônibus escolar, por exemplo).",
      },
      {
        pergunta:
          "📱 Mandar áudio pro primo é...",
        opcoes: ["Transporte", "Comunicação", "Comida"],
        opcoesImagens: [pontoOnibus, celular, mercado],
        correta: 1,
        feedbackAcerto: "🎉 COMUNICAÇÃO.",
        feedbackErro:
          "Mandar mensagem/áudio é COMUNICAÇÃO — é passar RECADO.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordene o que acontece quando alguém CHAMA AJUDA.",
    bloco: {
      instrucao: "Do primeiro → último passo.",
      itens: [
        { id: "s1", texto: "1) Alguém passa mal em casa.", imagemUrl: postoSaude },
        { id: "s2", texto: "2) Família LIGA no celular.", imagemUrl: celular },
        { id: "s3", texto: "3) Central AVISA a ambulância.", imagemUrl: tvModerna },
        { id: "s4", texto: "4) AMBULÂNCIA pega a rota rápida.", imagemUrl: pontoOnibus },
        { id: "s5", texto: "5) Doente é atendido no HOSPITAL.", imagemUrl: postoSaude },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Rede completa! Comunicação + transporte SALVAM vidas.",
      feedbackErro:
        "Primeiro alguém passa mal, aí a família LIGA, a central AVISA, a ambulância VAI e o hospital ATENDE.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O aviso da chuva forte",
      imagemUrl: tvModerna,
      destacar: ["chuva", "rádio", "TV", "celular", "escola", "ônibus"],
      paragrafos: [
        "A prefeitura avisou pelo RÁDIO, TV e CELULAR que ia chover FORTE. As famílias souberam na hora.",
        "A escola liberou mais cedo, os ÔNIBUS passaram antes e todo mundo chegou em casa em SEGURANÇA — graças à comunicação e ao transporte.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por onde a PREFEITURA avisou da chuva?",
        opcoes: [
          "Só por carta",
          "Rádio, TV e celular",
          "Ninguém avisou",
        ],
        opcoesImagens: [telefoneAntigo, tvModerna, mapa],
        correta: 1,
        feedbackAcerto: "🎉 Isso! RÁDIO, TV e CELULAR.",
        feedbackErro:
          "O texto diz: 'avisou pelo RÁDIO, TV e CELULAR'.",
        ondeEstaNoTexto: "…RÁDIO, TV e CELULAR…",
      },
      {
        pergunta: "O que fez todo mundo CHEGAR em casa em segurança?",
        opcoes: [
          "Comunicação e transporte juntos",
          "Só a chuva",
          "Só o rádio",
        ],
        opcoesImagens: [cidade, campo, radioAntigo],
        correta: 0,
        feedbackAcerto:
          "🎉 COMUNICAÇÃO + TRANSPORTE juntos.",
        feedbackErro:
          "O texto diz: 'em SEGURANÇA — graças à comunicação e ao transporte'.",
        ondeEstaNoTexto: "…graças à comunicação e ao transporte.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🗺️ Atlas Conectado: transporte × comunicação",
    instrucao:
      "Cada CARTELA é um objeto do dia a dia. Coloque em TRANSPORTE ou COMUNICAÇÃO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Arrastar para o Alvo",
      bloco: {
        instrucao: "Toque na cartela e depois no cartaz certo.",
        alvos: [
          {
            id: "transporte",
            nome: "🚌 TRANSPORTE",
            descricao: "Coisas que LEVAM pessoas/produtos.",
            imagemUrl: pontoOnibus,
          },
          {
            id: "comunicacao",
            nome: "📱 COMUNICAÇÃO",
            descricao: "Coisas que PASSAM MENSAGEM.",
            imagemUrl: celular,
          },
        ],
        itens: [
          { id: "i1", texto: "Ônibus escolar", alvoId: "transporte", imagemUrl: pontoOnibus },
          { id: "i2", texto: "Ambulância", alvoId: "transporte", imagemUrl: postoSaude },
          { id: "i3", texto: "Bicicleta", alvoId: "transporte", imagemUrl: bicicletaModerna },
          { id: "i4", texto: "Barco no rio", alvoId: "transporte", imagemUrl: navio },
          { id: "i5", texto: "Celular", alvoId: "comunicacao", imagemUrl: celular },
          { id: "i6", texto: "Televisão", alvoId: "comunicacao", imagemUrl: tvModerna },
          { id: "i7", texto: "Rádio", alvoId: "comunicacao", imagemUrl: radioAntigo },
          { id: "i8", texto: "Telefone antigo", alvoId: "comunicacao", imagemUrl: telefoneAntigo },
        ],
        feedbackAcerto:
          "🎉 Atlas conectado! Você separou os que LEVAM dos que MANDAM MENSAGEM.",
        feedbackErro:
          "Ônibus, ambulância, bicicleta e barco = TRANSPORTE. Celular, TV, rádio e telefone = COMUNICAÇÃO.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "TRANSPORTE = LEVA pessoas e produtos (ônibus, caminhão, bike, barco).",
      "COMUNICAÇÃO = passa MENSAGEM (celular, rádio, TV, antenas).",
      "Sem TRANSPORTE, ninguém CHEGA.",
      "Sem COMUNICAÇÃO, ninguém SABE.",
      "Rede de rotas + rede de antenas = MUNICÍPIO CONECTADO.",
    ],
    miniDesafio: {
      pergunta:
        "Numa EMERGÊNCIA, quem trabalha JUNTO pra salvar?",
      opcoes: [
        "Só o ônibus",
        "Comunicação (ligação) + transporte (ambulância)",
        "Só a carta",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! LIGAÇÃO chama, AMBULÂNCIA leva.",
      feedbackErro:
        "Comunicação AVISA e transporte LEVA — juntos salvam.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Ônibus escolar é...",
        opcoes: ["Comunicação", "Transporte", "Comida"],
        correta: 1,
        feedbackAcerto: "🎉 TRANSPORTE.",
        feedbackErro: "Ônibus LEVA pessoas → é TRANSPORTE.",
      },
      {
        pergunta: "2/5 — Celular é...",
        opcoes: ["Transporte", "Comunicação", "Roupa"],
        correta: 1,
        feedbackAcerto: "🎉 COMUNICAÇÃO.",
        feedbackErro:
          "Celular passa mensagem → COMUNICAÇÃO.",
      },
      {
        pergunta: "3/5 — Sem TRANSPORTE, ninguém...",
        opcoes: ["Chega", "Fala", "Dorme"],
        correta: 0,
        feedbackAcerto: "🎉 CHEGA.",
        feedbackErro: "Sem transporte, ninguém CHEGA nos lugares.",
      },
      {
        pergunta: "4/5 — Sem COMUNICAÇÃO, ninguém...",
        opcoes: ["Come", "Sabe/avisa", "Anda"],
        correta: 1,
        feedbackAcerto: "🎉 SABE/AVISA.",
        feedbackErro:
          "Sem comunicação, ninguém SABE de nada.",
      },
      {
        pergunta:
          "5/5 — Numa EMERGÊNCIA, comunicação e transporte...",
        opcoes: [
          "Não se ligam",
          "Trabalham JUNTOS pra salvar",
          "Atrapalham",
        ],
        correta: 1,
        feedbackAcerto: "🎉 TRABALHAM JUNTOS.",
        feedbackErro:
          "Em emergência, LIGAÇÃO chama e AMBULÂNCIA leva — trabalham JUNTOS.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🌐 Meu Atlas Conectado",
    materiais: ["Papel grande", "Lápis colorido"],
    passos: [
      "1) Com um ADULTO, desenhe o seu bairro em uma folha grande.",
      "2) Desenhe 2 ROTAS: casa → escola e casa → mercado.",
      "3) Desenhe 2 MEIOS DE COMUNICAÇÃO que existem em casa (celular, TV, rádio).",
      "4) Escreva em cima: 'MEU ATLAS CONECTADO'.",
    ],
    registro:
      "📸 Uma foto do Atlas Conectado do seu bairro.",
  },

  recompensa: {
    xp: 220,
    moedas: 140,
    medalha: "Mestre das Rotas e Conexões",
  },
};
