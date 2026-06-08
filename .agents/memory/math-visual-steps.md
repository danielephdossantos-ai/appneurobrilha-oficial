---
name: Math visual steps pattern
description: How animated equation building works in ActivityLessonC lessons
---

The `exemplo_aplicado` in `ActivityLessonC` has an optional `visual_steps` field.
When present, `ExemploScreen` renders `MathVisualizer` instead of the text list.

**Why:** User requested piece-by-piece equation assembly animation instead of static text steps.

**How to apply:** Add `visual_steps` to any math lesson's `exemplo_aplicado`. Non-math lessons omit it and get the old text-based analysis list. The `MathVisualizer` component handles all animation internally (build phase → step-by-step with before/after → verification).

Token roles: `unknown` (blue, variable), `coef` (blue, coefficient), `number` (amber), `op` (slate, operators), `eq` (slate, equals), `paren` (slate). Tokens can be `dim` (faded) or `strike` (red strikethrough). Step `accent` maps to color palette: orange, violet, emerald, blue.
