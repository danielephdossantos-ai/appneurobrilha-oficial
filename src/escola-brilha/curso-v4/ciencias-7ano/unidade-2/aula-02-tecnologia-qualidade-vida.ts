import type { AulaGeoV1 } from "../../types";
import { url as microorgImg } from "@/assets/ciencias-7ano/u2-a1/microorganismos.jpg.asset.json";
import { url as arvoreImg } from "@/assets/ciencias-7ano/u2-a1/arvore-filogenetica.jpg.asset.json";
import { url as especiesImg } from "@/assets/ciencias-7ano/u2-a1/especies-comparadas.jpg.asset.json";

/**
 * Ciências · 7º Ano · Unidade 2 · Aula 02
 * "Tecnologia e Qualidade de Vida" — Departamento de Diversidade Biológica.
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-tecnologia-e-qualidade-de-vida",
  titulo: "Tecnologia e Qualidade de Vida",
  iconeTrilha: "💉",
  recompensa: { xp: 130, moedas: 50, medalha: "Historiador da Saúde Júnior" },
  bncc: ["EF07CI11"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Placa de Petri com bactérias e mofo. Toque para iniciar.",
    mapaUrl: microorgImg,
    imagemDestaqueUrl: especiesImg,
    aurora:
      "Departamento 2: Diversidade Biológica. Missão: entender como o CONHECIMENTO sobre microrganismos mudou a expectativa de vida humana — da descoberta dos germes à vacina.",
    falaFinal:
      "Em 1900, a expectativa de vida mundial era ~31 anos. Hoje passa de 70. Ciência sobre microrganismos é uma das razões principais.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de 1928, um simples corte infectado podia matar uma pessoa saudável. O que mudou isso radicalmente?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: microorgImg,
    opcoes: [
      { id: "penicilina", titulo: "Descoberta da penicilina", subtitulo: "primeiro antibiótico eficaz", emoji: "💊", cor: "from-emerald-500 to-teal-700", fotoUrl: microorgImg },
      { id: "sabao", titulo: "Invenção do sabão", subtitulo: "já existia há séculos", emoji: "🧼", cor: "from-slate-500 to-slate-700", fotoUrl: especiesImg },
      { id: "nada", titulo: "Nada mudou", subtitulo: "infecções continuam letais igual", emoji: "❌", cor: "from-rose-500 to-red-700", fotoUrl: microorgImg },
    ],
    respostaCerta: "penicilina",
    feedbackAcerto:
      "Correto. Alexander Fleming descobriu a penicilina em 1928 — o primeiro ANTIBIÓTICO. Ela mata bactérias sem matar a célula humana, revolucionando o tratamento de infecções.",
    feedbackErro:
      "Sabão já existia há séculos e ajuda a prevenir, não a tratar infecção já instalada. A mudança radical veio da PENICILINA (1928), primeiro antibiótico eficaz contra bactérias.",
    falaFinal:
      "Antes dos antibióticos, uma infecção bacteriana comum podia ser fatal. Depois deles, tornou-se tratável em dias.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco marcos tecnológicos que mudaram a saúde humana.",
    instrucao: "Vocabulário da saúde",
    cadernos: [
      { id: "vacina", capa: "VACINA", emoji: "💉", cor: "from-sky-500 to-cyan-700", conteudo: "Preparado que ensina o sistema imunológico a reconhecer um agente infeccioso ANTES do contato real, sem causar a doença. Criada por Edward Jenner em 1796 contra a varíola.", exemplo: "Ex.: vacina da varíola erradicou a doença em 1980.", fotoUrl: microorgImg },
      { id: "antibiotico", capa: "ANTIBIÓTICO", emoji: "💊", cor: "from-emerald-500 to-teal-700", conteudo: "Substância que mata ou impede a reprodução de BACTÉRIAS, sem matar as células humanas. Não funciona contra vírus.", exemplo: "Ex.: penicilina (1928), descoberta por Alexander Fleming.", fotoUrl: microorgImg },
      { id: "saneamento", capa: "SANEAMENTO BÁSICO", emoji: "🚰", cor: "from-amber-500 to-orange-700", conteudo: "Sistemas de água tratada e esgoto que impedem contato humano com microrganismos causadores de doenças como cólera e febre tifoide.", exemplo: "Ex.: rede de esgoto reduziu drasticamente mortes por cólera desde o séc. XIX.", fotoUrl: especiesImg },
      { id: "microscopio", capa: "MICROSCÓPIO", emoji: "🔬", cor: "from-indigo-500 to-purple-700", conteudo: "Instrumento que permite VER microrganismos invisíveis a olho nu, revelando a causa real de muitas doenças infecciosas.", exemplo: "Ex.: Antonie van Leeuwenhoek observou bactérias pela 1ª vez em 1676.", fotoUrl: microorgImg },
      { id: "esterilizacao", capa: "ESTERILIZAÇÃO", emoji: "🧴", cor: "from-red-500 to-rose-700", conteudo: "Eliminação de todos os microrganismos de um instrumento ou ambiente antes de um procedimento médico, evitando infecção.", exemplo: "Ex.: Ignaz Semmelweis (1847) reduziu mortes ao exigir lavagem de mãos entre partos.", fotoUrl: especiesImg, partes: [
        { titulo: "Antes", texto: "Sem esterilização, médicos passavam bactérias de paciente a paciente." },
        { titulo: "Descoberta", texto: "Semmelweis notou que lavar as mãos com solução clorada reduzia mortes em até 90%." },
        { titulo: "Resistência", texto: "A ideia foi rejeitada por anos, pois ninguém via os micróbios." },
        { titulo: "Consolidação", texto: "Só com o microscópio e a teoria dos germes de Pasteur, a prática foi aceita definitivamente." },
      ] },
    ],
    falaFinal:
      "Vacina, antibiótico, saneamento, microscópio, esterilização. Cinco tecnologias que mais que dobraram a expectativa de vida humana.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Linha de descobertas sobre microrganismos. Toque em cada marco.",
    instrucao: "Toque nos pontos",
    mapaUrl: microorgImg,
    pontos: [
      { id: "leeuwenhoek", x: 20, y: 70, emoji: "🔬", cor: "from-indigo-500 to-purple-700", titulo: "1676 — Primeiro microrganismo visto", texto: "Antonie van Leeuwenhoek construiu um microscópio rudimentar e observou bactérias em água pela primeira vez na história.", fotoUrl: microorgImg },
      { id: "pasteur", x: 45, y: 45, emoji: "🧫", cor: "from-emerald-500 to-teal-700", titulo: "1861 — Teoria dos germes", texto: "Louis Pasteur provou que microrganismos causam doenças e fermentação — encerrando a ideia de 'geração espontânea'.", fotoUrl: microorgImg },
      { id: "jenner", x: 65, y: 65, emoji: "💉", cor: "from-sky-500 to-cyan-700", titulo: "1796 — Primeira vacina", texto: "Edward Jenner criou a vacina da varíola usando o vírus da varíola bovina, mais fraco. Início da imunização moderna.", fotoUrl: especiesImg },
      { id: "fleming", x: 80, y: 30, emoji: "💊", cor: "from-red-500 to-rose-700", titulo: "1928 — Penicilina", texto: "Alexander Fleming notou que um mofo (Penicillium) matava bactérias em sua placa de cultura — nascia o primeiro antibiótico.", fotoUrl: microorgImg },
    ],
    falaFinal:
      "Cada descoberta dependeu da anterior: ver o micróbio, entender que ele causa doença, aprender a preveni-lo e depois a combatê-lo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão sobre tecnologia e saúde.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Quem descobriu a penicilina, o primeiro antibiótico?", fotoUrl: microorgImg,
        cards: [
          { id: "a", emoji: "💊", titulo: "Alexander Fleming (1928)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔬", titulo: "Antonie van Leeuwenhoek", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "💉", titulo: "Edward Jenner", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Fleming observou o efeito do mofo Penicillium sobre bactérias em 1928.",
        feedbackErro: "Leeuwenhoek viu os primeiros micróbios; Jenner criou a primeira vacina. Quem descobriu o ANTIBIÓTICO foi FLEMING." },
      { id: "q2", pergunta: "Antibióticos funcionam contra...", fotoUrl: especiesImg,
        cards: [
          { id: "a", emoji: "🦠", titulo: "Bactérias", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🦠", titulo: "Vírus", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🦠", titulo: "Qualquer microrganismo, sem distinção", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Antibiótico só funciona contra BACTÉRIAS. Vírus precisam de outros tratamentos.",
        feedbackErro: "Antibiótico NÃO mata vírus (por isso não tratam gripe comum). Funcionam só contra BACTÉRIAS." },
      { id: "q3", pergunta: "O saneamento básico ajuda a saúde principalmente porque...", fotoUrl: microorgImg,
        cards: [
          { id: "a", emoji: "🚰", titulo: "Separa a água potável do esgoto contaminado com microrganismos", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💊", titulo: "Substitui os antibióticos", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔬", titulo: "Cria novos microrganismos benéficos", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Saneamento PREVINE o contato com micróbios patogênicos, reduzindo doenças na origem.",
        feedbackErro: "Saneamento não substitui remédio nem cria micróbios — ele PREVINE contato com água/esgoto contaminados." },
    ],
    falaFinal:
      "Você já entende como a ciência dos microrganismos mudou drasticamente a saúde humana.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "A saúde pública se apoia em duas grandes frentes: PREVENÇÃO (evitar a doença) e TRATAMENTO (curar quem já adoeceu).",
    instrucao: "Toque nos interruptores",
    mapaUrl: especiesImg,
    camadas: [
      { id: "prevencao", rotulo: "Prevenção", emoji: "🚰", cor: "from-sky-500 to-cyan-700", rect: { x: 5, y: 5, w: 45, h: 90 }, descricao: "Vacinas, saneamento básico, higiene. Evitam que a pessoa fique doente antes mesmo do contato com o microrganismo.", fotoUrl: especiesImg },
      { id: "tratamento", rotulo: "Tratamento", emoji: "💊", cor: "from-emerald-500 to-teal-700", rect: { x: 50, y: 5, w: 45, h: 90 }, descricao: "Antibióticos e outros remédios. Combatem a doença DEPOIS que ela já se instalou no corpo.", fotoUrl: microorgImg },
    ],
    falaFinal:
      "Prevenir é sempre mais barato e seguro que tratar — mas os dois são necessários na saúde pública.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "A HISTÓRIA da luta contra os micróbios — ordene os marcos.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene do mais antigo ao mais recente:",
    paradas: [
      { id: "leeuwenhoek", emoji: "🔬", rotulo: "1. Primeiro micróbio visto (1676)", descricao: "Leeuwenhoek vê bactérias no microscópio.", fotoUrl: microorgImg },
      { id: "jenner", emoji: "💉", rotulo: "2. Primeira vacina (1796)", descricao: "Jenner cria a vacina da varíola.", fotoUrl: especiesImg },
      { id: "pasteur", emoji: "🧫", rotulo: "3. Teoria dos germes (1861)", descricao: "Pasteur prova que micróbios causam doença.", fotoUrl: microorgImg },
      { id: "fleming", emoji: "💊", rotulo: "4. Penicilina (1928)", descricao: "Fleming descobre o primeiro antibiótico.", fotoUrl: microorgImg },
    ],
    ordemCerta: ["leeuwenhoek", "jenner", "pasteur", "fleming"],
    feedbackAcerto:
      "Exato. Primeiro é preciso VER o micróbio, depois vem a vacina (por tentativa), depois a TEORIA que explica por quê, depois o remédio que cura.",
    feedbackErro:
      "Ordem correta: ver o micróbio (1676) → vacina (1796) → teoria dos germes (1861) → penicilina (1928).",
    falaFinal:
      "Curiosamente, a vacina de Jenner veio ANTES de sabermos exatamente por que ela funcionava — a ciência às vezes acerta antes de explicar.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório sobre a erradicação de uma doença.",
    tituloLivro: "📓 Relatório · Erradicação da Varíola",
    subtitulo: "A única doença humana eliminada do planeta",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: a varíola matou cerca de 300 milhões de pessoas só no século XX, com taxa de letalidade de até 30%. Não havia cura — só prevenção.", chaves: ["letalidade"], definicoes: { letalidade: "Percentual de pessoas infectadas que morrem pela doença." }, fotoUrl: especiesImg },
      { id: "p2", texto: "CAMPANHA: em 1967, a Organização Mundial da Saúde lançou uma campanha global de VACINAÇÃO em massa, usando a vacina desenvolvida por Jenner quase 200 anos antes, aperfeiçoada com tecnologia moderna de conservação e aplicação.", chaves: ["vacinação em massa"], definicoes: { "vacinação em massa": "Aplicação da vacina em grande parte da população para eliminar a circulação do agente infeccioso." }, fotoUrl: microorgImg },
      { id: "p3", texto: "RESULTADO: em 1980, a OMS declarou a varíola OFICIALMENTE ERRADICADA — a única doença humana eliminada da face da Terra até hoje. Prova de que tecnologia médica bem aplicada em escala global pode vencer um microrganismo por completo.", chaves: ["erradicada"], definicoes: { erradicada: "Completamente eliminada, sem nenhum caso novo no mundo." }, fotoUrl: microorgImg },
    ],
    falaFinal:
      "A varíola provou que ciência + cooperação internacional podem eliminar uma doença. Um raro exemplo de vitória total.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio: essa tecnologia é PREVENÇÃO ou TRATAMENTO?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 30,
    pecas: [
      { id: "prevencao", emoji: "🚰", rotulo: "Prevenção" },
      { id: "tratamento", emoji: "💊", rotulo: "Tratamento" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Vacina contra sarampo", emoji: "💉", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Aplicada antes do contato com o vírus", emoji: "🛡️", cor: "from-cyan-500 to-blue-700" }, contexto: "Criança recebe dose aos 12 meses.", pecaCertaId: "prevencao", fotoUrl: especiesImg, feedbackAcerto: "PREVENÇÃO. Vacina ensina o corpo antes de qualquer doença acontecer.", feedbackErro: "Vacina age ANTES da doença, ensinando o sistema imune. É PREVENÇÃO." },
      { id: "r2", municipioA: { nome: "Antibiótico para infecção urinária", emoji: "💊", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Tomado depois do diagnóstico da infecção", emoji: "🏥", cor: "from-red-500 to-rose-700" }, contexto: "Paciente já com sintomas.", pecaCertaId: "tratamento", fotoUrl: microorgImg, feedbackAcerto: "TRATAMENTO. Combate uma infecção que já está instalada no corpo.", feedbackErro: "É usado DEPOIS que a doença já apareceu — isso é TRATAMENTO, não prevenção." },
      { id: "r3", municipioA: { nome: "Rede de esgoto tratado", emoji: "🚰", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Evita contato com água contaminada", emoji: "💧", cor: "from-cyan-500 to-blue-700" }, contexto: "Infraestrutura urbana básica.", pecaCertaId: "prevencao", fotoUrl: especiesImg, feedbackAcerto: "PREVENÇÃO. Saneamento evita que o microrganismo chegue até você.", feedbackErro: "Impede o contato ANTES da doença ocorrer — isso é PREVENÇÃO." },
      { id: "r4", municipioA: { nome: "Antiviral para gripe grave", emoji: "💊", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Reduz sintomas após infecção confirmada", emoji: "🤒", cor: "from-red-500 to-rose-700" }, contexto: "Paciente internado com gripe forte.", pecaCertaId: "tratamento", fotoUrl: microorgImg, feedbackAcerto: "TRATAMENTO. Age sobre uma infecção viral já instalada, reduzindo seus efeitos.", feedbackErro: "É usado quando a pessoa JÁ está infectada — isso é TRATAMENTO." },
    ],
    falaFinal:
      "Você já distingue prevenção de tratamento em segundos — base para entender política de saúde pública.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Estimativa de quanto cada fator tecnológico contribuiu para o aumento da expectativa de vida mundial desde 1900.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: especiesImg,
    fatias: [
      { id: "saneamentovacinas", rotulo: "Saneamento e vacinas", emoji: "🚰", percentual: 60, cor: "#0ea5e9", descricao: "A maior parte do ganho em expectativa de vida veio de PREVENÇÃO em massa — água tratada e imunização — antes mesmo dos antibióticos existirem.", exemplos: ["Rede de esgoto", "Vacina da varíola", "Vacina do sarampo"], fotoUrl: especiesImg },
      { id: "antibioticos", rotulo: "Antibióticos e medicina moderna", emoji: "💊", percentual: 40, cor: "#10b981", descricao: "Antibióticos e avanços médicos contribuíram significativamente, sobretudo reduzindo mortes por infecções bacterianas que antes eram fatais.", exemplos: ["Penicilina", "Cirurgias seguras", "Cuidados intensivos"], fotoUrl: microorgImg },
    ],
    falaFinal:
      "Prevenção em massa salvou mais vidas historicamente do que qualquer remédio isolado — mas os dois juntos dobraram nossa expectativa de vida.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Departamento 2 sobre tecnologia e saúde. 3 perguntas para receber sua Certificação de Historiador da Saúde Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: microorgImg,
    selo: { nome: "Certificação · Historiador da Saúde Júnior", subtitulo: "Departamento 2 · Tecnologia e Qualidade de Vida", emoji: "💉", cor: "from-emerald-500 to-teal-700" },
    perguntas: [
      { id: "q1", pergunta: "A primeira vacina da história foi criada contra qual doença?", fotoUrl: especiesImg,
        opcoes: [
          { id: "a", texto: "Varíola, por Edward Jenner em 1796", correta: true },
          { id: "b", texto: "Gripe, por Alexander Fleming em 1928" },
        ],
        feedbackAcerto: "Correto. Jenner criou a vacina da varíola em 1796 usando o vírus bovino mais fraco.",
        feedbackErro: "Fleming descobriu a PENICILINA (antibiótico), não vacina. A primeira vacina foi de Jenner contra a VARÍOLA." },
      { id: "q2", pergunta: "Por que antibióticos NÃO tratam gripe comum?", fotoUrl: microorgImg,
        opcoes: [
          { id: "a", texto: "Porque a gripe é causada por vírus, e antibióticos só agem contra bactérias", correta: true },
          { id: "b", texto: "Porque a gripe não tem cura de nenhum tipo" },
        ],
        feedbackAcerto: "Exato. Antibiótico é específico contra bactérias — vírus exigem outra abordagem.",
        feedbackErro: "A gripe é causada por VÍRUS, e antibiótico só age em BACTÉRIAS. Por isso não funciona." },
      { id: "q3", pergunta: "Qual doença foi oficialmente ERRADICADA do planeta em 1980?", fotoUrl: especiesImg,
        opcoes: [
          { id: "a", texto: "Varíola", correta: true },
          { id: "b", texto: "Gripe" },
        ],
        feedbackAcerto: "Correto. A varíola é a única doença humana totalmente erradicada até hoje.",
        feedbackErro: "A gripe ainda circula. A doença ERRADICADA em 1980 foi a VARÍOLA." },
    ],
    falaFinal:
      "Selo conquistado. Você entendeu como o conhecimento sobre microrganismos transformou a expectativa de vida humana.",
  },
};
