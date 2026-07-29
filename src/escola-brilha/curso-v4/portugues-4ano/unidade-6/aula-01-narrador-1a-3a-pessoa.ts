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
        { texto: "A mesma travessia contada por quem viveu e por quem observou de fora.", imagemUrl: mapa },
        { texto: "Uma receita de comida de acampamento.", imagemUrl: papel },
        { texto: "Uma lista de compras do mercado.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Isso! Os dois carimbos — pegada e luneta — são pista de dois pontos de vista sobre a MESMA travessia.",
      feedbackErro:
        "Pense: um carimbo é de quem CAMINHOU (pegada) e outro é de quem OBSERVOU de fora (luneta). Isso é pista de duas vozes contando a mesma coisa.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras que todo explorador de textos precisa dominar.",
    cards: [
      {
        palavra: "narrador",
        explicacao: "É a VOZ que conta a história. Pode ser um personagem que viveu os fatos ou alguém de fora que só observa e narra.",
        exemplo: "O narrador escolhe o que contar e como contar — por isso a mesma cena pode virar dois textos diferentes.",
        imagemUrl: livro,
      },
      {
        palavra: "1ª pessoa",
        explicacao: "É quando o narrador é PERSONAGEM da história e fala 'eu', 'nós'. Ele conta só o que viveu e sentiu de dentro da cena.",
        exemplo: "'Eu atravessei o desfiladeiro com o coração disparado.'",
        imagemUrl: criancasGrupo,
      },
      {
        palavra: "3ª pessoa",
        explicacao: "É quando o narrador está DE FORA da história e fala 'ele', 'ela', 'eles'. Ele pode contar o que vários personagens pensam.",
        exemplo: "'Aurora atravessou o desfiladeiro com o coração disparado.'",
        imagemUrl: binoculo,
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
    instrucao: "Volte ao relato sempre que precisar. As pistas do narrador estão nas palavras usadas.",
    perguntas: [
      {
        pergunta: "Quem conta o Relato 1?",
        opcoes: ["Um personagem que viveu a cena, em 1ª pessoa", "Alguém de fora observando de longe", "Um narrador que não aparece no texto"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O uso de 'eu' e 'meu coração' mostra que quem narra é o próprio personagem.",
        feedbackErro: "Releia: o texto usa 'eu', 'meu coração', 'eu senti' — isso é marca de narrador-personagem, em 1ª pessoa.",
        ondeEstaNoTexto: "Eu segurei a corda... Meu coração batia forte... eu senti medo",
      },
      {
        pergunta: "O que o narrador sentiu ao atravessar a ponte?",
        opcoes: ["Tédio", "Medo, mas atravessou mesmo assim", "Raiva"],
        correta: 1,
        feedbackAcerto: "🔍 Boa! 'eu senti medo, mas dei o primeiro passo mesmo assim'.",
        feedbackErro: "Releia o primeiro parágrafo — o narrador conta exatamente o que sentiu por dentro.",
        ondeEstaNoTexto: "eu senti medo, mas dei o primeiro passo mesmo assim",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora compare com o segundo relato, escrito de fora da cena.",
    perguntas: [
      {
        pergunta: "Se um narrador de FORA contasse essa mesma cena, como ele escreveria a primeira frase?",
        opcoes: [
          "'Aurora segurou a corda com as duas mãos e olhou para baixo.'",
          "'Eu segurei a corda com as duas mãos.'",
          "'Nós seguramos a corda com as duas mãos.'",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Isso! O narrador de fora usa o nome do personagem ou 'ela' — nunca 'eu' — porque ele não é quem viveu a cena.",
        feedbackErro: "Um narrador de fora (3ª pessoa) nomeia o personagem ou usa 'ela/ele', nunca fala como se fosse a própria pessoa.",
      },
      {
        pergunta: "Qual é a maior diferença entre 1ª e 3ª pessoa?",
        opcoes: [
          "Em 1ª pessoa só sabemos o que o narrador-personagem sente; em 3ª pessoa, o narrador pode contar mais coisas de fora.",
          "Não existe diferença nenhuma entre elas.",
          "1ª pessoa só serve para poemas.",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! O narrador em 1ª pessoa é limitado ao que ele viveu; o de 3ª pessoa pode observar a cena inteira, às vezes até vários personagens.",
        feedbackErro: "Pense no ponto de vista: quem está DENTRO da cena (1ª pessoa) só sabe o que sentiu; quem está DE FORA (3ª pessoa) pode contar mais.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para descobrir o narrador de um texto.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Procurar se aparece 'eu' ou 'nós' no texto.", imagemUrl: lapis },
        { id: "p2", texto: "Se não aparece 'eu', ver se o texto usa nomes ou 'ele/ela'.", imagemUrl: papel },
        { id: "p3", texto: "Decidir: narrador-personagem (1ª pessoa) ou narrador de fora (3ª pessoa).", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Isso mesmo! Primeiro caçamos o 'eu', depois olhamos os nomes, e só então decidimos o tipo de narrador.",
      feedbackErro: "Pense na ordem: primeiro procuramos 'eu/nós', depois nomes ou 'ele/ela', e só no fim concluímos o tipo de narrador.",
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
        feedbackErro: "Repare que o texto nunca usa 'eu' — ele usa o nome 'Aurora' e 'ela'. Isso é 3ª pessoa.",
        ondeEstaNoTexto: "Aurora segurou a corda... ela sentiu medo",
      },
      {
        pergunta: "O que o narrador de fora consegue contar que o narrador em 1ª pessoa do Relato 1 não contou?",
        opcoes: [
          "Que os outros exploradores aplaudiram de longe",
          "Que a corda era de madeira",
          "Que havia vento",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! O narrador de fora vê a cena inteira, inclusive o que os outros exploradores fizeram — algo que Aurora, contando em 1ª pessoa, não poderia ver de si mesma de fora.",
        feedbackErro: "Releia o final: o narrador de fora conta algo que só quem observa de longe conseguiria ver.",
      },
    ],
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
      feedbackErro: "A palavra 'ele' indica que quem narra está de FORA da cena — isso é 3ª pessoa.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é o narrador de um texto?",
        opcoes: ["O autor do livro sempre", "A voz que conta a história", "O personagem mais forte"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Narrador é a voz que conta.",
        feedbackErro: "Narrador é a VOZ que conta a história — pode ou não ser o autor real do livro.",
      },
      {
        pergunta: "2/5 — Qual frase está em 1ª pessoa?",
        opcoes: ["'Eu cruzei o rio correndo.'", "'Ela cruzou o rio correndo.'", "'O menino cruzou o rio correndo.'"],
        correta: 0,
        feedbackAcerto: "🔍 Correto! O 'eu' marca narrador-personagem, em 1ª pessoa.",
        feedbackErro: "1ª pessoa usa 'eu/nós' — só a primeira frase tem essa marca.",
      },
      {
        pergunta: "3/5 — Qual frase está em 3ª pessoa?",
        opcoes: ["'Eu tremia de frio.'", "'Nós tremíamos de frio.'", "'Pedro tremia de frio.'"],
        correta: 2,
        feedbackAcerto: "🔍 Isso! O nome 'Pedro' mostra narrador de fora, em 3ª pessoa.",
        feedbackErro: "3ª pessoa usa nomes ou 'ele/ela' — repare em qual frase isso acontece.",
      },
      {
        pergunta: "4/5 — Por que o narrador de fora (3ª pessoa) pode contar mais da cena?",
        opcoes: [
          "Porque ele observa de fora, sem estar limitado ao que só um personagem sentiu",
          "Porque ele mente mais",
          "Porque ele nunca aparece no texto",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Estar de fora dá ao narrador uma visão mais ampla da cena.",
        feedbackErro: "O narrador de fora não está preso ao ponto de vista de um só personagem — por isso enxerga mais.",
      },
      {
        pergunta: "5/5 — Nos dois relatos da travessia, o que MUDOU de um para o outro?",
        opcoes: [
          "Os fatos da história",
          "Só a voz que conta — o narrador — e o que ela consegue enxergar",
          "Nada mudou",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Os fatos são os mesmos, mas o NARRADOR muda o ponto de vista. Mistério do baú resolvido! 🌟",
        feedbackErro: "Os fatos da travessia são iguais — o que muda é quem conta e o que essa voz consegue ver.",
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
