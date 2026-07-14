import type { AulaGeoV1 } from "../../types";
import atomoImg from "@/assets/ciencias-8ano/u4/atomo-modelo.jpg";
import tabelaImg from "@/assets/ciencias-8ano/u4/tabela-periodica.jpg";
import aguaImg from "@/assets/ciencias-8ano/u4/molecula-agua.jpg";
import reacaoImg from "@/assets/ciencias-8ano/u4/reacao-bicarbonato-vinagre.jpg";
import ferrugemImg from "@/assets/ciencias-8ano/u4/ferrugem-oxidacao.jpg";

/**
 * Ciências · 9º Ano · U3 · A01 — "Laboratório de Química Aplicada"
 * Átomo, tabela periódica, ligações, reações, ácidos e bases.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-03-laboratorio-quimica",
  titulo: "Laboratório de Química Aplicada",
  iconeTrilha: "⚗️",
  recompensa: { xp: 160, moedas: 65, medalha: "Químico Júnior" },
  bncc: ["EF09CI01", "EF09CI02", "EF09CI03", "EF09CI04"],
  duracaoMin: 45,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada do Laboratório de Química. Toque para iniciar.",
    mapaUrl: reacaoImg,
    imagemDestaqueUrl: atomoImg,
    aurora:
      "Instituto 3: Química Aplicada. Aqui a matéria se transforma. Você vai aprender como átomos se ligam, como reações acontecem e como a tabela periódica organiza tudo isso.",
    falaFinal: "Toda substância do universo é feita a partir dos 118 elementos da tabela.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Problema: quando você mistura bicarbonato com vinagre, algo NOVO aparece. É a mesma substância?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: reacaoImg,
    opcoes: [
      { id: "nova", titulo: "Substâncias novas são formadas", subtitulo: "reação química: rearranjo dos átomos", emoji: "⚗️", cor: "from-emerald-500 to-teal-700" },
      { id: "mesma", titulo: "É só uma mistura", subtitulo: "as substâncias continuam iguais", emoji: "🥤", cor: "from-slate-500 to-slate-700" },
      { id: "magica", titulo: "Simplesmente magia", subtitulo: "não tem explicação química", emoji: "✨", cor: "from-red-500 to-rose-700" },
    ],
    respostaCerta: "nova",
    feedbackAcerto:
      "Correto. Vinagre (ácido acético) + bicarbonato → acetato de sódio + água + CO₂. Substâncias novas!",
    feedbackErro:
      "As bolhas são CO₂ — gás novo que não existia antes. Reação química = rearranjo de átomos em substâncias diferentes.",
    falaFinal: "Reação química cria substâncias novas — não é só mistura.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da química.",
    instrucao: "Vocabulário do Laboratório",
    cadernos: [
      { id: "atomo", capa: "ÁTOMO", emoji: "⚛️", cor: "from-indigo-500 to-purple-700", conteudo: "Unidade básica da matéria. Tem NÚCLEO (prótons + nêutrons) e ELETROSFERA (elétrons).", exemplo: "Ex.: átomo de hidrogênio = 1 próton + 1 elétron.", fotoUrl: atomoImg },
      { id: "el", capa: "ELEMENTO", emoji: "🔤", cor: "from-fuchsia-500 to-pink-700", conteudo: "Tipo de átomo definido pelo número de PRÓTONS. A tabela periódica organiza os 118 elementos.", exemplo: "Ex.: H (1 próton), O (8 prótons), Fe (26 prótons).", fotoUrl: tabelaImg },
      { id: "mol", capa: "MOLÉCULA", emoji: "🔗", cor: "from-sky-500 to-cyan-700", conteudo: "Dois ou mais átomos ligados. Pode ser do mesmo elemento (O₂) ou de elementos diferentes (H₂O).", exemplo: "Ex.: H₂O = 2 hidrogênios + 1 oxigênio.", fotoUrl: aguaImg },
      { id: "rea", capa: "REAÇÃO", emoji: "⚗️", cor: "from-amber-500 to-orange-700", conteudo: "Transformação em que átomos se rearranjam formando SUBSTÂNCIAS NOVAS.", exemplo: "Ex.: 2 H₂ + O₂ → 2 H₂O (combustão).", fotoUrl: reacaoImg },
      { id: "acid", capa: "ÁCIDO / BASE", emoji: "🧪", cor: "from-emerald-500 to-teal-700", conteudo: "Ácido libera H⁺; base libera OH⁻. Neutralizam-se formando SAL + ÁGUA. Medimos com pH (0 a 14).", exemplo: "Ex.: vinagre (ácido), sabão (base), água pura (pH 7).", fotoUrl: ferrugemImg },
    ],
    falaFinal: "Átomo, elemento, molécula, reação, ácido/base. As chaves da química.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Modelo do átomo. Toque em cada parte.",
    instrucao: "Toque nos pontos",
    mapaUrl: atomoImg,
    pontos: [
      { id: "nuc", x: 50, y: 50, emoji: "⚛️", cor: "from-red-500 to-rose-700", titulo: "Núcleo", texto: "Prótons (+) e nêutrons (neutros). Concentra quase toda a massa.", fotoUrl: atomoImg },
      { id: "el", x: 25, y: 25, emoji: "⚡", cor: "from-sky-500 to-cyan-700", titulo: "Elétrons", texto: "Cargas negativas girando ao redor do núcleo. Definem as ligações químicas.", fotoUrl: atomoImg },
      { id: "orb", x: 75, y: 30, emoji: "🌐", cor: "from-indigo-500 to-purple-700", titulo: "Camadas", texto: "Os elétrons se organizam em níveis de energia (K, L, M...).", fotoUrl: atomoImg },
      { id: "ele", x: 50, y: 85, emoji: "🔤", cor: "from-emerald-500 to-teal-700", titulo: "Elemento", texto: "Número de prótons define quem é o átomo (na tabela periódica).", fotoUrl: tabelaImg },
    ],
    falaFinal: "Núcleo + elétrons em camadas = todo átomo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "O que define QUEM é um elemento químico?", fotoUrl: tabelaImg,
        cards: [
          { id: "a", emoji: "🔴", titulo: "Número de PRÓTONS no núcleo", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "⚡", titulo: "Número de elétrons", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "⚪", titulo: "Número de nêutrons", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Nº de prótons = número atômico (Z).",
        feedbackErro: "É o número de PRÓTONS. Elétrons e nêutrons podem variar (íon/isótopo)." },
      { id: "q2", pergunta: "Em H₂O, o subscrito 2 significa:", fotoUrl: aguaImg,
        cards: [
          { id: "a", emoji: "🔗", titulo: "2 átomos de hidrogênio na molécula", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🥤", titulo: "2 moléculas de água", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧪", titulo: "2 gramas de água", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. H₂O = 2 H + 1 O.",
        feedbackErro: "Subscrito = quantos ÁTOMOS de cada elemento na molécula." },
      { id: "q3", pergunta: "pH 7 significa:", fotoUrl: ferrugemImg,
        cards: [
          { id: "a", emoji: "⚖️", titulo: "Solução NEUTRA", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🍋", titulo: "Muito ácida", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧼", titulo: "Muito básica", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Água pura tem pH 7 = neutro.",
        feedbackErro: "pH 7 = neutro. Abaixo é ácido, acima é básico." },
    ],
    falaFinal: "Átomos, moléculas, pH — base conquistada.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Compare MISTURA (física) e REAÇÃO (química).",
    instrucao: "Toque nos interruptores",
    mapaUrl: reacaoImg,
    camadas: [
      { id: "mist", rotulo: "Mistura", emoji: "🥤", cor: "from-sky-500 to-cyan-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Substâncias juntas SEM formar novas. Podem ser separadas fisicamente (filtro, evaporação).", fotoUrl: aguaImg },
      { id: "rea", rotulo: "Reação", emoji: "⚗️", cor: "from-emerald-500 to-teal-700", rect: { x: 2, y: 2, w: 96, h: 96 }, descricao: "Átomos se rearranjam e formam SUBSTÂNCIAS NOVAS. Não dá para desfazer só filtrando.", fotoUrl: reacaoImg },
    ],
    falaFinal: "Mistura = física; reação = química. Sinais de reação: gás, calor, cor, precipitado.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os modelos atômicos historicamente.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Do mais antigo ao atual:",
    paradas: [
      { id: "dal", emoji: "⚫", rotulo: "1. Dalton (1808)", descricao: "Átomo = bolinha maciça, indivisível.", fotoUrl: atomoImg },
      { id: "tho", emoji: "🍮", rotulo: "2. Thomson (1897)", descricao: "Pudim de passas: elétrons dentro de uma massa +.", fotoUrl: atomoImg },
      { id: "rut", emoji: "🎯", rotulo: "3. Rutherford (1911)", descricao: "Núcleo pequeno e denso; elétrons ao redor.", fotoUrl: atomoImg },
      { id: "boh", emoji: "🪐", rotulo: "4. Bohr (1913)", descricao: "Elétrons em camadas com energia definida.", fotoUrl: atomoImg },
    ],
    ordemCerta: ["dal", "tho", "rut", "boh"],
    feedbackAcerto: "Perfeito. Dalton → Thomson → Rutherford → Bohr.",
    feedbackErro: "Ordem cronológica: 1808 → 1897 → 1911 → 1913.",
    falaFinal: "Cada modelo corrigiu o anterior — ciência é autocorretiva.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório da bancada.",
    tituloLivro: "📓 Relatório · Química das Transformações",
    subtitulo: "Do átomo ao cotidiano",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: por que existe tanta variedade de substâncias no mundo se só existem 118 elementos? Porque eles se COMBINAM em bilhões de moléculas diferentes.", chaves: ["moléculas"], definicoes: { "moléculas": "Átomos ligados formando substâncias." }, fotoUrl: tabelaImg },
      { id: "p2", texto: "OBSERVAÇÃO: as REAÇÕES QUÍMICAS obedecem à lei de Lavoisier (1789): 'na natureza nada se cria, nada se perde, tudo se transforma'. Os átomos se rearranjam, mas não somem.", chaves: ["Lavoisier"], definicoes: { Lavoisier: "Químico francês, pai da química moderna." }, fotoUrl: reacaoImg },
      { id: "p3", texto: "CONCLUSÃO: entender química é entender o cotidiano — do refrigerante (CO₂) à ferrugem (oxidação), do sabão (base) ao suco de limão (ácido).", chaves: ["oxidação"], definicoes: { oxidação: "Reação com oxigênio, como a ferrugem." }, fotoUrl: ferrugemImg },
    ],
    falaFinal: "Química explica o cotidiano — do refrigerante à ferrugem.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Classifique: átomo, molécula ou mistura?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 40,
    pecas: [
      { id: "at", emoji: "⚛️", rotulo: "Átomo (elemento puro)" },
      { id: "mol", emoji: "🔗", rotulo: "Molécula" },
      { id: "mis", emoji: "🥤", rotulo: "Mistura" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "H₂O", emoji: "💧", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "2 H + 1 O ligados", emoji: "🔗", cor: "from-emerald-500 to-teal-700" }, contexto: "Água pura.", pecaCertaId: "mol", fotoUrl: aguaImg, feedbackAcerto: "Sim. Molécula.", feedbackErro: "Átomos LIGADOS de elementos diferentes = MOLÉCULA." },
      { id: "r2", municipioA: { nome: "Ar atmosférico", emoji: "💨", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "N₂ + O₂ + Ar + CO₂...", emoji: "🥤", cor: "from-amber-500 to-orange-700" }, contexto: "Várias substâncias juntas.", pecaCertaId: "mis", fotoUrl: aguaImg, feedbackAcerto: "Correto. Ar = mistura.", feedbackErro: "Várias substâncias juntas sem reagir = MISTURA." },
      { id: "r3", municipioA: { nome: "Ouro puro (Au)", emoji: "🥇", cor: "from-yellow-500 to-amber-700" }, municipioB: { nome: "Só átomos de Au", emoji: "⚛️", cor: "from-indigo-500 to-purple-700" }, contexto: "Um só elemento.", pecaCertaId: "at", fotoUrl: tabelaImg, feedbackAcerto: "Sim. Substância simples de um elemento.", feedbackErro: "Só átomos do MESMO elemento = substância elementar (átomos)." },
      { id: "r4", municipioA: { nome: "Sal (NaCl) na água", emoji: "🧂", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "Sal dissolvido", emoji: "🥤", cor: "from-sky-500 to-cyan-700" }, contexto: "Não formou substância nova.", pecaCertaId: "mis", fotoUrl: aguaImg, feedbackAcerto: "Correto. Solução = mistura homogênea.", feedbackErro: "Sal + água = MISTURA (dá para separar por evaporação)." },
    ],
    falaFinal: "Você já diferencia átomo, molécula e mistura.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "A química tem três grandes eixos: ESTRUTURA, LIGAÇÕES e REAÇÕES.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: tabelaImg,
    fatias: [
      { id: "est", rotulo: "Estrutura", emoji: "⚛️", percentual: 35, cor: "#8b5cf6", descricao: "Átomo, elemento, tabela periódica.", exemplos: ["Próton", "Elétron", "Nêutron"], fotoUrl: atomoImg },
      { id: "lig", rotulo: "Ligações", emoji: "🔗", percentual: 30, cor: "#0891b2", descricao: "Iônica, covalente, metálica. Ligações formam moléculas.", exemplos: ["H₂O", "NaCl", "CO₂"], fotoUrl: aguaImg },
      { id: "rea", rotulo: "Reações", emoji: "⚗️", percentual: 35, cor: "#f59e0b", descricao: "Rearranjo de átomos formando novas substâncias.", exemplos: ["Combustão", "Neutralização", "Oxidação"], fotoUrl: reacaoImg },
    ],
    falaFinal: "Estrutura + ligações + reações. Fim do Instituto 3.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas para a Certificação de Químico Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: atomoImg,
    perguntas: [
      { id: "q1", pergunta: "Prótons são partículas de que carga?", fotoUrl: atomoImg,
        opcoes: [
          { id: "a", texto: "Carga positiva (+)", correta: true },
          { id: "b", texto: "Carga negativa (−)" },
        ],
        feedbackAcerto: "Correto. Prótons (+), elétrons (−), nêutrons (0).",
        feedbackErro: "Prótons são POSITIVOS. Elétrons é que são negativos." },
      { id: "q2", pergunta: "O que a Lei de Lavoisier afirma?", fotoUrl: reacaoImg,
        opcoes: [
          { id: "a", texto: "A massa dos reagentes é igual à dos produtos", correta: true },
          { id: "b", texto: "A massa sempre aumenta na reação" },
        ],
        feedbackAcerto: "Sim. Conservação da massa (1789).",
        feedbackErro: "Massa se CONSERVA — átomos só se rearranjam." },
      { id: "q3", pergunta: "Uma solução com pH 2 é:", fotoUrl: ferrugemImg,
        opcoes: [
          { id: "a", texto: "Fortemente ácida", correta: true },
          { id: "b", texto: "Fortemente básica" },
        ],
        feedbackAcerto: "Perfeito. pH < 7 = ácido. pH 2 é bem ácido.",
        feedbackErro: "pH abaixo de 7 é ÁCIDO. pH 2 é fortemente ácido." },
    ],
    selo: { nome: "Certificação · Químico Júnior", subtitulo: "Instituto 3 · Química Aplicada", emoji: "⚗️", cor: "from-cyan-500 to-sky-700" },
    falaFinal: "Instituto 3 CONCLUÍDO. Próximo: Física Experimental.",
  },
};
