import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";

/**
 * Unidade 7 · Aula 4 — As Palavras que Enganam
 * -------------------------------------------------------------
 * Fase 5 do 3º ano: palavras de alta frequência e IRREGULARES,
 * que não se resolvem por regra e precisam de reconhecimento
 * lexical direto — além dos pares que confundem (mas/mais,
 * mal/mau, há/a, porque/por que).
 *
 * BNCC: EF03LP01, EF03LP03, EF03LP06
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-palavras-que-enganam",
  titulo: "As Palavras que Enganam",
  iconeTrilha: "⚡",
  bncc: ["EF03LP01", "EF03LP03", "EF03LP06"],
  duracaoMin: 18,

  momento01_motivacao: {
    titulo: "Palavras sem regra — só reconhecimento",
    historia:
      "— Detetive, chegamos ao caso mais escorregadio do clube — disse Aurora, baixando a voz. — Existem palavras que NÃO obedecem a regra nenhuma: EXCEÇÃO, ATRAVÉS, HOJE, MUITO. E existem pares traiçoeiros: MAS e MAIS, MAL e MAU. Com essas, não se pensa: se RECONHECE.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de abrir o último caso da unidade.",
    bloco: {
      titulo: "As Palavras que Enganam",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: estrela, nome: "Palavras que piscam e somem" },
        { imagemUrl: lupa, nome: "Lupa sobre um par parecido" },
      ],
      pergunta: "Qual é o mistério final?",
      hipoteses: [
        { texto: "Palavras que se parecem ou não seguem regra e por isso confundem quem escreve.", imagemUrl: lupa },
        { texto: "Palavras que ninguém nunca usa.", imagemUrl: livro },
        { texto: "Estrelas que brilham no caderno.", imagemUrl: estrela },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🔍 Isso! São palavras que enganam por serem parecidas ou irregulares.",
      feedbackErro: "O título diz: palavras que ENGANAM — parecidas entre si ou sem regra.",
      dica: "Pense em MAS e MAIS: parecidas, mas com sentidos diferentes.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras técnicas antes do último caso.",
    cards: [
      {
        palavra: "irregular",
        explicacao: "É a palavra que não segue regra: precisa ser guardada na memória.",
        exemplo: "EXCEÇÃO é irregular — não dá para deduzir, é preciso reconhecer.",
        imagemUrl: livro,
      },
      {
        palavra: "sentido",
        explicacao: "É o significado que a palavra tem dentro da frase.",
        exemplo: "MAS indica oposição; MAIS indica quantidade.",
        imagemUrl: lupa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Reconhecer num relance e escolher pelo sentido",
    instrucao:
      "Primeiro a palavra vai piscar e sumir: guarde o desenho dela. Depois você escolhe pelo SENTIDO da frase.",
    blocos: [
      {
        tipo: "palavraRelampago",
        segundos: 2,
        palavras: [
          { palavra: "exceção", frase: "Todo mundo veio, sem exceção.", distratores: ["esceção", "excessão"] },
          { palavra: "através", frase: "A luz passou através da janela.", distratores: ["atravez", "atraves"] },
          { palavra: "porque", frase: "Ela riu porque a piada era boa.", distratores: ["por que", "porquê"] },
          { palavra: "também", frase: "Brilha também quis investigar.", distratores: ["tambem", "tanbém"] },
          { palavra: "hoje", frase: "Hoje é dia de reunião do clube.", distratores: ["oje", "hojem"] },
          { palavra: "muito", frase: "Gostei muito do caso.", distratores: ["mto", "muinto"] },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "MAS ou MAIS: o sentido decide",
        explicacao:
          "MAS indica OPOSIÇÃO — dá para trocar por 'porém': 'Queria ir, mas chovia'. MAIS indica QUANTIDADE — é o contrário de 'menos': 'Quero mais bolo'. Truque de detetive: se cabe 'porém', é MAS; se cabe 'menos', é MAIS.",
        exemplos: [
          { palavra: "mas", destaque: "mas", motivo: "Oposição: cabe 'porém'." },
          { palavra: "mais", destaque: "mais", motivo: "Quantidade: contrário de 'menos'." },
        ],
        desafios: [
          {
            molde: "Quero ___ suco.",
            opcoes: ["mais", "mas"],
            correta: 0,
            frase: "É quantidade: contrário de menos.",
            feedbackErro: "Troque por 'menos' e veja se faz sentido: então é MAIS.",
          },
          {
            molde: "Estudei, ___ esqueci a lição.",
            opcoes: ["mas", "mais"],
            correta: 0,
            frase: "É oposição: cabe 'porém'.",
            feedbackErro: "Troque por 'porém': se encaixa, é MAS.",
          },
        ],
      },
      {
        tipo: "regraOrtografica",
        regra: "MAL ou MAU: o contrário mostra a resposta",
        explicacao:
          "MAU é o contrário de BOM e acompanha um substantivo: 'um mau exemplo'. MAL é o contrário de BEM e acompanha um verbo: 'dormi mal'. Truque: troque por BOM ou BEM. Se couber BOM, é MAU; se couber BEM, é MAL.",
        exemplos: [
          { palavra: "mau", destaque: "mau", motivo: "Contrário de BOM: um mau dia." },
          { palavra: "mal", destaque: "mal", motivo: "Contrário de BEM: ele escreve mal." },
        ],
        desafios: [
          {
            molde: "Ele dormiu ___ ontem.",
            opcoes: ["mal", "mau"],
            correta: 0,
            frase: "Cabe BEM no lugar: então é MAL.",
            feedbackErro: "Troque por BEM: 'dormiu bem' funciona, então é MAL.",
          },
          {
            molde: "Foi um ___ exemplo.",
            opcoes: ["mau", "mal"],
            correta: 0,
            frase: "Cabe BOM no lugar: então é MAU.",
            feedbackErro: "Troque por BOM: 'um bom exemplo' funciona, então é MAU.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com lupa: as palavras destacadas são das que enganam.",
    leitura: {
      titulo: "O Caso do Bilhete Confuso",
      imagemUrl: papel,
      legendaImagem: "O bilhete com as palavras trocadas",
      destacar: ["mas", "mais", "mal"],
      paragrafos: [
        "Chegou ao clube um bilhete estranho: 'Queria ir ao clube, mais estava chovendo. Dormi mau e acordei atrazado.'",
        "Marina leu e franziu a testa. — Três palavras estão trocadas. Onde está 'mais' devia estar MAS, porque é oposição.",
        "— E 'mau' devia ser MAL, porque é o contrário de bem: dormi mal — completou ela, escrevendo a correção ao lado.",
        "— A última é ATRASADO, com S. Não existe 'atrazado' — disse Aurora, orgulhosa da aprendiz.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto sempre que precisar.",
    perguntas: [
      {
        pergunta: "Quantas palavras estavam trocadas no bilhete?",
        opcoes: ["Uma", "Duas", "Três", "Quatro"],
        correta: 2,
        feedbackAcerto: "🔍 Isso! Marina disse: 'Três palavras estão trocadas'.",
        feedbackErro: "Releia a fala de Marina no segundo parágrafo.",
        ondeEstaNoTexto: "Três palavras estão trocadas.",
        dica: "🔎 A resposta está na primeira fala de Marina.",
        reensino: "📚 Vamos rever juntos: quando a pergunta é QUANTAS, procuramos o número escrito no texto.",
      },
      {
        pergunta: "Por que 'mais' devia ser MAS no bilhete?",
        opcoes: ["Porque é oposição", "Porque é quantidade", "Porque é mais curto", "Porque começa com M"],
        correta: 0,
        feedbackAcerto: "🔍 Exato: 'porque é oposição' — cabe 'porém'.",
        feedbackErro: "Releia a explicação de Marina: ela fala de oposição.",
        ondeEstaNoTexto: "devia estar MAS, porque é oposição.",
        dica: "🔎 Procure a palavra 'oposição' no texto.",
        reensino: "📚 Vamos rever: MAS = oposição (porém); MAIS = quantidade (menos).",
      },
      {
        pergunta: "Qual é a forma correta de 'atrazado'?",
        opcoes: ["atrasado", "atrazzado", "atrassado", "atraçado"],
        correta: 0,
        feedbackAcerto: "🔍 Boa! ATRASADO, com S.",
        feedbackErro: "Aurora disse no texto: é ATRASADO, com S.",
        ondeEstaNoTexto: "A última é ATRASADO, com S.",
        dica: "🔎 A resposta está na fala de Aurora, no fim do texto.",
        reensino: "📚 Vamos rever: ATRASADO se escreve com S — é uma palavra para guardar na memória.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Aplique os truques do detetive em frases novas.",
    perguntas: [
      {
        pergunta: "Complete: 'Eu queria brincar, ___ tinha lição.'",
        opcoes: ["mas", "mais", "más", "maís"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! Cabe 'porém': é MAS.",
        feedbackErro: "Troque por 'porém': 'queria brincar, porém tinha lição'. Então é MAS.",
        dica: "🔎 Se cabe 'porém', é MAS.",
        reensino: "📚 Vamos rever: MAS = oposição; MAIS = quantidade.",
      },
      {
        pergunta: "Complete: 'Ele se sentiu ___ depois de correr.'",
        opcoes: ["mal", "mau", "mais", "mao"],
        correta: 0,
        feedbackAcerto: "🔍 Exato: cabe BEM no lugar, então é MAL.",
        feedbackErro: "Troque por BEM: 'sentiu bem' funciona, então o contrário é MAL.",
        dica: "🔎 Contrário de BEM = MAL; contrário de BOM = MAU.",
        reensino: "📚 Vamos rever: MAL acompanha verbo (contrário de bem); MAU acompanha substantivo (contrário de bom).",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize o truque do detetive para escolher entre MAS e MAIS.",
    bloco: {
      instrucao: "Do primeiro ao último passo.",
      itens: [
        { id: "p1", texto: "Leio a frase inteira e entendo o sentido dela.", imagemUrl: menina },
        { id: "p2", texto: "Testo trocar por 'porém' e por 'menos'.", imagemUrl: lupa },
        { id: "p3", texto: "Escrevo MAS se cabia 'porém'; MAIS se cabia 'menos'.", imagemUrl: lapis },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔍 Perfeito: ler, testar a troca e então escrever.",
      feedbackErro: "Primeiro leio o sentido, depois testo a troca, e só então escrevo.",
      dica: "🔎 O teste da troca vem ANTES de escrever.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Último caso do clube! Leia sozinho e resolva.",
    leitura: {
      titulo: "O Aviso do Mural",
      imagemUrl: livro,
      destacar: ["exceção", "através", "porque"],
      paragrafos: [
        "No mural do clube apareceu um aviso: 'Amanhã todos participam da reunião, sem exceção.'",
        "Embaixo, alguém escreveu: 'Entrem através do portão dos fundos, porque a porta da frente está sendo pintada.'",
        "Marina copiou as três palavras difíceis no caderno: exceção, através e porque.",
        "— Essas não têm regra: eu simplesmente reconheço — disse ela, fechando o caderno com um sorriso.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por onde os detetives devem entrar?",
        opcoes: ["Pelo portão dos fundos", "Pela porta da frente", "Pela janela", "Pelo telhado"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! 'Entrem através do portão dos fundos'.",
        feedbackErro: "Releia o segundo parágrafo do aviso.",
        ondeEstaNoTexto: "Entrem através do portão dos fundos",
        dica: "🔎 A resposta está no aviso escrito embaixo.",
        reensino: "📚 Vamos rever juntos: perguntas de POR ONDE pedem o caminho citado no texto.",
      },
      {
        pergunta: "Por que a porta da frente não pode ser usada?",
        opcoes: ["Porque está sendo pintada", "Porque está quebrada", "Porque está trancada", "Porque é estreita"],
        correta: 0,
        feedbackAcerto: "🔍 Exato: 'porque a porta da frente está sendo pintada'.",
        feedbackErro: "A explicação vem logo depois da palavra 'porque'.",
        ondeEstaNoTexto: "porque a porta da frente está sendo pintada.",
        dica: "🔎 Procure a palavra PORQUE: a causa vem depois dela.",
        reensino: "📚 Vamos rever: PORQUE apresenta a causa, a explicação do fato.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Oficina da Escrita Certa",
    instrucao:
      "RASCUNHO, REVISÃO com a lista de conferência e VERSÃO FINAL. Hoje você escreve usando as palavras que enganam.",
    blocos: [
      {
        tipo: "ditadoFrase",
        frases: [
          {
            frase: "Queria ir, mas dormi mal.",
            palavras: ["Queria", "ir,", "mas", "dormi", "mal."],
            distratores: ["mais", "mau"],
            dica: "Oposição = MAS. Contrário de BEM = MAL.",
          },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Meu relatório final de detetive",
        comando:
          "Escreva um pequeno relatório (4 a 5 linhas) contando um caso que você resolveu, usando MAS, MAIS e PORQUE ao menos uma vez cada.",
        linhas: 5,
        modelo: [
          "Meu caso começou quando achei uma pegada no quintal.",
          "Queria seguir a pista, mas começou a chover.",
          "Voltei depois e achei mais pegadas perto do muro.",
          "Descobri que era o gato do vizinho, porque tinha pelo branco na cerca.",
        ],
        checklist: [
          "Usei MAS no sentido de oposição.",
          "Usei MAIS no sentido de quantidade.",
          "Usei PORQUE para explicar uma causa.",
          "Reli em voz alta e conferi as palavras difíceis.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura de detetive: O Caso do Bilhete Confuso",
    instrucao:
      "Detetive lê rápido, mas não atropela. Leia este trecho três vezes: a 1ª devagar entendendo tudo, a 2ª no cronômetro e a 3ª em voz alta com entonação — respeitando vírgula e ponto. A meta é ler sem tropeçar, não correr.",
    texto: [
      "Queria ir ao clube, mas estava chovendo.",
      "Dormi mal e acordei atrasado.",
      "Marina leu o bilhete e corrigiu as três palavras trocadas.",
    ],
    metaSegundos: 18,
  },

  momento09_revisao: {
    pontos: [
      "Palavras irregulares (EXCEÇÃO, ATRAVÉS, ATRASADO, HOJE, MUITO) não têm regra: se reconhecem de memória.",
      "MAS indica oposição (cabe 'porém'); MAIS indica quantidade (contrário de 'menos').",
      "MAU é contrário de BOM e vem com substantivo; MAL é contrário de BEM e vem com verbo.",
      "O truque do detetive é sempre TESTAR a troca antes de escrever.",
    ],
    miniDesafio: {
      pergunta: "Complete: 'Comi ___ bolo do que ontem, ___ ainda estou com fome.'",
      opcoes: ["mais / mas", "mas / mais", "mais / mais", "mas / mas"],
      correta: 0,
      feedbackAcerto: "🔍 Isso! Quantidade primeiro (MAIS), oposição depois (MAS).",
      feedbackErro: "Na primeira lacuna cabe 'menos' (MAIS); na segunda cabe 'porém' (MAS).",
      dica: "🔎 Teste 'menos' e 'porém' em cada lacuna.",
      reensino: "📚 Vamos rever: MAIS = quantidade; MAS = oposição. Testar a troca resolve sempre.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — MAS pode ser trocado por…",
        opcoes: ["menos", "porém", "muito", "também"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! MAS = porém.",
        feedbackErro: "MAS indica oposição, igual a 'porém'.",
        feedbackOpcoes: [
          "❌ 'Menos' é o teste do MAIS, não do MAS.",
          "✅ Exato: se cabe 'porém', é MAS.",
          "❌ 'Muito' indica intensidade, não oposição.",
          "❌ 'Também' indica adição, não oposição.",
        ],
        dica: "🔎 Oposição = porém.",
        reensino: "📚 Vamos rever: MAS = oposição (porém); MAIS = quantidade (menos).",
      },
      {
        pergunta: "2/5 — Complete: 'Foi um ___ dia para pescar.'",
        opcoes: ["mal", "mau", "mais", "mas"],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Cabe BOM no lugar: é MAU.",
        feedbackErro: "Troque por BOM: 'um bom dia' funciona, então aqui é MAU.",
        feedbackOpcoes: [
          "❌ MAL acompanha verbo, não substantivo.",
          "✅ Exato: MAU é contrário de BOM e acompanha 'dia'.",
          "❌ MAIS indica quantidade.",
          "❌ MAS indica oposição.",
        ],
        dica: "🔎 Teste BOM: se encaixa, é MAU.",
        reensino: "📚 Vamos rever: MAU/BOM com substantivo; MAL/BEM com verbo.",
      },
      {
        pergunta: "3/5 — Qual palavra está escrita CERTA?",
        opcoes: ["esceção", "excessão", "exceção", "eseção"],
        correta: 2,
        feedbackAcerto: "🔍 Isso! EXCEÇÃO.",
        feedbackErro: "A forma correta é EXCEÇÃO — palavra irregular, para guardar de memória.",
        feedbackOpcoes: [
          "❌ Falta o X: não é 'esceção'.",
          "❌ Não é com SS: é com Ç.",
          "✅ Exato: EXCEÇÃO, com X e Ç.",
          "❌ Falta o XC: não é 'eseção'.",
        ],
        dica: "🔎 Lembre do relance: a palavra tem X e Ç.",
        reensino: "📚 Vamos rever: EXCEÇÃO é irregular — reconhecemos a forma inteira.",
      },
      {
        pergunta: "4/5 — Palavras irregulares se aprendem…",
        opcoes: [
          "aplicando uma regra de posição",
          "reconhecendo a forma inteira, de memória",
          "contando as sílabas",
          "trocando as letras de lugar",
        ],
        correta: 1,
        feedbackAcerto: "🔍 Isso! Sem regra, o caminho é o reconhecimento.",
        feedbackErro: "Irregular significa 'sem regra': aprendemos reconhecendo a palavra inteira.",
        feedbackOpcoes: [
          "❌ Se houvesse regra, a palavra não seria irregular.",
          "✅ Exato: reconhecimento lexical direto, de memória.",
          "❌ Contar sílabas serve para acentuação, não para irregulares.",
          "❌ Trocar letras muda a palavra e cria erro.",
        ],
        dica: "🔎 Pense no jogo do relance: a palavra piscou e você reconheceu.",
        reensino: "📚 Vamos rever: irregular = sem regra; a estratégia é reconhecer a forma inteira.",
      },
      {
        pergunta: "5/5 — Complete: 'Não fui à reunião ___ estava doente.'",
        opcoes: ["porque", "por que", "porquê", "por quê"],
        correta: 0,
        feedbackAcerto: "🔍 Isso! PORQUE junto explica a causa.",
        feedbackErro: "Aqui a frase EXPLICA o motivo: usamos PORQUE junto e sem acento.",
        feedbackOpcoes: [
          "✅ Exato: PORQUE apresenta a causa.",
          "❌ 'Por que' separado é usado em perguntas.",
          "❌ 'Porquê' com acento é substantivo: 'o porquê da história'.",
          "❌ 'Por quê' aparece no fim de perguntas.",
        ],
        dica: "🔎 A frase responde ou pergunta? Se responde, é PORQUE.",
        reensino: "📚 Vamos rever: perguntar = 'por que'; explicar = 'porque'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão final: o mural das palavras teimosas",
    materiais: ["Papel ou cartolina", "Lápis de cor", "Fita adesiva"],
    passos: [
      "1) Com um adulto, escolha 8 palavras que você sempre erra ao escrever.",
      "2) Escreva cada uma bem grande e colorida na cartolina.",
      "3) Cole o mural num lugar que você vê todo dia (porta do quarto, geladeira).",
      "4) Durante a semana, leia o mural em voz alta uma vez por dia — reconhecimento se treina com repetição.",
    ],
    registro: "📸 Tire uma foto do seu mural das palavras teimosas pronto e colado.",
  },

  recompensa: {
    xp: 180,
    moedas: 60,
    medalha: "Insígnia da Escrita Certa",
  },
};
