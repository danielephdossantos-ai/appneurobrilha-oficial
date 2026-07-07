import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import binoculo_img from "@/assets/neuro-treino/objetos/binoculo.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import flor_img from "@/assets/neuro-treino/objetos/flor.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import quadro_a_img from "@/assets/neuro-treino/objetos/quadro-alegre.png";
import quadro_t_img from "@/assets/neuro-treino/objetos/quadro-triste.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP10 — Palavras Amigas e Opostas
 * BNCC: sinônimos e antônimos (in-/im-).
 */
const aula: Aula = {
  codigo: "EF02LP10",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Palavras Amigas e Opostas",
  narrativa: {
    titulo: "Palavras Amigas e Opostas",
    contexto: "Brilha entra na Galeria das Palavras.",
    problema: "Algumas palavras têm palavras AMIGAS (que querem dizer a mesma coisa) e outras têm OPOSTAS!",
    convite: "Bora descobrir os pares?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Reconhecer sinônimos e formar antônimos com in-/im- (feliz→infeliz).",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "BONITO", imagemUrl: quadro_a_img, silabas: ["BO", "NI", "TO"], frase: "Que dia bonito!" },
      { palavra: "LINDO", imagemUrl: flor_img, silabas: ["LIN", "DO"], frase: "Um lindo desenho." },
      { palavra: "FELIZ", imagemUrl: quadro_a_img, silabas: ["FE", "LIZ"], frase: "Estou feliz hoje." },
      { palavra: "INFELIZ", imagemUrl: quadro_t_img, silabas: ["IN", "FE", "LIZ"], frase: "Ficou infeliz com a chuva." },
      { palavra: "IMPOSSÍVEL", imagemUrl: binoculo_img, silabas: ["IM", "POS", "SÍ", "VEL"], frase: "Isso é impossível!" }
    ]
  },
  objetivos: ["Entender sinônimo.", "Entender antônimo.", "Formar antônimo com in-.", "Formar antônimo com im-.", "Usar em frase."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🎭 SINÔNIMO = quer dizer a mesma coisa (BONITO ≈ LINDO).\nANTÔNIMO = o OPOSTO (FELIZ ≠ TRISTE).\nCom IN- ou IM- criamos antônimos: FELIZ→INFELIZ, POSSÍVEL→IMPOSSÍVEL.",
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
    enunciado: "Toque na figura que combina com BONITO.",
    resposta: "BONITO.",
    explicacao: "BONITO é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: BONITO",
      opcoes: [
        { nome: "quadro_a", imagemUrl: quadro_a_img },
        { nome: "flor", imagemUrl: flor_img },
        { nome: "quadro_a", imagemUrl: quadro_a_img }
      ],
      respostaCerta: "quadro_a"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com BONITO?", resposta: "BONITO.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com LINDO?", resposta: "LINDO.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com FELIZ?", resposta: "FELIZ.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "BONITO", itemImagemUrl: quadro_a_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "LINDO", itemImagemUrl: flor_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "FELIZ", itemImagemUrl: quadro_a_img, quantidade: 1, cor: "#10B981" },
        { personagem: "INFELIZ", itemImagemUrl: quadro_t_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "IMPOSSÍVEL", itemImagemUrl: binoculo_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com BONITO?", opcoes: ["BONITO", "LINDO", "FELIZ"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com LINDO?", opcoes: ["LINDO", "BONITO", "FELIZ"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com FELIZ?", opcoes: ["FELIZ", "BONITO", "LINDO"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com INFELIZ?", opcoes: ["INFELIZ", "BONITO", "LINDO"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Palavras Amigas e Opostas", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Palavras Amigas e Opostas.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com BONITO?", opcoes: ["BONITO","LINDO","FELIZ"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com LINDO?", opcoes: ["LINDO","BONITO","FELIZ"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com FELIZ?", opcoes: ["FELIZ","BONITO","LINDO"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Palavras Amigas e Opostas", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Colecionador de Palavras! 🎁 Item: Galeria das Palavras.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "A prefixo IN- vira IM- antes de P ou B — por isso IMPOSSÍVEL e IMBATÍVEL!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de BONITO",
      instrucao: "Toque pra ouvir. Qual figura combina com BONITO?",
      pergunta: "Palavra: BONITO",
      opcoes: [
        { nome: "BONITO", imagemUrl: quadro_a_img, rotulo: "BONITO" },
        { nome: "LINDO", imagemUrl: flor_img, rotulo: "LINDO" },
        { nome: "FELIZ", imagemUrl: quadro_a_img, rotulo: "FELIZ" }
      ],
      correta: 0,
      acerto: "✅ BONITO!",
      erro: "Ouça de novo e escolha BONITO."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de LINDO",
      instrucao: "Toque pra ouvir. Qual figura combina com LINDO?",
      pergunta: "Palavra: LINDO",
      opcoes: [
        { nome: "LINDO", imagemUrl: flor_img, rotulo: "LINDO" },
        { nome: "BONITO", imagemUrl: quadro_a_img, rotulo: "BONITO" },
        { nome: "FELIZ", imagemUrl: quadro_a_img, rotulo: "FELIZ" }
      ],
      correta: 0,
      acerto: "✅ LINDO!",
      erro: "Ouça de novo e escolha LINDO."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de FELIZ",
      instrucao: "Toque pra ouvir. Qual figura combina com FELIZ?",
      pergunta: "Palavra: FELIZ",
      opcoes: [
        { nome: "FELIZ", imagemUrl: quadro_a_img, rotulo: "FELIZ" },
        { nome: "BONITO", imagemUrl: quadro_a_img, rotulo: "BONITO" },
        { nome: "LINDO", imagemUrl: flor_img, rotulo: "LINDO" }
      ],
      correta: 0,
      acerto: "✅ FELIZ!",
      erro: "Ouça e escolha FELIZ."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["BONITO", "LINDO", "FELIZ"],
      imagens: [
        { imagemUrl: quadro_a_img, quantidade: 1, rotulo: "BONITO" },
        { imagemUrl: flor_img, quantidade: 1, rotulo: "LINDO" },
        { imagemUrl: quadro_a_img, quantidade: 1, rotulo: "FELIZ" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com INFELIZ?",
      pergunta: "Palavra: INFELIZ",
      opcoes: [
        { nome: "INFELIZ", imagemUrl: quadro_t_img, rotulo: "INFELIZ" },
        { nome: "BONITO", imagemUrl: quadro_a_img, rotulo: "BONITO" },
        { nome: "LINDO", imagemUrl: flor_img, rotulo: "LINDO" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha INFELIZ."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["BONITO","LINDO","FELIZ"], correta: 0, explicacao: "É BONITO.", visual: { tipo: "itens", imagemUrl: quadro_a_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["LINDO","BONITO","FELIZ"], correta: 0, explicacao: "É LINDO.", visual: { tipo: "itens", imagemUrl: flor_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["FELIZ","BONITO","LINDO"], correta: 0, explicacao: "É FELIZ.", visual: { tipo: "itens", imagemUrl: quadro_a_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Palavras Amigas e Opostas", "Só matemática", "Só música"], correta: 0, explicacao: "Palavras Amigas e Opostas." },
      { pergunta: "LINDO aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "FELIZ tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Pares de Palavras",
    objetivo: "Ache 3 pares: bonito/lindo, feliz/infeliz, possível/impossível.",
    tempoSegundos: 90,
    elementos: [
      { nome: "BONITO", imagemUrl: quadro_a_img, rotulo: "BONITO" },
      { nome: "LINDO", imagemUrl: flor_img, rotulo: "LINDO" },
      { nome: "FELIZ", imagemUrl: quadro_a_img, rotulo: "FELIZ" }
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
    titulo: "Amigos e Opostos",
    instrucao: "Escolham 4 palavras. Digam um sinônimo e um antônimo pra cada.",
    permitirFoto: true,
    registros: [
      { label: "Palavra 1: sinônimo + antônimo", tipo: "texto" },{ label: "Palavra 2", tipo: "texto" },{ label: "Palavra 3", tipo: "texto" },{ label: "Mais divertida?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP11" }
};

export default aula;
