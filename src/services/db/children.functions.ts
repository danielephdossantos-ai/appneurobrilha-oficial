// @ts-nocheck
import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";
import { db } from "../../../server/db";
import { children, childAnamnesis } from "../../../shared/schema";
import { eq, asc } from "drizzle-orm";

function getUserIdFromRequest(req: Request): string {
  return req.headers.get("x-replit-user-id") ?? "anonymous";
}

export const getChildren = createServerFn({ method: "GET" }).handler(async () => {
  const req = getRequest();
  const userId = getUserIdFromRequest(req);
  return db
    .select()
    .from(children)
    .where(eq(children.userId, userId))
    .orderBy(asc(children.createdAt));
});

export const createChild = createServerFn({ method: "POST" })
  .inputValidator(z.object({ child: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const req = getRequest();
    const userId = getUserIdFromRequest(req);
    const [row] = await db
      .insert(children)
      .values({ ...(data.child as any), userId })
      .returning();
    return row;
  });

export const updateChild = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string(), patch: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const { id, patch } = data;
    const sanitized = { ...(patch as any), updatedAt: new Date() };
    delete sanitized.userId;
    const [row] = await db.update(children).set(sanitized).where(eq(children.id, id)).returning();
    return row;
  });

export const deleteChild = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await db.delete(children).where(eq(children.id, data.id));
    return { ok: true };
  });

export const addBrilhocoins = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string(), amount: z.number() }))
  .handler(async ({ data }) => {
    const [current] = await db.select().from(children).where(eq(children.id, data.childId));
    if (!current) throw new Error("Child not found");
    await db
      .update(children)
      .set({
        coins: (current.coins ?? 0) + data.amount,
        earnedToday: (current.earnedToday ?? 0) + data.amount,
        totalEarned: (current.totalEarned ?? 0) + data.amount,
        updatedAt: new Date(),
      })
      .where(eq(children.id, data.childId));
    return { ok: true };
  });

export const getChildAnamnesis = createServerFn({ method: "POST" })
  .inputValidator(z.object({ childId: z.string() }))
  .handler(async ({ data }) => {
    const [row] = await db
      .select()
      .from(childAnamnesis)
      .where(eq(childAnamnesis.childId, data.childId));
    return row ?? null;
  });

export const saveChildAnamnesis = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      child_id: z.string(),
      responses: z.record(z.unknown()),
      internal_profile: z.record(z.unknown()).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const [existing] = await db
      .select()
      .from(childAnamnesis)
      .where(eq(childAnamnesis.childId, data.child_id));
    if (existing) {
      const count = existing.editCount ?? 0;
      if (count >= 3) throw new Error("Limite de 3 edições atingido para esta anamnese.");
      const [updated] = await db
        .update(childAnamnesis)
        .set({
          responses: data.responses,
          internalProfile: data.internal_profile ?? {},
          editCount: count + 1,
          updatedAt: new Date(),
        })
        .where(eq(childAnamnesis.id, existing.id))
        .returning();
      await db
        .update(children)
        .set({ anamnesisEditCount: count + 1, updatedAt: new Date() })
        .where(eq(children.id, data.child_id));
      return updated;
    } else {
      const [inserted] = await db
        .insert(childAnamnesis)
        .values({
          childId: data.child_id,
          responses: data.responses,
          internalProfile: data.internal_profile ?? {},
          editCount: 1,
        })
        .returning();
      await db
        .update(children)
        .set({
          anamnesisId: inserted.id,
          anamnesisEditCount: 1,
          anamneseCompleta: true,
          updatedAt: new Date(),
        })
        .where(eq(children.id, data.child_id));
      return inserted;
    }
  });
