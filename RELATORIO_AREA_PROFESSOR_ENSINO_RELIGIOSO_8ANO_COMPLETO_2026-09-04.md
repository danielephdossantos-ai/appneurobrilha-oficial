# Área do Professor — Ensino Religioso — 8º ano completo

Data da auditoria: 04/09/2026  
Escopo: Biblioteca Inclusiva do professor, sem alterar o curso do estudante nem aplicar mudanças em produção.

## Resultado

- 7 habilidades oficiais cadastradas: EF08ER01 a EF08ER07.
- A BNCC oficial confirma EF08ER07 para o uso de mídias e tecnologias por denominações religiosas.
- O comentário do `curso.ts` que limita o ano à EF08ER06 está desatualizado, mas a unidade 7 e seu código estão corretos.
- A EF08ER06 ativa está em `unidade-5/aula-02-liberdade-politicas-publicas.ts`.
- A aula `unidade-6/aula-01-cuidado-da-vida.ts`, que também declarava EF08ER06, é desativada pelo próprio `curso.ts` e foi excluída do cadastro para evitar duplicação e incompatibilidade temática.
- Perfis: TEA, TDAH, dislexia, deficiência intelectual, comunicação, motora/escrita, auditiva e visual.

## Proteções pedagógicas

- Ensino não confessional, casos fictícios ou coletivos e alternativa neutra sem prejuízo.
- Sem prática religiosa, debate confessional, campanha político-religiosa, posicionamento público ou simulação de perda.
- Concepções de vida e morte tratadas informativamente, sem detalhes gráficos e sem solicitar experiência pessoal.
- Nenhuma coleta de crença, não crença, religião familiar, opinião política, saúde, perda, conta ou comunidade frequentada.
- Estado laico explicado como garantia de liberdade e igualdade, não como oposição às religiões.
- Diferencia opinião religiosa, evidência científica, norma jurídica e política pública.
- Apoio espiritual não substitui serviços profissionais; o professor não diagnostica nem direciona posição partidária.
- Mídias analisadas com perfis fictícios ou capturas anonimizadas, sem conta pessoal, publicação, contato externo, rastreamento ou geolocalização.
- Verificação de autoria, data, finalidade, patrocínio, edição e evidência; popularidade não é prova.

## Acessibilidade

- Texto segmentado, glossário visual, fonte ampliada, descrição de imagem, áudio regulável, legenda e transcrição.
- Modelo resolvido, cartões, pistas graduadas, mapa de direitos e matriz de fontes.
- Respostas por apontar, selecionar, ordenar, comunicação alternativa, mapa, fala opcional, áudio privado, digitação, escrita ou tecnologia assistiva.
- Impressão compatível com escala de cinza.

## Arquivos

- Migração: `supabase/migrations/20260904610000_teacher_inclusive_lessons_religious_education_grade_08_complete.sql`
- Teste: `src/modules/professor/teacher-inclusive-religious-education-grade-08-complete.test.ts`

## Estado

Bloco do 8º ano concluído. Nenhum ZIP intermediário foi criado; o pacote completo será gerado somente ao terminar toda a categoria Área do Professor.
