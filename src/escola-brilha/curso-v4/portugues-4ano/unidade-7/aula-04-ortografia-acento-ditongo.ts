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
 * Unidade 7 · Aula 4 — O Baú das Letras Certas
 * -------------------------------------------------------------
 * Foco: ortografia em uso — acentuação de paroxítonas, ditongos e
 * o uso de H e Ç.
 * BNCC: EF04LP18 (acentuação de paroxítonas terminadas em -L, -R,
 * -X, -N, -ÃO, -Ã, ditongo), EF04LP21 (uso de H e Ç).
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-ortografia-acento-ditongo",
  titulo: "O Baú das Letras Certas",
  iconeTrilha: "📦",
  bncc: ["EF04LP01", "EF04LP02", "EF04LP03", "EF04LP04", "EF35LP12", "EF35LP13"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Um baú cheio de acentos e letras teimosas",
    historia:
      "A expedição encontrou um baú antigo trancado com três fechaduras: uma em forma de acento, outra em forma de H e outra em forma de Ç. Brilha tentou a chave: — Olha, ÁRVORE tem acento porque é paroxítona terminada em -R! Já HOJE começa com H, que não tem som nenhum! E AÇÚCAR usa Ç para fazer o som de /s/ antes de A! Vamos abrir esse baú descobrindo as regras da escrita certa?",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Observe as pistas antes de abrir o baú das letras certas.",
    bloco: {
      titulo: "O Baú das Letras Certas",
      capaImagemUrl: mapa,
      pistas: [
        { imagemUrl: estrela, nome: "Uma palavra com acento" },
        { imagemUrl: lapis, nome: "Uma letra que às vezes não tem som" },
      ],
      pergunta: "Sobre o que essa expedição vai investigar?",
      hipoteses: [
        {
          texto: "As regras de acentuação das paroxítonas, os ditongos e o uso das letras H e Ç.",
          imagemUrl: estrela,
        },
        { texto: "Como contar histórias em outra língua.", imagemUrl: livro },
        { texto: "Como desenhar um baú de tesouro.", imagemUrl: arvore },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso mesmo! Vamos descobrir as regras que decidem onde vai o acento, o H e o Ç.",
      feedbackErro: "Pense no baú: ele guarda regras de ESCRITA. É sobre isso que vamos investigar.",
      dica: "🧭 Pista de explorador: paroxítona é a palavra com a força na PENÚLTIMA sílaba; ditongo é quando duas vogais se juntam na mesma sílaba. Use essa ideia para eliminar as alternativas que não combinam.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Toda boa exploradora conhece o nome de cada fechadura antes de abrir o baú.",
    cards: [
      {
        palavra: "paroxítona",
        explicacao: "Palavra cuja sílaba mais forte (tônica) é a penúltima.",
        exemplo: "ÁR-VO-RE: a força cai na penúltima sílaba, VO. Por isso tem acento.",
        imagemUrl: estrela,
      },
      {
        palavra: "ditongo",
        explicacao: "Encontro de duas vogais na mesma sílaba, formando um só som.",
        exemplo: "PAI, CÉU, MOITA: as vogais AI, ÉU e OI ficam juntas na mesma sílaba.",
        imagemUrl: bussola,
      },
      {
        palavra: "H (letra sem som)",
        explicacao: "Letra que, no início da palavra, não representa nenhum som, mas é obrigatória na escrita.",
        exemplo: "HOJE, HORA, HOTEL começam com H mudo.",
        imagemUrl: lapis,
      },
      {
        palavra: "Ç (cedilha)",
        explicacao: "Letra usada para representar o som /s/ antes de A, O, U (nunca antes de E ou I).",
        exemplo: "AÇÚCAR, MOÇA, FORÇA usam Ç antes de A, O e U.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Abrindo as fechaduras do baú",
    instrucao: "Veja as regras de acento, ditongo, H e Ç em ação.",
    blocos: [
      {
        tipo: "regraOrtografica",
        regra: "Paroxítonas terminadas em -L, -R, -X, -N, -ÃO, -Ã, ditongo levam acento",
        explicacao:
          "As palavras paroxítonas (força na penúltima sílaba) recebem acento gráfico quando terminam em -L (FÁCIL), -R (AÇÚCAR — atenção: sem acento porque termina em CAR, mas ÁGIL tem acento por terminar em L), -X (TÓRAX), -N (HÍFEN), -ÃO/-Ã (ÓRGÃO, ÍMÃ) ou ditongo (ÁGUA, HISTÓRIA). Já palavras terminadas em -A, -E, -O, -EM, -ENS geralmente NÃO recebem acento (CASA, LIVRE). O H no início de palavra não tem som (HOJE, HORA) mas é obrigatório. O Ç aparece antes de A, O, U para dar o som de /s/ (AÇÚCAR, MOÇA, FORÇA); antes de E e I usamos apenas S ou SS.",
        exemplos: [
          { palavra: "fácil", destaque: "-cil", motivo: "Paroxítona terminada em L: recebe acento." },
          { palavra: "água", destaque: "-gua", motivo: "Paroxítona com ditongo: recebe acento." },
          { palavra: "açúcar", destaque: "ç", motivo: "Ç antes de U representa o som /s/." },
        ],
        desafios: [
          {
            molde: "hist_ria",
            opcoes: ["ó", "o", "ô"],
            correta: 0,
            frase: "Essa história é muito antiga.",
            feedbackErro: "HISTÓRIA é paroxítona com ditongo (IA); leva acento agudo.",
          },
          {
            molde: "_oje vamos passear",
            opcoes: ["H", "", "R"],
            correta: 0,
            frase: "Hoje vamos passear no parque.",
            feedbackErro: "HOJE começa com H, letra sem som mas obrigatória na escrita.",
          },
          {
            molde: "a__úcar doce",
            opcoes: ["ç", "s", "x"],
            correta: 0,
            frase: "O açúcar doce estava na mesa.",
            feedbackErro: "AÇÚCAR usa Ç para o som /s/ antes de U.",
          },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha registrou a descoberta no diário de bordo da expedição.",
    leitura: {
      titulo: "O Diário do Baú das Letras Certas",
      imagemUrl: pergaminho,
      legendaImagem: "Página do diário de bordo",
      destacar: ["paroxítona", "ditongo", "h", "ç"],
      paragrafos: [
        "Toda palavra tem uma sílaba mais forte, chamada de sílaba TÔNICA. Quando essa força cai na penúltima sílaba, a palavra é PAROXÍTONA, como em ÁR-VO-RE.",
        "Paroxítonas recebem acento quando terminam em -L, -R, -X, -N, -ÃO, -Ã ou em DITONGO (duas vogais juntas na mesma sílaba): FÁCIL, TÓRAX, ÓRGÃO, ÁGUA, HISTÓRIA. Mas palavras terminadas em -A, -E, -O geralmente não levam acento: CASA, LIVRE, CARRO.",
        "A letra H, no começo da palavra, não tem som nenhum, mas é obrigatória: HOJE, HORA, HOTEL. Já dentro de palavras como CHUVA e ALHO, o H forma dupla com outra letra e faz parte de um novo som.",
        "A letra Ç (cedilha) aparece antes de A, O e U para representar o som de /s/: AÇÚCAR, MOÇA, FORÇA. Antes de E e I, esse som é escrito com S ou SS, nunca com Ç.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no diário se precisar. As respostas estão escritas nele.",
    perguntas: [
      {
        pergunta: "O que é uma palavra paroxítona?",
        opcoes: [
          "A que tem a força na penúltima sílaba",
          "A que tem a força na última sílaba",
          "A que não tem nenhuma sílaba forte",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Paroxítona tem a força na penúltima sílaba.",
        feedbackErro: "Releia: 'Quando essa força cai na penúltima sílaba, a palavra é PAROXÍTONA'.",
        ondeEstaNoTexto: "essa força cai na penúltima sílaba, a palavra é PAROXÍTONA",
        dica: "🧭 Pista de explorador: releia o primeiro parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A que tem a força na penúltima sílaba”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Antes de quais letras usamos o Ç?",
        opcoes: ["A, O, U", "E, I", "Todas as vogais"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Ç aparece antes de A, O e U.",
        feedbackErro: "Releia: 'A letra Ç... aparece antes de A, O e U'.",
        ondeEstaNoTexto: "aparece antes de A, O e U para representar o som de /s/",
        dica: "🧭 Pista de explorador: releia o último parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “A, O, U”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "O que é um ditongo?",
        opcoes: [
          "Duas vogais juntas na mesma sílaba",
          "Uma letra sem som",
          "Um sinal de pontuação",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Ditongo é o encontro de duas vogais na mesma sílaba.",
        feedbackErro: "Releia: 'DITONGO (duas vogais juntas na mesma sílaba)'.",
        ondeEstaNoTexto: "DITONGO (duas vogais juntas na mesma sílaba)",
        dica: "🧭 Pista de explorador: releia o segundo parágrafo do diário.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Duas vogais juntas na mesma sílaba”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem faz a descoberta e onde ela é registrada?",
    perguntas: [
      {
        pergunta: "Onde a expedição encontrou o baú com as três fechaduras?",
        opcoes: ["Na trilha da expedição", "Dentro de uma escola", "No fundo do mar"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O baú foi encontrado na trilha da expedição.",
        feedbackErro: "Releia a motivação: 'A expedição encontrou um baú antigo trancado...'.",
        dica: "🧭 Pista de explorador: releia o início da motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Na trilha da expedição”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Qual palavra Brilha usou como exemplo de Ç na motivação?",
        opcoes: ["Açúcar", "Hoje", "Árvore"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Brilha usou AÇÚCAR como exemplo de Ç.",
        feedbackErro: "Volte à motivação: Brilha falou 'AÇÚCAR usa Ç para fazer o som de /s/'.",
        dica: "🧭 Pista de explorador: releia a fala de Brilha na motivação.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Açúcar”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Organize os passos para descobrir se uma paroxítona precisa de acento.",
    bloco: {
      instrucao: "Do primeiro passo ao último.",
      itens: [
        { id: "p1", texto: "Descubra qual é a sílaba mais forte da palavra.", imagemUrl: estrela },
        { id: "p2", texto: "Veja se essa força cai na penúltima sílaba (paroxítona).", imagemUrl: bussola },
        { id: "p3", texto: "Confira a terminação: -L, -R, -X, -N, -ÃO, -Ã ou ditongo?", imagemUrl: lapis },
        { id: "p4", texto: "Se a terminação combinar, coloque o acento.", imagemUrl: livro },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4"],
      feedbackAcerto: "🎉 Perfeito! Essa é a rota certa para descobrir o acento.",
      feedbackErro: "Pense: primeiro se acha a sílaba forte, depois se confirma que é paroxítona, depois se olha a terminação.",
      dica: "🧭 Pista de explorador: a sílaba tônica vem sempre primeiro na investigação.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho um trecho do diário de viagem e responda.",
    leitura: {
      titulo: "O Diário da Chácara da Vovó",
      imagemUrl: arvore,
      destacar: ["fácil", "força", "hoje"],
      paragrafos: [
        "Hoje fomos até a chácara da vovó. Foi fácil chegar porque o caminho tinha uma placa clara. Lá, ela fez um bolo com bastante açúcar e força nos braços para misturar a massa.",
        "Brilha anotou no diário: — FÁCIL é paroxítona terminada em L, por isso tem acento. FORÇA tem Ç porque o som de /s/ vem antes de A.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que a palavra FÁCIL tem acento, segundo o texto?",
        opcoes: [
          "Porque é paroxítona terminada em L",
          "Porque começa com H",
          "Porque tem duas sílabas apenas",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! FÁCIL é paroxítona terminada em L.",
        feedbackErro: "Releia: 'FÁCIL é paroxítona terminada em L, por isso tem acento.'",
        ondeEstaNoTexto: "FÁCIL é paroxítona terminada em L, por isso tem acento",
        dica: "🧭 Pista de explorador: releia a anotação de Brilha no fim do texto.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque é paroxítona terminada em L”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
      {
        pergunta: "Por que FORÇA se escreve com Ç?",
        opcoes: [
          "Porque o som de /s/ vem antes de A",
          "Porque é uma palavra proparoxítona",
          "Porque termina em R",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Ç aparece antes de A para o som /s/.",
        feedbackErro: "Releia: 'FORÇA tem Ç porque o som de /s/ vem antes de A.'",
        ondeEstaNoTexto: "FORÇA tem Ç porque o som de /s/ vem antes de A",
        dica: "🧭 Pista de explorador: releia a última frase do texto.",
        reensino:
          "📚 Vamos rever juntos: a resposta certa é “Porque o som de /s/ vem antes de A”. Agora releia a pergunta com essa ideia na cabeça — pense antes de responder.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Escolha a letra certa",
    instrucao: "Arraste cada palavra até a gaveta certa: precisa de acento ou não precisa.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "As Gavetas do Baú",
      bloco: {
        instrucao: "Pense na regra: paroxítona com terminação -L, -R, -X, -N, -ÃO, -Ã ou ditongo leva acento.",
        itens: [
          { id: "i1", texto: "fácil", alvoId: "com-acento" },
          { id: "i2", texto: "casa", alvoId: "sem-acento" },
          { id: "i3", texto: "história", alvoId: "com-acento" },
          { id: "i4", texto: "livre", alvoId: "sem-acento" },
          { id: "i5", texto: "órgão", alvoId: "com-acento" },
          { id: "i6", texto: "carro", alvoId: "sem-acento" },
          { id: "i7", texto: "água", alvoId: "com-acento" },
          { id: "i8", texto: "menina", alvoId: "sem-acento" },
        ],
        alvos: [
          { id: "com-acento", nome: "Leva acento", imagemUrl: estrela, descricao: "Paroxítona com terminação especial" },
          { id: "sem-acento", nome: "Não leva acento", imagemUrl: lapis, descricao: "Terminada em A, E, O comuns" },
        ],
        feedbackAcerto: "🎉 Excelente! Você organizou as gavetas do baú.",
        feedbackErro: "Veja a terminação da palavra: -L, -R, -ÃO, -Ã e ditongo pedem acento.",
        dica: "🧭 Pista de explorador: -A, -E, -O simples normalmente não levam acento.",
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
        titulo: "Texto com acentos, H e Ç",
        comando:
          "Escreva um parágrafo contando uma descoberta da expedição, usando pelo menos 2 palavras paroxítonas com acento (fácil, história, açúcar...), 1 palavra com H (hoje, hora) e 1 palavra com Ç (força, moça, açúcar).",
        linhas: 5,
        modelo: [
          "Hoje a expedição achou um baú com uma fechadura difícil de abrir.",
          "Foi fácil perceber que a história do baú tinha muitos segredos.",
          "Com força nos braços e um pouco de açúcar de sorte, conseguimos abrir tudo.",
        ],
        checklist: [
          "Meu texto tem começo, meio e fim.",
          "Comecei cada frase com letra maiúscula e fechei com ponto.",
          "Usei pelo menos 2 paroxítonas com acento.",
          "Usei pelo menos 1 palavra com H.",
          "Usei pelo menos 1 palavra com Ç.",
          "Li em voz alta e consertei o que ficou estranho.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento_fluencia: {
    titulo: "Leitura expressiva: O Baú das Letras Certas",
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO. A meta não é correr: é ler como quem conta.",
    texto: [
      "Hoje o baú finalmente se abriu, revelando páginas cheias de regras de escrita.",
      "Cada acento tinha um motivo, cada H silencioso guardava sua história, e cada Ç fazia o som certo antes de A, O ou U.",
      "A expedição aprendeu que a ortografia também é um tesouro que vale a pena descobrir.",
    ],
    metaSegundos: 31,
  },

  momento09_revisao: {
    pontos: [
      "Paroxítona é a palavra com a força na penúltima sílaba.",
      "Paroxítonas terminadas em -L, -R, -X, -N, -ÃO, -Ã ou ditongo recebem acento.",
      "O H no início da palavra não tem som, mas é obrigatório na escrita.",
      "O Ç representa o som /s/ antes de A, O, U (nunca antes de E ou I).",
    ],
    miniDesafio: {
      pergunta: "Por que a palavra ÁGUA tem acento?",
      opcoes: ["Porque é paroxítona com ditongo", "Porque começa com H", "Porque termina em A simples"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! ÁGUA é paroxítona com ditongo UA.",
      feedbackErro: "Releia a explicação: paroxítona com ditongo leva acento.",
      dica: "🧭 Pista de explorador: veja se há duas vogais juntas na mesma sílaba.",
      reensino: "📚 Vamos rever juntos: a resposta certa é “Porque é paroxítona com ditongo”. Agora releia a pergunta com essa ideia na cabeça.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que é uma palavra paroxítona?",
        opcoes: ["A que tem a força na penúltima sílaba", "A que tem a força na última sílaba", "A que não tem sílaba forte", "A que tem só uma sílaba"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Paroxítona = força na penúltima sílaba.",
        feedbackErro: "Lembre: paroxítona tem a força na penúltima sílaba.",
        feedbackOpcoes: [
          null,
          "❌ Essa é a oxítona, não a paroxítona.",
          "❌ Toda palavra tem uma sílaba mais forte.",
          "❌ Palavra de uma sílaba é chamada de monossílaba.",
        ],
        dica: "🧭 Pista de explorador: PARA (penúltima) + OXÍTONA (força).",
        reensino: "📚 Vamos rever juntos: a resposta certa é “A que tem a força na penúltima sílaba”.",
      },
      {
        pergunta: "2/5 — Qual destas terminações pede acento em paroxítonas?",
        opcoes: ["-L (como em FÁCIL)", "-A (como em CASA)", "-E (como em LIVRE)", "-O (como em CARRO)"],
        correta: 0,
        feedbackAcerto: "🎉 Correto! Terminação -L pede acento em paroxítonas.",
        feedbackErro: "Terminações -A, -E, -O comuns geralmente não pedem acento.",
        feedbackOpcoes: [
          null,
          "❌ -A simples normalmente não leva acento em paroxítonas.",
          "❌ -E simples normalmente não leva acento em paroxítonas.",
          "❌ -O simples normalmente não leva acento em paroxítonas.",
        ],
        dica: "🧭 Pista de explorador: pense em FÁCIL, ÁGIL, DIFÍCIL.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “-L (como em FÁCIL)”.",
      },
      {
        pergunta: "3/5 — O que é um ditongo?",
        opcoes: ["Duas vogais juntas na mesma sílaba", "Uma letra muda", "Um acento gráfico", "Uma sílaba tônica"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Ditongo é encontro de duas vogais na mesma sílaba.",
        feedbackErro: "Ditongo é quando duas vogais formam um só som na mesma sílaba.",
        feedbackOpcoes: [
          null,
          "❌ Isso é o H, letra sem som.",
          "❌ Acento gráfico é o sinal, não o encontro de vogais.",
          "❌ Sílaba tônica é a mais forte, não o ditongo em si.",
        ],
        dica: "🧭 Pista de explorador: pense em PAI, CÉU, MOITA.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Duas vogais juntas na mesma sílaba”.",
      },
      {
        pergunta: "4/5 — Antes de quais letras usamos Ç?",
        opcoes: ["A, O, U", "E, I", "Todas as vogais", "Nenhuma vogal"],
        correta: 0,
        feedbackAcerto: "🎉 Exato! Ç aparece antes de A, O, U.",
        feedbackErro: "Releia: Ç aparece antes de A, O, U, nunca antes de E ou I.",
        feedbackOpcoes: [
          null,
          "❌ Antes de E, I usamos S ou SS, não Ç.",
          "❌ Ç não é usado antes de todas as vogais.",
          "❌ Ç sempre aparece antes de alguma vogal (A, O, U).",
        ],
        dica: "🧭 Pista de explorador: pense em AÇÚCAR, MOÇA, FORÇA.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “A, O, U”.",
      },
      {
        pergunta: "5/5 — Por que a letra H em HOJE é chamada de 'muda'?",
        opcoes: [
          "Porque não representa nenhum som",
          "Porque é sempre acentuada",
          "Porque forma ditongo com O",
          "Porque substitui o Ç",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Expedição concluída! O H inicial não tem som.",
        feedbackErro: "Releia: 'A letra H, no começo da palavra, não tem som nenhum'.",
        feedbackOpcoes: [
          null,
          "❌ O H não recebe acento, pois não é vogal.",
          "❌ Ditongo é encontro de vogais; H é consoante.",
          "❌ H e Ç têm funções diferentes na escrita.",
        ],
        dica: "🧭 Pista de explorador: fale HOJE em voz alta — o H não soa.",
        reensino: "📚 Vamos rever juntos: a resposta certa é “Porque não representa nenhum som”.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às letras do baú",
    materiais: ["Papel e lápis", "Um livro, revista ou embalagem qualquer da casa"],
    passos: [
      "1) Junto com um adulto, encontrem 3 palavras paroxítonas com acento (como FÁCIL, ÁGUA, HISTÓRIA).",
      "2) Encontrem 2 palavras que comecem com H mudo (como HOJE, HORA).",
      "3) Encontrem 2 palavras com Ç (como AÇÚCAR, FORÇA, MOÇA).",
      "4) Leiam todas as palavras em voz alta, explicando a regra de cada uma.",
    ],
    registro: "📝 Uma lista com as palavras encontradas e a regra que cada uma segue.",
  },

  recompensa: {
    xp: 130,
    moedas: 75,
  },
};
