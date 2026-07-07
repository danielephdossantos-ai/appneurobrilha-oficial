import type { Aula } from "../types";
import ajudar_img from "@/assets/neuro-treino/objetos/ajudar.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import cidade_img from "@/assets/neuro-treino/objetos/cidade.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import dinossauro_img from "@/assets/neuro-treino/objetos/dinossauro.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import heroi_img from "@/assets/neuro-treino/objetos/heroi.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import quadro_t_img from "@/assets/neuro-treino/objetos/quadro-triste.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP28 — Conflito & Solução
 * BNCC: conflito e resolução em narrativas.
 */
const aula: Aula = {
  codigo: "EF02LP28",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Conflito & Solução",
  narrativa: {
    titulo: "Conflito & Solução",
    contexto: "Brilha lê uma história cheia de aventuras.",
    problema: "Toda história tem um PROBLEMA — mas como descobrir qual é?",
    convite: "Bora achar o conflito e a solução em cada história?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Reconhecer o conflito gerador de uma narrativa e sua resolução.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Personagem", imagemUrl: heroi_img, silabas: ["PER", "SO", "NA", "GEM"], frase: "Herói da história." },
      { palavra: "Cenário", imagemUrl: cidade_img, silabas: ["CE", "NÁ", "RIO"], frase: "Cenário da aventura." },
      { palavra: "Problema", imagemUrl: quadro_t_img, silabas: ["PRO", "BLE", "MA"], frase: "O problema surgiu." },
      { palavra: "Solução", imagemUrl: ajudar_img, silabas: ["SO", "LU", "ÇÃO"], frase: "A solução chegou!" },
      { palavra: "Aventura", imagemUrl: dinossauro_img, silabas: ["A", "VEN", "TU", "RA"], frase: "Uma grande aventura!" }
    ]
  },
  objetivos: ["Achar personagem.", "Achar cenário.", "Achar problema.", "Achar solução.", "Contar a história em ordem."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "📖 Toda história tem:\n🦸 Personagem · 🏞️ Cenário · ⚡ Problema (conflito) · ✨ Solução.",
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
    enunciado: "Toque na figura que combina com Personagem.",
    resposta: "Personagem.",
    explicacao: "Personagem é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Personagem",
      opcoes: [
        { nome: "heroi", imagemUrl: heroi_img },
        { nome: "cidade", imagemUrl: cidade_img },
        { nome: "quadro_t", imagemUrl: quadro_t_img }
      ],
      respostaCerta: "heroi"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Personagem?", resposta: "Personagem.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Cenário?", resposta: "Cenário.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Problema?", resposta: "Problema.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Personagem", itemImagemUrl: heroi_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Cenário", itemImagemUrl: cidade_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Problema", itemImagemUrl: quadro_t_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Solução", itemImagemUrl: ajudar_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Aventura", itemImagemUrl: dinossauro_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Personagem?", opcoes: ["Personagem", "Cenário", "Problema"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Cenário?", opcoes: ["Cenário", "Personagem", "Problema"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Problema?", opcoes: ["Problema", "Personagem", "Cenário"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Solução?", opcoes: ["Solução", "Personagem", "Cenário"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Conflito & Solução", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Conflito & Solução.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Personagem?", opcoes: ["Personagem","Cenário","Problema"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Cenário?", opcoes: ["Cenário","Personagem","Problema"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Problema?", opcoes: ["Problema","Personagem","Cenário"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Conflito & Solução", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Detetive das Histórias! 🎁 Item: Lupa Narrativa.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Histórias sem CONFLITO são chatas — o problema é o que faz a gente querer virar a página!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Personagem",
      instrucao: "Toque pra ouvir. Qual figura combina com Personagem?",
      pergunta: "Palavra: Personagem",
      opcoes: [
        { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" },
        { nome: "Cenário", imagemUrl: cidade_img, rotulo: "Cenário" },
        { nome: "Problema", imagemUrl: quadro_t_img, rotulo: "Problema" }
      ],
      correta: 0,
      acerto: "✅ Personagem!",
      erro: "Ouça de novo e escolha Personagem."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Cenário",
      instrucao: "Toque pra ouvir. Qual figura combina com Cenário?",
      pergunta: "Palavra: Cenário",
      opcoes: [
        { nome: "Cenário", imagemUrl: cidade_img, rotulo: "Cenário" },
        { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" },
        { nome: "Problema", imagemUrl: quadro_t_img, rotulo: "Problema" }
      ],
      correta: 0,
      acerto: "✅ Cenário!",
      erro: "Ouça de novo e escolha Cenário."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Problema",
      instrucao: "Toque pra ouvir. Qual figura combina com Problema?",
      pergunta: "Palavra: Problema",
      opcoes: [
        { nome: "Problema", imagemUrl: quadro_t_img, rotulo: "Problema" },
        { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" },
        { nome: "Cenário", imagemUrl: cidade_img, rotulo: "Cenário" }
      ],
      correta: 0,
      acerto: "✅ Problema!",
      erro: "Ouça e escolha Problema."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Personagem", "Cenário", "Problema"],
      imagens: [
        { imagemUrl: heroi_img, quantidade: 1, rotulo: "Personagem" },
        { imagemUrl: cidade_img, quantidade: 1, rotulo: "Cenário" },
        { imagemUrl: quadro_t_img, quantidade: 1, rotulo: "Problema" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Solução?",
      pergunta: "Palavra: Solução",
      opcoes: [
        { nome: "Solução", imagemUrl: ajudar_img, rotulo: "Solução" },
        { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" },
        { nome: "Cenário", imagemUrl: cidade_img, rotulo: "Cenário" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Solução."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Personagem","Cenário","Problema"], correta: 0, explicacao: "É Personagem.", visual: { tipo: "itens", imagemUrl: heroi_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Cenário","Personagem","Problema"], correta: 0, explicacao: "É Cenário.", visual: { tipo: "itens", imagemUrl: cidade_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Problema","Personagem","Cenário"], correta: 0, explicacao: "É Problema.", visual: { tipo: "itens", imagemUrl: quadro_t_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Conflito & Solução", "Só matemática", "Só música"], correta: 0, explicacao: "Conflito & Solução." },
      { pergunta: "Cenário aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Problema tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Detetive Literário",
    objetivo: "Ache 3: PERSONAGEM, PROBLEMA, SOLUÇÃO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Personagem", imagemUrl: heroi_img, rotulo: "Personagem" },
      { nome: "Cenário", imagemUrl: cidade_img, rotulo: "Cenário" },
      { nome: "Problema", imagemUrl: quadro_t_img, rotulo: "Problema" }
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
    titulo: "Detetive de História",
    instrucao: "Leiam uma história curta e apontem personagem, problema e solução.",
    permitirFoto: true,
    registros: [
      { label: "História", tipo: "texto" },{ label: "Personagem", tipo: "texto" },{ label: "Problema", tipo: "texto" },{ label: "Solução", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP29" }
};

export default aula;
