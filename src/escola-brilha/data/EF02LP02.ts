import type { Aula } from "../types";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import patoImg from "@/assets/neuro-treino/objetos/pato.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import bicicletaImg from "@/assets/neuro-treino/objetos/bicicleta-moderna.png";
import colaImg from "@/assets/neuro-treino/objetos/colagem.png";
import mapaImg from "@/assets/neuro-treino/objetos/mapa.png";

/**
 * EF02LP02 — Escada Silábica
 * BNCC (oficial): Segmentar palavras em sílabas e remover e substituir
 * sílabas iniciais, mediais ou finais para criar novas palavras.
 *
 * Cada fase treina UMA sub-habilidade da BNCC:
 *  1. Contar sílabas (segmentar).
 *  2. Montar palavra a partir das sílabas.
 *  3. Remover sílaba (posição indicada).
 *  4. Substituir sílaba INICIAL → forma nova palavra.
 *  5. Substituir sílaba FINAL → missão final.
 */
const aula: Aula = {
  codigo: "EF02LP02",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "A Escada Silábica",

  narrativa: {
    titulo: "A Escada Silábica",
    contexto:
      "Brilha subiu na Torre das Palavras e encontrou uma ESCADA MÁGICA feita de sílabas. Cada degrau é um pedacinho de palavra.",
    problema:
      "Um vento forte embaralhou as sílabas! As palavras se despedaçaram e ninguém consegue mais ler os cartazes da Torre.",
    convite:
      "Bora subir a escada CONTANDO, JUNTANDO e TROCANDO sílabas pra recuperar as palavras?",
  },

  conhecimentosPrevios: [
    "Reconhecer letras e sílabas.",
    "Ler palavras curtas com apoio de imagem.",
    "Perceber que sílaba = pedacinho falado de uma vez.",
  ],

  missao:
    "Segmentar palavras em sílabas e criar palavras novas removendo ou trocando sílabas iniciais, mediais e finais.",

  aprendendo: {
    titulo: "Aprendendo",
    instrucao:
      "Toque em cada cartão pra ouvir a palavra, as sílabas e uma frase.",
    cards: [
      {
        palavra: "BOLA",
        imagemUrl: bolaImg,
        silabas: ["BO", "LA"],
        frase: "A bola rolou no campo.",
      },
      {
        palavra: "GATO",
        imagemUrl: gatoImg,
        silabas: ["GA", "TO"],
        frase: "O gato dorme no sofá.",
      },
      {
        palavra: "PATO",
        imagemUrl: patoImg,
        silabas: ["PA", "TO"],
        frase: "O pato nada no lago.",
      },
      {
        palavra: "CASA",
        imagemUrl: casaImg,
        silabas: ["CA", "SA"],
        frase: "Voltei pra casa cedo.",
      },
      {
        palavra: "SAPO",
        imagemUrl: sapoImg,
        silabas: ["SA", "PO"],
        frase: "O sapo pulou na lagoa.",
      },
    ],
  },

  objetivos: [
    "Contar sílabas de uma palavra usando palmas.",
    "Montar a palavra encaixando as sílabas na ordem certa.",
    "Remover uma sílaba e reconhecer o que sobra.",
    "Trocar a sílaba INICIAL e formar palavra nova (ex.: BOLA→COLA).",
    "Trocar a sílaba FINAL e formar palavra nova (ex.: GATO→GATA).",
  ],

  motivacao:
    "Cada sílaba certa acende um degrau da escada mágica — quando você chega em cima, uma nova palavra brilha!",

  explicacao:
    "🪜 SÍLABA = pedacinho falado de uma vez. Bata palma: BO-LA (2), GA-TO (2), BA-NA-NA (3), BI-CI-CLE-TA (4).\n\n✂️ REMOVER uma sílaba muda a palavra: BOLA − BO = LA · GATO − TO = GA.\n\n🔁 TROCAR uma sílaba cria palavra NOVA:\n• Início: BOLA → COLA (troquei BO por CO).\n• Fim: GATO → GATA (troquei TO por TA).\n\nCada troca abre uma porta pra uma palavra diferente!",

  explicacoesNiveis: {
    nivel1: "Só bata palma pra cada pedacinho que ouvir.",
    nivel2: "Encaixe as fichas na ordem em que a palavra é falada.",
    nivel3: "Troque UMA ficha e veja que a palavra vira outra.",
    nivel4:
      "Escritores usam esse truque pra brincar com rimas, apelidos e trocadilhos.",
  },

  exemploResolvido: {
    enunciado: "Vamos transformar BOLA em COLA. Como?",
    passos: [
      "Bata palma em BO-LA. Deu 2 sílabas.",
      "Localize a PRIMEIRA sílaba: BO.",
      "Troque BO por CO.",
      "Leia junto: CO + LA = COLA. Palavra nova! 🎉",
    ],
    resposta:
      "COLA — trocamos a sílaba INICIAL (BO → CO) e formamos uma palavra diferente.",
  },

  atividadeGuiada: {
    enunciado:
      "Vamos praticar juntos: quantas sílabas tem BANANA? Toque na figura pra ouvir devagar e escolha.",
    resposta: "3 sílabas: BA-NA-NA.",
    explicacao:
      "Bata palma junto: BA (1), NA (2), NA (3). Três palmas = três sílabas.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Quantas sílabas tem BANANA?",
      opcoes: [
        { nome: "3", imagemUrl: bananaImg },
        { nome: "2", imagemUrl: bolaImg },
        { nome: "4", imagemUrl: bicicletaImg },
      ],
      respostaCerta: "3",
    },
  },

  exercicios: [
    {
      enunciado: "Bata palma e conte: quantas sílabas tem SAPO?",
      resposta: "2 (SA-PO).",
      dica: "Fale devagar: SA... PO. Duas palmas.",
    },
    {
      enunciado: "Se eu tiro BO de BOLA, o que sobra?",
      resposta: "LA.",
      dica: "BO fica de fora. Sobrou só a última ficha.",
    },
    {
      enunciado: "Trocando BO de BOLA por CO, qual palavra formo?",
      resposta: "COLA.",
      dica: "Leia junto: CO + LA.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: mostre que domina contar, remover e trocar sílabas.",
    resposta: "Cada acerto acende um degrau novo da escada!",
    visual: {
      cena: [
        {
          personagem: "SAPO (2 sílabas)",
          itemImagemUrl: sapoImg,
          quantidade: 2,
          cor: "#22C55E",
        },
        {
          personagem: "BANANA (3 sílabas)",
          itemImagemUrl: bananaImg,
          quantidade: 3,
          cor: "#F59E0B",
        },
        {
          personagem: "BICICLETA (4 sílabas)",
          itemImagemUrl: bicicletaImg,
          quantidade: 4,
          cor: "#3B82F6",
        },
      ],
      perguntas: [
        {
          pergunta: "Quantas sílabas tem SAPO?",
          opcoes: ["2", "1", "3"],
          correta: 0,
          explicacao: "SA-PO. Duas palmas.",
        },
        {
          pergunta: "Quantas sílabas tem BANANA?",
          opcoes: ["3", "2", "4"],
          correta: 0,
          explicacao: "BA-NA-NA. Três palmas.",
        },
        {
          pergunta: "Quantas sílabas tem BICICLETA?",
          opcoes: ["4", "3", "5"],
          correta: 0,
          explicacao: "BI-CI-CLE-TA. Quatro palmas.",
        },
        {
          pergunta: "GATO sem TO fica:",
          opcoes: ["GA", "TO", "GATO"],
          correta: 0,
          explicacao: "Tirei a ÚLTIMA sílaba. Sobrou GA.",
        },
        {
          pergunta: "PATO com PA trocado por GA vira:",
          opcoes: ["GATO", "PATO", "SAPO"],
          correta: 0,
          explicacao: "Troquei a PRIMEIRA sílaba. PA→GA = GATO.",
        },
      ],
    },
  },

  interativas: [
    /* ============ FASE 1: Contar sílabas com palma ============ */
    {
      tipo: "contarSilabas",
      titulo: "Fase 1 · Bata palma pra cada sílaba",
      instrucao:
        "Toque na figura pra ouvir. Depois bata PALMA uma vez pra cada pedacinho da palavra.",
      itens: [
        {
          palavra: "BOLA",
          imagemUrl: bolaImg,
          silabas: ["BO", "LA"],
        },
        {
          palavra: "SAPO",
          imagemUrl: sapoImg,
          silabas: ["SA", "PO"],
        },
        {
          palavra: "BANANA",
          imagemUrl: bananaImg,
          silabas: ["BA", "NA", "NA"],
        },
        {
          palavra: "BICICLETA",
          imagemUrl: bicicletaImg,
          silabas: ["BI", "CI", "CLE", "TA"],
        },
      ],
      acerto: "✅ Você contou todas as sílabas!",
      erro: "Passou do número. Ouça de novo, com calma.",
    },

    /* ============ FASE 2: Montar palavra ============ */
    {
      tipo: "montarSilabas",
      titulo: "Fase 2 · Monte a palavra encaixando as sílabas",
      instrucao:
        "Toque nas fichas NA ORDEM em que a palavra é falada. Tem fichas erradas no meio — cuidado!",
      itens: [
        {
          palavra: "GATO",
          imagemUrl: gatoImg,
          silabas: ["GA", "TO"],
          distratores: ["PO", "SA"],
        },
        {
          palavra: "CASA",
          imagemUrl: casaImg,
          silabas: ["CA", "SA"],
          distratores: ["BO", "LA"],
        },
        {
          palavra: "BANANA",
          imagemUrl: bananaImg,
          silabas: ["BA", "NA", "NA"],
          distratores: ["TO", "MA"],
        },
      ],
      acerto: "🧩 Palavra montada!",
      erro: "Essa sílaba não vem agora. Escute de novo.",
    },

    /* ============ FASE 3: Remover sílaba ============ */
    {
      tipo: "trocarSilaba",
      titulo: "Fase 3 · Remova a sílaba certa",
      instrucao:
        "Toque exatamente na sílaba pedida pra apagá-la. Depois escolha o que sobrou.",
      itens: [
        {
          palavraOrigem: "BOLA",
          silabasOrigem: ["BO", "LA"],
          imagemOrigem: bolaImg,
          operacao: "remover",
          posicao: "inicial",
          indicePosicao: 0,
          palavraFinal: "LA",
          opcoesResposta: ["LA", "BO", "BOLA"],
          correta: 0,
        },
        {
          palavraOrigem: "GATO",
          silabasOrigem: ["GA", "TO"],
          imagemOrigem: gatoImg,
          operacao: "remover",
          posicao: "final",
          indicePosicao: 1,
          palavraFinal: "GA",
          opcoesResposta: ["GA", "TO", "GATO"],
          correta: 0,
        },
        {
          palavraOrigem: "SAPO",
          silabasOrigem: ["SA", "PO"],
          imagemOrigem: sapoImg,
          operacao: "remover",
          posicao: "final",
          indicePosicao: 1,
          palavraFinal: "SA",
          opcoesResposta: ["SA", "PO", "SAPO"],
          correta: 0,
        },
      ],
      acerto: "✂️ Removeu certinho!",
      erro: "Leia devagar as sílabas que sobraram.",
    },

    /* ============ FASE 4: Substituir sílaba INICIAL ============ */
    {
      tipo: "trocarSilaba",
      titulo: "Fase 4 · Troque a PRIMEIRA sílaba",
      instrucao:
        "Toque na primeira sílaba. Depois escolha a sílaba NOVA e leia a palavra formada.",
      itens: [
        {
          palavraOrigem: "BOLA",
          silabasOrigem: ["BO", "LA"],
          imagemOrigem: bolaImg,
          operacao: "substituir",
          posicao: "inicial",
          indicePosicao: 0,
          silabaNova: "CO",
          distratoresSilaba: ["MA", "TA"],
          palavraFinal: "COLA",
          imagemFinal: colaImg,
          opcoesResposta: ["COLA", "BOLA", "MOLA"],
          correta: 0,
        },
        {
          palavraOrigem: "PATO",
          silabasOrigem: ["PA", "TO"],
          imagemOrigem: patoImg,
          operacao: "substituir",
          posicao: "inicial",
          indicePosicao: 0,
          silabaNova: "GA",
          distratoresSilaba: ["SA", "BO"],
          palavraFinal: "GATO",
          imagemFinal: gatoImg,
          opcoesResposta: ["GATO", "PATO", "SAPO"],
          correta: 0,
        },
      ],
      acerto: "🔁 Palavra nova formada!",
      erro: "Leia devagar: sílaba nova + o resto.",
    },

    /* ============ FASE 5: Substituir sílaba FINAL (Missão) ============ */
    {
      tipo: "trocarSilaba",
      titulo: "Fase 5 · Missão Final · Troque a ÚLTIMA sílaba",
      instrucao:
        "Última missão! Toque na última sílaba, troque pela nova e leia a palavra que apareceu.",
      itens: [
        {
          palavraOrigem: "GATO",
          silabasOrigem: ["GA", "TO"],
          imagemOrigem: gatoImg,
          operacao: "substituir",
          posicao: "final",
          indicePosicao: 1,
          silabaNova: "TA",
          distratoresSilaba: ["PA", "LA"],
          palavraFinal: "GATA",
          opcoesResposta: ["GATA", "GATO", "GAPA"],
          correta: 0,
        },
        {
          palavraOrigem: "MAPA",
          silabasOrigem: ["MA", "PA"],
          imagemOrigem: mapaImg,
          operacao: "substituir",
          posicao: "final",
          indicePosicao: 1,
          silabaNova: "LA",
          distratoresSilaba: ["TO", "SA"],
          palavraFinal: "MALA",
          opcoesResposta: ["MALA", "MAPA", "MAMA"],
          correta: 0,
        },
      ],
      acerto: "🌟 Missão da Escada Silábica cumprida!",
      erro: "Leia devagar a nova palavra.",
    },
  ],

  revisao: {
    pontos: [
      "🪜 Sílaba = pedacinho que a gente fala de uma vez.",
      "✋ Bata palma pra contar sílabas.",
      "✂️ Remover uma sílaba muda a palavra (BOLA − BO = LA).",
      "🔁 Trocar UMA sílaba cria PALAVRA NOVA (BOLA → COLA · GATO → GATA).",
    ],
    dica: "Se travar, volte no Aprendendo e escute o cartão da palavra devagar.",
  },

  quiz: [
    {
      pergunta: "Quantas sílabas tem BICICLETA?",
      opcoes: ["4", "3", "2"],
      correta: 0,
      explicacao: "BI-CI-CLE-TA. Quatro palmas.",
    },
    {
      pergunta: "Se eu tiro BO de BOLA, sobra:",
      opcoes: ["LA", "BO", "BOLA"],
      correta: 0,
      explicacao: "Tirei a primeira. Sobrou LA.",
    },
    {
      pergunta: "Trocando BO de BOLA por CO, qual palavra formo?",
      opcoes: ["COLA", "BOLA", "MOLA"],
      correta: 0,
      explicacao: "CO + LA = COLA.",
    },
    {
      pergunta: "Trocando TO de GATO por TA, qual palavra formo?",
      opcoes: ["GATA", "GATO", "GAPA"],
      correta: 0,
      explicacao: "GA + TA = GATA.",
    },
    {
      pergunta: "Uma palavra vira OUTRA quando eu:",
      opcoes: [
        "Troco uma sílaba",
        "Apago tudo",
        "Falo mais alto",
      ],
      correta: 0,
      explicacao: "Trocar uma sílaba muda a palavra inteira.",
    },
  ],

  conclusao:
    "🏅 Medalha desbloqueada: Mestre da Escada Silábica! Você aprendeu a CONTAR, REMOVER e TROCAR sílabas — três superpoderes pra criar palavras novas.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Toda sílaba do Português tem PELO MENOS uma vogal (A, E, I, O, U). É a vogal que faz a sílaba 'soar'. Sem vogal, não tem sílaba!",
  },

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Quantas sílabas tem SAPO?",
        opcoes: ["2", "1", "3"],
        correta: 0,
        explicacao: "SA-PO. Duas.",
        visual: { tipo: "itens", imagemUrl: sapoImg, quantidade: 1 },
      },
      {
        pergunta: "Quantas sílabas tem CASA?",
        opcoes: ["2", "3", "1"],
        correta: 0,
        explicacao: "CA-SA. Duas.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1 },
      },
      {
        pergunta: "Quantas sílabas tem BANANA?",
        opcoes: ["3", "2", "4"],
        correta: 0,
        explicacao: "BA-NA-NA. Três.",
        visual: { tipo: "itens", imagemUrl: bananaImg, quantidade: 1 },
      },
    ],
    medio: [
      {
        pergunta: "BOLA sem LA fica:",
        opcoes: ["BO", "LA", "BOLA"],
        correta: 0,
        explicacao: "Tirei a última: sobrou BO.",
      },
      {
        pergunta: "GATO sem GA fica:",
        opcoes: ["TO", "GA", "GATO"],
        correta: 0,
        explicacao: "Tirei a primeira: sobrou TO.",
      },
      {
        pergunta: "CASA sem CA fica:",
        opcoes: ["SA", "CA", "CASA"],
        correta: 0,
        explicacao: "Tirei a primeira: sobrou SA.",
      },
    ],
    dificil: [
      {
        pergunta:
          "Se troco a PRIMEIRA sílaba de PATO por MA, qual palavra formo?",
        opcoes: ["MATO", "PATO", "GATO"],
        correta: 0,
        explicacao: "MA + TO = MATO.",
      },
      {
        pergunta:
          "Se troco a ÚLTIMA sílaba de MAPA por LA, qual palavra formo?",
        opcoes: ["MALA", "MAPA", "MAMA"],
        correta: 0,
        explicacao: "MA + LA = MALA.",
      },
      {
        pergunta:
          "Se troco a PRIMEIRA sílaba de CASA por MA, qual palavra formo?",
        opcoes: ["MASA", "CASA", "SACA"],
        correta: 0,
        explicacao:
          "MA + SA = MASA (não é palavra comum, mas é o que se forma trocando a sílaba).",
      },
    ],
  },

  missaoFamilia: {
    titulo: "Detetives da Escada Silábica",
    instrucao:
      "Em casa, escolham 5 palavras. Batam PALMA pra contar sílabas de cada uma. Depois brinquem: trocando UMA sílaba, que palavra aparece? (Ex.: MALA → MATA, BOLA → COLA).",
    permitirFoto: true,
    registros: [
      { label: "Palavra 1 e nº de sílabas", tipo: "texto" },
      { label: "Palavra 2 e nº de sílabas", tipo: "texto" },
      { label: "Palavra 3 e nº de sílabas", tipo: "texto" },
      { label: "Palavra nova criada trocando 1 sílaba", tipo: "texto" },
      { label: "Qual foi mais difícil? Por quê?", tipo: "texto" },
    ],
  },

  proximaHabilidade: { codigo: "EF02LP03" },
};

export default aula;
