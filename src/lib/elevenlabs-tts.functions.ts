import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  text: z.string().min(1).max(500),
  voiceId: z.string().min(1).max(64).optional(),
});

// Voz Sarah (feminina, calorosa) — boa pra mediação infantil
const DEFAULT_VOICE = "EXAVITQu4vr4xnSDxMaL";

export const speakWithElevenLabs = createServerFn({ method: "POST" })
  .inputValidator((input) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return { audio: null as string | null, error: "ELEVENLABS_API_KEY ausente" };
    }
    const voiceId = data.voiceId || DEFAULT_VOICE;

    try {
      const res = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
        {
          method: "POST",
          headers: {
            "xi-api-key": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: data.text,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.55,
              similarity_boost: 0.8,
              style: 0.4,
              use_speaker_boost: true,
              speed: 0.95,
            },
          }),
        },
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("[ElevenLabs TTS] erro:", res.status, errText);
        return { audio: null, error: `TTS ${res.status}` };
      }

      const buf = await res.arrayBuffer();
      const base64 = Buffer.from(buf).toString("base64");
      return { audio: base64, error: null as string | null };
    } catch (e: any) {
      console.error("[ElevenLabs TTS] exception:", e);
      return { audio: null, error: e?.message || "Falha na voz" };
    }
  });
