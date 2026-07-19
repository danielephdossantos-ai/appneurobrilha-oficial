import type { AulaGeoV1 } from "../../types";
import { url as debate } from "@/assets/filosofia-6ano/u4-debate.jpg.asset.json";
import { url as fakenews } from "@/assets/filosofia-6ano/u4-fakenews.jpg.asset.json";
import { url as balanca } from "@/assets/filosofia-6ano/u4-balanca.jpg.asset.json";

/**
 * Filosofia · 6º Ano · Unidade 4 · Aula 01
 * "Argumento vs Opinião: pensar com peso" — EF06FI04 (autoral).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-argumento-vs-opiniao",
  titulo: "Argumento vs Opinião",
  iconeTrilha: "⚖️",
  bncc: ["EF06FI04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olha esse celular. Nele vive uma guerra silenciosa.",
    mapaUrl: fakenews,
    imagemDestaqueUrl: fakenews,
    aurora:
      "Aprendiz, todo dia MILHÕES de mensagens brigam pela sua atenção. Umas são ARGUMENTOS — vêm com prova, fonte, raciocínio. Outras são só OPINIÕES gritadas — 'é assim porque eu acho'. Outras ainda são MENTIRAS bem embaladas — fake news. Se você não sabe distinguir, você é presa fácil.",
    falaFinal:
      "Nesta aula você aprende a pesar ideias como um filósofo pesa palavras — na balança do argumento.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: se duas pessoas discordam, o que decide QUEM está certo?",
    pergunta: "Quem ganha uma discussão séria?",
    opcoes: [
      { id: "grito", titulo: "QUEM GRITA MAIS", subtitulo: "impõe a opinião", emoji: "📢", cor: "from-red-400 to-orange-600" },
      { id: "argumento", titulo: "QUEM ARGUMENTA MELHOR", subtitulo: "com prova e razão", emoji: "⚖️", cor: "from-violet-400 to-purple-600" },
      { id: "amigos", titulo: "QUEM TEM MAIS AMIGOS", subtitulo: "concordando junto", emoji: "👥", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "argumento",
    feedbackAcerto: "Isso. Filosofia joga com ARGUMENTO — proposição sustentada por razão. Grito e maioria não provam nada.",
    feedbackErro: "Grito e maioria não decidem verdade. QUEM ARGUMENTA MELHOR (com prova e razão) tem o voto da filosofia.",
    falaFinal: "Argumento > grito. Argumento > multidão. Guarda essa.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras pra separar argumento de barulho.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "premissa", capa: "1. Premissa", emoji: "🧱", cor: "from-sky-500 to-blue-700",
        conteudo: "PREMISSA é o TIJOLO do argumento — uma afirmação que serve de base pra chegar a uma conclusão. Se a premissa é falsa, a conclusão desaba mesmo que o raciocínio pareça bonito.",
        exemplo: "Ex.: 'Todo humano é mortal (premissa). Sócrates é humano (premissa). Logo, Sócrates é mortal (conclusão).'",
        fotoUrl: balanca },
      { id: "conclusao", capa: "2. Conclusão", emoji: "🎯", cor: "from-violet-500 to-purple-700",
        conteudo: "CONCLUSÃO é o que se AFIRMA no fim, a partir das premissas. Uma boa conclusão SEGUE das premissas — não aparece do nada nem contradiz o que veio antes.",
        exemplo: "Ex.: se as premissas dizem 'chove' e 'quando chove, molha', a conclusão 'está molhado' é sólida.",
        fotoUrl: debate },
      { id: "falacia", capa: "3. Falácia", emoji: "🎭", cor: "from-red-500 to-orange-700",
        conteudo: "FALÁCIA é um argumento QUE PARECE bom mas é furado. Muitas fake news vivem de falácias — atacam a pessoa em vez do argumento, apelam pra emoção, generalizam sem base.",
        exemplo: "Ex.: 'Não escuta ele, é feio!' — ATAQUE PESSOAL, não vale nada como argumento.",
        fotoUrl: fakenews },
    ],
    falaFinal: "Premissa, conclusão, falácia. As 3 peças básicas pra pesar qualquer discurso.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 tipos de falácia que aparecem TODO dia. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: fakenews,
    pontos: [
      { id: "pessoa", x: 22, y: 30, emoji: "👤", cor: "from-red-500 to-orange-700",
        titulo: "1. Ataque à pessoa (ad hominem)",
        texto: "'Não vou escutar o que ele fala porque ele é ANTIPÁTICO.' Você atacou a PESSOA, não o argumento. O argumento pode ser ótimo mesmo vindo de alguém chato. Falácia clássica das redes sociais.",
        fotoUrl: debate },
      { id: "emocao", x: 70, y: 28, emoji: "😭", cor: "from-fuchsia-500 to-purple-700",
        titulo: "2. Apelo à emoção",
        texto: "'Se você não concorda comigo, é porque não pensa nas crianças!' Emocionou a plateia sem PROVAR nada. Usar emoção pra convencer é diferente de usar RAZÃO — cuidado.",
        fotoUrl: fakenews },
      { id: "generaliza", x: 28, y: 72, emoji: "🌐", cor: "from-amber-500 to-orange-700",
        titulo: "3. Generalização apressada",
        texto: "'Conheci um médico grosso, TODO médico é grosso.' Você tirou uma regra geral de UM caso. Precisa de amostra grande e representativa pra generalizar.",
        fotoUrl: balanca },
      { id: "autoridade", x: 74, y: 74, emoji: "🎓", cor: "from-slate-500 to-slate-700",
        titulo: "4. Apelo à autoridade errada",
        texto: "'Meu influencer favorito disse que essa dieta cura tudo, então é verdade.' Autoridade só vale NA ÁREA dela — um médico fala de saúde, não de política; um economista, de economia. Confundir isso é falácia.",
        fotoUrl: fakenews },
    ],
    falaFinal: "4 falácias. Se você identifica essas, seu radar contra fake news já melhorou 90%.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "O que faz de um raciocínio um ARGUMENTO válido?", fotoUrl: balanca,
        cards: [
          { id: "premissa", emoji: "🧱", titulo: "Premissas verdadeiras + conclusão que SEGUE delas", cor: "from-violet-500 to-purple-700" },
          { id: "gostei", emoji: "❤️", titulo: "A pessoa dizer com convicção e emoção", cor: "from-red-400 to-orange-600" },
          { id: "muitos", emoji: "👥", titulo: "Muita gente concordar ao mesmo tempo", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "premissa",
        feedbackAcerto: "Isso. Argumento = premissas + conclusão coerente. O resto é retórica.",
        feedbackErro: "Não é emoção nem maioria. É PREMISSA + CONCLUSÃO que segue dela." },
      { id: "q2", pergunta: "'Não escuta ele, ele é feio.' Isso é uma falácia do tipo…", fotoUrl: fakenews,
        cards: [
          { id: "ataque", emoji: "👤", titulo: "Ataque à pessoa (ad hominem)", cor: "from-red-500 to-orange-700" },
          { id: "emo", emoji: "😭", titulo: "Apelo à emoção", cor: "from-fuchsia-500 to-purple-700" },
          { id: "autoridade", emoji: "🎓", titulo: "Apelo à autoridade errada", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "ataque",
        feedbackAcerto: "Perfeito. Atacou a pessoa, não o argumento. Ad hominem clássico.",
        feedbackErro: "É ATAQUE À PESSOA (ad hominem) — o argumento dele pode ser ótimo mesmo assim." },
      { id: "q3", pergunta: "Por que 'muita gente acredita' NÃO prova que algo é verdade?", fotoUrl: debate,
        cards: [
          { id: "historia", emoji: "🌍", titulo: "Muita gente já acreditou em coisas depois provadas falsas", cor: "from-violet-500 to-purple-700" },
          { id: "chato", emoji: "😴", titulo: "Porque discordar é mais divertido", cor: "from-amber-400 to-orange-600" },
          { id: "sempre", emoji: "✅", titulo: "Na verdade, a maioria sempre está certa", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "historia",
        feedbackAcerto: "Isso. Já se acreditou que a Terra era plana. Verdade não se decide por votação.",
        feedbackErro: "Verdade não é enquete. Muita gente já defendeu bobagens graves — precisa de PROVA, não de multidão." },
    ],
    falaFinal: "Radar afinado. Você separa argumento de barulho.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Combater fake news exige AGÊNCIAS de checagem. Acenda os 5 estados brasileiros com maior número de agências de fact-checking ativas.",
    instrucao: "Acenda 5 estados com fact-checking forte",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "DF", "MG", "RS"], pergunta: "5 estados com mais agências de checagem ativas no Brasil:" },
    falaFinal: "SP, RJ, DF, MG e RS concentram a maior parte do trabalho de checagem — Aos Fatos, Lupa, Comprova e outros.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como CHECAR uma notícia antes de repassar? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Passos pra checar uma informação:",
    paradas: [
      { id: "pausa", emoji: "✋", rotulo: "1. PAUSE", descricao: "Antes de compartilhar, RESPIRE. Notícia que te dá raiva imediata é feita pra isso." },
      { id: "fonte", emoji: "🔎", rotulo: "2. QUAL A FONTE?", descricao: "Site conhecido? Jornalista assina? Ou é 'grupo do zap' anônimo?" },
      { id: "data", emoji: "📅", rotulo: "3. QUAL A DATA?", descricao: "Muita fake news é notícia VELHA reciclada como se fosse de hoje." },
      { id: "outras", emoji: "🔄", rotulo: "4. OUTRAS FONTES DIZEM?", descricao: "Cruze com 2 ou 3 veículos diferentes. Se só um site fala, desconfie." },
      { id: "compartilhar", emoji: "📤", rotulo: "5. SÓ ENTÃO COMPARTILHE", descricao: "Se passou nos 4 filtros, ok. Se não, DELETE — não seja parte do problema." },
    ],
    ordemCerta: ["pausa", "fonte", "data", "outras", "compartilhar"],
    feedbackAcerto: "Exato. Pausa → fonte → data → cruzamento → compartilhar. 30 segundos que fazem toda diferença.",
    feedbackErro: "A ordem é: 1) pausar, 2) checar fonte, 3) checar data, 4) cruzar com outros veículos, 5) só então compartilhar.",
    falaFinal: "5 passos. Filosofia aplicada ao WhatsApp da família.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Aprendiz",
    subtitulo: "Página 4 — Argumento vs Opinião",
    paragrafos: [
      { id: "p1", texto: "OPINIÃO é o que alguém acha. Todo mundo tem direito a uma. Mas OPINIÃO NÃO é ARGUMENTO. Argumento é opinião SUSTENTADA por razões, provas e raciocínio que aguenta contraexemplo.", chaves: ["opinião", "argumento"] },
      { id: "p2", texto: "Todo argumento tem PREMISSAS (afirmações de base) e CONCLUSÃO (o que se defende). Se as premissas são falsas, a conclusão desaba. Se a conclusão não SEGUE das premissas, o raciocínio é inválido, mesmo que soe bonito.", chaves: ["premissas", "conclusão"] },
      { id: "p3", texto: "FALÁCIAS são armadilhas de raciocínio. As mais comuns: ATAQUE À PESSOA (ad hominem), APELO À EMOÇÃO, GENERALIZAÇÃO APRESSADA e APELO À AUTORIDADE ERRADA. Fake news vivem disso — e ficam mais fortes quando compartilhamos sem pensar.", chaves: ["falácia", "fake news"] },
      { id: "p4", texto: "Filosofar é PENSAR COM PESO. Antes de aceitar (ou compartilhar) qualquer ideia, pergunte: qual é a premissa? A conclusão SEGUE? Não é falácia disfarçada? Esse hábito é o que separa o cidadão crítico do repetidor.", chaves: ["pensar com peso", "cidadão crítico"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CAÇA-FALÁCIAS! Cada rodada mostra uma frase — diga se é ARGUMENTO válido, ATAQUE PESSOAL, EMOÇÃO ou GENERALIZAÇÃO.",
    instrucao: "⏱️ Que tipo é essa frase?",
    duracaoSegundos: 12,
    pecas: [
      { id: "argumento", emoji: "⚖️", rotulo: "Argumento válido" },
      { id: "pessoa", emoji: "👤", rotulo: "Ataque à pessoa" },
      { id: "emocao", emoji: "😭", rotulo: "Apelo à emoção" },
      { id: "generaliza", emoji: "🌐", rotulo: "Generalização apressada" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "'Se você discorda, é porque não ama seu país'", emoji: "😭", cor: "from-fuchsia-400 to-purple-600" },
        municipioB: { nome: "Chantagem emocional sem argumento", emoji: "❤️", cor: "from-red-400 to-orange-600" },
        contexto: "Apelo forte à emoção, sem razão apresentada.", pecaCertaId: "emocao",
        feedbackAcerto: "Isso. É APELO À EMOÇÃO — chantagem, não argumento.",
        feedbackErro: "É APELO À EMOÇÃO: se você não concorda, é rotulado. Isso não é argumento." },
      { id: "r2", municipioA: { nome: "'Ele defende essa lei, mas é feio e mal-vestido — nem ouço'", emoji: "👤", cor: "from-red-400 to-orange-600" },
        municipioB: { nome: "Descartou o argumento pela aparência", emoji: "🎭", cor: "from-orange-400 to-red-600" },
        contexto: "Nada foi dito sobre o mérito da lei.", pecaCertaId: "pessoa",
        feedbackAcerto: "Perfeito. AD HOMINEM — atacou a pessoa, não a ideia.",
        feedbackErro: "É ATAQUE À PESSOA: aparência não tem nada a ver com o mérito do argumento." },
      { id: "r3", municipioA: { nome: "'Estudos apontam que dormir menos de 6h prejudica a memória; logo, dormir bem ajuda a aprender'", emoji: "⚖️", cor: "from-violet-400 to-purple-600" },
        municipioB: { nome: "Premissa com prova + conclusão coerente", emoji: "🧱", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Argumento sustentado por dado empírico.", pecaCertaId: "argumento",
        feedbackAcerto: "Isso. ARGUMENTO válido — premissa provada + conclusão que segue.",
        feedbackErro: "É ARGUMENTO VÁLIDO: tem dado + conclusão coerente." },
      { id: "r4", municipioA: { nome: "'Fui mal-atendido em UMA loja de perfume — logo, TODA loja de perfume trata mal'", emoji: "🌐", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Um caso virou regra geral sem amostra", emoji: "📊", cor: "from-yellow-400 to-orange-600" },
        contexto: "Uma experiência foi generalizada pra um universo inteiro.", pecaCertaId: "generaliza",
        feedbackAcerto: "Boa. GENERALIZAÇÃO APRESSADA clássica.",
        feedbackErro: "É GENERALIZAÇÃO APRESSADA: um caso não faz regra." },
      { id: "r5", municipioA: { nome: "'Vacinas reduzem em 90% os casos graves (fonte: OMS). Portanto, vacinar salva vidas'", emoji: "⚖️", cor: "from-violet-400 to-purple-600" },
        municipioB: { nome: "Premissa com fonte + conclusão que segue", emoji: "🧱", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Dado da OMS sustenta a conclusão.", pecaCertaId: "argumento",
        feedbackAcerto: "Isso. ARGUMENTO forte — premissa com fonte confiável + conclusão coerente.",
        feedbackErro: "É ARGUMENTO VÁLIDO: dado de fonte confiável (OMS) + conclusão que segue." },
      { id: "r6", municipioA: { nome: "'Só quem tem coração de pedra é contra essa ideia'", emoji: "😭", cor: "from-fuchsia-400 to-purple-600" },
        municipioB: { nome: "Rotulação emocional sem argumento", emoji: "🥺", cor: "from-red-400 to-pink-600" },
        contexto: "Quem discorda vira 'coração de pedra'.", pecaCertaId: "emocao",
        feedbackAcerto: "Perfeito. É APELO À EMOÇÃO — rótulo em vez de argumento.",
        feedbackErro: "É APELO À EMOÇÃO: rotular o adversário não prova nada." },
    ],
    falaFinal: "6 rodadas. Você distingue argumento das 3 falácias mais comuns. Radar afiado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: as 2 formas de convencer.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "retorica", rotulo: "RETÓRICA VAZIA (grito/emoção)", emoji: "📢", percentual: 50, cor: "#f97316",
        descricao: "Convence pelo som, pela emoção, pela repetição, pelo medo. Não precisa de prova. Rápido, viral, perigoso. É a matéria-prima da fake news.",
        exemplos: ["📢 Grito de líder", "😭 Chantagem emocional", "🔁 'Se muita gente compartilha, é verdade'"] },
      { id: "argumento", rotulo: "ARGUMENTO SÓLIDO (razão/prova)", emoji: "⚖️", percentual: 50, cor: "#8b5cf6",
        descricao: "Convence pela premissa verdadeira, pela prova, pelo raciocínio que aguenta contraexemplo. Lento, honesto, resistente. É a matéria-prima da filosofia e da ciência.",
        exemplos: ["🧱 Premissa + conclusão", "🔎 Fonte checável", "🔄 Aguenta contraexemplo"] },
    ],
    falaFinal: "Duas formas de convencer. Filosofia joga a segunda.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia CAÇADOR DE FALÁCIAS.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Qual a diferença entre OPINIÃO e ARGUMENTO?",
        opcoes: [
          { id: "a", texto: "Não tem diferença nenhuma", correta: false },
          { id: "b", texto: "Argumento é opinião SUSTENTADA por razões, provas e raciocínio", correta: true },
          { id: "c", texto: "Opinião só o presidente pode ter", correta: false },
        ],
        feedbackAcerto: "Isso. Todo argumento contém uma opinião — mas nem toda opinião é argumento.",
        feedbackErro: "Argumento é opinião COM prova e razão. Sem sustentação, é só palpite." },
      { id: "av2", pergunta: "'Não vou escutar essa pessoa, ela é feia.' Isso é:",
        opcoes: [
          { id: "a", texto: "Um argumento válido", correta: false },
          { id: "b", texto: "Uma falácia — ataque à pessoa (ad hominem)", correta: true },
          { id: "c", texto: "Apelo à emoção", correta: false },
        ],
        feedbackAcerto: "Perfeito. É AD HOMINEM — atacou a pessoa, não a ideia.",
        feedbackErro: "É AD HOMINEM: atacar aparência ignora o mérito do argumento." },
      { id: "av3", pergunta: "Antes de compartilhar uma notícia forte, qual o primeiro passo?",
        opcoes: [
          { id: "a", texto: "Mandar rapidinho pra todos os grupos", correta: false },
          { id: "b", texto: "PAUSAR e checar fonte, data e outras fontes", correta: true },
          { id: "c", texto: "Perguntar se meu grupo já viu", correta: false },
        ],
        feedbackAcerto: "Isso. Pausa, fonte, data, cruzamento. 30 segundos que evitam desinformação.",
        feedbackErro: "Antes de compartilhar: PAUSE, cheque FONTE, DATA e cruze com outros veículos." },
    ],
    selo: { nome: "Caçador de Falácias", subtitulo: "Insígnia do Pensamento Crítico", emoji: "⚖️", cor: "from-violet-400 to-purple-700" },
    falaFinal: "Insígnia conquistada! Você tem radar contra fake news e falácias.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Caçador de Falácias" },
};
