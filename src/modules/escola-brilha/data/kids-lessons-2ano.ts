import type { KidsLesson, KidsScene } from "../types/kids-lesson";

/**
 * Banco local de aulas Kids (2º Ano).
 * Mesmo padrão visual e pedagógico do 1º Ano, com explicações mais
 * completas, exemplos reais do dia a dia e progressão por níveis nos
 * códigos que pedem prática repetida (somar, subtrair, multiplicar…).
 *
 * Sem termos de habilidade. Sem questionário antes da explicação.
 */

type Cor = KidsLesson["cor"];

function mk(
  codigo: string,
  titulo: string,
  disciplina: string,
  cor: Cor,
  scenes: KidsScene[],
  xp = 130,
): KidsLesson {
  return { codigo_bncc: codigo, titulo, disciplina, serie: "2º Ano", xp, cor, scenes };
}

// ---------------------------------------------------------------------------
// MATEMÁTICA — EF02MA01..EF02MA23
// ---------------------------------------------------------------------------

const MA01: KidsLesson[] = [
  mk("EF02MA01", "Comparar números até 100", "Matemática", "blue", [
    { kind: "intro", mascot: "pip", titulo: "Quem é o maior?", fala: "Hoje a gente vai aprender a olhar dois números e descobrir qual é o maior, o menor ou se são iguais." },
    { kind: "concept", titulo: "Dezena e unidade", simbolo: "23", fala: "Todo número de dois algarismos tem dezena e unidade. No 23, o 2 são duas dezenas e o 3 são três unidades." },
    { kind: "usecase", titulo: "Onde a gente compara?", cenas: [
      { emoji: "🍎", texto: "Quem tem mais maçãs" },
      { emoji: "📏", texto: "Quem é mais alto" },
      { emoji: "💰", texto: "Quem tem mais moedas" },
    ], fala: "A gente compara quantidades o tempo todo: maçãs, altura, moedas, brinquedos…" },
    { kind: "concept", titulo: "Olha primeiro a dezena", emoji: "👀", fala: "Para saber quem é maior, olhe primeiro a dezena. Quem tem mais dezenas é maior." },
    { kind: "step_count", titulo: "Vamos ver: 32 e 28", a: 32, b: 28, objeto: "🔵", fala: "32 tem três dezenas. 28 tem só duas dezenas. Então 32 é maior!" },
    { kind: "concept", titulo: "Dezenas iguais?", emoji: "🤔", fala: "Se as dezenas forem iguais, aí a gente olha as unidades para desempatar." },
    { kind: "step_count", titulo: "Vamos ver: 45 e 47", a: 45, b: 47, objeto: "🟢", fala: "Os dois têm quatro dezenas. Mas o 47 tem mais unidades, então 47 é maior." },
    { kind: "concept", titulo: "Sinal de maior", simbolo: ">", fala: "Esse sinal aponta para o menor: 47 > 45. A gente lê: 47 é maior que 45." },
    { kind: "concept", titulo: "Sinal de menor", simbolo: "<", fala: "Esse aponta para o maior: 28 < 32. A gente lê: 28 é menor que 32." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Olhar a dezena primeiro", "Depois a unidade", "> maior, < menor, = igual"], fala: "Agora você sabe comparar qualquer número até cem!" },
    { kind: "celebrate", titulo: "Mandou bem!", fala: "Ganhou cento e trinta de experiência. Vamos pra próxima!" },
  ]),
];

const MA02: KidsLesson[] = [
  mk("EF02MA02", "Estimar quantidades", "Matemática", "blue", [
    { kind: "intro", mascot: "pipa", titulo: "Quase quantos?", fala: "Estimar é dar um chute esperto. A gente olha e diz mais ou menos quantos são, sem contar um por um." },
    { kind: "concept", titulo: "Por que estimar?", emoji: "💡", fala: "Quando tem muita coisa junta, contar demora. Estimar ajuda a ter uma ideia rápida." },
    { kind: "usecase", titulo: "Onde a gente estima?", cenas: [
      { emoji: "🍿", texto: "Pipocas no pote" },
      { emoji: "👥", texto: "Pessoas na fila" },
      { emoji: "⭐", texto: "Estrelas no céu" },
    ], fala: "A gente estima pipoca, pessoas na fila, até as estrelas!" },
    { kind: "concept", titulo: "Use um grupinho", emoji: "🔟", fala: "Truque do Pip: separe 10 num cantinho. Depois veja quantos grupinhos parecidos dá pra fazer." },
    { kind: "step_count", titulo: "Veja 10, depois estime", a: 10, b: 18, objeto: "🟢", fala: "Aqui 10 bolinhas. E aqui parece quase o dobro. Então mais ou menos 20!" },
    { kind: "concept", titulo: "Conferir depois", emoji: "✅", fala: "Depois de estimar, vale contar pra ver se chegou perto. Quem acerta perto já mandou bem!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Estimar é chute esperto", "Usar grupos de 10", "Conferir depois"], fala: "Estimar é demais para o dia a dia." },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência!" },
  ]),
];

const MA03: KidsLesson[] = [
  mk("EF02MA03", "Quem tem mais? Correspondência 1 a 1", "Matemática", "blue", [
    { kind: "intro", mascot: "pip", titulo: "Comparando dois grupos", fala: "Quando temos dois grupos, dá pra saber qual é maior fazendo a correspondência um para um." },
    { kind: "concept", titulo: "O que é 1 a 1?", emoji: "🔗", fala: "É juntar cada um de um lado com um do outro. Se sobrar de um lado, esse lado tem mais." },
    { kind: "step_count", titulo: "5 maçãs e 3 bananas", a: 5, b: 3, objeto: "🍎", fala: "Pra cada banana ponho uma maçã. Sobraram duas maçãs! Então tem mais maçã." },
    { kind: "concept", titulo: "Quantos a mais?", emoji: "➕", fala: "O que sobrou é a diferença. Aqui sobraram 2: tem 2 maçãs a mais que bananas." },
    { kind: "usecase", titulo: "Onde a gente usa?", cenas: [
      { emoji: "🪑", texto: "Cadeira pra cada aluno" },
      { emoji: "🥤", texto: "Copo pra cada amigo" },
      { emoji: "✏️", texto: "Lápis pra cada caderno" },
    ], fala: "A gente faz isso na escola e em casa o tempo todo." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["1 a 1 é juntar cada um", "Quem sobra tem mais", "A sobra é a diferença"], fala: "Que esperto!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA04: KidsLesson[] = [
  mk("EF02MA04", "Compor e decompor números (até 999)", "Matemática", "blue", [
    { kind: "intro", mascot: "pipa", titulo: "Desmontar e montar", fala: "Todo número grande pode ser quebrado em partes. E também montado de novo. Vem ver!" },
    { kind: "concept", titulo: "Centena, dezena, unidade", simbolo: "247", fala: "247 tem 2 centenas, 4 dezenas e 7 unidades." },
    { kind: "concept", titulo: "Decompor", simbolo: "200 + 40 + 7", fala: "Quebrar 247 fica assim: duzentos, mais quarenta, mais sete." },
    { kind: "step_vertical_sum", titulo: "Compondo 200 + 40 + 7", a: 240, b: 7, fala: "Junta 200 com 40 e dá 240. Junta com 7 e volta a ser 247!" },
    { kind: "concept", titulo: "Material dourado", emoji: "🟨", fala: "Placas são centenas, barrinhas são dezenas, cubinhos são unidades. Isso ajuda a enxergar." },
    { kind: "usecase", titulo: "Pra que serve?", cenas: [
      { emoji: "💰", texto: "Contar dinheiro" },
      { emoji: "🧮", texto: "Fazer contas grandes" },
      { emoji: "📦", texto: "Organizar caixas" },
    ], fala: "Quem sabe decompor, faz contas grandes com facilidade." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Centena, dezena, unidade", "Decompor é quebrar", "Compor é juntar de novo"], fala: "Excelente!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

// EF02MA05 — fatos básicos (várias variantes progressivas: +, −, dobro)
function makeAddFact(level: number, a: number, b: number): KidsLesson {
  return mk(
    "EF02MA05",
    `Fatos da adição — Nível ${level}`,
    "Matemática",
    "blue",
    [
      { kind: "intro", mascot: "pip", titulo: "Somar de cabeça", fala: "Existem contas que a gente decora pra fazer rapidinho. Hoje vamos treinar uma delas." },
      { kind: "concept", titulo: "Sinal de mais", simbolo: "+", fala: "O mais junta dois grupos num só." },
      { kind: "step_count", titulo: `Olha: ${a} + ${b}`, a, b, objeto: "🟢", fala: `Em cima ${a} bolinhas, embaixo ${b}. Vamos juntar.` },
      { kind: "step_join", titulo: "Juntando tudo", a, b, objeto: "🟢", fala: `Contando: deu ${a + b}!` },
      { kind: "step_vertical_sum", titulo: "Na conta armada", a, b, fala: `${a} em cima, ${b} embaixo, mais. Resultado ${a + b}.` },
      { kind: "concept", titulo: "Truque", emoji: "⚡", fala: "Quando o número é pequeno, dá pra contar nos dedos. Quando é maior, decore!" },
      { kind: "concept", titulo: "Vai treinando", emoji: "🏋️", fala: "Fazer várias vezes ajuda o cérebro a guardar. Faça com calma." },
      { kind: "summary", titulo: "Você aprendeu!", itens: [`${a} + ${b} = ${a + b}`, "Somar é juntar", "Treinar deixa rápido"], fala: "Excelente!" },
      { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
    ],
    130,
  );
}
function makeSubFact(level: number, a: number, b: number): KidsLesson {
  return mk(
    "EF02MA05",
    `Fatos da subtração — Nível ${level}`,
    "Matemática",
    "violet",
    [
      { kind: "intro", mascot: "pipa", titulo: "Tirar rapidinho", fala: "Subtrair é tirar uma parte. Vamos treinar." },
      { kind: "concept", titulo: "Sinal de menos", simbolo: "−", fala: "O menos diz: tire essa quantidade do total." },
      { kind: "step_subtract", titulo: `Olha: ${a} − ${b}`, a, b, objeto: "🍎", fala: `Tinha ${a} maçãs, ${b} foram embora. Restam ${a - b}.` },
      { kind: "step_vertical_sub", titulo: "Na conta armada", a, b, fala: `${a} em cima, ${b} embaixo, menos. Resultado ${a - b}.` },
      { kind: "concept", titulo: "Truque", emoji: "🧠", fala: "Subtrair é o contrário de somar. Se 3 + 4 = 7, então 7 − 4 = 3." },
      { kind: "concept", titulo: "Pratique", emoji: "🔁", fala: "Fazer várias vezes ajuda a decorar. Repete sem medo!" },
      { kind: "summary", titulo: "Você aprendeu!", itens: [`${a} − ${b} = ${a - b}`, "Subtrair é tirar", "É o contrário de somar"], fala: "Demais!" },
      { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
    ],
    130,
  );
}
const MA05: KidsLesson[] = [
  makeAddFact(1, 3, 4),
  makeAddFact(2, 6, 5),
  makeAddFact(3, 8, 7),
  makeSubFact(1, 7, 3),
  makeSubFact(2, 12, 5),
  makeSubFact(3, 15, 8),
];

const MA06: KidsLesson[] = [
  mk("EF02MA06", "Problemas de juntar e tirar", "Matemática", "blue", [
    { kind: "intro", mascot: "pip", titulo: "Histórias com conta", fala: "Em problema a gente lê a história e decide: junta ou tira?" },
    { kind: "concept", titulo: "Pista do JUNTAR", emoji: "➕", fala: "Quando aparece ganhou, somou, comprou mais, juntou… é soma!" },
    { kind: "concept", titulo: "Pista do TIRAR", emoji: "➖", fala: "Quando aparece deu, perdeu, gastou, sobrou… é subtração!" },
    { kind: "step_count", titulo: "Ex: Ana tinha 8, ganhou 5", a: 8, b: 5, objeto: "🍬", fala: "Ganhou é juntar. 8 + 5 = 13 balas!" },
    { kind: "step_vertical_sum", titulo: "Conta armada", a: 8, b: 5, fala: "Oito mais cinco, treze!" },
    { kind: "step_subtract", titulo: "Tinha 14, deu 6", a: 14, b: 6, objeto: "🍪", fala: "Deu é tirar. Restam 8 biscoitos." },
    { kind: "step_vertical_sub", titulo: "Conta armada", a: 14, b: 6, fala: "Quatorze menos seis, oito!" },
    { kind: "concept", titulo: "Sempre confira", emoji: "🔍", fala: "Releia a história e veja se faz sentido. Sobrou? Faltou? Quantos no total?" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Ler com calma", "Achar a pista", "Decidir + ou −"], fala: "Você está virando craque!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA07: KidsLesson[] = [
  mk("EF02MA07", "Multiplicar — somar de novo o mesmo número", "Matemática", "blue", [
    { kind: "intro", mascot: "pipa", titulo: "Atalho da soma!", fala: "Multiplicar é um atalho pra somar várias vezes o mesmo número." },
    { kind: "concept", titulo: "Sinal de vezes", simbolo: "×", fala: "Esse sinal de xis quer dizer vezes. 3 × 4 lê assim: três vezes quatro." },
    { kind: "step_count", titulo: "3 grupos de 4 estrelas", a: 4, b: 8, objeto: "⭐", fala: "Imagine três caixas com quatro estrelas em cada uma." },
    { kind: "step_vertical_sum", titulo: "Somando 4 + 4 + 4", a: 8, b: 4, fala: "Quatro mais quatro é oito. Mais quatro, doze!" },
    { kind: "concept", titulo: "Atalho!", simbolo: "3 × 4 = 12", fala: "Em vez de somar três vezes, escreve 3 × 4 = 12. É a mesma coisa, só mais rápido." },
    { kind: "usecase", titulo: "Onde usamos?", cenas: [
      { emoji: "🥚", texto: "Caixas iguais de ovos" },
      { emoji: "🚗", texto: "Filas de carrinhos" },
      { emoji: "🪑", texto: "Cadeiras por mesa" },
    ], fala: "Sempre que tem grupos iguais, dá pra usar multiplicação." },
    { kind: "concept", titulo: "Tabuada do 2", emoji: "✌️", fala: "2 × 1 = 2, 2 × 2 = 4, 2 × 3 = 6, 2 × 4 = 8, 2 × 5 = 10. É só somar de 2 em 2." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["× é vezes", "Soma o mesmo número", "É atalho da adição"], fala: "Você desbloqueou multiplicação!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA08: KidsLesson[] = [
  mk("EF02MA08", "Dobro e metade", "Matemática", "blue", [
    { kind: "intro", mascot: "pip", titulo: "Dois conceitos legais", fala: "Hoje a gente aprende dobro e metade. Os dois andam juntos." },
    { kind: "concept", titulo: "O que é dobro?", emoji: "✌️", fala: "Dobro é a mesma quantidade duas vezes. Dobro de 3 é 3 + 3 = 6." },
    { kind: "step_count", titulo: "Dobro de 4", a: 4, b: 4, objeto: "🍓", fala: "Quatro moranguinhos e mais quatro. Oito no total!" },
    { kind: "concept", titulo: "O que é metade?", emoji: "✂️", fala: "Metade é dividir em duas partes iguais. Metade de 6 é 3." },
    { kind: "step_subtract", titulo: "Metade de 8", a: 8, b: 4, objeto: "🍪", fala: "Oito biscoitos divididos em dois pratos iguais: quatro em cada." },
    { kind: "concept", titulo: "Dobro e metade", emoji: "🔄", fala: "Se 4 é metade de 8, então 8 é o dobro de 4. Um é o contrário do outro!" },
    { kind: "usecase", titulo: "Onde usamos?", cenas: [
      { emoji: "🍕", texto: "Dividir pizza em dois" },
      { emoji: "🍫", texto: "Repartir chocolate" },
      { emoji: "🎈", texto: "Comprar o dobro de balões" },
    ], fala: "A gente usa o tempo todo na cozinha e nas brincadeiras." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Dobro = duas vezes", "Metade = dividir em 2", "Um é o contrário do outro"], fala: "Demais!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA09: KidsLesson[] = [
  mk("EF02MA09", "Sequências de números", "Matemática", "blue", [
    { kind: "intro", mascot: "pipa", titulo: "Que vem depois?", fala: "Sequência é uma fila de números seguindo uma regra. Vem ver!" },
    { kind: "concept", titulo: "Crescente", simbolo: "1, 2, 3, 4…", fala: "Crescente é ir aumentando. Cada número é maior que o de trás." },
    { kind: "concept", titulo: "Decrescente", simbolo: "10, 9, 8, 7…", fala: "Decrescente é ir diminuindo. Vai do maior pro menor." },
    { kind: "concept", titulo: "Pulando de 2 em 2", simbolo: "2, 4, 6, 8…", fala: "Pra cada número, soma 2 e vai. Essa é a regra." },
    { kind: "concept", titulo: "Pulando de 5 em 5", simbolo: "5, 10, 15, 20…", fala: "Soma 5 toda vez. Fica mais rápido!" },
    { kind: "usecase", titulo: "Onde a gente vê?", cenas: [
      { emoji: "📅", texto: "Dias do mês" },
      { emoji: "🪜", texto: "Degraus da escada" },
      { emoji: "🎵", texto: "Batidas da música" },
    ], fala: "Sequências aparecem em datas, escadas, ritmos…" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Sequência tem regra", "Crescente sobe", "Decrescente desce"], fala: "Boa!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA10: KidsLesson[] = [
  mk("EF02MA10", "Padrões que se repetem", "Matemática", "violet", [
    { kind: "intro", mascot: "pip", titulo: "Padrões!", fala: "Padrão é uma sequência que repete a mesma coisa de novo e de novo." },
    { kind: "concept", titulo: "Exemplo simples", simbolo: "🔴🔵🔴🔵🔴🔵", fala: "Vermelho, azul, vermelho, azul… o padrão é trocar entre dois." },
    { kind: "concept", titulo: "Padrão com três", simbolo: "🌞🌙⭐🌞🌙⭐", fala: "Sol, lua, estrela e repete! Esse é um padrão de três." },
    { kind: "usecase", titulo: "Onde aparecem?", cenas: [
      { emoji: "🧱", texto: "Tijolos da parede" },
      { emoji: "👕", texto: "Listras da camiseta" },
      { emoji: "🎼", texto: "Notas da música" },
    ], fala: "Padrões estão em todo lugar!" },
    { kind: "concept", titulo: "Adivinhe o próximo", emoji: "🔮", fala: "Sabendo o padrão, dá pra adivinhar o que vem depois sem ver." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Padrão repete", "Pode ter 2, 3 ou mais", "Dá pra prever o próximo"], fala: "Muito bom!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA11: KidsLesson[] = [
  mk("EF02MA11", "Qual está faltando?", "Matemática", "violet", [
    { kind: "intro", mascot: "pipa", titulo: "Detetive de sequência", fala: "Hoje a gente vira detetive e descobre o número que sumiu da fila." },
    { kind: "concept", titulo: "Veja o pulo", simbolo: "2, 4, __, 8", fala: "De 2 pra 4 pulou 2. De 4 pra próximo, pula 2 também. Falta o 6!" },
    { kind: "concept", titulo: "Outro exemplo", simbolo: "10, __, 30, 40", fala: "Pulando de 10 em 10. Tá faltando o 20." },
    { kind: "concept", titulo: "Descobrindo a regra", emoji: "🕵️", fala: "Sempre olhe a diferença entre dois números que estão lá. Essa diferença é a regra." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Achar a regra", "Aplicar pra completar", "Conferir no fim"], fala: "Esperto!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA12: KidsLesson[] = [
  mk("EF02MA12", "Onde fica? Localização e caminho", "Matemática", "green", [
    { kind: "intro", mascot: "pip", titulo: "Pra onde ir?", fala: "Saber localizar é dizer onde a coisa está e como chegar até lá." },
    { kind: "concept", titulo: "Em cima e embaixo", emoji: "⬆️", fala: "Em cima, embaixo, na frente, atrás, do lado. São palavras de lugar." },
    { kind: "concept", titulo: "Direita e esquerda", emoji: "↔️", fala: "Direita é o lado da mão que escreve (na maioria). Esquerda é o outro lado." },
    { kind: "usecase", titulo: "Onde a gente usa?", cenas: [
      { emoji: "🏫", texto: "Achar a sala" },
      { emoji: "🛒", texto: "Achar o produto" },
      { emoji: "🗺️", texto: "Ler um mapa" },
    ], fala: "A gente se localiza o tempo todo." },
    { kind: "concept", titulo: "Dando direção", emoji: "🧭", fala: "Vire à direita, ande dois passos, vire à esquerda. Isso é dar caminho!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Palavras de lugar", "Direita e esquerda", "Dar e seguir direção"], fala: "Muito bom, pequeno explorador!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA13: KidsLesson[] = [
  mk("EF02MA13", "Mapinha do lugar onde você está", "Matemática", "green", [
    { kind: "intro", mascot: "pipa", titulo: "Vamos desenhar?", fala: "Hoje a gente aprende a fazer um mapinha simples de um lugar conhecido." },
    { kind: "concept", titulo: "Vista de cima", emoji: "🦅", fala: "Mapa é como se a gente olhasse o lugar de cima, igual passarinho." },
    { kind: "concept", titulo: "Quadrado é a sala", simbolo: "▭", fala: "Cada cômodo vira um quadrado ou retângulo no papel." },
    { kind: "concept", titulo: "Marque as portas", emoji: "🚪", fala: "Faça um traço onde tem porta. E uma janelinha onde tem janela." },
    { kind: "usecase", titulo: "Pra que serve?", cenas: [
      { emoji: "🏫", texto: "Mapa da escola" },
      { emoji: "🏠", texto: "Planta da casa" },
      { emoji: "🏞️", texto: "Mapa do parque" },
    ], fala: "Mapas ajudam a explicar onde está cada coisa." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Mapa é vista de cima", "Cada cômodo é uma forma", "Marcar portas e janelas"], fala: "Boa!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA14: KidsLesson[] = [
  mk("EF02MA14", "Formas em 3D — cubo, bloco, pirâmide…", "Matemática", "amber", [
    { kind: "intro", mascot: "pip", titulo: "Formas com volume", fala: "Hoje a gente conhece formas que ocupam espaço de verdade, não só desenho." },
    { kind: "concept", titulo: "Cubo", simbolo: "🎲", fala: "Cubo tem seis faces iguais, todas quadradas. Igual um dadinho!" },
    { kind: "concept", titulo: "Bloco retangular", simbolo: "📦", fala: "Igual uma caixa de pasta de dente. Tem faces retangulares." },
    { kind: "concept", titulo: "Pirâmide", simbolo: "🔺", fala: "Pirâmide tem uma base e sobe juntando num ponto lá em cima." },
    { kind: "concept", titulo: "Cone", simbolo: "🍦", fala: "Cone é como a casquinha de sorvete. Base redonda e ponta em cima." },
    { kind: "concept", titulo: "Cilindro", simbolo: "🥫", fala: "Cilindro é igual a uma lata. Dois círculos e a lateral lisa." },
    { kind: "concept", titulo: "Esfera", simbolo: "⚽", fala: "Esfera é uma bola. Toda redondinha." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Cubo, bloco, pirâmide", "Cone, cilindro, esfera", "Cada uma tem um formato"], fala: "Que time de formas!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA15: KidsLesson[] = [
  mk("EF02MA15", "Formas planas — círculo, quadrado, retângulo, triângulo", "Matemática", "amber", [
    { kind: "intro", mascot: "pipa", titulo: "Formas no papel", fala: "Essas formas a gente desenha. Elas são chapadinhas, sem volume." },
    { kind: "concept", titulo: "Círculo", simbolo: "⚪", fala: "Toda redondinha, sem cantos. Igual a uma roda." },
    { kind: "concept", titulo: "Quadrado", simbolo: "⬜", fala: "Quatro lados iguais. Quatro cantinhos retos." },
    { kind: "concept", titulo: "Retângulo", simbolo: "▭", fala: "Quatro lados, dois mais compridos. Igual uma porta." },
    { kind: "concept", titulo: "Triângulo", simbolo: "🔺", fala: "Três lados e três cantos. Pode ser de vários jeitos." },
    { kind: "usecase", titulo: "Onde estão?", cenas: [
      { emoji: "🪟", texto: "Quadrado: janela" },
      { emoji: "🍕", texto: "Triângulo: fatia" },
      { emoji: "🪞", texto: "Retângulo: espelho" },
      { emoji: "🍪", texto: "Círculo: biscoito" },
    ], fala: "As formas estão em tudo!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Círculo é redondo", "Quadrado tem lados iguais", "Retângulo é alongado", "Triângulo tem 3 lados"], fala: "Demais!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA16: KidsLesson[] = [
  mk("EF02MA16", "Medindo comprimento", "Matemática", "amber", [
    { kind: "intro", mascot: "pip", titulo: "Maior ou menor?", fala: "Medir é descobrir o tamanho exato de algo." },
    { kind: "concept", titulo: "Régua", emoji: "📏", fala: "A régua tem centímetros. Cada tracinho é 1 cm. Encaixa o zero na ponta e lê do outro lado." },
    { kind: "concept", titulo: "Medindo passos", emoji: "👣", fala: "Antes da régua, a gente pode medir com palmos, pés ou passos. É medida do corpo!" },
    { kind: "concept", titulo: "Cuidado: nem todos iguais", emoji: "⚠️", fala: "O passo do adulto é maior que o da criança. Por isso a régua é mais justa." },
    { kind: "usecase", titulo: "Onde medimos?", cenas: [
      { emoji: "📚", texto: "Largura do livro" },
      { emoji: "✏️", texto: "Comprimento do lápis" },
      { emoji: "🛏️", texto: "Tamanho da cama" },
    ], fala: "Medir ajuda a escolher móveis, roupas, tudo!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Medir é ver o tamanho", "Régua usa cm", "Palmos não são iguais"], fala: "Boa medida!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA17: KidsLesson[] = [
  mk("EF02MA17", "Quanto pesa, quanto cabe?", "Matemática", "amber", [
    { kind: "intro", mascot: "pipa", titulo: "Peso e capacidade", fala: "Algumas coisas são pesadas, outras leves. Algumas cabem muito, outras pouco." },
    { kind: "concept", titulo: "Balança", emoji: "⚖️", fala: "Pra saber o peso a gente usa balança. Ela mostra em gramas ou quilos." },
    { kind: "concept", titulo: "Litro", emoji: "🥛", fala: "Pra líquido a gente usa litro. Uma garrafinha pequena tem meio litro." },
    { kind: "usecase", titulo: "Exemplos do dia a dia", cenas: [
      { emoji: "🍌", texto: "Banana: gramas" },
      { emoji: "🍉", texto: "Melancia: quilos" },
      { emoji: "🧴", texto: "Shampoo: ml/litros" },
    ], fala: "Cada coisa tem sua medida certinha." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Peso usa balança", "Líquido usa litro", "Cada coisa tem medida"], fala: "Excelente!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA18: KidsLesson[] = [
  mk("EF02MA18", "Dias e meses — quanto tempo?", "Matemática", "pink", [
    { kind: "intro", mascot: "pip", titulo: "Tempo passa!", fala: "A gente pode medir o tempo entre duas datas. Vamos ver como." },
    { kind: "concept", titulo: "Dias da semana", emoji: "📅", fala: "Domingo, segunda, terça, quarta, quinta, sexta, sábado. São sete dias na semana." },
    { kind: "concept", titulo: "Meses do ano", emoji: "🗓️", fala: "Janeiro até dezembro. São doze meses no ano todo." },
    { kind: "concept", titulo: "Contando entre dias", emoji: "➕", fala: "De segunda até sexta são quatro dias depois. Conte um por um pra acertar." },
    { kind: "usecase", titulo: "Pra que serve?", cenas: [
      { emoji: "🎂", texto: "Quantos dias pro aniversário" },
      { emoji: "✈️", texto: "Quanto falta pra viagem" },
      { emoji: "🎄", texto: "Contar até o Natal" },
    ], fala: "A gente conta o tempo todo!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["7 dias na semana", "12 meses no ano", "Dá pra contar entre datas"], fala: "Boa!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA19: KidsLesson[] = [
  mk("EF02MA19", "Lendo o relógio digital", "Matemática", "pink", [
    { kind: "intro", mascot: "pipa", titulo: "Que horas são?", fala: "Hoje a gente aprende a ler o relógio digital, aquele que tem números." },
    { kind: "concept", titulo: "Dois pares", simbolo: "07:30", fala: "Antes dos dois pontinhos é a hora. Depois é o minuto. Aqui: sete horas e trinta minutos." },
    { kind: "concept", titulo: "Hora cheia", simbolo: "09:00", fala: "Quando o minuto é 00, é hora cheia. Nove em ponto." },
    { kind: "concept", titulo: "Meia hora", simbolo: "10:30", fala: "Trinta minutos é meia hora depois. Dez e meia." },
    { kind: "concept", titulo: "60 minutos = 1 hora", emoji: "⏰", fala: "Quando o minuto chega em 59 e vira, soma 1 hora e volta pra 00." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Antes dos : é hora", "Depois é minuto", "60 minutos viram 1 hora"], fala: "Que craque!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA20: KidsLesson[] = [
  mk("EF02MA20", "Moedas e cédulas do Brasil", "Matemática", "pink", [
    { kind: "intro", mascot: "pip", titulo: "Vamos comprar!", fala: "Hoje a gente aprende as moedas e o dinheiro do nosso país." },
    { kind: "concept", titulo: "Moedas", emoji: "🪙", fala: "Tem moedinha de 5, 10, 25, 50 centavos e de 1 real." },
    { kind: "concept", titulo: "Cédulas", emoji: "💵", fala: "As notas são de 2, 5, 10, 20, 50, 100 e 200 reais." },
    { kind: "concept", titulo: "Vale o mesmo", simbolo: "R$ 1 = 100 centavos", fala: "Cem centavos juntinhos viram um real." },
    { kind: "step_count", titulo: "2 moedas de 50", a: 50, b: 50, objeto: "🪙", fala: "Cinquenta mais cinquenta dá cem. Cem centavos é igual a um real!" },
    { kind: "usecase", titulo: "Onde a gente usa?", cenas: [
      { emoji: "🛒", texto: "Comprar no mercado" },
      { emoji: "🍦", texto: "Pagar o sorvete" },
      { emoji: "🎁", texto: "Juntar pra presente" },
    ], fala: "Saber lidar com dinheiro é muito importante!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Moedas e cédulas", "100 centavos = 1 real", "Somar valores"], fala: "Que economista!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA21: KidsLesson[] = [
  mk("EF02MA21", "Provável ou impossível?", "Matemática", "violet", [
    { kind: "intro", mascot: "pipa", titulo: "Vai acontecer?", fala: "Tem coisa que sempre rola, tem que nunca acontece. Outras só talvez." },
    { kind: "concept", titulo: "Certo", emoji: "✅", fala: "Certo é o que vai acontecer com toda certeza. Ex: amanhã o sol vai aparecer." },
    { kind: "concept", titulo: "Impossível", emoji: "❌", fala: "Impossível é o que não tem como acontecer. Ex: um cachorro voar de verdade." },
    { kind: "concept", titulo: "Provável", emoji: "🤔", fala: "Provável é o que pode ou não. Ex: chover hoje." },
    { kind: "usecase", titulo: "Vamos pensar!", cenas: [
      { emoji: "🌧️", texto: "Vai chover? Provável" },
      { emoji: "🌞", texto: "Sol amanhã? Certo" },
      { emoji: "🐠", texto: "Peixe falar? Impossível" },
    ], fala: "Pensa antes de classificar." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Certo / Impossível", "Provável é talvez", "Pensar antes de dizer"], fala: "Bem pensado!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA22: KidsLesson[] = [
  mk("EF02MA22", "Lendo tabelas e gráficos", "Matemática", "green", [
    { kind: "intro", mascot: "pip", titulo: "Informação em desenho", fala: "Tabelas e gráficos mostram muita coisa em pouco espaço." },
    { kind: "concept", titulo: "Tabela", emoji: "🗒️", fala: "Tabela tem linhas e colunas. Cada cela traz uma informação." },
    { kind: "concept", titulo: "Gráfico de barras", emoji: "📊", fala: "A barra maior é quem tem mais. A barrinha menor é quem tem menos." },
    { kind: "concept", titulo: "Olhar com calma", emoji: "👀", fala: "Antes de responder, leia o título do gráfico e o que cada barra representa." },
    { kind: "usecase", titulo: "Onde aparecem?", cenas: [
      { emoji: "📺", texto: "Jornal" },
      { emoji: "📚", texto: "Livro escolar" },
      { emoji: "📱", texto: "Aplicativos" },
    ], fala: "Saber ler ajuda na vida toda!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Tabela tem linha e coluna", "Barra maior é maior", "Ler o título primeiro"], fala: "Esperto!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const MA23: KidsLesson[] = [
  mk("EF02MA23", "Fazendo uma pesquisinha", "Matemática", "green", [
    { kind: "intro", mascot: "pipa", titulo: "Vamos pesquisar?", fala: "Pesquisa é perguntar pra muita gente e organizar as respostas." },
    { kind: "concept", titulo: "Escolha a pergunta", emoji: "❓", fala: "Ex: qual a fruta favorita? Tem que ter opções, tipo banana, maçã ou uva." },
    { kind: "concept", titulo: "Anote em tabela", emoji: "🗒️", fala: "Pra cada resposta, faz um tracinho na coluna certa. Depois conta tudo." },
    { kind: "concept", titulo: "Vire um gráfico", emoji: "📊", fala: "Quem tem mais tracinhos vira a barra maior. Pronto: virou gráfico!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Pesquisa começa com pergunta", "Anote em tabela", "Vire em gráfico"], fala: "Você é cientista!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

// ---------------------------------------------------------------------------
// LÍNGUA PORTUGUESA — EF02LP01..EF02LP14
// ---------------------------------------------------------------------------

const LP01: KidsLesson[] = [
  mk("EF02LP01", "Escrever do jeito certo", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pip", titulo: "Escrever direitinho", fala: "Hoje a gente vai aprender a escrever palavras que a gente já conhece, sem trocar letrinhas." },
    { kind: "concept", titulo: "Letra do som certo", emoji: "🔤", fala: "Cada som tem uma letra. Pra falar BOLA usamos B, O, L, A nessa ordem." },
    { kind: "concept", titulo: "Fala devagar pra escrever", emoji: "🐢", fala: "Truque do Pip: fale a palavra bem devagar e ouça som por som." },
    { kind: "concept", titulo: "Letra maiúscula", simbolo: "Ana", fala: "Nome de pessoa começa com letra grande. Igual Ana, Pedro, Maria." },
    { kind: "concept", titulo: "Letra minúscula", simbolo: "bola", fala: "Palavras comuns começam com letra pequena." },
    { kind: "usecase", titulo: "Onde a gente escreve?", cenas: [
      { emoji: "📓", texto: "No caderno" },
      { emoji: "💌", texto: "Em bilhetes" },
      { emoji: "📝", texto: "Listas de coisas" },
    ], fala: "Escrever direito ajuda os outros a entender." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Cada som = uma letra", "Falar devagar ajuda", "Nome com maiúscula"], fala: "Demais!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP02: KidsLesson[] = [
  mk("EF02LP02", "Brincando com sílabas", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pipa", titulo: "Sílabas viram brincadeira", fala: "Sílaba é o pedacinho que a gente fala junto. BO-LA tem duas sílabas." },
    { kind: "concept", titulo: "Bater palma", emoji: "👏", fala: "Truque: bata palma a cada pedacinho. CA-SA são duas palmas." },
    { kind: "concept", titulo: "Tirando uma sílaba", simbolo: "BO-LA → LA", fala: "Tira o BO de BOLA e sobra LA. Mudou tudo!" },
    { kind: "concept", titulo: "Trocando", simbolo: "BO-LA → BO-LO", fala: "Trocou o LA pelo LO e virou BOLO. Outra palavra!" },
    { kind: "concept", titulo: "Juntando", simbolo: "PA + TO → PATO", fala: "Junta dois pedacinhos e vira palavra." },
    { kind: "usecase", titulo: "Brincadeiras de sílaba", cenas: [
      { emoji: "🎵", texto: "Cantar dividindo" },
      { emoji: "🎯", texto: "Trocar pra inventar" },
      { emoji: "🧩", texto: "Quebra-cabeça de letras" },
    ], fala: "Brincar com sílaba ajuda a ler e escrever melhor." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Sílaba é pedacinho", "Bater palma ajuda", "Trocar muda a palavra"], fala: "Sons na ponta da língua!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP03: KidsLesson[] = [
  mk("EF02LP03", "Ler e escrever som por som", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pip", titulo: "Letras com som certinho", fala: "Algumas letras sempre fazem o mesmo som. Saber isso ajuda a ler tudo!" },
    { kind: "concept", titulo: "P faz P", simbolo: "PATO", fala: "P + A = PA. P + I = PI. Sempre o mesmo som forte." },
    { kind: "concept", titulo: "T faz T", simbolo: "TATU", fala: "T + A = TA. T + U = TU. Som curtinho na ponta da língua." },
    { kind: "concept", titulo: "M faz M", simbolo: "MAMÃE", fala: "M sai pelo nariz. Tente: mmm! MA-MÃE." },
    { kind: "concept", titulo: "B faz B", simbolo: "BOLA", fala: "B é parecido com P, mas é mais cheio. Coloque a mão na garganta!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["P faz som de P", "T som de T", "M som de M", "B som de B"], fala: "Bom de leitura!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP04: KidsLesson[] = [
  mk("EF02LP04", "Vogais, consoantes e sílabas", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pipa", titulo: "Dois tipos de letras", fala: "Toda letra é vogal ou consoante. Vamos descobrir cada uma." },
    { kind: "concept", titulo: "Vogais", simbolo: "A E I O U", fala: "Vogais são cinco: A, E, I, O, U. Toda sílaba precisa de uma vogal." },
    { kind: "concept", titulo: "Consoantes", simbolo: "B C D F…", fala: "Todas as outras letras são consoantes. Sozinhas não dão som forte." },
    { kind: "concept", titulo: "Sílaba CV", simbolo: "BA, ME, TI", fala: "Consoante + vogal: a estrutura mais comum. Casa: CA-SA." },
    { kind: "concept", titulo: "Sílaba CVC", simbolo: "POR-TA", fala: "Consoante + vogal + consoante. O R fecha a sílaba." },
    { kind: "concept", titulo: "Sílaba CCV", simbolo: "PRA-TO", fala: "Duas consoantes coladas + vogal. PRA, BRA, TRI…" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["A E I O U são vogais", "Resto é consoante", "CV, CVC e CCV"], fala: "Mestre das sílabas!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP05: KidsLesson[] = [
  mk("EF02LP05", "Til, M e N — som de nariz", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pip", titulo: "Quando o ar sai pelo nariz", fala: "Algumas letras fazem a gente falar com som de nariz. Olha só!" },
    { kind: "concept", titulo: "Til", simbolo: "PÃO, MÃO", fala: "O tilzinho em cima da vogal deixa o som nasal. PÃO, MÃO, IRMÃ." },
    { kind: "concept", titulo: "M antes de P ou B", simbolo: "CAMPO, BOMBA", fala: "Antes de P ou B, escrevemos M. CAMPO, BOMBA, TAMPA." },
    { kind: "concept", titulo: "N nos outros casos", simbolo: "CANTO, MUNDO", fala: "Antes das outras consoantes, usamos N. CANTO, MUNDO, TINTA." },
    { kind: "concept", titulo: "Truque", emoji: "👃", fala: "Coloque a mão no nariz e fale. Se vibrar, o som é nasal!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Til nasaliza", "M antes de P/B", "N antes do resto"], fala: "Que ouvido bom!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP06: KidsLesson[] = [
  mk("EF02LP06", "Nome das letras", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pipa", titulo: "Cada letra tem nome", fala: "B é 'bê', C é 'cê'. O nome já dá uma pista do som da letra!" },
    { kind: "concept", titulo: "Som no nome", simbolo: "B = bê", fala: "Bê começa com som de B. Cê começa com som de C. Esperto, né?" },
    { kind: "concept", titulo: "Cantar o alfabeto", emoji: "🎵", fala: "Cantar A, B, C, D… ajuda a decorar a ordem das letras." },
    { kind: "concept", titulo: "Ordem alfabética", simbolo: "ABCDEFG…", fala: "Saber a ordem ajuda a achar palavra no dicionário e na lista." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Cada letra tem nome", "O nome dá o som", "Cantar ajuda a decorar"], fala: "Boa!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP07: KidsLesson[] = [
  mk("EF02LP07", "Letra de forma e letra de mão", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pip", titulo: "Dois jeitos de escrever", fala: "Tem a letra de forma (do livro) e a letra de mão (do caderno). As duas são certas." },
    { kind: "concept", titulo: "Letra de forma", simbolo: "BOLA", fala: "Cada letra separada. É a letra dos livros e placas. Mais fácil de ler." },
    { kind: "concept", titulo: "Letra de mão", simbolo: "Bola", fala: "As letras se juntam num desenho contínuo. É mais rápido pra escrever." },
    { kind: "concept", titulo: "A palavra é a mesma!", emoji: "🤝", fala: "BOLA e Bola são iguais. Só muda o jeito de escrever." },
    { kind: "concept", titulo: "Espaço entre palavras", emoji: "↔️", fala: "Não deixe as palavras grudadas. Dê um espacinho entre elas." },
    { kind: "usecase", titulo: "Onde a gente usa?", cenas: [
      { emoji: "📚", texto: "Livro: forma" },
      { emoji: "📓", texto: "Caderno: mão" },
      { emoji: "📝", texto: "Bilhete: as duas" },
    ], fala: "Cada lugar pede um estilo." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Forma é separada", "Mão é grudada", "Espaço entre palavras"], fala: "Muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP08: KidsLesson[] = [
  mk("EF02LP08", "Separando as palavras", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pipa", titulo: "Cada palavra no seu canto", fala: "Quando a gente escreve, é preciso dar espaço entre as palavras. Senão fica difícil ler." },
    { kind: "concept", titulo: "Errado", simbolo: "ogatoé bonito", fala: "Tudo grudado fica embaralhado. Cadê uma palavra e a outra?" },
    { kind: "concept", titulo: "Certo", simbolo: "o gato é bonito", fala: "Com espaço, dá pra ler cada palavra direitinho." },
    { kind: "concept", titulo: "Truque do dedo", emoji: "☝️", fala: "Coloque um dedinho depois da palavra pra marcar o espaço. Aí escreve a próxima." },
    { kind: "concept", titulo: "Olhe sempre", emoji: "👀", fala: "Depois de escrever, leia em voz alta. Se não fizer sentido, separe melhor." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Espaço entre palavras", "Dedinho ajuda", "Reler em voz alta"], fala: "Que organizado!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP09: KidsLesson[] = [
  mk("EF02LP09", "Pra que serve esse texto?", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pip", titulo: "Cada texto tem um motivo", fala: "Um texto pode ensinar, divertir, contar uma história… Vamos descobrir!" },
    { kind: "concept", titulo: "Receita", emoji: "🍰", fala: "A receita ensina a fazer comida. Tem ingredientes e passo a passo." },
    { kind: "concept", titulo: "História", emoji: "📖", fala: "A história tem personagens, lugar e o que aconteceu." },
    { kind: "concept", titulo: "Bilhete", emoji: "💌", fala: "Bilhete é um recado curto. Pra avisar alguma coisa." },
    { kind: "concept", titulo: "Notícia", emoji: "📰", fala: "Notícia conta um fato que aconteceu de verdade." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Receita ensina", "História diverte", "Bilhete avisa", "Notícia informa"], fala: "Cada um com seu papel!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP10: KidsLesson[] = [
  mk("EF02LP10", "Sinônimos e antônimos", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pipa", titulo: "Palavras parecidas e contrárias", fala: "Algumas palavras significam quase a mesma coisa. Outras são o contrário." },
    { kind: "concept", titulo: "Sinônimo", simbolo: "bonito = lindo", fala: "Sinônimo é quando duas palavras querem dizer a mesma coisa." },
    { kind: "concept", titulo: "Mais exemplos", simbolo: "rápido = ligeiro", fala: "Casa = lar. Feliz = alegre. Rápido = ligeiro." },
    { kind: "concept", titulo: "Antônimo", simbolo: "alto ≠ baixo", fala: "Antônimo é o contrário. Alto é o contrário de baixo." },
    { kind: "concept", titulo: "Mais antônimos", simbolo: "quente ≠ frio", fala: "Dia/noite. Grande/pequeno. Cheio/vazio." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Sinônimo = igual", "Antônimo = contrário", "Servem pra enriquecer texto"], fala: "Vocabulário pra dar e vender!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP11: KidsLesson[] = [
  mk("EF02LP11", "Escrevendo um relato", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pip", titulo: "Conte o que aconteceu", fala: "Relato é contar algo que viveu. Hoje vamos ver como organizar." },
    { kind: "concept", titulo: "O que aconteceu?", emoji: "🎬", fala: "Comece dizendo o que rolou: 'Fui ao parque com a vovó'." },
    { kind: "concept", titulo: "Quando e onde?", emoji: "📍", fala: "Diga o lugar e o momento: 'no sábado de manhã'." },
    { kind: "concept", titulo: "Como você se sentiu?", emoji: "😊", fala: "Mostre como foi: 'Foi muito divertido, ri demais!'" },
    { kind: "concept", titulo: "Final", emoji: "🏁", fala: "Termine com uma frase fechando: 'Quero voltar lá em breve.'" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["O que aconteceu", "Quando e onde", "Como se sentiu", "Final fechado"], fala: "Que escritor!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP12: KidsLesson[] = [
  mk("EF02LP12", "Cantando com ritmo", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pipa", titulo: "Cantiga é divertido!", fala: "Cantar uma cantiga ajuda a aprender as palavras e o ritmo." },
    { kind: "concept", titulo: "Ouça primeiro", emoji: "🎧", fala: "Antes de cantar, ouça uma vez. Marque o tempo com o pezinho." },
    { kind: "concept", titulo: "Cante junto", emoji: "🎤", fala: "Acompanhe a melodia. Não corra: siga o ritmo da música." },
    { kind: "concept", titulo: "Decore aos poucos", emoji: "🧠", fala: "Não precisa decorar tudo de uma vez. Faça um verso por dia." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Ouvir primeiro", "Acompanhar ritmo", "Decorar aos pouquinhos"], fala: "Cantor de mão cheia!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP13: KidsLesson[] = [
  mk("EF02LP13", "Adivinhando pelo contexto", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pip", titulo: "Não sabe? Adivinhe!", fala: "Quando aparece uma palavra que você não conhece, dá pra adivinhar pelo resto da frase." },
    { kind: "concept", titulo: "Exemplo", simbolo: "O cão estava faminto.", fala: "Faminto é difícil. Mas pelo contexto, dá pra entender que é com muita fome." },
    { kind: "concept", titulo: "Olhe perto", emoji: "🔎", fala: "Veja as palavras ao redor. Elas dão pistas pro significado." },
    { kind: "concept", titulo: "Faça um desenho mental", emoji: "🖼️", fala: "Imagine a cena na cabeça. Isso ajuda a sentir o sentido." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Olhar as palavras perto", "Imaginar a cena", "Adivinhar com pistas"], fala: "Detetive das palavras!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const LP14: KidsLesson[] = [
  mk("EF02LP14", "Sinais de pontuação", "Língua Portuguesa", "pink", [
    { kind: "intro", mascot: "pipa", titulo: "Pontinhos importantes", fala: "Os sinais ajudam a entender se é frase, pergunta ou surpresa!" },
    { kind: "concept", titulo: "Ponto final", simbolo: ".", fala: "Termina a frase. Faz uma pausa maior. 'O gato dormiu.'" },
    { kind: "concept", titulo: "Vírgula", simbolo: ",", fala: "Pequena pausa. Serve pra separar coisas. 'Comprei maçã, banana e uva.'" },
    { kind: "concept", titulo: "Interrogação", simbolo: "?", fala: "Mostra que é pergunta. 'Você quer água?'" },
    { kind: "concept", titulo: "Exclamação", simbolo: "!", fala: "Mostra emoção, susto ou alegria. 'Que legal!'" },
    { kind: "usecase", titulo: "Leia em voz alta", cenas: [
      { emoji: "🤔", texto: "?: voz subindo" },
      { emoji: "🎉", texto: "!: voz com força" },
      { emoji: "🛑", texto: ".: parar" },
    ], fala: "Cada sinal muda o jeito de falar." },
    { kind: "summary", titulo: "Você aprendeu!", itens: [". finaliza", ", separa", "? pergunta", "! emociona"], fala: "Frases com tempero!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

// ---------------------------------------------------------------------------
// CIÊNCIAS — EF02CI01..EF02CI08
// ---------------------------------------------------------------------------

const CI01: KidsLesson[] = [
  mk("EF02CI01", "De que é feito?", "Ciências", "green", [
    { kind: "intro", mascot: "pip", titulo: "Tudo tem material", fala: "Cada objeto da nossa casa foi feito de um material. Vamos descobrir quais?" },
    { kind: "concept", titulo: "Madeira", emoji: "🪵", fala: "Madeira vem das árvores. Mesa, cadeira e lápis costumam ter madeira." },
    { kind: "concept", titulo: "Metal", emoji: "🔩", fala: "Metal é duro e brilhante. Talher, panela e chave são de metal." },
    { kind: "concept", titulo: "Vidro", emoji: "🪟", fala: "Vidro é transparente, deixa a luz passar. Janela e copo." },
    { kind: "concept", titulo: "Plástico", emoji: "🧴", fala: "Plástico é leve, dá pra moldar de várias formas. Brinquedos, garrafas, embalagens." },
    { kind: "concept", titulo: "Tecido", emoji: "👕", fala: "Tecido vem do algodão ou de fibras. Roupa, lençol, cortina." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Madeira, metal, vidro", "Plástico e tecido", "Cada material tem uso"], fala: "Cientista observador!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const CI02: KidsLesson[] = [
  mk("EF02CI02", "Escolhendo o material certo", "Ciências", "green", [
    { kind: "intro", mascot: "pipa", titulo: "Qual material usar?", fala: "Cada material serve melhor pra uma coisa. Olha só!" },
    { kind: "concept", titulo: "Pra ver", emoji: "🪟", fala: "Janela precisa ser transparente. Por isso usa vidro." },
    { kind: "concept", titulo: "Pra esquentar", emoji: "🍳", fala: "Panela precisa aguentar fogo. Metal é perfeito." },
    { kind: "concept", titulo: "Pra agasalhar", emoji: "🧥", fala: "Casaco precisa ser quentinho. Tecido grosso e macio." },
    { kind: "concept", titulo: "Pra brincar", emoji: "🧸", fala: "Brinquedo de bebê precisa ser macio. Plástico macio ou pelúcia." },
    { kind: "concept", titulo: "Pensar antes", emoji: "💡", fala: "Antes de fabricar, a gente pensa: pra que serve? E escolhe o material." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Cada material tem função", "Pensar no uso primeiro", "Escolher o melhor"], fala: "Engenheiro pequeno!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const CI03: KidsLesson[] = [
  mk("EF02CI03", "Cuidado em casa!", "Ciências", "amber", [
    { kind: "intro", mascot: "pip", titulo: "Vamos nos cuidar?", fala: "Em casa também acontece acidente. Aprender a evitar é importante." },
    { kind: "concept", titulo: "Fogão", emoji: "🔥", fala: "Cuidado com fogo! Não chegue perto sem um adulto. O cabo da panela vira pra dentro." },
    { kind: "concept", titulo: "Tomada", emoji: "🔌", fala: "Nunca enfie objeto na tomada. Pode dar choque." },
    { kind: "concept", titulo: "Faca e tesoura", emoji: "🔪", fala: "Objetos cortantes só com adulto perto. E sempre apontando pra baixo." },
    { kind: "concept", titulo: "Remédio", emoji: "💊", fala: "Remédio não é doce. Só toma com adulto, na hora certa, na dose certa." },
    { kind: "concept", titulo: "Chão molhado", emoji: "💧", fala: "Chão molhado escorrega. Avise e limpe ou contorne com cuidado." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Fogão com adulto", "Tomada não brinca", "Cortante com cuidado", "Remédio só com adulto"], fala: "Mais segurança!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const CI04: KidsLesson[] = [
  mk("EF02CI04", "Plantas e bichos — diferenças", "Ciências", "green", [
    { kind: "intro", mascot: "pipa", titulo: "Olhe a natureza", fala: "Existem milhões de plantas e bichos. Cada um com tamanho, cor e jeito de viver." },
    { kind: "concept", titulo: "Tamanho", emoji: "📏", fala: "Tem bicho minúsculo (formiga) e gigante (elefante). Planta também: capim e árvore." },
    { kind: "concept", titulo: "Cor", emoji: "🌈", fala: "As cores ajudam a se camuflar ou chamar atenção. Sapinho colorido avisa que é venenoso." },
    { kind: "concept", titulo: "Onde mora", emoji: "🏞️", fala: "Peixe na água, pássaro no ar, cacto no deserto, samambaia na mata. Cada um no seu lugar." },
    { kind: "concept", titulo: "Fase da vida", emoji: "🥚", fala: "Tudo passa por fases: ovo, filhote, adulto. Plantas: semente, broto, planta grande." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Tamanho varia", "Cor tem função", "Cada um tem lugar", "Há fases"], fala: "Biólogo júnior!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const CI05: KidsLesson[] = [
  mk("EF02CI05", "Plantas precisam de água e luz", "Ciências", "green", [
    { kind: "intro", mascot: "pip", titulo: "O que planta come?", fala: "Plantas precisam de água e luz do sol pra viver e crescer. Vamos ver por quê." },
    { kind: "concept", titulo: "Água sobe pela raiz", emoji: "💧", fala: "A raiz suga a água da terra. A água sobe pelo caule e chega nas folhas." },
    { kind: "concept", titulo: "Luz vira comida", emoji: "🌞", fala: "Com a luz do sol, a folha transforma água em alimento. É mágica!" },
    { kind: "concept", titulo: "Sem água", emoji: "🥀", fala: "Se não rega, ela murcha. As folhas caem e a planta morre." },
    { kind: "concept", titulo: "Sem luz", emoji: "🌑", fala: "Sem sol, fica fraca e amarelada. Não consegue fazer alimento." },
    { kind: "concept", titulo: "Experimento", emoji: "🧪", fala: "Coloque uma planta no escuro e outra no sol. Veja a diferença em uma semana!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Água pela raiz", "Luz vira alimento", "Faltou? Planta sofre"], fala: "Cientista verde!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const CI06: KidsLesson[] = [
  mk("EF02CI06", "Partes da planta", "Ciências", "green", [
    { kind: "intro", mascot: "pipa", titulo: "Conheça a plantinha", fala: "Toda planta tem partes diferentes. Cada uma faz um trabalho." },
    { kind: "concept", titulo: "Raiz", emoji: "🌱", fala: "Fica debaixo da terra. Segura a planta e suga água e nutrientes." },
    { kind: "concept", titulo: "Caule", emoji: "🪴", fala: "É o tronquinho ou ramo. Leva a água da raiz pras folhas." },
    { kind: "concept", titulo: "Folha", emoji: "🍃", fala: "Onde a planta faz alimento, usando luz do sol." },
    { kind: "concept", titulo: "Flor", emoji: "🌸", fala: "A flor é a parte bonita. Atrai abelha pra ajudar a fazer fruto." },
    { kind: "concept", titulo: "Fruto", emoji: "🍎", fala: "Dentro do fruto tem semente. A semente cria outra planta." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Raiz, caule, folha", "Flor e fruto", "Cada um tem função"], fala: "Botânico de primeira!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const CI07: KidsLesson[] = [
  mk("EF02CI07", "Sol e sombra ao longo do dia", "Ciências", "amber", [
    { kind: "intro", mascot: "pip", titulo: "Observe a sombra!", fala: "Durante o dia o sol muda de lugar. A sombra também muda." },
    { kind: "concept", titulo: "De manhã", emoji: "🌅", fala: "O sol nasce baixinho. A sombra fica grande e estica pra um lado." },
    { kind: "concept", titulo: "Meio-dia", emoji: "☀️", fala: "O sol fica bem alto, em cima da nossa cabeça. A sombra fica pequenininha." },
    { kind: "concept", titulo: "De tarde", emoji: "🌇", fala: "O sol desce do outro lado. A sombra cresce de novo, esticando pro lado contrário." },
    { kind: "concept", titulo: "Experimento", emoji: "✏️", fala: "Plante um lápis num chão liso. De manhã, ao meio-dia e à tarde, marque a sombra. Olha a diferença!" },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Manhã: sombra grande", "Meio-dia: pequena", "Tarde: cresce outro lado"], fala: "Astrônomo de plantão!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

const CI08: KidsLesson[] = [
  mk("EF02CI08", "Sol esquenta diferente cada coisa", "Ciências", "amber", [
    { kind: "intro", mascot: "pipa", titulo: "Tudo esquenta igual?", fala: "Não! O sol esquenta cada coisa de um jeito. Vamos descobrir!" },
    { kind: "concept", titulo: "Água", emoji: "💧", fala: "Água esquenta devagarinho e demora pra esfriar. Por isso a praia é gostosa de tarde!" },
    { kind: "concept", titulo: "Asfalto", emoji: "🛣️", fala: "Asfalto preto pega muito calor. Por isso queima o pé no sol." },
    { kind: "concept", titulo: "Areia", emoji: "🏖️", fala: "Areia esquenta rápido. Esfria rápido também à noite." },
    { kind: "concept", titulo: "Roupa clara", emoji: "👕", fala: "Cor clara reflete o sol. Esquenta menos. Por isso no calor a gente usa branco." },
    { kind: "concept", titulo: "Roupa escura", emoji: "🖤", fala: "Cor escura absorve o sol. Esquenta mais." },
    { kind: "summary", titulo: "Você aprendeu!", itens: ["Cada material esquenta diferente", "Cor clara reflete", "Cor escura absorve"], fala: "Que descoberta!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cento e trinta de experiência." },
  ]),
];

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

const REGISTRY: Record<string, KidsLesson[]> = {
  EF02MA01: MA01, EF02MA02: MA02, EF02MA03: MA03, EF02MA04: MA04, EF02MA05: MA05,
  EF02MA06: MA06, EF02MA07: MA07, EF02MA08: MA08, EF02MA09: MA09, EF02MA10: MA10,
  EF02MA11: MA11, EF02MA12: MA12, EF02MA13: MA13, EF02MA14: MA14, EF02MA15: MA15,
  EF02MA16: MA16, EF02MA17: MA17, EF02MA18: MA18, EF02MA19: MA19, EF02MA20: MA20,
  EF02MA21: MA21, EF02MA22: MA22, EF02MA23: MA23,
  EF02LP01: LP01, EF02LP02: LP02, EF02LP03: LP03, EF02LP04: LP04, EF02LP05: LP05,
  EF02LP06: LP06, EF02LP07: LP07, EF02LP08: LP08, EF02LP09: LP09, EF02LP10: LP10,
  EF02LP11: LP11, EF02LP12: LP12, EF02LP13: LP13, EF02LP14: LP14,
  EF02CI01: CI01, EF02CI02: CI02, EF02CI03: CI03, EF02CI04: CI04,
  EF02CI05: CI05, EF02CI06: CI06, EF02CI07: CI07, EF02CI08: CI08,
};

export function getKidsLessons2Ano(codigo: string | undefined): KidsLesson[] {
  if (!codigo) return [];
  return REGISTRY[codigo] ?? [];
}
