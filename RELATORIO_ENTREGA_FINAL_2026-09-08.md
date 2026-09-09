# NeuroBrilha Kids — Entrega final de 08/09/2026

## Validação técnica

- 107 arquivos de teste aprovados.
- 603 testes aprovados.
- Build completo de produção aprovado.
- Smoke test HTTP aprovado (status 200): `/auth`, `/historias-brilha`, `/tabuada-brilha`, `/soletracao-brilha` e `/area-professor/alfabetizacao`.

## Entregas confirmadas

- Login Google direto pelo Supabase, sem depender da autenticação intermediária do Lovable.
- Login por e-mail e senha, visualização de senha, solicitação de redefinição por e-mail e tela de criação da nova senha.
- Escolha entre perfil Família e Professor; conta administradora com acesso Família + Professor.
- Código docente administrado, convite individual de aluno, benefício anual por alunos assinantes e áreas separadas.
- Contrato pedagógico compartilhado para os mentores de IA: ensinar em passos, modelar, praticar, verificar e adaptar a linguagem.
- Filtro de recursos externos para bloquear sugestões que não correspondem à aula.
- Histórias Brilha com 98 histórias autorais em seis níveis, narração e compreensão.
- Tabuada Brilha em três níveis, com estratégia, representação visual e feedback explicado.
- Soletração Brilha com mais de 500 palavras reais, áudio, dicas e três níveis.
- Curso de Alfabetização na Área do Professor com oito módulos, impressão e marca discreta NeuroBrilha Kids.
- Conteúdo anterior preservado: Escola Brilha, Neuro Treino, Brilha Vida, Reforço Brilha, Apoio Escolar (prova, tarefa e trabalho), Área dos Pais e Área do Professor.

## Observação necessária sobre serviços externos

O código do app está validado. Envio de e-mail e Google também dependem das configurações do projeto Supabase: projeto ativo, provedor Google habilitado e URL de uso autorizada em Authentication > URL Configuration.
