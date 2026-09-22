/**
 * Conversor de aula do app → apostila A4 para imprimir (área do professor).
 *
 * Regras:
 *  - NÃO inventa conteúdo: todo texto vem da própria aula.
 *  - NÃO usa IA: é transformação determinística (custo zero).
 *  - Imagens: apenas as que a própria aula já referencia + (opcional)
 *    imagens do Banco de Mídias ligadas ao tema, passadas por quem chama.
 */

import type { Aula } from "@/escola-brilha/types";

export type ApostilaImagem = { url: string; legenda?: string };
export type ApostilaItemVisual = ApostilaImagem | { texto: string };

export type ApostilaBloco =
  | { tipo: "texto"; titulo?: string; texto: string }
  | { tipo: "lista"; titulo?: string; itens: string[] }
  | { tipo: "passos"; titulo?: string; passos: string[] }
  | { tipo: "imagens"; titulo?: string; imagens: ApostilaImagem[] }
  | { tipo: "contagem"; titulo?: string; imagem: string; quantidade: number; rotulo?: string }
  | { tipo: "linhas"; titulo?: string; enunciado: string; linhas: number }
  | {
      tipo: "escolha-visual";
      titulo?: string;
      comando: string;
      modelo?: ApostilaImagem;
      imagens: ApostilaImagem[];
    }
  | {
      tipo: "ligar-imagens";
      titulo?: string;
      comando: string;
      esquerda: ApostilaItemVisual[];
      direita: ApostilaItemVisual[];
    }
  | {
      tipo: "tracado";
      titulo?: string;
      comando: string;
      itens: string[];
    }
  | {
      tipo: "marcar-som";
      titulo?: string;
      comando: string;
      itens: Array<{ imagem: ApostilaImagem; opcoes: string[] }>;
    }
  | {
      tipo: "marcar-figura";
      titulo?: string;
      comando: string;
      questoes: Array<{ pergunta: string; imagens: ApostilaImagem[] }>;
    }
  | {
      tipo: "procurar-letras";
      titulo?: string;
      comando: string;
      letras: string[];
      alvos: string[];
    }
  | {
      tipo: "colorir-inicial";
      titulo?: string;
      comando: string;
      itens: Array<{ imagem: ApostilaImagem; inicial: string }>;
    }
  | {
      tipo: "alternativas";
      titulo?: string;
      questoes: Array<{ enunciado: string; opcoes: string[] }>;
    }
  | { tipo: "aviso"; titulo?: string; texto: string };

export type ApostilaPagina = {
  /** Cabeçalho da folha A4. */
  etiqueta: "Guia do professor" | "Folha do estudante" | "Gabarito" | "Carta para a família";
  titulo: string;
  subtitulo?: string;
  blocos: ApostilaBloco[];
};

export type Apostila = {
  codigo: string;
  ano: string;
  disciplina: string;
  titulo: string;
  objetivoPrincipal: string;
  paginas: ApostilaPagina[];
  /** Palavras-chave para buscar imagens no Banco de Mídias. */
  termos: string[];
};

const PALAVRAS_IGNORADAS = new Set([
  "a","o","as","os","de","da","do","das","dos","e","em","no","na","nos","nas","um","uma","uns","umas",
  "para","por","com","que","se","ao","aos","à","às","the","of","é","ser","sua","seu","mais","como",
  "primeiro","palavra","palavras","criança","crianças","aula","brilha","som","sons","vamos","cada",
]);

function normalizar(t: string): string {
  return t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");
}

/** Termos de busca a partir do título e objetivos da aula. */
export function termosDaAula(aula: Aula): string[] {
  const base = [aula.titulo, ...(aula.objetivos ?? [])].join(" ");
  const vistos = new Set<string>();
  for (const p of normalizar(base).split(/\s+/)) {
    if (p.length < 4 || PALAVRAS_IGNORADAS.has(p)) continue;
    vistos.add(p);
    if (vistos.size >= 8) break;
  }
  return [...vistos];
}

const CHAVE_IMAGEM = /(img|imagemurl|imagem|mapafundo|thumbnail|url)$/i;

function pareceImagem(v: unknown): v is string {
  return (
    typeof v === "string" &&
    (/^https?:\/\//.test(v) || v.startsWith("/") || v.startsWith("data:image")) &&
    !/\.(mp3|wav|ogg|m4a)$/i.test(v)
  );
}

/** Coleta, sem duplicar, todas as imagens que a aula já usa. */
export function imagensDaAula(aula: Aula, limite = 12): ApostilaImagem[] {
  const urls: ApostilaImagem[] = [];
  const vistos = new Set<string>();
  const add = (url: string, legenda?: string) => {
    if (vistos.has(url) || urls.length >= limite) return;
    vistos.add(url);
    const arquivo = decodeURIComponent(url.split("/").pop() ?? "")
      .replace(/\.asset\.json$/i, "")
      .replace(/\.[a-z0-9]+$/i, "")
      .replace(/[-_]+/g, " ")
      .trim();
    urls.push({ url, legenda: arquivo || legenda });
  };
  const visitar = (no: unknown, rotulo?: string) => {
    if (!no || urls.length >= limite) return;
    if (Array.isArray(no)) {
      for (const item of no) visitar(item, rotulo);
      return;
    }
    if (typeof no !== "object") return;
    const obj = no as Record<string, unknown>;
    const legenda =
      (typeof obj["alt"] === "string" && obj["alt"]) ||
      (typeof obj["legenda"] === "string" && obj["legenda"]) ||
      (typeof obj["rotulo"] === "string" && obj["rotulo"]) ||
      (typeof obj["nome"] === "string" && obj["nome"]) ||
      rotulo ||
      undefined;
    for (const [chave, valor] of Object.entries(obj)) {
      if (CHAVE_IMAGEM.test(chave) && pareceImagem(valor)) add(valor, legenda as string | undefined);
      else visitar(valor, legenda as string | undefined);
    }
  };
  visitar(aula as unknown);
  return urls;
}

function paragrafos(texto: string): string[] {
  return (texto || "")
    .split(/\n{2,}|\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function imagemComLegenda(imagens: ApostilaImagem[], legenda: string): ApostilaImagem | undefined {
  const alvo = normalizar(legenda);
  return imagens.find((imagem) => normalizar(imagem.legenda ?? "").includes(alvo));
}

function paginasInfantisEF01LP01(imagens: ApostilaImagem[]): ApostilaPagina[] | null {
  const gato = imagemComLegenda(imagens, "gato");
  const sol = imagemComLegenda(imagens, "sol");
  const bola = imagemComLegenda(imagens, "bola");
  const pato = imagemComLegenda(imagens, "pato");
  const sapo = imagemComLegenda(imagens, "sapo");
  const casa = imagemComLegenda(imagens, "casa");
  const rato = imagemComLegenda(imagens, "rato");
  const vaca = imagemComLegenda(imagens, "vaca");
  const dado = imagemComLegenda(imagens, "dado");
  if (!gato || !sol || !bola || !pato || !sapo || !casa || !rato || !vaca || !dado) return null;

  return [
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 1 — Descubra o começo",
      blocos: [
        {
          tipo: "escolha-visual",
          comando: "Circule a figura que começa igual ao modelo.",
          modelo: sol,
          imagens: [sapo, gato, bola, pato],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 2 — Primeiro som da palavra",
      blocos: [
        {
          tipo: "marcar-som",
          comando: "Marque a letra que combina com o começo de cada figura.",
          itens: [
            { imagem: gato, opcoes: ["G", "S", "B"] },
            { imagem: bola, opcoes: ["P", "B", "R"] },
            { imagem: pato, opcoes: ["D", "P", "V"] },
          ],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 3 — Ligue cada figura",
      blocos: [
        {
          tipo: "ligar-imagens",
          comando: "Ligue cada letra à figura que começa com ela.",
          esquerda: [{ texto: "G" }, { texto: "S" }, { texto: "B" }, { texto: "P" }],
          direita: [pato, gato, sapo, bola],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 4 — Cubra o pontilhado",
      blocos: [
        {
          tipo: "tracado",
          comando: "Cubra a letra pontilhada e escreva no espaço.",
          itens: ["G"],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 5 — Marque a resposta correta",
      blocos: [
        {
          tipo: "marcar-figura",
          comando: "Marque uma resposta em cada atividade.",
          questoes: [
            { pergunta: "1. Qual figura começa com G?", imagens: [gato, sol, bola] },
            { pergunta: "2. Qual figura começa com P?", imagens: [casa, pato, rato] },
            { pergunta: "3. Qual figura começa como SAPO?", imagens: [sol, rato, dado] },
          ],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 6 — Procure as letras",
      blocos: [
        {
          tipo: "procurar-letras",
          comando: "Procure e circule as letras G, S, B e P.",
          alvos: ["G", "S", "B", "P"],
          letras: ["M", "G", "A", "S", "B", "O", "P", "L", "S", "T", "G", "B", "D", "P", "C", "A"],
        },
      ],
    },
    {
      etiqueta: "Folha do estudante",
      titulo: "Atividade 7 — Pinte e complete",
      blocos: [
        {
          tipo: "colorir-inicial",
          comando: "Pinte as figuras e escreva a primeira letra.",
          itens: [
            { imagem: gato, inicial: "G" },
            { imagem: sol, inicial: "S" },
            { imagem: bola, inicial: "B" },
            { imagem: pato, inicial: "P" },
          ],
        },
      ],
    },
  ];
}

/** Adaptações impressas — orientação docente fixa, não gerada por IA. */
const ADAPTACOES: string[] = [
  "TEA: antecipe a sequência da folha (mostre as etapas antes de começar), aceite resposta apontando e mantenha o mesmo comando em todas as questões.",
  "TDAH: divida a folha em duas partes, marque uma pausa de movimento no meio e destaque com lápis de cor a questão atual.",
  "Dislexia: leia o enunciado em voz alta, aceite resposta oral, e não conte erro de ortografia como erro de conteúdo.",
  "Deficiência intelectual: reduza para as duas primeiras questões, use os objetos reais da sala e repita a prática guiada antes de cobrar.",
  "Dificuldade motora na escrita: aceite marcar com X, colar figura ou responder falando; ofereça linhas mais largas.",
];

export function gerarApostila(aula: Aula, extras: ApostilaImagem[] = []): Apostila {
  const imagensAula = imagensDaAula(aula);
  const imagens = [...imagensAula];
  for (const e of extras) {
    if (imagens.length >= 12) break;
    if (!imagens.some((i) => i.url === e.url)) imagens.push(e);
  }

  const paginas: ApostilaPagina[] = [];

  // ---------------- Guia do professor · folha 1 ----------------
  const guia1: ApostilaBloco[] = [
    { tipo: "texto", titulo: "O que a criança vai aprender", texto: aula.missao },
    { tipo: "lista", titulo: "Objetivos da aula", itens: aula.objetivos ?? [] },
  ];
  if (aula.conhecimentosPrevios?.length)
    guia1.push({ tipo: "lista", titulo: "O que a criança já precisa saber", itens: aula.conhecimentosPrevios });
  guia1.push({
    tipo: "lista",
    titulo: "Como conduzir (30 a 40 minutos)",
    itens: [
      "1. Acolhimento e história de abertura — 5 min (leia o roteiro de fala).",
      "2. Explicação com material concreto — 8 min.",
      "3. Exemplo resolvido junto com a turma — 5 min.",
      "4. Prática guiada: a criança tenta, o professor acompanha — 7 min.",
      "5. Folha do estudante: prática independente — 10 min.",
      "6. Fechamento: retomar o resumo e entregar a carta da família — 5 min.",
    ],
  });
  if (aula.narrativa)
    guia1.push({
      tipo: "passos",
      titulo: `Roteiro de fala — ${aula.narrativa.titulo}`,
      passos: [aula.narrativa.contexto, aula.narrativa.problema, aula.narrativa.convite],
    });
  paginas.push({
    etiqueta: "Guia do professor",
    titulo: aula.titulo,
    subtitulo: "Plano de aula e roteiro de condução",
    blocos: guia1,
  });

  // ---------------- Guia do professor · folha 2 ----------------
  const guia2: ApostilaBloco[] = [
    { tipo: "passos", titulo: "Explicação passo a passo", passos: paragrafos(aula.explicacao) },
  ];
  const niveis = aula.explicacoesNiveis ?? {};
  const outrosJeitos = [niveis.nivel2, niveis.nivel3, niveis.nivel4].filter(
    (t): t is string => !!t && t.trim().length > 0,
  );
  if (outrosJeitos.length)
    guia2.push({ tipo: "lista", titulo: "Se a criança não entendeu, explique assim", itens: outrosJeitos });
  guia2.push({
    tipo: "passos",
    titulo: `Exemplo resolvido — ${aula.exemploResolvido.enunciado}`,
    passos: [...aula.exemploResolvido.passos, `Resposta: ${aula.exemploResolvido.resposta}`],
  });
  guia2.push({
    tipo: "texto",
    titulo: "Prática guiada (faça junto antes da folha)",
    texto: `${aula.atividadeGuiada.enunciado}\nResposta: ${aula.atividadeGuiada.resposta}\nComo explicar: ${aula.atividadeGuiada.explicacao}`,
  });
  guia2.push({ tipo: "lista", titulo: "Adaptações para a sala de aula", itens: ADAPTACOES });
  guia2.push({
    tipo: "aviso",
    titulo: "Feedback que ensina",
    texto:
      "Nunca responda só “certo” ou “errado”. Diga o que a criança fez e por que funciona: “Você acertou porque contou um por um e não repetiu nenhum.”",
  });
  paginas.push({
    etiqueta: "Guia do professor",
    titulo: aula.titulo,
    subtitulo: "Como ensinar, como explicar de novo e como adaptar",
    blocos: guia2,
  });

  // ---------------- Folhas do estudante ----------------
  // O piloto EF01LP01 usa tarefas concretas, exclusivamente no papel.
  const folhasPiloto = aula.codigo === "EF01LP01" ? paginasInfantisEF01LP01(imagens) : null;
  if (folhasPiloto) paginas.push(...folhasPiloto);

  // Compatibilidade para as demais aulas, ainda no modelo anterior.
  if (!folhasPiloto) {
  const folha1: ApostilaBloco[] = [
    { tipo: "linhas", titulo: "Nome", enunciado: "Escreva seu nome:", linhas: 1 },
  ];
  const interativo = aula.exemploResolvido.interativo;
  if (interativo)
    folha1.push({
      tipo: "contagem",
      titulo: "Atividade 1 — observe e conte",
      imagem: interativo.imagemUrl,
      quantidade: interativo.quantidade,
      rotulo: interativo.pergunta ?? `Quantas ${interativo.nomeItemPlural ?? interativo.nomeItem + "s"} você vê?`,
    });
  if (imagens.length)
    folha1.push({
      tipo: "imagens",
      titulo: interativo ? "Atividade 2 — fale o nome de cada figura e ligue com o que o professor pedir" : "Atividade 1 — fale o nome de cada figura",
      imagens: imagens.slice(0, 8),
    });
  folha1.push({
    tipo: "linhas",
    titulo: "Atividade com a turma",
    enunciado: aula.atividadeGuiada.enunciado,
    linhas: 2,
  });
  paginas.push({
    etiqueta: "Folha do estudante",
    titulo: aula.titulo,
    subtitulo: "Observe, fale e registre",
    blocos: folha1,
  });

  // ---------------- Folha do estudante · 2 (exercícios) ----------------
  const folha2: ApostilaBloco[] = (aula.exercicios ?? []).slice(0, 6).map((ex, i) => ({
    tipo: "linhas" as const,
    titulo: `Questão ${i + 1}`,
    enunciado: ex.enunciado,
    linhas: 2,
  }));
  if (aula.quiz?.length)
    folha2.push({
      tipo: "alternativas",
      titulo: "Marque a resposta correta",
      questoes: aula.quiz.slice(0, 4).map((q) => ({ enunciado: q.pergunta, opcoes: q.opcoes })),
    });
  folha2.push({ tipo: "linhas", titulo: "Desafio", enunciado: aula.desafio.enunciado, linhas: 3 });
  paginas.push({
    etiqueta: "Folha do estudante",
    titulo: aula.titulo,
    subtitulo: "Agora é você — responda do seu jeito",
    blocos: folha2,
  });
  }

  if (!folhasPiloto) {
    // ---------------- Gabarito ----------------
    const gabarito: ApostilaBloco[] = [
      {
        tipo: "lista",
        titulo: "Respostas das questões",
        itens: (aula.exercicios ?? [])
          .slice(0, 6)
          .map((ex, i) => `Questão ${i + 1}: ${ex.resposta}${ex.dica ? ` · Dica se travar: ${ex.dica}` : ""}`),
      },
    ];
    if (aula.quiz?.length)
      gabarito.push({
        tipo: "lista",
        titulo: "Marque a resposta correta",
        itens: aula.quiz
          .slice(0, 4)
          .map(
            (q, i) =>
              `${i + 1}. ${q.pergunta} → ${q.opcoes[q.correta] ?? "-"}. Por quê: ${q.explicacao}`,
          ),
      });
    gabarito.push({ tipo: "texto", titulo: "Desafio", texto: aula.desafio.resposta });
    gabarito.push({
      tipo: "lista",
      titulo: "O que observar na criança",
      itens: [
        "Consegue fazer sozinha, com apoio ou ainda não consegue?",
        "Precisou de quantas repetições do comando?",
        "Manteve atenção até o fim da folha?",
        ...(aula.revisao?.pontos ?? []).map((p) => `Domina: ${p}`),
      ],
    });
    paginas.push({
      etiqueta: "Gabarito",
      titulo: aula.titulo,
      subtitulo: "Uso exclusivo do professor — não entregue à criança",
      blocos: gabarito,
    });

    // ---------------- Carta para a família ----------------
    paginas.push({
      etiqueta: "Carta para a família",
      titulo: "O que fizemos hoje na escola",
      subtitulo: aula.titulo,
      blocos: [
        { tipo: "texto", titulo: "Hoje a turma aprendeu", texto: aula.missao },
        { tipo: "lista", titulo: "Para lembrar em casa", itens: aula.revisao?.pontos ?? [] },
        ...(aula.revisao?.dica
          ? [{ tipo: "aviso" as const, titulo: "Dica de ouro", texto: aula.revisao.dica }]
          : []),
        { tipo: "texto", titulo: "Missão em família (10 minutos)", texto: aula.conclusao },
        {
          tipo: "linhas",
          titulo: "Recado do responsável",
          enunciado: "Como foi a missão em casa?",
          linhas: 3,
        },
      ],
    });
  }

  return {
    codigo: aula.codigo,
    ano: aula.ano,
    disciplina: aula.disciplina,
    titulo: aula.titulo,
    objetivoPrincipal: aula.missao,
    paginas,
    termos: termosDaAula(aula),
  };
}
