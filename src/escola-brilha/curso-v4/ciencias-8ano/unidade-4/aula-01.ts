import type { AulaGeoV1 } from "../../types";
import { url as laboratorioImg } from "@/assets/ciencias-7ano/u5-a1/laboratorio-quimica.jpg.asset.json";
import { url as moleculasImg } from "@/assets/ciencias-7ano/u5-a1/moleculas-atomos.jpg.asset.json";
import { url as transformacoesImg } from "@/assets/ciencias-7ano/u5-a1/transformacoes-materia.jpg.asset.json";
import { url as tabelaImg } from "@/assets/ciencias-8ano/u4/tabela-periodica.jpg.asset.json";
import { url as reacaoImg } from "@/assets/ciencias-8ano/u4/reacao-bicarbonato-vinagre.jpg.asset.json";
import { url as atomoImg } from "@/assets/ciencias-8ano/u4/atomo-modelo.jpg.asset.json";
import { url as moleculaAguaImg } from "@/assets/ciencias-8ano/u4/molecula-agua.jpg.asset.json";
import { url as ferrugemImg } from "@/assets/ciencias-8ano/u4/ferrugem-oxidacao.jpg.asset.json";

/**
 * Ciências · 8º Ano · U4 · A01 — "Laboratório de Química"
 * Átomos, elementos, tabela periódica, ligações e reações.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-laboratorio-quimica",
  titulo: "Laboratório de Química",
  iconeTrilha: "⚗️",
  recompensa: { xp: 140, moedas: 55, medalha: "Químico Júnior" },
  bncc: ["EF08CI03", "EF08CI04"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada com tabela periódica e vidrarias. Toque para iniciar.",
    mapaUrl: laboratorioImg,
    imagemDestaqueUrl: tabelaImg,
    aurora:
      "Setor 4: Laboratório de Química. Missão: entender que TUDO no universo é feito de cerca de 100 tipos de átomos organizados na TABELA PERIÓDICA.",
    falaFinal:
      "Química é o alfabeto do universo — átomos que se combinam formando tudo.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Problema: quando você mistura VINAGRE com BICARBONATO, borbulha. Mas água + açúcar não borbulha. Por quê?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: ferrugemImg,
    opcoes: [
      { id: "quimica", titulo: "Transformação QUÍMICA", subtitulo: "novas substâncias aparecem (gás)", emoji: "🧪", cor: "from-emerald-500 to-teal-700", fotoUrl: transformacoesImg },
      { id: "fisica", titulo: "Só transformação FÍSICA", subtitulo: "as substâncias continuam iguais", emoji: "💧", cor: "from-red-500 to-rose-700", fotoUrl: transformacoesImg },
      { id: "nenhuma", titulo: "Nada de especial", subtitulo: "coincidência", emoji: "❌", cor: "from-slate-500 to-slate-700", fotoUrl: transformacoesImg },
    ],
    respostaCerta: "quimica",
    feedbackAcerto:
      "Correto. Vinagre + bicarbonato → surge GÁS CARBÔNICO (CO₂) — substância NOVA. É uma reação química.",
    feedbackErro:
      "Se surge gás/cor/precipitado/calor onde não havia = transformação QUÍMICA. Água + açúcar só dissolve — física.",
    falaFinal:
      "Química = surgem substâncias novas. Física = só mudança de estado ou forma.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da química.",
    instrucao: "Vocabulário da matéria",
    cadernos: [
      { id: "atomo", capa: "ÁTOMO", emoji: "⚛️", cor: "from-sky-500 to-cyan-700", conteudo: "Menor partícula de um elemento químico. Núcleo (prótons + nêutrons) e eletrosfera (elétrons).", exemplo: "Ex.: átomo de hidrogênio (H) = 1 próton + 1 elétron.", fotoUrl: moleculasImg },
      { id: "elemento", capa: "ELEMENTO", emoji: "🔬", cor: "from-emerald-500 to-teal-700", conteudo: "Conjunto de átomos com o MESMO número de prótons. Cerca de 118 elementos conhecidos.", exemplo: "Ex.: ouro (Au) tem 79 prótons; oxigênio (O) tem 8.", fotoUrl: tabelaImg },
      { id: "molecula", capa: "MOLÉCULA", emoji: "🔗", cor: "from-indigo-500 to-purple-700", conteudo: "União de 2 ou mais átomos por ligações químicas.", exemplo: "Ex.: H₂O (água) = 2 hidrogênios + 1 oxigênio.", fotoUrl: moleculasImg },
      { id: "ligacao", capa: "LIGAÇÃO QUÍMICA", emoji: "🔒", cor: "from-amber-500 to-orange-700", conteudo: "Força que mantém átomos unidos. Três tipos principais: iônica, covalente e metálica.", exemplo: "Ex.: NaCl (sal) = ligação iônica; H₂O = covalente.", fotoUrl: moleculasImg },
      { id: "reacao", capa: "REAÇÃO QUÍMICA", emoji: "💥", cor: "from-red-500 to-rose-700", conteudo: "Transformação em que átomos se REARRANJAM, formando substâncias novas. Massa se conserva (Lavoisier).", exemplo: "Ex.: 2 H₂ + O₂ → 2 H₂O.", fotoUrl: transformacoesImg },
    ],
    falaFinal:
      "Átomo → elemento → molécula → ligação → reação. Cinco camadas da química.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Tabela Periódica organizada. Toque nas regiões.",
    instrucao: "Toque nas regiões da tabela",
    mapaUrl: tabelaImg,
    pontos: [
      { id: "metais", x: 30, y: 50, emoji: "⚙️", cor: "from-slate-500 to-slate-700", titulo: "Metais", texto: "Cerca de 75% dos elementos. Bons condutores de calor e eletricidade. Ex.: ferro (Fe), cobre (Cu), alumínio (Al).", fotoUrl: tabelaImg },
      { id: "naometais", x: 80, y: 30, emoji: "💨", cor: "from-emerald-500 to-teal-700", titulo: "Não-metais", texto: "Formam a vida (C, H, O, N) e o ar. Maus condutores. Ex.: carbono, oxigênio, cloro.", fotoUrl: tabelaImg },
      { id: "nobres", x: 90, y: 25, emoji: "✨", cor: "from-amber-500 to-orange-700", titulo: "Gases nobres", texto: "Última coluna. Muito estáveis, quase não reagem. Ex.: hélio (balões), neônio (letreiros).", fotoUrl: tabelaImg },
      { id: "alcalinos", x: 15, y: 30, emoji: "💥", cor: "from-red-500 to-rose-700", titulo: "Metais alcalinos", texto: "Primeira coluna. Extremamente reativos. Ex.: sódio, potássio.", fotoUrl: tabelaImg },
    ],
    falaFinal:
      "Cada COLUNA agrupa elementos com propriedades semelhantes. Genial invenção de Mendeleev (1869).",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Quantos ELEMENTOS químicos existem aproximadamente?", fotoUrl: tabelaImg,
        cards: [
          { id: "a", emoji: "🔬", titulo: "Cerca de 118", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌍", titulo: "Milhões", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🔟", titulo: "Só 10", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. 118 elementos organizados na tabela periódica.",
        feedbackErro: "Existem MILHÕES de moléculas, mas só ~118 elementos. Diferentes combinações geram infinitas substâncias." },
      { id: "q2", pergunta: "H₂O representa uma...", fotoUrl: moleculasImg,
        cards: [
          { id: "a", emoji: "🔗", titulo: "Molécula (2 H + 1 O)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "⚛️", titulo: "Átomo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "💎", titulo: "Elemento", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. União de átomos = molécula. H₂O = água.",
        feedbackErro: "Átomo é só UM. Elemento é o tipo. União de átomos = MOLÉCULA." },
      { id: "q3", pergunta: "Quem enunciou 'na natureza nada se cria, nada se perde, tudo se transforma'?", fotoUrl: laboratorioImg,
        cards: [
          { id: "a", emoji: "⚖️", titulo: "Lavoisier (conservação da massa)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🍎", titulo: "Newton", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧬", titulo: "Darwin", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Lavoisier, séc. XVIII — pai da química moderna.",
        feedbackErro: "Newton = física. Darwin = biologia. Massa em química = LAVOISIER." },
    ],
    falaFinal:
      "118 elementos, moléculas por combinação, Lavoisier fundou a química moderna.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "As transformações da matéria se dividem em duas categorias. Toque nos interruptores.",
    instrucao: "Toque nos interruptores",
    mapaUrl: transformacoesImg,
    camadas: [
      { id: "fisica", rotulo: "Transformação Física", emoji: "💧", cor: "from-sky-500 to-cyan-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Muda estado ou forma, MAS a substância continua a MESMA. Reversível. Ex.: gelo derrete, água ferve, papel rasga.", fotoUrl: transformacoesImg },
      { id: "quimica", rotulo: "Transformação Química", emoji: "🧪", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Aparecem substâncias NOVAS. Geralmente irreversível. Sinais: gás, cor, calor, precipitado. Ex.: queimar, enferrujar, cozinhar ovo.", fotoUrl: transformacoesImg },
    ],
    falaFinal:
      "Física = mesma substância. Química = substância nova.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os NÍVEIS DE ORGANIZAÇÃO DA MATÉRIA — do menor ao maior.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Do menor ao maior:",
    paradas: [
      { id: "particula", emoji: "🔵", rotulo: "1. Partículas subatômicas", descricao: "Prótons, nêutrons, elétrons.", fotoUrl: moleculasImg },
      { id: "atomo", emoji: "⚛️", rotulo: "2. Átomo", descricao: "Menor unidade de um elemento.", fotoUrl: moleculasImg },
      { id: "molecula", emoji: "🔗", rotulo: "3. Molécula", descricao: "Vários átomos ligados.", fotoUrl: moleculasImg },
      { id: "substancia", emoji: "💎", rotulo: "4. Substância", descricao: "Muitíssimas moléculas iguais.", fotoUrl: laboratorioImg },
      { id: "objeto", emoji: "🧊", rotulo: "5. Objeto material", descricao: "Corpo formado por substâncias.", fotoUrl: laboratorioImg },
    ],
    ordemCerta: ["particula", "atomo", "molecula", "substancia", "objeto"],
    feedbackAcerto:
      "Perfeito. Cinco escalas da matéria — do subatômico ao visível.",
    feedbackErro:
      "Do menor ao maior: partículas → átomo → molécula → substância → objeto.",
    falaFinal:
      "Essa hierarquia estrutura toda a química.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório da bancada química.",
    tituloLivro: "📓 Relatório · Vinagre + Bicarbonato",
    subtitulo: "Análise de uma reação química cotidiana",
    paragrafos: [
      { id: "p1", texto: "PROCEDIMENTO: em um copo, adicionamos uma colher de bicarbonato de sódio (NaHCO₃). Sobre ele, despejamos vinagre (ácido acético, CH₃COOH). Efervescência imediata: bolhas sobem em grande volume.", chaves: ["efervescência"], definicoes: { efervescência: "Liberação intensa de gás em líquido." }, fotoUrl: transformacoesImg },
      { id: "p2", texto: "EXPLICAÇÃO: os átomos se REARRANJAM. Do ácido acético + bicarbonato surgem três substâncias NOVAS: acetato de sódio (dissolvido), ÁGUA (H₂O) e GÁS CARBÔNICO (CO₂). O CO₂ é o gás das bolhas.", chaves: ["rearranjam"], definicoes: { rearranjam: "Ligações antigas se quebram e novas se formam." }, fotoUrl: moleculasImg },
      { id: "p3", texto: "CONSERVAÇÃO DA MASSA: a massa TOTAL dos produtos (acetato + água + CO₂) = massa dos reagentes (vinagre + bicarbonato). Nada se perde — o CO₂ apenas escapa como gás. Lei de Lavoisier confirmada.", chaves: ["conservação"], definicoes: { conservação: "Princípio: massa antes = massa depois." }, fotoUrl: laboratorioImg },
    ],
    falaFinal:
      "Uma reação simples ilustra todo o coração da química moderna.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado: transformação física ou química?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "fisica", emoji: "💧", rotulo: "Física" },
      { id: "quimica", emoji: "🧪", rotulo: "Química" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Gelo derretendo", emoji: "🧊", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Continua sendo água", emoji: "💧", cor: "from-indigo-500 to-purple-700" }, contexto: "Muda de estado apenas.", pecaCertaId: "fisica", fotoUrl: transformacoesImg, feedbackAcerto: "Física. Substância continua H₂O.", feedbackErro: "Ainda é água — só mudou de estado. FÍSICA." },
      { id: "r2", municipioA: { nome: "Ferro enferrujando", emoji: "🔩", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Aparece óxido de ferro", emoji: "🟫", cor: "from-amber-500 to-orange-700" }, contexto: "Superfície muda de cor.", pecaCertaId: "quimica", fotoUrl: transformacoesImg, feedbackAcerto: "Química. Fe + O₂ → Fe₂O₃ (ferrugem).", feedbackErro: "Aparece substância NOVA (ferrugem). É QUÍMICA." },
      { id: "r3", municipioA: { nome: "Queimar papel", emoji: "🔥", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Vira cinza + CO₂", emoji: "💨", cor: "from-slate-500 to-slate-700" }, contexto: "Combustão libera calor e gás.", pecaCertaId: "quimica", fotoUrl: transformacoesImg, feedbackAcerto: "Química. Combustão gera substâncias novas.", feedbackErro: "Combustão sempre é QUÍMICA — surgem CO₂, H₂O e cinzas." },
      { id: "r4", municipioA: { nome: "Rasgar folha de papel", emoji: "📄", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Continua sendo papel", emoji: "🧻", cor: "from-sky-500 to-cyan-700" }, contexto: "Só muda a forma.", pecaCertaId: "fisica", fotoUrl: transformacoesImg, feedbackAcerto: "Física. Só mudou o tamanho.", feedbackErro: "Substância continua a MESMA — só forma mudou. FÍSICA." },
    ],
    falaFinal:
      "Você já distingue física e química em qualquer situação.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "A química se organiza em duas frentes: ESTRUTURA (do que é feito) e TRANSFORMAÇÃO (o que acontece).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: laboratorioImg,
    fatias: [
      { id: "estrutura", rotulo: "Estrutura", emoji: "⚛️", percentual: 50, cor: "#10b981", descricao: "Átomos, elementos, moléculas, ligações, tabela periódica. O que forma a matéria.", exemplos: ["Átomo", "H₂O", "Tabela"], fotoUrl: tabelaImg },
      { id: "transformacao", rotulo: "Transformação", emoji: "🧪", percentual: 50, cor: "#f59e0b", descricao: "Reações químicas. Como átomos se rearranjam formando substâncias novas. Massa se conserva.", exemplos: ["Combustão", "Ferrugem", "Cozinhar"], fotoUrl: transformacoesImg },
    ],
    falaFinal:
      "Estrutura e transformação: as duas metades da química. Fim do Setor 4.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Setor 4. Responda 3 perguntas para sua Certificação de Químico Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: laboratorioImg,
    perguntas: [
      { id: "q1", pergunta: "O que diferencia um ELEMENTO de outro?", fotoUrl: tabelaImg,
        opcoes: [
          { id: "a", texto: "O número de PRÓTONS no núcleo", correta: true },
          { id: "b", texto: "O tamanho da molécula" },
        ],
        feedbackAcerto: "Sim. Prótons definem o elemento. H = 1, O = 8, Au = 79.",
        feedbackErro: "Elemento é definido pelo número de PRÓTONS. Tamanho da molécula varia." },
      { id: "q2", pergunta: "Que sinais indicam que ocorreu uma REAÇÃO QUÍMICA?", fotoUrl: transformacoesImg,
        opcoes: [
          { id: "a", texto: "Liberação de gás, mudança de cor, calor ou precipitado", correta: true },
          { id: "b", texto: "Apenas cheiro forte" },
        ],
        feedbackAcerto: "Correto. Esses quatro sinais indicam substâncias novas.",
        feedbackErro: "Cheiro pode indicar, mas os quatro sinais clássicos são gás, cor, calor e precipitado." },
      { id: "q3", pergunta: "Numa reação química, a MASSA TOTAL...", fotoUrl: laboratorioImg,
        opcoes: [
          { id: "a", texto: "Se conserva (massa dos reagentes = massa dos produtos)", correta: true },
          { id: "b", texto: "Sempre diminui — parte da matéria some" },
        ],
        feedbackAcerto: "Perfeito. Lei de Lavoisier: massa se conserva sempre.",
        feedbackErro: "Matéria NUNCA some. Se parece que sumiu, virou gás. Lavoisier: massa se conserva." },
    ],
    selo: { nome: "Certificação · Químico Júnior", subtitulo: "Setor 4 · Química da Matéria", emoji: "⚗️", cor: "from-emerald-500 to-teal-700" },
    falaFinal:
      "Setor 4 CONCLUÍDO. Próximo: Centro de Engenharia — energia e tecnologia.",
  },
};
