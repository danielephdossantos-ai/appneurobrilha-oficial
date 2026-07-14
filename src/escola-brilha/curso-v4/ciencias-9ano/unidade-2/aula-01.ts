import type { AulaGeoV1 } from "../../types";
import cerebroImg from "@/assets/ciencias-8ano/u2/cerebro-neuronios.jpg";
import neuroniosImg from "@/assets/ciencias-8ano/u2/neuronios-sinapses.jpg";
import hormonalImg from "@/assets/ciencias-8ano/u2/sistema-hormonal.jpg";
import glandulasImg from "@/assets/ciencias-8ano/u2/glandulas-endocrinas.jpg";
import puberdadeImg from "@/assets/ciencias-8ano/u2/adolescentes-puberdade.jpg";
import dnaImg from "@/assets/ciencias-8ano/u1/dna-helice.jpg";

/**
 * Ciências · 9º Ano · U2 · A01 — "Centro Biomédico"
 * Integração dos sistemas, imunidade, vacinas, doenças e biotecnologia.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-02-centro-biomedico",
  titulo: "Centro Biomédico",
  iconeTrilha: "🫀",
  recompensa: { xp: 160, moedas: 65, medalha: "Biomédico Júnior" },
  bncc: ["EF09CI13", "EF09CI14"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada do Centro Biomédico. Toque para iniciar.",
    mapaUrl: cerebroImg,
    imagemDestaqueUrl: hormonalImg,
    aurora:
      "Instituto 2: Centro Biomédico. Aqui estudamos como sistemas do corpo se integram e como o organismo se defende de doenças usando IMUNIDADE e VACINAS.",
    falaFinal: "O corpo humano é uma rede. Nenhum sistema trabalha sozinho.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Problema: por que a vacina protege sem causar a doença?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: hormonalImg,
    opcoes: [
      { id: "treino", titulo: "Treina o sistema imune", subtitulo: "com pedaço/versão fraca do micróbio", emoji: "🛡️", cor: "from-emerald-500 to-teal-700" },
      { id: "mata", titulo: "Mata os micróbios direto", subtitulo: "como antibiótico", emoji: "💊", cor: "from-slate-500 to-slate-700" },
      { id: "energia", titulo: "Dá mais energia ao corpo", subtitulo: "como vitamina", emoji: "⚡", cor: "from-red-500 to-rose-700" },
    ],
    respostaCerta: "treino",
    feedbackAcerto:
      "Correto. A vacina apresenta o antígeno ao sistema imune, que passa a produzir anticorpos e MEMÓRIA.",
    feedbackErro:
      "A vacina não mata micróbios — ela TREINA o corpo a reconhecê-los antes da infecção real.",
    falaFinal: "Vacina = treinamento do sistema imune. Prevenção, não cura.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da biomedicina.",
    instrucao: "Vocabulário do Centro",
    cadernos: [
      { id: "imu", capa: "IMUNIDADE", emoji: "🛡️", cor: "from-emerald-500 to-teal-700", conteudo: "Capacidade do corpo de reconhecer e combater invasores. Envolve linfócitos T e B, anticorpos e macrófagos.", exemplo: "Ex.: febre é sinal de que o corpo está reagindo.", fotoUrl: hormonalImg },
      { id: "vac", capa: "VACINA", emoji: "💉", cor: "from-sky-500 to-cyan-700", conteudo: "Preparado biológico com antígenos enfraquecidos ou pedaços deles. Ensina o corpo a criar defesa antes da infecção real.", exemplo: "Ex.: vacinas contra sarampo, HPV, COVID-19.", fotoUrl: hormonalImg },
      { id: "inf", capa: "DOENÇA INFECCIOSA", emoji: "🦠", cor: "from-red-500 to-rose-700", conteudo: "Causada por micróbios (vírus, bactérias, fungos, protozoários). Transmite entre pessoas.", exemplo: "Ex.: gripe, tuberculose, dengue, malária.", fotoUrl: dnaImg },
      { id: "cro", capa: "DOENÇA CRÔNICA", emoji: "⏳", cor: "from-amber-500 to-orange-700", conteudo: "Longa duração, geralmente sem cura, controlável. Ligada a hábitos e genética.", exemplo: "Ex.: diabetes, hipertensão, asma.", fotoUrl: puberdadeImg },
      { id: "bio", capa: "BIOTECNOLOGIA", emoji: "🧫", cor: "from-fuchsia-500 to-pink-700", conteudo: "Uso de seres vivos ou moléculas biológicas para gerar produtos (remédios, alimentos, exames).", exemplo: "Ex.: insulina produzida por bactérias modificadas.", fotoUrl: neuroniosImg },
    ],
    falaFinal: "Imunidade, vacina, infecciosa, crônica, biotecnologia. Base da saúde moderna.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Sistemas integrados. Toque em cada eixo.",
    instrucao: "Toque nos pontos",
    mapaUrl: hormonalImg,
    pontos: [
      { id: "nerv", x: 30, y: 25, emoji: "🧠", cor: "from-indigo-500 to-purple-700", titulo: "Nervoso", texto: "Cérebro + medula + nervos. Recebe estímulos e comanda respostas em milissegundos.", fotoUrl: cerebroImg },
      { id: "endo", x: 70, y: 30, emoji: "🧪", cor: "from-amber-500 to-orange-700", titulo: "Endócrino", texto: "Glândulas liberam HORMÔNIOS no sangue. Resposta mais lenta e duradoura.", fotoUrl: glandulasImg },
      { id: "imun", x: 40, y: 65, emoji: "🛡️", cor: "from-emerald-500 to-teal-700", titulo: "Imunológico", texto: "Linfócitos, macrófagos, anticorpos. Defende de vírus e bactérias.", fotoUrl: hormonalImg },
      { id: "cir", x: 70, y: 70, emoji: "❤️", cor: "from-red-500 to-rose-700", titulo: "Circulatório", texto: "Sangue leva oxigênio, hormônios e células de defesa a todos os tecidos.", fotoUrl: hormonalImg },
    ],
    falaFinal: "Nervoso + endócrino + imune + circulatório trabalham juntos o tempo todo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que uma vacina contém?", fotoUrl: hormonalImg,
        cards: [
          { id: "a", emoji: "🦠", titulo: "Antígeno (parte ou versão fraca do micróbio)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💊", titulo: "Antibiótico puro", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⚡", titulo: "Só vitaminas", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. O antígeno treina o sistema imune sem causar a doença.",
        feedbackErro: "Vacina contém ANTÍGENO (não antibiótico nem vitamina)." },
      { id: "q2", pergunta: "Qual delas é uma doença CRÔNICA?", fotoUrl: puberdadeImg,
        cards: [
          { id: "a", emoji: "🩸", titulo: "Diabetes", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🦠", titulo: "Gripe", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🦟", titulo: "Dengue", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Diabetes é crônica: dura anos, é controlável, não infecciosa.",
        feedbackErro: "Gripe e dengue são INFECCIOSAS. Diabetes é CRÔNICA." },
      { id: "q3", pergunta: "Um exemplo de BIOTECNOLOGIA no cotidiano é:", fotoUrl: neuroniosImg,
        cards: [
          { id: "a", emoji: "💉", titulo: "Insulina feita por bactérias modificadas", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔩", titulo: "Um parafuso de metal", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "📱", titulo: "Uma tela de celular", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Bactérias com gene humano produzem insulina desde 1982.",
        feedbackErro: "Biotecnologia usa SERES VIVOS. Insulina de bactéria é o exemplo clássico." },
    ],
    falaFinal: "Vacina, doenças crônicas e biotecnologia — domínio ok.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Compare IMUNIDADE INATA (rápida) e IMUNIDADE ADAPTATIVA (com memória).",
    instrucao: "Toque nos interruptores",
    mapaUrl: hormonalImg,
    camadas: [
      { id: "inata", rotulo: "Inata", emoji: "🚨", cor: "from-red-500 to-rose-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Rápida (minutos). Pele, muco, febre, macrófagos. Igual para todo invasor.", fotoUrl: hormonalImg },
      { id: "adapt", rotulo: "Adaptativa", emoji: "🧠", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Lenta na 1ª vez (dias), com MEMÓRIA. Linfócitos B (anticorpos) e T. É onde a vacina age.", fotoUrl: hormonalImg },
    ],
    falaFinal: "Inata reage; adaptativa aprende e lembra. Vacina fortalece a adaptativa.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene a resposta do corpo após a vacina.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Do dia 0 até a proteção:",
    paradas: [
      { id: "d0", emoji: "💉", rotulo: "1. Dia 0", descricao: "Aplicação. Antígeno entra no braço.", fotoUrl: hormonalImg },
      { id: "d3", emoji: "🔍", rotulo: "2. Dias 1-3", descricao: "Macrófagos apresentam o antígeno aos linfócitos.", fotoUrl: hormonalImg },
      { id: "d7", emoji: "🧬", rotulo: "3. Dias 7-14", descricao: "Linfócitos B produzem anticorpos específicos.", fotoUrl: dnaImg },
      { id: "d30", emoji: "🧠", rotulo: "4. Depois", descricao: "Restam células de MEMÓRIA prontas para o futuro.", fotoUrl: neuroniosImg },
    ],
    ordemCerta: ["d0", "d3", "d7", "d30"],
    feedbackAcerto: "Perfeito. Resposta primária leva 7-14 dias; memória dura anos.",
    feedbackErro: "Ordem: aplicação → reconhecimento → anticorpos → memória.",
    falaFinal: "Por isso a proteção não é imediata — mas dura.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Centro.",
    tituloLivro: "📓 Relatório · Saúde Integral",
    subtitulo: "Como o corpo se defende e como a ciência o ajuda",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: existem milhares de micróbios ao redor. Por que não adoecemos o tempo todo? Porque temos um SISTEMA IMUNE que trabalha 24 horas por dia.", chaves: ["sistema imune"], definicoes: { "sistema imune": "Rede de células e moléculas que defende o organismo." }, fotoUrl: hormonalImg },
      { id: "p2", texto: "OBSERVAÇÃO: as VACINAS treinam esse sistema em segurança. Desde a de Jenner (varíola, 1796) até as de mRNA (COVID-19, 2020), elas já salvaram bilhões de vidas.", chaves: ["mRNA"], definicoes: { mRNA: "Molécula que carrega a receita da proteína a ser produzida." }, fotoUrl: dnaImg },
      { id: "p3", texto: "CONCLUSÃO: saúde não é só ausência de doença — é integração entre corpo (biologia), ambiente (saneamento, alimentação) e ciência (medicamentos, vacinas, biotecnologia).", chaves: ["biotecnologia"], definicoes: { biotecnologia: "Uso de seres vivos para gerar produtos úteis." }, fotoUrl: puberdadeImg },
    ],
    falaFinal: "Corpo + ambiente + ciência = saúde integral.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Classifique: infecciosa, crônica ou biotecnologia.",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "inf", emoji: "🦠", rotulo: "Infecciosa" },
      { id: "cro", emoji: "⏳", rotulo: "Crônica" },
      { id: "bio", emoji: "🧫", rotulo: "Biotecnologia" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Tuberculose", emoji: "🫁", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Bactéria transmitida pelo ar", emoji: "💨", cor: "from-slate-500 to-slate-700" }, contexto: "Micróbio contagioso.", pecaCertaId: "inf", fotoUrl: hormonalImg, feedbackAcerto: "Sim. Causada pelo Mycobacterium tuberculosis.", feedbackErro: "Micróbio contagioso → INFECCIOSA." },
      { id: "r2", municipioA: { nome: "Hipertensão", emoji: "🩸", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Pressão alta que dura anos", emoji: "⏳", cor: "from-slate-500 to-slate-700" }, contexto: "Não é contagiosa; é controlável.", pecaCertaId: "cro", fotoUrl: puberdadeImg, feedbackAcerto: "Correto. Doença crônica.", feedbackErro: "Não pega de ninguém. Dura anos → CRÔNICA." },
      { id: "r3", municipioA: { nome: "Insulina de bactéria", emoji: "💉", cor: "from-fuchsia-500 to-pink-700" }, municipioB: { nome: "Gene humano em E. coli", emoji: "🧬", cor: "from-emerald-500 to-teal-700" }, contexto: "Produção industrial.", pecaCertaId: "bio", fotoUrl: dnaImg, feedbackAcerto: "Sim — biotecnologia clássica desde 1982.", feedbackErro: "Ser vivo modificado produzindo remédio → BIOTECNOLOGIA." },
      { id: "r4", municipioA: { nome: "Dengue", emoji: "🦟", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Vírus transmitido pelo mosquito", emoji: "🌡️", cor: "from-slate-500 to-slate-700" }, contexto: "Vetor Aedes aegypti.", pecaCertaId: "inf", fotoUrl: hormonalImg, feedbackAcerto: "Correto. Vírus + vetor → infecciosa.", feedbackErro: "Vírus + transmissão → INFECCIOSA." },
    ],
    falaFinal: "Você já distingue os três grupos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A saúde depende de PREVENÇÃO + TRATAMENTO + PESQUISA.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: hormonalImg,
    fatias: [
      { id: "prev", rotulo: "Prevenção", emoji: "🛡️", percentual: 45, cor: "#10b981", descricao: "Vacinas, saneamento, alimentação, atividade física.", exemplos: ["Vacina", "Higiene", "Alimentação"], fotoUrl: hormonalImg },
      { id: "trat", rotulo: "Tratamento", emoji: "💊", percentual: 30, cor: "#dc2626", descricao: "Medicamentos, cirurgias, terapias — quando a doença chega.", exemplos: ["Antibiótico", "Cirurgia", "Fisioterapia"], fotoUrl: puberdadeImg },
    ],
    falaFinal: "Prevenir, tratar e pesquisar. Fim do Instituto 2.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para receber a Certificação de Biomédico Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: hormonalImg,
    perguntas: [
      { id: "q1", pergunta: "Por que a vacina protege sem causar a doença?", fotoUrl: hormonalImg,
        opcoes: [
          { id: "a", texto: "Treina o sistema imune com antígenos, sem infecção real", correta: true },
          { id: "b", texto: "Mata todos os micróbios do corpo instantaneamente" },
        ],
        feedbackAcerto: "Correto. Antígeno → linfócitos → anticorpos → memória.",
        feedbackErro: "Vacina TREINA (não mata micróbios como antibiótico)." },
      { id: "q2", pergunta: "Qual grupo tem doenças CRÔNICAS?", fotoUrl: puberdadeImg,
        opcoes: [
          { id: "a", texto: "Diabetes, hipertensão, asma", correta: true },
          { id: "b", texto: "Gripe, dengue, catapora" },
        ],
        feedbackAcerto: "Sim. Crônicas duram anos e não são contagiosas.",
        feedbackErro: "Gripe/dengue/catapora são INFECCIOSAS. As crônicas são diabetes, hipertensão, asma." },
      { id: "q3", pergunta: "Um exemplo de BIOTECNOLOGIA aplicada à saúde é:", fotoUrl: dnaImg,
        opcoes: [
          { id: "a", texto: "Insulina humana produzida por bactérias modificadas", correta: true },
          { id: "b", texto: "Uma prótese de metal fabricada em torno mecânico" },
        ],
        feedbackAcerto: "Perfeito. Biotecnologia usa SERES VIVOS.",
        feedbackErro: "Prótese de metal é engenharia. Insulina de bactéria é BIOTECNOLOGIA." },
    ],
    selo: { nome: "Certificação · Biomédico Júnior", subtitulo: "Instituto 2 · Centro Biomédico", emoji: "🫀", cor: "from-red-500 to-rose-700" },
    falaFinal: "Instituto 2 CONCLUÍDO. Próximo: Laboratório de Química Aplicada.",
  },
};
