import { GeminiOptions, callGemini } from "./gemini.server";
import { ChatMsg, ChatCallOptions, ChatCallResult } from "./ai-chat-fallback";

/**
 * Utilitário para extrair JSON de respostas que podem conter Markdown ou texto extra
 */
function extrairJSON(text: string): string {
  const clean = text.trim();
  // Se já for um JSON começando com { e terminando com }, retorna direto
  if (clean.startsWith('{') && clean.endsWith('}')) return clean;
  
  // Tentar encontrar bloco de código markdown ```json ... ```
  const match = clean.match(/```json\s*([\s\S]*?)\s*```/);
  if (match?.[1]) return match[1].trim();

  // Tentar encontrar o primeiro { e o último }
  const firstBrace = clean.indexOf('{');
  const lastBrace = clean.lastIndexOf('}');
  
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    const result = clean.slice(firstBrace, lastBrace + 1).trim();
    // Validar se o que extraímos é um JSON plausível antes de retornar
    if (result.startsWith('{') && result.endsWith('}')) {
      return result;
    }
  }

  return clean;
}

/**
 * AI ORCHESTRATOR PARA NEUROBRILHA
 * Implementa fallback sequencial: Gemini -> Groq -> Lovable AI Gateway
 */

export async function aiOrchestrator(opts: ChatCallOptions): Promise<ChatCallResult> {
  const label = opts.label || "orchestrator";
  console.log(`[AIOrchestrator] Iniciando pedido: ${label} | JSON: ${opts.json}`);

  // 1. Tentar GEMINI (Primário)
  try {
    const model = opts.lovableModel?.includes("gemini") ? opts.lovableModel : "gemini-1.5-flash"; // Usar 1.5-flash para estabilidade em produção
    console.log(`[AIOrchestrator] Tentando Gemini (${model})...`);
    
    // Adaptar formato de mensagens para Gemini (Google não gosta de 'system' role em contents em algumas versões da API)
    const geminiMsgs = opts.messages.map(m => ({
      role: m.role as "system" | "user" | "assistant",
      content: typeof m.content === "string" ? m.content : JSON.stringify(m.content)
    }));

    const rawText = await callGemini({
      messages: geminiMsgs,
      model,
      temperature: opts.temperature,
      max_tokens: opts.max_tokens,
      json: opts.json
    });

    if (rawText) {
      const text = opts.json ? extrairJSON(rawText) : rawText;
      console.log(`[ADMIN_IA_AUDIT] Provedor: Gemini | Modelo: ${model} | Tamanho: ${rawText.length}`);
      
      // Validação básica de JSON se solicitado
      if (opts.json) {
        try {
          JSON.parse(text);
        } catch (e) {
          console.warn(`[AIOrchestrator] Gemini retornou JSON inválido, tentando extração agressiva...`);
          // Se falhou, o extrairJSON pode não ter sido suficiente, mas o try/catch no caller deve lidar com isso
        }
      }

      return { ok: true, text, fonte: "lovable" };
    }
  } catch (error: any) {
    console.warn(`[AIOrchestrator] Gemini falhou: ${error.message}`);
  }

  // 2. Tentar GROQ (Secundário)
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    try {
      const model = opts.groqModel ?? "llama-3.3-70b-specdec";
      console.log(`[AIOrchestrator] Tentando Groq (${model})...`);
      const body: Record<string, unknown> = {
        model,
        messages: opts.messages,
        max_tokens: opts.max_tokens ?? 1000,
        temperature: opts.temperature ?? 0.7,
      };
      if (opts.json) body.response_format = { type: "json_object" };

      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${groqKey}` },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const j: any = await res.json();
        const rawText = String(j?.choices?.[0]?.message?.content ?? "").trim();
        const text = opts.json ? extrairJSON(rawText) : rawText;
        
        console.log(`[ADMIN_IA_AUDIT] Provedor: Groq | Modelo: ${model} | Tamanho: ${rawText.length}`);
        return { ok: true, text, fonte: "groq" };
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error(`[ADMIN_IA_AUDIT] Groq Falhou | Status: ${res.status} | Erro:`, JSON.stringify(errorData));
      }
    } catch (error: any) {
      console.warn(`[AIOrchestrator] Groq falhou: ${error.message}`);
    }
  }

  // 3. Tentar LOVABLE AI GATEWAY (Terceiro fallback)
  console.log(`[AIOrchestrator] Tentando Lovable AI Gateway como último recurso...`);
  const lovableKey = process.env.LOVABLE_API_KEY;
  if (lovableKey) {
    try {
      const body: Record<string, unknown> = {
        model: "google/gemini-3-flash-preview",
        messages: opts.messages,
        max_tokens: opts.max_tokens ?? 800,
        temperature: opts.temperature ?? 0.7,
      };
      if (opts.json) body.response_format = { type: "json_object" };
      
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${lovableKey}` },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const j: any = await res.json();
        const rawText = String(j?.choices?.[0]?.message?.content ?? "").trim();
        const text = opts.json ? extrairJSON(rawText) : rawText;
        
        console.log(`[ADMIN_IA_AUDIT] Provedor: Lovable Gateway | Modelo: ${body.model} | Tamanho: ${rawText.length}`);
        return { ok: true, text, fonte: "lovable" };
      } else {
        const errorText = await res.text().catch(() => "unknown error");
        console.error(`[ADMIN_IA_AUDIT] Lovable Gateway Falhou | Status: ${res.status} | Resposta: ${errorText.slice(0, 200)}`);
      }
    } catch (error: any) {
      console.error(`[AIOrchestrator] Falha total em todos os provedores:`, error.message);
    }
  }

  return { ok: false, motivo: "erro", detalhe: "Todos os provedores de IA falharam." };
}