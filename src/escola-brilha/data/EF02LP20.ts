import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import balao_img from "@/assets/neuro-treino/objetos/balao.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import dado_img from "@/assets/neuro-treino/objetos/dado.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";
import tv_img from "@/assets/neuro-treino/objetos/tv-moderna.png";

/**
 * EF02LP20 — Pequenos Pesquisadores
 * BNCC: enquetes, entrevistas e registros de pesquisa.
 */
const aula: Aula = {
  codigo: "EF02LP20",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Pequenos Pesquisadores",
  narrativa: {
    titulo: "Pequenos Pesquisadores",
    contexto: "Brilha virou pesquisadora do Laboratório do Saber.",
    problema: "Precisa descobrir a fruta favorita da turma — mas como?",
    convite: "Bora aprender enquete e entrevista?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Reconhecer a função de enquetes, pequenas entrevistas e registros de pesquisa.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Enquete", imagemUrl: dado_img, silabas: ["EN", "QUE", "TE"], frase: "Enquete: fruta favorita?" },
      { palavra: "Entrevista", imagemUrl: tv_img, silabas: ["EN", "TRE", "VIS", "TA"], frase: "Entrevista com o vovô." },
      { palavra: "Pergunta", imagemUrl: coruja_img, silabas: ["PER", "GUN", "TA"], frase: "Uma pergunta simples." },
      { palavra: "Resposta", imagemUrl: balao_img, silabas: ["RES", "POS", "TA"], frase: "Anotei a resposta." },
      { palavra: "Registro", imagemUrl: album_img, silabas: ["RE", "GIS", "TRO"], frase: "Registro em tabela." }
    ]
  },
  objetivos: ["Fazer uma pergunta.", "Anotar respostas.", "Contar quantos escolheram.", "Registrar em tabela simples.", "Compartilhar resultado."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🔍 ENQUETE = pergunta rápida pra várias pessoas.\n🎤 ENTREVISTA = perguntas mais longas pra UMA pessoa.\nAnotamos tudo em REGISTRO simples.",
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
    enunciado: "Toque na figura que combina com Enquete.",
    resposta: "Enquete.",
    explicacao: "Enquete é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Enquete",
      opcoes: [
        { nome: "dado", imagemUrl: dado_img },
        { nome: "tv", imagemUrl: tv_img },
        { nome: "coruja", imagemUrl: coruja_img }
      ],
      respostaCerta: "dado"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Enquete?", resposta: "Enquete.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Entrevista?", resposta: "Entrevista.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Pergunta?", resposta: "Pergunta.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Enquete", itemImagemUrl: dado_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Entrevista", itemImagemUrl: tv_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Pergunta", itemImagemUrl: coruja_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Resposta", itemImagemUrl: balao_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Registro", itemImagemUrl: album_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Enquete?", opcoes: ["Enquete", "Entrevista", "Pergunta"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Entrevista?", opcoes: ["Entrevista", "Enquete", "Pergunta"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Pergunta?", opcoes: ["Pergunta", "Enquete", "Entrevista"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Resposta?", opcoes: ["Resposta", "Enquete", "Entrevista"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Pequenos Pesquisadores", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Pequenos Pesquisadores.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Enquete?", opcoes: ["Enquete","Entrevista","Pergunta"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Entrevista?", opcoes: ["Entrevista","Enquete","Pergunta"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Pergunta?", opcoes: ["Pergunta","Enquete","Entrevista"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Pequenos Pesquisadores", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Pequeno Pesquisador! 🎁 Item: Caderno de Pesquisa.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Uma enquete só é boa se tem PERGUNTAS CLARAS — se a pessoa não entende, a resposta não serve!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Enquete",
      instrucao: "Toque pra ouvir. Qual figura combina com Enquete?",
      pergunta: "Palavra: Enquete",
      opcoes: [
        { nome: "Enquete", imagemUrl: dado_img, rotulo: "Enquete" },
        { nome: "Entrevista", imagemUrl: tv_img, rotulo: "Entrevista" },
        { nome: "Pergunta", imagemUrl: coruja_img, rotulo: "Pergunta" }
      ],
      correta: 0,
      acerto: "✅ Enquete!",
      erro: "Ouça de novo e escolha Enquete."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Entrevista",
      instrucao: "Toque pra ouvir. Qual figura combina com Entrevista?",
      pergunta: "Palavra: Entrevista",
      opcoes: [
        { nome: "Entrevista", imagemUrl: tv_img, rotulo: "Entrevista" },
        { nome: "Enquete", imagemUrl: dado_img, rotulo: "Enquete" },
        { nome: "Pergunta", imagemUrl: coruja_img, rotulo: "Pergunta" }
      ],
      correta: 0,
      acerto: "✅ Entrevista!",
      erro: "Ouça de novo e escolha Entrevista."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Pergunta",
      instrucao: "Toque pra ouvir. Qual figura combina com Pergunta?",
      pergunta: "Palavra: Pergunta",
      opcoes: [
        { nome: "Pergunta", imagemUrl: coruja_img, rotulo: "Pergunta" },
        { nome: "Enquete", imagemUrl: dado_img, rotulo: "Enquete" },
        { nome: "Entrevista", imagemUrl: tv_img, rotulo: "Entrevista" }
      ],
      correta: 0,
      acerto: "✅ Pergunta!",
      erro: "Ouça e escolha Pergunta."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Enquete", "Entrevista", "Pergunta"],
      imagens: [
        { imagemUrl: dado_img, quantidade: 1, rotulo: "Enquete" },
        { imagemUrl: tv_img, quantidade: 1, rotulo: "Entrevista" },
        { imagemUrl: coruja_img, quantidade: 1, rotulo: "Pergunta" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Resposta?",
      pergunta: "Palavra: Resposta",
      opcoes: [
        { nome: "Resposta", imagemUrl: balao_img, rotulo: "Resposta" },
        { nome: "Enquete", imagemUrl: dado_img, rotulo: "Enquete" },
        { nome: "Entrevista", imagemUrl: tv_img, rotulo: "Entrevista" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Resposta."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Enquete","Entrevista","Pergunta"], correta: 0, explicacao: "É Enquete.", visual: { tipo: "itens", imagemUrl: dado_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Entrevista","Enquete","Pergunta"], correta: 0, explicacao: "É Entrevista.", visual: { tipo: "itens", imagemUrl: tv_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Pergunta","Enquete","Entrevista"], correta: 0, explicacao: "É Pergunta.", visual: { tipo: "itens", imagemUrl: coruja_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Pequenos Pesquisadores", "Só matemática", "Só música"], correta: 0, explicacao: "Pequenos Pesquisadores." },
      { pergunta: "Entrevista aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Pergunta tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Laboratório do Saber",
    objetivo: "Ache 3: ENQUETE, ENTREVISTA, REGISTRO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Enquete", imagemUrl: dado_img, rotulo: "Enquete" },
      { nome: "Entrevista", imagemUrl: tv_img, rotulo: "Entrevista" },
      { nome: "Pergunta", imagemUrl: coruja_img, rotulo: "Pergunta" }
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
    titulo: "Enquete em Casa",
    instrucao: "Perguntem a 4 pessoas: 'Qual sua cor favorita?' e anotem.",
    permitirFoto: true,
    registros: [
      { label: "Pessoa 1 - cor", tipo: "texto" },{ label: "Pessoa 2 - cor", tipo: "texto" },{ label: "Pessoa 3 - cor", tipo: "texto" },{ label: "Cor que mais apareceu", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP21" }
};

export default aula;
