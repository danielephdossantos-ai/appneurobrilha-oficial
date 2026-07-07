import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import desenho_img from "@/assets/neuro-treino/objetos/desenho.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import quadrinhos_img from "@/assets/neuro-treino/objetos/quadrinhos.png";
import raposa_img from "@/assets/neuro-treino/objetos/raposa.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP26 — Biblioteca das Histórias
 * BNCC: ler textos literários de gêneros variados.
 */
const aula: Aula = {
  codigo: "EF02LP26",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Biblioteca das Histórias",
  narrativa: {
    titulo: "Biblioteca das Histórias",
    contexto: "Brilha entra na Biblioteca Encantada — cheia de gêneros!",
    problema: "Cada livro é diferente: uns têm rima, outros têm super-heróis, outros são cordel.",
    convite: "Bora explorar cada gênero literário?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Ler com autonomia textos literários de gêneros variados desenvolvendo o gosto pela leitura.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Conto", imagemUrl: livro_img, silabas: ["CON", "TO"], frase: "Um conto de fada." },
      { palavra: "Poesia", imagemUrl: desenho_img, silabas: ["PO", "E", "SI", "A"], frase: "Poesia com rima." },
      { palavra: "Fábula", imagemUrl: raposa_img, silabas: ["FÁ", "BU", "LA"], frase: "Fábula da raposa." },
      { palavra: "Quadrinho", imagemUrl: quadrinhos_img, silabas: ["QUA", "DRI", "NHO"], frase: "HQ divertida!" },
      { palavra: "Cordel", imagemUrl: album_img, silabas: ["COR", "DEL"], frase: "Cordel nordestino." }
    ]
  },
  objetivos: ["Ler conto.", "Ler poesia.", "Ler quadrinho.", "Ler fábula.", "Escolher o preferido."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "📖 GÊNEROS: conto, poesia, fábula, quadrinho, cordel, lenda.\nCada um conta uma história de um jeito diferente.",
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
    enunciado: "Toque na figura que combina com Conto.",
    resposta: "Conto.",
    explicacao: "Conto é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Conto",
      opcoes: [
        { nome: "livro", imagemUrl: livro_img },
        { nome: "desenho", imagemUrl: desenho_img },
        { nome: "raposa", imagemUrl: raposa_img }
      ],
      respostaCerta: "livro"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Conto?", resposta: "Conto.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Poesia?", resposta: "Poesia.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Fábula?", resposta: "Fábula.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Conto", itemImagemUrl: livro_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Poesia", itemImagemUrl: desenho_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Fábula", itemImagemUrl: raposa_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Quadrinho", itemImagemUrl: quadrinhos_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Cordel", itemImagemUrl: album_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Conto?", opcoes: ["Conto", "Poesia", "Fábula"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Poesia?", opcoes: ["Poesia", "Conto", "Fábula"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Fábula?", opcoes: ["Fábula", "Conto", "Poesia"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Quadrinho?", opcoes: ["Quadrinho", "Conto", "Poesia"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Biblioteca das Histórias", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Biblioteca das Histórias.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Conto?", opcoes: ["Conto","Poesia","Fábula"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Poesia?", opcoes: ["Poesia","Conto","Fábula"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Fábula?", opcoes: ["Fábula","Conto","Poesia"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Biblioteca das Histórias", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Leitor Voraz! 🎁 Item: Cartão de Biblioteca.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "A palavra 'literatura' vem de 'litteras' = letras. Literatura é a arte feita com letras!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Conto",
      instrucao: "Toque pra ouvir. Qual figura combina com Conto?",
      pergunta: "Palavra: Conto",
      opcoes: [
        { nome: "Conto", imagemUrl: livro_img, rotulo: "Conto" },
        { nome: "Poesia", imagemUrl: desenho_img, rotulo: "Poesia" },
        { nome: "Fábula", imagemUrl: raposa_img, rotulo: "Fábula" }
      ],
      correta: 0,
      acerto: "✅ Conto!",
      erro: "Ouça de novo e escolha Conto."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Poesia",
      instrucao: "Toque pra ouvir. Qual figura combina com Poesia?",
      pergunta: "Palavra: Poesia",
      opcoes: [
        { nome: "Poesia", imagemUrl: desenho_img, rotulo: "Poesia" },
        { nome: "Conto", imagemUrl: livro_img, rotulo: "Conto" },
        { nome: "Fábula", imagemUrl: raposa_img, rotulo: "Fábula" }
      ],
      correta: 0,
      acerto: "✅ Poesia!",
      erro: "Ouça de novo e escolha Poesia."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Fábula",
      instrucao: "Toque pra ouvir. Qual figura combina com Fábula?",
      pergunta: "Palavra: Fábula",
      opcoes: [
        { nome: "Fábula", imagemUrl: raposa_img, rotulo: "Fábula" },
        { nome: "Conto", imagemUrl: livro_img, rotulo: "Conto" },
        { nome: "Poesia", imagemUrl: desenho_img, rotulo: "Poesia" }
      ],
      correta: 0,
      acerto: "✅ Fábula!",
      erro: "Ouça e escolha Fábula."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Conto", "Poesia", "Fábula"],
      imagens: [
        { imagemUrl: livro_img, quantidade: 1, rotulo: "Conto" },
        { imagemUrl: desenho_img, quantidade: 1, rotulo: "Poesia" },
        { imagemUrl: raposa_img, quantidade: 1, rotulo: "Fábula" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Quadrinho?",
      pergunta: "Palavra: Quadrinho",
      opcoes: [
        { nome: "Quadrinho", imagemUrl: quadrinhos_img, rotulo: "Quadrinho" },
        { nome: "Conto", imagemUrl: livro_img, rotulo: "Conto" },
        { nome: "Poesia", imagemUrl: desenho_img, rotulo: "Poesia" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Quadrinho."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Conto","Poesia","Fábula"], correta: 0, explicacao: "É Conto.", visual: { tipo: "itens", imagemUrl: livro_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Poesia","Conto","Fábula"], correta: 0, explicacao: "É Poesia.", visual: { tipo: "itens", imagemUrl: desenho_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Fábula","Conto","Poesia"], correta: 0, explicacao: "É Fábula.", visual: { tipo: "itens", imagemUrl: raposa_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Biblioteca das Histórias", "Só matemática", "Só música"], correta: 0, explicacao: "Biblioteca das Histórias." },
      { pergunta: "Poesia aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Fábula tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Biblioteca Encantada",
    objetivo: "Ache 3 gêneros: CONTO, POESIA, QUADRINHO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Conto", imagemUrl: livro_img, rotulo: "Conto" },
      { nome: "Poesia", imagemUrl: desenho_img, rotulo: "Poesia" },
      { nome: "Fábula", imagemUrl: raposa_img, rotulo: "Fábula" }
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
    titulo: "Cantinho da Leitura",
    instrucao: "Escolham um gênero preferido e leiam juntos.",
    permitirFoto: true,
    registros: [
      { label: "Gênero", tipo: "texto" },{ label: "Título", tipo: "texto" },{ label: "Autor", tipo: "texto" },{ label: "Gostaram?", tipo: "sim_nao" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP27" }
};

export default aula;
