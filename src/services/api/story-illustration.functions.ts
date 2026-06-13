import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { db } from "../../../server/db";
import { storyPages, stories } from "../../../shared/schema";
import { eq } from "drizzle-orm";

const THEME_CONTEXT: Record<string, string> = {
  dinossauros:
    "lush prehistoric jungle, towering ferns and giant palm trees, colorful tropical flowers, volcanic mountains with wispy clouds, golden sunlight filtering through ancient foliage",
  animais:
    "enchanted forest with magical glowing mushrooms, mossy ancient oaks, soft dappled sunlight, a babbling brook with smooth stones, colorful wildflowers carpeting the ground",
  espaco:
    "vibrant outer space, swirling colorful nebulas in purple and gold, distant glowing planets, shooting stars, a sparkling Milky Way backdrop",
  fazendinha:
    "sunny countryside with rolling green hills, a classic red barn, golden sunflower fields, fluffy white clouds, a wooden fence with climbing roses",
  princesas:
    "magical fairy-tale kingdom with soaring crystal castle towers, enchanted garden with giant roses and butterflies, soft golden afternoon light, sparkling fountains",
  "super-herois":
    "vibrant modern city at golden hour, gleaming skyscrapers, colorful clouds illuminated by sunset, rooftop gardens, a lively park below",
  natureza:
    "breathtaking tropical rainforest, cascading waterfall into a crystal-clear pool, exotic orchids and birds of paradise, shafts of sunlight through the canopy, butterflies everywhere",
};

function buildPagePrompt(pageText: string, theme: string, storyTitle: string): string {
  const ctx = THEME_CONTEXT[theme] ?? "colorful magical landscape with vibrant nature";
  const scene = pageText.slice(0, 220).replace(/"/g, "'");
  return (
    `Children's illustrated storybook scene, Pixar and Studio Ghibli art style, warm vibrant colors, ` +
    `high detail, painterly and magical: "${scene}". ` +
    `Background setting: ${ctx}. ` +
    `Style: soft watercolor with digital polish, expressive friendly characters, rich environment, ` +
    `no text or letters, no captions, suitable for children ages 4-10, cinematic composition, beautiful lighting.`
  );
}

function buildCoverPrompt(storyTitle: string, theme: string, description: string): string {
  const ctx = THEME_CONTEXT[theme] ?? "colorful magical landscape";
  const desc = (description ?? "").slice(0, 180).replace(/"/g, "'");
  return (
    `Children's book cover illustration, Pixar and Studio Ghibli art style, vibrant saturated colors, ` +
    `magical atmosphere: story titled "${storyTitle}". ${desc}. ` +
    `Setting: ${ctx}. ` +
    `Style: rich painterly illustration, warm inviting scene, expressive characters, ` +
    `no text or words, lush detailed background, suitable for children ages 4-10, breathtaking composition.`
  );
}

async function callImageAPI(prompt: string): Promise<string | null> {
  const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? process.env.OPENAI_API_KEY;
  const baseURL = (process.env.AI_INTEGRATIONS_OPENAI_BASE_URL ?? "https://api.openai.com/v1").replace(/\/$/, "");
  if (!apiKey) return null;

  const res = await fetch(`${baseURL}/images/generations`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: "1024x1024",
      quality: "medium",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[story-illustration] API error:", res.status, err.slice(0, 300));
    return null;
  }

  const json = await res.json();
  const b64 = json.data?.[0]?.b64_json as string | undefined;
  return b64 ? `data:image/png;base64,${b64}` : null;
}

export const generateStoryPageImage = createServerFn({ method: "POST" })
  .validator(
    z.object({
      pageId: z.string(),
      pageText: z.string(),
      theme: z.string(),
      storyTitle: z.string(),
    })
  )
  .handler(async ({ data }) => {
    try {
      const prompt = buildPagePrompt(data.pageText, data.theme, data.storyTitle);
      const imageUrl = await callImageAPI(prompt);
      if (!imageUrl) return { imageUrl: null };

      await db.update(storyPages).set({ imageUrl }).where(eq(storyPages.id, data.pageId));
      return { imageUrl };
    } catch (e: any) {
      console.error("[generateStoryPageImage] exception:", e?.message);
      return { imageUrl: null };
    }
  });

export const generateStoryCoverImage = createServerFn({ method: "POST" })
  .validator(
    z.object({
      storyId: z.string(),
      storyTitle: z.string(),
      theme: z.string(),
      description: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    try {
      const prompt = buildCoverPrompt(data.storyTitle, data.theme, data.description ?? "");
      const imageUrl = await callImageAPI(prompt);
      if (!imageUrl) return { imageUrl: null };

      await db.update(stories).set({ coverImage: imageUrl }).where(eq(stories.id, data.storyId));
      return { imageUrl };
    } catch (e: any) {
      console.error("[generateStoryCoverImage] exception:", e?.message);
      return { imageUrl: null };
    }
  });
