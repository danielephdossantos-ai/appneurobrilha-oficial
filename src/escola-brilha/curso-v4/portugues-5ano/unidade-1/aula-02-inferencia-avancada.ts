import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lupa } from "@/assets/neuro-treino/objetos/binoculo.png.asset.json";
import { url as bussola } from "@/assets/neuro-treino/objetos/bussola.png.asset.json";
import { url as papel } from "@/assets/neuro-treino/objetos/papel.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as mapa } from "@/assets/neuro-treino/objetos/mapa.png.asset.json";
import { url as celular } from "@/assets/neuro-treino/objetos/celular.png.asset.json";

/**
 * Aula 2 — Inferência e Implícito em Textos Longos
 * -------------------------------------------------------------
 * Segundo caso da Central de Investigação da Linguagem. A missão:
 * treinar inferências mais sofisticadas em textos com vários
 * parágrafos, juntando pistas espalhadas ao longo de todo o texto
 * (não apenas em uma única frase) para concluir o que está implícito.
 *
 * BNCC: EF35LP04, EF35LP05, EF05LP16
 */
export const aula2: AulaPortuguesV4 = {
  slug: "aula-02-inferencia-avancada",
  titulo: "Inferência e Implícito em Textos Longos",
  iconeTrilha: "🔎",
  bncc: ["EF35LP04", "EF35LP05", "EF05LP16"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "Caso 002: as pistas espalhadas",
    historia:
      "Brilha espalhou quatro páginas diferentes sobre a mesa. — No primeiro caso, você já sabe achar o assunto e a intenção. Agora o desafio sobe de nível: nem toda pista mora no mesmo parágrafo. Às vezes uma pista está no início do texto, outra no meio e outra só aparece no final — e só juntando as três você conclui o que o autor NUNCA escreveu com todas as letras. Isso é inferência avançada. Bora treinar o olhar para textos mais longos?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe os itens apreendidos no caso de hoje. Que conclusão dá para montar juntando essas pistas?",
    bloco: {
      titulo: "Caso 002: A Reforma Misteriosa",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: papel, nome: "Plantas de reforma dobradas na mochila" },
        { imagemUrl: celular, nome: "Fotos de uma sala de aula vazia e empoeirada" },
      ],
      recado: {
        rotulo: "Anotações espalhadas",
        icone: "🧾",
        linhas: [
          "Página 1: 'A biblioteca está interditada há dois meses.'",
          "Página 5: 'Compramos 40 estantes novas e tinta antimofo.'",
          "Página 9: 'A inauguração está marcada para o fim do semestre.'",
        ],
        estilo: "papel",
      },
      pergunta: "Juntando as três anotações espalhadas em páginas diferentes, o que está acontecendo?",
      hipoteses: [
        { texto: "A biblioteca está passando por uma reforma completa para reabrir renovada" },
        { texto: "A biblioteca será fechada para sempre" },
        { texto: "As anotações não têm nenhuma relação entre si" },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🔎 Ótima dedução! Cada anotação sozinha diz pouco, mas juntas (interditada + estantes novas + data de inauguração) revelam uma reforma em andamento, mesmo sem nenhuma frase dizer isso diretamente.",
      feedbackErro:
        "Junte as três informações: um espaço fechado, a compra de móveis novos e uma data de inauguração marcada. Isso só faz sentido se for uma reforma para reabertura — nenhuma frase isolada provaria isso sozinha.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Vocabulário avançado para investigar textos com muitas partes.",
    cards: [
      {
        palavra: "pista distribuída",
        explicacao:
          "É uma informação que, sozinha, parece pouco importante, mas que ganha sentido quando somada a outras pistas que aparecem em partes diferentes do texto.",
        exemplo: "Uma pista no início pode falar de 'silêncio', e só uma pista no final explica por quê.",
        imagemUrl: lupa,
      },
      {
        palavra: "implícito",
        explicacao:
          "É tudo o que o texto sugere sem afirmar diretamente — o leitor precisa concluir isso juntando as informações disponíveis.",
        exemplo: "O texto pode nunca dizer 'a escola está reformando', mas todas as pistas juntas mostram isso.",
        imagemUrl: bussola,
      },
      {
        palavra: "coerência",
        explicacao:
          "É a ligação lógica entre as ideias de um texto — quando uma inferência é coerente, ela se encaixa direitinho com TODAS as pistas, sem contradizer nenhuma.",
        exemplo: "Uma inferência é coerente quando explica tanto o começo quanto o fim do texto, sem deixar pontas soltas.",
        imagemUrl: robo,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o relatório completo, prestando atenção especial em detalhes que parecem pequenos no início, mas que ganham sentido depois.",
    leitura: {
      titulo: "O Caso do Laboratório Trancado",
      imagemUrl: robo,
      legendaImagem: "Corredor da escola onde fica o laboratório de ciências",
      destacar: ["três semanas seguidas", "caixas lacradas", "novo equipamento de robótica"],
      paragrafos: [
        "Há três semanas seguidas, o laboratório de ciências da escola aparece trancado logo depois do intervalo, e um aviso simples na porta pede para os alunos aguardarem novidades em breve.",
        "Alguns estudantes repararam que, nos últimos dias, caminhões pequenos têm parado na entrada da escola durante a manhã, descarregando caixas lacradas com etiquetas escritas em outro idioma.",
        "A coordenadora do laboratório foi vista conversando com dois técnicos desconhecidos perto da sala, carregando pastas cheias de manuais e folhas de instrução técnica.",
        "Numa reunião rápida com os representantes de turma, a direção apenas comentou, de passagem, que 'o próximo semestre vai trazer muitas oportunidades novas para quem gosta de tecnologia e programação'.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte ao relatório sempre que precisar localizar uma informação.",
    perguntas: [
      {
        pergunta: "Há quanto tempo o laboratório está trancado?",
        opcoes: ["Um dia", "Três semanas seguidas", "Um ano inteiro"],
        correta: 1,
        feedbackAcerto: "🔎 Isso! O texto diz claramente 'há três semanas seguidas'.",
        feedbackErro: "A informação está bem no início do primeiro parágrafo.",
        ondeEstaNoTexto: "Há três semanas seguidas, o laboratório de ciências da escola aparece trancado...",
      },
      {
        pergunta: "O que os caminhões estavam descarregando na escola?",
        opcoes: [
          "Alimentos para a cantina",
          "Caixas lacradas com etiquetas em outro idioma",
          "Uniformes escolares",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exato! O segundo parágrafo descreve 'caixas lacradas com etiquetas escritas em outro idioma'.",
        feedbackErro: "Releia o segundo parágrafo: a descrição do conteúdo dos caminhões aparece no final da frase.",
        ondeEstaNoTexto: "…descarregando caixas lacradas com etiquetas escritas em outro idioma.",
      },
      {
        pergunta: "Quem a coordenadora do laboratório foi vista conversando?",
        opcoes: ["Com os pais dos alunos", "Com dois técnicos desconhecidos", "Com o diretor de outra escola"],
        correta: 1,
        feedbackAcerto: "🔎 Correto! O terceiro parágrafo menciona 'dois técnicos desconhecidos'.",
        feedbackErro: "A resposta está no início do terceiro parágrafo.",
        ondeEstaNoTexto: "A coordenadora do laboratório foi vista conversando com dois técnicos desconhecidos...",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Agora junte TODAS as pistas espalhadas nos quatro parágrafos para montar a conclusão do caso.",
    perguntas: [
      {
        pergunta: "Juntando todas as pistas do relatório, o que provavelmente está acontecendo na escola?",
        opcoes: [
          "O laboratório está sendo modernizado com novos equipamentos de tecnologia",
          "A escola está sendo vendida para outra instituição",
          "Os alunos inventaram tudo, e não há nada acontecendo",
        ],
        correta: 0,
        feedbackAcerto:
          "🔎 Isso mesmo! Laboratório trancado + caixas com etiquetas técnicas + técnicos com manuais + fala sobre 'tecnologia e programação' formam uma corrente de pistas que só faz sentido junta: o laboratório está sendo modernizado.",
        feedbackErro:
          "Nenhuma pista sozinha prova a modernização, mas TODAS juntas (porta trancada, caixas técnicas, técnicos com manuais, fala sobre tecnologia) apontam claramente para isso.",
      },
      {
        pergunta: "Por que o texto nunca diz diretamente 'a escola está comprando equipamentos de robótica'?",
        opcoes: [
          "Porque isso não é verdade em nenhuma hipótese",
          "Porque o texto prefere que o leitor investigue e conclua isso juntando as pistas espalhadas",
          "Porque o autor esqueceu de escrever essa parte",
        ],
        correta: 1,
        feedbackAcerto:
          "🔎 Exatamente! Textos investigativos costumam espalhar pistas de propósito, convidando o leitor a montar a conclusão sozinho — isso é o implícito em ação.",
        feedbackErro:
          "O texto não afirma isso diretamente porque quer que o leitor construa essa conclusão juntando as pistas — não é falta de informação, é uma escolha de como contar o caso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para investigar pistas espalhadas em textos longos.",
    bloco: {
      instrucao: "Do primeiro ao último passo da investigação.",
      itens: [
        { id: "p1", texto: "Ler o texto inteiro, anotando pistas que parecem soltas.", imagemUrl: papel },
        { id: "p2", texto: "Relacionar as pistas de parágrafos diferentes entre si.", imagemUrl: lupa },
        { id: "p3", texto: "Montar uma conclusão que explique TODAS as pistas ao mesmo tempo.", imagemUrl: bussola },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🔎 Caso solucionado! Você seguiu o método certo de investigação de pistas distribuídas.",
      feedbackErro: "Pense: primeiro se coletam as pistas soltas, depois se relacionam entre si, e só então se conclui algo que explique tudo junto.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Novo caso! Leia sozinho e junte as pistas espalhadas pelos quatro parágrafos.",
    leitura: {
      titulo: "O Silêncio da Torcida",
      imagemUrl: mapa,
      destacar: ["cadeiras vazias", "placar zerado há três rodadas", "novo técnico contratado ontem"],
      paragrafos: [
        "No último domingo, o estádio do time da cidade recebeu apenas um terço do público que costumava lotar as arquibancadas em temporadas anteriores, deixando fileiras inteiras de cadeiras vazias.",
        "Nos jornais esportivos da semana, comentaristas destacaram que o placar do time está zerado há três rodadas seguidas, sem nenhuma vitória e com poucos gols marcados.",
        "Torcedores entrevistados na saída do estádio comentaram, decepcionados, que 'já não reconhecem o time que jogava há dois anos' e que 'a paciência está no limite'.",
        "Na quarta-feira seguinte, a diretoria anunciou, em poucas palavras, a contratação de um novo técnico, que assume o comando já para o próximo confronto.",
      ],
    },
    perguntas: [
      {
        pergunta: "Juntando as pistas do relato, por que a torcida provavelmente diminuiu nos jogos?",
        opcoes: [
          "Porque o estádio estava em reforma",
          "Porque o time vem tendo maus resultados e decepcionando os torcedores",
          "Porque houve uma mudança na data dos jogos",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Placar zerado + torcedores decepcionados formam a corrente de pistas que explica o esvaziamento do estádio.",
        feedbackErro: "Junte os dados: três rodadas sem vitória e torcedores dizendo que 'a paciência está no limite'. Isso aponta para maus resultados como causa do esvaziamento.",
      },
      {
        pergunta: "O que se pode inferir sobre o motivo da contratação do novo técnico?",
        opcoes: [
          "Foi uma decisão sem relação com o desempenho do time",
          "Foi uma resposta da diretoria aos maus resultados e à insatisfação da torcida",
          "O técnico anterior pediu férias",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Muito bem! A sequência de maus resultados e a insatisfação da torcida, somadas à troca de técnico logo depois, sugerem uma resposta da diretoria à crise.",
        feedbackErro: "O texto nunca diz isso diretamente, mas a ordem dos fatos (maus resultados → torcida insatisfeita → troca de técnico) sugere uma relação de causa entre eles.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Em textos longos, as pistas para uma inferência podem estar ESPALHADAS em parágrafos diferentes.",
      "Uma boa inferência precisa ser COERENTE: ela deve explicar todas as pistas ao mesmo tempo, sem contradizer nenhuma.",
      "O IMPLÍCITO é construído de propósito pelo autor, que convida o leitor a montar a conclusão juntando as informações.",
      "Sempre volte ao texto para checar se todas as pistas usadas realmente aparecem nele — inferência não é adivinhação.",
    ],
    miniDesafio: {
      pergunta: "Um relato diz: 'As luzes da casa ficaram acesas a noite toda' e, mais adiante, 'malas prontas perto da porta'. O que é coerente inferir?",
      opcoes: [
        "A família estava dormindo tranquilamente",
        "A família provavelmente vai viajar cedo e passou a noite se preparando",
        "A casa estava vazia há meses",
      ],
      correta: 1,
      feedbackAcerto: "🔎 Isso! Luzes acesas à noite + malas prontas formam uma corrente coerente de preparação para uma viagem.",
      feedbackErro: "Junte as duas pistas: luzes acesas a noite toda e malas prontas indicam preparação, provavelmente para uma viagem cedo.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Em textos longos, as pistas de uma inferência podem estar...",
        opcoes: [
          "Sempre em um único parágrafo",
          "Espalhadas em partes diferentes do texto",
          "Nunca presentes no texto",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Por isso é preciso ler o texto todo antes de concluir algo.",
        feedbackErro: "Textos longos costumam espalhar pistas em parágrafos diferentes, exigindo leitura completa antes de concluir.",
      },
      {
        pergunta: "2/5 — Uma inferência é considerada coerente quando ela...",
        opcoes: [
          "Contradiz uma das pistas do texto",
          "Explica todas as pistas do texto ao mesmo tempo, sem contradições",
          "Ignora metade das informações do texto",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Correto! Coerência significa que a conclusão encaixa com todas as pistas, sem deixar pontas soltas.",
        feedbackErro: "Uma boa inferência precisa explicar TODAS as pistas juntas, sem contradizer nenhuma delas.",
      },
      {
        pergunta: "3/5 — No caso do laboratório trancado, qual conjunto de pistas levou à conclusão de modernização?",
        opcoes: [
          "Apenas o fato de o laboratório estar trancado",
          "Porta trancada + caixas técnicas + técnicos com manuais + fala sobre tecnologia",
          "Apenas a fala sobre 'oportunidades novas'",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Foi a soma de VÁRIAS pistas espalhadas que permitiu montar a conclusão.",
        feedbackErro: "Nenhuma pista isolada seria suficiente; foi preciso juntar todas as pistas espalhadas pelos quatro parágrafos.",
      },
      {
        pergunta: "4/5 — Por que autores deixam informações implícitas em vez de escrever tudo diretamente?",
        opcoes: [
          "Porque esqueceram de escrever",
          "Porque querem convidar o leitor a investigar e concluir por conta própria",
          "Porque não sabiam o que escrever",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Exatamente! O implícito é uma escolha do autor para engajar o leitor na construção do sentido.",
        feedbackErro: "Deixar algo implícito costuma ser uma escolha proposital do autor, não um esquecimento.",
      },
      {
        pergunta: "5/5 — No caso do time de futebol, o que explica coerentemente a troca de técnico?",
        opcoes: [
          "Não há relação nenhuma entre os fatos do relato",
          "A sequência de maus resultados e a insatisfação da torcida",
          "O técnico pediu demissão por motivos pessoais não mencionados",
        ],
        correta: 1,
        feedbackAcerto: "🔎 Isso! Você já sabe montar conclusões coerentes juntando pistas espalhadas — investigação avançada concluída! 🌟",
        feedbackErro: "A sequência de fatos (maus resultados → torcida insatisfeita → troca de técnico) é a corrente de pistas mais coerente com o texto.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Missão: montando o quebra-cabeça de pistas",
    materiais: ["Uma notícia ou texto com mais de 3 parágrafos", "Papel e lápis"],
    passos: [
      "1) Escolham juntos um texto de pelo menos 3 ou 4 parágrafos (notícia, e-mail, comunicado).",
      "2) O agente investigador anota 3 pistas que aparecem em partes diferentes do texto.",
      "3) Depois, ele tenta montar uma conclusão que explique as três pistas ao mesmo tempo.",
      "4) Um adulto ajuda a checar: essa conclusão é coerente com TODAS as pistas encontradas?",
    ],
    registro: "🗣️ Registre por escrito ou em áudio: 'As pistas eram ___, ___ e ___. Juntando tudo, concluí que ___.'",
  },

  recompensa: {
    xp: 140,
    moedas: 80,
  },
};
