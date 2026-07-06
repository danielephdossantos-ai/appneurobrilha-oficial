import type { Aula } from "../types";
import arvoreImg from "@/assets/neuro-treino/objetos/arvore.png";
import passaroImg from "@/assets/neuro-treino/objetos/passaro.png";
import florImg from "@/assets/neuro-treino/objetos/flor.png";
import chuvaImg from "@/assets/neuro-treino/objetos/chuva.png";
import cachorroImg from "@/assets/neuro-treino/objetos/cachorro.png";
import livroImg from "@/assets/neuro-treino/objetos/livro.png";
import carroImg from "@/assets/neuro-treino/objetos/carro.png";
import solImg from "@/assets/neuro-treino/objetos/sol.png";
import corujaImg from "@/assets/neuro-treino/objetos/coruja.png";
import sementeImg from "@/assets/neuro-treino/objetos/semente.png";
import pincelImg from "@/assets/neuro-treino/objetos/pincel.png";
import girassolImg from "@/assets/neuro-treino/objetos/girassol.png";
import cerejeiraImg from "@/assets/neuro-treino/objetos/cerejeira.png";


/**
 * EF01CI01 — Ciências · 1º Ano
 * Missão do Dia: "Os Cientistas da Floresta".
 * Observação, comparação e registro de elementos do ambiente.
 */
const aula: Aula = {
  codigo: "EF01CI01",
  ano: "1º Ano",
  disciplina: "Ciências",
  titulo: "Os Cientistas da Floresta",

  narrativa: {
    titulo: "Os Cientistas da Floresta",
    contexto:
      "Brilha e a Coruja Sábia acharam um mapa da Floresta Encantada com vários pontos marcados por uma lupa.",
    problema:
      "Cada ponto do mapa esconde uma descoberta — mas só se ilumina se alguém observar com atenção.",
    convite:
      "Bora ser cientista? Observar, comparar e descobrir com o Brilha!",
  },

  conhecimentosPrevios: [
    "Reconhecer seres vivos e objetos do dia a dia.",
    "Perceber cores, tamanhos e formas.",
    "Saber comparar 'igual' e 'diferente'.",
  ],

  missao:
    "Despertar a curiosidade científica: observar, comparar, registrar e compartilhar descobertas sobre o mundo ao redor.",

  objetivos: [
    "Observar elementos do ambiente.",
    "Identificar características de objetos e seres vivos.",
    "Comparar semelhanças e diferenças.",
    "Registrar descobertas simples.",
    "Desenvolver a curiosidade científica.",
  ],

  motivacao:
    "Todo cientista começa fazendo perguntas sobre o que vê — e você já é um!",

  explicacao:
    "🔬 Ser cientista é OBSERVAR com atenção.\n\n🌳 Árvore — cresce, tem folhas, é ser vivo.\n🐦 Pássaro — voa, canta, é ser vivo.\n🪨 Pedra — dura, NÃO é ser vivo.\n🌼 Flor — colorida, atrai insetos, é ser vivo.\n💧 Água — molha, não tem forma fixa.\n\nCientistas comparam: o que é IGUAL e o que é DIFERENTE?",

  explicacoesNiveis: {
    nivel1: "Observar é olhar com atenção pra descobrir coisas novas.",
    nivel2:
      "Seres vivos crescem, se alimentam e se reproduzem. Pedra e livro NÃO.",
    nivel3:
      "Comparar ajuda a entender: duas árvores podem ter tamanhos diferentes; duas flores, cores diferentes.",
    nivel4:
      "Registrar (desenhar, contar, fotografar) guarda a descoberta pra depois.",
  },

  exemploResolvido: {
    enunciado: "Qual destes é um SER VIVO?",
    passos: [
      "Pense: cresce? se alimenta?",
      "🌳 Árvore cresce e precisa de água e sol.",
      "🪨 Pedra não cresce nem se alimenta.",
    ],
    resposta: "🌳 ÁRVORE é ser vivo. ✅",
  },

  atividadeGuiada: {
    enunciado:
      "Toque na figura pra ouvir. Qual destes é um SER VIVO?",
    resposta: "🐦 PÁSSARO.",
    explicacao:
      "O pássaro voa, canta, come e cresce — é ser vivo. O livro e o carro foram feitos por pessoas.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual é ser vivo?",
      opcoes: [
        { nome: "pássaro", imagemUrl: passaroImg },
        { nome: "livro", imagemUrl: livroImg },
        { nome: "carro", imagemUrl: carroImg },
      ],
      respostaCerta: "pássaro",
    },
  },

  exercicios: [
    {
      enunciado: "Qual pertence à NATUREZA?",
      resposta: "🌳 ÁRVORE.",
      dica: "Não foi feito por pessoas.",
    },
    {
      enunciado: "O que os cientistas fazem primeiro?",
      resposta: "OBSERVAM com atenção.",
      dica: "Antes de perguntar, é preciso ver.",
    },
    {
      enunciado: "Duas flores de cores diferentes — o que mudou?",
      resposta: "A COR.",
      dica: "Compare olhando bem pra elas.",
    },
  ],

  desafio: {
    enunciado:
      "Desafio Brilha: mostre que já é um pequeno cientista!",
    resposta:
      "Cientista observa, compara e registra a natureza.",
    visual: {
      perguntas: [
        {
          pergunta: "Qual destes é um SER VIVO?",
          opcoes: ["🐶 CACHORRO", "🚗 CARRO", "📚 LIVRO"],
          correta: 0,
          explicacao: "Cachorro cresce, come e respira — é ser vivo.",
          visual: { tipo: "itens", imagemUrl: cachorroImg, quantidade: 1, rotulo: "🐶" },
        },
        {
          pergunta: "Qual pertence à NATUREZA?",
          opcoes: ["🌳 ÁRVORE", "📚 LIVRO", "🚗 CARRO"],
          correta: 0,
          explicacao: "Árvore nasce e cresce na natureza.",
          visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🌳" },
        },
        {
          pergunta: "Observar é:",
          opcoes: ["Olhar com atenção", "Fechar os olhos", "Correr rápido"],
          correta: 0,
          explicacao: "Observar = olhar com atenção pra descobrir.",
          visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "👀" },
        },
        {
          pergunta: "Duas árvores: uma grande, outra pequena. O que mudou?",
          opcoes: ["O TAMANHO", "A COR", "O NOME"],
          correta: 0,
          explicacao: "Comparar tamanhos: uma é maior, outra menor.",
          visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 2, rotulo: "🌳🌳" },
        },
        {
          pergunta: "O que o cientista faz depois de observar?",
          opcoes: ["REGISTRA a descoberta", "Esquece tudo", "Vai dormir"],
          correta: 0,
          explicacao: "Registra desenhando, contando ou fotografando.",
          visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "📓" },
        },
      ],
    },
  },

  revisao: {
    pontos: [
      "👀 Observar é olhar com atenção.",
      "🌱 Seres vivos crescem e se alimentam.",
      "🪨 Pedras e objetos NÃO são seres vivos.",
      "🔍 Comparar ajuda a achar diferenças.",
      "📓 Registrar guarda a descoberta.",
    ],
    dica: "Antes de responder, pergunte: isso cresce? isso vive?",
  },

  quiz: [
    {
      pergunta: "Qual destes é um SER VIVO?",
      opcoes: ["🐶 CACHORRO", "🚗 BICICLETA", "📚 LIVRO"],
      correta: 0,
      explicacao: "Cachorro é ser vivo — cresce, come, respira.",
    },
    {
      pergunta: "Qual pertence à NATUREZA?",
      opcoes: ["🌳 ÁRVORE", "🖥️ COMPUTADOR", "🪑 CADEIRA"],
      correta: 0,
      explicacao: "Árvore nasce da natureza.",
    },
    {
      pergunta: "Observar significa:",
      opcoes: ["Prestar atenção no que vemos", "Fechar os olhos", "Correr rápido"],
      correta: 0,
      explicacao: "Observar = olhar com atenção.",
    },
    {
      pergunta: "Os cientistas fazem:",
      opcoes: ["Perguntas e descobertas", "Só desenhos", "Só contas"],
      correta: 0,
      explicacao: "Cientistas perguntam e descobrem.",
    },
    {
      pergunta: "Hoje você aprendeu a:",
      opcoes: ["Observar a natureza", "Só pintar", "Só escrever"],
      correta: 0,
      explicacao: "Aprendeu a ser um pequeno cientista da natureza.",
    },
  ],

  conclusao:
    "🏅 Medalha conquistada: Pequeno Cientista! Missão em Família: caminhem juntos e observem 5 elementos da natureza (cor, tamanho, se é vivo). Registrem no Diário do Cientista.",

  curiosidade: {
    titulo: "Você sabia?",
    texto:
      "Todo cientista começa fazendo perguntas sobre aquilo que observa. Uma boa pergunta vale mais que uma resposta pronta!",
  },

  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Observe os Seres Vivos",
      instrucao: "Toque no SER VIVO da floresta.",
      pergunta: "Qual é ser vivo?",
      opcoes: [
        { nome: "CACHORRO", imagemUrl: cachorroImg, rotulo: "🐶 CACHORRO" },
        { nome: "CARRO", imagemUrl: carroImg, rotulo: "🚗 CARRO" },
        { nome: "LIVRO", imagemUrl: livroImg, rotulo: "📚 LIVRO" },
      ],
      correta: 0,
      acerto: "🐶 Isso! Cachorro cresce, come e respira — é ser vivo.",
      erro: "Ser vivo cresce e se alimenta. Tente de novo!",
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Descubra a Diferença",
      instrucao:
        "Duas flores parecidas… qual está DIFERENTE por causa da cor?",
      pergunta: "Qual flor é a AMARELA?",
      opcoes: [
        { nome: "GIRASSOL", imagemUrl: girassolImg, rotulo: "🌻 AMARELA" },
        { nome: "FLOR", imagemUrl: florImg, rotulo: "🌸 ROSA" },
        { nome: "SEMENTE", imagemUrl: sementeImg, rotulo: "🌰 SEMENTE" },
      ],
      correta: 0,
      acerto: "🌻 Boa observação! O girassol é amarelo.",
      erro: "Compare as cores com calma.",
    },
    {
      tipo: "arrastar",
      titulo: "Fase 3 · Classifique",
      instrucao: "Arraste cada coisa pro grupo certo.",
      pares: [
        { item: "🌳 ÁRVORE", alvo: "NATUREZA" },
        { item: "🐦 PÁSSARO", alvo: "NATUREZA" },
        { item: "🪨 PEDRA", alvo: "NATUREZA" },
        { item: "📚 LIVRO", alvo: "CONSTRUÍDOS" },
        { item: "✏️ LÁPIS", alvo: "CONSTRUÍDOS" },
        { item: "🚗 CARRO", alvo: "CONSTRUÍDOS" },
      ],
      alvosVisuais: [
        { nome: "NATUREZA", cor: "#34D399", capacidade: 3 },
        { nome: "CONSTRUÍDOS", cor: "#F97316", capacidade: 3 },
      ],
    },
    {
      tipo: "lupa",
      titulo: "Fase 4 · Laboratório do Brilha",
      instrucao:
        "Toque em cada objeto pra passar a lupa e descobrir um segredo da natureza.",
      itens: [
        {
          nome: "Folha da árvore",
          imagemUrl: arvoreImg,
          rotulo: "🍃 FOLHA",
          descoberta:
            "As folhas têm nervuras — caminhos pequenininhos que levam água pra planta inteira.",
        },
        {
          nome: "Casca de árvore",
          imagemUrl: cerejeiraImg,
          rotulo: "🌳 CASCA",
          descoberta:
            "A casca protege o tronco como uma capinha, e tem rachaduras onde bichinhos moram.",
        },
        {
          nome: "Flor",
          imagemUrl: florImg,
          rotulo: "🌸 FLOR",
          descoberta:
            "As pétalas coloridas chamam abelhas e borboletas pra levar o pólen.",
        },
        {
          nome: "Girassol",
          imagemUrl: girassolImg,
          rotulo: "🌻 GIRASSOL",
          descoberta:
            "O girassol vira o rostinho pro sol o dia todo — parece que está olhando pra ele!",
        },
      ],
      acerto: "🔬 Missão do laboratório concluída! Você é um cientista de verdade.",
    },

    {
      tipo: "escolherEscrita",
      titulo: "Fase 5 · Diário do Cientista",
      instrucao:
        "O Brilha observou o SOL. Marque: é ser vivo?",
      figura: { imagemUrl: solImg, rotulo: "☀️ SOL" },
      pergunta: "O sol é ser vivo?",
      opcoes: ["NÃO — é da natureza, mas não é vivo", "SIM", "É um objeto construído"],
      correta: 0,
      acerto: "🌞 Isso! O sol é da natureza, mas não cresce nem come.",
      erro: "Sol é da natureza — mas não é ser vivo.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      {
        pergunta: "Qual é ser vivo?",
        opcoes: ["🐦 PÁSSARO", "📚 LIVRO", "🚗 CARRO"],
        correta: 0,
        explicacao: "Pássaro voa, canta e cresce.",
        visual: { tipo: "itens", imagemUrl: passaroImg, quantidade: 1, rotulo: "🐦" },
      },
      {
        pergunta: "Qual é da natureza?",
        opcoes: ["🌸 FLOR", "📚 LIVRO", "🚗 CARRO"],
        correta: 0,
        explicacao: "Flor nasce na natureza.",
        visual: { tipo: "itens", imagemUrl: florImg, quantidade: 1, rotulo: "🌸" },
      },
      {
        pergunta: "Água serve pra:",
        opcoes: ["Regar plantas e beber", "Brincar de blocos", "Escrever"],
        correta: 0,
        explicacao: "Água é essencial pra vida.",
        visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "💧" },
      },
    ],
    medio: [
      {
        pergunta: "Duas árvores: uma grande, outra pequena. O que mudou?",
        opcoes: ["O TAMANHO", "O NOME", "A COR"],
        correta: 0,
        explicacao: "Comparação por tamanho.",
        visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 2, rotulo: "🌳🌳" },
      },
      {
        pergunta: "Cientista faz:",
        opcoes: ["Perguntas e descobertas", "Só contas", "Só desenhos"],
        correta: 0,
        explicacao: "Cientistas perguntam e descobrem.",
        visual: { tipo: "itens", imagemUrl: corujaImg, quantidade: 1, rotulo: "🔬" },
      },
      {
        pergunta: "O que NÃO é ser vivo?",
        opcoes: ["🪨 PEDRA", "🌳 ÁRVORE", "🐦 PÁSSARO"],
        correta: 0,
        explicacao: "Pedra não cresce nem se alimenta.",
        visual: { tipo: "itens", imagemUrl: sementeImg, quantidade: 1, rotulo: "🪨" },
      },
    ],
    dificil: [
      {
        pergunta: "O que os cientistas fazem depois de observar?",
        opcoes: ["REGISTRAM a descoberta", "Esquecem", "Nada"],
        correta: 0,
        explicacao: "Registrar guarda a descoberta.",
        visual: { tipo: "itens", imagemUrl: pincelImg, quantidade: 1, rotulo: "📓" },
      },
      {
        pergunta: "Seres vivos precisam de:",
        opcoes: ["Água, ar e alimento", "Só pilhas", "Só tinta"],
        correta: 0,
        explicacao: "Vida precisa de água, ar e alimento.",
        visual: { tipo: "itens", imagemUrl: chuvaImg, quantidade: 1, rotulo: "💧" },
      },
      {
        pergunta: "Nervuras aparecem em:",
        opcoes: ["FOLHAS", "PEDRAS", "LIVROS"],
        correta: 0,
        explicacao: "Folhas têm nervuras que levam água pra planta.",
        visual: { tipo: "itens", imagemUrl: arvoreImg, quantidade: 1, rotulo: "🍃" },
      },
    ],
  },

  proximaHabilidade: {
    codigo: "EF01CI02",
  },
};

export default aula;
