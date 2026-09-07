import type { AulaPortuguesV4 } from "../../types";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as caixa } from "@/assets/neuro-treino/objetos/caixa.png.asset.json";

/**
 * Aula 1 — Sílaba tônica e acento
 * -------------------------------------------------------------
 * Unidade 2 · Oficina das Palavras (5º ano)
 * Foco: identificar a sílaba tônica, classificar oxítona/paroxítona/
 * proparoxítona e reconhecer quando essa palavra pede acento gráfico.
 * BNCC: EF05LP01
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-silaba-tonica-e-acento",
  titulo: "Sílaba tônica e acento",
  iconeTrilha: "🧭",
  bncc: ["EF05LP03"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A oficina abre as portas",
    historia:
      "Brilha entrou na Oficina das Palavras carregando uma bússola especial. — Aqui a gente lapida cada palavra até ela ficar afiada e sem erro! Primeira ferramenta: descobrir qual sílaba 'bate mais forte' em cada palavra. Essa força é o segredo por trás de todo acento gráfico. Bora calibrar a bússola?",
    imagemUrl: bussola,
  },

  momento02_previsao: {
    instrucao: "Observe as ferramentas em cima da bancada antes de começar.",
    bloco: {
      titulo: "A Bancada da Sílaba Forte",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: bussola, nome: "Uma bússola" },
        { imagemUrl: estrela, nome: "Uma estrela" },
      ],
      pergunta: "Sobre o que essa oficina vai ensinar?",
      hipoteses: [
        { texto: "Qual sílaba de cada palavra soa mais forte e quando ela pede acento.", imagemUrl: estrela },
        { texto: "Como construir uma bússola de verdade.", imagemUrl: bussola },
        { texto: "Como desenhar mapas do tesouro.", imagemUrl: mapa },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos aprender a encontrar a sílaba tônica e saber quando ela ganha acento.",
      feedbackErro:
        "Pense na bússola: ela aponta pro som mais FORTE da palavra. É esse o assunto de hoje.",
      dica: "🧭 Pista da oficina: a bússola aponta para a sílaba mais forte — é sobre isso que a aula vai falar, e sobre quando essa força vira acento.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de usar as ferramentas, conheça o nome de cada uma.",
    cards: [
      {
        palavra: "sílaba tônica",
        explicacao:
          "É a sílaba pronunciada com MAIS FORÇA dentro da palavra. Em 'ja-ca-RÉ', o pedaço 'RÉ' é o mais forte.",
        exemplo: "Na palavra ABACAXI, a sílaba mais forte é 'XI': a-ba-ca-XI.",
        imagemUrl: bussola,
      },
      {
        palavra: "oxítona",
        explicacao: "Palavra cuja sílaba tônica é a ÚLTIMA. Ex.: café, jiló, jacaré.",
        exemplo: "SOFÁ é oxítona: a força cai na última sílaba, 'FÁ'.",
        imagemUrl: livro,
      },
      {
        palavra: "paroxítona",
        explicacao:
          "Palavra cuja sílaba tônica é a PENÚLTIMA. É o tipo mais comum da língua portuguesa.",
        exemplo: "ÁRVORE é paroxítona: a força cai em 'ÁR', a penúltima sílaba.",
        imagemUrl: arvore,
      },
      {
        palavra: "proparoxítona",
        explicacao:
          "Palavra cuja sílaba tônica é a ANTEPENÚLTIMA. TODA proparoxítona é acentuada, sem exceção.",
        exemplo: "MÁQUINA é proparoxítona: a força cai em 'MÁ', lá atrás.",
        imagemUrl: lapis,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Ouvindo onde bate a força",
    instrucao: "Toque em cada palavra, escute o Brilha separando as sílabas e veja qual delas bate mais forte.",
    blocos: [
      {
        tipo: "silabaTonica",
        itens: [
          {
            palavra: "jacaré",
            silabas: ["ja", "ca", "ré"],
            tonica: 2,
            imagemUrl: bussola,
            explicacao: "A força bate na ÚLTIMA sílaba: 'RÉ'. Por isso, JACARÉ é uma palavra OXÍTONA.",
          },
          {
            palavra: "árvore",
            silabas: ["ár", "vo", "re"],
            tonica: 0,
            imagemUrl: arvore,
            explicacao: "A força bate na PENÚLTIMA sílaba: 'ÁR'. Por isso, ÁRVORE é uma palavra PAROXÍTONA.",
          },
          {
            palavra: "máquina",
            silabas: ["má", "qui", "na"],
            tonica: 0,
            imagemUrl: lapis,
            explicacao: "A força bate na ANTEPENÚLTIMA sílaba: 'MÁ'. Por isso, MÁQUINA é uma palavra PROPAROXÍTONA — e toda proparoxítona tem acento.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "Quando a sílaba forte pede acento gráfico",
        explicacao:
          "Nem toda sílaba tônica ganha acento — depende da posição e da terminação da palavra. Proparoxítonas SEMPRE têm acento. Oxítonas ganham acento quando terminam em A, E, O, EM (café, você, cipó). Paroxítonas ganham acento quando terminam em L, R, N, X, I, ÃO, UM, US, PS (fácil, açúcar, hífen).",
        exemplos: [
          { palavra: "café", destaque: "é", motivo: "Oxítona terminada em E: recebe acento." },
          { palavra: "fácil", destaque: "á", motivo: "Paroxítona terminada em L: recebe acento." },
          { palavra: "lâmpada", destaque: "lâm", motivo: "Proparoxítona: recebe acento sempre." },
        ],
        desafios: [
          {
            molde: "CAF_ terminada em E, com força na última sílaba. Precisa de acento?",
            opcoes: ["Sim, porque é oxítona terminada em E", "Não, porque é paroxítona", "Só se for nome próprio", "Nunca leva acento"],
            correta: 0,
            frase: "café",
            feedbackErro: "CAFÉ é oxítona (força na última sílaba) e termina em E — por isso recebe acento.",
          },
          {
            molde: "AÇÚCAR tem força na penúltima sílaba e termina em R. Precisa de acento?",
            opcoes: ["Sim, porque é paroxítona terminada em R", "Não, porque toda paroxítona não tem acento", "Só em frases", "Depende do tamanho da palavra"],
            correta: 0,
            frase: "açúcar",
            feedbackErro: "AÇÚCAR é paroxítona e termina em R — essa terminação pede acento nas paroxítonas.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha anotou a descoberta no diário da oficina.",
    leitura: {
      titulo: "O Diário da Bancada",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário da oficina",
      destacar: ["última", "penúltima", "antepenúltima", "acento"],
      paragrafos: [
        "Toda palavra com mais de uma sílaba tem uma que soa mais forte — a sílaba TÔNICA. Se essa força cai na ÚLTIMA sílaba, a palavra é OXÍTONA, como em CAFÉ e JACARÉ.",
        "Se a força cai na PENÚLTIMA sílaba, a palavra é PAROXÍTONA, como em CASA e ÁRVORE — a maioria das palavras do português é assim.",
        "Se a força cai na ANTEPENÚLTIMA sílaba, bem lá atrás, a palavra é PROPAROXÍTONA, como em MÁQUINA e LÂMPADA. Regra de ouro: TODA proparoxítona recebe acento, sem exceção.",
        "Já as oxítonas recebem acento quando terminam em A, E, O, EM (café, você, cipó, também) e as paroxítonas quando terminam em L, R, N, X, I, ÃO, UM, US, PS (fácil, açúcar, hífen, tórax).",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "Como se chama a palavra cuja sílaba forte é a ÚLTIMA?",
        opcoes: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Oxítona = força na última sílaba, como em CAFÉ.",
        feedbackErro: "Releia: 'Se essa força cai na ÚLTIMA sílaba, a palavra é OXÍTONA'.",
        ondeEstaNoTexto: "Se essa força cai na ÚLTIMA sílaba, a palavra é OXÍTONA, como em CAFÉ",
        dica: "🧭 Pista da oficina: volte ao diário e releia este trecho — “Se essa força cai na ÚLTIMA sílaba, a palavra é OXÍTONA”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Oxítona”. É o nome da palavra cuja força cai na última sílaba, como em CAFÉ. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual regra vale para TODA proparoxítona, sem exceção?",
        opcoes: ["Nunca leva acento", "Sempre leva acento", "Só leva acento em nomes próprios", "Depende do estado"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Toda proparoxítona é acentuada, sem exceção.",
        feedbackErro: "Releia o parágrafo 3: 'TODA proparoxítona recebe acento, sem exceção.'",
        ondeEstaNoTexto: "TODA proparoxítona recebe acento, sem exceção.",
        dica: "🧭 Pista da oficina: volte ao diário e releia este trecho — “TODA proparoxítona recebe acento, sem exceção”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Sempre leva acento”. Essa é a regra de ouro: toda proparoxítona é acentuada. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual tipo de palavra é a maioria no português, segundo o texto?",
        opcoes: ["Oxítona", "Paroxítona", "Proparoxítona", "Todas são iguais em quantidade"],
        correta: 1,
        feedbackAcerto: "🎉 Exato! O texto diz que a paroxítona é o tipo mais comum.",
        feedbackErro: "Releia: 'a maioria das palavras do português é assim' — refere-se à paroxítona.",
        ondeEstaNoTexto: "a maioria das palavras do português é assim",
        dica: "🧭 Pista da oficina: volte ao diário e releia este trecho — “a maioria das palavras do português é assim”, logo depois de falar da paroxítona.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Paroxítona”. O texto afirma que é o tipo mais comum de palavra do português. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a descoberta e onde ela é registrada?",
    perguntas: [
      {
        pergunta: "Onde Brilha registrou a descoberta sobre a sílaba tônica?",
        opcoes: ["No diário da oficina", "Numa placa da rua", "Num cartaz da escola", "Numa etiqueta de caixa"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A descoberta foi registrada no diário da oficina.",
        feedbackErro: "Releia o título: 'O Diário da Bancada' — é onde tudo foi anotado.",
        dica: "🧭 Pista da oficina: releia o título do texto — 'O Diário da Bancada'.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “No diário da oficina”. É lá que Brilha anotou a descoberta. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual ferramenta ajudou a explicar a ideia de sílaba tônica?",
        opcoes: ["A bússola", "O martelo", "A serra", "A lupa"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A bússola aponta a sílaba mais forte da palavra.",
        feedbackErro: "Volte à motivação: Brilha carregava uma bússola especial.",
        dica: "🧭 Pista da oficina: releia a motivação — Brilha entrou carregando uma ferramenta especial.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A bússola”. Ela representa a busca pela sílaba mais forte da palavra. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para descobrir a sílaba tônica de uma palavra.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Separe a palavra em sílabas.", imagemUrl: lapis },
        { id: "p2", texto: "Fale a palavra em voz alta e sinta qual sílaba soa mais forte.", imagemUrl: bussola },
        { id: "p3", texto: "Descubra se essa sílaba é a última, penúltima ou antepenúltima.", imagemUrl: mapa },
        { id: "p4", texto: "Verifique se, pela terminação, a palavra precisa de acento.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para calibrar a bússola da sílaba tônica.",
      feedbackErro: "Pense: primeiro se separa em sílabas, depois se ouve a força, depois se localiza a posição, e só então se decide o acento.",
      dica: "🧭 Pista da oficina: primeiro separe em sílabas, depois ouça a força, depois ache a posição e só então decida o acento.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um novo trecho do diário e responda.",
    leitura: {
      titulo: "Mais Descobertas na Oficina",
      imagemUrl: livro,
      destacar: ["MÁQUINA", "FÁCIL", "AÇÚCAR"],
      paragrafos: [
        "Brilha encontrou a palavra MÁQUINA. Ela tem a força em 'MÁ', a antepenúltima sílaba: má-qui-na. É proparoxítona, por isso o acento é obrigatório.",
        "Depois encontrou FÁCIL e AÇÚCAR. Ambas são paroxítonas — a força está na penúltima sílaba — e ambas terminam em L e R. Essas terminações pedem acento nas paroxítonas.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que MÁQUINA precisa de acento, segundo o texto?",
        opcoes: [
          "Porque é proparoxítona, e toda proparoxítona é acentuada",
          "Porque é uma palavra grande",
          "Porque termina em A",
          "Porque começa com M",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Proparoxítona sempre leva acento.",
        feedbackErro: "Releia: 'É proparoxítona, por isso o acento é obrigatório.'",
        ondeEstaNoTexto: "É proparoxítona, por isso o acento é obrigatório.",
        dica: "🧭 Pista da oficina: volte ao texto e releia este trecho — “É proparoxítona, por isso o acento é obrigatório”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque é proparoxítona, e toda proparoxítona é acentuada”. Essa é a regra de ouro da aula. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que FÁCIL e AÇÚCAR têm em comum, segundo o texto?",
        opcoes: [
          "São paroxítonas terminadas em L e R, o que pede acento",
          "São oxítonas terminadas em vogal",
          "Não têm nada em comum",
          "São proparoxítonas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Paroxítonas terminadas em L, R (entre outras) recebem acento.",
        feedbackErro: "Releia: 'ambas terminam em L e R. Essas terminações pedem acento nas paroxítonas.'",
        ondeEstaNoTexto: "Essas terminações pedem acento nas paroxítonas.",
        dica: "🧭 Pista da oficina: volte ao texto e releia este trecho — “Essas terminações pedem acento nas paroxítonas”.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “São paroxítonas terminadas em L e R, o que pede acento”. Essa é a característica que as duas palavras compartilham. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Classifique a força da palavra",
    instrucao: "Arraste cada palavra para o baú certo: oxítona, paroxítona ou proparoxítona.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Os Três Baús da Sílaba Tônica",
      bloco: {
        instrucao: "Fale cada palavra em voz alta e sinta onde cai a força antes de arrastar.",
        itens: [
          { id: "i1", texto: "café", alvoId: "oxitona" },
          { id: "i2", texto: "casa", alvoId: "paroxitona" },
          { id: "i3", texto: "máquina", alvoId: "proparoxitona" },
          { id: "i4", texto: "jacaré", alvoId: "oxitona" },
          { id: "i5", texto: "árvore", alvoId: "paroxitona" },
          { id: "i6", texto: "lâmpada", alvoId: "proparoxitona" },
          { id: "i7", texto: "sofá", alvoId: "oxitona" },
          { id: "i8", texto: "açúcar", alvoId: "paroxitona" },
        ],
        alvos: [
          { id: "oxitona", nome: "Oxítona", imagemUrl: estrela, descricao: "Força na última sílaba" },
          { id: "paroxitona", nome: "Paroxítona", imagemUrl: arvore, descricao: "Força na penúltima sílaba" },
          { id: "proparoxitona", nome: "Proparoxítona", imagemUrl: caixa, descricao: "Força na antepenúltima sílaba" },
        ],
        feedbackAcerto: "🎉 Excelente! Você calibrou a bússola da sílaba tônica.",
        feedbackErro: "Fale a palavra em voz alta bem devagar e sinta em qual sílaba a voz fica mais forte.",
        dica: "🧭 Pista da oficina: fale a palavra bem devagar, sílaba por sílaba, e sinta em qual delas sua voz fica mais forte — última, penúltima ou antepenúltima.",
      },
    },
  },

  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Caderno de Palavras Classificadas",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escreva um pequeno texto classificando palavras",
        comando:
          "Escolha 3 palavras diferentes (podem vir de rótulos, livros ou nomes de amigos). Para cada uma, escreva uma frase dizendo qual é a sílaba tônica, se ela é oxítona, paroxítona ou proparoxítona, e se ela tem acento.",
        linhas: 5,
        modelo: [
          "A palavra 'sofá' é oxítona, porque a força cai na última sílaba: so-FÁ.",
          "Por isso, ela recebe acento gráfico.",
          "Já a palavra 'árvore' é paroxítona, com a força na penúltima sílaba: ÁR-vo-re.",
          "A palavra 'lâmpada' é proparoxítona, e por isso sempre tem acento: LÂM-pa-da.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Escolhi 3 palavras diferentes, sem repetir.",
          "Para cada palavra, disse claramente onde está a sílaba tônica.",
          "Classifiquei corretamente cada palavra: oxítona, paroxítona ou proparoxítona.",
          "Expliquei se a palavra tem acento e por quê.",
          "Li em voz alta e consertei o que ficou estranho.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (~130 ppm · 5º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Leitura expressiva: A Força Escondida nas Palavras",
    instrucao:
      "Leia o mesmo texto três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem explica algo importante.",
    texto: [
      "Você já reparou que, ao falar qualquer palavra em voz alta, uma das sílabas sempre soa mais forte do que as outras? Essa força tem nome: sílaba tônica. Ela existe em toda palavra com mais de uma sílaba, mesmo quando não aparece nenhum acento escrito.",
      "Quando a força cai na última sílaba, chamamos a palavra de oxítona. Quando cai na penúltima, ela é paroxítona — e esse é o tipo mais comum do nosso idioma. Já quando a força cai lá atrás, na antepenúltima sílaba, a palavra é proparoxítona, e recebe acento sempre, sem exceção.",
      "Aprender a ouvir essa força ajuda muito na hora de escrever. Antes de decidir se uma palavra leva acento, basta falar em voz alta, sentir onde a voz pesa mais e depois checar a regra certa. Com prática, esse processo vira automático, e os erros de acentuação vão diminuindo cada vez mais.",
    ],
    metaSegundos: 72,
  },

  momento09_revisao: {
    pontos: [
      "A sílaba TÔNICA é a mais forte de uma palavra ao ser pronunciada.",
      "OXÍTONA: força na última sílaba. PAROXÍTONA: força na penúltima. PROPAROXÍTONA: força na antepenúltima.",
      "Toda proparoxítona é acentuada, sem exceção. Oxítonas e paroxítonas dependem da terminação da palavra.",
      "Um bom truque: fale a palavra bem devagar em voz alta e sinta onde a voz 'pesa' mais.",
    ],
    miniDesafio: {
      pergunta: "MÁQUINA é proparoxítona. Isso significa que ela...",
      opcoes: [
        "Sempre tem acento, porque toda proparoxítona é acentuada",
        "Nunca tem acento",
        "Só tem acento se for nome próprio",
        "Depende de quem escreve",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Essa é a regra de ouro da aula de hoje.",
      feedbackErro: "Releia a explicação: toda proparoxítona recebe acento, sem exceção.",
      dica: "🧭 Pista da oficina: lembre da regra de ouro — toda palavra proparoxítona recebe acento, sem exceção nenhuma.",
      reensino:
        "📚 Vamos rever juntos: a resposta certa é “Sempre tem acento, porque toda proparoxítona é acentuada”. Essa é a regra de ouro da aula de hoje. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é a sílaba tônica?",
        opcoes: ["A primeira sílaba da palavra", "A sílaba pronunciada com mais força", "A última letra da palavra", "Uma sílaba com til"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Tônica é a sílaba mais forte.",
        feedbackErro: "Lembre: tônica é a sílaba que soa com mais força.",
        dica: "🧭 Pista da oficina: fale a palavra em voz alta e sinta onde a voz fica mais forte — essa é a sílaba tônica.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A sílaba pronunciada com mais força”. É essa a definição de sílaba tônica. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "2/5 — CAFÉ é um exemplo de palavra...",
        opcoes: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba tônica"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A força cai na última sílaba: ca-FÉ.",
        feedbackErro: "Em CAFÉ, a força cai na última sílaba: é oxítona.",
        dica: "🧭 Pista da oficina: separe em sílabas — ca-FÉ — e veja onde a voz fica mais forte.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Oxítona”. Em CAFÉ, a força cai na última sílaba: ca-FÉ. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "3/5 — ÁRVORE é um exemplo de palavra...",
        opcoes: ["Oxítona", "Paroxítona", "Proparoxítona", "Sem sílaba tônica"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A força cai na penúltima sílaba: ÁR-vo-re.",
        feedbackErro: "Em ÁRVORE, a força está na penúltima sílaba: é paroxítona.",
        dica: "🧭 Pista da oficina: separe em sílabas — ÁR-vo-re — e veja onde a voz fica mais forte.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Paroxítona”. Em ÁRVORE, a força está na penúltima sílaba. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "4/5 — Toda palavra proparoxítona...",
        opcoes: ["Nunca leva acento", "Leva acento sempre", "Leva acento só às vezes", "Só leva acento se for verbo"],
        correta: 1,
        feedbackAcerto: "🎉 Exato! Regra sem exceção: toda proparoxítona é acentuada.",
        feedbackErro: "Lembre da regra de ouro: toda proparoxítona é acentuada, sempre.",
        dica: "🧭 Pista da oficina: essa é a regra de ouro da aula — sem exceções.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Leva acento sempre”. Essa é a regra de ouro: toda proparoxítona é acentuada. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "5/5 — MÁQUINA tem a sílaba tônica em qual posição?",
        opcoes: ["Última", "Penúltima", "Antepenúltima", "Não tem sílaba tônica"],
        correta: 2,
        feedbackAcerto: "🎉 Oficina dominada! MÁ-qui-na: a força está na antepenúltima sílaba.",
        feedbackErro: "Separe: MÁ-qui-na. A força está na primeira sílaba, que é a antepenúltima.",
        dica: "🧭 Pista da oficina: separe em sílabas — MÁ-qui-na — e conte a partir do fim: última, penúltima, antepenúltima.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Antepenúltima”. Em MÁ-qui-na, a força está na primeira sílaba, que é a antepenúltima. Oficina dominada! 🌟 Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às sílabas fortes",
    materiais: ["Papel e lápis", "Um livro, revista ou embalagem qualquer da casa"],
    passos: [
      "1) Junto com um adulto, escolham 6 palavras de mais de uma sílaba em rótulos, livros ou placas.",
      "2) Falem cada palavra em voz alta, batendo palmas na sílaba mais forte.",
      "3) Classifiquem cada uma: oxítona, paroxítona ou proparoxítona.",
      "4) Verifiquem quais delas têm acento gráfico e por quê.",
    ],
    registro: "📝 Uma foto da lista com as classificações, ou um áudio batendo palmas nas sílabas tônicas.",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "Bússola de Bronze",
  },
};
