import type { AulaGeoV1 } from "../../types";
import florestaImg from "@/assets/ciencias-7ano/u4-a1/ecossistema-floresta.jpg";
import cadeiaImg from "@/assets/ciencias-7ano/u4-a1/cadeia-alimentar.jpg";
import cicloImg from "@/assets/ciencias-7ano/u4-a1/ciclo-agua.jpg";

/**
 * Ciências · 7º Ano · Unidade 4 · Aula 01
 * "Rede da Vida" — Departamento de Ecologia.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-rede-da-vida",
  titulo: "Rede da Vida",
  iconeTrilha: "🌳",
  recompensa: { xp: 140, moedas: 55, medalha: "Ecólogo Júnior" },
  bncc: ["EF07CI10"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Foto aérea de floresta tropical. Toque para iniciar.",
    mapaUrl: florestaImg,
    imagemDestaqueUrl: cadeiaImg,
    aurora:
      "Departamento 4: Ecologia. Missão: entender como MATÉRIA e ENERGIA circulam entre seres vivos e ambiente. Nada na natureza está sozinho — tudo é REDE.",
    falaFinal:
      "Ecologia é a ciência das CONEXÕES. Um besouro que some pode derrubar uma floresta inteira.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Se você remover TODOS os predadores de topo (onças, gaviões) de um ecossistema, o que acontece com as plantas?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: cadeiaImg,
    opcoes: [
      { id: "aumentam", titulo: "Plantas aumentam", subtitulo: "sem predadores tudo cresce", emoji: "🌿", cor: "from-slate-500 to-slate-700", fotoUrl: florestaImg },
      { id: "diminuem", titulo: "Plantas diminuem", subtitulo: "herbívoros explodem e devoram tudo", emoji: "📉", cor: "from-emerald-500 to-teal-700", fotoUrl: cadeiaImg },
      { id: "iguais", titulo: "Nada muda", subtitulo: "predadores não afetam plantas", emoji: "🟰", cor: "from-rose-500 to-red-700", fotoUrl: cadeiaImg },
    ],
    respostaCerta: "diminuem",
    feedbackAcerto:
      "Correto. É a CASCATA TRÓFICA. Sem predador → herbívoros multiplicam → devoram vegetação → floresta desaparece. Prova real: Yellowstone (EUA) após remover lobos.",
    feedbackErro:
      "Sem predadores, HERBÍVOROS explodem em número. Cabras, veados, insetos comem toda vegetação. Resultado: plantas DIMINUEM drasticamente.",
    falaFinal:
      "Predadores CONTROLAM herbívoros — que controlam plantas. Cadeia alimentar é regulação, não competição isolada.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco conceitos essenciais da ecologia.",
    instrucao: "Vocabulário ecológico",
    cadernos: [
      { id: "produtor", capa: "PRODUTOR", emoji: "🌿", cor: "from-emerald-500 to-green-700", conteudo: "Ser vivo AUTOTRÓFICO — produz seu próprio alimento por fotossíntese. Base de toda cadeia alimentar terrestre e aquática.", exemplo: "Ex.: plantas, algas, cianobactérias.", fotoUrl: florestaImg },
      { id: "consumidor", capa: "CONSUMIDOR", emoji: "🐆", cor: "from-red-500 to-rose-700", conteudo: "Ser HETEROTRÓFICO — precisa comer outro ser vivo para obter energia. Divididos em 1º (herbívoros), 2º (carnívoros) e 3º (predadores de topo).", exemplo: "Ex.: gafanhoto (1º), sapo (2º), onça (3º).", fotoUrl: cadeiaImg },
      { id: "decompositor", capa: "DECOMPOSITOR", emoji: "🍄", cor: "from-amber-500 to-orange-700", conteudo: "Fungos e bactérias que quebram matéria morta e devolvem nutrientes ao solo. RECICLAM o ecossistema.", exemplo: "Ex.: cogumelos em tronco caído; bactérias no húmus.", fotoUrl: florestaImg },
      { id: "cadeia", capa: "CADEIA ALIMENTAR", emoji: "🔗", cor: "from-sky-500 to-cyan-700", conteudo: "Sequência de QUEM COME QUEM em um ecossistema. Sempre começa em um produtor e sobe pelos consumidores.", exemplo: "Ex.: capim → gafanhoto → sapo → cobra → gavião.", fotoUrl: cadeiaImg },
      { id: "ciclo", capa: "CICLO DA MATÉRIA", emoji: "♻️", cor: "from-indigo-500 to-purple-700", conteudo: "Matéria (água, carbono, nitrogênio) circula em CICLOS — nunca some, sempre volta. Já a energia flui em UMA direção (do sol adiante) e se perde como calor.", exemplo: "Ex.: água evapora do mar → chove → volta ao mar.", fotoUrl: cicloImg, partes: [
        { titulo: "Água", texto: "Evapora, forma nuvem, chove, infiltra, escoa e volta ao mar. Ciclo eterno." },
        { titulo: "Carbono", texto: "Planta absorve CO₂ → animal come → respira CO₂ de volta para o ar." },
        { titulo: "Nitrogênio", texto: "Bactérias transformam N₂ do ar em nitratos usáveis pelas plantas." },
        { titulo: "Energia", texto: "Vem do SOL, passa pelos produtores e consumidores e se perde como CALOR — não volta." },
      ] },
    ],
    falaFinal:
      "Produtor, consumidor, decompositor, cadeia, ciclo. Vocabulário base para ler qualquer ecossistema.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Uma cadeia alimentar terrestre. Toque em cada elo.",
    instrucao: "Toque nos organismos",
    mapaUrl: cadeiaImg,
    pontos: [
      { id: "grama", x: 15, y: 90, emoji: "🌱", cor: "from-emerald-500 to-green-700", titulo: "Capim (Produtor)", texto: "Faz fotossíntese. Captura energia do SOL e produz glicose. Base de toda a cadeia.", fotoUrl: florestaImg },
      { id: "gafanhoto", x: 30, y: 40, emoji: "🦗", cor: "from-lime-500 to-emerald-700", titulo: "Gafanhoto (1º consumidor)", texto: "HERBÍVORO. Come o capim. Só 10% da energia da grama vira corpo do gafanhoto — o resto vira calor.", fotoUrl: cadeiaImg },
      { id: "sapo", x: 45, y: 80, emoji: "🐸", cor: "from-teal-500 to-cyan-700", titulo: "Sapo (2º consumidor)", texto: "CARNÍVORO. Come o gafanhoto. Outra perda de 90% de energia — só sobra 1% da grama original.", fotoUrl: cadeiaImg },
      { id: "gaviao", x: 75, y: 20, emoji: "🦅", cor: "from-amber-500 to-orange-700", titulo: "Gavião (Predador de topo)", texto: "Come cobra, que come sapo. Predadores de topo são poucos — energia disponível quase acabou.", fotoUrl: cadeiaImg },
    ],
    falaFinal:
      "10% da energia sobe a cada elo. Por isso pirâmide tem base larga e topo estreito.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão sobre a rede da vida.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Qual grupo forma a BASE de toda cadeia alimentar terrestre?", fotoUrl: florestaImg,
        cards: [
          { id: "a", emoji: "🌿", titulo: "Produtores (plantas)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🐆", titulo: "Predadores de topo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🍄", titulo: "Decompositores", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Sem plantas capturando energia do sol, ninguém come.",
        feedbackErro: "Predadores estão no TOPO. Decompositores reciclam. A BASE é sempre produtor." },
      { id: "q2", pergunta: "O que acontece com a ENERGIA em uma cadeia alimentar?", fotoUrl: cadeiaImg,
        cards: [
          { id: "a", emoji: "🔥", titulo: "Diminui a cada elo (perdida como calor)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔄", titulo: "Cicla igual à matéria", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "📈", titulo: "Aumenta a cada elo", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Regra dos 10%: só 10% passa ao próximo nível. Resto vira calor.",
        feedbackErro: "Energia NÃO cicla — flui em UMA direção. Só a matéria cicla." },
      { id: "q3", pergunta: "Qual grupo RECICLA matéria morta devolvendo nutrientes ao solo?", fotoUrl: florestaImg,
        cards: [
          { id: "a", emoji: "🍄", titulo: "Decompositores (fungos e bactérias)", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌿", titulo: "Produtores", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🦆", titulo: "Consumidores", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Sem fungos e bactérias, matéria morta se acumularia sem fim.",
        feedbackErro: "Produtor faz fotossíntese, consumidor come. DECOMPOSITOR recicla." },
    ],
    falaFinal:
      "Você já mapeia o fluxo de energia. Isso é pensar como ecólogo.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Todo ecossistema tem dois componentes: BIÓTICO (seres vivos) e ABIÓTICO (fatores físico-químicos).",
    instrucao: "Toque nos interruptores",
    mapaUrl: florestaImg,
    camadas: [
      { id: "biotico", rotulo: "Biótico (vivo)", emoji: "🌳", cor: "from-emerald-500 to-teal-700", rect: { x: 5, y: 5, w: 90, h: 60 }, descricao: "Plantas, animais, fungos, bactérias. Todos os SERES VIVOS que interagem no ecossistema.", fotoUrl: florestaImg },
      { id: "abiotico", rotulo: "Abiótico (não-vivo)", emoji: "💧", cor: "from-sky-500 to-cyan-700", rect: { x: 5, y: 65, w: 90, h: 30 }, descricao: "Água, luz, temperatura, solo, ar. Fatores FÍSICOS E QUÍMICOS que determinam quem vive ali.", fotoUrl: cicloImg },
    ],
    falaFinal:
      "Vivo depende do não-vivo. Sem água nem sol, nenhuma vida se sustenta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "O CICLO DA ÁGUA — mesmo H₂O há bilhões de anos girando.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene o caminho de uma molécula de água:",
    paradas: [
      { id: "mar", emoji: "🌊", rotulo: "1. Oceano", descricao: "Sol aquece a superfície.", fotoUrl: cicloImg },
      { id: "evapora", emoji: "☁️", rotulo: "2. Evaporação", descricao: "Água vira vapor e sobe.", fotoUrl: cicloImg },
      { id: "nuvem", emoji: "🌫️", rotulo: "3. Condensação", descricao: "Vapor esfria e forma nuvens.", fotoUrl: cicloImg },
      { id: "chuva", emoji: "🌧️", rotulo: "4. Precipitação", descricao: "Chove sobre continentes.", fotoUrl: cicloImg },
      { id: "rio", emoji: "🏞️", rotulo: "5. Escoamento", descricao: "Rios levam a água de volta ao mar.", fotoUrl: cicloImg },
    ],
    ordemCerta: ["mar", "evapora", "nuvem", "chuva", "rio"],
    feedbackAcerto:
      "Exato. Oceano → evaporação → nuvem → chuva → rio → oceano. Ciclo eterno.",
    feedbackErro:
      "Segue a ordem: mar → sobe (evapora) → forma nuvem → chove → escoa de volta.",
    falaFinal:
      "A água do seu copo pode já ter passado por um dinossauro. É a mesma H₂O reciclada.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório de campo em unidade de conservação.",
    tituloLivro: "📓 Relatório · Reserva do Vale — Ano 05",
    subtitulo: "Efeito da reintrodução de onças-pintadas na floresta",
    paragrafos: [
      { id: "p1", texto: "PROBLEMA: até 2018, a Reserva do Vale não tinha PREDADORES DE TOPO. Populações de capivaras e queixadas cresceram sem controle e passaram a devorar todas as mudas de árvores nativas do sub-bosque.", chaves: ["predadores de topo", "sub-bosque"], definicoes: { "predadores de topo": "Animais no fim da cadeia, sem inimigos naturais.", "sub-bosque": "Camada baixa da floresta, entre o chão e as árvores altas." }, fotoUrl: florestaImg },
      { id: "p2", texto: "INTERVENÇÃO: em 2019, quatro onças-pintadas foram reintroduzidas na reserva. Nos três anos seguintes, populações de capivaras caíram 40% e queixadas 30%. Onças não caçam plantas — mas mudam o COMPORTAMENTO das presas, que passam a evitar áreas expostas.", chaves: ["comportamento"], definicoes: { comportamento: "Como um animal age em resposta ao ambiente — não só quanto ele come, mas onde e quando." }, fotoUrl: cadeiaImg },
      { id: "p3", texto: "RESULTADO: em áreas antes devastadas, mudas de ipê e jatobá voltaram a crescer. A floresta se regenera. Prova de que TOPO da cadeia protege a BASE. É a chamada CASCATA TRÓFICA — descrita primeiro em Yellowstone (EUA) com os lobos.", chaves: ["cascata trófica"], definicoes: { "cascata trófica": "Efeito em cadeia: mexer no topo reflete lá embaixo na vegetação." }, fotoUrl: florestaImg },
    ],
    falaFinal:
      "Trazer o predador de topo é RESTAURAR o equilíbrio. Ecologia aplicada à conservação.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio de classificação ecológica.",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 30,
    pecas: [
      { id: "produtor", emoji: "🌿", rotulo: "Produtor" },
      { id: "consumidor", emoji: "🐆", rotulo: "Consumidor" },
      { id: "decompositor", emoji: "🍄", rotulo: "Decompositor" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Cogumelo em tronco caído", emoji: "🍄", cor: "from-amber-500 to-orange-700" }, municipioB: { nome: "Digere madeira morta", emoji: "♻️", cor: "from-yellow-500 to-amber-700" }, contexto: "Cresce sobre árvores derrubadas.", pecaCertaId: "decompositor", fotoUrl: florestaImg, feedbackAcerto: "DECOMPOSITOR. Fungos reciclam madeira morta em nutrientes do solo.", feedbackErro: "Cogumelo NÃO come vivo nem faz fotossíntese. Recicla morto = DECOMPOSITOR." },
      { id: "r2", municipioA: { nome: "Algas do oceano", emoji: "🌿", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Fazem fotossíntese", emoji: "☀️", cor: "from-yellow-500 to-amber-700" }, contexto: "Base da cadeia alimentar marinha.", pecaCertaId: "produtor", fotoUrl: florestaImg, feedbackAcerto: "PRODUTOR. Algas produzem ~50% do O₂ do planeta.", feedbackErro: "Fotossíntese = PRODUTOR. Algas são a base marinha." },
      { id: "r3", municipioA: { nome: "Cobra sucuri", emoji: "🐍", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "Come capivaras", emoji: "🍽️", cor: "from-red-500 to-rose-700" }, contexto: "Vive em áreas alagadas.", pecaCertaId: "consumidor", fotoUrl: cadeiaImg, feedbackAcerto: "CONSUMIDOR. Carnívoro do 2º/3º nível.", feedbackErro: "Come outros animais = CONSUMIDOR." },
      { id: "r4", municipioA: { nome: "Bactérias do solo", emoji: "🦠", cor: "from-rose-500 to-red-700" }, municipioB: { nome: "Devolvem nitrogênio ao solo", emoji: "🌱", cor: "from-emerald-500 to-teal-700" }, contexto: "Trabalham em folhas caídas e restos de animais.", pecaCertaId: "decompositor", fotoUrl: florestaImg, feedbackAcerto: "DECOMPOSITOR. Sem elas, matéria orgânica se acumularia para sempre.", feedbackErro: "Reciclam matéria morta = DECOMPOSITOR — não produtor nem consumidor." },
    ],
    falaFinal:
      "Você já classifica papéis ecológicos rápido. Passo essencial para pensar sistemas.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Como a energia do SOL se DISSIPA subindo pela cadeia alimentar (regra aproximada dos 10%).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: cadeiaImg,
    fatias: [
      { id: "produtor", rotulo: "Produtor", emoji: "🌿", percentual: 90, cor: "#10b981", descricao: "Plantas absorvem energia solar. Base larga da pirâmide — muita biomassa disponível.", exemplos: ["Capim", "Árvores", "Algas"], fotoUrl: florestaImg },
      { id: "consumidor1", rotulo: "Herbívoro", emoji: "🦗", percentual: 9, cor: "#f59e0b", descricao: "Só 10% da energia da planta vira corpo de herbívoro. Resto vira calor.", exemplos: ["Gafanhoto", "Capivara", "Vaca"], fotoUrl: cadeiaImg },
      { id: "consumidor2", rotulo: "Carnívoro / Topo", emoji: "🦅", percentual: 1, cor: "#ef4444", descricao: "Só 1% da energia original chega ao topo. Por isso predadores são SEMPRE raros.", exemplos: ["Onça", "Gavião", "Tubarão"], fotoUrl: cadeiaImg },
    ],
    falaFinal:
      "Pirâmide da energia é INEVITAVELMENTE estreita no topo. Física impõe.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Departamento 4. 3 perguntas para receber sua Certificação de Ecólogo Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: florestaImg,
    perguntas: [
      { id: "q1", pergunta: "Qual afirmação é VERDADEIRA sobre ecossistemas?", fotoUrl: cadeiaImg,
        opcoes: [
          { id: "a", texto: "Matéria cicla, mas energia flui em uma direção", correta: true },
          { id: "b", texto: "Tanto matéria quanto energia ciclam igual" },
        ],
        feedbackAcerto: "Correto. Matéria (água, C, N) cicla. Energia vem do sol e vira calor.",
        feedbackErro: "Energia NÃO cicla — se perde como calor. Só a matéria cicla." },
      { id: "q2", pergunta: "Em uma cadeia alimentar, quem tem MAIS biomassa disponível?", fotoUrl: florestaImg,
        opcoes: [
          { id: "a", texto: "Produtores (base da pirâmide)", correta: true },
          { id: "b", texto: "Predadores de topo (mais fortes)" },
        ],
        feedbackAcerto: "Sim. Base larga, topo estreito — sempre. Regra dos 10%.",
        feedbackErro: "Predadores são SEMPRE raros. PRODUTORES têm biomassa muito maior." },
      { id: "q3", pergunta: "Sem decompositores em um ecossistema, o que aconteceria?", fotoUrl: florestaImg,
        opcoes: [
          { id: "a", texto: "Matéria morta se acumularia e nutrientes não voltariam ao solo", correta: true },
          { id: "b", texto: "Nada mudaria" },
        ],
        feedbackAcerto: "Exato. Sem reciclagem, plantas ficam sem nutrientes e o ecossistema colapsa.",
        feedbackErro: "Muito mudaria. Sem decompositor, nutrientes não voltam ao solo e a base da cadeia morre." },
    ],
    falaFinal:
      "Selo conquistado. Fim do Departamento 4 — Ecologia.",
  },
};
