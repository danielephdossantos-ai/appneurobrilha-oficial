---
name: Geografia 2º Ano — UI interativa (Regra de Ouro)
description: Padrão obrigatório de interface e evolução pedagógica para todas as telas de Geografia do 2º ano no SPEB 1.0
type: preference
---

## Evolução Pedagógica (obrigatória em toda tela)
Toda aula deve percorrer estes 5 movimentos, nesta ordem quando fizer sentido:
1. **Comparar** — mostrar 2+ elementos lado a lado (cards, grid, painel trunfo).
2. **Explicar** — a criança ativa a explicação, ela não vem pronta.
3. **Relacionar** — ligar causa↔efeito, lugar↔material, clima↔moradia (drag, ligar, sliders).
4. **Interpretar** — ler imagem/mapa/situação e tirar conclusão (pins, hipóteses, hotspots).
5. **Resolver problemas** — minijogo aplicado (arquiteto, arrastar, escolher solução).

## Regra de Ouro de UI (TRAVADA)
- **Zero blocos de texto estáticos com mais de 2 linhas.** Se precisar explicar mais, quebrar em elementos ativados por clique.
- Toda explicação DEVE:
  - Ser ativada por clique num elemento visual (pin, card, ícone).
  - Vir com **botão de áudio** descritivo próprio.
  - Gerar **feedback animado imediato** (framer-motion / confete / glow).
- Listas de texto → substituir por: Grid interativo, Slider, Drag-and-Drop, Carrossel, Modal ou Painel Trunfo.
- Nenhuma leitura automática de feedback pelo TTS (regra global já travada) — o áudio dispara só por clique do usuário.

## Aplicação
Vale para toda tela nova em `src/escola-brilha/geo-2ano/` e revisões de telas existentes.
Referência viva: `src/escola-brilha/geo-2ano/unidade-1-lugares/`.
