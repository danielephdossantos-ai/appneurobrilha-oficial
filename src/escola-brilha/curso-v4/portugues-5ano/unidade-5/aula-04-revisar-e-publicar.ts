import type { AulaPortuguesV4 } from "../../types";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as quadroAlegre } from "@/assets/neuro-treino/objetos/quadro-alegre.png.asset.json";
import { url as presente } from "@/assets/neuro-treino/objetos/presente.png.asset.json";
import { url as biblioteca } from "@/assets/neuro-treino/objetos/biblioteca.png.asset.json";

/**
 * Aula 4 — Revisar e publicar
 * -------------------------------------------------------------
 * Unidade 5 · Diário de Escritor (5º ano)
 * Foco: revisar o próprio texto (ortografia, pontuação, concordância,
 * clareza), reescrever o que precisa melhorar e produzir a versão
 * final, pronta para ser "publicada" (compartilhada).
 * BNCC: EF05LP25, EF05LP27
 */
export const aula4: AulaPortuguesV4 = {
  slug: "aula-04-revisar-e-publicar",
  titulo: "Revisar e publicar",
  iconeTrilha: "🔍",
  bncc: ["EF05LP25", "EF05LP27"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A lupa mágica do escritor",
    historia:
      "Brilha pegou uma lupa enorme. — Depois de escrever o rascunho, chega a hora mais importante: REVISAR! Com essa lupa, a gente olha com cuidado para a ortografia, a pontuação, se as palavras combinam entre si (concordância) e se as ideias estão claras. Depois de revisar e melhorar o texto, ele fica pronto para ser PUBLICADO, ou seja, compartilhado com outras pessoas: no mural da escola, num livro da turma, ou lido em voz alta. Vamos aprender a revisar como um verdadeiro escritor?",
    imagemUrl: lupa,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de começar.",
    bloco: {
      titulo: "A Oficina de Revisão",
      capaImagemUrl: lupa,
      pistas: [
        { imagemUrl: papel, nome: "Um texto com anotações" },
        { imagemUrl: mural, nome: "Um mural para expor textos" },
      ],
      pergunta: "Sobre o que essa aula vai ensinar?",
      hipoteses: [
        { texto: "Como fazer uma lupa de papelão.", imagemUrl: lupa },
        { texto: "Como revisar e melhorar um texto antes de publicá-lo.", imagemUrl: papel },
        { texto: "Como decorar o mural da sala.", imagemUrl: mural },
      ],
      respostaCerta: 1,
      feedbackAcerto: "🎉 Isso mesmo! Vamos aprender a revisar o texto e deixá-lo pronto para ser compartilhado.",
      feedbackErro: "Pense na lupa: ela ajuda a enxergar detalhes pequenos, como erros no texto que precisam ser corrigidos.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Conheça as palavras da revisão de texto.",
    cards: [
      {
        palavra: "revisão",
        explicacao: "Momento em que o escritor relê o próprio texto procurando erros e formas de melhorá-lo.",
        exemplo: "Na revisão, encontrei duas palavras escritas errado.",
        imagemUrl: lupa,
      },
      {
        palavra: "concordância",
        explicacao: "Quando as palavras da frase combinam em número (singular/plural) e gênero (masculino/feminino).",
        exemplo: "'As meninas estudaram' está certo; 'As menina estudou' está errado, sem concordância.",
        imagemUrl: quadroAlegre,
      },
      {
        palavra: "clareza",
        explicacao: "Quando o texto é fácil de entender, sem frases confusas ou incompletas.",
        exemplo: "Reescrevi a frase para ficar mais clara e fácil de entender.",
        imagemUrl: estrela,
      },
      {
        palavra: "versão final",
        explicacao: "O texto depois de revisado e corrigido, pronto para ser lido por outras pessoas.",
        exemplo: "Depois de três revisões, terminei a versão final da minha redação.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Vendo a revisão acontecer",
    instrucao: "Ouça o Brilha mostrando como corrigir um texto.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Eu fui na escola onte. (rascunho com erro)", explicacao: "Erro de ORTOGRAFIA: 'onte' deveria ser 'ontem'." },
          { texto: "Eu fui à escola ontem. (corrigido)", explicacao: "Depois da revisão, a ortografia foi corrigida." },
          { texto: "As menina brincou no parque. (rascunho com erro)", explicacao: "Erro de CONCORDÂNCIA: 'menina' e 'brincou' estão no singular, mas 'as' pede plural." },
          { texto: "As meninas brincaram no parque. (corrigido)", explicacao: "Agora todas as palavras concordam entre si, no plural." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha explicou como revisar e publicar um texto.",
    leitura: {
      titulo: "O Guia da Revisão",
      imagemUrl: lupa,
      legendaImagem: "Página sobre revisar e publicar",
      destacar: ["ortografia", "pontuação", "concordância", "clareza", "publicar"],
      paragrafos: [
        "Na hora de revisar um texto, o escritor observa quatro coisas principais. A primeira é a ORTOGRAFIA: as palavras estão escritas do jeito certo? A segunda é a PONTUAÇÃO: os pontos finais, vírgulas e interrogações estão nos lugares certos, ajudando a leitura?",
        "A terceira coisa é a CONCORDÂNCIA: as palavras da frase combinam entre si? Por exemplo, em 'Os livros estava na mesa', falta concordância, porque 'livros' está no plural e 'estava' está no singular. O certo seria 'Os livros estavam na mesa'.",
        "A quarta coisa é a CLAREZA: o texto está fácil de entender? Às vezes uma frase fica confusa e precisa ser reescrita de um jeito mais simples. Reescrever partes do texto depois da revisão é normal e faz parte do processo — até os melhores escritores reescrevem seus textos várias vezes!",
        "Depois de revisar e corrigir tudo o que for preciso, o texto vira a VERSÃO FINAL, pronta para ser PUBLICADA: pode ser colada no mural da sala, lida em voz alta para a turma, guardada em um livro da turma, ou até enviada para um jornal ou blog da escola. Publicar é compartilhar o texto com outras pessoas, depois de todo o cuidado da revisão.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "O que é revisar a ortografia de um texto?",
        opcoes: [
          "Verificar se as palavras estão escritas corretamente",
          "Verificar a cor do papel",
          "Contar quantas páginas o texto tem",
          "Verificar o tamanho da letra",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Revisar a ortografia é conferir se as palavras estão escritas certo.",
        feedbackErro: "Releia: 'A primeira é a ORTOGRAFIA: as palavras estão escritas do jeito certo?'",
        ondeEstaNoTexto: "A primeira é a ORTOGRAFIA: as palavras estão escritas do jeito certo?",
      },
      {
        pergunta: "Por que a frase 'Os livros estava na mesa' está errada?",
        opcoes: [
          "Falta um ponto final",
          "Falta concordância entre 'livros' (plural) e 'estava' (singular)",
          "A palavra 'mesa' está errada",
          "Falta uma vírgula",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Falta concordância: o certo é 'Os livros estavam na mesa'.",
        feedbackErro: "Releia: 'falta concordância, porque \"livros\" está no plural e \"estava\" está no singular'.",
        ondeEstaNoTexto: "falta concordância, porque \"livros\" está no plural e \"estava\" está no singular",
      },
      {
        pergunta: "O que significa 'publicar' um texto, segundo a explicação?",
        opcoes: [
          "Rasgar o texto depois de terminado",
          "Guardar o texto escondido para sempre",
          "Compartilhar o texto com outras pessoas depois da revisão",
          "Reescrever o texto do zero sem revisar",
        ],
        correta: 2,
        feedbackAcerto: "🎉 Exato! Publicar é compartilhar o texto revisado com outras pessoas.",
        feedbackErro: "Releia: 'Publicar é compartilhar o texto com outras pessoas, depois de todo o cuidado da revisão.'",
        ondeEstaNoTexto: "Publicar é compartilhar o texto com outras pessoas, depois de todo o cuidado da revisão",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Pense sobre os exemplos usados na explicação.",
    perguntas: [
      {
        pergunta: "Além da ortografia, quais outras coisas o escritor observa na revisão?",
        opcoes: [
          "A cor da caneta usada",
          "Pontuação, concordância e clareza",
          "O tamanho do caderno",
          "O nome da escola",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! São quatro coisas: ortografia, pontuação, concordância e clareza.",
        feedbackErro: "Releia: o texto cita ortografia, pontuação, concordância e clareza.",
      },
      {
        pergunta: "Segundo o texto, onde uma versão final pode ser publicada?",
        opcoes: [
          "Só dentro da gaveta",
          "No mural da sala, em um livro da turma ou em um jornal/blog da escola",
          "Somente na TV",
          "Em nenhum lugar",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! O texto cita mural, livro da turma e jornal ou blog da escola.",
        feedbackErro: "Releia: 'pode ser colada no mural da sala... guardada em um livro da turma, ou até enviada para um jornal ou blog da escola.'",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos da revisão e publicação de um texto.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Reler o rascunho procurando erros.", imagemUrl: lupa },
        { id: "p2", texto: "Corrigir ortografia, pontuação e concordância.", imagemUrl: lapis },
        { id: "p3", texto: "Reescrever partes confusas para ficarem mais claras.", imagemUrl: papel },
        { id: "p4", texto: "Compartilhar a versão final com outras pessoas.", imagemUrl: mural },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Esse é o caminho da revisão até a publicação.",
      feedbackErro: "Pense: primeiro se relê, depois se corrige, depois se reescreve o que estiver confuso, e por fim se compartilha.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "Dicas de um escritor experiente",
      imagemUrl: biblioteca,
      destacar: ["ler em voz alta", "pedir ajuda"],
      paragrafos: [
        "Uma dica muito usada por escritores é LER EM VOZ ALTA o próprio texto durante a revisão. Quando lemos em voz alta, percebemos frases estranhas, repetições e erros que às vezes passam despercebidos quando lemos em silêncio.",
        "Outra dica importante é PEDIR AJUDA a outra pessoa para ler o texto antes da versão final. Um colega, um professor ou um familiar pode perceber erros ou partes confusas que o próprio autor, de tão acostumado com o texto, não consegue enxergar sozinho.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que ler em voz alta ajuda na revisão?",
        opcoes: [
          "Porque deixa o texto maior",
          "Porque ajuda a perceber frases estranhas e erros",
          "Porque muda as ideias do texto",
          "Porque é mais rápido",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ler em voz alta ajuda a perceber erros e frases estranhas.",
        feedbackErro: "Releia: 'Quando lemos em voz alta, percebemos frases estranhas, repetições e erros'.",
        ondeEstaNoTexto: "Quando lemos em voz alta, percebemos frases estranhas, repetições e erros que às vezes passam despercebidos",
      },
      {
        pergunta: "Por que é bom pedir ajuda a outra pessoa antes da versão final?",
        opcoes: [
          "Porque o texto fica mais bonito de cor",
          "Porque outra pessoa pode perceber erros que o autor não vê",
          "Porque é uma regra obrigatória",
          "Porque o texto fica mais curto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Correto! Outra pessoa enxerga erros que passam despercebidos pelo próprio autor.",
        feedbackErro: "Releia: 'pode perceber erros ou partes confusas que o próprio autor... não consegue enxergar sozinho.'",
        ondeEstaNoTexto: "pode perceber erros ou partes confusas que o próprio autor, de tão acostumado com o texto, não consegue enxergar sozinho",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Encontre o erro certo",
    instrucao: "Selecione apenas as frases que estão com erro e precisam de revisão.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "A Caça aos Erros",
      bloco: {
        instrucao: "Leia cada frase com atenção e marque somente as que têm erro de ortografia ou concordância.",
        pergunta: "Quais frases precisam ser revisadas?",
        opcoes: [
          { id: "o1", texto: "As crianças brincaram no parque.", correto: false },
          { id: "o2", texto: "Nós foi à escola ontem.", correto: true },
          { id: "o3", texto: "Ele gosta de futebol e de natação.", correto: false },
          { id: "o4", texto: "As menina cantou na festa.", correto: true },
          { id: "o5", texto: "Eu fui na farmasia comprar remédio.", correto: true },
        ],
        feedbackAcerto: "🎉 Muito bem! Você encontrou as frases com erro de concordância e ortografia.",
        feedbackErro: "Releia com atenção: procure palavras escritas errado e verbos que não combinam com o sujeito.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Na REVISÃO, o escritor observa ortografia, pontuação, concordância e clareza.",
      "REESCREVER partes confusas é normal e melhora muito o texto.",
      "A VERSÃO FINAL, depois de revisada, pode ser PUBLICADA e compartilhada com outras pessoas.",
    ],
    miniDesafio: {
      pergunta: "Ler o texto em voz alta durante a revisão ajuda principalmente a...",
      opcoes: [
        "Deixar o texto mais colorido",
        "Perceber frases estranhas e erros que passam despercebidos",
        "Aumentar o número de páginas",
        "Trocar o título do texto",
      ],
      correta: 1,
      feedbackAcerto: "🎉 Isso! Ler em voz alta ajuda a notar erros e frases confusas.",
      feedbackErro: "Releia a explicação: ler em voz alta ajuda a perceber erros que passam despercebidos na leitura silenciosa.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é revisar um texto?",
        opcoes: ["Jogar o rascunho fora", "Reler o texto procurando erros e formas de melhorá-lo", "Copiar o texto de outra pessoa", "Aumentar o tamanho da letra"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Revisar é reler procurando erros e melhorias.",
        feedbackErro: "Revisar é reler o próprio texto buscando erros e formas de melhorá-lo.",
      },
      {
        pergunta: "2/5 — O que é concordância?",
        opcoes: [
          "Quando as palavras da frase combinam em número e gênero",
          "Quando o texto tem muitas figuras",
          "Quando o texto é bem curto",
          "Quando se usa apenas letra maiúscula",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Concordância é as palavras combinarem entre si.",
        feedbackErro: "Concordância é quando as palavras da frase combinam em número (singular/plural) e gênero.",
      },
      {
        pergunta: "3/5 — Qual frase está com concordância correta?",
        opcoes: ["'As menina foi à escola.'", "'As meninas foram à escola.'", "'A menina foram à escola.'", "'As meninas foi à escola.'"],
        correta: 1,
        feedbackAcerto: "🎉 Exato! 'As meninas foram' combina o plural do sujeito com o plural do verbo.",
        feedbackErro: "A forma correta é 'As meninas foram à escola', com plural em todas as palavras que precisam concordar.",
      },
      {
        pergunta: "4/5 — Por que é bom pedir para outra pessoa ler nosso texto antes da versão final?",
        opcoes: [
          "Porque é uma regra sem motivo",
          "Porque outra pessoa pode notar erros que o autor não percebe",
          "Porque isso deixa o texto mais longo",
          "Porque muda o assunto do texto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Outra pessoa enxerga erros que passam despercebidos pelo autor.",
        feedbackErro: "Outra pessoa pode notar erros ou partes confusas que o próprio autor não percebe sozinho.",
      },
      {
        pergunta: "5/5 — O que significa 'publicar' um texto?",
        opcoes: [
          "Guardar o texto para sempre escondido",
          "Compartilhar o texto revisado com outras pessoas",
          "Apagar o texto depois de escrito",
          "Escrever o texto sem nenhuma revisão",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Muito bem! Publicar é compartilhar o texto já revisado.",
        feedbackErro: "Publicar é compartilhar o texto com outras pessoas, depois de revisado.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Do rascunho à publicação",
    materiais: ["Papel e lápis", "Um adulto para ajudar a revisar", "Se possível, um mural ou lugar para expor o texto"],
    passos: [
      "1) Pegue um pequeno texto que você já escreveu (pode ser o da Aula 1 desta unidade) ou escreva um RASCUNHO novo de 5 a 6 frases sobre um tema à sua escolha.",
      "2) Releia o rascunho com uma lupa (de verdade ou imaginária) procurando erros de ortografia, pontuação e concordância.",
      "3) Peça a um adulto da família para ler o texto e apontar o que pode ficar mais claro.",
      "4) Faça a REVISÃO: corrija os erros e reescreva as partes confusas.",
      "5) Escreva a VERSÃO FINAL, já corrigida e mais clara.",
      "6) 'Publique' o texto: leia em voz alta para a família ou cole em um mural de casa.",
    ],
    registro: "📝 Uma foto mostrando o rascunho com as marcações de revisão e a versão final publicada.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
