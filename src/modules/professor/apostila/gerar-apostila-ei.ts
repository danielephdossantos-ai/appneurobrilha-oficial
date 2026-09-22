/**
 * Conversor das aulas da Educação Infantil (3 a 6 anos) → apostila A4.
 *
 * Mesmas regras das apostilas do 1º ano:
 *  - nenhum texto inventado: tudo vem da própria aula do app;
 *  - nenhuma imagem nova: só as figuras que a aula já usa;
 *  - 2 folhas para o professor, o restante é atividade impressa da criança;
 *  - a folha da criança não traz código BNCC, marca, áudio nem gabarito.
 */

import type { AulaEI, CursoEI, MomentoEI } from "@/escola-brilha/curso-portugues-ei/types";
import { cursosEI as cursosPortuguesEI } from "@/escola-brilha/curso-portugues-ei/registry";
import { cursosMatematicaEI } from "@/escola-brilha/curso-matematica-ei/registry";
import {
  ADAPTACOES,
  adaptarTextoParaPapel,
  type Apostila,
  type ApostilaBloco,
  type ApostilaImagem,
  type ApostilaPagina,
} from "./gerar-apostila";

const IGNORADAS = /(pip-|mascot|brilha|aurora|logo|fundo|mapa)/i;

function img(url: string | undefined, legenda?: string): ApostilaImagem | null {
  if (!url || IGNORADAS.test(url)) return null;
  return legenda ? { url, legenda } : { url };
}

function unicas(lista: Array<ApostilaImagem | null>, limite = 8): ApostilaImagem[] {
  const vistos = new Set<string>();
  const saida: ApostilaImagem[] = [];
  for (const item of lista) {
    if (!item || vistos.has(item.url)) continue;
    vistos.add(item.url);
    saida.push(item);
    if (saida.length >= limite) break;
  }
  return saida;
}

function momentos<T extends MomentoEI["tipo"]>(
  aula: AulaEI,
  tipo: T,
): Array<Extract<MomentoEI, { tipo: T }>> {
  return aula.momentos.filter((m): m is Extract<MomentoEI, { tipo: T }> => m.tipo === tipo);
}

function imagensDaAulaEI(aula: AulaEI): ApostilaImagem[] {
  const brutas: Array<ApostilaImagem | null> = [];
  for (const m of aula.momentos) {
    const qualquer = m as Record<string, unknown>;
    if (typeof qualquer.imagemUrl === "string") brutas.push(img(qualquer.imagemUrl));
    for (const chave of ["itens", "opcoes", "exemplos", "pares", "cenas"]) {
      const lista = qualquer[chave];
      if (!Array.isArray(lista)) continue;
      for (const item of lista) {
        if (item && typeof item === "object" && typeof (item as any).imagemUrl === "string") {
          brutas.push(img((item as any).imagemUrl, (item as any).nome));
        }
      }
    }
  }
  return unicas(brutas, 10);
}

/** Três alternativas distintas com o número certo, em posição variada e estável. */
function opcoesNumero(certo: number, giro = 0): string[] {
  const lista: number[] = [certo];
  let passo = 1;
  while (lista.length < 3) {
    for (const candidato of [certo + passo, certo - passo]) {
      if (candidato >= 1 && !lista.includes(candidato) && lista.length < 3) lista.push(candidato);
    }
    passo += 1;
  }
  const deslocamento = ((giro % 3) + 3) % 3;
  return [...lista.slice(deslocamento), ...lista.slice(0, deslocamento)].map(String);
}

function embaralhar<T>(lista: T[]): T[] {
  return [...lista].sort(() => 0.5 - Math.random());
}

function nomeNoPlural(imagem: ApostilaImagem | undefined): string {
  const nome = (imagem?.legenda ?? "bolinha").trim().toLowerCase();
  const nomesCorretos: Record<string, string> = {
    arvore: "árvores",
    balao: "balões",
    coracao: "corações",
    maca: "maçãs",
    passaro: "pássaros",
  };
  if (nomesCorretos[nome]) return nomesCorretos[nome];
  if (!nome) return "bolinhas";
  if (/ões$|ães$|ãos$|ais$|eis$|ois$|uis$|is$|ns$|res$|zes$|s$/i.test(nome)) return nome;
  if (nome.endsWith("ão")) return `${nome.slice(0, -2)}ões`;
  if (nome.endsWith("ã")) return `${nome}s`;
  if (nome.endsWith("m")) return `${nome.slice(0, -1)}ns`;
  if (/[rz]$/.test(nome)) return `${nome}es`;
  return `${nome}s`;
}

/* ------------------------- folhas do professor ------------------------- */

function paginasProfessor(curso: CursoEI, aula: AulaEI): ApostilaPagina[] {
  const boasVindas = momentos(aula, "boasVindas")[0];
  const ritmadas = momentos(aula, "escutaRitmada");
  const historias = momentos(aula, "historiaIlustrada");
  const conversas = momentos(aula, "rodaConversa");
  const familia = momentos(aula, "missaoFamilia")[0];
  const fazDeConta = momentos(aula, "fazDeConta")[0];
  const imagens = imagensDaAulaEI(aula);

  const passosEnsino: string[] = [];
  for (const m of aula.momentos) {
    const q = m as Record<string, unknown>;
    const texto =
      (typeof q.instrucaoAudio === "string" && q.instrucaoAudio) ||
      (typeof q.perguntaAudio === "string" && q.perguntaAudio) ||
      (typeof q.falaModelagem === "string" && q.falaModelagem) ||
      (typeof q.convite === "string" && q.convite) ||
      (typeof q.pergunta === "string" && q.pergunta) ||
      "";
    if (texto) passosEnsino.push(texto);
  }

  const historia = historias[0];
  const textoHistoria = historia
    ? historia.cenas.map((c) => adaptarTextoParaPapel(c.narracao)).join("\n\n")
    : [boasVindas?.falaMascote, ...ritmadas.flatMap((r) => r.versos)]
        .filter((texto): texto is string => Boolean(texto))
        .map(adaptarTextoParaPapel)
        .join("\n\n");
  const folha1: ApostilaBloco[] = [{ tipo: "historia", texto: textoHistoria || aula.titulo }];

  const explicacoes = passosEnsino.slice(0, 4).map(adaptarTextoParaPapel);
  const atividadeVisual =
    adaptarTextoParaPapel(
      fazDeConta?.convite ??
      conversas[0]?.pergunta ??
      passosEnsino[1] ??
      passosEnsino[0] ??
      aula.titulo,
    );
  const folha2: ApostilaBloco[] = [
    { tipo: "texto", titulo: "Objetivo da aula adaptada", texto: adaptarTextoParaPapel(boasVindas?.falaMascote ?? aula.titulo) },
    {
      tipo: "explicacao-atividade",
      titulo: "1. Explique, mostre e faça junto",
      explicacao: explicacoes.slice(0, 2).join(" ") || adaptarTextoParaPapel(aula.titulo),
      atividade: atividadeVisual,
      imagens: imagens.slice(0, 4),
    },
    {
      tipo: "explicacao-atividade",
      titulo: "2. Repita com outra atividade da criança",
      explicacao: explicacoes.slice(2).join(" ") || explicacoes[0] || adaptarTextoParaPapel(aula.titulo),
      atividade: adaptarTextoParaPapel(conversas[0]?.pergunta ?? passosEnsino[2] ?? atividadeVisual),
      imagens: imagens.slice(4, 8).length ? imagens.slice(4, 8) : imagens.slice(0, 4),
    },
  ];
  if (conversas.length)
    folha2.push({
      tipo: "lista",
      titulo: "Perguntas de conversa (sem resposta certa)",
      itens: conversas.map((c) => adaptarTextoParaPapel(c.pergunta)),
    });
  folha2.push({ tipo: "lista", titulo: "Apoios para esta atividade", itens: ADAPTACOES });
  if (aula.baseCientifica)
    folha2.push({ tipo: "aviso", titulo: "Base da atividade", texto: aula.baseCientifica });
  if (familia)
    folha2.push({
      tipo: "texto",
      titulo: `Missão em família — ${familia.titulo}`,
      texto: adaptarTextoParaPapel(`${familia.convite}\n${familia.dicaAdulto}`),
    });

  return [
    {
      etiqueta: "Guia do professor",
      titulo: historia?.titulo ?? aula.titulo,
      subtitulo: "História de abertura — leia devagar e mostre as figuras da atividade",
      blocos: folha1,
    },
    {
      etiqueta: "Guia do professor",
      titulo: aula.titulo,
      subtitulo: `${curso.serieLabel} · aula adaptada para acompanhar a turma`,
      blocos: folha2,
    },
  ];
}

/* ------------------------- folhas da criança ------------------------- */

function folha(titulo: string, bloco: ApostilaBloco): ApostilaPagina {
  return { etiqueta: "Folha do estudante", titulo, blocos: [bloco] };
}

function paginasCriancaMatematica(aula: AulaEI, imagens: ApostilaImagem[]): ApostilaPagina[] {
  const paginas: ApostilaPagina[] = [];
  const contagens = momentos(aula, "contarBolas");
  const comparacoes = momentos(aula, "compararGrupos");
  const operacoes = momentos(aula, "operacaoVisual");
  const compreensoes = momentos(aula, "compreensaoImagem");

  const itensContar = contagens
    .map((m, indice) => {
      const imagem = img(m.imagemUrl);
      return imagem ? { imagem, quantidade: m.quantidade, opcoes: opcoesNumero(m.quantidade, indice) } : null;
    })
    .filter((i): i is { imagem: ApostilaImagem; quantidade: number; opcoes: string[] } => !!i);

  const itensQuantidade = compreensoes
    .flatMap((m) => m.opcoes)
    .map((o, idx) => {
      const imagem = img(o.imagemUrl, o.nome);
      return imagem && o.quantidade
        ? { imagem, quantidade: o.quantidade, opcoes: opcoesNumero(o.quantidade, idx) }
        : null;
    })
    .filter((i): i is { imagem: ApostilaImagem; quantidade: number; opcoes: string[] } => !!i);

  const contar = [...itensContar, ...itensQuantidade].slice(0, 4);
  if (contar.length)
    paginas.push(
      folha("Atividade 1 — Conte e marque", {
        tipo: "contar-marcar",
        comando: "Aponte para cada figura, conte uma por vez e marque o número certo.",
        itens: contar,
      }),
    );

  const contas = operacoes
    .map((m) => {
      const imagem = img(m.imagemUrl);
      return imagem
        ? { imagem, a: m.a, b: m.b, sinal: (m.operacao === "soma" ? "+" : "−") as "+" | "−" }
        : null;
    })
    .filter((i): i is { imagem: ApostilaImagem; a: number; b: number; sinal: "+" | "−" } => !!i);
  const visuais = contas.slice(0, 3);
  if (visuais.length)
    paginas.push(
      folha("Atividade 2 — Conte os dois grupos", {
        tipo: "conta-visual",
        comando: "Conte as figuras, faça a conta e escreva o total no quadradinho.",
        itens: visuais,
      }),
    );

  // Comparar grupos não é conta: a criança conta cada grupo e marca quantos viu.
  const contarComparado = comparacoes
    .flatMap((m) => {
      const imagem = img(m.imagemUrl);
      if (!imagem) return [];
      return m.opcoes.map((o, i) => ({
        imagem,
        quantidade: o.qtd,
        opcoes: opcoesNumero(o.qtd, i),
      }));
    })
    .slice(0, 4);
  if (!visuais.length && contarComparado.length)
    paginas.push(
      folha("Atividade 2 — Conte cada grupo", {
        tipo: "contar-marcar",
        comando: "Conte as figuras de cada grupo e marque o número certo.",
        itens: contarComparado,
      }),
    );

  const numeros = [...new Set(contar.map((c) => c.quantidade))].slice(0, 4);
  if (numeros.length) {
    const mapa: Record<string, ApostilaImagem> = {};
    numeros.forEach((n, i) => {
      const imagem = contar[i]?.imagem;
      if (imagem) mapa[String(n)] = imagem;
    });
    paginas.push(
      folha("Atividade 3 — Cubra os números", {
        tipo: "tracado",
        comando: "Cubra o pontilhado de cada número, começando pela bolinha.",
        itens: numeros.map(String),
        repeticoes: 5,
        imagens: mapa,
        quantidadeImagem: true,
      }),
    );
    paginas.push(
      folha("Atividade 4 — Desenhe a quantidade", {
        tipo: "desenhar-quantidade",
        comando: "Veja o número e desenhe exatamente a quantidade pedida em cada quadro.",
        itens: numeros.map((n, index) => {
          const objeto = nomeNoPlural(contar.find((item) => item.quantidade === n)?.imagem ?? imagens[index % imagens.length]);
          return { quantidade: n, objeto, rotulo: `Desenhe ${n} ${objeto}` };
        }),
      }),
    );
    paginas.push(
      folha("Atividade 5 — Procure os números", {
        tipo: "procurar-letras",
        comando: `Procure e circule: ${numeros.join(", ")}.`,
        alvos: numeros.map(String),
        letras: embaralhar([
          ...numeros.flatMap((n) => [String(n), String(n)]),
          ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String),
        ]).slice(0, 24),
      }),
    );
  }

  if (imagens.length >= 4)
    paginas.push(
      folha("Atividade 6 — Ligue as figuras iguais", {
        tipo: "ligar-imagens",
        comando: "Ligue cada figura da esquerda à figura igual na direita.",
        esquerda: imagens.slice(0, 4),
        direita: embaralhar(imagens.slice(0, 4)),
      }),
    );

  // Aulas de comparação, formas e classificação não têm contagem: usam as
  // próprias perguntas e figuras da aula como atividade no papel.
  const escolhas = compreensoes
    .slice(0, 3)
    .map((m) => ({
      pergunta: m.perguntaAudio,
      imagens: unicas(m.opcoes.map((o) => img(o.imagemUrl, o.nome)), 4),
    }))
    .filter((q) => q.imagens.length >= 2);
  if (paginas.length < 3 && escolhas.length)
    paginas.push(
      folha(`Atividade ${paginas.length + 1} — Marque a figura certa`, {
        tipo: "marcar-figura",
        comando: "O professor lê. Marque com X a figura certa.",
        questoes: escolhas,
      }),
    );

  if (paginas.length < 3 && imagens.length >= 3)
    paginas.push(
      folha(`Atividade ${paginas.length + 1} — Circule as figuras`, {
        tipo: "escolha-visual",
        comando: "Fale o nome de cada figura e circule as que o professor pedir.",
        imagens: imagens.slice(0, 6),
      }),
    );

  const convite = momentos(aula, "fazDeConta")[0]?.convite;
  if (paginas.length < 3)
    paginas.push(
      folha(`Atividade ${paginas.length + 1} — Desenhe sua resposta`, {
        tipo: "desenhar-quantidade",
        comando: "Desenhe no quadro a sua resposta.",
        itens: [{ quantidade: 1, rotulo: convite ?? "Meu desenho" }],
      }),
    );

  return paginas;
}

function paginasCriancaPortugues(aula: AulaEI, imagens: ApostilaImagem[]): ApostilaPagina[] {
  const paginas: ApostilaPagina[] = [];
  const sons = momentos(aula, "somInicial");
  const vocabularios = momentos(aula, "vocabularioVisual");
  const compreensoes = momentos(aula, "compreensaoImagem");
  const ritmos = momentos(aula, "ritmoCorpo");
  const historias = momentos(aula, "historiaIlustrada");
  const conversas = momentos(aula, "rodaConversa");

  for (const [indice, som] of sons.slice(0, 2).entries()) {
    const modelo = img(som.referencia.imagemUrl, som.referencia.nome);
    const opcoes = unicas(som.opcoes.map((o) => img(o.imagemUrl, o.nome)), 6);
    if (modelo && opcoes.length >= 2)
      paginas.push(
        folha(`Atividade ${paginas.length + 1} — Circule o mesmo som`, {
          tipo: "escolha-visual",
          comando:
            indice === 0
              ? "Fale o nome da figura do quadro. Circule as figuras que começam com o mesmo som."
              : "Agora circule as figuras que começam com o mesmo som do quadro.",
          modelo,
          imagens: opcoes,
        }),
      );
  }

  const vocab = unicas(
    vocabularios.flatMap((v) => v.itens.map((i) => img(i.imagemUrl, i.nome))),
    4,
  );
  if (vocab.length >= 3)
    paginas.push(
      folha(`Atividade ${paginas.length + 1} — Ligue as figuras iguais`, {
        tipo: "ligar-imagens",
        comando: "Fale o nome de cada figura e ligue à figura igual do outro lado.",
        esquerda: vocab,
        direita: embaralhar(vocab),
      }),
    );

  const questoes = compreensoes
    .slice(0, 3)
    .map((m) => ({
      pergunta: m.perguntaAudio,
      imagens: unicas(m.opcoes.map((o) => img(o.imagemUrl, o.nome)), 4),
    }))
    .filter((q) => q.imagens.length >= 2);
  if (questoes.length)
    paginas.push(
      folha(`Atividade ${paginas.length + 1} — Marque a figura certa`, {
        tipo: "marcar-figura",
        comando: "O professor lê. Marque com X a figura certa.",
        questoes,
      }),
    );

  const palmas = ritmos
    .slice(0, 4)
    .map((r, i) => {
      const imagem = img(r.imagemUrl);
      return imagem ? { imagem, quantidade: r.silabas, opcoes: opcoesNumero(r.silabas, i) } : null;
    })
    .filter((i): i is { imagem: ApostilaImagem; quantidade: number; opcoes: string[] } => !!i);
  if (palmas.length)
    paginas.push(
      folha(`Atividade ${paginas.length + 1} — Bata palmas e marque`, {
        tipo: "marcar-figura",
        comando: "Fale o nome da figura batendo palmas. Marque quantas palmas você bateu.",
        questoes: palmas.map((p) => ({
          pergunta: `${p.opcoes.join("   ")}`,
          imagens: [p.imagem],
        })),
      }),
    );

  const cenas = unicas(
    historias.flatMap((h) => h.cenas.map((c) => img(c.imagemUrl))),
    3,
  );
  if (cenas.length)
    paginas.push({
      etiqueta: "Folha do estudante",
      titulo: `Atividade ${paginas.length + 1} — Conte a história`,
      blocos: [
        {
          tipo: "imagens",
          titulo: "Olhe as figuras na ordem e conte a história com suas palavras.",
          imagens: cenas,
        },
        {
          tipo: "desenhar-quantidade",
          comando: "Desenhe no quadro a parte que você mais gostou.",
          itens: [{ quantidade: 1, rotulo: "Meu desenho" }],
        },
      ],
    });

  if (conversas.length)
    paginas.push(
      folha(`Atividade ${paginas.length + 1} — Desenhe sua resposta`, {
        tipo: "desenhar-quantidade",
        comando: "O professor faz a pergunta. Desenhe sua resposta no quadro.",
        itens: conversas.slice(0, 2).map((c) => ({ quantidade: 1, rotulo: c.pergunta })),
      }),
    );

  if (paginas.length < 5 && imagens.length >= 4)
    paginas.push(
      folha(`Atividade ${paginas.length + 1} — Circule as figuras`, {
        tipo: "escolha-visual",
        comando: "Fale o nome de cada figura e circule as que aparecem na história de hoje.",
        imagens: imagens.slice(0, 6),
      }),
    );

  return paginas;
}

/* ------------------------- catálogo e geração ------------------------- */

export type AulaEICatalogo = {
  chave: string;
  titulo: string;
  serieLabel: string;
  disciplina: string;
  resumo: string;
};

function disciplinaDoCurso(curso: CursoEI): string {
  return curso.slug.startsWith("matematica") || curso.slug.includes("matematica")
    ? "Matemática"
    : "Língua Portuguesa";
}

function todosOsCursos(): CursoEI[] {
  return [...cursosPortuguesEI, ...cursosMatematicaEI];
}

export function listarAulasEI(): AulaEICatalogo[] {
  const saida: AulaEICatalogo[] = [];
  for (const curso of todosOsCursos()) {
    for (const unidade of curso.unidades) {
      for (const aula of unidade.aulas) {
        const boasVindas = momentos(aula, "boasVindas")[0];
        saida.push({
          chave: `${curso.slug}__${aula.slug}`,
          titulo: aula.titulo,
          serieLabel: curso.serieLabel,
          disciplina: disciplinaDoCurso(curso),
          resumo: boasVindas?.falaMascote ?? unidade.titulo,
        });
      }
    }
  }
  return saida;
}

export function gerarApostilaEI(chave: string): Apostila | null {
  const [cursoSlug, aulaSlug] = chave.split("__");
  if (!cursoSlug || !aulaSlug) return null;
  const curso = todosOsCursos().find((c) => c.slug === cursoSlug);
  if (!curso) return null;
  let aula: AulaEI | undefined;
  for (const unidade of curso.unidades) {
    const encontrada = unidade.aulas.find((a) => a.slug === aulaSlug);
    if (encontrada) aula = encontrada;
  }
  if (!aula) return null;

  const disciplina = disciplinaDoCurso(curso);
  const imagens = imagensDaAulaEI(aula);
  const criança =
    disciplina === "Matemática"
      ? paginasCriancaMatematica(aula, imagens)
      : paginasCriancaPortugues(aula, imagens);

  return {
    codigo: aula.bncc[0] ?? aula.slug,
    ano: curso.serieLabel,
    disciplina,
    titulo: aula.titulo,
    objetivoPrincipal: momentos(aula, "boasVindas")[0]?.falaMascote ?? aula.titulo,
    paginas: [...paginasProfessor(curso, aula), ...criança],
    termos: [],
  };
}
