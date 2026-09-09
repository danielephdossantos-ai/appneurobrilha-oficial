import { callGemini } from "@/lib/gemini.server";
import { chatCompletionFallback, type ChatMsg } from "@/lib/ai-chat-fallback";

export type AIProvider = "gemini" | "groq" | "lovable";

export interface AIOrchestratorInput {
  messages: ChatMsg[];
  label: string;
  json?: boolean;
  temperature?: number;
  max_tokens?: number;
  geminiModel?: string;
  groqModel?: string;
  lovableModel?: string;
}

export interface AIOrchestratorResult {
  text: string;
  provider: AIProvider;
}

/**
 * Motor canônico: Gemini -> Groq -> Lovable Gateway.
 * Uma falha técnica ou uma resposta vazia sempre tenta o próximo provedor.
 */
export async function chamarProfessorMentorIA(input: AIOrchestratorInput): Promise<AIOrchestratorResult> {
  try {
    const text = await callGemini({
      model: input.geminiModel ?? "gemini-2.5-flash",
      json: input.json,
      max_tokens: input.max_tokens ?? 4096,
      temperature: input.temperature ?? 0.45,
      messages: input.messages.map((m) => ({ role: m.role, content: String(m.content ?? "") })),
    });
    if (String(text).trim()) return { text: String(text).trim(), provider: "gemini" };
  } catch (error) {
    console.warn(`[AIOrchestrator][${input.label}] Gemini falhou; acionando fallback`, error);
  }

  const fallback = await chatCompletionFallback({
    messages: input.messages.map((m) => ({ role: m.role, content: String(m.content ?? "") })),
    json: input.json,
    temperature: input.temperature ?? 0.45,
    max_tokens: input.max_tokens ?? 4096,
    groqModel: input.groqModel,
    lovableModel: input.lovableModel,
    label: input.label,
  });

  if (!fallback.ok) {
    throw new Error(`Todos os provedores de IA falharam (${fallback.motivo}).${fallback.detalhe ? ` ${fallback.detalhe}` : ""}`);
  }
  return { text: fallback.text, provider: fallback.fonte };
}
