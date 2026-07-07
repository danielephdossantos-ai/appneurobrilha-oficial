import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import casa_img from "@/assets/neuro-treino/objetos/casa.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import dado_img from "@/assets/neuro-treino/objetos/dado.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP06 — O Nome das Letras
 * BNCC: princípio acrofônico (nome carrega o som).
 */
const aula: Aula = {
  codigo: "EF02LP06",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "O Nome das Letras",
  narrativa: {
    titulo: "O Nome das Letras",
    contexto: "Brilha visita a Casa das Letras — cada letra tem um nome.",
    problema: "As letras esqueceram o próprio nome!",
    convite: "Bora ajudar as letras a se apresentarem de novo?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Perceber que o NOME da letra carrega o som dela (princípio acrofônico).",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "A", imagemUrl: album_img, silabas: ["A"], frase: "Abelha começa com A." },
      { palavra: "B", imagemUrl: bola_img, silabas: ["B"], frase: "Bola começa com B." },
      { palavra: "C", imagemUrl: casa_img, silabas: ["C"], frase: "Casa começa com C." },
      { palavra: "D", imagemUrl: dado_img, silabas: ["D"], frase: "Dado começa com D." },
      { palavra: "E", imagemUrl: escola_img, silabas: ["E"], frase: "Escola começa com E." }
    ]
  },
  objetivos: ["Dizer o nome das letras.", "Perceber o som dentro do nome.", "Associar letra à palavra que começa com ela.", "Reconhecer letra pelo som.", "Diferenciar letra e som."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🔡 Cada letra tem NOME (bê, cê, dê…) e o próprio som mora dentro do nome.\nBê→/b/ · Dê→/d/ · Cê→/s/ ou /k/.",
  explicacoesNiveis: {
    nivel1: "Preste atenção nos detalhes da explicação.",
    nivel2: "Olhe os cards de Aprendendo — cada um mostra um exemplo.",
    nivel3: "Pense onde isso aparece no seu dia a dia.",
    nivel4: "Escritores e leitores usam isso o tempo todo!"
  },
  exemploResolvido: {
    enunciado: "Como aplicar o que aprendemos?",
    passos: [
      "Leia com calma o exemplo.",
      "Pense no que a Brilha faria.",
      "Escolha a alternativa que combina com a explicação."
    ],
    resposta: "Você usou o que aprendeu. ✅"
  },
  atividadeGuiada: {
    enunciado: "Toque na figura que combina com A.",
    resposta: "A.",
    explicacao: "A é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: A",
      opcoes: [
        { nome: "album", imagemUrl: album_img },
        { nome: "bola", imagemUrl: bola_img },
        { nome: "casa", imagemUrl: casa_img }
      ],
      respostaCerta: "album"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com A?", resposta: "A.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com B?", resposta: "B.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com C?", resposta: "C.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "A", itemImagemUrl: album_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "B", itemImagemUrl: bola_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "C", itemImagemUrl: casa_img, quantidade: 1, cor: "#10B981" },
        { personagem: "D", itemImagemUrl: dado_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "E", itemImagemUrl: escola_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com A?", opcoes: ["A", "B", "C"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com B?", opcoes: ["B", "A", "C"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com C?", opcoes: ["C", "A", "B"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com D?", opcoes: ["D", "A", "B"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["O Nome das Letras", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ O Nome das Letras.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com A?", opcoes: ["A","B","C"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com B?", opcoes: ["B","A","C"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com C?", opcoes: ["C","A","B"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["O Nome das Letras", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Guardião das Letras! 🎁 Item: Casa das Letras.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Nossos antepassados criaram o alfabeto usando o som INICIAL de cada nome!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de A",
      instrucao: "Toque pra ouvir. Qual figura combina com A?",
      pergunta: "Palavra: A",
      opcoes: [
        { nome: "A", imagemUrl: album_img, rotulo: "A" },
        { nome: "B", imagemUrl: bola_img, rotulo: "B" },
        { nome: "C", imagemUrl: casa_img, rotulo: "C" }
      ],
      correta: 0,
      acerto: "✅ A!",
      erro: "Ouça de novo e escolha A."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de B",
      instrucao: "Toque pra ouvir. Qual figura combina com B?",
      pergunta: "Palavra: B",
      opcoes: [
        { nome: "B", imagemUrl: bola_img, rotulo: "B" },
        { nome: "A", imagemUrl: album_img, rotulo: "A" },
        { nome: "C", imagemUrl: casa_img, rotulo: "C" }
      ],
      correta: 0,
      acerto: "✅ B!",
      erro: "Ouça de novo e escolha B."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de C",
      instrucao: "Toque pra ouvir. Qual figura combina com C?",
      pergunta: "Palavra: C",
      opcoes: [
        { nome: "C", imagemUrl: casa_img, rotulo: "C" },
        { nome: "A", imagemUrl: album_img, rotulo: "A" },
        { nome: "B", imagemUrl: bola_img, rotulo: "B" }
      ],
      correta: 0,
      acerto: "✅ C!",
      erro: "Ouça e escolha C."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["A", "B", "C"],
      imagens: [
        { imagemUrl: album_img, quantidade: 1, rotulo: "A" },
        { imagemUrl: bola_img, quantidade: 1, rotulo: "B" },
        { imagemUrl: casa_img, quantidade: 1, rotulo: "C" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com D?",
      pergunta: "Palavra: D",
      opcoes: [
        { nome: "D", imagemUrl: dado_img, rotulo: "D" },
        { nome: "A", imagemUrl: album_img, rotulo: "A" },
        { nome: "B", imagemUrl: bola_img, rotulo: "B" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha D."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["A","B","C"], correta: 0, explicacao: "É A.", visual: { tipo: "itens", imagemUrl: album_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["B","A","C"], correta: 0, explicacao: "É B.", visual: { tipo: "itens", imagemUrl: bola_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["C","A","B"], correta: 0, explicacao: "É C.", visual: { tipo: "itens", imagemUrl: casa_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["O Nome das Letras", "Só matemática", "Só música"], correta: 0, explicacao: "O Nome das Letras." },
      { pergunta: "B aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "C tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Alfabeto Mágico",
    objetivo: "Ache 3 palavras: BOLA, DADO, ESCOLA.",
    tempoSegundos: 90,
    elementos: [
      { nome: "A", imagemUrl: album_img, rotulo: "A" },
      { nome: "B", imagemUrl: bola_img, rotulo: "B" },
      { nome: "C", imagemUrl: casa_img, rotulo: "C" }
    ],
    distratores: [
      { nome: "Sol", imagemUrl: sol_img, rotulo: "☀️" },
      { nome: "Bola", imagemUrl: bola_img, rotulo: "⚽" },
      { nome: "Coruja", imagemUrl: coruja_img, rotulo: "🦉" },
      { nome: "Estrela", imagemUrl: estrela_img, rotulo: "⭐" }
    ],
    acerto: "🎯 Mestre da missão!"
  },
  missaoFamilia: {
    titulo: "Nomeando Letras",
    instrucao: "Digam o nome de cada letra do próprio nome e anotem quantas letras têm.",
    permitirFoto: true,
    registros: [
      { label: "Meu nome tem __ letras", tipo: "texto" },{ label: "1ª letra + som", tipo: "texto" },{ label: "Última letra + som", tipo: "texto" },{ label: "Letra favorita?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP07" }
};

export default aula;
