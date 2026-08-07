import type { AulaGeoV1 } from "../../types";
import { url as imgDig } from "@/assets/historia-9ano/u7-era-digital.jpg.asset.json";
import { url as imgClima } from "@/assets/historia-9ano/u7-clima-global.jpg.asset.json";
import { url as imgSmart } from "@/assets/historia-9ano/u7-smartphone-jovem.jpg.asset.json";
import { url as imgNyc } from "@/assets/historia-9ano/u7-nova-iorque-global.jpg.asset.json";
import { url as imgFavela } from "@/assets/historia-9ano/u7-favela-cidade.jpg.asset.json";

export const aula06: AulaGeoV1 = {
  slug: "aula-06-neoliberalismo",
  titulo: "Globalização e Políticas Neoliberais",
  iconeTrilha: "📉",
  bncc: ["EF09HI34"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgClima,
    imagemDestaqueUrl: imgDig,
    aurora:
      "A partir dos anos 1980, Margaret Thatcher (Reino Unido) e Ronald Reagan (EUA) lideraram uma revolução econômica: o NEOLIBERALISMO. A ideia central é reduzir o papel do Estado na economia, privatizar empresas estatais, cortar gastos sociais e deixar o mercado livre regular preços e produção. Essas políticas se espalharam pelo mundo — inclusive no Brasil e na América Latina — junto com a onda de globalização.",
    falaFinal: "O neoliberalismo é o motor econômico da globalização recente.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que o neoliberalismo defende?",
    pergunta: "Qual é a ideia central das políticas NEOLIBERAIS?",
    fotoUrl: imgSmart,
    opcoes: [
      { id: "me", titulo: "MENOS ESTADO, MAIS MERCADO", subtitulo: "privatizações, desregulamentação, livre mercado", emoji: "📉", cor: "from-slate-800 to-slate-950" },
      { id: "ma", titulo: "MAIS ESTADO, MENOS MERCADO", subtitulo: "estatização total da economia", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "me",
    feedbackAcerto: "Correto. O neoliberalismo defende reduzir a intervenção estatal, privatizar empresas públicas e deixar o mercado livre definir preços e produção.",
    feedbackErro: "Não. É o oposto: o neoliberalismo defende MENOS Estado e MAIS liberdade para o mercado.",
    falaFinal: "Menos Estado, mais mercado: a fórmula neoliberal que mudou o mundo.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos centrais do neoliberalismo.",
    instrucao: "",
    cadernos: [
      { id: "th", capa: "Thatcher e Reagan", emoji: "🏛️", cor: "from-slate-700 to-slate-900", fotoUrl: imgNyc, conteudo: "Margaret THATCHER (primeira-ministra do Reino Unido, 1979-1990) e Ronald REAGAN (presidente dos EUA, 1981-1989) foram os principais líderes que implementaram políticas neoliberais: privatizações, corte de impostos para empresas, redução de gastos sociais e enfraquecimento de sindicatos.", exemplo: "Exemplo: Thatcher privatizou empresas de energia, telefonia e transporte no Reino Unido nos anos 1980, reduzindo drasticamente o setor estatal britânico." },
      { id: "priv", capa: "Privatização", emoji: "🏭", cor: "from-teal-700 to-slate-900", fotoUrl: imgFavela, conteudo: "PRIVATIZAÇÃO é a venda de empresas estatais para o setor privado, sob o argumento de que empresas privadas são mais eficientes e competitivas do que as públicas. É uma das principais ferramentas neoliberais.", exemplo: "Exemplo: no Brasil, a Vale do Rio Doce (1997) e a Telebrás (1998) foram privatizadas durante o governo FHC, seguindo essa lógica." },
      { id: "des", capa: "Desregulamentação", emoji: "📜", cor: "from-amber-700 to-slate-900", fotoUrl: imgDig, conteudo: "DESREGULAMENTAÇÃO é a redução de normas e controles estatais sobre setores econômicos, como o financeiro. A ideia é dar mais liberdade às empresas, mas críticos apontam que isso favoreceu crises, como a crise financeira de 2008.", exemplo: "Exemplo: a desregulamentação do sistema bancário nos EUA nas décadas de 1980-2000 é apontada como uma das causas da crise financeira global de 2008." },
      { id: "cons", capa: "Consenso de Washington", emoji: "🌎", cor: "from-cyan-700 to-slate-900", fotoUrl: imgClima, conteudo: "O CONSENSO DE WASHINGTON (1989) foi um conjunto de recomendações econômicas do FMI, Banco Mundial e Tesouro dos EUA para países em desenvolvimento: abertura comercial, privatizações, disciplina fiscal e desregulamentação. Influenciou fortemente a América Latina nos anos 1990.", exemplo: "Exemplo: países como Brasil, Argentina e México adotaram recomendações do Consenso de Washington para conseguir empréstimos do FMI." },
    ],
    falaFinal: "Thatcher/Reagan + Privatização + Desregulamentação + Consenso de Washington = o pacote neoliberal.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três impactos do neoliberalismo pelo mundo. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgSmart,
    pontos: [
      { id: "uk", x: 25, y: 30, emoji: "🇬🇧", cor: "from-slate-700 to-slate-900", fotoUrl: imgNyc, titulo: "REINO UNIDO — THATCHER", texto: "Thatcher enfrentou os sindicatos de mineiros em 1984-85, privatizou setores estratégicos e reduziu o poder dos trabalhadores organizados, mudando profundamente a economia britânica." },
      { id: "am", x: 55, y: 55, emoji: "🌎", cor: "from-amber-700 to-slate-900", fotoUrl: imgFavela, titulo: "AMÉRICA LATINA — ANOS 1990", texto: "Países como Brasil, Argentina, México e Chile adotaram receitas neoliberais recomendadas pelo Consenso de Washington, buscando controlar inflação e atrair investimentos, com resultados desiguais em termos sociais." },
      { id: "cr", x: 80, y: 40, emoji: "📉", cor: "from-teal-700 to-slate-900", fotoUrl: imgDig, titulo: "CRISE DE 2008", texto: "A desregulamentação do setor financeiro nos EUA é apontada como uma das causas da crise financeira de 2008, que gerou recessão mundial e levantou críticas ao modelo neoliberal sem controles." },
    ],
    falaFinal: "Reino Unido, América Latina e a crise de 2008: o neoliberalismo tem efeitos globais.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Quem foi a primeira-ministra britânica símbolo do neoliberalismo?", fotoUrl: imgClima, cards: [{ id: "th", emoji: "🇬🇧", titulo: "Margaret Thatcher", cor: "from-slate-600 to-slate-900" }, { id: "me", emoji: "👑", titulo: "Angela Merkel", cor: "from-amber-600 to-slate-900" }, { id: "in", emoji: "🌍", titulo: "Indira Gandhi", cor: "from-teal-600 to-slate-900" }], correta: "th", feedbackAcerto: "Correto. Margaret Thatcher, primeira-ministra de 1979 a 1990.", feedbackErro: "É Margaret Thatcher, símbolo do neoliberalismo britânico." },
      { id: "q2", pergunta: "O Consenso de Washington (1989) recomendava, entre outras coisas:", fotoUrl: imgSmart, cards: [{ id: "pri", emoji: "🏭", titulo: "Privatizações e abertura comercial", cor: "from-teal-600 to-slate-900" }, { id: "est", emoji: "🏛️", titulo: "Estatização total da economia", cor: "from-amber-600 to-slate-900" }, { id: "iso", emoji: "🚫", titulo: "Isolamento comercial completo", cor: "from-slate-600 to-slate-900" }], correta: "pri", feedbackAcerto: "Correto. Recomendava privatizações, abertura comercial e disciplina fiscal.", feedbackErro: "É privatizações e abertura comercial, não estatização." },
      { id: "q3", pergunta: "A desregulamentação financeira é apontada como uma causa de qual crise?", fotoUrl: imgNyc, cards: [{ id: "08", emoji: "📉", titulo: "Crise de 2008", cor: "from-teal-600 to-slate-900" }, { id: "29", emoji: "🏦", titulo: "Crise de 1929", cor: "from-amber-600 to-slate-900" }, { id: "97", emoji: "🌏", titulo: "Independência das colônias", cor: "from-slate-600 to-slate-900" }], correta: "08", feedbackAcerto: "Correto. A crise financeira global de 2008 teve origem na desregulamentação do setor imobiliário e bancário dos EUA.", feedbackErro: "É a crise de 2008, ligada à desregulamentação financeira." },
    ],
    falaFinal: "Você já domina os pilares do neoliberalismo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois lados do debate sobre neoliberalismo.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFavela,
    camadas: [
      { id: "def", rotulo: "Argumentos a favor", emoji: "📈", cor: "from-teal-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Defensores dizem que reduz burocracia estatal, estimula eficiência e competitividade, atrai investimentos e pode controlar inflação e dívida pública." },
      { id: "cri", rotulo: "Críticas", emoji: "⚠️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Críticos apontam aumento de desigualdade social, enfraquecimento de direitos trabalhistas, cortes em saúde e educação públicas, e maior vulnerabilidade a crises financeiras." },
    ],
    falaFinal: "Neoliberalismo é tema de debate até hoje: eficiência x desigualdade.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos do neoliberalismo.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1979–2008",
    paradas: [
      { id: "th", emoji: "🇬🇧", rotulo: "1. Thatcher no poder (1979)", fotoUrl: imgDig, descricao: "Início das políticas neoliberais no Reino Unido." },
      { id: "re", emoji: "🇺🇸", rotulo: "2. Reagan presidente (1981)", fotoUrl: imgClima, descricao: "EUA adota corte de impostos e desregulamentação." },
      { id: "co", emoji: "🌎", rotulo: "3. Consenso de Washington (1989)", fotoUrl: imgSmart, descricao: "Receitas neoliberais para países em desenvolvimento." },
      { id: "cr", emoji: "📉", rotulo: "4. Crise financeira global (2008)", fotoUrl: imgNyc, descricao: "Desregulamentação é questionada mundialmente." },
    ],
    ordemCerta: ["th", "re", "co", "cr"],
    feedbackAcerto: "Perfeito. 1979 → 1981 → 1989 → 2008. A trajetória do neoliberalismo.",
    feedbackErro: "Comece por Thatcher no poder (1979).",
    falaFinal: "4 marcos, quase 30 anos de política econômica global.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia sobre o neoliberalismo. Toque nos termos técnicos.",
    tituloLivro: "📉 O Livro do Mercado Livre",
    subtitulo: "Globalização e políticas neoliberais",
    paragrafos: [
      { id: "p1", texto: "O NEOLIBERALISMO é uma doutrina econômica que defende a redução da intervenção do Estado na economia, a privatização de empresas públicas e a livre atuação do mercado. Ganhou força a partir dos governos de Margaret Thatcher (Reino Unido, 1979) e Ronald Reagan (EUA, 1981).", chaves: ["Neoliberalismo"], definicoes: { Neoliberalismo: "Doutrina econômica que defende Estado mínimo, privatizações, desregulamentação e livre mercado." }, fotoUrl: imgFavela },
      { id: "p2", texto: "Uma das principais ferramentas neoliberais é a PRIVATIZAÇÃO: a venda de empresas estatais para investidores privados, sob o argumento de maior eficiência. Outra é a DESREGULAMENTAÇÃO, que reduz normas estatais sobre setores como o financeiro, dando mais liberdade às empresas — mas também mais riscos.", chaves: ["Privatização", "Desregulamentação"], definicoes: { Privatização: "Transferência de empresas ou serviços do setor público para o setor privado.", Desregulamentação: "Redução de normas e controles estatais sobre atividades econômicas." }, fotoUrl: imgDig },
      { id: "p3", texto: "Em 1989, o CONSENSO DE WASHINGTON reuniu recomendações do FMI, Banco Mundial e governo dos EUA para países em desenvolvimento: abrir mercados, privatizar estatais, cortar gastos públicos e manter disciplina fiscal. América Latina, incluindo o Brasil, adotou boa parte dessas receitas nos anos 1990.", chaves: ["Consenso de Washington"], definicoes: { "Consenso de Washington": "Conjunto de recomendações econômicas neoliberais formuladas em 1989 para países em desenvolvimento." }, fotoUrl: imgClima },
      { id: "p4", texto: "As políticas neoliberais têm defensores, que apontam ganhos de eficiência e controle inflacionário, e críticos, que denunciam aumento da desigualdade social e maior vulnerabilidade a crises — como a crise financeira global de 2008, ligada à desregulamentação do sistema bancário nos EUA. O debate sobre o papel do Estado na economia segue vivo até hoje.", chaves: ["Crise de 2008"], definicoes: { "Crise de 2008": "Crise financeira global originada no mercado imobiliário dos EUA, agravada pela desregulamentação bancária." }, fotoUrl: imgSmart },
    ],
    falaFinal: "Leitura concluída. O neoliberalismo moldou a economia mundial das últimas décadas.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento à sua categoria.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "priv", emoji: "🏭", rotulo: "Privatização" },
      { id: "des", emoji: "📜", rotulo: "Desregulamentação" },
      { id: "lid", emoji: "🏛️", rotulo: "Liderança Política" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Margaret Thatcher", emoji: "🇬🇧", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Primeira-ministra britânica", emoji: "👑", cor: "from-slate-600 to-slate-900" }, contexto: "Símbolo do neoliberalismo.", pecaCertaId: "lid", feedbackAcerto: "Correto. Liderança Política.", feedbackErro: "É Liderança Política." },
      { id: "r2", municipioA: { nome: "Venda da Vale (1997)", emoji: "🏭", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Empresa estatal vendida", emoji: "💰", cor: "from-teal-600 to-slate-900" }, contexto: "Governo FHC.", pecaCertaId: "priv", feedbackAcerto: "Correto. Privatização.", feedbackErro: "É Privatização." },
      { id: "r3", municipioA: { nome: "Fim de normas bancárias nos EUA", emoji: "📜", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Ligado à crise de 2008", emoji: "📉", cor: "from-amber-600 to-slate-900" }, contexto: "Setor financeiro.", pecaCertaId: "des", feedbackAcerto: "Correto. Desregulamentação.", feedbackErro: "É Desregulamentação." },
      { id: "r4", municipioA: { nome: "Ronald Reagan", emoji: "🇺🇸", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Presidente dos EUA", emoji: "🏛️", cor: "from-slate-600 to-slate-900" }, contexto: "Cortes de impostos, 1981.", pecaCertaId: "lid", feedbackAcerto: "Correto. Liderança Política.", feedbackErro: "É Liderança Política." },
      { id: "r5", municipioA: { nome: "Telebrás (1998)", emoji: "📞", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Telecomunicações vendida", emoji: "💰", cor: "from-teal-600 to-slate-900" }, contexto: "Governo FHC.", pecaCertaId: "priv", feedbackAcerto: "Correto. Privatização.", feedbackErro: "É Privatização." },
      { id: "r6", municipioA: { nome: "Menos controle sobre bancos", emoji: "🏦", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Mais liberdade financeira", emoji: "📜", cor: "from-amber-600 to-slate-900" }, contexto: "Reduz normas estatais.", pecaCertaId: "des", feedbackAcerto: "Correto. Desregulamentação.", feedbackErro: "É Desregulamentação." },
    ],
    falaFinal: "6 rodadas. Você já reconhece as engrenagens do neoliberalismo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Como se divide o debate sobre o neoliberalismo hoje.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgNyc,
    fatias: [
      { id: "def", rotulo: "A favor: eficiência e crescimento (~50%)", emoji: "📈", percentual: 50, cor: "#0f766e", descricao: "Defensores argumentam que a redução do Estado estimula competitividade, atrai investimentos e pode reduzir burocracia e inflação.", exemplos: ["Privatizações eficientes", "Atração de investimento estrangeiro", "Controle da inflação", "Redução da dívida pública"] },
      { id: "cri", rotulo: "Contra: desigualdade e riscos (~50%)", emoji: "⚠️", percentual: 50, cor: "#b45309", descricao: "Críticos apontam que o modelo aumenta a desigualdade social, reduz direitos trabalhistas e deixa a economia mais vulnerável a crises financeiras.", exemplos: ["Aumento da desigualdade", "Cortes em saúde e educação", "Crise financeira de 2008", "Enfraquecimento de sindicatos"] },
    ],
    falaFinal: "Eficiência x desigualdade: o debate neoliberal segue atual.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais para fechar a aula.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFavela,
    perguntas: [
      { id: "av1", pergunta: "O neoliberalismo defende principalmente:", opcoes: [{ id: "a", texto: "Redução do Estado e livre mercado.", correta: true }, { id: "b", texto: "Estatização total da economia.", correta: false }, { id: "c", texto: "Fechamento total das fronteiras comerciais.", correta: false }], feedbackAcerto: "Correto. Menos Estado, mais mercado.", feedbackErro: "É redução do Estado e livre mercado." },
      { id: "av2", pergunta: "O Consenso de Washington (1989) recomendava aos países em desenvolvimento:", opcoes: [{ id: "a", texto: "Privatizações e abertura comercial.", correta: true }, { id: "b", texto: "Fechamento das fronteiras.", correta: false }, { id: "c", texto: "Aumento de estatais.", correta: false }], feedbackAcerto: "Correto. Privatizações, abertura comercial e disciplina fiscal.", feedbackErro: "É privatizações e abertura comercial." },
      { id: "av3", pergunta: "A crise financeira de 2008 é associada a:", opcoes: [{ id: "a", texto: "Desregulamentação do setor financeiro.", correta: true }, { id: "b", texto: "Excesso de controle estatal sobre bancos.", correta: false }, { id: "c", texto: "Fim da internet comercial.", correta: false }], feedbackAcerto: "Correto. A falta de regulação no setor bancário e imobiliário dos EUA gerou a crise.", feedbackErro: "É a desregulamentação do setor financeiro." },
    ],
    selo: { nome: "Analista do Mercado Livre", subtitulo: "Conclui a aula sobre neoliberalismo", emoji: "📉", cor: "from-slate-500 to-slate-900", fotoUrl: imgDig },
    falaFinal: "Aula concluída. O debate entre Estado e mercado segue moldando o mundo.",
  },

  recompensa: { xp: 800, moedas: 700, medalha: "Analista do Mercado Livre" },
};
