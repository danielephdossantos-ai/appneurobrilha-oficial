import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as diarioImg } from "@/assets/ciencias-4ano/u1-a1/diario-campo.jpg.asset.json";
import { url as bancadaImg } from "@/assets/ciencias-4ano/u2-a1/bancada-lab.jpg.asset.json";
import { url as aguaOleoImg } from "@/assets/ciencias-4ano/u2-a1/agua-oleo.jpg.asset.json";
import { url as salAguaImg } from "@/assets/ciencias-4ano/u2-a1/sal-agua.jpg.asset.json";
import { url as filtroImg } from "@/assets/ciencias-4ano/u2-a1/filtracao-cafe.jpg.asset.json";
import { url as imaImg } from "@/assets/ciencias-4ano/u2-a1/ima-limalha.jpg.asset.json";
import { url as ovoImg } from "@/assets/ciencias-4ano/u2-a1/ovo-fritando.jpg.asset.json";

/**
 * Ciências · 4º Ano · Unidade 2 · Aula 01
 * "Misturas e Transformações dos Materiais" — EF04CI01/02/03
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-misturas-transformacoes",
  titulo: "Misturas e Transformações",
  iconeTrilha: "🧪",
  bncc: ["EF04CI01", "EF04CI02", "EF04CI03"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pela bancada do laboratório. Observe as misturas.",
    mapaUrl: bancadaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Equipe, missão nova. Nesta bancada temos várias MISTURAS — combinações de dois ou mais materiais. Algumas dá pra separar de volta, outras não. E algumas mudam pra sempre. Vamos investigar.",
    falaFinal:
      "Toda mistura tem uma história: como foi formada, se pode ser separada, e o que a compõe.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Se eu jogar SAL numa xícara de água e mexer bem, o que acontece com o sal?",
    pergunta: "Hipótese: o que acontece com o sal ao mexer na água?",
    fotoUrl: salAguaImg,
    opcoes: [
      { id: "some", titulo: "SUMIU pra sempre", subtitulo: "virou água", emoji: "❌", cor: "from-red-500 to-rose-700" },
      { id: "dissolve", titulo: "DISSOLVE", subtitulo: "continua ali, só invisível", emoji: "💧", cor: "from-cyan-500 to-sky-700" },
      { id: "flutua", titulo: "FLUTUA", subtitulo: "fica na superfície", emoji: "☁️", cor: "from-slate-400 to-slate-600" },
    ],
    respostaCerta: "dissolve",
    feedbackAcerto:
      "Confirmado. O sal DISSOLVE — vira uma mistura homogênea. Se a gente evaporar a água, o sal volta a aparecer. Ele NÃO sumiu.",
    feedbackErro:
      "O sal não sumiu. Ele DISSOLVEU — está lá, só que espalhado nas moléculas de água. Prova? Prova a água: está salgada.",
    falaFinal:
      "Em toda mistura, os materiais continuam existindo — só ficam juntos. A ciência tem métodos pra separar.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave do laboratório de misturas. Estuda cada um.",
    instrucao: "Vocabulário técnico de misturas",
    cadernos: [
      {
        id: "homogenea",
        capa: "HOMOGÊNEA",
        emoji: "💧",
        cor: "from-cyan-500 to-sky-700",
        conteudo: "Mistura onde não dá pra ver os componentes separados. Parece uma coisa só.",
        exemplo: "Ex.: água com sal, ar, refrigerante sem gás.",
        fotoUrl: salAguaImg,
      },
      {
        id: "heterogenea",
        capa: "HETEROGÊNEA",
        emoji: "🥗",
        cor: "from-amber-500 to-orange-700",
        conteudo: "Mistura onde dá pra ver os componentes separados a olho nu.",
        exemplo: "Ex.: água e óleo, salada, granola no leite.",
        fotoUrl: aguaOleoImg,
      },
      {
        id: "filtracao",
        capa: "FILTRAÇÃO",
        emoji: "☕",
        cor: "from-amber-700 to-yellow-900",
        conteudo: "Separação usando um filtro que retém o sólido e deixa o líquido passar.",
        exemplo: "Ex.: coar café, filtrar água suja com areia.",
        fotoUrl: filtroImg,
      },
      {
        id: "reversivel",
        capa: "TRANSF. REVERSÍVEL",
        emoji: "🔄",
        cor: "from-teal-500 to-emerald-700",
        conteudo: "Mudança que pode VOLTAR ao estado anterior. Só muda a forma, não a substância.",
        exemplo: "Ex.: gelo derretendo (vira água, e volta a virar gelo no freezer).",
        fotoUrl: bancadaImg,
      },
      {
        id: "irreversivel",
        capa: "TRANSF. IRREVERSÍVEL",
        emoji: "🔥",
        cor: "from-red-500 to-rose-700",
        conteudo: "Mudança que NÃO pode voltar. A substância se transforma em outra coisa.",
        exemplo: "Ex.: ovo frito não volta a ser cru. Papel queimado não volta a ser papel.",
        fotoUrl: ovoImg,
      },
    ],
    falaFinal: "Homogênea, heterogênea, filtração, reversível e irreversível. Vocabulário de químico.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Bancada da equipe. Toca em cada experimento pra ver o que ele demonstra.",
    instrucao: "Toque em cada experimento",
    mapaUrl: bancadaImg,
    pontos: [
      {
        id: "agua-oleo", x: 20, y: 55, emoji: "🛢️", cor: "from-amber-500 to-orange-700",
        titulo: "Água + óleo",
        texto: "Mistura HETEROGÊNEA. Dá pra ver as duas camadas. Separa-se por DECANTAÇÃO — tirando o óleo de cima.",
        fotoUrl: aguaOleoImg,
      },
      {
        id: "sal-agua", x: 40, y: 65, emoji: "🧂", cor: "from-cyan-500 to-sky-700",
        titulo: "Água + sal",
        texto: "Mistura HOMOGÊNEA. Parece só água. Separa-se por EVAPORAÇÃO — a água vira vapor e o sal fica.",
        fotoUrl: salAguaImg,
      },
      {
        id: "filtro", x: 60, y: 55, emoji: "☕", cor: "from-amber-700 to-yellow-900",
        titulo: "Filtração",
        texto: "Papel-filtro retém o sólido (pó de café) e deixa o líquido passar. Usado pra separar sólido de líquido.",
        fotoUrl: filtroImg,
      },
      {
        id: "ima", x: 78, y: 70, emoji: "🧲", cor: "from-slate-600 to-slate-900",
        titulo: "Ímã + limalha",
        texto: "Separação MAGNÉTICA. O ímã puxa o ferro e a areia fica pra trás. Só funciona com metais magnéticos.",
        fotoUrl: imaImg,
      },
      {
        id: "ovo", x: 88, y: 40, emoji: "🍳", cor: "from-red-500 to-rose-700",
        titulo: "Ovo frito",
        texto: "Transformação IRREVERSÍVEL. O calor mudou a substância — não dá pra 'descozinhar' o ovo.",
        fotoUrl: ovoImg,
      },
    ],
    falaFinal: "Cada mistura pede um método de separação diferente. Todo cientista precisa reconhecer qual usar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Checkpoint. 3 perguntas técnicas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Água com sal (dissolvido) é uma mistura...",
        fotoUrl: salAguaImg,
        cards: [
          { id: "a", emoji: "💧", titulo: "Homogênea", cor: "from-cyan-500 to-sky-700" },
          { id: "b", emoji: "🥗", titulo: "Heterogênea", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "🚫", titulo: "Não é mistura", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "a",
        feedbackAcerto: "Certo. Dissolveu = HOMOGÊNEA (aparência uniforme).",
        feedbackErro: "Se você não consegue ver o sal separado da água, é HOMOGÊNEA.",
      },
      {
        id: "q2",
        pergunta: "Qual método separa ferro de areia?",
        fotoUrl: imaImg,
        cards: [
          { id: "a", emoji: "🧲", titulo: "Separação magnética (ímã)", cor: "from-slate-600 to-slate-900" },
          { id: "b", emoji: "☕", titulo: "Filtração", cor: "from-amber-700 to-yellow-900" },
          { id: "c", emoji: "💨", titulo: "Evaporação", cor: "from-cyan-500 to-sky-700" },
        ],
        correta: "a",
        feedbackAcerto: "Sim. O ímã só atrai o FERRO — a areia fica.",
        feedbackErro: "Filtro deixa areia e ferro juntos. Só o ÍMÃ separa ferro do resto.",
      },
      {
        id: "q3",
        pergunta: "Ovo cozinhando é transformação...",
        fotoUrl: ovoImg,
        cards: [
          { id: "a", emoji: "🔄", titulo: "Reversível", cor: "from-teal-500 to-emerald-700" },
          { id: "b", emoji: "🔥", titulo: "Irreversível", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "❓", titulo: "Não é transformação", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "b",
        feedbackAcerto: "Isso. Ovo cozido NÃO volta a ser cru. IRREVERSÍVEL.",
        feedbackErro: "Você já viu ovo cozido virar cru de novo? Não — é IRREVERSÍVEL.",
      },
    ],
    falaFinal: "Você já classifica misturas e transformações como um químico iniciante.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Bancada dividida em duas zonas: MISTURAS (que dá pra separar de volta) e TRANSFORMAÇÕES (mudanças de substância).",
    instrucao: "Toque nos interruptores",
    mapaUrl: bancadaImg,
    camadas: [
      {
        id: "misturas",
        rotulo: "Zona de Misturas",
        emoji: "🧪",
        cor: "from-cyan-500 to-sky-700",
        rect: { x: 2, y: 30, w: 55, h: 65 },
        descricao: "Água+óleo, água+sal, café coado, ferro+areia. Podem ser SEPARADAS por métodos físicos — sem mudar a substância.",
        fotoUrl: aguaOleoImg,
      },
      {
        id: "transformacoes",
        rotulo: "Zona de Transformações",
        emoji: "🔥",
        cor: "from-red-500 to-rose-700",
        rect: { x: 58, y: 30, w: 40, h: 65 },
        descricao: "Ovo frito, papel queimado, ferro enferrujando. Mudam a SUBSTÂNCIA — não dá pra desfazer.",
        fotoUrl: ovoImg,
      },
    ],
    falaFinal: "Misturar é juntar sem mudar. Transformar é virar outra coisa. Diferença enorme.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Rota da investigação: como separar água suja pra beber?",
    instrucao: "Toque nas paradas na ORDEM correta",
    pergunta: "Sequência pra tratar água suja com areia e ferro:",
    paradas: [
      { id: "ima", emoji: "🧲", rotulo: "1. Ímã (ferro)", descricao: "Passa o ímã pra tirar as partículas de ferro.", fotoUrl: imaImg },
      { id: "filtro", emoji: "☕", rotulo: "2. Filtração (areia)", descricao: "Coa em papel-filtro pra reter a areia.", fotoUrl: filtroImg },
      { id: "evapora", emoji: "💨", rotulo: "3. Evaporação (sais)", descricao: "Ferve pra tirar sais dissolvidos invisíveis.", fotoUrl: salAguaImg },
      { id: "beber", emoji: "💧", rotulo: "4. Água limpa", descricao: "Água pronta pra análise final.", fotoUrl: aguaOleoImg },
    ],
    ordemCerta: ["ima", "filtro", "evapora", "beber"],
    feedbackAcerto: "Sequência correta. Primeiro o mais grosso (ferro), depois o médio (areia), depois o invisível (sais).",
    feedbackErro: "Pensa: qual é o mais fácil de tirar primeiro? Sempre do maior pro menor.",
    falaFinal: "Estações de tratamento de água fazem exatamente essa sequência todo dia.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua leitura. Relatório do experimento com misturas.",
    tituloLivro: "📓 Relatório da Equipe · Semana 2",
    subtitulo: "Investigação: separação de misturas",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Uma MISTURA acontece quando dois ou mais materiais se juntam SEM se transformar. Se dá pra ver os componentes separados (água + óleo), é HETEROGÊNEA. Se parece uma coisa só (água + sal dissolvido), é HOMOGÊNEA.",
        chaves: ["mistura", "heterogênea", "homogênea"],
        definicoes: {
          mistura: "Combinação de materiais que continuam existindo, só juntos.",
          heterogênea: "Mistura onde dá pra ver os componentes separados.",
          homogênea: "Mistura de aparência uniforme, componentes invisíveis a olho nu.",
        },
        fotoUrl: aguaOleoImg,
      },
      {
        id: "p2",
        texto:
          "Toda mistura pode ser SEPARADA por métodos físicos. A DECANTAÇÃO separa líquidos que não se misturam (água e óleo). A FILTRAÇÃO retém sólidos (pó de café). O ÍMÃ separa materiais magnéticos (ferro). A EVAPORAÇÃO tira o líquido e deixa o sólido dissolvido (sal da água do mar).",
        chaves: ["decantação", "filtração", "evaporação"],
        definicoes: {
          decantação: "Deixar a mistura descansar e separar as camadas.",
          filtração: "Passar por um filtro que retém o sólido.",
          evaporação: "Ferver o líquido pra restar só o sólido.",
        },
        fotoUrl: filtroImg,
      },
      {
        id: "p3",
        texto:
          "Já uma TRANSFORMAÇÃO muda a substância. Se dá pra voltar (gelo↔água), é REVERSÍVEL. Se não dá (ovo frito, papel queimado, fruta apodrecendo), é IRREVERSÍVEL — nasceu uma substância nova que não existia antes.",
        chaves: ["transformação", "reversível", "irreversível"],
        definicoes: {
          transformação: "Mudança na natureza da substância.",
          reversível: "Pode voltar ao estado anterior.",
          irreversível: "Não volta — surgiu uma substância nova.",
        },
        fotoUrl: ovoImg,
      },
    ],
    falaFinal: "Misturas se separam. Transformações irreversíveis, não. Guarde essa diferença.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado. Classifica cada situação — antes do tempo acabar!",
    instrucao: "⏱️ Escolha a categoria certa",
    duracaoSegundos: 20,
    pecas: [
      { id: "homogenea", emoji: "💧", rotulo: "Homogênea" },
      { id: "heterogenea", emoji: "🥗", rotulo: "Heterogênea" },
      { id: "reversivel", emoji: "🔄", rotulo: "Reversível" },
      { id: "irreversivel", emoji: "🔥", rotulo: "Irreversível" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Refrigerante sem gás", emoji: "🥤", cor: "from-cyan-500 to-sky-700" },
        municipioB: { nome: "Parece uma coisa só", emoji: "💧", cor: "from-teal-500 to-emerald-700" },
        contexto: "Refrigerante misturado, sem bolhas. Você não vê açúcar separado nem sabor separado.",
        pecaCertaId: "homogenea",
        fotoUrl: salAguaImg,
        feedbackAcerto: "Isso. Aparência uniforme = HOMOGÊNEA.",
        feedbackErro: "Se não dá pra ver os componentes = HOMOGÊNEA.",
      },
      {
        id: "r2",
        municipioA: { nome: "Salada", emoji: "🥗", cor: "from-amber-500 to-orange-700" },
        municipioB: { nome: "Dá pra ver alface e tomate", emoji: "🍅", cor: "from-red-500 to-rose-700" },
        contexto: "Uma salada com alface, tomate, cenoura e cebola no prato.",
        pecaCertaId: "heterogenea",
        fotoUrl: aguaOleoImg,
        feedbackAcerto: "Perfeito. Cada ingrediente visível = HETEROGÊNEA.",
        feedbackErro: "Se dá pra ver cada parte = HETEROGÊNEA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Água virando gelo", emoji: "🧊", cor: "from-cyan-500 to-sky-700" },
        municipioB: { nome: "Pode derreter e congelar de novo", emoji: "🔄", cor: "from-teal-500 to-emerald-700" },
        contexto: "Água líquida no freezer vira gelo. Fora do freezer, o gelo derrete e vira água de novo.",
        pecaCertaId: "reversivel",
        fotoUrl: bancadaImg,
        feedbackAcerto: "Sim. Vai e volta = REVERSÍVEL.",
        feedbackErro: "Congelou e derreteu = REVERSÍVEL. A substância continua sendo água.",
      },
      {
        id: "r4",
        municipioA: { nome: "Papel queimando", emoji: "🔥", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Não volta a ser papel", emoji: "🚫", cor: "from-slate-600 to-slate-900" },
        contexto: "Uma folha de papel pega fogo e vira cinza. O que resta é fumaça e pó preto.",
        pecaCertaId: "irreversivel",
        fotoUrl: ovoImg,
        feedbackAcerto: "Exato. Cinza NÃO vira papel de novo. IRREVERSÍVEL.",
        feedbackErro: "Uma vez queimado, virou outra substância. IRREVERSÍVEL.",
      },
    ],
    falaFinal: "Você reconhece cada tipo em situações reais. Bom trabalho de laboratório.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "As mudanças na matéria se dividem em duas grandes categorias.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: bancadaImg,
    fatias: [
      {
        id: "misturas",
        rotulo: "Misturas (físicas)",
        emoji: "🧪",
        percentual: 50,
        cor: "#0891b2",
        descricao: "Materiais juntos que continuam existindo. Podem ser SEPARADOS de volta.",
        exemplos: ["Água+óleo", "Água+sal", "Ferro+areia"],
        fotoUrl: aguaOleoImg,
      },
      {
        id: "transformacoes",
        rotulo: "Transformações (químicas)",
        emoji: "🔥",
        percentual: 50,
        cor: "#dc2626",
        descricao: "Substância vira OUTRA substância. Reversível se volta; irreversível se não volta.",
        exemplos: ["Gelo↔água (reversível)", "Ovo frito (irreversível)", "Queimar papel (irreversível)"],
        fotoUrl: ovoImg,
      },
    ],
    falaFinal: "Misturar é juntar. Transformar é virar outra coisa. Duas ciências diferentes.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Missão final. 3 perguntas e a carteira de laboratório é liberada.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "Água com açúcar dissolvido é:",
        fotoUrl: salAguaImg,
        opcoes: [
          { id: "a", texto: "Mistura homogênea", correta: true },
          { id: "b", texto: "Transformação irreversível" },
        ],
        feedbackAcerto: "Certo. Dissolveu = HOMOGÊNEA. Se evaporar a água, o açúcar volta.",
        feedbackErro: "Não é transformação — o açúcar continua sendo açúcar. É MISTURA.",
      },
      {
        id: "q2",
        pergunta: "Pra separar ferro de areia, uso:",
        fotoUrl: imaImg,
        opcoes: [
          { id: "a", texto: "Ímã", correta: true },
          { id: "b", texto: "Filtro de papel" },
        ],
        feedbackAcerto: "Sim. Só o ÍMÃ atrai ferro.",
        feedbackErro: "Filtro deixa ferro e areia juntos. Precisa de ÍMÃ.",
      },
      {
        id: "q3",
        pergunta: "Ovo cozido pode voltar a ser cru?",
        fotoUrl: ovoImg,
        opcoes: [
          { id: "a", texto: "Não — é irreversível", correta: true },
          { id: "b", texto: "Sim — basta esfriar" },
        ],
        feedbackAcerto: "Correto. Transformação IRREVERSÍVEL.",
        feedbackErro: "Esfriar não desfaz. O calor mudou a substância. IRREVERSÍVEL.",
      },
    ],
    selo: {
      nome: "Selo do Laboratório de Misturas",
      subtitulo: "Unidade 2 concluída · Química Iniciante",
      emoji: "🧪",
      cor: "from-cyan-400 via-sky-500 to-blue-700",
    },
    falaFinal: "Selo do laboratório registrado. Próxima missão: seres vivos e ecossistemas.",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Químico Júnior" },
};
