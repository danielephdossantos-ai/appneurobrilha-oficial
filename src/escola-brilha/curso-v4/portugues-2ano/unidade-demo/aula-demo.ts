import type { AulaPortuguesV4 } from "../../types";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import chave from "@/assets/neuro-treino/objetos/bau.png"; // provisório (bau) como "objeto misterioso"
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import casa from "@/assets/neuro-treino/objetos/casa.png";
import passaro from "@/assets/neuro-treino/objetos/passaro.png";
import menina from "@/assets/neuro-treino/objetos/menina.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * DEMO — usada só pra validar visualmente os 5 blocos novos
 * (Leitura, Previsão, Vocabulário, Ordenar, QuizTexto).
 * Depois de aprovada, apagamos essa aula e escrevemos a Unidade 1 de
 * verdade seguindo o mesmo formato AulaPortuguesV4.
 */
export const aulaDemo: AulaPortuguesV4 = {
  slug: "pt-demo-01-chave-azul",
  titulo: "DEMO — A Chave Azul",
  iconeTrilha: "📖",
  bncc: ["EF02LP01", "EF02LP03"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A Biblioteca Encantada acordou!",
    historia:
      "Brilha entrou numa biblioteca antiga onde os livros estavam adormecidos. A Bibliotecária Aurora disse: 'Pra despertar o primeiro livro, você precisa LER a história dele. Vem comigo?'",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Antes de ler, observe a CAPA e as PISTAS. Sobre o que essa história vai falar?",
    bloco: {
      titulo: "O Mistério da Chave Azul",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: chave, nome: "Uma chave" },
        { imagemUrl: arvore, nome: "Uma árvore" },
        { imagemUrl: casa, nome: "Uma casa" },
        { imagemUrl: passaro, nome: "Um passarinho" },
      ],
      pergunta: "Sobre o que essa história vai falar?",
      hipoteses: [
        {
          texto: "Alguém encontra uma chave e vai descobrir de quem ela é.",
          imagemUrl: chave,
        },
        { texto: "Sobre um passarinho que aprende a voar.", imagemUrl: passaro },
        { texto: "Sobre uma casa que virou um bolo.", imagemUrl: casa },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! A capa mostra chave, casa e árvore — quem lê logo imagina alguém procurando o dono da chave.",
      feedbackErro:
        "Olha de novo a capa: o objeto grande é uma CHAVE. A história provavelmente é sobre alguém que a encontrou.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de ler, conheça 2 palavras importantes.",
    cards: [
      {
        palavra: "dono",
        explicacao: "É a pessoa a quem uma coisa PERTENCE.",
        exemplo: "O dono do cachorro passeia com ele todo dia.",
        imagemUrl: menina,
      },
      {
        palavra: "misterioso",
        explicacao: "Algo que a gente NÃO SABE ainda o que é.",
        exemplo: "Um barulho misterioso vinha do porão.",
        imagemUrl: chave,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Agora leia com atenção. Se quiser, aperte 🔊 pra ouvir junto.",
    leitura: {
      titulo: "A Chave Azul",
      imagemUrl: menina,
      legendaImagem: "Lara",
      destacar: ["chave", "dono", "misterioso"],
      paragrafos: [
        "Lara estava voltando da escola quando encontrou uma pequena chave azul perto de uma árvore.",
        "Ela olhou para todos os lados, mas não viu ninguém. A chave era brilhante e um pouco misteriosa.",
        "Lara decidiu descobrir quem era o dono da chave. Foi bater na casa da vizinha para perguntar.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Vamos ver se você entendeu a história?",
    perguntas: [
      {
        pergunta: "Quem encontrou a chave?",
        opcoes: ["A vizinha", "Lara", "Um passarinho"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! LARA encontrou a chave voltando da escola.",
        feedbackErro: "Volte no primeiro parágrafo: quem estava voltando da escola?",
        ondeEstaNoTexto: "Lara estava voltando da escola quando encontrou uma pequena chave azul…",
      },
      {
        pergunta: "Onde a chave estava?",
        opcoes: ["Dentro de casa", "Perto de uma árvore", "Em cima da mesa"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Perto de uma ÁRVORE.",
        feedbackErro: "Procure no primeiro parágrafo o lugar onde a chave estava.",
        ondeEstaNoTexto: "…uma pequena chave azul perto de uma árvore.",
      },
      {
        pergunta: "O que Lara decidiu fazer?",
        opcoes: [
          "Guardar a chave sem contar",
          "Descobrir quem era o dono",
          "Jogar a chave fora",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Lara quis DESCOBRIR o dono.",
        feedbackErro: "No último parágrafo aparece a decisão dela.",
        ondeEstaNoTexto: "Lara decidiu descobrir quem era o dono da chave.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Personagens e lugar da história.",
    perguntas: [
      {
        pergunta: "Qual é o personagem principal?",
        opcoes: ["Aurora", "Lara", "O passarinho"],
        correta: 1,
        feedbackAcerto: "🎉 LARA é quem faz as ações — é a principal.",
        feedbackErro: "Personagem principal é quem faz as coisas na história. Quem foi?",
      },
      {
        pergunta: "Onde a história começa?",
        opcoes: ["Na escola", "Na rua, perto de uma árvore", "Dentro de um livro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ela estava na rua, VOLTANDO da escola.",
        feedbackErro: "Lara estava voltando da escola — então estava na RUA.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As páginas embaralharam! Coloque em ordem o que aconteceu.",
    bloco: {
      instrucao: "Ordem certa: começo → meio → fim.",
      itens: [
        { id: "p1", texto: "Lara voltava da escola.", imagemUrl: menina },
        { id: "p2", texto: "Lara viu uma chave azul perto de uma árvore.", imagemUrl: chave },
        { id: "p3", texto: "Lara decidiu procurar o dono da chave.", imagemUrl: casa },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Começo, meio e fim na ordem certa.",
      feedbackErro:
        "Pense: o que aconteceu PRIMEIRO? (voltar da escola). Depois? (achar a chave). Por último? (procurar o dono).",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda as duas perguntas.",
    leitura: {
      titulo: "A vizinha",
      imagemUrl: casa,
      paragrafos: [
        "Dona Rita, a vizinha, abriu a porta com um sorriso.",
        "'Que chave linda! Não é minha, mas conheço quem pode saber. Vem comigo!'",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem apareceu nessa parte?",
        opcoes: ["Dona Rita", "Um passarinho", "Aurora"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A vizinha se chama DONA RITA.",
        feedbackErro: "A primeira frase diz o nome da vizinha.",
        ondeEstaNoTexto: "Dona Rita, a vizinha, abriu a porta…",
      },
      {
        pergunta: "O que Dona Rita disse que ia fazer?",
        opcoes: [
          "Guardar a chave pra ela",
          "Levar Lara pra falar com alguém que pode saber",
          "Chamar a polícia",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Ela chamou Lara pra ir com ela.",
        feedbackErro: "Na fala dela: 'conheço quem pode saber. Vem comigo!'",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Antes de ler, observe TÍTULO e CAPA — dá pra IMAGINAR a história.",
      "Personagens = quem FAZ as coisas.",
      "Cenário = ONDE acontece.",
      "Toda história tem começo, meio e FIM.",
    ],
    miniDesafio: {
      pergunta: "Quem é o personagem principal da história da chave azul?",
      opcoes: ["Dona Rita", "Lara", "Aurora"],
      correta: 1,
      feedbackAcerto: "🎉 LARA é a principal.",
      feedbackErro: "A principal faz as ações — foi LARA quem achou a chave.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Antes de ler um livro, o que ajuda a imaginar a história?",
        opcoes: ["A cor da capa só", "O título e as imagens da capa", "Nada"],
        correta: 1,
        feedbackAcerto: "🎉 TÍTULO + IMAGENS.",
        feedbackErro: "Bons leitores olham TÍTULO e IMAGENS.",
      },
      {
        pergunta: "2/5 — Onde Lara achou a chave?",
        opcoes: ["Na escola", "Perto de uma árvore", "Em casa"],
        correta: 1,
        feedbackAcerto: "🎉 Perto de uma ÁRVORE.",
        feedbackErro: "No texto: 'perto de uma árvore'.",
      },
      {
        pergunta: "3/5 — O que quer dizer 'dono'?",
        opcoes: [
          "Pessoa que empresta as coisas",
          "Pessoa a quem algo pertence",
          "Um brinquedo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Dono = a quem a coisa pertence.",
        feedbackErro: "Dono é a quem uma coisa PERTENCE.",
      },
      {
        pergunta: "4/5 — Qual foi a DECISÃO de Lara?",
        opcoes: [
          "Ficar com a chave",
          "Procurar o dono",
          "Nada",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Procurar o dono.",
        feedbackErro: "Lara decidiu descobrir o DONO.",
      },
      {
        pergunta: "5/5 — Quem ajudou Lara?",
        opcoes: ["Dona Rita", "Aurora", "O passarinho"],
        correta: 0,
        feedbackAcerto: "🎉 Dona Rita! 🏆",
        feedbackErro: "A vizinha que abriu a porta se chama Dona Rita.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📖 Lendo em Casa",
    materiais: ["Um livro qualquer da casa"],
    passos: [
      "1) Escolham um livro juntos.",
      "2) Olhem a CAPA e o TÍTULO. Imaginem sobre o que é.",
      "3) Leiam por 10 minutos.",
      "4) Conversem: quem era o personagem? Onde foi? Qual foi a parte preferida?",
    ],
    registro: "🗣️ Frase escrita ou áudio: 'A parte que eu mais gostei foi…'.",
  },

  recompensa: {
    xp: 300,
    moedas: 200,
    medalha: "Leitor(a) Iniciante",
  },
};
