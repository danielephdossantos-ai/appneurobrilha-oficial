import type { AulaPortuguesV4 } from "../../types";
import { url as bibliotecaria } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as nuvem } from "@/assets/neuro-treino/objetos/nuvem.png.asset.json";
import { url as casaco } from "@/assets/neuro-treino/objetos/casaco.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";

/**
 * Unidade 4 · Aula 1 — Procurando Pistas no Texto
 * BNCC: EF02LP16 · EF02LP17
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-procurando-pistas",
  titulo: "Procurando Pistas no Texto",
  iconeTrilha: "🔎",
  bncc: ["EF02LP16", "EF02LP17"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A Lupa Mágica de Aurora",
    historia:
      "Alguns livros da biblioteca continuam TRANCADOS com um cadeado mágico. Aurora entrega uma LUPA MÁGICA pra Brilha e diz: — Esses livros só abrem pra verdadeiros DETETIVES DA LEITURA. Não basta ler as palavras. Tem que encontrar as PISTAS escondidas na história!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Leia o bilhete do Pedro. Antes de responder, olhe bem as PISTAS.",
    bloco: {
      titulo: "O dia do Pedro",
      recado: {
        icone: "📩",
        rotulo: "História do Pedro",
        estilo: "papel",
        linhas: [
          "Pedro saiu de casa usando",
          "CAPA DE CHUVA e BOTAS.",
          "O CÉU estava ESCURO e",
          "NUVENS cobriam a cidade.",
        ],
      },
      pergunta: "Como provavelmente estava o TEMPO quando o Pedro saiu?",
      hipoteses: [
        { texto: "Estava CHOVENDO ou pra chover.", imagemUrl: chuva },
        { texto: "Estava um dia de SOL forte.", imagemUrl: sol },
        { texto: "Estava nevando.", imagemUrl: nuvem },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! O texto NÃO disse 'estava chovendo', mas as pistas (capa de chuva + botas + céu escuro + nuvens) mostram que era um dia de chuva.",
      feedbackErro:
        "Volta pras pistas: CAPA DE CHUVA, BOTAS, CÉU ESCURO, NUVENS. Isso é dia de sol? Ou dia de chuva?",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavrinhas de detetive.",
    cards: [
      {
        palavra: "pista",
        explicacao:
          "É uma informação pequena no texto que ajuda a gente a DESCOBRIR alguma coisa que o texto não disse direto.",
        exemplo:
          "'Capa de chuva' é uma PISTA de que estava chovendo.",
        imagemUrl: binoculo,
      },
      {
        palavra: "descobrir",
        explicacao:
          "É juntar as pistas do texto e CHEGAR na resposta usando o cérebro de detetive.",
        exemplo:
          "Vendo capa + botas + nuvens, a gente DESCOBRE que estava chovendo.",
        imagemUrl: brilha,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia junto com Brilha. As palavras em amarelo são as PISTAS. Toque nelas!",
    leitura: {
      titulo: "O passeio do Pedro (com pistas)",
      imagemUrl: menino,
      legendaImagem: "Pedro pronto pra sair",
      destacar: ["capa de chuva", "botas", "céu escuro", "nuvens", "guarda-chuva"],
      paragrafos: [
        "Pedro saiu de casa usando capa de chuva e botas.",
        "O céu estava escuro e nuvens cobriam a cidade.",
        "Ele pegou um guarda-chuva antes de fechar a porta.",
        "O texto não disse 'estava chovendo'. Mas todas as pistas juntas mostram que SIM: era um dia de chuva.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Responda usando as pistas do texto.",
    perguntas: [
      {
        pergunta: "Qual dessas coisas NÃO é uma pista de chuva?",
        opcoes: ["Capa de chuva", "Céu escuro", "Um sorvete de morango"],
        correta: 2,
        feedbackAcerto: "🎉 Sorvete não avisa nada sobre o tempo!",
        feedbackErro:
          "Capa e céu escuro são coisas ligadas à chuva. Sorvete não tem nada a ver com o tempo.",
      },
      {
        pergunta: "Pra que serve olhar as pistas do texto?",
        opcoes: [
          "Pra descobrir coisas que o texto não disse direto",
          "Pra decorar o texto",
          "Pra pular o texto mais rápido",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! Pistas ajudam a DESCOBRIR o que o autor não escreveu com todas as letras.",
        feedbackErro:
          "As pistas ajudam a DESCOBRIR informações escondidas — não são pra decorar nem pra pular.",
      },
      {
        pergunta: "Se um texto diz 'Ana pegou o casaco grosso e um cachecol', o tempo estava…",
        opcoes: ["Muito quente", "Frio", "Chovendo neve"],
        correta: 1,
        feedbackAcerto:
          "🎉 Frio! Casaco grosso + cachecol são pistas de FRIO.",
        feedbackErro:
          "Pense: quando a gente usa casaco grosso e cachecol? No frio.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Ainda com a lupa: onde e quando essa historinha aconteceu?",
    perguntas: [
      {
        pergunta: "Onde Pedro estava no começo da história?",
        opcoes: ["Na escola", "Em CASA, saindo", "No parque"],
        correta: 1,
        feedbackAcerto: "🎉 Diz 'Pedro SAIU DE CASA'.",
        feedbackErro:
          "Volte na primeira linha: 'Pedro saiu de CASA'. Ele estava em casa.",
        ondeEstaNoTexto: "Pedro saiu de casa",
      },
      {
        pergunta: "Qual objeto Pedro pegou antes de fechar a porta?",
        opcoes: ["Um guarda-chuva", "Uma bola", "Um livro"],
        correta: 0,
        feedbackAcerto: "🎉 Guarda-chuva — outra pista de chuva!",
        feedbackErro:
          "O texto disse: 'pegou um GUARDA-CHUVA antes de fechar a porta'.",
        ondeEstaNoTexto: "pegou um guarda-chuva antes de fechar a porta",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "Coloque na ordem como um bom detetive investiga uma pista.",
    bloco: {
      instrucao: "Do começo (ler) até o fim (descobrir).",
      itens: [
        { id: "s1", texto: "Ler o texto todo com atenção.", imagemUrl: brilha },
        { id: "s2", texto: "Marcar as PISTAS (palavras importantes).", imagemUrl: binoculo },
        { id: "s3", texto: "Juntar as pistas na cabeça.", imagemUrl: nuvem },
        { id: "s4", texto: "DESCOBRIR a resposta.", imagemUrl: chuva },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Assim que trabalha um detetive da leitura!",
      feedbackErro:
        "Primeiro LER, depois MARCAR pistas, depois JUNTAR na cabeça, e por último DESCOBRIR.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora VOCÊ é o detetive. Leia sozinho e ache as pistas.",
    leitura: {
      titulo: "A mochila da Ana",
      imagemUrl: mochila,
      destacar: ["mochila", "molhada", "guarda-chuva quebrado", "cabelo pingando"],
      paragrafos: [
        "Ana chegou na escola com a mochila TODA MOLHADA.",
        "Do guarda-chuva QUEBRADO, saíam gotas d'água.",
        "O cabelo dela estava PINGANDO no chão.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como provavelmente estava o tempo na rua?",
        opcoes: ["Sol quente", "Chovendo", "Nevando"],
        correta: 1,
        feedbackAcerto: "🎉 Chovendo! Mochila molhada + cabelo pingando = chuva.",
        feedbackErro:
          "Pistas: mochila MOLHADA, guarda-chuva, cabelo PINGANDO. Isso é dia de sol ou de chuva?",
        ondeEstaNoTexto: "mochila TODA MOLHADA... cabelo estava PINGANDO",
      },
      {
        pergunta: "Por que o guarda-chuva não protegeu a Ana?",
        opcoes: ["Ela esqueceu em casa", "Estava QUEBRADO", "Era pequeno demais"],
        correta: 1,
        feedbackAcerto: "🎉 QUEBRADO! Por isso a mochila e o cabelo molharam.",
        feedbackErro: "O texto diz: 'guarda-chuva QUEBRADO'.",
        ondeEstaNoTexto: "guarda-chuva QUEBRADO",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🔎 Caça às Pistas",
    instrucao:
      "Leia a frase e MARQUE só as palavras que são PISTAS pra descobrir a resposta.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "🔎 Caça às Pistas",
      bloco: {
        instrucao:
          "Frase: 'João pegou o casaco grosso, o cachecol e a luva antes de sair. Depois comeu uma maçã.'",
        pergunta: "Quais palavras são PISTAS de que estava FRIO?",
        opcoes: [
          { id: "o1", texto: "casaco grosso", imagemUrl: casaco, correto: true },
          { id: "o2", texto: "cachecol", correto: true },
          { id: "o3", texto: "luva", correto: true },
          { id: "o4", texto: "maçã", correto: false },
          { id: "o5", texto: "João", correto: false },
        ],
        feedbackAcerto:
          "🎉 Detetive! As pistas de FRIO são: casaco grosso, cachecol e luva. Maçã e João não dizem nada sobre o tempo.",
        feedbackErro:
          "Pense: o que a gente usa quando faz frio? Casaco, cachecol, luva. Maçã é comida — não é pista de tempo.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PISTA é uma palavra ou detalhe do texto que ajuda a DESCOBRIR algo.",
      "Nem toda resposta está escrita direto — às vezes a gente JUNTA as pistas.",
      "Bom detetive: LÊ, MARCA as pistas, JUNTA e DESCOBRE.",
    ],
    miniDesafio: {
      pergunta:
        "'Bia acordou com o cabelo bagunçado e bocejou várias vezes.' O que provavelmente aconteceu?",
      opcoes: [
        "Ela acabou de acordar.",
        "Ela vai dormir agora.",
        "Ela está brava.",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Cabelo bagunçado + bocejar = acabou de acordar.",
      feedbackErro:
        "Bocejar e cabelo bagunçado são pistas de quem ACABOU DE ACORDAR.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "1/5 — 'Lucas colocou o protetor solar e o chapéu.' O tempo estava…",
        opcoes: ["Nevando", "Sol forte", "Chuva"],
        correta: 1,
        feedbackAcerto: "🎉 Protetor + chapéu = SOL.",
        feedbackErro: "Protetor solar e chapéu são pistas de SOL forte.",
      },
      {
        pergunta:
          "2/5 — 'Maria abriu a geladeira, pegou o leite e serviu o cereal.' O que ela vai fazer?",
        opcoes: ["Almoçar", "Tomar café da manhã", "Dormir"],
        correta: 1,
        feedbackAcerto: "🎉 Cereal + leite = café da manhã.",
        feedbackErro: "Cereal com leite é comida típica do CAFÉ DA MANHÃ.",
      },
      {
        pergunta: "3/5 — Uma pista serve pra…",
        opcoes: [
          "Encher o texto",
          "Ajudar a DESCOBRIR algo escondido",
          "Fazer o texto ficar bonito",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Ajuda a descobrir!",
        feedbackErro: "Pista ajuda a DESCOBRIR informações que não estão escritas direto.",
      },
      {
        pergunta:
          "4/5 — 'O bolo estava com 6 velinhas e as crianças cantavam parabéns.' O que está acontecendo?",
        opcoes: [
          "Uma festa de aniversário",
          "Uma aula de matemática",
          "Um passeio no parque",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Velinhas + parabéns = aniversário!",
        feedbackErro: "Bolo com velinhas e 'parabéns' = FESTA DE ANIVERSÁRIO.",
      },
      {
        pergunta: "5/5 — Um bom DETETIVE da leitura…",
        opcoes: [
          "Só olha os desenhos",
          "Junta as PISTAS pra descobrir",
          "Adivinha sem ler",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Junta as pistas!",
        feedbackErro:
          "Detetive da leitura JUNTA as pistas do texto pra descobrir a resposta.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Detetives em casa",
    materiais: ["Uma pequena história (livro, revista ou site)"],
    passos: [
      "1) Um adulto lê uma história curta em voz alta.",
      "2) Depois pergunta: 'Que PISTAS ajudaram vocês a entender a história?'",
      "3) A criança aponta pelo menos 3 pistas.",
      "4) Conversem: alguma coisa foi DESCOBERTA sem estar escrita direto?",
    ],
    registro: "📸 Foto da criança apontando as pistas na página lida.",
  },

  recompensa: { xp: 140, moedas: 90 },
};

void mochila;
void sol;
