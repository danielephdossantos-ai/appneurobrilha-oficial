// Currículo Anual — monta o ano letivo da criança usando os cursos reais
// do Escola Brilha (curso-v4), dividido em 2 semestres.
import { listCursos } from "@/escola-brilha/curso-v4/registry";
import type { CursoAny } from "@/escola-brilha/curso-v4/types";

export interface ItemCurriculo {
  semestre: 1 | 2;
  semana: number;
  dia_semana: number; // 1 = Seg ... 5 = Sex
  ordem: number;
  disciplina: string;
  curso_slug: string;
  aula_slug: string;
  titulo: string;
  rota: string;
  minutos: number;
  prioridade: number; // 1 = alta (reforço pela anamnese), 2 = normal
}

export interface CurriculoGerado {
  serie: string;
  ano_letivo: number;
  minutos_por_dia: number;
  dias_por_semana: number;
  semanas_por_semestre: number;
  itens: ItemCurriculo[];
  disciplinas: string[];
}

export const DIAS_LABEL = ["", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

/** "3º Ano" | "3" | "3ano" → 3 */
export function serieParaNumero(serie: string | number | undefined | null): number | null {
  if (serie === null || serie === undefined) return null;
  const m = String(serie).match(/(\d+)/);
  if (!m) return null;
  const n = Number(m[1]);
  return n >= 1 && n <= 9 ? n : null;
}

function rotaDaAula(curso: CursoAny, aulaSlug: string): string {
  const tipo = curso.tipoAula ?? "matematica";
  const base =
    tipo === "portugues"
      ? "aula-pt-v4"
      : tipo === "geo-v1"
        ? "aula-geo-v1"
        : tipo === "arte-v1"
          ? "aula-arte-v1"
          : "aula-v4";
  return `/escola-brilha/${base}/${curso.slug}/${aulaSlug}`;
}

/** Prioriza disciplinas conforme os riscos da anamnese v2. */
function prioridadeDaDisciplina(disciplina: string, risk?: Record<string, unknown> | null): number {
  if (!risk) return 2;
  const d = disciplina.toLowerCase();
  const alto = (chave: string) => {
    const v = String((risk as any)[chave] ?? "").toLowerCase();
    return v === "alto" || v === "high" || v === "moderado";
  };
  if ((d.includes("portug") || d.includes("língua")) && (alto("leitura") || alto("dislexia") || alto("linguagem")))
    return 1;
  if (d.includes("matem") && (alto("matematica") || alto("discalculia"))) return 1;
  return 2;
}

/** Todos os cursos do Escola Brilha da série indicada. */
export function cursosDaSerie(serie: string | number): CursoAny[] {
  const n = serieParaNumero(serie);
  if (!n) return [];
  return listCursos()
    .filter((c) => serieParaNumero((c as any).ano) === n)
    // geografia tem versões v2; mantém uma por disciplina (a de slug mais recente)
    .reduce<CursoAny[]>((acc, c) => {
      const i = acc.findIndex((x) => x.disciplina === c.disciplina);
      if (i < 0) acc.push(c);
      else if (c.slug.length > acc[i].slug.length) acc[i] = c;
      return acc;
    }, [])
    .sort((a, b) => a.disciplina.localeCompare(b.disciplina, "pt-BR"));
}

export interface GerarInput {
  serie: string | number;
  risk?: Record<string, unknown> | null;
  minutosPorDia?: number;
  diasPorSemana?: number;
  semanasPorSemestre?: number;
  anoLetivo?: number;
}

/**
 * Distribui todas as aulas dos cursos da série em 2 semestres.
 * Regra: a cada dia entram aulas de disciplinas diferentes (rotação),
 * respeitando o limite de minutos do dia. Disciplinas prioritárias
 * (anamnese) entram primeiro na semana.
 */
export function gerarCurriculoAnual(input: GerarInput): CurriculoGerado {
  const minutosPorDia = input.minutosPorDia ?? 30;
  const diasPorSemana = Math.min(5, Math.max(1, input.diasPorSemana ?? 5));
  const semanasPorSemestre = input.semanasPorSemestre ?? 20;
  const anoLetivo = input.anoLetivo ?? new Date().getFullYear();

  const cursos = cursosDaSerie(input.serie);

  // Fila de aulas por disciplina, com prioridade da anamnese.
  const filas = cursos.map((curso) => {
    const aulas: Array<{ slug: string; titulo: string }> = [];
    for (const u of (curso as any).unidades ?? []) {
      for (const a of u.aulas ?? []) aulas.push({ slug: a.slug, titulo: a.titulo });
    }
    return {
      curso,
      disciplina: curso.disciplina,
      prioridade: prioridadeDaDisciplina(curso.disciplina, input.risk),
      aulas,
      cursor: 0,
    };
  });
  filas.sort((a, b) => a.prioridade - b.prioridade);

  const totalAulas = filas.reduce((s, f) => s + f.aulas.length, 0);
  const itens: ItemCurriculo[] = [];
  if (totalAulas === 0) {
    return {
      serie: String(input.serie),
      ano_letivo: anoLetivo,
      minutos_por_dia: minutosPorDia,
      dias_por_semana: diasPorSemana,
      semanas_por_semestre: semanasPorSemestre,
      itens,
      disciplinas: [],
    };
  }

  const totalDias = semanasPorSemestre * 2 * diasPorSemana;

  // 1) Intercala as aulas por disciplina (rotação), prioridades primeiro.
  const sequencia: Array<{ fila: (typeof filas)[number]; slug: string; titulo: string }> = [];
  let restantes = totalAulas;
  let fila = 0;
  while (restantes > 0) {
    let tentativas = 0;
    while (tentativas < filas.length && filas[fila].cursor >= filas[fila].aulas.length) {
      fila = (fila + 1) % filas.length;
      tentativas++;
    }
    const f = filas[fila];
    if (f.cursor >= f.aulas.length) break;
    const aula = f.aulas[f.cursor];
    sequencia.push({ fila: f, slug: aula.slug, titulo: aula.titulo });
    f.cursor++;
    restantes--;
    fila = (fila + 1) % filas.length;
  }

  // 2) Espalha a sequência pelo ano inteiro (os 2 semestres).
  const porDiaMax = Math.max(1, Math.min(3, Math.ceil(sequencia.length / totalDias)));
  const minutos = Math.max(10, Math.round(minutosPorDia / porDiaMax));
  const ocupacao = new Map<number, number>();

  sequencia.forEach((s, i) => {
    let d = Math.floor((i * totalDias) / sequencia.length);
    if (d >= totalDias) d = totalDias - 1;
    const ordem = (ocupacao.get(d) ?? 0) + 1;
    ocupacao.set(d, ordem);

    const semanaGlobal = Math.floor(d / diasPorSemana) + 1;
    const semestre: 1 | 2 = semanaGlobal <= semanasPorSemestre ? 1 : 2;
    const semana = semestre === 1 ? semanaGlobal : semanaGlobal - semanasPorSemestre;

    itens.push({
      semestre,
      semana,
      dia_semana: (d % diasPorSemana) + 1,
      ordem,
      disciplina: s.fila.disciplina,
      curso_slug: s.fila.curso.slug,
      aula_slug: s.slug,
      titulo: s.titulo,
      rota: rotaDaAula(s.fila.curso, s.slug),
      minutos,
      prioridade: s.fila.prioridade,
    });
  });


  return {
    serie: String(input.serie),
    ano_letivo: anoLetivo,
    minutos_por_dia: minutosPorDia,
    dias_por_semana: diasPorSemana,
    semanas_por_semestre: semanasPorSemestre,
    itens,
    disciplinas: filas.map((f) => f.disciplina),
  };
}

/** Semana pedagógica atual (1..semanasPorSemestre) a partir da data de geração. */
export function semanaAtual(geradoEm: string, semanasPorSemestre: number): { semestre: 1 | 2; semana: number } {
  const inicio = new Date(geradoEm);
  const dias = Math.max(0, Math.floor((Date.now() - inicio.getTime()) / 86400000));
  const semanaGlobal = Math.floor(dias / 7) + 1;
  if (semanaGlobal <= semanasPorSemestre) return { semestre: 1, semana: semanaGlobal };
  const s2 = semanaGlobal - semanasPorSemestre;
  return { semestre: 2, semana: Math.min(semanasPorSemestre, s2) };
}

/** 1..5 (Seg..Sex); sábado/domingo caem em segunda. */
export function diaSemanaHoje(): number {
  const d = new Date().getDay();
  return d === 0 || d === 6 ? 1 : d;
}
