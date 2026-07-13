import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import panoramaImg from "@/assets/ciencias-2ano/u7-a1/panorama-sol-sombra.jpg";
import superficiesImg from "@/assets/ciencias-2ano/u7-a1/superficies-sol.jpg";

/**
 * Ciências · 2º Ano · Unidade 7 · Aula 01
 * "O Sol, a sombra e o calor" — EF02CI07 / EF02CI08 · Cristal do Sol
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-sol-sombra",
  titulo: "O Sol, a Sombra e o Calor",
  iconeTrilha: "☀️",
  bncc: ["EF02CI07", "EF02CI08"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pela paisagem. Repare em duas árvores iguais — as sombras têm o MESMO tamanho?",
    mapaUrl: panoramaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Brilha, chegamos ao 7º e ÚLTIMO cristal! Ele mora no céu, com o SOL. Vamos observar como o sol se move e o que a sombra faz durante o dia.",
    falaFinal: "O SOL é a estrela mais próxima da Terra. Sem ele, nada de vida!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Em qual horário a sombra fica MAIS CURTA?",
    pergunta: "Quando a sombra é MENOR?",
    fotoUrl: panoramaImg,
    opcoes: [
      { id: "manha", titulo: "De manhã cedo", subtitulo: "sol baixo", emoji: "🌅", cor: "from-orange-300 to-red-500" },
      { id: "meio", titulo: "Ao meio-dia", subtitulo: "sol bem alto", emoji: "☀️", cor: "from-yellow-400 to-orange-600" },
      { id: "tarde", titulo: "Fim da tarde", subtitulo: "sol quase se pondo", emoji: "🌇", cor: "from-pink-400 to-purple-600" },
    ],
    respostaCerta: "meio",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! Ao MEIO-DIA o sol fica quase em cima, e a sombra é bem curta.",
    feedbackErro: "Quanto MAIS ALTO o sol, MENOR a sombra. Meio-dia é o horário!",
    falaFinal: "Sol se movendo no céu = sombra mudando de tamanho durante o dia.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras do céu.",
    instrucao: "Vocabulário do Sol",
    cadernos: [
      { id: "sol", capa: "SOL", emoji: "☀️", cor: "from-yellow-400 to-orange-600", conteudo: "Estrela gigante que dá LUZ e CALOR pra Terra.", exemplo: "Ex.: sem sol, a Terra seria congelada e escura.", fotoUrl: panoramaImg },
      { id: "luz", capa: "LUZ", emoji: "💡", cor: "from-yellow-300 to-amber-500", conteudo: "É o que sai do sol e ilumina tudo — dia claro.", exemplo: "Ex.: sem luz não daria pra enxergar.", fotoUrl: panoramaImg },
      { id: "calor", capa: "CALOR", emoji: "🔥", cor: "from-red-400 to-orange-600", conteudo: "Também vem do sol — aquece a terra, a água e o ar.", exemplo: "Ex.: areia quente da praia é o sol aquecendo.", fotoUrl: superficiesImg },
      { id: "sombra", capa: "SOMBRA", emoji: "🌑", cor: "from-slate-500 to-slate-800", conteudo: "Escuro que aparece atrás do objeto quando o sol bate nele.", exemplo: "Ex.: sombra da árvore no chão.", fotoUrl: panoramaImg },
    ],
    falaFinal: "Sol → luz + calor. Onde a luz não chega = sombra!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada horário e veja como a sombra muda.",
    instrucao: "Toque em cada posição do sol",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: panoramaImg,
    pontos: [
      { id: "manha", x: 15, y: 30, emoji: "🌅", cor: "from-orange-400 to-red-600", titulo: "Manhã", texto: "Sol NASCE no leste. Está baixo, e a sombra fica bem COMPRIDA pra oeste.", fotoUrl: panoramaImg },
      { id: "meio", x: 50, y: 15, emoji: "☀️", cor: "from-yellow-400 to-orange-600", titulo: "Meio-dia", texto: "Sol NO ALTO. Sombra fica CURTINHA embaixo dos objetos.", fotoUrl: panoramaImg },
      { id: "tarde", x: 85, y: 30, emoji: "🌇", cor: "from-pink-400 to-purple-600", titulo: "Fim da tarde", texto: "Sol se PÕE no oeste. Sombra fica LONGA de novo, pra leste.", fotoUrl: panoramaImg },
      { id: "asfalto", x: 30, y: 75, emoji: "🖤", cor: "from-slate-700 to-slate-900", titulo: "Asfalto escuro", texto: "Superfície ESCURA ABSORVE mais calor — fica muito quente.", fotoUrl: superficiesImg },
      { id: "areia", x: 70, y: 75, emoji: "🏖️", cor: "from-amber-300 to-yellow-500", titulo: "Areia clara", texto: "Superfície CLARA REFLETE mais luz — fica menos quente que o escuro.", fotoUrl: superficiesImg },
    ],
    falaFinal: "Sol se move no céu, sombra muda e superfícies esquentam diferente!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre o sol.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "A sombra fica MAIS COMPRIDA quando o sol está:", fotoUrl: panoramaImg, cards: [{ id: "a", emoji: "☀️", titulo: "Bem alto", cor: "from-yellow-400 to-orange-600" }, { id: "b", emoji: "🌅", titulo: "Bem baixo", cor: "from-orange-400 to-red-600" }, { id: "c", emoji: "🌑", titulo: "Escondido pela nuvem", cor: "from-slate-400 to-slate-700" }], correta: "b", feedbackAcerto: "Isso! Sol BAIXO = sombra COMPRIDA.", feedbackErro: "Quanto mais BAIXO o sol, mais COMPRIDA a sombra." },
      { id: "q2", pergunta: "Qual superfície esquenta MAIS no sol?", fotoUrl: superficiesImg, cards: [{ id: "a", emoji: "🖤", titulo: "Asfalto escuro", cor: "from-slate-700 to-slate-900" }, { id: "b", emoji: "🏖️", titulo: "Areia clara", cor: "from-amber-300 to-yellow-500" }, { id: "c", emoji: "❄️", titulo: "Gelo", cor: "from-cyan-300 to-sky-500" }], correta: "a", feedbackAcerto: "Certo! Cor ESCURA absorve mais calor.", feedbackErro: "Escuro absorve MAIS calor que claro. É o asfalto!" },
      { id: "q3", pergunta: "O que o sol dá pra Terra?", fotoUrl: panoramaImg, cards: [{ id: "a", emoji: "☀️", titulo: "Luz e calor", cor: "from-yellow-400 to-orange-600" }, { id: "b", emoji: "🍕", titulo: "Pizza", cor: "from-red-400 to-orange-600" }, { id: "c", emoji: "🎮", titulo: "Videogame", cor: "from-purple-400 to-fuchsia-600" }], correta: "a", feedbackAcerto: "PERFEITO! LUZ + CALOR.", feedbackErro: "Sol não dá pizza nem game. Dá LUZ e CALOR!" },
    ],
    falaFinal: "Você já lê o céu como cientista!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores: um mostra a LUZ do sol, outro o CALOR.",
    instrucao: "Toque nos interruptores",
    mapaUrl: panoramaImg,
    camadas: [
      { id: "luz", rotulo: "Luz", emoji: "💡", cor: "from-yellow-400 to-amber-600", rect: { x: 5, y: 5, w: 90, h: 55 }, descricao: "Toda parte iluminada pelo sol é onde a LUZ chega. Sem luz, escuro." },
      { id: "calor", rotulo: "Calor", emoji: "🔥", cor: "from-red-500 to-orange-700", rect: { x: 5, y: 60, w: 90, h: 35 }, descricao: "O chão AQUECE onde o sol bate direto. Superfícies escuras esquentam mais." },
    ],
    falaFinal: "Luz ilumina + calor esquenta. Ambos vêm do mesmo sol!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos montar o dia do sol em ordem?",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como o sol se move no céu?",
    paradas: [
      { id: "nasce", emoji: "🌅", rotulo: "1. Nasce (manhã)", descricao: "Sol aparece no LESTE bem baixinho.", fotoUrl: panoramaImg },
      { id: "sobe", emoji: "🌞", rotulo: "2. Sobe (fim de manhã)", descricao: "Vai subindo no céu. Sombra vai encurtando.", fotoUrl: panoramaImg },
      { id: "meio", emoji: "☀️", rotulo: "3. Meio-dia", descricao: "Está bem no alto. Sombra bem curtinha.", fotoUrl: panoramaImg },
      { id: "poe", emoji: "🌇", rotulo: "4. Se põe (fim de tarde)", descricao: "Desce até sumir no OESTE. Sombra fica longa.", fotoUrl: panoramaImg },
    ],
    ordemCerta: ["nasce", "sobe", "meio", "poe"],
    feedbackAcerto: "Dia completo! Sol vai do leste ao oeste.",
    feedbackErro: "Sol NASCE de manhã. O que vem depois?",
    falaFinal: "Todo dia, o sol faz esse mesmo caminho no céu!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Diário do Sol.",
    tituloLivro: "📓 Diário do Sol",
    subtitulo: "Página 7 — Sol e sombra",
    paragrafos: [
      { id: "p1", texto: "O SOL nasce no LESTE, sobe no céu e se põe no OESTE. Durante o dia, ele muda de POSIÇÃO no céu, e por isso a sombra muda de tamanho e direção.", chaves: ["leste", "oeste"], definicoes: { leste: "Lado onde o sol NASCE de manhã.", oeste: "Lado onde o sol SE PÕE no fim da tarde." }, fotoUrl: panoramaImg },
      { id: "p2", texto: "Quando o sol está BAIXO (manhã e tarde), a sombra é COMPRIDA. Quando está ALTO (meio-dia), a sombra é CURTA. Pra ter sombra, precisa ter LUZ batendo em um objeto.", chaves: ["sombra"], definicoes: { sombra: "Área escura atrás do objeto quando o sol bate nele." }, fotoUrl: panoramaImg },
      { id: "p3", texto: "O sol também traz CALOR. Superfícies ESCURAS (asfalto) esquentam MAIS que superfícies CLARAS (areia). Superfícies METÁLICAS refletem muito e brilham no sol.", chaves: ["calor", "refletem"], definicoes: { calor: "Aquecimento — sente na pele.", refletem: "Devolvem a luz de volta pro céu, como um espelho." }, fotoUrl: superficiesImg },
    ],
    falaFinal: "Você já é observador do céu!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado! Cada rodada mostra uma pista do sol — escolha o HORÁRIO ou SITUAÇÃO certa!",
    instrucao: "⏱️ Leia e escolha!",
    duracaoSegundos: 15,
    pecas: [
      { id: "manha", emoji: "🌅", rotulo: "Manhã" },
      { id: "meio", emoji: "☀️", rotulo: "Meio-dia" },
      { id: "tarde", emoji: "🌇", rotulo: "Fim de tarde" },
      { id: "escuro", emoji: "🖤", rotulo: "Superfície escura" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Sombra bem longa", emoji: "🎋", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Sol no leste", emoji: "🌅", cor: "from-yellow-400 to-orange-600" }, contexto: "A sombra da árvore está longa pra oeste. O sol acabou de nascer. Qual horário?", pecaCertaId: "manha", fotoUrl: panoramaImg, feedbackAcerto: "Isso! MANHÃ — sol baixo no leste.", feedbackErro: "Sol nascendo no leste = MANHÃ." },
      { id: "r2", municipioA: { nome: "Sombra curtinha", emoji: "🐾", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Sol bem em cima", emoji: "☀️", cor: "from-yellow-300 to-amber-500" }, contexto: "A sombra está pequenininha, quase embaixo dos pés. Sol bem alto. Qual horário?", pecaCertaId: "meio", fotoUrl: panoramaImg, feedbackAcerto: "Combo! MEIO-DIA — sol no alto.", feedbackErro: "Sombra curta + sol alto = MEIO-DIA." },
      { id: "r3", municipioA: { nome: "Sombra longa pra leste", emoji: "🌗", cor: "from-purple-500 to-pink-700" }, municipioB: { nome: "Sol laranja no oeste", emoji: "🌇", cor: "from-pink-400 to-orange-600" }, contexto: "O sol está descendo pro oeste, laranja. Sombra vai pra leste. Qual horário?", pecaCertaId: "tarde", fotoUrl: panoramaImg, feedbackAcerto: "Perfeito! FIM DE TARDE — sol se pondo.", feedbackErro: "Sol laranja no oeste = TARDINHA." },
      { id: "r4", municipioA: { nome: "Aquece muito rápido", emoji: "🔥", cor: "from-red-500 to-orange-700" }, municipioB: { nome: "Absorve o sol", emoji: "🖤", cor: "from-slate-700 to-slate-900" }, contexto: "Qual superfície fica MAIS quente ao sol: uma escura ou clara?", pecaCertaId: "escuro", fotoUrl: superficiesImg, feedbackAcerto: "Isso! Cor ESCURA absorve mais calor.", feedbackErro: "Escuro ABSORVE mais luz e calor. É a superfície escura!" },
    ],
    falaFinal: "Você lê o sol como um cientista experiente!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "O sol nos dá duas coisas em partes iguais: LUZ e CALOR.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: panoramaImg,
    fatias: [
      { id: "luz", rotulo: "Luz", emoji: "💡", percentual: 50, cor: "#facc15", descricao: "Ilumina tudo. Cria dia e sombra. Sem luz, tudo escuro.", exemplos: ["Dia claro", "Sombras", "Enxergar"], fotoUrl: panoramaImg },
      { id: "calor", rotulo: "Calor", emoji: "🔥", percentual: 50, cor: "#ef4444", descricao: "Aquece o chão, a água e o ar. Escuros absorvem mais que claros.", exemplos: ["Areia quente", "Água morna", "Ar quente"], fotoUrl: superficiesImg },
    ],
    falaFinal: "Luz + calor = vida na Terra. O SOL faz tudo funcionar!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Últimas 3 perguntas pra fechar o Cristal do Sol e completar a coleção!",
    instrucao: "Responda 3 perguntas rápidas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Ao meio-dia, a sombra é:", fotoUrl: panoramaImg, opcoes: [{ id: "a", texto: "Curtinha", correta: true }, { id: "b", texto: "Comprida" }], feedbackAcerto: "Isso!", feedbackErro: "Sol ALTO = sombra CURTA." },
      { id: "q2", pergunta: "O sol dá:", fotoUrl: panoramaImg, opcoes: [{ id: "a", texto: "Luz e calor", correta: true }, { id: "b", texto: "Chuva" }], feedbackAcerto: "Certo!", feedbackErro: "Sol dá LUZ e CALOR (chuva vem da nuvem)." },
      { id: "q3", pergunta: "Qual esquenta MAIS no sol?", fotoUrl: superficiesImg, opcoes: [{ id: "a", texto: "Asfalto escuro", correta: true }, { id: "b", texto: "Areia clara" }], feedbackAcerto: "PERFEITO!", feedbackErro: "Escuro ABSORVE mais calor. É o asfalto!" },
    ],
    selo: { nome: "Cristal do Sol", subtitulo: "7º e ÚLTIMO cristal desbloqueado! Laboratório completo!", emoji: "💎", cor: "from-yellow-400 via-orange-500 to-red-600" },
    falaFinal: "VOCÊ RECUPEROU TODOS OS 7 CRISTAIS! O Laboratório Escola Brilha está brilhando de novo — e você é oficialmente Cientista da Natureza!",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Cientista da Natureza" },
};
