import type { AulaPortuguesV4 } from "../../types";
import { url as criancas } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as salaAula } from "@/assets/neuro-treino/objetos/sala-aula.png.asset.json";
import { url as patioEscola } from "@/assets/neuro-treino/objetos/patio-escola.png.asset.json";
import { url as lixeira } from "@/assets/neuro-treino/objetos/lixeira.png.asset.json";
import { url as lavarMaos } from "@/assets/neuro-treino/objetos/lavar-maos.png.asset.json";
import { url as mural } from "@/assets/neuro-treino/objetos/mural.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as compartilhar } from "@/assets/neuro-treino/objetos/compartilhar.png.asset.json";
import { url as ajudar } from "@/assets/neuro-treino/objetos/ajudar.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";

/**
 * Unidade 9 — Aula 1: Nossos Combinados da Turma
 * -------------------------------------------------------------
 * Campo da atuação cidadã. A criança escreve, em colaboração, uma
 * lista de regras/combinados que organizam a vida da turma.
 *
 * BNCC: EF01LP21 (escrever listas de regras e regulamentos)
 *       EF01LP01 (escrita alfabética na produção da lista)
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-nossos-combinados-da-turma",
  titulo: "Nossos Combinados da Turma",
  iconeTrilha: "🤝",
  bncc: ["EF01LP21", "EF01LP01"],
  duracaoMin: 16,

  momento01_motivacao: {
    titulo: "Um cartaz que ajuda todo mundo",
    historia:
      "Na turma do Brilha ninguém se ouvia: todos falavam ao mesmo tempo. Então a turma parou e escreveu um cartaz com os COMBINADOS. Combinado é uma regra que todo mundo aceita para a sala ficar boa para todos. E o melhor: a turma escreveu junto!",
    imagemUrl: criancas,
  },

  momento02_previsao: {
    instrucao: "Olhe o cartaz da parede e pense.",
    bloco: {
      titulo: "Combinados da turma",
      capaImagemUrl: mural,
      recado: {
        rotulo: "Cartaz da sala",
        icone: "🤝",
        linhas: [
          "1) Falar um de cada vez.",
          "2) Jogar o lixo na lixeira.",
          "3) Cuidar do material do colega.",
        ],
        estilo: "cartaz",
      },
      pergunta: "Para que serve esse cartaz?",
      hipoteses: [
        { texto: "Para organizar a vida da turma.", imagemUrl: salaAula },
        { texto: "Para contar uma história.", imagemUrl: papel },
        { texto: "Para convidar para uma festa.", imagemUrl: bola },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Combinados organizam a turma.",
      feedbackErro:
        "Cada linha manda fazer uma coisa boa para todos: é uma lista de regras.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Três palavras de cidadão.",
    cards: [
      {
        palavra: "combinado",
        explicacao: "Regra que a turma faz junto e todo mundo aceita cumprir.",
        exemplo: "Nosso combinado é falar um de cada vez.",
        imagemUrl: criancas,
      },
      {
        palavra: "regra",
        explicacao: "O que pode e o que não pode em um lugar.",
        exemplo: "A regra do pátio é não correr perto da escada.",
        imagemUrl: patioEscola,
      },
      {
        palavra: "respeito",
        explicacao: "É cuidar do outro e do que é de todos.",
        exemplo: "Escutar o colega é respeito.",
        imagemUrl: ajudar,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Como se escreve um combinado",
    instrucao: "Ouça: combinado começa com um verbo de ação e é curtinho.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "Falar um de cada vez.", explicacao: "Começa com a ação: FALAR." },
          { texto: "Jogar o lixo na lixeira.", explicacao: "Ação: JOGAR. Curtinho e claro." },
          { texto: "Lavar as mãos antes do lanche.", explicacao: "Ação: LAVAR. Diz quando." },
          { texto: "Guardar o brinquedo depois de usar.", explicacao: "Ação: GUARDAR. Todo mundo entende." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto os combinados da turma do Brilha.",
    leitura: {
      titulo: "Combinados da nossa turma",
      imagemUrl: salaAula,
      legendaImagem: "O cartaz na parede da sala",
      destacar: ["combinado", "turma", "respeito"],
      paragrafos: [
        "A turma sentou em roda e falou o que atrapalhava.",
        "Cada criança deu uma ideia de combinado.",
        "A professora escreveu tudo no cartaz.",
        "Agora a sala é boa para todo mundo.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Como a turma começou?",
        opcoes: ["Sentou em roda", "Correu no pátio", "Foi para casa"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Sentaram em roda para conversar.",
        feedbackErro: "Está na primeira linha.",
        dica: "Leia só a primeira frase.",
        ondeEstaNoTexto: "A turma sentou em roda e falou o que atrapalhava.",
      },
      {
        pergunta: "Quem escreveu os combinados no cartaz?",
        opcoes: ["O porteiro", "A professora", "Ninguém"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A professora escreveu as ideias da turma.",
        feedbackErro: "Procure a linha que fala do cartaz.",
        dica: "Terceira linha do texto.",
        ondeEstaNoTexto: "A professora escreveu tudo no cartaz.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora pense nos combinados.",
    perguntas: [
      {
        pergunta: "Qual destes é um bom combinado de sala?",
        opcoes: ["Gritar bem alto", "Escutar o colega", "Rabiscar a parede"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Escutar o colega ajuda todo mundo.",
        feedbackErro: "Bom combinado é o que deixa a sala boa PARA TODOS.",
        reensino: "Teste do combinado: se todo mundo fizer isso, a turma fica melhor? Então é um bom combinado.",
      },
      {
        pergunta: "O combinado vale para...",
        opcoes: ["Só uma criança", "Toda a turma", "Só a professora"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Vale para todo mundo.",
        feedbackErro: "Combinado é da TURMA inteira, não de uma pessoa só.",
        reensino: "Se vale só para um, não é combinado. Combinado todo mundo cumpre.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque na ordem como a turma fez o cartaz.",
    bloco: {
      instrucao: "Conversar → dar ideias → escrever → colar na parede.",
      itens: [
        { id: "k1", texto: "Sentar em roda e conversar.", imagemUrl: criancas },
        { id: "k2", texto: "Cada um dá uma ideia.", imagemUrl: compartilhar },
        { id: "k3", texto: "Escrever os combinados.", imagemUrl: papel },
        { id: "k4", texto: "Colar o cartaz na parede.", imagemUrl: mural },
      ],
      ordemCerta: ["k1", "k2", "k3", "k4"],
      feedbackAcerto: "🎉 Perfeito! Combinado se faz conversando primeiro.",
      feedbackErro: "Antes de escrever, a turma precisa conversar e dar ideias.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "Combinados do pátio",
      imagemUrl: patioEscola,
      destacar: ["pátio", "lixo", "vez"],
      paragrafos: [
        "No pátio, cada um espera a sua vez no balanço.",
        "O lixo vai na lixeira.",
      ],
    },
    perguntas: [
      {
        pergunta: "No balanço, cada um deve...",
        opcoes: ["esperar a vez", "empurrar", "gritar"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Esperar a vez.",
        feedbackErro: "Releia a primeira linha.",
        ondeEstaNoTexto: "cada um espera a sua vez no balanço.",
      },
      {
        pergunta: "Onde vai o lixo?",
        opcoes: ["No chão", "Na lixeira", "No bolso do colega"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Na lixeira.",
        feedbackErro: "Está na última linha.",
        ondeEstaNoTexto: "O lixo vai na lixeira.",
      },
    ],
  },

  momento_escrita: {
    titulo: "Escrever os combinados",
    instrucao: "Trace, monte e escreva a lista de combinados.",
    blocos: [
      {
        tipo: "tracadoLetra",
        letras: [
          { letra: "C", exemplo: "C de COMBINADO", dicaTracado: "faz a barriguinha aberta para o lado" },
          { letra: "R", exemplo: "R de RESPEITO", dicaTracado: "desce, faz a barriga e a perninha" },
        ],
      },
      {
        tipo: "ditadoSilabas",
        palavras: [
          { palavra: "LIXO", silabas: ["LI", "XO"], distratores: ["ME", "PA"], dica: "Vai na lixeira.", imagemUrl: lixeira },
          { palavra: "MÃOS", silabas: ["MÃOS"], distratores: ["TE", "RU"], dica: "A gente lava antes do lanche.", imagemUrl: lavarMaos },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "lista",
        titulo: "Combinados da minha casa",
        comando: "Escreva 3 combinados para a sua casa. Cada um começa com uma ação.",
        linhas: 3,
        modelo: ["Guardar os brinquedos.", "Lavar as mãos antes de comer.", "Falar um de cada vez."],
        checklist: [
          "Escrevi 3 combinados?",
          "Cada um começa com uma ação?",
          "Todos são bons para a casa inteira?",
        ],
      },
    ],
  },

  momento_minijogo: {
    titulo: "Isso é combinado?",
    instrucao: "Marque só os bons combinados.",
    jogo: {
      tipo: "selecionarItens",
      titulo: "Combinado bom × combinado ruim",
      bloco: {
        instrucao: "Toque só nas frases que ajudam a turma inteira.",
        pergunta: "Quais são bons combinados?",
        opcoes: [
          { id: "c1", texto: "Jogar o lixo na lixeira.", correto: true, imagemUrl: lixeira },
          { id: "c2", texto: "Empurrar na fila.", correto: false, imagemUrl: criancas },
          { id: "c3", texto: "Lavar as mãos antes do lanche.", correto: true, imagemUrl: lavarMaos },
          { id: "c4", texto: "Esconder o lápis do colega.", correto: false, imagemUrl: papel },
        ],
        feedbackAcerto: "🎉 Isso! Combinado bom cuida de todo mundo.",
        feedbackErro: "Pergunte: isso ajuda ou atrapalha a turma?",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "Combinado é uma regra que a turma faz junto.",
      "Cada combinado é curtinho e começa com uma ação.",
      "O combinado vale para todo mundo.",
      "A lista de combinados fica no cartaz, para todos verem.",
    ],
    miniDesafio: {
      pergunta: "O combinado vale para quem?",
      opcoes: ["Só para mim", "Para toda a turma", "Para ninguém"],
      correta: 1,
      feedbackAcerto: "🎉 Isso!",
      feedbackErro: "Todo mundo combinou, então todo mundo cumpre.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Combinado é...",
        opcoes: ["uma regra feita pela turma", "uma história", "uma música", "um desenho"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Combinado é regra que a turma faz junto.",
      },
      {
        pergunta: "2/5 — Qual é um bom combinado?",
        opcoes: ["Correr na escada", "Falar um de cada vez", "Gritar na sala", "Rabiscar o livro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Bom combinado deixa a sala melhor para todos.",
      },
      {
        pergunta: "3/5 — Antes de escrever o cartaz, a turma...",
        opcoes: ["conversou em roda", "foi para casa", "dormiu", "cantou"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "No texto: 'A turma sentou em roda e falou o que atrapalhava'.",
      },
      {
        pergunta: "4/5 — Um combinado deve ser...",
        opcoes: ["bem comprido", "curtinho e claro", "secreto", "escrito só com desenho"],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Combinado curto todo mundo entende e lembra.",
      },
      {
        pergunta: "5/5 — Onde fica o cartaz dos combinados?",
        opcoes: ["Na parede, para todos verem", "Na mochila", "Guardado na gaveta", "Em casa"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "O cartaz fica à vista para lembrar a turma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Combinados da nossa casa",
    materiais: ["Papel grande", "Lápis de cor", "Fita"],
    passos: [
      "1) A família senta em roda e diz o que atrapalha a casa.",
      "2) Cada um dá uma ideia de combinado.",
      "3) A criança escreve (ou desenha) 3 combinados no papel.",
      "4) Colem o cartaz na parede e leiam juntos em voz alta.",
    ],
    registro: "📸 Uma foto do cartaz de combinados da família.",
  },

  momento_fluencia: {
    titulo: "Ler nossos combinados",
    instrucao:
      "Agora a gente lê o MESMO texto três vezes: a primeira comigo, a segunda sozinho no cronômetro e a terceira de novo. Ler de novo faz as palavras ficarem fáceis — você vai sentir a boca soltar.",
    texto: [
      "EU LEVANTO A MÃO.",
      "EU ESPERO A MINHA VEZ.",
      "EU CUIDO DA SALA.",
    ],
    metaSegundos: 22,
  },

  recompensa: {
    xp: 140,
    moedas: 80,
    medalha: "🤝 Cidadão da Turma",
  },
};
