import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const BlocoInput = z.object({
  id: z.string().min(1).max(40),
  texto: z.string().max(4000),
});

const InputSchema = z.object({
  titulo: z.string().max(200).optional(),
  blocos: z.array(BlocoInput).max(60),
});

export type RevisaoResultado =
  | {
      ok: true;
      tituloCorrigido?: string;
      blocos: Array<{ id: string; textoCorrigido: string; problemas: string[] }>;
      resumo: string;
    }
  | {
      ok: false;
      motivo: "creditos" | "limite" | "erro";
      mensagem: string;
    };

export const revisarPortugues = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<RevisaoResultado> => {
    // Nada pra revisar
    const algoPraRevisar =
      (data.titulo && data.titulo.trim().length > 0) ||
      data.blocos.some((b) => b.texto.trim().length > 0);
    if (!algoPraRevisar) {
      return {
        ok: true,
        tituloCorrigido: data.titulo,
        blocos: data.blocos.map((b) => ({
          id: b.id,
          textoCorrigido: b.texto,
          problemas: [],
        })),
        resumo: "Nada pra revisar ainda.",
      };
    }

    const system = `Você é um revisor de português brasileiro EXTREMAMENTE rigoroso para um trabalho escolar infantil.
TAREFA: corrigir SOMENTE erros de ortografia, acentuação, crase, concordância e pontuação básica. NÃO mude o sentido, NÃO reescreva, NÃO acrescente conteúdo novo. Preserve quebras de linha.
Para cada bloco, devolva o texto corrigido e uma lista CURTA de problemas encontrados (ex: "faltou acento em 'agua' → 'água'", "'fasso' → 'faço'"). Se não houver erro, devolva o texto idêntico e problemas: [].
Responda SEMPRE em JSON válido com este formato exato:
{"titulo_corrigido":"...","blocos":[{"id":"<id>","texto_corrigido":"...","problemas":["..."]}],"resumo":"frase curta com o total de correções"}`;

    const userPayload = JSON.stringify({
      titulo: data.titulo ?? "",
      blocos: data.blocos.map((b) => ({ id: b.id, texto: b.texto })),
    });

    const { chatCompletionFallback } = await import("./ai-chat-fallback");
    const result = await chatCompletionFallback({
      messages: [
        { role: "system", content: system },
        { role: "user", content: userPayload },
      ],
      max_tokens: 2000,
      temperature: 0.1,
      json: true,
      label: "revisar-portugues",
    });

    if (!result.ok) {
      if (result.motivo === "limite") {
        return {
          ok: false,
          motivo: "limite",
          mensagem:
            "Muitas revisões agora 💛 Espere alguns minutos. Seu trabalho está salvo — pode continuar editando.",
        };
      }
      if (result.motivo === "creditos") {
        return {
          ok: false,
          motivo: "creditos",
          mensagem:
            "Sem créditos por hoje 🌙 Mas seu trabalho está SALVO. Pode continuar escrevendo à vontade — quando os créditos voltarem, eu revejo tudo e ajudo a deixar perfeito.",
        };
      }
      return {
        ok: false,
        motivo: "erro",
        mensagem: "Não consegui revisar agora. Tenta de novo em instantes.",
      };
    }

    let parsed: any;
    try {
      parsed = JSON.parse(result.text);
    } catch {
      return { ok: false, motivo: "erro", mensagem: "Resposta inválida do revisor." };
    }

    const blocosOut = Array.isArray(parsed?.blocos) ? parsed.blocos : [];
    const mapaBlocos = new Map<string, { textoCorrigido: string; problemas: string[] }>();
    for (const b of blocosOut) {
      if (typeof b?.id === "string") {
        mapaBlocos.set(b.id, {
          textoCorrigido: typeof b.texto_corrigido === "string" ? b.texto_corrigido : "",
          problemas: Array.isArray(b.problemas)
            ? b.problemas.filter((p: any) => typeof p === "string").slice(0, 8)
            : [],
        });
      }
    }

    return {
      ok: true,
      tituloCorrigido:
        typeof parsed?.titulo_corrigido === "string" ? parsed.titulo_corrigido : data.titulo,
      blocos: data.blocos.map((b) => {
        const r = mapaBlocos.get(b.id);
        return {
          id: b.id,
          textoCorrigido: r?.textoCorrigido ?? b.texto,
          problemas: r?.problemas ?? [],
        };
      }),
      resumo: typeof parsed?.resumo === "string" ? parsed.resumo : "Revisão concluída.",
    };
  });

