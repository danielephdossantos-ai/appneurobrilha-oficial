import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const childSchema = z.object({
  id: z.string().optional(),
  nome: z.string().optional(),
  idade: z.number().optional(),
  perfil_neuro: z.string().optional(),
  nivel_dificuldade: z.string().optional(),
});

const mascotSchema = z
  .object({
    name: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    level: z.number().optional(),
    affinity: z.number().optional(),
  })
  .nullable();

const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

export const callNeuroBrilhaAI = createServerFn({ method: "POST" })
  .validator(
    z.discriminatedUnion("mode", [
      z.object({
        mode: z.literal("amigo-virtual"),
        child: childSchema,
        mascot: mascotSchema,
        message: z.string(),
        chatHistory: z.array(chatMessageSchema).optional(),
      }),
      z.object({
        mode: z.literal("terapeuta"),
        child: childSchema,
        mascot: mascotSchema,
        message: z.string(),
        chatHistory: z.array(chatMessageSchema).optional(),
      }),
      z.object({
        mode: z.literal("professor-foto"),
        child: childSchema,
        mascot: mascotSchema,
        image: z.string(),
      }),
    ]),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "OPENAI_API_KEY não configurada. Configure a chave nas variáveis de ambiente.",
      );
    }

    const { mode } = data;

    if (mode === "amigo-virtual") {
      const { child, mascot, message, chatHistory = [] } = data;
      const systemPrompt = `Você é ${mascot?.name ?? "Pip"}, um mascote amigável e acolhedor que ajuda crianças neurodivergentes.
${mascot?.description ? `Sobre você: ${mascot.description}` : ""}
Você está conversando com ${child?.nome ?? "uma criança"}, que tem ${child?.idade ?? "alguns"} anos.
Perfil neurológico: ${child?.perfil_neuro ?? "não especificado"}.
Fale de forma simples, carinhosa, com frases curtas. Use emojis ocasionalmente. Seja sempre positivo e encorajador.
Responda APENAS o texto da mensagem, sem formatação extra.`;

      const messages = [
        { role: "system", content: systemPrompt },
        ...chatHistory,
        { role: "user", content: message },
      ];

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ model: "gpt-4o-mini", messages, max_tokens: 300 }),
      });

      if (!res.ok) throw new Error(`OpenAI error: ${res.status}`);
      const json = await res.json();
      return json.choices[0].message.content as string;
    }

    if (mode === "terapeuta") {
      const { child, mascot, message, chatHistory = [] } = data;
      const systemPrompt = `Você é ${mascot?.name ?? "Pip"}, um terapeuta virtual especializado em neurodesenvolvimento infantil.
${mascot?.description ? `Sobre você: ${mascot.description}` : ""}
Você está ajudando a família de ${child?.nome ?? "uma criança"} (${child?.idade ?? "?"} anos).
Perfil neurológico: ${child?.perfil_neuro ?? "não especificado"}.
Forneça orientações práticas, baseadas em evidências, sobre comportamento e regulação emocional.
Lembre sempre que não substitui um profissional de saúde. Responda em português brasileiro.`;

      const messages = [
        { role: "system", content: systemPrompt },
        ...chatHistory,
        { role: "user", content: message },
      ];

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ model: "gpt-4o-mini", messages, max_tokens: 500 }),
      });

      if (!res.ok) throw new Error(`OpenAI error: ${res.status}`);
      const json = await res.json();
      return json.choices[0].message.content as string;
    }

    if (mode === "professor-foto") {
      const { child, image } = data;
      const systemPrompt = `Você é um professor especialista em educação inclusiva e neurodesenvolvimento.
Analise a imagem enviada e forneça orientações educacionais para uma criança de ${child?.idade ?? "?"} anos com perfil ${child?.perfil_neuro ?? "não especificado"}.
Retorne um JSON com: { "titulo": string, "observacoes": string, "sugestoes": string[], "nivel": "fácil"|"médio"|"avançado" }`;

      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: [
                { type: "text", text: "Analise esta imagem e forneça orientações pedagógicas." },
                { type: "image_url", image_url: { url: `data:image/jpeg;base64,${image}` } },
              ],
            },
          ],
          max_tokens: 600,
          response_format: { type: "json_object" },
        }),
      });

      if (!res.ok) throw new Error(`OpenAI error: ${res.status}`);
      const json = await res.json();
      return JSON.parse(json.choices[0].message.content);
    }

    throw new Error("Modo não reconhecido");
  });
