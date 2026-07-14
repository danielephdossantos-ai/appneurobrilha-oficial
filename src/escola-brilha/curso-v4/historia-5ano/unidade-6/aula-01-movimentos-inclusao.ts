import type { AulaGeoV1 } from "../../types";
import { url as imgRampa } from "@/assets/historia-5ano/rampa-acessibilidade.jpg.asset.json";
import { url as imgIndig } from "@/assets/historia-5ano/manifestacao-indigena.jpg.asset.json";
import { url as imgLibras } from "@/assets/historia-5ano/libras-escola.jpg.asset.json";
import { url as imgInfo } from "@/assets/historia-5ano/movimentos-sociais-infografico.jpg.asset.json";
import { url as imgConst } from "@/assets/historia-5ano/constituicao-1988.jpg.asset.json";
/**
 * História · 5º Ano · Unidade 6 · Aula 01
 * "Movimentos Sociais e Inclusão na Atualidade"
 * Restaura a Página 6: A Roda da Inclusão.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-movimentos-inclusao",
  titulo: "Movimentos Sociais e Inclusão",
  iconeTrilha: "🤝",
  bncc: ["EF05HI08", "EF05HI09"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a LUPA sobre a rampa de acessibilidade. Isso NÃO existia até uns 30 anos atrás. Foi conquistado por MOVIMENTOS SOCIAIS.",
    mapaUrl: imgRampa,
    imagemDestaqueUrl: imgInfo,
    aurora:
      "Pequeno Historiador, rampas, piso tátil amarelo, Libras nos telejornais, cotas — tudo isso é RECENTE. Foram grupos de cidadãos que forçaram o governo a criar essas leis.",
    falaFinal: "Nesta aula você acende a sexta Tocha: A Roda da Inclusão.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: quando cidadãos se organizam pra pedir direitos ao governo, como chamamos isso?",
    pergunta: "O que é isso?",
    fotoUrl: imgIndig,
    opcoes: [
      { id: "mov", titulo: "Movimento Social", subtitulo: "união pra reivindicar direitos", emoji: "✊", cor: "from-emerald-600 to-teal-800", fotoUrl: imgInfo },
      { id: "emp", titulo: "Empresa comercial", subtitulo: "vende produtos e serviços", emoji: "🏢", cor: "from-slate-500 to-slate-700", fotoUrl: imgRampa },
    ],
    respostaCerta: "mov",
    feedbackAcerto: "Correto. MOVIMENTO SOCIAL é a união organizada de cidadãos pra cobrar direitos e mudanças ao governo.",
    feedbackErro: "Não. Empresa vende produtos. Quem luta por direitos é MOVIMENTO SOCIAL.",
    falaFinal: "Cidadania NÃO é pronta — é CONSTRUÍDA todo dia por movimentos sociais.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas dos movimentos sociais atuais.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      { id: "indig", capa: "Movimento Indígena", emoji: "🪶", cor: "from-emerald-600 to-teal-800", fotoUrl: imgIndig, conteudo: "MOVIMENTO INDÍGENA é a organização dos povos originários do Brasil pra defender suas TERRAS TRADICIONAIS, LÍNGUA e CULTURA. Luta pela demarcação de territórios e por educação bilíngue.", exemplo: "Exemplo: todo ano, o Acampamento Terra Livre reúne milhares de indígenas em Brasília cobrando demarcação." },
      { id: "negro", capa: "Movimento Negro", emoji: "✊🏾", cor: "from-amber-600 to-orange-800", fotoUrl: imgInfo, conteudo: "MOVIMENTO NEGRO combate o RACISMO ESTRUTURAL no Brasil. Luta por igualdade de oportunidades, punição a crimes de preconceito e políticas como as COTAS raciais em universidades.", exemplo: "Exemplo: a Lei de Cotas (2012) reservou vagas em universidades federais pra estudantes negros e pardos." },
      { id: "acess", capa: "Acessibilidade", emoji: "♿", cor: "from-sky-600 to-blue-800", fotoUrl: imgRampa, conteudo: "MOVIMENTO DE ACESSIBILIDADE luta pra que pessoas com deficiência tenham AUTONOMIA. Exige rampas, elevadores, Braille, LIBRAS (língua brasileira de sinais) em escolas e serviços.", exemplo: "Exemplo: o Estatuto da Pessoa com Deficiência (2015) obriga escolas, sites e prédios públicos a serem acessíveis." },
    ],
    falaFinal: "Indígena + Negro + Acessibilidade. Três movimentos que mudam o Brasil AGORA.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o INFOGRÁFICO dos principais movimentos sociais brasileiros atuais. Toque em cada painel.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgInfo,
    pontos: [
      { id: "ind", x: 18, y: 55, emoji: "🪶", cor: "from-emerald-600 to-teal-800", fotoUrl: imgIndig, titulo: "1. MOVIMENTO INDÍGENA", texto: "Luta por DEMARCAÇÃO DE TERRAS. Defesa da cultura, língua e educação bilíngue. Cerca de 300 povos e 274 línguas no Brasil." },
      { id: "neg", x: 50, y: 55, emoji: "✊🏾", cor: "from-amber-600 to-orange-800", fotoUrl: imgInfo, titulo: "2. MOVIMENTO NEGRO", texto: "Combate o RACISMO ESTRUTURAL. Igualdade de oportunidades, Lei de Cotas (2012), Lei Áurea (1888) foi só o começo." },
      { id: "aces", x: 82, y: 55, emoji: "♿", cor: "from-sky-600 to-blue-800", fotoUrl: imgRampa, titulo: "3. MOVIMENTO DE ACESSIBILIDADE", texto: "Rampas, LIBRAS, Braille, elevadores, banheiros adaptados. Estatuto da Pessoa com Deficiência (2015)." },
    ],
    falaFinal: "Cada movimento LUTA por um grupo excluído historicamente. Juntos, fazem o Brasil mais JUSTO.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre inclusão.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Como se chama a união organizada de cidadãos pra reivindicar direitos ao governo?", fotoUrl: imgIndig, cards: [{ id: "m", emoji: "✊", titulo: "Movimento Social", cor: "from-emerald-500 to-teal-700" }, { id: "e", emoji: "🏢", titulo: "Empresa", cor: "from-slate-500 to-slate-700" }, { id: "b", emoji: "🎪", titulo: "Circo", cor: "from-amber-500 to-orange-700" }], correta: "m", feedbackAcerto: "Correto. Movimento Social.", feedbackErro: "É Movimento Social — cidadãos organizados." },
      { id: "q2", pergunta: "Qual a língua oficial das pessoas surdas no Brasil?", fotoUrl: imgLibras, cards: [{ id: "l", emoji: "🤟", titulo: "LIBRAS", cor: "from-sky-500 to-blue-700" }, { id: "i", emoji: "🇬🇧", titulo: "Inglês", cor: "from-amber-500 to-orange-700" }, { id: "e", emoji: "🗣️", titulo: "Espanhol", cor: "from-slate-500 to-slate-700" }], correta: "l", feedbackAcerto: "Correto. LIBRAS — Língua Brasileira de Sinais.", feedbackErro: "É a LIBRAS (Língua Brasileira de Sinais)." },
      { id: "q3", pergunta: "O que o Movimento Indígena principalmente exige?", fotoUrl: imgIndig, cards: [{ id: "d", emoji: "🗺️", titulo: "Demarcação de terras", cor: "from-emerald-500 to-teal-700" }, { id: "e", emoji: "💰", titulo: "Dinheiro", cor: "from-amber-500 to-orange-700" }, { id: "c", emoji: "🚗", titulo: "Carros", cor: "from-slate-500 to-slate-700" }], correta: "d", feedbackAcerto: "Correto. Demarcação = proteção legal das terras.", feedbackErro: "Exigem DEMARCAÇÃO de suas terras ancestrais." },
    ],
    falaFinal: "Você já identifica as principais bandeiras dos movimentos sociais.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores em cima do infográfico: BARREIRAS antigas x CONQUISTAS atuais.",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgInfo,
    camadas: [
      { id: "antes", rotulo: "Barreiras (antes)", emoji: "🚧", cor: "from-amber-600 to-orange-800", rect: { x: 0, y: 10, w: 50, h: 80 }, descricao: "Sem rampas, sem LIBRAS na TV, sem cotas, terras indígenas invadidas. Grupos excluídos historicamente ficavam sem VOZ e sem ESPAÇO." },
      { id: "hoje", rotulo: "Conquistas (hoje)", emoji: "🤝", cor: "from-emerald-600 to-teal-800", rect: { x: 50, y: 10, w: 50, h: 80 }, descricao: "Estatuto da Pessoa com Deficiência (2015), Lei de Cotas (2012), demarcação de terras indígenas, LIBRAS oficial (2002). A luta CONTINUA." },
    ],
    falaFinal: "Antes: barreiras. Hoje: conquistas. Amanhã: mais luta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene marcos históricos da inclusão no Brasil.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Cronologia da inclusão",
    paradas: [
      { id: "aurea", emoji: "⛓️", rotulo: "1. Lei Áurea (1888)", fotoUrl: imgConst, descricao: "Abolição da escravidão. Primeiro passo." },
      { id: "cid", emoji: "🇧🇷", rotulo: "2. Constituição Cidadã (1988)", fotoUrl: imgConst, descricao: "Racismo vira crime. Direitos indígenas garantidos." },
      { id: "cotas", emoji: "🎓", rotulo: "3. Lei de Cotas (2012)", fotoUrl: imgInfo, descricao: "Cotas raciais em universidades federais." },
      { id: "est", emoji: "♿", rotulo: "4. Estatuto PCD (2015)", fotoUrl: imgRampa, descricao: "Direitos das pessoas com deficiência." },
    ],
    ordemCerta: ["aurea", "cid", "cotas", "est"],
    feedbackAcerto: "Perfeito: 1888 → 1988 → 2012 → 2015. Uma escada de conquistas.",
    feedbackErro: "Essa não é a próxima. Pense na cronologia.",
    falaFinal: "Você mapeou 130 anos de luta pela inclusão.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 6. Toque nas palavras destacadas.",
    tituloLivro: "📜 Memorial da Cidadania e dos Direitos",
    subtitulo: "Página 6 — A Roda da Inclusão",
    paragrafos: [
      { id: "p1", texto: "A cidadania NÃO está pronta. Ela é construída todos os dias pelos MOVIMENTOS SOCIAIS — grupos de cidadãos que se organizam pra cobrar direitos ao governo e à sociedade.", chaves: ["Movimentos Sociais"], definicoes: { "Movimentos Sociais": "União organizada de cidadãos pra reivindicar direitos ao governo. Exemplos: sufragistas, indígenas, negros, PCDs." }, fotoUrl: imgIndig },
      { id: "p2", texto: "O MOVIMENTO INDÍGENA luta pela DEMARCAÇÃO de terras ancestrais e pela educação BILÍNGUE (Português + língua indígena). O MOVIMENTO NEGRO combate o RACISMO e conquistou a Lei de Cotas em 2012.", chaves: ["Demarcação", "Cotas"], definicoes: { Demarcação: "Processo legal que define e protege oficialmente as terras dos povos indígenas.", Cotas: "Reserva de vagas em universidades ou empregos pra grupos historicamente excluídos (negros, indígenas, PCDs)." }, fotoUrl: imgInfo },
      { id: "p3", texto: "O MOVIMENTO DE ACESSIBILIDADE exige rampas, elevadores, LIBRAS (Língua Brasileira de Sinais) e Braille. Conquistou o Estatuto da Pessoa com Deficiência em 2015, garantindo INCLUSÃO em escolas, trabalhos e espaços públicos.", chaves: ["LIBRAS"], definicoes: { LIBRAS: "Língua Brasileira de Sinais. É a língua oficial da comunidade surda no Brasil desde 2002." }, fotoUrl: imgLibras },
    ],
    falaFinal: "Leitura concluída. Você já enxerga a cidadania como CONSTRUÇÃO diária.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de inclusão! Cada rodada mostra uma conquista. A qual MOVIMENTO ela pertence?",
    instrucao: "⏱️ Toque no movimento antes do tempo acabar",
    duracaoSegundos: 20,
    pecas: [
      { id: "i", emoji: "🪶", rotulo: "Indígena" },
      { id: "n", emoji: "✊🏾", rotulo: "Negro" },
      { id: "a", emoji: "♿", rotulo: "Acessibilidade" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Demarcação de terras", emoji: "🗺️", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Amazônia protegida", emoji: "🌳", cor: "from-emerald-500 to-teal-700" }, contexto: "Proteção legal de territórios tradicionais.", pecaCertaId: "i", feedbackAcerto: "Correto. Movimento INDÍGENA.", feedbackErro: "Demarcação de terras = Movimento INDÍGENA." },
      { id: "r2", municipioA: { nome: "Lei de Cotas (2012)", emoji: "🎓", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Universidades federais", emoji: "📚", cor: "from-orange-500 to-red-700" }, contexto: "Vagas reservadas em universidades.", pecaCertaId: "n", feedbackAcerto: "Correto. Movimento NEGRO.", feedbackErro: "Lei de Cotas = principal bandeira do Movimento NEGRO." },
      { id: "r3", municipioA: { nome: "LIBRAS oficial", emoji: "🤟", cor: "from-sky-600 to-blue-800" }, municipioB: { nome: "Língua da comunidade surda", emoji: "🗣️", cor: "from-blue-500 to-indigo-700" }, contexto: "Reconhecida por lei em 2002.", pecaCertaId: "a", feedbackAcerto: "Correto. Movimento de ACESSIBILIDADE.", feedbackErro: "LIBRAS = Movimento de ACESSIBILIDADE." },
      { id: "r4", municipioA: { nome: "Educação bilíngue nas aldeias", emoji: "📖", cor: "from-emerald-600 to-teal-800" }, municipioB: { nome: "Português + Tupi-Guarani", emoji: "🪶", cor: "from-emerald-500 to-teal-700" }, contexto: "Preserva línguas originárias.", pecaCertaId: "i", feedbackAcerto: "Correto. Movimento INDÍGENA.", feedbackErro: "Educação bilíngue = INDÍGENA." },
      { id: "r5", municipioA: { nome: "Rampas nas calçadas", emoji: "♿", cor: "from-sky-600 to-blue-800" }, municipioB: { nome: "Cidade acessível", emoji: "🏙️", cor: "from-blue-500 to-indigo-700" }, contexto: "Autonomia para cadeirantes.", pecaCertaId: "a", feedbackAcerto: "Correto. Movimento de ACESSIBILIDADE.", feedbackErro: "Rampas = ACESSIBILIDADE." },
      { id: "r6", municipioA: { nome: "Combate ao racismo", emoji: "✊🏾", cor: "from-amber-600 to-orange-800" }, municipioB: { nome: "Igualdade racial", emoji: "🤝", cor: "from-orange-500 to-red-700" }, contexto: "Punição a crimes de preconceito.", pecaCertaId: "n", feedbackAcerto: "Correto. Movimento NEGRO.", feedbackErro: "Combate ao racismo = Movimento NEGRO." },
    ],
    falaFinal: "6 rodadas! Você já sabe qual movimento defende cada conquista.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza das lutas atuais: dois grandes grupos de conquistas por inclusão.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgInfo,
    fatias: [
      { id: "identidade", rotulo: "Direitos Identitários (~50%)", emoji: "🪶", percentual: 50, cor: "#0f766e", descricao: "Movimento INDÍGENA (demarcação de terras, língua) + Movimento NEGRO (Lei de Cotas, combate ao racismo). Lutam pelo respeito à identidade e origem.", exemplos: ["🗺️ Demarcação", "🎓 Cotas"] },
      { id: "acess", rotulo: "Direitos de Acessibilidade (~50%)", emoji: "♿", percentual: 50, cor: "#1e40af", descricao: "Movimento de ACESSIBILIDADE: rampas, elevadores, LIBRAS, Braille. Estatuto da Pessoa com Deficiência (2015).", exemplos: ["♿ Rampas", "🤟 LIBRAS"] },
    ],
    falaFinal: "Duas frentes que constroem um Brasil mais JUSTO.",
  },


  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra ganhar o Cristal da Empatia e Respeito.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgInfo,
    perguntas: [
      { id: "av1", pergunta: "Como chamamos as associações de cidadãos que se organizam pra cobrar direitos ao governo?", opcoes: [{ id: "a", texto: "Empresas multinacionais.", correta: false }, { id: "b", texto: "Movimentos sociais.", correta: true }, { id: "c", texto: "Times de futebol.", correta: false }], feedbackAcerto: "Correto! Movimentos sociais.", feedbackErro: "É MOVIMENTOS SOCIAIS." },
      { id: "av2", pergunta: "Qual a língua oficial da comunidade surda brasileira?", opcoes: [{ id: "a", texto: "Inglês.", correta: false }, { id: "b", texto: "LIBRAS.", correta: true }, { id: "c", texto: "Latim.", correta: false }], feedbackAcerto: "Correto! LIBRAS.", feedbackErro: "É a LIBRAS — Língua Brasileira de Sinais." },
      { id: "av3", pergunta: "O que o movimento indígena principalmente reivindica?", opcoes: [{ id: "a", texto: "Demarcação das terras ancestrais.", correta: true }, { id: "b", texto: "Novos carros.", correta: false }, { id: "c", texto: "Copa do Mundo.", correta: false }], feedbackAcerto: "Correto! Demarcação de terras.", feedbackErro: "Reivindicam DEMARCAÇÃO das terras ancestrais." },
    ],
    selo: { nome: "Cristal da Empatia e Respeito", subtitulo: "Insígnia oficial do Memorial da Cidadania", emoji: "🤝", cor: "from-sky-400 to-blue-600", fotoUrl: imgInfo },
    falaFinal: "Página 6 restaurada. A sexta Tocha brilha: A Roda da Inclusão.",
  },

  recompensa: { xp: 450, moedas: 350, medalha: "Cristal da Empatia e Respeito" },
};
