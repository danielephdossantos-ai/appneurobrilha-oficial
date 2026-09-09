---
name: Diploma padrão + coleção de mascotes
description: Todo diploma novo usa DiplomaBrilha (Esquilo Brilha fixo + 1 mascote colecionável da Loja). Personagens narrativos (Aurora, etc.) sempre puxam do mapa PERSONAGENS.
type: preference
---
Diploma padrão do app: `src/components/DiplomaBrilha.tsx`.
- Assinatura fixa: **Esquilo Brilha** (mascote oficial).
- Cada diploma exibe **1 mascote colecionável** da Loja (numeroColecao/totalColecao) — cria apego e desejo de coleção.
- Nunca usar emoji cru para representar um personagem narrativo em diplomas/telas de conquista. Usar sempre o mapa `PERSONAGENS` em `src/escola-brilha/mascotes-personagens.ts` (ex.: Aurora → `pipa-astronauta`).
- Ao introduzir um personagem novo em qualquer aula, adicionar a entrada em `PERSONAGENS` apontando para um mascote real da Loja (`src/pages/MascotStore.tsx`).
