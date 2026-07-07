import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coracao_img from "@/assets/neuro-treino/objetos/coracao.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import desenho_img from "@/assets/neuro-treino/objetos/desenho.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import paleta_img from "@/assets/neuro-treino/objetos/paleta.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import pincel_img from "@/assets/neuro-treino/objetos/pincel.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP29 — Poemas com Forma
 * BNCC: poemas visuais: formato, ilustrações, efeitos.
 */
const aula: Aula = {
  codigo: "EF02LP29",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Poemas com Forma",
  narrativa: {
    titulo: "Poemas com Forma",
    contexto: "Brilha entrou na Galeria dos Poemas Visuais.",
    problema: "Cada poema tem uma FORMA diferente — em coração, em espiral, em desenho!",
    convite: "Bora explorar poemas com formato especial?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Observar em poemas visuais o formato do texto, as ilustrações e outros efeitos visuais.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Poema", imagemUrl: desenho_img, silabas: ["PO", "E", "MA"], frase: "Um poema bonito." },
      { palavra: "Forma", imagemUrl: coracao_img, silabas: ["FOR", "MA"], frase: "Em forma de coração." },
      { palavra: "Ilustração", imagemUrl: pincel_img, silabas: ["I", "LUS", "TRA", "ÇÃO"], frase: "Com ilustração colorida." },
      { palavra: "Cores", imagemUrl: paleta_img, silabas: ["CO", "RES"], frase: "Cores fortes!" },
      { palavra: "Efeito", imagemUrl: estrela_img, silabas: ["E", "FEI", "TO"], frase: "Efeito surpresa!" }
    ]
  },
  objetivos: ["Ver formato do poema.", "Ver ilustrações.", "Ver cores e efeitos.", "Ler em ordem.", "Se inspirar pra criar."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🎨 POEMA VISUAL: o desenho e o formato fazem parte do poema.\nPode ser em coração, em espiral, em formato de árvore.\nOlhar E ler ao mesmo tempo!",
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
    enunciado: "Toque na figura que combina com Poema.",
    resposta: "Poema.",
    explicacao: "Poema é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Poema",
      opcoes: [
        { nome: "desenho", imagemUrl: desenho_img },
        { nome: "coracao", imagemUrl: coracao_img },
        { nome: "pincel", imagemUrl: pincel_img }
      ],
      respostaCerta: "desenho"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Poema?", resposta: "Poema.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Forma?", resposta: "Forma.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Ilustração?", resposta: "Ilustração.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Poema", itemImagemUrl: desenho_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Forma", itemImagemUrl: coracao_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Ilustração", itemImagemUrl: pincel_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Cores", itemImagemUrl: paleta_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Efeito", itemImagemUrl: estrela_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Poema?", opcoes: ["Poema", "Forma", "Ilustração"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Forma?", opcoes: ["Forma", "Poema", "Ilustração"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Ilustração?", opcoes: ["Ilustração", "Poema", "Forma"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Cores?", opcoes: ["Cores", "Poema", "Forma"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Poemas com Forma", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Poemas com Forma.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Poema?", opcoes: ["Poema","Forma","Ilustração"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Forma?", opcoes: ["Forma","Poema","Ilustração"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Ilustração?", opcoes: ["Ilustração","Poema","Forma"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Poemas com Forma", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Poeta Visual! 🎁 Item: Paleta Poética.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Um dos primeiros poemas visuais foi feito há mais de 2000 anos por poetas gregos, em forma de OVO!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Poema",
      instrucao: "Toque pra ouvir. Qual figura combina com Poema?",
      pergunta: "Palavra: Poema",
      opcoes: [
        { nome: "Poema", imagemUrl: desenho_img, rotulo: "Poema" },
        { nome: "Forma", imagemUrl: coracao_img, rotulo: "Forma" },
        { nome: "Ilustração", imagemUrl: pincel_img, rotulo: "Ilustração" }
      ],
      correta: 0,
      acerto: "✅ Poema!",
      erro: "Ouça de novo e escolha Poema."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Forma",
      instrucao: "Toque pra ouvir. Qual figura combina com Forma?",
      pergunta: "Palavra: Forma",
      opcoes: [
        { nome: "Forma", imagemUrl: coracao_img, rotulo: "Forma" },
        { nome: "Poema", imagemUrl: desenho_img, rotulo: "Poema" },
        { nome: "Ilustração", imagemUrl: pincel_img, rotulo: "Ilustração" }
      ],
      correta: 0,
      acerto: "✅ Forma!",
      erro: "Ouça de novo e escolha Forma."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Ilustração",
      instrucao: "Toque pra ouvir. Qual figura combina com Ilustração?",
      pergunta: "Palavra: Ilustração",
      opcoes: [
        { nome: "Ilustração", imagemUrl: pincel_img, rotulo: "Ilustração" },
        { nome: "Poema", imagemUrl: desenho_img, rotulo: "Poema" },
        { nome: "Forma", imagemUrl: coracao_img, rotulo: "Forma" }
      ],
      correta: 0,
      acerto: "✅ Ilustração!",
      erro: "Ouça e escolha Ilustração."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Poema", "Forma", "Ilustração"],
      imagens: [
        { imagemUrl: desenho_img, quantidade: 1, rotulo: "Poema" },
        { imagemUrl: coracao_img, quantidade: 1, rotulo: "Forma" },
        { imagemUrl: pincel_img, quantidade: 1, rotulo: "Ilustração" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Cores?",
      pergunta: "Palavra: Cores",
      opcoes: [
        { nome: "Cores", imagemUrl: paleta_img, rotulo: "Cores" },
        { nome: "Poema", imagemUrl: desenho_img, rotulo: "Poema" },
        { nome: "Forma", imagemUrl: coracao_img, rotulo: "Forma" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Cores."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Poema","Forma","Ilustração"], correta: 0, explicacao: "É Poema.", visual: { tipo: "itens", imagemUrl: desenho_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Forma","Poema","Ilustração"], correta: 0, explicacao: "É Forma.", visual: { tipo: "itens", imagemUrl: coracao_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Ilustração","Poema","Forma"], correta: 0, explicacao: "É Ilustração.", visual: { tipo: "itens", imagemUrl: pincel_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Poemas com Forma", "Só matemática", "Só música"], correta: 0, explicacao: "Poemas com Forma." },
      { pergunta: "Forma aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Ilustração tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Galeria Poética",
    objetivo: "Ache 3: POEMA, FORMA, ILUSTRAÇÃO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Poema", imagemUrl: desenho_img, rotulo: "Poema" },
      { nome: "Forma", imagemUrl: coracao_img, rotulo: "Forma" },
      { nome: "Ilustração", imagemUrl: pincel_img, rotulo: "Ilustração" }
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
    titulo: "Poema em Forma",
    instrucao: "Criem juntos um poema curto e desenhem em forma de coração ou estrela.",
    permitirFoto: true,
    registros: [
      { label: "Poema", tipo: "texto" },{ label: "Formato escolhido", tipo: "texto" },{ label: "Cores usadas", tipo: "texto" },{ label: "Quem ajudou?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF03LP01" }
};

export default aula;
