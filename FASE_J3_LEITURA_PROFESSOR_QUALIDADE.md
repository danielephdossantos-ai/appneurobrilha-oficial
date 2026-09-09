# FASE J.3 — Professor, leitura e qualidade pedagógica

Data: 21/08/2026
Base: NeuroBrilha Fase K3 / Mascotes Premium

## Objetivo

Eliminar a fragmentação da leitura em PT-BR e impedir que o app educacional dependa do texto visual cru para narrar números, frações, símbolos e expressões. A correção foi feita no motor, não aula por aula.

## Principais achados

1. Havia mais de um caminho de TTS: `native-tts`, `useDeviceTTS`, `neurotreino-tts` e alguns players com `SpeechSynthesisUtterance` direto.
2. `useDeviceTTS` não passava pelo normalizador PT-BR. Assim, aulas que usavam esse hook podiam pronunciar notação de forma diferente das aulas que usavam `usePipVoice`.
3. O normalizador antigo misturava regras de alfabetização com texto geral. Isso podia transformar uma letra isolada em nome de letra mesmo quando ela era artigo em uma frase. Exemplo de risco: `A casa` virar fala semelhante a `á casa`.
4. A matemática tinha regras incompletas para frações, decimais, expoentes negativos sobrescritos, raiz, dinheiro, horário, unidades e álgebra.
5. O Player V4 ainda pré-processava toda seção com um normalizador pensado para alfabetização, mesmo em Matemática/Geografia/Ciências.
6. Alguns players específicos ainda criavam `SpeechSynthesisUtterance` diretamente.
7. O validador de aulas IA verificava estrutura e atividade, mas não exigia explicitamente uma etapa de ensino antes da cobrança.

## Correções aplicadas

### Motor canônico PT-BR

`src/lib/normalizador-fala.ts` foi refeito como camada canônica de transformação de texto visual em texto falado.

Passou a tratar de forma explícita:

- números inteiros;
- números negativos;
- decimais com vírgula;
- frações usuais;
- porcentagens;
- potências e expoentes sobrescritos, inclusive negativos;
- raiz quadrada;
- operações aritméticas;
- variável `x` em álgebra;
- produto indicado por ponto médio;
- dinheiro em reais/centavos;
- horários;
- unidades de medida comuns;
- ordinais escolares.

Regra importante: no contexto geral, a letra `A` não é transformada automaticamente em nome de letra. Regras fonéticas de alfabetização ficam restritas ao contexto pedagógico apropriado ou às funções próprias do player de alfabetização.

### `useDeviceTTS`

Agora normaliza texto com `normalizarFala()` quando o idioma é português. Conteúdo em outro idioma, como Inglês, não passa pelo normalizador PT-BR.

### Escola Brilha V4

O player geral deixou de aplicar o normalizador de alfabetização em toda seção. A fala é enviada ao TTS canônico e normalizada no ponto correto.

As falas diretas da operação visual de soma/subtração foram encaminhadas para `speakChunked`, evitando um caminho paralelo sem normalização.

### Geografia / Ciências / História com player visual

Os caminhos diretos de `SpeechSynthesisUtterance` em `PlayerGeoV1` agora recebem texto via `normalizarFala()`.

### Atlas Final

A narração direta também passa pelo normalizador PT-BR.

### Neuro-Treino

`neurotreino-tts.ts` passou a usar o normalizador central. As falas diretas encontradas no tracing também foram normalizadas.

### Português Educação Infantil

O player já possuía funções fonéticas específicas para grafemas e sílabas. A leitura sincronizada restante foi protegida com `sanitizeForSpeech`, preservando o tratamento especializado de alfabetização.

### Aula gerada por IA

`validador-aulas.server.ts` foi reforçado:

- exige sinal explícito de ensino/explicação/modelagem;
- verifica se o ensino aparece antes da primeira atividade;
- mantém validação estrutural, gabarito e segurança;
- adiciona verificação determinística extremamente conservadora para igualdades aritméticas simples quando uma linha inteira é uma conta literal.

A validação matemática foi deliberadamente limitada para não rejeitar expressões compostas corretas por falso positivo.

## Bateria de regressão da fala

Foi criada:

`src/lib/__tests__/normalizador-fala.test.ts`

Casos cobertos incluem:

- `Número 3` → `Número três`
- `3/4` → `três quartos`
- `1/2` → `um meio`
- `2,5` → `dois vírgula cinco`
- `25%` → `vinte e cinco por cento`
- `3²` → `três ao quadrado`
- `10⁻²` → `dez elevado a menos dois`
- `2³` → `dois ao cubo`
- `√9` → `raiz quadrada de nove`
- `−7` → `menos sete`
- `2x + 4 = 10` → `dois xis mais quatro é igual a dez`
- `7 · 1 · 1/8` → `sete vezes um vezes um oitavo`
- `1,5 m` → `um vírgula cinco metros`
- `150 cm` → `cento e cinquenta centímetros`
- `R$ 12,50` → `doze reais e cinquenta centavos`
- `7h30` → `sete horas e trinta minutos`
- frase comum `A casa é azul.` permanece frase comum e não vira exercício de nome de letra.

A mesma lógica foi executada isoladamente no ambiente desta auditoria e todos os casos acima passaram.

## Explicação das aulas

O acervo não usa um único schema. Por isso, ausência de `momento04_explicacao` não significa automaticamente ausência de ensino:

- Aula V4 padrão usa `momento04_explicacao`;
- Português V4 usa também `momento_ensinoVisual` e `momento04_leituraGuiada`;
- várias Ciências/História/Geografia usam cenas narradas, cadernos de conceitos e leitura guiada.

Por segurança, a Fase J.3 NÃO inventou explicações em massa apenas porque um campo específico estava vazio. Isso poderia criar conteúdo incorreto. O fluxo IA novo, porém, passa a exigir ensino antes da atividade.

Há campos `instrucao: ""` em parte de aulas com schema de cenas. Eles não foram preenchidos automaticamente porque o restante da própria cena pode conter `aurora`, `conteudo`, `texto`, `falaFinal` e outras formas reais de ensino. Esses casos devem ser tratados por uma futura revisão de conteúdo, não por preenchimento automático cego.

## Validação estática

- TS/TSX analisados por `transpileModule`: 2.560
- erros de sintaxe: 0
- imports locais reportados pelo scanner: 5
- desses 5, 1 é import de CSS com `?url` e 4 pertencem ao arquivo `FEATURE_TEMPLATE.ts` de modelo, não a módulos reais do app.

## Limites desta fase

1. Web Speech usa a voz instalada no dispositivo. O texto enviado ao motor agora é normalizado, mas a pronúncia acústica final ainda precisa ser testada em Android/iOS/desktop reais.
2. Esta fase não constitui revisão humana, linha por linha, da verdade factual de mais de 1.000 aulas. Ela corrige o motor de leitura e fortalece o portão de qualidade das aulas geradas por IA.
3. O teste Vitest foi adicionado ao projeto, mas a suíte completa `npm test` depende de instalar as dependências do projeto no ambiente de build.
4. Inglês deve continuar usando voz/idioma inglês; o normalizador PT-BR é aplicado apenas a português.

## Status

- Motor central PT-BR: IMPLEMENTADO
- Número isolado `3`: CORRIGIDO NO MOTOR
- Frações/decimais/porcentagem: IMPLEMENTADO
- Potências/raízes/expoentes negativos: IMPLEMENTADO
- Dinheiro/horário/unidades: IMPLEMENTADO
- Álgebra básica na fala: IMPLEMENTADO
- Caminhos TTS principais unificados: IMPLEMENTADO
- TTS em inglês separado: PRESERVADO
- IA exige ensino antes de atividade: IMPLEMENTADO
- Testes de regressão de fala: ADICIONADOS
- Teste acústico em aparelhos reais: PENDENTE PARA FASE K
- Revisão factual humana de todo o acervo: NÃO ALEGADA

## Veredito

A causa arquitetural da leitura inconsistente foi tratada no motor. A Fase K seguinte deve validar build, executar os testes automatizados e fazer uma bateria física curta em pelo menos Android + desktop, incluindo Matemática, Português/alfabetização e Inglês antes da Fase L.
