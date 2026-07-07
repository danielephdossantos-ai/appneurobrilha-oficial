import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import criancas_img from "@/assets/neuro-treino/objetos/criancas-grupo.png";
import desenho_img from "@/assets/neuro-treino/objetos/desenho.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";
import tambor_img from "@/assets/neuro-treino/objetos/tambor.png";

/**
 * EF02LP12 — Cantigas & Canções
 * BNCC: ler cantigas e letras de canção.
 */
const aula: Aula = {
  codigo: "EF02LP12",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Cantigas & Canções",
  narrativa: {
    titulo: "Cantigas & Canções",
    contexto: "Brilha ganhou um Cancioneiro Mágico!",
    problema: "As cantigas perderam algumas palavras — a música parou de rimar!",
    convite: "Bora ler as cantigas juntos e devolver a melodia?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Ler cantigas e letras de canção do cotidiano, entendendo tema e forma.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Ciranda", imagemUrl: criancas_img, silabas: ["CI", "RAN", "DA"], frase: "Ciranda, cirandinha…" },
      { palavra: "Marcha", imagemUrl: tambor_img, silabas: ["MAR", "CHA"], frase: "Marcha soldado…" },
      { palavra: "Roda", imagemUrl: criancas_img, silabas: ["RO", "DA"], frase: "Roda-roda cirandinha!" },
      { palavra: "Rima", imagemUrl: desenho_img, silabas: ["RI", "MA"], frase: "BOLA rima com COLA." },
      { palavra: "Melodia", imagemUrl: tambor_img, silabas: ["ME", "LO", "DI", "A"], frase: "Cantei com melodia." }
    ]
  },
  objetivos: ["Ler cantigas.", "Perceber rimas.", "Entender tema.", "Cantar com ritmo.", "Compartilhar em família."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🎵 Cantiga = música curta pra brincar.\nToda cantiga tem RIMA (bola/cola) e TEMA (roda, ciranda).\nLer cantiga = entender a história pequena e a rima.",
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
    enunciado: "Toque na figura que combina com Ciranda.",
    resposta: "Ciranda.",
    explicacao: "Ciranda é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Ciranda",
      opcoes: [
        { nome: "criancas", imagemUrl: criancas_img },
        { nome: "tambor", imagemUrl: tambor_img },
        { nome: "criancas", imagemUrl: criancas_img }
      ],
      respostaCerta: "criancas"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Ciranda?", resposta: "Ciranda.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Marcha?", resposta: "Marcha.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Roda?", resposta: "Roda.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Ciranda", itemImagemUrl: criancas_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Marcha", itemImagemUrl: tambor_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Roda", itemImagemUrl: criancas_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Rima", itemImagemUrl: desenho_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Melodia", itemImagemUrl: tambor_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Ciranda?", opcoes: ["Ciranda", "Marcha", "Roda"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Marcha?", opcoes: ["Marcha", "Ciranda", "Roda"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Roda?", opcoes: ["Roda", "Ciranda", "Marcha"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Rima?", opcoes: ["Rima", "Ciranda", "Marcha"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Cantigas & Canções", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Cantigas & Canções.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Ciranda?", opcoes: ["Ciranda","Marcha","Roda"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Marcha?", opcoes: ["Marcha","Ciranda","Roda"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Roda?", opcoes: ["Roda","Ciranda","Marcha"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Cantigas & Canções", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Cantador do Cancioneiro! 🎁 Item: Cancioneiro Mágico.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Muitas cantigas brasileiras têm mais de 100 anos — cantadas por muitas gerações!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Ciranda",
      instrucao: "Toque pra ouvir. Qual figura combina com Ciranda?",
      pergunta: "Palavra: Ciranda",
      opcoes: [
        { nome: "Ciranda", imagemUrl: criancas_img, rotulo: "Ciranda" },
        { nome: "Marcha", imagemUrl: tambor_img, rotulo: "Marcha" },
        { nome: "Roda", imagemUrl: criancas_img, rotulo: "Roda" }
      ],
      correta: 0,
      acerto: "✅ Ciranda!",
      erro: "Ouça de novo e escolha Ciranda."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Marcha",
      instrucao: "Toque pra ouvir. Qual figura combina com Marcha?",
      pergunta: "Palavra: Marcha",
      opcoes: [
        { nome: "Marcha", imagemUrl: tambor_img, rotulo: "Marcha" },
        { nome: "Ciranda", imagemUrl: criancas_img, rotulo: "Ciranda" },
        { nome: "Roda", imagemUrl: criancas_img, rotulo: "Roda" }
      ],
      correta: 0,
      acerto: "✅ Marcha!",
      erro: "Ouça de novo e escolha Marcha."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Roda",
      instrucao: "Toque pra ouvir. Qual figura combina com Roda?",
      pergunta: "Palavra: Roda",
      opcoes: [
        { nome: "Roda", imagemUrl: criancas_img, rotulo: "Roda" },
        { nome: "Ciranda", imagemUrl: criancas_img, rotulo: "Ciranda" },
        { nome: "Marcha", imagemUrl: tambor_img, rotulo: "Marcha" }
      ],
      correta: 0,
      acerto: "✅ Roda!",
      erro: "Ouça e escolha Roda."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Ciranda", "Marcha", "Roda"],
      imagens: [
        { imagemUrl: criancas_img, quantidade: 1, rotulo: "Ciranda" },
        { imagemUrl: tambor_img, quantidade: 1, rotulo: "Marcha" },
        { imagemUrl: criancas_img, quantidade: 1, rotulo: "Roda" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Rima?",
      pergunta: "Palavra: Rima",
      opcoes: [
        { nome: "Rima", imagemUrl: desenho_img, rotulo: "Rima" },
        { nome: "Ciranda", imagemUrl: criancas_img, rotulo: "Ciranda" },
        { nome: "Marcha", imagemUrl: tambor_img, rotulo: "Marcha" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Rima."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Ciranda","Marcha","Roda"], correta: 0, explicacao: "É Ciranda.", visual: { tipo: "itens", imagemUrl: criancas_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Marcha","Ciranda","Roda"], correta: 0, explicacao: "É Marcha.", visual: { tipo: "itens", imagemUrl: tambor_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Roda","Ciranda","Marcha"], correta: 0, explicacao: "É Roda.", visual: { tipo: "itens", imagemUrl: criancas_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Cantigas & Canções", "Só matemática", "Só música"], correta: 0, explicacao: "Cantigas & Canções." },
      { pergunta: "Marcha aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Roda tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Achador de Rimas",
    objetivo: "Ache 3 cantigas: CIRANDA, MARCHA, RODA.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Ciranda", imagemUrl: criancas_img, rotulo: "Ciranda" },
      { nome: "Marcha", imagemUrl: tambor_img, rotulo: "Marcha" },
      { nome: "Roda", imagemUrl: criancas_img, rotulo: "Roda" }
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
    titulo: "Cantiga em Família",
    instrucao: "Cantem uma cantiga favorita e escrevam duas palavras que rimam.",
    permitirFoto: true,
    registros: [
      { label: "Nome da cantiga", tipo: "texto" },{ label: "Palavra 1 e rima", tipo: "texto" },{ label: "Palavra 2 e rima", tipo: "texto" },{ label: "Gostou?", tipo: "sim_nao" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP13" }
};

export default aula;
