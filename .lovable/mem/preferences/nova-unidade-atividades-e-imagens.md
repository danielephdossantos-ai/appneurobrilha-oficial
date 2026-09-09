---
name: Nova unidade — trocar atividades e revisar imagens (obrigatório)
description: A cada unidade nova (qualquer disciplina/série), criar ideias de atividades diferentes das anteriores e validar que cada imagem realmente representa o que o texto/opção diz. Nunca reciclar o mesmo roteiro nem colocar imagem que não bate.
type: preference
---

## Regra (TRAVADA)

Toda vez que começa uma UNIDADE NOVA (qualquer disciplina, qualquer série):

1. **Trocar as ideias das atividades.** Não repetir o mesmo tipo de encaixe/quiz/arrastar da unidade anterior com só o tema trocado. Variar dentro dos blocos existentes do `PlayerPortuguesV4` (ex.: numa unidade o minijogo é arrastar A×B, na próxima é sequência temporal, na próxima é escolher a solução, etc.). **Formato de tela e modelo NUNCA mudam** — só a mecânica pedagógica de cada momento.
2. **Revisar TODAS as imagens antes de considerar pronta.** Regras:
   - Cada `imagemUrl` de opção/pista/alvo/item DEVE representar VISUALMENTE o texto ao lado. Se o texto diz "praça arborizada", usar `praca.png`, não `jardim.png`. Se diz "campo aberto", usar `campo.png`, não `arvore.png` sozinho.
   - Nunca usar a mesma imagem pra representar dois conceitos diferentes na mesma tela.
   - Se não existe imagem que represente bem, **trocar o texto da opção** para casar com uma imagem que existe (nunca deixar texto e imagem em conflito).
   - Antes de fechar a aula, ler cada `pergunta` + `opcoes[i]` + `opcoesImagens[i]` e conferir 1 a 1.
3. **Reler o prompt do usuário DA UNIDADE** antes de gerar, e listar mentalmente: qual é a mecânica NOVA que ele pediu? Encaixar nos blocos existentes sem reciclar a unidade anterior.

## Por quê
Reclamação recorrente do usuário: imagens que não representam a opção (ex.: "paisagem antiga" mostrando 1 árvore só; "praça arborizada" não aparecendo nas opções). Formato da tela está travado e aprovado — o que precisa evoluir de unidade pra unidade é a **variedade de atividades** e a **precisão visual**.
