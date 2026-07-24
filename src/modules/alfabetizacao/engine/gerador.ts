// Geradores de atividades com regra pedagógica explícita (Professor Digital).
import { PALAVRAS, Palavra, VOGAIS, falarSom } from "../data/palavras";
import { FRASES, HISTORIAS } from "../data/historias";
import {
  validarAntesDeGerar,
  sugerirAlternativa,
  type ContextoPedagogico,
} from "./validacaoPedagogica";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Dificuldade adaptativa
function poolPorNivel(nivel: number): Palavra[] {
  if (nivel <= 1) return PALAVRAS.filter((p) => p.silabas.length <= 2);
  if (nivel === 2) return PALAVRAS.filter((p) => p.silabas.length <= 3);
  return PALAVRAS;
}
function numDistratores(nivel: number): number {
  return nivel <= 1 ? 1 : 2;
}

export interface Rodada {
  tipo: string;
  instrucaoFalada: string;
  imagens: string[];
  correta: string;
  numero?: number;
  numeroOpcoes?: number[];
  // Regra pedagógica que o Professor Digital fala quando a criança erra.
  regra: string;
  // Som/foco central da rodada (para destacar visualmente ou repetir).
  foco?: string;
  // Sílabas visíveis (fusão/segmentação) — exibidas como chips grandes.
  silabas?: string[];
}

// ============ CONSCIÊNCIA FONOLÓGICA (já existente) ============

export function gerarRima(nivel = 2): Rodada {
  const pool = poolPorNivel(nivel);
  const grupos = new Map<string, Palavra[]>();
  pool.forEach((p) => {
    if (!grupos.has(p.rima)) grupos.set(p.rima, []);
    grupos.get(p.rima)!.push(p);
  });
  const rimasValidas = [...grupos.values()].filter((g) => g.length >= 2);
  if (rimasValidas.length === 0) return gerarSomInicial(nivel);
  const par = pick(rimasValidas);
  const [a, b] = shuffle(par).slice(0, 2);
  const distrator = pick(pool.filter((p) => p.rima !== a.rima));
  const extras =
    numDistratores(nivel) === 1
      ? [distrator]
      : shuffle(pool.filter((p) => p.rima !== a.rima && p.palavra !== distrator.palavra))
          .slice(0, 1)
          .concat(distrator);
  const opcoes = shuffle([b.palavra, ...extras.map((p) => p.palavra)]);
  return {
    tipo: "rima",
    instrucaoFalada: `Qual palavra rima com ${a.palavra.toLowerCase()}?`,
    imagens: [a.palavra, ...opcoes],
    correta: b.palavra,
    regra: `${a.palavra.toLowerCase()} e ${b.palavra.toLowerCase()} terminam com o mesmo som: ${a.rima.toLowerCase()}.`,
    foco: a.rima,
  };
}

export function gerarAliteracao(nivel = 2): Rodada {
  const pool = poolPorNivel(nivel);
  const grupos = new Map<string, Palavra[]>();
  pool.forEach((p) => {
    if (!grupos.has(p.inicial)) grupos.set(p.inicial, []);
    grupos.get(p.inicial)!.push(p);
  });
  const validos = [...grupos.values()].filter((g) => g.length >= 2);
  if (validos.length === 0) return gerarSomInicial(nivel);
  const grupo = pick(validos);
  const [a, b] = shuffle(grupo).slice(0, 2);
  const extras = shuffle(pool.filter((p) => p.inicial !== a.inicial)).slice(
    0,
    numDistratores(nivel),
  );
  const opcoes = shuffle([b.palavra, ...extras.map((p) => p.palavra)]);
  return {
    tipo: "aliteracao",
    instrucaoFalada: `Qual começa com o mesmo som de ${a.palavra.toLowerCase()}?`,
    imagens: [a.palavra, ...opcoes],
    correta: b.palavra,
    regra: `${a.palavra.toLowerCase()} e ${b.palavra.toLowerCase()} começam com o som ${falarSom(a.inicial)}.`,
    foco: a.inicial,
  };
}

export function gerarSomInicial(nivel = 2): Rodada {
  const pool = poolPorNivel(nivel);
  const alvo = pick(pool);
  const distratores = shuffle(pool.filter((p) => p.inicial !== alvo.inicial)).slice(
    0,
    numDistratores(nivel),
  );
  const opcoes = shuffle([alvo, ...distratores]);
  return {
    tipo: "som-inicial",
    instrucaoFalada: `Qual palavra começa com o som ${falarSom(alvo.inicial)}?`,
    imagens: opcoes.map((p) => p.palavra),
    correta: alvo.palavra,
    regra: `${alvo.palavra.toLowerCase()} começa com o som ${falarSom(alvo.inicial)}.`,
    foco: alvo.inicial,
  };
}

export function gerarSegmentacao(nivel = 2): Rodada {
  const maxSil = nivel <= 1 ? 2 : nivel === 2 ? 3 : 4;
  const alvo = pick(PALAVRAS.filter((p) => p.silabas.length <= maxSil));
  const correto = alvo.silabas.length;
  const opcoesNum = shuffle([1, 2, 3, 4]);
  return {
    tipo: "segmentacao",
    instrucaoFalada: `Quantos pedacinhos tem a palavra ${alvo.palavra.toLowerCase()}?`,
    imagens: [alvo.palavra],
    correta: String(correto),
    numero: correto,
    numeroOpcoes: opcoesNum,
    regra: `${alvo.palavra.toLowerCase()} tem ${correto} pedacinhos: ${alvo.silabas.join("... ").toLowerCase()}.`,
    foco: String(correto),
    silabas: alvo.silabas,
  };
}

export function gerarFusao(nivel = 2): Rodada {
  const pool = poolPorNivel(nivel).filter((p) => p.silabas.length >= 2);
  const alvo = pick(pool);
  const distratores = shuffle(pool.filter((p) => p.palavra !== alvo.palavra)).slice(
    0,
    numDistratores(nivel),
  );
  const opcoes = shuffle([alvo.palavra, ...distratores.map((p) => p.palavra)]);
  const fala = alvo.silabas.join("... ").toLowerCase();
  return {
    tipo: "fusao",
    instrucaoFalada: `Junte os pedacinhos: ${fala}. Qual palavra é?`,
    imagens: opcoes,
    correta: alvo.palavra,
    regra: `${fala} juntinho vira ${alvo.palavra.toLowerCase()}.`,
    foco: alvo.palavra,
    silabas: alvo.silabas,
  };
}

export function gerarVogalSom(nivel = 2): Rodada {
  const pool = poolPorNivel(nivel);
  const vogal = pick([...VOGAIS]);
  const candidatos = pool.filter((p) => p.palavra.startsWith(vogal));
  if (candidatos.length === 0) return gerarSomInicial(nivel);
  const alvo = pick(candidatos);
  const distratores = shuffle(pool.filter((p) => !p.palavra.startsWith(vogal))).slice(
    0,
    numDistratores(nivel),
  );
  const opcoes = shuffle([alvo, ...distratores]);
  const somVogal = falarSom(vogal);
  return {
    tipo: "vogal-som",
    instrucaoFalada: `Qual palavra começa com a vogal ${somVogal}... ${somVogal}... ${somVogal}?`,
    imagens: opcoes.map((p) => p.palavra),
    correta: alvo.palavra,
    regra: `${alvo.palavra.toLowerCase()} começa com a vogal ${somVogal}.`,
    foco: vogal,
  };
}

// ============ NOVAS MECÂNICAS FONÊMICAS (Fase A) ============

export function gerarSomFinal(nivel = 2): Rodada {
  const pool = poolPorNivel(nivel);
  const grupos = new Map<string, Palavra[]>();
  pool.forEach((p) => {
    if (!grupos.has(p.final)) grupos.set(p.final, []);
    grupos.get(p.final)!.push(p);
  });
  const validos = [...grupos.values()].filter((g) => g.length >= 2);
  if (validos.length === 0) return gerarSomInicial(nivel);
  const grupo = pick(validos);
  const [a, b] = shuffle(grupo).slice(0, 2);
  const extras = shuffle(pool.filter((p) => p.final !== a.final)).slice(
    0,
    numDistratores(nivel),
  );
  const opcoes = shuffle([b.palavra, ...extras.map((p) => p.palavra)]);
  return {
    tipo: "som-final",
    instrucaoFalada: `Qual palavra termina com o mesmo som de ${a.palavra.toLowerCase()}?`,
    imagens: [a.palavra, ...opcoes],
    correta: b.palavra,
    regra: `${a.palavra.toLowerCase()} e ${b.palavra.toLowerCase()} terminam com o som ${falarSom(a.final)}.`,
    foco: a.final,
  };
}

export function gerarSomMeio(nivel = 2): Rodada {
  // Só palavras curtas com exatamente 3 sons (C-V-C ou V-C-V) para ficar claro.
  const pool = poolPorNivel(nivel).filter((p) => p.sons.length === 3);
  if (pool.length < 2) return gerarSomInicial(nivel);
  const alvo = pick(pool);
  const somMeio = alvo.sons[1];
  const distratores = shuffle(pool.filter((p) => p.sons[1] !== somMeio && p.palavra !== alvo.palavra))
    .slice(0, numDistratores(nivel));
  const opcoes = shuffle([alvo, ...distratores]);
  return {
    tipo: "som-meio",
    instrucaoFalada: `Qual palavra tem o som ${falarSom(somMeio)} no meio?`,
    imagens: opcoes.map((p) => p.palavra),
    correta: alvo.palavra,
    regra: `Em ${alvo.palavra.toLowerCase()}, o som do meio é ${falarSom(somMeio)}: ${alvo.sons.map(falarSom).join("... ")}.`,
    foco: somMeio,
  };
}

export function gerarContagemFonemas(nivel = 2): Rodada {
  const maxSons = nivel <= 1 ? 4 : nivel === 2 ? 5 : 6;
  const pool = PALAVRAS.filter((p) => p.sons.length >= 3 && p.sons.length <= maxSons);
  const alvo = pick(pool);
  const correto = alvo.sons.length;
  const opcoesNum = shuffle([correto - 1, correto, correto + 1, correto + 2]
    .filter((n) => n >= 2 && n <= 8));
  return {
    tipo: "contagem-fonemas",
    instrucaoFalada: `Quantos sons diferentes tem ${alvo.palavra.toLowerCase()}?`,
    imagens: [alvo.palavra],
    correta: String(correto),
    numero: correto,
    numeroOpcoes: opcoesNum.slice(0, 4),
    regra: `${alvo.palavra.toLowerCase()} tem ${correto} sons: ${alvo.sons.map(falarSom).join("... ")}.`,
    foco: String(correto),
  };
}

export function gerarSubstituicaoFonema(nivel = 2): Rodada {
  // Usa grupos de rima para achar dois vizinhos que só diferem no som inicial.
  // Ex: GATO vs PATO → troca /g/ por /p/.
  const pool = poolPorNivel(nivel);
  const grupos = new Map<string, Palavra[]>();
  pool.forEach((p) => {
    if (!grupos.has(p.rima)) grupos.set(p.rima, []);
    grupos.get(p.rima)!.push(p);
  });
  const validos = [...grupos.values()].filter((g) => g.length >= 2);
  if (validos.length === 0) return gerarSomInicial(nivel);
  const grupo = pick(validos);
  const [a, b] = shuffle(grupo).slice(0, 2);
  const extras = shuffle(pool.filter((p) => p.palavra !== a.palavra && p.palavra !== b.palavra))
    .slice(0, numDistratores(nivel));
  const opcoes = shuffle([b.palavra, ...extras.map((p) => p.palavra)]);
  return {
    tipo: "substituicao-fonema",
    instrucaoFalada: `Em ${a.palavra.toLowerCase()}, troque o som ${falarSom(a.inicial)} pelo som ${falarSom(b.inicial)}. Que palavra aparece?`,
    imagens: [a.palavra, ...opcoes],
    correta: b.palavra,
    regra: `Tira o ${falarSom(a.inicial)} de ${a.palavra.toLowerCase()} e põe ${falarSom(b.inicial)}: vira ${b.palavra.toLowerCase()}.`,
    foco: b.inicial,
  };
}

export function gerarCategorizacaoSom(nivel = 2): Rodada {
  // 3 palavras com o mesmo som inicial + 1 diferente. A diferente é a resposta.
  const pool = poolPorNivel(nivel);
  const grupos = new Map<string, Palavra[]>();
  pool.forEach((p) => {
    if (!grupos.has(p.inicial)) grupos.set(p.inicial, []);
    grupos.get(p.inicial)!.push(p);
  });
  const grupoBom = [...grupos.values()].find((g) => g.length >= 3);
  if (!grupoBom) return gerarSomInicial(nivel);
  const iguais = shuffle(grupoBom).slice(0, 3);
  const inicialComum = iguais[0].inicial;
  const diferente = pick(pool.filter((p) => p.inicial !== inicialComum));
  const opcoes = shuffle([...iguais, diferente]);
  return {
    tipo: "categorizacao-som",
    instrucaoFalada: `Uma palavra não combina com as outras. Qual começa com um som diferente?`,
    imagens: opcoes.map((p) => p.palavra),
    correta: diferente.palavra,
    regra: `${iguais.map((p) => p.palavra.toLowerCase()).join(", ")} começam com ${falarSom(inicialComum)}. ${diferente.palavra.toLowerCase()} começa com ${falarSom(diferente.inicial)} — é a diferente.`,
    foco: diferente.inicial,
  };
}

// ============ FRASES / TEXTOS ============

export function gerarFraseImagem(_nivel = 2): Rodada {
  const f = pick(FRASES);
  const opcoes = shuffle([f.respostaCorreta, ...f.distratores]);
  return {
    tipo: "frase-imagem",
    instrucaoFalada: f.fraseFalada + " Toque na imagem certa.",
    imagens: opcoes,
    correta: f.respostaCorreta,
    regra: `A frase falava de ${f.respostaCorreta.toLowerCase()}. Ouve de novo: ${f.fraseFalada}`,
  };
}

export function gerarTextoCompreensao(_nivel = 2): Rodada {
  const h = pick(HISTORIAS);
  const opcoes = shuffle([h.respostaCorreta, ...h.distratores]);
  return {
    tipo: "texto-compreensao",
    instrucaoFalada: `${h.texto} ${h.pergunta}`,
    imagens: opcoes,
    correta: h.respostaCorreta,
    regra: `Na história, a resposta é ${h.respostaCorreta.toLowerCase()}. Escuta com atenção: ${h.texto}`,
  };
}

// ============ ROTEADOR ============

export function gerarPorTipo(tipo: string, nivel = 2): Rodada {
  switch (tipo) {
    case "vogal-som": return gerarVogalSom(nivel);
    case "rima": return gerarRima(nivel);
    case "aliteracao": return gerarAliteracao(nivel);
    case "som-inicial": return gerarSomInicial(nivel);
    case "som-final": return gerarSomFinal(nivel);
    case "som-meio": return gerarSomMeio(nivel);
    case "contagem-fonemas": return gerarContagemFonemas(nivel);
    case "substituicao-fonema": return gerarSubstituicaoFonema(nivel);
    case "categorizacao-som": return gerarCategorizacaoSom(nivel);
    case "segmentacao": return gerarSegmentacao(nivel);
    case "fusao": return gerarFusao(nivel);
    case "frase-imagem": return gerarFraseImagem(nivel);
    case "texto-compreensao": return gerarTextoCompreensao(nivel);
    default: return gerarSomInicial(nivel);
  }
}

export function gerarComValidacao(
  ctx: ContextoPedagogico,
): { rodada: Rodada; validacao: ReturnType<typeof validarAntesDeGerar> } {
  let v = validarAntesDeGerar(ctx);
  let tipo = ctx.tipoAtividade;
  let nivel = ctx.nivelCognitivo;

  if (!v.permitido) {
    tipo = sugerirAlternativa(ctx);
    v = validarAntesDeGerar({ ...ctx, tipoAtividade: tipo });
  }
  if (v.ajustes?.nivelCognitivo) nivel = v.ajustes.nivelCognitivo;

  return { rodada: gerarPorTipo(tipo, nivel), validacao: v };
}
