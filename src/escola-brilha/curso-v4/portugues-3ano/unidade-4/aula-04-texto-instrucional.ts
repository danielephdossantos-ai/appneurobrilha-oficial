import type { AulaPortuguesV4 } from "../../types";
import { url as bolo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as receita } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as ovo } from "@/assets/neuro-treino/objetos/bolo.png.asset.json";
import { url as leite } from "@/assets/neuro-treino/objetos/mamadeira.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as dado } from "@/assets/neuro-treino/objetos/dado.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as crianca } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";

/**
 * Aula 4 — "O Manual do Clube" (fecha a Unidade 4)
 * -------------------------------------------------------------
 * Missão final: os detetives precisam escrever um texto
 * instrucional (receita ou regra de jogo) claro o bastante pra
 * qualquer pessoa seguir sem errar — a prova final de repórter.
 *
 * Foco pedagógico:
 *  - Texto instrucional: ensina a fazer algo, passo a passo.
 *  - Verbos no imperativo: "misture", "adicione", "jogue", "role".
 *  - Lista de materiais/ingredientes antes dos passos.
 *  - Passos numerados, na ordem certa — pular um passo estraga tudo.
 *
 * BNCC: EF03LP19, EF03LP20, EF35LP17
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-texto-instrucional",
  titulo: "O Manual do Clube",
  iconeTrilha: "📋",
  bncc: ["EF03LP19", "EF03LP20", "EF35LP17"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A prova final de repórter",
    historia:
      "Brilha reuniu o Clube: — Hoje é a missão final! Vocês vão virar Repórteres Instrutores e escrever um texto que ENSINA algo passo a passo, tão claro que qualquer pessoa consegue seguir sem errar. Pode ser uma receita ou a regra de um jogo. Vamos treinar os verbos de comando e a lista de materiais?",
    imagemUrl: receita,
  },

  momento02_previsao: {
    instrucao: "Veja essa página de receita. O que você acha que ela vai ensinar?",
    bloco: {
      titulo: "Receita do bolo de fubá do Clube",
      capaImagemUrl: bolo,
      pistas: [
        { imagemUrl: ovo, nome: "Ovos" },
        { imagemUrl: leite, nome: "Leite" },
      ],
      recado: {
        rotulo: "Receita",
        icone: "🍰",
        linhas: ["Ingredientes:", "3 ovos, 1 xícara de leite...", "Modo de preparo:", "1) Misture os ovos..."],
        estilo: "papel",
      },
      pergunta: "O que esse tipo de texto vai ensinar?",
      hipoteses: [
        { texto: "Como fazer um bolo, passo a passo.", imagemUrl: bolo },
        { texto: "A vida de um cozinheiro famoso.", imagemUrl: receita },
        { texto: "Uma opinião sobre bolos.", imagemUrl: ovo },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Uma receita é um TEXTO INSTRUCIONAL: tem lista de ingredientes e passos numerados pra ensinar a fazer algo.",
      feedbackErro:
        "Repare: aparecem 'ingredientes' e 'passo 1' — isso é sinal de texto instrucional, que ENSINA a fazer algo.",
      dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Palavras-chave do texto instrucional:",
    cards: [
      {
        palavra: "texto instrucional",
        explicacao: "É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa.",
        exemplo: "Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional.",
        imagemUrl: receita,
      },
      {
        palavra: "verbo imperativo",
        explicacao: "É o verbo usado para dar um comando ou instrução, como 'misture', 'jogue', 'role', 'coloque'.",
        exemplo: "'Misture os ovos com o açúcar.' — 'misture' é um verbo imperativo.",
        imagemUrl: bolo,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler a regra do jogo 'Corrida dos Dados', escrita pelo Clube.",
    leitura: {
      titulo: "Regra do jogo Corrida dos Dados",
      imagemUrl: dado,
      legendaImagem: "Materiais: 1 dado e 2 ou mais jogadores",
      destacar: ["Materiais", "role", "avance"],
      paragrafos: [
        "Materiais: um dado e peões (podem ser tampinhas) para cada jogador.",
        "Passo 1: cada jogador role o dado uma vez para decidir quem começa. Quem tirar o número maior joga primeiro.",
        "Passo 2: na sua vez, role o dado e avance seu peão o número de casas que saiu.",
        "Passo 3: vence quem chegar primeiro na casa final do tabuleiro.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão nele.",
    perguntas: [
      {
        pergunta: "Quais são os materiais do jogo?",
        opcoes: ["Um dado e peões", "Uma bola e uma rede", "Papel e lápis"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Os materiais estão logo no início: 'um dado e peões'.",
        feedbackErro: "A lista de materiais sempre vem antes dos passos — releia a primeira linha.",
        ondeEstaNoTexto: "Materiais: um dado e peões…",
        dica: "🔎 Pista: releia no texto o trecho “Materiais: um dado e peões…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “Quais são os materiais do jogo?” com essa ideia na cabeça.",
      },
      {
        pergunta: "O que o jogador deve fazer no Passo 2?",
        opcoes: ["Escolher a cor do peão", "Rolar o dado e avançar o peão", "Esperar a próxima rodada"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! O verbo de comando é 'role' — role o dado e avance.",
        feedbackErro: "Releia o Passo 2: o verbo de comando aparece logo no início da frase.",
        ondeEstaNoTexto: "Passo 2: na sua vez, role o dado e avance seu peão…",
        dica: "🔎 Pista: releia no texto o trecho “Passo 2: na sua vez, role o dado e avance seu peão…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “O que o jogador deve fazer no Passo 2?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Quem vence o jogo?",
        opcoes: [
          "Quem tirar o número menor no dado",
          "Quem chegar primeiro na casa final",
          "Quem jogar por mais tempo",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Está no Passo 3: 'vence quem chegar primeiro'.",
        feedbackErro: "A regra de vitória está no último passo do texto.",
        ondeEstaNoTexto: "Passo 3: vence quem chegar primeiro na casa final do tabuleiro.",
        dica: "🔎 Pista: releia no texto o trecho “Passo 3: vence quem chegar primeiro na casa final do tabuleiro.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “Quem vence o jogo?” com essa ideia na cabeça.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Em texto instrucional não há personagens de história — mas há quem SEGUE as instruções e onde se aplica.",
    perguntas: [
      {
        pergunta: "Quem deve seguir essas instruções?",
        opcoes: ["Só quem escreveu a regra", "Qualquer pessoa que queira jogar o jogo", "Só o Clube dos Detetives"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Texto instrucional é escrito para QUALQUER pessoa conseguir seguir.",
        feedbackErro: "O objetivo do texto instrucional é ser claro pra QUALQUER PESSOA que quiser jogar.",
        dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “Quem deve seguir essas instruções?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Onde a lista de materiais deve aparecer no texto?",
        opcoes: ["No meio dos passos", "Antes dos passos", "Só no final"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! A lista de materiais vem ANTES, pra já separar tudo.",
        feedbackErro: "Releia a regra do jogo: 'Materiais' aparece logo no começo, antes do Passo 1.",
        dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “Onde a lista de materiais deve aparecer no texto?” com essa ideia na cabeça.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos dessa receita simples de suco na ordem certa.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Corte as frutas em pedaços pequenos.", imagemUrl: ovo },
        { id: "p2", texto: "Bata as frutas no liquidificador com água.", imagemUrl: leite },
        { id: "p3", texto: "Coe o suco e sirva em copos.", imagemUrl: bola },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Isso mesmo! Você seguiu a ordem certa — em texto instrucional, pular um passo estraga tudo.",
      feedbackErro:
        "Pense na lógica: primeiro CORTA, depois BATE no liquidificador, e só no fim COA e serve.",
      dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho essa receita e responda.",
    leitura: {
      titulo: "Receita de vitamina de banana",
      imagemUrl: leite,
      destacar: ["Materiais", "misture", "bata"],
      paragrafos: [
        "Materiais: 1 banana, 1 copo de leite e 1 colher de açúcar (opcional).",
        "Passo 1: descasque a banana e corte em pedaços.",
        "Passo 2: coloque a banana, o leite e o açúcar no liquidificador e bata por 1 minuto.",
        "Passo 3: sirva gelado e aproveite!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quais são os materiais dessa receita?",
        opcoes: ["Banana, leite e açúcar", "Maçã, água e mel", "Ovo, farinha e leite"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Estão listados no início: banana, leite e açúcar.",
        feedbackErro: "Releia a linha 'Materiais:' no começo do texto.",
        ondeEstaNoTexto: "Materiais: 1 banana, 1 copo de leite e 1 colher de açúcar…",
        dica: "🔎 Pista: releia no texto o trecho “Materiais: 1 banana, 1 copo de leite e 1 colher de açúcar…”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “Quais são os materiais dessa receita?” com essa ideia na cabeça.",
      },
      {
        pergunta: "Qual verbo de comando aparece no Passo 2?",
        opcoes: ["Descasque", "Bata", "Sirva"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! 'Bata' é o verbo imperativo do Passo 2.",
        feedbackErro: "Releia o Passo 2 — o verbo de comando vem depois de 'coloque... e'.",
        ondeEstaNoTexto: "…coloque a banana, o leite e o açúcar no liquidificador e bata por 1 minuto.",
        dica: "🔎 Pista: releia no texto o trecho “…coloque a banana, o leite e o açúcar no liquidificador e bata por 1 minuto.”. A resposta está escondida ali.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “Qual verbo de comando aparece no Passo 2?” com essa ideia na cabeça.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Texto instrucional ensina a FAZER algo, passo a passo.",
      "Usa verbos no IMPERATIVO: misture, role, corte, bata, sirva.",
      "A lista de materiais/ingredientes vem ANTES dos passos.",
      "Os passos são NUMERADOS e devem seguir a ordem certa — pular um estraga o resultado.",
    ],
    miniDesafio: {
      pergunta: "Qual desses é um verbo no imperativo, típico de texto instrucional?",
      opcoes: ["'Bonito'", "'Misture'", "'Bolo'"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'Misture' é um verbo de comando — imperativo.",
      feedbackErro: "Procure a palavra que dá uma ORDEM, um comando de ação: 'misture'.",
      dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
      reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “Qual desses é um verbo no imperativo, típico de texto instrucional?” com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Para que serve um texto instrucional?",
        opcoes: ["Para contar uma história inventada", "Para ensinar a fazer algo, passo a passo", "Para dar uma opinião"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ele ensina a FAZER algo.",
        feedbackErro: "Texto instrucional ENSINA, não conta história nem dá opinião.",
        dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “1/5 — Para que serve um texto instrucional?” com essa ideia na cabeça.",
      },
      {
        pergunta: "2/5 — Qual desses verbos está no imperativo (comando)?",
        opcoes: ["'Correu'", "'Role'", "'Correndo'"],
        correta: 1,
        feedbackAcerto: "🎉 Correto! 'Role' é um comando — imperativo.",
        feedbackErro: "Imperativo dá ORDEM. 'Role o dado' é um comando direto.",
        dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “2/5 — Qual desses verbos está no imperativo (comando)?” com essa ideia na cabeça.",
      },
      {
        pergunta: "3/5 — Onde deve ficar a lista de materiais?",
        opcoes: ["Antes dos passos", "Depois dos passos", "Não é necessária"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A lista de materiais vem ANTES, pra já separar tudo.",
        feedbackErro: "Sempre organizamos os materiais/ingredientes ANTES de começar os passos.",
        dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “3/5 — Onde deve ficar a lista de materiais?” com essa ideia na cabeça.",
      },
      {
        pergunta: "4/5 — Por que os passos precisam ser numerados e em ordem?",
        opcoes: [
          "Só para enfeitar o texto",
          "Porque pular ou trocar a ordem pode estragar o resultado",
          "Não faz diferença numerar",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Exato! A ordem dos passos é essencial pro resultado dar certo.",
        feedbackErro: "Se trocar a ordem dos passos (ex.: assar antes de misturar), o resultado pode dar errado.",
        dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “4/5 — Por que os passos precisam ser numerados e em ordem?” com essa ideia na cabeça.",
      },
      {
        pergunta: "5/5 — 'Corte a banana em pedaços' é um exemplo de:",
        opcoes: ["Opinião", "Verbo no imperativo dando instrução", "Fato de uma notícia"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Corte' é um comando — texto instrucional.",
        feedbackErro: "'Corte' é um verbo de comando (imperativo), típico de receitas e regras.",
        dica: "🔎 Pista: lembre do que significa “texto instrucional” — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Use isso para eliminar as alternativas que não combinam.",
        reensino: "📚 Vamos rever juntos: texto instrucional — É um texto que ensina a fazer algo, com lista de materiais e passos numerados, na ordem certa. Exemplo: Uma receita de bolo e a regra de um jogo são exemplos de texto instrucional. Agora volte à pergunta “5/5 — 'Corte a banana em pedaços' é um exemplo de:” com essa ideia na cabeça.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Crie seu próprio manual",
    materiais: ["Papel e lápis", "Algo simples que você sabe fazer (uma dobradura, um lanche, um jogo)"],
    passos: [
      "1) Escolha algo simples que você sabe fazer.",
      "2) Escreva a lista de MATERIAIS necessários.",
      "3) Escreva os PASSOS numerados, usando verbos de comando (misture, dobre, jogue, corte).",
      "4) Peça para um adulto da família seguir exatamente o que você escreveu — funcionou? Se não, o que faltou explicar?",
    ],
    registro: "📋 O manual escrito (materiais + passos numerados) para compartilhar na próxima aula.",
  },

  recompensa: {
    xp: 120,
    moedas: 70,
    medalha: "Crachá do Repórter do Clube",
  },
};
