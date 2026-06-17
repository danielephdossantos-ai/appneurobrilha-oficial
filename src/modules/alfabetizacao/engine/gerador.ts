// Geradores de atividades a partir do banco PALAVRAS.
import { PALAVRAS, Palavra, VOGAIS } from "../data/palavras";
import { FRASES, HISTORIAS } from "../data/historias";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
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

export function gerarRima(): Rodada {
  const grupos = new Map<string, Palavra[]>();
  PALAVRAS.forEach((p) => {
    if (!grupos.has(p.rima)) grupos.set(p.rima, []);
    grupos.get(p.rima)!.push(p);
  });
  const rimasValidas = [...grupos.values()].filter((g) => g.length >= 2);
  const par = pick(rimasValidas);
  const [a, b] = shuffle(par).slice(0, 2);
  const distrator = pick(PALAVRAS.filter((p) => p.rima !== a.rima));
  const opcoes = shuffle([b.palavra, distrator.palavra]);
  return {
    tipo: "rima",
    instrucaoFalada: `Qual palavra rima com ${a.palavra.toLowerCase()}?`,
    imagens: [a.palavra, ...opcoes],
    correta: b.palavra,
  };
}

export function gerarAliteracao(): Rodada {
  const grupos = new Map<string, Palavra[]>();
  PALAVRAS.forEach((p) => {
    if (!grupos.has(p.inicial)) grupos.set(p.inicial, []);
    grupos.get(p.inicial)!.push(p);
  });
  const validos = [...grupos.values()].filter((g) => g.length >= 2);
  const grupo = pick(validos);
  const [a, b] = shuffle(grupo).slice(0, 2);
  const distrator = pick(PALAVRAS.filter((p) => p.inicial !== a.inicial));
  const opcoes = shuffle([b.palavra, distrator.palavra]);
  return {
    tipo: "aliteracao",
    instrucaoFalada: `Qual começa com o mesmo som de ${a.palavra.toLowerCase()}?`,
    imagens: [a.palavra, ...opcoes],
    correta: b.palavra,
  };
}

export function gerarSomInicial(): Rodada {
  const alvo = pick(PALAVRAS);
  const distratores = shuffle(PALAVRAS.filter((p) => p.inicial !== alvo.inicial)).slice(0, 2);
  const opcoes = shuffle([alvo, ...distratores]);
  return {
    tipo: "som-inicial",
    instrucaoFalada: `Qual palavra começa com o som ${alvo.inicial}?`,
    imagens: opcoes.map((p) => p.palavra),
    correta: alvo.palavra,
  };
}

export function gerarSegmentacao(): Rodada {
  const alvo = pick(PALAVRAS.filter((p) => p.silabas.length <= 4));
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

export function gerarFusao(): Rodada {
  const alvo = pick(PALAVRAS.filter((p) => p.silabas.length >= 2 && p.silabas.length <= 3));
  const distratores = shuffle(PALAVRAS.filter((p) => p.palavra !== alvo.palavra)).slice(0, 2);
  const opcoes = shuffle([alvo.palavra, ...distratores.map((p) => p.palavra)]);
  const fala = alvo.silabas.join("... ").toLowerCase();
  return {
    tipo: "fusao",
    instrucaoFalada: `Junte os pedacinhos: ${fala}. Qual palavra é?`,
    imagens: opcoes,
    correta: alvo.palavra,
  };
}

export function gerarVogalSom(): Rodada {
  const vogal = pick([...VOGAIS]);
  const candidatos = PALAVRAS.filter((p) => p.palavra.startsWith(vogal));
  if (candidatos.length === 0) return gerarSomInicial();
  const alvo = pick(candidatos);
  const distratores = shuffle(PALAVRAS.filter((p) => !p.palavra.startsWith(vogal))).slice(0, 2);
  const opcoes = shuffle([alvo, ...distratores]);
  return {
    tipo: "vogal-som",
    instrucaoFalada: `Qual palavra começa com a vogal ${vogal}?`,
    imagens: opcoes.map((p) => p.palavra),
    correta: alvo.palavra,
  };
}

export function gerarFraseImagem(): Rodada {
  const f = pick(FRASES);
  const opcoes = shuffle([f.respostaCorreta, ...f.distratores]);
  return {
    tipo: "frase-imagem",
    instrucaoFalada: f.fraseFalada + " Toque na imagem certa.",
    imagens: opcoes,
    correta: f.respostaCorreta,
  };
}

export function gerarTextoCompreensao(): Rodada {
  const h = pick(HISTORIAS);
  const opcoes = shuffle([h.respostaCorreta, ...h.distratores]);
  return {
    tipo: "texto-compreensao",
    instrucaoFalada: `${h.texto} ${h.pergunta}`,
    imagens: opcoes,
    correta: h.respostaCorreta,
  };
}

export function gerarPorTipo(tipo: string): Rodada {
  switch (tipo) {
    case "vogal-som": return gerarVogalSom();
    case "rima": return gerarRima();
    case "aliteracao": return gerarAliteracao();
    case "som-inicial": return gerarSomInicial();
    case "segmentacao": return gerarSegmentacao();
    case "fusao": return gerarFusao();
    case "frase-imagem": return gerarFraseImagem();
    case "texto-compreensao": return gerarTextoCompreensao();
    default: return gerarSomInicial();
  }
}
