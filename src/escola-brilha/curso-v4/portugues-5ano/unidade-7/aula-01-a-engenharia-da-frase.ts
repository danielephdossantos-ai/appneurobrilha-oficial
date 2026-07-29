import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as quebraCabeca } from "@/assets/neuro-treino/objetos/quebra-cabeca.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as jardim } from "@/assets/neuro-treino/objetos/jardim.png.asset.json";

/**
 * Unidade 7 · Aula única — A Engenharia da Frase
 * -------------------------------------------------------------
 * Sintaxe: sujeito, predicado, concordância verbal e nominal,
 * e a coesão por substituição pronominal.
 *
 * BNCC: EF05LP06, EF05LP07, EF05LP08
 */
export const aula1: AulaPortuguesV4 = {
  slug: "aula-01-a-engenharia-da-frase",
  titulo: "A Engenharia da Frase: Sujeito, Predicado e Concordância",
  iconeTrilha: "🔧",
  bncc: ["EF05LP06", "EF05LP07", "EF05LP08"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "As frases desmontadas",
    historia:
      "— {NOME}, as frases da oficina caíram no chão e se remontaram erradas: 'os menino corre no jardim'! Falta engenharia. Toda frase tem duas peças-mestras: o sujeito (de quem se fala) e o predicado (o que se diz dele). E elas precisam combinar em número e gênero. Vamos apertar os parafusos.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Compare as duas frases da bancada e descubra qual peça está frouxa.",
    bloco: {
      titulo: "Bancada da oficina",
      capaImagemUrl: quebraCabeca,
      pistas: [
        { imagemUrl: robo, nome: "O robô montador" },
        { imagemUrl: bloco, nome: "As peças da frase" },
      ],
      recado: {
        rotulo: "Frases da bancada",
        icone: "🔧",
        linhas: [
          "Frase A: Os meninos correm no jardim.",
          "Frase B: Os menino corre no jardim.",
        ],
        estilo: "cartaz",
      },
      pergunta: "O que está errado na frase B?",
      hipoteses: [
        { texto: "O sujeito está no plural, mas o substantivo e o verbo ficaram no singular" },
        { texto: "A frase B é curta demais" },
        { texto: "Falta uma vírgula" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔧 Exato! 'Os' pede 'meninos' (concordância nominal) e 'meninos' pede 'correm' (concordância verbal).",
      feedbackErro: "Compare palavra por palavra: os / menino / corre. Alguma delas não combina com as outras.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três peças-mestras da engenharia da frase.",
    cards: [
      {
        palavra: "sujeito",
        explicacao:
          "É de quem ou do que a frase fala. Para achar, pergunte ao verbo: quem? o quê?",
        exemplo: "'Os meninos correm.' Quem corre? Os meninos → sujeito.",
        imagemUrl: bloco,
      },
      {
        palavra: "predicado",
        explicacao: "É tudo o que se declara sobre o sujeito. Sempre contém o verbo.",
        exemplo: "'Os meninos correm no jardim.' Predicado: correm no jardim.",
        imagemUrl: jardim,
      },
      {
        palavra: "concordância",
        explicacao:
          "Verbal: o verbo combina com o sujeito em número e pessoa. Nominal: artigo e adjetivo combinam com o substantivo em gênero e número.",
        exemplo: "As casas antigas são bonitas. (todas no feminino plural)",
        imagemUrl: robo,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Lousa do professor · Sujeito, predicado e concordância",
    instrucao:
      "O professor desmonta a frase na lousa, peça por peça, e mostra por que o verbo muda de forma.",
    blocos: [
      {
        tipo: "licaoLousa",
        regra:
          "Toda oração tem um verbo. Sujeito é quem pratica ou sobre quem se declara algo; predicado é tudo o que se declara — e o verbo concorda em número e pessoa com o núcleo do sujeito.",
        comoIdentificar:
          "Ache primeiro o VERBO. Depois pergunte ao verbo: 'quem?'. A resposta é o sujeito; o resto é predicado.",
        passos: [
          {
            frase: "O gato dormiu na janela.",
            destaque: ["O gato", "dormiu na janela"],
            analise:
              "Verbo: dormiu. Quem dormiu? O gato → sujeito, cujo núcleo é 'gato'. Tudo o que sobra ('dormiu na janela') é o predicado. Núcleo no singular, verbo no singular.",
          },
          {
            frase: "Os gatos dormiram na janela.",
            destaque: ["Os gatos", "dormiram"],
            analise:
              "O núcleo foi para o plural ('gatos') e o verbo obrigatoriamente acompanhou: dormiram. Isso é concordância verbal — o verbo não escolhe sozinho, ele obedece ao sujeito.",
          },
          {
            frase: "Os gatos da minha vizinha dormiram na janela.",
            destaque: ["gatos", "da minha vizinha", "dormiram"],
            analise:
              "'da minha vizinha' é só um complemento que acompanha o núcleo; ele não manda no verbo. O núcleo continua sendo 'gatos', por isso 'dormiram' no plural — ainda que 'vizinha' esteja no singular logo antes do verbo.",
            nota: "Armadilha clássica: a palavra mais próxima do verbo nem sempre é o núcleo do sujeito.",
          },
          {
            frase: "Choveu a noite inteira.",
            destaque: ["Choveu"],
            analise:
              "Não há a quem perguntar 'quem?': verbos que indicam fenômeno da natureza não têm sujeito. A oração é sem sujeito e o verbo fica sempre na 3ª pessoa do singular.",
          },
        ],
        comparacao: {
          errado: "Os alunos da turma chegou atrasado.",
          certo: "Os alunos da turma chegaram atrasados.",
          porque:
            "O núcleo do sujeito é 'alunos' (plural), não 'turma'. Verbo e adjetivo do predicado acompanham o núcleo: chegaram / atrasados.",
        },
        curiosidade:
          "Em português, o sujeito pode ficar oculto porque a terminação do verbo já indica a pessoa: 'Fomos ao cinema' dispensa o 'nós'. Em inglês isso é impossível — o pronome é obrigatório.",
        resumo: [
          "Ache o verbo, pergunte 'quem?' e você achou o sujeito.",
          "O verbo concorda com o NÚCLEO do sujeito, não com a palavra mais próxima.",
          "Predicado é tudo o que se declara sobre o sujeito.",
          "Verbo de fenômeno natural: oração sem sujeito, 3ª pessoa do singular.",
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia observando quem pratica a ação em cada frase e como as palavras combinam.",
    leitura: {
      titulo: "O manual do engenheiro de frases",
      imagemUrl: robo,
      legendaImagem: "O robô montador da oficina",
      destacar: ["quem?", "combinar", "ele, ela, eles"],
      paragrafos: [
        "Para descobrir o sujeito de uma frase, o engenheiro localiza primeiro o verbo e depois pergunta 'quem?'. Em 'as flores do jardim murcharam com o calor', o verbo é murcharam. Quem murchou? As flores. Esse é o sujeito; todo o resto é predicado.",
        "Depois vem o ajuste das peças. Se o sujeito está no plural, o verbo também vai para o plural: as flores murcharam, e não as flores murchou. Isso é concordância verbal.",
        "Dentro do sujeito, artigo e adjetivo precisam combinar com o substantivo: as flores amarelas, e não as flores amarelo. Isso é concordância nominal.",
        "Por fim, para não repetir a mesma palavra o tempo todo, o engenheiro troca o substantivo por um pronome: 'as flores murcharam, mas elas voltaram a abrir na semana seguinte'. Esse recurso chama-se coesão.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão no manual.",
    perguntas: [
      {
        pergunta: "Qual é a pergunta que revela o sujeito da frase?",
        opcoes: [
          "'Quem?' ou 'o quê?', feita ao verbo",
          "'Onde?', feita ao lugar",
          "'Quando?', feita ao tempo",
        ],
        correta: 0,
        feedbackAcerto: "🔧 Localizar o verbo e perguntar 'quem?' é o método do engenheiro.",
        feedbackErro: "Releia o primeiro parágrafo do manual.",
        ondeEstaNoTexto: "o engenheiro localiza primeiro o verbo e depois pergunta 'quem?'.",
      },
      {
        pergunta: "Em 'as flores do jardim murcharam com o calor', qual é o sujeito?",
        opcoes: ["as flores do jardim", "com o calor", "murcharam"],
        correta: 0,
        feedbackAcerto: "🔧 Quem murchou? As flores do jardim.",
        feedbackErro: "'Murcharam' é o verbo, e 'com o calor' é circunstância. Falta responder 'quem?'.",
        ondeEstaNoTexto: "Quem murchou? As flores. Esse é o sujeito; todo o resto é predicado.",
      },
      {
        pergunta: "Para que serve a substituição por pronome?",
        opcoes: [
          "Para evitar repetição e dar coesão ao texto",
          "Para deixar o texto maior",
          "Para mudar o sujeito da frase",
        ],
        correta: 0,
        feedbackAcerto: "🔧 Coesão: o texto fica costurado sem repetir palavras.",
        feedbackErro: "Veja o último parágrafo do manual.",
        ondeEstaNoTexto: "para não repetir a mesma palavra o tempo todo, o engenheiro troca o substantivo por um pronome.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Aperte os parafusos da concordância.",
    perguntas: [
      {
        pergunta: "Qual frase está correta?",
        opcoes: [
          "As crianças brincaram no pátio.",
          "As criança brincou no pátio.",
          "As crianças brincou no pátio.",
        ],
        correta: 0,
        feedbackAcerto: "🔧 Sujeito plural, verbo plural, substantivo plural. Tudo alinhado.",
        feedbackErro: "Se o artigo é 'as', tudo depois precisa ir para o plural.",
      },
      {
        pergunta: "Em 'o gato preto dormiu no sofá', o predicado é…",
        opcoes: ["dormiu no sofá", "o gato preto", "no sofá"],
        correta: 0,
        feedbackAcerto: "🔧 O predicado começa no verbo e vai até o fim.",
        feedbackErro: "O sujeito é quem dormiu. O predicado é o que se diz dele.",
      },
      {
        pergunta: "Qual é a forma correta de concordância nominal?",
        opcoes: [
          "duas casas antigas",
          "duas casa antigo",
          "dois casas antigas",
        ],
        correta: 0,
        feedbackAcerto: "🔧 Feminino plural do começo ao fim.",
        feedbackErro: "Numeral, substantivo e adjetivo precisam ter o mesmo gênero e número.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque em ordem o método de análise do engenheiro.",
    bloco: {
      instrucao: "Arraste os passos para a ordem correta.",
      itens: [
        { id: "q1", texto: "Localizar o verbo da frase" },
        { id: "q2", texto: "Perguntar 'quem?' para achar o sujeito" },
        { id: "q3", texto: "Marcar o predicado (o que se diz do sujeito)" },
        { id: "q4", texto: "Conferir se verbo, artigo e adjetivo concordam" },
      ],
      ordemCerta: ["q1", "q2", "q3", "q4"],
      feedbackAcerto: "🔧 Método completo: verbo, sujeito, predicado, concordância.",
      feedbackErro: "Tudo começa pelo verbo — é ele que revela quem pratica a ação.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia sozinho e observe como o pronome evita a repetição.",
    leitura: {
      titulo: "O gato e a janela",
      imagemUrl: gato,
      destacar: ["ele", "a janela", "ela"],
      paragrafos: [
        "Sem coesão: O gato subiu na janela. O gato olhou a rua. O gato dormiu. A janela ficou aberta. A janela deixou o vento entrar.",
        "Com coesão: O gato subiu na janela. Ele olhou a rua e dormiu ali mesmo. A janela ficou aberta, e ela deixou o vento entrar a noite toda.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que a segunda versão é melhor?",
        opcoes: [
          "Porque os pronomes 'ele' e 'ela' substituem as palavras repetidas",
          "Porque é mais comprida",
          "Porque tem mais verbos",
        ],
        correta: 0,
        feedbackAcerto: "🔧 Coesão pronominal: o texto flui sem repetir.",
        feedbackErro: "Compare quantas vezes 'o gato' aparece em cada versão.",
        ondeEstaNoTexto: "Ele olhou a rua e dormiu ali mesmo... e ela deixou o vento entrar.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "A Oficina de Montagem",
    instrucao: "Selecione todas as frases que estão com a CONCORDÂNCIA correta.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "A Oficina de Montagem",
      bloco: {
        instrucao: "Toque nas frases bem montadas para liberá-las da oficina.",
        pergunta: "Quais frases estão corretas?",
        opcoes: [
          { id: "c1", texto: "Os alunos entregaram os trabalhos.", correto: true },
          { id: "c2", texto: "As menina cantou bonito.", correto: false },
          { id: "c3", texto: "Duas casas antigas foram pintadas.", correto: true },
          { id: "c4", texto: "O cachorro late alto.", correto: true },
          { id: "c5", texto: "Os professor chegaram cedo.", correto: false },
        ],
        feedbackAcerto: "🔧 Oficina em ordem! Todas as peças combinam em gênero e número.",
        feedbackErro: "Confira artigo, substantivo e verbo: os três precisam estar no mesmo número.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Sujeito é de quem se fala; ache perguntando 'quem?' ao verbo.",
      "Predicado é o que se declara do sujeito e contém o verbo.",
      "Concordância verbal: verbo combina com o sujeito.",
      "Concordância nominal: artigo e adjetivo combinam com o substantivo.",
      "Pronomes substituem palavras repetidas e criam coesão.",
    ],
    miniDesafio: {
      pergunta: "Em 'as bicicletas novas chegaram', o sujeito é…",
      opcoes: ["as bicicletas novas", "chegaram", "novas"],
      correta: 0,
      feedbackAcerto: "🔧 Quem chegou? As bicicletas novas.",
      feedbackErro: "Ache o verbo (chegaram) e pergunte 'quem?'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Qual frase apresenta concordância correta?",
        opcoes: [
          "Os alunos entregaram os trabalhos.",
          "Os aluno entregou os trabalho.",
          "Os alunos entregou os trabalhos.",
        ],
        correta: 0,
        feedbackAcerto: "🔧 Excelente! Você recebeu a Chave de Fenda do Engenheiro de Frases.",
        feedbackErro: "Sujeito no plural exige verbo no plural e substantivos no plural.",
      },
      {
        pergunta: "Em 'a professora explicou a atividade', o predicado é…",
        opcoes: ["explicou a atividade", "a professora", "a atividade"],
        correta: 0,
        feedbackAcerto: "🔧 Começa no verbo e vai até o fim da frase.",
        feedbackErro: "O sujeito é quem explicou; o predicado é o que ela fez.",
      },
      {
        pergunta: "Qual opção corrige 'as flores amarelo murchou'?",
        opcoes: [
          "as flores amarelas murcharam",
          "a flores amarela murchou",
          "as flor amarelas murcharam",
        ],
        correta: 0,
        feedbackAcerto: "🔧 Feminino plural em todas as peças, verbo no plural.",
        feedbackErro: "Coloque artigo, substantivo, adjetivo e verbo no mesmo número.",
      },
      {
        pergunta: "Na frase 'Pedro comprou um livro. Ele o leu em dois dias', o pronome 'ele' substitui…",
        opcoes: ["Pedro", "o livro", "dois dias"],
        correta: 0,
        feedbackAcerto: "🔧 'Ele' retoma Pedro; 'o' retoma o livro.",
        feedbackErro: "Quem leu o livro? Esse é o referente de 'ele'.",
      },
      {
        pergunta: "Repetir a mesma palavra várias vezes no texto prejudica…",
        opcoes: ["a coesão", "a ortografia", "a acentuação"],
        correta: 0,
        feedbackAcerto: "🔧 Coesão é a costura do texto — pronomes ajudam a mantê-la.",
        feedbackErro: "Volte ao exemplo do gato e da janela.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A Oficina de Frases em Casa",
    materiais: ["Papel e lápis"],
    passos: [
      "Peça a alguém da família que diga três frases sobre o dia dele.",
      "Escreva as frases e sublinhe o sujeito de cada uma.",
      "Coloque o sujeito de uma delas no plural e ajuste o verbo.",
      "Reescreva a última frase trocando o sujeito por um pronome.",
    ],
    registro: "Traga as três frases com o sujeito sublinhado e a versão no plural.",
  },

  recompensa: {
    xp: 130,
    moedas: 45,
    medalha: "🔧 Chave de Fenda do Engenheiro de Frases",
  },
};
