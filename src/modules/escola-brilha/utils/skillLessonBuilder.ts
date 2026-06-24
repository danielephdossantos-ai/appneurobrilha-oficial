import type { ActivityLessonC, BNCCArea } from "../types/activity-lesson-c";
import { cleanVisibleLessonText, friendlyLessonTitle } from "./bnccDisplayText";

type ColorToken = ActivityLessonC["color"];

interface SkillLessonSource {
  id: string;
  codigo_bncc?: string | null;
  serie?: string | null;
  disciplina?: string | null;
  titulo?: string | null;
  descricao?: string | null;
  xp?: number | null;
}

interface BuildLessonInput {
  source: SkillLessonSource;
  area: BNCCArea;
  areaLabel: string;
  color: ColorToken;
}

interface LessonPlanTemplate {
  title: string;
  missionQuestion: string;
  objectives: string[];
  context: string;
  exploration: string;
  highlights: string[];
  keyPoints: Array<{ title: string; text: string }>;
  exampleTitle: string;
  scenario: string;
  analysis: string[];
  conclusion: string;
  challengeQuestion: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const GENERIC_PAYLOAD_MARKERS = [
  "missão bncc",
  "missao bncc",
  "entender a habilidade",
  "vamos explorar esta habilidade",
  "leia a ideia principal com calma",
  "aplicar a habilidade no desafio",
  "imagine uma situação em que você precisa usar esta habilidade",
  "imagine uma situacao em que voce precisa usar esta habilidade",
  "qual alternativa combina melhor com a habilidade",
  "aplicar a ideia principal da aula em uma situação real",
  "aplicar a ideia principal da aula em uma situacao real",
  "ignorar o tema estudado na aula",
];

function key(text: string | null | undefined) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function rawText(raw: unknown) {
  try {
    return JSON.stringify(raw || {});
  } catch {
    return "";
  }
}

export function isLowQualitySkillLesson(raw: unknown) {
  const lesson = raw as {
    mission_question?: string | null;
    screens?: {
      missao?: { intro?: string | null; objectives?: string[] | null; context_text?: string | null };
      exploracao?: { instruction?: string | null; texto?: string | null };
      desafio?: { question?: string | null };
      exemplo_aplicado?: { scenario?: string | null };
    };
  };
  const directText = [
    lesson?.mission_question,
    lesson?.screens?.missao?.intro,
    ...(lesson?.screens?.missao?.objectives || []),
    lesson?.screens?.missao?.context_text,
    lesson?.screens?.exploracao?.instruction,
    lesson?.screens?.exploracao?.texto,
    lesson?.screens?.exemplo_aplicado?.scenario,
    lesson?.screens?.desafio?.question,
  ].join(" ");
  const text = key(`${directText} ${rawText(raw)}`);
  if (!text || text === "{}") return true;
  return GENERIC_PAYLOAD_MARKERS.some((marker) => text.includes(marker));
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

function cleanSkill(source: SkillLessonSource) {
  const subject = source.disciplina || "Geral";
  const skill = cleanVisibleLessonText(
    source.titulo || source.descricao || source.codigo_bncc,
    friendlyLessonTitle({ title: source.codigo_bncc || source.titulo, subject }),
  );
  return { subject, skill, k: key(`${subject} ${skill}`) };
}

function buildTemplate(source: SkillLessonSource): LessonPlanTemplate {
  const { subject, skill, k } = cleanSkill(source);

  if (includesAny(k, ["fluxograma", "fluxo grama"])) {
    return {
      title: "Fluxograma para resolver problemas",
      missionQuestion: "Como transformar a resolução de problemas em um fluxograma?",
      objectives: [
        "Entender que problemas parecidos seguem uma sequência de passos",
        "Organizar ações e decisões com setas",
        "Testar o fluxograma em outro problema",
      ],
      context:
        "Um fluxograma é um mapa visual do raciocínio: ele mostra por onde começar, qual decisão tomar e quando chegar à resposta.",
      exploration:
        "Para resolver um grupo de problemas, primeiro procure o que todos têm em comum. Depois transforme a estratégia em passos: ler os dados, escolher a operação, calcular e conferir.",
      highlights: [
        "Use retângulos para ações, como calcular ou comparar.",
        "Use perguntas de sim ou não quando o caminho puder mudar.",
        "Setas mostram a ordem em que o raciocínio acontece.",
      ],
      keyPoints: [
        { title: "Começo claro", text: "Todo fluxograma começa com a leitura do problema e a identificação dos dados importantes." },
        { title: "Passos em ordem", text: "Cada bloco precisa responder: o que faço agora?" },
        { title: "Teste final", text: "Se o mesmo fluxo resolve outro problema parecido, o procedimento está funcionando." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Problema: calcular o total de compras quando cada item tem preço e quantidade.",
      analysis: [
        "Início: leia preço e quantidade de cada item.",
        "Ação: multiplique preço por quantidade para cada item.",
        "Decisão: há mais itens? Se sim, repita; se não, some tudo e confira.",
      ],
      conclusion: "O fluxograma ajuda porque guarda o método, não apenas uma resposta isolada.",
      challengeQuestion: "Em um fluxograma para calcular compras, qual passo deve vir antes de somar o total?",
      options: [
        "Calcular o valor de cada item usando preço e quantidade.",
        "Escrever a resposta final sem conferir os dados.",
        "Apagar as setas para deixar o caminho livre.",
        "Trocar todos os números por letras sem necessidade.",
      ],
      correctIndex: 0,
      explanation: "Antes de somar, é preciso calcular o valor de cada item; depois a soma final faz sentido.",
    };
  }

  if (includesAny(k, ["porcent", "acrescimo", "acrescimos", "decrescimo", "decrescimos", "educacao financeira"])) {
    return {
      title: "Porcentagem no dinheiro",
      missionQuestion: "Como usar porcentagem para entender descontos e aumentos?",
      objectives: ["Ler a porcentagem como parte de 100", "Calcular desconto ou aumento", "Comparar o preço antes e depois"],
      context: "Porcentagem aparece em promoções, juros, notas, gráficos e decisões de compra.",
      exploration: "Por cento significa “a cada 100”. Então 10% de 80 reais é 8 reais, porque 80 dividido por 10 dá 8.",
      highlights: ["10% é a décima parte.", "50% é metade.", "No desconto, subtraia; no aumento, some."],
      keyPoints: [
        { title: "Base", text: "Descubra de qual valor a porcentagem será calculada." },
        { title: "Cálculo", text: "Transforme a porcentagem em uma parte do valor." },
        { title: "Sentido", text: "Confira se o resultado aumentou ou diminuiu como o enunciado pediu." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Um fone custa R$ 80 e recebeu 25% de desconto.",
      analysis: ["25% é um quarto do valor.", "Um quarto de 80 é 20.", "Preço final: 80 − 20 = 60 reais."],
      conclusion: "A porcentagem ajuda a comparar valores de forma justa.",
      challengeQuestion: "Um produto de R$ 50 teve 10% de desconto. Qual é o novo preço?",
      options: ["R$ 45", "R$ 40", "R$ 55", "R$ 5"],
      correctIndex: 0,
      explanation: "10% de 50 é 5. Com desconto: 50 − 5 = 45.",
    };
  }

  if (includesAny(k, ["equacao", "equacoes", "incognita", "ax + b", "igualdade"])) {
    return {
      title: "Equações de 1º grau",
      missionQuestion: "Como descobrir o valor desconhecido em uma equação?",
      objectives: ["Identificar a incógnita", "Usar operações inversas", "Conferir a solução"],
      context: "Uma equação funciona como uma balança: os dois lados precisam continuar com o mesmo valor.",
      exploration: "Para resolver, deixe a letra sozinha. O que está somando passa subtraindo; o que está multiplicando passa dividindo.",
      highlights: ["A letra representa o valor desconhecido.", "Faça a mesma operação dos dois lados.", "Substitua o resultado para conferir."],
      keyPoints: [
        { title: "Incógnita", text: "É o número que queremos descobrir." },
        { title: "Equilíbrio", text: "Os dois lados da igualdade devem permanecer equivalentes." },
        { title: "Verificação", text: "A resposta precisa tornar a sentença verdadeira." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Resolva: 2x + 4 = 12",
      analysis: ["Subtraia 4 dos dois lados: 2x = 8.", "Divida os dois lados por 2: x = 4.", "Confira: 2 × 4 + 4 = 12."],
      conclusion: "Resolver equações é desfazer operações até encontrar o valor da letra.",
      challengeQuestion: "Qual é o valor de x em x + 7 = 15?",
      options: ["8", "7", "15", "22"],
      correctIndex: 0,
      explanation: "Para deixar x sozinho, fazemos 15 − 7. Então x = 8.",
    };
  }

  if (includesAny(k, ["fracao", "fracoes", "racional", "racionais", "razao", "divisao"])) {
    return {
      title: "Frações e números racionais",
      missionQuestion: "Como comparar partes de um todo usando frações?",
      objectives: ["Entender numerador e denominador", "Comparar frações", "Usar fração em problemas"],
      context: "Frações aparecem quando dividimos uma pizza, uma medida, uma chance ou uma quantidade em partes iguais.",
      exploration: "O denominador mostra em quantas partes iguais o todo foi dividido. O numerador mostra quantas dessas partes estamos usando.",
      highlights: ["Partes precisam ser iguais.", "Denominador é o total de partes.", "Numerador é a quantidade escolhida."],
      keyPoints: [
        { title: "Mesmo todo", text: "Só compare frações pensando no mesmo inteiro." },
        { title: "Tamanho das partes", text: "Quanto maior o denominador, menor cada parte fica." },
        { title: "Representação", text: "A mesma quantidade pode aparecer como fração, decimal ou razão." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Ana comeu 2 de 8 pedaços de uma torta.",
      analysis: ["O todo tem 8 partes iguais.", "Ana pegou 2 partes: 2/8.", "Simplificando, 2/8 é igual a 1/4 da torta."],
      conclusion: "Frações ajudam a enxergar quantidade e proporção ao mesmo tempo.",
      challengeQuestion: "Qual fração representa metade de uma figura dividida em 8 partes iguais?",
      options: ["4/8", "1/8", "8/4", "2/8"],
      correctIndex: 0,
      explanation: "Metade de 8 partes é 4 partes. Por isso a fração é 4/8.",
    };
  }

  if (includesAny(k, ["inteiro", "inteiros", "reta numerica", "ordenar numeros", "comparar e ordenar"])) {
    return {
      title: "Números inteiros na reta",
      missionQuestion: "Como comparar números positivos e negativos?",
      objectives: ["Localizar números na reta", "Comparar valores", "Usar inteiros em situações reais"],
      context: "Números inteiros aparecem em temperatura, saldo bancário, altitude e pontuações.",
      exploration: "Na reta numérica, quanto mais à direita, maior é o número. Números negativos ficam à esquerda do zero.",
      highlights: ["Zero é o ponto de referência.", "À direita aumenta; à esquerda diminui.", "−2 é maior que −5 porque está mais perto do zero."],
      keyPoints: [
        { title: "Posição", text: "Compare olhando a ordem na reta numérica." },
        { title: "Contexto", text: "Negativo pode representar dívida, frio ou perda de pontos." },
        { title: "Operações", text: "Ao somar ou subtrair, pense em deslocamentos na reta." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "De manhã fez −3 °C e à tarde fez 2 °C.",
      analysis: ["−3 fica à esquerda do zero.", "2 fica à direita do zero.", "2 °C é maior que −3 °C."],
      conclusion: "A reta numérica transforma comparação em localização visual.",
      challengeQuestion: "Qual número é maior?",
      options: ["−1", "−6", "−10", "−3"],
      correctIndex: 0,
      explanation: "Entre negativos, o maior é o que está mais perto do zero: −1.",
    };
  }

  if (includesAny(k, ["silaba", "silabas", "fonema", "letra", "som", "rima"])) {
    return {
      title: "Sons e sílabas das palavras",
      missionQuestion: "Como perceber os sons que formam as palavras?",
      objectives: ["Ouvir os sons com atenção", "Separar palavras em partes", "Comparar sons parecidos"],
      context: "Perceber sons e sílabas ajuda a ler, escrever e entender novas palavras.",
      exploration: "Uma palavra pode ser dividida em pedacinhos sonoros. Ao bater palmas para cada parte, fica mais fácil perceber sua estrutura.",
      highlights: ["Sílabas são partes faladas da palavra.", "Rimas têm sons finais parecidos.", "Letras representam sons na escrita."],
      keyPoints: [
        { title: "Ouvir primeiro", text: "Antes de escrever, escute como a palavra soa." },
        { title: "Separar", text: "Fale devagar e marque cada parte sonora." },
        { title: "Comparar", text: "Procure o som inicial, o som final ou a sílaba repetida." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "A palavra CAVALO pode ser falada em partes.",
      analysis: ["Fale devagar: CA-VA-LO.", "Conte as partes: são 3 sílabas.", "Compare com CASA: as duas começam com CA."],
      conclusion: "Quando ouvimos as partes, a leitura fica mais segura.",
      challengeQuestion: "Qual palavra começa com o mesmo som de CASA?",
      options: ["CAVALO", "BOLA", "SAPO", "MESA"],
      correctIndex: 0,
      explanation: "CASA e CAVALO começam com o som CA.",
    };
  }

  if (includesAny(k, ["coesao", "pronome", "pronominal", "sinonimo", "substituicao lexical", "referencial"])) {
    return {
      title: "Coesão: pronomes e substituições",
      missionQuestion: "Como evitar repetição e deixar o texto bem ligado?",
      objectives: ["Identificar palavras repetidas", "Trocar por pronomes ou sinônimos", "Manter o sentido do texto"],
      context: "Coesão é o que faz as ideias de um texto ficarem conectadas, sem confundir o leitor.",
      exploration: "Quando um nome aparece muitas vezes, podemos retomá-lo com um pronome ou com uma palavra equivalente. Isso deixa a leitura mais natural.",
      highlights: ["Pronome retoma uma pessoa, objeto ou ideia.", "Sinônimo troca a palavra sem mudar o sentido.", "A troca precisa deixar claro de quem estamos falando."],
      keyPoints: [
        { title: "Referente", text: "É a palavra ou ideia que será retomada depois." },
        { title: "Pronome", text: "Ele, ela, seu, sua, esse e essa podem retomar termos anteriores." },
        { title: "Clareza", text: "Se houver dúvida sobre o referente, a coesão falhou." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Texto: Mariana pegou o livro. Mariana colocou o livro na mochila.",
      analysis: ["Perceba a repetição de Mariana e livro.", "Troque por pronomes: Mariana pegou o livro. Ela o colocou na mochila.", "O texto ficou mais leve e manteve o sentido."],
      conclusion: "Coesão é escolher palavras que ligam as frases sem apagar a informação.",
      challengeQuestion: "Na frase “Pedro chegou cedo. Ele abriu a sala.”, a palavra “Ele” retoma quem?",
      options: ["Pedro", "sala", "cedo", "chegou"],
      correctIndex: 0,
      explanation: "O pronome “Ele” retoma Pedro, evitando repetição.",
    };
  }

  if (includesAny(k, ["texto", "leitura", "genero", "generos", "noticia", "conto", "poema", "argument", "opiniao"])) {
    return {
      title: "Leitura e produção de textos",
      missionQuestion: "Como entender a intenção e a organização de um texto?",
      objectives: ["Identificar o objetivo do texto", "Reconhecer pistas importantes", "Responder com base no texto"],
      context: "Todo texto foi escrito para cumprir uma função: informar, narrar, convencer, orientar ou emocionar.",
      exploration: "Para compreender bem, observe título, palavras repetidas, quem fala, para quem fala e qual problema o texto resolve.",
      highlights: ["O título antecipa o assunto.", "Cada gênero tem uma forma de organizar ideias.", "A resposta precisa se apoiar em pistas do texto."],
      keyPoints: [
        { title: "Finalidade", text: "Pergunte: para que esse texto foi escrito?" },
        { title: "Estrutura", text: "Observe começo, desenvolvimento e fechamento." },
        { title: "Evidência", text: "Use trechos do texto para justificar sua resposta." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Uma notícia apresenta um fato ocorrido na escola.",
      analysis: ["Leia o título para descobrir o tema.", "Procure quem participou, onde e quando aconteceu.", "Separe fato de opinião."],
      conclusion: "Ler bem é investigar as pistas que o próprio texto oferece.",
      challengeQuestion: "Qual pergunta ajuda a descobrir a finalidade de um texto?",
      options: ["Para que esse texto foi escrito?", "Quantas letras tem a primeira palavra?", "Qual palavra é mais bonita?", "Posso pular o título?"],
      correctIndex: 0,
      explanation: "A finalidade mostra se o texto informa, narra, convence, orienta ou diverte.",
    };
  }

  if (includesAny(k, ["mapa", "cartesiano", "coordenada", "simetria", "translacao", "rotacao", "reflexao"])) {
    return {
      title: subject.includes("Matem") ? "Plano cartesiano e simetria" : "Mapas e localização",
      missionQuestion: "Como usar posições para localizar e transformar figuras?",
      objectives: ["Ler pontos de referência", "Identificar posições", "Descrever deslocamentos"],
      context: "Localização aparece em mapas, jogos, plantas de casas, gráficos e geometria.",
      exploration: "Para localizar algo, use referências fixas. No plano cartesiano, primeiro leia a posição horizontal e depois a vertical.",
      highlights: ["Referências evitam confusão.", "Coordenadas indicam posição.", "Transformações mudam a figura seguindo uma regra."],
      keyPoints: [
        { title: "Eixos", text: "Eles funcionam como guias para localizar pontos." },
        { title: "Ordem", text: "Leia as coordenadas sempre na ordem combinada." },
        { title: "Regra", text: "Toda transformação precisa seguir o mesmo padrão." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Um ponto está em (3, 2) no plano cartesiano.",
      analysis: ["Ande 3 unidades no eixo horizontal.", "Depois suba 2 unidades no eixo vertical.", "Marque o ponto onde os caminhos se encontram."],
      conclusion: "Coordenadas transformam localização em instrução precisa.",
      challengeQuestion: "No ponto (4, 1), qual número indica o deslocamento horizontal?",
      options: ["4", "1", "5", "0"],
      correctIndex: 0,
      explanation: "Na escrita (x, y), o primeiro número indica a posição horizontal.",
    };
  }

  if (includesAny(k, ["grafico", "tabela", "media", "probabilidade", "estatistica", "pesquisa", "dados"])) {
    return {
      title: "Dados, tabelas e gráficos",
      missionQuestion: "Como ler dados para tomar uma decisão?",
      objectives: ["Identificar informações em tabelas", "Comparar quantidades", "Tirar conclusões com base nos dados"],
      context: "Dados ajudam a responder perguntas usando evidências, não só opinião.",
      exploration: "Leia primeiro o título do gráfico ou tabela. Depois observe categorias, números e a unidade usada.",
      highlights: ["Título mostra o assunto.", "Escala mostra de quanto em quanto os valores aumentam.", "Conclusão precisa combinar com os números."],
      keyPoints: [
        { title: "Pergunta", text: "Descubra o que os dados querem responder." },
        { title: "Comparação", text: "Veja maior, menor, diferença e total." },
        { title: "Conclusão", text: "Explique usando números do gráfico ou tabela." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Uma turma votou no lanche preferido: fruta 8 votos, sanduíche 12 votos, bolo 5 votos.",
      analysis: ["Compare os votos de cada opção.", "Sanduíche tem 12, que é o maior valor.", "A diferença entre sanduíche e fruta é 4 votos."],
      conclusion: "Ler dados é comparar informações para responder com segurança.",
      challengeQuestion: "Se uma opção recebeu o maior número de votos, o que ela representa?",
      options: ["A preferência mais escolhida", "A opção proibida", "A menor quantidade", "Um dado sem importância"],
      correctIndex: 0,
      explanation: "O maior número de votos indica a opção mais escolhida no levantamento.",
    };
  }

  if (includesAny(k, ["seres vivos", "ecossistema", "cadeia alimentar", "ambiente", "energia", "materia", "mistura", "terra", "lua", "sol", "corpo", "saude"])) {
    return {
      title: "Investigação em Ciências",
      missionQuestion: "Como explicar um fenômeno usando observação e evidências?",
      objectives: ["Observar o fenômeno", "Levantar uma explicação", "Conferir com evidências"],
      context: "Em Ciências, aprender é investigar: observar, perguntar, testar e explicar com base em evidências.",
      exploration: `Nesta aula, vamos estudar: ${skill}. A ideia é ligar o conceito a uma situação que você consegue observar no mundo real.`,
      highlights: ["Observe antes de concluir.", "Use evidências para justificar.", "Compare causa e consequência."],
      keyPoints: [
        { title: "Fenômeno", text: "É o fato ou processo que queremos entender." },
        { title: "Evidência", text: "É a pista concreta que sustenta a explicação." },
        { title: "Conclusão", text: "Deve combinar com o que foi observado." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Uma planta ficou dias sem luz e começou a perder força.",
      analysis: ["Observe a mudança na planta.", "Relacione luz com produção de energia pela planta.", "Conclua que a luz participa do processo de sobrevivência vegetal."],
      conclusion: "A explicação científica precisa ligar observação e conhecimento.",
      challengeQuestion: "Qual atitude é mais científica ao tentar explicar um fenômeno?",
      options: ["Observar evidências antes de concluir", "Chutar sem olhar", "Ignorar as mudanças", "Copiar uma resposta aleatória"],
      correctIndex: 0,
      explanation: "A investigação científica começa pela observação e usa evidências para explicar.",
    };
  }

  if (includesAny(k, ["paisagem", "territorio", "regiao", "lugar", "cidade", "campo", "tempo historico", "fonte historica", "cultura", "sociedade"])) {
    return {
      title: subject.includes("Hist") ? "Fontes e tempo histórico" : "Espaço geográfico na prática",
      missionQuestion: "Como analisar mudanças no tempo e no espaço?",
      objectives: ["Observar características", "Comparar mudanças", "Explicar causas e consequências"],
      context: "História e Geografia ajudam a entender como pessoas, lugares e sociedades se transformam.",
      exploration: `O foco da aula é: ${skill}. Para aprender, vamos comparar situações e procurar marcas de mudança, permanência e relação entre pessoas e lugares.`,
      highlights: ["Observe detalhes do lugar ou da fonte.", "Compare antes e depois.", "Explique usando causas e consequências."],
      keyPoints: [
        { title: "Contexto", text: "Nenhum fato acontece isolado: sempre há tempo, lugar e pessoas envolvidas." },
        { title: "Comparação", text: "Comparar ajuda a perceber mudanças e permanências." },
        { title: "Explicação", text: "Uma boa resposta mostra por que algo aconteceu." },
      ],
      exampleTitle: "Exemplo guiado",
      scenario: "Uma rua que antes tinha casas passou a ter prédios e comércios.",
      analysis: ["Observe o que mudou na paisagem.", "Relacione a mudança ao crescimento da cidade.", "Pense nas consequências para moradores e circulação."],
      conclusion: "Analisar espaço e tempo é entender relações, não decorar frases.",
      challengeQuestion: "Ao comparar duas imagens de uma cidade em épocas diferentes, o que devemos observar?",
      options: ["Mudanças e permanências na paisagem", "A cor mais bonita", "Só o tamanho da foto", "A primeira palavra da legenda"],
      correctIndex: 0,
      explanation: "Comparar mudanças e permanências ajuda a entender transformações históricas e geográficas.",
    };
  }

  return {
    title: friendlyLessonTitle({ title: skill, subject }),
    missionQuestion: `Como aplicar esta ideia de ${subject} em uma situação real?`,
    objectives: ["Entender o conceito principal", "Ver um exemplo resolvido", "Praticar com uma pergunta clara"],
    context: `A aula trabalha a habilidade: ${skill}. O objetivo é entender o que fazer, quando usar e como justificar a resposta.`,
    exploration: `Vamos transformar a habilidade em passos de estudo: primeiro entender a ideia, depois observar um exemplo e, por fim, aplicar em uma situação parecida.`,
    highlights: ["Leia o enunciado com atenção.", "Procure a ação principal pedida pela atividade.", "Use o exemplo como modelo para resolver."],
    keyPoints: [
      { title: "Ideia central", text: skill },
      { title: "Estratégia", text: "Separe o problema em partes pequenas e resolva uma de cada vez." },
      { title: "Justificativa", text: "Explique a resposta usando pistas do conteúdo estudado." },
    ],
    exampleTitle: "Exemplo guiado",
    scenario: `Situação de estudo em ${subject}: escolher a melhor estratégia para resolver uma tarefa ligada ao tema da aula.`,
    analysis: ["Identifique o que a pergunta pede.", "Escolha uma estratégia ligada ao conteúdo.", "Confira se a resposta realmente resolve a situação."],
    conclusion: "Uma boa resposta mostra raciocínio, não apenas marca uma alternativa.",
    challengeQuestion: "Qual atitude mostra que você entendeu a aula?",
    options: ["Usar a estratégia estudada para resolver uma situação parecida", "Escolher qualquer alternativa", "Ignorar o exemplo", "Responder sem ler o enunciado"],
    correctIndex: 0,
    explanation: "Entender é conseguir aplicar a ideia em uma nova situação com sentido.",
  };
}

function option(letter: "A" | "B" | "C" | "D", text: string, isCorrect: boolean) {
  return { letter, text, isCorrect };
}

export function buildSkillLessonC({ source, area, areaLabel, color }: BuildLessonInput): ActivityLessonC {
  const subject = source.disciplina || "Geral";
  const grade = source.serie || "Ensino Fundamental";
  const template = buildTemplate(source);
  const letters: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];

  return {
    id: source.id,
    title: template.title,
    mission_question: template.missionQuestion,
    subject,
    area,
    area_label: areaLabel,
    grade,
    grade_range: grade,
    bncc_code: source.codigo_bncc || "",
    bncc_description: cleanVisibleLessonText(source.descricao || source.titulo, template.context),
    xp: source.xp ?? 150,
    color,
    screens: {
      missao: {
        intro: "Nesta aula você vai aprender de verdade:",
        objectives: template.objectives,
        context_emoji: "✨",
        context_text: template.context,
      },
      exploracao: {
        instruction: "Primeiro, entenda a ideia:",
        texto: template.exploration,
        pontos_destaque: template.highlights.map((text, index) => ({ emoji: ["💡", "🔎", "✅"][index] || "✨", text })),
        mascot_tip: "Leia a explicação, acompanhe o exemplo e só depois responda o desafio.",
      },
      pontos_chave: {
        intro: "Guarde estes passos:",
        points: template.keyPoints.map((point, index) => ({ icon: ["📌", "🧠", "🎯"][index] || "✨", ...point })),
      },
      exemplo_aplicado: {
        title: template.exampleTitle,
        scenario: template.scenario,
        scenario_emoji: "🌟",
        analysis: template.analysis,
        conclusion: template.conclusion,
      },
      desafio: {
        question: template.challengeQuestion,
        options: template.options.slice(0, 4).map((text, index) => option(letters[index], text, index === template.correctIndex)),
        explanation: template.explanation,
      },
    },
  };
}