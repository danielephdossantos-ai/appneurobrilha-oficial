import type { AulaGeoV1 } from "../../types";
import { url as laboratorioImg } from "@/assets/ciencias-7ano/u5-a1/laboratorio-quimica.jpg.asset.json";
import { url as moleculasImg } from "@/assets/ciencias-7ano/u5-a1/moleculas-atomos.jpg.asset.json";
import { url as transformacoesImg } from "@/assets/ciencias-7ano/u5-a1/transformacoes-materia.jpg.asset.json";

/**
 * Ciências · 7º Ano · Unidade 5 · Aula 02
 * "Equilíbrio Térmico" — Departamento de Matéria e Transformações.
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-equilibrio-termico",
  titulo: "Equilíbrio Térmico",
  iconeTrilha: "🌡️",
  recompensa: { xp: 140, moedas: 55, medalha: "Termodinâmico Júnior" },
  bncc: ["EF07CI04"],
  duracaoMin: 40,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Bancada com termômetro e recipientes. Toque para iniciar.",
    mapaUrl: laboratorioImg,
    imagemDestaqueUrl: transformacoesImg,
    aurora:
      "Departamento 5: Matéria. Nova missão: entender o EQUILÍBRIO TERMODINÂMICO — por que corpos quentes esfriam e frios esquentam até 'empatarem', e como isso mantém a vida e move máquinas.",
    falaFinal:
      "Calor sempre flui do corpo mais quente para o mais frio, nunca o contrário — até as temperaturas se igualarem.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Você tira uma lata de refrigerante da geladeira (4°C) e deixa na mesa (25°C). Depois de 1 hora, qual é a temperatura da lata?",
    pergunta: "Formule sua HIPÓTESE:",
    fotoUrl: transformacoesImg,
    opcoes: [
      { id: "4graus", titulo: "Continua 4°C", subtitulo: "o frio se mantém sozinho", emoji: "🧊", cor: "from-sky-500 to-cyan-700", fotoUrl: transformacoesImg },
      { id: "25graus", titulo: "Chega a ~25°C", subtitulo: "se equilibra com o ambiente", emoji: "🌡️", cor: "from-emerald-500 to-teal-700", fotoUrl: laboratorioImg },
      { id: "0graus", titulo: "Cai para 0°C", subtitulo: "o frio se intensifica", emoji: "❄️", cor: "from-rose-500 to-red-700", fotoUrl: laboratorioImg },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "25graus",
    feedbackAcerto:
      "Correto. Calor migra do ambiente (mais quente) para a lata (mais fria) até as temperaturas se igualarem. Isso é o EQUILÍBRIO TÉRMICO.",
    feedbackErro:
      "Sem uma geladeira ligada, nada mantém algo frio sozinho. O calor do ambiente flui para a lata até as temperaturas se igualarem, em torno de 25°C.",
    falaFinal:
      "Todo sistema isolado tende ao equilíbrio térmico. É uma das leis mais universais da física.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco conceitos-chave da termodinâmica.",
    instrucao: "Vocabulário térmico",
    cadernos: [
      { id: "calor", capa: "CALOR", emoji: "🔥", cor: "from-red-500 to-rose-700", conteudo: "Energia térmica em TRÂNSITO entre corpos com temperaturas diferentes. Sempre flui do mais quente para o mais frio.", exemplo: "Ex.: calor da chama passa para a água da panela.", fotoUrl: laboratorioImg },
      { id: "temperatura", capa: "TEMPERATURA", emoji: "🌡️", cor: "from-amber-500 to-orange-700", conteudo: "Medida do grau de AGITAÇÃO das partículas de um corpo. Não é a mesma coisa que calor — é o 'placar' da energia térmica.", exemplo: "Ex.: 37°C do corpo humano; 100°C da água em ebulição.", fotoUrl: transformacoesImg },
      { id: "equilibrio", capa: "EQUILÍBRIO TÉRMICO", emoji: "⚖️", cor: "from-sky-500 to-cyan-700", conteudo: "Estado em que dois corpos em contato atingem a MESMA temperatura e o fluxo de calor entre eles PARA.", exemplo: "Ex.: café e xícara ficam à mesma temperatura depois de um tempo.", fotoUrl: laboratorioImg },
      { id: "homeostase", capa: "HOMEOSTASE TÉRMICA", emoji: "🧍", cor: "from-emerald-500 to-teal-700", conteudo: "Capacidade dos seres vivos de manterem a temperatura interna estável mesmo com variação externa. Essencial para as reações químicas da vida funcionarem.", exemplo: "Ex.: humanos suam para perder calor; tremem para gerar calor.", fotoUrl: transformacoesImg },
      { id: "maquinaTermica", capa: "MÁQUINA TÉRMICA", emoji: "⚙️", cor: "from-indigo-500 to-purple-700", conteudo: "Dispositivo que transforma diferença de temperatura (calor) em TRABALHO (movimento). Nenhuma converte 100% do calor em movimento — parte sempre se perde.", exemplo: "Ex.: motor a combustão, geladeira, usina termelétrica.", fotoUrl: laboratorioImg, partes: [
        { titulo: "Fonte quente", texto: "Fornece energia térmica ao sistema — combustível queimando, por exemplo." },
        { titulo: "Trabalho", texto: "Parte da energia térmica é convertida em movimento útil." },
        { titulo: "Fonte fria", texto: "Parte do calor é sempre descartada — nenhuma máquina é 100% eficiente." },
        { titulo: "Segunda lei", texto: "É impossível converter todo o calor em trabalho útil — sempre há perda." },
      ] },
    ],
    falaFinal:
      "Calor, temperatura, equilíbrio, homeostase, máquina térmica. Vocabulário da energia em trânsito.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Corpo humano mantendo a temperatura. Toque em cada mecanismo.",
    instrucao: "Toque nos pontos",
    mapaUrl: transformacoesImg,
    pontos: [
      { id: "suor", x: 30, y: 30, emoji: "💧", cor: "from-sky-500 to-cyan-700", titulo: "Suor (perda de calor)", texto: "Quando está calor, o corpo sua. A água evapora na pele e RETIRA calor do corpo — é assim que você se refresca.", fotoUrl: transformacoesImg },
      { id: "tremor", x: 65, y: 35, emoji: "🥶", cor: "from-indigo-500 to-purple-700", titulo: "Tremor (produção de calor)", texto: "Quando está frio, os músculos se contraem repetidamente (tremor), gerando calor extra para manter os 37°C internos.", fotoUrl: transformacoesImg },
      { id: "vasos", x: 45, y: 65, emoji: "🩸", cor: "from-red-500 to-rose-700", titulo: "Vasos sanguíneos", texto: "Se dilatam (pele fica vermelha, libera calor) no calor, ou se contraem (pele fica pálida, retém calor) no frio.", fotoUrl: transformacoesImg },
      { id: "range", x: 20, y: 75, emoji: "🌡️", cor: "from-emerald-500 to-teal-700", titulo: "Faixa de segurança", texto: "Corpo humano funciona bem entre ~36°C e 37,5°C. Fora dessa faixa, as reações químicas da vida (enzimas) começam a falhar.", fotoUrl: laboratorioImg },
    ],
    falaFinal:
      "Manter a temperatura corporal é uma batalha constante contra o equilíbrio térmico — e essencial para a vida.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de compreensão sobre equilíbrio térmico.",
    instrucao: "Toque no card correto",
    perguntas: [
      { id: "q1", pergunta: "Calor flui sempre...", fotoUrl: laboratorioImg,
        cards: [
          { id: "a", emoji: "🔥", titulo: "Do corpo mais quente para o mais frio", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "❄️", titulo: "Do corpo mais frio para o mais quente", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🟰", titulo: "Em qualquer direção aleatória", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. Isso é uma lei universal da física — calor nunca flui espontaneamente do frio para o quente.",
        feedbackErro: "O calor NUNCA flui espontaneamente do frio para o quente. Sempre do mais quente para o mais frio." },
      { id: "q2", pergunta: "Quando dois corpos atingem a mesma temperatura, dizemos que estão em...", fotoUrl: transformacoesImg,
        cards: [
          { id: "a", emoji: "⚖️", titulo: "Equilíbrio térmico", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔥", titulo: "Combustão", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧊", titulo: "Congelamento", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Sim. Equilíbrio térmico = mesma temperatura = fluxo de calor cessa.",
        feedbackErro: "Combustão é reação química; congelamento é mudança de estado. O nome certo aqui é EQUILÍBRIO TÉRMICO." },
      { id: "q3", pergunta: "Por que nenhuma máquina térmica converte 100% do calor em trabalho útil?", fotoUrl: laboratorioImg,
        cards: [
          { id: "a", emoji: "⚙️", titulo: "Sempre parte do calor se perde para a fonte fria", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🔧", titulo: "Porque as máquinas são mal construídas", cor: "from-red-500 to-rose-700" },
          { id: "c", emoji: "🧪", titulo: "Não existe essa limitação", cor: "from-slate-500 to-slate-700" },
          { id: "d", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ], correta: "a",
        feedbackAcerto: "Correto. É uma lei da física (2ª lei da termodinâmica), não um problema de engenharia que se resolve com uma máquina melhor.",
        feedbackErro: "Não é falta de qualidade da máquina. É uma LEI FÍSICA: parte do calor sempre vai para a fonte fria." },
    ],
    falaFinal:
      "Você já entende por que corpos se equilibram termicamente e por que máquinas nunca são 100% eficientes.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Uma máquina térmica tem duas zonas essenciais: a FONTE QUENTE (fornece energia) e a FONTE FRIA (recebe o calor descartado).",
    instrucao: "Toque nos interruptores",
    mapaUrl: laboratorioImg,
    camadas: [
      { id: "quente", rotulo: "Fonte Quente", emoji: "🔥", cor: "from-red-500 to-rose-700", rect: { x: 5, y: 5, w: 45, h: 90 }, descricao: "Onde o combustível é queimado ou a energia é fornecida. Alta temperatura — origem do calor que será parcialmente convertido em trabalho.", fotoUrl: laboratorioImg },
      { id: "fria", rotulo: "Fonte Fria", emoji: "❄️", cor: "from-sky-500 to-cyan-700", rect: { x: 50, y: 5, w: 45, h: 90 }, descricao: "Recebe o calor que NÃO foi convertido em trabalho — descartado como perda. Em um carro, é o radiador e o escapamento.", fotoUrl: transformacoesImg },
    ],
    falaFinal:
      "Toda máquina térmica precisa das duas fontes. Sem diferença de temperatura entre elas, não há trabalho possível.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "O CAMINHO do calor até o equilíbrio — ordene a sequência.",
    instrucao: "Toque na ORDEM correta",
    pergunta: "Ordene o processo de equilíbrio térmico entre um café quente e o ar frio da sala:",
    paradas: [
      { id: "diferenca", emoji: "🌡️", rotulo: "1. Diferença de temperatura", descricao: "Café a 80°C, sala a 20°C.", fotoUrl: laboratorioImg },
      { id: "fluxo", emoji: "🔥", rotulo: "2. Calor flui do café para o ar", descricao: "Energia térmica migra do quente ao frio.", fotoUrl: transformacoesImg },
      { id: "queda", emoji: "📉", rotulo: "3. Temperatura do café cai", descricao: "Café perde energia continuamente.", fotoUrl: transformacoesImg },
      { id: "equilibrio", emoji: "⚖️", rotulo: "4. Equilíbrio térmico", descricao: "Café e sala atingem temperatura igual; o fluxo cessa.", fotoUrl: laboratorioImg },
    ],
    ordemCerta: ["diferenca", "fluxo", "queda", "equilibrio"],
    feedbackAcerto:
      "Exato. Sem diferença de temperatura não há fluxo de calor — e o fluxo sempre cessa quando as temperaturas se igualam.",
    feedbackErro:
      "A ordem correta: primeiro há diferença de temperatura, depois o calor flui, a temperatura do café cai e por fim chega o equilíbrio.",
    falaFinal:
      "Todo café frio na mesa é uma prova visível da segunda lei da termodinâmica em ação.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Relatório sobre uma usina termelétrica.",
    tituloLivro: "📓 Relatório · Usina Termelétrica Municipal",
    subtitulo: "Como o calor se transforma em eletricidade",
    paragrafos: [
      { id: "p1", texto: "FUNCIONAMENTO: a usina queima combustível (gás natural ou carvão) em uma caldeira, gerando calor intenso. Esse calor transforma água em VAPOR sob altíssima pressão.", chaves: ["vapor"], definicoes: { vapor: "Água no estado gasoso, formada quando recebe calor suficiente." }, fotoUrl: laboratorioImg },
      { id: "p2", texto: "CONVERSÃO: o vapor sob pressão empurra as pás de uma TURBINA, fazendo-a girar. A turbina está ligada a um gerador que converte o movimento (energia mecânica) em ELETRICIDADE. Depois de passar pela turbina, o vapor perde pressão e é resfriado em torres de refrigeração — voltando a ser água líquida.", chaves: ["turbina"], definicoes: { turbina: "Conjunto de pás que giram com a passagem de um fluido, convertendo energia térmica em mecânica." }, fotoUrl: transformacoesImg },
      { id: "p3", texto: "EFICIÊNCIA: apenas 35% a 45% da energia do combustível se transforma em eletricidade útil. O restante é liberado como calor residual para o ambiente (fonte fria) — água aquecida, vapor de escape. É a segunda lei da termodinâmica em escala industrial: nenhuma máquina térmica converte todo o calor em trabalho.", chaves: ["segunda lei da termodinâmica"], definicoes: { "segunda lei da termodinâmica": "Lei física que afirma que é impossível converter 100% do calor em trabalho útil." }, fotoUrl: laboratorioImg },
    ],
    falaFinal:
      "Da chama à tomada da sua casa — cada etapa perde um pouco de energia como calor. Física cobra seu preço.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Desafio: para onde vai o calor em cada situação?",
    instrucao: "⏱️ Toque para começar",
    duracaoSegundos: 30,
    pecas: [
      { id: "quenteFrio", emoji: "➡️", rotulo: "Quente → Frio" },
      { id: "equilibrio", emoji: "⚖️", rotulo: "Já em equilíbrio" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Gelo em copo de suco", emoji: "🧊", cor: "from-sky-500 to-cyan-700" }, municipioB: { nome: "Gelo derrete, suco esfria", emoji: "🥤", cor: "from-cyan-500 to-blue-700" }, contexto: "Suco a 25°C recebe gelo a 0°C.", pecaCertaId: "quenteFrio", fotoUrl: transformacoesImg, feedbackAcerto: "QUENTE → FRIO. O suco (mais quente) cede calor ao gelo (mais frio) até se equilibrarem.", feedbackErro: "O suco está mais quente que o gelo. O calor sempre sai do mais quente — nesse caso, do suco para o gelo." },
      { id: "r2", municipioA: { nome: "Dois copos de água à mesma temperatura", emoji: "💧", cor: "from-slate-500 to-slate-700" }, municipioB: { nome: "Nenhuma troca visível de calor", emoji: "🟰", cor: "from-emerald-500 to-teal-700" }, contexto: "Ambos a 20°C, colocados em contato.", pecaCertaId: "equilibrio", fotoUrl: laboratorioImg, feedbackAcerto: "JÁ EM EQUILÍBRIO. Sem diferença de temperatura, não há fluxo de calor.", feedbackErro: "Sem diferença de temperatura entre os dois, não há para onde o calor fluir — já estão em EQUILÍBRIO." },
      { id: "r3", municipioA: { nome: "Ferro em brasa mergulhado na água", emoji: "🔥", cor: "from-red-500 to-rose-700" }, municipioB: { nome: "Água esquenta, ferro esfria rápido", emoji: "💨", cor: "from-orange-500 to-amber-700" }, contexto: "Ferro a 800°C, água a 20°C.", pecaCertaId: "quenteFrio", fotoUrl: laboratorioImg, feedbackAcerto: "QUENTE → FRIO. O ferro cede uma enorme quantidade de calor à água até se equilibrarem em uma temperatura intermediária.", feedbackErro: "O ferro está muito mais quente. O calor sai dele para a água — sempre do quente para o frio." },
      { id: "r4", municipioA: { nome: "Sala com ar-condicionado ligado há horas", emoji: "❄️", cor: "from-cyan-500 to-blue-700" }, municipioB: { nome: "Termômetro estabilizado a 22°C", emoji: "🌡️", cor: "from-emerald-500 to-teal-700" }, contexto: "Temperatura da sala parou de mudar.", pecaCertaId: "equilibrio", fotoUrl: laboratorioImg, feedbackAcerto: "JÁ EM EQUILÍBRIO. O ar-condicionado compensa o calor que entra, mantendo a temperatura estável.", feedbackErro: "Quando a temperatura para de mudar, o sistema alcançou EQUILÍBRIO (dinâmico, mantido pelo ar-condicionado)." },
    ],
    falaFinal:
      "Você já prevê a direção do calor em qualquer situação. Base da física térmica.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Para onde vai a energia do combustível em um motor de carro comum — dado aproximado.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: laboratorioImg,
    fatias: [
      { id: "trabalho", rotulo: "Trabalho útil (movimento)", emoji: "⚙️", percentual: 30, cor: "#10b981", descricao: "Apenas cerca de 30% da energia da gasolina realmente move o carro para frente.", exemplos: ["Rodas girando", "Aceleração"], fotoUrl: laboratorioImg },
      { id: "perdido", rotulo: "Calor perdido (fonte fria)", emoji: "🔥", percentual: 70, cor: "#ef4444", descricao: "70% se perde como calor — no radiador, no escapamento, no atrito. É a 2ª lei da termodinâmica cobrando seu preço.", exemplos: ["Radiador quente", "Escapamento", "Atrito no motor"], fotoUrl: transformacoesImg },
    ],
    falaFinal:
      "A maior parte da energia de um motor vira calor perdido, não movimento. Eficiência é um desafio constante da engenharia.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última missão sobre equilíbrio térmico. 3 perguntas para receber sua Certificação de Termodinâmico Júnior.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: laboratorioImg,
    selo: { nome: "Certificação · Termodinâmico Júnior", subtitulo: "Departamento 5 · Equilíbrio Térmico", emoji: "🌡️", cor: "from-amber-500 to-orange-700" },
    perguntas: [
      { id: "q1", pergunta: "O calor flui espontaneamente...", fotoUrl: laboratorioImg,
        opcoes: [
          { id: "a", texto: "Do corpo mais quente para o mais frio", correta: true },
          { id: "b", texto: "Sempre do menor para o maior corpo" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. Direção é dada pela temperatura, não pelo tamanho do corpo.",
        feedbackErro: "Tamanho não define a direção do calor — TEMPERATURA sim. Sempre do mais quente ao mais frio." },
      { id: "q2", pergunta: "Manter a temperatura corporal estável é essencial porque...", fotoUrl: transformacoesImg,
        opcoes: [
          { id: "a", texto: "As reações químicas da vida (enzimas) só funcionam bem numa faixa estreita de temperatura", correta: true },
          { id: "b", texto: "É só uma questão de conforto, sem efeito biológico real" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Sim. Fora da faixa segura, enzimas perdem função e o organismo entra em risco.",
        feedbackErro: "Não é só conforto — é sobrevivência. Enzimas e reações vitais dependem de temperatura estável." },
      { id: "q3", pergunta: "Por que nenhuma máquina térmica é 100% eficiente?", fotoUrl: laboratorioImg,
        opcoes: [
          { id: "a", texto: "Parte do calor sempre precisa ser descartada para a fonte fria (2ª lei da termodinâmica)", correta: true },
          { id: "b", texto: "Porque a tecnologia atual ainda não é boa o suficiente" },
          { id: "c", texto: "Preciso comparar outras evidências" },
          { id: "d", texto: "Preciso comparar outras evidências" },
        ],
        feedbackAcerto: "Correto. É uma limitação da própria física, não da tecnologia disponível.",
        feedbackErro: "Não é limitação tecnológica — é uma LEI FÍSICA universal (segunda lei da termodinâmica)." },
    ],
    falaFinal:
      "Selo conquistado. O equilíbrio térmico sustenta a vida e limita toda máquina que já foi inventada.",
  },
};
