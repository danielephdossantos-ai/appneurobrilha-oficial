import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { db } from "../../../server/db";
import { stories, storyPages, storyQuestions, storyProgress } from "../../../shared/schema";
import { eq, and, asc } from "drizzle-orm";

export const getStories = createServerFn({ method: "POST" })
  .inputValidator(z.object({ theme: z.string().optional(), level: z.string().optional() }))
  .handler(async ({ data }) => {
    let q = db.select().from(stories).$dynamic();
    const rows = await q.orderBy(asc(stories.createdAt));
    let result = rows as any[];
    if (data.theme && data.theme !== "todos") result = result.filter(r => r.theme === data.theme);
    if (data.level && data.level !== "todos") result = result.filter(r => r.readingLevel === data.level);
    return result.map(normalizeStory);
  });

export const getStory = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const [story, pages, questions] = await Promise.all([
      db.select().from(stories).where(eq(stories.id, data.id)),
      db.select().from(storyPages).where(eq(storyPages.storyId, data.id)).orderBy(asc(storyPages.pageNumber)),
      db.select().from(storyQuestions).where(eq(storyQuestions.storyId, data.id)).orderBy(asc(storyQuestions.createdAt)),
    ]);
    return {
      story: story[0] ? normalizeStory(story[0]) : null,
      pages: pages.map(normalizePage),
      questions: questions.map(normalizeQuestion),
    };
  });

export const upsertStoryProgress = createServerFn({ method: "POST" })
  .inputValidator(z.object({
    childId: z.string(),
    storyId: z.string(),
    currentPage: z.number(),
    completed: z.boolean().optional(),
    score: z.number().optional(),
  }))
  .handler(async ({ data }) => {
    const existing = await db.select().from(storyProgress)
      .where(and(eq(storyProgress.childId, data.childId as any), eq(storyProgress.storyId, data.storyId as any)));
    const payload: any = {
      childId: data.childId,
      storyId: data.storyId,
      currentPage: data.currentPage,
      completed: data.completed ?? false,
      score: data.score ?? 0,
      ...(data.completed ? { completedAt: new Date() } : {}),
    };
    if (existing.length > 0) {
      await db.update(storyProgress).set(payload)
        .where(and(eq(storyProgress.childId, data.childId as any), eq(storyProgress.storyId, data.storyId as any)));
    } else {
      await db.insert(storyProgress).values(payload);
    }
    return { ok: true };
  });

export const insertStory = createServerFn({ method: "POST" })
  .inputValidator(z.object({ story: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db.insert(stories).values(data.story as any).returning();
    return row;
  });

export const insertStoryPage = createServerFn({ method: "POST" })
  .inputValidator(z.object({ page: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db.insert(storyPages).values(data.page as any).returning();
    return row;
  });

export const insertStoryQuestion = createServerFn({ method: "POST" })
  .inputValidator(z.object({ question: z.record(z.unknown()) }))
  .handler(async ({ data }) => {
    const [row] = await db.insert(storyQuestions).values(data.question as any).returning();
    return row;
  });

function normalizeStory(r: any) {
  return {
    id: r.id,
    title: r.title,
    description: r.description ?? null,
    cover_image: r.coverImage ?? r.cover_image ?? null,
    reading_level: r.readingLevel ?? r.reading_level ?? "iniciante",
    age_min: r.ageMin ?? r.age_min ?? 4,
    age_max: r.ageMax ?? r.age_max ?? 10,
    theme: r.theme,
    difficulty: r.difficulty ?? 1,
    ai_generated: r.aiGenerated ?? r.ai_generated ?? false,
  };
}

function normalizePage(r: any) {
  return {
    id: r.id,
    story_id: r.storyId ?? r.story_id,
    page_number: r.pageNumber ?? r.page_number,
    text: r.text,
    image_url: r.imageUrl ?? r.image_url ?? null,
    audio_url: r.audioUrl ?? r.audio_url ?? null,
    highlight_words: (r.highlightWords ?? r.highlight_words ?? []) as string[],
  };
}

function normalizeQuestion(r: any) {
  return {
    id: r.id,
    story_id: r.storyId ?? r.story_id,
    question: r.question,
    option_a: r.optionA ?? r.option_a,
    option_b: r.optionB ?? r.option_b,
    option_c: r.optionC ?? r.option_c,
    correct_answer: r.correctAnswer ?? r.correct_answer,
    difficulty: r.difficulty ?? 1,
  };
}
