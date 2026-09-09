---
name: Matemática — formato de explicação segue o conteúdo
description: Cada tópico de matemática usa o visual/estrutura própria: numeração → casas de valor (U/D/C/UM); tabuada → tabuada interativa e de referência; geometria → figura real com vértices/lados/ângulos rotulados como no padrão mundial; estatística → gráficos reais (barras, colunas, pictograma, linha); medidas → régua/relógio/balança; frações → figura repartida. Nunca forçar um único padrão de ensino.
type: preference
---

# Regra

Matemática NÃO tem um padrão único de ensino. O formato da explicação, do "Brilha resolve" e das atividades DEVE seguir o conteúdo da aula. Nunca cair no default de casas de valor quando o tópico é outro.

## Mapa conteúdo → formato obrigatório

| Conteúdo | Formato de explicação | Componente |
| --- | --- | --- |
| Numeração, valor posicional, soma/subtração armadas | Casas de valor (U/D/C/UM) + conta passo a passo | `CasasValor`, `contaPassoAPasso` |
| Tabuada isolada / fatos básicos | Tabuada interativa só quando o OBJETIVO da aula é decorar/entender fatos básicos de multiplicação | `TabuadaInterativa`, `TabuadaReferencia` |
| Multiplicação 5º–9º / Ensino Médio | Conta armada real, com parciais, deslocamento por dezena/centena e sobras em outra cor; nunca tabuada automática para chegar ao resultado | `contaPassoAPasso` / algoritmo formal |
| Divisão 5º–9º / Ensino Médio | Divisão pela chave tradicional, com parcial → multiplica → subtrai → desce o próximo algarismo | `DivisaoChave` |
| Divisão com repartição inicial | Rodadas de distribuição "1 pra cada" até zerar; só depois conectar ao algoritmo formal conforme a série | cenas passo a passo + chave |
| Geometria plana (quadrado, retângulo, triângulo, polígonos) | Figura real com vértices rotulados (A, B, C, D), lados e ângulos marcados como no padrão internacional | figura SVG com labels |
| Geometria espacial | Sólido com faces/arestas/vértices contados | SVG do sólido |
| Estatística e probabilidade | Gráfico real (barras, colunas, pictograma, linha, setores) — nunca só texto | componente de gráfico |
| Medidas (comprimento, massa, capacidade, tempo, dinheiro) | Instrumento real: régua, balança, jarra graduada, relógio, cédulas/moedas | SVG específico |
| Frações e decimais | Figura repartida (barra, círculo, retângulo) mostrando parte/todo | SVG de fração |
| Sequências e padrões | Linha/tabela com os termos e o salto visível — SEM casas de valor | lista dos termos + destaque do salto |
| Ordenar / comparar / arredondar | Comparação casa a casa em TEXTO ou linha numérica — SEM quadro U/D/C/UM | texto/linha numérica |

## Regras firmes

- Antes de escrever a aula, identifique o conteúdo e escolha o formato da tabela acima.
- Se o Player não tem o componente certo, criar o componente ao invés de cair no formato genérico.
- Nunca renderizar "Casas de valor" em aulas de tabuada, geometria, estatística, medidas ou frações — está errado pedagogicamente e confunde a criança.
- Tabuada: sempre em coluna alinhada (fator × 1, × 2, …), nunca inline separado por ponto; porém do 5º ao 9º ela NÃO substitui a conta armada, só aparece se o tema explícito for tabuada/fato básico.
- Multiplicação do 5º ao 9º: sempre montar a conta como na escola. Ex.: `32 × 18` precisa mostrar `8×2`, `8×3`, depois `1×2`, `1×3`, parcial de cada linha e soma final; não renderizar tabuada do 32/18.
- Multiplicar por 10, 100, 1.000: mostrar deslocamento/zeros dentro da conta ou em sequência visual de posições; nunca deixar só frase textual.
- Divisão do 5º ao 9º: sempre chave; tabuada não é o método principal.
- Geometria: rotular vértices com letras maiúsculas (A, B, C, D…) e marcar ângulos/medidas — é o padrão mundial e a criança já vai encontrar em toda escola/livro.
- Gráficos: eixos rotulados, escala visível, dados reais da atividade.

## Detecção automática no Player

O `PlayerV4` detecta multiplicação/divisão pelo texto (`detectarMultDivNoTexto`). Para 5º–9º, essa detecção deve renderizar algoritmo formal (multiplicação armada ou divisão pela chave), não tabuada. Tabuada automática só entra em aula cujo conteúdo declarado seja tabuada/fatos básicos. Cada categoria acima ganha seu próprio detector + componente, e o default (casas de valor) só entra quando o conteúdo é realmente numeração/aditivo.
