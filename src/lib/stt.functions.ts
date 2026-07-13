import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  audioBase64: z.string().min(20).max(20_000_000),
  mimeType: z.string().min(3).max(80),
  language: z.string().min(2).max(5).optional(),
});

type Result =
  | { ok: true; texto: string }
  | { ok: false; motivo: "creditos" | "limite" | "erro"; mensagem: string };

function extFromMime(m: string): string {
  const base = m.split(";")[0].trim().toLowerCase();
  if (base.includes("webm")) return "webm";
  if (base.includes("mp4") || base.includes("m4a")) return "m4a";
  if (base.includes("mpeg") || base.includes("mp3")) return "mp3";
  if (base.includes("wav")) return "wav";
  if (base.includes("ogg")) return "ogg";
  return "webm";
}

function b64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function transcribeGroq(
  bytes: Uint8Array,
  mimeType: string,
  ext: string,
  language?: string,
): Promise<Result | null> {
  const key = process.env.GROQ_API_KEY;
  if (!key) return null;
  try {
    const fd = new FormData();
    fd.append("file", new Blob([bytes.buffer as ArrayBuffer], { type: mimeType }), `pergunta.${ext}`);
    fd.append("model", "whisper-large-v3-turbo");
    fd.append("response_format", "json");
    if (language) fd.append("language", language);
    const res = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}` },
      body: fd,
    });
    if (res.status === 429) return { ok: false, motivo: "limite", mensagem: "Muitas gravações agora. Espera um pouquinho!" };
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      console.error("[stt][groq] http", res.status, t.slice(0, 300));
      return null;
    }
    const j: any = await res.json();
    const texto = String(j?.text ?? "").trim();
    if (!texto) return { ok: false, motivo: "erro", mensagem: "Não escutei nada. Fala pertinho do microfone!" };
    return { ok: true, texto };
  } catch (e) {
    console.error("[stt][groq] erro:", e);
    return null;
  }
}

async function transcribeLovable(
  bytes: Uint8Array,
  mimeType: string,
  ext: string,
  language?: string,
): Promise<Result | null> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) return null;
  try {
    const fd = new FormData();
    fd.append("file", new Blob([bytes.buffer as ArrayBuffer], { type: mimeType }), `pergunta.${ext}`);
    fd.append("model", "openai/gpt-4o-mini-transcribe");
    if (language) fd.append("language", language);
    const res = await fetch("https://ai.gateway.lovable.dev/v1/audio/transcriptions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}` },
      body: fd,
    });
    if (res.status === 429) return { ok: false, motivo: "limite", mensagem: "Muitas gravações agora. Espera um pouquinho!" };
    if (res.status === 402) return { ok: false, motivo: "creditos", mensagem: "Créditos de transcrição acabaram por hoje 🌙" };
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      console.error("[stt][lovable] http", res.status, t.slice(0, 300));
      return null;
    }
    const j: any = await res.json();
    const texto = String(j?.text ?? "").trim();
    if (!texto) return { ok: false, motivo: "erro", mensagem: "Não escutei nada. Fala pertinho do microfone!" };
    return { ok: true, texto };
  } catch (e) {
    console.error("[stt][lovable] erro:", e);
    return null;
  }
}

export const transcreverAudio = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<Result> => {
    if (!process.env.GROQ_API_KEY && !process.env.LOVABLE_API_KEY) {
      return { ok: false, motivo: "erro", mensagem: "Transcrição não tá configurada. Avise um adulto." };
    }
    try {
      const bytes = b64ToBytes(data.audioBase64);
      if (bytes.length < 1024) {
        return { ok: false, motivo: "erro", mensagem: "Gravação muito curta. Tenta de novo!" };
      }
      const ext = extFromMime(data.mimeType);
      // Groq primeiro (mais confiável), Lovable como reserva
      const g = await transcribeGroq(bytes, data.mimeType, ext, data.language);
      if (g) return g;
      const l = await transcribeLovable(bytes, data.mimeType, ext, data.language);
      if (l) return l;
      return { ok: false, motivo: "erro", mensagem: "Não consegui entender o áudio. Tenta falar de novo!" };
    } catch (e) {
      console.error("[stt] erro:", e);
      return { ok: false, motivo: "erro", mensagem: "Cochilei um pouquinho 😴 Tenta de novo!" };
    }
  });
