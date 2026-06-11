import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "../shared/schema";
import { storiesData } from "../src/modules/historias/data/storiesData";

const { Pool } = pg;

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL not set");
    process.exit(1);
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema });

  console.log("Seeding 10 interactive stories...\n");

  for (const data of storiesData) {
    console.log(`  Inserting: "${data.story.title}"`);

    const [story] = await db
      .insert(schema.stories)
      .values({
        title: data.story.title,
        description: data.story.description,
        coverImage: data.story.coverImage,
        readingLevel: data.story.readingLevel,
        ageMin: data.story.ageMin,
        ageMax: data.story.ageMax,
        theme: data.story.theme,
        difficulty: data.story.difficulty,
        aiGenerated: false,
      })
      .returning();

    for (const page of data.pages) {
      await db.insert(schema.storyPages).values({
        storyId: story.id,
        pageNumber: page.pageNumber,
        text: page.text,
        imageUrl: page.imageUrl,
        highlightWords: page.highlightWords,
      });
    }

    for (const q of data.questions) {
      await db.insert(schema.storyQuestions).values({
        storyId: story.id,
        question: q.question,
        optionA: q.optionA,
        optionB: q.optionB,
        optionC: q.optionC,
        correctAnswer: q.correctAnswer,
        difficulty: q.difficulty,
      });
    }

    console.log(
      `    -> ${data.pages.length} paginas, ${data.questions.length} perguntas`
    );
  }

  console.log("\nSeed completo! 10 historias inseridas.");
  await pool.end();
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed falhou:", err);
  process.exit(1);
});
