import type { Aula } from "../types";
import { url as professoraImg } from "@/assets/neuro-treino/objetos/professora.png.asset.json";
import { url as lapisImg } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as papelImg } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as livroImg } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as meninaImg } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as gatoImg } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as solImg } from "@/assets/neuro-treino/objetos/sol.png.asset.json";

/**
 * EI03EF05 — Pré II · Ditar histórias (professor como escriba)
 * Pedagogia: escrita mediada. A criança ainda não escreve com letras, mas
 * DITA o texto e vê o adulto escrever. Ensina que FALA VIRA ESCRITA —
 * conceito central de Emília Ferreiro (psicogênese da língua escrita).
 */
const aula: Aula = {
  codigo: "EI03EF05",
  ano: "Educação Infantil",
  disciplina: "Português",
  titulo: "Ditar para o Professor",

  narrativa: {
    titulo: "A professora vira escritora",
    contexto: "A professora do Brilha disse: 'Você conta a história e EU escrevo pra você.' Ele achou mágico ver as palavras dele virando letras no papel.",
    problema: "Pra virar história de verdade, o Brilha precisa FALAR devagar e por partes, pra dar tempo da professora escrever.",
    convite: "Bora aprender a ditar uma história com jeitinho?",
  },

  conhecimentosPrevios: ["Sabe falar frases.", "Já viu alguém escrever.", "Reconhece o próprio nome."],

  missao: "Descobrir que TUDO que a gente FALA pode virar ESCRITA — e treinar a ditar uma frase de cada vez.",

  objetivos: [
    "Perceber que a fala pode ser registrada em papel.",
    "Ditar uma frase completa e esperar o adulto escrever.",
    "Reler junto o que ficou escrito.",
  ],

  explicacao:
    "Quando a gente FALA, o som some no ar.\n\nMas se um adulto ESCREVE o que a gente falou, a fala fica GUARDADA no papel — pra sempre.\n\nDitar é assim:\n\n1. A criança fala uma frase.\n2. O adulto escreve com o lápis.\n3. Depois eles LEEM juntos.\n\nA fala virou escrita. É mágica, mas é verdade — todo livro começou assim: alguém pensou, falou e escreveu.",

  explicacaoAtiva: [
    { texto: "A professora pega o LÁPIS e o PAPEL.", imagem: lapisImg, imagemAlt: "Lápis" },
    { texto: "Você FALA UMA frase. Devagar.", imagem: meninaImg, imagemAlt: "Menina falando" },
    {
      texto: "A professora escreve exatamente o que você falou.",
      imagem: professoraImg,
      imagemAlt: "Professora escrevendo",
      checagem: {
        pergunta: "Quem escreve na hora do DITADO?",
        opcoes: ["O adulto", "O tempo"],
        correta: 0,
        explicacao: "O adulto é o escriba enquanto a criança dita.",
      },
    },
  ],

  explicacoesNiveis: {
    nivel1: "Ditar = falar pra alguém escrever.",
    nivel2: "A fala vira letra no papel.",
    nivel3: "Fale UMA frase de cada vez, esperando o adulto terminar.",
    nivel4: "Todo escritor famoso já foi criança que ditava histórias pra alguém — assim aprendeu.",
  },

  exemploResolvido: {
    enunciado: "Vamos ditar: 'O GATO subiu no telhado.'",
    passos: [
      "Fala devagar: 'O… GATO…'",
      "Espera a professora escrever GATO.",
      "Continua: '…subiu no TELHADO.'",
      "Lê junto o que ficou.",
    ],
    resposta: "Ditou 1 frase inteira e virou texto escrito.",
    interativo: { tipo: "contagem", imagemUrl: gatoImg, quantidade: 1, nomeItem: "gato", nomeItemPlural: "gatos", pergunta: "Quantos gatos apareceram na história?" },
  },

  atividadeGuiada: {
    enunciado: "Pra escrever a história, a professora precisa de qual objeto?",
    resposta: "Lápis (ou caneta) e papel.",
    explicacao: "Sem lápis não dá pra registrar a fala.",
    visual: {
      tipo: "escolherImagem",
      pergunta: "Qual objeto ela precisa pra ESCREVER?",
      opcoes: [
        { nome: "Lápis", imagemUrl: lapisImg },
        { nome: "Gato", imagemUrl: gatoImg },
        { nome: "Sol", imagemUrl: solImg },
      ],
      respostaCerta: "Lápis",
    },
  },

  exercicios: [
    { enunciado: "Quando FALO, minha voz…?", resposta: "Some no ar.", dica: "Não guarda sozinha." },
    { enunciado: "Quando ESCREVO, minha frase…?", resposta: "Fica no papel.", dica: "Pode reler." },
    { enunciado: "O que faço enquanto o adulto escreve?", resposta: "Falo devagar e espero.", dica: "Um pouquinho de paciência." },
  ],

  desafio: {
    enunciado: "Desafio Brilha: dite uma micro-história de 3 frases.",
    resposta: "Início, meio e fim — 3 frases curtas.",
    visual: {
      cena: [
        { personagem: "Menina fala", itemImagemUrl: meninaImg, quantidade: 1, cor: "#F472B6" },
        { personagem: "Professora escreve", itemImagemUrl: professoraImg, quantidade: 1, cor: "#A78BFA" },
        { personagem: "Papel guarda", itemImagemUrl: papelImg, quantidade: 1, cor: "#FBBF24" },
      ],
      perguntas: [
        { pergunta: "Quem FALA a história?", opcoes: ["A criança", "O papel"], correta: 0, explicacao: "A criança dita." },
        { pergunta: "Quem ESCREVE?", opcoes: ["O adulto", "A criança"], correta: 0, explicacao: "O adulto é o escriba." },
        { pergunta: "Onde a história FICA?", opcoes: ["No papel", "Só na cabeça"], correta: 0, explicacao: "Guardada no papel." },
      ],
    },
  },

  revisao: {
    pontos: [
      "Fala some, escrita fica.",
      "Ditar = criança fala, adulto escreve.",
      "Fale UMA frase por vez.",
      "Depois leiam JUNTOS.",
    ],
    dica: "Em casa: dite uma frase sobre o seu dia pra alguém escrever. Guarde o papel.",
  },

  quiz: [
    { pergunta: "Quem escreve no ditado?", opcoes: ["O adulto", "O lápis sozinho"], correta: 0, explicacao: "O adulto segura o lápis.", visual: { tipo: "itens", imagemUrl: professoraImg, quantidade: 1, rotulo: "Professora" } },
    { pergunta: "Fala que virou escrita fica…?", opcoes: ["No papel", "No vento"], correta: 0, explicacao: "Escrita guarda.", visual: { tipo: "itens", imagemUrl: papelImg, quantidade: 1, rotulo: "Papel" } },
    { pergunta: "Quantas frases dite por vez?", opcoes: ["Uma", "Vinte de uma vez"], correta: 0, explicacao: "Uma de cada vez, com calma.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
  ],

  conclusao: "🏅 Você virou AUTOR! Missão em Casa: dite uma história curtinha da sua semana pra mamãe ou papai escrever.",

  curiosidade: {
    titulo: "Você sabia?",
    texto: "Machado de Assis, um dos maiores escritores do Brasil, começou ditando histórias antes de saber escrever com as próprias mãos.",
    imagemUrl: livroImg,
  },

  interativas: [
    {
      tipo: "ordenar",
      titulo: "Fase 1 · Como funciona o ditado",
      instrucao: "Coloque em ordem.",
      itens: ["A criança pensa na frase", "Fala devagar", "O adulto escreve", "Leem juntos"],
    },
    {
      tipo: "contarQuiz",
      titulo: "Fase 2 · Ditando",
      instrucao: "Escolha o certo.",
      grupos: [{ imagemUrl: casaImg, quantidade: 1, rotulo: "Cena" }],
      pergunta: "Enquanto a professora escreve, a criança…",
      opcoes: ["Espera e fala devagar", "Corre pra outra sala"],
      correta: 0,
      acerto: "Isso — paciência e voz calma.",
      erro: "Precisa esperar a mão terminar.",
    },
  ],

  niveis: {
    dominioMinimo: 70,
    facil: [
      { pergunta: "Fala vira escrita?", opcoes: ["Sim", "Não"], correta: 0, explicacao: "Quando alguém escreve o que você fala.", visual: { tipo: "itens", imagemUrl: lapisImg, quantidade: 1, rotulo: "Lápis" } },
    ],
    medio: [
      { pergunta: "Preciso de qual objeto pra ditar?", opcoes: ["Lápis + papel", "Bola"], correta: 0, explicacao: "Sem eles não registra.", visual: { tipo: "itens", imagemUrl: papelImg, quantidade: 1, rotulo: "Papel" } },
    ],
    dificil: [
      { pergunta: "Meu ditado ficou pronto. E agora?", opcoes: ["A gente lê junto", "Joga fora"], correta: 0, explicacao: "Ler junto celebra o texto.", visual: { tipo: "itens", imagemUrl: livroImg, quantidade: 1, rotulo: "Livro" } },
    ],
  },

  proximaHabilidade: { codigo: "EI03EF06", titulo: "Minha Primeira História" },
};

export default aula;
