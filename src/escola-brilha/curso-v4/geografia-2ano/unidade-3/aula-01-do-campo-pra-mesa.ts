import type { AulaPortuguesV4 } from "../../types";
import vaca from "@/assets/neuro-treino/objetos/vaca.png";
import campo from "@/assets/neuro-treino/objetos/campo.png";
import cidade from "@/assets/neuro-treino/objetos/cidade.png";
import mercado from "@/assets/neuro-treino/objetos/mercado.png";
import carro from "@/assets/neuro-treino/objetos/carro.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import mapaPercurso from "@/assets/neuro-treino/objetos/mapa-percurso.png";
import ponte from "@/assets/neuro-treino/objetos/ponte.png";
import padaria from "@/assets/neuro-treino/objetos/padaria.png";
import setaDireita from "@/assets/neuro-treino/objetos/seta-direita.png";
import geladeira from "@/assets/neuro-treino/objetos/geladeira.png";

/**
 * Geografia · 2º Ano · Unidade 3 · Aula 01
 * "Do Campo pra Mesa" — EF02GE07
 *
 * A criança acompanha a JORNADA do leite: fazenda → caminhão →
 * fábrica → mercado → mesa. Usa exclusivamente blocos travados
 * do PlayerPortuguesV4 (mesmo padrão da Unidade 2).
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-do-campo-pra-mesa",
  titulo: "Do Campo pra Mesa",
  iconeTrilha: "🥛",
  bncc: ["EF02GE07"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A caixinha de leite viajou!",
    historia:
      "Brilha pegou uma CAIXINHA DE LEITE gelada na geladeira. Aurora chegou perto: 'Brilha, esse leite fez uma VIAGEM LONGA pra chegar aqui! Ele saiu de uma VACA no CAMPO, andou de caminhão, passou pela fábrica e só depois foi pro MERCADO. Vamos descobrir esse caminho?'",
    imagemUrl: geladeira,
  },

  momento02_previsao: {
    instrucao:
      "Aurora deixou o mapa da viagem. Olhe as pistas e escolha.",
    bloco: {
      titulo: "Missão: A Rota do Leite",
      capaImagemUrl: mapaPercurso,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DA CAIXINHA",
          "",
          "Descubra o CAMINHO",
          "que o LEITE faz",
          "do CAMPO até a sua MESA.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: vaca, nome: "Começa na VACA (campo)" },
        { imagemUrl: carro, nome: "Passa por um caminhão" },
        { imagemUrl: mercado, nome: "Chega no mercado (cidade)" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre o CAMINHO do leite: do CAMPO até a CIDADE.",
          imagemUrl: mapaPercurso,
        },
        { texto: "Sobre voar de balão pra Lua.", imagemUrl: cidade },
        { texto: "Sobre fazer um bolo em casa.", imagemUrl: padaria },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Vamos seguir a rota do leite: campo → caminhão → fábrica → mercado.",
      feedbackErro:
        "Olhe as pistas: VACA, CAMINHÃO e MERCADO. A missão fala do CAMINHO do leite.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da jornada de hoje.",
    cards: [
      {
        palavra: "produção",
        explicacao:
          "É quando alguém FAZ ou COLHE alguma coisa. A vaca dá leite, a horta dá tomate — isso é PRODUZIR no campo.",
        exemplo: "A PRODUÇÃO de leite começa na FAZENDA.",
        imagemUrl: vaca,
      },
      {
        palavra: "transporte",
        explicacao:
          "É levar uma coisa de um lugar pro outro. O CAMINHÃO faz o transporte do leite do campo até a fábrica e o mercado.",
        exemplo: "O TRANSPORTE do leite é feito de caminhão.",
        imagemUrl: carro,
      },
      {
        palavra: "consumo",
        explicacao:
          "É quando a gente USA, come ou bebe alguma coisa. Tomar o leite no café é o CONSUMO.",
        exemplo: "Em casa, a gente faz o CONSUMO do leite no café.",
        imagemUrl: geladeira,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você. Preste atenção nas etapas.",
    leitura: {
      titulo: "A viagem da caixinha de leite",
      imagemUrl: mapaPercurso,
      legendaImagem: "Do campo até a mesa: 4 etapas.",
      destacar: [
        "campo",
        "vaca",
        "caminhão",
        "fábrica",
        "mercado",
        "cidade",
      ],
      paragrafos: [
        "Tudo começa no CAMPO, na fazenda. A VACA come pasto e dá LEITE bem cedinho.",
        "O leite entra num CAMINHÃO grande, gelado por dentro, e viaja pela ESTRADA até a cidade.",
        "Na FÁBRICA, o leite é AQUECIDO pra ficar seguro e é colocado dentro da CAIXINHA.",
        "As caixinhas chegam ao MERCADO da CIDADE. A família compra e leva pra casa — pronto pra tomar!",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "Onde COMEÇA a viagem do leite?",
        opcoes: ["Na fábrica", "No campo (fazenda)", "No mercado"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Começa no CAMPO, com a VACA.",
        feedbackErro: "O texto diz: 'Tudo começa no CAMPO, na fazenda'.",
        ondeEstaNoTexto: "…Tudo começa no CAMPO, na fazenda…",
      },
      {
        pergunta: "Quem TRANSPORTA o leite do campo até a cidade?",
        opcoes: ["Um avião", "Um caminhão gelado", "A própria vaca"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Um CAMINHÃO gelado.",
        feedbackErro:
          "O texto diz: 'O leite entra num CAMINHÃO grande, gelado por dentro'.",
        ondeEstaNoTexto: "…O leite entra num CAMINHÃO grande…",
      },
      {
        pergunta: "O que acontece com o leite na FÁBRICA?",
        opcoes: [
          "Ele é aquecido e colocado na caixinha",
          "Ele vira sorvete de chocolate",
          "Ele volta pra fazenda",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Aquecido e colocado na CAIXINHA.",
        feedbackErro:
          "O texto diz: 'o leite é AQUECIDO… e é colocado dentro da CAIXINHA'.",
        ondeEstaNoTexto:
          "…o leite é AQUECIDO pra ficar seguro e é colocado dentro da CAIXINHA…",
      },
      {
        pergunta: "Onde a família COMPRA a caixinha de leite?",
        opcoes: ["Na fazenda", "No mercado da cidade", "Dentro do caminhão"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! No MERCADO da cidade.",
        feedbackErro:
          "O texto diz: 'As caixinhas chegam ao MERCADO da CIDADE'.",
        ondeEstaNoTexto: "…chegam ao MERCADO da CIDADE…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "Cada etapa da viagem acontece em um LUGAR. Descubra onde.",
    perguntas: [
      {
        pergunta: "Onde a VACA vive e dá leite?",
        opcoes: ["No campo (zona rural)", "Dentro do mercado", "No caminhão"],
        opcoesImagens: [campo, mercado, carro],
        correta: 0,
        feedbackAcerto: "🎉 Isso! VACA vive no CAMPO.",
        feedbackErro: "A vaca vive na fazenda, no CAMPO (zona rural).",
      },
      {
        pergunta: "Onde fica a FÁBRICA e o MERCADO?",
        opcoes: ["No meio do pasto", "Na cidade (zona urbana)", "Em cima de uma árvore"],
        opcoesImagens: [vaca, cidade, campo],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Fábrica e mercado ficam na CIDADE.",
        feedbackErro:
          "FÁBRICA e MERCADO ficam na CIDADE (zona urbana).",
      },
      {
        pergunta: "O CAMINHÃO liga esses dois lugares por qual caminho?",
        opcoes: [
          "Por uma estrada",
          "Por dentro do rio nadando",
          "Por baixo da terra",
        ],
        opcoesImagens: [ponte, campo, mercado],
        correta: 0,
        feedbackAcerto: "🎉 Boa! O caminhão vai pela ESTRADA.",
        feedbackErro:
          "O caminhão usa a ESTRADA pra ligar o campo à cidade.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloca em ORDEM a viagem da caixinha de leite: do primeiro até o último passo.",
    bloco: {
      instrucao: "Do primeiro → último.",
      itens: [
        { id: "s1", texto: "1) A VACA no campo dá o leite.", imagemUrl: vaca },
        { id: "s2", texto: "2) O CAMINHÃO leva o leite pela estrada.", imagemUrl: carro },
        { id: "s3", texto: "3) Na FÁBRICA, o leite vai pra caixinha.", imagemUrl: padaria },
        { id: "s4", texto: "4) No MERCADO, a família compra.", imagemUrl: mercado },
        { id: "s5", texto: "5) Em CASA, a gente toma o leite.", imagemUrl: geladeira },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4", "s5"],
      feedbackAcerto:
        "🎉 Perfeito! Vaca → caminhão → fábrica → mercado → casa. É essa a rota!",
      feedbackErro:
        "Pense do começo: primeiro a VACA dá o leite, depois vem o CAMINHÃO, a FÁBRICA, o MERCADO e por último a CASA.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "O tomate da vovó",
      imagemUrl: campo,
      destacar: ["tomate", "sítio", "caminhão", "mercado", "molho"],
      paragrafos: [
        "A vovó de Brilha planta TOMATE no sítio dela, no campo. Todo mês ela enche caixas e chama o CAMINHÃO.",
        "O caminhão leva os tomates pro MERCADO da cidade. Lá, uma fábrica pega alguns e faz MOLHO em vidrinho. A família de Brilha compra o vidrinho e faz macarrão!",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde os TOMATES são plantados?",
        opcoes: ["No sítio, no campo", "Dentro do mercado", "Na cozinha"],
        opcoesImagens: [campo, mercado, geladeira],
        correta: 0,
        feedbackAcerto: "🎉 Isso! No SÍTIO, no CAMPO.",
        feedbackErro:
          "O texto diz: 'planta TOMATE no sítio dela, no campo'.",
        ondeEstaNoTexto: "…planta TOMATE no sítio dela, no campo…",
      },
      {
        pergunta: "O MOLHO de tomate vem de onde?",
        opcoes: [
          "Nasce direto no supermercado",
          "É feito na fábrica com os tomates do campo",
          "Cai da nuvem",
        ],
        opcoesImagens: [mercado, campo, cidade],
        correta: 1,
        feedbackAcerto:
          "🎉 Boa! A FÁBRICA usa os tomates do campo pra fazer molho.",
        feedbackErro:
          "O texto diz: 'uma fábrica pega alguns e faz MOLHO em vidrinho'.",
        ondeEstaNoTexto: "…uma fábrica pega alguns e faz MOLHO em vidrinho…",
      },
    ],
  },

  // MINIJOGO — "Rota do alimento" (ordenar arrastando cartelas ao alvo)
  momento_minijogo: {
    titulo: "🚚 A Esteira: Do Campo à Mesa",
    instrucao:
      "Cada CARTELA é uma etapa da viagem do alimento. Coloque cada cartela no LUGAR CERTO da rota.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Arrastar para o Alvo",
      bloco: {
        instrucao: "Toque na cartela e depois no lugar da rota onde ela vai.",
        alvos: [
          {
            id: "a1",
            nome: "1º · CAMPO",
            descricao: "Onde o alimento nasce/é criado.",
            imagemUrl: campo,
          },
          {
            id: "a2",
            nome: "2º · CAMINHÃO",
            descricao: "Transporta pela estrada.",
            imagemUrl: carro,
          },
          {
            id: "a3",
            nome: "3º · FÁBRICA/MERCADO",
            descricao: "Prepara e vende na cidade.",
            imagemUrl: mercado,
          },
          {
            id: "a4",
            nome: "4º · CASA",
            descricao: "A família consome.",
            imagemUrl: geladeira,
          },
        ],
        itens: [
          { id: "i1", texto: "🐄 A vaca dá o leite", alvoId: "a1", imagemUrl: vaca },
          { id: "i2", texto: "🚚 Caminhão gelado", alvoId: "a2", imagemUrl: carro },
          { id: "i3", texto: "🏭 Enche a caixinha", alvoId: "a3", imagemUrl: padaria },
          { id: "i4", texto: "🥛 Café da manhã", alvoId: "a4", imagemUrl: geladeira },
          { id: "i5", texto: "🍅 Tomate no pé", alvoId: "a1", imagemUrl: campo },
          { id: "i6", texto: "🛒 Prateleira do mercado", alvoId: "a3", imagemUrl: mercado },
        ],
        feedbackAcerto:
          "🎉 Rota completa! Do CAMPO passa pelo CAMINHÃO, chega na FÁBRICA/MERCADO e termina na sua CASA.",
        feedbackErro:
          "Lembra: primeiro o CAMPO produz, depois o CAMINHÃO transporta, a CIDADE prepara e vende, e a CASA consome.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PRODUÇÃO acontece no CAMPO (fazenda, sítio).",
      "TRANSPORTE é o CAMINHÃO na ESTRADA ligando campo → cidade.",
      "A FÁBRICA e o MERCADO ficam na CIDADE.",
      "O CONSUMO acontece na CASA (a gente come/bebe).",
      "Sem o CAMPO, não tem alimento no mercado.",
    ],
    miniDesafio: {
      pergunta: "Qual a ORDEM certa da viagem de um alimento?",
      opcoes: [
        "Mercado → caminhão → campo → casa",
        "Campo → caminhão → mercado → casa",
        "Casa → mercado → campo → caminhão",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! CAMPO → CAMINHÃO → MERCADO → CASA.",
      feedbackErro:
        "Começa no CAMPO (produção), o CAMINHÃO leva, o MERCADO vende e vai pra CASA.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Onde o LEITE começa a viagem?",
        opcoes: ["No mercado", "No campo, com a vaca", "Na fábrica"],
        correta: 1,
        feedbackAcerto: "🎉 No CAMPO, com a VACA.",
        feedbackErro: "A viagem COMEÇA no CAMPO, com a VACA.",
      },
      {
        pergunta: "2/5 — Quem faz o TRANSPORTE do alimento?",
        opcoes: ["O caminhão", "A geladeira", "O prefeito"],
        correta: 0,
        feedbackAcerto: "🎉 O CAMINHÃO.",
        feedbackErro:
          "Quem TRANSPORTA o alimento pela estrada é o CAMINHÃO.",
      },
      {
        pergunta: "3/5 — Onde ficam a FÁBRICA e o MERCADO?",
        opcoes: ["No campo (zona rural)", "Na cidade (zona urbana)", "Dentro do rio"],
        correta: 1,
        feedbackAcerto: "🎉 Na CIDADE (zona urbana).",
        feedbackErro:
          "FÁBRICA e MERCADO ficam na CIDADE.",
      },
      {
        pergunta: "4/5 — CONSUMO é...",
        opcoes: [
          "Plantar o alimento",
          "Usar, comer ou beber o alimento",
          "Guardar o caminhão",
        ],
        correta: 1,
        feedbackAcerto: "🎉 CONSUMO = usar/comer/beber.",
        feedbackErro:
          "CONSUMO é quando a gente USA/COME/BEBE o alimento em casa.",
      },
      {
        pergunta: "5/5 — Sem o CAMPO, o que acontece no mercado?",
        opcoes: [
          "Nada — o mercado fabrica sozinho",
          "As prateleiras ficam SEM alimentos frescos",
          "O mercado vira uma fazenda",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Sem CAMPO, não tem alimento fresco no mercado.",
        feedbackErro:
          "O mercado DEPENDE do campo. Sem campo → sem alimentos frescos.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🥛 Detetive da Cozinha",
    materiais: ["Papel e lápis", "Alguém da família pra ajudar"],
    passos: [
      "1) Abra a geladeira ou o armário COM UM ADULTO.",
      "2) Escolha UM alimento (ex.: leite, ovo, tomate, arroz, banana).",
      "3) Pergunte: 'De onde isso veio antes de chegar aqui?'",
      "4) Desenhe a ROTA em 4 quadrinhos: CAMPO → CAMINHÃO → MERCADO → CASA.",
    ],
    registro:
      "📸 Uma foto do seu desenho da rota do alimento (4 quadrinhos).",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Explorador(a) da Rota do Alimento",
  },
};
