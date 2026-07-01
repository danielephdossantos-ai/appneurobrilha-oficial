# Banco Nacional de Atividades

Catálogo oficial dos 17 tipos de atividade usados pelas missões do Escola Brilha.

## Uso

```ts
import { selecionarAtividades, CATALOGO_ATIVIDADES } from "@/escola-brilha/atividades";

const sel = selecionarAtividades("EF03MA05"); // Matemática, 3º ano
// sel.tipos → ["multipla_escolha", "resolucao_problemas", "sequencia_logica", "arrastar"]
```

## Regras de seleção automática

1. Extrai etapa/ano/disciplina do código BNCC (`EF03MA05` → EF, ano=3, MA).
2. Filtra o catálogo por `anoMinimo` e disciplinas compatíveis.
3. Sempre inclui tipos genéricos (múltipla escolha, V/F, ligar, memória, arrastar).
4. Seleciona 3–5 tipos distintos, com ordenação determinística (hash do código):
   a mesma habilidade sempre retorna a mesma seleção.

## Tipos catalogados

Múltipla escolha, Verdadeiro/Falso, Completar, Ligar, Ordenar, Arrastar,
Montar palavras, Montar frases, Caça-palavras, Cruzadinha, Memória,
Sequência lógica, Classificação, Observação, Desenho, Interpretação,
Resolução de problemas.
