import type { Aula } from "../types";
import gatoImg from "@/assets/neuro-treino/objetos/gato.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import bananaImg from "@/assets/neuro-treino/objetos/banana.png";
import casaImg from "@/assets/neuro-treino/objetos/casa.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import macaImg from "@/assets/neuro-treino/objetos/maca.png";
import peixeImg from "@/assets/neuro-treino/objetos/peixe.png";
import carroImg from "@/assets/neuro-treino/objetos/carro.png";
import sapoImg from "@/assets/neuro-treino/objetos/sapo.png";
import bolaImg from "@/assets/neuro-treino/objetos/bola.png";

/**
 * EF01LP02 — Aula 002 · Biblioteca Pedagógica Escola Brilha
 * Ensino Fundamental I · 1º Ano · Língua Portuguesa
 * BNCC: Escrever, espontaneamente ou por ditado, palavras e frases de
 * forma alfabética, usando letras/grafemas que representem os fonemas.
 *
 * Missão do Dia: "A Fábrica de Palavras do Brilha" (Brilha + Vento Bagunceiro).
 * Padrão travado (gabarito EF01MA02): jogos visuais em toda categoria,
 * imagens do banco de mídias, foco em som ↔ letra.
 */
const aula: Aula = {
  codigo: "EF01LP02",
  ano: "1º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "A Fábrica de Palavras do Brilha",

  narrativa: {
    titulo: "A Fábrica de Palavras do Brilha",
    contexto:
      "O Brilha encontrou uma máquina muito especial escondida na floresta: a Fábrica de Palavras. Ela transforma sons em letras e monta as palavras direitinho.",
    problema:
      "O Vento Bagunceiro passou por ali e espalhou todas as letras pelo chão. Sem elas, a Fábrica não consegue montar nenhuma palavra.",
    convite:
      "Vamos ouvir os sons, achar as letras certas e ajudar o Brilha a montar as palavras de novo?",
  },

  conhecimentosPrevios: [
    "Reconhecer as letras do alfabeto.",
    "Perceber que a fala é formada por sons.",
    "Ler da esquerda para a direita (EF01LP01).",
  ],

  missao:
    "Descobrir que cada som da fala tem uma letra correspondente e usar isso para escrever palavras e frases simples.",

  objetivos: [
    "Relacionar som e letra (fonema ↔ grafema).",
    "Escrever palavras simples ouvindo os sons.",
    "Completar palavras trocando a letra que falta.",
    "Montar pequenas frases de forma alfabética.",
  ],

  motivacao:
    "Escrever é um superpoder: a gente ouve um som e transforma em letra. Bora ligar a Fábrica de Palavras do Brilha?",

  explicacao:
    "Toda palavra que a gente fala é um monte de SONS colados um no outro. E cada som tem uma LETRA que representa ele no papel.\n\nEscuta a palavra GATO: G · A · T · O. São 4 sons e 4 letras.\n\nPra escrever, é só ouvir a palavra bem devagar e ir colocando as letras na ordem dos sons — sempre da esquerda pra direita.\n\nÀs vezes vai sair torto, e tá tudo bem! Escrever é praticar. Quanto mais a gente escreve, mais rápido o cérebro aprende quais letras usar.",

  explicacoesNiveis: {
    nivel1: "Cada som que a gente fala vira uma letra no papel.",
    nivel2:
      "SOL tem 3 sons: S · O · L. É por isso que escrevemos com 3 letras.",
    nivel3:
      "É como montar um brinquedo de encaixe: o som escolhe a letra certa.",
    nivel4:
      "Escrevendo o nome, listas, bilhetes e desenhos, o cérebro treina o caminho som → letra.",
  },

  exemploResolvido: {
    enunciado: "Vamos escrever a palavra SOL. Quais letras usamos?",
    passos: [
      "Escute a palavra bem devagar: SSS · OOO · LLL.",
      "Cada som pede uma letra: S, depois O, depois L.",
      "Coloque as letras na ordem, da esquerda pra direita.",
    ],
    resposta: "SOL — três sons, três letras: S + O + L.",
  },

  atividadeGuiada: {
    enunciado:
      "O Brilha falou a palavra 'CASA'. Qual figura combina com essa palavra?",
    resposta: "A casa — CASA tem os sons C · A · S · A.",
    explicacao:
      "Ouvindo devagar CA-SA, dá pra montar C + A + S + A. A figura da casa combina com esses sons.",
    visual: {
      tipo: "escolherImagem",
      pergunta:
        "Toque na figura da palavra que o Brilha falou: 'CASA' (C-A-S-A).",
      opcoes: [
        { nome: "casa", imagemUrl: casaImg },
        { nome: "gato", imagemUrl: gatoImg },
        { nome: "carro", imagemUrl: carroImg },
      ],
      respostaCerta: "casa",
    },
  },

  exercicios: [
    {
      enunciado:
        "🌞 A palavra SOL tem quantas letras?",
      resposta: "3 letras: S, O, L.",
      dica: "Fala a palavra devagar: SSS · OOO · LLL.",
    },
    {
      enunciado:
        "🍌 Complete: BA _ ANA. Qual letra falta pra formar BANANA?",
      resposta: "A letra N — BANANA.",
      dica: "Ouça o som do meio: ba-NA-na.",
    },
    {
      enunciado:
        "🐱 Escreva os sons da palavra GATO, um por vez.",
      resposta: "G · A · T · O — quatro sons, quatro letras.",
      dica: "Fala bem devagar, marcando cada som com o dedo.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: o Brilha vai falar 3 palavras. Ouça cada uma com atenção e escolha a figura certa.",
    resposta:
      "SAPO 🐸 · MAÇÃ 🍎 · BOLA ⚽. Cada palavra tem sons que combinam com uma figura.",
    visual: {
      cena: [
        { personagem: "SAPO", itemImagemUrl: sapoImg, quantidade: 1, cor: "#34D399" },
        { personagem: "MAÇÃ", itemImagemUrl: macaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "BOLA", itemImagemUrl: bolaImg, quantidade: 1, cor: "#60A5FA" },
      ],
      perguntas: [
        {
          pergunta:
            "O Brilha falou: 'SAPO' (S · A · P · O). Qual figura é?",
          opcoes: ["Maçã", "Sapo", "Bola"],
          correta: 1,
          explicacao:
            "SAPO começa com o som SSS — é o bicho verde que pula.",
        },
        {
          pergunta:
            "Agora ele falou: 'MAÇÃ' (M · A · Ç · Ã). Qual figura é?",
          opcoes: ["Sapo", "Bola", "Maçã"],
          correta: 2,
          explicacao:
            "MAÇÃ começa com o som MMM — é a frutinha vermelha.",
        },
        {
          pergunta:
            "Última: 'BOLA' (B · O · L · A). Qual figura é?",
          opcoes: ["Bola", "Sapo", "Maçã"],
          correta: 0,
          explicacao:
            "BOLA começa com o som BBB — dá pra rolar e chutar.",
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "Toda palavra é formada por sons colados.",
      "Cada som tem uma letra que representa ele no papel.",
      "Ouvindo devagar, dá pra escolher as letras certas.",
      "Praticar todo dia deixa a escrita cada vez melhor.",
    ],
    dica: "Antes de escrever, fale a palavra devagar e marque cada som com o dedo.",
  },

  quiz: [
    {
      pergunta: "As palavras são formadas por...",
      opcoes: ["Letras", "Desenhos", "Números"],
      correta: 0,
      explicacao:
        "Palavras são feitas de letras. Cada letra representa um som da fala.",
    },
    {
      pergunta: "Qual palavra está escrita corretamente pra combinar com 🐱?",
      opcoes: ["GTO", "GATO", "GAO"],
      correta: 1,
      explicacao:
        "GATO tem 4 sons (G · A · T · O), então precisa de 4 letras na ordem.",
    },
    {
      pergunta: "O que representa os sons da fala no papel?",
      opcoes: ["Letras", "Cores", "Figuras"],
      correta: 0,
      explicacao:
        "As letras são a forma escrita dos sons que a gente fala.",
    },
    {
      pergunta: "Pra escrever cada vez melhor, precisamos...",
      opcoes: ["Praticar todo dia", "Apagar tudo", "Escrever só uma vez"],
      correta: 0,
      explicacao:
        "Quanto mais a gente escreve, mais rápido o cérebro liga som ↔ letra.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Construtor de Palavras! Agora você sabe que cada som vira uma letra. Missão em Casa: escolha 5 objetos da casa, fale o nome bem devagar e escreva do jeito que conseguir. Ninguém escreve pela criança — cada tentativa vale!",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Quando você aprende a escrever, seu cérebro cria um caminho novo que liga o SOM que os ouvidos escutam à LETRA que os olhos veem. Quanto mais você escreve, mais forte esse caminho fica — e mais fácil vai ficando escrever qualquer palavra.",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ouça e toque na figura",
      instrucao:
        "O Brilha falou a palavra 'SOL' (S · O · L). Toque na figura certa — a professora vai falar o nome.",
      opcoes: [
        { nome: "SOL", imagemUrl: solImg, rotulo: "☀️ SOL" },
        { nome: "BANANA", imagemUrl: bananaImg, rotulo: "🍌 BANANA" },
        { nome: "BOLA", imagemUrl: bolaImg, rotulo: "⚽ BOLA" },
      ],
      correta: 0,
      acerto: "Isso! SOL começa com o som SSS — é a estrela do dia!",
      erro: "Escute de novo: S · O · L. Toque na figura que começa com o som SSS.",
    },

    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ouça e toque na figura",
      instrucao:
        "O Brilha falou a palavra 'BANANA' (B · A · N · A · N · A). Toque na figura certa.",
      opcoes: [
        { nome: "MAÇÃ", imagemUrl: macaImg, rotulo: "🍎 MAÇÃ" },
        { nome: "BANANA", imagemUrl: bananaImg, rotulo: "🍌 BANANA" },
        { nome: "PEIXE", imagemUrl: peixeImg, rotulo: "🐟 PEIXE" },
      ],
      correta: 1,
      acerto: "Muito bem! BANANA — B · A · N · A · N · A.",
      erro: "Escute: ba-NA-na. Toque na fruta amarelinha.",
    },

    {
      tipo: "ordenar",
      titulo: "Fase 3 · Monte a palavra",
      instrucao:
        "As letras da palavra desta figura estão embaralhadas. Coloque na ordem certa pra formar CASA (C · A · S · A).",
      itens: ["C", "A", "S", "A"],
      imagens: [
        { imagemUrl: casaImg, quantidade: 1, rotulo: "1ª letra · C" },
        { imagemUrl: casaImg, quantidade: 1, rotulo: "2ª letra · A" },
        { imagemUrl: casaImg, quantidade: 1, rotulo: "3ª letra · S" },
        { imagemUrl: casaImg, quantidade: 1, rotulo: "4ª letra · A" },
      ],
    },
    {
      tipo: "ligar",
      titulo: "Fase 4 · Ligue som e figura",
      instrucao:
        "O Brilha vai falar cada palavra. Ligue cada nome à figura certa.",
      pares: [
        { a: "GATO (G · A · T · O)", b: "🐱", aImagem: gatoImg, bImagem: gatoImg },
        { a: "PEIXE (P · E · I · X · E)", b: "🐟", aImagem: peixeImg, bImagem: peixeImg },
        { a: "CARRO (C · A · R · R · O)", b: "🚗", aImagem: carroImg, bImagem: carroImg },
      ],
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Oficina do Brilha",
      instrucao:
        "O Brilha falou: 'CACHORRO' (C · A · C · H · O · R · R · O). Toque na figura certa.",
      opcoes: [
        { nome: "CACHORRO", imagemUrl: cachorroImg, rotulo: "🐶 CACHORRO" },
        { nome: "GATO", imagemUrl: gatoImg, rotulo: "🐱 GATO" },
        { nome: "SAPO", imagemUrl: sapoImg, rotulo: "🐸 SAPO" },
      ],
      correta: 0,
      acerto: "Excelente! CACHORRO começa com o som C — é o amigo que late.",
      erro: "Escute: ca-CHO-rro. Toque no animal que late.",
    },
  ],


  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Quantas letras tem a palavra SOL?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        explicacao: "SOL tem 3 sons e 3 letras: S · O · L.",
        visual: {
          tipo: "itens",
          imagemUrl: solImg,
          quantidade: 1,
          rotulo: "☀️ SOL",
        },
      },
      {
        pergunta: "Qual figura tem o nome GATO?",
        opcoes: ["Cachorro", "Gato", "Sapo"],
        correta: 1,
        explicacao: "GATO começa com o som G — é o bichinho de estimação.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: cachorroImg, quantidade: 1, rotulo: "Cachorro", cor: "#F472B6" },
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "Gato", cor: "#FBBF24" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "Sapo", cor: "#34D399" },
          ],
        },
      },
      {
        pergunta: "Qual letra completa: BA _ ANA?",
        opcoes: ["M", "N", "L"],
        correta: 1,
        explicacao: "Falando ba-NA-na, o som do meio é N.",
        visual: {
          tipo: "itens",
          imagemUrl: bananaImg,
          quantidade: 1,
          rotulo: "🍌 BA _ ANA",
        },
      },
    ],
    medio: [
      {
        pergunta: "As letras da palavra CASA são C · A · S · A. Quantas letras?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        explicacao: "4 sons, 4 letras: C + A + S + A.",
        visual: {
          tipo: "itens",
          imagemUrl: casaImg,
          quantidade: 1,
          rotulo: "🏠 CASA",
        },
      },
      {
        pergunta: "Qual figura tem o nome MAÇÃ?",
        opcoes: ["Maçã", "Banana", "Peixe"],
        correta: 0,
        explicacao: "MAÇÃ começa com o som M — é a fruta vermelha.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: macaImg, quantidade: 1, rotulo: "Maçã", cor: "#F472B6" },
            { imagemUrl: bananaImg, quantidade: 1, rotulo: "Banana", cor: "#FBBF24" },
            { imagemUrl: peixeImg, quantidade: 1, rotulo: "Peixe", cor: "#60A5FA" },
          ],
        },
      },
      {
        pergunta: "Qual palavra combina com 🐟?",
        opcoes: ["PEIXE", "PATO", "PORCO"],
        correta: 0,
        explicacao: "PEIXE — P · E · I · X · E. Começa com o som P.",
        visual: {
          tipo: "itens",
          imagemUrl: peixeImg,
          quantidade: 1,
          rotulo: "🐟",
        },
      },
    ],
    dificil: [
      {
        pergunta:
          "Pra escrever a palavra CARRO, qual é a primeira letra?",
        opcoes: ["K", "C", "Q"],
        correta: 1,
        explicacao: "CARRO começa com o som K, escrito com a letra C.",
        visual: {
          tipo: "itens",
          imagemUrl: carroImg,
          quantidade: 1,
          rotulo: "🚗 CARRO",
        },
      },
      {
        pergunta:
          "Qual figura combina com a frase 'O cachorro corre'?",
        opcoes: ["Cachorro", "Sapo", "Gato"],
        correta: 0,
        explicacao:
          "A frase fala de um CACHORRO — figura do bichinho que late.",
        visual: {
          tipo: "comparar",
          lados: [
            { imagemUrl: cachorroImg, quantidade: 1, rotulo: "Cachorro", cor: "#60A5FA" },
            { imagemUrl: sapoImg, quantidade: 1, rotulo: "Sapo", cor: "#34D399" },
            { imagemUrl: gatoImg, quantidade: 1, rotulo: "Gato", cor: "#FBBF24" },
          ],
        },
      },
      {
        pergunta:
          "Se eu escrever G-T-O em vez de GATO, o que aconteceu?",
        opcoes: [
          "Esqueci uma letra (A)",
          "Escrevi certo",
          "Sobrou uma letra",
        ],
        correta: 0,
        explicacao:
          "GATO tem 4 sons (G · A · T · O). Sem a letra A, faltou o som do meio.",
        visual: {
          tipo: "itens",
          imagemUrl: gatoImg,
          quantidade: 1,
          rotulo: "🐱 GATO",
        },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01LP03",
    titulo: "Observar escritas convencionais e comparar com as próprias tentativas",
  },
};

export default aula;
