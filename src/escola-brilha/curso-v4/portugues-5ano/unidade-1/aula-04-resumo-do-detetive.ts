import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as tv } from "@/assets/neuro-treino/objetos/tv-moderna.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 4 — O Resumo do Detetive
 * -------------------------------------------------------------
 * Encerramento da Unidade 1 (O Detetive da Leitura). O detetive
 * aprende a técnica de fechar um caso: contar a história inteira
 * usando poucas palavras, sem copiar frases prontas do texto e
 * sem perder a ideia central. A técnica ensinada é: (1) apagar
 * detalhes que não mudam o sentido geral; (2) agrupar informações
 * parecidas numa só frase; (3) reescrever tudo com as próprias
 * palavras.
 *
 * BNCC: EF05LP02, EF15LP03
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-resumo-do-detetive",
  titulo: "O Resumo do Detetive",
  iconeTrilha: "📝",
  bncc: ["EF05LP02", "EF15LP03"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O caderno de casos fechados",
    historia:
      "Brilha abriu um caderno cheio de anotações compridas. — Cada caso que resolvemos até agora rendeu páginas e páginas de pistas. Mas quando eu conto um caso pra outro detetive, não leio tudo isso de novo: eu conto o resumo. Um bom resumo pega a ideia central da história, apaga os detalhes que não fazem falta, junta o que é parecido, e conta tudo com as PRÓPRIAS palavras — sem copiar frase por frase. Hoje você vai aprender a fechar um caso com um resumo digno de um detetive de verdade.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao:
      "Leia as duas versões do mesmo aviso: uma é o texto original, comprido; a outra é um resumo. Descubra qual característica um bom resumo deve ter.",
    bloco: {
      titulo: "O Aviso e o Resumo",
      capaImagemUrl: papel,
      pistas: [
        { imagemUrl: livro, nome: "Um texto original, cheio de detalhes" },
        { imagemUrl: lapis, nome: "Um resumo escrito com outras palavras" },
      ],
      recado: {
        rotulo: "Comparando as duas versões",
        icone: "📋",
        linhas: [
          "ORIGINAL: 'A biblioteca da escola vai ficar aberta na hora do almoço, das 12h às 13h, às terças e quintas, para quem quiser ler, estudar ou pegar livros emprestados.'",
          "RESUMO: 'A biblioteca abre no almoço, às terças e quintas.'",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que o resumo fez com as informações do texto original?",
      hipoteses: [
        { texto: "Manteve a ideia principal (quando abre) e cortou detalhes menos importantes, com outras palavras" },
        { texto: "Copiou a mesma frase do original, só que mais curta" },
        { texto: "Inventou uma informação nova que não estava no texto" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "📝 Isso mesmo! O resumo manteve o essencial (quando a biblioteca abre) e deixou de fora o horário exato e o motivo — detalhes que não mudam a ideia principal do aviso.",
      feedbackErro:
        "Compare as duas frases: o resumo não copiou palavra por palavra, e também não inventou nada. Ele guardou só o que era mais importante, com outras palavras.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras que são as ferramentas do detetive para fechar um caso.",
    cards: [
      {
        palavra: "resumir",
        explicacao:
          "É contar uma história ou um texto usando bem menos palavras, guardando só a ideia central e o que é mais importante.",
        exemplo: "Depois de ler um livro grande, você pode resumir a história em poucas frases.",
        imagemUrl: lupa,
      },
      {
        palavra: "detalhe",
        explicacao:
          "É uma informação pequena, que enriquece o texto, mas que pode ser deixada de fora de um resumo sem mudar a ideia principal.",
        exemplo: "A cor da mochila do personagem costuma ser um detalhe, não a ideia central da história.",
        imagemUrl: bussola,
      },
      {
        palavra: "agrupar",
        explicacao:
          "É juntar informações parecidas numa única frase, em vez de repetir uma frase para cada uma delas.",
        exemplo: "Em vez de dizer 'ele comprou pão, comprou leite e comprou ovos', pode-se agrupar: 'ele fez compras no mercado'.",
        imagemUrl: bloco,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com atenção: depois vamos treinar a apagar detalhes, agrupar ideias e reescrever tudo com nossas palavras.",
    leitura: {
      titulo: "O Sumiço do Troféu",
      imagemUrl: tv,
      legendaImagem: "Preste atenção no que é essencial para a história",
      destacar: ["troféu de leitura da escola", "desapareceu do mural", "escondido dentro do armário de materiais", "devolvido no dia seguinte"],
      paragrafos: [
        "Na sexta-feira de manhã, o troféu de leitura da escola, entregue todo mês à turma que mais lia, desapareceu do mural da entrada. A diretora ficou preocupada e pediu que todos ajudassem a procurar.",
        "Durante o dia, alunos de várias turmas contaram histórias diferentes: alguns diziam ter visto o zelador levando uma caixa, outros achavam que tinha sido um aluno mais velho brincando. Ninguém tinha certeza de nada.",
        "À tarde, dois alunos do 5º ano resolveram investigar sozinhos. Eles seguiram pistas de poeira no chão e encontraram o troféu escondido dentro do armário de materiais de limpeza, onde tinha caído sem querer durante a faxina da manhã.",
        "O caso foi resolvido: não havia mistério nenhum, apenas um acidente. O troféu foi devolvido ao mural no dia seguinte, e a diretora agradeceu aos dois alunos por não terem desistido de procurar a verdade.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao texto sempre que precisar confirmar sua resposta.",
    perguntas: [
      {
        pergunta: "O que desapareceu do mural da escola?",
        opcoes: ["O troféu de leitura", "Um cartaz de aviso", "Uma foto da turma"],
        correta: 0,
        feedbackAcerto: "📝 Isso! O texto diz que 'o troféu de leitura da escola... desapareceu do mural'.",
        feedbackErro: "Releia o primeiro parágrafo: ele diz exatamente o que sumiu do mural.",
        ondeEstaNoTexto: "…o troféu de leitura da escola… desapareceu do mural da entrada.",
      },
      {
        pergunta: "Onde o troféu foi encontrado?",
        opcoes: [
          "Dentro do armário de materiais de limpeza",
          "Na sala da diretora",
          "No pátio da escola",
        ],
        correta: 0,
        feedbackAcerto: "📝 Exato! O texto explica onde os alunos encontraram o troféu.",
        feedbackErro: "Releia o terceiro parágrafo: ele diz onde estava o troféu escondido.",
        ondeEstaNoTexto: "…encontraram o troféu escondido dentro do armário de materiais de limpeza…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora o trabalho fino do detetive: separar o que é essencial (fica no resumo) do que é detalhe (pode ser apagado).",
    perguntas: [
      {
        pergunta: "Qual dessas informações é um DETALHE que pode ser deixado de fora de um resumo do texto?",
        opcoes: [
          "Ser de manhã (sexta-feira) quando o troféu sumiu",
          "O troféu ter desaparecido do mural",
          "O troféu ter sido encontrado por dois alunos",
        ],
        correta: 0,
        feedbackAcerto:
          "📝 Isso mesmo! Saber que era 'sexta-feira de manhã' é um detalhe de tempo — não muda a ideia central da história, que é o sumiço e a descoberta do troféu.",
        feedbackErro:
          "Pense: o dia e a hora exatos ajudam a enriquecer o texto, mas não são essenciais para entender o que aconteceu. Isso é um detalhe.",
      },
      {
        pergunta: "Como agrupar, em uma só frase, a parte em que 'alguns diziam ter visto o zelador' e 'outros achavam que tinha sido um aluno mais velho'?",
        opcoes: [
          "'Os alunos contaram histórias diferentes, mas ninguém tinha certeza.'",
          "'O zelador escondeu o troféu de propósito.'",
          "'Um aluno mais velho confessou o sumiço.'",
        ],
        correta: 0,
        feedbackAcerto:
          "📝 Correto! Essa frase junta as duas versões dos alunos numa ideia só, sem precisar repetir cada boato separadamente.",
        feedbackErro:
          "Releia o segundo parágrafo: as duas versões diferentes podem virar uma única frase que resume 'ninguém tinha certeza do que houve'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize as ideias principais da história na ordem certa, como faria num resumo.",
    bloco: {
      instrucao: "Do início ao fim do caso do troféu.",
      itens: [
        { id: "p1", texto: "O troféu de leitura sumiu do mural da escola.", imagemUrl: bussola },
        { id: "p2", texto: "Os alunos contaram versões diferentes, sem certeza.", imagemUrl: papel },
        { id: "p3", texto: "Dois alunos investigaram e acharam o troféu no armário.", imagemUrl: lupa },
        { id: "p4", texto: "O troféu voltou ao mural e a diretora agradeceu.", imagemUrl: biblioteca },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "📝 Perfeito! Essa é a ordem das 4 ideias principais — um ótimo esqueleto para um resumo.",
      feedbackErro: "Pense na lógica da história: primeiro o problema (sumiço), depois a confusão, a investigação e, por fim, a solução.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e pense em como você resumiria essa história com suas próprias palavras.",
    leitura: {
      titulo: "A Horta que Cresceu Rápido Demais",
      imagemUrl: celular,
      destacar: ["horta comunitária no fundo da escola", "cresceu o dobro do esperado em duas semanas", "professora de ciências descobriu", "adubo natural em excesso"],
      paragrafos: [
        "No mês passado, a turma do 5º ano plantou uma horta comunitária no fundo da escola, com alface, cenoura e tomate. Cada aluno cuidava de um pedacinho, regando as plantas todos os dias antes da primeira aula.",
        "Depois de duas semanas, os alunos perceberam algo estranho: as plantas tinham crescido o dobro do que era esperado para aquele tempo, e as folhas estavam enormes.",
        "Curiosa, a professora de ciências decidiu investigar junto com a turma. Depois de conversar com o zelador, ela descobriu que ele tinha colocado adubo natural em excesso, achando que ajudaria mais rápido.",
        "A turma aprendeu, na prática, que até uma coisa boa, como o adubo, precisa ser usada na quantidade certa. Depois disso, todos passaram a medir a quantidade de adubo com mais cuidado.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que a turma do 5º ano plantou no fundo da escola?",
        opcoes: ["Uma horta comunitária", "Um jardim de flores", "Uma árvore frutífera"],
        correta: 0,
        feedbackAcerto: "📝 Isso! O texto conta que a turma plantou uma horta comunitária.",
        feedbackErro: "Releia o primeiro parágrafo: ele diz o que foi plantado no fundo da escola.",
        ondeEstaNoTexto: "…a turma do 5º ano plantou uma horta comunitária no fundo da escola…",
      },
      {
        pergunta: "Qual dessas frases resumiria melhor a história, sem copiar o texto e sem perder a ideia central?",
        opcoes: [
          "'A horta cresceu rápido demais por causa de excesso de adubo, e a turma aprendeu a usar a quantidade certa.'",
          "'A turma plantou alface, cenoura e tomate, regando todos os dias antes da primeira aula.'",
          "'O zelador da escola cuida da horta comunitária no fundo do pátio.'",
        ],
        correta: 0,
        feedbackAcerto: "📝 Exato! Essa frase junta o problema (crescimento excessivo), a causa (excesso de adubo) e o aprendizado, sem copiar o texto original.",
        feedbackErro: "Pense: um bom resumo precisa contar o problema, a causa e o aprendizado — não apenas repetir um detalhe do texto.",
        ondeEstaNoTexto: "…ela descobriu que ele tinha colocado adubo natural em excesso… A turma aprendeu, na prática, que até uma coisa boa… precisa ser usada na quantidade certa.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Oficina de Resumos do Detetive",
    instrucao: "Arraste cada frase para o prato certo: ela é uma IDEIA ESSENCIAL (fica no resumo) ou um DETALHE (pode ser apagado)?",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Essencial ou Detalhe?",
      bloco: {
        instrucao: "Leia cada frase e decida: ela é indispensável para entender a história (essencial), ou é uma informação a mais (detalhe)?",
        itens: [
          { id: "i1", texto: "O cachorro fugiu de casa durante a tempestade", alvoId: "essencial" },
          { id: "i2", texto: "O cachorro tinha uma coleira vermelha", alvoId: "detalhe" },
          { id: "i3", texto: "A família encontrou o cachorro dois dias depois", alvoId: "essencial" },
          { id: "i4", texto: "Eram exatamente 15h32 quando ele fugiu", alvoId: "detalhe" },
          { id: "i5", texto: "O cachorro estava escondido embaixo de uma varanda", alvoId: "essencial" },
          { id: "i6", texto: "A varanda era pintada de azul-claro", alvoId: "detalhe" },
        ],
        alvos: [
          { id: "essencial", nome: "ESSENCIAL (fica no resumo)" },
          { id: "detalhe", nome: "DETALHE (pode ser apagado)" },
        ],
        feedbackAcerto: "📝 Isso! Você já sabe escolher o que realmente importa num resumo.",
        feedbackErro: "Pense: se a frase muda o rumo da história, é essencial. Se é só um enfeite que poderia ser diferente sem alterar o caso, é detalhe.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Resumir é contar a história com bem menos palavras, guardando a ideia central.",
      "Detalhes (nomes exatos, horários, cores, número de páginas...) geralmente podem ser apagados sem prejudicar o entendimento.",
      "Informações parecidas podem ser agrupadas numa única frase, em vez de repetidas uma por uma.",
      "Um bom resumo é escrito com as PRÓPRIAS palavras — nunca copiando frases inteiras do texto original.",
    ],
    miniDesafio: {
      pergunta: "Qual das opções abaixo é um bom resumo de 'Chovia muito, então a professora cancelou o recreio no pátio e todos brincaram na sala de aula'?",
      opcoes: [
        "'Por causa da chuva, o recreio foi na sala de aula.'",
        "'Chovia muito, então a professora cancelou o recreio no pátio e todos brincaram na sala de aula.'",
        "'Todos os alunos adoram brincar na sala de aula.'",
      ],
      correta: 0,
      feedbackAcerto: "📝 Isso! Essa frase mantém a ideia central (chuva → recreio mudou de lugar) com poucas palavras próprias.",
      feedbackErro: "A segunda opção só copia a frase original; a terceira inventa uma opinião que o texto não afirma. A ideal resume com outras palavras.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que significa 'resumir' um texto?",
        opcoes: [
          "Contar a ideia central usando bem menos palavras, com as próprias palavras",
          "Copiar o texto inteiro, palavra por palavra",
          "Escrever um texto totalmente diferente do original",
        ],
        correta: 0,
        feedbackAcerto: "📝 Isso! Resumir é reduzir mantendo a ideia central, sem copiar nem inventar.",
        feedbackErro: "Resumir não é copiar tudo, nem inventar uma história nova — é manter o essencial, com poucas palavras próprias.",
      },
      {
        pergunta: "2/5 — O que é um 'detalhe', num texto?",
        opcoes: [
          "Uma informação pequena que pode ser deixada de fora de um resumo",
          "A parte mais importante da história",
          "O título do texto",
        ],
        correta: 0,
        feedbackAcerto: "📝 Correto! Detalhes enriquecem o texto, mas geralmente não são indispensáveis num resumo.",
        feedbackErro: "Detalhe não é a parte mais importante — é justamente o que pode ser apagado sem perder o sentido geral.",
      },
      {
        pergunta: "3/5 — No caso do troféu sumido, qual seria um bom resumo?",
        opcoes: [
          "O troféu sumiu do mural, os alunos investigaram e o encontraram no armário de limpeza.",
          "Na sexta-feira de manhã, o troféu de leitura da escola, entregue todo mês à turma que mais lia, desapareceu do mural da entrada.",
          "A escola tem um troféu de leitura muito bonito.",
        ],
        correta: 0,
        feedbackAcerto: "📝 Isso! Essa frase junta o problema, a ação e a solução, sem copiar o texto original.",
        feedbackErro: "A segunda opção copia o texto original palavra por palavra; a terceira ignora a história e só descreve o objeto.",
      },
      {
        pergunta: "4/5 — Por que agrupar informações parecidas ajuda a resumir?",
        opcoes: [
          "Porque evita repetir várias frases sobre a mesma ideia, deixando o texto mais curto",
          "Porque torna o resumo mais comprido que o original",
          "Porque esconde a ideia central do texto",
        ],
        correta: 0,
        feedbackAcerto: "📝 Exato! Agrupar deixa o resumo mais enxuto sem perder informação importante.",
        feedbackErro: "Agrupar serve justamente para deixar o resumo mais curto, sem esconder nem repetir a ideia central.",
      },
      {
        pergunta: "5/5 — Por que um bom resumo deve ser escrito com as PRÓPRIAS palavras?",
        opcoes: [
          "Porque isso mostra que o leitor realmente entendeu o texto, e não só copiou frases",
          "Porque copiar frases é sempre mais rápido e mais correto",
          "Porque um resumo não pode ter nenhuma palavra do texto original",
        ],
        correta: 0,
        feedbackAcerto: "📝 Isso! Você já sabe fechar um caso com um resumo de verdadeiro detetive. Caso encerrado! 🌟",
        feedbackErro: "Usar as próprias palavras (mesmo repetindo alguma palavra-chave do texto) mostra compreensão de verdade, não só cópia.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: o resumo em uma frase",
    materiais: ["Um livro, um episódio de desenho ou um filme já visto em família", "Papel e lápis"],
    passos: [
      "1) Escolham juntos uma história que a criança conhece bem (livro, desenho ou filme).",
      "2) A criança conta a história inteira, com todos os detalhes que lembrar.",
      "3) Depois, desafie: 'Agora conte a mesma história em só 3 frases, sem copiar nenhuma fala do personagem.'",
      "4) Conversem sobre quais detalhes foram apagados e por que eles não fizeram falta.",
    ],
    registro: "🗣️ Registre por escrito ou em áudio o resumo final de 3 frases criado pela criança.",
  },

  recompensa: {
    xp: 150,
    moedas: 90,
    medalha: "Lupa de Ouro",
  },
};
