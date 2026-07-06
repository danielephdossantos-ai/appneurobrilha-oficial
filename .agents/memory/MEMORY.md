- [Math visual steps pattern](math-visual-steps.md) — ActivityLessonC supports optional visual_steps in exemplo_aplicado for animated equation building; non-math lessons fall back to text analysis list.
- [Neuro-Treino mechanic bank typo pitfall](neuro-treino-typos.md) — Portuguese field names (outras/outros) must be consistent in bank arrays; one typo causes runtime "not iterable" crash for all variations using that bank entry.
- [Supabase → Replit PG migration](supabase-migration.md) — Full migration complete: shim at src/database/supabase/client.ts + server fns in src/services/db/; schema pushed via drizzle-kit push.
- [Português EF01LP* — tap image + speak name](portugues-tap-fala.md) — Padrão travado: aulas de Português usam `escolherFigura` (tocar imagem → TTS fala nome). NÃO alterar EI existentes. Matemática segue `contarQuiz`/`operacao`.

