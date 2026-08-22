/**
 * Gemini server helper. Nunca deve ser chamado no navegador.
 * Suporta system instruction corretamente e deixa o modelo configurável por ambiente.
 */
export type GeminiChatMsg = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type GeminiOptions = {
  messages: GeminiChatMsg[];
  model?: string;
  temperature?: number;
  max_tokens?: number;
  json?: boolean;
};

export async function callGemini(opts: GeminiOptions) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY is not configured in environment variables.");

  const model = process.env.GEMINI_MODEL || opts.model || "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  const systemText = opts.messages.filter((m) => m.role === "system").map((m) => m.content).join("\n\n");
  const contents = opts.messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  if (contents.length === 0) contents.push({ role: "user", parts: [{ text: "Siga as instruções do sistema." }] });

  const body: Record<string, unknown> = {
    contents,
    generationConfig: {
      temperature: opts.temperature ?? 0.55,
      maxOutputTokens: opts.max_tokens ?? 4096,
      responseMimeType: opts.json ? "application/json" : "text/plain",
    },
  };
  if (systemText) body.systemInstruction = { parts: [{ text: systemText }] };

  let lastError: Error | null = null;
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.map((p: any) => p?.text ?? "").join("").trim();
        if (!text) throw new Error("Empty response from Gemini");
        return text;
      }

      const errorText = await res.text().catch(() => "");
      console.warn(`[Gemini API Attempt ${i + 1}]`, res.status, errorText.slice(0, 500));
      const err = new Error(`Gemini API error: ${res.status}`);
      lastError = err;
      if (![429, 500, 502, 503, 504].includes(res.status)) throw err;
      await new Promise((r) => setTimeout(r, 900 * (i + 1)));
    } catch (e: any) {
      lastError = e instanceof Error ? e : new Error(String(e));
      if (String(e?.message ?? "").includes("Gemini API error") && !/429|500|502|503|504/.test(String(e.message))) throw e;
    }
  }
  throw lastError || new Error("Failed to call Gemini after retries");
}
