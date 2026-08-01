import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bau } from "@/assets/neuro-treino/objetos/bau.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Aula 1 — Narrador: quem conta a história
 * -------------------------------------------------------------
 * Abertura da Unidade 6 ("Vozes do Caminho"). Os Exploradores da
 * Redação abrem um baú com dois relatos da MESMA travessia, escritos
 * por vozes diferentes, e descobrem que quem conta a história muda
 * o que a gente enxerga: narrador em 1ª pessoa (personagem, "eu")
 * e narrador em 3ª pessoa (observador de fora, "ele/ela").
 *
 * BNCC: EF35LP27 (identificar o efeito de sentido de recursos), EF04LP24.
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-narrador-1a-3a-pessoa",
  titulo: "Narrador: quem conta a história",
  iconeTrilha: "🧭",
  bncc: ["EF35LP27", "EF04LP24"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O baú com dois relatos da mesma viagem",
    historia:
      "No acampamento dos Exploradores, Aurora encontrou um baú de couro com DOIS relatos escritos sobre a MESMA travessia pelo desfiladeiro — mas os textos pareciam de aventuras diferentes! — Repara — disse ela — um deles fala 'eu vi', 'eu senti medo'... e o outro fala 'ela viu', 'o menino sentiu medo'. É a voz de quem CONTA a história que muda tudo. Vamos abrir o baú e investigar o NARRADOR?",
    imagemUrl: bau,
  },

  momento02_previsao: {
    instrucao:
      "O baú guarda um mapa com dois carimbos: um de pegada (quem caminhou) e um de luneta (quem observou de longe). Antes de ler, imagine o que isso quer dizer.",
    bloco: {
      titulo: "Duas Vozes, Uma Travessia",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: binoculo, nome: "Uma luneta de observador" },
        { imagemUrl: criancasGrupo, nome: "Exploradores caminhando" },
      ],
      pergunta: "Sobre o que esses dois relatos provavelmente tratam?",
      hipoteses: [
        {
          texto: "A mesma travessia contada por quem viveu e por quem observou de fora.",
          imagemUrl: mapa,
        },
        { texto: "Uma receita de comida de acampamento.", imagemUrl: papel },
        { texto: "Uma lista de compras do mercado.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Isso! Os dois carimbos — pegada e luneta — são pista de dois pontos de vista sobre a MESMA travessia.",
      feedbackErro:
        "Pense: um carimbo é de quem CAMINHOU (pegada) e outro é de quem OBSERVOU de fora (luneta). Isso é pista de duas vozes contando a mesma coisa.",
      dica: "🧭 Pista de explorador: lembre o que significa “narrador” — é a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras que todo explorador de textos precisa dominar.",
    cards: [
      {
        palavra: "narrador",
        explicacao:
          "É a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra.",
        exemplo:
          "O narrador escolhe o que contar e como contar — por isso a mesma cena pode virar dois textos diferentes.",
        imagemUrl: livro,
      },
      {
        palavra: "1ª pessoa",
        explicacao:
          "É quando o narrador é PERSONAGEM da história e fala 'eu', 'nós'. Ele conta só o que viveu e sentiu de dentro da cena.",
        exemplo: "'Eu atravessei o desfiladeiro com o coração disparado.'",
        imagemUrl: criancasGrupo,
      },
      {
        palavra: "3ª pessoa",
        explicacao:
          "É quando o narrador está DE FORA da história e fala 'ele', 'ela', 'eles'. Ele pode contar o que vários personagens pensam.",
        exemplo: "'Aurora atravessou o desfiladeiro com o coração disparado.'",
        imagemUrl: binoculo,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Caçando as pistas do narrador",
    instrucao:
      "Observe cada trecho e descubra se o narrador está DENTRO da cena (1ª pessoa) ou DE FORA dela (3ª pessoa).",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Narrador em 1ª pessoa",
        explicacao:
          "Na 1ª pessoa, o narrador é um personagem da história e usa 'eu' ou 'nós'. Ele só sabe contar o que viveu, sentiu e viu de dentro da cena — nunca o que se passa na cabeça dos outros.",
        exemplos: [
          {
            palavra: "Eu abri a mochila e senti o cheiro de terra molhada.",
            destaque: "Eu ... senti",
            motivo: "O verbo em 1ª pessoa mostra que quem narra viveu a cena por dentro.",
          },
          {
            palavra: "Nós corremos até a fonte antes que a chuva começasse.",
            destaque: "Nós corremos",
            motivo: "'Nós' indica narrador-personagem, participando junto de outros.",
          },
          {
            palavra: "Meu coração disparou quando ouvi o trovão.",
            destaque: "Meu coração",
            motivo: "O pronome possessivo 'meu' também é marca de narrador em 1ª pessoa.",
          },
        ],
        desafios: [
          {
            molde:
              "'Eu olhei para trás e vi a trilha desaparecendo na neblina.' Esse narrador está em: _",
            opcoes: ["1ª pessoa", "3ª pessoa", "Não é possível saber"],
            correta: 0,
            frase: "Eu olhei para trás e vi a trilha desaparecendo na neblina.",
            feedbackErro: "O uso de 'eu' mostra que o narrador é personagem da cena: 1ª pessoa.",
          },
          {
            molde: "'Eu e meu irmão dividimos a última fruta da mochila.' Esse narrador está em: _",
            opcoes: ["1ª pessoa", "3ª pessoa", "Nenhuma das duas"],
            correta: 0,
            frase: "Eu e meu irmão dividimos a última fruta da mochila.",
            feedbackErro:
              "'Eu' aparece logo no início: o narrador participa da cena, em 1ª pessoa.",
          },
          {
            molde:
              "'Só eu sei o que senti ao ver a cachoeira pela primeira vez.' Esse narrador está em: _",
            opcoes: ["1ª pessoa", "3ª pessoa", "As duas ao mesmo tempo"],
            correta: 0,
            frase: "Só eu sei o que senti ao ver a cachoeira pela primeira vez.",
            feedbackErro:
              "'Eu sei' e 'senti' mostram narrador-personagem contando algo vivido por dentro.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Narrador em 3ª pessoa",
        explicacao:
          "Na 3ª pessoa, o narrador está de fora da história e usa nomes ou 'ele/ela/eles'. Esse narrador pode observar a cena inteira e até contar o que vários personagens fazem ou sentem ao mesmo tempo.",
        exemplos: [
          {
            palavra: "Zeca abriu a mochila e sentiu o cheiro de terra molhada.",
            destaque: "Zeca ... sentiu",
            motivo: "O nome do personagem no lugar de 'eu' indica narrador de fora, em 3ª pessoa.",
          },
          {
            palavra: "Eles correram até a fonte antes que a chuva começasse.",
            destaque: "Eles correram",
            motivo: "'Eles' mostra que quem narra observa o grupo de fora da cena.",
          },
          {
            palavra: "O coração dele disparou quando ouviu o trovão.",
            destaque: "O coração dele",
            motivo: "O pronome 'dele' no lugar de 'meu' é marca de narrador em 3ª pessoa.",
          },
        ],
        desafios: [
          {
            molde:
              "'Aurora olhou para trás e viu a trilha desaparecendo na neblina.' Esse narrador está em: _",
            opcoes: ["3ª pessoa", "1ª pessoa", "Não é possível saber"],
            correta: 0,
            frase: "Aurora olhou para trás e viu a trilha desaparecendo na neblina.",
            feedbackErro: "O nome 'Aurora' no lugar de 'eu' mostra narrador de fora: 3ª pessoa.",
          },
          {
            molde: "'Os irmãos dividiram a última fruta da mochila.' Esse narrador está em: _",
            opcoes: ["3ª pessoa", "1ª pessoa", "Nenhuma das duas"],
            correta: 0,
            frase: "Os irmãos dividiram a última fruta da mochila.",
            feedbackErro: "'Os irmãos' é uma forma de 3ª pessoa: narrador observando de fora.",
          },
          {
            molde:
              "'Ninguém sabia o que ela sentiu ao ver a cachoeira pela primeira vez.' Esse narrador está em: _",
            opcoes: ["3ª pessoa", "1ª pessoa", "As duas ao mesmo tempo"],
            correta: 0,
            frase: "Ninguém sabia o que ela sentiu ao ver a cachoeira pela primeira vez.",
            feedbackErro:
              "'Ela sentiu' mostra que o narrador está de fora, contando sobre outra pessoa: 3ª pessoa.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o primeiro relato do baú. Repare em quem fala e como a voz do narrador aparece nas palavras.",
    leitura: {
      titulo: "Relato 1 — A Travessia (1ª pessoa)",
      imagemUrl: mapa,
      legendaImagem: "O caderno de campo de Aurora",
      destacar: ["eu", "meu coração", "senti"],
      paragrafos: [
        "Eu segurei a corda com as duas mãos e olhei para baixo. Meu coração batia forte. O vento sacudia a ponte de madeira e eu senti medo, mas dei o primeiro passo mesmo assim.",
        "Quando cheguei do outro lado, eu ri alto de alívio. Ninguém mais sabe exatamente o que eu senti naquele instante — só eu vivi aquilo por dentro.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao:
      "Volte ao relato sempre que precisar. As pistas do narrador estão nas palavras usadas.",
    perguntas: [
      {
        pergunta: "Quem conta o Relato 1?",
        opcoes: [
          "Um personagem que viveu a cena, em 1ª pessoa",
          "Alguém de fora observando de longe",
          "Um narrador que não aparece no texto",
        ],
        correta: 0,
        feedbackAcerto:
          "🔍 Isso! O uso de 'eu' e 'meu coração' mostra que quem narra é o próprio personagem.",
        feedbackErro:
          "Releia: o texto usa 'eu', 'meu coração', 'eu senti' — isso é marca de narrador-personagem, em 1ª pessoa.",
        ondeEstaNoTexto: "Eu segurei a corda... Meu coração batia forte... eu senti medo",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Eu segurei a corda... Meu coração batia forte... eu senti medo”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um personagem que viveu a cena, em 1ª pessoa”. O uso de 'eu' e 'meu coração' mostra que quem narra é o próprio personagem. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que o narrador sentiu ao atravessar a ponte?",
        opcoes: ["Tédio", "Medo, mas atravessou mesmo assim", "Raiva"],
        correta: 1,
        feedbackAcerto: "🔍 Boa! 'eu senti medo, mas dei o primeiro passo mesmo assim'.",
        feedbackErro:
          "Releia o primeiro parágrafo — o narrador conta exatamente o que sentiu por dentro.",
        ondeEstaNoTexto: "eu senti medo, mas dei o primeiro passo mesmo assim",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “eu senti medo, mas dei o primeiro passo mesmo assim”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Medo, mas atravessou mesmo assim”. 'eu senti medo, mas dei o primeiro passo mesmo assim'. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora compare com o segundo relato, escrito de fora da cena.",
    perguntas: [
      {
        pergunta:
          "Se um narrador de FORA contasse essa mesma cena, como ele escreveria a primeira frase?",
        opcoes: [
          "'Aurora segurou a corda com as duas mãos e olhou para baixo.'",
          "'Eu segurei a corda com as duas mãos.'",
          "'Nós seguramos a corda com as duas mãos.'",
        ],
        correta: 0,
        feedbackAcerto:
          "🔍 Isso! O narrador de fora usa o nome do personagem ou 'ela' — nunca 'eu' — porque ele não é quem viveu a cena.",
        feedbackErro:
          "Um narrador de fora (3ª pessoa) nomeia o personagem ou usa 'ela/ele', nunca fala como se fosse a própria pessoa.",
        dica: "🧭 Pista de explorador: lembre o que significa “narrador” — é a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “'Aurora segurou a corda com as duas mãos e olhou para baixo.'”. O narrador de fora usa o nome do personagem ou 'ela' — nunca 'eu' — porque ele não é quem viveu a cena. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual é a maior diferença entre 1ª e 3ª pessoa?",
        opcoes: [
          "Em 1ª pessoa só sabemos o que o narrador-personagem sente; em 3ª pessoa, o narrador pode contar mais coisas de fora.",
          "Não existe diferença nenhuma entre elas.",
          "1ª pessoa só serve para poemas.",
        ],
        correta: 0,
        feedbackAcerto:
          "🔍 Exato! O narrador em 1ª pessoa é limitado ao que ele viveu; o de 3ª pessoa pode observar a cena inteira, às vezes até vários personagens.",
        feedbackErro:
          "Pense no ponto de vista: quem está DENTRO da cena (1ª pessoa) só sabe o que sentiu; quem está DE FORA (3ª pessoa) pode contar mais.",
        dica: "🧭 Pista de explorador: lembre o que significa “1ª pessoa” — é quando o narrador é PERSONAGEM da história e fala 'eu', 'nós'. Ele conta só o que viveu e sentiu de dentro da cena. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Em 1ª pessoa só sabemos o que o narrador-personagem sente; em 3ª pessoa, o narrador pode contar mais coisas de fora.”. O narrador em 1ª pessoa é limitado ao que ele viveu; o de 3ª pessoa pode observar a cena inteira, às vezes até vários personagens. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para descobrir o narrador de um texto.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Procurar se aparece 'eu' ou 'nós' no texto.", imagemUrl: lapis },
        {
          id: "p2",
          texto: "Se não aparece 'eu', ver se o texto usa nomes ou 'ele/ela'.",
          imagemUrl: papel,
        },
        {
          id: "p3",
          texto: "Decidir: narrador-personagem (1ª pessoa) ou narrador de fora (3ª pessoa).",
          imagemUrl: livro,
        },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto:
        "🔍 Isso mesmo! Primeiro caçamos o 'eu', depois olhamos os nomes, e só então decidimos o tipo de narrador.",
      feedbackErro:
        "Pense na ordem: primeiro procuramos 'eu/nós', depois nomes ou 'ele/ela', e só no fim concluímos o tipo de narrador.",
      dica: "🧭 Pista de explorador: lembre o que significa “narrador” — é a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo relato para investigar sozinho.",
    leitura: {
      titulo: "Relato 2 — A Travessia (3ª pessoa)",
      imagemUrl: criancasGrupo,
      destacar: ["Aurora", "ela", "seu coração"],
      paragrafos: [
        "Aurora segurou a corda com as duas mãos e olhou para baixo. Seu coração batia forte. O vento sacudia a ponte de madeira e ela sentiu medo, mas deu o primeiro passo mesmo assim.",
        "Quando chegou do outro lado, Aurora riu alto de alívio. De longe, os outros exploradores aplaudiram, sem imaginar o tanto de coragem que aquele passo tinha exigido.",
      ],
    },
    perguntas: [
      {
        pergunta: "Esse relato é narrado em qual pessoa?",
        opcoes: ["1ª pessoa", "3ª pessoa", "Não dá para saber"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! O texto usa 'Aurora' e 'ela' — narrador de fora, em 3ª pessoa.",
        feedbackErro:
          "Repare que o texto nunca usa 'eu' — ele usa o nome 'Aurora' e 'ela'. Isso é 3ª pessoa.",
        ondeEstaNoTexto: "Aurora segurou a corda... ela sentiu medo",
        dica: "🧭 Pista de explorador: volte ao texto e releia este trecho — “Aurora segurou a corda... ela sentiu medo”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “3ª pessoa”. O texto usa 'Aurora' e 'ela' — narrador de fora, em 3ª pessoa. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta:
          "O que o narrador de fora consegue contar que o narrador em 1ª pessoa do Relato 1 não contou?",
        opcoes: [
          "Que os outros exploradores aplaudiram de longe",
          "Que a corda era de madeira",
          "Que havia vento",
        ],
        correta: 0,
        feedbackAcerto:
          "🔍 Exato! O narrador de fora vê a cena inteira, inclusive o que os outros exploradores fizeram — algo que Aurora, contando em 1ª pessoa, não poderia ver de si mesma de fora.",
        feedbackErro:
          "Releia o final: o narrador de fora conta algo que só quem observa de longe conseguiria ver.",
        dica: "🧭 Pista de explorador: lembre o que significa “narrador” — é a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Que os outros exploradores aplaudiram de longe”. O narrador de fora vê a cena inteira, inclusive o que os outros exploradores fizeram — algo que Aurora, contando em 1ª pessoa, não poderia ver de si mesma de fora. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final (Fase 3 · 4º ano)
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "A mesma cena, duas vozes",
        comando:
          "Escreva uma cena curta em 1ª pessoa (usando eu). Depois reescreva a MESMA cena em 3ª pessoa (ele/ela), mostrando como a voz do narrador muda o texto.",
        linhas: 8,
        modelo: [
          "1ª pessoa: Eu abri a janela e senti o cheiro de chuva antes mesmo de ver as nuvens.",
          "3ª pessoa: Ele abriu a janela e sentiu o cheiro de chuva antes mesmo de ver as nuvens.",
          "Na primeira versão sabemos o que ele pensa; na segunda, só o que dá para ver de fora.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
          "Usei pelo menos um conectivo (porque, então, mas, além disso) ligando as ideias.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Mantive a mesma pessoa do verbo dentro de cada versão.",
          "Mostrei a diferença entre contar de dentro e contar de fora.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (Fase 4 · 4º ano · ~110 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: Quem Conta a História",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem conta.",
    texto: [
      "Quando o narrador diz eu, o leitor entra na cabeça do personagem e só enxerga o que ele enxerga.",
      "Quando o narrador diz ele ou ela, a câmera se afasta e passa a mostrar o que acontece com todos, inclusive o que o protagonista não percebeu.",
      "Escolher a voz que conta a história é escolher o que o leitor vai saber — e, principalmente, o que vai continuar escondido até o fim.",
    ],
    metaSegundos: 39,
  },

  momento09_revisao: {
    pontos: [
      "NARRADOR é a voz que conta a história — e essa escolha muda o que a gente enxerga.",
      "Em 1ª PESSOA, o narrador é personagem e usa 'eu/nós' — só sabe o que viveu por dentro.",
      "Em 3ª PESSOA, o narrador está de fora e usa nomes ou 'ele/ela' — pode contar mais da cena.",
      "A mesma história pode ser contada de formas diferentes, dependendo de quem narra.",
    ],
    miniDesafio: {
      pergunta: "'Ele atravessou a ponte com medo, mas não desistiu.' Esse narrador está em...",
      opcoes: ["1ª pessoa", "3ª pessoa", "Nenhuma das duas"],
      correta: 1,
      feedbackAcerto: "🔍 Isso! O uso de 'ele' mostra narrador de fora, em 3ª pessoa.",
      feedbackErro:
        "A palavra 'ele' indica que quem narra está de FORA da cena — isso é 3ª pessoa.",
      dica: "🧭 Pista de explorador: lembre o que significa “narrador” — é a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra. Use essa ideia para eliminar as alternativas que não combinam.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “3ª pessoa”. O uso de 'ele' mostra narrador de fora, em 3ª pessoa. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o narrador de um texto?",
        opcoes: [
          "O autor do livro sempre",
          "A voz que conta a história",
          "O personagem mais forte",
          "Alguém de fora observando de longe",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Narrador é a voz que conta.",
        feedbackErro:
          "Narrador é a VOZ que conta a história — pode ou não ser o autor real do livro.",
        feedbackOpcoes: [
          "❌ “O autor do livro sempre” não é a resposta. Narrador é a VOZ que conta a história — pode ou não ser o autor real do livro.",
          null,
          "❌ “O personagem mais forte” não é a resposta. Narrador é a VOZ que conta a história — pode ou não ser o autor real do livro.",
          "❌ “Alguém de fora observando de longe” não é a resposta. Narrador é a VOZ que conta a história — pode ou não ser o autor real do livro.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “narrador” — é a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A voz que conta a história”. Narrador é a voz que conta. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — Qual frase está em 1ª pessoa?",
        opcoes: [
          "'Eu cruzei o rio correndo.'",
          "'Ela cruzou o rio correndo.'",
          "'O menino cruzou o rio correndo.'",
          "Um narrador que não aparece no texto",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Correto! O 'eu' marca narrador-personagem, em 1ª pessoa.",
        feedbackErro: "1ª pessoa usa 'eu/nós' — só a primeira frase tem essa marca.",
        feedbackOpcoes: [
          null,
          "❌ “'Ela cruzou o rio correndo.'” não é a resposta. 1ª pessoa usa 'eu/nós' — só a primeira frase tem essa marca.",
          "❌ “'O menino cruzou o rio correndo.'” não é a resposta. 1ª pessoa usa 'eu/nós' — só a primeira frase tem essa marca.",
          "❌ “Um narrador que não aparece no texto” não é a resposta. 1ª pessoa usa 'eu/nós' — só a primeira frase tem essa marca.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “1ª pessoa” — é quando o narrador é PERSONAGEM da história e fala 'eu', 'nós'. Ele conta só o que viveu e sentiu de dentro da cena. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “'Eu cruzei o rio correndo.'”. O 'eu' marca narrador-personagem, em 1ª pessoa. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — Qual frase está em 3ª pessoa?",
        opcoes: [
          "'Eu tremia de frio.'",
          "'Nós tremíamos de frio.'",
          "'Pedro tremia de frio.'",
          "'Eu segurei a corda com as duas mãos.'",
        ],
        correta: 2,
        feedbackAcerto: "🔍 Isso! O nome 'Pedro' mostra narrador de fora, em 3ª pessoa.",
        feedbackErro: "3ª pessoa usa nomes ou 'ele/ela' — repare em qual frase isso acontece.",
        feedbackOpcoes: [
          "❌ “'Eu tremia de frio.'” não é a resposta. 3ª pessoa usa nomes ou 'ele/ela' — repare em qual frase isso acontece.",
          "❌ “'Nós tremíamos de frio.'” não é a resposta. 3ª pessoa usa nomes ou 'ele/ela' — repare em qual frase isso acontece.",
          null,
          "❌ “'Eu segurei a corda com as duas mãos.'” não é a resposta. 3ª pessoa usa nomes ou 'ele/ela' — repare em qual frase isso acontece.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “3ª pessoa” — é quando o narrador está DE FORA da história e fala 'ele', 'ela', 'eles'. Ele pode contar o que vários personagens pensam. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “'Pedro tremia de frio.'”. O nome 'Pedro' mostra narrador de fora, em 3ª pessoa. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Por que o narrador de fora (3ª pessoa) pode contar mais da cena?",
        opcoes: [
          "Porque ele observa de fora, sem estar limitado ao que só um personagem sentiu",
          "Porque ele mente mais",
          "Porque ele nunca aparece no texto",
          "'Nós seguramos a corda com as duas mãos.'",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Estar de fora dá ao narrador uma visão mais ampla da cena.",
        feedbackErro:
          "O narrador de fora não está preso ao ponto de vista de um só personagem — por isso enxerga mais.",
        feedbackOpcoes: [
          null,
          "❌ “Porque ele mente mais” não é a resposta. O narrador de fora não está preso ao ponto de vista de um só personagem — por isso enxerga mais.",
          "❌ “Porque ele nunca aparece no texto” não é a resposta. O narrador de fora não está preso ao ponto de vista de um só personagem — por isso enxerga mais.",
          "❌ “'Nós seguramos a corda com as duas mãos.'” não é a resposta. O narrador de fora não está preso ao ponto de vista de um só personagem — por isso enxerga mais.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “narrador” — é a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque ele observa de fora, sem estar limitado ao que só um personagem sentiu”. Estar de fora dá ao narrador uma visão mais ampla da cena. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — Nos dois relatos da travessia, o que MUDOU de um para o outro?",
        opcoes: [
          "Os fatos da história",
          "Só a voz que conta — o narrador — e o que ela consegue enxergar",
          "Nada mudou",
          "Não existe diferença nenhuma entre elas.",
        ],
        correta: 1,
        feedbackAcerto:
          "🔍 Isso! Os fatos são os mesmos, mas o NARRADOR muda o ponto de vista. Mistério do baú resolvido! 🌟",
        feedbackErro:
          "Os fatos da travessia são iguais — o que muda é quem conta e o que essa voz consegue ver.",
        feedbackOpcoes: [
          "❌ “Os fatos da história” não é a resposta. Os fatos da travessia são iguais — o que muda é quem conta e o que essa voz consegue ver.",
          null,
          "❌ “Nada mudou” não é a resposta. Os fatos da travessia são iguais — o que muda é quem conta e o que essa voz consegue ver.",
          "❌ “Não existe diferença nenhuma entre elas.” não é a resposta. Os fatos da travessia são iguais — o que muda é quem conta e o que essa voz consegue ver.",
        ],
        dica: "🧭 Pista de explorador: lembre o que significa “narrador” — é a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra. Use essa ideia para eliminar as alternativas que não combinam.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Só a voz que conta — o narrador — e o que ela consegue enxergar”. Os fatos são os mesmos, mas o NARRADOR muda o ponto de vista. Mistério do baú resolvido! 🌟. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: a mesma cena, duas vozes",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escolham juntos uma cena do dia (ex.: o café da manhã, uma brincadeira).",
      "2) Escrevam um parágrafo curto contando essa cena em 1ª pessoa ('eu fiz...').",
      "3) Depois, reescrevam a MESMA cena em 3ª pessoa, usando o nome da pessoa ou 'ele/ela'.",
      "4) Leiam os dois textos em voz alta e conversem: o que mudou entre eles?",
    ],
    registro: "🗣️ Registrem por escrito ou em áudio os dois parágrafos criados pela família.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
