import type { AulaGeoV1 } from "../../types";
import { aula01 as base } from "./aula-01-estado-laico";
// A aula-base é validada pelo discriminador `tipo`; este alias mantém os
// campos específicos de cada cena disponíveis durante a composição.
const b = base as any;

/** EF08ER06 — práticas, projetos e políticas que promovem liberdade de consciência. */
export const aula02: AulaGeoV1 = {
  ...base,
  slug: "aula-02-liberdade-politicas-publicas",
  titulo: "Liberdade de Consciência na Prática",
  iconeTrilha: "🕊️",
  bncc: ["EF08ER06"],
  duracaoMin: 24,
  cena01_motivacao: {
    ...b.cena01_motivacao,
    instrucao: "Observe como direitos precisam virar ações concretas.",
    aurora: "A liberdade de consciência, crença e convicção não fica só no papel. Ela depende de práticas escolares, projetos comunitários e políticas públicas que previnam discriminação, acolham vítimas e garantam tratamento igual a quem crê, muda de crença ou não crê.",
    falaFinal: "Vamos analisar quais ações realmente tornam essa liberdade possível.",
  },
  cena02_previsao: {
    ...b.cena02_previsao,
    aurora: "Uma regra escrita é importante, mas precisa funcionar no cotidiano.",
    pergunta: "Qual ação promove liberdade de consciência?",
    opcoes: [
      { id: "acolher", titulo: "Acolher denúncias e proteger direitos", subtitulo: "ação concreta e verificável", emoji: "🛡️", cor: "from-emerald-500 to-green-700" },
      { id: "obrigar", titulo: "Obrigar todos a participar de um rito", subtitulo: "viola a liberdade", emoji: "🚫", cor: "from-red-500 to-rose-700" },
      { id: "ignorar", titulo: "Ignorar casos de intolerância", subtitulo: "mantém o problema", emoji: "🙈", cor: "from-slate-400 to-gray-600" },
      { id: "favorecer", titulo: "Favorecer apenas a maioria", subtitulo: "nega igualdade", emoji: "⚠️", cor: "from-amber-500 to-orange-700" },
    ],
    respostaCerta: "acolher",
    feedbackAcerto: "Correto. Direitos precisam de prevenção, acolhimento e resposta responsável.",
    feedbackErro: "Promover liberdade exige proteger todas as convicções e agir contra discriminação.",
    falaFinal: "Agora vamos distinguir prática, projeto e política pública.",
  },
  cena03_vocabulario: {
    ...b.cena03_vocabulario,
    aurora: "Quatro conceitos para analisar ações reais.",
    instrucao: "Abra os quatro cadernos",
    cadernos: [
      { id: "pratica", capa: "Prática", emoji: "🤝", cor: "from-sky-500 to-blue-700", conteudo: "Ação cotidiana que respeita escolhas e impede constrangimentos por religião ou convicção.", exemplo: "A escola oferece alternativa a uma atividade de caráter religioso.", fotoUrl: b.cena03_vocabulario.cadernos[0].fotoUrl },
      { id: "projeto", capa: "Projeto", emoji: "🧩", cor: "from-purple-500 to-fuchsia-700", conteudo: "Conjunto planejado de ações, objetivos, responsáveis e avaliação.", exemplo: "Campanha escolar contra a intolerância religiosa, com escuta e acompanhamento.", fotoUrl: b.cena03_vocabulario.cadernos[1].fotoUrl },
      { id: "politica", capa: "Política pública", emoji: "🏛️", cor: "from-emerald-500 to-green-700", conteudo: "Ação permanente do poder público, com regras, serviços e recursos para garantir direitos coletivos.", exemplo: "Canal público de denúncia e atendimento a vítimas de discriminação religiosa.", fotoUrl: b.cena03_vocabulario.cadernos[2].fotoUrl },
      { id: "avaliacao", capa: "Avaliação", emoji: "🔎", cor: "from-amber-500 to-orange-700", conteudo: "Verificação de acesso, igualdade, participação, resultados e possíveis violações.", exemplo: "Comparar denúncias, respostas e prevenção antes e depois de um projeto.", fotoUrl: b.cena03_vocabulario.cadernos[0].fotoUrl },
    ],
    falaFinal: "Não basta dar um nome bonito: é preciso verificar efeito, acesso e respeito.",
  },
  cena04_leituraGuiada: {
    ...b.cena04_leituraGuiada,
    aurora: "Analise quatro ações e o direito que cada uma protege.",
    instrucao: "Toque em cada caso",
    pontos: [
      { ...b.cena04_leituraGuiada.pontos[0], id: "escola", titulo: "PROTOCOLO ESCOLAR", texto: "A escola registra agressões, acolhe a vítima, comunica responsáveis e aplica medidas educativas. Isso transforma o direito em procedimento." },
      { ...b.cena04_leituraGuiada.pontos[1], id: "formacao", titulo: "FORMAÇÃO E PREVENÇÃO", texto: "Profissionais aprendem a reconhecer intolerância, evitar estereótipos e respeitar estudantes religiosos e não religiosos." },
      { ...b.cena04_leituraGuiada.pontos[2], id: "canal", titulo: "CANAL DE DENÚNCIA", texto: "Um serviço acessível recebe relatos, orienta a pessoa afetada e encaminha o caso aos órgãos responsáveis." },
      { ...b.cena04_leituraGuiada.pontos[3], id: "participacao", titulo: "PARTICIPAÇÃO SOCIAL", texto: "Comunidades religiosas, filosofias de vida e pessoas sem religião ajudam a avaliar políticas sem que uma visão seja imposta às demais." },
    ],
    falaFinal: "Ações eficazes combinam prevenção, proteção, participação e avaliação.",
  },
  cena05_compreensao: {
    ...b.cena05_compreensao,
    aurora: "Use os critérios aprendidos.",
    perguntas: [
      { id: "q1", pergunta: "O que diferencia uma política pública de uma ação isolada?", fotoUrl: b.cena05_compreensao.perguntas[0].fotoUrl, cards: [
        { id: "c", emoji: "🏛️", titulo: "Continuidade, regras, serviço, recursos e avaliação", cor: "from-emerald-500 to-green-700" },
        { id: "a", emoji: "📣", titulo: "Somente uma frase de campanha", cor: "from-slate-400 to-gray-600" },
        { id: "b", emoji: "🚫", titulo: "Obrigação de seguir uma crença", cor: "from-red-500 to-rose-700" },
        { id: "d", emoji: "👤", titulo: "Preferência pessoal de uma autoridade", cor: "from-amber-500 to-orange-700" },
      ], correta: "c", feedbackAcerto: "Isso. Política pública precisa funcionar de modo contínuo e avaliável.", feedbackErro: "Procure continuidade, regras, acesso, serviço e avaliação." },
    ],
    falaFinal: "Você analisou a estrutura, não apenas a intenção.",
  },
  cena07_sequencia: {
    ...b.cena07_sequencia,
    aurora: "Organize a construção de uma ação protetiva.",
    pergunta: "Como transformar um problema em proteção efetiva?",
    paradas: [
      { id: "ouvir", emoji: "👂", rotulo: "1. OUVIR", descricao: "Identificar o problema com participação das pessoas afetadas." },
      { id: "planejar", emoji: "📝", rotulo: "2. PLANEJAR", descricao: "Definir objetivos, responsabilidades, recursos e canais acessíveis." },
      { id: "executar", emoji: "🛠️", rotulo: "3. EXECUTAR", descricao: "Colocar prevenção, acolhimento e encaminhamento em funcionamento." },
      { id: "avaliar", emoji: "🔎", rotulo: "4. AVALIAR", descricao: "Verificar resultados e obstáculos com dados e escuta." },
      { id: "corrigir", emoji: "🔄", rotulo: "5. APRIMORAR", descricao: "Corrigir falhas e manter a proteção ao longo do tempo." },
    ],
    ordemCerta: ["ouvir", "planejar", "executar", "avaliar", "corrigir"],
    feedbackAcerto: "Correto: ouvir, planejar, executar, avaliar e aprimorar.",
    feedbackErro: "Comece ouvindo o problema; depois planeje, execute, avalie e melhore.",
    falaFinal: "Direitos se fortalecem com participação e melhoria contínua.",
  },
  cena08_voceLe: {
    ...b.cena08_voceLe,
    tituloLivro: "Caderno de Direitos em Ação",
    subtitulo: "EF08ER06 — práticas, projetos e políticas públicas",
    paragrafos: [
      { id: "p1", texto: "Liberdade de consciência inclui ter religião, mudar de religião, não ter religião e formar outras convicções, sem coerção ou discriminação.", chaves: ["liberdade de consciência", "sem coerção"] },
      { id: "p2", texto: "Práticas e projetos promovem esse direito quando previnem intolerância, acolhem pessoas afetadas e garantem participação em igualdade.", chaves: ["previnem intolerância", "igualdade"] },
      { id: "p3", texto: "Políticas públicas precisam de continuidade, acesso, responsáveis, recursos e avaliação; anúncios sem execução não bastam.", chaves: ["continuidade", "avaliação"] },
      { id: "p4", texto: "Analisar uma ação significa perguntar quem participa, quem consegue acessar, quais resultados aparecem e o que ainda precisa ser corrigido.", chaves: ["quem participa", "resultados"] },
    ],
    falaFinal: "Agora aplique esses critérios a situações concretas.",
  },
  cena09_minijogo: {
    ...b.cena09_minijogo,
    aurora: "Associe cada situação à resposta mais adequada.",
    instrucao: "Escolha prevenção, proteção ou violação",
    pecas: [
      { id: "prevenir", emoji: "📘", rotulo: "PREVENÇÃO" },
      { id: "proteger", emoji: "🛡️", rotulo: "PROTEÇÃO" },
      { id: "violar", emoji: "🚫", rotulo: "VIOLAÇÃO" },
    ],
    rodadas: [
      { ...b.cena09_minijogo.rodadas[0], id: "r1", contexto: "Formação ensina profissionais a reconhecer e interromper intolerância.", pecaCertaId: "prevenir", feedbackAcerto: "Correto: formação é prevenção.", feedbackErro: "A ação acontece antes do dano: é prevenção." },
      { ...b.cena09_minijogo.rodadas[1], id: "r2", contexto: "Canal recebe a denúncia, acolhe e encaminha a pessoa afetada.", pecaCertaId: "proteger", feedbackAcerto: "Correto: acolhimento e encaminhamento protegem.", feedbackErro: "Aqui já existe um caso e a resposta protege a pessoa." },
      { ...b.cena09_minijogo.rodadas[2], id: "r3", contexto: "Uma escola obriga todos os estudantes a participar de um rito.", pecaCertaId: "violar", feedbackAcerto: "Correto: obrigação religiosa viola a liberdade.", feedbackErro: "Ninguém pode ser obrigado a participar de rito religioso." },
    ],
    falaFinal: "Você diferenciou prevenção, proteção e violação.",
  },
  cena10_revisao: {
    ...b.cena10_revisao,
    aurora: "Revise os dois pilares de uma ação eficaz.",
    fatias: [
      { id: "direito", rotulo: "GARANTIA DO DIREITO", emoji: "🕊️", percentual: 50, cor: "#0ea5e9", descricao: "Respeitar escolhas, impedir coerção e assegurar tratamento igual.", exemplos: ["Liberdade", "Igualdade", "Acolhimento"] },
      { id: "resultado", rotulo: "RESULTADO VERIFICÁVEL", emoji: "🔎", percentual: 50, cor: "#10b981", descricao: "Medir acesso, resposta, prevenção e correção de falhas.", exemplos: ["Dados", "Escuta", "Avaliação"] },
    ],
    falaFinal: "Boa intenção precisa virar direito garantido e resultado verificável.",
  },
  cena11_avaliacao: {
    ...b.cena11_avaliacao,
    aurora: "Avaliação final da EF08ER06.",
    perguntas: [
      { id: "a1", pergunta: "Qual projeto promove liberdade de consciência?", opcoes: [
        { id: "a", texto: "Obrigar uma prática religiosa", correta: false },
        { id: "b", texto: "Prevenir intolerância, acolher denúncias e avaliar resultados", correta: true },
        { id: "c", texto: "Silenciar pessoas sem religião", correta: false },
        { id: "d", texto: "Favorecer apenas a maioria", correta: false },
      ], feedbackAcerto: "Correto: prevenção, proteção e avaliação tornam o direito efetivo.", feedbackErro: "A resposta precisa proteger todas as crenças e convicções." },
      { id: "a2", pergunta: "Ao analisar uma política pública, deve-se verificar:", opcoes: [
        { id: "a", texto: "Somente o nome do programa", correta: false },
        { id: "b", texto: "A preferência da autoridade", correta: false },
        { id: "c", texto: "Acesso, participação, resultados e correção de falhas", correta: true },
        { id: "d", texto: "A religião majoritária", correta: false },
      ], feedbackAcerto: "Isso. Política real precisa ser acessível e avaliável.", feedbackErro: "Analise funcionamento e resultados, não apenas anúncio ou preferência." },
      { id: "a3", pergunta: "Liberdade de consciência protege:", opcoes: [
        { id: "a", texto: "Somente pessoas religiosas", correta: false },
        { id: "b", texto: "A obrigação de concordar", correta: false },
        { id: "c", texto: "Apenas religiões antigas", correta: false },
        { id: "d", texto: "Quem crê, muda de crença, não crê ou possui outras convicções", correta: true },
      ], feedbackAcerto: "Correto. O direito é de todas as pessoas.", feedbackErro: "A liberdade inclui crença, mudança, ausência de religião e outras convicções." },
    ],
    selo: { nome: "Analista de Direitos em Ação", subtitulo: "EF08ER06 concluída", emoji: "🕊️", cor: "from-emerald-400 to-sky-600" },
    falaFinal: "Você concluiu a análise de práticas, projetos e políticas públicas.",
  },
  recompensa: { xp: 400, moedas: 280, medalha: "Analista de Direitos em Ação" },
};
