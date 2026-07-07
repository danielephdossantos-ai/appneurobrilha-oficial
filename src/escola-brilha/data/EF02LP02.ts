import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import balao_img from "@/assets/neuro-treino/objetos/balao.png";
import banana_img from "@/assets/neuro-treino/objetos/banana.png";
import bicicleta_img from "@/assets/neuro-treino/objetos/bicicleta-moderna.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import gato_img from "@/assets/neuro-treino/objetos/gato.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import sapo_img from "@/assets/neuro-treino/objetos/sapo.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";

/**
 * EF02LP02 — A Escada Silábica
 * BNCC: segmentação silábica e troca de sílabas.
 */
const aula: Aula = {
  codigo: "EF02LP02",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "A Escada Silábica",
  narrativa: {
    titulo: "A Escada Silábica",
    contexto: "Brilha encontra a ESCADA MÁGICA da Torre das Sílabas.",
    problema: "As palavras se despedaçaram — só sobe quem juntar as sílabas certas.",
    convite: "Bora subir a escada trocando e juntando sílabas com Brilha?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Segmentar palavras em sílabas e criar palavras novas trocando sílabas iniciais, mediais e finais.",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "GATO", imagemUrl: gato_img, silabas: ["GA", "TO"], frase: "O gato dorme." },
      { palavra: "BALÃO", imagemUrl: balao_img, silabas: ["BA", "LÃO"], frase: "O balão subiu no céu." },
      { palavra: "BANANA", imagemUrl: banana_img, silabas: ["BA", "NA", "NA"], frase: "A banana é amarela." },
      { palavra: "BICICLETA", imagemUrl: bicicleta_img, silabas: ["BI", "CI", "CLE", "TA"], frase: "Ando de bicicleta." },
      { palavra: "SAPO", imagemUrl: sapo_img, silabas: ["SA", "PO"], frase: "O sapo pulou na lagoa." }
    ]
  },
  objetivos: ["Contar sílabas.", "Separar em sílabas.", "Trocar sílaba inicial.", "Trocar sílaba final.", "Perceber que trocar sílaba muda a palavra."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🪜 Sílaba = pedacinho falado de uma vez.\nGA-TO(2) · BI-CI-CLE-TA(4).\n✨ Trocando UMA sílaba a palavra muda: BOLA→COLA · MALA→SALA · MALA→MAPA.",
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
    enunciado: "Toque na figura que combina com GATO.",
    resposta: "GATO.",
    explicacao: "GATO é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: GATO",
      opcoes: [
        { nome: "gato", imagemUrl: gato_img },
        { nome: "balao", imagemUrl: balao_img },
        { nome: "banana", imagemUrl: banana_img }
      ],
      respostaCerta: "gato"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com GATO?", resposta: "GATO.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com BALÃO?", resposta: "BALÃO.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com BANANA?", resposta: "BANANA.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "GATO", itemImagemUrl: gato_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "BALÃO", itemImagemUrl: balao_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "BANANA", itemImagemUrl: banana_img, quantidade: 1, cor: "#10B981" },
        { personagem: "BICICLETA", itemImagemUrl: bicicleta_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "SAPO", itemImagemUrl: sapo_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com GATO?", opcoes: ["GATO", "BALÃO", "BANANA"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com BALÃO?", opcoes: ["BALÃO", "GATO", "BANANA"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com BANANA?", opcoes: ["BANANA", "GATO", "BALÃO"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com BICICLETA?", opcoes: ["BICICLETA", "GATO", "BALÃO"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["A Escada Silábica", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ A Escada Silábica.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com GATO?", opcoes: ["GATO","BALÃO","BANANA"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com BALÃO?", opcoes: ["BALÃO","GATO","BANANA"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com BANANA?", opcoes: ["BANANA","GATO","BALÃO"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["A Escada Silábica", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Mestre das Sílabas! 🎁 Item: Escada Mágica.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "Toda sílaba do Português tem PELO MENOS uma vogal — é a vogal que faz a sílaba 'soar'!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de GATO",
      instrucao: "Toque pra ouvir. Qual figura combina com GATO?",
      pergunta: "Palavra: GATO",
      opcoes: [
        { nome: "GATO", imagemUrl: gato_img, rotulo: "GATO" },
        { nome: "BALÃO", imagemUrl: balao_img, rotulo: "BALÃO" },
        { nome: "BANANA", imagemUrl: banana_img, rotulo: "BANANA" }
      ],
      correta: 0,
      acerto: "✅ GATO!",
      erro: "Ouça de novo e escolha GATO."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de BALÃO",
      instrucao: "Toque pra ouvir. Qual figura combina com BALÃO?",
      pergunta: "Palavra: BALÃO",
      opcoes: [
        { nome: "BALÃO", imagemUrl: balao_img, rotulo: "BALÃO" },
        { nome: "GATO", imagemUrl: gato_img, rotulo: "GATO" },
        { nome: "BANANA", imagemUrl: banana_img, rotulo: "BANANA" }
      ],
      correta: 0,
      acerto: "✅ BALÃO!",
      erro: "Ouça de novo e escolha BALÃO."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de BANANA",
      instrucao: "Toque pra ouvir. Qual figura combina com BANANA?",
      pergunta: "Palavra: BANANA",
      opcoes: [
        { nome: "BANANA", imagemUrl: banana_img, rotulo: "BANANA" },
        { nome: "GATO", imagemUrl: gato_img, rotulo: "GATO" },
        { nome: "BALÃO", imagemUrl: balao_img, rotulo: "BALÃO" }
      ],
      correta: 0,
      acerto: "✅ BANANA!",
      erro: "Ouça e escolha BANANA."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["GATO", "BALÃO", "BANANA"],
      imagens: [
        { imagemUrl: gato_img, quantidade: 1, rotulo: "GATO" },
        { imagemUrl: balao_img, quantidade: 1, rotulo: "BALÃO" },
        { imagemUrl: banana_img, quantidade: 1, rotulo: "BANANA" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com BICICLETA?",
      pergunta: "Palavra: BICICLETA",
      opcoes: [
        { nome: "BICICLETA", imagemUrl: bicicleta_img, rotulo: "BICICLETA" },
        { nome: "GATO", imagemUrl: gato_img, rotulo: "GATO" },
        { nome: "BALÃO", imagemUrl: balao_img, rotulo: "BALÃO" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha BICICLETA."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["GATO","BALÃO","BANANA"], correta: 0, explicacao: "É GATO.", visual: { tipo: "itens", imagemUrl: gato_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["BALÃO","GATO","BANANA"], correta: 0, explicacao: "É BALÃO.", visual: { tipo: "itens", imagemUrl: balao_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["BANANA","GATO","BALÃO"], correta: 0, explicacao: "É BANANA.", visual: { tipo: "itens", imagemUrl: banana_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["A Escada Silábica", "Só matemática", "Só música"], correta: 0, explicacao: "A Escada Silábica." },
      { pergunta: "BALÃO aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "BANANA tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Caça às Sílabas",
    objetivo: "Encontre palavras de 2, 3 e 4 sílabas em 90s.",
    tempoSegundos: 90,
    elementos: [
      { nome: "GATO", imagemUrl: gato_img, rotulo: "GATO" },
      { nome: "BALÃO", imagemUrl: balao_img, rotulo: "BALÃO" },
      { nome: "BANANA", imagemUrl: banana_img, rotulo: "BANANA" }
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
    titulo: "Detetive das Sílabas",
    instrucao: "Escolham 5 palavras em casa. Batam palma pra contar sílabas de cada uma.",
    permitirFoto: true,
    registros: [
      { label: "Palavra 1 e nº", tipo: "texto" },{ label: "Palavra 2 e nº", tipo: "texto" },{ label: "Palavra 3 e nº", tipo: "texto" },{ label: "Mais difícil?", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP03" }
};

export default aula;
