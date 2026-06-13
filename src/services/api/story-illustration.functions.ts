import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import OpenAI from "openai";
import { db } from "../../../server/db";
import { storyPages, stories } from "../../../shared/schema";
import { eq } from "drizzle-orm";

function getClient(): OpenAI {
  return new OpenAI({
    apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? process.env.OPENAI_API_KEY,
    baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  });
}

const THEME_CONTEXT: Record<string, string> = {
  dinossauros:
    "lush prehistoric jungle, towering giant ferns and palm trees, colorful tropical flowers, a smoking volcanic mountain in the distance, golden sunlight filtering through ancient foliage, 2D illustrated children's book style",
  animais:
    "enchanted forest with mossy ancient oaks, a babbling brook with smooth stones, colorful wildflowers carpeting the ground, soft dappled morning sunlight, 2D illustrated children's book style",
  espaco:
    "vibrant outer space scene, swirling colorful nebulas in purple and gold, distant glowing planets, shooting stars across a dark sky, 2D illustrated children's book style",
  fazendinha:
    "sunny countryside with rolling green hills, a bright red barn, golden sunflower fields, fluffy white clouds, a wooden fence with climbing roses, 2D illustrated children's book style",
  princesas:
    "magical fairy-tale kingdom with soaring crystal castle towers, enchanted garden with giant roses and butterflies, soft golden afternoon light, sparkling fountains, 2D illustrated children's book style",
  "super-herois":
    "vibrant modern city at golden hour, gleaming colorful skyscrapers, rooftop gardens, a lively park below, dramatic clouds illuminated by sunset, 2D illustrated children's book style",
  natureza:
    "breathtaking tropical rainforest, cascading waterfall into a crystal-clear pool, exotic orchids and birds of paradise, shafts of sunlight through the forest canopy, 2D illustrated children's book style",
};

function buildPagePrompt(pageText: string, theme: string, storyTitle: string): string {
  const ctx = THEME_CONTEXT[theme] ?? "colorful magical landscape with vibrant nature, 2D illustrated children's book style";
  const scene = pageText.slice(0, 220).replace(/"/g, "'");
  return (
    `2D illustrated children's storybook scene, flat cartoon art style similar to Pixar and Studio Ghibli, ` +
    `warm vibrant saturated colors, expressive friendly characters, real painted background environments: "${scene}". ` +
    `Environment setting: ${ctx}. ` +
    `Art direction: soft digital painting, expressive 2D cartoon characters with clear outlines, ` +
    `rich illustrated background with depth, no text or letters, no captions, suitable for children ages 4-10, ` +
    `wide cinematic composition, beautiful warm lighting, detailed and immersive scene.`
  );
}

function buildCoverPrompt(storyTitle: string, theme: string, description: string): string {
  const ctx = THEME_CONTEXT[theme] ?? "colorful magical landscape, 2D illustrated children's book style";
  const desc = (description ?? "").slice(0, 180).replace(/"/g, "'");
  return (
    `2D illustrated children's book cover, flat cartoon art style, vibrant saturated colors, ` +
    `magical welcoming atmosphere. Story: "${storyTitle}". ${desc}. ` +
    `Environment: ${ctx}. ` +
    `Art direction: rich painterly 2D illustration, warm inviting scene, expressive friendly characters, ` +
    `no text or words anywhere, lush detailed background with depth, ` +
    `suitable for children ages 4-10, breathtaking wide composition.`
  );
}

async function callImageAPI(prompt: string): Promise<string | null> {
  const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.warn("[story-illustration] No API key available");
    return null;
  }
  try {
    const client = getClient();
    const response = await client.images.generate({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: "1024x1024",
      quality: "medium",
    } as any);

    const b64 = (response.data?.[0] as any)?.b64_json as string | undefined;
    if (b64) return `data:image/png;base64,${b64}`;

    const url = response.data?.[0]?.url as string | undefined;
    if (url) return url;

    console.warn("[story-illustration] No image data in response");
    return null;
  } catch (e: any) {
    console.error("[story-illustration] API error:", e?.message ?? String(e));
    return null;
  }
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
