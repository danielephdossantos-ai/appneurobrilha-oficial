import type { AulaGeoV1 } from "../../types";
import laboratorioImg from "@/assets/ciencias-7ano/u5-a1/laboratorio-quimica.jpg";
import moleculasImg from "@/assets/ciencias-7ano/u5-a1/moleculas-atomos.jpg";
import transformacoesImg from "@/assets/ciencias-7ano/u5-a1/transformacoes-materia.jpg";

/**
 * Ciências · 7º Ano · Unidade 5 · Aula 01
 * "Química Básica" — Departamento de Matéria e Transformações.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-quimica-basica",
  titulo: "Química Básica",
  iconeTrilha: "⚗️",
  recompensa: { xp: 140, moedas: 55, medalha: "Químico Júnior" },
  bncc: ["EF07CI01", "EF07CI02", "EF07CI03"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada de química. Toque para iniciar.",
    mapaUrl: laboratorioImg,
    imagemDestaqueUrl: moleculasImg,
    aurora:
      "Departamento 5: Matéria. Missão: entender do que tudo é FEITO (átomos e moléculas) e como a matéria se TRANSFORMA — física ou quimicamente.",
    falaFinal:
      "Tudo que existe é matéria organizada em átomos. Química = a ciência dessa organização.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Você derrete um cubo de gelo em água líquida. É a MESMA substância? Formule sua hipótese.",
    pergunta: "O que aconteceu?",
    fotoUrl: transformacoesImg,
    opcoes: [
      { id: "quimica", titulo: "Transformação química", subtitulo: "virou substância nova", emoji: "⚗️", cor: "from-slate-500 to-slate-700", fotoUrl: laboratorioImg },
      { id: "fisica", titulo: "Transformação física", subtitulo: "mesma H₂O, forma diferente", emoji: "❄️", cor: "from-emerald-500 to-teal-700", fotoUrl: transformacoesImg },
      { id: "sumiu", titulo: "Matéria sumiu", subtitulo: "gelo desapareceu", emoji: "❌", cor: "from-rose-500 to-red-700", fotoUrl: transformacoesImg },
    ],
    respostaCerta: "fisica",
    feedbackAcerto:
      "Correto. Gelo e água são a MESMA substância (H₂O), só mudou o ESTADO físico. Nenhum átomo se rearranjou.",
    feedbackErro:
      "Nada sumiu (conservação da matéria) e nenhuma substância nova surgiu. Só mudou o ESTADO — é transformação física.",
    falaFinal:
      "Regra de ouro: mudou só o estado (sólido/líquido/gasoso) = FÍSICA. Mudou a substância = QUÍMICA.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco conceitos-base da química de 7º ano.",
    instrucao: "Vocabulário químico",
    cadernos: [
      { id: "atomo", capa: "ÁTOMO", emoji: "⚛️", cor: "from-sky-500 to-cyan-700", conteudo: "Menor unidade da matéria com identidade química. Feito de prótons, nêutrons (núcleo) e elétrons (ao redor). ~118 tipos = 118 elementos.", exemplo: "Ex.: 1 átomo de hidrogênio (H), 1 átomo de ouro (Au).", fotoUrl: moleculasImg },
      { id: "molecula", capa: "MOLÉCULA", emoji: "🔗", cor: "from-indigo-500 to-purple-700", conteudo: "Dois ou mais átomos LIGADOS. Pode ter átomos iguais (O₂) ou diferentes (H₂O).", exemplo: "Ex.: água (H₂O), glicose (C₆H₁₂O₆), gás carbônico (CO₂).", fotoUrl: moleculasImg },
      { id: "estados", capa: "ESTADOS DA MATÉRIA", emoji: "❄️", cor: "from-cyan-500 to-blue-700", conteudo: "Sólido (organizado, rígido), líquido (fluido, sem forma fixa) e gasoso (disperso). O mesmo material pode assumir os três.", exemplo: "Ex.: gelo → água → vapor. Tudo H₂O.", fotoUrl: transformacoesImg },
      { id: "fisica", capa: "TRANSF. FÍSICA", emoji: "🌡️", cor: "from-emerald-500 to-teal-700", conteudo: "Muda a FORMA, o ESTADO ou o TAMANHO — mas NÃO muda a substância. É reversível.", exemplo: "Ex.: derreter gelo, quebrar vidro, dissolver açúcar.", fotoUrl: transformacoesImg },
      { id: "quimica", capa: "TRANSF. QUÍMICA", emoji: "🔥", cor: "from-red-500 to-rose-700", conteudo: "Átomos se REARRANJAM formando substâncias NOVAS. Geralmente irreversível. Sinais: cor, cheiro, calor, gás, precipitado.", exemplo: "Ex.: queimar madeira, enferrujar prego, cozinhar ovo.", fotoUrl: laboratorioImg, partes: [
        { titulo: "Reagentes", texto: "Substâncias iniciais que vão reagir. Ex.: madeira + O₂." },
        { titulo: "Reação", texto: "Átomos se rearranjam formando novas ligações." },
        { titulo: "Produtos", texto: "Substâncias diferentes das iniciais. Ex.: CO₂ + H₂O + cinzas." },
        { titulo: "Sinais", texto: "Mudança de cor, calor liberado, gás formado, precipitado — indicam que reação química ocorreu." },
      ] },
    ],
    falaFinal:
      "Átomo, molécula, estados, transformação física e química. Base para toda química.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Molécula de água em detalhe. Toque em cada estrutura.",
    instrucao: "Toque nas partes",
    mapaUrl: moleculasImg,
    pontos: [
      { id: "oxigenio", x: 50, y: 40, emoji: "🔴", cor: "from-red-500 to-rose-700", titulo: "Átomo de Oxigênio (O)", texto: "Núcleo com 8 prótons + 8 nêutrons. 8 elétrons ao redor. É maior que o hidrogênio e 'puxa' os elétrons para si.", fotoUrl: moleculasImg },
      { id: "hidrogenio1", x: 25, y: 65, emoji: "⚪", cor: "from-sky-500 to-cyan-700", titulo: "Átomo de Hidrogênio (H)", texto: "Só 1 próton e 1 elétron. É o átomo mais simples e leve do universo.", fotoUrl: moleculasImg },
      { id: "hidrogenio2", x: 75, y: 65, emoji: "⚪", cor: "from-sky-500 to-cyan-700", titulo: "Segundo Hidrogênio", texto: "Cada molécula de água tem DOIS hidrogênios ligados a um oxigênio. Fórmula: H₂O.", fotoUrl: moleculasImg },
      { id: "ligacao", x: 50, y: 75, emoji: "🔗", cor: "from-indigo-500 to-purple-700", titulo: "Ligação química", texto: "Compartilhamento de elétrons entre O e H. Isso é uma LIGAÇÃO COVALENTE — mantém a molécula unida.", fotoUrl: moleculasImg },
    ],
    falaFinal:
      "2 H + 1 O = 1 molécula de água. Simples de escrever, essencial para toda vida.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão sobre a matéria.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Derreter um cubo de gelo é uma transformação...", fotoUrl: transformacoesImg,
        cards: [
          { id: "a", emoji: "❄️", titulo: "Física (só muda estado)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔥", titulo: "Química (nova substância)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "❌", titulo: "Não é transformação", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Sólido → líquido = mudança de estado = física.",
        feedbackErro: "Gelo e água líquida são a MESMA H₂O. Só o estado mudou. É FÍSICA." },
      { id: "q2", pergunta: "Uma MOLÉCULA de água (H₂O) contém...", fotoUrl: moleculasImg,
        cards: [
          { id: "a", emoji: "🔗", titulo: "2 hidrogênios + 1 oxigênio ligados", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "⚛️", titulo: "1 átomo apenas", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🌊", titulo: "Muitas gotas", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. H₂O = 2H + 1O ligados por ligação covalente.",
        feedbackErro: "Molécula tem pelo menos 2 átomos. H₂O = 2H + 1O." },
      { id: "q3", pergunta: "Queimar madeira é transformação...", fotoUrl: laboratorioImg,
        cards: [
          { id: "a", emoji: "🔥", titulo: "Química (vira CO₂ + H₂O + cinzas)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❄️", titulo: "Física (só muda forma)", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "❌", titulo: "Matéria some", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Madeira + O₂ → CO₂ + H₂O + cinzas. Substâncias novas = química.",
        feedbackErro: "Madeira NÃO volta a ser madeira. Formou substâncias NOVAS = QUÍMICA." },
    ],
    falaFinal:
      "Você já sabe distinguir uma reação de uma mudança de estado. Início da química.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "A matéria pode ser classificada em duas grandes zonas: substâncias PURAS (feitas de um só tipo) e MISTURAS (várias substâncias juntas).",
    instrucao: "Toque nos interruptores",
    mapaUrl: laboratorioImg,
    camadas: [
      { id: "pura", rotulo: "Substância Pura", emoji: "💎", cor: "from-sky-500 to-cyan-700", rect: { x: 5, y: 5, w: 45, h: 90 }, descricao: "Feita de UM só tipo de partícula. Ponto de ebulição e fusão fixos. Ex.: água pura destilada, ouro puro, gás oxigênio.", fotoUrl: moleculasImg },
      { id: "mistura", rotulo: "Mistura", emoji: "🥤", cor: "from-amber-500 to-orange-700", rect: { x: 50, y: 5, w: 45, h: 90 }, descricao: "Duas ou mais substâncias juntas. Homogênea (não dá pra ver as partes: água + sal) ou heterogênea (dá pra ver: água + óleo).", fotoUrl: laboratorioImg },
    ],
    falaFinal:
      "Pura tem uma coisa só. Mistura tem várias. Diferença simples, mas muda tudo em análise química.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "MUDANÇAS DE ESTADO da água — ordene do mais frio ao mais quente.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene os estados da água conforme a temperatura sobe:",
    paradas: [
      { id: "gelo", emoji: "🧊", rotulo: "1. Sólido (gelo)", descricao: "Abaixo de 0°C. Moléculas organizadas.", fotoUrl: transformacoesImg },
      { id: "fusao", emoji: "💧", rotulo: "2. Fusão", descricao: "A 0°C: sólido → líquido.", fotoUrl: transformacoesImg },
      { id: "liquido", emoji: "🌊", rotulo: "3. Líquido (água)", descricao: "Entre 0°C e 100°C.", fotoUrl: transformacoesImg },
      { id: "ebulicao", emoji: "🫧", rotulo: "4. Ebulição", descricao: "A 100°C: líquido → gás.", fotoUrl: transformacoesImg },
      { id: "vapor", emoji: "💨", rotulo: "5. Gasoso (vapor)", descricao: "Acima de 100°C. Moléculas dispersas.", fotoUrl: transformacoesImg },
    ],
    ordemCerta: ["gelo", "fusao", "liquido", "ebulicao", "vapor"],
    feedbackAcerto:
      "Exato. Sólido → fusão → líquido → ebulição → gás. Temperatura sobe, moléculas se soltam.",
    feedbackErro:
      "Do MAIS FRIO ao MAIS QUENTE: gelo → fusão → líquido → ebulição → vapor.",
    falaFinal:
      "Quanto mais calor, mais AGITAÇÃO molecular — e mais dispersos ficam os átomos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório de experimento no laboratório.",
    tituloLivro: "📓 Relatório · Experimento 03 — Ferrugem",
    subtitulo: "Uma transformação química lenta",
    paragrafos: [
      { id: "p1", texto: "MONTAGEM: colocamos três pregos idênticos em três potes. Pote 1: prego SECO em ar. Pote 2: prego em ÁGUA sem ar (fervida). Pote 3: prego em ÁGUA com AR. Aguardamos 10 dias.", chaves: ["ar"], definicoes: { ar: "Mistura gasosa composta majoritariamente por nitrogênio (78%) e oxigênio (21%)." }, fotoUrl: laboratorioImg },
      { id: "p2", texto: "OBSERVAÇÃO: pote 1 — nada aconteceu. Pote 2 — nada aconteceu. Pote 3 — o prego ficou coberto de uma camada laranja-avermelhada, quebradiça. É a FERRUGEM (óxido de ferro).", chaves: ["óxido de ferro"], definicoes: { "óxido de ferro": "Substância formada quando ferro reage com oxigênio na presença de água." }, fotoUrl: laboratorioImg },
      { id: "p3", texto: "CONCLUSÃO: a ferrugem SÓ acontece quando ferro (Fe), oxigênio (O₂) e água (H₂O) estão juntos. É uma transformação QUÍMICA — o ferro do prego se torna uma substância nova (óxido de ferro) que não é mais o mesmo metal. Irreversível pela via simples.", chaves: ["transformação química"], definicoes: { "transformação química": "Rearranjo de átomos formando substâncias diferentes das iniciais." }, fotoUrl: laboratorioImg },
    ],
    falaFinal:
      "Prego → ferrugem = química lenta. Cozinhar arroz = química rápida. Diferença: tempo, não tipo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio: cada evento é transformação FÍSICA ou QUÍMICA?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 30,
    pecas: [
      { id: "fisica", emoji: "❄️", rotulo: "Física" },
      { id: "quimica", emoji: "🔥", rotulo: "Química" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cozinhar ovo", emoji: "🍳", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Clara vira branca e sólida", emoji: "🥚", cor: "from-yellow-500 to-amber-700" }, contexto: "Ovo cru → ovo cozido, sem volta.", pecaCertaId: "quimica", fotoUrl: laboratorioImg, feedbackAcerto: "QUÍMICA. Proteínas se rearranjam — não voltam ao estado líquido.", feedbackErro: "Não é reversível. Formou nova estrutura de proteínas = QUÍMICA." },
      { id: "r2", municipioA: { nome: "Cortar papel", emoji: "✂️", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Vira pedaços menores, mas é papel", emoji: "📄", cor: "from-slate-500 to-slate-700" }, contexto: "Papel inteiro → pedacinhos.", pecaCertaId: "fisica", fotoUrl: transformacoesImg, feedbackAcerto: "FÍSICA. Só mudou a forma. Continua papel.", feedbackErro: "Papel continua papel. Só mudou tamanho = FÍSICA." },
      { id: "r3", municipioA: { nome: "Queimar palito", emoji: "🔥", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Vira cinzas + fumaça", emoji: "💨", cor: "from-slate-500 to-slate-700" }, contexto: "Madeira + fogo, sem volta.", pecaCertaId: "quimica", fotoUrl: laboratorioImg, feedbackAcerto: "QUÍMICA. Combustão gera CO₂, H₂O e cinzas — novas substâncias.", feedbackErro: "Fumaça e cinza são substâncias NOVAS. É QUÍMICA." },
      { id: "r4", municipioA: { nome: "Dissolver açúcar na água", emoji: "🥤", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Água doce forma", emoji: "💧", cor: "from-sky-500 to-cyan-700" }, contexto: "Açúcar somem visualmente, mas o gosto fica.", pecaCertaId: "fisica", fotoUrl: transformacoesImg, feedbackAcerto: "FÍSICA. Açúcar continua açúcar — se você evaporar a água, ele volta.", feedbackErro: "Açúcar não virou substância nova. Se evaporar a água, ele reaparece = FÍSICA." },
    ],
    falaFinal:
      "Você distingue física de química em segundos. Base da alfabetização científica.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Composição aproximada da matéria comum do universo — quais elementos formam quase tudo.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: moleculasImg,
    fatias: [
      { id: "hidrogenio", rotulo: "Hidrogênio (H)", emoji: "⚛️", percentual: 74, cor: "#0ea5e9", descricao: "Elemento mais abundante do universo. Combustível das estrelas.", exemplos: ["Sol", "Água (H₂O)", "Estrelas"], fotoUrl: moleculasImg },
      { id: "helio", rotulo: "Hélio (He)", emoji: "🎈", percentual: 24, cor: "#f59e0b", descricao: "Segundo mais abundante. Gerado nas estrelas por fusão do hidrogênio.", exemplos: ["Balões", "Sol", "Estrelas"], fotoUrl: moleculasImg },
      { id: "resto", rotulo: "Outros elementos", emoji: "✨", percentual: 2, cor: "#ef4444", descricao: "Todo o resto da tabela periódica — carbono, oxigênio, ferro, ouro. Somos feitos DESSES 2%.", exemplos: ["Carbono (nós)", "Oxigênio", "Ferro"], fotoUrl: moleculasImg },
    ],
    falaFinal:
      "Somos feitos de 'poeira das estrelas' — só 2% do que existe no universo. Poesia é química.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Departamento 5. 3 perguntas para receber sua Certificação de Químico Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: laboratorioImg,
    perguntas: [
      { id: "q1", pergunta: "Menor unidade da matéria com identidade química é o...", fotoUrl: moleculasImg,
        opcoes: [
          { id: "a", texto: "Átomo", correta: true },
          { id: "b", texto: "Molécula (que é feita de vários átomos)" },
        ],
        feedbackAcerto: "Correto. Átomo = unidade química fundamental.",
        feedbackErro: "Molécula é feita de ÁTOMOS. Átomo é a unidade mínima." },
      { id: "q2", pergunta: "Enferrujar um prego é transformação...", fotoUrl: laboratorioImg,
        opcoes: [
          { id: "a", texto: "Química (ferro vira óxido de ferro — nova substância)", correta: true },
          { id: "b", texto: "Física (só mudou de cor)" },
        ],
        feedbackAcerto: "Sim. Formou substância nova (óxido) = QUÍMICA.",
        feedbackErro: "Mudou a SUBSTÂNCIA (ferro → óxido de ferro), não só a aparência. É QUÍMICA." },
      { id: "q3", pergunta: "Água + sal formam uma...", fotoUrl: transformacoesImg,
        opcoes: [
          { id: "a", texto: "Mistura homogênea (não dá pra ver as partes)", correta: true },
          { id: "b", texto: "Substância pura" },
        ],
        feedbackAcerto: "Correto. Duas substâncias juntas = MISTURA (homogênea porque não separa).",
        feedbackErro: "Substância pura tem UMA só coisa. Água + sal = MISTURA." },
    ],
    falaFinal:
      "Selo conquistado. Fim do Departamento 5 — Matéria e Transformações.",
  },
};
