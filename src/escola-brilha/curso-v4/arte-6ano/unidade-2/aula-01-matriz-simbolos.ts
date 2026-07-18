import type { AulaArteV1 } from "../../types";
import brilhaAurora from "@/assets/arte-6ano/u3-brilha-aurora-simbolos.jpg";
import placaCuneiforme from "@/assets/arte-6ano/u3-placa-cuneiforme.jpg";
import hieroglifos from "@/assets/arte-6ano/u3-hieroglifos-egipcios.jpg";
import escribaSumerio from "@/assets/arte-6ano/u3-escriba-sumerio.jpg";
import boiRealista from "@/assets/arte-6ano/u3-boi-realista.jpg";
import boiIdeograma from "@/assets/arte-6ano/u3-boi-ideograma.jpg";
import velocidadeDiagonais from "@/assets/arte-6ano/u3-velocidade-diagonais.jpg";
import pictogramaConceito from "@/assets/arte-6ano/u3-pictograma-conceito.jpg";
import ideogramaConceito from "@/assets/arte-6ano/u3-ideograma-conceito.jpg";
import estilizacaoRigida from "@/assets/arte-6ano/u3-estilizacao-rigida.jpg";
import designerCodigos from "@/assets/arte-6ano/u3-designer-codigos.jpg";
import internetAbstracao from "@/assets/arte-6ano/u3-internet-abstracao.jpg";
import estudoAbstracao from "@/assets/arte-6ano/u3-estudo-abstracao.jpg";
import musicaAbstracao from "@/assets/arte-6ano/u3-musica-abstracao.jpg";
import decifradorCuneiforme from "@/assets/arte-6ano/u3-decifrador-cuneiforme.jpg";
import codiceGrafismos from "@/assets/arte-6ano/u3-codice-grafismos.jpg";
import esteleteBronze from "@/assets/arte-6ano/u3-estilete-bronze.jpg";

/**
 * Arte · 6º Ano · Unidade 2 · Aula 01 — "A Matriz dos Símbolos"
 * Metanarrativa: 🧩 O Códice dos Impérios Perdidos
 * Fonte: placas cuneiformes sumérias (~3200 a.C.) e hieróglifos egípcios
 */
export const aula01: AulaArteV1 = {
  slug: "aula-01-matriz-simbolos",
  titulo: "A Matriz dos Símbolos: O Nascimento da Escrita",
  iconeTrilha: "𒀭",
  bncc: ["EF69AR01", "EF69AR31", "EF69AR32"],
  duracaoMin: 34,

  cena01_motivacao: {
    tipo: "cenaTematica",
    variante: "explorar",
    aurora:
      "Investigador! A TERCEIRA página do Códice apareceu coberta de marcas estranhas em argila e pedra: cunhas triangulares e desenhos travados. Brilha sussurra: 'Aqui os desenhos começaram a virar PALAVRAS.' Bem-vindo à matriz onde nasceu a escrita — quando pictogramas viraram ideogramas.",
    titulo: "𒀭 A Matriz dos Símbolos",
    instrucao: "Toca em cada pista sobre o nascimento da escrita",
    itens: [
      { emoji: "🏺", rotulo: "Placas cuneiformes sumérias", descricao: "Por volta de 3200 a.C., os sumérios pressionavam um estilete em cunha (formato de prego) sobre argila fresca. Nasce a escrita CUNEIFORME, uma das mais antigas do mundo.", cor: "#78350f", fotoUrl: placaCuneiforme },
      { emoji: "𓂀", rotulo: "Hieróglifos egípcios", descricao: "No Egito, sacerdotes e escribas gravavam desenhos sagrados em templos e papiros. Cada símbolo podia representar um SOM ou uma IDEIA inteira.", cor: "#eab308", fotoUrl: hieroglifos },
      { emoji: "🐂", rotulo: "Desenho realista vira símbolo", descricao: "Um boi desenhado com detalhes vai perdendo curvas até virar um triângulo com dois chifres. A ARTE se transforma em CÓDIGO — mais rápido de gravar, mais fácil de repetir.", cor: "#a16207", fotoUrl: boiIdeograma },
      { emoji: "🖋️", rotulo: "Escriba: o primeiro designer", descricao: "O escriba treinava anos para dominar centenas de símbolos. Ele era, ao mesmo tempo, artista, cientista e programador visual da sua época.", cor: "#dc2626", fotoUrl: escribaSumerio },
    ],
    falaFinal: "Sua missão nesta página: decifrar como o DESENHO virou ESCRITA — e criar seus próprios símbolos.",
  },

  cena02_previsao: {
    tipo: "quizCores",
    aurora: "Calibra seu olhar de escriba antes de gravar a argila!",
    perguntas: [
      {
        pergunta: "Qual é a diferença entre um PICTOGRAMA e um IDEOGRAMA?",
        fotoUrl: pictogramaConceito,
        alternativas: [
          { texto: "Pictograma desenha o OBJETO real; ideograma representa uma IDEIA ou conceito abstrato", correta: true },
          { texto: "Não existe diferença, são a mesma coisa com nomes diferentes", correta: false },
        ],
        feedbackAcerto: "Exato! Pictograma = desenho do sol pra dizer 'sol'. Ideograma = o mesmo desenho usado pra dizer 'dia' ou 'calor' — vira IDEIA.",
        feedbackErro: "Não são a mesma coisa! Pictograma copia a FORMA do objeto. Ideograma usa a forma pra representar uma IDEIA mais abstrata.",
      },
      {
        pergunta: "Por que os símbolos cuneiformes e hieroglíficos foram ficando mais GEOMÉTRICOS e RÍGIDOS com o tempo?",
        fotoUrl: estilizacaoRigida,
        alternativas: [
          { texto: "Porque estilizar tornava os símbolos mais rápidos de gravar e mais fáceis de repetir sempre igual", correta: true },
          { texto: "Porque os escribas antigos não sabiam desenhar bem", correta: false },
        ],
        feedbackAcerto: "Perfeito! Estilização Rígida é uma escolha de DESIGN: menos curvas, mais retas e triângulos = símbolo replicável em segundos.",
        feedbackErro: "Nada de falta de talento! Os escribas eram mestres. A estilização é uma estratégia pra tornar o símbolo RÁPIDO e PADRONIZADO.",
      },
      {
        pergunta: "O que significa dizer que a escrita cuneiforme nasceu de uma 'matriz de símbolos'?",
        fotoUrl: placaCuneiforme,
        alternativas: [
          { texto: "Que um conjunto fixo de marcas (cunhas) podia se combinar para formar muitos significados diferentes", correta: true },
          { texto: "Que só existia UM símbolo usado pra tudo", correta: false },
        ],
        feedbackAcerto: "Isso! Uma MATRIZ é um sistema — poucas peças básicas (cunhas, traços) combinadas geram centenas de palavras.",
        feedbackErro: "O contrário: a força do sistema está em COMBINAR várias marcas básicas, não em usar um símbolo único.",
      },
    ],
  },

  cena03_vocabulario: {
    tipo: "vocabularioCards",
    aurora: "Vocabulário do escriba. Toca em cada verbete!",
    cards: [
      { termo: "Pictograma", definicao: "Desenho que representa diretamente o OBJETO real que ele mostra. Ex: um sol desenhado significa 'sol'.", emoji: "🖼️", cor: "#0ea5e9", fotoUrl: pictogramaConceito },
      { termo: "Ideograma", definicao: "Símbolo que representa uma IDEIA ou conceito abstrato, não só o objeto. Ex: o sol pode significar 'dia' ou 'calor'.", emoji: "💡", cor: "#dc2626", fotoUrl: ideogramaConceito },
      { termo: "Estilização Rígida", definicao: "Processo de simplificar um desenho realista em formas geométricas (triângulos, retas) para gravar mais rápido e repetir sempre igual.", emoji: "◆", cor: "#1e3a8a", fotoUrl: estilizacaoRigida },
      { termo: "Escrita Cuneiforme", definicao: "Sistema sumério (~3200 a.C.) feito com estilete em forma de cunha pressionado em argila fresca.", emoji: "🏺", cor: "#78350f", fotoUrl: placaCuneiforme },
    ],
  },

  cena04_leituraGuiada: {
    tipo: "leituraTintas",
    aurora: "Escuta como o desenho virou escrita há milhares de anos.",
    paragrafos: [
      "Antes da escrita, existiam apenas DESENHOS. Um caçador que queria contar 'matei um boi' desenhava um boi inteiro, com chifres, corpo e patas. Isso é um PICTOGRAMA: a imagem copia o objeto real.",
      "Só que desenhar um boi INTEIRO toda vez era lento. Com o tempo, os escribas sumérios e egípcios foram SIMPLIFICANDO as formas: menos curvas, mais linhas retas. O boi virou um triângulo com dois traços de chifre. Nasceu a ESTILIZAÇÃO RÍGIDA — geometria no lugar de realismo.",
      "Quando esse símbolo simplificado passou a representar não só o animal, mas uma IDEIA (por exemplo, 'riqueza', porque quem tinha bois era rico), ele deixou de ser pictograma e virou IDEOGRAMA. O desenho começou a carregar PENSAMENTO, não só imagem.",
      "Na Suméria (~3200 a.C.), esse sistema evoluiu para a ESCRITA CUNEIFORME: escribas pressionavam um estilete em formato de CUNHA sobre placas de argila fresca. No Egito, os HIERÓGLIFOS faziam algo parecido, mas gravados em pedra e papiro — muitos símbolos podiam representar tanto sons quanto ideias completas.",
      "O escriba era um verdadeiro DESIGNER DE CÓDIGOS: precisava memorizar centenas de símbolos e usar a MATRIZ certa — combinações de marcas básicas — pra registrar leis, contratos, orações e histórias inteiras.",
    ],
    pigmentos: [
      { nome: "Argila fresca", hex: "#78350f", fonte: "Suporte da escrita cuneiforme suméria", emoji: "🏺", fotoUrl: placaCuneiforme },
      { nome: "Estilete de cunha", hex: "#a16207", fonte: "Ferramenta do escriba sumério", emoji: "🖋️", fotoUrl: esteleteBronze },
      { nome: "Pedra e papiro", hex: "#eab308", fonte: "Suporte dos hieróglifos egípcios", emoji: "𓂀", fotoUrl: hieroglifos },
      { nome: "Geometria rígida", hex: "#1e3a8a", fonte: "Estratégia visual da estilização", emoji: "◆", fotoUrl: estilizacaoRigida },
    ],
  },

  cena05_compreensao: {
    tipo: "quizCores",
    aurora: "Verifica se a matriz de símbolos ficou clara!",
    perguntas: [
      {
        pergunta: "Um desenho realista de um BOI, com o tempo, virou um triângulo com dois chifres usado pra escrever a palavra 'gado'. Que processo é esse?",
        fotoUrl: boiRealista,
        alternativas: [
          { texto: "Transição de pictograma para ideograma através da estilização rígida", correta: true },
          { texto: "O escriba simplesmente esqueceu como desenhar o boi", correta: false },
        ],
        feedbackAcerto: "Exato! O boi realista (pictograma) virou símbolo geométrico que carrega uma IDEIA (ideograma) — estilização a serviço da velocidade.",
        feedbackErro: "Não foi esquecimento — foi ESCOLHA de design: simplificar pra ganhar velocidade e repetição.",
      },
      {
        pergunta: "Por que a escrita cuneiforme é considerada uma 'matriz' de símbolos?",
        fotoUrl: placaCuneiforme,
        alternativas: [
          { texto: "Porque poucas marcas básicas (cunhas) se combinavam para gerar muitos significados diferentes", correta: true },
          { texto: "Porque cada placa de argila tinha um símbolo único e exclusivo, sem repetição", correta: false },
        ],
        feedbackAcerto: "Correto! A força da matriz está justamente em COMBINAR peças básicas de formas diferentes.",
        feedbackErro: "O contrário disso: a matriz FUNCIONA porque as mesmas marcas se repetem e se combinam de formas variadas.",
      },
      {
        pergunta: "Um símbolo moderno de 'velocidade' (3 diagonais e uma seta) usa a mesma lógica visual de que técnica antiga?",
        fotoUrl: velocidadeDiagonais,
        alternativas: [
          { texto: "Estilização rígida: formas geométricas simples carregando uma ideia abstrata", correta: true },
          { texto: "Nenhuma — símbolos modernos não têm relação com a escrita antiga", correta: false },
        ],
        feedbackAcerto: "Isso mesmo! A lógica de simplificar em geometria pra comunicar uma ideia rápido atravessou milênios até o design de hoje.",
        feedbackErro: "Na verdade têm TUDO a ver: até hoje usamos estilização geométrica pra comunicar ideias rapidamente, como os antigos escribas.",
      },
    ],
  },

  cena06_personagensLugar: {
    tipo: "pintarAnimais",
    aurora: "Classifica cada símbolo no estágio certo de evolução da escrita.",
    animais: [
      {
        nome: "Boi desenhado com detalhes realistas", emoji: "🐂", fotoUrl: boiRealista,
        corAlvo: { nome: "Pictograma", hex: "#0ea5e9" },
        opcoes: [
          { nome: "Pictograma", hex: "#0ea5e9" },
          { nome: "Ideograma", hex: "#dc2626" },
          { nome: "Estilização Rígida", hex: "#1e3a8a" },
        ],
        falaAcerto: "Isso! Desenho fiel ao objeto real = Pictograma.",
      },
      {
        nome: "Triângulo com chifres usado pra dizer 'riqueza'", emoji: "▲", fotoUrl: boiIdeograma,
        corAlvo: { nome: "Ideograma", hex: "#dc2626" },
        opcoes: [
          { nome: "Ideograma", hex: "#dc2626" },
          { nome: "Pictograma", hex: "#0ea5e9" },
          { nome: "Estilização Rígida", hex: "#1e3a8a" },
        ],
        falaAcerto: "Perfeito! Símbolo carregando uma IDEIA abstrata = Ideograma.",
      },
      {
        nome: "Sequência geométrica de cunhas em placa de argila", emoji: "𒀭", fotoUrl: placaCuneiforme,
        corAlvo: { nome: "Estilização Rígida", hex: "#1e3a8a" },
        opcoes: [
          { nome: "Estilização Rígida", hex: "#1e3a8a" },
          { nome: "Pictograma", hex: "#0ea5e9" },
          { nome: "Ideograma", hex: "#dc2626" },
        ],
        falaAcerto: "Correto! Formas retas e triangulares, sem curvas = Estilização Rígida.",
      },
    ],
  },

  cena07_sequencia: {
    tipo: "sequenciaMistura",
    aurora: "Ordena os 5 passos pra virar um DESIGNER DE CÓDIGOS como os escribas antigos.",
    passos: [
      { id: "p1", texto: "OBSERVO um objeto real e desenho ele com todos os detalhes (pictograma)", emoji: "🐂", ordem: 1, fotoUrl: boiRealista },
      { id: "p2", texto: "SIMPLIFICO o desenho, removendo curvas e deixando só as formas essenciais", emoji: "✂️", ordem: 2, fotoUrl: estilizacaoRigida },
      { id: "p3", texto: "TRANSFORMO em geometria rígida: triângulos, retas e cunhas", emoji: "◆", ordem: 3, fotoUrl: boiIdeograma },
      { id: "p4", texto: "ASSOCIO o símbolo a uma IDEIA abstrata, não só ao objeto (ideograma)", emoji: "💡", ordem: 4, fotoUrl: ideogramaConceito },
      { id: "p5", texto: "TESTO se qualquer pessoa da comunidade entende o novo código sem explicação", emoji: "🧑‍🎨", ordem: 5, fotoUrl: designerCodigos },
    ],
    falaAcerto: "Você acabou de virar um DESIGNER DE CÓDIGOS — transformou observação em símbolo universal!",
  },

  cena08_voceLe: {
    tipo: "diarioPintor",
    aurora: "Agora VOCÊ lê o diário do escriba. Toca nas palavras coloridas.",
    titulo: "Diário do Escriba",
    trechos: [
      { texto: "Sou escriba. Começo sempre desenhando o objeto real, um", palavraDestaque: "pictograma", corDestaque: "#0ea5e9" },
      { texto: "Depois simplifico as curvas até virar", palavraDestaque: "estilização rígida", corDestaque: "#1e3a8a" },
      { texto: "Quando o símbolo passa a carregar uma ideia, ele se torna um", palavraDestaque: "ideograma", corDestaque: "#dc2626" },
      { texto: "Cada cunha que gravo na argila faz parte de uma MATRIZ — poucas marcas, infinitos significados." },
      { texto: "Por isso escrevo com cuidado: cada símbolo que crio pode durar 5 mil anos." },
    ],
  },

  cena09_minijogo: {
    tipo: "cenaTematica",
    variante: "minijogo",
    aurora: "🔺 O Decifrador Cuneiforme! Pressiona as cunhas certas na placa de argila digital antes que ela seque.",
    titulo: "𒀭 O Decifrador Cuneiforme",
    instrucao: "Pressione as cunhas na ordem certa para gravar cada símbolo!",
    tempoSeg: 35,
    itens: [
      { emoji: "🔺", rotulo: "Cunha vertical", cor: "#78350f" },
      { emoji: "◀️", rotulo: "Cunha horizontal", cor: "#a16207" },
      { emoji: "𒀭", rotulo: "Símbolo de divindade", cor: "#eab308" },
      { emoji: "🌾", rotulo: "Pictograma de cevada", cor: "#f59e0b" },
      { emoji: "🐂", rotulo: "Ideograma de boi/riqueza", cor: "#dc2626" },
      { emoji: "🏺", rotulo: "Placa de argila completa", cor: "#7c2d12" },
    ],
    falaFinal: "Placa gravada com sucesso! Você decifrou o código antes que a argila secasse.",
  },

  cena10_revisao: {
    tipo: "cenaTematica",
    variante: "revisar",
    aurora: "Fecha a terceira página do Códice. Toca em cada verbete!",
    titulo: "📓 Caderno da Matriz dos Símbolos",
    itens: [
      { emoji: "🖼️", rotulo: "Pictograma", descricao: "Desenho que copia o objeto real. Base de toda escrita antiga.", cor: "#0ea5e9", fotoUrl: pictogramaConceito },
      { emoji: "💡", rotulo: "Ideograma", descricao: "Símbolo que representa uma IDEIA abstrata, não só o objeto desenhado.", cor: "#dc2626", fotoUrl: ideogramaConceito },
      { emoji: "◆", rotulo: "Estilização Rígida", descricao: "Simplificação geométrica que torna o símbolo rápido de gravar e repetir.", cor: "#1e3a8a", fotoUrl: estilizacaoRigida },
      { emoji: "🏺", rotulo: "Escrita Cuneiforme", descricao: "Sistema sumério (~3200 a.C.) gravado em argila com estilete em cunha.", cor: "#78350f", fotoUrl: placaCuneiforme },
      { emoji: "𓂀", rotulo: "Hieróglifos Egípcios", descricao: "Sistema egípcio gravado em pedra e papiro, misturando sons e ideias.", cor: "#eab308", fotoUrl: hieroglifos },
      { emoji: "🧑‍🎨", rotulo: "Escriba = Designer de Códigos", descricao: "Profissional que memorizava e combinava a matriz de símbolos pra registrar tudo.", cor: "#7c3aed", fotoUrl: designerCodigos },
      { emoji: "🥉", rotulo: "Cunha de Bronze Antigo", descricao: "Sua recompensa: desbloqueia o Estilete de Escriba e o Códice dos Grafismos Primitivos.", cor: "#a16207", fotoUrl: esteleteBronze },
      { emoji: "📖", rotulo: "Códice dos Grafismos Primitivos", descricao: "Página restaurada com toda a evolução do desenho até a escrita.", cor: "#7c2d12", fotoUrl: codiceGrafismos },
    ],
    falaFinal: "Terceira página do Códice dos Impérios Perdidos RESTAURADA — Códice dos Grafismos Primitivos desbloqueado!",
  },

  cena11_avaliacao: {
    tipo: "avaliacaoFinal",
    aurora: "Desafio do Detetive, designer de códigos!",
    quiz: {
      pergunta: "Um pictograma de sol, ao longo dos séculos, foi ficando mais geométrico e passou a representar também as ideias de 'dia' e 'calor'. Qual sequência de conceitos explica essa transformação?",
      alternativas: [
        { texto: "Pictograma (desenho do objeto) → Estilização Rígida (simplificação geométrica) → Ideograma (símbolo carregando uma ideia abstrata)", correta: true },
        { texto: "Ideograma → Pictograma → nenhuma estilização, pois os símbolos antigos nunca mudavam de forma", correta: false },
      ],
      feedback: "Perfeito! O caminho é: desenho realista do objeto (pictograma) → simplificação em formas geométricas (estilização rígida) → símbolo que passa a carregar uma ideia abstrata (ideograma). Foi exatamente assim que a escrita cuneiforme e os hieróglifos nasceram, entre 3200 a.C. e os primeiros séculos do Egito Antigo.",
    },
    missaoFamilia:
      "𓂀 Missão Escriba: Crie um 'Diário Secreto em Hieróglifos' com a sua família! Escolha 5 regras ou hábitos da casa (ex: 'tirar os sapatos', 'hora de dormir', 'regar as plantas') e desenhe um SÍMBOLO PRÓPRIO para cada um, usando a lógica dos escribas: primeiro desenhe o objeto real (pictograma), depois simplifique em formas geométricas (estilização rígida) até virar um ideograma que representa a REGRA. Monte um pequeno dicionário visual com os 5 símbolos e mostre pra família decifrar sem ajuda!",
    recompensaTitulo: "📖 Página 3 restaurada — O Códice dos Grafismos Primitivos.",
    recompensaItem: "🥉 Cunha de Bronze Antigo e Estilete de Escriba (desbloqueia o dicionário visual de símbolos)",
  },

  recompensa: { xp: 110, moedas: 55, medalha: "Cunha de Bronze Antigo" },
};
