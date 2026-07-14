import type { Aula } from "../types";
import { url as cachorroImg } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as bolaImg } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as macaImg } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as passaroImg } from "@/assets/neuro-treino/objetos/passaro.png.asset.json";
import { url as meninoImg } from "@/assets/neuro-treino/objetos/menino-acordando.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as florImg } from "@/assets/neuro-treino/objetos/flor.png.asset.json";

/**
 * EF01LP09 — Aula 009 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * Missão do Dia: "O Mistério das Frases Desmontadas".
 * Padrão travado: tap-to-speak — toque na figura ou palavra pra ouvir.
 */
const aula: Aula = {
  codigo: "EF01LP09",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Mistério das Frases Desmontadas",

  narrativa: {
    titulo: "O Mistério das Frases Desmontadas",
    contexto:
      "Durante a Festa das Palavras, uma ventania espalhou todas as placas da floresta. As palavras estão fora de ordem e ninguém entende os avisos.",
    problema:
      "Sem as frases certas, a festa não pode começar!",
    convite:
      "Vamos ajudar o Brilha a reorganizar cada frase antes do festival?",
  },

  conhecimentosPrevios: [
    "Reconhecer palavras em diferentes contextos (EF01LP08).",
    "Relacionar imagem e palavra escrita.",
    "Identificar sílabas e sons iniciais.",
  ],

  missao:
    "Colocar as palavras na ordem certa pra formar frases com sentido.",

  objetivos: [
    "Compreender que várias palavras formam uma frase.",
    "Identificar a ordem correta das palavras.",
    "Relacionar frases com imagens.",
    "Ampliar o vocabulário e a leitura inicial.",
  ],

  motivacao:
    "Uma palavra sozinha diz pouco. Juntas e na ordem certa, elas contam histórias!",

  explicacao:
    "Uma frase é um grupo de palavras na ordem certa que diz alguma coisa.\n\n🐶 O cachorro corre.\n👧 A menina pula.\n🐦 O pássaro voa.\n\nSe a ordem muda, a frase pode não fazer mais sentido:\n❌ CORRE O CACHORRO.\n✅ O CACHORRO CORRE.",

  explicacoesNiveis: {
    nivel1: "Frase = várias palavras juntas que dizem uma ideia completa.",
    nivel2:
      "A ordem importa: primeiro QUEM faz, depois O QUE faz. 'O gato mia', 'A menina lê'.",
    nivel3:
      "Frases combinam com imagens: a figura mostra o que a frase diz.",
    nivel4:
      "Frases começam com letra maiúscula e terminam com ponto final.",
  },

  exemploResolvido: {
    enunciado: "Monte a frase com estas palavras: MENINA · A · PULA",
    passos: [
      "Comece por QUEM faz a ação: A MENINA.",
      "Depois coloque O QUE ela faz: PULA.",
      "Fica: A MENINA PULA.",
    ],
    resposta: "A MENINA PULA. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual frase combina com a imagem?",
    resposta: "O CACHORRO CORRE. ✅",
    explicacao:
      "A figura é um 🐶 cachorro correndo. A frase certa começa por QUEM (o cachorro) e depois O QUE faz (corre).",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual figura combina com 'O CACHORRO CORRE'?",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorroImg },
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "passaro", imagemUrl: passaroImg },
      ],
      respostaCerta: "cachorro",
    },
  },

  exercicios: [
    {
      enunciado: "Complete: O ___ mia.",
      resposta: "GATO — O GATO MIA.",
      dica: "Que animal faz 'miau'? 🐱",
    },
    {
      enunciado: "Complete: A ___ canta.",
      resposta: "PASSARINHO — A PASSARINHO CANTA (o passarinho canta).",
      dica: "Que animal voa e canta? 🐦",
    },
    {
      enunciado: "Coloque em ordem: CORRE · O · MENINO.",
      resposta: "O MENINO CORRE.",
      dica: "Comece por QUEM: O MENINO.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: leia cada placa e escolha a frase certa pra imagem.",
    resposta:
      "A ordem das palavras muda tudo. Comece por QUEM, depois O QUE faz.",
    visual: {
      cena: [
        { personagem: "MENINO", itemImagemUrl: meninoImg, quantidade: 1, cor: "#60A5FA" },
        { personagem: "GATO", itemImagemUrl: gatoImg, quantidade: 1, cor: "#FBBF24" },
        { personagem: "MAÇÃ", itemImagemUrl: macaImg, quantidade: 1, cor: "#F87171" },
        { personagem: "PÁSSARO", itemImagemUrl: passaroImg, quantidade: 1, cor: "#34D399" },
        { personagem: "MENINO", itemImagemUrl: meninoImg, quantidade: 1, cor: "#A78BFA" },
      ],
      perguntas: [
        {
          pergunta: "Qual frase está correta?",
          opcoes: ["CORRE MENINO O", "O MENINO CORRE", "MENINO O CORRE"],
          correta: 1,
          explicacao: "Começa por QUEM (O MENINO) e depois O QUE faz (CORRE).",
        },
        {
          pergunta: "Qual palavra completa: A ___ mia?",
          opcoes: ["GATO", "CASA", "LÁPIS"],
          correta: 0,
          explicacao: "Quem mia é o 🐱 GATO. (A frase certa é 'O GATO MIA'.)",
        },
        {
          pergunta: "Qual frase combina com a figura 🍎?",
          opcoes: [
            "MAÇÃ COME O MENINO",
            "O MENINO COME MAÇÃ",
            "COME O MAÇÃ MENINO",
          ],
          correta: 1,
          explicacao: "Quem come? O MENINO. O que come? MAÇÃ.",
        },
        {
          pergunta: "Qual palavra completa: O ___ voa?",
          opcoes: ["PÁSSARO", "SAPATO", "MESA"],
          correta: 0,
          explicacao: "Quem voa é o 🐦 PÁSSARO.",
        },
        {
          pergunta: "Qual frase corresponde a um menino chutando a bola?",
          opcoes: [
            "A BOLA CHUTA O MENINO",
            "O MENINO CHUTA A BOLA",
            "CHUTA MENINO A BOLA",
          ],
          correta: 1,
          explicacao: "Quem chuta? O MENINO. O que chuta? A BOLA.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "🧩 Frase = palavras juntas na ordem certa.",
      "👤 Comece por QUEM faz a ação.",
      "🏃 Depois venha O QUE essa pessoa/animal faz.",
      "🖼️ A figura ajuda a entender a frase.",
    ],
    dica: "Leia sempre da esquerda pra direita: QUEM → O QUE FAZ → COMPLEMENTO.",
  },

  quiz: [
    {
      pergunta: "Qual frase está correta?",
      opcoes: ["CORRE MENINO O", "O MENINO CORRE", "MENINO O CORRE"],
      correta: 1,
      explicacao: "A ordem certa é: O MENINO CORRE.",
    },
    {
      pergunta: "Qual palavra completa: A ___ mia?",
      opcoes: ["GATO", "CASA", "LÁPIS"],
      correta: 0,
      explicacao: "🐱 GATO — quem mia é o gato.",
    },
    {
      pergunta: "As frases servem pra:",
      opcoes: ["Organizar ideias", "Fazer desenhos", "Contar números"],
      correta: 0,
      explicacao: "Frases organizam ideias em palavras.",
    },
    {
      pergunta: "Qual frase combina com uma menina lendo?",
      opcoes: ["A MENINA LÊ", "O MENINO DORME", "O GATO PULA"],
      correta: 0,
      explicacao: "A menina + a ação de ler = A MENINA LÊ.",
    },
    {
      pergunta: "As palavras da frase precisam estar:",
      opcoes: ["Misturadas", "Na ordem certa", "Escondidas"],
      correta: 1,
      explicacao: "Só na ordem certa a frase faz sentido.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Construtor de Frases! Missão em Família: leiam juntos 3 frases num livro, revista ou embalagem e conversem sobre quem aparece e o que está acontecendo.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quando colocamos as palavras na ordem certa, fica muito mais fácil entender o que queremos dizer. É por isso que as frases têm começo, meio e fim!",
  },

  interativas: [
    {
      tipo: "arrastar",
      titulo: "Fase 1 · Monte a Frase (A MENINA PULA)",
      instrucao:
        "Arraste cada palavra pro lugar certo pra formar a frase: A MENINA PULA.",
      pares: [
        { item: "A", alvo: "1º" },
        { item: "MENINA", alvo: "2º" },
        { item: "PULA", alvo: "3º" },
      ],
      alvosVisuais: [
        { nome: "1º", cor: "#F97316", capacidade: 1 },
        { nome: "2º", cor: "#60A5FA", capacidade: 1 },
        { nome: "3º", cor: "#34D399", capacidade: 1 },
      ],
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 2 · Qual Frase Está Correta?",
      instrucao:
        "Toque na figura pra ouvir. Depois toque em cada frase e escolha a que faz sentido.",
      figura: { imagemUrl: macaImg, rotulo: "🍎 + 👦" },
      pergunta: "Qual frase está correta?",
      opcoes: [
        "O MENINO COME MAÇÃ",
        "MAÇÃ COME O MENINO",
        "COME O MAÇÃ MENINO",
      ],
      correta: 0,
      acerto: "🎉 Isso! Quem come é o MENINO, e o que come é a MAÇÃ.",
      erro: "Pense: quem come? O menino. Então começa por 'O MENINO...'",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 3 · Complete: O ___ dorme.",
      instrucao:
        "Toque na figura pra ouvir. Depois escolha a palavra que completa a frase.",
      figura: { imagemUrl: gatoImg, rotulo: "🐱 O ___ dorme." },
      pergunta: "Qual palavra completa: O ___ dorme?",
      opcoes: ["GATO", "CASA", "BOLA"],
      correta: 0,
      acerto: "🐱 O GATO DORME! Perfeito.",
      erro: "A figura é um gato. A frase certa é 'O GATO DORME'.",
    },
    {
      tipo: "escolherEscrita",
      titulo: "Fase 4 · Complete: A ___ canta.",
      instrucao:
        "Toque em cada palavra pra ouvir. Qual completa a frase?",
      figura: { imagemUrl: passaroImg, rotulo: "🐦 A ___ canta." },
      pergunta: "Qual palavra completa: A ___ canta?",
      opcoes: ["PASSARINHO", "SAPATO", "MESA"],
      correta: 0,
      acerto: "🐦 A PASSARINHO CANTA — quem canta é o passarinho!",
      erro: "Quem canta é o 🐦 passarinho.",
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Correio das Frases (O CACHORRO DORME)",
      instrucao:
        "O Piu vai entregar a placa com a frase 'O CACHORRO DORME'. Escolha a figura certa.",
      pergunta: "Qual figura combina com 'O CACHORRO DORME'?",
      opcoes: [
        { nome: "CACHORRO", imagemUrl: cachorroImg, rotulo: "🐶 CACHORRO" },
        { nome: "GATO", imagemUrl: gatoImg, rotulo: "🐱 GATO" },
        { nome: "PÁSSARO", imagemUrl: passaroImg, rotulo: "🐦 PÁSSARO" },
      ],
      correta: 0,
      acerto: "📬 Placa entregue! 🐶 O CACHORRO DORME.",
      erro: "A frase fala do CACHORRO. Escolha o 🐶.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual frase combina com 🐶?",
        opcoes: ["O CACHORRO LATE", "A CASA VOA", "O SOL MIA"],
        correta: 0,
        explicacao: "🐶 → O CACHORRO LATE.",
        visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "🐶" },
      },
      {
        pergunta: "Qual frase combina com ☀️?",
        opcoes: ["O SOL BRILHA", "O GATO CORRE", "A BOLA DORME"],
        correta: 0,
        explicacao: "☀️ → O SOL BRILHA.",
        visual: { tipo: "itens", imagemUrl: solImg, quantidade: 1, rotulo: "☀️" },
      },
      {
        pergunta: "Qual frase combina com 🌸?",
        opcoes: ["A FLOR CHEIRA BEM", "O MENINO VOA", "O PÁSSARO NADA"],
        correta: 0,
        explicacao: "🌸 → A FLOR CHEIRA BEM.",
        visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌸" },
      },
    ],
    medio: [
      {
        pergunta: "Coloque em ordem: PULA · MENINA · A.",
        opcoes: ["A MENINA PULA", "PULA A MENINA", "MENINA PULA A"],
        correta: 0,
        explicacao: "Quem pula? A menina. Ordem: A MENINA PULA.",
        visual: { tipo: "itens", imagemUrl: meninoImg, quantidade: 1, rotulo: "👧 PULA" },
      },
      {
        pergunta: "Complete: O ___ voa.",
        opcoes: ["PÁSSARO", "GATO", "CASA"],
        correta: 0,
        explicacao: "🐦 PÁSSARO voa.",
        visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "🐦" },
      },
      {
        pergunta: "Qual frase combina com um menino chutando a bola?",
        opcoes: [
          "O MENINO CHUTA A BOLA",
          "A BOLA CHUTA O MENINO",
          "CHUTA A BOLA O MENINO",
        ],
        correta: 0,
        explicacao: "Quem chuta? O MENINO. O que chuta? A BOLA.",
        visual: { tipo: "itens", imagemUrl: bolaImg, quantidade: 1, rotulo: "⚽" },
      },
    ],
    dificil: [
      {
        pergunta: "Qual frase está bem escrita?",
        opcoes: [
          "O gato come peixe.",
          "Come gato o peixe.",
          "Peixe come o gato.",
        ],
        correta: 0,
        explicacao: "Quem come? O gato. O que come? Peixe.",
        visual: { tipo: "itens", imagemUrl: gatoImg, quantidade: 1, rotulo: "🐱" },
      },
      {
        pergunta: "As frases sempre começam com:",
        opcoes: ["Letra maiúscula", "Número", "Ponto final"],
        correta: 0,
        explicacao: "Toda frase começa com letra maiúscula e termina com ponto final.",
        visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Abc." },
      },
      {
        pergunta: "As palavras de uma frase devem estar:",
        opcoes: ["Na ordem certa", "Misturadas", "Escondidas"],
        correta: 0,
        explicacao: "Só na ordem certa a frase faz sentido.",
        visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "🧩" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP10",
  },
};

export default aula;
