import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import lapis_img from "@/assets/neuro-treino/objetos/lapis.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import mae_img from "@/assets/neuro-treino/objetos/mae.png";
import menina_img from "@/assets/neuro-treino/objetos/menina.png";
import papel_img from "@/assets/neuro-treino/objetos/papel.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP13 — Cartas e Bilhetes Encantados
 * BNCC: planejar e produzir bilhetes e cartas.
 */
const aula: Aula = {
  codigo: "EF02LP13",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Cartas e Bilhetes Encantados",
  narrativa: {
    titulo: "Cartas e Bilhetes Encantados",
    contexto: "Brilha recebe um bilhete misterioso da Coruja Sábia.",
    problema: "Alguém precisa responder — mas como se escreve um bilhete?",
    convite: "Bora escrever bilhetes e cartas com Brilha?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Planejar e produzir bilhetes e cartas curtos, considerando a mensagem e o destinatário.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Bilhete", imagemUrl: papel_img, silabas: ["BI", "LHE", "TE"], frase: "Deixei um bilhete." },
      { palavra: "Carta", imagemUrl: album_img, silabas: ["CAR", "TA"], frase: "Enviei uma carta." },
      { palavra: "Destinatário", imagemUrl: mae_img, silabas: ["DES", "TI", "NA", "TÁ", "RIO"], frase: "A carta é PRA quem?" },
      { palavra: "Remetente", imagemUrl: menina_img, silabas: ["RE", "ME", "TEN", "TE"], frase: "DE quem?" },
      { palavra: "Assinatura", imagemUrl: lapis_img, silabas: ["AS", "SI", "NA", "TU", "RA"], frase: "No final, assino." }
    ]
  },
  objetivos: ["Ler bilhetes.", "Saber pra quem escrever.", "Escrever mensagem clara.", "Assinar.", "Diferenciar bilhete e carta."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "✉️ BILHETE = curto e informal.\n📮 CARTA = mais longa, com data, saudação e assinatura.\nSempre escrevo PRA QUEM (destinatário) e ASSINO no fim.",
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
    enunciado: "Toque na figura que combina com Bilhete.",
    resposta: "Bilhete.",
    explicacao: "Bilhete é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Bilhete",
      opcoes: [
        { nome: "papel", imagemUrl: papel_img },
        { nome: "album", imagemUrl: album_img },
        { nome: "mae", imagemUrl: mae_img }
      ],
      respostaCerta: "papel"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Bilhete?", resposta: "Bilhete.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Carta?", resposta: "Carta.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Destinatário?", resposta: "Destinatário.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Bilhete", itemImagemUrl: papel_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Carta", itemImagemUrl: album_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Destinatário", itemImagemUrl: mae_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Remetente", itemImagemUrl: menina_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Assinatura", itemImagemUrl: lapis_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Bilhete?", opcoes: ["Bilhete", "Carta", "Destinatário"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Carta?", opcoes: ["Carta", "Bilhete", "Destinatário"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Destinatário?", opcoes: ["Destinatário", "Bilhete", "Carta"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Remetente?", opcoes: ["Remetente", "Bilhete", "Carta"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Cartas e Bilhetes Encantados", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Cartas e Bilhetes Encantados.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Bilhete?", opcoes: ["Bilhete","Carta","Destinatário"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Carta?", opcoes: ["Carta","Bilhete","Destinatário"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Destinatário?", opcoes: ["Destinatário","Bilhete","Carta"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Cartas e Bilhetes Encantados", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Escritor de Bilhetes! 🎁 Item: Caneta de Ouro.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Antes do celular, as pessoas se comunicavam com cartas que levavam DIAS pra chegar!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Bilhete",
      instrucao: "Toque pra ouvir. Qual figura combina com Bilhete?",
      pergunta: "Palavra: Bilhete",
      opcoes: [
        { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
        { nome: "Carta", imagemUrl: album_img, rotulo: "Carta" },
        { nome: "Destinatário", imagemUrl: mae_img, rotulo: "Destinatário" }
      ],
      correta: 0,
      acerto: "✅ Bilhete!",
      erro: "Ouça de novo e escolha Bilhete."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Carta",
      instrucao: "Toque pra ouvir. Qual figura combina com Carta?",
      pergunta: "Palavra: Carta",
      opcoes: [
        { nome: "Carta", imagemUrl: album_img, rotulo: "Carta" },
        { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
        { nome: "Destinatário", imagemUrl: mae_img, rotulo: "Destinatário" }
      ],
      correta: 0,
      acerto: "✅ Carta!",
      erro: "Ouça de novo e escolha Carta."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Destinatário",
      instrucao: "Toque pra ouvir. Qual figura combina com Destinatário?",
      pergunta: "Palavra: Destinatário",
      opcoes: [
        { nome: "Destinatário", imagemUrl: mae_img, rotulo: "Destinatário" },
        { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
        { nome: "Carta", imagemUrl: album_img, rotulo: "Carta" }
      ],
      correta: 0,
      acerto: "✅ Destinatário!",
      erro: "Ouça e escolha Destinatário."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Bilhete", "Carta", "Destinatário"],
      imagens: [
        { imagemUrl: papel_img, quantidade: 1, rotulo: "Bilhete" },
        { imagemUrl: album_img, quantidade: 1, rotulo: "Carta" },
        { imagemUrl: mae_img, quantidade: 1, rotulo: "Destinatário" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Remetente?",
      pergunta: "Palavra: Remetente",
      opcoes: [
        { nome: "Remetente", imagemUrl: menina_img, rotulo: "Remetente" },
        { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
        { nome: "Carta", imagemUrl: album_img, rotulo: "Carta" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Remetente."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Bilhete","Carta","Destinatário"], correta: 0, explicacao: "É Bilhete.", visual: { tipo: "itens", imagemUrl: papel_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Carta","Bilhete","Destinatário"], correta: 0, explicacao: "É Carta.", visual: { tipo: "itens", imagemUrl: album_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Destinatário","Bilhete","Carta"], correta: 0, explicacao: "É Destinatário.", visual: { tipo: "itens", imagemUrl: mae_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Cartas e Bilhetes Encantados", "Só matemática", "Só música"], correta: 0, explicacao: "Cartas e Bilhetes Encantados." },
      { pergunta: "Carta aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Destinatário tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caixa de Correio",
    objetivo: "Ache 3: BILHETE, CARTA, ENVELOPE.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
      { nome: "Carta", imagemUrl: album_img, rotulo: "Carta" },
      { nome: "Destinatário", imagemUrl: mae_img, rotulo: "Destinatário" }
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
    titulo: "Bilhete Surpresa",
    instrucao: "Escreva um bilhete carinhoso pra alguém da família e entregue.",
    permitirFoto: true,
    registros: [
      { label: "Pra quem?", tipo: "texto" },{ label: "Mensagem", tipo: "texto" },{ label: "Assinatura", tipo: "texto" },{ label: "Como reagiram?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP14" }
};

export default aula;
