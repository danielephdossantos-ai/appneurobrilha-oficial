import type { AulaPortuguesV4 } from "../../types";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as mochila } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";
import { url as menina } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as menino } from "@/assets/neuro-treino/objetos/menino.png.asset.json";
import { url as criancasGrupo } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as binoculo } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as tigre } from "@/assets/neuro-treino/objetos/tigre.png.asset.json";
import { url as leao } from "@/assets/neuro-treino/objetos/leao.png.asset.json";
import { url as bussolaObj } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";

/**
 * Aula 3 — Pronomes que evitam repetição
 * -------------------------------------------------------------
 * Terceira parada da Unidade 3 (Engrenagem da Frase). A expedição
 * descobre uma ferramenta que evita repetir sempre o mesmo nome: os
 * PRONOMES. Eles "substituem" uma palavra sem perder o referente —
 * mas se usados sem cuidado, criam confusão (ambiguidade).
 *
 * Foco pedagógico:
 *  - Pronomes pessoais (ele/ela/eles/elas) substituindo o sujeito.
 *  - Pronomes possessivos (seu/sua/seus/suas) indicando posse.
 *  - Pronomes demonstrativos (este/esse/aquele) indicando posição
 *    no espaço/tempo/discurso.
 *  - Perceber que o pronome só funciona se o referente continuar
 *    claro — e reconhecer frases ambíguas.
 *
 * BNCC: EF04LP07, EF35LP14.
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-pronomes",
  titulo: "Pronomes que evitam repetição",
  iconeTrilha: "🔁",
  bncc: ["EF04LP07", "EF35LP14"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A palavra que substitui",
    historia:
      "Brilha releu o diário e fez uma careta. — 'A guia pegou a bússola da guia e a guia guardou a bússola da guia na mochila da guia.' Que repetição cansativa! Existe uma ferramenta pra isso: o PRONOME. Ele substitui um nome sem a gente perder de vista de quem estamos falando. Vamos destravar esse texto?",
    imagemUrl: bussola,
  },

  momento02_previsao: {
    instrucao:
      "No acampamento, alguém deixou um bilhete cheio de pronomes. Leia com atenção antes de decidir do que ele trata.",
    bloco: {
      titulo: "O Bilhete da Guia",
      capaImagemUrl: mapa,
      recado: {
        rotulo: "Bilhete",
        icone: "📩",
        estilo: "papel",
        linhas: [
          "A guia esqueceu sua mochila na trilha.",
          "Ela pediu para alguém levar até ela.",
          "Este bilhete explica onde encontrá-la.",
        ],
      },
      pistas: [
        { imagemUrl: mochila, nome: "Uma mochila" },
        { imagemUrl: menina, nome: "A guia" },
      ],
      pergunta: "Sobre o que esse bilhete vai tratar?",
      hipoteses: [
        { texto: "Uma mochila esquecida que precisa ser levada até a guia.", imagemUrl: mochila },
        { texto: "Uma receita de bolo.", imagemUrl: leao },
        { texto: "Um jogo de futebol.", imagemUrl: tigre },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Repare: 'sua mochila', 'ela pediu', 'até ela' — os pronomes 'sua' e 'ela' sempre se referem à guia, sem repetir a palavra 'guia' toda hora.",
      feedbackErro:
        "Releia o bilhete: ele fala de uma mochila esquecida e usa palavras como 'sua' e 'ela' para não repetir 'a guia'.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Antes de seguir viagem, conheça os pronomes que evitam repetição.",
    cards: [
      {
        palavra: "pronome pessoal",
        explicacao:
          "Substitui o nome de uma pessoa ou coisa que já foi dita antes (ele, ela, eles, elas).",
        exemplo: "'A guia chegou. Ela trouxe o mapa.' — 'ela' substitui 'a guia'.",
        imagemUrl: menina,
      },
      {
        palavra: "pronome possessivo",
        explicacao:
          "Indica de quem é algo, sem repetir o nome do dono (seu, sua, seus, suas, meu, minha).",
        exemplo: "'O explorador perdeu sua bússola.' — 'sua' indica que a bússola é do explorador.",
        imagemUrl: bussolaObj,
      },
      {
        palavra: "pronome demonstrativo",
        explicacao:
          "Mostra a posição de algo no espaço, no tempo ou dentro do próprio texto (este, esse, aquele).",
        exemplo: "'Este mapa é novo; aquele mapa é antigo.' — 'este' está perto, 'aquele' está longe.",
        imagemUrl: mapa,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "O pronome só funciona se o referente estiver claro",
    instrucao: "Observe a mesma ideia com e sem pronome — e um erro de ambiguidade.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          {
            texto: "A guia e o menino chegaram. Ela trouxe o binóculo.",
            explicacao: "CLARO: só há uma pessoa do gênero feminino na frase (a guia), então 'ela' só pode ser ela.",
          },
          {
            texto: "A guia falou com a exploradora. Ela trouxe o binóculo.",
            explicacao:
              "AMBÍGUO: há DUAS pessoas do gênero feminino (a guia e a exploradora) — não dá para saber quem é 'ela'!",
          },
          {
            texto: "A guia falou com a exploradora. A guia trouxe o binóculo.",
            explicacao:
              "CONSERTADO: quando o pronome pode confundir, é melhor repetir o nome ou dar mais pista para o leitor entender.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Leia o relato da travessia usando binóculo. Observe como os pronomes substituem os nomes sem confundir.",
    leitura: {
      titulo: "Relato: O Binóculo da Expedição",
      imagemUrl: binoculo,
      legendaImagem: "O binóculo da expedição",
      destacar: ["ele", "sua", "este", "seus"],
      paragrafos: [
        "O menino encontrou um binóculo na trilha. Ele guardou seu achado com cuidado na mochila.",
        "Mais tarde, ele mostrou o objeto para a guia: — Este binóculo pode ajudar a expedição a enxergar longe!",
        "A guia sorriu e disse que os exploradores usavam seus próprios binóculos para observar os animais sem se aproximar demais.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no relato se precisar. Toda resposta está escrita.",
    perguntas: [
      {
        pergunta: "No trecho 'Ele guardou seu achado', quem é 'ele'?",
        opcoes: ["A guia", "O menino", "Os exploradores"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! 'Ele' substitui 'o menino', citado na frase anterior — o referente está claro.",
        feedbackErro: "Releia: 'O menino encontrou um binóculo... Ele guardou seu achado'. 'Ele' é o menino.",
        ondeEstaNoTexto: "O menino encontrou um binóculo na trilha. Ele guardou seu achado com cuidado na mochila.",
      },
      {
        pergunta: "No trecho 'Este binóculo pode ajudar', a palavra 'este' indica que o binóculo está...",
        opcoes: ["Longe de quem fala", "Perto de quem fala", "Perdido para sempre"],
        correta: 1,
        feedbackAcerto:
          "🎉 Correto! 'Este' é pronome demonstrativo usado para algo perto de quem está falando — o menino está com o binóculo na mão.",
        feedbackErro: "'Este' indica proximidade de quem fala. 'Aquele' indicaria distância.",
        ondeEstaNoTexto: "Este binóculo pode ajudar a expedição a enxergar longe!",
      },
      {
        pergunta: "No trecho 'usavam seus próprios binóculos', de quem são os binóculos?",
        opcoes: ["Do menino", "Da guia", "Dos exploradores"],
        correta: 2,
        feedbackAcerto:
          "🎉 Isso! 'Seus' (possessivo) indica que os binóculos pertencem aos exploradores citados na frase.",
        feedbackErro: "A frase diz 'os exploradores usavam SEUS próprios binóculos' — 'seus' se refere a eles.",
        ondeEstaNoTexto: "os exploradores usavam seus próprios binóculos para observar os animais",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Observe como cada pronome do relato aponta para uma pessoa ou posse diferente.",
    perguntas: [
      {
        pergunta: "Por que usar 'ele' em vez de repetir 'o menino' o tempo todo?",
        opcoes: [
          "Porque 'ele' torna o texto mais curto e menos repetitivo, sem perder o sentido",
          "Porque 'o menino' está errado gramaticalmente",
          "Porque o pronome muda o significado da história",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso mesmo! O pronome substitui o nome para evitar repetição, mantendo claro de quem estamos falando.",
        feedbackErro:
          "Pronomes existem justamente para evitar repetir o mesmo nome várias vezes — sem perder o referente.",
      },
      {
        pergunta: "O que aconteceria se, no relato, houvesse DOIS meninos e a frase dissesse só 'ele guardou seu achado'?",
        opcoes: [
          "Ficaria ambíguo — não saberíamos qual dos dois meninos é 'ele'",
          "Nada mudaria, ficaria igualmente claro",
          "A frase ficaria mais correta",
        ],
        correta: 0,
        feedbackAcerto:
          "🎉 Isso! Quando há mais de um possível referente do mesmo gênero, o pronome pode gerar ambiguidade — é preciso dar mais pistas ou repetir o nome.",
        feedbackErro:
          "Com dois meninos na cena, 'ele' pode se referir a qualquer um dos dois — isso é ambiguidade, um erro comum ao usar pronomes.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As frases do relato se misturaram. Ordene do primeiro pronome usado até o desfecho.",
    bloco: {
      instrucao: "Siga a ordem em que os fatos e pronomes aparecem no relato.",
      itens: [
        { id: "p1", texto: "O menino encontrou um binóculo na trilha.", imagemUrl: menino },
        { id: "p2", texto: "Ele guardou seu achado na mochila.", imagemUrl: mochila },
        { id: "p3", texto: "Este binóculo pode ajudar a expedição, disse ele à guia.", imagemUrl: binoculo },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Linha montada! Você seguiu a ordem certa: o achado, o pronome que o substitui e a fala final.",
      feedbackErro:
        "Pense: primeiro o menino ACHA o binóculo, depois ELE guarda, depois ele fala 'ESTE binóculo'.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Nova leitura, sozinho agora. Depois responda.",
    leitura: {
      titulo: "A Bússola da Exploradora",
      imagemUrl: bussola,
      destacar: ["sua", "ela", "aquela"],
      paragrafos: [
        "A exploradora carregava sua bússola desde o início da viagem.",
        "Certo dia, ela apontou para o horizonte e disse: — Aquela montanha marca o fim da trilha.",
        "Seus companheiros seguiram a direção indicada, confiando no instrumento que ela sempre cuidava tão bem.",
      ],
    },
    perguntas: [
      {
        pergunta: "No trecho 'sua bússola', de quem é a bússola?",
        opcoes: ["Da exploradora", "Dos companheiros", "Da montanha"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Sua' é possessivo e se refere à exploradora, citada logo antes.",
        feedbackErro: "A frase começa com 'A exploradora carregava sua bússola' — 'sua' é dela.",
        ondeEstaNoTexto: "A exploradora carregava sua bússola desde o início da viagem.",
      },
      {
        pergunta: "A palavra 'aquela' (em 'aquela montanha') indica que a montanha está...",
        opcoes: ["Bem perto de quem fala", "Distante, no horizonte", "Dentro da mochila"],
        correta: 1,
        feedbackAcerto:
          "🎉 Correto! 'Aquela' é pronome demonstrativo usado para indicar algo distante de quem fala.",
        feedbackErro: "'Aquela' indica distância — diferente de 'esta', que indicaria proximidade.",
        ondeEstaNoTexto: "Aquela montanha marca o fim da trilha.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Caça aos Referentes",
    instrucao: "Arraste cada pronome para o tipo certo: PESSOAL, POSSESSIVO ou DEMONSTRATIVO.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Que tipo de pronome é esse?",
      bloco: {
        instrucao: "Leia cada pronome destacado e identifique seu tipo.",
        itens: [
          { id: "i1", texto: "ELA chegou primeiro.", alvoId: "pessoal" },
          { id: "i2", texto: "SUA mochila ficou pesada.", alvoId: "possessivo" },
          { id: "i3", texto: "ESTE mapa é o mais novo.", alvoId: "demonstrativo" },
          { id: "i4", texto: "ELES trouxeram o binóculo.", alvoId: "pessoal" },
          { id: "i5", texto: "SEUS amigos ajudaram na travessia.", alvoId: "possessivo" },
          { id: "i6", texto: "AQUELE trecho da trilha era perigoso.", alvoId: "demonstrativo" },
        ],
        alvos: [
          { id: "pessoal", nome: "Pessoal", descricao: "Substitui uma pessoa (ele, ela, eles)" },
          { id: "possessivo", nome: "Possessivo", descricao: "Indica posse (seu, sua, seus)" },
          { id: "demonstrativo", nome: "Demonstrativo", descricao: "Indica posição (este, esse, aquele)" },
        ],
        feedbackAcerto:
          "🎉 Muito bem! Você reconheceu a função de cada pronome no lugar do nome que ele substitui.",
        feedbackErro:
          "Dica: pronomes pessoais substituem QUEM age; possessivos indicam DE QUEM é; demonstrativos indicam ONDE está.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PRONOME PESSOAL substitui o nome de uma pessoa já citada (ele, ela, eles, elas).",
      "PRONOME POSSESSIVO indica de quem é algo, sem repetir o nome do dono (seu, sua, seus, suas).",
      "PRONOME DEMONSTRATIVO indica posição no espaço, tempo ou texto (este = perto, aquele = longe).",
      "Um pronome só funciona bem se o REFERENTE continuar claro — se houver dúvida sobre quem ele substitui, é ambiguidade.",
    ],
    miniDesafio: {
      pergunta: "Na frase 'A guia falou com a artista. Ela trouxe o mapa.', por que 'ela' pode gerar dúvida?",
      opcoes: [
        "Porque há duas mulheres na frase e não fica claro quem é 'ela'",
        "Porque 'ela' está escrito errado",
        "Porque a frase não tem sujeito",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso! Com dois possíveis referentes femininos, 'ela' fica ambíguo — é preciso repetir o nome ou dar mais pistas.",
      feedbackErro: "Há duas pessoas do gênero feminino na frase (a guia e a artista), então 'ela' pode se referir a qualquer uma — isso é ambiguidade.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é um pronome pessoal?",
        opcoes: [
          "Uma palavra que substitui o nome de uma pessoa ou coisa já citada",
          "Uma palavra que indica posse",
          "Uma palavra que sempre vem no fim da frase",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Pronome pessoal (ele, ela, eles, elas) substitui um nome já mencionado.",
        feedbackErro: "Pronome pessoal substitui o nome de uma pessoa ou coisa que já foi citada antes.",
      },
      {
        pergunta: "2/5 — Em 'O explorador perdeu sua bússola', a quem pertence a bússola?",
        opcoes: ["Ao explorador", "À guia", "Não é possível saber"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Sua' é possessivo e se refere ao explorador, citado na mesma frase.",
        feedbackErro: "'Sua' indica posse de quem foi citado antes: o explorador.",
      },
      {
        pergunta: "3/5 — Qual pronome indica algo BEM DISTANTE de quem fala?",
        opcoes: ["este", "esse", "aquele"],
        correta: 2,
        feedbackAcerto: "🎉 Correto! 'Aquele' indica distância. 'Este' indica proximidade e 'esse' um meio-termo.",
        feedbackErro: "'Aquele' é usado para o que está longe; 'este' para o que está perto.",
      },
      {
        pergunta: "4/5 — Qual frase é AMBÍGUA (o pronome pode se referir a mais de uma pessoa)?",
        opcoes: [
          "A guia falou com o menino. Ela trouxe o mapa.",
          "A guia falou com a exploradora. Ela trouxe o mapa.",
          "O menino falou com a guia. Ele trouxe o mapa.",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Com duas mulheres na frase (a guia e a exploradora), 'ela' pode se referir a qualquer uma — ambiguidade.",
        feedbackErro:
          "Procure a frase com duas pessoas do MESMO gênero — aí o pronome fica confuso sobre quem ele substitui.",
      },
      {
        pergunta: "5/5 — Complete evitando repetição: 'Os exploradores acharam o mapa. ___ guardaram ___ mochilas com cuidado.'",
        opcoes: ["Eles / suas", "Ele / sua", "Nós / nossas"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Eles' substitui 'os exploradores' (plural) e 'suas' indica que as mochilas são deles.",
        feedbackErro: "Como 'os exploradores' é plural, o pronome também deve ser plural: 'eles' e 'suas'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caça-Pronomes em Família",
    materiais: ["Papel e lápis", "Um livro, revista ou bilhete de casa"],
    passos: [
      "1) Escolha um pequeno texto (bilhete, rótulo, história) e procure por pronomes (ele, ela, seu, sua, este, aquele...).",
      "2) Para cada pronome encontrado, escreva ao lado qual palavra ele está substituindo.",
      "3) Invente uma frase com um pronome que poderia confundir (ambiguidade) e outra frase corrigindo a confusão.",
      "4) Leia as descobertas para alguém da família.",
    ],
    registro: "📝 A lista de pronomes encontrados com seus referentes, mais a frase ambígua e sua correção.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
