import type { Express, Request, Response } from "express";
import { db } from "../db";
import {
  notifications,
  studyAgenda,
  examMissions,
  examMissionContents,
  examStudyPlans,
  userMascots,
  mascots,
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
  explicacoes,
  progressoAluno,
  pedagogicalActivitiesBase,
  neuroAtividades,
  auditLogs,
  children,
} from "../../shared/schema";
import { eq, desc, and, asc, ilike, sql } from "drizzle-orm";

function getUserId(req: Request): string | null {
  return (req.headers["x-replit-user-id"] as string) || null;
}

export function registerDataRoutes(app: Express): void {
  // ── NOTIFICATIONS ────────────────────────────────────────────────────────────
  app.get("/api/notifications", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const rows = await db
        .select()
        .from(notifications)
        .where(eq(notifications.userId, userId))
        .orderBy(desc(notifications.createdAt))
        .limit(20);
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/notifications", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const [row] = await db
        .insert(notifications)
        .values({ ...req.body, userId })
        .returning();
      res.status(201).json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.patch("/api/notifications/:id/read", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      await db
        .update(notifications)
        .set({ read: true })
        .where(and(eq(notifications.id, req.params.id), eq(notifications.userId, userId)));
      res.json({ ok: true });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── STUDY AGENDA ────────────────────────────────────────────────────────────
  app.get("/api/study_agenda/:childId", async (req: Request, res: Response) => {
    try {
      const rows = await db
        .select()
        .from(studyAgenda)
        .where(eq(studyAgenda.childId, req.params.childId))
        .orderBy(asc(studyAgenda.createdAt));
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/study_agenda", async (req: Request, res: Response) => {
    try {
      const [row] = await db.insert(studyAgenda).values(req.body).returning();
      res.status(201).json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.patch("/api/study_agenda/:id", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .update(studyAgenda)
        .set({ ...req.body, updatedAt: new Date() })
        .where(eq(studyAgenda.id, req.params.id))
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.delete("/api/study_agenda/:id", async (req: Request, res: Response) => {
    try {
      await db.delete(studyAgenda).where(eq(studyAgenda.id, req.params.id));
      res.status(204).send();
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── EXAM MISSIONS ────────────────────────────────────────────────────────────
  app.get("/api/exam_missions/:childId", async (req: Request, res: Response) => {
    try {
      const rows = await db
        .select()
        .from(examMissions)
        .where(eq(examMissions.childId, req.params.childId));
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/exam_missions", async (req: Request, res: Response) => {
    try {
      const { exam_study_plans: plans, exam_mission_contents: contents, ...mission } = req.body;
      const [row] = await db.insert(examMissions).values(mission).returning();
      if (contents?.length)
        await db
          .insert(examMissionContents)
          .values(contents.map((c: any) => ({ ...c, missionId: row.id })));
      if (plans?.length)
        await db
          .insert(examStudyPlans)
          .values(plans.map((p: any) => ({ ...p, missionId: row.id })));
      res.status(201).json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.delete("/api/exam_missions/:id", async (req: Request, res: Response) => {
    try {
      await db.delete(examMissions).where(eq(examMissions.id, req.params.id));
      res.status(204).send();
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.patch("/api/exam_mission_contents/:id", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .update(examMissionContents)
        .set(req.body)
        .where(eq(examMissionContents.id, req.params.id))
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.patch("/api/exam_study_plans/:id", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .update(examStudyPlans)
        .set(req.body)
        .where(eq(examStudyPlans.id, req.params.id))
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── MASCOTS ──────────────────────────────────────────────────────────────────
  app.get("/api/mascots", async (_req: Request, res: Response) => {
    try {
      const rows = await db.select().from(mascots);
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.get("/api/user_mascots", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const rows = await db.select().from(userMascots).where(eq(userMascots.userId, userId));
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/user_mascots", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const [row] = await db
        .insert(userMascots)
        .values({ ...req.body, userId })
        .onConflictDoUpdate({ target: [userMascots.userId, userMascots.mascotId], set: req.body })
        .returning();
      res.status(201).json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.patch("/api/user_mascots/:id", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const [row] = await db
        .update(userMascots)
        .set(req.body)
        .where(and(eq(userMascots.id, req.params.id), eq(userMascots.userId, userId)))
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── GAMIFICATION ─────────────────────────────────────────────────────────────
  app.get("/api/gamification_profiles/:childId", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .select()
        .from(gamificationProfiles)
        .where(eq(gamificationProfiles.childId, req.params.childId));
      res.json(row ?? null);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/gamification_profiles", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .insert(gamificationProfiles)
        .values(req.body)
        .onConflictDoUpdate({
          target: gamificationProfiles.childId,
          set: { ...req.body, updatedAt: new Date() },
        })
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.get("/api/mascot_states/:childId", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .select()
        .from(mascotStates)
        .where(eq(mascotStates.childId, req.params.childId));
      res.json(row ?? null);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/mascot_states", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .insert(mascotStates)
        .values(req.body)
        .onConflictDoUpdate({
          target: mascotStates.childId,
          set: { ...req.body, updatedAt: new Date() },
        })
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.get("/api/achievements", async (_req: Request, res: Response) => {
    try {
      const rows = await db.select().from(achievements);
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.get("/api/child_achievements/:childId", async (req: Request, res: Response) => {
    try {
      const rows = await db
        .select()
        .from(childAchievements)
        .where(eq(childAchievements.childId, req.params.childId));
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── ACTIVITY LOGS ────────────────────────────────────────────────────────────
  app.get("/api/activity_logs/:childId", async (req: Request, res: Response) => {
    try {
      const rows = await db
        .select()
        .from(activityLogs)
        .where(eq(activityLogs.childId, req.params.childId))
        .orderBy(desc(activityLogs.createdAt))
        .limit(50);
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/activity_logs", async (req: Request, res: Response) => {
    try {
      const [row] = await db.insert(activityLogs).values(req.body).returning();
      res.status(201).json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── SKILL MASTERY ────────────────────────────────────────────────────────────
  app.get("/api/child_skill_mastery/:childId", async (req: Request, res: Response) => {
    try {
      const rows = await db
        .select()
        .from(childSkillMastery)
        .where(eq(childSkillMastery.childId, req.params.childId));
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/child_skill_mastery", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .insert(childSkillMastery)
        .values(req.body)
        .onConflictDoUpdate({
          target: [childSkillMastery.childId, childSkillMastery.skillCode],
          set: { ...req.body, updatedAt: new Date() },
        })
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── PROGRESSION STATS ────────────────────────────────────────────────────────
  app.get("/api/child_progression_stats/:childId", async (req: Request, res: Response) => {
    try {
      const rows = await db
        .select()
        .from(childProgressionStats)
        .where(eq(childProgressionStats.childId, req.params.childId));
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/child_progression_stats", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .insert(childProgressionStats)
        .values(req.body)
        .onConflictDoUpdate({
          target: [childProgressionStats.childId, childProgressionStats.materia],
          set: { ...req.body, updatedAt: new Date() },
        })
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── COGNITIVE PROFILE ────────────────────────────────────────────────────────
  app.get("/api/cognitive_profile/:childId", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .select()
        .from(cognitiveProfile)
        .where(eq(cognitiveProfile.childId, req.params.childId));
      res.json(row ?? null);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/cognitive_profile", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .insert(cognitiveProfile)
        .values(req.body)
        .onConflictDoUpdate({
          target: cognitiveProfile.childId,
          set: { ...req.body, updatedAt: new Date() },
        })
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── LONGITUDINAL SCORES ──────────────────────────────────────────────────────
  app.post("/api/longitudinal_scores", async (req: Request, res: Response) => {
    try {
      const [row] = await db.insert(longitudinalScores).values(req.body).returning();
      res.status(201).json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── PRIVACY SETTINGS ─────────────────────────────────────────────────────────
  app.get("/api/user_privacy_settings", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const [row] = await db
        .select()
        .from(userPrivacySettings)
        .where(eq(userPrivacySettings.userId, userId));
      res.json(row ?? null);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/user_privacy_settings", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const [row] = await db
        .insert(userPrivacySettings)
        .values({ ...req.body, userId })
        .onConflictDoUpdate({
          target: userPrivacySettings.userId,
          set: { ...req.body, updatedAt: new Date() },
        })
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── ANAMNESE V2 ──────────────────────────────────────────────────────────────
  app.get("/api/anamnese_v2/:childId", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .select()
        .from(anamneseV2)
        .where(eq(anamneseV2.childId, req.params.childId));
      res.json(row ?? null);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/anamnese_v2", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const [row] = await db
        .insert(anamneseV2)
        .values({ ...req.body, userId })
        .onConflictDoUpdate({
          target: anamneseV2.childId,
          set: { ...req.body, updatedAt: new Date() },
        })
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── BNCC & PEDAGOGICAL ───────────────────────────────────────────────────────
  app.get("/api/bncc_habilidades", async (req: Request, res: Response) => {
    try {
      const { ano, disciplina } = req.query;
      const query = db.select().from(bnccHabilidades);
      const rows = await query;
      let filtered = rows;
      if (ano) filtered = filtered.filter((r) => r.ano === ano);
      if (disciplina) filtered = filtered.filter((r) => r.disciplina === disciplina);
      res.json(filtered);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.get("/api/atividades", async (req: Request, res: Response) => {
    try {
      const { codigo_bncc } = req.query;
      const rows = await db.select().from(atividades);
      const filtered = codigo_bncc ? rows.filter((r) => r.codigoBncc === codigo_bncc) : rows;
      res.json(filtered);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.get("/api/pedagogical_activities_base", async (req: Request, res: Response) => {
    try {
      const { serie, materia } = req.query;
      const rows = await db.select().from(pedagogicalActivitiesBase);
      let filtered = rows;
      if (serie) filtered = filtered.filter((r) => r.serie === serie);
      if (materia) filtered = filtered.filter((r) => r.materia === materia);
      res.json(filtered);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── PROGRESSO ALUNO ──────────────────────────────────────────────────────────
  app.get("/api/progresso_aluno/:childId", async (req: Request, res: Response) => {
    try {
      const rows = await db
        .select()
        .from(progressoAluno)
        .where(eq(progressoAluno.alunoId, req.params.childId));
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/progresso_aluno", async (req: Request, res: Response) => {
    try {
      const [row] = await db
        .insert(progressoAluno)
        .values(req.body)
        .onConflictDoUpdate({
          target: [progressoAluno.alunoId, progressoAluno.codigoBncc],
          set: { ...req.body, updatedAt: new Date() },
        })
        .returning();
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── NEURO ATIVIDADES ─────────────────────────────────────────────────────────
  app.get("/api/neuro_atividades", async (req: Request, res: Response) => {
    try {
      const { categoria_slug } = req.query;
      const rows = await db.select().from(neuroAtividades);
      const filtered = categoria_slug
        ? rows.filter((r) => r.categoriaSlug === categoria_slug)
        : rows;
      res.json(filtered);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── AUDIT LOGS ──────────────────────────────────────────────────────────────
  app.post("/api/audit_logs", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    try {
      const [row] = await db
        .insert(auditLogs)
        .values({ ...req.body, userId: userId ?? req.body.userId })
        .returning();
      res.status(201).json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  // ── ACTIVITY RESULTS (for auditoria) ────────────────────────────────────────
  app.get("/api/activity_results/:childId", async (req: Request, res: Response) => {
    try {
      const rows = await db
        .select()
        .from(activityLogs)
        .where(eq(activityLogs.childId, req.params.childId))
        .orderBy(desc(activityLogs.createdAt))
        .limit(100);
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });
}
