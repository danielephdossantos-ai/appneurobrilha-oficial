# Área do Professor — Assistente Pedagógico Brilha

Data: 04/09/2026

## Entrega

- Assistente acessível como ferramenta própria da Área do Professor.
- Professor seleciona um aluno vinculado e solicita adaptação de aula, atividade, avaliação ou rotina.
- O nome aparece somente para seleção local e não é incluído na chamada da IA.
- Saída estruturada: objetivo, preparação, passos, formas de resposta, verificação e cuidados.

## Segurança e privacidade

- Exige autenticação, vínculo ativo, consentimento pedagógico e perfil preenchido.
- Envia somente listas funcionais anônimas; não envia nome, responsável, escola nem campo livre de contexto.
- Não infere diagnóstico, inteligência, personalidade, prognóstico ou tratamento.
- Não recomenda medicação ou terapia e não decide nota, aprovação, agrupamento, disciplina ou encaminhamento.
- Prompt e resposta não são persistidos; somente a contagem diária é armazenada.
- A 31ª solicitação do mesmo dia é bloqueada.

## Arquivos

- `src/lib/assistente-pedagogico-brilha.functions.ts`
- `src/routes/area-professor.assistente-pedagogico.tsx`
- `supabase/migrations/20260904680000_teacher_pedagogical_assistant_quota.sql`
- `src/modules/professor/teacher-pedagogical-assistant.test.ts`

## Estado

Assistente criado. Nenhum ZIP intermediário foi gerado.
