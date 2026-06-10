import type { Express, Request, Response } from "express";
import { db } from "../db";
import { children, childAnamnesis } from "../../shared/schema";
import { eq, asc } from "drizzle-orm";

function getUserId(req: Request): string | null {
  return (req.headers["x-replit-user-id"] as string) || null;
}

export function registerChildrenRoutes(app: Express): void {
  app.get("/api/children", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const rows = await db
        .select()
        .from(children)
        .where(eq(children.userId, userId))
        .orderBy(asc(children.createdAt));
      res.json(rows);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/children", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const body = { ...req.body, userId };
      const [row] = await db.insert(children).values(body).returning();
      res.status(201).json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.patch("/api/children/:id", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const { id } = req.params;
      const patch = { ...req.body, updatedAt: new Date() };
      delete patch.userId;
      const [row] = await db
        .update(children)
        .set(patch)
        .where(eq(children.id, id))
        .returning();
      if (!row) return res.status(404).json({ error: "Not found" });
      res.json(row);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.delete("/api/children/:id", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      await db.delete(children).where(eq(children.id, req.params.id));
      res.status(204).send();
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/add_brilhocoins", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const { child_id, amount } = req.body;
      const [current] = await db.select().from(children).where(eq(children.id, child_id));
      if (!current) return res.status(404).json({ error: "Not found" });
      await db.update(children).set({
        coins: (current.coins ?? 0) + amount,
        earnedToday: (current.earnedToday ?? 0) + amount,
        totalEarned: (current.totalEarned ?? 0) + amount,
        updatedAt: new Date(),
      }).where(eq(children.id, child_id));
      res.json({ ok: true });
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.get("/api/child_anamnesis/:childId", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const [row] = await db.select().from(childAnamnesis).where(eq(childAnamnesis.childId, req.params.childId));
      res.json(row ?? null);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/child_anamnesis", async (req: Request, res: Response) => {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });
    try {
      const { child_id, responses, internal_profile } = req.body;
      const [existing] = await db.select().from(childAnamnesis).where(eq(childAnamnesis.childId, child_id));
      if (existing) {
        const count = existing.editCount ?? 0;
        if (count >= 3) return res.status(400).json({ error: "Limite de 3 edições atingido" });
        const [updated] = await db.update(childAnamnesis)
          .set({ responses, internalProfile: internal_profile, editCount: count + 1, updatedAt: new Date() })
          .where(eq(childAnamnesis.id, existing.id))
          .returning();
        await db.update(children).set({ anamnesisEditCount: count + 1, updatedAt: new Date() }).where(eq(children.id, child_id));
        return res.json(updated);
      } else {
        const [inserted] = await db.insert(childAnamnesis)
          .values({ childId: child_id, responses, internalProfile: internal_profile, editCount: 1 })
          .returning();
        await db.update(children).set({ anamnesisId: inserted.id, anamnesisEditCount: 1, anamneseCompleta: true, updatedAt: new Date() }).where(eq(children.id, child_id));
        return res.status(201).json(inserted);
      }
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });
}
