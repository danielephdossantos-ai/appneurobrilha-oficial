import type { AulaPortuguesV4 } from "../../types";
import { url as coelho } from "@/assets/neuro-treino/objetos/coelho.png.asset.json";
import { url as girassol } from "@/assets/neuro-treino/objetos/girassol.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as cachorro } from "@/assets/neuro-treino/objetos/cachorro.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 4 — Eu Reconto a História
 * -------------------------------------------------------------
 * Missão final da Unidade 5 (Era Uma Vez).
 * A criança pratica o RECONTO: usar começo, meio e fim,
 * personagens, cenário e tempo pra contar uma história com
 * suas próprias palavras, apoiada em imagens em sequência.
 *
 * BNCC: EF01LP26 · EF12LP19 · EF15LP02 · EF15LP03
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-recontar",
  titulo: "Eu Reconto a História",
  iconeTrilha: "🗣️",
  bncc: ["EF01LP26", "EF12LP19", "EF15LP02", "EF15LP03"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha vira contador de histórias",
    historia:
      "Chegou a hora mais especial! Brilha aprendeu começo-meio-fim, personagens, cenário e tempo. Agora é hora de RECONTAR uma história inteira, só olhando as imagens em ordem. Você topa ser o contador de histórias de hoje?",
    imagemUrl: livro,
  },

  momento02_previsao: {
    instrucao: "Olhe o TÍTULO e as PISTAS. Sobre o que essa história pode falar?",
    bloco: {
      titulo: "O Dia em que Bento Plantou um Girassol",
      capaImagemUrl: girassol,
      pistas: [
        { imagemUrl: menino, nome: "Um menino" },
        { imagemUrl: girassol, nome: "Um girassol" },
      ],
      pergunta: "Antes de ler: sobre o que essa história vai falar?",
      hipoteses: [
        { texto: "Um menino que planta e cuida de um girassol.", imagemUrl: girassol },
        { texto: "Um cachorro que aprendeu a cantar.", imagemUrl: cachorro },
        { texto: "Uma casa que virou nave espacial.", imagemUrl: casa },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Muito bem! O título já conta: Bento vai plantar um girassol.",
      feedbackErro:
        "Olhe o título de novo: 'O Dia em que Bento Plantou um Girassol'. Combina com a primeira opção.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de ler, conheça 2 palavras que vão ajudar no reconto.",
    cards: [
      {
        palavra: "reconto",
        explicacao: "É contar de novo uma história com as PRÓPRIAS palavras, na ordem certa.",
        exemplo: "Depois de ler, Ana fez o reconto pra sua mãe.",
        imagemUrl: livro,
      },
      {
        palavra: "regar",
        explicacao: "É colocar ÁGUA numa planta pra ela crescer.",
        exemplo: "Bento regava o girassol todo dia de manhã.",
        imagemUrl: sol,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto com Brilha — pode apertar 🔊 pra ouvir se quiser.",
    leitura: {
      titulo: "O Dia em que Bento Plantou um Girassol",
      imagemUrl: girassol,
      legendaImagem: "Bento e seu girassol",
      destacar: ["plantou", "regava", "girassol"],
      paragrafos: [
        "No começo, Bento plantou uma sementinha de girassol no quintal de casa, numa manhã de sol.",
        "No meio, todo dia ele regava a terra e esperava, mesmo sem ver nada crescer ainda.",
        "No fim, depois de duas semanas, brotou um girassol enorme e amarelo. Bento ficou muito orgulhoso.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão TODAS escritas nele.",
    perguntas: [
      {
        pergunta: "O que Bento plantou no começo da história?",
        opcoes: ["Uma árvore", "Uma sementinha de girassol", "Uma flor já crescida"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Uma SEMENTINHA de girassol.",
        feedbackErro: "A primeira frase diz o que ele plantou.",
        ondeEstaNoTexto: "…Bento plantou uma sementinha de girassol…",
      },
      {
        pergunta: "O que Bento fazia todo dia no meio da história?",
        opcoes: ["Regava a terra", "Cavava mais buracos", "Dormia no quintal"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! Ele REGAVA a terra todo dia.",
        feedbackErro: "Releia o segundo parágrafo: o que ele fazia?",
        ondeEstaNoTexto: "…todo dia ele regava a terra e esperava…",
      },
      {
        pergunta: "O que aconteceu no fim da história?",
        opcoes: ["Nada cresceu", "Brotou um girassol enorme", "A sementinha sumiu"],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! Brotou um girassol enorme e amarelo.",
        feedbackErro: "O último parágrafo conta o que brotou depois de duas semanas.",
        ondeEstaNoTexto: "…brotou um girassol enorme e amarelo.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos revisar personagem, cenário e tempo pra ajudar no reconto.",
    perguntas: [
      {
        pergunta: "Quem é o personagem principal?",
        opcoes: ["O girassol", "Bento", "A terra"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! BENTO é quem planta e cuida — ele é o principal.",
        feedbackErro: "Quem faz as ações do começo ao fim? É Bento.",
      },
      {
        pergunta: "Onde acontece essa história?",
        opcoes: ["No quintal de casa", "Na escola", "No parque"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! No QUINTAL de casa.",
        feedbackErro: "A primeira frase diz onde Bento plantou a semente.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as páginas em ordem: começo → meio → fim.",
    bloco: {
      instrucao: "O que aconteceu primeiro? E depois? E no fim?",
      itens: [
        { id: "p1", texto: "Bento plantou a sementinha no quintal.", imagemUrl: menino },
        { id: "p2", texto: "Ele regava a terra todo dia, esperando.", imagemUrl: sol },
        { id: "p3", texto: "Brotou um girassol enorme e amarelo.", imagemUrl: girassol },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Agora você já sabe a ordem pra recontar a história.",
      feedbackErro: "Pense: primeiro ele PLANTA. Depois ele REGA e espera. Só no fim BROTA o girassol.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho. Depois responda as duas perguntas.",
    leitura: {
      titulo: "O coelhinho e a cenoura escondida",
      imagemUrl: coelho,
      destacar: ["cenoura", "escondida"],
      paragrafos: [
        "No começo, o coelhinho Bino procurava uma cenoura pelo jardim inteiro.",
        "No meio, ele cavou perto da árvore e não achou nada.",
        "No fim, ele encontrou a cenoura escondida atrás de uma pedra, e comeu tudo feliz.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que Bino procurava?",
        opcoes: ["Uma cenoura", "Um osso", "Uma bola"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Uma CENOURA.",
        feedbackErro: "A primeira frase diz o que ele procurava.",
        ondeEstaNoTexto: "…o coelhinho Bino procurava uma cenoura…",
      },
      {
        pergunta: "Onde ele achou a cenoura no fim?",
        opcoes: ["Perto da árvore", "Atrás de uma pedra", "Dentro de casa"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Atrás de uma PEDRA.",
        feedbackErro: "Releia o último parágrafo: onde estava a cenoura?",
        ondeEstaNoTexto: "…encontrou a cenoura escondida atrás de uma pedra…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Reconte a História!",
    instrucao: "Ordene as imagens e depois conte a história em voz alta, do jeitinho seu.",
    jogo: {
      tipo: "ordenarSequencia",
      titulo: "O Coelhinho e a Cenoura Escondida",
      bloco: {
        instrucao: "Toque nas imagens na ordem certa: começo, meio e fim. Depois conte a história pra alguém!",
        itens: [
          { id: "c1", texto: "Bino procurava uma cenoura pelo jardim.", imagemUrl: coelho },
          { id: "c2", texto: "Ele cavou perto da árvore e não achou nada.", imagemUrl: arvore },
          { id: "c3", texto: "Achou a cenoura atrás da pedra e comeu feliz.", imagemUrl: estrela },
        ],
        ordemCerta: ["c1", "c2", "c3"],
        feedbackAcerto: "🎉 Show! Agora conte essa história pra alguém, usando começo, meio e fim!",
        feedbackErro: "Pense: primeiro ele PROCURA, depois CAVA sem achar, só no fim ENCONTRA a cenoura.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "RECONTAR é contar de novo a história, com as próprias palavras, na ordem certa.",
      "Pra recontar bem, usamos: personagem principal, cenário, tempo, começo, meio e fim.",
      "As imagens em sequência ajudam a lembrar a ordem dos acontecimentos.",
    ],
    miniDesafio: {
      pergunta: "Pra fazer um bom reconto, o mais importante é…",
      opcoes: [
        "Decorar o texto palavra por palavra",
        "Contar na ordem certa, com começo, meio e fim",
        "Contar só o fim da história",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Reconto é contar na ORDEM certa, com suas palavras.",
      feedbackErro: "Não precisa decorar — o importante é manter a ORDEM: começo, meio e fim.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é reconto?",
        opcoes: [
          "Ler o texto de novo em voz alta, igualzinho",
          "Contar a história com as próprias palavras, na ordem",
          "Contar só o final da história",
          "Desenhar a capa do livro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Certo!",
        feedbackErro: "Reconto não é ler igualzinho nem contar só o fim: é usar SUAS palavras, na ordem certa.",
      },
      {
        pergunta: "2/5 — O que Bento plantou na história do girassol?",
        opcoes: [
          "Uma árvore grande",
          "Uma sementinha de girassol",
          "Uma sementinha de feijão",
          "Uma flor já crescida",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Uma sementinha de girassol!",
        feedbackErro: "O texto diz: 'plantou uma sementinha de girassol'. Ela ainda ia crescer.",
      },
      {
        pergunta: "3/5 — O que Bento fazia todo dia enquanto esperava?",
        opcoes: ["Regava a terra", "Plantava outra semente", "Olhava sem fazer nada", "Ia pra escola"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ele regava a terra.",
        feedbackErro: "Releia: 'todo dia ele regava a terra e esperava'.",
      },
      {
        pergunta: "4/5 — Onde Bino encontrou a cenoura?",
        opcoes: ["Perto da árvore", "Atrás de uma pedra", "Debaixo da terra", "Dentro de casa"],
        correta: 1,
        feedbackAcerto: "🎉 Atrás da pedra!",
        feedbackErro: "No fim da história: 'encontrou a cenoura escondida atrás de uma pedra'.",
      },
      {
        pergunta: "5/5 — Pra recontar bem uma história, é importante lembrar de…",
        opcoes: [
          "Só o nome do personagem",
          "Personagem, cenário, tempo, começo, meio e fim",
          "Só o começo e o fim",
          "Só a última página",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso mesmo! Você é um verdadeiro Contador de Histórias! 🌟",
        feedbackErro: "Se pular o meio, a história fica sem sentido. Um bom reconto usa TUDO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Seja o contador de histórias da família",
    materiais: ["Um livro ou história favorita da criança"],
    passos: [
      "1) Leiam juntos uma história curta.",
      "2) Peçam pra criança recontar com as PRÓPRIAS palavras, olhando as imagens do livro.",
      "3) Ajudem lembrando: quem? onde? quando? o que aconteceu no começo, meio e fim?",
      "4) Gravem um áudio ou vídeo curtinho do reconto, se quiserem guardar de lembrança.",
    ],
    registro: "🎙️ Um áudio ou vídeo curto da criança recontando a história com suas próprias palavras.",
  },

  // Fase 9 — fluência por releitura (mesmo texto, 3 leituras).
  momento_fluencia: {
    titulo: "Ler de novo, mais solto",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "O SAPO PEGOU UM PANO.",
      "ELE PÔS NA CABEÇA.",
      "A RÃ RIU MUITO.",
    ],
    metaSegundos: 20,
  },

  recompensa: {
    xp: 150,
    moedas: 90,
    medalha: "Contador de Histórias",
  },
};
