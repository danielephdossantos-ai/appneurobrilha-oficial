import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as estrelaBrilhante } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Aula 1 — Verso, Estrofe e Rima
 * -------------------------------------------------------------
 * Abertura da Unidade 6 (Palavras com Ritmo). O clube descobre um
 * caderno de poemas esquecido debaixo da árvore-sede e aprende a
 * enxergar a ARQUITETURA de um poema: verso (linha), estrofe
 * (bloco de versos) e rima (som que se repete no final dos versos).
 *
 * BNCC: EF35LP23 (leitura de poemas), EF15LP16 (apreciar textos
 * poéticos), EF35LP28 (identificar recursos rítmicos e sonoros).
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-verso-estrofe-rima",
  titulo: "Verso, Estrofe e Rima",
  iconeTrilha: "📜",
  bncc: ["EF35LP23", "EF15LP16", "EF35LP28"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "O caderno esquecido embaixo da árvore",
    historia:
      "Debaixo da árvore-sede do clube, Aurora encontrou um caderno velho cheio de rabiscos e versos. — Isso é um caderno de POESIA! — disse ela, os olhos brilhando. — Poema é um caso diferente: aqui, a pista não é só o SENTIDO das palavras, é também o SOM delas. Vamos abrir esse caderno e investigar como um poema é construído por dentro?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "A primeira página do caderno tem um desenho de lua e estrelas. Antes de ler, imagine sobre o que o poema pode falar.",
    bloco: {
      titulo: "Segredo da Noite",
      capaImagemUrl: lua,
      pistas: [
        { imagemUrl: estrela, nome: "Estrelas" },
        { imagemUrl: coruja, nome: "Uma coruja" },
      ],
      pergunta: "Sobre o que esse poema provavelmente fala?",
      hipoteses: [
        { texto: "Sobre a noite, o céu e os bichos que acordam à noite.", imagemUrl: lua },
        { texto: "Sobre um jogo de futebol.", imagemUrl: papel },
        { texto: "Sobre uma receita de bolo.", imagemUrl: lapis },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔍 Isso! O título 'Segredo da Noite' e as imagens de lua, estrela e coruja são pistas fortes de um poema sobre a noite.",
      feedbackErro:
        "Olhe de novo: o título fala de 'Noite', e as pistas são lua, estrela e coruja — bicho que só aparece à noite.",
      dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras que todo detetive de poemas precisa conhecer.",
    cards: [
      {
        palavra: "verso",
        explicacao: "É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro.",
        exemplo: "'A lua subiu no céu' é um verso sozinho.",
        imagemUrl: papel,
      },
      {
        palavra: "estrofe",
        explicacao: "É um GRUPO de versos, separado dos outros por um espaço em branco — como um parágrafo do poema.",
        exemplo: "Quatro versos juntos, seguidos de um espaço, formam uma estrofe.",
        imagemUrl: papel,
      },
      {
        palavra: "rima",
        explicacao: "É quando o FINAL de dois versos tem o mesmo som, como 'lua' e 'rua', ou 'estrela' e 'janela'.",
        exemplo: "'No céu mora a lua / Do lado de cá, a rua.'",
        imagemUrl: estrelaBrilhante,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o poema em voz alta, marcando o ritmo com a mão. Repare onde termina cada verso e onde os sons se repetem.",
    leitura: {
      titulo: "Segredo da Noite",
      imagemUrl: coruja,
      legendaImagem: "A coruja guardiã do poema",
      destacar: ["lua", "rua", "aparece", "esquece"],
      paragrafos: [
        "No céu escuro mora a lua,\ncá embaixo dorme a rua.\nA coruja acorda e voa,\nna árvore ela ecoa.",
        "Quando a estrela mais aparece,\no dia inteiro se esquece.\nA noite guarda um segredo:\nas coisas só têm medo do medo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no poema sempre que precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "No poema, onde mora a lua?",
        opcoes: ["No mar", "No céu escuro", "Dentro da árvore"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'No céu escuro mora a lua'.",
        feedbackErro: "Releia o primeiro verso — o lugar vem logo depois de 'No céu'.",
        ondeEstaNoTexto: "No céu escuro mora a lua,",
        dica: "🔎 Pista: releia no texto o trecho “No céu escuro mora a lua,”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “No poema, onde mora a lua?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que a coruja faz quando acorda?",
        opcoes: ["Ela dorme de novo", "Ela voa", "Ela chora"],
        correta: 1,
        feedbackAcerto: "🔍 Boa! 'A coruja acorda e voa'.",
        feedbackErro: "O verso diz: 'A coruja acorda e ...' — o que vem depois?",
        ondeEstaNoTexto: "A coruja acorda e voa,",
        dica: "🔎 Pista: releia no texto o trecho “A coruja acorda e voa,”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “O que a coruja faz quando acorda?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Segundo o poema, o que a noite guarda?",
        opcoes: ["Um segredo", "Um tesouro", "Uma carta"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! 'A noite guarda um segredo'.",
        feedbackErro: "Releia o começo da segunda estrofe — a última linha do poema conta o que a noite guarda.",
        ondeEstaNoTexto: "A noite guarda um segredo:",
        dica: "🔎 Pista: releia no texto o trecho “A noite guarda um segredo:”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “Segundo o poema, o que a noite guarda?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora vamos investigar a ARQUITETURA do poema: quantas estrofes, quantos versos e onde estão as rimas.",
    perguntas: [
      {
        pergunta: "Quantas estrofes tem o poema 'Segredo da Noite'?",
        opcoes: ["Uma", "Duas", "Quatro"],
        correta: 1,
        feedbackAcerto:
          "🔍 Isso! O poema tem DUAS estrofes — dois blocos de versos separados por um espaço.",
        feedbackErro:
          "Conte os blocos separados por espaço em branco: são dois grupos de 4 versos cada — logo, duas estrofes.",
        dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “Quantas estrofes tem o poema 'Segredo da Noite'?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Quais palavras rimam no primeiro verso e no segundo verso da primeira estrofe?",
        opcoes: ["lua e rua", "lua e coruja", "céu e árvore"],
        correta: 0,
        feedbackAcerto:
          "🔍 Perfeito! 'Lua' e 'rua' terminam com o mesmo som — por isso rimam.",
        feedbackErro:
          "Escute o final dos dois primeiros versos: '...mora a LUA' e '...dorme a RUA'. O som final é igual.",
        dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “Quais palavras rimam no primeiro verso e no segundo verso da primeira…” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos que um detetive de poemas segue para investigar um texto poético.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Ler o poema em voz alta, sentindo o ritmo.", imagemUrl: papel },
        { id: "p2", texto: "Contar quantos versos formam cada estrofe.", imagemUrl: lapis },
        { id: "p3", texto: "Procurar quais palavras rimam no final dos versos.", imagemUrl: estrelaBrilhante },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Isso mesmo! Primeiro sentimos o ritmo, depois contamos, só então caçamos as rimas.",
      feedbackErro: "Pense: primeiro a gente OUVE o poema, depois CONTA as partes, e só no fim CAÇA as rimas.",
      dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo poema para investigar sozinho!",
    leitura: {
      titulo: "A Árvore Contadora",
      imagemUrl: arvore,
      destacar: ["árvore", "vento", "conta", "lenta"],
      paragrafos: [
        "A árvore é velha e contadora,\nseus galhos balançam hora a hora.\nO vento passa e conta um segredo,\nela ouve tudo, nunca tem medo.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantos versos tem esse poema?",
        opcoes: ["Dois", "Quatro", "Seis"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! São quatro linhas, ou seja, quatro versos.",
        feedbackErro: "Conte as linhas do poema uma a uma: são quatro.",
        ondeEstaNoTexto: "A árvore é velha e contadora, / seus galhos balançam hora a hora. / O vento passa e conta um segredo, / ela ouve tudo, nunca tem medo.",
        dica: "🔎 Pista: releia no texto o trecho “A árvore é velha e contadora, / seus galhos balançam hora a hora. / O vento passa e conta…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “Quantos versos tem esse poema?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Quais palavras rimam no final do 3º e 4º verso?",
        opcoes: ["segredo e medo", "vento e conta", "árvore e galhos"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! 'Segredo' e 'medo' terminam com o mesmo som.",
        feedbackErro: "Escute o final dos versos 3 e 4: '...conta um SEGREDO' e '...nunca tem MEDO'.",
        dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “Quais palavras rimam no final do 3º e 4º verso?” com essa ideia na cabeça.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "VERSO é cada linha do poema.",
      "ESTROFE é um grupo de versos separado por espaço em branco.",
      "RIMA é quando o final de dois versos tem o mesmo som.",
      "Ler poema em voz alta ajuda a sentir o ritmo — não é só olhar, é ESCUTAR.",
    ],
    miniDesafio: {
      pergunta: "'Casa' e 'brasa' rimam porque…",
      opcoes: [
        "Começam com a mesma letra",
        "Terminam com o mesmo som",
        "Têm o mesmo número de letras",
      ],
      correta: 1,
      feedbackAcerto: "🔍 Isso! Rima é sobre o SOM final, não a quantidade de letras.",
      feedbackErro: "Rima acontece quando o FINAL das palavras soa parecido — como '-asa' em 'casa' e 'brasa'.",
      dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “'Casa' e 'brasa' rimam porque…” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um verso?",
        opcoes: ["Uma estrofe inteira", "Cada linha de um poema", "O título do poema"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Verso é cada linha.",
        feedbackErro: "Verso é CADA LINHA do poema, não o poema todo.",
        dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “1/5 — O que é um verso?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — O que separa uma estrofe da outra?",
        opcoes: ["Um espaço em branco", "Uma vírgula", "Nada, é tudo junto"],
        correta: 0,
        feedbackAcerto: "🔍 Correto! O espaço em branco separa os blocos de versos.",
        feedbackErro: "Estrofes são separadas por um ESPAÇO em branco entre os blocos de versos.",
        dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “2/5 — O que separa uma estrofe da outra?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — Qual par de palavras rima?",
        opcoes: ["flor e sol", "flor e cor", "flor e mar"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'Flor' e 'cor' terminam com som parecido.",
        feedbackErro: "Escute o final: '-or' se repete em 'flor' e 'cor'.",
        dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “3/5 — Qual par de palavras rima?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — Por que é bom ler poema em voz alta?",
        opcoes: [
          "Para sentir o ritmo e a musicalidade das palavras",
          "Porque poema não pode ser lido em silêncio",
          "Só por diversão, não ajuda em nada",
        ],
        correta: 0,
        feedbackAcerto: "🔍 Exato! Ler em voz alta revela o ritmo escondido no texto.",
        feedbackErro: "Ler em voz alta ajuda a PERCEBER o ritmo e a sonoridade que o poema esconde.",
        dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “4/5 — Por que é bom ler poema em voz alta?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — No poema 'Segredo da Noite', quantas estrofes existem?",
        opcoes: ["Uma", "Duas", "Três"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Duas estrofes de quatro versos. Pista arquitetada com sucesso! 🌟",
        feedbackErro: "Conte os blocos separados por espaço: são dois — logo, duas estrofes.",
        dica: "🔎 Pista: lembre do que significa “verso” — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: verso — É cada LINHA de um poema. Um poema pode ter vários versos, um embaixo do outro. Exemplo: 'A lua subiu no céu' é um verso sozinho. Agora volte à pergunta “5/5 — No poema 'Segredo da Noite', quantas estrofes existem?” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça-rimas em casa",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Escolham juntos 3 objetos da casa (ex.: porta, janela, mesa).",
      "2) Para cada objeto, procurem uma palavra que rime com ele (porta/torta, janela/panela, mesa/certeza).",
      "3) Tentem escrever, juntos, um verso curto usando uma das rimas encontradas.",
      "4) Leiam o verso em voz alta, batendo palma no ritmo.",
    ],
    registro: "🗣️ Registrem em áudio ou por escrito o verso criado pela família.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
