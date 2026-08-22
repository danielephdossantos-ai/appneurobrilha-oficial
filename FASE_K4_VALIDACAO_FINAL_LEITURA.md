# FASE K4 — Validação final de leitura e professor

Data: 21/08/2026
Base: NeuroBrilha Fase J.3

## Resultado

A validação estática pós-J.3 confirmou que os principais caminhos PT-BR passam pelo motor canônico `normalizarFala` ou por uma camada especializada de alfabetização que usa `sanitizeForSpeech`.

### Caminhos verificados
- `native-tts.ts`: normaliza antes da Web Speech.
- `useDeviceTTS.ts`: normaliza PT-BR e preserva outros idiomas.
- `neurotreino-tts.ts`: normaliza PT-BR.
- Atlas Final: fala direta recebe `normalizarFala`.
- PlayerGeoV1: falas diretas recebem `normalizarFala`.
- Neuro-Treino: falas diretas localizadas recebem `normalizarFala`.
- Português EI: usa tratamento especializado para grafemas/sílabas e `sanitizeForSpeech` nas leituras gerais.
- Inglês: mantém `native-tts-en.ts`, sem passar pelo normalizador PT-BR.

### Regressão criada na J.3
Existe `src/lib/__tests__/normalizador-fala.test.ts` cobrindo número isolado, frações, decimais, porcentagem, potências, expoente negativo, raiz, álgebra básica, dinheiro, horário, medidas e proteção do artigo “A”.

### Build/teste automatizado
Não foi possível executar `npm test` nem `npm run build` neste ambiente. O projeto não contém `node_modules`; uma tentativa de `npm install --ignore-scripts --no-audit --no-fund --prefer-offline` foi encerrada após 120 segundos sem concluir. Portanto, esta fase NÃO declara build de produção aprovado.

### Route tree
A rota física `/apoio-escolar` existe, mas continua ausente do `src/routeTree.gen.ts` atual. O build no Lovable/Vercel deve regenerar o route tree e a implantação deve ser bloqueada se `/apoio-escolar` não aparecer no arquivo gerado.

### Teste acústico obrigatório
A Web Speech depende das vozes instaladas no aparelho. Antes da publicação, ouvir em Android e desktop pelo menos:
1. Matemática: 3/4, 2,5, 25%, 3², 10⁻², √9, −7, 2x + 4 = 10, R$ 12,50, 7h30.
2. Alfabetização: nome de letra, som de letra, sílaba, palavra segmentada e frase comum “A casa é azul”.
3. Inglês: confirmar voz/idioma inglês e ausência do normalizador PT-BR.
4. Uma aula existente de cada player principal e uma aula recém-gerada pelo Professor Mentor.

## Gate de publicação

- Motor PT-BR central: PASSA estaticamente.
- Separação PT-BR/Inglês: PASSA estaticamente.
- Tratamento especializado de alfabetização: PASSA estaticamente.
- Testes de regressão: PRESENTES, execução completa pendente de dependências.
- Build: PENDENTE.
- Route tree: PENDENTE de regeneração.
- Pronúncia acústica em aparelho real: PENDENTE.

## Veredito

O código da J.3 está pronto para seguir ao ambiente de implantação/teste. A Fase L pode preparar o pacote final e o roteiro de implantação, mas a publicação pública deve ficar bloqueada até build + testes automatizados + teste acústico curto em dispositivos reais passarem.
