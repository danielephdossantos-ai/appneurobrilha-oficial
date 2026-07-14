import type { AulaGeoV1 } from "../../types";
import { url as imgIpi } from "@/assets/historia-8ano/u6-ipiranga.jpg.asset.json";
import { url as imgCafe } from "@/assets/historia-8ano/u6-fazenda-cafe.jpg.asset.json";
import { url as imgDomPedro } from "@/assets/historia-8ano/u6-dom-pedro.jpg.asset.json";
import { url as imgFico } from "@/assets/historia-8ano/u6-dia-fico.jpg.asset.json";
import { url as imgConst } from "@/assets/historia-8ano/u6-constituicao-1824.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-independencia-brasil",
  titulo: "A Independência do Brasil e o Império",
  iconeTrilha: "🇧🇷",
  bncc: ["EF08HI12", "EF08HI13", "EF08HI14"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgIpi,
    imagemDestaqueUrl: imgCafe,
    aurora:
      "7 de setembro de 1822. Às margens do riacho Ipiranga, em São Paulo, D. Pedro grita: 'Independência ou Morte!' Nasce o BRASIL — mas com uma diferença brutal em relação aos vizinhos: continuamos MONARQUIA, comandados por um português, e mantivemos a ESCRAVIDÃO por mais 66 anos.",
    falaFinal: "Nesta aula você desbloqueia a Engrenagem 6: A Coroa Tropical.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Enquanto Argentina, Chile e Venezuela viraram REPÚBLICAS pela guerra, o Brasil virou IMPÉRIO liderado por um príncipe português. Por quê?",
    pergunta: "Por que o Brasil se tornou Império, e não República?",
    fotoUrl: imgDomPedro,
    opcoes: [
      { id: "eli", titulo: "ELITE QUIS EVITAR REVOLUÇÃO SOCIAL", subtitulo: "controle 'de cima', sem povo armado", emoji: "👑", cor: "from-teal-800 to-slate-950" },
      { id: "pov", titulo: "O POVO PEDIU UM REI", subtitulo: "escolha popular por votação", emoji: "❌", cor: "from-amber-900 to-slate-950" },
    ],
    respostaCerta: "eli",
    feedbackAcerto:
      "Correto. A elite brasileira (fazendeiros escravistas) tinha MEDO de uma revolução como no Haiti. Uma monarquia liderada pelo príncipe já presente no país mantinha ORDEM, escravidão e privilégios. Foi uma independência CONTROLADA pela elite — sem guerra popular.",
    feedbackErro:
      "Não. O povo não votou. A elite escravista PREFERIU a monarquia porque temia repetir o Haiti. Manter D. Pedro como imperador garantia continuidade, ordem e escravidão.",
    falaFinal: "Independência sem revolução social. Ordem mantida. Escravidão intacta.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave do Império.",
    instrucao: "",
    cadernos: [
      { id: "ind", capa: "Independência (1822)", emoji: "🇧🇷", cor: "from-teal-700 to-slate-900", fotoUrl: imgFico, conteudo: "INDEPENDÊNCIA DO BRASIL (07/09/1822) foi proclamada por D. Pedro I às margens do Ipiranga, em São Paulo. Diferente da maioria dos vizinhos, o Brasil manteve MONARQUIA e ESCRAVIDÃO. Fim (formal) do laço colonial com Portugal.", exemplo: "Exemplo: para ser reconhecido como país, o Brasil pagou 2 milhões de libras à Inglaterra e depois 1 milhão à Portugal — dívida que pesou por décadas." },
      { id: "cst", capa: "Constituição de 1824", emoji: "📜", cor: "from-amber-700 to-slate-900", fotoUrl: imgConst, conteudo: "CONSTITUIÇÃO DE 1824 foi OUTORGADA (imposta) por D. Pedro I. Instituiu o PODER MODERADOR — um quarto poder, exclusivo do imperador, acima dos outros três. Só homens com renda votavam. Escravizados: nenhum direito.", exemplo: "Exemplo: o Poder Moderador permitia ao imperador dissolver a Câmara, nomear senadores vitalícios e vetar leis. Concentração de poder gigante." },
      { id: "esc", capa: "Escravidão Cafeeira", emoji: "☕", cor: "from-cyan-700 to-slate-900", fotoUrl: imgIpi, conteudo: "SEGUNDO CICLO ESCRAVISTA. O CAFÉ substituiu o açúcar como principal produto de exportação (a partir de 1830). Escravizados eram levados para fazendas do Vale do Paraíba (RJ/SP). Brasil recebeu mais africanos que qualquer outro país das Américas: 4,9 milhões.", exemplo: "Exemplo: em 1850, a Lei Eusébio de Queirós proibiu o tráfico transatlântico. Mas o TRÁFICO INTERNO continuou — nordestinos vendidos para o Sudeste cafeeiro." },
      { id: "reb", capa: "Revoltas Regenciais", emoji: "⚔️", cor: "from-slate-700 to-slate-900", fotoUrl: imgCafe, conteudo: "PERÍODO REGENCIAL (1831-1840): D. Pedro I abdica; D. Pedro II ainda é criança. Revoltas estouram em todo o Império: Cabanagem (PA), Balaiada (MA), Sabinada (BA), Farroupilha (RS). Elite temia a fragmentação como aconteceu na Hispano-América.", exemplo: "Exemplo: a Cabanagem (1835-40, Amazônia) matou cerca de 30% da população local — indígenas, mestiços e escravizados contra a elite branca." },
    ],
    falaFinal: "Independência + Constituição + Café + Revoltas. O Brasil imperial em 4 peças.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Infográfico do Império brasileiro: capital, café, escravidão e revoltas.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgDomPedro,
    pontos: [
      { id: "rio", x: 65, y: 55, emoji: "🏛️", cor: "from-teal-700 to-slate-900", fotoUrl: imgFico, titulo: "RIO DE JANEIRO (capital)", texto: "Sede do Império desde 1808 (vinda da Corte). Palácio imperial em São Cristóvão. Centro político e financeiro." },
      { id: "vp", x: 55, y: 45, emoji: "☕", cor: "from-amber-700 to-slate-900", fotoUrl: imgConst, titulo: "VALE DO PARAÍBA (café)", texto: "Fazendas de café em SP e RJ. Sustentavam a economia do Império com mão de obra escravizada. 'Barões do café' viraram elite política." },
      { id: "no", x: 30, y: 25, emoji: "⚔️", cor: "from-cyan-700 to-slate-900", fotoUrl: imgIpi, titulo: "REVOLTAS NORTISTAS", texto: "Cabanagem (PA, 1835-40) e Balaiada (MA, 1838-41). Populações pobres e indígenas contra elite branca. Duramente reprimidas." },
      { id: "rs", x: 40, y: 90, emoji: "🏇", cor: "from-slate-700 to-slate-900", fotoUrl: imgCafe, titulo: "FARROUPILHA (RS, 1835-45)", texto: "Fazendeiros gaúchos declararam a República Rio-Grandense. Guerra de 10 anos. Terminou com anistia geral." },
    ],
    falaFinal: "Rio manda. Café sustenta. Norte e Sul se rebelam. Império tenso.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em que DATA foi proclamada a Independência do Brasil?", fotoUrl: imgDomPedro, cards: [ { id: "a", emoji: "🇧🇷", titulo: "07/09/1822", cor: "from-teal-600 to-slate-900" }, { id: "b", emoji: "📅", titulo: "22/04/1500", cor: "from-amber-600 to-slate-900" }, { id: "c", emoji: "🗓️", titulo: "15/11/1889", cor: "from-slate-600 to-slate-900" } ], correta: "a", feedbackAcerto: "Correto. 07/09/1822 — grito do Ipiranga.", feedbackErro: "É 07/09/1822. 1500 = chegada portuguesa; 1889 = República." },
      { id: "q2", pergunta: "O PODER MODERADOR, criado pela Constituição de 1824, era exclusivo de quem?", fotoUrl: imgFico, cards: [ { id: "i", emoji: "👑", titulo: "Imperador", cor: "from-teal-600 to-slate-900" }, { id: "c", emoji: "📜", titulo: "Congresso", cor: "from-amber-600 to-slate-900" }, { id: "p", emoji: "👥", titulo: "Povo", cor: "from-slate-600 to-slate-900" } ], correta: "i", feedbackAcerto: "Correto. Exclusivo do IMPERADOR — 4º poder acima dos outros.", feedbackErro: "É do IMPERADOR — 'chave de toda a organização política' segundo a Constituição." },
      { id: "q3", pergunta: "Qual foi o PRINCIPAL produto de exportação do Brasil imperial (pós-1830)?", fotoUrl: imgConst, cards: [ { id: "c", emoji: "☕", titulo: "Café", cor: "from-teal-600 to-slate-900" }, { id: "a", emoji: "🍬", titulo: "Açúcar", cor: "from-amber-600 to-slate-900" }, { id: "o", emoji: "⚱️", titulo: "Ouro", cor: "from-slate-600 to-slate-900" } ], correta: "c", feedbackAcerto: "Correto. CAFÉ — sustentou o Império.", feedbackErro: "É CAFÉ. Açúcar dominou os séculos XVI-XVII; ouro, o XVIII; café, o XIX." },
    ],
    falaFinal: "Radar afiado. Você já lê o Império brasileiro.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois filtros sobre o Brasil imperial: quem tinha DIREITOS e quem não.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgIpi,
    camadas: [
      { id: "cid", rotulo: "'Cidadãos ativos' (~10%)", emoji: "🎩", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 35 }, descricao: "Homens brancos livres com renda mínima. Podiam votar (voto censitário). Fazendeiros escravistas, barões do café, políticos, militares." },
      { id: "sem", rotulo: "Sem direitos (~90%)", emoji: "⛓️", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 35 }, descricao: "Africanos escravizados (~30-40%), mulheres (todas, sem exceção), indígenas, homens livres pobres. Não votavam, não podiam ser eleitos, muitos não tinham nenhum direito civil." },
    ],
    falaFinal: "Império 'moderno' na aparência. Base escravista e excludente na estrutura.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os grandes marcos do Império.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia do Império",
    paradas: [
      { id: "ind", emoji: "🇧🇷", rotulo: "1. Independência (1822)", fotoUrl: imgCafe, descricao: "D. Pedro I às margens do Ipiranga." },
      { id: "cst", emoji: "📜", rotulo: "2. Constituição outorgada (1824)", fotoUrl: imgDomPedro, descricao: "Poder Moderador e voto censitário." },
      { id: "reg", emoji: "⚔️", rotulo: "3. Regência e revoltas (1831-1840)", fotoUrl: imgFico, descricao: "Pedro I abdica; explosão de revoltas regionais." },
      { id: "aur", emoji: "🕊️", rotulo: "4. Lei Áurea (1888)", fotoUrl: imgConst, descricao: "Abolição da escravidão — última das Américas." },
    ],
    ordemCerta: ["ind", "cst", "reg", "aur"],
    feedbackAcerto: "Perfeito. Independência → Constituição → Regências → Lei Áurea.",
    feedbackErro: "Essa não é a próxima. Comece pela Independência (1822).",
    falaFinal: "Quatro marcos. 66 anos de escravidão depois da 'liberdade'.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Página 6 das Engrenagens.",
    tituloLivro: "⚙️ As Engrenagens da Liberdade",
    subtitulo: "Página 6 — A Coroa Tropical",
    paragrafos: [
      { id: "p1", texto: "Em 7 de setembro de 1822, D. Pedro I proclamou a INDEPENDÊNCIA do Brasil às margens do Ipiranga. Diferente dos vizinhos hispano-americanos, o Brasil manteve MONARQUIA e ESCRAVIDÃO — foi uma independência CONTROLADA pela elite, sem revolução popular, sem quebra do pacto escravista.", chaves: ["Independência"], definicoes: { "Independência": "Proclamada em 07/09/1822 por D. Pedro I. Rompimento formal com Portugal, mantendo monarquia e escravidão." }, fotoUrl: imgIpi },
      { id: "p2", texto: "A CONSTITUIÇÃO DE 1824 foi OUTORGADA — imposta por D. Pedro I. Instituiu o PODER MODERADOR, um quarto poder exclusivo do imperador, acima dos outros três. Só homens com renda votavam (VOTO CENSITÁRIO). Escravizados não tinham nenhum direito.", chaves: ["Poder Moderador"], definicoes: { "Poder Moderador": "Quarto poder, exclusivo do imperador. Podia dissolver a Câmara e nomear senadores vitalícios." }, fotoUrl: imgCafe },
      { id: "p3", texto: "A economia imperial foi sustentada pelo CAFÉ (a partir de 1830), produzido no Vale do Paraíba com mão de obra escravizada. O Brasil recebeu 4,9 milhões de africanos escravizados — mais que qualquer outra colônia americana. Em 1850, a Lei Eusébio de Queirós proibiu o tráfico ATLÂNTICO, mas o tráfico INTERNO seguiu forte.", chaves: ["Escravidão Cafeeira"], definicoes: { "Escravidão Cafeeira": "Segundo grande ciclo escravista brasileiro (século XIX), baseado nas fazendas de café do Vale do Paraíba." }, fotoUrl: imgDomPedro },
      { id: "p4", texto: "Durante o PERÍODO REGENCIAL (1831-1840), com D. Pedro II ainda criança, revoltas estouraram em todo o Império: Cabanagem no Pará, Balaiada no Maranhão, Sabinada na Bahia, Farroupilha no Rio Grande. Elite temia a fragmentação. D. Pedro II foi coroado antes da idade (14 anos, 1840) para estabilizar o Império. A abolição só viria em 1888 — sendo o Brasil o ÚLTIMO país das Américas a abolir a escravidão.", chaves: ["Regência"], definicoes: { "Regência": "Período (1831-1840) em que o Brasil foi governado por regentes porque D. Pedro II era ainda menor de idade." }, fotoUrl: imgFico },
    ],
    falaFinal: "Leitura concluída. Você já vê como o Brasil se tornou independente sem abrir mão do escravismo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão: classifique cada elemento em INDEPENDÊNCIA, ECONOMIA CAFEEIRA ou REVOLTAS REGENCIAIS.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "ind", emoji: "🇧🇷", rotulo: "Independência" },
      { id: "caf", emoji: "☕", rotulo: "Economia cafeeira" },
      { id: "reb", emoji: "⚔️", rotulo: "Revoltas regenciais" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Grito do Ipiranga (07/09/1822)", emoji: "⚔️", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Independência ou Morte", emoji: "🇧🇷", cor: "from-teal-600 to-slate-900" }, contexto: "D. Pedro I às margens do riacho.", pecaCertaId: "ind", feedbackAcerto: "Correto. Grito do Ipiranga = INDEPENDÊNCIA.", feedbackErro: "É INDEPENDÊNCIA — grito do Ipiranga." },
      { id: "r2", municipioA: { nome: "Fazenda no Vale do Paraíba", emoji: "🌱", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Barões do café enriquecem", emoji: "💰", cor: "from-amber-600 to-slate-900" }, contexto: "Principal produto de exportação após 1830.", pecaCertaId: "caf", feedbackAcerto: "Correto. Vale do Paraíba = ECONOMIA CAFEEIRA.", feedbackErro: "É ECONOMIA CAFEEIRA — coração produtivo do Império." },
      { id: "r3", municipioA: { nome: "Cabanagem no Pará (1835-40)", emoji: "🌳", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Revolta popular na Amazônia", emoji: "🏹", cor: "from-cyan-600 to-slate-900" }, contexto: "Indígenas e mestiços contra elite branca.", pecaCertaId: "reb", feedbackAcerto: "Correto. Cabanagem = REVOLTAS REGENCIAIS.", feedbackErro: "É REVOLTA REGENCIAL — na Amazônia." },
      { id: "r4", municipioA: { nome: "Constituição outorgada de 1824", emoji: "📜", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Poder Moderador", emoji: "👑", cor: "from-teal-600 to-slate-900" }, contexto: "Primeira constituição brasileira.", pecaCertaId: "ind", feedbackAcerto: "Correto. Constituição de 1824 = fase da INDEPENDÊNCIA.", feedbackErro: "É INDEPENDÊNCIA — organização institucional do novo país." },
      { id: "r5", municipioA: { nome: "Lei Eusébio de Queirós (1850)", emoji: "⛵", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Fim do tráfico transatlântico", emoji: "🚫", cor: "from-amber-600 to-slate-900" }, contexto: "Pressão inglesa por décadas.", pecaCertaId: "caf", feedbackAcerto: "Correto. Ligada ao ciclo do café (tráfico interno cresce).", feedbackErro: "É da ECONOMIA CAFEEIRA — impacta a mão de obra escravizada." },
      { id: "r6", municipioA: { nome: "Farroupilha (RS, 1835-45)", emoji: "🏇", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "República Rio-Grandense", emoji: "🏴", cor: "from-cyan-600 to-slate-900" }, contexto: "Fazendeiros gaúchos separatistas.", pecaCertaId: "reb", feedbackAcerto: "Correto. Farroupilha = REVOLTA REGENCIAL.", feedbackErro: "É REVOLTA REGENCIAL — a mais longa (10 anos)." },
    ],
    falaFinal: "6 rodadas! Você já classifica os grandes fatos do Império.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza do Brasil imperial: quem tinha direitos x quem não.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgConst,
    fatias: [
      { id: "cid", rotulo: "Cidadãos ativos (~10%)", emoji: "🎩", percentual: 10, cor: "#b45309", descricao: "Homens brancos livres com renda mínima. Votavam. Fazendeiros escravistas, barões do café, políticos e militares.", exemplos: ["👑 Elite", "☕ Barões", "🏛️ Políticos"] },
      { id: "sem", rotulo: "Sem direitos (~90%)", emoji: "⛓️", percentual: 90, cor: "#0f766e", descricao: "Escravizados, mulheres, indígenas, homens livres pobres. Sem voto, sem representação, muitos sem direitos civis nenhum.", exemplos: ["⛓️ Escravizados", "👩 Mulheres", "🌾 Pobres"] },
    ],
    falaFinal: "Independência de fachada pra maioria. Escravidão até 1888.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgIpi,
    perguntas: [
      { id: "av1", pergunta: "Diferente dos vizinhos hispano-americanos, o Brasil se tornou independente como:", opcoes: [ { id: "a", texto: "República popular.", correta: false }, { id: "b", texto: "Império (monarquia), mantendo a escravidão.", correta: true }, { id: "c", texto: "Colônia inglesa.", correta: false } ], feedbackAcerto: "Correto. Império escravista — independência controlada pela elite.", feedbackErro: "É IMPÉRIO (monarquia) mantendo a ESCRAVIDÃO. República só em 1889." },
      { id: "av2", pergunta: "A Constituição de 1824 criou um quarto poder exclusivo do imperador chamado:", opcoes: [ { id: "a", texto: "Poder Popular.", correta: false }, { id: "b", texto: "Poder Moderador.", correta: true }, { id: "c", texto: "Poder Federal.", correta: false } ], feedbackAcerto: "Correto. Poder Moderador — 'chave de toda organização política'.", feedbackErro: "É o PODER MODERADOR — exclusivo do imperador." },
      { id: "av3", pergunta: "Qual foi o principal produto de exportação do Brasil imperial pós-1830?", opcoes: [ { id: "a", texto: "Café.", correta: true }, { id: "b", texto: "Petróleo.", correta: false }, { id: "c", texto: "Trigo.", correta: false } ], feedbackAcerto: "Correto. Café — sustentou o Império até a República.", feedbackErro: "É CAFÉ. Petróleo é do século XX; trigo, minoritário." },
    ],
    selo: { nome: "A Coroa Tropical", subtitulo: "Engrenagem 6 das Liberdades", emoji: "🇧🇷", cor: "from-teal-500 to-slate-900", fotoUrl: imgCafe },
    falaFinal: "Engrenagem 6 destravada. Independência sem revolução; escravidão prolongada por 66 anos.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "A Coroa Tropical" },
};
