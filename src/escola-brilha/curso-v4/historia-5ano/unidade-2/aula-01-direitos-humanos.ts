import type { AulaGeoV1 } from "../../types";
import imgOnu from "@/assets/historia-5ano/onu-assembleia.jpg";
import imgDecl from "@/assets/historia-5ano/declaracao-direitos-humanos.jpg";
import imgRev from "@/assets/historia-5ano/revolucao-francesa.jpg";
import imgConst from "@/assets/historia-5ano/constituicao-1988.jpg";
import imgTimeline from "@/assets/historia-5ano/timeline-direitos.jpg";

/**
 * História · 5º Ano · Unidade 2 · Aula 01
 * "A Declaração dos Direitos Humanos"
 * Restaura a Página 2 do Memorial: O Farol dos Direitos.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-direitos-humanos",
  titulo: "A Declaração dos Direitos Humanos",
  iconeTrilha: "🕊️",
  bncc: ["EF05HI02", "EF05HI04"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a fotografia. Este é o plenário da ONU — o lugar onde, em 1948, os países do mundo assinaram a DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS.",
    mapaUrl: imgOnu,
    imagemDestaqueUrl: imgDecl,
    aurora:
      "Pequeno Historiador, existe um documento que diz: 'todo ser humano nasce livre e igual em dignidade e direitos'. Isso parece óbvio hoje — mas custou séculos e duas Guerras Mundiais pra virar lei.",
    falaFinal:
      "Nesta aula você acende a segunda Tocha da Justiça: O Farol dos Direitos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite de investigador: por que a ONU criou a Declaração dos Direitos Humanos JUSTAMENTE em 1948?",
    pergunta: "Por que 1948?",
    fotoUrl: imgOnu,
    opcoes: [
      {
        id: "guerra",
        titulo: "Logo depois da 2ª Guerra Mundial",
        subtitulo: "os países viram os horrores e criaram regras globais",
        emoji: "🕊️",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgOnu,
      },
      {
        id: "moda",
        titulo: "Foi só uma moda internacional",
        subtitulo: "não teve motivo histórico importante",
        emoji: "❓",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgDecl,
      },
    ],
    respostaCerta: "guerra",
    feedbackAcerto:
      "Correto. A 2ª Guerra (1939-1945) deixou milhões de mortos e mostrou os horrores do Holocausto. O mundo prometeu: NUNCA MAIS. A Declaração é essa promessa em texto.",
    feedbackErro:
      "Não. A Declaração foi uma RESPOSTA URGENTE aos horrores da 2ª Guerra Mundial. Os países quiseram criar regras pra proteger a dignidade humana em todo lugar.",
    falaFinal: "Guarde essa ideia: direitos humanos NÃO caíram do céu — foram conquistados depois de tragédias enormes.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas do vocabulário dos direitos humanos.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "direitos",
        capa: "Direitos Humanos",
        emoji: "🕊️",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgDecl,
        conteudo:
          "DIREITOS HUMANOS são garantias FUNDAMENTAIS que TODA pessoa tem só por ser humana — sem depender de nacionalidade, cor, religião ou gênero. Incluem vida, liberdade, saúde, educação e igualdade.",
        exemplo:
          "Exemplo: ninguém pode ser escravizado, torturado ou impedido de estudar. Se acontece, é violação de direitos humanos.",
      },
      {
        id: "onu",
        capa: "ONU",
        emoji: "🌐",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgOnu,
        conteudo:
          "ONU (Organização das Nações Unidas) é a maior organização internacional do mundo. Reúne quase 200 países pra manter a PAZ, discutir problemas globais e fiscalizar o cumprimento dos direitos humanos.",
        exemplo:
          "Exemplo: em 1948 a ONU aprovou a Declaração Universal. Hoje ela também cuida de crises climáticas, refugiados e vacinas.",
      },
      {
        id: "constituicao",
        capa: "Constituição",
        emoji: "📜",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgConst,
        conteudo:
          "CONSTITUIÇÃO é a LEI MAIS IMPORTANTE de um país. Todas as outras leis precisam obedecer a ela. É onde estão escritos os direitos e deveres dos cidadãos.",
        exemplo:
          "Exemplo: a Constituição brasileira de 1988 é chamada de CONSTITUIÇÃO CIDADÃ — colocou os direitos humanos em primeiro lugar.",
      },
    ],
    falaFinal:
      "Direitos Humanos + ONU + Constituição. Esse trio é a base pra entender como os direitos são protegidos hoje.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o INFOGRÁFICO oficial da evolução dos direitos humanos. Toque em cada marco pra entender.",
    instrucao: "Toque nos pontos da linha do tempo",
    mapaUrl: imgTimeline,
    pontos: [
      {
        id: "rev",
        x: 18,
        y: 50,
        emoji: "🇫🇷",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgRev,
        titulo: "1. REVOLUÇÃO FRANCESA (1789)",
        texto:
          "O povo derruba o rei e proclama a Declaração dos Direitos do Homem e do Cidadão. Nasce o lema LIBERDADE, IGUALDADE, FRATERNIDADE. A ideia se espalha pelo mundo.",
      },
      {
        id: "onu",
        x: 50,
        y: 50,
        emoji: "🕊️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgOnu,
        titulo: "2. DECLARAÇÃO DA ONU (1948)",
        texto:
          "Depois da 2ª Guerra Mundial, a ONU aprova a Declaração Universal dos Direitos Humanos. Documento assinado por quase todos os países do planeta.",
      },
      {
        id: "cid",
        x: 82,
        y: 50,
        emoji: "🇧🇷",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgConst,
        titulo: "3. CONSTITUIÇÃO CIDADÃ (1988)",
        texto:
          "O Brasil promulga sua Constituição depois de anos de ditadura militar. Garante saúde, educação, voto, liberdade de expressão pra TODOS.",
      },
    ],
    falaFinal: "1789 → 1948 → 1988. Três marcos que MUDARAM a ideia de dignidade humana no mundo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de investigador dos direitos humanos.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual organização internacional aprovou a Declaração Universal dos Direitos Humanos em 1948?",
        fotoUrl: imgOnu,
        cards: [
          { id: "o", emoji: "🌐", titulo: "ONU", cor: "from-sky-500 to-blue-700" },
          { id: "n", emoji: "🚀", titulo: "NASA", cor: "from-amber-500 to-orange-700" },
          { id: "f", emoji: "⚽", titulo: "FIFA", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "o",
        feedbackAcerto: "Correto. ONU — Organização das Nações Unidas.",
        feedbackErro: "NASA é espaço, FIFA é futebol. Quem cuida dos direitos humanos é a ONU.",
      },
      {
        id: "q2",
        pergunta: "Qual foi o lema famoso da Revolução Francesa de 1789?",
        fotoUrl: imgRev,
        cards: [
          { id: "l", emoji: "⚖️", titulo: "Liberdade, Igualdade, Fraternidade", cor: "from-emerald-500 to-teal-700" },
          { id: "o", emoji: "👑", titulo: "Ordem e Rei", cor: "from-slate-500 to-slate-700" },
          { id: "g", emoji: "💰", titulo: "Guerra e Ouro", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "l",
        feedbackAcerto: "Isso! Liberdade, Igualdade, Fraternidade — três palavras que mudaram o mundo.",
        feedbackErro: "O lema da Revolução Francesa é: LIBERDADE, IGUALDADE, FRATERNIDADE.",
      },
      {
        id: "q3",
        pergunta: "Como é chamada a Constituição brasileira de 1988?",
        fotoUrl: imgConst,
        cards: [
          { id: "c", emoji: "📜", titulo: "Constituição Cidadã", cor: "from-emerald-500 to-teal-700" },
          { id: "i", emoji: "👑", titulo: "Constituição Imperial", cor: "from-amber-500 to-orange-700" },
          { id: "m", emoji: "⛓️", titulo: "Constituição Colonial", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "c",
        feedbackAcerto: "Exato. CONSTITUIÇÃO CIDADÃ — porque colocou os direitos humanos em primeiro lugar.",
        feedbackErro: "Imperial é do tempo do Império (até 1889). A de 1988 é a CIDADÃ.",
      },
    ],
    falaFinal: "Radar afiado. Você domina os marcos dos direitos humanos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores em cima do mesmo infográfico: um destaca ANTES (direitos restritos) e outro DEPOIS (direitos universais).",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgTimeline,
    camadas: [
      {
        id: "antes",
        rotulo: "Antes de 1948",
        emoji: "⛓️",
        cor: "from-amber-600 to-orange-800",
        rect: { x: 0, y: 10, w: 50, h: 80 },
        descricao:
          "Direitos eram RESTRITOS. Escravidão ainda era legal em muitos lugares. Mulheres não votavam. Trabalhadores não tinham férias. Cada país fazia suas regras sem controle internacional.",
      },
      {
        id: "depois",
        rotulo: "Depois de 1948",
        emoji: "🕊️",
        cor: "from-emerald-600 to-teal-800",
        rect: { x: 50, y: 10, w: 50, h: 80 },
        descricao:
          "Direitos passam a ser UNIVERSAIS. Escravidão é crime em qualquer lugar. Tortura é proibida. Todo país que assinou a Declaração precisa proteger a dignidade humana.",
      },
    ],
    falaFinal: "1948 foi um DIVISOR. A humanidade se comprometeu, no papel, a proteger todos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos ordenar 4 marcos históricos dos direitos humanos.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Ordem cronológica dos direitos humanos",
    paradas: [
      { id: "rev", emoji: "🇫🇷", rotulo: "1. Revolução Francesa (1789)", fotoUrl: imgRev, descricao: "Direitos do Homem e do Cidadão. Liberdade, Igualdade, Fraternidade." },
      { id: "onu", emoji: "🕊️", rotulo: "2. Declaração da ONU (1948)", fotoUrl: imgOnu, descricao: "Direitos Humanos universais depois da 2ª Guerra Mundial." },
      { id: "cid", emoji: "🇧🇷", rotulo: "3. Constituição Cidadã (1988)", fotoUrl: imgConst, descricao: "Brasil garante direitos humanos por lei." },
      { id: "hoje", emoji: "🌍", rotulo: "4. Hoje (ONU + países)", fotoUrl: imgTimeline, descricao: "Comissões da ONU fiscalizam violações no mundo inteiro." },
    ],
    ordemCerta: ["rev", "onu", "cid", "hoje"],
    feedbackAcerto: "Perfeito: 1789 → 1948 → 1988 → hoje. Uma escada de conquistas.",
    feedbackErro: "Essa não é a próxima etapa. Pense na cronologia.",
    falaFinal: "Você mapeou mais de 200 anos de luta por direitos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página 2 do Memorial. Toque nas palavras destacadas pra ver a definição.",
    tituloLivro: "📜 Memorial da Cidadania e dos Direitos",
    subtitulo: "Página 2 — O Farol dos Direitos",
    paragrafos: [
      {
        id: "p1",
        texto:
          "DIREITOS HUMANOS são garantias que toda pessoa tem só por ser humana. A ideia moderna nasceu com a REVOLUÇÃO FRANCESA (1789), que proclamou o lema: LIBERDADE, IGUALDADE, FRATERNIDADE.",
        chaves: ["Direitos Humanos"],
        definicoes: {
          "Direitos Humanos":
            "Garantias fundamentais (vida, liberdade, saúde, educação, igualdade) que toda pessoa tem só por ser humana, sem distinção.",
        },
        fotoUrl: imgRev,
      },
      {
        id: "p2",
        texto:
          "Depois dos horrores da 2ª Guerra Mundial, a ONU aprovou em 1948 a DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS. Documento assinado por quase todos os países do mundo: 'todo ser humano nasce livre e igual em dignidade e direitos'.",
        chaves: ["ONU"],
        definicoes: {
          ONU:
            "Organização das Nações Unidas. Reúne quase 200 países pra manter a paz e fiscalizar os direitos humanos.",
        },
        fotoUrl: imgOnu,
      },
      {
        id: "p3",
        texto:
          "No Brasil, a CONSTITUIÇÃO de 1988 é chamada de CONSTITUIÇÃO CIDADÃ porque garantiu saúde, educação, voto e liberdade de expressão pra todos os brasileiros — depois de 21 anos de ditadura militar.",
        chaves: ["Constituição"],
        definicoes: {
          Constituição:
            "Lei mais importante de um país. Todas as outras leis precisam obedecer a ela.",
        },
        fotoUrl: imgConst,
      },
    ],
    falaFinal: "Leitura concluída. Você já explica por que 1948 e 1988 são anos históricos.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão relâmpago. Cada rodada mostra uma ação: é um DIREITO ou é um DEVER do cidadão?",
    instrucao: "⏱️ Toque na classificação correta antes do tempo acabar",
    duracaoSegundos: 18,
    pecas: [
      { id: "d", emoji: "🕊️", rotulo: "Direito" },
      { id: "v", emoji: "✅", rotulo: "Dever" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Estudar em escola pública", emoji: "🏫", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Educação gratuita", emoji: "📚", cor: "from-emerald-500 to-teal-700" }, contexto: "Ir à escola gratuita.", pecaCertaId: "d", feedbackAcerto: "Correto. Educação é DIREITO garantido pela Constituição.", feedbackErro: "Educação é DIREITO — garantido pela Constituição de 1988." },
      { id: "r2", municipioA: { nome: "Respeitar sinal vermelho", emoji: "🚦", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Cumprir leis de trânsito", emoji: "🚗", cor: "from-orange-500 to-red-700" }, contexto: "Parar no sinal vermelho.", pecaCertaId: "v", feedbackAcerto: "Correto. Respeitar leis é DEVER.", feedbackErro: "Cumprir leis é DEVER do cidadão." },
      { id: "r3", municipioA: { nome: "Ter atendimento no SUS", emoji: "🏥", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Saúde gratuita e universal", emoji: "💊", cor: "from-emerald-500 to-teal-700" }, contexto: "Ser atendido no hospital público.", pecaCertaId: "d", feedbackAcerto: "Correto. Saúde é DIREITO — SUS é universal.", feedbackErro: "Saúde é DIREITO garantido pela Constituição." },
      { id: "r4", municipioA: { nome: "Não pichar patrimônio público", emoji: "🎨", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Preservar o que é de todos", emoji: "🏛️", cor: "from-orange-500 to-red-700" }, contexto: "Não vandalizar praças e escolas.", pecaCertaId: "v", feedbackAcerto: "Correto. Preservar o público é DEVER.", feedbackErro: "Cuidar do patrimônio público é DEVER do cidadão." },
      { id: "r5", municipioA: { nome: "Votar aos 16 anos", emoji: "🗳️", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Escolher representantes", emoji: "✍️", cor: "from-emerald-500 to-teal-700" }, contexto: "Tirar título e votar aos 16.", pecaCertaId: "d", feedbackAcerto: "Correto. Voto aos 16 é DIREITO (facultativo).", feedbackErro: "Voto aos 16 é DIREITO. Só vira dever aos 18 anos." },
      { id: "r6", municipioA: { nome: "Pagar impostos", emoji: "💰", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Contribuir com o Estado", emoji: "🧾", cor: "from-orange-500 to-red-700" }, contexto: "Pagar tributos corretamente.", pecaCertaId: "v", feedbackAcerto: "Correto. Pagar imposto é DEVER.", feedbackErro: "Pagar impostos é DEVER de todo cidadão." },
    ],
    falaFinal: "6 rodadas! Você já diferencia DIREITO (o que se recebe) de DEVER (o que se cumpre).",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos direitos humanos: dois grupos principais garantidos pela Constituição de 1988.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgConst,
    fatias: [
      {
        id: "civis",
        rotulo: "Direitos Civis e Políticos",
        emoji: "🗳️",
        percentual: 50,
        cor: "#0f766e",
        descricao:
          "Vida, liberdade, expressão, voto, ir e vir. São os direitos que garantem participação política e liberdade pessoal.",
        exemplos: ["🗳️ Votar", "✍️ Falar", "🚶 Circular"],
      },
      {
        id: "sociais",
        rotulo: "Direitos Sociais",
        emoji: "🏥",
        percentual: 50,
        cor: "#b45309",
        descricao:
          "Saúde, educação, moradia, trabalho, previdência. São os direitos que garantem uma vida digna.",
        exemplos: ["🏥 SUS", "🏫 Escola", "🏠 Moradia"],
      },
    ],
    falaFinal: "Direitos Civis + Direitos Sociais = uma cidadania completa.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra ganhar o Farol dos Direitos.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgDecl,
    perguntas: [
      { id: "av1", pergunta: "Qual organização aprovou a Declaração Universal dos Direitos Humanos em 1948?", opcoes: [{ id: "a", texto: "A Liga dos Navegadores.", correta: false }, { id: "b", texto: "A ONU (Organização das Nações Unidas).", correta: true }, { id: "c", texto: "A NASA.", correta: false }], feedbackAcerto: "Correto! ONU.", feedbackErro: "Foi a ONU." },
      { id: "av2", pergunta: "Qual foi o lema da Revolução Francesa de 1789?", opcoes: [{ id: "a", texto: "Ordem e Progresso.", correta: false }, { id: "b", texto: "Liberdade, Igualdade, Fraternidade.", correta: true }, { id: "c", texto: "Pátria e Rei.", correta: false }], feedbackAcerto: "Correto! Liberdade, Igualdade, Fraternidade.", feedbackErro: "O lema é: Liberdade, Igualdade, Fraternidade." },
      { id: "av3", pergunta: "Como se chama a Constituição brasileira de 1988?", opcoes: [{ id: "a", texto: "Constituição Imperial.", correta: false }, { id: "b", texto: "Constituição Cidadã.", correta: true }, { id: "c", texto: "Constituição Colonial.", correta: false }], feedbackAcerto: "Isso! Constituição Cidadã.", feedbackErro: "É a CONSTITUIÇÃO CIDADÃ." },
    ],
    selo: { nome: "Farol dos Direitos", subtitulo: "Insígnia oficial do Memorial da Cidadania", emoji: "🕊️", cor: "from-emerald-400 to-teal-600", fotoUrl: imgOnu },
    falaFinal: "Insígnia conquistada! Página 2 restaurada. A segunda Tocha da Justiça brilha: O Farol dos Direitos.",
  },

  recompensa: { xp: 450, moedas: 350, medalha: "Farol dos Direitos" },
};
