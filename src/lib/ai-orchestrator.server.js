import { callGemini } from "./gemini.server";
/**
 * AI ORCHESTRATOR PARA NEUROBRILHA
 * Implementa fallback sequencial: Gemini -> Groq -> Lovable AI Gateway
 */
export async function aiOrchestrator(opts) {
    const label = opts.label || "orchestrator";
    console.log(`[AIOrchestrator] Iniciando pedido: ${label}`);
    // 1. Tentar GEMINI (Primário)
    try {
        console.log(`[AIOrchestrator] Tentando Gemini...`);
        // Adaptar formato de mensagens
        const geminiMsgs = opts.messages.map(m => ({
            role: m.role,
            content: typeof m.content === "string" ? m.content : JSON.stringify(m.content)
        }));
        const text = await callGemini({
            messages: geminiMsgs,
            model: opts.lovableModel?.includes("gemini") ? opts.lovableModel : "gemini-3.7-flash",
            temperature: opts.temperature,
            max_tokens: opts.max_tokens,
            json: opts.json
        });
        if (text) {
            return { ok: true, text, fonte: "lovable" }; // Mapeamos Gemini como 'lovable' ou poderíamos expandir o tipo fonte
        }
    }
    catch (error) {
        console.warn(`[AIOrchestrator] Gemini falhou: ${error.message}`);
        // Se for erro de quota/limite, continuamos. Se for erro de autenticação ou crítico, logamos mas tentamos o próximo.
    }
    // 2. Tentar GROQ (Secundário)
    const groqKey = process.env.GROQ_API_KEY;
    if (groqKey) {
        try {
            console.log(`[AIOrchestrator] Tentando Groq...`);
            const body = {
                model: opts.groqModel ?? "llama-3.3-70b-specdec",
                messages: opts.messages,
                max_tokens: opts.max_tokens ?? 1000,
                temperature: opts.temperature ?? 0.7,
            };
            if (opts.json)
                body.response_format = { type: "json_object" };
            const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${groqKey}` },
                body: JSON.stringify(body),
            });
            if (res.ok) {
                const j = await res.json();
                const text = String(j?.choices?.[0]?.message?.content ?? "").trim();
                if (text)
                    return { ok: true, text, fonte: "groq" };
            }
            else {
                const errorData = await res.json().catch(() => ({}));
                console.warn(`[AIOrchestrator] Groq falhou (HTTP ${res.status}):`, errorData);
            }
        }
        catch (error) {
            console.warn(`[AIOrchestrator] Groq falhou: ${error.message}`);
        }
    }
    // 3. Tentar LOVABLE AI GATEWAY (Terceiro fallback)
    console.log(`[AIOrchestrator] Tentando Lovable AI Gateway como último recurso...`);
    const lovableKey = process.env.LOVABLE_API_KEY;
    if (lovableKey) {
        try {
            const body = {
                model: "google/gemini-3-flash-preview",
                messages: opts.messages,
                max_tokens: opts.max_tokens ?? 800,
                temperature: opts.temperature ?? 0.7,
            };
            if (opts.json)
                body.response_format = { type: "json_object" };
            const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${lovableKey}` },
                body: JSON.stringify(body),
            });
            if (res.ok) {
                const j = await res.json();
                const text = String(j?.choices?.[0]?.message?.content ?? "").trim();
                if (text)
                    return { ok: true, text, fonte: "lovable" };
            }
        }
        catch (error) {
            console.error(`[AIOrchestrator] Falha total em todos os provedores:`, error.message);
        }
    }
    return { ok: false, motivo: "erro", detalhe: "Todos os provedores de IA falharam." };
}
