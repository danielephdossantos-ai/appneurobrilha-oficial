import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import chocalho_img from "@/assets/neuro-treino/objetos/chocalho.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import dado_img from "@/assets/neuro-treino/objetos/dado.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import festa_img from "@/assets/neuro-treino/objetos/festa.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";
import tambor_img from "@/assets/neuro-treino/objetos/tambor.png";

/**
 * EF02LP15 — Voz que Canta
 * BNCC: cantar cantigas respeitando ritmo e melodia.
 */
const aula: Aula = {
  codigo: "EF02LP15",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Voz que Canta",
  narrativa: {
    titulo: "Voz que Canta",
    contexto: "Brilha subiu no Palco da Praça.",
    problema: "A voz sai desafinada — não consegue seguir o ritmo!",
    convite: "Bora aprender a cantar no compasso?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Cantar cantigas obedecendo ritmo e melodia.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Ritmo", imagemUrl: tambor_img, silabas: ["RIT", "MO"], frase: "Bato o ritmo no tambor." },
      { palavra: "Melodia", imagemUrl: chocalho_img, silabas: ["ME", "LO", "DI", "A"], frase: "Que melodia bonita!" },
      { palavra: "Compasso", imagemUrl: dado_img, silabas: ["COM", "PAS", "SO"], frase: "Contei o compasso." },
      { palavra: "Voz", imagemUrl: festa_img, silabas: ["VOZ"], frase: "Cantei com a minha voz." },
      { palavra: "Canção", imagemUrl: album_img, silabas: ["CAN", "ÇÃO"], frase: "Aprendi uma canção nova." }
    ]
  },
  objetivos: ["Ouvir com atenção.", "Bater o ritmo.", "Seguir a melodia.", "Respirar direito.", "Divertir-se cantando."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🎼 RITMO = velocidade das batidas.\n🎶 MELODIA = altura das notas.\nCantar bem = ritmo + melodia + respiração.",
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
    enunciado: "Toque na figura que combina com Ritmo.",
    resposta: "Ritmo.",
    explicacao: "Ritmo é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Ritmo",
      opcoes: [
        { nome: "tambor", imagemUrl: tambor_img },
        { nome: "chocalho", imagemUrl: chocalho_img },
        { nome: "dado", imagemUrl: dado_img }
      ],
      respostaCerta: "tambor"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Ritmo?", resposta: "Ritmo.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Melodia?", resposta: "Melodia.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Compasso?", resposta: "Compasso.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Ritmo", itemImagemUrl: tambor_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Melodia", itemImagemUrl: chocalho_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Compasso", itemImagemUrl: dado_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Voz", itemImagemUrl: festa_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Canção", itemImagemUrl: album_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Ritmo?", opcoes: ["Ritmo", "Melodia", "Compasso"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Melodia?", opcoes: ["Melodia", "Ritmo", "Compasso"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Compasso?", opcoes: ["Compasso", "Ritmo", "Melodia"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Voz?", opcoes: ["Voz", "Ritmo", "Melodia"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Voz que Canta", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Voz que Canta.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Ritmo?", opcoes: ["Ritmo","Melodia","Compasso"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Melodia?", opcoes: ["Melodia","Ritmo","Compasso"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Compasso?", opcoes: ["Compasso","Ritmo","Melodia"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Voz que Canta", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Voz de Ouro! 🎁 Item: Microfone Mágico.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Palma no ritmo é a forma mais antiga de música do mundo — anterior aos instrumentos!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Ritmo",
      instrucao: "Toque pra ouvir. Qual figura combina com Ritmo?",
      pergunta: "Palavra: Ritmo",
      opcoes: [
        { nome: "Ritmo", imagemUrl: tambor_img, rotulo: "Ritmo" },
        { nome: "Melodia", imagemUrl: chocalho_img, rotulo: "Melodia" },
        { nome: "Compasso", imagemUrl: dado_img, rotulo: "Compasso" }
      ],
      correta: 0,
      acerto: "✅ Ritmo!",
      erro: "Ouça de novo e escolha Ritmo."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Melodia",
      instrucao: "Toque pra ouvir. Qual figura combina com Melodia?",
      pergunta: "Palavra: Melodia",
      opcoes: [
        { nome: "Melodia", imagemUrl: chocalho_img, rotulo: "Melodia" },
        { nome: "Ritmo", imagemUrl: tambor_img, rotulo: "Ritmo" },
        { nome: "Compasso", imagemUrl: dado_img, rotulo: "Compasso" }
      ],
      correta: 0,
      acerto: "✅ Melodia!",
      erro: "Ouça de novo e escolha Melodia."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Compasso",
      instrucao: "Toque pra ouvir. Qual figura combina com Compasso?",
      pergunta: "Palavra: Compasso",
      opcoes: [
        { nome: "Compasso", imagemUrl: dado_img, rotulo: "Compasso" },
        { nome: "Ritmo", imagemUrl: tambor_img, rotulo: "Ritmo" },
        { nome: "Melodia", imagemUrl: chocalho_img, rotulo: "Melodia" }
      ],
      correta: 0,
      acerto: "✅ Compasso!",
      erro: "Ouça e escolha Compasso."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Ritmo", "Melodia", "Compasso"],
      imagens: [
        { imagemUrl: tambor_img, quantidade: 1, rotulo: "Ritmo" },
        { imagemUrl: chocalho_img, quantidade: 1, rotulo: "Melodia" },
        { imagemUrl: dado_img, quantidade: 1, rotulo: "Compasso" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Voz?",
      pergunta: "Palavra: Voz",
      opcoes: [
        { nome: "Voz", imagemUrl: festa_img, rotulo: "Voz" },
        { nome: "Ritmo", imagemUrl: tambor_img, rotulo: "Ritmo" },
        { nome: "Melodia", imagemUrl: chocalho_img, rotulo: "Melodia" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Voz."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Ritmo","Melodia","Compasso"], correta: 0, explicacao: "É Ritmo.", visual: { tipo: "itens", imagemUrl: tambor_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Melodia","Ritmo","Compasso"], correta: 0, explicacao: "É Melodia.", visual: { tipo: "itens", imagemUrl: chocalho_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Compasso","Ritmo","Melodia"], correta: 0, explicacao: "É Compasso.", visual: { tipo: "itens", imagemUrl: dado_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Voz que Canta", "Só matemática", "Só música"], correta: 0, explicacao: "Voz que Canta." },
      { pergunta: "Melodia aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Compasso tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Palco da Praça",
    objetivo: "Ache 3: RITMO, MELODIA, VOZ.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Ritmo", imagemUrl: tambor_img, rotulo: "Ritmo" },
      { nome: "Melodia", imagemUrl: chocalho_img, rotulo: "Melodia" },
      { nome: "Compasso", imagemUrl: dado_img, rotulo: "Compasso" }
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
    titulo: "Cantoria em Família",
    instrucao: "Escolham uma cantiga. Cantem batendo palma no ritmo.",
    permitirFoto: true,
    registros: [
      { label: "Cantiga escolhida", tipo: "texto" },{ label: "Quem cantou junto?", tipo: "texto" },{ label: "Quantas vezes?", tipo: "texto" },{ label: "Gostou?", tipo: "sim_nao" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP16" }
};

export default aula;
