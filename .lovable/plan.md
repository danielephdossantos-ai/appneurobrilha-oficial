# Corrigir Bloco 3 — Missão Prova

## Objetivo
Fazer cada sessão da Missão Prova abrir uma aula completa, específica para a matéria e os conteúdos cadastrados, persistida e reutilizada nas próximas aberturas. Corrigir também cadastro de datas, sincronização das listas e o erro da Biblioteca da Internet, sem alterar outras categorias.

## Implementação

1. **Geração e persistência autenticadas**
   - Proteger a geração com a sessão do usuário e usar o acesso server-side gerenciado pelo projeto, sem chave secreta no navegador.
   - Validar que a sessão de estudo pertence a uma prova e criança acessíveis pelo usuário.
   - Gerar conteúdo separado por matéria e tópicos, preservando a alternância Gemini → Groq → Lovable.
   - Exigir objetivo, conceitos essenciais, explicação, exemplo resolvido, prática guiada, exercícios independentes, revisão e correção explicada.
   - Persistir a aula em `rb_aulas`, no mínimo seis páginas em `rb_paginas_aula` e, somente depois da confirmação das páginas, gravar o ID em `exam_study_plans.mentor_aula_id`.
   - Em qualquer falha, limpar a gravação parcial, retornar erro claro e nunca informar sucesso.

2. **Abrir e reabrir a mesma aula**
   - Ao abrir uma sessão, carregar `mentor_aula_id` já salvo e suas páginas.
   - Gerar apenas quando a sessão ainda não possui aula válida.
   - Exibir uma ação de tentar novamente quando geração ou persistência falhar, em vez de uma tela vazia.
   - Manter conclusão e retorno vinculados à sessão correta.

3. **Cadastro correto da prova**
   - Separar o campo obrigatório **Conteúdos da prova** de **Observações**.
   - Validar data real, futura e com ano de quatro dígitos; definir a data mínima no campo.
   - Aplicar o mesmo contrato nos dois pontos atuais de cadastro da Missão Prova.

4. **Atualização conjunta**
   - Após criar, editar ou excluir, atualizar calendário, lista Missão Prova e plano diário pelas mesmas chaves de atualização.
   - Marcar imediatamente no calendário a prova recém-salva.
   - Manter Prova, Trabalho e Tarefa separados.

5. **Biblioteca da Internet**
   - Remover a dependência de chave administrativa para cache.
   - Executar busca/cache com sessão autenticada e permissões limitadas; se o cache não puder ser escrito, ainda devolver os resultados públicos sem derrubar a busca.

6. **Testes e validação**
   - Testar: mínimo de seis páginas; gravação de `mentor_aula_id`; rejeição de ano `0026`; isolamento Português/verbos e Matemática/tabuada; falha de persistência nunca retornando sucesso.
   - Executar os testes focados, `git diff --check` e o build.
   - Revisar o diff final e informar exatamente os arquivos alterados.

## Limites
- Nenhuma migration, alteração de dados ou nova Edge Function será feita enquanto as funções autenticadas existentes forem suficientes.
- Nenhuma tela, regra ou integração fora da Missão Prova será modificada.
- Nenhum segredo será exposto em código, frontend, variáveis públicas ou repositório.
