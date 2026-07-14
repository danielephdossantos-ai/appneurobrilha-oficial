import type { AulaGeoV1 } from "../../types";
import dnaImg from "@/assets/ciencias-8ano/u1/dna-helice.jpg";
import cromossomosImg from "@/assets/ciencias-8ano/u1/cromossomos-mitose.jpg";
import teoriaImg from "@/assets/ciencias-8ano/u1/teoria-celular-historia.jpg";
import organelasImg from "@/assets/ciencias-8ano/u1/organelas-citoplasma.jpg";
import mitocondriaImg from "@/assets/ciencias-8ano/u1/mitocondria.jpg";
import pesquisaImg from "@/assets/ciencias-8ano/u7/pesquisa-campo.jpg";

/**
 * Ciências · 9º Ano · U1 · A01 — "Instituto de Genética"
 * DNA, genes, hereditariedade, Leis de Mendel, evolução e biodiversidade.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-instituto-genetica",
  titulo: "Instituto de Genética",
  iconeTrilha: "🧬",
  recompensa: { xp: 160, moedas: 65, medalha: "Geneticista Júnior" },
  bncc: ["EF09CI08", "EF09CI09", "EF09CI10", "EF09CI11", "EF09CI12"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada do Instituto de Genética. Toque para iniciar.",
    mapaUrl: dnaImg,
    imagemDestaqueUrl: cromossomosImg,
    aurora:
      "Bem-vindo ao Centro Nacional de Pesquisa Científica. Instituto 1: Genética. Sua missão é entender como o DNA guarda informação, como características passam de pais para filhos e como espécies evoluem.",
    falaFinal:
      "Toda a biodiversidade da Terra é escrita com o mesmo alfabeto: A, T, C, G.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Problema: por que dois irmãos, filhos dos mesmos pais, podem ter cor de olhos diferentes?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: dnaImg,
    opcoes: [
      { id: "combi", titulo: "Combinação de genes", subtitulo: "cada filho recebe um sorteio diferente dos alelos", emoji: "🎲", cor: "from-emerald-500 to-teal-700" },
      { id: "ambiente", titulo: "É só o ambiente", subtitulo: "genes não influenciam", emoji: "🌦️", cor: "from-slate-500 to-slate-700" },
      { id: "acaso", titulo: "Puro acaso, sem causa", subtitulo: "não tem explicação", emoji: "❓", cor: "from-red-500 to-rose-700" },
    ],
    respostaCerta: "combi",
    feedbackAcerto:
      "Correto. Cada pai tem dois alelos por gene; cada filho recebe UM de cada. As combinações possíveis geram irmãos diferentes.",
    feedbackErro:
      "A cor dos olhos é fortemente determinada por GENES (não só ambiente) e segue as leis da hereditariedade descobertas por Mendel.",
    falaFinal:
      "Irmãos diferentes = sorteios genéticos diferentes. Foi o que Mendel descobriu em 1866.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da genética moderna.",
    instrucao: "Vocabulário do Instituto",
    cadernos: [
      { id: "dna", capa: "DNA", emoji: "🧬", cor: "from-indigo-500 to-purple-700", conteudo: "Molécula em dupla-hélice com o código da vida. Bases A, T, C, G formam pares (A-T, C-G).", exemplo: "Ex.: 3 bilhões de pares no genoma humano.", fotoUrl: dnaImg },
      { id: "gene", capa: "GENE", emoji: "🎯", cor: "from-fuchsia-500 to-pink-700", conteudo: "Trecho de DNA com a receita de UMA proteína ou característica. Humanos têm ~20 mil genes.", exemplo: "Ex.: gene da insulina, gene da cor dos olhos.", fotoUrl: dnaImg },
      { id: "cromo", capa: "CROMOSSOMO", emoji: "📚", cor: "from-sky-500 to-cyan-700", conteudo: "DNA superenrolado em bastões. Humanos têm 46 (23 pares). Um par vem do pai, outro da mãe.", exemplo: "Ex.: par 23 = XX (feminino) ou XY (masculino).", fotoUrl: cromossomosImg },
      { id: "alelo", capa: "ALELO", emoji: "🔀", cor: "from-emerald-500 to-teal-700", conteudo: "Cada uma das versões possíveis de um gene. Podem ser DOMINANTES (aparecem) ou RECESSIVOS (só aparecem em dose dupla).", exemplo: "Ex.: alelo B (marrom, dominante) e b (azul, recessivo).", fotoUrl: dnaImg },
      { id: "evo", capa: "EVOLUÇÃO", emoji: "🌱", cor: "from-amber-500 to-orange-700", conteudo: "Mudança das espécies ao longo de milhões de anos. Motor principal: SELEÇÃO NATURAL (Darwin, 1859).", exemplo: "Ex.: bico do tentilhão de Galápagos adaptado ao alimento.", fotoUrl: pesquisaImg },
    ],
    falaFinal:
      "DNA, gene, cromossomo, alelo, evolução. Cinco pilares da biologia contemporânea.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "DNA em detalhe. Toque em cada estrutura.",
    instrucao: "Toque nos pontos",
    mapaUrl: dnaImg,
    pontos: [
      { id: "helice", x: 50, y: 40, emoji: "🧬", cor: "from-indigo-500 to-purple-700", titulo: "Dupla-hélice", texto: "Duas fitas de DNA enroladas — como uma escada torcida. Descoberta por Watson, Crick e Rosalind Franklin (1953).", fotoUrl: dnaImg },
      { id: "bases", x: 30, y: 55, emoji: "🔤", cor: "from-fuchsia-500 to-pink-700", titulo: "Bases nitrogenadas", texto: "As letras do código: A pareia com T; C pareia com G. Sempre.", fotoUrl: dnaImg },
      { id: "gene", x: 70, y: 60, emoji: "🎯", cor: "from-emerald-500 to-teal-700", titulo: "Gene", texto: "Um trecho da fita com a receita para UMA proteína.", fotoUrl: dnaImg },
      { id: "cromo", x: 50, y: 80, emoji: "📚", cor: "from-sky-500 to-cyan-700", titulo: "Cromossomo", texto: "Todo o DNA condensado em bastões, empacotado no núcleo.", fotoUrl: cromossomosImg },
    ],
    falaFinal:
      "Da letra ao cromossomo: base → gene → cromossomo → genoma.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Quantos cromossomos tem uma célula humana comum?", fotoUrl: cromossomosImg,
        cards: [
          { id: "a", emoji: "🔢", titulo: "46 (23 pares)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔢", titulo: "23 no total", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔢", titulo: "100", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. 46 = 23 pares. Metade vem do pai, metade da mãe.",
        feedbackErro: "São 46 (23 pares). Gametas (óvulo/espermatozoide) é que têm só 23." },
      { id: "q2", pergunta: "O que é um ALELO DOMINANTE?", fotoUrl: dnaImg,
        cards: [
          { id: "a", emoji: "👑", titulo: "Versão que se manifesta mesmo em dose única", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❌", titulo: "Um gene defeituoso", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🤷", titulo: "Alelo que só existe em animais", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Basta uma cópia para o traço aparecer (ex.: olho marrom sobre azul).",
        feedbackErro: "Dominante = manda mesmo em dose única. Recessivo precisa de duas cópias." },
      { id: "q3", pergunta: "Qual é o motor principal da EVOLUÇÃO segundo Darwin?", fotoUrl: pesquisaImg,
        cards: [
          { id: "a", emoji: "🐦", titulo: "Seleção natural", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🎲", titulo: "Sorteio da natureza", cor: "from-slate-500 to-slate-700" },
          { id: "c", emoji: "🙏", titulo: "Vontade do indivíduo", cor: "from-red-500 to-rose-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Indivíduos mais adaptados deixam mais descendentes.",
        feedbackErro: "Darwin (1859): seleção natural. Indivíduos mais adaptados sobrevivem e se reproduzem mais." },
    ],
    falaFinal: "46 cromossomos, alelos dominantes/recessivos, seleção natural. Base pronta.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Compare GENÓTIPO (o que está escrito no DNA) e FENÓTIPO (o que se vê).",
    instrucao: "Toque nos interruptores",
    mapaUrl: dnaImg,
    camadas: [
      { id: "geno", rotulo: "Genótipo", emoji: "🧬", cor: "from-indigo-500 to-purple-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Conjunto dos ALELOS do indivíduo. Ex.: BB, Bb ou bb para o gene da cor dos olhos.", fotoUrl: dnaImg },
      { id: "feno", rotulo: "Fenótipo", emoji: "👁️", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "CARACTERÍSTICA visível. BB e Bb → marrom; bb → azul. É o resultado do genótipo + ambiente.", fotoUrl: cromossomosImg },
    ],
    falaFinal: "Genótipo é o código; fenótipo é o que aparece.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene o fluxo da informação genética.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Do DNA até a característica visível:",
    paradas: [
      { id: "dna", emoji: "🧬", rotulo: "1. DNA", descricao: "Guarda o código no núcleo.", fotoUrl: dnaImg },
      { id: "gene", emoji: "🎯", rotulo: "2. Gene", descricao: "Trecho específico com uma receita.", fotoUrl: dnaImg },
      { id: "prot", emoji: "🧪", rotulo: "3. Proteína", descricao: "A célula lê o gene e monta a proteína.", fotoUrl: organelasImg },
      { id: "carac", emoji: "👁️", rotulo: "4. Característica", descricao: "A proteína faz aparecer o traço (cor, altura...).", fotoUrl: cromossomosImg },
    ],
    ordemCerta: ["dna", "gene", "prot", "carac"],
    feedbackAcerto: "Perfeito. Dogma central: DNA → RNA → proteína → característica.",
    feedbackErro: "Ordem: DNA guarda; gene é o pedaço; proteína executa; característica aparece.",
    falaFinal: "Esse fluxo se repete o tempo todo nas suas células.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório do Instituto.",
    tituloLivro: "📓 Relatório · Do DNA à Biodiversidade",
    subtitulo: "Como a informação genética explica a diversidade da vida",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: por que existem milhões de espécies diferentes na Terra? A resposta está no DNA — variações acumuladas ao longo de bilhões de anos, filtradas pela SELEÇÃO NATURAL.", chaves: ["seleção natural"], definicoes: { "seleção natural": "Processo em que indivíduos mais adaptados sobrevivem e deixam mais descendentes." }, fotoUrl: pesquisaImg },
      { id: "p2", texto: "OBSERVAÇÃO: MENDEL, em 1866, cruzou ervilhas e descobriu que características passam em UNIDADES (hoje chamadas de GENES). Cada indivíduo herda um alelo do pai e um da mãe.", chaves: ["gene"], definicoes: { gene: "Trecho de DNA com a receita de uma característica." }, fotoUrl: dnaImg },
      { id: "p3", texto: "CONCLUSÃO: genética (o que herdo) + evolução (o que muda com o tempo) + biodiversidade (a variedade que existe) formam um triângulo. Proteger a biodiversidade é proteger o banco genético do planeta.", chaves: ["biodiversidade"], definicoes: { biodiversidade: "Variedade de vida em um ambiente ou no planeta." }, fotoUrl: pesquisaImg },
    ],
    falaFinal: "Genética + evolução = explicação científica da biodiversidade.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado: dominante ou recessivo?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "dom", emoji: "👑", rotulo: "Dominante" },
      { id: "rec", emoji: "🔽", rotulo: "Recessivo" },
      { id: "amb", emoji: "🌦️", rotulo: "Ambiente" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Olho marrom (BB ou Bb)", emoji: "👁️", cor: "from-amber-700 to-orange-900" }, municipioB: { nome: "Basta uma cópia B", emoji: "👑", cor: "from-emerald-500 to-teal-700" }, contexto: "Aparece com 1 ou 2 alelos B.", pecaCertaId: "dom", fotoUrl: dnaImg, feedbackAcerto: "Correto. Marrom é dominante.", feedbackErro: "Basta um alelo B → é DOMINANTE." },
      { id: "r2", municipioA: { nome: "Olho azul (bb)", emoji: "🔵", cor: "from-sky-500 to-blue-700" }, municipioB: { nome: "Só com bb (2 cópias)", emoji: "🔽", cor: "from-slate-500 to-slate-700" }, contexto: "Precisa dos dois alelos b.", pecaCertaId: "rec", fotoUrl: dnaImg, feedbackAcerto: "Sim. Recessivo aparece só em dose dupla.", feedbackErro: "Azul precisa de bb → RECESSIVO." },
      { id: "r3", municipioA: { nome: "Bronzeado da pele", emoji: "🌞", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Aumenta com sol", emoji: "🌦️", cor: "from-yellow-500 to-orange-700" }, contexto: "Não muda o DNA, só a expressão.", pecaCertaId: "amb", fotoUrl: pesquisaImg, feedbackAcerto: "Correto. Ambiente influencia o fenótipo.", feedbackErro: "Bronzeamento vem do SOL — efeito de AMBIENTE, não de gene novo." },
      { id: "r4", municipioA: { nome: "Fibrose cística", emoji: "🫁", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Precisa dos 2 alelos alterados", emoji: "🔽", cor: "from-slate-500 to-slate-700" }, contexto: "Doença genética.", pecaCertaId: "rec", fotoUrl: cromossomosImg, feedbackAcerto: "Sim. É uma doença recessiva clássica.", feedbackErro: "Só se manifesta com os DOIS alelos alterados → RECESSIVA." },
    ],
    falaFinal: "Dominante, recessivo e ambiente — você já sabe distinguir.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A genética moderna tem três eixos: HERANÇA, VARIAÇÃO e SELEÇÃO.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: dnaImg,
    fatias: [
      { id: "her", rotulo: "Herança", emoji: "👨‍👩‍👧", percentual: 34, cor: "#8b5cf6", descricao: "DNA passa de pais para filhos via gametas (Mendel).", exemplos: ["Alelos", "Cromossomos", "Genes"], fotoUrl: dnaImg },
      { id: "var", rotulo: "Variação", emoji: "🎲", percentual: 33, cor: "#f59e0b", descricao: "Mutações e combinações criam diferenças entre indivíduos.", exemplos: ["Mutação", "Meiose", "Recombinação"], fotoUrl: cromossomosImg },
      { id: "sel", rotulo: "Seleção", emoji: "🌱", percentual: 33, cor: "#10b981", descricao: "O ambiente escolhe quem se reproduz mais (Darwin).", exemplos: ["Predadores", "Clima", "Alimento"], fotoUrl: pesquisaImg },
    ],
    falaFinal: "Herança + variação + seleção = evolução. Fim do Instituto 1.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Responda 3 perguntas para receber a Certificação de Geneticista Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: dnaImg,
    perguntas: [
      { id: "q1", pergunta: "O que é um GENE?", fotoUrl: dnaImg,
        opcoes: [
          { id: "a", texto: "Trecho de DNA com a receita de uma proteína ou característica", correta: true },
          { id: "b", texto: "Uma organela do citoplasma" },
        ],
        feedbackAcerto: "Correto. Gene = pedaço de DNA com uma receita.",
        feedbackErro: "Gene NÃO é organela — é um trecho de DNA." },
      { id: "q2", pergunta: "Um casal Bb x Bb (marrom x marrom) — que chance de filho com olho azul (bb)?", fotoUrl: cromossomosImg,
        opcoes: [
          { id: "a", texto: "25% (1 em 4)", correta: true },
          { id: "b", texto: "0% — impossível" },
        ],
        feedbackAcerto: "Perfeito. Quadro de Mendel: BB / Bb / Bb / bb → 25% bb.",
        feedbackErro: "Cruzando Bb x Bb: 1 BB + 2 Bb + 1 bb → 25% de bb (olho azul)." },
      { id: "q3", pergunta: "O que explica a evolução das espécies?", fotoUrl: pesquisaImg,
        opcoes: [
          { id: "a", texto: "Seleção natural sobre variações genéticas (Darwin, 1859)", correta: true },
          { id: "b", texto: "Vontade individual dos animais" },
        ],
        feedbackAcerto: "Sim. Variação + seleção ao longo de gerações.",
        feedbackErro: "Darwin: seleção natural age sobre a variação genética já existente." },
    ],
    selo: { nome: "Certificação · Geneticista Júnior", subtitulo: "Instituto 1 · Genética", emoji: "🧬", cor: "from-violet-500 to-purple-700" },
    falaFinal: "Instituto 1 CONCLUÍDO. Próximo: Centro Biomédico.",
  },
};
