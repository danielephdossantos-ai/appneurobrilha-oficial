---
name: Neuro Treino só para crianças com DEFTHS
description: Aulas de Apoio é para TODAS as crianças; Neuro Treino só se anamnese indicar atraso/deficiência.
type: constraint
---

**Aulas de Apoio (`/aulas-apoio`)**: categoria universal — cobre TODAS as aulas do Escola Brilha para qualquer criança, com ou sem diagnóstico. É a trilha diária de estudos + agenda + push.

**Neuro Treino (atividades terapêuticas)**: só recomendar quando a anamnese identificar atraso de desenvolvimento, deficiência (DEFTHS), TEA, TDAH, dislexia, DI, discalculia ou risco em qualquer escala. A partir do 2º ano, se a criança não tiver nenhum atraso/deficiência, **não recomendar** Neuro Treino no relatório da anamnese nem no PDF.

**Como aplicar:**
- Em `src/modules/anamnese/relatorio/neuro-bridge.ts` (e no PDF/tela de resultado), gatear a seção "Atividades terapêuticas recomendadas" e "Como o app vai apoiar (Neuro Treino)" por: existe diagnóstico != nenhum OU alguma escala de risco acima do limiar OU faixa etária < 2º ano com sinais.
- Se nada disso, ocultar essas seções e manter só o **Curso pedagógico gerado** + **Aulas de Apoio**.
**Why:** Neuro Treino é intervenção; oferecer para criança típica polui o relatório e assusta a família sem necessidade.
