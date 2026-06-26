// ============================================================
// PEI — Gerador de Plano Trimestral (motor puro, sem DB)
// ============================================================
// Jornada 365 = BNCC puro. Nenhum bloco neuro-treino aqui.
// Cada bloco aponta para uma aula real de aulas_bncc.
// ============================================================

export type PerfilCrianca = {
  idade: number | null;
  serie: string | null;
  diagnostico: string | null;
  tempoAtencaoMin: number | null;
  hiperfoco: string | null;
  niveis?: {
    alfabetizacao?: number;
    matematica?: number;
    atencao?: number;
    coordenacao?: number;
  } | null;
};

export type AulaBnccRef = {
  id: string;
  codigo_bncc: string;
  serie: string | null;
  disciplina: string | null;
  titulo: string | null;
  descricao: string | null;
  ordem: number | null;
};

export type NeuroProfilePayload = "Tipico" | "TDAH" | "TEA" | "Dislexia" | "DeficienciaIntelectual";

export type AtividadeBloco = {
  tipo: "bncc";
  slug: string;            // codigo_bncc (referência humana)
  payload: { aula_id: string; disciplina: string | null; neuro_profile: NeuroProfilePayload };
  tempo_min: number;
};

function diagnosticoToNeuroPayload(d: string | null | undefined): NeuroProfilePayload {
  switch (d) {
    case "tea": return "TEA";
    case "tdah": return "TDAH";
    case "dislexia": return "Dislexia";
    case "deficiencia_intelectual": return "DeficienciaIntelectual";
    default: return "Tipico";
  }
}

export type AulaGerada = {
  ordem: number;
  data_prevista: string;
  titulo: string;
  objetivo: string;
  bncc_codigos: string[];
  atividades: AtividadeBloco[];
  tempo_total_min: number;
};

export type AdaptacaoCtx = {
  fadigaAlta: boolean;            // últimos 7 dias com pausas recomendadas
  habilidadesParaReforco: string[]; // codigo_bncc com mastery < 0.6
};

export type PlanoGerado = {
  trimestre_inicio: string;
  trimestre_fim: string;
  tempo_aula_min: number;
  perfil_snapshot: PerfilCrianca;
  adaptacao: AdaptacaoCtx;
  aulas: AulaGerada[];
};

// ---- adaptação de tempo por perfil ------------------------------
export function tempoAulaParaPerfil(
  p: PerfilCrianca,
  ctx: AdaptacaoCtx,
): number {
  let t = 15;
  const ta = p.tempoAtencaoMin ?? 0;
  if (ta && ta < 5) t = 8;
  else if (ta && ta < 10) t = 10;
  else if (ta && ta < 15) t = 12;
  else if (ta && ta >= 20) t = 18;

  if ((p.idade ?? 0) <= 5) t = Math.min(t, 10);
  if ((p.idade ?? 0) >= 9) t = Math.max(t, 15);

  const d = (p.diagnostico ?? "").toLowerCase();
  if (d.includes("tdah") || d.includes("tea") || d.includes("autis")) {
    t = Math.min(t, 12);
  }

  // ADAPTATIVO: fadiga alta → corta 25%
  if (ctx.fadigaAlta) t = Math.max(6, Math.round(t * 0.75));

  return t;
}

// Mapeia idade → série BNCC (formato igual ao da tabela aulas_bncc)
export function serieParaIdade(idade: number | null): string {
  const i = idade ?? 6;
  if (i <= 5) return "Pré-Escola";
  if (i === 6) return "1º Ano";
  if (i === 7) return "2º Ano";
  if (i === 8) return "3º Ano";
  if (i === 9) return "4º Ano";
  if (i === 10) return "5º Ano";
  if (i === 11) return "6º Ano";
  if (i === 12) return "7º Ano";
  if (i === 13) return "8º Ano";
  return "9º Ano";
}

// ---- montagem dos blocos de uma aula ----------------------------
function montarBlocos(
  tempoTotal: number,
  principal: AulaBnccRef,
  reforco: AulaBnccRef | null,
  ctx: AdaptacaoCtx,
): AtividadeBloco[] {
  const blocos: AtividadeBloco[] = [];

  // Reforço (se houver) vem primeiro com tempo curto
  if (reforco) {
    blocos.push({
      tipo: "bncc",
      slug: reforco.codigo_bncc,
      payload: { aula_id: reforco.id, disciplina: reforco.disciplina },
      tempo_min: Math.max(3, Math.round(tempoTotal * 0.3)),
    });
  }

  blocos.push({
    tipo: "bncc",
    slug: principal.codigo_bncc,
    payload: { aula_id: principal.id, disciplina: principal.disciplina },
    tempo_min: reforco
      ? Math.max(4, tempoTotal - Math.round(tempoTotal * 0.3))
      : tempoTotal,
  });

  // Se fadiga alta, evita 3 blocos
  if (!ctx.fadigaAlta && !reforco && tempoTotal >= 12) {
    // espaço pra um bloco extra opcional fica reservado pelo orquestrador
  }

  return blocos;
}

// ---- selecionar aulas adequadas à série -------------------------
function filtrarAulasPorSerie(
  aulas: AulaBnccRef[],
  serie: string,
): AulaBnccRef[] {
  const filt = aulas.filter((a) => (a.serie ?? "") === serie);
  return filt.length >= 10 ? filt : aulas;
}

function addDaysISO(base: Date, d: number): string {
  const x = new Date(base);
  x.setDate(x.getDate() + d);
  return x.toISOString().slice(0, 10);
}

export function gerarPlanoTrimestral(
  perfil: PerfilCrianca,
  aulasBncc: AulaBnccRef[],
  ctx: AdaptacaoCtx,
  opts: { inicio?: Date; totalAulas?: number } = {},
): PlanoGerado {
  const inicio = opts.inicio ?? new Date();
  const total = opts.totalAulas ?? 90;
  const tempoAula = tempoAulaParaPerfil(perfil, ctx);

  const serie = serieParaIdade(perfil.idade);
  const pool = filtrarAulasPorSerie(aulasBncc, serie);
  if (pool.length === 0) {
    throw new Error("Sem aulas BNCC disponíveis para esta série");
  }

  // Alterna disciplinas para evitar fadiga
  const port = pool.filter((a) => /port|lingu|língu/i.test(a.disciplina ?? ""));
  const mat = pool.filter((a) => /mat/i.test(a.disciplina ?? ""));
  const outras = pool.filter(
    (a) => !/port|lingu|língu|mat/i.test(a.disciplina ?? ""),
  );
  const ciclo: AulaBnccRef[] = [];
  const max = Math.max(port.length, mat.length, outras.length);
  for (let i = 0; i < max; i++) {
    if (port[i]) ciclo.push(port[i]);
    if (mat[i]) ciclo.push(mat[i]);
    if (outras[i]) ciclo.push(outras[i]);
  }
  const sequencia = ciclo.length > 0 ? ciclo : pool;

  // Mapa de reforço: códigos a revisitar (mastery < 0.6)
  const reforcoSet = new Set(ctx.habilidadesParaReforco);
  const reforcoPool = pool.filter((a) => reforcoSet.has(a.codigo_bncc));

  const aulas: AulaGerada[] = [];
  for (let i = 0; i < total; i++) {
    const principal = sequencia[i % sequencia.length];

    // A cada 3 dias, se há habilidades fracas, insere reforço
    let reforco: AulaBnccRef | null = null;
    if (reforcoPool.length > 0 && i % 3 === 0) {
      reforco = reforcoPool[Math.floor(i / 3) % reforcoPool.length];
    }

    const blocos = montarBlocos(tempoAula, principal, reforco, ctx);
    aulas.push({
      ordem: i + 1,
      data_prevista: addDaysISO(inicio, i),
      titulo: principal.titulo ?? `Aula ${i + 1}`,
      objetivo: principal.descricao ?? "Trabalhar habilidade BNCC",
      bncc_codigos: reforco
        ? [reforco.codigo_bncc, principal.codigo_bncc]
        : [principal.codigo_bncc],
      atividades: blocos,
      tempo_total_min: blocos.reduce((a, b) => a + b.tempo_min, 0),
    });
  }

  return {
    trimestre_inicio: addDaysISO(inicio, 0),
    trimestre_fim: addDaysISO(inicio, total - 1),
    tempo_aula_min: tempoAula,
    perfil_snapshot: perfil,
    adaptacao: ctx,
    aulas,
  };
}
