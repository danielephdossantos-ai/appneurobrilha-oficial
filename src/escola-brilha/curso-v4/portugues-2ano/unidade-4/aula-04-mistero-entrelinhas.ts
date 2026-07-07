import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import menina from "@/assets/neuro-treino/objetos/menina.png";
import chuva from "@/assets/neuro-treino/objetos/chuva.png";
import nuvem from "@/assets/neuro-treino/objetos/nuvem.png";
import mochila from "@/assets/neuro-treino/objetos/mochila.png";
import sol from "@/assets/neuro-treino/objetos/sol.png";
import binoculo from "@/assets/neuro-treino/objetos/binoculo.png";
import bolo from "@/assets/neuro-treino/objetos/bolo.png";
import festa from "@/assets/neuro-treino/objetos/festa.png";

/**
 * Unidade 4 · Aula 4 — O Mistério das Entrelinhas
 * BNCC: EF02LP17 · EF02LP18 · EF02LP20
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-mistero-entrelinhas",
  titulo: "O Mistério das Entrelinhas",
  iconeTrilha: "🕵️",
  bncc: ["EF02LP17", "EF02LP18", "EF02LP20"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "As entrelinhas",
    historia:
      "Aurora sussurra: — Existem coisas que o texto NÃO diz com todas as letras. Elas ficam escondidas nas ENTRELINHAS. Só um bom detetive consegue descobrir juntando as pistas do texto com o que ele já sabe sobre o mundo!",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Leia o pedacinho e pense: o texto DISSE que estava chovendo?",
    bloco: {
      titulo: "A Sofia entrou correndo",
      recado: {
        icone: "🎒",
        rotulo: "Pedaço da história",
        estilo: "papel",
        linhas: [
          "Sofia entrou correndo na sala.",
          "Sua MOCHILA estava",
          "COMPLETAMENTE MOLHADA.",
        ],
      },
      pergunta: "O texto disse que estava CHOVENDO?",
      hipoteses: [
        { texto: "NÃO disse, mas eu DESCOBRI juntando as pistas.", imagemUrl: chuva },
        { texto: "SIM, disse com todas as letras.", imagemUrl: nuvem },
        { texto: "O texto fala que estava sol.", imagemUrl: sol },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! O texto NÃO escreveu 'estava chovendo'. Mas mochila MOLHADA + entrou CORRENDO = provavelmente chovendo. Isso é INFERÊNCIA — descobrir nas entrelinhas.",
      feedbackErro:
        "Volte a ler: 'chovendo' NÃO aparece escrito. A gente DESCOBRE pela mochila molhada.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de detetive avançado.",
    cards: [
      {
        palavra: "inferência",
        explicacao:
          "É DESCOBRIR uma coisa que o texto não disse direto, juntando as pistas do texto + o que a gente sabe.",
        exemplo:
          "Mochila molhada = descobri (INFERÊNCIA) que estava chovendo.",
        imagemUrl: binoculo,
      },
      {
        palavra: "entrelinhas",
        explicacao:
          "São as informações que ficam ESCONDIDAS entre as linhas do texto.",
        exemplo:
          "'Sua mochila estava molhada' → entrelinha: estava chovendo.",
        imagemUrl: brilha,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha investiga. Leia junto.",
    leitura: {
      titulo: "As entrelinhas do bilhete",
      imagemUrl: menina,
      destacar: ["molhada", "correndo", "guarda-chuva"],
      paragrafos: [
        "Sofia entrou correndo na sala. Sua mochila estava completamente MOLHADA.",
        "Como descobrir?",
        "PISTA DO TEXTO: mochila molhada + entrou correndo.",
        "O QUE EU SEI: quando a roupa e a mochila molham do nada, geralmente é chuva.",
        "INFERÊNCIA: estava CHOVENDO lá fora e ela correu pra não molhar mais.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Faça inferências usando as pistas.",
    perguntas: [
      {
        pergunta:
          "'Miguel abriu a porta com dificuldade, cheio de sacolas nos dois braços.' O que ele estava fazendo?",
        opcoes: [
          "Chegando das COMPRAS",
          "Indo dormir",
          "Nadando na piscina",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Chegando das compras! Sacolas cheias nos dois braços = compras.",
        feedbackErro:
          "Sacolas cheias nos DOIS braços é pista de quem voltou das COMPRAS.",
      },
      {
        pergunta:
          "'O cachorro corria em círculos abanando o rabo perto da porta.' O que ele quer?",
        opcoes: [
          "Dormir",
          "SAIR pra passear",
          "Tomar banho",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Sair! Correr em círculos ao lado da porta abanando o rabo = quer sair.",
        feedbackErro:
          "Perto da porta, agitado e abanando o rabo? O cachorro quer SAIR.",
      },
      {
        pergunta: "Inferência é…",
        opcoes: [
          "Só ler as palavras escritas",
          "DESCOBRIR o que o texto não disse direto",
          "Adivinhar sem pista",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Descobrir!",
        feedbackErro:
          "Inferência = DESCOBRIR nas entrelinhas usando as pistas do texto.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Continue investigando.",
    perguntas: [
      {
        pergunta:
          "'A vovó apagou as velinhas do bolo enquanto todos cantavam.' O que estava acontecendo?",
        opcoes: [
          "Uma festa de ANIVERSÁRIO",
          "Um funeral",
          "Um jogo de futebol",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Aniversário!",
        feedbackErro:
          "Bolo com velinhas + todos cantando = FESTA DE ANIVERSÁRIO.",
      },
      {
        pergunta: "Pra fazer INFERÊNCIA, a gente precisa…",
        opcoes: [
          "Juntar PISTA do texto + o que sabe da vida",
          "Só olhar figuras",
          "Copiar o texto inteiro",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Pista do texto + o que você sabe do mundo = inferência.",
        feedbackErro:
          "É preciso JUNTAR as pistas do texto com o que a gente já sabe da vida.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Como o detetive faz uma inferência? Coloque em ordem.",
    bloco: {
      instrucao: "Do começo (ler) até o fim (descobrir).",
      itens: [
        { id: "s1", texto: "Ler o texto com atenção.", imagemUrl: brilha },
        { id: "s2", texto: "Achar as PISTAS do texto.", imagemUrl: binoculo },
        { id: "s3", texto: "Pensar: 'o que eu já sei disso?'", imagemUrl: nuvem },
        { id: "s4", texto: "Juntar tudo e DESCOBRIR a resposta.", imagemUrl: chuva },
      ],
      ordemCerta: ["s1", "s2", "s3", "s4"],
      feedbackAcerto: "🎉 Isso é fazer INFERÊNCIA como um bom detetive.",
      feedbackErro:
        "Primeiro LER, depois ACHAR pistas, depois LEMBRAR o que sabe, e enfim DESCOBRIR.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Você lê sozinho. Faça inferência!",
    leitura: {
      titulo: "O quarto do Théo",
      imagemUrl: mochila,
      destacar: ["brinquedos", "chão", "cobertor no chão", "cansada"],
      paragrafos: [
        "A mãe entrou no quarto do Théo.",
        "Havia BRINQUEDOS espalhados no chão.",
        "O cobertor estava jogado no CHÃO.",
        "Ela suspirou, cansada.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como o quarto do Théo estava?",
        opcoes: ["Muito ARRUMADO", "BAGUNÇADO", "Vazio"],
        correta: 1,
        feedbackAcerto:
          "🎉 Bagunçado! Brinquedos espalhados + cobertor no chão = BAGUNÇA.",
        feedbackErro:
          "Brinquedos espalhados e cobertor no chão são pistas de BAGUNÇA.",
        ondeEstaNoTexto: "BRINQUEDOS espalhados... cobertor... no CHÃO",
      },
      {
        pergunta: "Por que a mãe SUSPIROU?",
        opcoes: [
          "Porque estava feliz",
          "Porque estava CANSADA da bagunça",
          "Porque ganhou um presente",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Cansada da bagunça!",
        feedbackErro:
          "O próprio texto diz 'cansada'. Somado à bagunça, ela suspirou por causa disso.",
        ondeEstaNoTexto: "Ela suspirou, cansada.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🕵️ Detetive das Entrelinhas",
    instrucao:
      "Leia o pedacinho e MARQUE a melhor conclusão (a inferência certa).",
    jogo: {
      tipo: "selecionarItens",
      titulo: "🕵️ Detetive das Entrelinhas",
      bloco: {
        instrucao:
          "Texto: 'Diego colocou o pijama, escovou os dentes, apagou a luz e deitou.'",
        pergunta: "Qual é a melhor CONCLUSÃO?",
        opcoes: [
          { id: "o1", texto: "Diego vai DORMIR.", correto: true },
          { id: "o2", texto: "Diego vai à escola agora.", correto: false },
          { id: "o3", texto: "Diego vai comer bolo.", correto: false },
          { id: "o4", texto: "Diego vai jogar bola.", correto: false },
        ],
        feedbackAcerto:
          "🎉 Detetive! Pijama + escovar dentes + apagar luz + deitar = vai DORMIR.",
        feedbackErro:
          "Todas essas AÇÕES juntas mostram uma rotina de DORMIR. As outras opções não combinam.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "ENTRELINHAS = coisas escondidas que o texto não disse direto.",
      "INFERÊNCIA = descobrir usando PISTAS do texto + o que eu SEI.",
      "Sempre justifique com uma PISTA do texto.",
    ],
    miniDesafio: {
      pergunta:
        "'Todos os pratos estavam vazios e as barrigas estufadas.' O que aconteceu?",
      opcoes: [
        "Ninguém comeu",
        "Todo mundo COMEU muito",
        "Estavam com fome ainda",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Comeram muito!",
      feedbackErro:
        "Pratos vazios + barrigas estufadas = todo mundo COMEU muito.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "1/5 — 'Ana olhou pro relógio e correu pra pegar o ônibus.' Ela estava…",
        opcoes: ["Adiantada", "ATRASADA", "Descansando"],
        correta: 1,
        feedbackAcerto: "🎉 Atrasada!",
        feedbackErro:
          "Olhou o relógio e CORREU. Isso é pista de que estava ATRASADA.",
      },
      {
        pergunta:
          "2/5 — 'O céu ficou escuro, ventou forte e as folhas voaram.' O que provavelmente vai acontecer?",
        opcoes: ["Vai chover", "Vai fazer muito sol", "Vai nevar quente"],
        correta: 0,
        feedbackAcerto: "🎉 Vai chover!",
        feedbackErro:
          "Céu escuro + vento forte + folhas voando = provavelmente vai CHOVER.",
      },
      {
        pergunta:
          "3/5 — 'O gato do vizinho comeu o peixe da tigela e sumiu pela janela.' Quem comeu o peixe?",
        opcoes: ["O vizinho", "O GATO", "Ninguém"],
        correta: 1,
        feedbackAcerto: "🎉 O gato — o texto disse direto.",
        feedbackErro:
          "Essa não é entrelinha — o texto disse: 'O GATO comeu o peixe'.",
      },
      {
        pergunta:
          "4/5 — 'Havia um bolo, velinhas e presentes na mesa.' Provavelmente é…",
        opcoes: [
          "Uma festa de ANIVERSÁRIO",
          "Uma reunião de trabalho",
          "Um jogo de futebol",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Aniversário!",
        feedbackErro:
          "Bolo + velinhas + presentes = FESTA DE ANIVERSÁRIO.",
      },
      {
        pergunta: "5/5 — Pra fazer INFERÊNCIA, sempre lembre de…",
        opcoes: [
          "Adivinhar sem pista",
          "Juntar PISTA do texto + o que eu SEI",
          "Ler só a última linha",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Pista + o que eu sei!",
        feedbackErro:
          "Inferência = PISTA do texto + o que eu já SEI da vida.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Descobrindo nas entrelinhas",
    materiais: ["Um livro ou notícia curta"],
    passos: [
      "1) Leiam juntos um texto curto.",
      "2) Um adulto faz UMA pergunta cuja resposta NÃO está escrita direto.",
      "3) A criança responde e mostra a PISTA do texto que usou.",
      "4) Conversem: o que 'sabíamos da vida' que ajudou?",
    ],
    registro: "📸 Foto da pergunta + resposta escrita pela criança.",
  },

  recompensa: { xp: 140, moedas: 90 },
};

void bolo;
void festa;
