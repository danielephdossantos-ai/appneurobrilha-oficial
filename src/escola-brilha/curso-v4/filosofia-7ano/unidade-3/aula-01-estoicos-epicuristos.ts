import type { AulaGeoV1 } from "../../types";
import { url as marcoAurelio } from "@/assets/filosofia-7ano/u3-marco-aurelio.jpg.asset.json";
import { url as jardim } from "@/assets/filosofia-7ano/u3-jardim-epicuro.jpg.asset.json";
import { url as ataraxia } from "@/assets/filosofia-7ano/u3-ataraxia.jpg.asset.json";

/**
 * Filosofia · 7º Ano · Unidade 3 · Aula 01
 * "Estoicos e Epicuristos" — EF07FI03 (autoral)
 * Tema: duas escolas helenísticas em busca da paz interior (ataraxia).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-estoicos-epicuristos",
  titulo: "Estoicos e Epicuristos",
  iconeTrilha: "🌊",
  bncc: ["EF07FI03"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Duas escolas, duas rotas pra paz.",
    mapaUrl: ataraxia,
    imagemDestaqueUrl: ataraxia,
    aurora:
      "Investigador, depois de Aristóteles o mundo grego ENTROU EM CRISE — Alexandre morreu, impérios ruíram, tudo virou instabilidade. E aí duas escolas fizeram a mesma pergunta prática: 'como viver em paz quando tudo desmorona?'. Os ESTOICOS responderam: 'aceite o que não depende de você'. Os EPICURISTOS: 'cultive prazeres simples com amigos'. Duas rotas pro mesmo alvo: ATARAXIA — paz interior firme.",
    falaFinal:
      "Nesta aula: estoicismo e epicurismo — dois manuais de sobrevivência filosófica.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: o que gera mais paz?",
    pergunta: "Você fica em paz quando…",
    opcoes: [
      {
        id: "controle",
        titulo: "Aceita o que NÃO controla e age no que CONTROLA",
        subtitulo: "para de brigar com chuva; se prepara com guarda-chuva",
        emoji: "🧭",
        cor: "from-sky-400 to-blue-600",
      },
      {
        id: "controlar-tudo",
        titulo: "Tenta CONTROLAR TUDO à sua volta",
        subtitulo: "tempo, notas, humor dos outros, redes sociais",
        emoji: "🌀",
        cor: "from-red-400 to-rose-600",
      },
    ],
    respostaCerta: "controle",
    feedbackAcerto:
      "Isso. Essa é a chave estoica — dicotomia do controle. O que depende de mim eu cuido; o que não, eu solto.",
    feedbackErro:
      "Tentar controlar tudo GERA sofrimento (chuva não obedece). Estoicos ensinam: separe o que depende de você do que não depende.",
    falaFinal: "Regra estoica: distinguir controlável de incontrolável.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos helenísticos.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "ataraxia",
        capa: "1. Ataraxia",
        emoji: "🌊",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "ATARAXIA (a-ta-ra-xí-a) é a PAZ INTERIOR FIRME — a alma sem turbulência, como um lago fundo que a superfície pode ondular, mas o fundo continua calmo. É o objetivo comum das escolas helenísticas: viver sem ser sequestrado pelas emoções.",
        exemplo:
          "Ex.: alguém te ofende no WhatsApp; sente irritação (superfície), mas o fundo permanece calmo — não responde reagindo, decide se responde.",
        fotoUrl: ataraxia,
      },
      {
        id: "dicotomia",
        capa: "2. Dicotomia do controle",
        emoji: "🧭",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "Regra estoica de ouro (Epiteto): SEPARE o que DEPENDE de você (seus pensamentos, escolhas, ações) do que NÃO DEPENDE (tempo, corpo dos outros, opinião alheia, resultado). Cuide do primeiro com todas as forças. Aceite o segundo com calma. Fim do sofrimento inútil.",
        exemplo:
          "Ex.: prova amanhã. DEPENDE: estudar hoje. NÃO DEPENDE: nota final, pergunta que cai. Ansiedade some quando você foca no primeiro.",
        fotoUrl: marcoAurelio,
      },
      {
        id: "prazer-simples",
        capa: "3. Prazer simples (epicurismo)",
        emoji: "🫒",
        cor: "from-lime-500 to-green-700",
        conteudo:
          "Epicuro diz: o prazer é BOM, mas nem todo prazer vale a pena. Prazeres SIMPLES E NATURAIS (comida, amizade, conversa, natureza) dão alegria duradoura. Prazeres VAZIOS (fama, luxo, aprovação) geram mais ansiedade que satisfação. Vida boa = pão, água, amigos e filosofia.",
        exemplo:
          "Ex.: jantar simples com amigos de verdade > festa de luxo com desconhecidos. O primeiro sacia; o segundo cansa.",
        fotoUrl: jardim,
      },
    ],
    falaFinal: "Ataraxia, dicotomia, prazer simples. 3 chaves helenísticas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos-chave. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: jardim,
    pontos: [
      {
        id: "crise",
        x: 22,
        y: 34,
        emoji: "🌪️",
        cor: "from-slate-500 to-slate-700",
        titulo: "323 a.C. — o mundo desmorona",
        texto:
          "Alexandre Magno morre e seu império se estilhaça. Grécia perde autonomia, guerras civis surgem por décadas. A filosofia deixa de perguntar 'como organizar a cidade?' e passa a perguntar 'como VIVER quando a cidade desmorona?'. Nascem as escolas helenísticas.",
        fotoUrl: ataraxia,
      },
      {
        id: "epicuro",
        x: 74,
        y: 30,
        emoji: "🫒",
        cor: "from-lime-500 to-green-700",
        titulo: "306 a.C. — Epicuro abre o Jardim",
        texto:
          "Epicuro compra um jardim nos arredores de Atenas e monta uma comunidade filosófica onde entram TODOS — homens, mulheres, escravos, estrangeiros (algo revolucionário). Aprende-se a viver com prazeres simples, amizade e pouca posse. Regra da casa: 'Nada temer.'",
        fotoUrl: jardim,
      },
      {
        id: "estoicos",
        x: 28,
        y: 70,
        emoji: "🏛️",
        cor: "from-sky-500 to-blue-700",
        titulo: "300 a.C. — Zenão funda o Estoicismo",
        texto:
          "Zenão de Cício ensina numa STOA (varanda com colunas) em Atenas — daí 'estoicismo'. Séculos depois, o imperador romano Marco Aurélio escreve 'Meditações' aplicando estoicismo no dia a dia de um chefe de estado. Ideia central: vive segundo a razão e aceite com dignidade o que não depende de você.",
        fotoUrl: marcoAurelio,
      },
      {
        id: "ataraxia",
        x: 76,
        y: 70,
        emoji: "🌊",
        cor: "from-cyan-500 to-blue-700",
        titulo: "O mesmo alvo: paz interior firme",
        texto:
          "Apesar das diferenças (epicuristas cultivam prazer simples, estoicos aceitam o destino), as duas escolas buscam a MESMA coisa: ATARAXIA. Uma alma que não se deixa arrastar por cada emoção. Filosofia como TREINO de vida, não teoria de biblioteca.",
        fotoUrl: ataraxia,
      },
    ],
    falaFinal:
      "Crise → Jardim → Stoa → ataraxia. A filosofia vira MANUAL DE VIVER.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "ATARAXIA é…",
        fotoUrl: ataraxia,
        cards: [
          {
            id: "paz",
            emoji: "🌊",
            titulo: "Paz interior firme, sem turbulência emocional",
            cor: "from-sky-500 to-blue-700",
          },
          {
            id: "fuga",
            emoji: "🏝️",
            titulo: "Fugir do mundo pra uma ilha deserta",
            cor: "from-slate-400 to-gray-600",
          },
          {
            id: "riqueza",
            emoji: "💰",
            titulo: "Acumular dinheiro pra não se preocupar mais",
            cor: "from-amber-400 to-orange-600",
          },
        ],
        correta: "paz",
        feedbackAcerto:
          "Isso. Ataraxia é paz interior — não fuga, não riqueza. É firmeza dentro.",
        feedbackErro:
          "Não é fugir nem enriquecer. Ataraxia é PAZ INTERIOR firme, mesmo em meio ao caos.",
      },
      {
        id: "q2",
        pergunta:
          "A DICOTOMIA DO CONTROLE, dos estoicos, ensina a…",
        fotoUrl: marcoAurelio,
        cards: [
          {
            id: "separar",
            emoji: "🧭",
            titulo: "Separar o que depende de mim do que não depende",
            cor: "from-emerald-500 to-teal-700",
          },
          {
            id: "controlar",
            emoji: "🌀",
            titulo: "Tentar controlar absolutamente tudo",
            cor: "from-red-400 to-rose-600",
          },
          {
            id: "desistir",
            emoji: "😴",
            titulo: "Desistir de tudo e não fazer nada",
            cor: "from-slate-400 to-gray-600",
          },
        ],
        correta: "separar",
        feedbackAcerto:
          "Perfeito. Cuido do que depende de mim; aceito o que não depende. Fim do sofrimento inútil.",
        feedbackErro:
          "Estoicismo não é desistir nem controlar tudo. É SEPARAR e agir bem no que depende de mim.",
      },
      {
        id: "q3",
        pergunta: "Pra Epicuro, o melhor prazer é o…",
        fotoUrl: jardim,
        cards: [
          {
            id: "simples",
            emoji: "🫒",
            titulo: "Simples e natural (comida, amigos, natureza)",
            cor: "from-lime-500 to-green-700",
          },
          {
            id: "luxo",
            emoji: "💎",
            titulo: "Luxuoso e caro (joias, festas grandiosas)",
            cor: "from-amber-400 to-orange-600",
          },
          {
            id: "fama",
            emoji: "📣",
            titulo: "A fama e o reconhecimento público",
            cor: "from-red-400 to-rose-600",
          },
        ],
        correta: "simples",
        feedbackAcerto:
          "Isso. Prazer SIMPLES sacia; prazer vazio (luxo, fama) gera mais ansiedade que alegria.",
        feedbackErro:
          "Epicuro é O FILÓSOFO DO PRAZER SIMPLES. Luxo e fama, pra ele, geram inquietação — não paz.",
      },
    ],
    falaFinal: "Radar helenístico calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A busca por paz interior aparece hoje em centros de meditação e mindfulness. Escolha 5 estados com forte presença desses centros.",
    instrucao: "Acenda 5 estados com práticas contemplativas fortes",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "BA", "SC"],
      pergunta:
        "Quais 5 estados abrigam grandes centros de meditação, ioga e mindfulness no Brasil?",
    },
    falaFinal:
      "SP, RJ, MG, BA e SC. Ataraxia antiga, práticas contemporâneas.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Método estoico em 5 passos. Coloque em ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Da inquietação à paz:",
    paradas: [
      {
        id: "situacao",
        emoji: "😤",
        rotulo: "1. Situação incomoda",
        descricao: "Prova, briga, decepção, notícia ruim — algo mexe com você.",
      },
      {
        id: "pausa",
        emoji: "🌬️",
        rotulo: "2. Pausa e observa",
        descricao: "Antes de reagir, respira e nomeia a emoção.",
      },
      {
        id: "dicotomia",
        emoji: "🧭",
        rotulo: "3. Aplica a dicotomia",
        descricao: "O que aqui DEPENDE de mim? O que NÃO depende?",
      },
      {
        id: "agir",
        emoji: "✋",
        rotulo: "4. Age no que depende",
        descricao: "Focar energia só no controlável — estudar, conversar, mudar.",
      },
      {
        id: "aceita",
        emoji: "🌊",
        rotulo: "5. Aceita o resto com paz",
        descricao: "O que não depende, solta com dignidade. Chega ataraxia.",
      },
    ],
    ordemCerta: ["situacao", "pausa", "dicotomia", "agir", "aceita"],
    feedbackAcerto:
      "Isso. Situação → pausa → dicotomia → agir → aceitar. Manual estoico completo.",
    feedbackErro:
      "A ordem é: incomodou → pausa → separa o que depende → age no que depende → aceita o resto.",
    falaFinal: "5 passos do estoicismo prático.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 3 — Estoicos e Epicuristos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Depois da morte de Alexandre Magno, o mundo grego virou instabilidade. Duas escolas nasceram pra responder: 'como viver em paz quando tudo desmorona?'.",
        chaves: ["Alexandre", "escolas"],
      },
      {
        id: "p2",
        texto:
          "Os ESTOICOS (Zenão, Epiteto, Marco Aurélio) ensinavam a DICOTOMIA DO CONTROLE: separa o que depende de você (pensamentos, ações) do que não depende (clima, opinião alheia). Cuida do primeiro, aceita o segundo.",
        chaves: ["estoicos", "controle"],
      },
      {
        id: "p3",
        texto:
          "Os EPICURISTAS (Epicuro e seu Jardim) buscavam o PRAZER SIMPLES E NATURAL — comida, amizade, conversa. Prazeres vazios como luxo e fama, segundo eles, geram mais ansiedade que alegria.",
        chaves: ["epicuristas", "prazer simples"],
      },
      {
        id: "p4",
        texto:
          "As duas escolas, apesar das diferenças, buscavam o mesmo: ATARAXIA — paz interior firme, uma alma que não se deixa arrastar por cada emoção. Filosofia deixou de ser só teoria: virou TREINO de vida.",
        chaves: ["ataraxia", "treino"],
      },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo DICOTOMIA! Cada situação: DEPENDE de mim, NÃO DEPENDE, ou é PRAZER SIMPLES / PRAZER VAZIO?",
    instrucao: "⏱️ Classifique cada cena",
    duracaoSegundos: 15,
    pecas: [
      { id: "depende", emoji: "🧭", rotulo: "Depende de mim (agir)" },
      { id: "nao-depende", emoji: "🌊", rotulo: "Não depende (aceitar)" },
      { id: "simples", emoji: "🫒", rotulo: "Prazer simples (bom)" },
      { id: "vazio", emoji: "💎", rotulo: "Prazer vazio (cansa)" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: {
          nome: "'Vai chover no meu passeio amanhã'",
          emoji: "🌧️",
          cor: "from-sky-400 to-blue-600",
        },
        municipioB: {
          nome: "Clima é fora do meu controle",
          emoji: "☁️",
          cor: "from-slate-400 to-gray-600",
        },
        contexto: "O tempo não obedece desejo.",
        pecaCertaId: "nao-depende",
        feedbackAcerto: "Isso. NÃO DEPENDE — aceita com paz e leva guarda-chuva.",
        feedbackErro:
          "É NÃO DEPENDE: chuva é incontrolável. Só depende de você levar guarda-chuva.",
      },
      {
        id: "r2",
        municipioA: {
          nome: "'Prova amanhã, ainda tenho horas de estudo'",
          emoji: "📚",
          cor: "from-emerald-400 to-teal-600",
        },
        municipioB: {
          nome: "Estudar é 100% meu",
          emoji: "✍️",
          cor: "from-teal-400 to-cyan-600",
        },
        contexto: "A ação de estudar depende de você.",
        pecaCertaId: "depende",
        feedbackAcerto: "Isso. DEPENDE. Foca a energia aqui, não na nota final.",
        feedbackErro:
          "É DEPENDE: estudar está no seu controle. A nota já é resultado — não depende só de você.",
      },
      {
        id: "r3",
        municipioA: {
          nome: "'Jantar simples com meus melhores amigos'",
          emoji: "🍞",
          cor: "from-lime-400 to-green-600",
        },
        municipioB: {
          nome: "Amizade + comida = alegria funda",
          emoji: "🫂",
          cor: "from-emerald-400 to-teal-600",
        },
        contexto: "Prazer barato que sustenta a alma.",
        pecaCertaId: "simples",
        feedbackAcerto:
          "Perfeito. PRAZER SIMPLES — Epicuro aprovaria. Alegria duradoura por pouco.",
        feedbackErro:
          "É PRAZER SIMPLES: comida + amigos = a fórmula epicurista de felicidade.",
      },
      {
        id: "r4",
        municipioA: {
          nome: "'Só serei feliz quando tiver 100k seguidores'",
          emoji: "📣",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Fama = ansiedade sem fim",
          emoji: "😰",
          cor: "from-orange-400 to-red-600",
        },
        contexto: "Prazer vazio que gera mais ansiedade que alegria.",
        pecaCertaId: "vazio",
        feedbackAcerto:
          "Isso. PRAZER VAZIO — quanto mais persegue, mais escapa. Epicuro alertaria.",
        feedbackErro:
          "É PRAZER VAZIO: fama nunca sacia, sempre pede mais. Ansiedade infinita.",
      },
      {
        id: "r5",
        municipioA: {
          nome: "'O colega me destratou sem razão'",
          emoji: "😠",
          cor: "from-red-400 to-rose-600",
        },
        municipioB: {
          nome: "Humor dos outros = fora do meu controle",
          emoji: "🌊",
          cor: "from-slate-400 to-gray-600",
        },
        contexto: "Você não escolhe como o outro age.",
        pecaCertaId: "nao-depende",
        feedbackAcerto:
          "Isso. NÃO DEPENDE. Aceita, respira, decide se responde. Ataraxia.",
        feedbackErro:
          "É NÃO DEPENDE: você não controla o outro. Controla sua reação (essa depende de você).",
      },
      {
        id: "r6",
        municipioA: {
          nome: "'Vou parar de rolar feed e ler 20 páginas'",
          emoji: "📖",
          cor: "from-lime-400 to-green-600",
        },
        municipioB: {
          nome: "Hábito que forma virtude",
          emoji: "🌱",
          cor: "from-emerald-400 to-teal-600",
        },
        contexto: "Ação totalmente sua.",
        pecaCertaId: "depende",
        feedbackAcerto: "Perfeito. DEPENDE 100% de você. Ação estoica pura.",
        feedbackErro: "É DEPENDE: você escolhe o que faz com seu tempo. Age aqui.",
      },
    ],
    falaFinal: "6 casos. Você já pratica a dicotomia — como um estoico romano.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Duas escolas, dois caminhos pra mesma paz.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "estoico",
        rotulo: "ESTOICISMO",
        emoji: "🧭",
        percentual: 50,
        cor: "#0ea5e9",
        descricao:
          "Aceita o que não depende de você (destino, opinião alheia, clima). Age com virtude no que depende (pensamentos, ações). Ataraxia pela ordem racional.",
        exemplos: ["🌬️ Respira antes de reagir", "🧭 Separa depende × não depende", "🏛️ Cumpre o dever"],
      },
      {
        id: "epicurista",
        rotulo: "EPICURISMO",
        emoji: "🫒",
        percentual: 50,
        cor: "#84cc16",
        descricao:
          "Cultiva prazeres simples e naturais com amigos. Evita prazeres vazios (luxo, fama) que geram ansiedade. Ataraxia pela alegria discreta.",
        exemplos: ["🍞 Refeição simples", "🫂 Amigos verdadeiros", "🌳 Vida sem excessos"],
      },
    ],
    falaFinal: "Dois manuais, um alvo: paz interior firme.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "3 perguntas finais pra conquistar a insígnia GUARDIÃO DA ATARAXIA.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "A DICOTOMIA DO CONTROLE dos estoicos manda…",
        opcoes: [
          { id: "a", texto: "Controlar tudo com força de vontade", correta: false },
          {
            id: "b",
            texto:
              "Separar o que depende de mim (agir) do que não depende (aceitar)",
            correta: true,
          },
          { id: "c", texto: "Desistir de tudo e não se envolver", correta: false },
        ],
        feedbackAcerto:
          "Isso. Cuido do meu, aceito o resto. Fim do sofrimento inútil.",
        feedbackErro:
          "Não é controlar tudo nem desistir. É SEPARAR — e agir bem no que depende de você.",
      },
      {
        id: "av2",
        pergunta: "Pra Epicuro, os melhores prazeres são…",
        opcoes: [
          {
            id: "a",
            texto:
              "Os simples e naturais (comida, amigos, natureza) — sustentam alegria duradoura",
            correta: true,
          },
          {
            id: "b",
            texto: "Os luxuosos (joias, festas grandes) — quanto mais raro, melhor",
            correta: false,
          },
          { id: "c", texto: "A fama pública, que traz reconhecimento", correta: false },
        ],
        feedbackAcerto:
          "Perfeito. Simples = duradouro. Vazio = ansiedade. Epicuro aprovaria.",
        feedbackErro:
          "Epicuro é o filósofo do PRAZER SIMPLES. Luxo e fama, pra ele, cansam mais que satisfazem.",
      },
      {
        id: "av3",
        pergunta: "ATARAXIA é…",
        opcoes: [
          { id: "a", texto: "Nunca sentir emoção nenhuma", correta: false },
          {
            id: "b",
            texto: "Paz interior FIRME, sem ser sequestrado pelas emoções",
            correta: true,
          },
          { id: "c", texto: "Fugir do mundo pra uma ilha", correta: false },
        ],
        feedbackAcerto:
          "Isso. Sente emoção, mas o fundo permanece calmo. Como lago fundo com superfície ondulada.",
        feedbackErro:
          "Não é apagar emoção nem fugir. É PAZ INTERIOR FIRME que não vira reação impulsiva.",
      },
    ],
    selo: {
      nome: "Guardião da Ataraxia",
      subtitulo: "Insígnia da Paz Interior Firme",
      emoji: "🌊",
      cor: "from-sky-400 to-blue-700",
    },
    falaFinal:
      "Insígnia conquistada! Você já carrega a dicotomia e o jardim.",
  },

  recompensa: { xp: 395, moedas: 290, medalha: "Guardião da Ataraxia" },
};
