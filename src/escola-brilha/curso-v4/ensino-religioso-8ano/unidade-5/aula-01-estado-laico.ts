import type { AulaGeoV1 } from "../../types";
import { url as estadoLaico } from "@/assets/ensino-religioso-8ano/u5-estado-laico.jpg.asset.json";
import { url as esfera } from "@/assets/ensino-religioso-8ano/u4-esfera-publica.jpg.asset.json";
import { url as convicoes } from "@/assets/ensino-religioso-8ano/u1-convicoes.jpg.asset.json";

/**
 * Ensino Religioso · 8º Ano · Unidade 5 · Aula 01
 * "Estado laico e limites" — EF08ER05
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-estado-laico",
  titulo: "Estado Laico e seus Limites",
  iconeTrilha: "🏛️",
  bncc: ["EF08ER05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe o plenário do Congresso: espaço de TODOS os brasileiros.",
    mapaUrl: estadoLaico,
    imagemDestaqueUrl: esfera,
    aurora:
      "Investigador, olha esse plenário. É espaço público — de católico, evangélico, ateu, do candomblé, do judaísmo, do islamismo, indígena. Como as leis feitas aqui devem tratar a religião? A Constituição de 1988 é clara: o Brasil é ESTADO LAICO. Não tem religião oficial. Todas são livres — e nenhuma manda no Estado.",
    falaFinal: "Estado laico não é ateu — é NEUTRO. Investiga comigo os limites disso.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: 'Estado laico' significa que...",
    pergunta: "O que é ser laico?",
    opcoes: [
      { id: "ateu", titulo: "Estado ateu, contra religiões", subtitulo: "proibe fé", emoji: "🚫", cor: "from-slate-400 to-gray-600" },
      { id: "neutro", titulo: "Estado NEUTRO, protege todas", subtitulo: "sem favorecer nenhuma", emoji: "⚖️", cor: "from-emerald-400 to-green-600" },
    ],
    respostaCerta: "neutro",
    feedbackAcerto: "Isso! Laico = neutro. Protege a liberdade de TODAS as religiões e de quem não tem religião.",
    feedbackErro: "Laico NÃO é ateu. É NEUTRO: protege a liberdade de TODAS as religiões — e de quem não tem nenhuma.",
    falaFinal: "Laico = neutro. Guardião de todas as liberdades religiosas.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "laico", capa: "1. Estado Laico", emoji: "🏛️", cor: "from-emerald-500 to-green-700", conteudo: "ESTADO LAICO é aquele que não tem religião oficial. Trata todas as tradições — e a ausência de tradição — com igualdade jurídica. Brasil é laico desde a Constituição de 1891.", exemplo: "Ex.: Brasil, Estados Unidos, França, Uruguai, Portugal. Todos laicos.", fotoUrl: estadoLaico },
      { id: "teocratico", capa: "2. Estado Teocrático", emoji: "🕌", cor: "from-red-500 to-rose-700", conteudo: "ESTADO TEOCRÁTICO tem religião oficial e leis religiosas como leis civis. Uma tradição religiosa manda no Estado. É o OPOSTO de laico.", exemplo: "Ex.: Irã (islâmico), Vaticano (católico), Arábia Saudita (islâmico).", fotoUrl: esfera },
      { id: "liberdade", capa: "3. Liberdade Religiosa", emoji: "🕊️", cor: "from-sky-500 to-blue-700", conteudo: "LIBERDADE RELIGIOSA é o direito de ter, mudar ou não ter religião — sem punição. Inclui o culto público, a educação dos filhos e a expressão pacífica da fé.", exemplo: "Ex.: um jovem que muda do catolicismo pra umbanda tem direito garantido — e ninguém pode ser punido por isso.", fotoUrl: convicoes },
    ],
    falaFinal: "Laico, teocrático, liberdade. Suas ferramentas.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 princípios do Estado laico brasileiro. Toque em cada balão.",
    instrucao: "Toque em cada balão",
    mapaUrl: estadoLaico,
    pontos: [
      { id: "neutro", x: 22, y: 26, emoji: "⚖️", cor: "from-emerald-500 to-green-700", titulo: "NEUTRALIDADE do Estado", texto: "Constituição, Art. 19: União, Estados e Municípios NÃO podem estabelecer religião, subsidiar cultos ou embaraçá-los.", fotoUrl: estadoLaico },
      { id: "liberdade", x: 72, y: 26, emoji: "🕊️", cor: "from-sky-500 to-blue-700", titulo: "LIBERDADE plena", texto: "Art. 5º, VI: é INVIOLÁVEL a liberdade de consciência e de crença. Todo cidadão pode crer, mudar de crença ou não crer.", fotoUrl: convicoes },
      { id: "protecao", x: 26, y: 68, emoji: "🛡️", cor: "from-amber-500 to-orange-700", titulo: "PROTEÇÃO igual pra todos", texto: "Estado protege igualmente templos, terreiros, mesquitas, sinagogas, kinjas budistas — e o direito de não ter nenhum.", fotoUrl: esfera },
      { id: "limite", x: 74, y: 68, emoji: "🚧", cor: "from-red-500 to-rose-700", titulo: "LIMITE claro", texto: "Nenhuma religião pode virar lei do Estado. Fiéis participam da política, mas leis civis valem pra todos, independentemente da fé.", fotoUrl: convicoes },
    ],
    falaFinal: "4 princípios. Formam o chão do Estado laico brasileiro.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Estado LAICO é diferente de Estado ATEU porque:", fotoUrl: estadoLaico, cards: [
        { id: "iguais", emoji: "🟰", titulo: "São iguais", cor: "from-slate-400 to-gray-600" },
        { id: "neutro", emoji: "⚖️", titulo: "Laico é neutro; ateu proíbe/persegue religiões", cor: "from-emerald-500 to-green-700" },
        { id: "proibe", emoji: "🚫", titulo: "Laico proíbe fé", cor: "from-red-500 to-rose-700" },
      ], correta: "neutro", feedbackAcerto: "Isso! Laico protege TODAS as religiões e a ausência delas.", feedbackErro: "Laico = NEUTRO (protege todas). Ateu = contra religiões. São bem diferentes." },
      { id: "q2", pergunta: "No Brasil, um deputado pode:", fotoUrl: esfera, cards: [
        { id: "pode", emoji: "🏛️", titulo: "Ter fé e propor leis, sem instituir religião oficial", cor: "from-sky-500 to-blue-700" },
        { id: "naopode", emoji: "🚫", titulo: "Ser proibido de ter religião", cor: "from-slate-400 to-gray-600" },
        { id: "obrig", emoji: "❗", titulo: "Ter obrigação de professar uma fé", cor: "from-red-500 to-rose-700" },
      ], correta: "pode", feedbackAcerto: "Perfeito! Convicção pessoal + laicidade do cargo.", feedbackErro: "Deputado PODE ter fé — mas suas leis valem pra TODOS, não podem instituir religião oficial." },
      { id: "q3", pergunta: "Um exemplo de Estado TEOCRÁTICO atual:", fotoUrl: convicoes, cards: [
        { id: "brasil", emoji: "🇧🇷", titulo: "Brasil", cor: "from-slate-400 to-gray-600" },
        { id: "ira", emoji: "🕌", titulo: "Irã", cor: "from-red-500 to-rose-700" },
        { id: "franca", emoji: "🇫🇷", titulo: "França", cor: "from-sky-500 to-blue-700" },
      ], correta: "ira", feedbackAcerto: "Isso! Irã é República Islâmica — leis religiosas viram leis civis.", feedbackErro: "Irã é teocrático (República Islâmica). Brasil e França são laicos." },
    ],
    falaFinal: "Radar da laicidade calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil TODO estado é laico — protege qualquer tradição. Acenda 5 estados com forte diversidade religiosa protegida.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["BA", "SP", "RJ", "MG", "AM"], pergunta: "5 estados onde igrejas, terreiros, mesquitas, sinagogas e aldeias indígenas convivem sob o mesmo Estado laico?" },
    falaFinal: "BA, SP, RJ, MG, AM — sob a mesma Constituição, sob a mesma liberdade.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como o Brasil VIROU laico?",
    instrucao: "Ordene os 5 marcos",
    pergunta: "Do Império à Constituição:",
    paradas: [
      { id: "imperio", emoji: "👑", rotulo: "1. IMPÉRIO (1500-1889)", descricao: "Catolicismo era religião oficial do Estado. Outras cultuavam em segredo ou eram perseguidas." },
      { id: "1889", emoji: "🏛️", rotulo: "2. REPÚBLICA (1889)", descricao: "Proclamação da República inicia a separação Igreja-Estado." },
      { id: "1891", emoji: "📜", rotulo: "3. CONSTITUIÇÃO 1891", descricao: "Brasil oficialmente vira ESTADO LAICO. Nenhuma religião é oficial." },
      { id: "1988", emoji: "🕊️", rotulo: "4. CONSTITUIÇÃO 1988", descricao: "Consolida liberdade religiosa plena e proíbe discriminação — Art. 5º e Art. 19." },
      { id: "hoje", emoji: "🌍", rotulo: "5. HOJE", descricao: "Estado laico protege católicos, evangélicos, umbandistas, muçulmanos, ateus — todos, com igualdade." },
    ],
    ordemCerta: ["imperio", "1889", "1891", "1988", "hoje"],
    feedbackAcerto: "Perfeito! Império → República → 1891 → 1988 → hoje.",
    feedbackErro: "A ordem: IMPÉRIO (catolicismo oficial), REPÚBLICA em 1889, CONSTITUIÇÃO 1891 (laico), CONSTITUIÇÃO 1988 (consolidação), HOJE.",
    falaFinal: "5 marcos. Levamos 400 anos pra virar laicos — protejam essa conquista.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Investigador",
    subtitulo: "Página 5 — Estado laico",
    paragrafos: [
      { id: "p1", texto: "ESTADO LAICO é aquele que não adota religião oficial e trata TODAS as tradições — mais a ausência delas — com igualdade jurídica. É o oposto de Estado TEOCRÁTICO (que tem religião de Estado, como Irã ou Vaticano).", chaves: ["Estado laico", "teocrático"] },
      { id: "p2", texto: "Estado laico NÃO é ateu. É NEUTRO: garante liberdade de crer, de mudar de crença, de não crer. Protege igualmente igreja, terreiro, sinagoga, mesquita e templo budista.", chaves: ["neutro", "protege igualmente"] },
      { id: "p3", texto: "No Brasil, a laicidade está nos Artigos 5º (liberdade de crença é inviolável) e 19 (governos NÃO podem estabelecer religião, subvencionar cultos ou embaraçá-los) da Constituição de 1988.", chaves: ["Art. 5º", "Art. 19"] },
      { id: "p4", texto: "O LIMITE claro: cidadãos religiosos participam da política, mas nenhuma religião pode se tornar lei obrigatória pra todos. Convicções valem no debate; leis civis valem pra qualquer cidadão, com ou sem fé.", chaves: ["limite", "leis civis"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LIMITE CERTO! Cada situação: laicidade RESPEITADA ou VIOLADA?",
    instrucao: "⏱️ Isso respeita ou viola a laicidade?",
    duracaoSegundos: 12,
    pecas: [
      { id: "resp", emoji: "✅", rotulo: "RESPEITA a laicidade" },
      { id: "viol", emoji: "🚫", rotulo: "VIOLA a laicidade" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Escola pública", emoji: "🏫", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Ensino Religioso não confessional", emoji: "📚", cor: "from-indigo-400 to-blue-700" }, contexto: "Escola pública ensina SOBRE várias religiões, sem catequizar.", pecaCertaId: "resp", feedbackAcerto: "Isso! Ensino não confessional é permitido e recomendado.", feedbackErro: "RESPEITA sim — Ensino Religioso público é sobre as várias tradições, não a favor de uma." },
      { id: "r2", municipioA: { nome: "Prefeitura", emoji: "🏛️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Financia UMA igreja", emoji: "💰", cor: "from-pink-400 to-red-600" }, contexto: "Prefeito usa verba pública pra construir uma catedral de sua religião.", pecaCertaId: "viol", feedbackAcerto: "Isso! Viola o Art. 19 — verba pública não subvenciona culto.", feedbackErro: "VIOLA — Art. 19 proíbe governo de subvencionar cultos religiosos." },
      { id: "r3", municipioA: { nome: "Cidadã umbandista", emoji: "✨", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Concurso público", emoji: "📋", cor: "from-violet-400 to-purple-600" }, contexto: "Umbandista é aprovada em concurso público sem sofrer discriminação religiosa.", pecaCertaId: "resp", feedbackAcerto: "Perfeito! Constituição protege sua carreira igual a qualquer outra.", feedbackErro: "RESPEITA — Constituição protege qualquer cidadão, qualquer que seja sua religião." },
      { id: "r4", municipioA: { nome: "Presidente", emoji: "🎩", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "'Só minha religião pode', decreta", emoji: "❗", cor: "from-red-400 to-orange-600" }, contexto: "Presidente decreta que só UMA religião pode fazer eventos em prédios públicos.", pecaCertaId: "viol", feedbackAcerto: "Isso! Ataca a liberdade religiosa e a neutralidade do Estado.", feedbackErro: "VIOLA — decreto que privilegia uma religião fere Art. 19 e liberdade religiosa." },
      { id: "r5", municipioA: { nome: "Hospital público", emoji: "🏥", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Capelania voluntária multi-fé", emoji: "🕊️", cor: "from-teal-400 to-emerald-600" }, contexto: "Hospital do SUS oferece capelães de várias religiões — só a quem pedir.", pecaCertaId: "resp", feedbackAcerto: "Boa! Cuidado espiritual voluntário, plural, respeita a laicidade.", feedbackErro: "RESPEITA — capelania voluntária e plural é compatível com Estado laico." },
      { id: "r6", municipioA: { nome: "Vereador", emoji: "🗳️", cor: "from-orange-400 to-amber-600" }, municipioB: { nome: "Lei obriga oração na escola pública", emoji: "🙏", cor: "from-yellow-400 to-orange-600" }, contexto: "Vereador propõe lei que obriga aluno a rezar antes da aula na escola pública.", pecaCertaId: "viol", feedbackAcerto: "Isso! Obrigar oração em escola pública viola liberdade e laicidade.", feedbackErro: "VIOLA — obrigar culto em escola pública fere liberdade de crença e Estado laico." },
    ],
    falaFinal: "6 situações. Guardião da Laicidade afiado.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: dois tipos de participação religiosa na esfera pública.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "compativel", rotulo: "COMPATÍVEL com laicidade (~70%)", emoji: "✅", percentual: 70, cor: "#10b981", descricao: "Deputado religioso propor lei, escola confessional privada, capelania voluntária, festa cultural com raiz religiosa, comércio kosher/halal. Cidadão participa, mas Estado permanece neutro.", exemplos: ["🏛️ Bancadas", "🕊️ Capelania voluntária", "🎭 Festas culturais"] },
      { id: "incompativel", rotulo: "INCOMPATÍVEL (viola) (~30%)", emoji: "🚫", percentual: 30, cor: "#ef4444", descricao: "Governo financiar UMA religião, obrigar oração em escola pública, impor símbolo religioso em repartição, discriminar por religião. Estado escolhe UMA — vira semi-teocracia.", exemplos: ["💰 Verba pra 1 culto", "🙏 Oração obrigatória", "🚫 Discriminação"] },
    ],
    falaFinal: "Duas categorias. Uma amplia a democracia; outra a corrói.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia GUARDIÃO DO ESTADO LAICO.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "ESTADO LAICO significa que o Estado:", opcoes: [
        { id: "a", texto: "Combate religiões", correta: false },
        { id: "b", texto: "É neutro: não tem religião oficial e protege igualmente todas as tradições e a ausência delas", correta: true },
        { id: "c", texto: "Só permite uma religião", correta: false },
      ], feedbackAcerto: "Isso! Neutro e protetor de todas.", feedbackErro: "Laico = NEUTRO. Protege TODAS as religiões e o direito de não ter nenhuma." },
      { id: "av2", pergunta: "A base da laicidade brasileira está:", opcoes: [
        { id: "a", texto: "Nas leis eclesiásticas", correta: false },
        { id: "b", texto: "Nos Arts. 5º e 19 da Constituição de 1988", correta: true },
        { id: "c", texto: "Em decreto do papa", correta: false },
      ], feedbackAcerto: "Perfeito! Constituição de 1988, Arts. 5º e 19.", feedbackErro: "É a CONSTITUIÇÃO de 1988, Arts. 5º (liberdade de crença) e 19 (neutralidade)." },
      { id: "av3", pergunta: "Uma lei que obriga oração em escola pública:", opcoes: [
        { id: "a", texto: "Fortalece a laicidade", correta: false },
        { id: "b", texto: "Viola a laicidade e a liberdade religiosa", correta: true },
        { id: "c", texto: "É totalmente indiferente", correta: false },
      ], feedbackAcerto: "Isso! Obrigar culto em espaço público estatal viola a Constituição.", feedbackErro: "VIOLA — obrigar oração em escola pública fere a laicidade e a liberdade de crença." },
    ],
    selo: { nome: "Guardião do Estado Laico", subtitulo: "Insígnia da Liberdade Religiosa", emoji: "🕊️", cor: "from-emerald-400 to-green-600" },
    falaFinal: "Insígnia conquistada! Você é defensor da liberdade religiosa de todos.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guardião do Estado Laico" },
};
