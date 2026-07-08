import type { AulaPortuguesV4 } from "../../types";
import campo from "@/assets/neuro-treino/objetos/campo.png";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";
import vaca from "@/assets/neuro-treino/objetos/vaca.png";
import galinha from "@/assets/neuro-treino/objetos/galinha.png";
import semente from "@/assets/neuro-treino/objetos/semente.png";
import plantaPequena from "@/assets/neuro-treino/objetos/planta-pequena.png";
import regador from "@/assets/neuro-treino/objetos/regador.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import padaria from "@/assets/neuro-treino/objetos/padaria.png";
import mercado from "@/assets/neuro-treino/objetos/mercado.png";
import postoSaude from "@/assets/neuro-treino/objetos/posto-saude.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import professora from "@/assets/neuro-treino/objetos/professora.png";
import cozinheira from "@/assets/neuro-treino/objetos/cozinheira.png";
import funcionarioLimpeza from "@/assets/neuro-treino/objetos/funcionario-limpeza.png";
import artesao from "@/assets/neuro-treino/objetos/artesao.png";
import trem from "@/assets/neuro-treino/objetos/trem.png";
import carro from "@/assets/neuro-treino/objetos/carro.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import bairro from "@/assets/neuro-treino/objetos/bairro.png";
import familia from "@/assets/neuro-treino/objetos/familia-tradicional.png";

/**
 * Geografia · 2º Ano · Unidade 1 · Aula 03
 * "Trabalho no Campo e na Cidade" — EF02GE03
 *
 * Mesmo contrato AulaPortuguesV4 e padrão visual das aulas 01/02.
 * Sem blocos novos — só reaproveita ilustrações existentes.
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-trabalho-campo-cidade",
  titulo: "Trabalho no Campo e na Cidade",
  iconeTrilha: "🚜",
  bncc: ["EF02GE03"],
  duracaoMin: 15,

  // 1 · MOTIVAÇÃO
  momento01_motivacao: {
    titulo: "De onde vem o pãozinho?",
    historia:
      "Brilha estava tomando café e olhou pro pão na mesa. 'Aurora, de onde VEM esse pão?' Aurora sorriu: 'Do padeiro… que comprou o TRIGO de um agricultor do CAMPO… que plantou na terra… olha só, Brilha: pra o pão chegar aqui, muita gente TRABALHOU — no campo E na cidade.'",
    imagemUrl: campo,
  },

  // 2 · PREVISÃO
  momento02_previsao: {
    instrucao:
      "Aurora colocou um bilhete no caderno de investigação. Leia com atenção.",
    bloco: {
      titulo: "Missão do Trabalho",
      capaImagemUrl: mapa,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DO TRABALHO",
          "",
          "Descubra quem TRABALHA",
          "no CAMPO e quem trabalha",
          "na CIDADE — e como um",
          "ajuda o outro.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: vaca, nome: "Uma vaca" },
        { imagemUrl: padaria, nome: "Uma padaria" },
        { imagemUrl: trem, nome: "Um transporte" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre o TRABALHO das pessoas no campo e na cidade.",
          imagemUrl: campo,
        },
        {
          texto: "Sobre como fazer bolo de aniversário.",
          imagemUrl: maca,
        },
        {
          texto: "Sobre viagens pra outro planeta.",
          imagemUrl: cidade,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Vaca (campo), padaria (cidade) e um transporte pra ligar os dois — é sobre TRABALHO.",
      feedbackErro:
        "Olhe as pistas: uma VACA (campo) e uma PADARIA (cidade). A missão fala do TRABALHO nesses dois lugares.",
    },
  },

  // 3 · VOCABULÁRIO
  momento03_vocabulario: {
    instrucao: "Duas palavras importantes da missão de hoje.",
    cards: [
      {
        palavra: "campo",
        explicacao:
          "É o lugar com muita TERRA, plantação e animais. Fica longe da cidade — tem sítio, fazenda e roça.",
        exemplo:
          "No CAMPO, o agricultor planta arroz e cria galinhas.",
        imagemUrl: campo,
      },
      {
        palavra: "cidade",
        explicacao:
          "É o lugar com muitas CASAS, prédios, ruas, lojas e serviços perto uns dos outros.",
        exemplo:
          "Na CIDADE, o padeiro faz pão e a professora dá aula.",
        imagemUrl: cidade,
      },
    ],
  },

  // 4 · LEITURA GUIADA
  momento04_leituraGuiada: {
    instrucao:
      "Aurora vai LER com você. Repare nas palavras destacadas — são pistas do texto.",
    leitura: {
      titulo: "O pão que veio de longe",
      imagemUrl: padaria,
      legendaImagem: "Padaria da cidade — cheia de pão quentinho.",
      destacar: ["campo", "cidade", "agricultor", "padeiro", "caminhão"],
      paragrafos: [
        "No CAMPO, o agricultor acorda cedo, planta o TRIGO na terra, rega e espera crescer. Também cuida das vacas e das galinhas.",
        "Depois de colhido, o trigo vai num CAMINHÃO até a CIDADE. Lá o padeiro pega a farinha, mistura com água e sal e faz o pão quentinho.",
        "Você vai na padaria, compra o pão e come em casa. Pra chegar até você, muita gente trabalhou — no campo E na cidade. Os dois lugares se AJUDAM.",
      ],
    },
  },

  // 5 · COMPREENSÃO
  momento05_compreensao: {
    instrucao:
      "As respostas estão TODAS no texto. Volte lá se precisar.",
    perguntas: [
      {
        pergunta: "Quem PLANTA o trigo?",
        opcoes: [
          "O padeiro na cidade",
          "O agricultor no campo",
          "A professora na escola",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! É o AGRICULTOR, lá no CAMPO.",
        feedbackErro:
          "O primeiro parágrafo diz: 'o agricultor… planta o TRIGO'.",
        ondeEstaNoTexto:
          "…o agricultor acorda cedo, planta o TRIGO na terra…",
      },
      {
        pergunta: "Como o trigo vai do campo pra cidade?",
        opcoes: ["Num caminhão", "Nadando no rio", "Voando sozinho"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! No CAMINHÃO.",
        feedbackErro:
          "O texto diz: 'o trigo vai num CAMINHÃO até a cidade'.",
        ondeEstaNoTexto: "…o trigo vai num CAMINHÃO até a CIDADE…",
      },
      {
        pergunta: "Quem faz o PÃO na cidade?",
        opcoes: ["O motorista", "O padeiro", "O agricultor"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! O PADEIRO faz o pão.",
        feedbackErro:
          "O segundo parágrafo diz: 'o padeiro… faz o pão quentinho'.",
        ondeEstaNoTexto: "…o padeiro pega a farinha… e faz o pão…",
      },
    ],
  },

  // 6 · PERSONAGENS & CENÁRIO — profissão × lugar
  momento06_personagensCenario: {
    instrucao:
      "Cada profissão trabalha num LUGAR. Vamos ver se você reparou.",
    perguntas: [
      {
        pergunta: "Onde o AGRICULTOR trabalha?",
        opcoes: ["Na cidade grande", "No campo", "Dentro do ônibus"],
        opcoesImagens: [cidade, campo, carro],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Agricultor trabalha no CAMPO.",
        feedbackErro:
          "AGRICULTOR planta e cria animais — isso é no CAMPO.",
      },
      {
        pergunta: "Onde a PROFESSORA costuma trabalhar?",
        opcoes: ["Na escola da cidade", "No meio da roça", "No mercado"],
        opcoesImagens: [escola, campo, mercado],
        correta: 0,
        feedbackAcerto:
          "🎉 Certo! Escola é um lugar típico da CIDADE.",
        feedbackErro:
          "PROFESSORA trabalha na ESCOLA — que fica na cidade.",
      },
      {
        pergunta: "Quem CUIDA das VACAS e das galinhas?",
        opcoes: ["O padeiro", "O agricultor", "O motorista de trem"],
        opcoesImagens: [padaria, vaca, trem],
        correta: 1,
        feedbackAcerto: "🎉 Boa! É o AGRICULTOR lá no campo.",
        feedbackErro:
          "O texto diz: '(o agricultor) também cuida das vacas e das galinhas'.",
      },
    ],
  },

  // 7 · SEQUÊNCIA — o caminho do pão
  momento07_sequencia: {
    instrucao:
      "Coloque a história do PÃO em ordem: começo → meio → fim.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        {
          id: "s1",
          texto: "O agricultor PLANTA o trigo no campo.",
          imagemUrl: semente,
        },
        {
          id: "s2",
          texto: "O caminhão LEVA o trigo até a cidade.",
          imagemUrl: trem,
        },
        {
          id: "s3",
          texto: "O padeiro FAZ o pão e você compra na padaria.",
          imagemUrl: padaria,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto:
        "🎉 Perfeito! Plantou → transportou → virou pão. Campo e cidade se AJUDAM.",
      feedbackErro:
        "Pense: PRIMEIRO planta (campo). DEPOIS transporta. POR FIM vira pão (cidade).",
    },
  },

  // 8 · LEITURA INDEPENDENTE
  momento08_leituraIndependente: {
    instrucao:
      "Agora leia sozinho e responda as duas perguntas.",
    leitura: {
      titulo: "Trabalhos da cidade",
      imagemUrl: cidade,
      destacar: ["professora", "padeiro", "médico", "motorista", "cidade"],
      paragrafos: [
        "Na CIDADE tem MUITOS tipos de trabalho perto uns dos outros. A PROFESSORA ensina na escola. O PADEIRO faz pão. O MÉDICO cuida da saúde no posto. O MOTORISTA leva as pessoas de ônibus.",
        "Cada pessoa faz um trabalho diferente — e todo mundo se ajuda pra a cidade FUNCIONAR bem.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem CUIDA da saúde no posto?",
        opcoes: ["A professora", "O médico", "O motorista"],
        opcoesImagens: [professora, postoSaude, carro],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O MÉDICO cuida da saúde.",
        feedbackErro:
          "O texto diz: 'O MÉDICO cuida da saúde no posto'.",
        ondeEstaNoTexto: "…O MÉDICO cuida da saúde no posto…",
      },
      {
        pergunta: "Quem LEVA as pessoas de ônibus?",
        opcoes: ["A cozinheira", "O motorista", "O agricultor"],
        opcoesImagens: [cozinheira, carro, vaca],
        correta: 1,
        feedbackAcerto: "🎉 Boa! O MOTORISTA.",
        feedbackErro:
          "O texto diz: 'O MOTORISTA leva as pessoas de ônibus'.",
        ondeEstaNoTexto: "…O MOTORISTA leva as pessoas de ônibus…",
      },
    ],
  },

  // MINIJOGO — "Campo ou Cidade?" reaproveita arquitetoLugar
  momento_minijogo: {
    titulo: "🚜 Campo ou Cidade?",
    instrucao:
      "Cada rodada mostra uma CENA de trabalho. Escolha o LUGAR certo pra ela: campo ou cidade.",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Campo ou Cidade?",
      bloco: {
        instrucao:
          "Olhe o TRABALHO que está acontecendo. Toque na resposta certa embaixo.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Ordenhando a vaca",
              emojiLugar: "🐄",
              emojiMorador: "👩‍🌾",
              pista:
                "Uma pessoa está TIRANDO O LEITE da vaca bem cedo. Esse trabalho é onde?",
            },
            opcoes: [
              { id: "campo", nome: "No CAMPO", imagemUrl: campo },
              { id: "cidade", nome: "Na CIDADE", imagemUrl: cidade },
              { id: "escola", nome: "Na escola", imagemUrl: escola },
            ],
            correta: "campo",
            feedbackAcerto:
              "🎉 Isso! Criar vaca e tirar leite é trabalho do CAMPO.",
            feedbackErro:
              "Vaca vive na TERRA, no CAMPO. É lá que se tira o leite.",
          },
          {
            id: "r2",
            cenario: {
              nome: "Fazendo pão",
              emojiLugar: "🥖",
              emojiMorador: "👨‍🍳",
              pista:
                "O padeiro está tirando o pão QUENTINHO do forno da padaria. Esse trabalho é onde?",
            },
            opcoes: [
              { id: "cidade", nome: "Na CIDADE", imagemUrl: padaria },
              { id: "campo", nome: "No CAMPO", imagemUrl: campo },
              { id: "rio", nome: "No meio do rio", imagemUrl: trem },
            ],
            correta: "cidade",
            feedbackAcerto:
              "🎉 Certo! Padaria é típica da CIDADE.",
            feedbackErro:
              "PADARIA fica na CIDADE — perto das casas.",
          },
          {
            id: "r3",
            cenario: {
              nome: "Cuidando da plantação",
              emojiLugar: "🌱",
              emojiMorador: "🚜",
              pista:
                "Uma família REGA a plantação de tomate e cuida do galinheiro. É trabalho de onde?",
            },
            opcoes: [
              { id: "campo", nome: "No CAMPO", imagemUrl: regador },
              { id: "cidade", nome: "Na CIDADE", imagemUrl: cidade },
              { id: "posto", nome: "No posto de saúde", imagemUrl: postoSaude },
            ],
            correta: "campo",
            feedbackAcerto:
              "🎉 Boa! Plantação e galinheiro são coisas do CAMPO.",
            feedbackErro:
              "Plantar e criar galinha é trabalho do CAMPO.",
          },
          {
            id: "r4",
            cenario: {
              nome: "Dando aula",
              emojiLugar: "🏫",
              emojiMorador: "👩‍🏫",
              pista:
                "A professora está ensinando as crianças a ler na sala de aula. É trabalho de onde?",
            },
            opcoes: [
              { id: "cidade", nome: "Na CIDADE (escola)", imagemUrl: escola },
              { id: "campo", nome: "No meio do pasto", imagemUrl: vaca },
              { id: "mercado", nome: "Dentro do mercado", imagemUrl: mercado },
            ],
            correta: "cidade",
            feedbackAcerto:
              "🎉 Isso! ESCOLA fica na CIDADE.",
            feedbackErro:
              "PROFESSORA dá aula na ESCOLA, que fica na CIDADE.",
          },
        ],
        feedbackFinal:
          "Você virou um verdadeiro Investigador do Trabalho! O CAMPO produz o que a gente come; a CIDADE transforma, vende e usa. Um AJUDA o outro.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "CAMPO = lugar de terra, plantação e criação de animais.",
      "CIDADE = lugar com muitas casas, lojas e serviços perto.",
      "Agricultor trabalha no CAMPO; padeiro, professora, médico e motorista trabalham na CIDADE.",
      "O que a gente come na cidade quase sempre VEM DO CAMPO — os dois lugares se AJUDAM.",
    ],
    miniDesafio: {
      pergunta:
        "Por que o campo e a cidade precisam UM DO OUTRO?",
      opcoes: [
        "Porque não gostam de ficar sozinhos",
        "Porque o campo produz comida e a cidade transforma, vende e usa",
        "Porque um copia o outro",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! CAMPO produz, CIDADE transforma e usa. Trabalham JUNTOS.",
      feedbackErro:
        "O campo PRODUZ o alimento; a cidade TRANSFORMA e USA. Por isso se ajudam.",
    },
  },

  // 10 · AVALIAÇÃO
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que a gente encontra no CAMPO?",
        opcoes: [
          "Muitos prédios e ônibus",
          "Plantação e animais na terra",
          "Só shopping",
        ],
        correta: 1,
        feedbackAcerto: "🎉 CAMPO = terra, plantação e animais.",
        feedbackErro:
          "No CAMPO tem PLANTAÇÃO e ANIMAIS — não prédio.",
      },
      {
        pergunta: "2/5 — O que a gente encontra na CIDADE?",
        opcoes: [
          "Muita rua, casas e lojas perto",
          "Só mato e pasto",
          "Só galinha correndo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 CIDADE = casas, ruas e lojas perto.",
        feedbackErro:
          "CIDADE tem muita CASA, RUA e LOJA junto.",
      },
      {
        pergunta: "3/5 — Onde o AGRICULTOR trabalha?",
        opcoes: ["No campo", "Na escola", "No shopping"],
        correta: 0,
        feedbackAcerto: "🎉 No CAMPO — plantando e criando animais.",
        feedbackErro:
          "AGRICULTOR trabalha no CAMPO.",
      },
      {
        pergunta: "4/5 — Onde o PADEIRO trabalha?",
        opcoes: ["No pasto", "Na padaria da cidade", "Na plantação"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Na PADARIA, na cidade.",
        feedbackErro:
          "PADEIRO faz pão na PADARIA — que fica na CIDADE.",
      },
      {
        pergunta: "5/5 — De onde vem o LEITE que você toma?",
        opcoes: [
          "Nasce direto na caixinha",
          "Da VACA, lá no campo",
          "Da máquina do mercado",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! O leite vem da VACA, no CAMPO. Depois chega na cidade.",
        feedbackErro:
          "O leite vem da VACA (campo). Depois é transportado até a cidade.",
      },
    ],
  },

  // 11 · MISSÃO EM FAMÍLIA
  momento11_missaoFamilia: {
    titulo: "🚜 Investigador do Trabalho",
    materiais: [
      "Papel e lápis",
      "Um adulto pra conversar",
    ],
    passos: [
      "1) A criança escolhe 3 comidas da casa (ex.: leite, pão, banana).",
      "2) Pergunta pro adulto: 'De onde vem?' — do CAMPO, da CIDADE, ou dos dois.",
      "3) Desenha um caminho: 🌾 CAMPO → 🚚 CAMINHÃO → 🏙️ CIDADE → 🏠 nossa casa.",
      "4) Escolhe UMA profissão da família e diz se ela é mais do CAMPO ou da CIDADE.",
    ],
    registro:
      "📸 Uma foto do desenho do caminho da comida, do campo até a mesa.",
  },

  recompensa: {
    xp: 220,
    moedas: 130,
    medalha: "Investigador(a) do Trabalho",
  },
};

// helper só pra manter o array `pistas` legível acima
function caminhao(img: string) {
  return img;
}
