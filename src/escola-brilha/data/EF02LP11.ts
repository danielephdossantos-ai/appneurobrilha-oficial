import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import casa_img from "@/assets/neuro-treino/objetos/casa.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP11 — Grande, Pequeno, Enorme
 * BNCC: aumentativo (-ão) e diminutivo (-inho/-zinho).
 */
const aula: Aula = {
  codigo: "EF02LP11",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Grande, Pequeno, Enorme",
  narrativa: {
    titulo: "Grande, Pequeno, Enorme",
    contexto: "Brilha achou uma varinha mágica que muda o tamanho das palavras.",
    problema: "Quando aponta pra CACHORRO, vira CACHORRÃO ou CACHORRINHO!",
    convite: "Bora mudar o tamanho das palavras com a varinha?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Formar aumentativo (-ão) e diminutivo (-inho/-zinho) de palavras.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "CACHORRO", imagemUrl: cachorro_img, silabas: ["CA", "CHOR", "RO"], frase: "O cachorro late." },
      { palavra: "CACHORRÃO", imagemUrl: cachorro_img, silabas: ["CA", "CHOR", "RÃO"], frase: "Que cachorrão!" },
      { palavra: "CACHORRINHO", imagemUrl: cachorro_img, silabas: ["CA", "CHOR", "RI", "NHO"], frase: "Que cachorrinho fofo!" },
      { palavra: "CASA", imagemUrl: casa_img, silabas: ["CA", "SA"], frase: "Nossa casa." },
      { palavra: "CASINHA", imagemUrl: casa_img, silabas: ["CA", "SI", "NHA"], frase: "Uma casinha de brinquedo." }
    ]
  },
  objetivos: ["Reconhecer aumentativo.", "Reconhecer diminutivo.", "Usar -ão.", "Usar -inho/-zinho.", "Escolher qual usar."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🔎 -ÃO faz AUMENTATIVO: cachorro→cachorrÃO.\n🔍 -INHO/-ZINHO faz DIMINUTIVO: casa→casINHA, pão→pãoZINHO.",
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
    enunciado: "Toque na figura que combina com CACHORRO.",
    resposta: "CACHORRO.",
    explicacao: "CACHORRO é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: CACHORRO",
      opcoes: [
        { nome: "cachorro", imagemUrl: cachorro_img },
        { nome: "cachorro", imagemUrl: cachorro_img },
        { nome: "cachorro", imagemUrl: cachorro_img }
      ],
      respostaCerta: "cachorro"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com CACHORRO?", resposta: "CACHORRO.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com CACHORRÃO?", resposta: "CACHORRÃO.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com CACHORRINHO?", resposta: "CACHORRINHO.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "CACHORRO", itemImagemUrl: cachorro_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "CACHORRÃO", itemImagemUrl: cachorro_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "CACHORRINHO", itemImagemUrl: cachorro_img, quantidade: 1, cor: "#10B981" },
        { personagem: "CASA", itemImagemUrl: casa_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "CASINHA", itemImagemUrl: casa_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com CACHORRO?", opcoes: ["CACHORRO", "CACHORRÃO", "CACHORRINHO"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com CACHORRÃO?", opcoes: ["CACHORRÃO", "CACHORRO", "CACHORRINHO"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com CACHORRINHO?", opcoes: ["CACHORRINHO", "CACHORRO", "CACHORRÃO"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com CASA?", opcoes: ["CASA", "CACHORRO", "CACHORRÃO"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Grande, Pequeno, Enorme", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Grande, Pequeno, Enorme.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com CACHORRO?", opcoes: ["CACHORRO","CACHORRÃO","CACHORRINHO"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com CACHORRÃO?", opcoes: ["CACHORRÃO","CACHORRO","CACHORRINHO"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com CACHORRINHO?", opcoes: ["CACHORRINHO","CACHORRO","CACHORRÃO"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Grande, Pequeno, Enorme", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Feiticeiro do Tamanho! 🎁 Item: Varinha das Palavras.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "'-zinho' é usado em palavras que terminam em vogal acentuada, como pé→pezinho!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de CACHORRO",
      instrucao: "Toque pra ouvir. Qual figura combina com CACHORRO?",
      pergunta: "Palavra: CACHORRO",
      opcoes: [
        { nome: "CACHORRO", imagemUrl: cachorro_img, rotulo: "CACHORRO" },
        { nome: "CACHORRÃO", imagemUrl: cachorro_img, rotulo: "CACHORRÃO" },
        { nome: "CACHORRINHO", imagemUrl: cachorro_img, rotulo: "CACHORRINHO" }
      ],
      correta: 0,
      acerto: "✅ CACHORRO!",
      erro: "Ouça de novo e escolha CACHORRO."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de CACHORRÃO",
      instrucao: "Toque pra ouvir. Qual figura combina com CACHORRÃO?",
      pergunta: "Palavra: CACHORRÃO",
      opcoes: [
        { nome: "CACHORRÃO", imagemUrl: cachorro_img, rotulo: "CACHORRÃO" },
        { nome: "CACHORRO", imagemUrl: cachorro_img, rotulo: "CACHORRO" },
        { nome: "CACHORRINHO", imagemUrl: cachorro_img, rotulo: "CACHORRINHO" }
      ],
      correta: 0,
      acerto: "✅ CACHORRÃO!",
      erro: "Ouça de novo e escolha CACHORRÃO."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de CACHORRINHO",
      instrucao: "Toque pra ouvir. Qual figura combina com CACHORRINHO?",
      pergunta: "Palavra: CACHORRINHO",
      opcoes: [
        { nome: "CACHORRINHO", imagemUrl: cachorro_img, rotulo: "CACHORRINHO" },
        { nome: "CACHORRO", imagemUrl: cachorro_img, rotulo: "CACHORRO" },
        { nome: "CACHORRÃO", imagemUrl: cachorro_img, rotulo: "CACHORRÃO" }
      ],
      correta: 0,
      acerto: "✅ CACHORRINHO!",
      erro: "Ouça e escolha CACHORRINHO."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["CACHORRO", "CACHORRÃO", "CACHORRINHO"],
      imagens: [
        { imagemUrl: cachorro_img, quantidade: 1, rotulo: "CACHORRO" },
        { imagemUrl: cachorro_img, quantidade: 1, rotulo: "CACHORRÃO" },
        { imagemUrl: cachorro_img, quantidade: 1, rotulo: "CACHORRINHO" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com CASA?",
      pergunta: "Palavra: CASA",
      opcoes: [
        { nome: "CASA", imagemUrl: casa_img, rotulo: "CASA" },
        { nome: "CACHORRO", imagemUrl: cachorro_img, rotulo: "CACHORRO" },
        { nome: "CACHORRÃO", imagemUrl: cachorro_img, rotulo: "CACHORRÃO" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha CASA."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["CACHORRO","CACHORRÃO","CACHORRINHO"], correta: 0, explicacao: "É CACHORRO.", visual: { tipo: "itens", imagemUrl: cachorro_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["CACHORRÃO","CACHORRO","CACHORRINHO"], correta: 0, explicacao: "É CACHORRÃO.", visual: { tipo: "itens", imagemUrl: cachorro_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["CACHORRINHO","CACHORRO","CACHORRÃO"], correta: 0, explicacao: "É CACHORRINHO.", visual: { tipo: "itens", imagemUrl: cachorro_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Grande, Pequeno, Enorme", "Só matemática", "Só música"], correta: 0, explicacao: "Grande, Pequeno, Enorme." },
      { pergunta: "CACHORRÃO aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "CACHORRINHO tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Varinha Mágica",
    objetivo: "Ache 3 palavras: CACHORRINHO, CASINHA, PÃOZINHO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "CACHORRO", imagemUrl: cachorro_img, rotulo: "CACHORRO" },
      { nome: "CACHORRÃO", imagemUrl: cachorro_img, rotulo: "CACHORRÃO" },
      { nome: "CACHORRINHO", imagemUrl: cachorro_img, rotulo: "CACHORRINHO" }
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
    titulo: "Tamanho das Palavras",
    instrucao: "Escolham 4 palavras. Digam aumentativo e diminutivo de cada uma.",
    permitirFoto: true,
    registros: [
      { label: "Palavra 1 + aumentativo + diminutivo", tipo: "texto" },{ label: "Palavra 2", tipo: "texto" },{ label: "Palavra 3", tipo: "texto" },{ label: "Palavra 4", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP12" }
};

export default aula;
