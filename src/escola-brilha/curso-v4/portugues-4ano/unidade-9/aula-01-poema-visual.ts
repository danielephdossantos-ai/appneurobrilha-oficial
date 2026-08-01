import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Unidade 9 · Aula 1 — O Poema que Vira Desenho
 * -------------------------------------------------------------
 * Foco: poema visual/concreto — como o FORMATO, a DISTRIBUIÇÃO e a
 * DIAGRAMAÇÃO das letras na página constroem sentido (CHUVA caindo,
 * ESCADA em degraus, CARACOL em espiral). Também: verso, estrofe, rima
 * e o efeito sonoro/visual do poema.
 * BNCC: EF04LP26, EF35LP02, EF15LP14 (apenas metadado).
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-poema-visual",
  titulo: "O Poema que Vira Desenho",
  iconeTrilha: "🌀",
  bncc: ["EF04LP26", "EF35LP02", "EF15LP14"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Um poema que pinga na página",
    historia:
      "A expedição chegou a um palco cheio de letras penduradas no ar! Brilha olhou para cima e viu a palavra CHUVA escorregando letra por letra, como se estivesse caindo de verdade. — Olha só: as letras não estão em linha reta, elas estão DESENHANDO a própria palavra! Isso é um poema visual. Vamos descobrir como o desenho das letras conta a história?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de subir ao palco dos poemas.",
    bloco: {
      titulo: "O Poema que Vira Desenho",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: lapis, nome: "Letras espalhadas de um jeito diferente" },
        { imagemUrl: estrela, nome: "Uma palavra formando um desenho" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como o formato e a posição das letras na página ajudam a mostrar o sentido do poema.",
          imagemUrl: estrela,
        },
        { texto: "Quantas estrofes cabem numa página de caderno.", imagemUrl: livro },
        { texto: "Como decorar um poema para o recreio.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos descobrir como a DIAGRAMAÇÃO (o jeito de organizar as letras) ajuda a contar o poema.",
      feedbackErro:
        "Pense nas letras penduradas caindo como chuva: elas formam um DESENHO. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: quando a palavra CHUVA cai letra por letra na página, o formato já mostra o sentido, antes mesmo de ler.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora do palco conhece o nome de cada peça do poema.",
    cards: [
      {
        palavra: "poema visual",
        explicacao: "É um poema em que o DESENHO das letras na página também tem sentido, junto com as palavras.",
        exemplo: "A palavra CARACOL escrita em espiral, imitando a casca do bichinho.",
        imagemUrl: estrela,
      },
      {
        palavra: "verso",
        explicacao: "É cada linha de um poema.",
        exemplo: "\"A lua brilha no céu\" pode ser um verso sozinho.",
        imagemUrl: lapis,
      },
      {
        palavra: "estrofe",
        explicacao: "É um grupo de versos, separado por um espaço maior dos outros grupos.",
        exemplo: "Um poema pode ter 2 estrofes de 4 versos cada.",
        imagemUrl: livro,
      },
      {
        palavra: "rima",
        explicacao: "É quando o final de duas ou mais palavras tem o mesmo som.",
        exemplo: "CHUVA rima com UVA e LUVA.",
        imagemUrl: bussola,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Quando a forma da letra vira desenho",
    instrucao: "Veja como o mesmo assunto pode ganhar formatos diferentes na página — e como isso muda o efeito.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "No poema visual, o FORMATO das letras na página ajuda a contar a história",
        explicacao:
          "No poema comum, as palavras ficam em linhas retas, uma embaixo da outra. No poema VISUAL (também chamado de poema concreto), o poeta escolhe outro caminho para as letras: elas podem descer como gotas de CHUVA, subir em degraus como uma ESCADA, ou girar como a casca de um CARACOL. Quando os olhos veem o desenho ANTES de ler a palavra toda, o sentido já começa a chegar: chuva parece cair, escada parece subir, caracol parece rodar. Por isso dizemos que, no poema visual, a diagramação (o jeito de organizar o texto na página) também é parte do significado — não é só decoração.",
        exemplos: [
          {
            palavra: "C\n H\n  U\n   V\n    A",
            destaque: "letras descendo",
            motivo: "Cada letra desce um pouco mais, imitando a chuva caindo.",
          },
          {
            palavra: "E\nS  C\nA    D\nD      A",
            destaque: "letras subindo em degraus",
            motivo: "Cada letra sobe um degrau, como quem sobe uma escada de verdade.",
          },
          {
            palavra: "  C A\n R    R\n A      A\n   C O L",
            destaque: "letras em espiral",
            motivo: "As letras rodam ao redor de um centro, como a casca do caracol.",
          },
        ],
        desafios: [
          {
            molde: "chuv_",
            opcoes: ["a", "oso", "eiro"],
            correta: 0,
            frase: "A palavra CHUVA cai letra por letra na página.",
            feedbackErro: "A palavra é CHUVA — pense na palavra que cai como gotas.",
          },
          {
            molde: "escad_",
            opcoes: ["a", "as", "eiro"],
            correta: 0,
            frase: "A palavra ESCADA sobe em degraus na página.",
            feedbackErro: "A palavra é ESCADA — cada letra vira um degrau.",
          },
          {
            molde: "carac_l",
            opcoes: ["o", "a", "os"],
            correta: 0,
            frase: "A palavra CARACOL gira em espiral na página.",
            feedbackErro: "A palavra é CARACOL — as letras giram como a casca do bichinho.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou a descoberta no diário de bordo da expedição.",
    leitura: {
      titulo: "O Diário do Palco dos Poemas",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["verso", "estrofe", "rima", "poema visual"],
      paragrafos: [
        "Todo poema é feito de VERSOS, que são as linhas do texto. Quando juntamos alguns versos em um grupo, formamos uma ESTROFE.",
        "Muitos poemas usam RIMA: palavras que terminam com o mesmo som, como CHUVA e UVA. A rima deixa o poema com música, gostoso de ouvir.",
        "Mas existe um tipo especial de poema, o POEMA VISUAL. Nele, o poeta não escreve só em linhas retas: ele espalha as letras pela página para DESENHAR o sentido da palavra. A palavra CHUVA pode cair, letra por letra:\nC\n H\n  U\n   V\n    A\nAssim, os olhos já sentem a chuva caindo, antes mesmo de terminar de ler.",
        "No poema visual, a forma na página NÃO é enfeite: ela FAZ PARTE do sentido do poema. Por isso, ler um poema visual é também OLHAR para o desenho que as letras formam.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que é um verso?",
        opcoes: ["Uma linha do poema", "O título do poema", "Um desenho colorido"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Verso é cada linha do poema.",
        feedbackErro: "Releia: 'Todo poema é feito de VERSOS, que são as linhas do texto.'",
        ondeEstaNoTexto: "VERSOS, que são as linhas do texto",
        dica: "🧭 Pista de explorador: releia o começo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Uma linha do poema”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "No poema visual, para que serve o formato das letras na página?",
        opcoes: [
          "Para desenhar o sentido da palavra, como parte do poema",
          "Só para enfeitar, sem nenhum sentido",
          "Para deixar o poema mais difícil de ler",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A forma na página FAZ PARTE do sentido.",
        feedbackErro: "Releia: 'a forma na página NÃO é enfeite: ela FAZ PARTE do sentido do poema.'",
        ondeEstaNoTexto: "ela FAZ PARTE do sentido do poema",
        dica: "🧭 Pista de explorador: releia o último parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Para desenhar o sentido da palavra, como parte do poema”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que é rima?",
        opcoes: [
          "Palavras que terminam com o mesmo som",
          "Palavras escritas em espiral",
          "O nome do poeta",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Rima é o mesmo som no final das palavras.",
        feedbackErro: "Releia: 'RIMA: palavras que terminam com o mesmo som, como CHUVA e UVA.'",
        ondeEstaNoTexto: "palavras que terminam com o mesmo som",
        dica: "🧭 Pista de explorador: pense em CHUVA e UVA.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Palavras que terminam com o mesmo som”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a descoberta e onde ela acontece?",
    perguntas: [
      {
        pergunta: "Onde a expedição descobriu os poemas visuais?",
        opcoes: ["No palco cheio de letras penduradas", "Dentro de uma caverna escura", "No topo de uma montanha nevada"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A expedição chegou a um palco cheio de letras penduradas no ar.",
        feedbackErro: "Releia a motivação: a expedição chegou a um PALCO cheio de letras.",
        dica: "🧭 Pista de explorador: releia a história da motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No palco cheio de letras penduradas”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual palavra Brilha viu 'escorregando' letra por letra?",
        opcoes: ["CHUVA", "ESCADA", "CARACOL"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Brilha viu a palavra CHUVA caindo letra por letra.",
        feedbackErro: "Volte à motivação: Brilha viu a palavra CHUVA escorregando.",
        dica: "🧭 Pista de explorador: releia o começo da história.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “CHUVA”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para ler um poema visual do jeito certo.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Olhe para o desenho formado pelas letras na página.", imagemUrl: estrela },
        { id: "p2", texto: "Observe se as letras sobem, descem ou giram.", imagemUrl: bussola },
        { id: "p3", texto: "Leia a palavra completa, unindo as letras espalhadas.", imagemUrl: lapis },
        { id: "p4", texto: "Pense em como o formato ajuda a mostrar o sentido da palavra.", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para explorar um poema visual.",
      feedbackErro: "Pense: primeiro se observa o desenho, depois se lê a palavra, e só então se pensa no sentido.",
      dica: "🧭 Pista de explorador: os olhos veem o desenho antes de terminar de ler a palavra toda.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um trecho sobre o poeta que inventou poemas visuais na turma.",
    leitura: {
      titulo: "O Caderno de Poesia de Théo",
      imagemUrl: livro,
      destacar: ["poema visual", "espiral", "estrofe"],
      paragrafos: [
        "Théo adorava desenhar e também adorava poesia. Um dia, ele juntou as duas coisas: escreveu a palavra CARACOL em espiral, girando ao redor de um pontinho no meio da folha.",
        "Sua professora ficou encantada: — Isso é um poema visual! A espiral das letras imita a casca do caracol. Depois, embaixo do desenho, Théo escreveu uma pequena estrofe rimada, contando a viagem devagarinha do bichinho pelo jardim.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual palavra Théo escreveu em espiral?",
        opcoes: ["CARACOL", "CHUVA", "ESCADA"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Théo escreveu CARACOL em espiral.",
        feedbackErro: "Releia: 'escreveu a palavra CARACOL em espiral'.",
        ondeEstaNoTexto: "escreveu a palavra CARACOL em espiral",
        dica: "🧭 Pista de explorador: volte ao texto e releia o primeiro parágrafo.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “CARACOL”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que a espiral das letras imitava?",
        opcoes: ["A casca do caracol", "As nuvens de chuva", "Os degraus de uma escada"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! A professora disse: 'A espiral das letras imita a casca do caracol.'",
        feedbackErro: "Releia: 'A espiral das letras imita a casca do caracol.'",
        ondeEstaNoTexto: "A espiral das letras imita a casca do caracol",
        dica: "🧭 Pista de explorador: releia a fala da professora.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A casca do caracol”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Qual desenho combina com a palavra?",
    instrucao: "Marque apenas os arranjos visuais que combinam com o sentido da palavra.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "O Palco dos Arranjos Certos",
      bloco: {
        instrucao: "Pense no sentido da palavra e escolha só os formatos que combinam com ela.",
        pergunta: "Quais arranjos visuais combinam com o sentido da palavra ao lado?",
        opcoes: [
          {
            id: "o1",
            texto: "CHUVA escrita caindo, letra por letra, de cima para baixo (C\\n H\\n  U\\n   V\\n    A)",
            correto: true,
          },
          {
            id: "o2",
            texto: "CHUVA escrita toda numa linha reta, igual a uma lista de compras",
            correto: false,
          },
          {
            id: "o3",
            texto: "ESCADA escrita subindo em degraus, cada letra um pouco mais alta",
            correto: true,
          },
          {
            id: "o4",
            texto: "ESCADA escrita em espiral, girando ao redor de um ponto",
            correto: false,
          },
          {
            id: "o5",
            texto: "CARACOL escrito em espiral, girando ao redor de um centro",
            correto: true,
          },
          {
            id: "o6",
            texto: "CARACOL escrito caindo reto, como gotas de chuva",
            correto: false,
          },
        ],
        feedbackAcerto: "🎉 Excelente! Você escolheu só os arranjos que combinam de verdade com o sentido de cada palavra.",
        feedbackErro: "Pense no movimento da palavra: chuva CAI, escada SOBE, caracol GIRA. O desenho precisa imitar esse movimento.",
        dica: "🧭 Pista de explorador: imagine a palavra 'de verdade' — chuva cai, escada sobe em degraus, caracol gira em espiral.",
      },
    },
  },

  momento_escrita: {
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu poema visual",
        comando:
          "Escolha uma palavra que tenha um movimento ou uma forma (por exemplo: VENTO, ESTRELA, RIO, FOGUETE, BORBOLETA). Desenhe essa palavra com quebras de linha e espaços, imitando o sentido dela. Depois, escreva 1 frase explicando por que você escolheu aquele formato.",
        linhas: 6,
        modelo: [
          "V\n E\n  N\n   T\n    O",
          "(o vento escorrega para o lado, como uma brisa que passa)",
          "Escolhi esse formato porque o vento se move de um lado para o outro, e não cai reto como a chuva.",
        ],
        checklist: [
          "Escolhi uma palavra que tem movimento ou forma.",
          "Usei quebras de linha e espaços para desenhar a palavra.",
          "O formato do meu poema combina com o sentido da palavra.",
          "Escrevi 1 frase explicando por que escolhi aquele formato.",
          "Li em voz alta e imaginei o desenho antes de mostrar para alguém.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: O Palco dos Poemas",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO, imaginando o desenho das letras.",
    texto: [
      "No palco dos poemas, as letras não ficam sempre em linha reta.",
      "Às vezes elas caem como chuva, às vezes sobem como escada, às vezes giram como um caracol.",
      "O desenho das letras ajuda a contar a história antes mesmo de terminarmos de ler.",
    ],
    metaSegundos: 27,
  },

  momento09_revisao: {
    pontos: [
      "Verso é cada linha do poema; estrofe é um grupo de versos.",
      "Rima é quando o final de duas ou mais palavras tem o mesmo som.",
      "Poema visual é aquele em que o FORMATO das letras na página desenha o sentido da palavra.",
      "No poema visual, a diagramação (o jeito de organizar o texto) faz parte do significado, não é só enfeite.",
    ],
    miniDesafio: {
      pergunta: "Qual é o nome do poema em que as letras desenham o sentido da palavra na página?",
      opcoes: ["Poema visual", "Bilhete", "Receita"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! É o poema visual, também chamado de poema concreto.",
      feedbackErro: "Releia a explicação: é o poema em que a forma das letras desenha o sentido.",
      dica: "🧭 Pista de explorador: pense na palavra CHUVA caindo letra por letra.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “Poema visual”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um poema visual?",
        opcoes: [
          "Um poema em que o formato das letras na página desenha o sentido",
          "Um poema que só pode ser cantado",
          "Um poema sem nenhuma palavra",
          "Um poema escrito só com números",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O formato das letras ajuda a mostrar o sentido do poema.",
        feedbackErro: "Lembre: no poema visual, o desenho das letras também tem sentido.",
        feedbackOpcoes: [
          null,
          "❌ Poema visual pode ser lido, não precisa ser cantado.",
          "❌ Poema visual tem palavras, só que organizadas de um jeito diferente.",
          "❌ Poema visual é feito de letras e palavras, não de números.",
        ],
        dica: "🧭 Pista de explorador: pense na palavra CHUVA caindo na página.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Um poema em que o formato das letras na página desenha o sentido”.",
      },
      {
        pergunta: "2/5 — O que é um verso?",
        opcoes: ["Uma linha do poema", "O nome do poeta", "A capa do livro de poesia", "Um desenho sem letras"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Verso é cada linha do poema.",
        feedbackErro: "Verso é a LINHA do poema, não o nome do poeta.",
        feedbackOpcoes: [
          null,
          "❌ O nome do poeta é o autor, não o verso.",
          "❌ A capa do livro não é parte do poema em si.",
          "❌ Um poema é feito de palavras organizadas em versos.",
        ],
        dica: "🧭 Pista de explorador: cada linha escrita é um verso.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Uma linha do poema”.",
      },
      {
        pergunta: "3/5 — Qual arranjo combina com a palavra ESCADA?",
        opcoes: [
          "Letras subindo em degraus, uma mais alta que a outra",
          "Letras caindo em linha reta de cima para baixo",
          "Letras giradas em espiral ao redor de um ponto",
          "Letras todas do mesmo tamanho numa linha só",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! ESCADA sobe em degraus, como uma escada de verdade.",
        feedbackErro: "Pense no movimento de subir: as letras da ESCADA devem subir em degraus.",
        feedbackOpcoes: [
          null,
          "❌ Cair reto combina mais com a palavra CHUVA.",
          "❌ Girar em espiral combina mais com a palavra CARACOL.",
          "❌ Uma linha reta não mostra o movimento de subir.",
        ],
        dica: "🧭 Pista de explorador: escada é para SUBIR, não para cair ou girar.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Letras subindo em degraus, uma mais alta que a outra”.",
      },
      {
        pergunta: "4/5 — O que é rima?",
        opcoes: [
          "Palavras que terminam com o mesmo som",
          "Palavras que começam com a mesma letra",
          "Palavras escritas em espiral",
          "Palavras com o mesmo número de letras",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Rima é o mesmo som no final das palavras.",
        feedbackErro: "Rima tem a ver com o SOM final das palavras, como CHUVA e UVA.",
        feedbackOpcoes: [
          null,
          "❌ Isso seria aliteração, não rima.",
          "❌ Espiral é um tipo de arranjo visual, não rima.",
          "❌ O número de letras não define a rima.",
        ],
        dica: "🧭 Pista de explorador: pense em CHUVA e UVA — o final soa igual.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Palavras que terminam com o mesmo som”.",
      },
      {
        pergunta: "5/5 — Por que a forma das letras na página é importante no poema visual?",
        opcoes: [
          "Porque ela faz parte do sentido do poema, não é só enfeite",
          "Porque deixa o poema mais difícil de copiar",
          "Porque esconde o significado do poema",
          "Porque não tem nenhuma relação com o texto",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! A forma ajuda a mostrar o sentido do poema.",
        feedbackErro: "Releia: 'a forma na página NÃO é enfeite: ela FAZ PARTE do sentido do poema.'",
        feedbackOpcoes: [
          null,
          "❌ A forma não serve para dificultar, e sim para ajudar a entender.",
          "❌ A forma REVELA o sentido, não esconde.",
          "❌ A forma tem tudo a ver com o sentido do texto.",
        ],
        dica: "🧭 Pista de explorador: pense em como CHUVA cai e ESCADA sobe.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Porque ela faz parte do sentido do poema, não é só enfeite”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Poemas visuais em casa",
    materiais: ["Papel e lápis", "Lápis de cor (opcional)"],
    passos: [
      "1) Junto com um adulto, escolham 3 palavras que tenham movimento ou forma (ex.: FOGO, RIO, ESTRELA, BORBOLETA).",
      "2) Desenhem cada palavra letra por letra, imitando o sentido dela na página (subindo, caindo, girando, se espalhando).",
      "3) Leiam os poemas visuais em voz alta, mostrando o desenho enquanto leem.",
      "4) Escolham o poema visual favorito da família e expliquem por que ele ficou legal.",
    ],
    registro: "📝 Uma foto dos 3 poemas visuais desenhados, com o favorito marcado com uma estrela.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
