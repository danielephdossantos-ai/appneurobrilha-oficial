import type { AulaGeoV1 } from "../../types";
import { url as esfera } from "@/assets/ensino-religioso-8ano/u4-esfera-publica.jpg.asset.json";
import { url as etica } from "@/assets/ensino-religioso-8ano/u2-etica.jpg.asset.json";
import { url as convicoes } from "@/assets/ensino-religioso-8ano/u1-convicoes.jpg.asset.json";

/**
 * Ensino Religioso · 8º Ano · Unidade 4 · Aula 01
 * "Religião nos campos públicos" — EF08ER04
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-religiao-esfera-publica",
  titulo: "Religião na Vida Pública",
  iconeTrilha: "🏛️",
  bncc: ["EF08ER04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe: religião fora do templo, dentro da praça.",
    mapaUrl: esfera,
    imagemDestaqueUrl: convicoes,
    aurora:
      "Investigador, religião não fica só dentro de igreja. Ela aparece na POLÍTICA (deputados evangélicos, católicos, umbandistas), na SAÚDE (hospitais confessionais, capelães), na EDUCAÇÃO (escolas religiosas), na ECONOMIA (empresas com valores éticos religiosos) e na CULTURA (festas, ritmos, comidas). Vamos investigar como.",
    falaFinal: "Religião ocupa a ESFERA PÚBLICA. Isso não é errado — é preciso entender COMO.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: religião DEVE participar da vida pública?",
    pergunta: "Religião pode influenciar política, saúde, educação?",
    opcoes: [
      { id: "so_templo", titulo: "Só dentro do templo", subtitulo: "público é só do Estado", emoji: "🚪", cor: "from-slate-400 to-gray-600" },
      { id: "publico", titulo: "SIM, cidadãos religiosos participam", subtitulo: "sem privilegiar UMA religião", emoji: "🏛️", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "publico",
    feedbackAcerto: "Isso! Cidadãos religiosos podem participar da vida pública — desde que nenhuma religião receba privilégio de Estado.",
    feedbackErro: "Cidadãos com convicções religiosas participam SIM da vida pública — o limite é não impor uma religião a todos.",
    falaFinal: "Participar sim; impor não. É a linha da laicidade.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "esfera", capa: "1. Esfera Pública", emoji: "🏛️", cor: "from-red-500 to-rose-700", conteudo: "ESFERA PÚBLICA é o espaço onde decisões sobre toda a sociedade acontecem: leis, políticas, educação, saúde, mídia. Vale pra crentes e não crentes.", exemplo: "Ex.: Congresso, prefeituras, escolas públicas, hospitais públicos, praças, redes sociais.", fotoUrl: esfera },
      { id: "influencia", capa: "2. Influência", emoji: "🌊", cor: "from-amber-500 to-orange-700", conteudo: "Uma tradição INFLUENCIA a esfera pública quando seus valores aparecem em decisões coletivas — leis, políticas, campanhas — sem obrigar ninguém a segui-la.", exemplo: "Ex.: valores cristãos e humanistas influenciaram a Declaração dos Direitos Humanos.", fotoUrl: convicoes },
      { id: "campos", capa: "3. Campos Públicos", emoji: "🗂️", cor: "from-sky-500 to-blue-700", conteudo: "Os CAMPOS PÚBLICOS onde a religião mais aparece: POLÍTICA, SAÚDE, EDUCAÇÃO, ECONOMIA e CULTURA. Cada um tem regras próprias sobre como isso pode acontecer.", exemplo: "Ex.: hospital pode ter capelão, mas não pode negar atendimento por motivo religioso.", fotoUrl: etica },
    ],
    falaFinal: "Esfera, influência, campos. Suas ferramentas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 campos públicos onde religião aparece hoje. Toque em cada balão e veja como.",
    instrucao: "Toque em cada balão",
    mapaUrl: esfera,
    pontos: [
      { id: "politica", x: 18, y: 26, emoji: "🏛️", cor: "from-red-500 to-rose-700", titulo: "POLÍTICA", texto: "Deputados e vereadores com formação religiosa (evangélica, católica, espírita, umbandista) propõem leis. Legítimo — desde que não instituam UMA religião oficial.", fotoUrl: esfera },
      { id: "saude", x: 72, y: 26, emoji: "🏥", cor: "from-emerald-500 to-green-700", titulo: "SAÚDE", texto: "Hospitais confessionais (Santa Casa, hospital adventista), capelães hospitalares, cuidado espiritual. Complementa o atendimento — não substitui.", fotoUrl: etica },
      { id: "educacao", x: 26, y: 68, emoji: "🏫", cor: "from-amber-500 to-orange-700", titulo: "EDUCAÇÃO", texto: "Escolas confessionais existem (católicas, evangélicas, judaicas, adventistas). Escolas públicas são laicas — ensinam SOBRE religiões, não uma religião.", fotoUrl: convicoes },
      { id: "economia", x: 74, y: 68, emoji: "💼", cor: "from-purple-500 to-fuchsia-700", titulo: "ECONOMIA", texto: "Comércio kosher (judaico), halal (islâmico), justo (economia solidária inspirada em valores religiosos). Cooperativas confessionais.", fotoUrl: esfera },
      { id: "cultura", x: 50, y: 88, emoji: "🎭", cor: "from-sky-500 to-blue-700", titulo: "CULTURA", texto: "Festas populares (Círio de Nazaré, Iemanjá, festas do Divino), gastronomia (acarajé, comida kosher), música (gospel, samba de terreiro, mantras).", fotoUrl: convicoes },
    ],
    falaFinal: "5 campos. Religião entra em todos — sem substituir o Estado.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Um deputado religioso propor uma lei é:", fotoUrl: esfera, cards: [
        { id: "proibido", emoji: "🚫", titulo: "Proibido pela Constituição", cor: "from-slate-400 to-gray-600" },
        { id: "legitimo", emoji: "🏛️", titulo: "Legítimo — desde que não imponha UMA religião", cor: "from-emerald-500 to-green-700" },
        { id: "obrigatorio", emoji: "❗", titulo: "Obrigatório", cor: "from-red-500 to-rose-700" },
      ], correta: "legitimo", feedbackAcerto: "Isso! Cidadãos religiosos podem propor leis — o limite é não instituir religião oficial.", feedbackErro: "É LEGÍTIMO: cidadão religioso pode propor leis. O limite é a lei não beneficiar UMA religião só." },
      { id: "q2", pergunta: "Um hospital religioso pode:", fotoUrl: etica, cards: [
        { id: "recusar", emoji: "🚫", titulo: "Recusar atendimento por religião", cor: "from-slate-400 to-gray-600" },
        { id: "capelao", emoji: "🕊️", titulo: "Oferecer capelão, mas atender a todos", cor: "from-sky-500 to-blue-700" },
        { id: "converter", emoji: "📖", titulo: "Exigir conversão", cor: "from-red-500 to-rose-700" },
      ], correta: "capelao", feedbackAcerto: "Perfeito! Cuidado espiritual é bem-vindo; discriminação, não.", feedbackErro: "Pode oferecer capelão SIM, mas jamais recusar atendimento ou exigir conversão." },
      { id: "q3", pergunta: "Escola PÚBLICA (do Estado) sobre religião:", fotoUrl: convicoes, cards: [
        { id: "ensina", emoji: "✝️", titulo: "Ensina UMA religião como verdade", cor: "from-slate-400 to-gray-600" },
        { id: "sobre", emoji: "📚", titulo: "Ensina SOBRE as várias religiões", cor: "from-amber-500 to-orange-700" },
        { id: "proibe", emoji: "🚫", titulo: "Proíbe falar de religião", cor: "from-red-500 to-rose-700" },
      ], correta: "sobre", feedbackAcerto: "Isso! Escola pública laica ensina SOBRE — não a favor de uma.", feedbackErro: "Escola pública ensina SOBRE as religiões (Ensino Religioso não confessional), sem favorecer nenhuma." },
    ],
    falaFinal: "Radar público calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, religião participa da vida pública em todas as regiões. Acenda 5 estados de forte presença religiosa pública.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "MG", "BA", "PA", "PE"], pergunta: "5 estados com bancadas religiosas, hospitais confessionais e grandes festas populares religiosas?" },
    falaFinal: "SP, MG, BA, PA, PE — religião presente na esfera pública, sem monopólio.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um valor religioso vira POLÍTICA PÚBLICA?",
    instrucao: "Ordene os 5 passos",
    pergunta: "Do templo à lei:",
    paradas: [
      { id: "valor", emoji: "💎", rotulo: "1. VALOR religioso", descricao: "A comunidade defende um valor: cuidado com o pobre, respeito ao idoso, proteção da criança." },
      { id: "conviccao", emoji: "🧭", rotulo: "2. CONVICÇÃO cidadã", descricao: "Fiéis se convencem: 'isso deveria ser política pública, não só caridade nossa'." },
      { id: "mobilizacao", emoji: "📣", rotulo: "3. MOBILIZAÇÃO", descricao: "Grupos religiosos + outros aliados pressionam por mudanças." },
      { id: "debate", emoji: "💬", rotulo: "4. DEBATE público", descricao: "Congresso e sociedade discutem — com todas as vozes, religiosas ou não." },
      { id: "lei", emoji: "📜", rotulo: "5. LEI aprovada", descricao: "Se aprovada, vale pra TODOS — sem obrigar ninguém a seguir a religião de origem." },
    ],
    ordemCerta: ["valor", "conviccao", "mobilizacao", "debate", "lei"],
    feedbackAcerto: "Perfeito! Valor → convicção → mobilização → debate → lei.",
    feedbackErro: "A ordem: VALOR religioso, CONVICÇÃO cidadã, MOBILIZAÇÃO, DEBATE público, LEI aprovada.",
    falaFinal: "5 passos. É como valores religiosos entram na democracia sem virar teocracia.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 4 — Religião nos campos públicos",
    paragrafos: [
      { id: "p1", texto: "A ESFERA PÚBLICA é o espaço das decisões que afetam TODA a sociedade — políticas, saúde, educação, economia, cultura. Nela, todo cidadão participa: crente e não crente.", chaves: ["esfera pública", "todo cidadão"] },
      { id: "p2", texto: "As tradições religiosas INFLUENCIAM a esfera pública quando seus valores aparecem em decisões coletivas. Isso é legítimo — democracia inclui vozes religiosas e não religiosas.", chaves: ["influenciam", "legítimo"] },
      { id: "p3", texto: "Cinco grandes campos: POLÍTICA (leis, partidos), SAÚDE (hospitais, capelães), EDUCAÇÃO (escolas confessionais), ECONOMIA (comércio kosher, halal, solidário), CULTURA (festas, música, gastronomia).", chaves: ["cinco campos"] },
      { id: "p4", texto: "O LIMITE claro: nenhuma religião pode virar RELIGIÃO DO ESTADO. Cada cidadão participa com suas convicções, mas as leis valem pra todos e nenhuma tradição recebe privilégio oficial.", chaves: ["limite", "todos"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CAMPO CERTO! Cada exemplo é influência religiosa em UM campo público. Qual?",
    instrucao: "⏱️ Em qual campo público isso acontece?",
    duracaoSegundos: 12,
    pecas: [
      { id: "pol", emoji: "🏛️", rotulo: "Política" },
      { id: "sau", emoji: "🏥", rotulo: "Saúde" },
      { id: "edu", emoji: "🏫", rotulo: "Educação" },
      { id: "eco", emoji: "💼", rotulo: "Economia" },
      { id: "cul", emoji: "🎭", rotulo: "Cultura" },
      { id: "mid", emoji: "📱", rotulo: "Mídia" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Frente Parlamentar", emoji: "🏛️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Deputados religiosos", emoji: "🗳️", cor: "from-pink-400 to-red-600" }, contexto: "Bancada evangélica no Congresso propõe leis inspiradas em valores da tradição.", pecaCertaId: "pol", feedbackAcerto: "Isso! Campo POLÍTICA.", feedbackErro: "É POLÍTICA — bancadas religiosas atuando no Congresso." },
      { id: "r2", municipioA: { nome: "Capelão", emoji: "🕊️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Cuidado espiritual", emoji: "🏥", cor: "from-teal-400 to-emerald-600" }, contexto: "Hospital público oferece cuidado espiritual voluntário a quem pede.", pecaCertaId: "sau", feedbackAcerto: "Perfeito! Campo SAÚDE.", feedbackErro: "É SAÚDE — capelania hospitalar, sempre voluntária." },
      { id: "r3", municipioA: { nome: "Colégio católico", emoji: "🏫", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Escola adventista", emoji: "📚", cor: "from-yellow-400 to-amber-600" }, contexto: "Escola confessional oferece ensino regular com valores da tradição religiosa.", pecaCertaId: "edu", feedbackAcerto: "Isso! Campo EDUCAÇÃO.", feedbackErro: "É EDUCAÇÃO — escolas confessionais, legítimas na esfera privada." },
      { id: "r4", municipioA: { nome: "Comércio kosher", emoji: "🥖", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Certificação halal", emoji: "🥩", cor: "from-violet-400 to-purple-600" }, contexto: "Alimentos preparados segundo regras judaicas e islâmicas movimentam bilhões no mundo.", pecaCertaId: "eco", feedbackAcerto: "Perfeito! Campo ECONOMIA.", feedbackErro: "É ECONOMIA — comércio kosher e halal movimentam mercado global." },
      { id: "r5", municipioA: { nome: "Círio de Nazaré", emoji: "🕯️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Festa de Iemanjá", emoji: "🌊", cor: "from-cyan-400 to-sky-600" }, contexto: "Grandes festas populares nas ruas, com origem religiosa, viraram patrimônio cultural.", pecaCertaId: "cul", feedbackAcerto: "Boa! Campo CULTURA.", feedbackErro: "É CULTURA — festas religiosas viraram patrimônio cultural popular." },
      { id: "r6", municipioA: { nome: "Canal cristão", emoji: "📺", cor: "from-orange-400 to-amber-600" }, municipioB: { nome: "Podcast espírita", emoji: "🎙️", cor: "from-red-400 to-orange-600" }, contexto: "Rádios, canais de TV, podcasts e perfis religiosos alcançam milhões diariamente.", pecaCertaId: "mid", feedbackAcerto: "Isso! Campo MÍDIA.", feedbackErro: "É MÍDIA — presença religiosa em TV, rádio, redes." },
    ],
    falaFinal: "6 campos, 6 exemplos. Investigador da Esfera Pública afiado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: onde religião mais aparece na esfera pública brasileira hoje.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "cultura", rotulo: "CULTURA popular (~55%)", emoji: "🎭", percentual: 55, cor: "#0ea5e9", descricao: "Festas, música, gastronomia, patrimônio imaterial. É onde religião mais aparece — e onde menos costuma gerar conflito.", exemplos: ["🕯️ Círio", "🌊 Iemanjá", "🎵 Gospel/samba de terreiro"] },
      { id: "institucional", rotulo: "INSTITUCIONAL (~45%)", emoji: "🏛️", percentual: 45, cor: "#ef4444", descricao: "Política, saúde, educação, economia. É onde religião participa da tomada de decisão — e onde a linha da laicidade precisa ser cuidada.", exemplos: ["🏛️ Bancadas", "🏥 Hospitais", "🏫 Escolas confessionais"] },
    ],
    falaFinal: "Duas presenças. Ambas legítimas — dentro dos limites democráticos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia INVESTIGADOR DA ESFERA PÚBLICA.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Religião participar da esfera pública é:", opcoes: [
        { id: "a", texto: "Sempre proibido", correta: false },
        { id: "b", texto: "Legítimo, desde que nenhuma vire religião oficial do Estado", correta: true },
        { id: "c", texto: "Obrigatório", correta: false },
      ], feedbackAcerto: "Isso! Participar sim, dominar não.", feedbackErro: "É LEGÍTIMO SIM — o limite é não haver religião oficial do Estado." },
      { id: "av2", pergunta: "Um hospital confessional PÚBLICO ou conveniado ao SUS:", opcoes: [
        { id: "a", texto: "Pode recusar atender quem não é da religião", correta: false },
        { id: "b", texto: "Deve atender a todos igualmente, oferecendo cuidado espiritual voluntário", correta: true },
        { id: "c", texto: "Deve converter pacientes", correta: false },
      ], feedbackAcerto: "Perfeito! Atendimento universal + cuidado espiritual voluntário.", feedbackErro: "Deve atender TODOS igualmente. Capelania é opcional, jamais imposição." },
      { id: "av3", pergunta: "Uma escola PÚBLICA sobre religião:", opcoes: [
        { id: "a", texto: "Ensina UMA religião como verdade", correta: false },
        { id: "b", texto: "Ensina SOBRE as várias tradições, com respeito e sem catequizar", correta: true },
        { id: "c", texto: "Proíbe qualquer conversa sobre religião", correta: false },
      ], feedbackAcerto: "Isso! Ensino Religioso escolar é NÃO confessional.", feedbackErro: "Escola pública ensina SOBRE as religiões, sem catequese e sem favorecer nenhuma." },
    ],
    selo: { nome: "Investigador da Esfera Pública", subtitulo: "Insígnia da Religião nos Campos Públicos", emoji: "🏛️", cor: "from-red-400 to-rose-600" },
    falaFinal: "Insígnia conquistada! Você entende como religião participa da vida pública sem virar teocracia.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Investigador da Esfera Pública" },
};
