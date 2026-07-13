---
name: Geografia travada — não modificar
description: Toda a disciplina de Geografia (Infantil ao 9º Ano, incluindo v2) está aprovada e travada. Exceção autorizada: `geografia-2ano-v2` (piloto em construção).
type: constraint
---
Geografia está TRAVADA. Proibido modificar sem pedido explícito e específico mencionando "destravar geografia".

Escopo travado:
- `src/escola-brilha/data/geografia*` (Infantil, 1º ao 9º Ano)
- `src/escola-brilha/curso-v4/geografia-2ano/**` (versão original PlayerPortuguesV4)
- `src/escola-brilha/curso-v4/geografia-3ano/**`
- `src/escola-brilha/curso-v4/geografia-4ano/**`
- `src/escola-brilha/curso-v4/geografia-5ano/**`
- `src/escola-brilha/curso-v4/geografia-6ano/**`
- `src/escola-brilha/curso-v4/geografia-6ano-v2/**`
- `src/escola-brilha/curso-v4/geografia-7ano/**`
- `src/escola-brilha/curso-v4/geografia-7ano-v2/**`
- `src/escola-brilha/curso-v4/geografia-8ano/**`
- `src/escola-brilha/curso-v4/geografia-8ano-v2/**`
- `src/escola-brilha/curso-v4/geografia-9ano/**`
- `src/escola-brilha/curso-v4/geografia-9ano-v2/**`
- Assets em `src/assets/geografia-*/**` (somente leitura — importar é OK, editar não)

Exceção AUTORIZADA (usuário pediu explicitamente 2026-07-13):
- `src/escola-brilha/curso-v4/geografia-2ano-v2/**` — piloto migrando 2º Ano para o padrão AulaGeoV1 do 3º/4º/5º. Pode editar livremente até nova aprovação.

Não editar componentes compartilhados (PlayerGeoV1, PlayerGeoV2, VisualEsquematico, etc.) de forma que altere comportamento visível em Geografia travada.
