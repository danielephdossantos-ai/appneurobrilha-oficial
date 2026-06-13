// Supabase client shim — replaced with TanStack Start server functions backed by Replit PostgreSQL.
// This file preserves the Supabase client API shape so existing callers work without changes.

import {
  getChildren, createChild, updateChild, deleteChild, addBrilhocoins,
  getChildAnamnesis, saveChildAnamnesis,
} from "@/services/db/children.functions";
import {
  getNotifications, createNotification, markNotificationRead,
  getStudyAgenda, upsertStudyAgendaItem, deleteStudyAgendaItem,
  getExamMissions, createExamMission, deleteExamMission,
  updateExamMissionContent, updateExamStudyPlan,
  getMascots, getUserMascots, upsertUserMascot,
  getGamificationProfile, upsertGamificationProfile,
  getMascotState, upsertMascotState,
  getAchievements, getChildAchievements,
  getActivityLogs, insertActivityLog,
  getChildSkillMastery, upsertChildSkillMastery,
  getChildProgressionStats, upsertChildProgressionStats,
  getCognitiveProfile, upsertCognitiveProfile, insertLongitudinalScore,
  getUserPrivacySettings, upsertUserPrivacySettings,
  getAnamneseV2, upsertAnamneseV2,
  getBnccHabilidades, getAtividades, getPedagogicalActivities,
  getNeuroAtividades, upsertProgressoAluno,
  insertAuditLog,
  getStories, getStoryById, getStoryPages, getStoryQuestions,
  getStoryProgress, upsertStoryProgress,
} from "@/services/db/data.functions";

type AnyRecord = Record<string, unknown>;
type FilterEntry = { col: string; op: string; val: unknown };

async function resolveTable(table: string, filters: FilterEntry[], opts: AnyRecord): Promise<unknown[]> {
  const get = (col: string) => filters.find(f => f.col === col)?.val as string | undefined;
  const childId = get("child_id");

  switch (table) {
    case "children": return getChildren();
    case "child_anamnesis": return childId ? [await getChildAnamnesis({ data: { childId } })].filter(Boolean) : [];
    case "anamnese_v2": return childId ? [await getAnamneseV2({ data: { childId } })].filter(Boolean) : [];
    case "notifications": return getNotifications();
    case "study_agenda": return childId ? getStudyAgenda({ data: { childId } }) : [];
    case "exam_missions": return childId ? getExamMissions({ data: { childId } }) : [];
    case "mascots": return getMascots();
    case "user_mascots": return getUserMascots();
    case "gamification_profiles": return childId ? [await getGamificationProfile({ data: { childId } })].filter(Boolean) : [];
    case "mascot_states": return childId ? [await getMascotState({ data: { childId } })].filter(Boolean) : [];
    case "achievements": return getAchievements();
    case "child_achievements": return childId ? getChildAchievements({ data: { childId } }) : [];
    case "activity_logs":
    case "activity_results": return childId ? getActivityLogs({ data: { childId, limit: (opts.limit as number) ?? 50 } }) : [];
    case "child_skill_mastery": return childId ? getChildSkillMastery({ data: { childId } }) : [];
    case "child_progression_stats": return childId ? getChildProgressionStats({ data: { childId } }) : [];
    case "cognitive_profile": return childId ? [await getCognitiveProfile({ data: { childId } })].filter(Boolean) : [];
    case "user_privacy_settings": return [await getUserPrivacySettings()].filter(Boolean);
    case "bncc_habilidades": return getBnccHabilidades({ data: {} });
    case "atividades": return getAtividades({ data: {} });
    case "pedagogical_activities_base": return getPedagogicalActivities({ data: {} });
    case "neuro_atividades": return getNeuroAtividades({ data: {} });
    case "stories": return getStories();
    case "story_pages": {
      const storyId = get("story_id");
      return storyId ? getStoryPages({ data: { storyId } }) : [];
    }
    case "story_questions": {
      const storyId = get("story_id");
      return storyId ? getStoryQuestions({ data: { storyId } }) : [];
    }
    case "story_progress": {
      const storyId = get("story_id");
      const cId = get("child_id");
      return (storyId && cId) ? [await getStoryProgress({ data: { childId: cId, storyId } })].filter(Boolean) : [];
    }
    default:
      console.warn(`[supabase-shim] Unknown table: ${table}. Returning [].`);
      return [];
  }
}

function snakeToCamel(s: string) {
  return s.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase());
}

function applyFilters(rows: unknown[], filters: FilterEntry[]): unknown[] {
  return rows.filter((row: any) =>
    filters.every(({ col, op, val }) => {
      const v = row[snakeToCamel(col)] ?? row[col];
      if (op === "eq") return v === val;
      if (op === "neq") return v !== val;
      if (op === "in") return Array.isArray(val) && val.includes(v);
      return true;
    })
  );
}

async function execInsert(table: string, row: any): Promise<unknown> {
  switch (table) {
    case "children": return createChild({ data: { child: row } });
    case "child_anamnesis": return saveChildAnamnesis({ data: row });
    case "notifications": return createNotification({ data: { notif: row } });
    case "study_agenda": return upsertStudyAgendaItem({ data: { item: row } });
    case "exam_missions": return createExamMission({ data: { mission: row } });
    case "user_mascots": return upsertUserMascot({ data: { mascot: row } });
    case "gamification_profiles": return upsertGamificationProfile({ data: { profile: row } });
    case "mascot_states": return upsertMascotState({ data: { state: row } });
    case "activity_logs":
    case "activity_results": return insertActivityLog({ data: { log: row } });
    case "child_skill_mastery": return upsertChildSkillMastery({ data: { mastery: row } });
    case "child_progression_stats": return upsertChildProgressionStats({ data: { stats: row } });
    case "cognitive_profile": return upsertCognitiveProfile({ data: { profile: row } });
    case "longitudinal_scores": return insertLongitudinalScore({ data: { score: row } });
    case "user_privacy_settings": return upsertUserPrivacySettings({ data: { settings: row } });
    case "anamnese_v2": return upsertAnamneseV2({ data: { row } });
    case "progresso_aluno": return upsertProgressoAluno({ data: { progresso: row } });
    case "audit_logs": return insertAuditLog({ data: { log: row } });
    case "story_progress": return upsertStoryProgress({ data: { progress: row } });
    default:
      console.warn(`[supabase-shim] insert on unknown table: ${table}`);
      return row;
  }
}

async function execUpdate(table: string, patch: any, filters: FilterEntry[]): Promise<unknown> {
  const id = filters.find(f => f.col === "id")?.val as string | undefined;
  const childId = filters.find(f => f.col === "child_id")?.val as string | undefined;
  switch (table) {
    case "children": return id ? updateChild({ data: { id, patch } }) : null;
    case "child_anamnesis": return saveChildAnamnesis({ data: { ...patch, child_id: childId } });
    case "notifications": return id ? markNotificationRead({ data: { id } }) : null;
    case "study_agenda": return upsertStudyAgendaItem({ data: { item: patch, id } });
    case "exam_mission_contents": return id ? updateExamMissionContent({ data: { id, patch } }) : null;
    case "exam_study_plans": return id ? updateExamStudyPlan({ data: { id, patch } }) : null;
    case "user_mascots": return id ? upsertUserMascot({ data: { mascot: patch, id } }) : null;
    case "gamification_profiles": return upsertGamificationProfile({ data: { profile: patch } });
    case "mascot_states": return upsertMascotState({ data: { state: patch } });
    default:
      console.warn(`[supabase-shim] update on unknown table: ${table}`);
      return patch;
  }
}

async function execDelete(table: string, filters: FilterEntry[]): Promise<unknown> {
  const id = filters.find(f => f.col === "id")?.val as string | undefined;
  switch (table) {
    case "children": return id ? deleteChild({ data: { id } }) : null;
    case "study_agenda": return id ? deleteStudyAgendaItem({ data: { id } }) : null;
    case "exam_missions": return id ? deleteExamMission({ data: { id } }) : null;
    default:
      console.warn(`[supabase-shim] delete on unknown table: ${table}`);
      return null;
  }
}

function makeChain(table: string) {
  const filters: FilterEntry[] = [];
  const opts: AnyRecord = {};
  let _insertData: any = null;
  let _updateData: any = null;
  let _isDelete = false;
  let _isUpsert = false;

  const pending = () => {
    if (_insertData !== null) {
      const row = Array.isArray(_insertData) ? _insertData[0] : _insertData;
      return execInsert(table, row);
    }
    if (_updateData !== null) return execUpdate(table, _updateData, filters);
    if (_isDelete) return execDelete(table, filters);
    return resolveTable(table, filters, opts).then(rows => applyFilters(rows, filters));
  };

  const chain: any = {
    select(_cols?: string) { return chain; },
    eq(col: string, val: unknown) { filters.push({ col, op: "eq", val }); return chain; },
    neq(col: string, val: unknown) { filters.push({ col, op: "neq", val }); return chain; },
    in(col: string, vals: unknown[]) { filters.push({ col, op: "in", val: vals }); return chain; },
    order(_col: string, _opts?: AnyRecord) { return chain; },
    limit(n: number) { opts.limit = n; return chain; },
    insert(rows: any) { _insertData = rows; return chain; },
    update(patch: any) { _updateData = patch; return chain; },
    upsert(row: any, _upsertOpts?: AnyRecord) {
      _isUpsert = true;
      _insertData = row;
      return chain;
    },
    delete() { _isDelete = true; return chain; },
    async maybeSingle() {
      const result = await pending();
      const data = Array.isArray(result) ? (result[0] ?? null) : (result ?? null);
      return { data, error: null };
    },
    async single() {
      const result = await pending();
      const data = Array.isArray(result) ? result[0] : result;
      if (!data && !_insertData && !_updateData) return { data: null, error: { code: "PGRST116", message: "No rows" } };
      return { data: data ?? null, error: null };
    },
    then(resolve: any, reject?: any) {
      return pending().then((result) => {
        const data = Array.isArray(result) ? result : result;
        return resolve({ data, error: null });
      }, reject);
    },
  };
  return chain;
}

// ── Public supabase export ───────────────────────────────────────────────────
export const supabase = {
  from(table: string) { return makeChain(table); },

  rpc(fn: string, args?: AnyRecord) {
    if (fn === "add_brilhocoins") {
      const p = addBrilhocoins({ data: { childId: args?.child_id as string, amount: args?.amount as number } });
      return { then: (res: any, rej?: any) => p.then((d) => res({ data: d, error: null }), rej), data: null, error: null };
    }
    console.warn(`[supabase-shim] Unhandled RPC: ${fn}`);
    return { then: (res: any) => res({ data: null, error: null }), data: null, error: null };
  },

  auth: {
    getUser() { return Promise.resolve({ data: { user: null }, error: null }); },
    getSession() { return Promise.resolve({ data: { session: null }, error: null }); },
    signOut() {
      if (typeof window !== "undefined") window.location.href = "/api/logout";
      return Promise.resolve({ error: null });
    },
    onAuthStateChange(_cb: (...args: unknown[]) => void) {
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
  },
};
