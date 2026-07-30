import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as escola } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";

/**
 * Unidade 3 · Aula 4 — Caça aos Erros
 * -------------------------------------------------------------
 * A criança vira DETETIVE ORTOGRÁFICO. Ajuda Aurora a revisar
 * livros comparando a escrita CERTA e a ERRADA e explicando por que.
 *
 * BNCC: EF02LP06 · EF02LP07 · EF02LP08
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-caca-erros",
  titulo: "Caça aos Erros",
  iconeTrilha: "🔍",
  bncc: ["EF02LP06", "EF02LP07", "EF02LP08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Aurora precisa revisar!",
    historia:
      "Aurora chega com uma pilha de livros. — Alguns tem palavras escritas ERRADAS! Preciso de um DETETIVE ORTOGRÁFICO pra achar os erros. Aceita a missão? A criança vira detetive por um dia.",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Duas escritas da mesma palavra. Qual está CERTA?",
    bloco: {
      titulo: "CASA ou CASZA?",
      recado: {
        icone: "🔍",
        rotulo: "Caça-erros",
        estilo: "cartaz",
        linhas: ["CASA   x   CASZA"],
      },
      pergunta: "Qual está escrita CERTA?",
      hipoteses: [
        { texto: "CASA (jeito certo).", imagemUrl: casa },
        { texto: "CASZA (jeito errado).", imagemUrl: papel },
        { texto: "As duas estão certas.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 CASA! Só 4 letras: C-A-S-A. CASZA tem uma letra a MAIS.",
      feedbackErro:
        "Fala em voz alta: CA-SA. Duas sílabas: CA e SA. A escrita certa é CASA. CASZA tem letra a mais.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras do detetive.",
    cards: [
      {
        palavra: "revisar",
        explicacao:
          "É LER de novo o que a gente escreveu procurando ERROS pra corrigir.",
        exemplo: "Depois de escrever, sempre REVISE.",
        imagemUrl: lapis,
      },
      {
        palavra: "ortografia",
        explicacao:
          "É o jeito CERTO de escrever as palavras.",
        exemplo: "CASA tem ortografia CERTA. CASZA tem ortografia ERRADA.",
        imagemUrl: papel,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Letra grande, letra pequena e o ponto",
    instrucao:
      "Antes de virar detetive, vamos aprender 2 coisas que TODO texto usa: MAIÚSCULA/minúscula e a PONTUAÇÃO no fim da frase. Toque em cada peça pra ouvir.",
    blocos: [
      {
        tipo: "maiusculaMinuscula",
        pares: [
          { maiuscula: "A", minuscula: "a", exemplo: "ANA / amor" },
          { maiuscula: "B", minuscula: "b", exemplo: "BOLA / bebê" },
          { maiuscula: "C", minuscula: "c", exemplo: "CASA / cavalo" },
          { maiuscula: "D", minuscula: "d", exemplo: "DADO / dedo" },
          { maiuscula: "E", minuscula: "e", exemplo: "ESCOLA / elefante" },
          { maiuscula: "G", minuscula: "g", exemplo: "GATO / girafa" },
          { maiuscula: "L", minuscula: "l", exemplo: "LIVRO / lápis" },
          { maiuscula: "M", minuscula: "m", exemplo: "MIGUEL / mão" },
        ],
      },
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "O gato dorme.",
            explicacao:
              "Começa com O MAIÚSCULO (verde) porque é o começo da frase. Termina com PONTO (vermelho) porque é o fim.",
          },
          {
            texto: "A Ana tem um livro.",
            explicacao:
              "Duas maiúsculas: A (começo) e Ana (nome de pessoa). Termina com PONTO.",
          },
          {
            texto: "Onde está a bola?",
            explicacao:
              "Frase de PERGUNTA — termina com PONTO DE INTERROGAÇÃO (?).",
          },
          {
            texto: "Que legal!",
            explicacao:
              "Frase de EMOÇÃO — termina com PONTO DE EXCLAMAÇÃO (!).",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia com Brilha o que faz um bom detetive de palavras.",
    leitura: {
      titulo: "O detetive ortográfico",
      imagemUrl: brilha,
      destacar: ["revisam", "letra", "sílaba"],
      paragrafos: [
        "Bons escritores sempre REVISAM o que escrevem.",
        "Pra revisar, você lê em VOZ ALTA e presta atenção em CADA letra e CADA sílaba.",
        "Se sobrar letra (CASZA) ou faltar letra (CAA), a palavra está errada.",
        "Aí é só APAGAR e escrever de novo, do jeito certo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Qual está CERTA em cada dupla?",
    perguntas: [
      {
        pergunta: "Qual está CERTA?",
        opcoes: ["BOLA", "BOLLA", "BLOA"],
        correta: 0,
        feedbackAcerto: "🎉 BOLA — BO + LA, 4 letras.",
        feedbackErro:
          "Fala: BO-LA. Duas sílabas. Só 4 letras: B-O-L-A. BOLA.",
        dica: "Volte no texto e procure a parte que responde a pergunta. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Fala: BO-LA. Duas sílabas. Só 4 letras: B-O-L-A. BOLA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual está CERTA?",
        opcoes: ["LIVRO", "LIVERO", "LIVRRO"],
        correta: 0,
        feedbackAcerto: "🎉 LIVRO!",
        feedbackErro: "LI-VRO. Duas sílabas. 5 letras: L-I-V-R-O.",
        dica: "Volte no texto e procure a parte que responde a pergunta. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: LI-VRO. Duas sílabas. 5 letras: L-I-V-R-O. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual está CERTA?",
        opcoes: ["ESCLA", "ESCOLA", "ESCUELA"],
        correta: 1,
        feedbackAcerto: "🎉 ESCOLA!",
        feedbackErro: "ES-CO-LA. Três sílabas. 6 letras: E-S-C-O-L-A.",
        dica: "Volte no texto e procure a parte que responde a pergunta. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: ES-CO-LA. Três sílabas. 6 letras: E-S-C-O-L-A. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "Nessa aula, quem age é o DETETIVE (você). Vamos treinar o que ele faz.",
    perguntas: [
      {
        pergunta: "O detetive ortográfico faz o quê primeiro?",
        opcoes: [
          "Escreve rápido sem olhar",
          "LÊ com atenção o que já foi escrito",
          "Rasga o papel",
        ],
        correta: 1,
        feedbackAcerto: "🎉 LÊ com atenção pra achar o erro.",
        feedbackErro:
          "Primeiro passo do detetive: LER de novo, devagar, olhando cada letra.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Se achar um erro, o detetive…",
        opcoes: [
          "Deixa como está",
          "APAGA e escreve certo",
          "Chora",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Apaga e escreve certo. Isso é REVISAR.",
        feedbackErro: "Detetive REVISA: apaga o errado e escreve certo.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque na ORDEM os passos que um bom detetive ortográfico faz.",
    bloco: {
      instrucao: "Escrever → Ler devagar → Achar erro → Corrigir.",
      itens: [
        {
          id: "p1",
          texto: "Escrever a palavra ou frase.",
          imagemUrl: lapis,
        },
        {
          id: "p2",
          texto: "Ler de novo, DEVAGAR e em voz alta.",
          imagemUrl: brilha,
        },
        {
          id: "p3",
          texto: "Achar a letra que está sobrando ou faltando.",
          imagemUrl: papel,
        },
        {
          id: "p4",
          texto: "Apagar e escrever CERTO.",
          imagemUrl: lapis,
        },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Escrever → ler → achar → corrigir.",
      feedbackErro:
        "Primeiro ESCREVE. Depois LÊ. Depois ACHA o erro. Só então CORRIGE.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia o pequeno texto e ache a palavra errada.",
    leitura: {
      titulo: "A frase do Miguel",
      imagemUrl: papel,
      destacar: ["gato", "bola"],
      paragrafos: [
        "Miguel escreveu no caderno:",
        "'Meu GAATO adora a BOLLA'.",
        "Aurora leu e riu: — Duas palavras estão ERRADAS!",
      ],
    },
    perguntas: [
      {
        pergunta: "'GAATO' — como se escreve CERTO?",
        opcoes: ["GATO", "GAATO", "GHATO"],
        correta: 0,
        feedbackAcerto: "🎉 GATO — sobrou um A.",
        feedbackErro: "GA-TO. Duas sílabas. Só um A: GATO.",
        dica: "Volte no texto e procure a parte que fala de 'escreve'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: GA-TO. Duas sílabas. Só um A: GATO. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Meu GAATO",
      },
      {
        pergunta: "'BOLLA' — como se escreve CERTO?",
        opcoes: ["BOLA", "BOLLA", "BOULA"],
        correta: 0,
        feedbackAcerto: "🎉 BOLA — sobrou um L.",
        feedbackErro: "BO-LA. Só um L: BOLA.",
        dica: "Volte no texto e procure a parte que fala de 'escreve'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: BO-LA. Só um L: BOLA. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "a BOLLA",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Detetive Ortográfico",
    instrucao:
      "Nessa mistura de palavras, marque APENAS as que estão escritas CERTAS.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "🔍 Detetive Ortográfico",
      bloco: {
        instrucao: "Cuidado: algumas palavras estão erradas! Marque só as CERTAS.",
        pergunta: "Quais palavras estão escritas do jeito CERTO?",
        opcoes: [
          { id: "o1", texto: "CASA", imagemUrl: casa, correto: true },
          { id: "o2", texto: "CASZA", imagemUrl: papel, correto: false },
          { id: "o3", texto: "BOLA", imagemUrl: bola, correto: true },
          { id: "o4", texto: "BOLLA", imagemUrl: papel, correto: false },
          { id: "o5", texto: "GATO", imagemUrl: gato, correto: true },
          { id: "o6", texto: "GAATO", imagemUrl: papel, correto: false },
          { id: "o7", texto: "LIVRO", imagemUrl: livro, correto: true },
          { id: "o8", texto: "LIVROU", imagemUrl: papel, correto: false },
          { id: "o9", texto: "ESCOLA", imagemUrl: escola, correto: true },
          { id: "o10", texto: "BANANA", imagemUrl: banana, correto: true },
        ],
        feedbackAcerto:
          "🎉 Missão detetive completa! Você achou todas as escritas corretas.",
        feedbackErro:
          "Fala CADA palavra em voz alta separando as sílabas. Se sobrar letra ou faltar letra, está errada.",
        dica: "Leia a pergunta devagar e procure a parte que fala de 'palavras'. Elimine as opções que não combinam.",
      },
    },
  },

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: A frase do Miguel",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "Miguel escreveu no caderno:",
      "'Meu GAATO adora a BOLLA'.",
      "Aurora leu e riu: — Duas palavras estão ERRADAS!",
    ],
    metaSegundos: 20,
  },

momento09_revisao: {
    pontos: [
      "REVISAR = ler de novo procurando ERROS.",
      "Bom escritor SEMPRE revisa antes de entregar.",
      "Erros comuns: LETRA SOBRANDO (CASZA), LETRA FALTANDO (CAA), TROCADA (CAZA).",
      "Fala em VOZ ALTA e conta as sílabas pra achar o erro.",
    ],
    miniDesafio: {
      pergunta: "Qual está CERTA?",
      opcoes: ["BANANA", "BANNANA", "BANNA"],
      correta: 0,
      feedbackAcerto: "🎉 BANANA — BA-NA-NA, três sílabas, 6 letras.",
      feedbackErro: "Fala BA-NA-NA. Cada NA é 2 letras. Total 6 letras: BANANA.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: Fala BA-NA-NA. Cada NA é 2 letras. Total 6 letras: BANANA. Agora leia de novo e escolha com calma.",
    },
  },


  // ------------------------------------------------------------
  // ESCRITA (Fase 3) — ditado de palavra e frase + produção real
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Agora é você quem escreve! Ouça, monte com as peças e depois escreva de verdade.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
        {
          palavra: "ERRO",
          silabas: ["ER", "RO"],
          distratores: ["CER", "TO"],
          dica: "Bata palmas na palavra ERRO: são 2 pedacinhos.",
        },
        {
          palavra: "CERTO",
          silabas: ["CER", "TO"],
          distratores: ["ER", "RO"],
          dica: "Bata palmas na palavra CERTO: são 2 pedacinhos.",
        },
        {
          palavra: "REVISAR",
          silabas: ["RE", "VI", "SAR"],
          distratores: ["ER", "RO"],
          dica: "Bata palmas na palavra REVISAR: são 3 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "Eu revisei e achei o erro.",
          palavras: ["Eu", "revisei", "e", "achei", "o", "erro."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu texto sem erros",
        comando: "Escreva 2 frases sobre o seu dia e depois cace os erros na revisão.",
        linhas: 2,
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Coloquei PONTO no fim de cada frase.",
          "Li em voz alta e entendi tudo.",
          "Procurei letra trocada em cada palavra.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual está CERTA?",
        opcoes: ["CASA", "CASZA",
          "BOLLA",
          "BLOA",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«CASZA» não é a resposta. A certa é «CASA».",
          "«BOLLA» não é a resposta. A certa é «CASA».",
          "«BLOA» não é a resposta. A certa é «CASA».",
        ],
        feedbackAcerto: "🎉 CASA.",
        feedbackErro: "CA-SA = 4 letras. CASA.",
        dica: "Pista: a resposta certa começa com a letra 'C'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: CA-SA = 4 letras. CASA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — Qual está CERTA?",
        opcoes: ["GATO", "GAATO",
          "Chora",
          "CASZA",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«GAATO» não é a resposta. A certa é «GATO».",
          "«Chora» não é a resposta. A certa é «GATO».",
          "«CASZA» não é a resposta. A certa é «GATO».",
        ],
        feedbackAcerto: "🎉 GATO.",
        feedbackErro: "GA-TO = só um A. GATO.",
        dica: "Pista: a resposta certa começa com a letra 'G'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: GA-TO = só um A. GATO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — Qual está CERTA?",
        opcoes: ["BOLLA", "BOLA",
          "GATO",
          "o2",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«BOLLA» não é a resposta. A certa é «BOLA».",
          null,
          "«GATO» não é a resposta. A certa é «BOLA».",
          "«o2» não é a resposta. A certa é «BOLA».",
        ],
        feedbackAcerto: "🎉 BOLA.",
        feedbackErro: "BO-LA = 4 letras. Só um L. BOLA.",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: BO-LA = 4 letras. Só um L. BOLA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — O que um bom escritor faz depois de escrever?",
        opcoes: [
          "REVISA lendo de novo",
          "Rasga o papel",
          "Nada",
          "Chama a mãe",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Rasga o papel» não é a resposta. A certa é «REVISA lendo de novo».",
          "«Nada» não é a resposta. A certa é «REVISA lendo de novo».",
          "«Chama a mãe» não é a resposta. A certa é «REVISA lendo de novo».",
        ],
        feedbackAcerto: "🎉 REVISA!",
        feedbackErro: "Sempre revisar. Ler de novo e conferir cada letra.",
        dica: "Pista: a resposta certa começa com a letra 'R'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Sempre revisar. Ler de novo e conferir cada letra. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Achou o erro. O que faz?",
        opcoes: [
          "Deixa lá",
          "APAGA e escreve certo",
          "Chama a mãe",
          "ESCOLA",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Deixa lá» não é a resposta. A certa é «APAGA e escreve certo».",
          null,
          "«Chama a mãe» não é a resposta. A certa é «APAGA e escreve certo».",
          "«ESCOLA» não é a resposta. A certa é «APAGA e escreve certo».",
        ],
        feedbackAcerto: "🎉 Apaga e escreve certo. Detetive de verdade!",
        feedbackErro: "Achou o erro? APAGA e escreve do jeito certo.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Achou o erro? APAGA e escreve do jeito certo. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔍 Detetive na cozinha",
    materiais: ["Um alimento com embalagem", "Papel", "Lápis"],
    passos: [
      "1) A criança escolhe UM alimento da cozinha (arroz, biscoito, leite).",
      "2) Copia o nome que está escrito na embalagem no papel.",
      "3) Depois ESCREVE de novo, sem olhar, e compara letra por letra.",
      "4) Se sobrou ou faltou letra, apaga e corrige.",
      "5) Conta pra família: 'A palavra tem X sílabas e X letras'.",
    ],
    registro:
      "📸 Uma foto da embalagem ao lado da palavra escrita pela criança.",
  },

  recompensa: { xp: 120, moedas: 70 },
};

void brilha;
