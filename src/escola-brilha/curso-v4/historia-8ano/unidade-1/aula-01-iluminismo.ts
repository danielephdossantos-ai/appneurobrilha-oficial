import type { AulaGeoV1 } from "../../types";
import imgEnc from "@/assets/historia-8ano/u1-enciclopedia.jpg";
import imgCafe from "@/assets/historia-8ano/u1-cafe-filosofos.jpg";

import imgVoltaire from "@/assets/historia-8ano/u1-voltaire.jpg";
import imgContrato from "@/assets/historia-8ano/u1-contrato-social.jpg";
import imgTres from "@/assets/historia-8ano/u1-tres-poderes.jpg";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-iluminismo",
  titulo: "O Iluminismo e o Poder das Ideias",
  iconeTrilha: "💡",
  bncc: ["EF08HI01", "EF08HI02"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgEnc,
    imagemDestaqueUrl: imgCafe,
    aurora:
      "Século XVIII. Antes das balas, uma REVOLUÇÃO SILENCIOSA — feita de livros, cafés e panfletos. Filósofos como Voltaire, Rousseau e Montesquieu usaram a RAZÃO como arma contra o poder absoluto dos reis e o dogma da Igreja. Chamaram esse movimento de ILUMINISMO — luz da razão contra as trevas da tradição.",
    falaFinal:
      "Nesta aula você desbloqueia a Engrenagem 1: A Chama da Razão.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Se o REI mandava por 'direito divino' e a IGREJA controlava o pensamento, o que os iluministas propuseram no lugar?",
    pergunta: "Qual era a ideia central dos iluministas?",
    fotoUrl: imgVoltaire,
    opcoes: [
      {
        id: "raz",
        titulo: "RAZÃO E LIBERDADE",
        subtitulo: "cada indivíduo pensa e escolhe",
        emoji: "💡",
        cor: "from-teal-800 to-slate-950",
      },
      {
        id: "obed",
        titulo: "OBEDIÊNCIA AO REI",
        subtitulo: "manter o Antigo Regime",
        emoji: "❌",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "raz",
    feedbackAcerto:
      "Correto. A RAZÃO substitui a fé cega e a LIBERDADE individual substitui a obediência. Nasce a ideia de que o poder vem do POVO, não de Deus.",
    feedbackErro:
      "Não. Os iluministas queriam justamente o oposto: substituir a obediência cega pela RAZÃO e defender a LIBERDADE individual.",
    falaFinal:
      "Ideia base: Razão + Liberdade = base do mundo moderno.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave do Iluminismo.",
    instrucao: "",
    cadernos: [
      {
        id: "ilu",
        capa: "Iluminismo",
        emoji: "💡",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgContrato,
        conteudo:
          "ILUMINISMO foi o movimento intelectual do século XVIII que defendia a RAZÃO, a CIÊNCIA, a LIBERDADE individual e a IGUALDADE perante a lei. Combatia o absolutismo real e o poder político da Igreja.",
        exemplo:
          "Exemplo: a Enciclopédia (1751), organizada por Diderot e D'Alembert, reuniu todo o conhecimento humano da época em 35 volumes — foi a 'internet' do século XVIII.",
      },
      {
        id: "ctr",
        capa: "Contrato Social",
        emoji: "📜",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTres,
        conteudo:
          "CONTRATO SOCIAL, ideia de Rousseau, dizia que o poder político nasce de um ACORDO entre os cidadãos, não de Deus. Se o governante quebra o contrato, o povo pode DEPOR o governante.",
        exemplo:
          "Exemplo: essa ideia inspirou a Revolução Americana (1776) e a Revolução Francesa (1789) — se o rei não serve ao povo, o povo tira o rei.",
      },
      {
        id: "trip",
        capa: "Tripartição dos Poderes",
        emoji: "⚖️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgEnc,
        conteudo:
          "TRIPARTIÇÃO DOS PODERES, proposta por Montesquieu, dividia o poder em EXECUTIVO (governa), LEGISLATIVO (faz leis) e JUDICIÁRIO (julga). Ninguém acumula tudo — é o freio contra tiranias.",
        exemplo:
          "Exemplo: a Constituição do Brasil (1988) segue exatamente esse modelo — Presidente, Congresso e STF são independentes entre si.",
      },
      {
        id: "tol",
        capa: "Tolerância",
        emoji: "🕊️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgCafe,
        conteudo:
          "TOLERÂNCIA foi bandeira de Voltaire: liberdade de pensar, escrever e professar qualquer religião. 'Não concordo com uma palavra do que dizes, mas defenderei até a morte o teu direito de dizê-la.'",
        exemplo:
          "Exemplo: até então, hereges eram queimados. Voltaire denunciou o Caso Calas — protestante executado injustamente — e forçou a reabertura do processo.",
      },
    ],
    falaFinal:
      "Iluminismo + Contrato Social + Tripartição + Tolerância. Alicerce do mundo moderno.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico dos três grandes iluministas e uma ideia central de cada um. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgVoltaire,
    pontos: [
      {
        id: "vol",
        x: 25,
        y: 35,
        emoji: "✒️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgContrato,
        titulo: "VOLTAIRE (1694-1778)",
        texto:
          "Francês. Defendeu a LIBERDADE DE EXPRESSÃO e a TOLERÂNCIA RELIGIOSA. Atacou fanatismos e a censura. Chegou a ser preso e exilado.",
      },
      {
        id: "rou",
        x: 55,
        y: 55,
        emoji: "📜",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTres,
        titulo: "ROUSSEAU (1712-1778)",
        texto:
          "Suíço. Autor de 'Do Contrato Social'. Defendeu a SOBERANIA POPULAR: o povo é a única fonte legítima de poder. Inspirou as revoluções.",
      },
      {
        id: "mon",
        x: 80,
        y: 40,
        emoji: "⚖️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgEnc,
        titulo: "MONTESQUIEU (1689-1755)",
        texto:
          "Francês. Autor de 'O Espírito das Leis'. Propôs a TRIPARTIÇÃO DOS PODERES — Executivo, Legislativo e Judiciário — pra impedir tiranias.",
      },
    ],
    falaFinal: "Três nomes. Três ideias que ainda organizam o Brasil hoje.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de historiador do Iluminismo.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem propôs a TRIPARTIÇÃO DOS PODERES (Executivo, Legislativo, Judiciário)?",
        fotoUrl: imgCafe,
        cards: [
          { id: "m", emoji: "⚖️", titulo: "Montesquieu", cor: "from-teal-600 to-slate-900" },
          { id: "v", emoji: "✒️", titulo: "Voltaire", cor: "from-amber-600 to-slate-900" },
          { id: "r", emoji: "📜", titulo: "Rousseau", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "m",
        feedbackAcerto: "Correto. Montesquieu, em 'O Espírito das Leis' (1748).",
        feedbackErro: "É Montesquieu. Voltaire era da tolerância; Rousseau, do contrato social.",
      },
      {
        id: "q2",
        pergunta: "A obra 'Do Contrato Social' é de qual autor?",
        fotoUrl: imgVoltaire,
        cards: [
          { id: "r", emoji: "📜", titulo: "Rousseau", cor: "from-teal-600 to-slate-900" },
          { id: "d", emoji: "📚", titulo: "Diderot", cor: "from-amber-600 to-slate-900" },
          { id: "v", emoji: "✒️", titulo: "Voltaire", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "r",
        feedbackAcerto: "Correto. Rousseau publicou em 1762 a ideia de que o poder nasce do povo.",
        feedbackErro: "É Rousseau. Diderot organizou a Enciclopédia; Voltaire escreveu sobre tolerância.",
      },
      {
        id: "q3",
        pergunta: "Qual foi o LEMA da Revolução Francesa, herdado direto do Iluminismo?",
        fotoUrl: imgContrato,
        cards: [
          { id: "l", emoji: "🇫🇷", titulo: "Liberdade, Igualdade, Fraternidade", cor: "from-teal-600 to-slate-900" },
          { id: "o", emoji: "👑", titulo: "Deus, Rei e Pátria", cor: "from-amber-600 to-slate-900" },
          { id: "t", emoji: "⚒️", titulo: "Trabalho e Ordem", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "l",
        feedbackAcerto: "Correto. Liberdade, Igualdade, Fraternidade — tríade iluminista.",
        feedbackErro: "É 'Liberdade, Igualdade, Fraternidade' — lema oficial da França até hoje.",
      },
    ],
    falaFinal: "Radar afiado. Você já mapeia os três grandes iluministas.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre o Antigo Regime. Um destaca quem tinha PRIVILÉGIOS; outro, quem pagava a conta.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgTres,
    camadas: [
      {
        id: "priv",
        rotulo: "Privilegiados (~3%)",
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 10, y: 10, w: 80, h: 40 },
        descricao:
          "Clero + Nobreza. Isentos de impostos, monopolizavam altos cargos, viviam nas cortes de Versalhes. Cerca de 3% da população francesa.",
      },
      {
        id: "ter",
        rotulo: "3º Estado (~97%)",
        emoji: "🛠️",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "Burguesia + camponeses + trabalhadores urbanos. Pagavam TODOS os impostos e não tinham representação política. Foi essa maioria que estourou em 1789.",
      },
    ],
    falaFinal: "3% privilegiados. 97% pagando a conta. Bomba-relógio social.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos do pensamento iluminista.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos do Iluminismo",
    paradas: [
      {
        id: "loc",
        emoji: "📖",
        rotulo: "1. Locke (1690)",
        fotoUrl: imgEnc,
        descricao: "Defende direitos naturais: vida, liberdade e propriedade.",
      },
      {
        id: "mon",
        emoji: "⚖️",
        rotulo: "2. Montesquieu (1748)",
        fotoUrl: imgCafe,
        descricao: "'O Espírito das Leis' — tripartição dos poderes.",
      },
      {
        id: "enc",
        emoji: "📚",
        rotulo: "3. Enciclopédia (1751)",
        fotoUrl: imgVoltaire,
        descricao: "Diderot organiza a obra que reúne o saber da época.",
      },
      {
        id: "rou",
        emoji: "📜",
        rotulo: "4. Rousseau (1762)",
        fotoUrl: imgContrato,
        descricao: "'Do Contrato Social' — soberania popular.",
      },
    ],
    ordemCerta: ["loc", "mon", "enc", "rou"],
    feedbackAcerto:
      "Perfeito. Locke → Montesquieu → Enciclopédia → Rousseau. As ideias vão se somando.",
    feedbackErro: "Essa não é a próxima. Comece pelo mais antigo (Locke) e siga a cronologia.",
    falaFinal: "Quatro marcos. Setenta anos de ideias que mudaram o mundo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página 1 das Engrenagens. Toque nos termos técnicos.",
    tituloLivro: "⚙️ As Engrenagens da Liberdade",
    subtitulo: "Página 1 — A Chama da Razão",
    paragrafos: [
      {
        id: "p1",
        texto:
          "No século XVIII, um grupo de pensadores europeus começou a questionar TUDO. Reis governavam por 'direito divino'; a Igreja controlava o que se podia pensar; a sociedade era rígida. Contra isso, propuseram uma ideia radical: usar a RAZÃO — não a tradição — como guia. Esse movimento é o ILUMINISMO.",
        chaves: ["Iluminismo"],
        definicoes: {
          Iluminismo:
            "Movimento intelectual do século XVIII que defendia a razão, a ciência, a liberdade individual e a igualdade perante a lei.",
        },
        fotoUrl: imgTres,
      },
      {
        id: "p2",
        texto:
          "MONTESQUIEU propôs dividir o poder do Estado em três — EXECUTIVO, LEGISLATIVO e JUDICIÁRIO — pra que ninguém acumule tudo. Essa é a TRIPARTIÇÃO DOS PODERES, base de praticamente todas as democracias modernas, inclusive a brasileira.",
        chaves: ["Tripartição dos Poderes"],
        definicoes: {
          "Tripartição dos Poderes":
            "Divisão do poder do Estado em Executivo, Legislativo e Judiciário, independentes entre si.",
        },
        fotoUrl: imgEnc,
      },
      {
        id: "p3",
        texto:
          "ROUSSEAU escreveu 'Do Contrato Social'. Se o povo é a fonte do poder, então quem governa serve ao povo — não o contrário. Um governante que trai o povo pode ser DEPOSTO legitimamente. Essa ideia deu combustível às revoluções.",
        chaves: ["Contrato Social"],
        definicoes: {
          "Contrato Social":
            "Ideia de Rousseau: o poder político nasce de um acordo entre cidadãos e pode ser revogado se o governante o quebrar.",
        },
        fotoUrl: imgCafe,
      },
      {
        id: "p4",
        texto:
          "VOLTAIRE atacou o fanatismo e defendeu a TOLERÂNCIA — liberdade de pensar, escrever e crer. As ideias iluministas circularam por cafés, salões e livros clandestinos, atravessaram fronteiras e prepararam terreno para as Revoluções Americana (1776) e Francesa (1789).",
        chaves: ["Tolerância"],
        definicoes: {
          "Tolerância":
            "Liberdade de pensar, expressar e professar ideias e crenças diferentes sem ser perseguido.",
        },
        fotoUrl: imgVoltaire,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica por que o Iluminismo é o ponto de partida do mundo moderno.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de historiador. Associe cada ideia ao seu autor iluminista.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "mon", emoji: "⚖️", rotulo: "Montesquieu" },
      { id: "rou", emoji: "📜", rotulo: "Rousseau" },
      { id: "vol", emoji: "✒️", rotulo: "Voltaire" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Tripartição dos Poderes", emoji: "⚖️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Executivo, Legislativo, Judiciário", emoji: "🏛️", cor: "from-teal-600 to-slate-900" },
        contexto: "Divisão do poder do Estado.",
        pecaCertaId: "mon",
        feedbackAcerto: "Correto. Tripartição = MONTESQUIEU.",
        feedbackErro: "Foi Montesquieu quem propôs a tripartição.",
      },
      {
        id: "r2",
        municipioA: { nome: "Contrato Social", emoji: "📜", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Soberania popular", emoji: "🗳️", cor: "from-amber-600 to-slate-900" },
        contexto: "Poder político vem do povo.",
        pecaCertaId: "rou",
        feedbackAcerto: "Correto. Contrato Social = ROUSSEAU.",
        feedbackErro: "É Rousseau, autor de 'Do Contrato Social' (1762).",
      },
      {
        id: "r3",
        municipioA: { nome: "Defesa da tolerância religiosa", emoji: "🕊️", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Liberdade de expressão", emoji: "✒️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Denunciou fanatismos e censura.",
        pecaCertaId: "vol",
        feedbackAcerto: "Correto. Tolerância = VOLTAIRE.",
        feedbackErro: "É Voltaire, defensor da tolerância religiosa e da liberdade de expressão.",
      },
      {
        id: "r4",
        municipioA: { nome: "'O Espírito das Leis' (1748)", emoji: "📖", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Obra sobre organização política", emoji: "📚", cor: "from-teal-600 to-slate-900" },
        contexto: "Livro-manual da democracia moderna.",
        pecaCertaId: "mon",
        feedbackAcerto: "Correto. 'O Espírito das Leis' = MONTESQUIEU.",
        feedbackErro: "É de Montesquieu, publicado em 1748.",
      },
      {
        id: "r5",
        municipioA: { nome: "'A vontade geral do povo'", emoji: "👥", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Fonte legítima do poder", emoji: "🗣️", cor: "from-amber-600 to-slate-900" },
        contexto: "Conceito central do Contrato Social.",
        pecaCertaId: "rou",
        feedbackAcerto: "Correto. Vontade geral = ROUSSEAU.",
        feedbackErro: "É Rousseau — vontade geral do povo.",
      },
      {
        id: "r6",
        municipioA: { nome: "Caso Calas: reabertura do processo", emoji: "⚖️", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Denúncia da intolerância", emoji: "📢", cor: "from-cyan-600 to-slate-900" },
        contexto: "Panfleto famoso do século XVIII.",
        pecaCertaId: "vol",
        feedbackAcerto: "Correto. Caso Calas = VOLTAIRE.",
        feedbackErro: "É Voltaire — denunciou a execução injusta do protestante Jean Calas.",
      },
    ],
    falaFinal: "6 rodadas! Você já associa cada ideia a seu iluminista.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do Antigo Regime francês. Quem tinha PRIVILÉGIOS e quem PAGAVA a conta.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgContrato,
    fatias: [
      {
        id: "priv",
        rotulo: "Privilegiados (~3%)",
        emoji: "👑",
        percentual: 3,
        cor: "#b45309",
        descricao:
          "Clero + Nobreza. Isentos de quase todos os impostos, monopólio de altos cargos, vida de luxo em Versalhes.",
        exemplos: ["⛪ Clero", "🗡️ Nobreza", "🏰 Corte"],
      },
      {
        id: "ter",
        rotulo: "3º Estado (~97%)",
        emoji: "🛠️",
        percentual: 97,
        cor: "#0f766e",
        descricao:
          "Burguesia + camponeses + trabalhadores. Pagavam TODOS os impostos e não tinham voto real. Foi essa maioria que estourou em 1789.",
        exemplos: ["💼 Burguesia", "🌾 Camponeses", "⚒️ Trabalhadores"],
      },
    ],
    falaFinal: "3% em cima. 97% embaixo pagando tudo. Iluminismo dá voz a esses 97%.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra desbloquear a Chama da Razão.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgTres,
    perguntas: [
      {
        id: "av1",
        pergunta: "O Iluminismo defendia principalmente:",
        opcoes: [
          { id: "a", texto: "O direito divino dos reis.", correta: false },
          { id: "b", texto: "A razão, a liberdade individual e a igualdade perante a lei.", correta: true },
          { id: "c", texto: "A volta ao feudalismo.", correta: false },
        ],
        feedbackAcerto: "Correto. Razão + Liberdade + Igualdade — base iluminista.",
        feedbackErro: "É a RAZÃO, LIBERDADE INDIVIDUAL e IGUALDADE PERANTE A LEI.",
      },
      {
        id: "av2",
        pergunta: "Quem escreveu 'Do Contrato Social' (1762)?",
        opcoes: [
          { id: "a", texto: "Voltaire.", correta: false },
          { id: "b", texto: "Rousseau.", correta: true },
          { id: "c", texto: "Napoleão.", correta: false },
        ],
        feedbackAcerto: "Correto. Rousseau — soberania popular.",
        feedbackErro: "É Rousseau. Voltaire escrevia sobre tolerância.",
      },
      {
        id: "av3",
        pergunta: "A Tripartição dos Poderes (Executivo, Legislativo, Judiciário) foi proposta por:",
        opcoes: [
          { id: "a", texto: "Montesquieu.", correta: true },
          { id: "b", texto: "Diderot.", correta: false },
          { id: "c", texto: "Luís XVI.", correta: false },
        ],
        feedbackAcerto: "Correto. Montesquieu, 'O Espírito das Leis' (1748).",
        feedbackErro: "É Montesquieu. Base de todas as democracias modernas.",
      },
    ],
    selo: {
      nome: "A Chama da Razão",
      subtitulo: "Engrenagem 1 das Liberdades",
      emoji: "💡",
      cor: "from-teal-500 to-slate-900",
      fotoUrl: imgEnc,
    },
    falaFinal:
      "Engrenagem 1 destravada. As ideias iluministas vão detonar as revoluções que vêm a seguir.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "A Chama da Razão" },
};
