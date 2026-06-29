# Política de Normalização — Sem Duplicação

Regra única e obrigatória para todo o backend pedagógico:

1. **Fonte única de verdade**: cada informação vive em **exatamente uma** tabela.
   - Aulas → `lesson_content`
   - Seções → `lesson_sections`
   - Exemplos → `lesson_examples`
   - Atividades → `lesson_activities`
   - Quizzes → `lesson_quizzes`
   - Explicações → `lesson_explanations`
   - Revisões → `lesson_reviews_full`
   - Curiosidades → `lesson_curiosities`
   - Desafios → `lesson_challenges`
   - Avaliações → `assessment_repository`
   - Recuperação → `recovery_lessons`
   - Plano do professor → `teacher_lesson_plans`
   - Adaptações → `lesson_adaptations`
   - Progresso → `student_progress`
   - Relações entre habilidades → `bncc_relationships`

2. **Relacionamento por IDs (chave: `codigo_bncc`)**
   - Todo conteúdo pedagógico referencia a habilidade pelo `codigo_bncc`.
   - Joins/lookups são feitos em runtime — **nunca** materializados como cópia.

3. **Proibido copiar dados entre tabelas**
   - Não duplicar título, enunciado, explicação, exemplo etc. em outra tabela "para acelerar".
   - Cache de leitura (`lesson_cache`, `pedagogical_lessons_cache`) é permitido apenas como espelho temporário, nunca como fonte editável.
   - Agregadores (ex.: `ReinforcementRepository`) **compõem** dados em memória chamando os serviços; não persistem cópias.

4. **Como adicionar um novo tipo de conteúdo**
   - Criar nova tabela dedicada com `codigo_bncc TEXT NOT NULL` + colunas próprias.
   - Adicionar índice em `codigo_bncc`.
   - Criar serviço em `src/services/lessons/` que apenas lê do banco.
   - **Não** estender outra tabela com campos redundantes.

5. **Como referenciar conteúdo existente**
   - Sempre via `codigo_bncc` (ou `id` quando dentro do mesmo agregado).
   - FK opcional; consistência garantida pela chave BNCC.

6. **Revisão obrigatória em PRs**
   - Qualquer migration que adicione coluna já existente em outra tabela deve ser rejeitada.
   - Qualquer serviço que faça `INSERT` copiando linhas de outra tabela deve ser rejeitado.
