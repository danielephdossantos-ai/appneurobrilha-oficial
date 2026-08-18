# Plano de Correção Definitiva — IA Orchestrator & JSON Parser

Este plano visa resolver a causa raiz do erro "JSON inválido" na geração de aulas, implementando logs técnicos detalhados e um parser robusto que lida com as variações comuns de saída das IAs (como blocos de código Markdown).

## 1. Auditoria e Logs Técnicos (Admin)
Adicionar rastreabilidade completa no `AIOrchestrator` para diagnosticar exatamente o que cada provedor está retornando.
- Logar o corpo da resposta bruta antes do parser.
- Registrar status HTTP, modelo utilizado e tempo de resposta.
- Garantir que esses logs não exponham chaves sensíveis.

## 2. Fortalecimento do AIOrchestrator
Refatorar o `src/lib/ai-orchestrator.server.ts` para:
- Incluir tratamento de blocos de código Markdown (```json ... ```) que muitas IAs injetam na resposta mesmo quando solicitado JSON puro.
- Padronizar o retorno de erros técnicos para que o sistema de persistência saiba quando tentar o próximo provedor.

## 3. Parser Robusto na Geração de Aula
Atualizar `src/lib/ia-missao-aula.functions.ts` para usar uma função de extração de JSON mais resiliente.
- Tentar localizar o primeiro `{` e o último `}` se o parse direto falhar.
- Implementar log de erro administrativo detalhado no momento da falha de parsing.

## 4. Testes de Estresse de Parsing
Validar o fluxo com respostas simuladas que contenham:
- JSON puro.
- JSON envolto em Markdown.
- Texto antes ou depois do JSON.

## Detalhes Técnicos
- **Arquivo**: `src/lib/ai-orchestrator.server.ts` (Adição de `extrairJSON`)
- **Arquivo**: `src/lib/ia-missao-aula.functions.ts` (Melhoria no fluxo de recepção)
- **Log**: Uso de `console.error` com prefixo `[ADMIN_IA_AUDIT]` para facilitar filtragem posterior.

Não apenas mudaremos o visual, mas garantiremos que a resposta da IA seja interpretada corretamente independentemente do provedor (Gemini, Groq ou Gateway).
