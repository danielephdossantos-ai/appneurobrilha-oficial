import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import celular_img from "@/assets/neuro-treino/objetos/celular.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import cozinheira_img from "@/assets/neuro-treino/objetos/cozinheira.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import papel_img from "@/assets/neuro-treino/objetos/papel.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import quadrinhos_img from "@/assets/neuro-treino/objetos/quadrinhos.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP16 — Cada Texto no Lugar
 * BNCC: formatação de bilhetes, avisos, cartas, receitas.
 */
const aula: Aula = {
  codigo: "EF02LP16",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Cada Texto no Lugar",
  narrativa: {
    titulo: "Cada Texto no Lugar",
    contexto: "Brilha entra na Biblioteca dos Modelos.",
    problema: "Bilhetes, avisos e receitas se misturaram — cada um tem um formato!",
    convite: "Bora aprender o formato certo de cada texto?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Reconhecer e reproduzir a formatação de bilhetes, avisos, cartas e receitas.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Bilhete", imagemUrl: papel_img, silabas: ["BI", "LHE", "TE"], frase: "Curto e informal." },
      { palavra: "Aviso", imagemUrl: quadrinhos_img, silabas: ["A", "VI", "SO"], frase: "Aviso importante!" },
      { palavra: "Carta", imagemUrl: album_img, silabas: ["CAR", "TA"], frase: "Com data e assinatura." },
      { palavra: "Receita", imagemUrl: cozinheira_img, silabas: ["RE", "CEI", "TA"], frase: "Ingredientes + modo de fazer." },
      { palavra: "Email", imagemUrl: celular_img, silabas: ["E", "MAIL"], frase: "Enviado pela internet." }
    ]
  },
  objetivos: ["Diferenciar bilhete e aviso.", "Ver partes de uma carta.", "Ver ingredientes e modo de fazer da receita.", "Copiar formatos.", "Escolher formato certo pra cada objetivo."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "📝 BILHETE = mensagem curta.\n🚨 AVISO = curto e visível (letras grandes).\n📩 CARTA = data + saudação + mensagem + assinatura.\n🍰 RECEITA = ingredientes + modo de fazer.",
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
        { nome: "quadrinhos", imagemUrl: quadrinhos_img },
        { nome: "album", imagemUrl: album_img }
      ],
      respostaCerta: "papel"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Bilhete?", resposta: "Bilhete.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Aviso?", resposta: "Aviso.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Carta?", resposta: "Carta.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Bilhete", itemImagemUrl: papel_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Aviso", itemImagemUrl: quadrinhos_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Carta", itemImagemUrl: album_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Receita", itemImagemUrl: cozinheira_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Email", itemImagemUrl: celular_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Bilhete?", opcoes: ["Bilhete", "Aviso", "Carta"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Aviso?", opcoes: ["Aviso", "Bilhete", "Carta"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Carta?", opcoes: ["Carta", "Bilhete", "Aviso"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Receita?", opcoes: ["Receita", "Bilhete", "Aviso"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Cada Texto no Lugar", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Cada Texto no Lugar.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Bilhete?", opcoes: ["Bilhete","Aviso","Carta"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Aviso?", opcoes: ["Aviso","Bilhete","Carta"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Carta?", opcoes: ["Carta","Bilhete","Aviso"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Cada Texto no Lugar", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Bibliotecário dos Modelos! 🎁 Item: Kit de Modelos.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Receitas seguem o MESMO formato há centenas de anos: ingredientes primeiro, depois o passo a passo!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Bilhete",
      instrucao: "Toque pra ouvir. Qual figura combina com Bilhete?",
      pergunta: "Palavra: Bilhete",
      opcoes: [
        { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
        { nome: "Aviso", imagemUrl: quadrinhos_img, rotulo: "Aviso" },
        { nome: "Carta", imagemUrl: album_img, rotulo: "Carta" }
      ],
      correta: 0,
      acerto: "✅ Bilhete!",
      erro: "Ouça de novo e escolha Bilhete."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Aviso",
      instrucao: "Toque pra ouvir. Qual figura combina com Aviso?",
      pergunta: "Palavra: Aviso",
      opcoes: [
        { nome: "Aviso", imagemUrl: quadrinhos_img, rotulo: "Aviso" },
        { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
        { nome: "Carta", imagemUrl: album_img, rotulo: "Carta" }
      ],
      correta: 0,
      acerto: "✅ Aviso!",
      erro: "Ouça de novo e escolha Aviso."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Carta",
      instrucao: "Toque pra ouvir. Qual figura combina com Carta?",
      pergunta: "Palavra: Carta",
      opcoes: [
        { nome: "Carta", imagemUrl: album_img, rotulo: "Carta" },
        { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
        { nome: "Aviso", imagemUrl: quadrinhos_img, rotulo: "Aviso" }
      ],
      correta: 0,
      acerto: "✅ Carta!",
      erro: "Ouça e escolha Carta."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Bilhete", "Aviso", "Carta"],
      imagens: [
        { imagemUrl: papel_img, quantidade: 1, rotulo: "Bilhete" },
        { imagemUrl: quadrinhos_img, quantidade: 1, rotulo: "Aviso" },
        { imagemUrl: album_img, quantidade: 1, rotulo: "Carta" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Receita?",
      pergunta: "Palavra: Receita",
      opcoes: [
        { nome: "Receita", imagemUrl: cozinheira_img, rotulo: "Receita" },
        { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
        { nome: "Aviso", imagemUrl: quadrinhos_img, rotulo: "Aviso" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Receita."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Bilhete","Aviso","Carta"], correta: 0, explicacao: "É Bilhete.", visual: { tipo: "itens", imagemUrl: papel_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Aviso","Bilhete","Carta"], correta: 0, explicacao: "É Aviso.", visual: { tipo: "itens", imagemUrl: quadrinhos_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Carta","Bilhete","Aviso"], correta: 0, explicacao: "É Carta.", visual: { tipo: "itens", imagemUrl: album_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Cada Texto no Lugar", "Só matemática", "Só música"], correta: 0, explicacao: "Cada Texto no Lugar." },
      { pergunta: "Aviso aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Carta tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Formatos Certos",
    objetivo: "Ache 3: BILHETE, AVISO, RECEITA.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Bilhete", imagemUrl: papel_img, rotulo: "Bilhete" },
      { nome: "Aviso", imagemUrl: quadrinhos_img, rotulo: "Aviso" },
      { nome: "Carta", imagemUrl: album_img, rotulo: "Carta" }
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
    titulo: "Modelos em Casa",
    instrucao: "Procurem em casa: 1 bilhete/aviso, 1 receita e 1 rótulo de embalagem.",
    permitirFoto: true,
    registros: [
      { label: "Bilhete/aviso", tipo: "texto" },{ label: "Receita", tipo: "texto" },{ label: "Rótulo", tipo: "texto" },{ label: "Mais interessante?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP17" }
};

export default aula;
