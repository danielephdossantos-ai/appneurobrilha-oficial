import type { AulaPortuguesV4 } from "../../types";
import { url as rua } from "@/assets/neuro-treino/objetos/rua.png.asset.json";
import { url as carro } from "@/assets/neuro-treino/objetos/carro.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as praca } from "@/assets/neuro-treino/objetos/praca.png.asset.json";
import { url as postoSaude } from "@/assets/neuro-treino/objetos/posto-saude.png.asset.json";
import { url as pontoOnibus } from "@/assets/neuro-treino/objetos/ponto-onibus.png.asset.json";
import { url as bicicletaModerna } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as fogo } from "@/assets/neuro-treino/objetos/fogo.png.asset.json";
import { url as lavarMaos } from "@/assets/neuro-treino/objetos/lavar-maos.png.asset.json";
import { url as cidade } from "@/assets/neuro-treino/objetos/cidade.png.asset.json";
import { url as campo } from "@/assets/neuro-treino/objetos/campo.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as setaEsquerda } from "@/assets/neuro-treino/objetos/seta-esquerda.png.asset.json";
import { url as setaDireita } from "@/assets/neuro-treino/objetos/seta-direita.png.asset.json";
import { url as familiaTradicional } from "@/assets/neuro-treino/objetos/familia-tradicional.png.asset.json";
import { url as sabonete } from "@/assets/neuro-treino/objetos/sabonete.png.asset.json";
import { url as lixeira } from "@/assets/neuro-treino/objetos/lixeira.png.asset.json";

/**
 * Geografia · 2º Ano · Unidade 2 · Aula 04
 * "Riscos e cuidados no meu município" — EF02GE08
 *
 * A criança identifica riscos comuns do lugar onde vive
 * (atravessar rua, andar de bici sem capacete, brincar em
 * obra, mexer com fogo, andar em enchente) e aprende
 * atitudes de PREVENÇÃO — o cuidado com o próprio corpo
 * e com quem vive no mesmo município.
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-riscos-e-cuidados",
  titulo: "Riscos e Cuidados no Meu Município",
  iconeTrilha: "🚦",
  bncc: ["EF02GE08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Aurora viu um perigo na rua",
    historia:
      "Aurora e Brilha estavam na esquina. Um menino ia atravessar CORRENDO, sem olhar. Aurora segurou: 'ESPERA! No município tem muito CARRO. A gente precisa de CUIDADO pra viver bem. Vou te mostrar como.'",
    imagemUrl: rua,
  },

  momento02_previsao: {
    instrucao: "Aurora colou um cartaz na parede da escola.",
    bloco: {
      titulo: "Missão dos Cuidados",
      capaImagemUrl: rua,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "🚦",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DOS CUIDADOS",
          "",
          "Descubra os PERIGOS",
          "do seu município e",
          "APRENDA a se proteger.",
          "",
          "Faixa, capacete,",
          "olhar dos dois lados.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: rua, nome: "A RUA com carros" },
        { imagemUrl: bicicletaModerna, nome: "A BICICLETA" },
        { imagemUrl: fogo, nome: "O FOGO" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre CUIDADOS e PERIGOS no lugar onde eu vivo.",
          imagemUrl: rua,
        },
        { texto: "Sobre cantar músicas em coral.", imagemUrl: escola },
        { texto: "Sobre plantar árvores no sítio.", imagemUrl: campo },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Fala dos CUIDADOS pra evitar acidentes no município.",
      feedbackErro:
        "As pistas são RUA, BICI e FOGO. É sobre CUIDADOS.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da missão de hoje.",
    cards: [
      {
        palavra: "risco",
        explicacao:
          "É uma CHANCE de acontecer alguma coisa RUIM — como se machucar. Atravessar sem olhar tem RISCO.",
        exemplo: "Andar na rua sem olhar tem RISCO de atropelamento.",
        imagemUrl: carro,
      },
      {
        palavra: "prevenção",
        explicacao:
          "É o CUIDADO que a gente toma ANTES pra evitar o perigo — usar capacete, olhar dos dois lados, lavar as mãos.",
        exemplo: "USAR capacete é PREVENÇÃO na bicicleta.",
        imagemUrl: sabonete,
      },
      {
        palavra: "faixa de pedestre",
        explicacao:
          "É aquele DESENHO de listras BRANCAS na rua. É POR ALI que a gente atravessa — os carros devem parar.",
        exemplo: "Só atravesse na FAIXA DE PEDESTRE.",
        imagemUrl: rua,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai LER com você. Preste atenção nas palavras destacadas.",
    leitura: {
      titulo: "Cuidados no meu município",
      imagemUrl: rua,
      legendaImagem: "Antes de atravessar, olhe DOS DOIS LADOS.",
      destacar: [
        "risco",
        "faixa de pedestre",
        "capacete",
        "olhar dos dois lados",
        "prevenção",
        "adulto",
      ],
      paragrafos: [
        "A RUA do município tem CARROS, MOTOS e ÔNIBUS passando o tempo todo. Atravessar tem RISCO. Por isso a gente usa a FAIXA DE PEDESTRE e olha primeiro pra ESQUERDA, depois pra DIREITA.",
        "Quando você anda de BICICLETA, use o CAPACETE. Se cair, ele PROTEGE a sua cabeça. Isso é PREVENÇÃO — cuidado antes do problema acontecer.",
        "Nunca mexa com FOGO ou tomada sozinho. Chame SEMPRE um ADULTO. Fogo é bonito, mas queima muito rápido.",
        "Em dias de CHUVA FORTE, não brinque perto de bueiro nem entre em água parada da rua. Fique em casa até passar. O município cuida da gente, mas a gente também se cuida.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto.",
    perguntas: [
      {
        pergunta: "Pra atravessar a rua com segurança, a gente usa…",
        opcoes: ["A faixa de pedestre", "O meio da rua correndo", "O telhado"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A FAIXA DE PEDESTRE.",
        feedbackErro:
          "O texto diz: 'a gente usa a FAIXA DE PEDESTRE'.",
        ondeEstaNoTexto: "…a gente usa a FAIXA DE PEDESTRE…",
      },
      {
        pergunta: "Pra onde olhar PRIMEIRO antes de atravessar?",
        opcoes: ["Só pra cima", "Esquerda, depois direita", "Só pra trás"],
        correta: 1,
        feedbackAcerto:
          "🎉 ESQUERDA primeiro, depois DIREITA.",
        feedbackErro:
          "O texto diz: 'olha primeiro pra ESQUERDA, depois pra DIREITA'.",
        ondeEstaNoTexto:
          "…olha primeiro pra ESQUERDA, depois pra DIREITA…",
      },
      {
        pergunta: "Andando de BICICLETA, o que a gente usa na cabeça?",
        opcoes: ["Chapéu de festa", "Capacete", "Nada"],
        correta: 1,
        feedbackAcerto:
          "🎉 CAPACETE — protege a cabeça se cair.",
        feedbackErro: "O texto diz: 'use o CAPACETE'.",
        ondeEstaNoTexto: "…use o CAPACETE…",
      },
      {
        pergunta: "Encontrei uma tomada solta. O que faço?",
        opcoes: [
          "Enfio o dedo",
          "Chamo um ADULTO",
          "Coloco água",
        ],
        correta: 1,
        feedbackAcerto: "🎉 CHAMA um adulto. SEMPRE.",
        feedbackErro:
          "O texto diz: 'Chame SEMPRE um ADULTO'.",
        ondeEstaNoTexto: "…Chame SEMPRE um ADULTO…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Escolha a atitude MAIS SEGURA pra cada situação.",
    perguntas: [
      {
        pergunta: "Preciso atravessar a rua. Qual é a atitude SEGURA?",
        opcoes: [
          "Sair correndo sem olhar",
          "Parar, olhar dos dois lados, atravessar na faixa",
          "Fechar os olhos e correr",
        ],
        opcoesImagens: [carro, rua, cidade],
        correta: 1,
        feedbackAcerto: "🎉 Isso! PARAR, olhar dos DOIS lados, faixa.",
        feedbackErro:
          "Antes de atravessar, PARE e OLHE os dois lados.",
      },
      {
        pergunta: "Vou andar de bicicleta na praça. O que uso?",
        opcoes: ["Chinelo e sem capacete", "Capacete", "Guarda-chuva"],
        opcoesImagens: [bicicletaModerna, sabonete, chuva],
        correta: 1,
        feedbackAcerto: "🎉 CAPACETE — protege a cabeça.",
        feedbackErro: "Andar de bici PEDE CAPACETE.",
      },
      {
        pergunta: "Voltei da rua. O que fazer PRIMEIRO em casa?",
        opcoes: [
          "Deitar sujo na cama",
          "LAVAR as mãos com água e sabão",
          "Comer com a mão suja",
        ],
        opcoesImagens: [familiaTradicional, lavarMaos, sabonete],
        correta: 1,
        feedbackAcerto:
          "🎉 LAVAR as mãos — cuida da saúde.",
        feedbackErro:
          "Ao voltar da rua, LAVE as mãos com sabão.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordene os passos SEGUROS pra atravessar a rua.",
    bloco: {
      instrucao: "Do primeiro passo → último.",
      itens: [
        { id: "s1", texto: "1) PARAR na calçada, perto da faixa.", imagemUrl: rua },
        { id: "s2", texto: "2) OLHAR pra ESQUERDA.", imagemUrl: setaEsquerda },
        { id: "s3", texto: "3) OLHAR pra DIREITA.", imagemUrl: setaDireita },
        { id: "s4", texto: "4) Se não vier carro, ATRAVESSAR na faixa, andando.", imagemUrl: pontoOnibus },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto:
        "🎉 Perfeito! Parar → esquerda → direita → atravessar.",
      feedbackErro:
        "Primeiro PARE, depois OLHE esquerda, DEPOIS direita, e só então atravesse.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "O dia de chuva no bairro",
      imagemUrl: chuva,
      destacar: ["chuva", "bueiro", "enchente", "adulto"],
      paragrafos: [
        "Choveu MUITO no bairro da Brilha. A água juntou perto do BUEIRO e alagou o começo da rua. Isso é uma ENCHENTE pequena.",
        "A mãe da Brilha disse: 'Fique dentro de casa. NÃO brinque na água da rua — pode ter bicho, doença e bueiro aberto.' Brilha esperou parar. Depois foi tudo tranquilo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que a mãe pediu pra Brilha NÃO brincar na água da rua?",
        opcoes: [
          "Porque era fria demais",
          "Porque pode ter bicho, doença e bueiro aberto",
          "Porque era proibido rir",
        ],
        opcoesImagens: [chuva, postoSaude, praca],
        correta: 1,
        feedbackAcerto:
          "🎉 Pode ter BICHO, DOENÇA e BUEIRO ABERTO.",
        feedbackErro:
          "O texto diz: 'pode ter bicho, doença e bueiro aberto'.",
        ondeEstaNoTexto: "…pode ter bicho, doença e bueiro aberto…",
      },
      {
        pergunta: "O que Brilha fez durante a enchente?",
        opcoes: [
          "Ficou dentro de casa até parar",
          "Foi nadar na rua",
          "Correu no meio dos carros",
        ],
        opcoesImagens: [familiaTradicional, chuva, rua],
        correta: 0,
        feedbackAcerto: "🎉 Ficou EM CASA até passar.",
        feedbackErro:
          "O texto diz: 'Brilha esperou parar. Depois foi tudo tranquilo.'",
        ondeEstaNoTexto: "…Fique dentro de casa…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🚦 Seguro ou Perigoso?",
    instrucao:
      "Cada rodada mostra uma cena. Escolha SEGURO (a atitude cuida da gente) ou PERIGOSO (tem risco).",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Seguro ou Perigoso?",
      bloco: {
        instrucao: "Toque na resposta certa embaixo.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Atravessar sem olhar",
              emojiLugar: "🛣️",
              emojiMorador: "🏃",
              pista: "Menino atravessa a rua CORRENDO, sem olhar pros carros.",
            },
            opcoes: [
              { id: "perigoso", nome: "PERIGOSO", imagemUrl: carro },
              { id: "seguro", nome: "SEGURO", imagemUrl: rua },
              { id: "escola", nome: "Escola", imagemUrl: escola },
            ],
            correta: "perigoso",
            feedbackAcerto:
              "🎉 PERIGOSO! O carro pode não conseguir parar.",
            feedbackErro:
              "Correr sem olhar é PERIGOSO — o motorista pode não ver.",
          },
          {
            id: "r2",
            cenario: {
              nome: "Bicicleta com capacete",
              emojiLugar: "🚲",
              emojiMorador: "🪖",
              pista:
                "Criança andando de BICI com CAPACETE bem preso na cabeça.",
            },
            opcoes: [
              { id: "seguro", nome: "SEGURO", imagemUrl: bicicletaModerna },
              { id: "perigoso", nome: "PERIGOSO", imagemUrl: fogo },
              { id: "praca", nome: "Praça", imagemUrl: praca },
            ],
            correta: "seguro",
            feedbackAcerto:
              "🎉 SEGURO! Capacete PROTEGE a cabeça se cair.",
            feedbackErro:
              "Capacete PROTEGE a cabeça — isso é SEGURO.",
          },
          {
            id: "r3",
            cenario: {
              nome: "Mexer no fogão sozinho",
              emojiLugar: "🔥",
              emojiMorador: "🧒",
              pista:
                "Criança sozinha na cozinha querendo ACENDER o fogo do fogão.",
            },
            opcoes: [
              { id: "perigoso", nome: "PERIGOSO", imagemUrl: fogo },
              { id: "seguro", nome: "SEGURO", imagemUrl: sabonete },
              { id: "posto", nome: "Posto", imagemUrl: postoSaude },
            ],
            correta: "perigoso",
            feedbackAcerto:
              "🎉 PERIGOSO! Fogo só com um ADULTO junto.",
            feedbackErro:
              "Fogo sozinho é PERIGO. Sempre chame um ADULTO.",
          },
          {
            id: "r4",
            cenario: {
              nome: "Lavar as mãos ao chegar",
              emojiLugar: "🚰",
              emojiMorador: "🧼",
              pista:
                "Criança chega da rua e vai LAVAR as mãos com água e sabão antes de comer.",
            },
            opcoes: [
              { id: "seguro", nome: "SEGURO", imagemUrl: lavarMaos },
              { id: "perigoso", nome: "PERIGOSO", imagemUrl: fogo },
              { id: "lixeira", nome: "Lixeira", imagemUrl: lixeira },
            ],
            correta: "seguro",
            feedbackAcerto:
              "🎉 SEGURO! Lavar as mãos evita doença.",
            feedbackErro:
              "Lavar as mãos EVITA doenças. É SEGURO.",
          },
          {
            id: "r5",
            cenario: {
              nome: "Brincar na enchente",
              emojiLugar: "🌧️",
              emojiMorador: "💦",
              pista:
                "Chuva forte, água no meio da rua, e a criança pulando dentro da água suja.",
            },
            opcoes: [
              { id: "perigoso", nome: "PERIGOSO", imagemUrl: chuva },
              { id: "seguro", nome: "SEGURO", imagemUrl: praca },
              { id: "mapa", nome: "Mapa", imagemUrl: mapa },
            ],
            correta: "perigoso",
            feedbackAcerto:
              "🎉 PERIGOSO! Água suja tem doença e bueiro aberto.",
            feedbackErro:
              "Água de enchente tem bicho, doença e bueiro aberto. PERIGOSO.",
          },
        ],
        feedbackFinal:
          "🎉 Você virou GUARDIÃO do município! Faixa + olhar dois lados + capacete + adulto perto do fogo + mãos lavadas + longe da enchente.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "RISCO = chance de acontecer coisa ruim (atropelamento, cair, queimar, ficar doente).",
      "PREVENÇÃO = cuidado ANTES: faixa, olhar dos dois lados, capacete, adulto perto do fogo, mãos lavadas.",
      "FAIXA DE PEDESTRE é o lugar CERTO de atravessar a rua.",
      "Em ENCHENTE: FIQUE em casa, NÃO brinque na água da rua.",
    ],
    miniDesafio: {
      pergunta: "Vou andar de bici. O que é PREVENÇÃO?",
      opcoes: [
        "Andar sem capacete",
        "Colocar o CAPACETE antes de subir na bici",
        "Fechar os olhos",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Colocar o CAPACETE antes é PREVENÇÃO.",
      feedbackErro:
        "PREVENÇÃO é usar o CAPACETE ANTES de andar.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Onde é o lugar CERTO de atravessar a rua?",
        opcoes: ["No meio da rua", "Na faixa de pedestre", "No telhado"],
        correta: 1,
        feedbackAcerto: "🎉 FAIXA DE PEDESTRE.",
        feedbackErro: "Só atravesse na FAIXA DE PEDESTRE.",
      },
      {
        pergunta: "2/5 — Antes de atravessar, olhar pra…",
        opcoes: ["Só pra cima", "Esquerda e depois direita", "Só pra trás"],
        correta: 1,
        feedbackAcerto: "🎉 ESQUERDA e depois DIREITA.",
        feedbackErro: "Olhe ESQUERDA e depois DIREITA.",
      },
      {
        pergunta: "3/5 — Andando de bici, uso na cabeça:",
        opcoes: ["Chapéu de aniversário", "Capacete", "Toalha"],
        correta: 1,
        feedbackAcerto: "🎉 CAPACETE!",
        feedbackErro: "Sempre CAPACETE na bici.",
      },
      {
        pergunta: "4/5 — Vi FOGO ou TOMADA solta. O que faço?",
        opcoes: [
          "Mexo sozinho",
          "Chamo um ADULTO",
          "Jogo água",
        ],
        correta: 1,
        feedbackAcerto: "🎉 CHAMA um ADULTO.",
        feedbackErro:
          "Sempre chame um ADULTO — nunca mexa sozinho.",
      },
      {
        pergunta: "5/5 — Em dia de ENCHENTE, o mais seguro é:",
        opcoes: [
          "Brincar na água da rua",
          "Ficar em casa até passar",
          "Nadar no bueiro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Ficar em CASA até passar.",
        feedbackErro:
          "Água de enchente é PERIGOSA. Fique em casa.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🚦 Guardião do Município",
    materiais: ["Papel e lápis", "Um adulto pra sair com você OU pra conversar"],
    passos: [
      "1) Com um adulto, faça uma LISTA de 3 PERIGOS que existem perto de casa (ex.: rua movimentada, escada sem corrimão, bueiro).",
      "2) Ao lado de cada perigo, escreva 1 CUIDADO (ex.: 'atravessar na faixa', 'segurar no corrimão', 'não chegar perto').",
      "3) Combine com o adulto uma REGRA nova de segurança pra família (ex.: 'sempre capacete na bici').",
      "4) Cole o papel na geladeira pra família toda ver.",
    ],
    registro:
      "📸 Uma foto do papel de REGRAS colado na geladeira.",
  },

  recompensa: {
    xp: 220,
    moedas: 130,
    medalha: "Guardião(ã) do Município",
  },
};
