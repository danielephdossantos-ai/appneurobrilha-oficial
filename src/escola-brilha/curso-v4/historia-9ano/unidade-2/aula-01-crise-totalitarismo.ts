import type { AulaGeoV1 } from "../../types";
import { url as imgCrise } from "@/assets/historia-9ano/u2-crise-1929.jpg.asset.json";
import { url as imgTot } from "@/assets/historia-9ano/u2-crise-social.jpg.asset.json";
import { url as imgFila } from "@/assets/historia-9ano/u2-fila-desempregados.jpg.asset.json";
import { url as imgComicio } from "@/assets/historia-9ano/u2-comicio-fascista.jpg.asset.json";
import { url as imgBolsa } from "@/assets/historia-9ano/u2-quebra-bolsa.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-crise-totalitarismo",
  titulo: "Crise de 1929 e a Ascensão dos Totalitarismos",
  iconeTrilha: "📉",
  bncc: ["EF09HI04", "EF09HI05", "EF09HI06"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgCrise,
    imagemDestaqueUrl: imgTot,
    aurora:
      "Outubro de 1929. A Bolsa de Nova York DESABA em uma semana. Milhões perdem tudo, bancos quebram, fábricas fecham, um em cada quatro trabalhadores fica desempregado nos EUA. A crise vira global. No meio do caos, propostas AUTORITÁRIAS ganham força na Europa: fascismo na Itália, nazismo na Alemanha, franquismo na Espanha. É o berço dos TOTALITARISMOS.",
    falaFinal: "Nó 2: crise econômica alimenta soluções autoritárias.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Depois do craque de 1929, quem apareceu prometendo 'ORDEM' e 'trabalho para todos'?",
    pergunta: "O que caracteriza um regime TOTALITÁRIO?",
    fotoUrl: imgFila,
    opcoes: [
      {
        id: "aut",
        titulo: "PARTIDO ÚNICO + LÍDER FORTE",
        subtitulo: "sem eleições, sem oposição, censura total",
        emoji: "⛓️",
        cor: "from-amber-800 to-slate-950",
      },
      {
        id: "dem",
        titulo: "MUITOS PARTIDOS + IMPRENSA LIVRE",
        subtitulo: "eleições, oposição garantida",
        emoji: "🗳️",
        cor: "from-teal-800 to-slate-950",
      },
    ],
    respostaCerta: "aut",
    feedbackAcerto:
      "Correto. Totalitarismo = partido único, líder cultuado, imprensa censurada, oposição perseguida, controle da vida privada.",
    feedbackErro:
      "Não. Isso descreve DEMOCRACIA. Totalitarismo é o oposto: partido único e nenhuma oposição.",
    falaFinal: "Totalitarismo = Estado que quer controlar TUDO.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da crise e dos totalitarismos.",
    instrucao: "",
    cadernos: [
      {
        id: "cr29",
        capa: "Crise de 1929",
        emoji: "📉",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgComicio,
        conteudo:
          "CRISE DE 1929 (ou Grande Depressão) começou com a quebra da Bolsa de Nova York em outubro. Ações valiam quase nada, bancos faliram, fábricas fecharam. Nos EUA o desemprego chegou a 25% — uma em cada quatro pessoas SEM emprego.",
        exemplo:
          "Exemplo: o Produto Interno Bruto dos EUA encolheu quase 30% entre 1929 e 1933. A crise se espalhou pra Europa e América Latina.",
      },
      {
        id: "nd",
        capa: "New Deal",
        emoji: "🏗️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgBolsa,
        conteudo:
          "NEW DEAL foi o pacote do presidente Roosevelt (EUA, 1933) para sair da crise: o Estado passa a INVESTIR em obras públicas (estradas, barragens), criar empregos, regular bancos e garantir direitos trabalhistas.",
        exemplo:
          "Exemplo: mais de 8 milhões de pessoas foram contratadas para obras públicas. É um marco do 'Estado de Bem-Estar Social'.",
      },
      {
        id: "fas",
        capa: "Fascismo",
        emoji: "⛓️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgCrise,
        conteudo:
          "FASCISMO é regime totalitário de EXTREMA DIREITA. Líder único, culto ao chefe, nacionalismo agressivo, uso da violência contra opositores, glorificação da guerra. Nasceu na Itália com Mussolini em 1922.",
        exemplo:
          "Exemplo: Mussolini criou milícias armadas (camisas-negras), acabou com sindicatos livres e proibiu partidos de oposição.",
      },
      {
        id: "naz",
        capa: "Nazismo",
        emoji: "🕳️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgTot,
        conteudo:
          "NAZISMO foi a versão alemã do fascismo (Hitler, 1933). Somou tudo do fascismo + RACISMO institucionalizado (perseguição a judeus, negros, ciganos, homossexuais) + expansionismo militar planejado.",
        exemplo:
          "Exemplo: em 1935 as Leis de Nuremberg tiraram a cidadania dos judeus alemães. Foi o primeiro passo legal que preparou o Holocausto.",
      },
    ],
    falaFinal: "Crise + New Deal (democrático) OU Fascismo/Nazismo (autoritário). Dois caminhos.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três características-chave de todo regime totalitário.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgFila,
    pontos: [
      { id: "p1", x: 25, y: 30, emoji: "👑", cor: "from-amber-700 to-slate-900", fotoUrl: imgComicio, titulo: "CULTO AO LÍDER", texto: "O chefe é apresentado como salvador da nação. Retratos em toda escola, hinos, saudações obrigatórias. Criticar o líder = crime." },
      { id: "p2", x: 55, y: 55, emoji: "📵", cor: "from-slate-700 to-slate-900", fotoUrl: imgBolsa, titulo: "CENSURA E PROPAGANDA", texto: "Imprensa, rádio, cinema e livros são controlados pelo Estado. Só se pode ouvir uma versão dos fatos — a do regime." },
      { id: "p3", x: 80, y: 35, emoji: "🚔", cor: "from-cyan-700 to-slate-900", fotoUrl: imgCrise, titulo: "POLÍCIA POLÍTICA", texto: "Órgãos como Gestapo (Alemanha) ou OVRA (Itália) prendiam, torturavam e matavam opositores. Vizinhos denunciavam vizinhos." },
    ],
    falaFinal: "Culto + Censura + Polícia política. Receita de todo totalitarismo, ontem e hoje.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em que ano quebrou a Bolsa de Nova York?", fotoUrl: imgTot, cards: [{ id: "1929", emoji: "📉", titulo: "1929", cor: "from-teal-600 to-slate-900" }, { id: "1917", emoji: "☭", titulo: "1917", cor: "from-amber-600 to-slate-900" }, { id: "1945", emoji: "🕊️", titulo: "1945", cor: "from-slate-600 to-slate-900" }], correta: "1929", feedbackAcerto: "Correto. Outubro de 1929.", feedbackErro: "É 1929. 1917 = Rev. Russa, 1945 = fim da 2ª Guerra." },
      { id: "q2", pergunta: "Quem liderou o NEW DEAL nos EUA?", fotoUrl: imgFila, cards: [{ id: "r", emoji: "🏗️", titulo: "Roosevelt", cor: "from-teal-600 to-slate-900" }, { id: "h", emoji: "⛓️", titulo: "Hitler", cor: "from-amber-600 to-slate-900" }, { id: "m", emoji: "🎖️", titulo: "Mussolini", cor: "from-slate-600 to-slate-900" }], correta: "r", feedbackAcerto: "Correto. Roosevelt, presidente dos EUA a partir de 1933.", feedbackErro: "É Roosevelt. Hitler = Alemanha, Mussolini = Itália." },
      { id: "q3", pergunta: "O NAZISMO nasceu em qual país?", fotoUrl: imgComicio, cards: [{ id: "al", emoji: "🇩🇪", titulo: "Alemanha", cor: "from-teal-600 to-slate-900" }, { id: "it", emoji: "🇮🇹", titulo: "Itália", cor: "from-amber-600 to-slate-900" }, { id: "es", emoji: "🇪🇸", titulo: "Espanha", cor: "from-slate-600 to-slate-900" }], correta: "al", feedbackAcerto: "Correto. Alemanha, com Hitler (1933).", feedbackErro: "É Alemanha. Itália = Fascismo (Mussolini); Espanha = Franquismo (Franco)." },
    ],
    falaFinal: "Você já mapeia crise → totalitarismos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Duas respostas à crise: democrática e autoritária.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgBolsa,
    camadas: [
      { id: "dem", rotulo: "Resposta democrática (EUA)", emoji: "🗳️", cor: "from-cyan-700 to-slate-900", rect: { x: 5, y: 10, w: 90, h: 40 }, descricao: "New Deal: Estado investe, cria empregos e regula bancos. Democracia preservada." },
      { id: "aut", rotulo: "Resposta autoritária (Europa)", emoji: "⛓️", cor: "from-amber-700 to-slate-900", rect: { x: 5, y: 55, w: 90, h: 40 }, descricao: "Fascismo (Itália), Nazismo (Alemanha), Franquismo (Espanha). Fim da democracia, perseguição a opositores." },
    ],
    falaFinal: "Mesma crise, dois caminhos. Um preservou direitos, outro levou à 2ª Guerra.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos entre a crise e o início da 2ª Guerra.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Marcos 1929–1939",
    paradas: [
      { id: "cr", emoji: "📉", rotulo: "1. Crise (1929)", fotoUrl: imgCrise, descricao: "Quebra da Bolsa de Nova York." },
      { id: "nd", emoji: "🏗️", rotulo: "2. New Deal (1933)", fotoUrl: imgTot, descricao: "Roosevelt assume nos EUA." },
      { id: "hit", emoji: "⛓️", rotulo: "3. Hitler no poder (1933)", fotoUrl: imgFila, descricao: "Nazismo assume a Alemanha." },
      { id: "pol", emoji: "⚔️", rotulo: "4. Invasão da Polônia (1939)", fotoUrl: imgComicio, descricao: "Início da 2ª Guerra Mundial." },
    ],
    ordemCerta: ["cr", "nd", "hit", "pol"],
    feedbackAcerto: "Perfeito. Crise → New Deal e Nazismo (mesma década) → guerra em 1939.",
    feedbackErro: "Comece pela crise (1929) e siga a cronologia.",
    falaFinal: "10 anos separam a crise da guerra. Uma década decisiva.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 2 da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 2 — Crise e Totalitarismos",
    paragrafos: [
      { id: "p1", texto: "Em outubro de 1929 a Bolsa de Nova York desabou. Milhões perderam tudo em dias. Bancos faliram, fábricas fecharam, o desemprego nos EUA chegou a 25%. A crise saltou para Europa e América Latina — foi a GRANDE DEPRESSÃO.", chaves: ["Grande Depressão"], definicoes: { "Grande Depressão": "Crise econômica mundial iniciada em 1929 com a quebra da Bolsa de Nova York, que durou até o começo dos anos 1940." }, fotoUrl: imgBolsa },
      { id: "p2", texto: "Nos EUA, o presidente Roosevelt lançou em 1933 o NEW DEAL: o Estado passou a investir em obras públicas, garantir salário mínimo e regular bancos. É a base do que se chama ESTADO DE BEM-ESTAR SOCIAL — Estado que atua para reduzir a miséria.", chaves: ["New Deal"], definicoes: { "New Deal": "Programa de Roosevelt (1933) para tirar os EUA da crise por meio de investimento estatal, obras públicas e regulação financeira." }, fotoUrl: imgCrise },
      { id: "p3", texto: "Na Europa, o caminho foi outro. Regimes TOTALITÁRIOS aproveitaram a miséria e o rancor de Versalhes: FASCISMO na Itália (Mussolini, 1922), NAZISMO na Alemanha (Hitler, 1933), FRANQUISMO na Espanha (Franco, 1939). Todos: partido único, culto ao líder, censura, polícia política.", chaves: ["Totalitarismos"], definicoes: { Totalitarismos: "Regimes que controlam todos os aspectos da vida social — partido único, líder cultuado, censura e polícia política." }, fotoUrl: imgTot },
      { id: "p4", texto: "O nazismo somou racismo institucional. Em 1935, as LEIS DE NUREMBERG tiraram a cidadania dos judeus alemães, proibiram casamentos com não-judeus e prepararam o terreno legal para o Holocausto. A crise de 1929 é uma das raízes diretas da 2ª Guerra Mundial.", chaves: ["Leis de Nuremberg"], definicoes: { "Leis de Nuremberg": "Leis alemãs de 1935 que tiraram direitos civis dos judeus e institucionalizaram o racismo do regime nazista." }, fotoUrl: imgFila },
    ],
    falaFinal: "Leitura concluída. Você já explica por que crise econômica pode virar guerra.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada resposta à crise ao país certo.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "eua", emoji: "🇺🇸", rotulo: "EUA (democrática)" },
      { id: "it", emoji: "🇮🇹", rotulo: "Itália (Fascismo)" },
      { id: "al", emoji: "🇩🇪", rotulo: "Alemanha (Nazismo)" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "New Deal", emoji: "🏗️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Estado investe em obras", emoji: "🛣️", cor: "from-cyan-600 to-slate-900" }, contexto: "1933.", pecaCertaId: "eua", feedbackAcerto: "Correto. New Deal = EUA.", feedbackErro: "É EUA (Roosevelt)." },
      { id: "r2", municipioA: { nome: "Mussolini", emoji: "⛓️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Camisas-negras", emoji: "👥", cor: "from-amber-600 to-slate-900" }, contexto: "1922.", pecaCertaId: "it", feedbackAcerto: "Correto. Fascismo = Itália.", feedbackErro: "É Itália." },
      { id: "r3", municipioA: { nome: "Leis de Nuremberg (1935)", emoji: "📜", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Retirada da cidadania dos judeus", emoji: "🕳️", cor: "from-slate-600 to-slate-900" }, contexto: "Racismo legal.", pecaCertaId: "al", feedbackAcerto: "Correto. Nazismo = Alemanha.", feedbackErro: "É Alemanha (nazismo)." },
      { id: "r4", municipioA: { nome: "Roosevelt", emoji: "🇺🇸", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Presidente eleito 4 vezes", emoji: "🗳️", cor: "from-cyan-600 to-slate-900" }, contexto: "1933–45.", pecaCertaId: "eua", feedbackAcerto: "Correto. Roosevelt = EUA.", feedbackErro: "É EUA." },
      { id: "r5", municipioA: { nome: "'Il Duce'", emoji: "🎖️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Chefe supremo", emoji: "👑", cor: "from-amber-600 to-slate-900" }, contexto: "Título de Mussolini.", pecaCertaId: "it", feedbackAcerto: "Correto. Il Duce = Mussolini (Itália).", feedbackErro: "É Itália." },
      { id: "r6", municipioA: { nome: "Gestapo", emoji: "🚔", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Polícia política nazista", emoji: "⛓️", cor: "from-slate-600 to-slate-900" }, contexto: "Polícia secreta.", pecaCertaId: "al", feedbackAcerto: "Correto. Gestapo = Alemanha nazista.", feedbackErro: "É Alemanha." },
    ],
    falaFinal: "6 rodadas. Você já separa democracia de totalitarismo.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Desemprego nos EUA — antes e no pico da crise.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgComicio,
    fatias: [
      { id: "trab", rotulo: "Empregados (~75%)", emoji: "💼", percentual: 75, cor: "#0f766e", descricao: "Trabalhadores que mantiveram o emprego em 1933 — muitos com salário reduzido pela crise.", exemplos: ["🏭 Fábricas", "🌾 Fazendas", "🏪 Comércio"] },
      { id: "des", rotulo: "Desempregados (~25%)", emoji: "📉", percentual: 25, cor: "#b45309", descricao: "Um em cada QUATRO trabalhadores dos EUA estava desempregado no pico da Grande Depressão (1933).", exemplos: ["🚶 Filas de fome", "🏚️ Sem-teto", "🏦 Bancos fechados"] },
    ],
    falaFinal: "25% sem trabalho. Pra cada 4 pessoas, 1 na rua. É essa dor que alimenta os extremos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgBolsa,
    perguntas: [
      { id: "av1", pergunta: "A Crise de 1929 começou com:", opcoes: [{ id: "a", texto: "A invasão da Polônia.", correta: false }, { id: "b", texto: "A quebra da Bolsa de Nova York.", correta: true }, { id: "c", texto: "A queda do Muro de Berlim.", correta: false }], feedbackAcerto: "Correto. Nova York, outubro de 1929.", feedbackErro: "É a quebra da Bolsa de NY (1929)." },
      { id: "av2", pergunta: "O NEW DEAL foi:", opcoes: [{ id: "a", texto: "Um programa de investimento estatal para tirar os EUA da crise.", correta: true }, { id: "b", texto: "Uma aliança militar contra o nazismo.", correta: false }, { id: "c", texto: "Um partido único da Alemanha.", correta: false }], feedbackAcerto: "Correto. Roosevelt, 1933.", feedbackErro: "É o programa de Roosevelt (1933) contra a crise." },
      { id: "av3", pergunta: "Uma característica do NAZISMO era:", opcoes: [{ id: "a", texto: "Democracia com muitos partidos.", correta: false }, { id: "b", texto: "Racismo institucionalizado e partido único.", correta: true }, { id: "c", texto: "Governo do proletariado.", correta: false }], feedbackAcerto: "Correto. Nazismo somava totalitarismo + racismo institucional.", feedbackErro: "É racismo institucional + partido único." },
    ],
    selo: { nome: "Nó 2 da Teia", subtitulo: "Crise e Totalitarismos", emoji: "📉", cor: "from-amber-500 to-slate-900", fotoUrl: imgCrise },
    falaFinal: "Nó 2 destravado. A Teia agora liga economia, política e ódio organizado.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Nó 2 — Crise e Totalitarismos" },
};
