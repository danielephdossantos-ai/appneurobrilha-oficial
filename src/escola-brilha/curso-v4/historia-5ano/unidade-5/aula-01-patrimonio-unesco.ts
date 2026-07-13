import type { AulaGeoV1 } from "../../types";
import imgOuro from "@/assets/historia-5ano/ouro-preto.jpg";
import imgIguacu from "@/assets/historia-5ano/cataratas-iguacu.jpg";
import imgMachu from "@/assets/historia-5ano/machu-picchu.jpg";
import imgMapa from "@/assets/historia-5ano/mapa-patrimonios-brasil.jpg";
import imgOnu from "@/assets/historia-5ano/onu-assembleia.jpg";

/**
 * História · 5º Ano · Unidade 5 · Aula 01
 * "Patrimônio da Humanidade e Diversidade Cultural"
 * Restaura a Página 5: O Templo da Memória Humana.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-patrimonio-unesco",
  titulo: "Patrimônio da Humanidade e Diversidade Cultural",
  iconeTrilha: "🏛️",
  bncc: ["EF05HI06", "EF05HI09"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a LUPA sobre Ouro Preto (MG). Igrejas coloniais, ruas de pedra, casarões do século XVIII — tudo protegido pela UNESCO como PATRIMÔNIO DA HUMANIDADE.",
    mapaUrl: imgOuro,
    imagemDestaqueUrl: imgMapa,
    aurora:
      "Pequeno Historiador, existem lugares tão importantes que NÃO pertencem só a um país — pertencem à HUMANIDADE inteira. A UNESCO os protege com um selo azul.",
    falaFinal: "Nesta aula você acende a quinta Tocha: O Templo da Memória Humana.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: o que muda quando um lugar recebe o título de PATRIMÔNIO DA HUMANIDADE?",
    pergunta: "Qual o efeito do selo UNESCO?",
    fotoUrl: imgOuro,
    opcoes: [
      { id: "prot", titulo: "O governo é obrigado a proteger", subtitulo: "não pode destruir, tem que restaurar", emoji: "🛡️", cor: "from-emerald-600 to-teal-800", fotoUrl: imgMachu },
      { id: "nada", titulo: "Nada muda, é só um selo bonito", subtitulo: "sem obrigação real", emoji: "🏷️", cor: "from-slate-500 to-slate-700", fotoUrl: imgIguacu },
    ],
    respostaCerta: "prot",
    feedbackAcerto: "Correto. O país assume COMPROMISSO INTERNACIONAL de proteger, restaurar e proibir destruição.",
    feedbackErro: "Não. O selo é COMPROMISSO real. O governo tem que fiscalizar e proteger o local por lei.",
    falaFinal: "O selo UNESCO é PROTEÇÃO GLOBAL contra destruição, especulação imobiliária e desmatamento.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas do vocabulário do patrimônio.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      { id: "unesco", capa: "UNESCO", emoji: "🌐", cor: "from-sky-600 to-blue-800", fotoUrl: imgOnu, conteudo: "UNESCO é a agência da ONU pra EDUCAÇÃO, CIÊNCIA e CULTURA. Fundada em 1945, ela avalia e concede o título de Patrimônio da Humanidade pra lugares excepcionais do planeta.", exemplo: "Exemplo: a UNESCO tem sede em Paris e reúne quase 200 países-membros." },
      { id: "cult", capa: "Patrimônio Cultural", emoji: "🏛️", cor: "from-amber-600 to-orange-800", fotoUrl: imgOuro, conteudo: "PATRIMÔNIO CULTURAL são OBRAS HUMANAS excepcionais: cidades históricas, monumentos, igrejas, arte, ruínas arqueológicas. No Brasil: Ouro Preto (MG), Olinda (PE), Brasília (DF), Salvador (BA).", exemplo: "Exemplo: as igrejas barrocas de Ouro Preto contam a história do ciclo do ouro no século XVIII." },
      { id: "nat", capa: "Patrimônio Natural", emoji: "🌳", cor: "from-emerald-600 to-teal-800", fotoUrl: imgIguacu, conteudo: "PATRIMÔNIO NATURAL são ÁREAS ECOLÓGICAS únicas: florestas, cataratas, ilhas, parques. Protegem a biodiversidade contra desmatamento e poluição.", exemplo: "Exemplo: Cataratas do Iguaçu (PR) e Fernando de Noronha (PE) são Patrimônios Naturais no Brasil." },
    ],
    falaFinal: "UNESCO + Cultural + Natural. Trio que protege a MEMÓRIA da humanidade.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o MAPA dos Patrimônios da Humanidade no Brasil. Toque em cada localização.",
    instrucao: "Toque nos pontos do mapa",
    mapaUrl: imgMapa,
    pontos: [
      { id: "ouro", x: 62, y: 62, emoji: "🏛️", cor: "from-amber-600 to-orange-800", fotoUrl: imgOuro, titulo: "OURO PRETO (MG) — Cultural", texto: "Cidade colonial do século XVIII. Igrejas barrocas de Aleijadinho. Herança do ciclo do ouro." },
      { id: "iguacu", x: 32, y: 78, emoji: "🌊", cor: "from-emerald-600 to-teal-800", fotoUrl: imgIguacu, titulo: "CATARATAS DO IGUAÇU (PR) — Natural", texto: "Uma das maiores cataratas do mundo. Floresta subtropical preservada com espécies raras." },
      { id: "noronha", x: 92, y: 30, emoji: "🐢", cor: "from-emerald-600 to-teal-800", fotoUrl: imgIguacu, titulo: "FERNANDO DE NORONHA (PE) — Natural", texto: "Arquipélago vulcânico. Tartarugas marinhas, golfinhos e recifes de coral protegidos." },
      { id: "olinda", x: 82, y: 40, emoji: "🎭", cor: "from-amber-600 to-orange-800", fotoUrl: imgOuro, titulo: "OLINDA (PE) — Cultural", texto: "Cidade colonial com casarões coloridos, igrejas e o famoso frevo carnavalesco." },
    ],
    falaFinal: "Do Sul ao Nordeste, o Brasil guarda tesouros da humanidade em todos os cantos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre patrimônios.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual organização concede o título de Patrimônio da Humanidade?", fotoUrl: imgOnu, cards: [{ id: "u", emoji: "🌐", titulo: "UNESCO", cor: "from-sky-500 to-blue-700" }, { id: "n", emoji: "🚀", titulo: "NASA", cor: "from-slate-500 to-slate-700" }, { id: "f", emoji: "⚽", titulo: "FIFA", cor: "from-amber-500 to-orange-700" }], correta: "u", feedbackAcerto: "Correto. UNESCO.", feedbackErro: "É a UNESCO — agência da ONU pra Educação, Ciência e Cultura." },
      { id: "q2", pergunta: "As Cataratas do Iguaçu são qual tipo de Patrimônio?", fotoUrl: imgIguacu, cards: [{ id: "n", emoji: "🌳", titulo: "Natural", cor: "from-emerald-500 to-teal-700" }, { id: "c", emoji: "🏛️", titulo: "Cultural", cor: "from-amber-500 to-orange-700" }, { id: "d", emoji: "❓", titulo: "Digital", cor: "from-slate-500 to-slate-700" }], correta: "n", feedbackAcerto: "Correto. Cataratas = Patrimônio NATURAL.", feedbackErro: "Cataratas são NATURAL (área ecológica)." },
      { id: "q3", pergunta: "Ouro Preto (MG), com suas igrejas coloniais, é qual tipo?", fotoUrl: imgOuro, cards: [{ id: "c", emoji: "🏛️", titulo: "Cultural", cor: "from-amber-500 to-orange-700" }, { id: "n", emoji: "🌳", titulo: "Natural", cor: "from-emerald-500 to-teal-700" }, { id: "d", emoji: "❓", titulo: "Digital", cor: "from-slate-500 to-slate-700" }], correta: "c", feedbackAcerto: "Correto. Ouro Preto = Patrimônio CULTURAL.", feedbackErro: "Cidade histórica = CULTURAL (obra humana)." },
    ],
    falaFinal: "Você já classifica patrimônios corretamente.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores em cima do mapa: destaque CULTURAIS e destaque NATURAIS.",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgMapa,
    camadas: [
      { id: "cult", rotulo: "Patrimônios Culturais", emoji: "🏛️", cor: "from-amber-600 to-orange-800", rect: { x: 40, y: 20, w: 55, h: 60 }, descricao: "OBRAS HUMANAS: Ouro Preto (MG), Olinda (PE), Brasília (DF), Salvador (BA). Contam a história colonial e moderna do Brasil." },
      { id: "nat", rotulo: "Patrimônios Naturais", emoji: "🌳", cor: "from-emerald-600 to-teal-800", rect: { x: 10, y: 20, w: 45, h: 70 }, descricao: "ÁREAS ECOLÓGICAS: Cataratas do Iguaçu (PR), Fernando de Noronha (PE), Amazônia. Protegem biodiversidade e paisagens únicas." },
    ],
    falaFinal: "Cultural = feito por humanos. Natural = feito pela natureza. Ambos merecem proteção.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene: como um lugar VIRA Patrimônio da Humanidade?",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Caminho para virar Patrimônio",
    paradas: [
      { id: "prop", emoji: "📝", rotulo: "1. País propõe candidatura", fotoUrl: imgOuro, descricao: "O país nomina o lugar à UNESCO." },
      { id: "aval", emoji: "🔍", rotulo: "2. Especialistas avaliam", fotoUrl: imgOnu, descricao: "Comissão internacional visita e estuda." },
      { id: "vota", emoji: "🗳️", rotulo: "3. Comitê da UNESCO vota", fotoUrl: imgOnu, descricao: "Se aprovado, entra na lista mundial." },
      { id: "prot", emoji: "🛡️", rotulo: "4. Proteção permanente", fotoUrl: imgMachu, descricao: "País assume compromisso de preservar." },
    ],
    ordemCerta: ["prop", "aval", "vota", "prot"],
    feedbackAcerto: "Perfeito. Proposta → Avaliação → Votação → Proteção.",
    feedbackErro: "Essa não é a próxima etapa. Pense no processo.",
    falaFinal: "Você já sabe COMO um lugar recebe o selo UNESCO.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 5. Toque nas palavras destacadas.",
    tituloLivro: "📜 Memorial da Cidadania e dos Direitos",
    subtitulo: "Página 5 — O Templo da Memória Humana",
    paragrafos: [
      { id: "p1", texto: "A UNESCO (Organização das Nações Unidas para Educação, Ciência e Cultura) é uma agência da ONU que reconhece e protege PATRIMÔNIOS DA HUMANIDADE — lugares tão valiosos que pertencem ao mundo inteiro.", chaves: ["UNESCO"], definicoes: { UNESCO: "Agência da ONU para Educação, Ciência e Cultura. Sede em Paris. Concede o título de Patrimônio da Humanidade." }, fotoUrl: imgOnu },
      { id: "p2", texto: "Existem dois tipos principais: PATRIMÔNIO CULTURAL (obras humanas — cidades, monumentos, igrejas) e PATRIMÔNIO NATURAL (áreas ecológicas — florestas, cataratas, ilhas).", chaves: ["Patrimônio Cultural", "Patrimônio Natural"], definicoes: { "Patrimônio Cultural": "Obras humanas excepcionais: cidades históricas, monumentos, arte, arqueologia.", "Patrimônio Natural": "Áreas ecológicas únicas: florestas, cataratas, ilhas, parques." }, fotoUrl: imgOuro },
      { id: "p3", texto: "No Brasil temos vários exemplos: OURO PRETO (MG), OLINDA (PE), BRASÍLIA (DF) e SALVADOR (BA) são Culturais. CATARATAS DO IGUAÇU (PR) e FERNANDO DE NORONHA (PE) são Naturais. Todos protegidos por lei.", chaves: ["Patrimônios do Brasil"], definicoes: { "Patrimônios do Brasil": "Lugares brasileiros reconhecidos pela UNESCO. O Brasil tem mais de 20 patrimônios da humanidade." }, fotoUrl: imgMapa },
    ],
    falaFinal: "Leitura concluída. Você já defende por que preservar o patrimônio é responsabilidade coletiva.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de guardião! Cada rodada mostra um lugar. É Patrimônio CULTURAL ou NATURAL?",
    instrucao: "⏱️ Toque na classificação antes do tempo acabar",
    duracaoSegundos: 18,
    pecas: [
      { id: "c", emoji: "🏛️", rotulo: "Cultural" },
      { id: "n", emoji: "🌳", rotulo: "Natural" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cataratas do Iguaçu", emoji: "🌊", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Paraná — floresta e água", emoji: "🌳", cor: "from-emerald-500 to-teal-700" }, contexto: "Cachoeiras e mata atlântica.", pecaCertaId: "n", feedbackAcerto: "Correto. Área ecológica = NATURAL.", feedbackErro: "Cataratas + floresta = NATURAL." },
      { id: "r2", municipioA: { nome: "Ouro Preto", emoji: "⛪", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Minas Gerais — barroco colonial", emoji: "🏛️", cor: "from-orange-500 to-red-700" }, contexto: "Igrejas e casarões do século XVIII.", pecaCertaId: "c", feedbackAcerto: "Correto. Cidade histórica = CULTURAL.", feedbackErro: "Cidade histórica = CULTURAL (obra humana)." },
      { id: "r3", municipioA: { nome: "Fernando de Noronha", emoji: "🐢", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Ilhas com tartarugas", emoji: "🏝️", cor: "from-emerald-500 to-teal-700" }, contexto: "Arquipélago com biodiversidade marinha.", pecaCertaId: "n", feedbackAcerto: "Correto. Ilhas ecológicas = NATURAL.", feedbackErro: "Área ecológica = NATURAL." },
      { id: "r4", municipioA: { nome: "Brasília — Plano Piloto", emoji: "🏙️", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Cidade planejada por Niemeyer", emoji: "🏗️", cor: "from-orange-500 to-red-700" }, contexto: "Capital moderna projetada em 1960.", pecaCertaId: "c", feedbackAcerto: "Correto. Cidade planejada = CULTURAL.", feedbackErro: "Cidade projetada = CULTURAL (obra humana)." },
      { id: "r5", municipioA: { nome: "Amazônia", emoji: "🌳", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Maior floresta tropical", emoji: "🦜", cor: "from-emerald-500 to-teal-700" }, contexto: "Floresta com onças, pássaros e rios.", pecaCertaId: "n", feedbackAcerto: "Correto. Floresta = NATURAL.", feedbackErro: "Floresta = NATURAL." },
      { id: "r6", municipioA: { nome: "Salvador — Pelourinho", emoji: "🎭", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Centro histórico da Bahia", emoji: "⛪", cor: "from-orange-500 to-red-700" }, contexto: "Casarões coloridos e igrejas barrocas.", pecaCertaId: "c", feedbackAcerto: "Correto. Centro histórico = CULTURAL.", feedbackErro: "Centro histórico = CULTURAL." },
    ],
    falaFinal: "6 rodadas! Você já classifica patrimônios como um verdadeiro guardião UNESCO.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos Patrimônios: no Brasil, quantos são Culturais e quantos são Naturais?",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgMapa,
    fatias: [
      { id: "cult", rotulo: "Culturais (~70%)", emoji: "🏛️", percentual: 70, cor: "#b45309", descricao: "Cidades históricas, monumentos, sítios arqueológicos. Ex: Ouro Preto, Olinda, Brasília, Salvador, Congonhas.", exemplos: ["⛪ Igrejas", "🏙️ Cidades", "🗿 Ruínas"] },
      { id: "nat", rotulo: "Naturais (~30%)", emoji: "🌳", percentual: 30, cor: "#0f766e", descricao: "Áreas ecológicas: florestas, cataratas, ilhas. Ex: Iguaçu, Noronha, Pantanal, Amazônia.", exemplos: ["🌊 Cataratas", "🏝️ Ilhas", "🌲 Florestas"] },
    ],
    falaFinal: "Brasil tem mais Culturais que Naturais — mas os dois grupos são essenciais.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra ganhar a Medalha de Guardião da UNESCO.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgMachu,
    perguntas: [
      { id: "av1", pergunta: "Qual agência internacional concede o título de Patrimônio da Humanidade?", opcoes: [{ id: "a", texto: "UNESCO.", correta: true }, { id: "b", texto: "NASA.", correta: false }, { id: "c", texto: "FIFA.", correta: false }], feedbackAcerto: "Correto! UNESCO.", feedbackErro: "É a UNESCO." },
      { id: "av2", pergunta: "As Cataratas do Iguaçu são qual tipo de Patrimônio?", opcoes: [{ id: "a", texto: "Cultural.", correta: false }, { id: "b", texto: "Natural.", correta: true }, { id: "c", texto: "Digital.", correta: false }], feedbackAcerto: "Correto! Natural.", feedbackErro: "Cataratas = Patrimônio NATURAL." },
      { id: "av3", pergunta: "Ouro Preto (MG) é famosa por qual patrimônio?", opcoes: [{ id: "a", texto: "Cataratas.", correta: false }, { id: "b", texto: "Igrejas barrocas coloniais.", correta: true }, { id: "c", texto: "Praias tropicais.", correta: false }], feedbackAcerto: "Correto! Igrejas barrocas do século XVIII.", feedbackErro: "Ouro Preto = igrejas barrocas coloniais." },
    ],
    selo: { nome: "Medalha de Guardião da UNESCO", subtitulo: "Insígnia oficial do Memorial da Cidadania", emoji: "🏛️", cor: "from-amber-400 to-orange-600", fotoUrl: imgMapa },
    falaFinal: "Página 5 restaurada. A quinta Tocha brilha: O Templo da Memória Humana.",
  },

  recompensa: { xp: 450, moedas: 350, medalha: "Medalha de Guardião da UNESCO" },
};
