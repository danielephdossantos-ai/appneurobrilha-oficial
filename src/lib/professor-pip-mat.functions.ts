import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MsgSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const InputSchema = z.object({
  pergunta: z.string().min(1).max(1500),
  crianca: z
    .object({
      nome: z.string().max(80).optional(),
      idade: z.number().min(3).max(20).optional(),
      serie: z.string().max(40).optional(),
    })
    .optional(),
  historico: z.array(MsgSchema).max(20).optional(),
});

export type PassoLousa = { linha: string; explica: string };

export type PipMatResposta = {
  titulo: string;
  fala: string;
  passos: PassoLousa[];
  resultado: string;
  pergunta_final: string;
};

export type PipMatResult =
  | { ok: true; resposta: PipMatResposta }
  | { ok: false; motivo: "creditos" | "limite" | "erro"; mensagem: string };

function systemPrompt(c?: { nome?: string; idade?: number; serie?: string }) {
  const idade = c?.idade ?? 12;
  const serie = c?.serie ?? "Ensino Fundamental";
  return `Você é o PIP TEEN ROQUEIRO — professor de MATEMÁTICA de escola particular de altíssimo padrão, com décadas de sala de aula. Você é jovem, roqueiro, direto, empolgado e ZERO enrolação. Você ensina na LOUSA.

ALUNO: ${c?.nome ?? "o aluno"}, ${idade} anos, ${serie}.

COMO VOCÊ RESPONDE — REGRAS ABSOLUTAS:
1. MENOS TEXTO, MAIS CONTA. A explicação acontece na LOUSA, escrita passo a passo, como um professor escrevendo no quadro.
2. Cada passo tem DUAS partes:
   - "linha": o que você ESCREVE na lousa (a conta, a expressão, a substituição). Só matemática, curtíssimo.
   - "explica": UMA frase curta (máximo 12 palavras) dizendo o que fez naquele passo.
3. Entre 3 e 7 passos. Nunca pule etapa de cálculo: se distribuiu, mostre a distribuição; se passou pro outro lado, mostre a linha inteira.
4. RIGOR ABSOLUTO com SINAIS (−, +, ·, ÷, ², √), parênteses e pontuação. Use vírgula decimal (3,5) e · para multiplicar. Nunca escreva conta errada.
5. Sempre termine com o resultado destacado e, quando fizer sentido, a VERIFICAÇÃO (substituir e conferir) como um dos passos.
6. "fala": uma frase de abertura de professor roqueiro, no máximo 15 palavras. Nada de textão.
7. "pergunta_final": uma pergunta curta que faz o aluno praticar sozinho (um exercício parecido).
8. Se o aluno pedir só a resposta, você mostra o caminho na lousa mesmo assim — é assim que se aprende.
9. Se a pergunta não for de matemática, responda com bom humor e traga de volta pra matemática, usando passos simples.
10. Nunca use markdown, nunca use LaTeX, nunca use \\frac. Fração escreve como 3/4 ou usa a barra na linha.

Responda SEMPRE em JSON válido, exatamente neste formato:
{"titulo":"...","fala":"...","passos":[{"linha":"...","explica":"..."}],"resultado":"...","pergunta_final":"..."}`;
}

function extrairJson(texto: string): PipMatResposta | null {
  const bruto = texto.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "");
  const inicio = bruto.indexOf("{");
  const fim = bruto.lastIndexOf("}");
  if (inicio === -1 || fim === -1) return null;
  try {
    const o = JSON.parse(bruto.slice(inicio, fim + 1));
    const passos = Array.isArray(o.passos)
      ? o.passos
          .filter((p: any) => p && typeof p.linha === "string")
          .map((p: any) => ({ linha: String(p.linha), explica: String(p.explica ?? "") }))
      : [];
    if (passos.length === 0) return null;
    return {
      titulo: String(o.titulo ?? "Na lousa"),
      fala: String(o.fala ?? ""),
      passos,
      resultado: String(o.resultado ?? ""),
      pergunta_final: String(o.pergunta_final ?? ""),
    };
  } catch {
    return null;
  }
}

export const professorPipMatChat = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<PipMatResult> => {
    if (!process.env.GROQ_API_KEY && !process.env.LOVABLE_API_KEY) {
      return {
        ok: false,
        motivo: "erro",
        mensagem: "O Pip Teen ainda não está configurado. Avise um adulto.",
      };
    }

    const { chatCompletionFallback } = await import("./ai-chat-fallback");
    const historico = (data.historico ?? []).slice(-10);

    const result = await chatCompletionFallback({
      messages: [
        { role: "system", content: systemPrompt(data.crianca) },
        ...historico,
        { role: "user", content: data.pergunta },
      ],
      max_tokens: 900,
      temperature: 0.4,
      json: true,
      label: "pip-teen-mat",
    });

    if (!result.ok) {
      if (result.motivo === "creditos")
        return {
          ok: false,
          motivo: "creditos",
          mensagem: "Meus créditos acabaram por hoje. Avise um adulto pra recarregar.",
        };
      if (result.motivo === "limite")
        return {
          ok: false,
          motivo: "limite",
          mensagem: "Tô pensando demais agora. Espera uns minutinhos e manda de novo!",
        };
      return { ok: false, motivo: "erro", mensagem: "Deu ruim no amplificador. Tenta de novo!" };
    }

    const resposta = extrairJson(result.text);
    if (!resposta) {
      return {
        ok: false,
        motivo: "erro",
        mensagem: "Escrevi torto na lousa. Manda a pergunta de novo!",
      };
    }

    return { ok: true, resposta };
  });
