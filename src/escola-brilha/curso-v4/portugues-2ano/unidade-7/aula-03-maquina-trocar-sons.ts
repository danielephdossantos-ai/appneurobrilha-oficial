import type { AulaPortuguesV4 } from "../../types";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 7 · Aula 3 — A Máquina de Trocar Sons
 * ---------------------------------------------------------------
 * Fase 5: manipulação de fonemas em palavras maiores (tirar, trocar
 * e juntar sons) + ortografia do S/SS e do Ç.
 *
 * BNCC: EF02LP02 · EF02LP07 · EF02LP08
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-maquina-trocar-sons",
  titulo: "A Máquina de Trocar Sons",
  iconeTrilha: "⚙️",
  bncc: ["EF02LP02", "EF02LP07", "EF02LP08"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Uma máquina que muda palavras",
    historia:
      "No fundo da oficina havia uma máquina antiga com um botão vermelho. Aurora avisou: — Cuidado! Se você trocar um som só, a palavra vira outra. Brilha apertou o botão em FACA e saiu VACA. Apertou em PASSO e saiu PAÇO. A oficina inteira riu.",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Olhe o título e as pistas.",
    bloco: {
      titulo: "A Máquina de Trocar Sons",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: estrela, nome: "Um botão vermelho" },
        { imagemUrl: livros, nome: "Palavras mudando" },
      ],
      pergunta: "Do que essa história vai falar?",
      hipoteses: [
        { texto: "De trocar um som e a palavra virar outra.", imagemUrl: estrela },
        { texto: "De uma máquina de lavar roupa quebrada.", imagemUrl: livro },
        { texto: "De um bolo de aniversário.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Trocar um som muda a palavra inteira.",
      feedbackErro: "O título fala em TROCAR SONS. É disso que a história trata.",
      dica: "Leia o título com atenção: o que a máquina troca?",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras para hoje.",
    cards: [
      {
        palavra: "som",
        explicacao: "É o que a gente escuta. Cada letra da palavra tem o seu som.",
        exemplo: "O som do S em SAPO é /sss/.",
        imagemUrl: estrela,
      },
      {
        palavra: "trocar",
        explicacao: "É tirar uma coisa e colocar outra no lugar.",
        exemplo: "Se eu trocar o F de FACA pelo V, fica VACA.",
        imagemUrl: livros,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Troque um som e veja a palavra mudar",
    instrucao: "Escute cada palavra, troque o som pedido e ouça o que aparece.",
    blocos: [
      {
        tipo: "trocarFonema",
        itens: [
          { palavra: "FACA", de: "f", para: "v", resultado: "VACA", posicao: "inicio" },
          { palavra: "MALA", de: "m", para: "b", resultado: "BALA", posicao: "inicio" },
          { palavra: "PATO", de: "p", para: "g", resultado: "GATO", posicao: "inicio" },
          { palavra: "CASA", de: "s", para: "ch", resultado: "CACHA", posicao: "meio" },
          { palavra: "PORTA", de: "p", para: "t", resultado: "TORTA", posicao: "inicio" },
        ],
      },
      {
        tipo: "segmentarFonemas",
        itens: [
          { palavra: "CARTAZ", fonemas: ["c", "a", "r", "t", "a", "z"] },
          { palavra: "PLANTA", fonemas: ["p", "l", "a", "n", "t", "a"] },
          { palavra: "ESCOLA", fonemas: ["e", "s", "c", "o", "l", "a"] },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "S, SS e Ç: o som /sss/ tem três roupas",
        explicacao:
          "No começo da palavra o som /sss/ é S (SAPO). Entre duas vogais ele fica com som de Z se for um S só (CASA), então usamos SS para manter o som /sss/ (PASSO). Antes de A, O e U também podemos usar Ç (CAÇA, AÇÚCAR).",
        exemplos: [
          { palavra: "sapo", destaque: "s", motivo: "Começo de palavra: S." },
          { palavra: "passo", destaque: "ss", motivo: "Som /sss/ entre vogais: SS." },
          { palavra: "casa", destaque: "s", motivo: "Um S entre vogais soa /z/." },
          { palavra: "caça", destaque: "ç", motivo: "Som /sss/ antes de A: Ç." },
        ],
        desafios: [
          {
            molde: "pa_o",
            opcoes: ["ss", "s"],
            correta: 0,
            frase: "Ele deu um PASSO para frente.",
            feedbackErro: "Com um S só ficaria PASO com som de Z. O certo é PASSO.",
          },
          {
            molde: "ca_a",
            opcoes: ["ç", "ss"],
            correta: 0,
            frase: "A CAÇA ao tesouro começou.",
            feedbackErro: "Antes de A o som /sss/ pode ser escrito com Ç: CAÇA.",
          },
          {
            molde: "_apo",
            opcoes: ["ss", "s"],
            correta: 1,
            frase: "O SAPO pulou na lagoa.",
            feedbackErro: "Nenhuma palavra começa com SS. No começo é S: SAPO.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto comigo.",
    leitura: {
      titulo: "O botão vermelho",
      imagemUrl: bibliotecaria,
      legendaImagem: "A máquina de trocar sons",
      destacar: ["faca", "vaca", "passo", "caça"],
      paragrafos: [
        "Brilha colocou a palavra FACA na máquina e apertou o botão.",
        "Só um som mudou, e saiu VACA. Ele deu um passo para trás, assustado.",
        "Aurora riu: — Viu? Um som só já vira outra palavra. É por isso que a gente lê com atenção.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto quando precisar.",
    perguntas: [
      {
        pergunta: "Qual palavra Brilha colocou na máquina?",
        opcoes: ["VACA", "FACA", "CASA"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! FACA entrou na máquina.",
        feedbackErro: "Está na primeira frase.",
        dica: "A resposta está logo na primeira linha do texto.",
        reensino:
          "Vamos entender juntos: entrou FACA e saiu VACA. A que entrou é a primeira citada.",
        ondeEstaNoTexto: "…colocou a palavra FACA na máquina…",
      },
      {
        pergunta: "Por que a palavra mudou?",
        opcoes: [
          "Porque um som foi trocado",
          "Porque a máquina quebrou",
          "Porque Aurora apagou uma letra",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Certo! Só um som mudou.",
        feedbackErro: "Está escrito: 'Só um som mudou, e saiu VACA'.",
        dica: "Procure a frase que começa com 'Só um som…'.",
        reensino:
          "Vamos entender juntos: trocar o /f/ pelo /v/ transforma FACA em VACA. Um som só muda tudo.",
        ondeEstaNoTexto: "Só um som mudou, e saiu VACA.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem age e onde acontece.",
    perguntas: [
      {
        pergunta: "Quem avisou Brilha sobre o botão?",
        opcoes: ["Aurora", "Piu", "A máquina"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Aurora avisou.",
        feedbackErro: "Procure quem fala com travessão no texto.",
        dica: "Personagem é quem faz e quem fala.",
      },
      {
        pergunta: "Onde fica a máquina?",
        opcoes: ["No fundo da oficina", "No jardim", "Na cozinha"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! No fundo da oficina.",
        feedbackErro: "O lugar aparece na história do começo da aula.",
        dica: "Cenário é o lugar onde tudo acontece.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a cena na ordem certa.",
    bloco: {
      instrucao: "Começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Brilha coloca FACA na máquina.", imagemUrl: brilha },
        { id: "p2", texto: "Ele aperta o botão vermelho.", imagemUrl: estrela },
        { id: "p3", texto: "Sai VACA e Brilha se assusta.", imagemUrl: livros },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito!",
      feedbackErro: "Primeiro COLOCA, depois APERTA e por último SAI a nova palavra.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "A caça das palavras",
      imagemUrl: livros,
      destacar: ["caça", "passo", "sapo"],
      paragrafos: [
        "Aurora propôs uma caça às palavras da oficina.",
        "A cada passo, Brilha achava uma palavra nova escondida numa prateleira.",
        "A última era SAPO. Ele trocou o primeiro som e virou CAPO, que não existe. Riu e devolveu o som certo.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que Aurora propôs?",
        opcoes: ["Uma caça às palavras", "Um jogo de bola", "Uma prova escrita"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Uma CAÇA às palavras.",
        feedbackErro: "Está na primeira frase do texto.",
        dica: "A resposta está na linha um.",
        reensino: "Vamos entender juntos: leia a primeira frase e procure o que Aurora propôs.",
        ondeEstaNoTexto: "Aurora propôs uma caça às palavras…",
      },
      {
        pergunta: "Qual era a última palavra encontrada?",
        opcoes: ["CAÇA", "SAPO", "PASSO"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! SAPO.",
        feedbackErro: "Está no último parágrafo: 'A última era…'.",
        dica: "Leia a última parte do texto.",
        reensino:
          "Vamos entender juntos: o texto diz 'A última era SAPO'. Depois ele brincou de trocar o som.",
        ondeEstaNoTexto: "A última era SAPO.",
      },
    ],
  },

  momento_fluencia: {
    titulo: "Ler três vezes: A caça das palavras",
    instrucao:
      "O mesmo trechinho três vezes: em eco, no cronômetro e mais uma. Cada vez sai mais solto.",
    texto: [
      "Aurora propôs uma caça às palavras da oficina.",
      "A cada passo, Brilha achava uma palavra nova.",
      "A última palavra escondida era SAPO.",
    ],
    metaSegundos: 22,
  },

  momento09_revisao: {
    pontos: [
      "Trocar um som só já transforma a palavra: FACA vira VACA.",
      "No começo da palavra o som /sss/ se escreve com S: SAPO.",
      "Entre vogais, para manter o som /sss/, usamos SS: PASSO.",
      "Antes de A, O e U o som /sss/ também pode ser Ç: CAÇA, AÇÚCAR.",
    ],
    miniDesafio: {
      pergunta: "Qual palavra está escrita corretamente?",
      opcoes: ["paso", "passo", "paço de pé"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! PASSO, com SS.",
      feedbackErro: "Com um S só, o som vira /z/. Para o som /sss/ entre vogais, use SS.",
      dica: "O som entre as vogais é forte /sss/ ou fraquinho /z/?",
      reensino:
        "Vamos entender juntos: entre vogais, um S soa /z/ (CASA) e dois S soam /sss/ (PASSO).",
    },
  },

  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Ouça, monte e escreva de verdade.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
          {
            palavra: "PASSO",
            silabas: ["PAS", "SO"],
            distratores: ["CA", "ÇA"],
            dica: "Som /sss/ entre vogais: dois S.",
          },
          {
            palavra: "CAÇA",
            silabas: ["CA", "ÇA"],
            distratores: ["PAS", "SO"],
            dica: "Antes de A o som /sss/ pode ser Ç.",
          },
          {
            palavra: "SAPO",
            silabas: ["SA", "PO"],
            distratores: ["CAR", "TA"],
            dica: "Começo de palavra: um S só.",
          },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "O sapo deu um passo.",
            palavras: ["O", "sapo", "deu", "um", "passo."],
            distratores: ["caça", "grande"],
            dica: "Maiúscula no começo e ponto no fim.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "legenda",
        titulo: "Legenda da máquina",
        comando:
          "Escreva uma legenda para a máquina de trocar sons: o que ela faz e um exemplo.",
        campos: [
          { rotulo: "O que a máquina faz", placeholder: "Ela troca...", minLetras: 12 },
          { rotulo: "Exemplo", placeholder: "FACA vira...", minLetras: 6 },
        ],
        cicloRevisao: true,
        checklist: [
          "Expliquei o que a máquina faz.",
          "Dei um exemplo de palavra que muda.",
          "Comecei com letra maiúscula.",
        ],
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Se eu trocar o P de PATO pelo G, qual palavra aparece?",
        opcoes: ["GATO", "PANO", "PRATO", "MATO"],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«PANO» não é a resposta. A certa é «GATO».",
          "«PRATO» não é a resposta. A certa é «GATO».",
          "«MATO» não é a resposta. A certa é «GATO».",
        ],
        feedbackAcerto: "🎉 Isso! PATO → GATO.",
        feedbackErro: "Troque só o primeiro som: /g/ + ATO = GATO.",
        dica: "Guarde o -ATO e troque só o primeiro som.",
        reensino: "Vamos entender juntos: tire o /p/ de PATO e coloque /g/. Fica GATO.",
      },
      {
        pergunta: "2/5 — Como se escreve corretamente?",
        opcoes: ["paso", "passo", "paço", "pasu"],
        correta: 1,
        feedbackOpcoes: [
          "«paso» não é a resposta. A certa é «passo».",
          null,
          "«paço» não é a resposta. A certa é «passo».",
          "«pasu» não é a resposta. A certa é «passo».",
        ],
        feedbackAcerto: "🎉 PASSO, com SS.",
        feedbackErro: "Para o som /sss/ entre vogais usamos SS.",
        dica: "Um S entre vogais soa /z/. Precisamos do som forte.",
        reensino: "Vamos entender juntos: CASA tem som /z/; PASSO tem som /sss/, por isso SS.",
      },
      {
        pergunta: "3/5 — Quantos sons tem a palavra PLANTA?",
        opcoes: ["Quatro", "Cinco", "Seis", "Três"],
        correta: 2,
        feedbackOpcoes: [
          "«Quatro» não é a resposta. A certa é «Seis».",
          "«Cinco» não é a resposta. A certa é «Seis».",
          null,
          "«Três» não é a resposta. A certa é «Seis».",
        ],
        feedbackAcerto: "🎉 /p/ /l/ /a/ /n/ /t/ /a/ — seis sons!",
        feedbackErro: "Conte som por som: /p/ /l/ /a/ /n/ /t/ /a/.",
        dica: "Fale bem devagar e levante um dedo a cada som.",
        reensino:
          "Vamos entender juntos: sílaba é diferente de som. PLAN-TA tem 2 sílabas, mas 6 sons.",
      },
      {
        pergunta: "4/5 — Qual palavra usa Ç corretamente?",
        opcoes: ["çapo", "caça", "çola", "paçso"],
        correta: 1,
        feedbackOpcoes: [
          "«çapo» não é a resposta. A certa é «caça».",
          null,
          "«çola» não é a resposta. A certa é «caça».",
          "«paçso» não é a resposta. A certa é «caça».",
        ],
        feedbackAcerto: "🎉 CAÇA! Ç antes de A.",
        feedbackErro: "O Ç nunca começa palavra e só aparece antes de A, O e U.",
        dica: "Veja qual letra vem depois do Ç em cada opção.",
        reensino:
          "Vamos entender juntos: Ç só vem antes de A, O e U, e nunca no começo da palavra.",
      },
      {
        pergunta: "5/5 — Se eu trocar o M de MALA pelo B, aparece…",
        opcoes: ["BALA", "MELA", "MALHA", "SALA"],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«MELA» não é a resposta. A certa é «BALA».",
          "«MALHA» não é a resposta. A certa é «BALA».",
          "«SALA» não é a resposta. A certa é «BALA».",
        ],
        feedbackAcerto: "🎉 MALA → BALA!",
        feedbackErro: "Guarde o -ALA e troque só o primeiro som por /b/.",
        dica: "Só o primeiro som muda; o resto continua igual.",
        reensino: "Vamos entender juntos: /b/ + ALA = BALA.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 A máquina de sons da cozinha",
    materiais: ["Papel e lápis"],
    passos: [
      "1) O adulto fala uma palavra simples (MALA, PATO, FACA).",
      "2) A criança troca o primeiro som e diz a palavra nova.",
      "3) Escrevam juntos dois pares que apareceram.",
      "4) Procurem em casa uma embalagem com SS ou Ç.",
    ],
    registro: "📝 Escreva a palavra com SS ou Ç que vocês encontraram.",
  },

  recompensa: { xp: 110, moedas: 65 },
};
