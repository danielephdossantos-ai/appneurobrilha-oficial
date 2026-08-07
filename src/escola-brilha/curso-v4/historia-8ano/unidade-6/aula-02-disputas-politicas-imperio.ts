import type { AulaGeoV1 } from "../../types";
import { url as imgConst } from "@/assets/historia-8ano/u6-constituicao-1824.jpg.asset.json";
import { url as imgFico } from "@/assets/historia-8ano/u6-dia-fico.jpg.asset.json";
import { url as imgPedro } from "@/assets/historia-8ano/u6-dom-pedro.jpg.asset.json";
import { url as imgFazenda } from "@/assets/historia-8ano/u6-fazenda-cafe.jpg.asset.json";
import { url as imgIpiranga } from "@/assets/historia-8ano/u6-ipiranga.jpg.asset.json";

export const aula02: AulaGeoV1 = {
  slug: "aula-02-disputas-politicas-imperio",
  titulo: "Trono em Disputa: Primeiro e Segundo Reinado",
  iconeTrilha: "👑",
  bncc: [
    "EF08HI15"
  ],
  duracaoMin: 30,
  estilo: "teen",
  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgConst,
    imagemDestaqueUrl: imgPedro,
    aurora: "Independência não é sinônimo de estabilidade. Entre 1822 e 1889, o Brasil imperial viveu abdicação, regências turbulentas e um imperador que assumiu aos 14 anos. O trono nunca esteve tão em disputa quanto na infância deste país.",
    falaFinal: "Nesta aula você desbloqueia a Engrenagem: Trono em Disputa."
  },
  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "D. Pedro I outorgou uma Constituição autoritária, com um Poder Moderador só dele. Isso deixou a elite política satisfeita?",
    pergunta: "Como a elite política reagiu ao autoritarismo de D. Pedro I?",
    fotoUrl: imgConst,
    opcoes: [
      {
        id: "conf",
        titulo: "CONFLITO E PRESSÃO",
        subtitulo: "até forçar a abdicação em 1831",
        emoji: "⚔️",
        cor: "from-teal-800 to-slate-950"
      },
      {
        id: "apoio",
        titulo: "APOIO TOTAL E SEM CRÍTICAS",
        subtitulo: "nenhuma oposição existiu",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950"
      }
    ],
    respostaCerta: "conf",
    feedbackAcerto: "Correto. A elite (sobretudo os liberais brasileiros) via D. Pedro I como autoritário e ainda ligado a Portugal. A pressão política culminou na abdicação em 1831.",
    feedbackErro: "Não. Houve forte oposição política, que culminou na abdicação de D. Pedro I em 1831.",
    falaFinal: "Ideia-base: poder centralizado gera disputa constante por espaço político."
  },
  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave das disputas políticas imperiais.",
    instrucao: "",
    cadernos: [
      {
        id: "abd",
        capa: "Abdicação",
        emoji: "📜",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgPedro,
        conteudo: "ABDICAÇÃO: em 1831, pressionado por liberais e por conflitos com portugueses residentes no Brasil, D. Pedro I renunciou ao trono em favor do filho, D. Pedro II, então com apenas 5 anos.",
        exemplo: "Exemplo: a Noite das Garrafadas (1831), confronto entre brasileiros e portugueses no Rio, foi um dos estopins da crise que levou à abdicação."
      },
      {
        id: "reg",
        capa: "Período Regencial",
        emoji: "🏛️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgConst,
        conteudo: "PERÍODO REGENCIAL (1831-1840): como D. Pedro II era criança, regentes governaram em seu nome. Foi um tempo de disputas entre liberais moderados, exaltados e restauradores — e de revoltas regionais pelo país.",
        exemplo: "Exemplo: o Ato Adicional de 1834 deu mais autonomia às províncias, tentando (sem sucesso total) acalmar as tensões regionais."
      },
      {
        id: "golpe",
        capa: "Golpe da Maioridade",
        emoji: "👑",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgPedro,
        conteudo: "GOLPE DA MAIORIDADE (1840): setores políticos anteciparam a maioridade de D. Pedro II, então com 14 anos, para encerrar a instabilidade regencial e recentralizar o poder em torno do imperador.",
        exemplo: "Exemplo: a frase 'Quero já!', atribuída a D. Pedro II, simboliza a pressa política em coroá-lo antes da idade legal (18 anos)."
      },
      {
        id: "part",
        capa: "Partidos Imperiais",
        emoji: "🎩",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgFazenda,
        conteudo: "PARTIDOS IMPERIAIS: no Segundo Reinado, Liberais e Conservadores se revezavam no poder pelo sistema de 'parlamentarismo às avessas' — era o imperador, via Poder Moderador, quem escolhia o gabinete, não o povo.",
        exemplo: "Exemplo: apesar de rivais no discurso, ambos os partidos defendiam a escravidão e o voto censitário — as elites econômicas continuavam no comando."
      }
    ],
    falaFinal: "Abdicação + Regência + Maioridade + Partidos. O poder imperial sempre em negociação."
  },
  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Infográfico das fases políticas do Império. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgConst,
    pontos: [
      {
        id: "p1",
        x: 22,
        y: 32,
        emoji: "📜",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgPedro,
        titulo: "1º REINADO (1822-1831)",
        texto: "D. Pedro I outorga a Constituição de 1824 com Poder Moderador. Autoritarismo e crise econômica levam à abdicação."
      },
      {
        id: "p2",
        x: 52,
        y: 55,
        emoji: "🏛️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgConst,
        titulo: "REGÊNCIAS (1831-1840)",
        texto: "D. Pedro II é criança; regentes disputam o poder em meio a revoltas regionais e instabilidade política."
      },
      {
        id: "p3",
        x: 80,
        y: 40,
        emoji: "👑",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgPedro,
        titulo: "2º REINADO (1840-1889)",
        texto: "Maioridade antecipada de D. Pedro II. Liberais e Conservadores se alternam no poder sob controle do Poder Moderador."
      }
    ],
    falaFinal: "Três fases. Um só fio condutor: quem controla o poder no Império?"
  },
  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre as disputas políticas do Império.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que levou D. Pedro I a abdicar em 1831?",
        fotoUrl: imgPedro,
        cards: [
          {
            id: "a",
            emoji: "⚔️",
            titulo: "Pressão política e conflitos com brasileiros",
            cor: "from-teal-600 to-slate-900"
          },
          {
            id: "b",
            emoji: "🎉",
            titulo: "Um convite para virar rei de Portugal só por prazer",
            cor: "from-amber-600 to-slate-900"
          },
          {
            id: "c",
            emoji: "🏖️",
            titulo: "Desejo de descansar",
            cor: "from-slate-600 to-slate-900"
          }
        ],
        correta: "a",
        feedbackAcerto: "Correto. Crise política, autoritarismo e conflitos com brasileiros levaram à abdicação.",
        feedbackErro: "Foi a pressão política e os conflitos (como a Noite das Garrafadas) que forçaram a abdicação."
      },
      {
        id: "q2",
        pergunta: "O que caracterizou o Período Regencial (1831-1840)?",
        fotoUrl: imgConst,
        cards: [
          {
            id: "a",
            emoji: "🏛️",
            titulo: "Instabilidade política e revoltas regionais",
            cor: "from-teal-600 to-slate-900"
          },
          {
            id: "b",
            emoji: "☮️",
            titulo: "Paz total sem nenhum conflito",
            cor: "from-amber-600 to-slate-900"
          },
          {
            id: "c",
            emoji: "🌍",
            titulo: "Fim da monarquia",
            cor: "from-slate-600 to-slate-900"
          }
        ],
        correta: "a",
        feedbackAcerto: "Correto. Foi um período de forte instabilidade, com várias revoltas regionais.",
        feedbackErro: "O Período Regencial foi marcado por instabilidade política e revoltas regionais."
      },
      {
        id: "q3",
        pergunta: "Por que o Golpe da Maioridade (1840) antecipou a coroação de D. Pedro II?",
        fotoUrl: imgPedro,
        cards: [
          {
            id: "a",
            emoji: "👑",
            titulo: "Para encerrar a instabilidade regencial",
            cor: "from-teal-600 to-slate-900"
          },
          {
            id: "b",
            emoji: "🎂",
            titulo: "Porque ele completou 18 anos",
            cor: "from-amber-600 to-slate-900"
          },
          {
            id: "c",
            emoji: "🌎",
            titulo: "Exigência de países estrangeiros",
            cor: "from-slate-600 to-slate-900"
          }
        ],
        correta: "a",
        feedbackAcerto: "Correto. A elite política antecipou a maioridade (aos 14 anos) para recentralizar o poder e acabar com a instabilidade.",
        feedbackErro: "Foi para encerrar a instabilidade regencial — D. Pedro II tinha só 14 anos, não 18."
      }
    ],
    falaFinal: "Radar afiado. Você já entende as três fases do jogo político imperial."
  },
  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois filtros sobre o poder no Império. Um mostra quem MANDAVA de fato; outro, quem ficava de FORA da disputa.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFazenda,
    camadas: [
      {
        id: "elite",
        rotulo: "Elite política (imperador + grandes proprietários)",
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        rect: {
          x: 10,
          y: 10,
          w: 80,
          h: 40
        },
        descricao: "Imperador, Poder Moderador e grandes proprietários de terra e escravizados controlavam as decisões, alternando-se entre partidos Liberal e Conservador."
      },
      {
        id: "povo",
        rotulo: "Maioria da população",
        emoji: "🧑‍🌾",
        cor: "from-cyan-700 to-slate-900",
        rect: {
          x: 5,
          y: 55,
          w: 90,
          h: 40
        },
        descricao: "Escravizados, libertos pobres e a maioria dos livres não tinham direito a voto (censitário) nem participação nas disputas do poder central."
      }
    ],
    falaFinal: "O jogo político do Império era disputado por poucos — a maioria ficava de fora."
  },
  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as fases políticas do Império.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Do Primeiro ao Segundo Reinado",
    paradas: [
      {
        id: "e1",
        emoji: "📜",
        rotulo: "1. Constituição de 1824",
        fotoUrl: imgConst,
        descricao: "D. Pedro I outorga carta autoritária, com Poder Moderador."
      },
      {
        id: "e2",
        emoji: "😤",
        rotulo: "2. Abdicação (1831)",
        fotoUrl: imgPedro,
        descricao: "Pressão política força D. Pedro I a renunciar ao trono."
      },
      {
        id: "e3",
        emoji: "🏛️",
        rotulo: "3. Regências (1831-1840)",
        fotoUrl: imgFazenda,
        descricao: "Regentes governam por D. Pedro II criança; revoltas eclodem pelo país."
      },
      {
        id: "e4",
        emoji: "👑",
        rotulo: "4. Golpe da Maioridade (1840)",
        fotoUrl: imgIpiranga,
        descricao: "D. Pedro II é coroado antecipadamente, aos 14 anos, iniciando o Segundo Reinado."
      }
    ],
    ordemCerta: [
      "e1",
      "e2",
      "e3",
      "e4"
    ],
    feedbackAcerto: "Perfeito. Constituição → Abdicação → Regências → Maioridade. A cronologia do poder imperial.",
    feedbackErro: "Essa não é a próxima etapa. Comece pela Constituição de 1824 e siga a cronologia.",
    falaFinal: "Quatro etapas. O trono brasileiro sempre em negociação."
  },
  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página das Engrenagens. Toque nos termos técnicos.",
    tituloLivro: "⚙️ As Engrenagens do Trono",
    subtitulo: "Página — Disputas do Poder Imperial",
    paragrafos: [
      {
        id: "p1",
        texto: "D. Pedro I outorgou a Constituição de 1824, que dava ao imperador o PODER MODERADOR — a capacidade de intervir sobre os outros três poderes. Esse autoritarismo, somado a conflitos com brasileiros, levou à ABDICAÇÃO em 1831.",
        chaves: [
          "Abdicação"
        ],
        definicoes: {
          Abdicação: "Renúncia de D. Pedro I ao trono em 1831, em favor do filho D. Pedro II, então com 5 anos."
        },
        fotoUrl: imgPedro
      },
      {
        id: "p2",
        texto: "Seguiu-se o PERÍODO REGENCIAL (1831-1840), tempo de forte instabilidade: regentes disputavam o poder e diversas revoltas regionais eclodiram, questionando o governo central.",
        chaves: [
          "Período Regencial"
        ],
        definicoes: {
          "Período Regencial": "Fase (1831-1840) em que regentes governaram em nome de D. Pedro II, ainda criança."
        },
        fotoUrl: imgConst
      },
      {
        id: "p3",
        texto: "Para encerrar essa instabilidade, setores políticos promoveram o GOLPE DA MAIORIDADE em 1840: D. Pedro II foi coroado aos 14 anos, antes da idade legal, iniciando o Segundo Reinado.",
        chaves: [
          "Golpe da Maioridade"
        ],
        definicoes: {
          "Golpe da Maioridade": "Antecipação da coroação de D. Pedro II em 1840, aos 14 anos, para recentralizar o poder."
        },
        fotoUrl: imgPedro
      },
      {
        id: "p4",
        texto: "No Segundo Reinado, PARTIDOS IMPERIAIS (Liberal e Conservador) se revezavam no governo, mas quem de fato escolhia os ministros era o imperador, via Poder Moderador — um 'parlamentarismo às avessas'.",
        chaves: [
          "Partidos Imperiais"
        ],
        definicoes: {
          "Partidos Imperiais": "Liberais e Conservadores, que se alternavam no poder sob controle do imperador no Segundo Reinado."
        },
        fotoUrl: imgFazenda
      }
    ],
    falaFinal: "Leitura concluída. Você já explica as disputas de poder do Primeiro e Segundo Reinado."
  },
  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador. Associe cada evento à sua fase.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      {
        id: "abd",
        emoji: "📜",
        rotulo: "Abdicação"
      },
      {
        id: "reg",
        emoji: "🏛️",
        rotulo: "Regências"
      },
      {
        id: "gol",
        emoji: "👑",
        rotulo: "Golpe da Maioridade"
      }
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "D. Pedro I renuncia ao trono",
          emoji: "📜",
          cor: "from-teal-700 to-slate-900"
        },
        municipioB: {
          nome: "1831",
          emoji: "🗓️",
          cor: "from-teal-600 to-slate-900"
        },
        contexto: "Crise do Primeiro Reinado.",
        pecaCertaId: "abd",
        feedbackAcerto: "Correto. Isso é a ABDICAÇÃO.",
        feedbackErro: "É a abdicação, em 1831."
      },
      {
        id: "r2",
        municipioA: {
          nome: "Revoltas regionais e regentes",
          emoji: "🏛️",
          cor: "from-amber-700 to-slate-900"
        },
        municipioB: {
          nome: "1831-1840",
          emoji: "🗓️",
          cor: "from-amber-600 to-slate-900"
        },
        contexto: "Instabilidade com D. Pedro II criança.",
        pecaCertaId: "reg",
        feedbackAcerto: "Correto. Isso são as REGÊNCIAS.",
        feedbackErro: "É o Período Regencial, de 1831 a 1840."
      },
      {
        id: "r3",
        municipioA: {
          nome: "D. Pedro II coroado aos 14 anos",
          emoji: "👑",
          cor: "from-cyan-700 to-slate-900"
        },
        municipioB: {
          nome: "1840",
          emoji: "🗓️",
          cor: "from-cyan-600 to-slate-900"
        },
        contexto: "Fim da instabilidade regencial.",
        pecaCertaId: "gol",
        feedbackAcerto: "Correto. Isso é o GOLPE DA MAIORIDADE.",
        feedbackErro: "É o Golpe da Maioridade, em 1840."
      },
      {
        id: "r4",
        municipioA: {
          nome: "Noite das Garrafadas",
          emoji: "🍾",
          cor: "from-teal-700 to-slate-900"
        },
        municipioB: {
          nome: "Conflito Brasil x Portugal no Rio",
          emoji: "⚔️",
          cor: "from-teal-600 to-slate-900"
        },
        contexto: "Estopim da crise de 1831.",
        pecaCertaId: "abd",
        feedbackAcerto: "Correto. Levou à Abdicação.",
        feedbackErro: "Foi um dos estopins da Abdicação."
      },
      {
        id: "r5",
        municipioA: {
          nome: "Ato Adicional de 1834",
          emoji: "📜",
          cor: "from-amber-700 to-slate-900"
        },
        municipioB: {
          nome: "Mais autonomia às províncias",
          emoji: "🗺️",
          cor: "from-amber-600 to-slate-900"
        },
        contexto: "Tentativa regencial de acalmar tensões.",
        pecaCertaId: "reg",
        feedbackAcerto: "Correto. Medida do Período Regencial.",
        feedbackErro: "É o Período Regencial — tentou dar autonomia às províncias."
      },
      {
        id: "r6",
        municipioA: {
          nome: "'Parlamentarismo às avessas'",
          emoji: "🎩",
          cor: "from-cyan-700 to-slate-900"
        },
        municipioB: {
          nome: "Imperador escolhe o gabinete",
          emoji: "👑",
          cor: "from-cyan-600 to-slate-900"
        },
        contexto: "Sistema do Segundo Reinado.",
        pecaCertaId: "gol",
        feedbackAcerto: "Correto. Iniciado após o Golpe da Maioridade.",
        feedbackErro: "É o Segundo Reinado, iniciado pelo Golpe da Maioridade."
      }
    ],
    falaFinal: "6 rodadas! Você já organiza a cronologia política do Império."
  },
  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do poder político imperial. Quem MANDAVA e quem ficava de FORA.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgFazenda,
    fatias: [
      {
        id: "elite",
        rotulo: "Elite política (~poucos %)",
        emoji: "👑",
        percentual: 15,
        cor: "#b45309",
        descricao: "Imperador, grandes proprietários e políticos dos partidos Liberal e Conservador concentravam o poder de decisão.",
        exemplos: [
          "👑 Imperador",
          "🎩 Políticos",
          "🏞️ Grandes proprietários"
        ]
      },
      {
        id: "resto",
        rotulo: "Restante da população (~maioria)",
        emoji: "🧑‍🌾",
        percentual: 85,
        cor: "#0f766e",
        descricao: "Escravizados, libertos e a maioria dos livres pobres não votavam nem participavam das disputas do poder central.",
        exemplos: [
          "⛓️ Escravizados",
          "🧑 Livres pobres",
          "👩‍🌾 Trabalhadores rurais"
        ]
      }
    ],
    falaFinal: "Poucos disputando o trono. Muitos fora da disputa. Essa é a marca do Império."
  },
  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear a Engrenagem Trono em Disputa.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgConst,
    perguntas: [
      {
        id: "av1",
        pergunta: "O que levou D. Pedro I a abdicar em 1831?",
        opcoes: [
          {
            id: "a",
            texto: "Pressão política e conflitos com brasileiros.",
            correta: true
          },
          {
            id: "b",
            texto: "Um pedido pacífico do Congresso Americano.",
            correta: false
          },
          {
            id: "c",
            texto: "Doença súbita sem relação política.",
            correta: false
          }
        ],
        feedbackAcerto: "Correto. Autoritarismo e conflitos levaram à crise que resultou na abdicação.",
        feedbackErro: "Foi a pressão política e os conflitos com brasileiros que forçaram a abdicação."
      },
      {
        id: "av2",
        pergunta: "O que marcou o Período Regencial (1831-1840)?",
        opcoes: [
          {
            id: "a",
            texto: "Instabilidade política e revoltas regionais.",
            correta: true
          },
          {
            id: "b",
            texto: "Total ausência de conflitos.",
            correta: false
          },
          {
            id: "c",
            texto: "Fim da escravidão no Brasil.",
            correta: false
          }
        ],
        feedbackAcerto: "Correto. Foi um período de forte instabilidade e revoltas.",
        feedbackErro: "O Período Regencial foi marcado por instabilidade política e revoltas regionais."
      },
      {
        id: "av3",
        pergunta: "Por que ocorreu o Golpe da Maioridade em 1840?",
        opcoes: [
          {
            id: "a",
            texto: "Para encerrar a instabilidade regencial, antecipando a coroação de D. Pedro II.",
            correta: true
          },
          {
            id: "b",
            texto: "Porque D. Pedro II completou 18 anos.",
            correta: false
          },
          {
            id: "c",
            texto: "Por exigência de Portugal.",
            correta: false
          }
        ],
        feedbackAcerto: "Correto. D. Pedro II foi coroado aos 14 anos para recentralizar o poder.",
        feedbackErro: "Foi para encerrar a instabilidade regencial — ele tinha só 14 anos."
      }
    ],
    selo: {
      nome: "Trono em Disputa",
      subtitulo: "Engrenagem do Poder Imperial",
      emoji: "👑",
      cor: "from-teal-500 to-slate-900",
      fotoUrl: imgPedro
    },
    falaFinal: "Engrenagem destravada. Você já domina as disputas políticas do Império."
  },
  recompensa: {
    xp: 500,
    moedas: 400,
    medalha: "Trono em Disputa"
  }
};
