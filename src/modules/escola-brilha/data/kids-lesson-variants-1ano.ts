import type { KidsLesson, KidsScene } from "../types/kids-lesson";

/**
 * Variações de aulas Kids do 1º Ano — organizadas por NÍVEL.
 * Cada código BNCC pode ter várias aulas progressivas, dando continuidade.
 * O player exibe um seletor de nível quando há mais de uma aula.
 */

// ───────── Builders ─────────

const numByExt = (n: number): string => {
  const m: Record<number, string> = {
    0: "zero", 1: "um", 2: "dois", 3: "três", 4: "quatro", 5: "cinco",
    6: "seis", 7: "sete", 8: "oito", 9: "nove", 10: "dez",
    11: "onze", 12: "doze", 13: "treze", 14: "quatorze", 15: "quinze",
    16: "dezesseis", 17: "dezessete", 18: "dezoito", 19: "dezenove", 20: "vinte",
  };
  return m[n] ?? String(n);
};

function buildAdd(nivel: number, pairs: [number, number][], objeto: string): KidsLesson {
  const titulo = `Mais — Nível ${nivel}`;
  const scenes: KidsScene[] = [
    { kind: "intro", mascot: nivel % 2 ? "pip" : "pipa", titulo: `Nível ${nivel}: vamos somar!`, fala: `Hoje vamos praticar a soma. Nível ${nivel}!` },
    { kind: "concept", titulo: "Lembrando o sinal de mais", simbolo: "+", fala: "O sinal de mais junta duas quantidades." },
  ];
  pairs.forEach(([a, b]) => {
    scenes.push({ kind: "step_count", titulo: `${a} + ${b}`, a, b, objeto, fala: `${numByExt(a)} em cima, ${numByExt(b)} embaixo.` });
    scenes.push({ kind: "step_join", titulo: "Juntando!", a, b, objeto, fala: `Vamos contar tudo: dá ${numByExt(a + b)}!` });
    scenes.push({ kind: "step_vertical_sum", titulo: "Conta escrita", a, b, fala: `${numByExt(a)} mais ${numByExt(b)} é igual a ${numByExt(a + b)}.` });
  });
  scenes.push({ kind: "practice_count", titulo: "Sua vez!", a: pairs[0][0], b: pairs[0][1], objeto, fala: "Toque em cada um e conte com a gente." });
  scenes.push({ kind: "summary", titulo: "Você aprendeu!", itens: pairs.map(([a, b]) => `${a} + ${b} = ${a + b}`), fala: "Mandou bem demais!" });
  scenes.push({ kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" });
  return { codigo_bncc: "EF01MA03", titulo, disciplina: "Matemática", serie: "1º Ano", xp: 100, cor: "blue", scenes };
}

function buildSub(nivel: number, pairs: [number, number][], objeto: string): KidsLesson {
  const titulo = `Menos — Nível ${nivel}`;
  const scenes: KidsScene[] = [
    { kind: "intro", mascot: nivel % 2 ? "pipa" : "pip", titulo: `Nível ${nivel}: vamos tirar!`, fala: `Hoje vamos praticar a subtração. Nível ${nivel}!` },
    { kind: "concept", titulo: "Lembrando o sinal de menos", simbolo: "−", fala: "O sinal de menos quer dizer tirar." },
  ];
  pairs.forEach(([a, b]) => {
    scenes.push({ kind: "step_subtract", titulo: `${a} − ${b}`, a, b, objeto, fala: `Tinha ${numByExt(a)}. Vou tirar ${numByExt(b)}. Sobraram ${numByExt(a - b)}!` });
    scenes.push({ kind: "step_vertical_sub", titulo: "Conta escrita", a, b, fala: `${numByExt(a)} menos ${numByExt(b)} é igual a ${numByExt(a - b)}.` });
  });
  scenes.push({ kind: "summary", titulo: "Você aprendeu!", itens: pairs.map(([a, b]) => `${a} − ${b} = ${a - b}`), fala: "Show de bola!" });
  scenes.push({ kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" });
  return { codigo_bncc: "EF01MA03", titulo, disciplina: "Matemática", serie: "1º Ano", xp: 100, cor: "violet", scenes };
}

function buildEqual(nivel: number, nums: number[], objeto: string): KidsLesson {
  const titulo = `Igual — Nível ${nivel}`;
  const scenes: KidsScene[] = [
    { kind: "intro", mascot: nivel % 2 ? "pip" : "pipa", titulo: `Nível ${nivel}: quando são iguais?`, fala: "Quando dois grupos têm a mesma quantidade, dizemos que são iguais." },
    { kind: "concept", titulo: "Sinal de igual", simbolo: "=", fala: "O sinal de igual mostra que os dois lados têm a mesma quantidade." },
    { kind: "concept", titulo: "Como ler o sinal", simbolo: "= ", emoji: "👀", fala: "A gente lê assim: 'é igual a'. Os dois lados pesam o mesmo." },
    { kind: "concept", titulo: "Quando NÃO é igual", emoji: "⚖️", fala: "Se um lado tem mais, não é igual. Se tem menos, também não é igual." },
  ];
  nums.forEach((n) => {
    scenes.push({ kind: "step_equal", titulo: `${n} = ${n}`, n, objeto, fala: `${numByExt(n)} de um lado, ${numByExt(n)} do outro. Iguais!` });
  });
  scenes.push({ kind: "concept", titulo: "Vamos relembrar", emoji: "🔁", fala: "Igual quer dizer mesma quantidade dos dois lados." });
  scenes.push({ kind: "summary", titulo: "Você aprendeu!", itens: nums.map((n) => `${n} = ${n}`), fala: "Você é demais!" });
  scenes.push({ kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" });
  return { codigo_bncc: "EF01MA03", titulo, disciplina: "Matemática", serie: "1º Ano", xp: 100, cor: "green", scenes };
}

function buildCount(codigo: string, nivel: number, ate: number, objeto: string): KidsLesson {
  const halfA = Math.min(10, Math.ceil(ate / 2));
  const halfB = ate - halfA;
  return {
    codigo_bncc: codigo,
    titulo: `Contar até ${ate} — Nível ${nivel}`,
    disciplina: "Matemática",
    serie: "1º Ano",
    xp: 100,
    cor: "blue",
    scenes: [
      { kind: "intro", mascot: nivel % 2 ? "pip" : "pipa", titulo: `Nível ${nivel}: contar até ${ate}`, fala: `Vamos contar passo a passo até ${numByExt(ate)}.` },
      { kind: "concept", titulo: `Meta: ${ate}`, simbolo: String(ate), fala: `Hoje a missão é chegar até ${numByExt(ate)} sem pular nenhum número.` },
      { kind: "concept", titulo: "Como contar direito", emoji: "👉", fala: "Aponte com o dedinho e fale o número em voz alta, um de cada vez." },
      { kind: "concept", titulo: "Sem pular!", emoji: "🚫", fala: "Se pular um número, a conta sai errada. Vai devagar, um por um." },
      { kind: "step_count", titulo: `Primeira parte: ${halfA}`, a: halfA, b: 0, objeto, fala: `Vamos começar contando ${numByExt(halfA)}.` },
      { kind: "step_join", titulo: `Agora até ${ate}`, a: halfA, b: halfB, objeto, fala: `Continuando até ${numByExt(ate)}.` },
      { kind: "concept", titulo: "Olha como ficou!", emoji: "🎯", fala: `Contamos do um até ${numByExt(ate)}. Cada número veio na ordem certa.` },
      { kind: "practice_count", titulo: "Sua vez!", a: Math.min(5, ate), b: Math.min(3, Math.max(0, ate - 5)), objeto, fala: "Toque em cada um e conte com a gente." },
      { kind: "summary", titulo: "Você aprendeu!", itens: [`Contar até ${ate}`, "Sem pular números", "Um de cada vez"], fala: "Muito bem!" },
      { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" },
    ],
  };
}

// ───────── Variantes ─────────

const EF01MA03_VARIANTS: KidsLesson[] = [
  // 4 aulas de MAIS
  buildAdd(1, [[1, 1], [2, 1], [1, 2]], "🍎"),
  buildAdd(2, [[2, 2], [3, 1], [2, 3]], "🍓"),
  buildAdd(3, [[3, 2], [4, 1], [3, 3]], "🧸"),
  buildAdd(4, [[4, 3], [5, 2], [4, 4]], "⭐"),
  // 4 aulas de MENOS
  buildSub(1, [[2, 1], [3, 1], [3, 2]], "🍎"),
  buildSub(2, [[4, 1], [4, 2], [4, 3]], "🍊"),
  buildSub(3, [[5, 2], [6, 3], [6, 2]], "🍇"),
  buildSub(4, [[7, 3], [8, 4], [9, 5]], "🍪"),
  // 4 aulas de IGUAL
  buildEqual(1, [1, 2], "🍎"),
  buildEqual(2, [3, 4], "🍓"),
  buildEqual(3, [5, 6], "⭐"),
  buildEqual(4, [7, 8], "🎈"),
];

const EF01MA01_VARIANTS: KidsLesson[] = [
  buildCount("EF01MA01", 1, 10, "🟢"),
  buildCount("EF01MA01", 2, 15, "🟡"),
  buildCount("EF01MA01", 3, 20, "🔵"),
];

const EF01MA04_VARIANTS: KidsLesson[] = [
  buildCount("EF01MA04", 1, 25, "🔵"),
  buildCount("EF01MA04", 2, 50, "🟢"),
  buildCount("EF01MA04", 3, 75, "🟡"),
  buildCount("EF01MA04", 4, 100, "🟣"),
];

const EF01MA06_VARIANTS: KidsLesson[] = [
  { ...buildAdd(1, [[1, 1], [2, 1]], "🍓"), codigo_bncc: "EF01MA06", titulo: "Adição até 10 — Nível 1" },
  { ...buildAdd(2, [[2, 2], [3, 2]], "🍎"), codigo_bncc: "EF01MA06", titulo: "Adição até 10 — Nível 2" },
  { ...buildAdd(3, [[3, 3], [4, 3]], "🍇"), codigo_bncc: "EF01MA06", titulo: "Adição até 10 — Nível 3" },
  { ...buildAdd(4, [[5, 4], [4, 5]], "⭐"), codigo_bncc: "EF01MA06", titulo: "Adição até 10 — Nível 4" },
];

const EF01MA08_VARIANTS: KidsLesson[] = [
  { ...buildSub(1, [[2, 1], [3, 1]], "🍎"), codigo_bncc: "EF01MA08", titulo: "Subtração até 10 — Nível 1" },
  { ...buildSub(2, [[4, 2], [5, 2]], "🍊"), codigo_bncc: "EF01MA08", titulo: "Subtração até 10 — Nível 2" },
  { ...buildSub(3, [[6, 3], [7, 3]], "🍇"), codigo_bncc: "EF01MA08", titulo: "Subtração até 10 — Nível 3" },
  { ...buildSub(4, [[8, 4], [9, 5]], "🍪"), codigo_bncc: "EF01MA08", titulo: "Subtração até 10 — Nível 4" },
];

// ───────── Builders para conteúdo conceitual ─────────

function buildConcept(
  codigo: string,
  cor: KidsLesson["cor"],
  nivel: number,
  titulo: string,
  intro: string,
  itens: { titulo: string; simbolo?: string; emoji?: string; fala: string }[],
  resumo: string[],
): KidsLesson {
  const scenes: KidsScene[] = [
    { kind: "intro", mascot: nivel % 2 ? "pip" : "pipa", titulo, fala: intro },
    ...itens.map((it) => ({
      kind: "concept" as const,
      titulo: it.titulo,
      simbolo: it.simbolo,
      emoji: it.emoji,
      fala: it.fala,
    })),
    { kind: "summary", titulo: "Você aprendeu!", itens: resumo, fala: "Mandou muito bem!" },
    { kind: "celebrate", titulo: "Parabéns!", fala: "Você ganhou cem pontinhos!" },
  ];
  return { codigo_bncc: codigo, titulo, disciplina: "Matemática", serie: "1º Ano", xp: 100, cor, scenes };
}

// ───────── MA02 — Números até 30 ─────────
const EF01MA02_VARIANTS: KidsLesson[] = [
  buildCount("EF01MA02", 1, 22, "🟡"),
  buildCount("EF01MA02", 2, 25, "🟢"),
  buildCount("EF01MA02", 3, 28, "🔵"),
  buildCount("EF01MA02", 4, 30, "🟣"),
];

// ───────── MA05 — Maior / Menor / Igual ─────────
function buildCompare(nivel: number, a: number, b: number, objeto: string): KidsLesson {
  const titulo = `Comparar — Nível ${nivel}`;
  const maior = a > b ? a : b;
  const menor = a > b ? b : a;
  return {
    codigo_bncc: "EF01MA05",
    titulo,
    disciplina: "Matemática",
    serie: "1º Ano",
    xp: 100,
    cor: "blue",
    scenes: [
      { kind: "intro", mascot: nivel % 2 ? "pip" : "pipa", titulo: `Nível ${nivel}: quem tem mais?`, fala: "Vamos comparar dois grupos." },
      { kind: "concept", titulo: "Maior tem mais", simbolo: ">", fala: "Quem tem mais coisas é o maior." },
      { kind: "step_count", titulo: `${a} e ${b}`, a, b, objeto, fala: `Em cima ${numByExt(a)}, embaixo ${numByExt(b)}. O maior é ${numByExt(maior)}.` },
      { kind: "step_equal", titulo: `${menor} = ${menor}`, n: menor, objeto, fala: "Quando os dois lados têm a mesma quantidade, são iguais." },
      { kind: "summary", titulo: "Você aprendeu!", itens: [`${maior} é maior que ${menor}`, `${menor} é menor que ${maior}`, "Igual = mesma quantidade"], fala: "Show!" },
      { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
    ],
  };
}
const EF01MA05_VARIANTS: KidsLesson[] = [
  buildCompare(1, 3, 1, "🍎"),
  buildCompare(2, 5, 3, "🍊"),
  buildCompare(3, 7, 4, "🍇"),
  buildCompare(4, 9, 6, "⭐"),
];

// ───────── MA07 — Dezena e unidade ─────────
function buildDezUni(nivel: number, dez: number, uni: number): KidsLesson {
  const total = dez * 10 + uni;
  return {
    codigo_bncc: "EF01MA07",
    titulo: `Dezena e unidade — Nível ${nivel}`,
    disciplina: "Matemática",
    serie: "1º Ano",
    xp: 100,
    cor: "blue",
    scenes: [
      { kind: "intro", mascot: nivel % 2 ? "pipa" : "pip", titulo: `Nível ${nivel}: formar números`, fala: "Vamos juntar dezenas e unidades pra formar números." },
      { kind: "concept", titulo: `${dez} ${dez === 1 ? "dezena" : "dezenas"}`, simbolo: String(dez * 10), fala: `${numByExt(dez)} ${dez === 1 ? "pacotinho" : "pacotinhos"} de dez.` },
      { kind: "concept", titulo: `${uni} ${uni === 1 ? "unidade" : "unidades"}`, simbolo: String(uni), fala: `Mais ${numByExt(uni)} ${uni === 1 ? "soltinha" : "soltinhas"}.` },
      { kind: "step_vertical_sum", titulo: "Juntando", a: dez * 10, b: uni, fala: `${numByExt(dez * 10)} mais ${numByExt(uni)} dá ${numByExt(total)}.` },
      { kind: "summary", titulo: "Você aprendeu!", itens: [`${dez * 10} + ${uni} = ${total}`, "Dezena = grupo de 10", "Unidade = soltinha"], fala: "Muito bem!" },
      { kind: "celebrate", titulo: "Parabéns!", fala: "Ganhou cem!" },
    ],
  };
}
const EF01MA07_VARIANTS: KidsLesson[] = [
  buildDezUni(1, 1, 0),
  buildDezUni(2, 1, 5),
  buildDezUni(3, 2, 3),
  buildDezUni(4, 3, 7),
];

// ───────── MA09 — Organizar ─────────
const EF01MA09_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA09", "violet", 1, "Organizar por cor — Nível 1", "Vamos juntar o que tem a mesma cor.",
    [
      { titulo: "Vermelhos", emoji: "🟥", fala: "Todos os vermelhos ficam juntos." },
      { titulo: "Azuis", emoji: "🟦", fala: "Todos os azuis ficam juntos." },
      { titulo: "Amarelos", emoji: "🟨", fala: "Todos os amarelos ficam juntos." },
    ],
    ["Separar por cor", "Mesma cor no mesmo grupo", "Cada grupo bem organizado"]),
  buildConcept("EF01MA09", "violet", 2, "Organizar por forma — Nível 2", "Agora vamos juntar pela forma.",
    [
      { titulo: "Círculos", emoji: "⭕", fala: "Todos os círculos juntos." },
      { titulo: "Quadrados", emoji: "🟦", fala: "Todos os quadrados juntos." },
      { titulo: "Triângulos", emoji: "🔺", fala: "Todos os triângulos juntos." },
    ],
    ["Mesma forma = mesmo grupo", "Olhar o contorno", "Não importa a cor"]),
  buildConcept("EF01MA09", "violet", 3, "Organizar por tamanho — Nível 3", "Agora pelo tamanho!",
    [
      { titulo: "Grandes", emoji: "🐘", fala: "Os grandes ficam de um lado." },
      { titulo: "Médios", emoji: "🐶", fala: "Os médios no meio." },
      { titulo: "Pequenos", emoji: "🐭", fala: "Os pequenos do outro lado." },
    ],
    ["Comparar tamanho", "Grande, médio, pequeno", "Ordem do maior pro menor"]),
  buildConcept("EF01MA09", "violet", 4, "Organizar misturando — Nível 4", "Vamos usar duas características ao mesmo tempo.",
    [
      { titulo: "Cor + forma", emoji: "🟥", fala: "Quadrados vermelhos juntos." },
      { titulo: "Cor + tamanho", emoji: "🟦", fala: "Azuis grandes juntos." },
      { titulo: "Forma + tamanho", emoji: "⭕", fala: "Círculos pequenos juntos." },
    ],
    ["Duas regras ao mesmo tempo", "Olhar bem cada peça", "Organizar é pensar"]),
];

// ───────── MA10 — Sequências e padrões ─────────
const EF01MA10_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA10", "violet", 1, "Padrão AB — Nível 1", "O padrão mais simples: dois itens se alternando.",
    [
      { titulo: "Olha o padrão", simbolo: "🔴🔵🔴🔵", fala: "Vermelho, azul, vermelho, azul…" },
      { titulo: "Qual vem agora?", simbolo: "🔴", fala: "Vermelho! Porque ele se repete." },
      { titulo: "Mais um exemplo", simbolo: "🌞🌙🌞🌙", fala: "Dia, noite, dia, noite." },
    ],
    ["Padrão AB", "Dois itens se alternam", "O próximo é o primeiro de novo"]),
  buildConcept("EF01MA10", "violet", 2, "Padrão ABC — Nível 2", "Agora três itens em sequência.",
    [
      { titulo: "Padrão de 3", simbolo: "🔴🔵🟡🔴🔵🟡", fala: "Vermelho, azul, amarelo, e repete." },
      { titulo: "Qual vem?", simbolo: "🔴", fala: "Volta pro vermelho." },
      { titulo: "Outro exemplo", simbolo: "🍎🍊🍇", fala: "Maçã, laranja, uva, e repete." },
    ],
    ["Padrão ABC", "Três itens", "Depois repete tudo"]),
  buildConcept("EF01MA10", "violet", 3, "Padrão AABB — Nível 3", "Dois iguais, depois dois diferentes.",
    [
      { titulo: "Olha bem", simbolo: "🔴🔴🔵🔵🔴🔴🔵🔵", fala: "Dois vermelhos, dois azuis, e repete." },
      { titulo: "Qual vem?", simbolo: "🔴🔴", fala: "Mais dois vermelhos." },
      { titulo: "Em formas", simbolo: "⭐⭐🌙🌙", fala: "Duas estrelas, duas luas." },
    ],
    ["Padrão AABB", "Pares se alternando", "Sempre observar a regra"]),
  buildConcept("EF01MA10", "violet", 4, "Crie seu padrão — Nível 4", "Agora você inventa um padrão!",
    [
      { titulo: "Ideia 1", simbolo: "❤️💚❤️💚", fala: "Coração vermelho, verde, e repete." },
      { titulo: "Ideia 2", simbolo: "🐱🐶🐱🐶", fala: "Gato, cachorro, gato, cachorro." },
      { titulo: "Ideia 3", simbolo: "👏👏✋👏👏✋", fala: "Dois palminhas, uma mão aberta." },
    ],
    ["Inventar padrões", "Repetir a regra", "Padrão tem que ser claro"]),
];

// ───────── MA11 — Frente, atrás, direita, esquerda ─────────
const EF01MA11_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA11", "amber", 1, "Frente e atrás — Nível 1", "Vamos usar o nosso corpo.",
    [
      { titulo: "Frente", emoji: "👆", fala: "Frente é pra onde você olha." },
      { titulo: "Atrás", emoji: "👇", fala: "Atrás é o que está nas suas costas." },
    ],
    ["Frente = onde olho", "Atrás = costas"]),
  buildConcept("EF01MA11", "amber", 2, "Direita e esquerda — Nível 2", "Agora os lados.",
    [
      { titulo: "Direita", emoji: "➡️", fala: "É o lado da mão com que você escreve." },
      { titulo: "Esquerda", emoji: "⬅️", fala: "É o outro lado." },
    ],
    ["Direita e esquerda", "Cada mão um lado"]),
  buildConcept("EF01MA11", "amber", 3, "Todos juntos — Nível 3", "Vamos misturar tudo.",
    [
      { titulo: "Frente", emoji: "👆", fala: "Pra onde olho." },
      { titulo: "Atrás", emoji: "👇", fala: "Nas costas." },
      { titulo: "Direita", emoji: "➡️", fala: "Um lado." },
      { titulo: "Esquerda", emoji: "⬅️", fala: "Outro lado." },
    ],
    ["Quatro direções", "Frente, atrás, direita, esquerda"]),
  buildConcept("EF01MA11", "amber", 4, "Brincando — Nível 4", "Vamos imaginar movimentos.",
    [
      { titulo: "Pula pra frente", emoji: "🦘", fala: "Um pulinho pra frente!" },
      { titulo: "Vira pra direita", emoji: "↪️", fala: "Gira pro lado da mão de escrever." },
      { titulo: "Volta atrás", emoji: "🔙", fala: "Dá um passo pra trás." },
    ],
    ["Brincar usando direções", "Mover o corpo", "Sempre saber onde estou"]),
];

// ───────── MA12 — Localização com referência ─────────
const EF01MA12_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA12", "amber", 1, "Em cima e embaixo — Nível 1", "Vamos dizer onde as coisas estão.",
    [
      { titulo: "Em cima", emoji: "⬆️", fala: "O livro está em cima da mesa." },
      { titulo: "Embaixo", emoji: "⬇️", fala: "O gato está embaixo da cadeira." },
    ],
    ["Em cima e embaixo", "Sempre comparando com outra coisa"]),
  buildConcept("EF01MA12", "amber", 2, "Do lado e entre — Nível 2", "Agora outras posições.",
    [
      { titulo: "Do lado", emoji: "↔️", fala: "A bola está do lado da caixa." },
      { titulo: "Entre", emoji: "⏸️", fala: "O ursinho está entre os dois livros." },
    ],
    ["Do lado", "Entre dois objetos"]),
  buildConcept("EF01MA12", "amber", 3, "Dentro e fora — Nível 3", "Vamos ver dentro e fora.",
    [
      { titulo: "Dentro", emoji: "📦", fala: "O brinquedo está dentro da caixa." },
      { titulo: "Fora", emoji: "🎈", fala: "O balão está fora da caixa." },
    ],
    ["Dentro e fora", "Ponto de referência sempre"]),
  buildConcept("EF01MA12", "amber", 4, "Tudo junto — Nível 4", "Agora misturado!",
    [
      { titulo: "Em cima", emoji: "⬆️", fala: "Em cima do armário." },
      { titulo: "Dentro", emoji: "📦", fala: "Dentro da gaveta." },
      { titulo: "Do lado", emoji: "↔️", fala: "Do lado da janela." },
    ],
    ["Várias posições", "Sempre com referência", "Dizer onde está claramente"]),
];

// ───────── MA13 — Sólidos geométricos ─────────
const EF01MA13_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA13", "green", 1, "Esfera — Nível 1", "Vamos conhecer a esfera.",
    [
      { titulo: "É redondinha", emoji: "⚽", fala: "A bola é uma esfera." },
      { titulo: "No dia a dia", emoji: "🌍", fala: "O planeta Terra também é uma esfera." },
    ],
    ["Esfera = redonda", "Rola pra todo lado"]),
  buildConcept("EF01MA13", "green", 2, "Cubo — Nível 2", "Agora o cubo.",
    [
      { titulo: "Seis lados iguais", emoji: "🎲", fala: "O dado é um cubo." },
      { titulo: "Outros cubos", emoji: "📦", fala: "Caixinhas também são cubos." },
    ],
    ["Cubo = 6 lados quadrados", "Não rola"]),
  buildConcept("EF01MA13", "green", 3, "Cilindro — Nível 3", "Agora o cilindro.",
    [
      { titulo: "Como um tubo", emoji: "🥫", fala: "A latinha é um cilindro." },
      { titulo: "Mais exemplos", emoji: "🥤", fala: "O copo também é um cilindro." },
    ],
    ["Cilindro = tubo", "Rola pro lado só"]),
  buildConcept("EF01MA13", "green", 4, "Cone — Nível 4", "Por último, o cone.",
    [
      { titulo: "Termina em ponta", emoji: "🍦", fala: "A casquinha de sorvete é um cone." },
      { titulo: "Mais exemplos", emoji: "🎩", fala: "O chapéu de festa também é um cone." },
    ],
    ["Cone = base + ponta", "Acaba bem fino em cima"]),
];

// ───────── MA14 — Figuras planas ─────────
const EF01MA14_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA14", "green", 1, "Círculo — Nível 1", "A figura mais redondinha de todas.",
    [
      { titulo: "Sem cantos", emoji: "⚪", fala: "O círculo é redondo, não tem cantos." },
      { titulo: "Exemplos", emoji: "🌞", fala: "O sol e a lua cheia são círculos." },
    ],
    ["Círculo = sem cantos", "Tudo redondinho"]),
  buildConcept("EF01MA14", "green", 2, "Quadrado — Nível 2", "Quatro lados iguais.",
    [
      { titulo: "Lados iguais", emoji: "🟦", fala: "Todos os quatro lados têm o mesmo tamanho." },
      { titulo: "Exemplos", emoji: "🧇", fala: "O wafer e a janelinha quadrada são exemplos." },
    ],
    ["Quadrado = 4 lados iguais", "4 cantos"]),
  buildConcept("EF01MA14", "green", 3, "Retângulo — Nível 3", "Dois lados maiores, dois menores.",
    [
      { titulo: "Comprido", emoji: "▬", fala: "Tem dois lados maiores e dois menores." },
      { titulo: "Exemplos", emoji: "🚪", fala: "Porta, livro, celular: retângulos." },
    ],
    ["Retângulo = comprido", "Dois lados maiores"]),
  buildConcept("EF01MA14", "green", 4, "Triângulo — Nível 4", "Três pontas e três lados.",
    [
      { titulo: "Três pontas", emoji: "🔺", fala: "O triângulo tem três pontas." },
      { titulo: "Exemplos", emoji: "🍕", fala: "Uma fatia de pizza é triangular." },
    ],
    ["Triângulo = 3 lados", "3 cantos"]),
];

// ───────── MA15 — Comparar medidas ─────────
const EF01MA15_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA15", "amber", 1, "Alto e baixo — Nível 1", "Vamos comparar alturas.",
    [
      { titulo: "Alto", emoji: "🏢", fala: "O prédio é alto." },
      { titulo: "Baixo", emoji: "🏠", fala: "A casinha é baixa." },
    ],
    ["Alto vs baixo", "Comparar altura"]),
  buildConcept("EF01MA15", "amber", 2, "Comprido e curto — Nível 2", "Agora comprimento.",
    [
      { titulo: "Comprido", emoji: "📏", fala: "A régua é comprida." },
      { titulo: "Curto", emoji: "✏️", fala: "O lápis usado é curto." },
    ],
    ["Comprido vs curto", "Olhar o tamanho"]),
  buildConcept("EF01MA15", "amber", 3, "Pesado e leve — Nível 3", "Comparando peso.",
    [
      { titulo: "Pesado", emoji: "🐘", fala: "O elefante é pesado." },
      { titulo: "Leve", emoji: "🪶", fala: "A pena é leve." },
    ],
    ["Pesado vs leve", "Sentir o peso"]),
  buildConcept("EF01MA15", "amber", 4, "Grande e pequeno — Nível 4", "Agora tamanho.",
    [
      { titulo: "Grande", emoji: "🐳", fala: "A baleia é gigante." },
      { titulo: "Pequeno", emoji: "🐜", fala: "A formiguinha é pequenininha." },
    ],
    ["Grande vs pequeno", "Comparar tudo: altura, peso, tamanho"]),
];

// ───────── MA16 — Ordem dos acontecimentos ─────────
const EF01MA16_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA16", "amber", 1, "Primeiro — Nível 1", "Tudo tem um começo.",
    [
      { titulo: "Acordar", emoji: "🌅", fala: "De manhã, primeiro a gente acorda." },
      { titulo: "Escovar", emoji: "🪥", fala: "Depois de acordar, escovar os dentes." },
    ],
    ["Primeiro = começo", "O que vem antes"]),
  buildConcept("EF01MA16", "amber", 2, "Depois — Nível 2", "O meio das coisas.",
    [
      { titulo: "Tomar café", emoji: "🥞", fala: "Depois de acordar, café da manhã." },
      { titulo: "Ir pra escola", emoji: "🏫", fala: "Depois do café, escola." },
    ],
    ["Depois = meio", "O que vem em seguida"]),
  buildConcept("EF01MA16", "amber", 3, "Por último — Nível 3", "O fim.",
    [
      { titulo: "Jantar", emoji: "🍝", fala: "À noite, jantar." },
      { titulo: "Dormir", emoji: "🛏️", fala: "Por último, dormir." },
    ],
    ["Por último = fim", "O que vem no final"]),
  buildConcept("EF01MA16", "amber", 4, "Dia inteiro — Nível 4", "Tudo em ordem.",
    [
      { titulo: "Manhã", emoji: "🌅", fala: "Acordar, café, escola." },
      { titulo: "Tarde", emoji: "☀️", fala: "Almoço, brincar, lição." },
      { titulo: "Noite", emoji: "🌙", fala: "Jantar, banho, dormir." },
    ],
    ["Dia inteiro em ordem", "Manhã, tarde, noite", "Tudo tem hora"]),
];

// ───────── MA17 — Semana, mês e calendário ─────────
const EF01MA17_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA17", "amber", 1, "Dias da semana — Nível 1", "A semana tem 7 dias.",
    [
      { titulo: "Dias úteis", simbolo: "5", fala: "Segunda, terça, quarta, quinta, sexta." },
      { titulo: "Fim de semana", simbolo: "2", fala: "Sábado e domingo." },
    ],
    ["7 dias na semana", "5 úteis + 2 de fim de semana"]),
  buildConcept("EF01MA17", "amber", 2, "Meses do ano — Nível 2", "O ano tem 12 meses.",
    [
      { titulo: "Começo do ano", simbolo: "1-4", fala: "Janeiro, fevereiro, março, abril." },
      { titulo: "Meio", simbolo: "5-8", fala: "Maio, junho, julho, agosto." },
      { titulo: "Final", simbolo: "9-12", fala: "Setembro, outubro, novembro, dezembro." },
    ],
    ["12 meses no ano", "Começa em janeiro", "Termina em dezembro"]),
  buildConcept("EF01MA17", "amber", 3, "Períodos do dia — Nível 3", "O dia tem manhã, tarde e noite.",
    [
      { titulo: "Manhã", emoji: "🌅", fala: "Do nascer do sol até o almoço." },
      { titulo: "Tarde", emoji: "☀️", fala: "Do almoço até o pôr do sol." },
      { titulo: "Noite", emoji: "🌙", fala: "Depois que escurece." },
    ],
    ["Manhã", "Tarde", "Noite"]),
  buildConcept("EF01MA17", "amber", 4, "Calendário — Nível 4", "Tudo organizado no calendário.",
    [
      { titulo: "Mês inteiro", emoji: "📅", fala: "O calendário mostra todos os dias do mês." },
      { titulo: "Semanas", emoji: "🗓️", fala: "Cada linha é uma semana." },
      { titulo: "Datas especiais", emoji: "🎉", fala: "Marcamos aniversários e feriados." },
    ],
    ["Calendário organiza o ano", "Linhas = semanas", "Marcar dias importantes"]),
];

// ───────── MA18 — Escrever datas ─────────
const EF01MA18_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA18", "amber", 1, "Dia — Nível 1", "Toda data começa com o dia.",
    [
      { titulo: "Número do dia", simbolo: "15", fala: "É o número que aparece no calendário." },
      { titulo: "Vai de 1 a 31", simbolo: "1-31", fala: "Os meses têm 28, 30 ou 31 dias." },
    ],
    ["Dia = número do calendário", "De 1 a 31"]),
  buildConcept("EF01MA18", "amber", 2, "Mês — Nível 2", "Depois vem o mês.",
    [
      { titulo: "Número do mês", simbolo: "03", fala: "Março é o 3, junho é o 6." },
      { titulo: "Sempre dois dígitos", simbolo: "07", fala: "Julho a gente escreve zero-sete." },
    ],
    ["Mês = número 1 a 12", "Escrever com 2 dígitos"]),
  buildConcept("EF01MA18", "amber", 3, "Ano — Nível 3", "O número grande no final.",
    [
      { titulo: "Quatro dígitos", simbolo: "2026", fala: "Dois mil e vinte e seis." },
      { titulo: "Muda só uma vez por ano", simbolo: "🎊", fala: "O ano muda no réveillon." },
    ],
    ["Ano = 4 dígitos", "Muda só no réveillon"]),
  buildConcept("EF01MA18", "amber", 4, "Data completa — Nível 4", "Tudo junto agora.",
    [
      { titulo: "Formato", simbolo: "15/03/2026", fala: "Dia, barra, mês, barra, ano." },
      { titulo: "Lendo", simbolo: "15/03/2026", fala: "Quinze de março de dois mil e vinte e seis." },
    ],
    ["Dia / Mês / Ano", "Barras entre cada parte", "Sempre nessa ordem"]),
];

// ───────── MA19 — Dinheiro ─────────
const EF01MA19_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA19", "green", 1, "Moedas pequenas — Nível 1", "As moedas de centavos.",
    [
      { titulo: "5 centavos", simbolo: "5¢", fala: "Moedinha pequena de cobre." },
      { titulo: "10 centavos", simbolo: "10¢", fala: "Moeda dourada." },
      { titulo: "25 centavos", simbolo: "25¢", fala: "Moeda dourada maior." },
    ],
    ["Centavos = pedacinho do real", "100 centavos = 1 real"]),
  buildConcept("EF01MA19", "green", 2, "Moedas grandes — Nível 2", "Moedas mais valiosas.",
    [
      { titulo: "50 centavos", simbolo: "50¢", fala: "Metade de um real." },
      { titulo: "1 real", simbolo: "R$1", fala: "Moeda prateada com dourado." },
    ],
    ["50 centavos = meio real", "1 real = moeda especial"]),
  buildConcept("EF01MA19", "green", 3, "Cédulas pequenas — Nível 3", "Notas até 20 reais.",
    [
      { titulo: "2 reais", simbolo: "R$2", fala: "Nota azul." },
      { titulo: "5 reais", simbolo: "R$5", fala: "Nota roxa." },
      { titulo: "10 reais", simbolo: "R$10", fala: "Nota vermelha." },
      { titulo: "20 reais", simbolo: "R$20", fala: "Nota amarela." },
    ],
    ["Notas pequenas", "Cores diferentes", "Cada uma um valor"]),
  buildConcept("EF01MA19", "green", 4, "Cédulas grandes — Nível 4", "Notas de mais valor.",
    [
      { titulo: "50 reais", simbolo: "R$50", fala: "Nota laranja." },
      { titulo: "100 reais", simbolo: "R$100", fala: "Nota azul grande." },
      { titulo: "200 reais", simbolo: "R$200", fala: "A nota mais valiosa." },
    ],
    ["Notas maiores", "Mais valor", "Usadas em compras grandes"]),
];

// ───────── MA20 — Certeza, talvez, impossível ─────────
const EF01MA20_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA20", "violet", 1, "Certeza — Nível 1", "Coisas que sempre acontecem.",
    [
      { titulo: "Sol vai nascer", emoji: "🌅", fala: "Amanhã o sol nasce, com certeza." },
      { titulo: "Vou crescer", emoji: "📏", fala: "Com o tempo, eu cresço." },
    ],
    ["Certeza = sempre acontece", "Não tem dúvida"]),
  buildConcept("EF01MA20", "violet", 2, "Talvez — Nível 2", "Coisas que podem ou não acontecer.",
    [
      { titulo: "Chuva", emoji: "🌧️", fala: "Talvez chova amanhã." },
      { titulo: "Encontrar amigo", emoji: "🤝", fala: "Talvez eu encontre meu amigo no parque." },
    ],
    ["Talvez = pode acontecer", "Não temos certeza"]),
  buildConcept("EF01MA20", "violet", 3, "Impossível — Nível 3", "Coisas que nunca acontecem.",
    [
      { titulo: "Peixe voar", emoji: "🐟", fala: "Peixe não voa, é impossível." },
      { titulo: "Andar no teto", emoji: "🚶", fala: "A gente não anda no teto." },
    ],
    ["Impossível = nunca acontece", "Não dá pra fazer"]),
  buildConcept("EF01MA20", "violet", 4, "Misturando tudo — Nível 4", "Vamos pensar juntos.",
    [
      { titulo: "Comer doce hoje", emoji: "🍬", fala: "Isso é talvez — depende do dia." },
      { titulo: "Sol amanhã", emoji: "🌞", fala: "Certeza, mesmo se tiver nuvem." },
      { titulo: "Voar batendo asa", emoji: "🦅", fala: "Impossível pra gente." },
    ],
    ["Certeza, talvez, impossível", "Pensar antes de responder", "Cada coisa tem uma chance"]),
];

// ───────── MA21 — Ler tabelas ─────────
const EF01MA21_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA21", "violet", 1, "Tabela simples — Nível 1", "Vamos ler uma tabela com 2 itens.",
    [
      { titulo: "Fruta favorita", emoji: "🍎", fala: "Cinco crianças amam maçã." },
      { titulo: "Outra fruta", emoji: "🍌", fala: "Três crianças amam banana." },
      { titulo: "Qual ganha?", simbolo: "🍎", fala: "Maçã, porque tem mais." },
    ],
    ["Tabela = informação organizada", "Quem tem mais ganha"]),
  buildConcept("EF01MA21", "violet", 2, "Tabela com 3 — Nível 2", "Agora com mais opções.",
    [
      { titulo: "Sorvete: chocolate", emoji: "🍫", fala: "Oito amam chocolate." },
      { titulo: "Morango", emoji: "🍓", fala: "Cinco amam morango." },
      { titulo: "Baunilha", emoji: "🍦", fala: "Três amam baunilha." },
    ],
    ["Mais itens = mais comparações", "Olhar quem tem mais e menos"]),
  buildConcept("EF01MA21", "violet", 3, "Gráfico de barras — Nível 3", "Tabela vira gráfico.",
    [
      { titulo: "Barras altas", emoji: "📊", fala: "Quanto maior a barra, mais quantidade." },
      { titulo: "Mais alto = mais", emoji: "⬆️", fala: "A barra mais alta é a mais escolhida." },
    ],
    ["Gráfico = desenho com barras", "Mais alto = mais"]),
  buildConcept("EF01MA21", "violet", 4, "Decisão final — Nível 4", "Decidindo com a tabela.",
    [
      { titulo: "Olhar a tabela", emoji: "📋", fala: "Primeiro veja todos os números." },
      { titulo: "Comparar", emoji: "⚖️", fala: "Veja qual é o maior." },
      { titulo: "Decidir", emoji: "✅", fala: "Escolha o que tem mais." },
    ],
    ["Ler", "Comparar", "Decidir"]),
];

// ───────── MA22 — Pesquisa da turma ─────────
const EF01MA22_VARIANTS: KidsLesson[] = [
  buildConcept("EF01MA22", "violet", 1, "Fazer a pergunta — Nível 1", "Toda pesquisa começa com uma pergunta.",
    [
      { titulo: "Pergunta clara", emoji: "❓", fala: "Qual a sua cor favorita?" },
      { titulo: "Poucas opções", emoji: "🎨", fala: "Azul, vermelho ou amarelo." },
    ],
    ["Pergunta direta", "Poucas opções pra escolher"]),
  buildConcept("EF01MA22", "violet", 2, "Contar respostas — Nível 2", "Depois conte cada resposta.",
    [
      { titulo: "Cada voto", emoji: "✋", fala: "Cada amigo levanta a mão pra cor que ama." },
      { titulo: "Anotar", emoji: "📝", fala: "Marque um risquinho pra cada voto." },
    ],
    ["Um voto por amigo", "Anotar com risquinhos"]),
  buildConcept("EF01MA22", "violet", 3, "Organizar — Nível 3", "Coloque tudo em uma tabela.",
    [
      { titulo: "Tabela", emoji: "📋", fala: "Uma linha para cada cor." },
      { titulo: "Quantidade", emoji: "🔢", fala: "Do lado, quantos votaram." },
    ],
    ["Organizar em tabela", "Cor + número de votos"]),
  buildConcept("EF01MA22", "violet", 4, "Mostrar pra turma — Nível 4", "Conte o que descobriu.",
    [
      { titulo: "Gráfico", emoji: "📊", fala: "Desenhe um gráfico bem grande." },
      { titulo: "Mostrar", emoji: "🗣️", fala: "Fale para os amigos qual cor ganhou." },
      { titulo: "Comemorar", emoji: "🎉", fala: "Toda pesquisa termina com a descoberta!" },
    ],
    ["Desenhar gráfico", "Contar pra turma", "Pesquisa termina com resposta"]),
];

export const KIDS_LESSON_VARIANTS_1ANO: Record<string, KidsLesson[]> = {
  EF01MA01: EF01MA01_VARIANTS,
  EF01MA02: EF01MA02_VARIANTS,
  EF01MA03: EF01MA03_VARIANTS,
  EF01MA04: EF01MA04_VARIANTS,
  EF01MA05: EF01MA05_VARIANTS,
  EF01MA06: EF01MA06_VARIANTS,
  EF01MA07: EF01MA07_VARIANTS,
  EF01MA08: EF01MA08_VARIANTS,
  EF01MA09: EF01MA09_VARIANTS,
  EF01MA10: EF01MA10_VARIANTS,
  EF01MA11: EF01MA11_VARIANTS,
  EF01MA12: EF01MA12_VARIANTS,
  EF01MA13: EF01MA13_VARIANTS,
  EF01MA14: EF01MA14_VARIANTS,
  EF01MA15: EF01MA15_VARIANTS,
  EF01MA16: EF01MA16_VARIANTS,
  EF01MA17: EF01MA17_VARIANTS,
  EF01MA18: EF01MA18_VARIANTS,
  EF01MA19: EF01MA19_VARIANTS,
  EF01MA20: EF01MA20_VARIANTS,
  EF01MA21: EF01MA21_VARIANTS,
  EF01MA22: EF01MA22_VARIANTS,
};

export function getKidsLessonVariants(codigo: string | undefined): KidsLesson[] {
  if (!codigo) return [];
  return KIDS_LESSON_VARIANTS_1ANO[codigo] ?? [];
}
