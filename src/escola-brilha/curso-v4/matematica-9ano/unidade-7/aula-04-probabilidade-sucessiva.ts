import type { AulaV4 } from "../../types";

/** Aula 04 · U7 — Probabilidade de eventos sucessivos: princípio multiplicativo, com/sem reposição, evento complementar. */
export const aula04_probabilidadeSucessiva: AulaV4 = {
  slug: "u7-04-probabilidade-sucessiva",
  titulo: "A Sorte se Multiplica",
  iconeTrilha: "🎲",
  bncc: ["EF09MA20"],
  duracaoMin: 30,
  metodologias: ["vergnaud", "skemp"],

  momento01_motivacao: {
    titulo: "Duas sorteios, uma pergunta",
    historia:
      "{NOME}, o Instituto Brilha vai sortear DUAS vezes um prêmio: primeiro tira uma bolinha de uma urna com bolinhas coloridas, e depois tira outra bolinha de uma segunda urna. Qual é a chance de sair a combinação exata que você espera? Hoje você aprende a calcular a probabilidade de eventos que acontecem em sequência — os eventos sucessivos.",
  },

  momento02_exploracao: {
    instrucao: "Veja uma urna com 4 bolinhas: 1 azul, 1 vermelha, 1 verde, 1 amarela.",
    cenas: [
      {
        tipo: "escalaProb",
        itens: [
          { evento: "Sair a bolinha azul numa única retirada", nivel: "pouco" },
          { evento: "Sair alguma bolinha (azul, vermelha, verde ou amarela)", nivel: "certo" },
        ],
      },
      {
        tipo: "tabela",
        titulo: "Urna com 4 bolinhas",
        cabecalhos: ["Cor", "Quantidade"],
        linhas: [
          { rotulo: "1", valores: ["Azul", 1] },
          { rotulo: "2", valores: ["Vermelha", 1] },
          { rotulo: "3", valores: ["Verde", 1] },
          { rotulo: "4", valores: ["Amarela", 1] },
        ],
      },
      {
        tipo: "texto",
        texto: "🔑 A chance de tirar azul é 1/4. Mas e se você tirar DUAS bolinhas, uma depois da outra? A chance muda dependendo se você devolve a primeira bolinha à urna ou não!",
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia:
      "Se você tira uma bolinha azul (1/4) e DEVOLVE à urna, e depois tira de novo, qual a chance de sair azul as duas vezes?",
    pista: "Pense: cada retirada é independente se você devolve a bolinha. Multiplique as chances: 1/4 × 1/4.",
    revelacao:
      "Em eventos SUCESSIVOS INDEPENDENTES (com reposição), multiplicamos as probabilidades: P(A e B) = P(A) × P(B). Aqui: 1/4 × 1/4 = 1/16.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P(azul e depois azul) — com reposição",
      passos: [
        { expr: "1ª retirada: P(azul) = 1/4", explica: "4 bolinhas, 1 azul.", status: "neutro" },
        { expr: "Devolve a bolinha — urna volta a ter 4 bolinhas", explica: "A 2ª retirada é INDEPENDENTE da 1ª.", status: "ok" },
        { expr: "2ª retirada: P(azul) = 1/4", explica: "Mesma chance de antes.", status: "neutro" },
        { expr: "P(azul e azul) = 1/4 × 1/4 = 1/16", explica: "Princípio multiplicativo: multiplicamos as probabilidades de eventos independentes.", status: "ok", professor: "Quando um evento não interfere no outro (com reposição), a probabilidade de os dois acontecerem juntos é o PRODUTO das probabilidades individuais." },
      ],
      fatorada: "P = 1/16",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Eventos sucessivos: com e sem reposição",
    etapas: [
      {
        texto:
          "PRINCÍPIO MULTIPLICATIVO: para saber a probabilidade de dois (ou mais) eventos acontecerem em sequência, multiplicamos as probabilidades de cada evento: P(A e B) = P(A) × P(B).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Uma moeda é lançada 2 vezes. Qual a chance de sair CARA nas duas?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P(cara e cara) em 2 lançamentos",
            passos: [
              { expr: "P(cara no 1º lançamento) = 1/2", explica: "Moeda tem 2 lados igual chance.", status: "neutro" },
              { expr: "P(cara no 2º lançamento) = 1/2", explica: "O 2º lançamento não depende do 1º.", status: "neutro" },
              { expr: "P(cara e cara) = 1/2 × 1/2 = 1/4", explica: "Multiplicamos as duas probabilidades.", status: "ok" },
            ],
            fatorada: "P = 1/4 = 25%",
          },
          destaque: "Eventos independentes: sempre multiplique as probabilidades.",
        },
      },
      {
        texto:
          "COM REPOSIÇÃO: depois de cada retirada, o item volta para o total — a quantidade disponível não muda, e os eventos são INDEPENDENTES (um não afeta o outro).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Urna com 5 bolas (2 vermelhas, 3 azuis). Tira uma, ANOTA a cor e DEVOLVE. Tira outra.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P(vermelha e depois vermelha) — com reposição",
            passos: [
              { expr: "1ª retirada: P(vermelha) = 2/5", explica: "2 vermelhas em 5 bolas.", status: "neutro" },
              { expr: "Devolve a bola — total continua 5 bolas, 2 vermelhas", explica: "Nada muda para a 2ª retirada.", status: "ok" },
              { expr: "2ª retirada: P(vermelha) = 2/5", explica: "Mesma proporção de antes.", status: "neutro" },
              { expr: "P(vermelha e vermelha) = 2/5 × 2/5 = 4/25", explica: "Multiplicamos as duas frações iguais.", status: "ok" },
            ],
            fatorada: "P = 4/25 = 16%",
          },
          destaque: "Com reposição, a probabilidade da 2ª retirada é IGUAL à da 1ª.",
        },
      },
      {
        texto:
          "SEM REPOSIÇÃO: depois de cada retirada, o item NÃO volta — o total diminui e as chances mudam. Os eventos são DEPENDENTES (o 1º afeta o 2º).",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Mesma urna com 5 bolas (2 vermelhas, 3 azuis). Tira uma vermelha e NÃO devolve. Tira outra.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P(vermelha e depois vermelha) — sem reposição",
            passos: [
              { expr: "1ª retirada: P(vermelha) = 2/5", explica: "2 vermelhas em 5 bolas.", status: "neutro" },
              { expr: "NÃO devolve — agora restam 4 bolas, sendo 1 vermelha", explica: "O total e a quantidade de vermelhas diminuíram.", status: "x", professor: "Sem reposição, cada retirada muda o cenário para a próxima: o total de bolas cai de 5 para 4, e as vermelhas caem de 2 para 1." },
              { expr: "2ª retirada: P(vermelha) = 1/4", explica: "Agora só 1 vermelha em 4 bolas restantes.", status: "neutro" },
              { expr: "P(vermelha e vermelha) = 2/5 × 1/4 = 2/20 = 1/10", explica: "Multiplicamos as probabilidades (que mudaram entre as retiradas).", status: "ok" },
            ],
            fatorada: "P = 1/10 = 10%",
          },
          destaque: "Sem reposição, a 2ª probabilidade depende do que aconteceu na 1ª.",
        },
      },
      {
        texto:
          "EVENTO COMPLEMENTAR: a probabilidade de um evento NÃO acontecer é 1 menos a probabilidade dele acontecer: P(não A) = 1 − P(A). Útil quando é mais fácil calcular o 'não acontecer'.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Um dado de 6 faces é lançado. Qual a chance de NÃO sair o número 5?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P(não sair 5) — evento complementar",
            passos: [
              { expr: "P(sair 5) = 1/6", explica: "1 face favorável em 6.", status: "neutro" },
              { expr: "P(não sair 5) = 1 − 1/6 = 5/6", explica: "Complementar: tudo que não é '5' entre as 6 faces.", status: "ok", professor: "P(A) + P(não A) sempre soma 1 (100%), pois ou o evento acontece ou não acontece — não há terceira opção." },
            ],
            fatorada: "P = 5/6",
          },
          destaque: "P(A) + P(não A) = 1 sempre.",
        },
      },
      {
        texto:
          "ÁRVORE DE POSSIBILIDADES: um diagrama que organiza todos os resultados possíveis de eventos sucessivos em 'galhos', ajudando a contar e calcular probabilidades sem se perder.",
        exemploReal: {
          titulo: "🔎 Na prática",
          contexto: "Duas moedas lançadas: quantos resultados possíveis existem?",
          visualMat: {
            tipo: "tabela",
            titulo: "Árvore de possibilidades — 2 moedas",
            cabecalhos: ["Moeda 1", "Moeda 2", "Resultado"],
            linhas: [
              { rotulo: "1", valores: ["Cara", "Cara", "Cara-Cara"] },
              { rotulo: "2", valores: ["Cara", "Coroa", "Cara-Coroa"] },
              { rotulo: "3", valores: ["Coroa", "Cara", "Coroa-Cara"] },
              { rotulo: "4", valores: ["Coroa", "Coroa", "Coroa-Coroa"] },
            ],
          },
          destaque: "4 resultados possíveis = 2 × 2, exatamente o princípio multiplicativo em forma de tabela/árvore.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "Brilha resolve: uma gaveta tem 3 meias pretas e 2 meias brancas (total 5). Tiro uma meia, NÃO devolvo, e tiro outra. Qual a chance de tirar duas meias pretas seguidas?",
    resposta: "P(preta e preta) = 3/5 × 2/4 = 6/20 = 3/10.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P(preta e depois preta) — sem reposição",
      passos: [
        { expr: "1ª retirada: P(preta) = 3/5", explica: "3 pretas em 5 meias.", status: "neutro" },
        { expr: "Sem devolver: restam 4 meias, 2 pretas", explica: "O total caiu de 5 para 4, e pretas de 3 para 2.", status: "x", professor: "Cada retirada sem reposição muda o total e a quantidade do item retirado para a próxima chance." },
        { expr: "2ª retirada: P(preta) = 2/4", explica: "2 pretas restantes em 4 meias.", status: "neutro" },
        { expr: "P(preta e preta) = 3/5 × 2/4 = 6/20 = 3/10", explica: "Multiplico as duas probabilidades e simplifico.", status: "ok" },
      ],
      fatorada: "P = 3/10 = 30%",
      legenda: "Brilha resolve",
    },
    passos: [
      "Calculo a probabilidade da 1ª retirada: 3 pretas em 5 meias = 3/5.",
      "Como não devolvo, atualizo o total: agora são 4 meias, com 2 pretas restantes.",
      "Calculo a probabilidade da 2ª retirada: 2/4.",
      "Multiplico as duas probabilidades: 3/5 × 2/4 = 6/20, que simplifica para 3/10.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado:
      "Nós fazemos: uma urna tem 4 bolas (2 verdes, 2 amarelas). Tira uma bola, ANOTA, DEVOLVE à urna, e tira outra. Qual a chance de sair verde nas duas retiradas?",
    dica: "Com reposição, as duas retiradas são independentes — a probabilidade não muda entre elas. Multiplique P(verde) × P(verde).",
    visualMat: {
      tipo: "tabela",
      titulo: "Urna com 4 bolas",
      cabecalhos: ["Cor", "Quantidade"],
      linhas: [
        { rotulo: "1", valores: ["Verde", 2] },
        { rotulo: "2", valores: ["Amarela", 2] },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "P(verde e depois verde), com reposição, é:",
      opcoes: [{ nome: "1/2 × 1/2 = 1/4" }, { nome: "2/4 × 1/3" }, { nome: "1" }],
      respostaCerta: "1/2 × 1/2 = 1/4",
      feedbackAcerto:
        "🎯 Isso! P(verde) = 2/4 = 1/2 em cada retirada (com reposição, não muda). Multiplicando: 1/2 × 1/2 = 1/4.",
      feedbackErro:
        "Com reposição, a urna volta a ter 4 bolas (2 verdes) antes da 2ª retirada. P(verde) = 2/4 = 1/2 nas duas vezes. Multiplicando: 1/2 × 1/2 = 1/4.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "Você faz: a mesma urna com 4 bolas (2 verdes, 2 amarelas), mas agora SEM reposição — tira uma bola e NÃO devolve, depois tira outra. Qual a chance de sair verde nas duas retiradas?",
    visualMat: {
      tipo: "tabela",
      titulo: "Urna com 4 bolas — sem reposição",
      cabecalhos: ["Cor", "Quantidade inicial"],
      linhas: [
        { rotulo: "1", valores: ["Verde", 2] },
        { rotulo: "2", valores: ["Amarela", 2] },
      ],
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "P(verde e depois verde), sem reposição, é:",
      opcoes: [{ nome: "2/4 × 1/3 = 1/6" }, { nome: "1/2 × 1/2 = 1/4" }, { nome: "2/4 × 2/4 = 1/4" }],
      respostaCerta: "2/4 × 1/3 = 1/6",
      feedbackAcerto:
        "🎯 Correto! P(1ª verde) = 2/4. Sem devolver, restam 3 bolas com 1 verde: P(2ª verde) = 1/3. Multiplicando: 2/4 × 1/3 = 2/12 = 1/6.",
      feedbackErro:
        "Sem reposição, depois da 1ª verde sair, restam só 3 bolas (1 verde, 2 amarelas). P(1ª) = 2/4 e P(2ª) = 1/3. Multiplicando: 2/4 × 1/3 = 1/6.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Um sorteio beneficente vende 20 rifas numeradas, sendo 4 rifas premiadas. Você compra 1 rifa, e um amigo compra outra rifa (diferente da sua, sem reposição — as rifas já vendidas saem do total disponível para sorteio).",
    problema:
      "Se o sorteio tira 2 rifas premiadas sem reposição dentre as 20, qual a chance das DUAS primeiras rifas sorteadas serem premiadas?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P(premiada e depois premiada) em 20 rifas, 4 premiadas",
      passos: [
        { expr: "1ª rifa sorteada: P(premiada) = 4/20 = 1/5", explica: "4 premiadas em 20 rifas.", status: "neutro" },
        { expr: "Sem reposição: restam 19 rifas, 3 premiadas", explica: "A rifa sorteada sai do total.", status: "x", professor: "Sorteios sem reposição sempre reduzem o total e, se o evento anterior for do tipo desejado, também reduzem a quantidade favorável." },
        { expr: "2ª rifa sorteada: P(premiada) = 3/19", explica: "3 premiadas restantes em 19 rifas.", status: "neutro" },
        { expr: "P = 1/5 × 3/19 = 3/95", explica: "Multiplico as duas probabilidades.", status: "ok" },
      ],
      fatorada: "P = 3/95 ≈ 3,2%",
      legenda: "Aplicação",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A probabilidade das duas primeiras rifas sorteadas serem premiadas é:",
      opcoes: [{ nome: "3/95" }, { nome: "4/20 × 4/20" }, { nome: "1/5" }],
      respostaCerta: "3/95",
      feedbackAcerto:
        "🎯 Isso! P(1ª premiada) = 4/20 = 1/5. Sem reposição, restam 19 rifas com 3 premiadas: P(2ª premiada) = 3/19. Multiplicando: 1/5 × 3/19 = 3/95.",
      feedbackErro:
        "É preciso multiplicar as duas probabilidades sucessivas SEM reposição: 4/20 (1ª) × 3/19 (2ª, pois uma rifa premiada e uma rifa a menos já saíram) = 3/95.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Princípio multiplicativo: P(A e B) = P(A) × P(B) para eventos sucessivos.",
      "Com reposição: o item volta, o total não muda, eventos são independentes.",
      "Sem reposição: o item não volta, o total diminui, eventos são dependentes.",
      "Evento complementar: P(não A) = 1 − P(A); P(A) + P(não A) = 1.",
      "Árvore de possibilidades organiza todos os resultados de eventos sucessivos.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Uma moeda é lançada 2 vezes. Qual a probabilidade de sair coroa nas duas vezes?",
        opcoes: ["1/2 × 1/2 = 1/4", "1/2 + 1/2 = 1", "1/2"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! P(coroa) = 1/2 em cada lançamento independente; multiplicando: 1/2 × 1/2 = 1/4.",
        feedbackErro: "Para eventos sucessivos independentes, multiplicamos as probabilidades: 1/2 × 1/2 = 1/4, não somamos.",
      },
      {
        pergunta: "Uma urna tem 6 bolas (3 vermelhas, 3 azuis). Tira uma bola e DEVOLVE antes da 2ª retirada. Isso é um caso:",
        opcoes: ["Com reposição — eventos independentes", "Sem reposição — eventos dependentes", "Nenhuma probabilidade pode ser calculada"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Devolver a bola mantém o total igual — as retiradas são independentes (com reposição).",
        feedbackErro: "Quando a bola é devolvida antes da próxima retirada, o total não muda — isso é COM reposição, e os eventos são independentes.",
      },
      {
        pergunta: "Numa urna com 5 bolas (2 pretas, 3 brancas), tira-se uma bola SEM devolver e depois outra. Qual a probabilidade de sair preta e depois preta?",
        opcoes: ["2/5 × 1/4 = 1/10", "2/5 × 2/5 = 4/25", "2/5 + 1/4"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! P(1ª preta) = 2/5; sem devolver restam 4 bolas com 1 preta: P(2ª preta) = 1/4. Multiplicando: 2/5 × 1/4 = 1/10.",
        feedbackErro: "Sem reposição, depois de tirar 1 preta restam 4 bolas com só 1 preta. P = 2/5 × 1/4 = 1/10, não 2/5 × 2/5 (isso seria com reposição).",
      },
      {
        pergunta: "A probabilidade de chover amanhã é 30%. Qual é a probabilidade de NÃO chover?",
        opcoes: ["70%", "30%", "100%"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! P(não A) = 1 − P(A) = 100% − 30% = 70%.",
        feedbackErro: "Use o evento complementar: P(não chover) = 100% − 30% = 70%, pois P(A) + P(não A) sempre soma 100%.",
      },
      {
        pergunta: "Ao lançar 2 dados de 6 faces, quantos resultados possíveis existem no total (considerando a ordem dos dados)?",
        opcoes: ["6 × 6 = 36", "6 + 6 = 12", "6"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Pelo princípio multiplicativo, 6 possibilidades do 1º dado vezes 6 do 2º = 36 combinações possíveis.",
        feedbackErro: "Use o princípio multiplicativo: 6 resultados possíveis no 1º dado × 6 no 2º dado = 36, não a soma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Sorteio em família",
    materiais: ["8 cartões ou papéis pequenos", "Caneta", "Um saquinho ou caixa"],
    passos: [
      "Escreva em 8 papéis: 3 com 'ganhou' e 5 com 'perdeu'. Coloque tudo num saquinho.",
      "Calcule com a família a probabilidade de tirar 'ganhou' na primeira tentativa.",
      "Sorteie um papel SEM devolver, e calcule a nova probabilidade de tirar 'ganhou' na segunda tentativa.",
      "Compare: como a probabilidade muda quando não há reposição? Registre a conta completa.",
    ],
    registro: "📝 Foto ou anotação com as duas probabilidades calculadas (antes e depois da 1ª retirada).",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Estrategista da Sorte" },
};
