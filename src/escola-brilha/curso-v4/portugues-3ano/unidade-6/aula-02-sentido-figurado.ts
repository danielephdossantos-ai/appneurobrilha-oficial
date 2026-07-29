import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as vento } from "@/assets/neuro-treino/objetos/vento.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as chuva } from "@/assets/neuro-treino/objetos/chuva.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";

/**
 * Aula 2 — Sentido Figurado
 * -------------------------------------------------------------
 * O clube descobre que algumas frases não podem ser lidas "ao pé
 * da letra" — o vento não fala de verdade, mas o poeta diz que ele
 * "cochicha". Trabalha comparação (usando "como") e metáfora
 * simples (sem "como"), sempre em contraste com o sentido literal.
 *
 * BNCC: EF35LP28 (efeitos de sentido em textos poéticos),
 * EF03LP24 (sentido figurado / linguagem conotativa).
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-sentido-figurado",
  titulo: "Sentido Figurado",
  iconeTrilha: "🌬️",
  bncc: ["EF35LP28", "EF03LP24"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "O vento que 'cochichou' um segredo",
    historia:
      "Aurora leu em voz alta: 'O vento cochichou um segredo pras folhas.' Um novo detetive franziu a testa: — Mas vento não fala, Aurora! — Boa observação! — ela sorriu. — Isso é uma pista especial: quando um escritor usa palavras que NÃO devem ser lidas ao pé da letra, ele está usando o SENTIDO FIGURADO. Vamos aprender a farejar essas pistas escondidas nas palavras?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Veja a frase abaixo, escrita num cartaz do clube. Antes de descobrir o significado, tente imaginar o que ela quer dizer de verdade.",
    bloco: {
      titulo: "Frase Misteriosa do Clube",
      capaImagemUrl: vento,
      pistas: [
        { imagemUrl: arvore, nome: "Uma árvore" },
        { imagemUrl: vento, nome: "O vento" },
      ],
      recado: {
        rotulo: "Cartaz do dia",
        icone: "📢",
        linhas: ["\"O vento cochichou um segredo pras folhas.\""],
        estilo: "cartaz",
      },
      pergunta: "O que essa frase realmente quer dizer?",
      hipoteses: [
        { texto: "O vento realmente falou palavras, como uma pessoa." },
        { texto: "O vento soprou baixinho nas folhas, fazendo um barulhinho suave, parecido com um cochicho.", imagemUrl: vento },
        { texto: "As folhas contaram um segredo para o vento." },
      ],
      respostaCerta: 1,
      feedbackAcerto:
        "🔍 Isso! O vento não fala de verdade — a frase compara o SOM do vento soprando fraquinho ao som de um cochicho. É sentido figurado!",
      feedbackErro:
        "Pense: vento não tem boca pra falar. A frase está COMPARANDO o barulho suave do vento com um cochicho — não é pra levar ao pé da letra.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas ferramentas de detetive para caçar sentido figurado.",
    cards: [
      {
        palavra: "comparação",
        explicacao: "É quando o texto liga duas coisas usando a palavra 'COMO', mostrando uma semelhança entre elas.",
        exemplo: "'O menino corria como um foguete' — ele não virou foguete, só corria muito rápido.",
        imagemUrl: papel,
      },
      {
        palavra: "metáfora",
        explicacao: "É parecida com a comparação, mas SEM a palavra 'como' — o texto diz que uma coisa É a outra, direto.",
        exemplo: "'Ela é um sol' — a pessoa não virou uma estrela de fogo, só é alegre e ilumina o ambiente.",
        imagemUrl: sol,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o poema prestando atenção nas frases que não podem ser lidas ao pé da letra.",
    leitura: {
      titulo: "O Girassol e o Coração",
      imagemUrl: girassol,
      legendaImagem: "O girassol que 'olha' pro sol",
      destacar: ["olha", "sorriso amarelo", "coração é um jardim"],
      paragrafos: [
        "O girassol olha pro sol o dia inteiro, como se fosse seu melhor amigo.",
        "Ele abre um sorriso amarelo cada manhã, contente de estar vivo.",
        "Minha avó diz que o coração é um jardim: se a gente cuida bem, nascem flores; se esquece, cresce mato.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "Para onde o girassol 'olha' o dia inteiro, segundo o texto?",
        opcoes: ["Para a terra", "Para o sol", "Para outra flor"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! 'O girassol olha pro sol o dia inteiro'.",
        feedbackErro: "Está na primeira frase: 'O girassol olha pro...'",
        ondeEstaNoTexto: "O girassol olha pro sol o dia inteiro,",
      },
      {
        pergunta: "O que a avó diz que o coração é?",
        opcoes: ["Um relógio", "Um jardim", "Uma casa"],
        correta: 1,
        feedbackAcerto: "🔍 Boa! 'O coração é um jardim'.",
        feedbackErro: "Releia a última frase — a avó compara o coração com algo que tem flores e mato.",
        ondeEstaNoTexto: "…o coração é um jardim…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora, o trabalho de detetive: separar o que é SENTIDO LITERAL (ao pé da letra) do que é SENTIDO FIGURADO.",
    perguntas: [
      {
        pergunta: "'O girassol olha pro sol como se fosse seu melhor amigo' é uma...",
        opcoes: ["Comparação, pois usa a palavra 'como'", "Metáfora, pois não tem 'como'", "Frase literal, ao pé da letra"],
        correta: 0,
        feedbackAcerto: "🔍 Exato! A palavra 'como' avisa que é uma COMPARAÇÃO.",
        feedbackErro: "Repare que a frase usa a palavra 'como' — isso é a marca registrada da comparação.",
      },
      {
        pergunta: "'O coração é um jardim' é uma...",
        opcoes: ["Comparação, pois usa 'como'", "Metáfora, pois diz que uma coisa É a outra, sem 'como'", "Uma frase que fala de plantas de verdade"],
        correta: 1,
        feedbackAcerto:
          "🔍 Isso! É metáfora: o texto diz direto que o coração 'é' um jardim, sem usar 'como'. O coração não virou terra e flores de verdade!",
        feedbackErro:
          "Repare: não tem a palavra 'como'. O texto afirma direto 'o coração É um jardim' — isso é metáfora.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para descobrir se uma frase é sentido figurado.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Ler a frase e perguntar: isso pode acontecer de verdade?", imagemUrl: papel },
        { id: "p2", texto: "Se não pode (vento não fala, coração não é jardim de terra), é sentido figurado.", imagemUrl: vento },
        { id: "p3", texto: "Procurar o que a frase quer dizer de verdade, por trás da imagem.", imagemUrl: coracao },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Isso mesmo! Primeiro checamos se é possível, depois identificamos a figura, e por fim buscamos o sentido real.",
      feedbackErro: "Pense: primeiro a gente PERGUNTA se é possível, depois RECONHECE a figura, só então DESCOBRE o sentido verdadeiro.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo texto — leia sozinho e identifique o sentido figurado.",
    leitura: {
      titulo: "A Chuva Chorona",
      imagemUrl: chuva,
      destacar: ["a chuva chorou", "céu ficou triste"],
      paragrafos: [
        "O céu ficou triste a tarde toda e a chuva chorou sem parar.",
        "Quando o sol apareceu de novo, foi como se alguém tivesse ligado uma lâmpada gigante no céu.",
      ],
    },
    perguntas: [
      {
        pergunta: "'A chuva chorou sem parar' quer dizer que...",
        opcoes: [
          "A chuva realmente tinha lágrimas de tristeza",
          "Choveu bastante e sem parar, comparando com choro",
          "Não choveu nada naquele dia",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! É sentido figurado: comparar a chuva caindo com um choro mostra que choveu bastante.",
        feedbackErro: "Chuva não tem sentimentos. A frase usa a imagem do choro para mostrar que choveu MUITO.",
      },
      {
        pergunta: "'Foi como se alguém tivesse ligado uma lâmpada gigante no céu' é uma...",
        opcoes: ["Metáfora, sem 'como'", "Comparação, com a palavra 'como'", "Frase sem nenhuma figura"],
        correta: 1,
        feedbackAcerto: "🔍 Exato! A palavra 'como' aparece na frase — é uma comparação com o sol aparecendo forte.",
        feedbackErro: "Repare: a frase tem a palavra 'como se' — isso indica uma comparação.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "SENTIDO FIGURADO é quando a frase não pode ser lida ao pé da letra.",
      "COMPARAÇÃO usa a palavra 'como' para ligar duas coisas.",
      "METÁFORA diz que uma coisa É a outra, sem usar 'como'.",
      "Sempre podemos checar: 'isso pode acontecer de verdade?' — se não, é figurado.",
    ],
    miniDesafio: {
      pergunta: "'Ela tem um sorriso de sol' é...",
      opcoes: ["Uma comparação, com 'como'", "Uma metáfora, sem 'como'", "Uma frase totalmente literal"],
      correta: 1,
      feedbackAcerto: "🔍 Isso! Não tem a palavra 'como' — é metáfora.",
      feedbackErro: "Repare que não tem 'como' na frase — logo, é metáfora, não comparação.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é sentido figurado?",
        opcoes: [
          "Quando a frase deve ser lida ao pé da letra",
          "Quando a frase não pode ser levada ao pé da letra",
          "Quando a frase está errada",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Sentido figurado foge do literal.",
        feedbackErro: "Sentido figurado é quando a frase NÃO pode ser entendida ao pé da letra.",
      },
      {
        pergunta: "2/5 — Qual frase é uma comparação (usa 'como')?",
        opcoes: ["Ela é uma estrela", "Ela brilha como uma estrela", "Ela apagou a luz"],
        correta: 1,
        feedbackAcerto: "🔍 Correto! A palavra 'como' marca a comparação.",
        feedbackErro: "Procure a frase que tem a palavra 'como' — essa é a comparação.",
      },
      {
        pergunta: "3/5 — 'O tempo voou' é um exemplo de...",
        opcoes: ["Sentido literal", "Sentido figurado", "Não é uma frase válida"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Tempo não tem asas — a frase quer dizer que o tempo passou rápido.",
        feedbackErro: "Tempo não voa de verdade. A frase quer dizer que o tempo passou rápido — é figurado.",
      },
      {
        pergunta: "4/5 — 'O vento cochichou um segredo' quer dizer que...",
        opcoes: [
          "O vento realmente falou uma frase",
          "O vento soprou baixinho, como um sussurro",
          "Não havia vento naquele dia",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! A frase compara o som fraco do vento a um cochicho.",
        feedbackErro: "Vento não fala. A frase usa a imagem do cochicho pra mostrar que o vento soprou baixinho.",
      },
      {
        pergunta: "5/5 — 'Meu avô é uma enciclopédia' é uma...",
        opcoes: ["Comparação, com 'como'", "Metáfora, sem 'como'", "Frase literal"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Sem a palavra 'como', a frase afirma direto — é metáfora. Caso resolvido! 🌟",
        feedbackErro: "Não tem a palavra 'como' — a frase diz direto 'é uma enciclopédia', então é metáfora.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: caça ao sentido figurado",
    materiais: ["Papel", "Lápis"],
    passos: [
      "1) Peçam para um adulto contar 2 frases que ele usa no dia a dia com sentido figurado (ex.: 'estou morrendo de fome', 'isso é mole').",
      "2) Conversem: o que cada frase quer dizer de verdade?",
      "3) Juntos, criem uma comparação nova usando 'como' (ex.: 'ele é rápido como um raio').",
      "4) Depois, transformem essa comparação em metáfora, tirando o 'como'.",
    ],
    registro: "🗣️ Registrem em áudio ou por escrito as frases criadas pela família.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
  },
};
