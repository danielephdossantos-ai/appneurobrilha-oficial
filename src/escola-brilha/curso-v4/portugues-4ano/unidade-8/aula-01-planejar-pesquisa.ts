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
 * Unidade 8 · Aula 1 — O Mapa da Pesquisa
 * -------------------------------------------------------------
 * Foco: planejamento de pesquisa escolar — transformar curiosidade
 * em pergunta de pesquisa, escolher fontes confiáveis, tomar notas
 * com as próprias palavras e organizar em tópicos.
 * BNCC: EF15LP05, EF35LP17, EF35LP18.
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-planejar-pesquisa",
  titulo: "O Mapa da Pesquisa",
  iconeTrilha: "🔍",
  bncc: ["EF15LP05", "EF35LP17", "EF35LP18"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Uma curiosidade vira mapa de expedição",
    historia:
      "Brilha ficou curioso: — Por que os esquilos enterram nozes no outono? Em vez de sair correndo atrás da primeira resposta que aparecer, ele desenhou um MAPA DA PESQUISA: uma pergunta para guiar o caminho, fontes confiáveis para consultar e um caderninho para anotar as descobertas com suas próprias palavras. Vamos montar esse mapa juntos?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de abrir o mapa da pesquisa.",
    bloco: {
      titulo: "O Mapa da Pesquisa",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: bussola, nome: "Uma bússola apontando caminho" },
        { imagemUrl: livro, nome: "Um livro de fontes confiáveis" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como planejar uma pesquisa: fazer uma pergunta, escolher boas fontes e anotar com as próprias palavras.",
          imagemUrl: estrela,
        },
        { texto: "Como desenhar mapas do tesouro.", imagemUrl: lapis },
        { texto: "Como decorar um caderno com adesivos.", imagemUrl: pergaminho },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos aprender a planejar uma pesquisa de verdade, passo a passo.",
      feedbackErro:
        "Pense na bússola e no livro: eles servem para GUIAR uma investigação. É sobre isso que vamos aprender.",
      dica: "🧭 Pista de explorador: bússola indica caminho e livro indica fonte de informação — some as duas ideias.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora conhece as ferramentas do mapa antes de sair pesquisando.",
    cards: [
      {
        palavra: "pergunta de pesquisa",
        explicacao: "É a pergunta clara que guia toda a investigação, transformando curiosidade em um plano.",
        exemplo: "Curiosidade: 'esquilos e nozes'. Pergunta de pesquisa: 'Por que os esquilos enterram nozes no outono?'",
        imagemUrl: bussola,
      },
      {
        palavra: "fonte confiável",
        explicacao: "É um lugar sério para buscar informação: livro, enciclopédia, site de museu ou universidade.",
        exemplo: "Um livro de ciências da biblioteca é uma fonte confiável.",
        imagemUrl: livro,
      },
      {
        palavra: "boato",
        explicacao: "É uma informação que passa de pessoa para pessoa sem confirmação, muitas vezes errada.",
        exemplo: "Uma mensagem de rede social sem autor nem prova pode ser um boato.",
        imagemUrl: pergaminho,
      },
      {
        palavra: "tópico",
        explicacao: "É um pedacinho organizado das notas, um assunto por vez, para não misturar tudo.",
        exemplo: "Tópico 1: o que é. Tópico 2: onde vive. Tópico 3: curiosidades.",
        imagemUrl: estrela,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Montando o mapa da pesquisa",
    instrucao: "Veja como uma curiosidade solta vira uma pergunta forte e uma fonte confiável de verdade.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Pergunta de pesquisa clara + fonte confiável = pesquisa de verdade",
        explicacao:
          "Uma boa pergunta de pesquisa não pode ser respondida só com 'sim' ou 'não': ela pede explicação. Em vez de 'Esquilos comem nozes?', pergunte 'Por que os esquilos enterram nozes no outono?'. Depois de ter a pergunta, escolha fontes CONFIÁVEIS: livros, enciclopédias e sites de museus ou universidades passam por revisão de especialistas. Já um vídeo sem autor ou uma mensagem de rede social sem prova pode ser um boato — informação espalhada sem confirmação.",
        exemplos: [
          { palavra: "Por que os esquilos enterram nozes no outono?", destaque: "Por que", motivo: "Pergunta aberta, pede explicação — é uma boa pergunta de pesquisa." },
          { palavra: "enciclopédia de animais", destaque: "enciclopédia", motivo: "Fonte confiável, escrita e revisada por especialistas." },
          { palavra: "mensagem sem autor no celular", destaque: "sem autor", motivo: "Sem autor nem prova, pode ser um boato." },
        ],
        desafios: [
          {
            molde: "esquilos comem nozes?",
            opcoes: ["Pergunta fraca (só sim ou não)", "Pergunta de pesquisa forte", "Fonte confiável"],
            correta: 0,
            frase: "'Esquilos comem nozes?' pode ser respondida só com sim, não ajuda a investigar fundo.",
            feedbackErro: "Essa pergunta se responde com 'sim' ou 'não' — é uma pergunta fraca para pesquisa.",
          },
          {
            molde: "site de um museu de ciências",
            opcoes: ["Boato", "Pergunta de pesquisa", "Fonte confiável"],
            correta: 2,
            frase: "Site de museu de ciências é revisado por especialistas: fonte confiável.",
            feedbackErro: "Museu e universidade publicam informação revisada — é uma fonte confiável.",
          },
          {
            molde: "vídeo sem autor, compartilhado no grupo da família",
            opcoes: ["Fonte confiável", "Pergunta de pesquisa", "Boato"],
            correta: 2,
            frase: "Sem autor, sem prova, espalhado de pessoa para pessoa: isso é um boato.",
            feedbackErro: "Vídeo sem autor e sem prova, só compartilhado, é um boato — não uma fonte confiável.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou o passo a passo do mapa no diário de bordo da expedição.",
    leitura: {
      titulo: "O Diário do Mapa da Pesquisa",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["pergunta de pesquisa", "fontes confiáveis", "próprias palavras", "tópicos"],
      paragrafos: [
        "Toda pesquisa começa com uma curiosidade. Mas para investigar direito, é preciso transformar essa curiosidade em uma PERGUNTA DE PESQUISA clara, que não se responda só com 'sim' ou 'não'.",
        "Depois, é hora de escolher as FONTES CONFIÁVEIS: livros, enciclopédias e sites de museus ou universidades. Boatos de redes sociais, sem autor e sem prova, não servem para uma pesquisa de verdade.",
        "Ao ler a fonte, o explorador não copia frase por frase. Ele lê, entende e escreve as ideias com as PRÓPRIAS PALAVRAS no caderninho de notas — assim garante que realmente aprendeu.",
        "Por fim, organiza tudo em TÓPICOS: um assunto de cada vez, como 'o que é', 'onde vive' e 'curiosidades'. Assim a pesquisa fica clara para qualquer pessoa entender.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que é uma pergunta de pesquisa?",
        opcoes: [
          "Uma pergunta clara que não se responde só com 'sim' ou 'não'",
          "Uma pergunta que qualquer pessoa inventa sem pensar",
          "Um título qualquer para o caderno",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A pergunta de pesquisa guia toda a investigação.",
        feedbackErro: "Releia: 'uma PERGUNTA DE PESQUISA clara, que não se responda só com sim ou não.'",
        ondeEstaNoTexto: "uma PERGUNTA DE PESQUISA clara, que não se responda só com 'sim' ou 'não'",
        dica: "🧭 Pista de explorador: releia o primeiro parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Uma pergunta clara que não se responde só com 'sim' ou 'não'”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Quais são exemplos de fontes confiáveis?",
        opcoes: [
          "Livros, enciclopédias e sites de museus ou universidades",
          "Qualquer boato que aparece na rede social",
          "Um vídeo sem autor nenhum",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Essas fontes passam por revisão de especialistas.",
        feedbackErro: "Releia: 'livros, enciclopédias e sites de museus ou universidades.'",
        ondeEstaNoTexto: "livros, enciclopédias e sites de museus ou universidades",
        dica: "🧭 Pista de explorador: são fontes revisadas por especialistas.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Livros, enciclopédias e sites de museus ou universidades”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Por que o explorador não deve copiar a fonte palavra por palavra?",
        opcoes: [
          "Porque escrever com as próprias palavras garante que ele realmente aprendeu",
          "Porque copiar é mais rápido e por isso é proibido",
          "Porque as fontes não têm palavras certas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Escrever com as próprias palavras mostra compreensão de verdade.",
        feedbackErro: "Releia: 'escreve as ideias com as PRÓPRIAS PALAVRAS... assim garante que realmente aprendeu.'",
        ondeEstaNoTexto: "assim garante que realmente aprendeu",
        dica: "🧭 Pista de explorador: releia o terceiro parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque escrever com as próprias palavras garante que ele realmente aprendeu”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz o mapa e como ele nasceu?",
    perguntas: [
      {
        pergunta: "Qual foi a curiosidade que deu origem à pesquisa de Brilha?",
        opcoes: [
          "Por que os esquilos enterram nozes no outono",
          "Por que o céu é escuro à noite",
          "Como fazer um mapa do tesouro",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Foi essa curiosidade que virou a pergunta de pesquisa.",
        feedbackErro: "Releia a motivação: Brilha se perguntou sobre esquilos e nozes no outono.",
        dica: "🧭 Pista de explorador: releia a história da motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Por que os esquilos enterram nozes no outono”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que Brilha desenhou para organizar a investigação?",
        opcoes: ["Um mapa da pesquisa", "Um cartaz de aniversário", "Uma lista de compras"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! O mapa da pesquisa organiza pergunta, fontes e notas.",
        feedbackErro: "Volte à motivação: Brilha desenhou um MAPA DA PESQUISA.",
        dica: "🧭 Pista de explorador: releia o título da aula.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um mapa da pesquisa”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para planejar uma pesquisa escolar.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Transforme a curiosidade em uma pergunta de pesquisa clara.", imagemUrl: bussola },
        { id: "p2", texto: "Escolha fontes confiáveis: livros, enciclopédias, sites de museus ou universidades.", imagemUrl: livro },
        { id: "p3", texto: "Leia com atenção e anote as ideias com as próprias palavras.", imagemUrl: lapis },
        { id: "p4", texto: "Organize as notas em tópicos para apresentar a pesquisa.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho certo do mapa da pesquisa.",
      feedbackErro: "Pense: primeiro se define a pergunta, depois se busca a fonte, depois se anota, e só então se organiza em tópicos.",
      dica: "🧭 Pista de explorador: sem pergunta clara, não dá para escolher a fonte certa.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um bilhete da professora sobre o trabalho de pesquisa.",
    leitura: {
      titulo: "O Bilhete da Professora",
      imagemUrl: arvore,
      destacar: ["pergunta de pesquisa", "duas fontes confiáveis", "boato"],
      paragrafos: [
        "Queridos alunos, para o trabalho sobre árvores da nossa região, cada dupla deve escrever uma pergunta de pesquisa clara e consultar pelo menos duas fontes confiáveis, como um livro de ciências ou o site de um jardim botânico.",
        "Lembrem-se: se encontrarem uma informação em uma mensagem sem autor, desconfiem — pode ser um boato. Anotem tudo com as próprias palavras, separado em tópicos, antes de escrever o texto final.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantas fontes confiáveis cada dupla deve consultar, no mínimo?",
        opcoes: ["Duas", "Nenhuma", "Dez"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O bilhete pede pelo menos duas fontes confiáveis.",
        feedbackErro: "Releia: 'consultar pelo menos duas fontes confiáveis.'",
        ondeEstaNoTexto: "consultar pelo menos duas fontes confiáveis",
        dica: "🧭 Pista de explorador: volte ao primeiro parágrafo do bilhete.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Duas”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que a professora pede para os alunos desconfiarem?",
        opcoes: [
          "De uma mensagem sem autor, que pode ser um boato",
          "De um livro de ciências da biblioteca",
          "Do site de um jardim botânico",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Mensagem sem autor pode ser um boato.",
        feedbackErro: "Releia: 'se encontrarem uma informação em uma mensagem sem autor, desconfiem — pode ser um boato.'",
        ondeEstaNoTexto: "mensagem sem autor... pode ser um boato",
        dica: "🧭 Pista de explorador: releia o segundo parágrafo do bilhete.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “De uma mensagem sem autor, que pode ser um boato”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Fonte confiável ou boato?",
    instrucao: "Marque apenas as fontes CONFIÁVEIS para uma pesquisa escolar.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "A Peneira das Fontes",
      bloco: {
        instrucao: "Pense: quem escreveu isso? Passou por revisão de especialistas ou é só um boato?",
        pergunta: "Quais destas são fontes CONFIÁVEIS para uma pesquisa escolar?",
        opcoes: [
          { id: "o1", texto: "Livro de ciências da biblioteca da escola", imagemUrl: livro, correto: true },
          { id: "o2", texto: "Site oficial de um museu de história natural", imagemUrl: mapa, correto: true },
          { id: "o3", texto: "Enciclopédia infantil revisada por especialistas", imagemUrl: pergaminho, correto: true },
          { id: "o4", texto: "Mensagem sem autor que circula em grupo de família", imagemUrl: estrela, correto: false },
          { id: "o5", texto: "Vídeo de alguém desconhecido, sem fontes citadas", imagemUrl: lapis, correto: false },
          { id: "o6", texto: "Boato ouvido no recreio, sem nenhuma prova", imagemUrl: bussola, correto: false },
        ],
        feedbackAcerto: "🎉 Muito bem! Você separou as fontes confiáveis dos boatos.",
        feedbackErro: "Pense de novo: fontes confiáveis têm autor conhecido e são revisadas (livro, enciclopédia, site de museu/universidade).",
        dica: "🧭 Pista de explorador: se não tem autor nem revisão de especialista, desconfie — pode ser boato.",
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
        titulo: "Meu plano de pesquisa",
        comando:
          "Escreva o seu plano de pesquisa: 1 pergunta de pesquisa clara, 2 fontes confiáveis que você usaria e 3 tópicos para organizar as anotações sobre esse assunto.",
        linhas: 6,
        modelo: [
          "Pergunta de pesquisa: Por que as formigas trabalham em fila?",
          "Fontes confiáveis: livro de ciências da biblioteca; site de um museu de ciências.",
          "Tópicos: 1) O que é uma formiga; 2) Como elas se comunicam; 3) Por que andam em fila.",
        ],
        checklist: [
          "Minha pergunta de pesquisa não se responde só com 'sim' ou 'não'.",
          "Escolhi 2 fontes confiáveis (livro, enciclopédia ou site de museu/universidade).",
          "Organizei minhas ideias em 3 tópicos separados.",
          "Não copiei frases prontas: escrevi com minhas próprias palavras.",
          "Li em voz alta e consertei o que ficou estranho.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: O Mapa da Pesquisa",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO. A meta não é correr: é ler como quem conta.",
    texto: [
      "Toda pesquisa começa com uma pergunta clara, que aponta o caminho como uma bússola.",
      "Depois vem a busca por fontes confiáveis, nunca por boatos sem autor.",
      "No fim, o explorador anota tudo com as próprias palavras e organiza em tópicos, como quem desenha um mapa completo.",
    ],
    metaSegundos: 30,
  },

  momento09_revisao: {
    pontos: [
      "Pergunta de pesquisa é uma pergunta clara que guia a investigação, sem se responder só com 'sim' ou 'não'.",
      "Fontes confiáveis são livros, enciclopédias e sites de museus ou universidades, revisados por especialistas.",
      "Boato é informação espalhada sem autor e sem prova — não serve para pesquisa escolar.",
      "As anotações devem ser feitas com as próprias palavras e organizadas em tópicos.",
    ],
    miniDesafio: {
      pergunta: "Qual destas é uma fonte confiável?",
      opcoes: ["Enciclopédia revisada por especialistas", "Boato do recreio", "Mensagem sem autor"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Enciclopédia revisada é fonte confiável.",
      feedbackErro: "Releia a explicação: fonte confiável tem autor e revisão de especialistas.",
      dica: "🧭 Pista de explorador: pense em quem escreveu e revisou a informação.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “Enciclopédia revisada por especialistas”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma pergunta de pesquisa?",
        opcoes: [
          "Uma pergunta clara que guia a investigação",
          "Qualquer frase com ponto de interrogação",
          "O título do caderno de anotações",
          "Uma pergunta que só se responde com 'sim'",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A pergunta de pesquisa guia toda a investigação.",
        feedbackErro: "Lembre: pergunta de pesquisa é clara e não se responde só com 'sim' ou 'não'.",
        feedbackOpcoes: [
          null,
          "❌ Nem toda frase com interrogação é uma boa pergunta de pesquisa.",
          "❌ O título do caderno não é a pergunta que guia a investigação.",
          "❌ Perguntas que se respondem só com 'sim' são fracas para pesquisa.",
        ],
        dica: "🧭 Pista de explorador: ela precisa pedir explicação, não só sim ou não.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Uma pergunta clara que guia a investigação”.",
      },
      {
        pergunta: "2/5 — Qual destas é uma fonte confiável?",
        opcoes: [
          "Site oficial de uma universidade",
          "Mensagem sem autor no celular",
          "Boato ouvido no recreio",
          "Vídeo de desconhecido sem fontes",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Sites de universidades são revisados por especialistas.",
        feedbackErro: "As outras opções não têm autor confirmado nem revisão de especialistas.",
        feedbackOpcoes: [
          null,
          "❌ Mensagem sem autor não pode ser confirmada, é um boato.",
          "❌ Boato de recreio não tem nenhuma prova.",
          "❌ Vídeo sem fontes citadas não é confiável.",
        ],
        dica: "🧭 Pista de explorador: universidade e museu revisam a informação.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Site oficial de uma universidade”.",
      },
      {
        pergunta: "3/5 — Por que é importante anotar com as próprias palavras?",
        opcoes: [
          "Porque mostra que a pessoa realmente entendeu o assunto",
          "Porque copiar é proibido em qualquer situação",
          "Porque as fontes escrevem errado",
          "Porque assim o texto fica mais curto",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Escrever com as próprias palavras mostra compreensão de verdade.",
        feedbackErro: "Anotar com as próprias palavras garante que você entendeu, não só copiou.",
        feedbackOpcoes: [
          null,
          "❌ A questão não é 'proibido', mas sim mostrar que aprendeu.",
          "❌ Fontes confiáveis são bem escritas, o problema não é esse.",
          "❌ O tamanho do texto não é o motivo principal.",
        ],
        dica: "🧭 Pista de explorador: pense em compreensão, não em tamanho do texto.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Porque mostra que a pessoa realmente entendeu o assunto”.",
      },
      {
        pergunta: "4/5 — Para que servem os tópicos nas anotações?",
        opcoes: [
          "Para organizar um assunto de cada vez",
          "Para deixar o caderno mais colorido",
          "Para copiar a fonte inteira sem pensar",
          "Para escrever tudo numa frase só",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Tópicos organizam as ideias por assunto.",
        feedbackErro: "Tópicos servem para não misturar assuntos diferentes nas anotações.",
        feedbackOpcoes: [
          null,
          "❌ Cor não é o objetivo dos tópicos.",
          "❌ Tópicos não servem para copiar, e sim para organizar ideias próprias.",
          "❌ O contrário: tópicos separam as ideias, não juntam tudo numa frase.",
        ],
        dica: "🧭 Pista de explorador: pense em separar assuntos, um de cada vez.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Para organizar um assunto de cada vez”.",
      },
      {
        pergunta: "5/5 — O que caracteriza um boato?",
        opcoes: [
          "Informação sem autor e sem prova, espalhada de pessoa para pessoa",
          "Um texto publicado por uma universidade",
          "Um livro revisado por especialistas",
          "Uma pergunta de pesquisa bem escrita",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! Boato é informação sem confirmação.",
        feedbackErro: "Releia: boato é informação espalhada sem autor e sem prova.",
        feedbackOpcoes: [
          null,
          "❌ Universidade é justamente uma fonte confiável, não um boato.",
          "❌ Livro revisado por especialistas também é fonte confiável.",
          "❌ Pergunta de pesquisa é uma ferramenta de planejamento, não um boato.",
        ],
        dica: "🧭 Pista de explorador: pense em 'sem autor e sem prova'.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Informação sem autor e sem prova, espalhada de pessoa para pessoa”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às fontes confiáveis",
    materiais: ["Papel e lápis", "Um livro, enciclopédia ou acesso a um site de museu/universidade com um adulto"],
    passos: [
      "1) Escolha, com a família, uma curiosidade sobre um animal, planta ou lugar.",
      "2) Transforme essa curiosidade em uma pergunta de pesquisa clara.",
      "3) Encontre, junto com um adulto, 2 fontes confiáveis (livro, enciclopédia ou site de museu/universidade).",
      "4) Anote 3 tópicos com as próprias palavras sobre o que descobriu.",
    ],
    registro: "📝 Uma foto do plano de pesquisa: pergunta, 2 fontes e 3 tópicos anotados.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
