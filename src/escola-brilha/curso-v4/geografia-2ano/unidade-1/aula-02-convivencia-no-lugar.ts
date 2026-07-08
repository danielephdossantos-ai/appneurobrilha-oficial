import type { AulaPortuguesV4 } from "../../types";
import bairro from "@/assets/neuro-treino/objetos/bairro.png";
import praca from "@/assets/neuro-treino/objetos/praca.png";
import abraco from "@/assets/neuro-treino/objetos/abraco.png";
import ajudar from "@/assets/neuro-treino/objetos/ajudar.png";
import compartilhar from "@/assets/neuro-treino/objetos/compartilhar.png";
import criancasGrupo from "@/assets/neuro-treino/objetos/criancas-grupo.png";
import familia from "@/assets/neuro-treino/objetos/familia-tradicional.png";
import familiaGrande from "@/assets/neuro-treino/objetos/familia-grande.png";
import idoso from "@/assets/neuro-treino/objetos/idoso.png";
import bebe from "@/assets/neuro-treino/objetos/bebe.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import patioEscola from "@/assets/neuro-treino/objetos/patio-escola.png";
import lixeiraReciclagem from "@/assets/neuro-treino/objetos/lixeira-reciclagem.png";
import lixeira from "@/assets/neuro-treino/objetos/lixeira.png";
import pontoOnibus from "@/assets/neuro-treino/objetos/ponto-onibus.png";
import mercado from "@/assets/neuro-treino/objetos/mercado.png";
import padaria from "@/assets/neuro-treino/objetos/padaria.png";
import postoSaude from "@/assets/neuro-treino/objetos/posto-saude.png";
import bola from "@/assets/neuro-treino/objetos/bola.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import cachorro from "@/assets/neuro-treino/objetos/cachorro.png";

/**
 * Geografia · 2º Ano · Unidade 1 · Aula 02
 * "Convivência no Lugar" — EF02GE02
 *
 * Segue o mesmo contrato AulaPortuguesV4 e o padrão visual travado
 * da Aula 01. Nenhum bloco visual novo; só reaproveita ilustrações
 * já existentes em src/assets/neuro-treino/objetos/.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-convivencia-no-lugar",
  titulo: "Vizinhos do meu Lugar",
  iconeTrilha: "🤝",
  bncc: ["EF02GE02"],
  duracaoMin: 15,

  // 1 · MOTIVAÇÃO
  momento01_motivacao: {
    titulo: "Uma tarde na praça",
    historia:
      "Brilha saiu com a Aurora pra passear no bairro. Na praça, ele viu MUITA gente diferente: crianças brincando, uma vovó sentada, um vizinho passeando com o cachorro e o padeiro chamando pra experimentar pão quentinho. Aurora sorriu: 'Repara, Brilha — as pessoas do LUGAR onde a gente mora fazem parte da nossa vida!'",
    imagemUrl: praca,
  },

  // 2 · PREVISÃO
  momento02_previsao: {
    instrucao:
      "Aurora deixou um RECADO no mural da praça. Leia com atenção e imagine sobre o que vai ser a missão.",
    bloco: {
      titulo: "Missão dos Vizinhos",
      capaImagemUrl: bairro,
      recado: {
        rotulo: "Recado no mural",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO DOS VIZINHOS",
          "",
          "Descubra QUEM mora perto",
          "e como a gente convive",
          "no LUGAR onde vive.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: praca, nome: "Uma praça" },
        { imagemUrl: criancasGrupo, nome: "Crianças" },
        { imagemUrl: idoso, nome: "Um vovô" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        {
          texto: "Sobre as PESSOAS do bairro e como a gente convive com elas.",
          imagemUrl: familiaGrande,
        },
        {
          texto: "Sobre como plantar tomate no quintal.",
          imagemUrl: flor,
        },
        {
          texto: "Sobre estrelas que caem do céu.",
          imagemUrl: estrela,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! As pistas mostram PRAÇA, CRIANÇAS e um VOVÔ — a missão fala das pessoas do nosso lugar.",
      feedbackErro:
        "Olhe as pistas: praça, crianças, vovô. A missão fala das PESSOAS que dividem o lugar com a gente.",
    },
  },

  // 3 · VOCABULÁRIO
  momento03_vocabulario: {
    instrucao:
      "Duas palavras que vão aparecer bastante na missão de hoje.",
    cards: [
      {
        palavra: "vizinho",
        explicacao:
          "É a pessoa que MORA PERTO da sua casa — do lado, em cima, embaixo ou na mesma rua.",
        exemplo:
          "Dona Rosa é minha vizinha: ela mora na casa ao lado.",
        imagemUrl: idoso,
      },
      {
        palavra: "convivência",
        explicacao:
          "É o jeito das pessoas VIVEREM JUNTAS num mesmo lugar — se ajudando, se respeitando e brincando.",
        exemplo:
          "Na praça tem BOA CONVIVÊNCIA: cada um cuida do lugar e das outras pessoas.",
        imagemUrl: abraco,
      },
    ],
  },

  // 4 · LEITURA GUIADA
  momento04_leituraGuiada: {
    instrucao:
      "Aurora vai LER com você. Preste atenção nas palavras em amarelo — elas são pistas.",
    leitura: {
      titulo: "A praça é de todo mundo",
      imagemUrl: praca,
      legendaImagem: "Uma praça do bairro num dia de sol.",
      destacar: ["vizinhos", "praça", "convivência", "respeito", "ajudar"],
      paragrafos: [
        "Todo dia, muita gente diferente passa na praça: crianças pra brincar, vovós pra conversar, adultos com cachorros e o padeiro levando pão quentinho pros clientes.",
        "Essas pessoas são os nossos vizinhos. A gente CONVIVE com elas no mesmo lugar — na rua, na praça e na padaria.",
        "Pra a convivência ser BOA, todo mundo precisa RESPEITAR o lugar (não jogar lixo no chão) e AJUDAR quem precisa (segurar a porta, dar o lugar no banco).",
      ],
    },
  },

  // 5 · COMPREENSÃO
  momento05_compreensao: {
    instrucao:
      "As respostas estão TODAS escritas no texto. Volte lá se precisar.",
    perguntas: [
      {
        pergunta: "Quem passa na praça todo dia?",
        opcoes: [
          "Só crianças pequenas",
          "Muita gente diferente: crianças, vovós, adultos e o padeiro",
          "Ninguém — a praça fica vazia",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! O texto diz que passa MUITA gente diferente na praça.",
        feedbackErro:
          "Olhe o primeiro parágrafo — o texto lista várias pessoas diferentes.",
        ondeEstaNoTexto:
          "…crianças pra brincar, vovós pra conversar, adultos com cachorros e o padeiro…",
      },
      {
        pergunta: "O que é CONVIVER com os vizinhos?",
        opcoes: [
          "Morar longe deles",
          "Viver junto com eles no mesmo LUGAR",
          "Não olhar pra ninguém",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Boa! CONVIVER = viver junto no mesmo lugar.",
        feedbackErro:
          "O segundo parágrafo diz: 'a gente CONVIVE com elas no mesmo lugar'.",
        ondeEstaNoTexto:
          "…a gente CONVIVE com elas no mesmo lugar…",
      },
      {
        pergunta: "Pra a convivência ser BOA, o que todo mundo precisa fazer?",
        opcoes: [
          "Correr o mais rápido que puder",
          "RESPEITAR o lugar e AJUDAR quem precisa",
          "Ficar em casa o dia inteiro",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! RESPEITAR o lugar e AJUDAR — a fórmula da boa convivência.",
        feedbackErro:
          "Olhe o último parágrafo — está bem depois de 'todo mundo precisa'.",
        ondeEstaNoTexto:
          "…RESPEITAR o lugar (…) e AJUDAR quem precisa…",
      },
    ],
  },

  // 6 · PERSONAGENS & CENÁRIO
  momento06_personagensCenario: {
    instrucao:
      "Cada pessoa do bairro tem um LUGAR onde ela costuma estar. Vamos ver se você reparou.",
    perguntas: [
      {
        pergunta: "Onde as crianças costumam BRINCAR no bairro?",
        opcoes: ["Na padaria", "Na praça", "No posto de saúde"],
        opcoesImagens: [padaria, praca, postoSaude],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! A PRAÇA é o lugar de brincar do bairro.",
        feedbackErro:
          "O texto começou falando das crianças brincando na PRAÇA.",
      },
      {
        pergunta: "Quem leva o PÃO quentinho pros clientes?",
        opcoes: ["O padeiro", "O médico", "O motorista de ônibus"],
        opcoesImagens: [padaria, postoSaude, pontoOnibus],
        correta: 0,
        feedbackAcerto:
          "🎉 Certo! Quem faz e leva o pão é o PADEIRO, lá da padaria.",
        feedbackErro:
          "O texto diz: 'o padeiro levando pão quentinho pros clientes'.",
      },
    ],
  },

  // 7 · SEQUÊNCIA — chegou um vizinho novo
  momento07_sequencia: {
    instrucao:
      "Chegou um vizinho NOVO na rua. Coloque a história em ordem — começo, meio e fim.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        {
          id: "s1",
          texto: "Um caminhão de mudança para na rua. É uma família NOVA chegando.",
          imagemUrl: bairro,
        },
        {
          id: "s2",
          texto: "Os vizinhos vão até a porta, cumprimentam e ajudam a carregar as caixas.",
          imagemUrl: ajudar,
        },
        {
          id: "s3",
          texto: "Todo mundo brinca junto na praça — a família nova já é do bairro!",
          imagemUrl: praca,
        },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto:
        "🎉 Perfeito! Assim é a boa convivência: recebe, ajuda e brinca junto.",
      feedbackErro:
        "Pense: primeiro CHEGA a mudança. Depois os vizinhos AJUDAM. Por último, todo mundo BRINCA junto.",
    },
  },

  // 8 · LEITURA INDEPENDENTE
  momento08_leituraIndependente: {
    instrucao:
      "Agora leia sozinho e responda as duas perguntas.",
    leitura: {
      titulo: "As palavras mágicas",
      imagemUrl: coracao,
      destacar: ["obrigado", "por favor", "com licença", "desculpa"],
      paragrafos: [
        "Existem palavras que ajudam MUITO na convivência. A gente chama de PALAVRAS MÁGICAS: por favor, obrigado, com licença e desculpa.",
        "Quando você pede algo com POR FAVOR, agradece com OBRIGADO, pede passagem com COM LICENÇA e reconhece o erro com DESCULPA, a convivência fica leve — e todo mundo fica bem.",
      ],
    },
    perguntas: [
      {
        pergunta: "Que palavra você usa pra AGRADECER?",
        opcoes: ["Desculpa", "Obrigado", "Com licença"],
        opcoesImagens: [ajudar, coracao, abraco],
        correta: 1,
        feedbackAcerto: "🎉 Isso! OBRIGADO é a palavra do agradecimento.",
        feedbackErro:
          "Está no texto: 'agradece com OBRIGADO'.",
        ondeEstaNoTexto: "…agradece com OBRIGADO…",
      },
      {
        pergunta: "Que palavra você usa pra PEDIR PASSAGEM?",
        opcoes: ["Por favor", "Obrigado", "Com licença"],
        opcoesImagens: [compartilhar, coracao, criancasGrupo],
        correta: 2,
        feedbackAcerto:
          "🎉 Boa! COM LICENÇA — quando precisa passar por alguém.",
        feedbackErro:
          "Está no texto: 'pede passagem com COM LICENÇA'.",
        ondeEstaNoTexto: "…pede passagem com COM LICENÇA…",
      },
    ],
  },

  // MINIJOGO — reaproveita o "arquitetoLugar" como
  // "Escolha a atitude certa pro lugar/situação"
  momento_minijogo: {
    titulo: "🤝 Bom Vizinho",
    instrucao:
      "Cada rodada mostra uma CENA do bairro. Escolha a ATITUDE certa pra ter uma boa convivência.",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Bom Vizinho",
      bloco: {
        instrucao:
          "Olhe o LUGAR e o que está acontecendo. Depois toque na ATITUDE certa embaixo.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "No ponto de ônibus",
              emojiLugar: "🚌",
              emojiMorador: "👵",
              pista:
                "Uma vovó chegou depois de você no PONTO DE ÔNIBUS e não tem mais banco livre. O que fazer?",
            },
            opcoes: [
              { id: "ceder", nome: "Ceder o meu lugar pra ela sentar", imagemUrl: idoso },
              { id: "ignorar", nome: "Fingir que não vi", imagemUrl: pontoOnibus },
              { id: "correr", nome: "Correr pra a padaria", imagemUrl: padaria },
            ],
            correta: "ceder",
            feedbackAcerto:
              "🎉 Isso! CEDER o lugar pra quem precisa mais é boa convivência.",
            feedbackErro:
              "Um bom vizinho AJUDA quem precisa: ceder o banco pra vovó é o certo.",
          },
          {
            id: "r2",
            cenario: {
              nome: "Na praça",
              emojiLugar: "🌳",
              emojiMorador: "🧒",
              pista:
                "Uma criança nova chegou na PRAÇA e ficou sozinha, olhando o pessoal jogar bola. O que fazer?",
            },
            opcoes: [
              { id: "convidar", nome: "Convidar pra brincar junto", imagemUrl: bola },
              { id: "ignorar2", nome: "Continuar jogando sem olhar", imagemUrl: praca },
              { id: "ir", nome: "Ir embora da praça", imagemUrl: bairro },
            ],
            correta: "convidar",
            feedbackAcerto:
              "🎉 Perfeito! Chamar pra brincar faz o outro se sentir do LUGAR.",
            feedbackErro:
              "Boa convivência é ACOLHER. Chame pra brincar junto!",
          },
          {
            id: "r3",
            cenario: {
              nome: "Na calçada",
              emojiLugar: "🏘️",
              emojiMorador: "🍎",
              pista:
                "Você tá comendo uma maçã e terminou. O que fazer com o resto?",
            },
            opcoes: [
              { id: "lixeira", nome: "Jogar na lixeira mais perto", imagemUrl: lixeiraReciclagem },
              { id: "chao", nome: "Jogar no chão da calçada", imagemUrl: lixeira },
              { id: "vizinho", nome: "Deixar no portão do vizinho", imagemUrl: bairro },
            ],
            correta: "lixeira",
            feedbackAcerto:
              "🎉 Boa! O LIXO vai na LIXEIRA — assim o bairro fica limpo pra todo mundo.",
            feedbackErro:
              "O bairro é de TODO mundo. Lixo sempre na LIXEIRA — nunca no chão nem no portão do vizinho.",
          },
          {
            id: "r4",
            cenario: {
              nome: "Em casa, à noite",
              emojiLugar: "🌙",
              emojiMorador: "🔊",
              pista:
                "É noite. Seu vizinho está tentando DORMIR. Você quer ouvir música. O que fazer?",
            },
            opcoes: [
              { id: "baixo", nome: "Colocar bem baixinho ou usar fone", imagemUrl: coracao },
              { id: "alto", nome: "Colocar bem alto pra todo mundo ouvir", imagemUrl: familia },
              { id: "gritar", nome: "Gritar pra chamar amigos", imagemUrl: criancasGrupo },
            ],
            correta: "baixo",
            feedbackAcerto:
              "🎉 Isso! De noite a gente RESPEITA o descanso do vizinho — som baixinho.",
            feedbackErro:
              "À noite o vizinho está dormindo. RESPEITE: música baixinha ou fone.",
          },
        ],
        feedbackFinal:
          "Você virou um verdadeiro BOM VIZINHO! Cada atitude sua faz o LUGAR onde você vive ficar melhor pra todo mundo.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "VIZINHO é quem mora perto de você — na sua rua, prédio ou bairro.",
      "CONVIVÊNCIA é viver junto no mesmo lugar, se ajudando e se respeitando.",
      "Palavras mágicas ajudam: por favor, obrigado, com licença, desculpa.",
      "Um bom vizinho AJUDA (ceder banco), ACOLHE (chamar pra brincar) e RESPEITA (lixo na lixeira, som baixo à noite).",
    ],
    miniDesafio: {
      pergunta:
        "Por que é importante cuidar da CONVIVÊNCIA no lugar onde a gente vive?",
      opcoes: [
        "Pra ganhar mais brinquedos",
        "Pra todo mundo viver bem no mesmo LUGAR",
        "Pra ninguém falar com a gente",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! Boa convivência faz o LUGAR ser bom pra todo mundo.",
      feedbackErro:
        "A gente cuida da convivência pra TODO mundo viver bem no mesmo lugar.",
    },
  },

  // 10 · AVALIAÇÃO
  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quem é um VIZINHO?",
        opcoes: [
          "Alguém que mora do outro lado do mundo",
          "Uma pessoa que mora perto da sua casa",
          "Um personagem de desenho",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Vizinho é quem MORA PERTO.",
        feedbackErro:
          "VIZINHO = pessoa que MORA PERTO de você.",
      },
      {
        pergunta: "2/5 — O que quer dizer CONVIVÊNCIA?",
        opcoes: [
          "Viver sozinho num quarto",
          "Viver junto com outras pessoas no mesmo lugar",
          "Correr atrás dos amigos",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Conviver = viver JUNTO.",
        feedbackErro:
          "CONVIVÊNCIA é viver JUNTO com outras pessoas no mesmo LUGAR.",
      },
      {
        pergunta: "3/5 — Uma vovó não tem lugar pra sentar no ônibus. Você…",
        opcoes: [
          "Cede seu lugar",
          "Finge que não viu",
          "Fica de pé com raiva",
        ],
        correta: 0,
        feedbackAcerto: "🎉 CEDE o lugar — atitude de bom vizinho.",
        feedbackErro:
          "Bom vizinho AJUDA quem precisa. Cede o lugar pra vovó.",
      },
      {
        pergunta: "4/5 — Você terminou de comer um doce. Onde vai o papel?",
        opcoes: ["No chão da rua", "Na lixeira", "No jardim do vizinho"],
        opcoesImagens: [bairro, lixeiraReciclagem, flor],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Lixo sempre na LIXEIRA.",
        feedbackErro:
          "Pra o LUGAR ficar limpo pra todo mundo, lixo vai SEMPRE na lixeira.",
      },
      {
        pergunta: "5/5 — Qual dessas é uma palavra MÁGICA da convivência?",
        opcoes: ["Obrigado", "Ai que preguiça", "Sai daí"],
        correta: 0,
        feedbackAcerto:
          "🎉 OBRIGADO é palavra mágica — parabéns, você é um BOM VIZINHO! 🌟",
        feedbackErro:
          "As palavras mágicas são: POR FAVOR, OBRIGADO, COM LICENÇA e DESCULPA.",
      },
    ],
  },

  // 11 · MISSÃO EM FAMÍLIA
  momento11_missaoFamilia: {
    titulo: "🤝 Detetive dos Vizinhos",
    materiais: ["Um adulto pra sair com você", "Papel e lápis (opcional)"],
    passos: [
      "1) Saia com um adulto pra dar uma volta no seu bairro.",
      "2) Descubra o NOME de 3 vizinhos ou pessoas do bairro (padeiro, porteiro, vizinho do lado…).",
      "3) Cumprimente cada um deles com um 'Bom dia!' ou 'Boa tarde!'.",
      "4) Volte pra casa e conte pra família: quem você conheceu e o que cada um faz.",
    ],
    registro:
      "📸 Uma foto do seu bairro ou um pequeno áudio contando quais vizinhos você conheceu.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
    medalha: "Bom Vizinho",
  },
};
