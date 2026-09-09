import type { AulaGeoV1 } from "../../types";
import { url as arquitetura } from "@/assets/ensino-religioso-5ano/u7-arquitetura.jpg.asset.json";
import { url as instrumentos } from "@/assets/ensino-religioso-5ano/u7-instrumentos.jpg.asset.json";
import { url as mandala } from "@/assets/ensino-religioso-5ano/u6-mandala.jpg.asset.json";
import { url as diversidade } from "@/assets/ensino-religioso-5ano/01-diversidade.jpg.asset.json";
import { url as afro } from "@/assets/ensino-religioso-5ano/06-afro-brasileira.jpg.asset.json";

/**
 * Ensino Religioso · 5º Ano · Unidade 7 · Aula 01
 * "Respeito às Diversas Linguagens Religiosas" — EF05ER07
 * FECHAMENTO da unidade e do 5º ano de ER.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-linguagens-religiosas",
  titulo: "Muitas Linguagens, Um Só Respeito",
  iconeTrilha: "🕊️",
  bncc: ["EF05ER07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: três templos, três estilos, uma mesma rua.",
    mapaUrl: arquitetura,
    imagemDestaqueUrl: arquitetura,
    aurora:
      "Explorador, olha essa rua. Uma torre de igreja, um minarete de mesquita, uma cúpula de sinagoga. Três formas MUITO diferentes de construir espaço sagrado — dividindo o mesmo céu, na mesma cidade. Cada arquitetura FALA algo sobre o que aquela tradição valoriza.",
    falaFinal:
      "Nesta aula final do 5º ano, vamos reunir tudo: as MUITAS linguagens religiosas — arquitetura, música, arte, roupa, comida — e o RESPEITO que devemos a todas.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: respeitar uma tradição diferente da minha significa que preciso PARTICIPAR dela?",
    pergunta: "Respeito = participação?",
    opcoes: [
      { id: "nao", titulo: "NÃO — basta não desrespeitar", subtitulo: "posso apenas reconhecer", emoji: "🤝", cor: "from-emerald-400 to-green-600" },
      { id: "sim", titulo: "Sim, tem que participar", subtitulo: "senão não vale", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "nao",
    feedbackAcerto: "Isso! Respeito é NÃO destruir, NÃO zombar, RECONHECER o direito. Não precisa participar.",
    feedbackErro: "Respeitar NÃO exige participar. Basta não destruir, não zombar e reconhecer o direito de existir.",
    falaFinal: "Fica claro o mínimo. Bora entender melhor.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras finais.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "linguagem", capa: "1. Linguagem religiosa", emoji: "🎨", cor: "from-purple-500 to-fuchsia-700", conteudo: "LINGUAGEM RELIGIOSA é toda forma que uma tradição usa pra EXPRESSAR o sagrado: arquitetura, música, dança, roupa, comida, pintura, escultura, gestos. Cada tradição desenvolve as suas.", exemplo: "Ex.: minarete e canto do muezim são linguagens do islamismo.", fotoUrl: arquitetura },
      { id: "liberdade", capa: "2. Liberdade religiosa", emoji: "🕊️", cor: "from-sky-500 to-blue-700", conteudo: "LIBERDADE RELIGIOSA é o DIREITO garantido pela Constituição Brasileira de cada pessoa escolher, praticar, mudar ou não ter religião. É crime impedir alguém de praticar sua fé.", exemplo: "Ex.: fechar um terreiro à força é crime chamado intolerância religiosa.", fotoUrl: diversidade },
      { id: "respeito", capa: "3. Respeito ativo", emoji: "🤝", cor: "from-emerald-500 to-green-700", conteudo: "RESPEITO ATIVO não é só 'não fazer mal'. É PROTEGER quem sofre preconceito, DENUNCIAR ataques, aprender sobre o que é diferente. Ser cidadão pleno é isso.", exemplo: "Ex.: defender um colega que é zombado por sua religião.", fotoUrl: afro },
    ],
    falaFinal: "Linguagem, liberdade, respeito ativo. Três chaves finais.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 linguagens religiosas em diferentes tradições. Toque nos balões.",
    instrucao: "Toque em cada balão",
    mapaUrl: arquitetura,
    pontos: [
      { id: "arq", x: 25, y: 30, emoji: "🏛️", cor: "from-slate-400 to-gray-600", titulo: "ARQUITETURA sagrada", texto: "Igrejas apontam pro céu com torres. Mesquitas usam cúpulas e minaretes. Sinagogas destacam a Estrela de Davi. Terreiros são casas circulares abertas. Templos budistas têm telhados curvos. Cada forma DIZ algo.", fotoUrl: arquitetura },
      { id: "mus", x: 70, y: 30, emoji: "🎵", cor: "from-amber-500 to-orange-700", titulo: "MÚSICA sagrada", texto: "Cristãos cantam corais e hinos. Muçulmanos ouvem a recitação do Alcorão. Judeus tocam o shofar (chifre). Afros usam atabaques. Hindus tocam sitar. Indígenas cantam com maracás. A música LEVA ao sagrado.", fotoUrl: instrumentos },
      { id: "arte", x: 30, y: 70, emoji: "🎨", cor: "from-purple-500 to-fuchsia-700", titulo: "ARTE VISUAL", texto: "Mandalas budistas, ícones ortodoxos, caligrafia árabe do Alcorão, pinturas corporais indígenas, colares afros. Cada arte expressa uma visão do sagrado que palavras não alcançam.", fotoUrl: mandala },
      { id: "corpo", x: 75, y: 68, emoji: "👕", cor: "from-emerald-500 to-green-700", titulo: "ROUPA e COMIDA", texto: "Kipá judaica, hijab muçulmano, roupa branca afro, batina cristã, kesa budista. Comidas kosher, halal, vegetariana, ovo de Páscoa, tâmaras do Eid. Corpo e mesa também DIZEM o sagrado.", fotoUrl: diversidade },
    ],
    falaFinal:
      "4 linguagens visíveis todo dia na rua. Todas merecem RESPEITO.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Respeitar uma tradição religiosa diferente da minha significa:", fotoUrl: diversidade, cards: [{ id: "recon", emoji: "🤝", titulo: "Reconhecer o direito dela existir", cor: "from-emerald-500 to-green-700" }, { id: "part", emoji: "🙏", titulo: "Participar obrigatoriamente", cor: "from-slate-400 to-gray-600" }, { id: "conv", emoji: "🔄", titulo: "Me converter a ela", cor: "from-red-500 to-rose-700" }], correta: "recon", feedbackAcerto: "Isso! Reconhecer o direito, não precisa participar nem se converter.", feedbackErro: "Respeitar é RECONHECER O DIREITO — não precisa participar nem se converter." },
      { id: "q2", pergunta: "Fechar à força um templo de outra religião é:", fotoUrl: afro, cards: [{ id: "crime", emoji: "🚨", titulo: "Crime de intolerância religiosa", cor: "from-red-500 to-rose-700" }, { id: "livre", emoji: "🕊️", titulo: "Liberdade de expressão", cor: "from-sky-500 to-blue-700" }, { id: "opin", emoji: "💬", titulo: "Só uma opinião", cor: "from-slate-400 to-gray-600" }], correta: "crime", feedbackAcerto: "Perfeito! É crime previsto em lei no Brasil.", feedbackErro: "É CRIME de intolerância religiosa, punido por lei no Brasil." },
      { id: "q3", pergunta: "A caligrafia árabe do Alcorão é exemplo de:", fotoUrl: instrumentos, cards: [{ id: "arte", emoji: "🎨", titulo: "Linguagem religiosa artística", cor: "from-purple-500 to-fuchsia-700" }, { id: "moda", emoji: "👗", titulo: "Só moda", cor: "from-slate-400 to-gray-600" }, { id: "erro", emoji: "❌", titulo: "Um erro do islamismo", cor: "from-red-500 to-rose-700" }], correta: "arte", feedbackAcerto: "Isso! Arte que expressa o sagrado — beleza é oração.", feedbackErro: "É LINGUAGEM RELIGIOSA ARTÍSTICA: expressa o sagrado com beleza." },
    ],
    falaFinal: "Radar afinado no essencial.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados onde a diversidade de LINGUAGENS religiosas é bem visível (arquitetura, música, festas).",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "BA", "PE", "RS"], pergunta: "Quais 5 estados combinam grande diversidade de templos, cantos e festas religiosas?" },
    falaFinal: "São Paulo (todas), Rio (todas), Bahia (afro), Pernambuco (Xangô), Rio Grande do Sul (imigrações). Mosaico sonoro e visível.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene: como uma pessoa se torna CIDADÃ que respeita todas as tradições.",
    instrucao: "Toque na ordem correta",
    pergunta: "Como se forma um cidadão respeitoso?",
    paradas: [
      { id: "conh", emoji: "👀", rotulo: "1. CONHECE que existem várias", descricao: "Descobre, ainda criança, que existem MUITAS tradições religiosas ao seu redor." },
      { id: "estuda", emoji: "📚", rotulo: "2. ESTUDA sem preconceito", descricao: "Aprende sobre cada uma na escola, com material sério e respeitoso." },
      { id: "conv", emoji: "🤝", rotulo: "3. CONVIVE com pessoas diferentes", descricao: "Faz amizade com colegas de outras religiões (ou sem religião)." },
      { id: "def", emoji: "✊", rotulo: "4. DEFENDE quem sofre preconceito", descricao: "Não deixa passar piada nem ataque contra religião de ninguém." },
      { id: "cid", emoji: "🕊️", rotulo: "5. Vira CIDADÃO pleno", descricao: "Adulto que constrói uma sociedade onde todos podem viver sua fé livremente." },
    ],
    ordemCerta: ["conh", "estuda", "conv", "def", "cid"],
    feedbackAcerto: "Isso! Conhece → estuda → convive → defende → cidadão.",
    feedbackErro: "5 passos: CONHECE que existem várias, ESTUDA sem preconceito, CONVIVE, DEFENDE quem sofre, vira CIDADÃO pleno.",
    falaFinal: "5 passos pra ser cidadão de verdade.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Explorador de Tradições",
    subtitulo: "Página 7 (Final) — Linguagens & Respeito",
    paragrafos: [
      { id: "p1", texto: "Cada tradição religiosa usa MUITAS LINGUAGENS pra expressar o sagrado: arquitetura, música, arte, roupa, comida, gestos. Todas essas linguagens merecem RESPEITO.", chaves: ["linguagens", "respeito"] },
      { id: "p2", texto: "A LIBERDADE RELIGIOSA é um direito garantido pela Constituição Brasileira. Cada pessoa pode escolher, praticar, mudar ou não ter religião — e ninguém pode impedir.", chaves: ["liberdade", "direito"] },
      { id: "p3", texto: "INTOLERÂNCIA RELIGIOSA é CRIME. Fechar templos, agredir pessoas, zombar de crenças ou impedir cultos são atos puníveis por lei.", chaves: ["intolerância", "crime"] },
      { id: "p4", texto: "Respeitar NÃO é participar de tudo nem concordar com tudo. É reconhecer o direito de cada tradição existir e defender quem sofre preconceito. Isso é ser cidadão.", chaves: ["reconhecer", "cidadão"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo final.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CIDADÃO DAS TRADIÇÕES! Escolha a atitude CORRETA em cada situação.",
    instrucao: "⏱️ Qual atitude é a correta?",
    duracaoSegundos: 12,
    pecas: [
      { id: "respeitar", emoji: "🤝", rotulo: "Respeitar e defender" },
      { id: "aprender", emoji: "📚", rotulo: "Aprender mais" },
      { id: "denunciar", emoji: "🚨", rotulo: "Denunciar às autoridades" },
      { id: "escutar", emoji: "👂", rotulo: "Escutar com atenção" },
      { id: "compartilhar", emoji: "🎉", rotulo: "Compartilhar a diversidade" },
      { id: "acolher", emoji: "🫂", rotulo: "Acolher quem sofreu" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Um colega faz piada", emoji: "😢", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Sobre o candomblé de outro amigo", emoji: "🥁", cor: "from-amber-400 to-orange-600" }, contexto: "Você presencia bullying religioso na escola.", pecaCertaId: "respeitar", feedbackAcerto: "Isso! Respeitar E defender quem foi zombado.", feedbackErro: "Não deixa passar. RESPEITE E DEFENDA quem foi zombado." },
      { id: "r2", municipioA: { nome: "Não conheço", emoji: "❓", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Como funciona o Hanuká?", emoji: "🕎", cor: "from-indigo-400 to-blue-700" }, contexto: "Você quer entender uma tradição diferente.", pecaCertaId: "aprender", feedbackAcerto: "Perfeito! Aprender é respeito.", feedbackErro: "APRENDER MAIS sobre a tradição — isso é respeito." },
      { id: "r3", municipioA: { nome: "Alguém depredou", emoji: "🚨", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Um terreiro do bairro", emoji: "🥁", cor: "from-amber-400 to-orange-600" }, contexto: "Você viu um ato de vandalismo contra um espaço sagrado.", pecaCertaId: "denunciar", feedbackAcerto: "Isso! Isso é crime — precisa ser denunciado.", feedbackErro: "É CRIME de intolerância religiosa. DENUNCIE às autoridades." },
      { id: "r4", municipioA: { nome: "Sua avó", emoji: "👵", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Conta como aprendeu a rezar", emoji: "🙏", cor: "from-pink-400 to-purple-600" }, contexto: "Um mais velho compartilha uma tradição.", pecaCertaId: "escutar", feedbackAcerto: "Perfeito! Escuta atenta é aprendizagem.", feedbackErro: "ESCUTAR COM ATENÇÃO. Os mais velhos são fontes de sabedoria." },
      { id: "r5", municipioA: { nome: "Festa da diversidade", emoji: "🎉", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Na escola", emoji: "🏫", cor: "from-teal-400 to-emerald-600" }, contexto: "A turma organiza um evento sobre tradições religiosas do Brasil.", pecaCertaId: "compartilhar", feedbackAcerto: "Isso! Compartilhar a riqueza é celebrar o Brasil.", feedbackErro: "COMPARTILHAR a diversidade — o Brasil fica mais forte quando todos se conhecem." },
      { id: "r6", municipioA: { nome: "Colega chegou triste", emoji: "😔", cor: "from-slate-400 to-slate-600" }, municipioB: { nome: "Foi humilhado por sua fé", emoji: "💔", cor: "from-red-400 to-rose-600" }, contexto: "Alguém procura você depois de sofrer preconceito.", pecaCertaId: "acolher", feedbackAcerto: "Perfeito! Acolhimento cura.", feedbackErro: "ACOLHER quem sofreu — abraço, escuta, apoio." },
    ],
    falaFinal: "6 atitudes cidadãs. Você está pronto.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza final: as duas grandes garantias da Constituição sobre religião.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "livre", rotulo: "LIBERDADE de crença (~50%)", emoji: "🕊️", percentual: 50, cor: "#10b981", descricao: "Todo brasileiro pode escolher, praticar, mudar ou não ter religião. Ninguém pode obrigar ou impedir.", exemplos: ["🙏 Praticar", "🚪 Mudar", "🚫 Não ter"] },
      { id: "protege", rotulo: "PROTEÇÃO contra intolerância (~50%)", emoji: "✊", percentual: 50, cor: "#dc2626", descricao: "Qualquer ato de discriminação, ofensa ou violência contra uma tradição religiosa é crime — punível com multa e prisão.", exemplos: ["🚨 Denúncia", "⚖️ Justiça", "🛡️ Proteção"] },
      ],
    falaFinal: "Liberdade + proteção. É assim que uma democracia respeita a fé.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais do 5º ano de Ensino Religioso.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A Constituição Brasileira garante:", opcoes: [{ id: "a", texto: "Uma única religião oficial", correta: false }, { id: "b", texto: "Liberdade de crença e proteção contra intolerância", correta: true }, { id: "c", texto: "Que todos sigam a religião da família", correta: false }], feedbackAcerto: "Isso! Liberdade + proteção contra intolerância.", feedbackErro: "Garante LIBERDADE de crença E PROTEÇÃO contra intolerância religiosa." },
      { id: "av2", pergunta: "Zombar da religião de um colega é:", opcoes: [{ id: "a", texto: "Só uma piada leve", correta: false }, { id: "b", texto: "Ato de intolerância — precisa ser corrigido", correta: true }, { id: "c", texto: "Liberdade de expressão sem limite", correta: false }], feedbackAcerto: "Perfeito! Intolerância que precisa ser corrigida.", feedbackErro: "É INTOLERÂNCIA religiosa — precisa ser corrigido, não é 'piada leve'." },
      { id: "av3", pergunta: "Um bom cidadão diante da diversidade religiosa:", opcoes: [{ id: "a", texto: "Só aceita a sua tradição", correta: false }, { id: "b", texto: "Conhece, respeita e defende todas as tradições", correta: true }, { id: "c", texto: "Se converte pra todas", correta: false }], feedbackAcerto: "Isso! Conhecer, respeitar e defender — postura completa.", feedbackErro: "Conhece, RESPEITA e DEFENDE todas as tradições. Cidadão pleno." },
    ],
    selo: { nome: "Cidadão das Tradições", subtitulo: "Insígnia Final do 5º Ano", emoji: "🕊️", cor: "from-emerald-400 to-teal-600" },
    falaFinal:
      "🎉 Insígnia final conquistada! Você terminou o 5º ano de Ensino Religioso: conhece as datas sagradas, respeita as diversas interpretações, entende a eternidade, valoriza a tradição oral, reconhece as raízes indígenas, afros e ciganas, sabe as 4 linguagens do sagrado e defende a liberdade religiosa. Parabéns, Explorador!",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Cidadão das Tradições — Selo Final 5º Ano" },
};
