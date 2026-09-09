import type { AulaGeoV1 } from "../../types";
import { url as imgDig } from "@/assets/historia-9ano/u7-era-digital.jpg.asset.json";
import { url as imgClima } from "@/assets/historia-9ano/u7-clima-global.jpg.asset.json";
import { url as imgSmart } from "@/assets/historia-9ano/u7-smartphone-jovem.jpg.asset.json";
import { url as imgNyc } from "@/assets/historia-9ano/u7-nova-iorque-global.jpg.asset.json";
import { url as imgFavela } from "@/assets/historia-9ano/u7-favela-cidade.jpg.asset.json";

export const aula07: AulaGeoV1 = {
  slug: "aula-07-onu-organismos",
  titulo: "ONU e Organismos Multilaterais na Ordem Mundial",
  iconeTrilha: "🕊️",
  bncc: ["EF09HI15", "EF09HI16"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgNyc,
    imagemDestaqueUrl: imgClima,
    aurora:
      "Em 1945, logo após a Segunda Guerra Mundial, 51 países fundaram a ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU), com sede em Nova York, para evitar novas guerras mundiais e promover cooperação internacional. Desde então, organismos multilaterais como FMI, Banco Mundial e OMC ajudam a organizar a economia, a segurança e os direitos humanos no mundo globalizado — apesar de críticas sobre sua eficácia e representatividade.",
    falaFinal: "A ONU nasceu para tecer paz numa Teia mundial em reconstrução.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que a ONU foi criada?",
    pergunta: "Qual foi o principal motivo da criação da ONU em 1945?",
    fotoUrl: imgSmart,
    opcoes: [
      { id: "paz", titulo: "MANTER A PAZ MUNDIAL", subtitulo: "evitar uma nova guerra mundial após 1945", emoji: "🕊️", cor: "from-sky-800 to-slate-950" },
      { id: "com", titulo: "CRIAR UM ÚNICO GOVERNO MUNDIAL", subtitulo: "substituir todos os governos nacionais", emoji: "❌", cor: "from-amber-900 to-slate-950" },
          { id: "extra2", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "paz",
    feedbackAcerto: "Correto. Após duas guerras mundiais e o Holocausto, os países fundaram a ONU em 1945 para promover a paz, a cooperação e os direitos humanos.",
    feedbackErro: "Não. A ONU não substitui governos nacionais; ela busca a cooperação e a manutenção da paz entre países soberanos.",
    falaFinal: "Paz e cooperação: a missão fundadora da ONU.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro organismos-chave da ordem mundial multilateral.",
    instrucao: "",
    cadernos: [
      { id: "onu", capa: "ONU", emoji: "🕊️", cor: "from-sky-700 to-slate-900", fotoUrl: imgNyc, conteudo: "A ONU (Organização das Nações Unidas), fundada em 1945 com sede em Nova York, reúne quase 200 países-membros. Seu principal órgão de decisão sobre paz e segurança é o CONSELHO DE SEGURANÇA, com 5 membros permanentes (EUA, Rússia, China, França e Reino Unido) que têm poder de veto.", exemplo: "Exemplo: a ONU também tem agências como a UNICEF (crianças), a OMS (saúde) e a UNESCO (educação e cultura)." },
      { id: "fmi", capa: "FMI", emoji: "💰", cor: "from-teal-700 to-slate-900", fotoUrl: imgFavela, conteudo: "O FMI (Fundo Monetário Internacional), criado em 1944 na Conferência de Bretton Woods, empresta dinheiro a países com crises financeiras, geralmente exigindo reformas econômicas (como corte de gastos públicos) em troca — o que gera críticas de países em desenvolvimento.", exemplo: "Exemplo: o Brasil recorreu a empréstimos do FMI em momentos de crise, como no final dos anos 1990 e início dos anos 2000." },
      { id: "bm", capa: "Banco Mundial", emoji: "🏦", cor: "from-amber-700 to-slate-900", fotoUrl: imgDig, conteudo: "O BANCO MUNDIAL, também criado em Bretton Woods (1944), financia projetos de desenvolvimento em países pobres e emergentes, como infraestrutura, saúde e educação, através de empréstimos de longo prazo com juros mais baixos que o mercado.", exemplo: "Exemplo: o Banco Mundial já financiou projetos de saneamento básico e transporte público em várias cidades brasileiras." },
      { id: "omc", capa: "OMC", emoji: "🌐", cor: "from-slate-700 to-slate-900", fotoUrl: imgClima, conteudo: "A OMC (Organização Mundial do Comércio), criada em 1995, regula o comércio internacional entre seus mais de 160 países-membros, define regras contra práticas desleais (como dumping) e resolve disputas comerciais entre nações.", exemplo: "Exemplo: o Brasil já venceu disputas na OMC contra os EUA sobre subsídios ao algodão americano, que prejudicavam produtores brasileiros." },
    ],
    falaFinal: "ONU + FMI + Banco Mundial + OMC: os pilares multilaterais da ordem global.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três funções da ONU no mundo. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgSmart,
    pontos: [
      { id: "paz", x: 25, y: 30, emoji: "🕊️", cor: "from-sky-700 to-slate-900", fotoUrl: imgNyc, titulo: "MANUTENÇÃO DA PAZ", texto: "A ONU envia forças de paz (capacetes azuis) para regiões de conflito e media negociações diplomáticas, como em conflitos no Oriente Médio e na África." },
      { id: "dh", x: 55, y: 55, emoji: "⚖️", cor: "from-amber-700 to-slate-900", fotoUrl: imgFavela, titulo: "DIREITOS HUMANOS", texto: "A Declaração Universal dos Direitos Humanos (1948), adotada pela ONU, estabelece direitos básicos para todos os seres humanos, servindo de referência para constituições e leis em todo o mundo." },
      { id: "cl", x: 80, y: 40, emoji: "🌡️", cor: "from-teal-700 to-slate-900", fotoUrl: imgDig, titulo: "AGENDA CLIMÁTICA E DE DESENVOLVIMENTO", texto: "A ONU organiza as conferências do clima (COP), incluindo a COP30 em Belém (2025), e estabeleceu os Objetivos de Desenvolvimento Sustentável (ODS, 2015), 17 metas para 2030." },
    ],
    falaFinal: "Paz, direitos humanos e clima: a ONU atua em múltiplas frentes.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em que ano a ONU foi fundada?", fotoUrl: imgClima, cards: [{ id: "45", emoji: "🕊️", titulo: "1945", cor: "from-sky-600 to-slate-900" }, { id: "19", emoji: "📜", titulo: "1919", cor: "from-amber-600 to-slate-900" }, { id: "95", emoji: "🌐", titulo: "1995", cor: "from-slate-600 to-slate-900" }, { id: "extra", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" }], correta: "45", feedbackAcerto: "Correto. Fundada em 1945, após a Segunda Guerra Mundial.", feedbackErro: "É 1945. 1919 foi a Liga das Nações; 1995 é a OMC." },
      { id: "q2", pergunta: "Quais são os 5 membros permanentes do Conselho de Segurança da ONU?", fotoUrl: imgSmart, cards: [{ id: "cs", emoji: "🌍", titulo: "EUA, Rússia, China, França e Reino Unido", cor: "from-sky-600 to-slate-900" }, { id: "eu", emoji: "🇪🇺", titulo: "Todos os países da União Europeia", cor: "from-amber-600 to-slate-900" }, { id: "am", emoji: "🌎", titulo: "Todos os países americanos", cor: "from-slate-600 to-slate-900" }, { id: "extra", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" }], correta: "cs", feedbackAcerto: "Correto. Esses 5 países têm poder de veto no Conselho de Segurança.", feedbackErro: "São EUA, Rússia, China, França e Reino Unido." },
      { id: "q3", pergunta: "O FMI foi criado em qual conferência, em 1944?", fotoUrl: imgNyc, cards: [{ id: "bw", emoji: "💰", titulo: "Bretton Woods", cor: "from-teal-600 to-slate-900" }, { id: "ya", emoji: "❄️", titulo: "Yalta", cor: "from-amber-600 to-slate-900" }, { id: "pa", emoji: "🌡️", titulo: "Paris (clima)", cor: "from-slate-600 to-slate-900" }, { id: "extra", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" }], correta: "bw", feedbackAcerto: "Correto. Conferência de Bretton Woods, 1944, também criou o Banco Mundial.", feedbackErro: "É Bretton Woods. Yalta (1945) tratou da divisão do pós-guerra." },
    ],
    falaFinal: "Você já domina o funcionamento da ONU e organismos multilaterais.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois lados do debate sobre organismos multilaterais.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFavela,
    camadas: [
      { id: "for", rotulo: "Forças", emoji: "🕊️", cor: "from-sky-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Espaço de diálogo entre quase 200 países, ajuda humanitária, mediação de conflitos, financiamento de desenvolvimento e definição de metas globais como os ODS." },
      { id: "cri", rotulo: "Críticas", emoji: "⚠️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Poder de veto concentrado em 5 países no Conselho de Segurança, dificuldade de agir contra potências, condicionalidades do FMI que pesam sobre países pobres, decisões lentas diante de crises urgentes." },
    ],
    falaFinal: "Cooperação e limites: a ONU é essencial, mas não perfeita.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos dos organismos multilaterais.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1944–2015",
    paradas: [
      { id: "bw", emoji: "💰", rotulo: "1. Bretton Woods — FMI e Banco Mundial (1944)", fotoUrl: imgDig, descricao: "Criação das instituições financeiras internacionais." },
      { id: "onu", emoji: "🕊️", rotulo: "2. Fundação da ONU (1945)", fotoUrl: imgClima, descricao: "51 países fundadores, sede em Nova York." },
      { id: "omc", emoji: "🌐", rotulo: "3. Criação da OMC (1995)", fotoUrl: imgSmart, descricao: "Regula o comércio internacional." },
      { id: "ods", emoji: "🎯", rotulo: "4. Objetivos de Desenvolvimento Sustentável (2015)", fotoUrl: imgNyc, descricao: "17 metas globais da ONU para 2030." },
    ],
    ordemCerta: ["bw", "onu", "omc", "ods"],
    feedbackAcerto: "Perfeito. 1944 → 1945 → 1995 → 2015. A construção da ordem multilateral.",
    feedbackErro: "Comece por Bretton Woods (1944), que criou FMI e Banco Mundial.",
    falaFinal: "4 marcos, 71 anos de cooperação internacional.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia sobre a ONU e os organismos multilaterais. Toque nos termos técnicos.",
    tituloLivro: "🕊️ O Livro da Cooperação Mundial",
    subtitulo: "ONU e organismos multilaterais na ordem mundial",
    paragrafos: [
      { id: "p1", texto: "Em 1945, após o fim da Segunda Guerra Mundial e o horror do Holocausto, 51 países fundaram a ONU (Organização das Nações Unidas), com sede em Nova York, para promover a paz, a segurança e a cooperação internacional. Hoje a ONU tem quase 200 países-membros.", chaves: ["ONU"], definicoes: { ONU: "Organização das Nações Unidas, fundada em 1945 para promover paz, segurança e cooperação entre os países do mundo." }, fotoUrl: imgFavela },
      { id: "p2", texto: "O principal órgão de decisão sobre paz e guerra é o CONSELHO DE SEGURANÇA, formado por 15 países, sendo 5 permanentes com poder de veto: Estados Unidos, Rússia, China, França e Reino Unido. Esse poder de veto é criticado por concentrar decisões em poucas mãos.", chaves: ["Conselho de Segurança"], definicoes: { "Conselho de Segurança": "Órgão da ONU responsável por decisões sobre paz e segurança internacional, com 5 membros permanentes com poder de veto." }, fotoUrl: imgDig },
      { id: "p3", texto: "Além da ONU, outros ORGANISMOS MULTILATERAIS regulam a economia mundial: o FMI (Fundo Monetário Internacional) e o BANCO MUNDIAL, ambos criados em 1944 na Conferência de Bretton Woods, e a OMC (Organização Mundial do Comércio), criada em 1995 para regular o comércio internacional.", chaves: ["Organismos Multilaterais"], definicoes: { "Organismos Multilaterais": "Instituições internacionais formadas por vários países para tratar de temas comuns, como economia, comércio e segurança." }, fotoUrl: imgClima },
      { id: "p4", texto: "Em 2015, a ONU lançou os OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL (ODS), 17 metas globais para 2030, como erradicar a pobreza extrema, garantir educação de qualidade e combater as mudanças climáticas. Apesar de limites e críticas, esses organismos seguem sendo o principal espaço de diálogo entre as nações no mundo globalizado.", chaves: ["ODS"], definicoes: { ODS: "Objetivos de Desenvolvimento Sustentável: 17 metas globais estabelecidas pela ONU em 2015 para serem alcançadas até 2030." }, fotoUrl: imgSmart },
    ],
    falaFinal: "Leitura concluída. A cooperação internacional segue moldando o mundo globalizado.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada organismo à sua função.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "paz", emoji: "🕊️", rotulo: "Paz e Segurança" },
      { id: "eco", emoji: "💰", rotulo: "Economia e Finanças" },
      { id: "com", emoji: "🌐", rotulo: "Comércio Internacional" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "ONU", emoji: "🕊️", cor: "from-sky-700 to-slate-900" }, municipioB: { nome: "Fundada em 1945", emoji: "🏛️", cor: "from-sky-600 to-slate-900" }, contexto: "Sede em Nova York.", pecaCertaId: "paz", feedbackAcerto: "Correto. Paz e Segurança.", feedbackErro: "É Paz e Segurança." },
      { id: "r2", municipioA: { nome: "FMI", emoji: "💰", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Empréstimos a países em crise", emoji: "📊", cor: "from-teal-600 to-slate-900" }, contexto: "Bretton Woods, 1944.", pecaCertaId: "eco", feedbackAcerto: "Correto. Economia e Finanças.", feedbackErro: "É Economia e Finanças." },
      { id: "r3", municipioA: { nome: "OMC", emoji: "🌐", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Regras do comércio mundial", emoji: "🚢", cor: "from-slate-600 to-slate-900" }, contexto: "Criada em 1995.", pecaCertaId: "com", feedbackAcerto: "Correto. Comércio Internacional.", feedbackErro: "É Comércio Internacional." },
      { id: "r4", municipioA: { nome: "Capacetes azuis", emoji: "🪖", cor: "from-sky-700 to-slate-900" }, municipioB: { nome: "Forças de paz da ONU", emoji: "🕊️", cor: "from-sky-600 to-slate-900" }, contexto: "Missões em zonas de conflito.", pecaCertaId: "paz", feedbackAcerto: "Correto. Paz e Segurança.", feedbackErro: "É Paz e Segurança." },
      { id: "r5", municipioA: { nome: "Banco Mundial", emoji: "🏦", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Financia desenvolvimento", emoji: "🏗️", cor: "from-teal-600 to-slate-900" }, contexto: "Também de Bretton Woods.", pecaCertaId: "eco", feedbackAcerto: "Correto. Economia e Finanças.", feedbackErro: "É Economia e Finanças." },
      { id: "r6", municipioA: { nome: "Disputa Brasil x EUA sobre algodão", emoji: "🌾", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Resolvida na OMC", emoji: "⚖️", cor: "from-slate-600 to-slate-900" }, contexto: "Subsídios agrícolas.", pecaCertaId: "com", feedbackAcerto: "Correto. Comércio Internacional.", feedbackErro: "É Comércio Internacional." },
    ],
    falaFinal: "6 rodadas. Você já conhece o mapa dos organismos multilaterais.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Como se compõe o Conselho de Segurança da ONU.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgNyc,
    fatias: [
      { id: "per", rotulo: "Membros permanentes com veto (~33%)", emoji: "🔑", percentual: 33, cor: "#0369a1", descricao: "5 dos 15 membros do Conselho de Segurança (EUA, Rússia, China, França e Reino Unido) são permanentes e têm poder de veto, podendo bloquear qualquer resolução sozinhos.", exemplos: ["Estados Unidos", "Rússia", "China", "França", "Reino Unido"] },
      { id: "rot", rotulo: "Membros rotativos sem veto (~67%)", emoji: "🔄", percentual: 67, cor: "#b45309", descricao: "Os outros 10 membros são eleitos pela Assembleia Geral para mandatos de 2 anos e não têm poder de veto, o que gera críticas sobre desigualdade de poder dentro da ONU.", exemplos: ["Eleitos por região", "Mandato de 2 anos", "Sem poder de veto", "Rotação entre países"] },
    ],
    falaFinal: "Veto x rotação: o desenho de poder dentro da ONU.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais para fechar a aula.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFavela,
    perguntas: [
      { id: "av1", pergunta: "A ONU foi fundada em:", opcoes: [{ id: "a", texto: "1945, após a Segunda Guerra Mundial.", correta: true }, { id: "b", texto: "1995, junto com a OMC.", correta: false }, { id: "c", texto: "1919, após a Primeira Guerra Mundial.", correta: false }], feedbackAcerto: "Correto. 1945, com sede em Nova York.", feedbackErro: "É 1945. 1919 foi a Liga das Nações, que fracassou." },
      { id: "av2", pergunta: "O FMI e o Banco Mundial foram criados na conferência de:", opcoes: [{ id: "a", texto: "Bretton Woods (1944).", correta: true }, { id: "b", texto: "Yalta (1945).", correta: false }, { id: "c", texto: "Paris (2015).", correta: false }], feedbackAcerto: "Correto. Bretton Woods, 1944.", feedbackErro: "É Bretton Woods (1944)." },
      { id: "av3", pergunta: "Uma crítica comum ao Conselho de Segurança da ONU é:", opcoes: [{ id: "a", texto: "O poder de veto concentrado em 5 países.", correta: true }, { id: "b", texto: "Ter membros demais sem nenhum critério.", correta: false }, { id: "c", texto: "Não existir desde 1945.", correta: false }], feedbackAcerto: "Correto. O veto dos 5 membros permanentes é criticado por concentrar poder.", feedbackErro: "É o poder de veto concentrado em 5 países." },
    ],
    selo: { nome: "Diplomata da Ordem Mundial", subtitulo: "Conclui a aula sobre a ONU e organismos multilaterais", emoji: "🕊️", cor: "from-sky-500 to-slate-900", fotoUrl: imgDig },
    falaFinal: "Aula concluída. Cooperação internacional: essencial, imperfeita, em construção.",
  },

  recompensa: { xp: 800, moedas: 700, medalha: "Diplomata da Ordem Mundial" },
};
