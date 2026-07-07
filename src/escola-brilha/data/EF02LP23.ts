import type { Aula } from "../types";
import album_img from "@/assets/neuro-treino/objetos/album.png";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import binoculo_img from "@/assets/neuro-treino/objetos/binoculo.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import calendario_img from "@/assets/neuro-treino/objetos/calendario.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import pincel_img from "@/assets/neuro-treino/objetos/pincel.png";
import planta_img from "@/assets/neuro-treino/objetos/planta-pequena.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP23 — Registros de Pesquisa
 * BNCC: registrar observações de resultados.
 */
const aula: Aula = {
  codigo: "EF02LP23",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Registros de Pesquisa",
  narrativa: {
    titulo: "Registros de Pesquisa",
    contexto: "Brilha visita o Jardim das Descobertas.",
    problema: "Fez uma pesquisa sobre plantas mas não anotou nada!",
    convite: "Bora aprender a registrar as observações?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Produzir pequenos registros de observação coerentes com o tema pesquisado.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "Pesquisa", imagemUrl: binoculo_img, silabas: ["PES", "QUI", "SA"], frase: "Fiz uma pesquisa." },
      { palavra: "Observação", imagemUrl: planta_img, silabas: ["OB", "SER", "VA", "ÇÃO"], frase: "Observação do jardim." },
      { palavra: "Registro", imagemUrl: album_img, silabas: ["RE", "GIS", "TRO"], frase: "Meu registro." },
      { palavra: "Tabela", imagemUrl: calendario_img, silabas: ["TA", "BE", "LA"], frase: "Uma tabela ajuda." },
      { palavra: "Desenho", imagemUrl: pincel_img, silabas: ["DE", "SE", "NHO"], frase: "Desenhei o que vi." }
    ]
  },
  objetivos: ["Escolher tema.", "Observar detalhes.", "Escrever em ordem.", "Fazer desenho.", "Mostrar o resultado."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "📓 Registro = anotar + desenhar o que se observou.\nAjuda a lembrar depois e a mostrar pra outra pessoa.",
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
    enunciado: "Toque na figura que combina com Pesquisa.",
    resposta: "Pesquisa.",
    explicacao: "Pesquisa é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: Pesquisa",
      opcoes: [
        { nome: "binoculo", imagemUrl: binoculo_img },
        { nome: "planta", imagemUrl: planta_img },
        { nome: "album", imagemUrl: album_img }
      ],
      respostaCerta: "binoculo"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com Pesquisa?", resposta: "Pesquisa.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com Observação?", resposta: "Observação.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com Registro?", resposta: "Registro.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "Pesquisa", itemImagemUrl: binoculo_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "Observação", itemImagemUrl: planta_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "Registro", itemImagemUrl: album_img, quantidade: 1, cor: "#10B981" },
        { personagem: "Tabela", itemImagemUrl: calendario_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "Desenho", itemImagemUrl: pincel_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com Pesquisa?", opcoes: ["Pesquisa", "Observação", "Registro"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com Observação?", opcoes: ["Observação", "Pesquisa", "Registro"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com Registro?", opcoes: ["Registro", "Pesquisa", "Observação"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com Tabela?", opcoes: ["Tabela", "Pesquisa", "Observação"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Registros de Pesquisa", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Registros de Pesquisa.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com Pesquisa?", opcoes: ["Pesquisa","Observação","Registro"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com Observação?", opcoes: ["Observação","Pesquisa","Registro"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com Registro?", opcoes: ["Registro","Pesquisa","Observação"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Registros de Pesquisa", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Observador do Jardim! 🎁 Item: Caderno de Descobertas.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Cientistas famosos como Darwin faziam CADERNOS DE VIAGEM cheios de desenhos e anotações!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de Pesquisa",
      instrucao: "Toque pra ouvir. Qual figura combina com Pesquisa?",
      pergunta: "Palavra: Pesquisa",
      opcoes: [
        { nome: "Pesquisa", imagemUrl: binoculo_img, rotulo: "Pesquisa" },
        { nome: "Observação", imagemUrl: planta_img, rotulo: "Observação" },
        { nome: "Registro", imagemUrl: album_img, rotulo: "Registro" }
      ],
      correta: 0,
      acerto: "✅ Pesquisa!",
      erro: "Ouça de novo e escolha Pesquisa."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de Observação",
      instrucao: "Toque pra ouvir. Qual figura combina com Observação?",
      pergunta: "Palavra: Observação",
      opcoes: [
        { nome: "Observação", imagemUrl: planta_img, rotulo: "Observação" },
        { nome: "Pesquisa", imagemUrl: binoculo_img, rotulo: "Pesquisa" },
        { nome: "Registro", imagemUrl: album_img, rotulo: "Registro" }
      ],
      correta: 0,
      acerto: "✅ Observação!",
      erro: "Ouça de novo e escolha Observação."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de Registro",
      instrucao: "Toque pra ouvir. Qual figura combina com Registro?",
      pergunta: "Palavra: Registro",
      opcoes: [
        { nome: "Registro", imagemUrl: album_img, rotulo: "Registro" },
        { nome: "Pesquisa", imagemUrl: binoculo_img, rotulo: "Pesquisa" },
        { nome: "Observação", imagemUrl: planta_img, rotulo: "Observação" }
      ],
      correta: 0,
      acerto: "✅ Registro!",
      erro: "Ouça e escolha Registro."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["Pesquisa", "Observação", "Registro"],
      imagens: [
        { imagemUrl: binoculo_img, quantidade: 1, rotulo: "Pesquisa" },
        { imagemUrl: planta_img, quantidade: 1, rotulo: "Observação" },
        { imagemUrl: album_img, quantidade: 1, rotulo: "Registro" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com Tabela?",
      pergunta: "Palavra: Tabela",
      opcoes: [
        { nome: "Tabela", imagemUrl: calendario_img, rotulo: "Tabela" },
        { nome: "Pesquisa", imagemUrl: binoculo_img, rotulo: "Pesquisa" },
        { nome: "Observação", imagemUrl: planta_img, rotulo: "Observação" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha Tabela."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Pesquisa","Observação","Registro"], correta: 0, explicacao: "É Pesquisa.", visual: { tipo: "itens", imagemUrl: binoculo_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Observação","Pesquisa","Registro"], correta: 0, explicacao: "É Observação.", visual: { tipo: "itens", imagemUrl: planta_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["Registro","Pesquisa","Observação"], correta: 0, explicacao: "É Registro.", visual: { tipo: "itens", imagemUrl: album_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Registros de Pesquisa", "Só matemática", "Só música"], correta: 0, explicacao: "Registros de Pesquisa." },
      { pergunta: "Observação aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "Registro tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Jardim das Descobertas",
    objetivo: "Ache 3: PESQUISA, OBSERVAÇÃO, DESENHO.",
    tempoSegundos: 90,
    elementos: [
      { nome: "Pesquisa", imagemUrl: binoculo_img, rotulo: "Pesquisa" },
      { nome: "Observação", imagemUrl: planta_img, rotulo: "Observação" },
      { nome: "Registro", imagemUrl: album_img, rotulo: "Registro" }
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
    titulo: "Cadernos das Plantas",
    instrucao: "Observem 2 plantas em casa/rua. Anotem cor, tamanho e uma curiosidade.",
    permitirFoto: true,
    registros: [
      { label: "Planta 1", tipo: "texto" },{ label: "Planta 2", tipo: "texto" },{ label: "Diferença", tipo: "texto" },{ label: "Fizeram desenho?", tipo: "sim_nao" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP24" }
};

export default aula;
