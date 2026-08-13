// Primeiros Anos — Plano Anual de Alfabetização (3 a 6 anos, e 7+ que ainda não lê).
// Monta o ano letivo com AULAS REAIS já existentes no app, sem repetir nenhuma.
import { cursosEI } from "@/escola-brilha/curso-portugues-ei/registry";
import { listAulas } from "@/escola-brilha/registry";
import { slugDisc, temaDaDisciplina } from "@/escola-brilha/missoes-tema";
import { cursosMatematicaEI } from "@/escola-brilha/curso-matematica-ei/registry";
import { cursosInglesEI } from "@/escola-brilha/curso-ingles-ei/registry";
import { trilhaBibliotecaEncantada } from "@/escola-brilha/biblioteca-encantada/registry";
import { cursoLerComAurora } from "@/escola-brilha/curso-ler-com-aurora/aulas";
import { cursoLerComAuroraFase2 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase2";
import { cursoLerComAuroraFase3 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase3";
import { cursoLerComAuroraFase4 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase4";
import { cursoLerComAuroraFase5 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase5";
import { cursoLerComAuroraFase6 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase6";
import { cursoLerComAuroraFase7 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase7";
import { cursoLerComAuroraFase8 } from "@/escola-brilha/curso-ler-com-aurora/aulas-fase8";
import { cursoContarComPipFase1 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase1";
import { cursoContarComPipFase2 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase2";
import { cursoContarComPipFase3 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase3";
import { cursoContarComPipFase4 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase4";
import { cursoContarComPipFase5 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase5";
import { cursoContarComPipFase6 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase6";
import { cursoContarComPipFase7 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase7";
import { cursoContarComPipFase8 } from "@/escola-brilha/curso-contar-com-pip/aulas-fase8";

export type EtapaPrimeirosAnos = "maternal" | "pre1" | "pre2" | "1ano" | "recuperacao";

export const ETAPA_LABEL: Record<EtapaPrimeirosAnos, string> = {
  maternal: "Maternal · 3 anos",
  pre1: "Pré I · 4 anos",
  pre2: "Pré II · 5 anos",
  "1ano": "1º Ano · 6 anos",
  recuperacao: "Alfabetização — recuperação",
};

export interface AulaPlano {
  semana: number; // 1..40
  dia_semana: number; // 1=Seg .. 5=Sex
  ordem: number;
  trilha: string;
  trilha_label: string;
  fase: string | null;
  aula_slug: string;
  titulo: string;
  rota: string;
  minutos: number;
  prioridade: 1 | 2 | 3;
}

export interface PlanoPrimeirosAnos {
  idade: number;
  etapa: EtapaPrimeirosAnos;
  motivo: string;
  minutos_por_dia: number;
  dias_por_semana: number;
  semanas_totais: number;
  aulas: AulaPlano[];
  trilhas: Array<{ trilha: string; label: string; total: number }>;
}

export const DIAS_LABEL = ["", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

/** Idade → etapa do plano. 7+ entra em recuperação de alfabetização. */
export function etapaPorIdade(idade: number): EtapaPrimeirosAnos {
  if (idade <= 3) return "maternal";
  if (idade === 4) return "pre1";
  if (idade === 5) return "pre2";
  if (idade === 6) return "1ano";
  return "recuperacao";
}

/**
 * A criança precisa do plano de alfabetização?
 * - 3 a 6 anos: sempre (é a idade do plano).
 * - 7+: só se a anamnese indicar que ainda não lê.
 */
export function precisaDoPlano(
  idade: number,
  step6?: Record<string, unknown> | null,
): { precisa: boolean; motivo: string } {
  if (idade <= 6) {
    return {
      precisa: true,
      motivo: "Plano anual de alfabetização da Educação Infantil / 1º ano.",
    };
  }
  const n = (k: string) => Number((step6 as any)?.[k] ?? 0);
  const lePalavras = n("le_palavras");
  const leFrases = n("le_frases");
  const leTextos = n("le_textos");
  if (leTextos >= 3 || leFrases >= 3 || lePalavras >= 3) {
    return { precisa: false, motivo: "A criança já lê — segue no Currículo Anual da série." };
  }
  return {
    precisa: true,
    motivo:
      "A anamnese indica que a criança ainda não lê. O plano de alfabetização entra na rotina de estudo dela.",
  };
}

interface Fonte {
  trilha: string;
  label: string;
  fase: string | null;
  prioridade: 1 | 2 | 3;
  aulas: Array<{ slug: string; titulo: string; rota: string }>;
}

type CursoLike = {
  slug: string;
  serie?: string;
  serieLabel?: string;
  unidades?: Array<{ aulas?: Array<{ slug: string; titulo: string }> }>;
  niveis?: Array<{ unidades?: Array<{ aulas?: Array<{ slug: string; titulo: string }> }> }>;
};

function achatar(curso: CursoLike): Array<{ slug: string; titulo: string }> {
  const unidades = [
    ...(curso.niveis ?? []).flatMap((n) => n.unidades ?? []),
    ...(curso.unidades ?? []),
  ];
  return unidades.flatMap((u) => u.aulas ?? []).map((a) => ({ slug: a.slug, titulo: a.titulo }));
}

function fonteAurora(curso: CursoLike, fase: number, prioridade: 1 | 2 | 3): Fonte {
  return {
    trilha: "ler-com-aurora",
    label: "Ler com Aurora",
    fase: `Fase ${fase}`,
    prioridade,
    aulas: achatar(curso).map((a) => ({
      ...a,
      rota: `/neuro-treino/ler-com-aurora/${a.slug}`,
    })),
  };
}

function fontePip(curso: CursoLike, fase: number): Fonte {
  return {
    trilha: "contar-com-pip",
    label: "Contar com Pip",
    fase: `Fase ${fase}`,
    prioridade: 2,
    aulas: achatar(curso).map((a) => ({
      ...a,
      rota: `/escola-brilha/contar-com-pip/${a.slug}`,
    })),
  };
}

function fonteEI(
  curso: CursoLike | undefined,
  base: string,
  trilha: string,
  label: string,
  prioridade: 1 | 2 | 3,
): Fonte | null {
  if (!curso?.serie) return null;
  const aulas = achatar(curso);
  if (aulas.length === 0) return null;
  return {
    trilha,
    label,
    fase: curso.serieLabel ?? null,
    prioridade,
    aulas: aulas.map((a) => ({
      ...a,
      rota: `/escola-brilha/${base}/${curso.serie}/${a.slug}`,
    })),
  };
}

function fonteBiblioteca(): Fonte {
  return {
    trilha: "biblioteca-encantada",
    label: "Biblioteca Encantada",
    fase: null,
    prioridade: 2,
    aulas: (trilhaBibliotecaEncantada.aulas ?? []).map((a: any) => ({
      slug: a.slug,
      titulo: a.titulo,
      rota: `/escola-brilha/biblioteca-encantada/${a.slug}`,
    })),
  };
}

const AURORA = [
  cursoLerComAurora,
  cursoLerComAuroraFase2,
  cursoLerComAuroraFase3,
  cursoLerComAuroraFase4,
  cursoLerComAuroraFase5,
  cursoLerComAuroraFase6,
  cursoLerComAuroraFase7,
  cursoLerComAuroraFase8,
] as unknown as CursoLike[];

const PIP = [
  cursoContarComPipFase1,
  cursoContarComPipFase2,
  cursoContarComPipFase3,
  cursoContarComPipFase4,
  cursoContarComPipFase5,
  cursoContarComPipFase6,
  cursoContarComPipFase7,
  cursoContarComPipFase8,
] as unknown as CursoLike[];

function porSerie(lista: unknown[], serie: string): CursoLike | undefined {
  return (lista as CursoLike[]).find((c) => c.serie === serie);
}

/** Trilhas de cada etapa, em ordem pedagógica. */
function fontesDaEtapa(etapa: EtapaPrimeirosAnos): Fonte[] {
  const serieEI = etapa === "maternal" ? "maternal" : etapa === "pre1" ? "pre1" : "pre2";
  const fontes: Array<Fonte | null> = [];

  if (etapa === "maternal" || etapa === "pre1" || etapa === "pre2") {
    fontes.push(
      fonteEI(porSerie(cursosEI, serieEI), "portugues-ei", "portugues-ei", "Códice de Português", 1),
      fonteEI(
        porSerie(cursosMatematicaEI, serieEI) ?? porSerie(cursosMatematicaEI, "maternal"),
        "matematica-ei",
        "matematica-ei",
        "Matemática Kawaii",
        2,
      ),
      fonteBiblioteca(),
      fonteEI(porSerie(cursosInglesEI, serieEI), "ingles-ei", "ingles-ei", "My First English", 3),
    );
  }

  if (etapa === "pre2") {
    fontes.push(fonteAurora(AURORA[0], 1, 1), fonteAurora(AURORA[1], 2, 1));
    fontes.push(fontePip(PIP[0], 1), fontePip(PIP[1], 2));
  }

  if (etapa === "1ano") {
    AURORA.slice(0, 4).forEach((c, i) => fontes.push(fonteAurora(c, i + 1, 1)));
    PIP.slice(0, 4).forEach((c, i) => fontes.push(fontePip(c, i + 1)));
    fontes.push(fonteBiblioteca());
    fontes.push(
      fonteEI(porSerie(cursosInglesEI, "pre2"), "ingles-ei", "ingles-ei", "My First English", 3),
    );
  }

  if (etapa === "recuperacao") {
    AURORA.forEach((c, i) => fontes.push(fonteAurora(c, i + 1, 1)));
    PIP.forEach((c, i) => fontes.push(fontePip(c, i + 1)));
    fontes.push(fonteBiblioteca());
  }

  return fontes.filter((f): f is Fonte => !!f && f.aulas.length > 0);
}

export interface GerarPlanoInput {
  idade: number;
  step6?: Record<string, unknown> | null;
  minutosPorDia?: number;
  diasPorSemana?: number;
  semanasTotais?: number;
}

/**
 * Distribui todas as aulas das trilhas da etapa em 40 semanas,
 * intercalando as trilhas (prioridade primeiro) e SEM repetir aula.
 */
export function gerarPlanoPrimeirosAnos(input: GerarPlanoInput): PlanoPrimeirosAnos {
  const idade = Math.max(2, Math.min(12, Math.round(input.idade)));
  const etapa = etapaPorIdade(idade);
  const minutosPorDia = input.minutosPorDia ?? 20;
  const diasPorSemana = Math.min(5, Math.max(1, input.diasPorSemana ?? 5));
  const semanasTotais = input.semanasTotais ?? 40;

  const fontes = fontesDaEtapa(etapa).sort((a, b) => a.prioridade - b.prioridade);

  // Dedup global por rota — nenhuma aula aparece duas vezes no ano.
  const vistas = new Set<string>();
  const filas = fontes.map((f) => ({
    fonte: f,
    aulas: f.aulas.filter((a) => {
      if (vistas.has(a.rota)) return false;
      vistas.add(a.rota);
      return true;
    }),
    cursor: 0,
  }));

  const total = filas.reduce((s, f) => s + f.aulas.length, 0);
  const aulas: AulaPlano[] = [];
  const { precisa, motivo } = precisaDoPlano(idade, input.step6);

  if (total > 0) {
    // 1) Intercala as trilhas (rotação), prioridades primeiro.
    const sequencia: Array<{ fila: (typeof filas)[number]; slug: string; titulo: string; rota: string }> =
      [];
    let restantes = total;
    let idx = 0;
    while (restantes > 0) {
      let tentativas = 0;
      while (tentativas < filas.length && filas[idx].cursor >= filas[idx].aulas.length) {
        idx = (idx + 1) % filas.length;
        tentativas++;
      }
      const f = filas[idx];
      if (f.cursor >= f.aulas.length) break;
      const a = f.aulas[f.cursor];
      sequencia.push({ fila: f, slug: a.slug, titulo: a.titulo, rota: a.rota });
      f.cursor++;
      restantes--;
      idx = (idx + 1) % filas.length;
    }

    // 2) Preenche os dias em sequência (Seg→Sex, semana após semana).
    const totalDias = semanasTotais * diasPorSemana;
    const porDia = Math.max(1, Math.min(4, Math.ceil(sequencia.length / totalDias)));
    const minutos = Math.max(5, Math.round(minutosPorDia / porDia));

    sequencia.forEach((s, i) => {
      const d = Math.min(totalDias - 1, Math.floor(i / porDia));
      aulas.push({
        semana: Math.floor(d / diasPorSemana) + 1,
        dia_semana: (d % diasPorSemana) + 1,
        ordem: (i % porDia) + 1,
        trilha: s.fila.fonte.trilha,
        trilha_label: s.fila.fonte.label,
        fase: s.fila.fonte.fase,
        aula_slug: s.slug,
        titulo: s.titulo,
        rota: s.rota,
        minutos,
        prioridade: s.fila.fonte.prioridade,
      });
    });
  }

  const trilhas = filas
    .filter((f) => f.aulas.length > 0)
    .map((f) => ({ trilha: f.fonte.trilha, label: f.fonte.label, total: f.aulas.length }))
    .reduce<Array<{ trilha: string; label: string; total: number }>>((acc, t) => {
      const j = acc.findIndex((x) => x.trilha === t.trilha);
      if (j < 0) acc.push({ ...t });
      else acc[j].total += t.total;
      return acc;
    }, []);

  return {
    idade,
    etapa,
    motivo: precisa ? motivo : motivo,
    minutos_por_dia: minutosPorDia,
    dias_por_semana: diasPorSemana,
    semanas_totais: semanasTotais,
    aulas,
    trilhas,
  };
}

/** Semana pedagógica atual a partir da data de geração. */
export function semanaAtual(geradoEm: string, semanasTotais: number): number {
  const inicio = new Date(geradoEm).getTime();
  const dias = Math.max(0, Math.floor((Date.now() - inicio) / 86400000));
  return Math.min(semanasTotais, Math.floor(dias / 7) + 1);
}

/** 1..5 (Seg..Sex); fim de semana cai em segunda. */
export function diaSemanaHoje(): number {
  const d = new Date().getDay();
  return d === 0 || d === 6 ? 1 : d;
}
