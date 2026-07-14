import type { AulaGeoV1 } from "../../types";
import { url as microscopioImg } from "@/assets/ciencias-7ano/u1-a1/microscopio-otico.jpg.asset.json";
import { url as celulaAnimalImg } from "@/assets/ciencias-7ano/u1-a1/celula-animal.jpg.asset.json";
import { url as celulaVegetalImg } from "@/assets/ciencias-7ano/u1-a1/celula-vegetal.jpg.asset.json";
import { url as niveisImg } from "@/assets/ciencias-7ano/u1-a1/niveis-organizacao.jpg.asset.json";
import mitoseVideo from "@/assets/ciencias-7ano/u1-a1/mitose-celular.mp4.asset.json";
import { url as dnaImg } from "@/assets/ciencias-8ano/u1/dna-helice.jpg.asset.json";
import { url as mitocondriaImg } from "@/assets/ciencias-8ano/u1/mitocondria.jpg.asset.json";
import { url as organelasImg } from "@/assets/ciencias-8ano/u1/organelas-citoplasma.jpg.asset.json";
import { url as cromossomosImg } from "@/assets/ciencias-8ano/u1/cromossomos-mitose.jpg.asset.json";
import { url as teoriaCelularImg } from "@/assets/ciencias-8ano/u1/teoria-celular-historia.jpg.asset.json";

/**
 * Ciências · 8º Ano · U1 · A01 — "Laboratório de Biologia Celular"
 * Da teoria celular ao DNA: como a informação da vida é copiada e transmitida.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-laboratorio-biologia-celular",
  titulo: "Laboratório de Biologia Celular",
  iconeTrilha: "🧬",
  recompensa: { xp: 140, moedas: 55, medalha: "Citologista Júnior" },
  bncc: ["EF08CI06", "EF08CI07"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada do Laboratório Celular. Toque para iniciar a missão.",
    mapaUrl: microscopioImg,
    imagemDestaqueUrl: dnaImg,
    aurora:
      "Bem-vindo ao Instituto de Ciências Aplicadas. Setor 1: Biologia Celular. Sua missão como Pesquisador é entender como uma célula guarda informação (DNA), copia-se (mitose) e forma tecidos.",
    falaFinal:
      "Toda vida na Terra usa o mesmo código: DNA. É o alfabeto biológico universal.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Problema: quando você se corta e a pele cicatriza, o que acontece com as células?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: celulaAnimalImg,
    opcoes: [
      { id: "novas", titulo: "Células antigas se DIVIDEM", subtitulo: "cada uma vira duas idênticas", emoji: "🧬", cor: "from-emerald-500 to-teal-700", fotoUrl: celulaAnimalImg },
      { id: "crescem", titulo: "Células ficam maiores", subtitulo: "sem dividir, só incham", emoji: "📈", cor: "from-slate-500 to-slate-700", fotoUrl: celulaAnimalImg },
      { id: "aparecem", titulo: "Surgem do nada", subtitulo: "geração espontânea", emoji: "❌", cor: "from-red-500 to-rose-700", fotoUrl: celulaAnimalImg },
    ],
    respostaCerta: "novas",
    feedbackAcerto:
      "Correto. A cicatrização acontece por MITOSE — cada célula se divide em duas idênticas geneticamente. Louis Pasteur derrubou a geração espontânea em 1861.",
    feedbackErro:
      "Nada vivo surge do nada (Pasteur, 1861). Célula só nasce de outra célula, por DIVISÃO. É a base da teoria celular.",
    falaFinal:
      "Toda célula vem de outra célula. Princípio central da biologia moderna.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco conceitos-chave. Um traz microscopia real: mitose acelerada.",
    instrucao: "Vocabulário da célula",
    cadernos: [
      { id: "teoria", capa: "TEORIA CELULAR", emoji: "📜", cor: "from-violet-500 to-purple-700", conteudo: "Três princípios: (1) todo ser vivo é feito de células, (2) a célula é a unidade funcional da vida, (3) toda célula vem de outra célula.", exemplo: "Formulada por Schleiden, Schwann e Virchow (séc. XIX).", fotoUrl: teoriaCelularImg },
      { id: "dna", capa: "DNA", emoji: "🧬", cor: "from-indigo-500 to-purple-700", conteudo: "Molécula em dupla-hélice que guarda o CÓDIGO GENÉTICO. Formada por 4 bases: A, T, C, G. Fica dentro do núcleo.", exemplo: "Ex.: 3 bilhões de pares de bases no genoma humano.", fotoUrl: dnaImg },
      { id: "gene", capa: "GENE", emoji: "🎯", cor: "from-fuchsia-500 to-pink-700", conteudo: "Trecho de DNA que carrega a RECEITA de uma característica ou proteína. O humano tem cerca de 20 mil genes.", exemplo: "Ex.: gene da cor dos olhos, gene da insulina.", fotoUrl: dnaImg },
      { id: "mitose", capa: "MITOSE", emoji: "✂️", cor: "from-sky-500 to-cyan-700", conteudo: "Divisão celular que gera DUAS células-filhas GENETICAMENTE IGUAIS. Base do crescimento, cicatrização e reprodução assexuada.", exemplo: "Ex.: cicatrização de um corte na pele.", videoUrl: mitoseVideo.url },
      { id: "microrganismo", capa: "MICRORGANISMO", emoji: "🦠", cor: "from-emerald-500 to-green-700", conteudo: "Ser vivo microscópico (bactéria, arqueia, protozoário, fungo unicelular, vírus). Alguns causam doenças, muitos são úteis.", exemplo: "Ex.: Lactobacillus no iogurte; E. coli no intestino.", fotoUrl: microscopioImg },
    ],
    falaFinal:
      "Teoria celular, DNA, gene, mitose, microrganismo. Cinco chaves da biologia moderna.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Célula animal em detalhe. Toque em cada organela.",
    instrucao: "Toque nas organelas",
    mapaUrl: celulaAnimalImg,
    pontos: [
      { id: "nucleo", x: 45, y: 42, emoji: "🧬", cor: "from-indigo-500 to-purple-700", titulo: "Núcleo", texto: "Contém o DNA organizado em cromossomos. Comanda a síntese de proteínas e a divisão celular.", fotoUrl: dnaImg },
      { id: "mitocondria", x: 75, y: 50, emoji: "🔋", cor: "from-red-500 to-rose-700", titulo: "Mitocôndria", texto: "Faz respiração celular: glicose + O₂ → ATP (energia química da célula).", fotoUrl: mitocondriaImg },
      { id: "reticulo", x: 25, y: 65, emoji: "🕸️", cor: "from-amber-500 to-orange-700", titulo: "Retículo endoplasmático", texto: "Rede de canais que sintetiza proteínas (rugoso) e lipídios (liso).", fotoUrl: organelasImg },
      { id: "golgi", x: 65, y: 75, emoji: "📦", cor: "from-emerald-500 to-teal-700", titulo: "Complexo de Golgi", texto: "Empacota e envia proteínas para dentro ou fora da célula. Como o setor de expedição.", fotoUrl: organelasImg },
    ],
    falaFinal:
      "Cada organela tem função específica — como órgãos dentro da célula.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Onde fica o DNA na célula eucarionte?", fotoUrl: dnaImg,
        cards: [
          { id: "a", emoji: "🧬", titulo: "No núcleo (organizado em cromossomos)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔋", titulo: "Na mitocôndria (só ali)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🛡️", titulo: "Grudado na membrana", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Núcleo delimitado = eucarionte. Ali fica quase todo o DNA.",
        feedbackErro: "Há um pouco de DNA na mitocôndria, mas a MAIOR PARTE fica no NÚCLEO." },
      { id: "q2", pergunta: "O que a MITOSE produz?", fotoUrl: cromossomosImg,
        cards: [
          { id: "a", emoji: "🧬", titulo: "Duas células idênticas à mãe", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌱", titulo: "Uma célula vegetal e uma animal", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "❓", titulo: "Quatro células diferentes", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Mitose = 2 filhas IDÊNTICAS. (Meiose sim gera 4 diferentes.)",
        feedbackErro: "Mitose gera SEMPRE 2 idênticas. Meiose (só nos gametas) gera 4 diferentes." },
      { id: "q3", pergunta: "Qual pesquisador destruiu a ideia de geração espontânea?", fotoUrl: microscopioImg,
        cards: [
          { id: "a", emoji: "🧪", titulo: "Louis Pasteur (1861)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🍎", titulo: "Isaac Newton", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌍", titulo: "Charles Darwin", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Pasteur mostrou com os frascos 'pescoço de cisne' que microrganismos vêm do ar.",
        feedbackErro: "Pasteur, 1861. Newton = física; Darwin = evolução." },
    ],
    falaFinal:
      "Você já domina a base: DNA no núcleo, mitose = 2 idênticas, Pasteur derrubou a geração espontânea.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Compare CÉLULA ANIMAL e CÉLULA VEGETAL. Toque nos interruptores.",
    instrucao: "Toque nos interruptores",
    mapaUrl: celulaAnimalImg,
    camadas: [
      { id: "animal", rotulo: "Célula Animal", emoji: "🐾", cor: "from-rose-500 to-pink-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Sem parede celular, sem cloroplastos, vacúolos pequenos. Membrana flexível. Formato arredondado ou irregular.", fotoUrl: celulaAnimalImg },
      { id: "vegetal", rotulo: "Célula Vegetal", emoji: "🌿", cor: "from-emerald-500 to-green-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Parede de CELULOSE (rígida), CLOROPLASTOS (fotossíntese), VACÚOLO CENTRAL enorme. Formato geométrico.", fotoUrl: celulaVegetalImg },
    ],
    falaFinal:
      "Base comum (membrana, núcleo, mitocôndria). Diferenças: só a vegetal tem parede, cloroplasto e vacúolo grande.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as fases da MITOSE.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Do início ao fim da divisão celular:",
    paradas: [
      { id: "intersefase", emoji: "🧬", rotulo: "1. Intérfase", descricao: "Célula duplica o DNA.", fotoUrl: dnaImg },
      { id: "prof", emoji: "🎯", rotulo: "2. Prófase", descricao: "Cromossomos se condensam. Membrana nuclear desaparece.", fotoUrl: cromossomosImg },
      { id: "meta", emoji: "➖", rotulo: "3. Metáfase", descricao: "Cromossomos se alinham no centro.", fotoUrl: cromossomosImg },
      { id: "ana", emoji: "↔️", rotulo: "4. Anáfase", descricao: "Cromátides-irmãs se separam.", fotoUrl: cromossomosImg },
      { id: "telo", emoji: "🔀", rotulo: "5. Telófase", descricao: "Duas células-filhas se formam.", fotoUrl: celulaAnimalImg },
    ],
    ordemCerta: ["intersefase", "prof", "meta", "ana", "telo"],
    feedbackAcerto:
      "Perfeito. IPMAT: Intérfase, Prófase, Metáfase, Anáfase, Telófase.",
    feedbackErro:
      "Mnemônico: I-P-M-A-T. Intérfase → Prófase → Metáfase → Anáfase → Telófase.",
    falaFinal:
      "Essa sequência se repete bilhões de vezes por dia no seu corpo.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório da bancada.",
    tituloLivro: "📓 Relatório · Ciclo Celular e Continuidade da Vida",
    subtitulo: "Do DNA à formação de tecidos",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: como um único óvulo fecundado dá origem a um corpo com 37 trilhões de células? A resposta é MITOSE repetida bilhões de vezes, controlada por genes do DNA.", chaves: ["mitose", "genes"], definicoes: { mitose: "Divisão que gera 2 células-filhas idênticas.", genes: "Trechos de DNA com receitas para proteínas." }, fotoUrl: dnaImg },
      { id: "p2", texto: "OBSERVAÇÃO: antes de cada divisão, a célula DUPLICA todo o DNA (intérfase). Depois, cromossomos condensam, alinham, separam e a célula parte-se em duas. Todo o processo demora horas.", chaves: ["cromossomos"], definicoes: { cromossomos: "DNA condensado em bastões visíveis ao microscópio." }, fotoUrl: cromossomosImg },
      { id: "p3", texto: "CONCLUSÃO: a continuidade da vida depende de dois pilares — a MOLÉCULA de DNA (informação) e o PROCESSO de mitose (execução). Erros na cópia podem gerar mutações; algumas são benéficas (evolução), outras causam doenças.", chaves: ["mutações"], definicoes: { mutações: "Alterações na sequência do DNA." }, fotoUrl: dnaImg },
    ],
    falaFinal:
      "Informação (DNA) + execução (mitose) = continuidade da vida.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio cronometrado: classifique corretamente.",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "animal", emoji: "🐾", rotulo: "Só animal" },
      { id: "vegetal", emoji: "🌱", rotulo: "Só vegetal" },
      { id: "ambas", emoji: "🔗", rotulo: "Ambas" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Parede celular", emoji: "🧱", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Celulose rígida", emoji: "🌾", cor: "from-emerald-500 to-teal-700" }, contexto: "Camada externa que dá forma geométrica.", pecaCertaId: "vegetal", fotoUrl: celulaVegetalImg, feedbackAcerto: "Só vegetal. Animal não tem parede.", feedbackErro: "Célula animal é flexível — não tem parede. Só vegetal." },
      { id: "r2", municipioA: { nome: "Núcleo com DNA", emoji: "🧬", cor: "from-indigo-500 to-purple-700" }, municipioB: { nome: "Cromossomos", emoji: "📚", cor: "from-sky-500 to-cyan-700" }, contexto: "Centro de comando genético.", pecaCertaId: "ambas", fotoUrl: dnaImg, feedbackAcerto: "Ambas — toda eucarionte tem núcleo.", feedbackErro: "Núcleo existe nas duas — é o que define eucarionte." },
      { id: "r3", municipioA: { nome: "Cloroplasto", emoji: "🌿", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Faz fotossíntese", emoji: "☀️", cor: "from-yellow-500 to-amber-700" }, contexto: "Capta luz solar e produz glicose.", pecaCertaId: "vegetal", fotoUrl: celulaVegetalImg, feedbackAcerto: "Só vegetal — animal não faz fotossíntese.", feedbackErro: "Animal não faz fotossíntese. Cloroplasto é exclusivo de plantas e algas." },
      { id: "r4", municipioA: { nome: "Mitocôndria", emoji: "🔋", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Produz ATP", emoji: "⚡", cor: "from-amber-500 to-yellow-700" }, contexto: "Respiração celular.", pecaCertaId: "ambas", fotoUrl: mitocondriaImg, feedbackAcerto: "Ambas — plantas também respiram.", feedbackErro: "Plantas TAMBÉM respiram e precisam de mitocôndria." },
    ],
    falaFinal:
      "Você já distingue animal, vegetal e o que ambas compartilham.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "A célula funciona em dois grandes eixos: INFORMAÇÃO (núcleo/DNA) e METABOLISMO (organelas/energia).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: niveisImg,
    fatias: [
      { id: "info", rotulo: "Informação", emoji: "🧬", percentual: 40, cor: "#8b5cf6", descricao: "Núcleo + DNA + cromossomos + genes. Comanda o que a célula produz e quando se divide.", exemplos: ["DNA", "Gene", "Cromossomo"], fotoUrl: dnaImg },
      { id: "meta", rotulo: "Metabolismo", emoji: "⚡", percentual: 60, cor: "#f59e0b", descricao: "Mitocôndria, retículo, Golgi. Produz energia (ATP), sintetiza e envia proteínas.", exemplos: ["Mitocôndria", "Ribossomo", "Golgi"], fotoUrl: mitocondriaImg },
    ],
    falaFinal:
      "Informação e metabolismo integrados. Fim do Setor 1.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Setor 1. Responda 3 perguntas para receber sua Certificação de Citologista Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: microscopioImg,
    perguntas: [
      { id: "q1", pergunta: "Quais são os três princípios da teoria celular?", fotoUrl: teoriaCelularImg,
        opcoes: [
          { id: "a", texto: "Todo ser vivo é feito de células; célula é unidade funcional; toda célula vem de outra célula", correta: true },
          { id: "b", texto: "Toda vida vem do sol; célula é como um tijolo; DNA existe só em animais" },
        ],
        feedbackAcerto: "Correto. Schleiden, Schwann e Virchow (séc. XIX).",
        feedbackErro: "São: (1) todo vivo = células, (2) célula = unidade funcional, (3) célula vem de célula." },
      { id: "q2", pergunta: "O que é um GENE?", fotoUrl: dnaImg,
        opcoes: [
          { id: "a", texto: "Trecho de DNA com a receita para uma característica ou proteína", correta: true },
          { id: "b", texto: "Uma organela dentro da mitocôndria" },
        ],
        feedbackAcerto: "Sim. Gene = pedaço de DNA com informação para uma proteína.",
        feedbackErro: "Gene NÃO é organela — é um trecho de DNA com uma receita." },
      { id: "q3", pergunta: "Qual a diferença entre MITOSE e MEIOSE?", fotoUrl: cromossomosImg,
        opcoes: [
          { id: "a", texto: "Mitose gera 2 células idênticas; meiose gera 4 células diferentes (gametas)", correta: true },
          { id: "b", texto: "Mitose acontece só em plantas; meiose só em animais" },
        ],
        feedbackAcerto: "Perfeito. Mitose = crescimento/reparo (2 iguais). Meiose = reprodução (4 gametas diferentes).",
        feedbackErro: "As duas acontecem em plantas e animais. Diferença: mitose = 2 iguais; meiose = 4 diferentes." },
    ],
    selo: { nome: "Certificação · Citologista Júnior", subtitulo: "Setor 1 · Biologia Celular", emoji: "🧬", cor: "from-violet-500 to-purple-700" },
    falaFinal:
      "Setor 1 CONCLUÍDO. Próximo: Centro Biomédico Virtual — corpo humano integrado.",
  },
};
