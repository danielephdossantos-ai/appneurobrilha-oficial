---
name: Contrato SPEB 1.0 Arte
description: Estrutura oficial obrigatória de toda aula de Arte — 10 etapas + projeto + avaliação + encerramento com medalha.
type: feature
---
Toda aula de Arte do SPEB 1.0 segue OBRIGATORIAMENTE esta sequência (proibido reduzir a jogos/quizzes):

1. **História** — Brilha em cenário + carta que provoca curiosidade + pergunta motivadora + botão "Quero começar".
2. **Observando Como um Artista** — observar detalhes reais (rosto, objeto, cena, obra) antes de produzir.
3. **Conhecendo Obras** — 3 referências reais de artistas + perguntas de apreciação.
4. **Aprendendo a Técnica** — passo a passo animado/repetível (desenhar, pintar, esculpir, colar).
5. **Produção no Canvas** — desenho livre, salvo automaticamente no portfólio (Supabase Storage).
6. **Conversa de Artista** — reflexão em áudio ou texto sobre a própria obra.
7. **Cor + Emoção** — vincular cores a sentimentos; escolha da emoção do dia.
8. **Missão em Casa** — observar/desenhar algo do mundo real; opcionalmente enviar foto.
9. **Minha Pequena Galeria** — moldura com título, artista, data, descrição; visualização do portfólio.
10. **Curiosidade** — 1 fato marcante + conexão com o futuro do aluno (ex: refazer no fim do ano).

**+ Projeto da Aula** — nomeado, gera produto físico/digital para o Portfólio Artístico do ano.
**+ Avaliação** — participação, observação, organização, criatividade, explicação, conclusão. NÃO avaliar beleza.
**+ Encerramento com Medalha** — nome, ícone, mensagem inspiradora; conquistada ao salvar a obra oficial.

Arquivo modelo: `src/escola-brilha/arte-2ano/data/u1-a01-autorretrato.ts` (Aula Modelo Oficial).
Player: `src/escola-brilha/arte-2ano/PlayerArteV1.tsx` (Ateliê Kawaii — rosa/amarelo, papel).
Canvas: `DrawingCanvas.tsx` → salva em bucket `missao-familia-fotos`, tabela `missao_familia_registros`, curso_slug `arte-2ano`.

Types em `src/escola-brilha/arte-2ano/types.ts` refletem as 10 etapas — replicar sempre.
