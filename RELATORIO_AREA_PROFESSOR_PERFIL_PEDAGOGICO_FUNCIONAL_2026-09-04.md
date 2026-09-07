# Área do Professor — Perfil Pedagógico e Funcional

Data: 04/09/2026  
Escopo: estrutura de banco e regras de acesso, sem aplicação em produção.

## Resultado

- Criado perfil pedagógico separado do cadastro e do vínculo professor-aluno.
- Registra pontos fortes, necessidades observáveis, estratégias eficazes e evitadas, modos de resposta, comunicação, ambiente sensorial, rotina/atenção, alfabetização e matemática.
- Não é prontuário, não cria diagnóstico e não possui campo próprio para medicação ou relato íntimo.
- Cada lista aceita no máximo 20 itens e o contexto objetivo possui limite de 240 caracteres.

## Consentimento e acesso

- A autorização geral do vínculo não libera automaticamente o perfil: o responsável precisa conceder consentimento pedagógico específico.
- O responsável pode revogar o consentimento; o perfil é arquivado imediatamente.
- O professor só consulta ou atualiza se vínculo, autorização e acesso docente estiverem ativos e dentro da validade.
- Responsável e administrador podem consultar conforme as políticas; usuário anônimo não possui acesso.
- Escrita direta nas tabelas foi removida; alterações passam por função protegida com validações.

## Histórico mínimo

- Registra autor, data, ação e nomes dos campos revisados.
- Não replica valores anteriores ou novos no histórico, reduzindo cópias de dados da criança.
- Exclusão do vínculo remove o perfil e seu histórico por cascata.

## Arquivos

- Migração: `supabase/migrations/20260904670000_teacher_student_pedagogical_functional_profile.sql`
- Teste: `src/modules/professor/teacher-student-pedagogical-functional-profile-schema.test.ts`

## Próxima integração

A estrutura está pronta para receber a tela consentida de edição e consulta no painel do professor e a autorização correspondente na Área dos Pais.
