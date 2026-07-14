import type { AulaPortuguesV4 } from "../../types";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as postoSaude } from "@/assets/neuro-treino/objetos/posto-saude.png.asset.json";
import { url as mercado } from "@/assets/neuro-treino/objetos/mercado.png.asset.json";
import { url as padaria } from "@/assets/neuro-treino/objetos/padaria.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as praca } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as pontoOnibus } from "@/assets/neuro-treino/objetos/ponto-onibus.png.asset.json";
import { url as lixeiraReciclagem } from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png.asset.json";
import { url as funcionarioLimpeza } from "@/assets/neuro-treino/objetos/funcionario-limpeza.png.asset.json";
import { url as cozinheira } from "@/assets/neuro-treino/objetos/cozinheira.png.asset.json";
import { url as professora } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as bibliotecario } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as bairro } from "@/assets/neuro-treino/objetos/bairro.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as pao } from "@/assets/neuro-treino/objetos/padaria.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 2 · Aula 02
 * "Os Serviços do Meu Município" — EF02GE06
 *
 * A criança reconhece que o lugar onde vive tem SERVIÇOS
 * (escola, posto de saúde, mercado, padaria, biblioteca,
 * limpeza urbana, transporte) e que cada serviço é feito
 * por PESSOAS que trabalham pra que o município funcione.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-servicos-do-municipio",
  titulo: "Os Serviços do Meu Município",
  iconeTrilha: "🏥",
  bncc: ["EF02GE06"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Aurora foi passear no bairro",
    historia:
      "Aurora saiu com Brilha pra andar no bairro e foi contando: 'Olha, Brilha! Cada CASA aqui usa um monte de coisas que vem de FORA — pão da PADARIA, remédio do POSTO DE SAÚDE, aula na ESCOLA. Tudo isso é SERVIÇO do município — feito por pessoas que trabalham pra gente viver bem.'",
    imagemUrl: bairro,
  },

  momento02_previsao: {
    instrucao: "Aurora deixou um cartaz na porta da padaria. Leia.",
    bloco: {
      titulo: "Missão dos Serviços",
      capaImagemUrl: bairro,
      recado: {
        rotulo: "Bilhete da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DOS SERVIÇOS",
          "",
          "Descubra os LUGARES",
          "e as PESSOAS que",
          "cuidam do nosso município:",
          "escola, posto, padaria,",
          "mercado, limpeza…",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: escola, nome: "A ESCOLA" },
        { imagemUrl: postoSaude, nome: "O POSTO de saúde" },
        { imagemUrl: mercado, nome: "O MERCADO" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre os SERVIÇOS do município e as pessoas que fazem eles.",
          imagemUrl: bairro,
        },
        {
          texto: "Sobre viajar de barco pelo mar.",
          imagemUrl: praca,
        },
        {
          texto: "Sobre construir foguetes.",
          imagemUrl: mapa,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Os SERVIÇOS do município — e as pessoas que trabalham neles.",
      feedbackErro:
        "As pistas mostram escola, posto e mercado. É sobre os SERVIÇOS do município.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da missão de hoje.",
    cards: [
      {
        palavra: "serviço público",
        explicacao:
          "É uma AJUDA que o município oferece pra todo mundo: escola, posto de saúde, praça, coleta de lixo. Não é loja — é feito PRA CUIDAR das pessoas.",
        exemplo: "A ESCOLA é um serviço público — todos podem estudar.",
        imagemUrl: escola,
      },
      {
        palavra: "comércio",
        explicacao:
          "São LUGARES onde a gente COMPRA coisas: mercado, padaria, farmácia. Eles vendem produtos que a família usa em casa.",
        exemplo: "Fomos ao MERCADO comprar arroz e leite.",
        imagemUrl: mercado,
      },
      {
        palavra: "trabalhador",
        explicacao:
          "É a PESSOA que faz o serviço acontecer: professor, médico, padeiro, gari, motorista. Cada um cuida de uma parte do município.",
        exemplo: "A PROFESSORA é uma trabalhadora da escola.",
        imagemUrl: professora,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você. Repare nas palavras destacadas.",
    leitura: {
      titulo: "Um dia no bairro da Brilha",
      imagemUrl: bairro,
      legendaImagem: "Cada porta do bairro tem um serviço diferente.",
      destacar: [
        "escola",
        "posto de saúde",
        "padaria",
        "mercado",
        "biblioteca",
        "gari",
      ],
      paragrafos: [
        "De manhã cedo, Brilha viu o GARI passando na rua com a lixeira. É ele que RECOLHE o lixo pra rua ficar limpa. Isso é um SERVIÇO do município.",
        "Depois, o pai levou Brilha na ESCOLA. Ali, a PROFESSORA ensina, a COZINHEIRA faz a merenda e o(a) DIRETOR(A) cuida de tudo. A escola é um SERVIÇO PÚBLICO.",
        "Na volta, passaram na PADARIA (pra comprar pão) e no MERCADO (pra comprar leite). Padaria e mercado são COMÉRCIO — vendem produtos.",
        "À tarde, foram no POSTO DE SAÚDE tomar vacina. Enfermeiro e médico cuidam da SAÚDE das pessoas. Também é serviço público.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "Quem recolhe o LIXO da rua?",
        opcoes: ["A professora", "O gari", "O padeiro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O GARI cuida da limpeza da rua.",
        feedbackErro:
          "O texto diz: 'É ele que RECOLHE o lixo pra rua ficar limpa'. É o GARI.",
        ondeEstaNoTexto: "…o GARI passando na rua com a lixeira…",
      },
      {
        pergunta: "Quem faz a MERENDA na escola?",
        opcoes: ["A cozinheira", "O médico", "O motorista de ônibus"],
        correta: 0,
        feedbackAcerto: "🎉 A COZINHEIRA faz a merenda.",
        feedbackErro:
          "O texto diz: 'a COZINHEIRA faz a merenda'.",
        ondeEstaNoTexto: "…a COZINHEIRA faz a merenda…",
      },
      {
        pergunta: "Onde a gente COMPRA pão?",
        opcoes: ["No posto de saúde", "Na padaria", "Na biblioteca"],
        correta: 1,
        feedbackAcerto: "🎉 Na PADARIA! Ela é um comércio.",
        feedbackErro:
          "O texto diz: 'passaram na PADARIA (pra comprar pão)'.",
        ondeEstaNoTexto: "…PADARIA (pra comprar pão)…",
      },
      {
        pergunta: "Onde a gente toma VACINA?",
        opcoes: ["No mercado", "Na escola", "No posto de saúde"],
        correta: 2,
        feedbackAcerto: "🎉 No POSTO DE SAÚDE — cuida da saúde.",
        feedbackErro:
          "O texto diz: 'foram no POSTO DE SAÚDE tomar vacina'.",
        ondeEstaNoTexto: "…foram no POSTO DE SAÚDE tomar vacina…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Cada trabalhador tem um LUGAR onde ele trabalha. Ligue certo.",
    perguntas: [
      {
        pergunta: "Onde a PROFESSORA trabalha?",
        opcoes: ["No mercado", "Na escola", "No posto de saúde"],
        opcoesImagens: [mercado, escola, postoSaude],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Professora → ESCOLA.",
        feedbackErro: "A PROFESSORA trabalha na ESCOLA.",
      },
      {
        pergunta: "Onde o BIBLIOTECÁRIO cuida dos LIVROS?",
        opcoes: ["Na biblioteca", "Na praça", "No mercado"],
        opcoesImagens: [biblioteca, praca, mercado],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Bibliotecário → BIBLIOTECA.",
        feedbackErro: "Quem cuida dos LIVROS trabalha na BIBLIOTECA.",
      },
      {
        pergunta: "Onde a COZINHEIRA da merenda trabalha?",
        opcoes: ["No posto de saúde", "Na padaria", "Na escola"],
        opcoesImagens: [postoSaude, padaria, escola],
        correta: 2,
        feedbackAcerto: "🎉 Isso! Cozinheira da merenda → ESCOLA.",
        feedbackErro:
          "A cozinheira da MERENDA trabalha na ESCOLA.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloca em ordem o passeio de Brilha no bairro (do texto).",
    bloco: {
      instrucao: "Do começo do dia até o fim da tarde.",
      itens: [
        { id: "s1", texto: "1) De manhã, viu o GARI passando com a lixeira.", imagemUrl: funcionarioLimpeza },
        { id: "s2", texto: "2) Depois, foi pra ESCOLA (aula + merenda).", imagemUrl: escola },
        { id: "s3", texto: "3) Na volta, passou na PADARIA e no MERCADO.", imagemUrl: mercado },
        { id: "s4", texto: "4) À tarde, foi no POSTO DE SAÚDE tomar vacina.", imagemUrl: postoSaude },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto:
        "🎉 Perfeito! Gari → escola → padaria/mercado → posto de saúde.",
      feedbackErro:
        "Volte no texto: começa com o GARI de manhã e termina no POSTO à tarde.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda as duas perguntas.",
    leitura: {
      titulo: "A biblioteca do bairro",
      imagemUrl: biblioteca,
      destacar: ["biblioteca", "livros", "bibliotecário", "serviço público"],
      paragrafos: [
        "Perto da escola tem uma BIBLIOTECA. Lá dentro tem prateleira cheia de LIVROS pra qualquer criança pegar emprestado — de graça.",
        "Quem cuida dos livros é o(a) BIBLIOTECÁRIO(A). A biblioteca é um SERVIÇO PÚBLICO: não vende nada, é do município pra todo mundo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem cuida dos LIVROS da biblioteca?",
        opcoes: ["O padeiro", "O bibliotecário", "O médico"],
        opcoesImagens: [padaria, bibliotecario, postoSaude],
        correta: 1,
        feedbackAcerto: "🎉 O(a) BIBLIOTECÁRIO(A) cuida dos livros.",
        feedbackErro:
          "O texto diz: 'Quem cuida dos livros é o(a) BIBLIOTECÁRIO(A)'.",
        ondeEstaNoTexto: "…quem cuida dos livros é o(a) BIBLIOTECÁRIO(A)…",
      },
      {
        pergunta: "A biblioteca VENDE os livros?",
        opcoes: [
          "Sim — é um comércio",
          "Não — é serviço público, empresta de graça",
          "Só nos fins de semana",
        ],
        opcoesImagens: [mercado, livro, biblioteca],
        correta: 1,
        feedbackAcerto:
          "🎉 Boa! A biblioteca é SERVIÇO PÚBLICO — empresta de graça.",
        feedbackErro:
          "O texto diz: 'não vende nada, é do município pra todo mundo'.",
        ondeEstaNoTexto: "…não vende nada, é do município pra todo mundo…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🏥 Serviço ou Comércio?",
    instrucao:
      "Cada rodada mostra um lugar do bairro. Descubra se é SERVIÇO PÚBLICO (município cuida) ou COMÉRCIO (vende produto).",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Serviço ou Comércio?",
      bloco: {
        instrucao: "Olhe o LUGAR e toque na resposta certa embaixo.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Posto de saúde do bairro",
              emojiLugar: "🏥",
              emojiMorador: "🩺",
              pista:
                "Enfermeira dando vacina, sala com médico e balança pra pesar bebê. É serviço ou comércio?",
            },
            opcoes: [
              { id: "servico", nome: "SERVIÇO público", imagemUrl: postoSaude },
              { id: "comercio", nome: "COMÉRCIO", imagemUrl: mercado },
              { id: "praca", nome: "Praça", imagemUrl: praca },
            ],
            correta: "servico",
            feedbackAcerto:
              "🎉 Isso! Posto de saúde é SERVIÇO PÚBLICO — não vende nada.",
            feedbackErro:
              "No POSTO ninguém vende — o município cuida da saúde. É SERVIÇO PÚBLICO.",
          },
          {
            id: "r2",
            cenario: {
              nome: "Padaria da esquina",
              emojiLugar: "🥖",
              emojiMorador: "👨‍🍳",
              pista:
                "Padeiro tirando pão do forno, prateleira com bolo, cliente pagando na caixa. É serviço ou comércio?",
            },
            opcoes: [
              { id: "comercio", nome: "COMÉRCIO", imagemUrl: pao },
              { id: "servico", nome: "SERVIÇO público", imagemUrl: postoSaude },
              { id: "escola", nome: "Escola", imagemUrl: escola },
            ],
            correta: "comercio",
            feedbackAcerto:
              "🎉 Certo! Padaria VENDE pão — é COMÉRCIO.",
            feedbackErro:
              "Na PADARIA o cliente PAGA pelo pão. Isso é COMÉRCIO.",
          },
          {
            id: "r3",
            cenario: {
              nome: "Escola da vila",
              emojiLugar: "🏫",
              emojiMorador: "👩‍🏫",
              pista:
                "Professora dando aula, crianças com caderno, merenda de graça. É serviço ou comércio?",
            },
            opcoes: [
              { id: "servico", nome: "SERVIÇO público", imagemUrl: escola },
              { id: "comercio", nome: "COMÉRCIO", imagemUrl: mercado },
              { id: "posto", nome: "Posto de gasolina", imagemUrl: pontoOnibus },
            ],
            correta: "servico",
            feedbackAcerto:
              "🎉 Isso! Escola pública é SERVIÇO — a criança não paga.",
            feedbackErro:
              "Na ESCOLA pública ninguém paga pra estudar. É SERVIÇO PÚBLICO.",
          },
          {
            id: "r4",
            cenario: {
              nome: "Mercado grande",
              emojiLugar: "🛒",
              emojiMorador: "🧾",
              pista:
                "Prateleira cheia de arroz, frutas, cliente empurrando carrinho, caixa cobrando. É serviço ou comércio?",
            },
            opcoes: [
              { id: "comercio", nome: "COMÉRCIO", imagemUrl: mercado },
              { id: "servico", nome: "SERVIÇO público", imagemUrl: biblioteca },
              { id: "praca", nome: "Praça", imagemUrl: praca },
            ],
            correta: "comercio",
            feedbackAcerto:
              "🎉 Boa! Mercado VENDE produtos — COMÉRCIO.",
            feedbackErro:
              "No MERCADO tudo é PAGO. Isso é COMÉRCIO.",
          },
          {
            id: "r5",
            cenario: {
              nome: "Coleta de lixo na rua",
              emojiLugar: "🚛",
              emojiMorador: "🧹",
              pista:
                "Gari recolhendo saco de lixo, caminhão da prefeitura passando. É serviço ou comércio?",
            },
            opcoes: [
              { id: "servico", nome: "SERVIÇO público", imagemUrl: lixeiraReciclagem },
              { id: "comercio", nome: "COMÉRCIO", imagemUrl: mercado },
              { id: "sitio", nome: "Sítio", imagemUrl: escola },
            ],
            correta: "servico",
            feedbackAcerto:
              "🎉 Isso! Coleta de lixo é SERVIÇO PÚBLICO da prefeitura.",
            feedbackErro:
              "Quem passa recolhendo o lixo é a PREFEITURA. Isso é SERVIÇO PÚBLICO.",
          },
        ],
        feedbackFinal:
          "Você virou detetive do bairro! SERVIÇO PÚBLICO = ajuda de graça pro município (escola, posto, gari). COMÉRCIO = lugar que VENDE (padaria, mercado).",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "SERVIÇO PÚBLICO = feito pelo município pra AJUDAR todos (escola, posto, biblioteca, limpeza).",
      "COMÉRCIO = lugar que VENDE produtos (mercado, padaria, farmácia).",
      "Cada serviço tem TRABALHADORES: professor, gari, cozinheira, bibliotecário, médico…",
      "Todos ajudam o município a FUNCIONAR bem pra todo mundo.",
    ],
    miniDesafio: {
      pergunta: "Uma FARMÁCIA que vende remédio é serviço público ou comércio?",
      opcoes: ["Serviço público", "Comércio", "Nenhum dos dois"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Farmácia VENDE remédio — é COMÉRCIO.",
      feedbackErro:
        "Farmácia COBRA pelo remédio. Isso é COMÉRCIO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é SERVIÇO PÚBLICO?",
        opcoes: [
          "Um lugar que vende coisas",
          "Uma ajuda do município pra todos (escola, posto, biblioteca)",
          "Um brinquedo do parque",
        ],
        correta: 1,
        feedbackAcerto: "🎉 SERVIÇO PÚBLICO = ajuda do município pra todos.",
        feedbackErro:
          "SERVIÇO PÚBLICO é a ajuda que o município oferece de graça.",
      },
      {
        pergunta: "2/5 — Padaria e mercado são…",
        opcoes: ["Serviço público", "Comércio", "Posto de saúde"],
        correta: 1,
        feedbackAcerto: "🎉 São COMÉRCIO — VENDEM produtos.",
        feedbackErro:
          "Padaria e mercado VENDEM coisas. Isso é COMÉRCIO.",
      },
      {
        pergunta: "3/5 — Quem cuida dos LIVROS da biblioteca?",
        opcoes: ["O gari", "O bibliotecário", "O motorista"],
        correta: 1,
        feedbackAcerto: "🎉 O(a) BIBLIOTECÁRIO(A).",
        feedbackErro: "Livro na biblioteca é cuidado pelo BIBLIOTECÁRIO.",
      },
      {
        pergunta: "4/5 — Quem RECOLHE o lixo da rua?",
        opcoes: ["A professora", "O gari", "O padeiro"],
        correta: 1,
        feedbackAcerto: "🎉 O GARI — serviço de limpeza do município.",
        feedbackErro: "É o GARI, do serviço de limpeza da prefeitura.",
      },
      {
        pergunta: "5/5 — O POSTO DE SAÚDE serve pra…",
        opcoes: [
          "Vender pão",
          "Cuidar da saúde de todos, de graça",
          "Guardar livros",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Cuidar da SAÚDE — de graça pro município todo.",
        feedbackErro:
          "POSTO DE SAÚDE cuida da SAÚDE das pessoas, sem cobrar.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏥 Caça aos Serviços",
    materiais: ["Papel e lápis", "Um adulto pra sair um pouco na rua ou olhar da janela"],
    passos: [
      "1) Com um adulto, olhe o BAIRRO (na rua ou pela janela).",
      "2) Anote 3 SERVIÇOS PÚBLICOS que você vê ou conhece perto (ex.: escola, posto de saúde, praça, coleta de lixo).",
      "3) Anote 3 COMÉRCIOS perto (ex.: padaria, mercado, farmácia, salão).",
      "4) Escolha 1 trabalhador do bairro e agradeça (ex.: 'obrigada, seu João!').",
    ],
    registro:
      "📸 Uma foto do seu bairro ou uma lista escrita dos 6 lugares que você encontrou.",
  },

  recompensa: {
    xp: 220,
    moedas: 130,
    medalha: "Detetive do Bairro",
  },
};
