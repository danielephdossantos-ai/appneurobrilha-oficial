import type { AulaPortuguesV4 } from "../../types";
import rua from "@/assets/neuro-treino/objetos/rua.png";
import criancaAndando from "@/assets/neuro-treino/objetos/crianca-andando.png";
import bicicletaModerna from "@/assets/neuro-treino/objetos/bicicleta-moderna.png";
import carro from "@/assets/neuro-treino/objetos/carro.png";
import pontoOnibus from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import postoSaude from "@/assets/neuro-treino/objetos/posto-saude.png";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";
import mapaPercurso from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import semaforo from "@/assets/neuro-treino/objetos/relogio.png"; // fallback: sem asset dedicado
import mao from "@/assets/neuro-treino/objetos/abraco.png";

/**
 * Geografia · 2º Ano · Unidade 4 · Aula 02
 * "Segurança em Primeiro Lugar" — EF02GE07/EF02GE08
 *
 * Brilha aprende a atravessar a rua com segurança: FAIXA, SEMÁFORO,
 * OLHAR os dois lados. Só usa blocos travados do PlayerPortuguesV4.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-seguranca-no-transito",
  titulo: "Segurança em Primeiro Lugar",
  iconeTrilha: "🚦",
  bncc: ["EF02GE07", "EF02GE08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha na beira da rua",
    historia:
      "Brilha chegou na esquina da RUA e ficou esperando pra atravessar. Aurora apareceu: 'Brilha, o TRÂNSITO tem REGRAS! O SEMÁFORO fala com a gente, a FAIXA marca o lugar certo. Vamos treinar pra atravessar SEGURO?'",
    imagemUrl: rua,
  },

  momento02_previsao: {
    instrucao: "Aurora mostrou 3 pistas do trânsito. O que a aula vai treinar?",
    bloco: {
      titulo: "Missão: Atravessar SEGURO",
      capaImagemUrl: rua,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "🚦",
        estilo: "cartaz",
        linhas: [
          "MISSÃO SEGURANÇA",
          "",
          "Aprenda a atravessar",
          "usando SEMÁFORO,",
          "FAIXA e os DOIS LADOS.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: semaforo, nome: "Semáforo dos carros e das pessoas" },
        { imagemUrl: mao, nome: "Olhar pros DOIS lados" },
        { imagemUrl: rua, nome: "Atravessar na FAIXA" },
      ],
      pergunta: "O que a aula vai ensinar?",
      hipoteses: [
        {
          texto: "A atravessar a RUA com SEGURANÇA.",
          imagemUrl: rua,
        },
        { texto: "A pintar carros de vermelho.", imagemUrl: carro },
        { texto: "A dormir cedo na escola.", imagemUrl: escola },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Vamos treinar: FAIXA + SEMÁFORO + OLHAR os dois lados.",
      feedbackErro:
        "Olhe as pistas: SEMÁFORO, DOIS LADOS, FAIXA. A missão é ATRAVESSAR SEGURO.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da SEGURANÇA no trânsito.",
    cards: [
      {
        palavra: "faixa",
        explicacao:
          "É aquele DESENHO de listras BRANCAS pintadas no chão. É o LUGAR CERTO pra pessoa atravessar.",
        exemplo: "A gente atravessa sempre na FAIXA.",
        imagemUrl: rua,
      },
      {
        palavra: "semáforo",
        explicacao:
          "É o SINAL de trânsito com luzes VERMELHA, AMARELA e VERDE. Fala pros carros e pras pessoas quando andar e quando esperar.",
        exemplo:
          "O SEMÁFORO dos carros ficou VERMELHO — a pessoa pode atravessar.",
        imagemUrl: semaforo,
      },
      {
        palavra: "pedestre",
        explicacao:
          "É a pessoa que anda a PÉ na rua ou na calçada. Nós somos pedestres quando não estamos no carro nem na bicicleta.",
        exemplo: "O PEDESTRE espera na calçada antes de atravessar.",
        imagemUrl: criancaAndando,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você. Preste atenção nas REGRAS.",
    leitura: {
      titulo: "Como atravessar a rua",
      imagemUrl: rua,
      legendaImagem: "Sempre com um adulto, na faixa, olhando dos dois lados.",
      destacar: [
        "calçada",
        "faixa",
        "semáforo",
        "vermelho",
        "verde",
        "dois lados",
        "adulto",
      ],
      paragrafos: [
        "O PEDESTRE anda na CALÇADA, longe dos carros. Pra atravessar, procura sempre a FAIXA.",
        "Se tiver SEMÁFORO, espera. Quando o semáforo dos CARROS fica VERMELHO (e o das pessoas fica VERDE), pode atravessar.",
        "Antes de descer da calçada, OLHA pros DOIS LADOS. Nunca corre — ANDA olhando os carros.",
        "Criança atravessa SEMPRE com a MÃO de um ADULTO. Segurança em PRIMEIRO LUGAR!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "Onde o PEDESTRE anda?",
        opcoes: ["No meio da rua", "Na calçada", "Em cima do carro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Na CALÇADA.",
        feedbackErro:
          "O texto diz: 'O PEDESTRE anda na CALÇADA, longe dos carros'.",
        ondeEstaNoTexto: "…O PEDESTRE anda na CALÇADA…",
      },
      {
        pergunta: "Pra atravessar, procura o quê no chão?",
        opcoes: ["A faixa", "Uma flor", "Uma pedra"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! A FAIXA.",
        feedbackErro:
          "O texto diz: 'Pra atravessar, procura sempre a FAIXA'.",
        ondeEstaNoTexto: "…procura sempre a FAIXA…",
      },
      {
        pergunta: "Quando o pedestre PODE atravessar no semáforo?",
        opcoes: [
          "Quando o dos CARROS está VERDE",
          "Quando o dos CARROS está VERMELHO",
          "Nunca",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Carro VERMELHO = pessoa pode atravessar.",
        feedbackErro:
          "O texto diz: 'Quando o semáforo dos CARROS fica VERMELHO… pode atravessar'.",
        ondeEstaNoTexto: "…semáforo dos CARROS fica VERMELHO…",
      },
      {
        pergunta: "Antes de descer da calçada, o que a criança faz?",
        opcoes: [
          "Fecha os olhos e corre",
          "Olha pros DOIS LADOS",
          "Grita bem alto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! OLHA pros DOIS LADOS.",
        feedbackErro:
          "O texto diz: 'OLHA pros DOIS LADOS'.",
        ondeEstaNoTexto: "…OLHA pros DOIS LADOS…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Situações de trânsito. O que fazer?",
    perguntas: [
      {
        pergunta: "🚦 O sinal dos CARROS ficou VERMELHO. O pedestre...",
        opcoes: ["Espera parado", "Atravessa na faixa com atenção", "Corre no meio da rua"],
        opcoesImagens: [carro, criancaAndando, rua],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Carro VERMELHO = pessoa atravessa na FAIXA, olhando.",
        feedbackErro:
          "Quando o CARRO fica VERMELHO, o pedestre pode atravessar — mas SEMPRE na FAIXA.",
      },
      {
        pergunta: "🚦 O sinal dos CARROS ficou VERDE. O pedestre...",
        opcoes: ["Atravessa correndo", "Espera na calçada", "Fica no meio da rua"],
        opcoesImagens: [rua, criancaAndando, carro],
        correta: 1,
        feedbackAcerto: "🎉 Certo! ESPERA na CALÇADA.",
        feedbackErro:
          "Carro VERDE = carro anda. O pedestre ESPERA na CALÇADA.",
      },
      {
        pergunta: "🚲 Andando de BICICLETA na rua, o que NÃO pode esquecer?",
        opcoes: [
          "Capacete e adulto por perto",
          "Chinelo de dedo",
          "Chapéu de festa",
        ],
        opcoesImagens: [bicicletaModerna, carro, mapaPercurso],
        correta: 0,
        feedbackAcerto: "🎉 Boa! CAPACETE + adulto por perto.",
        feedbackErro:
          "De BICICLETA a gente usa CAPACETE e anda com um ADULTO por perto.",
      },
      {
        pergunta: "🚌 Dentro do ÔNIBUS/CARRO, a criança usa...",
        opcoes: ["Cinto de segurança", "Nenhuma proteção", "Só o boné"],
        opcoesImagens: [carro, pontoOnibus, criancaAndando],
        correta: 0,
        feedbackAcerto: "🎉 Isso! CINTO DE SEGURANÇA sempre.",
        feedbackErro:
          "Dentro do carro/ônibus a criança usa CINTO DE SEGURANÇA — protege num freio brusco.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordene os PASSOS de atravessar a rua com segurança.",
    bloco: {
      instrucao: "Do primeiro → último passo.",
      itens: [
        { id: "s1", texto: "1) PARO na CALÇADA.", imagemUrl: criancaAndando },
        { id: "s2", texto: "2) PROCURO a FAIXA.", imagemUrl: rua },
        { id: "s3", texto: "3) OLHO pros dois lados.", imagemUrl: mao },
        { id: "s4", texto: "4) ESPERO o carro parar.", imagemUrl: carro },
        { id: "s5", texto: "5) ATRAVESSO ANDANDO, com o adulto.", imagemUrl: cidade },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Perfeito! Parar → faixa → olhar → esperar → atravessar.",
      feedbackErro:
        "Primeiro PARA, depois PROCURA a FAIXA, OLHA, ESPERA e só então ATRAVESSA.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O passeio do Brilha",
      imagemUrl: cidade,
      destacar: ["mãe", "calçada", "faixa", "esperou", "verde"],
      paragrafos: [
        "Brilha foi passear com a MÃE. Andaram na CALÇADA até a esquina, com Brilha bem juntinho dela.",
        "Na esquina, esperaram o SEMÁFORO. Quando o das pessoas ficou VERDE, olharam os DOIS LADOS e atravessaram na FAIXA, andando com calma.",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde Brilha andou com a mãe?",
        opcoes: ["Na calçada", "No meio dos carros", "Em cima do muro"],
        opcoesImagens: [criancaAndando, carro, rua],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Na CALÇADA.",
        feedbackErro: "O texto diz: 'Andaram na CALÇADA'.",
        ondeEstaNoTexto: "…Andaram na CALÇADA…",
      },
      {
        pergunta: "Atravessaram QUANDO o semáforo das pessoas ficou...",
        opcoes: ["Vermelho", "Verde", "Preto"],
        opcoesImagens: [semaforo, semaforo, semaforo],
        correta: 1,
        feedbackAcerto: "🎉 Certo! VERDE.",
        feedbackErro:
          "O texto diz: 'Quando o das pessoas ficou VERDE… atravessaram'.",
        ondeEstaNoTexto: "…o das pessoas ficou VERDE…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🚦 Semáforo: certo ou errado?",
    instrucao:
      "Cada CARTELA é uma atitude no trânsito. Coloque em SEGURO ou PERIGOSO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Arrastar para o Alvo",
      bloco: {
        instrucao:
          "Toque na atitude e depois no cartaz certo (SEGURO ou PERIGOSO).",
        alvos: [
          {
            id: "seguro",
            nome: "✅ SEGURO",
            descricao: "Atitudes que PROTEGEM.",
            imagemUrl: mao,
          },
          {
            id: "perigoso",
            nome: "⚠️ PERIGOSO",
            descricao: "Atitudes que a gente EVITA.",
            imagemUrl: postoSaude,
          },
        ],
        itens: [
          { id: "i1", texto: "Atravessar na FAIXA", alvoId: "seguro", imagemUrl: rua },
          { id: "i2", texto: "Esperar o carro PARAR", alvoId: "seguro", imagemUrl: carro },
          { id: "i3", texto: "Usar CINTO no carro", alvoId: "seguro", imagemUrl: carro },
          { id: "i4", texto: "Usar CAPACETE de bike", alvoId: "seguro", imagemUrl: bicicletaModerna },
          { id: "i5", texto: "Correr no meio da rua", alvoId: "perigoso", imagemUrl: criancaAndando },
          { id: "i6", texto: "Atravessar no VERDE dos carros", alvoId: "perigoso", imagemUrl: semaforo },
          { id: "i7", texto: "Jogar bola na rua", alvoId: "perigoso", imagemUrl: rua },
          { id: "i8", texto: "Descer do ônibus por trás", alvoId: "perigoso", imagemUrl: pontoOnibus },
        ],
        feedbackAcerto:
          "🎉 Guardião do trânsito! Você separou as atitudes seguras das perigosas.",
        feedbackErro:
          "Lembra: FAIXA, SEMÁFORO, CINTO e CAPACETE são SEGUROS. Correr, atravessar no verde do carro e brincar na rua são PERIGOSOS.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PEDESTRE anda na CALÇADA.",
      "Atravessar SEMPRE na FAIXA.",
      "Carro VERMELHO = pessoa pode atravessar.",
      "Antes de descer, OLHAR os DOIS LADOS.",
      "No carro: CINTO. Na bike: CAPACETE. Criança: com ADULTO.",
    ],
    miniDesafio: {
      pergunta: "O sinal dos CARROS ficou VERMELHO. Você...",
      opcoes: [
        "Espera parado no meio da rua",
        "Atravessa na FAIXA olhando os dois lados",
        "Corre pra frente do carro",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! Atravessa na FAIXA, olhando os dois lados.",
      feedbackErro:
        "Carro VERMELHO = pessoa atravessa, MAS sempre na FAIXA e olhando os DOIS LADOS.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Onde o PEDESTRE anda?",
        opcoes: ["No meio da rua", "Na calçada", "Em cima do carro"],
        correta: 1,
        feedbackAcerto: "🎉 Na CALÇADA.",
        feedbackErro: "PEDESTRE anda na CALÇADA.",
      },
      {
        pergunta: "2/5 — Pra atravessar, procura o quê?",
        opcoes: ["A faixa", "Uma flor", "O céu"],
        correta: 0,
        feedbackAcerto: "🎉 A FAIXA.",
        feedbackErro: "Atravessa SEMPRE na FAIXA.",
      },
      {
        pergunta: "3/5 — De BICICLETA, o que a criança usa na cabeça?",
        opcoes: ["Chapéu de festa", "Capacete", "Nada"],
        correta: 1,
        feedbackAcerto: "🎉 CAPACETE.",
        feedbackErro: "De bicicleta a criança usa CAPACETE.",
      },
      {
        pergunta: "4/5 — Dentro do CARRO, usa...",
        opcoes: ["Cinto de segurança", "Só o boné", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 CINTO de segurança.",
        feedbackErro: "No carro, SEMPRE o CINTO de segurança.",
      },
      {
        pergunta: "5/5 — Carro no VERMELHO. O pedestre pode?",
        opcoes: [
          "Sim, atravessar na faixa olhando",
          "Não, nunca",
          "Só se estiver chovendo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Sim! Pela FAIXA, olhando.",
        feedbackErro:
          "Carro VERMELHO = pedestre pode atravessar, na FAIXA e olhando.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🚦 Detetive do Trânsito",
    materiais: ["Um adulto pra sair junto", "Papel e lápis"],
    passos: [
      "1) Com um ADULTO, dê uma volta pelo quarteirão.",
      "2) PROCURE: 1 faixa de pedestres, 1 semáforo e 1 placa.",
      "3) DESENHE cada um em um quadrinho.",
      "4) Explique pro adulto o que cada um serve.",
    ],
    registro:
      "📸 Uma foto do seu caderno com os 3 sinais desenhados.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Pedestre Cinco-Estrelas",
  },
};
