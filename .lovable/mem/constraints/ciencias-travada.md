---
name: Ciências travada (1º ao 9º ano)
description: Proibido editar qualquer aula/unidade/curso de Ciências (1º ao 9º ano) sem autorização explícita do usuário.
type: constraint
---

PROIBIDO editar, refatorar, "melhorar", padronizar visual, trocar imagens, ajustar textos ou renomear qualquer arquivo em:

- `src/escola-brilha/curso-v4/ciencias-1ano/**`
- `src/escola-brilha/curso-v4/ciencias-2ano/**`
- `src/escola-brilha/curso-v4/ciencias-3ano/**`
- `src/escola-brilha/curso-v4/ciencias-4ano/**`
- `src/escola-brilha/curso-v4/ciencias-5ano/**`
- `src/escola-brilha/curso-v4/ciencias-6ano/**`
- `src/escola-brilha/curso-v4/ciencias-7ano/**`
- `src/escola-brilha/curso-v4/ciencias-8ano/**`
- `src/escola-brilha/curso-v4/ciencias-9ano/**`
- Assets de Ciências já referenciados nessas aulas (`src/assets/**` usados por esses cursos)

**Why:** O usuário aprovou o resultado final de Ciências. Edições silenciosas durante trabalho em outras disciplinas já causaram regressões visuais/pedagógicas antes.

**How to apply:**
- Ao criar uma nova aula/disciplina, NÃO tocar em nenhum arquivo dessas pastas.
- Se uma mudança global (types.ts, PlayerGeoV1, componentes compartilhados) puder afetar Ciências, avisar ANTES e pedir confirmação.
- Se o usuário pedir explicitamente "mexer no Ciências X ano", aí sim está liberado — só nessa aula/unidade específica que ele citar.
- Alterações em componentes compartilhados (`PlayerGeoV1.tsx`, `types.ts`, etc.) que quebrem visual de Ciências exigem revisão manual com o usuário antes do merge.
