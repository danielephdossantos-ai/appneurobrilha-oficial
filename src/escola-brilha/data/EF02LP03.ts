import type { Aula } from "../types";
import arvore_img from "@/assets/neuro-treino/objetos/arvore.png";
import bola_img from "@/assets/neuro-treino/objetos/bola.png";
import bolo_img from "@/assets/neuro-treino/objetos/bolo.png";
import cachorro_img from "@/assets/neuro-treino/objetos/cachorro.png";
import carro_img from "@/assets/neuro-treino/objetos/carro.png";
import coruja_img from "@/assets/neuro-treino/objetos/coruja.png";
import escola_img from "@/assets/neuro-treino/objetos/escola.png";
import estrela_img from "@/assets/neuro-treino/objetos/estrela.png";
import livro_img from "@/assets/neuro-treino/objetos/livro.png";
import pato_img from "@/assets/neuro-treino/objetos/pato.png";
import peixe_img from "@/assets/neuro-treino/objetos/peixe.png";
import princesa_img from "@/assets/neuro-treino/objetos/princesa.png";
import sol_img from "@/assets/neuro-treino/objetos/sol.png";
import vela_img from "@/assets/neuro-treino/objetos/vela.png";

/**
 * EF02LP03 — Sons Iguais, Letras Diferentes
 * BNCC: letras/fonemas regulares (F,V,P,B,T,D; C/QU; E/O átono).
 */
const aula: Aula = {
  codigo: "EF02LP03",
  ano: "2º Ano",
  disciplina: "Língua Portuguesa",
  titulo: "Sons Iguais, Letras Diferentes",
  narrativa: {
    titulo: "Sons Iguais, Letras Diferentes",
    contexto: "Brilha visita a Oficina dos Sons: cada máquina produz um som e joga as letras.",
    problema: "As máquinas confundiram: FACA sai com V, PATO com B!",
    convite: "Bora ajustar as máquinas escolhendo a LETRA certa pra cada som?",
  },
  conhecimentosPrevios: [
    "Ler palavras curtas.",
    "Reconhecer letras e sílabas.",
    "Falar sobre o que leu."
  ],
  missao: "Escolher a letra certa para cada som regular (F/V, P/B, T/D, C/QU).",
  aprendendo: {
    titulo: "Aprendendo",
    instrucao: "Toque em cada card pra ouvir a palavra, ver as sílabas e uma frase.",
    cards: [
      { palavra: "FADA", imagemUrl: princesa_img, silabas: ["FA", "DA"], frase: "A fada usa varinha." },
      { palavra: "VELA", imagemUrl: vela_img, silabas: ["VE", "LA"], frase: "A vela ilumina." },
      { palavra: "PATO", imagemUrl: pato_img, silabas: ["PA", "TO"], frase: "O pato nada." },
      { palavra: "BOLA", imagemUrl: bola_img, silabas: ["BO", "LA"], frase: "A bola é redonda." },
      { palavra: "BOLO", imagemUrl: bolo_img, silabas: ["BO", "LO"], frase: "O bolo é doce." }
    ]
  },
  objetivos: ["Diferenciar F e V.", "Diferenciar P e B.", "Diferenciar T e D.", "Escolher C ou QU.", "Perceber E/O no final átono."],
  motivacao: "Cada descoberta ilumina a Biblioteca das Estrelas!",
  explicacao: "🔤 Cada som tem SUA letra:\nF=FADA · V=VELA · P=PATO · B=BOLA · T=TATU · D=DEDO.\nCA/CO/CU=C · QUE/QUI=QU.\nNo final átono escrevemos E/O: MENINO, BOLO.",
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
    enunciado: "Toque na figura que combina com FADA.",
    resposta: "FADA.",
    explicacao: "FADA é o exemplo que estudamos.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Palavra: FADA",
      opcoes: [
        { nome: "princesa", imagemUrl: princesa_img },
        { nome: "vela", imagemUrl: vela_img },
        { nome: "pato", imagemUrl: pato_img }
      ],
      respostaCerta: "princesa"
    }
  },
  exercicios: [
    { enunciado: "Qual das opções combina com FADA?", resposta: "FADA.", dica: "Volte na explicação." },
    { enunciado: "Qual das opções combina com VELA?", resposta: "VELA.", dica: "Veja o card." },
    { enunciado: "Qual das opções combina com PATO?", resposta: "PATO.", dica: "Leia com calma." }
  ],
  desafio: {
    enunciado: "Desafio Brilha: mostre tudo que aprendeu.",
    resposta: "Cada acerto ilumina o cenário!",
    visual: {
      cena: [
        { personagem: "FADA", itemImagemUrl: princesa_img, quantidade: 1, cor: "#60A5FA" },
        { personagem: "VELA", itemImagemUrl: vela_img, quantidade: 1, cor: "#F59E0B" },
        { personagem: "PATO", itemImagemUrl: pato_img, quantidade: 1, cor: "#10B981" },
        { personagem: "BOLA", itemImagemUrl: bola_img, quantidade: 1, cor: "#EF4444" },
        { personagem: "BOLO", itemImagemUrl: bolo_img, quantidade: 1, cor: "#8B5CF6" }
      ],
      perguntas: [
        { pergunta: "Qual combina com FADA?", opcoes: ["FADA", "VELA", "PATO"], correta: 0, explicacao: "Você lembrou!" },
        { pergunta: "Qual combina com VELA?", opcoes: ["VELA", "FADA", "PATO"], correta: 0, explicacao: "Perfeito." },
        { pergunta: "Qual combina com PATO?", opcoes: ["PATO", "FADA", "VELA"], correta: 0, explicacao: "Mandou bem." },
        { pergunta: "Qual combina com BOLA?", opcoes: ["BOLA", "FADA", "VELA"], correta: 0, explicacao: "Você achou." },
        { pergunta: "Hoje aprendemos:", opcoes: ["Sons Iguais, Letras Diferentes", "Só matemática", "Só desenho"], correta: 0, explicacao: "Isso mesmo!" }
      ]
    }
  },
  revisao: {
    pontos: [
      "✨ Sons Iguais, Letras Diferentes.",
      "🧠 Pratique com quem você ama.",
      "📚 Leia todos os dias um pouquinho.",
      "🎯 Cada acerto vale ouro!"
    ],
    dica: "Se ficar em dúvida, volte à explicação e ao Aprendendo."
  },
  quiz: [
    { pergunta: "Qual combina com FADA?", opcoes: ["FADA","VELA","PATO"], correta: 0, explicacao: "Volte no card." },
    { pergunta: "Qual combina com VELA?", opcoes: ["VELA","FADA","PATO"], correta: 0, explicacao: "Perfeito." },
    { pergunta: "Qual combina com PATO?", opcoes: ["PATO","FADA","VELA"], correta: 0, explicacao: "Boa!" },
    { pergunta: "Hoje aprendemos:", opcoes: ["Sons Iguais, Letras Diferentes", "Só brincar", "Só desenhar"], correta: 0, explicacao: "Isso mesmo!" },
    { pergunta: "Aprender português ajuda a:", opcoes: ["Comunicar melhor","Esquecer palavras","Só desenhar"], correta: 0, explicacao: "Comunicação!" }
  ],
  conclusao: "🏅 Medalha: Mestre dos Sons! 🎁 Item: Oficina dos Sons.",
  curiosidade: {
    titulo: "Você sabia?",
    texto: "C e QU fazem o mesmo som antes de vogais: CA/CO/CU (com C) e QUE/QUI (com QU)!"
  },
  interativas: [
    {
      tipo: "escolherFigura",
      titulo: "Fase 1 · Ache a figura de FADA",
      instrucao: "Toque pra ouvir. Qual figura combina com FADA?",
      pergunta: "Palavra: FADA",
      opcoes: [
        { nome: "FADA", imagemUrl: princesa_img, rotulo: "FADA" },
        { nome: "VELA", imagemUrl: vela_img, rotulo: "VELA" },
        { nome: "PATO", imagemUrl: pato_img, rotulo: "PATO" }
      ],
      correta: 0,
      acerto: "✅ FADA!",
      erro: "Ouça de novo e escolha FADA."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 2 · Ache a figura de VELA",
      instrucao: "Toque pra ouvir. Qual figura combina com VELA?",
      pergunta: "Palavra: VELA",
      opcoes: [
        { nome: "VELA", imagemUrl: vela_img, rotulo: "VELA" },
        { nome: "FADA", imagemUrl: princesa_img, rotulo: "FADA" },
        { nome: "PATO", imagemUrl: pato_img, rotulo: "PATO" }
      ],
      correta: 0,
      acerto: "✅ VELA!",
      erro: "Ouça de novo e escolha VELA."
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 3 · Ache a figura de PATO",
      instrucao: "Toque pra ouvir. Qual figura combina com PATO?",
      pergunta: "Palavra: PATO",
      opcoes: [
        { nome: "PATO", imagemUrl: pato_img, rotulo: "PATO" },
        { nome: "FADA", imagemUrl: princesa_img, rotulo: "FADA" },
        { nome: "VELA", imagemUrl: vela_img, rotulo: "VELA" }
      ],
      correta: 0,
      acerto: "✅ PATO!",
      erro: "Ouça e escolha PATO."
    },
    {
      tipo: "ordenar",
      titulo: "Fase 4 · Organize os cards",
      instrucao: "Coloque na ordem em que aprendemos.",
      itens: ["FADA", "VELA", "PATO"],
      imagens: [
        { imagemUrl: princesa_img, quantidade: 1, rotulo: "FADA" },
        { imagemUrl: vela_img, quantidade: 1, rotulo: "VELA" },
        { imagemUrl: pato_img, quantidade: 1, rotulo: "PATO" }
      ]
    },
    {
      tipo: "escolherFigura",
      titulo: "Fase 5 · Missão Final",
      instrucao: "Última figura! Qual combina com BOLA?",
      pergunta: "Palavra: BOLA",
      opcoes: [
        { nome: "BOLA", imagemUrl: bola_img, rotulo: "BOLA" },
        { nome: "FADA", imagemUrl: princesa_img, rotulo: "FADA" },
        { nome: "VELA", imagemUrl: vela_img, rotulo: "VELA" }
      ],
      correta: 0,
      acerto: "🌟 Missão cumprida!",
      erro: "Escolha BOLA."
    }
  ],
  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["FADA","VELA","PATO"], correta: 0, explicacao: "É FADA.", visual: { tipo: "itens", imagemUrl: princesa_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["VELA","FADA","PATO"], correta: 0, explicacao: "É VELA.", visual: { tipo: "itens", imagemUrl: vela_img, quantidade: 1 } },
      { pergunta: "Qual palavra combina com esta imagem?", opcoes: ["PATO","FADA","VELA"], correta: 0, explicacao: "É PATO.", visual: { tipo: "itens", imagemUrl: pato_img, quantidade: 1 } }
    ],
    medio: [
      { pergunta: "Complete: hoje aprendemos sobre…", opcoes: ["Sons Iguais, Letras Diferentes", "Só matemática", "Só música"], correta: 0, explicacao: "Sons Iguais, Letras Diferentes." },
      { pergunta: "VELA aparece no card:", opcoes: ["Sim","Não","Talvez"], correta: 0, explicacao: "Volte no Aprendendo." },
      { pergunta: "PATO tem quantas sílabas?", opcoes: ["2","1","10"], correta: 0, explicacao: "Bata palma." }
    ],
    dificil: [
      { pergunta: "Pra aprender melhor, eu:", opcoes: ["Leio e converso","Fecho o livro","Ignoro"], correta: 0, explicacao: "Ler + conversar." },
      { pergunta: "Vocabulário cresce quando:", opcoes: ["Leio muito","Não leio","Fico calado"], correta: 0, explicacao: "Mais leitura." },
      { pergunta: "Ler devagar:", opcoes: ["Ajuda a compreender","Atrapalha","Não muda nada"], correta: 0, explicacao: "Calma + atenção." }
    ]
  },
  minijogo: {
    tipo: "cacaElementos",
    titulo: "Fábrica dos Sons",
    objetivo: "Ache 3 palavras: FADA, PATO, VACA.",
    tempoSegundos: 90,
    elementos: [
      { nome: "FADA", imagemUrl: princesa_img, rotulo: "FADA" },
      { nome: "VELA", imagemUrl: vela_img, rotulo: "VELA" },
      { nome: "PATO", imagemUrl: pato_img, rotulo: "PATO" }
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
    titulo: "Caça-Letras em Casa",
    instrucao: "Escolham 4 objetos: 1 com F, 1 com V, 1 com P e 1 com B.",
    permitirFoto: true,
    registros: [
      { label: "Objeto com F", tipo: "texto" },{ label: "Objeto com V", tipo: "texto" },{ label: "Objeto com P", tipo: "texto" },{ label: "Objeto com B", tipo: "texto" }
    ]
  },
  proximaHabilidade: { codigo: "EF02LP04" }
};

export default aula;
