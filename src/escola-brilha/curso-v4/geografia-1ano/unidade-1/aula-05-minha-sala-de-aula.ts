import type { AulaGeografiaV4 } from "../../types";
import plantaSala from "@/assets/geografia-1ano/planta-sala.svg";
import salaAula from "@/assets/neuro-treino/objetos/sala-aula.png";
import professora from "@/assets/neuro-treino/objetos/professora.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import cadeira from "@/assets/neuro-treino/objetos/cadeira.png";
import mochila from "@/assets/neuro-treino/objetos/mochila.png";
import livros from "@/assets/neuro-treino/objetos/livros.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";

/**
 * Aula 5 — Minha Sala de Aula
 * Fecha a Unidade 1. Planta clicável da sala + orientação espacial
 * ("meu lugar é atrás da mesa da profe"), regras de convivência.
 */
export const aula05: AulaGeografiaV4 = {
  slug: "aula-05-minha-sala-de-aula",
  titulo: "Minha Sala de Aula",
  iconeTrilha: "📚",
  bncc: ["EF01GE03", "EF01GE08"],
  duracaoMin: 18,

  momento01_missao: {
    texto: "Descubra o SEU lugar dentro da sala!",
    imagemUrl: salaAula,
  },

  momento02_narrativa: {
    titulo: "Brilha entra na sala",
    historia:
      "Última missão da Unidade 1! Brilha entra na sala de aula e vê: lousa NA FRENTE, mesa da professora, carteiras dos alunos, porta, janelas e um armário atrás. Cada coisa está num LUGAR — e você também tem o SEU lugar.",
    imagemUrl: brilha,
  },

  momento03_exploracaoVisual: {
    instrucao: "Toque em cada elemento da sala pra descobrir a função:",
    mapa: {
      titulo: "Planta da Sala de Aula",
      imagemUrl: plantaSala,
      pontos: [
        { id: "lousa", x: 50, y: 20, icone: "📝", nome: "Lousa",
          descricao: "Fica NA FRENTE. A professora escreve nela pra todos verem." },
        { id: "mesaProf", x: 50, y: 38, icone: "👩‍🏫", nome: "Mesa da professora",
          descricao: "Fica na FRENTE, perto da lousa. Daqui a profe fala com toda a turma." },
        { id: "carteiras", x: 50, y: 65, icone: "🪑", nome: "Carteiras dos alunos",
          descricao: "Cada aluno tem uma. Ficam em FILEIRAS de frente pra lousa." },
        { id: "porta", x: 10, y: 55, icone: "🚪", nome: "Porta",
          descricao: "Fica na LATERAL. É por onde a gente entra e sai." },
        { id: "janela", x: 90, y: 55, icone: "🪟", nome: "Janelas",
          descricao: "Deixam entrar LUZ e ar. Ficam na parede lateral." },
        { id: "armario", x: 25, y: 85, icone: "🗄", nome: "Armário",
          descricao: "Guarda materiais da turma. Fica no FUNDO." },
      ],
    },
  },

  momento04_observacao: {
    perguntaGuia: "Por que a lousa fica NA FRENTE e as carteiras VIRADAS pra ela?",
    pistas: [
      "Se a lousa fosse atrás, ninguém veria.",
      "Se as carteiras virassem pra parede, os alunos não veriam a professora.",
      "A sala é organizada pra TODOS enxergarem o que a profe está ensinando.",
    ],
    revelacao:
      "A sala tem uma ORGANIZAÇÃO PENSADA: lousa e professora na frente, alunos virados pra ela. Isso ajuda a aprender melhor.",
  },

  momento05_ensinoExplicito: {
    titulo: "Regras de convivência na sala",
    etapas: [
      { texto: "1) LEVANTAR A MÃO antes de falar.", imagemUrl: professora },
      { texto: "2) CUIDAR do material — seu e da escola.", imagemUrl: livros },
      { texto: "3) RESPEITAR o colega — cada um no seu lugar." },
      { texto: "4) MANTER a sala limpa: lixo no lixo, cadeira no lugar.", imagemUrl: cadeira },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha vai me mostrar como ele acha o lugar dele:",
    passos: [
      "— Entrei pela PORTA (do lado esquerdo).",
      "— Passei pela mesa da profe e fui pra fileira do meio.",
      "— Minha carteira é a 2ª da fileira. Sentei e coloquei a mochila no gancho!",
    ],
    visualUrl: mochila,
  },

  momento07_nosFazemos: {
    enunciado: "Vamos juntos: leve o Brilha até a carteira do MEIO (linha 1, coluna 1 do grid).",
    dica: "A carteira do meio é o centro do grid. Suba 1 e ande 1 pra direita.",
    orientacao: {
      instrucao: "Sente o Brilha na carteira do meio.",
      personagemUrl: brilha,
      posicaoInicial: { linha: 2, coluna: 0 },
      alvo: { linha: 1, coluna: 1, imagemUrl: cadeira, nome: "Carteira do meio" },
      feedbackAcerto: "Sentou! Sabia usar as direções pra chegar no lugar certo.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Sozinho: leve o Brilha até a LOUSA (no alto, no meio da sala).",
    orientacao: {
      instrucao: "Vá até a LOUSA.",
      personagemUrl: brilha,
      posicaoInicial: { linha: 2, coluna: 0 },
      alvo: { linha: 0, coluna: 1, imagemUrl: livros, nome: "Lousa" },
      feedbackAcerto: "Perfeito! Você percorreu a sala inteira até a frente.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você quer perguntar uma dúvida pra professora durante a aula.",
    problema: "O que você deve fazer?",
    quiz: {
      pergunta: "Como fazer?",
      opcoes: [
        "Gritar o nome dela",
        "LEVANTAR A MÃO e esperar ela te chamar",
        "Sair da carteira sem avisar",
      ],
      correta: 1,
      feedbackAcerto:
        "Certo! Levantar a mão mostra respeito e organiza a sala. Todo mundo consegue falar sem atropelar o colega.",
      feedbackErro:
        "Lembre da regra 1: LEVANTAR A MÃO antes de falar. Assim a sala funciona bem.",
    },
  },

  momento10_minijogo: {
    titulo: "Cada Coisa no Seu Lugar",
    instrucao: "Arraste cada objeto pra onde ele deve ficar na sala:",
    jogo: {
      tipo: "arrastarParaAlvo",
      bloco: {
        instrucao: "Onde fica cada item?",
        itens: [
          { id: "mochila", texto: "Mochila 🎒", alvoId: "carteira", imagemUrl: mochila },
          { id: "lapis", texto: "Lápis ✏️", alvoId: "estojo", imagemUrl: lapis },
          { id: "livro", texto: "Livro 📗", alvoId: "carteira", imagemUrl: livros },
          { id: "lixo", texto: "Papel amassado 🗑", alvoId: "lixo" },
        ],
        alvos: [
          { id: "carteira", nome: "🪑 Na carteira / gancho" },
          { id: "estojo", nome: "🖊 No estojo" },
          { id: "lixo", nome: "🗑 No lixo" },
        ],
        feedbackAcerto: "Isso! Cada coisa no lugar mantém a sala organizada.",
        feedbackErro: "Lápis vai no estojo, livro/mochila na carteira, lixo no lixo.",
      },
    },
  },

  momento11_quiz: {
    instrucao: "Vamos revisar:",
    perguntas: [
      {
        pergunta: "Onde fica a LOUSA em quase toda sala?",
        opcoes: ["No fundo", "Na frente", "No teto"],
        correta: 1,
        feedbackAcerto: "Isso! Lousa NA FRENTE, pra todos verem.",
        feedbackErro: "A lousa fica NA FRENTE — pra todos verem a professora escrevendo.",
      },
      {
        pergunta: "Qual é UMA regra importante da sala?",
        opcoes: [
          "Pular na carteira",
          "Levantar a mão pra falar",
          "Gritar o nome do amigo",
        ],
        correta: 1,
        feedbackAcerto: "Perfeito! Levantar a mão é respeito com todos.",
        feedbackErro: "Regra número 1: levantar a mão antes de falar.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🪑 A Planta da Minha Sala",
    materiais: ["Papel", "Lápis"],
    passos: [
      "Amanhã, quando chegar na sala, olhe com atenção onde ficam as coisas.",
      "Em casa, desenhe a SUA sala vista de cima: lousa, mesa da profe, carteiras.",
      "Marque com um X onde é o SEU lugar.",
    ],
    registro: "Traga o desenho pra encerrar a Unidade 1 do seu Atlas.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Por que as carteiras ficam VIRADAS pra lousa?",
        opcoes: [
          "Pra todos verem o que a profe escreve",
          "Pra ninguém ver ninguém",
          "Não tem motivo",
        ],
        correta: 0,
        feedbackAcerto: "Isso! A sala é organizada pra aprender melhor.",
        feedbackErro: "As carteiras viram pra lousa pra TODOS enxergarem a profe.",
      },
      {
        pergunta: "Quem é responsável por manter a sala LIMPA?",
        opcoes: ["Só a professora", "Só a faxineira", "TODOS: alunos, profe e funcionários"],
        correta: 2,
        feedbackAcerto: "Certo! Cada aluno cuida do seu espaço e todos ajudam.",
        feedbackErro: "Limpeza é responsabilidade DE TODOS que usam a sala.",
      },
    ],
  },

  momento14_continuacao: {
    texto:
      "🎉 UNIDADE 1 COMPLETA! Você desbloqueou a 1ª grande página do Grande Atlas: MEU LUGAR NO MUNDO. A próxima unidade é 'Explorando os Caminhos'!",
    imagemUrl: brilha,
  },

  recompensa: { xp: 150, moedas: 80, medalha: "🏅 Dono do Meu Lugar" },
};
