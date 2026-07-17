## Unidade 1 · Geografia 2º Ano — "Os Lugares Onde Vivemos" (EF02GE01)

Vou construir uma aula 100% gamificada e customizada (fora do template padrão), com 6 cenas encadeadas: Galeria → GeoScanner → Painel Trunfo → Laboratório → Minijogo Arquiteto → Vitória.

### ⚠️ 2 pontos que preciso confirmar antes de codar

**1. "Fotografias reais" × padrão visual travado**
A memória do projeto diz explicitamente: *"Proibido emoji cru, ícones genéricos, **fotos**, 3D realista"* — o padrão travado é ilustração 2D kawaii/Pixar. Como resolver os 5 tipos de moradia (Apartamento, Casa Urbana, Fazenda, Ribeirinha, Aldeia)?
- **A)** Gerar 5 ilustrações kawaii detalhadas (mantém o padrão travado). *Recomendado.*
- **B)** Abrir exceção e gerar imagens fotorrealistas só nesta aula.
- **C)** Você me envia 5 fotos reais (upload).

**2. Onde encaixar a aula no app**
- **A)** Nova rota `escola-brilha/geo-2ano/unidade-1` com player próprio (isolado do curso-v4). *Recomendado — a experiência é bem diferente do padrão de aula.*
- **B)** Registrar como aula normal em `src/escola-brilha/data/EF02GE01.ts` usando os blocos existentes (perde muito do "wow").
- **C)** Criar `curso-v4/geografia-2ano/unidade-1/aula-01…` seguindo o padrão de Português 2º Ano.

### Escopo técnico (assumindo A+A acima)

**Nova pasta:** `src/escola-brilha/geo-2ano/unidade-1-lugares/`

```
components/
  GaleriaMoradias.tsx        cena 1 — grid 5 cards com hover/pulse, botão narração Aurora
  GeoScanner.tsx             cena 2 — modal full-screen, mira animada, pins piscantes na imagem
  PainelTrunfo.tsx           cena 3 — cards comparativos (clima/material/motivo) que acendem no clique
  LaboratorioExplorador.tsx  cena 4 — toggles ☀️/🌧️/🌊 + ilustração reativa (casa ribeirinha sobe nas estacas)
  ArquitetoMinijogo.tsx      cena 5 — drag-drop cenário↔material
  VitoriaModal.tsx           cena 6 — confete + distintivo "Investigador das Moradias"
  BarraXP.tsx                topbar fixa XP/moedas com contagem animada
  hooks/useAurora.ts         wrapper de speakChunked (voz pt-BR, sem falar feedbacks)
dados.ts                     as 5 moradias + pistas + comparativos + cenários
assets/                      5 ilustrações geradas + camadas do laboratório
index.tsx                    orquestrador de cenas + estado XP/coins
```

**Rota:** nova entrada em `src/routes/escola-brilha.geo-2ano.$aula.tsx`.

**Bibliotecas:** `canvas-confetti` (add via bun), `framer-motion` (já no projeto — verifico).

**Áudio:** reutilizo `speakChunked` de `src/lib/native-tts.ts` para a Aurora. Sons eletrônicos dos pins: WebAudio inline (bleep sintetizado), sem asset.

**Padrões respeitados:**
- Nenhuma leitura automática de feedback (só a Aurora nas intros, como fizemos em Português).
- Tokens semânticos de `src/styles.css` (sem cores hardcoded).
- Mobile-first: grid responsivo, drag-drop com fallback tap-to-place.

**Fora de escopo desta entrega:** persistência de XP no Supabase (uso estado local; se quiser gravar, faço num próximo passo).

---

Me diga suas escolhas nos 2 pontos (ex.: "1-A, 2-A") e eu já começo.
