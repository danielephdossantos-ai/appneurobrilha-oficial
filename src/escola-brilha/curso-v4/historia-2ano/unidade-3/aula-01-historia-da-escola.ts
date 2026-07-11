import type { AulaPortuguesV4 } from "../../types";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import patio from "@/assets/neuro-treino/objetos/patio-escola.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import livros from "@/assets/neuro-treino/objetos/livros.png";
import tablet from "@/assets/neuro-treino/objetos/tablet.png";
import tinta from "@/assets/neuro-treino/objetos/tinta.png";
import cameraAntiga from "@/assets/neuro-treino/objetos/camera-antiga.png";
import bicicletaAntiga from "@/assets/neuro-treino/objetos/bicicleta-antiga.png";
import bicicletaModerna from "@/assets/neuro-treino/objetos/bicicleta-moderna.png";
import criancas from "@/assets/neuro-treino/objetos/criancas-grupo.png";
import crianca from "@/assets/neuro-treino/objetos/crianca-andando.png";
import relogio from "@/assets/neuro-treino/objetos/relogio-magico.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import bolo from "@/assets/neuro-treino/objetos/bolo.png";

/**
 * História · 2º Ano · Unidade 3 · Aula 01
 * "A História da Minha Escola" — passado × presente da escola.
 * Recupera a 3ª engrenagem (Cobre) e monta a Sala 3 do Museu.
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-historia-da-escola",
  titulo: "A História da Minha Escola",
  iconeTrilha: "🏫",
  bncc: ["EF02HI05", "EF02HI06"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "A escola antiga do vovô",
    historia:
      "Brilha descobriu uma foto em PRETO E BRANCO da escola de muitos anos atrás. As crianças usavam roupas totalmente diferentes, e as carteiras eram de madeira pesada GRUDADAS no chão! Vamos investigar a Sala 3 do Museu e recuperar a Engrenagem de Cobre?",
    imagemUrl: escola,
  },

  momento02_previsao: {
    instrucao: "Aurora deixou o cartaz da Sala 3. Leia e imagine.",
    bloco: {
      titulo: "Missão do Museu da Escola",
      capaImagemUrl: patio,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO 3",
          "",
          "Compare a escola",
          "de ANTES com a de HOJE.",
          "O que mudou?",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: cameraAntiga, nome: "Foto antiga" },
        { imagemUrl: escola, nome: "Escola" },
        { imagemUrl: tablet, nome: "Tablet" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        { texto: "Sobre as MUDANÇAS na escola ao longo do tempo.", imagemUrl: escola },
        { texto: "Sobre estrelas cadentes.", imagemUrl: estrela },
        { texto: "Sobre receitas de bolo.", imagemUrl: bolo },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Vamos comparar escola ANTES × HOJE.",
      feedbackErro: "As pistas mostram foto antiga + escola + tablet. É sobre a escola MUDANDO!",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras da Sala 3 do Museu.",
    cards: [
      {
        palavra: "antigamente",
        explicacao: "Há muitos anos, no passado. 'Antigamente não tinha celular.'",
        exemplo: "ANTIGAMENTE, a lousa era de pedra preta.",
        imagemUrl: cameraAntiga,
      },
      {
        palavra: "atual",
        explicacao: "Do tempo de agora, do hoje.",
        exemplo: "Na escola ATUAL, tem lousa branca e tablet.",
        imagemUrl: tablet,
      },
      {
        palavra: "convivência",
        explicacao: "Viver junto com respeito — colegas, professores e funcionários.",
        exemplo: "Na escola aprendemos a boa CONVIVÊNCIA.",
        imagemUrl: criancas,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Aurora vai ler. Preste atenção nas palavras em amarelo.",
    leitura: {
      titulo: "A escola muda com o tempo",
      imagemUrl: patio,
      legendaImagem: "O pátio da escola de hoje.",
      destacar: ["antigamente", "atual", "convivência", "lousa", "tablet"],
      paragrafos: [
        "Antigamente, as carteiras eram de madeira pesada e grudadas no chão. A lousa era de PEDRA preta, e os alunos escreviam com giz.",
        "Havia regras muito severas. Existiam escolas separadas: uma pros meninos e outra pras meninas.",
        "Hoje a escola atual é um espaço misto, com respeito e boa convivência. A tecnologia entrou: lousa branca, computador e às vezes tablet ajudam o aprendizado.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão no texto.",
    perguntas: [
      {
        pergunta: "Como eram as carteiras ANTIGAMENTE?",
        opcoes: [
          "De plástico e coloridas",
          "De madeira pesada, grudadas no chão",
          "De vidro",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Madeira pesada e grudadas.",
        feedbackErro: "Primeiro parágrafo: 'madeira pesada e grudadas no chão'.",
        ondeEstaNoTexto: "…carteiras eram de madeira pesada e grudadas no chão.",
      },
      {
        pergunta: "Como as crianças escreviam antigamente?",
        opcoes: ["Com giz na lousa de pedra", "Com tablet", "Com caneta laser"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! GIZ na lousa de PEDRA.",
        feedbackErro: "Primeiro parágrafo — logo depois de 'PEDRA preta'.",
        ondeEstaNoTexto: "…os alunos escreviam com giz.",
      },
      {
        pergunta: "Como é a escola ATUAL, segundo o texto?",
        opcoes: [
          "Só de meninos",
          "Espaço misto, com respeito e boa convivência",
          "Sem professores",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Misto, com respeito e boa convivência.",
        feedbackErro: "Terceiro parágrafo — logo depois de 'atual'.",
        ondeEstaNoTexto: "…espaço misto, com respeito e boa convivência.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Cada objeto é de um TEMPO. Escolha certo.",
    perguntas: [
      {
        pergunta: "Uma LOUSA DE PEDRA preta com giz é de qual tempo?",
        opcoes: ["Antigamente", "Escola atual"],
        correta: 0,
        feedbackAcerto: "🎉 Antigamente!",
        feedbackErro: "Lousa de pedra + giz = ANTIGAMENTE.",
      },
      {
        pergunta: "Uma TELA DIGITAL / lousa branca é de qual tempo?",
        opcoes: ["Antigamente", "Escola atual"],
        correta: 1,
        feedbackAcerto: "🎉 Escola atual!",
        feedbackErro: "Tela digital = ATUAL.",
      },
      {
        pergunta: "Uma CANETA DE PENA com vidro de tinta é de qual tempo?",
        opcoes: ["Antigamente", "Escola atual"],
        correta: 0,
        feedbackAcerto: "🎉 Antigamente!",
        feedbackErro: "Pena e tinta líquida = ANTIGAMENTE.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem: do mais ANTIGO pro mais NOVO.",
    bloco: {
      instrucao: "Antigo → Meio → Novo.",
      itens: [
        { id: "s1", texto: "Caneta de pena com vidro de tinta", imagemUrl: tinta },
        { id: "s2", texto: "Caderno com caneta esferográfica", imagemUrl: livro },
        { id: "s3", texto: "Tablet com livros digitais", imagemUrl: tablet },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 Pena → caderno → tablet. Ordem certa!",
      feedbackErro: "Pena é o mais antigo. Tablet é o mais novo.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e responda.",
    leitura: {
      titulo: "A escola de hoje",
      imagemUrl: criancas,
      destacar: ["respeito", "diversidade", "convivência", "profissionais"],
      paragrafos: [
        "A escola atual é feita de convivência: meninas e meninos aprendem juntos, com respeito e diversidade.",
        "Muitos profissionais fazem a escola funcionar: professores, diretor, inspetor, equipe da limpeza e da cozinha. Todos são importantes.",
      ],
    },
    perguntas: [
      {
        pergunta: "Como aprendem meninas e meninos na escola atual?",
        opcoes: ["Em salas separadas", "Juntos, com respeito", "Só em casa"],
        correta: 1,
        feedbackAcerto: "🎉 Juntos, com respeito!",
        feedbackErro: "Primeiro parágrafo: 'meninas e meninos aprendem JUNTOS'.",
        ondeEstaNoTexto: "…meninas e meninos aprendem juntos, com respeito e diversidade.",
      },
      {
        pergunta: "Quem faz a escola FUNCIONAR?",
        opcoes: [
          "Só o professor",
          "Professores, diretor, inspetor, limpeza e cozinha",
          "Só os alunos",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Muitos profissionais juntos!",
        feedbackErro: "Segundo parágrafo lista todos os profissionais.",
        ondeEstaNoTexto: "…professores, diretor, inspetor, equipe da limpeza e da cozinha.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🕵️ Inspetor do Tempo",
    instrucao:
      "Uma cena de escola do ano de 1930 apareceu com ERROS históricos. Escolha o objeto que NÃO existia naquela época!",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Inspetor do Tempo",
      bloco: {
        instrucao: "Toque no objeto MODERNO que não existia em 1930.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Sala de aula de 1930",
              emojiLugar: "🏫",
              emojiMorador: "🧒",
              pista: "Qual desses objetos NÃO existia em 1930?",
            },
            opcoes: [
              { id: "tablet", nome: "Tablet moderno", imagemUrl: tablet },
              { id: "tinta", nome: "Vidro de tinta", imagemUrl: tinta },
              { id: "livro", nome: "Caderno", imagemUrl: livro },
            ],
            correta: "tablet",
            feedbackAcerto: "🎉 Tablet é MODERNO! Não existia em 1930.",
            feedbackErro: "Tinta e caderno já existiam. É o TABLET!",
          },
          {
            id: "r2",
            cenario: {
              nome: "Recreio de 1930",
              emojiLugar: "🏫",
              emojiMorador: "👧",
              pista: "Qual desses é uma bicicleta MODERNA?",
            },
            opcoes: [
              { id: "bikeM", nome: "Bicicleta moderna", imagemUrl: bicicletaModerna },
              { id: "bikeA", nome: "Bicicleta antiga", imagemUrl: bicicletaAntiga },
              { id: "livros", nome: "Pilha de livros", imagemUrl: livros },
            ],
            correta: "bikeM",
            feedbackAcerto: "🎉 A moderna! Em 1930 era a bicicleta antiga.",
            feedbackErro: "É a BICICLETA MODERNA — a antiga é do passado.",
          },
          {
            id: "r3",
            cenario: {
              nome: "Sala de aula de 1930",
              emojiLugar: "🏫",
              emojiMorador: "🧑‍🏫",
              pista: "A professora está com um objeto MODERNO na mão. Qual?",
            },
            opcoes: [
              { id: "tablet", nome: "Tablet", imagemUrl: tablet },
              { id: "livro", nome: "Livro de papel", imagemUrl: livro },
              { id: "tinta", nome: "Vidro de tinta", imagemUrl: tinta },
            ],
            correta: "tablet",
            feedbackAcerto: "🎉 TABLET! Coisa da escola atual.",
            feedbackErro: "É o TABLET — livro e tinta já existiam.",
          },
        ],
        feedbackFinal:
          "Você é um Inspetor do Tempo! Engrenagem de Cobre no bolso.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Antigamente: carteira pesada de madeira, lousa de pedra, giz e tinta.",
      "Escola atual: lousa branca, caderno, e às vezes tablet e computador.",
      "Antigamente havia escolas SEPARADAS pra meninos e meninas. Hoje aprendemos JUNTOS.",
      "A escola tem MUITOS profissionais: professor, diretor, inspetor, limpeza, cozinha.",
      "Respeitar regras e pessoas é aprender a viver em SOCIEDADE.",
    ],
    miniDesafio: {
      pergunta: "Uma mudança REAL na escola ao longo do tempo é…",
      opcoes: [
        "As crianças estudam sozinhas agora",
        "As salas ganharam mais tecnologia e materiais mais leves",
        "Não existem mais professores",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Mais tecnologia + materiais leves.",
      feedbackErro: "A mudança real é: mais TECNOLOGIA e materiais mais LEVES.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Como era a lousa antigamente?",
        opcoes: ["Digital", "De pedra preta, com giz", "De vidro"],
        correta: 1,
        feedbackAcerto: "🎉 De pedra, com giz!",
        feedbackErro: "PEDRA PRETA com GIZ.",
      },
      {
        pergunta: "2/5 — Na escola atual, meninos e meninas estudam…",
        opcoes: ["Em salas separadas", "Juntos, com respeito", "Só em casa"],
        correta: 1,
        feedbackAcerto: "🎉 Juntos!",
        feedbackErro: "JUNTOS, com respeito.",
      },
      {
        pergunta: "3/5 — Quem NÃO faz parte dos profissionais da escola?",
        opcoes: ["Professor", "Diretor", "Astronauta"],
        correta: 2,
        feedbackAcerto: "🎉 Astronauta trabalha no espaço, não na escola.",
        feedbackErro: "Professor e diretor SIM. Astronauta NÃO.",
      },
      {
        pergunta: "4/5 — Um objeto MODERNO na escola de hoje é…",
        opcoes: ["Caneta de pena", "Tablet ou lousa digital", "Lousa de pedra"],
        correta: 1,
        feedbackAcerto: "🎉 Tablet / lousa digital!",
        feedbackErro: "MODERNO = tablet / lousa digital.",
      },
      {
        pergunta: "5/5 — Uma mudança REAL nas escolas ao longo do tempo é…",
        opcoes: [
          "Ganharam mais tecnologia e materiais leves",
          "Perderam os professores",
          "Ficaram sem quadro",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Engrenagem de Cobre conquistada! 🥉",
        feedbackErro: "Mais tecnologia + materiais leves = mudança REAL.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🕵️ Detetives Escolares",
    materiais: ["Um adulto da família (pai, mãe, avô, avó)"],
    passos: [
      "1) Pergunte a um adulto: como era a escola dele na infância?",
      "2) Havia uniforme obrigatório? Qual?",
      "3) O que acontecia se alguém conversasse na aula?",
      "4) Compare com a sua escola de hoje — o que MUDOU?",
    ],
    registro:
      "📸 Uma foto do adulto ou um áudio contando uma regra antiga engraçada.",
  },

  recompensa: {
    xp: 300,
    moedas: 150,
    medalha: "Engrenagem de Cobre",
  },
};
