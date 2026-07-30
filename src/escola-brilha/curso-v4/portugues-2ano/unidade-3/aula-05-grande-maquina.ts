import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as livros } from "@/assets/neuro-treino/objetos/livros.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";

/**
 * Unidade 3 · Aula 5 — A Grande Máquina das Palavras
 * -------------------------------------------------------------
 * Missão final da unidade: reconstruir o PRIMEIRO LIVRO da
 * Oficina misturando TUDO que aprendemos — sílabas, alfabeto,
 * palavras amigas/opostas e revisão da escrita.
 *
 * BNCC: EF02LP06 · EF02LP07 · EF02LP08 · EF02LP14 · EF02LP15
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-grande-maquina",
  titulo: "A Grande Máquina das Palavras",
  iconeTrilha: "🏅",
  bncc: [
    "EF02LP06",
    "EF02LP07",
    "EF02LP08",
    "EF02LP14",
    "EF02LP15",
  ],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A Grande Máquina",
    historia:
      "No centro da Oficina há uma MÁQUINA GIGANTE. Aurora explica: — Essa máquina só liga quando você reconstruir o PRIMEIRO LIVRO da biblioteca usando TUDO que aprendeu: sílabas, alfabeto, palavras amigas e opostas, e revisão. Bora!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao:
      "Antes da missão final: qual dessas coisas você aprendeu na Oficina das Palavras?",
    bloco: {
      titulo: "Nossa unidade",
      recado: {
        icone: "🏅",
        rotulo: "Missão da unidade",
        estilo: "cartaz",
        linhas: [
          "SÍLABAS · ALFABETO",
          "AMIGAS · OPOSTAS",
          "REVISAR ESCRITA",
        ],
      },
      pergunta: "Nessa unidade a gente aprendeu…",
      hipoteses: [
        {
          texto: "Tudo: montar palavras, ordem alfabética, amigas/opostas e revisar.",
          imagemUrl: livros,
        },
        {
          texto: "Só a contar até 100.",
          imagemUrl: papel,
        },
        {
          texto: "Só a desenhar.",
          imagemUrl: lapis,
        },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Tudo isso te ajuda a LER e ESCREVER melhor.",
      feedbackErro:
        "A unidade teve 4 aulas: sílabas, alfabeto, palavras amigas/opostas e revisão da escrita.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras finais.",
    cards: [
      {
        palavra: "dicionário",
        explicacao:
          "É um LIVRO com palavras em ordem ALFABÉTICA e o significado de cada uma.",
        exemplo:
          "Se você não sabe o que quer dizer 'AMIGO', procura no dicionário na letra A.",
        imagemUrl: livros,
      },
      {
        palavra: "vocabulário",
        explicacao:
          "São TODAS as palavras que uma pessoa CONHECE. Quanto mais palavras, mais rico o vocabulário.",
        exemplo:
          "Cada palavra nova que você aprende deixa seu vocabulário maior.",
        imagemUrl: estrela,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia com Brilha o resumo da missão de hoje.",
    leitura: {
      titulo: "Como funciona a Grande Máquina",
      imagemUrl: brilha,
      destacar: ["sílabas", "alfabeto", "amigas", "opostas", "revisar"],
      paragrafos: [
        "A Máquina precisa de 4 engrenagens:",
        "1) SÍLABAS — pra formar palavras (CA + SA = CASA).",
        "2) ALFABETO — pra organizar palavras (A antes de B).",
        "3) AMIGAS e OPOSTAS — pra escrever com variedade.",
        "4) REVISAR — pra escrever sem erro.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Cada pergunta é sobre UMA das aulas da unidade.",
    perguntas: [
      {
        pergunta: "CA + SA forma qual palavra?",
        opcoes: ["SACA", "CASA", "ASCA"],
        correta: 1,
        feedbackAcerto: "🎉 CASA (aula das sílabas).",
        feedbackErro: "Junta na ORDEM: CA + SA = CASA.",
        dica: "Volte no texto e procure a parte que fala de 'forma'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Junta na ORDEM: CA + SA = CASA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Entre ABELHA, CASA e BOLA, qual vem PRIMEIRO em ordem alfabética?",
        opcoes: ["ABELHA", "BOLA", "CASA"],
        correta: 0,
        feedbackAcerto: "🎉 ABELHA (A antes de B e C).",
        feedbackErro: "A < B < C. ABELHA vem primeiro.",
        dica: "Volte no texto e procure a parte que fala de 'alfabética'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: A < B < C. ABELHA vem primeiro. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "GRANDE e ENORME são…",
        opcoes: ["Amigas", "Opostas"],
        correta: 0,
        feedbackAcerto: "🎉 Amigas.",
        feedbackErro:
          "Dá pra trocar 'GRANDE' por 'ENORME' sem mudar sentido. Amigas.",
        dica: "Volte no texto e procure a parte que fala de 'grande'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Dá pra trocar 'GRANDE' por 'ENORME' sem mudar sentido. Amigas. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Qual está CERTA?",
        opcoes: ["CASA", "CASZA"],
        correta: 0,
        feedbackAcerto: "🎉 CASA.",
        feedbackErro: "CA-SA = 4 letras. CASA.",
        dica: "Volte no texto e procure a parte que responde a pergunta. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: CA-SA = 4 letras. CASA. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "As 'personagens' da unidade foram as ENGRENAGENS da máquina.",
    perguntas: [
      {
        pergunta: "Qual engrenagem ajuda a MONTAR palavras?",
        opcoes: ["Sílabas", "Alfabeto", "Revisão"],
        correta: 0,
        feedbackAcerto: "🎉 Sílabas.",
        feedbackErro: "SÍLABAS são os pedacinhos que formam a palavra.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Qual engrenagem ajuda a ORGANIZAR palavras?",
        opcoes: ["Sílabas", "Alfabeto", "Amigas"],
        correta: 1,
        feedbackAcerto: "🎉 Alfabeto (ordem alfabética).",
        feedbackErro: "ALFABETO ajuda a organizar (A antes de B).",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "Qual engrenagem ajuda a ESCREVER SEM ERRO?",
        opcoes: ["Revisar", "Amigas", "Sílabas"],
        correta: 0,
        feedbackAcerto: "🎉 Revisar!",
        feedbackErro: "REVISAR = ler de novo pra achar erros.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as 4 aulas da unidade na ordem em que fizemos.",
    bloco: {
      instrucao: "1º Construtor · 2º Trem · 3º Parecidas · 4º Detetive.",
      itens: [
        { id: "a1", texto: "O Construtor de Palavras (sílabas).", imagemUrl: lapis },
        { id: "a2", texto: "O Trem do Alfabeto (ordem alfabética).", imagemUrl: livros },
        { id: "a3", texto: "Palavras que se Parecem (amigas/opostas).", imagemUrl: estrela },
        { id: "a4", texto: "Caça aos Erros (revisar escrita).", imagemUrl: papel },
      ],
      ordemCerta: ["a1", "a2", "a3", "a4"],
      feedbackAcerto: "🎉 Ordem certa das 4 aulas!",
      feedbackErro:
        "1º Construtor, 2º Trem, 3º Parecidas, 4º Detetive.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia e monte a última palavra da unidade.",
    leitura: {
      titulo: "A palavra que liga a máquina",
      imagemUrl: livros,
      destacar: ["LIVRO", "LI", "VRO"],
      paragrafos: [
        "A Máquina só liga se você formar a palavra: LI + VRO.",
        "Fala em voz alta as sílabas e conte quantas são.",
      ],
    },
    perguntas: [
      {
        pergunta: "LI + VRO forma qual palavra?",
        opcoes: ["VROLIVI", "LIVRO", "LIVIVRO"],
        correta: 1,
        feedbackAcerto: "🎉 LIVRO! ⚙️ A Máquina LIGOU!",
        feedbackErro: "Junte na ORDEM: LI + VRO = LIVRO.",
        dica: "Volte no texto e procure a parte que fala de 'forma'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: Junte na ORDEM: LI + VRO = LIVRO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "Quantas sílabas tem LI-VRO?",
        opcoes: ["1", "2", "3"],
        correta: 1,
        feedbackAcerto: "🎉 2 sílabas.",
        feedbackErro: "LI (1) - VRO (2) = 2 palmas.",
        dica: "Volte no texto e procure a parte que fala de 'quantas'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: LI (1) - VRO (2) = 2 palmas. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "A Grande Máquina",
    instrucao:
      "Guarde cada palavra na CAIXA CERTA da máquina — cada caixa é uma coisa que aprendemos.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "⚙️ A Grande Máquina das Palavras",
      bloco: {
        instrucao: "Toque na palavra e depois na caixa onde ela pertence.",
        itens: [
          {
            id: "c1",
            texto: "CA + SA = CASA",
            imagemUrl: casa,
            alvoId: "silabas",
          },
          {
            id: "c2",
            texto: "BO + LA = BOLA",
            imagemUrl: bola,
            alvoId: "silabas",
          },
          {
            id: "c3",
            texto: "ABELHA · BOLA · CASA",
            imagemUrl: abelha,
            alvoId: "alfabeto",
          },
          {
            id: "c4",
            texto: "FELIZ ≈ ALEGRE",
            imagemUrl: estrela,
            alvoId: "amigas",
          },
          {
            id: "c5",
            texto: "DIA ↔ NOITE",
            imagemUrl: sol,
            alvoId: "opostas",
          },
          {
            id: "c6",
            texto: "CASZA → CASA",
            imagemUrl: papel,
            alvoId: "revisar",
          },
          {
            id: "c7",
            texto: "GAATO → GATO",
            imagemUrl: gato,
            alvoId: "revisar",
          },
        ],
        alvos: [
          { id: "silabas", nome: "🧩 Sílabas", imagemUrl: lapis, descricao: "montar palavras" },
          { id: "alfabeto", nome: "🚂 Ordem alfabética", imagemUrl: livros, descricao: "A · B · C" },
          { id: "amigas", nome: "🤝 Amigas", imagemUrl: estrela, descricao: "significado ≈" },
          { id: "opostas", nome: "↔ Opostas", imagemUrl: sol, descricao: "significado contrário" },
          { id: "revisar", nome: "🔍 Revisar", imagemUrl: papel, descricao: "achar erros" },
        ],
        feedbackAcerto:
          "🎉 ⚙️ A Máquina ligou! Primeiro livro remontado. Você é oficialmente um CONSTRUTOR DAS PALAVRAS. 🏅",
        feedbackErro:
          "Pense em CADA cartão: ele é sobre montar? organizar? amigas? opostas? ou corrigir escrita?",
      },
    },
  },

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: A palavra que liga a máquina",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "A Máquina só liga se você formar a palavra: LI + VRO.",
      "Fala em voz alta as sílabas e conte quantas são.",
    ],
    metaSegundos: 20,
  },

momento09_revisao: {
    pontos: [
      "🧩 SÍLABAS — pedacinhos que formam a palavra.",
      "🚂 ALFABETO — as 26 letras em ordem fixa; ajuda a achar rápido.",
      "🤝 AMIGAS — palavras com significado parecido.",
      "↔ OPOSTAS — palavras com significado contrário.",
      "🔍 REVISAR — ler de novo pra corrigir a escrita.",
    ],
    miniDesafio: {
      pergunta:
        "Você quer variar seu texto e evitar repetir GRANDE. Qual palavra AMIGA pode usar?",
      opcoes: ["ENORME", "PEQUENO", "DIA"],
      correta: 0,
      feedbackAcerto:
        "🎉 ENORME — amiga de GRANDE. PEQUENO seria a OPOSTA.",
      feedbackErro:
        "GRANDE ≈ ENORME (amigas). PEQUENO é o OPOSTO.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: GRANDE ≈ ENORME (amigas). PEQUENO é o OPOSTO. Agora leia de novo e escolha com calma.",
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
          palavra: "MÁQUINA",
          silabas: ["MÁ", "QUI", "NA"],
          distratores: ["FÁ", "BRI"],
          dica: "Bata palmas na palavra MÁQUINA: são 3 pedacinhos.",
        },
        {
          palavra: "FÁBRICA",
          silabas: ["FÁ", "BRI", "CA"],
          distratores: ["MÁ", "QUI"],
          dica: "Bata palmas na palavra FÁBRICA: são 3 pedacinhos.",
        },
        {
          palavra: "PALAVRA",
          silabas: ["PA", "LA", "VRA"],
          distratores: ["MÁ", "QUI"],
          dica: "Bata palmas na palavra PALAVRA: são 3 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "A máquina fabrica palavras novas.",
          palavras: ["A", "máquina", "fabrica", "palavras", "novas."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "cartaz",
        titulo: "Cartaz da Máquina das Palavras",
        comando: "Faça o cartaz que explica como funciona a máquina das palavras.",
        campos: [
          { rotulo: "Título GRANDE", placeholder: "A MÁQUINA DAS PALAVRAS", minLetras: 5 },
          { rotulo: "Como funciona", placeholder: "Ela junta pedacinhos e forma…", minLetras: 16 },
        ],
        checklist: [
          "O título é curto.",
          "Expliquei com as minhas palavras.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — SA + PA + TO forma…",
        opcoes: ["PATOSA", "SAPATO", "TAPOSA",
          "3",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«PATOSA» não é a resposta. A certa é «SAPATO».",
          null,
          "«TAPOSA» não é a resposta. A certa é «SAPATO».",
          "«3» não é a resposta. A certa é «SAPATO».",
        ],
        feedbackAcerto: "🎉 SAPATO.",
        feedbackErro: "Na ordem: SA + PA + TO = SAPATO.",
        dica: "Pista: a resposta certa começa com a letra 'S'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Na ordem: SA + PA + TO = SAPATO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — DADO, ABELHA e GATO em ordem alfabética:",
        opcoes: [
          "DADO · ABELHA · GATO",
          "ABELHA · DADO · GATO",
          "GATO · DADO · ABELHA",
          "DIA ↔ NOITE",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«DADO · ABELHA · GATO» não é a resposta. A certa é «ABELHA · DADO · GATO».",
          null,
          "«GATO · DADO · ABELHA» não é a resposta. A certa é «ABELHA · DADO · GATO».",
          "«DIA ↔ NOITE» não é a resposta. A certa é «ABELHA · DADO · GATO».",
        ],
        feedbackAcerto: "🎉 A · D · G.",
        feedbackErro: "Primeira letra: A, D, G. Essa é a ordem.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Primeira letra: A, D, G. Essa é a ordem. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — Qual PAR é AMIGAS?",
        opcoes: ["BONITO ≈ LINDO", "DIA ↔ NOITE", "ALTO ↔ BAIXO",
          "Alfabeto",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«DIA ↔ NOITE» não é a resposta. A certa é «BONITO ≈ LINDO».",
          "«ALTO ↔ BAIXO» não é a resposta. A certa é «BONITO ≈ LINDO».",
          "«Alfabeto» não é a resposta. A certa é «BONITO ≈ LINDO».",
        ],
        feedbackAcerto: "🎉 Amigas!",
        feedbackErro:
          "Amigas = sentido parecido. BONITO ≈ LINDO. Os outros são opostos.",
        dica: "Pista: a resposta certa começa com a letra 'D'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Amigas = sentido parecido. BONITO ≈ LINDO. Os outros são opostos. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — Qual PAR é OPOSTAS?",
        opcoes: ["FELIZ ≈ ALEGRE", "QUENTE ↔ FRIO", "GRANDE ≈ ENORME",
          "Alfabeto",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«FELIZ ≈ ALEGRE» não é a resposta. A certa é «QUENTE ↔ FRIO».",
          null,
          "«GRANDE ≈ ENORME» não é a resposta. A certa é «QUENTE ↔ FRIO».",
          "«Alfabeto» não é a resposta. A certa é «QUENTE ↔ FRIO».",
        ],
        feedbackAcerto: "🎉 Opostas.",
        feedbackErro: "Opostas = contrárias. QUENTE ↔ FRIO.",
        dica: "Pista: a resposta certa começa com a letra 'F'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: Opostas = contrárias. QUENTE ↔ FRIO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — Qual está escrita CERTA?",
        opcoes: ["BANANA", "BANNANA",
          "VROLIVI",
          "Sílabas",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«BANNANA» não é a resposta. A certa é «BANANA».",
          "«VROLIVI» não é a resposta. A certa é «BANANA».",
          "«Sílabas» não é a resposta. A certa é «BANANA».",
        ],
        feedbackAcerto:
          "🎉 BANANA. 🏅 Você é CONSTRUTOR DAS PALAVRAS!",
        feedbackErro:
          "BA-NA-NA = 6 letras. BANANA (sem N dobrado).",
        dica: "Pista: a resposta certa começa com a letra 'B'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: BA-NA-NA = 6 letras. BANANA (sem N dobrado). Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📖 Meu Pequeno Dicionário Ilustrado",
    materiais: [
      "5 folhas ou 1 caderninho",
      "Lápis + canetinhas coloridas",
    ],
    passos: [
      "1) Durante a semana, a criança escolhe 5 PALAVRAS NOVAS que aprendeu (na escola, no livro, na TV).",
      "2) Pra cada palavra, monta uma página do dicionário:",
      "   📖 escreve a PALAVRA em cima.",
      "   🖼️ faz um DESENHO representando ela.",
      "   ✍️ escreve uma FRASE usando a palavra.",
      "3) Coloca as 5 páginas em ORDEM ALFABÉTICA.",
      "4) A família ajuda a explicar o SIGNIFICADO de cada palavra.",
      "5) Guarde tudo — esse é o seu 'Pequeno Dicionário Ilustrado'!",
    ],
    registro:
      "📸 Uma foto do dicionário aberto mostrando as 5 páginas.",
  },

  recompensa: {
    xp: 600,
    moedas: 400,
    medalha: "Construtor das Palavras",
  },
};

void brilha;
void livro;
