import type { AulaGeoV1 } from "../../types";
import { url as dialetica } from "@/assets/filosofia-8ano/u4-hegel-dialetica.jpg.asset.json";
import { url as hegel } from "@/assets/filosofia-8ano/u4-hegel-retrato.jpg.asset.json";

/**
 * Filosofia · 8º Ano · Unidade 4 · Aula 01
 * "Hegel e a Dialética" — EF08FI04 (autoral)
 * Tema: Hegel — dialética (tese/antítese/síntese), senhor e escravo, espírito.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-hegel-dialetica",
  titulo: "A Dialética e o Espírito da História",
  iconeTrilha: "🌀",
  bncc: ["EF08FI04"],
  duracaoMin: 27,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de pensar, imagine a cena.",
    mapaUrl: hegel,
    imagemDestaqueUrl: hegel,
    aurora:
      "Investigador, Alemanha, começo do século XIX. Napoleão está atravessando a Europa, revoluções acontecem em série, e um professor de filosofia observa tudo da janela de Iena. Georg Hegel percebe: a história humana não caminha em linha reta — ela avança por CHOQUES. Uma ideia surge (TESE), aparece uma contrária (ANTÍTESE), e do choque nasce algo novo que integra as duas (SÍNTESE). É a DIALÉTICA. E não são só ideias: é o próprio ESPÍRITO da humanidade se tornando consciente de si.",
    falaFinal: "Nesta aula: dialética, senhor e escravo, e o espírito na história.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: como grandes ideias evoluem no mundo?",
    pergunta: "O progresso do pensamento acontece…",
    opcoes: [
      { id: "linear", titulo: "EM LINHA RETA", subtitulo: "cada ideia sucede a anterior", emoji: "➡️", cor: "from-sky-400 to-blue-600" },
      { id: "conflito", titulo: "POR CHOQUE de ideias opostas", subtitulo: "tese × antítese → síntese", emoji: "⚔️", cor: "from-purple-400 to-fuchsia-600" },
    ],
    respostaCerta: "conflito",
    feedbackAcerto: "Boa. Pra Hegel, é o CHOQUE que faz nascer o novo. Sem contradição, sem progresso.",
    feedbackErro: "Cuidado: pra Hegel, sem contradição nada avança. É do choque tese × antítese que surge a síntese.",
    falaFinal: "A história é feita de contradições que se resolvem em síntese.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave pra entrar em Hegel.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "dialetica",
        capa: "1. Dialética",
        emoji: "🌀",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "DIALÉTICA é o movimento em 3 tempos: TESE (uma afirmação, uma ideia posta) → ANTÍTESE (a negação, a contradição que surge) → SÍNTESE (o novo que integra os dois lados num nível mais alto). A síntese vira nova tese, e o ciclo recomeça. É como a história pensa a si mesma.",
        exemplo: "Ex.: liberdade absoluta (tese) → precisa de regras pra não virar caos (antítese) → Estado democrático que garante liberdade COM regras (síntese).",
        fotoUrl: dialetica,
      },
      {
        id: "senhor-escravo",
        capa: "2. Senhor e Escravo",
        emoji: "⚔️",
        cor: "from-red-500 to-orange-700",
        conteudo:
          "SENHOR E ESCRAVO é uma cena da 'Fenomenologia do Espírito' que virou clássica: dois seres se enfrentam, um vence e vira senhor, outro se rende e vira escravo. Paradoxo: o senhor só é senhor porque o escravo o reconhece. E o escravo, trabalhando, transforma o mundo — enquanto o senhor só consome. No fim, o escravo se torna o VERDADEIRO SUJEITO livre.",
        exemplo: "Ex.: opressor depende do oprimido pra existir como opressor. Quem transforma o mundo pelo trabalho conquista uma liberdade que o opressor perde.",
        fotoUrl: dialetica,
      },
      {
        id: "espirito",
        capa: "3. Espírito (Geist)",
        emoji: "🧠",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "ESPÍRITO (Geist) em Hegel NÃO é fantasma — é a CONSCIÊNCIA COLETIVA da humanidade avançando pela história. Cada época é um momento do Espírito se tornando mais consciente da liberdade. Grécia antiga: só alguns eram livres. Roma: mais gente. Modernidade: em princípio, todos. A história é a marcha do Espírito rumo à liberdade universal.",
        exemplo: "Ex.: abolição da escravidão, sufrágio universal, direitos humanos — pra Hegel, tudo isso é o Espírito realizando a liberdade que já estava por vir.",
        fotoUrl: hegel,
      },
    ],
    falaFinal: "Dialética × senhor/escravo × Espírito. As 3 chaves de Hegel.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos da filosofia hegeliana.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: dialetica,
    pontos: [
      {
        id: "iena",
        x: 22,
        y: 30,
        emoji: "⚔️",
        cor: "from-red-500 to-orange-700",
        titulo: "1806 — Napoleão em Iena",
        texto: "Hegel vê Napoleão passar a cavalo pela cidade e escreve: 'vi a Alma do Mundo cavalgando'. Pra ele, a Revolução Francesa é o momento em que o Espírito da liberdade toma forma concreta na história.",
        fotoUrl: hegel,
      },
      {
        id: "dialetica-como",
        x: 74,
        y: 30,
        emoji: "🌀",
        cor: "from-purple-500 to-fuchsia-700",
        titulo: "A dialética em ação",
        texto: "Tese: 'sou livre e faço o que quero'. Antítese: 'o outro também é livre — bate na minha liberdade'. Síntese: 'preciso de LEIS que reconheçam a liberdade de todos'. Cada choque produz um nível mais alto.",
        fotoUrl: dialetica,
      },
      {
        id: "senhor-escravo",
        x: 26,
        y: 70,
        emoji: "🔗",
        cor: "from-red-500 to-orange-700",
        titulo: "Fenomenologia — senhor e escravo",
        texto: "O senhor domina o escravo — mas depende do reconhecimento dele. O escravo trabalha, transforma a natureza, forma consciência. No fim, quem trabalha se torna o sujeito verdadeiro; quem só domina se esvazia.",
        fotoUrl: dialetica,
      },
      {
        id: "espirito-historia",
        x: 76,
        y: 70,
        emoji: "🌍",
        cor: "from-sky-500 to-blue-700",
        titulo: "O Espírito na história",
        texto: "Hegel vê toda a história como marcha do ESPÍRITO rumo à liberdade universal. Impérios caem, ideias morrem, revoluções acontecem — cada evento é um passo dessa autoconsciência coletiva se realizando.",
        fotoUrl: hegel,
      },
    ],
    falaFinal: "Napoleão → dialética → senhor/escravo → Espírito. Hegel em 4 passos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "DIALÉTICA é o movimento…",
        fotoUrl: dialetica,
        cards: [
          { id: "tres-tempos", emoji: "🌀", titulo: "Tese → antítese → síntese", cor: "from-purple-500 to-fuchsia-700" },
          { id: "linear", emoji: "➡️", titulo: "Uma ideia sucede a outra sem conflito", cor: "from-slate-400 to-gray-600" },
          { id: "ciclico", emoji: "🔁", titulo: "O mesmo se repete sem mudar", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "tres-tempos",
        feedbackAcerto: "Isso. 3 tempos, choque produtivo, síntese mais alta.",
        feedbackErro: "Dialética é CHOQUE que gera síntese — não linha reta nem repetição.",
      },
      {
        id: "q2",
        pergunta: "Na dialética SENHOR-ESCRAVO…",
        fotoUrl: dialetica,
        cards: [
          { id: "escravo-livre", emoji: "🔗", titulo: "É o escravo (que trabalha) que se torna o verdadeiro sujeito livre", cor: "from-emerald-500 to-teal-700" },
          { id: "senhor-livre", emoji: "👑", titulo: "O senhor é sempre o único livre", cor: "from-slate-400 to-gray-600" },
          { id: "iguais", emoji: "🤝", titulo: "Os dois são iguais desde o começo", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "escravo-livre",
        feedbackAcerto: "Perfeito. Trabalho + reconhecimento → escravo vira sujeito verdadeiro.",
        feedbackErro: "É o ESCRAVO: quem transforma o mundo pelo trabalho conquista uma liberdade que o senhor perde.",
      },
      {
        id: "q3",
        pergunta: "ESPÍRITO (Geist) em Hegel é…",
        fotoUrl: hegel,
        cards: [
          { id: "consciencia-coletiva", emoji: "🌍", titulo: "A consciência coletiva da humanidade avançando pela história", cor: "from-sky-500 to-blue-700" },
          { id: "fantasma", emoji: "👻", titulo: "Um fantasma que assombra as pessoas", cor: "from-slate-400 to-gray-600" },
          { id: "alma-corpo", emoji: "🕊️", titulo: "A alma individual dentro do corpo", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "consciencia-coletiva",
        feedbackAcerto: "Isso. Espírito = humanidade tomando consciência de si na história.",
        feedbackErro: "Não é fantasma nem alma individual: é a HUMANIDADE se tornando consciente de si.",
      },
    ],
    falaFinal: "3 acertos = radar hegeliano ligado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "A dialética hegeliana marcou o pensamento brasileiro — de Sérgio Buarque a Paulo Freire. Acenda 5 estados-referência.",
    instrucao: "Acenda 5 estados com forte tradição dialética",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "PE"],
      pergunta: "Quais 5 estados abrigam programas de referência em Hegel e dialética (USP, UFRJ, UFMG, UFRGS, UFPE)?",
    },
    falaFinal: "SP, RJ, MG, RS e PE — cinco polos onde a dialética é lida e disputada.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma dialética acontece na história. 5 passos.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do choque à síntese:",
    paradas: [
      { id: "tese", emoji: "1️⃣", rotulo: "1. Surge uma TESE", descricao: "Uma ideia ou realidade se afirma (ex.: 'monarquia absoluta')." },
      { id: "antitese", emoji: "2️⃣", rotulo: "2. Nasce a ANTÍTESE", descricao: "Contradições internas geram a oposta (ex.: 'democracia revolucionária')." },
      { id: "conflito", emoji: "⚔️", rotulo: "3. Choque histórico", descricao: "Os dois se enfrentam (ex.: Revolução Francesa)." },
      { id: "sintese", emoji: "🌀", rotulo: "4. Surge a SÍNTESE", descricao: "Algo novo integra os dois lados num patamar mais alto (ex.: Estado democrático de direito)." },
      { id: "nova-tese", emoji: "🔄", rotulo: "5. Síntese vira nova tese", descricao: "E o ciclo recomeça — a história nunca para." },
    ],
    ordemCerta: ["tese", "antitese", "conflito", "sintese", "nova-tese"],
    feedbackAcerto: "Exato. Tese → antítese → choque → síntese → nova tese. Motor da história.",
    feedbackErro: "A ordem é: tese, antítese, choque, síntese e nova tese.",
    falaFinal: "5 passos. Motor dialético da história.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 4 — Hegel e a dialética",
    paragrafos: [
      { id: "p1", texto: "Georg Hegel (1770-1831) observa a Revolução Francesa e Napoleão e formula sua tese: a história humana avança por CHOQUES. Toda ideia (TESE) gera sua contrária (ANTÍTESE); do embate surge uma SÍNTESE que integra as duas num nível mais alto.", chaves: ["Hegel", "dialética"] },
      { id: "p2", texto: "Na 'Fenomenologia do Espírito' (1807), Hegel narra a cena do SENHOR E ESCRAVO: dois se enfrentam, um vence, outro se rende. Mas o senhor depende do reconhecimento do escravo — e o escravo, trabalhando, transforma o mundo e forma sua consciência. Ao fim, é o escravo que se torna o verdadeiro sujeito livre.", chaves: ["senhor", "escravo"] },
      { id: "p3", texto: "Toda a história, pra Hegel, é a marcha do ESPÍRITO (Geist) — a consciência coletiva da humanidade — rumo à liberdade universal. Impérios caem, revoluções acontecem, direitos se ampliam: cada evento é um passo dessa autoconsciência se realizando.", chaves: ["Espírito", "história"] },
      { id: "p4", texto: "O legado é gigante: Marx vai virar a dialética 'de cabeça pra baixo' e aplicar à luta de classes; movimentos de libertação vão usar senhor-escravo pra explicar colonialismo e racismo; a filosofia da história moderna nasce daqui.", chaves: ["Marx", "libertação"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LABORATÓRIO DIALÉTICO! Cada caso ilustra qual momento?",
    instrucao: "⏱️ Que momento dialético é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "tese", emoji: "1️⃣", rotulo: "Tese (afirmação)" },
      { id: "antitese", emoji: "2️⃣", rotulo: "Antítese (negação)" },
      { id: "sintese", emoji: "🌀", rotulo: "Síntese (integração)" },
      { id: "senhor-escravo", emoji: "⚔️", rotulo: "Senhor e escravo" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "'Reis governam por direito divino'", emoji: "👑", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Afirmação estabelecida", emoji: "🏛️", cor: "from-amber-400 to-orange-600" },
        contexto: "Ordem que se afirmava sem contestação.",
        pecaCertaId: "tese",
        feedbackAcerto: "Isso. TESE — a ordem posta antes do choque.",
        feedbackErro: "É TESE: afirmação inicial, antes da contradição aparecer.",
      },
      {
        id: "r2",
        municipioA: { nome: "'O povo é soberano — abaixo o rei!'", emoji: "🔥", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Negação da tese anterior", emoji: "⚔️", cor: "from-red-400 to-orange-600" },
        contexto: "Revolução Francesa nega o direito divino.",
        pecaCertaId: "antitese",
        feedbackAcerto: "Perfeito. ANTÍTESE — a negação que estoura contra a tese.",
        feedbackErro: "É ANTÍTESE: contradição direta à ordem estabelecida.",
      },
      {
        id: "r3",
        municipioA: { nome: "'Estado democrático de direito com constituição'", emoji: "📜", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Integração num nível mais alto", emoji: "🌀", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Nem monarquia absoluta, nem caos revolucionário — instituições que garantem liberdade.",
        pecaCertaId: "sintese",
        feedbackAcerto: "Isso. SÍNTESE — integra ordem e liberdade em patamar mais alto.",
        feedbackErro: "É SÍNTESE: o novo que integra tese + antítese num nível mais alto.",
      },
      {
        id: "r4",
        municipioA: { nome: "'O colonizador só existe porque o colonizado o reconhece — e trabalha por ele'", emoji: "🔗", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Dependência oculta do opressor", emoji: "⚔️", cor: "from-red-400 to-orange-600" },
        contexto: "Colonialismo lido pela chave hegeliana.",
        pecaCertaId: "senhor-escravo",
        feedbackAcerto: "Perfeito. SENHOR-ESCRAVO — quem domina depende de quem é dominado.",
        feedbackErro: "É SENHOR-ESCRAVO: o opressor depende do oprimido pra existir como opressor.",
      },
      {
        id: "r5",
        municipioA: { nome: "'Escravidão é natural e sagrada'", emoji: "⛓️", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Afirmação que sustentou séculos", emoji: "🏛️", cor: "from-amber-400 to-orange-600" },
        contexto: "Ordem estabelecida antes do abolicionismo.",
        pecaCertaId: "tese",
        feedbackAcerto: "Isso. TESE — a ordem posta antes de ser negada.",
        feedbackErro: "É TESE: afirmação estabelecida antes do movimento abolicionista.",
      },
      {
        id: "r6",
        municipioA: { nome: "'Todo ser humano nasce livre e igual em dignidade'", emoji: "🕊️", cor: "from-emerald-400 to-teal-600" },
        municipioB: { nome: "Síntese que integra lutas anteriores", emoji: "🌀", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Declaração Universal dos Direitos Humanos, 1948.",
        pecaCertaId: "sintese",
        feedbackAcerto: "Perfeito. SÍNTESE — integra séculos de lutas em direito universal.",
        feedbackErro: "É SÍNTESE: a Declaração de 1948 integra as lutas anteriores num patamar universal.",
      },
    ],
    falaFinal: "6 casos, 4 categorias. Dialética iluminada.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: 2 ideias-força de Hegel.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "dialetica-motor",
        rotulo: "DIALÉTICA — motor da história",
        emoji: "🌀",
        percentual: 50,
        cor: "#8b5cf6",
        descricao:
          "Toda tese gera antítese; do choque nasce a síntese, que vira nova tese. Sem contradição, sem progresso. A dialética é o motor invisível que empurra a história pra frente.",
        exemplos: ["👑 Monarquia → 🔥 Revolução → 📜 Estado democrático", "⛓️ Escravidão → ✊ Abolicionismo → 🕊️ Direitos humanos"],
      },
      {
        id: "espirito-liberdade",
        rotulo: "ESPÍRITO — marcha da liberdade",
        emoji: "🌍",
        percentual: 50,
        cor: "#38bdf8",
        descricao:
          "A história é a consciência coletiva da humanidade rumo à liberdade universal. Cada época amplia o círculo de quem é reconhecido como livre — até chegar (em princípio) a todos.",
        exemplos: ["🏛️ Grécia: alguns livres", "⚖️ Modernidade: em princípio, todos", "🕊️ Direitos humanos (1948)"],
      },
    ],
    falaFinal: "Dialética × Espírito. Motor + rumo da história.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia MESTRE DA DIALÉTICA.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "DIALÉTICA (Hegel) é o movimento…",
        opcoes: [
          { id: "a", texto: "Tese → antítese → síntese, em espiral ascendente", correta: true },
          { id: "b", texto: "Uma ideia sucede a outra em linha reta, sem choque", correta: false },
          { id: "c", texto: "Uma dança do folclore alemão", correta: false },
        ],
        feedbackAcerto: "Isso. Choque produtivo em 3 tempos.",
        feedbackErro: "Dialética é CHOQUE em 3 tempos — não linha reta nem folclore.",
      },
      {
        id: "av2",
        pergunta: "Na dialética SENHOR-ESCRAVO, quem se torna o verdadeiro sujeito livre?",
        opcoes: [
          { id: "a", texto: "O escravo — porque trabalha, transforma o mundo e forma consciência", correta: true },
          { id: "b", texto: "O senhor — porque manda", correta: false },
          { id: "c", texto: "Ninguém — ambos ficam presos", correta: false },
        ],
        feedbackAcerto: "Perfeito. Trabalho + reconhecimento = liberdade real.",
        feedbackErro: "É o ESCRAVO: quem trabalha e transforma se torna sujeito verdadeiro.",
      },
      {
        id: "av3",
        pergunta: "ESPÍRITO (Geist) em Hegel é…",
        opcoes: [
          { id: "a", texto: "A consciência coletiva da humanidade avançando na história rumo à liberdade universal", correta: true },
          { id: "b", texto: "Um espírito sobrenatural", correta: false },
          { id: "c", texto: "A alma individual", correta: false },
        ],
        feedbackAcerto: "Isso. Humanidade se tornando consciente de si.",
        feedbackErro: "Não é sobrenatural nem individual: é HUMANIDADE em processo histórico.",
      },
    ],
    selo: { nome: "Mestre da Dialética", subtitulo: "Insígnia do Movimento Hegeliano", emoji: "🌀", cor: "from-purple-400 to-fuchsia-700" },
    falaFinal: "Insígnia conquistada! Você entrou no motor dialético da história.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Mestre da Dialética" },
};
