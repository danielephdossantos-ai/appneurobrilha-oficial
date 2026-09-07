# Área do Professor — Interface do Perfil Pedagógico e Funcional

Data: 04/09/2026

## Entrega

- O cartão de professores na Área dos Pais agora permite autorizar ou retirar especificamente o acesso ao Perfil Pedagógico e Funcional.
- A retirada da autorização arquiva o perfil e informa claramente o efeito ao responsável.
- Cada aluno conectado no painel docente ganhou acesso à página do perfil.
- Sem consentimento específico, a página mostra bloqueio e não carrega nem salva conteúdo.
- Com consentimento, o professor registra dez grupos estruturados de observações e apoios.

## Conteúdo permitido

- Pontos fortes de aprendizagem.
- Apoios necessários, estratégias eficazes e estratégias a evitar.
- Modos de resposta e comunicação.
- Ambiente sensorial, rotina e atenção.
- Apoios de leitura/escrita e matemática.
- Contexto escolar objetivo limitado a 240 caracteres.

## Proteções

- Avisos visíveis de que o perfil não é diagnóstico nem prontuário.
- Orientação para registrar comportamento observável e evitar rótulos de personalidade ou capacidade.
- No máximo 20 itens por grupo, reforçado na interface e no banco.
- Nenhum conteúdo é liberado apenas pelo vínculo geral: exige consentimento pedagógico separado.

## Arquivos

- `src/components/responsible/TeacherAccessManager.tsx`
- `src/routes/area-professor.tsx`
- `src/routes/area-professor.perfil-pedagogico.$linkId.tsx`
- `supabase/migrations/20260904670000_teacher_student_pedagogical_functional_profile.sql`
- `src/modules/professor/teacher-student-pedagogical-functional-profile-ui.test.ts`

## Estado

Fluxo responsável → consentimento → professor → edição concluído. Nenhum ZIP intermediário foi criado.
