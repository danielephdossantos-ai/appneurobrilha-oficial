import type { AulaGeoV1 } from "../../types";
import { url as imgDiretas } from "@/assets/historia-9ano/u6-diretas-comicio.jpg.asset.json";
import { url as imgDir } from "@/assets/historia-9ano/u6-diretas-ja.jpg.asset.json";
import { url as imgRes } from "@/assets/historia-9ano/u6-resistencia-cultural.jpg.asset.json";
import { url as imgMpb } from "@/assets/historia-9ano/u6-mpb-resistencia.jpg.asset.json";

export const aula06: AulaGeoV1 = {
  slug: "aula-06-cf88-direitos",
  titulo: "A Constituição de 1988: Direitos Civis, Políticos e Sociais",
  iconeTrilha: "📖",
  bncc: ["EF09HI23"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgDiretas,
    imagemDestaqueUrl: imgMpb,
    aurora:
      "5 de outubro de 1988, o presidente da Assembleia Constituinte, Ulysses Guimarães, ergue a nova Constituição e declara: 'Maldito seja aquele que fugir a esse juramento'. Pela primeira vez uma Constituição brasileira dedica um capítulo inteiro aos DIREITOS SOCIAIS: saúde, educação, trabalho, moradia, lazer, previdência. Também garante direitos civis (liberdade, igualdade) e políticos (voto direto, livre organização partidária). Por isso é chamada de 'Constituição Cidadã'.",
    falaFinal: "A CF/88 é a base legal da democracia brasileira até hoje.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que torna a Constituição de 1988 diferente das anteriores?",
    pergunta: "Por que a CF/88 é chamada de 'Constituição Cidadã'?",
    fotoUrl: imgMpb,
    opcoes: [
      { id: "dir", titulo: "AMPLIOU DIREITOS", subtitulo: "civis, políticos e sociais, para todos os cidadãos", emoji: "📖", cor: "from-blue-800 to-slate-950" },
      { id: "res", titulo: "RESTRINGIU DIREITOS", subtitulo: "voltou a limitar liberdades", emoji: "❌", cor: "from-amber-900 to-slate-950" },
          { id: "extra2", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "dir",
    feedbackAcerto:
      "Correto. A CF/88 ampliou direitos civis (liberdade de expressão, de organização), políticos (voto direto e livre, inclusive para analfabetos) e sociais (saúde e educação como direitos de todos, SUS criado em 1990).",
    feedbackErro:
      "Não. Ela ampliou direitos — por isso o apelido 'Constituição Cidadã', cunhado pelo próprio Ulysses Guimarães.",
    falaFinal: "Uma Constituição pode ampliar ou restringir direitos — a de 1988 ampliou.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave dos direitos da CF/88.",
    instrucao: "",
    cadernos: [
      { id: "dc", capa: "Direitos Civis", emoji: "⚖️", cor: "from-blue-700 to-slate-900", fotoUrl: imgDiretas, conteudo: "DIREITOS CIVIS garantem liberdade individual: ir e vir, expressão, religião, reunião, proteção contra prisão arbitrária. A CF/88 proíbe a tortura e a censura, práticas comuns durante a ditadura.", exemplo: "Exemplo: o Artigo 5º da CF/88 tem 78 incisos garantindo direitos individuais — é um dos maiores do mundo em extensão." },
      { id: "dp", capa: "Direitos Políticos", emoji: "🗳️", cor: "from-emerald-700 to-slate-900", fotoUrl: imgDir, conteudo: "DIREITOS POLÍTICOS garantem participação na vida pública: voto direto e secreto, liberdade de criar partidos, direito de ser candidato. A CF/88 tornou o voto facultativo para analfabetos e jovens de 16-17 anos.", exemplo: "Exemplo: em 1989, pela primeira vez desde 1960, o Brasil elegeu presidente por voto direto — Fernando Collor venceu Lula no 2º turno." },
      { id: "ds", capa: "Direitos Sociais", emoji: "🏥", cor: "from-cyan-700 to-slate-900", fotoUrl: imgMpb, conteudo: "DIREITOS SOCIAIS (Art. 6º) incluem educação, saúde, trabalho, moradia, lazer, segurança, previdência social e assistência aos desamparados — deveres do Estado para com o cidadão.", exemplo: "Exemplo: o SUS (Sistema Único de Saúde), criado pela CF/88 e regulamentado em 1990, garante saúde pública universal e gratuita a todos os brasileiros." },
      { id: "cc", capa: "Constituição Cidadã", emoji: "📖", cor: "from-slate-700 to-slate-900", fotoUrl: imgRes, conteudo: "CONSTITUIÇÃO CIDADÃ é o apelido dado à CF/88 pelo deputado Ulysses Guimarães, presidente da Constituinte, por causa da ampla participação popular (mais de 12 milhões de assinaturas em emendas) e da extensão de direitos.", exemplo: "Exemplo: a CF/88 tem 250 artigos no texto original — mais que o dobro da Constituição de 1967 (feita pela ditadura)." },
    ],
    falaFinal: "Direitos Civis + Políticos + Sociais + Constituição Cidadã. O tripé da democracia de 1988.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três tipos de direitos garantidos pela CF/88. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgMpb,
    pontos: [
      { id: "civ", x: 22, y: 30, emoji: "⚖️", cor: "from-blue-700 to-slate-900", fotoUrl: imgDiretas, titulo: "DIREITOS CIVIS", texto: "Liberdade de expressão, proibição de tortura e censura, direito à privacidade e ao devido processo legal." },
      { id: "pol", x: 52, y: 55, emoji: "🗳️", cor: "from-emerald-700 to-slate-900", fotoUrl: imgDir, titulo: "DIREITOS POLÍTICOS", texto: "Voto direto e secreto a partir de 16 anos, pluripartidarismo, direito de ser candidato a cargos eletivos." },
      { id: "soc", x: 80, y: 38, emoji: "🏥", cor: "from-cyan-700 to-slate-900", fotoUrl: imgRes, titulo: "DIREITOS SOCIAIS", texto: "Saúde (SUS), educação básica obrigatória e gratuita, direitos trabalhistas, previdência social." },
    ],
    falaFinal: "Civis + Políticos + Sociais. Três frentes que formam a cidadania plena.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Quem cunhou a expressão 'Constituição Cidadã'?", fotoUrl: imgDiretas, cards: [
        { id: "ug", emoji: "📖", titulo: "Ulysses Guimarães", cor: "from-blue-600 to-slate-900" },
        { id: "tn", emoji: "🗳️", titulo: "Tancredo Neves", cor: "from-amber-600 to-slate-900" },
        { id: "fc", emoji: "💰", titulo: "Fernando Collor", cor: "from-slate-600 to-slate-900" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
      ], correta: "ug", feedbackAcerto: "Correto. Ulysses Guimarães presidiu a Constituinte e cunhou o apelido em 1988.", feedbackErro: "Foi Ulysses Guimarães, presidente da Assembleia Constituinte." },
      { id: "q2", pergunta: "Qual direito social foi criado com a CF/88 e regulamentado em 1990?", fotoUrl: imgMpb, cards: [
        { id: "sus", emoji: "🏥", titulo: "SUS (Sistema Único de Saúde)", cor: "from-blue-600 to-slate-900" },
        { id: "fgts", emoji: "💰", titulo: "Volta do padrão-ouro", cor: "from-amber-600 to-slate-900" },
        { id: "cens", emoji: "📰", titulo: "Censura prévia à imprensa", cor: "from-slate-600 to-slate-900" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
      ], correta: "sus", feedbackAcerto: "Correto. O SUS garante saúde pública universal e gratuita.", feedbackErro: "É o SUS, criado pela CF/88 e regulamentado em 1990." },
      { id: "q3", pergunta: "A partir de 1989, o voto direto para presidente foi usado:", fotoUrl: imgDir, cards: [
        { id: "s", emoji: "🗳️", titulo: "Pela primeira vez desde 1960", cor: "from-blue-600 to-slate-900" },
        { id: "n", emoji: "❌", titulo: "Pela primeira vez na história", cor: "from-amber-600 to-slate-900" },
        { id: "x", emoji: "🎖️", titulo: "Só para eleger governadores", cor: "from-slate-600 to-slate-900" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
      ], correta: "s", feedbackAcerto: "Correto. O Brasil já elegera presidentes por voto direto antes de 1964 (até 1960); a CF/88 restaurou esse direito.", feedbackErro: "Era voto direto desde 1960; a CF/88 o restaurou após décadas de escolha indireta." },
    ],
    falaFinal: "Você já entende os pilares da CF/88.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois grandes blocos de direitos da CF/88.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgRes,
    camadas: [
      { id: "ind", rotulo: "Direitos individuais e políticos", emoji: "⚖️", cor: "from-blue-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "Liberdade de expressão, proibição de tortura, voto direto e secreto, pluripartidarismo — protegem a pessoa e a participação política." },
      { id: "soc", rotulo: "Direitos sociais coletivos", emoji: "🏥", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Saúde (SUS), educação, trabalho, moradia, previdência — deveres do Estado que buscam reduzir desigualdades." },
    ],
    falaFinal: "Liberdade individual e proteção social caminham juntas na CF/88.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos da CF/88.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Da Constituinte aos direitos em ação",
    paradas: [
      { id: "con", emoji: "🏛️", rotulo: "1. Constituinte instalada (1987)", fotoUrl: imgDiretas, descricao: "Deputados e senadores eleitos em 1986 começam os trabalhos." },
      { id: "prom", emoji: "📖", rotulo: "2. Constituição promulgada (05/10/1988)", fotoUrl: imgDir, descricao: "Ulysses Guimarães declara: 'Temos ódio à ditadura'." },
      { id: "elec", emoji: "🗳️", rotulo: "3. Primeira eleição direta (1989)", fotoUrl: imgMpb, descricao: "Fernando Collor é eleito presidente pelo voto direto." },
      { id: "sus", emoji: "🏥", rotulo: "4. SUS regulamentado (1990)", fotoUrl: imgRes, descricao: "Lei 8.080/1990 cria o Sistema Único de Saúde." },
    ],
    ordemCerta: ["con", "prom", "elec", "sus"],
    feedbackAcerto: "Perfeito. Da Constituinte à regulamentação dos direitos sociais concretos.",
    feedbackErro: "Comece pela instalação da Constituinte (1987).",
    falaFinal: "4 marcos, 3 anos: da promessa constitucional à prática.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 7-B da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 7-B — Direitos civis, políticos e sociais na CF/88",
    paragrafos: [
      { id: "p1", texto: "A Constituição de 1988 organiza os DIREITOS CIVIS logo no Artigo 5º, com 78 incisos garantindo liberdade de expressão, proteção contra tortura e censura, e devido processo legal — respostas diretas aos abusos da ditadura militar.", chaves: ["Direitos Civis"], definicoes: { "Direitos Civis": "Direitos que garantem liberdade individual e proteção contra abusos do Estado." }, fotoUrl: imgDiretas },
      { id: "p2", texto: "Os DIREITOS POLÍTICOS foram restaurados: voto direto e secreto para presidente, governador e demais cargos, liberdade de criar partidos e de ser candidato. Em 1989, o Brasil elegeu presidente por voto direto pela primeira vez desde 1960.", chaves: ["Direitos Políticos"], definicoes: { "Direitos Políticos": "Direitos de participar da vida pública: votar, ser votado e se organizar politicamente." }, fotoUrl: imgDir },
      { id: "p3", texto: "A grande novidade foram os DIREITOS SOCIAIS (Artigo 6º): saúde, educação, trabalho, moradia, lazer, previdência e assistência social passaram a ser deveres do Estado. O SUS, criado em 1990, é o exemplo mais conhecido.", chaves: ["Direitos Sociais"], definicoes: { "Direitos Sociais": "Direitos que exigem ação do Estado para reduzir desigualdades: saúde, educação, trabalho, moradia." }, fotoUrl: imgMpb },
      { id: "p4", texto: "Por unir esses três tipos de direitos e por ter recebido mais de 12 milhões de assinaturas populares, a CF/88 ficou conhecida como CONSTITUIÇÃO CIDADÃ — expressão criada por Ulysses Guimarães ao promulgá-la, em 5 de outubro de 1988.", chaves: ["Constituição Cidadã"], definicoes: { "Constituição Cidadã": "Apelido da CF/88 por sua ampla participação popular e extensão de direitos." }, fotoUrl: imgRes },
    ],
    falaFinal: "Leitura concluída. A CF/88 é a base legal dos direitos que você tem hoje.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento à sua categoria de direito.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "civ", emoji: "⚖️", rotulo: "Direito Civil" },
      { id: "pol", emoji: "🗳️", rotulo: "Direito Político" },
      { id: "soc", emoji: "🏥", rotulo: "Direito Social" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Proibição da tortura", emoji: "🚫", cor: "from-blue-700 to-slate-900" }, municipioB: { nome: "Artigo 5º da CF/88", emoji: "⚖️", cor: "from-blue-600 to-slate-900" }, contexto: "Direitos individuais.", pecaCertaId: "civ", feedbackAcerto: "Correto. Direito civil.", feedbackErro: "É Direito Civil." },
      { id: "r2", municipioA: { nome: "Voto direto e secreto", emoji: "🗳️", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "Eleições a partir de 1989", emoji: "📅", cor: "from-emerald-600 to-slate-900" }, contexto: "Participação política.", pecaCertaId: "pol", feedbackAcerto: "Correto. Direito político.", feedbackErro: "É Direito Político." },
      { id: "r3", municipioA: { nome: "SUS", emoji: "🏥", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Saúde universal e gratuita", emoji: "💊", cor: "from-cyan-600 to-slate-900" }, contexto: "Regulamentado em 1990.", pecaCertaId: "soc", feedbackAcerto: "Correto. Direito social.", feedbackErro: "É Direito Social." },
      { id: "r4", municipioA: { nome: "Liberdade de criar partidos", emoji: "🎌", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "Pluripartidarismo", emoji: "🗳️", cor: "from-emerald-600 to-slate-900" }, contexto: "Vida política.", pecaCertaId: "pol", feedbackAcerto: "Correto. Direito político.", feedbackErro: "É Direito Político." },
      { id: "r5", municipioA: { nome: "Educação básica obrigatória", emoji: "🎒", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Dever do Estado", emoji: "🏫", cor: "from-cyan-600 to-slate-900" }, contexto: "Artigo 6º.", pecaCertaId: "soc", feedbackAcerto: "Correto. Direito social.", feedbackErro: "É Direito Social." },
      { id: "r6", municipioA: { nome: "Liberdade de expressão", emoji: "🗣️", cor: "from-blue-700 to-slate-900" }, municipioB: { nome: "Fim da censura", emoji: "📰", cor: "from-blue-600 to-slate-900" }, contexto: "Pós-ditadura.", pecaCertaId: "civ", feedbackAcerto: "Correto. Direito civil.", feedbackErro: "É Direito Civil." },
    ],
    falaFinal: "6 rodadas. Você já organiza direitos civis, políticos e sociais.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Distribuição dos artigos do Título II da CF/88 (Direitos e Garantias Fundamentais).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgMpb,
    fatias: [
      { id: "ind", rotulo: "Direitos individuais/políticos (~55%)", emoji: "⚖️", percentual: 55, cor: "#1d4ed8", descricao: "A maior parte do Título II trata de direitos e deveres individuais e coletivos, além dos direitos políticos.", exemplos: ["⚖️ Art. 5º", "🗳️ Art. 14"] },
      { id: "soc", rotulo: "Direitos sociais (~45%)", emoji: "🏥", percentual: 45, cor: "#0e7490", descricao: "O restante trata dos direitos sociais: saúde, educação, trabalho, moradia e previdência (Art. 6º a 11).", exemplos: ["🏥 Art. 6º", "👷 Art. 7º"] },
    ],
    falaFinal: "Direitos individuais e sociais dividem o núcleo da CF/88 quase meio a meio.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais sobre a CF/88.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgDiretas,
    perguntas: [
      { id: "av1", pergunta: "Os Direitos Sociais da CF/88 (Art. 6º) incluem:", opcoes: [
        { id: "a", texto: "Saúde, educação, trabalho e moradia.", correta: true },
        { id: "b", texto: "Apenas o direito ao voto.", correta: false },
        { id: "c", texto: "Apenas a liberdade de expressão.", correta: false },
          { id: "extra3", texto: "Preciso comparar outras evidências" },
      ], feedbackAcerto: "Correto. São deveres sociais do Estado.", feedbackErro: "Incluem saúde, educação, trabalho, moradia, entre outros." },
      { id: "av2", pergunta: "O SUS foi criado a partir da CF/88 e regulamentado em:", opcoes: [
        { id: "a", texto: "1990.", correta: true },
        { id: "b", texto: "1964.", correta: false },
        { id: "c", texto: "2000.", correta: false },
          { id: "extra3", texto: "Preciso comparar outras evidências" },
      ], feedbackAcerto: "Correto. Lei 8.080 de 1990.", feedbackErro: "Foi regulamentado em 1990." },
      { id: "av3", pergunta: "'Constituição Cidadã' é apelido dado por:", opcoes: [
        { id: "a", texto: "Ulysses Guimarães, na promulgação de 1988.", correta: true },
        { id: "b", texto: "Getúlio Vargas, em 1937.", correta: false },
        { id: "c", texto: "Um general da ditadura.", correta: false },
          { id: "extra3", texto: "Preciso comparar outras evidências" },
      ], feedbackAcerto: "Correto. Ele presidiu a Assembleia Constituinte.", feedbackErro: "Foi Ulysses Guimarães, presidente da Constituinte." },
    ],
    selo: { nome: "EF09HI23", subtitulo: "Direitos civis, políticos e sociais da CF/88", emoji: "📖", cor: "from-blue-500 to-slate-900", fotoUrl: imgMpb },
    falaFinal: "Você entende os direitos que a Constituição de 1988 garante a todo brasileiro.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Constituição Cidadã" },
};
