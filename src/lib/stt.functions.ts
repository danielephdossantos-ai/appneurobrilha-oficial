import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const InputSchema = z.object({
  audioBase64: z.string().min(20).max(20_000_000), // ~15 MB base64
  mimeType: z.string().min(3).max(80),
  // ISO-639-1 puro; omitido = auto
  language: z.string().min(2).max(5).optional(),
});

type Result =
  | { ok: true; texto: string }
  | { ok: false; motivo: "creditos" | "limite" | "erro"; mensagem: string };

function extFromMime(m: string): string {
  const base = m.split(";")[0].trim().toLowerCase();
  if (base.includes("webm")) return "webm";
  if (base.includes("mp4") || base.includes("m4a")) return "mp4";
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

export const transcreverAudio = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<Result> => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) {
      return {
        ok: false,
        motivo: "erro",
        mensagem: "Transcrição não tá configurada. Avise um adulto.",
      };
    }
    try {
      const bytes = b64ToBytes(data.audioBase64);
      if (bytes.length < 1024) {
        return {
          ok: false,
          motivo: "erro",
          mensagem: "Gravação muito curta. Tenta de novo!",
        };
      }
      const ext = extFromMime(data.mimeType);
      const fd = new FormData();
      const blob = new Blob([bytes], { type: data.mimeType });
      fd.append("file", blob, `pergunta.${ext}`);
      fd.append("model", "openai/gpt-4o-mini-transcribe");
      if (data.language) fd.append("language", data.language);

      const res = await fetch(
        "https://ai.gateway.lovable.dev/v1/audio/transcriptions",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${key}` },
          body: fd,
        },
      );
      if (res.status === 429) {
        return { ok: false, motivo: "limite", mensagem: "Muitas gravações agora. Espera um pouquinho!" };
      }
      if (res.status === 402) {
        return { ok: false, motivo: "creditos", mensagem: "Créditos de transcrição acabaram por hoje 🌙" };
      }
      if (!res.ok) {
        const t = await res.text().catch(() => "");
        console.error("[stt] http", res.status, t.slice(0, 300));
        return {
          ok: false,
          motivo: "erro",
          mensagem: "Não consegui entender o áudio. Tenta falar de novo!",
        };
      }
      const j: any = await res.json();
      const texto = String(j?.text ?? "").trim();
      if (!texto) {
        return {
          ok: false,
          motivo: "erro",
          mensagem: "Não escutei nada. Fala pertinho do microfone!",
        };
      }
      return { ok: true, texto };
    } catch (e) {
      console.error("[stt] erro:", e);
      return {
        ok: false,
        motivo: "erro",
        mensagem: "Cochilei um pouquinho 😴 Tenta de novo!",
      };
    }
  });
