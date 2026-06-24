/**
 * Weekly Planner — motor interno determinístico que monta 5 aulas (seg–sex)
 * para uma criança usando: anamnese v2 (perfil neuro/série/idade), BNCC,
 * matriz pedagógica (pedagogical_activities_base) e banco de mídias (rb_midias).
 *
 * Saída pensada para gravar em `public.aulas_semana` e ser consumida pelo
 * player atual do Escola Brilha (reusa LessonStep).
 */
import type { LessonStep } from "../types/lesson";
import { friendlyLessonTitle } from "../utils/bnccDisplayText";

export type PerfilNeuro = "TEA" | "TDAH" | "Dislexia" | "Neurotipico";

export interface HabilidadeTrilha {
  codigo: string;
  disciplina: string;
  descricao: string;
  ano?: string | null;
}

export interface PlannerInputs {
  childId: string;
  userId: string;
  perfil: PerfilNeuro;
  serie: string; // "1º Ano", "6º Ano", "Pré-Escola"...
  semanaInicio: Date; // segunda-feira da semana alvo
  habilidades: HabilidadeTrilha[];
  /**
   * Trilha anual fixa: lista [dia 1..5] de habilidades vindas de `trilha_anual`.
   * Quando presente, substitui o sorteio por disciplina e garante a sequência
   * pedagógica determinística do calendário escolar.
   */
  trilhaSemana?: Array<{ dia: number; habilidade: HabilidadeTrilha }>;
  matriz: Array<{
    id: string;
    serie?: string | null;
    materia?: string | null;
    tecnica?: string | null;
    formato?: string | null;
    codigo_bncc?: string | null;
    titulo?: string | null;
    descricao?: string | null;
  }>;
  midias: Array<{
    id: string;
    url: string;
    tipo?: string | null; // "imagem" | "audio" | ...
    tags?: string[] | null;
    titulo?: string | null;
  }>;
  jaDominadas?: Set<string>; // códigos BNCC já dominados
}

export interface AulaSemanaPlan {
  child_id: string;
  user_id: string;
  data: string; // YYYY-MM-DD
  habilidade_bncc: string | null;
  materia: string | null;
  titulo: string;
  steps: LessonStep[];
  midias: Array<{ id: string; url: string; tipo: string }>;
  perfil_neuro: PerfilNeuro;
  agenda_horario: string; // HH:MM
}

// ── Regras de adaptação por perfil ───────────────────────────────────────────
const PERFIL_RULES: Record<
  PerfilNeuro,
  {
    maxSteps: number;
    horario: string;
    speechPrefix: string;
    incluirAudio: boolean;
    incluirImagem: boolean;
  }
> = {
  TEA: {
    maxSteps: 4,
    horario: "14:00",
    speechPrefix: "Vamos seguir os passos juntos.",
    incluirAudio: false,
    incluirImagem: true,
  },
  TDAH: {
    maxSteps: 5,
    horario: "09:00",
    speechPrefix: "Bora ganhar estrelas!",
    incluirAudio: true,
    incluirImagem: true,
  },
  Dislexia: {
    maxSteps: 4,
    horario: "10:00",
    speechPrefix: "Vou ler com você.",
    incluirAudio: true,
    incluirImagem: true,
  },
  Neurotipico: {
    maxSteps: 6,
    horario: "15:00",
    speechPrefix: "Vamos aprender uma coisa nova!",
    incluirAudio: true,
    incluirImagem: true,
  },
};

function addDays(d: Date, n: number): Date {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function fmtDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function pickMidias(
  midias: PlannerInputs["midias"],
  disciplina: string,
  perfil: PerfilNeuro,
  max = 3,
) {
  const rules = PERFIL_RULES[perfil];
  const score = (m: PlannerInputs["midias"][number]) => {
    let s = 0;
    const tags = (m.tags || []).map((t) => t.toLowerCase());
    if (tags.some((t) => disciplina.toLowerCase().includes(t) || t.includes(disciplina.toLowerCase()))) s += 3;
    if (m.tipo === "imagem" && rules.incluirImagem) s += 1;
    if (m.tipo === "audio" && rules.incluirAudio) s += 1;
    return s;
  };
  return [...midias]
    .map((m) => ({ m, s: score(m) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, max)
    .map(({ m }) => ({ id: m.id, url: m.url, tipo: m.tipo || "imagem" }));
}

function buildSteps(
  perfil: PerfilNeuro,
  habilidade: PlannerInputs["habilidades"][number],
  tecnica: string | null,
  midias: Array<{ id: string; url: string; tipo: string }>,
): LessonStep[] {
  const rules = PERFIL_RULES[perfil];
  const title = friendlyLessonTitle({ title: habilidade.descricao, subject: habilidade.disciplina });
  const base: LessonStep[] = [
    {
      id: "intro",
      phase: "explanation",
      type: "explanation",
      mascot: "pip",
      speech: `${rules.speechPrefix} Hoje vamos aprender: ${title}`,
    },
    {
      id: "demo",
      phase: "demonstration",
      type: "demonstration",
      mascot: "pipa",
      speech: tecnica
        ? `Usando a técnica "${tecnica}", olha como faz.`
        : `Olha como faz.`,
      elements: midias[0]
        ? [
            {
              id: "demo-img",
              type: "image",
              content: midias[0].url,
              position: { x: 50, y: 50 },
              animation: "fade",
              delay: 0,
            },
          ]
        : undefined,
    },
    {
      id: "guided",
      phase: "guided_training",
      type: "interaction",
      mascot: "pip",
      speech: "Agora tenta com a minha ajuda.",
      interaction: { type: "click", hint: "Toque para continuar" },
    },
    {
      id: "practice",
      phase: "practice",
      type: "interaction",
      mascot: "pipa",
      speech: "Sua vez! Vamos praticar.",
      interaction: { type: "click", hint: "Pratique" },
    },
    {
      id: "challenge",
      phase: "challenge",
      type: "interaction",
      mascot: "pip",
      speech: "Último desafio do dia!",
      interaction: { type: "click", hint: "Vai!" },
    },
    {
      id: "mastery",
      phase: "mastery",
      type: "explanation",
      mascot: "pipa",
      speech: "Mandou bem! Habilidade conquistada.",
    },
  ];
  return base.slice(0, rules.maxSteps);
}

// ── Função principal ────────────────────────────────────────────────────────
export function planWeek(inputs: PlannerInputs): AulaSemanaPlan[] {
  const { perfil, semanaInicio, habilidades, matriz, midias, jaDominadas } = inputs;
  const rules = PERFIL_RULES[perfil];

  const candidatas = habilidades.filter(
    (h) => !jaDominadas || !jaDominadas.has(h.codigo),
  );
  if (candidatas.length === 0) return [];

  // Garante diversidade de disciplinas ao longo da semana
  const porDisciplina = new Map<string, typeof candidatas>();
  for (const h of candidatas) {
    const k = h.disciplina || "Geral";
    if (!porDisciplina.has(k)) porDisciplina.set(k, []);
    porDisciplina.get(k)!.push(h);
  }
  const disciplinas = [...porDisciplina.keys()];

  const aulas: AulaSemanaPlan[] = [];
  for (let i = 0; i < 5; i++) {
    const disc = disciplinas[i % disciplinas.length];
    const lista = porDisciplina.get(disc)!;
    const hab = lista[i % lista.length];
    const tecnica =
      matriz.find(
        (m) =>
          (m.codigo_bncc && m.codigo_bncc === hab.codigo) ||
          (m.materia && m.materia.toLowerCase() === disc.toLowerCase()),
      )?.tecnica || null;
    const midiasAula = pickMidias(midias, disc, perfil);
    const steps = buildSteps(perfil, hab, tecnica, midiasAula);
    const titulo = friendlyLessonTitle({ title: hab.descricao, subject: disc });

    aulas.push({
      child_id: inputs.childId,
      user_id: inputs.userId,
      data: fmtDate(addDays(semanaInicio, i)),
      habilidade_bncc: hab.codigo,
      materia: disc,
      titulo,
      steps,
      midias: midiasAula,
      perfil_neuro: perfil,
      agenda_horario: rules.horario,
    });
  }
  return aulas;
}

/** Segunda-feira da semana corrente (em horário local). */
export function getSegundaDaSemana(ref: Date = new Date()): Date {
  const d = new Date(ref);
  d.setHours(0, 0, 0, 0);
  const dow = d.getDay(); // 0=dom
  const diff = dow === 0 ? -6 : 1 - dow;
  d.setDate(d.getDate() + diff);
  return d;
}
