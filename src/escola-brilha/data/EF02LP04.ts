import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import banana_img from "@/assets/neuro-treino/objetos/banana.png";
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
import sopa_img from "@/assets/neuro-treino/objetos/sopa.png";

/**
 * EF02LP04 — Vogais Guardiãs
 * BNCC: sílabas CV, V, CVC, CCV (vogal em toda sílaba).
 */
const aula: Aula = {
  codigo: "EF02LP04",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Vogais Guardiãs",
  narrativa: {
    titulo: "Vogais Guardiãs",
    contexto: "Brilha visita o Castelo das Vogais.",
    problema: "As sílabas perderam as vogais — não formam mais palavras!",
    convite: "Bora ajudar as vogais guardiãs a voltarem pro lugar?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Perceber que TODA sílaba tem uma vogal e ler sílabas CV, V, CVC e CCV.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "CASA", imagemUrl: casa_img, silabas: ["CA", "SA"], frase: "A casa é grande." },
      { palavra: "UVA", imagemUrl: banana_img, silabas: ["U", "VA"], frase: "A uva é doce." },
      { palavra: "PORTA", imagemUrl: casa_img, silabas: ["POR", "TA"], frase: "Feche a porta." },
      { palavra: "PRATO", imagemUrl: sopa_img, silabas: ["PRA", "TO"], frase: "O prato está cheio." },
      { palavra: "ESCOLA", imagemUrl: escola_img, silabas: ["ES", "CO", "LA"], frase: "Vou à escola." }
    ]
  },
  objetivos: ["Identificar sílaba CV.", "Reconhecer sílaba só de vogal.", "Ler CVC.", "Ler CCV.", "Ver a vogal em toda sílaba."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🛡️ Toda sílaba tem PELO MENOS uma vogal.\nCV: CA-SA · V: U-VA · CVC: POR-TA · CCV: PRA-TO.",
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
    enunciado: "Toque na figura que combina com CASA.",
    resposta: "CASA.",
    explicacao: "CASA é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: CASA",
      opcoes: [
        { nome: "casa", imagemUrl: casa_img },
        { nome: "banana", imagemUrl: banana_img },
        { nome: "casa", imagemUrl: casa_img }
      ],
      respostaCerta: "casa"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com CASA?", resposta: "CASA.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com UVA?", resposta: "UVA.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com PORTA?", resposta: "PORTA.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "CASA", itemImagemUrl: casa_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "UVA", itemImagemUrl: banana_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "PORTA", itemImagemUrl: casa_img, quantidade: 1, cor: "#10B981" },
        { personagem: "PRATO", itemImagemUrl: sopa_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "ESCOLA", itemImagemUrl: escola_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com CASA?", opcoes: ["CASA", "UVA", "PORTA"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com UVA?", opcoes: ["UVA", "CASA", "PORTA"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com PORTA?", opcoes: ["PORTA", "CASA", "UVA"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com PRATO?", opcoes: ["PRATO", "CASA", "UVA"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Vogais Guardiãs", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Vogais Guardiãs.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com CASA?", opcoes: ["CASA","UVA","PORTA"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com UVA?", opcoes: ["UVA","CASA","PORTA"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com PORTA?", opcoes: ["PORTA","CASA","UVA"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Vogais Guardiãs", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Guardião das Vogais! 🎁 Item: Castelo das Vogais.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "São só 5 vogais (A,E,I,O,U) mas elas aparecem em TODAS as palavras!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de CASA",
      instrucao: "Toque pra ouvir. Qual figura combina com CASA?",
      pergunta: "Palavra: CASA",
      opcoes: [
        { nome: "CASA", imagemUrl: casa_img, rotulo: "CASA" },
        { nome: "UVA", imagemUrl: banana_img, rotulo: "UVA" },
        { nome: "PORTA", imagemUrl: casa_img, rotulo: "PORTA" }
      ],
      correta: 0,
      acerto: "✅ CASA!",
      erro: "Ouça de novo e escolha CASA."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de UVA",
      instrucao: "Toque pra ouvir. Qual figura combina com UVA?",
      pergunta: "Palavra: UVA",
      opcoes: [
        { nome: "UVA", imagemUrl: banana_img, rotulo: "UVA" },
        { nome: "CASA", imagemUrl: casa_img, rotulo: "CASA" },
        { nome: "PORTA", imagemUrl: casa_img, rotulo: "PORTA" }
      ],
      correta: 0,
      acerto: "✅ UVA!",
      erro: "Ouça de novo e escolha UVA."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de PORTA",
      instrucao: "Toque pra ouvir. Qual figura combina com PORTA?",
      pergunta: "Palavra: PORTA",
      opcoes: [
        { nome: "PORTA", imagemUrl: casa_img, rotulo: "PORTA" },
        { nome: "CASA", imagemUrl: casa_img, rotulo: "CASA" },
        { nome: "UVA", imagemUrl: banana_img, rotulo: "UVA" }
      ],
      correta: 0,
      acerto: "✅ PORTA!",
      erro: "Ouça e escolha PORTA."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["CASA", "UVA", "PORTA"],
      imagens: [
        { imagemUrl: casa_img, quantidade: 1, rotulo: "CASA" },
        { imagemUrl: banana_img, quantidade: 1, rotulo: "UVA" },
        { imagemUrl: casa_img, quantidade: 1, rotulo: "PORTA" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com PRATO?",
      pergunta: "Palavra: PRATO",
      opcoes: [
        { nome: "PRATO", imagemUrl: sopa_img, rotulo: "PRATO" },
        { nome: "CASA", imagemUrl: casa_img, rotulo: "CASA" },
        { nome: "UVA", imagemUrl: banana_img, rotulo: "UVA" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha PRATO."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["CASA","UVA","PORTA"], correta: 0, explicacao: "É CASA.", visual: { tipo: "itens", imagemUrl: casa_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["UVA","CASA","PORTA"], correta: 0, explicacao: "É UVA.", visual: { tipo: "itens", imagemUrl: banana_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["PORTA","CASA","UVA"], correta: 0, explicacao: "É PORTA.", visual: { tipo: "itens", imagemUrl: casa_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Vogais Guardiãs", "Só matemática", "Só música"], correta: 0, explicacao: "Vogais Guardiãs." },
      { pergunta: "UVA aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "PORTA tem quantas sílabas?", opcoes: [str(sum(1 for c in p2 if c.isalpha())//3 or 2),"1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Guardando Vogais",
    objetivo: "Ache 3 palavras com A, E ou U em destaque.",
    tempoSegundos: 90,
    elementos: [
      { nome: "CASA", imagemUrl: casa_img, rotulo: "CASA" },
      { nome: "UVA", imagemUrl: banana_img, rotulo: "UVA" },
      { nome: "PORTA", imagemUrl: casa_img, rotulo: "PORTA" }
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
    titulo: "Caça-Vogal em Casa",
    instrucao: "Achem 4 palavras: 1 com CV, 1 com V, 1 com CVC e 1 com CCV.",
    permitirFoto: true,
    registros: [
      { label: "CV", tipo: "texto" },{ label: "V", tipo: "texto" },{ label: "CVC", tipo: "texto" },{ label: "CCV", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP05" }
};

export default aula;
