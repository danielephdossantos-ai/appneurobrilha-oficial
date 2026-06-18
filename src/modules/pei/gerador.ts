// ============================================================
// PEI — Gerador de Plano Trimestral (motor puro, sem DB)
// ============================================================
// Recebe perfil da criança + habilidades BNCC disponíveis
// e devolve um plano de 90 aulas adaptado.
//
// NÃO grava no banco. Quem grava é a camada de orquestração
// (próximo passo). Aqui é só lógica pura — fácil de testar
// e validar antes de plugar na UI.
// ============================================================

export type PerfilCrianca = {
  idade: number | null;
  serie: string | null;
  diagnostico: string | null;
  tempoAtencaoMin: number | null; // minutos sustentados
  hiperfoco: string | null;
  niveis?: {
    alfabetizacao?: number; // 1..5
    matematica?: number;
    atencao?: number;
    coordenacao?: number;
  } | null;
};

export type BnccHabilidade = {
  id: string;
  codigo_bncc: string;
  disciplina: string | null;
  ano: string | null;
  titulo: string | null;
  objetivo: string | null;
};

export type AtividadeBloco = {
  tipo:
    | "neuro-treino"
    | "alfabetizacao"
    | "matematica"
    | "leitura"
    | "movimento";
  slug: string;
  payload?: Record<string, unknown>;
  tempo_min: number;
};

export type AulaGerada = {
  ordem: number;
  data_prevista: string; // ISO yyyy-mm-dd
  titulo: string;
  objetivo: string;
  bncc_codigos: string[];
  atividades: AtividadeBloco[];
  tempo_total_min: number;
};

export type PlanoGerado = {
  trimestre_inicio: string;
  trimestre_fim: string;
  tempo_aula_min: number;
  perfil_snapshot: PerfilCrianca;
  aulas: AulaGerada[];
};

// ---- adaptação de tempo por perfil ------------------------------
function tempoAulaParaPerfil(p: PerfilCrianca): number {
  // base 15min. Ajusta por atenção sustentada e idade.
  let t = 15;
  const ta = p.tempoAtencaoMin ?? 0;
  if (ta && ta < 5) t = 8;
  else if (ta && ta < 10) t = 10;
  else if (ta && ta < 15) t = 12;
  else if (ta && ta >= 20) t = 18;

  if ((p.idade ?? 0) <= 5) t = Math.min(t, 10);
  if ((p.idade ?? 0) >= 9) t = Math.max(t, 15);

  // TEA / TDAH severos puxam pra baixo
  const d = (p.diagnostico ?? "").toLowerCase();
  if (d.includes("tdah") || d.includes("tea") || d.includes("autis")) {
    t = Math.min(t, 12);
  }
  return t;
}

// Slugs reais das CATEGORIAS de neuro-treino (precisam casar com /neuro-treino/$slug)
const SLUGS_AQUECIMENTO = ["foco-total", "reacao-rapida", "alvo-movel"];
const SLUGS_PORT = [
  "consciencia-silabica",
  "rimas",
  "letra-som",
  "formando-palavras",
  "leitura-palavras",
  "palavra-imagem",
  "completar-letra",
];
const SLUGS_MAT = [
  "sequencia-e-padrao",
  "triagem-categorias",
  "memoria-visual",
  "toque-sequencia",
];
const SLUGS_NEURO = [
  "foco-sustentado",
  "memoria-visual",
  "achar-diferente",
  "copiar-figura",
];
const SLUGS_NEURO_HIPER = ["onde-esta", "cade-o-par", "seguir-instrucao"];
const SLUGS_LEITURA = ["compreensao-leitora"];
const SLUGS_MOV = ["ritmo-batidas", "ritmo-e-sopro"];

function pick<T>(arr: T[], i: number): T {
  return arr[i % arr.length];
}

// ---- divisão do tempo total em blocos curtos --------------------
function montarBlocos(
  tempoTotal: number,
  hab: BnccHabilidade,
  perfil: PerfilCrianca,
  ordem: number,
): AtividadeBloco[] {
  const disc = (hab.disciplina ?? "").toLowerCase();
  const blocoMov: AtividadeBloco = {
    tipo: "movimento",
    slug: pick(SLUGS_MOV, ordem),
    tempo_min: 1,
  };

  // Atividade principal alinhada à disciplina BNCC
  let principal: AtividadeBloco;
  if (disc.includes("port") || disc.includes("língu") || disc.includes("lingu")) {
    principal = {
      tipo: "alfabetizacao",
      slug: pick(SLUGS_PORT, ordem),
      payload: { bncc: hab.codigo_bncc },
      tempo_min: Math.max(4, tempoTotal - 6),
    };
  } else if (disc.includes("mat")) {
    principal = {
      tipo: "matematica",
      slug: pick(SLUGS_MAT, ordem),
      payload: { bncc: hab.codigo_bncc },
      tempo_min: Math.max(4, tempoTotal - 6),
    };
  } else {
    principal = {
      tipo: "neuro-treino",
      slug: perfil.hiperfoco
        ? pick(SLUGS_NEURO_HIPER, ordem)
        : pick(SLUGS_NEURO, ordem),
      payload: { bncc: hab.codigo_bncc, hiperfoco: perfil.hiperfoco },
      tempo_min: Math.max(4, tempoTotal - 6),
    };
  }

  // Aquecimento neuro (sempre) + leitura curta + movimento
  const aquecimento: AtividadeBloco = {
    tipo: "neuro-treino",
    slug: pick(SLUGS_AQUECIMENTO, ordem),
    tempo_min: 2,
  };
  const leitura: AtividadeBloco = {
    tipo: "leitura",
    slug: pick(SLUGS_LEITURA, ordem),
    payload: { hiperfoco: perfil.hiperfoco },
    tempo_min: Math.max(2, tempoTotal - principal.tempo_min - 3),
  };

  const blocos = [aquecimento, principal, leitura, blocoMov];
  const soma = blocos.reduce((a, b) => a + b.tempo_min, 0);
  if (soma > tempoTotal) {
    const excesso = soma - tempoTotal;
    principal.tempo_min = Math.max(3, principal.tempo_min - excesso);
  }
  return blocos;
}


// ---- selecionar habilidades adequadas ---------------------------
function filtrarHabilidades(
  todas: BnccHabilidade[],
  perfil: PerfilCrianca,
): BnccHabilidade[] {
  // Mapeia idade -> ano BNCC esperado
  const idade = perfil.idade ?? 6;
  const anoAlvo = (() => {
    if (idade <= 5) return ["EI", "Educação Infantil"];
    if (idade === 6) return ["1", "1º", "1º ano"];
    if (idade === 7) return ["2", "2º"];
    if (idade === 8) return ["3", "3º"];
    if (idade === 9) return ["4", "4º"];
    if (idade === 10) return ["5", "5º"];
    return ["6", "6º"];
  })();

  const filtrados = todas.filter((h) =>
    anoAlvo.some((a) => (h.ano ?? "").toLowerCase().includes(a.toLowerCase())),
  );
  return filtrados.length >= 30 ? filtrados : todas;
}

// ---- montagem do calendário 90 dias -----------------------------
function addDaysISO(base: Date, d: number): string {
  const x = new Date(base);
  x.setDate(x.getDate() + d);
  return x.toISOString().slice(0, 10);
}

export function gerarPlanoTrimestral(
  perfil: PerfilCrianca,
  habilidades: BnccHabilidade[],
  opts: { inicio?: Date; totalAulas?: number } = {},
): PlanoGerado {
  const inicio = opts.inicio ?? new Date();
  const total = opts.totalAulas ?? 90;
  const tempoAula = tempoAulaParaPerfil(perfil);

  const pool = filtrarHabilidades(habilidades, perfil);
  if (pool.length === 0) {
    throw new Error("Sem habilidades BNCC disponíveis para este perfil");
  }

  // Alterna disciplinas pra evitar fadiga (port / mat / outras)
  const port = pool.filter((h) => /port|lingu|língu/i.test(h.disciplina ?? ""));
  const mat = pool.filter((h) => /mat/i.test(h.disciplina ?? ""));
  const outras = pool.filter(
    (h) =>
      !/port|lingu|língu|mat/i.test(h.disciplina ?? ""),
  );
  const ciclo: BnccHabilidade[] = [];
  const max = Math.max(port.length, mat.length, outras.length);
  for (let i = 0; i < max; i++) {
    if (port[i]) ciclo.push(port[i]);
    if (mat[i]) ciclo.push(mat[i]);
    if (outras[i]) ciclo.push(outras[i]);
  }
  const sequencia = ciclo.length > 0 ? ciclo : pool;

  const aulas: AulaGerada[] = [];
  for (let i = 0; i < total; i++) {
    const hab = sequencia[i % sequencia.length];
    const blocos = montarBlocos(tempoAula, hab, perfil, i);
    aulas.push({
      ordem: i + 1,
      data_prevista: addDaysISO(inicio, i),
      titulo: hab.titulo ?? `Aula ${i + 1}`,
      objetivo: hab.objetivo ?? "Trabalhar habilidade BNCC",
      bncc_codigos: [hab.codigo_bncc],
      atividades: blocos,
      tempo_total_min: blocos.reduce((a, b) => a + b.tempo_min, 0),
    });
  }

  return {
    trimestre_inicio: addDaysISO(inicio, 0),
    trimestre_fim: addDaysISO(inicio, total - 1),
    tempo_aula_min: tempoAula,
    perfil_snapshot: perfil,
    aulas,
  };
}
