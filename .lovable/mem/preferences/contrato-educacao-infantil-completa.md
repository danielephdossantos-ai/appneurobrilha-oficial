---
name: Contrato Educação Infantil Completa (3–5 anos)
description: Contrato travado das trilhas EI (Matemática, Ciências, Arte, Inglês) × 3 níveis. Fase 2 reaproveita Corpo e Socioemocional já existentes.
type: feature
---

# Contrato — Educação Infantil Completa (3 a 5 anos)

## Escopo (Fase 1 — construir agora)
Quatro trilhas × três níveis (Maternal 3a, Pré I 4a, Pré II 5a):
1. **Matemática EI**
2. **Ciências EI**
3. **Arte EI**
4. **Inglês EI**

## Fase 2 (depois de terminar Fase 1)
- **Corpo/Movimento EI** — reaproveitar aulas já existentes no app (ex.: EI03CG01 "Meu Corpo se Movimenta") e transformar no padrão PlayerPortuguesEI.
- **Socioemocional EI** — reaproveitar Neuro Treino e adaptar ao mesmo padrão.
Nenhuma dessas duas será construída do zero — só adaptação visual/pedagógica.

## Ordem de construção (Fase 1)
Disciplina por disciplina, nível por nível:
1. Matemática · Maternal → Pré I → Pré II
2. Ciências · Maternal → Pré I → Pré II
3. Arte · Maternal → Pré I → Pré II
4. Inglês · Maternal → Pré I → Pré II

## Estrutura por trilha/nível
- **20 missões** = 4 semanas × 5 dias
- Player: `PlayerPortuguesEI` (mesmo padrão do Português EI)
- Visual: kawaii/Pixar 2D, personagem único, cores vibrantes
- TTS: `native-tts` com `speakChunked` (cena espera fala terminar + 700ms)
- Progresso: tabela nova `ei_progresso` (mesmo padrão de `aurora_progresso`)
- Marcos: medalha por semana + **diploma final por trilha/nível** (8 diplomas por disciplina, 32 no total ao fim da Fase 1)

## Entrega
- **5 missões por vez** (uma semana). Usuário valida cena por cena. Só sigo pra próxima semana após "pode continuar".
- Se identificar erro de imagem/leitura/mismatch, corrijo antes de avançar.

## Adaptação por anamnese
- Placement usa `anamnese_v2` (mesmo padrão do Português EI + Aurora).
- Criança de 5 anos com pouco repertório pode começar em Maternal; sobe de nível ao dominar.

## Trava
Não construir Corpo nem Socioemocional do zero. Não sair da ordem sem confirmação. Não passar de semana sem validação do usuário.
