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
 * Unidade 9 · Aula 4 — O Clube de Leitura dos Exploradores
 * -------------------------------------------------------------
 * Última aula do curso do 4º ano. Foco: ler literatura por prazer
 * e saber CONVERSAR sobre o que leu — apresentar o livro, contar do
 * que trata sem entregar o final, defender a parte preferida com um
 * trecho e ouvir a recomendação de um colega. Também trabalha a
 * diferença entre RESUMO (fato) e OPINIÃO (o que eu achei).
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-clube-de-leitura",
  titulo: "O Clube de Leitura dos Exploradores",
  iconeTrilha: "⭐",
  bncc: ["EF35LP01", "EF35LP16", "EF35LP29", "EF35LP30"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "A última parada da expedição",
    historia:
      "Brilha reuniu todos os exploradores embaixo da árvore grande, cada um com um livro debaixo do braço. — Chegamos à última parada da nossa expedição: o CLUBE DE LEITURA! Aqui a gente não faz prova sobre o livro. A gente CONVERSA sobre ele: conta um pouquinho, mostra a parte preferida e recomenda para os amigos. Bora aprender a fazer isso direitinho?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de entrar na roda de leitura.",
    bloco: {
      titulo: "O Clube de Leitura dos Exploradores",
      capaImagemUrl: arvore,
      pistas: [
        { imagemUrl: livro, nome: "Um livro para apresentar" },
        { imagemUrl: estrela, nome: "Uma parte preferida para contar" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "Como falar sobre um livro que lemos: contar do que trata, dizer a parte preferida e recomendar.",
          imagemUrl: estrela,
        },
        { texto: "Como decorar o livro inteiro palavra por palavra.", imagemUrl: lapis },
        { texto: "Como desenhar a capa de um livro novo.", imagemUrl: bussola },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos aprender a apresentar um livro e recomendar para os amigos, sem contar o final.",
      feedbackErro:
        "Pense na roda de leitura: os exploradores estão com livros nas mãos, prontos para conversar sobre eles. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: no clube de leitura, ninguém faz prova — todo mundo CONVERSA sobre o livro que leu.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora do clube de leitura conhece essas palavras antes de falar.",
    cards: [
      {
        palavra: "resumo",
        explicacao: "Contar, com poucas palavras, do que trata o livro — os FATOS da história, sem opinião.",
        exemplo: "\"O livro conta a história de uma raposa que se perde na floresta.\"",
        imagemUrl: livro,
      },
      {
        palavra: "opinião",
        explicacao: "O que EU achei do livro — se gostei, se achei engraçado, triste ou emocionante.",
        exemplo: "\"Eu achei o final surpreendente e engraçado.\"",
        imagemUrl: estrela,
      },
      {
        palavra: "justificar",
        explicacao: "Explicar POR QUE penso assim, usando um trecho ou exemplo do próprio livro.",
        exemplo: "\"Gostei da parte em que a raposa engana o lobo, porque foi muito esperta.\"",
        imagemUrl: bussola,
      },
      {
        palavra: "recomendação",
        explicacao: "Dizer para quem aquele livro combina, para incentivar outra pessoa a ler.",
        exemplo: "\"Recomendo para quem gosta de histórias de aventura com animais.\"",
        imagemUrl: pergaminho,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Resumo ou opinião? Não confunda!",
    instrucao: "Veja como a mesma leitura pode virar uma fala de FATO e uma fala de OPINIÃO.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "RESUMO conta o fato do livro; OPINIÃO conta o que eu achei",
        explicacao:
          "Quando falamos de um livro, dois tipos de frase aparecem sempre: a frase de RESUMO, que conta um fato que está escrito no livro (o que aconteceu, quem são os personagens, onde se passa), e a frase de OPINIÃO, que conta o que EU penso sobre isso (se gostei, se achei divertido, triste ou chato). Uma boa apresentação de livro usa as duas, mas nunca as confunde: 'O menino descobre um mapa escondido' é resumo (fato); 'Achei essa parte emocionante' é opinião (o que eu senti).",
        exemplos: [
          { palavra: "O livro conta a história de um menino que acha um mapa.", destaque: "fato do livro", motivo: "É resumo: está escrito assim na história, não muda de pessoa para pessoa." },
          { palavra: "Eu achei essa parte emocionante.", destaque: "o que eu senti", motivo: "É opinião: outra pessoa pode achar chato, e as duas opiniões estão certas." },
          { palavra: "A personagem principal é uma raposa chamada Fuxica.", destaque: "fato do livro", motivo: "É resumo: dado que está no texto, igual para todo leitor." },
        ],
        desafios: [
          {
            molde: "___ o livro se passa numa floresta encantada",
            opcoes: ["É resumo (fato do livro)", "É opinião (o que eu achei)", "Não é nem uma coisa nem outra"],
            correta: 0,
            frase: "O livro se passa numa floresta encantada.",
            feedbackErro: "Onde a história se passa é um FATO que está escrito no livro — por isso é resumo.",
          },
          {
            molde: "___ eu achei o final tão surpreendente",
            opcoes: ["É resumo (fato do livro)", "É opinião (o que eu achei)", "Não é nem uma coisa nem outra"],
            correta: 1,
            frase: "Eu achei o final tão surpreendente!",
            feedbackErro: "'Eu achei' mostra que é uma opinião — o que essa pessoa sentiu ao ler.",
          },
          {
            molde: "___ a parte que eu mais gostei foi quando a raposa fugiu",
            opcoes: ["É resumo (fato do livro)", "É opinião (o que eu achei)", "Não é nem uma coisa nem outra"],
            correta: 1,
            frase: "A parte que eu mais gostei foi quando a raposa fugiu.",
            feedbackErro: "'A parte que eu mais gostei' é uma escolha pessoal — por isso é opinião.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou no diário como funciona a roda do clube de leitura.",
    leitura: {
      titulo: "As Quatro Etapas da Roda de Leitura",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["apresentar", "sem contar o final", "parte preferida", "recomendação"],
      paragrafos: [
        "Primeiro, a exploradora APRESENTA o livro: fala o título, o nome de quem escreveu (o autor) e o gênero — se é conto, fábula, poema ou aventura.",
        "Depois, ela conta RESUMIDAMENTE do que trata a história, mas toma cuidado para não contar o final. Assim, quem escuta ainda vai querer ler o livro inteiro!",
        "Em seguida, ela conta qual foi a sua PARTE PREFERIDA e justifica com um trechinho do livro ou um exemplo: 'Gostei da parte em que... porque...'.",
        "Por fim, ela faz uma RECOMENDAÇÃO: diz para quem aquele livro combina. E o mais importante: ela também escuta com atenção a recomendação do colega, sem interromper.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que a exploradora deve dizer ao apresentar o livro?",
        opcoes: ["Título, autor e gênero", "Somente o nome dela mesma", "O número de páginas apenas", "A cor da capa"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Título, autor e gênero são as primeiras informações da apresentação.",
        feedbackErro: "Releia: 'a exploradora APRESENTA o livro: fala o título, o nome de quem escreveu... e o gênero'.",
        ondeEstaNoTexto: "fala o título, o nome de quem escreveu (o autor) e o gênero",
        dica: "🧭 Pista de explorador: releia o primeiro parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Título, autor e gênero”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
        feedbackOpcoes: [null, "Isso não basta para apresentar o livro direito.", "Isso não diz nada sobre a história.", "A cor da capa não é uma informação importante para a apresentação."],
      },
      {
        pergunta: "Por que a exploradora não deve contar o final da história?",
        opcoes: ["Para quem escuta ainda querer ler o livro inteiro", "Porque ela esqueceu o final", "Porque o final é sempre triste", "Porque o final não existe nos livros"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Guardar o final desperta a curiosidade de quem escuta.",
        feedbackErro: "Releia: 'toma cuidado para não contar o final. Assim, quem escuta ainda vai querer ler o livro inteiro!'",
        ondeEstaNoTexto: "quem escuta ainda vai querer ler o livro inteiro",
        dica: "🧭 Pista de explorador: pense no que acontece se alguém já sabe o final antes de ler.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Para quem escuta ainda querer ler o livro inteiro”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
        feedbackOpcoes: [null, "O texto não fala nisso.", "O texto não diz que todo final é triste.", "Todo livro tem um final, mesmo que a exploradora não o conte."],
      },
      {
        pergunta: "O que a exploradora deve fazer para JUSTIFICAR sua parte preferida?",
        opcoes: ["Usar um trechinho ou exemplo do livro", "Só dizer 'eu gostei' e parar por aí", "Contar o final da história", "Falar de outro livro diferente"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Justificar é explicar o porquê usando um trecho ou exemplo do livro.",
        feedbackErro: "Releia: 'ela conta qual foi a sua PARTE PREFERIDA e justifica com um trechinho do livro ou um exemplo'.",
        ondeEstaNoTexto: "justifica com um trechinho do livro ou um exemplo",
        dica: "🧭 Pista de explorador: releia o terceiro parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Usar um trechinho ou exemplo do livro”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
        feedbackOpcoes: [null, "Só dizer 'eu gostei' não é uma justificativa completa.", "Isso quebraria a regra de não contar o final.", "Falar de outro livro não justifica a parte preferida deste livro."],
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem participa da roda e onde ela acontece?",
    perguntas: [
      {
        pergunta: "Onde Brilha reuniu os exploradores para o clube de leitura?",
        opcoes: ["Embaixo da árvore grande", "Dentro de uma caverna", "No topo de uma montanha", "Numa sala escura"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Brilha reuniu todos embaixo da árvore grande.",
        feedbackErro: "Releia a motivação: 'Brilha reuniu todos os exploradores embaixo da árvore grande'.",
        dica: "🧭 Pista de explorador: releia a primeira frase da motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Embaixo da árvore grande”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
        feedbackOpcoes: [null, "Não há caverna nesta história.", "Não há montanha nesta história.", "A cena é ao ar livre, embaixo de uma árvore."],
      },
      {
        pergunta: "O que cada explorador levava debaixo do braço?",
        opcoes: ["Um livro", "Uma bússola", "Um mapa", "Um lápis"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Cada um estava com um livro debaixo do braço.",
        feedbackErro: "Releia: 'cada um com um livro debaixo do braço'.",
        dica: "🧭 Pista de explorador: releia a história da motivação com atenção.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Um livro”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
        feedbackOpcoes: [null, "A bússola não aparece nesta cena.", "O mapa não aparece nesta cena.", "O lápis não aparece nesta cena."],
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos da apresentação de um livro no clube de leitura.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Apresentar o livro: título, autor e gênero.", imagemUrl: livro },
        { id: "p2", texto: "Contar do que trata a história, sem revelar o final.", imagemUrl: mapa },
        { id: "p3", texto: "Contar a parte preferida e justificar com um trecho.", imagemUrl: estrela },
        { id: "p4", texto: "Fazer a recomendação e escutar a do colega.", imagemUrl: bussola },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para uma boa roda de leitura.",
      feedbackErro: "Pense: primeiro se apresenta o livro, depois se conta do que trata, depois a parte preferida, e só então a recomendação.",
      dica: "🧭 Pista de explorador: a apresentação (título, autor, gênero) vem sempre primeiro.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho a fala de uma exploradora no clube de leitura e responda.",
    leitura: {
      titulo: "A Fala de Marina no Clube de Leitura",
      imagemUrl: livro,
      destacar: ["A Raposa e o Mapa Perdido", "aventura", "não vou contar o final", "recomendo"],
      paragrafos: [
        "— O livro que eu li se chama A Raposa e o Mapa Perdido, escrito por Helena Campos. É uma história de aventura.",
        "— A raposa Fuxica encontra um mapa misterioso e sai em busca de um tesouro escondido na floresta. Só que não vou contar o final, porque vale muito a pena descobrir sozinho!",
        "— Minha parte preferida foi quando Fuxica engana o lobo usando só a esperteza, sem brigar. Achei genial, porque mostra que dá para resolver problemas sem violência.",
        "— Recomendo esse livro para quem gosta de histórias de aventura com bichos espertos.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual é o gênero do livro que Marina apresentou?",
        opcoes: ["Aventura", "Poema", "Notícia de jornal"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Marina disse 'É uma história de aventura.'",
        feedbackErro: "Releia: 'É uma história de aventura.'",
        ondeEstaNoTexto: "É uma história de aventura",
        dica: "🧭 Pista de explorador: releia a primeira fala de Marina.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Aventura”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Por que Marina não contou o final da história?",
        opcoes: ["Porque vale a pena descobrir sozinho", "Porque ela esqueceu o final", "Porque o livro não tem final"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Ela disse que 'vale muito a pena descobrir sozinho'.",
        feedbackErro: "Releia: 'não vou contar o final, porque vale muito a pena descobrir sozinho!'",
        ondeEstaNoTexto: "vale muito a pena descobrir sozinho",
        dica: "🧭 Pista de explorador: releia o segundo parágrafo da fala de Marina.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque vale a pena descobrir sozinho”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Resumo ou Opinião?",
    instrucao: "Arraste cada fala do explorador para o alvo certo: é fato do livro ou é o que ele achou?",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "A Roda das Falas do Clube de Leitura",
      bloco: {
        instrucao: "Pense: essa frase está escrita no livro (fato) ou é o sentimento de quem leu (opinião)?",
        itens: [
          { id: "i1", texto: "A história se passa numa floresta encantada.", alvoId: "resumo" },
          { id: "i2", texto: "Eu achei o final surpreendente!", alvoId: "opiniao" },
          { id: "i3", texto: "A personagem principal é uma raposa chamada Fuxica.", alvoId: "resumo" },
          { id: "i4", texto: "Essa foi a parte mais engraçada do livro, na minha opinião.", alvoId: "opiniao" },
          { id: "i5", texto: "O menino encontra um mapa escondido na gaveta.", alvoId: "resumo" },
          { id: "i6", texto: "Não gostei muito do começo, achei devagar.", alvoId: "opiniao" },
          { id: "i7", texto: "O livro tem oito capítulos.", alvoId: "resumo" },
          { id: "i8", texto: "Recomendo porque achei emocionante.", alvoId: "opiniao" },
        ],
        alvos: [
          { id: "resumo", nome: "é RESUMO (fato do livro)", imagemUrl: livro, descricao: "Está escrito assim na história" },
          { id: "opiniao", nome: "é OPINIÃO (o que eu achei)", imagemUrl: estrela, descricao: "É o que o leitor sentiu ou pensou" },
        ],
        feedbackAcerto: "🎉 Excelente! Você separou muito bem os fatos do livro das opiniões dos leitores.",
        feedbackErro: "Pergunte-se: essa frase está escrita igual no livro para todo mundo, ou é o sentimento de uma pessoa?",
        dica: "🧭 Pista de explorador: se aparece 'eu achei', 'gostei', 'na minha opinião', é OPINIÃO.",
      },
    },
  },

  momento_escrita: {
    titulo: "Minha Recomendação de Livro",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Recomendação de um livro que eu li",
        comando:
          "Escreva em 5 linhas a recomendação de um livro que você leu: 1) título e autor; 2) do que trata (sem contar o final); 3) sua parte preferida; 4) por que gostou dessa parte (justificativa); 5) para quem você indica esse livro.",
        linhas: 5,
        modelo: [
          "O livro A Raposa e o Mapa Perdido, de Helena Campos, é uma história de aventura.",
          "Conta a busca de uma raposa por um tesouro escondido na floresta.",
          "Minha parte preferida foi quando ela engana o lobo com esperteza.",
          "Gostei porque mostra que dá para resolver problemas sem brigar.",
          "Recomendo para quem gosta de histórias de aventura com bichos espertos.",
        ],
        checklist: [
          "Escrevi o título e o autor do livro.",
          "Contei do que trata a história, SEM revelar o final.",
          "Disse qual foi minha parte preferida.",
          "Justifiquei minha opinião com um exemplo ou trecho do livro.",
          "Disse para quem eu indico esse livro.",
          "Li em voz alta e consertei o que ficou estranho.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: A Fala de Marina",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO, como se estivesse contando para os amigos.",
    texto: [
      "O livro que eu li se chama A Raposa e o Mapa Perdido, escrito por Helena Campos.",
      "Minha parte preferida foi quando Fuxica engana o lobo usando só a esperteza.",
      "Recomendo esse livro para quem gosta de aventura com bichos espertos!",
    ],
    metaSegundos: 24,
  },

  momento09_revisao: {
    pontos: [
      "No clube de leitura, apresentamos o livro dizendo título, autor e gênero.",
      "Contamos do que trata a história SEM revelar o final, para não estragar a surpresa de quem vai ler.",
      "Resumo conta um FATO do livro; opinião conta o que EU achei — as duas coisas não se confundem.",
      "Toda opinião precisa ser justificada com um trecho ou exemplo do próprio livro.",
      "Recomendar é dizer para quem aquele livro combina — e também sabemos escutar a recomendação do colega.",
    ],
    miniDesafio: {
      pergunta: "Qual dessas frases é uma OPINIÃO?",
      opcoes: ["Eu achei essa parte muito emocionante.", "A história se passa numa floresta.", "O livro tem oito capítulos."],
      correta: 0,
      feedbackAcerto: "🎉 Isso! 'Eu achei' mostra que é o sentimento do leitor — uma opinião.",
      feedbackErro: "Procure a frase com 'eu achei' — ela mostra o sentimento de quem leu, não um fato do livro.",
      dica: "🧭 Pista de explorador: opinião sempre tem 'eu achei', 'eu gostei' ou 'na minha opinião'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "O que devemos dizer ao apresentar um livro no clube de leitura?",
        opcoes: ["Título, autor e gênero", "Só o nome de quem está lendo", "A cor da capa e o número de páginas", "O nome da escola"],
        correta: 0,
        feedbackAcerto: "🎉 Isso mesmo! Essas são as primeiras informações de toda apresentação.",
        feedbackErro: "Pense no que Marina disse primeiro: título, autor e gênero do livro.",
        dica: "🧭 Pista de explorador: releia a leitura guiada sobre as etapas da apresentação.",
        reensino: "📚 Vamos rever: ao apresentar um livro, dizemos título, autor e gênero — essas são as informações básicas.",
        feedbackOpcoes: [null, "Falta o título e o autor, informações essenciais.", "Isso não conta nada sobre o livro em si.", "O nome da escola não faz parte da apresentação do livro."],
      },
      {
        pergunta: "Por que não devemos contar o final da história no clube de leitura?",
        opcoes: ["Para que quem escuta ainda queira ler o livro", "Porque o final é sempre chato", "Porque é proibido falar do final", "Porque ninguém lembra do final"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Guardar o final desperta a curiosidade de quem escuta.",
        feedbackErro: "Pense: se você já sabe o final, ainda tem vontade de ler o livro?",
        dica: "🧭 Pista de explorador: pense no efeito de 'estragar a surpresa'.",
        reensino: "📚 Vamos rever: não contamos o final para que a pessoa ainda tenha vontade e curiosidade de ler o livro inteiro.",
        feedbackOpcoes: [null, "O texto não diz isso; o final pode ser de qualquer jeito.", "Não existe essa proibição, é uma escolha para não estragar a surpresa.", "Isso não é o motivo explicado no texto."],
      },
      {
        pergunta: "Qual destas frases é um RESUMO (fato do livro)?",
        opcoes: ["A raposa encontra um mapa na floresta.", "Eu achei essa parte emocionante.", "Gostei muito desse livro.", "Esse foi o melhor livro que já li."],
        correta: 0,
        feedbackAcerto: "🎉 Isso! É um fato que está escrito na história, igual para qualquer leitor.",
        feedbackErro: "Pense: qual frase conta algo que está escrito no livro, sem depender do sentimento de quem lê?",
        dica: "🧭 Pista de explorador: resumo não tem 'eu achei' nem 'eu gostei'.",
        reensino: "📚 Vamos rever: resumo é um fato do livro, igual para todo leitor. 'A raposa encontra um mapa' é isso.",
        feedbackOpcoes: [null, "'Eu achei' mostra que é opinião, não fato.", "'Gostei' mostra que é opinião, não fato.", "'O melhor livro que já li' é uma opinião pessoal."],
      },
      {
        pergunta: "O que significa JUSTIFICAR uma opinião sobre um livro?",
        opcoes: ["Explicar o porquê usando um trecho ou exemplo do livro", "Repetir 'eu gostei' várias vezes", "Contar o final da história", "Copiar a opinião de um colega"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Justificar é dar um motivo real, apoiado em algo do próprio livro.",
        feedbackErro: "Pense no que Marina fez: ela disse a parte preferida E explicou por quê com um exemplo.",
        dica: "🧭 Pista de explorador: releia a leitura independente — Marina explica 'porque mostra que...'.",
        reensino: "📚 Vamos rever: justificar é explicar o motivo da opinião usando um trecho ou exemplo do livro.",
        feedbackOpcoes: [null, "Repetir não é o mesmo que explicar um motivo.", "Isso quebraria a regra de não contar o final.", "Copiar a opinião de outra pessoa não é justificar a sua própria."],
      },
      {
        pergunta: "O que devemos fazer quando um colega está recomendando o livro dele?",
        opcoes: ["Escutar com atenção, sem interromper", "Falar ao mesmo tempo que ele", "Sair da roda de leitura", "Contar o final do livro dele antes"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Escutar com atenção é parte importante do clube de leitura.",
        feedbackErro: "Releia a leitura guiada: 'ela também escuta com atenção a recomendação do colega, sem interromper.'",
        dica: "🧭 Pista de explorador: releia o final da leitura guiada.",
        reensino: "📚 Vamos rever: no clube de leitura, escutamos com atenção a recomendação do colega, sem interromper.",
        feedbackOpcoes: [null, "Falar ao mesmo tempo impede que todos se escutem.", "Sair da roda quebra o combinado do clube de leitura.", "Contar o final do livro do colega estraga a surpresa dele também."],
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Criando o Clube de Leitura da Nossa Casa",
    materiais: ["Um livro que você já leu (ou está lendo)", "Papel e canetinha", "Um lugar da casa para pendurar o mural"],
    passos: [
      "Escolha, com a família, um livro que cada um já leu ou está lendo.",
      "Cada pessoa apresenta seu livro em voz alta: título, autor, gênero e do que trata (sem contar o final!).",
      "Cada pessoa conta a parte preferida e justifica com um exemplo do livro.",
      "Façam juntos um MURAL DO CLUBE DE LEITURA: em cada papel, escrevam o título do livro e uma frase de recomendação.",
      "Pendurem o mural num lugar visível da casa, para lembrar sempre de recomendar livros uns aos outros.",
    ],
    registro:
      "Tire uma foto do mural do Clube de Leitura da sua casa (ou desenhe como ele ficou) e traga para mostrar na próxima aula. Essa é a última missão da nossa grande expedição — parabéns, explorador!",
  },

  recompensa: {
    xp: 160,
    moedas: 90,
    medalha: "🏆 Mestre do Clube de Leitura",
  },
};
