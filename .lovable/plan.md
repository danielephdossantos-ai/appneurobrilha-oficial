
## Objetivo

Toda etapa do momento **Explicação** (e da **Descoberta/Modelagem** onde couber) precisa terminar com um **Exemplo Real** — um caso concreto e numérico que aplica exatamente o que a explicação acabou de dizer. Nada de "ex.: 5 é 5" — sempre um exemplo aplicado, no contexto da Cidade dos Números (habitantes, placas, páginas, quilômetros).

## O que muda no schema (mínimo)

Hoje `MomentoExplicacao.etapas[]` já tem `exemplo?: string`, `casasValor?`, `agrupamentos?`. Vou estender com um campo opcional `exemploReal` — um bloco visual dedicado, renderizado com destaque **abaixo** do texto da etapa:

```ts
exemploReal?: {
  titulo?: string;              // ex.: "Na prática:"
  contexto: string;             // "A placa do carro do prefeito é 574."
  casasValor?: { numero, extenso, mostrarDecomposicao };
  contaPassoAPasso?: { operacao, operandos, resultado, passos[] };
  destaque?: string;            // conclusão em 1 linha
}
```

Renderização em `PlayerV4.tsx > Explicacao`: card âmbar/branco logo abaixo do texto, com rótulo "🔎 Na prática", contexto, visual (casas de valor OU conta passo a passo em modo somente-leitura), e a conclusão em negrito.

## Aulas afetadas (10)

Unidade 1 · Matemática 3º Ano:
1. aula-01 · Contagem até 1.000
2. aula-02 · Valor posicional
3. aula-03 · A centena
4. aula-04 · Ler números
5. aula-05 · Comparar números
6. aula-06 · Ordenar números
7. aula-07 · Arredondar
8. aula-08 · Sequências numéricas
9. aula-09 · Revisão
10. aula-10 · Missão final

Cada aula tem 4–6 etapas de explicação → cada etapa ganha um `exemploReal` concreto.

## Ordem de execução (revisão cena por cena)

Conforme sua preferência ("revisar em etapas pequenas e confirmar cena por cena"):

- **Passo 1** — Schema (`types.ts`) + render no `PlayerV4.tsx`.
- **Passo 2** — Reescrever **aula-01** completa com `exemploReal` em cada etapa. Você confere.
- **Passo 3** — Depois do OK, sigo aula-02 → aula-10 no mesmo padrão, uma por vez (ou em blocos de 2 se você preferir acelerar).

## Padrão de "Exemplo Real" (referência)

Etapa: *"Todo número até 999 mora em 3 casas: C·D·U."*
Exemplo Real:
- Contexto: *"O ônibus escolar tem placa 347. Vamos ver onde cada algarismo mora."*
- `casasValor: { numero: 347, extenso: "trezentos e quarenta e sete", mostrarDecomposicao: true }`
- Destaque: *"3 na Centena vale 300 · 4 na Dezena vale 40 · 7 na Unidade vale 7."*

Etapa: *"Somar sempre pelas unidades primeiro."*
Exemplo Real:
- Contexto: *"O bairro Leste tem 325 pessoas e o Oeste 243. Vamos somar juntos."*
- `contaPassoAPasso` completo com os 3 passos (U, D, C).
- Destaque: *"Total: 568 habitantes."*

Posso começar pelo Passo 1+2 (schema + render + aula-01) e te chamar pra validar antes de seguir?
