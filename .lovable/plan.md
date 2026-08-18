# Plano de Implementação: Orquestrador de IA e Sistema de Aulas Persistentes

O objetivo é criar uma arquitetura robusta para geração e reutilização de aulas via IA, eliminando erros genéricos e garantindo que o conteúdo seja persistido e reutilizado de forma inteligente.

## 1. Arquitetura de IA (AIOrchestrator)
- **Centralização:** Criar `src/lib/ai-orchestrator.server.ts` para gerenciar as chamadas de IA.
- **Ordem de Fallback:**
  1. **Gemini** (Primário via API direta para máxima performance/visão).
  2. **Groq** (Secundário via API direta para velocidade/custo).
  3. **Lovable AI Gateway** (Terceiro nível de redundância).
- **Tratamento de Erros:**
  - Identificar erros específicos (401, 429, 500, etc.) em vez de mensagens genéricas de "internet".
  - Logar falhas técnicas no servidor para auditoria.

## 2. Persistência e Reutilização (Reuso Pedagógico)
- **Tabela:** Utilizar `rb_aulas` e `rb_paginas_aula` (já existentes no Supabase).
- **Mecanismo de Busca:** Criar uma chave de busca baseada em `disciplina`, `tópico`, `ano` e `nível`.
- **Fluxo:**
  1. Verificar no Supabase se já existe aula compatível.
  2. Se sim, incrementar `usage_count` e retornar o ID.
  3. Se não, gerar via `AIOrchestrator`, validar estrutura JSON, salvar no banco e retornar o ID.

## 3. Integração com Missão Prova e Trabalho
- **Unificação:** Alterar `gerarAulaMissaoIA` (em `src/lib/ia-missao-aula.functions.ts`) para usar o novo orquestrador.
- **Continuidade:** Garantir que, ao reabrir uma missão, a aula persistida seja carregada sem nova chamada de IA.
- **Lousa Interativa:** Refinar os prompts para garantir a geração correta do bloco `lousaPassos` para matemática e ciências.

## 4. Experiência do Usuário (UX)
- **Feedback Transparente:** Informar ao usuário quando o sistema estiver tentando um provedor alternativo em caso de falha silenciosa.
- **Notificações:** Atualizar `notificarErroIA` para ser mais específica sobre o tipo de erro técnico (limite, créditos, falha temporária).

## Detalhes Técnicos
- **Novos Arquivos:** `src/lib/ai-orchestrator.server.ts`.
- **Modificações:**
  - `src/lib/ia-missao-aula.functions.ts` (Lógica de orquestração e reuso).
  - `src/lib/notify-ai-error.ts` (Mensagens específicas).
  - `src/routes/missao-prova.tsx` e `src/components/reforco-brilha/TrabalhoBrilha.tsx` (Fluxo de persistência).
- **Segurança:** Todas as chaves de API tratadas via `process.env` no servidor.
