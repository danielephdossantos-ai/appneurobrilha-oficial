/**
 * LessonCoverageReport
 * ------------------------------------------------------------------
 * Compara `bncc_habilidades` (habilidades catalogadas) com
 * `lesson_content` (aulas publicadas).
 *
 *  - Não altera banco.
 *  - Não altera UI existente.
 *  - Apenas leitura: SELECT em duas tabelas.
 *
 * Considera "aula publicada" um registro em lesson_content com
 * `is_complete = true` (quando a coluna existir). Se um codigo_bncc
 * tiver múltiplas linhas em lesson_content, conta como UMA aula.
 *
 * Saída:
 *   {
 *     total, comAula, semAula, percent,
 *     porAno:        [{ ano, total, comAula, semAula, percent }],
 *     porDisciplina: [{ disciplina, total, comAula, semAula, percent }],
 *     porAnoDisciplina: [{ ano, disciplina, total, comAula, percent }],
 *   }
 */

import { supabase } from "@/integrations/supabase/client";

export interface CoverageBucket {
  label: string;
  total: number;
  comAula: number;
  semAula: number;
  percent: number; // 0..100
}

export interface CoverageReport {
  total: number;
  comAula: number;
  semAula: number;
  percent: number;
  porAno: CoverageBucket[];
  porDisciplina: CoverageBucket[];
  porAnoDisciplina: Array<CoverageBucket & { ano: string; disciplina: string }>;
  gerado_em: string;
}

// Ordem oficial dos segmentos pedidos no relatório
const ANO_ORDEM = [
  "Educação Infantil",
  "1º Ano",
  "2º Ano",
  "3º Ano",
  "4º Ano",
  "5º Ano",
  "6º Ano",
  "7º Ano",
  "8º Ano",
  "9º Ano",
];

// Normaliza diferentes grafias ("1 Ano", "1º ano", "ano-1", ...) para a chave oficial.
function normalizeAno(raw: string | null | undefined): string {
  if (!raw) return "Sem ano";
  const s = String(raw).trim().toLowerCase();
  if (s.includes("infantil") || s.includes("ei")) return "Educação Infantil";
  const m = s.match(/(\d)\s*[ºo°]?\s*ano/) ?? s.match(/^ano[\s-]?(\d)/) ?? s.match(/^(\d)$/);
  if (m) {
    const n = parseInt(m[1], 10);
    if (n >= 1 && n <= 9) return `${n}º Ano`;
  }
  return raw;
}

function pct(part: number, total: number): number {
  if (!total) return 0;
  return Math.round((part / total) * 1000) / 10; // 1 casa decimal
}

function bucket(label: string, total: number, comAula: number): CoverageBucket {
  return { label, total, comAula, semAula: total - comAula, percent: pct(comAula, total) };
}

export const LessonCoverageReport = {
  async generate(): Promise<CoverageReport> {
    // 1) Todas as habilidades (paginar a cada 1000 — limite do PostgREST)
    const habilidades: Array<{ codigo_bncc: string; ano: string | null; disciplina: string | null }> = [];
    for (let from = 0; ; from += 1000) {
      const { data, error } = await supabase
        .from("bncc_habilidades")
        .select("codigo_bncc, ano, disciplina")
        .range(from, from + 999);
      if (error) throw new Error(`bncc_habilidades: ${error.message}`);
      if (!data || data.length === 0) break;
      habilidades.push(
        ...data.map((r) => ({
          codigo_bncc: String(r.codigo_bncc),
          ano: r.ano as string | null,
          disciplina: r.disciplina as string | null,
        })),
      );
      if (data.length < 1000) break;
    }

    // 2) Códigos com aula publicada e completa
    const publicados = new Set<string>();
    for (let from = 0; ; from += 1000) {
      const { data, error } = await supabase
        .from("lesson_content")
        .select("codigo_bncc, is_complete")
        .range(from, from + 999);
      if (error) throw new Error(`lesson_content: ${error.message}`);
      if (!data || data.length === 0) break;
      for (const row of data) {
        const code = row.codigo_bncc as string | null;
        // Se a coluna is_complete vier null tratamos como publicada (fallback retrocompat).
        const complete = row.is_complete === null || row.is_complete === true;
        if (code && complete) publicados.add(code);
      }
      if (data.length < 1000) break;
    }

    // 3) Agregações
    const total = habilidades.length;
    let comAula = 0;
    const ano = new Map<string, { total: number; com: number }>();
    const disc = new Map<string, { total: number; com: number }>();
    const anoDisc = new Map<string, { ano: string; disciplina: string; total: number; com: number }>();

    for (const h of habilidades) {
      const isCovered = publicados.has(h.codigo_bncc);
      if (isCovered) comAula++;

      const a = normalizeAno(h.ano);
      const d = (h.disciplina ?? "Sem disciplina").trim() || "Sem disciplina";

      const ra = ano.get(a) ?? { total: 0, com: 0 };
      ra.total++; if (isCovered) ra.com++; ano.set(a, ra);

      const rd = disc.get(d) ?? { total: 0, com: 0 };
      rd.total++; if (isCovered) rd.com++; disc.set(d, rd);

      const key = `${a}__${d}`;
      const rad = anoDisc.get(key) ?? { ano: a, disciplina: d, total: 0, com: 0 };
      rad.total++; if (isCovered) rad.com++; anoDisc.set(key, rad);
    }

    // 4) Ordenação: anos na ordem pedida, depois extras alfabéticos
    const porAnoOrdenado = [
      ...ANO_ORDEM.filter((label) => ano.has(label)).map((label) => {
        const r = ano.get(label)!;
        return bucket(label, r.total, r.com);
      }),
      ...[...ano.keys()]
        .filter((k) => !ANO_ORDEM.includes(k))
        .sort()
        .map((label) => {
          const r = ano.get(label)!;
          return bucket(label, r.total, r.com);
        }),
    ];

    const porDisciplinaOrdenado = [...disc.entries()]
      .sort(([a], [b]) => a.localeCompare(b, "pt-BR"))
      .map(([label, r]) => bucket(label, r.total, r.com));

    const anoIndex = new Map(ANO_ORDEM.map((a, i) => [a, i]));
    const porAnoDisciplinaOrdenado = [...anoDisc.values()]
      .sort((a, b) => {
        const ai = anoIndex.get(a.ano) ?? 99;
        const bi = anoIndex.get(b.ano) ?? 99;
        if (ai !== bi) return ai - bi;
        return a.disciplina.localeCompare(b.disciplina, "pt-BR");
      })
      .map((r) => ({
        ...bucket(`${r.ano} · ${r.disciplina}`, r.total, r.com),
        ano: r.ano,
        disciplina: r.disciplina,
      }));

    return {
      total,
      comAula,
      semAula: total - comAula,
      percent: pct(comAula, total),
      porAno: porAnoOrdenado,
      porDisciplina: porDisciplinaOrdenado,
      porAnoDisciplina: porAnoDisciplinaOrdenado,
      gerado_em: new Date().toISOString(),
    };
  },
};

export default LessonCoverageReport;
