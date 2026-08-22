/**
 * Árbitro diário do Plano Premium.
 *
 * Responsabilidade: decidir uma fila curta, executável e não duplicada a partir
 * dos planos já existentes. Ele NÃO cria aula e NÃO substitui o currículo.
 * Prioriza recuperação/revisão, mantém conteúdo escolar em andamento e só usa
 * treino/apoio como complemento.
 */
export type PremiumQueueItem = {
  id: string;
  planId: string;
  planType: "literacy" | "school" | "support";
  legacyItemId: string | null;
  source: string;
  sourceId: string;
  title: string;
  route: string;
  subject: string | null;
  itemRole: string;
  estimatedMinutes: number;
  selectionReason: string | null;
  week: number;
  day: number;
  sequenceOrder: number;
};

const DAY_MS = 86400000;
function weekFrom(start: string | null | undefined, date: string, max: number) {
  if (!start) return 1;
  const a = new Date(`${String(start).slice(0, 10)}T12:00:00`).getTime();
  const b = new Date(`${date}T12:00:00`).getTime();
  return Math.max(1, Math.min(Math.max(1, max), Math.floor(Math.max(0, b - a) / (7 * DAY_MS)) + 1));
}

const ROLE_ORDER: Record<string, number> = {
  reinforcement: 0,
  review: 1,
  teach: 2,
  guided_practice: 3,
  practice: 4,
  assessment: 5,
  cognitive_training: 6,
  support: 7,
};

function dayKey(week: number, day: number) {
  return week * 10 + day;
}

function dedupe(items: PremiumQueueItem[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    // A mesma aula não deve ocupar dois blocos do mesmo dia só porque veio de
    // dois planejadores diferentes.
    const key = `${item.source}:${item.sourceId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Monta a fila Premium do dia.
 *
 * Regras:
 * - conteúdo atrasado vem antes do conteúdo futuro;
 * - revisão/reforço vêm antes de conteúdo novo;
 * - crianças pequenas recebem carga mais curta;
 * - Neuro-Treino fica bloqueado a partir de 8 anos, mas Brilha Vida pode
 *   continuar aparecendo como apoio funcional quando o plano assim indicar;
 * - nunca repete a mesma fonte/aula na fila diária.
 */
export async function buildDailyPremiumQueue(supabase: any, childId: string, date: string): Promise<PremiumQueueItem[]> {
  const { data: child, error: childError } = await supabase
    .from("children")
    .select("idade,serie")
    .eq("id", childId)
    .maybeSingle();
  if (childError) throw childError;

  const age = Number(child?.idade);
  if (!Number.isFinite(age)) throw new Error("Idade da criança não cadastrada.");

  const jsDay = new Date(`${date}T12:00:00`).getDay();
  const todayDay = jsDay === 0 ? 7 : jsDay;

  const { data: plans, error: plansError } = await supabase
    .from("learning_plans")
    .select("id,plan_type,starts_at,weeks_total,status")
    .eq("child_id", childId)
    .in("status", ["active", "needs_review"]);
  if (plansError) throw plansError;

  const active = (plans ?? []) as any[];
  if (!active.length) return [];

  // Limites conservadores. Para 3–6 anos, o total deve caber em uma rotina
  // curta; para maiores, mantém variedade sem transformar o dia em maratona.
  const caps = age <= 6
    ? { literacy: 2, school: 1, support: 1, maxItems: 3, maxMinutes: 30 }
    : { literacy: 1, school: 2, support: 1, maxItems: 4, maxMinutes: 55 };

  const buckets: Record<"literacy" | "school" | "support", PremiumQueueItem[]> = {
    literacy: [], school: [], support: [],
  };

  for (const plan of active) {
    const type = plan.plan_type as "literacy" | "school" | "support";
    if (!(type in buckets)) continue;

    const maxWeeks = Number(plan.weeks_total ?? (type === "support" ? 12 : 40));
    const currentWeek = weekFrom(plan.starts_at, date, maxWeeks);
    const currentKey = dayKey(currentWeek, todayDay);

    // Busca o que está programado para hoje e também pendências anteriores.
    // A janela curta evita puxar material muito antigo indefinidamente.
    const minWeek = Math.max(1, currentWeek - 2);
    const { data: items, error: itemsError } = await supabase
      .from("learning_plan_items")
      .select("id,legacy_item_id,source,source_id,title,route,subject,item_role,estimated_minutes,selection_reason,status,week,day,sequence_order")
      .eq("plan_id", plan.id)
      .gte("week", minWeek)
      .lte("week", currentWeek)
      .in("status", ["pending", "available", "in_progress"])
      .order("week", { ascending: true })
      .order("day", { ascending: true })
      .order("sequence_order", { ascending: true });
    if (itemsError) throw itemsError;

    buckets[type] = (items ?? [])
      .filter((item: any) => dayKey(Number(item.week ?? 1), Number(item.day ?? 1)) <= currentKey)
      .map((item: any) => ({
        id: item.id,
        planId: plan.id,
        planType: type,
        legacyItemId: item.legacy_item_id ?? null,
        source: item.source,
        sourceId: item.source_id,
        title: item.title,
        route: item.route,
        subject: item.subject ?? null,
        itemRole: item.item_role,
        estimatedMinutes: Math.max(3, Number(item.estimated_minutes ?? (type === "support" ? 5 : 15))),
        selectionReason: item.selection_reason ?? null,
        week: Number(item.week ?? currentWeek),
        day: Number(item.day ?? todayDay),
        sequenceOrder: Number(item.sequence_order ?? 1),
      }))
      .filter((item) => !(age >= 8 && item.source === "neuro_treino"))
      .sort((a, b) => {
        const overdueA = dayKey(a.week, a.day) < currentKey ? 0 : 1;
        const overdueB = dayKey(b.week, b.day) < currentKey ? 0 : 1;
        return overdueA - overdueB
          || (ROLE_ORDER[a.itemRole] ?? 50) - (ROLE_ORDER[b.itemRole] ?? 50)
          || dayKey(a.week, a.day) - dayKey(b.week, b.day)
          || a.sequenceOrder - b.sequenceOrder;
      });
  }

  const result: PremiumQueueItem[] = [];
  let minutes = 0;
  const add = (type: "literacy" | "school" | "support", n: number) => {
    for (const item of buckets[type].slice(0, n)) {
      if (result.length >= caps.maxItems) break;
      if (result.length > 0 && minutes + item.estimatedMinutes > caps.maxMinutes) break;
      result.push(item);
      minutes += item.estimatedMinutes;
    }
  };

  // Alfabetização tem prioridade quando existe um plano ativo; escola continua
  // aparecendo para crianças em idade escolar. Apoio fica por último.
  add("literacy", caps.literacy);
  add("school", caps.school);
  add("support", caps.support);

  return dedupe(result).slice(0, caps.maxItems);
}
