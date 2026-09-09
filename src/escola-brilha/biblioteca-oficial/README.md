# Biblioteca Oficial de Missões

Estrutura ÚNICA e obrigatória para toda habilidade BNCC do Escola Brilha.

## Regras

1. **Uma habilidade = uma missão = um arquivo** em `missoes/<CODIGO_BNCC>.ts`.
2. **Sem duplicidades.** O registry rejeita dois arquivos com o mesmo código.
3. Todo arquivo faz `export default { ... } satisfies MissaoOficial`.

## Campos obrigatórios (14)

1. `missaoPrincipal` — título + descrição
2. `narrativa` — história curta (≤2min)
3. `explicacao` — texto + níveis 1-4
4. `exemplos` — resolvidos com contexto cotidiano
5. `atividades` — guiadas e independentes
6. `desafios` — aplicação avançada
7. `quiz` — verificação
8. `resumo` — pontos-chave + dica
9. `revisao` — retomada + perguntas
10. `miniJogo` — sugestão de mini jogo
11. `adaptacoes` — TEA, TDAH, discalculia, etc.
12. `objetivos` — de aprendizagem
13. `competencias` — BNCC gerais + específicas
14. `meta` — versão, data, autor

## Uso

```ts
import { getMissaoOficial, listMissoesOficiais } from "@/escola-brilha/biblioteca-oficial";

const missao = getMissaoOficial("EF01MA01");
```

## Manutenção

- Para atualizar: incremente `meta.versao` e `meta.atualizadoEm`.
- Para adicionar habilidade nova: crie `missoes/<CODIGO>.ts` — o registry pega sozinho.
- Nunca duplicar; se precisar variar, use `explicacao.niveis` e `adaptacoes`.
