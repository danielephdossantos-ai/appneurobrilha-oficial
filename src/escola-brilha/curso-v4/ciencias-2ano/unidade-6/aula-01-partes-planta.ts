import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import arvoreImg from "@/assets/ciencias-2ano/u6-a1/arvore-partes.jpg";
import girassolImg from "@/assets/ciencias-2ano/u6-a1/girassol-partes.jpg";

/**
 * Ciências · 2º Ano · Unidade 6 · Aula 01
 * "Partes da planta e o que cada uma faz" — EF02CI06 · Cristal da Planta
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-partes-planta",
  titulo: "Partes da Planta",
  iconeTrilha: "🌻",
  bncc: ["EF02CI06"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pela árvore. Encontre as 5 partes.",
    mapaUrl: arvoreImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Brilha, o 6º cristal está numa GRANDE ÁRVORE. Ela tem 5 partes, e cada uma faz um trabalho especial. Vamos descobrir todas!",
    falaFinal: "Como um corpo humano tem partes com funções diferentes, a planta também tem!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Qual parte da planta puxa ÁGUA da terra?",
    pergunta: "Qual parte da planta puxa água do solo?",
    fotoUrl: girassolImg,
    opcoes: [
      { id: "flor", titulo: "A flor", subtitulo: "lá em cima", emoji: "🌸", cor: "from-pink-400 to-rose-600" },
      { id: "raiz", titulo: "A raiz", subtitulo: "debaixo da terra", emoji: "🌱", cor: "from-amber-600 to-yellow-800" },
      { id: "folha", titulo: "As folhas", subtitulo: "verdes no galho", emoji: "🍃", cor: "from-emerald-400 to-green-700" },
    ],
    respostaCerta: "raiz",
    feedbackAcerto: "HIPÓTESE CONFIRMADA! A RAIZ puxa a água da terra e segura a planta.",
    feedbackErro: "Flor e folha ficam pra cima. Quem puxa água da terra é a RAIZ.",
    falaFinal: "Cada parte tem uma FUNÇÃO. Vamos ver cada uma!",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Abre cada caderno: as 5 partes.",
    instrucao: "As 5 partes da planta",
    cadernos: [
      { id: "raiz", capa: "RAIZ", emoji: "🌱", cor: "from-amber-700 to-yellow-900", conteudo: "Fica na terra. Puxa água e segura a planta.", exemplo: "Ex.: cenoura é uma raiz que a gente come.", fotoUrl: girassolImg },
      { id: "caule", capa: "CAULE", emoji: "🌵", cor: "from-emerald-600 to-green-800", conteudo: "É o CANO que leva a água da raiz até as folhas.", exemplo: "Ex.: o tronco da árvore é um caule grande.", fotoUrl: arvoreImg },
      { id: "folha", capa: "FOLHAS", emoji: "🍃", cor: "from-emerald-400 to-green-600", conteudo: "Verdes! Recebem o SOL e fabricam a comida da planta.", exemplo: "Ex.: alface é uma folha que a gente come.", fotoUrl: arvoreImg },
      { id: "flor", capa: "FLOR", emoji: "🌸", cor: "from-pink-400 to-rose-600", conteudo: "Colorida e cheirosa. Vira FRUTO depois.", exemplo: "Ex.: girassol, rosa, orquídea.", fotoUrl: girassolImg },
      { id: "fruto", capa: "FRUTO", emoji: "🍎", cor: "from-red-500 to-orange-700", conteudo: "Guarda as SEMENTES que geram novas plantas.", exemplo: "Ex.: maçã, laranja, tomate.", fotoUrl: arvoreImg },
    ],
    falaFinal: "Raiz, caule, folhas, flor e fruto. Cinco partes, cinco funções!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada parte da árvore pra ver o que ela faz.",
    instrucao: "Toque em cada parte",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: arvoreImg,
    pontos: [
      { id: "raiz", x: 50, y: 92, emoji: "🌱", cor: "from-amber-700 to-yellow-900", titulo: "Raiz", texto: "Debaixo da terra. Puxa ÁGUA e NUTRIENTES e segura a árvore no lugar.", fotoUrl: girassolImg },
      { id: "caule", x: 50, y: 60, emoji: "🌵", cor: "from-amber-600 to-yellow-800", titulo: "Caule (tronco)", texto: "Cano forte que sustenta e leva a água da raiz até as folhas.", fotoUrl: arvoreImg },
      { id: "folha", x: 30, y: 25, emoji: "🍃", cor: "from-emerald-400 to-green-700", titulo: "Folhas", texto: "Recebem o SOL e fabricam o alimento da planta (fotossíntese).", fotoUrl: arvoreImg },
      { id: "flor", x: 65, y: 25, emoji: "🌸", cor: "from-pink-400 to-rose-600", titulo: "Flor", texto: "Atrai borboletas e abelhas. Depois vira FRUTO.", fotoUrl: girassolImg },
      { id: "fruto", x: 80, y: 45, emoji: "🍎", cor: "from-red-500 to-orange-700", titulo: "Fruto", texto: "Guarda as SEMENTES. É o começo de uma nova planta.", fotoUrl: arvoreImg },
    ],
    falaFinal: "Cada parte é essencial. Se falta uma, a planta não funciona direito!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre as partes.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Qual parte puxa água da terra?", fotoUrl: girassolImg, cards: [{ id: "a", emoji: "🌱", titulo: "Raiz", cor: "from-amber-700 to-yellow-900" }, { id: "b", emoji: "🌸", titulo: "Flor", cor: "from-pink-400 to-rose-600" }, { id: "c", emoji: "🍎", titulo: "Fruto", cor: "from-red-500 to-orange-700" }], correta: "a", feedbackAcerto: "Isso! RAIZ puxa água.", feedbackErro: "Só a RAIZ toca a terra e puxa água." },
      { id: "q2", pergunta: "Onde a planta FABRICA seu alimento?", fotoUrl: arvoreImg, cards: [{ id: "a", emoji: "🍃", titulo: "Nas folhas", cor: "from-emerald-400 to-green-700" }, { id: "b", emoji: "🌱", titulo: "Na raiz", cor: "from-amber-700 to-yellow-900" }, { id: "c", emoji: "🌵", titulo: "No caule", cor: "from-emerald-600 to-green-800" }], correta: "a", feedbackAcerto: "Certo! FOLHAS recebem o sol e fazem o alimento.", feedbackErro: "Só as FOLHAS pegam a luz do sol. É lá que a comida é feita!" },
      { id: "q3", pergunta: "O que a flor vira depois?", fotoUrl: girassolImg, cards: [{ id: "a", emoji: "🍎", titulo: "Fruto", cor: "from-red-500 to-orange-700" }, { id: "b", emoji: "🪨", titulo: "Pedra", cor: "from-slate-400 to-slate-700" }, { id: "c", emoji: "☁️", titulo: "Nuvem", cor: "from-sky-300 to-cyan-500" }], correta: "a", feedbackAcerto: "PERFEITO! Toda flor pode virar FRUTO com sementes.", feedbackErro: "Flor não vira pedra nem nuvem. Vira FRUTO!" },
    ],
    falaFinal: "Você já é botânico!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois interruptores: um mostra a parte SUBTERRÂNEA, outro a parte que vemos.",
    instrucao: "Toque nos interruptores",
    mapaUrl: arvoreImg,
    camadas: [
      { id: "baixo", rotulo: "Debaixo da terra", emoji: "🌱", cor: "from-amber-700 to-yellow-900", rect: { x: 20, y: 85, w: 60, h: 10 }, descricao: "A RAIZ é a parte escondida. Segura e alimenta a planta." },
      { id: "cima", rotulo: "Acima da terra", emoji: "🌳", cor: "from-emerald-500 to-green-700", rect: { x: 15, y: 5, w: 70, h: 75 }, descricao: "Caule, folhas, flor e fruto — tudo que a gente vê e usa." },
    ],
    falaFinal: "A raiz é escondida mas é fundamental. Sem raiz, a árvore cai!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar as partes de baixo pra cima?",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Ordem da planta, de baixo pra cima:",
    paradas: [
      { id: "raiz", emoji: "🌱", rotulo: "1. Raiz", descricao: "Na terra, escondida.", fotoUrl: girassolImg },
      { id: "caule", emoji: "🌵", rotulo: "2. Caule", descricao: "Sobe do chão pro alto.", fotoUrl: arvoreImg },
      { id: "folha", emoji: "🍃", rotulo: "3. Folhas", descricao: "Verdes, nos galhos.", fotoUrl: arvoreImg },
      { id: "florfruto", emoji: "🌸", rotulo: "4. Flor / Fruto", descricao: "No topo, atraem bichos e viram fruto.", fotoUrl: arvoreImg },
    ],
    ordemCerta: ["raiz", "caule", "folha", "florfruto"],
    feedbackAcerto: "Planta completa! De baixo pra cima na ordem certa.",
    feedbackErro: "Pensa: qual fica DEBAIXO da terra? Qual fica NO ALTO?",
    falaFinal: "Toda planta segue essa arquitetura!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Diário da Botânica.",
    tituloLivro: "📓 Diário da Botânica",
    subtitulo: "Página 6 — Partes da planta",
    paragrafos: [
      { id: "p1", texto: "A RAIZ é a parte que fica na terra. Ela PUXA água e nutrientes e SEGURA a planta pro vento não derrubar.", chaves: ["raiz", "nutrientes"], definicoes: { raiz: "Parte subterrânea da planta.", nutrientes: "Alimentos que a planta puxa da terra junto com a água." }, fotoUrl: girassolImg },
      { id: "p2", texto: "O CAULE é o cano central. Ele CONDUZ a água da raiz até as folhas. Em uma árvore, o caule vira TRONCO grosso.", chaves: ["caule", "tronco"], definicoes: { caule: "Cano da planta que liga raiz e folhas.", tronco: "Caule grosso e duro de uma árvore." }, fotoUrl: arvoreImg },
      { id: "p3", texto: "As FOLHAS recebem o sol e FABRICAM o alimento da planta (isso se chama FOTOSSÍNTESE). A FLOR depois vira FRUTO — e o fruto guarda as SEMENTES pra novas plantinhas.", chaves: ["folhas", "fotossíntese", "sementes"], definicoes: { folhas: "Partes verdes que pegam o sol.", fotossíntese: "Processo em que a planta faz alimento com sol, água e ar.", sementes: "Pontinhos que viram novas plantas." }, fotoUrl: arvoreImg },
    ],
    falaFinal: "Já é diplomado em partes da planta!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado! Cada rodada mostra uma FUNÇÃO — escolha a parte certa!",
    instrucao: "⏱️ Leia e escolha a parte certa!",
    duracaoSegundos: 15,
    pecas: [
      { id: "raiz", emoji: "🌱", rotulo: "Raiz" },
      { id: "caule", emoji: "🌵", rotulo: "Caule" },
      { id: "folha", emoji: "🍃", rotulo: "Folha" },
      { id: "flor", emoji: "🌸", rotulo: "Flor / Fruto" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Puxa água", emoji: "💧", cor: "from-cyan-400 to-sky-700" }, municipioB: { nome: "Segura a planta", emoji: "🪢", cor: "from-amber-700 to-yellow-900" }, contexto: "Puxa água da terra e segura a planta. Qual parte é?", pecaCertaId: "raiz", fotoUrl: girassolImg, feedbackAcerto: "Isso! RAIZ.", feedbackErro: "Só a RAIZ toca a terra." },
      { id: "r2", municipioA: { nome: "Tronco grosso", emoji: "🌳", cor: "from-amber-600 to-yellow-800" }, municipioB: { nome: "Conduz água", emoji: "🚿", cor: "from-emerald-600 to-green-800" }, contexto: "Sustenta a planta e conduz a água pra cima. Qual parte?", pecaCertaId: "caule", fotoUrl: arvoreImg, feedbackAcerto: "Combo! CAULE — o tronco.", feedbackErro: "Sustentar + conduzir água = CAULE." },
      { id: "r3", municipioA: { nome: "Recebe sol", emoji: "☀️", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Fabrica comida", emoji: "🍽️", cor: "from-emerald-400 to-green-700" }, contexto: "Verde, recebe o sol e faz a comida da planta. Quem é?", pecaCertaId: "folha", fotoUrl: arvoreImg, feedbackAcerto: "Perfeito! FOLHA — a fábrica verde.", feedbackErro: "Só as FOLHAS pegam a luz. É a folha!" },
      { id: "r4", municipioA: { nome: "Guarda sementes", emoji: "🌰", cor: "from-red-500 to-orange-700" }, municipioB: { nome: "Cheiroso e colorido", emoji: "🌺", cor: "from-pink-400 to-rose-600" }, contexto: "É colorido, atrai bichos e depois vira fruto com sementes. O que é?", pecaCertaId: "flor", fotoUrl: girassolImg, feedbackAcerto: "Isso! FLOR — vira fruto e guarda a semente.", feedbackErro: "Colorida + vira fruto = FLOR." },
    ],
    falaFinal: "Você reconhece a função de cada parte!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "As partes se dividem em duas metades: as que ALIMENTAM e as que se REPRODUZEM.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: arvoreImg,
    fatias: [
      { id: "alimenta", rotulo: "Alimentar", emoji: "🍽️", percentual: 50, cor: "#22c55e", descricao: "Raiz, caule e folhas: puxar água, subir água e fazer alimento.", exemplos: ["Raiz", "Caule", "Folha"], fotoUrl: arvoreImg },
      { id: "reproduzir", rotulo: "Reproduzir", emoji: "🌱", percentual: 50, cor: "#ec4899", descricao: "Flor e fruto: gerar novas plantas com sementes.", exemplos: ["Flor", "Fruto"], fotoUrl: girassolImg },
    ],
    falaFinal: "Alimentar + reproduzir = planta completa!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas pra fechar o Cristal da Planta.",
    instrucao: "Responda 3 perguntas rápidas",
    fotoUrl: brilhaImg,
    perguntas: [
      { id: "q1", pergunta: "Puxa água da terra:", fotoUrl: girassolImg, opcoes: [{ id: "a", texto: "Raiz", correta: true }, { id: "b", texto: "Flor" }], feedbackAcerto: "Isso!", feedbackErro: "É a RAIZ." },
      { id: "q2", pergunta: "Fabrica alimento com o sol:", fotoUrl: arvoreImg, opcoes: [{ id: "a", texto: "Folha", correta: true }, { id: "b", texto: "Fruto" }], feedbackAcerto: "Certo!", feedbackErro: "É a FOLHA." },
      { id: "q3", pergunta: "Guarda as sementes:", fotoUrl: arvoreImg, opcoes: [{ id: "a", texto: "Fruto", correta: true }, { id: "b", texto: "Raiz" }], feedbackAcerto: "PERFEITO!", feedbackErro: "Semente fica dentro do FRUTO." },
    ],
    selo: { nome: "Cristal da Planta", subtitulo: "6º cristal desbloqueado!", emoji: "💎", cor: "from-pink-400 via-rose-500 to-red-600" },
    falaFinal: "Você recuperou o Cristal da Planta! Toda a botânica agrade!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Botânico Iniciante" },
};
