import type { AulaGeoV1 } from "../../types";
import { url as cerebroImg } from "@/assets/ciencias-8ano/u2/cerebro-neuronios.jpg.asset.json";
import { url as hormonalImg } from "@/assets/ciencias-8ano/u2/sistema-hormonal.jpg.asset.json";
import { url as circulatorioImg } from "@/assets/ciencias-7ano/u3-a1/sistema-circulatorio.jpg.asset.json";
import { url as neuroniosImg } from "@/assets/ciencias-8ano/u2/neuronios-sinapses.jpg.asset.json";
import { url as glandulasImg } from "@/assets/ciencias-8ano/u2/glandulas-endocrinas.jpg.asset.json";
import { url as arcoReflexoImg } from "@/assets/ciencias-8ano/u2/arco-reflexo-medula.jpg.asset.json";
import { url as adolescentesImg } from "@/assets/ciencias-8ano/u2/adolescentes-puberdade.jpg.asset.json";

/**
 * Ciências · 8º Ano · U2 · A01 — "Centro Biomédico Virtual"
 * Integração dos sistemas de controle: nervoso, endócrino e reprodutor.
 * Puberdade, saúde física e emocional.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-centro-biomedico",
  titulo: "Centro Biomédico Virtual",
  iconeTrilha: "🧠",
  recompensa: { xp: 140, moedas: 55, medalha: "Fisiologista Júnior" },
  bncc: ["EF08CI08", "EF08CI09", "EF08CI10"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Painel biomédico interativo. Toque para iniciar.",
    mapaUrl: cerebroImg,
    imagemDestaqueUrl: hormonalImg,
    aurora:
      "Setor 2: Centro Biomédico. Sua missão: entender como o corpo se coordena — impulsos nervosos (milissegundos) e hormônios (minutos ou horas).",
    falaFinal:
      "Dois sistemas de comunicação trabalhando juntos: rápido (nervoso) e lento (endócrino).",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Problema: você encosta a mão em uma superfície QUENTE. O que puxa a mão em fração de segundo?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: arcoReflexoImg,
    opcoes: [
      { id: "hormonio", titulo: "Um hormônio no sangue", subtitulo: "avisa o músculo", emoji: "💧", cor: "from-slate-500 to-slate-700", fotoUrl: glandulasImg },
      { id: "reflexo", titulo: "Arco reflexo medular", subtitulo: "sinal vai à medula e volta ao músculo", emoji: "⚡", cor: "from-emerald-500 to-teal-700", fotoUrl: arcoReflexoImg },
      { id: "vontade", titulo: "Sua consciência pensou rápido", subtitulo: "cérebro decidiu", emoji: "🤔", cor: "from-red-500 to-rose-700", fotoUrl: cerebroImg },
    ],
    respostaCerta: "reflexo",
    feedbackAcerto:
      "Correto. O arco reflexo NÃO passa pelo cérebro — vai só até a MEDULA e volta. Por isso é tão rápido (< 100 ms).",
    feedbackErro:
      "Hormônio é lento demais. Sua consciência só percebe DEPOIS. Quem puxa a mão é o arco reflexo medular.",
    falaFinal:
      "O sistema nervoso tem atalhos automáticos para proteger o corpo.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da fisiologia integrada.",
    instrucao: "Vocabulário do corpo integrado",
    cadernos: [
      { id: "neuronio", capa: "NEURÔNIO", emoji: "⚡", cor: "from-sky-500 to-cyan-700", conteudo: "Célula do sistema nervoso especializada em transmitir impulsos elétricos. Tem dendritos (recebem), corpo celular e axônio (envia).", exemplo: "Ex.: ~86 bilhões no cérebro humano.", fotoUrl: neuroniosImg },
      { id: "sinapse", capa: "SINAPSE", emoji: "🔌", cor: "from-indigo-500 to-purple-700", conteudo: "Ponto de comunicação entre dois neurônios. Usa neurotransmissores (dopamina, serotonina).", exemplo: "Ex.: aprendizagem cria novas sinapses.", fotoUrl: neuroniosImg },
      { id: "hormonio", capa: "HORMÔNIO", emoji: "💧", cor: "from-pink-500 to-rose-700", conteudo: "Mensageiro químico produzido por glândulas endócrinas. Viaja pelo sangue e age em órgãos-alvo.", exemplo: "Ex.: insulina controla açúcar; adrenalina prepara para lutar/fugir.", fotoUrl: glandulasImg },
      { id: "puberdade", capa: "PUBERDADE", emoji: "🌱", cor: "from-fuchsia-500 to-pink-700", conteudo: "Fase de maturação sexual: hipófise libera hormônios que ativam testículos (testosterona) e ovários (estrogênio).", exemplo: "Ex.: entre 9-14 anos, com grande variação individual.", fotoUrl: adolescentesImg },
      { id: "homeostase", capa: "HOMEOSTASE", emoji: "⚖️", cor: "from-emerald-500 to-teal-700", conteudo: "Manutenção do EQUILÍBRIO interno (temperatura, açúcar, pH) apesar das variações externas.", exemplo: "Ex.: você sua no calor e treme no frio.", fotoUrl: circulatorioImg },
    ],
    falaFinal:
      "Neurônio, sinapse, hormônio, puberdade, homeostase. Cinco chaves da fisiologia.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Cérebro humano. Toque nas regiões.",
    instrucao: "Toque nas regiões",
    mapaUrl: cerebroImg,
    pontos: [
      { id: "cortex", x: 45, y: 30, emoji: "🧠", cor: "from-indigo-500 to-purple-700", titulo: "Córtex cerebral", texto: "Camada externa. Responsável por pensamento consciente, linguagem, decisão e memória.", fotoUrl: cerebroImg },
      { id: "cerebelo", x: 78, y: 68, emoji: "🎯", cor: "from-emerald-500 to-teal-700", titulo: "Cerebelo", texto: "Coordena movimentos finos, equilíbrio e postura. Ativa quando você anda de bicicleta.", fotoUrl: cerebroImg },
      { id: "tronco", x: 55, y: 80, emoji: "❤️", cor: "from-red-500 to-rose-700", titulo: "Tronco encefálico", texto: "Controla funções vitais automáticas: respiração, batimentos, digestão.", fotoUrl: cerebroImg },
      { id: "hipofise", x: 40, y: 55, emoji: "🎛️", cor: "from-amber-500 to-orange-700", titulo: "Hipófise", texto: "Glândula-mestre. Controla outras glândulas (tireoide, suprarrenais, gônadas).", fotoUrl: glandulasImg },
    ],
    falaFinal:
      "Cada região tem função específica — e trabalham em rede.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual sistema RESPONDE MAIS RÁPIDO a um estímulo?", fotoUrl: neuroniosImg,
        cards: [
          { id: "a", emoji: "⚡", titulo: "Sistema nervoso (milissegundos)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "💧", titulo: "Sistema endócrino (minutos)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🫁", titulo: "Sistema respiratório", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Impulso nervoso viaja a até 120 m/s. Hormônio precisa circular pelo sangue.",
        feedbackErro: "Nervoso = ELÉTRICO (rápido). Endócrino = QUÍMICO pelo sangue (lento)." },
      { id: "q2", pergunta: "Qual hormônio controla o AÇÚCAR no sangue?", fotoUrl: glandulasImg,
        cards: [
          { id: "a", emoji: "💉", titulo: "Insulina (pâncreas)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎯", titulo: "Adrenalina", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌙", titulo: "Melatonina", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Insulina baixa o açúcar; glucagon (também do pâncreas) sobe.",
        feedbackErro: "Adrenalina = luta/fuga. Melatonina = sono. Açúcar = INSULINA." },
      { id: "q3", pergunta: "O que ATIVA a puberdade?", fotoUrl: adolescentesImg,
        cards: [
          { id: "a", emoji: "🎛️", titulo: "Hormônios da hipófise agindo em testículos/ovários", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🍎", titulo: "Alimentação sozinha", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🏃", titulo: "Exercício físico", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Hipófise → FSH/LH → gônadas → testosterona/estrogênio.",
        feedbackErro: "Alimentação e exercício ajudam a saúde geral, mas quem DISPARA é o eixo hipófise-gônadas." },
    ],
    falaFinal:
      "Rápido = nervoso. Lento = endócrino. Puberdade = eixo hipófise-gônadas.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois sistemas de comunicação no corpo: NERVOSO (elétrico) e ENDÓCRINO (químico). Toque nos interruptores.",
    instrucao: "Toque nos interruptores",
    mapaUrl: cerebroImg,
    camadas: [
      { id: "nervoso", rotulo: "Sistema Nervoso", emoji: "⚡", cor: "from-indigo-500 to-purple-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Cérebro, medula e nervos. Impulso elétrico. Resposta em milissegundos. Ex.: puxar a mão do fogo.", fotoUrl: arcoReflexoImg },
      { id: "endocrino", rotulo: "Sistema Endócrino", emoji: "💧", cor: "from-pink-500 to-rose-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Glândulas (hipófise, tireoide, pâncreas, suprarrenais, gônadas). Hormônio no sangue. Resposta em minutos a horas. Ex.: puberdade.", fotoUrl: glandulasImg },
    ],
    falaFinal:
      "Os dois se COMPLEMENTAM. Nervoso decide agora; endócrino ajusta o longo prazo.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene o CAMINHO DE UM ARCO REFLEXO — do estímulo à reação.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ao encostar em algo quente:",
    paradas: [
      { id: "receptor", emoji: "👆", rotulo: "1. Receptor na pele", descricao: "Detecta o calor.", fotoUrl: arcoReflexoImg },
      { id: "nervo_sens", emoji: "➡️", rotulo: "2. Nervo sensitivo", descricao: "Leva o sinal à medula.", fotoUrl: arcoReflexoImg },
      { id: "medula", emoji: "🧬", rotulo: "3. Medula espinhal", descricao: "Faz a conexão (sem passar pelo cérebro).", fotoUrl: arcoReflexoImg },
      { id: "nervo_mot", emoji: "⬅️", rotulo: "4. Nervo motor", descricao: "Leva o comando ao músculo.", fotoUrl: arcoReflexoImg },
      { id: "musculo", emoji: "💪", rotulo: "5. Músculo contrai", descricao: "Puxa a mão.", fotoUrl: arcoReflexoImg },
    ],
    ordemCerta: ["receptor", "nervo_sens", "medula", "nervo_mot", "musculo"],
    feedbackAcerto:
      "Perfeito. Todo o arco reflexo dura menos de 100 ms.",
    feedbackErro:
      "Sequência: receptor → nervo sensitivo → medula → nervo motor → músculo. Cérebro só é AVISADO depois.",
    falaFinal:
      "Por isso o arco reflexo é uma resposta de PROTEÇÃO — não espera decisão consciente.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Estudo de caso biomédico.",
    tituloLivro: "📓 Estudo de Caso · Puberdade e Saúde Integral",
    subtitulo: "Como hormônios remodelam o corpo do adolescente",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: entre 9 e 14 anos, o corpo passa por transformações rápidas: crescimento acelerado, mudança de voz, pelos, maturação sexual. Quem comanda tudo isso?", chaves: ["maturação sexual"], definicoes: { "maturação sexual": "Desenvolvimento dos órgãos reprodutores." }, fotoUrl: adolescentesImg },
      { id: "p2", texto: "MECANISMO: a HIPÓFISE (no cérebro) libera FSH e LH. Esses hormônios chegam pelo sangue aos TESTÍCULOS (que produzem testosterona) ou aos OVÁRIOS (que produzem estrogênio). Testosterona e estrogênio geram as mudanças físicas.", chaves: ["hipófise", "testosterona", "estrogênio"], definicoes: { hipófise: "Glândula-mestre do sistema endócrino.", testosterona: "Hormônio sexual masculino.", estrogênio: "Hormônio sexual feminino." }, fotoUrl: glandulasImg },
      { id: "p3", texto: "SAÚDE INTEGRAL: hormônios influenciam também HUMOR, SONO e ENERGIA. Por isso a adolescência exige atenção à saúde EMOCIONAL (conversar, procurar apoio) e FÍSICA (sono de qualidade, alimentação, atividade). Prevenção de IST e uso de preservativo são fundamentais na vida sexual.", chaves: ["IST"], definicoes: { IST: "Infecções sexualmente transmissíveis." }, fotoUrl: circulatorioImg },
    ],
    falaFinal:
      "Corpo, mente e relações caminham juntos. Cuidar dos três é ser saudável.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio: nervoso, endócrino ou ambos?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "nervoso", emoji: "⚡", rotulo: "Nervoso" },
      { id: "endocrino", emoji: "💧", rotulo: "Endócrino" },
      { id: "ambos", emoji: "🔗", rotulo: "Ambos" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Puxar a mão do fogo", emoji: "🔥", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Menos de 100 ms", emoji: "⚡", cor: "from-amber-500 to-yellow-700" }, contexto: "Reação super-rápida.", pecaCertaId: "nervoso", fotoUrl: arcoReflexoImg, feedbackAcerto: "Nervoso. Arco reflexo elétrico.", feedbackErro: "Rápido demais para hormônio. Só o nervoso responde em ms." },
      { id: "r2", municipioA: { nome: "Puberdade", emoji: "🌱", cor: "from-fuchsia-500 to-pink-700" }, municipioB: { nome: "Testosterona/estrogênio", emoji: "💧", cor: "from-pink-500 to-rose-700" }, contexto: "Transformação lenta ao longo de anos.", pecaCertaId: "endocrino", fotoUrl: adolescentesImg, feedbackAcerto: "Endócrino. Hormônios agem em anos.", feedbackErro: "Puberdade é hormonal — não elétrica." },
      { id: "r3", municipioA: { nome: "Susto", emoji: "😱", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Adrenalina + coração dispara", emoji: "❤️", cor: "from-rose-500 to-pink-700" }, contexto: "Cérebro percebe → suprarrenal libera hormônio.", pecaCertaId: "ambos", fotoUrl: glandulasImg, feedbackAcerto: "Ambos. Nervoso dispara; endócrino sustenta o alerta.", feedbackErro: "Cérebro percebe (nervoso) E manda liberar adrenalina (endócrino). AMBOS." },
      { id: "r4", municipioA: { nome: "Digestão do almoço", emoji: "🍽️", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Insulina do pâncreas", emoji: "💉", cor: "from-emerald-500 to-teal-700" }, contexto: "Açúcar sobe → pâncreas libera insulina.", pecaCertaId: "endocrino", fotoUrl: glandulasImg, feedbackAcerto: "Endócrino — insulina é hormônio.", feedbackErro: "Insulina no sangue = endócrino." },
    ],
    falaFinal:
      "Você diferencia comunicação elétrica e química no corpo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "A coordenação do corpo funciona em duas velocidades: RÁPIDA (nervoso) e LENTA (endócrino).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: neuroniosImg,
    fatias: [
      { id: "rapido", rotulo: "Rápido (Nervoso)", emoji: "⚡", percentual: 55, cor: "#6366f1", descricao: "Sinal elétrico. Milissegundos. Ideal para reação imediata e movimento.", exemplos: ["Reflexo", "Movimento voluntário", "Sentidos"], fotoUrl: neuroniosImg },
      { id: "lento", rotulo: "Lento (Endócrino)", emoji: "💧", percentual: 45, cor: "#ec4899", descricao: "Hormônios no sangue. Minutos a anos. Ideal para crescimento e metabolismo.", exemplos: ["Insulina", "Puberdade", "Homeostase"], fotoUrl: glandulasImg },
    ],
    falaFinal:
      "Corpo saudável = os dois sistemas em equilíbrio. Fim do Setor 2.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Setor 2. Responda 3 perguntas para sua Certificação de Fisiologista Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: neuroniosImg,
    perguntas: [
      { id: "q1", pergunta: "Qual órgão é a GLÂNDULA-MESTRE do sistema endócrino?", fotoUrl: glandulasImg,
        opcoes: [
          { id: "a", texto: "Hipófise (comanda tireoide, suprarrenais e gônadas)", correta: true },
          { id: "b", texto: "Pâncreas" },
        ],
        feedbackAcerto: "Sim. Hipófise fica na base do cérebro e é a chefe do sistema.",
        feedbackErro: "Pâncreas é importante (insulina), mas quem COMANDA as outras é a HIPÓFISE." },
      { id: "q2", pergunta: "O ARCO REFLEXO passa pelo cérebro?", fotoUrl: arcoReflexoImg,
        opcoes: [
          { id: "a", texto: "Não. Vai só até a medula e volta. Cérebro é avisado depois.", correta: true },
          { id: "b", texto: "Sim. O cérebro decide puxar a mão." },
        ],
        feedbackAcerto: "Correto. Por isso é tão rápido — atalho medular.",
        feedbackErro: "Se passasse pelo cérebro seria lento demais. Vai só na medula." },
      { id: "q3", pergunta: "Na PUBERDADE, quem produz TESTOSTERONA?", fotoUrl: adolescentesImg,
        opcoes: [
          { id: "a", texto: "Testículos, estimulados pela hipófise", correta: true },
          { id: "b", texto: "Estômago" },
        ],
        feedbackAcerto: "Sim. Hipófise → LH → testículos → testosterona.",
        feedbackErro: "Estômago digere alimento. Testosterona vem dos TESTÍCULOS." },
    ],
    selo: { nome: "Certificação · Fisiologista Júnior", subtitulo: "Setor 2 · Corpo Humano Integrado", emoji: "🧠", cor: "from-pink-500 to-rose-700" },
    falaFinal:
      "Setor 2 CONCLUÍDO. Próximo: Laboratório de Física.",
  },
};
