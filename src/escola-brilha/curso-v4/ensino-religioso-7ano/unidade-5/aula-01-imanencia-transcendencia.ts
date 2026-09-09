import type { AulaGeoV1 } from "../../types";
import { url as panteismo } from "@/assets/ensino-religioso-7ano/u2-panteismo.jpg.asset.json";
import { url as monoteismo } from "@/assets/ensino-religioso-7ano/u2-monoteismo.jpg.asset.json";
import { url as politeismo } from "@/assets/ensino-religioso-7ano/u2-politeismo.jpg.asset.json";

/**
 * Ensino Religioso · 7º Ano · Unidade 5 · Aula 01
 * "O Sagrado: Perto ou Distante?" — EF07ER05 (Imanência e transcendência)
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-imanencia-transcendencia",
  titulo: "O Sagrado: Perto ou Distante?",
  iconeTrilha: "🌌",
  bncc: ["EF07ER05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: duas imagens muito diferentes de sagrado.",
    mapaUrl: panteismo,
    imagemDestaqueUrl: panteismo,
    aurora:
      "Investigador, olha esses dois cenários. Um indígena guarani entrando na floresta: pra ele, o sagrado está NAS árvores, no rio, no jaguar. Está DENTRO do mundo. Um monge cristão olhando pro céu estrelado: pra ele, o sagrado está ALÉM. Está DE FORA do universo, que Deus criou. Duas visões, milênios de idade, ambas legítimas.",
    falaFinal:
      "Hoje aprendemos os nomes: IMANÊNCIA (sagrado dentro) e TRANSCENDÊNCIA (sagrado além). Dois modos, um mesmo respeito.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: pode existir uma tradição que junte AS DUAS visões?",
    pergunta: "É possível juntar?",
    opcoes: [
      { id: "nao", titulo: "NÃO — são incompatíveis", subtitulo: "escolhe uma ou outra", emoji: "❌", cor: "from-slate-400 to-gray-600" },
      { id: "sim", titulo: "SIM — muitas juntam", subtitulo: "sagrado é além E aqui dentro", emoji: "🔄", cor: "from-sky-400 to-blue-600" },
    ],
    respostaCerta: "sim",
    feedbackAcerto: "Isso! Cristianismo, judaísmo, islamismo, hinduísmo — todos misturam transcendência e imanência de algum modo.",
    feedbackErro: "Não são incompatíveis. Quase todas as grandes tradições juntam as duas: sagrado além MAS presente aqui.",
    falaFinal: "Perto E longe. É comum juntar as duas.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "imanencia", capa: "1. Imanência", emoji: "🌿", cor: "from-emerald-500 to-green-700", conteudo: "IMANÊNCIA (do latim 'ficar dentro') é a ideia de que o sagrado está DENTRO da natureza, dos rios, das florestas, das pessoas. Não é algo separado do mundo.", exemplo: "Ex.: tradições indígenas veem cada árvore, animal e rio como habitados por espíritos ou pelo próprio sagrado.", fotoUrl: panteismo },
      { id: "transcendencia", capa: "2. Transcendência", emoji: "🌌", cor: "from-indigo-500 to-purple-700", conteudo: "TRANSCENDÊNCIA (do latim 'ir além') é a ideia de que o sagrado está ALÉM do mundo — é o criador de tudo, mas não é a mesma coisa que o mundo criado.", exemplo: "Ex.: no cristianismo, judaísmo e islamismo, Deus criou o universo, mas NÃO é o universo.", fotoUrl: monoteismo },
      { id: "conviver", capa: "3. Ambas convivem", emoji: "🔄", cor: "from-sky-500 to-blue-700", conteudo: "Quase toda tradição JUNTA as duas de algum modo. Cristãos falam em Deus que criou o mundo (transcendência) MAS mora no coração de cada um (imanência).", exemplo: "Ex.: 'o Espírito Santo habita em vós' (Bíblia) é uma afirmação de imanência.", fotoUrl: politeismo },
    ],
    falaFinal: "Imanência, transcendência, ambas convivem. Trinca.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 tradições, 4 modos de imaginar o sagrado no mundo. Toque em cada balão.",
    instrucao: "Toque em cada balão",
    mapaUrl: panteismo,
    pontos: [
      { id: "indigenas", x: 22, y: 30, emoji: "🌳", cor: "from-emerald-500 to-green-700", titulo: "TRADIÇÕES INDÍGENAS — imanência forte", texto: "Pra povos como os guaranis, tupinambás e yanomamis, o sagrado está NA floresta, no rio, no vento, nos animais. Não existe 'natureza sem espírito'. Cortar uma árvore é gesto religioso.", fotoUrl: panteismo },
      { id: "afro", x: 70, y: 30, emoji: "🥁", cor: "from-red-500 to-rose-700", titulo: "TRADIÇÕES AFRO-BRASILEIRAS — imanência+transcendência", texto: "No candomblé, os orixás são forças da natureza (imanência: Iemanjá é o mar, Oxóssi é a mata) MAS também vieram de além, de Olorum, o deus supremo (transcendência).", fotoUrl: politeismo },
      { id: "cristao", x: 30, y: 72, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "CRISTIANISMO — transcendência+imanência", texto: "Deus criou o universo e é infinitamente maior que ele (transcendência). MAS o Espírito Santo habita em cada pessoa, e Cristo se fez humano (imanência). Junta as duas.", fotoUrl: monoteismo },
      { id: "islam", x: 76, y: 68, emoji: "☪️", cor: "from-amber-500 to-orange-700", titulo: "ISLAMISMO — transcendência muito forte", texto: "Allah é radicalmente ALÉM. Não pode ser representado em imagens, não pode ser reduzido a nada humano ou natural. 'Deus é maior' (Allahu Akbar) — sempre além de qualquer forma.", fotoUrl: monoteismo },
    ],
    falaFinal: "4 modos legítimos. Sagrado perto, longe, ou os dois.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "IMANÊNCIA significa:", fotoUrl: panteismo, cards: [
        { id: "dentro", emoji: "🌿", titulo: "Sagrado DENTRO da natureza e das pessoas", cor: "from-emerald-500 to-green-700" },
        { id: "alem", emoji: "🌌", titulo: "Sagrado ALÉM do mundo", cor: "from-slate-400 to-gray-600" },
        { id: "nada", emoji: "❌", titulo: "Que não existe sagrado", cor: "from-red-500 to-rose-700" },
      ], correta: "dentro", feedbackAcerto: "Isso! Imanência = sagrado presente dentro do mundo.", feedbackErro: "IMANÊNCIA = sagrado DENTRO da natureza. 'Além' é transcendência." },
      { id: "q2", pergunta: "O ISLAMISMO tem uma marca muito forte de:", fotoUrl: monoteismo, cards: [
        { id: "trans", emoji: "🌌", titulo: "Transcendência — Deus além de tudo", cor: "from-indigo-500 to-purple-700" },
        { id: "iman", emoji: "🌿", titulo: "Só imanência", cor: "from-slate-400 to-gray-600" },
        { id: "nenhum", emoji: "❌", titulo: "Nenhum dos dois", cor: "from-red-500 to-rose-700" },
      ], correta: "trans", feedbackAcerto: "Perfeito! No islamismo, Allah é sempre além de qualquer forma humana ou natural.", feedbackErro: "Islamismo tem transcendência muito FORTE — Allah está além de qualquer representação." },
      { id: "q3", pergunta: "Muitas tradições, como o cristianismo, JUNTAM as duas visões porque:", fotoUrl: politeismo, cards: [
        { id: "confusas", emoji: "🤷", titulo: "Estão confusas", cor: "from-slate-400 to-gray-600" },
        { id: "complexo", emoji: "🔄", titulo: "O sagrado é rico e complexo — pode ser além E aqui", cor: "from-sky-500 to-blue-700" },
        { id: "erro", emoji: "❌", titulo: "É um erro histórico", cor: "from-red-500 to-rose-700" },
      ], correta: "complexo", feedbackAcerto: "Isso! Sagrado é rico. As tradições dão conta dessa riqueza juntando as visões.", feedbackErro: "Não é confusão nem erro. Sagrado é COMPLEXO — pode ser além (criador) E presente (Espírito no coração)." },
    ],
    falaFinal: "Radar afinado. Nenhuma tradição é 'simples demais'.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda 5 estados brasileiros com forte presença de tradições que dão peso à IMANÊNCIA (sagrado na natureza).",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["AM", "PA", "BA", "MT", "RR"], pergunta: "5 estados com forte presença indígena e/ou de candomblé — tradições muito imanentes?" },
    falaFinal: "AM, PA, RR (indígenas); BA (candomblé); MT (indígenas do cerrado). Imanência viva.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como o pensamento humano descobriu a IDEIA de transcendência?",
    instrucao: "Ordene os 5 passos",
    pergunta: "História da transcendência:",
    paradas: [
      { id: "natureza", emoji: "🌿", rotulo: "1. NATUREZA sagrada", descricao: "As primeiras religiões viam sagrado em tudo: rios, montanhas, animais (imanência pura)." },
      { id: "olimpo", emoji: "⛰️", rotulo: "2. Deuses no OLIMPO", descricao: "Depois, deuses passaram a viver em locais separados: montanhas altas, palácios celestes." },
      { id: "criador", emoji: "🌌", rotulo: "3. Um CRIADOR único", descricao: "Judaísmo, cristianismo e islamismo afirmaram: existe UM Deus que criou tudo e está além do mundo." },
      { id: "coração", emoji: "❤️", rotulo: "4. Mas presente no CORAÇÃO", descricao: "Depois se acrescentou: esse Deus além também mora dentro das pessoas — as duas visões juntas." },
      { id: "dialogo", emoji: "🤝", rotulo: "5. DIÁLOGO entre visões", descricao: "Hoje, as tradições dialogam. Imanência e transcendência são vistas como MODOS diferentes, não como certo/errado." },
    ],
    ordemCerta: ["natureza", "olimpo", "criador", "coração", "dialogo"],
    feedbackAcerto: "Perfeito! Natureza → Olimpo → Criador → Coração → Diálogo.",
    feedbackErro: "A ordem: NATUREZA sagrada, deuses no OLIMPO, um CRIADOR, presente no CORAÇÃO, DIÁLOGO entre visões.",
    falaFinal: "5 passos. História longa da ideia do sagrado.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 5 — Perto ou Distante?",
    paragrafos: [
      { id: "p1", texto: "IMANÊNCIA é a ideia de que o sagrado está DENTRO da natureza, dos rios, das florestas, das pessoas. Tradições indígenas, o candomblé e o xintoísmo japonês têm imanência muito forte.", chaves: ["imanência", "dentro"] },
      { id: "p2", texto: "TRANSCENDÊNCIA é a ideia oposta: o sagrado está ALÉM do mundo, é o criador de tudo, mas não é a mesma coisa que o universo. Judaísmo, cristianismo e islamismo têm transcendência muito forte.", chaves: ["transcendência", "além"] },
      { id: "p3", texto: "As duas visões NÃO são incompatíveis. Quase todas as grandes tradições juntam as duas: sagrado além do mundo E presente no coração das pessoas. Cristãos, hindus e muitas outras.", chaves: ["juntam", "as duas"] },
      { id: "p4", texto: "Nenhuma das visões é mais 'correta' que a outra. São modos diferentes de imaginar o mistério do sagrado. Todas merecem IGUAL respeito acadêmico e humano.", chaves: ["igual respeito"] },
    ],
    falaFinal: "Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo PERTO OU LONGE! Cada frase é de uma tradição. Ela enfatiza mais IMANÊNCIA, TRANSCENDÊNCIA, ou AMBAS?",
    instrucao: "⏱️ O que essa frase enfatiza?",
    duracaoSegundos: 12,
    pecas: [
      { id: "iman", emoji: "🌿", rotulo: "Imanência (sagrado DENTRO)" },
      { id: "trans", emoji: "🌌", rotulo: "Transcendência (sagrado ALÉM)" },
      { id: "ambas", emoji: "🔄", rotulo: "Ambas juntas" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Guarani", emoji: "🌳", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "'Nhande Ru vive na mata'", emoji: "🦜", cor: "from-teal-400 to-emerald-600" }, contexto: "O grande pai vive na floresta.", pecaCertaId: "iman", feedbackAcerto: "Isso! Sagrado DENTRO da floresta.", feedbackErro: "É IMANÊNCIA — sagrado presente na mata." },
      { id: "r2", municipioA: { nome: "Islamismo", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "'Allah não se parece com nada'", emoji: "🌌", cor: "from-indigo-400 to-purple-700" }, contexto: "Deus está além de qualquer forma humana ou natural.", pecaCertaId: "trans", feedbackAcerto: "Perfeito! Transcendência radical.", feedbackErro: "É TRANSCENDÊNCIA — Allah além de tudo." },
      { id: "r3", municipioA: { nome: "Cristianismo", emoji: "✝️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "'Deus criou o mundo E mora no coração'", emoji: "❤️", cor: "from-indigo-400 to-blue-700" }, contexto: "Junta as duas visões.", pecaCertaId: "ambas", feedbackAcerto: "Isso! Transcendência + imanência.", feedbackErro: "São AMBAS — criou (transcendência) E habita (imanência)." },
      { id: "r4", municipioA: { nome: "Candomblé", emoji: "🥁", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "'Iemanjá É o mar'", emoji: "🌊", cor: "from-sky-400 to-blue-600" }, contexto: "Orixá é a própria força da natureza.", pecaCertaId: "iman", feedbackAcerto: "Perfeito! Sagrado é a natureza.", feedbackErro: "É IMANÊNCIA — o orixá É o elemento natural." },
      { id: "r5", municipioA: { nome: "Judaísmo", emoji: "🕎", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "'Um só Deus, criador'", emoji: "🌌", cor: "from-yellow-400 to-amber-600" }, contexto: "HaShem além de tudo que existe.", pecaCertaId: "trans", feedbackAcerto: "Isso! Transcendência monoteísta.", feedbackErro: "É TRANSCENDÊNCIA — um Deus além do mundo criado." },
      { id: "r6", municipioA: { nome: "Hinduísmo", emoji: "🕉️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "'Brahman é tudo E além de tudo'", emoji: "🌌", cor: "from-purple-400 to-fuchsia-600" }, contexto: "O sagrado é a essência do universo E ultrapassa o universo.", pecaCertaId: "ambas", feedbackAcerto: "Boa! Hinduísmo junta as duas de forma sofisticada.", feedbackErro: "São AMBAS — Brahman é essência do mundo E o transcende." },
    ],
    falaFinal: "6 posições reconhecidas! Você entende as duas visões.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: como as tradições religiosas do mundo se distribuem entre as duas visões.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "trans-plus", rotulo: "TRANSCENDÊNCIA forte + imanência (~55%)", emoji: "🌌", percentual: 55, cor: "#6366f1", descricao: "Judaísmo, cristianismo, islamismo, hinduísmo, sikhismo — enfatizam um Deus/Absoluto além do mundo, mas afirmam também presença no coração/na criação.", exemplos: ["✝️ Cristianismo", "☪️ Islamismo", "🕎 Judaísmo"] },
      { id: "iman-forte", rotulo: "IMANÊNCIA muito forte (~45%)", emoji: "🌿", percentual: 45, cor: "#10b981", descricao: "Tradições indígenas, candomblé, umbanda, xintoísmo, muitas tradições animistas — o sagrado está PRIMEIRAMENTE na natureza e nos seres.", exemplos: ["🪶 Indígenas", "🥁 Candomblé", "⛩️ Xintoísmo"] },
    ],
    falaFinal: "Duas grandes vias. Ambas legítimas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "IMANÊNCIA e TRANSCENDÊNCIA são:", opcoes: [
        { id: "a", texto: "Ideias incompatíveis: escolha uma", correta: false },
        { id: "b", texto: "Dois modos legítimos de imaginar o sagrado, e muitas tradições juntam ambos", correta: true },
        { id: "c", texto: "Palavras sem sentido", correta: false },
      ], feedbackAcerto: "Isso! Ambas legítimas — e muitas tradições unem as duas.", feedbackErro: "Não são incompatíveis. Muitas tradições JUNTAM as duas visões." },
      { id: "av2", pergunta: "Tradições indígenas brasileiras tendem a enfatizar:", opcoes: [
        { id: "a", texto: "Sagrado além do mundo", correta: false },
        { id: "b", texto: "Sagrado DENTRO da natureza (imanência forte)", correta: true },
        { id: "c", texto: "Ausência de sagrado", correta: false },
      ], feedbackAcerto: "Perfeito! Imanência: rio, mata e animais como sagrados.", feedbackErro: "Tradições indígenas enfatizam IMANÊNCIA — sagrado DENTRO da natureza." },
      { id: "av3", pergunta: "Qual visão é MAIS CORRETA?", opcoes: [
        { id: "a", texto: "A transcendência", correta: false },
        { id: "b", texto: "Nenhuma — são modos diferentes de imaginar o sagrado, ambos merecem respeito", correta: true },
        { id: "c", texto: "A imanência", correta: false },
      ], feedbackAcerto: "Isso! Não existe 'mais correta'. São modos legítimos diferentes.", feedbackErro: "NENHUMA é mais correta. São modos legítimos diferentes, ambos merecem respeito." },
    ],
    selo: { nome: "Investigador do Sagrado", subtitulo: "Insígnia de Imanência e Transcendência", emoji: "🌌", cor: "from-sky-400 to-blue-600" },
    falaFinal: "Insígnia conquistada!",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Investigador do Sagrado" },
};
