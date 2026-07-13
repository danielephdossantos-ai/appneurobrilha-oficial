// Helper compartilhado: chat completion com FALLBACK
// Primário: Groq (llama-3.3-70b-versatile) — mais confiável no dia a dia
// Reserva: Lovable AI Gateway (Gemini 3 Flash) — só quando Groq falha
// Quando o primário estoura limite (429), créditos (402) ou dá erro,
// cai automaticamente pro reserva. Só é chamado do servidor.

export type ChatMsg = {
  role: "system" | "user" | "assistant";
  content: unknown; // string ou array de partes (multimodal)
};

export type ChatCallOptions = {
  messages: ChatMsg[];
  // Model overrides opcionais
  lovableModel?: string; // default google/gemini-3-flash-preview
  groqModel?: string; // default llama-3.3-70b-versatile
  temperature?: number;
  max_tokens?: number;
  json?: boolean; // response_format json_object
  // rótulo pra logs
  label?: string;
};

export type ChatCallResult =
  | { ok: true; text: string; fonte: "lovable" | "groq" }
  | { ok: false; motivo: "creditos" | "limite" | "erro"; detalhe?: string };

async function callLovable(opts: ChatCallOptions): Promise<
  { ok: true; text: string } | { ok: false; motivo: "limite" | "creditos" | "erro"; detalhe?: string }
> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) return { ok: false, motivo: "erro", detalhe: "LOVABLE_API_KEY ausente" };
  try {
    const body: Record<string, unknown> = {
      model: opts.lovableModel ?? "google/gemini-3-flash-preview",
      messages: opts.messages,
      max_tokens: opts.max_tokens ?? 600,
      temperature: opts.temperature ?? 0.7,
    };
    if (opts.json) body.response_format = { type: "json_object" };
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify(body),
    });
    if (res.status === 429) return { ok: false, motivo: "limite" };
    if (res.status === 402) return { ok: false, motivo: "creditos" };
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      console.error(`[ai-fallback][lovable]${opts.label ? " " + opts.label : ""} http ${res.status}`, t.slice(0, 300));
      return { ok: false, motivo: "erro", detalhe: `lovable ${res.status}` };
    }
    const j: any = await res.json();
    const text = String(j?.choices?.[0]?.message?.content ?? "").trim();
    if (!text) return { ok: false, motivo: "erro", detalhe: "resposta vazia" };
    return { ok: true, text };
  } catch (e) {
    console.error(`[ai-fallback][lovable]${opts.label ? " " + opts.label : ""} erro:`, e);
    return { ok: false, motivo: "erro", detalhe: "network" };
  }
}

async function callGroq(opts: ChatCallOptions): Promise<
  { ok: true; text: string } | { ok: false; motivo: "limite" | "creditos" | "erro"; detalhe?: string }
> {
  const key = process.env.GROQ_API_KEY;
  if (!key) return { ok: false, motivo: "erro", detalhe: "GROQ_API_KEY ausente" };
  try {
    const body: Record<string, unknown> = {
      model: opts.groqModel ?? "llama-3.3-70b-versatile",
      messages: opts.messages,
      max_tokens: opts.max_tokens ?? 600,
      temperature: opts.temperature ?? 0.7,
    };
    if (opts.json) body.response_format = { type: "json_object" };
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify(body),
    });
    if (res.status === 429) return { ok: false, motivo: "limite" };
    if (res.status === 402) return { ok: false, motivo: "creditos" };
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      console.error(`[ai-fallback][groq]${opts.label ? " " + opts.label : ""} http ${res.status}`, t.slice(0, 300));
      return { ok: false, motivo: "erro", detalhe: `groq ${res.status}` };
    }
    const j: any = await res.json();
    const text = String(j?.choices?.[0]?.message?.content ?? "").trim();
    if (!text) return { ok: false, motivo: "erro", detalhe: "resposta vazia" };
    return { ok: true, text };
  } catch (e) {
    console.error(`[ai-fallback][groq]${opts.label ? " " + opts.label : ""} erro:`, e);
    return { ok: false, motivo: "erro", detalhe: "network" };
  }
}

/**
 * Chama chat completion tentando Lovable AI primeiro; se falhar por
 * limite/créditos/erro, cai pro Groq automaticamente.
 */
export async function chatCompletionFallback(opts: ChatCallOptions): Promise<ChatCallResult> {
  const primaria = await callLovable(opts);
  if (primaria.ok) return { ok: true, text: primaria.text, fonte: "lovable" };
  console.warn(
    `[ai-fallback]${opts.label ? " " + opts.label : ""} Lovable falhou (${primaria.motivo}) — tentando Groq`,
  );
  const secundaria = await callGroq(opts);
  if (secundaria.ok) return { ok: true, text: secundaria.text, fonte: "groq" };
  // Ambas falharam — devolve o motivo mais informativo (créditos > limite > erro)
  if (primaria.motivo === "creditos" || secundaria.motivo === "creditos") {
    return { ok: false, motivo: "creditos" };
  }
  if (primaria.motivo === "limite" || secundaria.motivo === "limite") {
    return { ok: false, motivo: "limite" };
  }
  return { ok: false, motivo: "erro", detalhe: secundaria.detalhe ?? primaria.detalhe };
}
