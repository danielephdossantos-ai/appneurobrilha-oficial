import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";
import { db } from "../../../server/db";
import {
  notifications,
  studyAgenda,
  examMissions,
  examMissionContents,
  examStudyPlans,
  mascots,
  userMascots,
  gamificationProfiles,
  mascotStates,
  achievements,
  childAchievements,
  activityLogs,
  childSkillMastery,
  childProgressionStats,
  cognitiveProfile,
  longitudinalScores,
  userPrivacySettings,
  anamneseV2,
  bnccHabilidades,
  atividades,
  pedagogicalActivitiesBase,
  neuroAtividades,
  progressoAluno,
  auditLogs,
} from "../../../shared/schema";
import { eq, desc, and, asc } from "drizzle-orm";

function getUid(req: Request) {
  return req.headers.get("x-replit-user-id") ?? "anonymous";
}

// ── NOTIFICATIONS ─────────────────────────────────────────────────────────────
export const getNotifications = createServerFn({ method: "GET" }).handler(async () => {
  const userId = getUid(getRequest());
  return db
    .select()
    .from(notifications)
    .where(eq(notifications.userId, userId))
    .orderBy(desc(notifications.createdAt))
    .limit(20);
});

export const createNotification = createServerFn({ method: "POST" })
  .inputValidator(z.object({ notif: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const userId = getUid(getRequest());
    const [row] = await db
      .insert(notifications)
      .values({ ...(data.notif as any), userId })
      .returning();
    return row;
  });

export const markNotificationRead = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const userId = getUid(getRequest());
    await db
      .update(notifications)
      .set({ read: true })
      .where(and(eq(notifications.id, data.id), eq(notifications.userId, userId)));
    return { ok: true };
  });

// ── STUDY AGENDA ─────────────────────────────────────────────────────────────
export const getStudyAgenda = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    return db
      .select()
      .from(studyAgenda)
      .where(eq(studyAgenda.childId, data.childId))
      .orderBy(asc(studyAgenda.createdAt));
  });

export const upsertStudyAgendaItem = createServerFn({ method: "POST" })
  .inputValidator(z.object({ item: z.record(z.unknown()), id: z.string().optional() }))
  .handler(async ({ data }) => {
    if (data.id) {
      const [row] = await db
        .update(studyAgenda)
        .set({ ...(data.item as any), updatedAt: new Date() })
        .where(eq(studyAgenda.id, data.id))
        .returning();
      return row;
    }
    const [row] = await db
      .insert(studyAgenda)
      .values(data.item as any)
      .returning();
    return row;
  });

export const deleteStudyAgendaItem = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await db.delete(studyAgenda).where(eq(studyAgenda.id, data.id));
    return { ok: true };
  });

// ── EXAM MISSIONS ─────────────────────────────────────────────────────────────
export const getExamMissions = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    return db.select().from(examMissions).where(eq(examMissions.childId, data.childId));
  });

export const createExamMission = createServerFn({ method: "POST" })
  .inputValidator(z.object({ mission: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const {
      exam_study_plans: plans,
      exam_mission_contents: contents,
      ...mission
    } = data.mission as any;
    const [row] = await db.insert(examMissions).values(mission).returning();
    if (contents?.length)
      await db
        .insert(examMissionContents)
        .values(contents.map((c: any) => ({ ...c, missionId: row.id })));
    if (plans?.length)
      await db.insert(examStudyPlans).values(plans.map((p: any) => ({ ...p, missionId: row.id })));
    return row;
  });

export const deleteExamMission = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await db.delete(examMissions).where(eq(examMissions.id, data.id));
    return { ok: true };
  });

export const updateExamMissionContent = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string(), patch: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .update(examMissionContents)
      .set(data.patch as any)
      .where(eq(examMissionContents.id, data.id))
      .returning();
    return row;
  });

export const updateExamStudyPlan = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string(), patch: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .update(examStudyPlans)
      .set(data.patch as any)
      .where(eq(examStudyPlans.id, data.id))
      .returning();
    return row;
  });

// ── MASCOTS ──────────────────────────────────────────────────────────────────
export const getMascots = createServerFn({ method: "GET" }).handler(async () => {
  return db.select().from(mascots);
});

export const getUserMascots = createServerFn({ method: "GET" }).handler(async () => {
  const userId = getUid(getRequest());
  return db.select().from(userMascots).where(eq(userMascots.userId, userId));
});

export const upsertUserMascot = createServerFn({ method: "POST" })
  .inputValidator(z.object({ mascot: z.record(z.unknown()), id: z.string().optional() }))
  .handler(async ({ data }) => {
    const userId = getUid(getRequest());
    if (data.id) {
      const [row] = await db
        .update(userMascots)
        .set(data.mascot as any)
        .where(and(eq(userMascots.id, data.id), eq(userMascots.userId, userId)))
        .returning();
      return row;
    }
    const [row] = await db
      .insert(userMascots)
      .values({ ...(data.mascot as any), userId })
      .returning();
    return row;
  });

// ── GAMIFICATION ─────────────────────────────────────────────────────────────
export const getGamificationProfile = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    const [row] = await db
      .select()
      .from(gamificationProfiles)
      .where(eq(gamificationProfiles.childId, data.childId));
    return row ?? null;
  });

export const upsertGamificationProfile = createServerFn({ method: "POST" })
  .inputValidator(z.object({ profile: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .insert(gamificationProfiles)
      .values(data.profile as any)
      .onConflictDoUpdate({
        target: gamificationProfiles.childId,
        set: { ...(data.profile as any), updatedAt: new Date() },
      })
      .returning();
    return row;
  });

export const getMascotState = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    const [row] = await db
      .select()
      .from(mascotStates)
      .where(eq(mascotStates.childId, data.childId));
    return row ?? null;
  });

export const upsertMascotState = createServerFn({ method: "POST" })
  .inputValidator(z.object({ state: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .insert(mascotStates)
      .values(data.state as any)
      .onConflictDoUpdate({
        target: mascotStates.childId,
        set: { ...(data.state as any), updatedAt: new Date() },
      })
      .returning();
    return row;
  });

export const getAchievements = createServerFn({ method: "GET" }).handler(async () => {
  return db.select().from(achievements);
});

export const getChildAchievements = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    return db.select().from(childAchievements).where(eq(childAchievements.childId, data.childId));
  });

// ── ACTIVITY LOGS ─────────────────────────────────────────────────────────────
export const getActivityLogs = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string(), limit: z.number().optional() }))
  .handler(async ({ data }) => {
    return db
      .select()
      .from(activityLogs)
      .where(eq(activityLogs.childId, data.childId))
      .orderBy(desc(activityLogs.createdAt))
      .limit(data.limit ?? 50);
  });

export const insertActivityLog = createServerFn({ method: "POST" })
  .inputValidator(z.object({ log: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .insert(activityLogs)
      .values(data.log as any)
      .returning();
    return row;
  });

// ── SKILL MASTERY ─────────────────────────────────────────────────────────────
export const getChildSkillMastery = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    return db.select().from(childSkillMastery).where(eq(childSkillMastery.childId, data.childId));
  });

export const upsertChildSkillMastery = createServerFn({ method: "POST" })
  .inputValidator(z.object({ mastery: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .insert(childSkillMastery)
      .values(data.mastery as any)
      .onConflictDoUpdate({
        target: [childSkillMastery.childId, childSkillMastery.skillCode],
        set: { ...(data.mastery as any), updatedAt: new Date() },
      })
      .returning();
    return row;
  });

// ── PROGRESSION STATS ─────────────────────────────────────────────────────────
export const getChildProgressionStats = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    return db
      .select()
      .from(childProgressionStats)
      .where(eq(childProgressionStats.childId, data.childId));
  });

export const upsertChildProgressionStats = createServerFn({ method: "POST" })
  .inputValidator(z.object({ stats: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .insert(childProgressionStats)
      .values(data.stats as any)
      .onConflictDoUpdate({
        target: [childProgressionStats.childId, childProgressionStats.materia],
        set: { ...(data.stats as any), updatedAt: new Date() },
      })
      .returning();
    return row;
  });

// ── COGNITIVE PROFILE ─────────────────────────────────────────────────────────
export const getCognitiveProfile = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    const [row] = await db
      .select()
      .from(cognitiveProfile)
      .where(eq(cognitiveProfile.childId, data.childId));
    return row ?? null;
  });

export const upsertCognitiveProfile = createServerFn({ method: "POST" })
  .inputValidator(z.object({ profile: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .insert(cognitiveProfile)
      .values(data.profile as any)
      .onConflictDoUpdate({
        target: cognitiveProfile.childId,
        set: { ...(data.profile as any), updatedAt: new Date() },
      })
      .returning();
    return row;
  });

export const insertLongitudinalScore = createServerFn({ method: "POST" })
  .inputValidator(z.object({ score: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .insert(longitudinalScores)
      .values(data.score as any)
      .returning();
    return row;
  });

// ── PRIVACY SETTINGS ─────────────────────────────────────────────────────────
export const getUserPrivacySettings = createServerFn({ method: "GET" }).handler(async () => {
  const userId = getUid(getRequest());
  const [row] = await db
    .select()
    .from(userPrivacySettings)
    .where(eq(userPrivacySettings.userId, userId));
  return row ?? null;
});

export const upsertUserPrivacySettings = createServerFn({ method: "POST" })
  .inputValidator(z.object({ settings: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const userId = getUid(getRequest());
    const [row] = await db
      .insert(userPrivacySettings)
      .values({ ...(data.settings as any), userId })
      .onConflictDoUpdate({
        target: userPrivacySettings.userId,
        set: { ...(data.settings as any), updatedAt: new Date() },
      })
      .returning();
    return row;
  });

// ── ANAMNESE V2 ──────────────────────────────────────────────────────────────
export const getAnamneseV2 = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    const [row] = await db.select().from(anamneseV2).where(eq(anamneseV2.childId, data.childId));
    return row ?? null;
  });

export const upsertAnamneseV2 = createServerFn({ method: "POST" })
  .inputValidator(z.object({ row: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const userId = getUid(getRequest());
    const [row] = await db
      .insert(anamneseV2)
      .values({ ...(data.row as any), userId })
      .onConflictDoUpdate({
        target: anamneseV2.childId,
        set: { ...(data.row as any), updatedAt: new Date() },
      })
      .returning();
    return row;
  });

// ── BNCC & PEDAGOGICAL ───────────────────────────────────────────────────────
export const getBnccHabilidades = createServerFn({ method: "POST" })
  .inputValidator(z.object({ ano: z.string().optional(), disciplina: z.string().optional() }))
  .handler(async ({ data }) => {
    const rows = await db.select().from(bnccHabilidades);
    return rows.filter(
      (r) =>
        (!data.ano || r.ano === data.ano) && (!data.disciplina || r.disciplina === data.disciplina),
    );
  });

export const getAtividades = createServerFn({ method: "POST" })
  .inputValidator(z.object({ codigoBncc: z.string().optional() }))
  .handler(async ({ data }) => {
    const rows = await db.select().from(atividades);
    return data.codigoBncc ? rows.filter((r) => r.codigoBncc === data.codigoBncc) : rows;
  });

export const getPedagogicalActivities = createServerFn({ method: "POST" })
  .inputValidator(z.object({ serie: z.string().optional(), materia: z.string().optional() }))
  .handler(async ({ data }) => {
    const rows = await db.select().from(pedagogicalActivitiesBase);
    return rows.filter(
      (r) =>
        (!data.serie || r.serie === data.serie) && (!data.materia || r.materia === data.materia),
    );
  });

export const getNeuroAtividades = createServerFn({ method: "POST" })
  .inputValidator(z.object({ categoriaSlug: z.string().optional() }))
  .handler(async ({ data }) => {
    const rows = await db.select().from(neuroAtividades);
    return data.categoriaSlug ? rows.filter((r) => r.categoriaSlug === data.categoriaSlug) : rows;
  });

// ── PROGRESSO ALUNO ──────────────────────────────────────────────────────────
export const getProgressoAluno = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    return db.select().from(progressoAluno).where(eq(progressoAluno.alunoId, data.childId));
  });

export const upsertProgressoAluno = createServerFn({ method: "POST" })
  .inputValidator(z.object({ progresso: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db
      .insert(progressoAluno)
      .values(data.progresso as any)
      .onConflictDoUpdate({
        target: [progressoAluno.alunoId, progressoAluno.codigoBncc],
        set: { ...(data.progresso as any), updatedAt: new Date() },
      })
      .returning();
    return row;
  });

// ── AUDIT LOGS ──────────────────────────────────────────────────────────────
export const insertAuditLog = createServerFn({ method: "POST" })
  .inputValidator(z.object({ log: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const userId = getUid(getRequest());
    const [row] = await db
      .insert(auditLogs)
      .values({ ...(data.log as any), userId })
      .returning();
    return row;
  });
