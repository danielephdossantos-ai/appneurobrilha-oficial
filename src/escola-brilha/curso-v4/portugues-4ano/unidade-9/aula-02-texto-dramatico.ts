import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa-percurso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as pergaminho } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as arvore } from "@/assets/neuro-treino/objetos/arvore.png.asset.json";

/**
 * Unidade 9 · Aula 2 — Os Sinais do Palco
 * -------------------------------------------------------------
 * Foco: marcadores do texto dramático — nome da personagem em
 * maiúsculas antes da fala, dois-pontos, rubricas entre parênteses
 * (emoção/movimento), indicação de cena e cenário, comparação com
 * o travessão da narrativa.
 * BNCC: EF04LP27, EF35LP11, EF15LP01.
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-texto-dramatico",
  titulo: "Os Sinais do Palco",
  iconeTrilha: "🎭",
  bncc: ["EF04LP27", "EF35LP24", "EF15LP15", "EF15LP16"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Um texto que vira palco",
    historia:
      "A expedição chegou a um teatro de árvore, com cortina de folhas. Brilha encontrou um papel diferente de tudo: os nomes das personagens apareciam em LETRAS GRANDES, e entre parênteses vinham pistas como (sorrindo) ou (batendo o pé). — Olha só! Este texto não conta a história: ele MOSTRA quem fala e como se mexe no palco. Vamos decifrar os sinais do texto dramático?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de entrar no teatro.",
    bloco: {
      titulo: "Os Sinais do Palco",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: arvore, nome: "Uma cortina de folhas" },
        { imagemUrl: lapis, nome: "Nomes escritos em letras grandes" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como o texto de teatro indica quem fala, o que sente e onde acontece a cena.",
          imagemUrl: estrela,
        },
        { texto: "Como decorar uma cortina de teatro com desenhos.", imagemUrl: lapis },
        { texto: "Quantas pessoas cabem numa plateia.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos descobrir os sinais que organizam um texto de teatro: nome da personagem, rubricas e cenário.",
      feedbackErro:
        "Pense no papel que Brilha encontrou: nomes em letras grandes e pistas entre parênteses. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: quando um texto tem nomes em MAIÚSCULAS seguidos de dois-pontos, ele está te mostrando quem vai falar.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora do teatro conhece o nome de cada sinal antes de ler a peça.",
    cards: [
      {
        palavra: "texto dramático",
        explicacao: "É o texto escrito para ser encenado no palco, com personagens que falam diretamente.",
        exemplo: "Uma peça de teatro é um texto dramático.",
        imagemUrl: estrela,
      },
      {
        palavra: "rubrica",
        explicacao: "É a indicação, entre parênteses, de como a personagem fala, sente ou se movimenta.",
        exemplo: "JOÃO: (assustado) Quem está aí?",
        imagemUrl: bussola,
      },
      {
        palavra: "cena",
        explicacao: "É cada parte da peça, marcada quando algo importante muda (entra ou sai uma personagem, muda o lugar).",
        exemplo: "CENA 1 — A cozinha da vovó.",
        imagemUrl: lapis,
      },
      {
        palavra: "cenário",
        explicacao: "É a descrição do lugar onde a cena acontece, escrita antes do início dos diálogos.",
        exemplo: "Uma floresta escura, com uma árvore torta ao centro.",
        imagemUrl: arvore,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Palco x narrativa: dois jeitos de mostrar quem fala",
    instrucao: "Veja como o teatro organiza a fala de um jeito e a narrativa, de outro.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Nome da personagem em maiúsculas + dois-pontos + rubrica entre parênteses",
        explicacao:
          "No texto dramático, o NOME DA PERSONAGEM vem em letras MAIÚSCULAS, seguido de DOIS-PONTOS, antes da fala: MARIA: Já são seis horas! Entre parênteses, aparecem as RUBRICAS — pistas de emoção ou movimento que o ator deve seguir: MARIA: (olhando o relógio, nervosa) Já são seis horas! Já na narrativa, o mesmo diálogo usaria o TRAVESSÃO: — Já são seis horas! — disse Maria, nervosa, olhando o relógio. O sentido é o mesmo, mas a forma de escrever muda: no palco, o nome vem antes e em destaque; na história, o travessão entra na fala e o narrador conta a emoção depois.",
        exemplos: [
          { palavra: "MARIA: (nervosa) Já são seis horas!", destaque: "MARIA:", motivo: "Nome da personagem em maiúsculas, seguido de dois-pontos." },
          { palavra: "(nervosa)", destaque: "(nervosa)", motivo: "Rubrica: mostra a emoção da personagem entre parênteses." },
          { palavra: "— Já são seis horas! — disse Maria, nervosa.", destaque: "—", motivo: "Travessão: como a narrativa marca a fala de um personagem." },
        ],
        desafios: [
          {
            molde: "PEDRO_ Estou com fome!",
            opcoes: [":", ";", "-"],
            correta: 0,
            frase: "PEDRO: Estou com fome!",
            feedbackErro: "Depois do nome da personagem em maiúsculas, usamos DOIS-PONTOS, não ponto e vírgula ou hífen.",
          },
          {
            molde: "ANA: _chorando_ Não quero ir embora.",
            opcoes: ["(chorando)", "[chorando]", "\"chorando\""],
            correta: 0,
            frase: "ANA: (chorando) Não quero ir embora.",
            feedbackErro: "A rubrica de teatro fica sempre entre PARÊNTESES, não entre colchetes ou aspas.",
          },
          {
            molde: "_ Já são seis horas! _ disse Maria.",
            opcoes: ["—", "(", ":"],
            correta: 0,
            frase: "— Já são seis horas! — disse Maria.",
            feedbackErro: "Na narrativa, quem marca a fala de um personagem é o TRAVESSÃO, e não os dois-pontos ou parênteses do teatro.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha achou uma cena completa no fundo do teatro de árvore. Vamos ler juntos.",
    leitura: {
      titulo: "A Chave Perdida (Cena 1)",
      imagemUrl: pergaminho,
      legendaImagem: "Página encontrada no teatro de árvore",
      destacar: ["CENA 1", "RUBRICA", "TEO:", "LUA:"],
      paragrafos: [
        "CENA 1 — Um quintal ao entardecer. Há uma árvore grande no centro e uma cesta de roupas no chão. TEO procura algo no bolso, apressado.",
        "TEO: (revirando os bolsos, aflito) Cadê a chave? Eu tinha certeza que estava aqui!",
        "LUA: (entrando correndo, com um pote de terra nas mãos) Teo! Achei uma minhoca gigante no jardim!",
        "TEO: (sem prestar atenção) Lua, agora não! Perdi a chave da nossa casa na árvore!",
        "LUA: (parando de sorrir, séria) A chave do tesouro? Ela pode estar dentro da cesta de roupas!",
        "TEO: (procurando na cesta, animado) Encontrei! Estava escondida embaixo da toalha o tempo todo!",
        "Os dois riem juntos, e a luz do entardecer fica ainda mais dourada sobre o quintal.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte na cena se precisar. As respostas estão escritas nela.",
    perguntas: [
      {
        pergunta: "O que a rubrica '(revirando os bolsos, aflito)' indica sobre TEO?",
        opcoes: ["Como ele se sente e se movimenta ao falar", "O nome completo da personagem", "O lugar onde a cena acontece"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A rubrica mostra o movimento e a emoção da personagem naquele momento da fala.",
        feedbackErro: "Releia: a rubrica vem entre parênteses e descreve como o ator deve agir.",
        ondeEstaNoTexto: "TEO: (revirando os bolsos, aflito) Cadê a chave?",
        dica: "🧭 Pista de explorador: releia o que está escrito entre parênteses antes da fala de TEO.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Como ele se sente e se movimenta ao falar”. A rubrica sempre indica emoção ou movimento, nunca o nome ou o lugar. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Onde a CENA 1 acontece, segundo a indicação de cenário?",
        opcoes: ["Num quintal ao entardecer, com uma árvore e uma cesta de roupas", "Dentro de uma sala de aula", "Numa praia ensolarada"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! O cenário é descrito logo no começo da cena.",
        feedbackErro: "Releia o início: 'Um quintal ao entardecer. Há uma árvore grande no centro e uma cesta de roupas no chão.'",
        ondeEstaNoTexto: "Um quintal ao entardecer. Há uma árvore grande no centro e uma cesta de roupas no chão.",
        dica: "🧭 Pista de explorador: releia a primeira frase da cena, antes da fala de TEO.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Num quintal ao entardecer, com uma árvore e uma cesta de roupas”. O cenário é sempre descrito antes das falas começarem. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que aparece antes de cada fala, indicando quem vai falar?",
        opcoes: ["O nome da personagem em maiúsculas, seguido de dois-pontos", "Um travessão", "Uma seta"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! No texto dramático, o nome vem em maiúsculas e dois-pontos, e não travessão.",
        feedbackErro: "Releia qualquer fala da cena: TEO: e LUA: sempre em letras maiúsculas com dois-pontos.",
        ondeEstaNoTexto: "TEO: (revirando os bolsos, aflito)",
        dica: "🧭 Pista de explorador: compare como cada fala começa na cena.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “O nome da personagem em maiúsculas, seguido de dois-pontos”. Isso é diferente do travessão, usado nas narrativas. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem são as personagens dessa cena e onde ela se passa?",
    perguntas: [
      {
        pergunta: "Quais são as duas personagens da cena 'A Chave Perdida'?",
        opcoes: ["Teo e Lua", "Maria e Pedro", "Ana e João"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! TEO e LUA são as duas personagens da cena.",
        feedbackErro: "Releia as falas: só aparecem os nomes TEO: e LUA:.",
        dica: "🧭 Pista de explorador: releia os nomes escritos em maiúsculas antes de cada fala.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Teo e Lua”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que Lua carregava nas mãos quando entrou na cena?",
        opcoes: ["Um pote de terra com uma minhoca", "A chave perdida", "Uma cesta de roupas"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A rubrica diz que ela entra 'com um pote de terra nas mãos'.",
        feedbackErro: "Releia a rubrica da fala de LUA: '(entrando correndo, com um pote de terra nas mãos)'.",
        dica: "🧭 Pista de explorador: releia a rubrica da primeira fala de LUA.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um pote de terra com uma minhoca”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os acontecimentos da cena 'A Chave Perdida', do primeiro ao último.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Teo procura a chave nos bolsos, aflito.", imagemUrl: bussola },
        { id: "p2", texto: "Lua entra correndo com um pote de terra e uma minhoca.", imagemUrl: estrela },
        { id: "p3", texto: "Lua sugere que a chave pode estar na cesta de roupas.", imagemUrl: lapis },
        { id: "p4", texto: "Teo encontra a chave embaixo da toalha e os dois riem.", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a ordem certa dos acontecimentos da cena.",
      feedbackErro: "Pense: primeiro Teo perde a chave, depois Lua chega, depois vem a ideia da cesta e só então a chave aparece.",
      dica: "🧭 Pista de explorador: a fala de Teo sobre a chave perdida vem antes da ideia da cesta.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outra cena curta e responda.",
    leitura: {
      titulo: "O Segredo do Sótão (Cena 2)",
      imagemUrl: livro,
      destacar: ["CENA 2", "BIA:", "NOÉ:"],
      paragrafos: [
        "CENA 2 — Um sótão empoeirado, iluminado apenas por uma janela pequena. Caixas antigas se empilham num canto.",
        "BIA: (espirrando, tapando o nariz) Que poeira! Ninguém entra aqui há anos.",
        "NOÉ: (abrindo uma caixa velha, curioso) Olha, Bia! Um álbum de fotos da nossa avó quando era criança!",
        "BIA: (aproximando-se, emocionada) Nossa... ela sorria igualzinho a você nessa foto.",
      ],
    },
    perguntas: [
      {
        pergunta: "Onde se passa a CENA 2?",
        opcoes: ["Num sótão empoeirado, iluminado por uma janela pequena", "Num quintal", "Numa escola"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O cenário descrito no início é o sótão empoeirado.",
        feedbackErro: "Releia a indicação de cenário logo depois de 'CENA 2'.",
        ondeEstaNoTexto: "Um sótão empoeirado, iluminado apenas por uma janela pequena.",
        dica: "🧭 Pista de explorador: volte ao texto e releia a primeira frase da cena.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Num sótão empoeirado, iluminado por uma janela pequena”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que a rubrica de BIA, '(espirrando, tapando o nariz)', indica?",
        opcoes: ["Uma ação e reação física da personagem", "O nome de outra personagem", "O título da cena"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! A rubrica mostra a ação física de Bia diante da poeira.",
        feedbackErro: "Releia: rubricas sempre ficam entre parênteses e mostram ação ou emoção.",
        ondeEstaNoTexto: "BIA: (espirrando, tapando o nariz) Que poeira!",
        dica: "🧭 Pista de explorador: releia o que está entre parênteses antes da fala de Bia.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Uma ação e reação física da personagem”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Classifique os trechos do palco",
    instrucao: "Arraste cada trecho para o alvo certo: é fala da personagem ou rubrica de cena?",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Os Sinais do Palco",
      bloco: {
        instrucao: "Pense: o trecho está entre parênteses (rubrica) ou é o que a personagem realmente diz (fala)?",
        itens: [
          { id: "i1", texto: "Cadê a chave? Eu tinha certeza que estava aqui!", alvoId: "fala" },
          { id: "i2", texto: "(revirando os bolsos, aflito)", alvoId: "rubrica" },
          { id: "i3", texto: "(entrando correndo, com um pote de terra nas mãos)", alvoId: "rubrica" },
          { id: "i4", texto: "Teo! Achei uma minhoca gigante no jardim!", alvoId: "fala" },
          { id: "i5", texto: "(espirrando, tapando o nariz)", alvoId: "rubrica" },
          { id: "i6", texto: "Olha, Bia! Um álbum de fotos da nossa avó!", alvoId: "fala" },
          { id: "i7", texto: "(aproximando-se, emocionada)", alvoId: "rubrica" },
          { id: "i8", texto: "Nossa... ela sorria igualzinho a você nessa foto.", alvoId: "fala" },
        ],
        alvos: [
          { id: "fala", nome: "Fala da personagem", imagemUrl: estrela, descricao: "O que a personagem diz de verdade" },
          { id: "rubrica", nome: "Rubrica de cena", imagemUrl: bussola, descricao: "Entre parênteses: emoção ou movimento" },
        ],
        feedbackAcerto: "🎉 Excelente! Você separou muito bem as falas das rubricas do palco.",
        feedbackErro: "Veja se o trecho está entre parênteses: aí é rubrica. Se é o que a personagem diz, é fala.",
        dica: "🧭 Pista de explorador: rubrica sempre tem parênteses ( ) ao redor.",
      },
    },
  },

  momento_escrita: {
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Uma cena de teatro",
        comando:
          "Escreva uma cena curta de teatro com 6 linhas. Use o nome de uma personagem em maiúsculas seguido de dois-pontos, e inclua pelo menos 2 rubricas entre parênteses mostrando emoção ou movimento.",
        linhas: 6,
        modelo: [
          "CENA 1 — Uma cozinha ensolarada de manhã.",
          "MARIA: (bocejando, ainda de pijama) Que sono! Já são sete horas?",
          "PEDRO: (correndo com a mochila nas costas) Sim! Vamos nos atrasar para a escola!",
          "MARIA: (rindo, arrumando o cabelo) Calma, ainda dá tempo do café da manhã!",
        ],
        checklist: [
          "Minha cena tem começo, meio e fim.",
          "Escrevi o nome de pelo menos uma personagem em MAIÚSCULAS seguido de dois-pontos.",
          "Usei pelo menos 2 rubricas entre parênteses, mostrando emoção ou movimento.",
          "Li em voz alta como se estivesse encenando.",
          "Não usei travessão para marcar a fala (isso é da narrativa, não do teatro).",
          "Minha cena tem pelo menos 6 linhas.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: A Chave Perdida",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO, como um verdadeiro ator no palco.",
    texto: [
      "TEO: (revirando os bolsos, aflito) Cadê a chave? Eu tinha certeza que estava aqui!",
      "LUA: (entrando correndo, com um pote de terra nas mãos) Teo! Achei uma minhoca gigante no jardim!",
      "TEO: (procurando na cesta, animado) Encontrei! Estava escondida embaixo da toalha o tempo todo!",
    ],
    metaSegundos: 28,
  },

  momento09_revisao: {
    pontos: [
      "No texto dramático, o nome da personagem vem em MAIÚSCULAS, seguido de DOIS-PONTOS, antes da fala.",
      "A rubrica fica entre PARÊNTESES e mostra emoção ou movimento da personagem.",
      "A indicação de CENA marca cada parte da peça; o CENÁRIO descreve o lugar onde ela acontece.",
      "Na narrativa, o travessão marca a fala; no teatro, usamos nome + dois-pontos, sem travessão.",
    ],
    miniDesafio: {
      pergunta: "O que fica escrito entre parênteses num texto de teatro?",
      opcoes: ["A rubrica, com emoção ou movimento", "O nome da personagem", "O título da peça"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Entre parênteses ficam as rubricas.",
      feedbackErro: "Releia a explicação: entre parênteses ficam as pistas de emoção e movimento, as rubricas.",
      dica: "🧭 Pista de explorador: rubrica = parênteses.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “A rubrica, com emoção ou movimento”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que vem antes da fala de uma personagem no texto dramático?",
        opcoes: ["O nome em maiúsculas, seguido de dois-pontos", "Um travessão", "Um ponto de exclamação", "O título da peça"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O nome em maiúsculas e dois-pontos indicam quem vai falar.",
        feedbackErro: "Lembre: no teatro, o nome da personagem vem em maiúsculas, com dois-pontos.",
        feedbackOpcoes: [
          null,
          "❌ Travessão é usado na narrativa, não no texto dramático.",
          "❌ O ponto de exclamação pode aparecer na fala, mas não indica quem fala.",
          "❌ O título da peça aparece só uma vez, no começo do texto.",
        ],
        dica: "🧭 Pista de explorador: releia qualquer fala da cena 'A Chave Perdida'.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “O nome em maiúsculas, seguido de dois-pontos”.",
      },
      {
        pergunta: "2/5 — O que é uma rubrica?",
        opcoes: [
          "Indicação, entre parênteses, de emoção ou movimento da personagem",
          "O nome do autor da peça",
          "O título de cada cena",
          "A primeira fala da peça",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! A rubrica orienta o ator sobre como agir ou sentir.",
        feedbackErro: "Rubrica é sempre a pista entre parênteses, sobre emoção ou movimento.",
        feedbackOpcoes: [
          null,
          "❌ O nome do autor não aparece dentro da cena, entre parênteses.",
          "❌ O título de cada cena aparece como 'CENA 1', não entre parênteses de fala.",
          "❌ A primeira fala é só uma fala, não uma indicação de emoção ou movimento.",
        ],
        dica: "🧭 Pista de explorador: rubrica = parênteses + emoção/movimento.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Indicação, entre parênteses, de emoção ou movimento da personagem”.",
      },
      {
        pergunta: "3/5 — Qual trecho é uma RUBRICA?",
        opcoes: ["(chorando, sentado no chão)", "TEO: Cadê a chave?", "CENA 1 — A cozinha", "Um dia ensolarado"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Está entre parênteses e mostra ação/emoção: é rubrica.",
        feedbackErro: "As outras opções são nome de personagem, indicação de cena ou início de narrativa, não rubrica.",
        feedbackOpcoes: [
          null,
          "❌ 'TEO: Cadê a chave?' é o nome da personagem seguido da fala, não a rubrica.",
          "❌ 'CENA 1 — A cozinha' é indicação de cena, não rubrica.",
          "❌ 'Um dia ensolarado' seria início de narrativa, não uma rubrica de teatro.",
        ],
        dica: "🧭 Pista de explorador: rubrica sempre tem parênteses ( ) ao redor.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “(chorando, sentado no chão)”.",
      },
      {
        pergunta: "4/5 — O que marca a fala de um personagem numa NARRATIVA (não no teatro)?",
        opcoes: ["O travessão (—)", "Os dois-pontos (:)", "Os parênteses ( )", "As maiúsculas"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Na narrativa, usamos o travessão antes da fala.",
        feedbackErro: "Dois-pontos, parênteses e maiúsculas pertencem ao texto dramático, não à narrativa.",
        feedbackOpcoes: [
          null,
          "❌ Dois-pontos são usados depois do nome da personagem, no teatro.",
          "❌ Parênteses marcam a rubrica, no teatro.",
          "❌ Maiúsculas marcam o nome da personagem, no teatro.",
        ],
        dica: "🧭 Pista de explorador: lembre da comparação do ensino visual entre palco e narrativa.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “O travessão (—)”.",
      },
      {
        pergunta: "5/5 — O que a indicação de CENÁRIO descreve?",
        opcoes: [
          "O lugar onde a cena acontece",
          "O nome de todas as personagens",
          "A emoção de uma única fala",
          "O tempo de duração da peça",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! O cenário descreve onde a cena se passa.",
        feedbackErro: "Releia as cenas lidas: o cenário vem descrito logo no início, antes das falas.",
        feedbackOpcoes: [
          null,
          "❌ O nome das personagens aparece antes de cada fala, não no cenário.",
          "❌ A emoção de uma fala é indicada pela rubrica, não pelo cenário.",
          "❌ O tempo de duração não é indicado pelo cenário da cena.",
        ],
        dica: "🧭 Pista de explorador: releia o começo de 'A Chave Perdida' e de 'O Segredo do Sótão'.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “O lugar onde a cena acontece”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Encenando em casa",
    materiais: ["Papel e lápis", "Um adulto ou irmão para encenar junto"],
    passos: [
      "1) Escolham uma cena curta do dia a dia (café da manhã, hora de dormir, arrumar o quarto).",
      "2) Escrevam os nomes das personagens em MAIÚSCULAS seguidos de dois-pontos.",
      "3) Incluam pelo menos 3 rubricas entre parênteses, mostrando emoção ou movimento.",
      "4) Encenem a cena em voz alta, seguindo exatamente as rubricas escritas.",
    ],
    registro: "📝 Uma foto ou vídeo curto da família encenando a cena escrita.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
