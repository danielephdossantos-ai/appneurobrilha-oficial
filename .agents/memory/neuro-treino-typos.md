---
name: Neuro-Treino bank field name consistency
description: Portuguese field names in variation bank arrays must be exactly consistent — one typo causes "not iterable" runtime crash
---

## Rule

In `variations-extended.ts`, every entry in a bank array must use the exact same field name. The bug: one entry used `outros` instead of `outras`, causing `...b.outras` to throw "not iterable" for that rotation slot.

**Why:** The bank is accessed via `i % bank.length`, so the crash only surfaces when `i` hits the bad entry — not immediately on load, making it hard to spot.

**How to apply:** When adding bank entries in Portuguese, double-check that all object keys exactly match what the map function destructures (`b.outras`, `b.itens`, `b.silabas`, etc.). Run a quick grep for the field name to verify consistency across all entries.
