import type { AulaGeoV1 } from "../../types";
import { url as digestorioImg } from "@/assets/ciencias-7ano/u3-a1/sistema-digestorio.jpg.asset.json";
import { url as circulatorioImg } from "@/assets/ciencias-7ano/u3-a1/sistema-circulatorio.jpg.asset.json";
import { url as respiratorioImg } from "@/assets/ciencias-7ano/u3-a1/sistema-respiratorio.jpg.asset.json";

/**
 * Ciências · 7º Ano · Unidade 3 · Aula 01
 * "Máquina Humana" — Departamento de Corpo Humano.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-maquina-humana",
  titulo: "Máquina Humana",
  iconeTrilha: "🫀",
  recompensa: { xp: 140, moedas: 55, medalha: "Fisiologista Júnior" },
  bncc: ["EF07CI09"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Painel anatômico do Centro. Toque para iniciar.",
    mapaUrl: circulatorioImg,
    imagemDestaqueUrl: digestorioImg,
    aurora:
      "Departamento 3: Corpo Humano. Sua missão é entender como três sistemas integrados — digestório, circulatório e respiratório — transformam pão em ENERGIA e oxigênio em VIDA.",
    falaFinal:
      "Nada no corpo trabalha sozinho. É sempre uma orquestra de sistemas conversando.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Você come um pedaço de pão. Em qual ordem os sistemas do corpo trabalham para essa comida virar ENERGIA nas suas células?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: digestorioImg,
    opcoes: [
      { id: "digestivo", titulo: "Só o digestivo", subtitulo: "estômago faz tudo", emoji: "🍽️", cor: "from-slate-500 to-slate-700", fotoUrl: digestorioImg },
      { id: "integrado", titulo: "Digestivo + circulatório + respiratório", subtitulo: "trabalham juntos", emoji: "🔗", cor: "from-emerald-500 to-teal-700", fotoUrl: circulatorioImg },
      { id: "nervoso", titulo: "Só o sistema nervoso", subtitulo: "cérebro comanda tudo", emoji: "🧠", cor: "from-rose-500 to-red-700", fotoUrl: respiratorioImg },
    ],
    respostaCerta: "integrado",
    feedbackAcerto:
      "Correto. Digestivo QUEBRA o pão em glicose. Circulatório TRANSPORTA glicose e oxigênio. Respiratório traz o O₂. Sem os três, a célula não produz energia.",
    feedbackErro:
      "O digestivo sozinho só quebra a comida. Sem O₂ vindo dos pulmões e sem sangue transportando, a glicose não vira ATP na mitocôndria.",
    falaFinal:
      "Comer é um trabalho coletivo de sistemas. Isso é integração fisiológica.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Cinco conceitos-chave do funcionamento humano.",
    instrucao: "Vocabulário de fisiologia",
    cadernos: [
      { id: "digestao", capa: "DIGESTÃO", emoji: "🍽️", cor: "from-amber-500 to-orange-700", conteudo: "Processo de QUEBRAR o alimento em moléculas pequenas (glicose, aminoácidos) que a célula pode usar. Começa na boca, termina no intestino.", exemplo: "Ex.: pão → amido → glicose no intestino delgado.", fotoUrl: digestorioImg },
      { id: "absorcao", capa: "ABSORÇÃO", emoji: "🌿", cor: "from-emerald-500 to-teal-700", conteudo: "Passagem dos nutrientes do intestino delgado para o SANGUE, através das vilosidades intestinais.", exemplo: "Ex.: glicose atravessa a parede do intestino e entra na corrente sanguínea.", fotoUrl: digestorioImg },
      { id: "circulacao", capa: "CIRCULAÇÃO", emoji: "❤️", cor: "from-red-500 to-rose-700", conteudo: "O CORAÇÃO bombeia sangue pelas artérias e veias, entregando O₂ e nutrientes a cada célula do corpo.", exemplo: "Ex.: ~5 litros de sangue circulam pelo corpo a cada minuto.", fotoUrl: circulatorioImg },
      { id: "respiracao", capa: "RESPIRAÇÃO", emoji: "🫁", cor: "from-sky-500 to-cyan-700", conteudo: "Entrada de O₂ e saída de CO₂ nos ALVÉOLOS pulmonares. O sangue pega O₂ e devolve CO₂.", exemplo: "Ex.: ~15 respirações por minuto em repouso.", fotoUrl: respiratorioImg },
      { id: "atp", capa: "ATP", emoji: "⚡", cor: "from-yellow-500 to-amber-700", conteudo: "Molécula de energia que a MITOCÔNDRIA produz a partir de glicose + O₂. É a 'moeda energética' de todas as células.", exemplo: "Ex.: sem ATP, seu músculo não contrai — nem seu coração bate.", fotoUrl: circulatorioImg, partes: [
        { titulo: "Entrada", texto: "Glicose (da digestão) + O₂ (da respiração) chegam à célula pelo sangue." },
        { titulo: "Reação", texto: "Na mitocôndria, glicose + O₂ liberam energia guardada nas ligações químicas." },
        { titulo: "Saída", texto: "Energia vira ATP. Como resíduos: CO₂ (expirado) e H₂O." },
        { titulo: "Uso", texto: "ATP move músculos, transmite sinais nervosos, sintetiza proteínas — VIDA." },
      ] },
    ],
    falaFinal:
      "Digestão, absorção, circulação, respiração, ATP. O ciclo completo da energia no corpo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "O sistema circulatório. Toque em cada estrutura para investigar.",
    instrucao: "Toque nas estruturas",
    mapaUrl: circulatorioImg,
    pontos: [
      { id: "coracao", x: 50, y: 30, emoji: "❤️", cor: "from-red-500 to-rose-700", titulo: "Coração", texto: "Bomba muscular do tamanho do seu punho. 4 câmaras. Bate ~100 mil vezes por dia — sem parar, a vida toda.", fotoUrl: circulatorioImg },
      { id: "arterias", x: 25, y: 55, emoji: "🔴", cor: "from-red-500 to-rose-700", titulo: "Artérias", texto: "Vasos que LEVAM sangue OXIGENADO do coração para o corpo. Parede grossa e elástica para aguentar a pressão.", fotoUrl: circulatorioImg },
      { id: "veias", x: 75, y: 55, emoji: "🔵", cor: "from-sky-500 to-blue-700", titulo: "Veias", texto: "Vasos que TRAZEM sangue com CO₂ de volta ao coração. Parede mais fina, com válvulas.", fotoUrl: circulatorioImg },
      { id: "capilares", x: 50, y: 85, emoji: "🕸️", cor: "from-amber-500 to-orange-700", titulo: "Capilares", texto: "Vasos MICROSCÓPICOS que fazem a troca real: entregam O₂ e nutrientes a cada célula, recolhem CO₂ e resíduos.", fotoUrl: circulatorioImg },
    ],
    falaFinal:
      "Coração bombeia, artérias distribuem, veias recolhem, capilares entregam. O circuito completo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão sobre a máquina humana.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Em qual órgão os NUTRIENTES são absorvidos para o sangue?", fotoUrl: digestorioImg,
        cards: [
          { id: "a", emoji: "🌿", titulo: "Intestino delgado", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🍽️", titulo: "Estômago", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "👄", titulo: "Boca", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Vilosidades do intestino delgado fazem a absorção.",
        feedbackErro: "Estômago QUEBRA proteína. Boca inicia digestão. ABSORÇÃO é no intestino delgado." },
      { id: "q2", pergunta: "Nos ALVÉOLOS pulmonares acontece a troca de...", fotoUrl: respiratorioImg,
        cards: [
          { id: "a", emoji: "💨", titulo: "O₂ entra no sangue e CO₂ sai", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🍔", titulo: "Nutrientes entram no sangue", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "💧", titulo: "Água é filtrada", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Alvéolos = troca gasosa. O₂ entra, CO₂ sai.",
        feedbackErro: "Nutrientes = intestino. Filtro de água = rim. Alvéolos = O₂ e CO₂." },
      { id: "q3", pergunta: "A ENERGIA (ATP) é produzida principalmente em qual organela?", fotoUrl: circulatorioImg,
        cards: [
          { id: "a", emoji: "🔋", titulo: "Mitocôndria", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🧬", titulo: "Núcleo", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🛡️", titulo: "Membrana", cor: "from-slate-500 to-slate-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Mitocôndria = respiração celular = ATP.",
        feedbackErro: "Núcleo guarda DNA. Membrana protege. MITOCÔNDRIA produz ATP." },
    ],
    falaFinal:
      "Você já entende a linha de produção do corpo. Sistemas integrados = vida.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "O tronco humano abriga dois grandes territórios: o TÓRAX (coração + pulmões) e o ABDOME (estômago + intestinos + fígado).",
    instrucao: "Toque nos interruptores",
    mapaUrl: digestorioImg,
    camadas: [
      { id: "torax", rotulo: "Tórax", emoji: "🫁", cor: "from-sky-500 to-cyan-700", rect: { x: 15, y: 5, w: 70, h: 40 }, descricao: "Pulmões e coração. Bombeia sangue e faz troca gasosa. Protegido pelas costelas.", fotoUrl: respiratorioImg },
      { id: "abdome", rotulo: "Abdome", emoji: "🍽️", cor: "from-amber-500 to-orange-700", rect: { x: 15, y: 45, w: 70, h: 50 }, descricao: "Estômago, intestinos, fígado, pâncreas. Digere e absorve alimentos. Sem proteção óssea completa.", fotoUrl: digestorioImg },
    ],
    falaFinal:
      "Tórax = distribuição. Abdome = processamento. Dois andares da fábrica humana.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "O CAMINHO DA COMIDA — da mordida à energia celular.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene o percurso de um pedaço de pão:",
    paradas: [
      { id: "boca", emoji: "👄", rotulo: "1. Boca", descricao: "Mastigação + saliva quebra amido.", fotoUrl: digestorioImg },
      { id: "estomago", emoji: "🍽️", rotulo: "2. Estômago", descricao: "Ácido + enzimas digerem proteínas.", fotoUrl: digestorioImg },
      { id: "intestino", emoji: "🌿", rotulo: "3. Intestino delgado", descricao: "Absorção da glicose para o sangue.", fotoUrl: digestorioImg },
      { id: "sangue", emoji: "❤️", rotulo: "4. Corrente sanguínea", descricao: "Glicose viaja até cada célula.", fotoUrl: circulatorioImg },
      { id: "celula", emoji: "⚡", rotulo: "5. Mitocôndria", descricao: "Glicose + O₂ vira ATP (energia).", fotoUrl: circulatorioImg },
    ],
    ordemCerta: ["boca", "estomago", "intestino", "sangue", "celula"],
    feedbackAcerto:
      "Exato. Boca → estômago → intestino → sangue → mitocôndria. Cinco etapas até virar energia.",
    feedbackErro:
      "Do início ao FIM: boca → estômago → intestino delgado → sangue → mitocôndria.",
    falaFinal:
      "Todo pedaço de pão vira, no fim, ATP na mitocôndria. Ciência em cada mordida.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório de um exame simples.",
    tituloLivro: "📓 Relatório · Exame de Esforço Físico",
    subtitulo: "Como corpo responde ao correr por 3 minutos",
    paragrafos: [
      { id: "p1", texto: "REPOUSO: em pé, sentado ou deitado, o corpo consome pouca energia. Frequência cardíaca ~70 bpm, respiração ~15 por minuto. Músculos exigem pouco O₂ e pouca glicose.", chaves: ["bpm"], definicoes: { bpm: "Batimentos por minuto — quantas vezes o coração bate em 60 segundos." }, fotoUrl: circulatorioImg },
      { id: "p2", texto: "ESFORÇO (correr): músculos precisam de MUITO mais ATP. Para isso, exigem MAIS glicose e MAIS O₂. Resultado: coração acelera (~150 bpm) e respiração aumenta (~40 por minuto). Sangue circula mais rápido para entregar combustível.", chaves: ["ATP", "combustível"], definicoes: { ATP: "Molécula de energia produzida pela mitocôndria.", combustível: "Aqui: glicose e oxigênio que alimentam a produção de ATP." }, fotoUrl: circulatorioImg },
      { id: "p3", texto: "RECUPERAÇÃO: mesmo depois de parar, coração e pulmões continuam acelerados por alguns minutos. É a chamada 'dívida de oxigênio' — o corpo repõe reservas gastas durante o esforço. Depois volta ao repouso.", chaves: ["dívida de oxigênio"], definicoes: { "dívida de oxigênio": "O₂ extra que o corpo precisa após esforço para restaurar reservas de ATP." }, fotoUrl: respiratorioImg },
    ],
    falaFinal:
      "Correr = pedido de energia. Coração e pulmões respondem juntos. Fisiologia em ação.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio de sistemas. Qual sistema cuida disso?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 30,
    pecas: [
      { id: "digestivo", emoji: "🍽️", rotulo: "Digestivo" },
      { id: "circulatorio", emoji: "❤️", rotulo: "Circulatório" },
      { id: "respiratorio", emoji: "🫁", rotulo: "Respiratório" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Alvéolos", emoji: "💨", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Troca gasosa O₂/CO₂", emoji: "🔄", cor: "from-emerald-500 to-teal-700" }, contexto: "Estrutura microscópica dentro dos pulmões.", pecaCertaId: "respiratorio", fotoUrl: respiratorioImg, feedbackAcerto: "RESPIRATÓRIO. Alvéolos são a unidade funcional do pulmão.", feedbackErro: "Alvéolo fica dentro do pulmão = sistema RESPIRATÓRIO." },
      { id: "r2", municipioA: { nome: "Bomba de 4 câmaras", emoji: "❤️", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Coração", emoji: "💓", cor: "from-rose-500 to-pink-700" }, contexto: "Órgão muscular no meio do tórax.", pecaCertaId: "circulatorio", fotoUrl: circulatorioImg, feedbackAcerto: "CIRCULATÓRIO. Coração é o motor deste sistema.", feedbackErro: "Coração faz o sangue circular = sistema CIRCULATÓRIO." },
      { id: "r3", municipioA: { nome: "Vilosidades intestinais", emoji: "🌿", cor: "from-emerald-500 to-teal-700" }, municipioB: { nome: "Absorção de nutrientes", emoji: "🍞", cor: "from-amber-500 to-orange-700" }, contexto: "Dobrinhas microscópicas do intestino delgado.", pecaCertaId: "digestivo", fotoUrl: digestorioImg, feedbackAcerto: "DIGESTIVO. Vilosidades aumentam a área de absorção.", feedbackErro: "Absorção de nutrientes = etapa da digestão = sistema DIGESTIVO." },
      { id: "r4", municipioA: { nome: "Hemácias", emoji: "🔴", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Transportam O₂ com hemoglobina", emoji: "🩸", cor: "from-rose-500 to-pink-700" }, contexto: "Células do sangue com cor vermelha.", pecaCertaId: "circulatorio", fotoUrl: circulatorioImg, feedbackAcerto: "CIRCULATÓRIO. Hemácias são células do sangue.", feedbackErro: "Célula do SANGUE = sistema CIRCULATÓRIO." },
    ],
    falaFinal:
      "Você já mapeia sistemas em tempo real. Isso é raciocínio fisiológico.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Distribuição aproximada da massa de água nos compartimentos do corpo humano adulto (~60% de água total).",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: circulatorioImg,
    fatias: [
      { id: "intra", rotulo: "Dentro das células", emoji: "🔬", percentual: 66, cor: "#0ea5e9", descricao: "Cerca de 2/3 da água do corpo fica DENTRO das células — onde as reações químicas acontecem.", exemplos: ["Citoplasma", "Mitocôndrias", "Núcleos"], fotoUrl: circulatorioImg },
      { id: "extra", rotulo: "Fora das células", emoji: "🩸", percentual: 34, cor: "#ef4444", descricao: "O restante fica no sangue e no líquido entre células — é o meio de TRANSPORTE.", exemplos: ["Plasma sanguíneo", "Líquido intersticial", "Linfa"], fotoUrl: circulatorioImg },
    ],
    falaFinal:
      "Sem água, nada funciona. Cada célula é praticamente uma bolha aquosa cheia de vida.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão do Departamento 3. 3 perguntas para receber sua Certificação de Fisiologista Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: circulatorioImg,
    selo: { nome: "Certificação · Fisiologista Júnior", subtitulo: "Departamento 3 · Máquina Humana", emoji: "🫀", cor: "from-red-500 to-rose-700" },
    perguntas: [
      { id: "q1", pergunta: "A produção de ATP requer glicose (do intestino) e O₂ (dos pulmões). Onde ocorre?", fotoUrl: circulatorioImg,
        opcoes: [
          { id: "a", texto: "Nas mitocôndrias das células", correta: true },
          { id: "b", texto: "No estômago apenas" },
        ],
        feedbackAcerto: "Correto. Mitocôndria = respiração celular = ATP.",
        feedbackErro: "Estômago apenas digere. ATP é produzido nas MITOCÔNDRIAS." },
      { id: "q2", pergunta: "Qual vaso leva sangue OXIGENADO do coração para o corpo?", fotoUrl: circulatorioImg,
        opcoes: [
          { id: "a", texto: "Artéria (parede grossa, alta pressão)", correta: true },
          { id: "b", texto: "Veia (traz sangue de volta ao coração)" },
        ],
        feedbackAcerto: "Sim. Artéria SAI do coração levando O₂. Veia VOLTA com CO₂.",
        feedbackErro: "Veia TRAZ sangue com CO₂. ARTÉRIA leva sangue oxigenado do coração." },
      { id: "q3", pergunta: "Ao correr, por que respiração e batimento cardíaco AUMENTAM juntos?", fotoUrl: respiratorioImg,
        opcoes: [
          { id: "a", texto: "Músculos precisam de mais O₂ e glicose para produzir ATP", correta: true },
          { id: "b", texto: "É apenas coincidência do sistema nervoso" },
        ],
        feedbackAcerto: "Exato. Mais esforço = mais ATP = mais O₂ + mais transporte.",
        feedbackErro: "Não é coincidência. Músculos EXIGEM mais combustível — coração e pulmões respondem." },
    ],
    falaFinal:
      "Selo conquistado. Fim do Departamento 3 — Corpo Humano.",
  },
};
