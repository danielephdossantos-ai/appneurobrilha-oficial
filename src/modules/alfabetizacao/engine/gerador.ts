// Geradores de atividades a partir do banco PALAVRAS.
import { PALAVRAS, Palavra, VOGAIS } from "../data/palavras";
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

// Dificuldade adaptativa:
// 1 = fácil  → palavras até 2 sílabas, 2 opções
// 2 = médio  → palavras até 3 sílabas, 3 opções
// 3 = difícil → qualquer palavra,       3 opções, distratores parecidos
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
  imagens: string[]; // nomes em OBJETO_IMG
  correta: string;
  // extras (segmentação)
  numero?: number; // resposta numérica
  numeroOpcoes?: number[];
}

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
  const extras = numDistratores(nivel) === 1 ? [distrator] : shuffle(pool.filter((p) => p.rima !== a.rima && p.palavra !== distrator.palavra)).slice(0, 1).concat(distrator);
  const opcoes = shuffle([b.palavra, ...extras.map((p) => p.palavra)]);
  return {
    tipo: "rima",
    instrucaoFalada: `Qual palavra rima com ${a.palavra.toLowerCase()}?`,
    imagens: [a.palavra, ...opcoes],
    correta: b.palavra,
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
  const extras = shuffle(pool.filter((p) => p.inicial !== a.inicial)).slice(0, numDistratores(nivel));
  const opcoes = shuffle([b.palavra, ...extras.map((p) => p.palavra)]);
  return {
    tipo: "aliteracao",
    instrucaoFalada: `Qual começa com o mesmo som de ${a.palavra.toLowerCase()}?`,
    imagens: [a.palavra, ...opcoes],
    correta: b.palavra,
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
    instrucaoFalada: `Qual palavra começa com o som ${alvo.inicial}?`,
    imagens: opcoes.map((p) => p.palavra),
    correta: alvo.palavra,
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
  return {
    tipo: "vogal-som",
    instrucaoFalada: `Qual palavra começa com a vogal ${vogal}?`,
    imagens: opcoes.map((p) => p.palavra),
    correta: alvo.palavra,
  };
}

export function gerarFraseImagem(_nivel = 2): Rodada {
  const f = pick(FRASES);
  const opcoes = shuffle([f.respostaCorreta, ...f.distratores]);
  return {
    tipo: "frase-imagem",
    instrucaoFalada: f.fraseFalada + " Toque na imagem certa.",
    imagens: opcoes,
    correta: f.respostaCorreta,
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
  };
}

export function gerarPorTipo(tipo: string, nivel = 2): Rodada {
  switch (tipo) {
    case "vogal-som": return gerarVogalSom(nivel);
    case "rima": return gerarRima(nivel);
    case "aliteracao": return gerarAliteracao(nivel);
    case "som-inicial": return gerarSomInicial(nivel);
    case "segmentacao": return gerarSegmentacao(nivel);
    case "fusao": return gerarFusao(nivel);
    case "frase-imagem": return gerarFraseImagem(nivel);
    case "texto-compreensao": return gerarTextoCompreensao(nivel);
    default: return gerarSomInicial(nivel);
  }
}

// Geração com validação pedagógica obrigatória.
// Bloqueia conteúdos inadequados à idade/série/nível/objetivos antes de gerar.
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
