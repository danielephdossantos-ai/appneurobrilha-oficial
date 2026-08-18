# Plano de Correção Real da Missão Prova

A Missão Prova deve garantir que uma aula real seja gerada, salva e executada, saindo do "faz de conta" visual.

## 1. Auditoria e Fluxo Real
- **Identificação**: O fluxo atual em `src/routes/missao-prova.tsx` chama `gerarAulaMissaoIA`, mas não vincula formalmente o `aula_id` ao registro da missão no Supabase (apenas mantém em estado volátil).
- **Correção**: Atualizar a tabela `exam_study_plans` ou `exam_missions` para persistir o `aula_id` gerado, permitindo que ao sair e voltar, a aula continue lá.

## 2. Separação de Plano e Aula
- **Plano**: Lista de tópicos agendados.
- **Aula**: Conteúdo estruturado (Lousa + Explicação).
- **Regra**: Uma sessão do plano só é considerada "Pronta" (`ready`) se possuir um `aula_id` válido apontando para `rb_aulas`.

## 3. Melhoria do Prompt (Lousa Interativa)
- Refinar o prompt em `src/lib/ia-missao-aula.functions.ts` para garantir que a IA gere o bloco `lousaPassos` com expressões matemáticas reais (3/4 + 1/4) e não apenas texto.

## 4. Persistência de Vínculo
- Modificar o handler em `src/lib/ia-missao-aula.functions.ts` para receber `sessionId` e atualizar o registro `exam_study_plans` com o `aula_id` gerado.

## 5. Interface de Estados
- Adicionar feedbacks visuais claros em `missao-prova.tsx` para o estado de "Gerando Conteúdo" vs "Pronto para Estudar".

## Checklist de Sucesso (Teste Frações)
- [ ] IA chamada (Gemini/Groq/Gateway).
- [ ] Aula salva em `rb_aulas`.
- [ ] `aula_id` persistido no `exam_study_plans`.
- [ ] Lousa interativa renderizada no `AulaViewer`.
- [ ] Conclusão registrada no banco.
- [ ] Reutilização: Segunda chamada para o mesmo tema não consome tokens de IA.
